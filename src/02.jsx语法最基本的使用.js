//1、导入包
import React from 'react';
import ReactDOM from 'react-dom';

//2、创建虚拟DOM元素
//回顾： 什么是虚拟DOM，用JS对象的形式，来表示DOM 和 DOM之间的嵌套关系
//const divDom = React.createElement('div',{ id:'div', title:'divtit' },'我是div的文字')

//HTML 是最优秀的标记语言
//注意：在JS文件中，默认不能写 这种 类似于 HTML 的标记，否则 打包会失败；

//可以使用babel来转换 这些JS中的标签
//大家注意：这种在 js中 ，混合写入类似于 HTML 的语法，叫做 JSX语法，符合XML规范的JS;

//JSX语法的本质，是在运行的时候，被转换成了 React.createElement 形式来执行的；
const divTemplate = <div id="div" title="divtit">我是div的文字</div>


//3、调用 render 函数渲染DOM
ReactDOM.render(divTemplate, document.getElementById('app'))
