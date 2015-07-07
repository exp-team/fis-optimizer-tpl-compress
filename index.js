/*
 * fis-optimizer-tpl-compress
 *
 * Copyright (c) 2015 Baidu EXP Team
 * Licensed under the MIT license.
 * https://github.com/exp-team/fis-optimizer-tpl-compress/blob/master/LICENSE
 */

'use strict';

var compress = require('./lib/compress.js');

module.exports = function(content, file, conf){
    conf['leftDelimiter'] = conf['leftDelimiter'] || fis.config.get('settings.smarty.left_delimiter') || '{%';
    conf['rightDelimiter'] = conf['rightDelimiter'] || fis.config.get('settings.smarty.right_delimiter') || '%}';
    conf['level'] = conf['conf'] || 'strip';
    return compress(content, conf);
};
