(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [894],
  {
    9894: function (e, t, n) {
      "use strict";
      var r = n(3227),
        a = n(8361),
        o = n(5971),
        i = n(2715),
        l = n(1193);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var u = n(2648).Z,
        d = u(n(7294)),
        c = u(n(6505)),
        s = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error"
        };
      function f(e) {
        var t = e.res,
          n = e.err;
        return {
          statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404
        };
      }
      var p = {
          error: {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          },
          desc: {
            display: "inline-block",
            textAlign: "left",
            lineHeight: "49px",
            height: "49px",
            verticalAlign: "middle"
          },
          h1: {
            display: "inline-block",
            margin: 0,
            marginRight: "20px",
            padding: "0 23px 0 0",
            fontSize: "24px",
            fontWeight: 500,
            verticalAlign: "top",
            lineHeight: "49px"
          },
          h2: {
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "49px",
            margin: 0,
            padding: 0
          }
        },
        h = (function (e) {
          o(u, e);
          var t,
            n =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = l(u);
                if (t) {
                  var r = l(this).constructor;
                  e = Reflect.construct(n, arguments, r);
                } else e = n.apply(this, arguments);
                return i(this, e);
              });
          function u() {
            return r(this, u), n.apply(this, arguments);
          }
          return (
            a(u, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.statusCode,
                    n = e.withDarkMode,
                    r =
                      this.props.title ||
                      s[t] ||
                      "An unexpected error has occurred";
                  return d.default.createElement(
                    "div",
                    { style: p.error },
                    d.default.createElement(
                      c.default,
                      null,
                      d.default.createElement(
                        "title",
                        null,
                        t
                          ? "".concat(t, ": ").concat(r)
                          : "Application error: a client-side exception has occurred"
                      )
                    ),
                    d.default.createElement(
                      "div",
                      null,
                      d.default.createElement("style", {
                        dangerouslySetInnerHTML: {
                          __html:
                            "\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ".concat(
                              void 0 === n || n
                                ? "@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }"
                                : ""
                            )
                        }
                      }),
                      t
                        ? d.default.createElement(
                            "h1",
                            { className: "next-error-h1", style: p.h1 },
                            t
                          )
                        : null,
                      d.default.createElement(
                        "div",
                        { style: p.desc },
                        d.default.createElement(
                          "h2",
                          { style: p.h2 },
                          this.props.title || t
                            ? r
                            : d.default.createElement(
                                d.default.Fragment,
                                null,
                                "Application error: a client-side exception has occurred (see the browser console for more information)"
                              ),
                          "."
                        )
                      )
                    )
                  );
                }
              }
            ]),
            u
          );
        })(d.default.Component);
      (h.displayName = "ErrorPage"),
        (h.getInitialProps = f),
        (h.origGetInitialProps = f),
        (t.default = h);
    },
    7285: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      var r = (0, n(2648).Z)(n(7294)).default.createContext({});
      t.AmpStateContext = r;
    },
    354: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInAmpMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.ampFirst,
            n = e.hybrid,
            r = e.hasQuery;
          return (
            (void 0 !== t && t) || (void 0 !== n && n && void 0 !== r && r)
          );
        });
    },
    6505: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = c),
        (t.default = void 0);
      var r = n(6495).Z,
        a = n(2648).Z,
        o = (0, n(1598).Z)(n(7294)),
        i = a(n(148)),
        l = n(7285),
        u = n(523),
        d = n(354);
      function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
              })
            ),
          t
        );
      }
      function s(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" == typeof t || "number" == typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      n(2783);
      var f = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(e, t) {
        var n,
          a,
          i,
          l,
          u = t.inAmpMode;
        return e
          .reduce(s, [])
          .reverse()
          .concat(c(u).reverse())
          .filter(
            ((n = new Set()),
            (a = new Set()),
            (i = new Set()),
            (l = {}),
            function (e) {
              var t = !0,
                r = !1;
              if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                r = !0;
                var o = e.key.slice(e.key.indexOf("$") + 1);
                n.has(o) ? (t = !1) : n.add(o);
              }
              switch (e.type) {
                case "title":
                case "base":
                  a.has(e.type) ? (t = !1) : a.add(e.type);
                  break;
                case "meta":
                  for (var u = 0, d = f.length; u < d; u++) {
                    var c = f[u];
                    if (e.props.hasOwnProperty(c)) {
                      if ("charSet" === c) i.has(c) ? (t = !1) : i.add(c);
                      else {
                        var s = e.props[c],
                          p = l[c] || new Set();
                        ("name" !== c || !r) && p.has(s)
                          ? (t = !1)
                          : (p.add(s), (l[c] = p));
                      }
                    }
                  }
              }
              return t;
            })
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            if (
              !u &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var a = r({}, e.props || {});
              return (
                (a["data-href"] = a.href),
                (a.href = void 0),
                (a["data-optimized-fonts"] = !0),
                o.default.cloneElement(e, a)
              );
            }
            return o.default.cloneElement(e, { key: n });
          });
      }
      var h = function (e) {
        var t = e.children,
          n = o.useContext(l.AmpStateContext),
          r = o.useContext(u.HeadManagerContext);
        return o.default.createElement(
          i.default,
          {
            reduceComponentsToState: p,
            headManager: r,
            inAmpMode: d.isInAmpMode(n)
          },
          t
        );
      };
      (t.default = h),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    148: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t,
            n = e.headManager,
            l = e.reduceComponentsToState;
          function u() {
            if (n && n.mountedInstances) {
              var t = r.Children.toArray(
                Array.from(n.mountedInstances).filter(Boolean)
              );
              n.updateHead(l(t, e));
            }
          }
          return (
            a &&
              (null == n ||
                null == (t = n.mountedInstances) ||
                t.add(e.children),
              u()),
            o(function () {
              var t;
              return (
                null == n ||
                  null == (t = n.mountedInstances) ||
                  t.add(e.children),
                function () {
                  var t;
                  null == n ||
                    null == (t = n.mountedInstances) ||
                    t.delete(e.children);
                }
              );
            }),
            o(function () {
              return (
                n && (n._pendingUpdate = u),
                function () {
                  n && (n._pendingUpdate = u);
                }
              );
            }),
            i(function () {
              return (
                n &&
                  n._pendingUpdate &&
                  (n._pendingUpdate(), (n._pendingUpdate = null)),
                function () {
                  n &&
                    n._pendingUpdate &&
                    (n._pendingUpdate(), (n._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (0, n(1598).Z)(n(7294)),
        a = !1,
        o = r.useLayoutEffect,
        i = a ? function () {} : r.useEffect;
    },
    2783: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.warnOnce = void 0);
      var n = function (e) {};
      t.warnOnce = n;
    }
  }
]);
