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
            isArray    : function (obj) {
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
            isString   : function (obj) {
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
            isNumber   : function (obj) {
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
            isBoolean  : function (obj) {
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
            isObject   : function (obj) {
                if (Object.prototype.toString.call(obj) == '[object Object]') {
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
            createFrom : function (obj) {
                var F = function () {
                };
                F.prototype = obj;

                return new F();
            }
        }
    }
)(window);
