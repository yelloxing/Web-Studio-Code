/*!
* web Studio Code - 🎉 An Editor Used on the Browser Side.
* git+https://github.com/yelloxing/Web-Studio-Code.git
*
* author 心叶
*
* version 2.0.1
*
* build Fri May 08 2020
*
* Copyright yelloxing
* Released under the MIT license
*
* Date:Thu Aug 13 2020 22:48:51 GMT+0800 (GMT+08:00)
*/

"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  'use strict';

  var _dictionary;

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @private
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType(value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }
  /**
   * 判断一个值是不是一个朴素的'对象'
   *
   * @private
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
   */


  function isPlainObject(value) {
    if (value === null || _typeof(value) !== 'object' || getType(value) != '[object Object]') {
      return false;
    } // 如果原型为null


    if (Object.getPrototypeOf(value) === null) {
      return true;
    }

    var proto = value;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(value) === proto;
  }
  /**
   * 判断一个值是不是结点元素。
   *
   * @since V0.1.2
   * @public
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是结点元素返回true，否则返回false
   */


  function isElement(value) {
    return value !== null && _typeof(value) === 'object' && (value.nodeType === 1 || value.nodeType === 9 || value.nodeType === 11) && !isPlainObject(value);
  }

  var xhtml = {
    // 阻止冒泡
    "stopPropagation": function stopPropagation(event) {
      event = event || window.event;

      if (event.stopPropagation) {
        //这是其他非IE浏览器
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },
    // 阻止默认事件
    "preventDefault": function preventDefault(event) {
      event = event || window.event;

      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    // 绑定事件
    "bind": function bind(el, eventType, callback) {
      if (window.attachEvent) {
        el.attachEvent("on" + eventType, callback); // 后绑定的先执行
      } else {
        el.addEventListener(eventType, callback, false); // 捕获
      }
    },
    // 触发事件
    "trigger": function trigger(dom, eventType) {
      var event; //创建event的对象实例。

      if (document.createEventObject) {
        // IE浏览器支持fireEvent方法
        event = document.createEventObject();
        dom.fireEvent('on' + eventType, event);
      } // 其他标准浏览器使用dispatchEvent方法
      else {
          event = document.createEvent('HTMLEvents'); // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为

          event.initEvent(eventType, true, false);
          dom.dispatchEvent(event);
        }
    },
    // 变成结点
    "toNode": function toNode(template) {
      var frame = document.createElement("div");
      frame.innerHTML = template;
      var childNodes = frame.childNodes;

      for (var i = 0; i < childNodes.length; i++) {
        if (isElement(childNodes[i])) return childNodes[i];
      }

      return null;
    },
    // 追加结点
    "appendTo": function appendTo(el, template) {
      var node = isElement(template) ? template : this.toNode(template);
      el.appendChild(node);
      return node;
    },
    // 删除结点
    "remove": function remove(el) {
      el.parentNode.removeChild(el);
    },
    // 在被指定元素之后插入结点
    "after": function after(el, template) {
      var node = isElement(template) ? template : this.toNode(template);
      el.parentNode.insertBefore(node, el.nextSibling);
      return node;
    },
    // 修改样式
    "css": function css(el, styles) {
      for (var key in styles) {
        el.style[key] = styles[key];
      }
    },
    // 修改属性
    "attr": function attr(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    },
    // 获取鼠标相对特定元素左上角位置
    "position": function position(el, event) {
      event = event || window.event; // 返回元素的大小及其相对于视口的位置

      var bounding = el.getBoundingClientRect();
      if (!event || !event.clientX) throw new Error('Event is necessary!');
      var temp = {
        // 鼠标相对元素位置 = 鼠标相对窗口坐标 - 元素相对窗口坐标
        "x": event.clientX - bounding.left + el.scrollLeft,
        "y": event.clientY - bounding.top + el.scrollTop
      };
      return temp;
    },
    // 复制到剪切板
    "copy": function copy(text) {
      var el = this.appendTo(document.body, '<textarea>' + text + '</textarea>'); // 执行复制

      el.select();

      try {
        var result = window.document.execCommand("copy", false, null);

        if (result) {// console.log('已经复制到剪切板！');
        } else {// console.log('复制到剪切板失败！');
          }
      } catch (e) {
        console.error(e); // console.log('复制到剪切板失败！');
      }

      document.body.removeChild(el);
    }
  };
  /**
   * 判断一个值是不是String。
   *
   * @since V0.1.2
   * @public
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */

  function isString(value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
  }
  /**
   * 判断一个值是不是Object。
   *
   * @since V0.1.2
   * @public
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */


  function isObject(value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }
  /**
   * 判断一个值是不是Function。
   *
   * @since V0.1.2
   * @public
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */


  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  } // 计算文字长度


  function textWidth(text) {
    this.__helpCalcDOM.innerText = text;
    return this.__helpCalcDOM.offsetWidth;
  } // 计算最佳光标左边位置


  function bestLeftNum(x, lineNum) {
    if (arguments.length < 2) lineNum = lineNum || this.__lineNum;
    var text = this._contentArray[lineNum];
    if (x <= 40) return 0;
    if (x - 40 >= this.$$textWidth(text)) return text.length;
    var dist = x - 40,
        i = 1;

    for (; i < text.length; i++) {
      var tempDist = Math.abs(x - 40 - this.$$textWidth(text.substr(0, i)));
      if (tempDist > dist) break;
      dist = tempDist;
    }

    return i - 1;
  } // 计算光标对应的x,y值


  function calcCanvasXY(leftNum, lineNum) {
    return {
      x: this.$$textWidth(this._contentArray[lineNum].substr(0, leftNum)),
      y: lineNum * 21
    };
  } // 判断选区是否为空


  function selectIsNotBlank() {
    return this.__cursor1.lineNum != this.__cursor2.lineNum || this.__cursor1.leftNum != this.__cursor2.leftNum;
  } // 根据内容生成模板


  function toTemplate(line, index) {
    var _this = this;

    var template = "";
    template += "<div style='min-width: fit-content;white-space: nowrap;line-height:21px;height:21px;'>";
    template += "<em style='color:" + this._colorNumber + ";user-select: none;display:inline-block;font-style:normal;width:35px;text-align:right;margin-right:5px;'>" + (index + 1) + "</em>";
    line.forEach(function (text) {
      var contentText = text.content; // 提前对特殊字符进行处理

      contentText = contentText.replace(/\&/g, "&amp;");
      /*[&]*/

      contentText = contentText.replace(/</g, "&lt;");
      contentText = contentText.replace(/>/g, "&gt;");
      /*[<,>]*/

      template += "<span style='user-select: none;font-weight:" + _this._fontWeight + ";white-space: pre;color:" + text.color + "'>" + contentText + "</span>";
    });
    return template + "</div>";
  } // 整理当前输入框信息


  function getInputMessage(wscode) {
    return {
      // 光标前面有多少个字符
      leftNum: wscode.__leftNum,
      // 当前行之前有多少行
      lineNum: wscode.__lineNum,
      // 光标left坐标
      x: wscode.__cursorLeft,
      // 光标top坐标
      y: wscode.__cursorTop,
      // 一行文本的高
      lineHeight: 21
    };
  } // 初始化结点


  function initDom() {
    var _this2 = this;

    this._el.innerHTML = "";
    xhtml.css(this._el, {
      "font-size": "12px",
      position: "relative",
      cursor: "text",
      "font-family": this._fontFamily,
      "background": this._colorBackground,
      overflow: "auto"
    });
    xhtml.bind(this._el, 'click', function () {
      // 由于有时候点击屏幕的时候，是滚动导致的，因此位置可能没有计算好前聚焦了，导致光标错位
      setTimeout(function () {
        _this2.__focusDOM.focus();
      });
    }); // 辅助计算标签

    this.__helpCalcDOM = xhtml.appendTo(this._el, "<span></span>");
    xhtml.css(this.__helpCalcDOM, {
      position: "absolute",
      "z-index": "-1",
      "white-space": "pre",
      "top": 0,
      "left": 0,
      "color": "rgba(0,0,0,0)",
      "font-weight": this._fontWeight
    }); // 辅助输入标签

    this.__helpInputDOM = xhtml.appendTo(this._el, "<div></div>");
    xhtml.css(this.__helpInputDOM, {
      position: "absolute",
      "z-index": 1
    });
    xhtml.bind(this.__helpInputDOM, 'click', function (event) {
      xhtml.stopPropagation(event);
      xhtml.preventDefault(event);

      _this2.__focusDOM.focus();
    }); // 光标

    this.__focusDOM = xhtml.appendTo(this._el, "<textarea></textarea>");
    xhtml.css(this.__focusDOM, {
      position: "absolute",
      width: "6px",
      "margin-top": "3px",
      height: "15px",
      "line-height": "15px",
      resize: "none",
      overflow: "hidden",
      padding: "0",
      outline: "none",
      border: "none",
      background: "rgba(0,0,0,0)",
      color: this._colorCursor
    });
    xhtml.attr(this.__focusDOM, {
      wrap: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false"
    }); // 显示区域

    this.__showDOM = xhtml.appendTo(this._el, "<div></div>");
    xhtml.css(this.__showDOM, {
      padding: "10px 0"
    }); // 选中区域

    this.__selectCanvas = xhtml.appendTo(this._el, "<canvas></canvas>");
    xhtml.css(this.__selectCanvas, {
      position: "absolute",
      left: "40px",
      top: "10px",
      opacity: "0.5"
    });
    this.$$updateCanvasSize(1, 1);
  } // 初始化视图


  function initView() {
    // 初始化定位光标位置
    xhtml.css(this.__focusDOM, {
      left: 40 + this.$$textWidth(this._contentArray[this.__lineNum]) + "px",
      top: 10 + this.__lineNum * 21 + "px"
    });

    this.__focusDOM.focus();
  } // 更新编辑器内容视图


  function updateView() {
    var _this3 = this;

    // 如果有重复利用的行(可复用的过少就不选择这种方法了)
    if (this.__diff && this.__diff.beginNum + this.__diff.endNum > 10) {
      var lineDoms = this.__showDOM.childNodes;
      var lineDoms_length = lineDoms.length; // 先删除无用的行

      /**
       * 这里的删除需要稍微注意一下
       * 因为结点删除以后就没有了，这会导致lineDoms的更新，这也是为什么备份数组长度的原因
       * 倒着删除同样是因为这个原因
       */

      for (var i = lineDoms_length - this.__diff.endNum - 1; i >= this.__diff.beginNum; i--) {
        xhtml.remove(lineDoms[i]);
      } // 追加不足的行


      if (this.__diff.beginNum > 0) {
        for (var _i = this.__formatData.length - 1 - this.__diff.endNum; _i >= this.__diff.beginNum; _i--) {
          xhtml.after(lineDoms[this.__diff.beginNum - 1], this.$$toTemplate(this.__formatData[_i], _i));
        }
      } else {
        // 如果开头没有结点保留，为了简单，我们直接采用append方法追加
        for (var _i2 = 0; _i2 < this.__formatData.length - this.__diff.endNum; _i2++) {
          xhtml.appendTo(this.__showDOM, this.$$toTemplate(this.__formatData[_i2], _i2));
        }
      } // 更新行号


      lineDoms = this.__showDOM.childNodes;

      for (var _i3 = this.__diff.beginNum; _i3 < this.__formatData.length; _i3++) {
        lineDoms[_i3].getElementsByTagName('em')[0].innerText = _i3 + 1;
      }
    } // 有时候，可能直接替换更快
    else if (this.__diff != "not update") {
        var template = "";

        this.__formatData.forEach(function (line, index) {
          template += _this3.$$toTemplate(line, index);
        });

        this.__showDOM.innerHTML = template;
      }

    this.__diff = "not update"; // 修改当前编辑的行

    if (this.__lineDom) this.__lineDom.style.backgroundColor = "rgba(0, 0, 0, 0)";
    this.__lineDom = this.__showDOM.childNodes[this.__lineNum];
    this.__lineDom.style.backgroundColor = this._colorEdit;
  } // 更新编辑器选中视图


  function updateSelectView() {
    var _this4 = this;

    var ctx = this.__selectCanvas.getContext('2d');

    ctx.fillStyle = this._colorSelect;
    ctx.clearRect(0, 0, this.__selectCanvas.scrollWidth, this.__selectCanvas.scrollHeight); // 绘制二个区间

    var drawerSelect = function drawerSelect(beginLeftNum, endLeftNum, lineNum) {
      var xy1 = _this4.$$calcCanvasXY(beginLeftNum, lineNum);

      var xy2 = _this4.$$calcCanvasXY(endLeftNum, lineNum); // 如何一行过少，前置一点点选中显示


      if (beginLeftNum == endLeftNum && beginLeftNum == 0) {
        ctx.fillRect(xy1.x, xy1.y, 5, 21);
      } else {
        ctx.fillRect(xy1.x, xy1.y, xy2.x - xy1.x, 21);
      }
    }; // 如果选中区域为空，不用绘制


    if (this.__cursor1.lineNum == this.__cursor2.lineNum && this.__cursor1.leftNum == this.__cursor2.leftNum) return;
    ctx.beginPath(); // 如果在一行

    if (this.__cursor1.lineNum == this.__cursor2.lineNum) {
      drawerSelect(this.__cursor1.leftNum, this.__cursor2.leftNum, this.__cursor1.lineNum);
    } // 如果选中的多于一行
    else {
        var beginCursor, endCursor;

        if (this.__cursor1.lineNum < this.__cursor2.lineNum) {
          beginCursor = this.__cursor1;
          endCursor = this.__cursor2;
        } else {
          beginCursor = this.__cursor2;
          endCursor = this.__cursor1;
        } // 绘制开始的结尾


        drawerSelect(beginCursor.leftNum, this._contentArray[beginCursor.lineNum].length, beginCursor.lineNum); // 绘制结束的开头

        drawerSelect(0, endCursor.leftNum, endCursor.lineNum); // 绘制两行之间

        for (var lineNum = beginCursor.lineNum + 1; lineNum < endCursor.lineNum; lineNum++) {
          drawerSelect(0, this._contentArray[lineNum].length, lineNum);
        }
      }
  } // 输入的时候更新光标位置


  function updateCursorPosition() {
    this.__cursorTop = this.__lineNum * 21 + 10;
    this.__cursorLeft = 40 + this.$$textWidth(this._contentArray[this.__lineNum].substring(0, this.__leftNum));
    xhtml.css(this.__focusDOM, {
      top: this.__cursorTop + "px",
      left: this.__cursorLeft + "px"
    });
  } // 更新画布尺寸


  function updateCanvasSize(width, height) {
    if (arguments.length < 2) {
      width = this._el.scrollWidth - 40;
      height = this._el.scrollHeight - 10;
    }

    xhtml.css(this.__selectCanvas, {
      width: width + "px",
      height: height + "px"
    });
    xhtml.attr(this.__selectCanvas, {
      width: width,
      height: height
    });
  } // 取消选区


  function cancelSelect() {
    this.$$updateCanvasSize(1, 1);
    this.__cursor1 = {
      leftNum: 0,
      lineNum: 0
    };
    this.__cursor2 = {
      leftNum: 0,
      lineNum: 0
    };
  } // 删除选区


  function deleteSelect() {
    // 假定cursor2是结束光标
    var beginCursor = this.__cursor2,
        endCursor = this.__cursor1; // 根据行号来校对

    if (this.__cursor1.lineNum < this.__cursor2.lineNum) {
      beginCursor = this.__cursor1;
      endCursor = this.__cursor2;
    } else if (this.__cursor1.lineNum == this.__cursor2.lineNum) {
      // 根据列号来校对
      if (this.__cursor1.leftNum < this.__cursor2.leftNum) {
        beginCursor = this.__cursor1;
        endCursor = this.__cursor2;
      }
    }

    var newLineText = this._contentArray[beginCursor.lineNum].substr(0, beginCursor.leftNum) + this._contentArray[endCursor.lineNum].substr(endCursor.leftNum);

    this._contentArray.splice(beginCursor.lineNum, endCursor.lineNum - beginCursor.lineNum + 1, newLineText); // 校对光标和选区


    this.__leftNum = this.__cursor1.leftNum = this.__cursor2.leftNum = beginCursor.leftNum;
    this.__lineNum = this.__cursor1.lineNum = this.__cursor2.lineNum = beginCursor.lineNum;
    this.$$cancelSelect();
  } // 字典表


  var dictionary = (_dictionary = {
    // 数字
    48: [0, ')'],
    49: [1, '!'],
    50: [2, '@'],
    51: [3, '#'],
    52: [4, '$'],
    53: [5, '%'],
    54: [6, '^'],
    55: [7, '&'],
    56: [8, '*'],
    57: [9, '('],
    96: [0, 0],
    97: 1,
    98: 2,
    99: 3,
    100: 4,
    101: 5,
    102: 6,
    103: 7,
    104: 8,
    105: 9,
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    // 字母
    65: ["a", "A"],
    66: ["b", "B"],
    67: ["c", "C"],
    68: ["d", "D"],
    69: ["e", "E"],
    70: ["f", "F"],
    71: ["g", "G"],
    72: ["h", "H"],
    73: ["i", "I"],
    74: ["j", "J"],
    75: ["k", "K"],
    76: ["l", "L"],
    77: ["m", "M"],
    78: ["n", "N"],
    79: ["o", "O"],
    80: ["p", "P"],
    81: ["q", "Q"],
    82: ["r", "R"],
    83: ["s", "S"],
    84: ["t", "T"],
    85: ["u", "U"],
    86: ["v", "V"],
    87: ["w", "W"],
    88: ["x", "X"],
    89: ["y", "Y"],
    90: ["z", "Z"],
    // 方向
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    33: "page up",
    34: "page down",
    35: "end",
    36: "home",
    // 控制键
    16: "shift",
    17: "ctrl",
    18: "alt",
    91: "command",
    92: "command",
    93: "command",
    9: "tab",
    20: "caps lock",
    32: "spacebar",
    8: "backspace",
    13: "enter",
    27: "esc",
    46: "delete",
    45: "insert",
    144: "number lock",
    145: "scroll lock",
    12: "clear"
  }, _defineProperty(_dictionary, "45", "insert"), _defineProperty(_dictionary, 19, "pause"), _defineProperty(_dictionary, 112, "f1"), _defineProperty(_dictionary, 113, "f2"), _defineProperty(_dictionary, 114, "f3"), _defineProperty(_dictionary, 115, "f4"), _defineProperty(_dictionary, 116, "f5"), _defineProperty(_dictionary, 117, "f6"), _defineProperty(_dictionary, 118, "f7"), _defineProperty(_dictionary, 119, "f8"), _defineProperty(_dictionary, 120, "f9"), _defineProperty(_dictionary, 121, "f10"), _defineProperty(_dictionary, 122, "f11"), _defineProperty(_dictionary, 123, "f12"), _defineProperty(_dictionary, 189, ["-", "_"]), _defineProperty(_dictionary, 187, ["=", "+"]), _defineProperty(_dictionary, 219, ["[", "{"]), _defineProperty(_dictionary, 221, ["]", "}"]), _defineProperty(_dictionary, 220, ["\\", "|"]), _defineProperty(_dictionary, 186, [";", ":"]), _defineProperty(_dictionary, 222, ["'", '"']), _defineProperty(_dictionary, 188, [",", "<"]), _defineProperty(_dictionary, 190, [".", ">"]), _defineProperty(_dictionary, 191, ["/", "?"]), _defineProperty(_dictionary, 192, ["`", "~"]), _dictionary); // 非独立键字典

  var help_key = ["shift", "ctrl", "alt"];
  /**
   * 键盘按键
   * 返回键盘此时按下的键的组合结果
   * @since V0.2.5
   * @public
   */

  function keyString(event) {
    event = event || window.event;
    var keycode = event.keyCode || event.which;
    var key = dictionary[keycode] || keycode;
    if (!key) return;
    if (key.constructor !== Array) key = [key, key];
    var shift = event.shiftKey ? "shift+" : "",
        alt = event.altKey ? "alt+" : "",
        ctrl = event.ctrlKey ? "ctrl+" : "";
    var resultKey = "",
        preKey = ctrl + shift + alt;

    if (help_key.indexOf(key[0]) >= 0) {
      key[0] = key[1] = "";
    } // 判断是否按下了caps lock


    var lockPress = event.code == "Key" + event.key && !shift; // 只有字母（且没有按下功能Ctrl、shift或alt）区分大小写

    resultKey = preKey + (preKey == '' && lockPress ? key[1] : key[0]);

    if (key[0] == "") {
      resultKey = resultKey.replace(/\+$/, '');
    }

    return resultKey;
  } // 绑定键盘和鼠标等交互事件处理


  function bindEvent() {
    var _this5 = this;

    var mouseDown = false; // 辅助计算选择光标位置

    var calcCursor = function calcCursor(event) {
      var position = xhtml.position(_this5._el, event);
      var topIndex = Math.round((position.y - 20.5) / 21);
      if (topIndex < 0) topIndex = 0;
      if (topIndex >= _this5._contentArray.length) topIndex = _this5._contentArray.length - 1;
      return {
        leftNum: _this5.$$bestLeftNum(position.x, topIndex),
        lineNum: topIndex
      };
    }; // 获取光标之间的内容


    var calcTwoCursor = function calcTwoCursor() {
      // 假定cursor2是结束光标
      var beginCursor = _this5.__cursor2,
          endCursor = _this5.__cursor1; // 根据行号来校对

      if (_this5.__cursor1.lineNum < _this5.__cursor2.lineNum) {
        beginCursor = _this5.__cursor1;
        endCursor = _this5.__cursor2;
      } else if (_this5.__cursor1.lineNum == _this5.__cursor2.lineNum) {
        // 根据列号来校对
        if (_this5.__cursor1.leftNum < _this5.__cursor2.leftNum) {
          beginCursor = _this5.__cursor1;
          endCursor = _this5.__cursor2;
        }

        return _this5._contentArray[beginCursor.lineNum].substring(beginCursor.leftNum, endCursor.leftNum);
      } // 余下的一定是多行


      var resultData = "";
      resultData += _this5._contentArray[beginCursor.lineNum].substr(beginCursor.leftNum) + "\n";

      for (var lineNum = beginCursor.lineNum + 1; lineNum < endCursor.lineNum; lineNum++) {
        resultData += _this5._contentArray[lineNum] + "\n";
      }

      resultData += _this5._contentArray[endCursor.lineNum].substr(0, endCursor.leftNum);
      return resultData;
    }; // 鼠标按下的时候，记录开始光标位置并标记鼠标按下动作


    xhtml.bind(this._el, 'mousedown', function (event) {
      mouseDown = true;
      _this5.__cursor2 = _this5.__cursor1 = calcCursor(event);

      _this5.$$updateCanvasSize(); // 绘制选中效果


      _this5.$$updateSelectView();
    }); // 移动的时候不停的同步结束光标位置

    xhtml.bind(this._el, 'mousemove', function (event) {
      if (!mouseDown) return;
      _this5.__cursor2 = calcCursor(event); // 绘制选中效果

      _this5.$$updateSelectView();
    }); // 鼠标分开或移出的时候，标记鼠标放开

    xhtml.bind(this._el, 'mouseup', function () {
      return mouseDown = false;
    });
    xhtml.bind(this._el, 'mouseout', function () {
      return mouseDown = false;
    }); // 点击编辑界面

    xhtml.bind(this._el, 'click', function (event) {
      _this5.__helpInputDOM.innerHTML = '';
      var position = xhtml.position(_this5._el, event);
      var topIndex = Math.round((position.y - 20.5) / 21); // 如果超过了内容区域

      if (topIndex < 0 || topIndex >= _this5._contentArray.length) return;
      _this5.__lineNum = topIndex;
      _this5.__leftNum = _this5.$$bestLeftNum(position.x);

      _this5.$$updateCursorPosition();

      _this5.$$updateView();
    });

    var update = function update(text) {
      // 获取输入内容
      text = text || _this5.__focusDOM.value;
      text = _this5.$$filterText(text);
      _this5.__focusDOM.value = ""; // 如果有选区，先删除选区

      if (_this5.$$selectIsNotBlank()) _this5.$$deleteSelect(); // 如果输入的是回车，切割文本

      if (/^\n$/.test(text)) {
        if (_this5.__leftNum >= _this5._contentArray[_this5.__lineNum].length) {
          _this5._contentArray.splice(_this5.__lineNum + 1, 0, "");
        } else {
          _this5._contentArray.splice(_this5.__lineNum + 1, 0, _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum));

          _this5._contentArray[_this5.__lineNum] = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum);
        }

        _this5.__lineNum += 1;
        _this5.__leftNum = 0;
      } // 否则就是一堆文本（包括复制来的）
      else {
          var textArray = text.split(/\n/); // 如果只有一行文本(分开是为了加速)

          if (textArray.length <= 1) {
            _this5._contentArray[_this5.__lineNum] = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum) + text + _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum);
            _this5.__leftNum += text.length;
          } // 如果是复制的多行文本
          else {
              var _this5$_contentArray;

              // 需要切割的行两边文本
              var leftText = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum);

              var rightText = _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum); // 旧行文本拼接进来


              textArray[0] = leftText + textArray[0];
              textArray[textArray.length - 1] += rightText; // 新内容记录下来

              (_this5$_contentArray = _this5._contentArray).splice.apply(_this5$_contentArray, [_this5.__lineNum, 1].concat(_toConsumableArray(textArray)));

              _this5.__lineNum += textArray.length - 1;
              _this5.__leftNum = textArray[textArray.length - 1].length - rightText.length;
            }
        } // 着色并更新视图


      _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n')));

      _this5.$$updateCursorPosition();

      _this5.$$updateView(); // 通知文本改动


      _this5.__updated__();
    }; // 中文输入开始


    xhtml.bind(this.__focusDOM, 'compositionstart', function () {
      _this5.__needUpdate = false;
      _this5.__focusDOM.style.color = "rgba(0,0,0,0)";
      _this5.__focusDOM.style.borderLeft = '1px solid ' + _this5._colorCursor;
    }); // 中文输入结束

    xhtml.bind(this.__focusDOM, 'compositionend', function () {
      _this5.__needUpdate = true;
      _this5.__focusDOM.style.color = _this5._colorCursor;
      _this5.__focusDOM.style.borderLeft = "none";
      update(); // 辅助输入

      if (_this5.$input != null) _this5.__helpInputEvent = _this5.$input(_this5.__helpInputDOM, getInputMessage(_this5), _this5._contentArray) || {};
    }); // 输入

    xhtml.bind(this.__focusDOM, 'input', function () {
      // 如果是中文输入开始，不应该更新
      if (_this5.__needUpdate) {
        update(); // 辅助输入

        if (_this5.$input != null) _this5.__helpInputEvent = _this5.$input(_this5.__helpInputDOM, getInputMessage(_this5), _this5._contentArray) || {};
      }
    }); // 处理键盘控制

    xhtml.bind(this._el, 'keydown', function (event) {
      var keyStringCode = keyString(event); // 辅助输入前置拦截

      if (_this5.__helpInputDOM.innerHTML != '') {
        var __helpInputEvent = _this5.__helpInputEvent[keyStringCode];

        if (isFunction(__helpInputEvent)) {
          // 如果返回true表示继续调用，否则此快捷键结束
          if (!__helpInputEvent()) return;
        } else {
          _this5.__helpInputDOM.innerHTML = '';
        }
      } // 进入常规快捷键


      switch (keyStringCode) {
        // 全选
        case "ctrl+a":
          {
            // 修改选区范围
            _this5.__cursor1 = {
              leftNum: 0,
              lineNum: 0
            };
            _this5.__cursor2 = {
              lineNum: _this5._contentArray.length - 1,
              leftNum: _this5._contentArray[_this5._contentArray.length - 1].length
            }; // 绘制选中效果

            _this5.$$updateSelectView();

            break;
          }
        // 复制

        case "ctrl+c":
          {
            if (_this5.$$selectIsNotBlank()) {
              xhtml.copy(calcTwoCursor());

              _this5.__focusDOM.focus();
            }

            break;
          }
        // 剪切

        case "ctrl+x":
          {
            if (_this5.$$selectIsNotBlank()) {
              xhtml.copy(calcTwoCursor());

              _this5.__focusDOM.focus();

              _this5.$$deleteSelect(); // 由于内容改变，需要重新调用着色


              _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n'))); // 更新视图

              _this5.$$updateCursorPosition();

              _this5.$$updateView();

              _this5.$$cancelSelect(); // 通知文本改动


              _this5.__updated__();
            }

            break;
          }
        // 多空格输入或多行移位

        case "tab":
          {
            // tab用来控制输入多个空格，默认事件需要禁止
            xhtml.stopPropagation(event);
            xhtml.preventDefault(event); // 计算空格

            var blanks = "";

            for (var i = 0; i < _this5._tabSpace; i++) {
              blanks += " ";
            } // 如果有选区，特殊处理


            if (_this5.$$selectIsNotBlank()) {
              var beginLineNum = _this5.__cursor1.lineNum,
                  endLineNum = _this5.__cursor2.lineNum;

              if (beginLineNum > endLineNum) {
                beginLineNum = _this5.__cursor2.lineNum;
                endLineNum = _this5.__cursor1.lineNum;
              } // 在开头追究tab


              for (var lineNum = beginLineNum; lineNum <= endLineNum; lineNum++) {
                _this5._contentArray[lineNum] = blanks + _this5._contentArray[lineNum];
              } // 校对选择区域


              _this5.__cursor1.leftNum += _this5._tabSpace;
              _this5.__cursor2.leftNum += _this5._tabSpace; // 校对光标

              _this5.__leftNum += _this5._tabSpace;
              _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n')));

              _this5.$$updateCursorPosition();

              _this5.$$updateView();

              _this5.$$updateCanvasSize();

              _this5.$$updateSelectView(); // 通知文本改动


              _this5.__updated__();
            } else {
              update(blanks);
            }

            break;
          }
        // 光标向上

        case "up":
          {
            // 如果是第一行不需要任何处理
            if (_this5.__lineNum <= 0) return; // 向上一行

            _this5.__lineNum -= 1;
            _this5.__leftNum = _this5.$$bestLeftNum(_this5.$$textWidth(_this5._contentArray[_this5.__lineNum + 1].substr(0, _this5.__leftNum)) + 40);

            _this5.$$updateCursorPosition();

            _this5.$$updateView();

            _this5.$$cancelSelect();

            _this5._el.scrollTop -= 21;
            break;
          }
        // 光标向下

        case "down":
          {
            if (_this5.__lineNum >= _this5._contentArray.length - 1) return; // 向下一行

            _this5.__lineNum += 1;
            _this5.__leftNum = _this5.$$bestLeftNum(_this5.$$textWidth(_this5._contentArray[_this5.__lineNum - 1].substr(0, _this5.__leftNum)) + 40);

            _this5.$$updateCursorPosition();

            _this5.$$updateView();

            _this5.$$cancelSelect();

            _this5._el.scrollTop += 21;
            break;
          }
        // 光标向左

        case "left":
          {
            if (_this5.__leftNum <= 0) {
              if (_this5.__lineNum <= 0) return;
              _this5.__lineNum -= 1;
              _this5.__leftNum = _this5._contentArray[_this5.__lineNum].length;
            } else {
              _this5.__leftNum -= 1;
            }

            _this5.$$updateCursorPosition();

            _this5.$$cancelSelect();

            break;
          }
        // 光标向右

        case "right":
          {
            if (_this5.__leftNum >= _this5._contentArray[_this5.__lineNum].length) {
              if (_this5.__lineNum >= _this5._contentArray.length - 1) return;
              _this5.__lineNum += 1;
              _this5.__leftNum = 0;
            } else {
              _this5.__leftNum += 1;
            }

            _this5.$$updateCursorPosition();

            _this5.$$cancelSelect();

            break;
          }
        // 删除

        case "backspace":
          {
            // 如果有选区
            if (_this5.$$selectIsNotBlank()) {
              // 删除选区
              _this5.$$deleteSelect();
            } // 无选区的常规操作
            else {
                if (_this5.__leftNum <= 0) {
                  if (_this5.__lineNum <= 0) return;
                  _this5.__lineNum -= 1;
                  _this5.__leftNum = _this5._contentArray[_this5.__lineNum].length; // 一行的开头应该删除本行（合并到前一行）

                  _this5._contentArray[_this5.__lineNum] += _this5._contentArray[_this5.__lineNum + 1];

                  _this5._contentArray.splice(_this5.__lineNum + 1, 1);
                } else {
                  _this5.__leftNum -= 1;
                  _this5._contentArray[_this5.__lineNum] = _this5._contentArray[_this5.__lineNum].substring(0, _this5.__leftNum) + _this5._contentArray[_this5.__lineNum].substring(_this5.__leftNum + 1);
                }
              } // 由于内容改变，需要重新调用着色


            _this5.__formatData = _this5.$$diff(_this5.$shader(_this5._contentArray.join('\n'))); // 更新视图

            _this5.$$updateCursorPosition();

            _this5.$$updateView();

            _this5.$$cancelSelect(); // 通知文本改动


            _this5.__updated__();

            break;
          }
      }
    });
  } // 判断一行是否匹配


  var euqalLine = function euqalLine(line1, line2) {
    if (line1.length != line2.length) return false;

    for (var i = 0; i < line1.length; i++) {
      if (line1[i].content != line2[i].content || line1[i].color != line2[i].color) return false;
    }

    return true;
  };
  /**
   * 为了加速页面渲染，我们引入差异对比
   * 简单的理解就是：
   * 原本在数据改变的时候直接更新整个DOM的方式替换成只功能必要的DOM
   */


  function diff(newFormatData) {
    /**
     * 思路：
     * 
     * 从开始匹配无法匹配的，匹配条个数记作beginNum
     * 再从结尾匹配无法匹配的，匹配条个数记作endNum
     * 只有begin和end之间的数据需要更新DOM
     * 
     * 当然，也有特殊情况，因此在进行回归前，先把特殊情况提取处理
     * 
     */
    var oldFormatData = this.__formatData;

    if (oldFormatData) {
      // 寻找开始匹配行数
      var beginNum = 0;

      for (var i = 0; i < oldFormatData.length && i < newFormatData.length; i++) {
        if (!euqalLine(oldFormatData[i], newFormatData[i])) {
          break;
        }

        beginNum += 1;
      } // 寻找结束匹配行数


      var endNum = 0;

      for (var _i4 = 1; _i4 <= oldFormatData.length && _i4 <= newFormatData.length; _i4++) {
        if (!euqalLine(oldFormatData[oldFormatData.length - _i4], newFormatData[newFormatData.length - _i4])) {
          break;
        }

        endNum += 1;
      }

      var minLength = Math.min(oldFormatData.length, newFormatData.length); // 校对(如果复用重叠了)

      if (beginNum + endNum >= minLength) {
        endNum = minLength - beginNum - 1; // 由于不知道是删除还是增加，因此可能出现负数

        if (endNum < 0) endNum = 0;
      } // 对比以后的差异信息


      this.__diff = {
        beginNum: beginNum,
        endNum: endNum
      };
    }

    return newFormatData;
  } // 外来文本统一过滤处理


  function filterText(oralStr) {
    // 把tab统一变成空格
    var tab = "";

    for (var i = 0; i < this._tabSpace; i++) {
      tab += " ";
    }

    return oralStr.replace(/\t/g, tab);
  }

  var wscode = function wscode(options) {
    var _this6 = this;

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
      var shader = function shader() {
        var resultData = [];

        _this6._contentArray.forEach(function (text) {
          resultData.push([{
            content: text,
            color: _this6._colorText
          }]);
        });

        return resultData;
      }; // 格式化


      var format = function format(textString) {
        return textString;
      };

      this._el = options.el; // 公共配置

      options.color = options.color || {};
      this._colorBackground = options.color.background || "#d6d6e4";
      /*编辑器背景*/

      this._colorText = options.color.text || "#000000";
      /*普通文本颜色*/

      this._colorNumber = options.color.number || "#888484";
      /*行号颜色*/

      this._colorEdit = options.color.edit || "#eaeaf1";
      /*编辑行颜色*/

      this._colorCursor = options.color.cursor || "#ff0000";
      /*光标颜色*/

      this._colorSelect = options.color.select || "#6c6cf1";
      /*选择背景*/

      this._fontFamily = options["font-family"] || "新宋体";
      /*字体*/

      this._fontWeight = options["font-weight"] || 600;
      /*字重*/

      this._tabSpace = options.tabSpace || 4;
      /*设置一个tab表示多少个空格*/
      // 文本

      this._contentArray = isString(options.content) ? (this.$$filterText(options.content) + "").split("\n") : [""]; // 着色方法

      this.$shader = isFunction(options.shader) ? options.shader : shader; // 格式化方法

      this.$format = isFunction(options.format) ? options.format : format; // 辅助输入

      this.$input = isFunction(options.input) ? options.input : null;
    } else {
      // 挂载点是必须的，一定要有
      throw new Error('options.el is not a element!');
    } // 先初始化DOM


    this.$$initDom(); // 初始化控制变量

    this.__needUpdate = true;
    this.__lineNum = this._contentArray.length - 1;
    this.__leftNum = this._contentArray[this.__lineNum].length;
    this.__cursor1 = this.__cursor2 = {
      leftNum: 0,
      lineNum: 0
    };
    this.__formatData = this.$$diff(this.$shader(this._contentArray.join('\n'))); // 初始化视图

    this.$$initView(); // 更新视图

    this.$$updateView(); // 绑定操作

    this.$$bindEvent();

    this.__updated__ = function () {}; // 编辑器管理的文本发生改变后会主动触发callback方法


    this.updated = function (callback) {
      _this6.__updated__ = callback;
    }; // 获取当前编辑器代码


    this.valueOf = function () {
      return _this6._contentArray.join('\n');
    }; // 在当前光标位置输入新的内容


    this.input = function () {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var cursor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      // 先删除多余的内容
      if (cursor != 0) {
        if (number != 0) {
          _this6._contentArray[_this6.__lineNum] = _this6._contentArray[_this6.__lineNum].substring(0, _this6.__leftNum + cursor) + _this6._contentArray[_this6.__lineNum].substring(_this6.__leftNum + cursor + number);
        } // 修改光标位置


        _this6.__leftNum += cursor;
      } // 输入以触发更新


      _this6.__focusDOM.value = content;
      xhtml.trigger(_this6.__focusDOM, 'input');

      _this6.__focusDOM.focus();
    }; // 格式化代码


    this.format = function () {
      // 格式化内容
      _this6._contentArray = _this6.$format(_this6._contentArray.join('\n'), _this6._tabSpace).split('\n');
      _this6.__lineNum = _this6._contentArray.length - 1;
      _this6.__leftNum = _this6._contentArray[_this6.__lineNum].length; // 着色

      _this6.__formatData = _this6.$$diff(_this6.$shader(_this6._contentArray.join('\n'))); // 更新视图

      _this6.$$updateView(); // 更新光标位置


      _this6.$$initView();
    };
  }; // 挂载辅助方法


  wscode.prototype.$$textWidth = textWidth;
  wscode.prototype.$$bestLeftNum = bestLeftNum;
  wscode.prototype.$$calcCanvasXY = calcCanvasXY;
  wscode.prototype.$$selectIsNotBlank = selectIsNotBlank;
  wscode.prototype.$$filterText = filterText;
  wscode.prototype.$$toTemplate = toTemplate; // 挂载核心方法

  wscode.prototype.$$initDom = initDom;
  wscode.prototype.$$initView = initView;
  wscode.prototype.$$updateView = updateView;
  wscode.prototype.$$updateSelectView = updateSelectView;
  wscode.prototype.$$updateCursorPosition = updateCursorPosition;
  wscode.prototype.$$updateCanvasSize = updateCanvasSize;
  wscode.prototype.$$cancelSelect = cancelSelect;
  wscode.prototype.$$deleteSelect = deleteSelect;
  wscode.prototype.$$bindEvent = bindEvent; // 性能优化系列方法

  wscode.prototype.$$diff = diff;
  wscode.author = '心叶（yelloxing@gmail.com）';

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = wscode;
  } else {
    window.WSCode = wscode;
  }
})();