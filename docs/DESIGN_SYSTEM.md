# 設計系統

基於 Material Design 3，使用紫色主題。

## 配色

### Light Mode
- Primary: #65558F
- On Primary: #FFFFFF
- Surface: #FFFBFE
- On Surface: #1C1B1F

### Dark Mode
- Primary: #CFBDFE
- On Primary: #36275E
- Surface: #1C1B1F
- On Surface: #E6E1E5

## 字型

```css
font-family: 'Inter', 'Noto Sans TC', sans-serif;  /* 內文 */
font-family: 'JetBrains Mono', monospace;          /* 程式碼 */
```

## 響應式斷點

| 名稱 | 寬度 | 說明 |
|------|------|------|
| compact | < 600px | 手機 |
| medium | 600-840px | 平板直向 |
| expanded | 840-1200px | 平板橫向 |
| large | > 1200px | 桌面 |

## Tailwind 配置

CSS 變數定義於 `src/styles/theme.css`，Tailwind 透過 `tailwind.config.mjs` 整合：

```javascript
colors: {
  primary: 'var(--md-sys-color-primary)',
  onPrimary: 'var(--md-sys-color-on-primary)',
  surface: 'var(--md-sys-color-surface)',
  // ...
}
```

## 元件樣式

### 按鈕
使用 Tailwind utility classes，搭配 `hover:` 和 `dark:` 變體。

### 卡片
```css
bg-surfaceContainer border border-outline/20 rounded-xl
```

### 動畫
- AOS: 滾動觸發淡入動畫
- GSAP: Timeline dots 縮放動畫

## 主題切換

由 `src/scripts/theme-toggle.js` 處理：
- 讀取 localStorage 設定
- 監聽系統主題變更
- 切換 `dark` class 於 `<html>`

---

最後更新：2025-11-23
