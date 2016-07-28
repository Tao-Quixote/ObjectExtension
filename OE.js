/**
 * Author:      Tao-Quixote
 * CreateTime:  16/6/23 17:58
 * Description: This is the OE.js file.
 * please honer the author and keep the head of the js file.
 * If there is any problem or error or suggestion, please concat by web.taox@gmail.co
 */

(function (window) {
        window.OE = {
            /**
             * 检测是否为数组
             *
             * @param obj
             * @returns {boolean}
             */
            isArray            : function (obj) {
                if ('[object Array]' == Object.prototype.toString.call(obj)) {
                    return true;
                }

                return false;
            },
            /**
             * 检测是否为字符串类型
             *
             * @param obj
             * @returns {boolean}
             */
            isString           : function (obj) {
                if (Object.prototype.toString.call(obj) == '[object String]') {
                    return true;
                }

                return false;
            },
            /**
             * 检测是否为数字类型
             *
             * @param obj
             * @returns {boolean}
             */
            isNumber           : function (obj) {
                if (Object.prototype.toString.call(obj) == '[object Number]') {
                    return true;
                }

                return false;
            },
            /**
             * 检测是否为布尔类型
             *
             * @param obj
             * @returns {boolean}
             */
            isBoolean          : function (obj) {
                if (Object.prototype.toString.call(obj) == '[object Boolean]') {
                    return true;
                }

                return false;
            },
            /**
             * 检测是否为对象
             *
             * @param obj
             * @returns {boolean}
             */
            isObject           : function (obj) {
                if (Object.prototype.toString.call(obj) == '[object Object]') {
                    return true;
                }

                return false;
            },
            /**
             * 检测是否为函数
             */
            isFunction         : function (obj) {
                if (Object.prototype.toString.call(obj) == '[object Function]') {
                    return true;
                }

                return false;
            },
            /**
             * 创建一个使用给定对象作为原型的新对象
             *
             * @param obj
             * @returns {F}
             */
            createFrom         : function (obj) {
                var F = function () {
                };
                F.prototype = obj;

                return new F();
            },
            /**
             * 给指定的元素添加事件监听
             *
             * @param e 元素
             * @param t 事件类型
             * @param h 处理方法
             */
            addHandler         : function (e, t, h) {
                if (e.addEventListener) {
                    e.addEventListener(t, h, false);
                } else if (e.attachEvent) {
                    e.attachEvent("on" + t, h);
                } else {
                    e[ "on" + t ] = h;
                }
            },
            /**
             * 移除指定元素的事件监听
             *
             * @param e 元素
             * @param t 事件类型
             * @param h 处理方法
             */
            removeHandler      : function (e, t, h) {
                if (e.removeEventListener) {
                    e.removeEventListener(t, h);
                } else if (e.detachEvent) {
                    e.detachEvent("on" + t, h);
                } else {
                    e[ "on" + t ] = null;
                }
            },
            /**
             * 获取事件,IE中,DOM0级添加事件时,发生的事件event是window的一个属性
             *
             * @param e
             * @returns {Event}
             */
            getEvent           : function (e) {
                return e ? e : window.event;
            },
            /**
             * 获取事件发生元素, IE中使用srcElement表示事件发生的元素
             *
             * @param e
             * @returns {*}
             */
            getTarget          : function (e) {
                return e.target ? e.target : e.srcElement;
            },
            /**
             * 阻止默认事件的发生,
             * IE中的event可能不存在preventDefault方法,
             * 用returnValue表示
             *
             * @param e
             */
            preventDefault     : function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
            },
            /**
             * 阻止冒泡事件,IE中可能不存在stopPropagation方法,
             * 使用cancelBubble代替
             *
             * @param e
             */
            stopPropagation    : function (e) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }
            },
            /**
             * IE8及更低版本不支持event.pageX和event.pageY,
             * 该方法用来扩展IE8及更低版本,使其可以获取event.pageX和event.pageY
             *
             * @param e
             * @returns {{pageX: (*|Number), pageY: (*|Number)}}
             */
            getPageXY          : function (e) {
                var pageX = e.pageX;
                var pageY = e.pageY;
                if (!pageX) {
                    pageX = e.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft
                        );
                }
                if (!pageY) {
                    pageY = e.clientY + (document.body.scrollTop || document.documentElement.scrollTop
                        )
                }

                return {
                    pageX : pageX,
                    pageY : pageY
                };
            },
            /**
             * 该方法用于获取事件发生的坐标,包括视口位置、页面位置以及屏幕坐标位置
             *
             * @param e
             * @returns {{clientX: Number, clientY: Number, pageX: *, pageY: *, screenX: (number|Number), screenY: (number|Number)}}
             */
            getMouseCoordinate : function (e) {
                var event = this.getEvent(e);
                var clientX = event.clientX;
                var clientY = event.clientY;
                var pageXY = this.getPageXY(e);
                var pageX = pageXY.pageX;
                var pageY = pageXY.pageY;
                var screenX = e.screenX;
                var screenY = e.screenY;

                return {
                    clientX : clientX,
                    clientY : clientY,
                    pageX   : pageX,
                    pageY   : pageY,
                    screenX : screenX,
                    screenY : screenY
                }
            },
            /**
             * 获取relatedTarget, 兼容IE8
             * 对于mouseover和mouseout, 同时涉及移入元素和移出元素,
             * 这两个元素称为相关元素, 此方法用于获取鼠标事件的相关元素
             *
             * @param e
             * @returns {*}
             */
            getRelatedTarget   : function (e) {
                if (e.relatedTarget) {
                    return e.relatedTarget;
                } else if (e.fromElement) {
                    return e.fromElement;
                } else {
                    return e.toElement;
                }
            },
            /**
             * 获取wheelDelta,
             * opera 9.5之前的版本返回数值的正负与规范相反,
             * firefox提供的DOMMouseScroll事件返回的数值为3的倍数,同时与规范符号相反
             *
             * @param e
             * @returns {*}
             */
            getWheelDelta      : function (e) {
                if (e.wheelDelta) {
                    return (client.engine.opera && client.engine.opera < 9.5 ? -e.wheelDelta : e.wheelDelta
                    );
                } else {
                    return -e.wheelDelta * 40;
                }
            },
            /**
             * 获取按键的键码,
             * e.charCode: keypress事件被触发时才有值, 存放的为对应字符的ASCII码
             * e.keyCode: e.charCode有值时该属性的值可能为0也可能不为0,
             * 即keypress事件被触发时该属性的值不确定,
             * 所以在获取时优先考虑e.charCode中是否有值,
             * 同时e.charCode获取的值可以通过String.fromCharCode()转换为实际的字符
             *
             * @param e
             * @returns {*}
             */
            getCharCode        : function (e) {
                if (typeof e.charCode == 'number') {
                    return e.charCode;
                } else {
                    return e.keyCode;
                }
            },
            /**
             * 该方法用于选择指定文本框中指定位置的文本,
             * 兼容IE8及以前版本
             *
             * @param obj
             * @param startIndex
             * @param endIndex
             */
            selectText         : function (obj, startIndex, endIndex) {
                if (obj.setSelectionRange) {
                    obj.setSelectionRange(startIndex, endIndex);
                } else {
                    var range = obj.createTextRange();
                    range.collapse(true);
                    range.moveStart('character', startIndex);
                    range.moveEnd('character', startIndex - endIndex);
                    range.select();
                }
            },
            /**
             * 该方法用于在发生剪切版事件时获取剪切板中的内容
             *
             * @param e
             * @returns {string}
             */
            getClipboardText   : function (e) {
                var clipboardData = (e.clipboardData || window.clipboardData
                );
                return clipboardData.getData('text');
            },
            /**
             * 该方法用于向剪切板内设置内容
             *
             * @param e
             * @param v
             * @returns {boolean}
             */
            setClipboardText   : function (e, v) {
                if (e.clipboardData) {
                    return e.clipboardData.setData('text/plain', v);
                } else if (window.clipboardData) {
                    return window.clipboardData.setData('text', v);
                }
            }
        }
    }
)(window);
