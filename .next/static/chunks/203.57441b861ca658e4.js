"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [203],
  {
    1203: function (t, e, n) {
      var r = n(3227),
        o = n(8361),
        u = n(5971),
        c = n(2715),
        a = n(1193),
        i = n(7794);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var s = n(932).Z,
        f = (0, n(2648).Z)(n(7294)),
        p = n(7206);
      function l(t) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = s(
          i.mark(function t(e) {
            var n, r, o;
            return i.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.Component),
                      (r = e.ctx),
                      (t.next = 3),
                      p.loadGetInitialProps(n, r)
                    );
                  case 3:
                    return (o = t.sent), t.abrupt("return", { pageProps: o });
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var v = (function (t) {
        u(i, t);
        var e,
          n =
            ((e = (function () {
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
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = a(i);
              if (e) {
                var r = a(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return c(this, t);
            });
        function i() {
          return r(this, i), n.apply(this, arguments);
        }
        return (
          o(i, [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.Component,
                  n = t.pageProps;
                return f.default.createElement(e, Object.assign({}, n));
              }
            }
          ]),
          i
        );
      })(f.default.Component);
      (v.origGetInitialProps = l), (v.getInitialProps = l), (e.default = v);
    }
  }
]);
