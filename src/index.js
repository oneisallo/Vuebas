import { addFn } from "./add/add.js"
import { getArrSum } from "./tool/tool.js"
import $ from 'jquery'
import "./css/index.css"
import "./less/index.less"
import imgObj from "./assets/1.gif"

import "./assets/fonts/iconfont.css"

console.log(addFn(7, 8))
console.log(getArrSum([5, 6, 9, 10]))

$("#myul>li:odd").css('color', 'pink')
$("#myul>li:even").css('color', 'green')

let img = document.createElement("img")
img.src = imgObj
document.body.appendChild(img)


let theI = document.createElement("i")
theI.className = "iconfont icon-qq"
document.body.appendChild(theI)

const fn = () => { console.log('我是一个箭头函数') }
console.log(fn)