# 系統架構文檔

本文檔詳細說明 Portfolio 專案的技術架構、設計決策與實作細節。

## 目錄

- [技術選型](#技術選型)
- [目錄結構](#目錄結構)
- [資料層架構](#資料層架構)
- [路由設計](#路由設計)
- [組件架構](#組件架構)
- [內容管理](#內容管理)
- [設計系統](#設計系統)

---

## 技術選型

### 核心技術棧

```yaml
前端框架: Astro 4.16
CSS 框架: Tailwind CSS 3.4
TypeScript: 5.6
內容管理: Markdown + YAML Front Matter
圖片處理: Astro Image Optimization
部署平台: GitHub Pages
DNS 管理: Cloudflare
域名配置: detectviz.com
版本控制: Git + GitHub
CI/CD: GitHub Actions
```

### 為何選擇 Astro？

**理由**：

1. **內容優先**
   - 原生支援 Markdown/MDX
   - 可直接使用現有 `project/*.md` 文檔
   - Content Collections 提供型別安全

2. **性能優異**
   - 靜態生成 (SSG)
   - 首次載入速度快
   - SEO 友好
   - 零 JavaScript（預設）

3. **組件化架構**
   - 可混用多個模板的優秀組件
   - 靈活組合
   - Islands Architecture

4. **輕量級**
   - 適合 portfolio 場景
   - 無需複雜的客戶端 JavaScript

5. **部署簡單**
   - 與 GitHub Pages 完美整合
   - 靜態檔案，無需伺服器

### 為何選擇 Tailwind CSS？

**理由**：

1. **Utility-first**：開發快速
2. **高度客製化**：符合 Material Design 3
3. **產出檔案小**：僅包含使用的 classes
4. **與 Astro 整合良好**
5. **社群資源豐富**

### 為何選擇 Material Design 3？

**理由**：

1. **成熟的設計系統**：Google 官方規範
2. **完整的配色系統**：深色/淺色主題
3. **無障礙性支援**：符合 WCAG 2.1 AA
4. **紫色主題**：專業且具識別度

---

## 設計系統

### Material Design 3

完整的設計系統文檔位於 `DESIGN_SYSTEM.md`。

**核心配色**（紫色主題）：
- Primary（深色）：`#CFBDFE`
- Primary（淺色）：`#65558F`
- Surface：`#1C1B1F`（深色）、`#FFFBFE`（淺色）

**Type Scale**：
- Display（大標題）：52px / 64px / 45px
- Headline（次標題）：32px / 28px / 24px
- Title（標題）：22px / 16px / 14px
- Body（內文）：16px / 14px
- Label（標籤）：14px / 12px / 11px

**響應式斷點**：
```javascript
{
  compact: '0px',        // < 600px (手機)
  medium: '600px',       // 600-840px (平板直向)
  expanded: '840px',     // 840-1200px (平板橫向、小筆電)
  large: '1200px',       // 1200-1600px (桌面)
  'extra-large': '1600px' // > 1600px (大螢幕)
}
```

### Tailwind CSS 配置

位於 `tailwind.config.mjs`，整合 Material Design 3：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        // ...
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    }
  }
}
```

---

## 效能優化

### 建置優化

**Astro 優化**：
- 靜態生成（SSG）
- 零 JavaScript（預設）
- Islands Architecture（按需載入）
- 自動 code splitting

**圖片優化**：
- Lazy loading（`loading="lazy"`）
- 響應式尺寸
- 適當的 alt 文字

**CSS 優化**：
- Tailwind CSS 自動 purge
- 關鍵 CSS 內聯
- 最小化輸出

### SEO 優化

**Meta Tags**：
- 每頁獨特的 title 與 description
- Open Graph tags
- Twitter Card tags
- Canonical URL

**Sitemap**：
- 自動生成（`@astrojs/sitemap`）
- 包含所有頁面
- 定期更新

**Robots.txt**：
```
User-agent: *
Allow: /
Sitemap: https://detectviz.com/sitemap-index.xml
```

---

## 未來擴展

### 計劃功能

1. **部落格系統**
   - 使用 Content Collections
   - Markdown 撰寫
   - RSS feed

2. **搜尋功能**
   - 使用 Fuse.js
   - 全文搜尋
   - 即時結果

3. **多語言支援**
   - i18n 整合
   - 繁體中文/英文
   - 語言切換

4. **互動式圖表**
   - Chart.js 整合
   - 技能雷達圖
   - 專案時間軸

---

**最後更新**：2025-11-19
**維護者**：Portfolio Project Team
