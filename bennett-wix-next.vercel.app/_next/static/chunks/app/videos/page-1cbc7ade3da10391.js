(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[55], {
    7298: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 7506))
    },
    7506: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return n
            }
        });
        var a = s(7437)
          , r = s(1855)
          , l = s(3755)
          , i = s(8349);
        let o = [{
            youtubeUrl: "https://www.youtube.com/embed/a1g1iW7beHg",
            color: "#212C13",
            title: "Travel",
            subtitle: "'Tetons in Fog'",
            description: "A trip to Grand Teton National Park to see what most would think a disappointment - the peaks hidden in fog. Even so, I enjoyed the opportunity to mold scenes from the rich environment now given a weighty tone into an energetic collage."
        }, {
            youtubeUrl: "https://www.youtube.com/embed/X8_OPhetzfE",
            color: "#052D43",
            title: "Project Expo",
            subtitle: "'Toby Wan Kenobi' - A sample in AI Deepfakes",
            description: "An example of my penchant for unique projects with often humorous results. One of several videos I've produced using deepfake software, including an informative explanation of my process and takeaways."
        }, {
            youtubeUrl: "https://www.youtube.com/embed/iZNHy1NwJ90",
            color: "#550003",
            title: "Web Series",
            subtitle: "'Redhead Reviews' - Season 1",
            description: "An avid follower of the IMDb Top 250 list of the best movies of all time, I spent a summer traveling the list in order filling in some lesser known films to myself and completely unknown films to the non addict."
        }, {
            youtubeUrl: "https://www.youtube.com/embed/JlZFpGBhFyc",
            color: "#BBAA2D",
            title: "Documentary",
            subtitle: "'Buck Smith' - A sample in AI Deepfakes",
            description: "Not all videos need flashy editing. Sometimes all it takes is a good talker, a good listener, and a good mic."
        }];
        function n() {
            return (0,
            a.jsxs)("main", {
                className: "font-inter",
                children: [(0,
                a.jsx)(l.UG, {
                    layers: [{
                        image: "/videos-header.webp",
                        translateY: [0, 50],
                        scale: [1.05, 1],
                        shouldAlwaysCompleteAnimation: !0
                    }],
                    className: "h-[500px] aspect-[2/1]"
                }), (0,
                a.jsx)(r.Z, {}), (0,
                a.jsxs)("div", {
                    className: "flex gap-36 justify-end max-w-[1600px] mx-auto pb-8 pt-16",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "max-w-96 pt-8",
                        children: [(0,
                        a.jsx)("h2", {
                            className: "text-3xl font-lulu font-medium tracking-tight text-zinc-800",
                            children: "Videography"
                        }), (0,
                        a.jsx)("p", {
                            className: "uppercase tracking-wider font-bold mb-10 text-[#adadac]",
                            children: "A bit about me"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-zinc-400",
                            children: "Show don't tell :)"
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "relative w-1/2 max-w-[730px]",
                        children: (0,
                        a.jsx)("div", {
                            className: "relative w-full border border-black border-2 shadow-[8px_7px_15px_-4px_rgba(0,_0,_0,_0.8)]",
                            style: {
                                paddingTop: "56.25%"
                            },
                            children: (0,
                            a.jsx)("div", {
                                className: "absolute top-0 left-0 w-full h-full",
                                children: (0,
                                a.jsx)("iframe", {
                                    src: "https://www.youtube.com/embed/a1g1iW7beHg",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: !0,
                                    className: "w-full h-full"
                                })
                            })
                        })
                    })]
                }), (0,
                a.jsx)(r.Z, {}), (0,
                a.jsx)("div", {
                    className: "space-y-36 mt-4 mb-40 max-w-[1600px] mx-auto",
                    children: o.map( (e, t) => (0,
                    a.jsx)(c, {
                        youtubeUrl: e.youtubeUrl,
                        color: e.color,
                        title: e.title,
                        subtitle: e.subtitle,
                        description: e.description
                    }, t))
                }), (0,
                a.jsx)(i.default, {})]
            })
        }
        function c(e) {
            let {youtubeUrl: t, color: s, title: r, subtitle: l, description: i} = e;
            return (0,
            a.jsxs)("div", {
                className: "flex gap-20 px-4 py-8",
                children: [(0,
                a.jsx)("div", {
                    className: "relative w-1/2 max-w-[750px]",
                    children: (0,
                    a.jsxs)("div", {
                        className: "relative w-full border-black border-2 shadow-[8px_7px_15px_-4px_rgba(0,_0,_0,_0.8)]",
                        style: {
                            paddingTop: "56.25%"
                        },
                        children: [(0,
                        a.jsx)("div", {
                            id: "video-card-strip",
                            className: "absolute -bottom-6 -right-6 w-2/3 h-[250px] rounded-l-2xl rounded-tl-3xl shadow-[8px_7px_15px_-4px_rgba(0,_0,_0,_0.8)] z-0",
                            style: {
                                backgroundColor: s
                            }
                        }), (0,
                        a.jsx)("div", {
                            className: "absolute top-0 left-0 w-full h-full z-10",
                            children: (0,
                            a.jsx)("iframe", {
                                src: t,
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: !0,
                                className: "w-full h-full",
                                loading: "lazy",
                                title: r
                            })
                        })]
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "relative max-w-96",
                    children: [(0,
                    a.jsx)("div", {
                        className: "text-white px-6 py-3 rounded-tr-xl  mb-10 shadow-[8px_7px_15px_-4px_rgba(0,_0,_0,_0.8)] tracking-wide",
                        style: {
                            backgroundColor: s
                        },
                        children: (0,
                        a.jsx)("h2", {
                            className: "text-[30px] font-extrabold uppercase tracking-[6px]",
                            children: r
                        })
                    }), (0,
                    a.jsx)("p", {
                        className: "mb-4 text-zinc-400",
                        children: l
                    }), (0,
                    a.jsx)("p", {
                        className: "text-zinc-400",
                        children: i
                    })]
                })]
            })
        }
    },
    8349: function(e, t, s) {
        "use strict";
        s.d(t, {
            default: function() {
                return o
            }
        });
        var a = s(7437)
          , r = s(265)
          , l = s(7648)
          , i = s(1855);
        function o() {
            return (0,
            a.jsxs)("div", {
                children: [(0,
                a.jsx)(i.Z, {}), (0,
                a.jsxs)("div", {
                    className: "w-full bg-[#E6E6E6] px-10 py-8 mt-auto footer-font font-lulu",
                    children: [(0,
                    a.jsxs)("div", {
                        className: " mx-auto grid grid-cols-12 gap-x-8 font-extrabold",
                        children: [(0,
                        a.jsx)("div", {
                            className: "col-span-4",
                            children: (0,
                            a.jsx)("p", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm leading-relaxed w-96",
                                children: "Don't hesitate to contact me to discuss a possible project or learn more about my work."
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "col-span-3",
                            children: [(0,
                            a.jsx)("h3", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm mb-4",
                                children: "Contact"
                            }), (0,
                            a.jsxs)("div", {
                                className: "space-y-1 text-[#ADADAC]  tracking-[0.1em]",
                                children: [(0,
                                a.jsx)("p", {
                                    children: "tobyosmith01@gmail.com"
                                }), (0,
                                a.jsx)("p", {
                                    children: "540-810-0505"
                                })]
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "col-span-2 flex flex-col items-center",
                            children: [(0,
                            a.jsx)("p", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm mb-4",
                                children: "Back to top"
                            }), (0,
                            a.jsx)("button", {
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
                                a.jsx)(r.Z, {
                                    className: "w-4 h-4 text-white"
                                })
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "col-span-3",
                            children: [(0,
                            a.jsx)("h3", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm mb-4",
                                children: "Social"
                            }), (0,
                            a.jsxs)("div", {
                                className: "grid grid-cols-2 gap-x-1 gap-y-1 w-60",
                                children: [(0,
                                a.jsx)(l.default, {
                                    href: "#linkedin",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "LinkedIn"
                                }), (0,
                                a.jsx)(l.default, {
                                    href: "#mandy",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "Mandy"
                                }), (0,
                                a.jsx)(l.default, {
                                    href: "#upwork",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "Upwork"
                                }), (0,
                                a.jsx)(l.default, {
                                    href: "#behance",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "Behance"
                                })]
                            })]
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: " mt-12",
                        children: (0,
                        a.jsx)("p", {
                            className: "font-inter text-stone-600 text-sm font-light",
                            children: "\xa9 2024 by Toby Smith."
                        })
                    })]
                })]
            })
        }
    },
    1855: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return r
            }
        });
        var a = s(7437);
        function r() {
            return (0,
            a.jsx)("div", {
                className: "h-[20px] w-full bg-[#242323]"
            })
        }
    },
    9205: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n
            }
        });
        var a = s(2265);
        let r = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , l = function() {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            return t.filter( (e, t, s) => !!e && "" !== e.trim() && s.indexOf(e) === t).join(" ").trim()
        };
        var i = {
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
        let o = (0,
        a.forwardRef)( (e, t) => {
            let {color: s="currentColor", size: r=24, strokeWidth: o=2, absoluteStrokeWidth: n, className: c="", children: d, iconNode: p, ...u} = e;
            return (0,
            a.createElement)("svg", {
                ref: t,
                ...i,
                width: r,
                height: r,
                stroke: s,
                strokeWidth: n ? 24 * Number(o) / Number(r) : o,
                className: l("lucide", c),
                ...u
            }, [...p.map(e => {
                let[t,s] = e;
                return (0,
                a.createElement)(t, s)
            }
            ), ...Array.isArray(d) ? d : [d]])
        }
        )
          , n = (e, t) => {
            let s = (0,
            a.forwardRef)( (s, i) => {
                let {className: n, ...c} = s;
                return (0,
                a.createElement)(o, {
                    ref: i,
                    iconNode: t,
                    className: l("lucide-".concat(r(e)), n),
                    ...c
                })
            }
            );
            return s.displayName = "".concat(e),
            s
        }
    },
    265: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return a
            }
        });
        let a = (0,
        s(9205).Z)("ArrowUp", [["path", {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }], ["path", {
            d: "M12 19V5",
            key: "x0mq9r"
        }]])
    }
}, function(e) {
    e.O(0, [648, 755, 971, 117, 744], function() {
        return e(e.s = 7298)
    }),
    _N_E = e.O()
}
]);
