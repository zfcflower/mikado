/**!
 * Mikado.js v0.8.317 (Bundle/Debug)
 * Copyright 2019-2024 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
var n;
function q(a, b, c) {
  let e;
  c && (e = a._mkc) && (a._mkc = null);
  const h = b.length, k = [], d = {};
  for (let l = 0, p, m, r, v, w = null; l < h; l++) {
    p = b[l];
    if (m = p.v) {
      if (v = r = d[m], !v) {
        a: {
          var g = a, f = m;
          for (let u = 0, A = f.length, y = ""; u < A; u++) {
            const t = f[u];
            y += t;
            if (d[y]) {
              g = d[y];
            } else {
              if (">" === t) {
                g = g.firstChild;
              } else {
                if ("|" === t) {
                  r = [g.firstChild, g];
                  break a;
                }
                if ("@" === t) {
                  r = [g.style, g];
                  break a;
                }
                g = g.nextSibling;
              }
              d[y] = g;
            }
          }
          r = [g];
        }
        v = r[0];
        r = r[1] || v;
      }
    } else {
      v = r = a;
    }
    c && (w = e ? e[l] : {}, r._mkc = w);
    k[l] = new x(w, v, "");
  }
  return a._mkp = k;
}
function z(a, b, c, e, h, k) {
  const d = h || (b.tag ? b.svg ? document.createElementNS("http://www.w3.org/2000/svg", b.tag) : document.createElement(b.tag) : document.createTextNode(b.text));
  let g, f;
  if (f = b.class) {
    "object" === typeof f ? c.push(new x(g = {_c:""}, d, e)) : h || (d.className = f);
  }
  if (f = b.attr) {
    for (const l in f) {
      let p = f[l];
      "object" === typeof p ? (g || c.push(new x(g = {}, d, e)), g["_a" + l] = !1) : h || d.setAttribute(l, p);
    }
  }
  if (f = b.style) {
    "object" === typeof f ? (c.push(new x(g || (g = {}), d.style, e + "@")), g._s = "") : h || (d.style.cssText = f);
  }
  if (f = b.text) {
    "object" === typeof f ? (a = d, f = f[0], b.tag ? (e += "|", a = !h && d.firstChild, a || (a = document.createTextNode(f), d.appendChild(a))) : g = {}, (g || (g = {}))._t = f, c.push(new x(g, a, e))) : h || (b.tag ? d.textContent = f : d.nodeValue = f);
  } else if (f = b.child) {
    if (h && (h = h.firstChild, !h)) {
      return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
    }
    f.constructor !== Array && (f = [f]);
    for (let l = 0, p, m = f.length; l < m; l++) {
      if (p = f[l], e = l ? e + "+" : e + ">", b = z(a, p, c, e, h, 1), h) {
        if (l < m - 1 && (h = h.nextSibling, !h)) {
          return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
        }
      } else {
        d.appendChild(b);
      }
    }
  } else if (f = b.html) {
    "object" === typeof f ? (g || c.push(new x(g = {}, d, e)), g._h = "") : h || (d.innerHTML = f);
  } else if (f = b.inc) {
    g || c.push(new x(null, d, e));
    let l;
    if ("string" === typeof f) {
      l = C[f];
      if (!l) {
        throw Error("The partial template '" + f + "' which is included by the root template '" + a.name + "' was not registered. When using named includes make sure you register all your includes by Mikado.register(tpl) before instantiating the Mikado view instance.");
      }
      if (!(l instanceof D)) {
        e = l[0];
        if (b = l[1]) {
          b.async = !1, h && (b.root = h, b.hydrate = !0);
        }
        C[f] = l = new D(e, b);
      }
    } else if (1 !== f) {
      e = a.inc.length;
      if (!a.tpl.fn.length) {
        throw Error("The template '" + a.name + "|" + e + "' has conflicts. It should provide a handler entry, but wasn't found.");
      }
      l = new D({name:a.name + "|" + e, tpl:f, key:f.key, cache:f.cache, fn:a.tpl.fn}, {recycle:a.recycle, cache:a.cache, pool:a.pool, state:a.state, mount:d, hydrate:!!h});
    }
    1 !== f && a.inc.push(l);
  }
  g && (d._mkc = g);
  k || (d._mkp = c);
  return d;
}
const E = {checked:1, selected:1, hidden:1};
function x(a, b, c) {
  this.c = a;
  this.n = b;
  this.v = c;
}
n = x.prototype;
n._a = function(a, b, c, e) {
  if (this.c) {
    if (c) {
      if (e || 0 === e) {
        c = c[e] || (c[e] = {});
      }
      c["_a" + a] = b;
    }
    if (this.c["_a" + a] === b) {
      return;
    }
    this.c["_a" + a] = b;
  }
  !c && E[a] ? this.n[a] = b : !1 === b ? this.n.removeAttribute(a) : this.n.setAttribute(a, b);
};
n._t = function(a, b, c) {
  if (this.c) {
    if (b) {
      if (c || 0 === c) {
        b = b[c] || (b[c] = {});
      }
      b._t = a;
    }
    if (this.c._t === a) {
      return;
    }
    this.c._t = a;
  }
  this.n.nodeValue = a;
};
n._c = function(a, b, c) {
  if (this.c) {
    if (b) {
      if (c || 0 === c) {
        b = b[c] || (b[c] = {});
      }
      b._c = a;
    }
    if (this.c._c === a) {
      return;
    }
    this.c._c = a;
  }
  this.n.className = a;
};
n._s = function(a, b, c) {
  if (this.c) {
    if (b) {
      if (c || 0 === c) {
        b = b[c] || (b[c] = {});
      }
      b._s = a;
    }
    if (this.c._s === a) {
      return;
    }
    this.c._s = a;
  }
  this.n.cssText = a;
};
n._h = function(a, b, c) {
  if (this.c) {
    if (b) {
      if (c || 0 === c) {
        b = b[c] || (b[c] = {});
      }
      b._h = a;
    }
    if (this.c._h === a) {
      return;
    }
    this.c._h = a;
  }
  this.n.innerHTML = a;
};
const C = Object.create(null);
function D(a, b = {}) {
  if (!(this instanceof D)) {
    return new D(a, b);
  }
  if ("string" === typeof a) {
    var c = C[a];
    if (!c) {
      throw Error("The template '" + a + "' is not registered.");
    }
    if (c instanceof D) {
      return c;
    }
    a = c[0];
    b || (b = c[1]);
  }
  if (!a) {
    throw Error("Initialization Error: Template is not defined.");
  }
  if (!a.tpl) {
    throw Error("Initialization Error: Template isn't supported.");
  }
  this.g = [];
  this.length = 0;
  this.root = b.root || b.mount || null;
  this.recycle = !!b.recycle;
  this.state = b.state || {};
  this.shadow = b.shadow || !1;
  this.key = a.key || "";
  this.j = {};
  c = a.fn;
  a.m || c && (a.m = c.slice());
  this.apply = c && c.pop();
  this.tpl = a;
  this.name = a.name;
  this.inc = [];
  this.pool = (c = this.recycle || !!this.key) && b.pool || 0;
  this.l = [];
  this.i = new Map();
  this.cache = c && (a.cache || !!b.cache);
  this.root ? this.mount(this.root, b.hydrate) : this.h = null;
}
n = D.prototype;
n.mount = function(a, b) {
  if (!a) {
    throw Error("No target was passed to .mount()");
  }
  this.shadow && (a = a.shadowRoot || a.attachShadow({mode:"open"}));
  const c = a._mki;
  var e = this.root !== a;
  if (c === this) {
    if (!e) {
      return this;
    }
    this.g = a._mkd;
    this.length = this.g.length;
  } else if (c) {
    c.clear(), a._mkd = this.g = [], this.length = 0, a.firstChild && (a.textContent = "");
  } else {
    if (b) {
      var h = a.children;
      const k = h.length, d = Array(k);
      for (let g = 0; g < k; g++) {
        d[g] = h[g];
      }
      this.g = d;
      this.length = this.g.length;
    } else {
      this.g = [], this.length = 0, a.firstChild && (a.textContent = "");
    }
    a._mkd = this.g;
  }
  if (this.key) {
    if (e && this.root && (this.root._mkl = this.j), c === this) {
      this.j = a._mkl;
    } else {
      e = {};
      if (!c && b && this.length) {
        for (let k = 0, d, g; k < this.length; k++) {
          d = this.g[k], (g = d.getAttribute("key")) || console.warn("The template '" + this.name + "' runs in keyed mode, but the hydrated component don't have the attribute 'key' exported."), d._mkk = g, e[g] = d;
        }
      }
      a._mkl = this.j = e;
    }
  }
  a._mki = this;
  this.root = a;
  this.h || (b && this.length && (this.h = this.g[0].cloneNode(!0), z(this, this.tpl.tpl, [], "", this.h) && F(this)), this.tpl && (this.h = z(this, this.tpl.tpl, [], ""), F(this)));
  return this;
};
function F(a) {
  a.tpl.m && (a.tpl.fn = a.tpl.m, a.tpl.m = null);
  a.tpl = null;
}
n.render = function(a, b) {
  if (!this.root) {
    throw Error("Template was not mounted or root was not found.");
  }
  if (this.root._mki !== this) {
    throw Error("Another template is already assigned to this root. Please use '.mount(root_element)' before calling '.render()' to switch the context of a template.");
  }
  var c = this.length;
  if (!a && !this.apply) {
    return this.g[0] || this.add(), this;
  }
  if (Array.isArray(a)) {
    var e = a.length;
    if (!e) {
      return this.remove(0, c);
    }
  } else {
    a = [a], e = 1;
  }
  var h = this.key;
  !c || h || this.recycle || (this.remove(0, c), c = 0);
  var k = c < e ? c : e, d = 0;
  if (d < k) {
    for (let l, p; d < k; d++) {
      l = this.g[d];
      p = a[d];
      if (h && l._mkk !== p[h]) {
        c = this.g;
        e = this.j;
        h = this.key;
        k = a.length;
        let m = c.length, r = m > k ? m : k, v = 0;
        for (d || (d = 0); d < r; d++) {
          var g = void 0;
          if (d < k) {
            const w = a[d];
            var f = d >= m;
            let u, A, y;
            if (!f && (u = c[d], A = w[h], y = u._mkk, y === A)) {
              this.update(u, w, b, d, 1);
              continue;
            }
            if (f || !e[A]) {
              f || !this.pool ? (m++, r = m > k ? m : k, this.add(w, b, d)) : this.replace(u, w, b, d);
              continue;
            }
            let t, B;
            for (f = d + 1; f < r; f++) {
              if (!t && f < m && c[f]._mkk === A && (t = f + 1), !B && f < k && a[f][h] === y && (B = f + 1), t && B) {
                t >= B + v ? (g = c[t - 1], this.root.insertBefore(g, u), this.update(g, w, b, d, 1), t === B ? (1 < f - d && this.root.insertBefore(u, c[t]), c[d] = c[f], (c[f] = u) || console.error("reconcile.error 1")) : (t - 1 === d && console.error("reconcile.error 2"), G(c, t - 1, d), v++)) : (g = B - 1 + v, this.root.insertBefore(u, c[g] || null), (g > m ? m : g) - 1 === d && console.error("reconcile.error 3"), G(c, d, (g > m ? m : g) - 1), v--, d--);
                g = 1;
                break;
              }
            }
          }
          g || (this.remove(d), m--, r = m > k ? m : k, d--);
        }
        return this;
      }
      this.update(l, p, b, d, 1);
    }
  }
  if (d < e) {
    for (; d < e; d++) {
      this.add(a[d], b);
    }
  } else {
    e < c && this.remove(e, c - e);
  }
  return this;
};
n.replace = function(a, b, c, e) {
  "undefined" === typeof e && ("number" === typeof a ? (e = 0 > a ? this.length + a : a, a = this.g[e]) : e = this.index(a));
  var h;
  if (this.key) {
    var k = b[this.key];
    if (h = this.j[k]) {
      if (h !== a) {
        k = this.index(h);
        const d = k < e ? h : a, g = k < e ? a : h;
        let f = this.g[k < e ? k + 1 : e + 1];
        this.g[e] = h;
        this.g[k] = a;
        f !== g ? this.root.insertBefore(d, g) : f = d;
        this.root.insertBefore(g, f);
      }
    } else {
      this.pool && (h = this.i.get(k)) && (this.i.delete(k), H(this, a), this.g[e] = h, a.replaceWith(h));
    }
  } else {
    this.recycle && (h = a);
  }
  h ? !this.apply || this.apply(b, c || this.state, e, h._mkp || q(h, this.h._mkp, this.cache)) : (b = this.create(b, c, e, 1), (this.key || this.pool) && H(this, a), this.g[e] = b, a.replaceWith(b));
  return this;
};
n.update = function(a, b, c, e) {
  if (!this.apply) {
    return console.warn("The template '" + this.name + "' is a static template and should not be updated. Alternatively you can use .replace() to switch contents."), this;
  }
  "undefined" === typeof e && ("number" === typeof a ? (e = 0 > a ? this.length + a - 1 : a, a = this.g[e]) : e = this.index(a));
  this.apply(b, c || this.state, e, a._mkp || q(a, this.h._mkp, this.cache));
  return this;
};
n.create = function(a, b, c, e) {
  const h = this.key, k = h && a[h];
  let d;
  var g;
  let f, l;
  this.pool && (h ? (g = this.i) && (d = g.get(k)) && (g.delete(k), l = 1) : (g = this.l) && g.length && (d = g.pop()));
  d || (d = f = this.h, f || (this.h = d = f = z(this, this.tpl.tpl, [], ""), F(this)));
  let p;
  this.apply && (g = d._mkp || q(d, this.h._mkp, !!f || this.cache), p = f && this.cache && Array(g.length), this.apply(a, b || this.state, c, g, p));
  f && (d = f.cloneNode(!0), p && (d._mkc = p));
  h && (l || (d._mkk = k), e && (this.j[k] = d));
  return d;
};
n.add = function(a, b, c) {
  let e;
  "number" === typeof b ? (c = 0 > b ? this.length + b : b, b = null, e = c < this.length) : "number" === typeof c ? (0 > c && (c += this.length), e = c < this.length) : c = this.length;
  a = this.create(a, b, c, 1);
  e ? (this.root.insertBefore(a, this.g[c]), G(this.g, this.length - 1, c, a), this.length++) : (this.root.appendChild(a), this.g[this.length++] = a);
  return this;
};
function G(a, b, c, e) {
  const h = e || a[b];
  e && b++;
  if (b < c) {
    for (; b < c; b++) {
      a[b] = a[b + 1];
    }
  } else {
    for (; b > c; b--) {
      a[b] = a[b - 1];
    }
  }
  a[c] = h;
}
n.append = function(a, b, c) {
  let e;
  "number" === typeof b ? (c = 0 > b ? this.length + b : b, b = null, e = 1) : "number" === typeof c && (0 > c && (c += this.length), e = 1);
  const h = a.length;
  for (let k = 0; k < h; k++) {
    this.add(a[k], b, e ? c++ : null);
  }
  return this;
};
n.clear = function() {
  this.length && this.remove(0, this.length);
  return this;
};
n.remove = function(a, b) {
  let c = this.length;
  c && a && ("number" !== typeof a ? a = this.index(a) : 0 > a && (a = c + a));
  if (!c || a >= c) {
    return this;
  }
  b ? 0 > b && (a -= b + 1, 0 > a && (a = 0), b *= -1) : b = 1;
  !a && b >= c ? (a = this.g, b = a.length, this.root.textContent = "", this.root._mkd = this.g = [], c = 0) : (a = this.g.splice(a, b), c -= b);
  const e = this.pool && !this.key, h = this.key || this.pool;
  this.pool && !0 !== this.pool && b >= this.pool && this.key && this.i.clear();
  for (let k = 0, d; k < b; k++) {
    d = a[e ? b - k - 1 : k], c && d.remove(), h && H(this, d);
  }
  this.length = c;
  return this;
};
n.index = function(a) {
  return this.g.indexOf(a);
};
n.node = function(a) {
  return this.g[a];
};
function H(a, b) {
  if (a.key) {
    var c = b._mkk;
    a.j[c] = null;
  }
  if (a.pool) {
    if (c) {
      a.i.set(c, b), !0 !== a.pool && a.i.size > a.pool && a.i.delete(a.i.keys().next().value);
    } else {
      if (c = a.l.length, !0 === a.pool || c < a.pool) {
        a.l[c] = b;
      }
    }
  }
}
n.flush = function() {
  this.l = [];
  this.i = new Map();
  return this;
};
n.destroy = function() {
  for (let a = 0, b; a < this.inc.length; a++) {
    b = this.inc[a], C[b.name] || b.destroy();
  }
  this.key && (this.root && (this.root._mkl = null), this.j = null);
  this.root && (this.root._mkd = this.root._mki = null);
  this.i = this.l = this.g = this.root = this.tpl = this.apply = this.inc = this.state = this.h = null;
};
D.once = function(a, b, c, e) {
  if (!a) {
    throw Error("Root element is not defined.");
  }
  if (!b) {
    throw Error("Template is not defined.");
  }
  if (c || b.fn) {
    b = new D(b);
    if (c && Array.isArray(c)) {
      for (let h = 0; h < c.length; h++) {
        a.append(b.create(c[h], e, h));
      }
    } else {
      a.append(b.create(c, e));
    }
    b.destroy();
  } else {
    c = z({}, b.tpl, [], "", null, 1), a.append(c);
  }
  return D;
};
D.register = function(a, b) {
  let c, e;
  if ("string" === typeof a) {
    if (c = e = a, a = C[c], a instanceof D || (a = a[0]), !a) {
      throw Error("The template '" + c + "' was not found.");
    }
  } else {
    c = a.name;
  }
  C[c] && (e ? console.info("The template '" + c + "' was replaced by a new definition.") : console.warn("The template '" + c + "' was already registered and is getting overwritten. When this isn't your intention, then please check your template names about uniqueness and collision!"));
  C[c] = [a, b];
  return D;
};
D.unregister = function(a) {
  "object" === typeof a && (a = a.name);
  const b = C[a];
  b && (b instanceof D && b.destroy(), C[a] = null);
  return D;
};
export default D;

