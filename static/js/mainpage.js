function _slicedToArray(t, e) {
    return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _nonIterableRest()
}
function _nonIterableRest() {
    throw TypeError("Invalid attempt to destructure non-iterable instance")
}
function _iterableToArrayLimit(t, e) {
    var i = []
      , a = !0
      , s = !1
      , n = void 0;
    try {
        for (var o, r = t[Symbol.iterator](); !(a = (o = r.next()).done) && (i.push(o.value),
        !e || i.length !== e); a = !0)
            ;
    } catch (h) {
        s = !0,
        n = h
    } finally {
        try {
            a || null == r.return || r.return()
        } finally {
            if (s)
                throw n
        }
    }
    return i
}
function _arrayWithHoles(t) {
    if (Array.isArray(t))
        return t
}
function timeZoneAbbreviation() {
    var t, e, i, a, s, n, o, r;
    if ((i = (null != (o = (e = new Date().toString()).split("(")[1]) ? o.slice(0, -1) : 0) || e.split(" "))instanceof Array) {
        n = [];
        for (var a = 0, s = i.length; a < s; a++)
            ((t = null !== (o = (r = i[a]).match(/\b[A-Z]+\b/))) ? o[0] : 0) && n.push(t);
        i = n.pop()
    }
    return i
}
function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments))
}
$(document).ready(function() {
    var t, e;
    t = $(".if-you-tired__item"),
    e = 0,
    t.length > 0 && setInterval(function() {
        t.each(function() {
            $(this).removeClass("spinned")
        }),
        t.eq(e).addClass("spinned"),
        e === t.length - 1 ? e = 0 : e++
    }, 3e3),
    CSS.supports("-webkit-text-stroke", "2px #fff") && $(".pls-decorate").each(function() {
        $(this).addClass("pls-decorate--yep")
    }),
    $("body").on("click", "[data-tabs-target]", function(t) {
        if ($(this).hasClass("active"))
            return !1;
        var e = $(this)
          , i = e.closest(".tabs")
          , a = i.find("#".concat(e.attr("data-tabs-target")));
        i.css("height", i.outerHeight()),
        i.find(".tabs__item").each(function() {
            $(this).fadeOut(250)
        }),
        setTimeout(function() {
            a.fadeIn(250),
            i.css("height", "")
        }, 300),
        i.find(".tabs__nav > .active").each(function() {
            $(this).removeClass("active")
        }),
        e.addClass("active")
    })
}),
function() {
    var lax = function() {
        for (var lax = {
            elements: []
        }, lastY = 0, currentBreakpoint = "default", breakpointsSeparator = "_", transformFns = {
            "data-lax-opacity": function(t, e) {
                t.opacity = e
            },
            "data-lax-translate": function(t, e) {
                t.transform += " translate(".concat(e, "px, ").concat(e, "px)")
            },
            "data-lax-translate-x": function(t, e) {
                t.transform += " translateX(".concat(e, "px)")
            },
            "data-lax-translate-y": function(t, e) {
                t.transform += " translateY(".concat(e, "px)")
            },
            "data-lax-scale": function(t, e) {
                t.transform += " scale(".concat(e, ")")
            },
            "data-lax-scale-x": function(t, e) {
                t.transform += " scaleX(".concat(e, ")")
            },
            "data-lax-scale-y": function(t, e) {
                t.transform += " scaleY(".concat(e, ")")
            },
            "data-lax-skew": function(t, e) {
                t.transform += " skew(".concat(e, "deg, ").concat(e, "deg)")
            },
            "data-lax-skew-x": function(t, e) {
                t.transform += " skewX(".concat(e, "deg)")
            },
            "data-lax-skew-y": function(t, e) {
                t.transform += " skewY(".concat(e, "deg)")
            },
            "data-lax-rotate": function(t, e) {
                t.transform += " rotate(".concat(e, "deg)")
            },
            "data-lax-rotate-x": function(t, e) {
                t.transform += " rotateX(".concat(e, "deg)")
            },
            "data-lax-rotate-y": function(t, e) {
                t.transform += " rotateY(".concat(e, "deg)")
            },
            "data-lax-brightness": function(t, e) {
                t.filter += " brightness(".concat(e, "%)")
            },
            "data-lax-contrast": function(t, e) {
                t.filter += " contrast(".concat(e, "%)")
            },
            "data-lax-hue-rotate": function(t, e) {
                t.filter += " hue-rotate(".concat(e, "deg)")
            },
            "data-lax-blur": function(t, e) {
                t.filter += " blur(".concat(e, "px)")
            },
            "data-lax-invert": function(t, e) {
                t.filter += "  invert(".concat(e, "%)")
            },
            "data-lax-saturate": function(t, e) {
                t.filter += "  saturate(".concat(e, "%)")
            },
            "data-lax-grayscale": function(t, e) {
                t.filter += "  grayscale(".concat(e, "%)")
            },
            "data-lax-bg-pos": function(t, e) {
                t.backgroundPosition = "".concat(e, "px ").concat(e, "px")
            },
            "data-lax-bg-pos-x": function(t, e) {
                t.backgroundPositionX = "".concat(e, "px")
            },
            "data-lax-bg-pos-y": function(t, e) {
                t.backgroundPositionY = "".concat(e, "px")
            }
        }, _crazy = "", i = 0; i < 20; i++)
            _crazy += " " + 5 * i + " " + 47 * i % 360 + ", ";
        function intrp(t, e) {
            for (var i = 0; t[i][0] <= e && void 0 !== t[i + 1]; )
                i += 1;
            var a = t[i][0]
              , s = void 0 === t[i - 1] ? a : t[i - 1][0]
              , n = t[i][1]
              , o = void 0 === t[i - 1] ? n : t[i - 1][1];
            return Math.min(Math.max((e - s) / (a - s), 0), 1) * (n - o) + o
        }
        function fnOrVal(s) {
            return "(" === s[0] ? eval(s) : parseFloat(s)
        }
        return lax.presets = {
            linger: function(t) {
                return {
                    "data-lax-translate-y": "(vh*0.7) 0, 0 200, -500 0"
                }
            },
            lazy: function(t) {
                return {
                    "data-lax-translate-y": "(vh) 0, (-elh) ".concat(0 < arguments.length && void 0 !== t ? t : 100)
                }
            },
            eager: function(t) {
                return {
                    "data-lax-translate-y": "(vh) 0, (-elh) -".concat(0 < arguments.length && void 0 !== t ? t : 100)
                }
            },
            slalom: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : 50;
                return {
                    "data-lax-translate-x": "vh ".concat(e, ", (vh*0.8) ").concat(-e, ", (vh*0.6) ").concat(e, ", (vh*0.4) ").concat(-e, ", (vh*0.2) ").concat(e, ", (vh*0) ").concat(-e, ", (-elh) ").concat(e)
                }
            },
            crazy: function(t) {
                return {
                    "data-lax-hue-rotate": "".concat(_crazy, " | loop=20")
                }
            },
            spin: function(t) {
                return {
                    "data-lax-rotate": "(vh) 0, (-elh) ".concat(0 < arguments.length && void 0 !== t ? t : 360)
                }
            },
            spinRev: function(t) {
                return {
                    "data-lax-rotate": "(vh) 0, (-elh) ".concat(-(0 < arguments.length && void 0 !== t ? t : 360))
                }
            },
            spinIn: function(t) {
                return {
                    "data-lax-rotate": "vh ".concat(0 < arguments.length && void 0 !== t ? t : 360, ", (vh*0.5) 0")
                }
            },
            spinOut: function(t) {
                return {
                    "data-lax-rotate": "(vh*0.5) 0, -elh ".concat(0 < arguments.length && void 0 !== t ? t : 360)
                }
            },
            blurInOut: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : 40;
                return {
                    "data-lax-blur": "(vh) ".concat(e, ", (vh*0.8) 0, (vh*0.2) 0, 0 ").concat(e)
                }
            },
            blurIn: function(t) {
                return {
                    "data-lax-blur": "(vh) ".concat(0 < arguments.length && void 0 !== t ? t : 40, ", (vh*0.7) 0")
                }
            },
            blurOut: function(t) {
                return {
                    "data-lax-blur": "(vh*0.3) 0, 0 ".concat(0 < arguments.length && void 0 !== t ? t : 40)
                }
            },
            fadeInOut: function() {
                return {
                    "data-lax-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0"
                }
            },
            fadeIn: function() {
                return {
                    "data-lax-opacity": "(vh) 0, (vh*0.7) 1"
                }
            },
            fadeOut: function() {
                return {
                    "data-lax-opacity": "(vh*0.3) 1, 0 0"
                }
            },
            driftLeft: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : 100;
                return {
                    "data-lax-translate-x": "vh ".concat(e, ", -elh ").concat(-e)
                }
            },
            driftRight: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : 100;
                return {
                    "data-lax-translate-x": "vh ".concat(-e, ", -elh ").concat(e)
                }
            },
            leftToRight: function(t) {
                return {
                    "data-lax-translate-x": "vh 0, -elh (vw*".concat(0 < arguments.length && void 0 !== t ? t : 1, ")")
                }
            },
            rightToLeft: function(t) {
                return {
                    "data-lax-translate-x": "vh 0, -elh (vw*".concat(-(0 < arguments.length && void 0 !== t ? t : 1), ")")
                }
            },
            zoomInOut: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : .2;
                return {
                    "data-lax-scale": "(vh) ".concat(e, ", (vh*0.8) 1, (vh*0.2) 1, -elh ").concat(e)
                }
            },
            zoomIn: function(t) {
                return {
                    "data-lax-scale": "(vh) ".concat(0 < arguments.length && void 0 !== t ? t : .2, ", (vh*0.7) 1")
                }
            },
            zoomOut: function(t) {
                return {
                    "data-lax-scale": "(vh*0.3) 1, -elh ".concat(0 < arguments.length && void 0 !== t ? t : .2)
                }
            },
            speedy: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : 30;
                return {
                    "data-lax-skew-x": "(vh) ".concat(e, ", -elh ").concat(-e)
                }
            },
            swing: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : 30;
                return {
                    "data-lax-skew-y": "(vh) ".concat(e, ", -elh ").concat(-e)
                }
            }
        },
        lax.addPreset = function(t, e) {
            lax.presets[t] = e
        }
        ,
        lax.setup = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            lax.breakpoints = t.breakpoints || {},
            lax.selector = t.selector || ".lax",
            lax.populateElements()
        }
        ,
        lax.removeElement = function(t) {
            var e = lax.elements.findIndex(function(e) {
                return e.el = t
            });
            -1 < e && lax.elements.splice(e, 1)
        }
        ,
        lax.createLaxObject = function(t) {
            return {
                el: t,
                originalStyle: {
                    transform: t.style.transform,
                    filter: t.style.filter
                },
                transforms: {}
            }
        }
        ,
        lax.calcTransforms = function(t) {
            for (var e = t.el, i = [], a = 0; a < e.attributes.length; a++) {
                var s = e.attributes[a];
                -1 < s.name.indexOf("data-lax-preset") && i.push(s)
            }
            for (var n = function(t) {
                var a = i[t]
                  , s = a.name.split(breakpointsSeparator)
                  , n = s[1] ? "".concat(breakpointsSeparator).concat(s[1]) : "";
                a.value.split(" ").forEach(function(t) {
                    var i = t.split("-")
                      , a = lax.presets[i[0]];
                    if (a) {
                        var s = a(i[1]);
                        for (var o in s)
                            e.setAttribute("".concat(o).concat(n), s[o])
                    } else
                        console.log("lax error: preset ".concat(i[0], " is not defined"))
                });
                var o = e.getAttribute("data-lax-anchor");
                o && "" !== o || e.setAttribute("data-lax-anchor", "self"),
                e.attributes.removeNamedItem(a.name)
            }, o = 0; o < i.length; o++)
                n(o);
            if (e.attributes["data-lax-use-gpu"] && "false" === e.attributes["data-lax-use-gpu"].value || (e.style["backface-visibility"] = "hidden",
            e.style["-webkit-backface-visibility"] = "hidden"),
            e.attributes["data-lax-use-gpu"] && e.attributes.removeNamedItem("data-lax-use-gpu"),
            t.optimise = !1,
            e.attributes["data-lax-optimize"] && "true" === e.attributes["data-lax-optimize"].value) {
                t.optimise = !0;
                var r = e.getBoundingClientRect();
                e.setAttribute("data-lax-opacity", "".concat(-r.height - 1, " 0, ").concat(-r.height, " 1, ").concat(window.innerHeight, " 1, ").concat(window.innerHeight + 1, " 0")),
                e.attributes.removeNamedItem("data-lax-optimize")
            }
            for (var h = 0; h < e.attributes.length; h++) {
                var l = e.attributes[h];
                if (!(0 > l.name.indexOf("data-lax"))) {
                    var d = l.name.split(breakpointsSeparator)
                      , c = d[0].split("-")
                      , u = d[1] || "default";
                    if ("lax" === c[1]) {
                        if ("data-lax-anchor" === l.name) {
                            t["data-lax-anchor"] = "self" === l.value ? e : document.querySelector(l.value);
                            var p = t["data-lax-anchor"].getBoundingClientRect();
                            t.anchorTop = Math.floor(p.top) + window.scrollY
                        } else
                            !function() {
                                var i = _slicedToArray(l.value.replace(/vw/g, window.innerWidth).replace(/vh/g, window.innerHeight).replace(/elh/g, e.clientHeight).replace(/elw/g, e.clientWidth).replace(/\s+/g, " ").split("|"), 2)
                                  , a = i[0]
                                  , s = i[1]
                                  , n = {};
                                s && s.split(" ").forEach(function(t) {
                                    var e = _slicedToArray(t.split("="), 2)
                                      , i = e[0]
                                      , a = e[1];
                                    n[i] = i && fnOrVal(a)
                                });
                                var o = d[0]
                                  , r = a.split(",").map(function(t) {
                                    return t.trim().split(" ").map(fnOrVal)
                                }).sort(function(t, e) {
                                    return t[0] - e[0]
                                });
                                t.transforms[o] || (t.transforms[o] = {}),
                                t.transforms[o][u] = {
                                    valueMap: r,
                                    options: n
                                }
                            }()
                    }
                }
            }
            var m = e.attributes["data-lax-sprite-data"] && e.attributes["data-lax-sprite-data"].value;
            if (m) {
                t.spriteData = m.split(",").map(function(t) {
                    return parseInt(t)
                }),
                e.style.height = t.spriteData[1] + "px",
                e.style.width = t.spriteData[0] + "px";
                var f = e.attributes["data-lax-sprite-image"] && e.attributes["data-lax-sprite-image"].value;
                f && (e.style.backgroundImage = "url(".concat(f, ")"))
            }
            return t
        }
        ,
        lax.addElement = function(t) {
            var e = lax.calcTransforms(lax.createLaxObject(t));
            lax.elements.push(e),
            lax.updateElement(e)
        }
        ,
        lax.populateElements = function() {
            lax.elements = [],
            document.querySelectorAll(lax.selector).forEach(lax.addElement),
            currentBreakpoint = lax.getCurrentBreakPoint()
        }
        ,
        lax.updateElements = function() {
            lax.elements.forEach(function(t) {
                lax.calcTransforms(t),
                lax.updateElement(t)
            }),
            currentBreakpoint = lax.getCurrentBreakPoint()
        }
        ,
        lax.getCurrentBreakPoint = function() {
            var t = "default"
              , e = window.innerWidth;
            for (var i in lax.breakpoints) {
                if (!(parseFloat(lax.breakpoints[i]) <= e))
                    break;
                t = i
            }
            return t
        }
        ,
        lax.updateElement = function(t) {
            var e = t.originalStyle
              , i = t.anchorTop
              , a = t.transforms
              , s = t.spriteData
              , n = t.el
              , o = i ? i - lastY : lastY
              , r = {
                transform: e.transform,
                filter: e.filter
            };
            for (var h in a) {
                var l = a[h][currentBreakpoint] || a[h].default;
                if (l) {
                    var d = o;
                    l.options.offset && (d += l.options.offset),
                    l.options.speed && (d *= l.options.speed),
                    l.options.loop && (d %= l.options.loop);
                    var c = transformFns[h]
                      , u = intrp(l.valueMap, d);
                    c && c(r, u)
                }
            }
            if (s) {
                var p = _slicedToArray(s, 5)
                  , m = p[0]
                  , f = p[1]
                  , v = p[2]
                  , g = p[3]
                  , D = Math.floor(lastY / p[4]) % v
                  , w = D % g
                  , y = Math.floor(D / g);
                r.backgroundPosition = "-".concat(w * m, "px -").concat(y * f, "px")
            }
            if (0 === r.opacity)
                n.style.opacity = 0;
            else
                for (var b in r)
                    n.style[b] = r[b]
        }
        ,
        lax.update = function(t) {
            lastY !== t && (lastY = t,
            lax.elements.forEach(lax.updateElement))
        }
        ,
        lax
    }();
    window.lax = lax
}(),
window.onload = function() {
    if ($(window).width() > 991) {
        var t;
        window.lax.setup(),
        t = function t() {
            window.lax.update(window.scrollY),
            window.requestAnimationFrame(t)
        }
        ,
        window.requestAnimationFrame(t)
    }
}
,
"indexOf"in Array.prototype || (Array.prototype.indexOf = function(t, e) {
    void 0 === e && (e = 0),
    e < 0 && (e += this.length),
    e < 0 && (e = 0);
    for (var i = this.length; e < i; e++)
        if (e in this && this[e] === t)
            return e;
    return -1
}
);
var Datetimepicker = function(t, e) {
    var i = this;
    this.element = $(t),
    this.container = e.container || "body",
    this.language = e.language || this.element.data("date-language") || "en",
    this.language = this.language in dates ? this.language : this.language.split("-")[0],
    this.language = this.language in dates ? this.language : "en",
    this.isRTL = dates[this.language].rtl || !1,
    this.formatType = e.formatType || this.element.data("format-type") || "standard",
    this.format = DPGlobal.parseFormat(e.format || this.element.data("date-format") || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, "input"), this.formatType),
    this.isInline = !1,
    this.isVisible = !1,
    this.isInput = this.element.is("input"),
    this.fontAwesome = e.fontAwesome || this.element.data("font-awesome") || !1,
    this.minHour = 7,
    "minHour"in e && (this.minHour = e.minHour),
    this.maxHour = 23,
    "maxHour"in e && (this.maxHour = e.maxHour),
    this.disableMinutes = !0,
    "disableMinutes"in e && (this.disableMinutes = e.disableMinutes),
    this.bootcssVer = e.bootcssVer || (this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2),
    this.component = !!this.element.is(".date") && (3 === this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o").parent()),
    this.componentReset = !!this.element.is(".date") && (3 === this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent() : this.element.find(".add-on .icon-remove, .add-on .fa-times").parent()),
    this.hasInput = this.component && this.element.find("input").length,
    this.component && 0 === this.component.length && (this.component = !1),
    this.linkField = e.linkField || this.element.data("link-field") || !1,
    this.linkFormat = DPGlobal.parseFormat(e.linkFormat || this.element.data("link-format") || DPGlobal.getDefaultFormat(this.formatType, "link"), this.formatType),
    this.minuteStep = e.minuteStep || this.element.data("minute-step") || 15,
    this.pickerPosition = e.pickerPosition || this.element.data("picker-position") || "bottom-right",
    this.showMeridian = e.showMeridian || this.element.data("show-meridian") || -1 !== e.format.indexOf(" p") || !1,
    this.initialDate = e.initialDate || new Date,
    this.zIndex = e.zIndex || this.element.data("z-index") || void 0,
    this.title = void 0 !== e.title && e.title,
    this.timezone = e.timezone || timeZoneAbbreviation(),
    this.steps = Math.floor(60 / this.minuteStep),
    this.icons = {
        leftArrow: this.fontAwesome ? "fa-arrow-left" : 3 === this.bootcssVer ? "glyphicon-arrow-left" : "icon-arrow-left",
        rightArrow: this.fontAwesome ? "fa-arrow-right" : 3 === this.bootcssVer ? "glyphicon-arrow-right" : "icon-arrow-right"
    },
    this.icontype = this.fontAwesome ? "fa" : "glyphicon",
    this._attachEvents(),
    this.clickedOutside = function(t) {
        0 === $(t.target).closest(".datetimepicker").length && i.hide()
    }
    ,
    this.formatViewType = "datetime",
    "formatViewType"in e ? this.formatViewType = e.formatViewType : "formatViewType"in this.element.data() && (this.formatViewType = this.element.data("formatViewType")),
    this.minView = 0,
    "minView"in e ? this.minView = e.minView : "minView"in this.element.data() && (this.minView = this.element.data("min-view")),
    this.minView = DPGlobal.convertViewMode(this.minView),
    "format"in e && ((this.disableMinutes || 0 == this.minView) && (-1 !== e.format.indexOf("h") || -1 !== e.format.indexOf("H")) ? this.minView = DPGlobal.convertViewMode(1) : -1 === e.format.indexOf("h") && -1 === e.format.indexOf("H") && (this.minView = DPGlobal.convertViewMode(2))),
    this.maxView = DPGlobal.modes.length - 1,
    "maxView"in e ? this.maxView = e.maxView : "maxView"in this.element.data() && (this.maxView = this.element.data("max-view")),
    this.maxView = DPGlobal.convertViewMode(this.maxView),
    this.wheelViewModeNavigation = !1,
    "wheelViewModeNavigation"in e ? this.wheelViewModeNavigation = e.wheelViewModeNavigation : "wheelViewModeNavigation"in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")),
    this.wheelViewModeNavigationInverseDirection = !1,
    "wheelViewModeNavigationInverseDirection"in e ? this.wheelViewModeNavigationInverseDirection = e.wheelViewModeNavigationInverseDirection : "wheelViewModeNavigationInverseDirection"in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")),
    this.wheelViewModeNavigationDelay = 100,
    "wheelViewModeNavigationDelay"in e ? this.wheelViewModeNavigationDelay = e.wheelViewModeNavigationDelay : "wheelViewModeNavigationDelay"in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")),
    this.startViewMode = 2,
    "startView"in e ? this.startViewMode = e.startView : "startView"in this.element.data() && (this.startViewMode = this.element.data("start-view")),
    this.startViewMode = DPGlobal.convertViewMode(this.startViewMode),
    this.viewMode = this.startViewMode,
    this.viewSelect = this.minView,
    "viewSelect"in e ? this.viewSelect = e.viewSelect : "viewSelect"in this.element.data() && (this.viewSelect = this.element.data("view-select")),
    this.viewSelect = DPGlobal.convertViewMode(this.viewSelect),
    this.forceParse = !0,
    "forceParse"in e ? this.forceParse = e.forceParse : "dateForceParse"in this.element.data() && (this.forceParse = this.element.data("date-force-parse"));
    for (var a = 3 === this.bootcssVer ? DPGlobal.templateV3 : DPGlobal.template; -1 !== a.indexOf("{iconType}"); )
        a = a.replace("{iconType}", this.icontype);
    for (; -1 !== a.indexOf("{leftArrow}"); )
        a = a.replace("{leftArrow}", this.icons.leftArrow);
    for (; -1 !== a.indexOf("{rightArrow}"); )
        a = a.replace("{rightArrow}", this.icons.rightArrow);
    if (this.picker = $(a).appendTo(this.isInline ? this.element : this.container).on({
        click: $.proxy(this.click, this),
        mousedown: $.proxy(this.mousedown, this)
    }),
    this.wheelViewModeNavigation && ($.fn.mousewheel ? this.picker.on({
        mousewheel: $.proxy(this.mousewheel, this)
    }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")),
    this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu"),
    this.isRTL) {
        this.picker.addClass("datetimepicker-rtl");
        var s = 3 === this.bootcssVer ? ".prev span, .next span" : ".prev i, .next i";
        this.picker.find(s).toggleClass(this.icons.leftArrow + " " + this.icons.rightArrow)
    }
    $(document).on("mousedown touchend", this.clickedOutside),
    this.autoclose = !1,
    "autoclose"in e ? this.autoclose = e.autoclose : "dateAutoclose"in this.element.data() && (this.autoclose = this.element.data("date-autoclose")),
    this.keyboardNavigation = !0,
    "keyboardNavigation"in e ? this.keyboardNavigation = e.keyboardNavigation : "dateKeyboardNavigation"in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")),
    this.todayBtn = e.todayBtn || this.element.data("date-today-btn") || !1,
    this.clearBtn = e.clearBtn || this.element.data("date-clear-btn") || !1,
    this.todayHighlight = e.todayHighlight || this.element.data("date-today-highlight") || !1,
    this.weekStart = 0,
    void 0 !== e.weekStart ? this.weekStart = e.weekStart : void 0 !== this.element.data("date-weekstart") ? this.weekStart = this.element.data("date-weekstart") : void 0 !== dates[this.language].weekStart && (this.weekStart = dates[this.language].weekStart),
    this.weekStart = this.weekStart % 7,
    this.weekEnd = (this.weekStart + 6) % 7,
    this.onRenderDay = function(t) {
        var i = (e.onRenderDay || function() {
            return []
        }
        )(t);
        return "string" == typeof i && (i = [i]),
        ["day"].concat(i || [])
    }
    ,
    this.onRenderHour = function(t) {
        var i = (e.onRenderHour || function() {
            return []
        }
        )(t);
        return "string" == typeof i && (i = [i]),
        ["hour"].concat(i || [])
    }
    ,
    this.onRenderMinute = function(t) {
        var i = (e.onRenderMinute || function() {
            return []
        }
        )(t)
          , a = ["minute"];
        return "string" == typeof i && (i = [i]),
        t < this.startDate || t > this.endDate ? a.push("disabled") : Math.floor(this.date.getUTCMinutes() / this.minuteStep) === Math.floor(t.getUTCMinutes() / this.minuteStep) && a.push("active"),
        a.concat(i || [])
    }
    ,
    this.onRenderYear = function(t) {
        var i = (e.onRenderYear || function() {
            return []
        }
        )(t)
          , a = ["year"];
        "string" == typeof i && (i = [i]),
        this.date.getUTCFullYear() === t.getUTCFullYear() && a.push("active");
        var s = t.getUTCFullYear()
          , n = this.endDate.getUTCFullYear();
        return (t < this.startDate || s > n) && a.push("disabled"),
        a.concat(i || [])
    }
    ,
    this.onRenderMonth = function(t) {
        var i = (e.onRenderMonth || function() {
            return []
        }
        )(t);
        return "string" == typeof i && (i = [i]),
        ["month"].concat(i || [])
    }
    ,
    this.startDate = new Date(-8639968443048e3),
    this.endDate = new Date(8639968443048e3),
    this.datesDisabled = [],
    this.daysOfWeekDisabled = [],
    this.setStartDate(e.startDate || this.element.data("date-startdate")),
    this.setEndDate(e.endDate || this.element.data("date-enddate")),
    this.setDatesDisabled(e.datesDisabled || this.element.data("date-dates-disabled")),
    this.setDaysOfWeekDisabled(e.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")),
    this.setMinutesDisabled(e.minutesDisabled || this.element.data("date-minute-disabled")),
    this.setHoursDisabled(e.hoursDisabled || this.element.data("date-hour-disabled")),
    this.fillDow(),
    this.fillMonths(),
    this.update(),
    this.showMode(),
    this.isInline && this.show()
};
Datetimepicker.prototype = {
    constructor: Datetimepicker,
    _events: [],
    _attachEvents: function() {
        this._detachEvents(),
        this.isInput ? this._events = [[this.element, {
            focus: $.proxy(this.show, this),
            keyup: $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
        }]] : this.component && this.hasInput ? (this._events = [[this.element.find("input"), {
            focus: $.proxy(this.show, this),
            keyup: $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
        }], [this.component, {
            click: $.proxy(this.show, this)
        }], ],
        this.componentReset && this._events.push([this.componentReset, {
            click: $.proxy(this.reset, this)
        }])) : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
            click: $.proxy(this.show, this)
        }]];
        for (var t, e, i = 0; i < this._events.length; i++)
            t = this._events[i][0],
            e = this._events[i][1],
            t.on(e)
    },
    _detachEvents: function() {
        for (var t, e, i = 0; i < this._events.length; i++)
            t = this._events[i][0],
            e = this._events[i][1],
            t.off(e);
        this._events = []
    },
    show: function(t) {
        this.picker.show(),
        this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(),
        this.forceParse && this.update(),
        this.place(),
        $(window).on("resize", $.proxy(this.place, this)),
        t && (t.stopPropagation(),
        t.preventDefault()),
        this.isVisible = !0,
        this.element.trigger({
            type: "showDatetimePicker",
            date: this.date
        })
    },
    hide: function() {
        this.isVisible && (this.isInline || (this.picker.hide(),
        $(window).off("resize", this.place),
        this.viewMode = this.startViewMode,
        this.showMode(),
        this.isInput || $(document).off("mousedown", this.hide),
        this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(),
        this.isVisible = !1,
        this.element.trigger({
            type: "hideDatetimePicker",
            date: this.date
        })))
    },
    remove: function() {
        this._detachEvents(),
        $(document).off("mousedown", this.clickedOutside),
        this.picker.remove(),
        delete this.picker,
        delete this.element.data().datetimepicker
    },
    getDate: function() {
        var t = this.getUTCDate();
        return null === t ? null : new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
    },
    getUTCDate: function() {
        return this.date
    },
    getInitialDate: function() {
        return this.initialDate
    },
    setInitialDate: function(t) {
        this.initialDate = t
    },
    setDate: function(t) {
        this.setUTCDate(new Date(t.getTime() - 6e4 * t.getTimezoneOffset()))
    },
    setUTCDate: function(t) {
        t >= this.startDate && t <= this.endDate ? (this.date = t,
        this.setValue(),
        this.viewDate = this.date,
        this.fill()) : this.element.trigger({
            type: "outOfRange",
            date: t,
            startDate: this.startDate,
            endDate: this.endDate
        })
    },
    setFormat: function(t) {
        var e;
        this.format = DPGlobal.parseFormat(t, this.formatType),
        this.isInput ? e = this.element : this.component && (e = this.element.find("input")),
        e && e.val() && this.setValue()
    },
    setValue: function() {
        var t = this.getFormattedDate(this.format);
        this.isInput ? this.element.val(t) : (this.component && this.element.find("input").val(t),
        this.element.data("date", t)),
        this.linkField && $("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
    },
    getFormattedDate: function(t) {
        return t = t || this.format,
        DPGlobal.formatDate(this.date, t, this.language, this.formatType, this.timezone)
    },
    setStartDate: function(t) {
        this.startDate = t || this.startDate,
        8639968443048e3 !== this.startDate.valueOf() && (this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone)),
        this.update(),
        this.updateNavArrows()
    },
    setEndDate: function(t) {
        this.endDate = t || this.endDate,
        8639968443048e3 !== this.endDate.valueOf() && (this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone)),
        this.update(),
        this.updateNavArrows()
    },
    setDatesDisabled: function(t) {
        this.datesDisabled = t || [],
        $.isArray(this.datesDisabled) || (this.datesDisabled = this.datesDisabled.split(/,\s*/));
        var e = this;
        this.datesDisabled = $.map(this.datesDisabled, function(t) {
            return DPGlobal.parseDate(t, e.format, e.language, e.formatType, e.timezone).toDateString()
        }),
        this.update(),
        this.updateNavArrows()
    },
    setTitle: function(t, e) {
        return this.picker.find(t).find("th:eq(1)").text(!1 === this.title ? e : this.title)
    },
    setDaysOfWeekDisabled: function(t) {
        this.daysOfWeekDisabled = t || [],
        $.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)),
        this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function(t) {
            return parseInt(t, 10)
        }),
        this.update(),
        this.updateNavArrows()
    },
    setMinutesDisabled: function(t) {
        this.minutesDisabled = t || [],
        $.isArray(this.minutesDisabled) || (this.minutesDisabled = this.minutesDisabled.split(/,\s*/)),
        this.minutesDisabled = $.map(this.minutesDisabled, function(t) {
            return parseInt(t, 10)
        }),
        this.update(),
        this.updateNavArrows()
    },
    setHoursDisabled: function(t) {
        this.hoursDisabled = t || [],
        $.isArray(this.hoursDisabled) || (this.hoursDisabled = this.hoursDisabled.split(/,\s*/)),
        this.hoursDisabled = $.map(this.hoursDisabled, function(t) {
            return parseInt(t, 10)
        }),
        this.update(),
        this.updateNavArrows()
    },
    place: function() {
        if (!this.isInline) {
            if (!this.zIndex) {
                var t, e, i, a, s = 0;
                $("div").each(function() {
                    var t = parseInt($(this).css("zIndex"), 10);
                    t > s && (s = t)
                }),
                this.zIndex = s + 10
            }
            a = this.container instanceof $ ? this.container.offset() : $(this.container).offset(),
            this.component ? (i = (t = this.component.offset()).left,
            ("bottom-left" === this.pickerPosition || "top-left" === this.pickerPosition) && (i += this.component.outerWidth() - this.picker.outerWidth())) : (i = (t = this.element.offset()).left,
            ("bottom-left" === this.pickerPosition || "top-left" === this.pickerPosition) && (i += this.element.outerWidth() - this.picker.outerWidth()));
            var n = document.body.clientWidth || window.innerWidth;
            i + 220 > n && (i = n - 220),
            e = "top-left" === this.pickerPosition || "top-right" === this.pickerPosition ? t.top - this.picker.outerHeight() : t.top + this.height,
            e -= a.top,
            i -= a.left,
            this.picker.css({
                top: e,
                left: i,
                zIndex: this.zIndex
            })
        }
    },
    hour_minute: "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]",
    update: function() {
        var t, e = !1;
        arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0]instanceof Date) ? (t = arguments[0],
        e = !0) : "string" == typeof (t = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate) && (t = t.replace(/^\s+|\s+$/g, "")),
        t || (t = new Date,
        e = !1),
        "string" == typeof t && (RegExp(this.hour_minute).test(t) || RegExp(this.hour_minute + ":[0-5][0-9]").test(t)) && (t = this.getDate()),
        this.date = DPGlobal.parseDate(t, this.format, this.language, this.formatType, this.timezone),
        e && this.setValue(),
        this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date),
        this.fill()
    },
    fillDow: function() {
        for (var t = this.weekStart, e = "<tr>"; t < this.weekStart + 7; )
            e += '<th class="dow">' + dates[this.language].daysMin[t++ % 7] + "</th>";
        e += "</tr>",
        this.picker.find(".datetimepicker-days thead").append(e)
    },
    fillMonths: function() {
        for (var t = "", e = new Date(this.viewDate), i = 0; i < 12; i++)
            e.setUTCMonth(i),
            t += '<span class="' + this.onRenderMonth(e).join(" ") + '">' + dates[this.language].monthsShort[i] + "</span>";
        this.picker.find(".datetimepicker-months td").html(t)
    },
    fill: function() {
        if (this.date && this.viewDate) {
            var t, e = new Date(this.viewDate), i = e.getUTCFullYear(), a = e.getUTCMonth(), s = e.getUTCDate(), n = e.getUTCHours(), o = e.getUTCMinutes(), r = this.startDate.getUTCFullYear(), h = this.startDate.getUTCMonth(), l = this.endDate.getUTCFullYear(), d = this.endDate.getUTCMonth() + 1, c = new UTCDate(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate()).valueOf(), u = new Date;
            if (this.setTitle(".datetimepicker-days", dates[this.language].months[a] + " " + i),
            "time" === this.formatViewType) {
                var p = this.getFormattedDate();
                this.setTitle(".datetimepicker-hours", p),
                this.setTitle(".datetimepicker-minutes", p)
            } else
                this.setTitle(".datetimepicker-hours", s + " " + dates[this.language].months[a] + " " + i),
                this.setTitle(".datetimepicker-minutes", s + " " + dates[this.language].months[a] + " " + i);
            this.picker.find("tfoot th.today").text(dates[this.language].today || dates.en.today).toggle(!1 !== this.todayBtn),
            this.picker.find("tfoot th.clear").text(dates[this.language].clear || dates.en.clear).toggle(!1 !== this.clearBtn),
            this.updateNavArrows(),
            this.fillMonths();
            var m = UTCDate(i, a - 1, 28, 0, 0, 0, 0)
              , f = DPGlobal.getDaysInMonth(m.getUTCFullYear(), m.getUTCMonth());
            m.setUTCDate(f),
            m.setUTCDate(f - (m.getUTCDay() - this.weekStart + 7) % 7);
            var v = new Date(m);
            v.setUTCDate(v.getUTCDate() + 42),
            v = v.valueOf();
            for (var g = []; m.valueOf() < v; )
                m.getUTCDay() === this.weekStart && g.push("<tr>"),
                t = this.onRenderDay(m),
                m.getUTCFullYear() < i || m.getUTCFullYear() === i && m.getUTCMonth() < a ? t.push("old") : (m.getUTCFullYear() > i || m.getUTCFullYear() === i && m.getUTCMonth() > a) && t.push("new"),
                this.todayHighlight && m.getUTCFullYear() === u.getFullYear() && m.getUTCMonth() === u.getMonth() && m.getUTCDate() === u.getDate() && t.push("today"),
                m.valueOf() === c && t.push("active"),
                (m.valueOf() + 864e5 <= this.startDate || m.valueOf() > this.endDate || -1 !== $.inArray(m.getUTCDay(), this.daysOfWeekDisabled) || -1 !== $.inArray(m.toDateString(), this.datesDisabled)) && t.push("disabled"),
                g.push('<td class="' + t.join(" ") + '">' + m.getUTCDate() + "</td>"),
                m.getUTCDay() === this.weekEnd && g.push("</tr>"),
                m.setUTCDate(m.getUTCDate() + 1);
            this.picker.find(".datetimepicker-days tbody").empty().append(g.join("")),
            g = [];
            var D = ""
              , w = ""
              , y = ""
              , b = this.hoursDisabled || [];
            if (e = new Date(this.viewDate),
            this.disableMinutes) {
                for (var T = 0; T <= 24 * this.steps; T++) {
                    e.setUTCHours(Math.floor(T / this.steps)),
                    t = this.onRenderHour(e),
                    -1 !== b.indexOf(T) && t.push("disabled");
                    var _ = UTCDate(i, a, s, Math.floor(T / this.steps), T % this.steps * this.minuteStep);
                    if (_.valueOf() + 36e5 <= this.startDate || _.valueOf() > this.endDate ? t.push("disabled") : n == Math.floor(T / this.steps) && o == T % this.steps * this.minuteStep && t.push("active"),
                    this.showMeridian && 2 === dates[this.language].meridiem.length) {
                        var k = Math.floor(T / this.steps);
                        (w = k < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]) !== y && ("" !== y && g.push("</fieldset>"),
                        g.push('<fieldset class="hour"><legend>' + w.toUpperCase() + "</legend>")),
                        y = w;
                        var D = k % 12 ? k % 12 : 12;
                        T % this.steps * this.minuteStep < 10 ? D += ":0" + T % this.steps * this.minuteStep : D += ":" + T % this.steps * this.minuteStep,
                        T < 12 * this.steps ? t.push("hour_am") : t.push("hour_pm"),
                        T != 24 * this.steps && g.push('<span class="' + t.join(" ") + '">' + D + "</span>"),
                        23 === Math.floor(T / this.steps) && T % this.steps * this.minuteStep == this.steps * this.minuteStep && g.push("</fieldset>")
                    } else
                        D = 10 > Math.floor(T / this.steps) ? "0" + Math.floor(T / this.steps) : Math.floor(T / this.steps),
                        T % this.steps * this.minuteStep < 10 ? D += ":0" + T % this.steps * this.minuteStep : D += ":" + T % this.steps * this.minuteStep,
                        Math.floor(T / this.steps) >= this.minHour && Math.floor(T / this.steps) < this.maxHour && g.push('<span class="' + t.join(" ") + '">' + D + "</span>")
                }
                0 == this.minView && (target = "hours")
            } else
                for (var T = 0; T < 24; T++) {
                    e.setUTCHours(T),
                    t = this.onRenderHour(e),
                    -1 !== b.indexOf(T) && t.push("disabled");
                    var _ = UTCDate(i, a, s, T);
                    _.valueOf() + 36e5 <= this.startDate || _.valueOf() > this.endDate ? t.push("disabled") : n === T && t.push("active"),
                    this.showMeridian && 2 === dates[this.language].meridiem.length ? ((w = T < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]) !== y && ("" !== y && g.push("</fieldset>"),
                    g.push('<fieldset class="hour"><legend>' + w.toUpperCase() + "</legend>")),
                    y = w,
                    D = T % 12 ? T % 12 : 12,
                    T < 12 ? t.push("hour_am") : t.push("hour_pm"),
                    g.push('<span class="' + t.join(" ") + '">' + D + "</span>"),
                    23 === T && g.push("</fieldset>")) : (D = T + ":00",
                    T >= this.minHour && T < this.maxHour && g.push('<span class="' + t.join(" ") + '">' + D + "</span>"))
                }
            this.picker.find(".datetimepicker-hours td").html(g.join("")),
            g = [],
            D = "",
            w = "",
            y = "";
            var C = this.minutesDisabled || [];
            e = new Date(this.viewDate);
            for (var T = 0; T < 60; T += this.minuteStep)
                -1 === C.indexOf(T) && (e.setUTCMinutes(T),
                e.setUTCSeconds(0),
                t = this.onRenderMinute(e),
                this.showMeridian && 2 === dates[this.language].meridiem.length ? ((w = n < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]) !== y && ("" !== y && g.push("</fieldset>"),
                g.push('<fieldset class="minute"><legend>' + w.toUpperCase() + "</legend>")),
                y = w,
                D = n % 12 ? n % 12 : 12,
                g.push('<span class="' + t.join(" ") + '">' + D + ":" + (T < 10 ? "0" + T : T) + "</span>"),
                59 === T && g.push("</fieldset>")) : (D = T + ":00",
                g.push('<span class="' + t.join(" ") + '">' + n + ":" + (T < 10 ? "0" + T : T) + "</span>")));
            this.picker.find(".datetimepicker-minutes td").html(g.join(""));
            var M = this.date.getUTCFullYear()
              , U = this.setTitle(".datetimepicker-months", i).end().find(".month").removeClass("active");
            M === i && U.eq(this.date.getUTCMonth()).addClass("active"),
            (i < r || i > l) && U.addClass("disabled"),
            i === r && U.slice(0, h).addClass("disabled"),
            i === l && U.slice(d).addClass("disabled"),
            g = "",
            i = 10 * parseInt(i / 10, 10);
            var x = this.setTitle(".datetimepicker-years", i + "-" + (i + 9)).end().find("td");
            i -= 1,
            e = new Date(this.viewDate);
            for (var T = -1; T < 11; T++)
                e.setUTCFullYear(i),
                t = this.onRenderYear(e),
                (-1 === T || 10 === T) && t.push(old),
                g += '<span class="' + t.join(" ") + '">' + i + "</span>",
                i += 1;
            x.html(g),
            this.place()
        }
    },
    updateNavArrows: function() {
        var t = new Date(this.viewDate)
          , e = t.getUTCFullYear()
          , i = t.getUTCMonth()
          , a = t.getUTCDate()
          , s = t.getUTCHours();
        switch (this.viewMode) {
        case 0:
            e <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && a <= this.startDate.getUTCDate() && s <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
                visibility: "hidden"
            }) : this.picker.find(".prev").css({
                visibility: "visible"
            }),
            e >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && a >= this.endDate.getUTCDate() && s >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
                visibility: "hidden"
            }) : this.picker.find(".next").css({
                visibility: "visible"
            });
            break;
        case 1:
            e <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && a <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
                visibility: "hidden"
            }) : this.picker.find(".prev").css({
                visibility: "visible"
            }),
            e >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && a >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
                visibility: "hidden"
            }) : this.picker.find(".next").css({
                visibility: "visible"
            });
            break;
        case 2:
            e <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                visibility: "hidden"
            }) : this.picker.find(".prev").css({
                visibility: "visible"
            }),
            e >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
                visibility: "hidden"
            }) : this.picker.find(".next").css({
                visibility: "visible"
            });
            break;
        case 3:
        case 4:
            e <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                visibility: "hidden"
            }) : this.picker.find(".prev").css({
                visibility: "visible"
            }),
            e >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                visibility: "hidden"
            }) : this.picker.find(".next").css({
                visibility: "visible"
            })
        }
    },
    mousewheel: function(t) {
        if (t.preventDefault(),
        t.stopPropagation(),
        !this.wheelPause) {
            this.wheelPause = !0;
            var e, i = t.originalEvent.wheelDelta, a = i > 0 ? 1 : 0 === i ? 0 : -1;
            this.wheelViewModeNavigationInverseDirection && (a = -a),
            this.showMode(a),
            setTimeout($.proxy(function() {
                this.wheelPause = !1
            }, this), this.wheelViewModeNavigationDelay)
        }
    },
    click: function(t) {
        t.stopPropagation(),
        t.preventDefault();
        var e = $(t.target).closest("span, td, th, legend");
        if (e.is("." + this.icontype) && (e = $(e).parent().closest("span, td, th, legend")),
        1 === e.length) {
            if (e.is(".disabled")) {
                this.element.trigger({
                    type: "outOfRange",
                    date: this.viewDate,
                    startDate: this.startDate,
                    endDate: this.endDate
                });
                return
            }
            switch (e[0].nodeName.toLowerCase()) {
            case "th":
                switch (e[0].className) {
                case "switch":
                    this.showMode(1);
                    break;
                case "prev":
                case "next":
                    var i = DPGlobal.modes[this.viewMode].navStep * ("prev" === e[0].className ? -1 : 1);
                    switch (this.viewMode) {
                    case 0:
                        this.viewDate = this.moveHour(this.viewDate, i);
                        break;
                    case 1:
                        this.viewDate = this.moveDate(this.viewDate, i);
                        break;
                    case 2:
                        this.viewDate = this.moveMonth(this.viewDate, i);
                        break;
                    case 3:
                    case 4:
                        this.viewDate = this.moveYear(this.viewDate, i)
                    }
                    this.fill(),
                    this.element.trigger({
                        type: e[0].className + ":" + this.convertViewModeText(this.viewMode),
                        date: this.viewDate,
                        startDate: this.startDate,
                        endDate: this.endDate
                    });
                    break;
                case "clear":
                    this.reset(),
                    this.autoclose && this.hide();
                    break;
                case "today":
                    var a = new Date;
                    (a = UTCDate(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), 0)) < this.startDate ? a = this.startDate : a > this.endDate && (a = this.endDate),
                    this.viewMode = this.startViewMode,
                    this.showMode(0),
                    this._setDate(a),
                    this.fill(),
                    this.autoclose && this.hide()
                }
                break;
            case "span":
                if (!e.is(".disabled")) {
                    var s = this.viewDate.getUTCFullYear()
                      , n = this.viewDate.getUTCMonth()
                      , o = this.viewDate.getUTCDate()
                      , r = this.viewDate.getUTCHours()
                      , h = this.viewDate.getUTCMinutes()
                      , l = this.viewDate.getUTCSeconds();
                    if (e.is(".month") ? (this.viewDate.setUTCDate(1),
                    n = e.parent().find("span").index(e),
                    o = this.viewDate.getUTCDate(),
                    this.viewDate.setUTCMonth(n),
                    this.element.trigger({
                        type: "changeMonth",
                        date: this.viewDate
                    }),
                    this.viewSelect >= 3 && this._setDate(UTCDate(s, n, o, r, h, l, 0))) : e.is(".year") ? (this.viewDate.setUTCDate(1),
                    s = parseInt(e.text(), 10) || 0,
                    this.viewDate.setUTCFullYear(s),
                    this.element.trigger({
                        type: "changeYear",
                        date: this.viewDate
                    }),
                    this.viewSelect >= 4 && this._setDate(UTCDate(s, n, o, r, h, l, 0))) : e.is(".hour") ? (r = parseInt(e.text(), 10) || 0,
                    this.disableMinutes && (h = parseInt(e.text().substr(e.text().indexOf(":") + 1), 10) || 0),
                    (e.hasClass("hour_am") || e.hasClass("hour_pm")) && (12 === r && e.hasClass("hour_am") ? r = 0 : 12 !== r && e.hasClass("hour_pm") && (r += 12)),
                    this.viewDate.setUTCHours(r),
                    this.element.trigger({
                        type: "changeHour",
                        date: this.viewDate
                    }),
                    this.disableMinutes && (this.viewDate.setUTCHours(h),
                    this.element.trigger({
                        type: "changeMinutes",
                        date: this.viewDate
                    })),
                    this.viewSelect >= 1 && this._setDate(UTCDate(s, n, o, r, h, l, 0))) : e.is(".minute") && (h = parseInt(e.text().substr(e.text().indexOf(":") + 1), 10) || 0,
                    this.viewDate.setUTCMinutes(h),
                    this.element.trigger({
                        type: "changeMinute",
                        date: this.viewDate
                    }),
                    this.viewSelect >= 0 && this._setDate(UTCDate(s, n, o, r, h, l, 0))),
                    0 !== this.viewMode) {
                        var d = this.viewMode;
                        this.showMode(-1),
                        this.fill(),
                        d === this.viewMode && this.autoclose && this.hide()
                    } else
                        this.fill(),
                        this.autoclose && this.hide()
                }
                break;
            case "td":
                if (e.is(".day") && !e.is(".disabled")) {
                    var o = parseInt(e.text(), 10) || 1
                      , s = this.viewDate.getUTCFullYear()
                      , n = this.viewDate.getUTCMonth()
                      , r = this.viewDate.getUTCHours()
                      , h = this.viewDate.getUTCMinutes()
                      , l = this.viewDate.getUTCSeconds();
                    e.is(".old") ? 0 === n ? (n = 11,
                    s -= 1) : n -= 1 : e.is(".new") && (11 === n ? (n = 0,
                    s += 1) : n += 1),
                    this.viewDate.setUTCFullYear(s),
                    this.viewDate.setUTCMonth(n, o),
                    this.element.trigger({
                        type: "changeDay",
                        date: this.viewDate
                    }),
                    this.viewSelect >= 2 && this._setDate(UTCDate(s, n, o, r, h, l, 0))
                }
                var d = this.viewMode;
                this.showMode(-1),
                this.fill(),
                d === this.viewMode && this.autoclose && this.hide()
            }
        }
    },
    _setDate: function(t, e) {
        var i;
        e && "date" !== e || (this.date = t),
        e && "view" !== e || (this.viewDate = t),
        this.fill(),
        this.setValue(),
        this.isInput ? i = this.element : this.component && (i = this.element.find("input")),
        i && i.change(),
        this.element.trigger({
            type: "changeDate",
            date: this.getDate()
        }),
        null === t && (this.date = this.viewDate)
    },
    moveMinute: function(t, e) {
        if (!e)
            return t;
        var i = new Date(t.valueOf());
        return i.setUTCMinutes(i.getUTCMinutes() + e * this.minuteStep),
        i
    },
    moveHour: function(t, e) {
        if (!e)
            return t;
        var i = new Date(t.valueOf());
        return i.setUTCHours(i.getUTCHours() + e),
        i
    },
    moveDate: function(t, e) {
        if (!e)
            return t;
        var i = new Date(t.valueOf());
        return i.setUTCDate(i.getUTCDate() + e),
        i
    },
    moveMonth: function(t, e) {
        if (!e)
            return t;
        var i, a, s = new Date(t.valueOf()), n = s.getUTCDate(), o = s.getUTCMonth(), r = Math.abs(e);
        if (e = e > 0 ? 1 : -1,
        1 === r)
            a = -1 === e ? function() {
                return s.getUTCMonth() === o
            }
            : function() {
                return s.getUTCMonth() !== i
            }
            ,
            i = o + e,
            s.setUTCMonth(i),
            (i < 0 || i > 11) && (i = (i + 12) % 12);
        else {
            for (var h = 0; h < r; h++)
                s = this.moveMonth(s, e);
            i = s.getUTCMonth(),
            s.setUTCDate(n),
            a = function() {
                return i !== s.getUTCMonth()
            }
        }
        for (; a(); )
            s.setUTCDate(--n),
            s.setUTCMonth(i);
        return s
    },
    moveYear: function(t, e) {
        return this.moveMonth(t, 12 * e)
    },
    dateWithinRange: function(t) {
        return t >= this.startDate && t <= this.endDate
    },
    keydown: function(t) {
        if (this.picker.is(":not(:visible)")) {
            27 === t.keyCode && this.show();
            return
        }
        var e, i, a, s, n = !1;
        switch (t.keyCode) {
        case 27:
            this.hide(),
            t.preventDefault();
            break;
        case 37:
        case 39:
            if (!this.keyboardNavigation)
                break;
            i = 37 === t.keyCode ? -1 : 1;
            var o = this.viewMode;
            t.ctrlKey ? o += 2 : t.shiftKey && (o += 1),
            4 === o ? (a = this.moveYear(this.date, i),
            s = this.moveYear(this.viewDate, i)) : 3 === o ? (a = this.moveMonth(this.date, i),
            s = this.moveMonth(this.viewDate, i)) : 2 === o ? (a = this.moveDate(this.date, i),
            s = this.moveDate(this.viewDate, i)) : 1 === o ? (a = this.moveHour(this.date, i),
            s = this.moveHour(this.viewDate, i)) : 0 === o && (a = this.moveMinute(this.date, i),
            s = this.moveMinute(this.viewDate, i)),
            this.dateWithinRange(a) && (this.date = a,
            this.viewDate = s,
            this.setValue(),
            this.update(),
            t.preventDefault(),
            n = !0);
            break;
        case 38:
        case 40:
            if (!this.keyboardNavigation)
                break;
            i = 38 === t.keyCode ? -1 : 1,
            o = this.viewMode,
            t.ctrlKey ? o += 2 : t.shiftKey && (o += 1),
            4 === o ? (a = this.moveYear(this.date, i),
            s = this.moveYear(this.viewDate, i)) : 3 === o ? (a = this.moveMonth(this.date, i),
            s = this.moveMonth(this.viewDate, i)) : 2 === o ? (a = this.moveDate(this.date, 7 * i),
            s = this.moveDate(this.viewDate, 7 * i)) : 1 === o ? this.showMeridian ? (a = this.moveHour(this.date, 6 * i),
            s = this.moveHour(this.viewDate, 6 * i)) : (a = this.moveHour(this.date, 4 * i),
            s = this.moveHour(this.viewDate, 4 * i)) : 0 === o && (a = this.moveMinute(this.date, 4 * i),
            s = this.moveMinute(this.viewDate, 4 * i)),
            this.dateWithinRange(a) && (this.date = a,
            this.viewDate = s,
            this.setValue(),
            this.update(),
            t.preventDefault(),
            n = !0);
            break;
        case 13:
            if (0 !== this.viewMode) {
                var r = this.viewMode;
                this.showMode(-1),
                this.fill(),
                r === this.viewMode && this.autoclose && this.hide()
            } else
                this.fill(),
                this.autoclose && this.hide();
            t.preventDefault();
            break;
        case 9:
            this.hide()
        }
        n && (this.isInput ? e = this.element : this.component && (e = this.element.find("input")),
        e && e.change(),
        this.element.trigger({
            type: "changeDate",
            date: this.getDate()
        }))
    },
    showMode: function(t) {
        if (t) {
            var e = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + t));
            e >= this.minView && e <= this.maxView && (this.element.trigger({
                type: "changeMode",
                date: this.viewDate,
                oldViewMode: this.viewMode,
                newViewMode: e
            }),
            this.viewMode = e)
        }
        this.picker.find(">div").hide().filter(".datetimepicker-" + DPGlobal.modes[this.viewMode].clsName).css("display", "block"),
        this.updateNavArrows()
    },
    reset: function() {
        this._setDate(null, "date")
    },
    convertViewModeText: function(t) {
        switch (t) {
        case 4:
            return "decade";
        case 3:
            return "year";
        case 2:
            return "month";
        case 1:
            return "day";
        case 0:
            return "hour"
        }
    }
};
var old = $.fn.datetimepicker;
$.fn.datetimepicker = function(t) {
    var e, i = Array.apply(null, arguments);
    return (i.shift(),
    this.each(function() {
        var a = $(this)
          , s = a.data("datetimepicker")
          , n = "object" == typeof t && t;
        if (s || a.data("datetimepicker", s = new Datetimepicker(this,$.extend({}, $.fn.datetimepicker.defaults, n))),
        "string" == typeof t && "function" == typeof s[t] && void 0 !== (e = s[t].apply(s, i)))
            return !1
    }),
    void 0 !== e) ? e : this
}
,
$.fn.datetimepicker.defaults = {},
$.fn.datetimepicker.Constructor = Datetimepicker;
var dates = $.fn.datetimepicker.dates = {
    en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        meridiem: ["am", "pm"],
        suffix: ["st", "nd", "rd", "th"],
        today: "Today",
        clear: "Clear"
    }
}
  , DPGlobal = {
    modes: [{
        clsName: "minutes",
        navFnc: "Hours",
        navStep: 1
    }, {
        clsName: "hours",
        navFnc: "Date",
        navStep: 1
    }, {
        clsName: "days",
        navFnc: "Month",
        navStep: 1
    }, {
        clsName: "months",
        navFnc: "FullYear",
        navStep: 1
    }, {
        clsName: "years",
        navFnc: "FullYear",
        navStep: 10
    }, ],
    isLeapYear: function(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    },
    getDaysInMonth: function(t, e) {
        return [31, DPGlobal.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
    },
    getDefaultFormat: function(t, e) {
        if ("standard" === t)
            return "input" === e ? "yyyy-mm-dd hh:ii" : "yyyy-mm-dd hh:ii:ss";
        if ("php" === t)
            return "input" === e ? "Y-m-d H:i" : "Y-m-d H:i:s";
        throw Error("Invalid format type.")
    },
    validParts: function(t) {
        if ("standard" === t)
            return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
        if ("php" === t)
            return /[dDjlNwzFmMnStyYaABgGhHis]/g;
        throw Error("Invalid format type.")
    },
    nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
    parseFormat: function(t, e) {
        var i = t.replace(this.validParts(e), "\0").split("\0")
          , a = t.match(this.validParts(e));
        if (!i || !i.length || !a || 0 === a.length)
            throw Error("Invalid date format.");
        return {
            separators: i,
            parts: a
        }
    },
    parseDate: function(t, e, i, a, s) {
        if (t instanceof Date) {
            var n = new Date(t.valueOf() - 6e4 * t.getTimezoneOffset());
            return n.setMilliseconds(0),
            n
        }
        if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(t) && (e = this.parseFormat("yyyy-mm-dd", a)),
        /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(t) && (e = this.parseFormat("yyyy-mm-dd hh:ii", a)),
        /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(t) && (e = this.parseFormat("yyyy-mm-dd hh:ii:ss", a)),
        /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(t)) {
            var o, r, h = /([-+]\d+)([dmwy])/, l = t.match(/([-+]\d+)([dmwy])/g);
            t = new Date;
            for (var d = 0; d < l.length; d++)
                switch (r = parseInt((o = h.exec(l[d]))[1]),
                o[2]) {
                case "d":
                    t.setUTCDate(t.getUTCDate() + r);
                    break;
                case "m":
                    t = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, t, r);
                    break;
                case "w":
                    t.setUTCDate(t.getUTCDate() + 7 * r);
                    break;
                case "y":
                    t = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, t, r)
                }
            return UTCDate(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), 0)
        }
        var c, u, o, l = t && t.toString().match(this.nonpunctuation) || [], t = new Date(0,0,0,0,0,0,0), p = {}, m = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P", "z", "Z"], f = {
            hh: function(t, e) {
                return t.setUTCHours(e)
            },
            h: function(t, e) {
                return t.setUTCHours(e)
            },
            HH: function(t, e) {
                return t.setUTCHours(12 === e ? 0 : e)
            },
            H: function(t, e) {
                return t.setUTCHours(12 === e ? 0 : e)
            },
            ii: function(t, e) {
                return t.setUTCMinutes(e)
            },
            i: function(t, e) {
                return t.setUTCMinutes(e)
            },
            ss: function(t, e) {
                return t.setUTCSeconds(e)
            },
            s: function(t, e) {
                return t.setUTCSeconds(e)
            },
            yyyy: function(t, e) {
                return t.setUTCFullYear(e)
            },
            yy: function(t, e) {
                return t.setUTCFullYear(2e3 + e)
            },
            m: function(t, e) {
                for (e -= 1; e < 0; )
                    e += 12;
                for (e %= 12,
                t.setUTCMonth(e); t.getUTCMonth() !== e; )
                    if (isNaN(t.getUTCMonth()))
                        break;
                    else
                        t.setUTCDate(t.getUTCDate() - 1);
                return t
            },
            d: function(t, e) {
                return t.setUTCDate(e)
            },
            p: function(t, e) {
                return t.setUTCHours(1 === e ? t.getUTCHours() + 12 : t.getUTCHours())
            },
            z: function() {
                return s
            }
        };
        if (f.M = f.MM = f.mm = f.m,
        f.dd = f.d,
        f.P = f.p,
        f.Z = f.z,
        t = UTCDate(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()),
        l.length === e.parts.length) {
            for (var d = 0, v = e.parts.length; d < v; d++) {
                if (c = parseInt(l[d], 10),
                o = e.parts[d],
                isNaN(c))
                    switch (o) {
                    case "MM":
                        u = $(dates[i].months).filter(function() {
                            var t = this.slice(0, l[d].length)
                              , e = l[d].slice(0, t.length);
                            return t === e
                        }),
                        c = $.inArray(u[0], dates[i].months) + 1;
                        break;
                    case "M":
                        u = $(dates[i].monthsShort).filter(function() {
                            var t = this.slice(0, l[d].length)
                              , e = l[d].slice(0, t.length);
                            return t.toLowerCase() === e.toLowerCase()
                        }),
                        c = $.inArray(u[0], dates[i].monthsShort) + 1;
                        break;
                    case "p":
                    case "P":
                        c = $.inArray(l[d].toLowerCase(), dates[i].meridiem)
                    }
                p[o] = c
            }
            for (var g, d = 0; d < m.length; d++)
                (g = m[d])in p && !isNaN(p[g]) && f[g](t, p[g])
        }
        return t
    },
    formatDate: function(t, e, i, a, s) {
        if (null === t)
            return "";
        if ("standard" === a) {
            var n, o = 2 === dates[i].meridiem.length ? dates[i].meridiem[12 > t.getUTCHours() ? 0 : 1] : "";
            n = {
                t: t.getTime(),
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear(),
                m: t.getUTCMonth() + 1,
                M: dates[i].monthsShort[t.getUTCMonth()],
                MM: dates[i].months[t.getUTCMonth()],
                d: t.getUTCDate(),
                D: dates[i].daysShort[t.getUTCDay()],
                DD: dates[i].days[t.getUTCDay()],
                p: o,
                h: t.getUTCHours(),
                i: t.getUTCMinutes(),
                s: t.getUTCSeconds(),
                z: s
            },
            2 === dates[i].meridiem.length ? n.H = n.h % 12 == 0 ? 12 : n.h % 12 : n.H = n.h,
            n.HH = (n.H < 10 ? "0" : "") + n.H,
            n.P = n.p.toUpperCase(),
            n.Z = n.z,
            n.hh = (n.h < 10 ? "0" : "") + n.h,
            n.ii = (n.i < 10 ? "0" : "") + n.i,
            n.ss = (n.s < 10 ? "0" : "") + n.s,
            n.dd = (n.d < 10 ? "0" : "") + n.d,
            n.mm = (n.m < 10 ? "0" : "") + n.m
        } else if ("php" === a)
            (n = {
                y: t.getUTCFullYear().toString().substring(2),
                Y: t.getUTCFullYear(),
                F: dates[i].months[t.getUTCMonth()],
                M: dates[i].monthsShort[t.getUTCMonth()],
                n: t.getUTCMonth() + 1,
                t: DPGlobal.getDaysInMonth(t.getUTCFullYear(), t.getUTCMonth()),
                j: t.getUTCDate(),
                l: dates[i].days[t.getUTCDay()],
                D: dates[i].daysShort[t.getUTCDay()],
                w: t.getUTCDay(),
                N: 0 === t.getUTCDay() ? 7 : t.getUTCDay(),
                S: t.getUTCDate() % 10 <= dates[i].suffix.length ? dates[i].suffix[t.getUTCDate() % 10 - 1] : "",
                a: 2 === dates[i].meridiem.length ? dates[i].meridiem[12 > t.getUTCHours() ? 0 : 1] : "",
                g: t.getUTCHours() % 12 == 0 ? 12 : t.getUTCHours() % 12,
                G: t.getUTCHours(),
                i: t.getUTCMinutes(),
                s: t.getUTCSeconds()
            }).m = (n.n < 10 ? "0" : "") + n.n,
            n.d = (n.j < 10 ? "0" : "") + n.j,
            n.A = n.a.toString().toUpperCase(),
            n.h = (n.g < 10 ? "0" : "") + n.g,
            n.H = (n.G < 10 ? "0" : "") + n.G,
            n.i = (n.i < 10 ? "0" : "") + n.i,
            n.s = (n.s < 10 ? "0" : "") + n.s;
        else
            throw Error("Invalid format type.");
        for (var t = [], r = $.extend([], e.separators), h = 0, l = e.parts.length; h < l; h++)
            r.length && t.push(r.shift()),
            t.push(n[e.parts[h]]);
        return r.length && t.push(r.shift()),
        t.join("")
    },
    convertViewMode: function(t) {
        switch (t) {
        case 4:
        case "decade":
            t = 4;
            break;
        case 3:
        case "year":
            t = 3;
            break;
        case 2:
        case "month":
            t = 2;
            break;
        case 1:
        case "day":
            t = 1;
            break;
        case 0:
        case "hour":
            t = 0
        }
        return t
    },
    headTemplate: '<thead><tr><th class="prev"><i class="{iconType} {leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{iconType} {rightArrow}"/></th></tr></thead>',
    headTemplateV3: '<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
};
DPGlobal.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + DPGlobal.headTemplate + "<tbody></tbody>" + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table></div></div>",
DPGlobal.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + DPGlobal.headTemplateV3 + "<tbody></tbody>" + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table></div></div>",
$.fn.datetimepicker.DPGlobal = DPGlobal,
$.fn.datetimepicker.noConflict = function() {
    return $.fn.datetimepicker = old,
    this
}
,
$(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function(t) {
    var e = $(this);
    e.data("datetimepicker") || (t.preventDefault(),
    e.datetimepicker("showDatetimePicker"))
}),
$(function() {
    $('[data-provide="datetimepicker-inline"]').datetimepicker()
}),
$.fn.datetimepicker.dates.ru = {
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: "Сегодня",
    suffix: [],
    meridiem: []
},
$(document).ready(function() {
    $("input.datetimepicker").datetimepicker({
        format: "dd.mm.yyyy hh:ii",
        autoclose: !0,
        startDate: new Date,
        minuteStep: 60,
        language: "ru",
        fontAwesome: !0
    })
});
