# DetectViz Logo Assets

本目錄包含 DetectViz Portfolio 的所有 Logo 資產檔案，基於 Material Design 3 紫色配色系統。

## 📁 檔案清單

### 主要 Logo (DetectViz)

- **logo.svg** - 預設 Logo（深色版本，適用於深色背景）
- **logo-dark.svg** - 深色背景版本（白色 Detect + 紫色 Viz #CFBDFE）
- **logo-light.svg** - 淺色背景版本（深灰 Detect + 紫色 Viz #65558F）

### 簡化 Logo (DV)

- **logo-dv.svg** - 純文字 DV（紫色 #CFBDFE，透明背景）
- **logo-dv-circle.svg** - 圓形背景版本（紫色 #65558F 背景 + 白色文字）
- **logo-dv-square.svg** - 方形背景版本（深色 #1D1B20 背景 + 紫色文字）

### Favicon 檔案

- **favicon-16x16.svg** - 16×16 Favicon（SVG 格式）
- **favicon-32x32.svg** - 32×32 Favicon（SVG 格式）
- **../favicon.svg** - 根目錄 Favicon（現代瀏覽器使用）

### App Icons

- **apple-touch-icon.svg** - Apple Touch Icon 180×180（SVG 格式）
- **android-chrome-192x192.svg** - Android Chrome Icon 192×192（SVG 格式）
- **android-chrome-512x512.svg** - Android Chrome Icon 512×512（SVG 格式）

### Open Graph 圖片

- **og-image.svg** - Open Graph 圖片模板 1200×630（SVG 格式）

---

## 🎨 配色說明

### Material Design 3 紫色系

**深色主題（預設）：**
- Detect: 白色 `#FFFFFF`
- Viz: 品牌紫色 `#CFBDFE`
- 背景（DV Logo）: 紫色 `#65558F`

**淺色主題：**
- Detect: 深灰色 `#1D1B20`
- Viz: 品牌紫色 `#65558F`

**Open Graph 背景：**
- 漸層：`#141218` → `#211F24`
- 技術標籤背景：`#4D3D75`

---

## 🔄 SVG 轉 PNG/ICO 指南

### 方法一：使用線上工具

1. **SVG to PNG**: https://svgtopng.com/
   - 上傳 SVG 檔案
   - 選擇輸出尺寸
   - 下載 PNG 檔案

2. **PNG to ICO**: https://www.icoconverter.com/
   - 上傳 PNG 檔案（16x16, 32x32, 48x48）
   - 轉換為 `favicon.ico`

3. **Favicon Generator**: https://realfavicongenerator.net/
   - 上傳 `logo-dv-circle.svg`（最小 512×512 PNG）
   - 自動產生所有尺寸的 Favicon

### 方法二：使用 Node.js（推薦）

安裝 sharp 套件：

```bash
npm install --save-dev sharp
```

建立轉換腳本 `scripts/generate-icons.js`：

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { input: 'logo-dv-circle.svg', output: 'favicon-16x16.png', size: 16 },
  { input: 'logo-dv-circle.svg', output: 'favicon-32x32.png', size: 32 },
  { input: 'logo-dv-circle.svg', output: 'apple-touch-icon.png', size: 180 },
  { input: 'logo-dv-circle.svg', output: 'android-chrome-192x192.png', size: 192 },
  { input: 'logo-dv-circle.svg', output: 'android-chrome-512x512.png', size: 512 },
  { input: 'og-image.svg', output: 'og-image.png', size: null }, // 保持原始尺寸
];

async function generateIcons() {
  for (const { input, output, size } of sizes) {
    const inputPath = path.join(__dirname, '../public/logo', input);
    const outputPath = path.join(__dirname, '../public', output);

    if (size) {
      await sharp(inputPath)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      console.log(`✓ Generated ${output} (${size}×${size})`);
    } else {
      await sharp(inputPath)
        .png()
        .toFile(outputPath);
      console.log(`✓ Generated ${output}`);
    }
  }
}

generateIcons().then(() => {
  console.log('\n✓ All icons generated successfully!');
}).catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
```

執行腳本：

```bash
node scripts/generate-icons.js
```

### 方法三：使用 Inkscape CLI

```bash
# 安裝 Inkscape
brew install inkscape  # macOS
sudo apt install inkscape  # Ubuntu/Debian

# 轉換 SVG to PNG
inkscape logo-dv-circle.svg --export-type=png --export-width=512 --export-filename=icon-512.png
inkscape logo-dv-circle.svg --export-type=png --export-width=192 --export-filename=icon-192.png
inkscape logo-dv-circle.svg --export-type=png --export-width=180 --export-filename=apple-touch-icon.png
inkscape logo-dv-circle.svg --export-type=png --export-width=32 --export-filename=favicon-32x32.png
inkscape logo-dv-circle.svg --export-type=png --export-width=16 --export-filename=favicon-16x16.png
inkscape og-image.svg --export-type=png --export-filename=og-image.png
```

### 方法四：使用 ImageMagick

```bash
# 安裝 ImageMagick
brew install imagemagick  # macOS
sudo apt install imagemagick  # Ubuntu/Debian

# 轉換 SVG to PNG
convert -background none -resize 512x512 logo-dv-circle.svg android-chrome-512x512.png
convert -background none -resize 192x192 logo-dv-circle.svg android-chrome-192x192.png
convert -background none -resize 180x180 logo-dv-circle.svg apple-touch-icon.png
convert -background none -resize 32x32 logo-dv-circle.svg favicon-32x32.png
convert -background none -resize 16x16 logo-dv-circle.svg favicon-16x16.png
convert og-image.svg og-image.png

# 產生 favicon.ico (包含多個尺寸)
convert favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico
```

---

## 📝 在 Astro 專案中使用

### HTML Head 設定

```html
<!-- public/ 根目錄放置 favicon.svg -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<!-- 如有 PNG 版本 -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

<!-- Android Chrome -->
<link rel="manifest" href="/site.webmanifest" />

<!-- Open Graph -->
<meta property="og:image" content="/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### Logo 組件使用範例

```astro
---
// src/components/Logo.astro
interface Props {
  variant?: 'dark' | 'light' | 'dv';
  size?: 'sm' | 'md' | 'lg';
}

const { variant = 'dark', size = 'md' } = Astro.props;

const logoSrc = {
  dark: '/logo/logo-dark.svg',
  light: '/logo/logo-light.svg',
  dv: '/logo/logo-dv-circle.svg',
};

const sizeClasses = {
  sm: 'h-8',
  md: 'h-12',
  lg: 'h-16',
};
---

<img
  src={logoSrc[variant]}
  alt="DetectViz Logo"
  class={`logo ${sizeClasses[size]}`}
/>
```

---

## 🚀 部署建議

### 最終需要的檔案（PNG/ICO 格式）

```
public/
├── favicon.ico                      # 16, 32, 48px
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png             # 180x180
├── android-chrome-192x192.png       # 192x192
├── android-chrome-512x512.png       # 512x512
├── og-image.png                     # 1200x630
└── logo/
    ├── logo.svg
    ├── logo-dark.svg
    ├── logo-light.svg
    └── logo-dv-circle.svg
```

### site.webmanifest 範例

```json
{
  "name": "DetectViz Portfolio",
  "short_name": "DetectViz",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#65558F",
  "background_color": "#1D1B20",
  "display": "standalone"
}
```

---

## 📚 參考資料

- [LOGO_DESIGN_CONCEPT.md](../../LOGO_DESIGN_CONCEPT.md) - Logo 設計概念完整文件
- [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md) - 設計系統完整規範
- [Material Design 3](https://m3.material.io/) - Material Design 3 官方文件
- [Favicon Generator](https://realfavicongenerator.net/) - Favicon 產生工具

---

**建立時間**: 2025-11-18
**版本**: v1.0
**基於**: Material Design 3 標準紫色配色系統
