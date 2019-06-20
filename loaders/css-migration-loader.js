const loaderUtils = require('loader-utils')

module.exports = function (source){
    const options = loaderUtils.getOptions(this);
    const path = (options&&("path" in options))?options.path:null

    const url = loaderUtils.interpolateName(this, path?(path+'/[name].[ext]'):'./statics/css/[name].[ext]', {
        source
    });
    this.emitFile(url,source)
    return source;
}

