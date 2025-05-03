import * as D from "react";
import X from "react";
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _e(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ue = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function De() {
  if (xe) return ne;
  xe = 1;
  var e = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function t(o, s, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      l = {};
      for (var r in s)
        r !== "key" && (l[r] = s[r]);
    } else l = s;
    return s = l.ref, {
      $$typeof: e,
      type: o,
      key: f,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return ne.Fragment = i, ne.jsx = t, ne.jsxs = t, ne;
}
var ye;
function Oe() {
  return ye || (ye = 1, ue.exports = De()), ue.exports;
}
var x = Oe(), E = "colors", _ = "sizes", m = "space", He = { gap: m, gridGap: m, columnGap: m, gridColumnGap: m, rowGap: m, gridRowGap: m, inset: m, insetBlock: m, insetBlockEnd: m, insetBlockStart: m, insetInline: m, insetInlineEnd: m, insetInlineStart: m, margin: m, marginTop: m, marginRight: m, marginBottom: m, marginLeft: m, marginBlock: m, marginBlockEnd: m, marginBlockStart: m, marginInline: m, marginInlineEnd: m, marginInlineStart: m, padding: m, paddingTop: m, paddingRight: m, paddingBottom: m, paddingLeft: m, paddingBlock: m, paddingBlockEnd: m, paddingBlockStart: m, paddingInline: m, paddingInlineEnd: m, paddingInlineStart: m, top: m, right: m, bottom: m, left: m, scrollMargin: m, scrollMarginTop: m, scrollMarginRight: m, scrollMarginBottom: m, scrollMarginLeft: m, scrollMarginX: m, scrollMarginY: m, scrollMarginBlock: m, scrollMarginBlockEnd: m, scrollMarginBlockStart: m, scrollMarginInline: m, scrollMarginInlineEnd: m, scrollMarginInlineStart: m, scrollPadding: m, scrollPaddingTop: m, scrollPaddingRight: m, scrollPaddingBottom: m, scrollPaddingLeft: m, scrollPaddingX: m, scrollPaddingY: m, scrollPaddingBlock: m, scrollPaddingBlockEnd: m, scrollPaddingBlockStart: m, scrollPaddingInline: m, scrollPaddingInlineEnd: m, scrollPaddingInlineStart: m, fontSize: "fontSizes", background: E, backgroundColor: E, backgroundImage: E, borderImage: E, border: E, borderBlock: E, borderBlockEnd: E, borderBlockStart: E, borderBottom: E, borderBottomColor: E, borderColor: E, borderInline: E, borderInlineEnd: E, borderInlineStart: E, borderLeft: E, borderLeftColor: E, borderRight: E, borderRightColor: E, borderTop: E, borderTopColor: E, caretColor: E, color: E, columnRuleColor: E, fill: E, outline: E, outlineColor: E, stroke: E, textDecorationColor: E, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: _, minBlockSize: _, maxBlockSize: _, inlineSize: _, minInlineSize: _, maxInlineSize: _, width: _, minWidth: _, maxWidth: _, height: _, minHeight: _, maxHeight: _, flexBasis: _, gridTemplateColumns: _, gridTemplateRows: _, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Ge = (e, i) => typeof i == "function" ? { "()": Function.prototype.toString.call(i) } : i, ee = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i, t, ...o) => {
    const s = ((l) => JSON.stringify(l, Ge))(i);
    return s in e ? e[s] : e[s] = t(i, ...o);
  };
}, U = Symbol.for("sxs.internal"), he = (e, i) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)), ve = (e) => {
  for (const i in e) return !0;
  return !1;
}, { hasOwnProperty: qe } = Object.prototype, fe = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase()), Ne = /\s+(?![^()]*\))/, Q = (e) => (i) => e(...typeof i == "string" ? String(i).split(Ne) : [i]), Se = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: Q((e, i) => ({ marginBlockStart: e, marginBlockEnd: i || e })), marginInline: Q((e, i) => ({ marginInlineStart: e, marginInlineEnd: i || e })), maxSize: Q((e, i) => ({ maxBlockSize: e, maxInlineSize: i || e })), minSize: Q((e, i) => ({ minBlockSize: e, minInlineSize: i || e })), paddingBlock: Q((e, i) => ({ paddingBlockStart: e, paddingBlockEnd: i || e })), paddingInline: Q((e, i) => ({ paddingInlineStart: e, paddingInlineEnd: i || e })) }, ge = /([\d.]+)([^]*)/, Ze = (e, i) => e.length ? e.reduce((t, o) => (t.push(...i.map((s) => s.includes("&") ? s.replace(/&/g, /[ +>|~]/.test(o) && /&.*&/.test(s) ? `:is(${o})` : o) : o + " " + s)), t), []) : i, Je = (e, i) => e in Ue && typeof i == "string" ? i.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, o, s, l) => o + (s === "stretch" ? `-moz-available${l};${fe(e)}:${o}-webkit-fill-available` : `-moz-fit-content${l};${fe(e)}:${o}fit-content`) + l) : String(i), Ue = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, N = (e) => e ? e + "-" : "", Pe = (e, i, t) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (o, s, l, f, r) => f == "$" == !!l ? o : (s || f == "--" ? "calc(" : "") + "var(--" + (f === "$" ? N(i) + (r.includes("$") ? "" : N(t)) + r.replace(/\$/g, "-") : r) + ")" + (s || f == "--" ? "*" + (s || "") + (l || "1") + ")" : "")), Ye = /\s*,\s*(?![^()]*\))/, Ve = Object.prototype.toString, K = (e, i, t, o, s) => {
  let l, f, r;
  const u = (y, A, k) => {
    let p, S;
    const I = (j) => {
      for (p in j) {
        const n = p.charCodeAt(0) === 64, a = n && Array.isArray(j[p]) ? j[p] : [j[p]];
        for (S of a) {
          const d = /[A-Z]/.test(v = p) ? v : v.replace(/-[^]/g, (c) => c[1].toUpperCase()), g = typeof S == "object" && S && S.toString === Ve && (!o.utils[d] || !A.length);
          if (d in o.utils && !g) {
            const c = o.utils[d];
            if (c !== f) {
              f = c, I(c(S)), f = null;
              continue;
            }
          } else if (d in Se) {
            const c = Se[d];
            if (c !== r) {
              r = c, I(c(S)), r = null;
              continue;
            }
          }
          if (n && ($ = p.slice(1) in o.media ? "@media " + o.media[p.slice(1)] : p, p = $.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (c, h, w, b, R, C) => {
            const P = ge.test(h), G = 0.0625 * (P ? -1 : 1), [q, V] = P ? [b, h] : [h, b];
            return "(" + (w[0] === "=" ? "" : w[0] === ">" === P ? "max-" : "min-") + q + ":" + (w[0] !== "=" && w.length === 1 ? V.replace(ge, (te, Z, z) => Number(Z) + G * (w === ">" ? 1 : -1) + z) : V) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + q + ":" + (R.length === 1 ? C.replace(ge, (te, Z, z) => Number(Z) + G * (R === ">" ? -1 : 1) + z) : C) : "") + ")";
          })), g) {
            const c = n ? k.concat(p) : [...k], h = n ? [...A] : Ze(A, p.split(Ye));
            l !== void 0 && s(ke(...l)), l = void 0, u(S, h, c);
          } else l === void 0 && (l = [[], A, k]), p = n || p.charCodeAt(0) !== 36 ? p : `--${N(o.prefix)}${p.slice(1).replace(/\$/g, "-")}`, S = g ? S : typeof S == "number" ? S && d in Xe ? String(S) + "px" : String(S) : Pe(Je(d, S ?? ""), o.prefix, o.themeMap[d]), l[0].push(`${n ? `${p} ` : `${fe(p)}:`}${S}`);
        }
      }
      var $, v;
    };
    I(y), l !== void 0 && s(ke(...l)), l = void 0;
  };
  u(e, i, t);
}, ke = (e, i, t) => `${t.map((o) => `${o}{`).join("")}${i.length ? `${i.join(",")}{` : ""}${e.join(";")}${i.length ? "}" : ""}${Array(t.length ? t.length + 1 : 0).join("}")}`, Xe = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, we = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), Y = (e) => ((i) => {
  let t, o = "";
  for (t = Math.abs(i); t > 52; t = t / 52 | 0) o = we(t % 52) + o;
  return we(t % 52) + o;
})(((i, t) => {
  let o = t.length;
  for (; o; ) i = 33 * i ^ t.charCodeAt(--o);
  return i;
})(5381, JSON.stringify(e)) >>> 0), ie = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Qe = (e) => {
  if (e.href && !e.href.startsWith(location.origin)) return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, Ke = (e) => {
  let i;
  const t = () => {
    const { cssRules: s } = i.sheet;
    return [].map.call(s, (l, f) => {
      const { cssText: r } = l;
      let u = "";
      if (r.startsWith("--sxs")) return "";
      if (s[f - 1] && (u = s[f - 1].cssText).startsWith("--sxs")) {
        if (!l.cssRules.length) return "";
        for (const y in i.rules) if (i.rules[y].group === l) return `--sxs{--sxs:${[...i.rules[y].cache].join(" ")}}${r}`;
        return l.cssRules.length ? `${u}${r}` : "";
      }
      return r;
    }).join("");
  }, o = () => {
    if (i) {
      const { rules: r, sheet: u } = i;
      if (!u.deleteRule) {
        for (; Object(Object(u.cssRules)[0]).type === 3; ) u.cssRules.splice(0, 1);
        u.cssRules = [];
      }
      for (const y in r) delete r[y];
    }
    const s = Object(e).styleSheets || [];
    for (const r of s) if (Qe(r)) {
      for (let u = 0, y = r.cssRules; y[u]; ++u) {
        const A = Object(y[u]);
        if (A.type !== 1) continue;
        const k = Object(y[u + 1]);
        if (k.type !== 4) continue;
        ++u;
        const { cssText: p } = A;
        if (!p.startsWith("--sxs")) continue;
        const S = p.slice(14, -3).trim().split(/\s+/), I = ie[S[0]];
        I && (i || (i = { sheet: r, reset: o, rules: {}, toString: t }), i.rules[I] = { group: k, index: u, cache: new Set(S) });
      }
      if (i) break;
    }
    if (!i) {
      const r = (u, y) => ({ type: y, cssRules: [], insertRule(A, k) {
        this.cssRules.splice(k, 0, r(A, { import: 3, undefined: 1 }[(A.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return u === "@media{}" ? `@media{${[].map.call(this.cssRules, (A) => A.cssText).join("")}}` : u;
      } });
      i = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : r("", "text/css"), rules: {}, reset: o, toString: t };
    }
    const { sheet: l, rules: f } = i;
    for (let r = ie.length - 1; r >= 0; --r) {
      const u = ie[r];
      if (!f[u]) {
        const y = ie[r + 1], A = f[y] ? f[y].index : l.cssRules.length;
        l.insertRule("@media{}", A), l.insertRule(`--sxs{--sxs:${r}}`, A), f[u] = { group: l.cssRules[A + 1], index: A, cache: /* @__PURE__ */ new Set([r]) };
      }
      et(f[u]);
    }
  };
  return o(), i;
}, et = (e) => {
  const i = e.group;
  let t = i.cssRules.length;
  e.apply = (o) => {
    try {
      i.insertRule(o, t), ++t;
    } catch {
    }
  };
}, re = Symbol(), tt = ee(), $e = (e, i) => tt(e, () => (...t) => {
  let o = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const s of t) if (s != null) if (s[U]) {
    o.type == null && (o.type = s[U].type);
    for (const l of s[U].composers) o.composers.add(l);
  } else s.constructor !== Object || s.$$typeof ? o.type == null && (o.type = s) : o.composers.add(nt(s, e));
  return o.type == null && (o.type = "span"), o.composers.size || o.composers.add(["PJLV", {}, [], [], {}, []]), rt(e, o, i);
}), nt = ({ variants: e, compoundVariants: i, defaultVariants: t, ...o }, s) => {
  const l = `${N(s.prefix)}c-${Y(o)}`, f = [], r = [], u = /* @__PURE__ */ Object.create(null), y = [];
  for (const p in t) u[p] = String(t[p]);
  if (typeof e == "object" && e) for (const p in e) {
    A = u, k = p, qe.call(A, k) || (u[p] = "undefined");
    const S = e[p];
    for (const I in S) {
      const j = { [p]: String(I) };
      String(I) === "undefined" && y.push(p);
      const $ = S[I], v = [j, $, !ve($)];
      f.push(v);
    }
  }
  var A, k;
  if (typeof i == "object" && i) for (const p of i) {
    let { css: S, ...I } = p;
    S = typeof S == "object" && S || {};
    for (const $ in I) I[$] = String(I[$]);
    const j = [I, S, !ve(S)];
    r.push(j);
  }
  return [l, o, f, r, u, y];
}, rt = (e, i, t) => {
  const [o, s, l, f] = it(i.composers), r = typeof i.type == "function" || i.type.$$typeof ? ((k) => {
    function p() {
      for (let S = 0; S < p[re].length; S++) {
        const [I, j] = p[re][S];
        k.rules[I].apply(j);
      }
      return p[re] = [], null;
    }
    return p[re] = [], p.rules = {}, ie.forEach((S) => p.rules[S] = { apply: (I) => p[re].push([S, I]) }), p;
  })(t) : null, u = (r || t).rules, y = `.${o}${s.length > 1 ? `:where(.${s.slice(1).join(".")})` : ""}`, A = (k) => {
    k = typeof k == "object" && k || ot;
    const { css: p, ...S } = k, I = {};
    for (const v in l) if (delete S[v], v in k) {
      let n = k[v];
      typeof n == "object" && n ? I[v] = { "@initial": l[v], ...n } : (n = String(n), I[v] = n !== "undefined" || f.has(v) ? n : l[v]);
    } else I[v] = l[v];
    const j = /* @__PURE__ */ new Set([...s]);
    for (const [v, n, a, d] of i.composers) {
      t.rules.styled.cache.has(v) || (t.rules.styled.cache.add(v), K(n, [`.${v}`], [], e, (h) => {
        u.styled.apply(h);
      }));
      const g = Fe(a, I, e.media), c = Fe(d, I, e.media, !0);
      for (const h of g) if (h !== void 0) for (const [w, b, R] of h) {
        const C = `${v}-${Y(b)}-${w}`;
        j.add(C);
        const P = (R ? t.rules.resonevar : t.rules.onevar).cache, G = R ? u.resonevar : u.onevar;
        P.has(C) || (P.add(C), K(b, [`.${C}`], [], e, (q) => {
          G.apply(q);
        }));
      }
      for (const h of c) if (h !== void 0) for (const [w, b] of h) {
        const R = `${v}-${Y(b)}-${w}`;
        j.add(R), t.rules.allvar.cache.has(R) || (t.rules.allvar.cache.add(R), K(b, [`.${R}`], [], e, (C) => {
          u.allvar.apply(C);
        }));
      }
    }
    if (typeof p == "object" && p) {
      const v = `${o}-i${Y(p)}-css`;
      j.add(v), t.rules.inline.cache.has(v) || (t.rules.inline.cache.add(v), K(p, [`.${v}`], [], e, (n) => {
        u.inline.apply(n);
      }));
    }
    for (const v of String(k.className || "").trim().split(/\s+/)) v && j.add(v);
    const $ = S.className = [...j].join(" ");
    return { type: i.type, className: $, selector: y, props: S, toString: () => $, deferredInjector: r };
  };
  return he(A, { className: o, selector: y, [U]: i, toString: () => (t.rules.styled.cache.has(o) || A(), o) });
}, it = (e) => {
  let i = "";
  const t = [], o = {}, s = [];
  for (const [l, , , , f, r] of e) {
    i === "" && (i = l), t.push(l), s.push(...r);
    for (const u in f) {
      const y = f[u];
      (o[u] === void 0 || y !== "undefined" || r.includes(y)) && (o[u] = y);
    }
  }
  return [i, t, o, new Set(s)];
}, Fe = (e, i, t, o) => {
  const s = [];
  e: for (let [l, f, r] of e) {
    if (r) continue;
    let u, y = 0, A = !1;
    for (u in l) {
      const k = l[u];
      let p = i[u];
      if (p !== k) {
        if (typeof p != "object" || !p) continue e;
        {
          let S, I, j = 0;
          for (const $ in p) {
            if (k === String(p[$])) {
              if ($ !== "@initial") {
                const v = $.slice(1);
                (I = I || []).push(v in t ? t[v] : $.replace(/^@media ?/, "")), A = !0;
              }
              y += j, S = !0;
            }
            ++j;
          }
          if (I && I.length && (f = { ["@media " + I.join(", ")]: f }), !S) continue e;
        }
      }
    }
    (s[y] = s[y] || []).push([o ? "cv" : `${u}-${l[u]}`, f, A]);
  }
  return s;
}, ot = {}, at = ee(), st = (e, i) => at(e, () => (...t) => {
  const o = () => {
    for (let s of t) {
      s = typeof s == "object" && s || {};
      let l = Y(s);
      if (!i.rules.global.cache.has(l)) {
        if (i.rules.global.cache.add(l), "@import" in s) {
          let f = [].indexOf.call(i.sheet.cssRules, i.rules.themed.group) - 1;
          for (let r of [].concat(s["@import"])) r = r.includes('"') || r.includes("'") ? r : `"${r}"`, i.sheet.insertRule(`@import ${r};`, f++);
          delete s["@import"];
        }
        K(s, [], [], e, (f) => {
          i.rules.global.apply(f);
        });
      }
    }
    return "";
  };
  return he(o, { toString: o });
}), lt = ee(), dt = (e, i) => lt(e, () => (t) => {
  const o = `${N(e.prefix)}k-${Y(t)}`, s = () => {
    if (!i.rules.global.cache.has(o)) {
      i.rules.global.cache.add(o);
      const l = [];
      K(t, [], [], e, (r) => l.push(r));
      const f = `@keyframes ${o}{${l.join("")}}`;
      i.rules.global.apply(f);
    }
    return o;
  };
  return he(s, { get name() {
    return s();
  }, toString: s });
}), ct = class {
  constructor(e, i, t, o) {
    this.token = e == null ? "" : String(e), this.value = i == null ? "" : String(i), this.scale = t == null ? "" : String(t), this.prefix = o == null ? "" : String(o);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + N(this.prefix) + N(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, ut = ee(), gt = (e, i) => ut(e, () => (t, o) => {
  o = typeof t == "object" && t || Object(o);
  const s = `.${t = (t = typeof t == "string" ? t : "") || `${N(e.prefix)}t-${Y(o)}`}`, l = {}, f = [];
  for (const u in o) {
    l[u] = {};
    for (const y in o[u]) {
      const A = `--${N(e.prefix)}${u}-${y}`, k = Pe(String(o[u][y]), e.prefix, u);
      l[u][y] = new ct(y, k, u, e.prefix), f.push(`${A}:${k}`);
    }
  }
  const r = () => {
    if (f.length && !i.rules.themed.cache.has(t)) {
      i.rules.themed.cache.add(t);
      const u = `${o === e.theme ? ":root," : ""}.${t}{${f.join(";")}}`;
      i.rules.themed.apply(u);
    }
    return t;
  };
  return { ...l, get className() {
    return r();
  }, selector: s, toString: r };
}), pt = ee(), ft = ee(), ht = (e) => {
  const i = ((t) => {
    let o = !1;
    const s = pt(t, (l) => {
      o = !0;
      const f = "prefix" in (l = typeof l == "object" && l || {}) ? String(l.prefix) : "", r = typeof l.media == "object" && l.media || {}, u = typeof l.root == "object" ? l.root || null : globalThis.document || null, y = typeof l.theme == "object" && l.theme || {}, A = { prefix: f, media: r, theme: y, themeMap: typeof l.themeMap == "object" && l.themeMap || { ...He }, utils: typeof l.utils == "object" && l.utils || {} }, k = Ke(u), p = { css: $e(A, k), globalCss: st(A, k), keyframes: dt(A, k), createTheme: gt(A, k), reset() {
        k.reset(), p.theme.toString();
      }, theme: {}, sheet: k, config: A, prefix: f, getCssText: k.toString, toString: k.toString };
      return String(p.theme = p.createTheme(y)), p;
    });
    return o || s.reset(), s;
  })(e);
  return i.styled = (({ config: t, sheet: o }) => ft(t, () => {
    const s = $e(t, o);
    return (...l) => {
      const f = s(...l), r = f[U].type, u = X.forwardRef((y, A) => {
        const k = y && y.as || r, { props: p, deferredInjector: S } = f(y);
        return delete p.as, p.ref = A, S ? X.createElement(X.Fragment, null, X.createElement(k, p), X.createElement(S, null)) : X.createElement(k, p);
      });
      return u.className = f.className, u.displayName = `Styled.${r.displayName || r.name || r}`, u.selector = f.selector, u.toString = () => f.selector, u[U] = f[U], u;
    };
  }))(i), i;
};
const { styled: T, css: Lt, globalCss: _t, theme: Dt } = ht({
  theme: {
    colors: {
      primary: "#3b82f6",
      secondary: "#d4d5d9",
      background: "#fff",
      text: "#111827",
      panel: "#f3f4f6",
      border: "#e5e7eb"
    },
    radii: {
      md: "8px",
      full: "9999px"
    }
  }
});
var pe = { exports: {} }, Ae;
function mt() {
  return Ae || (Ae = 1, function(e) {
    var i = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var t = function(o) {
      var s = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, l = 0, f = {}, r = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: o.Prism && o.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: o.Prism && o.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function n(a) {
            return a instanceof u ? new u(a.type, n(a.content), a.alias) : Array.isArray(a) ? a.map(n) : a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(n) {
            return Object.prototype.toString.call(n).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(n) {
            return n.__id || Object.defineProperty(n, "__id", { value: ++l }), n.__id;
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function n(a, d) {
            d = d || {};
            var g, c;
            switch (r.util.type(a)) {
              case "Object":
                if (c = r.util.objId(a), d[c])
                  return d[c];
                g = /** @type {Record<string, any>} */
                {}, d[c] = g;
                for (var h in a)
                  a.hasOwnProperty(h) && (g[h] = n(a[h], d));
                return (
                  /** @type {any} */
                  g
                );
              case "Array":
                return c = r.util.objId(a), d[c] ? d[c] : (g = [], d[c] = g, /** @type {Array} */
                /** @type {any} */
                a.forEach(function(w, b) {
                  g[b] = n(w, d);
                }), /** @type {any} */
                g);
              default:
                return a;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(n) {
            for (; n; ) {
              var a = s.exec(n.className);
              if (a)
                return a[1].toLowerCase();
              n = n.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(n, a) {
            n.className = n.className.replace(RegExp(s, "gi"), ""), n.classList.add("language-" + a);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document > "u")
              return null;
            if (document.currentScript && document.currentScript.tagName === "SCRIPT")
              return (
                /** @type {any} */
                document.currentScript
              );
            try {
              throw new Error();
            } catch (g) {
              var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack) || [])[1];
              if (n) {
                var a = document.getElementsByTagName("script");
                for (var d in a)
                  if (a[d].src == n)
                    return a[d];
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(n, a, d) {
            for (var g = "no-" + a; n; ) {
              var c = n.classList;
              if (c.contains(a))
                return !0;
              if (c.contains(g))
                return !1;
              n = n.parentElement;
            }
            return !!d;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: f,
          plaintext: f,
          text: f,
          txt: f,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(n, a) {
            var d = r.util.clone(r.languages[n]);
            for (var g in a)
              d[g] = a[g];
            return d;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(n, a, d, g) {
            g = g || /** @type {any} */
            r.languages;
            var c = g[n], h = {};
            for (var w in c)
              if (c.hasOwnProperty(w)) {
                if (w == a)
                  for (var b in d)
                    d.hasOwnProperty(b) && (h[b] = d[b]);
                d.hasOwnProperty(w) || (h[w] = c[w]);
              }
            var R = g[n];
            return g[n] = h, r.languages.DFS(r.languages, function(C, P) {
              P === R && C != n && (this[C] = h);
            }), h;
          },
          // Traverse a language definition with Depth First Search
          DFS: function n(a, d, g, c) {
            c = c || {};
            var h = r.util.objId;
            for (var w in a)
              if (a.hasOwnProperty(w)) {
                d.call(a, w, a[w], g || w);
                var b = a[w], R = r.util.type(b);
                R === "Object" && !c[h(b)] ? (c[h(b)] = !0, n(b, d, null, c)) : R === "Array" && !c[h(b)] && (c[h(b)] = !0, n(b, d, w, c));
              }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(n, a) {
          r.highlightAllUnder(document, n, a);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(n, a, d) {
          var g = {
            callback: d,
            container: n,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          r.hooks.run("before-highlightall", g), g.elements = Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)), r.hooks.run("before-all-elements-highlight", g);
          for (var c = 0, h; h = g.elements[c++]; )
            r.highlightElement(h, a === !0, g.callback);
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(n, a, d) {
          var g = r.util.getLanguage(n), c = r.languages[g];
          r.util.setLanguage(n, g);
          var h = n.parentElement;
          h && h.nodeName.toLowerCase() === "pre" && r.util.setLanguage(h, g);
          var w = n.textContent, b = {
            element: n,
            language: g,
            grammar: c,
            code: w
          };
          function R(P) {
            b.highlightedCode = P, r.hooks.run("before-insert", b), b.element.innerHTML = b.highlightedCode, r.hooks.run("after-highlight", b), r.hooks.run("complete", b), d && d.call(b.element);
          }
          if (r.hooks.run("before-sanity-check", b), h = b.element.parentElement, h && h.nodeName.toLowerCase() === "pre" && !h.hasAttribute("tabindex") && h.setAttribute("tabindex", "0"), !b.code) {
            r.hooks.run("complete", b), d && d.call(b.element);
            return;
          }
          if (r.hooks.run("before-highlight", b), !b.grammar) {
            R(r.util.encode(b.code));
            return;
          }
          if (a && o.Worker) {
            var C = new Worker(r.filename);
            C.onmessage = function(P) {
              R(P.data);
            }, C.postMessage(JSON.stringify({
              language: b.language,
              code: b.code,
              immediateClose: !0
            }));
          } else
            R(r.highlight(b.code, b.grammar, b.language));
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(n, a, d) {
          var g = {
            code: n,
            grammar: a,
            language: d
          };
          if (r.hooks.run("before-tokenize", g), !g.grammar)
            throw new Error('The language "' + g.language + '" has no grammar.');
          return g.tokens = r.tokenize(g.code, g.grammar), r.hooks.run("after-tokenize", g), u.stringify(r.util.encode(g.tokens), g.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(n, a) {
          var d = a.rest;
          if (d) {
            for (var g in d)
              a[g] = d[g];
            delete a.rest;
          }
          var c = new k();
          return p(c, c.head, n), A(n, c, a, c.head, 0), I(c);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(n, a) {
            var d = r.hooks.all;
            d[n] = d[n] || [], d[n].push(a);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(n, a) {
            var d = r.hooks.all[n];
            if (!(!d || !d.length))
              for (var g = 0, c; c = d[g++]; )
                c(a);
          }
        },
        Token: u
      };
      o.Prism = r;
      function u(n, a, d, g) {
        this.type = n, this.content = a, this.alias = d, this.length = (g || "").length | 0;
      }
      u.stringify = function n(a, d) {
        if (typeof a == "string")
          return a;
        if (Array.isArray(a)) {
          var g = "";
          return a.forEach(function(R) {
            g += n(R, d);
          }), g;
        }
        var c = {
          type: a.type,
          content: n(a.content, d),
          tag: "span",
          classes: ["token", a.type],
          attributes: {},
          language: d
        }, h = a.alias;
        h && (Array.isArray(h) ? Array.prototype.push.apply(c.classes, h) : c.classes.push(h)), r.hooks.run("wrap", c);
        var w = "";
        for (var b in c.attributes)
          w += " " + b + '="' + (c.attributes[b] || "").replace(/"/g, "&quot;") + '"';
        return "<" + c.tag + ' class="' + c.classes.join(" ") + '"' + w + ">" + c.content + "</" + c.tag + ">";
      };
      function y(n, a, d, g) {
        n.lastIndex = a;
        var c = n.exec(d);
        if (c && g && c[1]) {
          var h = c[1].length;
          c.index += h, c[0] = c[0].slice(h);
        }
        return c;
      }
      function A(n, a, d, g, c, h) {
        for (var w in d)
          if (!(!d.hasOwnProperty(w) || !d[w])) {
            var b = d[w];
            b = Array.isArray(b) ? b : [b];
            for (var R = 0; R < b.length; ++R) {
              if (h && h.cause == w + "," + R)
                return;
              var C = b[R], P = C.inside, G = !!C.lookbehind, q = !!C.greedy, V = C.alias;
              if (q && !C.pattern.global) {
                var te = C.pattern.toString().match(/[imsuy]*$/)[0];
                C.pattern = RegExp(C.pattern.source, te + "g");
              }
              for (var Z = C.pattern || C, z = g.next, O = c; z !== a.tail && !(h && O >= h.reach); O += z.value.length, z = z.next) {
                var J = z.value;
                if (a.length > n.length)
                  return;
                if (!(J instanceof u)) {
                  var F = 1, M;
                  if (q) {
                    if (M = y(Z, O, n, G), !M || M.index >= n.length)
                      break;
                    var L = M.index, H = M.index + M[0].length, W = O;
                    for (W += z.value.length; L >= W; )
                      z = z.next, W += z.value.length;
                    if (W -= z.value.length, O = W, z.value instanceof u)
                      continue;
                    for (var B = z; B !== a.tail && (W < H || typeof B.value == "string"); B = B.next)
                      F++, W += B.value.length;
                    F--, J = n.slice(O, W), M.index -= O;
                  } else if (M = y(Z, 0, J, G), !M)
                    continue;
                  var L = M.index, oe = M[0], le = J.slice(0, L), me = J.slice(L + oe.length), de = O + J.length;
                  h && de > h.reach && (h.reach = de);
                  var ae = z.prev;
                  le && (ae = p(a, ae, le), O += le.length), S(a, ae, F);
                  var Le = new u(w, P ? r.tokenize(oe, P) : oe, V, oe);
                  if (z = p(a, ae, Le), me && p(a, z, me), F > 1) {
                    var ce = {
                      cause: w + "," + R,
                      reach: de
                    };
                    A(n, a, d, z.prev, O, ce), h && ce.reach > h.reach && (h.reach = ce.reach);
                  }
                }
              }
            }
          }
      }
      function k() {
        var n = { value: null, prev: null, next: null }, a = { value: null, prev: n, next: null };
        n.next = a, this.head = n, this.tail = a, this.length = 0;
      }
      function p(n, a, d) {
        var g = a.next, c = { value: d, prev: a, next: g };
        return a.next = c, g.prev = c, n.length++, c;
      }
      function S(n, a, d) {
        for (var g = a.next, c = 0; c < d && g !== n.tail; c++)
          g = g.next;
        a.next = g, g.prev = a, n.length -= c;
      }
      function I(n) {
        for (var a = [], d = n.head.next; d !== n.tail; )
          a.push(d.value), d = d.next;
        return a;
      }
      if (!o.document)
        return o.addEventListener && (r.disableWorkerMessageHandler || o.addEventListener("message", function(n) {
          var a = JSON.parse(n.data), d = a.language, g = a.code, c = a.immediateClose;
          o.postMessage(r.highlight(g, r.languages[d], d)), c && o.close();
        }, !1)), r;
      var j = r.util.currentScript();
      j && (r.filename = j.src, j.hasAttribute("data-manual") && (r.manual = !0));
      function $() {
        r.manual || r.highlightAll();
      }
      if (!r.manual) {
        var v = document.readyState;
        v === "loading" || v === "interactive" && j && j.defer ? document.addEventListener("DOMContentLoaded", $) : window.requestAnimationFrame ? window.requestAnimationFrame($) : window.setTimeout($, 16);
      }
      return r;
    }(i);
    e.exports && (e.exports = t), typeof be < "u" && (be.Prism = t), t.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: !0
                }
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(o) {
      o.type === "entity" && (o.attributes.title = o.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function(s, l) {
        var f = {};
        f["language-" + l] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: t.languages[l]
        }, f.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var r = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: f
          }
        };
        r["language-" + l] = {
          pattern: /[\s\S]+/,
          inside: t.languages[l]
        };
        var u = {};
        u[s] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return s;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: r
        }, t.languages.insertBefore("markup", "cdata", u);
      }
    }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function(o, s) {
        t.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + o + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [s, "language-" + s],
                  inside: t.languages[s]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(o) {
      var s = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      o.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + s.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + s.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + s.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + s.source + ")*(?=\\s*\\{)"),
          lookbehind: !0
        },
        string: {
          pattern: s,
          greedy: !0
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0
        },
        punctuation: /[(){};:,]/
      }, o.languages.css.atrule.inside.rest = o.languages.css;
      var l = o.languages.markup;
      l && (l.tag.addInlined("style", "css"), l.tag.addAttribute("style", "css"));
    }(t), t.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    }, t.languages.javascript = t.languages.extend("clike", {
      "class-name": [
        t.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: !0
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: t.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: t.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: t.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: t.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: t.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), t.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: t.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
      }
    }), t.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
      }
    }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), t.languages.js = t.languages.javascript, function() {
      if (typeof t > "u" || typeof document > "u")
        return;
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var o = "Loading…", s = function(j, $) {
        return "✖ Error " + j + " while fetching file: " + $;
      }, l = "✖ Error: File does not exist or is empty", f = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      }, r = "data-src-status", u = "loading", y = "loaded", A = "failed", k = "pre[data-src]:not([" + r + '="' + y + '"]):not([' + r + '="' + u + '"])';
      function p(j, $, v) {
        var n = new XMLHttpRequest();
        n.open("GET", j, !0), n.onreadystatechange = function() {
          n.readyState == 4 && (n.status < 400 && n.responseText ? $(n.responseText) : n.status >= 400 ? v(s(n.status, n.statusText)) : v(l));
        }, n.send(null);
      }
      function S(j) {
        var $ = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(j || "");
        if ($) {
          var v = Number($[1]), n = $[2], a = $[3];
          return n ? a ? [v, Number(a)] : [v, void 0] : [v, v];
        }
      }
      t.hooks.add("before-highlightall", function(j) {
        j.selector += ", " + k;
      }), t.hooks.add("before-sanity-check", function(j) {
        var $ = (
          /** @type {HTMLPreElement} */
          j.element
        );
        if ($.matches(k)) {
          j.code = "", $.setAttribute(r, u);
          var v = $.appendChild(document.createElement("CODE"));
          v.textContent = o;
          var n = $.getAttribute("data-src"), a = j.language;
          if (a === "none") {
            var d = (/\.(\w+)$/.exec(n) || [, "none"])[1];
            a = f[d] || d;
          }
          t.util.setLanguage(v, a), t.util.setLanguage($, a);
          var g = t.plugins.autoloader;
          g && g.loadLanguages(a), p(
            n,
            function(c) {
              $.setAttribute(r, y);
              var h = S($.getAttribute("data-range"));
              if (h) {
                var w = c.split(/\r\n?|\n/g), b = h[0], R = h[1] == null ? w.length : h[1];
                b < 0 && (b += w.length), b = Math.max(0, Math.min(b - 1, w.length)), R < 0 && (R += w.length), R = Math.max(0, Math.min(R, w.length)), c = w.slice(b, R).join(`
`), $.hasAttribute("data-start") || $.setAttribute("data-start", String(b + 1));
              }
              v.textContent = c, t.highlightElement(v);
            },
            function(c) {
              $.setAttribute(r, A), v.textContent = c;
            }
          );
        }
      }), t.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function($) {
          for (var v = ($ || document).querySelectorAll(k), n = 0, a; a = v[n++]; )
            t.highlightElement(a);
        }
      };
      var I = !1;
      t.fileHighlight = function() {
        I || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), I = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }();
  }(pe)), pe.exports;
}
var bt = mt();
const je = /* @__PURE__ */ _e(bt);
var Re = {}, Ie;
function xt() {
  return Ie || (Ie = 1, function(e) {
    e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
    var i = e.languages.extend("typescript", {});
    delete i["class-name"], e.languages.typescript["class-name"].inside = i, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: i } } } }), e.languages.ts = e.languages.typescript;
  }(Prism)), Re;
}
xt();
const yt = T("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "2rem 0"
}), vt = T("div", {
  display: "flex",
  width: "100%",
  maxWidth: 1400,
  minHeight: "80vh",
  background: "none",
  boxShadow: "none",
  border: "1px solid",
  borderRadius: "1rem",
  overflow: "hidden",
  variants: {
    borderColor: {
      default: {
        borderColor: "#e5e7eb"
      }
    }
  },
  defaultVariants: {
    borderColor: "default"
  }
}), St = T("div", {
  width: 340,
  flexShrink: 0,
  overflowY: "auto",
  backgroundColor: "$panel",
  borderRight: "1.5px solid $border",
  boxShadow: "2px 0 16px rgba(59,130,246,0.04)",
  borderRadius: "1rem 0 0 1rem",
  display: "flex",
  flexDirection: "column",
  minHeight: "600px",
  position: "relative"
}), kt = T("div", {
  padding: "0.8rem 1.5rem 3.5rem",
  flex: 1,
  display: "flex",
  flexDirection: "column"
}), wt = T("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  borderRadius: "0 1rem 1rem 0",
  boxShadow: "0 2px 24px rgba(59,130,246,0.08)",
  minWidth: 0,
  minHeight: "600px",
  position: "relative"
}), $t = T("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0.7rem 1.2rem 0.7rem 1.2rem",
  borderBottom: "1px solid $border",
  fontWeight: 600,
  fontSize: "1.08rem",
  position: "relative",
  background: "#fff",
  borderTopRightRadius: "1rem"
}), Ft = T("button", {
  position: "absolute",
  left: "2rem",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  color: "#222",
  fontSize: "1.25rem",
  outline: "none",
  boxShadow: "none",
  "&:focus": {
    outline: "none",
    boxShadow: "none",
    border: "none"
  }
}), At = T("div", {
  flex: 1,
  overflowY: "auto",
  maxHeight: "60vh",
  padding: "2rem 2rem 1rem 2rem",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
}), jt = T("form", {
  display: "flex",
  gap: "0.5rem",
  padding: "1.25rem 2rem",
  borderTop: "1px solid $border",
  background: "#fff",
  borderBottomRightRadius: "1rem"
}), Rt = T("input", {
  flex: 1,
  padding: "0.75rem 1rem",
  border: "1px solid $border",
  borderRadius: "0.375rem",
  fontSize: "1.05rem"
}), It = T("button", {
  padding: "0.75rem 1.5rem",
  backgroundColor: "$primary",
  color: "#fff",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "1.05rem",
  boxShadow: "0 1px 4px rgba(59,130,246,0.06)",
  transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.1s",
  "&:hover": {
    backgroundColor: "#2563eb"
  },
  "&:focus": {
    outline: "none",
    boxShadow: "none",
    border: "none"
  },
  "&:active": {
    outline: "none",
    boxShadow: "none",
    border: "none"
  }
}), Ct = T("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  color: "#6b7280",
  margin: "0.5rem 0",
  maxWidth: "80%",
  alignSelf: "flex-start",
  "&::after": {
    content: "",
    width: "1rem",
    height: "1rem",
    border: "2px solid #e5e7eb",
    borderTopColor: "#3b82f6",
    borderRightColor: "#3b82f6",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite"
  }
}), Et = T("style", {
  "@global": {
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" }
    }
  }
}), Bt = T("div", {
  display: "flex",
  borderBottom: "1.5px solid $border",
  marginBottom: "0.7rem",
  width: "100%",
  minHeight: 0
}), Ce = T("button", {
  flex: 1,
  padding: "0.3rem 1rem 0.5rem 1rem",
  fontSize: "1.02rem",
  fontWeight: 600,
  color: "#222",
  background: "none",
  border: "none",
  borderBottom: "2px solid transparent",
  borderRadius: 0,
  cursor: "pointer",
  transition: "color 0.2s, border-bottom 0.2s",
  letterSpacing: "0.01em",
  outline: "none",
  boxShadow: "none",
  "&:focus": {
    outline: "none",
    boxShadow: "none",
    border: "none"
  },
  "&:active": {
    outline: "none",
    boxShadow: "none",
    border: "none"
  },
  "&.active": {
    color: "$primary",
    borderBottom: "2px solid $primary",
    borderRadius: 0
  }
}), Ee = T("div", {
  fontWeight: 500,
  marginBottom: "0.25rem",
  color: "#444",
  fontSize: "1.01rem"
}), se = T("div", {
  marginBottom: "0.6rem",
  display: "flex",
  flexDirection: "column"
}), Tt = T("div", {
  position: "relative",
  width: "100%"
}), zt = T("input", {
  width: "100%",
  padding: "0.5rem 1rem",
  borderRadius: 8,
  border: "1.5px solid $border",
  fontSize: "0.95rem",
  color: "#444",
  background: "#fff",
  outline: "none",
  fontWeight: 100,
  transition: "border 0.2s",
  textAlign: "left",
  boxSizing: "border-box",
  "&:focus": {
    border: "1.5px solid $primary"
  }
}), Wt = T("div", {
  position: "absolute",
  top: "110%",
  left: 0,
  right: 0,
  background: "#fff",
  border: "0.95px solid $border",
  borderRadius: 8,
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  zIndex: 10,
  maxHeight: 180,
  overflowY: "auto"
}), Mt = T("div", {
  padding: "0.2rem 1rem",
  cursor: "pointer",
  color: "#000",
  fontWeight: 100,
  fontSize: "0.95rem",
  "&:hover": {
    background: "$panel"
  }
}), Be = T("input", {
  width: "100%",
  padding: "0.5rem 1rem",
  borderRadius: 8,
  border: "1.5px solid $border",
  fontSize: "0.95rem",
  color: "#444",
  background: "#fff",
  outline: "none",
  fontWeight: 500,
  transition: "border 0.2s",
  boxSizing: "border-box",
  "&:focus": {
    border: "1.5px solid $primary"
  }
}), Te = T("div", {
  maxHeight: "180px",
  overflowY: "auto"
}), ze = T("div", {
  fontWeight: 200,
  color: "#222",
  cursor: "pointer",
  padding: "0.2rem",
  borderRadius: 7,
  fontSize: "0.95rem",
  transition: "background 0.2s",
  "&:hover": {
    background: "$secondary",
    color: "#000"
  }
});
function We({ options: e, value: i, onChange: t, placeholder: o }) {
  const [s, l] = D.useState(!1), [f, r] = D.useState(""), u = e.filter((y) => y.toLowerCase().includes(f.toLowerCase()));
  return /* @__PURE__ */ x.jsxs(Tt, { children: [
    /* @__PURE__ */ x.jsx(
      zt,
      {
        placeholder: o,
        value: i || f,
        onFocus: () => l(!0),
        onChange: (y) => {
          r(y.target.value), t("");
        },
        onBlur: () => setTimeout(() => l(!1), 100),
        readOnly: !!i
      }
    ),
    s && u.length > 0 && /* @__PURE__ */ x.jsx(Wt, { children: u.map((y) => /* @__PURE__ */ x.jsx(
      Mt,
      {
        onMouseDown: () => {
          t(y), r(""), l(!1);
        },
        children: y
      },
      y
    )) })
  ] });
}
async function* Me() {
  const e = [
    "function add(a: number, b: number): number {",
    `
  return a + b;`,
    `
}`
  ];
  for (const i of e)
    await new Promise((t) => setTimeout(t, 2e3)), yield i;
}
const Ot = ({
  initialMessage: e = "Hello! I'm your AI assistant. How can I help you today? Ask me to show you some code examples!",
  promptValue: i = "",
  sendButtonColor: t = "#2563eb",
  userBubbleColor: o = "#3b82f6",
  height: s = "80vh",
  width: l = "100%",
  borderColor: f = "#e5e7eb"
}) => {
  const [r, u] = D.useState("methods"), [y, A] = D.useState(""), [k, p] = D.useState(""), [S, I] = D.useState(""), [j, $] = D.useState(""), [v, n] = D.useState([
    { id: 1, role: "assistant", content: e }
  ]), [a, d] = D.useState(i), [g, c] = D.useState(!0), [h, w] = D.useState(null), [b, R] = D.useState(!1), C = D.useRef(null), P = D.useRef(null), G = ["Python", "JavaScript", "TypeScript", "Go", "Java"], q = [
    "Create an account and get all vendor"
    // Add more workflows as needed
  ], V = [
    "Generate code",
    "Analyze code",
    "Refactor code"
    // Add more methods as needed
  ], te = () => {
    const F = P.current;
    F && (F.scrollTop = F.scrollHeight);
  };
  D.useEffect(() => {
    te();
  }, [v]);
  const Z = async (F) => {
    if (F.preventDefault(), !a.trim()) return;
    const M = { id: Date.now(), role: "user", content: a }, H = M.id + 1;
    n((W) => [
      ...W,
      M,
      { id: H, role: "assistant", content: "```typescript\n" }
    ]), d(""), R(!0), (async () => {
      for await (const W of Me())
        n(
          (B) => B.map(
            (L) => L.id === H && L.role === "assistant" ? { ...L, content: L.content + W } : L
          )
        );
      n(
        (W) => W.map(
          (B) => B.id === H && B.role === "assistant" ? { ...B, content: B.content + "\n```" } : B
        )
      ), R(!1);
    })();
  }, z = (F) => {
    const M = { id: Date.now(), role: "user", content: F }, H = M.id + 1;
    n((W) => [
      ...W,
      M,
      { id: H, role: "assistant", content: "```typescript\n" }
    ]), R(!0), (async () => {
      for await (const W of Me())
        n(
          (B) => B.map(
            (L) => L.id === H && L.role === "assistant" ? { ...L, content: L.content + W } : L
          )
        );
      n(
        (W) => W.map(
          (B) => B.id === H && B.role === "assistant" ? { ...B, content: B.content + "\n```" } : B
        )
      ), R(!1);
    })();
  };
  function O(F) {
    if (F.content.includes("```typescript")) {
      const M = F.content.match(/```typescript\n([\s\S]*?)```/);
      if (M) {
        const H = M[1].replace(/\u00A0/g, " "), W = je.highlight(H, je.languages.typescript, "typescript");
        return /* @__PURE__ */ x.jsxs("div", { style: { position: "relative", background: "#23272f", color: "#f8f8f2", borderRadius: 8, padding: "1rem", margin: "1rem 0" }, children: [
          /* @__PURE__ */ x.jsx("span", { style: {
            position: "absolute",
            top: 8,
            left: 16,
            color: "#fff",
            background: "#3b3b3b",
            fontSize: "0.75em",
            padding: "0.1em 0.7em",
            borderRadius: 4,
            zIndex: 2,
            fontWeight: 600,
            letterSpacing: "0.04em",
            pointerEvents: "none"
          }, children: "TypeScript" }),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              onClick: () => {
                navigator.clipboard.writeText(H), w(F.id), setTimeout(() => w(null), 1200);
              },
              style: {
                position: "absolute",
                top: 8,
                right: 8,
                background: "#23272f",
                border: "1px solid #444",
                borderRadius: 4,
                padding: "0.1rem 0.5rem",
                fontSize: "0.8em",
                cursor: "pointer",
                zIndex: 2,
                outline: "none",
                boxShadow: "none",
                color: "#f8f8f2",
                transition: "background 0.2s, border-color 0.2s"
              },
              onMouseEnter: (B) => {
                B.currentTarget.style.background = "#2d333b", B.currentTarget.style.borderColor = "#555";
              },
              onMouseLeave: (B) => {
                B.currentTarget.style.background = "#23272f", B.currentTarget.style.borderColor = "#444";
              },
              children: h === F.id ? "Copied!" : "Copy"
            }
          ),
          /* @__PURE__ */ x.jsx("div", { style: { height: 32 } }),
          /* @__PURE__ */ x.jsx("hr", { style: { border: 0, borderTop: "1px solid #444", margin: "0 0 1rem 0" } }),
          /* @__PURE__ */ x.jsx("pre", { className: "language-typescript", style: { margin: 0 }, children: /* @__PURE__ */ x.jsx("code", { className: "language-typescript", dangerouslySetInnerHTML: { __html: W } }) })
        ] });
      }
    }
    return /* @__PURE__ */ x.jsx("div", { style: {
      display: "inline-block",
      background: F.role === "user" ? o : "#f3f4f6",
      color: F.role === "user" ? "#fff" : "#1f2937",
      borderRadius: 8,
      padding: "1rem",
      maxWidth: "80%",
      margin: "0.5rem 0"
    }, children: /* @__PURE__ */ x.jsx("div", { style: { margin: 0, padding: 0 }, children: F.content }) });
  }
  const J = g ? {} : { borderRadius: "1rem", width: "100%" };
  return /* @__PURE__ */ x.jsxs("div", { style: { height: s, width: l }, className: "swytchcode-root", children: [
    /* @__PURE__ */ x.jsx(Et, {}),
    /* @__PURE__ */ x.jsx(yt, { children: /* @__PURE__ */ x.jsxs(vt, { css: { borderColor: f }, children: [
      g && /* @__PURE__ */ x.jsx(St, { children: /* @__PURE__ */ x.jsx("div", { style: { opacity: g ? 1 : 0, transition: "opacity 0.3s" }, children: /* @__PURE__ */ x.jsxs(kt, { children: [
        /* @__PURE__ */ x.jsxs(Bt, { children: [
          /* @__PURE__ */ x.jsx(
            Ce,
            {
              className: r === "methods" ? "active" : "",
              onClick: () => u("methods"),
              children: "Methods"
            }
          ),
          /* @__PURE__ */ x.jsx(
            Ce,
            {
              className: r === "workflows" ? "active" : "",
              onClick: () => u("workflows"),
              children: "Workflows"
            }
          )
        ] }),
        r === "workflows" && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(se, { children: /* @__PURE__ */ x.jsx(
            We,
            {
              options: G,
              value: y,
              onChange: A,
              placeholder: "Select language"
            }
          ) }),
          /* @__PURE__ */ x.jsx(se, { children: /* @__PURE__ */ x.jsx(
            Be,
            {
              placeholder: "Search workflows...",
              value: S,
              onChange: (F) => I(F.target.value)
            }
          ) }),
          /* @__PURE__ */ x.jsx(Ee, { style: { marginTop: "1rem", marginBottom: "0.5rem", fontWeight: 600 }, children: "Most used workflows" }),
          /* @__PURE__ */ x.jsx(Te, { children: q.filter((F) => F.toLowerCase().includes(S.toLowerCase())).map((F) => /* @__PURE__ */ x.jsx(ze, { onClick: () => z(F), children: F }, F)) })
        ] }),
        r === "methods" && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(se, { children: /* @__PURE__ */ x.jsx(
            We,
            {
              options: G,
              value: k,
              onChange: p,
              placeholder: "Select language"
            }
          ) }),
          /* @__PURE__ */ x.jsx(se, { children: /* @__PURE__ */ x.jsx(
            Be,
            {
              placeholder: "Search methods...",
              value: j,
              onChange: (F) => $(F.target.value)
            }
          ) }),
          /* @__PURE__ */ x.jsx(Ee, { style: { marginTop: "1rem", marginBottom: "0.5rem", fontWeight: 600 }, children: "Most used methods" }),
          /* @__PURE__ */ x.jsx(Te, { children: V.filter((F) => F.toLowerCase().includes(j.toLowerCase())).map((F) => /* @__PURE__ */ x.jsx(ze, { onClick: () => z(F), children: F }, F)) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ x.jsxs(wt, { style: J, children: [
        /* @__PURE__ */ x.jsxs($t, { children: [
          /* @__PURE__ */ x.jsx(Ft, { "aria-label": "Toggle", onClick: () => c((F) => !F), children: g ? /* @__PURE__ */ x.jsx("svg", { width: "22", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", children: /* @__PURE__ */ x.jsx("path", { d: "M15 18l-6-6 6-6" }) }) : /* @__PURE__ */ x.jsx("svg", { width: "22", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", children: /* @__PURE__ */ x.jsx("path", { d: "M9 6l6 6-6 6" }) }) }),
          /* @__PURE__ */ x.jsx("span", { style: { marginLeft: "2.5rem", fontWeight: 600, fontSize: "1.08rem", whiteSpace: "nowrap" }, children: "Chat with AI Assistant" }),
          /* @__PURE__ */ x.jsx("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center" }, children: /* @__PURE__ */ x.jsxs(
            "a",
            {
              href: "https://swytchcode.com",
              target: "_blank",
              rel: "noopener noreferrer",
              style: {
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
                fontWeight: 200,
                fontSize: "0.98em",
                gap: "0.5rem"
              },
              children: [
                "Powered by ",
                /* @__PURE__ */ x.jsx("img", { src: "/logo_icon.png", alt: "swytchcode Logo", style: { height: 22 } })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ x.jsxs(At, { ref: P, children: [
          v.map((F) => /* @__PURE__ */ x.jsx("div", { style: { marginBottom: "1rem", textAlign: F.role === "user" ? "right" : "left" }, children: O(F) }, F.id)),
          b && /* @__PURE__ */ x.jsx(Ct, { children: "Thinking..." }),
          /* @__PURE__ */ x.jsx("div", { ref: C })
        ] }),
        /* @__PURE__ */ x.jsxs(jt, { onSubmit: Z, children: [
          /* @__PURE__ */ x.jsx(
            Rt,
            {
              placeholder: "Ask me anything...",
              value: a,
              onChange: (F) => d(F.target.value)
            }
          ),
          /* @__PURE__ */ x.jsx(It, { type: "submit", style: { backgroundColor: t }, children: "Send" })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Ot as Swytchcode,
  Ot as default
};
