//1、导入包
import React from 'react';
import ReactDOM from 'react-dom';


let a = 10;
let str = "你好，中国";
let bool = true;
let title = "666"
let h1 = <h1>红红火火</h1>
let arr = [
    <h2>这是h2标签</h2>,
    <h3>这是h3标签</h3>
]
let strArr = ['红','橙','黄','绿','青','蓝','紫']

let pDom = <p className="pclass">test</p>;

//3、调用 render 函数渲染DOM ,jsx XML 比 HTML 严格
//什么情况下需要使用｛｝呢？当我们需要在 JSX 控制的区域内，写JS表达式了，则需要把JS写到｛｝中
ReactDOM.render(
    <div id="div" title="divtit">
        {a+2}   {/* 渲染数字 */}
        <hr/>
        {str}   {/* //渲染字符串 */}
        <hr/>
        { bool?"值为真":"值为假"}   {/* //渲染布尔值 */}
        <hr/>
        <p title={title}>这是一个p标签</p>  {/* //为属性绑定值 */}
        <hr/>
        {h1}    {/* //渲染jsx元素 */}
        <hr/>
        {arr}   {/* //渲染jsx元素数组 */}
        <hr/>
        {strArr.map(item => <div title={item} key={item}><h5>{item}</h5></div>)}   {/* //将普通字符串数组，转为jsx数组并渲染到页面上 */}
        {pDom}
    </div>,
    document.getElementById('app')
)
