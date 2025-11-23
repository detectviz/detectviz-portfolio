# 部署指南

本文檔說明如何部署 Portfolio 專案到 GitHub Pages，以及 Cloudflare DNS 配置。

## 目錄

- [概述](#概述)
- [前置準備](#前置準備)
- [GitHub Pages 配置](#github-pages-配置)
- [GitHub Actions 設定](#github-actions-設定)
- [Cloudflare DNS 配置](#cloudflare-dns-配置)
- [自定義網域設定](#自定義網域設定)
- [部署流程](#部署流程)
- [故障排除](#故障排除)
- [回滾策略](#回滾策略)

---

## 概述

### 部署架構

```
開發者提交 → GitHub Repository → GitHub Actions → GitHub Pages → Cloudflare CDN → 使用者
```

### 技術棧

- **靜態網站生成器**：Astro 4.16
- **託管平台**：GitHub Pages
- **CI/CD**：GitHub Actions
- **DNS 管理**：Cloudflare
- **網域註冊**：GoDaddy
- **SSL 憑證**：Cloudflare 提供

### 部署目標

- 主網域：`https://detectviz.com`
- GitHub Pages URL：`https://detectviz.github.io`
- 建置輸出：`dist/` 目錄

---

## 前置準備

### 1. 檢查建置

在部署前，確保專案可以正常建置：

```bash
# 安裝依賴
npm ci

# 執行驗證
npm run validate:content
npm run check:links

# 建置專案
npm run build

# 預覽建置結果
npm run preview
```

### 2. 確認 Astro 配置

檢查 `astro.config.mjs` 設定：

```javascript
export default defineConfig({
  site: 'https://detectviz.com',
  base: '/',
  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ],
  output: 'static'
});
```

### 3. 確認 CNAME 檔案

確保 `public/CNAME` 檔案存在且內容正確：

```
detectviz.com
```

此檔案會被自動複製到 `dist/CNAME`，告訴 GitHub Pages 使用自定義網域。

---

## GitHub Pages 配置

### Repository 設定

1. **前往 GitHub Repository**
   - 網址：`https://github.com/detectviz/portfolio`

2. **開啟 Settings > Pages**
   - 左側選單點選 "Pages"

3. **配置 Source**
   - Source：選擇 "GitHub Actions"
   - 不要選擇 "Deploy from a branch"

4. **配置 Custom Domain（可選）**
   - Custom domain：輸入 `detectviz.com`
   - 勾選 "Enforce HTTPS"

5. **設定 Permissions**
   - Settings > Actions > General
   - Workflow permissions：選擇 "Read and write permissions"
   - 勾選 "Allow GitHub Actions to create and approve pull requests"

### 權限設定

GitHub Actions 需要以下權限：

```yaml
permissions:
  contents: read    # 讀取程式碼
  pages: write      # 寫入 GitHub Pages
  id-token: write   # 寫入 ID token（用於部署驗證）
```

---

## GitHub Actions 設定

### Workflow 檔案

檔案位置：`.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  # 內容驗證 Job
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Validate project schemas
        run: npm run validate:content

      - name: Check for broken links
        run: npm run check:links

  # 建置 Job
  build:
    needs: validate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Astro site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  # 部署 Job（僅在 main branch）
  deploy:
    needs: build
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Workflow 觸發條件

1. **Push to main**：自動部署
2. **Pull Request to main**：僅驗證與建置（不部署）
3. **手動觸發**：透過 GitHub UI 的 "Run workflow" 按鈕

### Workflow 執行流程

```
1. Validate (驗證內容)
   ├─ npm run validate:content
   └─ npm run check:links

2. Build (建置)
   ├─ npm ci
   ├─ npm run build
   └─ Upload artifact

3. Deploy (部署，僅 main)
   └─ Deploy to GitHub Pages
```

---

## Cloudflare DNS 配置

### 1. 登入 Cloudflare

- 網址：`https://dash.cloudflare.com`
- 選擇網域：`detectviz.com`

### 2. 新增 DNS Records

**主網域 A Records**（指向 GitHub Pages）：

| Type | Name | Target | Proxy Status |
|------|------|--------|--------------|
| A | @ | 185.199.108.153 | Proxied（橘色雲朵） |
| A | @ | 185.199.109.153 | Proxied |
| A | @ | 185.199.110.153 | Proxied |
| A | @ | 185.199.111.153 | Proxied |

**WWW 子網域**：

| Type | Name | Target | Proxy Status |
|------|------|--------|--------------|
| CNAME | www | detectviz.github.io | Proxied |

**Blog 子網域**（未來擴充）：

| Type | Name | Target | Proxy Status |
|------|------|--------|--------------|
| CNAME | blog | （待設定） | Proxied |

### 3. SSL/TLS 設定

進入 "SSL/TLS" 設定：

- **加密模式**：完整（嚴格）/ Full (strict)
- **最低 TLS 版本**：TLS 1.2
- **Always Use HTTPS**：開啟
- **Automatic HTTPS Rewrites**：開啟
- **TLS 1.3**：啟用

### 4. 效能優化設定

進入 "Speed" 或 "Optimization" 設定：

**Auto Minify**：
- HTML：勾選
- CSS：勾選
- JavaScript：勾選

**Brotli 壓縮**：
- 啟用

**HTTP/2 & HTTP/3**：
- HTTP/2：啟用
- HTTP/3 (QUIC)：啟用

**Rocket Loader**：
- 可選（測試後決定是否啟用）
- 可能影響 Astro 的 Islands

### 5. 快取設定

進入 "Caching" 設定：

- **Caching Level**：Standard
- **Browser Cache TTL**：4 hours（或依需求調整）
- **Always Online**：啟用

### 6. 安全性設定

- **Security Level**：Medium
- **Bot Fight Mode**：可選
- **Challenge Passage**：30 minutes

---

## 自定義網域設定

### 在 Repository 設定

**建立 CNAME 檔案**：

```bash
# 檔案：public/CNAME
detectviz.com
```

此檔案會被 Astro 建置時複製到 `dist/CNAME`。

### 在 GoDaddy 設定

1. **登入 GoDaddy**
   - 前往 "我的產品" > "網域"

2. **點選 detectviz.com**
   - 點選 "管理 DNS"

3. **更新 Nameservers**
   - 將 Nameservers 改為 Cloudflare 提供的 nameservers
   - 範例：
     ```
     alice.ns.cloudflare.com
     bob.ns.cloudflare.com
     ```

4. **等待 DNS 傳播**
   - 通常需要 10-30 分鐘
   - 最長可能需要 48 小時

### 驗證網域配置

```bash
# 檢查 DNS A Records
dig detectviz.com

# 檢查 CNAME
dig www.detectviz.com

# 檢查 HTTPS
curl -I https://detectviz.com
```

---

## 部署流程

### 自動部署（推薦）

1. **提交變更到 main 分支**

```bash
git add .
git commit -m "feat: 新功能"
git push origin main
```

2. **監控 GitHub Actions**
   - 前往 `https://github.com/detectviz/portfolio/actions`
   - 查看 workflow 執行狀態
   - 檢查是否有錯誤

3. **驗證部署結果**
   - 等待 1-3 分鐘（建置 + 部署）
   - 訪問 `https://detectviz.com`
   - 檢查變更是否生效

### 手動部署

1. **觸發手動部署**
   - 前往 `https://github.com/detectviz/portfolio/actions`
   - 選擇 "Deploy to GitHub Pages" workflow
   - 點選 "Run workflow"
   - 選擇 `main` 分支
   - 點選 "Run workflow" 確認

2. **監控執行狀態**
   - 同自動部署步驟 2-3

### 部署前檢查清單

執行以下檢查確保部署品質：

```bash
# 1. 驗證內容
npm run validate:content

# 2. 檢查斷鏈
npm run check:links

# 3. 建置測試
npm run build

# 4. 本地預覽
npm run preview

# 5. 檢查建置輸出
ls -la dist/
```

---

## 故障排除

### 問題：部署失敗

**可能原因**：
- 建置錯誤
- 權限不足
- Workflow 配置錯誤

**解決方式**：

1. **檢查 GitHub Actions 日誌**
   ```
   前往 Actions > 點選失敗的 workflow > 查看詳細日誌
   ```

2. **本地測試建置**
   ```bash
   npm run build
   ```

3. **檢查權限設定**
   - Settings > Actions > General
   - Workflow permissions：確保有 "Read and write permissions"

### 問題：網域無法訪問

**可能原因**：
- DNS 尚未傳播
- CNAME 檔案錯誤
- Cloudflare 設定錯誤

**解決方式**：

1. **檢查 CNAME 檔案**
   ```bash
   cat dist/CNAME
   # 應顯示：detectviz.com
   ```

2. **檢查 DNS 設定**
   ```bash
   dig detectviz.com
   # 應顯示 Cloudflare 的 IP
   ```

3. **清除 DNS 快取**
   ```bash
   # macOS
   sudo dscacheutil -flushcache

   # Windows
   ipconfig /flushdns
   ```

4. **等待 DNS 傳播**
   - 使用 https://dnschecker.org 檢查全球傳播狀態

### 問題：HTTPS 憑證錯誤

**可能原因**：
- Cloudflare SSL/TLS 設定錯誤
- GitHub Pages HTTPS 未啟用

**解決方式**：

1. **檢查 Cloudflare SSL/TLS 設定**
   - 加密模式應為 "完整（嚴格）"

2. **檢查 GitHub Pages 設定**
   - Settings > Pages
   - 確認 "Enforce HTTPS" 已勾選

3. **重新驗證憑證**
   - Cloudflare > SSL/TLS > Edge Certificates
   - 檢查憑證狀態

### 問題：圖片無法載入

**可能原因**：
- 路徑錯誤
- 圖片未被複製到 dist/

**解決方式**：

1. **檢查圖片路徑**
   - 確保使用 `/images/` 而非相對路徑

2. **檢查 dist/ 目錄**
   ```bash
   ls -R dist/images/
   ```

3. **檢查 public/ 目錄結構**
   ```bash
   ls -R public/images/
   ```

### 問題：JavaScript 無法執行

**可能原因**：
- Astro Islands 未正確載入
- Cloudflare Rocket Loader 干擾

**解決方式**：

1. **檢查瀏覽器 Console**
   - F12 > Console
   - 查看錯誤訊息

2. **停用 Rocket Loader**
   - Cloudflare > Speed > Optimization
   - Rocket Loader：關閉

3. **檢查 script 標籤**
   - 確保使用正確的 client directives

---

## 回滾策略

### 方法 1：Git Revert

```bash
# 查看最近的 commits
git log --oneline -5

# 回滾到上一個 commit
git revert HEAD

# 推送回滾
git push origin main
```

### 方法 2：重新部署舊版本

```bash
# 切換到舊版本
git checkout <commit-hash>

# 建立新分支
git checkout -b rollback-to-<version>

# 推送並合併到 main
git push origin rollback-to-<version>
# 然後在 GitHub 建立 Pull Request
```

### 方法 3：手動上傳

1. **本地建置舊版本**
   ```bash
   git checkout <commit-hash>
   npm ci
   npm run build
   ```

2. **手動上傳到 gh-pages 分支**
   ```bash
   git checkout gh-pages
   rm -rf *
   cp -r dist/* .
   git add .
   git commit -m "Manual rollback to <version>"
   git push origin gh-pages
   ```

### 緊急停機

如需緊急停機網站：

1. **在 Cloudflare 設定維護頁面**
   - Rules > Page Rules
   - 建立規則重導向到維護頁面

2. **或停用 Cloudflare Proxy**
   - DNS > 將 Proxy 改為 DNS only（灰色雲朵）

---

## 監控與維護

### 定期檢查

**每週**：
- 檢查 GitHub Actions 執行狀態
- 檢查網站可訪問性
- 檢查 SSL 憑證有效期

**每月**：
- 檢查 Cloudflare 分析數據
- 檢查建置速度
- 檢查 Lighthouse 分數

### 效能監控

使用以下工具監控效能：

- **PageSpeed Insights**：https://pagespeed.web.dev/
- **GTmetrix**：https://gtmetrix.com/
- **WebPageTest**：https://www.webpagetest.org/
- **Cloudflare Analytics**：Cloudflare Dashboard

### 更新依賴

定期更新依賴套件：

```bash
# 檢查過時套件
npm outdated

# 更新所有套件
npm update

# 或使用 npm-check-updates
npx npm-check-updates -u
npm install
```

---

## 參考資源

### 官方文檔

- [Astro 部署指南](https://docs.astro.build/en/guides/deploy/)
- [GitHub Pages 文檔](https://docs.github.com/en/pages)
- [GitHub Actions 文檔](https://docs.github.com/en/actions)
- [Cloudflare DNS 文檔](https://developers.cloudflare.com/dns/)

### 工具

- [DNS Checker](https://dnschecker.org) - 檢查 DNS 傳播
- [SSL Labs](https://www.ssllabs.com/ssltest/) - 檢查 SSL 配置
- [PageSpeed Insights](https://pagespeed.web.dev/) - 效能測試

---

**最後更新**：2025-11-19
**維護者**：Portfolio Project Team
