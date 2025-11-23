# DetectViz Portfolio

個人作品集網站，展示 SRE、數據工程與可觀測性領域的專案經驗。

**網站**: https://detectviz.com

## 技術棧

- Astro 5.x
- Tailwind CSS 3.4
- Preact
- TypeScript

## 開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置
npm run build

# 預覽建置結果
npm run preview
```

## 目錄結構

```
src/
├── assets/        # 靜態資源
├── components/    # Astro 元件
├── data/          # 資料檔案
├── layouts/       # 頁面佈局
├── pages/         # 路由頁面
├── scripts/       # 客戶端腳本
├── styles/        # 全域樣式
├── types/         # TypeScript 型別
└── utils/         # 工具函數
```

## 資料維護

### 更新個人資訊
編輯 `src/data/me.ts`

### 更新專案
編輯 `src/data/projects.ts`

### 更新技能
編輯 `src/data/skills.ts`

### 更新翻譯
編輯 `src/data/zh-tw.json`

## 部署

推送至 main 分支後，GitHub Actions 自動部署至 GitHub Pages。

詳見 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

## 文件

- [ARCHITECTURE.md](docs/ARCHITECTURE.md) - 系統架構
- [DEPLOYMENT.md](docs/DEPLOYMENT.md) - 部署指南
- [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) - 設計系統
- [CHANGELOG.md](docs/CHANGELOG.md) - 變更日誌

## 授權

MIT License

---

最後更新：2025-11-23
