<div align="center">

<br>

<img alt="zen-icon" src="./images/logo.svg" width="60">

<h1>zen-dark-mode</h1>

[![npm](https://img.shields.io/npm/v/zen-dark-mode.svg?colorB=brightgreen)](https://www.npmjs.com/package/zen-dark-mode)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/zen-dark-mode.svg)](https://github.com/ux-ui-pro/zen-dark-mode)
[![NPM Downloads](https://img.shields.io/npm/dm/zen-dark-mode.svg?style=flat)](https://www.npmjs.org/package/zen-dark-mode)

<sup>0.5Kb gzipped</sup>
<br>
<sup>Dark Mode for web applications</sup>
<h3><a href="https://ux-ui-pro.github.io/zen-dark-mode/dist/">Demo</a></h3>

</div>
<br>

### Import
```javascript
import { ZenDarkMode } from 'zen-dark-mode'
```
```javascript
new ZenDarkMode({
    defaultTheme: 'dark',
    customButton: false
})
```
<br>

### Button
```HTML
<button data-theme-picker>theme</button>
```
<sup>Or use a button from the package. You must enable the _customButton: true_ option. <a href="https://ux-ui-pro.github.io/zen-dark-mode/dist/">Example</a>.</sup>

<br>

### Flash of default theme
<sup>Retrieve the theme from localStorage in a tiny additional script in the head, right after the stylesheet is loaded.<br>
This to execute as early as possible to avoid a "flash of default theme".</sup>
```javascript
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'dark')
```

<br>

### theme-color meta tag
<sup>Add theme-color in the head.</sup>
```HTML
<meta name="theme-color" content="">
```

<br>

### CSS
<sup>Specify the color that user agents should use to customize the display of the page or of the surrounding user interface.</sup>
```CSS
:root {
    --theme-color-dark: hsl(0 0% 0%);
    --theme-color-light: hsl(0 0% 100%);
}
```

<br>

### License
<sup>zen-dark-mode is released under MIT license.</sup>