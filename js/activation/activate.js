! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 28)
}([function (e, t, n) {
    "use strict";
    var r = n(2),
        o = Object.prototype.toString;

    function i(e) {
        return "[object Array]" === o.call(e)
    }

    function a(e) {
        return void 0 === e
    }

    function s(e) {
        return null !== e && "object" == typeof e
    }

    function u(e) {
        if ("[object Object]" !== o.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
    }

    function c(e) {
        return "[object Function]" === o.call(e)
    }

    function f(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), i(e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }
    e.exports = {
        isArray: i,
        isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === o.call(e)
        },
        isBuffer: function (e) {
            return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function (e) {
            return "string" == typeof e
        },
        isNumber: function (e) {
            return "number" == typeof e
        },
        isObject: s,
        isPlainObject: u,
        isUndefined: a,
        isDate: function (e) {
            return "[object Date]" === o.call(e)
        },
        isFile: function (e) {
            return "[object File]" === o.call(e)
        },
        isBlob: function (e) {
            return "[object Blob]" === o.call(e)
        },
        isFunction: c,
        isStream: function (e) {
            return s(e) && c(e.pipe)
        },
        isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: f,
        merge: function e() {
            var t = {};

            function n(n, r) {
                u(t[r]) && u(n) ? t[r] = e(t[r], n) : u(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n
            }
            for (var r = 0, o = arguments.length; r < o; r++) f(arguments[r], n);
            return t
        },
        extend: function (e, t, n) {
            return f(t, (function (t, o) {
                e[o] = n && "function" == typeof t ? r(t, n) : t
            })), e
        },
        trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        },
        stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
        }
    }
}, function (e, t, n) {
    e.exports = n(10)
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);

    function o(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function (e, t, n) {
        if (!t) return e;
        var i;
        if (n) i = n(t);
        else if (r.isURLSearchParams(t)) i = t.toString();
        else {
            var a = [];
            r.forEach(t, (function (e, t) {
                null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function (e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                })))
            })), i = a.join("&")
        }
        if (i) {
            var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, n) {
    "use strict";
    (function (t) {
        var r = n(0),
            o = n(16),
            i = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function a(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var s, u = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (s = n(6)), s),
            transformRequest: [function (e, t) {
                return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function (e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (e) {
                return e >= 200 && e < 300
            }
        };
        u.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, r.forEach(["delete", "get", "head"], (function (e) {
            u.headers[e] = {}
        })), r.forEach(["post", "put", "patch"], (function (e) {
            u.headers[e] = r.merge(i)
        })), e.exports = u
    }).call(this, n(15))
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        o = n(17),
        i = n(19),
        a = n(3),
        s = n(20),
        u = n(23),
        c = n(24),
        f = n(7);
    e.exports = function (e) {
        return new Promise((function (t, n) {
            var l = e.data,
                d = e.headers;
            r.isFormData(l) && delete d["Content-Type"];
            var p = new XMLHttpRequest;
            if (e.auth) {
                var h = e.auth.username || "",
                    m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                d.Authorization = "Basic " + btoa(h + ":" + m)
            }
            var v = s(e.baseURL, e.url);
            if (p.open(e.method.toUpperCase(), a(v, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function () {
                    if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var r = "getAllResponseHeaders" in p ? u(p.getAllResponseHeaders()) : null,
                            i = {
                                data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                status: p.status,
                                statusText: p.statusText,
                                headers: r,
                                config: e,
                                request: p
                            };
                        o(t, n, i), p = null
                    }
                }, p.onabort = function () {
                    p && (n(f("Request aborted", e, "ECONNABORTED", p)), p = null)
                }, p.onerror = function () {
                    n(f("Network Error", e, null, p)), p = null
                }, p.ontimeout = function () {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(f(t, e, "ECONNABORTED", p)), p = null
                }, r.isStandardBrowserEnv()) {
                var y = (e.withCredentials || c(v)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                y && (d[e.xsrfHeaderName] = y)
            }
            if ("setRequestHeader" in p && r.forEach(d, (function (e, t) {
                    void 0 === l && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
                })), r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function (e) {
                p && (p.abort(), n(e), p = null)
            })), l || (l = null), p.send(l)
        }))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(18);
    e.exports = function (e, t, n, o, i) {
        var a = new Error(e);
        return r(a, t, n, o, i)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
        t = t || {};
        var n = {},
            o = ["url", "method", "data"],
            i = ["headers", "auth", "proxy", "params"],
            a = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
            s = ["validateStatus"];

        function u(e, t) {
            return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
        }

        function c(o) {
            r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o])) : n[o] = u(e[o], t[o])
        }
        r.forEach(o, (function (e) {
            r.isUndefined(t[e]) || (n[e] = u(void 0, t[e]))
        })), r.forEach(i, c), r.forEach(a, (function (o) {
            r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o])) : n[o] = u(void 0, t[o])
        })), r.forEach(s, (function (r) {
            r in t ? n[r] = u(e[r], t[r]) : r in e && (n[r] = u(void 0, e[r]))
        }));
        var f = o.concat(i).concat(a).concat(s),
            l = Object.keys(e).concat(Object.keys(t)).filter((function (e) {
                return -1 === f.indexOf(e)
            }));
        return r.forEach(l, c), n
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }
    r.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        o = n(2),
        i = n(11),
        a = n(8);

    function s(e) {
        var t = new i(e),
            n = o(i.prototype.request, t);
        return r.extend(n, i.prototype, t), r.extend(n, t), n
    }
    var u = s(n(5));
    u.Axios = i, u.create = function (e) {
        return s(a(u.defaults, e))
    }, u.Cancel = n(9), u.CancelToken = n(25), u.isCancel = n(4), u.all = function (e) {
        return Promise.all(e)
    }, u.spread = n(26), u.isAxiosError = n(27), e.exports = u, e.exports.default = u
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        o = n(3),
        i = n(12),
        a = n(13),
        s = n(8);

    function u(e) {
        this.defaults = e, this.interceptors = {
            request: new i,
            response: new i
        }
    }
    u.prototype.request = function (e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var t = [a, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach((function (e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function (e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, u.prototype.getUri = function (e) {
        return e = s(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, r.forEach(["delete", "get", "head", "options"], (function (e) {
        u.prototype[e] = function (t, n) {
            return this.request(s(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    })), r.forEach(["post", "put", "patch"], (function (e) {
        u.prototype[e] = function (t, n, r) {
            return this.request(s(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    })), e.exports = u
}, function (e, t, n) {
    "use strict";
    var r = n(0);

    function o() {
        this.handlers = []
    }
    o.prototype.use = function (e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, o.prototype.forEach = function (e) {
        r.forEach(this.handlers, (function (t) {
            null !== t && e(t)
        }))
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        o = n(14),
        i = n(4),
        a = n(5);

    function s(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function (e) {
        return s(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (t) {
            delete e.headers[t]
        })), (e.adapter || a.adapter)(e).then((function (t) {
            return s(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }), (function (t) {
            return i(t) || (s(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t, n) {
        return r.forEach(n, (function (n) {
            e = n(e, t)
        })), e
    }
}, function (e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var u, c = [],
        f = !1,
        l = -1;

    function d() {
        f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && p())
    }

    function p() {
        if (!f) {
            var e = s(d);
            f = !0;
            for (var t = c.length; t;) {
                for (u = c, c = []; ++l < t;) u && u[l].run();
                l = -1, t = c.length
            }
            u = null, f = !1,
                function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || f || s(p)
    }, h.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
        return []
    }, o.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
        r.forEach(e, (function (n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        }))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(7);
    e.exports = function (e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, o) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function (e, t, n, o, i, a) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
        },
        read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {},
        read: function () {
            return null
        },
        remove: function () {}
    }
}, function (e, t, n) {
    "use strict";
    var r = n(21),
        o = n(22);
    e.exports = function (e, t) {
        return e && !r(t) ? o(e, t) : t
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, n, i, a = {};
        return e ? (r.forEach(e.split("\n"), (function (e) {
            if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                if (a[t] && o.indexOf(t) >= 0) return;
                a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
            }
        })), a) : a
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function o(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = o(window.location.href),
            function (t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function () {
        return !0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(9);

    function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function (e) {
            t = e
        }));
        var n = this;
        e((function (e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        }))
    }
    o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, o.source = function () {
        var e;
        return {
            token: new o((function (t) {
                e = t
            })),
            cancel: e
        }
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return "object" == typeof e && !0 === e.isAxiosError
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1),
        o = n.n(r);

    function i(e, t) {
        let n, r, o, i, a, s = 0,
            u = 0;
        for (s = 0; s < t.length; s += 1)
            if (n = new RegExp(t[s].value, "i"), o = n.test(e), o) {
                if (r = new RegExp(t[s].version + "[- /:;]([\\d._]+)", "i"), i = e.match(r), a = "", i && i[1] && (i = i[1]), i)
                    for (i = i.split(/[._]+/), u = 0; u < i.length; u += 1) a += 0 === u ? i[u] + "." : i[u];
                else a = "0";
                return {
                    name: t[s].name,
                    version: parseFloat(a)
                }
            } return {
            name: "unknown",
            version: 0
        }
    }
    const a = [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera].join(" ");
    var s = {
        os: i(a, [{
            name: "Windows Phone",
            value: "Windows Phone",
            version: "OS"
        }, {
            name: "Windows",
            value: "Win",
            version: "NT"
        }, {
            name: "iPhone",
            value: "iPhone",
            version: "OS"
        }, {
            name: "iPad",
            value: "iPad",
            version: "OS"
        }, {
            name: "Kindle",
            value: "Silk",
            version: "Silk"
        }, {
            name: "Android",
            value: "Android",
            version: "Android"
        }, {
            name: "PlayBook",
            value: "PlayBook",
            version: "OS"
        }, {
            name: "BlackBerry",
            value: "BlackBerry",
            version: "/"
        }, {
            name: "Macintosh",
            value: "Mac",
            version: "OS X"
        }, {
            name: "Linux",
            value: "Linux",
            version: "rv"
        }, {
            name: "Palm",
            value: "Palm",
            version: "PalmOS"
        }]),
        browser: i(a, [{
            name: "Chrome",
            value: "Chrome",
            version: "Chrome"
        }, {
            name: "Firefox",
            value: "Firefox",
            version: "Firefox"
        }, {
            name: "Safari",
            value: "Safari",
            version: "Version"
        }, {
            name: "Internet Explorer",
            value: "MSIE",
            version: "MSIE"
        }, {
            name: "Opera",
            value: "Opera",
            version: "Opera"
        }, {
            name: "BlackBerry",
            value: "CLDC",
            version: "CLDC"
        }, {
            name: "Mozilla",
            value: "Mozilla",
            version: "Mozilla"
        }])
    };
    const u = "https://rear.tryhoverify.com/api/app";
    var c = async (e, t, n) => {
        const r = {
            email: t,
            key: e,
            device_name: n,
            os: s.os.name,
            os_version: s.os.version,
            browser: s.browser.name,
            browser_version: s.browser.version
        };
        try {
            const {
                data: e
            } = await o.a.post(u + "/activate", r);
            if (":)" === e.status) return e.data.token;
            throw new Error(e.error.message)
        } catch (e) {
            throw e
        }
    };
    var f = (e, t, n) => {
        t || (t = {}), t.action = e, n ? chrome.tabs.sendMessage(n, t) : chrome.runtime.sendMessage(t)
    };
    const l = document.getElementById("home_page"),
        d = document.getElementById("device_name_page"),
        p = document.getElementById("activate"),
        h = document.getElementById("continue"),
        m = document.getElementById("goto_home"),
        v = document.getElementById("key"),
        y = document.getElementById("email"),
        g = document.getElementById("device_name");

    function w(e) {
        "home" === e ? (l.style.display = "flex", d.style.display = "none") : (l.style.display = "none", d.style.display = "flex")
    }

    function x(e) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    }

    function b(e) {
        e ? (p.loading = !0, document.querySelector("#activate .loader").style.display = "block", document.querySelector("#activate span").style.display = "none") : (p.loading = !1, document.querySelector("#activate .loader").style.display = "none", document.querySelector("#activate span").style.display = "block")
    }
    m.addEventListener("click", () => {
        p.loading || w("home")
    }), h.addEventListener("click", () => {
        v.value;
        x(y.value) && w("deviceName")
    }), p.addEventListener("click", () => {
        if (!p.loading) {
            const e = v.value,
                t = y.value,
                n = g.value;
            x(t) && e && n && (b(!0), async function (e, t, n) {
                try {
                    const r = "nulledbygeorge101";
                    r && (f("manager.activate", {
                        token: r,
                        device_name: n
                    }), alert("Activated Successfully"), window.close())
                } catch (e) {
                    b(!1), alert(e.message)
                }
            }(e, t, n))
        }
    })
}]);