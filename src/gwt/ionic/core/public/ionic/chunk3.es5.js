/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("./chunk3.js", ["exports", "./chunk1.js"], function (n, e) { window.Ionic.h; var t = 1; function o(n) { return n.get(i(n)); } function i(n) { var e = -1; return n.forEach(function (n, t) { t > e && (e = t); }), e; } n.BACKDROP = "backdrop", n.overlayAnimation = function (n, t, o, i, r) { return n.animation && (n.animation.destroy(), n.animation = void 0), n.animationCtrl.create(t, i, r).then(function (t) { return n.animation = t, o || t.duration(0), e.playAnimationAsync(t); }).then(function (e) { e.destroy(), n.animation = void 0; }); }, n.createOverlay = function (n, e) { return n.overlayId = t++, Object.assign(n, e), (document.querySelector("ion-app") || document.body).appendChild(n), n.componentOnReady(); }, n.dismissOverlay = function (n, e, t, o) { o = o >= 0 ? o : i(t); var r = t.get(o); return r ? r.dismiss(n, e) : Promise.reject("overlay does not exist"); }, n.getTopOverlay = o, n.removeLastOverlay = function (n) { var e = o(n); return e ? e.dismiss() : Promise.resolve(); }; });