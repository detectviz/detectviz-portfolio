# DetectViz Portfolio 設計系統

基於 Material Design 3 設計規範，打造專業的數據視覺化工程師作品集網站。

---

## 設計原則

- **專業簡潔**：以數據與成果為核心，避免過度裝飾
- **可讀性優先**：確保內容清晰易讀，支援長時間閱讀
- **一致性**：遵循 Material Design 3 規範，確保設計一致性
- **無障礙**：符合 WCAG 2.1 AA 標準

---

## 配色系統 (Material Design 3)

### 配色理念

採用 Material Design 3 標準配色系統，使用紫色作為主色調，展現專業、現代的視覺風格。

### 深色主題 (Dark Theme) - 預設主題

```css
:root {
  /* Primary Colors - 紫色系 */
  --md-sys-color-primary: rgb(207 189 254);              /* #CFBDFE */
  --md-sys-color-surface-tint: rgb(207 189 254);
  --md-sys-color-on-primary: rgb(54 39 93);              /* #36275D */
  --md-sys-color-primary-container: rgb(77 61 117);      /* #4D3D75 */
  --md-sys-color-on-primary-container: rgb(233 221 255); /* #E9DDFF */

  /* Secondary Colors */
  --md-sys-color-secondary: rgb(208 188 254);            /* #D0BCFE */
  --md-sys-color-on-secondary: rgb(54 38 93);            /* #36265D */
  --md-sys-color-secondary-container: rgb(77 61 117);    /* #4D3D75 */
  --md-sys-color-on-secondary-container: rgb(233 221 255); /* #E9DDFF */

  /* Tertiary Colors - 粉紅色系 */
  --md-sys-color-tertiary: rgb(255 176 201);             /* #FFB0C9 */
  --md-sys-color-on-tertiary: rgb(84 29 51);             /* #541D33 */
  --md-sys-color-tertiary-container: rgb(111 51 73);     /* #6F3349 */
  --md-sys-color-on-tertiary-container: rgb(255 217 227); /* #FFD9E3 */

  /* Error Colors */
  --md-sys-color-error: rgb(255 180 171);                /* #FFB4AB */
  --md-sys-color-on-error: rgb(105 0 5);                 /* #690005 */
  --md-sys-color-error-container: rgb(147 0 10);         /* #93000A */
  --md-sys-color-on-error-container: rgb(255 218 214);   /* #FFDAD6 */

  /* Surface & Background */
  --md-sys-color-background: rgb(20 18 24);              /* #141218 */
  --md-sys-color-on-background: rgb(230 224 233);        /* #E6E0E9 */
  --md-sys-color-surface: rgb(20 18 24);                 /* #141218 */
  --md-sys-color-on-surface: rgb(231 224 232);           /* #E7E0E8 */
  --md-sys-color-surface-variant: rgb(73 69 78);         /* #49454E */
  --md-sys-color-on-surface-variant: rgb(202 196 207);   /* #CAC4CF */

  /* Surface Containers */
  --md-sys-color-surface-dim: rgb(20 18 24);             /* #141218 */
  --md-sys-color-surface-bright: rgb(59 56 62);          /* #3B383E */
  --md-sys-color-surface-container-lowest: rgb(15 13 19); /* #0F0D13 */
  --md-sys-color-surface-container-low: rgb(29 27 32);    /* #1D1B20 */
  --md-sys-color-surface-container: rgb(33 31 36);        /* #211F24 */
  --md-sys-color-surface-container-high: rgb(43 41 47);   /* #2B292F */
  --md-sys-color-surface-container-highest: rgb(54 52 58); /* #36343A */

  /* Outline & Border */
  --md-sys-color-outline: rgb(148 143 153);              /* #948F99 */
  --md-sys-color-outline-variant: rgb(73 69 78);         /* #49454E */

  /* Inverse Colors */
  --md-sys-color-inverse-surface: rgb(231 224 232);      /* #E7E0E8 */
  --md-sys-color-inverse-on-surface: rgb(50 47 53);      /* #322F35 */
  --md-sys-color-inverse-primary: rgb(101 85 143);       /* #65558F */

  /* Fixed Colors */
  --md-sys-color-primary-fixed: rgb(233 221 255);        /* #E9DDFF */
  --md-sys-color-on-primary-fixed: rgb(32 16 71);        /* #201047 */
  --md-sys-color-primary-fixed-dim: rgb(207 189 254);    /* #CFBDFE */
  --md-sys-color-on-primary-fixed-variant: rgb(77 61 117); /* #4D3D75 */

  /* Utility */
  --md-sys-color-shadow: rgb(0 0 0);                     /* #000000 */
  --md-sys-color-scrim: rgb(0 0 0);                      /* #000000 */

  /* Extended Colors (可選的藍色系強調色) */
  --md-extended-color-custom-color1-color: rgb(154 203 250);        /* #9ACBFA */
  --md-extended-color-custom-color1-on-color: rgb(0 51 82);         /* #003352 */
  --md-extended-color-custom-color1-color-container: rgb(11 74 114); /* #0B4A72 */
  --md-extended-color-custom-color1-on-color-container: rgb(205 229 255); /* #CDE5FF */
}
```

### 淺色主題 (Light Theme)

```css
.light {
  /* Primary Colors - 紫色系 */
  --md-sys-color-primary: rgb(101 85 143);               /* #65558F */
  --md-sys-color-surface-tint: rgb(101 85 143);
  --md-sys-color-on-primary: rgb(255 255 255);           /* #FFFFFF */
  --md-sys-color-primary-container: rgb(233 221 255);    /* #E9DDFF */
  --md-sys-color-on-primary-container: rgb(77 61 117);   /* #4D3D75 */

  /* Secondary Colors */
  --md-sys-color-secondary: rgb(101 85 143);             /* #65558F */
  --md-sys-color-on-secondary: rgb(255 255 255);         /* #FFFFFF */
  --md-sys-color-secondary-container: rgb(233 221 255);  /* #E9DDFF */
  --md-sys-color-on-secondary-container: rgb(77 61 117); /* #4D3D75 */

  /* Tertiary Colors - 粉紅色系 */
  --md-sys-color-tertiary: rgb(139 74 97);               /* #8B4A61 */
  --md-sys-color-on-tertiary: rgb(255 255 255);          /* #FFFFFF */
  --md-sys-color-tertiary-container: rgb(255 217 227);   /* #FFD9E3 */
  --md-sys-color-on-tertiary-container: rgb(111 51 73);  /* #6F3349 */

  /* Error Colors */
  --md-sys-color-error: rgb(186 26 26);                  /* #BA1A1A */
  --md-sys-color-on-error: rgb(255 255 255);             /* #FFFFFF */
  --md-sys-color-error-container: rgb(255 218 214);      /* #FFDAD6 */
  --md-sys-color-on-error-container: rgb(147 0 10);      /* #93000A */

  /* Surface & Background */
  --md-sys-color-background: rgb(253 247 255);           /* #FDF7FF */
  --md-sys-color-on-background: rgb(29 27 32);           /* #1D1B20 */
  --md-sys-color-surface: rgb(254 247 255);              /* #FEF7FF */
  --md-sys-color-on-surface: rgb(29 27 32);              /* #1D1B20 */
  --md-sys-color-surface-variant: rgb(231 224 235);      /* #E7E0EB */
  --md-sys-color-on-surface-variant: rgb(73 69 78);      /* #49454E */

  /* Surface Containers */
  --md-sys-color-surface-dim: rgb(222 216 224);          /* #DED8E0 */
  --md-sys-color-surface-bright: rgb(254 247 255);       /* #FEF7FF */
  --md-sys-color-surface-container-lowest: rgb(255 255 255); /* #FFFFFF */
  --md-sys-color-surface-container-low: rgb(248 241 250);    /* #F8F1FA */
  --md-sys-color-surface-container: rgb(242 236 244);        /* #F2ECF4 */
  --md-sys-color-surface-container-high: rgb(236 230 238);   /* #ECE6EE */
  --md-sys-color-surface-container-highest: rgb(231 224 232); /* #E7E0E8 */

  /* Outline & Border */
  --md-sys-color-outline: rgb(122 117 127);              /* #7A757F */
  --md-sys-color-outline-variant: rgb(202 196 207);      /* #CAC4CF */

  /* Inverse Colors */
  --md-sys-color-inverse-surface: rgb(50 47 53);         /* #322F35 */
  --md-sys-color-inverse-on-surface: rgb(245 239 247);   /* #F5EFF7 */
  --md-sys-color-inverse-primary: rgb(207 189 254);      /* #CFBDFE */

  /* Fixed Colors */
  --md-sys-color-primary-fixed: rgb(233 221 255);        /* #E9DDFF */
  --md-sys-color-on-primary-fixed: rgb(32 16 71);        /* #201047 */
  --md-sys-color-primary-fixed-dim: rgb(207 189 254);    /* #CFBDFE */
  --md-sys-color-on-primary-fixed-variant: rgb(77 61 117); /* #4D3D75 */

  /* Utility */
  --md-sys-color-shadow: rgb(0 0 0);                     /* #000000 */
  --md-sys-color-scrim: rgb(0 0 0);                      /* #000000 */

  /* Extended Colors (可選的藍色系強調色) */
  --md-extended-color-custom-color1-color: rgb(46 98 140);          /* #2E628C */
  --md-extended-color-custom-color1-on-color: rgb(255 255 255);     /* #FFFFFF */
  --md-extended-color-custom-color1-color-container: rgb(205 229 255); /* #CDE5FF */
  --md-extended-color-custom-color1-on-color-container: rgb(11 74 114); /* #0B4A72 */
}
```

---

## 字體系統 (Typography)

基於 Material Design 3 的 Type Scale，使用 Inter 作為主要字體。

### 字體家族

```css
--md-sys-typescale-font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--md-sys-typescale-font-family-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
--md-sys-typescale-font-family-tc: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
```

### Type Scale

```css
/* Display Large */
--md-sys-typescale-display-large-font-size: 57px;
--md-sys-typescale-display-large-line-height: 64px;
--md-sys-typescale-display-large-font-weight: 400;

/* Display Medium */
--md-sys-typescale-display-medium-font-size: 45px;
--md-sys-typescale-display-medium-line-height: 52px;
--md-sys-typescale-display-medium-font-weight: 400;

/* Display Small */
--md-sys-typescale-display-small-font-size: 36px;
--md-sys-typescale-display-small-line-height: 44px;
--md-sys-typescale-display-small-font-weight: 400;

/* Headline Large */
--md-sys-typescale-headline-large-font-size: 32px;
--md-sys-typescale-headline-large-line-height: 40px;
--md-sys-typescale-headline-large-font-weight: 400;

/* Headline Medium */
--md-sys-typescale-headline-medium-font-size: 28px;
--md-sys-typescale-headline-medium-line-height: 36px;
--md-sys-typescale-headline-medium-font-weight: 400;

/* Headline Small */
--md-sys-typescale-headline-small-font-size: 24px;
--md-sys-typescale-headline-small-line-height: 32px;
--md-sys-typescale-headline-small-font-weight: 400;

/* Title Large */
--md-sys-typescale-title-large-font-size: 22px;
--md-sys-typescale-title-large-line-height: 28px;
--md-sys-typescale-title-large-font-weight: 500;

/* Title Medium */
--md-sys-typescale-title-medium-font-size: 16px;
--md-sys-typescale-title-medium-line-height: 24px;
--md-sys-typescale-title-medium-font-weight: 500;

/* Title Small */
--md-sys-typescale-title-small-font-size: 14px;
--md-sys-typescale-title-small-line-height: 20px;
--md-sys-typescale-title-small-font-weight: 500;

/* Body Large */
--md-sys-typescale-body-large-font-size: 16px;
--md-sys-typescale-body-large-line-height: 24px;
--md-sys-typescale-body-large-font-weight: 400;

/* Body Medium */
--md-sys-typescale-body-medium-font-size: 14px;
--md-sys-typescale-body-medium-line-height: 20px;
--md-sys-typescale-body-medium-font-weight: 400;

/* Body Small */
--md-sys-typescale-body-small-font-size: 12px;
--md-sys-typescale-body-small-line-height: 16px;
--md-sys-typescale-body-small-font-weight: 400;

/* Label Large */
--md-sys-typescale-label-large-font-size: 14px;
--md-sys-typescale-label-large-line-height: 20px;
--md-sys-typescale-label-large-font-weight: 500;

/* Label Medium */
--md-sys-typescale-label-medium-font-size: 12px;
--md-sys-typescale-label-medium-line-height: 16px;
--md-sys-typescale-label-medium-font-weight: 500;

/* Label Small */
--md-sys-typescale-label-small-font-size: 11px;
--md-sys-typescale-label-small-line-height: 16px;
--md-sys-typescale-label-small-font-weight: 500;
```

---

## 間距系統 (Spacing)

基於 8px 基準線網格系統。

```css
--md-sys-spacing-0: 0px;      /* 0 */
--md-sys-spacing-1: 4px;      /* 0.5x */
--md-sys-spacing-2: 8px;      /* 1x */
--md-sys-spacing-3: 12px;     /* 1.5x */
--md-sys-spacing-4: 16px;     /* 2x */
--md-sys-spacing-5: 20px;     /* 2.5x */
--md-sys-spacing-6: 24px;     /* 3x */
--md-sys-spacing-7: 28px;     /* 3.5x */
--md-sys-spacing-8: 32px;     /* 4x */
--md-sys-spacing-10: 40px;    /* 5x */
--md-sys-spacing-12: 48px;    /* 6x */
--md-sys-spacing-16: 64px;    /* 8x */
--md-sys-spacing-20: 80px;    /* 10x */
--md-sys-spacing-24: 96px;    /* 12x */
```

---

## 形狀系統 (Shape)

Material Design 3 的圓角系統。

```css
--md-sys-shape-corner-none: 0px;
--md-sys-shape-corner-extra-small: 4px;
--md-sys-shape-corner-small: 8px;
--md-sys-shape-corner-medium: 12px;
--md-sys-shape-corner-large: 16px;
--md-sys-shape-corner-extra-large: 28px;
--md-sys-shape-corner-full: 9999px;
```

---

## Elevation (高度層級)

Material Design 3 使用 Surface Tint 與 Shadow 組合實現高度效果。

```css
/* Elevation Levels */
--md-sys-elevation-level0: none;
--md-sys-elevation-level1:
  0px 1px 2px 0px rgba(0, 0, 0, 0.30),
  0px 1px 3px 1px rgba(0, 0, 0, 0.15);
--md-sys-elevation-level2:
  0px 1px 2px 0px rgba(0, 0, 0, 0.30),
  0px 2px 6px 2px rgba(0, 0, 0, 0.15);
--md-sys-elevation-level3:
  0px 4px 8px 3px rgba(0, 0, 0, 0.15),
  0px 1px 3px 0px rgba(0, 0, 0, 0.30);
--md-sys-elevation-level4:
  0px 6px 10px 4px rgba(0, 0, 0, 0.15),
  0px 2px 3px 0px rgba(0, 0, 0, 0.30);
--md-sys-elevation-level5:
  0px 8px 12px 6px rgba(0, 0, 0, 0.15),
  0px 4px 4px 0px rgba(0, 0, 0, 0.30);
```

---

## State Layers (互動狀態)

Material Design 3 使用 State Layers 實現 hover, focus, pressed 等狀態效果。

```css
/* State Layer Opacity */
--md-sys-state-hover-opacity: 0.08;
--md-sys-state-focus-opacity: 0.12;
--md-sys-state-pressed-opacity: 0.12;
--md-sys-state-dragged-opacity: 0.16;
```

**使用範例**：
```css
.button:hover {
  background-color: var(--md-sys-color-primary);
  box-shadow: inset 0 0 0 100vmax rgba(255, 255, 255, var(--md-sys-state-hover-opacity));
}
```

---

## 動畫與過渡 (Motion)

Material Design 3 的動畫曲線與時長。

### 緩動曲線 (Easing)

```css
--md-sys-motion-easing-standard: cubic-bezier(0.2, 0.0, 0, 1.0);
--md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0.0, 0, 1.0);
--md-sys-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1.0);
--md-sys-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0.0, 0.8, 0.15);
--md-sys-motion-easing-legacy: cubic-bezier(0.4, 0.0, 0.2, 1);
```

### 時長 (Duration)

```css
--md-sys-motion-duration-short1: 50ms;
--md-sys-motion-duration-short2: 100ms;
--md-sys-motion-duration-short3: 150ms;
--md-sys-motion-duration-short4: 200ms;
--md-sys-motion-duration-medium1: 250ms;
--md-sys-motion-duration-medium2: 300ms;
--md-sys-motion-duration-medium3: 350ms;
--md-sys-motion-duration-medium4: 400ms;
--md-sys-motion-duration-long1: 450ms;
--md-sys-motion-duration-long2: 500ms;
--md-sys-motion-duration-long3: 550ms;
--md-sys-motion-duration-long4: 600ms;
```

---

## 組件樣式範例

### 按鈕 (Filled Button)

```css
.md-filled-button {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  padding: 10px 24px;
  border-radius: var(--md-sys-shape-corner-full);
  font-family: var(--md-sys-typescale-font-family-base);
  font-size: var(--md-sys-typescale-label-large-font-size);
  font-weight: var(--md-sys-typescale-label-large-font-weight);
  line-height: var(--md-sys-typescale-label-large-line-height);
  box-shadow: var(--md-sys-elevation-level0);
  transition: box-shadow var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard);
}

.md-filled-button:hover {
  box-shadow: var(--md-sys-elevation-level1);
}
```

### 卡片 (Elevated Card)

```css
.md-elevated-card {
  background-color: var(--md-sys-color-surface-container-low);
  color: var(--md-sys-color-on-surface);
  border-radius: var(--md-sys-shape-corner-medium);
  padding: var(--md-sys-spacing-4);
  box-shadow: var(--md-sys-elevation-level1);
}
```

### 文字輸入框 (Filled Text Field)

```css
.md-filled-text-field {
  background-color: var(--md-sys-color-surface-container-highest);
  border-bottom: 1px solid var(--md-sys-color-on-surface-variant);
  border-radius: var(--md-sys-shape-corner-extra-small) var(--md-sys-shape-corner-extra-small) 0 0;
  padding: 8px 16px;
  font-family: var(--md-sys-typescale-font-family-base);
  font-size: var(--md-sys-typescale-body-large-font-size);
}

.md-filled-text-field:focus {
  border-bottom-color: var(--md-sys-color-primary);
  border-bottom-width: 2px;
}
```

---

## 響應式斷點 (Breakpoints)

基於 Material Design 3 的視窗大小分類。

```css
--md-sys-breakpoint-compact: 600px;      /* 手機 */
--md-sys-breakpoint-medium: 840px;       /* 平板 */
--md-sys-breakpoint-expanded: 1240px;    /* 桌機 */
--md-sys-breakpoint-large: 1440px;       /* 大型桌機 */
--md-sys-breakpoint-extra-large: 1920px; /* 超大螢幕 */
```

---

## 無障礙設計 (Accessibility)

### 對比度要求

- 一般文字：≥ 4.5:1 (WCAG AA)
- 大文字（≥18px 或 ≥14px 粗體）：≥ 3:1 (WCAG AA)
- 互動元素：≥ 3:1

### Focus 狦態

```css
.focusable:focus-visible {
  outline: 2px solid var(--md-sys-color-primary);
  outline-offset: 2px;
}
```

### 最小觸控目標

所有可點擊元素的最小尺寸應為 48×48px（Material Design 3 建議）。

---

## Logo 與品牌資產

### Logo 使用規範

- **主要 Logo**：DetectViz 文字標誌（Detect 白色 + Viz 橙色）
- **簡化 Logo**：DV 字母組合
- **最小尺寸**：24px 高度
- **安全間距**：Logo 高度的 1/2

### Favicon 尺寸

```
favicon.ico (16x16, 32x32, 48x48)
favicon-16x16.png
favicon-32x32.png
apple-touch-icon.png (180x180)
android-chrome-192x192.png
android-chrome-512x512.png
og-image.png (1200x630)
```

---

## 參考資料

- [Material Design 3](https://m3.material.io/)
- [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**版本**: v1.0 (Material Design 3)
**建立時間**: 2025-11-18
**最後更新**: 2025-11-18
