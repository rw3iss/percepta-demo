(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // node_modules/preact/dist/preact.js
  var require_preact = __commonJS((exports) => {
    var n;
    var l;
    var u;
    var t;
    var i;
    var o;
    var r;
    var f = {};
    var e = [];
    var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function s(n2, l2) {
      for (var u2 in l2)
        n2[u2] = l2[u2];
      return n2;
    }
    function a(n2) {
      var l2 = n2.parentNode;
      l2 && l2.removeChild(n2);
    }
    function p(n2, l2, u2) {
      var t2, i2, o2, r2 = arguments, f2 = {};
      for (o2 in l2)
        o2 == "key" ? t2 = l2[o2] : o2 == "ref" ? i2 = l2[o2] : f2[o2] = l2[o2];
      if (arguments.length > 3)
        for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
          u2.push(r2[o2]);
      if (u2 != null && (f2.children = u2), typeof n2 == "function" && n2.defaultProps != null)
        for (o2 in n2.defaultProps)
          f2[o2] === void 0 && (f2[o2] = n2.defaultProps[o2]);
      return v(n2, f2, t2, i2, null);
    }
    function v(l2, u2, t2, i2, o2) {
      var r2 = {type: l2, props: u2, key: t2, ref: i2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++n.__v : o2};
      return n.vnode != null && n.vnode(r2), r2;
    }
    function h7(n2) {
      return n2.children;
    }
    function y(n2, l2) {
      this.props = n2, this.context = l2;
    }
    function d(n2, l2) {
      if (l2 == null)
        return n2.__ ? d(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
      for (var u2; l2 < n2.__k.length; l2++)
        if ((u2 = n2.__k[l2]) != null && u2.__e != null)
          return u2.__e;
      return typeof n2.type == "function" ? d(n2) : null;
    }
    function _(n2) {
      var l2, u2;
      if ((n2 = n2.__) != null && n2.__c != null) {
        for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
          if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
            n2.__e = n2.__c.base = u2.__e;
            break;
          }
        return _(n2);
      }
    }
    function w(l2) {
      (!l2.__d && (l2.__d = true) && u.push(l2) && !k.__r++ || i !== n.debounceRendering) && ((i = n.debounceRendering) || t)(k);
    }
    function k() {
      for (var n2; k.__r = u.length; )
        n2 = u.sort(function(n3, l2) {
          return n3.__v.__b - l2.__v.__b;
        }), u = [], n2.some(function(n3) {
          var l2, u2, t2, i2, o2, r2;
          n3.__d && (o2 = (i2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (t2 = s({}, i2)).__v = i2.__v + 1, N(r2, i2, t2, l2.__n, r2.ownerSVGElement !== void 0, i2.__h != null ? [o2] : null, u2, o2 == null ? d(i2) : o2, i2.__h), T(u2, i2), i2.__e != o2 && _(i2)));
        });
    }
    function x(n2, l2, u2, t2, i2, o2, r2, c2, s2, p2) {
      var y2, _2, w2, k2, x2, b2, A2, P2 = t2 && t2.__k || e, C2 = P2.length;
      for (s2 == f && (s2 = r2 != null ? r2[0] : C2 ? d(t2, 0) : null), u2.__k = [], y2 = 0; y2 < l2.length; y2++)
        if ((k2 = u2.__k[y2] = (k2 = l2[y2]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(h7, {children: k2}, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
          if (k2.__ = u2, k2.__b = u2.__b + 1, (w2 = P2[y2]) === null || w2 && k2.key == w2.key && k2.type === w2.type)
            P2[y2] = void 0;
          else
            for (_2 = 0; _2 < C2; _2++) {
              if ((w2 = P2[_2]) && k2.key == w2.key && k2.type === w2.type) {
                P2[_2] = void 0;
                break;
              }
              w2 = null;
            }
          N(n2, k2, w2 = w2 || f, i2, o2, r2, c2, s2, p2), x2 = k2.__e, (_2 = k2.ref) && w2.ref != _2 && (A2 || (A2 = []), w2.ref && A2.push(w2.ref, null, k2), A2.push(_2, k2.__c || x2, k2)), x2 != null ? (b2 == null && (b2 = x2), typeof k2.type == "function" && k2.__k != null && k2.__k === w2.__k ? k2.__d = s2 = g(k2, s2, n2) : s2 = m(n2, k2, w2, P2, r2, x2, s2), p2 || u2.type !== "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && w2.__e == s2 && s2.parentNode != n2 && (s2 = d(w2));
        }
      if (u2.__e = b2, r2 != null && typeof u2.type != "function")
        for (y2 = r2.length; y2--; )
          r2[y2] != null && a(r2[y2]);
      for (y2 = C2; y2--; )
        P2[y2] != null && (typeof u2.type == "function" && P2[y2].__e != null && P2[y2].__e == u2.__d && (u2.__d = d(t2, y2 + 1)), E(P2[y2], P2[y2]));
      if (A2)
        for (y2 = 0; y2 < A2.length; y2++)
          j(A2[y2], A2[++y2], A2[++y2]);
    }
    function g(n2, l2, u2) {
      var t2, i2;
      for (t2 = 0; t2 < n2.__k.length; t2++)
        (i2 = n2.__k[t2]) && (i2.__ = n2, l2 = typeof i2.type == "function" ? g(i2, l2, u2) : m(u2, i2, i2, n2.__k, null, i2.__e, l2));
      return l2;
    }
    function m(n2, l2, u2, t2, i2, o2, r2) {
      var f2, e2, c2;
      if (l2.__d !== void 0)
        f2 = l2.__d, l2.__d = void 0;
      else if (i2 == u2 || o2 != r2 || o2.parentNode == null)
        n:
          if (r2 == null || r2.parentNode !== n2)
            n2.appendChild(o2), f2 = null;
          else {
            for (e2 = r2, c2 = 0; (e2 = e2.nextSibling) && c2 < t2.length; c2 += 2)
              if (e2 == o2)
                break n;
            n2.insertBefore(o2, r2), f2 = r2;
          }
      return f2 !== void 0 ? f2 : o2.nextSibling;
    }
    function b(n2, l2, u2, t2, i2) {
      var o2;
      for (o2 in u2)
        o2 === "children" || o2 === "key" || o2 in l2 || P(n2, o2, null, u2[o2], t2);
      for (o2 in l2)
        i2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || P(n2, o2, l2[o2], u2[o2], t2);
    }
    function A(n2, l2, u2) {
      l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || c.test(l2) ? u2 : u2 + "px";
    }
    function P(n2, l2, u2, t2, i2) {
      var o2, r2, f2;
      if (i2 && l2 == "className" && (l2 = "class"), l2 === "style")
        if (typeof u2 == "string")
          n2.style.cssText = u2;
        else {
          if (typeof t2 == "string" && (n2.style.cssText = t2 = ""), t2)
            for (l2 in t2)
              u2 && l2 in u2 || A(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              t2 && u2[l2] === t2[l2] || A(n2.style, l2, u2[l2]);
        }
      else
        l2[0] === "o" && l2[1] === "n" ? (o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), (r2 = l2.toLowerCase()) in n2 && (l2 = r2), l2 = l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, f2 = o2 ? z : C, u2 ? t2 || n2.addEventListener(l2, f2, o2) : n2.removeEventListener(l2, f2, o2)) : l2 !== "list" && l2 !== "tagName" && l2 !== "form" && l2 !== "type" && l2 !== "size" && l2 !== "download" && l2 !== "href" && l2 !== "contentEditable" && !i2 && l2 in n2 ? n2[l2] = u2 == null ? "" : u2 : typeof u2 != "function" && l2 !== "dangerouslySetInnerHTML" && (l2 !== (l2 = l2.replace(/xlink:?/, "")) ? u2 == null || u2 === false ? n2.removeAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase()) : n2.setAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase(), u2) : u2 == null || u2 === false && !/^ar/.test(l2) ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
    function C(l2) {
      this.l[l2.type + false](n.event ? n.event(l2) : l2);
    }
    function z(l2) {
      this.l[l2.type + true](n.event ? n.event(l2) : l2);
    }
    function N(l2, u2, t2, i2, o2, r2, f2, e2, c2) {
      var a2, p2, v2, d2, _2, w2, k2, g2, m2, b2, A2, P2 = u2.type;
      if (u2.constructor !== void 0)
        return null;
      t2.__h != null && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = n.__b) && a2(u2);
      try {
        n:
          if (typeof P2 == "function") {
            if (g2 = u2.props, m2 = (a2 = P2.contextType) && i2[a2.__c], b2 = a2 ? m2 ? m2.props.value : a2.__ : i2, t2.__c ? k2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = p2 = new P2(g2, b2) : (u2.__c = p2 = new y(g2, b2), p2.constructor = P2, p2.render = H), m2 && m2.sub(p2), p2.props = g2, p2.state || (p2.state = {}), p2.context = b2, p2.__n = i2, v2 = p2.__d = true, p2.__h = []), p2.__s == null && (p2.__s = p2.state), P2.getDerivedStateFromProps != null && (p2.__s == p2.state && (p2.__s = s({}, p2.__s)), s(p2.__s, P2.getDerivedStateFromProps(g2, p2.__s))), d2 = p2.props, _2 = p2.state, v2)
              P2.getDerivedStateFromProps == null && p2.componentWillMount != null && p2.componentWillMount(), p2.componentDidMount != null && p2.__h.push(p2.componentDidMount);
            else {
              if (P2.getDerivedStateFromProps == null && g2 !== d2 && p2.componentWillReceiveProps != null && p2.componentWillReceiveProps(g2, b2), !p2.__e && p2.shouldComponentUpdate != null && p2.shouldComponentUpdate(g2, p2.__s, b2) === false || u2.__v === t2.__v) {
                p2.props = g2, p2.state = p2.__s, u2.__v !== t2.__v && (p2.__d = false), p2.__v = u2, u2.__e = t2.__e, u2.__k = t2.__k, p2.__h.length && f2.push(p2);
                break n;
              }
              p2.componentWillUpdate != null && p2.componentWillUpdate(g2, p2.__s, b2), p2.componentDidUpdate != null && p2.__h.push(function() {
                p2.componentDidUpdate(d2, _2, w2);
              });
            }
            p2.context = b2, p2.props = g2, p2.state = p2.__s, (a2 = n.__r) && a2(u2), p2.__d = false, p2.__v = u2, p2.__P = l2, a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s, p2.getChildContext != null && (i2 = s(s({}, i2), p2.getChildContext())), v2 || p2.getSnapshotBeforeUpdate == null || (w2 = p2.getSnapshotBeforeUpdate(d2, _2)), A2 = a2 != null && a2.type === h7 && a2.key == null ? a2.props.children : a2, x(l2, Array.isArray(A2) ? A2 : [A2], u2, t2, i2, o2, r2, f2, e2, c2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), k2 && (p2.__E = p2.__ = null), p2.__e = false;
          } else
            r2 == null && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = $(t2.__e, u2, t2, i2, o2, r2, f2, c2);
        (a2 = n.diffed) && a2(u2);
      } catch (l3) {
        u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), n.__e(l3, u2, t2);
      }
    }
    function T(l2, u2) {
      n.__c && n.__c(u2, l2), l2.some(function(u3) {
        try {
          l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
            n2.call(u3);
          });
        } catch (l3) {
          n.__e(l3, u3.__v);
        }
      });
    }
    function $(n2, l2, u2, t2, i2, o2, r2, c2) {
      var s2, a2, p2, v2, h8, y2 = u2.props, d2 = l2.props;
      if (i2 = l2.type === "svg" || i2, o2 != null) {
        for (s2 = 0; s2 < o2.length; s2++)
          if ((a2 = o2[s2]) != null && ((l2.type === null ? a2.nodeType === 3 : a2.localName === l2.type) || n2 == a2)) {
            n2 = a2, o2[s2] = null;
            break;
          }
      }
      if (n2 == null) {
        if (l2.type === null)
          return document.createTextNode(d2);
        n2 = i2 ? document.createElementNS("http://www.w3.org/2000/svg", l2.type) : document.createElement(l2.type, d2.is && {is: d2.is}), o2 = null, c2 = false;
      }
      if (l2.type === null)
        y2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
      else {
        if (o2 != null && (o2 = e.slice.call(n2.childNodes)), p2 = (y2 = u2.props || f).dangerouslySetInnerHTML, v2 = d2.dangerouslySetInnerHTML, !c2) {
          if (o2 != null)
            for (y2 = {}, h8 = 0; h8 < n2.attributes.length; h8++)
              y2[n2.attributes[h8].name] = n2.attributes[h8].value;
          (v2 || p2) && (v2 && (p2 && v2.__html == p2.__html || v2.__html === n2.innerHTML) || (n2.innerHTML = v2 && v2.__html || ""));
        }
        b(n2, d2, y2, i2, c2), v2 ? l2.__k = [] : (s2 = l2.props.children, x(n2, Array.isArray(s2) ? s2 : [s2], l2, u2, t2, l2.type !== "foreignObject" && i2, o2, r2, f, c2)), c2 || ("value" in d2 && (s2 = d2.value) !== void 0 && (s2 !== n2.value || l2.type === "progress" && !s2) && P(n2, "value", s2, y2.value, false), "checked" in d2 && (s2 = d2.checked) !== void 0 && s2 !== n2.checked && P(n2, "checked", s2, y2.checked, false));
      }
      return n2;
    }
    function j(l2, u2, t2) {
      try {
        typeof l2 == "function" ? l2(u2) : l2.current = u2;
      } catch (l3) {
        n.__e(l3, t2);
      }
    }
    function E(l2, u2, t2) {
      var i2, o2, r2;
      if (n.unmount && n.unmount(l2), (i2 = l2.ref) && (i2.current && i2.current !== l2.__e || j(i2, null, u2)), t2 || typeof l2.type == "function" || (t2 = (o2 = l2.__e) != null), l2.__e = l2.__d = void 0, (i2 = l2.__c) != null) {
        if (i2.componentWillUnmount)
          try {
            i2.componentWillUnmount();
          } catch (l3) {
            n.__e(l3, u2);
          }
        i2.base = i2.__P = null;
      }
      if (i2 = l2.__k)
        for (r2 = 0; r2 < i2.length; r2++)
          i2[r2] && E(i2[r2], u2, t2);
      o2 != null && a(o2);
    }
    function H(n2, l2, u2) {
      return this.constructor(n2, u2);
    }
    function I(l2, u2, t2) {
      var i2, r2, c2;
      n.__ && n.__(l2, u2), r2 = (i2 = t2 === o) ? null : t2 && t2.__k || u2.__k, l2 = p(h7, null, [l2]), c2 = [], N(u2, (i2 ? u2 : t2 || u2).__k = l2, r2 || f, f, u2.ownerSVGElement !== void 0, t2 && !i2 ? [t2] : r2 ? null : u2.childNodes.length ? e.slice.call(u2.childNodes) : null, c2, t2 || f, i2), T(c2, l2);
    }
    n = {__e: function(n2, l2) {
      for (var u2, t2, i2, o2 = l2.__h; l2 = l2.__; )
        if ((u2 = l2.__c) && !u2.__)
          try {
            if ((t2 = u2.constructor) && t2.getDerivedStateFromError != null && (u2.setState(t2.getDerivedStateFromError(n2)), i2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), i2 = u2.__d), i2)
              return l2.__h = o2, u2.__E = u2;
          } catch (l3) {
            n2 = l3;
          }
      throw n2;
    }, __v: 0}, l = function(n2) {
      return n2 != null && n2.constructor === void 0;
    }, y.prototype.setState = function(n2, l2) {
      var u2;
      u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), typeof n2 == "function" && (n2 = n2(s({}, u2), this.props)), n2 && s(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), w(this));
    }, y.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
    }, y.prototype.render = h7, u = [], t = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, k.__r = 0, o = f, r = 0, exports.render = I, exports.hydrate = function(n2, l2) {
      I(n2, l2, o);
    }, exports.createElement = p, exports.h = p, exports.Fragment = h7, exports.createRef = function() {
      return {current: null};
    }, exports.isValidElement = l, exports.Component = y, exports.cloneElement = function(n2, l2, u2) {
      var t2, i2, o2, r2 = arguments, f2 = s({}, n2.props);
      for (o2 in l2)
        o2 == "key" ? t2 = l2[o2] : o2 == "ref" ? i2 = l2[o2] : f2[o2] = l2[o2];
      if (arguments.length > 3)
        for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
          u2.push(r2[o2]);
      return u2 != null && (f2.children = u2), v(n2.type, f2, t2 || n2.key, i2 || n2.ref, null);
    }, exports.createContext = function(n2, l2) {
      var u2 = {__c: l2 = "__cC" + r++, __: n2, Consumer: function(n3, l3) {
        return n3.children(l3);
      }, Provider: function(n3) {
        var u3, t2;
        return this.getChildContext || (u3 = [], (t2 = {})[l2] = this, this.getChildContext = function() {
          return t2;
        }, this.shouldComponentUpdate = function(n4) {
          this.props.value !== n4.value && u3.some(w);
        }, this.sub = function(n4) {
          u3.push(n4);
          var l3 = n4.componentWillUnmount;
          n4.componentWillUnmount = function() {
            u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
          };
        }), n3.children;
      }};
      return u2.Provider.__ = u2.Consumer.contextType = u2;
    }, exports.toChildArray = function n2(l2, u2) {
      return u2 = u2 || [], l2 == null || typeof l2 == "boolean" || (Array.isArray(l2) ? l2.some(function(l3) {
        n2(l3, u2);
      }) : u2.push(l2)), u2;
    }, exports.options = n;
  });

  // node_modules/preact-router/dist/preact-router.js
  var require_preact_router = __commonJS((exports, module) => {
    !function(t, e) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = e(require_preact()) : typeof define == "function" && define.amd ? define(["preact"], e) : t.preactRouter = e(t.preact);
    }(exports, function(t) {
      function e(t2, e2) {
        for (var n2 in e2)
          t2[n2] = e2[n2];
        return t2;
      }
      function n(t2, e2, n2) {
        var r2, o2 = /(?:\?([^#]*))?(#.*)?$/, u2 = t2.match(o2), a2 = {};
        if (u2 && u2[1])
          for (var p2 = u2[1].split("&"), c2 = 0; c2 < p2.length; c2++) {
            var f2 = p2[c2].split("=");
            a2[decodeURIComponent(f2[0])] = decodeURIComponent(f2.slice(1).join("="));
          }
        t2 = i(t2.replace(o2, "")), e2 = i(e2 || "");
        for (var l2 = Math.max(t2.length, e2.length), s2 = 0; s2 < l2; s2++)
          if (e2[s2] && e2[s2].charAt(0) === ":") {
            var h8 = e2[s2].replace(/(^:|[+*?]+$)/g, ""), d2 = (e2[s2].match(/[+*?]+$/) || C)[0] || "", g2 = ~d2.indexOf("+"), y2 = ~d2.indexOf("*"), m2 = t2[s2] || "";
            if (!m2 && !y2 && (d2.indexOf("?") < 0 || g2)) {
              r2 = false;
              break;
            }
            if (a2[h8] = decodeURIComponent(m2), g2 || y2) {
              a2[h8] = t2.slice(s2).map(decodeURIComponent).join("/");
              break;
            }
          } else if (e2[s2] !== t2[s2]) {
            r2 = false;
            break;
          }
        return (n2.default === true || r2 !== false) && a2;
      }
      function r(t2, e2) {
        return t2.rank < e2.rank ? 1 : t2.rank > e2.rank ? -1 : t2.index - e2.index;
      }
      function o(t2, e2) {
        return t2.index = e2, t2.rank = p(t2), t2.props;
      }
      function i(t2) {
        return t2.replace(/(^\/+|\/+$)/g, "").split("/");
      }
      function u(t2) {
        return t2.charAt(0) == ":" ? 1 + "*+?".indexOf(t2.charAt(t2.length - 1)) || 4 : 5;
      }
      function a(t2) {
        return i(t2).map(u).join("");
      }
      function p(t2) {
        return t2.props.default ? 0 : a(t2.props.path);
      }
      function c(t2, e2) {
        e2 === void 0 && (e2 = "push"), b && b[e2] ? b[e2](t2) : typeof history != "undefined" && history[e2 + "State"] && history[e2 + "State"](null, null, t2);
      }
      function f() {
        var t2;
        return t2 = b && b.location ? b.location : b && b.getCurrentLocation ? b.getCurrentLocation() : typeof location != "undefined" ? location : x, "" + (t2.pathname || "") + (t2.search || "");
      }
      function l(t2, e2) {
        return e2 === void 0 && (e2 = false), typeof t2 != "string" && t2.url && (e2 = t2.replace, t2 = t2.url), s(t2) && c(t2, e2 ? "replace" : "push"), h7(t2);
      }
      function s(t2) {
        for (var e2 = U.length; e2--; )
          if (U[e2].canRoute(t2))
            return true;
        return false;
      }
      function h7(t2) {
        for (var e2 = false, n2 = 0; n2 < U.length; n2++)
          U[n2].routeTo(t2) === true && (e2 = true);
        for (var r2 = k.length; r2--; )
          k[r2](t2);
        return e2;
      }
      function d(t2) {
        if (t2 && t2.getAttribute) {
          var e2 = t2.getAttribute("href"), n2 = t2.getAttribute("target");
          if (e2 && e2.match(/^\//g) && (!n2 || n2.match(/^_?self$/i)))
            return l(e2);
        }
      }
      function g(t2) {
        if (!(t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button !== 0))
          return d(t2.currentTarget || t2.target || this), y(t2);
      }
      function y(t2) {
        return t2 && (t2.stopImmediatePropagation && t2.stopImmediatePropagation(), t2.stopPropagation && t2.stopPropagation(), t2.preventDefault()), false;
      }
      function m(t2) {
        if (!(t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button !== 0)) {
          var e2 = t2.target;
          do {
            if ((e2.nodeName + "").toUpperCase() === "A" && e2.getAttribute("href")) {
              if (e2.hasAttribute("native"))
                return;
              if (d(e2))
                return y(t2);
            }
          } while (e2 = e2.parentNode);
        }
      }
      function v() {
        A || (typeof addEventListener == "function" && (b || addEventListener("popstate", function() {
          h7(f());
        }), addEventListener("click", m)), A = true);
      }
      var C = {}, b = null, U = [], k = [], x = {}, A = false, R = function(i2) {
        function u2(t2) {
          i2.call(this, t2), t2.history && (b = t2.history), this.state = {url: t2.url || f()}, v();
        }
        return i2 && (u2.__proto__ = i2), u2.prototype = Object.create(i2 && i2.prototype), u2.prototype.constructor = u2, u2.prototype.shouldComponentUpdate = function(t2) {
          return t2.static !== true || (t2.url !== this.props.url || t2.onChange !== this.props.onChange);
        }, u2.prototype.canRoute = function(e2) {
          return this.getMatchingChildren(t.toChildArray(this.props.children), e2, false).length > 0;
        }, u2.prototype.routeTo = function(t2) {
          this.setState({url: t2});
          var e2 = this.canRoute(t2);
          return this.updating || this.forceUpdate(), e2;
        }, u2.prototype.componentWillMount = function() {
          U.push(this), this.updating = true;
        }, u2.prototype.componentDidMount = function() {
          var t2 = this;
          b && (this.unlisten = b.listen(function(e2) {
            t2.routeTo("" + (e2.pathname || "") + (e2.search || ""));
          })), this.updating = false;
        }, u2.prototype.componentWillUnmount = function() {
          typeof this.unlisten == "function" && this.unlisten(), U.splice(U.indexOf(this), 1);
        }, u2.prototype.componentWillUpdate = function() {
          this.updating = true;
        }, u2.prototype.componentDidUpdate = function() {
          this.updating = false;
        }, u2.prototype.getMatchingChildren = function(i3, u3, a2) {
          return i3.filter(o).sort(r).map(function(r2) {
            var o2 = n(u3, r2.props.path, r2.props);
            if (o2) {
              if (a2 !== false) {
                var i4 = {url: u3, matches: o2};
                return e(i4, o2), delete i4.ref, delete i4.key, t.cloneElement(r2, i4);
              }
              return r2;
            }
          }).filter(Boolean);
        }, u2.prototype.render = function(e2, n2) {
          var r2 = e2.children, o2 = e2.onChange, i3 = n2.url, u3 = this.getMatchingChildren(t.toChildArray(r2), i3, true), a2 = u3[0] || null, p2 = this.previousUrl;
          return i3 !== p2 && (this.previousUrl = i3, typeof o2 == "function" && o2({router: this, url: i3, previous: p2, active: u3, current: a2})), a2;
        }, u2;
      }(t.Component), K = function(n2) {
        return t.createElement("a", e({onClick: g}, n2));
      }, E = function(e2) {
        return t.createElement(e2.component, e2);
      };
      return R.subscribers = k, R.getCurrentUrl = f, R.route = l, R.Router = R, R.Route = E, R.Link = K, R.exec = n, R;
    });
  });

  // node_modules/preact-router/match.js
  var require_match = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Link = exports.Match = void 0;
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _preact = require_preact();
    var _preactRouter = require_preact_router();
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Match = exports.Match = function(_Component) {
      _inherits(Match2, _Component);
      function Match2() {
        var _temp, _this, _ret;
        _classCallCheck(this, Match2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function(url) {
          _this.nextUrl = url;
          _this.setState({});
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      Match2.prototype.componentDidMount = function componentDidMount() {
        _preactRouter.subscribers.push(this.update);
      };
      Match2.prototype.componentWillUnmount = function componentWillUnmount() {
        _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
      };
      Match2.prototype.render = function render3(props) {
        var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(), path = url.replace(/\?.+$/, "");
        this.nextUrl = null;
        return props.children({
          url,
          path,
          matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
        });
      };
      return Match2;
    }(_preact.Component);
    var Link2 = function Link3(_ref) {
      var activeClassName = _ref.activeClassName, path = _ref.path, props = _objectWithoutProperties(_ref, ["activeClassName", "path"]);
      return (0, _preact.h)(Match, {path: path || props.href}, function(_ref2) {
        var matches = _ref2.matches;
        return (0, _preact.h)(_preactRouter.Link, _extends({}, props, {class: [props.class || props.className, matches && activeClassName].filter(Boolean).join(" ")}));
      });
    };
    exports.Link = Link2;
    exports.default = Match;
    Match.Link = Link2;
  });

  // app/index.tsx
  var preact6 = __toModule(require_preact());

  // app/components/App.tsx
  var preact5 = __toModule(require_preact());

  // app/components/shared/SiteHeader/index.tsx
  var preact = __toModule(require_preact());
  var match = __toModule(require_match());
  var SiteHeader = class extends preact.Component {
    render() {
      return /* @__PURE__ */ preact.h("nav", {
        id: "site-header"
      }, /* @__PURE__ */ preact.h("div", {
        class: "inner"
      }, /* @__PURE__ */ preact.h(match.Link, {
        href: "/",
        class: "logo"
      }, "Percepta"), /* @__PURE__ */ preact.h("div", {
        class: "nav-items flex-row flex-center flex-spread"
      })));
    }
  };
  var SiteHeader_default = SiteHeader;

  // app/components/Routes.tsx
  var preact4 = __toModule(require_preact());
  var preact_router = __toModule(require_preact_router());

  // app/components/pages/Home/index.tsx
  var preact3 = __toModule(require_preact());

  // app/components/shared/Button/index.tsx
  var preact2 = __toModule(require_preact());
  var Button = class extends preact2.Component {
    constructor(props) {
      super(props);
    }
    render(props) {
      return /* @__PURE__ */ preact2.h("div", {
        class: "button" + (this.props.class ? ` ${this.props.class}` : ""),
        onClick: props.click ? props.click : () => null
      }, props.children);
    }
  };
  var Button_default = Button;

  // app/components/pages/Home/index.tsx
  var Home = class extends preact3.Component {
    constructor() {
      super(...arguments);
      this.page = preact3.createRef();
      this.state = {
        showForm: false
      };
      this.onClick = () => {
        console.log("clicked");
        this.setState({showForm: true});
      };
    }
    componentWillMount() {
    }
    componentDidMount() {
      this.page.current.classList.add("page-loaded");
    }
    render() {
      return /* @__PURE__ */ preact3.h("div", {
        class: "page",
        id: "home",
        style: "opacity: 0;",
        ref: this.page
      }, /* @__PURE__ */ preact3.h("div", {
        class: "container"
      }, /* @__PURE__ */ preact3.h(Button_default, {
        class: "small inline",
        click: this.onClick
      }, "Click Me"), this.state.showForm && /* @__PURE__ */ preact3.h("div", {
        class: "form"
      }, "Search for a movie:", /* @__PURE__ */ preact3.h("input", {
        type: "text",
        placeholder: "Search..."
      }))));
    }
  };
  var Home_default = Home;

  // app/components/Routes.tsx
  var Routes = class extends preact4.Component {
    render() {
      return /* @__PURE__ */ preact4.h(preact_router.default, null, /* @__PURE__ */ preact4.h(Home_default, {
        path: "/"
      }));
    }
  };
  var Routes_default = Routes;

  // app/components/App.tsx
  var App = class extends preact5.Component {
    render() {
      return /* @__PURE__ */ preact5.h("div", {
        id: "app"
      }, /* @__PURE__ */ preact5.h("div", {
        class: "content-wrapper"
      }, /* @__PURE__ */ preact5.h(SiteHeader_default, null), /* @__PURE__ */ preact5.h("div", {
        class: "page-wrapper"
      }, /* @__PURE__ */ preact5.h(Routes_default, null))));
    }
  };
  var App_default = App;

  // app/index.tsx
  var app = document.getElementById("app");
  if (app) {
    preact6.render(/* @__PURE__ */ preact6.h(App_default, null), app, app);
  } else {
    alert("Couldn't find app mount point.");
  }
})();
//# sourceMappingURL=app.js.map
