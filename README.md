<p align="center"><a href="https://github.com/yelloxing/Web-Studio-Code" target="_blank" rel="noopener noreferrer">
<img width="400" src="https://yelloxing.github.io/Web-Studio-Code/logo.png" alt="Web Studio Code"></a></p>

# 🎉 Web Studio Code - An Editor Used on the Browser Side.

<p align="center">
<a href="https://yelloxing.github.io/npm-downloads/?interval=7&packages=wscode"><img src="https://img.shields.io/npm/dm/wscode.svg" alt="Downloads"></a>
<a href="https://packagephobia.now.sh/result?p=wscode"><img src="https://packagephobia.now.sh/badge?p=wscode" alt="install size"></a>
<a href="https://www.jsdelivr.com/package/npm/wscode"><img src="https://data.jsdelivr.com/v1/package/npm/wscode/badge" alt="CDN"></a>
<a href="https://www.npmjs.com/package/wscode"><img src="https://img.shields.io/npm/v/wscode.svg" alt="Version"></a>
<a href="https://github.com/yelloxing/Web-Studio-Code/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/wscode.svg" alt="License"></a>
</p>

<p align="center"><a href="https://yelloxing.github.io/Web-Studio-Code/Web-Studio-Code.html" target="_blank" rel="noopener noreferrer">
<img width="500" src="https://yelloxing.github.io/Web-Studio-Code/snipping.png" alt="Web Studio Code"></a></p>

> 温馨提示：使用过程中，你可以查看 [版本历史](./CHANGELOG) 来了解是否需要升级！

> 兼容Chrome、Safari、Edge、Firefox、Opera和IE(9+)等常见浏览器！

## 如何引入

我们推荐你使用npm的方式安装和使用：

```bash
npm install --save wscode
```

当然，你也可以通过CDN的方式引入：

```html
<script src="https://cdn.jsdelivr.net/npm/wscode"></script>
```

## 如何使用

- 特别注意：当前最后一个可用版本（非beta和alpha版本）请查看master分支的说明！

```js
import WSCode from 'wscode';

var wscode = new WSCode({

    // 编辑器挂载点(必选)
    el: document.getElementById('wscode'),

    // 初始化文本（可选）
    content: "初始化文本内容",

    // 编辑器字体（可选，默认"新宋体"）
    "font-family": string,

    // 编辑器字重（可选，默认600）
    "font-weight": number,

    // 着色方法（可选，默认不特殊着色）
    shader: function(textString){
        return [
            [{
                content:"内容",
                color:"文字颜色"
            },
            ...],
            ...
        ];
    },

    // 格式化方法（可选）
    format: function(textString, tabNumber){
        return "格式化后的文本";
    },

    // 辅助输入（可选）
    input: function(dom, options, contentArray){
        /*
        1.其中dom和contentArray分别表示辅助的悬浮结点和内容数组;
        2.options的一些重要的辅助信息，是一个json，包括以下内容：
            {
                leftNum:光标前面有多少个字符
                lineNum:当前行之前有多少行
                x:光标left坐标
                y:光标top坐标
                lineHeight:一行文本的高
            }
        */

       // 返回的是键盘操作,可以有任意多个(可选)
       return {
            // keyString可以取:
            //    ”up“:按下键盘向上键
            //    ”down“:按下键盘向下键
            //    等
            // 具体的查看这里： https://yelloxing.github.io/core.js/tools-api/index.html#keyString
            "keyString":function(){

                // 最后返回true或false,默认false表示阻止默认行为（或原有行为）
                return boolean;
            },
            ...
       };
    },

    // 设置颜色（可选）
    color: {
        background: "#d6d6e4", /*编辑器背景*/
        text : "#000000", /*文本颜色*/
        number: "#888484", /*行号颜色*/
        edit: "#eaeaf1", /*编辑行背景色*/
        cursor: "#ff0000", /*光标颜色*/
        select: "#6c6cf1", /*选择背景*/
    },

    // 设置一个tab表示多少个空格（可选，默认4）
    tabSpace: number,

    // 是否只读（默认false,如果设置true表示当前编辑器可以选择复制等操作，不可以进行内容修改）
    readonly:boolean

});
```

返回的wscode里面挂载着后续可控方法：

- 格式化代码

```js
wscode.format();
```

- 获取当前编辑器代码

```js
wscode.valueOf();
```

- 编辑器管理的文本发生改变后会主动触发callback方法

```js
wscode.updated(callback);
```

- 在当前光标位置输入新的内容

```js
// cursor和length默认都是0，前者表示光标偏移量，后者表示替换个数
wscode.input(content[, cursor, number]);
```

## 相关插件

- [wscode-prettify](https://github.com/yelloxing/wscode-prettify)：通用的代码着色器

## 开源协议

[MIT](https://github.com/yelloxing/Web-Studio-Code/blob/master/LICENSE)

Copyright (c) 2020 走一步 再走一步
