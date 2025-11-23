# 部署指南

## 部署架構

```
開發者提交 → GitHub → GitHub Actions → GitHub Pages → Cloudflare CDN → 使用者
```

## 環境配置

### GitHub Pages
- Source: GitHub Actions
- Custom domain: detectviz.com
- Enforce HTTPS: 啟用

### Cloudflare DNS

**A Records（指向 GitHub Pages）**:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**CNAME**:
- www → detectviz.github.io

### SSL/TLS
- 加密模式: Full (strict)
- 最低 TLS 版本: 1.2
- Always Use HTTPS: 啟用

## 部署流程

### 自動部署

```bash
git add .
git commit -m "feat: 新功能"
git push origin main
```

GitHub Actions 自動執行建置與部署。

### 手動部署

1. 前往 GitHub Actions
2. 選擇 "Deploy to GitHub Pages"
3. 點選 "Run workflow"

## 本地建置

```bash
npm ci
npm run build
npm run preview
```

## 故障排除

### 部署失敗
1. 檢查 GitHub Actions 日誌
2. 本地執行 `npm run build` 確認無錯誤
3. 確認 Actions 有 write 權限

### 網域無法訪問
1. 確認 `public/CNAME` 內容正確
2. 檢查 DNS 設定: `dig detectviz.com`
3. 等待 DNS 傳播（最長 48 小時）

### HTTPS 錯誤
1. Cloudflare SSL/TLS 設為 Full (strict)
2. GitHub Pages 勾選 Enforce HTTPS

## 回滾

```bash
# 查看 commits
git log --oneline -5

# 回滾
git revert HEAD
git push origin main
```

---

最後更新：2025-11-23
