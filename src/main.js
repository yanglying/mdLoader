import code from "./test.md";
import "highlight.js/styles/default.css"
import "./code.css"
//这里的code就是在my-loader.js中返回的那个已经解析出来的html页面
// console.log(code);
// <p>#学习前端</p>
// 将code显示到页面中
document.body.innerHTML=code