/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , y = n.hasOwnProperty
      , a = y.toString
      , l = a.call(Object)
      , v = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.1"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: v
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, y, s, c, v, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function(e, t) {
            return e === t && (l = !0),
            0
        }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", $ = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ye(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            y = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || y.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                y.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            y = y.length && new RegExp(y.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            v = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            j = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            v(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(j),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, y) {
                    var v = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === y ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (v) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= y) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace(B, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ye(function() {
                    return [0]
                }),
                last: ye(function(e, t) {
                    return [t - 1]
                }),
                eq: ye(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ye(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ye(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ye(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ye(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, y, v, e) {
            return y && !y[S] && (y = Ce(y)),
            v && !v[S] && (v = Ce(v, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? v || (e ? d : l || y) ? [] : t : f;
                if (g && g(f, p, n, r),
                y) {
                    i = Te(p, u),
                    y(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (v || d) {
                        if (v) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    v ? v(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, y, v, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (y = o,
                m = 0 < (v = i).length,
                x = 0 < y.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = y[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = v[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ve(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(j).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || D,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function $() {
        E.removeEventListener("DOMContentLoaded", $),
        C.removeEventListener("load", $),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", $),
    C.addEventListener("load", $));
    var B = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                B(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : B(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    v.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ye(f.appendChild(o), "script"),
            l && ve(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Te() {
        return !1
    }
    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Te;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Se(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = y.events) || (u = y.events = Object.create(null)),
                (a = y.handle) || (a = y.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = be.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || S.removeEvent(e, d, y.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        S.event.special[t] = {
            setup: function() {
                return Se(this, t, Ce),
                !1
            },
            trigger: function() {
                return Se(this, t),
                !0
            },
            _default: function(e) {
                return Y.get(e.target, t)
            },
            delegateType: e
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                He(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ye(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, qe),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }
    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ye(r)),
            r.parentNode && (n && ie(r) && ve(ye(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ye(c),
                r = 0,
                i = (o = ye(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ye(e),
                    a = a || ye(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Le(o[r], a[r]);
                else
                    Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ye(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ye(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ye(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Re = /^--/
      , Me = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Ie = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , We = new RegExp(ne.join("|"),"i")
      , Fe = "[\\x20\\t\\r\\n\\f]"
      , $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$","g");
    function Be(e, t, n) {
        var r, i, o, a, s = Re.test(t), u = e.style;
        return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t],
        s && (a = a.replace($e, "$1")),
        "" !== a || ie(e) || (a = S.style(e, t)),
        !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width,
        i = u.minWidth,
        o = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = a,
        a = n.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        v.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(v, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                re.removeChild(e)),
                a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"]
      , Ue = E.createElement("div").style
      , Xe = {};
    function Ve(e) {
        var t = S.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = ze.length;
            while (n--)
                if ((e = ze[n] + t)in Ue)
                    return e
        }(e) || e)
    }
    var Ge = /^(none|table(?!-c[ea]).+)/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Me(e)
          , i = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Re.test(t), l = e.style;
                if (u || (t = Ve(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Re.test(t) || (t = Ve(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ge.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function() {
                        return Ze(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Me(e), o = !v.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Je(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Je)
    }),
    S.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = et.prototype.init,
    S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval),
        S.fx.tick())
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !y || void 0 === y[r])
                            continue;
                        g = !0
                    }
                    d[r] = y && y[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = y && y.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (y ? "hidden"in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (y.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ct(g ? y[r] : 0, r, p),
                    r in y || (y[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        tt = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    S.fx.stop = function() {
        nt = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    rt = E.createElement("input"),
    it = E.createElement("select").appendChild(E.createElement("option")),
    rt.type = "checkbox",
    v.checkOn = "" !== rt.value,
    v.optSelected = it.selected,
    (rt = E.createElement("input")).value = "t",
    rt.type = "radio",
    v.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return B(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function yt(e) {
        return (e.match(P) || []).join(" ")
    }
    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return B(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    v.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                S(this).addClass(t.call(this, e, vt(this)))
            }) : (e = mt(t)).length ? this.each(function() {
                if (r = vt(this),
                n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        i = e[o],
                        n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = yt(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                S(this).removeClass(t.call(this, e, vt(this)))
            }) : arguments.length ? (e = mt(t)).length ? this.each(function() {
                if (r = vt(this),
                n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " "))
                            n = n.replace(" " + i + " ", " ")
                    }
                    a = yt(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t);
            return m(t) ? this.each(function(e) {
                S(this).toggleClass(t.call(this, e, vt(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t),
            this.each(function() {
                if (s)
                    for (o = S(this),
                    i = 0; i < e.length; i++)
                        r = e[i],
                        o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                    void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r),
                    this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : yt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        v.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    v.focusin = "onfocusin"in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = y.call(e, "type") ? e.type : e, h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    v.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var Tt = C.location
      , Ct = {
        guid: Date.now()
    }
      , Et = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var St = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                jt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                jt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function $t(t, i, o, a) {
        var s = {}
          , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Bt(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, y = S.ajaxSetup({}, t), v = y.context || y, m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = y.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ht.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (y.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            y.type = t.method || t.type || y.method || y.type,
            y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""],
            null == y.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = y.url,
                    r.href = r.href,
                    y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    y.crossDomain = !0
                }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = S.param(y.data, y.traditional)),
            $t(Rt, y, t, T),
            h)
                return T;
            for (i in (g = S.event && y.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            y.type = y.type.toUpperCase(),
            y.hasContent = !Ot.test(y.type),
            f = y.url.replace(qt, ""),
            y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length),
            y.data && (y.processData || "string" == typeof y.data) && (f += (Et.test(f) ? "&" : "?") + y.data,
            delete y.data),
            !1 === y.cache && (f = f.replace(Lt, "$1"),
            o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
            y.url = f + o),
            y.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType),
            T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]),
            y.headers)
                T.setRequestHeader(i, y.headers[i]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
                return T.abort();
            if (u = "abort",
            b.add(y.complete),
            T.done(y.success),
            T.fail(y.error),
            c = $t(Mt, y, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, y]),
                h)
                    return T;
                y.async && 0 < y.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, y.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(y, T, n)),
                !i && -1 < S.inArray("script", y.dataTypes) && S.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(y, s, T, i),
                i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
                b.fireWith(v, [T, l]),
                g && (m.trigger("ajaxComplete", [T, y]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = S.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials"in zt,
    v.ajax = zt = !!zt,
    S.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    v.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = yt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = _e(v.pixelPosition, function(e, t) {
            if (t)
                return t = Be(e, n),
                Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery
      , Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt),
        e && C.jQuery === S && (C.jQuery = Yt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});
/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery)
}(this, (function(t, e) {
    "use strict";
    function n(t) {
        return t && "object" == typeof t && "default"in t ? t : {
            default: t
        }
    }
    var i = n(e);
    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function r(t, e, n) {
        return e && o(t.prototype, e),
        n && o(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function a() {
        return a = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ,
        a.apply(this, arguments)
    }
    function s(t, e) {
        return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        s(t, e)
    }
    var l = "transitionend";
    var u = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = i.default(t).css("transition-duration")
              , n = i.default(t).css("transition-delay")
              , o = parseFloat(e)
              , r = parseFloat(n);
            return o || r ? (e = e.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            i.default(t).trigger(l)
        },
        supportsTransitionEnd: function() {
            return Boolean(l)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = e[i]
                      , a = r && u.isElement(r) ? "element" : null === (s = r) || "undefined" == typeof s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                }
            var s
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? u.findShadowRoot(t.parentNode) : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof i.default)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = i.default.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    u.jQueryDetection(),
    i.default.fn.emulateTransitionEnd = function(t) {
        var e = this
          , n = !1;
        return i.default(this).one(u.TRANSITION_END, (function() {
            n = !0
        }
        )),
        setTimeout((function() {
            n || u.triggerTransitionEnd(e)
        }
        ), t),
        this
    }
    ,
    i.default.event.special[u.TRANSITION_END] = {
        bindType: l,
        delegateType: l,
        handle: function(t) {
            if (i.default(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    };
    var f = "bs.alert"
      , d = i.default.fn.alert
      , c = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        e.dispose = function() {
            i.default.removeData(this._element, f),
            this._element = null
        }
        ,
        e._getRootElement = function(t) {
            var e = u.getSelectorFromElement(t)
              , n = !1;
            return e && (n = document.querySelector(e)),
            n || (n = i.default(t).closest(".alert")[0]),
            n
        }
        ,
        e._triggerCloseEvent = function(t) {
            var e = i.default.Event("close.bs.alert");
            return i.default(t).trigger(e),
            e
        }
        ,
        e._removeElement = function(t) {
            var e = this;
            if (i.default(t).removeClass("show"),
            i.default(t).hasClass("fade")) {
                var n = u.getTransitionDurationFromElement(t);
                i.default(t).one(u.TRANSITION_END, (function(n) {
                    return e._destroyElement(t, n)
                }
                )).emulateTransitionEnd(n)
            } else
                this._destroyElement(t)
        }
        ,
        e._destroyElement = function(t) {
            i.default(t).detach().trigger("closed.bs.alert").remove()
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = i.default(this)
                  , o = n.data(f);
                o || (o = new t(this),
                n.data(f, o)),
                "close" === e && o[e](this)
            }
            ))
        }
        ,
        t._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }]),
        t
    }();
    i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', c._handleDismiss(new c)),
    i.default.fn.alert = c._jQueryInterface,
    i.default.fn.alert.Constructor = c,
    i.default.fn.alert.noConflict = function() {
        return i.default.fn.alert = d,
        c._jQueryInterface
    }
    ;
    var h = "bs.button"
      , p = i.default.fn.button
      , m = "active"
      , g = '[data-toggle^="button"]'
      , _ = 'input:not([type="hidden"])'
      , v = ".btn"
      , b = function() {
        function t(t) {
            this._element = t,
            this.shouldAvoidTriggerChange = !1
        }
        var e = t.prototype;
        return e.toggle = function() {
            var t = !0
              , e = !0
              , n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var o = this._element.querySelector(_);
                if (o) {
                    if ("radio" === o.type)
                        if (o.checked && this._element.classList.contains(m))
                            t = !1;
                        else {
                            var r = n.querySelector(".active");
                            r && i.default(r).removeClass(m)
                        }
                    t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains(m)),
                    this.shouldAvoidTriggerChange || i.default(o).trigger("change")),
                    o.focus(),
                    e = !1
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(m)),
            t && i.default(this._element).toggleClass(m))
        }
        ,
        e.dispose = function() {
            i.default.removeData(this._element, h),
            this._element = null
        }
        ,
        t._jQueryInterface = function(e, n) {
            return this.each((function() {
                var o = i.default(this)
                  , r = o.data(h);
                r || (r = new t(this),
                o.data(h, r)),
                r.shouldAvoidTriggerChange = n,
                "toggle" === e && r[e]()
            }
            ))
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }]),
        t
    }();
    i.default(document).on("click.bs.button.data-api", g, (function(t) {
        var e = t.target
          , n = e;
        if (i.default(e).hasClass("btn") || (e = i.default(e).closest(v)[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
            t.preventDefault();
        else {
            var o = e.querySelector(_);
            if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled")))
                return void t.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === e.tagName || b._jQueryInterface.call(i.default(e), "toggle", "INPUT" === n.tagName)
        }
    }
    )).on("focus.bs.button.data-api blur.bs.button.data-api", g, (function(t) {
        var e = i.default(t.target).closest(v)[0];
        i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    }
    )),
    i.default(window).on("load.bs.button.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
            var i = t[e]
              , o = i.querySelector(_);
            o.checked || o.hasAttribute("checked") ? i.classList.add(m) : i.classList.remove(m)
        }
        for (var r = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) {
            var s = t[r];
            "true" === s.getAttribute("aria-pressed") ? s.classList.add(m) : s.classList.remove(m)
        }
    }
    )),
    i.default.fn.button = b._jQueryInterface,
    i.default.fn.button.Constructor = b,
    i.default.fn.button.noConflict = function() {
        return i.default.fn.button = p,
        b._jQueryInterface
    }
    ;
    var y = "carousel"
      , E = "bs.carousel"
      , w = i.default.fn[y]
      , T = "active"
      , C = "next"
      , S = "prev"
      , N = "slid.bs.carousel"
      , D = ".active.carousel-item"
      , A = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , k = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , I = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , O = function() {
        function t(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._element = t,
            this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var e = t.prototype;
        return e.next = function() {
            this._isSliding || this._slide(C)
        }
        ,
        e.nextWhenVisible = function() {
            var t = i.default(this._element);
            !document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next()
        }
        ,
        e.prev = function() {
            this._isSliding || this._slide(S)
        }
        ,
        e.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (u.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        e.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        e.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(D);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    i.default(this._element).one(N, (function() {
                        return e.to(t)
                    }
                    ));
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var o = t > n ? C : S;
                    this._slide(o, this._items[t])
                }
        }
        ,
        e.dispose = function() {
            i.default(this._element).off(".bs.carousel"),
            i.default.removeData(this._element, E),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        e._getConfig = function(t) {
            return t = a({}, A, t),
            u.typeCheckConfig(y, t, k),
            t
        }
        ,
        e._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                this.touchDeltaX = 0,
                e > 0 && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            this._config.keyboard && i.default(this._element).on("keydown.bs.carousel", (function(e) {
                return t._keydown(e)
            }
            )),
            "hover" === this._config.pause && i.default(this._element).on("mouseenter.bs.carousel", (function(e) {
                return t.pause(e)
            }
            )).on("mouseleave.bs.carousel", (function(e) {
                return t.cycle(e)
            }
            )),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        e._addTouchEventListeners = function() {
            var t = this;
            if (this._touchSupported) {
                var e = function(e) {
                    t._pointerEvent && I[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                }
                  , n = function(e) {
                    t._pointerEvent && I[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                    t._handleSwipe(),
                    "hover" === t._config.pause && (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    t.touchTimeout = setTimeout((function(e) {
                        return t.cycle(e)
                    }
                    ), 500 + t._config.interval))
                };
                i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(t) {
                    return t.preventDefault()
                }
                )),
                this._pointerEvent ? (i.default(this._element).on("pointerdown.bs.carousel", (function(t) {
                    return e(t)
                }
                )),
                i.default(this._element).on("pointerup.bs.carousel", (function(t) {
                    return n(t)
                }
                )),
                this._element.classList.add("pointer-event")) : (i.default(this._element).on("touchstart.bs.carousel", (function(t) {
                    return e(t)
                }
                )),
                i.default(this._element).on("touchmove.bs.carousel", (function(e) {
                    return function(e) {
                        t.touchDeltaX = e.originalEvent.touches && e.originalEvent.touches.length > 1 ? 0 : e.originalEvent.touches[0].clientX - t.touchStartX
                    }(e)
                }
                )),
                i.default(this._element).on("touchend.bs.carousel", (function(t) {
                    return n(t)
                }
                )))
            }
        }
        ,
        e._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        e._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(t)
        }
        ,
        e._getItemByDirection = function(t, e) {
            var n = t === C
              , i = t === S
              , o = this._getItemIndex(e)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return e;
            var a = (o + (t === S ? -1 : 1)) % this._items.length;
            return -1 === a ? this._items[this._items.length - 1] : this._items[a]
        }
        ,
        e._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , o = this._getItemIndex(this._element.querySelector(D))
              , r = i.default.Event("slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: o,
                to: n
            });
            return i.default(this._element).trigger(r),
            r
        }
        ,
        e._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                i.default(e).removeClass(T);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && i.default(n).addClass(T)
            }
        }
        ,
        e._updateInterval = function() {
            var t = this._activeElement || this._element.querySelector(D);
            if (t) {
                var e = parseInt(t.getAttribute("data-interval"), 10);
                e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
            }
        }
        ,
        e._slide = function(t, e) {
            var n, o, r, a = this, s = this._element.querySelector(D), l = this._getItemIndex(s), f = e || s && this._getItemByDirection(t, s), d = this._getItemIndex(f), c = Boolean(this._interval);
            if (t === C ? (n = "carousel-item-left",
            o = "carousel-item-next",
            r = "left") : (n = "carousel-item-right",
            o = "carousel-item-prev",
            r = "right"),
            f && i.default(f).hasClass(T))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(f, r).isDefaultPrevented() && s && f) {
                this._isSliding = !0,
                c && this.pause(),
                this._setActiveIndicatorElement(f),
                this._activeElement = f;
                var h = i.default.Event(N, {
                    relatedTarget: f,
                    direction: r,
                    from: l,
                    to: d
                });
                if (i.default(this._element).hasClass("slide")) {
                    i.default(f).addClass(o),
                    u.reflow(f),
                    i.default(s).addClass(n),
                    i.default(f).addClass(n);
                    var p = u.getTransitionDurationFromElement(s);
                    i.default(s).one(u.TRANSITION_END, (function() {
                        i.default(f).removeClass(n + " " + o).addClass(T),
                        i.default(s).removeClass("active " + o + " " + n),
                        a._isSliding = !1,
                        setTimeout((function() {
                            return i.default(a._element).trigger(h)
                        }
                        ), 0)
                    }
                    )).emulateTransitionEnd(p)
                } else
                    i.default(s).removeClass(T),
                    i.default(f).addClass(T),
                    this._isSliding = !1,
                    i.default(this._element).trigger(h);
                c && this.cycle()
            }
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = i.default(this).data(E)
                  , o = a({}, A, i.default(this).data());
                "object" == typeof e && (o = a({}, o, e));
                var r = "string" == typeof e ? e : o.slide;
                if (n || (n = new t(this,o),
                i.default(this).data(E, n)),
                "number" == typeof e)
                    n.to(e);
                else if ("string" == typeof r) {
                    if ("undefined" == typeof n[r])
                        throw new TypeError('No method named "' + r + '"');
                    n[r]()
                } else
                    o.interval && o.ride && (n.pause(),
                    n.cycle())
            }
            ))
        }
        ,
        t._dataApiClickHandler = function(e) {
            var n = u.getSelectorFromElement(this);
            if (n) {
                var o = i.default(n)[0];
                if (o && i.default(o).hasClass("carousel")) {
                    var r = a({}, i.default(o).data(), i.default(this).data())
                      , s = this.getAttribute("data-slide-to");
                    s && (r.interval = !1),
                    t._jQueryInterface.call(i.default(o), r),
                    s && i.default(o).data(E).to(s),
                    e.preventDefault()
                }
            }
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return A
            }
        }]),
        t
    }();
    i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", O._dataApiClickHandler),
    i.default(window).on("load.bs.carousel.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
            var o = i.default(t[e]);
            O._jQueryInterface.call(o, o.data())
        }
    }
    )),
    i.default.fn[y] = O._jQueryInterface,
    i.default.fn[y].Constructor = O,
    i.default.fn[y].noConflict = function() {
        return i.default.fn[y] = w,
        O._jQueryInterface
    }
    ;
    var x = "collapse"
      , j = "bs.collapse"
      , L = i.default.fn[x]
      , P = "show"
      , F = "collapse"
      , R = "collapsing"
      , B = "collapsed"
      , H = "width"
      , M = '[data-toggle="collapse"]'
      , q = {
        toggle: !0,
        parent: ""
    }
      , Q = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , W = function() {
        function t(t, e) {
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(M)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , a = u.getSelectorFromElement(r)
                  , s = [].slice.call(document.querySelectorAll(a)).filter((function(e) {
                    return e === t
                }
                ));
                null !== a && s.length > 0 && (this._selector = a,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var e = t.prototype;
        return e.toggle = function() {
            i.default(this._element).hasClass(P) ? this.hide() : this.show()
        }
        ,
        e.show = function() {
            var e, n, o = this;
            if (!(this._isTransitioning || i.default(this._element).hasClass(P) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
                return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(F)
            }
            ))).length && (e = null),
            e && (n = i.default(e).not(this._selector).data(j)) && n._isTransitioning))) {
                var r = i.default.Event("show.bs.collapse");
                if (i.default(this._element).trigger(r),
                !r.isDefaultPrevented()) {
                    e && (t._jQueryInterface.call(i.default(e).not(this._selector), "hide"),
                    n || i.default(e).data(j, null));
                    var a = this._getDimension();
                    i.default(this._element).removeClass(F).addClass(R),
                    this._element.style[a] = 0,
                    this._triggerArray.length && i.default(this._triggerArray).removeClass(B).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var s = "scroll" + (a[0].toUpperCase() + a.slice(1))
                      , l = u.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(u.TRANSITION_END, (function() {
                        i.default(o._element).removeClass(R).addClass("collapse show"),
                        o._element.style[a] = "",
                        o.setTransitioning(!1),
                        i.default(o._element).trigger("shown.bs.collapse")
                    }
                    )).emulateTransitionEnd(l),
                    this._element.style[a] = this._element[s] + "px"
                }
            }
        }
        ,
        e.hide = function() {
            var t = this;
            if (!this._isTransitioning && i.default(this._element).hasClass(P)) {
                var e = i.default.Event("hide.bs.collapse");
                if (i.default(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    u.reflow(this._element),
                    i.default(this._element).addClass(R).removeClass("collapse show");
                    var o = this._triggerArray.length;
                    if (o > 0)
                        for (var r = 0; r < o; r++) {
                            var a = this._triggerArray[r]
                              , s = u.getSelectorFromElement(a);
                            null !== s && (i.default([].slice.call(document.querySelectorAll(s))).hasClass(P) || i.default(a).addClass(B).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0),
                    this._element.style[n] = "";
                    var l = u.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(u.TRANSITION_END, (function() {
                        t.setTransitioning(!1),
                        i.default(t._element).removeClass(R).addClass(F).trigger("hidden.bs.collapse")
                    }
                    )).emulateTransitionEnd(l)
                }
            }
        }
        ,
        e.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        e.dispose = function() {
            i.default.removeData(this._element, j),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        e._getConfig = function(t) {
            return (t = a({}, q, t)).toggle = Boolean(t.toggle),
            u.typeCheckConfig(x, t, Q),
            t
        }
        ,
        e._getDimension = function() {
            return i.default(this._element).hasClass(H) ? H : "height"
        }
        ,
        e._getParent = function() {
            var e, n = this;
            u.isElement(this._config.parent) ? (e = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , r = [].slice.call(e.querySelectorAll(o));
            return i.default(r).each((function(e, i) {
                n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i])
            }
            )),
            e
        }
        ,
        e._addAriaAndCollapsedClass = function(t, e) {
            var n = i.default(t).hasClass(P);
            e.length && i.default(e).toggleClass(B, !n).attr("aria-expanded", n)
        }
        ,
        t._getTargetFromElement = function(t) {
            var e = u.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = i.default(this)
                  , o = n.data(j)
                  , r = a({}, q, n.data(), "object" == typeof e && e ? e : {});
                if (!o && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1),
                o || (o = new t(this,r),
                n.data(j, o)),
                "string" == typeof e) {
                    if ("undefined" == typeof o[e])
                        throw new TypeError('No method named "' + e + '"');
                    o[e]()
                }
            }
            ))
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return q
            }
        }]),
        t
    }();
    i.default(document).on("click.bs.collapse.data-api", M, (function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = i.default(this)
          , n = u.getSelectorFromElement(this)
          , o = [].slice.call(document.querySelectorAll(n));
        i.default(o).each((function() {
            var t = i.default(this)
              , n = t.data(j) ? "toggle" : e.data();
            W._jQueryInterface.call(t, n)
        }
        ))
    }
    )),
    i.default.fn[x] = W._jQueryInterface,
    i.default.fn[x].Constructor = W,
    i.default.fn[x].noConflict = function() {
        return i.default.fn[x] = L,
        W._jQueryInterface
    }
    ;
    var U = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , V = function() {
        for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
            if (U && navigator.userAgent.indexOf(t[e]) >= 0)
                return 1;
        return 0
    }()
      , Y = U && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            window.Promise.resolve().then((function() {
                e = !1,
                t()
            }
            )))
        }
    }
    : function(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            setTimeout((function() {
                e = !1,
                t()
            }
            ), V))
        }
    }
    ;
    function z(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }
    function K(t, e) {
        if (1 !== t.nodeType)
            return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }
    function X(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }
    function G(t) {
        if (!t)
            return document.body;
        switch (t.nodeName) {
        case "HTML":
        case "BODY":
            return t.ownerDocument.body;
        case "#document":
            return t.body
        }
        var e = K(t)
          , n = e.overflow
          , i = e.overflowX
          , o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : G(X(t))
    }
    function $(t) {
        return t && t.referenceNode ? t.referenceNode : t
    }
    var J = U && !(!window.MSInputMethodContext || !document.documentMode)
      , Z = U && /MSIE 10/.test(navigator.userAgent);
    function tt(t) {
        return 11 === t ? J : 10 === t ? Z : J || Z
    }
    function et(t) {
        if (!t)
            return document.documentElement;
        for (var e = tt(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; )
            n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === K(n, "position") ? et(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }
    function nt(t) {
        return null !== t.parentNode ? nt(t.parentNode) : t
    }
    function it(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? t : e
          , o = n ? e : t
          , r = document.createRange();
        r.setStart(i, 0),
        r.setEnd(o, 0);
        var a, s, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(o))
            return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && et(a.firstElementChild) !== a ? et(l) : l;
        var u = nt(t);
        return u.host ? it(u.host, e) : it(t, nt(e).host)
    }
    function ot(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
          , n = "top" === e ? "scrollTop" : "scrollLeft"
          , i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement
              , r = t.ownerDocument.scrollingElement || o;
            return r[n]
        }
        return t[n]
    }
    function rt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , i = ot(e, "top")
          , o = ot(e, "left")
          , r = n ? -1 : 1;
        return t.top += i * r,
        t.bottom += i * r,
        t.left += o * r,
        t.right += o * r,
        t
    }
    function at(t, e) {
        var n = "x" === e ? "Left" : "Top"
          , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"])
    }
    function st(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], tt(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }
    function lt(t) {
        var e = t.body
          , n = t.documentElement
          , i = tt(10) && getComputedStyle(n);
        return {
            height: st("Height", e, n, i),
            width: st("Width", e, n, i)
        }
    }
    var ut = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
      , ft = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }()
      , dt = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
      , ct = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ;
    function ht(t) {
        return ct({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }
    function pt(t) {
        var e = {};
        try {
            if (tt(10)) {
                e = t.getBoundingClientRect();
                var n = ot(t, "top")
                  , i = ot(t, "left");
                e.top += n,
                e.left += i,
                e.bottom += n,
                e.right += i
            } else
                e = t.getBoundingClientRect()
        } catch (t) {}
        var o = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }
          , r = "HTML" === t.nodeName ? lt(t.ownerDocument) : {}
          , a = r.width || t.clientWidth || o.width
          , s = r.height || t.clientHeight || o.height
          , l = t.offsetWidth - a
          , u = t.offsetHeight - s;
        if (l || u) {
            var f = K(t);
            l -= at(f, "x"),
            u -= at(f, "y"),
            o.width -= l,
            o.height -= u
        }
        return ht(o)
    }
    function mt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , i = tt(10)
          , o = "HTML" === e.nodeName
          , r = pt(t)
          , a = pt(e)
          , s = G(t)
          , l = K(e)
          , u = parseFloat(l.borderTopWidth)
          , f = parseFloat(l.borderLeftWidth);
        n && o && (a.top = Math.max(a.top, 0),
        a.left = Math.max(a.left, 0));
        var d = ht({
            top: r.top - a.top - u,
            left: r.left - a.left - f,
            width: r.width,
            height: r.height
        });
        if (d.marginTop = 0,
        d.marginLeft = 0,
        !i && o) {
            var c = parseFloat(l.marginTop)
              , h = parseFloat(l.marginLeft);
            d.top -= u - c,
            d.bottom -= u - c,
            d.left -= f - h,
            d.right -= f - h,
            d.marginTop = c,
            d.marginLeft = h
        }
        return (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (d = rt(d, e)),
        d
    }
    function gt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = t.ownerDocument.documentElement
          , i = mt(t, n)
          , o = Math.max(n.clientWidth, window.innerWidth || 0)
          , r = Math.max(n.clientHeight, window.innerHeight || 0)
          , a = e ? 0 : ot(n)
          , s = e ? 0 : ot(n, "left")
          , l = {
            top: a - i.top + i.marginTop,
            left: s - i.left + i.marginLeft,
            width: o,
            height: r
        };
        return ht(l)
    }
    function _t(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e)
            return !1;
        if ("fixed" === K(t, "position"))
            return !0;
        var n = X(t);
        return !!n && _t(n)
    }
    function vt(t) {
        if (!t || !t.parentElement || tt())
            return document.documentElement;
        for (var e = t.parentElement; e && "none" === K(e, "transform"); )
            e = e.parentElement;
        return e || document.documentElement
    }
    function bt(t, e, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          , r = {
            top: 0,
            left: 0
        }
          , a = o ? vt(t) : it(t, $(e));
        if ("viewport" === i)
            r = gt(a, o);
        else {
            var s = void 0;
            "scrollParent" === i ? "BODY" === (s = G(X(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === i ? t.ownerDocument.documentElement : i;
            var l = mt(s, a, o);
            if ("HTML" !== s.nodeName || _t(a))
                r = l;
            else {
                var u = lt(t.ownerDocument)
                  , f = u.height
                  , d = u.width;
                r.top += l.top - l.marginTop,
                r.bottom = f + l.top,
                r.left += l.left - l.marginLeft,
                r.right = d + l.left
            }
        }
        var c = "number" == typeof (n = n || 0);
        return r.left += c ? n : n.left || 0,
        r.top += c ? n : n.top || 0,
        r.right -= c ? n : n.right || 0,
        r.bottom -= c ? n : n.bottom || 0,
        r
    }
    function yt(t) {
        return t.width * t.height
    }
    function Et(t, e, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))
            return t;
        var a = bt(n, i, r, o)
          , s = {
            top: {
                width: a.width,
                height: e.top - a.top
            },
            right: {
                width: a.right - e.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - e.bottom
            },
            left: {
                width: e.left - a.left,
                height: a.height
            }
        }
          , l = Object.keys(s).map((function(t) {
            return ct({
                key: t
            }, s[t], {
                area: yt(s[t])
            })
        }
        )).sort((function(t, e) {
            return e.area - t.area
        }
        ))
          , u = l.filter((function(t) {
            var e = t.width
              , i = t.height;
            return e >= n.clientWidth && i >= n.clientHeight
        }
        ))
          , f = u.length > 0 ? u[0].key : l[0].key
          , d = t.split("-")[1];
        return f + (d ? "-" + d : "")
    }
    function wt(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
          , o = i ? vt(e) : it(e, $(n));
        return mt(n, o, i)
    }
    function Tt(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t)
          , n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0)
          , i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }
    function Ct(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return e[t]
        }
        ))
    }
    function St(t, e, n) {
        n = n.split("-")[0];
        var i = Tt(t)
          , o = {
            width: i.width,
            height: i.height
        }
          , r = -1 !== ["right", "left"].indexOf(n)
          , a = r ? "top" : "left"
          , s = r ? "left" : "top"
          , l = r ? "height" : "width"
          , u = r ? "width" : "height";
        return o[a] = e[a] + e[l] / 2 - i[l] / 2,
        o[s] = n === s ? e[s] - i[u] : e[Ct(s)],
        o
    }
    function Nt(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
    function Dt(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex)
                return t.findIndex((function(t) {
                    return t.name === n
                }
                ));
            var i = Nt(t, (function(t) {
                return t.name === n
            }
            ));
            return t.indexOf(i)
        }(t, 0, n))).forEach((function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && z(n) && (e.offsets.popper = ht(e.offsets.popper),
            e.offsets.reference = ht(e.offsets.reference),
            e = n(e, t))
        }
        )),
        e
    }
    function At() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = wt(this.state, this.popper, this.reference, this.options.positionFixed),
            t.placement = Et(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            t.originalPlacement = t.placement,
            t.positionFixed = this.options.positionFixed,
            t.offsets.popper = St(this.popper, t.offsets.reference, t.placement),
            t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
            t = Dt(this.modifiers, t),
            this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
            this.options.onCreate(t))
        }
    }
    function kt(t, e) {
        return t.some((function(t) {
            var n = t.name;
            return t.enabled && n === e
        }
        ))
    }
    function It(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i]
              , r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r])
                return r
        }
        return null
    }
    function Ot() {
        return this.state.isDestroyed = !0,
        kt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style.left = "",
        this.popper.style.right = "",
        this.popper.style.bottom = "",
        this.popper.style.willChange = "",
        this.popper.style[It("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function xt(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }
    function jt(t, e, n, i) {
        var o = "BODY" === t.nodeName
          , r = o ? t.ownerDocument.defaultView : t;
        r.addEventListener(e, n, {
            passive: !0
        }),
        o || jt(G(r.parentNode), e, n, i),
        i.push(r)
    }
    function Lt(t, e, n, i) {
        n.updateBound = i,
        xt(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = G(t);
        return jt(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function Pt() {
        this.state.eventsEnabled || (this.state = Lt(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function Ft() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (t = this.reference,
        e = this.state,
        xt(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach((function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }
        )),
        e.updateBound = null,
        e.scrollParents = [],
        e.scrollElement = null,
        e.eventsEnabled = !1,
        e))
    }
    function Rt(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function Bt(t, e) {
        Object.keys(e).forEach((function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Rt(e[n]) && (i = "px"),
            t.style[n] = e[n] + i
        }
        ))
    }
    var Ht = U && /Firefox/i.test(navigator.userAgent);
    function Mt(t, e, n) {
        var i = Nt(t, (function(t) {
            return t.name === e
        }
        ))
          , o = !!i && t.some((function(t) {
            return t.name === n && t.enabled && t.order < i.order
        }
        ));
        if (!o) {
            var r = "`" + e + "`"
              , a = "`" + n + "`";
            console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var qt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , Qt = qt.slice(3);
    function Wt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = Qt.indexOf(t)
          , i = Qt.slice(n + 1).concat(Qt.slice(0, n));
        return e ? i.reverse() : i
    }
    var Ut = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement
                      , n = e.split("-")[0]
                      , i = e.split("-")[1];
                    if (i) {
                        var o = t.offsets
                          , r = o.reference
                          , a = o.popper
                          , s = -1 !== ["bottom", "top"].indexOf(n)
                          , l = s ? "left" : "top"
                          , u = s ? "width" : "height"
                          , f = {
                            start: dt({}, l, r[l]),
                            end: dt({}, l, r[l] + r[u] - a[u])
                        };
                        t.offsets.popper = ct({}, a, f[i])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                    var n, i = e.offset, o = t.placement, r = t.offsets, a = r.popper, s = r.reference, l = o.split("-")[0];
                    return n = Rt(+i) ? [+i, 0] : function(t, e, n, i) {
                        var o = [0, 0]
                          , r = -1 !== ["right", "left"].indexOf(i)
                          , a = t.split(/(\+|\-)/).map((function(t) {
                            return t.trim()
                        }
                        ))
                          , s = a.indexOf(Nt(a, (function(t) {
                            return -1 !== t.search(/,|\s/)
                        }
                        )));
                        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var l = /\s*,\s*|\s+/
                          , u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                        return u = u.map((function(t, i) {
                            var o = (1 === i ? !r : r) ? "height" : "width"
                              , a = !1;
                            return t.reduce((function(t, e) {
                                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                                a = !0,
                                t) : a ? (t[t.length - 1] += e,
                                a = !1,
                                t) : t.concat(e)
                            }
                            ), []).map((function(t) {
                                return function(t, e, n, i) {
                                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                                      , r = +o[1]
                                      , a = o[2];
                                    return r ? 0 === a.indexOf("%") ? ht("%p" === a ? n : i)[e] / 100 * r : "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r : t
                                }(t, o, e, n)
                            }
                            ))
                        }
                        )),
                        u.forEach((function(t, e) {
                            t.forEach((function(n, i) {
                                Rt(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1))
                            }
                            ))
                        }
                        )),
                        o
                    }(i, a, s, l),
                    "left" === l ? (a.top += n[0],
                    a.left -= n[1]) : "right" === l ? (a.top += n[0],
                    a.left += n[1]) : "top" === l ? (a.left += n[0],
                    a.top -= n[1]) : "bottom" === l && (a.left += n[0],
                    a.top += n[1]),
                    t.popper = a,
                    t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.boundariesElement || et(t.instance.popper);
                    t.instance.reference === n && (n = et(n));
                    var i = It("transform")
                      , o = t.instance.popper.style
                      , r = o.top
                      , a = o.left
                      , s = o[i];
                    o.top = "",
                    o.left = "",
                    o[i] = "";
                    var l = bt(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                    o.top = r,
                    o.left = a,
                    o[i] = s,
                    e.boundaries = l;
                    var u = e.priority
                      , f = t.offsets.popper
                      , d = {
                        primary: function(t) {
                            var n = f[t];
                            return f[t] < l[t] && !e.escapeWithReference && (n = Math.max(f[t], l[t])),
                            dt({}, t, n)
                        },
                        secondary: function(t) {
                            var n = "right" === t ? "left" : "top"
                              , i = f[n];
                            return f[t] > l[t] && !e.escapeWithReference && (i = Math.min(f[n], l[t] - ("right" === t ? f.width : f.height))),
                            dt({}, n, i)
                        }
                    };
                    return u.forEach((function(t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        f = ct({}, f, d[e](t))
                    }
                    )),
                    t.offsets.popper = f,
                    t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets
                      , n = e.popper
                      , i = e.reference
                      , o = t.placement.split("-")[0]
                      , r = Math.floor
                      , a = -1 !== ["top", "bottom"].indexOf(o)
                      , s = a ? "right" : "bottom"
                      , l = a ? "left" : "top"
                      , u = a ? "width" : "height";
                    return n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]),
                    n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])),
                    t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, e) {
                    var n;
                    if (!Mt(t.instance.modifiers, "arrow", "keepTogether"))
                        return t;
                    var i = e.element;
                    if ("string" == typeof i) {
                        if (!(i = t.instance.popper.querySelector(i)))
                            return t
                    } else if (!t.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        t;
                    var o = t.placement.split("-")[0]
                      , r = t.offsets
                      , a = r.popper
                      , s = r.reference
                      , l = -1 !== ["left", "right"].indexOf(o)
                      , u = l ? "height" : "width"
                      , f = l ? "Top" : "Left"
                      , d = f.toLowerCase()
                      , c = l ? "left" : "top"
                      , h = l ? "bottom" : "right"
                      , p = Tt(i)[u];
                    s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)),
                    s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]),
                    t.offsets.popper = ht(t.offsets.popper);
                    var m = s[d] + s[u] / 2 - p / 2
                      , g = K(t.instance.popper)
                      , _ = parseFloat(g["margin" + f])
                      , v = parseFloat(g["border" + f + "Width"])
                      , b = m - t.offsets.popper[d] - _ - v;
                    return b = Math.max(Math.min(a[u] - p, b), 0),
                    t.arrowElement = i,
                    t.offsets.arrow = (dt(n = {}, d, Math.round(b)),
                    dt(n, c, ""),
                    n),
                    t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                    if (kt(t.instance.modifiers, "inner"))
                        return t;
                    if (t.flipped && t.placement === t.originalPlacement)
                        return t;
                    var n = bt(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed)
                      , i = t.placement.split("-")[0]
                      , o = Ct(i)
                      , r = t.placement.split("-")[1] || ""
                      , a = [];
                    switch (e.behavior) {
                    case "flip":
                        a = [i, o];
                        break;
                    case "clockwise":
                        a = Wt(i);
                        break;
                    case "counterclockwise":
                        a = Wt(i, !0);
                        break;
                    default:
                        a = e.behavior
                    }
                    return a.forEach((function(s, l) {
                        if (i !== s || a.length === l + 1)
                            return t;
                        i = t.placement.split("-")[0],
                        o = Ct(i);
                        var u = t.offsets.popper
                          , f = t.offsets.reference
                          , d = Math.floor
                          , c = "left" === i && d(u.right) > d(f.left) || "right" === i && d(u.left) < d(f.right) || "top" === i && d(u.bottom) > d(f.top) || "bottom" === i && d(u.top) < d(f.bottom)
                          , h = d(u.left) < d(n.left)
                          , p = d(u.right) > d(n.right)
                          , m = d(u.top) < d(n.top)
                          , g = d(u.bottom) > d(n.bottom)
                          , _ = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g
                          , v = -1 !== ["top", "bottom"].indexOf(i)
                          , b = !!e.flipVariations && (v && "start" === r && h || v && "end" === r && p || !v && "start" === r && m || !v && "end" === r && g)
                          , y = !!e.flipVariationsByContent && (v && "start" === r && p || v && "end" === r && h || !v && "start" === r && g || !v && "end" === r && m)
                          , E = b || y;
                        (c || _ || E) && (t.flipped = !0,
                        (c || _) && (i = a[l + 1]),
                        E && (r = function(t) {
                            return "end" === t ? "start" : "start" === t ? "end" : t
                        }(r)),
                        t.placement = i + (r ? "-" + r : ""),
                        t.offsets.popper = ct({}, t.offsets.popper, St(t.instance.popper, t.offsets.reference, t.placement)),
                        t = Dt(t.instance.modifiers, t, "flip"))
                    }
                    )),
                    t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement
                      , n = e.split("-")[0]
                      , i = t.offsets
                      , o = i.popper
                      , r = i.reference
                      , a = -1 !== ["left", "right"].indexOf(n)
                      , s = -1 === ["top", "left"].indexOf(n);
                    return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0),
                    t.placement = Ct(e),
                    t.offsets.popper = ht(o),
                    t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!Mt(t.instance.modifiers, "hide", "preventOverflow"))
                        return t;
                    var e = t.offsets.reference
                      , n = Nt(t.instance.modifiers, (function(t) {
                        return "preventOverflow" === t.name
                    }
                    )).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide)
                            return t;
                        t.hide = !0,
                        t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide)
                            return t;
                        t.hide = !1,
                        t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.x
                      , i = e.y
                      , o = t.offsets.popper
                      , r = Nt(t.instance.modifiers, (function(t) {
                        return "applyStyle" === t.name
                    }
                    )).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, s, l = void 0 !== r ? r : e.gpuAcceleration, u = et(t.instance.popper), f = pt(u), d = {
                        position: o.position
                    }, c = function(t, e) {
                        var n = t.offsets
                          , i = n.popper
                          , o = n.reference
                          , r = Math.round
                          , a = Math.floor
                          , s = function(t) {
                            return t
                        }
                          , l = r(o.width)
                          , u = r(i.width)
                          , f = -1 !== ["left", "right"].indexOf(t.placement)
                          , d = -1 !== t.placement.indexOf("-")
                          , c = e ? f || d || l % 2 == u % 2 ? r : a : s
                          , h = e ? r : s;
                        return {
                            left: c(l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left),
                            top: h(i.top),
                            bottom: h(i.bottom),
                            right: c(i.right)
                        }
                    }(t, window.devicePixelRatio < 2 || !Ht), h = "bottom" === n ? "top" : "bottom", p = "right" === i ? "left" : "right", m = It("transform");
                    if (s = "bottom" === h ? "HTML" === u.nodeName ? -u.clientHeight + c.bottom : -f.height + c.bottom : c.top,
                    a = "right" === p ? "HTML" === u.nodeName ? -u.clientWidth + c.right : -f.width + c.right : c.left,
                    l && m)
                        d[m] = "translate3d(" + a + "px, " + s + "px, 0)",
                        d[h] = 0,
                        d[p] = 0,
                        d.willChange = "transform";
                    else {
                        var g = "bottom" === h ? -1 : 1
                          , _ = "right" === p ? -1 : 1;
                        d[h] = s * g,
                        d[p] = a * _,
                        d.willChange = h + ", " + p
                    }
                    var v = {
                        "x-placement": t.placement
                    };
                    return t.attributes = ct({}, v, t.attributes),
                    t.styles = ct({}, d, t.styles),
                    t.arrowStyles = ct({}, t.offsets.arrow, t.arrowStyles),
                    t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                    var e, n;
                    return Bt(t.instance.popper, t.styles),
                    e = t.instance.popper,
                    n = t.attributes,
                    Object.keys(n).forEach((function(t) {
                        !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                    }
                    )),
                    t.arrowElement && Object.keys(t.arrowStyles).length && Bt(t.arrowElement, t.arrowStyles),
                    t
                },
                onLoad: function(t, e, n, i, o) {
                    var r = wt(o, e, t, n.positionFixed)
                      , a = Et(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", a),
                    Bt(e, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , Vt = function() {
        function t(e, n) {
            var i = this
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ut(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = Y(this.update.bind(this)),
            this.options = ct({}, t.Defaults, o),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = e && e.jquery ? e[0] : e,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(ct({}, t.Defaults.modifiers, o.modifiers)).forEach((function(e) {
                i.options.modifiers[e] = ct({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
            }
            )),
            this.modifiers = Object.keys(this.options.modifiers).map((function(t) {
                return ct({
                    name: t
                }, i.options.modifiers[t])
            }
            )).sort((function(t, e) {
                return t.order - e.order
            }
            )),
            this.modifiers.forEach((function(t) {
                t.enabled && z(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }
            )),
            this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        return ft(t, [{
            key: "update",
            value: function() {
                return At.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return Ot.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return Pt.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return Ft.call(this)
            }
        }]),
        t
    }();
    Vt.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    Vt.placements = qt,
    Vt.Defaults = Ut;
    var Yt = Vt
      , zt = "dropdown"
      , Kt = "bs.dropdown"
      , Xt = i.default.fn[zt]
      , Gt = new RegExp("38|40|27")
      , $t = "disabled"
      , Jt = "show"
      , Zt = "dropdown-menu-right"
      , te = "hide.bs.dropdown"
      , ee = "hidden.bs.dropdown"
      , ne = "click.bs.dropdown.data-api"
      , ie = "keydown.bs.dropdown.data-api"
      , oe = '[data-toggle="dropdown"]'
      , re = ".dropdown-menu"
      , ae = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , se = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , le = function() {
        function t(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var e = t.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !i.default(this._element).hasClass($t)) {
                var e = i.default(this._menu).hasClass(Jt);
                t._clearMenus(),
                e || this.show(!0)
            }
        }
        ,
        e.show = function(e) {
            if (void 0 === e && (e = !1),
            !(this._element.disabled || i.default(this._element).hasClass($t) || i.default(this._menu).hasClass(Jt))) {
                var n = {
                    relatedTarget: this._element
                }
                  , o = i.default.Event("show.bs.dropdown", n)
                  , r = t._getParentFromElement(this._element);
                if (i.default(r).trigger(o),
                !o.isDefaultPrevented()) {
                    if (!this._inNavbar && e) {
                        if ("undefined" == typeof Yt)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var a = this._element;
                        "parent" === this._config.reference ? a = r : u.isElement(this._config.reference) && (a = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && i.default(r).addClass("position-static"),
                        this._popper = new Yt(a,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === i.default(r).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    i.default(this._menu).toggleClass(Jt),
                    i.default(r).toggleClass(Jt).trigger(i.default.Event("shown.bs.dropdown", n))
                }
            }
        }
        ,
        e.hide = function() {
            if (!this._element.disabled && !i.default(this._element).hasClass($t) && i.default(this._menu).hasClass(Jt)) {
                var e = {
                    relatedTarget: this._element
                }
                  , n = i.default.Event(te, e)
                  , o = t._getParentFromElement(this._element);
                i.default(o).trigger(n),
                n.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                i.default(this._menu).toggleClass(Jt),
                i.default(o).toggleClass(Jt).trigger(i.default.Event(ee, e)))
            }
        }
        ,
        e.dispose = function() {
            i.default.removeData(this._element, Kt),
            i.default(this._element).off(".bs.dropdown"),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        e.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            i.default(this._element).on("click.bs.dropdown", (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            }
            ))
        }
        ,
        e._getConfig = function(t) {
            return t = a({}, this.constructor.Default, i.default(this._element).data(), t),
            u.typeCheckConfig(zt, t, this.constructor.DefaultType),
            t
        }
        ,
        e._getMenuElement = function() {
            if (!this._menu) {
                var e = t._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(re))
            }
            return this._menu
        }
        ,
        e._getPlacement = function() {
            var t = i.default(this._element.parentNode)
              , e = "bottom-start";
            return t.hasClass("dropup") ? e = i.default(this._menu).hasClass(Zt) ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : i.default(this._menu).hasClass(Zt) && (e = "bottom-end"),
            e
        }
        ,
        e._detectNavbar = function() {
            return i.default(this._element).closest(".navbar").length > 0
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element)),
                e
            }
            : e.offset = this._config.offset,
            e
        }
        ,
        e._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }),
            a({}, t, this._config.popperConfig)
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = i.default(this).data(Kt);
                if (n || (n = new t(this,"object" == typeof e ? e : null),
                i.default(this).data(Kt, n)),
                "string" == typeof e) {
                    if ("undefined" == typeof n[e])
                        throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }
            ))
        }
        ,
        t._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var n = [].slice.call(document.querySelectorAll(oe)), o = 0, r = n.length; o < r; o++) {
                    var a = t._getParentFromElement(n[o])
                      , s = i.default(n[o]).data(Kt)
                      , l = {
                        relatedTarget: n[o]
                    };
                    if (e && "click" === e.type && (l.clickEvent = e),
                    s) {
                        var u = s._menu;
                        if (i.default(a).hasClass(Jt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && i.default.contains(a, e.target))) {
                            var f = i.default.Event(te, l);
                            i.default(a).trigger(f),
                            f.isDefaultPrevented() || ("ontouchstart"in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop),
                            n[o].setAttribute("aria-expanded", "false"),
                            s._popper && s._popper.destroy(),
                            i.default(u).removeClass(Jt),
                            i.default(a).removeClass(Jt).trigger(i.default.Event(ee, l)))
                        }
                    }
                }
        }
        ,
        t._getParentFromElement = function(t) {
            var e, n = u.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        t._dataApiKeydownHandler = function(e) {
            if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || i.default(e.target).closest(re).length) : !Gt.test(e.which)) && !this.disabled && !i.default(this).hasClass($t)) {
                var n = t._getParentFromElement(this)
                  , o = i.default(n).hasClass(Jt);
                if (o || 27 !== e.which) {
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    !o || 27 === e.which || 32 === e.which)
                        return 27 === e.which && i.default(n.querySelector(oe)).trigger("focus"),
                        void i.default(this).trigger("click");
                    var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
                        return i.default(t).is(":visible")
                    }
                    ));
                    if (0 !== r.length) {
                        var a = r.indexOf(e.target);
                        38 === e.which && a > 0 && a--,
                        40 === e.which && a < r.length - 1 && a++,
                        a < 0 && (a = 0),
                        r[a].focus()
                    }
                }
            }
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return ae
            }
        }, {
            key: "DefaultType",
            get: function() {
                return se
            }
        }]),
        t
    }();
    i.default(document).on(ie, oe, le._dataApiKeydownHandler).on(ie, re, le._dataApiKeydownHandler).on(ne + " keyup.bs.dropdown.data-api", le._clearMenus).on(ne, oe, (function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        le._jQueryInterface.call(i.default(this), "toggle")
    }
    )).on(ne, ".dropdown form", (function(t) {
        t.stopPropagation()
    }
    )),
    i.default.fn[zt] = le._jQueryInterface,
    i.default.fn[zt].Constructor = le,
    i.default.fn[zt].noConflict = function() {
        return i.default.fn[zt] = Xt,
        le._jQueryInterface
    }
    ;
    var ue = "bs.modal"
      , fe = i.default.fn.modal
      , de = "modal-open"
      , ce = "fade"
      , he = "show"
      , pe = "modal-static"
      , me = "hidden.bs.modal"
      , ge = "show.bs.modal"
      , _e = "focusin.bs.modal"
      , ve = "resize.bs.modal"
      , be = "click.dismiss.bs.modal"
      , ye = "keydown.dismiss.bs.modal"
      , Ee = "mousedown.dismiss.bs.modal"
      , we = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Te = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , Ce = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , Se = function() {
        function t(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(".modal-dialog"),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var e = t.prototype;
        return e.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        e.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                var n = i.default.Event(ge, {
                    relatedTarget: t
                });
                i.default(this._element).trigger(n),
                n.isDefaultPrevented() || (this._isShown = !0,
                i.default(this._element).hasClass(ce) && (this._isTransitioning = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i.default(this._element).on(be, '[data-dismiss="modal"]', (function(t) {
                    return e.hide(t)
                }
                )),
                i.default(this._dialog).on(Ee, (function() {
                    i.default(e._element).one("mouseup.dismiss.bs.modal", (function(t) {
                        i.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((function() {
                    return e._showElement(t)
                }
                )))
            }
        }
        ,
        e.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = i.default.Event("hide.bs.modal");
                if (i.default(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var o = i.default(this._element).hasClass(ce);
                    if (o && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    i.default(document).off(_e),
                    i.default(this._element).removeClass(he),
                    i.default(this._element).off(be),
                    i.default(this._dialog).off(Ee),
                    o) {
                        var r = u.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(u.TRANSITION_END, (function(t) {
                            return e._hideModal(t)
                        }
                        )).emulateTransitionEnd(r)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        e.dispose = function() {
            [window, this._element, this._dialog].forEach((function(t) {
                return i.default(t).off(".bs.modal")
            }
            )),
            i.default(document).off(_e),
            i.default.removeData(this._element, ue),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        e.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        e._getConfig = function(t) {
            return t = a({}, Te, t),
            u.typeCheckConfig("modal", t, Ce),
            t
        }
        ,
        e._triggerBackdropTransition = function() {
            var t = this
              , e = i.default.Event("hidePrevented.bs.modal");
            if (i.default(this._element).trigger(e),
            !e.isDefaultPrevented()) {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                n || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(pe);
                var o = u.getTransitionDurationFromElement(this._dialog);
                i.default(this._element).off(u.TRANSITION_END),
                i.default(this._element).one(u.TRANSITION_END, (function() {
                    t._element.classList.remove(pe),
                    n || i.default(t._element).one(u.TRANSITION_END, (function() {
                        t._element.style.overflowY = ""
                    }
                    )).emulateTransitionEnd(t._element, o)
                }
                )).emulateTransitionEnd(o),
                this._element.focus()
            }
        }
        ,
        e._showElement = function(t) {
            var e = this
              , n = i.default(this._element).hasClass(ce)
              , o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            i.default(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0,
            n && u.reflow(this._element),
            i.default(this._element).addClass(he),
            this._config.focus && this._enforceFocus();
            var r = i.default.Event("shown.bs.modal", {
                relatedTarget: t
            })
              , a = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                i.default(e._element).trigger(r)
            };
            if (n) {
                var s = u.getTransitionDurationFromElement(this._dialog);
                i.default(this._dialog).one(u.TRANSITION_END, a).emulateTransitionEnd(s)
            } else
                a()
        }
        ,
        e._enforceFocus = function() {
            var t = this;
            i.default(document).off(_e).on(_e, (function(e) {
                document !== e.target && t._element !== e.target && 0 === i.default(t._element).has(e.target).length && t._element.focus()
            }
            ))
        }
        ,
        e._setEscapeEvent = function() {
            var t = this;
            this._isShown ? i.default(this._element).on(ye, (function(e) {
                t._config.keyboard && 27 === e.which ? (e.preventDefault(),
                t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
            }
            )) : this._isShown || i.default(this._element).off(ye)
        }
        ,
        e._setResizeEvent = function() {
            var t = this;
            this._isShown ? i.default(window).on(ve, (function(e) {
                return t.handleUpdate(e)
            }
            )) : i.default(window).off(ve)
        }
        ,
        e._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop((function() {
                i.default(document.body).removeClass(de),
                t._resetAdjustments(),
                t._resetScrollbar(),
                i.default(t._element).trigger(me)
            }
            ))
        }
        ,
        e._removeBackdrop = function() {
            this._backdrop && (i.default(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        e._showBackdrop = function(t) {
            var e = this
              , n = i.default(this._element).hasClass(ce) ? ce : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                n && this._backdrop.classList.add(n),
                i.default(this._backdrop).appendTo(document.body),
                i.default(this._element).on(be, (function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                }
                )),
                n && u.reflow(this._backdrop),
                i.default(this._backdrop).addClass(he),
                !t)
                    return;
                if (!n)
                    return void t();
                var o = u.getTransitionDurationFromElement(this._backdrop);
                i.default(this._backdrop).one(u.TRANSITION_END, t).emulateTransitionEnd(o)
            } else if (!this._isShown && this._backdrop) {
                i.default(this._backdrop).removeClass(he);
                var r = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if (i.default(this._element).hasClass(ce)) {
                    var a = u.getTransitionDurationFromElement(this._backdrop);
                    i.default(this._backdrop).one(u.TRANSITION_END, r).emulateTransitionEnd(a)
                } else
                    r()
            } else
                t && t()
        }
        ,
        e._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        e._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        e._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        e._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(we))
                  , n = [].slice.call(document.querySelectorAll(".sticky-top"));
                i.default(e).each((function(e, n) {
                    var o = n.style.paddingRight
                      , r = i.default(n).css("padding-right");
                    i.default(n).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                }
                )),
                i.default(n).each((function(e, n) {
                    var o = n.style.marginRight
                      , r = i.default(n).css("margin-right");
                    i.default(n).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                }
                ));
                var o = document.body.style.paddingRight
                  , r = i.default(document.body).css("padding-right");
                i.default(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
            }
            i.default(document.body).addClass(de)
        }
        ,
        e._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(we));
            i.default(t).each((function(t, e) {
                var n = i.default(e).data("padding-right");
                i.default(e).removeData("padding-right"),
                e.style.paddingRight = n || ""
            }
            ));
            var e = [].slice.call(document.querySelectorAll(".sticky-top"));
            i.default(e).each((function(t, e) {
                var n = i.default(e).data("margin-right");
                "undefined" != typeof n && i.default(e).css("margin-right", n).removeData("margin-right")
            }
            ));
            var n = i.default(document.body).data("padding-right");
            i.default(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        e._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure",
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        t._jQueryInterface = function(e, n) {
            return this.each((function() {
                var o = i.default(this).data(ue)
                  , r = a({}, Te, i.default(this).data(), "object" == typeof e && e ? e : {});
                if (o || (o = new t(this,r),
                i.default(this).data(ue, o)),
                "string" == typeof e) {
                    if ("undefined" == typeof o[e])
                        throw new TypeError('No method named "' + e + '"');
                    o[e](n)
                } else
                    r.show && o.show(n)
            }
            ))
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Te
            }
        }]),
        t
    }();
    i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(t) {
        var e, n = this, o = u.getSelectorFromElement(this);
        o && (e = document.querySelector(o));
        var r = i.default(e).data(ue) ? "toggle" : a({}, i.default(e).data(), i.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var s = i.default(e).one(ge, (function(t) {
            t.isDefaultPrevented() || s.one(me, (function() {
                i.default(n).is(":visible") && n.focus()
            }
            ))
        }
        ));
        Se._jQueryInterface.call(i.default(e), r, this)
    }
    )),
    i.default.fn.modal = Se._jQueryInterface,
    i.default.fn.modal.Constructor = Se,
    i.default.fn.modal.noConflict = function() {
        return i.default.fn.modal = fe,
        Se._jQueryInterface
    }
    ;
    var Ne = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , De = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Ae = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function ke(t, e, n) {
        if (0 === t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), a = function(t, n) {
            var i = r[t]
              , a = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                "continue";
            var s = [].slice.call(i.attributes)
              , l = [].concat(e["*"] || [], e[a] || []);
            s.forEach((function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === Ne.indexOf(n) || Boolean(De.test(t.nodeValue) || Ae.test(t.nodeValue));
                    for (var i = e.filter((function(t) {
                        return t instanceof RegExp
                    }
                    )), o = 0, r = i.length; o < r; o++)
                        if (i[o].test(n))
                            return !0;
                    return !1
                }
                )(t, l) || i.removeAttribute(t.nodeName)
            }
            ))
        }, s = 0, l = r.length; s < l; s++)
            a(s);
        return i.body.innerHTML
    }
    var Ie = "tooltip"
      , Oe = "bs.tooltip"
      , xe = i.default.fn.tooltip
      , je = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Le = ["sanitize", "whiteList", "sanitizeFn"]
      , Pe = "fade"
      , Fe = "show"
      , Re = "show"
      , Be = "out"
      , He = "hover"
      , Me = "focus"
      , qe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Qe = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , We = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Ue = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Ve = function() {
        function t(t, e) {
            if ("undefined" == typeof Yt)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var e = t.prototype;
        return e.enable = function() {
            this._isEnabled = !0
        }
        ,
        e.disable = function() {
            this._isEnabled = !1
        }
        ,
        e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        e.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = i.default(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    i.default(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (i.default(this.getTipElement()).hasClass(Fe))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout),
            i.default.removeData(this.element, this.constructor.DATA_KEY),
            i.default(this.element).off(this.constructor.EVENT_KEY),
            i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && i.default(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        e.show = function() {
            var t = this;
            if ("none" === i.default(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var e = i.default.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                i.default(this.element).trigger(e);
                var n = u.findShadowRoot(this.element)
                  , o = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !o)
                    return;
                var r = this.getTipElement()
                  , a = u.getUID(this.constructor.NAME);
                r.setAttribute("id", a),
                this.element.setAttribute("aria-describedby", a),
                this.setContent(),
                this.config.animation && i.default(r).addClass(Pe);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                  , l = this._getAttachment(s);
                this.addAttachmentClass(l);
                var f = this._getContainer();
                i.default(r).data(this.constructor.DATA_KEY, this),
                i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(r).appendTo(f),
                i.default(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new Yt(this.element,r,this._getPopperConfig(l)),
                i.default(r).addClass(Fe),
                i.default(r).addClass(this.config.customClass),
                "ontouchstart"in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);
                var d = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null,
                    i.default(t.element).trigger(t.constructor.Event.SHOWN),
                    e === Be && t._leave(null, t)
                };
                if (i.default(this.tip).hasClass(Pe)) {
                    var c = u.getTransitionDurationFromElement(this.tip);
                    i.default(this.tip).one(u.TRANSITION_END, d).emulateTransitionEnd(c)
                } else
                    d()
            }
        }
        ,
        e.hide = function(t) {
            var e = this
              , n = this.getTipElement()
              , o = i.default.Event(this.constructor.Event.HIDE)
              , r = function() {
                e._hoverState !== Re && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                i.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            };
            if (i.default(this.element).trigger(o),
            !o.isDefaultPrevented()) {
                if (i.default(n).removeClass(Fe),
                "ontouchstart"in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop),
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                i.default(this.tip).hasClass(Pe)) {
                    var a = u.getTransitionDurationFromElement(n);
                    i.default(n).one(u.TRANSITION_END, r).emulateTransitionEnd(a)
                } else
                    r();
                this._hoverState = ""
            }
        }
        ,
        e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        e.addAttachmentClass = function(t) {
            i.default(this.getTipElement()).addClass("bs-tooltip-" + t)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || i.default(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(i.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()),
            i.default(t).removeClass("fade show")
        }
        ,
        e.setElementContent = function(t, e) {
            "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = ke(e, this.config.whiteList, this.config.sanitizeFn)),
            t.html(e)) : t.text(e) : this.config.html ? i.default(e).parent().is(t) || t.empty().append(e) : t.text(i.default(e).text())
        }
        ,
        e.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        e._getPopperConfig = function(t) {
            var e = this;
            return a({}, {
                placement: t,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                },
                onUpdate: function(t) {
                    return e._handlePopperPlacementChange(t)
                }
            }, this.config.popperConfig)
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element)),
                e
            }
            : e.offset = this.config.offset,
            e
        }
        ,
        e._getContainer = function() {
            return !1 === this.config.container ? document.body : u.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container)
        }
        ,
        e._getAttachment = function(t) {
            return qe[t.toUpperCase()]
        }
        ,
        e._setListeners = function() {
            var t = this;
            this.config.trigger.split(" ").forEach((function(e) {
                if ("click" === e)
                    i.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }
                    ));
                else if ("manual" !== e) {
                    var n = e === He ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                      , o = e === He ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    i.default(t.element).on(n, t.config.selector, (function(e) {
                        return t._enter(e)
                    }
                    )).on(o, t.config.selector, (function(e) {
                        return t._leave(e)
                    }
                    ))
                }
            }
            )),
            this._hideModalHandler = function() {
                t.element && t.hide()
            }
            ,
            i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = a({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        e._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        e._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            i.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Me : He] = !0),
            i.default(e.getTipElement()).hasClass(Fe) || e._hoverState === Re ? e._hoverState = Re : (clearTimeout(e._timeout),
            e._hoverState = Re,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                e._hoverState === Re && e.show()
            }
            ), e.config.delay.show) : e.show())
        }
        ,
        e._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            i.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Me : He] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = Be,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                e._hoverState === Be && e.hide()
            }
            ), e.config.delay.hide) : e.hide())
        }
        ,
        e._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        e._getConfig = function(t) {
            var e = i.default(this.element).data();
            return Object.keys(e).forEach((function(t) {
                -1 !== Le.indexOf(t) && delete e[t]
            }
            )),
            "number" == typeof (t = a({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            u.typeCheckConfig(Ie, t, this.constructor.DefaultType),
            t.sanitize && (t.template = ke(t.template, t.whiteList, t.sanitizeFn)),
            t
        }
        ,
        e._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        e._cleanTipClass = function() {
            var t = i.default(this.getTipElement())
              , e = t.attr("class").match(je);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        e._handlePopperPlacementChange = function(t) {
            this.tip = t.instance.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        e._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (i.default(t).removeClass(Pe),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = i.default(this)
                  , o = n.data(Oe)
                  , r = "object" == typeof e && e;
                if ((o || !/dispose|hide/.test(e)) && (o || (o = new t(this,r),
                n.data(Oe, o)),
                "string" == typeof e)) {
                    if ("undefined" == typeof o[e])
                        throw new TypeError('No method named "' + e + '"');
                    o[e]()
                }
            }
            ))
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Qe
            }
        }, {
            key: "NAME",
            get: function() {
                return Ie
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Oe
            }
        }, {
            key: "Event",
            get: function() {
                return Ue
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return We
            }
        }]),
        t
    }();
    i.default.fn.tooltip = Ve._jQueryInterface,
    i.default.fn.tooltip.Constructor = Ve,
    i.default.fn.tooltip.noConflict = function() {
        return i.default.fn.tooltip = xe,
        Ve._jQueryInterface
    }
    ;
    var Ye = "bs.popover"
      , ze = i.default.fn.popover
      , Ke = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Xe = a({}, Ve.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Ge = a({}, Ve.DefaultType, {
        content: "(string|element|function)"
    })
      , $e = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , Je = function(t) {
        var e, n;
        function o() {
            return t.apply(this, arguments) || this
        }
        n = t,
        (e = o).prototype = Object.create(n.prototype),
        e.prototype.constructor = e,
        s(e, n);
        var a = o.prototype;
        return a.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        a.addAttachmentClass = function(t) {
            i.default(this.getTipElement()).addClass("bs-popover-" + t)
        }
        ,
        a.getTipElement = function() {
            return this.tip = this.tip || i.default(this.config.template)[0],
            this.tip
        }
        ,
        a.setContent = function() {
            var t = i.default(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show")
        }
        ,
        a._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        a._cleanTipClass = function() {
            var t = i.default(this.getTipElement())
              , e = t.attr("class").match(Ke);
            null !== e && e.length > 0 && t.removeClass(e.join(""))
        }
        ,
        o._jQueryInterface = function(t) {
            return this.each((function() {
                var e = i.default(this).data(Ye)
                  , n = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this,n),
                i.default(this).data(Ye, e)),
                "string" == typeof t)) {
                    if ("undefined" == typeof e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        r(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Xe
            }
        }, {
            key: "NAME",
            get: function() {
                return "popover"
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ye
            }
        }, {
            key: "Event",
            get: function() {
                return $e
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ge
            }
        }]),
        o
    }(Ve);
    i.default.fn.popover = Je._jQueryInterface,
    i.default.fn.popover.Constructor = Je,
    i.default.fn.popover.noConflict = function() {
        return i.default.fn.popover = ze,
        Je._jQueryInterface
    }
    ;
    var Ze = "scrollspy"
      , tn = "bs.scrollspy"
      , en = i.default.fn[Ze]
      , nn = "active"
      , on = "position"
      , rn = ".nav, .list-group"
      , an = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , sn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , ln = function() {
        function t(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            i.default(this._scrollElement).on("scroll.bs.scrollspy", (function(t) {
                return n._process(t)
            }
            )),
            this.refresh(),
            this._process()
        }
        var e = t.prototype;
        return e.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? "offset" : on
              , n = "auto" === this._config.method ? e : this._config.method
              , o = n === on ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
                var e, r = u.getSelectorFromElement(t);
                if (r && (e = document.querySelector(r)),
                e) {
                    var a = e.getBoundingClientRect();
                    if (a.width || a.height)
                        return [i.default(e)[n]().top + o, r]
                }
                return null
            }
            )).filter(Boolean).sort((function(t, e) {
                return t[0] - e[0]
            }
            )).forEach((function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            }
            ))
        }
        ,
        e.dispose = function() {
            i.default.removeData(this._element, tn),
            i.default(this._scrollElement).off(".bs.scrollspy"),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        e._getConfig = function(t) {
            if ("string" != typeof (t = a({}, an, "object" == typeof t && t ? t : {})).target && u.isElement(t.target)) {
                var e = i.default(t.target).attr("id");
                e || (e = u.getUID(Ze),
                i.default(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return u.typeCheckConfig(Ze, t, sn),
            t
        }
        ,
        e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        e._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; )
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
            }
        }
        ,
        e._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",").map((function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            }
            ))
              , n = i.default([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(nn),
            n.addClass(nn)) : (n.addClass(nn),
            n.parents(rn).prev(".nav-link, .list-group-item").addClass(nn),
            n.parents(rn).prev(".nav-item").children(".nav-link").addClass(nn)),
            i.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        ,
        e._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
                return t.classList.contains(nn)
            }
            )).forEach((function(t) {
                return t.classList.remove(nn)
            }
            ))
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = i.default(this).data(tn);
                if (n || (n = new t(this,"object" == typeof e && e),
                i.default(this).data(tn, n)),
                "string" == typeof e) {
                    if ("undefined" == typeof n[e])
                        throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }
            ))
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "Default",
            get: function() {
                return an
            }
        }]),
        t
    }();
    i.default(window).on("load.bs.scrollspy.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--; ) {
            var n = i.default(t[e]);
            ln._jQueryInterface.call(n, n.data())
        }
    }
    )),
    i.default.fn[Ze] = ln._jQueryInterface,
    i.default.fn[Ze].Constructor = ln,
    i.default.fn[Ze].noConflict = function() {
        return i.default.fn[Ze] = en,
        ln._jQueryInterface
    }
    ;
    var un = "bs.tab"
      , fn = i.default.fn.tab
      , dn = "active"
      , cn = "fade"
      , hn = "show"
      , pn = ".active"
      , mn = "> li > .active"
      , gn = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass(dn) || i.default(this._element).hasClass("disabled") || this._element.hasAttribute("disabled"))) {
                var e, n, o = i.default(this._element).closest(".nav, .list-group")[0], r = u.getSelectorFromElement(this._element);
                if (o) {
                    var a = "UL" === o.nodeName || "OL" === o.nodeName ? mn : pn;
                    n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1]
                }
                var s = i.default.Event("hide.bs.tab", {
                    relatedTarget: this._element
                })
                  , l = i.default.Event("show.bs.tab", {
                    relatedTarget: n
                });
                if (n && i.default(n).trigger(s),
                i.default(this._element).trigger(l),
                !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (e = document.querySelector(r)),
                    this._activate(this._element, o);
                    var f = function() {
                        var e = i.default.Event("hidden.bs.tab", {
                            relatedTarget: t._element
                        })
                          , o = i.default.Event("shown.bs.tab", {
                            relatedTarget: n
                        });
                        i.default(n).trigger(e),
                        i.default(t._element).trigger(o)
                    };
                    e ? this._activate(e, e.parentNode, f) : f()
                }
            }
        }
        ,
        e.dispose = function() {
            i.default.removeData(this._element, un),
            this._element = null
        }
        ,
        e._activate = function(t, e, n) {
            var o = this
              , r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.default(e).children(pn) : i.default(e).find(mn))[0]
              , a = n && r && i.default(r).hasClass(cn)
              , s = function() {
                return o._transitionComplete(t, r, n)
            };
            if (r && a) {
                var l = u.getTransitionDurationFromElement(r);
                i.default(r).removeClass(hn).one(u.TRANSITION_END, s).emulateTransitionEnd(l)
            } else
                s()
        }
        ,
        e._transitionComplete = function(t, e, n) {
            if (e) {
                i.default(e).removeClass(dn);
                var o = i.default(e.parentNode).find("> .dropdown-menu .active")[0];
                o && i.default(o).removeClass(dn),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            i.default(t).addClass(dn),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            u.reflow(t),
            t.classList.contains(cn) && t.classList.add(hn);
            var r = t.parentNode;
            if (r && "LI" === r.nodeName && (r = r.parentNode),
            r && i.default(r).hasClass("dropdown-menu")) {
                var a = i.default(t).closest(".dropdown")[0];
                if (a) {
                    var s = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
                    i.default(s).addClass(dn)
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = i.default(this)
                  , o = n.data(un);
                if (o || (o = new t(this),
                n.data(un, o)),
                "string" == typeof e) {
                    if ("undefined" == typeof o[e])
                        throw new TypeError('No method named "' + e + '"');
                    o[e]()
                }
            }
            ))
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }]),
        t
    }();
    i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
        t.preventDefault(),
        gn._jQueryInterface.call(i.default(this), "show")
    }
    )),
    i.default.fn.tab = gn._jQueryInterface,
    i.default.fn.tab.Constructor = gn,
    i.default.fn.tab.noConflict = function() {
        return i.default.fn.tab = fn,
        gn._jQueryInterface
    }
    ;
    var _n = "bs.toast"
      , vn = i.default.fn.toast
      , bn = "hide"
      , yn = "show"
      , En = "showing"
      , wn = "click.dismiss.bs.toast"
      , Tn = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , Cn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Sn = function() {
        function t(t, e) {
            this._element = t,
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        var e = t.prototype;
        return e.show = function() {
            var t = this
              , e = i.default.Event("show.bs.toast");
            if (i.default(this._element).trigger(e),
            !e.isDefaultPrevented()) {
                this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
                var n = function() {
                    t._element.classList.remove(En),
                    t._element.classList.add(yn),
                    i.default(t._element).trigger("shown.bs.toast"),
                    t._config.autohide && (t._timeout = setTimeout((function() {
                        t.hide()
                    }
                    ), t._config.delay))
                };
                if (this._element.classList.remove(bn),
                u.reflow(this._element),
                this._element.classList.add(En),
                this._config.animation) {
                    var o = u.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(u.TRANSITION_END, n).emulateTransitionEnd(o)
                } else
                    n()
            }
        }
        ,
        e.hide = function() {
            if (this._element.classList.contains(yn)) {
                var t = i.default.Event("hide.bs.toast");
                i.default(this._element).trigger(t),
                t.isDefaultPrevented() || this._close()
            }
        }
        ,
        e.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains(yn) && this._element.classList.remove(yn),
            i.default(this._element).off(wn),
            i.default.removeData(this._element, _n),
            this._element = null,
            this._config = null
        }
        ,
        e._getConfig = function(t) {
            return t = a({}, Tn, i.default(this._element).data(), "object" == typeof t && t ? t : {}),
            u.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
        }
        ,
        e._setListeners = function() {
            var t = this;
            i.default(this._element).on(wn, '[data-dismiss="toast"]', (function() {
                return t.hide()
            }
            ))
        }
        ,
        e._close = function() {
            var t = this
              , e = function() {
                t._element.classList.add(bn),
                i.default(t._element).trigger("hidden.bs.toast")
            };
            if (this._element.classList.remove(yn),
            this._config.animation) {
                var n = u.getTransitionDurationFromElement(this._element);
                i.default(this._element).one(u.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        e._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = i.default(this)
                  , o = n.data(_n);
                if (o || (o = new t(this,"object" == typeof e && e),
                n.data(_n, o)),
                "string" == typeof e) {
                    if ("undefined" == typeof o[e])
                        throw new TypeError('No method named "' + e + '"');
                    o[e](this)
                }
            }
            ))
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.2"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Cn
            }
        }, {
            key: "Default",
            get: function() {
                return Tn
            }
        }]),
        t
    }();
    i.default.fn.toast = Sn._jQueryInterface,
    i.default.fn.toast.Constructor = Sn,
    i.default.fn.toast.noConflict = function() {
        return i.default.fn.toast = vn,
        Sn._jQueryInterface
    }
    ,
    t.Alert = c,
    t.Button = b,
    t.Carousel = O,
    t.Collapse = W,
    t.Dropdown = le,
    t.Modal = Se,
    t.Popover = Je,
    t.Scrollspy = ln,
    t.Tab = gn,
    t.Toast = Sn,
    t.Tooltip = Ve,
    t.Util = u,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));
// jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(a, n, f) {
    a instanceof String && (a = String(a));
    for (var p = a.length, k = 0; k < p; k++) {
        var b = a[k];
        if (n.call(f, b, k, a))
            return {
                i: k,
                v: b
            }
    }
    return {
        i: -1,
        v: void 0
    }
}
;
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, n, f) {
    a != Array.prototype && a != Object.prototype && (a[n] = f.value)
}
;
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, n, f, p) {
    if (n) {
        f = $jscomp.global;
        a = a.split(".");
        for (p = 0; p < a.length - 1; p++) {
            var k = a[p];
            k in f || (f[k] = {});
            f = f[k]
        }
        a = a[a.length - 1];
        p = f[a];
        n = n(p);
        n != p && null != n && $jscomp.defineProperty(f, a, {
            configurable: !0,
            writable: !0,
            value: n
        })
    }
}
;
$jscomp.polyfill("Array.prototype.find", function(a) {
    return a ? a : function(a, f) {
        return $jscomp.findInternal(this, a, f).v
    }
}, "es6", "es3");
(function(a, n, f) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === typeof exports && "undefined" === typeof Meteor ? module.exports = a(require("jquery")) : a(n || f)
}
)(function(a) {
    var n = function(b, d, e) {
        var c = {
            invalid: [],
            getCaret: function() {
                try {
                    var a = 0
                      , r = b.get(0)
                      , h = document.selection
                      , d = r.selectionStart;
                    if (h && -1 === navigator.appVersion.indexOf("MSIE 10")) {
                        var e = h.createRange();
                        e.moveStart("character", -c.val().length);
                        a = e.text.length
                    } else if (d || "0" === d)
                        a = d;
                    return a
                } catch (C) {}
            },
            setCaret: function(a) {
                try {
                    if (b.is(":focus")) {
                        var c = b.get(0);
                        if (c.setSelectionRange)
                            c.setSelectionRange(a, a);
                        else {
                            var g = c.createTextRange();
                            g.collapse(!0);
                            g.moveEnd("character", a);
                            g.moveStart("character", a);
                            g.select()
                        }
                    }
                } catch (B) {}
            },
            events: function() {
                b.on("keydown.mask", function(a) {
                    b.data("mask-keycode", a.keyCode || a.which);
                    b.data("mask-previus-value", b.val());
                    b.data("mask-previus-caret-pos", c.getCaret());
                    c.maskDigitPosMapOld = c.maskDigitPosMap
                }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        b.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    b.data("changed", !0)
                }).on("blur.mask", function() {
                    f === c.val() || b.data("changed") || b.trigger("change");
                    b.data("changed", !1)
                }).on("blur.mask", function() {
                    f = c.val()
                }).on("focus.mask", function(b) {
                    !0 === e.selectOnFocus && a(b.target).select()
                }).on("focusout.mask", function() {
                    e.clearIfNotMatch && !k.test(c.val()) && c.val("")
                })
            },
            getRegexMask: function() {
                for (var a = [], b, c, e, t, f = 0; f < d.length; f++)
                    (b = l.translation[d.charAt(f)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""),
                    e = b.optional,
                    (b = b.recursive) ? (a.push(d.charAt(f)),
                    t = {
                        digit: d.charAt(f),
                        pattern: c
                    }) : a.push(e || b ? c + "?" : c)) : a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                a = a.join("");
                t && (a = a.replace(new RegExp("(" + t.digit + "(.*" + t.digit + ")?)"), "($1)?").replace(new RegExp(t.digit,"g"), t.pattern));
                return new RegExp(a)
            },
            destroyEvents: function() {
                b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            },
            val: function(a) {
                var c = b.is("input") ? "val" : "text";
                if (0 < arguments.length) {
                    if (b[c]() !== a)
                        b[c](a);
                    c = b
                } else
                    c = b[c]();
                return c
            },
            calculateCaretPosition: function(a) {
                var d = c.getMasked()
                  , h = c.getCaret();
                if (a !== d) {
                    var e = b.data("mask-previus-caret-pos") || 0;
                    d = d.length;
                    var g = a.length, f = a = 0, l = 0, k = 0, m;
                    for (m = h; m < d && c.maskDigitPosMap[m]; m++)
                        f++;
                    for (m = h - 1; 0 <= m && c.maskDigitPosMap[m]; m--)
                        a++;
                    for (m = h - 1; 0 <= m; m--)
                        c.maskDigitPosMap[m] && l++;
                    for (m = e - 1; 0 <= m; m--)
                        c.maskDigitPosMapOld[m] && k++;
                    h > g ? h = 10 * d : e >= h && e !== g ? c.maskDigitPosMapOld[h] || (e = h,
                    h = h - (k - l) - a,
                    c.maskDigitPosMap[h] && (h = e)) : h > e && (h = h + (l - k) + f)
                }
                return h
            },
            behaviour: function(d) {
                d = d || window.event;
                c.invalid = [];
                var e = b.data("mask-keycode");
                if (-1 === a.inArray(e, l.byPassKeys)) {
                    e = c.getMasked();
                    var h = c.getCaret()
                      , g = b.data("mask-previus-value") || "";
                    setTimeout(function() {
                        c.setCaret(c.calculateCaretPosition(g))
                    }, a.jMaskGlobals.keyStrokeCompensation);
                    c.val(e);
                    c.setCaret(h);
                    return c.callbacks(d)
                }
            },
            getMasked: function(a, b) {
                var h = []
                  , f = void 0 === b ? c.val() : b + ""
                  , g = 0
                  , k = d.length
                  , n = 0
                  , p = f.length
                  , m = 1
                  , r = "push"
                  , u = -1
                  , w = 0;
                b = [];
                if (e.reverse) {
                    r = "unshift";
                    m = -1;
                    var x = 0;
                    g = k - 1;
                    n = p - 1;
                    var A = function() {
                        return -1 < g && -1 < n
                    }
                } else
                    x = k - 1,
                    A = function() {
                        return g < k && n < p
                    }
                    ;
                for (var z; A(); ) {
                    var y = d.charAt(g)
                      , v = f.charAt(n)
                      , q = l.translation[y];
                    if (q)
                        v.match(q.pattern) ? (h[r](v),
                        q.recursive && (-1 === u ? u = g : g === x && g !== u && (g = u - m),
                        x === u && (g -= m)),
                        g += m) : v === z ? (w--,
                        z = void 0) : q.optional ? (g += m,
                        n -= m) : q.fallback ? (h[r](q.fallback),
                        g += m,
                        n -= m) : c.invalid.push({
                            p: n,
                            v: v,
                            e: q.pattern
                        }),
                        n += m;
                    else {
                        if (!a)
                            h[r](y);
                        v === y ? (b.push(n),
                        n += m) : (z = y,
                        b.push(n + w),
                        w++);
                        g += m
                    }
                }
                a = d.charAt(x);
                k !== p + 1 || l.translation[a] || h.push(a);
                h = h.join("");
                c.mapMaskdigitPositions(h, b, p);
                return h
            },
            mapMaskdigitPositions: function(a, b, d) {
                a = e.reverse ? a.length - d : 0;
                c.maskDigitPosMap = {};
                for (d = 0; d < b.length; d++)
                    c.maskDigitPosMap[b[d] + a] = 1
            },
            callbacks: function(a) {
                var g = c.val()
                  , h = g !== f
                  , k = [g, a, b, e]
                  , l = function(a, b, c) {
                    "function" === typeof e[a] && b && e[a].apply(this, c)
                };
                l("onChange", !0 === h, k);
                l("onKeyPress", !0 === h, k);
                l("onComplete", g.length === d.length, k);
                l("onInvalid", 0 < c.invalid.length, [g, a, b, c.invalid, e])
            }
        };
        b = a(b);
        var l = this, f = c.val(), k;
        d = "function" === typeof d ? d(c.val(), void 0, b, e) : d;
        l.mask = d;
        l.options = e;
        l.remove = function() {
            var a = c.getCaret();
            l.options.placeholder && b.removeAttr("placeholder");
            b.data("mask-maxlength") && b.removeAttr("maxlength");
            c.destroyEvents();
            c.val(l.getCleanVal());
            c.setCaret(a);
            return b
        }
        ;
        l.getCleanVal = function() {
            return c.getMasked(!0)
        }
        ;
        l.getMaskedVal = function(a) {
            return c.getMasked(!1, a)
        }
        ;
        l.init = function(g) {
            g = g || !1;
            e = e || {};
            l.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
            l.byPassKeys = a.jMaskGlobals.byPassKeys;
            l.translation = a.extend({}, a.jMaskGlobals.translation, e.translation);
            l = a.extend(!0, {}, l, e);
            k = c.getRegexMask();
            if (g)
                c.events(),
                c.val(c.getMasked());
            else {
                e.placeholder && b.attr("placeholder", e.placeholder);
                b.data("mask") && b.attr("autocomplete", "off");
                g = 0;
                for (var f = !0; g < d.length; g++) {
                    var h = l.translation[d.charAt(g)];
                    if (h && h.recursive) {
                        f = !1;
                        break
                    }
                }
                f && b.attr("maxlength", d.length).data("mask-maxlength", !0);
                c.destroyEvents();
                c.events();
                g = c.getCaret();
                c.val(c.getMasked());
                c.setCaret(g)
            }
        }
        ;
        l.init(!b.is("input"))
    };
    a.maskWatchers = {};
    var f = function() {
        var b = a(this)
          , d = {}
          , e = b.attr("data-mask");
        b.attr("data-mask-reverse") && (d.reverse = !0);
        b.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch = !0);
        "true" === b.attr("data-mask-selectonfocus") && (d.selectOnFocus = !0);
        if (p(b, e, d))
            return b.data("mask", new n(this,e,d))
    }
      , p = function(b, d, e) {
        e = e || {};
        var c = a(b).data("mask")
          , f = JSON.stringify;
        b = a(b).val() || a(b).text();
        try {
            return "function" === typeof d && (d = d(b)),
            "object" !== typeof c || f(c.options) !== f(e) || c.mask !== d
        } catch (w) {}
    }
      , k = function(a) {
        var b = document.createElement("div");
        a = "on" + a;
        var e = a in b;
        e || (b.setAttribute(a, "return;"),
        e = "function" === typeof b[a]);
        return e
    };
    a.fn.mask = function(b, d) {
        d = d || {};
        var e = this.selector
          , c = a.jMaskGlobals
          , f = c.watchInterval;
        c = d.watchInputs || c.watchInputs;
        var k = function() {
            if (p(this, b, d))
                return a(this).data("mask", new n(this,b,d))
        };
        a(this).each(k);
        e && "" !== e && c && (clearInterval(a.maskWatchers[e]),
        a.maskWatchers[e] = setInterval(function() {
            a(document).find(e).each(k)
        }, f));
        return this
    }
    ;
    a.fn.masked = function(a) {
        return this.data("mask").getMaskedVal(a)
    }
    ;
    a.fn.unmask = function() {
        clearInterval(a.maskWatchers[this.selector]);
        delete a.maskWatchers[this.selector];
        return this.each(function() {
            var b = a(this).data("mask");
            b && b.remove().removeData("mask")
        })
    }
    ;
    a.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }
    ;
    a.applyDataMask = function(b) {
        b = b || a.jMaskGlobals.maskElements;
        (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)
    }
    ;
    k = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        keyStrokeCompensation: 10,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && k("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    a.jMaskGlobals = a.jMaskGlobals || {};
    k = a.jMaskGlobals = a.extend(!0, {}, k, a.jMaskGlobals);
    k.dataMask && a.applyDataMask();
    setInterval(function() {
        a.jMaskGlobals.watchDataMask && a.applyDataMask()
    }, k.watchInterval)
}, window.jQuery, window.Zepto);
!function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            i.extend(n, n.initials),
            n.activeBreakpoint = null,
            n.animType = null,
            n.animProp = null,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null,
            n.respondTo = null,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = i(t),
            n.$slidesCache = null,
            n.transformType = null,
            n.transitionType = null,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null,
            s = i(t).data("slick") || {},
            n.options = i.extend({}, n.defaults, o, s),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = i.proxy(n.autoPlay, n),
            n.autoPlayClear = i.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
            n.changeSlide = i.proxy(n.changeSlide, n),
            n.clickHandler = i.proxy(n.clickHandler, n),
            n.selectHandler = i.proxy(n.selectHandler, n),
            n.setPosition = i.proxy(n.setPosition, n),
            n.swipeHandler = i.proxy(n.swipeHandler, n),
            n.dragHandler = i.proxy(n.dragHandler, n),
            n.keyHandler = i.proxy(n.keyHandler, n),
            n.instanceUid = e++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t)
            o = t,
            t = null;
        else if (t < 0 || t >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, t) {
        var o = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i),
                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(o),
        t && setTimeout(function() {
            s.disableTransition(),
            t.call()
        }, s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)),
        t
    }
    ,
    e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(i) {
        var e = this
          , t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var i = this
          , e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
        i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0; e <= o.getDotCount(); e += 1)
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots),
            o.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(),
        n = l.$slider.children(),
        l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o),
            l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints)
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            l = s),
            e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }
    ,
    e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        n = r.slideCount % r.options.slidesToScroll != 0,
        o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
            break;
        case "next":
            s = 0 === o ? r.options.slidesToScroll : o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
            break;
        case "index":
            var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(),
        t = 0,
        i > e[e.length - 1])
            i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i))
    }
    ,
    e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(),
        i.stopPropagation(),
        i.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    e.prototype.disableTransition = function(i) {
        var e = this
          , t = {};
        t[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }),
        t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
        t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }),
        e && setTimeout(function() {
            t.disableTransition(i),
            e.call()
        }, t.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i),
        e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var i = this
          , e = 0
          , t = 0
          , o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow)
                ++o;
            else
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode)
            o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount; )
                ++o,
                e = t + i.options.slidesToScroll,
                t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else
            o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }
    ,
    e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0,
        t = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        s = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
        r = t * n.options.slidesToShow * s),
        n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
        r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (i + n.options.slidesToShow - n.slideCount) * t),
        n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
        r = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        e += (n.$list.width() - o.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
        o = -1 * e.options.slidesToScroll,
        i = 2 * e.slideCount); t < i; )
            s.push(t),
            t = o + e.options.slidesToScroll,
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return e = n,
                !1
        }),
        Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , t = Math.ceil(e.slideCount / e.options.slidesToShow)
          , o = e.getNavigableIndexes().filter(function(i) {
            return i >= 0 && i < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }),
            -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }),
            i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
            e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
        i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
        i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this)
                  , t = i(this).attr("data-lazy")
                  , o = i(this).attr("data-srcset")
                  , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o),
                        s && e.attr("sizes", s)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        s = Math.ceil(o + n.options.slidesToShow),
        !0 === n.options.fade && (o > 0 && o--,
        s <= n.slideCount && s++)),
        t = n.$slider.find(".slick-slide").slice(o, s),
        "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                r < 0 && (r = n.slideCount - 1),
                t = (t = t.add(d.eq(r))).add(d.eq(l)),
                r--,
                l++;
        e(t),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(),
        i.$slideTrack.css({
            opacity: 1
        }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(),
        i.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(),
        i.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(),
        i.options.autoplay = !0,
        i.paused = !1,
        i.focussed = !1,
        i.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(),
        o = t.attr("data-lazy"),
        s = t.attr("data-srcset"),
        n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s),
            n && t.attr("sizes", n)),
            t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === l.options.adaptiveHeight && l.setPosition(),
            l.$slider.trigger("lazyLoaded", [l, t, o]),
            l.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            l.$slider.trigger("lazyLoadError", [l, t, o]),
            l.progressiveLazyLoad())
        }
        ,
        r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }
    ,
    e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        t = s.currentSlide,
        s.destroy(!0),
        i.extend(s, s.initials, {
            currentSlide: t
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1,
                n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0; )
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                        o--;
                    s.breakpoints.push(t),
                    s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            return !1;
        o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i),
        e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        s[o.positionProp] = i,
        !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
        !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
        o.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })),
        i.listWidth = i.$list.width(),
        i.listHeight = i.$list.height(),
        !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1,
            !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }),
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0],
        l = arguments[1],
        n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
        s = arguments[1],
        l = arguments[2],
        "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
            r.options[o] = s;
        else if ("multiple" === n)
            i.each(o, function(i, e) {
                r.options[i] = e
            });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive))
                    r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i])
    }
    ,
    e.prototype.setProps = function() {
        var i = this
          , e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left",
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
        void 0 !== e.OTransform && (i.animType = "OTransform",
        i.transformType = "-o-transform",
        i.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform && (i.animType = "MozTransform",
        i.transformType = "-moz-transform",
        i.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
        i.transformType = "-webkit-transform",
        i.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform && (i.animType = "msTransform",
        i.transformType = "-ms-transform",
        i.transitionType = "msTransition",
        void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
        i.transformType = "transform",
        i.transitionType = "transition"),
        i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }
    ,
    e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center")
        } else
            i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (t = null,
        s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - o; e -= 1)
                t = e - 1,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1)
                t = e,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(),
        e.interrupted = i
    }
    ,
    e.prototype.selectHandler = function(e) {
        var t = this
          , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
          , s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i),
            o = i,
            d = a.getLeft(o),
            r = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                n = a.currentSlide,
                a.currentSlide = s,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== t ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s),
                    void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
        i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        t = Math.atan2(e, i),
        (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1,
            !1;
        if (o.interrupted = !1,
        o.shouldClick = !(o.touchObject.swipeLength > 10),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
            case "left":
            case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, t]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
            }
    }
    ,
    e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
        !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
        l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
        !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
        !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
        t = l.swipeDirection(),
        void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
        i.preventDefault()),
        s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
        o = l.touchObject.swipeLength,
        l.touchObject.edgeHit = !1,
        !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
        l.touchObject.edgeHit = !0),
        !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
        !1) : void l.setCSS(l.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0,
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
            return t.touchObject = {},
            !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
        t.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }
    ,
    i.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
            void 0 !== t)
                return t;
        return o
    }
});
// @fancyapps/ui/Fancybox v4.0.31
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).window = t.window || {})
}(this, (function(t) {
    "use strict";
    function e(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            i.push.apply(i, n)
        }
        return i
    }
    function i(t) {
        for (var i = 1; i < arguments.length; i++) {
            var n = null != arguments[i] ? arguments[i] : {};
            i % 2 ? e(Object(n), !0).forEach((function(e) {
                r(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        n(t)
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    function s(t, e, i) {
        return e && a(t.prototype, e),
        i && a(t, i),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function r(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i,
        t
    }
    function l(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e && h(t, e)
    }
    function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        c(t)
    }
    function h(t, e) {
        return h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        h(t, e)
    }
    function d(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function u(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return d(t)
    }
    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, n = c(t);
            if (e) {
                var o = c(this).constructor;
                i = Reflect.construct(n, arguments, o)
            } else
                i = n.apply(this, arguments);
            return u(this, i)
        }
    }
    function v(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)); )
            ;
        return t
    }
    function p() {
        return p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var n = v(t, e);
            if (n) {
                var o = Object.getOwnPropertyDescriptor(n, e);
                return o.get ? o.get.call(arguments.length < 3 ? t : i) : o.value
            }
        }
        ,
        p.apply(this, arguments)
    }
    function g(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == i)
                return;
            var n, o, a = [], s = !0, r = !1;
            try {
                for (i = i.call(t); !(s = (n = i.next()).done) && (a.push(n.value),
                !e || a.length !== e); s = !0)
                    ;
            } catch (t) {
                r = !0,
                o = t
            } finally {
                try {
                    s || null == i.return || i.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            return a
        }(t, e) || y(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function m(t) {
        return function(t) {
            if (Array.isArray(t))
                return b(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                return Array.from(t)
        }(t) || y(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function y(t, e) {
        if (t) {
            if ("string" == typeof t)
                return b(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name),
            "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? b(t, e) : void 0
        }
    }
    function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++)
            n[i] = t[i];
        return n
    }
    function x(t, e) {
        var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!i) {
            if (Array.isArray(t) || (i = y(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0, r = !1;
        return {
            s: function() {
                i = i.call(t)
            },
            n: function() {
                var t = i.next();
                return s = t.done,
                t
            },
            e: function(t) {
                r = !0,
                a = t
            },
            f: function() {
                try {
                    s || null == i.return || i.return()
                } finally {
                    if (r)
                        throw a
                }
            }
        }
    }
    var w = function(t) {
        return "object" === n(t) && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t)
    }
      , k = function t() {
        for (var e = !1, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
            o[a] = arguments[a];
        "boolean" == typeof o[0] && (e = o.shift());
        var s = o[0];
        if (!s || "object" !== n(s))
            throw new Error("extendee must be an object");
        for (var r = o.slice(1), l = r.length, c = 0; c < l; c++) {
            var h = r[c];
            for (var d in h)
                if (h.hasOwnProperty(d)) {
                    var u = h[d];
                    if (e && (Array.isArray(u) || w(u))) {
                        var f = Array.isArray(u) ? [] : {};
                        s[d] = t(!0, s.hasOwnProperty(d) ? s[d] : f, u)
                    } else
                        s[d] = u
                }
        }
        return s
    }
      , S = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
        return t = parseFloat(t) || 0,
        Math.round((t + Number.EPSILON) * e) / e
    }
      , C = function t(e) {
        return !!(e && "object" === n(e) && e instanceof Element && e !== document.body) && (!e.__Panzoom && (function(t) {
            var e = getComputedStyle(t)["overflow-y"]
              , i = getComputedStyle(t)["overflow-x"]
              , n = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1
              , o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
            return n || o
        }(e) ? e : t(e.parentNode)))
    }
      , $ = "undefined" != typeof window && window.ResizeObserver || function() {
        function t(e) {
            o(this, t),
            this.observables = [],
            this.boundCheck = this.check.bind(this),
            this.boundCheck(),
            this.callback = e
        }
        return s(t, [{
            key: "observe",
            value: function(t) {
                if (!this.observables.some((function(e) {
                    return e.el === t
                }
                ))) {
                    var e = {
                        el: t,
                        size: {
                            height: t.clientHeight,
                            width: t.clientWidth
                        }
                    };
                    this.observables.push(e)
                }
            }
        }, {
            key: "unobserve",
            value: function(t) {
                this.observables = this.observables.filter((function(e) {
                    return e.el !== t
                }
                ))
            }
        }, {
            key: "disconnect",
            value: function() {
                this.observables = []
            }
        }, {
            key: "check",
            value: function() {
                var t = this.observables.filter((function(t) {
                    var e = t.el.clientHeight
                      , i = t.el.clientWidth;
                    if (t.size.height !== e || t.size.width !== i)
                        return t.size.height = e,
                        t.size.width = i,
                        !0
                }
                )).map((function(t) {
                    return t.el
                }
                ));
                t.length > 0 && this.callback(t),
                window.requestAnimationFrame(this.boundCheck)
            }
        }]),
        t
    }()
      , E = s((function t(e) {
        o(this, t),
        this.id = self.Touch && e instanceof Touch ? e.identifier : -1,
        this.pageX = e.pageX,
        this.pageY = e.pageY,
        this.clientX = e.clientX,
        this.clientY = e.clientY
    }
    ))
      , P = function(t, e) {
        return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0
    }
      , T = function(t, e) {
        return e ? {
            clientX: (t.clientX + e.clientX) / 2,
            clientY: (t.clientY + e.clientY) / 2
        } : t
    }
      , L = function(t) {
        return "changedTouches"in t
    }
      , _ = function() {
        function t(e) {
            var i = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , a = n.start
              , s = void 0 === a ? function() {
                return !0
            }
            : a
              , r = n.move
              , l = void 0 === r ? function() {}
            : r
              , c = n.end
              , h = void 0 === c ? function() {}
            : c;
            o(this, t),
            this._element = e,
            this.startPointers = [],
            this.currentPointers = [],
            this._pointerStart = function(t) {
                if (!(t.buttons > 0 && 0 !== t.button)) {
                    var e = new E(t);
                    i.currentPointers.some((function(t) {
                        return t.id === e.id
                    }
                    )) || i._triggerPointerStart(e, t) && (window.addEventListener("mousemove", i._move),
                    window.addEventListener("mouseup", i._pointerEnd))
                }
            }
            ,
            this._touchStart = function(t) {
                for (var e = 0, n = Array.from(t.changedTouches || []); e < n.length; e++) {
                    var o = n[e];
                    i._triggerPointerStart(new E(o), t)
                }
            }
            ,
            this._move = function(t) {
                var e, n = i.currentPointers.slice(), o = L(t) ? Array.from(t.changedTouches).map((function(t) {
                    return new E(t)
                }
                )) : [new E(t)], a = [], s = x(o);
                try {
                    var r = function() {
                        var t = e.value
                          , n = i.currentPointers.findIndex((function(e) {
                            return e.id === t.id
                        }
                        ));
                        if (n < 0)
                            return "continue";
                        a.push(t),
                        i.currentPointers[n] = t
                    };
                    for (s.s(); !(e = s.n()).done; )
                        r()
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                i._moveCallback(n, i.currentPointers.slice(), t)
            }
            ,
            this._triggerPointerEnd = function(t, e) {
                var n = i.currentPointers.findIndex((function(e) {
                    return e.id === t.id
                }
                ));
                return !(n < 0) && (i.currentPointers.splice(n, 1),
                i.startPointers.splice(n, 1),
                i._endCallback(t, e),
                !0)
            }
            ,
            this._pointerEnd = function(t) {
                t.buttons > 0 && 0 !== t.button || i._triggerPointerEnd(new E(t), t) && (window.removeEventListener("mousemove", i._move, {
                    passive: !1
                }),
                window.removeEventListener("mouseup", i._pointerEnd, {
                    passive: !1
                }))
            }
            ,
            this._touchEnd = function(t) {
                for (var e = 0, n = Array.from(t.changedTouches || []); e < n.length; e++) {
                    var o = n[e];
                    i._triggerPointerEnd(new E(o), t)
                }
            }
            ,
            this._startCallback = s,
            this._moveCallback = l,
            this._endCallback = h,
            this._element.addEventListener("mousedown", this._pointerStart, {
                passive: !1
            }),
            this._element.addEventListener("touchstart", this._touchStart, {
                passive: !1
            }),
            this._element.addEventListener("touchmove", this._move, {
                passive: !1
            }),
            this._element.addEventListener("touchend", this._touchEnd),
            this._element.addEventListener("touchcancel", this._touchEnd)
        }
        return s(t, [{
            key: "stop",
            value: function() {
                this._element.removeEventListener("mousedown", this._pointerStart, {
                    passive: !1
                }),
                this._element.removeEventListener("touchstart", this._touchStart, {
                    passive: !1
                }),
                this._element.removeEventListener("touchmove", this._move, {
                    passive: !1
                }),
                this._element.removeEventListener("touchend", this._touchEnd),
                this._element.removeEventListener("touchcancel", this._touchEnd),
                window.removeEventListener("mousemove", this._move),
                window.removeEventListener("mouseup", this._pointerEnd)
            }
        }, {
            key: "_triggerPointerStart",
            value: function(t, e) {
                return !!this._startCallback(t, e) && (this.currentPointers.push(t),
                this.startPointers.push(t),
                !0)
            }
        }]),
        t
    }()
      , A = function(t, e) {
        return t.split(".").reduce((function(t, e) {
            return t && t[e]
        }
        ), e)
    }
      , O = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o(this, t),
            this.options = k(!0, {}, e),
            this.plugins = [],
            this.events = {};
            for (var i = 0, n = ["on", "once"]; i < n.length; i++)
                for (var a = n[i], s = 0, r = Object.entries(this.options[a] || {}); s < r.length; s++) {
                    var l = r[s];
                    this[a].apply(this, m(l))
                }
        }
        return s(t, [{
            key: "option",
            value: function(t, e) {
                t = String(t);
                var i = A(t, this.options);
                if ("function" == typeof i) {
                    for (var n, o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
                        a[s - 2] = arguments[s];
                    i = (n = i).call.apply(n, [this, this].concat(a))
                }
                return void 0 === i ? e : i
            }
        }, {
            key: "localize",
            value: function(t) {
                var e = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return t = (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (function(t, n, o) {
                    var a = "";
                    o ? a = e.option("".concat(n[0] + n.toLowerCase().substring(1), ".l10n.").concat(o)) : n && (a = e.option("l10n.".concat(n))),
                    a || (a = t);
                    for (var s = 0; s < i.length; s++)
                        a = a.split(i[s][0]).join(i[s][1]);
                    return a
                }
                ))).replace(/\{\{(.*)\}\}/, (function(t, e) {
                    return e
                }
                ))
            }
        }, {
            key: "on",
            value: function(t, e) {
                var i = this;
                if (w(t)) {
                    for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                        var a = o[n];
                        this.on.apply(this, m(a))
                    }
                    return this
                }
                return String(t).split(" ").forEach((function(t) {
                    var n = i.events[t] = i.events[t] || [];
                    -1 == n.indexOf(e) && n.push(e)
                }
                )),
                this
            }
        }, {
            key: "once",
            value: function(t, e) {
                var i = this;
                if (w(t)) {
                    for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                        var a = o[n];
                        this.once.apply(this, m(a))
                    }
                    return this
                }
                return String(t).split(" ").forEach((function(t) {
                    var n = function n() {
                        i.off(t, n);
                        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
                            a[s] = arguments[s];
                        e.call.apply(e, [i, i].concat(a))
                    };
                    n._ = e,
                    i.on(t, n)
                }
                )),
                this
            }
        }, {
            key: "off",
            value: function(t, e) {
                var i = this;
                if (!w(t))
                    return t.split(" ").forEach((function(t) {
                        var n = i.events[t];
                        if (!n || !n.length)
                            return i;
                        for (var o = -1, a = 0, s = n.length; a < s; a++) {
                            var r = n[a];
                            if (r && (r === e || r._ === e)) {
                                o = a;
                                break
                            }
                        }
                        -1 != o && n.splice(o, 1)
                    }
                    )),
                    this;
                for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                    var a = o[n];
                    this.off.apply(this, m(a))
                }
            }
        }, {
            key: "trigger",
            value: function(t) {
                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                    i[n - 1] = arguments[n];
                var o, a = x(m(this.events[t] || []).slice());
                try {
                    for (a.s(); !(o = a.n()).done; ) {
                        var s = o.value;
                        if (s && !1 === s.call.apply(s, [this, this].concat(i)))
                            return !1
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                var r, l = x(m(this.events["*"] || []).slice());
                try {
                    for (l.s(); !(r = l.n()).done; ) {
                        var c = r.value;
                        if (c && !1 === c.call.apply(c, [this, t, this].concat(i)))
                            return !1
                    }
                } catch (t) {
                    l.e(t)
                } finally {
                    l.f()
                }
                return !0
            }
        }, {
            key: "attachPlugins",
            value: function(t) {
                for (var e = {}, i = 0, n = Object.entries(t || {}); i < n.length; i++) {
                    var o = g(n[i], 2)
                      , a = o[0]
                      , s = o[1];
                    !1 === this.options[a] || this.plugins[a] || (this.options[a] = k({}, s.defaults || {}, this.options[a]),
                    e[a] = new s(this))
                }
                for (var r = 0, l = Object.entries(e); r < l.length; r++) {
                    var c = g(l[r], 2);
                    c[0],
                    c[1].attach(this)
                }
                return this.plugins = Object.assign({}, this.plugins, e),
                this
            }
        }, {
            key: "detachPlugins",
            value: function() {
                for (var t in this.plugins) {
                    var e = void 0;
                    (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this)
                }
                return this.plugins = {},
                this
            }
        }]),
        t
    }()
      , z = {
        touch: !0,
        zoom: !0,
        pinchToZoom: !0,
        panOnlyZoomed: !1,
        lockAxis: !1,
        friction: .64,
        decelFriction: .88,
        zoomFriction: .74,
        bounceForce: .2,
        baseScale: 1,
        minScale: 1,
        maxScale: 2,
        step: .5,
        textSelection: !1,
        click: "toggleZoom",
        wheel: "zoom",
        wheelFactor: 42,
        wheelLimit: 5,
        draggableClass: "is-draggable",
        draggingClass: "is-dragging",
        ratio: 1
    }
      , M = function(t) {
        l(n, t);
        var e = f(n);
        function n(t) {
            var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o(this, n),
            (i = e.call(this, k(!0, {}, z, a))).state = "init",
            i.$container = t;
            for (var s = 0, r = ["onLoad", "onWheel", "onClick"]; s < r.length; s++) {
                var l = r[s];
                i[l] = i[l].bind(d(i))
            }
            return i.initLayout(),
            i.resetValues(),
            i.attachPlugins(n.Plugins),
            i.trigger("init"),
            i.updateMetrics(),
            i.attachEvents(),
            i.trigger("ready"),
            !1 === i.option("centerOnStart") ? i.state = "ready" : i.panTo({
                friction: 0
            }),
            t.__Panzoom = d(i),
            i
        }
        return s(n, [{
            key: "initLayout",
            value: function() {
                var t = this.$container;
                if (!(t instanceof HTMLElement))
                    throw new Error("Panzoom: Container not found");
                var e = this.option("content") || t.querySelector(".panzoom__content");
                if (!e)
                    throw new Error("Panzoom: Content not found");
                this.$content = e;
                var i, n = this.option("viewport") || t.querySelector(".panzoom__viewport");
                n || !1 === this.option("wrapInner") || ((n = document.createElement("div")).classList.add("panzoom__viewport"),
                (i = n).append.apply(i, m(t.childNodes)),
                t.appendChild(n));
                this.$viewport = n || e.parentNode
            }
        }, {
            key: "resetValues",
            value: function() {
                this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24),
                this.container = {
                    width: 0,
                    height: 0
                },
                this.viewport = {
                    width: 0,
                    height: 0
                },
                this.content = {
                    origWidth: 0,
                    origHeight: 0,
                    width: 0,
                    height: 0,
                    x: this.option("x", 0),
                    y: this.option("y", 0),
                    scale: this.option("baseScale")
                },
                this.transform = {
                    x: 0,
                    y: 0,
                    scale: 1
                },
                this.resetDragPosition()
            }
        }, {
            key: "onLoad",
            value: function(t) {
                this.updateMetrics(),
                this.panTo({
                    scale: this.option("baseScale"),
                    friction: 0
                }),
                this.trigger("load", t)
            }
        }, {
            key: "onClick",
            value: function(t) {
                if (!(t.defaultPrevented || document.activeElement && document.activeElement.closest("[contenteditable]")))
                    if (!this.option("textSelection") || !window.getSelection().toString().length || t.target && t.target.hasAttribute("data-fancybox-close")) {
                        var e = this.$content.getClientRects()[0];
                        if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1))
                            return t.preventDefault(),
                            void t.stopPropagation();
                        !1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(),
                        t.stopPropagation(),
                        this.zoomWithClick(t))
                    } else
                        t.stopPropagation()
            }
        }, {
            key: "onWheel",
            value: function(t) {
                !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t)
            }
        }, {
            key: "zoomWithWheel",
            value: function(t) {
                void 0 === this.changedDelta && (this.changedDelta = 0);
                var e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail))
                  , i = this.content.scale
                  , n = i * (100 + e * this.option("wheelFactor")) / 100;
                if (e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e),
                n = i) : (this.changedDelta = 0,
                n = Math.max(Math.min(n, this.option("maxScale")), this.option("minScale"))),
                !(this.changedDelta > this.option("wheelLimit")) && (t.preventDefault(),
                n !== i)) {
                    var o = this.$content.getBoundingClientRect()
                      , a = t.clientX - o.left
                      , s = t.clientY - o.top;
                    this.zoomTo(n, {
                        x: a,
                        y: s
                    })
                }
            }
        }, {
            key: "zoomWithClick",
            value: function(t) {
                var e = this.$content.getClientRects()[0]
                  , i = t.clientX - e.left
                  , n = t.clientY - e.top;
                this.toggleZoom({
                    x: i,
                    y: n
                })
            }
        }, {
            key: "attachEvents",
            value: function() {
                var t = this;
                this.$content.addEventListener("load", this.onLoad),
                this.$container.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }),
                this.$container.addEventListener("click", this.onClick, {
                    passive: !1
                }),
                this.initObserver();
                var e = new _(this.$container,{
                    start: function(i, n) {
                        if (!t.option("touch"))
                            return !1;
                        if (t.velocity.scale < 0)
                            return !1;
                        var o = n.composedPath()[0];
                        if (!e.currentPointers.length) {
                            if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(o.nodeName))
                                return !1;
                            if (t.option("textSelection") && function(t, e, i) {
                                for (var n = t.childNodes, o = document.createRange(), a = 0; a < n.length; a++) {
                                    var s = n[a];
                                    if (s.nodeType === Node.TEXT_NODE) {
                                        o.selectNodeContents(s);
                                        var r = o.getBoundingClientRect();
                                        if (e >= r.left && i >= r.top && e <= r.right && i <= r.bottom)
                                            return s
                                    }
                                }
                                return !1
                            }(o, i.clientX, i.clientY))
                                return !1
                        }
                        return !C(o) && (!1 !== t.trigger("touchStart", n) && ("mousedown" === n.type && n.preventDefault(),
                        t.state = "pointerdown",
                        t.resetDragPosition(),
                        t.dragPosition.midPoint = null,
                        t.dragPosition.time = Date.now(),
                        !0))
                    },
                    move: function(i, n, o) {
                        if ("pointerdown" === t.state)
                            if (!1 !== t.trigger("touchMove", o)) {
                                if (!(n.length < 2 && !0 === t.option("panOnlyZoomed") && t.content.width <= t.viewport.width && t.content.height <= t.viewport.height && t.transform.scale <= t.option("baseScale")) && (!(n.length > 1) || t.option("zoom") && !1 !== t.option("pinchToZoom"))) {
                                    var a = T(i[0], i[1])
                                      , s = T(n[0], n[1])
                                      , r = s.clientX - a.clientX
                                      , l = s.clientY - a.clientY
                                      , c = P(i[0], i[1])
                                      , h = P(n[0], n[1])
                                      , d = c && h ? h / c : 1;
                                    t.dragOffset.x += r,
                                    t.dragOffset.y += l,
                                    t.dragOffset.scale *= d,
                                    t.dragOffset.time = Date.now() - t.dragPosition.time;
                                    var u = 1 === t.dragStart.scale && t.option("lockAxis");
                                    if (u && !t.lockAxis) {
                                        if (Math.abs(t.dragOffset.x) < 6 && Math.abs(t.dragOffset.y) < 6)
                                            return void o.preventDefault();
                                        var f = Math.abs(180 * Math.atan2(t.dragOffset.y, t.dragOffset.x) / Math.PI);
                                        t.lockAxis = f > 45 && f < 135 ? "y" : "x"
                                    }
                                    if ("xy" === u || "y" !== t.lockAxis) {
                                        if (o.preventDefault(),
                                        o.stopPropagation(),
                                        o.stopImmediatePropagation(),
                                        t.lockAxis && (t.dragOffset["x" === t.lockAxis ? "y" : "x"] = 0),
                                        t.$container.classList.add(t.option("draggingClass")),
                                        t.transform.scale === t.option("baseScale") && "y" === t.lockAxis || (t.dragPosition.x = t.dragStart.x + t.dragOffset.x),
                                        t.transform.scale === t.option("baseScale") && "x" === t.lockAxis || (t.dragPosition.y = t.dragStart.y + t.dragOffset.y),
                                        t.dragPosition.scale = t.dragStart.scale * t.dragOffset.scale,
                                        n.length > 1) {
                                            var v = T(e.startPointers[0], e.startPointers[1])
                                              , p = v.clientX - t.dragStart.rect.x
                                              , g = v.clientY - t.dragStart.rect.y
                                              , m = t.getZoomDelta(t.content.scale * t.dragOffset.scale, p, g)
                                              , y = m.deltaX
                                              , b = m.deltaY;
                                            t.dragPosition.x -= y,
                                            t.dragPosition.y -= b,
                                            t.dragPosition.midPoint = s
                                        } else
                                            t.setDragResistance();
                                        t.transform = {
                                            x: t.dragPosition.x,
                                            y: t.dragPosition.y,
                                            scale: t.dragPosition.scale
                                        },
                                        t.startAnimation()
                                    }
                                }
                            } else
                                o.preventDefault()
                    },
                    end: function(n, o) {
                        if ("pointerdown" === t.state)
                            if (t._dragOffset = i({}, t.dragOffset),
                            e.currentPointers.length)
                                t.resetDragPosition();
                            else if (t.state = "decel",
                            t.friction = t.option("decelFriction"),
                            t.recalculateTransform(),
                            t.$container.classList.remove(t.option("draggingClass")),
                            !1 !== t.trigger("touchEnd", o) && "decel" === t.state) {
                                var a = t.option("minScale");
                                if (t.transform.scale < a)
                                    t.zoomTo(a, {
                                        friction: .64
                                    });
                                else {
                                    var s = t.option("maxScale");
                                    if (t.transform.scale - s > .01) {
                                        var r = t.dragPosition.midPoint || n
                                          , l = t.$content.getClientRects()[0];
                                        t.zoomTo(s, {
                                            friction: .64,
                                            x: r.clientX - l.left,
                                            y: r.clientY - l.top
                                        })
                                    } else
                                        ;
                                }
                            }
                    }
                });
                this.pointerTracker = e
            }
        }, {
            key: "initObserver",
            value: function() {
                var t = this;
                this.resizeObserver || (this.resizeObserver = new $((function() {
                    t.updateTimer || (t.updateTimer = setTimeout((function() {
                        var e = t.$container.getBoundingClientRect();
                        e.width && e.height ? ((Math.abs(e.width - t.container.width) > 1 || Math.abs(e.height - t.container.height) > 1) && (t.isAnimating() && t.endAnimation(!0),
                        t.updateMetrics(),
                        t.panTo({
                            x: t.content.x,
                            y: t.content.y,
                            scale: t.option("baseScale"),
                            friction: 0
                        })),
                        t.updateTimer = null) : t.updateTimer = null
                    }
                    ), t.updateRate))
                }
                )),
                this.resizeObserver.observe(this.$container))
            }
        }, {
            key: "resetDragPosition",
            value: function() {
                this.lockAxis = null,
                this.friction = this.option("friction"),
                this.velocity = {
                    x: 0,
                    y: 0,
                    scale: 0
                };
                var t = this.content
                  , e = t.x
                  , n = t.y
                  , o = t.scale;
                this.dragStart = {
                    rect: this.$content.getBoundingClientRect(),
                    x: e,
                    y: n,
                    scale: o
                },
                this.dragPosition = i(i({}, this.dragPosition), {}, {
                    x: e,
                    y: n,
                    scale: o
                }),
                this.dragOffset = {
                    x: 0,
                    y: 0,
                    scale: 1,
                    time: 0
                }
            }
        }, {
            key: "updateMetrics",
            value: function(t) {
                !0 !== t && this.trigger("beforeUpdate");
                var e, n = this.$container, o = this.$content, a = this.$viewport, s = o instanceof HTMLImageElement, r = this.option("zoom"), l = this.option("resizeParent", r), c = this.option("width"), h = this.option("height"), d = c || (e = o,
                Math.max(parseFloat(e.naturalWidth || 0), parseFloat(e.width && e.width.baseVal && e.width.baseVal.value || 0), parseFloat(e.offsetWidth || 0), parseFloat(e.scrollWidth || 0))), u = h || function(t) {
                    return Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0))
                }(o);
                Object.assign(o.style, {
                    width: c ? "".concat(c, "px") : "",
                    height: h ? "".concat(h, "px") : "",
                    maxWidth: "",
                    maxHeight: ""
                }),
                l && Object.assign(a.style, {
                    width: "",
                    height: ""
                });
                var f = this.option("ratio");
                c = d = S(d * f),
                h = u = S(u * f);
                var v = o.getBoundingClientRect()
                  , p = a.getBoundingClientRect()
                  , g = a == n ? p : n.getBoundingClientRect()
                  , m = Math.max(a.offsetWidth, S(p.width))
                  , y = Math.max(a.offsetHeight, S(p.height))
                  , b = window.getComputedStyle(a);
                if (m -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight),
                y -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom),
                this.viewport.width = m,
                this.viewport.height = y,
                r) {
                    if (Math.abs(d - v.width) > .1 || Math.abs(u - v.height) > .1) {
                        var x = function(t, e, i, n) {
                            var o = Math.min(i / t || 0, n / e);
                            return {
                                width: t * o || 0,
                                height: e * o || 0
                            }
                        }(d, u, Math.min(d, v.width), Math.min(u, v.height));
                        c = S(x.width),
                        h = S(x.height)
                    }
                    Object.assign(o.style, {
                        width: "".concat(c, "px"),
                        height: "".concat(h, "px"),
                        transform: ""
                    })
                }
                if (l && (Object.assign(a.style, {
                    width: "".concat(c, "px"),
                    height: "".concat(h, "px")
                }),
                this.viewport = i(i({}, this.viewport), {}, {
                    width: c,
                    height: h
                })),
                s && r && "function" != typeof this.options.maxScale) {
                    var w = this.option("maxScale");
                    this.options.maxScale = function() {
                        return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : w
                    }
                }
                this.content = i(i({}, this.content), {}, {
                    origWidth: d,
                    origHeight: u,
                    fitWidth: c,
                    fitHeight: h,
                    width: c,
                    height: h,
                    scale: 1,
                    isZoomable: r
                }),
                this.container = {
                    width: g.width,
                    height: g.height
                },
                !0 !== t && this.trigger("afterUpdate")
            }
        }, {
            key: "zoomIn",
            value: function(t) {
                this.zoomTo(this.content.scale + (t || this.option("step")))
            }
        }, {
            key: "zoomOut",
            value: function(t) {
                this.zoomTo(this.content.scale - (t || this.option("step")))
            }
        }, {
            key: "toggleZoom",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = this.option("maxScale")
                  , i = this.option("baseScale")
                  , n = this.content.scale > i + .5 * (e - i) ? i : e;
                this.zoomTo(n, t)
            }
        }, {
            key: "zoomTo",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.option("baseScale")
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = e.x
                  , n = void 0 === i ? null : i
                  , o = e.y
                  , a = void 0 === o ? null : o;
                t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
                var s = S(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
                null === n && (n = this.content.width * s * .5),
                null === a && (a = this.content.height * s * .5);
                var r = this.getZoomDelta(t, n, a)
                  , l = r.deltaX
                  , c = r.deltaY;
                n = this.content.x - l,
                a = this.content.y - c,
                this.panTo({
                    x: n,
                    y: a,
                    scale: t,
                    friction: this.option("zoomFriction")
                })
            }
        }, {
            key: "getZoomDelta",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , n = this.content.fitWidth * this.content.scale
                  , o = this.content.fitHeight * this.content.scale
                  , a = e > 0 && n ? e / n : 0
                  , s = i > 0 && o ? i / o : 0
                  , r = this.content.fitWidth * t
                  , l = this.content.fitHeight * t
                  , c = (r - n) * a
                  , h = (l - o) * s;
                return {
                    deltaX: c,
                    deltaY: h
                }
            }
        }, {
            key: "panTo",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = t.x
                  , n = void 0 === e ? this.content.x : e
                  , o = t.y
                  , a = void 0 === o ? this.content.y : o
                  , s = t.scale
                  , r = t.friction
                  , l = void 0 === r ? this.option("friction") : r
                  , c = t.ignoreBounds
                  , h = void 0 !== c && c;
                if (s = s || this.content.scale || 1,
                !h) {
                    var d = this.getBounds(s)
                      , u = d.boundX
                      , f = d.boundY;
                    u && (n = Math.max(Math.min(n, u.to), u.from)),
                    f && (a = Math.max(Math.min(a, f.to), f.from))
                }
                this.friction = l,
                this.transform = i(i({}, this.transform), {}, {
                    x: n,
                    y: a,
                    scale: s
                }),
                l ? (this.state = "panning",
                this.velocity = {
                    x: (1 / this.friction - 1) * (n - this.content.x),
                    y: (1 / this.friction - 1) * (a - this.content.y),
                    scale: (1 / this.friction - 1) * (s - this.content.scale)
                },
                this.startAnimation()) : this.endAnimation()
            }
        }, {
            key: "startAnimation",
            value: function() {
                var t = this;
                this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"),
                this.rAF = requestAnimationFrame((function() {
                    return t.animate()
                }
                ))
            }
        }, {
            key: "animate",
            value: function() {
                var t = this;
                if (this.setEdgeForce(),
                this.setDragForce(),
                this.velocity.x *= this.friction,
                this.velocity.y *= this.friction,
                this.velocity.scale *= this.friction,
                this.content.x += this.velocity.x,
                this.content.y += this.velocity.y,
                this.content.scale += this.velocity.scale,
                this.isAnimating())
                    this.setTransform();
                else if ("pointerdown" !== this.state)
                    return void this.endAnimation();
                this.rAF = requestAnimationFrame((function() {
                    return t.animate()
                }
                ))
            }
        }, {
            key: "getBounds",
            value: function(t) {
                var e = this.boundX
                  , i = this.boundY;
                if (void 0 !== e && void 0 !== i)
                    return {
                        boundX: e,
                        boundY: i
                    };
                e = {
                    from: 0,
                    to: 0
                },
                i = {
                    from: 0,
                    to: 0
                },
                t = t || this.transform.scale;
                var n = this.content.fitWidth * t
                  , o = this.content.fitHeight * t
                  , a = this.viewport.width
                  , s = this.viewport.height;
                if (n < a) {
                    var r = S(.5 * (a - n));
                    e.from = r,
                    e.to = r
                } else
                    e.from = S(a - n);
                if (o < s) {
                    var l = .5 * (s - o);
                    i.from = l,
                    i.to = l
                } else
                    i.from = S(s - o);
                return {
                    boundX: e,
                    boundY: i
                }
            }
        }, {
            key: "setEdgeForce",
            value: function() {
                if ("decel" === this.state) {
                    var t, e, i, n, o = this.option("bounceForce"), a = this.getBounds(Math.max(this.transform.scale, this.content.scale)), s = a.boundX, r = a.boundY;
                    if (s && (t = this.content.x < s.from,
                    e = this.content.x > s.to),
                    r && (i = this.content.y < r.from,
                    n = this.content.y > r.to),
                    t || e) {
                        var l = ((t ? s.from : s.to) - this.content.x) * o
                          , c = this.content.x + (this.velocity.x + l) / this.friction;
                        c >= s.from && c <= s.to && (l += this.velocity.x),
                        this.velocity.x = l,
                        this.recalculateTransform()
                    }
                    if (i || n) {
                        var h = ((i ? r.from : r.to) - this.content.y) * o
                          , d = this.content.y + (h + this.velocity.y) / this.friction;
                        d >= r.from && d <= r.to && (h += this.velocity.y),
                        this.velocity.y = h,
                        this.recalculateTransform()
                    }
                }
            }
        }, {
            key: "setDragResistance",
            value: function() {
                if ("pointerdown" === this.state) {
                    var t, e, i, n, o = this.getBounds(this.dragPosition.scale), a = o.boundX, s = o.boundY;
                    if (a && (t = this.dragPosition.x < a.from,
                    e = this.dragPosition.x > a.to),
                    s && (i = this.dragPosition.y < s.from,
                    n = this.dragPosition.y > s.to),
                    (t || e) && (!t || !e)) {
                        var r = t ? a.from : a.to
                          , l = r - this.dragPosition.x;
                        this.dragPosition.x = r - .3 * l
                    }
                    if ((i || n) && (!i || !n)) {
                        var c = i ? s.from : s.to
                          , h = c - this.dragPosition.y;
                        this.dragPosition.y = c - .3 * h
                    }
                }
            }
        }, {
            key: "setDragForce",
            value: function() {
                "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x,
                this.velocity.y = this.dragPosition.y - this.content.y,
                this.velocity.scale = this.dragPosition.scale - this.content.scale)
            }
        }, {
            key: "recalculateTransform",
            value: function() {
                this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1),
                this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1),
                this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1)
            }
        }, {
            key: "isAnimating",
            value: function() {
                return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05))
            }
        }, {
            key: "setTransform",
            value: function(t) {
                var e, n, o, a, s;
                (t ? (e = S(this.transform.x),
                n = S(this.transform.y),
                o = this.transform.scale,
                this.content = i(i({}, this.content), {}, {
                    x: e,
                    y: n,
                    scale: o
                })) : (e = S(this.content.x),
                n = S(this.content.y),
                o = this.content.scale / (this.content.width / this.content.fitWidth),
                this.content = i(i({}, this.content), {}, {
                    x: e,
                    y: n
                })),
                this.trigger("beforeTransform"),
                e = S(this.content.x),
                n = S(this.content.y),
                t && this.option("zoom")) ? (a = S(this.content.fitWidth * o),
                s = S(this.content.fitHeight * o),
                this.content.width = a,
                this.content.height = s,
                this.transform = i(i({}, this.transform), {}, {
                    width: a,
                    height: s,
                    scale: o
                }),
                Object.assign(this.$content.style, {
                    width: "".concat(a, "px"),
                    height: "".concat(s, "px"),
                    maxWidth: "none",
                    maxHeight: "none",
                    transform: "translate3d(".concat(e, "px, ").concat(n, "px, 0) scale(1)")
                })) : this.$content.style.transform = "translate3d(".concat(e, "px, ").concat(n, "px, 0) scale(").concat(o, ")");
                this.trigger("afterTransform")
            }
        }, {
            key: "endAnimation",
            value: function(t) {
                cancelAnimationFrame(this.rAF),
                this.rAF = null,
                this.velocity = {
                    x: 0,
                    y: 0,
                    scale: 0
                },
                this.setTransform(!0),
                this.state = "ready",
                this.handleCursor(),
                !0 !== t && this.trigger("endAnimation")
            }
        }, {
            key: "handleCursor",
            value: function() {
                var t = this.option("draggableClass");
                t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t))
            }
        }, {
            key: "detachEvents",
            value: function() {
                this.$content.removeEventListener("load", this.onLoad),
                this.$container.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }),
                this.$container.removeEventListener("click", this.onClick, {
                    passive: !1
                }),
                this.pointerTracker && (this.pointerTracker.stop(),
                this.pointerTracker = null),
                this.resizeObserver && (this.resizeObserver.disconnect(),
                this.resizeObserver = null)
            }
        }, {
            key: "destroy",
            value: function() {
                "destroy" !== this.state && (this.state = "destroy",
                clearTimeout(this.updateTimer),
                this.updateTimer = null,
                cancelAnimationFrame(this.rAF),
                this.rAF = null,
                this.detachEvents(),
                this.detachPlugins(),
                this.resetDragPosition())
            }
        }]),
        n
    }(O);
    M.version = "4.0.31",
    M.Plugins = {};
    var I = function(t, e) {
        var i = 0;
        return function() {
            var n = (new Date).getTime();
            if (!(n - i < e))
                return i = n,
                t.apply(void 0, arguments)
        }
    }
      , R = function() {
        function t(e) {
            o(this, t),
            this.$container = null,
            this.$prev = null,
            this.$next = null,
            this.carousel = e,
            this.onRefresh = this.onRefresh.bind(this)
        }
        return s(t, [{
            key: "option",
            value: function(t) {
                return this.carousel.option("Navigation.".concat(t))
            }
        }, {
            key: "createButton",
            value: function(t) {
                var e, i = this, n = document.createElement("button");
                n.setAttribute("title", this.carousel.localize("{{".concat(t.toUpperCase(), "}}")));
                var o = this.option("classNames.button") + " " + this.option("classNames.".concat(t));
                return (e = n.classList).add.apply(e, m(o.split(" "))),
                n.setAttribute("tabindex", "0"),
                n.innerHTML = this.carousel.localize(this.option("".concat(t, "Tpl"))),
                n.addEventListener("click", (function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    i.carousel["slide".concat("next" === t ? "Next" : "Prev")]()
                }
                )),
                n
            }
        }, {
            key: "build",
            value: function() {
                var t;
                this.$container || (this.$container = document.createElement("div"),
                (t = this.$container.classList).add.apply(t, m(this.option("classNames.main").split(" "))),
                this.carousel.$container.appendChild(this.$container));
                this.$next || (this.$next = this.createButton("next"),
                this.$container.appendChild(this.$next)),
                this.$prev || (this.$prev = this.createButton("prev"),
                this.$container.appendChild(this.$prev))
            }
        }, {
            key: "onRefresh",
            value: function() {
                var t = this.carousel.pages.length;
                t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(),
                this.$prev.removeAttribute("disabled"),
                this.$next.removeAttribute("disabled"),
                this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""),
                this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")))
            }
        }, {
            key: "cleanup",
            value: function() {
                this.$prev && this.$prev.remove(),
                this.$prev = null,
                this.$next && this.$next.remove(),
                this.$next = null,
                this.$container && this.$container.remove(),
                this.$container = null
            }
        }, {
            key: "attach",
            value: function() {
                this.carousel.on("refresh change", this.onRefresh)
            }
        }, {
            key: "detach",
            value: function() {
                this.carousel.off("refresh change", this.onRefresh),
                this.cleanup()
            }
        }]),
        t
    }();
    R.defaults = {
        prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
        nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        classNames: {
            main: "carousel__nav",
            button: "carousel__button",
            next: "is-next",
            prev: "is-prev"
        }
    };
    var F = function() {
        function t(e) {
            o(this, t),
            this.carousel = e,
            this.$list = null,
            this.events = {
                change: this.onChange.bind(this),
                refresh: this.onRefresh.bind(this)
            }
        }
        return s(t, [{
            key: "buildList",
            value: function() {
                var t = this;
                if (!(this.carousel.pages.length < this.carousel.option("Dots.minSlideCount"))) {
                    var e = document.createElement("ol");
                    return e.classList.add("carousel__dots"),
                    e.addEventListener("click", (function(e) {
                        if ("page"in e.target.dataset) {
                            e.preventDefault(),
                            e.stopPropagation();
                            var i = parseInt(e.target.dataset.page, 10)
                              , n = t.carousel;
                            i !== n.page && (n.pages.length < 3 && n.option("infinite") ? n[0 == i ? "slidePrev" : "slideNext"]() : n.slideTo(i))
                        }
                    }
                    )),
                    this.$list = e,
                    this.carousel.$container.appendChild(e),
                    this.carousel.$container.classList.add("has-dots"),
                    e
                }
            }
        }, {
            key: "removeList",
            value: function() {
                this.$list && (this.$list.parentNode.removeChild(this.$list),
                this.$list = null),
                this.carousel.$container.classList.remove("has-dots")
            }
        }, {
            key: "rebuildDots",
            value: function() {
                var t = this
                  , e = this.$list
                  , i = !!e
                  , n = this.carousel.pages.length;
                if (n < 2)
                    i && this.removeList();
                else {
                    i || (e = this.buildList());
                    var o = this.$list.children.length;
                    if (o > n)
                        for (var a = n; a < o; a++)
                            this.$list.removeChild(this.$list.lastChild);
                    else {
                        for (var s = function(e) {
                            var i = document.createElement("li");
                            i.classList.add("carousel__dot"),
                            i.dataset.page = e,
                            i.setAttribute("role", "button"),
                            i.setAttribute("tabindex", "0"),
                            i.setAttribute("title", t.carousel.localize("{{GOTO}}", [["%d", e + 1]])),
                            i.addEventListener("keydown", (function(t) {
                                var e, n = t.code;
                                "Enter" === n || "NumpadEnter" === n ? e = i : "ArrowRight" === n ? e = i.nextSibling : "ArrowLeft" === n && (e = i.previousSibling),
                                e && e.click()
                            }
                            )),
                            t.$list.appendChild(i)
                        }, r = o; r < n; r++)
                            s(r);
                        this.setActiveDot()
                    }
                }
            }
        }, {
            key: "setActiveDot",
            value: function() {
                if (this.$list) {
                    this.$list.childNodes.forEach((function(t) {
                        t.classList.remove("is-selected")
                    }
                    ));
                    var t = this.$list.childNodes[this.carousel.page];
                    t && t.classList.add("is-selected")
                }
            }
        }, {
            key: "onChange",
            value: function() {
                this.setActiveDot()
            }
        }, {
            key: "onRefresh",
            value: function() {
                this.rebuildDots()
            }
        }, {
            key: "attach",
            value: function() {
                this.carousel.on(this.events)
            }
        }, {
            key: "detach",
            value: function() {
                this.removeList(),
                this.carousel.off(this.events),
                this.carousel = null
            }
        }]),
        t
    }()
      , N = function() {
        function t(e) {
            o(this, t),
            this.carousel = e,
            this.selectedIndex = null,
            this.friction = 0,
            this.onNavReady = this.onNavReady.bind(this),
            this.onNavClick = this.onNavClick.bind(this),
            this.onNavCreateSlide = this.onNavCreateSlide.bind(this),
            this.onTargetChange = this.onTargetChange.bind(this)
        }
        return s(t, [{
            key: "addAsTargetFor",
            value: function(t) {
                this.target = this.carousel,
                this.nav = t,
                this.attachEvents()
            }
        }, {
            key: "addAsNavFor",
            value: function(t) {
                this.target = t,
                this.nav = this.carousel,
                this.attachEvents()
            }
        }, {
            key: "attachEvents",
            value: function() {
                this.nav.options.initialSlide = this.target.options.initialPage,
                this.nav.on("ready", this.onNavReady),
                this.nav.on("createSlide", this.onNavCreateSlide),
                this.nav.on("Panzoom.click", this.onNavClick),
                this.target.on("change", this.onTargetChange),
                this.target.on("Panzoom.afterUpdate", this.onTargetChange)
            }
        }, {
            key: "onNavReady",
            value: function() {
                this.onTargetChange(!0)
            }
        }, {
            key: "onNavClick",
            value: function(t, e, i) {
                var n = i.target.closest(".carousel__slide");
                if (n) {
                    i.stopPropagation();
                    var o = parseInt(n.dataset.index, 10)
                      , a = this.target.findPageForSlide(o);
                    this.target.page !== a && this.target.slideTo(a, {
                        friction: this.friction
                    }),
                    this.markSelectedSlide(o)
                }
            }
        }, {
            key: "onNavCreateSlide",
            value: function(t, e) {
                e.index === this.selectedIndex && this.markSelectedSlide(e.index)
            }
        }, {
            key: "onTargetChange",
            value: function() {
                var t = this.target.pages[this.target.page].indexes[0]
                  , e = this.nav.findPageForSlide(t);
                this.nav.slideTo(e),
                this.markSelectedSlide(t)
            }
        }, {
            key: "markSelectedSlide",
            value: function(t) {
                this.selectedIndex = t,
                m(this.nav.slides).filter((function(t) {
                    return t.$el && t.$el.classList.remove("is-nav-selected")
                }
                ));
                var e = this.nav.slides[t];
                e && e.$el && e.$el.classList.add("is-nav-selected")
            }
        }, {
            key: "attach",
            value: function(t) {
                var e = t.options.Sync;
                (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav),
                this.friction = e.friction)
            }
        }, {
            key: "detach",
            value: function() {
                this.nav && (this.nav.off("ready", this.onNavReady),
                this.nav.off("Panzoom.click", this.onNavClick),
                this.nav.off("createSlide", this.onNavCreateSlide)),
                this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange),
                this.target.off("change", this.onTargetChange))
            }
        }]),
        t
    }();
    N.defaults = {
        friction: .92
    };
    var D = {
        Navigation: R,
        Dots: F,
        Sync: N
    }
      , B = {
        slides: [],
        preload: 0,
        slidesPerPage: "auto",
        initialPage: null,
        initialSlide: null,
        friction: .92,
        center: !0,
        infinite: !0,
        fill: !0,
        dragFree: !1,
        prefix: "",
        classNames: {
            viewport: "carousel__viewport",
            track: "carousel__track",
            slide: "carousel__slide",
            slideSelected: "is-selected"
        },
        l10n: {
            NEXT: "Next slide",
            PREV: "Previous slide",
            GOTO: "Go to slide #%d"
        }
    }
      , H = function(t) {
        l(n, t);
        var e = f(n);
        function n(t) {
            var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (o(this, n),
            a = k(!0, {}, B, a),
            (i = e.call(this, a)).state = "init",
            i.$container = t,
            !(i.$container instanceof HTMLElement))
                throw new Error("No root element provided");
            return i.slideNext = I(i.slideNext.bind(d(i)), 250),
            i.slidePrev = I(i.slidePrev.bind(d(i)), 250),
            i.init(),
            t.__Carousel = d(i),
            i
        }
        return s(n, [{
            key: "init",
            value: function() {
                this.pages = [],
                this.page = this.pageIndex = null,
                this.prevPage = this.prevPageIndex = null,
                this.attachPlugins(n.Plugins),
                this.trigger("init"),
                this.initLayout(),
                this.initSlides(),
                this.updateMetrics(),
                this.$track && this.pages.length && (this.$track.style.transform = "translate3d(".concat(-1 * this.pages[this.page].left, "px, 0px, 0) scale(1)")),
                this.manageSlideVisiblity(),
                this.initPanzoom(),
                this.state = "ready",
                this.trigger("ready")
            }
        }, {
            key: "initLayout",
            value: function() {
                var t, e, i, n, o = this.option("prefix"), a = this.option("classNames");
                (this.$viewport = this.option("viewport") || this.$container.querySelector(".".concat(o).concat(a.viewport)),
                this.$viewport) || (this.$viewport = document.createElement("div"),
                (t = this.$viewport.classList).add.apply(t, m((o + a.viewport).split(" "))),
                (e = this.$viewport).append.apply(e, m(this.$container.childNodes)),
                this.$container.appendChild(this.$viewport));
                (this.$track = this.option("track") || this.$container.querySelector(".".concat(o).concat(a.track)),
                this.$track) || (this.$track = document.createElement("div"),
                (i = this.$track.classList).add.apply(i, m((o + a.track).split(" "))),
                (n = this.$track).append.apply(n, m(this.$viewport.childNodes)),
                this.$viewport.appendChild(this.$track))
            }
        }, {
            key: "initSlides",
            value: function() {
                var t = this;
                this.slides = [],
                this.$viewport.querySelectorAll(".".concat(this.option("prefix")).concat(this.option("classNames.slide"))).forEach((function(e) {
                    var i = {
                        $el: e,
                        isDom: !0
                    };
                    t.slides.push(i),
                    t.trigger("createSlide", i, t.slides.length)
                }
                )),
                Array.isArray(this.options.slides) && (this.slides = k(!0, m(this.slides), this.options.slides))
            }
        }, {
            key: "updateMetrics",
            value: function() {
                var t, e = this, n = 0, o = [];
                this.slides.forEach((function(i, a) {
                    var s = i.$el
                      , r = i.isDom || !t ? e.getSlideMetrics(s) : t;
                    i.index = a,
                    i.width = r,
                    i.left = n,
                    t = r,
                    n += r,
                    o.push(a)
                }
                ));
                var a = Math.max(this.$track.offsetWidth, S(this.$track.getBoundingClientRect().width))
                  , s = getComputedStyle(this.$track);
                a -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight),
                this.contentWidth = n,
                this.viewportWidth = a;
                var r = []
                  , l = this.option("slidesPerPage");
                if (Number.isInteger(l) && n > a)
                    for (var c = 0; c < this.slides.length; c += l)
                        r.push({
                            indexes: o.slice(c, c + l),
                            slides: this.slides.slice(c, c + l)
                        });
                else
                    for (var h = 0, d = 0, u = 0; u < this.slides.length; u += 1) {
                        var f = this.slides[u];
                        (!r.length || d + f.width > a) && (r.push({
                            indexes: [],
                            slides: []
                        }),
                        h = r.length - 1,
                        d = 0),
                        d += f.width,
                        r[h].indexes.push(u),
                        r[h].slides.push(f)
                    }
                var v = this.option("center")
                  , p = this.option("fill");
                r.forEach((function(t, i) {
                    t.index = i,
                    t.width = t.slides.reduce((function(t, e) {
                        return t + e.width
                    }
                    ), 0),
                    t.left = t.slides[0].left,
                    v && (t.left += .5 * (a - t.width) * -1),
                    p && !e.option("infiniteX", e.option("infinite")) && n > a && (t.left = Math.max(t.left, 0),
                    t.left = Math.min(t.left, n - a))
                }
                ));
                var g, y = [];
                r.forEach((function(t) {
                    var e = i({}, t);
                    g && e.left === g.left ? (g.width += e.width,
                    g.slides = [].concat(m(g.slides), m(e.slides)),
                    g.indexes = [].concat(m(g.indexes), m(e.indexes))) : (e.index = y.length,
                    g = e,
                    y.push(e))
                }
                )),
                this.pages = y;
                var b = this.page;
                if (null === b) {
                    var x = this.option("initialSlide");
                    b = null !== x ? this.findPageForSlide(x) : parseInt(this.option("initialPage", 0), 10) || 0,
                    y[b] || (b = y.length && b > y.length ? y[y.length - 1].index : 0),
                    this.page = b,
                    this.pageIndex = b
                }
                this.updatePanzoom(),
                this.trigger("refresh")
            }
        }, {
            key: "getSlideMetrics",
            value: function(t) {
                if (!t) {
                    var e, i, n = this.slides[0];
                    if ((t = document.createElement("div")).dataset.isTestEl = 1,
                    t.style.visibility = "hidden",
                    (e = t.classList).add.apply(e, m((this.option("prefix") + this.option("classNames.slide")).split(" "))),
                    n.customClass)
                        (i = t.classList).add.apply(i, m(n.customClass.split(" ")));
                    this.$track.prepend(t)
                }
                var o = Math.max(t.offsetWidth, S(t.getBoundingClientRect().width))
                  , a = t.currentStyle || window.getComputedStyle(t);
                return o = o + (parseFloat(a.marginLeft) || 0) + (parseFloat(a.marginRight) || 0),
                t.dataset.isTestEl && t.remove(),
                o
            }
        }, {
            key: "findPageForSlide",
            value: function(t) {
                t = parseInt(t, 10) || 0;
                var e = this.pages.find((function(e) {
                    return e.indexes.indexOf(t) > -1
                }
                ));
                return e ? e.index : null
            }
        }, {
            key: "slideNext",
            value: function() {
                this.slideTo(this.pageIndex + 1)
            }
        }, {
            key: "slidePrev",
            value: function() {
                this.slideTo(this.pageIndex - 1)
            }
        }, {
            key: "slideTo",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = e.x
                  , n = void 0 === i ? -1 * this.setPage(t, !0) : i
                  , o = e.y
                  , a = void 0 === o ? 0 : o
                  , s = e.friction
                  , r = void 0 === s ? this.option("friction") : s;
                this.Panzoom.content.x === n && !this.Panzoom.velocity.x && r || (this.Panzoom.panTo({
                    x: n,
                    y: a,
                    friction: r,
                    ignoreBounds: !0
                }),
                "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"))
            }
        }, {
            key: "initPanzoom",
            value: function() {
                var t = this;
                this.Panzoom && this.Panzoom.destroy();
                var e = k(!0, {}, {
                    content: this.$track,
                    wrapInner: !1,
                    resizeParent: !1,
                    zoom: !1,
                    click: !1,
                    lockAxis: "x",
                    x: this.pages.length ? -1 * this.pages[this.page].left : 0,
                    centerOnStart: !1,
                    textSelection: function() {
                        return t.option("textSelection", !1)
                    },
                    panOnlyZoomed: function() {
                        return this.content.width <= this.viewport.width
                    }
                }, this.option("Panzoom"));
                this.Panzoom = new M(this.$container,e),
                this.Panzoom.on({
                    "*": function(e) {
                        for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                            n[o - 1] = arguments[o];
                        return t.trigger.apply(t, ["Panzoom.".concat(e)].concat(n))
                    },
                    afterUpdate: function() {
                        t.updatePage()
                    },
                    beforeTransform: this.onBeforeTransform.bind(this),
                    touchEnd: this.onTouchEnd.bind(this),
                    endAnimation: function() {
                        t.trigger("settle")
                    }
                }),
                this.updateMetrics(),
                this.manageSlideVisiblity()
            }
        }, {
            key: "updatePanzoom",
            value: function() {
                this.Panzoom && (this.Panzoom.content = i(i({}, this.Panzoom.content), {}, {
                    fitWidth: this.contentWidth,
                    origWidth: this.contentWidth,
                    width: this.contentWidth
                }),
                this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
                    from: -1 * this.pages[this.pages.length - 1].left,
                    to: -1 * this.pages[0].left
                }),
                this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
                    from: 0,
                    to: 0
                },
                this.Panzoom.handleCursor())
            }
        }, {
            key: "manageSlideVisiblity",
            value: function() {
                var t = this
                  , e = this.contentWidth
                  , i = this.viewportWidth
                  , n = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0
                  , o = this.option("preload")
                  , a = this.option("infiniteX", this.option("infinite"))
                  , s = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left"))
                  , r = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
                this.slides.forEach((function(l) {
                    var c, h, d = 0;
                    c = n - s,
                    h = n + i + r,
                    c -= o * (i + s + r),
                    h += o * (i + s + r);
                    var u = l.left + l.width > c && l.left < h;
                    c = n + e - s,
                    h = n + e + i + r,
                    c -= o * (i + s + r);
                    var f = a && l.left + l.width > c && l.left < h;
                    c = n - e - s,
                    h = n - e + i + r,
                    c -= o * (i + s + r);
                    var v = a && l.left + l.width > c && l.left < h;
                    f || u || v ? (t.createSlideEl(l),
                    u && (d = 0),
                    f && (d = -1),
                    v && (d = 1),
                    l.left + l.width > n && l.left <= n + i + r && (d = 0)) : t.removeSlideEl(l),
                    l.hasDiff = d
                }
                ));
                var l = 0
                  , c = 0;
                this.slides.forEach((function(t, i) {
                    var n = 0;
                    t.$el ? (i !== l || t.hasDiff ? n = c + t.hasDiff * e : c = 0,
                    t.$el.style.left = Math.abs(n) > .1 ? "".concat(c + t.hasDiff * e, "px") : "",
                    l++) : c += t.width
                }
                )),
                this.markSelectedSlides()
            }
        }, {
            key: "createSlideEl",
            value: function(t) {
                var e;
                if (t) {
                    if (!t.$el) {
                        var i, n = document.createElement("div");
                        if (n.dataset.index = t.index,
                        (e = n.classList).add.apply(e, m((this.option("prefix") + this.option("classNames.slide")).split(" "))),
                        t.customClass)
                            (i = n.classList).add.apply(i, m(t.customClass.split(" ")));
                        t.html && (n.innerHTML = t.html);
                        var o = [];
                        this.slides.forEach((function(t, e) {
                            t.$el && o.push(e)
                        }
                        ));
                        var a = t.index
                          , s = null;
                        if (o.length) {
                            var r = o.reduce((function(t, e) {
                                return Math.abs(e - a) < Math.abs(t - a) ? e : t
                            }
                            ));
                            s = this.slides[r]
                        }
                        return this.$track.insertBefore(n, s && s.$el ? s.index < t.index ? s.$el.nextSibling : s.$el : null),
                        t.$el = n,
                        this.trigger("createSlide", t, a),
                        t
                    }
                    var l, c = t.$el.dataset.index;
                    c && parseInt(c, 10) === t.index || (t.$el.dataset.index = t.index,
                    t.$el.querySelectorAll("[data-lazy-srcset]").forEach((function(t) {
                        t.srcset = t.dataset.lazySrcset
                    }
                    )),
                    t.$el.querySelectorAll("[data-lazy-src]").forEach((function(t) {
                        var e = t.dataset.lazySrc;
                        t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = "url('".concat(e, "')")
                    }
                    )),
                    (l = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = "url('".concat(l, "')")),
                    t.state = "ready")
                }
            }
        }, {
            key: "removeSlideEl",
            value: function(t) {
                t.$el && !t.isDom && (this.trigger("removeSlide", t),
                t.$el.remove(),
                t.$el = null)
            }
        }, {
            key: "markSelectedSlides",
            value: function() {
                var t = this
                  , e = this.option("classNames.slideSelected")
                  , i = "aria-hidden";
                this.slides.forEach((function(n, o) {
                    var a = n.$el;
                    if (a) {
                        var s = t.pages[t.page];
                        s && s.indexes && s.indexes.indexOf(o) > -1 ? (e && !a.classList.contains(e) && (a.classList.add(e),
                        t.trigger("selectSlide", n)),
                        a.removeAttribute(i)) : (e && a.classList.contains(e) && (a.classList.remove(e),
                        t.trigger("unselectSlide", n)),
                        a.setAttribute(i, !0))
                    }
                }
                ))
            }
        }, {
            key: "updatePage",
            value: function() {
                this.updateMetrics(),
                this.slideTo(this.page, {
                    friction: 0
                })
            }
        }, {
            key: "onBeforeTransform",
            value: function() {
                this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(),
                this.manageSlideVisiblity()
            }
        }, {
            key: "manageInfiniteTrack",
            value: function() {
                var t = this.contentWidth
                  , e = this.viewportWidth;
                if (!(!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e)) {
                    var i = this.Panzoom
                      , n = !1;
                    return i.content.x < -1 * (t - e) && (i.content.x += t,
                    this.pageIndex = this.pageIndex - this.pages.length,
                    n = !0),
                    i.content.x > e && (i.content.x -= t,
                    this.pageIndex = this.pageIndex + this.pages.length,
                    n = !0),
                    n && "pointerdown" === i.state && i.resetDragPosition(),
                    n
                }
            }
        }, {
            key: "onTouchEnd",
            value: function(t, e) {
                var i = this.option("dragFree");
                if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5)
                    this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
                else if (i) {
                    var n = g(this.getPageFromPosition(-1 * t.transform.x), 2)[1];
                    this.setPage(n)
                } else
                    this.slideToClosest()
            }
        }, {
            key: "slideToClosest",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = this.getPageFromPosition(-1 * this.Panzoom.content.x)
                  , i = g(e, 2)
                  , n = i[1];
                this.slideTo(n, t)
            }
        }, {
            key: "getPageFromPosition",
            value: function(t) {
                var e = this.pages.length;
                this.option("center") && (t += .5 * this.viewportWidth);
                var i = Math.floor(t / this.contentWidth);
                t -= i * this.contentWidth;
                var n = this.slides.find((function(e) {
                    return e.left <= t && e.left + e.width > t
                }
                ));
                if (n) {
                    var o = this.findPageForSlide(n.index);
                    return [o, o + i * e]
                }
                return [0, 0]
            }
        }, {
            key: "setPage",
            value: function(t, e) {
                var i = 0
                  , n = parseInt(t, 10) || 0
                  , o = this.page
                  , a = this.pageIndex
                  , s = this.pages.length
                  , r = this.contentWidth
                  , l = this.viewportWidth;
                if (t = (n % s + s) % s,
                this.option("infiniteX", this.option("infinite")) && r > l) {
                    var c = Math.floor(n / s) || 0
                      , h = r;
                    if (i = this.pages[t].left + c * h,
                    !0 === e && s > 2) {
                        var d = -1 * this.Panzoom.content.x
                          , u = i - h
                          , f = i + h
                          , v = Math.abs(d - i)
                          , p = Math.abs(d - u)
                          , g = Math.abs(d - f);
                        g < v && g <= p ? (i = f,
                        n += s) : p < v && p < g && (i = u,
                        n -= s)
                    }
                } else
                    t = n = Math.max(0, Math.min(n, s - 1)),
                    i = this.pages.length ? this.pages[t].left : 0;
                return this.page = t,
                this.pageIndex = n,
                null !== o && t !== o && (this.prevPage = o,
                this.prevPageIndex = a,
                this.trigger("change", t, o)),
                i
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                this.state = "destroy",
                this.slides.forEach((function(e) {
                    t.removeSlideEl(e)
                }
                )),
                this.slides = [],
                this.Panzoom.destroy(),
                this.detachPlugins()
            }
        }]),
        n
    }(O);
    H.version = "4.0.31",
    H.Plugins = D;
    var W = !("undefined" == typeof window || !window.document || !window.document.createElement)
      , j = null
      , X = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])']
      , q = function(t) {
        if (t && W) {
            null === j && document.createElement("div").focus({
                get preventScroll() {
                    return j = !0,
                    !1
                }
            });
            try {
                if (t.setActive)
                    t.setActive();
                else if (j)
                    t.focus({
                        preventScroll: !0
                    });
                else {
                    var e = window.pageXOffset || document.body.scrollTop
                      , i = window.pageYOffset || document.body.scrollLeft;
                    t.focus(),
                    document.body.scrollTo({
                        top: e,
                        left: i,
                        behavior: "auto"
                    })
                }
            } catch (t) {}
        }
    }
      , U = function() {
        function t(e) {
            o(this, t),
            this.fancybox = e,
            this.viewport = null,
            this.pendingUpdate = null;
            for (var i = 0, n = ["onReady", "onResize", "onTouchstart", "onTouchmove"]; i < n.length; i++) {
                var a = n[i];
                this[a] = this[a].bind(this)
            }
        }
        return s(t, [{
            key: "onReady",
            value: function() {
                var t = window.visualViewport;
                t && (this.viewport = t,
                this.startY = 0,
                t.addEventListener("resize", this.onResize),
                this.updateViewport()),
                window.addEventListener("touchstart", this.onTouchstart, {
                    passive: !1
                }),
                window.addEventListener("touchmove", this.onTouchmove, {
                    passive: !1
                }),
                window.addEventListener("wheel", this.onWheel, {
                    passive: !1
                })
            }
        }, {
            key: "onResize",
            value: function() {
                this.updateViewport()
            }
        }, {
            key: "updateViewport",
            value: function() {
                var t = this.fancybox
                  , e = this.viewport
                  , i = e.scale || 1
                  , n = t.$container;
                if (n) {
                    var o = ""
                      , a = ""
                      , s = "";
                    i - 1 > .1 && (o = "".concat(e.width * i, "px"),
                    a = "".concat(e.height * i, "px"),
                    s = "translate3d(".concat(e.offsetLeft, "px, ").concat(e.offsetTop, "px, 0) scale(").concat(1 / i, ")")),
                    n.style.width = o,
                    n.style.height = a,
                    n.style.transform = s
                }
            }
        }, {
            key: "onTouchstart",
            value: function(t) {
                this.startY = t.touches ? t.touches[0].screenY : t.screenY
            }
        }, {
            key: "onTouchmove",
            value: function(t) {
                var e = this.startY
                  , i = window.innerWidth / window.document.documentElement.clientWidth;
                if (t.cancelable && !(t.touches.length > 1 || 1 !== i)) {
                    var n = C(t.composedPath()[0]);
                    if (n) {
                        var o = window.getComputedStyle(n)
                          , a = parseInt(o.getPropertyValue("height"), 10)
                          , s = t.touches ? t.touches[0].screenY : t.screenY
                          , r = e <= s && 0 === n.scrollTop
                          , l = e >= s && n.scrollHeight - n.scrollTop === a;
                        (r || l) && t.preventDefault()
                    } else
                        t.preventDefault()
                }
            }
        }, {
            key: "onWheel",
            value: function(t) {
                C(t.composedPath()[0]) || t.preventDefault()
            }
        }, {
            key: "cleanup",
            value: function() {
                this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate),
                this.pendingUpdate = null);
                var t = this.viewport;
                t && (t.removeEventListener("resize", this.onResize),
                this.viewport = null),
                window.removeEventListener("touchstart", this.onTouchstart, !1),
                window.removeEventListener("touchmove", this.onTouchmove, !1),
                window.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                })
            }
        }, {
            key: "attach",
            value: function() {
                this.fancybox.on("initLayout", this.onReady)
            }
        }, {
            key: "detach",
            value: function() {
                this.fancybox.off("initLayout", this.onReady),
                this.cleanup()
            }
        }]),
        t
    }()
      , Y = function() {
        function t(e) {
            o(this, t),
            this.fancybox = e,
            this.$container = null,
            this.state = "init";
            for (var i = 0, n = ["onPrepare", "onClosing", "onKeydown"]; i < n.length; i++) {
                var a = n[i];
                this[a] = this[a].bind(this)
            }
            this.events = {
                prepare: this.onPrepare,
                closing: this.onClosing,
                keydown: this.onKeydown
            }
        }
        return s(t, [{
            key: "onPrepare",
            value: function() {
                this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build()
            }
        }, {
            key: "onClosing",
            value: function() {
                this.Carousel && this.Carousel.Panzoom.detachEvents()
            }
        }, {
            key: "onKeydown",
            value: function(t, e) {
                e === t.option("Thumbs.key") && this.toggle()
            }
        }, {
            key: "build",
            value: function() {
                var t = this;
                if (!this.$container) {
                    var e = document.createElement("div");
                    e.classList.add("fancybox__thumbs"),
                    this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel.nextSibling),
                    this.Carousel = new H(e,k(!0, {
                        Dots: !1,
                        Navigation: !1,
                        Sync: {
                            friction: 0
                        },
                        infinite: !1,
                        center: !0,
                        fill: !0,
                        dragFree: !0,
                        slidesPerPage: 1,
                        preload: 1
                    }, this.fancybox.option("Thumbs.Carousel"), {
                        Sync: {
                            target: this.fancybox.Carousel
                        },
                        slides: this.getSlides()
                    })),
                    this.Carousel.Panzoom.on("wheel", (function(e, i) {
                        i.preventDefault(),
                        t.fancybox[i.deltaY < 0 ? "prev" : "next"]()
                    }
                    )),
                    this.$container = e,
                    this.state = "visible"
                }
            }
        }, {
            key: "getSlides",
            value: function() {
                var t, e = [], i = x(this.fancybox.items);
                try {
                    for (i.s(); !(t = i.n()).done; ) {
                        var n = t.value
                          , o = n.thumb;
                        o && e.push({
                            html: this.fancybox.option("Thumbs.tpl").replace(/\{\{src\}\}/gi, o),
                            customClass: "has-thumb has-".concat(n.type || "image")
                        })
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                return e
            }
        }, {
            key: "toggle",
            value: function() {
                "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build()
            }
        }, {
            key: "show",
            value: function() {
                "hidden" === this.state && (this.$container.style.display = "",
                this.Carousel.Panzoom.attachEvents(),
                this.state = "visible")
            }
        }, {
            key: "hide",
            value: function() {
                "visible" === this.state && (this.Carousel.Panzoom.detachEvents(),
                this.$container.style.display = "none",
                this.state = "hidden")
            }
        }, {
            key: "cleanup",
            value: function() {
                this.Carousel && (this.Carousel.destroy(),
                this.Carousel = null),
                this.$container && (this.$container.remove(),
                this.$container = null),
                this.state = "init"
            }
        }, {
            key: "attach",
            value: function() {
                this.fancybox.on(this.events)
            }
        }, {
            key: "detach",
            value: function() {
                this.fancybox.off(this.events),
                this.cleanup()
            }
        }]),
        t
    }();
    Y.defaults = {
        minSlideCount: 2,
        minScreenHeight: 500,
        autoStart: !0,
        key: "t",
        Carousel: {},
        tpl: '<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>'
    };
    var V = function(t, e) {
        for (var i = new URL(t), n = new URLSearchParams(i.search), o = new URLSearchParams, a = 0, s = [].concat(m(n), m(Object.entries(e))); a < s.length; a++) {
            var r = g(s[a], 2)
              , l = r[0]
              , c = r[1];
            "t" === l ? o.set("start", parseInt(c)) : o.set(l, c)
        }
        o = o.toString();
        var h = t.match(/#t=((.*)?\d+s)/);
        return h && (o += "#t=".concat(h[1])),
        o
    }
      , Z = {
        video: {
            autoplay: !0,
            ratio: 16 / 9
        },
        youtube: {
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1
        },
        vimeo: {
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1
        },
        html5video: {
            tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            format: ""
        }
    }
      , G = function() {
        function t(e) {
            o(this, t),
            this.fancybox = e;
            for (var i = 0, n = ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]; i < n.length; i++) {
                var a = n[i];
                this[a] = this[a].bind(this)
            }
            this.events = {
                init: this.onInit,
                ready: this.onReady,
                "Carousel.createSlide": this.onCreateSlide,
                "Carousel.removeSlide": this.onRemoveSlide,
                "Carousel.selectSlide": this.onSelectSlide,
                "Carousel.unselectSlide": this.onUnselectSlide,
                "Carousel.refresh": this.onRefresh
            }
        }
        return s(t, [{
            key: "onInit",
            value: function() {
                var t, e = x(this.fancybox.items);
                try {
                    for (e.s(); !(t = e.n()).done; ) {
                        var i = t.value;
                        this.processType(i)
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
            }
        }, {
            key: "processType",
            value: function(t) {
                if (t.html)
                    return t.src = t.html,
                    t.type = "html",
                    void delete t.html;
                var e = t.src || ""
                  , i = t.type || this.fancybox.options.type
                  , n = null;
                if (!e || "string" == typeof e) {
                    if (n = e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                        var o = V(e, this.fancybox.option("Html.youtube"))
                          , a = encodeURIComponent(n[1]);
                        t.videoId = a,
                        t.src = "https://www.youtube-nocookie.com/embed/".concat(a, "?").concat(o),
                        t.thumb = t.thumb || "https://i.ytimg.com/vi/".concat(a, "/mqdefault.jpg"),
                        t.vendor = "youtube",
                        i = "video"
                    } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
                        var s = V(e, this.fancybox.option("Html.vimeo"))
                          , r = encodeURIComponent(n[1]);
                        t.videoId = r,
                        t.src = "https://player.vimeo.com/video/".concat(r, "?").concat(s),
                        t.vendor = "vimeo",
                        i = "video"
                    } else
                        (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "//maps.google.".concat(n[1], "/?ll=").concat((n[2] ? n[2] + "&z=" + Math.floor(n[3]) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&"), "&output=").concat(n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"),
                        i = "map") : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "//maps.google.".concat(n[1], "/maps?q=").concat(n[2].replace("query=", "q=").replace("api=1", ""), "&output=embed"),
                        i = "map");
                    i || ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "html5video",
                    t.format = t.format || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")),
                    t.type = i || this.fancybox.option("defaultType", "image"),
                    "html5video" !== i && "video" !== i || (t.video = k({}, this.fancybox.option("Html.video"), t.video),
                    t._width && t._height ? t.ratio = parseFloat(t._width) / parseFloat(t._height) : t.ratio = t.ratio || t.video.ratio || Z.video.ratio)
                }
            }
        }, {
            key: "onReady",
            value: function() {
                var t = this;
                this.fancybox.Carousel.slides.forEach((function(e) {
                    e.$el && (t.setContent(e),
                    e.index === t.fancybox.getSlide().index && t.playVideo(e))
                }
                ))
            }
        }, {
            key: "onCreateSlide",
            value: function(t, e, i) {
                "ready" === this.fancybox.state && this.setContent(i)
            }
        }, {
            key: "loadInlineContent",
            value: function(t) {
                var e;
                if (t.src instanceof HTMLElement)
                    e = t.src;
                else if ("string" == typeof t.src) {
                    var i = t.src.split("#", 2)
                      , n = 2 === i.length && "" === i[0] ? i[1] : i[0];
                    e = document.getElementById(n)
                }
                if (e) {
                    if ("clone" === t.type || e.$placeHolder) {
                        var o = (e = e.cloneNode(!0)).getAttribute("id");
                        o = o ? "".concat(o, "--clone") : "clone-".concat(this.fancybox.id, "-").concat(t.index),
                        e.setAttribute("id", o)
                    } else {
                        var a = document.createElement("div");
                        a.classList.add("fancybox-placeholder"),
                        e.parentNode.insertBefore(a, e),
                        e.$placeHolder = a
                    }
                    this.fancybox.setContent(t, e)
                } else
                    this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}")
            }
        }, {
            key: "loadAjaxContent",
            value: function(t) {
                var e = this.fancybox
                  , i = new XMLHttpRequest;
                e.showLoading(t),
                i.onreadystatechange = function() {
                    i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t),
                    200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
                }
                ;
                var n = t.ajax || null;
                i.open(n ? "POST" : "GET", t.src),
                i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                i.send(n),
                t.xhr = i
            }
        }, {
            key: "loadIframeContent",
            value: function(t) {
                var e = this
                  , i = this.fancybox
                  , n = document.createElement("iframe");
                if (n.className = "fancybox__iframe",
                n.setAttribute("id", "fancybox__iframe_".concat(i.id, "_").concat(t.index)),
                n.setAttribute("allow", "autoplay; fullscreen"),
                n.setAttribute("scrolling", "auto"),
                t.$iframe = n,
                "iframe" !== t.type || !1 === t.preload)
                    return n.setAttribute("src", t.src),
                    this.fancybox.setContent(t, n),
                    void this.resizeIframe(t);
                i.showLoading(t);
                var o = document.createElement("div");
                o.style.visibility = "hidden",
                this.fancybox.setContent(t, o),
                o.appendChild(n),
                n.onerror = function() {
                    i.setError(t, "{{IFRAME_ERROR}}")
                }
                ,
                n.onload = function() {
                    i.hideLoading(t);
                    var o = !1;
                    n.isReady || (n.isReady = !0,
                    o = !0),
                    n.src.length && (n.parentNode.style.visibility = "",
                    e.resizeIframe(t),
                    o && i.revealContent(t))
                }
                ,
                n.setAttribute("src", t.src)
            }
        }, {
            key: "setAspectRatio",
            value: function(t) {
                var e = t.$content
                  , i = t.ratio;
                if (e) {
                    var n = t._width
                      , o = t._height;
                    if (i || n && o) {
                        Object.assign(e.style, {
                            width: n && o ? "100%" : "",
                            height: n && o ? "100%" : "",
                            maxWidth: "",
                            maxHeight: ""
                        });
                        var a = e.offsetWidth
                          , s = e.offsetHeight;
                        if (o = o || s,
                        (n = n || a) > a || o > s) {
                            var r = Math.min(a / n, s / o);
                            n *= r,
                            o *= r
                        }
                        Math.abs(n / o - i) > .01 && (i < n / o ? n = o * i : o = n / i),
                        Object.assign(e.style, {
                            width: "".concat(n, "px"),
                            height: "".concat(o, "px")
                        })
                    }
                }
            }
        }, {
            key: "resizeIframe",
            value: function(t) {
                var e = t.$iframe;
                if (e) {
                    var i = t._width || 0
                      , n = t._height || 0;
                    i && n && (t.autoSize = !1);
                    var o = e.parentNode
                      , a = o && o.style;
                    if (!1 !== t.preload && !1 !== t.autoSize && a)
                        try {
                            var s = window.getComputedStyle(o)
                              , r = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight)
                              , l = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)
                              , c = e.contentWindow.document
                              , h = c.getElementsByTagName("html")[0]
                              , d = c.body;
                            a.width = "",
                            d.style.overflow = "hidden",
                            i = i || h.scrollWidth + r,
                            a.width = "".concat(i, "px"),
                            d.style.overflow = "",
                            a.flex = "0 0 auto",
                            a.height = "".concat(d.scrollHeight, "px"),
                            n = h.scrollHeight + l
                        } catch (t) {}
                    if (i || n) {
                        var u = {
                            flex: "0 1 auto"
                        };
                        i && (u.width = "".concat(i, "px")),
                        n && (u.height = "".concat(n, "px")),
                        Object.assign(a, u)
                    }
                }
            }
        }, {
            key: "onRefresh",
            value: function(t, e) {
                var i = this;
                e.slides.forEach((function(t) {
                    t.$el && (t.$iframe && i.resizeIframe(t),
                    t.ratio && i.setAspectRatio(t))
                }
                ))
            }
        }, {
            key: "setContent",
            value: function(t) {
                if (t && !t.isDom) {
                    switch (t.type) {
                    case "html":
                        this.fancybox.setContent(t, t.src);
                        break;
                    case "html5video":
                        this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.poster || t.thumb || ""));
                        break;
                    case "inline":
                    case "clone":
                        this.loadInlineContent(t);
                        break;
                    case "ajax":
                        this.loadAjaxContent(t);
                        break;
                    case "pdf":
                    case "video":
                    case "map":
                        t.preload = !1;
                    case "iframe":
                        this.loadIframeContent(t)
                    }
                    t.ratio && this.setAspectRatio(t)
                }
            }
        }, {
            key: "onSelectSlide",
            value: function(t, e, i) {
                "ready" === t.state && this.playVideo(i)
            }
        }, {
            key: "playVideo",
            value: function(t) {
                if ("html5video" === t.type && t.video.autoplay)
                    try {
                        var e = t.$el.querySelector("video");
                        if (e) {
                            var i = e.play();
                            void 0 !== i && i.then((function() {}
                            )).catch((function(t) {
                                e.muted = !0,
                                e.play()
                            }
                            ))
                        }
                    } catch (t) {}
                if ("video" === t.type && t.$iframe && t.$iframe.contentWindow) {
                    !function e() {
                        if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
                            var i;
                            if (t.$iframe.isReady)
                                return t.video && t.video.autoplay && (i = "youtube" == t.vendor ? {
                                    event: "command",
                                    func: "playVideo"
                                } : {
                                    method: "play",
                                    value: "true"
                                }),
                                void (i && t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"));
                            "youtube" === t.vendor && (i = {
                                event: "listening",
                                id: t.$iframe.getAttribute("id")
                            },
                            t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"))
                        }
                        t.poller = setTimeout(e, 250)
                    }()
                }
            }
        }, {
            key: "onUnselectSlide",
            value: function(t, e, i) {
                if ("html5video" !== i.type) {
                    var n = !1;
                    "vimeo" == i.vendor ? n = {
                        method: "pause",
                        value: "true"
                    } : "youtube" === i.vendor && (n = {
                        event: "command",
                        func: "pauseVideo"
                    }),
                    n && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(n), "*"),
                    clearTimeout(i.poller)
                } else
                    try {
                        i.$el.querySelector("video").pause()
                    } catch (t) {}
            }
        }, {
            key: "onRemoveSlide",
            value: function(t, e, i) {
                i.xhr && (i.xhr.abort(),
                i.xhr = null),
                i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null,
                i.$iframe.src = "//about:blank",
                i.$iframe = null);
                var n = i.$content;
                "inline" === i.type && n && (n.classList.remove("fancybox__content"),
                "none" !== n.style.display && (n.style.display = "none")),
                i.$closeButton && (i.$closeButton.remove(),
                i.$closeButton = null);
                var o = n && n.$placeHolder;
                o && (o.parentNode.insertBefore(n, o),
                o.remove(),
                n.$placeHolder = null)
            }
        }, {
            key: "onMessage",
            value: function(t) {
                try {
                    var e = JSON.parse(t.data);
                    if ("https://player.vimeo.com" === t.origin) {
                        if ("ready" === e.event) {
                            var i, n = x(document.getElementsByClassName("fancybox__iframe"));
                            try {
                                for (n.s(); !(i = n.n()).done; ) {
                                    var o = i.value;
                                    o.contentWindow === t.source && (o.isReady = 1)
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                        }
                    } else
                        "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1)
                } catch (t) {}
            }
        }, {
            key: "attach",
            value: function() {
                this.fancybox.on(this.events),
                window.addEventListener("message", this.onMessage, !1)
            }
        }, {
            key: "detach",
            value: function() {
                this.fancybox.off(this.events),
                window.removeEventListener("message", this.onMessage, !1)
            }
        }]),
        t
    }();
    G.defaults = Z;
    var K = function() {
        function t(e) {
            o(this, t),
            this.fancybox = e;
            for (var i = 0, n = ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"]; i < n.length; i++) {
                var a = n[i];
                this[a] = this[a].bind(this)
            }
            this.events = {
                ready: this.onReady,
                closing: this.onClosing,
                done: this.onDone,
                "Carousel.change": this.onPageChange,
                "Carousel.createSlide": this.onCreateSlide,
                "Carousel.removeSlide": this.onRemoveSlide
            }
        }
        return s(t, [{
            key: "onReady",
            value: function() {
                var t = this;
                this.fancybox.Carousel.slides.forEach((function(e) {
                    e.$el && t.setContent(e)
                }
                ))
            }
        }, {
            key: "onDone",
            value: function(t, e) {
                this.handleCursor(e)
            }
        }, {
            key: "onClosing",
            value: function(t) {
                clearTimeout(this.clickTimer),
                this.clickTimer = null,
                t.Carousel.slides.forEach((function(t) {
                    t.$image && (t.state = "destroy"),
                    t.Panzoom && t.Panzoom.detachEvents()
                }
                )),
                "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut()
            }
        }, {
            key: "onCreateSlide",
            value: function(t, e, i) {
                "ready" === this.fancybox.state && this.setContent(i)
            }
        }, {
            key: "onRemoveSlide",
            value: function(t, e, i) {
                i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")),
                i.$image.remove(),
                i.$image = null),
                i.Panzoom && (i.Panzoom.destroy(),
                i.Panzoom = null),
                i.$el && i.$el.dataset && delete i.$el.dataset.imageFit
            }
        }, {
            key: "setContent",
            value: function(t) {
                var e = this;
                if (!(t.isDom || t.html || t.type && "image" !== t.type || t.$image)) {
                    t.type = "image",
                    t.state = "loading";
                    var i = document.createElement("div");
                    i.style.visibility = "hidden";
                    var n = document.createElement("img");
                    n.addEventListener("load", (function(i) {
                        i.stopImmediatePropagation(),
                        e.onImageStatusChange(t)
                    }
                    )),
                    n.addEventListener("error", (function() {
                        e.onImageStatusChange(t)
                    }
                    )),
                    n.src = t.src,
                    n.alt = "",
                    n.draggable = !1,
                    n.classList.add("fancybox__image"),
                    t.srcset && n.setAttribute("srcset", t.srcset),
                    t.sizes && n.setAttribute("sizes", t.sizes),
                    t.$image = n;
                    var o = this.fancybox.option("Image.wrap");
                    if (o) {
                        var a = document.createElement("div");
                        a.classList.add("string" == typeof o ? o : "fancybox__image-wrap"),
                        a.appendChild(n),
                        i.appendChild(a),
                        t.$wrap = a
                    } else
                        i.appendChild(n);
                    t.$el.dataset.imageFit = this.fancybox.option("Image.fit"),
                    this.fancybox.setContent(t, i),
                    n.complete || n.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t)
                }
            }
        }, {
            key: "onImageStatusChange",
            value: function(t) {
                var e = this
                  , i = t.$image;
                i && "loading" === t.state && (i.complete && i.naturalWidth && i.naturalHeight ? (this.fancybox.hideLoading(t),
                "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t),
                t.$el.addEventListener("wheel", (function(i) {
                    return e.onWheel(t, i)
                }
                ), {
                    passive: !1
                }),
                t.$content.addEventListener("click", (function(i) {
                    return e.onClick(t, i)
                }
                ), {
                    passive: !1
                }),
                this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"))
            }
        }, {
            key: "initSlidePanzoom",
            value: function(t) {
                var e = this;
                t.Panzoom || (t.Panzoom = new M(t.$el,k(!0, this.fancybox.option("Image.Panzoom", {}), {
                    viewport: t.$wrap,
                    content: t.$image,
                    width: t._width,
                    height: t._height,
                    wrapInner: !1,
                    textSelection: !0,
                    touch: this.fancybox.option("Image.touch"),
                    panOnlyZoomed: !0,
                    click: !1,
                    wheel: !1
                })),
                t.Panzoom.on("startAnimation", (function() {
                    e.fancybox.trigger("Image.startAnimation", t)
                }
                )),
                t.Panzoom.on("endAnimation", (function() {
                    "zoomIn" === t.state && e.fancybox.done(t),
                    e.handleCursor(t),
                    e.fancybox.trigger("Image.endAnimation", t)
                }
                )),
                t.Panzoom.on("afterUpdate", (function() {
                    e.handleCursor(t),
                    e.fancybox.trigger("Image.afterUpdate", t)
                }
                )))
            }
        }, {
            key: "revealContent",
            value: function(t) {
                null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t)
            }
        }, {
            key: "getZoomInfo",
            value: function(t) {
                var e = t.$thumb.getBoundingClientRect()
                  , i = e.width
                  , n = e.height
                  , o = t.$content.getBoundingClientRect()
                  , a = o.width
                  , s = o.height
                  , r = o.top - e.top
                  , l = o.left - e.left
                  , c = this.fancybox.option("Image.zoomOpacity");
                return "auto" === c && (c = Math.abs(i / n - a / s) > .1),
                {
                    top: r,
                    left: l,
                    scale: a && i ? i / a : 1,
                    opacity: c
                }
            }
        }, {
            key: "canZoom",
            value: function(t) {
                var e = this.fancybox
                  , i = e.$container;
                if (window.visualViewport && 1 !== window.visualViewport.scale)
                    return !1;
                if (t.Panzoom && !t.Panzoom.content.width)
                    return !1;
                if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit"))
                    return !1;
                var n = t.$thumb;
                if (!n || "loading" === t.state)
                    return !1;
                i.classList.add("fancybox__no-click");
                var o, a = n.getBoundingClientRect();
                if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
                    var s = document.elementFromPoint(a.left + 1, a.top + 1) === n
                      , r = document.elementFromPoint(a.right - 1, a.bottom - 1) === n;
                    o = s && r
                } else
                    o = document.elementFromPoint(a.left + .5 * a.width, a.top + .5 * a.height) === n;
                return i.classList.remove("fancybox__no-click"),
                o
            }
        }, {
            key: "zoomIn",
            value: function() {
                var t = this.fancybox
                  , e = t.getSlide()
                  , i = e.Panzoom
                  , n = this.getZoomInfo(e)
                  , o = n.top
                  , a = n.left
                  , s = n.scale
                  , r = n.opacity;
                t.trigger("reveal", e),
                i.panTo({
                    x: -1 * a,
                    y: -1 * o,
                    scale: s,
                    friction: 0,
                    ignoreBounds: !0
                }),
                e.$content.style.visibility = "",
                e.state = "zoomIn",
                !0 === r && i.on("afterTransform", (function(t) {
                    "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - s)))
                }
                )),
                i.panTo({
                    x: 0,
                    y: 0,
                    scale: 1,
                    friction: this.fancybox.option("Image.zoomFriction")
                })
            }
        }, {
            key: "zoomOut",
            value: function() {
                var t = this
                  , e = this.fancybox
                  , i = e.getSlide()
                  , n = i.Panzoom;
                if (n) {
                    i.state = "zoomOut",
                    e.state = "customClosing",
                    i.$caption && (i.$caption.style.visibility = "hidden");
                    var o = this.fancybox.option("Image.zoomFriction")
                      , a = function(e) {
                        var a = t.getZoomInfo(i)
                          , s = a.top
                          , r = a.left
                          , l = a.scale
                          , c = a.opacity;
                        e || c || (o *= .82),
                        n.panTo({
                            x: -1 * r,
                            y: -1 * s,
                            scale: l,
                            friction: o,
                            ignoreBounds: !0
                        }),
                        o *= .98
                    };
                    window.addEventListener("scroll", a),
                    n.once("endAnimation", (function() {
                        window.removeEventListener("scroll", a),
                        e.destroy()
                    }
                    )),
                    a()
                }
            }
        }, {
            key: "handleCursor",
            value: function(t) {
                if ("image" === t.type && t.$el) {
                    var e = t.Panzoom
                      , i = this.fancybox.option("Image.click", !1, t)
                      , n = this.fancybox.option("Image.touch")
                      , o = t.$el.classList
                      , a = this.fancybox.option("Image.canZoomInClass")
                      , s = this.fancybox.option("Image.canZoomOutClass");
                    if (o.remove(s),
                    o.remove(a),
                    e && "toggleZoom" === i)
                        e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? o.add(a) : e.content.scale > 1 && !n && o.add(s);
                    else
                        "close" === i && o.add(s)
                }
            }
        }, {
            key: "onWheel",
            value: function(t, e) {
                if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e))
                    switch (this.fancybox.option("Image.wheel")) {
                    case "zoom":
                        "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
                        break;
                    case "close":
                        this.fancybox.close();
                        break;
                    case "slide":
                        this.fancybox[e.deltaY < 0 ? "prev" : "next"]()
                    }
            }
        }, {
            key: "onClick",
            value: function(t, e) {
                var i = this;
                if ("ready" === this.fancybox.state) {
                    var n = t.Panzoom;
                    if (!n || !n.dragPosition.midPoint && 0 === n.dragOffset.x && 0 === n.dragOffset.y && 1 === n.dragOffset.scale) {
                        if (this.fancybox.Carousel.Panzoom.lockAxis)
                            return !1;
                        var o = function(n) {
                            switch (n) {
                            case "toggleZoom":
                                e.stopPropagation(),
                                t.Panzoom && t.Panzoom.zoomWithClick(e);
                                break;
                            case "close":
                                i.fancybox.close();
                                break;
                            case "next":
                                e.stopPropagation(),
                                i.fancybox.next()
                            }
                        }
                          , a = this.fancybox.option("Image.click")
                          , s = this.fancybox.option("Image.doubleClick");
                        s ? this.clickTimer ? (clearTimeout(this.clickTimer),
                        this.clickTimer = null,
                        o(s)) : this.clickTimer = setTimeout((function() {
                            i.clickTimer = null,
                            o(a)
                        }
                        ), 300) : o(a)
                    }
                }
            }
        }, {
            key: "onPageChange",
            value: function(t, e) {
                var i = t.getSlide();
                e.slides.forEach((function(t) {
                    t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({
                        x: 0,
                        y: 0,
                        scale: 1,
                        friction: .8
                    })
                }
                ))
            }
        }, {
            key: "attach",
            value: function() {
                this.fancybox.on(this.events)
            }
        }, {
            key: "detach",
            value: function() {
                this.fancybox.off(this.events)
            }
        }]),
        t
    }();
    K.defaults = {
        canZoomInClass: "can-zoom_in",
        canZoomOutClass: "can-zoom_out",
        zoom: !0,
        zoomOpacity: "auto",
        zoomFriction: .82,
        ignoreCoveredThumbnail: !1,
        touch: !0,
        click: "toggleZoom",
        doubleClick: null,
        wheel: "zoom",
        fit: "contain",
        wrap: !1,
        Panzoom: {
            ratio: 1
        }
    };
    var J = function() {
        function t(e) {
            o(this, t),
            this.fancybox = e;
            for (var i = 0, n = ["onChange", "onClosing"]; i < n.length; i++) {
                var a = n[i];
                this[a] = this[a].bind(this)
            }
            this.events = {
                initCarousel: this.onChange,
                "Carousel.change": this.onChange,
                closing: this.onClosing
            },
            this.hasCreatedHistory = !1,
            this.origHash = "",
            this.timer = null
        }
        return s(t, [{
            key: "onChange",
            value: function(t) {
                var e = this
                  , i = t.Carousel;
                this.timer && clearTimeout(this.timer);
                var n = null === i.prevPage
                  , o = t.getSlide()
                  , a = new URL(document.URL).hash
                  , s = !1;
                if (o.slug)
                    s = "#" + o.slug;
                else {
                    var r = o.$trigger && o.$trigger.dataset
                      , l = t.option("slug") || r && r.fancybox;
                    l && l.length && "true" !== l && (s = "#" + l + (i.slides.length > 1 ? "-" + (o.index + 1) : ""))
                }
                n && (this.origHash = a !== s ? a : ""),
                s && a !== s && (this.timer = setTimeout((function() {
                    try {
                        window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + s),
                        n && (e.hasCreatedHistory = !0)
                    } catch (t) {}
                }
                ), 300))
            }
        }, {
            key: "onClosing",
            value: function() {
                if (this.timer && clearTimeout(this.timer),
                !0 !== this.hasSilentClose)
                    try {
                        return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""))
                    } catch (t) {}
            }
        }, {
            key: "attach",
            value: function(t) {
                t.on(this.events)
            }
        }, {
            key: "detach",
            value: function(t) {
                t.off(this.events)
            }
        }], [{
            key: "startFromUrl",
            value: function() {
                var e = t.Fancybox;
                if (e && !e.getInstance() && !1 !== e.defaults.Hash) {
                    var i = t.getParsedURL()
                      , n = i.hash
                      , o = i.slug
                      , a = i.index;
                    if (o) {
                        var s = document.querySelector('[data-slug="'.concat(n, '"]'));
                        if (s && s.dispatchEvent(new CustomEvent("click",{
                            bubbles: !0,
                            cancelable: !0
                        })),
                        !e.getInstance()) {
                            var r = document.querySelectorAll('[data-fancybox="'.concat(o, '"]'));
                            r.length && (null === a && 1 === r.length ? s = r[0] : a && (s = r[a - 1]),
                            s && s.dispatchEvent(new CustomEvent("click",{
                                bubbles: !0,
                                cancelable: !0
                            })))
                        }
                    }
                }
            }
        }, {
            key: "onHashChange",
            value: function() {
                var e = t.getParsedURL()
                  , i = e.slug
                  , n = e.index
                  , o = t.Fancybox
                  , a = o && o.getInstance();
                if (a && a.plugins.Hash) {
                    if (i) {
                        var s = a.Carousel;
                        if (i === a.option("slug"))
                            return s.slideTo(n - 1);
                        var r, l = x(s.slides);
                        try {
                            for (l.s(); !(r = l.n()).done; ) {
                                var c = r.value;
                                if (c.slug && c.slug === i)
                                    return s.slideTo(c.index)
                            }
                        } catch (t) {
                            l.e(t)
                        } finally {
                            l.f()
                        }
                        var h = a.getSlide()
                          , d = h.$trigger && h.$trigger.dataset;
                        if (d && d.fancybox === i)
                            return s.slideTo(n - 1)
                    }
                    a.plugins.Hash.hasSilentClose = !0,
                    a.close()
                }
                t.startFromUrl()
            }
        }, {
            key: "create",
            value: function(e) {
                function i() {
                    window.addEventListener("hashchange", t.onHashChange, !1),
                    t.startFromUrl()
                }
                t.Fancybox = e,
                W && window.requestAnimationFrame((function() {
                    /complete|interactive|loaded/.test(document.readyState) ? i() : document.addEventListener("DOMContentLoaded", i)
                }
                ))
            }
        }, {
            key: "destroy",
            value: function() {
                window.removeEventListener("hashchange", t.onHashChange, !1)
            }
        }, {
            key: "getParsedURL",
            value: function() {
                var t = window.location.hash.substr(1)
                  , e = t.split("-")
                  , i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
                return {
                    hash: t,
                    slug: e.join("-"),
                    index: i
                }
            }
        }]),
        t
    }()
      , Q = {
        pageXOffset: 0,
        pageYOffset: 0,
        element: function() {
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
        },
        activate: function(t) {
            Q.pageXOffset = window.pageXOffset,
            Q.pageYOffset = window.pageYOffset,
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        },
        deactivate: function() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }
    }
      , tt = function() {
        function t(e) {
            o(this, t),
            this.fancybox = e,
            this.active = !1,
            this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
        }
        return s(t, [{
            key: "isActive",
            value: function() {
                return this.active
            }
        }, {
            key: "setTimer",
            value: function() {
                var t = this;
                if (this.active && !this.timer) {
                    var e = this.fancybox.option("slideshow.delay", 3e3);
                    this.timer = setTimeout((function() {
                        t.timer = null,
                        t.fancybox.option("infinite") || t.fancybox.getSlide().index !== t.fancybox.Carousel.slides.length - 1 ? t.fancybox.next() : t.fancybox.jumpTo(0, {
                            friction: 0
                        })
                    }
                    ), e);
                    var i = this.$progress;
                    i || ((i = document.createElement("div")).classList.add("fancybox__progress"),
                    this.fancybox.$carousel.parentNode.insertBefore(i, this.fancybox.$carousel),
                    this.$progress = i,
                    i.offsetHeight),
                    i.style.transitionDuration = "".concat(e, "ms"),
                    i.style.transform = "scaleX(1)"
                }
            }
        }, {
            key: "clearTimer",
            value: function() {
                clearTimeout(this.timer),
                this.timer = null,
                this.$progress && (this.$progress.style.transitionDuration = "",
                this.$progress.style.transform = "",
                this.$progress.offsetHeight)
            }
        }, {
            key: "activate",
            value: function() {
                this.active || (this.active = !0,
                this.fancybox.$container.classList.add("has-slideshow"),
                "done" === this.fancybox.getSlide().state && this.setTimer(),
                document.addEventListener("visibilitychange", this.handleVisibilityChange, !1))
            }
        }, {
            key: "handleVisibilityChange",
            value: function() {
                this.deactivate()
            }
        }, {
            key: "deactivate",
            value: function() {
                this.active = !1,
                this.clearTimer(),
                this.fancybox.$container.classList.remove("has-slideshow"),
                document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1)
            }
        }, {
            key: "toggle",
            value: function() {
                this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate()
            }
        }]),
        t
    }()
      , et = {
        display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"],
        autoEnable: !0,
        items: {
            counter: {
                position: "left",
                type: "div",
                class: "fancybox__counter",
                html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
                attr: {
                    tabindex: -1
                }
            },
            prev: {
                type: "button",
                class: "fancybox__button--prev",
                label: "PREV",
                html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
                attr: {
                    "data-fancybox-prev": ""
                }
            },
            next: {
                type: "button",
                class: "fancybox__button--next",
                label: "NEXT",
                html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
                attr: {
                    "data-fancybox-next": ""
                }
            },
            fullscreen: {
                type: "button",
                class: "fancybox__button--fullscreen",
                label: "TOGGLE_FULLSCREEN",
                html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
                click: function(t) {
                    t.preventDefault(),
                    Q.element() ? Q.deactivate() : Q.activate(this.fancybox.$container)
                }
            },
            slideshow: {
                type: "button",
                class: "fancybox__button--slideshow",
                label: "TOGGLE_SLIDESHOW",
                html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
                click: function(t) {
                    t.preventDefault(),
                    this.Slideshow.toggle()
                }
            },
            zoom: {
                type: "button",
                class: "fancybox__button--zoom",
                label: "TOGGLE_ZOOM",
                html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
                click: function(t) {
                    t.preventDefault();
                    var e = this.fancybox.getSlide().Panzoom;
                    e && e.toggleZoom()
                }
            },
            download: {
                type: "link",
                label: "DOWNLOAD",
                class: "fancybox__button--download",
                html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
                click: function(t) {
                    t.stopPropagation()
                }
            },
            thumbs: {
                type: "button",
                label: "TOGGLE_THUMBS",
                class: "fancybox__button--thumbs",
                html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
                click: function(t) {
                    t.stopPropagation();
                    var e = this.fancybox.plugins.Thumbs;
                    e && e.toggle()
                }
            },
            close: {
                type: "button",
                label: "CLOSE",
                class: "fancybox__button--close",
                html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
                attr: {
                    "data-fancybox-close": "",
                    tabindex: 0
                }
            }
        }
    }
      , it = function() {
        function t(e) {
            var i = this;
            o(this, t),
            this.fancybox = e,
            this.$container = null,
            this.state = "init";
            for (var n = 0, a = ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"]; n < a.length; n++) {
                var s = a[n];
                this[s] = this[s].bind(this)
            }
            this.events = {
                init: this.onInit,
                prepare: this.onPrepare,
                done: this.onDone,
                keydown: this.onKeydown,
                closing: this.onClosing,
                "Carousel.change": this.onChange,
                "Carousel.settle": this.onSettle,
                "Carousel.Panzoom.touchStart": function() {
                    return i.onRefresh()
                },
                "Image.startAnimation": function(t, e) {
                    return i.onRefresh(e)
                },
                "Image.afterUpdate": function(t, e) {
                    return i.onRefresh(e)
                }
            }
        }
        return s(t, [{
            key: "onInit",
            value: function() {
                if (this.fancybox.option("Toolbar.autoEnable")) {
                    var t, e = !1, i = x(this.fancybox.items);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            if ("image" === t.value.type) {
                                e = !0;
                                break
                            }
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    if (!e)
                        return void (this.state = "disabled")
                }
                var n, o = x(this.fancybox.option("Toolbar.display"));
                try {
                    for (o.s(); !(n = o.n()).done; ) {
                        var a = n.value;
                        if ("close" === (w(a) ? a.id : a)) {
                            this.fancybox.options.closeButton = !1;
                            break
                        }
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
            }
        }, {
            key: "onPrepare",
            value: function() {
                var t = this.fancybox;
                if ("init" === this.state && (this.build(),
                this.update(),
                this.Slideshow = new tt(t),
                !t.Carousel.prevPage && (t.option("slideshow.autoStart") && this.Slideshow.activate(),
                t.option("fullscreen.autoStart") && !Q.element())))
                    try {
                        Q.activate(t.$container)
                    } catch (t) {}
            }
        }, {
            key: "onFsChange",
            value: function() {
                window.scrollTo(Q.pageXOffset, Q.pageYOffset)
            }
        }, {
            key: "onSettle",
            value: function() {
                var t = this.fancybox
                  , e = this.Slideshow;
                e && e.isActive() && (t.getSlide().index !== t.Carousel.slides.length - 1 || t.option("infinite") ? "done" === t.getSlide().state && e.setTimer() : e.deactivate())
            }
        }, {
            key: "onChange",
            value: function() {
                this.update(),
                this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer()
            }
        }, {
            key: "onDone",
            value: function(t, e) {
                var i = this.Slideshow;
                e.index === t.getSlide().index && (this.update(),
                i && i.isActive() && (t.option("infinite") || e.index !== t.Carousel.slides.length - 1 ? i.setTimer() : i.deactivate()))
            }
        }, {
            key: "onRefresh",
            value: function(t) {
                t && t.index !== this.fancybox.getSlide().index || (this.update(),
                !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate())
            }
        }, {
            key: "onKeydown",
            value: function(t, e, i) {
                " " === e && this.Slideshow && (this.Slideshow.toggle(),
                i.preventDefault())
            }
        }, {
            key: "onClosing",
            value: function() {
                this.Slideshow && this.Slideshow.deactivate(),
                document.removeEventListener("fullscreenchange", this.onFsChange)
            }
        }, {
            key: "createElement",
            value: function(t) {
                var e, i;
                ("div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button")).classList.add("carousel__button"),
                e.innerHTML = t.html,
                e.setAttribute("tabindex", t.tabindex || 0),
                t.class) && (i = e.classList).add.apply(i, m(t.class.split(" ")));
                for (var n in t.attr)
                    e.setAttribute(n, t.attr[n]);
                t.label && e.setAttribute("title", this.fancybox.localize("{{".concat(t.label, "}}"))),
                t.click && e.addEventListener("click", t.click.bind(this)),
                "prev" === t.id && e.setAttribute("data-fancybox-prev", ""),
                "next" === t.id && e.setAttribute("data-fancybox-next", "");
                var o = e.querySelector("svg");
                return o && (o.setAttribute("role", "img"),
                o.setAttribute("tabindex", "-1"),
                o.setAttribute("xmlns", "http://www.w3.org/2000/svg")),
                e
            }
        }, {
            key: "build",
            value: function() {
                var t = this;
                this.cleanup();
                var e, i = this.fancybox.option("Toolbar.items"), n = [{
                    position: "left",
                    items: []
                }, {
                    position: "center",
                    items: []
                }, {
                    position: "right",
                    items: []
                }], o = this.fancybox.plugins.Thumbs, a = x(this.fancybox.option("Toolbar.display"));
                try {
                    var s = function() {
                        var a = e.value
                          , s = void 0
                          , r = void 0;
                        if (w(a) ? (s = a.id,
                        r = k({}, i[s], a)) : r = i[s = a],
                        ["counter", "next", "prev", "slideshow"].includes(s) && t.fancybox.items.length < 2)
                            return "continue";
                        if ("fullscreen" === s) {
                            if (!document.fullscreenEnabled || window.fullScreen)
                                return "continue";
                            document.addEventListener("fullscreenchange", t.onFsChange)
                        }
                        if ("thumbs" === s && (!o || "disabled" === o.state))
                            return "continue";
                        if (!r)
                            return "continue";
                        var l = r.position || "right"
                          , c = n.find((function(t) {
                            return t.position === l
                        }
                        ));
                        c && c.items.push(r)
                    };
                    for (a.s(); !(e = a.n()).done; )
                        s()
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                var r = document.createElement("div");
                r.classList.add("fancybox__toolbar");
                for (var l = 0, c = n; l < c.length; l++) {
                    var h = c[l];
                    if (h.items.length) {
                        var d = document.createElement("div");
                        d.classList.add("fancybox__toolbar__items"),
                        d.classList.add("fancybox__toolbar__items--".concat(h.position));
                        var u, f = x(h.items);
                        try {
                            for (f.s(); !(u = f.n()).done; ) {
                                var v = u.value;
                                d.appendChild(this.createElement(v))
                            }
                        } catch (t) {
                            f.e(t)
                        } finally {
                            f.f()
                        }
                        r.appendChild(d)
                    }
                }
                this.fancybox.$carousel.parentNode.insertBefore(r, this.fancybox.$carousel),
                this.$container = r
            }
        }, {
            key: "update",
            value: function() {
                var t, e = this.fancybox.getSlide(), i = e.index, n = this.fancybox.items.length, o = e.downloadSrc || ("image" !== e.type || e.error ? null : e.src), a = x(this.fancybox.$container.querySelectorAll("a.fancybox__button--download"));
                try {
                    for (a.s(); !(t = a.n()).done; ) {
                        var s = t.value;
                        o ? (s.removeAttribute("disabled"),
                        s.removeAttribute("tabindex"),
                        s.setAttribute("href", o),
                        s.setAttribute("download", o),
                        s.setAttribute("target", "_blank")) : (s.setAttribute("disabled", ""),
                        s.setAttribute("tabindex", -1),
                        s.removeAttribute("href"),
                        s.removeAttribute("download"))
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                var r, l = e.Panzoom, c = l && l.option("maxScale") > l.option("baseScale"), h = x(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"));
                try {
                    for (h.s(); !(r = h.n()).done; ) {
                        var d = r.value;
                        c ? d.removeAttribute("disabled") : d.setAttribute("disabled", "")
                    }
                } catch (t) {
                    h.e(t)
                } finally {
                    h.f()
                }
                var u, f = x(this.fancybox.$container.querySelectorAll("[data-fancybox-index]"));
                try {
                    for (f.s(); !(u = f.n()).done; ) {
                        u.value.innerHTML = e.index + 1
                    }
                } catch (t) {
                    f.e(t)
                } finally {
                    f.f()
                }
                var v, p = x(this.fancybox.$container.querySelectorAll("[data-fancybox-count]"));
                try {
                    for (p.s(); !(v = p.n()).done; ) {
                        v.value.innerHTML = n
                    }
                } catch (t) {
                    p.e(t)
                } finally {
                    p.f()
                }
                if (!this.fancybox.option("infinite")) {
                    var g, m = x(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"));
                    try {
                        for (m.s(); !(g = m.n()).done; ) {
                            var y = g.value;
                            0 === i ? y.setAttribute("disabled", "") : y.removeAttribute("disabled")
                        }
                    } catch (t) {
                        m.e(t)
                    } finally {
                        m.f()
                    }
                    var b, w = x(this.fancybox.$container.querySelectorAll("[data-fancybox-next]"));
                    try {
                        for (w.s(); !(b = w.n()).done; ) {
                            var k = b.value;
                            i === n - 1 ? k.setAttribute("disabled", "") : k.removeAttribute("disabled")
                        }
                    } catch (t) {
                        w.e(t)
                    } finally {
                        w.f()
                    }
                }
            }
        }, {
            key: "cleanup",
            value: function() {
                this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(),
                this.$container && this.$container.remove(),
                this.$container = null
            }
        }, {
            key: "attach",
            value: function() {
                this.fancybox.on(this.events)
            }
        }, {
            key: "detach",
            value: function() {
                this.fancybox.off(this.events),
                this.cleanup()
            }
        }]),
        t
    }();
    it.defaults = et;
    var nt = {
        ScrollLock: U,
        Thumbs: Y,
        Html: G,
        Toolbar: it,
        Image: K,
        Hash: J
    }
      , ot = {
        startIndex: 0,
        preload: 1,
        infinite: !0,
        showClass: "fancybox-zoomInUp",
        hideClass: "fancybox-fadeOut",
        animated: !0,
        hideScrollbar: !0,
        parentEl: null,
        mainClass: null,
        autoFocus: !0,
        trapFocus: !0,
        placeFocusBack: !0,
        click: "close",
        closeButton: "inside",
        dragToClose: !0,
        keyboard: {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            PageUp: "next",
            PageDown: "prev",
            ArrowUp: "next",
            ArrowDown: "prev",
            ArrowRight: "next",
            ArrowLeft: "prev"
        },
        template: {
            closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
            spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
            main: null
        },
        l10n: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            MODAL: "You can close this modal content with the ESC key",
            ERROR: "Something Went Wrong, Please Try Again Later",
            IMAGE_ERROR: "Image Not Found",
            ELEMENT_NOT_FOUND: "HTML Element Not Found",
            AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
            AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
            IFRAME_ERROR: "Error Loading Page",
            TOGGLE_ZOOM: "Toggle zoom level",
            TOGGLE_THUMBS: "Toggle thumbnails",
            TOGGLE_SLIDESHOW: "Toggle slideshow",
            TOGGLE_FULLSCREEN: "Toggle full-screen mode",
            DOWNLOAD: "Download"
        }
    }
      , at = new Map
      , st = 0
      , rt = function(t) {
        l(i, t);
        var e = f(i);
        function i(t) {
            var n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return o(this, i),
            t = t.map((function(t) {
                return t.width && (t._width = t.width),
                t.height && (t._height = t.height),
                t
            }
            )),
            (n = e.call(this, k(!0, {}, ot, a))).bindHandlers(),
            n.state = "init",
            n.setItems(t),
            n.attachPlugins(i.Plugins),
            n.trigger("init"),
            !0 === n.option("hideScrollbar") && n.hideScrollbar(),
            n.initLayout(),
            n.initCarousel(),
            n.attachEvents(),
            at.set(n.id, d(n)),
            n.trigger("prepare"),
            n.state = "ready",
            n.trigger("ready"),
            n.$container.setAttribute("aria-hidden", "false"),
            n.option("trapFocus") && n.focus(),
            n
        }
        return s(i, [{
            key: "option",
            value: function(t) {
                for (var e, n = this.getSlide(), o = n ? n[t] : void 0, a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++)
                    s[r - 1] = arguments[r];
                if (void 0 !== o) {
                    var l;
                    if ("function" == typeof o)
                        o = (l = o).call.apply(l, [this, this].concat(s));
                    return o
                }
                return (e = p(c(i.prototype), "option", this)).call.apply(e, [this, t].concat(s))
            }
        }, {
            key: "bindHandlers",
            value: function() {
                for (var t = 0, e = ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"]; t < e.length; t++) {
                    var i = e[t];
                    this[i] = this[i].bind(this)
                }
            }
        }, {
            key: "attachEvents",
            value: function() {
                document.addEventListener("mousedown", this.onMousedown),
                document.addEventListener("keydown", this.onKeydown, !0),
                this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0),
                this.$container.addEventListener("click", this.onClick)
            }
        }, {
            key: "detachEvents",
            value: function() {
                document.removeEventListener("mousedown", this.onMousedown),
                document.removeEventListener("keydown", this.onKeydown, !0),
                document.removeEventListener("focus", this.onFocus, !0),
                this.$container.removeEventListener("click", this.onClick)
            }
        }, {
            key: "initLayout",
            value: function() {
                var t = this;
                this.$root = this.option("parentEl") || document.body;
                var e = this.option("template.main");
                e && (this.$root.insertAdjacentHTML("beforeend", this.localize(e)),
                this.$container = this.$root.querySelector(".fancybox__container")),
                this.$container || (this.$container = document.createElement("div"),
                this.$root.appendChild(this.$container)),
                this.$container.onscroll = function() {
                    return t.$container.scrollLeft = 0,
                    !1
                }
                ,
                Object.entries({
                    class: "fancybox__container",
                    role: "dialog",
                    tabIndex: "-1",
                    "aria-modal": "true",
                    "aria-hidden": "true",
                    "aria-label": this.localize("{{MODAL}}")
                }).forEach((function(e) {
                    var i;
                    return (i = t.$container).setAttribute.apply(i, m(e))
                }
                )),
                this.option("animated") && this.$container.classList.add("is-animated"),
                this.$backdrop = this.$container.querySelector(".fancybox__backdrop"),
                this.$backdrop || (this.$backdrop = document.createElement("div"),
                this.$backdrop.classList.add("fancybox__backdrop"),
                this.$container.appendChild(this.$backdrop)),
                this.$carousel = this.$container.querySelector(".fancybox__carousel"),
                this.$carousel || (this.$carousel = document.createElement("div"),
                this.$carousel.classList.add("fancybox__carousel"),
                this.$container.appendChild(this.$carousel)),
                this.$container.Fancybox = this,
                this.id = this.$container.getAttribute("id"),
                this.id || (this.id = this.options.id || ++st,
                this.$container.setAttribute("id", "fancybox-" + this.id));
                var i, n = this.option("mainClass");
                n && (i = this.$container.classList).add.apply(i, m(n.split(" ")));
                return document.documentElement.classList.add("with-fancybox"),
                this.trigger("initLayout"),
                this
            }
        }, {
            key: "setItems",
            value: function(t) {
                var e, i = [], n = x(t);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var o = e.value
                          , a = o.$trigger;
                        if (a) {
                            var s = a.dataset || {};
                            o.src = s.src || a.getAttribute("href") || o.src,
                            o.type = s.type || o.type,
                            !o.src && a instanceof HTMLImageElement && (o.src = a.currentSrc || o.$trigger.src)
                        }
                        var r = o.$thumb;
                        if (!r) {
                            var l = o.$trigger && o.$trigger.origTarget;
                            l && (r = l instanceof HTMLImageElement ? l : l.querySelector("img:not([aria-hidden])")),
                            !r && o.$trigger && (r = o.$trigger instanceof HTMLImageElement ? o.$trigger : o.$trigger.querySelector("img:not([aria-hidden])"))
                        }
                        o.$thumb = r || null;
                        var c = o.thumb;
                        !c && r && !(c = r.currentSrc || r.src) && r.dataset && (c = r.dataset.lazySrc || r.dataset.src),
                        c || "image" !== o.type || (c = o.src),
                        o.thumb = c || null,
                        o.caption = o.caption || "",
                        i.push(o)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                this.items = i
            }
        }, {
            key: "initCarousel",
            value: function() {
                var t = this;
                return this.Carousel = new H(this.$carousel,k(!0, {}, {
                    prefix: "",
                    classNames: {
                        viewport: "fancybox__viewport",
                        track: "fancybox__track",
                        slide: "fancybox__slide"
                    },
                    textSelection: !0,
                    preload: this.option("preload"),
                    friction: .88,
                    slides: this.items,
                    initialPage: this.options.startIndex,
                    slidesPerPage: 1,
                    infiniteX: this.option("infinite"),
                    infiniteY: !0,
                    l10n: this.option("l10n"),
                    Dots: !1,
                    Navigation: {
                        classNames: {
                            main: "fancybox__nav",
                            button: "carousel__button",
                            next: "is-next",
                            prev: "is-prev"
                        }
                    },
                    Panzoom: {
                        textSelection: !0,
                        panOnlyZoomed: function() {
                            return t.Carousel && t.Carousel.pages && t.Carousel.pages.length < 2 && !t.option("dragToClose")
                        },
                        lockAxis: function() {
                            if (t.Carousel) {
                                var e = "x";
                                return t.option("dragToClose") && (e += "y"),
                                e
                            }
                        }
                    },
                    on: {
                        "*": function(e) {
                            for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                                n[o - 1] = arguments[o];
                            return t.trigger.apply(t, ["Carousel.".concat(e)].concat(n))
                        },
                        init: function(e) {
                            return t.Carousel = e
                        },
                        createSlide: this.onCreateSlide,
                        settle: this.onSettle
                    }
                }, this.option("Carousel"))),
                this.option("dragToClose") && this.Carousel.Panzoom.on({
                    touchMove: this.onTouchMove,
                    afterTransform: this.onTransform,
                    touchEnd: this.onTouchEnd
                }),
                this.trigger("initCarousel"),
                this
            }
        }, {
            key: "onCreateSlide",
            value: function(t, e) {
                var i = e.caption || "";
                if ("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)),
                "string" == typeof i && i.length) {
                    var n = document.createElement("div")
                      , o = "fancybox__caption_".concat(this.id, "_").concat(e.index);
                    n.className = "fancybox__caption",
                    n.innerHTML = i,
                    n.setAttribute("id", o),
                    e.$caption = e.$el.appendChild(n),
                    e.$el.classList.add("has-caption"),
                    e.$el.setAttribute("aria-labelledby", o)
                }
            }
        }, {
            key: "onSettle",
            value: function() {
                this.option("autoFocus") && this.focus()
            }
        }, {
            key: "onFocus",
            value: function(t) {
                this.isTopmost() && this.focus(t)
            }
        }, {
            key: "onClick",
            value: function(t) {
                if (!t.defaultPrevented) {
                    var e = t.composedPath()[0];
                    if (e.matches("[data-fancybox-close]"))
                        return t.preventDefault(),
                        void i.close(!1, t);
                    if (e.matches("[data-fancybox-next]"))
                        return t.preventDefault(),
                        void i.next();
                    if (e.matches("[data-fancybox-prev]"))
                        return t.preventDefault(),
                        void i.prev();
                    var n = document.activeElement;
                    if (n) {
                        if (n.closest("[contenteditable]"))
                            return;
                        e.matches(X) || n.blur()
                    }
                    if (!e.closest(".fancybox__content"))
                        if (!getSelection().toString().length)
                            if (!1 !== this.trigger("click", t))
                                switch (this.option("click")) {
                                case "close":
                                    this.close();
                                    break;
                                case "next":
                                    this.next()
                                }
                }
            }
        }, {
            key: "onTouchMove",
            value: function() {
                var t = this.getSlide().Panzoom;
                return !t || 1 === t.content.scale
            }
        }, {
            key: "onTouchEnd",
            value: function(t) {
                var e = t.dragOffset.y;
                Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut".concat(t.content.y < 0 ? "Up" : "Down")),
                this.close()) : "y" === t.lockAxis && t.panTo({
                    y: 0
                })
            }
        }, {
            key: "onTransform",
            value: function(t) {
                if (this.$backdrop) {
                    var e = Math.abs(t.content.y)
                      , i = e < 1 ? "" : Math.max(.33, Math.min(1, 1 - e / t.content.fitHeight * 1.5));
                    this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                    this.$container.style.setProperty("--fancybox-opacity", i)
                }
            }
        }, {
            key: "onMousedown",
            value: function() {
                "ready" === this.state && document.body.classList.add("is-using-mouse")
            }
        }, {
            key: "onKeydown",
            value: function(t) {
                if (this.isTopmost()) {
                    document.body.classList.remove("is-using-mouse");
                    var e = t.key
                      , i = this.option("keyboard");
                    if (i && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                        var n = t.composedPath()[0]
                          , o = document.activeElement && document.activeElement.classList
                          , a = o && o.contains("carousel__button");
                        if ("Escape" !== e && !a)
                            if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n.nodeName))
                                return;
                        if (!1 !== this.trigger("keydown", e, t)) {
                            var s = i[e];
                            "function" == typeof this[s] && this[s]()
                        }
                    }
                }
            }
        }, {
            key: "getSlide",
            value: function() {
                var t = this.Carousel;
                if (!t)
                    return null;
                var e = null === t.page ? t.option("initialPage") : t.page
                  , i = t.pages || [];
                return i.length && i[e] ? i[e].slides[0] : null
            }
        }, {
            key: "focus",
            value: function(t) {
                if (!(i.ignoreFocusChange || ["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1)) {
                    var e = this.$container
                      , n = this.getSlide()
                      , o = "done" === n.state ? n.$el : null;
                    if (!o || !o.contains(document.activeElement)) {
                        t && t.preventDefault(),
                        i.ignoreFocusChange = !0;
                        for (var a, s = [], r = 0, l = Array.from(e.querySelectorAll(X)); r < l.length; r++) {
                            var c = l[r]
                              , h = c.offsetParent
                              , d = o && o.contains(c)
                              , u = !this.Carousel.$viewport.contains(c);
                            h && (d || u) ? (s.push(c),
                            void 0 !== c.dataset.origTabindex && (c.tabIndex = c.dataset.origTabindex,
                            c.removeAttribute("data-orig-tabindex")),
                            (c.hasAttribute("autoFocus") || !a && d && !c.classList.contains("carousel__button")) && (a = c)) : (c.dataset.origTabindex = void 0 === c.dataset.origTabindex ? c.getAttribute("tabindex") : c.dataset.origTabindex,
                            c.tabIndex = -1)
                        }
                        t ? s.indexOf(t.target) > -1 ? this.lastFocus = t.target : this.lastFocus === e ? q(s[s.length - 1]) : q(e) : this.option("autoFocus") && a ? q(a) : s.indexOf(document.activeElement) < 0 && q(e),
                        this.lastFocus = document.activeElement,
                        i.ignoreFocusChange = !1
                    }
                }
            }
        }, {
            key: "hideScrollbar",
            value: function() {
                if (W) {
                    var t = window.innerWidth - document.documentElement.getBoundingClientRect().width
                      , e = "fancybox-style-noscroll"
                      , i = document.getElementById(e);
                    i || t > 0 && ((i = document.createElement("style")).id = e,
                    i.type = "text/css",
                    i.innerHTML = ".compensate-for-scrollbar {padding-right: ".concat(t, "px;}"),
                    document.getElementsByTagName("head")[0].appendChild(i),
                    document.body.classList.add("compensate-for-scrollbar"))
                }
            }
        }, {
            key: "revealScrollbar",
            value: function() {
                document.body.classList.remove("compensate-for-scrollbar");
                var t = document.getElementById("fancybox-style-noscroll");
                t && t.remove()
            }
        }, {
            key: "clearContent",
            value: function(t) {
                this.Carousel.trigger("removeSlide", t),
                t.$content && (t.$content.remove(),
                t.$content = null),
                t.$closeButton && (t.$closeButton.remove(),
                t.$closeButton = null),
                t._className && t.$el.classList.remove(t._className)
            }
        }, {
            key: "setContent",
            value: function(t, e) {
                var i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = t.$el;
                if (e instanceof HTMLElement)
                    ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (i = document.createElement("div")).appendChild(e) : i = e;
                else {
                    var a = document.createRange().createContextualFragment(e);
                    (i = document.createElement("div")).appendChild(a)
                }
                if (t.filter && !t.error && (i = i.querySelector(t.filter)),
                i instanceof Element)
                    return t._className = "has-".concat(n.suffix || t.type || "unknown"),
                    o.classList.add(t._className),
                    i.classList.add("fancybox__content"),
                    "none" !== i.style.display && "none" !== getComputedStyle(i).getPropertyValue("display") || (i.style.display = t.display || this.option("defaultDisplay") || "flex"),
                    t.id && i.setAttribute("id", t.id),
                    t.$content = i,
                    o.prepend(i),
                    this.manageCloseButton(t),
                    "loading" !== t.state && this.revealContent(t),
                    i;
                this.setError(t, "{{ELEMENT_NOT_FOUND}}")
            }
        }, {
            key: "manageCloseButton",
            value: function(t) {
                var e = this
                  , i = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
                if (i && ("top" !== i || !this.$closeButton)) {
                    var n = document.createElement("button");
                    n.classList.add("carousel__button", "is-close"),
                    n.setAttribute("title", this.options.l10n.CLOSE),
                    n.innerHTML = this.option("template.closeButton"),
                    n.addEventListener("click", (function(t) {
                        return e.close(t)
                    }
                    )),
                    "inside" === i ? (t.$closeButton && t.$closeButton.remove(),
                    t.$closeButton = t.$content.appendChild(n)) : this.$closeButton = this.$container.insertBefore(n, this.$container.firstChild)
                }
            }
        }, {
            key: "revealContent",
            value: function(t) {
                var e = this;
                this.trigger("reveal", t),
                t.$content.style.visibility = "";
                var i = !1;
                t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (i = void 0 === t.showClass ? this.option("showClass") : t.showClass),
                i ? (t.state = "animating",
                this.animateCSS(t.$content, i, (function() {
                    e.done(t)
                }
                ))) : this.done(t)
            }
        }, {
            key: "animateCSS",
            value: function(t, e, i) {
                if (t && t.dispatchEvent(new CustomEvent("animationend",{
                    bubbles: !0,
                    cancelable: !0
                })),
                t && e) {
                    t.addEventListener("animationend", (function n(o) {
                        o.currentTarget === this && (t.removeEventListener("animationend", n),
                        i && i(),
                        t.classList.remove(e))
                    }
                    )),
                    t.classList.add(e)
                } else
                    "function" == typeof i && i()
            }
        }, {
            key: "done",
            value: function(t) {
                t.state = "done",
                this.trigger("done", t);
                var e = this.getSlide();
                e && t.index === e.index && this.option("autoFocus") && this.focus()
            }
        }, {
            key: "setError",
            value: function(t, e) {
                t.error = e,
                this.hideLoading(t),
                this.clearContent(t);
                var i = document.createElement("div");
                i.classList.add("fancybox-error"),
                i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"),
                this.setContent(t, i, {
                    suffix: "error"
                })
            }
        }, {
            key: "showLoading",
            value: function(t) {
                var e = this;
                t.state = "loading",
                t.$el.classList.add("is-loading");
                var i = t.$el.querySelector(".fancybox__spinner");
                i || ((i = document.createElement("div")).classList.add("fancybox__spinner"),
                i.innerHTML = this.option("template.spinner"),
                i.addEventListener("click", (function() {
                    e.Carousel.Panzoom.velocity || e.close()
                }
                )),
                t.$el.prepend(i))
            }
        }, {
            key: "hideLoading",
            value: function(t) {
                var e = t.$el && t.$el.querySelector(".fancybox__spinner");
                e && (e.remove(),
                t.$el.classList.remove("is-loading")),
                "loading" === t.state && (this.trigger("load", t),
                t.state = "ready")
            }
        }, {
            key: "next",
            value: function() {
                var t = this.Carousel;
                t && t.pages.length > 1 && t.slideNext()
            }
        }, {
            key: "prev",
            value: function() {
                var t = this.Carousel;
                t && t.pages.length > 1 && t.slidePrev()
            }
        }, {
            key: "jumpTo",
            value: function() {
                var t;
                this.Carousel && (t = this.Carousel).slideTo.apply(t, arguments)
            }
        }, {
            key: "isClosing",
            value: function() {
                return ["closing", "customClosing", "destroy"].includes(this.state)
            }
        }, {
            key: "isTopmost",
            value: function() {
                return i.getInstance().id == this.id
            }
        }, {
            key: "close",
            value: function(t) {
                var e = this;
                if (t && t.preventDefault(),
                !this.isClosing() && !1 !== this.trigger("shouldClose", t) && (this.state = "closing",
                this.Carousel.Panzoom.destroy(),
                this.detachEvents(),
                this.trigger("closing", t),
                "destroy" !== this.state)) {
                    this.$container.setAttribute("aria-hidden", "true"),
                    this.$container.classList.add("is-closing");
                    var i = this.getSlide();
                    if (this.Carousel.slides.forEach((function(t) {
                        t.$content && t.index !== i.index && e.Carousel.trigger("removeSlide", t)
                    }
                    )),
                    "closing" === this.state) {
                        var n = void 0 === i.hideClass ? this.option("hideClass") : i.hideClass;
                        this.animateCSS(i.$content, n, (function() {
                            e.destroy()
                        }
                        ), !0)
                    }
                }
            }
        }, {
            key: "destroy",
            value: function() {
                if ("destroy" !== this.state) {
                    this.state = "destroy",
                    this.trigger("destroy");
                    var t = this.option("placeFocusBack") ? this.option("triggerTarget", this.getSlide().$trigger) : null;
                    this.Carousel.destroy(),
                    this.detachPlugins(),
                    this.Carousel = null,
                    this.options = {},
                    this.events = {},
                    this.$container.remove(),
                    this.$container = this.$backdrop = this.$carousel = null,
                    t && q(t),
                    at.delete(this.id);
                    var e = i.getInstance();
                    e ? e.focus() : (document.documentElement.classList.remove("with-fancybox"),
                    document.body.classList.remove("is-using-mouse"),
                    this.revealScrollbar())
                }
            }
        }], [{
            key: "show",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new i(t,e)
            }
        }, {
            key: "fromEvent",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t.defaultPrevented && !(t.button && 0 !== t.button || t.ctrlKey || t.metaKey || t.shiftKey)) {
                    var n, o, a, s = t.composedPath()[0], r = s;
                    if ((r.matches("[data-fancybox-trigger]") || (r = r.closest("[data-fancybox-trigger]"))) && (e.triggerTarget = r,
                    n = r && r.dataset && r.dataset.fancyboxTrigger),
                    n) {
                        var l = document.querySelectorAll('[data-fancybox="'.concat(n, '"]'))
                          , c = parseInt(r.dataset.fancyboxIndex, 10) || 0;
                        r = l.length ? l[c] : r
                    }
                    Array.from(i.openers.keys()).reverse().some((function(e) {
                        a = r || s;
                        var i = !1;
                        try {
                            a instanceof Element && ("string" == typeof e || e instanceof String) && (i = a.matches(e) || (a = a.closest(e)))
                        } catch (t) {}
                        return !!i && (t.preventDefault(),
                        o = e,
                        !0)
                    }
                    ));
                    var h = !1;
                    if (o) {
                        e.event = t,
                        e.target = a,
                        a.origTarget = s,
                        h = i.fromOpener(o, e);
                        var d = i.getInstance();
                        d && "ready" === d.state && t.detail && document.body.classList.add("is-using-mouse")
                    }
                    return h
                }
            }
        }, {
            key: "fromOpener",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = function(t) {
                    for (var e = ["false", "0", "no", "null", "undefined"], i = ["true", "1", "yes"], n = Object.assign({}, t.dataset), o = {}, a = 0, s = Object.entries(n); a < s.length; a++) {
                        var r = g(s[a], 2)
                          , l = r[0]
                          , c = r[1];
                        if ("fancybox" !== l)
                            if ("width" === l || "height" === l)
                                o["_".concat(l)] = c;
                            else if ("string" == typeof c || c instanceof String)
                                if (e.indexOf(c) > -1)
                                    o[l] = !1;
                                else if (i.indexOf(o[l]) > -1)
                                    o[l] = !0;
                                else
                                    try {
                                        o[l] = JSON.parse(c)
                                    } catch (t) {
                                        o[l] = c
                                    }
                            else
                                o[l] = c
                    }
                    return t instanceof Element && (o.$trigger = t),
                    o
                }
                  , o = []
                  , a = e.startIndex || 0
                  , s = e.target || null
                  , r = void 0 !== (e = k({}, e, i.openers.get(t))).groupAll && e.groupAll
                  , l = void 0 === e.groupAttr ? "data-fancybox" : e.groupAttr
                  , c = l && s ? s.getAttribute("".concat(l)) : "";
                if (!s || c || r) {
                    var h = e.root || (s ? s.getRootNode() : document.body);
                    o = [].slice.call(h.querySelectorAll(t))
                }
                if (s && !r && (o = c ? o.filter((function(t) {
                    return t.getAttribute("".concat(l)) === c
                }
                )) : [s]),
                !o.length)
                    return !1;
                var d = i.getInstance();
                return !(d && o.indexOf(d.options.$trigger) > -1) && (a = s ? o.indexOf(s) : a,
                new i(o = o.map(n),k({}, e, {
                    startIndex: a,
                    $trigger: s
                })))
            }
        }, {
            key: "bind",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                function n() {
                    document.body.addEventListener("click", i.fromEvent, !1)
                }
                W && (i.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? n() : document.addEventListener("DOMContentLoaded", n)),
                i.openers.set(t, e))
            }
        }, {
            key: "unbind",
            value: function(t) {
                i.openers.delete(t),
                i.openers.size || i.destroy()
            }
        }, {
            key: "destroy",
            value: function() {
                for (var t; t = i.getInstance(); )
                    t.destroy();
                i.openers = new Map,
                document.body.removeEventListener("click", i.fromEvent, !1)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return t ? at.get(t) : Array.from(at.values()).reverse().find((function(t) {
                    return !t.isClosing() && t
                }
                )) || null
            }
        }, {
            key: "close",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                if (t) {
                    var n, o = x(at.values());
                    try {
                        for (o.s(); !(n = o.n()).done; ) {
                            var a = n.value;
                            a.close(e)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                } else {
                    var s = i.getInstance();
                    s && s.close(e)
                }
            }
        }, {
            key: "next",
            value: function() {
                var t = i.getInstance();
                t && t.next()
            }
        }, {
            key: "prev",
            value: function() {
                var t = i.getInstance();
                t && t.prev()
            }
        }]),
        i
    }(O);
    rt.version = "4.0.31",
    rt.defaults = ot,
    rt.openers = new Map,
    rt.Plugins = nt,
    rt.bind("[data-fancybox]");
    for (var lt = 0, ct = Object.entries(rt.Plugins || {}); lt < ct.length; lt++) {
        var ht = g(ct[lt], 2);
        ht[0];
        var dt = ht[1];
        "function" == typeof dt.create && dt.create(rt)
    }
    t.Carousel = H,
    t.Fancybox = rt,
    t.Panzoom = M
}
));
