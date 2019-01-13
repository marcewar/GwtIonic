/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("./chunk1.js", ["exports"], function (n) { function e() { return document; } function t() { return e().activeElement; } window.Ionic.h; var r = /^(radio|checkbox|range|file|submit|reset|color|image|button)$/i; function o(n, e) { var t = n._original || n; return { _original: n, emit: function (n, e) {
        if (e === void 0) { e = 0; }
        var t;
        return function () {
            var r = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                r[_i] = arguments[_i];
            }
            clearTimeout(t), t = setTimeout.apply(void 0, [n, e].concat(r));
        };
    }(t.emit.bind(t), e) }; } n.playAnimationAsync = function (n) { return new Promise(function (e) { n.onFinish(e), n.play(); }); }, n.domControllerAsync = function (n, e) { return new Promise(function (t) { n(function () { if (!e)
    return t(); Promise.resolve(e()).then(function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    t(n);
}); }); }); }, n.autoFocus = function (n) { var e = n.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'); if (e.length > 0) {
    var n_1 = e[0];
    return n_1.focus(), n_1;
} return null; }, n.getPageElement = function (n) { var e = n.closest("ion-tabs"); return e || (n.closest("ion-app,ion-page,.ion-page,page-inner") || function (n) { return n.parentElement ? n.parentElement : n.parentNode && n.parentNode.host ? n.parentNode.host : null; }(n)); }, n.assert = function (n, e) { if (!n) {
    var n_2 = "ASSERT: " + e;
    throw console.error(n_2), new Error(n_2);
} }, n.isDef = function (n) { return void 0 !== n && null !== n; }, n.isBlank = function (n) { return void 0 === n || null === n; }, n.isNumber = function (n) { return "number" == typeof n; }, n.now = function (n) { return n.timeStamp || Date.now(); }, n.deferEvent = function (n) { return o(n, 0); }, n.isArray = function (n) { return Array.isArray(n); }, n.isString = function (n) { return "string" == typeof n; }, n.clamp = function (n, e, t) { return Math.max(n, Math.min(e, t)); }, n.isObject = function (n) { return null !== n && "object" == typeof n; }, n.updateDetail = function (n, e) { var t = 0, r = 0; if (n) {
    var e_1 = n.changedTouches;
    if (e_1 && e_1.length > 0) {
        var n_3 = e_1[0];
        t = n_3.clientX, r = n_3.clientY;
    }
    else
        void 0 !== n.pageX && (t = n.pageX, r = n.pageY);
} e.currentX = t, e.currentY = r; }, n.debounceEvent = o, n.pointerCoord = function (n) { if (n) {
    var e_2 = n.changedTouches;
    if (e_2 && e_2.length > 0) {
        var n_4 = e_2[0];
        return { x: n_4.clientX, y: n_4.clientY };
    }
    if (void 0 !== n.pageX)
        return { x: n.pageX, y: n.pageY };
} return { x: 0, y: 0 }; }, n.isRightSide = function (n, e) {
    if (e === void 0) { e = !1; }
    var t = "rtl" === document.dir;
    switch (n) {
        case "right": return !0;
        case "left": return !1;
        case "end": return !t;
        case "start": return t;
        default: return e ? !t : t;
    }
}, n.swipeShouldReset = function (n, e, t) { return !e && t || n && e; }, n.focusOutActiveElement = function () { var n = t(); n && n.blur && n.blur(); }, n.getDocument = e, n.getWindow = function () { return window; }, n.hasFocusedTextInput = function () { var n = t(); return !(!(e = n) || "TEXTAREA" !== e.tagName && "true" !== e.contentEditable && ("INPUT" !== e.tagName || r.test(e.type)) || !n.parentElement) && n.parentElement.querySelector(":focus") === n; var e; }, n.checkEdgeSide = function (n, e, t) { return e ? n >= window.innerWidth - t : n <= t; }; });
