# Open Web Editor - ✍️ Web版本的可扩展代码编辑器

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=open-web-editor"><img src="https://img.shields.io/npm/dm/open-web-editor.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=open-web-editor"><img src="https://packagephobia.now.sh/badge?p=open-web-editor" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/open-web-editor"><img src="https://data.jsdelivr.com/v1/package/npm/open-web-editor/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/open-web-editor"><img src="https://img.shields.io/npm/v/open-web-editor.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/Open-Web-Editor/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/open-web-editor.svg" alt="License"></a>
  <a href="https://github.com/hai2007/Open-Web-Editor" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/Open-Web-Editor?style=social">
    </a>
</p>

> 温馨提示：使用过程中，你可以查看 [版本历史](./CHANGELOG) 来了解是否需要升级！

> 兼容Chrome、Safari、Edge、Firefox、Opera和IE(9+)等常见浏览器！

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/Open-Web-Editor/issues)，欢迎参与维护！

- 你可以查看[在线用例](https://hai2007.gitee.io/open-web-editor/test/index.html)来快速体验！

## 如何引入

我们推荐你使用npm的方式安装和使用：

```bash
npm install --save open-web-editor
```

当然，你也可以通过CDN的方式引入：

```html
<script src="https://cdn.jsdelivr.net/npm/open-web-editor@0"></script>
```

## 如何使用

- 特别注意：当前最后一个可用版本（非beta和alpha版本）请查看master分支的说明！

```js
import OpenWebEditor from 'open-web-editor';

var owe = new OpenWebEditor({

    // 编辑器挂载点(必选)
    el: document.getElementById('owe'),

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

    // 是否只读（默认false，如果设置true表示当前编辑器可以选择复制等操作，不可以进行内容修改）
    readonly:boolean,

    // 行号是否隐藏（默认false，如果设置true表示当前编辑器行号隐藏）
    noLineNumber:boolean

});
```

返回的owe里面挂载着后续可控方法：

- 格式化代码

```js
owe.format();
```

- 获取当前编辑器代码

```js
// 如果content传递了，会先设置内容
owe.valueOf([content]);
```

- 复制当前编辑器代码到电脑剪切板

```js
// 成功回调和错误回调都非必输
owe.copy(callback,errorback);
```

- 编辑器管理的文本发生改变后会主动触发callback方法

```js
owe.updated(callback);
```

- 在当前光标位置输入新的内容

```js
// cursor和length默认都是0，前者表示光标偏移量，后者表示替换个数
owe.input(content[, cursor, number]);
```

## 内置着色器

对于上面的选项```shader```除了传递一个着色器方法外，还可以传递一个数组，以使用内置的着色器方法进行着色：

```js
new OpenWebEditor({
    ...
    // lang是一个字符串，表示需要着色的语言
    // colors可选，表示使用的色彩
    // 此外，colors具体有多项，都可选，配置你希望修改的即可，其余自动使用默认值
    shader:[lang,colors]
    ...
});
```

下面来列举出所有可选的语言：

### html

```js
shader:['html',{
    "text": "#000000",/*文本颜色*/
    "annotation": "#6a9955",/*注释颜色*/
    "insign": "#ffffff",/*符号颜色*/
    "node": "#1e50b3",/*结点颜色*/
    "attrKey": "#1e83b1",/*属性名称颜色*/
    "attrValue": "#ac4c1e",/*属性值颜色*/
    "css":{
        // 查看后续css语言部分
    },
    "javascript":{
        // 查看后续javascript语言部分
    }
}]
```

### css

```js
shader:['css',{
    "annotation": "#6a9955",/*注释颜色*/
    "insign": "#ffffff",/*符号颜色*/
    "selector": "#1e50b3",/*选择器*/
    "attrKey": "#1e83b1",/*属性名称颜色*/
    "attrValue": "#ac4c1e"/*属性值颜色*/
}]
```

### javascript

```js
shader:['javascript',{
    "text": "#000000",/*文本颜色*/
    "annotation": "#6a9955",/*注释颜色*/
    "insign": "#ffffff",/*符号颜色*/
    "key": "#ff0000",/*关键字颜色*/
    "string": "#ac4c1e",/*字符串颜色*/
    "funName": "#1e50b3",/*函数名称颜色*/
    "execName": "#1e83b1"/*执行方法颜色*/
}]
```

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/Open-Web-Editor/blob/master/LICENSE)

Copyright (c) 2020-2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
