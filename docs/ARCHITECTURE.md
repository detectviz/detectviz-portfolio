# 系統架構

## 技術棧

| 類別 | 技術 | 版本 |
|------|------|------|
| 框架 | Astro | 5.x |
| 樣式 | Tailwind CSS | 3.4 |
| UI 互動 | Preact | 10.x |
| 動畫 | AOS, GSAP | - |
| 部署 | GitHub Pages | - |
| DNS/CDN | Cloudflare | - |

## 目錄結構

```
src/
├── assets/           # 靜態資源（avatar, logo）
├── components/
│   ├── layout/       # 佈局元件（Navbar）
│   ├── sections/     # 頁面區塊（Hero, Skills, Projects 等）
│   └── ui/           # UI 元件（ThemeToggle, TechItem, Carousel）
├── data/             # 資料檔案
│   ├── me.ts         # 個人資訊
│   ├── projects.ts   # 專案列表
│   ├── skills.ts     # 技能資料
│   ├── certificates.ts
│   └── zh-tw.json    # 翻譯字串
├── layouts/          # 頁面佈局
├── pages/            # 路由頁面
├── scripts/          # 客戶端腳本
├── styles/           # 全域樣式
├── types/            # TypeScript 型別定義
└── utils/            # 工具函數（i18n）
```

## 資料流

```
data/*.ts → components/sections/*.astro → layouts/Layout.astro → pages/index.astro
```

## 關鍵設計決策

### 單頁式架構
- 所有內容在 `index.astro` 中組合
- 使用錨點導航（#hero, #skills, #projects 等）
- 適合作品集展示場景

### 資料管理
- 集中於 `src/data/` 目錄
- TypeScript 型別安全
- 翻譯字串與資料分離

### 樣式系統
- `theme.css`: CSS 變數（Material Design 3 配色）
- `global.css`: Tailwind 擴展與通用樣式
- 元件內 `<style>` 標籤: 元件特定樣式

### 互動元件
- Preact 用於需要客戶端互動的元件（Carousel, Obfuscate）
- 其餘使用 Astro 靜態元件

## 擴展指南

### 新增頁面區塊
1. 在 `src/components/sections/` 建立 `*.astro`
2. 在 `src/data/zh-tw.json` 新增翻譯
3. 在 `src/pages/index.astro` 引入並放置

### 新增資料欄位
1. 更新 `src/data/*.ts` 檔案
2. 更新對應的 `src/types/*.ts` 型別
3. 在元件中使用新欄位

### 新增語言
1. 複製 `src/data/zh-tw.json` 為新語言檔
2. 在 `src/utils/i18n.ts` 註冊新語言
3. 更新 `astro.config.mjs` 的 i18n 設定

## 效能優化

- Astro 靜態生成（零 JS 預設）
- Tailwind CSS 自動 purge
- 圖片使用 `astro:assets` 優化
- AOS/GSAP 延遲載入

---

最後更新：2025-11-23
