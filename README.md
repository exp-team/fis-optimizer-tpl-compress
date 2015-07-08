# fis-optimizer-tpl-compress
Fis-Plus Smarty模板文件压缩工具

## 如何使用？

```bash
npm install -g fis-optimizer-tpl-compress
```

配置 fis-conf.js

```javascript
fis.config.merge({
    modules : {
        optimizer : {
            tpl : 'tpl-compress'
        }
    }
});
```

[fis]: https://github.com/fex-team/fis
[fis-plus]: https://github.com/fex-team/fis-plus
