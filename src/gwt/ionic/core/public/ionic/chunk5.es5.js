/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("./chunk5.js", ["exports", "./chunk1.js"], function (e, o) { window.Ionic.h, e.DomFrameworkDelegate = /** @class */ (function () {
    function class_1() {
    }
    class_1.prototype.attachViewToDom = function (e, n, t, i) {
        if (t === void 0) { t = {}; }
        if (i === void 0) { i = []; }
        return new Promise(function (r) { var s = o.isString(n) ? document.createElement(n) : n; if (Object.assign(s, t), i.length)
            for (var _i = 0, i_1 = i; _i < i_1.length; _i++) {
                var e_1 = i_1[_i];
                s.classList.add(e_1);
            } e.appendChild(s), r({ element: s, data: t, component: n }); });
    };
    class_1.prototype.removeViewFromDom = function (e, o) { return e.removeChild(o), Promise.resolve(); };
    return class_1;
}()); });
