
import xhtml from './xhtml';

import isElement from '@yelloxing/core.js/isElement';
import isString from '@yelloxing/core.js/isString';
import isFunction from '@yelloxing/core.js/isFunction';

// 核心方法和工具方法

import { textWidth, bestLeftNum, calcCanvasXY, selectIsNotBlank, toTemplate } from './edit-view/tool';

import { initDom, initView } from './edit-view/init';
import { updateView, updateSelectView, updateCursorPosition, updateCanvasSize, cancelSelect, deleteSelect } from './edit-view/update';
import bindEvent from './edit-view/bind';
import diff from './edit-view/diff';

import filterText from './edit-view/filter';

let wscode = function (options) {

    if (!(this instanceof wscode)) {
        throw new Error('WSCode is a constructor and should be called with the `new` keyword');
    }

    /**
     * 
     * [格式化配置]
     * 
     * 所有的配置校验和默认值设置等都应该在这里进行
     * 经过这里处理以后，后续不需要再进行校验了
     * 因此这里的内容的更改一定要慎重
     * 
     */

    // 编辑器挂载点
    if (isElement(options.el)) {

        // 着色器
        let shader = () => {
            let resultData = [];
            this._contentArray.forEach(text => { resultData.push([{ content: text, color: this._colorText }]); });
            return resultData;
        };

        // 格式化
        let format = textString => textString;

        this._el = options.el;

        // 公共配置
        options.color = options.color || {};
        this._colorBackground = options.color.background || "#d6d6e4"; /*编辑器背景*/
        this._colorText = options.color.text || "#000000"; /*普通文本颜色*/
        this._colorNumber = options.color.number || "#888484"; /*行号颜色*/
        this._colorEdit = options.color.edit || "#eaeaf1"; /*编辑行颜色*/
        this._colorCursor = options.color.cursor || "#ff0000"; /*光标颜色*/
        this._colorSelect = options.color.select || "#6c6cf1"; /*选择背景*/
        this._fontFamily = options["font-family"] || "新宋体"; /*字体*/
        this._fontWeight = options["font-weight"] || 600;/*字重*/
        this._tabSpace = options.tabSpace || 4;/*设置一个tab表示多少个空格*/
        this._readonly = options.readonly || false;/*是否只读*/
        this._noLineNumber = options.noLineNumber || false;/*是否隐藏行号*/

        // 文本
        this._contentArray = isString(options.content) ? (this.$$filterText(options.content) + "").split("\n") : [""];

        // 着色方法
        this.$shader = isFunction(options.shader) ? options.shader : shader;

        // 格式化方法
        this.$format = isFunction(options.format) ? options.format : format;

        // 辅助输入
        this.$input = isFunction(options.input) ? options.input : null;

    } else {

        // 挂载点是必须的，一定要有
        throw new Error('options.el is not a element!');
    }

    // 先初始化DOM
    this.$$initDom();

    // 初始化控制变量
    this.__needUpdate = true;
    this.__lineNum = this._contentArray.length - 1;
    this.__leftNum = this._contentArray[this.__lineNum].length;
    this.__cursor1 = this.__cursor2 = { leftNum: 0, lineNum: 0 };
    this.__formatData = this.$$diff(this.$shader(this._contentArray.join('\n')));

    // 初始化视图
    this.$$initView();

    // 更新视图
    this.$$updateView();

    // 绑定操作
    this.$$bindEvent();

    this.__updated__ = () => { };
    // 编辑器管理的文本发生改变后会主动触发callback方法
    this.updated = callback => {
        this.__updated__ = callback;
    };

    // 获取当前编辑器代码
    this.valueOf = () => {
        return this._contentArray.join('\n');
    };

    // 在当前光标位置输入新的内容
    this.input = (content = "", cursor = 0, number = 0) => {

        // 先删除多余的内容

        if (cursor != 0) {

            if (number != 0) {
                this._contentArray[this.__lineNum] =
                    this._contentArray[this.__lineNum].substring(0, this.__leftNum + cursor) +
                    this._contentArray[this.__lineNum].substring(this.__leftNum + cursor + number);
            }

            // 修改光标位置
            this.__leftNum += cursor;

        }

        // 输入以触发更新
        this.__focusDOM.value = content;
        xhtml.trigger(this.__focusDOM, 'input');
        this.__focusDOM.focus();

    };

    // 格式化代码
    this.format = () => {

        // 格式化内容
        this._contentArray = this.$format(this._contentArray.join('\n'), this._tabSpace).split('\n');

        this.__lineNum = this._contentArray.length - 1;
        this.__leftNum = this._contentArray[this.__lineNum].length;

        // 着色
        this.__formatData = this.$$diff(this.$shader(this._contentArray.join('\n')));

        // 更新视图
        this.$$updateView();

        // 更新光标位置
        this.$$initView();

    };

};

// 挂载辅助方法
wscode.prototype.$$textWidth = textWidth;
wscode.prototype.$$bestLeftNum = bestLeftNum;
wscode.prototype.$$calcCanvasXY = calcCanvasXY;
wscode.prototype.$$selectIsNotBlank = selectIsNotBlank;
wscode.prototype.$$filterText = filterText;
wscode.prototype.$$toTemplate = toTemplate;

// 挂载核心方法

wscode.prototype.$$initDom = initDom;
wscode.prototype.$$initView = initView;

wscode.prototype.$$updateView = updateView;
wscode.prototype.$$updateSelectView = updateSelectView;
wscode.prototype.$$updateCursorPosition = updateCursorPosition;
wscode.prototype.$$updateCanvasSize = updateCanvasSize;
wscode.prototype.$$cancelSelect = cancelSelect;
wscode.prototype.$$deleteSelect = deleteSelect;

wscode.prototype.$$bindEvent = bindEvent;

// 性能优化系列方法

wscode.prototype.$$diff = diff;

wscode.author = '心叶（yelloxing@gmail.com）';

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = wscode;
} else {
    window.WSCode = wscode;
}