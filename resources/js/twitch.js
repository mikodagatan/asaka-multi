!(function(t, e) {
    typeof exports === 'object' && typeof module === 'object' ? module.exports = e() : typeof define === 'function' && define.amd ? define([], e) : typeof exports === 'object' ? exports.video = e() : (t.Twitch = t.Twitch || {}, t.Twitch.video = e());
}(typeof self !== 'undefined' ? self : this, () => (function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        const o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        });
    }, e.n = function(t) {
        const n = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(n, 'a', n), n;
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = '', e(e.s = 152);
}([function(t, e, n) {
    let r = n(28),
        o = typeof self === 'object' && self && self.Object === Object && self,
        i = r || o || Function('return this')();
    t.exports = i;
}, function(t, e) {
    const n = Array.isArray;
    t.exports = n;
}, function(t, e) {
    function n(t) {
        return t != null && typeof t === 'object';
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        return t == null ? void 0 === t ? c : a : s && s in Object(t) ? i(t) : u(t);
    }
    var o = n(7),
        i = n(53),
        u = n(54),
        a = '[object Null]',
        c = '[object Undefined]',
        s = o ? o.toStringTag : void 0;
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        const n = i(t, e);
        return o(n) ? n : void 0;
    }
    var o = n(70),
        i = n(73);
    t.exports = r;
}, function(t, e) {
    function n(t) {
        const e = typeof t;
        return t != null && (e == 'object' || e == 'function');
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t, e, n, r) {
        const u = !n;
        n || (n = {});
        for (let a = -1, c = e.length; ++a < c;) {
            let s = e[a],
                f = r ? r(n[s], t[s], s, n, t) : void 0;
            void 0 === f && (f = t[s]), u ? i(n, s, f) : o(n, s, f);
        }
        return n;
    }
    var o = n(17),
        i = n(34);
    t.exports = r;
}, function(t, e, n) {
    let r = n(0),
        o = r.Symbol;
    t.exports = o;
}, function(t, e, n) {
    function r(t) {
        let e = -1,
            n = t == null ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            const r = t[e];
            this.set(r[0], r[1]);
        }
    }
    let o = n(60),
        i = n(61),
        u = n(62),
        a = n(63),
        c = n(64);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = u, r.prototype.has = a, r.prototype.set = c, t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        for (let n = t.length; n--;)
            if (o(t[n][0], e)) return n;
        return -1;
    }
    var o = n(15);
    t.exports = r;
}, function(t, e, n) {
    let r = n(4),
        o = r(Object, 'create');
    t.exports = o;
}, function(t, e, n) {
    function r(t, e) {
        const n = t.__data__;
        return o(e) ? n[typeof e === 'string' ? 'string' : 'hash'] : n.map;
    }
    var o = n(82);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return u(t) ? o(t) : i(t);
    }
    var o = n(36),
        i = n(93),
        u = n(14);
    t.exports = r;
}, function(t, e) {
    function n(t) {
        const e = t && t.constructor;
        return t === (typeof e === 'function' && e.prototype || r);
    }
    var r = Object.prototype;
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        return t != null && i(t.length) && !o(t);
    }
    var o = n(31),
        i = n(40);
    t.exports = r;
}, function(t, e) {
    function n(t, e) {
        return t === e || t !== t && e !== e;
    }
    t.exports = n;
}, function(t, e, n) {
    let r = n(4),
        o = n(0),
        i = r(o, 'Map');
    t.exports = i;
}, function(t, e, n) {
    function r(t, e, n) {
        const r = t[e];
        a.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n);
    }
    var o = n(34),
        i = n(15),
        u = Object.prototype,
        a = u.hasOwnProperty;
    t.exports = r;
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get() {
                return t.l;
            }
        }), Object.defineProperty(t, 'id', {
            enumerable: !0,
            get() {
                return t.i;
            }
        }), t.webpackPolyfill = 1), t;
    };
}, function(t, e) {
    function n(t) {
        return function(e) {
            return t(e);
        };
    }
    t.exports = n;
}, function(t, e, n) {
    (function(t) {
        let r = n(28),
            o = typeof e === 'object' && e && !e.nodeType && e,
            i = o && typeof t === 'object' && t && !t.nodeType && t,
            u = i && i.exports === o,
            a = u && r.process,
            c = (function() {
                try {
                    const t = i && i.require && i.require('util').types;
                    return t || a && a.binding && a.binding('util');
                } catch (t) {}
            }());
        t.exports = c;
    }).call(e, n(18)(t));
}, function(t, e, n) {
    let r = n(101),
        o = n(43),
        i = Object.prototype,
        u = i.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        c = a ? function(t) {
            return t == null ? [] : (t = Object(t), r(a(t), (e) => u.call(t, e)));
        } : o;
    t.exports = c;
}, function(t, e) {
    function n(t, e) {
        for (let n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
        return t;
    }
    t.exports = n;
}, function(t, e, n) {
    let r = n(41),
        o = r(Object.getPrototypeOf, Object);
    t.exports = o;
}, function(t, e, n) {
    let r = n(104),
        o = n(16),
        i = n(105),
        u = n(106),
        a = n(107),
        c = n(3),
        s = n(32),
        f = s(r),
        l = s(o),
        p = s(i),
        h = s(u),
        d = s(a),
        v = c;
    (r && v(new r(new ArrayBuffer(1))) != '[object DataView]' || o && v(new o()) != '[object Map]' || i && v(i.resolve()) != '[object Promise]' || u && v(new u()) != '[object Set]' || a && v(new a()) != '[object WeakMap]') && (v = function(t) {
        let e = c(t),
            n = e == '[object Object]' ? t.constructor : void 0,
            r = n ? s(n) : '';
        if (r) switch (r) {
            case f:
                return '[object DataView]';
            case l:
                return '[object Map]';
            case p:
                return '[object Promise]';
            case h:
                return '[object Set]';
            case d:
                return '[object WeakMap]';
        }
        return e;
    }), t.exports = v;
}, function(t, e, n) {
    function r(t) {
        const e = new t.constructor(t.byteLength);
        return new o(e).set(new o(t)), e;
    }
    var o = n(110);
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        return o(t) ? t : i(t, e) ? [t] : u(a(t));
    }
    var o = n(1),
        i = n(122),
        u = n(123),
        a = n(126);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return typeof t === 'symbol' || i(t) && o(t) == u;
    }
    var o = n(3),
        i = n(2),
        u = '[object Symbol]';
    t.exports = r;
}, function(t, e, n) {
    (function(e) {
        const n = typeof e === 'object' && e && e.Object === Object && e;
        t.exports = n;
    }).call(e, n(29));
}, function(t, e) {
    let n;
    n = (function() {
        return this;
    }());
    try {
        n = n || Function('return this')() || (0, eval)('this');
    } catch (t) {
        typeof window === 'object' && (n = window);
    }
    t.exports = n;
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
        return o;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        if (!i(t)) return !1;
        const e = o(t);
        return e == a || e == c || e == u || e == s;
    }
    var o = n(3),
        i = n(5),
        u = '[object AsyncFunction]',
        a = '[object Function]',
        c = '[object GeneratorFunction]',
        s = '[object Proxy]';
    t.exports = r;
}, function(t, e) {
    function n(t) {
        if (t != null) {
            try {
                return o.call(t);
            } catch (t) {}
            try {
                return `${t}`;
            } catch (t) {}
        }
        return '';
    }
    var r = Function.prototype,
        o = r.toString;
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        let e = -1,
            n = t == null ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            const r = t[e];
            this.set(r[0], r[1]);
        }
    }
    let o = n(74),
        i = n(81),
        u = n(83),
        a = n(84),
        c = n(85);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = u, r.prototype.has = a, r.prototype.set = c, t.exports = r;
}, function(t, e, n) {
    function r(t, e, n) {
        e == '__proto__' && o ? o(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n;
    }
    var o = n(35);
    t.exports = r;
}, function(t, e, n) {
    let r = n(4),
        o = (function() {
            try {
                const t = r(Object, 'defineProperty');
                return t({}, '', {}), t;
            } catch (t) {}
        }());
    t.exports = o;
}, function(t, e, n) {
    function r(t, e) {
        let n = u(t),
            r = !n && i(t),
            f = !n && !r && a(t),
            p = !n && !r && !f && s(t),
            h = n || r || f || p,
            d = h ? o(t.length, String) : [],
            v = d.length;
        for (const y in t) !e && !l.call(t, y) || h && (y == 'length' || f && (y == 'offset' || y == 'parent') || p && (y == 'buffer' || y == 'byteLength' || y == 'byteOffset') || c(y, v)) || d.push(y);
        return d;
    }
    var o = n(88),
        i = n(37),
        u = n(1),
        a = n(38),
        c = n(39),
        s = n(91),
        f = Object.prototype,
        l = f.hasOwnProperty;
    t.exports = r;
}, function(t, e, n) {
    let r = n(89),
        o = n(2),
        i = Object.prototype,
        u = i.hasOwnProperty,
        a = i.propertyIsEnumerable,
        c = r(function() {
            return arguments;
        }()) ? r : function(t) {
            return o(t) && u.call(t, 'callee') && !a.call(t, 'callee');
        };
    t.exports = c;
}, function(t, e, n) {
    (function(t) {
        let r = n(0),
            o = n(90),
            i = typeof e === 'object' && e && !e.nodeType && e,
            u = i && typeof t === 'object' && t && !t.nodeType && t,
            a = u && u.exports === i,
            c = a ? r.Buffer : void 0,
            s = c ? c.isBuffer : void 0,
            f = s || o;
        t.exports = f;
    }).call(e, n(18)(t));
}, function(t, e) {
    function n(t, e) {
        const n = typeof t;
        return !!(e = e == null ? r : e) && (n == 'number' || n != 'symbol' && o.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }
    var r = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
    t.exports = n;
}, function(t, e) {
    function n(t) {
        return typeof t === 'number' && t > -1 && t % 1 == 0 && t <= r;
    }
    var r = 9007199254740991;
    t.exports = n;
}, function(t, e) {
    function n(t, e) {
        return function(n) {
            return t(e(n));
        };
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        return u(t) ? o(t, !0) : i(t);
    }
    var o = n(36),
        i = n(96),
        u = n(14);
    t.exports = r;
}, function(t, e) {
    function n() {
        return [];
    }
    t.exports = n;
}, function(t, e, n) {
    let r = n(22),
        o = n(23),
        i = n(21),
        u = n(43),
        a = Object.getOwnPropertySymbols,
        c = a ? function(t) {
            for (var e = []; t;) r(e, i(t)), t = o(t);
            return e;
        } : u;
    t.exports = c;
}, function(t, e, n) {
    function r(t, e, n) {
        const r = e(t);
        return i(t) ? r : o(r, n(t));
    }
    var o = n(22),
        i = n(1);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return o(t, u, i);
    }
    var o = n(45),
        i = n(44),
        u = n(42);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        if (typeof t === 'string' || o(t)) return t;
        const e = `${t}`;
        return e == '0' && 1 / t == -i ? '-0' : e;
    }
    var o = n(27),
        i = 1 / 0;
    t.exports = r;
}, function(t, e, n) {
    function r(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var r = arguments, u = -1, a = i(r.length - e, 0), c = Array(a); ++u < a;) c[u] = r[e + u];
                u = -1;
                for (var s = Array(e + 1); ++u < e;) s[u] = r[u];
                return s[e] = n(c), o(t, this, s);
            };
    }
    var o = n(138),
        i = Math.max;
    t.exports = r;
}, function(t, e, n) {
    let r = n(139),
        o = n(141),
        i = o(r);
    t.exports = i;
}, function(t, e) {
    function n(t) {
        return t;
    }
    t.exports = n;
}, function(t, e, n) {
    'use strict';

    function r(t) {
        for (var e = {
                strictMode: !1,
                key: ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'],
                q: {
                    name: 'queryKey',
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            }, n = e.parser[e.strictMode ? 'strict' : 'loose'].exec(t), r = {}, o = 14; o--;) r[e.key[o]] = n[o] || '';
        return r[e.q.name] = {}, r[e.key[12]].replace(e.q.parser, (t, n, o) => {
            n && (r[e.q.name][n] = o);
        }), r;
    }
    e.a = r;
}, function(t, e, n) {
    function r(t) {
        return typeof t === 'string' || !i(t) && u(t) && o(t) == a;
    }
    var o = n(3),
        i = n(1),
        u = n(2),
        a = '[object String]';
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        let e = u.call(t, c),
            n = t[c];
        try {
            t[c] = void 0;
            var r = !0;
        } catch (t) {}
        const o = a.call(t);
        return r && (e ? t[c] = n : delete t[c]), o;
    }
    var o = n(7),
        i = Object.prototype,
        u = i.hasOwnProperty,
        a = i.toString,
        c = o ? o.toStringTag : void 0;
    t.exports = r;
}, function(t, e) {
    function n(t) {
        return o.call(t);
    }
    var r = Object.prototype,
        o = r.toString;
    t.exports = n;
}, function(t, e, n) {
    'use strict';

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    n.d(e, 'b', () => _), n.d(e, 'c', () => m), n.d(e, 'g', () => w), n.d(e, 'h', () => x), n.d(e, 'i', () => j), n.d(e, 'j', () => O), n.d(e, 'k', () => E), n.d(e, 'l', () => A), n.d(e, 'm', () => S), n.d(e, 'n', () => P), n.d(e, 'a', () => k), n.d(e, 'e', () => T), n.d(e, 'f', () => L), n.d(e, 'o', () => M), n.d(e, 'p', () => C), n.d(e, 'd', () => R), n.d(e, 'r', () => I), n.d(e, 's', () => D), n.d(e, 't', () => N), n.d(e, 'u', () => F), n.d(e, 'v', () => z), n.d(e, 'w', () => U), n.d(e, 'x', () => V), n.d(e, 'y', () => B), n.d(e, 'z', () => W), n.d(e, 'A', () => q), n.d(e, 'B', () => $), n.d(e, 'C', () => H), n.d(e, 'D', () => K), n.d(e, 'E', () => Y), n.d(e, 'F', () => G), n.d(e, 'G', () => Q), n.d(e, 'H', () => J), n.d(e, 'I', () => Z), n.d(e, 'J', () => X), n.d(e, 'K', () => tt), n.d(e, 'L', () => et), n.d(e, 'M', () => nt), n.d(e, 'N', () => rt), n.d(e, 'O', () => ot), n.d(e, 'P', () => it), n.d(e, 'Q', () => ut), n.d(e, 'R', () => at), n.d(e, 'S', () => ft), n.d(e, 'T', () => lt), n.d(e, 'q', () => pt);
    var o = n(56),
        i = n.n(o),
        u = n(57),
        a = n.n(u),
        c = n(142),
        s = n.n(c),
        f = n(146),
        l = n.n(f),
        p = n(51),
        h = n(147),
        d = n(149),
        v = (n.n(d), (function() {
            function t(t, e) {
                for (let n = 0; n < e.length; n++) {
                    const r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }())),
        y = (function() {
            let t = 'https://player.twitch.tv';
            if (document.currentScript) t = document.currentScript.src;
            else {
                const e = Array.prototype.filter.call(document.scripts, (t) => /twitch\.tv.*embed/.test(t.src));
                t = e.length > 0 ? e[0].src : document.scripts[document.scripts.length - 1].src;
            }
            let n = Object(p.a)(t),
                r = n.path.split('/');
            if (n.host.toLowerCase() === 'testplayer.twitch.tv') {
                const o = r[1].replace(/[^a-zA-Z0-9_-]+/g, '');
                return `${n.protocol}://${n.authority}/${o}`;
            }
            return /^(\d+\.)(\d+\.)(\d+)$/.test(r[1]) ? `${n.protocol}://${n.authority}/${r[1]}` : `${n.protocol}://${n.authority}`;
        }()),
        b = Object.freeze({
            channelName: '',
            currentTime: 0,
            duration: 0,
            mature: !1,
            muted: !1,
            playback: '',
            quality: '',
            qualitiesAvailable: [],
            stats: {},
            videoID: '',
            viewers: 0,
            volume: 0
        }),
        g = Object.freeze({
            height: 390,
            width: 640,
            allowfullscreen: !1
        }),
        _ = 'captions',
        m = 'ended',
        w = 'offline',
        x = 'online',
        j = 'pause',
        O = 'play',
        E = 'playbackBlocked',
        A = 'playing',
        S = 'ready',
        P = 'transitionToRecommendedVod',
        k = 'bufferEmpty',
        T = 'minuteWatched',
        L = 'nSecondPlay',
        M = 'videoPlay',
        C = 'videoError',
        R = 'error',
        I = 'disableCaptions',
        D = 'enableCaptions',
        N = 'pause',
        F = 'play',
        z = 'seek',
        U = 'setAutoplay',
        V = 'setAutoMaxVideoSize',
        B = 'setCaptionSize',
        W = 'channel',
        q = 'channelId',
        $ = 'setclip',
        H = 'collection',
        K = 'setcontent',
        Y = 'setEditClip',
        G = 'fullscreen',
        Q = 'setLiveLowLatencyEnabled',
        J = 'setLiveMaxLatency',
        Z = 'setminiplayermode',
        X = 'mute',
        tt = 'setPlayerType',
        et = 'quality',
        nt = 'theatre',
        rt = 'setTrackingProperties',
        ot = 'video',
        it = 'setvideosource',
        ut = 'volume',
        at = 'showplayercontrols',
        ct = 'ready',
        st = 'subscribe',
        ft = 'ended',
        lt = 'paused',
        pt = (function() {
            function t(e) {
                const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
                r(this, t), this._eventEmitter = new l.a(), this._playerStateEmitter = new l.a(), this._playerState = b, this._storeState = {}, this._onHostReady = this._getHostReady(), this._iframe = this._createPlayerIframe(n), e.appendChild(this._iframe), this._host = this._iframe.contentWindow, this._send(st);
            }
            return v(t, [{
                key: 'destroy',
                value() {
                    this.callPlayerMethod('destroy');
                }
            }, {
                key: '_createPlayerIframe',
                value(t) {
                    const e = this._normalizeOptions(t);
                    e.origin = document.location.origin;
                    let n = document.createElement('iframe'),
                        r = Object(h.a)(a()(e, 'width', 'height')),
                        o = `${y}/?${r}`;
                    return n.setAttribute('src', o), n.setAttribute('width', e.width), n.setAttribute('height', e.height), n.setAttribute('frameBorder', '0'), n.setAttribute('scrolling', 'no'), n.setAttribute('allow', 'autoplay; fullscreen'), e.allowfullscreen && n.setAttribute('allowfullscreen', ''), n;
                }
            }, {
                key: '_normalizeOptions',
                value(t) {
                    const e = s()({}, g, t);
                    return !1 !== t.allowfullscreen && (e.allowfullscreen = !0), e;
                }
            }, {
                key: '_getHostReady',
                value() {
                    const t = this;
                    return new d.Promise((e, n) => {
                        function r(t) {
                            this._isClientMessage(t) && t.data.method === ct && (this._storeState = t.data.args[0], window.removeEventListener('message', o), window.addEventListener('message', this), this._eventEmitter.emit(S), e());
                        }
                        var o = r.bind(t);
                        window.addEventListener('message', o), setTimeout(n, 15e3);
                    });
                }
            }, {
                key: '_send',
                value(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    const o = {
                        namespace: 'player.embed.host',
                        method: t,
                        args: n
                    };
                    this._host.postMessage(o, '*');
                }
            }, {
                key: '_deferSend',
                value() {
                    for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return this._onHostReady.then(() => t._send(...n));
                }
            }, {
                key: '_isClientMessage',
                value(t) {
                    return !!this._iframe && (Boolean(t.data) && t.data.namespace === 'player.embed.client' && t.source === this._iframe.contentWindow);
                }
            }, {
                key: 'handleEvent',
                value(t) {
                    if (this._isClientMessage(t)) switch (t.data.method) {
                        case 'bridgestateupdate':
                            this._playerState = t.data.args[0], this._playerStateEmitter.emit('playerstateupdate', this._playerState);
                            break;
                        case 'bridgeplayerevent':
                            this._eventEmitter.emit(t.data.args[0].event);
                            break;
                        case 'bridgeplayereventwithpayload':
                            this._eventEmitter.emit(t.data.args[0].event, t.data.args[0].data);
                            break;
                        case 'bridgestorestateupdate':
                            this._storeState = t.data.args[0];
                            break;
                        case 'bridgedestroy':
                            this._iframe.parentNode.removeChild(this._iframe), window.removeEventListener('message', this), delete this._iframe, delete this._host;
                    }
                }
            }, {
                key: 'getPlayerState',
                value() {
                    return this._playerState;
                }
            }, {
                key: 'getStoreState',
                value() {
                    return this._storeState;
                }
            }, {
                key: 'addEventListener',
                value(t, e) {
                    this._eventEmitter.on(t, e);
                }
            }, {
                key: 'addPlayerStateListener',
                value(t) {
                    this._playerStateEmitter.on('playerstateupdate', t), t(this._playerState);
                }
            }, {
                key: 'removePlayerStateListener',
                value(t) {
                    this._playerStateEmitter.off('playerstateupdate', t);
                }
            }, {
                key: 'removeEventListener',
                value(t, e) {
                    this._eventEmitter.off(t, e);
                }
            }, {
                key: 'callPlayerMethod',
                value(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return this._deferSend.apply(this, [t].concat(n));
                }
            }, {
                key: 'setWidth',
                value(t) {
                    i()(t) && t >= 0 && this._iframe.setAttribute('width', t);
                }
            }, {
                key: 'setHeight',
                value(t) {
                    i()(t) && t >= 0 && this._iframe.setAttribute('height', t);
                }
            }]), t;
        }());
}, function(t, e, n) {
    function r(t) {
        return typeof t === 'number' && i(t);
    }
    var o = n(0),
        i = o.isFinite;
    t.exports = r;
}, function(t, e, n) {
    let r = n(30),
        o = n(58),
        i = n(121),
        u = n(26),
        a = n(6),
        c = n(132),
        s = n(134),
        f = n(46),
        l = s((t, e) => {
            let n = {};
            if (t == null) return n;
            let s = !1;
            e = r(e, (e) => e = u(e, t), s || (s = e.length > 1), e), a(t, f(t), n), s && (n = o(n, 7, c));
            for (let l = e.length; l--;) i(n, e[l]);
            return n;
        });
    t.exports = l;
}, function(t, e, n) {
    function r(t, e, n, C, R, I) {
        let D,
            N = e & E,
            F = e & A,
            z = e & S;
        if (n && (D = R ? n(t, C, R, I) : n(t)), void 0 !== D) return D;
        if (!x(t)) return t;
        const U = _(t);
        if (U) {
            if (D = y(t), !N) return f(t, D);
        } else {
            let V = v(t),
                B = V == k || V == T;
            if (m(t)) return s(t, N);
            if (V == L || V == P || B && !R) {
                if (D = F || B ? {} : g(t), !N) return F ? p(t, c(D, t)) : l(t, a(D, t));
            } else {
                if (!M[V]) return R ? t : {};
                D = b(t, V, N);
            }
        }
        I || (I = new o());
        const W = I.get(t);
        if (W) return W;
        if (I.set(t, D), j(t)) return t.forEach((o) => {
            D.add(r(o, e, n, o, t, I));
        }), D;
        if (w(t)) return t.forEach((o, i) => {
            D.set(i, r(o, e, n, i, t, I));
        }), D;
        let q = z ? F ? d : h : F ? keysIn : O,
            $ = U ? void 0 : q(t);
        return i($ || t, (o, i) => {
            $ && (i = o, o = t[i]), u(D, i, r(o, e, n, i, t, I));
        }), D;
    }
    var o = n(59),
        i = n(86),
        u = n(17),
        a = n(87),
        c = n(95),
        s = n(98),
        f = n(99),
        l = n(100),
        p = n(102),
        h = n(103),
        d = n(46),
        v = n(24),
        y = n(108),
        b = n(109),
        g = n(115),
        _ = n(1),
        m = n(38),
        w = n(117),
        x = n(5),
        j = n(119),
        O = n(12),
        E = 1,
        A = 2,
        S = 4,
        P = '[object Arguments]',
        k = '[object Function]',
        T = '[object GeneratorFunction]',
        L = '[object Object]',
        M = {};
    M[P] = M['[object Array]'] = M['[object ArrayBuffer]'] = M['[object DataView]'] = M['[object Boolean]'] = M['[object Date]'] = M['[object Float32Array]'] = M['[object Float64Array]'] = M['[object Int8Array]'] = M['[object Int16Array]'] = M['[object Int32Array]'] = M['[object Map]'] = M['[object Number]'] = M[L] = M['[object RegExp]'] = M['[object Set]'] = M['[object String]'] = M['[object Symbol]'] = M['[object Uint8Array]'] = M['[object Uint8ClampedArray]'] = M['[object Uint16Array]'] = M['[object Uint32Array]'] = !0, M['[object Error]'] = M[k] = M['[object WeakMap]'] = !1, t.exports = r;
}, function(t, e, n) {
    function r(t) {
        const e = this.__data__ = new o(t);
        this.size = e.size;
    }
    var o = n(8),
        i = n(65),
        u = n(66),
        a = n(67),
        c = n(68),
        s = n(69);
    r.prototype.clear = i, r.prototype.delete = u, r.prototype.get = a, r.prototype.has = c, r.prototype.set = s, t.exports = r;
}, function(t, e) {
    function n() {
        this.__data__ = [], this.size = 0;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        let e = this.__data__,
            n = o(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : u.call(e, n, 1), --this.size, !0);
    }
    var o = n(9),
        i = Array.prototype,
        u = i.splice;
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        let e = this.__data__,
            n = o(e, t);
        return n < 0 ? void 0 : e[n][1];
    }
    var o = n(9);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return o(this.__data__, t) > -1;
    }
    var o = n(9);
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        let n = this.__data__,
            r = o(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
    }
    var o = n(9);
    t.exports = r;
}, function(t, e, n) {
    function r() {
        this.__data__ = new o(), this.size = 0;
    }
    var o = n(8);
    t.exports = r;
}, function(t, e) {
    function n(t) {
        let e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n;
    }
    t.exports = n;
}, function(t, e) {
    function n(t) {
        return this.__data__.get(t);
    }
    t.exports = n;
}, function(t, e) {
    function n(t) {
        return this.__data__.has(t);
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t, e) {
        let n = this.__data__;
        if (n instanceof o) {
            const r = n.__data__;
            if (!i || r.length < a - 1) return r.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new u(r);
        }
        return n.set(t, e), this.size = n.size, this;
    }
    var o = n(8),
        i = n(16),
        u = n(33),
        a = 200;
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return !(!u(t) || i(t)) && (o(t) ? d : s).test(a(t));
    }
    var o = n(31),
        i = n(71),
        u = n(5),
        a = n(32),
        c = /[\\^$.*+?()[\]{}|]/g,
        s = /^\[object .+?Constructor\]$/,
        f = Function.prototype,
        l = Object.prototype,
        p = f.toString,
        h = l.hasOwnProperty,
        d = RegExp(`^${p.call(h).replace(c, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')}$`);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return !!i && i in t;
    }
    var o = n(72),
        i = (function() {
            const t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || '');
            return t ? `Symbol(src)_1.${t}` : '';
        }());
    t.exports = r;
}, function(t, e, n) {
    let r = n(0),
        o = r['__core-js_shared__'];
    t.exports = o;
}, function(t, e) {
    function n(t, e) {
        return t == null ? void 0 : t[e];
    }
    t.exports = n;
}, function(t, e, n) {
    function r() {
        this.size = 0, this.__data__ = {
            hash: new o(),
            map: new(u || i)(),
            string: new o()
        };
    }
    var o = n(75),
        i = n(8),
        u = n(16);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        let e = -1,
            n = t == null ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            const r = t[e];
            this.set(r[0], r[1]);
        }
    }
    let o = n(76),
        i = n(77),
        u = n(78),
        a = n(79),
        c = n(80);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = u, r.prototype.has = a, r.prototype.set = c, t.exports = r;
}, function(t, e, n) {
    function r() {
        this.__data__ = o ? o(null) : {}, this.size = 0;
    }
    var o = n(10);
    t.exports = r;
}, function(t, e) {
    function n(t) {
        const e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        const e = this.__data__;
        if (o) {
            const n = e[t];
            return n === i ? void 0 : n;
        }
        return a.call(e, t) ? e[t] : void 0;
    }
    var o = n(10),
        i = '__lodash_hash_undefined__',
        u = Object.prototype,
        a = u.hasOwnProperty;
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        const e = this.__data__;
        return o ? void 0 !== e[t] : u.call(e, t);
    }
    var o = n(10),
        i = Object.prototype,
        u = i.hasOwnProperty;
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        const n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this;
    }
    var o = n(10),
        i = '__lodash_hash_undefined__';
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        const e = o(this, t).delete(t);
        return this.size -= e ? 1 : 0, e;
    }
    var o = n(11);
    t.exports = r;
}, function(t, e) {
    function n(t) {
        const e = typeof t;
        return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean' ? t !== '__proto__' : t === null;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        return o(this, t).get(t);
    }
    var o = n(11);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return o(this, t).has(t);
    }
    var o = n(11);
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        let n = o(this, t),
            r = n.size;
        return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
    }
    var o = n(11);
    t.exports = r;
}, function(t, e) {
    function n(t, e) {
        for (let n = -1, r = t == null ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t, e) {
        return t && o(e, i(e), t);
    }
    var o = n(6),
        i = n(12);
    t.exports = r;
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        return i(t) && o(t) == u;
    }
    var o = n(3),
        i = n(2),
        u = '[object Arguments]';
    t.exports = r;
}, function(t, e) {
    function n() {
        return !1;
    }
    t.exports = n;
}, function(t, e, n) {
    let r = n(92),
        o = n(19),
        i = n(20),
        u = i && i.isTypedArray,
        a = u ? o(u) : r;
    t.exports = a;
}, function(t, e, n) {
    function r(t) {
        return u(t) && i(t.length) && !!a[o(t)];
    }
    var o = n(3),
        i = n(40),
        u = n(2),
        a = {};
    a['[object Float32Array]'] = a['[object Float64Array]'] = a['[object Int8Array]'] = a['[object Int16Array]'] = a['[object Int32Array]'] = a['[object Uint8Array]'] = a['[object Uint8ClampedArray]'] = a['[object Uint16Array]'] = a['[object Uint32Array]'] = !0, a['[object Arguments]'] = a['[object Array]'] = a['[object ArrayBuffer]'] = a['[object Boolean]'] = a['[object DataView]'] = a['[object Date]'] = a['[object Error]'] = a['[object Function]'] = a['[object Map]'] = a['[object Number]'] = a['[object Object]'] = a['[object RegExp]'] = a['[object Set]'] = a['[object String]'] = a['[object WeakMap]'] = !1, t.exports = r;
}, function(t, e, n) {
    function r(t) {
        if (!o(t)) return i(t);
        const e = [];
        for (const n in Object(t)) a.call(t, n) && n != 'constructor' && e.push(n);
        return e;
    }
    var o = n(13),
        i = n(94),
        u = Object.prototype,
        a = u.hasOwnProperty;
    t.exports = r;
}, function(t, e, n) {
    let r = n(41),
        o = r(Object.keys, Object);
    t.exports = o;
}, function(t, e, n) {
    function r(t, e) {
        return t && o(e, i(e), t);
    }
    var o = n(6),
        i = n(42);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        if (!o(t)) return u(t);
        let e = i(t),
            n = [];
        for (const r in t)(r != 'constructor' || !e && c.call(t, r)) && n.push(r);
        return n;
    }
    var o = n(5),
        i = n(13),
        u = n(97),
        a = Object.prototype,
        c = a.hasOwnProperty;
    t.exports = r;
}, function(t, e) {
    function n(t) {
        const e = [];
        if (t != null)
            for (const n in Object(t)) e.push(n);
        return e;
    }
    t.exports = n;
}, function(t, e, n) {
    (function(t) {
        function r(t, e) {
            if (e) return t.slice();
            let n = t.length,
                r = s ? s(n) : new t.constructor(n);
            return t.copy(r), r;
        }
        var o = n(0),
            i = typeof e === 'object' && e && !e.nodeType && e,
            u = i && typeof t === 'object' && t && !t.nodeType && t,
            a = u && u.exports === i,
            c = a ? o.Buffer : void 0,
            s = c ? c.allocUnsafe : void 0;
        t.exports = r;
    }).call(e, n(18)(t));
}, function(t, e) {
    function n(t, e) {
        let n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t, e) {
        return o(t, i(t), e);
    }
    var o = n(6),
        i = n(21);
    t.exports = r;
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = t == null ? 0 : t.length, o = 0, i = []; ++n < r;) {
            const u = t[n];
            e(u, n, t) && (i[o++] = u);
        }
        return i;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t, e) {
        return o(t, i(t), e);
    }
    var o = n(6),
        i = n(44);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return o(t, u, i);
    }
    var o = n(45),
        i = n(21),
        u = n(12);
    t.exports = r;
}, function(t, e, n) {
    let r = n(4),
        o = n(0),
        i = r(o, 'DataView');
    t.exports = i;
}, function(t, e, n) {
    let r = n(4),
        o = n(0),
        i = r(o, 'Promise');
    t.exports = i;
}, function(t, e, n) {
    let r = n(4),
        o = n(0),
        i = r(o, 'Set');
    t.exports = i;
}, function(t, e, n) {
    let r = n(4),
        o = n(0),
        i = r(o, 'WeakMap');
    t.exports = i;
}, function(t, e) {
    function n(t) {
        let e = t.length,
            n = new t.constructor(e);
        return e && typeof t[0] === 'string' && o.call(t, 'index') && (n.index = t.index, n.input = t.input), n;
    }
    var r = Object.prototype,
        o = r.hasOwnProperty;
    t.exports = n;
}, function(t, e, n) {
    function r(t, e, n) {
        const r = t.constructor;
        switch (e) {
            case b:
                return o(t);
            case s:
            case f:
                return new r(+t);
            case g:
                return i(t, n);
            case _:
            case m:
            case w:
            case x:
            case j:
            case O:
            case E:
            case A:
            case S:
                return c(t, n);
            case l:
                return new r();
            case p:
            case v:
                return new r(t);
            case h:
                return u(t);
            case d:
                return new r();
            case y:
                return a(t);
        }
    }
    var o = n(25),
        i = n(111),
        u = n(112),
        a = n(113),
        c = n(114),
        s = '[object Boolean]',
        f = '[object Date]',
        l = '[object Map]',
        p = '[object Number]',
        h = '[object RegExp]',
        d = '[object Set]',
        v = '[object String]',
        y = '[object Symbol]',
        b = '[object ArrayBuffer]',
        g = '[object DataView]',
        _ = '[object Float32Array]',
        m = '[object Float64Array]',
        w = '[object Int8Array]',
        x = '[object Int16Array]',
        j = '[object Int32Array]',
        O = '[object Uint8Array]',
        E = '[object Uint8ClampedArray]',
        A = '[object Uint16Array]',
        S = '[object Uint32Array]';
    t.exports = r;
}, function(t, e, n) {
    let r = n(0),
        o = r.Uint8Array;
    t.exports = o;
}, function(t, e, n) {
    function r(t, e) {
        const n = e ? o(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.byteLength);
    }
    var o = n(25);
    t.exports = r;
}, function(t, e) {
    function n(t) {
        const e = new t.constructor(t.source, r.exec(t));
        return e.lastIndex = t.lastIndex, e;
    }
    var r = /\w*$/;
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        return u ? Object(u.call(t)) : {};
    }
    var o = n(7),
        i = o ? o.prototype : void 0,
        u = i ? i.valueOf : void 0;
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        const n = e ? o(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length);
    }
    var o = n(25);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return typeof t.constructor !== 'function' || u(t) ? {} : o(i(t));
    }
    var o = n(116),
        i = n(23),
        u = n(13);
    t.exports = r;
}, function(t, e, n) {
    let r = n(5),
        o = Object.create,
        i = (function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (o) return o(e);
                t.prototype = e;
                const n = new t();
                return t.prototype = void 0, n;
            };
        }());
    t.exports = i;
}, function(t, e, n) {
    let r = n(118),
        o = n(19),
        i = n(20),
        u = i && i.isMap,
        a = u ? o(u) : r;
    t.exports = a;
}, function(t, e, n) {
    function r(t) {
        return i(t) && o(t) == u;
    }
    var o = n(24),
        i = n(2),
        u = '[object Map]';
    t.exports = r;
}, function(t, e, n) {
    let r = n(120),
        o = n(19),
        i = n(20),
        u = i && i.isSet,
        a = u ? o(u) : r;
    t.exports = a;
}, function(t, e, n) {
    function r(t) {
        return i(t) && o(t) == u;
    }
    var o = n(24),
        i = n(2),
        u = '[object Set]';
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        return e = o(e, t), (t = u(t, e)) == null || delete t[a(i(e))];
    }
    var o = n(26),
        i = n(128),
        u = n(129),
        a = n(47);
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        if (o(t)) return !1;
        const n = typeof t;
        return !(n != 'number' && n != 'symbol' && n != 'boolean' && t != null && !i(t)) || (a.test(t) || !u.test(t) || e != null && t in Object(e));
    }
    var o = n(1),
        i = n(27),
        u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = r;
}, function(t, e, n) {
    let r = n(124),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        u = r((t) => {
            const e = [];
            return t.charCodeAt(0) === 46 && e.push(''), t.replace(o, (t, n, r, o) => {
                e.push(r ? o.replace(i, '$1') : n || t);
            }), e;
        });
    t.exports = u;
}, function(t, e, n) {
    function r(t) {
        var e = o(t, (t) => n.size === i && n.clear(), t),
            n = e.cache;
        return e;
    }
    var o = n(125),
        i = 500;
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        if (typeof t !== 'function' || e != null && typeof e !== 'function') throw new TypeError(i);
        var n = function() {
            let r = arguments,
                o = e ? e.apply(this, r) : r[0],
                i = n.cache;
            if (i.has(o)) return i.get(o);
            const u = t.apply(this, r);
            return n.cache = i.set(o, u) || i, u;
        };
        return n.cache = new(r.Cache || o)(), n;
    }
    var o = n(33),
        i = 'Expected a function';
    r.Cache = o, t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return t == null ? '' : o(t);
    }
    var o = n(127);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        if (typeof t === 'string') return t;
        if (u(t)) return `${i(t, r)}`;
        if (a(t)) return f ? f.call(t) : '';
        const e = `${t}`;
        return e == '0' && 1 / t == -c ? '-0' : e;
    }
    var o = n(7),
        i = n(30),
        u = n(1),
        a = n(27),
        c = 1 / 0,
        s = o ? o.prototype : void 0,
        f = s ? s.toString : void 0;
    t.exports = r;
}, function(t, e) {
    function n(t) {
        const e = t == null ? 0 : t.length;
        return e ? t[e - 1] : void 0;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t, e) {
        return e.length < 2 ? t : o(t, i(e, 0, -1));
    }
    var o = n(130),
        i = n(131);
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        e = o(e, t);
        for (var n = 0, r = e.length; t != null && n < r;) t = t[i(e[n++])];
        return n && n == r ? t : void 0;
    }
    var o = n(26),
        i = n(47);
    t.exports = r;
}, function(t, e) {
    function n(t, e, n) {
        let r = -1,
            o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e), n = n > o ? o : n, n < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
        for (var i = Array(o); ++r < o;) i[r] = t[r + e];
        return i;
    }
    t.exports = n;
}, function(t, e, n) {
    function r(t) {
        return o(t) ? void 0 : t;
    }
    var o = n(133);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        if (!u(t) || o(t) != a) return !1;
        const e = i(t);
        if (e === null) return !0;
        const n = l.call(e, 'constructor') && e.constructor;
        return typeof n === 'function' && n instanceof n && f.call(n) == p;
    }
    var o = n(3),
        i = n(23),
        u = n(2),
        a = '[object Object]',
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        p = f.call(Object);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return u(i(t, void 0, o), `${t}`);
    }
    var o = n(135),
        i = n(48),
        u = n(49);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return (t == null ? 0 : t.length) ? o(t, 1) : [];
    }
    var o = n(136);
    t.exports = r;
}, function(t, e, n) {
    function r(t, e, n, u, a) {
        let c = -1,
            s = t.length;
        for (n || (n = i), a || (a = []); ++c < s;) {
            const f = t[c];
            e > 0 && n(f) ? e > 1 ? r(f, e - 1, n, u, a) : o(a, f) : u || (a[a.length] = f);
        }
        return a;
    }
    var o = n(22),
        i = n(137);
    t.exports = r;
}, function(t, e, n) {
    function r(t) {
        return u(t) || i(t) || !!(a && t && t[a]);
    }
    var o = n(7),
        i = n(37),
        u = n(1),
        a = o ? o.isConcatSpreadable : void 0;
    t.exports = r;
}, function(t, e) {
    function n(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
    }
    t.exports = n;
}, function(t, e, n) {
    let r = n(140),
        o = n(35),
        i = n(50),
        u = o ? function(t, e) {
            return o(t, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            });
        } : i;
    t.exports = u;
}, function(t, e) {
    function n(t) {
        return function() {
            return t;
        };
    }
    t.exports = n;
}, function(t, e) {
    function n(t) {
        let e = 0,
            n = 0;
        return function() {
            let u = i(),
                a = o - (u - n);
            if (n = u, a > 0) {
                if (++e >= r) return arguments[0];
            } else e = 0;
            return t(...arguments);
        };
    }
    var r = 800,
        o = 16,
        i = Date.now;
    t.exports = n;
}, function(t, e, n) {
    let r = n(17),
        o = n(6),
        i = n(143),
        u = n(14),
        a = n(13),
        c = n(12),
        s = Object.prototype,
        f = s.hasOwnProperty,
        l = i((t, e) => {
            if (a(e) || u(e)) return void o(e, c(e), t);
            for (const n in e) f.call(e, n) && r(t, n, e[n]);
        });
    t.exports = l;
}, function(t, e, n) {
    function r(t) {
        return o((e, n) => {
            let r = -1,
                o = n.length,
                u = o > 1 ? n[o - 1] : void 0,
                a = o > 2 ? n[2] : void 0;
            for (u = t.length > 3 && typeof u === 'function' ? (o--, u) : void 0, a && i(n[0], n[1], a) && (u = o < 3 ? void 0 : u, o = 1), e = Object(e); ++r < o;) {
                const c = n[r];
                c && t(e, c, r, u);
            }
            return e;
        });
    }
    var o = n(144),
        i = n(145);
    t.exports = r;
}, function(t, e, n) {
    function r(t, e) {
        return u(i(t, e, o), `${t}`);
    }
    var o = n(50),
        i = n(48),
        u = n(49);
    t.exports = r;
}, function(t, e, n) {
    function r(t, e, n) {
        if (!a(n)) return !1;
        const r = typeof e;
        return !!(r == 'number' ? i(n) && u(e, n.length) : r == 'string' && e in n) && o(n[e], t);
    }
    var o = n(15),
        i = n(14),
        u = n(39),
        a = n(5);
    t.exports = r;
}, function(t, e, n) {
    let r;
    !(function(e) {
        'use strict';

        function o() {}

        function i(t, e) {
            for (let n = t.length; n--;)
                if (t[n].listener === e) return n;
            return -1;
        }

        function u(t) {
            return function() {
                return this[t].apply(this, arguments);
            };
        }

        function a(t) {
            return typeof t === 'function' || t instanceof RegExp || !(!t || typeof t !== 'object') && a(t.listener);
        }
        let c = o.prototype,
            s = e.EventEmitter;
        c.getListeners = function(t) {
            let e,
                n,
                r = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (n in r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
            } else e = r[t] || (r[t] = []);
            return e;
        }, c.flattenListeners = function(t) {
            let e,
                n = [];
            for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
            return n;
        }, c.getListenersAsObject = function(t) {
            let e,
                n = this.getListeners(t);
            return n instanceof Array && (e = {}, e[t] = n), e || n;
        }, c.addListener = function(t, e) {
            if (!a(e)) throw new TypeError('listener must be a function');
            let n,
                r = this.getListenersAsObject(t),
                o = typeof e === 'object';
            for (n in r) r.hasOwnProperty(n) && i(r[n], e) === -1 && r[n].push(o ? e : {
                listener: e,
                once: !1
            });
            return this;
        }, c.on = u('addListener'), c.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            });
        }, c.once = u('addOnceListener'), c.defineEvent = function(t) {
            return this.getListeners(t), this;
        }, c.defineEvents = function(t) {
            for (let e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this;
        }, c.removeListener = function(t, e) {
            let n,
                r,
                o = this.getListenersAsObject(t);
            for (r in o) o.hasOwnProperty(r) && (n = i(o[r], e)) !== -1 && o[r].splice(n, 1);
            return this;
        }, c.off = u('removeListener'), c.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e);
        }, c.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e);
        }, c.manipulateListeners = function(t, e, n) {
            let r,
                o,
                i = t ? this.removeListener : this.addListener,
                u = t ? this.removeListeners : this.addListeners;
            if (typeof e !== 'object' || e instanceof RegExp)
                for (r = n.length; r--;) i.call(this, e, n[r]);
            else
                for (r in e) e.hasOwnProperty(r) && (o = e[r]) && (typeof o === 'function' ? i.call(this, r, o) : u.call(this, r, o));
            return this;
        }, c.removeEvent = function(t) {
            let e,
                n = typeof t,
                r = this._getEvents();
            if (n === 'string') delete r[t];
            else if (t instanceof RegExp)
                for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
            else delete this._events;
            return this;
        }, c.removeAllListeners = u('removeEvent'), c.emitEvent = function(t, e) {
            let n,
                r,
                o,
                i,
                u = this.getListenersAsObject(t);
            for (i in u)
                if (u.hasOwnProperty(i))
                    for (n = u[i].slice(0), o = 0; o < n.length; o++) r = n[o], !0 === r.once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
            return this;
        }, c.trigger = u('emitEvent'), c.emit = function(t) {
            const e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e);
        }, c.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this;
        }, c._getOnceReturnValue = function() {
            return !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue;
        }, c._getEvents = function() {
            return this._events || (this._events = {});
        }, o.noConflict = function() {
            return e.EventEmitter = s, o;
        }, void 0 !== (r = function() {
            return o;
        }.call(e, n, e, t)) && (t.exports = r);
    }(typeof window !== 'undefined' ? window : this || {}));
}, function(t, e, n) {
    'use strict';

    function r(t) {
        const e = [];
        for (let n in t)
            if (t.hasOwnProperty(n)) {
                let r = t[n];
                n = encodeURIComponent(n), !0 === r ? e.push(n) : !1 === r ? e.push(`!${n}`) : r !== null && (void 0 === r ? 'undefined' : o(r)) === 'object' ? (r = encodeURIComponent(JSON.stringify(r)), e.push(`${n}=${r}`)) : (r = encodeURIComponent(r), e.push(`${n}=${r}`));
            }
        return e.join('&');
    }
    e.a = r;
    var o = (n(148), typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(t) {
        return typeof t;
    } : function(t) {
        return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    });
}, function(t, e, n) {
    'use strict';

    function r(t) {
        for (var e = [t / 3600, t / 60 % 60, t % 60], n = 0; n < e.length; n++) {
            const r = Math.floor(e[n]);
            e[n] = r < 10 ? `0${r}` : r;
        }
        return e;
    }

    function o(t) {
        let e = r(t),
            n = ['s', 'm', 'h'],
            o = '';
        e = e.reverse();
        for (let i = 0; i < e.length; i++) o = e[i] + n[i] + o;
        return o.replace(/00(h|m|s)/g, '');
    }
    e.a = o;
}, function(t, e, n) {
    (function(e, n) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.4+314e4831
         */
        !(function(e, n) {
            t.exports = n();
        }(0, () => {
            'use strict';

            function t(t) {
                const e = typeof t;
                return t !== null && (e === 'object' || e === 'function');
            }

            function r(t) {
                return typeof t === 'function';
            }

            function o(t) {
                V = t;
            }

            function i(t) {
                B = t;
            }

            function u() {
                return void 0 !== U ? function() {
                    U(c);
                } : a();
            }

            function a() {
                const t = setTimeout;
                return function() {
                    return t(c, 1);
                };
            }

            function c() {
                for (let t = 0; t < z; t += 2) {
                    (0, Y[t])(Y[t + 1]), Y[t] = void 0, Y[t + 1] = void 0;
                }
                z = 0;
            }

            function s(t, e) {
                let n = this,
                    r = new this.constructor(l);
                void 0 === r[Q] && k(r);
                const o = n._state;
                if (o) {
                    const i = arguments[o - 1];
                    B(() => A(o, r, i, n._result));
                } else j(n, r, t, e);
                return r;
            }

            function f(t) {
                const e = this;
                if (t && typeof t === 'object' && t.constructor === e) return t;
                const n = new e(l);
                return _(n, t), n;
            }

            function l() {}

            function p() {
                return new TypeError('You cannot resolve a promise with itself');
            }

            function h() {
                return new TypeError('A promises callback cannot return that same promise.');
            }

            function d(t) {
                try {
                    return t.then;
                } catch (t) {
                    return tt.error = t, tt;
                }
            }

            function v(t, e, n, r) {
                try {
                    t.call(e, n, r);
                } catch (t) {
                    return t;
                }
            }

            function y(t, e, n) {
                B((t) => {
                    let r = !1,
                        o = v(n, e, (n) => {
                            r || (r = !0, e !== n ? _(t, n) : w(t, n));
                        }, (e) => {
                            r || (r = !0, x(t, e));
                        }, `Settle: ${t._label || ' unknown promise'}`);
                    !r && o && (r = !0, x(t, o));
                }, t);
            }

            function b(t, e) {
                e._state === Z ? w(t, e._result) : e._state === X ? x(t, e._result) : j(e, void 0, (e) => _(t, e), (e) => x(t, e));
            }

            function g(t, e, n) {
                e.constructor === t.constructor && n === s && e.constructor.resolve === f ? b(t, e) : n === tt ? (x(t, tt.error), tt.error = null) : void 0 === n ? w(t, e) : r(n) ? y(t, e, n) : w(t, e);
            }

            function _(e, n) {
                e === n ? x(e, p()) : t(n) ? g(e, n, d(n)) : w(e, n);
            }

            function m(t) {
                t._onerror && t._onerror(t._result), O(t);
            }

            function w(t, e) {
                t._state === J && (t._result = e, t._state = Z, t._subscribers.length !== 0 && B(O, t));
            }

            function x(t, e) {
                t._state === J && (t._state = X, t._result = e, B(m, t));
            }

            function j(t, e, n, r) {
                let o = t._subscribers,
                    i = o.length;
                t._onerror = null, o[i] = e, o[i + Z] = n, o[i + X] = r, i === 0 && t._state && B(O, t);
            }

            function O(t) {
                let e = t._subscribers,
                    n = t._state;
                if (e.length !== 0) {
                    for (let r = void 0, o = void 0, i = t._result, u = 0; u < e.length; u += 3) r = e[u], o = e[u + n], r ? A(n, r, o, i) : o(i);
                    t._subscribers.length = 0;
                }
            }

            function E(t, e) {
                try {
                    return t(e);
                } catch (t) {
                    return tt.error = t, tt;
                }
            }

            function A(t, e, n, o) {
                let i = r(n),
                    u = void 0,
                    a = void 0,
                    c = void 0,
                    s = void 0;
                if (i) {
                    if (u = E(n, o), u === tt ? (s = !0, a = u.error, u.error = null) : c = !0, e === u) return void x(e, h());
                } else u = o, c = !0;
                e._state !== J || (i && c ? _(e, u) : s ? x(e, a) : t === Z ? w(e, u) : t === X && x(e, u));
            }

            function S(t, e) {
                try {
                    e((e) => {
                        _(t, e);
                    }, (e) => {
                        x(t, e);
                    });
                } catch (e) {
                    x(t, e);
                }
            }

            function P() {
                return et++;
            }

            function k(t) {
                t[Q] = et++, t._state = void 0, t._result = void 0, t._subscribers = [];
            }

            function T() {
                return new Error('Array Methods must be provided an Array');
            }

            function L(t) {
                return new nt(this, t).promise;
            }

            function M(t) {
                const e = this;
                return new e(F(t) ? (n, r) => {
                    for (let o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r);
                } : (t, e) => e(new TypeError('You must pass an array to race.')));
            }

            function C(t) {
                let e = this,
                    n = new e(l);
                return x(n, t), n;
            }

            function R() {
                throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
            }

            function I() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }

            function D() {
                let t = void 0;
                if (void 0 !== n) t = n;
                else if (typeof self !== 'undefined') t = self;
                else try {
                    t = Function('return this')();
                } catch (t) {
                    throw new Error('polyfill failed because global object is unavailable in this environment');
                }
                const e = t.Promise;
                if (e) {
                    let r = null;
                    try {
                        r = Object.prototype.toString.call(e.resolve());
                    } catch (t) {}
                    if (r === '[object Promise]' && !e.cast) return;
                }
                t.Promise = rt;
            }
            let N = void 0;
            N = Array.isArray ? Array.isArray : function(t) {
                return Object.prototype.toString.call(t) === '[object Array]';
            };
            var F = N,
                z = 0,
                U = void 0,
                V = void 0,
                B = function(t, e) {
                    Y[z] = t, Y[z + 1] = e, (z += 2) === 2 && (V ? V(c) : G());
                },
                W = typeof window !== 'undefined' ? window : void 0,
                q = W || {},
                $ = q.MutationObserver || q.WebKitMutationObserver,
                H = typeof self === 'undefined' && void 0 !== e && {}.toString.call(e) === '[object process]',
                K = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined',
                Y = new Array(1e3),
                G = void 0;
            G = H ? (function() {
                return function() {
                    return e.nextTick(c);
                };
            }()) : $ ? (function() {
                let t = 0,
                    e = new $(c),
                    n = document.createTextNode('');
                return e.observe(n, {
                        characterData: !0
                    }),
                    function() {
                        n.data = t = ++t % 2;
                    };
            }()) : K ? (function() {
                const t = new MessageChannel();
                return t.port1.onmessage = c,
                    function() {
                        return t.port2.postMessage(0);
                    };
            }()) : void 0 === W ? (function() {
                try {
                    const t = Function('return this')().require('vertx');
                    return U = t.runOnLoop || t.runOnContext, u();
                } catch (t) {
                    return a();
                }
            }()) : a();
            var Q = Math.random().toString(36).substring(2),
                J = void 0,
                Z = 1,
                X = 2,
                tt = {
                    error: null
                },
                et = 0,
                nt = (function() {
                    function t(t, e) {
                        this._instanceConstructor = t, this.promise = new t(l), this.promise[Q] || k(this.promise), F(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), this.length === 0 ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), this._remaining === 0 && w(this.promise, this._result))) : x(this.promise, T());
                    }
                    return t.prototype._enumerate = function(t) {
                        for (let e = 0; this._state === J && e < t.length; e++) this._eachEntry(t[e], e);
                    }, t.prototype._eachEntry = function(t, e) {
                        let n = this._instanceConstructor,
                            r = n.resolve;
                        if (r === f) {
                            const o = d(t);
                            if (o === s && t._state !== J) this._settledAt(t._state, e, t._result);
                            else if (typeof o !== 'function') this._remaining--, this._result[e] = t;
                            else if (n === rt) {
                                const i = new n(l);
                                g(i, t, o), this._willSettleAt(i, e);
                            } else this._willSettleAt(new n((e) => e(t)), e);
                        } else this._willSettleAt(r(t), e);
                    }, t.prototype._settledAt = function(t, e, n) {
                        const r = this.promise;
                        r._state === J && (this._remaining--, t === X ? x(r, n) : this._result[e] = n), this._remaining === 0 && w(r, this._result);
                    }, t.prototype._willSettleAt = function(t, e) {
                        const n = this;
                        j(t, void 0, (t) => n._settledAt(Z, e, t), (t) => n._settledAt(X, e, t));
                    }, t;
                }()),
                rt = (function() {
                    function t(e) {
                        this[Q] = P(), this._result = this._state = void 0, this._subscribers = [], l !== e && (typeof e !== 'function' && R(), this instanceof t ? S(this, e) : I());
                    }
                    return t.prototype.catch = function(t) {
                        return this.then(null, t);
                    }, t.prototype.finally = function(t) {
                        let e = this,
                            n = e.constructor;
                        return e.then((e) => n.resolve(t()).then(() => e), (e) => n.resolve(t()).then(() => {
                            throw e;
                        }));
                    }, t;
                }());
            return rt.prototype.then = s, rt.all = L, rt.race = M, rt.resolve = f, rt.reject = C, rt._setScheduler = o, rt._setAsap = i, rt._asap = B, rt.polyfill = D, rt.Promise = rt, rt;
        }));
    }).call(e, n(150), n(29));
}, function(t, e) {
    function n() {
        throw new Error('setTimeout has not been defined');
    }

    function r() {
        throw new Error('clearTimeout has not been defined');
    }

    function o(t) {
        if (f === setTimeout) return setTimeout(t, 0);
        if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);
        try {
            return f(t, 0);
        } catch (e) {
            try {
                return f.call(null, t, 0);
            } catch (e) {
                return f.call(this, t, 0);
            }
        }
    }

    function i(t) {
        if (l === clearTimeout) return clearTimeout(t);
        if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
        try {
            return l(t);
        } catch (e) {
            try {
                return l.call(null, t);
            } catch (e) {
                return l.call(this, t);
            }
        }
    }

    function u() {
        v && h && (v = !1, h.length ? d = h.concat(d) : y = -1, d.length && a());
    }

    function a() {
        if (!v) {
            const t = o(u);
            v = !0;
            for (let e = d.length; e;) {
                for (h = d, d = []; ++y < e;) h && h[y].run();
                y = -1, e = d.length;
            }
            h = null, v = !1, i(t);
        }
    }

    function c(t, e) {
        this.fun = t, this.array = e;
    }

    function s() {}
    let f,
        l,
        p = t.exports = {};
    !(function() {
        try {
            f = typeof setTimeout === 'function' ? setTimeout : n;
        } catch (t) {
            f = n;
        }
        try {
            l = typeof clearTimeout === 'function' ? clearTimeout : r;
        } catch (t) {
            l = r;
        }
    }());
    var h,
        d = [],
        v = !1,
        y = -1;
    p.nextTick = function(t) {
        const e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (let n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new c(t, e)), d.length !== 1 || v || o(a);
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, p.title = 'browser', p.browser = !0, p.env = {}, p.argv = [], p.version = '', p.versions = {}, p.on = s, p.addListener = s, p.once = s, p.off = s, p.removeListener = s, p.removeAllListeners = s, p.emit = s, p.prependListener = s, p.prependOnceListener = s, p.listeners = function(t) {
        return [];
    }, p.binding = function(t) {
        throw new Error('process.binding is not supported');
    }, p.cwd = function() {
        return '/';
    }, p.chdir = function(t) {
        throw new Error('process.chdir is not supported');
    }, p.umask = function() {
        return 0;
    };
}, , function(t, e, n) {
    'use strict';

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }

    function o(t) {
        return u()(t) ? document.getElementById(t) : t;
    }
    Object.defineProperty(e, '__esModule', {
        value: !0
    }), n.d(e, 'PlayerEmbed', () => d);
    var i = n(52),
        u = n.n(i),
        a = n(55),
        c = n(153),
        s = n(154),
        f = (function() {
            function t(t, e) {
                for (let n = 0; n < e.length; n++) {
                    const r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }()),
        l = Object.freeze({
            ABORTED: s.a.ABORTED.code,
            NETWORK: s.a.NETWORK.code,
            DECODE: s.a.DECODE.code,
            FORMAT_NOT_SUPPORTED: s.a.FORMAT_NOT_SUPPORTED.code,
            CONTENT_NOT_AVAILABLE: s.a.CONTENT_NOT_AVAILABLE.code,
            RENDERER_NOT_AVAILABLE: s.a.RENDERER_NOT_AVAILABLE.code
        }),
        p = Object.freeze({
            MINUTE_WATCHED: a.e,
            VIDEO_PLAY: a.o,
            BUFFER_EMPTY: a.a,
            VIDEO_ERROR: a.p,
            N_SECOND_PLAY: a.f
        }),
        h = Object.freeze({
            TRANSITION_TO_RECOMMENDED_VOD: a.n
        }),
        d = (function() {
            function t(e, n) {
                r(this, t), this._bridge = new a.q(o(e), n);
            }
            return f(t, [{
                key: 'play',
                value() {
                    this._bridge.callPlayerMethod(a.u);
                }
            }, {
                key: 'pause',
                value() {
                    this._bridge.callPlayerMethod(a.t);
                }
            }, {
                key: 'seek',
                value(t) {
                    this._bridge.callPlayerMethod(a.v, t);
                }
            }, {
                key: 'setVolume',
                value(t) {
                    this._bridge.callPlayerMethod(a.Q, t);
                }
            }, {
                key: 'setTheatre',
                value(t) {
                    this._bridge.callPlayerMethod(a.M, t);
                }
            }, {
                key: 'setAutoplay',
                value(t) {
                    this._bridge.callPlayerMethod(a.w, t);
                }
            }, {
                key: 'setFullscreen',
                value(t) {
                    this._bridge.callPlayerMethod(a.F, t);
                }
            }, {
                key: 'setMuted',
                value(t) {
                    this._bridge.callPlayerMethod(a.J, t);
                }
            }, {
                key: 'setChannel',
                value(t) {
                    this._bridge.callPlayerMethod(a.z, t);
                }
            }, {
                key: 'setChannelId',
                value(t) {
                    this._bridge.callPlayerMethod(a.A, t);
                }
            }, {
                key: 'setCollection',
                value(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
                    this._bridge.callPlayerMethod(a.C, t, e, n);
                }
            }, {
                key: 'setVideo',
                value(t) {
                    const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
                    this._bridge.callPlayerMethod(a.O, t, e);
                }
            }, {
                key: 'setContent',
                value(t) {
                    let e = t.contentId,
                        n = t.customerId;
                    this._bridge.callPlayerMethod(a.D, e, n);
                }
            }, {
                key: 'setClip',
                value(t) {
                    this._bridge.callPlayerMethod(a.B, t);
                }
            }, {
                key: 'setEditClip',
                value(t) {
                    this._bridge.callPlayerMethod(a.E, t);
                }
            }, {
                key: 'setVideoSource',
                value(t) {
                    this._bridge.callPlayerMethod(a.P, t);
                }
            }, {
                key: 'setQuality',
                value(t) {
                    this._bridge.callPlayerMethod(a.L, t);
                }
            }, {
                key: 'setWidth',
                value(t) {
                    this._bridge.setWidth(t);
                }
            }, {
                key: 'setHeight',
                value(t) {
                    this._bridge.setHeight(t);
                }
            }, {
                key: 'setMiniPlayerMode',
                value(t) {
                    this._bridge.callPlayerMethod(a.I, t);
                }
            }, {
                key: 'setTrackingProperties',
                value(t) {
                    Object(c.a)(window.location.href) && this._bridge.callPlayerMethod(a.N, t);
                }
            }, {
                key: 'setPlayerType',
                value(t) {
                    this._bridge.callPlayerMethod(a.K, t);
                }
            }, {
                key: 'setLiveLowLatencyEnabled',
                value(t) {
                    this._bridge.callPlayerMethod(a.G, t);
                }
            }, {
                key: 'setLiveMaxLatency',
                value(t) {
                    this._bridge.callPlayerMethod(a.H, t);
                }
            }, {
                key: 'setAutoMaxVideoSize',
                value(t, e) {
                    this._bridge.callPlayerMethod(a.x, t, e);
                }
            }, {
                key: 'showPlayerControls',
                value(t) {
                    this._bridge.callPlayerMethod(a.R, t);
                }
            }, {
                key: 'addEventListener',
                value(t, e) {
                    this._bridge.addEventListener(t, e);
                }
            }, {
                key: 'removeEventListener',
                value(t, e) {
                    this._bridge.removeEventListener(t, e);
                }
            }, {
                key: 'enableCaptions',
                value() {
                    this._bridge.callPlayerMethod(a.s);
                }
            }, {
                key: 'disableCaptions',
                value() {
                    this._bridge.callPlayerMethod(a.r);
                }
            }, {
                key: 'setCaptionSize',
                value(t) {
                    this._bridge.callPlayerMethod(a.y, t);
                }
            }, {
                key: 'getContentId',
                value() {
                    return this._bridge.getStoreState().stream.contentId;
                }
            }, {
                key: 'getChannel',
                value() {
                    return this._bridge.getPlayerState().channelName;
                }
            }, {
                key: 'getChannelId',
                value() {
                    return this._bridge.getPlayerState().channelId;
                }
            }, {
                key: 'getCurrentTime',
                value() {
                    return this._bridge.getPlayerState().currentTime;
                }
            }, {
                key: 'getCustomerId',
                value() {
                    return this._bridge.getStoreState().stream.customerId;
                }
            }, {
                key: 'getDuration',
                value() {
                    return this._bridge.getPlayerState().duration;
                }
            }, {
                key: 'getEnded',
                value() {
                    return this._bridge.getPlayerState().playback === a.S;
                }
            }, {
                key: 'getMuted',
                value() {
                    return this._bridge.getPlayerState().muted;
                }
            }, {
                key: 'getPlaybackStats',
                value() {
                    return this._bridge.getStoreState().stats.videoStats;
                }
            }, {
                key: 'getPlaySessionId',
                value() {
                    return this._bridge.getStoreState().playSessionId;
                }
            }, {
                key: 'isMatureChannel',
                value() {
                    return this._bridge.getStoreState().mature;
                }
            }, {
                key: 'isPaused',
                value() {
                    return this._bridge.getPlayerState().playback === a.T;
                }
            }, {
                key: 'getQuality',
                value() {
                    return this._bridge.getPlayerState().quality;
                }
            }, {
                key: 'getQualities',
                value() {
                    return this._bridge.getPlayerState().qualitiesAvailable;
                }
            }, {
                key: 'getViewers',
                value() {
                    return this._bridge.getStoreState().viewercount;
                }
            }, {
                key: 'getVideo',
                value() {
                    return this._bridge.getPlayerState().videoID;
                }
            }, {
                key: 'getVolume',
                value() {
                    return this._bridge.getPlayerState().volume;
                }
            }, {
                key: 'getAutoplay',
                value() {
                    return this._bridge.getPlayerState().autoplay;
                }
            }, {
                key: 'getTheatre',
                value() {
                    return this._bridge.getStoreState().screenMode.isTheatreMode;
                }
            }, {
                key: 'getFullscreen',
                value() {
                    return this._bridge.getStoreState().screenMode.isFullScreen;
                }
            }, {
                key: 'getFullscreenEnabled',
                value() {
                    return this._bridge.getStoreState().screenMode.canFullScreen;
                }
            }, {
                key: 'getSessionInfo',
                value() {
                    return {
                        broadcastId: this._bridge.getStoreState().broadcastId,
                        playSessionId: this._bridge.getStoreState().playSessionId
                    };
                }
            }, {
                key: 'getCaptionsAvailable',
                value() {
                    return this._bridge.getStoreState().captions.available;
                }
            }, {
                key: '_addPlayerStateListener',
                value(t) {
                    this._bridge.addPlayerStateListener(t);
                }
            }, {
                key: '_removePlayerStateListener',
                value(t) {
                    this._bridge.removePlayerStateListener(t);
                }
            }, {
                key: 'destroy',
                value() {
                    this._bridge.destroy();
                }
            }], [{
                key: 'READY',
                get() {
                    return a.m;
                }
            }, {
                key: 'PLAY',
                get() {
                    return a.j;
                }
            }, {
                key: 'PLAYING',
                get() {
                    return a.l;
                }
            }, {
                key: 'PAUSE',
                get() {
                    return a.i;
                }
            }, {
                key: 'ENDED',
                get() {
                    return a.c;
                }
            }, {
                key: 'ONLINE',
                get() {
                    return a.h;
                }
            }, {
                key: 'OFFLINE',
                get() {
                    return a.g;
                }
            }, {
                key: 'ERROR',
                get() {
                    return a.d;
                }
            }, {
                key: 'CAPTIONS',
                get() {
                    return a.b;
                }
            }, {
                key: 'PLAYBACK_BLOCKED',
                get() {
                    return a.k;
                }
            }]), t;
        }());
    window.Twitch = window.Twitch || {}, window.Twitch.Player = d, window.Twitch.Analytics = p, window.Twitch.Errors = l, window.Twitch.EmbedEvents = h;
}, function(t, e, n) {
    'use strict';

    function r() {
        return window.self !== window.parent ? document.referrer : window.location.href;
    }

    function o() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
            e = Object(i.a)(t),
            n = e.host.split('.').slice(-2).join('.');
        return n === u || n === a;
    }
    e.a = o;
    var i = n(51),
        u = 'twitch.tv',
        a = 'twitch.tech';
}, function(t, e, n) {
    'use strict';
    const r = Object.freeze({
        ABORTED: {
            code: 1e3,
            message: 'Media playback aborted error'
        },
        NETWORK: {
            code: 2e3,
            message: 'Network error'
        },
        CCU_CAP_REACHED: {
            code: 2001,
            message: 'Max users reached'
        },
        DECODE: {
            code: 3e3,
            message: 'Media resource decoding error'
        },
        FORMAT_NOT_SUPPORTED: {
            code: 4e3,
            message: 'Resource format not supported error'
        },
        CONTENT_NOT_AVAILABLE: {
            code: 5e3,
            message: 'Content not available'
        },
        RENDERER_NOT_AVAILABLE: {
            code: 6e3,
            message: 'Renderer not available'
        },
        DRM_GEOBLOCKED: {
            code: 7e3,
            message: 'This premium content is not available in your region.'
        },
        DRM_UNSUPPORTED_DEVICE: {
            code: 7001,
            message: 'Your device does not support playback of this premium content. Please try a different device.'
        },
        DRM_UNBLOCKER: {
            code: 7002,
            message: 'Proxy or unblocker detected. Premium content is unavailable while one is in use.'
        },
        DRM_CELLULAR_NETWORK_PROHIBITED: {
            code: 7003,
            message: 'Please connect to a Wi-Fi network to watch this premium content.'
        },
        DRM_SAFARI_UNSUPPORTED_DEVICE: {
            code: 7004,
            message: 'Safari is not currently supported for this stream. Please try Chrome or Firefox.'
        }
    });
    e.a = r;
}]))));
