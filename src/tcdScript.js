var e,
  t,
  n,
  r,
  i,
  o,
  a,
  s,
  l,
  c,
  d,
  u,
  p,
  f,
  h,
  m,
  _,
  g,
  v,
  b,
  y,
  w = Object.defineProperty,
  x = (e, t, n) => (
    ((e, t, n) => {
      t in e
        ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
    })(e, "symbol" != typeof t ? t + "" : t, n),
    n
  ),
  k = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  E = (e, t, n) => (
    k(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  N = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  A = (e, t, n, r) => (
    k(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  C = (e, t, n) => (k(e, t, "access private method"), n);
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var O,
  T,
  S,
  M,
  D,
  P,
  L,
  j,
  $ = {},
  W = [],
  I = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  H = Array.isArray;
function U(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function F(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function V(e, t, n) {
  var r,
    i,
    o,
    a = {};
  for (o in t)
    "key" == o ? (r = t[o]) : "ref" == o ? (i = t[o]) : (a[o] = t[o]);
  if (
    (arguments.length > 2 &&
      (a.children = arguments.length > 3 ? O.call(arguments, 2) : n),
    "function" == typeof e && null != e.defaultProps)
  )
    for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o]);
  return B(e, a, r, i, null);
}
function B(e, t, n, r, i) {
  var o = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == i ? ++S : i,
  };
  return null == i && null != T.vnode && T.vnode(o), o;
}
function R(e) {
  return e.children;
}
function q(e, t) {
  (this.props = e), (this.context = t);
}
function z(e, t) {
  if (null == t) return e.__ ? z(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
  return "function" == typeof e.type ? z(e) : null;
}
function Y(e) {
  var t, n;
  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Y(e);
  }
}
function K(e) {
  ((!e.__d && (e.__d = !0) && M.push(e) && !Q.__r++) ||
    D !== T.debounceRendering) &&
    ((D = T.debounceRendering) || P)(Q);
}
function Q() {
  var e, t, n, r, i, o, a, s;
  for (M.sort(L); (e = M.shift()); )
    e.__d &&
      ((t = M.length),
      (r = void 0),
      (i = void 0),
      (a = (o = (n = e).__v).__e),
      (s = n.__P) &&
        ((r = []),
        ((i = U({}, o)).__v = o.__v + 1),
        oe(
          s,
          o,
          i,
          n.__n,
          void 0 !== s.ownerSVGElement,
          null != o.__h ? [a] : null,
          r,
          null == a ? z(o) : a,
          o.__h
        ),
        ae(r, o),
        o.__e != a && Y(o)),
      M.length > t && M.sort(L));
  Q.__r = 0;
}
function J(e, t, n, r, i, o, a, s, l, c) {
  var d,
    u,
    p,
    f,
    h,
    m,
    _,
    g = (r && r.__k) || W,
    v = g.length;
  for (n.__k = [], d = 0; d < t.length; d++)
    if (
      null !=
      (f = n.__k[d] =
        null == (f = t[d]) || "boolean" == typeof f || "function" == typeof f
          ? null
          : "string" == typeof f || "number" == typeof f || "bigint" == typeof f
          ? B(null, f, null, null, f)
          : H(f)
          ? B(R, { children: f }, null, null, null)
          : f.__b > 0
          ? B(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v)
          : f)
    ) {
      if (
        ((f.__ = n),
        (f.__b = n.__b + 1),
        null === (p = g[d]) || (p && f.key == p.key && f.type === p.type))
      )
        g[d] = void 0;
      else
        for (u = 0; u < v; u++) {
          if ((p = g[u]) && f.key == p.key && f.type === p.type) {
            g[u] = void 0;
            break;
          }
          p = null;
        }
      oe(e, f, (p = p || $), i, o, a, s, l, c),
        (h = f.__e),
        (u = f.ref) &&
          p.ref != u &&
          (_ || (_ = []),
          p.ref && _.push(p.ref, null, f),
          _.push(u, f.__c || h, f)),
        null != h
          ? (null == m && (m = h),
            "function" == typeof f.type && f.__k === p.__k
              ? (f.__d = l = Z(f, l, e))
              : (l = G(e, f, p, g, h, l)),
            "function" == typeof n.type && (n.__d = l))
          : l && p.__e == l && l.parentNode != e && (l = z(p));
    }
  for (n.__e = m, d = v; d--; )
    null != g[d] &&
      ("function" == typeof n.type &&
        null != g[d].__e &&
        g[d].__e == n.__d &&
        (n.__d = ee(r).nextSibling),
      le(g[d], g[d]));
  if (_) for (d = 0; d < _.length; d++) se(_[d], _[++d], _[++d]);
}
function Z(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) &&
      ((r.__ = e),
      (t = "function" == typeof r.type ? Z(r, t, n) : G(n, r, r, i, r.__e, t)));
  return t;
}
function X(e, t) {
  return (
    (t = t || []),
    null == e ||
      "boolean" == typeof e ||
      (H(e)
        ? e.some(function (e) {
            X(e, t);
          })
        : t.push(e)),
    t
  );
}
function G(e, t, n, r, i, o) {
  var a, s, l;
  if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
  else if (null == n || i != o || null == i.parentNode)
    e: if (null == o || o.parentNode !== e) e.appendChild(i), (a = null);
    else {
      for (s = o, l = 0; (s = s.nextSibling) && l < r.length; l += 1)
        if (s == i) break e;
      e.insertBefore(i, o), (a = o);
    }
  return void 0 !== a ? a : i.nextSibling;
}
function ee(e) {
  var t, n, r;
  if (null == e.type || "string" == typeof e.type) return e.__e;
  if (e.__k)
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (r = ee(n))) return r;
  return null;
}
function te(e, t, n) {
  "-" === t[0]
    ? e.setProperty(t, null == n ? "" : n)
    : (e[t] =
        null == n ? "" : "number" != typeof n || I.test(t) ? n : n + "px");
}
function ne(e, t, n, r, i) {
  var o;
  e: if ("style" === t)
    if ("string" == typeof n) e.style.cssText = n;
    else {
      if (("string" == typeof r && (e.style.cssText = r = ""), r))
        for (t in r) (n && t in n) || te(e.style, t, "");
      if (n) for (t in n) (r && n[t] === r[t]) || te(e.style, t, n[t]);
    }
  else if ("o" === t[0] && "n" === t[1])
    (o = t !== (t = t.replace(/Capture$/, ""))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + o] = n),
      n
        ? r || e.addEventListener(t, o ? ie : re, o)
        : e.removeEventListener(t, o ? ie : re, o);
  else if ("dangerouslySetInnerHTML" !== t) {
    if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      "width" !== t &&
      "height" !== t &&
      "href" !== t &&
      "list" !== t &&
      "form" !== t &&
      "tabIndex" !== t &&
      "download" !== t &&
      "rowSpan" !== t &&
      "colSpan" !== t &&
      t in e
    )
      try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (a) {}
    "function" == typeof n ||
      (null == n || (!1 === n && "-" !== t[4])
        ? e.removeAttribute(t)
        : e.setAttribute(t, n));
  }
}
function re(e) {
  return this.l[e.type + !1](T.event ? T.event(e) : e);
}
function ie(e) {
  return this.l[e.type + !0](T.event ? T.event(e) : e);
}
function oe(e, t, n, r, i, o, a, s, l) {
  var c,
    d,
    u,
    p,
    f,
    h,
    m,
    _,
    g,
    v,
    b,
    y,
    w,
    x,
    k,
    E = t.type;
  if (void 0 !== t.constructor) return null;
  null != n.__h &&
    ((l = n.__h), (s = t.__e = n.__e), (t.__h = null), (o = [s])),
    (c = T.__b) && c(t);
  try {
    e: if ("function" == typeof E) {
      if (
        ((_ = t.props),
        (g = (c = E.contextType) && r[c.__c]),
        (v = c ? (g ? g.props.value : c.__) : r),
        n.__c
          ? (m = (d = t.__c = n.__c).__ = d.__E)
          : ("prototype" in E && E.prototype.render
              ? (t.__c = d = new E(_, v))
              : ((t.__c = d = new q(_, v)),
                (d.constructor = E),
                (d.render = ce)),
            g && g.sub(d),
            (d.props = _),
            d.state || (d.state = {}),
            (d.context = v),
            (d.__n = r),
            (u = d.__d = !0),
            (d.__h = []),
            (d._sb = [])),
        null == d.__s && (d.__s = d.state),
        null != E.getDerivedStateFromProps &&
          (d.__s == d.state && (d.__s = U({}, d.__s)),
          U(d.__s, E.getDerivedStateFromProps(_, d.__s))),
        (p = d.props),
        (f = d.state),
        (d.__v = t),
        u)
      )
        null == E.getDerivedStateFromProps &&
          null != d.componentWillMount &&
          d.componentWillMount(),
          null != d.componentDidMount && d.__h.push(d.componentDidMount);
      else {
        if (
          (null == E.getDerivedStateFromProps &&
            _ !== p &&
            null != d.componentWillReceiveProps &&
            d.componentWillReceiveProps(_, v),
          (!d.__e &&
            null != d.shouldComponentUpdate &&
            !1 === d.shouldComponentUpdate(_, d.__s, v)) ||
            t.__v === n.__v)
        ) {
          for (
            t.__v !== n.__v && ((d.props = _), (d.state = d.__s), (d.__d = !1)),
              d.__e = !1,
              t.__e = n.__e,
              t.__k = n.__k,
              t.__k.forEach(function (e) {
                e && (e.__ = t);
              }),
              b = 0;
            b < d._sb.length;
            b++
          )
            d.__h.push(d._sb[b]);
          (d._sb = []), d.__h.length && a.push(d);
          break e;
        }
        null != d.componentWillUpdate && d.componentWillUpdate(_, d.__s, v),
          null != d.componentDidUpdate &&
            d.__h.push(function () {
              d.componentDidUpdate(p, f, h);
            });
      }
      if (
        ((d.context = v),
        (d.props = _),
        (d.__P = e),
        (y = T.__r),
        (w = 0),
        "prototype" in E && E.prototype.render)
      ) {
        for (
          d.state = d.__s,
            d.__d = !1,
            y && y(t),
            c = d.render(d.props, d.state, d.context),
            x = 0;
          x < d._sb.length;
          x++
        )
          d.__h.push(d._sb[x]);
        d._sb = [];
      } else
        do {
          (d.__d = !1),
            y && y(t),
            (c = d.render(d.props, d.state, d.context)),
            (d.state = d.__s);
        } while (d.__d && ++w < 25);
      (d.state = d.__s),
        null != d.getChildContext && (r = U(U({}, r), d.getChildContext())),
        u ||
          null == d.getSnapshotBeforeUpdate ||
          (h = d.getSnapshotBeforeUpdate(p, f)),
        J(
          e,
          H(
            (k =
              null != c && c.type === R && null == c.key ? c.props.children : c)
          )
            ? k
            : [k],
          t,
          n,
          r,
          i,
          o,
          a,
          s,
          l
        ),
        (d.base = t.__e),
        (t.__h = null),
        d.__h.length && a.push(d),
        m && (d.__E = d.__ = null),
        (d.__e = !1);
    } else
      null == o && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = (function (e, t, n, r, i, o, a, s) {
            var l,
              c,
              d,
              u = n.props,
              p = t.props,
              f = t.type,
              h = 0;
            if (("svg" === f && (i = !0), null != o))
              for (; h < o.length; h++)
                if (
                  (l = o[h]) &&
                  "setAttribute" in l == !!f &&
                  (f ? l.localName === f : 3 === l.nodeType)
                ) {
                  (e = l), (o[h] = null);
                  break;
                }
            if (null == e) {
              if (null === f) return document.createTextNode(p);
              (e = i
                ? document.createElementNS("http://www.w3.org/2000/svg", f)
                : document.createElement(f, p.is && p)),
                (o = null),
                (s = !1);
            }
            if (null === f) u === p || (s && e.data === p) || (e.data = p);
            else {
              if (
                ((o = o && O.call(e.childNodes)),
                (c = (u = n.props || $).dangerouslySetInnerHTML),
                (d = p.dangerouslySetInnerHTML),
                !s)
              ) {
                if (null != o)
                  for (u = {}, h = 0; h < e.attributes.length; h++)
                    u[e.attributes[h].name] = e.attributes[h].value;
                (d || c) &&
                  ((d &&
                    ((c && d.__html == c.__html) ||
                      d.__html === e.innerHTML)) ||
                    (e.innerHTML = (d && d.__html) || ""));
              }
              if (
                ((function (e, t, n, r, i) {
                  var o;
                  for (o in n)
                    "children" === o ||
                      "key" === o ||
                      o in t ||
                      ne(e, o, null, n[o], r);
                  for (o in t)
                    (i && "function" != typeof t[o]) ||
                      "children" === o ||
                      "key" === o ||
                      "value" === o ||
                      "checked" === o ||
                      n[o] === t[o] ||
                      ne(e, o, t[o], n[o], r);
                })(e, p, u, i, s),
                d)
              )
                t.__k = [];
              else if (
                (J(
                  e,
                  H((h = t.props.children)) ? h : [h],
                  t,
                  n,
                  r,
                  i && "foreignObject" !== f,
                  o,
                  a,
                  o ? o[0] : n.__k && z(n, 0),
                  s
                ),
                null != o)
              )
                for (h = o.length; h--; ) null != o[h] && F(o[h]);
              s ||
                ("value" in p &&
                  void 0 !== (h = p.value) &&
                  (h !== e.value ||
                    ("progress" === f && !h) ||
                    ("option" === f && h !== u.value)) &&
                  ne(e, "value", h, u.value, !1),
                "checked" in p &&
                  void 0 !== (h = p.checked) &&
                  h !== e.checked &&
                  ne(e, "checked", h, u.checked, !1));
            }
            return e;
          })(n.__e, t, n, r, i, o, a, l));
    (c = T.diffed) && c(t);
  } catch (N) {
    (t.__v = null),
      (l || null != o) &&
        ((t.__e = s), (t.__h = !!l), (o[o.indexOf(s)] = null)),
      T.__e(N, t, n);
  }
}
function ae(e, t) {
  T.__c && T.__c(t, e),
    e.some(function (t) {
      try {
        (e = t.__h),
          (t.__h = []),
          e.some(function (e) {
            e.call(t);
          });
      } catch (n) {
        T.__e(n, t.__v);
      }
    });
}
function se(e, t, n) {
  try {
    "function" == typeof e ? e(t) : (e.current = t);
  } catch (r) {
    T.__e(r, n);
  }
}
function le(e, t, n) {
  var r, i;
  if (
    (T.unmount && T.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || se(r, null, t)),
    null != (r = e.__c))
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        T.__e(o, t);
      }
    (r.base = r.__P = null), (e.__c = void 0);
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++)
      r[i] && le(r[i], t, n || "function" != typeof e.type);
  n || null == e.__e || F(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function ce(e, t, n) {
  return this.constructor(e, n);
}
(O = W.slice),
  (T = {
    __e: function (e, t, n, r) {
      for (var i, o, a; (t = t.__); )
        if ((i = t.__c) && !i.__)
          try {
            if (
              ((o = i.constructor) &&
                null != o.getDerivedStateFromError &&
                (i.setState(o.getDerivedStateFromError(e)), (a = i.__d)),
              null != i.componentDidCatch &&
                (i.componentDidCatch(e, r || {}), (a = i.__d)),
              a)
            )
              return (i.__E = i);
          } catch (s) {
            e = s;
          }
      throw e;
    },
  }),
  (S = 0),
  (q.prototype.setState = function (e, t) {
    var n;
    (n =
      null != this.__s && this.__s !== this.state
        ? this.__s
        : (this.__s = U({}, this.state))),
      "function" == typeof e && (e = e(U({}, n), this.props)),
      e && U(n, e),
      null != e && this.__v && (t && this._sb.push(t), K(this));
  }),
  (q.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), K(this));
  }),
  (q.prototype.render = R),
  (M = []),
  (P =
    "function" == typeof Promise
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (L = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (Q.__r = 0),
  (j = 0);
var de,
  ue,
  pe,
  fe,
  he = 0,
  me = [],
  _e = [],
  ge = T.__b,
  ve = T.__r,
  be = T.diffed,
  ye = T.__c,
  we = T.unmount;
function xe(e, t) {
  T.__h && T.__h(ue, e, he || t), (he = 0);
  var n = ue.__H || (ue.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: _e }), n.__[e];
}
function ke(e) {
  return (
    (he = 1),
    (function (e, t, n) {
      var r = xe(de++, 2);
      if (
        ((r.t = e),
        !r.__c &&
          ((r.__ = [
            n ? n(t) : je(void 0, t),
            function (e) {
              var t = r.__N ? r.__N[0] : r.__[0],
                n = r.t(t, e);
              t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
            },
          ]),
          (r.__c = ue),
          !ue.u))
      ) {
        var i = function (e, t, n) {
          if (!r.__c.__H) return !0;
          var i = r.__c.__H.__.filter(function (e) {
            return e.__c;
          });
          if (
            i.every(function (e) {
              return !e.__N;
            })
          )
            return !o || o.call(this, e, t, n);
          var a = !1;
          return (
            i.forEach(function (e) {
              if (e.__N) {
                var t = e.__[0];
                (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
              }
            }),
            !(!a && r.__c.props === e) && (!o || o.call(this, e, t, n))
          );
        };
        ue.u = !0;
        var o = ue.shouldComponentUpdate,
          a = ue.componentWillUpdate;
        (ue.componentWillUpdate = function (e, t, n) {
          if (this.__e) {
            var r = o;
            (o = void 0), i(e, t, n), (o = r);
          }
          a && a.call(this, e, t, n);
        }),
          (ue.shouldComponentUpdate = i);
      }
      return r.__N || r.__;
    })(je, e)
  );
}
function Ee(e, t) {
  var n = xe(de++, 3);
  !T.__s && Le(n.__H, t) && ((n.__ = e), (n.i = t), ue.__H.__h.push(n));
}
function Ne(e, t) {
  var n = xe(de++, 4);
  !T.__s && Le(n.__H, t) && ((n.__ = e), (n.i = t), ue.__h.push(n));
}
function Ae(e) {
  return (
    (he = 5),
    Ce(function () {
      return { current: e };
    }, [])
  );
}
function Ce(e, t) {
  var n = xe(de++, 7);
  return Le(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
}
function Oe(e, t) {
  return (
    (he = 8),
    Ce(function () {
      return e;
    }, t)
  );
}
function Te() {
  for (var e; (e = me.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(De), e.__H.__h.forEach(Pe), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), T.__e(t, e.__v);
      }
}
(T.__b = function (e) {
  (ue = null), ge && ge(e);
}),
  (T.__r = function (e) {
    ve && ve(e), (de = 0);
    var t = (ue = e.__c).__H;
    t &&
      (pe === ue
        ? ((t.__h = []),
          (ue.__h = []),
          t.__.forEach(function (e) {
            e.__N && (e.__ = e.__N), (e.__V = _e), (e.__N = e.i = void 0);
          }))
        : (t.__h.forEach(De), t.__h.forEach(Pe), (t.__h = []))),
      (pe = ue);
  }),
  (T.diffed = function (e) {
    be && be(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((1 !== me.push(t) && fe === T.requestAnimationFrame) ||
          ((fe = T.requestAnimationFrame) || Me)(Te)),
      t.__H.__.forEach(function (e) {
        e.i && (e.__H = e.i),
          e.__V !== _e && (e.__ = e.__V),
          (e.i = void 0),
          (e.__V = _e);
      })),
      (pe = ue = null);
  }),
  (T.__c = function (e, t) {
    t.some(function (e) {
      try {
        e.__h.forEach(De),
          (e.__h = e.__h.filter(function (e) {
            return !e.__ || Pe(e);
          }));
      } catch (Re) {
        t.some(function (e) {
          e.__h && (e.__h = []);
        }),
          (t = []),
          T.__e(Re, e.__v);
      }
    }),
      ye && ye(e, t);
  }),
  (T.unmount = function (e) {
    we && we(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (e) {
        try {
          De(e);
        } catch (n) {
          t = n;
        }
      }),
      (n.__H = void 0),
      t && T.__e(t, n.__v));
  });
var Se = "function" == typeof requestAnimationFrame;
function Me(e) {
  var t,
    n = function () {
      clearTimeout(r), Se && cancelAnimationFrame(t), setTimeout(e);
    },
    r = setTimeout(n, 100);
  Se && (t = requestAnimationFrame(n));
}
function De(e) {
  var t = ue,
    n = e.__c;
  "function" == typeof n && ((e.__c = void 0), n()), (ue = t);
}
function Pe(e) {
  var t = ue;
  (e.__c = e.__()), (ue = t);
}
function Le(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (t, n) {
      return t !== e[n];
    })
  );
}
function je(e, t) {
  return "function" == typeof t ? t(e) : t;
}
var $e = {};
function We(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ie(e, t, n) {
  var r,
    i = /(?:\?([^#]*))?(#.*)?$/,
    o = e.match(i),
    a = {};
  if (o && o[1])
    for (var s = o[1].split("&"), l = 0; l < s.length; l++) {
      var c = s[l].split("=");
      a[decodeURIComponent(c[0])] = decodeURIComponent(c.slice(1).join("="));
    }
  (e = Fe(e.replace(i, ""))), (t = Fe(t || ""));
  for (var d = Math.max(e.length, t.length), u = 0; u < d; u++)
    if (t[u] && ":" === t[u].charAt(0)) {
      var p = t[u].replace(/(^:|[+*?]+$)/g, ""),
        f = (t[u].match(/[+*?]+$/) || $e)[0] || "",
        h = ~f.indexOf("+"),
        m = ~f.indexOf("*"),
        _ = e[u] || "";
      if (!_ && !m && (f.indexOf("?") < 0 || h)) {
        r = !1;
        break;
      }
      if (((a[p] = decodeURIComponent(_)), h || m)) {
        a[p] = e.slice(u).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[u] !== e[u]) {
      r = !1;
      break;
    }
  return (!0 === n.default || !1 !== r) && a;
}
function He(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Ue(e, t) {
  return (
    (e.index = t),
    (e.rank = (n = e).props.default ? 0 : Fe(n.props.path).map(Ve).join("")),
    e.props
  );
  var n;
}
function Fe(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Ve(e) {
  return ":" == e.charAt(0)
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
var Be,
  Re,
  qe = {},
  ze = [],
  Ye = [],
  Ke = null,
  Qe = { url: Xe() },
  Je =
    ((Re = {
      __c: (Be = "__cC" + j++),
      __: Qe,
      Consumer: function (e, t) {
        return e.children(t);
      },
      Provider: function (e) {
        var t, n;
        return (
          this.getChildContext ||
            ((t = []),
            ((n = {})[Be] = this),
            (this.getChildContext = function () {
              return n;
            }),
            (this.shouldComponentUpdate = function (e) {
              this.props.value !== e.value &&
                t.some(function (e) {
                  (e.__e = !0), K(e);
                });
            }),
            (this.sub = function (e) {
              t.push(e);
              var n = e.componentWillUnmount;
              e.componentWillUnmount = function () {
                t.splice(t.indexOf(e), 1), n && n.call(e);
              };
            })),
          e.children
        );
      },
    }).Provider.__ =
    Re.Consumer.contextType =
      Re);
function Ze() {
  var e = (function (e) {
    var t = ue.context[e.__c],
      n = xe(de++, 9);
    return (
      (n.c = e),
      t ? (null == n.__ && ((n.__ = !0), t.sub(ue)), t.props.value) : e.__
    );
  })(Je);
  if (e === Qe) {
    var t = ke()[1];
    Ee(function () {
      return (
        Ye.push(t),
        function () {
          return Ye.splice(Ye.indexOf(t), 1);
        }
      );
    }, []);
  }
  return [e, Ge];
}
function Xe() {
  var e;
  return (
    "" +
    ((e =
      Ke && Ke.location
        ? Ke.location
        : Ke && Ke.getCurrentLocation
        ? Ke.getCurrentLocation()
        : "undefined" != typeof location
        ? location
        : qe).pathname || "") +
    (e.search || "")
  );
}
function Ge(e, t) {
  return (
    void 0 === t && (t = !1),
    "string" != typeof e && e.url && ((t = e.replace), (e = e.url)),
    (function (e) {
      for (var t = ze.length; t--; ) if (ze[t].canRoute(e)) return !0;
      return !1;
    })(e) &&
      ((n = e),
      void 0 === (r = t ? "replace" : "push") && (r = "push"),
      Ke && Ke[r]
        ? Ke[r](n)
        : "undefined" != typeof history &&
          history[r + "State"] &&
          history[r + "State"](null, null, n)),
    et(e)
  );
  var n, r;
}
function et(e) {
  for (var t = !1, n = 0; n < ze.length; n++) ze[n].routeTo(e) && (t = !0);
  return t;
}
function tt(e) {
  if (e && e.getAttribute) {
    var t = e.getAttribute("href"),
      n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) return Ge(t);
  }
}
function nt(e) {
  return (
    e.stopImmediatePropagation && e.stopImmediatePropagation(),
    e.stopPropagation && e.stopPropagation(),
    e.preventDefault(),
    !1
  );
}
function rt(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    var t = e.target;
    do {
      if ("a" === t.localName && t.getAttribute("href")) {
        if (t.hasAttribute("data-native") || t.hasAttribute("native")) return;
        if (tt(t)) return nt(e);
      }
    } while ((t = t.parentNode));
  }
}
var it = !1;
function ot(e) {
  e.history && (Ke = e.history), (this.state = { url: e.url || Xe() });
}
We((ot.prototype = new q()), {
  shouldComponentUpdate: function (e) {
    return (
      !0 !== e.static ||
      e.url !== this.props.url ||
      e.onChange !== this.props.onChange
    );
  },
  canRoute: function (e) {
    var t = X(this.props.children);
    return void 0 !== this.g(t, e);
  },
  routeTo: function (e) {
    this.setState({ url: e });
    var t = this.canRoute(e);
    return this.p || this.forceUpdate(), t;
  },
  componentWillMount: function () {
    this.p = !0;
  },
  componentDidMount: function () {
    var e = this;
    it ||
      ((it = !0),
      Ke ||
        addEventListener("popstate", function () {
          et(Xe());
        }),
      addEventListener("click", rt)),
      ze.push(this),
      Ke &&
        (this.u = Ke.listen(function (t) {
          var n = t.location || t;
          e.routeTo("" + (n.pathname || "") + (n.search || ""));
        })),
      (this.p = !1);
  },
  componentWillUnmount: function () {
    "function" == typeof this.u && this.u(), ze.splice(ze.indexOf(this), 1);
  },
  componentWillUpdate: function () {
    this.p = !0;
  },
  componentDidUpdate: function () {
    this.p = !1;
  },
  g: function (e, t) {
    e = e.filter(Ue).sort(He);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = Ie(t, r.props.path, r.props);
      if (i) return [r, i];
    }
  },
  render: function (e, t) {
    var n,
      r,
      i = e.onChange,
      o = t.url,
      a = this.c,
      s = this.g(X(e.children), o);
    if (
      (s &&
        (r = (function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = U({}, e.props);
          for (o in (e.type && e.type.defaultProps && (a = e.type.defaultProps),
          t))
            "key" == o
              ? (r = t[o])
              : "ref" == o
              ? (i = t[o])
              : (s[o] = void 0 === t[o] && void 0 !== a ? a[o] : t[o]);
          return (
            arguments.length > 2 &&
              (s.children = arguments.length > 3 ? O.call(arguments, 2) : n),
            B(e.type, s, r || e.key, i || e.ref, null)
          );
        })(
          s[0],
          We(We({ url: o, matches: (n = s[1]) }, n), {
            key: void 0,
            ref: void 0,
          })
        )),
      o !== (a && a.url))
    ) {
      We(
        Qe,
        (a = this.c =
          {
            url: o,
            previous: a && a.url,
            current: r,
            path: r ? r.props.path : null,
            matches: n,
          })
      ),
        (a.router = this),
        (a.active = r ? [r] : []);
      for (var l = Ye.length; l--; ) Ye[l]({});
      "function" == typeof i && i(a);
    }
    return V(Je.Provider, { value: a }, r);
  },
});
var at = function (e) {
    return V("a", We({ onClick: rt }, e));
  },
  st = function (e) {
    return V(e.component, e);
  };
function lt({ to: e }) {
  return (
    Ee(() => {
      Ge(e, !0);
    }, [e]),
    null
  );
}
var ct = 0;
function dt(e, t, n, r, i, o) {
  var a,
    s,
    l = {};
  for (s in t) "ref" == s ? (a = t[s]) : (l[s] = t[s]);
  var c = {
    type: e,
    props: l,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --ct,
    __source: i,
    __self: o,
  };
  if ("function" == typeof e && (a = e.defaultProps))
    for (s in a) void 0 === l[s] && (l[s] = a[s]);
  return T.vnode && T.vnode(c), c;
}
function ut() {
  return dt("nav", {
    className: "navbar",
    children: dt("div", {
      className: "container top-nav-container",
      children: dt(at, {
        className: "navbar-brand py-0 mx-auto",
        rel: "noopener",
        href: "/",
        title: "Twitch Chat Downloader",
        children: dt("h1", {
          className: "fs-4 text-center mb-0",
          children: "Twitch Chat Downloader",
        }),
      }),
    }),
  });
}
function pt(e, t) {
  for (var n in e) if ("__source" !== n && !(n in t)) return !0;
  for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
  return !1;
}
function ft(e) {
  this.props = e;
}
((ft.prototype = new q()).isPureReactComponent = !0),
  (ft.prototype.shouldComponentUpdate = function (e, t) {
    return pt(this.props, e) || pt(this.state, t);
  });
var ht = T.__b;
T.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    ht && ht(e);
};
var mt = T.__e;
T.__e = function (e, t, n, r) {
  if (e.then)
    for (var i, o = t; (o = o.__); )
      if ((i = o.__c) && i.__c)
        return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t);
  mt(e, t, n, r);
};
var _t = T.unmount;
function gt(e, t, n) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (e) {
          "function" == typeof e.__c && e.__c();
        }),
        (e.__c.__H = null)),
      null !=
        (e = (function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        })({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (e) {
          return gt(e, t, n);
        }))),
    e
  );
}
function vt(e, t, n) {
  return (
    e &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (e) {
          return vt(e, t, n);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && n.insertBefore(e.__e, e.__d),
        (e.__c.__e = !0),
        (e.__c.__P = n))),
    e
  );
}
function bt() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function yt(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function wt() {
  (this.u = null), (this.o = null);
}
(T.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), _t && _t(e);
}),
  ((bt.prototype = new q()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = yt(r.__v),
      o = !1,
      a = function () {
        o || ((o = !0), (n.__R = null), i ? i(s) : s());
      };
    n.__R = a;
    var s = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var e = r.state.__a;
            r.__v.__k[0] = vt(e, e.__c.__P, e.__c.__O);
          }
          var t;
          for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); )
            t.forceUpdate();
        }
      },
      l = !0 === t.__h;
    r.__u++ || l || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(a, a);
  }),
  (bt.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (bt.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = gt(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var i = t.__a && V(R, null, e.fallback);
    return i && (i.__h = null), [V(R, null, t.__a ? null : e.children), i];
  });
var xt = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
((wt.prototype = new q()).__a = function (e) {
  var t = this,
    n = yt(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (i) {
      var o = function () {
        t.props.revealOrder ? (r.push(i), xt(t, e, r)) : i();
      };
      n ? n(o) : o();
    }
  );
}),
  (wt.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = X(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (wt.prototype.componentDidUpdate = wt.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        xt(e, n, t);
      });
    });
var kt =
    ("undefined" != typeof Symbol &&
      Symbol.for &&
      Symbol.for("react.element")) ||
    60103,
  Et =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Nt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  At = /[A-Z0-9]/g,
  Ct = "undefined" != typeof document,
  Ot = function (e) {
    return (
      "undefined" != typeof Symbol && "symbol" == typeof Symbol()
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(e);
  };
(q.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(q.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var Tt = T.event;
function St() {}
function Mt() {
  return this.cancelBubble;
}
function Dt() {
  return this.defaultPrevented;
}
T.event = function (e) {
  Tt && (e = Tt(e));
  var t = e.currentTarget,
    n = e.type;
  return (
    ("input" !== n && "change" !== n) ||
      !t.h ||
      Promise.resolve().then(function () {
        return (
          (e = n),
          null != (r = t).value &&
            Promise.resolve().then(function () {
              return (r.value = r.v);
            }),
          void (
            "change" === e &&
            null != r.checked &&
            Promise.resolve().then(function () {
              return (r.checked = r.v);
            })
          )
        );
        var e, r;
      }),
    (e.persist = St),
    (e.isPropagationStopped = Mt),
    (e.isDefaultPrevented = Dt),
    (e.nativeEvent = e)
  );
};
var Pt = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Lt = T.vnode;
T.vnode = function (e) {
  "string" == typeof e.type &&
    (function (e) {
      var t = e.props,
        n = e.type,
        r = {};
      for (var i in t) {
        var o = t[i];
        if (
          !(
            ("value" === i && "defaultValue" in t && null == o) ||
            (Ct && "children" === i && "noscript" === n) ||
            "class" === i ||
            "className" === i
          )
        ) {
          var a = i.toLowerCase();
          "defaultValue" === i && "value" in t && null == t.value
            ? (i = "value")
            : "download" === i && !0 === o
            ? (o = "")
            : "ondoubleclick" === a
            ? (i = "ondblclick")
            : "onchange" !== a ||
              ("input" !== n && "textarea" !== n) ||
              Ot(t.type)
            ? "onfocus" === a
              ? (i = "onfocusin")
              : "onblur" === a
              ? (i = "onfocusout")
              : Nt.test(i)
              ? (i = a)
              : -1 === n.indexOf("-") && Et.test(i)
              ? (i = i.replace(At, "-$&").toLowerCase())
              : null === o && (o = void 0)
            : (a = i = "oninput"),
            "oninput" === a && r[(i = a)] && (i = "oninputCapture"),
            (r[i] = o);
        }
      }
      "select" == n &&
        r.multiple &&
        Array.isArray(r.value) &&
        (r.value = X(t.children).forEach(function (e) {
          e.props.selected = -1 != r.value.indexOf(e.props.value);
        })),
        "select" == n &&
          null != r.defaultValue &&
          (r.value = X(t.children).forEach(function (e) {
            e.props.selected = r.multiple
              ? -1 != r.defaultValue.indexOf(e.props.value)
              : r.defaultValue == e.props.value;
          })),
        t.class && !t.className
          ? ((r.class = t.class), Object.defineProperty(r, "className", Pt))
          : ((t.className && !t.class) || (t.class && t.className)) &&
            (r.class = r.className = t.className),
        (e.props = r);
    })(e),
    (e.$$typeof = kt),
    Lt && Lt(e);
};
var jt = T.__r;
T.__r = function (e) {
  jt && jt(e), e.__c;
};
var $t = T.diffed;
T.diffed = function (e) {
  $t && $t(e);
  var t = e.type,
    n = e.props,
    r = e.__e,
    i = r && r.h;
  null == r ||
    ("input" !== t && "textarea" !== t && "select" !== t) ||
    !1 === i ||
    ((i || n.oninput || n.onchange || n.onChange) &&
      (null != n.value
        ? ((r.h = !0), (r.v = n.value))
        : null != n.checked
        ? ((r.h = !0), (r.v = n.checked))
        : (r.h = !1))),
    null != r &&
      "textarea" === e.type &&
      "value" in n &&
      n.value !== r.value &&
      (r.value = null == n.value ? "" : n.value);
};
const Wt = new Set(),
  It = new WeakMap(),
  Ht = new WeakMap(),
  Ut = new WeakMap(),
  Ft = new WeakMap(),
  Vt = new WeakMap(),
  Bt = new WeakMap(),
  Rt = new WeakMap(),
  qt = new WeakSet();
let zt;
const Yt = "__aa_tgt",
  Kt = "__aa_del",
  Qt = (e) => {
    const t = (function (e) {
      const t = e.reduce(
        (e, t) => [
          ...e,
          ...Array.from(t.addedNodes),
          ...Array.from(t.removedNodes),
        ],
        []
      );
      return (
        !t.every((e) => "#comment" === e.nodeName) &&
        e.reduce((e, t) => {
          if (!1 === e) return !1;
          if (t.target instanceof Element) {
            if ((nn(t.target), !e.has(t.target))) {
              e.add(t.target);
              for (let n = 0; n < t.target.children.length; n++) {
                const r = t.target.children.item(n);
                if (r) {
                  if (Kt in r) return !1;
                  nn(t.target, r), e.add(r);
                }
              }
            }
            if (t.removedNodes.length)
              for (let n = 0; n < t.removedNodes.length; n++) {
                const r = t.removedNodes[n];
                if (Kt in r) return !1;
                r instanceof Element &&
                  (e.add(r),
                  nn(t.target, r),
                  Ht.set(r, [t.previousSibling, t.nextSibling]));
              }
          }
          return e;
        }, new Set())
      );
    })(e);
    t &&
      t.forEach((e) =>
        (function (e) {
          var t;
          const n = e.isConnected,
            r = It.has(e);
          n && Ht.has(e) && Ht.delete(e);
          Ut.has(e) && (null === (t = Ut.get(e)) || void 0 === t || t.cancel());
          r && n
            ? (function (e) {
                const t = It.get(e),
                  n = on(e);
                if (!cn(e)) return It.set(e, n);
                let r;
                if (!t) return;
                const i = sn(e);
                if ("function" != typeof i) {
                  const o = t.left - n.left,
                    a = t.top - n.top,
                    [s, l, c, d] = an(e, t, n),
                    u = { transform: `translate(${o}px, ${a}px)` },
                    p = { transform: "translate(0, 0)" };
                  s !== l && ((u.width = `${s}px`), (p.width = `${l}px`)),
                    c !== d && ((u.height = `${c}px`), (p.height = `${d}px`)),
                    (r = e.animate([u, p], {
                      duration: i.duration,
                      easing: i.easing,
                    }));
                } else (r = new Animation(i(e, "remain", t, n))), r.play();
                Ut.set(e, r),
                  It.set(e, n),
                  r.addEventListener("finish", Zt.bind(null, e));
              })(e)
            : r && !n
            ? (function (e) {
                var t;
                if (!Ht.has(e) || !It.has(e)) return;
                const [n, r] = Ht.get(e);
                Object.defineProperty(e, Kt, { value: !0 }),
                  r && r.parentNode && r.parentNode instanceof Element
                    ? r.parentNode.insertBefore(e, r)
                    : n && n.parentNode
                    ? n.parentNode.appendChild(e)
                    : null === (t = ln(e)) || void 0 === t || t.appendChild(e);
                function i() {
                  var t;
                  e.remove(),
                    It.delete(e),
                    Ht.delete(e),
                    Ut.delete(e),
                    null === (t = Ft.get(e)) || void 0 === t || t.disconnect();
                }
                if (!cn(e)) return i();
                const [o, a, s, l] = (function (e) {
                    const t = It.get(e),
                      [n, , r] = an(e, t, on(e));
                    let i = e.parentElement;
                    for (
                      ;
                      i &&
                      ("static" === getComputedStyle(i).position ||
                        i instanceof HTMLBodyElement);

                    )
                      i = i.parentElement;
                    i || (i = document.body);
                    const o = getComputedStyle(i),
                      a = It.get(i) || on(i),
                      s = Math.round(t.top - a.top) - rn(o.borderTopWidth),
                      l = Math.round(t.left - a.left) - rn(o.borderLeftWidth);
                    return [s, l, n, r];
                  })(e),
                  c = sn(e),
                  d = It.get(e);
                let u;
                Object.assign(e.style, {
                  position: "absolute",
                  top: `${o}px`,
                  left: `${a}px`,
                  width: `${s}px`,
                  height: `${l}px`,
                  margin: 0,
                  pointerEvents: "none",
                  transformOrigin: "center",
                  zIndex: 100,
                }),
                  "function" != typeof c
                    ? (u = e.animate(
                        [
                          { transform: "scale(1)", opacity: 1 },
                          { transform: "scale(.98)", opacity: 0 },
                        ],
                        { duration: c.duration, easing: "ease-out" }
                      ))
                    : ((u = new Animation(c(e, "remove", d))), u.play());
                Ut.set(e, u), u.addEventListener("finish", i);
              })(e)
            : (function (e) {
                const t = on(e);
                It.set(e, t);
                const n = sn(e);
                if (!cn(e)) return;
                let r;
                "function" != typeof n
                  ? (r = e.animate(
                      [
                        { transform: "scale(.98)", opacity: 0 },
                        { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
                        { transform: "scale(1)", opacity: 1 },
                      ],
                      { duration: 1.5 * n.duration, easing: "ease-in" }
                    ))
                  : ((r = new Animation(n(e, "add", t))), r.play());
                Ut.set(e, r), r.addEventListener("finish", Zt.bind(null, e));
              })(e);
        })(e)
      );
  },
  Jt = (e) => {
    e.forEach((e) => {
      e.target === zt &&
        (clearTimeout(Rt.get(zt)),
        Rt.set(
          zt,
          setTimeout(() => {
            Wt.forEach((e) => dn(e, (e) => Gt(() => Zt(e))));
          }, 100)
        )),
        It.has(e.target) && Zt(e.target);
    });
  };
function Zt(e) {
  clearTimeout(Rt.get(e));
  const t = sn(e),
    n = "function" == typeof t ? 500 : t.duration;
  Rt.set(
    e,
    setTimeout(async () => {
      const t = Ut.get(e);
      try {
        await (null == t ? void 0 : t.finished),
          It.set(e, on(e)),
          (function (e) {
            const t = Ft.get(e);
            null == t || t.disconnect();
            let n = It.get(e),
              r = 0;
            n || ((n = on(e)), It.set(e, n));
            const { offsetWidth: i, offsetHeight: o } = zt,
              a = [
                n.top - 5,
                i - (n.left + 5 + n.width),
                o - (n.top + 5 + n.height),
                n.left - 5,
              ]
                .map((e) => -1 * Math.floor(e) + "px")
                .join(" "),
              s = new IntersectionObserver(
                () => {
                  ++r > 1 && Zt(e);
                },
                { root: zt, threshold: 1, rootMargin: a }
              );
            s.observe(e), Ft.set(e, s);
          })(e);
      } catch {}
    }, n)
  );
}
function Xt(e) {
  setTimeout(() => {
    Vt.set(
      e,
      setInterval(() => Gt(Zt.bind(null, e)), 2e3)
    );
  }, Math.round(2e3 * Math.random()));
}
function Gt(e) {
  "function" == typeof requestIdleCallback
    ? requestIdleCallback(() => e())
    : requestAnimationFrame(() => e());
}
let en, tn;
function nn(e, t) {
  t || Yt in e
    ? t && !(Yt in t) && Object.defineProperty(t, Yt, { value: e })
    : Object.defineProperty(e, Yt, { value: e });
}
function rn(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function on(e) {
  const t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height,
  };
}
function an(e, t, n) {
  let r = t.width,
    i = t.height,
    o = n.width,
    a = n.height;
  const s = getComputedStyle(e);
  if ("content-box" === s.getPropertyValue("box-sizing")) {
    const e =
        rn(s.paddingTop) +
        rn(s.paddingBottom) +
        rn(s.borderTopWidth) +
        rn(s.borderBottomWidth),
      t =
        rn(s.paddingLeft) +
        rn(s.paddingRight) +
        rn(s.borderRightWidth) +
        rn(s.borderLeftWidth);
    (r -= t), (o -= t), (i -= e), (a -= e);
  }
  return [r, o, i, a].map(Math.round);
}
function sn(e) {
  return Yt in e && Bt.has(e[Yt])
    ? Bt.get(e[Yt])
    : { duration: 250, easing: "ease-in-out" };
}
function ln(e) {
  if (Yt in e) return e[Yt];
}
function cn(e) {
  const t = ln(e);
  return !!t && qt.has(t);
}
function dn(e, ...t) {
  t.forEach((t) => t(e, Bt.has(e)));
  for (let n = 0; n < e.children.length; n++) {
    const r = e.children.item(n);
    r && t.forEach((e) => e(r, Bt.has(r)));
  }
}
function un(e) {
  const [t, n] = ke();
  return [
    Oe((t) => {
      t instanceof HTMLElement
        ? n(
            (function (e, t = {}) {
              en &&
                tn &&
                ((window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches &&
                  "function" != typeof t &&
                  !t.disrespectUserMotionPreference) ||
                  (qt.add(e),
                  "static" === getComputedStyle(e).position &&
                    Object.assign(e.style, { position: "relative" }),
                  dn(e, Zt, Xt, (e) => (null == tn ? void 0 : tn.observe(e))),
                  "function" == typeof t
                    ? Bt.set(e, t)
                    : Bt.set(e, { duration: 250, easing: "ease-in-out", ...t }),
                  en.observe(e, { childList: !0 }),
                  Wt.add(e)));
              return Object.freeze({
                parent: e,
                enable: () => {
                  qt.add(e);
                },
                disable: () => {
                  qt.delete(e);
                },
                isEnabled: () => qt.has(e),
              });
            })(t, e)
          )
        : n(void 0);
    }, []),
    (e) => {
      t && (e ? t.enable() : t.disable());
    },
  ];
}
function pn(e) {
  var t,
    n,
    r = "";
  if ("string" == typeof e || "number" == typeof e) r += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = pn(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function fn() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = pn(e)) && (r && (r += " "), (r += t));
  return r;
}
"undefined" != typeof window &&
  ((zt = document.documentElement),
  (en = new MutationObserver(Qt)),
  (tn = new ResizeObserver(Jt)),
  tn.observe(zt));
const hn = (e) => Oe(e, []);
function mn(e) {
  return dt("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ...e,
    children: [
      dt("path", {
        d: "M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z",
      }),
      dt("path", {
        d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z",
      }),
    ],
  });
}
const _n = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  gn = (e, t) => {
    const n = Math.trunc(e / 36e5) % 24;
    let r = Math.trunc(e / 6e4) % 60,
      i = Math.trunc(e / 1e3) % 60;
    t ||
      ((r = (r + "").padStart(n ? 2 : 1, "0")),
      (i = (i + "").padStart(2, "0")));
    const o = [n, r, i].filter((e) => !!e || (!!t && 0 === e)),
      a = ["H", "M", "S"].slice(-o.length);
    return t ? "PT" + o.map((e, t) => e + a[t]).join("") : o.join(":");
  },
  vn = /^[^\d]+/,
  bn = (e) => +e.replace(vn, ""),
  yn = (e, t) =>
    (null == t ? void 0 : t.toLowerCase()) === e.toLowerCase()
      ? e
      : `${t} (${e})`;
var wn = ((e) => ((e[(e.Text = 0)] = "Text"), (e[(e.Jsx = 1)] = "Jsx"), e))(
  wn || {}
);
function xn({ messages: e, link: t, isClip: n, setFilter: r }) {
  const i = hn((e) => {
    e.preventDefault();
    const {
      target: {
        dataset: { username: t },
      },
    } = e;
    r(t);
  });
  return dt(R, {
    children: dt("div", {
      className: "table-responsive",
      children: dt("table", {
        className: "table",
        children: [
          dt("thead", {
            children: dt("tr", {
              children: [
                dt("th", { className: "text-end", children: "Time" }),
                dt("th", { children: "Username" }),
                dt("th", { children: "Message" }),
              ],
            }),
          }),
          dt("tbody", {
            children:
              e && e.length > 0
                ? e.map((e) => {
                    var r;
                    return dt("tr", {
                      children: [
                        dt("td", {
                          className: "text-nowrap text-end",
                          children: [
                            e.getFormattedTimeOffset({ type: wn.Jsx }),
                            t &&
                              !n &&
                              dt("a", {
                                className: "ms-2",
                                rel: "nofollow noopener noreferrer",
                                target: "_blank",
                                href: `${t}?t=${gn(1e3 * e.offset, !0)
                                  .replace("PT", "")
                                  .toLowerCase()}`,
                                title: "Open video at current time",
                                "data-native": !0,
                                children: dt(mn, {
                                  className: "bootstrap-svg-icon",
                                }),
                              }),
                          ],
                        }),
                        dt("td", {
                          className: "text-nowrap",
                          children: [
                            !!(null == (r = e.user.badges)
                              ? void 0
                              : r.length) &&
                              dt("span", {
                                className: "me-2",
                                children: e.getFormattedUserBadges({
                                  type: wn.Jsx,
                                }),
                              }),
                            dt("a", {
                              className:
                                "fw-bold" +
                                ("#FFFFFF" === e.user.color
                                  ? " text-body"
                                  : ""),
                              href: "#",
                              title: e.user.name,
                              style: { color: e.user.color },
                              "data-username": e.user.name,
                              onClick: i,
                              children: e.user.name,
                            }),
                          ],
                        }),
                        dt("td", {
                          children: e.getFormattedMessage({ type: wn.Jsx }),
                        }),
                      ],
                    });
                  })
                : dt("tr", {
                    children: dt("td", {
                      colSpan: 3,
                      className: "text-muted",
                      children: "No messages found...",
                    }),
                  }),
          }),
        ],
      }),
    }),
  });
}
(e = new WeakMap()),
  (t = new WeakSet()),
  (n = function (e) {
    (window._paq = window._paq || []),
      _paq.push(["enableLinkTracking"]),
      (function () {
        var t = "https://matomo.findl.sk/";
        _paq.push(["setTrackerUrl", t + "matomo.php"]),
          _paq.push(["setSiteId", e + ""]);
        var n = document,
          r = n.createElement("script"),
          i = n.getElementsByTagName("script")[0];
        (r.async = !0),
          (r.src = t + "matomo.js"),
          i.parentNode.insertBefore(r, i);
      })();
  });
const kn = new (class {
    constructor(r, i) {
      N(this, t),
        x(this, "verbose", !1),
        N(this, e, (document.referrer || location.href) + ""),
        Object.assign(this, i),
        C(this, t, n).call(this, r),
        this.verbose && console.info(`[${this.constructor.name}]`, this);
    }
    trackPageView() {
      _paq.push(["setReferrerUrl", E(this, e) + ""]),
        _paq.push(["setCustomUrl", A(this, e, location.href + "")]),
        _paq.push(["setDocumentTitle", document.title + ""]),
        _paq.push(["deleteCustomVariables", "page"]),
        _paq.push(["trackPageView"]),
        _paq.push(["MediaAnalytics::scanForMedia", document.body]),
        _paq.push(["FormAnalytics::scanForForms", document.body]),
        _paq.push(["trackContentImpressionsWithinNode", document.body]),
        _paq.push(["enableLinkTracking"]);
    }
    trackEvent(...e) {
      _paq.push(["trackEvent", ...e.filter((e) => !!e)]);
    }
  })(11, { verbose: !1 }),
  En = () => kn;
function Nn(e) {
  return dt("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ...e,
    children: [
      dt("path", {
        "fill-rule": "evenodd",
        d: "M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z",
      }),
      dt("path", {
        "fill-rule": "evenodd",
        d: "M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z",
      }),
    ],
  });
}
function An(e) {
  return dt("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ...e,
    children: dt("path", {
      "fill-rule": "evenodd",
      d: "M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.517 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495Zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879l-1.327 4Z",
    }),
  });
}
function Cn(e) {
  return dt("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ...e,
    children: dt("path", {
      d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z",
    }),
  });
}
const On = "transitionend",
  Tn = (e) => {
    const t = ((e) => {
      let t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let n = e.getAttribute("href");
        if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
        n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
          (t = n && "#" !== n ? n.trim() : null);
      }
      return t;
    })(e);
    return t ? document.querySelector(t) : null;
  },
  Sn = (e) =>
    !(!e || "object" != typeof e) &&
    (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
  Mn = (e) =>
    Sn(e)
      ? e.jquery
        ? e[0]
        : e
      : "string" == typeof e && e.length > 0
      ? document.querySelector(e)
      : null,
  Dn = (e) => {
    if (!Sn(e) || 0 === e.getClientRects().length) return !1;
    const t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
      n = e.closest("details:not([open])");
    if (!n) return t;
    if (n !== e) {
      const t = e.closest("summary");
      if (t && t.parentNode !== n) return !1;
      if (null === t) return !1;
    }
    return t;
  },
  Pn = (e) =>
    !e ||
    e.nodeType !== Node.ELEMENT_NODE ||
    !!e.classList.contains("disabled") ||
    (void 0 !== e.disabled
      ? e.disabled
      : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
  Ln = () => {},
  jn = (e) => {
    e.offsetHeight;
  },
  $n = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  Wn = [],
  In = () => "rtl" === document.documentElement.dir,
  Hn = (e) => {
    var t;
    (t = () => {
      const t = $n();
      if (t) {
        const n = e.NAME,
          r = t.fn[n];
        (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = r), e.jQueryInterface));
      }
    }),
      "loading" === document.readyState
        ? (Wn.length ||
            document.addEventListener("DOMContentLoaded", () => {
              for (const e of Wn) e();
            }),
          Wn.push(t))
        : t();
  },
  Un = (e) => {
    "function" == typeof e && e();
  },
  Fn = (e, t, n = !0) => {
    if (!n) return void Un(e);
    const r =
      ((e) => {
        if (!e) return 0;
        let { transitionDuration: t, transitionDelay: n } =
          window.getComputedStyle(e);
        const r = Number.parseFloat(t),
          i = Number.parseFloat(n);
        return r || i
          ? ((t = t.split(",")[0]),
            (n = n.split(",")[0]),
            1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
          : 0;
      })(t) + 5;
    let i = !1;
    const o = ({ target: n }) => {
      n === t && ((i = !0), t.removeEventListener(On, o), Un(e));
    };
    t.addEventListener(On, o),
      setTimeout(() => {
        i || t.dispatchEvent(new Event(On));
      }, r);
  },
  Vn = /[^.]*(?=\..*)\.|.*/,
  Bn = /\..*/,
  Rn = /::\d+$/,
  qn = {};
let zn = 1;
const Yn = { mouseenter: "mouseover", mouseleave: "mouseout" },
  Kn = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function Qn(e, t) {
  return (t && `${t}::${zn++}`) || e.uidEvent || zn++;
}
function Jn(e) {
  const t = Qn(e);
  return (e.uidEvent = t), (qn[t] = qn[t] || {}), qn[t];
}
function Zn(e, t, n = null) {
  return Object.values(e).find(
    (e) => e.callable === t && e.delegationSelector === n
  );
}
function Xn(e, t, n) {
  const r = "string" == typeof t,
    i = r ? n : t || n;
  let o = nr(e);
  return Kn.has(o) || (o = e), [r, i, o];
}
function Gn(e, t, n, r, i) {
  if ("string" != typeof t || !e) return;
  let [o, a, s] = Xn(t, n, r);
  if (t in Yn) {
    a = ((e) =>
      function (t) {
        if (
          !t.relatedTarget ||
          (t.relatedTarget !== t.delegateTarget &&
            !t.delegateTarget.contains(t.relatedTarget))
        )
          return e.call(this, t);
      })(a);
  }
  const l = Jn(e),
    c = l[s] || (l[s] = {}),
    d = Zn(c, a, o ? n : null);
  if (d) return void (d.oneOff = d.oneOff && i);
  const u = Qn(a, t.replace(Vn, "")),
    p = o
      ? (function (e, t, n) {
          return function r(i) {
            const o = e.querySelectorAll(t);
            for (let { target: a } = i; a && a !== this; a = a.parentNode)
              for (const s of o)
                if (s === a)
                  return (
                    ir(i, { delegateTarget: a }),
                    r.oneOff && rr.off(e, i.type, t, n),
                    n.apply(a, [i])
                  );
          };
        })(e, n, a)
      : (function (e, t) {
          return function n(r) {
            return (
              ir(r, { delegateTarget: e }),
              n.oneOff && rr.off(e, r.type, t),
              t.apply(e, [r])
            );
          };
        })(e, a);
  (p.delegationSelector = o ? n : null),
    (p.callable = a),
    (p.oneOff = i),
    (p.uidEvent = u),
    (c[u] = p),
    e.addEventListener(s, p, o);
}
function er(e, t, n, r, i) {
  const o = Zn(t[n], r, i);
  o && (e.removeEventListener(n, o, Boolean(i)), delete t[n][o.uidEvent]);
}
function tr(e, t, n, r) {
  const i = t[n] || {};
  for (const o of Object.keys(i))
    if (o.includes(r)) {
      const r = i[o];
      er(e, t, n, r.callable, r.delegationSelector);
    }
}
function nr(e) {
  return (e = e.replace(Bn, "")), Yn[e] || e;
}
const rr = {
  on(e, t, n, r) {
    Gn(e, t, n, r, !1);
  },
  one(e, t, n, r) {
    Gn(e, t, n, r, !0);
  },
  off(e, t, n, r) {
    if ("string" != typeof t || !e) return;
    const [i, o, a] = Xn(t, n, r),
      s = a !== t,
      l = Jn(e),
      c = l[a] || {},
      d = t.startsWith(".");
    if (void 0 === o) {
      if (d) for (const n of Object.keys(l)) tr(e, l, n, t.slice(1));
      for (const n of Object.keys(c)) {
        const r = n.replace(Rn, "");
        if (!s || t.includes(r)) {
          const t = c[n];
          er(e, l, a, t.callable, t.delegationSelector);
        }
      }
    } else {
      if (!Object.keys(c).length) return;
      er(e, l, a, o, i ? n : null);
    }
  },
  trigger(e, t, n) {
    if ("string" != typeof t || !e) return null;
    const r = $n();
    let i = null,
      o = !0,
      a = !0,
      s = !1;
    t !== nr(t) &&
      r &&
      ((i = r.Event(t, n)),
      r(e).trigger(i),
      (o = !i.isPropagationStopped()),
      (a = !i.isImmediatePropagationStopped()),
      (s = i.isDefaultPrevented()));
    let l = new Event(t, { bubbles: o, cancelable: !0 });
    return (
      (l = ir(l, n)),
      s && l.preventDefault(),
      a && e.dispatchEvent(l),
      l.defaultPrevented && i && i.preventDefault(),
      l
    );
  },
};
function ir(e, t) {
  for (const [n, r] of Object.entries(t || {}))
    try {
      e[n] = r;
    } catch {
      Object.defineProperty(e, n, { configurable: !0, get: () => r });
    }
  return e;
}
const or = {
  find: (e, t = document.documentElement) =>
    [].concat(...Element.prototype.querySelectorAll.call(t, e)),
  findOne: (e, t = document.documentElement) =>
    Element.prototype.querySelector.call(t, e),
  children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
  parents(e, t) {
    const n = [];
    let r = e.parentNode.closest(t);
    for (; r; ) n.push(r), (r = r.parentNode.closest(t));
    return n;
  },
  prev(e, t) {
    let n = e.previousElementSibling;
    for (; n; ) {
      if (n.matches(t)) return [n];
      n = n.previousElementSibling;
    }
    return [];
  },
  next(e, t) {
    let n = e.nextElementSibling;
    for (; n; ) {
      if (n.matches(t)) return [n];
      n = n.nextElementSibling;
    }
    return [];
  },
  focusableChildren(e) {
    const t = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]',
    ]
      .map((e) => `${e}:not([tabindex^="-"])`)
      .join(",");
    return this.find(t, e).filter((e) => !Pn(e) && Dn(e));
  },
};
function ar(e) {
  if ("true" === e) return !0;
  if ("false" === e) return !1;
  if (e === Number(e).toString()) return Number(e);
  if ("" === e || "null" === e) return null;
  if ("string" != typeof e) return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function sr(e) {
  return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const lr = {
    setDataAttribute(e, t, n) {
      e.setAttribute(`data-bs-${sr(t)}`, n);
    },
    removeDataAttribute(e, t) {
      e.removeAttribute(`data-bs-${sr(t)}`);
    },
    getDataAttributes(e) {
      if (!e) return {};
      const t = {},
        n = Object.keys(e.dataset).filter(
          (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
        );
      for (const r of n) {
        let n = r.replace(/^bs/, "");
        (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
          (t[n] = ar(e.dataset[r]));
      }
      return t;
    },
    getDataAttribute: (e, t) => ar(e.getAttribute(`data-bs-${sr(t)}`)),
  },
  cr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  dr = ".sticky-top",
  ur = "padding-right",
  pr = "margin-right";
class fr {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const e = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - e);
  }
  hide() {
    const e = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, ur, (t) => t + e),
      this._setElementAttributes(cr, ur, (t) => t + e),
      this._setElementAttributes(dr, pr, (t) => t - e);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, ur),
      this._resetElementAttributes(cr, ur),
      this._resetElementAttributes(dr, pr);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(e, t, n) {
    const r = this.getWidth();
    this._applyManipulationCallback(e, (e) => {
      if (e !== this._element && window.innerWidth > e.clientWidth + r) return;
      this._saveInitialAttribute(e, t);
      const i = window.getComputedStyle(e).getPropertyValue(t);
      e.style.setProperty(t, `${n(Number.parseFloat(i))}px`);
    });
  }
  _saveInitialAttribute(e, t) {
    const n = e.style.getPropertyValue(t);
    n && lr.setDataAttribute(e, t, n);
  }
  _resetElementAttributes(e, t) {
    this._applyManipulationCallback(e, (e) => {
      const n = lr.getDataAttribute(e, t);
      null !== n
        ? (lr.removeDataAttribute(e, t), e.style.setProperty(t, n))
        : e.style.removeProperty(t);
    });
  }
  _applyManipulationCallback(e, t) {
    if (Sn(e)) t(e);
    else for (const n of or.find(e, this._element)) t(n);
  }
}
const hr = new Map(),
  mr = {
    set(e, t, n) {
      hr.has(e) || hr.set(e, new Map());
      const r = hr.get(e);
      r.has(t) || 0 === r.size
        ? r.set(t, n)
        : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(r.keys())[0]
            }.`
          );
    },
    get: (e, t) => (hr.has(e) && hr.get(e).get(t)) || null,
    remove(e, t) {
      if (!hr.has(e)) return;
      const n = hr.get(e);
      n.delete(t), 0 === n.size && hr.delete(e);
    },
  };
class _r {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  _getConfig(e) {
    return (
      (e = this._mergeConfigObj(e)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  _configAfterMerge(e) {
    return e;
  }
  _mergeConfigObj(e, t) {
    const n = Sn(t) ? lr.getDataAttribute(t, "config") : {};
    return {
      ...this.constructor.Default,
      ...("object" == typeof n ? n : {}),
      ...(Sn(t) ? lr.getDataAttributes(t) : {}),
      ...("object" == typeof e ? e : {}),
    };
  }
  _typeCheckConfig(e, t = this.constructor.DefaultType) {
    for (const r of Object.keys(t)) {
      const i = t[r],
        o = e[r],
        a = Sn(o)
          ? "element"
          : null == (n = o)
          ? `${n}`
          : Object.prototype.toString
              .call(n)
              .match(/\s([a-z]+)/i)[1]
              .toLowerCase();
      if (!new RegExp(i).test(a))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${i}".`
        );
    }
    var n;
  }
}
class gr extends _r {
  constructor(e, t) {
    super(),
      (e = Mn(e)) &&
        ((this._element = e),
        (this._config = this._getConfig(t)),
        mr.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    mr.remove(this._element, this.constructor.DATA_KEY),
      rr.off(this._element, this.constructor.EVENT_KEY);
    for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
  }
  _queueCallback(e, t, n = !0) {
    Fn(e, t, n);
  }
  _getConfig(e) {
    return (
      (e = this._mergeConfigObj(e, this._element)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  static getInstance(e) {
    return mr.get(Mn(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, t = {}) {
    return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
  }
  static get VERSION() {
    return "5.2.3";
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(e) {
    return `${e}${this.EVENT_KEY}`;
  }
}
const vr = "backdrop",
  br = "show",
  yr = `mousedown.bs.${vr}`,
  wr = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  xr = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class kr extends _r {
  constructor(e) {
    super(),
      (this._config = this._getConfig(e)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return wr;
  }
  static get DefaultType() {
    return xr;
  }
  static get NAME() {
    return vr;
  }
  show(e) {
    if (!this._config.isVisible) return void Un(e);
    this._append();
    const t = this._getElement();
    this._config.isAnimated && jn(t),
      t.classList.add(br),
      this._emulateAnimation(() => {
        Un(e);
      });
  }
  hide(e) {
    this._config.isVisible
      ? (this._getElement().classList.remove(br),
        this._emulateAnimation(() => {
          this.dispose(), Un(e);
        }))
      : Un(e);
  }
  dispose() {
    this._isAppended &&
      (rr.off(this._element, yr),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const e = document.createElement("div");
      (e.className = this._config.className),
        this._config.isAnimated && e.classList.add("fade"),
        (this._element = e);
    }
    return this._element;
  }
  _configAfterMerge(e) {
    return (e.rootElement = Mn(e.rootElement)), e;
  }
  _append() {
    if (this._isAppended) return;
    const e = this._getElement();
    this._config.rootElement.append(e),
      rr.on(e, yr, () => {
        Un(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(e) {
    Fn(e, this._getElement(), this._config.isAnimated);
  }
}
const Er = ".bs.focustrap",
  Nr = `focusin${Er}`,
  Ar = `keydown.tab${Er}`,
  Cr = "backward",
  Or = { autofocus: !0, trapElement: null },
  Tr = { autofocus: "boolean", trapElement: "element" };
class Sr extends _r {
  constructor(e) {
    super(),
      (this._config = this._getConfig(e)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return Or;
  }
  static get DefaultType() {
    return Tr;
  }
  static get NAME() {
    return "focustrap";
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      rr.off(document, Er),
      rr.on(document, Nr, (e) => this._handleFocusin(e)),
      rr.on(document, Ar, (e) => this._handleKeydown(e)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), rr.off(document, Er));
  }
  _handleFocusin(e) {
    const { trapElement: t } = this._config;
    if (e.target === document || e.target === t || t.contains(e.target)) return;
    const n = or.focusableChildren(t);
    0 === n.length
      ? t.focus()
      : this._lastTabNavDirection === Cr
      ? n[n.length - 1].focus()
      : n[0].focus();
  }
  _handleKeydown(e) {
    "Tab" === e.key &&
      (this._lastTabNavDirection = e.shiftKey ? Cr : "forward");
  }
}
const Mr = ".bs.modal",
  Dr = `hide${Mr}`,
  Pr = `hidePrevented${Mr}`,
  Lr = `hidden${Mr}`,
  jr = `show${Mr}`,
  $r = `shown${Mr}`,
  Wr = `resize${Mr}`,
  Ir = `click.dismiss${Mr}`,
  Hr = `mousedown.dismiss${Mr}`,
  Ur = `keydown.dismiss${Mr}`,
  Fr = `click${Mr}.data-api`,
  Vr = "modal-open",
  Br = "show",
  Rr = "modal-static",
  qr = { backdrop: !0, focus: !0, keyboard: !0 },
  zr = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class Yr extends gr {
  constructor(e, t) {
    super(e, t),
      (this._dialog = or.findOne(".modal-dialog", this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new fr()),
      this._addEventListeners();
  }
  static get Default() {
    return qr;
  }
  static get DefaultType() {
    return zr;
  }
  static get NAME() {
    return "modal";
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    if (this._isShown || this._isTransitioning) return;
    rr.trigger(this._element, jr, { relatedTarget: e }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(Vr),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(e)));
  }
  hide() {
    if (!this._isShown || this._isTransitioning) return;
    rr.trigger(this._element, Dr).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(Br),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated()
      ));
  }
  dispose() {
    for (const e of [window, this._dialog]) rr.off(e, Mr);
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new kr({
      isVisible: Boolean(this._config.backdrop),
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new Sr({ trapElement: this._element });
  }
  _showElement(e) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const t = or.findOne(".modal-body", this._dialog);
    t && (t.scrollTop = 0), jn(this._element), this._element.classList.add(Br);
    this._queueCallback(
      () => {
        this._config.focus && this._focustrap.activate(),
          (this._isTransitioning = !1),
          rr.trigger(this._element, $r, { relatedTarget: e });
      },
      this._dialog,
      this._isAnimated()
    );
  }
  _addEventListeners() {
    rr.on(this._element, Ur, (e) => {
      if ("Escape" === e.key)
        return this._config.keyboard
          ? (e.preventDefault(), void this.hide())
          : void this._triggerBackdropTransition();
    }),
      rr.on(window, Wr, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      rr.on(this._element, Hr, (e) => {
        rr.one(this._element, Ir, (t) => {
          this._element === e.target &&
            this._element === t.target &&
            ("static" !== this._config.backdrop
              ? this._config.backdrop && this.hide()
              : this._triggerBackdropTransition());
        });
      });
  }
  _hideModal() {
    (this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(Vr),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          rr.trigger(this._element, Lr);
      });
  }
  _isAnimated() {
    return this._element.classList.contains("fade");
  }
  _triggerBackdropTransition() {
    if (rr.trigger(this._element, Pr).defaultPrevented) return;
    const e =
        this._element.scrollHeight > document.documentElement.clientHeight,
      t = this._element.style.overflowY;
    "hidden" === t ||
      this._element.classList.contains(Rr) ||
      (e || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(Rr),
      this._queueCallback(() => {
        this._element.classList.remove(Rr),
          this._queueCallback(() => {
            this._element.style.overflowY = t;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const e =
        this._element.scrollHeight > document.documentElement.clientHeight,
      t = this._scrollBar.getWidth(),
      n = t > 0;
    if (n && !e) {
      const e = In() ? "paddingLeft" : "paddingRight";
      this._element.style[e] = `${t}px`;
    }
    if (!n && e) {
      const e = In() ? "paddingRight" : "paddingLeft";
      this._element.style[e] = `${t}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(e, t) {
    return this.each(function () {
      const n = Yr.getOrCreateInstance(this, e);
      if ("string" == typeof e) {
        if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
        n[e](t);
      }
    });
  }
}
function Kr({
  username: e,
  title: t,
  link: n,
  messages: r,
  isClip: i,
  onExportClick: o,
  onSupportUsClick: a,
}) {
  const s = Ae(),
    [l, c] = ke(),
    [d, u] = ke(),
    [p, f] = ke(),
    h = En(),
    m = hn(
      (function (e, t, n) {
        var r = this,
          i = Ae(null),
          o = Ae(0),
          a = Ae(null),
          s = Ae([]),
          l = Ae(),
          c = Ae(),
          d = Ae(e),
          u = Ae(!0);
        Ee(
          function () {
            d.current = e;
          },
          [e]
        );
        var p = !t && 0 !== t && "undefined" != typeof window;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        t = +t || 0;
        var f = !!(n = n || {}).leading,
          h = !("trailing" in n) || !!n.trailing,
          m = "maxWait" in n,
          _ = m ? Math.max(+n.maxWait || 0, t) : null;
        Ee(function () {
          return (
            (u.current = !0),
            function () {
              u.current = !1;
            }
          );
        }, []);
        var g = Ce(
          function () {
            var e = function (e) {
                var t = s.current,
                  n = l.current;
                return (
                  (s.current = l.current = null),
                  (o.current = e),
                  (c.current = d.current.apply(n, t))
                );
              },
              n = function (e, t) {
                p && cancelAnimationFrame(a.current),
                  (a.current = p ? requestAnimationFrame(e) : setTimeout(e, t));
              },
              g = function (e) {
                if (!u.current) return !1;
                var n = e - i.current;
                return (
                  !i.current || n >= t || n < 0 || (m && e - o.current >= _)
                );
              },
              v = function (t) {
                return (
                  (a.current = null),
                  h && s.current
                    ? e(t)
                    : ((s.current = l.current = null), c.current)
                );
              },
              b = function e() {
                var r = Date.now();
                if (g(r)) return v(r);
                if (u.current) {
                  var a = t - (r - i.current),
                    s = m ? Math.min(a, _ - (r - o.current)) : a;
                  n(e, s);
                }
              },
              y = function () {
                var d = Date.now(),
                  p = g(d);
                if (
                  ((s.current = [].slice.call(arguments)),
                  (l.current = r),
                  (i.current = d),
                  p)
                ) {
                  if (!a.current && u.current)
                    return (
                      (o.current = i.current),
                      n(b, t),
                      f ? e(i.current) : c.current
                    );
                  if (m) return n(b, t), e(i.current);
                }
                return a.current || n(b, t), c.current;
              };
            return (
              (y.cancel = function () {
                a.current &&
                  (p
                    ? cancelAnimationFrame(a.current)
                    : clearTimeout(a.current)),
                  (o.current = 0),
                  (s.current = i.current = l.current = a.current = null);
              }),
              (y.isPending = function () {
                return !!a.current;
              }),
              (y.flush = function () {
                return a.current ? v(Date.now()) : c.current;
              }),
              y
            );
          },
          [f, m, t, _, h, p]
        );
        return g;
      })((e) => {
        e.preventDefault();
        const {
          target: { value: t },
        } = e;
        c(t);
      }, 250)
    ),
    _ = hn(() => c(""));
  return (
    Ee(() => {
      f(
        null == r
          ? void 0
          : r
              .map(({ user: { name: e } }) => e)
              .filter((e, t, n) => n.indexOf(e) === t)
              .sort()
      );
    }, [r]),
    Ne(() => {
      if (!s.current) return;
      const t = () => {
          h.trackEvent("channel", "open", e);
        },
        n = () => u(!0),
        r = () => u(!1);
      return (
        s.current.addEventListener("hidden.bs.modal", _),
        s.current.addEventListener("show.bs.modal", t),
        s.current.addEventListener("show.bs.modal", n),
        s.current.addEventListener("hide.bs.modal", r),
        (s.current._bootstrap = new Yr(s.current)),
        () => {
          s.current &&
            (s.current.removeEventListener("hidden.bs.modal", _),
            s.current.removeEventListener("show.bs.modal", t),
            s.current.removeEventListener("show.bs.modal", n),
            s.current.removeEventListener("hide.bs.modal", r));
        }
      );
    }, [s.current, e]),
    dt(R, {
      children: [
        dt("button", {
          type: "button",
          className: "btn btn-primary text-nowrap rounded w-100",
          "data-bs-toggle": "modal",
          "data-bs-target": "#messages-modal",
          disabled: !r,
          title: "Open chat",
          children: [
            dt(Nn, { className: "bootstrap-svg-icon me-2" }),
            "Open chat",
          ],
        }),
        dt("div", {
          ref: s,
          className: "modal fade",
          id: "messages-modal",
          children: dt("div", {
            className:
              "modal-dialog modal-dialog-scrollable modal-xl modal-fullscreen-xl-down",
            children: dt("div", {
              className: "modal-content rounded",
              children: [
                dt("div", {
                  className: "modal-header",
                  children: [
                    dt("h5", {
                      className:
                        "modal-title text-nowrap text-truncate me-auto",
                      children: [
                        e &&
                          dt("span", {
                            className:
                              "badge bg-secondary text-uppercase rounded p-2 me-2",
                            children: e,
                          }),
                        t || "Chat messages",
                      ],
                    }),
                    dt("form", {
                      className: "mx-3",
                      children: [
                        dt("input", {
                          className: "form-control form-control-sm rounded",
                          type: "search",
                          placeholder: "Search or filter users or messages",
                          list: "usernames",
                          value: l,
                          onInput: m,
                        }),
                        !!(null == p ? void 0 : p.length) &&
                          dt("datalist", {
                            id: "usernames",
                            children: p.map((e) => dt("option", { value: e })),
                          }),
                      ],
                    }),
                    !!o &&
                      dt("button", {
                        type: "button",
                        className: "btn rounded",
                        title: "Export chat",
                        onClick: o,
                        children: dt(An, { className: "bootstrap-svg-icon" }),
                      }),
                    dt("button", {
                      type: "button",
                      className: "btn rounded",
                      "data-bs-dismiss": "modal",
                      title: "Close window",
                      children: dt(Cn, { className: "bootstrap-svg-icon" }),
                    }),
                    !1,
                  ],
                }),
                dt("div", {
                  className: "modal-body",
                  children:
                    d &&
                    dt(xn, {
                      messages: (null == r ? void 0 : r.length)
                        ? r.filter(
                            (e) =>
                              !l ||
                              (e.getFormattedUserName({ type: wn.Text }) + "")
                                .toLowerCase()
                                .includes(l.toLowerCase()) ||
                              (e.getFormattedMessage({ type: wn.Text }) + "")
                                .toLowerCase()
                                .includes(l.toLowerCase())
                          )
                        : [],
                      link: n,
                      isClip: i,
                      setFilter: c,
                    }),
                }),
                dt("div", {
                  className: "modal-footer justify-content-start",
                  children: dt("div", {
                    className: "row gx-0 w-100",
                    children: [
                      dt("div", {
                        className: "col",
                        children: [
                          "Link to ",
                          i ? "clip" : "video",
                          ":",
                          " ",
                          dt("a", {
                            rel: "nofollow noopener noreferrer",
                            referrerpolicy: "no-referrer",
                            target: "_blank",
                            href: n,
                            title: "Link to video",
                            "data-native": !0,
                            children: n,
                          }),
                        ],
                      }),
                      !!a &&
                        dt("div", {
                          className: "col-auto text-end",
                          children: dt("button", {
                            type: "button",
                            className: "btn btn-link p-0",
                            title: "Support us",
                            onClick: a,
                            children: "Support us",
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
rr.on(document, Fr, '[data-bs-toggle="modal"]', function (e) {
  const t = Tn(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    rr.one(t, jr, (e) => {
      e.defaultPrevented ||
        rr.one(t, Lr, () => {
          Dn(this) && this.focus();
        });
    });
  const n = or.findOne(".modal.show");
  n && Yr.getInstance(n).hide();
  Yr.getOrCreateInstance(t).toggle(this);
}),
  ((e, t = "hide") => {
    const n = `click.dismiss${e.EVENT_KEY}`,
      r = e.NAME;
    rr.on(document, n, `[data-bs-dismiss="${r}"]`, function (n) {
      if (
        (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Pn(this))
      )
        return;
      const i = Tn(this) || this.closest(`.${r}`);
      e.getOrCreateInstance(i)[t]();
    });
  })(Yr),
  Hn(Yr);
const Qr = (e) => Ne(e, []);
function Jr(e) {
  return dt("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ...e,
    children: [
      dt("path", {
        d: "M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z",
      }),
      dt("path", {
        d: "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z",
      }),
    ],
  });
}
var Zr = "top",
  Xr = "bottom",
  Gr = "right",
  ei = "left",
  ti = "auto",
  ni = [Zr, Xr, Gr, ei],
  ri = "start",
  ii = "end",
  oi = "clippingParents",
  ai = "viewport",
  si = "popper",
  li = "reference",
  ci = ni.reduce(function (e, t) {
    return e.concat([t + "-" + ri, t + "-" + ii]);
  }, []),
  di = [].concat(ni, [ti]).reduce(function (e, t) {
    return e.concat([t, t + "-" + ri, t + "-" + ii]);
  }, []),
  ui = "beforeRead",
  pi = "read",
  fi = "afterRead",
  hi = "beforeMain",
  mi = "main",
  _i = "afterMain",
  gi = "beforeWrite",
  vi = "write",
  bi = "afterWrite",
  yi = [ui, pi, fi, hi, mi, _i, gi, vi, bi];
function wi(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xi(e) {
  if (null == e) return window;
  if ("[object Window]" !== e.toString()) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function ki(e) {
  return e instanceof xi(e).Element || e instanceof Element;
}
function Ei(e) {
  return e instanceof xi(e).HTMLElement || e instanceof HTMLElement;
}
function Ni(e) {
  return (
    "undefined" != typeof ShadowRoot &&
    (e instanceof xi(e).ShadowRoot || e instanceof ShadowRoot)
  );
}
const Ai = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: function (e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (e) {
      var n = t.styles[e] || {},
        r = t.attributes[e] || {},
        i = t.elements[e];
      Ei(i) &&
        wi(i) &&
        (Object.assign(i.style, n),
        Object.keys(r).forEach(function (e) {
          var t = r[e];
          !1 === t
            ? i.removeAttribute(e)
            : i.setAttribute(e, !0 === t ? "" : t);
        }));
    });
  },
  effect: function (e) {
    var t = e.state,
      n = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: { position: "absolute" },
        reference: {},
      };
    return (
      Object.assign(t.elements.popper.style, n.popper),
      (t.styles = n),
      t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
      function () {
        Object.keys(t.elements).forEach(function (e) {
          var r = t.elements[e],
            i = t.attributes[e] || {},
            o = Object.keys(
              t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
            ).reduce(function (e, t) {
              return (e[t] = ""), e;
            }, {});
          Ei(r) &&
            wi(r) &&
            (Object.assign(r.style, o),
            Object.keys(i).forEach(function (e) {
              r.removeAttribute(e);
            }));
        });
      }
    );
  },
  requires: ["computeStyles"],
};
function Ci(e) {
  return e.split("-")[0];
}
var Oi = Math.max,
  Ti = Math.min,
  Si = Math.round;
function Mi() {
  var e = navigator.userAgentData;
  return null != e && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Di() {
  return !/^((?!chrome|android).)*safari/i.test(Mi());
}
function Pi(e, t, n) {
  void 0 === t && (t = !1), void 0 === n && (n = !1);
  var r = e.getBoundingClientRect(),
    i = 1,
    o = 1;
  t &&
    Ei(e) &&
    ((i = (e.offsetWidth > 0 && Si(r.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && Si(r.height) / e.offsetHeight) || 1));
  var a = (ki(e) ? xi(e) : window).visualViewport,
    s = !Di() && n,
    l = (r.left + (s && a ? a.offsetLeft : 0)) / i,
    c = (r.top + (s && a ? a.offsetTop : 0)) / o,
    d = r.width / i,
    u = r.height / o;
  return {
    width: d,
    height: u,
    top: c,
    right: l + d,
    bottom: c + u,
    left: l,
    x: l,
    y: c,
  };
}
function Li(e) {
  var t = Pi(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function ji(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ni(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function $i(e) {
  return xi(e).getComputedStyle(e);
}
function Wi(e) {
  return ["table", "td", "th"].indexOf(wi(e)) >= 0;
}
function Ii(e) {
  return ((ki(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Hi(e) {
  return "html" === wi(e)
    ? e
    : e.assignedSlot || e.parentNode || (Ni(e) ? e.host : null) || Ii(e);
}
function Ui(e) {
  return Ei(e) && "fixed" !== $i(e).position ? e.offsetParent : null;
}
function Fi(e) {
  for (var t = xi(e), n = Ui(e); n && Wi(n) && "static" === $i(n).position; )
    n = Ui(n);
  return n &&
    ("html" === wi(n) || ("body" === wi(n) && "static" === $i(n).position))
    ? t
    : n ||
        (function (e) {
          var t = /firefox/i.test(Mi());
          if (/Trident/i.test(Mi()) && Ei(e) && "fixed" === $i(e).position)
            return null;
          var n = Hi(e);
          for (
            Ni(n) && (n = n.host);
            Ei(n) && ["html", "body"].indexOf(wi(n)) < 0;

          ) {
            var r = $i(n);
            if (
              "none" !== r.transform ||
              "none" !== r.perspective ||
              "paint" === r.contain ||
              -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
              (t && "filter" === r.willChange) ||
              (t && r.filter && "none" !== r.filter)
            )
              return n;
            n = n.parentNode;
          }
          return null;
        })(e) ||
        t;
}
function Vi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bi(e, t, n) {
  return Oi(e, Ti(t, n));
}
function Ri(e) {
  return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function qi(e, t) {
  return t.reduce(function (t, n) {
    return (t[n] = e), t;
  }, {});
}
const zi = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: function (e) {
    var t,
      n = e.state,
      r = e.name,
      i = e.options,
      o = n.elements.arrow,
      a = n.modifiersData.popperOffsets,
      s = Ci(n.placement),
      l = Vi(s),
      c = [ei, Gr].indexOf(s) >= 0 ? "height" : "width";
    if (o && a) {
      var d = (function (e, t) {
          return Ri(
            "number" !=
              typeof (e =
                "function" == typeof e
                  ? e(Object.assign({}, t.rects, { placement: t.placement }))
                  : e)
              ? e
              : qi(e, ni)
          );
        })(i.padding, n),
        u = Li(o),
        p = "y" === l ? Zr : ei,
        f = "y" === l ? Xr : Gr,
        h =
          n.rects.reference[c] +
          n.rects.reference[l] -
          a[l] -
          n.rects.popper[c],
        m = a[l] - n.rects.reference[l],
        _ = Fi(o),
        g = _ ? ("y" === l ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
        v = h / 2 - m / 2,
        b = d[p],
        y = g - u[c] - d[f],
        w = g / 2 - u[c] / 2 + v,
        x = Bi(b, w, y),
        k = l;
      n.modifiersData[r] = (((t = {})[k] = x), (t.centerOffset = x - w), t);
    }
  },
  effect: function (e) {
    var t = e.state,
      n = e.options.element,
      r = void 0 === n ? "[data-popper-arrow]" : n;
    null != r &&
      ("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
      ji(t.elements.popper, r) &&
      (t.elements.arrow = r);
  },
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Yi(e) {
  return e.split("-")[1];
}
var Ki = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Qi(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    o = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    d = e.roundOffsets,
    u = e.isFixed,
    p = a.x,
    f = void 0 === p ? 0 : p,
    h = a.y,
    m = void 0 === h ? 0 : h,
    _ = "function" == typeof d ? d({ x: f, y: m }) : { x: f, y: m };
  (f = _.x), (m = _.y);
  var g = a.hasOwnProperty("x"),
    v = a.hasOwnProperty("y"),
    b = ei,
    y = Zr,
    w = window;
  if (c) {
    var x = Fi(n),
      k = "clientHeight",
      E = "clientWidth";
    if (
      (x === xi(n) &&
        "static" !== $i((x = Ii(n))).position &&
        "absolute" === s &&
        ((k = "scrollHeight"), (E = "scrollWidth")),
      i === Zr || ((i === ei || i === Gr) && o === ii))
    )
      (y = Xr),
        (m -=
          (u && x === w && w.visualViewport ? w.visualViewport.height : x[k]) -
          r.height),
        (m *= l ? 1 : -1);
    if (i === ei || ((i === Zr || i === Xr) && o === ii))
      (b = Gr),
        (f -=
          (u && x === w && w.visualViewport ? w.visualViewport.width : x[E]) -
          r.width),
        (f *= l ? 1 : -1);
  }
  var N,
    A = Object.assign({ position: s }, c && Ki),
    C =
      !0 === d
        ? (function (e, t) {
            var n = e.x,
              r = e.y,
              i = t.devicePixelRatio || 1;
            return { x: Si(n * i) / i || 0, y: Si(r * i) / i || 0 };
          })({ x: f, y: m }, xi(n))
        : { x: f, y: m };
  return (
    (f = C.x),
    (m = C.y),
    l
      ? Object.assign(
          {},
          A,
          (((N = {})[y] = v ? "0" : ""),
          (N[b] = g ? "0" : ""),
          (N.transform =
            (w.devicePixelRatio || 1) <= 1
              ? "translate(" + f + "px, " + m + "px)"
              : "translate3d(" + f + "px, " + m + "px, 0)"),
          N)
        )
      : Object.assign(
          {},
          A,
          (((t = {})[y] = v ? m + "px" : ""),
          (t[b] = g ? f + "px" : ""),
          (t.transform = ""),
          t)
        )
  );
}
const Ji = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = n.gpuAcceleration,
      i = void 0 === r || r,
      o = n.adaptive,
      a = void 0 === o || o,
      s = n.roundOffsets,
      l = void 0 === s || s,
      c = {
        placement: Ci(t.placement),
        variation: Yi(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: i,
        isFixed: "fixed" === t.options.strategy,
      };
    null != t.modifiersData.popperOffsets &&
      (t.styles.popper = Object.assign(
        {},
        t.styles.popper,
        Qi(
          Object.assign({}, c, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: a,
            roundOffsets: l,
          })
        )
      )),
      null != t.modifiersData.arrow &&
        (t.styles.arrow = Object.assign(
          {},
          t.styles.arrow,
          Qi(
            Object.assign({}, c, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l,
            })
          )
        )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement,
      }));
  },
  data: {},
};
var Zi = { passive: !0 };
const Xi = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: function (e) {
    var t = e.state,
      n = e.instance,
      r = e.options,
      i = r.scroll,
      o = void 0 === i || i,
      a = r.resize,
      s = void 0 === a || a,
      l = xi(t.elements.popper),
      c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
      o &&
        c.forEach(function (e) {
          e.addEventListener("scroll", n.update, Zi);
        }),
      s && l.addEventListener("resize", n.update, Zi),
      function () {
        o &&
          c.forEach(function (e) {
            e.removeEventListener("scroll", n.update, Zi);
          }),
          s && l.removeEventListener("resize", n.update, Zi);
      }
    );
  },
  data: {},
};
var Gi = { left: "right", right: "left", bottom: "top", top: "bottom" };
function eo(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return Gi[e];
  });
}
var to = { start: "end", end: "start" };
function no(e) {
  return e.replace(/start|end/g, function (e) {
    return to[e];
  });
}
function ro(e) {
  var t = xi(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function io(e) {
  return Pi(Ii(e)).left + ro(e).scrollLeft;
}
function oo(e) {
  var t = $i(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function ao(e) {
  return ["html", "body", "#document"].indexOf(wi(e)) >= 0
    ? e.ownerDocument.body
    : Ei(e) && oo(e)
    ? e
    : ao(Hi(e));
}
function so(e, t) {
  var n;
  void 0 === t && (t = []);
  var r = ao(e),
    i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
    o = xi(r),
    a = i ? [o].concat(o.visualViewport || [], oo(r) ? r : []) : r,
    s = t.concat(a);
  return i ? s : s.concat(so(Hi(a)));
}
function lo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function co(e, t, n) {
  return t === ai
    ? lo(
        (function (e, t) {
          var n = xi(e),
            r = Ii(e),
            i = n.visualViewport,
            o = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (i) {
            (o = i.width), (a = i.height);
            var c = Di();
            (c || (!c && "fixed" === t)) &&
              ((s = i.offsetLeft), (l = i.offsetTop));
          }
          return { width: o, height: a, x: s + io(e), y: l };
        })(e, n)
      )
    : ki(t)
    ? (function (e, t) {
        var n = Pi(e, !1, "fixed" === t);
        return (
          (n.top = n.top + e.clientTop),
          (n.left = n.left + e.clientLeft),
          (n.bottom = n.top + e.clientHeight),
          (n.right = n.left + e.clientWidth),
          (n.width = e.clientWidth),
          (n.height = e.clientHeight),
          (n.x = n.left),
          (n.y = n.top),
          n
        );
      })(t, n)
    : lo(
        (function (e) {
          var t,
            n = Ii(e),
            r = ro(e),
            i = null == (t = e.ownerDocument) ? void 0 : t.body,
            o = Oi(
              n.scrollWidth,
              n.clientWidth,
              i ? i.scrollWidth : 0,
              i ? i.clientWidth : 0
            ),
            a = Oi(
              n.scrollHeight,
              n.clientHeight,
              i ? i.scrollHeight : 0,
              i ? i.clientHeight : 0
            ),
            s = -r.scrollLeft + io(e),
            l = -r.scrollTop;
          return (
            "rtl" === $i(i || n).direction &&
              (s += Oi(n.clientWidth, i ? i.clientWidth : 0) - o),
            { width: o, height: a, x: s, y: l }
          );
        })(Ii(e))
      );
}
function uo(e, t, n, r) {
  var i =
      "clippingParents" === t
        ? (function (e) {
            var t = so(Hi(e)),
              n =
                ["absolute", "fixed"].indexOf($i(e).position) >= 0 && Ei(e)
                  ? Fi(e)
                  : e;
            return ki(n)
              ? t.filter(function (e) {
                  return ki(e) && ji(e, n) && "body" !== wi(e);
                })
              : [];
          })(e)
        : [].concat(t),
    o = [].concat(i, [n]),
    a = o[0],
    s = o.reduce(function (t, n) {
      var i = co(e, n, r);
      return (
        (t.top = Oi(i.top, t.top)),
        (t.right = Ti(i.right, t.right)),
        (t.bottom = Ti(i.bottom, t.bottom)),
        (t.left = Oi(i.left, t.left)),
        t
      );
    }, co(e, a, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function po(e) {
  var t,
    n = e.reference,
    r = e.element,
    i = e.placement,
    o = i ? Ci(i) : null,
    a = i ? Yi(i) : null,
    s = n.x + n.width / 2 - r.width / 2,
    l = n.y + n.height / 2 - r.height / 2;
  switch (o) {
    case Zr:
      t = { x: s, y: n.y - r.height };
      break;
    case Xr:
      t = { x: s, y: n.y + n.height };
      break;
    case Gr:
      t = { x: n.x + n.width, y: l };
      break;
    case ei:
      t = { x: n.x - r.width, y: l };
      break;
    default:
      t = { x: n.x, y: n.y };
  }
  var c = o ? Vi(o) : null;
  if (null != c) {
    var d = "y" === c ? "height" : "width";
    switch (a) {
      case ri:
        t[c] = t[c] - (n[d] / 2 - r[d] / 2);
        break;
      case ii:
        t[c] = t[c] + (n[d] / 2 - r[d] / 2);
    }
  }
  return t;
}
function fo(e, t) {
  void 0 === t && (t = {});
  var n = t,
    r = n.placement,
    i = void 0 === r ? e.placement : r,
    o = n.strategy,
    a = void 0 === o ? e.strategy : o,
    s = n.boundary,
    l = void 0 === s ? oi : s,
    c = n.rootBoundary,
    d = void 0 === c ? ai : c,
    u = n.elementContext,
    p = void 0 === u ? si : u,
    f = n.altBoundary,
    h = void 0 !== f && f,
    m = n.padding,
    _ = void 0 === m ? 0 : m,
    g = Ri("number" != typeof _ ? _ : qi(_, ni)),
    v = p === si ? li : si,
    b = e.rects.popper,
    y = e.elements[h ? v : p],
    w = uo(ki(y) ? y : y.contextElement || Ii(e.elements.popper), l, d, a),
    x = Pi(e.elements.reference),
    k = po({ reference: x, element: b, strategy: "absolute", placement: i }),
    E = lo(Object.assign({}, b, k)),
    N = p === si ? E : x,
    A = {
      top: w.top - N.top + g.top,
      bottom: N.bottom - w.bottom + g.bottom,
      left: w.left - N.left + g.left,
      right: N.right - w.right + g.right,
    },
    C = e.modifiersData.offset;
  if (p === si && C) {
    var O = C[i];
    Object.keys(A).forEach(function (e) {
      var t = [Gr, Xr].indexOf(e) >= 0 ? 1 : -1,
        n = [Zr, Xr].indexOf(e) >= 0 ? "y" : "x";
      A[e] += O[n] * t;
    });
  }
  return A;
}
const ho = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (
        var i = n.mainAxis,
          o = void 0 === i || i,
          a = n.altAxis,
          s = void 0 === a || a,
          l = n.fallbackPlacements,
          c = n.padding,
          d = n.boundary,
          u = n.rootBoundary,
          p = n.altBoundary,
          f = n.flipVariations,
          h = void 0 === f || f,
          m = n.allowedAutoPlacements,
          _ = t.options.placement,
          g = Ci(_),
          v =
            l ||
            (g === _ || !h
              ? [eo(_)]
              : (function (e) {
                  if (Ci(e) === ti) return [];
                  var t = eo(e);
                  return [no(e), t, no(t)];
                })(_)),
          b = [_].concat(v).reduce(function (e, n) {
            return e.concat(
              Ci(n) === ti
                ? (function (e, t) {
                    void 0 === t && (t = {});
                    var n = t,
                      r = n.placement,
                      i = n.boundary,
                      o = n.rootBoundary,
                      a = n.padding,
                      s = n.flipVariations,
                      l = n.allowedAutoPlacements,
                      c = void 0 === l ? di : l,
                      d = Yi(r),
                      u = d
                        ? s
                          ? ci
                          : ci.filter(function (e) {
                              return Yi(e) === d;
                            })
                        : ni,
                      p = u.filter(function (e) {
                        return c.indexOf(e) >= 0;
                      });
                    0 === p.length && (p = u);
                    var f = p.reduce(function (t, n) {
                      return (
                        (t[n] = fo(e, {
                          placement: n,
                          boundary: i,
                          rootBoundary: o,
                          padding: a,
                        })[Ci(n)]),
                        t
                      );
                    }, {});
                    return Object.keys(f).sort(function (e, t) {
                      return f[e] - f[t];
                    });
                  })(t, {
                    placement: n,
                    boundary: d,
                    rootBoundary: u,
                    padding: c,
                    flipVariations: h,
                    allowedAutoPlacements: m,
                  })
                : n
            );
          }, []),
          y = t.rects.reference,
          w = t.rects.popper,
          x = new Map(),
          k = !0,
          E = b[0],
          N = 0;
        N < b.length;
        N++
      ) {
        var A = b[N],
          C = Ci(A),
          O = Yi(A) === ri,
          T = [Zr, Xr].indexOf(C) >= 0,
          S = T ? "width" : "height",
          M = fo(t, {
            placement: A,
            boundary: d,
            rootBoundary: u,
            altBoundary: p,
            padding: c,
          }),
          D = T ? (O ? Gr : ei) : O ? Xr : Zr;
        y[S] > w[S] && (D = eo(D));
        var P = eo(D),
          L = [];
        if (
          (o && L.push(M[C] <= 0),
          s && L.push(M[D] <= 0, M[P] <= 0),
          L.every(function (e) {
            return e;
          }))
        ) {
          (E = A), (k = !1);
          break;
        }
        x.set(A, L);
      }
      if (k)
        for (
          var j = function (e) {
              var t = b.find(function (t) {
                var n = x.get(t);
                if (n)
                  return n.slice(0, e).every(function (e) {
                    return e;
                  });
              });
              if (t) return (E = t), "break";
            },
            $ = h ? 3 : 1;
          $ > 0;
          $--
        ) {
          if ("break" === j($)) break;
        }
      t.placement !== E &&
        ((t.modifiersData[r]._skip = !0), (t.placement = E), (t.reset = !0));
    }
  },
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function mo(e, t, n) {
  return (
    void 0 === n && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function _o(e) {
  return [Zr, Gr, Xr, ei].some(function (t) {
    return e[t] >= 0;
  });
}
const go = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: function (e) {
    var t = e.state,
      n = e.name,
      r = t.rects.reference,
      i = t.rects.popper,
      o = t.modifiersData.preventOverflow,
      a = fo(t, { elementContext: "reference" }),
      s = fo(t, { altBoundary: !0 }),
      l = mo(a, r),
      c = mo(s, i, o),
      d = _o(l),
      u = _o(c);
    (t.modifiersData[n] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: c,
      isReferenceHidden: d,
      hasPopperEscaped: u,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": u,
      }));
  },
};
const vo = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      i = n.offset,
      o = void 0 === i ? [0, 0] : i,
      a = di.reduce(function (e, n) {
        return (
          (e[n] = (function (e, t, n) {
            var r = Ci(e),
              i = [ei, Zr].indexOf(r) >= 0 ? -1 : 1,
              o =
                "function" == typeof n
                  ? n(Object.assign({}, t, { placement: e }))
                  : n,
              a = o[0],
              s = o[1];
            return (
              (a = a || 0),
              (s = (s || 0) * i),
              [ei, Gr].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
            );
          })(n, t.rects, o)),
          e
        );
      }, {}),
      s = a[t.placement],
      l = s.x,
      c = s.y;
    null != t.modifiersData.popperOffsets &&
      ((t.modifiersData.popperOffsets.x += l),
      (t.modifiersData.popperOffsets.y += c)),
      (t.modifiersData[r] = a);
  },
};
const bo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: function (e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = po({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement,
    });
  },
  data: {},
};
const yo = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: function (e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      i = n.mainAxis,
      o = void 0 === i || i,
      a = n.altAxis,
      s = void 0 !== a && a,
      l = n.boundary,
      c = n.rootBoundary,
      d = n.altBoundary,
      u = n.padding,
      p = n.tether,
      f = void 0 === p || p,
      h = n.tetherOffset,
      m = void 0 === h ? 0 : h,
      _ = fo(t, { boundary: l, rootBoundary: c, padding: u, altBoundary: d }),
      g = Ci(t.placement),
      v = Yi(t.placement),
      b = !v,
      y = Vi(g),
      w = "x" === y ? "y" : "x",
      x = t.modifiersData.popperOffsets,
      k = t.rects.reference,
      E = t.rects.popper,
      N =
        "function" == typeof m
          ? m(Object.assign({}, t.rects, { placement: t.placement }))
          : m,
      A =
        "number" == typeof N
          ? { mainAxis: N, altAxis: N }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, N),
      C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      O = { x: 0, y: 0 };
    if (x) {
      if (o) {
        var T,
          S = "y" === y ? Zr : ei,
          M = "y" === y ? Xr : Gr,
          D = "y" === y ? "height" : "width",
          P = x[y],
          L = P + _[S],
          j = P - _[M],
          $ = f ? -E[D] / 2 : 0,
          W = v === ri ? k[D] : E[D],
          I = v === ri ? -E[D] : -k[D],
          H = t.elements.arrow,
          U = f && H ? Li(H) : { width: 0, height: 0 },
          F = t.modifiersData["arrow#persistent"]
            ? t.modifiersData["arrow#persistent"].padding
            : { top: 0, right: 0, bottom: 0, left: 0 },
          V = F[S],
          B = F[M],
          R = Bi(0, k[D], U[D]),
          q = b ? k[D] / 2 - $ - R - V - A.mainAxis : W - R - V - A.mainAxis,
          z = b ? -k[D] / 2 + $ + R + B + A.mainAxis : I + R + B + A.mainAxis,
          Y = t.elements.arrow && Fi(t.elements.arrow),
          K = Y ? ("y" === y ? Y.clientTop || 0 : Y.clientLeft || 0) : 0,
          Q = null != (T = null == C ? void 0 : C[y]) ? T : 0,
          J = P + z - Q,
          Z = Bi(f ? Ti(L, P + q - Q - K) : L, P, f ? Oi(j, J) : j);
        (x[y] = Z), (O[y] = Z - P);
      }
      if (s) {
        var X,
          G = "x" === y ? Zr : ei,
          ee = "x" === y ? Xr : Gr,
          te = x[w],
          ne = "y" === w ? "height" : "width",
          re = te + _[G],
          ie = te - _[ee],
          oe = -1 !== [Zr, ei].indexOf(g),
          ae = null != (X = null == C ? void 0 : C[w]) ? X : 0,
          se = oe ? re : te - k[ne] - E[ne] - ae + A.altAxis,
          le = oe ? te + k[ne] + E[ne] - ae - A.altAxis : ie,
          ce =
            f && oe
              ? (ue = Bi(se, te, (de = le))) > de
                ? de
                : ue
              : Bi(f ? se : re, te, f ? le : ie);
        (x[w] = ce), (O[w] = ce - te);
      }
      var de, ue;
      t.modifiersData[r] = O;
    }
  },
  requiresIfExists: ["offset"],
};
function wo(e, t, n) {
  void 0 === n && (n = !1);
  var r,
    i,
    o = Ei(t),
    a =
      Ei(t) &&
      (function (e) {
        var t = e.getBoundingClientRect(),
          n = Si(t.width) / e.offsetWidth || 1,
          r = Si(t.height) / e.offsetHeight || 1;
        return 1 !== n || 1 !== r;
      })(t),
    s = Ii(t),
    l = Pi(e, a, n),
    c = { scrollLeft: 0, scrollTop: 0 },
    d = { x: 0, y: 0 };
  return (
    (o || (!o && !n)) &&
      (("body" !== wi(t) || oo(s)) &&
        (c =
          (r = t) !== xi(r) && Ei(r)
            ? { scrollLeft: (i = r).scrollLeft, scrollTop: i.scrollTop }
            : ro(r)),
      Ei(t)
        ? (((d = Pi(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
        : s && (d.x = io(s))),
    {
      x: l.left + c.scrollLeft - d.x,
      y: l.top + c.scrollTop - d.y,
      width: l.width,
      height: l.height,
    }
  );
}
function xo(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  function i(e) {
    n.add(e.name),
      []
        .concat(e.requires || [], e.requiresIfExists || [])
        .forEach(function (e) {
          if (!n.has(e)) {
            var r = t.get(e);
            r && i(r);
          }
        }),
      r.push(e);
  }
  return (
    e.forEach(function (e) {
      t.set(e.name, e);
    }),
    e.forEach(function (e) {
      n.has(e.name) || i(e);
    }),
    r
  );
}
var ko = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Eo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (e) {
    return !(e && "function" == typeof e.getBoundingClientRect);
  });
}
function No(e) {
  void 0 === e && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = void 0 === n ? [] : n,
    i = t.defaultOptions,
    o = void 0 === i ? ko : i;
  return function (e, t, n) {
    void 0 === n && (n = o);
    var i,
      a,
      s = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ko, o),
        modifiersData: {},
        elements: { reference: e, popper: t },
        attributes: {},
        styles: {},
      },
      l = [],
      c = !1,
      d = {
        state: s,
        setOptions: function (n) {
          var i = "function" == typeof n ? n(s.options) : n;
          u(),
            (s.options = Object.assign({}, o, s.options, i)),
            (s.scrollParents = {
              reference: ki(e)
                ? so(e)
                : e.contextElement
                ? so(e.contextElement)
                : [],
              popper: so(t),
            });
          var a,
            c,
            p = (function (e) {
              var t = xo(e);
              return yi.reduce(function (e, n) {
                return e.concat(
                  t.filter(function (e) {
                    return e.phase === n;
                  })
                );
              }, []);
            })(
              ((a = [].concat(r, s.options.modifiers)),
              (c = a.reduce(function (e, t) {
                var n = e[t.name];
                return (
                  (e[t.name] = n
                    ? Object.assign({}, n, t, {
                        options: Object.assign({}, n.options, t.options),
                        data: Object.assign({}, n.data, t.data),
                      })
                    : t),
                  e
                );
              }, {})),
              Object.keys(c).map(function (e) {
                return c[e];
              }))
            );
          return (
            (s.orderedModifiers = p.filter(function (e) {
              return e.enabled;
            })),
            s.orderedModifiers.forEach(function (e) {
              var t = e.name,
                n = e.options,
                r = void 0 === n ? {} : n,
                i = e.effect;
              if ("function" == typeof i) {
                var o = i({ state: s, name: t, instance: d, options: r }),
                  a = function () {};
                l.push(o || a);
              }
            }),
            d.update()
          );
        },
        forceUpdate: function () {
          if (!c) {
            var e = s.elements,
              t = e.reference,
              n = e.popper;
            if (Eo(t, n)) {
              (s.rects = {
                reference: wo(t, Fi(n), "fixed" === s.options.strategy),
                popper: Li(n),
              }),
                (s.reset = !1),
                (s.placement = s.options.placement),
                s.orderedModifiers.forEach(function (e) {
                  return (s.modifiersData[e.name] = Object.assign({}, e.data));
                });
              for (var r = 0; r < s.orderedModifiers.length; r++)
                if (!0 !== s.reset) {
                  var i = s.orderedModifiers[r],
                    o = i.fn,
                    a = i.options,
                    l = void 0 === a ? {} : a,
                    u = i.name;
                  "function" == typeof o &&
                    (s =
                      o({ state: s, options: l, name: u, instance: d }) || s);
                } else (s.reset = !1), (r = -1);
            }
          }
        },
        update:
          ((i = function () {
            return new Promise(function (e) {
              d.forceUpdate(), e(s);
            });
          }),
          function () {
            return (
              a ||
                (a = new Promise(function (e) {
                  Promise.resolve().then(function () {
                    (a = void 0), e(i());
                  });
                })),
              a
            );
          }),
        destroy: function () {
          u(), (c = !0);
        },
      };
    if (!Eo(e, t)) return d;
    function u() {
      l.forEach(function (e) {
        return e();
      }),
        (l = []);
    }
    return (
      d.setOptions(n).then(function (e) {
        !c && n.onFirstUpdate && n.onFirstUpdate(e);
      }),
      d
    );
  };
}
var Ao = No(),
  Co = No({ defaultModifiers: [Xi, bo, Ji, Ai] }),
  Oo = No({ defaultModifiers: [Xi, bo, Ji, Ai, vo, ho, yo, zi, go] });
const To = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        afterMain: _i,
        afterRead: fi,
        afterWrite: bi,
        applyStyles: Ai,
        arrow: zi,
        auto: ti,
        basePlacements: ni,
        beforeMain: hi,
        beforeRead: ui,
        beforeWrite: gi,
        bottom: Xr,
        clippingParents: oi,
        computeStyles: Ji,
        createPopper: Oo,
        createPopperBase: Ao,
        createPopperLite: Co,
        detectOverflow: fo,
        end: ii,
        eventListeners: Xi,
        flip: ho,
        hide: go,
        left: ei,
        main: mi,
        modifierPhases: yi,
        offset: vo,
        placements: di,
        popper: si,
        popperGenerator: No,
        popperOffsets: bo,
        preventOverflow: yo,
        read: pi,
        reference: li,
        right: Gr,
        start: ri,
        top: Zr,
        variationPlacements: ci,
        viewport: ai,
        write: vi,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  So = "dropdown",
  Mo = ".bs.dropdown",
  Do = ".data-api",
  Po = "ArrowUp",
  Lo = "ArrowDown",
  jo = `hide${Mo}`,
  $o = `hidden${Mo}`,
  Wo = `show${Mo}`,
  Io = `shown${Mo}`,
  Ho = `click${Mo}${Do}`,
  Uo = `keydown${Mo}${Do}`,
  Fo = `keyup${Mo}${Do}`,
  Vo = "show",
  Bo = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  Ro = `${Bo}.${Vo}`,
  qo = ".dropdown-menu",
  zo = In() ? "top-end" : "top-start",
  Yo = In() ? "top-start" : "top-end",
  Ko = In() ? "bottom-end" : "bottom-start",
  Qo = In() ? "bottom-start" : "bottom-end",
  Jo = In() ? "left-start" : "right-start",
  Zo = In() ? "right-start" : "left-start",
  Xo = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  Go = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class ea extends gr {
  constructor(e, t) {
    super(e, t),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        or.next(this._element, qo)[0] ||
        or.prev(this._element, qo)[0] ||
        or.findOne(qo, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return Xo;
  }
  static get DefaultType() {
    return Go;
  }
  static get NAME() {
    return So;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Pn(this._element) || this._isShown()) return;
    const e = { relatedTarget: this._element };
    if (!rr.trigger(this._element, Wo, e).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement &&
          !this._parent.closest(".navbar-nav"))
      )
        for (const e of [].concat(...document.body.children))
          rr.on(e, "mouseover", Ln);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Vo),
        this._element.classList.add(Vo),
        rr.trigger(this._element, Io, e);
    }
  }
  hide() {
    if (Pn(this._element) || !this._isShown()) return;
    const e = { relatedTarget: this._element };
    this._completeHide(e);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    (this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update();
  }
  _completeHide(e) {
    if (!rr.trigger(this._element, jo, e).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const e of [].concat(...document.body.children))
          rr.off(e, "mouseover", Ln);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(Vo),
        this._element.classList.remove(Vo),
        this._element.setAttribute("aria-expanded", "false"),
        lr.removeDataAttribute(this._menu, "popper"),
        rr.trigger(this._element, $o, e);
    }
  }
  _getConfig(e) {
    if (
      "object" == typeof (e = super._getConfig(e)).reference &&
      !Sn(e.reference) &&
      "function" != typeof e.reference.getBoundingClientRect
    )
      throw new TypeError(
        `${So.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return e;
  }
  _createPopper() {
    if (void 0 === To)
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let e = this._element;
    "parent" === this._config.reference
      ? (e = this._parent)
      : Sn(this._config.reference)
      ? (e = Mn(this._config.reference))
      : "object" == typeof this._config.reference &&
        (e = this._config.reference);
    const t = this._getPopperConfig();
    this._popper = Oo(e, this._menu, t);
  }
  _isShown() {
    return this._menu.classList.contains(Vo);
  }
  _getPlacement() {
    const e = this._parent;
    if (e.classList.contains("dropend")) return Jo;
    if (e.classList.contains("dropstart")) return Zo;
    if (e.classList.contains("dropup-center")) return "top";
    if (e.classList.contains("dropdown-center")) return "bottom";
    const t =
      "end" ===
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
    return e.classList.contains("dropup") ? (t ? Yo : zo) : t ? Qo : Ko;
  }
  _detectNavbar() {
    return null !== this._element.closest(".navbar");
  }
  _getOffset() {
    const { offset: e } = this._config;
    return "string" == typeof e
      ? e.split(",").map((e) => Number.parseInt(e, 10))
      : "function" == typeof e
      ? (t) => e(t, this._element)
      : e;
  }
  _getPopperConfig() {
    const e = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      (this._inNavbar || "static" === this._config.display) &&
        (lr.setDataAttribute(this._menu, "popper", "static"),
        (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      }
    );
  }
  _selectMenuItem({ key: e, target: t }) {
    const n = or
      .find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      )
      .filter((e) => Dn(e));
    n.length &&
      ((e, t, n, r) => {
        const i = e.length;
        let o = e.indexOf(t);
        return -1 === o
          ? !n && r
            ? e[i - 1]
            : e[0]
          : ((o += n ? 1 : -1),
            r && (o = (o + i) % i),
            e[Math.max(0, Math.min(o, i - 1))]);
      })(n, t, e === Lo, !n.includes(t)).focus();
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const t = ea.getOrCreateInstance(this, e);
      if ("string" == typeof e) {
        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
        t[e]();
      }
    });
  }
  static clearMenus(e) {
    if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)) return;
    const t = or.find(Ro);
    for (const n of t) {
      const t = ea.getInstance(n);
      if (!t || !1 === t._config.autoClose) continue;
      const r = e.composedPath(),
        i = r.includes(t._menu);
      if (
        r.includes(t._element) ||
        ("inside" === t._config.autoClose && !i) ||
        ("outside" === t._config.autoClose && i)
      )
        continue;
      if (
        t._menu.contains(e.target) &&
        (("keyup" === e.type && "Tab" === e.key) ||
          /input|select|option|textarea|form/i.test(e.target.tagName))
      )
        continue;
      const o = { relatedTarget: t._element };
      "click" === e.type && (o.clickEvent = e), t._completeHide(o);
    }
  }
  static dataApiKeydownHandler(e) {
    const t = /input|textarea/i.test(e.target.tagName),
      n = "Escape" === e.key,
      r = [Po, Lo].includes(e.key);
    if (!r && !n) return;
    if (t && !n) return;
    e.preventDefault();
    const i = this.matches(Bo)
        ? this
        : or.prev(this, Bo)[0] ||
          or.next(this, Bo)[0] ||
          or.findOne(Bo, e.delegateTarget.parentNode),
      o = ea.getOrCreateInstance(i);
    if (r) return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
    o._isShown() && (e.stopPropagation(), o.hide(), i.focus());
  }
}
function ta({ service: e, isDisabled: t, clipSlug: n, setError: r }) {
  const [i, o] = ke(),
    [a, s] = ke(),
    [l, c] = ke(),
    d = Ae(),
    u = Oe(
      async (t) => {
        t.preventDefault(),
          n &&
            !i &&
            (Ge(`/clip/${n}`),
            s(!0),
            e
              .getLinksByClip({ clipSlug: n })
              .then((e) => c(e))
              .catch((e) => !(e += "").startsWith("AbortError:") && r(e))
              .finally(() => s(!1)));
      },
      [n, i]
    ),
    p = Oe(
      (e) => {
        e.preventDefault();
        const {
          target: { href: t },
        } = e;
        if (!t)
          return r("Unexpected error while accessing clip download links.");
        const i = document.createElement("a");
        i.setAttribute("rel", "nofollow noopener noreferrer"),
          i.setAttribute("target", "_blank"),
          i.setAttribute("href", t),
          i.setAttribute("download", `twitch-clip-${n.split("-")[0]}.mp4`),
          i.click();
      },
      [n]
    );
  return (
    Qr(() => {
      if (!d.current) return;
      const e = () => o(!0),
        t = () => o(!1);
      return (
        d.current.addEventListener("show.bs.dropdown", e),
        d.current.addEventListener("hide.bs.dropdown", t),
        (d.current._bootstrap = new ea(d.current)),
        () => {
          d.current &&
            (d.current.removeEventListener("show.bs.dropdown", e),
            d.current.removeEventListener("hide.bs.dropdown", t));
        }
      );
    }),
    Ee(
      () =>
        setTimeout(
          () => (null == l ? void 0 : l.length) && d.current._bootstrap.show()
        ),
      [l]
    ),
    dt("div", {
      className: "btn-group w-100",
      children: [
        dt("button", {
          ref: d,
          type: "button",
          className:
            "btn btn-primary dropdown-toggle rounded text-nowrap w-100 position-relative",
          title: "Export clip",
          disabled: t || a,
          "data-bs-toggle": "dropdown",
          onClick: u,
          children: [
            new Date() < new Date("2023-01-01") &&
              dt("strong", {
                class:
                  "badge rounded-pill text-bg-secondary text-uppercase position-absolute top-0 start-100 translate-middle",
                children: "New",
              }),
            a
              ? dt("span", {
                  className: "spinner-border spinner-border-sm me-2",
                })
              : dt(Jr, { className: "bootstrap-svg-icon me-2" }),
            "Export clip",
          ],
        }),
        dt("ul", {
          className: fn("dropdown-menu dropdown-menu-end rounded", {
            "d-none": !(null == l ? void 0 : l.length),
          }),
          children: [
            !!(null == l ? void 0 : l.length) &&
              (null == l
                ? void 0
                : l.map(({ title: e, link: t }) =>
                    dt("li", {
                      children: dt("a", {
                        rel: "nofollow noopener noreferrer",
                        target: "_blank",
                        className: "dropdown-item",
                        href: t,
                        title: e,
                        onClick: p,
                        children: e,
                      }),
                    })
                  )),
            dt("li", {
              children: dt("div", { className: "dropdown-divider" }),
            }),
            dt("li", {
              children: dt("p", {
                class: "text-muted text-nowrap small px-2 mb-0",
                children: "Right click > Save as",
              }),
            }),
          ],
        }),
      ],
    })
  );
}
rr.on(document, Uo, Bo, ea.dataApiKeydownHandler),
  rr.on(document, Uo, qo, ea.dataApiKeydownHandler),
  rr.on(document, Ho, ea.clearMenus),
  rr.on(document, Fo, ea.clearMenus),
  rr.on(document, Ho, Bo, function (e) {
    e.preventDefault(), ea.getOrCreateInstance(this).toggle();
  }),
  Hn(ea);
class na {
  constructor({
    video: { id: e, title: t, link: n, duration: i },
    user: { id: o, name: a },
    isClip: s,
  }) {
    x(this, "id"),
      x(this, "title"),
      x(this, "link"),
      x(this, "duration"),
      x(this, "user"),
      x(this, "isClip"),
      N(this, r, []),
      (this.id = e),
      (this.title = t),
      (this.link = n),
      (this.duration = i),
      (this.user = { id: o, name: a }),
      (this.isClip = s);
  }
  get messages() {
    return E(this, r);
  }
  addMessages(e) {
    A(this, r, E(this, r).concat(e));
  }
}
r = new WeakMap();
class ra {
  constructor({
    message: { id: e, fragments: t, date: n, offset: r },
    user: { id: i, name: o, badges: a, color: s },
  }) {
    x(this, "id"),
      x(this, "fragments"),
      x(this, "date"),
      x(this, "offset"),
      x(this, "user"),
      (this.id = e),
      (this.fragments = t),
      (this.date = n),
      (this.offset = r),
      (this.user = { id: i, name: o, color: s, badges: a });
  }
  getTimeOffsetTimestamp({ type: e }, t) {
    if (e === wn.Text) return this.offset;
    throw new Error(`Unsupported return type! [type=${e}]`);
  }
  getFormattedTimeOffset({ type: e }, t) {
    switch (e) {
      case wn.Text:
        return gn(1e3 * this.offset);
      case wn.Jsx:
        return dt("time", {
          dateTime: gn(1e3 * this.offset, !0),
          children: this.getFormattedTimeOffset({ type: wn.Text }),
        });
      default:
        throw new Error(`Unsupported return type! [type=${e}]`);
    }
  }
  getFormattedUserBadges({ type: e }, t) {
    var n;
    if (e === wn.Jsx)
      return (null == (n = this.user.badges) ? void 0 : n.length)
        ? this.user.badges.map(({ title: e, image: t }, n) =>
            dt(R, {
              children: [
                n ? " " : null,
                dt("img", {
                  className: "chat-badge rounded",
                  referrerpolicy: "no-referrer",
                  src: t,
                  alt: e,
                  title: e,
                }),
              ],
            })
          )
        : null;
    throw new Error(`Unsupported return type! [type=${e}]`);
  }
  getFormattedUserName({ type: e }, t) {
    if (e === wn.Text) return this.user.name;
    throw new Error(`Unsupported return type! [type=${e}]`);
  }
  getFormattedUserColor({ type: e }, t) {
    if (e === wn.Text) return this.user.color;
    throw new Error(`Unsupported return type! [type=${e}]`);
  }
  getFormattedMessage({ type: e }, t) {
    switch (e) {
      case wn.Text:
        return this.fragments.map(({ text: e }) => e).join("");
      case wn.Jsx:
        return this.fragments.map(({ text: e, emote: t }) =>
          t
            ? dt("img", {
                className: "chat-emote rounded",
                referrerpolicy: "no-referrer",
                src: t.image,
                alt: t.title,
                title: t.title,
              })
            : dt(R, { children: e })
        );
      default:
        throw new Error(`Unsupported return type! [type=${e}]`);
    }
  }
}
const ia = "https://www.twitch.tv/videos/{{ video_id }}",
  oa = "https://www.twitch.tv/{{ channel_name }}/clip/{{ clip_slug }}",
  aa = {
    credentials: "omit",
    headers: {
      accept: "application/vnd.twitchtv.v5+json",
      "client-id": "kd1unb4b3q4t58fwlpcbzcbnm76a8fp",
    },
    referrer: "https://www.twitch.tv/",
    referrerPolicy: "no-referrer",
    mode: "cors",
  };
var sa = ((e) => (
  (e.VideoPlayerStreamInfoOverlayVOD =
    "682ddbe13e290d601bc500b961da5ea24c5d6193c9cef70bae1d9b520dca24b0"),
  (e.VideoPlayer_VODSeekbar =
    "c67d32eba8f1c93b02e7efa6a278be46009e390ed5195c02dd0621e4c7ca14ac"),
  (e.VideoPlayerStreamInfoOverlayClip =
    "d026f1fc6ec6862869684a9768c20e3f6d51f6fd520a2a351dc274356e9c6eb0"),
  (e.ChatClip =
    "9aa558e066a22227c5ef2c0a8fded3aaa57d35181ad15f63df25bff516253a90"),
  (e.VideoComments =
    "f3b546321ec4632bcb83ee6a6dba91dad754fca3fd147ae26d9a7a0a096cfc60"),
  (e.VideoCommentsByOffsetOrCursor =
    "b70a3591ff0f4e0313d126c6a1502d79a1c02baebb288227c582044aa76adf6a"),
  (e.PlaybackAccessToken =
    "0828119ded1c13477966434e15800ff57ddacf13ba1911c129dc2200705b0712"),
  (e.VideoAccessToken_Clip =
    "36b89d2507fce29e5ca551df756d27c1cfe079e2609642b4390aa4c35796eb11"),
  e
))(sa || {});
class la extends Error {}
(i = new WeakMap()),
  (o = new WeakMap()),
  (a = new WeakMap()),
  (s = new WeakSet()),
  (l = function (e) {
    return C(this, b, y).call(this, [
      {
        operationName: this.SupportedOperations[4],
        variables: { videoID: e, hasVideoID: !0 },
      },
    ]);
  }),
  (c = new WeakSet()),
  (d = function (e, t = 0) {
    return C(this, b, y).call(this, [
      {
        operationName: this.SupportedOperations[5],
        variables: { videoID: e, contentOffsetSeconds: t },
      },
    ]);
  }),
  (u = new WeakSet()),
  (p = function (e, t) {
    return C(this, b, y).call(this, [
      {
        operationName: this.SupportedOperations[5],
        variables: { videoID: e, cursor: t },
      },
    ]);
  }),
  (f = new WeakSet()),
  (h = function (e) {
    return C(this, b, y).call(this, [
      { operationName: this.SupportedOperations[7], variables: { slug: e } },
    ]);
  }),
  (m = new WeakSet()),
  (_ = function (e) {
    const {
      comments: {
        edges: [{ cursor: t }],
      },
    } = e;
    return t;
  }),
  (g = new WeakSet()),
  (v = function (e, t, n = "json") {
    const r = { ...aa, signal: E(this, a).signal, ...t };
    return fetch(e, r).then((e) => {
      if (200 !== e.status)
        throw new la(
          `Wrong response status code! [response.status=${e.status}]`
        );
      return e[n]();
    });
  }),
  (b = new WeakSet()),
  (y = function (e) {
    const t = e
      .map(({ operationName: e, variables: t }) =>
        [e, ...Object.values(t)].join("/")
      )
      .join("|");
    return (
      this.verbose && console.info("Fething GQL:", t),
      E(this, i).has(t)
        ? Promise.resolve(E(this, i).get(t))
        : new Promise((n, r) => {
            const o = e.map((e) => ({
              ...e,
              ...(e.query
                ? {}
                : {
                    extensions: {
                      persistedQuery: {
                        version: 1,
                        sha256Hash: sa[e.operationName],
                      },
                    },
                  }),
            }));
            C(this, g, v)
              .call(this, "https://gql.twitch.tv/gql", {
                method: "POST",
                body: JSON.stringify(o),
              })
              .then((e) => {
                const r = e.map(({ data: e }) =>
                  JSON.parse(
                    JSON.stringify(e, (e, t) =>
                      e.startsWith("__") ? void 0 : t
                    )
                  )
                );
                E(this, i).set(t, r), n(r);
              })
              .catch((e) => r(e));
          })
    );
  });
const ca = new (class {
    constructor(e) {
      N(this, s),
        N(this, c),
        N(this, u),
        N(this, f),
        N(this, m),
        N(this, g),
        N(this, b),
        x(this, "verbose", !1),
        N(this, i, new Map()),
        N(this, o, Object.keys(sa)),
        N(this, a, new AbortController()),
        Object.assign(this, e),
        this.verbose && console.info(`[${this.constructor.name}]`, this);
    }
    get SupportedOperations() {
      return E(this, o);
    }
    abort() {
      E(this, a).abort(), A(this, a, new AbortController());
    }
    async getChatByVideo(
      { videoId: e },
      { clip: t, onGetMeta: n, onProgress: r } = {}
    ) {
      const [i, o] = await this.getVideoMeta(e),
        a = {
          id: bn(i.video.owner.id),
          name: yn(i.video.owner.login, i.video.owner.displayName),
        },
        f = void 0 !== t;
      !f && n && n({ user: a, isClip: f });
      const h = new na({
          user: a,
          video: f
            ? t
            : {
                id: bn(i.video.id),
                title: i.video.title,
                link: ia.replace("{{ video_id }}", i.video.id),
                duration: o.video.lengthSeconds,
              },
          isClip: f,
        }),
        [g] = await C(this, s, l).call(this, i.video.id),
        v = new Map(
          g.badges.map(({ id: e, title: t, image1x: n }) => [
            e,
            { title: _n(t), image: n },
          ])
        );
      g.video.owner.broadcastBadges.forEach(({ id: e, title: t, image2x: n }) =>
        v.set(e, { title: t, image: n })
      );
      const b = "#tcd:init#";
      let y = b;
      for (; y; ) {
        const [e] = await (y === b
          ? C(this, c, d).call(this, i.video.id, f ? t.offset : 0)
          : C(this, u, p).call(this, i.video.id, y));
        y = C(this, m, _).call(this, e.video);
        const n = e.video.comments.edges
          .filter(({ node: e }) => null !== e.commenter)
          .map(
            ({ node: e }) =>
              new ra({
                user: {
                  id: bn(e.commenter.id),
                  name: yn(e.commenter.login, e.commenter.displayName),
                  color: e.message.userColor,
                  badges: e.message.userBadges
                    .map(({ id: e }) => v.get(e))
                    .filter(Boolean),
                },
                message: {
                  id: e.id,
                  fragments: e.message.fragments.map(
                    ({ text: e, emote: t }) => ({
                      text: e,
                      emote: t
                        ? {
                            title: _n(e),
                            image:
                              "https://static-cdn.jtvnw.net/emoticons/v2/{{ emote_id }}/default/light/1.0".replace(
                                "{{ emote_id }}",
                                t.emoteID
                              ),
                          }
                        : null,
                    })
                  ),
                  date: new Date(e.createdAt),
                  offset: e.contentOffsetSeconds - (f ? t.offset : 0),
                },
              })
          );
        if (!f) {
          h.addMessages(n),
            r &&
              r({
                ratio: e.video.comments.pageInfo.hasNextPage
                  ? +(n[n.length - 1].offset / h.duration).toFixed(4)
                  : 1,
              });
          continue;
        }
        h.addMessages(n.filter(({ offset: e }) => e >= 0 && e < t.duration));
        const o = n[n.length - 1].offset > t.duration;
        r &&
          r({
            ratio: o ? 1 : +(n[n.length - 1].offset / t.duration).toFixed(4),
          }),
          o && (y = "");
      }
      return h;
    }
    async getChatByClip({ slug: e }, t = {}) {
      const [n, r] = await this.getClipMeta(e),
        i = {
          id: bn(n.clip.broadcaster.id),
          name: yn(n.clip.broadcaster.login, n.clip.broadcaster.displayName),
        };
      return (
        t.onGetMeta && t.onGetMeta({ user: i, isClip: !0 }),
        await this.getChatByVideo(
          { videoId: r.clip.video.id },
          {
            clip: {
              id: bn(n.clip.id),
              title: n.clip.title,
              link: oa
                .replace("{{ channel_name }}", n.clip.broadcaster.login)
                .replace("{{ clip_slug }}", n.clip.slug),
              duration: r.clip.durationSeconds,
              offset: r.clip.videoOffsetSeconds,
            },
            ...t,
          }
        )
      );
    }
    async getLinksByClip({ clipSlug: e }) {
      const [t] = await C(this, f, h).call(this, e);
      return t.clip.videoQualities.map(
        ({ frameRate: e, quality: n, sourceURL: r }) => ({
          title: `${n}p${30 !== e ? e : ""}`,
          link: `${r}?token=${encodeURIComponent(
            t.clip.playbackAccessToken.value
          )}&sig=${encodeURIComponent(t.clip.playbackAccessToken.signature)}`,
        })
      );
    }
    async getVideoMeta(e) {
      const t = await C(this, b, y).call(this, [
        {
          operationName: this.SupportedOperations[0],
          variables: { videoID: e, includePrivate: !1 },
        },
        {
          operationName: this.SupportedOperations[1],
          variables: { vodID: e, includePrivate: !1 },
        },
      ]);
      if (!t[0].video || !t[0].video.owner || !t[1].video)
        throw new la("This video has expired and is no longer available.");
      return t;
    }
    async getClipMeta(e) {
      const t = await C(this, b, y).call(this, [
        { operationName: this.SupportedOperations[2], variables: { slug: e } },
        {
          operationName: this.SupportedOperations[3],
          variables: { clipSlug: e },
        },
      ]);
      if (!(t[0].clip && t[0].clip.broadcaster && t[1] && t[1].clip.video))
        throw new la(
          "This clip's past broadcast has expired and chat replay is no longer available."
        );
      return t;
    }
  })({ verbose: !1 }),
  da = () => ca,
  ua = "Twitch Chat Downloader",
  pa = 2022;
function fa(e) {
  return dt("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ...e,
    children: [
      dt("path", {
        d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z",
      }),
      dt("path", {
        d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z",
      }),
    ],
  });
}
const ha = { percent: 0, elapsed: 0, remaining: 0 },
  ma =
    "^" +
    ia.replace(".", "\\.").replace("{{ video_id }}", "\\d+") +
    "([#?].+)?$",
  _a =
    "^" +
    oa
      .replace(".", "\\.")
      .replace("{{ channel_name }}", "[^/]+")
      .replace("{{ clip_slug }}", "[^/]+") +
    "([#?].+)?$",
  ga =
    "^" +
    "https://clips.twitch.tv/{{ clip_slug }}"
      .replace(".", "\\.")
      .replace("{{ clip_slug }}", "[^/]+") +
    "([#?].+)?$",
  va = new RegExp(_a + "|" + ga),
  ba = ma + "|" + _a + "|" + ga;
function ya() {
  const [e, t] = Ze(),
    [n, r] = ke(),
    [i, o] = ke(),
    [a, s] = ke(),
    [l, c] = ke(),
    [d, u] = ke(),
    [p, f] = ke(),
    [h, m] = ke(ha),
    [_, g] = ke(),
    v = En(),
    b = da(),
    [y] = un(),
    [w] = un(),
    x = hn((e) => {
      e.preventDefault();
      const {
        target: { value: t },
      } = e;
      r(t);
    });
  Ee(() => {
    const e = va.test(n + "");
    if (!e && !(n + "").startsWith(ia.replace("{{ video_id }}", "")))
      return c(void 0), o(void 0), void s(void 0);
    s(e);
    const { pathname: t } = new URL(n),
      r = t.split("/");
    if (!e) {
      const e = +r.pop(),
        t = !isNaN(e);
      return c(t ? { videoId: e } : void 0), void o(t);
    }
    const i = r.pop(),
      a = !!(null == i ? void 0 : i.length);
    c(a ? { clipSlug: i } : void 0), o(a);
  }, [n]);
  const k = Oe(
      (e) => {
        if ((null == e || e.preventDefault(), !n))
          return g("Please fill in video or clip link.");
        if (!i) return g("Please fill in valid video or clip link.");
        if (!l) return g("Unexpected error while parsing video or clip link.");
        t(a ? `/clip/${l.clipSlug}` : `/video/${l.videoId}`),
          g(void 0),
          u(void 0),
          m({ ...ha }),
          f(!0);
        const r = Date.now(),
          o = {
            onGetMeta({ user: e, isClip: t }) {
              fetch("/api/stats", {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ user: e, clip: t }),
              }),
                v.trackEvent("channel", "fetch", e.name);
            },
            onProgress({ ratio: e }) {
              const t = Math.ceil(100 * e),
                n = (Date.now() - r) / 1e3,
                i = Math.ceil(n / e - n);
              m({ percent: t, elapsed: n, remaining: i }),
                (document.title = `[ ${t} % ] ${ua}`);
            },
          };
        (document.title = `[ 0 % ] ${ua}`),
          b[a ? "getChatByClip" : "getChatByVideo"](
            a ? { slug: l.clipSlug + "" } : { videoId: l.videoId + "" },
            o
          )
            .then((e) => u(e))
            .catch((e) => !(e += "").startsWith("AbortError:") && g(e))
            .finally(() => f(!1));
      },
      [l]
    ),
    E = Oe(
      (e) => {
        if ((e.preventDefault(), !(null == d ? void 0 : d.messages.length)))
          return g("Unexpected error while accessing video messages.");
        const t = [
            "time,user_name,user_color,message",
            ...(null == d
              ? void 0
              : d.messages.map((e) =>
                  [
                    e.getTimeOffsetTimestamp({ type: wn.Text }),
                    e.getFormattedUserName({ type: wn.Text }),
                    e.getFormattedUserColor({ type: wn.Text }),
                    `"${e.getFormattedMessage({ type: wn.Text })}"`,
                  ].join(",")
                )),
          ].join("\n"),
          n = document.createElement("a");
        n.setAttribute("rel", "nofollow noopener noreferrer"),
          n.setAttribute(
            "href",
            URL.createObjectURL(new Blob([t], { type: "text/csv" }))
          ),
          n.setAttribute(
            "download",
            `twitch-chat-${l.videoId || l.clipSlug.split("-")[0]}.csv`
          ),
          n.click(),
          setTimeout(
            () => URL.revokeObjectURL(n.getAttribute("href") + ""),
            1e3
          ),
          v.trackEvent("channel", "export", d.user.name);
      },
      [d]
    ),
    N = hn((e) => {
      e.preventDefault(),
        window.open("/support-us", "_blank", "noopener,noreferrer");
    });
  return (
    Ee(() => {
      var t, n;
      (document.title = ua),
        (null == (t = e.matches) ? void 0 : t.videoId)
          ? b
              .getVideoMeta(e.matches.videoId)
              .then(([e]) => r(ia.replace("{{ video_id }}", e.video.id)))
              .catch((e) => !(e += "").startsWith("AbortError:") && g(e))
          : (null == (n = e.matches) ? void 0 : n.clipSlug)
          ? b
              .getClipMeta(e.matches.clipSlug)
              .then(([e]) =>
                r(
                  oa
                    .replace("{{ channel_name }}", e.clip.broadcaster.login)
                    .replace("{{ clip_slug }}", e.clip.slug)
                )
              )
              .catch((e) => !(e += "").startsWith("AbortError:") && g(e))
          : (console.info("Aborting fetch requests..."),
            b.abort(),
            r(""),
            g(void 0),
            u(void 0),
            m({ ...ha }),
            f(!1));
    }, [e.matches]),
    dt("div", {
      className: "container form-container",
      children: [
        new Date() <= new Date("2022-12-15") &&
          dt(R, {
            children: [
              dt("div", {
                className: "alert alert-warning rounded mb-3",
                children: dt("p", {
                  className: "m-0 text-striketrough",
                  children: dt("del", {
                    children: [
                      "Twitch.tv has taken down Kraken API for downloading chats on ",
                      dt("time", {
                        dateTime: "2022-12-08",
                        children: "2022-12-08",
                      }),
                      ". This service won't work until new version is released. Stay tuned!",
                    ],
                  }),
                }),
              }),
              dt("div", {
                class: "alert alert-success rounded mb-3",
                children: dt("p", {
                  class: "m-0",
                  children: "We are back online!",
                }),
              }),
            ],
          }),
        dt("div", {
          className: "p-4 bg-light text-dark rounded",
          children: dt("form", {
            autocomplete: "off",
            onSubmit: k,
            children: [
              dt("div", {
                className: "mb-3",
                children: [
                  dt("label", {
                    for: "video-url",
                    className: "form-label",
                    children: "Paste your Twitch video or clip link here:",
                  }),
                  dt("input", {
                    type: "url",
                    id: "video-url",
                    className: "form-control rounded",
                    placeholder: ia.replace("{{ video_id }}", "XXXXXXXX"),
                    pattern: ba,
                    value: n,
                    onInput: x,
                    autoFocus: !0,
                  }),
                ],
              }),
              dt("div", {
                className: "row align-items-center g-2",
                children: [
                  dt("div", {
                    className: "col-sm-auto",
                    children: dt("button", {
                      type: "submit",
                      className: "btn btn-primary text-nowrap w-100 rounded",
                      disabled: p,
                      title: "Download chat",
                      children: [
                        p
                          ? dt("span", {
                              className:
                                "spinner-border spinner-border-sm me-2",
                            })
                          : dt(fa, { className: "bootstrap-svg-icon me-2" }),
                        "Download chat",
                      ],
                    }),
                  }),
                  dt("div", {
                    ref: y,
                    "data-autoanimate": !0,
                    className: fn("col", {
                      "p-0": (!p && !h.percent) || !h.percent,
                    }),
                    children: [
                      !!p &&
                        !h.percent &&
                        dt("small", {
                          className: "d-block text-center",
                          children: [
                            "Fetching ",
                            a ? "clip" : "video",
                            " metadata...",
                          ],
                        }),
                      !!h.percent &&
                        dt(R, {
                          children: [
                            dt("small", {
                              className: "d-block text-center mb-1",
                              children: [
                                !1,
                                "Progress: ",
                                h.percent,
                                " % | Remaining: ",
                                h.remaining,
                                " sec",
                              ],
                            }),
                            dt("div", {
                              className: "progress rounded w-100",
                              children: dt("div", {
                                className: fn(
                                  "progress-bar progress-bar-striped",
                                  { "progress-bar-animated": p },
                                  "rounded"
                                ),
                                style: { width: h.percent + "%" },
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              dt("div", {
                ref: w,
                "data-autoanimate": !0,
                children:
                  !!_ &&
                  dt("div", {
                    className: "alert alert-danger rounded mt-3",
                    children: dt("p", { className: "m-0", children: _ }),
                  }),
              }),
              dt("hr", {}),
              dt("div", {
                className: "row g-2 justify-content-between",
                children: [
                  dt("div", {
                    className: "col-sm-auto",
                    children: dt(Kr, {
                      username: null == d ? void 0 : d.user.name,
                      title: null == d ? void 0 : d.title,
                      link: null == d ? void 0 : d.link,
                      messages: null == d ? void 0 : d.messages,
                      isClip: null == d ? void 0 : d.isClip,
                      onExportClick: E,
                      onSupportUsClick: N,
                    }),
                  }),
                  dt("div", {
                    className: "col-sm-auto",
                    children: dt("button", {
                      type: "button",
                      className: "btn btn-primary text-nowrap rounded w-100",
                      disabled: !(null == d ? void 0 : d.messages.length),
                      title: "Export chat",
                      onClick: E,
                      children: [
                        dt(An, { className: "bootstrap-svg-icon me-2" }),
                        "Export chat",
                      ],
                    }),
                  }),
                  !1,
                  dt("div", {
                    className: "col-sm-auto",
                    children: dt(ta, {
                      service: b,
                      isDisabled: !a,
                      clipSlug: null == l ? void 0 : l.clipSlug,
                      setError: g,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const wa = [
  [
    `What is ${ua}?`,
    `${ua} is one of the most easiest and most reliable tools to download Twitch chats and clips. It's completely free and you don't need to install any software or use your Twitch account to use ${ua}.`,
  ],
  [`Is ${ua} free?`, "Yes of course, it is 100% free to use."],
  [
    `Is any software install required to use ${ua}?`,
    `No, ${ua} works completely online in your browser.`,
  ],
  [
    `Is Twitch account required to use ${ua}?`,
    `No, ${ua} works without Twitch account.`,
  ],
  [
    "How do I download chat for Twitch video or clip?",
    'Simply, paste link of Twitch video or clip in box and click <code>"Download chat"</code> button.',
  ],
  [
    "How do I find my Twitch videos?",
    "You can find your videos at <code>https://twitch.tv/&lt;username&gt;/videos</code>.",
  ],
  [
    "How do I find my Twitch clips?",
    "You can find your videos at <code>https://twitch.tv/&lt;username&gt;/clips</code>.",
  ],
  [
    "Can I export downloaded chat?",
    'Yes, definitely! Simply click on <code>"Export chat"</code> button after downloading it.',
  ],
  [
    "In what format is chat exported?",
    "Chat is exported as <code>.csv</code> file.",
  ],
  [
    "Can I see chat before exporting it?",
    'Yes, definitely! Simply click on <code>"Open chat"</code> button to open built-in chat viewer.',
  ],
  [
    "Are emotes supported in built-in chat viewer?",
    "Yes, but only Twitch emotes are supported as of today.",
  ],
  [
    "How do I download Twitch clip?",
    'Simply, paste link of Twitch clip in box and click <code>"Export clip"</code> button.',
  ],
  [
    "In what format is clip exported?",
    "Clip is exported as <code>.mp4</code> file.",
  ],
  [
    "In what resolution is clip exported?",
    "Clip can be exported with same resolutions as you can see on Twitch website.",
  ],
  [
    "Why is Twitch clip opened in new tab after export?",
    "It depends on your browser settings. You can simply copy link from address bar of your browser or open context menu by right clicking on opened clip and save it from there.",
  ],
  [
    "Are there any limits to number of chats or clips I can download?",
    "We do not limit you at all.",
  ],
  [
    "Can I support this website?",
    `Yes, please click on <code>"Support this project"</code> button in footer and you will be redirected to PayPal page. By supporting us, you are helping to pay for operation costs associated with running ${ua} website.`,
  ],
];
function xa() {
  return (
    (document.title = `Frequently Asked Questions | ${ua}`),
    dt(R, {
      children: dt("div", {
        className: "container faq-container",
        children: [
          dt("hr", { className: "mt-4 mb-5" }),
          dt("h2", {
            className: "fs-5 text-center mx-auto mb-4",
            children: "Frequently Asked Questions",
          }),
          wa.map(([e, t]) =>
            dt("div", {
              className: "bg-light text-dark rounded p-4 mb-4",
              children: dt("p", {
                className: "small mb-0",
                children: [
                  dt("strong", { className: "d-block mb-2", children: e }),
                  dt("span", {
                    className: "d-block",
                    dangerouslySetInnerHTML: { __html: t },
                  }),
                ],
              }),
            })
          ),
        ],
      }),
    })
  );
}
const ka = [
  { date: "2022-07-23", text: "Initial release." },
  { date: "2022-09-14", text: "Fixed rare issue with conflicting badge sets." },
  {
    date: "2022-10-25",
    text: "Fixed rare issue with incorrect emote position in message.",
  },
  { date: "2022-11-20", text: "Added permalink feature." },
  {
    date: "2022-12-08",
    text: "Migrated from Twitch Kraken API to Twitch GQL API.",
  },
  { date: "2022-12-10", text: "Added FAQ page." },
  { date: "2022-12-10", text: "Added Changelog page." },
  { date: "2022-12-10", text: "Added download chat from Twitch clip feature." },
  { date: "2022-12-10", text: "Added download Twitch clip feature." },
  { date: "2022-12-12", text: "Added user color to chat export." },
  {
    date: "2022-12-12",
    text: "Added user name autocomplete feature to search box in built-in chat viewer.",
  },
  {
    date: "2022-12-18",
    text: "Added open video at current time feature next to time in built-in chat viewer.",
  },
  {
    date: "2023-05-05",
    text: "Added temporary solution for broken Twitch API.",
  },
  { date: "2023-05-17", text: "Fixed rare issue with incorrect badge." },
].reverse();
function Ea() {
  return (
    (document.title = `Changelog | ${ua}`),
    dt("div", {
      className: "container changelog-container",
      children: [
        dt("hr", { className: "mt-4 mb-5" }),
        dt("h2", {
          className: "fs-5 text-center mx-auto mb-4",
          children: "Changelog",
        }),
        dt("div", {
          className: "bg-light text-dark rounded p-4",
          children: dt("table", {
            className: "table small m-0",
            children: [
              dt("thead", {
                children: dt("tr", {
                  children: [
                    dt("th", { className: "text-end", children: "Date" }),
                    dt("th", { children: "Message" }),
                  ],
                }),
              }),
              dt("tbody", {
                children: ka.map(({ date: e, text: t }) =>
                  dt("tr", {
                    children: [
                      dt("td", {
                        className: "text-nowrap text-end",
                        children: dt("time", {
                          dateTime: e,
                          children: new Date(e).toLocaleDateString(),
                        }),
                      }),
                      dt("td", { children: t }),
                    ],
                  })
                ),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function Na(e) {
  return dt("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    ...e,
    children: dt("path", {
      "fill-rule": "evenodd",
      d: "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z",
    }),
  });
}
function Aa() {
  const { domain: e } = document,
    t = new Date().getFullYear();
  return dt("footer", {
    className: "footer py-2",
    children: dt("div", {
      className: "container text-center",
      children: [
        dt("ul", {
          className: "list-piped text-muted small p-0 m-0",
          children: [
            dt("li", {
              className: "d-block d-lg-inline-block",
              children: [
                "Last update: ",
                dt("time", {
                  dateTime: "2023-05-17T18:33:33.262Z".split("T")[0],
                  children: new Date(
                    "2023-05-17T18:33:33.262Z"
                  ).toLocaleDateString(),
                }),
              ],
            }),
            dt("li", {
              className: "d-block d-lg-inline-block",
              children: dt("a", {
                rel: "noopener",
                target: "_blank",
                href: "/support-us",
                title: "Support this project",
                "data-native": !0,
                children: "Support this project",
              }),
            }),
          ],
        }),
        dt("ul", {
          className: "list-piped text-muted small m-0",
          children: [
            dt("li", {
              className: "d-block d-lg-inline-block",
              children: [
                "Copyright Â© ",
                dt("time", { dateTime: pa + "", children: pa }),
                " - ",
                dt("time", { dateTime: t + "", children: t }),
                " ",
                dt("a", {
                  rel: "noopener",
                  target: "_blank",
                  href: `https://${e}/`,
                  title: e,
                  "data-native": !0,
                  children: e,
                }),
              ],
            }),
            dt("li", {
              className: "d-block d-lg-inline-block",
              children: "All rights reserved",
            }),
            dt("li", {
              className: "d-block d-lg-inline-block",
              children: [
                "Made with ",
                dt(Na, { className: "bootstrap-svg-icon text-danger" }),
                " by",
                " ",
                dt("a", {
                  rel: "noopener",
                  target: "_blank",
                  href: "https://www.findl.sk/",
                  title: "Oliver Findl",
                  "data-native": !0,
                  children: "Oliver Findl",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Ca = document.getElementById("app");
Ca.setAttribute("app-build-version", "1.0.0"),
  Ca.setAttribute("app-build-date", "2023-05-17T18:33:33.262Z"),
  (function (e, t, n) {
    var r, i, o;
    T.__ && T.__(e, t),
      (i = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
      (o = []),
      oe(
        t,
        (e = ((!r && n) || t).__k = V(R, null, [e])),
        i || $,
        $,
        void 0 !== t.ownerSVGElement,
        !r && n ? [n] : i ? null : t.firstChild ? O.call(t.childNodes) : null,
        o,
        !r && n ? n : i ? i.__e : t.firstChild,
        r
      ),
      ae(o, e);
  })(
    dt(function () {
      const [{ url: e }] = Ze(),
        t = En();
      return (
        Ee(() => {
          t.trackPageView();
        }, [e]),
        Ee(() => {
          t.trackEvent("app", "build_version", "1.0.0"),
            t.trackEvent("app", "build_date", "2023-05-17T18:33:33.262Z");
        }, []),
        dt(R, {
          children: [
            dt(ut, {}),
            dt("main", {
              className: "flex-grow-1",
              children: [
                dt(ot, {
                  children: [
                    dt(st, { path: "/", component: ya }),
                    dt(st, { path: "/video/:videoId", component: ya }),
                    dt(st, { path: "/clip/:clipSlug", component: ya }),
                    dt(st, { path: "/faq", component: xa }),
                    dt(st, { path: "/changelog", component: Ea }),
                    dt(st, { default: !0, component: lt, to: "/" }),
                  ],
                }),
                dt("div", {
                  className: "container bottom-nav-container",
                  children: dt("ul", {
                    className:
                      "list-piped text-center text-muted text-danger small p-0 mx-0 my-2",
                    children: [
                      dt("li", {
                        className: "d-block d-lg-inline-block",
                        children: [
                          "This project is not affiliated with",
                          " ",
                          dt("a", {
                            rel: "nofollow noopener noreferrer",
                            target: "_blank",
                            href: "https://www.twitch.tv/",
                            title: "Twitch.tv",
                            "data-native": !0,
                            children: "Twitch.tv",
                          }),
                          " ",
                          "in any way",
                        ],
                      }),
                      dt("li", {
                        className: "d-block d-lg-inline-block",
                        children: dt(at, {
                          rel: "noopener",
                          href: "/faq",
                          title: "FAQ",
                          children: dt("abbr", {
                            title: "Frequently Asked Questions",
                            children: "FAQ",
                          }),
                        }),
                      }),
                      dt("li", {
                        className: "d-block d-lg-inline-block",
                        children: dt(at, {
                          rel: "noopener",
                          href: "/changelog",
                          title: "Changelog",
                          children: "Changelog",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            dt(Aa, {}),
          ],
        })
      );
    }, {}),
    Ca
  );
