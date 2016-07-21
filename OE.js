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
            isArray         : function (obj) {
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
            isString        : function (obj) {
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
            isNumber        : function (obj) {
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
            isBoolean       : function (obj) {
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
            isObject        : function (obj) {
                if (Object.prototype.toString.call(obj) == '[object Object]') {
                    return true;
                }

                return false;
            },
            /**
             * 检测是否为函数
             */
            isFunction      : function (obj) {
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
            createFrom      : function (obj) {
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
            addHandler      : function (e, t, h) {
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
            removeHandle    : function (e, t, h) {
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
            getEvent        : function (e) {
                return e ? e : window.event;
            },
            /**
             * 获取事件发生元素, IE中使用srcElement表示事件发生的元素
             *
             * @param e
             * @returns {*}
             */
            getTarget       : function (e) {
                return e.target ? e.target : e.srcElement;
            },
            /**
             * 阻止默认事件的发生,
             * IE中的event可能不存在preventDefault方法,
             * 用returnValue表示
             *
             * @param e
             */
            preventDefault  : function (e) {
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
            stopPropagation : function (e) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }
            }
        }
    }
)(window);
