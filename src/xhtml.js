import isElement from '@yelloxing/core.js/isElement';

export default {

    // 阻止冒泡
    "stopPropagation": function (event) {
        event = event || window.event;
        if (event.stopPropagation) { //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 阻止默认事件
    "preventDefault": function (event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 绑定事件
    "bind": function (el, eventType, callback) {
        if (window.attachEvent) {
            el.attachEvent("on" + eventType, callback); // 后绑定的先执行
        } else {
            el.addEventListener(eventType, callback, false);// 捕获
        }
    },

    // 触发事件
    "trigger": function (dom, eventType) {
        let event;

        //创建event的对象实例。
        if (document.createEventObject) {
            // IE浏览器支持fireEvent方法
            event = document.createEventObject();
            dom.fireEvent('on' + eventType, event);
        }

        // 其他标准浏览器使用dispatchEvent方法
        else {
            event = document.createEvent('HTMLEvents');
            // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
            event.initEvent(eventType, true, false);
            dom.dispatchEvent(event);
        }
    },

    // 变成结点
    "toNode": function (template) {
        let frame = document.createElement("div");
        frame.innerHTML = template;
        let childNodes = frame.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            if (isElement(childNodes[i])) return childNodes[i];
        }
        return null;
    },

    // 结点
    "appendTo": function (el, template) {
        let node = isElement(template) ? template : this.toNode(template);
        el.appendChild(node);
        return node;
    },

    // 修改样式
    "css": function (el, styles) {
        for (let key in styles) {
            el.style[key] = styles[key];
        }
    },

    // 修改属性
    "attr": function (el, attrs) {
        for (let key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    },

    // 获取鼠标相对特定元素左上角位置
    "position": function (el, event) {

        event = event || window.event;

        // 返回元素的大小及其相对于视口的位置
        let bounding = el.getBoundingClientRect();

        if (!event || !event.clientX)
            throw new Error('Event is necessary!');
        return {

            // 鼠标相对元素位置 = 鼠标相对窗口坐标 - 元素相对窗口坐标
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    }
};