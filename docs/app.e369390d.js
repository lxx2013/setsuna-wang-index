(function (t) {
  function e(e) {
    for (var i, r, l = e[0], o = e[1], c = e[2], p = 0, f = []; p < l.length; p++) r = l[p], n[r] && f.push(n[r][0]), n[r] = 0;
    for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    u && u(e);
    while (f.length) f.shift()();
    return s.push.apply(s, c || []), a()
  }

  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], i = !0, l = 1; l < a.length; l++) {
        var o = a[l];
        0 !== n[o] && (i = !1)
      }
      i && (s.splice(e--, 1), t = r(r.s = a[0]))
    }
    return t
  }
  var i = {},
    n = {
      1: 0
    },
    s = [];

  function r(e) {
    if (i[e]) return i[e].exports;
    var a = i[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
  }
  r.m = t, r.c = i, r.d = function (t, e, a) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: a
    })
  }, r.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var a = Object.create(null);
    if (r.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var i in t) r.d(a, i, function (e) {
        return t[e]
      }.bind(null, i));
    return a
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return r.d(e, "a", e), e
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "";
  var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
    o = l.push.bind(l);
  l.push = e, l = l.slice();
  for (var c = 0; c < l.length; c++) e(l[c]);
  var u = o;
  s.push([4, 0]), a()
})({
  "3/IA": function (t, e, a) {},
  "3q1q": function (t, e, a) {
    "use strict";
    var i = a("VxpB"),
      n = a.n(i);
    n.a
  },
  4: function (t, e, a) {
    t.exports = a("Vtdi")
  },
  "5WTw": function (t, e, a) {},
  Vtdi: function (t, e, a) {
    "use strict";
    a.r(e);
    a("VRzm");
    var i = a("Kw5r"),
      n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          attrs: {
            id: "app"
          }
        }, [a("img", {
          attrs: {
            id: "avatar",
            src: "https://avatars2.githubusercontent.com/u/20529542"
          }
        }), a("el-row", {
          attrs: {
            id: "collapse"
          }
        }, [a("el-col", {
          attrs: {
            span: 24
          }
        }, [a("Collapse")], 1)], 1)], 1)
      },
      s = [],
      r = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("el-collapse", {
          attrs: {
            accordion: ""
          },
          on: {
            change: t.handleChange
          },
          model: {
            value: t.activeNames,
            callback: function (e) {
              t.activeNames = e
            },
            expression: "activeNames"
          }
        }, [a("el-collapse-item", {
          attrs: {
            title: "",
            name: "1"
          }
        }, [a("span", {
          attrs: {
            slot: "title"
          },
          slot: "title"
        }, [a("i", {
          staticClass: "header-icon"
        }, [a("img", {
          attrs: {
            src: "https://assets-cdn.github.com/favicon.ico"
          }
        })]), t._v("\n\t\t\tGithub 项目\n\t\t")]), a("div", [t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]), a("div", [t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]), a("el-collapse-item", {
          attrs: {
            name: "2"
          }
        }, [a("span", {
          attrs: {
            slot: "title"
          },
          slot: "title"
        }, [a("i", {
          staticClass: "header-icon"
        }, [a("img", {
          attrs: {
            src: "jianshu.ico"
          }
        })]), t._v("\n\t\t简书 博客\n\t")]), a("div", [t._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]), a("div", [t._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]), a("el-collapse-item", {
          attrs: {
            name: "3"
          }
        }, [a("span", {
          attrs: {
            slot: "title"
          },
          slot: "title"
        }, [a("i", {
          staticClass: "header-icon"
        }, [a("img", {
          attrs: {
            src: "https://zh.moegirl.org/favicon.ico"
          }
        })]), t._v("\n\t萌娘百科 贡献\n\t")]), a("div", [t._v("简化流程：设计简洁直观的操作流程；")]), a("div", [t._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]), a("div", [t._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]), a("el-collapse-item", {
          attrs: {
            name: "4"
          }
        }, [a("span", {
          attrs: {
            slot: "title"
          },
          slot: "title"
        }, [a("i", {
          staticClass: "header-icon"
        }, [a("img", {
          attrs: {
            src: "http://static.hdslb.com/images/favicon.ico"
          }
        })]), t._v("\n\t\tBilibili 投稿\n\t")]), a("el-row", {
          attrs: {
            id: "bilibili"
          }
        }, t._l(t.ImageData, function (e, i) {
          return a("el-col", {
            key: i,
            attrs: {
              span: t.ImageData.length > 1 ? 12 : 24
            }
          }, [a("bilibili-item", {
            attrs: {
              item: e
            }
          })], 1)
        }))], 1)], 1)
      },
      l = [],
      o = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "small-item fakeDanmu-item"
        }, [a("a", {
          staticClass: "cover",
          attrs: {
            href: t.item.href,
            target: "_blank"
          }
        }, [a("img", {
          attrs: {
            src: t.item.src,
            alt: t.item.title
          }
        }), a("span", {
          staticClass: "length"
        }, [t._v("05:32")]), a("span", {
          staticClass: "i-watchlater"
        })]), a("a", {
          staticClass: "title",
          attrs: {
            href: t.item.href,
            target: "_blank",
            title: "星の奏でる歌-吉他(附谱)"
          }
        }, [t._v(t._s(t.item.title))]), a("div", {
          staticClass: "meta"
        }, [a("span", {
          staticClass: "play"
        }, [a("i", {
          staticClass: "icon"
        }), t._v(t._s(t.item.number))]), a("span", {
          staticClass: "time"
        }, [a("i", {
          staticClass: "icon"
        }), t._v(t._s(t.item.time))])])])
      },
      c = [],
      u = {
        name: "HelloWorld",
        props: {
          item: Object
        },
        data: function () {
          return {}
        }
      },
      p = u,
      f = (a("tC1I"), a("KHd+")),
      m = Object(f["a"])(p, o, c, !1, null, "12491a49", null),
      v = m.exports,
      d = [{
        src: "星奏歌封面.jpeg",
        href: "http://www.bilibili.com/video/av26217050",
        title: "星の奏でる歌-吉他(附谱)",
        number: 192,
        time: "7-5"
      }],
      h = {
        components: {
          BilibiliItem: v
        },
        data: function () {
          return {
            activeNames: ["4"],
            ImageData: d
          }
        },
        methods: {
          handleChange: function (t) {
            console.log(t)
          }
        }
      },
      b = h,
      g = (a("YA3s"), Object(f["a"])(b, r, l, !1, null, "95b039b4", null)),
      _ = g.exports,
      C = {
        name: "app",
        components: {
          Collapse: _
        }
      },
      w = C,
      y = (a("3q1q"), Object(f["a"])(w, n, s, !1, null, "e202a9c4", null)),
      j = y.exports,
      O = a("XJYT"),
      x = a.n(O);
    a("D66Q");
    i["default"].config.productionTip = !1, i["default"].use(x.a), new i["default"]({
      render: function (t) {
        return t(j)
      }
    }).$mount("#app")
  },
  VxpB: function (t, e, a) {},
  YA3s: function (t, e, a) {
    "use strict";
    var i = a("5WTw"),
      n = a.n(i);
    n.a
  },
  tC1I: function (t, e, a) {
    "use strict";
    var i = a("3/IA"),
      n = a.n(i);
    n.a
  }
});
//# sourceMappingURL=app.e369390d.js.map
