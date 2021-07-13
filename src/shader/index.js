
// 合并内容

let toShaderReult = function (words) {

    let resultData = [[]], lineNum = 0;

    words.forEach(word => {

        let codeArray = word.content.split(/\n/);

        resultData[lineNum].push({
            color: word.color,
            content: codeArray[0]
        });

        for (let index = 1; index < codeArray.length; index++) {
            lineNum += 1;
            resultData.push([]);

            resultData[lineNum].push({
                color: word.color,
                content: codeArray[index]
            });

        }

    });

    return resultData;
};

// 初始化配置文件

let initConfig = function (init, data) {
    for (let key in data)
        try {
            init[key] = data[key];
        } catch (e) {
            throw new Error("Illegal property value！");
        }
    return init;
};

import _inner_HTML_shader from './html';
import _inner_CSS_shader from './css';
import _inner_ES_shader from './javascript';

let _deafultColors_html = {
    "text": "#000000",/*文本颜色*/
    "annotation": "#6a9955",/*注释颜色*/
    "insign": "#ffffff",/*符号颜色*/
    "node": "#1e50b3",/*结点颜色*/
    "attrKey": "#1e83b1",/*属性名称颜色*/
    "attrValue": "#ac4c1e"/*属性值颜色*/
};
let _deafultColors_css = {
    "annotation": "#6a9955",/*注释颜色*/
    "insign": "#ffffff",/*符号颜色*/
    "selector": "#1e50b3",/*选择器*/
    "attrKey": "#1e83b1",/*属性名称颜色*/
    "attrValue": "#ac4c1e"/*属性值颜色*/
};
let _deafultColors_javascript = {
    "text": "#000000",/*文本颜色*/
    "annotation": "#6a9955",/*注释颜色*/
    "insign": "#ffffff",/*符号颜色*/
    "key": "#ff0000",/*关键字颜色*/
    "string": "#ac4c1e",/*字符串颜色*/
    "funName": "#1e50b3",/*函数名称颜色*/
    "execName": "#1e83b1"/*执行方法颜色*/
};

export default function (lang, colors = {}) {

    let _inner_shader, _inner_colors;

    if (lang == 'html') {

        colors._css = initConfig(_deafultColors_css, colors.css);
        colors._javascript = initConfig(_deafultColors_javascript, colors.javascript);
        _inner_colors = initConfig(_deafultColors_html, colors);

        _inner_shader = _inner_HTML_shader;

    } else if (lang == 'css') {

        _inner_colors = initConfig(_deafultColors_css, colors);

        _inner_shader = _inner_CSS_shader;

    } else if (lang == 'javascript') {

        _inner_colors = initConfig(_deafultColors_javascript, colors);

        _inner_shader = _inner_ES_shader;

    } else {
        throw new Error('Language not supported:' + lang + ",The languages available include: html、css、javascript!");
    }

    return function (textString) {

        return toShaderReult(_inner_shader(textString, _inner_colors));

    };

};
