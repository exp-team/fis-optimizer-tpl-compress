[![NPM version](https://badge.fury.io/js/fis-optimizer-tpl-compress.png)](http://badge.fury.io/js/fis-optimizer-tpl-compress)

[![NPM Download](https://nodei.co/npm-dl/fis-optimizer-tpl-compress.png?months=1)](https://www.npmjs.org/package/fis-optimizer-tpl-compress)

# fis-optimizer-tpl-compress
>F.I.S (Smarty)模板压缩(优化)插件

## 如何使用？

```bash
npm install -g fis-optimizer-tpl-compress
```

### 配置 fis-conf.js
在配置文件(默认fis-conf.js)配置

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
[fis]: https://github.com/fex-team/fis
[fis-plus]: https://github.com/fex-team/fis-plus
