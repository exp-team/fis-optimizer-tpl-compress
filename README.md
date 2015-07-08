[![NPM version](https://badge.fury.io/js/fis-optimizer-tpl-compress.png)](http://badge.fury.io/js/fis-optimizer-tpl-compress)

[![NPM Download](https://nodei.co/npm-dl/fis-optimizer-tpl-compress.png?months=1)](https://www.npmjs.org/package/fis-optimizer-tpl-compress)

# fis-optimizer-tpl-compress
>F.I.S (Smarty)模板压缩(优化)插件

## 功能概述

* 自定义(Smarty)模板边界符
* 去除\r \n \t以及多余的空格
* 优化页面(<script type="text/javascript"></script>&{%script%}{%/script%}标签中的)代码(去除单行&多行注释&多余空格)
* 最终将模板代码优化为一行

## 如何使用？

### 安装

```bash
npm install -g fis-optimizer-tpl-compress
```

### 配置 fis-conf.js

```javascript
fis.config.merge({
    modules : {
        optimizer : {
            tpl : 'tpl-compress'
        }
    }
});
```
## 更多资料

* [fis](https://github.com/fex-team/fis) 前端集成解决方案
* [fis-plus](https://github.com/fex-team/fis-plus)
* [fis-optimizer-html-compress](https://github.com/pianist829/fis-optimizer-html-compress)
