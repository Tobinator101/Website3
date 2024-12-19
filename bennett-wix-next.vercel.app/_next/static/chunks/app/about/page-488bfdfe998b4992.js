(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[301], {
    8713: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 8349))
    },
    8349: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return i
            }
        });
        var s = r(7437)
          , a = r(265)
          , n = r(7648)
          , c = r(1855);
        function i() {
            return (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsx)(c.Z, {}), (0,
                s.jsxs)("div", {
                    className: "w-full bg-[#E6E6E6] px-10 py-8 mt-auto footer-font font-lulu",
                    children: [(0,
                    s.jsxs)("div", {
                        className: " mx-auto grid grid-cols-12 gap-x-8 font-extrabold",
                        children: [(0,
                        s.jsx)("div", {
                            className: "col-span-4",
                            children: (0,
                            s.jsx)("p", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm leading-relaxed w-96",
                                children: "Don't hesitate to contact me to discuss a possible project or learn more about my work."
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "col-span-3",
                            children: [(0,
                            s.jsx)("h3", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm mb-4",
                                children: "Contact"
                            }), (0,
                            s.jsxs)("div", {
                                className: "space-y-1 text-[#ADADAC]  tracking-[0.1em]",
                                children: [(0,
                                s.jsx)("p", {
                                    children: "tobyosmith01@gmail.com"
                                }), (0,
                                s.jsx)("p", {
                                    children: "540-810-0505"
                                })]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "col-span-2 flex flex-col items-center",
                            children: [(0,
                            s.jsx)("p", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm mb-4",
                                children: "Back to top"
                            }), (0,
                            s.jsx)("button", {
                                onClick: () => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    })
                                }
                                ,
                                className: "bg-black hover:bg-gray-900 p-2 transition-colors",
                                "aria-label": "Back to top",
                                children: (0,
                                s.jsx)(a.Z, {
                                    className: "w-4 h-4 text-white"
                                })
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "col-span-3",
                            children: [(0,
                            s.jsx)("h3", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm mb-4",
                                children: "Social"
                            }), (0,
                            s.jsxs)("div", {
                                className: "grid grid-cols-2 gap-x-1 gap-y-1 w-60",
                                children: [(0,
                                s.jsx)(n.default, {
                                    href: "#linkedin",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "LinkedIn"
                                }), (0,
                                s.jsx)(n.default, {
                                    href: "#mandy",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "Mandy"
                                }), (0,
                                s.jsx)(n.default, {
                                    href: "#upwork",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "Upwork"
                                }), (0,
                                s.jsx)(n.default, {
                                    href: "#behance",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "Behance"
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: " mt-12",
                        children: (0,
                        s.jsx)("p", {
                            className: "font-inter text-stone-600 text-sm font-light",
                            children: "\xa9 2024 by Toby Smith."
                        })
                    })]
                })]
            })
        }
    },
    1855: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return a
            }
        });
        var s = r(7437);
        function a() {
            return (0,
            s.jsx)("div", {
                className: "h-[20px] w-full bg-[#242323]"
            })
        }
    },
    9205: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var s = r(2265);
        let a = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , n = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return t.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
        };
        var c = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let i = (0,
        s.forwardRef)( (e, t) => {
            let {color: r="currentColor", size: a=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: l="", children: d, iconNode: h, ...u} = e;
            return (0,
            s.createElement)("svg", {
                ref: t,
                ...c,
                width: a,
                height: a,
                stroke: r,
                strokeWidth: o ? 24 * Number(i) / Number(a) : i,
                className: n("lucide", l),
                ...u
            }, [...h.map(e => {
                let[t,r] = e;
                return (0,
                s.createElement)(t, r)
            }
            ), ...Array.isArray(d) ? d : [d]])
        }
        )
          , o = (e, t) => {
            let r = (0,
            s.forwardRef)( (r, c) => {
                let {className: o, ...l} = r;
                return (0,
                s.createElement)(i, {
                    ref: c,
                    iconNode: t,
                    className: n("lucide-".concat(a(e)), o),
                    ...l
                })
            }
            );
            return r.displayName = "".concat(e),
            r
        }
    },
    265: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return s
            }
        });
        let s = (0,
        r(9205).Z)("ArrowUp", [["path", {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }], ["path", {
            d: "M12 19V5",
            key: "x0mq9r"
        }]])
    }
}, function(e) {
    e.O(0, [648, 971, 117, 744], function() {
        return e(e.s = 8713)
    }),
    _N_E = e.O()
}
]);
