(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[54], {
    5654: function(e, i, n) {
        Promise.resolve().then(n.bind(n, 2938))
    },
    2938: function(e, i, n) {
        "use strict";
        n.r(i),
        n.d(i, {
            default: function() {
                return J
            }
        });
        var t = n(7437)
          , c = n(1855);
        function a() {
            return (0,
            t.jsx)("section", {
                className: "max-w-4xl mx-auto px-4 py-16",
                children: (0,
                t.jsxs)("div", {
                    className: "grid md:grid-cols-2 gap-36 items-start",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-[28px] font-lulu font-medium tracking-tight text-zinc-700",
                            children: "PHOTOGRAPHY"
                        }), (0,
                        t.jsxs)("div", {
                            className: "space-y-4 font-light leading-relaxed text-[15px] text-zinc-600",
                            children: [(0,
                            t.jsx)("p", {
                                children: 'Today I feel that photography is treated either as some high art or worth nothing at all. I see phrases like "painting a picture", "capturing memories" or "telling a story" that are too lofty for a typical portfolio. But alternatively, I see the potential of a single frame is lost with more and more casual online content and a camera in every pocket.'
                            }), (0,
                            t.jsx)("p", {
                                children: "I try to keep it simple, capturing beauty or form wherever I might see it, but not thinking so highly of it to become pretentious. Here are some examples I hope-"
                            })]
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "relative",
                        children: (0,
                        t.jsx)("img", {
                            src: "https://static.wixstatic.com/media/b037ac_4a76c28363e34ff2b45f64e96621e506~mv2.png/v1/fill/w_240,h_368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Profile_edited.png",
                            alt: "Portrait photograph against blue background",
                            className: "h-392 w-256"
                        })
                    })]
                })
            })
        }
        var s = n(3755)
          , m = n(2265)
          , r = n(3145)
          , l = n(4516);
        n(2119),
        n(8209);
        let o = () => ({
            width: 404,
            height: 316
        });
        function y() {
            let[e,i] = (0,
            m.useState)([])
              , [n,c] = (0,
            m.useState)(!0);
            (0,
            m.useEffect)( () => {
                i(Array.from({
                    length: 96
                }, (e, i) => {
                    let n = i + 1
                      , t = o();
                    return {
                        src: "/photos/image-".concat(n, ".webp"),
                        alt: "Photo ".concat(n),
                        width: t.width,
                        height: t.height
                    }
                }
                )),
                c(!1)
            }
            , []);
            let a = ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1"]
              , s = ["col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-3", "col-span-2 row-span-2"]
              , y = ["col-span-3 row-span-3", "col-span-1 row-span-1", "col-span-1 row-span-2"]
              , g = ["col-span-2 row-span-2", "col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1"];
            return (0,
            t.jsxs)("div", {
                className: "px-8 py-8",
                children: [(0,
                t.jsx)("h1", {
                    className: "text-6xl font-lulu font-bold mb-6 uppercase text-center",
                    children: "Gallery"
                }), (0,
                t.jsx)("p", {
                    className: "text-lg font-lulu mb-6 uppercase font-bold text-center",
                    children: "A sample of my creative work"
                }), (0,
                t.jsx)(l.ri, {
                    options: {
                        bgOpacity: .99,
                        mainClass: "pswp-custom-styles"
                    },
                    children: !n && (0,
                    t.jsx)("div", {
                        className: "grid grid-cols-4 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[350px] gap-2 p-2 w-full",
                        style: {
                            overflow: "hidden",
                            minHeight: "100vh"
                        },
                        children: e.map( (e, i) => {
                            if (i >= 0 && i < 6 || i >= 20 && i < 26 || i >= 40 && i < 46 || i >= 60 && i < 66 || i >= 80 && i < 86) {
                                let n = i;
                                return i >= 20 && i < 26 && (n -= 20),
                                i >= 40 && i < 46 && (n -= 40),
                                i >= 60 && i < 66 && (n -= 60),
                                i >= 80 && i < 86 && (n -= 80),
                                (0,
                                t.jsx)("div", {
                                    className: "".concat(a[n], " relative"),
                                    style: {
                                        overflow: "hidden",
                                        width: "100%"
                                    },
                                    children: (0,
                                    t.jsx)(l.ck, {
                                        original: e.src,
                                        thumbnail: e.src,
                                        width: e.width,
                                        height: e.height,
                                        alt: e.alt,
                                        children: n => {
                                            let {ref: c, open: a} = n;
                                            return (0,
                                            t.jsx)("div", {
                                                className: "overflow-hidden cursor-pointer group",
                                                onClick: a,
                                                children: (0,
                                                t.jsx)(r.default, {
                                                    ref: c,
                                                    src: e,
                                                    alt: "Gallery Image ".concat(i + 1),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    loading: "lazy",
                                                    placeholder: "blur",
                                                    className: "object-cover w-full h-full transition-all duration-1000 ease-in-out group-hover:brightness-110 group-hover:saturate-150 group-hover:scale-110",
                                                    blurDataURL: "data:image/png;iVBORw0KGgoAAAANSUhEUgAAAOwAAAC0CAIAAAAYbFfZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHbSURBVHhe7dIBDQAADMOg+1c5KdfRBDRwgziJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8iYnbHsllr37T0wvvAAAAAElFTkSuQmCC"
                                                })
                                            })
                                        }
                                    }, i)
                                }, i)
                            }
                            if (i >= 6 && i < 10 || i >= 26 && i < 30 || i >= 46 && i < 50 || i >= 66 && i < 70 || i >= 86 && i < 90) {
                                let n = i;
                                return i >= 6 && i < 10 && (n -= 6),
                                i >= 26 && i < 30 && (n -= 26),
                                i >= 46 && i < 50 && (n -= 46),
                                i >= 66 && i < 70 && (n -= 66),
                                i >= 86 && i < 90 && (n -= 86),
                                (0,
                                t.jsx)("div", {
                                    className: "".concat(s[n], " relative"),
                                    style: {
                                        overflow: "hidden",
                                        width: "100%"
                                    },
                                    children: (0,
                                    t.jsx)(l.ck, {
                                        original: e.src,
                                        thumbnail: e.src,
                                        width: e.width,
                                        height: e.height,
                                        alt: e.alt,
                                        children: n => {
                                            let {ref: c, open: a} = n;
                                            return (0,
                                            t.jsx)("div", {
                                                className: "overflow-hidden cursor-pointer group",
                                                onClick: a,
                                                children: (0,
                                                t.jsx)(r.default, {
                                                    ref: c,
                                                    src: e,
                                                    alt: "Gallery Image ".concat(i + 1),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    loading: "lazy",
                                                    placeholder: "blur",
                                                    className: "object-cover w-full h-full transition-all duration-1000 ease-in-out group-hover:brightness-110 group-hover:saturate-150 group-hover:scale-110",
                                                    blurDataURL: "data:image/png;iVBORw0KGgoAAAANSUhEUgAAAOwAAAC0CAIAAAAYbFfZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHbSURBVHhe7dIBDQAADMOg+1c5KdfRBDRwgziJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8iYnbHsllr37T0wvvAAAAAElFTkSuQmCC"
                                                })
                                            })
                                        }
                                    }, i)
                                }, i)
                            }
                            if (i >= 10 && i < 13 || i >= 30 && i < 33 || i >= 50 && i < 53 || i >= 70 && i < 73 || i >= 90 && i < 96) {
                                let n = i;
                                return i >= 10 && i < 13 && (n -= 10),
                                i >= 30 && i < 33 && (n -= 30),
                                i >= 50 && i < 53 && (n -= 50),
                                i >= 70 && i < 73 && (n -= 70),
                                i >= 90 && i < 96 && (n -= 90),
                                (0,
                                t.jsx)("div", {
                                    className: "".concat(y[n], " relative"),
                                    style: {
                                        overflow: "hidden",
                                        width: "100%"
                                    },
                                    children: (0,
                                    t.jsx)(l.ck, {
                                        original: e.src,
                                        thumbnail: e.src,
                                        width: e.width,
                                        height: e.height,
                                        alt: e.alt,
                                        children: n => {
                                            let {ref: c, open: a} = n;
                                            return (0,
                                            t.jsx)("div", {
                                                className: "overflow-hidden cursor-pointer group",
                                                onClick: a,
                                                children: (0,
                                                t.jsx)(r.default, {
                                                    ref: c,
                                                    src: e,
                                                    alt: "Gallery Image ".concat(i + 1),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    loading: "lazy",
                                                    placeholder: "blur",
                                                    className: "object-cover w-full h-full transition-all duration-1000 ease-in-out group-hover:brightness-110 group-hover:saturate-150 group-hover:scale-110",
                                                    blurDataURL: "data:image/png;iVBORw0KGgoAAAANSUhEUgAAAOwAAAC0CAIAAAAYbFfZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHbSURBVHhe7dIBDQAADMOg+1c5KdfRBDRwgziJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8iYnbHsllr37T0wvvAAAAAElFTkSuQmCC"
                                                })
                                            })
                                        }
                                    }, i)
                                }, i)
                            }
                            if (i >= 13 && i < 20 || i >= 33 && i < 40 || i >= 53 && i < 60 || i >= 73 && i < 80) {
                                let n = i;
                                return i >= 13 && i < 20 && (n -= 13),
                                i >= 33 && i < 40 && (n -= 33),
                                i >= 53 && i < 60 && (n -= 53),
                                i >= 73 && i < 80 && (n -= 73),
                                (0,
                                t.jsx)("div", {
                                    className: "".concat(g[n], " relative"),
                                    style: {
                                        overflow: "hidden",
                                        width: "100%"
                                    },
                                    children: (0,
                                    t.jsx)(l.ck, {
                                        original: e.src,
                                        thumbnail: e.src,
                                        width: e.width,
                                        height: e.height,
                                        alt: e.alt,
                                        children: n => {
                                            let {ref: c, open: a} = n;
                                            return (0,
                                            t.jsx)("div", {
                                                className: "overflow-hidden cursor-pointer group",
                                                onClick: a,
                                                children: (0,
                                                t.jsx)(r.default, {
                                                    ref: c,
                                                    src: e,
                                                    alt: "Gallery Image ".concat(i + 1),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    loading: "lazy",
                                                    placeholder: "blur",
                                                    className: "object-cover w-full h-full transition-all duration-1000 ease-in-out group-hover:brightness-110 group-hover:saturate-150 group-hover:scale-110",
                                                    blurDataURL: "data:image/png;iVBORw0KGgoAAAANSUhEUgAAAOwAAAC0CAIAAAAYbFfZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHbSURBVHhe7dIBDQAADMOg+1c5KdfRBDRwgziJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8icmTmDyJyZOYPInJk5g8iYnbHsllr37T0wvvAAAAAElFTkSuQmCC"
                                                })
                                            })
                                        }
                                    }, i)
                                }, i)
                            }
                        }
                        )
                    })
                })]
            })
        }
        var g = n(8349);
        function J() {
            return (0,
            t.jsxs)("div", {
                className: "font-inter",
                children: [(0,
                t.jsx)(s.UG, {
                    layers: [{
                        image: "/photos-header.jpg",
                        translateY: [0, 50],
                        shouldAlwaysCompleteAnimation: !0
                    }],
                    className: "h-[500px] aspect-[2/1] mt-9"
                }), (0,
                t.jsx)(c.Z, {}), (0,
                t.jsx)(a, {}), (0,
                t.jsx)(c.Z, {}), (0,
                t.jsx)(y, {}), (0,
                t.jsx)(g.default, {})]
            })
        }
    },
    8349: function(e, i, n) {
        "use strict";
        n.d(i, {
            default: function() {
                return m
            }
        });
        var t = n(7437)
          , c = n(265)
          , a = n(7648)
          , s = n(1855);
        function m() {
            return (0,
            t.jsxs)("div", {
                children: [(0,
                t.jsx)(s.Z, {}), (0,
                t.jsxs)("div", {
                    className: "w-full bg-[#E6E6E6] px-10 py-8 mt-auto footer-font font-lulu",
                    children: [(0,
                    t.jsxs)("div", {
                        className: " mx-auto grid grid-cols-12 gap-x-8 font-extrabold",
                        children: [(0,
                        t.jsx)("div", {
                            className: "col-span-4",
                            children: (0,
                            t.jsx)("p", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm leading-relaxed w-96",
                                children: "Don't hesitate to contact me to discuss a possible project or learn more about my work."
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: "col-span-3",
                            children: [(0,
                            t.jsx)("h3", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm mb-4",
                                children: "Contact"
                            }), (0,
                            t.jsxs)("div", {
                                className: "space-y-1 text-[#ADADAC]  tracking-[0.1em]",
                                children: [(0,
                                t.jsx)("p", {
                                    children: "tobyosmith01@gmail.com"
                                }), (0,
                                t.jsx)("p", {
                                    children: "540-810-0505"
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "col-span-2 flex flex-col items-center",
                            children: [(0,
                            t.jsx)("p", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm mb-4",
                                children: "Back to top"
                            }), (0,
                            t.jsx)("button", {
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
                                t.jsx)(c.Z, {
                                    className: "w-4 h-4 text-white"
                                })
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "col-span-3",
                            children: [(0,
                            t.jsx)("h3", {
                                className: "text-[#ADADAC] uppercase tracking-tight text-sm mb-4",
                                children: "Social"
                            }), (0,
                            t.jsxs)("div", {
                                className: "grid grid-cols-2 gap-x-1 gap-y-1 w-60",
                                children: [(0,
                                t.jsx)(a.default, {
                                    href: "#linkedin",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "LinkedIn"
                                }), (0,
                                t.jsx)(a.default, {
                                    href: "#mandy",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "Mandy"
                                }), (0,
                                t.jsx)(a.default, {
                                    href: "#upwork",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "Upwork"
                                }), (0,
                                t.jsx)(a.default, {
                                    href: "#behance",
                                    className: "text-[#ADADAC] uppercase tracking-tight text-sm hover:text-gray-800 transition-colors py-2",
                                    children: "Behance"
                                })]
                            })]
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: " mt-12",
                        children: (0,
                        t.jsx)("p", {
                            className: "font-inter text-stone-600 text-sm font-light",
                            children: "\xa9 2024 by Toby Smith."
                        })
                    })]
                })]
            })
        }
    },
    1855: function(e, i, n) {
        "use strict";
        n.d(i, {
            Z: function() {
                return c
            }
        });
        var t = n(7437);
        function c() {
            return (0,
            t.jsx)("div", {
                className: "h-[20px] w-full bg-[#242323]"
            })
        }
    },
    2119: function() {}
}, function(e) {
    e.O(0, [482, 683, 740, 648, 755, 279, 426, 971, 117, 744], function() {
        return e(e.s = 5654)
    }),
    _N_E = e.O()
}
]);
