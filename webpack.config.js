const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');	//导入 在内存中自动生成 index 页面的插件


//创建一个插件的实例对象
/* const htmlPlugin = new HtmlWebpackPlugin ({
    template :  path.join(__dirname, './src/index.html'),	//源文件
    filename: 'index.html'	//生成的内存中首页的名称
}) */





//向外暴露一个打包的配置对象；
//因为webpack是基于Node构建的；所以webpack支持所有Node API和语法
module.exports = {
    mode:'production',  //development、production
    //在webpack 4.x中，有一个很大的特性，就是约定大于配置；约定默认的打包入口路径是 src -> index.js;
    plugins: [
        //创建一个插件的实例对象
        new HtmlWebpackPlugin ({
            template :  path.join(__dirname, './src/index.html'),	//源文件
            filename: 'index.html'	//生成的内存中首页的名称
        })
    ]

}
