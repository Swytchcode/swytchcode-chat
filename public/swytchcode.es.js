import { jsxs as G, jsx as $, Fragment as xe } from "https://esm.sh/react@18.2.0/jsx-runtime";
import * as P from "https://esm.sh/react@18.2.0";
import le from "https://esm.sh/react@18.2.0";
var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ze(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ve = { exports: {} }, Re;
function Ue() {
  return Re || (Re = 1, function(e) {
    var o = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var t = function(a) {
      var s = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, l = 0, h = {}, r = {
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
        manual: a.Prism && a.Prism.manual,
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
        disableWorkerMessageHandler: a.Prism && a.Prism.disableWorkerMessageHandler,
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
          encode: function n(i) {
            return i instanceof d ? new d(i.type, n(i.content), i.alias) : Array.isArray(i) ? i.map(n) : i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
          clone: function n(i, c) {
            c = c || {};
            var g, u;
            switch (r.util.type(i)) {
              case "Object":
                if (u = r.util.objId(i), c[u])
                  return c[u];
                g = /** @type {Record<string, any>} */
                {}, c[u] = g;
                for (var m in i)
                  i.hasOwnProperty(m) && (g[m] = n(i[m], c));
                return (
                  /** @type {any} */
                  g
                );
              case "Array":
                return u = r.util.objId(i), c[u] ? c[u] : (g = [], c[u] = g, /** @type {Array} */
                /** @type {any} */
                i.forEach(function(A, y) {
                  g[y] = n(A, c);
                }), /** @type {any} */
                g);
              default:
                return i;
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
              var i = s.exec(n.className);
              if (i)
                return i[1].toLowerCase();
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
          setLanguage: function(n, i) {
            n.className = n.className.replace(RegExp(s, "gi"), ""), n.classList.add("language-" + i);
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
                var i = document.getElementsByTagName("script");
                for (var c in i)
                  if (i[c].src == n)
                    return i[c];
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
          isActive: function(n, i, c) {
            for (var g = "no-" + i; n; ) {
              var u = n.classList;
              if (u.contains(i))
                return !0;
              if (u.contains(g))
                return !1;
              n = n.parentElement;
            }
            return !!c;
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
          plain: h,
          plaintext: h,
          text: h,
          txt: h,
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
          extend: function(n, i) {
            var c = r.util.clone(r.languages[n]);
            for (var g in i)
              c[g] = i[g];
            return c;
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
          insertBefore: function(n, i, c, g) {
            g = g || /** @type {any} */
            r.languages;
            var u = g[n], m = {};
            for (var A in u)
              if (u.hasOwnProperty(A)) {
                if (A == i)
                  for (var y in c)
                    c.hasOwnProperty(y) && (m[y] = c[y]);
                c.hasOwnProperty(A) || (m[A] = u[A]);
              }
            var E = g[n];
            return g[n] = m, r.languages.DFS(r.languages, function(I, M) {
              M === E && I != n && (this[I] = m);
            }), m;
          },
          // Traverse a language definition with Depth First Search
          DFS: function n(i, c, g, u) {
            u = u || {};
            var m = r.util.objId;
            for (var A in i)
              if (i.hasOwnProperty(A)) {
                c.call(i, A, i[A], g || A);
                var y = i[A], E = r.util.type(y);
                E === "Object" && !u[m(y)] ? (u[m(y)] = !0, n(y, c, null, u)) : E === "Array" && !u[m(y)] && (u[m(y)] = !0, n(y, c, A, u));
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
        highlightAll: function(n, i) {
          r.highlightAllUnder(document, n, i);
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
        highlightAllUnder: function(n, i, c) {
          var g = {
            callback: c,
            container: n,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          r.hooks.run("before-highlightall", g), g.elements = Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)), r.hooks.run("before-all-elements-highlight", g);
          for (var u = 0, m; m = g.elements[u++]; )
            r.highlightElement(m, i === !0, g.callback);
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
        highlightElement: function(n, i, c) {
          var g = r.util.getLanguage(n), u = r.languages[g];
          r.util.setLanguage(n, g);
          var m = n.parentElement;
          m && m.nodeName.toLowerCase() === "pre" && r.util.setLanguage(m, g);
          var A = n.textContent, y = {
            element: n,
            language: g,
            grammar: u,
            code: A
          };
          function E(M) {
            y.highlightedCode = M, r.hooks.run("before-insert", y), y.element.innerHTML = y.highlightedCode, r.hooks.run("after-highlight", y), r.hooks.run("complete", y), c && c.call(y.element);
          }
          if (r.hooks.run("before-sanity-check", y), m = y.element.parentElement, m && m.nodeName.toLowerCase() === "pre" && !m.hasAttribute("tabindex") && m.setAttribute("tabindex", "0"), !y.code) {
            r.hooks.run("complete", y), c && c.call(y.element);
            return;
          }
          if (r.hooks.run("before-highlight", y), !y.grammar) {
            E(r.util.encode(y.code));
            return;
          }
          if (i && a.Worker) {
            var I = new Worker(r.filename);
            I.onmessage = function(M) {
              E(M.data);
            }, I.postMessage(JSON.stringify({
              language: y.language,
              code: y.code,
              immediateClose: !0
            }));
          } else
            E(r.highlight(y.code, y.grammar, y.language));
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
        highlight: function(n, i, c) {
          var g = {
            code: n,
            grammar: i,
            language: c
          };
          if (r.hooks.run("before-tokenize", g), !g.grammar)
            throw new Error('The language "' + g.language + '" has no grammar.');
          return g.tokens = r.tokenize(g.code, g.grammar), r.hooks.run("after-tokenize", g), d.stringify(r.util.encode(g.tokens), g.language);
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
        tokenize: function(n, i) {
          var c = i.rest;
          if (c) {
            for (var g in c)
              i[g] = c[g];
            delete i.rest;
          }
          var u = new S();
          return f(u, u.head, n), k(n, u, i, u.head, 0), j(u);
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
          add: function(n, i) {
            var c = r.hooks.all;
            c[n] = c[n] || [], c[n].push(i);
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
          run: function(n, i) {
            var c = r.hooks.all[n];
            if (!(!c || !c.length))
              for (var g = 0, u; u = c[g++]; )
                u(i);
          }
        },
        Token: d
      };
      a.Prism = r;
      function d(n, i, c, g) {
        this.type = n, this.content = i, this.alias = c, this.length = (g || "").length | 0;
      }
      d.stringify = function n(i, c) {
        if (typeof i == "string")
          return i;
        if (Array.isArray(i)) {
          var g = "";
          return i.forEach(function(E) {
            g += n(E, c);
          }), g;
        }
        var u = {
          type: i.type,
          content: n(i.content, c),
          tag: "span",
          classes: ["token", i.type],
          attributes: {},
          language: c
        }, m = i.alias;
        m && (Array.isArray(m) ? Array.prototype.push.apply(u.classes, m) : u.classes.push(m)), r.hooks.run("wrap", u);
        var A = "";
        for (var y in u.attributes)
          A += " " + y + '="' + (u.attributes[y] || "").replace(/"/g, "&quot;") + '"';
        return "<" + u.tag + ' class="' + u.classes.join(" ") + '"' + A + ">" + u.content + "</" + u.tag + ">";
      };
      function p(n, i, c, g) {
        n.lastIndex = i;
        var u = n.exec(c);
        if (u && g && u[1]) {
          var m = u[1].length;
          u.index += m, u[0] = u[0].slice(m);
        }
        return u;
      }
      function k(n, i, c, g, u, m) {
        for (var A in c)
          if (!(!c.hasOwnProperty(A) || !c[A])) {
            var y = c[A];
            y = Array.isArray(y) ? y : [y];
            for (var E = 0; E < y.length; ++E) {
              if (m && m.cause == A + "," + E)
                return;
              var I = y[E], M = I.inside, Y = !!I.lookbehind, J = !!I.greedy, ne = I.alias;
              if (J && !I.pattern.global) {
                var ge = I.pattern.toString().match(/[imsuy]*$/)[0];
                I.pattern = RegExp(I.pattern.source, ge + "g");
              }
              for (var X = I.pattern || I, z = g.next, q = u; z !== i.tail && !(m && q >= m.reach); q += z.value.length, z = z.next) {
                var K = z.value;
                if (i.length > n.length)
                  return;
                if (!(K instanceof d)) {
                  var oe = 1, _;
                  if (J) {
                    if (_ = p(X, q, n, Y), !_ || _.index >= n.length)
                      break;
                    var ae = _.index, pe = _.index + _[0].length, U = q;
                    for (U += z.value.length; ae >= U; )
                      z = z.next, U += z.value.length;
                    if (U -= z.value.length, q = U, z.value instanceof d)
                      continue;
                    for (var Q = z; Q !== i.tail && (U < pe || typeof Q.value == "string"); Q = Q.next)
                      oe++, U += Q.value.length;
                    oe--, K = n.slice(q, U), _.index -= q;
                  } else if (_ = p(X, 0, K, Y), !_)
                    continue;
                  var ae = _.index, v = _[0], W = K.slice(0, ae), L = K.slice(ae + v.length), O = q + K.length;
                  m && O > m.reach && (m.reach = O);
                  var D = z.prev;
                  W && (D = f(i, D, W), q += W.length), w(i, D, oe);
                  var B = new d(A, M ? r.tokenize(v, M) : v, ne, v);
                  if (z = f(i, D, B), L && f(i, z, L), oe > 1) {
                    var H = {
                      cause: A + "," + E,
                      reach: O
                    };
                    k(n, i, c, z.prev, q, H), m && H.reach > m.reach && (m.reach = H.reach);
                  }
                }
              }
            }
          }
      }
      function S() {
        var n = { value: null, prev: null, next: null }, i = { value: null, prev: n, next: null };
        n.next = i, this.head = n, this.tail = i, this.length = 0;
      }
      function f(n, i, c) {
        var g = i.next, u = { value: c, prev: i, next: g };
        return i.next = u, g.prev = u, n.length++, u;
      }
      function w(n, i, c) {
        for (var g = i.next, u = 0; u < c && g !== n.tail; u++)
          g = g.next;
        i.next = g, g.prev = i, n.length -= u;
      }
      function j(n) {
        for (var i = [], c = n.head.next; c !== n.tail; )
          i.push(c.value), c = c.next;
        return i;
      }
      if (!a.document)
        return a.addEventListener && (r.disableWorkerMessageHandler || a.addEventListener("message", function(n) {
          var i = JSON.parse(n.data), c = i.language, g = i.code, u = i.immediateClose;
          a.postMessage(r.highlight(g, r.languages[c], c)), u && a.close();
        }, !1)), r;
      var R = r.util.currentScript();
      R && (r.filename = R.src, R.hasAttribute("data-manual") && (r.manual = !0));
      function F() {
        r.manual || r.highlightAll();
      }
      if (!r.manual) {
        var x = document.readyState;
        x === "loading" || x === "interactive" && R && R.defer ? document.addEventListener("DOMContentLoaded", F) : window.requestAnimationFrame ? window.requestAnimationFrame(F) : window.setTimeout(F, 16);
      }
      return r;
    }(o);
    e.exports && (e.exports = t), typeof Fe < "u" && (Fe.Prism = t), t.languages.markup = {
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
    }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(a) {
      a.type === "entity" && (a.attributes.title = a.content.replace(/&amp;/, "&"));
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
        var h = {};
        h["language-" + l] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: t.languages[l]
        }, h.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var r = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: h
          }
        };
        r["language-" + l] = {
          pattern: /[\s\S]+/,
          inside: t.languages[l]
        };
        var d = {};
        d[s] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return s;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: r
        }, t.languages.insertBefore("markup", "cdata", d);
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
      value: function(a, s) {
        t.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + a + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
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
    }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(a) {
      var s = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      a.languages.css = {
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
      }, a.languages.css.atrule.inside.rest = a.languages.css;
      var l = a.languages.markup;
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
      var a = "Loading…", s = function(R, F) {
        return "✖ Error " + R + " while fetching file: " + F;
      }, l = "✖ Error: File does not exist or is empty", h = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      }, r = "data-src-status", d = "loading", p = "loaded", k = "failed", S = "pre[data-src]:not([" + r + '="' + p + '"]):not([' + r + '="' + d + '"])';
      function f(R, F, x) {
        var n = new XMLHttpRequest();
        n.open("GET", R, !0), n.onreadystatechange = function() {
          n.readyState == 4 && (n.status < 400 && n.responseText ? F(n.responseText) : n.status >= 400 ? x(s(n.status, n.statusText)) : x(l));
        }, n.send(null);
      }
      function w(R) {
        var F = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(R || "");
        if (F) {
          var x = Number(F[1]), n = F[2], i = F[3];
          return n ? i ? [x, Number(i)] : [x, void 0] : [x, x];
        }
      }
      t.hooks.add("before-highlightall", function(R) {
        R.selector += ", " + S;
      }), t.hooks.add("before-sanity-check", function(R) {
        var F = (
          /** @type {HTMLPreElement} */
          R.element
        );
        if (F.matches(S)) {
          R.code = "", F.setAttribute(r, d);
          var x = F.appendChild(document.createElement("CODE"));
          x.textContent = a;
          var n = F.getAttribute("data-src"), i = R.language;
          if (i === "none") {
            var c = (/\.(\w+)$/.exec(n) || [, "none"])[1];
            i = h[c] || c;
          }
          t.util.setLanguage(x, i), t.util.setLanguage(F, i);
          var g = t.plugins.autoloader;
          g && g.loadLanguages(i), f(
            n,
            function(u) {
              F.setAttribute(r, p);
              var m = w(F.getAttribute("data-range"));
              if (m) {
                var A = u.split(/\r\n?|\n/g), y = m[0], E = m[1] == null ? A.length : m[1];
                y < 0 && (y += A.length), y = Math.max(0, Math.min(y - 1, A.length)), E < 0 && (E += A.length), E = Math.max(0, Math.min(E, A.length)), u = A.slice(y, E).join(`
`), F.hasAttribute("data-start") || F.setAttribute("data-start", String(y + 1));
              }
              x.textContent = u, t.highlightElement(x);
            },
            function(u) {
              F.setAttribute(r, k), x.textContent = u;
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
        highlight: function(F) {
          for (var x = (F || document).querySelectorAll(S), n = 0, i; i = x[n++]; )
            t.highlightElement(i);
        }
      };
      var j = !1;
      t.fileHighlight = function() {
        j || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), j = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }();
  }(ve)), ve.exports;
}
var Ye = Ue();
const Se = /* @__PURE__ */ Ze(Ye);
var je = {}, Ee;
function Je() {
  return Ee || (Ee = 1, function(e) {
    e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
    var o = e.languages.extend("typescript", {});
    delete o["class-name"], e.languages.typescript["class-name"].inside = o, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: o } } } }), e.languages.ts = e.languages.typescript;
  }(Prism)), je;
}
Je();
const Ve = "https://api.swytchcode.com/v1", Ne = "https://stream.swytchcode.com:8443", Xe = [
  { value: "node.js", label: "Node.js" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "c#", label: "C#" },
  { value: "c++", label: "C++" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "golang", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "scala", label: "Scala" },
  { value: "c", label: "C" }
];
var C = "colors", N = "sizes", b = "space", Ke = { gap: b, gridGap: b, columnGap: b, gridColumnGap: b, rowGap: b, gridRowGap: b, inset: b, insetBlock: b, insetBlockEnd: b, insetBlockStart: b, insetInline: b, insetInlineEnd: b, insetInlineStart: b, margin: b, marginTop: b, marginRight: b, marginBottom: b, marginLeft: b, marginBlock: b, marginBlockEnd: b, marginBlockStart: b, marginInline: b, marginInlineEnd: b, marginInlineStart: b, padding: b, paddingTop: b, paddingRight: b, paddingBottom: b, paddingLeft: b, paddingBlock: b, paddingBlockEnd: b, paddingBlockStart: b, paddingInline: b, paddingInlineEnd: b, paddingInlineStart: b, top: b, right: b, bottom: b, left: b, scrollMargin: b, scrollMarginTop: b, scrollMarginRight: b, scrollMarginBottom: b, scrollMarginLeft: b, scrollMarginX: b, scrollMarginY: b, scrollMarginBlock: b, scrollMarginBlockEnd: b, scrollMarginBlockStart: b, scrollMarginInline: b, scrollMarginInlineEnd: b, scrollMarginInlineStart: b, scrollPadding: b, scrollPaddingTop: b, scrollPaddingRight: b, scrollPaddingBottom: b, scrollPaddingLeft: b, scrollPaddingX: b, scrollPaddingY: b, scrollPaddingBlock: b, scrollPaddingBlockEnd: b, scrollPaddingBlockStart: b, scrollPaddingInline: b, scrollPaddingInlineEnd: b, scrollPaddingInlineStart: b, fontSize: "fontSizes", background: C, backgroundColor: C, backgroundImage: C, borderImage: C, border: C, borderBlock: C, borderBlockEnd: C, borderBlockStart: C, borderBottom: C, borderBottomColor: C, borderColor: C, borderInline: C, borderInlineEnd: C, borderInlineStart: C, borderLeft: C, borderLeftColor: C, borderRight: C, borderRightColor: C, borderTop: C, borderTopColor: C, caretColor: C, color: C, columnRuleColor: C, fill: C, outline: C, outlineColor: C, stroke: C, textDecorationColor: C, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: N, minBlockSize: N, maxBlockSize: N, inlineSize: N, minInlineSize: N, maxInlineSize: N, width: N, minWidth: N, maxWidth: N, height: N, minHeight: N, maxHeight: N, flexBasis: N, gridTemplateColumns: N, gridTemplateRows: N, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Qe = (e, o) => typeof o == "function" ? { "()": Function.prototype.toString.call(o) } : o, ue = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (o, t, ...a) => {
    const s = ((l) => JSON.stringify(l, Qe))(o);
    return s in e ? e[s] : e[s] = t(o, ...a);
  };
}, te = Symbol.for("sxs.internal"), $e = (e, o) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)), Ce = (e) => {
  for (const o in e) return !0;
  return !1;
}, { hasOwnProperty: et } = Object.prototype, ke = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase()), tt = /\s+(?![^()]*\))/, ce = (e) => (o) => e(...typeof o == "string" ? String(o).split(tt) : [o]), Ie = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: ce((e, o) => ({ marginBlockStart: e, marginBlockEnd: o || e })), marginInline: ce((e, o) => ({ marginInlineStart: e, marginInlineEnd: o || e })), maxSize: ce((e, o) => ({ maxBlockSize: e, maxInlineSize: o || e })), minSize: ce((e, o) => ({ minBlockSize: e, minInlineSize: o || e })), paddingBlock: ce((e, o) => ({ paddingBlockStart: e, paddingBlockEnd: o || e })), paddingInline: ce((e, o) => ({ paddingInlineStart: e, paddingInlineEnd: o || e })) }, we = /([\d.]+)([^]*)/, rt = (e, o) => e.length ? e.reduce((t, a) => (t.push(...o.map((s) => s.includes("&") ? s.replace(/&/g, /[ +>|~]/.test(a) && /&.*&/.test(s) ? `:is(${a})` : a) : a + " " + s)), t), []) : o, nt = (e, o) => e in ot && typeof o == "string" ? o.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, a, s, l) => a + (s === "stretch" ? `-moz-available${l};${ke(e)}:${a}-webkit-fill-available` : `-moz-fit-content${l};${ke(e)}:${a}fit-content`) + l) : String(o), ot = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, V = (e) => e ? e + "-" : "", Ge = (e, o, t) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (a, s, l, h, r) => h == "$" == !!l ? a : (s || h == "--" ? "calc(" : "") + "var(--" + (h === "$" ? V(o) + (r.includes("$") ? "" : V(t)) + r.replace(/\$/g, "-") : r) + ")" + (s || h == "--" ? "*" + (s || "") + (l || "1") + ")" : "")), at = /\s*,\s*(?![^()]*\))/, it = Object.prototype.toString, de = (e, o, t, a, s) => {
  let l, h, r;
  const d = (p, k, S) => {
    let f, w;
    const j = (R) => {
      for (f in R) {
        const n = f.charCodeAt(0) === 64, i = n && Array.isArray(R[f]) ? R[f] : [R[f]];
        for (w of i) {
          const c = /[A-Z]/.test(x = f) ? x : x.replace(/-[^]/g, (u) => u[1].toUpperCase()), g = typeof w == "object" && w && w.toString === it && (!a.utils[c] || !k.length);
          if (c in a.utils && !g) {
            const u = a.utils[c];
            if (u !== h) {
              h = u, j(u(w)), h = null;
              continue;
            }
          } else if (c in Ie) {
            const u = Ie[c];
            if (u !== r) {
              r = u, j(u(w)), r = null;
              continue;
            }
          }
          if (n && (F = f.slice(1) in a.media ? "@media " + a.media[f.slice(1)] : f, f = F.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (u, m, A, y, E, I) => {
            const M = we.test(m), Y = 0.0625 * (M ? -1 : 1), [J, ne] = M ? [y, m] : [m, y];
            return "(" + (A[0] === "=" ? "" : A[0] === ">" === M ? "max-" : "min-") + J + ":" + (A[0] !== "=" && A.length === 1 ? ne.replace(we, (ge, X, z) => Number(X) + Y * (A === ">" ? 1 : -1) + z) : ne) + (E ? ") and (" + (E[0] === ">" ? "min-" : "max-") + J + ":" + (E.length === 1 ? I.replace(we, (ge, X, z) => Number(X) + Y * (E === ">" ? -1 : 1) + z) : I) : "") + ")";
          })), g) {
            const u = n ? S.concat(f) : [...S], m = n ? [...k] : rt(k, f.split(at));
            l !== void 0 && s(Be(...l)), l = void 0, d(w, m, u);
          } else l === void 0 && (l = [[], k, S]), f = n || f.charCodeAt(0) !== 36 ? f : `--${V(a.prefix)}${f.slice(1).replace(/\$/g, "-")}`, w = g ? w : typeof w == "number" ? w && c in st ? String(w) + "px" : String(w) : Ge(nt(c, w ?? ""), a.prefix, a.themeMap[c]), l[0].push(`${n ? `${f} ` : `${ke(f)}:`}${w}`);
        }
      }
      var F, x;
    };
    j(p), l !== void 0 && s(Be(...l)), l = void 0;
  };
  d(e, o, t);
}, Be = (e, o, t) => `${t.map((a) => `${a}{`).join("")}${o.length ? `${o.join(",")}{` : ""}${e.join(";")}${o.length ? "}" : ""}${Array(t.length ? t.length + 1 : 0).join("}")}`, st = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Te = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), re = (e) => ((o) => {
  let t, a = "";
  for (t = Math.abs(o); t > 52; t = t / 52 | 0) a = Te(t % 52) + a;
  return Te(t % 52) + a;
})(((o, t) => {
  let a = t.length;
  for (; a; ) o = 33 * o ^ t.charCodeAt(--a);
  return o;
})(5381, JSON.stringify(e)) >>> 0), me = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], lt = (e) => {
  if (e.href && !e.href.startsWith(location.origin)) return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, ct = (e) => {
  let o;
  const t = () => {
    const { cssRules: s } = o.sheet;
    return [].map.call(s, (l, h) => {
      const { cssText: r } = l;
      let d = "";
      if (r.startsWith("--sxs")) return "";
      if (s[h - 1] && (d = s[h - 1].cssText).startsWith("--sxs")) {
        if (!l.cssRules.length) return "";
        for (const p in o.rules) if (o.rules[p].group === l) return `--sxs{--sxs:${[...o.rules[p].cache].join(" ")}}${r}`;
        return l.cssRules.length ? `${d}${r}` : "";
      }
      return r;
    }).join("");
  }, a = () => {
    if (o) {
      const { rules: r, sheet: d } = o;
      if (!d.deleteRule) {
        for (; Object(Object(d.cssRules)[0]).type === 3; ) d.cssRules.splice(0, 1);
        d.cssRules = [];
      }
      for (const p in r) delete r[p];
    }
    const s = Object(e).styleSheets || [];
    for (const r of s) if (lt(r)) {
      for (let d = 0, p = r.cssRules; p[d]; ++d) {
        const k = Object(p[d]);
        if (k.type !== 1) continue;
        const S = Object(p[d + 1]);
        if (S.type !== 4) continue;
        ++d;
        const { cssText: f } = k;
        if (!f.startsWith("--sxs")) continue;
        const w = f.slice(14, -3).trim().split(/\s+/), j = me[w[0]];
        j && (o || (o = { sheet: r, reset: a, rules: {}, toString: t }), o.rules[j] = { group: S, index: d, cache: new Set(w) });
      }
      if (o) break;
    }
    if (!o) {
      const r = (d, p) => ({ type: p, cssRules: [], insertRule(k, S) {
        this.cssRules.splice(S, 0, r(k, { import: 3, undefined: 1 }[(k.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return d === "@media{}" ? `@media{${[].map.call(this.cssRules, (k) => k.cssText).join("")}}` : d;
      } });
      o = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : r("", "text/css"), rules: {}, reset: a, toString: t };
    }
    const { sheet: l, rules: h } = o;
    for (let r = me.length - 1; r >= 0; --r) {
      const d = me[r];
      if (!h[d]) {
        const p = me[r + 1], k = h[p] ? h[p].index : l.cssRules.length;
        l.insertRule("@media{}", k), l.insertRule(`--sxs{--sxs:${r}}`, k), h[d] = { group: l.cssRules[k + 1], index: k, cache: /* @__PURE__ */ new Set([r]) };
      }
      dt(h[d]);
    }
  };
  return a(), o;
}, dt = (e) => {
  const o = e.group;
  let t = o.cssRules.length;
  e.apply = (a) => {
    try {
      o.insertRule(a, t), ++t;
    } catch {
    }
  };
}, he = Symbol(), ut = ue(), ze = (e, o) => ut(e, () => (...t) => {
  let a = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const s of t) if (s != null) if (s[te]) {
    a.type == null && (a.type = s[te].type);
    for (const l of s[te].composers) a.composers.add(l);
  } else s.constructor !== Object || s.$$typeof ? a.type == null && (a.type = s) : a.composers.add(gt(s, e));
  return a.type == null && (a.type = "span"), a.composers.size || a.composers.add(["PJLV", {}, [], [], {}, []]), pt(e, a, o);
}), gt = ({ variants: e, compoundVariants: o, defaultVariants: t, ...a }, s) => {
  const l = `${V(s.prefix)}c-${re(a)}`, h = [], r = [], d = /* @__PURE__ */ Object.create(null), p = [];
  for (const f in t) d[f] = String(t[f]);
  if (typeof e == "object" && e) for (const f in e) {
    k = d, S = f, et.call(k, S) || (d[f] = "undefined");
    const w = e[f];
    for (const j in w) {
      const R = { [f]: String(j) };
      String(j) === "undefined" && p.push(f);
      const F = w[j], x = [R, F, !Ce(F)];
      h.push(x);
    }
  }
  var k, S;
  if (typeof o == "object" && o) for (const f of o) {
    let { css: w, ...j } = f;
    w = typeof w == "object" && w || {};
    for (const F in j) j[F] = String(j[F]);
    const R = [j, w, !Ce(w)];
    r.push(R);
  }
  return [l, a, h, r, d, p];
}, pt = (e, o, t) => {
  const [a, s, l, h] = ft(o.composers), r = typeof o.type == "function" || o.type.$$typeof ? ((S) => {
    function f() {
      for (let w = 0; w < f[he].length; w++) {
        const [j, R] = f[he][w];
        S.rules[j].apply(R);
      }
      return f[he] = [], null;
    }
    return f[he] = [], f.rules = {}, me.forEach((w) => f.rules[w] = { apply: (j) => f[he].push([w, j]) }), f;
  })(t) : null, d = (r || t).rules, p = `.${a}${s.length > 1 ? `:where(.${s.slice(1).join(".")})` : ""}`, k = (S) => {
    S = typeof S == "object" && S || ht;
    const { css: f, ...w } = S, j = {};
    for (const x in l) if (delete w[x], x in S) {
      let n = S[x];
      typeof n == "object" && n ? j[x] = { "@initial": l[x], ...n } : (n = String(n), j[x] = n !== "undefined" || h.has(x) ? n : l[x]);
    } else j[x] = l[x];
    const R = /* @__PURE__ */ new Set([...s]);
    for (const [x, n, i, c] of o.composers) {
      t.rules.styled.cache.has(x) || (t.rules.styled.cache.add(x), de(n, [`.${x}`], [], e, (m) => {
        d.styled.apply(m);
      }));
      const g = We(i, j, e.media), u = We(c, j, e.media, !0);
      for (const m of g) if (m !== void 0) for (const [A, y, E] of m) {
        const I = `${x}-${re(y)}-${A}`;
        R.add(I);
        const M = (E ? t.rules.resonevar : t.rules.onevar).cache, Y = E ? d.resonevar : d.onevar;
        M.has(I) || (M.add(I), de(y, [`.${I}`], [], e, (J) => {
          Y.apply(J);
        }));
      }
      for (const m of u) if (m !== void 0) for (const [A, y] of m) {
        const E = `${x}-${re(y)}-${A}`;
        R.add(E), t.rules.allvar.cache.has(E) || (t.rules.allvar.cache.add(E), de(y, [`.${E}`], [], e, (I) => {
          d.allvar.apply(I);
        }));
      }
    }
    if (typeof f == "object" && f) {
      const x = `${a}-i${re(f)}-css`;
      R.add(x), t.rules.inline.cache.has(x) || (t.rules.inline.cache.add(x), de(f, [`.${x}`], [], e, (n) => {
        d.inline.apply(n);
      }));
    }
    for (const x of String(S.className || "").trim().split(/\s+/)) x && R.add(x);
    const F = w.className = [...R].join(" ");
    return { type: o.type, className: F, selector: p, props: w, toString: () => F, deferredInjector: r };
  };
  return $e(k, { className: a, selector: p, [te]: o, toString: () => (t.rules.styled.cache.has(a) || k(), a) });
}, ft = (e) => {
  let o = "";
  const t = [], a = {}, s = [];
  for (const [l, , , , h, r] of e) {
    o === "" && (o = l), t.push(l), s.push(...r);
    for (const d in h) {
      const p = h[d];
      (a[d] === void 0 || p !== "undefined" || r.includes(p)) && (a[d] = p);
    }
  }
  return [o, t, a, new Set(s)];
}, We = (e, o, t, a) => {
  const s = [];
  e: for (let [l, h, r] of e) {
    if (r) continue;
    let d, p = 0, k = !1;
    for (d in l) {
      const S = l[d];
      let f = o[d];
      if (f !== S) {
        if (typeof f != "object" || !f) continue e;
        {
          let w, j, R = 0;
          for (const F in f) {
            if (S === String(f[F])) {
              if (F !== "@initial") {
                const x = F.slice(1);
                (j = j || []).push(x in t ? t[x] : F.replace(/^@media ?/, "")), k = !0;
              }
              p += R, w = !0;
            }
            ++R;
          }
          if (j && j.length && (h = { ["@media " + j.join(", ")]: h }), !w) continue e;
        }
      }
    }
    (s[p] = s[p] || []).push([a ? "cv" : `${d}-${l[d]}`, h, k]);
  }
  return s;
}, ht = {}, mt = ue(), bt = (e, o) => mt(e, () => (...t) => {
  const a = () => {
    for (let s of t) {
      s = typeof s == "object" && s || {};
      let l = re(s);
      if (!o.rules.global.cache.has(l)) {
        if (o.rules.global.cache.add(l), "@import" in s) {
          let h = [].indexOf.call(o.sheet.cssRules, o.rules.themed.group) - 1;
          for (let r of [].concat(s["@import"])) r = r.includes('"') || r.includes("'") ? r : `"${r}"`, o.sheet.insertRule(`@import ${r};`, h++);
          delete s["@import"];
        }
        de(s, [], [], e, (h) => {
          o.rules.global.apply(h);
        });
      }
    }
    return "";
  };
  return $e(a, { toString: a });
}), yt = ue(), xt = (e, o) => yt(e, () => (t) => {
  const a = `${V(e.prefix)}k-${re(t)}`, s = () => {
    if (!o.rules.global.cache.has(a)) {
      o.rules.global.cache.add(a);
      const l = [];
      de(t, [], [], e, (r) => l.push(r));
      const h = `@keyframes ${a}{${l.join("")}}`;
      o.rules.global.apply(h);
    }
    return a;
  };
  return $e(s, { get name() {
    return s();
  }, toString: s });
}), vt = class {
  constructor(e, o, t, a) {
    this.token = e == null ? "" : String(e), this.value = o == null ? "" : String(o), this.scale = t == null ? "" : String(t), this.prefix = a == null ? "" : String(a);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + V(this.prefix) + V(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, St = ue(), wt = (e, o) => St(e, () => (t, a) => {
  a = typeof t == "object" && t || Object(a);
  const s = `.${t = (t = typeof t == "string" ? t : "") || `${V(e.prefix)}t-${re(a)}`}`, l = {}, h = [];
  for (const d in a) {
    l[d] = {};
    for (const p in a[d]) {
      const k = `--${V(e.prefix)}${d}-${p}`, S = Ge(String(a[d][p]), e.prefix, d);
      l[d][p] = new vt(p, S, d, e.prefix), h.push(`${k}:${S}`);
    }
  }
  const r = () => {
    if (h.length && !o.rules.themed.cache.has(t)) {
      o.rules.themed.cache.add(t);
      const d = `${a === e.theme ? ":root," : ""}.${t}{${h.join(";")}}`;
      o.rules.themed.apply(d);
    }
    return t;
  };
  return { ...l, get className() {
    return r();
  }, selector: s, toString: r };
}), kt = ue(), $t = ue(), At = (e) => {
  const o = ((t) => {
    let a = !1;
    const s = kt(t, (l) => {
      a = !0;
      const h = "prefix" in (l = typeof l == "object" && l || {}) ? String(l.prefix) : "", r = typeof l.media == "object" && l.media || {}, d = typeof l.root == "object" ? l.root || null : globalThis.document || null, p = typeof l.theme == "object" && l.theme || {}, k = { prefix: h, media: r, theme: p, themeMap: typeof l.themeMap == "object" && l.themeMap || { ...Ke }, utils: typeof l.utils == "object" && l.utils || {} }, S = ct(d), f = { css: ze(k, S), globalCss: bt(k, S), keyframes: xt(k, S), createTheme: wt(k, S), reset() {
        S.reset(), f.theme.toString();
      }, theme: {}, sheet: S, config: k, prefix: h, getCssText: S.toString, toString: S.toString };
      return String(f.theme = f.createTheme(p)), f;
    });
    return a || s.reset(), s;
  })(e);
  return o.styled = (({ config: t, sheet: a }) => $t(t, () => {
    const s = ze(t, a);
    return (...l) => {
      const h = s(...l), r = h[te].type, d = le.forwardRef((p, k) => {
        const S = p && p.as || r, { props: f, deferredInjector: w } = h(p);
        return delete f.as, f.ref = k, w ? le.createElement(le.Fragment, null, le.createElement(S, f), le.createElement(w, null)) : le.createElement(S, f);
      });
      return d.className = h.className, d.displayName = `Styled.${r.displayName || r.name || r}`, d.selector = h.selector, d.toString = () => h.selector, d[te] = h[te], d;
    };
  }))(o), o;
};
const { styled: T, css: Vt, globalCss: Xt, theme: Kt } = At({
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
}), Ft = T("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "2rem 0"
}), Rt = T("div", {
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
}), jt = T("div", {
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
}), Et = T("div", {
  padding: "0.8rem 1.5rem 3.5rem",
  flex: 1,
  display: "flex",
  flexDirection: "column"
}), Ct = T("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  borderRadius: "0 1rem 1rem 0",
  boxShadow: "0 2px 24px rgba(59,130,246,0.08)",
  minWidth: 0,
  minHeight: "600px",
  position: "relative"
}), It = T("div", {
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
}), Bt = T("button", {
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
}), Tt = T("div", {
  flex: 1,
  overflowY: "auto",
  maxHeight: "60vh",
  padding: "2rem 2rem 1rem 2rem",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
}), zt = T("form", {
  display: "flex",
  gap: "0.5rem",
  padding: "1.25rem 2rem",
  borderTop: "1px solid $border",
  background: "#fff",
  borderBottomRightRadius: "1rem"
}), Wt = T("input", {
  flex: 1,
  padding: "0.75rem 1rem",
  border: "1px solid $border",
  borderRadius: "0.375rem",
  fontSize: "1.05rem"
}), Mt = T("button", {
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
});
T("div", {
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
});
const Lt = T("style", {
  "@global": {
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" }
    }
  }
}), Pt = T("div", {
  display: "flex",
  borderBottom: "1.5px solid $border",
  marginBottom: "0.7rem",
  width: "100%",
  minHeight: 0
}), Me = T("button", {
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
}), Le = T("div", {
  fontWeight: 500,
  marginBottom: "0.25rem",
  color: "#444",
  fontSize: "1.01rem"
}), ye = T("div", {
  marginBottom: "0.6rem",
  display: "flex",
  flexDirection: "column"
}), Dt = T("div", {
  position: "relative",
  width: "100%"
}), Ot = T("input", {
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
}), _t = T("div", {
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
}), Ht = T("div", {
  padding: "0.2rem 1rem",
  cursor: "pointer",
  color: "#000",
  fontWeight: 100,
  fontSize: "0.95rem",
  "&:hover": {
    background: "$panel"
  }
}), Pe = T("input", {
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
}), De = T("div", {
  maxHeight: "370px",
  overflowY: "auto"
}), Oe = T("div", {
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
}), _e = ({
  options: e,
  value: o,
  onChange: t,
  placeholder: a
}) => {
  const [s, l] = P.useState(!1), [h, r] = P.useState(""), d = e.filter((p) => p.toLowerCase().includes(h.toLowerCase()));
  return /* @__PURE__ */ G(Dt, { children: [
    /* @__PURE__ */ $(
      Ot,
      {
        placeholder: a,
        value: o || h,
        onFocus: () => l(!0),
        onChange: (p) => {
          r(p.target.value), t("");
        },
        onBlur: () => setTimeout(() => l(!1), 100),
        readOnly: !!o
      }
    ),
    s && d.length > 0 && /* @__PURE__ */ $(_t, { children: d.map((p) => /* @__PURE__ */ $(
      Ht,
      {
        onMouseDown: () => {
          t(p), r(""), l(!1);
        },
        children: p
      },
      p
    )) })
  ] });
};
let qe;
const Nt = (e) => {
  qe = e;
}, Ae = () => qe, He = async (e) => await (await fetch(`${Ve}/chat-list`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": Ae() || ""
  },
  body: JSON.stringify({ param: e })
})).json(), Gt = async (e, o, t, a) => {
  const s = await fetch(`${Ne}/chat-fetch-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": Ae() || ""
    },
    body: JSON.stringify({ type: e, prompt: o, language: t })
  });
  if (!s.ok)
    throw new Error(`HTTP error! status: ${s.status}`);
  if (a && s.body) {
    const l = s.body.getReader(), h = new TextDecoder();
    let r = !1, d = "";
    for (; !r; ) {
      const { value: p, done: k } = await l.read();
      if (r = k, p) {
        const S = h.decode(p, { stream: !r });
        d += S, a(S);
      }
    }
    try {
      return JSON.parse(d);
    } catch {
      return { data: { code: btoa(d) } };
    }
  } else
    return await s.json();
}, qt = async (e, o) => {
  const t = `${Ne}/chat-workflow-request`, a = {
    workflow: e[e.length - 1].content,
    code_context: ""
  }, s = await fetch(t, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": Ae() || ""
    },
    body: JSON.stringify(a)
  });
  if (!s.ok)
    throw new Error(`HTTP error! status: ${s.status}`);
  if (o && s.body) {
    const l = s.body.getReader(), h = new TextDecoder();
    let r = !1, d = "";
    for (; !r; ) {
      const { value: p, done: k } = await l.read();
      if (r = k, p) {
        const S = h.decode(p, { stream: !r });
        d += S, o(S);
      }
    }
    try {
      const p = JSON.parse(d);
      return atob(p.data);
    } catch {
      return d;
    }
  } else {
    const l = await s.json();
    return atob(l.data);
  }
}, Zt = {
  default: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css",
  dark: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-dark.min.css",
  funky: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-funky.min.css",
  okaidia: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-okaidia.min.css",
  twilight: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-twilight.min.css",
  coy: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-coy.min.css",
  solarizedlight: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-solarizedlight.min.css",
  tomorrow: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",
  "atom-dark": "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-atom-dark.min.css",
  vs: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-vs.min.css",
  xonokai: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-xonokai.min.css",
  "duotone-dark": "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-duotone-dark.min.css",
  "duotone-light": "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-duotone-light.min.css",
  "duotone-sea": "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-duotone-sea.min.css",
  "duotone-space": "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-duotone-space.min.css",
  "duotone-earth": "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-duotone-earth.min.css",
  "duotone-forest": "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-duotone-forest.min.css",
  "duotone-rose": "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-duotone-rose.min.css"
}, Qt = ({
  initialMessage: e = "Hello! I'm your AI assistant. How can I help you today? Ask me to show you some code examples!",
  promptValue: o = "",
  sendButtonColor: t = "#2563eb",
  userBubbleColor: a = "#3b82f6",
  height: s = "80vh",
  width: l = "100%",
  borderColor: h = "#e5e7eb",
  apiKey: r,
  highlightTheme: d = "twilight"
}) => {
  const [p, k] = P.useState("methods"), [S, f] = P.useState(""), [w, j] = P.useState(""), [R, F] = P.useState(""), [x, n] = P.useState(""), [i, c] = P.useState([
    { id: 1, role: "assistant", content: e }
  ]), [g, u] = P.useState(""), [m, A] = P.useState(!0), [y, E] = P.useState(null), [I, M] = P.useState(!1), [Y, J] = P.useState([]), [ne, ge] = P.useState([]), X = P.useRef(null), z = P.useRef(null), q = Xe.map((v) => v.value), K = ne.map((v) => v.name), oe = Y.map((v) => v.name), _ = !r || r.trim() === "", pe = () => {
    const v = z.current;
    v && (v.scrollTop = v.scrollHeight);
  };
  P.useEffect(() => {
    pe();
  }, [i]), P.useEffect(() => {
    (async () => {
      try {
        const W = await He("workflows");
        ge(W.data || []);
        const L = await He("methods");
        J(L.data || []);
      } catch (W) {
        console.error("Error fetching lists:", W);
      }
    })();
  }, []), P.useEffect(() => {
    r && Nt(r);
  }, [r]), P.useEffect(() => {
    document.querySelectorAll('link[href*="prism-"]').forEach((L) => L.remove());
    const W = document.createElement("link");
    return W.rel = "stylesheet", W.href = Zt[d], document.head.appendChild(W), () => {
      W.remove();
    };
  }, [d]);
  const U = async (v) => {
    if (v.preventDefault(), !g.trim()) return;
    const W = { id: Date.now(), role: "user", content: g }, L = W.id + 1;
    c((O) => [
      ...O,
      W,
      { id: L, role: "assistant", content: "" }
    ]), u(""), M(!0);
    try {
      await qt([...i, W], (O) => {
        try {
          const D = O.split(`
`);
          for (const B of D)
            if (B.startsWith("data:")) {
              const H = B.slice(5).trim();
              if (H) {
                const Z = JSON.parse(H);
                let ee = "";
                Z.data ? ee = atob(Z.data) : Z.message && (ee = Z.message), ee && c((ie) => ie.map(
                  (se) => se.id === L && se.role === "assistant" ? { ...se, content: ee } : se
                ));
              }
            }
        } catch (D) {
          console.error("Error parsing chunk:", D, "Raw chunk:", O);
        }
      });
    } catch (O) {
      console.error("Error in chat workflow request:", O), c(
        (D) => D.map(
          (B) => B.id === L && B.role === "assistant" ? { ...B, content: "Sorry, there was an error processing your request." } : B
        )
      );
    } finally {
      M(!1), c((O) => O.filter((D) => D.role !== "assistant" || D.content && D.content.trim() !== ""));
    }
  }, Q = async (v) => {
    const W = { id: Date.now(), role: "user", content: v }, L = W.id + 1;
    c((B) => [...B, W, { id: L, role: "assistant", content: "" }]), pe();
    const O = p === "methods" ? "code" : "workflow", D = p === "methods" ? w || "node.js" : S || "node.js";
    M(!0);
    try {
      await Gt(O, v, D, (B) => {
        try {
          const H = B.split(`
`);
          for (const Z of H)
            if (Z.startsWith("data:")) {
              const ee = Z.slice(5).trim();
              if (ee) {
                const ie = JSON.parse(ee);
                let fe = "";
                ie.data ? fe = atob(ie.data) : ie.message && (fe = ie.message), fe && c((se) => se.map(
                  (be) => be.id === L && be.role === "assistant" ? { ...be, content: fe } : be
                ));
              }
            }
        } catch (H) {
          console.error("Error parsing chunk:", H, "Raw chunk:", B);
        }
        pe();
      });
    } catch (B) {
      console.error("Error fetching code:", B), c(
        (H) => H.map(
          (Z) => Z.id === L && Z.role === "assistant" ? { ...Z, content: "Sorry, there was an error processing your request." } : Z
        )
      );
    } finally {
      M(!1), c((B) => B.filter((H) => H.role !== "assistant" || H.content && H.content.trim() !== ""));
    }
  };
  function ae(v) {
    const W = v.content.match(/^```(\w+)\n([\s\S]*?)```$/);
    if (W) {
      const L = W[1], O = W[2].replace(/\u00A0/g, " "), D = Se.highlight(
        O,
        Se.languages[L] || Se.languages.javascript,
        L
      );
      return /* @__PURE__ */ G("div", { style: {
        position: "relative",
        background: "#23272f",
        color: "#f8f8f2",
        borderRadius: 8,
        padding: "1rem",
        margin: "1rem 0",
        overflowX: "auto"
      }, children: [
        /* @__PURE__ */ $("span", { style: {
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
        }, children: L }),
        /* @__PURE__ */ $(
          "button",
          {
            onClick: () => {
              navigator.clipboard.writeText(O), E(v.id), setTimeout(() => E(null), 1200);
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
            children: y === v.id ? "Copied!" : "Copy"
          }
        ),
        /* @__PURE__ */ $("div", { style: { height: 32 } }),
        /* @__PURE__ */ $("hr", { style: { border: 0, borderTop: "1px solid #444", margin: "0 0 1rem 0" } }),
        /* @__PURE__ */ $("pre", { className: `language-${L}`, style: { margin: 0 }, children: /* @__PURE__ */ $(
          "code",
          {
            className: `language-${L}`,
            dangerouslySetInnerHTML: { __html: D }
          }
        ) })
      ] });
    }
    return /* @__PURE__ */ $("div", { style: {
      display: "inline-block",
      background: v.role === "user" ? a : "#f3f4f6",
      color: v.role === "user" ? "#fff" : "#1f2937",
      borderRadius: 8,
      padding: "1rem",
      maxWidth: "80%",
      margin: "0.5rem 0",
      whiteSpace: "pre-wrap"
    }, children: /* @__PURE__ */ $("div", { style: { margin: 0, padding: 0 }, children: v.content }) });
  }
  return /* @__PURE__ */ G("div", { style: { height: s, width: l }, className: "swytchcode-root", children: [
    /* @__PURE__ */ $(Lt, {}),
    /* @__PURE__ */ $(Ft, { children: /* @__PURE__ */ G(Rt, { css: { borderColor: h }, children: [
      !_ && m && /* @__PURE__ */ $(jt, { children: /* @__PURE__ */ $("div", { style: { opacity: m ? 1 : 0, transition: "opacity 0.3s" }, children: /* @__PURE__ */ G(Et, { children: [
        /* @__PURE__ */ G(Pt, { children: [
          /* @__PURE__ */ $(
            Me,
            {
              className: p === "methods" ? "active" : "",
              onClick: () => k("methods"),
              children: "Methods"
            }
          ),
          /* @__PURE__ */ $(
            Me,
            {
              className: p === "workflows" ? "active" : "",
              onClick: () => k("workflows"),
              children: "Workflows"
            }
          )
        ] }),
        p === "workflows" && /* @__PURE__ */ G(xe, { children: [
          /* @__PURE__ */ $(ye, { children: /* @__PURE__ */ $(
            _e,
            {
              options: q,
              value: S,
              onChange: f,
              placeholder: "Select language"
            }
          ) }),
          /* @__PURE__ */ $(ye, { children: /* @__PURE__ */ $(
            Pe,
            {
              placeholder: "Search workflows...",
              value: R,
              onChange: (v) => F(v.target.value)
            }
          ) }),
          /* @__PURE__ */ $(Le, { style: { marginTop: "1rem", marginBottom: "0.5rem", fontWeight: 600 }, children: "Most used workflows" }),
          /* @__PURE__ */ $(De, { children: K.filter((v) => v.toLowerCase().includes(R.toLowerCase())).map((v) => /* @__PURE__ */ $(
            Oe,
            {
              onClick: () => Q(v),
              style: { cursor: "pointer" },
              children: v
            },
            `workflow-${v}`
          )) })
        ] }),
        p === "methods" && /* @__PURE__ */ G(xe, { children: [
          /* @__PURE__ */ $(ye, { children: /* @__PURE__ */ $(
            _e,
            {
              options: q,
              value: w,
              onChange: j,
              placeholder: "Select language"
            }
          ) }),
          /* @__PURE__ */ $(ye, { children: /* @__PURE__ */ $(
            Pe,
            {
              placeholder: "Search methods...",
              value: x,
              onChange: (v) => n(v.target.value)
            }
          ) }),
          /* @__PURE__ */ $(Le, { style: { marginTop: "1rem", marginBottom: "0.5rem", fontWeight: 600 }, children: "Methods List" }),
          /* @__PURE__ */ $(De, { children: oe.filter((v) => v.toLowerCase().includes(x.toLowerCase())).map((v) => /* @__PURE__ */ $(
            Oe,
            {
              onClick: () => Q(v),
              style: { cursor: "pointer" },
              children: v
            },
            `method-${v}`
          )) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ G(Ct, { children: [
        /* @__PURE__ */ G(It, { children: [
          /* @__PURE__ */ $(Bt, { "aria-label": "Toggle", onClick: () => A((v) => !v), children: m ? /* @__PURE__ */ $("svg", { width: "22", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", children: /* @__PURE__ */ $("path", { d: "M15 18l-6-6 6-6" }) }) : /* @__PURE__ */ $("svg", { width: "22", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", children: /* @__PURE__ */ $("path", { d: "M9 6l6 6-6 6" }) }) }),
          /* @__PURE__ */ $("span", { style: { marginLeft: "2.5rem", fontWeight: 600, fontSize: "1.08rem", whiteSpace: "nowrap" }, children: "Chat with API AI Assistant" }),
          /* @__PURE__ */ $("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center" }, children: /* @__PURE__ */ G(
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
                /* @__PURE__ */ G("svg", { width: "22", height: "22", viewBox: "0 0 500 500", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                  /* @__PURE__ */ $("path", { d: "M316.68,117.53l.02.04c-17.67-7.78-37.19-12.14-57.74-12.14-79.2,0-143.41,64.21-143.41,143.41,0,43.11,19.05,81.75,49.16,108.04l-13.69,17.58c-35.33-30.38-57.73-75.37-57.73-125.62,0-91.49,74.17-165.66,165.66-165.66,38,0,72.99,12.83,100.95,34.35h-43.23Z", fill: "#f4941f" }),
                  /* @__PURE__ */ $("path", { d: "M359.76,350.79c-25.9,25.61-61.49,41.45-100.79,41.45-13.77,0-27.07-1.98-39.68-5.6l-21.62,16.09c18.97,7.56,39.63,11.76,61.3,11.76,45.45,0,86.61-18.32,116.54-47.95l-15.75-15.75Z", fill: "#f4941f" }),
                  /* @__PURE__ */ $("polygon", { points: "375.31 147.06 286.59 147.06 155.64 300.53 220.24 300.53 270.21 257.09 142.61 416.82 358.39 243 293.21 243 375.31 147.06", fill: "#f4941f" })
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ $(Tt, { ref: z, children: _ ? /* @__PURE__ */ G("div", { style: {
          background: "#fee2e2",
          color: "#b91c1c",
          border: "1px solid #fca5a5",
          borderRadius: 8,
          padding: "1.5rem",
          margin: "2rem auto",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "1.1rem",
          maxWidth: 500
        }, children: [
          "SWYTCHCODE_API_KEY is missing. If you are the owner of this project, please generate a new key from ",
          /* @__PURE__ */ $("a", { href: "https://app.swytchcode.com", target: "_blank", rel: "noopener noreferrer", children: "https://app.swytchcode.com" }),
          ". Read more about it in the ",
          /* @__PURE__ */ $("a", { href: "https://docs.swytchcode.com/docs/getting-started/installation", target: "_blank", rel: "noopener noreferrer", children: "documentation" }),
          "."
        ] }) : /* @__PURE__ */ G(xe, { children: [
          i.filter((v) => v.content && v.content.trim() !== "").map((v) => /* @__PURE__ */ $("div", { style: { marginBottom: "1rem", textAlign: v.role === "user" ? "right" : "left" }, children: ae(v) }, v.id)),
          /* @__PURE__ */ $("div", { ref: X })
        ] }) }),
        /* @__PURE__ */ G(zt, { onSubmit: U, children: [
          /* @__PURE__ */ $(
            Wt,
            {
              placeholder: o || "Ask me anything...",
              value: g,
              onChange: (v) => u(v.target.value),
              disabled: _
            }
          ),
          /* @__PURE__ */ $(Mt, { type: "submit", style: { backgroundColor: t }, disabled: _, children: "Send" })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Ve as SWYTCHCODE_BASE_URL,
  Ne as SWYTCHCODE_STREAM_BASE_URL,
  Qt as Swytchcode
};
//# sourceMappingURL=swytchcode.es.js.map
