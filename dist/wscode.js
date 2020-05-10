/*!
* web Studio Code - 🎉 An Editor Used on the Browser Side.
* git+https://github.com/yelloxing/Web-Studio-Code.git
*
* author 心叶
*
* version 1.0.1
*
* build Fri May 08 2020
*
* Copyright yelloxing
* Released under the MIT license
*
* Date:Mon May 11 2020 00:23:00 GMT+0800 (GMT+08:00)
*/

"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

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
    if (value === null || _typeof2(value) !== 'object' || getType(value) != '[object Object]') {
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
    return value !== null && _typeof2(value) === 'object' && (value.nodeType === 1 || value.nodeType === 9 || value.nodeType === 11) && !isPlainObject(value);
  }
  /**
   * 判断一个值是不是String。
   *
   * @since V0.1.2
   * @public
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */


  function isString(value) {
    var type = _typeof2(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
  } // 普通文本切割


  function normalSplit(content, colors) {
    var resultData = [];
    (content || "").split(/\n/).forEach(function (text) {
      resultData.push([{
        type: "normal",
        content: text,
        color: colors.normal
      }]);
    });
    return resultData;
  } // html切割


  function htmlSplit(text, colors, isFormat) {
    alert("html语言编辑器开发中");
  } // css切割


  function cssSplit(text, colors, isFormat) {
    alert("css语言编辑器开发中");
  } // js切割


  function jsSplit(text, colors, isFormat) {
    alert("js语言编辑器开发中");
  }
  /**
   * 
   * 格式化配置
   * 
   * 所有的配置校验和默认值设置等都应该在这里进行
   * 经过这里处理以后，后续不需要再进行校验了
   * 因此这里的内容的更改一定要慎重
   * 
   */


  function formatOptions(options) {
    // 编辑器挂载点
    if (isElement(options.el)) {
      // 语言类型，默认纯文本
      options.format = {
        js: jsSplit,
        css: cssSplit,
        html: htmlSplit
      }[options.lang] || normalSplit; // 着色

      options.color = options.color || {};
      options.color.background = options.color.background || "#d6d6e4";
      /*编辑器背景*/

      options.color.normal = options.color.normal || "#000";
      /*普通文本颜色*/

      options.color.key = options.color.key || "#ec0b0b";
      /*关键字颜色*/

      options.color.note = options.color.note || "#8BC34A";
      /*注释颜色*/

      options.color.variable = options.color.variable || "#0a6893";
      /*变量颜色*/

      options.color.lineNum = options.color.lineNum || "#888484";
      /*行号颜色*/

      options.color.editLine = options.color.editLine || "#eaeaf1";
      /*编辑行颜色*/

      if (isString(options.content)) {
        options.textArray = (options.content + "").split("\n");
      } else {
        options.textArray = [""];
      }
    } else {
      // 挂载点是必须的，一定要有
      throw new Error('options.el is not a element!');
    }
  }

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var image2D_min = createCommonjsModule(function (module) {
    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (t) {
      return _typeof2(t);
    } : function (t) {
      return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
    };

    (function () {
      var e = Object.prototype.toString;

      function r(t) {
        if (t == null) {
          return t === undefined ? "[object Undefined]" : "[object Null]";
        }

        return e.call(t);
      }

      function n(t) {
        if (t === null || (typeof t === "undefined" ? "undefined" : _typeof(t)) !== "object" || r(t) != "[object Object]") {
          return false;
        }

        if (Object.getPrototypeOf(t) === null) {
          return true;
        }

        var e = t;

        while (Object.getPrototypeOf(e) !== null) {
          e = Object.getPrototypeOf(e);
        }

        return Object.getPrototypeOf(t) === e;
      }

      function m(t) {
        return t !== null && (typeof t === "undefined" ? "undefined" : _typeof(t)) === "object" && (t.nodeType === 1 || t.nodeType === 9 || t.nodeType === 11) && !n(t);
      }

      function i(t) {
        var e = typeof t === "undefined" ? "undefined" : _typeof(t);
        return t != null && (e === "object" || e === "function");
      }

      function y(t) {
        if (!i(t)) {
          return false;
        }

        var e = r(t);
        return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object Proxy]";
      }

      function b(t) {
        var e = typeof t === "undefined" ? "undefined" : _typeof(t);
        return e === "string" || e === "object" && t != null && !Array.isArray(t) && r(t) === "[object String]";
      }

      var u = function t(e, r) {
        for (var n in r) {
          try {
            e[n] = r[n];
          } catch (t) {
            throw new Error("Illegal property value！");
          }
        }

        return e;
      };

      var a = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      };
      var x = {
        whitespace: "[\\x20\\t\\r\\n\\f]",
        blank: "[\\n\\f\\r]",
        identifier: "(?:\\\\.|[\\w-]|[^\0-\\xa0])+"
      };
      var f = ["href", "title", "show", "type", "role", "actuate"];

      function l(t) {
        return t !== null && (typeof t === "undefined" ? "undefined" : _typeof(t)) === "object" && t.nodeType === 3 && !n(t);
      }

      var c = function t(e, r) {
        if ("innerHTML" in SVGElement.prototype === false || "innerHTML" in SVGSVGElement.prototype === false) {
          var n = document.createElement("div");
          n.innerHTML = r;

          var o = function t(e) {
            var r = document.createElementNS(a.svg, e.tagName.toLowerCase());
            var n = e.attributes;

            for (var i = 0; n && i < n.length; i++) {
              if (f.indexOf(n[i].nodeName) >= 0) {
                r.setAttributeNS(a.xlink, "xlink:" + n[i].nodeName, e.getAttribute(n[i].nodeName));
              } else {
                r.setAttribute(n[i].nodeName, e.getAttribute(n[i].nodeName));
              }
            }

            return r;
          };

          var i = o(n.firstChild);

          (function t(e, r) {
            var n = e.firstChild;

            if (l(n)) {
              r.textContent = e.innerText;
              return;
            }

            while (n) {
              var i = o(n);
              r.appendChild(i);
              if (n.firstChild) t(n, i);
              n = n.nextSibling;
            }
          })(n.firstChild, i);

          e.appendChild(i);
        } else {
          e.innerHTML = r;
        }
      };

      var o = function t(e, r) {
        var n = void 0,
            i = void 0;

        if (r === "html" || r === "HTML") {
          if (/^<tr[> ]/.test(e)) {
            n = document.createElement("tbody");
          } else if (/^<th[> ]/.test(e) || /^<td[> ]/.test(e)) {
            n = document.createElement("tr");
          } else if (/^<thead[> ]/.test(e) || /^<tbody[> ]/.test(e)) {
            n = document.createElement("table");
          } else {
            n = document.createElement("div");
          }

          n.innerHTML = e;

          if (!/</.test(n.innerHTML)) {
            throw new Error("This template cannot be generated using div as a container:" + e + "\nPlease contact us: https://github.com/yelloxing/image2D/issues");
          }
        } else {
          n = document.createElementNS(a.svg, "svg");
          c(n, e);
        }

        i = n.childNodes;

        for (var o = 0; o < i.length; o++) {
          if (m(i[o])) return i[o];
        }
      };

      function _(t, e) {
        if (new RegExp("^" + x.identifier + "$").test(t)) t = "<" + t + "></" + t + ">";
        var r = /^<([^(>| )]+)/.exec(t)[1];
        if ("canvas" === r.toLowerCase()) e = "HTML";
        if (!b(e) && ["div", "span", "p", "em", "i", "table", "ul", "ol", "dl", "form", "input", "button", "textarea", "header", "footer", "article", "section", "h1", "h2", "h3", "h4", "h5", "h6", "image", "video", "iframe", "object", "style", "script", "link", "tr", "td", "th", "tbody", "thead"].indexOf(r.toLowerCase()) >= 0) e = "HTML";
        return o(t, e);
      }

      function d(t, e) {
        if (b(e) || b(t)) {
          t = t.trim().replace(new RegExp(x.blank, "g"), "");

          if (typeof e == "string" || /^</.test(t)) {
            var r = _(t, e);

            if (m(r)) return [r];else return [];
          } else if (t === "*") {
            return e.getElementsByTagName("*");
          }

          var n = t.match(new RegExp("#" + x.identifier, "g"));

          if (n) {
            var i = document.getElementById(n[0].replace("#", ""));
            if (m(i)) return [i];else return [];
          }

          var o = t.match(new RegExp("\\." + x.identifier, "g")),
              a = t.match(new RegExp("^" + x.identifier));

          if (a || o) {
            var u = e.getElementsByTagName(a ? a[0] : "*"),
                f = [];

            for (var l = 0; l < u.length; l++) {
              var c = " " + u[l].getAttribute("class") + " ",
                  d = true;

              for (var s = 0; o && s < o.length; s++) {
                if (!c.match(" " + o[s].replace(".", "") + " ")) {
                  d = false;
                  break;
                }
              }

              if (d) f.push(u[l]);
            }

            return f;
          } else {
            throw new Error("Unsupported selector:" + t);
          }
        } else if (m(t)) {
          return [t];
        } else if (t && (t.constructor === Array || t.constructor === HTMLCollection || t.constructor === NodeList)) {
          var h = [];

          for (var v = 0; v < t.length; v++) {
            if (m(t[v])) h.push(t[v]);
          }

          return h;
        } else if (t && t.constructor === T) {
          return t;
        } else if (y(t)) {
          var p = e.getElementsByTagName("*"),
              g = [];

          for (var w = 0; w < p.length; w++) {
            if (t(p[w])) g.push(p[w]);
          }

          return g;
        } else {
          throw new Error("Unknown selector:" + t);
        }
      }

      var T = function t(e, r) {
        return new t.prototype.init(e, r);
      };

      T.prototype.init = function (t, e) {
        this.context = e = e || document;
        var r = d(t, e),
            n = void 0;

        for (n = 0; n < r.length; n++) {
          this[n] = r[n];
        }

        this.length = r.length;
        return this;
      };

      T.prototype.extend = T.extend = function () {
        var t = arguments[0] || {};
        var e = arguments[1] || {};
        var r = arguments.length;

        if (r === 1) {
          e = t;
          t = this;
        }

        if (!i(t)) {
          t = {};
        }

        for (var n in e) {
          try {
            t[n] = e[n];
          } catch (t) {
            throw new Error("Illegal property value！");
          }
        }

        return t;
      };

      T.prototype.init.prototype = T.prototype;

      function t(t) {
        var f = t || {},
            l = void 0,
            n = void 0;

        var i = function t() {
          var a = [],
              u = 0,
              f = 0;

          (function t(e, r) {
            if (r > f) f = r;
            var n = void 0;

            for (n = 0; n < e.children.length; n++) {
              t(l[e.children[n]], r + 1);
            }

            l[e.id].left = r + .5;

            if (n == 0) {
              if (a[r] == undefined) a[r] = -.5;
              if (a[r - 1] == undefined) a[r - 1] = -.5;
              l[e.id].top = a[r] + 1;
              var i = a[r] + 1 + (l[e.pid].children.length - 1) * .5;
              if (i - 1 < a[r - 1]) l[e.id].top = a[r - 1] + 1 - (l[e.pid].children.length - 1) * .5;
            } else {
              l[e.id].top = (l[e.children[0]].top + l[e.children[n - 1]].top) * .5;
            }

            if (l[e.id].top <= a[r]) {
              var o = a[r] + 1 - l[e.id].top;

              (function t(e, r) {
                l[e].top += o;
                if (a[r] < l[e].top) a[r] = l[e].top;
                var n = void 0;

                for (n = 0; n < l[e].children.length; n++) {
                  t(l[e].children[n], r + 1);
                }
              })(e.id, r);
            }

            a[r] = l[e.id].top;
            if (l[e.id].top + .5 > u) u = l[e.id].top + .5;
          })(l[n], 0);

          return {
            node: l,
            root: n,
            size: u,
            deep: f + 1
          };
        };

        var o = function t(o) {
          var a = {};
          var e = f.root(o),
              u = void 0,
              r = void 0;
          u = r = f.id(e);
          a[u] = {
            data: e,
            pid: null,
            id: u,
            children: []
          };

          (function t(e, r) {
            var n = f.child(e, o),
                i = void 0;

            for (i = 0; n && i < n.length; i++) {
              u = f.id(n[i]);
              a[r].children.push(u);
              a[u] = {
                data: n[i],
                pid: r,
                id: u,
                children: []
              };
              t(n[i], u);
            }
          })(e, u);

          return [r, a];
        };

        var e = function t(e) {
          var r = o(e);
          l = r[1];
          n = r[0];
          return i();
        };

        e.root = function (t) {
          f.root = t;
          return e;
        };

        e.child = function (t) {
          f.child = t;
          return e;
        };

        e.id = function (t) {
          f.id = t;
          return e;
        };

        return e;
      }

      var E = function t(e, r, n, i, o) {
        var a = Math.cos(n),
            u = Math.sin(n);
        return [+((i - e) * a - (o - r) * u + e).toFixed(7), +((i - e) * u + (o - r) * a + r).toFixed(7)];
      };

      var s = function t(e, r, n, i, o) {
        var a = Math.sqrt(e * e + r * r);
        return [+(e * n / a + i).toFixed(7), +(r * n / a + o).toFixed(7)];
      };

      var h = function t(e, r, n, i, o) {
        return [+(n * (i - e) + e).toFixed(7), +(n * (o - r) + r).toFixed(7)];
      };

      var v = function t(o) {
        o = u({
          d: [1, 1],
          c: [0, 0],
          p: [0, 0]
        }, o);
        var a = {
          rotate: function t(e) {
            var r = o.d[0] + o.p[0],
                n = o.d[1] + o.p[1];
            var i = E(o.p[0], o.p[1], e, r, n);
            o.d = [i[0] - o.p[0], i[1] - o.p[1]];
            return a;
          },
          move: function t(e) {
            o.p = s(o.d[0], o.d[1], e, o.p[0], o.p[1]);
            return a;
          },
          scale: function t(e) {
            o.p = h(o.c[0], o.c[1], e, o.p[0], o.p[1]);
            return a;
          },
          value: function t() {
            return o.p;
          }
        };
        return a;
      };

      function p(y) {
        y = u({
          "begin-deg": 0,
          deg: Math.PI * 2
        }, y);
        var b = t().root(y.root).child(y.child).id(y.id);

        var e = function t(e) {
          var r = b(e);

          for (var n in r.node) {
            r.node[n].deep = r.node[n].left - .5;
          }

          if (y.type === "LR" || y.type === "RL") {
            var i = y.width / r.deep;
            if ("RL" === y.type) i *= -1;
            var o = y.height / (r.size - -.5);

            for (var a in r.node) {
              var u = r.node[a];
              r.node[a].left = +(("RL" == y.type ? y.width : 0) - -u.left * i).toFixed(7);
              r.node[a].top = +(u.top * o).toFixed(7);
            }
          } else if (y.type === "TB" || y.type === "BT") {
            var f = y.height / r.deep;
            if ("BT" == y.type) f *= -1;
            var l = y.width / (r.size - -.5);
            var c = void 0,
                d = void 0;

            for (var s in r.node) {
              var h = r.node[s];
              c = h.left;
              d = h.top;
              r.node[s].top = +(("BT" == y.type ? y.height : 0) - -c * f).toFixed(7);
              r.node[s].left = +(d * l).toFixed(7);
            }
          } else if (y.type === "circle") {
            var v = y.radius / (r.deep - 1);
            var p = y.deg / (r.size - -.5);

            for (var g in r.node) {
              var w = r.node[g];
              r.node[g].deg = (y["begin-deg"] - -p * w.top) % (Math.PI * 2);
              var m = E(y.cx, y.cy, r.node[g].deg, y.cx - -v * (w.left - .5), y.cy);
              r.node[g].left = +m[0];
              r.node[g].top = +m[1];
            }
          }

          y.drawer(r);
          return t;
        };

        e.config = function (t) {
          y = u(y, t);
          return e;
        };

        e.drawer = function (t) {
          y.drawer = t;
          return e;
        };

        return e;
      }

      function g(t) {
        return typeof t === "number" || t !== null && (typeof t === "undefined" ? "undefined" : _typeof(t)) === "object" && r(t) === "[object Number]";
      }

      function w(f) {
        f = u({
          "begin-deg": -Math.PI / 2,
          deg: Math.PI * 2,
          radius: []
        }, f);

        if (!y(f.value)) {
          throw new Error("config.value must be a function!");
        }

        var e = function t(e) {
          var r = 0,
              n = [],
              i = 0;

          for (var o in e) {
            n.push({
              value: f.value(e[o], o, r),
              data: e[o],
              key: o,
              index: r,
              dots: []
            });
            i += n[r].value;
            r += 1;
          }

          for (r = 0; r < n.length; r++) {
            n[r].beginDeg = r === 0 ? f["begin-deg"] : n[r - 1].beginDeg + n[r - 1].deg;
            var a = n[r].value / i;
            n[r].deg = a * f.deg;
            n[r].percent = new Number(a * 100).toFixed(2);
          }

          if (g(f.cx) && g(f.cy)) {
            for (r = 0; r < f.radius.length; r++) {
              for (var u = 0; u < n.length; u++) {
                n[u].dots.push(E(f.cx, f.cy, n[u].beginDeg + n[u].deg * .5, f.cx + f.radius[r], f.cy));
              }
            }
          }

          if (y(f.drawer)) {
            f.drawer(n);
          }
        };

        e.config = function (t) {
          f = u(f, t);
          return e;
        };

        e.drawer = function (t) {
          f.drawer = t;
          return e;
        };

        return e;
      }

      function C(t, e, r, n) {
        n = n || 0;
        var i = Math.sqrt(e * e + r * r + n * n);
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e * t / i, r * t / i, n * t / i, 1];
      }

      function k(t) {
        var e = Math.sin(t),
            r = Math.cos(t);
        return [r, e, 0, 0, -e, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      }

      function M(t, e, r, n, i, o) {
        n = n || 0;
        i = i || 0;
        o = o || 0;
        return [t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, n - n * t, i - i * e, o - o * r, 1];
      }

      function A(t, e, r, n, i, o) {
        if (typeof t === "number" && typeof e === "number") {
          if (typeof r !== "number") {
            r = 0;
            n = t;
            i = e;
            o = 1;
          } else if (typeof n !== "number" || typeof i !== "number" || typeof o !== "number") {
            n = t;
            i = e;
            o = r;
            t = 0;
            e = 0;
            r = 0;
          }

          if (t == n && e == i && r == o) throw new Error("It's not a legitimate ray!");
          var a = Math.sqrt((n - t) * (n - t) + (i - e) * (i - e)),
              u = a != 0 ? (i - e) / a : 1,
              f = a != 0 ? (n - t) / a : 0,
              l = (n - t) * f + (i - e) * u,
              c = o - r,
              d = Math.sqrt(l * l + c * c),
              s = d != 0 ? c / d : 1,
              h = d != 0 ? l / d : 0;
          return [[u, s * f, f * h, 0, -f, u * s, u * h, 0, 0, -h, s, 0, e * f - t * u, r * h - t * f * s - e * u * s, -t * f * h - e * u * h - r * s, 1], [u, -f, 0, 0, s * f, s * u, -h, 0, f * h, u * h, s, 0, t, e, r, 1]];
        } else {
          throw new Error("a1 and b1 is required!");
        }
      }

      var N = function t(e, r) {
        var n = [];

        for (var i = 0; i < 4; i++) {
          for (var o = 0; o < r.length / 4; o++) {
            n[o * 4 + i] = e[i] * r[o * 4] + e[i + 4] * r[o * 4 + 1] + e[i + 8] * r[o * 4 + 2] + e[i + 12] * r[o * 4 + 3];
          }
        }

        return n;
      };

      function L(t) {
        var l = t || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        var c = {
          move: function t(e, r, n, i) {
            l = N(C(e, r, n, i), l);
            return c;
          },
          rotate: function t(e, r, n, i, o, a, u) {
            var f = A(r, n, i, o, a, u);
            l = N(N(N(f[1], k(e)), f[0]), l);
            return c;
          },
          scale: function t(e, r, n, i, o, a) {
            l = N(M(e, r, n, i, o, a), l);
            return c;
          },
          multiply: function t(e, r) {
            l = r ? N(l, e) : N(e, l);
            return c;
          },
          use: function t(e, r, n, i) {
            n = n || 0;
            i = i || 1;
            var o = N(l, [e, r, n, i]);
            o[0] = +o[0].toFixed(7);
            o[1] = +o[1].toFixed(7);
            o[2] = +o[2].toFixed(7);
            o[3] = +o[3].toFixed(7);
            return o;
          },
          value: function t() {
            return l;
          }
        };
        return c;
      }

      var S = [];
      var P = 13;
      var j = 400;
      var I = null;

      function R(e, t, r) {
        var f = {
          timer: function t(e, r, n) {
            if (!e) {
              throw new Error("Tick is required!");
            }

            r = r || j;
            var i = new Date().valueOf() + "_" + (Math.random() * 1e3).toFixed(0);
            S.push({
              id: i,
              createTime: new Date(),
              tick: e,
              duration: r,
              callback: n
            });
            f.start();
            return i;
          },
          start: function t() {
            if (!I) {
              I = setInterval(f.tick, P);
            }
          },
          tick: function t() {
            var e = void 0,
                r = void 0,
                t = void 0,
                n = void 0,
                i = void 0,
                o = void 0,
                a = void 0,
                u = S;
            S = [];
            S.length = 0;

            for (r = 0; r < u.length; r++) {
              i = u[r];
              e = i.createTime;
              t = i.tick;
              o = i.duration;
              n = i.callback;
              a = (+new Date() - e) / o;
              a = a > 1 ? 1 : a;
              t(a);

              if (a < 1 && i.id) {
                S.push(i);
              } else if (n) {
                n(a);
              }
            }

            if (S.length <= 0) {
              f.stop();
            }
          },
          stop: function t() {
            if (I) {
              clearInterval(I);
              I = null;
            }
          }
        };
        var n = f.timer(function (t) {
          e(t);
        }, t, r);
        return function () {
          var t = void 0;

          for (t in S) {
            if (S[t].id == n) {
              S[t].id = undefined;
              return;
            }
          }
        };
      }

      var F = 9007199254740991;

      function D(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= F;
      }

      function z(t) {
        return t != null && typeof t != "function" && D(t.length);
      }

      function B(t) {
        return z(t) && !b(t);
      }

      function O(t, e) {
        if (e) {
          return B(t);
        }

        return Array.isArray(t);
      }

      function G(t, e) {
        for (var r in e) {
          try {
            t[r] = e[r];
          } catch (t) {
            throw new Error("Illegal property value！");
          }
        }

        return t;
      }

      function H(f) {
        f = G({
          u: .5
        }, f);
        var l = void 0,
            c = void 0,
            d = void 0;

        var s = function t(e) {
          if (l) {
            var r = (e - c) / (d - c),
                n = r * r,
                i = r * n;
            var o = i * l[0] + n * l[1] + r * l[2] + l[3];
            return o * (d - c);
          } else throw new Error("You shoud first set the position!");
        };

        s.setP = function (t, e, r, n, i, o) {
          if (t < r) {
            c = t;
            d = r;
            var a = f.u * i,
                u = f.u * o;
            e /= r - t;
            n /= r - t;
            l = [2 * e - 2 * n + a + u, 3 * n - 3 * e - 2 * a - u, a, e];
          } else throw new Error("The point x-position should be increamented!");

          return s;
        };

        return s;
      }

      function $(e, t, r, n) {
        if (!y(r)) {
          n = r;
          r = false;
        }

        var i = {
          ease: [.25, .1, .5, 1],
          "ease-in": [.5, 0, .75, .6],
          "ease-in-out": [.43, .01, .58, 1],
          "ease-out": [.25, .6, .5, 1],
          linear: "default"
        }[n] || n;

        var o = function t(e) {
          return e;
        };

        if (i && O(i) && i.length == 4) {
          o = H({
            u: 1
          }).setP(0, 0, 1, 1, i[1] / i[0], (1 - i[3]) / (1 - i[2]));
        }

        return R(function (t) {
          e(o(t));
        }, t, function (t) {
          if (y(r)) {
            if (t != 1) t = o(t);
            r(t);
          }
        });
      }

      function q(i) {
        i = u({
          t: 0
        }, i);
        var o = void 0,
            r = void 0;

        var a = function t(e) {
          if (o) {
            r = -1;

            while (r + 1 < o.x.length && (e > o.x[r + 1] || r == -1 && e >= o.x[r + 1])) {
              r += 1;
            }

            if (r == -1 || r >= o.h.length) throw new Error("Coordinate crossing!");
            return o.h[r](e);
          } else {
            throw new Error("You shoud first set the position!");
          }
        };

        a.setT = function (t) {
          if (typeof t === "number") {
            i.t = t;
          } else {
            throw new Error("Expecting a figure!");
          }

          return a;
        };

        a.setP = function (t) {
          o = {
            x: [],
            h: []
          };
          var e = void 0,
              r = (t[1][1] - t[0][1]) / (t[1][0] - t[0][0]),
              n = void 0;
          o.x[0] = t[0][0];

          for (e = 1; e < t.length; e++) {
            if (t[e][0] <= t[e - 1][0]) throw new Error("The point position should be increamented!");
            o.x[e] = t[e][0];
            n = e < t.length - 1 ? (t[e + 1][1] - t[e - 1][1]) / (t[e + 1][0] - t[e - 1][0]) : (t[e][1] - t[e - 1][1]) / (t[e][0] - t[e - 1][0]);
            o.h[e - 1] = H({
              u: (1 - i.t) * .5
            }).setP(t[e - 1][0], t[e - 1][1], t[e][0], t[e][1], r, n);
            r = n;
          }

          return a;
        };

        return a;
      }

      function V(t, e) {
        var r = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(t, null) : t.currentStyle;
        return b(e) ? r.getPropertyValue(e) : r;
      }

      var W = function t(e) {
        var r = document.getElementsByTagName("head")[0];
        r.style["color"] = e;
        var n = V(r, "color");
        var i = n.replace(/^rgba?\(([^)]+)\)$/, "$1").split(new RegExp("\\," + x.whitespace));
        return [+i[0], +i[1], +i[2], i[3] == undefined ? 1 : +i[3]];
      };

      var U = function t(e) {
        var r = [];

        for (var n = 1; n <= e; n++) {
          r.push("rgb(" + (Math.random(1) * 230 + 20).toFixed(0) + "," + (Math.random(1) * 230 + 20).toFixed(0) + "," + (Math.random(1) * 230 + 20).toFixed(0) + ")");
        }

        return r;
      };

      var X = function t(e, r) {
        var n = d(e, r || document);

        if (n.length > 0) {
          for (var i = 0; i < this.length; i++) {
            n[0].appendChild(this[i]);
          }
        } else {
          throw new Error("Target empty!");
        }

        return this;
      };

      var Y = function t(e, r) {
        var n = d(e, r || document);

        if (n.length > 0) {
          for (var i = 0; i < this.length; i++) {
            n[0].insertBefore(this[i], n[0].childNodes[0]);
          }
        } else {
          throw new Error("Target empty!");
        }

        return this;
      };

      var Q = function t(e, r) {
        var n = d(e, r || document);

        if (n.length > 0) {
          for (var i = 0; i < this.length; i++) {
            n[0].parentNode.insertBefore(this[i], n[0].nextSibling);
          }
        } else {
          throw new Error("Target empty!");
        }

        return this;
      };

      var Z = function t(e, r) {
        var n = d(e, r || document);

        if (n.length > 0) {
          for (var i = 0; i < this.length; i++) {
            n[0].parentNode.insertBefore(this[i], n[0]);
          }
        } else {
          throw new Error("Target empty!");
        }

        return this;
      };

      var J = function t() {
        for (var e = 0; e < this.length; e++) {
          this[e].parentNode.removeChild(this[e]);
        }

        return this;
      };

      var K = function t(e) {
        var r = [];

        for (var n = 0; n < this.length; n++) {
          if (e(n, T(this[n]))) r.push(this[n]);
        }

        return T(r);
      };

      var tt = function t(e) {
        if (e) {
          for (var r = 0; r < this.length; r++) {
            this[r].textContent = e;
          }

          return this;
        }

        if (this.length <= 0) throw new Error("Target empty!");
        return this[0].textContent;
      };

      function et() {
        if (arguments.length <= 1 && (arguments.length <= 0 || _typeof(arguments[0]) !== "object")) {
          if (this.length <= 0) throw new Error("Target empty!");
          return V(this[0], arguments[0]);
        }

        for (var t = 0; t < this.length; t++) {
          if (arguments.length === 1) {
            for (var e in arguments[0]) {
              this[t].style[e] = arguments[0][e];
            }
          } else this[t].style[arguments[0]] = arguments[1];
        }

        return this;
      }

      var rt = function t(e, r, n) {
        if (/[a-z]/.test(e.tagName) && f.indexOf(r) >= 0) {
          e.setAttributeNS(a.xlink, "xlink:" + r, n);
        } else e.setAttribute(r, n);
      };

      function nt() {
        if (arguments.length === 1 && _typeof(arguments[0]) !== "object") {
          if (this.length <= 0) throw new Error("Target empty!");
          return this[0].getAttribute(arguments[0]);
        } else if (arguments.length > 0) {
          for (var t = 0; t < this.length; t++) {
            if (arguments.length === 1) {
              for (var e in arguments[0]) {
                rt(this[t], e, arguments[0][e]);
              }
            } else rt(this[t], arguments[0], arguments[1]);
          }
        }

        return this;
      }

      var it = function t(e, r) {
        if (arguments.length <= 0) {
          if (this.length <= 0) throw new Error("Target empty!");
          return this[0].__data__;
        }

        for (var n = 0; n < this.length; n++) {
          this[n].__data__ = typeof r === "function" ? r(e, n) : e;
        }

        return this;
      };

      var ot = function t(e, r) {
        if (arguments.length <= 0) {
          var n = [];

          for (var i = 0; i < this.length; i++) {
            n[i] = this[i].__data__;
          }

          return n;
        }

        var o = [],
            a = void 0;

        for (a = 0; a < this.length && a < e.length; a++) {
          this[a].__data__ = typeof r === "function" ? r(e[a], a) : e[a];
          o.push(this[a]);
        }

        var u = T(o);
        u.__enter__ = [];

        for (; a < e.length; a++) {
          u.__enter__.push(typeof r === "function" ? r(e[a], a) : e[a]);
        }

        u.__exit__ = [];

        for (; a < this.length; a++) {
          u.__exit__.push(this[a]);
        }

        return u;
      };

      var at = function t(e, r) {
        if (!this.__enter__ || this.__enter__.constructor !== Array) throw new Error("Not a data node object to be balanced!");
        var n = [];

        for (var i = 0; i < this.__enter__.length; i++) {
          n[i] = _(e, r);
          n[i].__data__ = this.__enter__[i];
        }

        delete this.__enter__;
        return T(n);
      };

      var ut = function t() {
        if (!this.__exit__ || this.__exit__.constructor !== Array) throw new Error("Not a data node object to be balanced!");
        var e = T(this.__exit__);
        delete this.__exit__;
        return e;
      };

      var ft = function t(e) {
        for (var r = 0; r < this.length; r++) {
          e(this[r].__data__, r, T(this[r]));
        }

        return this;
      };

      var lt = function t(e, r) {
        if (window.attachEvent) {
          for (var n = 0; n < this.length; n++) {
            this[n].attachEvent("on" + e, r);
          }
        } else {
          for (var i = 0; i < this.length; i++) {
            this[i].addEventListener(e, r, false);
          }
        }

        return this;
      };

      var ct = function t(e) {
        var r = this[0].getBoundingClientRect();
        if (!e || !e.clientX) throw new Error("Event is necessary!");
        return {
          x: e.clientX - r.left,
          y: e.clientY - r.top
        };
      };

      function dt(t, e, r, n, i, o, a) {
        if (e > Math.PI * 2) e = Math.PI * 2;
        if (e < -Math.PI * 2) e = -Math.PI * 2;

        if (e < 0) {
          t += e;
          e *= -1;
        }

        var u = [],
            f = void 0;
        f = E(0, 0, t, i, 0);
        u[0] = f[0];
        u[1] = f[1];
        f = E(0, 0, e, f[0], f[1]);
        u[2] = f[0];
        u[3] = f[1];
        f = E(0, 0, t, o, 0);
        u[4] = f[0];
        u[5] = f[1];
        f = E(0, 0, e, f[0], f[1]);
        u[6] = f[0];
        u[7] = f[1];
        a(t, t + e, u[0] + r, u[1] + n, u[4] + r, u[5] + n, u[2] + r, u[3] + n, u[6] + r, u[7] + n, (o - i) * .5);
      }

      var st = function t(e, r, n, i, o) {
        e.beginPath();
        e.translate(n, i);
        e.rotate(o);
        e.font = r["font-size"] + "px " + r["font-family"];
        return e;
      };

      var ht = function t(d, s, h, v, p, g, e, r) {
        dt(e, r, h, v, p, g, function (t, e, r, n, i, o, a, u, f, l, c) {
          if (c < 0) c = -c;
          d.beginPath();
          d.moveTo(r, n);
          d.arc(h, v, p, t, e, false);
          if (s["arc-end-cap"] != "round") d.lineTo(f, l);else d.arc((a + f) * .5, (u + l) * .5, c, e - Math.PI, e, true);
          d.arc(h, v, g, e, t, true);
          if (s["arc-start-cap"] != "round") d.lineTo(r, n);else d.arc((r + i) * .5, (n + o) * .5, c, t, t - Math.PI, true);
        });
        return d;
      };

      var vt = function t(e, r, n, i) {
        e.beginPath();
        e.moveTo(r + i, n);
        e.arc(r, n, i, 0, Math.PI * 2);
        return e;
      };

      var pt = function t(e, r, n, i, o) {
        e.beginPath();
        e.rect(r, n, i, o);
        return e;
      };

      var gt = function t(e, r, n, i, o) {
        var a = e.createLinearGradient(r, n, i, o);
        var u = {
          value: function t() {
            return a;
          },
          addColorStop: function t(e, r) {
            a.addColorStop(e, r);
            return u;
          }
        };
        return u;
      };

      var wt = function t(e, r, n, i) {
        var o = e.createRadialGradient(r, n, 0, r, n, i);
        var a = {
          value: function t() {
            return o;
          },
          addColorStop: function t(e, r) {
            o.addColorStop(e, r);
            return a;
          }
        };
        return a;
      };

      function mt(c) {
        var d = c.getContext("2d");
        var t = c.__image2D__layer__ == "yes";
        var e = t ? c.getAttribute("width") : c.clientWidth,
            r = t ? c.getAttribute("height") : c.clientHeight;

        if (e == 0 || r == 0) {
          throw new Error("Canvas is hidden or size is zero!");
        }

        c.style.width = e + "px";
        c.style.height = r + "px";
        c.setAttribute("width", e * 2);
        c.setAttribute("height", r * 2);
        d.scale(2, 2);
        d.textBaseline = "middle";
        d.textAlign = "left";
        var u = {
          "font-size": "16",
          "font-family": "sans-serif",
          "arc-start-cap": "butt",
          "arc-end-cap": "butt"
        };
        var s = {
          config: function t() {
            if (arguments.length === 1) {
              if (_typeof(arguments[0]) !== "object") return d[arguments[0]];

              for (var e in arguments[0]) {
                if (u[e]) u[e] = arguments[0][e];else d[e] = arguments[0][e];
              }
            } else if (arguments.length === 2) {
              if (u[arguments[0]]) u[arguments[0]] = arguments[1];else d[arguments[0]] = arguments[1];
            }

            return s;
          },
          fillText: function t(e, r, n, i) {
            d.save();
            st(d, u, r, n, i || 0).fillText(e, 0, 0);
            d.restore();
            return s;
          },
          strokeText: function t(e, r, n, i) {
            d.save();
            st(d, u, r, n, i || 0).strokeText(e, 0, 0);
            d.restore();
            return s;
          },
          beginPath: function t() {
            d.beginPath();
            return s;
          },
          closePath: function t() {
            d.closePath();
            return s;
          },
          moveTo: function t(e, r) {
            d.moveTo(e, r);
            return s;
          },
          lineTo: function t(e, r) {
            d.lineTo(e, r);
            return s;
          },
          arc: function t(e, r, n, i, o) {
            d.arc(e, r, n, i, i + o);
            return s;
          },
          fill: function t() {
            d.fill();
            return s;
          },
          stroke: function t() {
            d.stroke();
            return s;
          },
          save: function t() {
            d.save();
            return s;
          },
          restore: function t() {
            d.restore();
            return s;
          },
          quadraticCurveTo: function t(e, r, n, i) {
            d.quadraticCurveTo(e, r, n, i);
            return s;
          },
          bezierCurveTo: function t(e, r, n, i, o, a) {
            d.bezierCurveTo(e, r, n, i, o, a);
            return s;
          },
          clearRect: function t(e, r, n, i) {
            d.clearRect(e || 0, r || 0, n || c.getAttribute("width") / 2, i || c.getAttribute("height") / 2);
            return s;
          },
          toDataURL: function t() {
            return c.toDataURL();
          },
          drawImage: function t(e, r, n, i, o, a, u, f, l) {
            r = r || 0;
            n = n || 0;
            a = a || 0;
            u = u || 0;
            f = f ? f * 2 : c.getAttribute("width");
            l = l ? l * 2 : c.getAttribute("height");

            if (e.nodeName == "CANVAS") {
              f = f / 2;
              l = l / 2;
              i = i ? i * 2 : c.getAttribute("width");
              o = o ? o * 2 : c.getAttribute("height");
            } else {
              i = (i || e.width) * 2;
              o = (o || e.height) * 2;
            }

            d.drawImage(e, r, n, i, o, a, u, f, l);
            return s;
          },
          fillArc: function t(e, r, n, i, o, a) {
            ht(d, u, e, r, n, i, o, a).fill();
            return s;
          },
          strokeArc: function t(e, r, n, i, o, a) {
            ht(d, u, e, r, n, i, o, a).stroke();
            return s;
          },
          fillCircle: function t(e, r, n) {
            vt(d, e, r, n).fill();
            return s;
          },
          strokeCircle: function t(e, r, n) {
            vt(d, e, r, n).stroke();
            return s;
          },
          fillRect: function t(e, r, n, i) {
            pt(d, e, r, n, i).fill();
            return s;
          },
          strokeRect: function t(e, r, n, i) {
            pt(d, e, r, n, i).stroke();
            return s;
          },
          createLinearGradient: function t(e, r, n, i) {
            return gt(d, e, r, n, i);
          },
          createRadialGradient: function t(e, r, n) {
            return wt(d, e, r, n);
          },
          translate: function t(e, r) {
            d.translate(e, r);
            return s;
          },
          rotate: function t(e) {
            d.rotate(e);
            return s;
          },
          scale: function t(e, r) {
            r = r || e;
            d.scale(e, r);
            return s;
          }
        };
        return s;
      }

      function yt(t, e) {
        if (t === "textAlign") {
          return {
            left: "start",
            right: "end",
            center: "middle"
          }[e] || e;
        }

        return e;
      }

      var bt = function t(e, r, n, i, o) {
        if (!m(e[0])) throw new Error("Target empty!");
        if (e[0].nodeName.toLowerCase() !== "text") throw new Error("Need a <text> !");
        e.attr("dy", {
          top: r["font-size"] * .5,
          middle: 0,
          bottom: -r["font-size"] * .5
        }[r.textBaseline]).css({
          "text-anchor": r.textAlign,
          "dominant-baseline": "central",
          "font-size": r["font-size"] + "px",
          "font-family": r["font-family"]
        }).attr({
          x: n,
          y: i
        });
        return {
          transform: "rotate(" + o * 180 / Math.PI + "," + n + "," + i + ")"
        };
      };

      var xt = function t(h, v, e, r, p, g, n, i) {
        if (h[0].nodeName.toLowerCase() !== "path") throw new Error("Need a <path> !");
        dt(n, i, e, r, p, g, function (t, e, r, n, i, o, a, u, f, l, c) {
          var d = e - t > Math.PI ? 1 : 0,
              s = "M" + r + " " + n;
          if (c < 0) c = -c;
          s += "A" + p + " " + p + " 0 " + d + " 1 " + a + " " + u;
          if (v["arc-end-cap"] != "round") s += "L" + f + " " + l;else s += "A" + c + " " + c + " " + " 0 1 0 " + f + " " + l;
          s += "A" + g + " " + g + " 0 " + d + " 0 " + i + " " + o;
          if (v["arc-start-cap"] != "round") s += "L" + r + " " + n;else s += "A" + c + " " + c + " " + " 0 1 0 " + r + " " + n;
          h.attr("d", s);
        });
        return h;
      };

      var _t = function t(e, r, n, i) {
        if (!e || e.length <= 0 || e[0].nodeName.toLowerCase() !== "circle") throw new Error("Need a <circle> !");
        e.attr({
          cx: r,
          cy: n,
          r: i
        });
        return e;
      };

      var Tt = function t(e, r) {
        if (!e || e.length <= 0 || e[0].nodeName.toLowerCase() !== "path") throw new Error("Need a <path> !");
        e.attr("d", r);
        return e;
      };

      var Et = function t(e, r, n, i, o) {
        if (!e || e.length <= 0 || e[0].nodeName.toLowerCase() !== "rect") throw new Error("Need a <rect> !");
        e.attr({
          x: r,
          y: n,
          width: i,
          height: o
        });
        return e;
      };

      var Ct = function t(e) {
        var r = e.getElementsByTagName("defs");

        if (r.length <= 0) {
          r = [_("<defs>", "SVG")];
          e.appendChild(r[0]);
        }

        return r[0];
      };

      var kt = function t(e, r, n, i, o, a) {
        var u = Ct(r);
        var f = "image2D-lg-" + new Date().valueOf() + "-" + Math.random();

        var l = _('<linearGradient id="' + f + '" x1="' + n + '%" y1="' + i + '%" x2="' + o + '%" y2="' + a + '%"></linearGradient>');

        u.appendChild(l);
        var c = {
          value: function t() {
            return "url(#" + f + ")";
          },
          addColorStop: function t(e, r) {
            l.appendChild(_('<stop offset="' + e * 100 + '%" style="stop-color:' + r + ';" />'));
            return c;
          }
        };
        return c;
      };

      var Mt = function t(e, r, n, i, o) {
        var a = Ct(r);
        var u = "image2D-rg-" + new Date().valueOf() + "-" + Math.random();

        var f = _('<radialGradient id="' + u + '" cx="' + n + '%" cy="' + i + '%" r="' + o + '%"></radialGradient>');

        a.appendChild(f);
        var l = {
          value: function t() {
            return "url(#" + u + ")";
          },
          addColorStop: function t(e, r) {
            f.appendChild(_('<stop offset="' + e * 100 + '%" style="stop-color:' + r + ';" />'));
            return l;
          }
        };
        return l;
      };

      function At(o, t) {
        var u = void 0;
        if (t) u = T(t, o);
        var f = {
          fillStyle: "#000",
          strokeStyle: "#000",
          lineWidth: 1,
          textAlign: "start",
          textBaseline: "middle",
          "font-size": "16",
          "font-family": "sans-serif",
          "arc-start-cap": "butt",
          "arc-end-cap": "butt"
        };
        var l = "",
            c = [];
        var e = [],
            d = "";
        var s = {
          config: function t() {
            if (arguments.length === 1) {
              if (_typeof(arguments[0]) !== "object") return f[arguments[0]];

              for (var e in arguments[0]) {
                f[e] = yt(e, arguments[0][e]);
              }
            } else if (arguments.length === 2) f[arguments[0]] = yt(arguments[0], arguments[1]);

            return s;
          },
          bind: function t(e) {
            u = T(e, o);
            return s;
          },
          appendTo: function t(e) {
            u.appendTo(e || o, o);
            return s;
          },
          prependTo: function t(e) {
            u.prependTo(e || o, o);
            return s;
          },
          afterTo: function t(e) {
            u.afterTo(e || o, o);
            return s;
          },
          beforeTo: function t(e) {
            u.beforeTo(e || o, o);
            return s;
          },
          beginPath: function t() {
            l = "";
            c = [];
            return s;
          },
          closePath: function t() {
            l += "Z";
            return s;
          },
          moveTo: function t(e, r) {
            l += "M" + e + " " + r;
            c = [e, r];
            return s;
          },
          lineTo: function t(e, r) {
            l += (l == "" ? "M" : "L") + e + " " + r;
            c = [e, r];
            return s;
          },
          arc: function t(e, r, n, i, o) {
            var a = E(e, r, i, e + n, r);
            var u = E(e, r, i + o, e + n, r);
            i = i / Math.PI * 180;
            o = o / Math.PI * 180;

            if (l == "") {
              l += "M" + a[0] + "," + a[1];
            } else if (a[0] != c[0] || a[1] != c[1]) {
              l += "L" + a[0] + "," + a[1];
            }

            l += "A" + n + "," + n + " 0 " + (o > 180 || o < -180 ? 1 : 0) + "," + (o > 0 ? 1 : 0) + " " + u[0] + "," + u[1];
            return s;
          },
          fill: function t() {
            Tt(u, l).attr("transform", d).attr("fill", f.fillStyle);
            return s;
          },
          stroke: function t() {
            Tt(u, l).attr("transform", d).attr({
              "stroke-width": f.lineWidth,
              stroke: f.strokeStyle,
              fill: "none"
            });
            return s;
          },
          save: function t() {
            e.push(d);
            return s;
          },
          restore: function t() {
            if (e.length > 0) d = e.pop();
            return s;
          },
          quadraticCurveTo: function t(e, r, n, i) {
            l += "Q" + e + " " + r + "," + n + " " + i;
            return s;
          },
          bezierCurveTo: function t(e, r, n, i, o, a) {
            l += "C" + e + " " + r + "," + n + " " + i + "," + o + " " + a;
            return s;
          },
          fillText: function t(e, r, n, i) {
            var o = bt(u, f, r, n, i || 0);
            u.attr("transform", d + o.transform).attr("fill", f.fillStyle)[0].textContent = e;
            return s;
          },
          strokeText: function t(e, r, n, i) {
            var o = bt(u, f, r, n, i || 0);
            u.attr("transform", d + o.transform).attr({
              stroke: f.strokeStyle,
              fill: "none"
            })[0].textContent = e;
            return s;
          },
          fillArc: function t(e, r, n, i, o, a) {
            xt(u, f, e, r, n, i, o, a).attr("transform", d).attr("fill", f.fillStyle);
            return s;
          },
          strokeArc: function t(e, r, n, i, o, a) {
            xt(u, f, e, r, n, i, o, a).attr("transform", d).attr({
              "stroke-width": f.lineWidth,
              stroke: f.strokeStyle,
              fill: "none"
            });
            return s;
          },
          fillCircle: function t(e, r, n) {
            _t(u, e, r, n).attr("transform", d).attr("fill", f.fillStyle);

            return s;
          },
          strokeCircle: function t(e, r, n) {
            _t(u, e, r, n).attr("transform", d).attr({
              "stroke-width": f.lineWidth,
              stroke: f.strokeStyle,
              fill: "none"
            });

            return s;
          },
          fillRect: function t(e, r, n, i) {
            Et(u, e, r, n, i).attr("transform", d).attr("fill", f.fillStyle);
            return s;
          },
          strokeRect: function t(e, r, n, i) {
            Et(u, e, r, n, i).attr("transform", d).attr({
              "stroke-width": f.lineWidth,
              stroke: f.strokeStyle,
              fill: "none"
            });
            return s;
          },
          createLinearGradient: function t(e, r, n, i) {
            return kt(u, o, e, r, n, i);
          },
          createRadialGradient: function t(e, r, n) {
            return Mt(u, o, e, r, n);
          },
          translate: function t(e, r) {
            d += " translate(" + e + "," + r + ")";
            return s;
          },
          rotate: function t(e) {
            d += " rotate(" + e / Math.PI * 180 + ")";
            return s;
          },
          scale: function t(e, r) {
            r = r || e;
            d += " scale(" + e + "," + r + ")";
            return s;
          }
        };
        return s;
      }

      function Nt() {
        if (!m(this[0])) throw new Error("Target empty!");
        var t = this[0],
            e = t.nodeName.toLowerCase();
        if (e === "canvas") return mt(t);
        if (e === "svg") return At(t, arguments[0]);
        throw new Error("Painter is not a function!");
      }

      var Lt = function t(e) {
        return e && e.constructor === CanvasRenderingContext2D;
      };

      function St() {
        if (!m(this[0])) throw new Error("Target empty!");
        if (this[0].nodeName.toLowerCase() !== "canvas") throw new Error("Layer is not a function!");
        var r = this.painter(),
            n = {},
            i = [];
        var o = this[0].clientWidth,
            a = this[0].clientHeight;
        var u = {
          painter: function t(e) {
            if (!n[e] || !Lt(n[e].painter)) {
              n[e] = {
                visible: true
              };
              n[e].canvas = document.createElement("canvas");
              n[e].canvas.setAttribute("width", o);
              n[e].canvas.setAttribute("height", a);
              n[e].canvas.__image2D__layer__ = "yes";
              n[e].painter = T(n[e].canvas).painter();
              i.push(e);
            }

            return n[e].painter;
          },
          "delete": function t(e) {
            for (var r = 0; r < i.length; r++) {
              if (i[r] === e) {
                i.splice(r, 1);
                break;
              }
            }

            delete n[e];
            return u;
          },
          update: function t() {
            r.clearRect(0, 0, o, a);
            r.save();

            for (var e = 0; e < i.length; e++) {
              if (n[i[e]].visible) r.drawImage(n[i[e]].canvas, 0, 0, o, a, 0, 0, o, a);
            }

            r.restore();
            return u;
          },
          hidden: function t(e) {
            n[e].visible = false;
            return u;
          },
          show: function t(e) {
            n[e].visible = true;
            return u;
          }
        };
        return u;
      }

      T.extend({
        treeLayout: p,
        pieLayout: w,
        Matrix4: L,
        rotate: E,
        move: s,
        scale: h,
        dot: v,
        animation: $,
        cardinal: q,
        formatColor: W,
        getRandomColors: U
      });
      T.prototype.extend({
        appendTo: X,
        prependTo: Y,
        afterTo: Q,
        beforeTo: Z,
        remove: J,
        filter: K,
        text: tt,
        css: et,
        attr: nt,
        datum: it,
        data: ot,
        enter: at,
        exit: ut,
        loop: ft,
        bind: lt,
        position: ct,
        painter: Nt,
        layer: St
      });
      T.fn = T.prototype;

      if (_typeof(module) === "object" && _typeof(module.exports) === "object") {
        module.exports = T;
      } else {
        var Pt = window.image2D,
            jt = window.$$;

        T.noConflict = function (t) {
          if (window.$$ === T) {
            window.$$ = jt;
          }

          if (t && window.image2D === T) {
            window.image2D = Pt;
          }

          return T;
        };

        window.image2D = window.$$ = T;
      }
    })();
  });
  var xhtml = {
    // 获取元素大小
    "size": function size(dom, type) {
      var elemHeight, elemWidth;

      if (type == 'content') {
        //内容
        var domObj = image2D_min(dom);
        elemWidth = dom.clientWidth - (domObj.css('padding-left') + "").replace('px', '') - (domObj.css('padding-right') + "").replace('px', '');
        elemHeight = dom.clientHeight - (domObj.css('padding-top') + "").replace('px', '') - (domObj.css('padding-bottom') + "").replace('px', '');
      } else if (type == 'padding') {
        //内容+内边距
        elemWidth = dom.clientWidth;
        elemHeight = dom.clientHeight;
      } else if (type == 'border') {
        //内容+内边距+边框
        elemWidth = dom.offsetWidth;
        elemHeight = dom.offsetHeight;
      } else if (type == 'scroll') {
        //滚动的宽（不包括border）
        elemWidth = dom.scrollWidth;
        elemHeight = dom.scrollHeight;
      } else {
        elemWidth = dom.offsetWidth;
        elemHeight = dom.offsetHeight;
      }

      return {
        width: elemWidth,
        height: elemHeight
      };
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
    // 文字宽
    "textWidth": function textWidth(help, text) {
      help[0].innerText = text;
      return +this.size(help[0]).width;
    }
  };

  function initView(el, colors, lineNum, lineText) {
    var help = image2D_min("<span></span>").css({
      position: "absolute",
      "z-index": "-1",
      "white-space": "pre",
      "top": 0,
      "left": 0,
      "font-weight": 600
    }).appendTo(el);
    var width = xhtml.textWidth(help, lineText); // 添加输入光标

    var focus = image2D_min('<textarea></textarea>').attr({
      wrap: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false"
    }).css({
      position: "absolute",
      left: 20 + width + "px",
      top: 10 + lineNum * 21 + "px",
      width: "20px",
      height: "21px",
      "line-height": "21px",
      resize: "none",
      overflow: "hidden",
      padding: "0",
      outline: "none",
      border: "none",
      background: "#ff000000",
      color: colors.normal
    }).appendTo(el);
    image2D_min(el).css({
      "font-size": "12px",
      position: "relative",
      cursor: "text",
      // 这里必须设置为等宽字体
      "font-family": "新宋体",
      "background": colors.background
    }).bind('click', function () {
      focus[0].focus();
    }); // 添加格式化文本显示区域

    var content = image2D_min("<div></div>").css({
      padding: "10px 0"
    }).appendTo(el);
    return {
      focus: focus,
      content: content,
      help: help
    };
  }

  var updateCursorPosition = function updateCursorPosition(focus, help, text) {
    if (/^\n$/.test(text)) {
      var preTop = +focus.css('top').replace('px', '');
      focus.css('top', preTop + 21 + "px");
      focus.css('left', "40px");
    } else {
      var preLeft = +focus.css('left').replace('px', '');
      var width = xhtml.textWidth(help, text);
      focus.css('left', preLeft + width + "px");
    }
  };

  function updateView(viewNode, texts, colors, lineNum) {
    var template = "";
    texts.forEach(function (line, index) {
      var bgcolor = "";

      if (index == lineNum) {
        bgcolor = "background-color:" + colors.editLine;
      }

      template += "<div style='line-height:21px;height:21px;" + bgcolor + "'>";
      template += "<em style='color:" + colors.lineNum + ";display:inline-block;font-style:normal;width:35px;text-align:right;margin-right:5px;'>" + (index + 1) + "</em>";
      line.forEach(function (text) {
        template += "<span style='font-weight:600;white-space: pre;color:" + text.color + "'>" + text.content + "</span>";
      });
      template += "</div>";
    });
    viewNode[0].innerHTML = template;
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
  }

  function renderView(el, format, colors, textArray) {
    var needUpdate = true,
        lineNum = textArray.length - 1,
        leftNum = textArray[textArray.length - 1].length;
    var handler = initView(el, colors, lineNum, textArray[textArray.length - 1]);
    handler.focus[0].focus();

    var update = function update() {
      var text = handler.focus[0].value;
      handler.focus[0].value = ""; // 更新光标位置

      updateCursorPosition(handler.focus, handler.help, text);

      if (/^\n$/.test(text)) {
        if (leftNum >= textArray[lineNum].length) {
          textArray.splice(lineNum + 1, 0, "");
        } else {
          textArray.splice(lineNum + 1, 0, textArray[lineNum].substring(leftNum));
          textArray[lineNum] = textArray[lineNum].substring(0, leftNum);
        }

        lineNum += 1;
        leftNum = 0;
      } else {
        textArray[lineNum] = textArray[lineNum].substring(0, leftNum) + text + textArray[lineNum].substring(leftNum);
        leftNum += text.length;
      } // 更新视图


      updateView(handler.content, format(textArray.join('\n'), colors), colors, lineNum);
    };

    update();
    handler.focus.bind('format', function () {
      // 更新视图
      updateView(handler.content, format(text, colors, true), colors, lineNum);
    });
    handler.focus.bind('compositionstart', function () {
      needUpdate = false;
    });
    handler.focus.bind('compositionend', function () {
      needUpdate = true;
      update();
    });
    handler.focus.bind('input', function () {
      if (!needUpdate) return;
      update();
    }); // 处理键盘控制

    image2D_min(el).bind('keydown', function (event) {
      console.log(keyString(event));

      switch (keyString(event)) {
        case "up":
          {
            if (lineNum <= 0) return;
            lineNum -= 1;
            leftNum = textArray[lineNum].length;
            handler.focus.css({
              left: 40 + xhtml.textWidth(handler.help, textArray[lineNum]) + "px",
              top: 10 + lineNum * 21 + "px"
            });
            break;
          }

        case "down":
          {
            if (lineNum >= textArray.length - 1) return;
            lineNum += 1;
            leftNum = textArray[lineNum].length;
            handler.focus.css({
              left: 40 + xhtml.textWidth(handler.help, textArray[lineNum]) + "px",
              top: 10 + lineNum * 21 + "px"
            });
            break;
          }

        case "left":
          {
            if (leftNum <= 0) return;
            leftNum -= 1;
            var leftP = handler.focus.css('left').replace('px', '') - xhtml.textWidth(handler.help, textArray[lineNum][leftNum]);
            handler.focus.css('left', leftP + "px");
            break;
          }

        case "right":
          {
            if (leftNum >= textArray[lineNum].length) return;
            leftNum += 1;

            var _leftP = handler.focus.css('left').replace('px', '') - -xhtml.textWidth(handler.help, textArray[lineNum][leftNum - 1]);

            handler.focus.css('left', _leftP + "px");
            break;
          }

        case "backspace":
          {
            if (leftNum <= 0) {
              if (lineNum <= 0) return; // 一行的结尾应该删除本行

              textArray.splice(lineNum, 1);
              lineNum -= 1;
              leftNum = textArray[lineNum].length;
              handler.focus.css({
                left: 40 + xhtml.textWidth(handler.help, textArray[lineNum]) + "px",
                top: 10 + lineNum * 21 + "px"
              });
            } else {
              leftNum -= 1;

              var _leftP2 = handler.focus.css('left').replace('px', '') - xhtml.textWidth(handler.help, textArray[lineNum][leftNum]);

              handler.focus.css('left', _leftP2 + "px");
              textArray[lineNum] = textArray[lineNum].substring(0, leftNum) + textArray[lineNum].substring(leftNum + 1);
            } // 更新视图


            updateView(handler.content, format(textArray.join('\n'), colors), colors, lineNum);
            break;
          }
      }
    });
    return handler;
  }

  var wscode = function wscode(options) {
    // 格式化配置
    formatOptions(options); // 启动

    var handler = renderView(options.el, options.format, options.color, options.textArray);

    this.format = function () {
      xhtml.trigger(handler.focus[0], 'format');
    };
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof2(module)) === "object" && _typeof2(module.exports) === "object") {
    module.exports = wscode;
  } else {
    window.WSCode = wscode;
  }
})();