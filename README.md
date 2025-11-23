# Portfolio Website

DetectViz 的專業作品集網站，展示 SRE、數據工程與可觀測性領域的專案經驗與技術能力。

[![部署狀態](https://img.shields.io/badge/deploy-success-brightgreen)](https://detectviz.com)
[![Astro](https://img.shields.io/badge/Astro-4.16-blueviolet)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6)](https://www.typescriptlang.org/)

**網站連結**：[https://detectviz.com](https://detectviz.com)

---

## 專案簡介

本專案將過往的專案文檔與個人簡歷，重構為專業的 portfolio 網站展示平台。透過結合技術能力與設計背景，打造具有視覺吸引力且內容豐富的個人作品集。

### 核心特色

- **技術與設計的雙重專長**：3 年 SRE/數據工程經驗 + 設計背景
- **開源優先思維**：Grafana Stack、CNCF 深度應用
- **量化成果展示**：每日數億筆數據處理、50+ 儀表板設計、80% 效能提升
- **企業級專案經驗**：台積電、台泥儲能、國泰金控等知名企業案例

### 主要功能

- 13 個專案完整展示
- Lightbox 專案作品圖片檢視功能
- 響應式設計（手機/平板/桌面）
- 深色/淺色模式
- 資格認證展示
- 專案分類篩選功能

---

## 技術棧

```yaml
前端框架: Astro 4.16
CSS 框架: Tailwind CSS 3.4
TypeScript: 5.6
設計系統: Material Design 3（紫色系）
內容管理: Content Collections + Markdown
部署平台: GitHub Pages
DNS 管理: Cloudflare
域名配置: detectviz.com
版本控制: Git + GitHub
CI/CD: GitHub Actions
```
---

## 快速開始

### 環境需求

- Node.js 18.0 或更高版本
- npm 9.0 或更高版本
- Git 2.30 或更高版本

### 安裝與執行

```bash
# 複製專案
git clone https://github.com/detectviz/portfolio.git
cd portfolio

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
# 網站將在 http://localhost:4321 啟動

# 建置生產版本
npm run build

# 預覽建置結果
npm run preview
```

### 常用指令

```bash
# 開發模式（熱重載）
npm run dev

# 建置生產版本
npm run build

# 預覽建置結果
npm run preview

# TypeScript 檢查
npm run check

# 內容驗證
npm run validate:content

# 斷鏈檢查
npm run check:links

# 專案稽核
npm run audit:projects

# 部署前檢查
npm run pre-deploy
```

---

## 部署

本專案部署於 GitHub Pages，使用 Cloudflare 管理 DNS，自定義網域為 `detectviz.com`。

### 部署流程

```
開發者提交 → GitHub Repository → GitHub Actions → GitHub Pages → Cloudflare CDN → 使用者
```

### 自動部署

```bash
# 提交變更到 main 分支
git add .
git commit -m "feat: 新功能"
git push origin main

# GitHub Actions 會自動執行：
# 1. 內容驗證（validate:content）
# 2. 斷鏈檢查（check:links）
# 3. 建置（npm run build）
# 4. 部署到 GitHub Pages
```

詳細部署配置請參閱 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)。

---

## 授權資訊

本專案採用 MIT 授權。詳見 [LICENSE](LICENSE) 檔案。

**版權所有** © 2025 DetectViz

---

## 聯絡資訊

- **網站**：[https://detectviz.com](https://detectviz.com)
- **Email**：contact@detectviz.com
- **GitHub**：[@detectviz](https://github.com/detectviz)
- **LinkedIn**：[linkedin.com/in/detectviz](https://www.linkedin.com/in/detectviz)

---

**專案版本**：v1.4.0
**最後更新**：2025-11-20
**維護者**：DetectViz Portfolio Team
