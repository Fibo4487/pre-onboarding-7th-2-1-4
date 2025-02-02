(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820],
  {
    9894: function (e, t, n) {
      "use strict";
      var r = n(3227),
        o = n(8361),
        i = n(5971),
        l = n(2715),
        a = n(1193);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var c = n(2648).Z,
        u = c(n(7294)),
        s = c(n(6505)),
        d = {
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
          i(c, e);
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
                  n = a(c);
                if (t) {
                  var r = a(this).constructor;
                  e = Reflect.construct(n, arguments, r);
                } else e = n.apply(this, arguments);
                return l(this, e);
              });
          function c() {
            return r(this, c), n.apply(this, arguments);
          }
          return (
            o(c, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.statusCode,
                    n = e.withDarkMode,
                    r =
                      this.props.title ||
                      d[t] ||
                      "An unexpected error has occurred";
                  return u.default.createElement(
                    "div",
                    { style: p.error },
                    u.default.createElement(
                      s.default,
                      null,
                      u.default.createElement(
                        "title",
                        null,
                        t
                          ? "".concat(t, ": ").concat(r)
                          : "Application error: a client-side exception has occurred"
                      )
                    ),
                    u.default.createElement(
                      "div",
                      null,
                      u.default.createElement("style", {
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
                        ? u.default.createElement(
                            "h1",
                            { className: "next-error-h1", style: p.h1 },
                            t
                          )
                        : null,
                      u.default.createElement(
                        "div",
                        { style: p.desc },
                        u.default.createElement(
                          "h2",
                          { style: p.h2 },
                          this.props.title || t
                            ? r
                            : u.default.createElement(
                                u.default.Fragment,
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
            c
          );
        })(u.default.Component);
      (h.displayName = "ErrorPage"),
        (h.getInitialProps = f),
        (h.origGetInitialProps = f),
        (t.default = h);
    },
    1981: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return n(9894);
        }
      ]);
    }
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 1981));
    }),
      (_N_E = e.O());
  }
]);
