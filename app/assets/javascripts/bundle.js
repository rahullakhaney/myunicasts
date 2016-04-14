(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [
        function(require, module, exports) {
            var pSlice = Array.prototype.slice;
            var objectKeys = require('./lib/keys.js');
            var isArguments = require('./lib/is_arguments.js');
            var deepEqual = module.exports = function(actual, expected, opts) {
                if (!opts) opts = {};
                if (actual === expected) {
                    return true;
                } else if (actual instanceof Date && expected instanceof Date) {
                    return actual.getTime() === expected.getTime();
                } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
                    return opts.strict ? actual === expected : actual == expected;
                } else {
                    return objEquiv(actual, expected, opts);
                }
            }

            function isUndefinedOrNull(value) {
                return value === null || value === undefined;
            }

            function isBuffer(x) {
                if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
                if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
                    return false;
                }
                if (x.length > 0 && typeof x[0] !== 'number') return false;
                return true;
            }

            function objEquiv(a, b, opts) {
                var i, key;
                if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
                    return false;
                if (a.prototype !== b.prototype) return false;
                if (isArguments(a)) {
                    if (!isArguments(b)) {
                        return false;
                    }
                    a = pSlice.call(a);
                    b = pSlice.call(b);
                    return deepEqual(a, b, opts);
                }
                if (isBuffer(a)) {
                    if (!isBuffer(b)) {
                        return false;
                    }
                    if (a.length !== b.length) return false;
                    for (i = 0; i < a.length; i++) {
                        if (a[i] !== b[i]) return false;
                    }
                    return true;
                }
                try {
                    var ka = objectKeys(a),
                        kb = objectKeys(b);
                } catch (e) {
                    return false;
                }
                if (ka.length != kb.length)
                    return false;
                ka.sort();
                kb.sort();
                for (i = ka.length - 1; i >= 0; i--) {
                    if (ka[i] != kb[i])
                        return false;
                }
                for (i = ka.length - 1; i >= 0; i--) {
                    key = ka[i];
                    if (!deepEqual(a[key], b[key], opts)) return false;
                }
                return typeof a === typeof b;
            }
        }, {
            "./lib/is_arguments.js": 2,
            "./lib/keys.js": 3
        }
    ],
    2: [
        function(require, module, exports) {
            var supportsArgumentsClass = (function() {
                return Object.prototype.toString.call(arguments)
            })() == '[object Arguments]';
            exports = module.exports = supportsArgumentsClass ? supported : unsupported;
            exports.supported = supported;

            function supported(object) {
                return Object.prototype.toString.call(object) == '[object Arguments]';
            };
            exports.unsupported = unsupported;

            function unsupported(object) {
                return object && typeof object == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
            };
        }, {}
    ],
    3: [
        function(require, module, exports) {
            exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;
            exports.shim = shim;

            function shim(obj) {
                var keys = [];
                for (var key in obj) keys.push(key);
                return keys;
            }
        }, {}
    ],
    4: [
        function(require, module, exports) {
            module.exports = {
                "Aacute": "\u00C1",
                "aacute": "\u00E1",
                "Abreve": "\u0102",
                "abreve": "\u0103",
                "ac": "\u223E",
                "acd": "\u223F",
                "acE": "\u223E\u0333",
                "Acirc": "\u00C2",
                "acirc": "\u00E2",
                "acute": "\u00B4",
                "Acy": "\u0410",
                "acy": "\u0430",
                "AElig": "\u00C6",
                "aelig": "\u00E6",
                "af": "\u2061",
                "Afr": "\uD835\uDD04",
                "afr": "\uD835\uDD1E",
                "Agrave": "\u00C0",
                "agrave": "\u00E0",
                "alefsym": "\u2135",
                "aleph": "\u2135",
                "Alpha": "\u0391",
                "alpha": "\u03B1",
                "Amacr": "\u0100",
                "amacr": "\u0101",
                "amalg": "\u2A3F",
                "amp": "&",
                "AMP": "&",
                "andand": "\u2A55",
                "And": "\u2A53",
                "and": "\u2227",
                "andd": "\u2A5C",
                "andslope": "\u2A58",
                "andv": "\u2A5A",
                "ang": "\u2220",
                "ange": "\u29A4",
                "angle": "\u2220",
                "angmsdaa": "\u29A8",
                "angmsdab": "\u29A9",
                "angmsdac": "\u29AA",
                "angmsdad": "\u29AB",
                "angmsdae": "\u29AC",
                "angmsdaf": "\u29AD",
                "angmsdag": "\u29AE",
                "angmsdah": "\u29AF",
                "angmsd": "\u2221",
                "angrt": "\u221F",
                "angrtvb": "\u22BE",
                "angrtvbd": "\u299D",
                "angsph": "\u2222",
                "angst": "\u00C5",
                "angzarr": "\u237C",
                "Aogon": "\u0104",
                "aogon": "\u0105",
                "Aopf": "\uD835\uDD38",
                "aopf": "\uD835\uDD52",
                "apacir": "\u2A6F",
                "ap": "\u2248",
                "apE": "\u2A70",
                "ape": "\u224A",
                "apid": "\u224B",
                "apos": "'",
                "ApplyFunction": "\u2061",
                "approx": "\u2248",
                "approxeq": "\u224A",
                "Aring": "\u00C5",
                "aring": "\u00E5",
                "Ascr": "\uD835\uDC9C",
                "ascr": "\uD835\uDCB6",
                "Assign": "\u2254",
                "ast": "*",
                "asymp": "\u2248",
                "asympeq": "\u224D",
                "Atilde": "\u00C3",
                "atilde": "\u00E3",
                "Auml": "\u00C4",
                "auml": "\u00E4",
                "awconint": "\u2233",
                "awint": "\u2A11",
                "backcong": "\u224C",
                "backepsilon": "\u03F6",
                "backprime": "\u2035",
                "backsim": "\u223D",
                "backsimeq": "\u22CD",
                "Backslash": "\u2216",
                "Barv": "\u2AE7",
                "barvee": "\u22BD",
                "barwed": "\u2305",
                "Barwed": "\u2306",
                "barwedge": "\u2305",
                "bbrk": "\u23B5",
                "bbrktbrk": "\u23B6",
                "bcong": "\u224C",
                "Bcy": "\u0411",
                "bcy": "\u0431",
                "bdquo": "\u201E",
                "becaus": "\u2235",
                "because": "\u2235",
                "Because": "\u2235",
                "bemptyv": "\u29B0",
                "bepsi": "\u03F6",
                "bernou": "\u212C",
                "Bernoullis": "\u212C",
                "Beta": "\u0392",
                "beta": "\u03B2",
                "beth": "\u2136",
                "between": "\u226C",
                "Bfr": "\uD835\uDD05",
                "bfr": "\uD835\uDD1F",
                "bigcap": "\u22C2",
                "bigcirc": "\u25EF",
                "bigcup": "\u22C3",
                "bigodot": "\u2A00",
                "bigoplus": "\u2A01",
                "bigotimes": "\u2A02",
                "bigsqcup": "\u2A06",
                "bigstar": "\u2605",
                "bigtriangledown": "\u25BD",
                "bigtriangleup": "\u25B3",
                "biguplus": "\u2A04",
                "bigvee": "\u22C1",
                "bigwedge": "\u22C0",
                "bkarow": "\u290D",
                "blacklozenge": "\u29EB",
                "blacksquare": "\u25AA",
                "blacktriangle": "\u25B4",
                "blacktriangledown": "\u25BE",
                "blacktriangleleft": "\u25C2",
                "blacktriangleright": "\u25B8",
                "blank": "\u2423",
                "blk12": "\u2592",
                "blk14": "\u2591",
                "blk34": "\u2593",
                "block": "\u2588",
                "bne": "=\u20E5",
                "bnequiv": "\u2261\u20E5",
                "bNot": "\u2AED",
                "bnot": "\u2310",
                "Bopf": "\uD835\uDD39",
                "bopf": "\uD835\uDD53",
                "bot": "\u22A5",
                "bottom": "\u22A5",
                "bowtie": "\u22C8",
                "boxbox": "\u29C9",
                "boxdl": "\u2510",
                "boxdL": "\u2555",
                "boxDl": "\u2556",
                "boxDL": "\u2557",
                "boxdr": "\u250C",
                "boxdR": "\u2552",
                "boxDr": "\u2553",
                "boxDR": "\u2554",
                "boxh": "\u2500",
                "boxH": "\u2550",
                "boxhd": "\u252C",
                "boxHd": "\u2564",
                "boxhD": "\u2565",
                "boxHD": "\u2566",
                "boxhu": "\u2534",
                "boxHu": "\u2567",
                "boxhU": "\u2568",
                "boxHU": "\u2569",
                "boxminus": "\u229F",
                "boxplus": "\u229E",
                "boxtimes": "\u22A0",
                "boxul": "\u2518",
                "boxuL": "\u255B",
                "boxUl": "\u255C",
                "boxUL": "\u255D",
                "boxur": "\u2514",
                "boxuR": "\u2558",
                "boxUr": "\u2559",
                "boxUR": "\u255A",
                "boxv": "\u2502",
                "boxV": "\u2551",
                "boxvh": "\u253C",
                "boxvH": "\u256A",
                "boxVh": "\u256B",
                "boxVH": "\u256C",
                "boxvl": "\u2524",
                "boxvL": "\u2561",
                "boxVl": "\u2562",
                "boxVL": "\u2563",
                "boxvr": "\u251C",
                "boxvR": "\u255E",
                "boxVr": "\u255F",
                "boxVR": "\u2560",
                "bprime": "\u2035",
                "breve": "\u02D8",
                "Breve": "\u02D8",
                "brvbar": "\u00A6",
                "bscr": "\uD835\uDCB7",
                "Bscr": "\u212C",
                "bsemi": "\u204F",
                "bsim": "\u223D",
                "bsime": "\u22CD",
                "bsolb": "\u29C5",
                "bsol": "\\",
                "bsolhsub": "\u27C8",
                "bull": "\u2022",
                "bullet": "\u2022",
                "bump": "\u224E",
                "bumpE": "\u2AAE",
                "bumpe": "\u224F",
                "Bumpeq": "\u224E",
                "bumpeq": "\u224F",
                "Cacute": "\u0106",
                "cacute": "\u0107",
                "capand": "\u2A44",
                "capbrcup": "\u2A49",
                "capcap": "\u2A4B",
                "cap": "\u2229",
                "Cap": "\u22D2",
                "capcup": "\u2A47",
                "capdot": "\u2A40",
                "CapitalDifferentialD": "\u2145",
                "caps": "\u2229\uFE00",
                "caret": "\u2041",
                "caron": "\u02C7",
                "Cayleys": "\u212D",
                "ccaps": "\u2A4D",
                "Ccaron": "\u010C",
                "ccaron": "\u010D",
                "Ccedil": "\u00C7",
                "ccedil": "\u00E7",
                "Ccirc": "\u0108",
                "ccirc": "\u0109",
                "Cconint": "\u2230",
                "ccups": "\u2A4C",
                "ccupssm": "\u2A50",
                "Cdot": "\u010A",
                "cdot": "\u010B",
                "cedil": "\u00B8",
                "Cedilla": "\u00B8",
                "cemptyv": "\u29B2",
                "cent": "\u00A2",
                "centerdot": "\u00B7",
                "CenterDot": "\u00B7",
                "cfr": "\uD835\uDD20",
                "Cfr": "\u212D",
                "CHcy": "\u0427",
                "chcy": "\u0447",
                "check": "\u2713",
                "checkmark": "\u2713",
                "Chi": "\u03A7",
                "chi": "\u03C7",
                "circ": "\u02C6",
                "circeq": "\u2257",
                "circlearrowleft": "\u21BA",
                "circlearrowright": "\u21BB",
                "circledast": "\u229B",
                "circledcirc": "\u229A",
                "circleddash": "\u229D",
                "CircleDot": "\u2299",
                "circledR": "\u00AE",
                "circledS": "\u24C8",
                "CircleMinus": "\u2296",
                "CirclePlus": "\u2295",
                "CircleTimes": "\u2297",
                "cir": "\u25CB",
                "cirE": "\u29C3",
                "cire": "\u2257",
                "cirfnint": "\u2A10",
                "cirmid": "\u2AEF",
                "cirscir": "\u29C2",
                "ClockwiseContourIntegral": "\u2232",
                "CloseCurlyDoubleQuote": "\u201D",
                "CloseCurlyQuote": "\u2019",
                "clubs": "\u2663",
                "clubsuit": "\u2663",
                "colon": ":",
                "Colon": "\u2237",
                "Colone": "\u2A74",
                "colone": "\u2254",
                "coloneq": "\u2254",
                "comma": ",",
                "commat": "@",
                "comp": "\u2201",
                "compfn": "\u2218",
                "complement": "\u2201",
                "complexes": "\u2102",
                "cong": "\u2245",
                "congdot": "\u2A6D",
                "Congruent": "\u2261",
                "conint": "\u222E",
                "Conint": "\u222F",
                "ContourIntegral": "\u222E",
                "copf": "\uD835\uDD54",
                "Copf": "\u2102",
                "coprod": "\u2210",
                "Coproduct": "\u2210",
                "copy": "\u00A9",
                "COPY": "\u00A9",
                "copysr": "\u2117",
                "CounterClockwiseContourIntegral": "\u2233",
                "crarr": "\u21B5",
                "cross": "\u2717",
                "Cross": "\u2A2F",
                "Cscr": "\uD835\uDC9E",
                "cscr": "\uD835\uDCB8",
                "csub": "\u2ACF",
                "csube": "\u2AD1",
                "csup": "\u2AD0",
                "csupe": "\u2AD2",
                "ctdot": "\u22EF",
                "cudarrl": "\u2938",
                "cudarrr": "\u2935",
                "cuepr": "\u22DE",
                "cuesc": "\u22DF",
                "cularr": "\u21B6",
                "cularrp": "\u293D",
                "cupbrcap": "\u2A48",
                "cupcap": "\u2A46",
                "CupCap": "\u224D",
                "cup": "\u222A",
                "Cup": "\u22D3",
                "cupcup": "\u2A4A",
                "cupdot": "\u228D",
                "cupor": "\u2A45",
                "cups": "\u222A\uFE00",
                "curarr": "\u21B7",
                "curarrm": "\u293C",
                "curlyeqprec": "\u22DE",
                "curlyeqsucc": "\u22DF",
                "curlyvee": "\u22CE",
                "curlywedge": "\u22CF",
                "curren": "\u00A4",
                "curvearrowleft": "\u21B6",
                "curvearrowright": "\u21B7",
                "cuvee": "\u22CE",
                "cuwed": "\u22CF",
                "cwconint": "\u2232",
                "cwint": "\u2231",
                "cylcty": "\u232D",
                "dagger": "\u2020",
                "Dagger": "\u2021",
                "daleth": "\u2138",
                "darr": "\u2193",
                "Darr": "\u21A1",
                "dArr": "\u21D3",
                "dash": "\u2010",
                "Dashv": "\u2AE4",
                "dashv": "\u22A3",
                "dbkarow": "\u290F",
                "dblac": "\u02DD",
                "Dcaron": "\u010E",
                "dcaron": "\u010F",
                "Dcy": "\u0414",
                "dcy": "\u0434",
                "ddagger": "\u2021",
                "ddarr": "\u21CA",
                "DD": "\u2145",
                "dd": "\u2146",
                "DDotrahd": "\u2911",
                "ddotseq": "\u2A77",
                "deg": "\u00B0",
                "Del": "\u2207",
                "Delta": "\u0394",
                "delta": "\u03B4",
                "demptyv": "\u29B1",
                "dfisht": "\u297F",
                "Dfr": "\uD835\uDD07",
                "dfr": "\uD835\uDD21",
                "dHar": "\u2965",
                "dharl": "\u21C3",
                "dharr": "\u21C2",
                "DiacriticalAcute": "\u00B4",
                "DiacriticalDot": "\u02D9",
                "DiacriticalDoubleAcute": "\u02DD",
                "DiacriticalGrave": "`",
                "DiacriticalTilde": "\u02DC",
                "diam": "\u22C4",
                "diamond": "\u22C4",
                "Diamond": "\u22C4",
                "diamondsuit": "\u2666",
                "diams": "\u2666",
                "die": "\u00A8",
                "DifferentialD": "\u2146",
                "digamma": "\u03DD",
                "disin": "\u22F2",
                "div": "\u00F7",
                "divide": "\u00F7",
                "divideontimes": "\u22C7",
                "divonx": "\u22C7",
                "DJcy": "\u0402",
                "djcy": "\u0452",
                "dlcorn": "\u231E",
                "dlcrop": "\u230D",
                "dollar": "$",
                "Dopf": "\uD835\uDD3B",
                "dopf": "\uD835\uDD55",
                "Dot": "\u00A8",
                "dot": "\u02D9",
                "DotDot": "\u20DC",
                "doteq": "\u2250",
                "doteqdot": "\u2251",
                "DotEqual": "\u2250",
                "dotminus": "\u2238",
                "dotplus": "\u2214",
                "dotsquare": "\u22A1",
                "doublebarwedge": "\u2306",
                "DoubleContourIntegral": "\u222F",
                "DoubleDot": "\u00A8",
                "DoubleDownArrow": "\u21D3",
                "DoubleLeftArrow": "\u21D0",
                "DoubleLeftRightArrow": "\u21D4",
                "DoubleLeftTee": "\u2AE4",
                "DoubleLongLeftArrow": "\u27F8",
                "DoubleLongLeftRightArrow": "\u27FA",
                "DoubleLongRightArrow": "\u27F9",
                "DoubleRightArrow": "\u21D2",
                "DoubleRightTee": "\u22A8",
                "DoubleUpArrow": "\u21D1",
                "DoubleUpDownArrow": "\u21D5",
                "DoubleVerticalBar": "\u2225",
                "DownArrowBar": "\u2913",
                "downarrow": "\u2193",
                "DownArrow": "\u2193",
                "Downarrow": "\u21D3",
                "DownArrowUpArrow": "\u21F5",
                "DownBreve": "\u0311",
                "downdownarrows": "\u21CA",
                "downharpoonleft": "\u21C3",
                "downharpoonright": "\u21C2",
                "DownLeftRightVector": "\u2950",
                "DownLeftTeeVector": "\u295E",
                "DownLeftVectorBar": "\u2956",
                "DownLeftVector": "\u21BD",
                "DownRightTeeVector": "\u295F",
                "DownRightVectorBar": "\u2957",
                "DownRightVector": "\u21C1",
                "DownTeeArrow": "\u21A7",
                "DownTee": "\u22A4",
                "drbkarow": "\u2910",
                "drcorn": "\u231F",
                "drcrop": "\u230C",
                "Dscr": "\uD835\uDC9F",
                "dscr": "\uD835\uDCB9",
                "DScy": "\u0405",
                "dscy": "\u0455",
                "dsol": "\u29F6",
                "Dstrok": "\u0110",
                "dstrok": "\u0111",
                "dtdot": "\u22F1",
                "dtri": "\u25BF",
                "dtrif": "\u25BE",
                "duarr": "\u21F5",
                "duhar": "\u296F",
                "dwangle": "\u29A6",
                "DZcy": "\u040F",
                "dzcy": "\u045F",
                "dzigrarr": "\u27FF",
                "Eacute": "\u00C9",
                "eacute": "\u00E9",
                "easter": "\u2A6E",
                "Ecaron": "\u011A",
                "ecaron": "\u011B",
                "Ecirc": "\u00CA",
                "ecirc": "\u00EA",
                "ecir": "\u2256",
                "ecolon": "\u2255",
                "Ecy": "\u042D",
                "ecy": "\u044D",
                "eDDot": "\u2A77",
                "Edot": "\u0116",
                "edot": "\u0117",
                "eDot": "\u2251",
                "ee": "\u2147",
                "efDot": "\u2252",
                "Efr": "\uD835\uDD08",
                "efr": "\uD835\uDD22",
                "eg": "\u2A9A",
                "Egrave": "\u00C8",
                "egrave": "\u00E8",
                "egs": "\u2A96",
                "egsdot": "\u2A98",
                "el": "\u2A99",
                "Element": "\u2208",
                "elinters": "\u23E7",
                "ell": "\u2113",
                "els": "\u2A95",
                "elsdot": "\u2A97",
                "Emacr": "\u0112",
                "emacr": "\u0113",
                "empty": "\u2205",
                "emptyset": "\u2205",
                "EmptySmallSquare": "\u25FB",
                "emptyv": "\u2205",
                "EmptyVerySmallSquare": "\u25AB",
                "emsp13": "\u2004",
                "emsp14": "\u2005",
                "emsp": "\u2003",
                "ENG": "\u014A",
                "eng": "\u014B",
                "ensp": "\u2002",
                "Eogon": "\u0118",
                "eogon": "\u0119",
                "Eopf": "\uD835\uDD3C",
                "eopf": "\uD835\uDD56",
                "epar": "\u22D5",
                "eparsl": "\u29E3",
                "eplus": "\u2A71",
                "epsi": "\u03B5",
                "Epsilon": "\u0395",
                "epsilon": "\u03B5",
                "epsiv": "\u03F5",
                "eqcirc": "\u2256",
                "eqcolon": "\u2255",
                "eqsim": "\u2242",
                "eqslantgtr": "\u2A96",
                "eqslantless": "\u2A95",
                "Equal": "\u2A75",
                "equals": "=",
                "EqualTilde": "\u2242",
                "equest": "\u225F",
                "Equilibrium": "\u21CC",
                "equiv": "\u2261",
                "equivDD": "\u2A78",
                "eqvparsl": "\u29E5",
                "erarr": "\u2971",
                "erDot": "\u2253",
                "escr": "\u212F",
                "Escr": "\u2130",
                "esdot": "\u2250",
                "Esim": "\u2A73",
                "esim": "\u2242",
                "Eta": "\u0397",
                "eta": "\u03B7",
                "ETH": "\u00D0",
                "eth": "\u00F0",
                "Euml": "\u00CB",
                "euml": "\u00EB",
                "euro": "\u20AC",
                "excl": "!",
                "exist": "\u2203",
                "Exists": "\u2203",
                "expectation": "\u2130",
                "exponentiale": "\u2147",
                "ExponentialE": "\u2147",
                "fallingdotseq": "\u2252",
                "Fcy": "\u0424",
                "fcy": "\u0444",
                "female": "\u2640",
                "ffilig": "\uFB03",
                "fflig": "\uFB00",
                "ffllig": "\uFB04",
                "Ffr": "\uD835\uDD09",
                "ffr": "\uD835\uDD23",
                "filig": "\uFB01",
                "FilledSmallSquare": "\u25FC",
                "FilledVerySmallSquare": "\u25AA",
                "fjlig": "fj",
                "flat": "\u266D",
                "fllig": "\uFB02",
                "fltns": "\u25B1",
                "fnof": "\u0192",
                "Fopf": "\uD835\uDD3D",
                "fopf": "\uD835\uDD57",
                "forall": "\u2200",
                "ForAll": "\u2200",
                "fork": "\u22D4",
                "forkv": "\u2AD9",
                "Fouriertrf": "\u2131",
                "fpartint": "\u2A0D",
                "frac12": "\u00BD",
                "frac13": "\u2153",
                "frac14": "\u00BC",
                "frac15": "\u2155",
                "frac16": "\u2159",
                "frac18": "\u215B",
                "frac23": "\u2154",
                "frac25": "\u2156",
                "frac34": "\u00BE",
                "frac35": "\u2157",
                "frac38": "\u215C",
                "frac45": "\u2158",
                "frac56": "\u215A",
                "frac58": "\u215D",
                "frac78": "\u215E",
                "frasl": "\u2044",
                "frown": "\u2322",
                "fscr": "\uD835\uDCBB",
                "Fscr": "\u2131",
                "gacute": "\u01F5",
                "Gamma": "\u0393",
                "gamma": "\u03B3",
                "Gammad": "\u03DC",
                "gammad": "\u03DD",
                "gap": "\u2A86",
                "Gbreve": "\u011E",
                "gbreve": "\u011F",
                "Gcedil": "\u0122",
                "Gcirc": "\u011C",
                "gcirc": "\u011D",
                "Gcy": "\u0413",
                "gcy": "\u0433",
                "Gdot": "\u0120",
                "gdot": "\u0121",
                "ge": "\u2265",
                "gE": "\u2267",
                "gEl": "\u2A8C",
                "gel": "\u22DB",
                "geq": "\u2265",
                "geqq": "\u2267",
                "geqslant": "\u2A7E",
                "gescc": "\u2AA9",
                "ges": "\u2A7E",
                "gesdot": "\u2A80",
                "gesdoto": "\u2A82",
                "gesdotol": "\u2A84",
                "gesl": "\u22DB\uFE00",
                "gesles": "\u2A94",
                "Gfr": "\uD835\uDD0A",
                "gfr": "\uD835\uDD24",
                "gg": "\u226B",
                "Gg": "\u22D9",
                "ggg": "\u22D9",
                "gimel": "\u2137",
                "GJcy": "\u0403",
                "gjcy": "\u0453",
                "gla": "\u2AA5",
                "gl": "\u2277",
                "glE": "\u2A92",
                "glj": "\u2AA4",
                "gnap": "\u2A8A",
                "gnapprox": "\u2A8A",
                "gne": "\u2A88",
                "gnE": "\u2269",
                "gneq": "\u2A88",
                "gneqq": "\u2269",
                "gnsim": "\u22E7",
                "Gopf": "\uD835\uDD3E",
                "gopf": "\uD835\uDD58",
                "grave": "`",
                "GreaterEqual": "\u2265",
                "GreaterEqualLess": "\u22DB",
                "GreaterFullEqual": "\u2267",
                "GreaterGreater": "\u2AA2",
                "GreaterLess": "\u2277",
                "GreaterSlantEqual": "\u2A7E",
                "GreaterTilde": "\u2273",
                "Gscr": "\uD835\uDCA2",
                "gscr": "\u210A",
                "gsim": "\u2273",
                "gsime": "\u2A8E",
                "gsiml": "\u2A90",
                "gtcc": "\u2AA7",
                "gtcir": "\u2A7A",
                "gt": ">",
                "GT": ">",
                "Gt": "\u226B",
                "gtdot": "\u22D7",
                "gtlPar": "\u2995",
                "gtquest": "\u2A7C",
                "gtrapprox": "\u2A86",
                "gtrarr": "\u2978",
                "gtrdot": "\u22D7",
                "gtreqless": "\u22DB",
                "gtreqqless": "\u2A8C",
                "gtrless": "\u2277",
                "gtrsim": "\u2273",
                "gvertneqq": "\u2269\uFE00",
                "gvnE": "\u2269\uFE00",
                "Hacek": "\u02C7",
                "hairsp": "\u200A",
                "half": "\u00BD",
                "hamilt": "\u210B",
                "HARDcy": "\u042A",
                "hardcy": "\u044A",
                "harrcir": "\u2948",
                "harr": "\u2194",
                "hArr": "\u21D4",
                "harrw": "\u21AD",
                "Hat": "^",
                "hbar": "\u210F",
                "Hcirc": "\u0124",
                "hcirc": "\u0125",
                "hearts": "\u2665",
                "heartsuit": "\u2665",
                "hellip": "\u2026",
                "hercon": "\u22B9",
                "hfr": "\uD835\uDD25",
                "Hfr": "\u210C",
                "HilbertSpace": "\u210B",
                "hksearow": "\u2925",
                "hkswarow": "\u2926",
                "hoarr": "\u21FF",
                "homtht": "\u223B",
                "hookleftarrow": "\u21A9",
                "hookrightarrow": "\u21AA",
                "hopf": "\uD835\uDD59",
                "Hopf": "\u210D",
                "horbar": "\u2015",
                "HorizontalLine": "\u2500",
                "hscr": "\uD835\uDCBD",
                "Hscr": "\u210B",
                "hslash": "\u210F",
                "Hstrok": "\u0126",
                "hstrok": "\u0127",
                "HumpDownHump": "\u224E",
                "HumpEqual": "\u224F",
                "hybull": "\u2043",
                "hyphen": "\u2010",
                "Iacute": "\u00CD",
                "iacute": "\u00ED",
                "ic": "\u2063",
                "Icirc": "\u00CE",
                "icirc": "\u00EE",
                "Icy": "\u0418",
                "icy": "\u0438",
                "Idot": "\u0130",
                "IEcy": "\u0415",
                "iecy": "\u0435",
                "iexcl": "\u00A1",
                "iff": "\u21D4",
                "ifr": "\uD835\uDD26",
                "Ifr": "\u2111",
                "Igrave": "\u00CC",
                "igrave": "\u00EC",
                "ii": "\u2148",
                "iiiint": "\u2A0C",
                "iiint": "\u222D",
                "iinfin": "\u29DC",
                "iiota": "\u2129",
                "IJlig": "\u0132",
                "ijlig": "\u0133",
                "Imacr": "\u012A",
                "imacr": "\u012B",
                "image": "\u2111",
                "ImaginaryI": "\u2148",
                "imagline": "\u2110",
                "imagpart": "\u2111",
                "imath": "\u0131",
                "Im": "\u2111",
                "imof": "\u22B7",
                "imped": "\u01B5",
                "Implies": "\u21D2",
                "incare": "\u2105",
                "in": "\u2208",
                "infin": "\u221E",
                "infintie": "\u29DD",
                "inodot": "\u0131",
                "intcal": "\u22BA",
                "int": "\u222B",
                "Int": "\u222C",
                "integers": "\u2124",
                "Integral": "\u222B",
                "intercal": "\u22BA",
                "Intersection": "\u22C2",
                "intlarhk": "\u2A17",
                "intprod": "\u2A3C",
                "InvisibleComma": "\u2063",
                "InvisibleTimes": "\u2062",
                "IOcy": "\u0401",
                "iocy": "\u0451",
                "Iogon": "\u012E",
                "iogon": "\u012F",
                "Iopf": "\uD835\uDD40",
                "iopf": "\uD835\uDD5A",
                "Iota": "\u0399",
                "iota": "\u03B9",
                "iprod": "\u2A3C",
                "iquest": "\u00BF",
                "iscr": "\uD835\uDCBE",
                "Iscr": "\u2110",
                "isin": "\u2208",
                "isindot": "\u22F5",
                "isinE": "\u22F9",
                "isins": "\u22F4",
                "isinsv": "\u22F3",
                "isinv": "\u2208",
                "it": "\u2062",
                "Itilde": "\u0128",
                "itilde": "\u0129",
                "Iukcy": "\u0406",
                "iukcy": "\u0456",
                "Iuml": "\u00CF",
                "iuml": "\u00EF",
                "Jcirc": "\u0134",
                "jcirc": "\u0135",
                "Jcy": "\u0419",
                "jcy": "\u0439",
                "Jfr": "\uD835\uDD0D",
                "jfr": "\uD835\uDD27",
                "jmath": "\u0237",
                "Jopf": "\uD835\uDD41",
                "jopf": "\uD835\uDD5B",
                "Jscr": "\uD835\uDCA5",
                "jscr": "\uD835\uDCBF",
                "Jsercy": "\u0408",
                "jsercy": "\u0458",
                "Jukcy": "\u0404",
                "jukcy": "\u0454",
                "Kappa": "\u039A",
                "kappa": "\u03BA",
                "kappav": "\u03F0",
                "Kcedil": "\u0136",
                "kcedil": "\u0137",
                "Kcy": "\u041A",
                "kcy": "\u043A",
                "Kfr": "\uD835\uDD0E",
                "kfr": "\uD835\uDD28",
                "kgreen": "\u0138",
                "KHcy": "\u0425",
                "khcy": "\u0445",
                "KJcy": "\u040C",
                "kjcy": "\u045C",
                "Kopf": "\uD835\uDD42",
                "kopf": "\uD835\uDD5C",
                "Kscr": "\uD835\uDCA6",
                "kscr": "\uD835\uDCC0",
                "lAarr": "\u21DA",
                "Lacute": "\u0139",
                "lacute": "\u013A",
                "laemptyv": "\u29B4",
                "lagran": "\u2112",
                "Lambda": "\u039B",
                "lambda": "\u03BB",
                "lang": "\u27E8",
                "Lang": "\u27EA",
                "langd": "\u2991",
                "langle": "\u27E8",
                "lap": "\u2A85",
                "Laplacetrf": "\u2112",
                "laquo": "\u00AB",
                "larrb": "\u21E4",
                "larrbfs": "\u291F",
                "larr": "\u2190",
                "Larr": "\u219E",
                "lArr": "\u21D0",
                "larrfs": "\u291D",
                "larrhk": "\u21A9",
                "larrlp": "\u21AB",
                "larrpl": "\u2939",
                "larrsim": "\u2973",
                "larrtl": "\u21A2",
                "latail": "\u2919",
                "lAtail": "\u291B",
                "lat": "\u2AAB",
                "late": "\u2AAD",
                "lates": "\u2AAD\uFE00",
                "lbarr": "\u290C",
                "lBarr": "\u290E",
                "lbbrk": "\u2772",
                "lbrace": "{",
                "lbrack": "[",
                "lbrke": "\u298B",
                "lbrksld": "\u298F",
                "lbrkslu": "\u298D",
                "Lcaron": "\u013D",
                "lcaron": "\u013E",
                "Lcedil": "\u013B",
                "lcedil": "\u013C",
                "lceil": "\u2308",
                "lcub": "{",
                "Lcy": "\u041B",
                "lcy": "\u043B",
                "ldca": "\u2936",
                "ldquo": "\u201C",
                "ldquor": "\u201E",
                "ldrdhar": "\u2967",
                "ldrushar": "\u294B",
                "ldsh": "\u21B2",
                "le": "\u2264",
                "lE": "\u2266",
                "LeftAngleBracket": "\u27E8",
                "LeftArrowBar": "\u21E4",
                "leftarrow": "\u2190",
                "LeftArrow": "\u2190",
                "Leftarrow": "\u21D0",
                "LeftArrowRightArrow": "\u21C6",
                "leftarrowtail": "\u21A2",
                "LeftCeiling": "\u2308",
                "LeftDoubleBracket": "\u27E6",
                "LeftDownTeeVector": "\u2961",
                "LeftDownVectorBar": "\u2959",
                "LeftDownVector": "\u21C3",
                "LeftFloor": "\u230A",
                "leftharpoondown": "\u21BD",
                "leftharpoonup": "\u21BC",
                "leftleftarrows": "\u21C7",
                "leftrightarrow": "\u2194",
                "LeftRightArrow": "\u2194",
                "Leftrightarrow": "\u21D4",
                "leftrightarrows": "\u21C6",
                "leftrightharpoons": "\u21CB",
                "leftrightsquigarrow": "\u21AD",
                "LeftRightVector": "\u294E",
                "LeftTeeArrow": "\u21A4",
                "LeftTee": "\u22A3",
                "LeftTeeVector": "\u295A",
                "leftthreetimes": "\u22CB",
                "LeftTriangleBar": "\u29CF",
                "LeftTriangle": "\u22B2",
                "LeftTriangleEqual": "\u22B4",
                "LeftUpDownVector": "\u2951",
                "LeftUpTeeVector": "\u2960",
                "LeftUpVectorBar": "\u2958",
                "LeftUpVector": "\u21BF",
                "LeftVectorBar": "\u2952",
                "LeftVector": "\u21BC",
                "lEg": "\u2A8B",
                "leg": "\u22DA",
                "leq": "\u2264",
                "leqq": "\u2266",
                "leqslant": "\u2A7D",
                "lescc": "\u2AA8",
                "les": "\u2A7D",
                "lesdot": "\u2A7F",
                "lesdoto": "\u2A81",
                "lesdotor": "\u2A83",
                "lesg": "\u22DA\uFE00",
                "lesges": "\u2A93",
                "lessapprox": "\u2A85",
                "lessdot": "\u22D6",
                "lesseqgtr": "\u22DA",
                "lesseqqgtr": "\u2A8B",
                "LessEqualGreater": "\u22DA",
                "LessFullEqual": "\u2266",
                "LessGreater": "\u2276",
                "lessgtr": "\u2276",
                "LessLess": "\u2AA1",
                "lesssim": "\u2272",
                "LessSlantEqual": "\u2A7D",
                "LessTilde": "\u2272",
                "lfisht": "\u297C",
                "lfloor": "\u230A",
                "Lfr": "\uD835\uDD0F",
                "lfr": "\uD835\uDD29",
                "lg": "\u2276",
                "lgE": "\u2A91",
                "lHar": "\u2962",
                "lhard": "\u21BD",
                "lharu": "\u21BC",
                "lharul": "\u296A",
                "lhblk": "\u2584",
                "LJcy": "\u0409",
                "ljcy": "\u0459",
                "llarr": "\u21C7",
                "ll": "\u226A",
                "Ll": "\u22D8",
                "llcorner": "\u231E",
                "Lleftarrow": "\u21DA",
                "llhard": "\u296B",
                "lltri": "\u25FA",
                "Lmidot": "\u013F",
                "lmidot": "\u0140",
                "lmoustache": "\u23B0",
                "lmoust": "\u23B0",
                "lnap": "\u2A89",
                "lnapprox": "\u2A89",
                "lne": "\u2A87",
                "lnE": "\u2268",
                "lneq": "\u2A87",
                "lneqq": "\u2268",
                "lnsim": "\u22E6",
                "loang": "\u27EC",
                "loarr": "\u21FD",
                "lobrk": "\u27E6",
                "longleftarrow": "\u27F5",
                "LongLeftArrow": "\u27F5",
                "Longleftarrow": "\u27F8",
                "longleftrightarrow": "\u27F7",
                "LongLeftRightArrow": "\u27F7",
                "Longleftrightarrow": "\u27FA",
                "longmapsto": "\u27FC",
                "longrightarrow": "\u27F6",
                "LongRightArrow": "\u27F6",
                "Longrightarrow": "\u27F9",
                "looparrowleft": "\u21AB",
                "looparrowright": "\u21AC",
                "lopar": "\u2985",
                "Lopf": "\uD835\uDD43",
                "lopf": "\uD835\uDD5D",
                "loplus": "\u2A2D",
                "lotimes": "\u2A34",
                "lowast": "\u2217",
                "lowbar": "_",
                "LowerLeftArrow": "\u2199",
                "LowerRightArrow": "\u2198",
                "loz": "\u25CA",
                "lozenge": "\u25CA",
                "lozf": "\u29EB",
                "lpar": "(",
                "lparlt": "\u2993",
                "lrarr": "\u21C6",
                "lrcorner": "\u231F",
                "lrhar": "\u21CB",
                "lrhard": "\u296D",
                "lrm": "\u200E",
                "lrtri": "\u22BF",
                "lsaquo": "\u2039",
                "lscr": "\uD835\uDCC1",
                "Lscr": "\u2112",
                "lsh": "\u21B0",
                "Lsh": "\u21B0",
                "lsim": "\u2272",
                "lsime": "\u2A8D",
                "lsimg": "\u2A8F",
                "lsqb": "[",
                "lsquo": "\u2018",
                "lsquor": "\u201A",
                "Lstrok": "\u0141",
                "lstrok": "\u0142",
                "ltcc": "\u2AA6",
                "ltcir": "\u2A79",
                "lt": "<",
                "LT": "<",
                "Lt": "\u226A",
                "ltdot": "\u22D6",
                "lthree": "\u22CB",
                "ltimes": "\u22C9",
                "ltlarr": "\u2976",
                "ltquest": "\u2A7B",
                "ltri": "\u25C3",
                "ltrie": "\u22B4",
                "ltrif": "\u25C2",
                "ltrPar": "\u2996",
                "lurdshar": "\u294A",
                "luruhar": "\u2966",
                "lvertneqq": "\u2268\uFE00",
                "lvnE": "\u2268\uFE00",
                "macr": "\u00AF",
                "male": "\u2642",
                "malt": "\u2720",
                "maltese": "\u2720",
                "Map": "\u2905",
                "map": "\u21A6",
                "mapsto": "\u21A6",
                "mapstodown": "\u21A7",
                "mapstoleft": "\u21A4",
                "mapstoup": "\u21A5",
                "marker": "\u25AE",
                "mcomma": "\u2A29",
                "Mcy": "\u041C",
                "mcy": "\u043C",
                "mdash": "\u2014",
                "mDDot": "\u223A",
                "measuredangle": "\u2221",
                "MediumSpace": "\u205F",
                "Mellintrf": "\u2133",
                "Mfr": "\uD835\uDD10",
                "mfr": "\uD835\uDD2A",
                "mho": "\u2127",
                "micro": "\u00B5",
                "midast": "*",
                "midcir": "\u2AF0",
                "mid": "\u2223",
                "middot": "\u00B7",
                "minusb": "\u229F",
                "minus": "\u2212",
                "minusd": "\u2238",
                "minusdu": "\u2A2A",
                "MinusPlus": "\u2213",
                "mlcp": "\u2ADB",
                "mldr": "\u2026",
                "mnplus": "\u2213",
                "models": "\u22A7",
                "Mopf": "\uD835\uDD44",
                "mopf": "\uD835\uDD5E",
                "mp": "\u2213",
                "mscr": "\uD835\uDCC2",
                "Mscr": "\u2133",
                "mstpos": "\u223E",
                "Mu": "\u039C",
                "mu": "\u03BC",
                "multimap": "\u22B8",
                "mumap": "\u22B8",
                "nabla": "\u2207",
                "Nacute": "\u0143",
                "nacute": "\u0144",
                "nang": "\u2220\u20D2",
                "nap": "\u2249",
                "napE": "\u2A70\u0338",
                "napid": "\u224B\u0338",
                "napos": "\u0149",
                "napprox": "\u2249",
                "natural": "\u266E",
                "naturals": "\u2115",
                "natur": "\u266E",
                "nbsp": "\u00A0",
                "nbump": "\u224E\u0338",
                "nbumpe": "\u224F\u0338",
                "ncap": "\u2A43",
                "Ncaron": "\u0147",
                "ncaron": "\u0148",
                "Ncedil": "\u0145",
                "ncedil": "\u0146",
                "ncong": "\u2247",
                "ncongdot": "\u2A6D\u0338",
                "ncup": "\u2A42",
                "Ncy": "\u041D",
                "ncy": "\u043D",
                "ndash": "\u2013",
                "nearhk": "\u2924",
                "nearr": "\u2197",
                "neArr": "\u21D7",
                "nearrow": "\u2197",
                "ne": "\u2260",
                "nedot": "\u2250\u0338",
                "NegativeMediumSpace": "\u200B",
                "NegativeThickSpace": "\u200B",
                "NegativeThinSpace": "\u200B",
                "NegativeVeryThinSpace": "\u200B",
                "nequiv": "\u2262",
                "nesear": "\u2928",
                "nesim": "\u2242\u0338",
                "NestedGreaterGreater": "\u226B",
                "NestedLessLess": "\u226A",
                "NewLine": "\n",
                "nexist": "\u2204",
                "nexists": "\u2204",
                "Nfr": "\uD835\uDD11",
                "nfr": "\uD835\uDD2B",
                "ngE": "\u2267\u0338",
                "nge": "\u2271",
                "ngeq": "\u2271",
                "ngeqq": "\u2267\u0338",
                "ngeqslant": "\u2A7E\u0338",
                "nges": "\u2A7E\u0338",
                "nGg": "\u22D9\u0338",
                "ngsim": "\u2275",
                "nGt": "\u226B\u20D2",
                "ngt": "\u226F",
                "ngtr": "\u226F",
                "nGtv": "\u226B\u0338",
                "nharr": "\u21AE",
                "nhArr": "\u21CE",
                "nhpar": "\u2AF2",
                "ni": "\u220B",
                "nis": "\u22FC",
                "nisd": "\u22FA",
                "niv": "\u220B",
                "NJcy": "\u040A",
                "njcy": "\u045A",
                "nlarr": "\u219A",
                "nlArr": "\u21CD",
                "nldr": "\u2025",
                "nlE": "\u2266\u0338",
                "nle": "\u2270",
                "nleftarrow": "\u219A",
                "nLeftarrow": "\u21CD",
                "nleftrightarrow": "\u21AE",
                "nLeftrightarrow": "\u21CE",
                "nleq": "\u2270",
                "nleqq": "\u2266\u0338",
                "nleqslant": "\u2A7D\u0338",
                "nles": "\u2A7D\u0338",
                "nless": "\u226E",
                "nLl": "\u22D8\u0338",
                "nlsim": "\u2274",
                "nLt": "\u226A\u20D2",
                "nlt": "\u226E",
                "nltri": "\u22EA",
                "nltrie": "\u22EC",
                "nLtv": "\u226A\u0338",
                "nmid": "\u2224",
                "NoBreak": "\u2060",
                "NonBreakingSpace": "\u00A0",
                "nopf": "\uD835\uDD5F",
                "Nopf": "\u2115",
                "Not": "\u2AEC",
                "not": "\u00AC",
                "NotCongruent": "\u2262",
                "NotCupCap": "\u226D",
                "NotDoubleVerticalBar": "\u2226",
                "NotElement": "\u2209",
                "NotEqual": "\u2260",
                "NotEqualTilde": "\u2242\u0338",
                "NotExists": "\u2204",
                "NotGreater": "\u226F",
                "NotGreaterEqual": "\u2271",
                "NotGreaterFullEqual": "\u2267\u0338",
                "NotGreaterGreater": "\u226B\u0338",
                "NotGreaterLess": "\u2279",
                "NotGreaterSlantEqual": "\u2A7E\u0338",
                "NotGreaterTilde": "\u2275",
                "NotHumpDownHump": "\u224E\u0338",
                "NotHumpEqual": "\u224F\u0338",
                "notin": "\u2209",
                "notindot": "\u22F5\u0338",
                "notinE": "\u22F9\u0338",
                "notinva": "\u2209",
                "notinvb": "\u22F7",
                "notinvc": "\u22F6",
                "NotLeftTriangleBar": "\u29CF\u0338",
                "NotLeftTriangle": "\u22EA",
                "NotLeftTriangleEqual": "\u22EC",
                "NotLess": "\u226E",
                "NotLessEqual": "\u2270",
                "NotLessGreater": "\u2278",
                "NotLessLess": "\u226A\u0338",
                "NotLessSlantEqual": "\u2A7D\u0338",
                "NotLessTilde": "\u2274",
                "NotNestedGreaterGreater": "\u2AA2\u0338",
                "NotNestedLessLess": "\u2AA1\u0338",
                "notni": "\u220C",
                "notniva": "\u220C",
                "notnivb": "\u22FE",
                "notnivc": "\u22FD",
                "NotPrecedes": "\u2280",
                "NotPrecedesEqual": "\u2AAF\u0338",
                "NotPrecedesSlantEqual": "\u22E0",
                "NotReverseElement": "\u220C",
                "NotRightTriangleBar": "\u29D0\u0338",
                "NotRightTriangle": "\u22EB",
                "NotRightTriangleEqual": "\u22ED",
                "NotSquareSubset": "\u228F\u0338",
                "NotSquareSubsetEqual": "\u22E2",
                "NotSquareSuperset": "\u2290\u0338",
                "NotSquareSupersetEqual": "\u22E3",
                "NotSubset": "\u2282\u20D2",
                "NotSubsetEqual": "\u2288",
                "NotSucceeds": "\u2281",
                "NotSucceedsEqual": "\u2AB0\u0338",
                "NotSucceedsSlantEqual": "\u22E1",
                "NotSucceedsTilde": "\u227F\u0338",
                "NotSuperset": "\u2283\u20D2",
                "NotSupersetEqual": "\u2289",
                "NotTilde": "\u2241",
                "NotTildeEqual": "\u2244",
                "NotTildeFullEqual": "\u2247",
                "NotTildeTilde": "\u2249",
                "NotVerticalBar": "\u2224",
                "nparallel": "\u2226",
                "npar": "\u2226",
                "nparsl": "\u2AFD\u20E5",
                "npart": "\u2202\u0338",
                "npolint": "\u2A14",
                "npr": "\u2280",
                "nprcue": "\u22E0",
                "nprec": "\u2280",
                "npreceq": "\u2AAF\u0338",
                "npre": "\u2AAF\u0338",
                "nrarrc": "\u2933\u0338",
                "nrarr": "\u219B",
                "nrArr": "\u21CF",
                "nrarrw": "\u219D\u0338",
                "nrightarrow": "\u219B",
                "nRightarrow": "\u21CF",
                "nrtri": "\u22EB",
                "nrtrie": "\u22ED",
                "nsc": "\u2281",
                "nsccue": "\u22E1",
                "nsce": "\u2AB0\u0338",
                "Nscr": "\uD835\uDCA9",
                "nscr": "\uD835\uDCC3",
                "nshortmid": "\u2224",
                "nshortparallel": "\u2226",
                "nsim": "\u2241",
                "nsime": "\u2244",
                "nsimeq": "\u2244",
                "nsmid": "\u2224",
                "nspar": "\u2226",
                "nsqsube": "\u22E2",
                "nsqsupe": "\u22E3",
                "nsub": "\u2284",
                "nsubE": "\u2AC5\u0338",
                "nsube": "\u2288",
                "nsubset": "\u2282\u20D2",
                "nsubseteq": "\u2288",
                "nsubseteqq": "\u2AC5\u0338",
                "nsucc": "\u2281",
                "nsucceq": "\u2AB0\u0338",
                "nsup": "\u2285",
                "nsupE": "\u2AC6\u0338",
                "nsupe": "\u2289",
                "nsupset": "\u2283\u20D2",
                "nsupseteq": "\u2289",
                "nsupseteqq": "\u2AC6\u0338",
                "ntgl": "\u2279",
                "Ntilde": "\u00D1",
                "ntilde": "\u00F1",
                "ntlg": "\u2278",
                "ntriangleleft": "\u22EA",
                "ntrianglelefteq": "\u22EC",
                "ntriangleright": "\u22EB",
                "ntrianglerighteq": "\u22ED",
                "Nu": "\u039D",
                "nu": "\u03BD",
                "num": "#",
                "numero": "\u2116",
                "numsp": "\u2007",
                "nvap": "\u224D\u20D2",
                "nvdash": "\u22AC",
                "nvDash": "\u22AD",
                "nVdash": "\u22AE",
                "nVDash": "\u22AF",
                "nvge": "\u2265\u20D2",
                "nvgt": ">\u20D2",
                "nvHarr": "\u2904",
                "nvinfin": "\u29DE",
                "nvlArr": "\u2902",
                "nvle": "\u2264\u20D2",
                "nvlt": "<\u20D2",
                "nvltrie": "\u22B4\u20D2",
                "nvrArr": "\u2903",
                "nvrtrie": "\u22B5\u20D2",
                "nvsim": "\u223C\u20D2",
                "nwarhk": "\u2923",
                "nwarr": "\u2196",
                "nwArr": "\u21D6",
                "nwarrow": "\u2196",
                "nwnear": "\u2927",
                "Oacute": "\u00D3",
                "oacute": "\u00F3",
                "oast": "\u229B",
                "Ocirc": "\u00D4",
                "ocirc": "\u00F4",
                "ocir": "\u229A",
                "Ocy": "\u041E",
                "ocy": "\u043E",
                "odash": "\u229D",
                "Odblac": "\u0150",
                "odblac": "\u0151",
                "odiv": "\u2A38",
                "odot": "\u2299",
                "odsold": "\u29BC",
                "OElig": "\u0152",
                "oelig": "\u0153",
                "ofcir": "\u29BF",
                "Ofr": "\uD835\uDD12",
                "ofr": "\uD835\uDD2C",
                "ogon": "\u02DB",
                "Ograve": "\u00D2",
                "ograve": "\u00F2",
                "ogt": "\u29C1",
                "ohbar": "\u29B5",
                "ohm": "\u03A9",
                "oint": "\u222E",
                "olarr": "\u21BA",
                "olcir": "\u29BE",
                "olcross": "\u29BB",
                "oline": "\u203E",
                "olt": "\u29C0",
                "Omacr": "\u014C",
                "omacr": "\u014D",
                "Omega": "\u03A9",
                "omega": "\u03C9",
                "Omicron": "\u039F",
                "omicron": "\u03BF",
                "omid": "\u29B6",
                "ominus": "\u2296",
                "Oopf": "\uD835\uDD46",
                "oopf": "\uD835\uDD60",
                "opar": "\u29B7",
                "OpenCurlyDoubleQuote": "\u201C",
                "OpenCurlyQuote": "\u2018",
                "operp": "\u29B9",
                "oplus": "\u2295",
                "orarr": "\u21BB",
                "Or": "\u2A54",
                "or": "\u2228",
                "ord": "\u2A5D",
                "order": "\u2134",
                "orderof": "\u2134",
                "ordf": "\u00AA",
                "ordm": "\u00BA",
                "origof": "\u22B6",
                "oror": "\u2A56",
                "orslope": "\u2A57",
                "orv": "\u2A5B",
                "oS": "\u24C8",
                "Oscr": "\uD835\uDCAA",
                "oscr": "\u2134",
                "Oslash": "\u00D8",
                "oslash": "\u00F8",
                "osol": "\u2298",
                "Otilde": "\u00D5",
                "otilde": "\u00F5",
                "otimesas": "\u2A36",
                "Otimes": "\u2A37",
                "otimes": "\u2297",
                "Ouml": "\u00D6",
                "ouml": "\u00F6",
                "ovbar": "\u233D",
                "OverBar": "\u203E",
                "OverBrace": "\u23DE",
                "OverBracket": "\u23B4",
                "OverParenthesis": "\u23DC",
                "para": "\u00B6",
                "parallel": "\u2225",
                "par": "\u2225",
                "parsim": "\u2AF3",
                "parsl": "\u2AFD",
                "part": "\u2202",
                "PartialD": "\u2202",
                "Pcy": "\u041F",
                "pcy": "\u043F",
                "percnt": "%",
                "period": ".",
                "permil": "\u2030",
                "perp": "\u22A5",
                "pertenk": "\u2031",
                "Pfr": "\uD835\uDD13",
                "pfr": "\uD835\uDD2D",
                "Phi": "\u03A6",
                "phi": "\u03C6",
                "phiv": "\u03D5",
                "phmmat": "\u2133",
                "phone": "\u260E",
                "Pi": "\u03A0",
                "pi": "\u03C0",
                "pitchfork": "\u22D4",
                "piv": "\u03D6",
                "planck": "\u210F",
                "planckh": "\u210E",
                "plankv": "\u210F",
                "plusacir": "\u2A23",
                "plusb": "\u229E",
                "pluscir": "\u2A22",
                "plus": "+",
                "plusdo": "\u2214",
                "plusdu": "\u2A25",
                "pluse": "\u2A72",
                "PlusMinus": "\u00B1",
                "plusmn": "\u00B1",
                "plussim": "\u2A26",
                "plustwo": "\u2A27",
                "pm": "\u00B1",
                "Poincareplane": "\u210C",
                "pointint": "\u2A15",
                "popf": "\uD835\uDD61",
                "Popf": "\u2119",
                "pound": "\u00A3",
                "prap": "\u2AB7",
                "Pr": "\u2ABB",
                "pr": "\u227A",
                "prcue": "\u227C",
                "precapprox": "\u2AB7",
                "prec": "\u227A",
                "preccurlyeq": "\u227C",
                "Precedes": "\u227A",
                "PrecedesEqual": "\u2AAF",
                "PrecedesSlantEqual": "\u227C",
                "PrecedesTilde": "\u227E",
                "preceq": "\u2AAF",
                "precnapprox": "\u2AB9",
                "precneqq": "\u2AB5",
                "precnsim": "\u22E8",
                "pre": "\u2AAF",
                "prE": "\u2AB3",
                "precsim": "\u227E",
                "prime": "\u2032",
                "Prime": "\u2033",
                "primes": "\u2119",
                "prnap": "\u2AB9",
                "prnE": "\u2AB5",
                "prnsim": "\u22E8",
                "prod": "\u220F",
                "Product": "\u220F",
                "profalar": "\u232E",
                "profline": "\u2312",
                "profsurf": "\u2313",
                "prop": "\u221D",
                "Proportional": "\u221D",
                "Proportion": "\u2237",
                "propto": "\u221D",
                "prsim": "\u227E",
                "prurel": "\u22B0",
                "Pscr": "\uD835\uDCAB",
                "pscr": "\uD835\uDCC5",
                "Psi": "\u03A8",
                "psi": "\u03C8",
                "puncsp": "\u2008",
                "Qfr": "\uD835\uDD14",
                "qfr": "\uD835\uDD2E",
                "qint": "\u2A0C",
                "qopf": "\uD835\uDD62",
                "Qopf": "\u211A",
                "qprime": "\u2057",
                "Qscr": "\uD835\uDCAC",
                "qscr": "\uD835\uDCC6",
                "quaternions": "\u210D",
                "quatint": "\u2A16",
                "quest": "?",
                "questeq": "\u225F",
                "quot": "\"",
                "QUOT": "\"",
                "rAarr": "\u21DB",
                "race": "\u223D\u0331",
                "Racute": "\u0154",
                "racute": "\u0155",
                "radic": "\u221A",
                "raemptyv": "\u29B3",
                "rang": "\u27E9",
                "Rang": "\u27EB",
                "rangd": "\u2992",
                "range": "\u29A5",
                "rangle": "\u27E9",
                "raquo": "\u00BB",
                "rarrap": "\u2975",
                "rarrb": "\u21E5",
                "rarrbfs": "\u2920",
                "rarrc": "\u2933",
                "rarr": "\u2192",
                "Rarr": "\u21A0",
                "rArr": "\u21D2",
                "rarrfs": "\u291E",
                "rarrhk": "\u21AA",
                "rarrlp": "\u21AC",
                "rarrpl": "\u2945",
                "rarrsim": "\u2974",
                "Rarrtl": "\u2916",
                "rarrtl": "\u21A3",
                "rarrw": "\u219D",
                "ratail": "\u291A",
                "rAtail": "\u291C",
                "ratio": "\u2236",
                "rationals": "\u211A",
                "rbarr": "\u290D",
                "rBarr": "\u290F",
                "RBarr": "\u2910",
                "rbbrk": "\u2773",
                "rbrace": "}",
                "rbrack": "]",
                "rbrke": "\u298C",
                "rbrksld": "\u298E",
                "rbrkslu": "\u2990",
                "Rcaron": "\u0158",
                "rcaron": "\u0159",
                "Rcedil": "\u0156",
                "rcedil": "\u0157",
                "rceil": "\u2309",
                "rcub": "}",
                "Rcy": "\u0420",
                "rcy": "\u0440",
                "rdca": "\u2937",
                "rdldhar": "\u2969",
                "rdquo": "\u201D",
                "rdquor": "\u201D",
                "rdsh": "\u21B3",
                "real": "\u211C",
                "realine": "\u211B",
                "realpart": "\u211C",
                "reals": "\u211D",
                "Re": "\u211C",
                "rect": "\u25AD",
                "reg": "\u00AE",
                "REG": "\u00AE",
                "ReverseElement": "\u220B",
                "ReverseEquilibrium": "\u21CB",
                "ReverseUpEquilibrium": "\u296F",
                "rfisht": "\u297D",
                "rfloor": "\u230B",
                "rfr": "\uD835\uDD2F",
                "Rfr": "\u211C",
                "rHar": "\u2964",
                "rhard": "\u21C1",
                "rharu": "\u21C0",
                "rharul": "\u296C",
                "Rho": "\u03A1",
                "rho": "\u03C1",
                "rhov": "\u03F1",
                "RightAngleBracket": "\u27E9",
                "RightArrowBar": "\u21E5",
                "rightarrow": "\u2192",
                "RightArrow": "\u2192",
                "Rightarrow": "\u21D2",
                "RightArrowLeftArrow": "\u21C4",
                "rightarrowtail": "\u21A3",
                "RightCeiling": "\u2309",
                "RightDoubleBracket": "\u27E7",
                "RightDownTeeVector": "\u295D",
                "RightDownVectorBar": "\u2955",
                "RightDownVector": "\u21C2",
                "RightFloor": "\u230B",
                "rightharpoondown": "\u21C1",
                "rightharpoonup": "\u21C0",
                "rightleftarrows": "\u21C4",
                "rightleftharpoons": "\u21CC",
                "rightrightarrows": "\u21C9",
                "rightsquigarrow": "\u219D",
                "RightTeeArrow": "\u21A6",
                "RightTee": "\u22A2",
                "RightTeeVector": "\u295B",
                "rightthreetimes": "\u22CC",
                "RightTriangleBar": "\u29D0",
                "RightTriangle": "\u22B3",
                "RightTriangleEqual": "\u22B5",
                "RightUpDownVector": "\u294F",
                "RightUpTeeVector": "\u295C",
                "RightUpVectorBar": "\u2954",
                "RightUpVector": "\u21BE",
                "RightVectorBar": "\u2953",
                "RightVector": "\u21C0",
                "ring": "\u02DA",
                "risingdotseq": "\u2253",
                "rlarr": "\u21C4",
                "rlhar": "\u21CC",
                "rlm": "\u200F",
                "rmoustache": "\u23B1",
                "rmoust": "\u23B1",
                "rnmid": "\u2AEE",
                "roang": "\u27ED",
                "roarr": "\u21FE",
                "robrk": "\u27E7",
                "ropar": "\u2986",
                "ropf": "\uD835\uDD63",
                "Ropf": "\u211D",
                "roplus": "\u2A2E",
                "rotimes": "\u2A35",
                "RoundImplies": "\u2970",
                "rpar": ")",
                "rpargt": "\u2994",
                "rppolint": "\u2A12",
                "rrarr": "\u21C9",
                "Rrightarrow": "\u21DB",
                "rsaquo": "\u203A",
                "rscr": "\uD835\uDCC7",
                "Rscr": "\u211B",
                "rsh": "\u21B1",
                "Rsh": "\u21B1",
                "rsqb": "]",
                "rsquo": "\u2019",
                "rsquor": "\u2019",
                "rthree": "\u22CC",
                "rtimes": "\u22CA",
                "rtri": "\u25B9",
                "rtrie": "\u22B5",
                "rtrif": "\u25B8",
                "rtriltri": "\u29CE",
                "RuleDelayed": "\u29F4",
                "ruluhar": "\u2968",
                "rx": "\u211E",
                "Sacute": "\u015A",
                "sacute": "\u015B",
                "sbquo": "\u201A",
                "scap": "\u2AB8",
                "Scaron": "\u0160",
                "scaron": "\u0161",
                "Sc": "\u2ABC",
                "sc": "\u227B",
                "sccue": "\u227D",
                "sce": "\u2AB0",
                "scE": "\u2AB4",
                "Scedil": "\u015E",
                "scedil": "\u015F",
                "Scirc": "\u015C",
                "scirc": "\u015D",
                "scnap": "\u2ABA",
                "scnE": "\u2AB6",
                "scnsim": "\u22E9",
                "scpolint": "\u2A13",
                "scsim": "\u227F",
                "Scy": "\u0421",
                "scy": "\u0441",
                "sdotb": "\u22A1",
                "sdot": "\u22C5",
                "sdote": "\u2A66",
                "searhk": "\u2925",
                "searr": "\u2198",
                "seArr": "\u21D8",
                "searrow": "\u2198",
                "sect": "\u00A7",
                "semi": ";",
                "seswar": "\u2929",
                "setminus": "\u2216",
                "setmn": "\u2216",
                "sext": "\u2736",
                "Sfr": "\uD835\uDD16",
                "sfr": "\uD835\uDD30",
                "sfrown": "\u2322",
                "sharp": "\u266F",
                "SHCHcy": "\u0429",
                "shchcy": "\u0449",
                "SHcy": "\u0428",
                "shcy": "\u0448",
                "ShortDownArrow": "\u2193",
                "ShortLeftArrow": "\u2190",
                "shortmid": "\u2223",
                "shortparallel": "\u2225",
                "ShortRightArrow": "\u2192",
                "ShortUpArrow": "\u2191",
                "shy": "\u00AD",
                "Sigma": "\u03A3",
                "sigma": "\u03C3",
                "sigmaf": "\u03C2",
                "sigmav": "\u03C2",
                "sim": "\u223C",
                "simdot": "\u2A6A",
                "sime": "\u2243",
                "simeq": "\u2243",
                "simg": "\u2A9E",
                "simgE": "\u2AA0",
                "siml": "\u2A9D",
                "simlE": "\u2A9F",
                "simne": "\u2246",
                "simplus": "\u2A24",
                "simrarr": "\u2972",
                "slarr": "\u2190",
                "SmallCircle": "\u2218",
                "smallsetminus": "\u2216",
                "smashp": "\u2A33",
                "smeparsl": "\u29E4",
                "smid": "\u2223",
                "smile": "\u2323",
                "smt": "\u2AAA",
                "smte": "\u2AAC",
                "smtes": "\u2AAC\uFE00",
                "SOFTcy": "\u042C",
                "softcy": "\u044C",
                "solbar": "\u233F",
                "solb": "\u29C4",
                "sol": "/",
                "Sopf": "\uD835\uDD4A",
                "sopf": "\uD835\uDD64",
                "spades": "\u2660",
                "spadesuit": "\u2660",
                "spar": "\u2225",
                "sqcap": "\u2293",
                "sqcaps": "\u2293\uFE00",
                "sqcup": "\u2294",
                "sqcups": "\u2294\uFE00",
                "Sqrt": "\u221A",
                "sqsub": "\u228F",
                "sqsube": "\u2291",
                "sqsubset": "\u228F",
                "sqsubseteq": "\u2291",
                "sqsup": "\u2290",
                "sqsupe": "\u2292",
                "sqsupset": "\u2290",
                "sqsupseteq": "\u2292",
                "square": "\u25A1",
                "Square": "\u25A1",
                "SquareIntersection": "\u2293",
                "SquareSubset": "\u228F",
                "SquareSubsetEqual": "\u2291",
                "SquareSuperset": "\u2290",
                "SquareSupersetEqual": "\u2292",
                "SquareUnion": "\u2294",
                "squarf": "\u25AA",
                "squ": "\u25A1",
                "squf": "\u25AA",
                "srarr": "\u2192",
                "Sscr": "\uD835\uDCAE",
                "sscr": "\uD835\uDCC8",
                "ssetmn": "\u2216",
                "ssmile": "\u2323",
                "sstarf": "\u22C6",
                "Star": "\u22C6",
                "star": "\u2606",
                "starf": "\u2605",
                "straightepsilon": "\u03F5",
                "straightphi": "\u03D5",
                "strns": "\u00AF",
                "sub": "\u2282",
                "Sub": "\u22D0",
                "subdot": "\u2ABD",
                "subE": "\u2AC5",
                "sube": "\u2286",
                "subedot": "\u2AC3",
                "submult": "\u2AC1",
                "subnE": "\u2ACB",
                "subne": "\u228A",
                "subplus": "\u2ABF",
                "subrarr": "\u2979",
                "subset": "\u2282",
                "Subset": "\u22D0",
                "subseteq": "\u2286",
                "subseteqq": "\u2AC5",
                "SubsetEqual": "\u2286",
                "subsetneq": "\u228A",
                "subsetneqq": "\u2ACB",
                "subsim": "\u2AC7",
                "subsub": "\u2AD5",
                "subsup": "\u2AD3",
                "succapprox": "\u2AB8",
                "succ": "\u227B",
                "succcurlyeq": "\u227D",
                "Succeeds": "\u227B",
                "SucceedsEqual": "\u2AB0",
                "SucceedsSlantEqual": "\u227D",
                "SucceedsTilde": "\u227F",
                "succeq": "\u2AB0",
                "succnapprox": "\u2ABA",
                "succneqq": "\u2AB6",
                "succnsim": "\u22E9",
                "succsim": "\u227F",
                "SuchThat": "\u220B",
                "sum": "\u2211",
                "Sum": "\u2211",
                "sung": "\u266A",
                "sup1": "\u00B9",
                "sup2": "\u00B2",
                "sup3": "\u00B3",
                "sup": "\u2283",
                "Sup": "\u22D1",
                "supdot": "\u2ABE",
                "supdsub": "\u2AD8",
                "supE": "\u2AC6",
                "supe": "\u2287",
                "supedot": "\u2AC4",
                "Superset": "\u2283",
                "SupersetEqual": "\u2287",
                "suphsol": "\u27C9",
                "suphsub": "\u2AD7",
                "suplarr": "\u297B",
                "supmult": "\u2AC2",
                "supnE": "\u2ACC",
                "supne": "\u228B",
                "supplus": "\u2AC0",
                "supset": "\u2283",
                "Supset": "\u22D1",
                "supseteq": "\u2287",
                "supseteqq": "\u2AC6",
                "supsetneq": "\u228B",
                "supsetneqq": "\u2ACC",
                "supsim": "\u2AC8",
                "supsub": "\u2AD4",
                "supsup": "\u2AD6",
                "swarhk": "\u2926",
                "swarr": "\u2199",
                "swArr": "\u21D9",
                "swarrow": "\u2199",
                "swnwar": "\u292A",
                "szlig": "\u00DF",
                "Tab": "\t",
                "target": "\u2316",
                "Tau": "\u03A4",
                "tau": "\u03C4",
                "tbrk": "\u23B4",
                "Tcaron": "\u0164",
                "tcaron": "\u0165",
                "Tcedil": "\u0162",
                "tcedil": "\u0163",
                "Tcy": "\u0422",
                "tcy": "\u0442",
                "tdot": "\u20DB",
                "telrec": "\u2315",
                "Tfr": "\uD835\uDD17",
                "tfr": "\uD835\uDD31",
                "there4": "\u2234",
                "therefore": "\u2234",
                "Therefore": "\u2234",
                "Theta": "\u0398",
                "theta": "\u03B8",
                "thetasym": "\u03D1",
                "thetav": "\u03D1",
                "thickapprox": "\u2248",
                "thicksim": "\u223C",
                "ThickSpace": "\u205F\u200A",
                "ThinSpace": "\u2009",
                "thinsp": "\u2009",
                "thkap": "\u2248",
                "thksim": "\u223C",
                "THORN": "\u00DE",
                "thorn": "\u00FE",
                "tilde": "\u02DC",
                "Tilde": "\u223C",
                "TildeEqual": "\u2243",
                "TildeFullEqual": "\u2245",
                "TildeTilde": "\u2248",
                "timesbar": "\u2A31",
                "timesb": "\u22A0",
                "times": "\u00D7",
                "timesd": "\u2A30",
                "tint": "\u222D",
                "toea": "\u2928",
                "topbot": "\u2336",
                "topcir": "\u2AF1",
                "top": "\u22A4",
                "Topf": "\uD835\uDD4B",
                "topf": "\uD835\uDD65",
                "topfork": "\u2ADA",
                "tosa": "\u2929",
                "tprime": "\u2034",
                "trade": "\u2122",
                "TRADE": "\u2122",
                "triangle": "\u25B5",
                "triangledown": "\u25BF",
                "triangleleft": "\u25C3",
                "trianglelefteq": "\u22B4",
                "triangleq": "\u225C",
                "triangleright": "\u25B9",
                "trianglerighteq": "\u22B5",
                "tridot": "\u25EC",
                "trie": "\u225C",
                "triminus": "\u2A3A",
                "TripleDot": "\u20DB",
                "triplus": "\u2A39",
                "trisb": "\u29CD",
                "tritime": "\u2A3B",
                "trpezium": "\u23E2",
                "Tscr": "\uD835\uDCAF",
                "tscr": "\uD835\uDCC9",
                "TScy": "\u0426",
                "tscy": "\u0446",
                "TSHcy": "\u040B",
                "tshcy": "\u045B",
                "Tstrok": "\u0166",
                "tstrok": "\u0167",
                "twixt": "\u226C",
                "twoheadleftarrow": "\u219E",
                "twoheadrightarrow": "\u21A0",
                "Uacute": "\u00DA",
                "uacute": "\u00FA",
                "uarr": "\u2191",
                "Uarr": "\u219F",
                "uArr": "\u21D1",
                "Uarrocir": "\u2949",
                "Ubrcy": "\u040E",
                "ubrcy": "\u045E",
                "Ubreve": "\u016C",
                "ubreve": "\u016D",
                "Ucirc": "\u00DB",
                "ucirc": "\u00FB",
                "Ucy": "\u0423",
                "ucy": "\u0443",
                "udarr": "\u21C5",
                "Udblac": "\u0170",
                "udblac": "\u0171",
                "udhar": "\u296E",
                "ufisht": "\u297E",
                "Ufr": "\uD835\uDD18",
                "ufr": "\uD835\uDD32",
                "Ugrave": "\u00D9",
                "ugrave": "\u00F9",
                "uHar": "\u2963",
                "uharl": "\u21BF",
                "uharr": "\u21BE",
                "uhblk": "\u2580",
                "ulcorn": "\u231C",
                "ulcorner": "\u231C",
                "ulcrop": "\u230F",
                "ultri": "\u25F8",
                "Umacr": "\u016A",
                "umacr": "\u016B",
                "uml": "\u00A8",
                "UnderBar": "_",
                "UnderBrace": "\u23DF",
                "UnderBracket": "\u23B5",
                "UnderParenthesis": "\u23DD",
                "Union": "\u22C3",
                "UnionPlus": "\u228E",
                "Uogon": "\u0172",
                "uogon": "\u0173",
                "Uopf": "\uD835\uDD4C",
                "uopf": "\uD835\uDD66",
                "UpArrowBar": "\u2912",
                "uparrow": "\u2191",
                "UpArrow": "\u2191",
                "Uparrow": "\u21D1",
                "UpArrowDownArrow": "\u21C5",
                "updownarrow": "\u2195",
                "UpDownArrow": "\u2195",
                "Updownarrow": "\u21D5",
                "UpEquilibrium": "\u296E",
                "upharpoonleft": "\u21BF",
                "upharpoonright": "\u21BE",
                "uplus": "\u228E",
                "UpperLeftArrow": "\u2196",
                "UpperRightArrow": "\u2197",
                "upsi": "\u03C5",
                "Upsi": "\u03D2",
                "upsih": "\u03D2",
                "Upsilon": "\u03A5",
                "upsilon": "\u03C5",
                "UpTeeArrow": "\u21A5",
                "UpTee": "\u22A5",
                "upuparrows": "\u21C8",
                "urcorn": "\u231D",
                "urcorner": "\u231D",
                "urcrop": "\u230E",
                "Uring": "\u016E",
                "uring": "\u016F",
                "urtri": "\u25F9",
                "Uscr": "\uD835\uDCB0",
                "uscr": "\uD835\uDCCA",
                "utdot": "\u22F0",
                "Utilde": "\u0168",
                "utilde": "\u0169",
                "utri": "\u25B5",
                "utrif": "\u25B4",
                "uuarr": "\u21C8",
                "Uuml": "\u00DC",
                "uuml": "\u00FC",
                "uwangle": "\u29A7",
                "vangrt": "\u299C",
                "varepsilon": "\u03F5",
                "varkappa": "\u03F0",
                "varnothing": "\u2205",
                "varphi": "\u03D5",
                "varpi": "\u03D6",
                "varpropto": "\u221D",
                "varr": "\u2195",
                "vArr": "\u21D5",
                "varrho": "\u03F1",
                "varsigma": "\u03C2",
                "varsubsetneq": "\u228A\uFE00",
                "varsubsetneqq": "\u2ACB\uFE00",
                "varsupsetneq": "\u228B\uFE00",
                "varsupsetneqq": "\u2ACC\uFE00",
                "vartheta": "\u03D1",
                "vartriangleleft": "\u22B2",
                "vartriangleright": "\u22B3",
                "vBar": "\u2AE8",
                "Vbar": "\u2AEB",
                "vBarv": "\u2AE9",
                "Vcy": "\u0412",
                "vcy": "\u0432",
                "vdash": "\u22A2",
                "vDash": "\u22A8",
                "Vdash": "\u22A9",
                "VDash": "\u22AB",
                "Vdashl": "\u2AE6",
                "veebar": "\u22BB",
                "vee": "\u2228",
                "Vee": "\u22C1",
                "veeeq": "\u225A",
                "vellip": "\u22EE",
                "verbar": "|",
                "Verbar": "\u2016",
                "vert": "|",
                "Vert": "\u2016",
                "VerticalBar": "\u2223",
                "VerticalLine": "|",
                "VerticalSeparator": "\u2758",
                "VerticalTilde": "\u2240",
                "VeryThinSpace": "\u200A",
                "Vfr": "\uD835\uDD19",
                "vfr": "\uD835\uDD33",
                "vltri": "\u22B2",
                "vnsub": "\u2282\u20D2",
                "vnsup": "\u2283\u20D2",
                "Vopf": "\uD835\uDD4D",
                "vopf": "\uD835\uDD67",
                "vprop": "\u221D",
                "vrtri": "\u22B3",
                "Vscr": "\uD835\uDCB1",
                "vscr": "\uD835\uDCCB",
                "vsubnE": "\u2ACB\uFE00",
                "vsubne": "\u228A\uFE00",
                "vsupnE": "\u2ACC\uFE00",
                "vsupne": "\u228B\uFE00",
                "Vvdash": "\u22AA",
                "vzigzag": "\u299A",
                "Wcirc": "\u0174",
                "wcirc": "\u0175",
                "wedbar": "\u2A5F",
                "wedge": "\u2227",
                "Wedge": "\u22C0",
                "wedgeq": "\u2259",
                "weierp": "\u2118",
                "Wfr": "\uD835\uDD1A",
                "wfr": "\uD835\uDD34",
                "Wopf": "\uD835\uDD4E",
                "wopf": "\uD835\uDD68",
                "wp": "\u2118",
                "wr": "\u2240",
                "wreath": "\u2240",
                "Wscr": "\uD835\uDCB2",
                "wscr": "\uD835\uDCCC",
                "xcap": "\u22C2",
                "xcirc": "\u25EF",
                "xcup": "\u22C3",
                "xdtri": "\u25BD",
                "Xfr": "\uD835\uDD1B",
                "xfr": "\uD835\uDD35",
                "xharr": "\u27F7",
                "xhArr": "\u27FA",
                "Xi": "\u039E",
                "xi": "\u03BE",
                "xlarr": "\u27F5",
                "xlArr": "\u27F8",
                "xmap": "\u27FC",
                "xnis": "\u22FB",
                "xodot": "\u2A00",
                "Xopf": "\uD835\uDD4F",
                "xopf": "\uD835\uDD69",
                "xoplus": "\u2A01",
                "xotime": "\u2A02",
                "xrarr": "\u27F6",
                "xrArr": "\u27F9",
                "Xscr": "\uD835\uDCB3",
                "xscr": "\uD835\uDCCD",
                "xsqcup": "\u2A06",
                "xuplus": "\u2A04",
                "xutri": "\u25B3",
                "xvee": "\u22C1",
                "xwedge": "\u22C0",
                "Yacute": "\u00DD",
                "yacute": "\u00FD",
                "YAcy": "\u042F",
                "yacy": "\u044F",
                "Ycirc": "\u0176",
                "ycirc": "\u0177",
                "Ycy": "\u042B",
                "ycy": "\u044B",
                "yen": "\u00A5",
                "Yfr": "\uD835\uDD1C",
                "yfr": "\uD835\uDD36",
                "YIcy": "\u0407",
                "yicy": "\u0457",
                "Yopf": "\uD835\uDD50",
                "yopf": "\uD835\uDD6A",
                "Yscr": "\uD835\uDCB4",
                "yscr": "\uD835\uDCCE",
                "YUcy": "\u042E",
                "yucy": "\u044E",
                "yuml": "\u00FF",
                "Yuml": "\u0178",
                "Zacute": "\u0179",
                "zacute": "\u017A",
                "Zcaron": "\u017D",
                "zcaron": "\u017E",
                "Zcy": "\u0417",
                "zcy": "\u0437",
                "Zdot": "\u017B",
                "zdot": "\u017C",
                "zeetrf": "\u2128",
                "ZeroWidthSpace": "\u200B",
                "Zeta": "\u0396",
                "zeta": "\u03B6",
                "zfr": "\uD835\uDD37",
                "Zfr": "\u2128",
                "ZHcy": "\u0416",
                "zhcy": "\u0436",
                "zigrarr": "\u21DD",
                "zopf": "\uD835\uDD6B",
                "Zopf": "\u2124",
                "Zscr": "\uD835\uDCB5",
                "zscr": "\uD835\uDCCF",
                "zwj": "\u200D",
                "zwnj": "\u200C"
            }
        }, {}
    ],
    5: [
        function(require, module, exports) {
            'use strict';
            exports.__esModule = true;
            var PUSH = 'PUSH';
            exports.PUSH = PUSH;
            var REPLACE = 'REPLACE';
            exports.REPLACE = REPLACE;
            var POP = 'POP';
            exports.POP = POP;
            exports['default'] = {
                PUSH: PUSH,
                REPLACE: REPLACE,
                POP: POP
            };
        }, {}
    ],
    6: [
        function(require, module, exports) {
            "use strict";
            exports.__esModule = true;
            var _slice = Array.prototype.slice;
            exports.loopAsync = loopAsync;

            function loopAsync(turns, work, callback) {
                var currentTurn = 0,
                    isDone = false;
                var sync = false,
                    hasNext = false,
                    doneArgs = undefined;

                function done() {
                    isDone = true;
                    if (sync) {
                        doneArgs = [].concat(_slice.call(arguments));
                        return;
                    }
                    callback.apply(this, arguments);
                }

                function next() {
                    if (isDone) {
                        return;
                    }
                    hasNext = true;
                    if (sync) {
                        return;
                    }
                    sync = true;
                    while (!isDone && currentTurn < turns && hasNext) {
                        hasNext = false;
                        work.call(this, currentTurn++, next, done);
                    }
                    sync = false;
                    if (isDone) {
                        callback.apply(this, doneArgs);
                        return;
                    }
                    if (currentTurn >= turns && hasNext) {
                        isDone = true;
                        callback();
                    }
                }
                next();
            }
        }, {}
    ],
    7: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                exports.saveState = saveState;
                exports.readState = readState;

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);
                var KeyPrefix = '@@History/';
                var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];
                var SecurityError = 'SecurityError';

                function createKey(key) {
                    return KeyPrefix + key;
                }

                function saveState(key, state) {
                    try {
                        if (state == null) {
                            window.sessionStorage.removeItem(createKey(key));
                        } else {
                            window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
                        }
                    } catch (error) {
                        if (error.name === SecurityError) {
                            process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;
                            return;
                        }
                        if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
                            process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;
                            return;
                        }
                        throw error;
                    }
                }

                function readState(key) {
                    var json = undefined;
                    try {
                        json = window.sessionStorage.getItem(createKey(key));
                    } catch (error) {
                        if (error.name === SecurityError) {
                            process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;
                            return null;
                        }
                    }
                    if (json) {
                        try {
                            return JSON.parse(json);
                        } catch (error) {}
                    }
                    return null;
                }
            }).call(this, require('_process'))
        }, {
            "_process": 86,
            "warning": 123
        }
    ],
    8: [
        function(require, module, exports) {
            'use strict';
            exports.__esModule = true;
            exports.addEventListener = addEventListener;
            exports.removeEventListener = removeEventListener;
            exports.getHashPath = getHashPath;
            exports.replaceHashPath = replaceHashPath;
            exports.getWindowPath = getWindowPath;
            exports.go = go;
            exports.getUserConfirmation = getUserConfirmation;
            exports.supportsHistory = supportsHistory;
            exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

            function addEventListener(node, event, listener) {
                if (node.addEventListener) {
                    node.addEventListener(event, listener, false);
                } else {
                    node.attachEvent('on' + event, listener);
                }
            }

            function removeEventListener(node, event, listener) {
                if (node.removeEventListener) {
                    node.removeEventListener(event, listener, false);
                } else {
                    node.detachEvent('on' + event, listener);
                }
            }

            function getHashPath() {
                return window.location.href.split('#')[1] || '';
            }

            function replaceHashPath(path) {
                window.location.replace(window.location.pathname + window.location.search + '#' + path);
            }

            function getWindowPath() {
                return window.location.pathname + window.location.search + window.location.hash;
            }

            function go(n) {
                if (n) window.history.go(n);
            }

            function getUserConfirmation(message, callback) {
                callback(window.confirm(message));
            }

            function supportsHistory() {
                var ua = navigator.userAgent;
                if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
                    return false;
                }
                return window.history && 'pushState' in window.history;
            }

            function supportsGoWithoutReloadUsingHash() {
                var ua = navigator.userAgent;
                return ua.indexOf('Firefox') === -1;
            }
        }, {}
    ],
    9: [
        function(require, module, exports) {
            'use strict';
            exports.__esModule = true;
            var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
            exports.canUseDOM = canUseDOM;
        }, {}
    ],
    10: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                exports.extractPath = extractPath;
                exports.parsePath = parsePath;

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);

                function extractPath(string) {
                    var match = string.match(/^https?:\/\/[^\/]*/);
                    if (match == null) return string;
                    return string.substring(match[0].length);
                }

                function parsePath(path) {
                    var pathname = extractPath(path);
                    var search = '';
                    var hash = '';
                    process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;
                    var hashIndex = pathname.indexOf('#');
                    if (hashIndex !== -1) {
                        hash = pathname.substring(hashIndex);
                        pathname = pathname.substring(0, hashIndex);
                    }
                    var searchIndex = pathname.indexOf('?');
                    if (searchIndex !== -1) {
                        search = pathname.substring(searchIndex);
                        pathname = pathname.substring(0, searchIndex);
                    }
                    if (pathname === '') pathname = '/';
                    return {
                        pathname: pathname,
                        search: search,
                        hash: hash
                    };
                }
            }).call(this, require('_process'))
        }, {
            "_process": 86,
            "warning": 123
        }
    ],
    11: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                var _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _invariant = require('invariant');
                var _invariant2 = _interopRequireDefault(_invariant);
                var _Actions = require('./Actions');
                var _PathUtils = require('./PathUtils');
                var _ExecutionEnvironment = require('./ExecutionEnvironment');
                var _DOMUtils = require('./DOMUtils');
                var _DOMStateStorage = require('./DOMStateStorage');
                var _createDOMHistory = require('./createDOMHistory');
                var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

                function createBrowserHistory() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;
                    var forceRefresh = options.forceRefresh;
                    var isSupported = _DOMUtils.supportsHistory();
                    var useRefresh = !isSupported || forceRefresh;

                    function getCurrentLocation(historyState) {
                        historyState = historyState || window.history.state || {};
                        var path = _DOMUtils.getWindowPath();
                        var _historyState = historyState;
                        var key = _historyState.key;
                        var state = undefined;
                        if (key) {
                            state = _DOMStateStorage.readState(key);
                        } else {
                            state = null;
                            key = history.createKey();
                            if (isSupported) window.history.replaceState(_extends({}, historyState, {
                                key: key
                            }), null, path);
                        }
                        var location = _PathUtils.parsePath(path);
                        return history.createLocation(_extends({}, location, {
                            state: state
                        }), undefined, key);
                    }

                    function startPopStateListener(_ref) {
                        var transitionTo = _ref.transitionTo;

                        function popStateListener(event) {
                            if (event.state === undefined) return;
                            transitionTo(getCurrentLocation(event.state));
                        }
                        _DOMUtils.addEventListener(window, 'popstate', popStateListener);
                        return function() {
                            _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
                        };
                    }

                    function finishTransition(location) {
                        var basename = location.basename;
                        var pathname = location.pathname;
                        var search = location.search;
                        var hash = location.hash;
                        var state = location.state;
                        var action = location.action;
                        var key = location.key;
                        if (action === _Actions.POP) return;
                        _DOMStateStorage.saveState(key, state);
                        var path = (basename || '') + pathname + search + hash;
                        var historyState = {
                            key: key
                        };
                        if (action === _Actions.PUSH) {
                            if (useRefresh) {
                                window.location.href = path;
                                return false;
                            } else {
                                window.history.pushState(historyState, null, path);
                            }
                        } else {
                            if (useRefresh) {
                                window.location.replace(path);
                                return false;
                            } else {
                                window.history.replaceState(historyState, null, path);
                            }
                        }
                    }
                    var history = _createDOMHistory2['default'](_extends({}, options, {
                        getCurrentLocation: getCurrentLocation,
                        finishTransition: finishTransition,
                        saveState: _DOMStateStorage.saveState
                    }));
                    var listenerCount = 0,
                        stopPopStateListener = undefined;

                    function listenBefore(listener) {
                        if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
                        var unlisten = history.listenBefore(listener);
                        return function() {
                            unlisten();
                            if (--listenerCount === 0) stopPopStateListener();
                        };
                    }

                    function listen(listener) {
                        if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
                        var unlisten = history.listen(listener);
                        return function() {
                            unlisten();
                            if (--listenerCount === 0) stopPopStateListener();
                        };
                    }

                    function registerTransitionHook(hook) {
                        if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
                        history.registerTransitionHook(hook);
                    }

                    function unregisterTransitionHook(hook) {
                        history.unregisterTransitionHook(hook);
                        if (--listenerCount === 0) stopPopStateListener();
                    }
                    return _extends({}, history, {
                        listenBefore: listenBefore,
                        listen: listen,
                        registerTransitionHook: registerTransitionHook,
                        unregisterTransitionHook: unregisterTransitionHook
                    });
                }
                exports['default'] = createBrowserHistory;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "./Actions": 5,
            "./DOMStateStorage": 7,
            "./DOMUtils": 8,
            "./ExecutionEnvironment": 9,
            "./PathUtils": 10,
            "./createDOMHistory": 12,
            "_process": 86,
            "invariant": 25
        }
    ],
    12: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                var _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _invariant = require('invariant');
                var _invariant2 = _interopRequireDefault(_invariant);
                var _ExecutionEnvironment = require('./ExecutionEnvironment');
                var _DOMUtils = require('./DOMUtils');
                var _createHistory = require('./createHistory');
                var _createHistory2 = _interopRequireDefault(_createHistory);

                function createDOMHistory(options) {
                    var history = _createHistory2['default'](_extends({
                        getUserConfirmation: _DOMUtils.getUserConfirmation
                    }, options, {
                        go: _DOMUtils.go
                    }));

                    function listen(listener) {
                        !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;
                        return history.listen(listener);
                    }
                    return _extends({}, history, {
                        listen: listen
                    });
                }
                exports['default'] = createDOMHistory;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "./DOMUtils": 8,
            "./ExecutionEnvironment": 9,
            "./createHistory": 14,
            "_process": 86,
            "invariant": 25
        }
    ],
    13: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                var _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);
                var _invariant = require('invariant');
                var _invariant2 = _interopRequireDefault(_invariant);
                var _Actions = require('./Actions');
                var _PathUtils = require('./PathUtils');
                var _ExecutionEnvironment = require('./ExecutionEnvironment');
                var _DOMUtils = require('./DOMUtils');
                var _DOMStateStorage = require('./DOMStateStorage');
                var _createDOMHistory = require('./createDOMHistory');
                var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

                function isAbsolutePath(path) {
                    return typeof path === 'string' && path.charAt(0) === '/';
                }

                function ensureSlash() {
                    var path = _DOMUtils.getHashPath();
                    if (isAbsolutePath(path)) return true;
                    _DOMUtils.replaceHashPath('/' + path);
                    return false;
                }

                function addQueryStringValueToPath(path, key, value) {
                    return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
                }

                function stripQueryStringValueFromPath(path, key) {
                    return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
                }

                function getQueryStringValueFromPath(path, key) {
                    var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
                    return match && match[1];
                }
                var DefaultQueryKey = '_k';

                function createHashHistory() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;
                    var queryKey = options.queryKey;
                    if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

                    function getCurrentLocation() {
                        var path = _DOMUtils.getHashPath();
                        var key = undefined,
                            state = undefined;
                        if (queryKey) {
                            key = getQueryStringValueFromPath(path, queryKey);
                            path = stripQueryStringValueFromPath(path, queryKey);
                            if (key) {
                                state = _DOMStateStorage.readState(key);
                            } else {
                                state = null;
                                key = history.createKey();
                                _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
                            }
                        } else {
                            key = state = null;
                        }
                        var location = _PathUtils.parsePath(path);
                        return history.createLocation(_extends({}, location, {
                            state: state
                        }), undefined, key);
                    }

                    function startHashChangeListener(_ref) {
                        var transitionTo = _ref.transitionTo;

                        function hashChangeListener() {
                            if (!ensureSlash()) return;
                            transitionTo(getCurrentLocation());
                        }
                        ensureSlash();
                        _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);
                        return function() {
                            _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
                        };
                    }

                    function finishTransition(location) {
                        var basename = location.basename;
                        var pathname = location.pathname;
                        var search = location.search;
                        var state = location.state;
                        var action = location.action;
                        var key = location.key;
                        if (action === _Actions.POP) return;
                        var path = (basename || '') + pathname + search;
                        if (queryKey) {
                            path = addQueryStringValueToPath(path, queryKey, key);
                            _DOMStateStorage.saveState(key, state);
                        } else {
                            location.key = location.state = null;
                        }
                        var currentHash = _DOMUtils.getHashPath();
                        if (action === _Actions.PUSH) {
                            if (currentHash !== path) {
                                window.location.hash = path;
                            } else {
                                process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
                            }
                        } else if (currentHash !== path) {
                            _DOMUtils.replaceHashPath(path);
                        }
                    }
                    var history = _createDOMHistory2['default'](_extends({}, options, {
                        getCurrentLocation: getCurrentLocation,
                        finishTransition: finishTransition,
                        saveState: _DOMStateStorage.saveState
                    }));
                    var listenerCount = 0,
                        stopHashChangeListener = undefined;

                    function listenBefore(listener) {
                        if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
                        var unlisten = history.listenBefore(listener);
                        return function() {
                            unlisten();
                            if (--listenerCount === 0) stopHashChangeListener();
                        };
                    }

                    function listen(listener) {
                        if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
                        var unlisten = history.listen(listener);
                        return function() {
                            unlisten();
                            if (--listenerCount === 0) stopHashChangeListener();
                        };
                    }

                    function push(location) {
                        process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
                        history.push(location);
                    }

                    function replace(location) {
                        process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
                        history.replace(location);
                    }
                    var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

                    function go(n) {
                        process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
                        history.go(n);
                    }

                    function createHref(path) {
                        return '#' + history.createHref(path);
                    }

                    function registerTransitionHook(hook) {
                        if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
                        history.registerTransitionHook(hook);
                    }

                    function unregisterTransitionHook(hook) {
                        history.unregisterTransitionHook(hook);
                        if (--listenerCount === 0) stopHashChangeListener();
                    }

                    function pushState(state, path) {
                        process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
                        history.pushState(state, path);
                    }

                    function replaceState(state, path) {
                        process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
                        history.replaceState(state, path);
                    }
                    return _extends({}, history, {
                        listenBefore: listenBefore,
                        listen: listen,
                        push: push,
                        replace: replace,
                        go: go,
                        createHref: createHref,
                        registerTransitionHook: registerTransitionHook,
                        unregisterTransitionHook: unregisterTransitionHook,
                        pushState: pushState,
                        replaceState: replaceState
                    });
                }
                exports['default'] = createHashHistory;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "./Actions": 5,
            "./DOMStateStorage": 7,
            "./DOMUtils": 8,
            "./ExecutionEnvironment": 9,
            "./PathUtils": 10,
            "./createDOMHistory": 12,
            "_process": 86,
            "invariant": 25,
            "warning": 123
        }
    ],
    14: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                var _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);
                var _deepEqual = require('deep-equal');
                var _deepEqual2 = _interopRequireDefault(_deepEqual);
                var _PathUtils = require('./PathUtils');
                var _AsyncUtils = require('./AsyncUtils');
                var _Actions = require('./Actions');
                var _createLocation2 = require('./createLocation');
                var _createLocation3 = _interopRequireDefault(_createLocation2);
                var _runTransitionHook = require('./runTransitionHook');
                var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
                var _deprecate = require('./deprecate');
                var _deprecate2 = _interopRequireDefault(_deprecate);

                function createRandomKey(length) {
                    return Math.random().toString(36).substr(2, length);
                }

                function locationsAreEqual(a, b) {
                    return a.pathname === b.pathname && a.search === b.search && a.key === b.key && _deepEqual2['default'](a.state, b.state);
                }
                var DefaultKeyLength = 6;

                function createHistory() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    var getCurrentLocation = options.getCurrentLocation;
                    var finishTransition = options.finishTransition;
                    var saveState = options.saveState;
                    var go = options.go;
                    var getUserConfirmation = options.getUserConfirmation;
                    var keyLength = options.keyLength;
                    if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;
                    var transitionHooks = [];

                    function listenBefore(hook) {
                        transitionHooks.push(hook);
                        return function() {
                            transitionHooks = transitionHooks.filter(function(item) {
                                return item !== hook;
                            });
                        };
                    }
                    var allKeys = [];
                    var changeListeners = [];
                    var location = undefined;

                    function getCurrent() {
                        if (pendingLocation && pendingLocation.action === _Actions.POP) {
                            return allKeys.indexOf(pendingLocation.key);
                        } else if (location) {
                            return allKeys.indexOf(location.key);
                        } else {
                            return -1;
                        }
                    }

                    function updateLocation(newLocation) {
                        var current = getCurrent();
                        location = newLocation;
                        if (location.action === _Actions.PUSH) {
                            allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
                        } else if (location.action === _Actions.REPLACE) {
                            allKeys[current] = location.key;
                        }
                        changeListeners.forEach(function(listener) {
                            listener(location);
                        });
                    }

                    function listen(listener) {
                        changeListeners.push(listener);
                        if (location) {
                            listener(location);
                        } else {
                            var _location = getCurrentLocation();
                            allKeys = [_location.key];
                            updateLocation(_location);
                        }
                        return function() {
                            changeListeners = changeListeners.filter(function(item) {
                                return item !== listener;
                            });
                        };
                    }

                    function confirmTransitionTo(location, callback) {
                        _AsyncUtils.loopAsync(transitionHooks.length, function(index, next, done) {
                            _runTransitionHook2['default'](transitionHooks[index], location, function(result) {
                                if (result != null) {
                                    done(result);
                                } else {
                                    next();
                                }
                            });
                        }, function(message) {
                            if (getUserConfirmation && typeof message === 'string') {
                                getUserConfirmation(message, function(ok) {
                                    callback(ok !== false);
                                });
                            } else {
                                callback(message !== false);
                            }
                        });
                    }
                    var pendingLocation = undefined;

                    function transitionTo(nextLocation) {
                        if (location && locationsAreEqual(location, nextLocation)) return;
                        pendingLocation = nextLocation;
                        confirmTransitionTo(nextLocation, function(ok) {
                            if (pendingLocation !== nextLocation) return;
                            if (ok) {
                                if (nextLocation.action === _Actions.PUSH) {
                                    var prevPath = createPath(location);
                                    var nextPath = createPath(nextLocation);
                                    if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
                                }
                                if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
                            } else if (location && nextLocation.action === _Actions.POP) {
                                var prevIndex = allKeys.indexOf(location.key);
                                var nextIndex = allKeys.indexOf(nextLocation.key);
                                if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex);
                            }
                        });
                    }

                    function push(location) {
                        transitionTo(createLocation(location, _Actions.PUSH, createKey()));
                    }

                    function replace(location) {
                        transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
                    }

                    function goBack() {
                        go(-1);
                    }

                    function goForward() {
                        go(1);
                    }

                    function createKey() {
                        return createRandomKey(keyLength);
                    }

                    function createPath(location) {
                        if (location == null || typeof location === 'string') return location;
                        var pathname = location.pathname;
                        var search = location.search;
                        var hash = location.hash;
                        var result = pathname;
                        if (search) result += search;
                        if (hash) result += hash;
                        return result;
                    }

                    function createHref(location) {
                        return createPath(location);
                    }

                    function createLocation(location, action) {
                        var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
                        if (typeof action === 'object') {
                            process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
                            if (typeof location === 'string') location = _PathUtils.parsePath(location);
                            location = _extends({}, location, {
                                state: action
                            });
                            action = key;
                            key = arguments[3] || createKey();
                        }
                        return _createLocation3['default'](location, action, key);
                    }

                    function setState(state) {
                        if (location) {
                            updateLocationState(location, state);
                            updateLocation(location);
                        } else {
                            updateLocationState(getCurrentLocation(), state);
                        }
                    }

                    function updateLocationState(location, state) {
                        location.state = _extends({}, location.state, state);
                        saveState(location.key, location.state);
                    }

                    function registerTransitionHook(hook) {
                        if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
                    }

                    function unregisterTransitionHook(hook) {
                        transitionHooks = transitionHooks.filter(function(item) {
                            return item !== hook;
                        });
                    }

                    function pushState(state, path) {
                        if (typeof path === 'string') path = _PathUtils.parsePath(path);
                        push(_extends({
                            state: state
                        }, path));
                    }

                    function replaceState(state, path) {
                        if (typeof path === 'string') path = _PathUtils.parsePath(path);
                        replace(_extends({
                            state: state
                        }, path));
                    }
                    return {
                        listenBefore: listenBefore,
                        listen: listen,
                        transitionTo: transitionTo,
                        push: push,
                        replace: replace,
                        go: go,
                        goBack: goBack,
                        goForward: goForward,
                        createKey: createKey,
                        createPath: createPath,
                        createHref: createHref,
                        createLocation: createLocation,
                        setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
                        registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
                        unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
                        pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
                        replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
                    };
                }
                exports['default'] = createHistory;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "./Actions": 5,
            "./AsyncUtils": 6,
            "./PathUtils": 10,
            "./createLocation": 15,
            "./deprecate": 17,
            "./runTransitionHook": 21,
            "_process": 86,
            "deep-equal": 1,
            "warning": 123
        }
    ],
    15: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                var _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);
                var _Actions = require('./Actions');
                var _PathUtils = require('./PathUtils');

                function createLocation() {
                    var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
                    var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
                    var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
                    var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
                    if (typeof location === 'string') location = _PathUtils.parsePath(location);
                    if (typeof action === 'object') {
                        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
                        location = _extends({}, location, {
                            state: action
                        });
                        action = key || _Actions.POP;
                        key = _fourthArg;
                    }
                    var pathname = location.pathname || '/';
                    var search = location.search || '';
                    var hash = location.hash || '';
                    var state = location.state || null;
                    return {
                        pathname: pathname,
                        search: search,
                        hash: hash,
                        state: state,
                        action: action,
                        key: key
                    };
                }
                exports['default'] = createLocation;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "./Actions": 5,
            "./PathUtils": 10,
            "_process": 86,
            "warning": 123
        }
    ],
    16: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                var _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);
                var _invariant = require('invariant');
                var _invariant2 = _interopRequireDefault(_invariant);
                var _PathUtils = require('./PathUtils');
                var _Actions = require('./Actions');
                var _createHistory = require('./createHistory');
                var _createHistory2 = _interopRequireDefault(_createHistory);

                function createStateStorage(entries) {
                    return entries.filter(function(entry) {
                        return entry.state;
                    }).reduce(function(memo, entry) {
                        memo[entry.key] = entry.state;
                        return memo;
                    }, {});
                }

                function createMemoryHistory() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    if (Array.isArray(options)) {
                        options = {
                            entries: options
                        };
                    } else if (typeof options === 'string') {
                        options = {
                            entries: [options]
                        };
                    }
                    var history = _createHistory2['default'](_extends({}, options, {
                        getCurrentLocation: getCurrentLocation,
                        finishTransition: finishTransition,
                        saveState: saveState,
                        go: go
                    }));
                    var _options = options;
                    var entries = _options.entries;
                    var current = _options.current;
                    if (typeof entries === 'string') {
                        entries = [entries];
                    } else if (!Array.isArray(entries)) {
                        entries = ['/'];
                    }
                    entries = entries.map(function(entry) {
                        var key = history.createKey();
                        if (typeof entry === 'string') return {
                            pathname: entry,
                            key: key
                        };
                        if (typeof entry === 'object' && entry) return _extends({}, entry, {
                            key: key
                        });
                        !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
                    });
                    if (current == null) {
                        current = entries.length - 1;
                    } else {
                        !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
                    }
                    var storage = createStateStorage(entries);

                    function saveState(key, state) {
                        storage[key] = state;
                    }

                    function readState(key) {
                        return storage[key];
                    }

                    function getCurrentLocation() {
                        var entry = entries[current];
                        var basename = entry.basename;
                        var pathname = entry.pathname;
                        var search = entry.search;
                        var path = (basename || '') + pathname + (search || '');
                        var key = undefined,
                            state = undefined;
                        if (entry.key) {
                            key = entry.key;
                            state = readState(key);
                        } else {
                            key = history.createKey();
                            state = null;
                            entry.key = key;
                        }
                        var location = _PathUtils.parsePath(path);
                        return history.createLocation(_extends({}, location, {
                            state: state
                        }), undefined, key);
                    }

                    function canGo(n) {
                        var index = current + n;
                        return index >= 0 && index < entries.length;
                    }

                    function go(n) {
                        if (n) {
                            if (!canGo(n)) {
                                process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
                                return;
                            }
                            current += n;
                            var currentLocation = getCurrentLocation();
                            history.transitionTo(_extends({}, currentLocation, {
                                action: _Actions.POP
                            }));
                        }
                    }

                    function finishTransition(location) {
                        switch (location.action) {
                            case _Actions.PUSH:
                                current += 1;
                                if (current < entries.length) entries.splice(current);
                                entries.push(location);
                                saveState(location.key, location.state);
                                break;
                            case _Actions.REPLACE:
                                entries[current] = location;
                                saveState(location.key, location.state);
                                break;
                        }
                    }
                    return history;
                }
                exports['default'] = createMemoryHistory;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "./Actions": 5,
            "./PathUtils": 10,
            "./createHistory": 14,
            "_process": 86,
            "invariant": 25,
            "warning": 123
        }
    ],
    17: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);

                function deprecate(fn, message) {
                    return function() {
                        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
                        return fn.apply(this, arguments);
                    };
                }
                exports['default'] = deprecate;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "_process": 86,
            "warning": 123
        }
    ],
    18: [
        function(require, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _deprecate = require('./deprecate');
            var _deprecate2 = _interopRequireDefault(_deprecate);
            var _useBeforeUnload = require('./useBeforeUnload');
            var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);
            exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
            module.exports = exports['default'];
        }, {
            "./deprecate": 17,
            "./useBeforeUnload": 23
        }
    ],
    19: [
        function(require, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _deprecate = require('./deprecate');
            var _deprecate2 = _interopRequireDefault(_deprecate);
            var _useQueries = require('./useQueries');
            var _useQueries2 = _interopRequireDefault(_useQueries);
            exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
            module.exports = exports['default'];
        }, {
            "./deprecate": 17,
            "./useQueries": 24
        }
    ],
    20: [
        function(require, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _deprecate = require('./deprecate');
            var _deprecate2 = _interopRequireDefault(_deprecate);
            var _createLocation2 = require('./createLocation');
            var _createLocation3 = _interopRequireDefault(_createLocation2);
            var _createBrowserHistory = require('./createBrowserHistory');
            var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
            exports.createHistory = _createBrowserHistory2['default'];
            var _createHashHistory2 = require('./createHashHistory');
            var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);
            exports.createHashHistory = _createHashHistory3['default'];
            var _createMemoryHistory2 = require('./createMemoryHistory');
            var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
            exports.createMemoryHistory = _createMemoryHistory3['default'];
            var _useBasename2 = require('./useBasename');
            var _useBasename3 = _interopRequireDefault(_useBasename2);
            exports.useBasename = _useBasename3['default'];
            var _useBeforeUnload2 = require('./useBeforeUnload');
            var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);
            exports.useBeforeUnload = _useBeforeUnload3['default'];
            var _useQueries2 = require('./useQueries');
            var _useQueries3 = _interopRequireDefault(_useQueries2);
            exports.useQueries = _useQueries3['default'];
            var _Actions2 = require('./Actions');
            var _Actions3 = _interopRequireDefault(_Actions2);
            exports.Actions = _Actions3['default'];
            var _enableBeforeUnload2 = require('./enableBeforeUnload');
            var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);
            exports.enableBeforeUnload = _enableBeforeUnload3['default'];
            var _enableQueries2 = require('./enableQueries');
            var _enableQueries3 = _interopRequireDefault(_enableQueries2);
            exports.enableQueries = _enableQueries3['default'];
            var createLocation = _deprecate2['default'](_createLocation3['default'], 'Using createLocation without a history instance is deprecated; please use history.createLocation instead');
            exports.createLocation = createLocation;
        }, {
            "./Actions": 5,
            "./createBrowserHistory": 11,
            "./createHashHistory": 13,
            "./createLocation": 15,
            "./createMemoryHistory": 16,
            "./deprecate": 17,
            "./enableBeforeUnload": 18,
            "./enableQueries": 19,
            "./useBasename": 22,
            "./useBeforeUnload": 23,
            "./useQueries": 24
        }
    ],
    21: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);

                function runTransitionHook(hook, location, callback) {
                    var result = hook(location, callback);
                    if (hook.length < 2) {
                        callback(result);
                    } else {
                        process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
                    }
                }
                exports['default'] = runTransitionHook;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "_process": 86,
            "warning": 123
        }
    ],
    22: [
        function(require, module, exports) {
            'use strict';
            exports.__esModule = true;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _ExecutionEnvironment = require('./ExecutionEnvironment');
            var _PathUtils = require('./PathUtils');
            var _runTransitionHook = require('./runTransitionHook');
            var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
            var _deprecate = require('./deprecate');
            var _deprecate2 = _interopRequireDefault(_deprecate);

            function useBasename(createHistory) {
                return function() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    var history = createHistory(options);
                    var basename = options.basename;
                    if (basename == null && _ExecutionEnvironment.canUseDOM) {
                        var base = document.getElementsByTagName('base')[0];
                        if (base) basename = _PathUtils.extractPath(base.href);
                    }

                    function addBasename(location) {
                        if (basename && location.basename == null) {
                            if (location.pathname.indexOf(basename) === 0) {
                                location.pathname = location.pathname.substring(basename.length);
                                location.basename = basename;
                                if (location.pathname === '') location.pathname = '/';
                            } else {
                                location.basename = '';
                            }
                        }
                        return location;
                    }

                    function prependBasename(location) {
                        if (!basename) return location;
                        if (typeof location === 'string') location = _PathUtils.parsePath(location);
                        var pname = location.pathname;
                        var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
                        var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
                        var pathname = normalizedBasename + normalizedPathname;
                        return _extends({}, location, {
                            pathname: pathname
                        });
                    }

                    function listenBefore(hook) {
                        return history.listenBefore(function(location, callback) {
                            _runTransitionHook2['default'](hook, addBasename(location), callback);
                        });
                    }

                    function listen(listener) {
                        return history.listen(function(location) {
                            listener(addBasename(location));
                        });
                    }

                    function push(location) {
                        history.push(prependBasename(location));
                    }

                    function replace(location) {
                        history.replace(prependBasename(location));
                    }

                    function createPath(location) {
                        return history.createPath(prependBasename(location));
                    }

                    function createHref(location) {
                        return history.createHref(prependBasename(location));
                    }

                    function createLocation(location) {
                        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            args[_key - 1] = arguments[_key];
                        }
                        return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
                    }

                    function pushState(state, path) {
                        if (typeof path === 'string') path = _PathUtils.parsePath(path);
                        push(_extends({
                            state: state
                        }, path));
                    }

                    function replaceState(state, path) {
                        if (typeof path === 'string') path = _PathUtils.parsePath(path);
                        replace(_extends({
                            state: state
                        }, path));
                    }
                    return _extends({}, history, {
                        listenBefore: listenBefore,
                        listen: listen,
                        push: push,
                        replace: replace,
                        createPath: createPath,
                        createHref: createHref,
                        createLocation: createLocation,
                        pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
                        replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
                    });
                };
            }
            exports['default'] = useBasename;
            module.exports = exports['default'];
        }, {
            "./ExecutionEnvironment": 9,
            "./PathUtils": 10,
            "./deprecate": 17,
            "./runTransitionHook": 21
        }
    ],
    23: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                var _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);
                var _ExecutionEnvironment = require('./ExecutionEnvironment');
                var _DOMUtils = require('./DOMUtils');
                var _deprecate = require('./deprecate');
                var _deprecate2 = _interopRequireDefault(_deprecate);

                function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
                    function listener(event) {
                        var message = getBeforeUnloadPromptMessage();
                        if (typeof message === 'string') {
                            (event || window.event).returnValue = message;
                            return message;
                        }
                    }
                    _DOMUtils.addEventListener(window, 'beforeunload', listener);
                    return function() {
                        _DOMUtils.removeEventListener(window, 'beforeunload', listener);
                    };
                }

                function useBeforeUnload(createHistory) {
                    return function(options) {
                        var history = createHistory(options);
                        var stopBeforeUnloadListener = undefined;
                        var beforeUnloadHooks = [];

                        function getBeforeUnloadPromptMessage() {
                            var message = undefined;
                            for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
                                message = beforeUnloadHooks[i].call();
                            }
                            return message;
                        }

                        function listenBeforeUnload(hook) {
                            beforeUnloadHooks.push(hook);
                            if (beforeUnloadHooks.length === 1) {
                                if (_ExecutionEnvironment.canUseDOM) {
                                    stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
                                } else {
                                    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'listenBeforeUnload only works in DOM environments') : undefined;
                                }
                            }
                            return function() {
                                beforeUnloadHooks = beforeUnloadHooks.filter(function(item) {
                                    return item !== hook;
                                });
                                if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
                                    stopBeforeUnloadListener();
                                    stopBeforeUnloadListener = null;
                                }
                            };
                        }

                        function registerBeforeUnloadHook(hook) {
                            if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
                                beforeUnloadHooks.push(hook);
                                if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
                            }
                        }

                        function unregisterBeforeUnloadHook(hook) {
                            if (beforeUnloadHooks.length > 0) {
                                beforeUnloadHooks = beforeUnloadHooks.filter(function(item) {
                                    return item !== hook;
                                });
                                if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
                            }
                        }
                        return _extends({}, history, {
                            listenBeforeUnload: listenBeforeUnload,
                            registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
                            unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
                        });
                    };
                }
                exports['default'] = useBeforeUnload;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "./DOMUtils": 8,
            "./ExecutionEnvironment": 9,
            "./deprecate": 17,
            "_process": 86,
            "warning": 123
        }
    ],
    24: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                exports.__esModule = true;
                var _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        'default': obj
                    };
                }
                var _warning = require('warning');
                var _warning2 = _interopRequireDefault(_warning);
                var _queryString = require('query-string');
                var _runTransitionHook = require('./runTransitionHook');
                var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
                var _PathUtils = require('./PathUtils');
                var _deprecate = require('./deprecate');
                var _deprecate2 = _interopRequireDefault(_deprecate);
                var SEARCH_BASE_KEY = '$searchBase';

                function defaultStringifyQuery(query) {
                    return _queryString.stringify(query).replace(/%20/g, '+');
                }
                var defaultParseQueryString = _queryString.parse;

                function isNestedObject(object) {
                    for (var p in object) {
                        if (object.hasOwnProperty(p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
                    }
                    return false;
                }

                function useQueries(createHistory) {
                    return function() {
                        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                        var history = createHistory(options);
                        var stringifyQuery = options.stringifyQuery;
                        var parseQueryString = options.parseQueryString;
                        if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
                        if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

                        function addQuery(location) {
                            if (location.query == null) {
                                var search = location.search;
                                location.query = parseQueryString(search.substring(1));
                                location[SEARCH_BASE_KEY] = {
                                    search: search,
                                    searchBase: ''
                                };
                            }
                            return location;
                        }

                        function appendQuery(location, query) {
                            var _extends2;
                            var searchBaseSpec = location[SEARCH_BASE_KEY];
                            var queryString = query ? stringifyQuery(query) : '';
                            if (!searchBaseSpec && !queryString) {
                                return location;
                            }
                            process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;
                            if (typeof location === 'string') location = _PathUtils.parsePath(location);
                            var searchBase = undefined;
                            if (searchBaseSpec && location.search === searchBaseSpec.search) {
                                searchBase = searchBaseSpec.searchBase;
                            } else {
                                searchBase = location.search || '';
                            }
                            var search = searchBase;
                            if (queryString) {
                                search += (search ? '&' : '?') + queryString;
                            }
                            return _extends({}, location, (_extends2 = {
                                search: search
                            }, _extends2[SEARCH_BASE_KEY] = {
                                search: search,
                                searchBase: searchBase
                            }, _extends2));
                        }

                        function listenBefore(hook) {
                            return history.listenBefore(function(location, callback) {
                                _runTransitionHook2['default'](hook, addQuery(location), callback);
                            });
                        }

                        function listen(listener) {
                            return history.listen(function(location) {
                                listener(addQuery(location));
                            });
                        }

                        function push(location) {
                            history.push(appendQuery(location, location.query));
                        }

                        function replace(location) {
                            history.replace(appendQuery(location, location.query));
                        }

                        function createPath(location, query) {
                            process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;
                            return history.createPath(appendQuery(location, query || location.query));
                        }

                        function createHref(location, query) {
                            process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;
                            return history.createHref(appendQuery(location, query || location.query));
                        }

                        function createLocation(location) {
                            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                args[_key - 1] = arguments[_key];
                            }
                            var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
                            if (location.query) {
                                fullLocation.query = location.query;
                            }
                            return addQuery(fullLocation);
                        }

                        function pushState(state, path, query) {
                            if (typeof path === 'string') path = _PathUtils.parsePath(path);
                            push(_extends({
                                state: state
                            }, path, {
                                query: query
                            }));
                        }

                        function replaceState(state, path, query) {
                            if (typeof path === 'string') path = _PathUtils.parsePath(path);
                            replace(_extends({
                                state: state
                            }, path, {
                                query: query
                            }));
                        }
                        return _extends({}, history, {
                            listenBefore: listenBefore,
                            listen: listen,
                            push: push,
                            replace: replace,
                            createPath: createPath,
                            createHref: createHref,
                            createLocation: createLocation,
                            pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
                            replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
                        });
                    };
                }
                exports['default'] = useQueries;
                module.exports = exports['default'];
            }).call(this, require('_process'))
        }, {
            "./PathUtils": 10,
            "./deprecate": 17,
            "./runTransitionHook": 21,
            "_process": 86,
            "query-string": 88,
            "warning": 123
        }
    ],
    25: [
        function(require, module, exports) {
            (function(process) {
                'use strict';
                var invariant = function(condition, format, a, b, c, d, e, f) {
                    if (process.env.NODE_ENV !== 'production') {
                        if (format === undefined) {
                            throw new Error('invariant requires an error message argument');
                        }
                    }
                    if (!condition) {
                        var error;
                        if (format === undefined) {
                            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
                        } else {
                            var args = [a, b, c, d, e, f];
                            var argIndex = 0;
                            error = new Error(format.replace(/%s/g, function() {
                                return args[argIndex++];
                            }));
                            error.name = 'Invariant Violation';
                        }
                        error.framesToPop = 1;
                        throw error;
                    }
                };
                module.exports = invariant;
            }).call(this, require('_process'))
        }, {
            "_process": 86
        }
    ],
    26: [
        function(require, module, exports) {
            'use strict';

            function assign(obj) {
                var sources = Array.prototype.slice.call(arguments, 1);
                sources.forEach(function(source) {
                    if (!source) {
                        return;
                    }
                    Object.keys(source).forEach(function(key) {
                        obj[key] = source[key];
                    });
                });
                return obj;
            }

            function _class(obj) {
                return Object.prototype.toString.call(obj);
            }

            function isString(obj) {
                return _class(obj) === '[object String]';
            }

            function isObject(obj) {
                return _class(obj) === '[object Object]';
            }

            function isRegExp(obj) {
                return _class(obj) === '[object RegExp]';
            }

            function isFunction(obj) {
                return _class(obj) === '[object Function]';
            }

            function escapeRE(str) {
                return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
            }
            var defaultOptions = {
                fuzzyLink: true,
                fuzzyEmail: true,
                fuzzyIP: false
            };

            function isOptionsObj(obj) {
                return Object.keys(obj || {}).reduce(function(acc, k) {
                    return acc || defaultOptions.hasOwnProperty(k);
                }, false);
            }
            var defaultSchemas = {
                'http:': {
                    validate: function(text, pos, self) {
                        var tail = text.slice(pos);
                        if (!self.re.http) {
                            self.re.http = new RegExp('^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i');
                        }
                        if (self.re.http.test(tail)) {
                            return tail.match(self.re.http)[0].length;
                        }
                        return 0;
                    }
                },
                'https:': 'http:',
                'ftp:': 'http:',
                '//': {
                    validate: function(text, pos, self) {
                        var tail = text.slice(pos);
                        if (!self.re.no_http) {
                            self.re.no_http = new RegExp('^' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i');
                        }
                        if (self.re.no_http.test(tail)) {
                            if (pos >= 3 && text[pos - 3] === ':') {
                                return 0;
                            }
                            return tail.match(self.re.no_http)[0].length;
                        }
                        return 0;
                    }
                },
                'mailto:': {
                    validate: function(text, pos, self) {
                        var tail = text.slice(pos);
                        if (!self.re.mailto) {
                            self.re.mailto = new RegExp('^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i');
                        }
                        if (self.re.mailto.test(tail)) {
                            return tail.match(self.re.mailto)[0].length;
                        }
                        return 0;
                    }
                }
            };
            var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';
            var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

            function resetScanCache(self) {
                self.__index__ = -1;
                self.__text_cache__ = '';
            }

            function createValidator(re) {
                return function(text, pos) {
                    var tail = text.slice(pos);
                    if (re.test(tail)) {
                        return tail.match(re)[0].length;
                    }
                    return 0;
                };
            }

            function createNormalizer() {
                return function(match, self) {
                    self.normalize(match);
                };
            }

            function compile(self) {
                var re = self.re = assign({}, require('./lib/re'));
                var tlds = self.__tlds__.slice();
                if (!self.__tlds_replaced__) {
                    tlds.push(tlds_2ch_src_re);
                }
                tlds.push(re.src_xn);
                re.src_tlds = tlds.join('|');

                function untpl(tpl) {
                    return tpl.replace('%TLDS%', re.src_tlds);
                }
                re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), 'i');
                re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), 'i');
                re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
                re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');
                var aliases = [];
                self.__compiled__ = {};

                function schemaError(name, val) {
                    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
                }
                Object.keys(self.__schemas__).forEach(function(name) {
                    var val = self.__schemas__[name];
                    if (val === null) {
                        return;
                    }
                    var compiled = {
                        validate: null,
                        link: null
                    };
                    self.__compiled__[name] = compiled;
                    if (isObject(val)) {
                        if (isRegExp(val.validate)) {
                            compiled.validate = createValidator(val.validate);
                        } else if (isFunction(val.validate)) {
                            compiled.validate = val.validate;
                        } else {
                            schemaError(name, val);
                        }
                        if (isFunction(val.normalize)) {
                            compiled.normalize = val.normalize;
                        } else if (!val.normalize) {
                            compiled.normalize = createNormalizer();
                        } else {
                            schemaError(name, val);
                        }
                        return;
                    }
                    if (isString(val)) {
                        aliases.push(name);
                        return;
                    }
                    schemaError(name, val);
                });
                aliases.forEach(function(alias) {
                    if (!self.__compiled__[self.__schemas__[alias]]) {
                        return;
                    }
                    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
                    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
                });
                self.__compiled__[''] = {
                    validate: null,
                    normalize: createNormalizer()
                };
                var slist = Object.keys(self.__compiled__).filter(function(name) {
                    return name.length > 0 && self.__compiled__[name];
                }).map(escapeRE).join('|');
                self.re.schema_test = RegExp('(^|(?!_)(?:>|' + re.src_ZPCc + '))(' + slist + ')', 'i');
                self.re.schema_search = RegExp('(^|(?!_)(?:>|' + re.src_ZPCc + '))(' + slist + ')', 'ig');
                self.re.pretest = RegExp('(' + self.re.schema_test.source + ')|' + '(' + self.re.host_fuzzy_test.source + ')|' + '@', 'i');
                resetScanCache(self);
            }

            function Match(self, shift) {
                var start = self.__index__,
                    end = self.__last_index__,
                    text = self.__text_cache__.slice(start, end);
                this.schema = self.__schema__.toLowerCase();
                this.index = start + shift;
                this.lastIndex = end + shift;
                this.raw = text;
                this.text = text;
                this.url = text;
            }

            function createMatch(self, shift) {
                var match = new Match(self, shift);
                self.__compiled__[match.schema].normalize(match, self);
                return match;
            }

            function LinkifyIt(schemas, options) {
                if (!(this instanceof LinkifyIt)) {
                    return new LinkifyIt(schemas, options);
                }
                if (!options) {
                    if (isOptionsObj(schemas)) {
                        options = schemas;
                        schemas = {};
                    }
                }
                this.__opts__ = assign({}, defaultOptions, options);
                this.__index__ = -1;
                this.__last_index__ = -1;
                this.__schema__ = '';
                this.__text_cache__ = '';
                this.__schemas__ = assign({}, defaultSchemas, schemas);
                this.__compiled__ = {};
                this.__tlds__ = tlds_default;
                this.__tlds_replaced__ = false;
                this.re = {};
                compile(this);
            }
            LinkifyIt.prototype.add = function add(schema, definition) {
                this.__schemas__[schema] = definition;
                compile(this);
                return this;
            };
            LinkifyIt.prototype.set = function set(options) {
                this.__opts__ = assign(this.__opts__, options);
                return this;
            };
            LinkifyIt.prototype.test = function test(text) {
                this.__text_cache__ = text;
                this.__index__ = -1;
                if (!text.length) {
                    return false;
                }
                var m, ml, me, len, shift, next, re, tld_pos, at_pos;
                if (this.re.schema_test.test(text)) {
                    re = this.re.schema_search;
                    re.lastIndex = 0;
                    while ((m = re.exec(text)) !== null) {
                        len = this.testSchemaAt(text, m[2], re.lastIndex);
                        if (len) {
                            this.__schema__ = m[2];
                            this.__index__ = m.index + m[1].length;
                            this.__last_index__ = m.index + m[0].length + len;
                            break;
                        }
                    }
                }
                if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
                    tld_pos = text.search(this.re.host_fuzzy_test);
                    if (tld_pos >= 0) {
                        if (this.__index__ < 0 || tld_pos < this.__index__) {
                            if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
                                shift = ml.index + ml[1].length;
                                if (this.__index__ < 0 || shift < this.__index__) {
                                    this.__schema__ = '';
                                    this.__index__ = shift;
                                    this.__last_index__ = ml.index + ml[0].length;
                                }
                            }
                        }
                    }
                }
                if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
                    at_pos = text.indexOf('@');
                    if (at_pos >= 0) {
                        if ((me = text.match(this.re.email_fuzzy)) !== null) {
                            shift = me.index + me[1].length;
                            next = me.index + me[0].length;
                            if (this.__index__ < 0 || shift < this.__index__ || (shift === this.__index__ && next > this.__last_index__)) {
                                this.__schema__ = 'mailto:';
                                this.__index__ = shift;
                                this.__last_index__ = next;
                            }
                        }
                    }
                }
                return this.__index__ >= 0;
            };
            LinkifyIt.prototype.pretest = function pretest(text) {
                return this.re.pretest.test(text);
            };
            LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
                if (!this.__compiled__[schema.toLowerCase()]) {
                    return 0;
                }
                return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
            };
            LinkifyIt.prototype.match = function match(text) {
                var shift = 0,
                    result = [];
                if (this.__index__ >= 0 && this.__text_cache__ === text) {
                    result.push(createMatch(this, shift));
                    shift = this.__last_index__;
                }
                var tail = shift ? text.slice(shift) : text;
                while (this.test(tail)) {
                    result.push(createMatch(this, shift));
                    tail = tail.slice(this.__last_index__);
                    shift += this.__last_index__;
                }
                if (result.length) {
                    return result;
                }
                return null;
            };
            LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
                list = Array.isArray(list) ? list : [list];
                if (!keepOld) {
                    this.__tlds__ = list.slice();
                    this.__tlds_replaced__ = true;
                    compile(this);
                    return this;
                }
                this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
                    return el !== arr[idx - 1];
                }).reverse();
                compile(this);
                return this;
            };
            LinkifyIt.prototype.normalize = function normalize(match) {
                if (!match.schema) {
                    match.url = 'http://' + match.url;
                }
                if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
                    match.url = 'mailto:' + match.url;
                }
            };
            module.exports = LinkifyIt;
        }, {
            "./lib/re": 27
        }
    ],
    27: [
        function(require, module, exports) {
            'use strict';
            var src_Any = exports.src_Any = require('uc.micro/properties/Any/regex').source;
            var src_Cc = exports.src_Cc = require('uc.micro/categories/Cc/regex').source;
            var src_Z = exports.src_Z = require('uc.micro/categories/Z/regex').source;
            var src_P = exports.src_P = require('uc.micro/categories/P/regex').source;
            var src_ZPCc = exports.src_ZPCc = [src_Z, src_P, src_Cc].join('|');
            var src_ZCc = exports.src_ZCc = [src_Z, src_Cc].join('|');
            var src_pseudo_letter = '(?:(?!' + src_ZPCc + ')' + src_Any + ')';
            var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
            var src_ip4 = exports.src_ip4 = '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
            exports.src_auth = '(?:(?:(?!' + src_ZCc + ').)+@)?';
            var src_port = exports.src_port = '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';
            var src_host_terminator = exports.src_host_terminator = '(?=$|' + src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + src_ZPCc + '))';
            var src_path = exports.src_path = '(?:' + '[/?#]' + '(?:' + '(?!' + src_ZCc + '|[()[\\]{}.,"\'?!\\-]).|' + '\\[(?:(?!' + src_ZCc + '|\\]).)*\\]|' + '\\((?:(?!' + src_ZCc + '|[)]).)*\\)|' + '\\{(?:(?!' + src_ZCc + '|[}]).)*\\}|' + '\\"(?:(?!' + src_ZCc + '|["]).)+\\"|' + "\\'(?:(?!" + src_ZCc + "|[']).)+\\'|" + "\\'(?=" + src_pseudo_letter + ').|' + '\\.{2,3}[a-zA-Z0-9%/]|' + '\\.(?!' + src_ZCc + '|[.]).|' + '\\-(?!--(?:[^-]|$))(?:-*)|' + '\\,(?!' + src_ZCc + ').|' + '\\!(?!' + src_ZCc + '|[!]).|' + '\\?(?!' + src_ZCc + '|[?]).' + ')+' + '|\\/' + ')?';
            var src_email_name = exports.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';
            var src_xn = exports.src_xn = 'xn--[a-z0-9\\-]{1,59}';
            var src_domain_root = exports.src_domain_root = '(?:' +
                src_xn + '|' +
                src_pseudo_letter_non_d + '{1,63}' + ')';
            var src_domain = exports.src_domain = '(?:' +
                src_xn + '|' + '(?:' + src_pseudo_letter + ')' + '|' + '(?:' + src_pseudo_letter + '(?:-(?!-)|' + src_pseudo_letter + '){0,61}' + src_pseudo_letter + ')' + ')';
            var src_host = exports.src_host = '(?:' +
                src_ip4 + '|' + '(?:(?:(?:' + src_domain + ')\\.)*' + src_domain_root + ')' + ')';
            var tpl_host_fuzzy = exports.tpl_host_fuzzy = '(?:' +
                src_ip4 + '|' + '(?:(?:(?:' + src_domain + ')\\.)+(?:%TLDS%))' + ')';
            var tpl_host_no_ip_fuzzy = exports.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + src_domain + ')\\.)+(?:%TLDS%))';
            exports.src_host_strict = src_host + src_host_terminator;
            var tpl_host_fuzzy_strict = exports.tpl_host_fuzzy_strict = tpl_host_fuzzy + src_host_terminator;
            exports.src_host_port_strict = src_host + src_port + src_host_terminator;
            var tpl_host_port_fuzzy_strict = exports.tpl_host_port_fuzzy_strict = tpl_host_fuzzy + src_port + src_host_terminator;
            var tpl_host_port_no_ip_fuzzy_strict = exports.tpl_host_port_no_ip_fuzzy_strict = tpl_host_no_ip_fuzzy + src_port + src_host_terminator;
            exports.tpl_host_fuzzy_test = 'localhost|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + src_ZPCc + '|$))';
            exports.tpl_email_fuzzy = '(^|>|' + src_ZCc + ')(' + src_email_name + '@' + tpl_host_fuzzy_strict + ')';
            exports.tpl_link_fuzzy = '(^|(?![.:/\\-_@])(?:[$+<=>^`|]|' + src_ZPCc + '))' + '((?![$+<=>^`|])' + tpl_host_port_fuzzy_strict + src_path + ')';
            exports.tpl_link_no_ip_fuzzy = '(^|(?![.:/\\-_@])(?:[$+<=>^`|]|' + src_ZPCc + '))' + '((?![$+<=>^`|])' + tpl_host_port_no_ip_fuzzy_strict + src_path + ')';
        }, {
            "uc.micro/categories/Cc/regex": 90,
            "uc.micro/categories/P/regex": 92,
            "uc.micro/categories/Z/regex": 93,
            "uc.micro/properties/Any/regex": 95
        }
    ],
    28: [
        function(require, module, exports) {
            'use strict';
            module.exports = require('./lib/');
        }, {
            "./lib/": 38
        }
    ],
    29: [
        function(require, module, exports) {
            'use strict';
            module.exports = require('entities/maps/entities.json');
        }, {
            "entities/maps/entities.json": 4
        }
    ],
    30: [
        function(require, module, exports) {
            'use strict';
            module.exports = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'meta', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'pre', 'section', 'source', 'title', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];
        }, {}
    ],
    31: [
        function(require, module, exports) {
            'use strict';
            var attr_name = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
            var unquoted = '[^"\'=<>`\\x00-\\x20]+';
            var single_quoted = "'[^']*'";
            var double_quoted = '"[^"]*"';
            var attr_value = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';
            var attribute = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';
            var open_tag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
            var close_tag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
            var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
            var processing = '<[?].*?[?]>';
            var declaration = '<![A-Z]+\\s+[^>]*>';
            var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
            var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment + '|' + processing + '|' + declaration + '|' + cdata + ')');
            var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');
            module.exports.HTML_TAG_RE = HTML_TAG_RE;
            module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
        }, {}
    ],
    32: [
        function(require, module, exports) {
            'use strict';
            module.exports = ['coap', 'doi', 'javascript', 'aaa', 'aaas', 'about', 'acap', 'cap', 'cid', 'crid', 'data', 'dav', 'dict', 'dns', 'file', 'ftp', 'geo', 'go', 'gopher', 'h323', 'http', 'https', 'iax', 'icap', 'im', 'imap', 'info', 'ipp', 'iris', 'iris.beep', 'iris.xpc', 'iris.xpcs', 'iris.lwz', 'ldap', 'mailto', 'mid', 'msrp', 'msrps', 'mtqp', 'mupdate', 'news', 'nfs', 'ni', 'nih', 'nntp', 'opaquelocktoken', 'pop', 'pres', 'rtsp', 'service', 'session', 'shttp', 'sieve', 'sip', 'sips', 'sms', 'snmp', 'soap.beep', 'soap.beeps', 'tag', 'tel', 'telnet', 'tftp', 'thismessage', 'tn3270', 'tip', 'tv', 'urn', 'vemmi', 'ws', 'wss', 'xcon', 'xcon-userid', 'xmlrpc.beep', 'xmlrpc.beeps', 'xmpp', 'z39.50r', 'z39.50s', 'adiumxtra', 'afp', 'afs', 'aim', 'apt', 'attachment', 'aw', 'beshare', 'bitcoin', 'bolo', 'callto', 'chrome', 'chrome-extension', 'com-eventbrite-attendee', 'content', 'cvs', 'dlna-playsingle', 'dlna-playcontainer', 'dtn', 'dvb', 'ed2k', 'facetime', 'feed', 'finger', 'fish', 'gg', 'git', 'gizmoproject', 'gtalk', 'hcp', 'icon', 'ipn', 'irc', 'irc6', 'ircs', 'itms', 'jar', 'jms', 'keyparc', 'lastfm', 'ldaps', 'magnet', 'maps', 'market', 'message', 'mms', 'ms-help', 'msnim', 'mumble', 'mvn', 'notes', 'oid', 'palm', 'paparazzi', 'platform', 'proxy', 'psyc', 'query', 'res', 'resource', 'rmi', 'rsync', 'rtmp', 'secondlife', 'sftp', 'sgn', 'skype', 'smb', 'soldat', 'spotify', 'ssh', 'steam', 'svn', 'teamspeak', 'things', 'udp', 'unreal', 'ut2004', 'ventrilo', 'view-source', 'webcal', 'wtai', 'wyciwyg', 'xfire', 'xri', 'ymsgr'];
        }, {}
    ],
    33: [
        function(require, module, exports) {
            'use strict';

            function _class(obj) {
                return Object.prototype.toString.call(obj);
            }

            function isString(obj) {
                return _class(obj) === '[object String]';
            }
            var _hasOwnProperty = Object.prototype.hasOwnProperty;

            function has(object, key) {
                return _hasOwnProperty.call(object, key);
            }

            function assign(obj) {
                var sources = Array.prototype.slice.call(arguments, 1);
                sources.forEach(function(source) {
                    if (!source) {
                        return;
                    }
                    if (typeof source !== 'object') {
                        throw new TypeError(source + 'must be object');
                    }
                    Object.keys(source).forEach(function(key) {
                        obj[key] = source[key];
                    });
                });
                return obj;
            }

            function arrayReplaceAt(src, pos, newElements) {
                return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
            }

            function isValidEntityCode(c) {
                if (c >= 0xD800 && c <= 0xDFFF) {
                    return false;
                }
                if (c >= 0xFDD0 && c <= 0xFDEF) {
                    return false;
                }
                if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) {
                    return false;
                }
                if (c >= 0x00 && c <= 0x08) {
                    return false;
                }
                if (c === 0x0B) {
                    return false;
                }
                if (c >= 0x0E && c <= 0x1F) {
                    return false;
                }
                if (c >= 0x7F && c <= 0x9F) {
                    return false;
                }
                if (c > 0x10FFFF) {
                    return false;
                }
                return true;
            }

            function fromCodePoint(c) {
                if (c > 0xffff) {
                    c -= 0x10000;
                    var surrogate1 = 0xd800 + (c >> 10),
                        surrogate2 = 0xdc00 + (c & 0x3ff);
                    return String.fromCharCode(surrogate1, surrogate2);
                }
                return String.fromCharCode(c);
            }
            var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
            var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
            var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');
            var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
            var entities = require('./entities');

            function replaceEntityPattern(match, name) {
                var code = 0;
                if (has(entities, name)) {
                    return entities[name];
                }
                if (name.charCodeAt(0) === 0x23 && DIGITAL_ENTITY_TEST_RE.test(name)) {
                    code = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
                    if (isValidEntityCode(code)) {
                        return fromCodePoint(code);
                    }
                }
                return match;
            }

            function unescapeMd(str) {
                if (str.indexOf('\\') < 0) {
                    return str;
                }
                return str.replace(UNESCAPE_MD_RE, '$1');
            }

            function unescapeAll(str) {
                if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) {
                    return str;
                }
                return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
                    if (escaped) {
                        return escaped;
                    }
                    return replaceEntityPattern(match, entity);
                });
            }
            var HTML_ESCAPE_TEST_RE = /[&<>"]/;
            var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
            var HTML_REPLACEMENTS = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;'
            };

            function replaceUnsafeChar(ch) {
                return HTML_REPLACEMENTS[ch];
            }

            function escapeHtml(str) {
                if (HTML_ESCAPE_TEST_RE.test(str)) {
                    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
                }
                return str;
            }
            var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

            function escapeRE(str) {
                return str.replace(REGEXP_ESCAPE_RE, '\\$&');
            }

            function isSpace(code) {
                switch (code) {
                    case 0x09:
                    case 0x20:
                        return true;
                }
                return false;
            }

            function isWhiteSpace(code) {
                if (code >= 0x2000 && code <= 0x200A) {
                    return true;
                }
                switch (code) {
                    case 0x09:
                    case 0x0A:
                    case 0x0B:
                    case 0x0C:
                    case 0x0D:
                    case 0x20:
                    case 0xA0:
                    case 0x1680:
                    case 0x202F:
                    case 0x205F:
                    case 0x3000:
                        return true;
                }
                return false;
            }
            var UNICODE_PUNCT_RE = require('uc.micro/categories/P/regex');

            function isPunctChar(ch) {
                return UNICODE_PUNCT_RE.test(ch);
            }

            function isMdAsciiPunct(ch) {
                switch (ch) {
                    case 0x21:
                    case 0x22:
                    case 0x23:
                    case 0x24:
                    case 0x25:
                    case 0x26:
                    case 0x27:
                    case 0x28:
                    case 0x29:
                    case 0x2A:
                    case 0x2B:
                    case 0x2C:
                    case 0x2D:
                    case 0x2E:
                    case 0x2F:
                    case 0x3A:
                    case 0x3B:
                    case 0x3C:
                    case 0x3D:
                    case 0x3E:
                    case 0x3F:
                    case 0x40:
                    case 0x5B:
                    case 0x5C:
                    case 0x5D:
                    case 0x5E:
                    case 0x5F:
                    case 0x60:
                    case 0x7B:
                    case 0x7C:
                    case 0x7D:
                    case 0x7E:
                        return true;
                    default:
                        return false;
                }
            }

            function normalizeReference(str) {
                return str.trim().replace(/\s+/g, ' ').toUpperCase();
            }
            exports.lib = {};
            exports.lib.mdurl = require('mdurl');
            exports.lib.ucmicro = require('uc.micro');
            exports.assign = assign;
            exports.isString = isString;
            exports.has = has;
            exports.unescapeMd = unescapeMd;
            exports.unescapeAll = unescapeAll;
            exports.isValidEntityCode = isValidEntityCode;
            exports.fromCodePoint = fromCodePoint;
            exports.escapeHtml = escapeHtml;
            exports.arrayReplaceAt = arrayReplaceAt;
            exports.isSpace = isSpace;
            exports.isWhiteSpace = isWhiteSpace;
            exports.isMdAsciiPunct = isMdAsciiPunct;
            exports.isPunctChar = isPunctChar;
            exports.escapeRE = escapeRE;
            exports.normalizeReference = normalizeReference;
        }, {
            "./entities": 29,
            "mdurl": 84,
            "uc.micro": 94,
            "uc.micro/categories/P/regex": 92
        }
    ],
    34: [
        function(require, module, exports) {
            'use strict';
            exports.parseLinkLabel = require('./parse_link_label');
            exports.parseLinkDestination = require('./parse_link_destination');
            exports.parseLinkTitle = require('./parse_link_title');
        }, {
            "./parse_link_destination": 35,
            "./parse_link_label": 36,
            "./parse_link_title": 37
        }
    ],
    35: [
        function(require, module, exports) {
            'use strict';
            var unescapeAll = require('../common/utils').unescapeAll;
            module.exports = function parseLinkDestination(str, pos, max) {
                var code, level, lines = 0,
                    start = pos,
                    result = {
                        ok: false,
                        pos: 0,
                        lines: 0,
                        str: ''
                    };
                if (str.charCodeAt(pos) === 0x3C) {
                    pos++;
                    while (pos < max) {
                        code = str.charCodeAt(pos);
                        if (code === 0x0A) {
                            return result;
                        }
                        if (code === 0x3E) {
                            result.pos = pos + 1;
                            result.str = unescapeAll(str.slice(start + 1, pos));
                            result.ok = true;
                            return result;
                        }
                        if (code === 0x5C && pos + 1 < max) {
                            pos += 2;
                            continue;
                        }
                        pos++;
                    }
                    return result;
                }
                level = 0;
                while (pos < max) {
                    code = str.charCodeAt(pos);
                    if (code === 0x20) {
                        break;
                    }
                    if (code < 0x20 || code === 0x7F) {
                        break;
                    }
                    if (code === 0x5C && pos + 1 < max) {
                        pos += 2;
                        continue;
                    }
                    if (code === 0x28) {
                        level++;
                        if (level > 1) {
                            break;
                        }
                    }
                    if (code === 0x29) {
                        level--;
                        if (level < 0) {
                            break;
                        }
                    }
                    pos++;
                }
                if (start === pos) {
                    return result;
                }
                result.str = unescapeAll(str.slice(start, pos));
                result.lines = lines;
                result.pos = pos;
                result.ok = true;
                return result;
            };
        }, {
            "../common/utils": 33
        }
    ],
    36: [
        function(require, module, exports) {
            'use strict';
            module.exports = function parseLinkLabel(state, start, disableNested) {
                var level, found, marker, prevPos, labelEnd = -1,
                    max = state.posMax,
                    oldPos = state.pos;
                state.pos = start + 1;
                level = 1;
                while (state.pos < max) {
                    marker = state.src.charCodeAt(state.pos);
                    if (marker === 0x5D) {
                        level--;
                        if (level === 0) {
                            found = true;
                            break;
                        }
                    }
                    prevPos = state.pos;
                    state.md.inline.skipToken(state);
                    if (marker === 0x5B) {
                        if (prevPos === state.pos - 1) {
                            level++;
                        } else if (disableNested) {
                            state.pos = oldPos;
                            return -1;
                        }
                    }
                }
                if (found) {
                    labelEnd = state.pos;
                }
                state.pos = oldPos;
                return labelEnd;
            };
        }, {}
    ],
    37: [
        function(require, module, exports) {
            'use strict';
            var unescapeAll = require('../common/utils').unescapeAll;
            module.exports = function parseLinkTitle(str, pos, max) {
                var code, marker, lines = 0,
                    start = pos,
                    result = {
                        ok: false,
                        pos: 0,
                        lines: 0,
                        str: ''
                    };
                if (pos >= max) {
                    return result;
                }
                marker = str.charCodeAt(pos);
                if (marker !== 0x22 && marker !== 0x27 && marker !== 0x28) {
                    return result;
                }
                pos++;
                if (marker === 0x28) {
                    marker = 0x29;
                }
                while (pos < max) {
                    code = str.charCodeAt(pos);
                    if (code === marker) {
                        result.pos = pos + 1;
                        result.lines = lines;
                        result.str = unescapeAll(str.slice(start + 1, pos));
                        result.ok = true;
                        return result;
                    } else if (code === 0x0A) {
                        lines++;
                    } else if (code === 0x5C && pos + 1 < max) {
                        pos++;
                        if (str.charCodeAt(pos) === 0x0A) {
                            lines++;
                        }
                    }
                    pos++;
                }
                return result;
            };
        }, {
            "../common/utils": 33
        }
    ],
    38: [
        function(require, module, exports) {
            'use strict';
            var utils = require('./common/utils');
            var helpers = require('./helpers');
            var Renderer = require('./renderer');
            var ParserCore = require('./parser_core');
            var ParserBlock = require('./parser_block');
            var ParserInline = require('./parser_inline');
            var LinkifyIt = require('linkify-it');
            var mdurl = require('mdurl');
            var punycode = require('punycode');
            var config = {
                'default': require('./presets/default'),
                zero: require('./presets/zero'),
                commonmark: require('./presets/commonmark')
            };
            var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
            var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

            function validateLink(url) {
                var str = url.trim().toLowerCase();
                return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
            }
            var RECODE_HOSTNAME_FOR = ['http:', 'https:', 'mailto:'];

            function normalizeLink(url) {
                var parsed = mdurl.parse(url, true);
                if (parsed.hostname) {
                    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
                        try {
                            parsed.hostname = punycode.toASCII(parsed.hostname);
                        } catch (er) {}
                    }
                }
                return mdurl.encode(mdurl.format(parsed));
            }

            function normalizeLinkText(url) {
                var parsed = mdurl.parse(url, true);
                if (parsed.hostname) {
                    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
                        try {
                            parsed.hostname = punycode.toUnicode(parsed.hostname);
                        } catch (er) {}
                    }
                }
                return mdurl.decode(mdurl.format(parsed));
            }

            function MarkdownIt(presetName, options) {
                if (!(this instanceof MarkdownIt)) {
                    return new MarkdownIt(presetName, options);
                }
                if (!options) {
                    if (!utils.isString(presetName)) {
                        options = presetName || {};
                        presetName = 'default';
                    }
                }
                this.inline = new ParserInline();
                this.block = new ParserBlock();
                this.core = new ParserCore();
                this.renderer = new Renderer();
                this.linkify = new LinkifyIt();
                this.validateLink = validateLink;
                this.normalizeLink = normalizeLink;
                this.normalizeLinkText = normalizeLinkText;
                this.utils = utils;
                this.helpers = helpers;
                this.options = {};
                this.configure(presetName);
                if (options) {
                    this.set(options);
                }
            }
            MarkdownIt.prototype.set = function(options) {
                utils.assign(this.options, options);
                return this;
            };
            MarkdownIt.prototype.configure = function(presets) {
                var self = this,
                    presetName;
                if (utils.isString(presets)) {
                    presetName = presets;
                    presets = config[presetName];
                    if (!presets) {
                        throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
                    }
                }
                if (!presets) {
                    throw new Error('Wrong `markdown-it` preset, can\'t be empty');
                }
                if (presets.options) {
                    self.set(presets.options);
                }
                if (presets.components) {
                    Object.keys(presets.components).forEach(function(name) {
                        if (presets.components[name].rules) {
                            self[name].ruler.enableOnly(presets.components[name].rules);
                        }
                        if (presets.components[name].rules2) {
                            self[name].ruler2.enableOnly(presets.components[name].rules2);
                        }
                    });
                }
                return this;
            };
            MarkdownIt.prototype.enable = function(list, ignoreInvalid) {
                var result = [];
                if (!Array.isArray(list)) {
                    list = [list];
                }
                ['core', 'block', 'inline'].forEach(function(chain) {
                    result = result.concat(this[chain].ruler.enable(list, true));
                }, this);
                result = result.concat(this.inline.ruler2.enable(list, true));
                var missed = list.filter(function(name) {
                    return result.indexOf(name) < 0;
                });
                if (missed.length && !ignoreInvalid) {
                    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
                }
                return this;
            };
            MarkdownIt.prototype.disable = function(list, ignoreInvalid) {
                var result = [];
                if (!Array.isArray(list)) {
                    list = [list];
                }
                ['core', 'block', 'inline'].forEach(function(chain) {
                    result = result.concat(this[chain].ruler.disable(list, true));
                }, this);
                result = result.concat(this.inline.ruler2.disable(list, true));
                var missed = list.filter(function(name) {
                    return result.indexOf(name) < 0;
                });
                if (missed.length && !ignoreInvalid) {
                    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
                }
                return this;
            };
            MarkdownIt.prototype.use = function(plugin) {
                var args = [this].concat(Array.prototype.slice.call(arguments, 1));
                plugin.apply(plugin, args);
                return this;
            };
            MarkdownIt.prototype.parse = function(src, env) {
                var state = new this.core.State(src, this, env);
                this.core.process(state);
                return state.tokens;
            };
            MarkdownIt.prototype.render = function(src, env) {
                env = env || {};
                return this.renderer.render(this.parse(src, env), this.options, env);
            };
            MarkdownIt.prototype.parseInline = function(src, env) {
                var state = new this.core.State(src, this, env);
                state.inlineMode = true;
                this.core.process(state);
                return state.tokens;
            };
            MarkdownIt.prototype.renderInline = function(src, env) {
                env = env || {};
                return this.renderer.render(this.parseInline(src, env), this.options, env);
            };
            module.exports = MarkdownIt;
        }, {
            "./common/utils": 33,
            "./helpers": 34,
            "./parser_block": 39,
            "./parser_core": 40,
            "./parser_inline": 41,
            "./presets/commonmark": 42,
            "./presets/default": 43,
            "./presets/zero": 44,
            "./renderer": 45,
            "linkify-it": 26,
            "mdurl": 84,
            "punycode": 87
        }
    ],
    39: [
        function(require, module, exports) {
            'use strict';
            var Ruler = require('./ruler');
            var _rules = [
                ['table', require('./rules_block/table'), ['paragraph', 'reference']],
                ['code', require('./rules_block/code')],
                ['fence', require('./rules_block/fence'), ['paragraph', 'reference', 'blockquote', 'list']],
                ['blockquote', require('./rules_block/blockquote'), ['paragraph', 'reference', 'list']],
                ['hr', require('./rules_block/hr'), ['paragraph', 'reference', 'blockquote', 'list']],
                ['list', require('./rules_block/list'), ['paragraph', 'reference', 'blockquote']],
                ['reference', require('./rules_block/reference')],
                ['heading', require('./rules_block/heading'), ['paragraph', 'reference', 'blockquote']],
                ['lheading', require('./rules_block/lheading')],
                ['html_block', require('./rules_block/html_block'), ['paragraph', 'reference', 'blockquote']],
                ['paragraph', require('./rules_block/paragraph')]
            ];

            function ParserBlock() {
                this.ruler = new Ruler();
                for (var i = 0; i < _rules.length; i++) {
                    this.ruler.push(_rules[i][0], _rules[i][1], {
                        alt: (_rules[i][2] || []).slice()
                    });
                }
            }
            ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
                var ok, i, rules = this.ruler.getRules(''),
                    len = rules.length,
                    line = startLine,
                    hasEmptyLines = false,
                    maxNesting = state.md.options.maxNesting;
                while (line < endLine) {
                    state.line = line = state.skipEmptyLines(line);
                    if (line >= endLine) {
                        break;
                    }
                    if (state.sCount[line] < state.blkIndent) {
                        break;
                    }
                    if (state.level >= maxNesting) {
                        state.line = endLine;
                        break;
                    }
                    for (i = 0; i < len; i++) {
                        ok = rules[i](state, line, endLine, false);
                        if (ok) {
                            break;
                        }
                    }
                    state.tight = !hasEmptyLines;
                    if (state.isEmpty(state.line - 1)) {
                        hasEmptyLines = true;
                    }
                    line = state.line;
                    if (line < endLine && state.isEmpty(line)) {
                        hasEmptyLines = true;
                        line++;
                        if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) {
                            break;
                        }
                        state.line = line;
                    }
                }
            };
            ParserBlock.prototype.parse = function(src, md, env, outTokens) {
                var state;
                if (!src) {
                    return [];
                }
                state = new this.State(src, md, env, outTokens);
                this.tokenize(state, state.line, state.lineMax);
            };
            ParserBlock.prototype.State = require('./rules_block/state_block');
            module.exports = ParserBlock;
        }, {
            "./ruler": 46,
            "./rules_block/blockquote": 47,
            "./rules_block/code": 48,
            "./rules_block/fence": 49,
            "./rules_block/heading": 50,
            "./rules_block/hr": 51,
            "./rules_block/html_block": 52,
            "./rules_block/lheading": 53,
            "./rules_block/list": 54,
            "./rules_block/paragraph": 55,
            "./rules_block/reference": 56,
            "./rules_block/state_block": 57,
            "./rules_block/table": 58
        }
    ],
    40: [
        function(require, module, exports) {
            'use strict';
            var Ruler = require('./ruler');
            var _rules = [
                ['normalize', require('./rules_core/normalize')],
                ['block', require('./rules_core/block')],
                ['inline', require('./rules_core/inline')],
                ['linkify', require('./rules_core/linkify')],
                ['replacements', require('./rules_core/replacements')],
                ['smartquotes', require('./rules_core/smartquotes')]
            ];

            function Core() {
                this.ruler = new Ruler();
                for (var i = 0; i < _rules.length; i++) {
                    this.ruler.push(_rules[i][0], _rules[i][1]);
                }
            }
            Core.prototype.process = function(state) {
                var i, l, rules;
                rules = this.ruler.getRules('');
                for (i = 0, l = rules.length; i < l; i++) {
                    rules[i](state);
                }
            };
            Core.prototype.State = require('./rules_core/state_core');
            module.exports = Core;
        }, {
            "./ruler": 46,
            "./rules_core/block": 59,
            "./rules_core/inline": 60,
            "./rules_core/linkify": 61,
            "./rules_core/normalize": 62,
            "./rules_core/replacements": 63,
            "./rules_core/smartquotes": 64,
            "./rules_core/state_core": 65
        }
    ],
    41: [
        function(require, module, exports) {
            'use strict';
            var Ruler = require('./ruler');
            var _rules = [
                ['text', require('./rules_inline/text')],
                ['newline', require('./rules_inline/newline')],
                ['escape', require('./rules_inline/escape')],
                ['backticks', require('./rules_inline/backticks')],
                ['strikethrough', require('./rules_inline/strikethrough').tokenize],
                ['emphasis', require('./rules_inline/emphasis').tokenize],
                ['link', require('./rules_inline/link')],
                ['image', require('./rules_inline/image')],
                ['autolink', require('./rules_inline/autolink')],
                ['html_inline', require('./rules_inline/html_inline')],
                ['entity', require('./rules_inline/entity')]
            ];
            var _rules2 = [
                ['balance_pairs', require('./rules_inline/balance_pairs')],
                ['strikethrough', require('./rules_inline/strikethrough').postProcess],
                ['emphasis', require('./rules_inline/emphasis').postProcess],
                ['text_collapse', require('./rules_inline/text_collapse')]
            ];

            function ParserInline() {
                var i;
                this.ruler = new Ruler();
                for (i = 0; i < _rules.length; i++) {
                    this.ruler.push(_rules[i][0], _rules[i][1]);
                }
                this.ruler2 = new Ruler();
                for (i = 0; i < _rules2.length; i++) {
                    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
                }
            }
            ParserInline.prototype.skipToken = function(state) {
                var i, pos = state.pos,
                    rules = this.ruler.getRules(''),
                    len = rules.length,
                    maxNesting = state.md.options.maxNesting,
                    cache = state.cache;
                if (typeof cache[pos] !== 'undefined') {
                    state.pos = cache[pos];
                    return;
                }
                if (state.level < maxNesting) {
                    for (i = 0; i < len; i++) {
                        if (rules[i](state, true)) {
                            cache[pos] = state.pos;
                            return;
                        }
                    }
                }
                state.pos++;
                cache[pos] = state.pos;
            };
            ParserInline.prototype.tokenize = function(state) {
                var ok, i, rules = this.ruler.getRules(''),
                    len = rules.length,
                    end = state.posMax,
                    maxNesting = state.md.options.maxNesting;
                while (state.pos < end) {
                    if (state.level < maxNesting) {
                        for (i = 0; i < len; i++) {
                            ok = rules[i](state, false);
                            if (ok) {
                                break;
                            }
                        }
                    }
                    if (ok) {
                        if (state.pos >= end) {
                            break;
                        }
                        continue;
                    }
                    state.pending += state.src[state.pos++];
                }
                if (state.pending) {
                    state.pushPending();
                }
            };
            ParserInline.prototype.parse = function(str, md, env, outTokens) {
                var i, rules, len;
                var state = new this.State(str, md, env, outTokens);
                this.tokenize(state);
                rules = this.ruler2.getRules('');
                len = rules.length;
                for (i = 0; i < len; i++) {
                    rules[i](state);
                }
            };
            ParserInline.prototype.State = require('./rules_inline/state_inline');
            module.exports = ParserInline;
        }, {
            "./ruler": 46,
            "./rules_inline/autolink": 66,
            "./rules_inline/backticks": 67,
            "./rules_inline/balance_pairs": 68,
            "./rules_inline/emphasis": 69,
            "./rules_inline/entity": 70,
            "./rules_inline/escape": 71,
            "./rules_inline/html_inline": 72,
            "./rules_inline/image": 73,
            "./rules_inline/link": 74,
            "./rules_inline/newline": 75,
            "./rules_inline/state_inline": 76,
            "./rules_inline/strikethrough": 77,
            "./rules_inline/text": 78,
            "./rules_inline/text_collapse": 79
        }
    ],
    42: [
        function(require, module, exports) {
            'use strict';
            module.exports = {
                options: {
                    html: true,
                    xhtmlOut: true,
                    breaks: false,
                    langPrefix: 'language-',
                    linkify: false,
                    typographer: false,
                    quotes: '\u201c\u201d\u2018\u2019',
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ['normalize', 'block', 'inline']
                    },
                    block: {
                        rules: ['blockquote', 'code', 'fence', 'heading', 'hr', 'html_block', 'lheading', 'list', 'reference', 'paragraph']
                    },
                    inline: {
                        rules: ['autolink', 'backticks', 'emphasis', 'entity', 'escape', 'html_inline', 'image', 'link', 'newline', 'text'],
                        rules2: ['balance_pairs', 'emphasis', 'text_collapse']
                    }
                }
            };
        }, {}
    ],
    43: [
        function(require, module, exports) {
            'use strict';
            module.exports = {
                options: {
                    html: false,
                    xhtmlOut: false,
                    breaks: false,
                    langPrefix: 'language-',
                    linkify: false,
                    typographer: false,
                    quotes: '\u201c\u201d\u2018\u2019',
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {},
                    block: {},
                    inline: {}
                }
            };
        }, {}
    ],
    44: [
        function(require, module, exports) {
            'use strict';
            module.exports = {
                options: {
                    html: false,
                    xhtmlOut: false,
                    breaks: false,
                    langPrefix: 'language-',
                    linkify: false,
                    typographer: false,
                    quotes: '\u201c\u201d\u2018\u2019',
                    highlight: null,
                    maxNesting: 20
                },
                components: {
                    core: {
                        rules: ['normalize', 'block', 'inline']
                    },
                    block: {
                        rules: ['paragraph']
                    },
                    inline: {
                        rules: ['text'],
                        rules2: ['balance_pairs', 'text_collapse']
                    }
                }
            };
        }, {}
    ],
    45: [
        function(require, module, exports) {
            'use strict';
            var assign = require('./common/utils').assign;
            var unescapeAll = require('./common/utils').unescapeAll;
            var escapeHtml = require('./common/utils').escapeHtml;
            var default_rules = {};
            default_rules.code_inline = function(tokens, idx) {
                return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
            };
            default_rules.code_block = function(tokens, idx) {
                return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>\n';
            };
            default_rules.fence = function(tokens, idx, options, env, slf) {
                var token = tokens[idx],
                    info = token.info ? unescapeAll(token.info).trim() : '',
                    langName = '',
                    highlighted;
                if (info) {
                    langName = info.split(/\s+/g)[0];
                    token.attrJoin('class', options.langPrefix + langName);
                }
                if (options.highlight) {
                    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
                } else {
                    highlighted = escapeHtml(token.content);
                }
                if (highlighted.indexOf('<pre') === 0) {
                    return highlighted + '\n';
                }
                return '<pre><code' + slf.renderAttrs(token) + '>' + highlighted + '</code></pre>\n';
            };
            default_rules.image = function(tokens, idx, options, env, slf) {
                var token = tokens[idx];
                token.attrs[token.attrIndex('alt')][1] = slf.renderInlineAsText(token.children, options, env);
                return slf.renderToken(tokens, idx, options);
            };
            default_rules.hardbreak = function(tokens, idx, options) {
                return options.xhtmlOut ? '<br />\n' : '<br>\n';
            };
            default_rules.softbreak = function(tokens, idx, options) {
                return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
            };
            default_rules.text = function(tokens, idx) {
                return escapeHtml(tokens[idx].content);
            };
            default_rules.html_block = function(tokens, idx) {
                return tokens[idx].content;
            };
            default_rules.html_inline = function(tokens, idx) {
                return tokens[idx].content;
            };

            function Renderer() {
                this.rules = assign({}, default_rules);
            }
            Renderer.prototype.renderAttrs = function renderAttrs(token) {
                var i, l, result;
                if (!token.attrs) {
                    return '';
                }
                result = '';
                for (i = 0, l = token.attrs.length; i < l; i++) {
                    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
                }
                return result;
            };
            Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
                var nextToken, result = '',
                    needLf = false,
                    token = tokens[idx];
                if (token.hidden) {
                    return '';
                }
                if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
                    result += '\n';
                }
                result += (token.nesting === -1 ? '</' : '<') + token.tag;
                result += this.renderAttrs(token);
                if (token.nesting === 0 && options.xhtmlOut) {
                    result += ' /';
                }
                if (token.block) {
                    needLf = true;
                    if (token.nesting === 1) {
                        if (idx + 1 < tokens.length) {
                            nextToken = tokens[idx + 1];
                            if (nextToken.type === 'inline' || nextToken.hidden) {
                                needLf = false;
                            } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
                                needLf = false;
                            }
                        }
                    }
                }
                result += needLf ? '>\n' : '>';
                return result;
            };
            Renderer.prototype.renderInline = function(tokens, options, env) {
                var type, result = '',
                    rules = this.rules;
                for (var i = 0, len = tokens.length; i < len; i++) {
                    type = tokens[i].type;
                    if (typeof rules[type] !== 'undefined') {
                        result += rules[type](tokens, i, options, env, this);
                    } else {
                        result += this.renderToken(tokens, i, options);
                    }
                }
                return result;
            };
            Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
                var result = '',
                    rules = this.rules;
                for (var i = 0, len = tokens.length; i < len; i++) {
                    if (tokens[i].type === 'text') {
                        result += rules.text(tokens, i, options, env, this);
                    } else if (tokens[i].type === 'image') {
                        result += this.renderInlineAsText(tokens[i].children, options, env);
                    }
                }
                return result;
            };
            Renderer.prototype.render = function(tokens, options, env) {
                var i, len, type, result = '',
                    rules = this.rules;
                for (i = 0, len = tokens.length; i < len; i++) {
                    type = tokens[i].type;
                    if (type === 'inline') {
                        result += this.renderInline(tokens[i].children, options, env);
                    } else if (typeof rules[type] !== 'undefined') {
                        result += rules[tokens[i].type](tokens, i, options, env, this);
                    } else {
                        result += this.renderToken(tokens, i, options, env);
                    }
                }
                return result;
            };
            module.exports = Renderer;
        }, {
            "./common/utils": 33
        }
    ],
    46: [
        function(require, module, exports) {
            'use strict';

            function Ruler() {
                this.__rules__ = [];
                this.__cache__ = null;
            }
            Ruler.prototype.__find__ = function(name) {
                for (var i = 0; i < this.__rules__.length; i++) {
                    if (this.__rules__[i].name === name) {
                        return i;
                    }
                }
                return -1;
            };
            Ruler.prototype.__compile__ = function() {
                var self = this;
                var chains = [''];
                self.__rules__.forEach(function(rule) {
                    if (!rule.enabled) {
                        return;
                    }
                    rule.alt.forEach(function(altName) {
                        if (chains.indexOf(altName) < 0) {
                            chains.push(altName);
                        }
                    });
                });
                self.__cache__ = {};
                chains.forEach(function(chain) {
                    self.__cache__[chain] = [];
                    self.__rules__.forEach(function(rule) {
                        if (!rule.enabled) {
                            return;
                        }
                        if (chain && rule.alt.indexOf(chain) < 0) {
                            return;
                        }
                        self.__cache__[chain].push(rule.fn);
                    });
                });
            };
            Ruler.prototype.at = function(name, fn, options) {
                var index = this.__find__(name);
                var opt = options || {};
                if (index === -1) {
                    throw new Error('Parser rule not found: ' + name);
                }
                this.__rules__[index].fn = fn;
                this.__rules__[index].alt = opt.alt || [];
                this.__cache__ = null;
            };
            Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
                var index = this.__find__(beforeName);
                var opt = options || {};
                if (index === -1) {
                    throw new Error('Parser rule not found: ' + beforeName);
                }
                this.__rules__.splice(index, 0, {
                    name: ruleName,
                    enabled: true,
                    fn: fn,
                    alt: opt.alt || []
                });
                this.__cache__ = null;
            };
            Ruler.prototype.after = function(afterName, ruleName, fn, options) {
                var index = this.__find__(afterName);
                var opt = options || {};
                if (index === -1) {
                    throw new Error('Parser rule not found: ' + afterName);
                }
                this.__rules__.splice(index + 1, 0, {
                    name: ruleName,
                    enabled: true,
                    fn: fn,
                    alt: opt.alt || []
                });
                this.__cache__ = null;
            };
            Ruler.prototype.push = function(ruleName, fn, options) {
                var opt = options || {};
                this.__rules__.push({
                    name: ruleName,
                    enabled: true,
                    fn: fn,
                    alt: opt.alt || []
                });
                this.__cache__ = null;
            };
            Ruler.prototype.enable = function(list, ignoreInvalid) {
                if (!Array.isArray(list)) {
                    list = [list];
                }
                var result = [];
                list.forEach(function(name) {
                    var idx = this.__find__(name);
                    if (idx < 0) {
                        if (ignoreInvalid) {
                            return;
                        }
                        throw new Error('Rules manager: invalid rule name ' + name);
                    }
                    this.__rules__[idx].enabled = true;
                    result.push(name);
                }, this);
                this.__cache__ = null;
                return result;
            };
            Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
                if (!Array.isArray(list)) {
                    list = [list];
                }
                this.__rules__.forEach(function(rule) {
                    rule.enabled = false;
                });
                this.enable(list, ignoreInvalid);
            };
            Ruler.prototype.disable = function(list, ignoreInvalid) {
                if (!Array.isArray(list)) {
                    list = [list];
                }
                var result = [];
                list.forEach(function(name) {
                    var idx = this.__find__(name);
                    if (idx < 0) {
                        if (ignoreInvalid) {
                            return;
                        }
                        throw new Error('Rules manager: invalid rule name ' + name);
                    }
                    this.__rules__[idx].enabled = false;
                    result.push(name);
                }, this);
                this.__cache__ = null;
                return result;
            };
            Ruler.prototype.getRules = function(chainName) {
                if (this.__cache__ === null) {
                    this.__compile__();
                }
                return this.__cache__[chainName] || [];
            };
            module.exports = Ruler;
        }, {}
    ],
    47: [
        function(require, module, exports) {
            'use strict';
            var isSpace = require('../common/utils').isSpace;
            module.exports = function blockquote(state, startLine, endLine, silent) {
                var nextLine, lastLineEmpty, oldTShift, oldSCount, oldBMarks, oldIndent, oldParentType, lines, initial, offset, ch, terminatorRules, token, i, l, terminate, pos = state.bMarks[startLine] + state.tShift[startLine],
                    max = state.eMarks[startLine];
                if (state.src.charCodeAt(pos++) !== 0x3E) {
                    return false;
                }
                if (silent) {
                    return true;
                }
                if (state.src.charCodeAt(pos) === 0x20) {
                    pos++;
                }
                oldIndent = state.blkIndent;
                state.blkIndent = 0;
                initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);
                oldBMarks = [state.bMarks[startLine]];
                state.bMarks[startLine] = pos;
                while (pos < max) {
                    ch = state.src.charCodeAt(pos);
                    if (isSpace(ch)) {
                        if (ch === 0x09) {
                            offset += 4 - offset % 4;
                        } else {
                            offset++;
                        }
                    } else {
                        break;
                    }
                    pos++;
                }
                lastLineEmpty = pos >= max;
                oldSCount = [state.sCount[startLine]];
                state.sCount[startLine] = offset - initial;
                oldTShift = [state.tShift[startLine]];
                state.tShift[startLine] = pos - state.bMarks[startLine];
                terminatorRules = state.md.block.ruler.getRules('blockquote');
                for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
                    if (state.sCount[nextLine] < oldIndent) {
                        break;
                    }
                    pos = state.bMarks[nextLine] + state.tShift[nextLine];
                    max = state.eMarks[nextLine];
                    if (pos >= max) {
                        break;
                    }
                    if (state.src.charCodeAt(pos++) === 0x3E) {
                        if (state.src.charCodeAt(pos) === 0x20) {
                            pos++;
                        }
                        initial = offset = state.sCount[nextLine] + pos - (state.bMarks[nextLine] + state.tShift[nextLine]);
                        oldBMarks.push(state.bMarks[nextLine]);
                        state.bMarks[nextLine] = pos;
                        while (pos < max) {
                            ch = state.src.charCodeAt(pos);
                            if (isSpace(ch)) {
                                if (ch === 0x09) {
                                    offset += 4 - offset % 4;
                                } else {
                                    offset++;
                                }
                            } else {
                                break;
                            }
                            pos++;
                        }
                        lastLineEmpty = pos >= max;
                        oldSCount.push(state.sCount[nextLine]);
                        state.sCount[nextLine] = offset - initial;
                        oldTShift.push(state.tShift[nextLine]);
                        state.tShift[nextLine] = pos - state.bMarks[nextLine];
                        continue;
                    }
                    if (lastLineEmpty) {
                        break;
                    }
                    terminate = false;
                    for (i = 0, l = terminatorRules.length; i < l; i++) {
                        if (terminatorRules[i](state, nextLine, endLine, true)) {
                            terminate = true;
                            break;
                        }
                    }
                    if (terminate) {
                        break;
                    }
                    oldBMarks.push(state.bMarks[nextLine]);
                    oldTShift.push(state.tShift[nextLine]);
                    oldSCount.push(state.sCount[nextLine]);
                    state.sCount[nextLine] = -1;
                }
                oldParentType = state.parentType;
                state.parentType = 'blockquote';
                token = state.push('blockquote_open', 'blockquote', 1);
                token.markup = '>';
                token.map = lines = [startLine, 0];
                state.md.block.tokenize(state, startLine, nextLine);
                token = state.push('blockquote_close', 'blockquote', -1);
                token.markup = '>';
                state.parentType = oldParentType;
                lines[1] = state.line;
                for (i = 0; i < oldTShift.length; i++) {
                    state.bMarks[i + startLine] = oldBMarks[i];
                    state.tShift[i + startLine] = oldTShift[i];
                    state.sCount[i + startLine] = oldSCount[i];
                }
                state.blkIndent = oldIndent;
                return true;
            };
        }, {
            "../common/utils": 33
        }
    ],
    48: [
        function(require, module, exports) {
            'use strict';
            module.exports = function code(state, startLine, endLine) {
                var nextLine, last, token;
                if (state.sCount[startLine] - state.blkIndent < 4) {
                    return false;
                }
                last = nextLine = startLine + 1;
                while (nextLine < endLine) {
                    if (state.isEmpty(nextLine)) {
                        nextLine++;
                        continue;
                    }
                    if (state.sCount[nextLine] - state.blkIndent >= 4) {
                        nextLine++;
                        last = nextLine;
                        continue;
                    }
                    break;
                }
                state.line = nextLine;
                token = state.push('code_block', 'code', 0);
                token.content = state.getLines(startLine, last, 4 + state.blkIndent, true);
                token.map = [startLine, state.line];
                return true;
            };
        }, {}
    ],
    49: [
        function(require, module, exports) {
            'use strict';
            module.exports = function fence(state, startLine, endLine, silent) {
                var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false,
                    pos = state.bMarks[startLine] + state.tShift[startLine],
                    max = state.eMarks[startLine];
                if (pos + 3 > max) {
                    return false;
                }
                marker = state.src.charCodeAt(pos);
                if (marker !== 0x7E && marker !== 0x60) {
                    return false;
                }
                mem = pos;
                pos = state.skipChars(pos, marker);
                len = pos - mem;
                if (len < 3) {
                    return false;
                }
                markup = state.src.slice(mem, pos);
                params = state.src.slice(pos, max);
                if (params.indexOf('`') >= 0) {
                    return false;
                }
                if (silent) {
                    return true;
                }
                nextLine = startLine;
                for (;;) {
                    nextLine++;
                    if (nextLine >= endLine) {
                        break;
                    }
                    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
                    max = state.eMarks[nextLine];
                    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
                        break;
                    }
                    if (state.src.charCodeAt(pos) !== marker) {
                        continue;
                    }
                    if (state.sCount[nextLine] - state.blkIndent >= 4) {
                        continue;
                    }
                    pos = state.skipChars(pos, marker);
                    if (pos - mem < len) {
                        continue;
                    }
                    pos = state.skipSpaces(pos);
                    if (pos < max) {
                        continue;
                    }
                    haveEndMarker = true;
                    break;
                }
                len = state.sCount[startLine];
                state.line = nextLine + (haveEndMarker ? 1 : 0);
                token = state.push('fence', 'code', 0);
                token.info = params;
                token.content = state.getLines(startLine + 1, nextLine, len, true);
                token.markup = markup;
                token.map = [startLine, state.line];
                return true;
            };
        }, {}
    ],
    50: [
        function(require, module, exports) {
            'use strict';
            var isSpace = require('../common/utils').isSpace;
            module.exports = function heading(state, startLine, endLine, silent) {
                var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine],
                    max = state.eMarks[startLine];
                ch = state.src.charCodeAt(pos);
                if (ch !== 0x23 || pos >= max) {
                    return false;
                }
                level = 1;
                ch = state.src.charCodeAt(++pos);
                while (ch === 0x23 && pos < max && level <= 6) {
                    level++;
                    ch = state.src.charCodeAt(++pos);
                }
                if (level > 6 || (pos < max && ch !== 0x20)) {
                    return false;
                }
                if (silent) {
                    return true;
                }
                max = state.skipSpacesBack(max, pos);
                tmp = state.skipCharsBack(max, 0x23, pos);
                if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
                    max = tmp;
                }
                state.line = startLine + 1;
                token = state.push('heading_open', 'h' + String(level), 1);
                token.markup = '########'.slice(0, level);
                token.map = [startLine, state.line];
                token = state.push('inline', '', 0);
                token.content = state.src.slice(pos, max).trim();
                token.map = [startLine, state.line];
                token.children = [];
                token = state.push('heading_close', 'h' + String(level), -1);
                token.markup = '########'.slice(0, level);
                return true;
            };
        }, {
            "../common/utils": 33
        }
    ],
    51: [
        function(require, module, exports) {
            'use strict';
            var isSpace = require('../common/utils').isSpace;
            module.exports = function hr(state, startLine, endLine, silent) {
                var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine],
                    max = state.eMarks[startLine];
                marker = state.src.charCodeAt(pos++);
                if (marker !== 0x2A && marker !== 0x2D && marker !== 0x5F) {
                    return false;
                }
                cnt = 1;
                while (pos < max) {
                    ch = state.src.charCodeAt(pos++);
                    if (ch !== marker && !isSpace(ch)) {
                        return false;
                    }
                    if (ch === marker) {
                        cnt++;
                    }
                }
                if (cnt < 3) {
                    return false;
                }
                if (silent) {
                    return true;
                }
                state.line = startLine + 1;
                token = state.push('hr', 'hr', 0);
                token.map = [startLine, state.line];
                token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
                return true;
            };
        }, {
            "../common/utils": 33
        }
    ],
    52: [
        function(require, module, exports) {
            'use strict';
            var block_names = require('../common/html_blocks');
            var HTML_OPEN_CLOSE_TAG_RE = require('../common/html_re').HTML_OPEN_CLOSE_TAG_RE;
            var HTML_SEQUENCES = [
                [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
                [/^<!--/, /-->/, true],
                [/^<\?/, /\?>/, true],
                [/^<![A-Z]/, />/, true],
                [/^<!\[CDATA\[/, /\]\]>/, true],
                [new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
                [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'), /^$/, false]
            ];
            module.exports = function html_block(state, startLine, endLine, silent) {
                var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine],
                    max = state.eMarks[startLine];
                if (!state.md.options.html) {
                    return false;
                }
                if (state.src.charCodeAt(pos) !== 0x3C) {
                    return false;
                }
                lineText = state.src.slice(pos, max);
                for (i = 0; i < HTML_SEQUENCES.length; i++) {
                    if (HTML_SEQUENCES[i][0].test(lineText)) {
                        break;
                    }
                }
                if (i === HTML_SEQUENCES.length) {
                    return false;
                }
                if (silent) {
                    return HTML_SEQUENCES[i][2];
                }
                nextLine = startLine + 1;
                if (!HTML_SEQUENCES[i][1].test(lineText)) {
                    for (; nextLine < endLine; nextLine++) {
                        if (state.sCount[nextLine] < state.blkIndent) {
                            break;
                        }
                        pos = state.bMarks[nextLine] + state.tShift[nextLine];
                        max = state.eMarks[nextLine];
                        lineText = state.src.slice(pos, max);
                        if (HTML_SEQUENCES[i][1].test(lineText)) {
                            if (lineText.length !== 0) {
                                nextLine++;
                            }
                            break;
                        }
                    }
                }
                state.line = nextLine;
                token = state.push('html_block', '', 0);
                token.map = [startLine, nextLine];
                token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
                return true;
            };
        }, {
            "../common/html_blocks": 30,
            "../common/html_re": 31
        }
    ],
    53: [
        function(require, module, exports) {
            'use strict';
            module.exports = function lheading(state, startLine, endLine) {
                var marker, pos, max, token, level, next = startLine + 1;
                if (next >= endLine) {
                    return false;
                }
                if (state.sCount[next] < state.blkIndent) {
                    return false;
                }
                if (state.sCount[next] - state.blkIndent > 3) {
                    return false;
                }
                pos = state.bMarks[next] + state.tShift[next];
                max = state.eMarks[next];
                if (pos >= max) {
                    return false;
                }
                marker = state.src.charCodeAt(pos);
                if (marker !== 0x2D && marker !== 0x3D) {
                    return false;
                }
                pos = state.skipChars(pos, marker);
                pos = state.skipSpaces(pos);
                if (pos < max) {
                    return false;
                }
                pos = state.bMarks[startLine] + state.tShift[startLine];
                state.line = next + 1;
                level = (marker === 0x3D ? 1 : 2);
                token = state.push('heading_open', 'h' + String(level), 1);
                token.markup = String.fromCharCode(marker);
                token.map = [startLine, state.line];
                token = state.push('inline', '', 0);
                token.content = state.src.slice(pos, state.eMarks[startLine]).trim();
                token.map = [startLine, state.line - 1];
                token.children = [];
                token = state.push('heading_close', 'h' + String(level), -1);
                token.markup = String.fromCharCode(marker);
                return true;
            };
        }, {}
    ],
    54: [
        function(require, module, exports) {
            'use strict';
            var isSpace = require('../common/utils').isSpace;

            function skipBulletListMarker(state, startLine) {
                var marker, pos, max, ch;
                pos = state.bMarks[startLine] + state.tShift[startLine];
                max = state.eMarks[startLine];
                marker = state.src.charCodeAt(pos++);
                if (marker !== 0x2A && marker !== 0x2D && marker !== 0x2B) {
                    return -1;
                }
                if (pos < max) {
                    ch = state.src.charCodeAt(pos);
                    if (!isSpace(ch)) {
                        return -1;
                    }
                }
                return pos;
            }

            function skipOrderedListMarker(state, startLine) {
                var ch, start = state.bMarks[startLine] + state.tShift[startLine],
                    pos = start,
                    max = state.eMarks[startLine];
                if (pos + 1 >= max) {
                    return -1;
                }
                ch = state.src.charCodeAt(pos++);
                if (ch < 0x30 || ch > 0x39) {
                    return -1;
                }
                for (;;) {
                    if (pos >= max) {
                        return -1;
                    }
                    ch = state.src.charCodeAt(pos++);
                    if (ch >= 0x30 && ch <= 0x39) {
                        if (pos - start >= 10) {
                            return -1;
                        }
                        continue;
                    }
                    if (ch === 0x29 || ch === 0x2e) {
                        break;
                    }
                    return -1;
                }
                if (pos < max) {
                    ch = state.src.charCodeAt(pos);
                    if (!isSpace(ch)) {
                        return -1;
                    }
                }
                return pos;
            }

            function markTightParagraphs(state, idx) {
                var i, l, level = state.level + 2;
                for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
                    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
                        state.tokens[i + 2].hidden = true;
                        state.tokens[i].hidden = true;
                        i += 2;
                    }
                }
            }
            module.exports = function list(state, startLine, endLine, silent) {
                var nextLine, initial, offset, indent, oldTShift, oldIndent, oldLIndent, oldTight, oldParentType, start, posAfterMarker, ch, pos, max, indentAfterMarker, markerValue, markerCharCode, isOrdered, contentStart, listTokIdx, prevEmptyEnd, listLines, itemLines, tight = true,
                    terminatorRules, token, i, l, terminate;
                if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
                    isOrdered = true;
                } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
                    isOrdered = false;
                } else {
                    return false;
                }
                markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
                if (silent) {
                    return true;
                }
                listTokIdx = state.tokens.length;
                if (isOrdered) {
                    start = state.bMarks[startLine] + state.tShift[startLine];
                    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
                    token = state.push('ordered_list_open', 'ol', 1);
                    if (markerValue !== 1) {
                        token.attrs = [
                            ['start', markerValue]
                        ];
                    }
                } else {
                    token = state.push('bullet_list_open', 'ul', 1);
                }
                token.map = listLines = [startLine, 0];
                token.markup = String.fromCharCode(markerCharCode);
                nextLine = startLine;
                prevEmptyEnd = false;
                terminatorRules = state.md.block.ruler.getRules('list');
                while (nextLine < endLine) {
                    pos = posAfterMarker;
                    max = state.eMarks[nextLine];
                    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
                    while (pos < max) {
                        ch = state.src.charCodeAt(pos);
                        if (isSpace(ch)) {
                            if (ch === 0x09) {
                                offset += 4 - offset % 4;
                            } else {
                                offset++;
                            }
                        } else {
                            break;
                        }
                        pos++;
                    }
                    contentStart = pos;
                    if (contentStart >= max) {
                        indentAfterMarker = 1;
                    } else {
                        indentAfterMarker = offset - initial;
                    }
                    if (indentAfterMarker > 4) {
                        indentAfterMarker = 1;
                    }
                    indent = initial + indentAfterMarker;
                    token = state.push('list_item_open', 'li', 1);
                    token.markup = String.fromCharCode(markerCharCode);
                    token.map = itemLines = [startLine, 0];
                    oldIndent = state.blkIndent;
                    oldTight = state.tight;
                    oldTShift = state.tShift[startLine];
                    oldLIndent = state.sCount[startLine];
                    oldParentType = state.parentType;
                    state.blkIndent = indent;
                    state.tight = true;
                    state.parentType = 'list';
                    state.tShift[startLine] = contentStart - state.bMarks[startLine];
                    state.sCount[startLine] = offset;
                    state.md.block.tokenize(state, startLine, endLine, true);
                    if (!state.tight || prevEmptyEnd) {
                        tight = false;
                    }
                    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);
                    state.blkIndent = oldIndent;
                    state.tShift[startLine] = oldTShift;
                    state.sCount[startLine] = oldLIndent;
                    state.tight = oldTight;
                    state.parentType = oldParentType;
                    token = state.push('list_item_close', 'li', -1);
                    token.markup = String.fromCharCode(markerCharCode);
                    nextLine = startLine = state.line;
                    itemLines[1] = nextLine;
                    contentStart = state.bMarks[startLine];
                    if (nextLine >= endLine) {
                        break;
                    }
                    if (state.isEmpty(nextLine)) {
                        break;
                    }
                    if (state.sCount[nextLine] < state.blkIndent) {
                        break;
                    }
                    terminate = false;
                    for (i = 0, l = terminatorRules.length; i < l; i++) {
                        if (terminatorRules[i](state, nextLine, endLine, true)) {
                            terminate = true;
                            break;
                        }
                    }
                    if (terminate) {
                        break;
                    }
                    if (isOrdered) {
                        posAfterMarker = skipOrderedListMarker(state, nextLine);
                        if (posAfterMarker < 0) {
                            break;
                        }
                    } else {
                        posAfterMarker = skipBulletListMarker(state, nextLine);
                        if (posAfterMarker < 0) {
                            break;
                        }
                    }
                    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
                        break;
                    }
                }
                if (isOrdered) {
                    token = state.push('ordered_list_close', 'ol', -1);
                } else {
                    token = state.push('bullet_list_close', 'ul', -1);
                }
                token.markup = String.fromCharCode(markerCharCode);
                listLines[1] = nextLine;
                state.line = nextLine;
                if (tight) {
                    markTightParagraphs(state, listTokIdx);
                }
                return true;
            };
        }, {
            "../common/utils": 33
        }
    ],
    55: [
        function(require, module, exports) {
            'use strict';
            module.exports = function paragraph(state, startLine) {
                var content, terminate, i, l, token, nextLine = startLine + 1,
                    terminatorRules = state.md.block.ruler.getRules('paragraph'),
                    endLine = state.lineMax;
                for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
                    if (state.sCount[nextLine] - state.blkIndent > 3) {
                        continue;
                    }
                    if (state.sCount[nextLine] < 0) {
                        continue;
                    }
                    terminate = false;
                    for (i = 0, l = terminatorRules.length; i < l; i++) {
                        if (terminatorRules[i](state, nextLine, endLine, true)) {
                            terminate = true;
                            break;
                        }
                    }
                    if (terminate) {
                        break;
                    }
                }
                content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
                state.line = nextLine;
                token = state.push('paragraph_open', 'p', 1);
                token.map = [startLine, state.line];
                token = state.push('inline', '', 0);
                token.content = content;
                token.map = [startLine, state.line];
                token.children = [];
                token = state.push('paragraph_close', 'p', -1);
                return true;
            };
        }, {}
    ],
    56: [
        function(require, module, exports) {
            'use strict';
            var parseLinkDestination = require('../helpers/parse_link_destination');
            var parseLinkTitle = require('../helpers/parse_link_title');
            var normalizeReference = require('../common/utils').normalizeReference;
            var isSpace = require('../common/utils').isSpace;
            module.exports = function reference(state, startLine, _endLine, silent) {
                var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, res, start, str, terminate, terminatorRules, title, lines = 0,
                    pos = state.bMarks[startLine] + state.tShift[startLine],
                    max = state.eMarks[startLine],
                    nextLine = startLine + 1;
                if (state.src.charCodeAt(pos) !== 0x5B) {
                    return false;
                }
                while (++pos < max) {
                    if (state.src.charCodeAt(pos) === 0x5D && state.src.charCodeAt(pos - 1) !== 0x5C) {
                        if (pos + 1 === max) {
                            return false;
                        }
                        if (state.src.charCodeAt(pos + 1) !== 0x3A) {
                            return false;
                        }
                        break;
                    }
                }
                endLine = state.lineMax;
                terminatorRules = state.md.block.ruler.getRules('reference');
                for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
                    if (state.sCount[nextLine] - state.blkIndent > 3) {
                        continue;
                    }
                    if (state.sCount[nextLine] < 0) {
                        continue;
                    }
                    terminate = false;
                    for (i = 0, l = terminatorRules.length; i < l; i++) {
                        if (terminatorRules[i](state, nextLine, endLine, true)) {
                            terminate = true;
                            break;
                        }
                    }
                    if (terminate) {
                        break;
                    }
                }
                str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
                max = str.length;
                for (pos = 1; pos < max; pos++) {
                    ch = str.charCodeAt(pos);
                    if (ch === 0x5B) {
                        return false;
                    } else if (ch === 0x5D) {
                        labelEnd = pos;
                        break;
                    } else if (ch === 0x0A) {
                        lines++;
                    } else if (ch === 0x5C) {
                        pos++;
                        if (pos < max && str.charCodeAt(pos) === 0x0A) {
                            lines++;
                        }
                    }
                }
                if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A) {
                    return false;
                }
                for (pos = labelEnd + 2; pos < max; pos++) {
                    ch = str.charCodeAt(pos);
                    if (ch === 0x0A) {
                        lines++;
                    } else if (isSpace(ch)) {} else {
                        break;
                    }
                }
                res = parseLinkDestination(str, pos, max);
                if (!res.ok) {
                    return false;
                }
                href = state.md.normalizeLink(res.str);
                if (!state.md.validateLink(href)) {
                    return false;
                }
                pos = res.pos;
                lines += res.lines;
                destEndPos = pos;
                destEndLineNo = lines;
                start = pos;
                for (; pos < max; pos++) {
                    ch = str.charCodeAt(pos);
                    if (ch === 0x0A) {
                        lines++;
                    } else if (isSpace(ch)) {} else {
                        break;
                    }
                }
                res = parseLinkTitle(str, pos, max);
                if (pos < max && start !== pos && res.ok) {
                    title = res.str;
                    pos = res.pos;
                    lines += res.lines;
                } else {
                    title = '';
                    pos = destEndPos;
                    lines = destEndLineNo;
                }
                while (pos < max) {
                    ch = str.charCodeAt(pos);
                    if (!isSpace(ch)) {
                        break;
                    }
                    pos++;
                }
                if (pos < max && str.charCodeAt(pos) !== 0x0A) {
                    if (title) {
                        title = '';
                        pos = destEndPos;
                        lines = destEndLineNo;
                        while (pos < max) {
                            ch = str.charCodeAt(pos);
                            if (!isSpace(ch)) {
                                break;
                            }
                            pos++;
                        }
                    }
                }
                if (pos < max && str.charCodeAt(pos) !== 0x0A) {
                    return false;
                }
                label = normalizeReference(str.slice(1, labelEnd));
                if (!label) {
                    return false;
                }
                if (silent) {
                    return true;
                }
                if (typeof state.env.references === 'undefined') {
                    state.env.references = {};
                }
                if (typeof state.env.references[label] === 'undefined') {
                    state.env.references[label] = {
                        title: title,
                        href: href
                    };
                }
                state.line = startLine + lines + 1;
                return true;
            };
        }, {
            "../common/utils": 33,
            "../helpers/parse_link_destination": 35,
            "../helpers/parse_link_title": 37
        }
    ],
    57: [
        function(require, module, exports) {
            'use strict';
            var Token = require('../token');
            var isSpace = require('../common/utils').isSpace;

            function StateBlock(src, md, env, tokens) {
                var ch, s, start, pos, len, indent, offset, indent_found;
                this.src = src;
                this.md = md;
                this.env = env;
                this.tokens = tokens;
                this.bMarks = [];
                this.eMarks = [];
                this.tShift = [];
                this.sCount = [];
                this.blkIndent = 0;
                this.line = 0;
                this.lineMax = 0;
                this.tight = false;
                this.parentType = 'root';
                this.ddIndent = -1;
                this.level = 0;
                this.result = '';
                s = this.src;
                indent_found = false;
                for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
                    ch = s.charCodeAt(pos);
                    if (!indent_found) {
                        if (isSpace(ch)) {
                            indent++;
                            if (ch === 0x09) {
                                offset += 4 - offset % 4;
                            } else {
                                offset++;
                            }
                            continue;
                        } else {
                            indent_found = true;
                        }
                    }
                    if (ch === 0x0A || pos === len - 1) {
                        if (ch !== 0x0A) {
                            pos++;
                        }
                        this.bMarks.push(start);
                        this.eMarks.push(pos);
                        this.tShift.push(indent);
                        this.sCount.push(offset);
                        indent_found = false;
                        indent = 0;
                        offset = 0;
                        start = pos + 1;
                    }
                }
                this.bMarks.push(s.length);
                this.eMarks.push(s.length);
                this.tShift.push(0);
                this.sCount.push(0);
                this.lineMax = this.bMarks.length - 1;
            }
            StateBlock.prototype.push = function(type, tag, nesting) {
                var token = new Token(type, tag, nesting);
                token.block = true;
                if (nesting < 0) {
                    this.level--;
                }
                token.level = this.level;
                if (nesting > 0) {
                    this.level++;
                }
                this.tokens.push(token);
                return token;
            };
            StateBlock.prototype.isEmpty = function isEmpty(line) {
                return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
            };
            StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
                for (var max = this.lineMax; from < max; from++) {
                    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
                        break;
                    }
                }
                return from;
            };
            StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
                var ch;
                for (var max = this.src.length; pos < max; pos++) {
                    ch = this.src.charCodeAt(pos);
                    if (!isSpace(ch)) {
                        break;
                    }
                }
                return pos;
            };
            StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
                if (pos <= min) {
                    return pos;
                }
                while (pos > min) {
                    if (!isSpace(this.src.charCodeAt(--pos))) {
                        return pos + 1;
                    }
                }
                return pos;
            };
            StateBlock.prototype.skipChars = function skipChars(pos, code) {
                for (var max = this.src.length; pos < max; pos++) {
                    if (this.src.charCodeAt(pos) !== code) {
                        break;
                    }
                }
                return pos;
            };
            StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
                if (pos <= min) {
                    return pos;
                }
                while (pos > min) {
                    if (code !== this.src.charCodeAt(--pos)) {
                        return pos + 1;
                    }
                }
                return pos;
            };
            StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
                var i, lineIndent, ch, first, last, queue, lineStart, line = begin;
                if (begin >= end) {
                    return '';
                }
                queue = new Array(end - begin);
                for (i = 0; line < end; line++, i++) {
                    lineIndent = 0;
                    lineStart = first = this.bMarks[line];
                    if (line + 1 < end || keepLastLF) {
                        last = this.eMarks[line] + 1;
                    } else {
                        last = this.eMarks[line];
                    }
                    while (first < last && lineIndent < indent) {
                        ch = this.src.charCodeAt(first);
                        if (isSpace(ch)) {
                            if (ch === 0x09) {
                                lineIndent += 4 - lineIndent % 4;
                            } else {
                                lineIndent++;
                            }
                        } else if (first - lineStart < this.tShift[line]) {
                            lineIndent++;
                        } else {
                            break;
                        }
                        first++;
                    }
                    queue[i] = this.src.slice(first, last);
                }
                return queue.join('');
            };
            StateBlock.prototype.Token = Token;
            module.exports = StateBlock;
        }, {
            "../common/utils": 33,
            "../token": 80
        }
    ],
    58: [
        function(require, module, exports) {
            'use strict';

            function getLine(state, line) {
                var pos = state.bMarks[line] + state.blkIndent,
                    max = state.eMarks[line];
                return state.src.substr(pos, max - pos);
            }

            function escapedSplit(str) {
                var result = [],
                    pos = 0,
                    max = str.length,
                    ch, escapes = 0,
                    lastPos = 0,
                    backTicked = false,
                    lastBackTick = 0;
                ch = str.charCodeAt(pos);
                while (pos < max) {
                    if (ch === 0x60 && (escapes % 2 === 0)) {
                        backTicked = !backTicked;
                        lastBackTick = pos;
                    } else if (ch === 0x7c && (escapes % 2 === 0) && !backTicked) {
                        result.push(str.substring(lastPos, pos));
                        lastPos = pos + 1;
                    } else if (ch === 0x5c) {
                        escapes++;
                    } else {
                        escapes = 0;
                    }
                    pos++;
                    if (pos === max && backTicked) {
                        backTicked = false;
                        pos = lastBackTick + 1;
                    }
                    ch = str.charCodeAt(pos);
                }
                result.push(str.substring(lastPos));
                return result;
            }
            module.exports = function table(state, startLine, endLine, silent) {
                var ch, lineText, pos, i, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines;
                if (startLine + 2 > endLine) {
                    return false;
                }
                nextLine = startLine + 1;
                if (state.sCount[nextLine] < state.blkIndent) {
                    return false;
                }
                pos = state.bMarks[nextLine] + state.tShift[nextLine];
                if (pos >= state.eMarks[nextLine]) {
                    return false;
                }
                ch = state.src.charCodeAt(pos);
                if (ch !== 0x7C && ch !== 0x2D && ch !== 0x3A) {
                    return false;
                }
                lineText = getLine(state, startLine + 1);
                if (!/^[-:| ]+$/.test(lineText)) {
                    return false;
                }
                columns = lineText.split('|');
                aligns = [];
                for (i = 0; i < columns.length; i++) {
                    t = columns[i].trim();
                    if (!t) {
                        if (i === 0 || i === columns.length - 1) {
                            continue;
                        } else {
                            return false;
                        }
                    }
                    if (!/^:?-+:?$/.test(t)) {
                        return false;
                    }
                    if (t.charCodeAt(t.length - 1) === 0x3A) {
                        aligns.push(t.charCodeAt(0) === 0x3A ? 'center' : 'right');
                    } else if (t.charCodeAt(0) === 0x3A) {
                        aligns.push('left');
                    } else {
                        aligns.push('');
                    }
                }
                lineText = getLine(state, startLine).trim();
                if (lineText.indexOf('|') === -1) {
                    return false;
                }
                columns = escapedSplit(lineText.replace(/^\||\|$/g, ''));
                columnCount = columns.length;
                if (columnCount > aligns.length) {
                    return false;
                }
                if (silent) {
                    return true;
                }
                token = state.push('table_open', 'table', 1);
                token.map = tableLines = [startLine, 0];
                token = state.push('thead_open', 'thead', 1);
                token.map = [startLine, startLine + 1];
                token = state.push('tr_open', 'tr', 1);
                token.map = [startLine, startLine + 1];
                for (i = 0; i < columns.length; i++) {
                    token = state.push('th_open', 'th', 1);
                    token.map = [startLine, startLine + 1];
                    if (aligns[i]) {
                        token.attrs = [
                            ['style', 'text-align:' + aligns[i]]
                        ];
                    }
                    token = state.push('inline', '', 0);
                    token.content = columns[i].trim();
                    token.map = [startLine, startLine + 1];
                    token.children = [];
                    token = state.push('th_close', 'th', -1);
                }
                token = state.push('tr_close', 'tr', -1);
                token = state.push('thead_close', 'thead', -1);
                token = state.push('tbody_open', 'tbody', 1);
                token.map = tbodyLines = [startLine + 2, 0];
                for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
                    if (state.sCount[nextLine] < state.blkIndent) {
                        break;
                    }
                    lineText = getLine(state, nextLine).trim();
                    if (lineText.indexOf('|') === -1) {
                        break;
                    }
                    columns = escapedSplit(lineText.replace(/^\||\|$/g, ''));
                    token = state.push('tr_open', 'tr', 1);
                    for (i = 0; i < columnCount; i++) {
                        token = state.push('td_open', 'td', 1);
                        if (aligns[i]) {
                            token.attrs = [
                                ['style', 'text-align:' + aligns[i]]
                            ];
                        }
                        token = state.push('inline', '', 0);
                        token.content = columns[i] ? columns[i].trim() : '';
                        token.children = [];
                        token = state.push('td_close', 'td', -1);
                    }
                    token = state.push('tr_close', 'tr', -1);
                }
                token = state.push('tbody_close', 'tbody', -1);
                token = state.push('table_close', 'table', -1);
                tableLines[1] = tbodyLines[1] = nextLine;
                state.line = nextLine;
                return true;
            };
        }, {}
    ],
    59: [
        function(require, module, exports) {
            'use strict';
            module.exports = function block(state) {
                var token;
                if (state.inlineMode) {
                    token = new state.Token('inline', '', 0);
                    token.content = state.src;
                    token.map = [0, 1];
                    token.children = [];
                    state.tokens.push(token);
                } else {
                    state.md.block.parse(state.src, state.md, state.env, state.tokens);
                }
            };
        }, {}
    ],
    60: [
        function(require, module, exports) {
            'use strict';
            module.exports = function inline(state) {
                var tokens = state.tokens,
                    tok, i, l;
                for (i = 0, l = tokens.length; i < l; i++) {
                    tok = tokens[i];
                    if (tok.type === 'inline') {
                        state.md.inline.parse(tok.content, state.md, state.env, tok.children);
                    }
                }
            };
        }, {}
    ],
    61: [
        function(require, module, exports) {
            'use strict';
            var arrayReplaceAt = require('../common/utils').arrayReplaceAt;

            function isLinkOpen(str) {
                return /^<a[>\s]/i.test(str);
            }

            function isLinkClose(str) {
                return /^<\/a\s*>/i.test(str);
            }
            module.exports = function linkify(state) {
                var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens,
                    links;
                if (!state.md.options.linkify) {
                    return;
                }
                for (j = 0, l = blockTokens.length; j < l; j++) {
                    if (blockTokens[j].type !== 'inline' || !state.md.linkify.pretest(blockTokens[j].content)) {
                        continue;
                    }
                    tokens = blockTokens[j].children;
                    htmlLinkLevel = 0;
                    for (i = tokens.length - 1; i >= 0; i--) {
                        currentToken = tokens[i];
                        if (currentToken.type === 'link_close') {
                            i--;
                            while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
                                i--;
                            }
                            continue;
                        }
                        if (currentToken.type === 'html_inline') {
                            if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
                                htmlLinkLevel--;
                            }
                            if (isLinkClose(currentToken.content)) {
                                htmlLinkLevel++;
                            }
                        }
                        if (htmlLinkLevel > 0) {
                            continue;
                        }
                        if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {
                            text = currentToken.content;
                            links = state.md.linkify.match(text);
                            nodes = [];
                            level = currentToken.level;
                            lastPos = 0;
                            for (ln = 0; ln < links.length; ln++) {
                                url = links[ln].url;
                                fullUrl = state.md.normalizeLink(url);
                                if (!state.md.validateLink(fullUrl)) {
                                    continue;
                                }
                                urlText = links[ln].text;
                                if (!links[ln].schema) {
                                    urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
                                } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
                                    urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
                                } else {
                                    urlText = state.md.normalizeLinkText(urlText);
                                }
                                pos = links[ln].index;
                                if (pos > lastPos) {
                                    token = new state.Token('text', '', 0);
                                    token.content = text.slice(lastPos, pos);
                                    token.level = level;
                                    nodes.push(token);
                                }
                                token = new state.Token('link_open', 'a', 1);
                                token.attrs = [
                                    ['href', fullUrl]
                                ];
                                token.level = level++;
                                token.markup = 'linkify';
                                token.info = 'auto';
                                nodes.push(token);
                                token = new state.Token('text', '', 0);
                                token.content = urlText;
                                token.level = level;
                                nodes.push(token);
                                token = new state.Token('link_close', 'a', -1);
                                token.level = --level;
                                token.markup = 'linkify';
                                token.info = 'auto';
                                nodes.push(token);
                                lastPos = links[ln].lastIndex;
                            }
                            if (lastPos < text.length) {
                                token = new state.Token('text', '', 0);
                                token.content = text.slice(lastPos);
                                token.level = level;
                                nodes.push(token);
                            }
                            blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
                        }
                    }
                }
            };
        }, {
            "../common/utils": 33
        }
    ],
    62: [
        function(require, module, exports) {
            'use strict';
            var NEWLINES_RE = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
            var NULL_RE = /\u0000/g;
            module.exports = function inline(state) {
                var str;
                str = state.src.replace(NEWLINES_RE, '\n');
                str = str.replace(NULL_RE, '\uFFFD');
                state.src = str;
            };
        }, {}
    ],
    63: [
        function(require, module, exports) {
            'use strict';
            var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
            var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
            var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
            var SCOPED_ABBR = {
                'c': '©',
                'r': '®',
                'p': '§',
                'tm': '™'
            };

            function replaceFn(match, name) {
                return SCOPED_ABBR[name.toLowerCase()];
            }

            function replace_scoped(inlineTokens) {
                var i, token;
                for (i = inlineTokens.length - 1; i >= 0; i--) {
                    token = inlineTokens[i];
                    if (token.type === 'text') {
                        token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
                    }
                }
            }

            function replace_rare(inlineTokens) {
                var i, token;
                for (i = inlineTokens.length - 1; i >= 0; i--) {
                    token = inlineTokens[i];
                    if (token.type === 'text') {
                        if (RARE_RE.test(token.content)) {
                            token.content = token.content.replace(/\+-/g, '±').replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..').replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',').replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2').replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2').replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
                        }
                    }
                }
            }
            module.exports = function replace(state) {
                var blkIdx;
                if (!state.md.options.typographer) {
                    return;
                }
                for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
                    if (state.tokens[blkIdx].type !== 'inline') {
                        continue;
                    }
                    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
                        replace_scoped(state.tokens[blkIdx].children);
                    }
                    if (RARE_RE.test(state.tokens[blkIdx].content)) {
                        replace_rare(state.tokens[blkIdx].children);
                    }
                }
            };
        }, {}
    ],
    64: [
        function(require, module, exports) {
            'use strict';
            var isWhiteSpace = require('../common/utils').isWhiteSpace;
            var isPunctChar = require('../common/utils').isPunctChar;
            var isMdAsciiPunct = require('../common/utils').isMdAsciiPunct;
            var QUOTE_TEST_RE = /['"]/;
            var QUOTE_RE = /['"]/g;
            var APOSTROPHE = '\u2019';

            function replaceAt(str, index, ch) {
                return str.substr(0, index) + ch + str.substr(index + 1);
            }

            function process_inlines(tokens, state) {
                var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
                stack = [];
                for (i = 0; i < tokens.length; i++) {
                    token = tokens[i];
                    thisLevel = tokens[i].level;
                    for (j = stack.length - 1; j >= 0; j--) {
                        if (stack[j].level <= thisLevel) {
                            break;
                        }
                    }
                    stack.length = j + 1;
                    if (token.type !== 'text') {
                        continue;
                    }
                    text = token.content;
                    pos = 0;
                    max = text.length;
                    OUTER: while (pos < max) {
                        QUOTE_RE.lastIndex = pos;
                        t = QUOTE_RE.exec(text);
                        if (!t) {
                            break;
                        }
                        canOpen = canClose = true;
                        pos = t.index + 1;
                        isSingle = (t[0] === "'");
                        lastChar = 0x20;
                        if (t.index - 1 >= 0) {
                            lastChar = text.charCodeAt(t.index - 1);
                        } else {
                            for (j = i - 1; j >= 0; j--) {
                                if (tokens[j].type !== 'text') {
                                    continue;
                                }
                                lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                                break;
                            }
                        }
                        nextChar = 0x20;
                        if (pos < max) {
                            nextChar = text.charCodeAt(pos);
                        } else {
                            for (j = i + 1; j < tokens.length; j++) {
                                if (tokens[j].type !== 'text') {
                                    continue;
                                }
                                nextChar = tokens[j].content.charCodeAt(0);
                                break;
                            }
                        }
                        isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
                        isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
                        isLastWhiteSpace = isWhiteSpace(lastChar);
                        isNextWhiteSpace = isWhiteSpace(nextChar);
                        if (isNextWhiteSpace) {
                            canOpen = false;
                        } else if (isNextPunctChar) {
                            if (!(isLastWhiteSpace || isLastPunctChar)) {
                                canOpen = false;
                            }
                        }
                        if (isLastWhiteSpace) {
                            canClose = false;
                        } else if (isLastPunctChar) {
                            if (!(isNextWhiteSpace || isNextPunctChar)) {
                                canClose = false;
                            }
                        }
                        if (nextChar === 0x22 && t[0] === '"') {
                            if (lastChar >= 0x30 && lastChar <= 0x39) {
                                canClose = canOpen = false;
                            }
                        }
                        if (canOpen && canClose) {
                            canOpen = false;
                            canClose = isNextPunctChar;
                        }
                        if (!canOpen && !canClose) {
                            if (isSingle) {
                                token.content = replaceAt(token.content, t.index, APOSTROPHE);
                            }
                            continue;
                        }
                        if (canClose) {
                            for (j = stack.length - 1; j >= 0; j--) {
                                item = stack[j];
                                if (stack[j].level < thisLevel) {
                                    break;
                                }
                                if (item.single === isSingle && stack[j].level === thisLevel) {
                                    item = stack[j];
                                    if (isSingle) {
                                        openQuote = state.md.options.quotes[2];
                                        closeQuote = state.md.options.quotes[3];
                                    } else {
                                        openQuote = state.md.options.quotes[0];
                                        closeQuote = state.md.options.quotes[1];
                                    }
                                    token.content = replaceAt(token.content, t.index, closeQuote);
                                    tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
                                    pos += closeQuote.length - 1;
                                    if (item.token === i) {
                                        pos += openQuote.length - 1;
                                    }
                                    text = token.content;
                                    max = text.length;
                                    stack.length = j;
                                    continue OUTER;
                                }
                            }
                        }
                        if (canOpen) {
                            stack.push({
                                token: i,
                                pos: t.index,
                                single: isSingle,
                                level: thisLevel
                            });
                        } else if (canClose && isSingle) {
                            token.content = replaceAt(token.content, t.index, APOSTROPHE);
                        }
                    }
                }
            }
            module.exports = function smartquotes(state) {
                var blkIdx;
                if (!state.md.options.typographer) {
                    return;
                }
                for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
                    if (state.tokens[blkIdx].type !== 'inline' || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
                        continue;
                    }
                    process_inlines(state.tokens[blkIdx].children, state);
                }
            };
        }, {
            "../common/utils": 33
        }
    ],
    65: [
        function(require, module, exports) {
            'use strict';
            var Token = require('../token');

            function StateCore(src, md, env) {
                this.src = src;
                this.env = env;
                this.tokens = [];
                this.inlineMode = false;
                this.md = md;
            }
            StateCore.prototype.Token = Token;
            module.exports = StateCore;
        }, {
            "../token": 80
        }
    ],
    66: [
        function(require, module, exports) {
            'use strict';
            var url_schemas = require('../common/url_schemas');
            var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
            var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
            module.exports = function autolink(state, silent) {
                var tail, linkMatch, emailMatch, url, fullUrl, token, pos = state.pos;
                if (state.src.charCodeAt(pos) !== 0x3C) {
                    return false;
                }
                tail = state.src.slice(pos);
                if (tail.indexOf('>') < 0) {
                    return false;
                }
                if (AUTOLINK_RE.test(tail)) {
                    linkMatch = tail.match(AUTOLINK_RE);
                    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) {
                        return false;
                    }
                    url = linkMatch[0].slice(1, -1);
                    fullUrl = state.md.normalizeLink(url);
                    if (!state.md.validateLink(fullUrl)) {
                        return false;
                    }
                    if (!silent) {
                        token = state.push('link_open', 'a', 1);
                        token.attrs = [
                            ['href', fullUrl]
                        ];
                        token.markup = 'autolink';
                        token.info = 'auto';
                        token = state.push('text', '', 0);
                        token.content = state.md.normalizeLinkText(url);
                        token = state.push('link_close', 'a', -1);
                        token.markup = 'autolink';
                        token.info = 'auto';
                    }
                    state.pos += linkMatch[0].length;
                    return true;
                }
                if (EMAIL_RE.test(tail)) {
                    emailMatch = tail.match(EMAIL_RE);
                    url = emailMatch[0].slice(1, -1);
                    fullUrl = state.md.normalizeLink('mailto:' + url);
                    if (!state.md.validateLink(fullUrl)) {
                        return false;
                    }
                    if (!silent) {
                        token = state.push('link_open', 'a', 1);
                        token.attrs = [
                            ['href', fullUrl]
                        ];
                        token.markup = 'autolink';
                        token.info = 'auto';
                        token = state.push('text', '', 0);
                        token.content = state.md.normalizeLinkText(url);
                        token = state.push('link_close', 'a', -1);
                        token.markup = 'autolink';
                        token.info = 'auto';
                    }
                    state.pos += emailMatch[0].length;
                    return true;
                }
                return false;
            };
        }, {
            "../common/url_schemas": 32
        }
    ],
    67: [
        function(require, module, exports) {
            'use strict';
            module.exports = function backtick(state, silent) {
                var start, max, marker, matchStart, matchEnd, token, pos = state.pos,
                    ch = state.src.charCodeAt(pos);
                if (ch !== 0x60) {
                    return false;
                }
                start = pos;
                pos++;
                max = state.posMax;
                while (pos < max && state.src.charCodeAt(pos) === 0x60) {
                    pos++;
                }
                marker = state.src.slice(start, pos);
                matchStart = matchEnd = pos;
                while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
                    matchEnd = matchStart + 1;
                    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60) {
                        matchEnd++;
                    }
                    if (matchEnd - matchStart === marker.length) {
                        if (!silent) {
                            token = state.push('code_inline', 'code', 0);
                            token.markup = marker;
                            token.content = state.src.slice(pos, matchStart).replace(/[ \n]+/g, ' ').trim();
                        }
                        state.pos = matchEnd;
                        return true;
                    }
                }
                if (!silent) {
                    state.pending += marker;
                }
                state.pos += marker.length;
                return true;
            };
        }, {}
    ],
    68: [
        function(require, module, exports) {
            'use strict';
            module.exports = function link_pairs(state) {
                var i, j, lastDelim, currDelim, delimiters = state.delimiters,
                    max = state.delimiters.length;
                for (i = 0; i < max; i++) {
                    lastDelim = delimiters[i];
                    if (!lastDelim.close) {
                        continue;
                    }
                    j = i - lastDelim.jump - 1;
                    while (j >= 0) {
                        currDelim = delimiters[j];
                        if (currDelim.open && currDelim.marker === lastDelim.marker && currDelim.end < 0 && currDelim.level === lastDelim.level) {
                            lastDelim.jump = i - j;
                            lastDelim.open = false;
                            currDelim.end = i;
                            currDelim.jump = 0;
                            break;
                        }
                        j -= currDelim.jump + 1;
                    }
                }
            };
        }, {}
    ],
    69: [
        function(require, module, exports) {
            'use strict';
            module.exports.tokenize = function emphasis(state, silent) {
                var i, scanned, token, start = state.pos,
                    marker = state.src.charCodeAt(start);
                if (silent) {
                    return false;
                }
                if (marker !== 0x5F && marker !== 0x2A) {
                    return false;
                }
                scanned = state.scanDelims(state.pos, marker === 0x2A);
                for (i = 0; i < scanned.length; i++) {
                    token = state.push('text', '', 0);
                    token.content = String.fromCharCode(marker);
                    state.delimiters.push({
                        marker: marker,
                        jump: i,
                        token: state.tokens.length - 1,
                        level: state.level,
                        end: -1,
                        open: scanned.can_open,
                        close: scanned.can_close
                    });
                }
                state.pos += scanned.length;
                return true;
            };
            module.exports.postProcess = function emphasis(state) {
                var i, startDelim, endDelim, token, ch, isStrong, delimiters = state.delimiters,
                    max = state.delimiters.length;
                for (i = 0; i < max; i++) {
                    startDelim = delimiters[i];
                    if (startDelim.marker !== 0x5F && startDelim.marker !== 0x2A) {
                        continue;
                    }
                    if (startDelim.end === -1) {
                        continue;
                    }
                    endDelim = delimiters[startDelim.end];
                    isStrong = i + 1 < max && delimiters[i + 1].end === startDelim.end - 1 && delimiters[i + 1].token === startDelim.token + 1 && delimiters[startDelim.end - 1].token === endDelim.token - 1 && delimiters[i + 1].marker === startDelim.marker;
                    ch = String.fromCharCode(startDelim.marker);
                    token = state.tokens[startDelim.token];
                    token.type = isStrong ? 'strong_open' : 'em_open';
                    token.tag = isStrong ? 'strong' : 'em';
                    token.nesting = 1;
                    token.markup = isStrong ? ch + ch : ch;
                    token.content = '';
                    token = state.tokens[endDelim.token];
                    token.type = isStrong ? 'strong_close' : 'em_close';
                    token.tag = isStrong ? 'strong' : 'em';
                    token.nesting = -1;
                    token.markup = isStrong ? ch + ch : ch;
                    token.content = '';
                    if (isStrong) {
                        state.tokens[delimiters[i + 1].token].content = '';
                        state.tokens[delimiters[startDelim.end - 1].token].content = '';
                        i++;
                    }
                }
            };
        }, {}
    ],
    70: [
        function(require, module, exports) {
            'use strict';
            var entities = require('../common/entities');
            var has = require('../common/utils').has;
            var isValidEntityCode = require('../common/utils').isValidEntityCode;
            var fromCodePoint = require('../common/utils').fromCodePoint;
            var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
            var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
            module.exports = function entity(state, silent) {
                var ch, code, match, pos = state.pos,
                    max = state.posMax;
                if (state.src.charCodeAt(pos) !== 0x26) {
                    return false;
                }
                if (pos + 1 < max) {
                    ch = state.src.charCodeAt(pos + 1);
                    if (ch === 0x23) {
                        match = state.src.slice(pos).match(DIGITAL_RE);
                        if (match) {
                            if (!silent) {
                                code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
                                state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
                            }
                            state.pos += match[0].length;
                            return true;
                        }
                    } else {
                        match = state.src.slice(pos).match(NAMED_RE);
                        if (match) {
                            if (has(entities, match[1])) {
                                if (!silent) {
                                    state.pending += entities[match[1]];
                                }
                                state.pos += match[0].length;
                                return true;
                            }
                        }
                    }
                }
                if (!silent) {
                    state.pending += '&';
                }
                state.pos++;
                return true;
            };
        }, {
            "../common/entities": 29,
            "../common/utils": 33
        }
    ],
    71: [
        function(require, module, exports) {
            'use strict';
            var isSpace = require('../common/utils').isSpace;
            var ESCAPED = [];
            for (var i = 0; i < 256; i++) {
                ESCAPED.push(0);
            }
            '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function(ch) {
                ESCAPED[ch.charCodeAt(0)] = 1;
            });
            module.exports = function escape(state, silent) {
                var ch, pos = state.pos,
                    max = state.posMax;
                if (state.src.charCodeAt(pos) !== 0x5C) {
                    return false;
                }
                pos++;
                if (pos < max) {
                    ch = state.src.charCodeAt(pos);
                    if (ch < 256 && ESCAPED[ch] !== 0) {
                        if (!silent) {
                            state.pending += state.src[pos];
                        }
                        state.pos += 2;
                        return true;
                    }
                    if (ch === 0x0A) {
                        if (!silent) {
                            state.push('hardbreak', 'br', 0);
                        }
                        pos++;
                        while (pos < max) {
                            ch = state.src.charCodeAt(pos);
                            if (!isSpace(ch)) {
                                break;
                            }
                            pos++;
                        }
                        state.pos = pos;
                        return true;
                    }
                }
                if (!silent) {
                    state.pending += '\\';
                }
                state.pos++;
                return true;
            };
        }, {
            "../common/utils": 33
        }
    ],
    72: [
        function(require, module, exports) {
            'use strict';
            var HTML_TAG_RE = require('../common/html_re').HTML_TAG_RE;

            function isLetter(ch) {
                var lc = ch | 0x20;
                return (lc >= 0x61) && (lc <= 0x7a);
            }
            module.exports = function html_inline(state, silent) {
                var ch, match, max, token, pos = state.pos;
                if (!state.md.options.html) {
                    return false;
                }
                max = state.posMax;
                if (state.src.charCodeAt(pos) !== 0x3C || pos + 2 >= max) {
                    return false;
                }
                ch = state.src.charCodeAt(pos + 1);
                if (ch !== 0x21 && ch !== 0x3F && ch !== 0x2F && !isLetter(ch)) {
                    return false;
                }
                match = state.src.slice(pos).match(HTML_TAG_RE);
                if (!match) {
                    return false;
                }
                if (!silent) {
                    token = state.push('html_inline', '', 0);
                    token.content = state.src.slice(pos, pos + match[0].length);
                }
                state.pos += match[0].length;
                return true;
            };
        }, {
            "../common/html_re": 31
        }
    ],
    73: [
        function(require, module, exports) {
            'use strict';
            var parseLinkLabel = require('../helpers/parse_link_label');
            var parseLinkDestination = require('../helpers/parse_link_destination');
            var parseLinkTitle = require('../helpers/parse_link_title');
            var normalizeReference = require('../common/utils').normalizeReference;
            var isSpace = require('../common/utils').isSpace;
            module.exports = function image(state, silent) {
                var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = '',
                    oldPos = state.pos,
                    max = state.posMax;
                if (state.src.charCodeAt(state.pos) !== 0x21) {
                    return false;
                }
                if (state.src.charCodeAt(state.pos + 1) !== 0x5B) {
                    return false;
                }
                labelStart = state.pos + 2;
                labelEnd = parseLinkLabel(state, state.pos + 1, false);
                if (labelEnd < 0) {
                    return false;
                }
                pos = labelEnd + 1;
                if (pos < max && state.src.charCodeAt(pos) === 0x28) {
                    pos++;
                    for (; pos < max; pos++) {
                        code = state.src.charCodeAt(pos);
                        if (!isSpace(code) && code !== 0x0A) {
                            break;
                        }
                    }
                    if (pos >= max) {
                        return false;
                    }
                    start = pos;
                    res = parseLinkDestination(state.src, pos, state.posMax);
                    if (res.ok) {
                        href = state.md.normalizeLink(res.str);
                        if (state.md.validateLink(href)) {
                            pos = res.pos;
                        } else {
                            href = '';
                        }
                    }
                    start = pos;
                    for (; pos < max; pos++) {
                        code = state.src.charCodeAt(pos);
                        if (!isSpace(code) && code !== 0x0A) {
                            break;
                        }
                    }
                    res = parseLinkTitle(state.src, pos, state.posMax);
                    if (pos < max && start !== pos && res.ok) {
                        title = res.str;
                        pos = res.pos;
                        for (; pos < max; pos++) {
                            code = state.src.charCodeAt(pos);
                            if (!isSpace(code) && code !== 0x0A) {
                                break;
                            }
                        }
                    } else {
                        title = '';
                    }
                    if (pos >= max || state.src.charCodeAt(pos) !== 0x29) {
                        state.pos = oldPos;
                        return false;
                    }
                    pos++;
                } else {
                    if (typeof state.env.references === 'undefined') {
                        return false;
                    }
                    for (; pos < max; pos++) {
                        code = state.src.charCodeAt(pos);
                        if (!isSpace(code) && code !== 0x0A) {
                            break;
                        }
                    }
                    if (pos < max && state.src.charCodeAt(pos) === 0x5B) {
                        start = pos + 1;
                        pos = parseLinkLabel(state, pos);
                        if (pos >= 0) {
                            label = state.src.slice(start, pos++);
                        } else {
                            pos = labelEnd + 1;
                        }
                    } else {
                        pos = labelEnd + 1;
                    }
                    if (!label) {
                        label = state.src.slice(labelStart, labelEnd);
                    }
                    ref = state.env.references[normalizeReference(label)];
                    if (!ref) {
                        state.pos = oldPos;
                        return false;
                    }
                    href = ref.href;
                    title = ref.title;
                }
                if (!silent) {
                    content = state.src.slice(labelStart, labelEnd);
                    state.md.inline.parse(content, state.md, state.env, tokens = []);
                    token = state.push('image', 'img', 0);
                    token.attrs = attrs = [
                        ['src', href],
                        ['alt', '']
                    ];
                    token.children = tokens;
                    token.content = content;
                    if (title) {
                        attrs.push(['title', title]);
                    }
                }
                state.pos = pos;
                state.posMax = max;
                return true;
            };
        }, {
            "../common/utils": 33,
            "../helpers/parse_link_destination": 35,
            "../helpers/parse_link_label": 36,
            "../helpers/parse_link_title": 37
        }
    ],
    74: [
        function(require, module, exports) {
            'use strict';
            var parseLinkLabel = require('../helpers/parse_link_label');
            var parseLinkDestination = require('../helpers/parse_link_destination');
            var parseLinkTitle = require('../helpers/parse_link_title');
            var normalizeReference = require('../common/utils').normalizeReference;
            var isSpace = require('../common/utils').isSpace;
            module.exports = function link(state, silent) {
                var attrs, code, label, labelEnd, labelStart, pos, res, ref, title, token, href = '',
                    oldPos = state.pos,
                    max = state.posMax,
                    start = state.pos;
                if (state.src.charCodeAt(state.pos) !== 0x5B) {
                    return false;
                }
                labelStart = state.pos + 1;
                labelEnd = parseLinkLabel(state, state.pos, true);
                if (labelEnd < 0) {
                    return false;
                }
                pos = labelEnd + 1;
                if (pos < max && state.src.charCodeAt(pos) === 0x28) {
                    pos++;
                    for (; pos < max; pos++) {
                        code = state.src.charCodeAt(pos);
                        if (!isSpace(code) && code !== 0x0A) {
                            break;
                        }
                    }
                    if (pos >= max) {
                        return false;
                    }
                    start = pos;
                    res = parseLinkDestination(state.src, pos, state.posMax);
                    if (res.ok) {
                        href = state.md.normalizeLink(res.str);
                        if (state.md.validateLink(href)) {
                            pos = res.pos;
                        } else {
                            href = '';
                        }
                    }
                    start = pos;
                    for (; pos < max; pos++) {
                        code = state.src.charCodeAt(pos);
                        if (!isSpace(code) && code !== 0x0A) {
                            break;
                        }
                    }
                    res = parseLinkTitle(state.src, pos, state.posMax);
                    if (pos < max && start !== pos && res.ok) {
                        title = res.str;
                        pos = res.pos;
                        for (; pos < max; pos++) {
                            code = state.src.charCodeAt(pos);
                            if (!isSpace(code) && code !== 0x0A) {
                                break;
                            }
                        }
                    } else {
                        title = '';
                    }
                    if (pos >= max || state.src.charCodeAt(pos) !== 0x29) {
                        state.pos = oldPos;
                        return false;
                    }
                    pos++;
                } else {
                    if (typeof state.env.references === 'undefined') {
                        return false;
                    }
                    for (; pos < max; pos++) {
                        code = state.src.charCodeAt(pos);
                        if (!isSpace(code) && code !== 0x0A) {
                            break;
                        }
                    }
                    if (pos < max && state.src.charCodeAt(pos) === 0x5B) {
                        start = pos + 1;
                        pos = parseLinkLabel(state, pos);
                        if (pos >= 0) {
                            label = state.src.slice(start, pos++);
                        } else {
                            pos = labelEnd + 1;
                        }
                    } else {
                        pos = labelEnd + 1;
                    }
                    if (!label) {
                        label = state.src.slice(labelStart, labelEnd);
                    }
                    ref = state.env.references[normalizeReference(label)];
                    if (!ref) {
                        state.pos = oldPos;
                        return false;
                    }
                    href = ref.href;
                    title = ref.title;
                }
                if (!silent) {
                    state.pos = labelStart;
                    state.posMax = labelEnd;
                    token = state.push('link_open', 'a', 1);
                    token.attrs = attrs = [
                        ['href', href]
                    ];
                    if (title) {
                        attrs.push(['title', title]);
                    }
                    state.md.inline.tokenize(state);
                    token = state.push('link_close', 'a', -1);
                }
                state.pos = pos;
                state.posMax = max;
                return true;
            };
        }, {
            "../common/utils": 33,
            "../helpers/parse_link_destination": 35,
            "../helpers/parse_link_label": 36,
            "../helpers/parse_link_title": 37
        }
    ],
    75: [
        function(require, module, exports) {
            'use strict';
            module.exports = function newline(state, silent) {
                var pmax, max, pos = state.pos;
                if (state.src.charCodeAt(pos) !== 0x0A) {
                    return false;
                }
                pmax = state.pending.length - 1;
                max = state.posMax;
                if (!silent) {
                    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
                        if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
                            state.pending = state.pending.replace(/ +$/, '');
                            state.push('hardbreak', 'br', 0);
                        } else {
                            state.pending = state.pending.slice(0, -1);
                            state.push('softbreak', 'br', 0);
                        }
                    } else {
                        state.push('softbreak', 'br', 0);
                    }
                }
                pos++;
                while (pos < max && state.src.charCodeAt(pos) === 0x20) {
                    pos++;
                }
                state.pos = pos;
                return true;
            };
        }, {}
    ],
    76: [
        function(require, module, exports) {
            'use strict';
            var Token = require('../token');
            var isWhiteSpace = require('../common/utils').isWhiteSpace;
            var isPunctChar = require('../common/utils').isPunctChar;
            var isMdAsciiPunct = require('../common/utils').isMdAsciiPunct;

            function StateInline(src, md, env, outTokens) {
                this.src = src;
                this.env = env;
                this.md = md;
                this.tokens = outTokens;
                this.pos = 0;
                this.posMax = this.src.length;
                this.level = 0;
                this.pending = '';
                this.pendingLevel = 0;
                this.cache = {};
                this.delimiters = [];
            }
            StateInline.prototype.pushPending = function() {
                var token = new Token('text', '', 0);
                token.content = this.pending;
                token.level = this.pendingLevel;
                this.tokens.push(token);
                this.pending = '';
                return token;
            };
            StateInline.prototype.push = function(type, tag, nesting) {
                if (this.pending) {
                    this.pushPending();
                }
                var token = new Token(type, tag, nesting);
                if (nesting < 0) {
                    this.level--;
                }
                token.level = this.level;
                if (nesting > 0) {
                    this.level++;
                }
                this.pendingLevel = this.level;
                this.tokens.push(token);
                return token;
            };
            StateInline.prototype.scanDelims = function(start, canSplitWord) {
                var pos = start,
                    lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true,
                    right_flanking = true,
                    max = this.posMax,
                    marker = this.src.charCodeAt(start);
                lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;
                while (pos < max && this.src.charCodeAt(pos) === marker) {
                    pos++;
                }
                count = pos - start;
                nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;
                isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
                isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
                isLastWhiteSpace = isWhiteSpace(lastChar);
                isNextWhiteSpace = isWhiteSpace(nextChar);
                if (isNextWhiteSpace) {
                    left_flanking = false;
                } else if (isNextPunctChar) {
                    if (!(isLastWhiteSpace || isLastPunctChar)) {
                        left_flanking = false;
                    }
                }
                if (isLastWhiteSpace) {
                    right_flanking = false;
                } else if (isLastPunctChar) {
                    if (!(isNextWhiteSpace || isNextPunctChar)) {
                        right_flanking = false;
                    }
                }
                if (!canSplitWord) {
                    can_open = left_flanking && (!right_flanking || isLastPunctChar);
                    can_close = right_flanking && (!left_flanking || isNextPunctChar);
                } else {
                    can_open = left_flanking;
                    can_close = right_flanking;
                }
                return {
                    can_open: can_open,
                    can_close: can_close,
                    length: count
                };
            };
            StateInline.prototype.Token = Token;
            module.exports = StateInline;
        }, {
            "../common/utils": 33,
            "../token": 80
        }
    ],
    77: [
        function(require, module, exports) {
            'use strict';
            module.exports.tokenize = function strikethrough(state, silent) {
                var i, scanned, token, len, ch, start = state.pos,
                    marker = state.src.charCodeAt(start);
                if (silent) {
                    return false;
                }
                if (marker !== 0x7E) {
                    return false;
                }
                scanned = state.scanDelims(state.pos, true);
                len = scanned.length;
                ch = String.fromCharCode(marker);
                if (len < 2) {
                    return false;
                }
                if (len % 2) {
                    token = state.push('text', '', 0);
                    token.content = ch;
                    len--;
                }
                for (i = 0; i < len; i += 2) {
                    token = state.push('text', '', 0);
                    token.content = ch + ch;
                    state.delimiters.push({
                        marker: marker,
                        jump: i,
                        token: state.tokens.length - 1,
                        level: state.level,
                        end: -1,
                        open: scanned.can_open,
                        close: scanned.can_close
                    });
                }
                state.pos += scanned.length;
                return true;
            };
            module.exports.postProcess = function strikethrough(state) {
                var i, j, startDelim, endDelim, token, loneMarkers = [],
                    delimiters = state.delimiters,
                    max = state.delimiters.length;
                for (i = 0; i < max; i++) {
                    startDelim = delimiters[i];
                    if (startDelim.marker !== 0x7E) {
                        continue;
                    }
                    if (startDelim.end === -1) {
                        continue;
                    }
                    endDelim = delimiters[startDelim.end];
                    token = state.tokens[startDelim.token];
                    token.type = 's_open';
                    token.tag = 's';
                    token.nesting = 1;
                    token.markup = '~~';
                    token.content = '';
                    token = state.tokens[endDelim.token];
                    token.type = 's_close';
                    token.tag = 's';
                    token.nesting = -1;
                    token.markup = '~~';
                    token.content = '';
                    if (state.tokens[endDelim.token - 1].type === 'text' && state.tokens[endDelim.token - 1].content === '~') {
                        loneMarkers.push(endDelim.token - 1);
                    }
                }
                while (loneMarkers.length) {
                    i = loneMarkers.pop();
                    j = i + 1;
                    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
                        j++;
                    }
                    j--;
                    if (i !== j) {
                        token = state.tokens[j];
                        state.tokens[j] = state.tokens[i];
                        state.tokens[i] = token;
                    }
                }
            };
        }, {}
    ],
    78: [
        function(require, module, exports) {
            'use strict';

            function isTerminatorChar(ch) {
                switch (ch) {
                    case 0x0A:
                    case 0x21:
                    case 0x23:
                    case 0x24:
                    case 0x25:
                    case 0x26:
                    case 0x2A:
                    case 0x2B:
                    case 0x2D:
                    case 0x3A:
                    case 0x3C:
                    case 0x3D:
                    case 0x3E:
                    case 0x40:
                    case 0x5B:
                    case 0x5C:
                    case 0x5D:
                    case 0x5E:
                    case 0x5F:
                    case 0x60:
                    case 0x7B:
                    case 0x7D:
                    case 0x7E:
                        return true;
                    default:
                        return false;
                }
            }
            module.exports = function text(state, silent) {
                var pos = state.pos;
                while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
                    pos++;
                }
                if (pos === state.pos) {
                    return false;
                }
                if (!silent) {
                    state.pending += state.src.slice(state.pos, pos);
                }
                state.pos = pos;
                return true;
            };
        }, {}
    ],
    79: [
        function(require, module, exports) {
            'use strict';
            module.exports = function text_collapse(state) {
                var curr, last, level = 0,
                    tokens = state.tokens,
                    max = state.tokens.length;
                for (curr = last = 0; curr < max; curr++) {
                    level += tokens[curr].nesting;
                    tokens[curr].level = level;
                    if (tokens[curr].type === 'text' && curr + 1 < max && tokens[curr + 1].type === 'text') {
                        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
                    } else {
                        if (curr !== last) {
                            tokens[last] = tokens[curr];
                        }
                        last++;
                    }
                }
                if (curr !== last) {
                    tokens.length = last;
                }
            };
        }, {}
    ],
    80: [
        function(require, module, exports) {
            'use strict';

            function Token(type, tag, nesting) {
                this.type = type;
                this.tag = tag;
                this.attrs = null;
                this.map = null;
                this.nesting = nesting;
                this.level = 0;
                this.children = null;
                this.content = '';
                this.markup = '';
                this.info = '';
                this.meta = null;
                this.block = false;
                this.hidden = false;
            }
            Token.prototype.attrIndex = function attrIndex(name) {
                var attrs, i, len;
                if (!this.attrs) {
                    return -1;
                }
                attrs = this.attrs;
                for (i = 0, len = attrs.length; i < len; i++) {
                    if (attrs[i][0] === name) {
                        return i;
                    }
                }
                return -1;
            };
            Token.prototype.attrPush = function attrPush(attrData) {
                if (this.attrs) {
                    this.attrs.push(attrData);
                } else {
                    this.attrs = [attrData];
                }
            };
            Token.prototype.attrSet = function attrSet(name, value) {
                var idx = this.attrIndex(name),
                    attrData = [name, value];
                if (idx < 0) {
                    this.attrPush(attrData);
                } else {
                    this.attrs[idx] = attrData;
                }
            };
            Token.prototype.attrJoin = function attrJoin(name, value) {
                var idx = this.attrIndex(name);
                if (idx < 0) {
                    this.attrPush([name, value]);
                } else {
                    this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
                }
            };
            module.exports = Token;
        }, {}
    ],
    81: [
        function(require, module, exports) {
            'use strict';
            var decodeCache = {};

            function getDecodeCache(exclude) {
                var i, ch, cache = decodeCache[exclude];
                if (cache) {
                    return cache;
                }
                cache = decodeCache[exclude] = [];
                for (i = 0; i < 128; i++) {
                    ch = String.fromCharCode(i);
                    cache.push(ch);
                }
                for (i = 0; i < exclude.length; i++) {
                    ch = exclude.charCodeAt(i);
                    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
                }
                return cache;
            }

            function decode(string, exclude) {
                var cache;
                if (typeof exclude !== 'string') {
                    exclude = decode.defaultChars;
                }
                cache = getDecodeCache(exclude);
                return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
                    var i, l, b1, b2, b3, b4, chr, result = '';
                    for (i = 0, l = seq.length; i < l; i += 3) {
                        b1 = parseInt(seq.slice(i + 1, i + 3), 16);
                        if (b1 < 0x80) {
                            result += cache[b1];
                            continue;
                        }
                        if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
                            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                            if ((b2 & 0xC0) === 0x80) {
                                chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);
                                if (chr < 0x80) {
                                    result += '\ufffd\ufffd';
                                } else {
                                    result += String.fromCharCode(chr);
                                }
                                i += 3;
                                continue;
                            }
                        }
                        if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
                            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
                            if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                                chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);
                                if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
                                    result += '\ufffd\ufffd\ufffd';
                                } else {
                                    result += String.fromCharCode(chr);
                                }
                                i += 6;
                                continue;
                            }
                        }
                        if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
                            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
                            b4 = parseInt(seq.slice(i + 10, i + 12), 16);
                            if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
                                chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);
                                if (chr < 0x10000 || chr > 0x10FFFF) {
                                    result += '\ufffd\ufffd\ufffd\ufffd';
                                } else {
                                    chr -= 0x10000;
                                    result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
                                }
                                i += 9;
                                continue;
                            }
                        }
                        result += '\ufffd';
                    }
                    return result;
                });
            }
            decode.defaultChars = ';/?:@&=+$,#';
            decode.componentChars = '';
            module.exports = decode;
        }, {}
    ],
    82: [
        function(require, module, exports) {
            'use strict';
            var encodeCache = {};

            function getEncodeCache(exclude) {
                var i, ch, cache = encodeCache[exclude];
                if (cache) {
                    return cache;
                }
                cache = encodeCache[exclude] = [];
                for (i = 0; i < 128; i++) {
                    ch = String.fromCharCode(i);
                    if (/^[0-9a-z]$/i.test(ch)) {
                        cache.push(ch);
                    } else {
                        cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
                    }
                }
                for (i = 0; i < exclude.length; i++) {
                    cache[exclude.charCodeAt(i)] = exclude[i];
                }
                return cache;
            }

            function encode(string, exclude, keepEscaped) {
                var i, l, code, nextCode, cache, result = '';
                if (typeof exclude !== 'string') {
                    keepEscaped = exclude;
                    exclude = encode.defaultChars;
                }
                if (typeof keepEscaped === 'undefined') {
                    keepEscaped = true;
                }
                cache = getEncodeCache(exclude);
                for (i = 0, l = string.length; i < l; i++) {
                    code = string.charCodeAt(i);
                    if (keepEscaped && code === 0x25 && i + 2 < l) {
                        if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
                            result += string.slice(i, i + 3);
                            i += 2;
                            continue;
                        }
                    }
                    if (code < 128) {
                        result += cache[code];
                        continue;
                    }
                    if (code >= 0xD800 && code <= 0xDFFF) {
                        if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
                            nextCode = string.charCodeAt(i + 1);
                            if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
                                result += encodeURIComponent(string[i] + string[i + 1]);
                                i++;
                                continue;
                            }
                        }
                        result += '%EF%BF%BD';
                        continue;
                    }
                    result += encodeURIComponent(string[i]);
                }
                return result;
            }
            encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
            encode.componentChars = "-_.!~*'()";
            module.exports = encode;
        }, {}
    ],
    83: [
        function(require, module, exports) {
            'use strict';
            module.exports = function format(url) {
                var result = '';
                result += url.protocol || '';
                result += url.slashes ? '//' : '';
                result += url.auth ? url.auth + '@' : '';
                if (url.hostname && url.hostname.indexOf(':') !== -1) {
                    result += '[' + url.hostname + ']';
                } else {
                    result += url.hostname || '';
                }
                result += url.port ? ':' + url.port : '';
                result += url.pathname || '';
                result += url.search || '';
                result += url.hash || '';
                return result;
            };
        }, {}
    ],
    84: [
        function(require, module, exports) {
            'use strict';
            module.exports.encode = require('./encode');
            module.exports.decode = require('./decode');
            module.exports.format = require('./format');
            module.exports.parse = require('./parse');
        }, {
            "./decode": 81,
            "./encode": 82,
            "./format": 83,
            "./parse": 85
        }
    ],
    85: [
        function(require, module, exports) {
            'use strict';

            function Url() {
                this.protocol = null;
                this.slashes = null;
                this.auth = null;
                this.port = null;
                this.hostname = null;
                this.hash = null;
                this.search = null;
                this.pathname = null;
            }
            var protocolPattern = /^([a-z0-9.+-]+:)/i,
                portPattern = /:[0-9]*$/,
                simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
                unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
                autoEscape = ['\''].concat(unwise),
                nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
                hostEndingChars = ['/', '?', '#'],
                hostnameMaxLen = 255,
                hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
                hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                hostlessProtocol = {
                    'javascript': true,
                    'javascript:': true
                },
                slashedProtocol = {
                    'http': true,
                    'https': true,
                    'ftp': true,
                    'gopher': true,
                    'file': true,
                    'http:': true,
                    'https:': true,
                    'ftp:': true,
                    'gopher:': true,
                    'file:': true
                };

            function urlParse(url, slashesDenoteHost) {
                if (url && url instanceof Url) {
                    return url;
                }
                var u = new Url();
                u.parse(url, slashesDenoteHost);
                return u;
            }
            Url.prototype.parse = function(url, slashesDenoteHost) {
                var i, l, lowerProto, hec, slashes, rest = url;
                rest = rest.trim();
                if (!slashesDenoteHost && url.split('#').length === 1) {
                    var simplePath = simplePathPattern.exec(rest);
                    if (simplePath) {
                        this.pathname = simplePath[1];
                        if (simplePath[2]) {
                            this.search = simplePath[2];
                        }
                        return this;
                    }
                }
                var proto = protocolPattern.exec(rest);
                if (proto) {
                    proto = proto[0];
                    lowerProto = proto.toLowerCase();
                    this.protocol = proto;
                    rest = rest.substr(proto.length);
                }
                if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    slashes = rest.substr(0, 2) === '//';
                    if (slashes && !(proto && hostlessProtocol[proto])) {
                        rest = rest.substr(2);
                        this.slashes = true;
                    }
                }
                if (!hostlessProtocol[proto] && (slashes || (proto && !slashedProtocol[proto]))) {
                    var hostEnd = -1;
                    for (i = 0; i < hostEndingChars.length; i++) {
                        hec = rest.indexOf(hostEndingChars[i]);
                        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
                            hostEnd = hec;
                        }
                    }
                    var auth, atSign;
                    if (hostEnd === -1) {
                        atSign = rest.lastIndexOf('@');
                    } else {
                        atSign = rest.lastIndexOf('@', hostEnd);
                    }
                    if (atSign !== -1) {
                        auth = rest.slice(0, atSign);
                        rest = rest.slice(atSign + 1);
                        this.auth = auth;
                    }
                    hostEnd = -1;
                    for (i = 0; i < nonHostChars.length; i++) {
                        hec = rest.indexOf(nonHostChars[i]);
                        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
                            hostEnd = hec;
                        }
                    }
                    if (hostEnd === -1) {
                        hostEnd = rest.length;
                    }
                    if (rest[hostEnd - 1] === ':') {
                        hostEnd--;
                    }
                    var host = rest.slice(0, hostEnd);
                    rest = rest.slice(hostEnd);
                    this.parseHost(host);
                    this.hostname = this.hostname || '';
                    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
                    if (!ipv6Hostname) {
                        var hostparts = this.hostname.split(/\./);
                        for (i = 0, l = hostparts.length; i < l; i++) {
                            var part = hostparts[i];
                            if (!part) {
                                continue;
                            }
                            if (!part.match(hostnamePartPattern)) {
                                var newpart = '';
                                for (var j = 0, k = part.length; j < k; j++) {
                                    if (part.charCodeAt(j) > 127) {
                                        newpart += 'x';
                                    } else {
                                        newpart += part[j];
                                    }
                                }
                                if (!newpart.match(hostnamePartPattern)) {
                                    var validParts = hostparts.slice(0, i);
                                    var notHost = hostparts.slice(i + 1);
                                    var bit = part.match(hostnamePartStart);
                                    if (bit) {
                                        validParts.push(bit[1]);
                                        notHost.unshift(bit[2]);
                                    }
                                    if (notHost.length) {
                                        rest = notHost.join('.') + rest;
                                    }
                                    this.hostname = validParts.join('.');
                                    break;
                                }
                            }
                        }
                    }
                    if (this.hostname.length > hostnameMaxLen) {
                        this.hostname = '';
                    }
                    if (ipv6Hostname) {
                        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
                    }
                }
                var hash = rest.indexOf('#');
                if (hash !== -1) {
                    this.hash = rest.substr(hash);
                    rest = rest.slice(0, hash);
                }
                var qm = rest.indexOf('?');
                if (qm !== -1) {
                    this.search = rest.substr(qm);
                    rest = rest.slice(0, qm);
                }
                if (rest) {
                    this.pathname = rest;
                }
                if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
                    this.pathname = '';
                }
                return this;
            };
            Url.prototype.parseHost = function(host) {
                var port = portPattern.exec(host);
                if (port) {
                    port = port[0];
                    if (port !== ':') {
                        this.port = port.substr(1);
                    }
                    host = host.substr(0, host.length - port.length);
                }
                if (host) {
                    this.hostname = host;
                }
            };
            module.exports = urlParse;
        }, {}
    ],
    86: [
        function(require, module, exports) {
            var process = module.exports = {};
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }

            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = setTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                clearTimeout(timeout);
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    setTimeout(drainQueue, 0);
                }
            };

            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = '';
            process.versions = {};

            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.binding = function(name) {
                throw new Error('process.binding is not supported');
            };
            process.cwd = function() {
                return '/'
            };
            process.chdir = function(dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function() {
                return 0;
            };
        }, {}
    ],
    87: [
        function(require, module, exports) {
            (function(global) {;
                (function(root) {
                    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
                    var freeModule = typeof module == 'object' && module && !module.nodeType && module;
                    var freeGlobal = typeof global == 'object' && global;
                    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
                        root = freeGlobal;
                    }
                    var punycode, maxInt = 2147483647,
                        base = 36,
                        tMin = 1,
                        tMax = 26,
                        skew = 38,
                        damp = 700,
                        initialBias = 72,
                        initialN = 128,
                        delimiter = '-',
                        regexPunycode = /^xn--/,
                        regexNonASCII = /[^\x20-\x7E]/,
                        regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
                        errors = {
                            'overflow': 'Overflow: input needs wider integers to process',
                            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                            'invalid-input': 'Invalid input'
                        },
                        baseMinusTMin = base - tMin,
                        floor = Math.floor,
                        stringFromCharCode = String.fromCharCode,
                        key;

                    function error(type) {
                        throw new RangeError(errors[type]);
                    }

                    function map(array, fn) {
                        var length = array.length;
                        var result = [];
                        while (length--) {
                            result[length] = fn(array[length]);
                        }
                        return result;
                    }

                    function mapDomain(string, fn) {
                        var parts = string.split('@');
                        var result = '';
                        if (parts.length > 1) {
                            result = parts[0] + '@';
                            string = parts[1];
                        }
                        string = string.replace(regexSeparators, '\x2E');
                        var labels = string.split('.');
                        var encoded = map(labels, fn).join('.');
                        return result + encoded;
                    }

                    function ucs2decode(string) {
                        var output = [],
                            counter = 0,
                            length = string.length,
                            value, extra;
                        while (counter < length) {
                            value = string.charCodeAt(counter++);
                            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                                extra = string.charCodeAt(counter++);
                                if ((extra & 0xFC00) == 0xDC00) {
                                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                                } else {
                                    output.push(value);
                                    counter--;
                                }
                            } else {
                                output.push(value);
                            }
                        }
                        return output;
                    }

                    function ucs2encode(array) {
                        return map(array, function(value) {
                            var output = '';
                            if (value > 0xFFFF) {
                                value -= 0x10000;
                                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                                value = 0xDC00 | value & 0x3FF;
                            }
                            output += stringFromCharCode(value);
                            return output;
                        }).join('');
                    }

                    function basicToDigit(codePoint) {
                        if (codePoint - 48 < 10) {
                            return codePoint - 22;
                        }
                        if (codePoint - 65 < 26) {
                            return codePoint - 65;
                        }
                        if (codePoint - 97 < 26) {
                            return codePoint - 97;
                        }
                        return base;
                    }

                    function digitToBasic(digit, flag) {
                        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
                    }

                    function adapt(delta, numPoints, firstTime) {
                        var k = 0;
                        delta = firstTime ? floor(delta / damp) : delta >> 1;
                        delta += floor(delta / numPoints);
                        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
                            delta = floor(delta / baseMinusTMin);
                        }
                        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
                    }

                    function decode(input) {
                        var output = [],
                            inputLength = input.length,
                            out, i = 0,
                            n = initialN,
                            bias = initialBias,
                            basic, j, index, oldi, w, k, digit, t, baseMinusT;
                        basic = input.lastIndexOf(delimiter);
                        if (basic < 0) {
                            basic = 0;
                        }
                        for (j = 0; j < basic; ++j) {
                            if (input.charCodeAt(j) >= 0x80) {
                                error('not-basic');
                            }
                            output.push(input.charCodeAt(j));
                        }
                        for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
                            for (oldi = i, w = 1, k = base;; k += base) {
                                if (index >= inputLength) {
                                    error('invalid-input');
                                }
                                digit = basicToDigit(input.charCodeAt(index++));
                                if (digit >= base || digit > floor((maxInt - i) / w)) {
                                    error('overflow');
                                }
                                i += digit * w;
                                t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                                if (digit < t) {
                                    break;
                                }
                                baseMinusT = base - t;
                                if (w > floor(maxInt / baseMinusT)) {
                                    error('overflow');
                                }
                                w *= baseMinusT;
                            }
                            out = output.length + 1;
                            bias = adapt(i - oldi, out, oldi == 0);
                            if (floor(i / out) > maxInt - n) {
                                error('overflow');
                            }
                            n += floor(i / out);
                            i %= out;
                            output.splice(i++, 0, n);
                        }
                        return ucs2encode(output);
                    }

                    function encode(input) {
                        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [],
                            inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
                        input = ucs2decode(input);
                        inputLength = input.length;
                        n = initialN;
                        delta = 0;
                        bias = initialBias;
                        for (j = 0; j < inputLength; ++j) {
                            currentValue = input[j];
                            if (currentValue < 0x80) {
                                output.push(stringFromCharCode(currentValue));
                            }
                        }
                        handledCPCount = basicLength = output.length;
                        if (basicLength) {
                            output.push(delimiter);
                        }
                        while (handledCPCount < inputLength) {
                            for (m = maxInt, j = 0; j < inputLength; ++j) {
                                currentValue = input[j];
                                if (currentValue >= n && currentValue < m) {
                                    m = currentValue;
                                }
                            }
                            handledCPCountPlusOne = handledCPCount + 1;
                            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                                error('overflow');
                            }
                            delta += (m - n) * handledCPCountPlusOne;
                            n = m;
                            for (j = 0; j < inputLength; ++j) {
                                currentValue = input[j];
                                if (currentValue < n && ++delta > maxInt) {
                                    error('overflow');
                                }
                                if (currentValue == n) {
                                    for (q = delta, k = base;; k += base) {
                                        t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                                        if (q < t) {
                                            break;
                                        }
                                        qMinusT = q - t;
                                        baseMinusT = base - t;
                                        output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                                        q = floor(qMinusT / baseMinusT);
                                    }
                                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                                    delta = 0;
                                    ++handledCPCount;
                                }
                            }
                            ++delta;
                            ++n;
                        }
                        return output.join('');
                    }

                    function toUnicode(input) {
                        return mapDomain(input, function(string) {
                            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
                        });
                    }

                    function toASCII(input) {
                        return mapDomain(input, function(string) {
                            return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
                        });
                    }
                    punycode = {
                        'version': '1.4.1',
                        'ucs2': {
                            'decode': ucs2decode,
                            'encode': ucs2encode
                        },
                        'decode': decode,
                        'encode': encode,
                        'toASCII': toASCII,
                        'toUnicode': toUnicode
                    };
                    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
                        define('punycode', function() {
                            return punycode;
                        });
                    } else if (freeExports && freeModule) {
                        if (module.exports == freeExports) {
                            freeModule.exports = punycode;
                        } else {
                            for (key in punycode) {
                                punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
                            }
                        }
                    } else {
                        root.punycode = punycode;
                    }
                }(this));
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}
    ],
    88: [
        function(require, module, exports) {
            'use strict';
            var strictUriEncode = require('strict-uri-encode');
            exports.extract = function(str) {
                return str.split('?')[1] || '';
            };
            exports.parse = function(str) {
                if (typeof str !== 'string') {
                    return {};
                }
                str = str.trim().replace(/^(\?|#|&)/, '');
                if (!str) {
                    return {};
                }
                return str.split('&').reduce(function(ret, param) {
                    var parts = param.replace(/\+/g, ' ').split('=');
                    var key = parts.shift();
                    var val = parts.length > 0 ? parts.join('=') : undefined;
                    key = decodeURIComponent(key);
                    val = val === undefined ? null : decodeURIComponent(val);
                    if (!ret.hasOwnProperty(key)) {
                        ret[key] = val;
                    } else if (Array.isArray(ret[key])) {
                        ret[key].push(val);
                    } else {
                        ret[key] = [ret[key], val];
                    }
                    return ret;
                }, {});
            };
            exports.stringify = function(obj) {
                return obj ? Object.keys(obj).sort().map(function(key) {
                    var val = obj[key];
                    if (val === undefined) {
                        return '';
                    }
                    if (val === null) {
                        return key;
                    }
                    if (Array.isArray(val)) {
                        return val.slice().sort().map(function(val2) {
                            return strictUriEncode(key) + '=' + strictUriEncode(val2);
                        }).join('&');
                    }
                    return strictUriEncode(key) + '=' + strictUriEncode(val);
                }).filter(function(x) {
                    return x.length > 0;
                }).join('&') : '';
            };
        }, {
            "strict-uri-encode": 89
        }
    ],
    89: [
        function(require, module, exports) {
            'use strict';
            module.exports = function(str) {
                return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
                    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
                });
            };
        }, {}
    ],
    90: [
        function(require, module, exports) {
            module.exports = /[\0-\x1F\x7F-\x9F]/
        }, {}
    ],
    91: [
        function(require, module, exports) {
            module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
        }, {}
    ],
    92: [
        function(require, module, exports) {
            module.exports = /[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDE38-\uDE3D]|\uD805[\uDCC6\uDDC1-\uDDC9\uDE41-\uDE43]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F/
        }, {}
    ],
    93: [
        function(require, module, exports) {
            module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
        }, {}
    ],
    94: [
        function(require, module, exports) {
            module.exports.Any = require('./properties/Any/regex');
            module.exports.Cc = require('./categories/Cc/regex');
            module.exports.Cf = require('./categories/Cf/regex');
            module.exports.P = require('./categories/P/regex');
            module.exports.Z = require('./categories/Z/regex');
        }, {
            "./categories/Cc/regex": 90,
            "./categories/Cf/regex": 91,
            "./categories/P/regex": 92,
            "./categories/Z/regex": 93,
            "./properties/Any/regex": 95
        }
    ],
    95: [
        function(require, module, exports) {
            module.exports = /[\0-\uD7FF\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]/
        }, {}
    ],
    96: [
        function(require, module, exports) {
            (function() {
                var vue
                var asyncData = {
                    created: function() {
                        if (!vue) {
                            console.warn('[vue-async-data] not installed!')
                            return
                        }
                        if (this.$options.asyncData) {
                            if (this._defineMeta) {
                                this._defineMeta('$loadingAsyncData', true)
                            } else {
                                vue.util.defineReactive(this, '$loadingAsyncData', true)
                            }
                        }
                    },
                    compiled: function() {
                        this.reloadAsyncData()
                    },
                    methods: {
                        reloadAsyncData: function() {
                            var load = this.$options.asyncData
                            if (load) {
                                var self = this
                                var resolve = function(data) {
                                    if (data) {
                                        for (var key in data) {
                                            self.$set(key, data[key])
                                        }
                                    }
                                    self.$loadingAsyncData = false
                                    self.$emit('async-data')
                                }
                                var reject = function(reason) {
                                    var msg = '[vue] async data load failed'
                                    if (reason instanceof Error) {
                                        console.warn(msg)
                                        throw reason
                                    } else {
                                        console.warn(msg + ': ' + reason)
                                    }
                                }
                                this.$loadingAsyncData = true
                                var res = load.call(this, resolve, reject)
                                if (res && typeof res.then === 'function') {
                                    res.then(resolve, reject)
                                }
                            }
                        }
                    }
                }
                var api = {
                    mixin: asyncData,
                    install: function(Vue, options) {
                        vue = Vue
                        Vue.options = Vue.util.mergeOptions(Vue.options, asyncData)
                    }
                }
                if (typeof exports === 'object' && typeof module === 'object') {
                    module.exports = api
                } else if (typeof define === 'function' && define.amd) {
                    define(function() {
                        return api
                    })
                } else if (typeof window !== 'undefined') {
                    window.VueAsyncData = api
                }
            })()
        }, {}
    ],
    97: [
        function(require, module, exports) {
            var Vue
            var map = Object.create(null)
            var shimmed = false
            var isBrowserify = false
            exports.install = function(vue, browserify) {
                if (shimmed) return
                shimmed = true
                Vue = vue
                isBrowserify = browserify
                exports.compatible = !!Vue.internalDirectives
                if (!exports.compatible) {
                    console.warn('[HMR] vue-loader hot reload is only compatible with ' + 'Vue.js 1.0.0+.')
                    return
                }
                patchView(Vue.internalDirectives.component)
                console.log('[HMR] Vue component hot reload shim applied.')
                var routerView = Vue.elementDirective('router-view')
                if (routerView) {
                    patchView(routerView)
                    console.log('[HMR] vue-router <router-view> hot reload shim applied.')
                }
            }

            function patchView(View) {
                var unbuild = View.unbuild
                View.unbuild = function(defer) {
                    if (!this.hotUpdating) {
                        var prevComponent = this.childVM && this.childVM.constructor
                        removeView(prevComponent, this)
                        if (defer) {
                            addView(this.Component, this)
                        }
                    }
                    return unbuild.call(this, defer)
                }
            }

            function addView(Component, view) {
                var id = Component && Component.options.hotID
                if (id) {
                    if (!map[id]) {
                        map[id] = {
                            Component: Component,
                            views: [],
                            instances: []
                        }
                    }
                    map[id].views.push(view)
                }
            }

            function removeView(Component, view) {
                var id = Component && Component.options.hotID
                if (id) {
                    map[id].views.$remove(view)
                }
            }
            exports.createRecord = function(id, options) {
                if (typeof options === 'function') {
                    options = options.options
                }
                if (typeof options.el !== 'string' && typeof options.data !== 'object') {
                    makeOptionsHot(id, options)
                    map[id] = {
                        Component: null,
                        views: [],
                        instances: []
                    }
                }
            }

            function makeOptionsHot(id, options) {
                options.hotID = id
                injectHook(options, 'created', function() {
                    var record = map[id]
                    if (!record.Component) {
                        record.Component = this.constructor
                    }
                    record.instances.push(this)
                })
                injectHook(options, 'beforeDestroy', function() {
                    map[id].instances.$remove(this)
                })
            }

            function injectHook(options, name, hook) {
                var existing = options[name]
                options[name] = existing ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook] : [hook]
            }
            exports.update = function(id, newOptions, newTemplate) {
                var record = map[id]
                if (!record || (record.instances.length && !record.views.length)) {
                    console.log('[HMR] Root or manually-mounted instance modified. Full reload may be required.')
                    if (!isBrowserify) {
                        window.location.reload()
                    } else {
                        return
                    }
                }
                if (!isBrowserify) {
                    console.log('[HMR] Updating component: ' + format(id))
                }
                var Component = record.Component
                if (newOptions) {
                    Component = record.Component = typeof newOptions === 'function' ? newOptions : Vue.extend(newOptions)
                    makeOptionsHot(id, Component.options)
                }
                if (newTemplate) {
                    Component.options.template = newTemplate
                }
                if (Component.options.name) {
                    Component.options.components[Component.options.name] = Component
                }
                Component.linker = null
                record.views.forEach(function(view) {
                    updateView(view, Component)
                })
                if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
                    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
                }
            }

            function updateView(view, Component) {
                if (!view._bound) {
                    return
                }
                view.Component = Component
                view.hotUpdating = true
                view.vm._isCompiled = false
                var state = extractState(view.childVM)
                var keepAlive = view.keepAlive
                view.keepAlive = false
                view.mountComponent()
                view.keepAlive = keepAlive
                restoreState(view.childVM, state, true)
                view.vm._isCompiled = true
                view.hotUpdating = false
            }

            function extractState(vm) {
                return {
                    cid: vm.constructor.cid,
                    data: vm.$data,
                    children: vm.$children.map(extractState)
                }
            }

            function restoreState(vm, state, isRoot) {
                var oldAsyncConfig
                if (isRoot) {
                    oldAsyncConfig = Vue.config.async
                    Vue.config.async = false
                }
                if (isRoot || !vm._props) {
                    vm.$data = state.data
                } else {
                    Object.keys(state.data).forEach(function(key) {
                        if (!vm._props[key]) {
                            vm.$data[key] = state.data[key]
                        }
                    })
                }
                var hasSameChildren = vm.$children.every(function(c, i) {
                    return state.children[i] && state.children[i].cid === c.constructor.cid
                })
                if (hasSameChildren) {
                    vm.$children.forEach(function(c, i) {
                        restoreState(c, state.children[i])
                    })
                }
                if (isRoot) {
                    Vue.config.async = oldAsyncConfig
                }
            }

            function format(id) {
                return id.match(/[^\/]+\.vue$/)[0]
            }
        }, {}
    ],
    98: [
        function(require, module, exports) {
            var _ = require('../util');
            module.exports = {
                request: function(request) {
                    if (_.isFunction(request.beforeSend)) {
                        request.beforeSend.call(this, request);
                    }
                    return request;
                }
            };
        }, {
            "../util": 121
        }
    ],
    99: [
        function(require, module, exports) {
            var _ = require('../../util');
            var Promise = require('../../promise');
            var xhrClient = require('./xhr');
            module.exports = function(request) {
                var response = (request.client || xhrClient)(request);
                return Promise.resolve(response).then(function(response) {
                    if (response.headers) {
                        var headers = parseHeaders(response.headers);
                        response.headers = function(name) {
                            if (name) {
                                return headers[_.toLower(name)];
                            }
                            return headers;
                        };
                    }
                    response.ok = response.status >= 200 && response.status < 300;
                    return response;
                });
            };

            function parseHeaders(str) {
                var headers = {},
                    value, name, i;
                if (_.isString(str)) {
                    _.each(str.split('\n'), function(row) {
                        i = row.indexOf(':');
                        name = _.trim(_.toLower(row.slice(0, i)));
                        value = _.trim(row.slice(i + 1));
                        if (headers[name]) {
                            if (_.isArray(headers[name])) {
                                headers[name].push(value);
                            } else {
                                headers[name] = [headers[name], value];
                            }
                        } else {
                            headers[name] = value;
                        }
                    });
                }
                return headers;
            }
        }, {
            "../../promise": 114,
            "../../util": 121,
            "./xhr": 102
        }
    ],
    100: [
        function(require, module, exports) {
            var _ = require('../../util');
            var Promise = require('../../promise');
            module.exports = function(request) {
                return new Promise(function(resolve) {
                    var callback = '_jsonp' + Math.random().toString(36).substr(2),
                        response = {
                            request: request,
                            data: null
                        },
                        handler, script;
                    request.params[request.jsonp] = callback;
                    request.cancel = function() {
                        handler({
                            type: 'cancel'
                        });
                    };
                    script = document.createElement('script');
                    script.src = _.url(request);
                    script.type = 'text/javascript';
                    script.async = true;
                    window[callback] = function(data) {
                        response.data = data;
                    };
                    handler = function(event) {
                        if (event.type === 'load' && response.data !== null) {
                            response.status = 200;
                        } else if (event.type === 'error') {
                            response.status = 404;
                        } else {
                            response.status = 0;
                        }
                        resolve(response);
                        delete window[callback];
                        document.body.removeChild(script);
                    };
                    script.onload = handler;
                    script.onerror = handler;
                    document.body.appendChild(script);
                });
            };
        }, {
            "../../promise": 114,
            "../../util": 121
        }
    ],
    101: [
        function(require, module, exports) {
            var _ = require('../../util');
            var Promise = require('../../promise');
            module.exports = function(request) {
                return new Promise(function(resolve) {
                    var xdr = new XDomainRequest(),
                        response = {
                            request: request
                        },
                        handler;
                    request.cancel = function() {
                        xdr.abort();
                    };
                    xdr.open(request.method, _.url(request), true);
                    handler = function(event) {
                        response.data = xdr.responseText;
                        response.status = xdr.status;
                        response.statusText = xdr.statusText;
                        resolve(response);
                    };
                    xdr.timeout = 0;
                    xdr.onload = handler;
                    xdr.onabort = handler;
                    xdr.onerror = handler;
                    xdr.ontimeout = function() {};
                    xdr.onprogress = function() {};
                    xdr.send(request.data);
                });
            };
        }, {
            "../../promise": 114,
            "../../util": 121
        }
    ],
    102: [
        function(require, module, exports) {
            var _ = require('../../util');
            var Promise = require('../../promise');
            module.exports = function(request) {
                return new Promise(function(resolve) {
                    var xhr = new XMLHttpRequest(),
                        response = {
                            request: request
                        },
                        handler;
                    request.cancel = function() {
                        xhr.abort();
                    };
                    xhr.open(request.method, _.url(request), true);
                    handler = function(event) {
                        response.data = xhr.responseText;
                        response.status = xhr.status;
                        response.statusText = xhr.statusText;
                        response.headers = xhr.getAllResponseHeaders();
                        resolve(response);
                    };
                    xhr.timeout = 0;
                    xhr.onload = handler;
                    xhr.onabort = handler;
                    xhr.onerror = handler;
                    xhr.ontimeout = function() {};
                    xhr.onprogress = function() {};
                    if (_.isPlainObject(request.xhr)) {
                        _.extend(xhr, request.xhr);
                    }
                    if (_.isPlainObject(request.upload)) {
                        _.extend(xhr.upload, request.upload);
                    }
                    _.each(request.headers || {}, function(value, header) {
                        xhr.setRequestHeader(header, value);
                    });
                    xhr.send(request.data);
                });
            };
        }, {
            "../../promise": 114,
            "../../util": 121
        }
    ],
    103: [
        function(require, module, exports) {
            var _ = require('../util');
            var xdrClient = require('./client/xdr');
            var xhrCors = 'withCredentials' in new XMLHttpRequest();
            var originUrl = _.url.parse(location.href);
            module.exports = {
                request: function(request) {
                    if (request.crossOrigin === null) {
                        request.crossOrigin = crossOrigin(request);
                    }
                    if (request.crossOrigin) {
                        if (!xhrCors) {
                            request.client = xdrClient;
                        }
                        request.emulateHTTP = false;
                    }
                    return request;
                }
            };

            function crossOrigin(request) {
                var requestUrl = _.url.parse(_.url(request));
                return (requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host);
            }
        }, {
            "../util": 121,
            "./client/xdr": 101
        }
    ],
    104: [
        function(require, module, exports) {
            var _ = require('../util');
            module.exports = {
                request: function(request) {
                    request.method = request.method.toUpperCase();
                    request.headers = _.extend({}, _.http.headers.common, !request.crossOrigin ? _.http.headers.custom : {}, _.http.headers[request.method.toLowerCase()], request.headers);
                    if (_.isPlainObject(request.data) && /^(GET|JSONP)$/i.test(request.method)) {
                        _.extend(request.params, request.data);
                        delete request.data;
                    }
                    return request;
                }
            };
        }, {
            "../util": 121
        }
    ],
    105: [
        function(require, module, exports) {
            var _ = require('../util');
            var Client = require('./client');
            var Promise = require('../promise');
            var interceptor = require('./interceptor');
            var jsonType = {
                'Content-Type': 'application/json'
            };

            function Http(url, options) {
                var client = Client,
                    request, promise;
                Http.interceptors.forEach(function(handler) {
                    client = interceptor(handler, this.$vm)(client);
                }, this);
                options = _.isObject(url) ? url : _.extend({
                    url: url
                }, options);
                request = _.merge({}, Http.options, this.$options, options);
                promise = client(request).bind(this.$vm).then(function(response) {
                    return response.ok ? response : Promise.reject(response);
                }, function(response) {
                    if (response instanceof Error) {
                        _.error(response);
                    }
                    return Promise.reject(response);
                });
                if (request.success) {
                    promise.success(request.success);
                }
                if (request.error) {
                    promise.error(request.error);
                }
                return promise;
            }
            Http.options = {
                method: 'get',
                data: '',
                params: {},
                headers: {},
                xhr: null,
                upload: null,
                jsonp: 'callback',
                beforeSend: null,
                crossOrigin: null,
                emulateHTTP: false,
                emulateJSON: false,
                timeout: 0
            };
            Http.interceptors = [require('./before'), require('./timeout'), require('./jsonp'), require('./method'), require('./mime'), require('./header'), require('./cors')];
            Http.headers = {
                put: jsonType,
                post: jsonType,
                patch: jsonType,
                delete: jsonType,
                common: {
                    'Accept': 'application/json, text/plain, */*'
                },
                custom: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            };
            ['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function(method) {
                Http[method] = function(url, data, success, options) {
                    if (_.isFunction(data)) {
                        options = success;
                        success = data;
                        data = undefined;
                    }
                    if (_.isObject(success)) {
                        options = success;
                        success = undefined;
                    }
                    return this(url, _.extend({
                        method: method,
                        data: data,
                        success: success
                    }, options));
                };
            });
            module.exports = _.http = Http;
        }, {
            "../promise": 114,
            "../util": 121,
            "./before": 98,
            "./client": 99,
            "./cors": 103,
            "./header": 104,
            "./interceptor": 106,
            "./jsonp": 107,
            "./method": 108,
            "./mime": 109,
            "./timeout": 110
        }
    ],
    106: [
        function(require, module, exports) {
            var _ = require('../util');
            var Promise = require('../promise');
            module.exports = function(handler, vm) {
                return function(client) {
                    if (_.isFunction(handler)) {
                        handler = handler.call(vm, Promise);
                    }
                    return function(request) {
                        if (_.isFunction(handler.request)) {
                            request = handler.request.call(vm, request);
                        }
                        return when(request, function(request) {
                            return when(client(request), function(response) {
                                if (_.isFunction(handler.response)) {
                                    response = handler.response.call(vm, response);
                                }
                                return response;
                            });
                        });
                    };
                };
            };

            function when(value, fulfilled, rejected) {
                var promise = Promise.resolve(value);
                if (arguments.length < 2) {
                    return promise;
                }
                return promise.then(fulfilled, rejected);
            }
        }, {
            "../promise": 114,
            "../util": 121
        }
    ],
    107: [
        function(require, module, exports) {
            var jsonpClient = require('./client/jsonp');
            module.exports = {
                request: function(request) {
                    if (request.method == 'JSONP') {
                        request.client = jsonpClient;
                    }
                    return request;
                }
            };
        }, {
            "./client/jsonp": 100
        }
    ],
    108: [
        function(require, module, exports) {
            module.exports = {
                request: function(request) {
                    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
                        request.headers['X-HTTP-Method-Override'] = request.method;
                        request.method = 'POST';
                    }
                    return request;
                }
            };
        }, {}
    ],
    109: [
        function(require, module, exports) {
            var _ = require('../util');
            module.exports = {
                request: function(request) {
                    if (request.emulateJSON && _.isPlainObject(request.data)) {
                        request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                        request.data = _.url.params(request.data);
                    }
                    if (_.isObject(request.data) && /FormData/i.test(request.data.toString())) {
                        delete request.headers['Content-Type'];
                    }
                    if (_.isPlainObject(request.data)) {
                        request.data = JSON.stringify(request.data);
                    }
                    return request;
                },
                response: function(response) {
                    try {
                        response.data = JSON.parse(response.data);
                    } catch (e) {}
                    return response;
                }
            };
        }, {
            "../util": 121
        }
    ],
    110: [
        function(require, module, exports) {
            module.exports = function() {
                var timeout;
                return {
                    request: function(request) {
                        if (request.timeout) {
                            timeout = setTimeout(function() {
                                request.cancel();
                            }, request.timeout);
                        }
                        return request;
                    },
                    response: function(response) {
                        clearTimeout(timeout);
                        return response;
                    }
                };
            };
        }, {}
    ],
    111: [
        function(require, module, exports) {
            function install(Vue) {
                var _ = require('./util');
                _.config = Vue.config;
                _.warning = Vue.util.warn;
                _.nextTick = Vue.util.nextTick;
                Vue.url = require('./url');
                Vue.http = require('./http');
                Vue.resource = require('./resource');
                Vue.Promise = require('./promise');
                Object.defineProperties(Vue.prototype, {
                    $url: {
                        get: function() {
                            return _.options(Vue.url, this, this.$options.url);
                        }
                    },
                    $http: {
                        get: function() {
                            return _.options(Vue.http, this, this.$options.http);
                        }
                    },
                    $resource: {
                        get: function() {
                            return Vue.resource.bind(this);
                        }
                    },
                    $promise: {
                        get: function() {
                            return function(executor) {
                                return new Vue.Promise(executor, this);
                            }.bind(this);
                        }
                    }
                });
            }
            if (window.Vue) {
                Vue.use(install);
            }
            module.exports = install;
        }, {
            "./http": 105,
            "./promise": 114,
            "./resource": 115,
            "./url": 116,
            "./util": 121
        }
    ],
    112: [
        function(require, module, exports) {
            var _ = require('../util');
            var RESOLVED = 0;
            var REJECTED = 1;
            var PENDING = 2;

            function Promise(executor) {
                this.state = PENDING;
                this.value = undefined;
                this.deferred = [];
                var promise = this;
                try {
                    executor(function(x) {
                        promise.resolve(x);
                    }, function(r) {
                        promise.reject(r);
                    });
                } catch (e) {
                    promise.reject(e);
                }
            }
            Promise.reject = function(r) {
                return new Promise(function(resolve, reject) {
                    reject(r);
                });
            };
            Promise.resolve = function(x) {
                return new Promise(function(resolve, reject) {
                    resolve(x);
                });
            };
            Promise.all = function all(iterable) {
                return new Promise(function(resolve, reject) {
                    var count = 0,
                        result = [];
                    if (iterable.length === 0) {
                        resolve(result);
                    }

                    function resolver(i) {
                        return function(x) {
                            result[i] = x;
                            count += 1;
                            if (count === iterable.length) {
                                resolve(result);
                            }
                        };
                    }
                    for (var i = 0; i < iterable.length; i += 1) {
                        Promise.resolve(iterable[i]).then(resolver(i), reject);
                    }
                });
            };
            Promise.race = function race(iterable) {
                return new Promise(function(resolve, reject) {
                    for (var i = 0; i < iterable.length; i += 1) {
                        Promise.resolve(iterable[i]).then(resolve, reject);
                    }
                });
            };
            var p = Promise.prototype;
            p.resolve = function resolve(x) {
                var promise = this;
                if (promise.state === PENDING) {
                    if (x === promise) {
                        throw new TypeError('Promise settled with itself.');
                    }
                    var called = false;
                    try {
                        var then = x && x['then'];
                        if (x !== null && typeof x === 'object' && typeof then === 'function') {
                            then.call(x, function(x) {
                                if (!called) {
                                    promise.resolve(x);
                                }
                                called = true;
                            }, function(r) {
                                if (!called) {
                                    promise.reject(r);
                                }
                                called = true;
                            });
                            return;
                        }
                    } catch (e) {
                        if (!called) {
                            promise.reject(e);
                        }
                        return;
                    }
                    promise.state = RESOLVED;
                    promise.value = x;
                    promise.notify();
                }
            };
            p.reject = function reject(reason) {
                var promise = this;
                if (promise.state === PENDING) {
                    if (reason === promise) {
                        throw new TypeError('Promise settled with itself.');
                    }
                    promise.state = REJECTED;
                    promise.value = reason;
                    promise.notify();
                }
            };
            p.notify = function notify() {
                var promise = this;
                _.nextTick(function() {
                    if (promise.state !== PENDING) {
                        while (promise.deferred.length) {
                            var deferred = promise.deferred.shift(),
                                onResolved = deferred[0],
                                onRejected = deferred[1],
                                resolve = deferred[2],
                                reject = deferred[3];
                            try {
                                if (promise.state === RESOLVED) {
                                    if (typeof onResolved === 'function') {
                                        resolve(onResolved.call(undefined, promise.value));
                                    } else {
                                        resolve(promise.value);
                                    }
                                } else if (promise.state === REJECTED) {
                                    if (typeof onRejected === 'function') {
                                        resolve(onRejected.call(undefined, promise.value));
                                    } else {
                                        reject(promise.value);
                                    }
                                }
                            } catch (e) {
                                reject(e);
                            }
                        }
                    }
                });
            };
            p.then = function then(onResolved, onRejected) {
                var promise = this;
                return new Promise(function(resolve, reject) {
                    promise.deferred.push([onResolved, onRejected, resolve, reject]);
                    promise.notify();
                });
            };
            p.catch = function(onRejected) {
                return this.then(undefined, onRejected);
            };
            module.exports = Promise;
        }, {
            "../util": 121
        }
    ],
    113: [
        function(require, module, exports) {
            exports.expand = function(url, params, variables) {
                var tmpl = this.parse(url),
                    expanded = tmpl.expand(params);
                if (variables) {
                    variables.push.apply(variables, tmpl.vars);
                }
                return expanded;
            };
            exports.parse = function(template) {
                var operators = ['+', '#', '.', '/', ';', '?', '&'],
                    variables = [];
                return {
                    vars: variables,
                    expand: function(context) {
                        return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(_, expression, literal) {
                            if (expression) {
                                var operator = null,
                                    values = [];
                                if (operators.indexOf(expression.charAt(0)) !== -1) {
                                    operator = expression.charAt(0);
                                    expression = expression.substr(1);
                                }
                                expression.split(/,/g).forEach(function(variable) {
                                    var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                                    values.push.apply(values, exports.getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                                    variables.push(tmp[1]);
                                });
                                if (operator && operator !== '+') {
                                    var separator = ',';
                                    if (operator === '?') {
                                        separator = '&';
                                    } else if (operator !== '#') {
                                        separator = operator;
                                    }
                                    return (values.length !== 0 ? operator : '') + values.join(separator);
                                } else {
                                    return values.join(',');
                                }
                            } else {
                                return exports.encodeReserved(literal);
                            }
                        });
                    }
                };
            };
            exports.getValues = function(context, operator, key, modifier) {
                var value = context[key],
                    result = [];
                if (this.isDefined(value) && value !== '') {
                    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                        value = value.toString();
                        if (modifier && modifier !== '*') {
                            value = value.substring(0, parseInt(modifier, 10));
                        }
                        result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
                    } else {
                        if (modifier === '*') {
                            if (Array.isArray(value)) {
                                value.filter(this.isDefined).forEach(function(value) {
                                    result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
                                }, this);
                            } else {
                                Object.keys(value).forEach(function(k) {
                                    if (this.isDefined(value[k])) {
                                        result.push(this.encodeValue(operator, value[k], k));
                                    }
                                }, this);
                            }
                        } else {
                            var tmp = [];
                            if (Array.isArray(value)) {
                                value.filter(this.isDefined).forEach(function(value) {
                                    tmp.push(this.encodeValue(operator, value));
                                }, this);
                            } else {
                                Object.keys(value).forEach(function(k) {
                                    if (this.isDefined(value[k])) {
                                        tmp.push(encodeURIComponent(k));
                                        tmp.push(this.encodeValue(operator, value[k].toString()));
                                    }
                                }, this);
                            }
                            if (this.isKeyOperator(operator)) {
                                result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                            } else if (tmp.length !== 0) {
                                result.push(tmp.join(','));
                            }
                        }
                    }
                } else {
                    if (operator === ';') {
                        result.push(encodeURIComponent(key));
                    } else if (value === '' && (operator === '&' || operator === '?')) {
                        result.push(encodeURIComponent(key) + '=');
                    } else if (value === '') {
                        result.push('');
                    }
                }
                return result;
            };
            exports.isDefined = function(value) {
                return value !== undefined && value !== null;
            };
            exports.isKeyOperator = function(operator) {
                return operator === ';' || operator === '&' || operator === '?';
            };
            exports.encodeValue = function(operator, value, key) {
                value = (operator === '+' || operator === '#') ? this.encodeReserved(value) : encodeURIComponent(value);
                if (key) {
                    return encodeURIComponent(key) + '=' + value;
                } else {
                    return value;
                }
            };
            exports.encodeReserved = function(str) {
                return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
                    if (!/%[0-9A-Fa-f]/.test(part)) {
                        part = encodeURI(part);
                    }
                    return part;
                }).join('');
            };
        }, {}
    ],
    114: [
        function(require, module, exports) {
            var _ = require('./util');
            var PromiseObj = window.Promise || require('./lib/promise');

            function Promise(executor, context) {
                if (executor instanceof PromiseObj) {
                    this.promise = executor;
                } else {
                    this.promise = new PromiseObj(executor.bind(context));
                }
                this.context = context;
            }
            Promise.all = function(iterable, context) {
                return new Promise(PromiseObj.all(iterable), context);
            };
            Promise.resolve = function(value, context) {
                return new Promise(PromiseObj.resolve(value), context);
            };
            Promise.reject = function(reason, context) {
                return new Promise(PromiseObj.reject(reason), context);
            };
            Promise.race = function(iterable, context) {
                return new Promise(PromiseObj.race(iterable), context);
            };
            var p = Promise.prototype;
            p.bind = function(context) {
                this.context = context;
                return this;
            };
            p.then = function(fulfilled, rejected) {
                if (fulfilled && fulfilled.bind && this.context) {
                    fulfilled = fulfilled.bind(this.context);
                }
                if (rejected && rejected.bind && this.context) {
                    rejected = rejected.bind(this.context);
                }
                this.promise = this.promise.then(fulfilled, rejected);
                return this;
            };
            p.catch = function(rejected) {
                if (rejected && rejected.bind && this.context) {
                    rejected = rejected.bind(this.context);
                }
                this.promise = this.promise.catch(rejected);
                return this;
            };
            p.finally = function(callback) {
                return this.then(function(value) {
                    callback.call(this);
                    return value;
                }, function(reason) {
                    callback.call(this);
                    return PromiseObj.reject(reason);
                });
            };
            p.success = function(callback) {
                _.warn('The `success` method has been deprecated. Use the `then` method instead.');
                return this.then(function(response) {
                    return callback.call(this, response.data, response.status, response) || response;
                });
            };
            p.error = function(callback) {
                _.warn('The `error` method has been deprecated. Use the `catch` method instead.');
                return this.catch(function(response) {
                    return callback.call(this, response.data, response.status, response) || response;
                });
            };
            p.always = function(callback) {
                _.warn('The `always` method has been deprecated. Use the `finally` method instead.');
                var cb = function(response) {
                    return callback.call(this, response.data, response.status, response) || response;
                };
                return this.then(cb, cb);
            };
            module.exports = Promise;
        }, {
            "./lib/promise": 112,
            "./util": 121
        }
    ],
    115: [
        function(require, module, exports) {
            var _ = require('./util');

            function Resource(url, params, actions, options) {
                var self = this,
                    resource = {};
                actions = _.extend({}, Resource.actions, actions);
                _.each(actions, function(action, name) {
                    action = _.merge({
                        url: url,
                        params: params || {}
                    }, options, action);
                    resource[name] = function() {
                        return (self.$http || _.http)(opts(action, arguments));
                    };
                });
                return resource;
            }

            function opts(action, args) {
                var options = _.extend({}, action),
                    params = {},
                    data, success, error;
                switch (args.length) {
                    case 4:
                        error = args[3];
                        success = args[2];
                    case 3:
                    case 2:
                        if (_.isFunction(args[1])) {
                            if (_.isFunction(args[0])) {
                                success = args[0];
                                error = args[1];
                                break;
                            }
                            success = args[1];
                            error = args[2];
                        } else {
                            params = args[0];
                            data = args[1];
                            success = args[2];
                            break;
                        }
                    case 1:
                        if (_.isFunction(args[0])) {
                            success = args[0];
                        } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
                            data = args[0];
                        } else {
                            params = args[0];
                        }
                        break;
                    case 0:
                        break;
                    default:
                        throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
                }
                options.data = data;
                options.params = _.extend({}, options.params, params);
                if (success) {
                    options.success = success;
                }
                if (error) {
                    options.error = error;
                }
                return options;
            }
            Resource.actions = {
                get: {
                    method: 'GET'
                },
                save: {
                    method: 'POST'
                },
                query: {
                    method: 'GET'
                },
                update: {
                    method: 'PUT'
                },
                remove: {
                    method: 'DELETE'
                },
                delete: {
                    method: 'DELETE'
                }
            };
            module.exports = _.resource = Resource;
        }, {
            "./util": 121
        }
    ],
    116: [
        function(require, module, exports) {
            var _ = require('../util');
            var ie = document.documentMode;
            var el = document.createElement('a');

            function Url(url, params) {
                var options = url,
                    transform;
                if (_.isString(url)) {
                    options = {
                        url: url,
                        params: params
                    };
                }
                options = _.merge({}, Url.options, this.$options, options);
                Url.transforms.forEach(function(handler) {
                    transform = factory(handler, transform, this.$vm);
                }, this);
                return transform(options);
            };
            Url.options = {
                url: '',
                root: null,
                params: {}
            };
            Url.transforms = [require('./template'), require('./legacy'), require('./query'), require('./root')];
            Url.params = function(obj) {
                var params = [],
                    escape = encodeURIComponent;
                params.add = function(key, value) {
                    if (_.isFunction(value)) {
                        value = value();
                    }
                    if (value === null) {
                        value = '';
                    }
                    this.push(escape(key) + '=' + escape(value));
                };
                serialize(params, obj);
                return params.join('&').replace(/%20/g, '+');
            };
            Url.parse = function(url) {
                if (ie) {
                    el.href = url;
                    url = el.href;
                }
                el.href = url;
                return {
                    href: el.href,
                    protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
                    port: el.port,
                    host: el.host,
                    hostname: el.hostname,
                    pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
                    search: el.search ? el.search.replace(/^\?/, '') : '',
                    hash: el.hash ? el.hash.replace(/^#/, '') : ''
                };
            };

            function factory(handler, next, vm) {
                return function(options) {
                    return handler.call(vm, options, next);
                };
            }

            function serialize(params, obj, scope) {
                var array = _.isArray(obj),
                    plain = _.isPlainObject(obj),
                    hash;
                _.each(obj, function(value, key) {
                    hash = _.isObject(value) || _.isArray(value);
                    if (scope) {
                        key = scope + '[' + (plain || hash ? key : '') + ']';
                    }
                    if (!scope && array) {
                        params.add(value.name, value.value);
                    } else if (hash) {
                        serialize(params, value, key);
                    } else {
                        params.add(key, value);
                    }
                });
            }
            module.exports = _.url = Url;
        }, {
            "../util": 121,
            "./legacy": 117,
            "./query": 118,
            "./root": 119,
            "./template": 120
        }
    ],
    117: [
        function(require, module, exports) {
            var _ = require('../util');
            module.exports = function(options, next) {
                var variables = [],
                    url = next(options);
                url = url.replace(/(\/?):([a-z]\w*)/gi, function(match, slash, name) {
                    _.warn('The `:' + name + '` parameter syntax has been deprecated. Use the `{' + name + '}` syntax instead.');
                    if (options.params[name]) {
                        variables.push(name);
                        return slash + encodeUriSegment(options.params[name]);
                    }
                    return '';
                });
                variables.forEach(function(key) {
                    delete options.params[key];
                });
                return url;
            };

            function encodeUriSegment(value) {
                return encodeUriQuery(value, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
            }

            function encodeUriQuery(value, spaces) {
                return encodeURIComponent(value).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, (spaces ? '%20' : '+'));
            }
        }, {
            "../util": 121
        }
    ],
    118: [
        function(require, module, exports) {
            var _ = require('../util');
            module.exports = function(options, next) {
                var urlParams = Object.keys(_.url.options.params),
                    query = {},
                    url = next(options);
                _.each(options.params, function(value, key) {
                    if (urlParams.indexOf(key) === -1) {
                        query[key] = value;
                    }
                });
                query = _.url.params(query);
                if (query) {
                    url += (url.indexOf('?') == -1 ? '?' : '&') + query;
                }
                return url;
            };
        }, {
            "../util": 121
        }
    ],
    119: [
        function(require, module, exports) {
            var _ = require('../util');
            module.exports = function(options, next) {
                var url = next(options);
                if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
                    url = options.root + '/' + url;
                }
                return url;
            };
        }, {
            "../util": 121
        }
    ],
    120: [
        function(require, module, exports) {
            var UrlTemplate = require('../lib/url-template');
            module.exports = function(options) {
                var variables = [],
                    url = UrlTemplate.expand(options.url, options.params, variables);
                variables.forEach(function(key) {
                    delete options.params[key];
                });
                return url;
            };
        }, {
            "../lib/url-template": 113
        }
    ],
    121: [
        function(require, module, exports) {
            var _ = exports,
                array = [],
                console = window.console;
            _.warn = function(msg) {
                if (console && _.warning && (!_.config.silent || _.config.debug)) {
                    console.warn('[VueResource warn]: ' + msg);
                }
            };
            _.error = function(msg) {
                if (console) {
                    console.error(msg);
                }
            };
            _.trim = function(str) {
                return str.replace(/^\s*|\s*$/g, '');
            };
            _.toLower = function(str) {
                return str ? str.toLowerCase() : '';
            };
            _.isArray = Array.isArray;
            _.isString = function(val) {
                return typeof val === 'string';
            };
            _.isFunction = function(val) {
                return typeof val === 'function';
            };
            _.isObject = function(obj) {
                return obj !== null && typeof obj === 'object';
            };
            _.isPlainObject = function(obj) {
                return _.isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
            };
            _.options = function(fn, obj, options) {
                options = options || {};
                if (_.isFunction(options)) {
                    options = options.call(obj);
                }
                return _.merge(fn.bind({
                    $vm: obj,
                    $options: options
                }), fn, {
                    $options: options
                });
            };
            _.each = function(obj, iterator) {
                var i, key;
                if (typeof obj.length == 'number') {
                    for (i = 0; i < obj.length; i++) {
                        iterator.call(obj[i], obj[i], i);
                    }
                } else if (_.isObject(obj)) {
                    for (key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            iterator.call(obj[key], obj[key], key);
                        }
                    }
                }
                return obj;
            };
            _.defaults = function(target, source) {
                for (var key in source) {
                    if (target[key] === undefined) {
                        target[key] = source[key];
                    }
                }
                return target;
            };
            _.extend = function(target) {
                var args = array.slice.call(arguments, 1);
                args.forEach(function(arg) {
                    merge(target, arg);
                });
                return target;
            };
            _.merge = function(target) {
                var args = array.slice.call(arguments, 1);
                args.forEach(function(arg) {
                    merge(target, arg, true);
                });
                return target;
            };

            function merge(target, source, deep) {
                for (var key in source) {
                    if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
                        if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
                            target[key] = {};
                        }
                        if (_.isArray(source[key]) && !_.isArray(target[key])) {
                            target[key] = [];
                        }
                        merge(target[key], source[key], deep);
                    } else if (source[key] !== undefined) {
                        target[key] = source[key];
                    }
                }
            }

        }, {}
    ],
    122: [
        function(require, module, exports) {
            (function(process, global) {
                /*!
                 * Vue.js v1.0.16
                 * (c) 2016 Evan You
                 * Released under the MIT License.
                 */
                'use strict';

                function set(obj, key, val) {
                    if (hasOwn(obj, key)) {
                        obj[key] = val;
                        return;
                    }
                    if (obj._isVue) {
                        set(obj._data, key, val);
                        return;
                    }
                    var ob = obj.__ob__;
                    if (!ob) {
                        obj[key] = val;
                        return;
                    }
                    ob.convert(key, val);
                    ob.dep.notify();
                    if (ob.vms) {
                        var i = ob.vms.length;
                        while (i--) {
                            var vm = ob.vms[i];
                            vm._proxy(key);
                            vm._digest();
                        }
                    }
                    return val;
                }

                /**
                 * Delete a property and trigger change if necessary.
                 *
                 * @param {Object} obj
                 * @param {String} key
                 */

                function del(obj, key) {
                    if (!hasOwn(obj, key)) {
                        return;
                    }
                    delete obj[key];
                    var ob = obj.__ob__;
                    if (!ob) {
                        return;
                    }
                    ob.dep.notify();
                    if (ob.vms) {
                        var i = ob.vms.length;
                        while (i--) {
                            var vm = ob.vms[i];
                            vm._unproxy(key);
                            vm._digest();
                        }
                    }
                }

                var hasOwnProperty = Object.prototype.hasOwnProperty;
                /**
                 * Check whether the object has the property.
                 *
                 * @param {Object} obj
                 * @param {String} key
                 * @return {Boolean}
                 */

                function hasOwn(obj, key) {
                    return hasOwnProperty.call(obj, key);
                }

                /**
                 * Check if an expression is a literal value.
                 *
                 * @param {String} exp
                 * @return {Boolean}
                 */

                var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

                function isLiteral(exp) {
                    return literalValueRE.test(exp);
                }

                /**
                 * Check if a string starts with $ or _
                 *
                 * @param {String} str
                 * @return {Boolean}
                 */

                function isReserved(str) {
                    var c = (str + '').charCodeAt(0);
                    return c === 0x24 || c === 0x5F;
                }

                /**
                 * Guard text output, make sure undefined outputs
                 * empty string
                 *
                 * @param {*} value
                 * @return {String}
                 */

                function _toString(value) {
                    return value == null ? '' : value.toString();
                }

                /**
                 * Check and convert possible numeric strings to numbers
                 * before setting back to data
                 *
                 * @param {*} value
                 * @return {*|Number}
                 */

                function toNumber(value) {
                    if (typeof value !== 'string') {
                        return value;
                    } else {
                        var parsed = Number(value);
                        return isNaN(parsed) ? value : parsed;
                    }
                }

                /**
                 * Convert string boolean literals into real booleans.
                 *
                 * @param {*} value
                 * @return {*|Boolean}
                 */

                function toBoolean(value) {
                    return value === 'true' ? true : value === 'false' ? false : value;
                }

                /**
                 * Strip quotes from a string
                 *
                 * @param {String} str
                 * @return {String | false}
                 */

                function stripQuotes(str) {
                    var a = str.charCodeAt(0);
                    var b = str.charCodeAt(str.length - 1);
                    return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
                }

                /**
                 * Camelize a hyphen-delmited string.
                 *
                 * @param {String} str
                 * @return {String}
                 */

                var camelizeRE = /-(\w)/g;

                function camelize(str) {
                    return str.replace(camelizeRE, toUpper);
                }

                function toUpper(_, c) {
                    return c ? c.toUpperCase() : '';
                }

                /**
                 * Hyphenate a camelCase string.
                 *
                 * @param {String} str
                 * @return {String}
                 */

                var hyphenateRE = /([a-z\d])([A-Z])/g;

                function hyphenate(str) {
                    return str.replace(hyphenateRE, '$1-$2').toLowerCase();
                }

                /**
                 * Converts hyphen/underscore/slash delimitered names into
                 * camelized classNames.
                 *
                 * e.g. my-component => MyComponent
                 *      some_else    => SomeElse
                 *      some/comp    => SomeComp
                 *
                 * @param {String} str
                 * @return {String}
                 */

                var classifyRE = /(?:^|[-_\/])(\w)/g;

                function classify(str) {
                    return str.replace(classifyRE, toUpper);
                }

                /**
                 * Simple bind, faster than native
                 *
                 * @param {Function} fn
                 * @param {Object} ctx
                 * @return {Function}
                 */

                function bind$1(fn, ctx) {
                    return function(a) {
                        var l = arguments.length;
                        return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
                    };
                }

                /**
                 * Convert an Array-like object to a real Array.
                 *
                 * @param {Array-like} list
                 * @param {Number} [start] - start index
                 * @return {Array}
                 */

                function toArray(list, start) {
                    start = start || 0;
                    var i = list.length - start;
                    var ret = new Array(i);
                    while (i--) {
                        ret[i] = list[i + start];
                    }
                    return ret;
                }

                /**
                 * Mix properties into target object.
                 *
                 * @param {Object} to
                 * @param {Object} from
                 */

                function extend(to, from) {
                    var keys = Object.keys(from);
                    var i = keys.length;
                    while (i--) {
                        to[keys[i]] = from[keys[i]];
                    }
                    return to;
                }

                /**
                 * Quick object check - this is primarily used to tell
                 * Objects from primitive values when we know the value
                 * is a JSON-compliant type.
                 *
                 * @param {*} obj
                 * @return {Boolean}
                 */

                function isObject(obj) {
                    return obj !== null && typeof obj === 'object';
                }

                /**
                 * Strict object type check. Only returns true
                 * for plain JavaScript objects.
                 *
                 * @param {*} obj
                 * @return {Boolean}
                 */

                var toString = Object.prototype.toString;
                var OBJECT_STRING = '[object Object]';

                function isPlainObject(obj) {
                    return toString.call(obj) === OBJECT_STRING;
                }

                /**
                 * Array type check.
                 *
                 * @param {*} obj
                 * @return {Boolean}
                 */

                var isArray = Array.isArray;

                /**
                 * Define a non-enumerable property
                 *
                 * @param {Object} obj
                 * @param {String} key
                 * @param {*} val
                 * @param {Boolean} [enumerable]
                 */

                function def(obj, key, val, enumerable) {
                    Object.defineProperty(obj, key, {
                        value: val,
                        enumerable: !!enumerable,
                        writable: true,
                        configurable: true
                    });
                }

                /**
                 * Debounce a function so it only gets called after the
                 * input stops arriving after the given wait period.
                 *
                 * @param {Function} func
                 * @param {Number} wait
                 * @return {Function} - the debounced function
                 */

                function _debounce(func, wait) {
                    var timeout, args, context, timestamp, result;
                    var later = function later() {
                        var last = Date.now() - timestamp;
                        if (last < wait && last >= 0) {
                            timeout = setTimeout(later, wait - last);
                        } else {
                            timeout = null;
                            result = func.apply(context, args);
                            if (!timeout) context = args = null;
                        }
                    };
                    return function() {
                        context = this;
                        args = arguments;
                        timestamp = Date.now();
                        if (!timeout) {
                            timeout = setTimeout(later, wait);
                        }
                        return result;
                    };
                }

                /**
                 * Manual indexOf because it's slightly faster than
                 * native.
                 *
                 * @param {Array} arr
                 * @param {*} obj
                 */

                function indexOf(arr, obj) {
                    var i = arr.length;
                    while (i--) {
                        if (arr[i] === obj) return i;
                    }
                    return -1;
                }

                /**
                 * Make a cancellable version of an async callback.
                 *
                 * @param {Function} fn
                 * @return {Function}
                 */

                function cancellable(fn) {
                    var cb = function cb() {
                        if (!cb.cancelled) {
                            return fn.apply(this, arguments);
                        }
                    };
                    cb.cancel = function() {
                        cb.cancelled = true;
                    };
                    return cb;
                }

                /**
                 * Check if two values are loosely equal - that is,
                 * if they are plain objects, do they have the same shape?
                 *
                 * @param {*} a
                 * @param {*} b
                 * @return {Boolean}
                 */

                function looseEqual(a, b) {
                    /* eslint-disable eqeqeq */
                    return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
                    /* eslint-enable eqeqeq */
                }

                var hasProto = ('__proto__' in {});

                // Browser environment sniffing
                var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

                var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

                var isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;

                var isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;

                var transitionProp = undefined;
                var transitionEndEvent = undefined;
                var animationProp = undefined;
                var animationEndEvent = undefined;

                // Transition property/event sniffing
                if (inBrowser && !isIE9) {
                    var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
                    var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
                    transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
                    transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
                    animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
                    animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
                }

                /**
                 * Defer a task to execute it asynchronously. Ideally this
                 * should be executed as a microtask, so we leverage
                 * MutationObserver if it's available, and fallback to
                 * setTimeout(0).
                 *
                 * @param {Function} cb
                 * @param {Object} ctx
                 */

                var nextTick = (function() {
                    var callbacks = [];
                    var pending = false;
                    var timerFunc;

                    function nextTickHandler() {
                        pending = false;
                        var copies = callbacks.slice(0);
                        callbacks = [];
                        for (var i = 0; i < copies.length; i++) {
                            copies[i]();
                        }
                    }

                    /* istanbul ignore if */
                    if (typeof MutationObserver !== 'undefined') {
                        var counter = 1;
                        var observer = new MutationObserver(nextTickHandler);
                        var textNode = document.createTextNode(counter);
                        observer.observe(textNode, {
                            characterData: true
                        });
                        timerFunc = function() {
                            counter = (counter + 1) % 2;
                            textNode.data = counter;
                        };
                    } else {
                        // webpack attempts to inject a shim for setImmediate
                        // if it is used as a global, so we have to work around that to
                        // avoid bundling unnecessary code.
                        var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
                        timerFunc = context.setImmediate || setTimeout;
                    }
                    return function(cb, ctx) {
                        var func = ctx ? function() {
                            cb.call(ctx);
                        } : cb;
                        callbacks.push(func);
                        if (pending) return;
                        pending = true;
                        timerFunc(nextTickHandler, 0);
                    };
                })();

                function Cache(limit) {
                    this.size = 0;
                    this.limit = limit;
                    this.head = this.tail = undefined;
                    this._keymap = Object.create(null);
                }

                var p = Cache.prototype;

                /**
                 * Put <value> into the cache associated with <key>.
                 * Returns the entry which was removed to make room for
                 * the new entry. Otherwise undefined is returned.
                 * (i.e. if there was enough room already).
                 *
                 * @param {String} key
                 * @param {*} value
                 * @return {Entry|undefined}
                 */

                p.put = function(key, value) {
                    var removed;
                    if (this.size === this.limit) {
                        removed = this.shift();
                    }

                    var entry = this.get(key, true);
                    if (!entry) {
                        entry = {
                            key: key
                        };
                        this._keymap[key] = entry;
                        if (this.tail) {
                            this.tail.newer = entry;
                            entry.older = this.tail;
                        } else {
                            this.head = entry;
                        }
                        this.tail = entry;
                        this.size++;
                    }
                    entry.value = value;

                    return removed;
                };

                /**
                 * Purge the least recently used (oldest) entry from the
                 * cache. Returns the removed entry or undefined if the
                 * cache was empty.
                 */

                p.shift = function() {
                    var entry = this.head;
                    if (entry) {
                        this.head = this.head.newer;
                        this.head.older = undefined;
                        entry.newer = entry.older = undefined;
                        this._keymap[entry.key] = undefined;
                        this.size--;
                    }
                    return entry;
                };

                /**
                 * Get and register recent use of <key>. Returns the value
                 * associated with <key> or undefined if not in cache.
                 *
                 * @param {String} key
                 * @param {Boolean} returnEntry
                 * @return {Entry|*}
                 */

                p.get = function(key, returnEntry) {
                    var entry = this._keymap[key];
                    if (entry === undefined) return;
                    if (entry === this.tail) {
                        return returnEntry ? entry : entry.value;
                    }
                    // HEAD--------------TAIL
                    //   <.older   .newer>
                    //  <--- add direction --
                    //   A  B  C  <D>  E
                    if (entry.newer) {
                        if (entry === this.head) {
                            this.head = entry.newer;
                        }
                        entry.newer.older = entry.older; // C <-- E.
                    }
                    if (entry.older) {
                        entry.older.newer = entry.newer; // C. --> E
                    }
                    entry.newer = undefined; // D --x
                    entry.older = this.tail; // D. --> E
                    if (this.tail) {
                        this.tail.newer = entry; // E. <-- D
                    }
                    this.tail = entry;
                    return returnEntry ? entry : entry.value;
                };

                var cache$1 = new Cache(1000);
                var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
                var reservedArgRE = /^in$|^-?\d+/;

                /**
                 * Parser state
                 */

                var str;
                var dir;
                var c;
                var prev;
                var i;
                var l;
                var lastFilterIndex;
                var inSingle;
                var inDouble;
                var curly;
                var square;
                var paren;
                /**
                 * Push a filter to the current directive object
                 */

                function pushFilter() {
                    var exp = str.slice(lastFilterIndex, i).trim();
                    var filter;
                    if (exp) {
                        filter = {};
                        var tokens = exp.match(filterTokenRE);
                        filter.name = tokens[0];
                        if (tokens.length > 1) {
                            filter.args = tokens.slice(1).map(processFilterArg);
                        }
                    }
                    if (filter) {
                        (dir.filters = dir.filters || []).push(filter);
                    }
                    lastFilterIndex = i + 1;
                }

                /**
                 * Check if an argument is dynamic and strip quotes.
                 *
                 * @param {String} arg
                 * @return {Object}
                 */

                function processFilterArg(arg) {
                    if (reservedArgRE.test(arg)) {
                        return {
                            value: toNumber(arg),
                            dynamic: false
                        };
                    } else {
                        var stripped = stripQuotes(arg);
                        var dynamic = stripped === arg;
                        return {
                            value: dynamic ? arg : stripped,
                            dynamic: dynamic
                        };
                    }
                }

                /**
                 * Parse a directive value and extract the expression
                 * and its filters into a descriptor.
                 *
                 * Example:
                 *
                 * "a + 1 | uppercase" will yield:
                 * {
                 *   expression: 'a + 1',
                 *   filters: [
                 *     { name: 'uppercase', args: null }
                 *   ]
                 * }
                 *
                 * @param {String} str
                 * @return {Object}
                 */

                function parseDirective(s) {

                    var hit = cache$1.get(s);
                    if (hit) {
                        return hit;
                    }

                    // reset parser state
                    str = s;
                    inSingle = inDouble = false;
                    curly = square = paren = 0;
                    lastFilterIndex = 0;
                    dir = {};

                    for (i = 0, l = str.length; i < l; i++) {
                        prev = c;
                        c = str.charCodeAt(i);
                        if (inSingle) {
                            // check single quote
                            if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
                        } else if (inDouble) {
                            // check double quote
                            if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
                        } else if (c === 0x7C && // pipe
                            str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
                            if (dir.expression == null) {
                                // first filter, end of expression
                                lastFilterIndex = i + 1;
                                dir.expression = str.slice(0, i).trim();
                            } else {
                                // already has filter
                                pushFilter();
                            }
                        } else {
                            switch (c) {
                                case 0x22:
                                    inDouble = true;
                                    break; // "
                                case 0x27:
                                    inSingle = true;
                                    break; // '
                                case 0x28:
                                    paren++;
                                    break; // (
                                case 0x29:
                                    paren--;
                                    break; // )
                                case 0x5B:
                                    square++;
                                    break; // [
                                case 0x5D:
                                    square--;
                                    break; // ]
                                case 0x7B:
                                    curly++;
                                    break; // {
                                case 0x7D:
                                    curly--;
                                    break; // }
                            }
                        }
                    }

                    if (dir.expression == null) {
                        dir.expression = str.slice(0, i).trim();
                    } else if (lastFilterIndex !== 0) {
                        pushFilter();
                    }

                    cache$1.put(s, dir);
                    return dir;
                }

                var directive = Object.freeze({
                    parseDirective: parseDirective
                });

                var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
                var cache = undefined;
                var tagRE = undefined;
                var htmlRE = undefined;
                /**
                 * Escape a string so it can be used in a RegExp
                 * constructor.
                 *
                 * @param {String} str
                 */

                function escapeRegex(str) {
                    return str.replace(regexEscapeRE, '\\$&');
                }

                function compileRegex() {
                    var open = escapeRegex(config.delimiters[0]);
                    var close = escapeRegex(config.delimiters[1]);
                    var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
                    var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
                    tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
                    htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
                    // reset cache
                    cache = new Cache(1000);
                }

                /**
                 * Parse a template text string into an array of tokens.
                 *
                 * @param {String} text
                 * @return {Array<Object> | null}
                 *               - {String} type
                 *               - {String} value
                 *               - {Boolean} [html]
                 *               - {Boolean} [oneTime]
                 */

                function parseText(text) {
                    if (!cache) {
                        compileRegex();
                    }
                    var hit = cache.get(text);
                    if (hit) {
                        return hit;
                    }
                    text = text.replace(/\n/g, '');
                    if (!tagRE.test(text)) {
                        return null;
                    }
                    var tokens = [];
                    var lastIndex = tagRE.lastIndex = 0;
                    var match, index, html, value, first, oneTime;
                    /* eslint-disable no-cond-assign */
                    while (match = tagRE.exec(text)) {
                        /* eslint-enable no-cond-assign */
                        index = match.index;
                        // push text token
                        if (index > lastIndex) {
                            tokens.push({
                                value: text.slice(lastIndex, index)
                            });
                        }
                        // tag token
                        html = htmlRE.test(match[0]);
                        value = html ? match[1] : match[2];
                        first = value.charCodeAt(0);
                        oneTime = first === 42; // *
                        value = oneTime ? value.slice(1) : value;
                        tokens.push({
                            tag: true,
                            value: value.trim(),
                            html: html,
                            oneTime: oneTime
                        });
                        lastIndex = index + match[0].length;
                    }
                    if (lastIndex < text.length) {
                        tokens.push({
                            value: text.slice(lastIndex)
                        });
                    }
                    cache.put(text, tokens);
                    return tokens;
                }

                /**
                 * Format a list of tokens into an expression.
                 * e.g. tokens parsed from 'a {{b}} c' can be serialized
                 * into one single expression as '"a " + b + " c"'.
                 *
                 * @param {Array} tokens
                 * @param {Vue} [vm]
                 * @return {String}
                 */

                function tokensToExp(tokens, vm) {
                    if (tokens.length > 1) {
                        return tokens.map(function(token) {
                            return formatToken(token, vm);
                        }).join('+');
                    } else {
                        return formatToken(tokens[0], vm, true);
                    }
                }

                /**
                 * Format a single token.
                 *
                 * @param {Object} token
                 * @param {Vue} [vm]
                 * @param {Boolean} [single]
                 * @return {String}
                 */

                function formatToken(token, vm, single) {
                    return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
                }

                /**
                 * For an attribute with multiple interpolation tags,
                 * e.g. attr="some-{{thing | filter}}", in order to combine
                 * the whole thing into a single watchable expression, we
                 * have to inline those filters. This function does exactly
                 * that. This is a bit hacky but it avoids heavy changes
                 * to directive parser and watcher mechanism.
                 *
                 * @param {String} exp
                 * @param {Boolean} single
                 * @return {String}
                 */

                var filterRE$1 = /[^|]\|[^|]/;

                function inlineFilters(exp, single) {
                    if (!filterRE$1.test(exp)) {
                        return single ? exp : '(' + exp + ')';
                    } else {
                        var dir = parseDirective(exp);
                        if (!dir.filters) {
                            return '(' + exp + ')';
                        } else {
                            return 'this._applyFilters(' + dir.expression + // value
                                ',null,' + // oldValue (null for read)
                                JSON.stringify(dir.filters) + // filter descriptors
                                ',false)'; // write?
                        }
                    }
                }

                var text$1 = Object.freeze({
                    compileRegex: compileRegex,
                    parseText: parseText,
                    tokensToExp: tokensToExp
                });

                var delimiters = ['{{', '}}'];
                var unsafeDelimiters = ['{{{', '}}}'];

                var config = Object.defineProperties({

                    /**
                     * Whether to print debug messages.
                     * Also enables stack trace for warnings.
                     *
                     * @type {Boolean}
                     */

                    debug: false,

                    /**
                     * Whether to suppress warnings.
                     *
                     * @type {Boolean}
                     */

                    silent: false,

                    /**
                     * Whether to use async rendering.
                     */

                    async: true,

                    /**
                     * Whether to warn against errors caught when evaluating
                     * expressions.
                     */

                    warnExpressionErrors: true,

                    /**
                     * Whether or not to handle fully object properties which
                     * are already backed by getters and seters. Depending on
                     * use case and environment, this might introduce non-neglible
                     * performance penalties.
                     */
                    convertAllProperties: false,

                    /**
                     * Internal flag to indicate the delimiters have been
                     * changed.
                     *
                     * @type {Boolean}
                     */

                    _delimitersChanged: true,

                    /**
                     * List of asset types that a component can own.
                     *
                     * @type {Array}
                     */

                    _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

                    /**
                     * prop binding modes
                     */

                    _propBindingModes: {
                        ONE_WAY: 0,
                        TWO_WAY: 1,
                        ONE_TIME: 2
                    },

                    /**
                     * Max circular updates allowed in a batcher flush cycle.
                     */

                    _maxUpdateCount: 100

                }, {
                    delimiters: {
                        /**
                         * Interpolation delimiters. Changing these would trigger
                         * the text parser to re-compile the regular expressions.
                         *
                         * @type {Array<String>}
                         */

                        get: function get() {
                            return delimiters;
                        },
                        set: function set(val) {
                            delimiters = val;
                            compileRegex();
                        },
                        configurable: true,
                        enumerable: true
                    },
                    unsafeDelimiters: {
                        get: function get() {
                            return unsafeDelimiters;
                        },
                        set: function set(val) {
                            unsafeDelimiters = val;
                            compileRegex();
                        },
                        configurable: true,
                        enumerable: true
                    }
                });

                var warn = undefined;

                if (process.env.NODE_ENV !== 'production') {
                    (function() {
                        var hasConsole = typeof console !== 'undefined';
                        warn = function(msg, e) {
                            if (hasConsole && (!config.silent || config.debug)) {
                                console.warn('[Vue warn]: ' + msg);
                                /* istanbul ignore if */
                                if (config.debug) {
                                    if (e) {
                                        throw e;
                                    } else {
                                        console.warn(new Error('Warning Stack Trace').stack);
                                    }
                                }
                            }
                        };
                    })();
                }

                /**
                 * Append with transition.
                 *
                 * @param {Element} el
                 * @param {Element} target
                 * @param {Vue} vm
                 * @param {Function} [cb]
                 */

                function appendWithTransition(el, target, vm, cb) {
                    applyTransition(el, 1, function() {
                        target.appendChild(el);
                    }, vm, cb);
                }

                /**
                 * InsertBefore with transition.
                 *
                 * @param {Element} el
                 * @param {Element} target
                 * @param {Vue} vm
                 * @param {Function} [cb]
                 */

                function beforeWithTransition(el, target, vm, cb) {
                    applyTransition(el, 1, function() {
                        before(el, target);
                    }, vm, cb);
                }

                /**
                 * Remove with transition.
                 *
                 * @param {Element} el
                 * @param {Vue} vm
                 * @param {Function} [cb]
                 */

                function removeWithTransition(el, vm, cb) {
                    applyTransition(el, -1, function() {
                        remove(el);
                    }, vm, cb);
                }

                /**
                 * Apply transitions with an operation callback.
                 *
                 * @param {Element} el
                 * @param {Number} direction
                 *                  1: enter
                 *                 -1: leave
                 * @param {Function} op - the actual DOM operation
                 * @param {Vue} vm
                 * @param {Function} [cb]
                 */

                function applyTransition(el, direction, op, vm, cb) {
                    var transition = el.__v_trans;
                    if (!transition ||
                        // skip if there are no js hooks and CSS transition is
                        // not supported
                        !transition.hooks && !transitionEndEvent ||
                        // skip transitions for initial compile
                        !vm._isCompiled ||
                        // if the vm is being manipulated by a parent directive
                        // during the parent's compilation phase, skip the
                        // animation.
                        vm.$parent && !vm.$parent._isCompiled) {
                        op();
                        if (cb) cb();
                        return;
                    }
                    var action = direction > 0 ? 'enter' : 'leave';
                    transition[action](op, cb);
                }

                /**
                 * Query an element selector if it's not an element already.
                 *
                 * @param {String|Element} el
                 * @return {Element}
                 */

                function query(el) {
                    if (typeof el === 'string') {
                        var selector = el;
                        el = document.querySelector(el);
                        if (!el) {
                            process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
                        }
                    }
                    return el;
                }

                /**
                 * Check if a node is in the document.
                 * Note: document.documentElement.contains should work here
                 * but always returns false for comment nodes in phantomjs,
                 * making unit tests difficult. This is fixed by doing the
                 * contains() check on the node's parentNode instead of
                 * the node itself.
                 *
                 * @param {Node} node
                 * @return {Boolean}
                 */

                function inDoc(node) {
                    var doc = document.documentElement;
                    var parent = node && node.parentNode;
                    return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
                }

                /**
                 * Get and remove an attribute from a node.
                 *
                 * @param {Node} node
                 * @param {String} _attr
                 */

                function getAttr(node, _attr) {
                    var val = node.getAttribute(_attr);
                    if (val !== null) {
                        node.removeAttribute(_attr);
                    }
                    return val;
                }

                /**
                 * Get an attribute with colon or v-bind: prefix.
                 *
                 * @param {Node} node
                 * @param {String} name
                 * @return {String|null}
                 */

                function getBindAttr(node, name) {
                    var val = getAttr(node, ':' + name);
                    if (val === null) {
                        val = getAttr(node, 'v-bind:' + name);
                    }
                    return val;
                }

                /**
                 * Check the presence of a bind attribute.
                 *
                 * @param {Node} node
                 * @param {String} name
                 * @return {Boolean}
                 */

                function hasBindAttr(node, name) {
                    return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
                }

                /**
                 * Insert el before target
                 *
                 * @param {Element} el
                 * @param {Element} target
                 */

                function before(el, target) {
                    target.parentNode.insertBefore(el, target);
                }

                /**
                 * Insert el after target
                 *
                 * @param {Element} el
                 * @param {Element} target
                 */

                function after(el, target) {
                    if (target.nextSibling) {
                        before(el, target.nextSibling);
                    } else {
                        target.parentNode.appendChild(el);
                    }
                }

                /**
                 * Remove el from DOM
                 *
                 * @param {Element} el
                 */

                function remove(el) {
                    el.parentNode.removeChild(el);
                }

                /**
                 * Prepend el to target
                 *
                 * @param {Element} el
                 * @param {Element} target
                 */

                function prepend(el, target) {
                    if (target.firstChild) {
                        before(el, target.firstChild);
                    } else {
                        target.appendChild(el);
                    }
                }

                /**
                 * Replace target with el
                 *
                 * @param {Element} target
                 * @param {Element} el
                 */

                function replace(target, el) {
                    var parent = target.parentNode;
                    if (parent) {
                        parent.replaceChild(el, target);
                    }
                }

                /**
                 * Add event listener shorthand.
                 *
                 * @param {Element} el
                 * @param {String} event
                 * @param {Function} cb
                 * @param {Boolean} [useCapture]
                 */

                function on$1(el, event, cb, useCapture) {
                    el.addEventListener(event, cb, useCapture);
                }

                /**
                 * Remove event listener shorthand.
                 *
                 * @param {Element} el
                 * @param {String} event
                 * @param {Function} cb
                 */

                function off(el, event, cb) {
                    el.removeEventListener(event, cb);
                }

                /**
                 * In IE9, setAttribute('class') will result in empty class
                 * if the element also has the :class attribute; However in
                 * PhantomJS, setting `className` does not work on SVG elements...
                 * So we have to do a conditional check here.
                 *
                 * @param {Element} el
                 * @param {String} cls
                 */

                function setClass(el, cls) {
                    /* istanbul ignore if */
                    if (isIE9 && !(el instanceof SVGElement)) {
                        el.className = cls;
                    } else {
                        el.setAttribute('class', cls);
                    }
                }

                /**
                 * Add class with compatibility for IE & SVG
                 *
                 * @param {Element} el
                 * @param {String} cls
                 */

                function addClass(el, cls) {
                    if (el.classList) {
                        el.classList.add(cls);
                    } else {
                        var cur = ' ' + (el.getAttribute('class') || '') + ' ';
                        if (cur.indexOf(' ' + cls + ' ') < 0) {
                            setClass(el, (cur + cls).trim());
                        }
                    }
                }

                /**
                 * Remove class with compatibility for IE & SVG
                 *
                 * @param {Element} el
                 * @param {String} cls
                 */

                function removeClass(el, cls) {
                    if (el.classList) {
                        el.classList.remove(cls);
                    } else {
                        var cur = ' ' + (el.getAttribute('class') || '') + ' ';
                        var tar = ' ' + cls + ' ';
                        while (cur.indexOf(tar) >= 0) {
                            cur = cur.replace(tar, ' ');
                        }
                        setClass(el, cur.trim());
                    }
                    if (!el.className) {
                        el.removeAttribute('class');
                    }
                }

                /**
                 * Extract raw content inside an element into a temporary
                 * container div
                 *
                 * @param {Element} el
                 * @param {Boolean} asFragment
                 * @return {Element}
                 */

                function extractContent(el, asFragment) {
                    var child;
                    var rawContent;
                    /* istanbul ignore if */
                    if (isTemplate(el) && el.content instanceof DocumentFragment) {
                        el = el.content;
                    }
                    if (el.hasChildNodes()) {
                        trimNode(el);
                        rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
                        /* eslint-disable no-cond-assign */
                        while (child = el.firstChild) {
                            /* eslint-enable no-cond-assign */
                            rawContent.appendChild(child);
                        }
                    }
                    return rawContent;
                }

                /**
                 * Trim possible empty head/tail text and comment
                 * nodes inside a parent.
                 *
                 * @param {Node} node
                 */

                function trimNode(node) {
                    var child;
                    /* eslint-disable no-sequences */
                    while ((child = node.firstChild, isTrimmable(child))) {
                        node.removeChild(child);
                    }
                    while ((child = node.lastChild, isTrimmable(child))) {
                        node.removeChild(child);
                    }
                    /* eslint-enable no-sequences */
                }

                function isTrimmable(node) {
                    return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
                }

                /**
                 * Check if an element is a template tag.
                 * Note if the template appears inside an SVG its tagName
                 * will be in lowercase.
                 *
                 * @param {Element} el
                 */

                function isTemplate(el) {
                    return el.tagName && el.tagName.toLowerCase() === 'template';
                }

                /**
                 * Create an "anchor" for performing dom insertion/removals.
                 * This is used in a number of scenarios:
                 * - fragment instance
                 * - v-html
                 * - v-if
                 * - v-for
                 * - component
                 *
                 * @param {String} content
                 * @param {Boolean} persist - IE trashes empty textNodes on
                 *                            cloneNode(true), so in certain
                 *                            cases the anchor needs to be
                 *                            non-empty to be persisted in
                 *                            templates.
                 * @return {Comment|Text}
                 */

                function createAnchor(content, persist) {
                    var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
                    anchor.__vue_anchor = true;
                    return anchor;
                }

                /**
                 * Find a component ref attribute that starts with $.
                 *
                 * @param {Element} node
                 * @return {String|undefined}
                 */

                var refRE = /^v-ref:/;

                function findRef(node) {
                    if (node.hasAttributes()) {
                        var attrs = node.attributes;
                        for (var i = 0, l = attrs.length; i < l; i++) {
                            var name = attrs[i].name;
                            if (refRE.test(name)) {
                                return camelize(name.replace(refRE, ''));
                            }
                        }
                    }
                }

                /**
                 * Map a function to a range of nodes .
                 *
                 * @param {Node} node
                 * @param {Node} end
                 * @param {Function} op
                 */

                function mapNodeRange(node, end, op) {
                    var next;
                    while (node !== end) {
                        next = node.nextSibling;
                        op(node);
                        node = next;
                    }
                    op(end);
                }

                /**
                 * Remove a range of nodes with transition, store
                 * the nodes in a fragment with correct ordering,
                 * and call callback when done.
                 *
                 * @param {Node} start
                 * @param {Node} end
                 * @param {Vue} vm
                 * @param {DocumentFragment} frag
                 * @param {Function} cb
                 */

                function removeNodeRange(start, end, vm, frag, cb) {
                    var done = false;
                    var removed = 0;
                    var nodes = [];
                    mapNodeRange(start, end, function(node) {
                        if (node === end) done = true;
                        nodes.push(node);
                        removeWithTransition(node, vm, onRemoved);
                    });

                    function onRemoved() {
                        removed++;
                        if (done && removed >= nodes.length) {
                            for (var i = 0; i < nodes.length; i++) {
                                frag.appendChild(nodes[i]);
                            }
                            cb && cb();
                        }
                    }
                }

                var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
                var reservedTagRE = /^(slot|partial|component)$/;

                /**
                 * Check if an element is a component, if yes return its
                 * component id.
                 *
                 * @param {Element} el
                 * @param {Object} options
                 * @return {Object|undefined}
                 */

                function checkComponentAttr(el, options) {
                    var tag = el.tagName.toLowerCase();
                    var hasAttrs = el.hasAttributes();
                    if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
                        if (resolveAsset(options, 'components', tag)) {
                            return {
                                id: tag
                            };
                        } else {
                            var is = hasAttrs && getIsBinding(el);
                            if (is) {
                                return is;
                            } else if (process.env.NODE_ENV !== 'production') {
                                if (tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&
                                    // Chrome returns unknown for several HTML5 elements.
                                    // https://code.google.com/p/chromium/issues/detail?id=540526
                                    !/^(data|time|rtc|rb)$/.test(tag)) {
                                    warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
                                }
                            }
                        }
                    } else if (hasAttrs) {
                        return getIsBinding(el);
                    }
                }

                /**
                 * Get "is" binding from an element.
                 *
                 * @param {Element} el
                 * @return {Object|undefined}
                 */

                function getIsBinding(el) {
                    // dynamic syntax
                    var exp = getAttr(el, 'is');
                    if (exp != null) {
                        return {
                            id: exp
                        };
                    } else {
                        exp = getBindAttr(el, 'is');
                        if (exp != null) {
                            return {
                                id: exp,
                                dynamic: true
                            };
                        }
                    }
                }

                /**
                 * Set a prop's initial value on a vm and its data object.
                 *
                 * @param {Vue} vm
                 * @param {Object} prop
                 * @param {*} value
                 */

                function initProp(vm, prop, value) {
                    var key = prop.path;
                    value = coerceProp(prop, value);
                    vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
                }

                /**
                 * Assert whether a prop is valid.
                 *
                 * @param {Object} prop
                 * @param {*} value
                 */

                function assertProp(prop, value) {
                    // if a prop is not provided and is not required,
                    // skip the check.
                    if (prop.raw === null && !prop.required) {
                        return true;
                    }
                    var options = prop.options;
                    var type = options.type;
                    var valid = true;
                    var expectedType;
                    if (type) {
                        if (type === String) {
                            expectedType = 'string';
                            valid = typeof value === expectedType;
                        } else if (type === Number) {
                            expectedType = 'number';
                            valid = typeof value === 'number';
                        } else if (type === Boolean) {
                            expectedType = 'boolean';
                            valid = typeof value === 'boolean';
                        } else if (type === Function) {
                            expectedType = 'function';
                            valid = typeof value === 'function';
                        } else if (type === Object) {
                            expectedType = 'object';
                            valid = isPlainObject(value);
                        } else if (type === Array) {
                            expectedType = 'array';
                            valid = isArray(value);
                        } else {
                            valid = value instanceof type;
                        }
                    }
                    if (!valid) {
                        process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
                        return false;
                    }
                    var validator = options.validator;
                    if (validator) {
                        if (!validator.call(null, value)) {
                            process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
                            return false;
                        }
                    }
                    return true;
                }

                /**
                 * Force parsing value with coerce option.
                 *
                 * @param {*} value
                 * @param {Object} options
                 * @return {*}
                 */

                function coerceProp(prop, value) {
                    var coerce = prop.options.coerce;
                    if (!coerce) {
                        return value;
                    }
                    // coerce is a function
                    return coerce(value);
                }

                function formatType(val) {
                    return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
                }

                function formatValue(val) {
                    return Object.prototype.toString.call(val).slice(8, -1);
                }

                /**
                 * Option overwriting strategies are functions that handle
                 * how to merge a parent option value and a child option
                 * value into the final value.
                 *
                 * All strategy functions follow the same signature:
                 *
                 * @param {*} parentVal
                 * @param {*} childVal
                 * @param {Vue} [vm]
                 */

                var strats = config.optionMergeStrategies = Object.create(null);

                /**
                 * Helper that recursively merges two data objects together.
                 */

                function mergeData(to, from) {
                    var key, toVal, fromVal;
                    for (key in from) {
                        toVal = to[key];
                        fromVal = from[key];
                        if (!hasOwn(to, key)) {
                            set(to, key, fromVal);
                        } else if (isObject(toVal) && isObject(fromVal)) {
                            mergeData(toVal, fromVal);
                        }
                    }
                    return to;
                }

                /**
                 * Data
                 */

                strats.data = function(parentVal, childVal, vm) {
                    if (!vm) {
                        // in a Vue.extend merge, both should be functions
                        if (!childVal) {
                            return parentVal;
                        }
                        if (typeof childVal !== 'function') {
                            process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
                            return parentVal;
                        }
                        if (!parentVal) {
                            return childVal;
                        }
                        // when parentVal & childVal are both present,
                        // we need to return a function that returns the
                        // merged result of both functions... no need to
                        // check if parentVal is a function here because
                        // it has to be a function to pass previous merges.
                        return function mergedDataFn() {
                            return mergeData(childVal.call(this), parentVal.call(this));
                        };
                    } else if (parentVal || childVal) {
                        return function mergedInstanceDataFn() {
                            // instance merge
                            var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
                            var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
                            if (instanceData) {
                                return mergeData(instanceData, defaultData);
                            } else {
                                return defaultData;
                            }
                        };
                    }
                };

                /**
                 * El
                 */

                strats.el = function(parentVal, childVal, vm) {
                    if (!vm && childVal && typeof childVal !== 'function') {
                        process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
                        return;
                    }
                    var ret = childVal || parentVal;
                    // invoke the element factory if this is instance merge
                    return vm && typeof ret === 'function' ? ret.call(vm) : ret;
                };

                /**
                 * Hooks and param attributes are merged as arrays.
                 */

                strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function(parentVal, childVal) {
                    return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
                };

                /**
                 * 0.11 deprecation warning
                 */

                strats.paramAttributes = function() {
                    /* istanbul ignore next */
                    process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
                };

                /**
                 * Assets
                 *
                 * When a vm is present (instance creation), we need to do
                 * a three-way merge between constructor options, instance
                 * options and parent options.
                 */

                function mergeAssets(parentVal, childVal) {
                    var res = Object.create(parentVal);
                    return childVal ? extend(res, guardArrayAssets(childVal)) : res;
                }

                config._assetTypes.forEach(function(type) {
                    strats[type + 's'] = mergeAssets;
                });

                /**
                 * Events & Watchers.
                 *
                 * Events & watchers hashes should not overwrite one
                 * another, so we merge them as arrays.
                 */

                strats.watch = strats.events = function(parentVal, childVal) {
                    if (!childVal) return parentVal;
                    if (!parentVal) return childVal;
                    var ret = {};
                    extend(ret, parentVal);
                    for (var key in childVal) {
                        var parent = ret[key];
                        var child = childVal[key];
                        if (parent && !isArray(parent)) {
                            parent = [parent];
                        }
                        ret[key] = parent ? parent.concat(child) : [child];
                    }
                    return ret;
                };

                /**
                 * Other object hashes.
                 */

                strats.props = strats.methods = strats.computed = function(parentVal, childVal) {
                    if (!childVal) return parentVal;
                    if (!parentVal) return childVal;
                    var ret = Object.create(null);
                    extend(ret, parentVal);
                    extend(ret, childVal);
                    return ret;
                };

                /**
                 * Default strategy.
                 */

                var defaultStrat = function defaultStrat(parentVal, childVal) {
                    return childVal === undefined ? parentVal : childVal;
                };

                /**
                 * Make sure component options get converted to actual
                 * constructors.
                 *
                 * @param {Object} options
                 */

                function guardComponents(options) {
                    if (options.components) {
                        var components = options.components = guardArrayAssets(options.components);
                        var def;
                        var ids = Object.keys(components);
                        for (var i = 0, l = ids.length; i < l; i++) {
                            var key = ids[i];
                            if (commonTagRE.test(key) || reservedTagRE.test(key)) {
                                process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
                                continue;
                            }
                            def = components[key];
                            if (isPlainObject(def)) {
                                components[key] = Vue.extend(def);
                            }
                        }
                    }
                }

                /**
                 * Ensure all props option syntax are normalized into the
                 * Object-based format.
                 *
                 * @param {Object} options
                 */

                function guardProps(options) {
                    var props = options.props;
                    var i, val;
                    if (isArray(props)) {
                        options.props = {};
                        i = props.length;
                        while (i--) {
                            val = props[i];
                            if (typeof val === 'string') {
                                options.props[val] = null;
                            } else if (val.name) {
                                options.props[val.name] = val;
                            }
                        }
                    } else if (isPlainObject(props)) {
                        var keys = Object.keys(props);
                        i = keys.length;
                        while (i--) {
                            val = props[keys[i]];
                            if (typeof val === 'function') {
                                props[keys[i]] = {
                                    type: val
                                };
                            }
                        }
                    }
                }

                /**
                 * Guard an Array-format assets option and converted it
                 * into the key-value Object format.
                 *
                 * @param {Object|Array} assets
                 * @return {Object}
                 */

                function guardArrayAssets(assets) {
                    if (isArray(assets)) {
                        var res = {};
                        var i = assets.length;
                        var asset;
                        while (i--) {
                            asset = assets[i];
                            var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
                            if (!id) {
                                process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
                            } else {
                                res[id] = asset;
                            }
                        }
                        return res;
                    }
                    return assets;
                }

                /**
                 * Merge two option objects into a new one.
                 * Core utility used in both instantiation and inheritance.
                 *
                 * @param {Object} parent
                 * @param {Object} child
                 * @param {Vue} [vm] - if vm is present, indicates this is
                 *                     an instantiation merge.
                 */

                function mergeOptions(parent, child, vm) {
                    guardComponents(child);
                    guardProps(child);
                    var options = {};
                    var key;
                    if (child.mixins) {
                        for (var i = 0, l = child.mixins.length; i < l; i++) {
                            parent = mergeOptions(parent, child.mixins[i], vm);
                        }
                    }
                    for (key in parent) {
                        mergeField(key);
                    }
                    for (key in child) {
                        if (!hasOwn(parent, key)) {
                            mergeField(key);
                        }
                    }

                    function mergeField(key) {
                        var strat = strats[key] || defaultStrat;
                        options[key] = strat(parent[key], child[key], vm, key);
                    }
                    return options;
                }

                /**
                 * Resolve an asset.
                 * This function is used because child instances need access
                 * to assets defined in its ancestor chain.
                 *
                 * @param {Object} options
                 * @param {String} type
                 * @param {String} id
                 * @return {Object|Function}
                 */

                function resolveAsset(options, type, id) {
                    /* istanbul ignore if */
                    if (typeof id !== 'string') {
                        return;
                    }
                    var assets = options[type];
                    var camelizedId;
                    return assets[id] ||
                        // camelCase ID
                        assets[camelizedId = camelize(id)] ||
                        // Pascal Case ID
                        assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
                }

                /**
                 * Assert asset exists
                 */

                function assertAsset(val, type, id) {
                    if (!val) {
                        process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
                    }
                }

                var arrayProto = Array.prototype;
                var arrayMethods = Object.create(arrayProto)

                /**
                 * Intercept mutating methods and emit events
                 */

                ;
                ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function(method) {
                    // cache original method
                    var original = arrayProto[method];
                    def(arrayMethods, method, function mutator() {
                        // avoid leaking arguments:
                        // http://jsperf.com/closure-with-arguments
                        var i = arguments.length;
                        var args = new Array(i);
                        while (i--) {
                            args[i] = arguments[i];
                        }
                        var result = original.apply(this, args);
                        var ob = this.__ob__;
                        var inserted;
                        switch (method) {
                            case 'push':
                                inserted = args;
                                break;
                            case 'unshift':
                                inserted = args;
                                break;
                            case 'splice':
                                inserted = args.slice(2);
                                break;
                        }
                        if (inserted) ob.observeArray(inserted);
                        // notify change
                        ob.dep.notify();
                        return result;
                    });
                });

                /**
                 * Swap the element at the given index with a new value
                 * and emits corresponding event.
                 *
                 * @param {Number} index
                 * @param {*} val
                 * @return {*} - replaced element
                 */

                def(arrayProto, '$set', function $set(index, val) {
                    if (index >= this.length) {
                        this.length = Number(index) + 1;
                    }
                    return this.splice(index, 1, val)[0];
                });

                /**
                 * Convenience method to remove the element at given index.
                 *
                 * @param {Number} index
                 * @param {*} val
                 */

                def(arrayProto, '$remove', function $remove(item) {
                    /* istanbul ignore if */
                    if (!this.length) return;
                    var index = indexOf(this, item);
                    if (index > -1) {
                        return this.splice(index, 1);
                    }
                });

                var uid$3 = 0;

                /**
                 * A dep is an observable that can have multiple
                 * directives subscribing to it.
                 *
                 * @constructor
                 */
                function Dep() {
                    this.id = uid$3++;
                    this.subs = [];
                }

                // the current target watcher being evaluated.
                // this is globally unique because there could be only one
                // watcher being evaluated at any time.
                Dep.target = null;

                /**
                 * Add a directive subscriber.
                 *
                 * @param {Directive} sub
                 */

                Dep.prototype.addSub = function(sub) {
                    this.subs.push(sub);
                };

                /**
                 * Remove a directive subscriber.
                 *
                 * @param {Directive} sub
                 */

                Dep.prototype.removeSub = function(sub) {
                    this.subs.$remove(sub);
                };

                /**
                 * Add self as a dependency to the target watcher.
                 */

                Dep.prototype.depend = function() {
                    Dep.target.addDep(this);
                };

                /**
                 * Notify all subscribers of a new value.
                 */

                Dep.prototype.notify = function() {
                    // stablize the subscriber list first
                    var subs = toArray(this.subs);
                    for (var i = 0, l = subs.length; i < l; i++) {
                        subs[i].update();
                    }
                };

                var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

                /**
                 * Observer class that are attached to each observed
                 * object. Once attached, the observer converts target
                 * object's property keys into getter/setters that
                 * collect dependencies and dispatches updates.
                 *
                 * @param {Array|Object} value
                 * @constructor
                 */

                function Observer(value) {
                    this.value = value;
                    this.dep = new Dep();
                    def(value, '__ob__', this);
                    if (isArray(value)) {
                        var augment = hasProto ? protoAugment : copyAugment;
                        augment(value, arrayMethods, arrayKeys);
                        this.observeArray(value);
                    } else {
                        this.walk(value);
                    }
                }

                // Instance methods

                /**
                 * Walk through each property and convert them into
                 * getter/setters. This method should only be called when
                 * value type is Object.
                 *
                 * @param {Object} obj
                 */

                Observer.prototype.walk = function(obj) {
                    var keys = Object.keys(obj);
                    for (var i = 0, l = keys.length; i < l; i++) {
                        this.convert(keys[i], obj[keys[i]]);
                    }
                };

                /**
                 * Observe a list of Array items.
                 *
                 * @param {Array} items
                 */

                Observer.prototype.observeArray = function(items) {
                    for (var i = 0, l = items.length; i < l; i++) {
                        observe(items[i]);
                    }
                };

                /**
                 * Convert a property into getter/setter so we can emit
                 * the events when the property is accessed/changed.
                 *
                 * @param {String} key
                 * @param {*} val
                 */

                Observer.prototype.convert = function(key, val) {
                    defineReactive(this.value, key, val);
                };

                /**
                 * Add an owner vm, so that when $set/$delete mutations
                 * happen we can notify owner vms to proxy the keys and
                 * digest the watchers. This is only called when the object
                 * is observed as an instance's root $data.
                 *
                 * @param {Vue} vm
                 */

                Observer.prototype.addVm = function(vm) {
                    (this.vms || (this.vms = [])).push(vm);
                };

                /**
                 * Remove an owner vm. This is called when the object is
                 * swapped out as an instance's $data object.
                 *
                 * @param {Vue} vm
                 */

                Observer.prototype.removeVm = function(vm) {
                    this.vms.$remove(vm);
                };

                // helpers

                /**
                 * Augment an target Object or Array by intercepting
                 * the prototype chain using __proto__
                 *
                 * @param {Object|Array} target
                 * @param {Object} proto
                 */

                function protoAugment(target, src) {
                    target.__proto__ = src;
                }

                /**
                 * Augment an target Object or Array by defining
                 * hidden properties.
                 *
                 * @param {Object|Array} target
                 * @param {Object} proto
                 */

                function copyAugment(target, src, keys) {
                    for (var i = 0, l = keys.length; i < l; i++) {
                        var key = keys[i];
                        def(target, key, src[key]);
                    }
                }

                /**
                 * Attempt to create an observer instance for a value,
                 * returns the new observer if successfully observed,
                 * or the existing observer if the value already has one.
                 *
                 * @param {*} value
                 * @param {Vue} [vm]
                 * @return {Observer|undefined}
                 * @static
                 */

                function observe(value, vm) {
                    if (!value || typeof value !== 'object') {
                        return;
                    }
                    var ob;
                    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
                        ob = value.__ob__;
                    } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
                        ob = new Observer(value);
                    }
                    if (ob && vm) {
                        ob.addVm(vm);
                    }
                    return ob;
                }

                /**
                 * Define a reactive property on an Object.
                 *
                 * @param {Object} obj
                 * @param {String} key
                 * @param {*} val
                 */

                function defineReactive(obj, key, val) {
                    var dep = new Dep();

                    // cater for pre-defined getter/setters
                    var getter, setter;
                    if (config.convertAllProperties) {
                        var property = Object.getOwnPropertyDescriptor(obj, key);
                        if (property && property.configurable === false) {
                            return;
                        }
                        getter = property && property.get;
                        setter = property && property.set;
                    }

                    var childOb = observe(val);
                    Object.defineProperty(obj, key, {
                        enumerable: true,
                        configurable: true,
                        get: function reactiveGetter() {
                            var value = getter ? getter.call(obj) : val;
                            if (Dep.target) {
                                dep.depend();
                                if (childOb) {
                                    childOb.dep.depend();
                                }
                                if (isArray(value)) {
                                    for (var e, i = 0, l = value.length; i < l; i++) {
                                        e = value[i];
                                        e && e.__ob__ && e.__ob__.dep.depend();
                                    }
                                }
                            }
                            return value;
                        },
                        set: function reactiveSetter(newVal) {
                            var value = getter ? getter.call(obj) : val;
                            if (newVal === value) {
                                return;
                            }
                            if (setter) {
                                setter.call(obj, newVal);
                            } else {
                                val = newVal;
                            }
                            childOb = observe(newVal);
                            dep.notify();
                        }
                    });
                }

                var util = Object.freeze({
                    defineReactive: defineReactive,
                    set: set,
                    del: del,
                    hasOwn: hasOwn,
                    isLiteral: isLiteral,
                    isReserved: isReserved,
                    _toString: _toString,
                    toNumber: toNumber,
                    toBoolean: toBoolean,
                    stripQuotes: stripQuotes,
                    camelize: camelize,
                    hyphenate: hyphenate,
                    classify: classify,
                    bind: bind$1,
                    toArray: toArray,
                    extend: extend,
                    isObject: isObject,
                    isPlainObject: isPlainObject,
                    def: def,
                    debounce: _debounce,
                    indexOf: indexOf,
                    cancellable: cancellable,
                    looseEqual: looseEqual,
                    isArray: isArray,
                    hasProto: hasProto,
                    inBrowser: inBrowser,
                    devtools: devtools,
                    isIE9: isIE9,
                    isAndroid: isAndroid,
                    get transitionProp() {
                        return transitionProp;
                    },
                    get transitionEndEvent() {
                        return transitionEndEvent;
                    },
                    get animationProp() {
                        return animationProp;
                    },
                    get animationEndEvent() {
                        return animationEndEvent;
                    },
                    nextTick: nextTick,
                    query: query,
                    inDoc: inDoc,
                    getAttr: getAttr,
                    getBindAttr: getBindAttr,
                    hasBindAttr: hasBindAttr,
                    before: before,
                    after: after,
                    remove: remove,
                    prepend: prepend,
                    replace: replace,
                    on: on$1,
                    off: off,
                    setClass: setClass,
                    addClass: addClass,
                    removeClass: removeClass,
                    extractContent: extractContent,
                    trimNode: trimNode,
                    isTemplate: isTemplate,
                    createAnchor: createAnchor,
                    findRef: findRef,
                    mapNodeRange: mapNodeRange,
                    removeNodeRange: removeNodeRange,
                    mergeOptions: mergeOptions,
                    resolveAsset: resolveAsset,
                    assertAsset: assertAsset,
                    checkComponentAttr: checkComponentAttr,
                    initProp: initProp,
                    assertProp: assertProp,
                    coerceProp: coerceProp,
                    commonTagRE: commonTagRE,
                    reservedTagRE: reservedTagRE,
                    get warn() {
                        return warn;
                    }
                });

                var uid = 0;

                function initMixin(Vue) {

                    /**
                     * The main init sequence. This is called for every
                     * instance, including ones that are created from extended
                     * constructors.
                     *
                     * @param {Object} options - this options object should be
                     *                           the result of merging class
                     *                           options and the options passed
                     *                           in to the constructor.
                     */

                    Vue.prototype._init = function(options) {

                        options = options || {};

                        this.$el = null;
                        this.$parent = options.parent;
                        this.$root = this.$parent ? this.$parent.$root : this;
                        this.$children = [];
                        this.$refs = {}; // child vm references
                        this.$els = {}; // element references
                        this._watchers = []; // all watchers as an array
                        this._directives = []; // all directives

                        // a uid
                        this._uid = uid++;

                        // a flag to avoid this being observed
                        this._isVue = true;

                        // events bookkeeping
                        this._events = {}; // registered callbacks
                        this._eventsCount = {}; // for $broadcast optimization

                        // fragment instance properties
                        this._isFragment = false;
                        this._fragment = // @type {DocumentFragment}
                        this._fragmentStart = // @type {Text|Comment}
                        this._fragmentEnd = null; // @type {Text|Comment}

                        // lifecycle state
                        this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
                        this._unlinkFn = null;

                        // context:
                        // if this is a transcluded component, context
                        // will be the common parent vm of this instance
                        // and its host.
                        this._context = options._context || this.$parent;

                        // scope:
                        // if this is inside an inline v-for, the scope
                        // will be the intermediate scope created for this
                        // repeat fragment. this is used for linking props
                        // and container directives.
                        this._scope = options._scope;

                        // fragment:
                        // if this instance is compiled inside a Fragment, it
                        // needs to reigster itself as a child of that fragment
                        // for attach/detach to work properly.
                        this._frag = options._frag;
                        if (this._frag) {
                            this._frag.children.push(this);
                        }

                        // push self into parent / transclusion host
                        if (this.$parent) {
                            this.$parent.$children.push(this);
                        }

                        // save raw constructor data before merge
                        // so that we know which properties are provided at
                        // instantiation.
                        if (process.env.NODE_ENV !== 'production') {
                            this._runtimeData = options.data;
                        }

                        // merge options.
                        options = this.$options = mergeOptions(this.constructor.options, options, this);

                        // set ref
                        this._updateRef();

                        // initialize data as empty object.
                        // it will be filled up in _initScope().
                        this._data = {};

                        // call init hook
                        this._callHook('init');

                        // initialize data observation and scope inheritance.
                        this._initState();

                        // setup event system and option events.
                        this._initEvents();

                        // call created hook
                        this._callHook('created');

                        // if `el` option is passed, start compilation.
                        if (options.el) {
                            this.$mount(options.el);
                        }
                    };
                }

                var pathCache = new Cache(1000);

                // actions
                var APPEND = 0;
                var PUSH = 1;
                var INC_SUB_PATH_DEPTH = 2;
                var PUSH_SUB_PATH = 3;

                // states
                var BEFORE_PATH = 0;
                var IN_PATH = 1;
                var BEFORE_IDENT = 2;
                var IN_IDENT = 3;
                var IN_SUB_PATH = 4;
                var IN_SINGLE_QUOTE = 5;
                var IN_DOUBLE_QUOTE = 6;
                var AFTER_PATH = 7;
                var ERROR = 8;

                var pathStateMachine = [];

                pathStateMachine[BEFORE_PATH] = {
                    'ws': [BEFORE_PATH],
                    'ident': [IN_IDENT, APPEND],
                    '[': [IN_SUB_PATH],
                    'eof': [AFTER_PATH]
                };

                pathStateMachine[IN_PATH] = {
                    'ws': [IN_PATH],
                    '.': [BEFORE_IDENT],
                    '[': [IN_SUB_PATH],
                    'eof': [AFTER_PATH]
                };

                pathStateMachine[BEFORE_IDENT] = {
                    'ws': [BEFORE_IDENT],
                    'ident': [IN_IDENT, APPEND]
                };

                pathStateMachine[IN_IDENT] = {
                    'ident': [IN_IDENT, APPEND],
                    '0': [IN_IDENT, APPEND],
                    'number': [IN_IDENT, APPEND],
                    'ws': [IN_PATH, PUSH],
                    '.': [BEFORE_IDENT, PUSH],
                    '[': [IN_SUB_PATH, PUSH],
                    'eof': [AFTER_PATH, PUSH]
                };

                pathStateMachine[IN_SUB_PATH] = {
                    "'": [IN_SINGLE_QUOTE, APPEND],
                    '"': [IN_DOUBLE_QUOTE, APPEND],
                    '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
                    ']': [IN_PATH, PUSH_SUB_PATH],
                    'eof': ERROR,
                    'else': [IN_SUB_PATH, APPEND]
                };

                pathStateMachine[IN_SINGLE_QUOTE] = {
                    "'": [IN_SUB_PATH, APPEND],
                    'eof': ERROR,
                    'else': [IN_SINGLE_QUOTE, APPEND]
                };

                pathStateMachine[IN_DOUBLE_QUOTE] = {
                    '"': [IN_SUB_PATH, APPEND],
                    'eof': ERROR,
                    'else': [IN_DOUBLE_QUOTE, APPEND]
                };

                /**
                 * Determine the type of a character in a keypath.
                 *
                 * @param {Char} ch
                 * @return {String} type
                 */

                function getPathCharType(ch) {
                    if (ch === undefined) {
                        return 'eof';
                    }

                    var code = ch.charCodeAt(0);

                    switch (code) {
                        case 0x5B: // [
                        case 0x5D: // ]
                        case 0x2E: // .
                        case 0x22: // "
                        case 0x27: // '
                        case 0x30:
                            // 0
                            return ch;

                        case 0x5F: // _
                        case 0x24:
                            // $
                            return 'ident';

                        case 0x20: // Space
                        case 0x09: // Tab
                        case 0x0A: // Newline
                        case 0x0D: // Return
                        case 0xA0: // No-break space
                        case 0xFEFF: // Byte Order Mark
                        case 0x2028: // Line Separator
                        case 0x2029:
                            // Paragraph Separator
                            return 'ws';
                    }

                    // a-z, A-Z
                    if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
                        return 'ident';
                    }

                    // 1-9
                    if (code >= 0x31 && code <= 0x39) {
                        return 'number';
                    }

                    return 'else';
                }

                /**
                 * Format a subPath, return its plain form if it is
                 * a literal string or number. Otherwise prepend the
                 * dynamic indicator (*).
                 *
                 * @param {String} path
                 * @return {String}
                 */

                function formatSubPath(path) {
                    var trimmed = path.trim();
                    // invalid leading 0
                    if (path.charAt(0) === '0' && isNaN(path)) {
                        return false;
                    }
                    return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
                }

                /**
                 * Parse a string path into an array of segments
                 *
                 * @param {String} path
                 * @return {Array|undefined}
                 */

                function parse(path) {
                    var keys = [];
                    var index = -1;
                    var mode = BEFORE_PATH;
                    var subPathDepth = 0;
                    var c, newChar, key, type, transition, action, typeMap;

                    var actions = [];

                    actions[PUSH] = function() {
                        if (key !== undefined) {
                            keys.push(key);
                            key = undefined;
                        }
                    };

                    actions[APPEND] = function() {
                        if (key === undefined) {
                            key = newChar;
                        } else {
                            key += newChar;
                        }
                    };

                    actions[INC_SUB_PATH_DEPTH] = function() {
                        actions[APPEND]();
                        subPathDepth++;
                    };

                    actions[PUSH_SUB_PATH] = function() {
                        if (subPathDepth > 0) {
                            subPathDepth--;
                            mode = IN_SUB_PATH;
                            actions[APPEND]();
                        } else {
                            subPathDepth = 0;
                            key = formatSubPath(key);
                            if (key === false) {
                                return false;
                            } else {
                                actions[PUSH]();
                            }
                        }
                    };

                    function maybeUnescapeQuote() {
                        var nextChar = path[index + 1];
                        if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
                            index++;
                            newChar = '\\' + nextChar;
                            actions[APPEND]();
                            return true;
                        }
                    }

                    while (mode != null) {
                        index++;
                        c = path[index];

                        if (c === '\\' && maybeUnescapeQuote()) {
                            continue;
                        }

                        type = getPathCharType(c);
                        typeMap = pathStateMachine[mode];
                        transition = typeMap[type] || typeMap['else'] || ERROR;

                        if (transition === ERROR) {
                            return; // parse error
                        }

                        mode = transition[0];
                        action = actions[transition[1]];
                        if (action) {
                            newChar = transition[2];
                            newChar = newChar === undefined ? c : newChar;
                            if (action() === false) {
                                return;
                            }
                        }

                        if (mode === AFTER_PATH) {
                            keys.raw = path;
                            return keys;
                        }
                    }
                }

                /**
                 * External parse that check for a cache hit first
                 *
                 * @param {String} path
                 * @return {Array|undefined}
                 */

                function parsePath(path) {
                    var hit = pathCache.get(path);
                    if (!hit) {
                        hit = parse(path);
                        if (hit) {
                            pathCache.put(path, hit);
                        }
                    }
                    return hit;
                }

                /**
                 * Get from an object from a path string
                 *
                 * @param {Object} obj
                 * @param {String} path
                 */

                function getPath(obj, path) {
                    return parseExpression(path).get(obj);
                }

                /**
                 * Warn against setting non-existent root path on a vm.
                 */

                var warnNonExistent;
                if (process.env.NODE_ENV !== 'production') {
                    warnNonExistent = function(path) {
                        warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
                    };
                }

                /**
                 * Set on an object from a path
                 *
                 * @param {Object} obj
                 * @param {String | Array} path
                 * @param {*} val
                 */

                function setPath(obj, path, val) {
                    var original = obj;
                    if (typeof path === 'string') {
                        path = parse(path);
                    }
                    if (!path || !isObject(obj)) {
                        return false;
                    }
                    var last, key;
                    for (var i = 0, l = path.length; i < l; i++) {
                        last = obj;
                        key = path[i];
                        if (key.charAt(0) === '*') {
                            key = parseExpression(key.slice(1)).get.call(original, original);
                        }
                        if (i < l - 1) {
                            obj = obj[key];
                            if (!isObject(obj)) {
                                obj = {};
                                if (process.env.NODE_ENV !== 'production' && last._isVue) {
                                    warnNonExistent(path);
                                }
                                set(last, key, obj);
                            }
                        } else {
                            if (isArray(obj)) {
                                obj.$set(key, val);
                            } else if (key in obj) {
                                obj[key] = val;
                            } else {
                                if (process.env.NODE_ENV !== 'production' && obj._isVue) {
                                    warnNonExistent(path);
                                }
                                set(obj, key, val);
                            }
                        }
                    }
                    return true;
                }

                var path = Object.freeze({
                    parsePath: parsePath,
                    getPath: getPath,
                    setPath: setPath
                });

                var expressionCache = new Cache(1000);

                var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
                var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

                // keywords that don't make sense inside expressions
                var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
                var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

                var wsRE = /\s/g;
                var newlineRE = /\n/g;
                var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g;
                var restoreRE = /"(\d+)"/g;
                var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
                var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
                var booleanLiteralRE = /^(?:true|false)$/;

                /**
                 * Save / Rewrite / Restore
                 *
                 * When rewriting paths found in an expression, it is
                 * possible for the same letter sequences to be found in
                 * strings and Object literal property keys. Therefore we
                 * remove and store these parts in a temporary array, and
                 * restore them after the path rewrite.
                 */

                var saved = [];

                /**
                 * Save replacer
                 *
                 * The save regex can match two possible cases:
                 * 1. An opening object literal
                 * 2. A string
                 * If matched as a plain string, we need to escape its
                 * newlines, since the string needs to be preserved when
                 * generating the function body.
                 *
                 * @param {String} str
                 * @param {String} isString - str if matched as a string
                 * @return {String} - placeholder with index
                 */

                function save(str, isString) {
                    var i = saved.length;
                    saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
                    return '"' + i + '"';
                }

                /**
                 * Path rewrite replacer
                 *
                 * @param {String} raw
                 * @return {String}
                 */

                function rewrite(raw) {
                    var c = raw.charAt(0);
                    var path = raw.slice(1);
                    if (allowedKeywordsRE.test(path)) {
                        return raw;
                    } else {
                        path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
                        return c + 'scope.' + path;
                    }
                }

                /**
                 * Restore replacer
                 *
                 * @param {String} str
                 * @param {String} i - matched save index
                 * @return {String}
                 */

                function restore(str, i) {
                    return saved[i];
                }

                /**
                 * Rewrite an expression, prefixing all path accessors with
                 * `scope.` and generate getter/setter functions.
                 *
                 * @param {String} exp
                 * @return {Function}
                 */

                function compileGetter(exp) {
                    if (improperKeywordsRE.test(exp)) {
                        process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
                    }
                    // reset state
                    saved.length = 0;
                    // save strings and object literal keys
                    var body = exp.replace(saveRE, save).replace(wsRE, '');
                    // rewrite all paths
                    // pad 1 space here becaue the regex matches 1 extra char
                    body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
                    return makeGetterFn(body);
                }

                /**
                 * Build a getter function. Requires eval.
                 *
                 * We isolate the try/catch so it doesn't affect the
                 * optimization of the parse function when it is not called.
                 *
                 * @param {String} body
                 * @return {Function|undefined}
                 */

                function makeGetterFn(body) {
                    try {
                        return new Function('scope', 'return ' + body + ';');
                    } catch (e) {
                        process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
                    }
                }

                /**
                 * Compile a setter function for the expression.
                 *
                 * @param {String} exp
                 * @return {Function|undefined}
                 */

                function compileSetter(exp) {
                    var path = parsePath(exp);
                    if (path) {
                        return function(scope, val) {
                            setPath(scope, path, val);
                        };
                    } else {
                        process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
                    }
                }

                /**
                 * Parse an expression into re-written getter/setters.
                 *
                 * @param {String} exp
                 * @param {Boolean} needSet
                 * @return {Function}
                 */

                function parseExpression(exp, needSet) {
                    exp = exp.trim();
                    // try cache
                    var hit = expressionCache.get(exp);
                    if (hit) {
                        if (needSet && !hit.set) {
                            hit.set = compileSetter(hit.exp);
                        }
                        return hit;
                    }
                    var res = {
                        exp: exp
                    };
                    res.get = isSimplePath(exp) && exp.indexOf('[') < 0
                    // optimized super simple getter
                    ? makeGetterFn('scope.' + exp)
                    // dynamic getter
                    : compileGetter(exp);
                    if (needSet) {
                        res.set = compileSetter(exp);
                    }
                    expressionCache.put(exp, res);
                    return res;
                }

                /**
                 * Check if an expression is a simple path.
                 *
                 * @param {String} exp
                 * @return {Boolean}
                 */

                function isSimplePath(exp) {
                    return pathTestRE.test(exp) &&
                        // don't treat true/false as paths
                        !booleanLiteralRE.test(exp) &&
                        // Math constants e.g. Math.PI, Math.E etc.
                        exp.slice(0, 5) !== 'Math.';
                }

                var expression = Object.freeze({
                    parseExpression: parseExpression,
                    isSimplePath: isSimplePath
                });

                // we have two separate queues: one for directive updates
                // and one for user watcher registered via $watch().
                // we want to guarantee directive updates to be called
                // before user watchers so that when user watchers are
                // triggered, the DOM would have already been in updated
                // state.
                var queue = [];
                var userQueue = [];
                var has = {};
                var circular = {};
                var waiting = false;
                var internalQueueDepleted = false;

                /**
                 * Reset the batcher's state.
                 */

                function resetBatcherState() {
                    queue = [];
                    userQueue = [];
                    has = {};
                    circular = {};
                    waiting = internalQueueDepleted = false;
                }

                /**
                 * Flush both queues and run the watchers.
                 */

                function flushBatcherQueue() {
                    runBatcherQueue(queue);
                    internalQueueDepleted = true;
                    runBatcherQueue(userQueue);
                    // dev tool hook
                    /* istanbul ignore if */
                    if (devtools) {
                        devtools.emit('flush');
                    }
                    resetBatcherState();
                }

                /**
                 * Run the watchers in a single queue.
                 *
                 * @param {Array} queue
                 */

                function runBatcherQueue(queue) {
                    // do not cache length because more watchers might be pushed
                    // as we run existing watchers
                    for (var i = 0; i < queue.length; i++) {
                        var watcher = queue[i];
                        var id = watcher.id;
                        has[id] = null;
                        watcher.run();
                        // in dev build, check and stop circular updates.
                        if (process.env.NODE_ENV !== 'production' && has[id] != null) {
                            circular[id] = (circular[id] || 0) + 1;
                            if (circular[id] > config._maxUpdateCount) {
                                queue.splice(has[id], 1);
                                warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
                            }
                        }
                    }
                }

                /**
                 * Push a watcher into the watcher queue.
                 * Jobs with duplicate IDs will be skipped unless it's
                 * pushed when the queue is being flushed.
                 *
                 * @param {Watcher} watcher
                 *   properties:
                 *   - {Number} id
                 *   - {Function} run
                 */

                function pushWatcher(watcher) {
                    var id = watcher.id;
                    if (has[id] == null) {
                        // if an internal watcher is pushed, but the internal
                        // queue is already depleted, we run it immediately.
                        if (internalQueueDepleted && !watcher.user) {
                            watcher.run();
                            return;
                        }
                        // push watcher into appropriate queue
                        var q = watcher.user ? userQueue : queue;
                        has[id] = q.length;
                        q.push(watcher);
                        // queue the flush
                        if (!waiting) {
                            waiting = true;
                            nextTick(flushBatcherQueue);
                        }
                    }
                }

                var uid$2 = 0;

                /**
                 * A watcher parses an expression, collects dependencies,
                 * and fires callback when the expression value changes.
                 * This is used for both the $watch() api and directives.
                 *
                 * @param {Vue} vm
                 * @param {String} expression
                 * @param {Function} cb
                 * @param {Object} options
                 *                 - {Array} filters
                 *                 - {Boolean} twoWay
                 *                 - {Boolean} deep
                 *                 - {Boolean} user
                 *                 - {Boolean} sync
                 *                 - {Boolean} lazy
                 *                 - {Function} [preProcess]
                 *                 - {Function} [postProcess]
                 * @constructor
                 */
                function Watcher(vm, expOrFn, cb, options) {
                    // mix in options
                    if (options) {
                        extend(this, options);
                    }
                    var isFn = typeof expOrFn === 'function';
                    this.vm = vm;
                    vm._watchers.push(this);
                    this.expression = isFn ? expOrFn.toString() : expOrFn;
                    this.cb = cb;
                    this.id = ++uid$2; // uid for batching
                    this.active = true;
                    this.dirty = this.lazy; // for lazy watchers
                    this.deps = Object.create(null);
                    this.newDeps = null;
                    this.prevError = null; // for async error stacks
                    // parse expression for getter/setter
                    if (isFn) {
                        this.getter = expOrFn;
                        this.setter = undefined;
                    } else {
                        var res = parseExpression(expOrFn, this.twoWay);
                        this.getter = res.get;
                        this.setter = res.set;
                    }
                    this.value = this.lazy ? undefined : this.get();
                    // state for avoiding false triggers for deep and Array
                    // watchers during vm._digest()
                    this.queued = this.shallow = false;
                }

                /**
                 * Add a dependency to this directive.
                 *
                 * @param {Dep} dep
                 */

                Watcher.prototype.addDep = function(dep) {
                    var id = dep.id;
                    if (!this.newDeps[id]) {
                        this.newDeps[id] = dep;
                        if (!this.deps[id]) {
                            this.deps[id] = dep;
                            dep.addSub(this);
                        }
                    }
                };

                /**
                 * Evaluate the getter, and re-collect dependencies.
                 */

                Watcher.prototype.get = function() {
                    this.beforeGet();
                    var scope = this.scope || this.vm;
                    var value;
                    try {
                        value = this.getter.call(scope, scope);
                    } catch (e) {
                        if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
                            warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
                        }
                    }
                    // "touch" every property so they are all tracked as
                    // dependencies for deep watching
                    if (this.deep) {
                        traverse(value);
                    }
                    if (this.preProcess) {
                        value = this.preProcess(value);
                    }
                    if (this.filters) {
                        value = scope._applyFilters(value, null, this.filters, false);
                    }
                    if (this.postProcess) {
                        value = this.postProcess(value);
                    }
                    this.afterGet();
                    return value;
                };

                /**
                 * Set the corresponding value with the setter.
                 *
                 * @param {*} value
                 */

                Watcher.prototype.set = function(value) {
                    var scope = this.scope || this.vm;
                    if (this.filters) {
                        value = scope._applyFilters(value, this.value, this.filters, true);
                    }
                    try {
                        this.setter.call(scope, scope, value);
                    } catch (e) {
                        if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
                            warn('Error when evaluating setter "' + this.expression + '"', e);
                        }
                    }
                    // two-way sync for v-for alias
                    var forContext = scope.$forContext;
                    if (forContext && forContext.alias === this.expression) {
                        if (forContext.filters) {
                            process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
                            return;
                        }
                        forContext._withLock(function() {
                            if (scope.$key) {
                                // original is an object
                                forContext.rawValue[scope.$key] = value;
                            } else {
                                forContext.rawValue.$set(scope.$index, value);
                            }
                        });
                    }
                };

                /**
                 * Prepare for dependency collection.
                 */

                Watcher.prototype.beforeGet = function() {
                    Dep.target = this;
                    this.newDeps = Object.create(null);
                };

                /**
                 * Clean up for dependency collection.
                 */

                Watcher.prototype.afterGet = function() {
                    Dep.target = null;
                    var ids = Object.keys(this.deps);
                    var i = ids.length;
                    while (i--) {
                        var id = ids[i];
                        if (!this.newDeps[id]) {
                            this.deps[id].removeSub(this);
                        }
                    }
                    this.deps = this.newDeps;
                };

                /**
                 * Subscriber interface.
                 * Will be called when a dependency changes.
                 *
                 * @param {Boolean} shallow
                 */

                Watcher.prototype.update = function(shallow) {
                    if (this.lazy) {
                        this.dirty = true;
                    } else if (this.sync || !config.async) {
                        this.run();
                    } else {
                        // if queued, only overwrite shallow with non-shallow,
                        // but not the other way around.
                        this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
                        this.queued = true;
                        // record before-push error stack in debug mode
                        /* istanbul ignore if */
                        if (process.env.NODE_ENV !== 'production' && config.debug) {
                            this.prevError = new Error('[vue] async stack trace');
                        }
                        pushWatcher(this);
                    }
                };

                /**
                 * Batcher job interface.
                 * Will be called by the batcher.
                 */

                Watcher.prototype.run = function() {
                    if (this.active) {
                        var value = this.get();
                        if (value !== this.value ||
                            // Deep watchers and watchers on Object/Arrays should fire even
                            // when the value is the same, because the value may
                            // have mutated; but only do so if this is a
                            // non-shallow update (caused by a vm digest).
                            (isObject(value) || this.deep) && !this.shallow) {
                            // set new value
                            var oldValue = this.value;
                            this.value = value;
                            // in debug + async mode, when a watcher callbacks
                            // throws, we also throw the saved before-push error
                            // so the full cross-tick stack trace is available.
                            var prevError = this.prevError;
                            /* istanbul ignore if */
                            if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
                                this.prevError = null;
                                try {
                                    this.cb.call(this.vm, value, oldValue);
                                } catch (e) {
                                    nextTick(function() {
                                        throw prevError;
                                    }, 0);
                                    throw e;
                                }
                            } else {
                                this.cb.call(this.vm, value, oldValue);
                            }
                        }
                        this.queued = this.shallow = false;
                    }
                };

                /**
                 * Evaluate the value of the watcher.
                 * This only gets called for lazy watchers.
                 */

                Watcher.prototype.evaluate = function() {
                    // avoid overwriting another watcher that is being
                    // collected.
                    var current = Dep.target;
                    this.value = this.get();
                    this.dirty = false;
                    Dep.target = current;
                };

                /**
                 * Depend on all deps collected by this watcher.
                 */

                Watcher.prototype.depend = function() {
                    var depIds = Object.keys(this.deps);
                    var i = depIds.length;
                    while (i--) {
                        this.deps[depIds[i]].depend();
                    }
                };

                /**
                 * Remove self from all dependencies' subcriber list.
                 */

                Watcher.prototype.teardown = function() {
                    if (this.active) {
                        // remove self from vm's watcher list
                        // this is a somewhat expensive operation so we skip it
                        // if the vm is being destroyed or is performing a v-for
                        // re-render (the watcher list is then filtered by v-for).
                        if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
                            this.vm._watchers.$remove(this);
                        }
                        var depIds = Object.keys(this.deps);
                        var i = depIds.length;
                        while (i--) {
                            this.deps[depIds[i]].removeSub(this);
                        }
                        this.active = false;
                        this.vm = this.cb = this.value = null;
                    }
                };

                /**
                 * Recrusively traverse an object to evoke all converted
                 * getters, so that every nested property inside the object
                 * is collected as a "deep" dependency.
                 *
                 * @param {*} val
                 */

                function traverse(val) {
                    var i, keys;
                    if (isArray(val)) {
                        i = val.length;
                        while (i--) traverse(val[i]);
                    } else if (isObject(val)) {
                        keys = Object.keys(val);
                        i = keys.length;
                        while (i--) traverse(val[keys[i]]);
                    }
                }

                var cloak = {
                    bind: function bind() {
                        var el = this.el;
                        this.vm.$once('pre-hook:compiled', function() {
                            el.removeAttribute('v-cloak');
                        });
                    }
                };

                var ref = {
                    bind: function bind() {
                        process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
                    }
                };

                var ON = 700;
                var MODEL = 800;
                var BIND = 850;
                var TRANSITION = 1100;
                var EL = 1500;
                var COMPONENT = 1500;
                var PARTIAL = 1750;
                var FOR = 2000;
                var IF = 2000;
                var SLOT = 2100;

                var el = {

                    priority: EL,

                    bind: function bind() {
                        /* istanbul ignore if */
                        if (!this.arg) {
                            return;
                        }
                        var id = this.id = camelize(this.arg);
                        var refs = (this._scope || this.vm).$els;
                        if (hasOwn(refs, id)) {
                            refs[id] = this.el;
                        } else {
                            defineReactive(refs, id, this.el);
                        }
                    },

                    unbind: function unbind() {
                        var refs = (this._scope || this.vm).$els;
                        if (refs[this.id] === this.el) {
                            refs[this.id] = null;
                        }
                    }
                };

                var prefixes = ['-webkit-', '-moz-', '-ms-'];
                var camelPrefixes = ['Webkit', 'Moz', 'ms'];
                var importantRE = /!important;?$/;
                var propCache = Object.create(null);

                var testEl = null;

                var style = {

                    deep: true,

                    update: function update(value) {
                        if (typeof value === 'string') {
                            this.el.style.cssText = value;
                        } else if (isArray(value)) {
                            this.handleObject(value.reduce(extend, {}));
                        } else {
                            this.handleObject(value || {});
                        }
                    },

                    handleObject: function handleObject(value) {
                        // cache object styles so that only changed props
                        // are actually updated.
                        var cache = this.cache || (this.cache = {});
                        var name, val;
                        for (name in cache) {
                            if (!(name in value)) {
                                this.handleSingle(name, null);
                                delete cache[name];
                            }
                        }
                        for (name in value) {
                            val = value[name];
                            if (val !== cache[name]) {
                                cache[name] = val;
                                this.handleSingle(name, val);
                            }
                        }
                    },

                    handleSingle: function handleSingle(prop, value) {
                        prop = normalize(prop);
                        if (!prop) return; // unsupported prop
                        // cast possible numbers/booleans into strings
                        if (value != null) value += '';
                        if (value) {
                            var isImportant = importantRE.test(value) ? 'important' : '';
                            if (isImportant) {
                                value = value.replace(importantRE, '').trim();
                            }
                            this.el.style.setProperty(prop, value, isImportant);
                        } else {
                            this.el.style.removeProperty(prop);
                        }
                    }

                };

                /**
                 * Normalize a CSS property name.
                 * - cache result
                 * - auto prefix
                 * - camelCase -> dash-case
                 *
                 * @param {String} prop
                 * @return {String}
                 */

                function normalize(prop) {
                    if (propCache[prop]) {
                        return propCache[prop];
                    }
                    var res = prefix(prop);
                    propCache[prop] = propCache[res] = res;
                    return res;
                }

                /**
                 * Auto detect the appropriate prefix for a CSS property.
                 * https://gist.github.com/paulirish/523692
                 *
                 * @param {String} prop
                 * @return {String}
                 */

                function prefix(prop) {
                    prop = hyphenate(prop);
                    var camel = camelize(prop);
                    var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
                    if (!testEl) {
                        testEl = document.createElement('div');
                    }
                    var i = prefixes.length;
                    var prefixed;
                    while (i--) {
                        prefixed = camelPrefixes[i] + upper;
                        if (prefixed in testEl.style) {
                            return prefixes[i] + prop;
                        }
                    }
                    if (camel in testEl.style) {
                        return prop;
                    }
                }

                // xlink
                var xlinkNS = 'http://www.w3.org/1999/xlink';
                var xlinkRE = /^xlink:/;

                // check for attributes that prohibit interpolations
                var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
                // these attributes should also set their corresponding properties
                // because they only affect the initial state of the element
                var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;

                // these attributes should set a hidden property for
                // binding v-model to object values
                var modelProps = {
                    value: '_value',
                    'true-value': '_trueValue',
                    'false-value': '_falseValue'
                };

                var bind = {

                    priority: BIND,

                    bind: function bind() {
                        var attr = this.arg;
                        var tag = this.el.tagName;
                        // should be deep watch on object mode
                        if (!attr) {
                            this.deep = true;
                        }
                        // handle interpolation bindings
                        var descriptor = this.descriptor;
                        var tokens = descriptor.interp;
                        if (tokens) {
                            // handle interpolations with one-time tokens
                            if (descriptor.hasOneTime) {
                                this.expression = tokensToExp(tokens, this._scope || this.vm);
                            }

                            // only allow binding on native attributes
                            if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
                                process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
                                this.el.removeAttribute(attr);
                                this.invalid = true;
                            }

                            /* istanbul ignore if */
                            if (process.env.NODE_ENV !== 'production') {
                                var raw = attr + '="' + descriptor.raw + '": ';
                                // warn src
                                if (attr === 'src') {
                                    warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
                                }

                                // warn style
                                if (attr === 'style') {
                                    warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
                                }
                            }
                        }
                    },

                    update: function update(value) {
                        if (this.invalid) {
                            return;
                        }
                        var attr = this.arg;
                        if (this.arg) {
                            this.handleSingle(attr, value);
                        } else {
                            this.handleObject(value || {});
                        }
                    },

                    // share object handler with v-bind:class
                    handleObject: style.handleObject,

                    handleSingle: function handleSingle(attr, value) {
                        var el = this.el;
                        var interp = this.descriptor.interp;
                        if (this.modifiers.camel) {
                            attr = camelize(attr);
                        }
                        if (!interp && attrWithPropsRE.test(attr) && attr in el) {
                            el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
                            ? '' : value : value;
                        }
                        // set model props
                        var modelProp = modelProps[attr];
                        if (!interp && modelProp) {
                            el[modelProp] = value;
                            // update v-model if present
                            var model = el.__v_model;
                            if (model) {
                                model.listener();
                            }
                        }
                        // do not set value attribute for textarea
                        if (attr === 'value' && el.tagName === 'TEXTAREA') {
                            el.removeAttribute(attr);
                            return;
                        }
                        // update attribute
                        if (value != null && value !== false) {
                            if (attr === 'class') {
                                // handle edge case #1960:
                                // class interpolation should not overwrite Vue transition class
                                if (el.__v_trans) {
                                    value += ' ' + el.__v_trans.id + '-transition';
                                }
                                setClass(el, value);
                            } else if (xlinkRE.test(attr)) {
                                el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
                            } else {
                                el.setAttribute(attr, value === true ? '' : value);
                            }
                        } else {
                            el.removeAttribute(attr);
                        }
                    }
                };

                // keyCode aliases
                var keyCodes = {
                    esc: 27,
                    tab: 9,
                    enter: 13,
                    space: 32,
                    'delete': [8, 46],
                    up: 38,
                    left: 37,
                    right: 39,
                    down: 40
                };

                function keyFilter(handler, keys) {
                    var codes = keys.map(function(key) {
                        var charCode = key.charCodeAt(0);
                        if (charCode > 47 && charCode < 58) {
                            return parseInt(key, 10);
                        }
                        if (key.length === 1) {
                            charCode = key.toUpperCase().charCodeAt(0);
                            if (charCode > 64 && charCode < 91) {
                                return charCode;
                            }
                        }
                        return keyCodes[key];
                    });
                    codes = [].concat.apply([], codes);
                    return function keyHandler(e) {
                        if (codes.indexOf(e.keyCode) > -1) {
                            return handler.call(this, e);
                        }
                    };
                }

                function stopFilter(handler) {
                    return function stopHandler(e) {
                        e.stopPropagation();
                        return handler.call(this, e);
                    };
                }

                function preventFilter(handler) {
                    return function preventHandler(e) {
                        e.preventDefault();
                        return handler.call(this, e);
                    };
                }

                function selfFilter(handler) {
                    return function selfHandler(e) {
                        if (e.target === e.currentTarget) {
                            return handler.call(this, e);
                        }
                    };
                }

                var on = {

                    acceptStatement: true,
                    priority: ON,

                    bind: function bind() {
                        // deal with iframes
                        if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
                            var self = this;
                            this.iframeBind = function() {
                                on$1(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
                            };
                            this.on('load', this.iframeBind);
                        }
                    },

                    update: function update(handler) {
                        // stub a noop for v-on with no value,
                        // e.g. @mousedown.prevent
                        if (!this.descriptor.raw) {
                            handler = function() {};
                        }

                        if (typeof handler !== 'function') {
                            process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
                            return;
                        }

                        // apply modifiers
                        if (this.modifiers.stop) {
                            handler = stopFilter(handler);
                        }
                        if (this.modifiers.prevent) {
                            handler = preventFilter(handler);
                        }
                        if (this.modifiers.self) {
                            handler = selfFilter(handler);
                        }
                        // key filter
                        var keys = Object.keys(this.modifiers).filter(function(key) {
                            return key !== 'stop' && key !== 'prevent';
                        });
                        if (keys.length) {
                            handler = keyFilter(handler, keys);
                        }

                        this.reset();
                        this.handler = handler;

                        if (this.iframeBind) {
                            this.iframeBind();
                        } else {
                            on$1(this.el, this.arg, this.handler, this.modifiers.capture);
                        }
                    },

                    reset: function reset() {
                        var el = this.iframeBind ? this.el.contentWindow : this.el;
                        if (this.handler) {
                            off(el, this.arg, this.handler);
                        }
                    },

                    unbind: function unbind() {
                        this.reset();
                    }
                };

                var checkbox = {

                    bind: function bind() {
                        var self = this;
                        var el = this.el;

                        this.getValue = function() {
                            return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
                        };

                        function getBooleanValue() {
                            var val = el.checked;
                            if (val && el.hasOwnProperty('_trueValue')) {
                                return el._trueValue;
                            }
                            if (!val && el.hasOwnProperty('_falseValue')) {
                                return el._falseValue;
                            }
                            return val;
                        }

                        this.listener = function() {
                            var model = self._watcher.value;
                            if (isArray(model)) {
                                var val = self.getValue();
                                if (el.checked) {
                                    if (indexOf(model, val) < 0) {
                                        model.push(val);
                                    }
                                } else {
                                    model.$remove(val);
                                }
                            } else {
                                self.set(getBooleanValue());
                            }
                        };

                        this.on('change', this.listener);
                        if (el.hasAttribute('checked')) {
                            this.afterBind = this.listener;
                        }
                    },

                    update: function update(value) {
                        var el = this.el;
                        if (isArray(value)) {
                            el.checked = indexOf(value, this.getValue()) > -1;
                        } else {
                            if (el.hasOwnProperty('_trueValue')) {
                                el.checked = looseEqual(value, el._trueValue);
                            } else {
                                el.checked = !!value;
                            }
                        }
                    }
                };

                var select = {

                    bind: function bind() {
                        var self = this;
                        var el = this.el;

                        // method to force update DOM using latest value.
                        this.forceUpdate = function() {
                            if (self._watcher) {
                                self.update(self._watcher.get());
                            }
                        };

                        // check if this is a multiple select
                        var multiple = this.multiple = el.hasAttribute('multiple');

                        // attach listener
                        this.listener = function() {
                            var value = getValue(el, multiple);
                            value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
                            self.set(value);
                        };
                        this.on('change', this.listener);

                        // if has initial value, set afterBind
                        var initValue = getValue(el, multiple, true);
                        if (multiple && initValue.length || !multiple && initValue !== null) {
                            this.afterBind = this.listener;
                        }

                        // All major browsers except Firefox resets
                        // selectedIndex with value -1 to 0 when the element
                        // is appended to a new parent, therefore we have to
                        // force a DOM update whenever that happens...
                        this.vm.$on('hook:attached', this.forceUpdate);
                    },

                    update: function update(value) {
                        var el = this.el;
                        el.selectedIndex = -1;
                        var multi = this.multiple && isArray(value);
                        var options = el.options;
                        var i = options.length;
                        var op, val;
                        while (i--) {
                            op = options[i];
                            val = op.hasOwnProperty('_value') ? op._value : op.value;
                            /* eslint-disable eqeqeq */
                            op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
                            /* eslint-enable eqeqeq */
                        }
                    },

                    unbind: function unbind() {
                        /* istanbul ignore next */
                        this.vm.$off('hook:attached', this.forceUpdate);
                    }
                };

                /**
                 * Get select value
                 *
                 * @param {SelectElement} el
                 * @param {Boolean} multi
                 * @param {Boolean} init
                 * @return {Array|*}
                 */

                function getValue(el, multi, init) {
                    var res = multi ? [] : null;
                    var op, val, selected;
                    for (var i = 0, l = el.options.length; i < l; i++) {
                        op = el.options[i];
                        selected = init ? op.hasAttribute('selected') : op.selected;
                        if (selected) {
                            val = op.hasOwnProperty('_value') ? op._value : op.value;
                            if (multi) {
                                res.push(val);
                            } else {
                                return val;
                            }
                        }
                    }
                    return res;
                }

                /**
                 * Native Array.indexOf uses strict equal, but in this
                 * case we need to match string/numbers with custom equal.
                 *
                 * @param {Array} arr
                 * @param {*} val
                 */

                function indexOf$1(arr, val) {
                    var i = arr.length;
                    while (i--) {
                        if (looseEqual(arr[i], val)) {
                            return i;
                        }
                    }
                    return -1;
                }

                var radio = {

                    bind: function bind() {
                        var self = this;
                        var el = this.el;

                        this.getValue = function() {
                            // value overwrite via v-bind:value
                            if (el.hasOwnProperty('_value')) {
                                return el._value;
                            }
                            var val = el.value;
                            if (self.params.number) {
                                val = toNumber(val);
                            }
                            return val;
                        };

                        this.listener = function() {
                            self.set(self.getValue());
                        };
                        this.on('change', this.listener);

                        if (el.hasAttribute('checked')) {
                            this.afterBind = this.listener;
                        }
                    },

                    update: function update(value) {
                        this.el.checked = looseEqual(value, this.getValue());
                    }
                };

                var text$2 = {

                    bind: function bind() {
                        var self = this;
                        var el = this.el;
                        var isRange = el.type === 'range';
                        var lazy = this.params.lazy;
                        var number = this.params.number;
                        var debounce = this.params.debounce;

                        // handle composition events.
                        //   http://blog.evanyou.me/2014/01/03/composition-event/
                        // skip this for Android because it handles composition
                        // events quite differently. Android doesn't trigger
                        // composition events for language input methods e.g.
                        // Chinese, but instead triggers them for spelling
                        // suggestions... (see Discussion/#162)
                        var composing = false;
                        if (!isAndroid && !isRange) {
                            this.on('compositionstart', function() {
                                composing = true;
                            });
                            this.on('compositionend', function() {
                                composing = false;
                                // in IE11 the "compositionend" event fires AFTER
                                // the "input" event, so the input handler is blocked
                                // at the end... have to call it here.
                                //
                                // #1327: in lazy mode this is unecessary.
                                if (!lazy) {
                                    self.listener();
                                }
                            });
                        }

                        // prevent messing with the input when user is typing,
                        // and force update on blur.
                        this.focused = false;
                        if (!isRange && !lazy) {
                            this.on('focus', function() {
                                self.focused = true;
                            });
                            this.on('blur', function() {
                                self.focused = false;
                                // do not sync value after fragment removal (#2017)
                                if (!self._frag || self._frag.inserted) {
                                    self.rawListener();
                                }
                            });
                        }

                        // Now attach the main listener
                        this.listener = this.rawListener = function() {
                            if (composing || !self._bound) {
                                return;
                            }
                            var val = number || isRange ? toNumber(el.value) : el.value;
                            self.set(val);
                            // force update on next tick to avoid lock & same value
                            // also only update when user is not typing
                            nextTick(function() {
                                if (self._bound && !self.focused) {
                                    self.update(self._watcher.value);
                                }
                            });
                        };

                        // apply debounce
                        if (debounce) {
                            this.listener = _debounce(this.listener, debounce);
                        }

                        // Support jQuery events, since jQuery.trigger() doesn't
                        // trigger native events in some cases and some plugins
                        // rely on $.trigger()
                        //
                        // We want to make sure if a listener is attached using
                        // jQuery, it is also removed with jQuery, that's why
                        // we do the check for each directive instance and
                        // store that check result on itself. This also allows
                        // easier test coverage control by unsetting the global
                        // jQuery variable in tests.
                        this.hasjQuery = typeof jQuery === 'function';
                        if (this.hasjQuery) {
                            var method = jQuery.fn.on ? 'on' : 'bind';
                            jQuery(el)[method]('change', this.listener);
                            if (!lazy) {
                                jQuery(el)[method]('input', this.listener);
                            }
                        } else {
                            this.on('change', this.listener);
                            if (!lazy) {
                                this.on('input', this.listener);
                            }
                        }

                        // IE9 doesn't fire input event on backspace/del/cut
                        if (!lazy && isIE9) {
                            this.on('cut', function() {
                                nextTick(self.listener);
                            });
                            this.on('keyup', function(e) {
                                if (e.keyCode === 46 || e.keyCode === 8) {
                                    self.listener();
                                }
                            });
                        }

                        // set initial value if present
                        if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
                            this.afterBind = this.listener;
                        }
                    },

                    update: function update(value) {
                        this.el.value = _toString(value);
                    },

                    unbind: function unbind() {
                        var el = this.el;
                        if (this.hasjQuery) {
                            var method = jQuery.fn.off ? 'off' : 'unbind';
                            jQuery(el)[method]('change', this.listener);
                            jQuery(el)[method]('input', this.listener);
                        }
                    }
                };

                var handlers = {
                    text: text$2,
                    radio: radio,
                    select: select,
                    checkbox: checkbox
                };

                var model = {

                    priority: MODEL,
                    twoWay: true,
                    handlers: handlers,
                    params: ['lazy', 'number', 'debounce'],

                    /**
                     * Possible elements:
                     *   <select>
                     *   <textarea>
                     *   <input type="*">
                     *     - text
                     *     - checkbox
                     *     - radio
                     *     - number
                     */

                    bind: function bind() {
                        // friendly warning...
                        this.checkFilters();
                        if (this.hasRead && !this.hasWrite) {
                            process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
                        }
                        var el = this.el;
                        var tag = el.tagName;
                        var handler;
                        if (tag === 'INPUT') {
                            handler = handlers[el.type] || handlers.text;
                        } else if (tag === 'SELECT') {
                            handler = handlers.select;
                        } else if (tag === 'TEXTAREA') {
                            handler = handlers.text;
                        } else {
                            process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
                            return;
                        }
                        el.__v_model = this;
                        handler.bind.call(this);
                        this.update = handler.update;
                        this._unbind = handler.unbind;
                    },

                    /**
                     * Check read/write filter stats.
                     */

                    checkFilters: function checkFilters() {
                        var filters = this.filters;
                        if (!filters) return;
                        var i = filters.length;
                        while (i--) {
                            var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
                            if (typeof filter === 'function' || filter.read) {
                                this.hasRead = true;
                            }
                            if (filter.write) {
                                this.hasWrite = true;
                            }
                        }
                    },

                    unbind: function unbind() {
                        this.el.__v_model = null;
                        this._unbind && this._unbind();
                    }
                };

                var show = {

                    bind: function bind() {
                        // check else block
                        var next = this.el.nextElementSibling;
                        if (next && getAttr(next, 'v-else') !== null) {
                            this.elseEl = next;
                        }
                    },

                    update: function update(value) {
                        this.apply(this.el, value);
                        if (this.elseEl) {
                            this.apply(this.elseEl, !value);
                        }
                    },

                    apply: function apply(el, value) {
                        if (inDoc(el)) {
                            applyTransition(el, value ? 1 : -1, toggle, this.vm);
                        } else {
                            toggle();
                        }

                        function toggle() {
                            el.style.display = value ? '' : 'none';
                        }
                    }
                };

                var templateCache = new Cache(1000);
                var idSelectorCache = new Cache(1000);

                var map = {
                    efault: [0, '', ''],
                    legend: [1, '<fieldset>', '</fieldset>'],
                    tr: [2, '<table><tbody>', '</tbody></table>'],
                    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
                };

                map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

                map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

                map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

                map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

                /**
                 * Check if a node is a supported template node with a
                 * DocumentFragment content.
                 *
                 * @param {Node} node
                 * @return {Boolean}
                 */

                function isRealTemplate(node) {
                    return isTemplate(node) && node.content instanceof DocumentFragment;
                }

                var tagRE$1 = /<([\w:]+)/;
                var entityRE = /&#?\w+?;/;

                /**
                 * Convert a string template to a DocumentFragment.
                 * Determines correct wrapping by tag types. Wrapping
                 * strategy found in jQuery & component/domify.
                 *
                 * @param {String} templateString
                 * @param {Boolean} raw
                 * @return {DocumentFragment}
                 */

                function stringToFragment(templateString, raw) {
                    // try a cache hit first
                    var cacheKey = raw ? templateString : templateString.trim();
                    var hit = templateCache.get(cacheKey);
                    if (hit) {
                        return hit;
                    }

                    var frag = document.createDocumentFragment();
                    var tagMatch = templateString.match(tagRE$1);
                    var entityMatch = entityRE.test(templateString);

                    if (!tagMatch && !entityMatch) {
                        // text only, return a single text node.
                        frag.appendChild(document.createTextNode(templateString));
                    } else {

                        var tag = tagMatch && tagMatch[1];
                        var wrap = map[tag] || map.efault;
                        var depth = wrap[0];
                        var prefix = wrap[1];
                        var suffix = wrap[2];
                        var node = document.createElement('div');

                        node.innerHTML = prefix + templateString + suffix;
                        while (depth--) {
                            node = node.lastChild;
                        }

                        var child;
                        /* eslint-disable no-cond-assign */
                        while (child = node.firstChild) {
                            /* eslint-enable no-cond-assign */
                            frag.appendChild(child);
                        }
                    }
                    if (!raw) {
                        trimNode(frag);
                    }
                    templateCache.put(cacheKey, frag);
                    return frag;
                }

                /**
                 * Convert a template node to a DocumentFragment.
                 *
                 * @param {Node} node
                 * @return {DocumentFragment}
                 */

                function nodeToFragment(node) {
                    // if its a template tag and the browser supports it,
                    // its content is already a document fragment.
                    if (isRealTemplate(node)) {
                        trimNode(node.content);
                        return node.content;
                    }
                    // script template
                    if (node.tagName === 'SCRIPT') {
                        return stringToFragment(node.textContent);
                    }
                    // normal node, clone it to avoid mutating the original
                    var clonedNode = cloneNode(node);
                    var frag = document.createDocumentFragment();
                    var child;
                    /* eslint-disable no-cond-assign */
                    while (child = clonedNode.firstChild) {
                        /* eslint-enable no-cond-assign */
                        frag.appendChild(child);
                    }
                    trimNode(frag);
                    return frag;
                }

                // Test for the presence of the Safari template cloning bug
                // https://bugs.webkit.org/showug.cgi?id=137755
                var hasBrokenTemplate = (function() {
                    /* istanbul ignore else */
                    if (inBrowser) {
                        var a = document.createElement('div');
                        a.innerHTML = '<template>1</template>';
                        return !a.cloneNode(true).firstChild.innerHTML;
                    } else {
                        return false;
                    }
                })();

                // Test for IE10/11 textarea placeholder clone bug
                var hasTextareaCloneBug = (function() {
                    /* istanbul ignore else */
                    if (inBrowser) {
                        var t = document.createElement('textarea');
                        t.placeholder = 't';
                        return t.cloneNode(true).value === 't';
                    } else {
                        return false;
                    }
                })();

                /**
                 * 1. Deal with Safari cloning nested <template> bug by
                 *    manually cloning all template instances.
                 * 2. Deal with IE10/11 textarea placeholder bug by setting
                 *    the correct value after cloning.
                 *
                 * @param {Element|DocumentFragment} node
                 * @return {Element|DocumentFragment}
                 */

                function cloneNode(node) {
                    if (!node.querySelectorAll) {
                        return node.cloneNode();
                    }
                    var res = node.cloneNode(true);
                    var i, original, cloned;
                    /* istanbul ignore if */
                    if (hasBrokenTemplate) {
                        var tempClone = res;
                        if (isRealTemplate(node)) {
                            node = node.content;
                            tempClone = res.content;
                        }
                        original = node.querySelectorAll('template');
                        if (original.length) {
                            cloned = tempClone.querySelectorAll('template');
                            i = cloned.length;
                            while (i--) {
                                cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
                            }
                        }
                    }
                    /* istanbul ignore if */
                    if (hasTextareaCloneBug) {
                        if (node.tagName === 'TEXTAREA') {
                            res.value = node.value;
                        } else {
                            original = node.querySelectorAll('textarea');
                            if (original.length) {
                                cloned = res.querySelectorAll('textarea');
                                i = cloned.length;
                                while (i--) {
                                    cloned[i].value = original[i].value;
                                }
                            }
                        }
                    }
                    return res;
                }

                /**
                 * Process the template option and normalizes it into a
                 * a DocumentFragment that can be used as a partial or a
                 * instance template.
                 *
                 * @param {*} template
                 *        Possible values include:
                 *        - DocumentFragment object
                 *        - Node object of type Template
                 *        - id selector: '#some-template-id'
                 *        - template string: '<div><span>{{msg}}</span></div>'
                 * @param {Boolean} shouldClone
                 * @param {Boolean} raw
                 *        inline HTML interpolation. Do not check for id
                 *        selector and keep whitespace in the string.
                 * @return {DocumentFragment|undefined}
                 */

                function parseTemplate(template, shouldClone, raw) {
                    var node, frag;

                    // if the template is already a document fragment,
                    // do nothing
                    if (template instanceof DocumentFragment) {
                        trimNode(template);
                        return shouldClone ? cloneNode(template) : template;
                    }

                    if (typeof template === 'string') {
                        // id selector
                        if (!raw && template.charAt(0) === '#') {
                            // id selector can be cached too
                            frag = idSelectorCache.get(template);
                            if (!frag) {
                                node = document.getElementById(template.slice(1));
                                if (node) {
                                    frag = nodeToFragment(node);
                                    // save selector to cache
                                    idSelectorCache.put(template, frag);
                                }
                            }
                        } else {
                            // normal string template
                            frag = stringToFragment(template, raw);
                        }
                    } else if (template.nodeType) {
                        // a direct node
                        frag = nodeToFragment(template);
                    }

                    return frag && shouldClone ? cloneNode(frag) : frag;
                }

                var template = Object.freeze({
                    cloneNode: cloneNode,
                    parseTemplate: parseTemplate
                });

                /**
                 * Abstraction for a partially-compiled fragment.
                 * Can optionally compile content with a child scope.
                 *
                 * @param {Function} linker
                 * @param {Vue} vm
                 * @param {DocumentFragment} frag
                 * @param {Vue} [host]
                 * @param {Object} [scope]
                 */
                function Fragment(linker, vm, frag, host, scope, parentFrag) {
                    this.children = [];
                    this.childFrags = [];
                    this.vm = vm;
                    this.scope = scope;
                    this.inserted = false;
                    this.parentFrag = parentFrag;
                    if (parentFrag) {
                        parentFrag.childFrags.push(this);
                    }
                    this.unlink = linker(vm, frag, host, scope, this);
                    var single = this.single = frag.childNodes.length === 1 &&
                        // do not go single mode if the only node is an anchor
                        !frag.childNodes[0].__vue_anchor;
                    if (single) {
                        this.node = frag.childNodes[0];
                        this.before = singleBefore;
                        this.remove = singleRemove;
                    } else {
                        this.node = createAnchor('fragment-start');
                        this.end = createAnchor('fragment-end');
                        this.frag = frag;
                        prepend(this.node, frag);
                        frag.appendChild(this.end);
                        this.before = multiBefore;
                        this.remove = multiRemove;
                    }
                    this.node.__vfrag__ = this;
                }

                /**
                 * Call attach/detach for all components contained within
                 * this fragment. Also do so recursively for all child
                 * fragments.
                 *
                 * @param {Function} hook
                 */

                Fragment.prototype.callHook = function(hook) {
                    var i, l;
                    for (i = 0, l = this.childFrags.length; i < l; i++) {
                        this.childFrags[i].callHook(hook);
                    }
                    for (i = 0, l = this.children.length; i < l; i++) {
                        hook(this.children[i]);
                    }
                };

                /**
                 * Insert fragment before target, single node version
                 *
                 * @param {Node} target
                 * @param {Boolean} withTransition
                 */

                function singleBefore(target, withTransition) {
                    this.inserted = true;
                    var method = withTransition !== false ? beforeWithTransition : before;
                    method(this.node, target, this.vm);
                    if (inDoc(this.node)) {
                        this.callHook(attach);
                    }
                }

                /**
                 * Remove fragment, single node version
                 */

                function singleRemove() {
                    this.inserted = false;
                    var shouldCallRemove = inDoc(this.node);
                    var self = this;
                    this.beforeRemove();
                    removeWithTransition(this.node, this.vm, function() {
                        if (shouldCallRemove) {
                            self.callHook(detach);
                        }
                        self.destroy();
                    });
                }

                /**
                 * Insert fragment before target, multi-nodes version
                 *
                 * @param {Node} target
                 * @param {Boolean} withTransition
                 */

                function multiBefore(target, withTransition) {
                    this.inserted = true;
                    var vm = this.vm;
                    var method = withTransition !== false ? beforeWithTransition : before;
                    mapNodeRange(this.node, this.end, function(node) {
                        method(node, target, vm);
                    });
                    if (inDoc(this.node)) {
                        this.callHook(attach);
                    }
                }

                /**
                 * Remove fragment, multi-nodes version
                 */

                function multiRemove() {
                    this.inserted = false;
                    var self = this;
                    var shouldCallRemove = inDoc(this.node);
                    this.beforeRemove();
                    removeNodeRange(this.node, this.end, this.vm, this.frag, function() {
                        if (shouldCallRemove) {
                            self.callHook(detach);
                        }
                        self.destroy();
                    });
                }

                /**
                 * Prepare the fragment for removal.
                 */

                Fragment.prototype.beforeRemove = function() {
                    var i, l;
                    for (i = 0, l = this.childFrags.length; i < l; i++) {
                        // call the same method recursively on child
                        // fragments, depth-first
                        this.childFrags[i].beforeRemove(false);
                    }
                    for (i = 0, l = this.children.length; i < l; i++) {
                        // Call destroy for all contained instances,
                        // with remove:false and defer:true.
                        // Defer is necessary because we need to
                        // keep the children to call detach hooks
                        // on them.
                        this.children[i].$destroy(false, true);
                    }
                    var dirs = this.unlink.dirs;
                    for (i = 0, l = dirs.length; i < l; i++) {
                        // disable the watchers on all the directives
                        // so that the rendered content stays the same
                        // during removal.
                        dirs[i]._watcher && dirs[i]._watcher.teardown();
                    }
                };

                /**
                 * Destroy the fragment.
                 */

                Fragment.prototype.destroy = function() {
                    if (this.parentFrag) {
                        this.parentFrag.childFrags.$remove(this);
                    }
                    this.node.__vfrag__ = null;
                    this.unlink();
                };

                /**
                 * Call attach hook for a Vue instance.
                 *
                 * @param {Vue} child
                 */

                function attach(child) {
                    if (!child._isAttached) {
                        child._callHook('attached');
                    }
                }

                /**
                 * Call detach hook for a Vue instance.
                 *
                 * @param {Vue} child
                 */

                function detach(child) {
                    if (child._isAttached) {
                        child._callHook('detached');
                    }
                }

                var linkerCache = new Cache(5000);

                /**
                 * A factory that can be used to create instances of a
                 * fragment. Caches the compiled linker if possible.
                 *
                 * @param {Vue} vm
                 * @param {Element|String} el
                 */
                function FragmentFactory(vm, el) {
                    this.vm = vm;
                    var template;
                    var isString = typeof el === 'string';
                    if (isString || isTemplate(el)) {
                        template = parseTemplate(el, true);
                    } else {
                        template = document.createDocumentFragment();
                        template.appendChild(el);
                    }
                    this.template = template;
                    // linker can be cached, but only for components
                    var linker;
                    var cid = vm.constructor.cid;
                    if (cid > 0) {
                        var cacheId = cid + (isString ? el : el.outerHTML);
                        linker = linkerCache.get(cacheId);
                        if (!linker) {
                            linker = compile(template, vm.$options, true);
                            linkerCache.put(cacheId, linker);
                        }
                    } else {
                        linker = compile(template, vm.$options, true);
                    }
                    this.linker = linker;
                }

                /**
                 * Create a fragment instance with given host and scope.
                 *
                 * @param {Vue} host
                 * @param {Object} scope
                 * @param {Fragment} parentFrag
                 */

                FragmentFactory.prototype.create = function(host, scope, parentFrag) {
                    var frag = cloneNode(this.template);
                    return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
                };

                var vIf = {

                    priority: IF,

                    bind: function bind() {
                        var el = this.el;
                        if (!el.__vue__) {
                            // check else block
                            var next = el.nextElementSibling;
                            if (next && getAttr(next, 'v-else') !== null) {
                                remove(next);
                                this.elseFactory = new FragmentFactory(this.vm, next);
                            }
                            // check main block
                            this.anchor = createAnchor('v-if');
                            replace(el, this.anchor);
                            this.factory = new FragmentFactory(this.vm, el);
                        } else {
                            process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
                            this.invalid = true;
                        }
                    },

                    update: function update(value) {
                        if (this.invalid) return;
                        if (value) {
                            if (!this.frag) {
                                this.insert();
                            }
                        } else {
                            this.remove();
                        }
                    },

                    insert: function insert() {
                        if (this.elseFrag) {
                            this.elseFrag.remove();
                            this.elseFrag = null;
                        }
                        this.frag = this.factory.create(this._host, this._scope, this._frag);
                        this.frag.before(this.anchor);
                    },

                    remove: function remove() {
                        if (this.frag) {
                            this.frag.remove();
                            this.frag = null;
                        }
                        if (this.elseFactory && !this.elseFrag) {
                            this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
                            this.elseFrag.before(this.anchor);
                        }
                    },

                    unbind: function unbind() {
                        if (this.frag) {
                            this.frag.destroy();
                        }
                        if (this.elseFrag) {
                            this.elseFrag.destroy();
                        }
                    }
                };

                var uid$1 = 0;

                var vFor = {

                    priority: FOR,

                    params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

                    bind: function bind() {
                        // support "item in items" syntax
                        var inMatch = this.expression.match(/(.*) in (.*)/);
                        if (inMatch) {
                            var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
                            if (itMatch) {
                                this.iterator = itMatch[1].trim();
                                this.alias = itMatch[2].trim();
                            } else {
                                this.alias = inMatch[1].trim();
                            }
                            this.expression = inMatch[2];
                        }

                        if (!this.alias) {
                            process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
                            return;
                        }

                        // uid as a cache identifier
                        this.id = '__v-for__' + ++uid$1;

                        // check if this is an option list,
                        // so that we know if we need to update the <select>'s
                        // v-model when the option list has changed.
                        // because v-model has a lower priority than v-for,
                        // the v-model is not bound here yet, so we have to
                        // retrive it in the actual updateModel() function.
                        var tag = this.el.tagName;
                        this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

                        // setup anchor nodes
                        this.start = createAnchor('v-for-start');
                        this.end = createAnchor('v-for-end');
                        replace(this.el, this.end);
                        before(this.start, this.end);

                        // cache
                        this.cache = Object.create(null);

                        // fragment factory
                        this.factory = new FragmentFactory(this.vm, this.el);
                    },

                    update: function update(data) {
                        this.diff(data);
                        this.updateRef();
                        this.updateModel();
                    },

                    /**
                     * Diff, based on new data and old data, determine the
                     * minimum amount of DOM manipulations needed to make the
                     * DOM reflect the new data Array.
                     *
                     * The algorithm diffs the new data Array by storing a
                     * hidden reference to an owner vm instance on previously
                     * seen data. This allows us to achieve O(n) which is
                     * better than a levenshtein distance based algorithm,
                     * which is O(m * n).
                     *
                     * @param {Array} data
                     */

                    diff: function diff(data) {
                        // check if the Array was converted from an Object
                        var item = data[0];
                        var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

                        var trackByKey = this.params.trackBy;
                        var oldFrags = this.frags;
                        var frags = this.frags = new Array(data.length);
                        var alias = this.alias;
                        var iterator = this.iterator;
                        var start = this.start;
                        var end = this.end;
                        var inDocument = inDoc(start);
                        var init = !oldFrags;
                        var i, l, frag, key, value, primitive;

                        // First pass, go through the new Array and fill up
                        // the new frags array. If a piece of data has a cached
                        // instance for it, we reuse it. Otherwise build a new
                        // instance.
                        for (i = 0, l = data.length; i < l; i++) {
                            item = data[i];
                            key = convertedFromObject ? item.$key : null;
                            value = convertedFromObject ? item.$value : item;
                            primitive = !isObject(value);
                            frag = !init && this.getCachedFrag(value, i, key);
                            if (frag) {
                                // reusable fragment
                                frag.reused = true;
                                // update $index
                                frag.scope.$index = i;
                                // update $key
                                if (key) {
                                    frag.scope.$key = key;
                                }
                                // update iterator
                                if (iterator) {
                                    frag.scope[iterator] = key !== null ? key : i;
                                }
                                // update data for track-by, object repeat &
                                // primitive values.
                                if (trackByKey || convertedFromObject || primitive) {
                                    frag.scope[alias] = value;
                                }
                            } else {
                                // new isntance
                                frag = this.create(value, alias, i, key);
                                frag.fresh = !init;
                            }
                            frags[i] = frag;
                            if (init) {
                                frag.before(end);
                            }
                        }

                        // we're done for the initial render.
                        if (init) {
                            return;
                        }

                        // Second pass, go through the old fragments and
                        // destroy those who are not reused (and remove them
                        // from cache)
                        var removalIndex = 0;
                        var totalRemoved = oldFrags.length - frags.length;
                        // when removing a large number of fragments, watcher removal
                        // turns out to be a perf bottleneck, so we batch the watcher
                        // removals into a single filter call!
                        this.vm._vForRemoving = true;
                        for (i = 0, l = oldFrags.length; i < l; i++) {
                            frag = oldFrags[i];
                            if (!frag.reused) {
                                this.deleteCachedFrag(frag);
                                this.remove(frag, removalIndex++, totalRemoved, inDocument);
                            }
                        }
                        this.vm._vForRemoving = false;
                        this.vm._watchers = this.vm._watchers.filter(function(w) {
                            return w.active;
                        });

                        // Final pass, move/insert new fragments into the
                        // right place.
                        var targetPrev, prevEl, currentPrev;
                        var insertionIndex = 0;
                        for (i = 0, l = frags.length; i < l; i++) {
                            frag = frags[i];
                            // this is the frag that we should be after
                            targetPrev = frags[i - 1];
                            prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
                            if (frag.reused && !frag.staggerCb) {
                                currentPrev = findPrevFrag(frag, start, this.id);
                                if (currentPrev !== targetPrev && (!currentPrev ||
                                    // optimization for moving a single item.
                                    // thanks to suggestions by @livoras in #1807
                                    findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
                                    this.move(frag, prevEl);
                                }
                            } else {
                                // new instance, or still in stagger.
                                // insert with updated stagger index.
                                this.insert(frag, insertionIndex++, prevEl, inDocument);
                            }
                            frag.reused = frag.fresh = false;
                        }
                    },

                    /**
                     * Create a new fragment instance.
                     *
                     * @param {*} value
                     * @param {String} alias
                     * @param {Number} index
                     * @param {String} [key]
                     * @return {Fragment}
                     */

                    create: function create(value, alias, index, key) {
                        var host = this._host;
                        // create iteration scope
                        var parentScope = this._scope || this.vm;
                        var scope = Object.create(parentScope);
                        // ref holder for the scope
                        scope.$refs = Object.create(parentScope.$refs);
                        scope.$els = Object.create(parentScope.$els);
                        // make sure point $parent to parent scope
                        scope.$parent = parentScope;
                        // for two-way binding on alias
                        scope.$forContext = this;
                        // define scope properties
                        defineReactive(scope, alias, value);
                        defineReactive(scope, '$index', index);
                        if (key) {
                            defineReactive(scope, '$key', key);
                        } else if (scope.$key) {
                            // avoid accidental fallback
                            def(scope, '$key', null);
                        }
                        if (this.iterator) {
                            defineReactive(scope, this.iterator, key !== null ? key : index);
                        }
                        var frag = this.factory.create(host, scope, this._frag);
                        frag.forId = this.id;
                        this.cacheFrag(value, frag, index, key);
                        return frag;
                    },

                    /**
                     * Update the v-ref on owner vm.
                     */

                    updateRef: function updateRef() {
                        var ref = this.descriptor.ref;
                        if (!ref) return;
                        var hash = (this._scope || this.vm).$refs;
                        var refs;
                        if (!this.fromObject) {
                            refs = this.frags.map(findVmFromFrag);
                        } else {
                            refs = {};
                            this.frags.forEach(function(frag) {
                                refs[frag.scope.$key] = findVmFromFrag(frag);
                            });
                        }
                        hash[ref] = refs;
                    },

                    /**
                     * For option lists, update the containing v-model on
                     * parent <select>.
                     */

                    updateModel: function updateModel() {
                        if (this.isOption) {
                            var parent = this.start.parentNode;
                            var model = parent && parent.__v_model;
                            if (model) {
                                model.forceUpdate();
                            }
                        }
                    },

                    /**
                     * Insert a fragment. Handles staggering.
                     *
                     * @param {Fragment} frag
                     * @param {Number} index
                     * @param {Node} prevEl
                     * @param {Boolean} inDocument
                     */

                    insert: function insert(frag, index, prevEl, inDocument) {
                        if (frag.staggerCb) {
                            frag.staggerCb.cancel();
                            frag.staggerCb = null;
                        }
                        var staggerAmount = this.getStagger(frag, index, null, 'enter');
                        if (inDocument && staggerAmount) {
                            // create an anchor and insert it synchronously,
                            // so that we can resolve the correct order without
                            // worrying about some elements not inserted yet
                            var anchor = frag.staggerAnchor;
                            if (!anchor) {
                                anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
                                anchor.__vfrag__ = frag;
                            }
                            after(anchor, prevEl);
                            var op = frag.staggerCb = cancellable(function() {
                                frag.staggerCb = null;
                                frag.before(anchor);
                                remove(anchor);
                            });
                            setTimeout(op, staggerAmount);
                        } else {
                            frag.before(prevEl.nextSibling);
                        }
                    },

                    /**
                     * Remove a fragment. Handles staggering.
                     *
                     * @param {Fragment} frag
                     * @param {Number} index
                     * @param {Number} total
                     * @param {Boolean} inDocument
                     */

                    remove: function remove(frag, index, total, inDocument) {
                        if (frag.staggerCb) {
                            frag.staggerCb.cancel();
                            frag.staggerCb = null;
                            // it's not possible for the same frag to be removed
                            // twice, so if we have a pending stagger callback,
                            // it means this frag is queued for enter but removed
                            // before its transition started. Since it is already
                            // destroyed, we can just leave it in detached state.
                            return;
                        }
                        var staggerAmount = this.getStagger(frag, index, total, 'leave');
                        if (inDocument && staggerAmount) {
                            var op = frag.staggerCb = cancellable(function() {
                                frag.staggerCb = null;
                                frag.remove();
                            });
                            setTimeout(op, staggerAmount);
                        } else {
                            frag.remove();
                        }
                    },

                    /**
                     * Move a fragment to a new position.
                     * Force no transition.
                     *
                     * @param {Fragment} frag
                     * @param {Node} prevEl
                     */

                    move: function move(frag, prevEl) {
                        // fix a common issue with Sortable:
                        // if prevEl doesn't have nextSibling, this means it's
                        // been dragged after the end anchor. Just re-position
                        // the end anchor to the end of the container.
                        /* istanbul ignore if */
                        if (!prevEl.nextSibling) {
                            this.end.parentNode.appendChild(this.end);
                        }
                        frag.before(prevEl.nextSibling, false);
                    },

                    /**
                     * Cache a fragment using track-by or the object key.
                     *
                     * @param {*} value
                     * @param {Fragment} frag
                     * @param {Number} index
                     * @param {String} [key]
                     */

                    cacheFrag: function cacheFrag(value, frag, index, key) {
                        var trackByKey = this.params.trackBy;
                        var cache = this.cache;
                        var primitive = !isObject(value);
                        var id;
                        if (key || trackByKey || primitive) {
                            id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
                            if (!cache[id]) {
                                cache[id] = frag;
                            } else if (trackByKey !== '$index') {
                                process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
                            }
                        } else {
                            id = this.id;
                            if (hasOwn(value, id)) {
                                if (value[id] === null) {
                                    value[id] = frag;
                                } else {
                                    process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
                                }
                            } else {
                                def(value, id, frag);
                            }
                        }
                        frag.raw = value;
                    },

                    /**
                     * Get a cached fragment from the value/index/key
                     *
                     * @param {*} value
                     * @param {Number} index
                     * @param {String} key
                     * @return {Fragment}
                     */

                    getCachedFrag: function getCachedFrag(value, index, key) {
                        var trackByKey = this.params.trackBy;
                        var primitive = !isObject(value);
                        var frag;
                        if (key || trackByKey || primitive) {
                            var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
                            frag = this.cache[id];
                        } else {
                            frag = value[this.id];
                        }
                        if (frag && (frag.reused || frag.fresh)) {
                            process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
                        }
                        return frag;
                    },

                    /**
                     * Delete a fragment from cache.
                     *
                     * @param {Fragment} frag
                     */

                    deleteCachedFrag: function deleteCachedFrag(frag) {
                        var value = frag.raw;
                        var trackByKey = this.params.trackBy;
                        var scope = frag.scope;
                        var index = scope.$index;
                        // fix #948: avoid accidentally fall through to
                        // a parent repeater which happens to have $key.
                        var key = hasOwn(scope, '$key') && scope.$key;
                        var primitive = !isObject(value);
                        if (trackByKey || key || primitive) {
                            var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
                            this.cache[id] = null;
                        } else {
                            value[this.id] = null;
                            frag.raw = null;
                        }
                    },

                    /**
                     * Get the stagger amount for an insertion/removal.
                     *
                     * @param {Fragment} frag
                     * @param {Number} index
                     * @param {Number} total
                     * @param {String} type
                     */

                    getStagger: function getStagger(frag, index, total, type) {
                        type = type + 'Stagger';
                        var trans = frag.node.__v_trans;
                        var hooks = trans && trans.hooks;
                        var hook = hooks && (hooks[type] || hooks.stagger);
                        return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
                    },

                    /**
                     * Pre-process the value before piping it through the
                     * filters. This is passed to and called by the watcher.
                     */

                    _preProcess: function _preProcess(value) {
                        // regardless of type, store the un-filtered raw value.
                        this.rawValue = value;
                        return value;
                    },

                    /**
                     * Post-process the value after it has been piped through
                     * the filters. This is passed to and called by the watcher.
                     *
                     * It is necessary for this to be called during the
                     * wathcer's dependency collection phase because we want
                     * the v-for to update when the source Object is mutated.
                     */

                    _postProcess: function _postProcess(value) {
                        if (isArray(value)) {
                            return value;
                        } else if (isPlainObject(value)) {
                            // convert plain object to array.
                            var keys = Object.keys(value);
                            var i = keys.length;
                            var res = new Array(i);
                            var key;
                            while (i--) {
                                key = keys[i];
                                res[i] = {
                                    $key: key,
                                    $value: value[key]
                                };
                            }
                            return res;
                        } else {
                            if (typeof value === 'number' && !isNaN(value)) {
                                value = range(value);
                            }
                            return value || [];
                        }
                    },

                    unbind: function unbind() {
                        if (this.descriptor.ref) {
                            (this._scope || this.vm).$refs[this.descriptor.ref] = null;
                        }
                        if (this.frags) {
                            var i = this.frags.length;
                            var frag;
                            while (i--) {
                                frag = this.frags[i];
                                this.deleteCachedFrag(frag);
                                frag.destroy();
                            }
                        }
                    }
                };

                /**
                 * Helper to find the previous element that is a fragment
                 * anchor. This is necessary because a destroyed frag's
                 * element could still be lingering in the DOM before its
                 * leaving transition finishes, but its inserted flag
                 * should have been set to false so we can skip them.
                 *
                 * If this is a block repeat, we want to make sure we only
                 * return frag that is bound to this v-for. (see #929)
                 *
                 * @param {Fragment} frag
                 * @param {Comment|Text} anchor
                 * @param {String} id
                 * @return {Fragment}
                 */

                function findPrevFrag(frag, anchor, id) {
                    var el = frag.node.previousSibling;
                    /* istanbul ignore if */
                    if (!el) return;
                    frag = el.__vfrag__;
                    while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
                        el = el.previousSibling;
                        /* istanbul ignore if */
                        if (!el) return;
                        frag = el.__vfrag__;
                    }
                    return frag;
                }

                /**
                 * Find a vm from a fragment.
                 *
                 * @param {Fragment} frag
                 * @return {Vue|undefined}
                 */

                function findVmFromFrag(frag) {
                    var node = frag.node;
                    // handle multi-node frag
                    if (frag.end) {
                        while (!node.__vue__ && node !== frag.end && node.nextSibling) {
                            node = node.nextSibling;
                        }
                    }
                    return node.__vue__;
                }

                /**
                 * Create a range array from given number.
                 *
                 * @param {Number} n
                 * @return {Array}
                 */

                function range(n) {
                    var i = -1;
                    var ret = new Array(Math.floor(n));
                    while (++i < n) {
                        ret[i] = i;
                    }
                    return ret;
                }

                if (process.env.NODE_ENV !== 'production') {
                    vFor.warnDuplicate = function(value) {
                        warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
                    };
                }

                var html = {

                    bind: function bind() {
                        // a comment node means this is a binding for
                        // {{{ inline unescaped html }}}
                        if (this.el.nodeType === 8) {
                            // hold nodes
                            this.nodes = [];
                            // replace the placeholder with proper anchor
                            this.anchor = createAnchor('v-html');
                            replace(this.el, this.anchor);
                        }
                    },

                    update: function update(value) {
                        value = _toString(value);
                        if (this.nodes) {
                            this.swap(value);
                        } else {
                            this.el.innerHTML = value;
                        }
                    },

                    swap: function swap(value) {
                        // remove old nodes
                        var i = this.nodes.length;
                        while (i--) {
                            remove(this.nodes[i]);
                        }
                        // convert new value to a fragment
                        // do not attempt to retrieve from id selector
                        var frag = parseTemplate(value, true, true);
                        // save a reference to these nodes so we can remove later
                        this.nodes = toArray(frag.childNodes);
                        before(frag, this.anchor);
                    }
                };

                var text = {

                    bind: function bind() {
                        this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
                    },

                    update: function update(value) {
                        this.el[this.attr] = _toString(value);
                    }
                };

                // must export plain object
                var publicDirectives = {
                    text: text,
                    html: html,
                    'for': vFor,
                    'if': vIf,
                    show: show,
                    model: model,
                    on: on,
                    bind: bind,
                    el: el,
                    ref: ref,
                    cloak: cloak
                };

                var queue$1 = [];
                var queued = false;

                /**
                 * Push a job into the queue.
                 *
                 * @param {Function} job
                 */

                function pushJob(job) {
                    queue$1.push(job);
                    if (!queued) {
                        queued = true;
                        nextTick(flush);
                    }
                }

                /**
                 * Flush the queue, and do one forced reflow before
                 * triggering transitions.
                 */

                function flush() {
                    // Force layout
                    var f = document.documentElement.offsetHeight;
                    for (var i = 0; i < queue$1.length; i++) {
                        queue$1[i]();
                    }
                    queue$1 = [];
                    queued = false;
                    // dummy return, so js linters don't complain about
                    // unused variable f
                    return f;
                }

                var TYPE_TRANSITION = 'transition';
                var TYPE_ANIMATION = 'animation';
                var transDurationProp = transitionProp + 'Duration';
                var animDurationProp = animationProp + 'Duration';

                /**
                 * A Transition object that encapsulates the state and logic
                 * of the transition.
                 *
                 * @param {Element} el
                 * @param {String} id
                 * @param {Object} hooks
                 * @param {Vue} vm
                 */
                function Transition(el, id, hooks, vm) {
                    this.id = id;
                    this.el = el;
                    this.enterClass = hooks && hooks.enterClass || id + '-enter';
                    this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
                    this.hooks = hooks;
                    this.vm = vm;
                    // async state
                    this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
                    this.justEntered = false;
                    this.entered = this.left = false;
                    this.typeCache = {};
                    // check css transition type
                    this.type = hooks && hooks.type;
                    /* istanbul ignore if */
                    if (process.env.NODE_ENV !== 'production') {
                        if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
                            warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
                        }
                    }
                    // bind
                    var self = this;
                    ['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function(m) {
                        self[m] = bind$1(self[m], self);
                    });
                }

                var p$1 = Transition.prototype;

                /**
                 * Start an entering transition.
                 *
                 * 1. enter transition triggered
                 * 2. call beforeEnter hook
                 * 3. add enter class
                 * 4. insert/show element
                 * 5. call enter hook (with possible explicit js callback)
                 * 6. reflow
                 * 7. based on transition type:
                 *    - transition:
                 *        remove class now, wait for transitionend,
                 *        then done if there's no explicit js callback.
                 *    - animation:
                 *        wait for animationend, remove class,
                 *        then done if there's no explicit js callback.
                 *    - no css transition:
                 *        done now if there's no explicit js callback.
                 * 8. wait for either done or js callback, then call
                 *    afterEnter hook.
                 *
                 * @param {Function} op - insert/show the element
                 * @param {Function} [cb]
                 */

                p$1.enter = function(op, cb) {
                    this.cancelPending();
                    this.callHook('beforeEnter');
                    this.cb = cb;
                    addClass(this.el, this.enterClass);
                    op();
                    this.entered = false;
                    this.callHookWithCb('enter');
                    if (this.entered) {
                        return; // user called done synchronously.
                    }
                    this.cancel = this.hooks && this.hooks.enterCancelled;
                    pushJob(this.enterNextTick);
                };

                /**
                 * The "nextTick" phase of an entering transition, which is
                 * to be pushed into a queue and executed after a reflow so
                 * that removing the class can trigger a CSS transition.
                 */

                p$1.enterNextTick = function() {

                    // Important hack:
                    // in Chrome, if a just-entered element is applied the
                    // leave class while its interpolated property still has
                    // a very small value (within one frame), Chrome will
                    // skip the leave transition entirely and not firing the
                    // transtionend event. Therefore we need to protected
                    // against such cases using a one-frame timeout.
                    this.justEntered = true;
                    var self = this;
                    setTimeout(function() {
                        self.justEntered = false;
                    }, 17);

                    var enterDone = this.enterDone;
                    var type = this.getCssTransitionType(this.enterClass);
                    if (!this.pendingJsCb) {
                        if (type === TYPE_TRANSITION) {
                            // trigger transition by removing enter class now
                            removeClass(this.el, this.enterClass);
                            this.setupCssCb(transitionEndEvent, enterDone);
                        } else if (type === TYPE_ANIMATION) {
                            this.setupCssCb(animationEndEvent, enterDone);
                        } else {
                            enterDone();
                        }
                    } else if (type === TYPE_TRANSITION) {
                        removeClass(this.el, this.enterClass);
                    }
                };

                /**
                 * The "cleanup" phase of an entering transition.
                 */

                p$1.enterDone = function() {
                    this.entered = true;
                    this.cancel = this.pendingJsCb = null;
                    removeClass(this.el, this.enterClass);
                    this.callHook('afterEnter');
                    if (this.cb) this.cb();
                };

                /**
                 * Start a leaving transition.
                 *
                 * 1. leave transition triggered.
                 * 2. call beforeLeave hook
                 * 3. add leave class (trigger css transition)
                 * 4. call leave hook (with possible explicit js callback)
                 * 5. reflow if no explicit js callback is provided
                 * 6. based on transition type:
                 *    - transition or animation:
                 *        wait for end event, remove class, then done if
                 *        there's no explicit js callback.
                 *    - no css transition:
                 *        done if there's no explicit js callback.
                 * 7. wait for either done or js callback, then call
                 *    afterLeave hook.
                 *
                 * @param {Function} op - remove/hide the element
                 * @param {Function} [cb]
                 */

                p$1.leave = function(op, cb) {
                    this.cancelPending();
                    this.callHook('beforeLeave');
                    this.op = op;
                    this.cb = cb;
                    addClass(this.el, this.leaveClass);
                    this.left = false;
                    this.callHookWithCb('leave');
                    if (this.left) {
                        return; // user called done synchronously.
                    }
                    this.cancel = this.hooks && this.hooks.leaveCancelled;
                    // only need to handle leaveDone if
                    // 1. the transition is already done (synchronously called
                    //    by the user, which causes this.op set to null)
                    // 2. there's no explicit js callback
                    if (this.op && !this.pendingJsCb) {
                        // if a CSS transition leaves immediately after enter,
                        // the transitionend event never fires. therefore we
                        // detect such cases and end the leave immediately.
                        if (this.justEntered) {
                            this.leaveDone();
                        } else {
                            pushJob(this.leaveNextTick);
                        }
                    }
                };

                /**
                 * The "nextTick" phase of a leaving transition.
                 */

                p$1.leaveNextTick = function() {
                    var type = this.getCssTransitionType(this.leaveClass);
                    if (type) {
                        var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
                        this.setupCssCb(event, this.leaveDone);
                    } else {
                        this.leaveDone();
                    }
                };

                /**
                 * The "cleanup" phase of a leaving transition.
                 */

                p$1.leaveDone = function() {
                    this.left = true;
                    this.cancel = this.pendingJsCb = null;
                    this.op();
                    removeClass(this.el, this.leaveClass);
                    this.callHook('afterLeave');
                    if (this.cb) this.cb();
                    this.op = null;
                };

                /**
                 * Cancel any pending callbacks from a previously running
                 * but not finished transition.
                 */

                p$1.cancelPending = function() {
                    this.op = this.cb = null;
                    var hasPending = false;
                    if (this.pendingCssCb) {
                        hasPending = true;
                        off(this.el, this.pendingCssEvent, this.pendingCssCb);
                        this.pendingCssEvent = this.pendingCssCb = null;
                    }
                    if (this.pendingJsCb) {
                        hasPending = true;
                        this.pendingJsCb.cancel();
                        this.pendingJsCb = null;
                    }
                    if (hasPending) {
                        removeClass(this.el, this.enterClass);
                        removeClass(this.el, this.leaveClass);
                    }
                    if (this.cancel) {
                        this.cancel.call(this.vm, this.el);
                        this.cancel = null;
                    }
                };

                /**
                 * Call a user-provided synchronous hook function.
                 *
                 * @param {String} type
                 */

                p$1.callHook = function(type) {
                    if (this.hooks && this.hooks[type]) {
                        this.hooks[type].call(this.vm, this.el);
                    }
                };

                /**
                 * Call a user-provided, potentially-async hook function.
                 * We check for the length of arguments to see if the hook
                 * expects a `done` callback. If true, the transition's end
                 * will be determined by when the user calls that callback;
                 * otherwise, the end is determined by the CSS transition or
                 * animation.
                 *
                 * @param {String} type
                 */

                p$1.callHookWithCb = function(type) {
                    var hook = this.hooks && this.hooks[type];
                    if (hook) {
                        if (hook.length > 1) {
                            this.pendingJsCb = cancellable(this[type + 'Done']);
                        }
                        hook.call(this.vm, this.el, this.pendingJsCb);
                    }
                };

                /**
                 * Get an element's transition type based on the
                 * calculated styles.
                 *
                 * @param {String} className
                 * @return {Number}
                 */

                p$1.getCssTransitionType = function(className) {
                    /* istanbul ignore if */
                    if (!transitionEndEvent ||
                        // skip CSS transitions if page is not visible -
                        // this solves the issue of transitionend events not
                        // firing until the page is visible again.
                        // pageVisibility API is supported in IE10+, same as
                        // CSS transitions.
                        document.hidden ||
                        // explicit js-only transition
                        this.hooks && this.hooks.css === false ||
                        // element is hidden
                        isHidden(this.el)) {
                        return;
                    }
                    var type = this.type || this.typeCache[className];
                    if (type) return type;
                    var inlineStyles = this.el.style;
                    var computedStyles = window.getComputedStyle(this.el);
                    var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
                    if (transDuration && transDuration !== '0s') {
                        type = TYPE_TRANSITION;
                    } else {
                        var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
                        if (animDuration && animDuration !== '0s') {
                            type = TYPE_ANIMATION;
                        }
                    }
                    if (type) {
                        this.typeCache[className] = type;
                    }
                    return type;
                };

                /**
                 * Setup a CSS transitionend/animationend callback.
                 *
                 * @param {String} event
                 * @param {Function} cb
                 */

                p$1.setupCssCb = function(event, cb) {
                    this.pendingCssEvent = event;
                    var self = this;
                    var el = this.el;
                    var onEnd = this.pendingCssCb = function(e) {
                        if (e.target === el) {
                            off(el, event, onEnd);
                            self.pendingCssEvent = self.pendingCssCb = null;
                            if (!self.pendingJsCb && cb) {
                                cb();
                            }
                        }
                    };
                    on$1(el, event, onEnd);
                };

                /**
                 * Check if an element is hidden - in that case we can just
                 * skip the transition alltogether.
                 *
                 * @param {Element} el
                 * @return {Boolean}
                 */

                function isHidden(el) {
                    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
                }

                var transition = {

                    priority: TRANSITION,

                    update: function update(id, oldId) {
                        var el = this.el;
                        // resolve on owner vm
                        var hooks = resolveAsset(this.vm.$options, 'transitions', id);
                        id = id || 'v';
                        // apply on closest vm
                        el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
                        if (oldId) {
                            removeClass(el, oldId + '-transition');
                        }
                        addClass(el, id + '-transition');
                    }
                };

                var bindingModes = config._propBindingModes;

                var propDef = {

                    bind: function bind() {

                        var child = this.vm;
                        var parent = child._context;
                        // passed in from compiler directly
                        var prop = this.descriptor.prop;
                        var childKey = prop.path;
                        var parentKey = prop.parentPath;
                        var twoWay = prop.mode === bindingModes.TWO_WAY;

                        var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function(val) {
                            val = coerceProp(prop, val);
                            if (assertProp(prop, val)) {
                                child[childKey] = val;
                            }
                        }, {
                            twoWay: twoWay,
                            filters: prop.filters,
                            // important: props need to be observed on the
                            // v-for scope if present
                            scope: this._scope
                        });

                        // set the child initial value.
                        initProp(child, prop, parentWatcher.value);

                        // setup two-way binding
                        if (twoWay) {
                            // important: defer the child watcher creation until
                            // the created hook (after data observation)
                            var self = this;
                            child.$once('pre-hook:created', function() {
                                self.childWatcher = new Watcher(child, childKey, function(val) {
                                    parentWatcher.set(val);
                                }, {
                                    // ensure sync upward before parent sync down.
                                    // this is necessary in cases e.g. the child
                                    // mutates a prop array, then replaces it. (#1683)
                                    sync: true
                                });
                            });
                        }
                    },

                    unbind: function unbind() {
                        this.parentWatcher.teardown();
                        if (this.childWatcher) {
                            this.childWatcher.teardown();
                        }
                    }
                };

                var component = {

                    priority: COMPONENT,

                    params: ['keep-alive', 'transition-mode', 'inline-template'],

                    /**
                     * Setup. Two possible usages:
                     *
                     * - static:
                     *   <comp> or <div v-component="comp">
                     *
                     * - dynamic:
                     *   <component :is="view">
                     */

                    bind: function bind() {
                        if (!this.el.__vue__) {
                            // keep-alive cache
                            this.keepAlive = this.params.keepAlive;
                            if (this.keepAlive) {
                                this.cache = {};
                            }
                            // check inline-template
                            if (this.params.inlineTemplate) {
                                // extract inline template as a DocumentFragment
                                this.inlineTemplate = extractContent(this.el, true);
                            }
                            // component resolution related state
                            this.pendingComponentCb = this.Component = null;
                            // transition related state
                            this.pendingRemovals = 0;
                            this.pendingRemovalCb = null;
                            // create a ref anchor
                            this.anchor = createAnchor('v-component');
                            replace(this.el, this.anchor);
                            // remove is attribute.
                            // this is removed during compilation, but because compilation is
                            // cached, when the component is used elsewhere this attribute
                            // will remain at link time.
                            this.el.removeAttribute('is');
                            // remove ref, same as above
                            if (this.descriptor.ref) {
                                this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
                            }
                            // if static, build right now.
                            if (this.literal) {
                                this.setComponent(this.expression);
                            }
                        } else {
                            process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
                        }
                    },

                    /**
                     * Public update, called by the watcher in the dynamic
                     * literal scenario, e.g. <component :is="view">
                     */

                    update: function update(value) {
                        if (!this.literal) {
                            this.setComponent(value);
                        }
                    },

                    /**
                     * Switch dynamic components. May resolve the component
                     * asynchronously, and perform transition based on
                     * specified transition mode. Accepts a few additional
                     * arguments specifically for vue-router.
                     *
                     * The callback is called when the full transition is
                     * finished.
                     *
                     * @param {String} value
                     * @param {Function} [cb]
                     */

                    setComponent: function setComponent(value, cb) {
                        this.invalidatePending();
                        if (!value) {
                            // just remove current
                            this.unbuild(true);
                            this.remove(this.childVM, cb);
                            this.childVM = null;
                        } else {
                            var self = this;
                            this.resolveComponent(value, function() {
                                self.mountComponent(cb);
                            });
                        }
                    },

                    /**
                     * Resolve the component constructor to use when creating
                     * the child vm.
                     */

                    resolveComponent: function resolveComponent(id, cb) {
                        var self = this;
                        this.pendingComponentCb = cancellable(function(Component) {
                            self.ComponentName = Component.options.name || id;
                            self.Component = Component;
                            cb();
                        });
                        this.vm._resolveComponent(id, this.pendingComponentCb);
                    },

                    /**
                     * Create a new instance using the current constructor and
                     * replace the existing instance. This method doesn't care
                     * whether the new component and the old one are actually
                     * the same.
                     *
                     * @param {Function} [cb]
                     */

                    mountComponent: function mountComponent(cb) {
                        // actual mount
                        this.unbuild(true);
                        var self = this;
                        var activateHook = this.Component.options.activate;
                        var cached = this.getCached();
                        var newComponent = this.build();
                        if (activateHook && !cached) {
                            this.waitingFor = newComponent;
                            activateHook.call(newComponent, function() {
                                if (self.waitingFor !== newComponent) {
                                    return;
                                }
                                self.waitingFor = null;
                                self.transition(newComponent, cb);
                            });
                        } else {
                            // update ref for kept-alive component
                            if (cached) {
                                newComponent._updateRef();
                            }
                            this.transition(newComponent, cb);
                        }
                    },

                    /**
                     * When the component changes or unbinds before an async
                     * constructor is resolved, we need to invalidate its
                     * pending callback.
                     */

                    invalidatePending: function invalidatePending() {
                        if (this.pendingComponentCb) {
                            this.pendingComponentCb.cancel();
                            this.pendingComponentCb = null;
                        }
                    },

                    /**
                     * Instantiate/insert a new child vm.
                     * If keep alive and has cached instance, insert that
                     * instance; otherwise build a new one and cache it.
                     *
                     * @param {Object} [extraOptions]
                     * @return {Vue} - the created instance
                     */

                    build: function build(extraOptions) {
                        var cached = this.getCached();
                        if (cached) {
                            return cached;
                        }
                        if (this.Component) {
                            // default options
                            var options = {
                                name: this.ComponentName,
                                el: cloneNode(this.el),
                                template: this.inlineTemplate,
                                // make sure to add the child with correct parent
                                // if this is a transcluded component, its parent
                                // should be the transclusion host.
                                parent: this._host || this.vm,
                                // if no inline-template, then the compiled
                                // linker can be cached for better performance.
                                _linkerCachable: !this.inlineTemplate,
                                _ref: this.descriptor.ref,
                                _asComponent: true,
                                _isRouterView: this._isRouterView,
                                // if this is a transcluded component, context
                                // will be the common parent vm of this instance
                                // and its host.
                                _context: this.vm,
                                // if this is inside an inline v-for, the scope
                                // will be the intermediate scope created for this
                                // repeat fragment. this is used for linking props
                                // and container directives.
                                _scope: this._scope,
                                // pass in the owner fragment of this component.
                                // this is necessary so that the fragment can keep
                                // track of its contained components in order to
                                // call attach/detach hooks for them.
                                _frag: this._frag
                            };
                            // extra options
                            // in 1.0.0 this is used by vue-router only
                            /* istanbul ignore if */
                            if (extraOptions) {
                                extend(options, extraOptions);
                            }
                            var child = new this.Component(options);
                            if (this.keepAlive) {
                                this.cache[this.Component.cid] = child;
                            }
                            /* istanbul ignore if */
                            if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
                                warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
                            }
                            return child;
                        }
                    },

                    /**
                     * Try to get a cached instance of the current component.
                     *
                     * @return {Vue|undefined}
                     */

                    getCached: function getCached() {
                        return this.keepAlive && this.cache[this.Component.cid];
                    },

                    /**
                     * Teardown the current child, but defers cleanup so
                     * that we can separate the destroy and removal steps.
                     *
                     * @param {Boolean} defer
                     */

                    unbuild: function unbuild(defer) {
                        if (this.waitingFor) {
                            this.waitingFor.$destroy();
                            this.waitingFor = null;
                        }
                        var child = this.childVM;
                        if (!child || this.keepAlive) {
                            if (child) {
                                // remove ref
                                child._updateRef(true);
                            }
                            return;
                        }
                        // the sole purpose of `deferCleanup` is so that we can
                        // "deactivate" the vm right now and perform DOM removal
                        // later.
                        child.$destroy(false, defer);
                    },

                    /**
                     * Remove current destroyed child and manually do
                     * the cleanup after removal.
                     *
                     * @param {Function} cb
                     */

                    remove: function remove(child, cb) {
                        var keepAlive = this.keepAlive;
                        if (child) {
                            // we may have a component switch when a previous
                            // component is still being transitioned out.
                            // we want to trigger only one lastest insertion cb
                            // when the existing transition finishes. (#1119)
                            this.pendingRemovals++;
                            this.pendingRemovalCb = cb;
                            var self = this;
                            child.$remove(function() {
                                self.pendingRemovals--;
                                if (!keepAlive) child._cleanup();
                                if (!self.pendingRemovals && self.pendingRemovalCb) {
                                    self.pendingRemovalCb();
                                    self.pendingRemovalCb = null;
                                }
                            });
                        } else if (cb) {
                            cb();
                        }
                    },

                    /**
                     * Actually swap the components, depending on the
                     * transition mode. Defaults to simultaneous.
                     *
                     * @param {Vue} target
                     * @param {Function} [cb]
                     */

                    transition: function transition(target, cb) {
                        var self = this;
                        var current = this.childVM;
                        // for devtool inspection
                        if (process.env.NODE_ENV !== 'production') {
                            if (current) current._inactive = true;
                            target._inactive = false;
                        }
                        this.childVM = target;
                        switch (self.params.transitionMode) {
                            case 'in-out':
                                target.$before(self.anchor, function() {
                                    self.remove(current, cb);
                                });
                                break;
                            case 'out-in':
                                self.remove(current, function() {
                                    target.$before(self.anchor, cb);
                                });
                                break;
                            default:
                                self.remove(current);
                                target.$before(self.anchor, cb);
                        }
                    },

                    /**
                     * Unbind.
                     */

                    unbind: function unbind() {
                        this.invalidatePending();
                        // Do not defer cleanup when unbinding
                        this.unbuild();
                        // destroy all keep-alive cached instances
                        if (this.cache) {
                            for (var key in this.cache) {
                                this.cache[key].$destroy();
                            }
                            this.cache = null;
                        }
                    }
                };

                var vClass = {

                    deep: true,

                    update: function update(value) {
                        if (value && typeof value === 'string') {
                            this.handleObject(stringToObject(value));
                        } else if (isPlainObject(value)) {
                            this.handleObject(value);
                        } else if (isArray(value)) {
                            this.handleArray(value);
                        } else {
                            this.cleanup();
                        }
                    },

                    handleObject: function handleObject(value) {
                        this.cleanup(value);
                        var keys = this.prevKeys = Object.keys(value);
                        for (var i = 0, l = keys.length; i < l; i++) {
                            var key = keys[i];
                            if (value[key]) {
                                addClass(this.el, key);
                            } else {
                                removeClass(this.el, key);
                            }
                        }
                    },

                    handleArray: function handleArray(value) {
                        this.cleanup(value);
                        for (var i = 0, l = value.length; i < l; i++) {
                            if (value[i]) {
                                addClass(this.el, value[i]);
                            }
                        }
                        this.prevKeys = value.slice();
                    },

                    cleanup: function cleanup(value) {
                        if (this.prevKeys) {
                            var i = this.prevKeys.length;
                            while (i--) {
                                var key = this.prevKeys[i];
                                if (key && (!value || !contains$1(value, key))) {
                                    removeClass(this.el, key);
                                }
                            }
                        }
                    }
                };

                function stringToObject(value) {
                    var res = {};
                    var keys = value.trim().split(/\s+/);
                    var i = keys.length;
                    while (i--) {
                        res[keys[i]] = true;
                    }
                    return res;
                }

                function contains$1(value, key) {
                    return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
                }

                var internalDirectives = {
                    style: style,
                    'class': vClass,
                    component: component,
                    prop: propDef,
                    transition: transition
                };

                var propBindingModes = config._propBindingModes;
                var empty = {};

                // regexes
                var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
                var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

                /**
                 * Compile props on a root element and return
                 * a props link function.
                 *
                 * @param {Element|DocumentFragment} el
                 * @param {Array} propOptions
                 * @return {Function} propsLinkFn
                 */

                function compileProps(el, propOptions) {
                    var props = [];
                    var names = Object.keys(propOptions);
                    var i = names.length;
                    var options, name, attr, value, path, parsed, prop;
                    while (i--) {
                        name = names[i];
                        options = propOptions[name] || empty;

                        if (process.env.NODE_ENV !== 'production' && name === '$data') {
                            warn('Do not use $data as prop.');
                            continue;
                        }

                        // props could contain dashes, which will be
                        // interpreted as minus calculations by the parser
                        // so we need to camelize the path here
                        path = camelize(name);
                        if (!identRE$1.test(path)) {
                            process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
                            continue;
                        }

                        prop = {
                            name: name,
                            path: path,
                            options: options,
                            mode: propBindingModes.ONE_WAY,
                            raw: null
                        };

                        attr = hyphenate(name);
                        // first check dynamic version
                        if ((value = getBindAttr(el, attr)) === null) {
                            if ((value = getBindAttr(el, attr + '.sync')) !== null) {
                                prop.mode = propBindingModes.TWO_WAY;
                            } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
                                prop.mode = propBindingModes.ONE_TIME;
                            }
                        }
                        if (value !== null) {
                            // has dynamic binding!
                            prop.raw = value;
                            parsed = parseDirective(value);
                            value = parsed.expression;
                            prop.filters = parsed.filters;
                            // check binding type
                            if (isLiteral(value) && !parsed.filters) {
                                // for expressions containing literal numbers and
                                // booleans, there's no need to setup a prop binding,
                                // so we can optimize them as a one-time set.
                                prop.optimizedLiteral = true;
                            } else {
                                prop.dynamic = true;
                                // check non-settable path for two-way bindings
                                if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
                                    prop.mode = propBindingModes.ONE_WAY;
                                    warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
                                }
                            }
                            prop.parentPath = value;

                            // warn required two-way
                            if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
                                warn('Prop "' + name + '" expects a two-way binding type.');
                            }
                        } else if ((value = getAttr(el, attr)) !== null) {
                            // has literal binding!
                            prop.raw = value;
                        } else if (options.required) {
                            // warn missing required
                            process.env.NODE_ENV !== 'production' && warn('Missing required prop: ' + name);
                        }
                        // push prop
                        props.push(prop);
                    }
                    return makePropsLinkFn(props);
                }

                /**
                 * Build a function that applies props to a vm.
                 *
                 * @param {Array} props
                 * @return {Function} propsLinkFn
                 */

                function makePropsLinkFn(props) {
                    return function propsLinkFn(vm, scope) {
                        // store resolved props info
                        vm._props = {};
                        var i = props.length;
                        var prop, path, options, value, raw;
                        while (i--) {
                            prop = props[i];
                            raw = prop.raw;
                            path = prop.path;
                            options = prop.options;
                            vm._props[path] = prop;
                            if (raw === null) {
                                // initialize absent prop
                                initProp(vm, prop, getDefault(vm, options));
                            } else if (prop.dynamic) {
                                // dynamic prop
                                if (vm._context) {
                                    if (prop.mode === propBindingModes.ONE_TIME) {
                                        // one time binding
                                        value = (scope || vm._context).$get(prop.parentPath);
                                        initProp(vm, prop, value);
                                    } else {
                                        // dynamic binding
                                        vm._bindDir({
                                            name: 'prop',
                                            def: propDef,
                                            prop: prop
                                        }, null, null, scope); // el, host, scope
                                    }
                                } else {
                                    process.env.NODE_ENV !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
                                }
                            } else if (prop.optimizedLiteral) {
                                // optimized literal, cast it and just set once
                                var stripped = stripQuotes(raw);
                                value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
                                initProp(vm, prop, value);
                            } else {
                                // string literal, but we need to cater for
                                // Boolean props with no value
                                value = options.type === Boolean && raw === '' ? true : raw;
                                initProp(vm, prop, value);
                            }
                        }
                    };
                }

                /**
                 * Get the default value of a prop.
                 *
                 * @param {Vue} vm
                 * @param {Object} options
                 * @return {*}
                 */

                function getDefault(vm, options) {
                    // no default, return undefined
                    if (!hasOwn(options, 'default')) {
                        // absent boolean value defaults to false
                        return options.type === Boolean ? false : undefined;
                    }
                    var def = options['default'];
                    // warn against non-factory defaults for Object & Array
                    if (isObject(def)) {
                        process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
                    }
                    // call factory function for non-Function types
                    return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
                }

                // special binding prefixes
                var bindRE = /^v-bind:|^:/;
                var onRE = /^v-on:|^@/;
                var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
                var modifierRE = /\.[^\.]+/g;
                var transitionRE = /^(v-bind:|:)?transition$/;

                // terminal directives
                var terminalDirectives = ['for', 'if'];

                // default directive priority
                var DEFAULT_PRIORITY = 1000;

                /**
                 * Compile a template and return a reusable composite link
                 * function, which recursively contains more link functions
                 * inside. This top level compile function would normally
                 * be called on instance root nodes, but can also be used
                 * for partial compilation if the partial argument is true.
                 *
                 * The returned composite link function, when called, will
                 * return an unlink function that tearsdown all directives
                 * created during the linking phase.
                 *
                 * @param {Element|DocumentFragment} el
                 * @param {Object} options
                 * @param {Boolean} partial
                 * @return {Function}
                 */

                function compile(el, options, partial) {
                    // link function for the node itself.
                    var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
                    // link function for the childNodes
                    var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

                    /**
                     * A composite linker function to be called on a already
                     * compiled piece of DOM, which instantiates all directive
                     * instances.
                     *
                     * @param {Vue} vm
                     * @param {Element|DocumentFragment} el
                     * @param {Vue} [host] - host vm of transcluded content
                     * @param {Object} [scope] - v-for scope
                     * @param {Fragment} [frag] - link context fragment
                     * @return {Function|undefined}
                     */

                    return function compositeLinkFn(vm, el, host, scope, frag) {
                        // cache childNodes before linking parent, fix #657
                        var childNodes = toArray(el.childNodes);
                        // link
                        var dirs = linkAndCapture(function compositeLinkCapturer() {
                            if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
                            if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
                        }, vm);
                        return makeUnlinkFn(vm, dirs);
                    };
                }

                /**
                 * Apply a linker to a vm/element pair and capture the
                 * directives created during the process.
                 *
                 * @param {Function} linker
                 * @param {Vue} vm
                 */

                function linkAndCapture(linker, vm) {
                    /* istanbul ignore if */
                    if (process.env.NODE_ENV === 'production') {
                        // reset directives before every capture in production
                        // mode, so that when unlinking we don't need to splice
                        // them out (which turns out to be a perf hit).
                        // they are kept in development mode because they are
                        // useful for Vue's own tests.
                        vm._directives = [];
                    }
                    var originalDirCount = vm._directives.length;
                    linker();
                    var dirs = vm._directives.slice(originalDirCount);
                    dirs.sort(directiveComparator);
                    for (var i = 0, l = dirs.length; i < l; i++) {
                        dirs[i]._bind();
                    }
                    return dirs;
                }

                /**
                 * Directive priority sort comparator
                 *
                 * @param {Object} a
                 * @param {Object} b
                 */

                function directiveComparator(a, b) {
                    a = a.descriptor.def.priority || DEFAULT_PRIORITY;
                    b = b.descriptor.def.priority || DEFAULT_PRIORITY;
                    return a > b ? -1 : a === b ? 0 : 1;
                }

                /**
                 * Linker functions return an unlink function that
                 * tearsdown all directives instances generated during
                 * the process.
                 *
                 * We create unlink functions with only the necessary
                 * information to avoid retaining additional closures.
                 *
                 * @param {Vue} vm
                 * @param {Array} dirs
                 * @param {Vue} [context]
                 * @param {Array} [contextDirs]
                 * @return {Function}
                 */

                function makeUnlinkFn(vm, dirs, context, contextDirs) {
                    function unlink(destroying) {
                        teardownDirs(vm, dirs, destroying);
                        if (context && contextDirs) {
                            teardownDirs(context, contextDirs);
                        }
                    }
                    // expose linked directives
                    unlink.dirs = dirs;
                    return unlink;
                }

                /**
                 * Teardown partial linked directives.
                 *
                 * @param {Vue} vm
                 * @param {Array} dirs
                 * @param {Boolean} destroying
                 */

                function teardownDirs(vm, dirs, destroying) {
                    var i = dirs.length;
                    while (i--) {
                        dirs[i]._teardown();
                        if (process.env.NODE_ENV !== 'production' && !destroying) {
                            vm._directives.$remove(dirs[i]);
                        }
                    }
                }

                /**
                 * Compile link props on an instance.
                 *
                 * @param {Vue} vm
                 * @param {Element} el
                 * @param {Object} props
                 * @param {Object} [scope]
                 * @return {Function}
                 */

                function compileAndLinkProps(vm, el, props, scope) {
                    var propsLinkFn = compileProps(el, props);
                    var propDirs = linkAndCapture(function() {
                        propsLinkFn(vm, scope);
                    }, vm);
                    return makeUnlinkFn(vm, propDirs);
                }

                /**
                 * Compile the root element of an instance.
                 *
                 * 1. attrs on context container (context scope)
                 * 2. attrs on the component template root node, if
                 *    replace:true (child scope)
                 *
                 * If this is a fragment instance, we only need to compile 1.
                 *
                 * @param {Element} el
                 * @param {Object} options
                 * @param {Object} contextOptions
                 * @return {Function}
                 */

                function compileRoot(el, options, contextOptions) {
                    var containerAttrs = options._containerAttrs;
                    var replacerAttrs = options._replacerAttrs;
                    var contextLinkFn, replacerLinkFn;

                    // only need to compile other attributes for
                    // non-fragment instances
                    if (el.nodeType !== 11) {
                        // for components, container and replacer need to be
                        // compiled separately and linked in different scopes.
                        if (options._asComponent) {
                            // 2. container attributes
                            if (containerAttrs && contextOptions) {
                                contextLinkFn = compileDirectives(containerAttrs, contextOptions);
                            }
                            if (replacerAttrs) {
                                // 3. replacer attributes
                                replacerLinkFn = compileDirectives(replacerAttrs, options);
                            }
                        } else {
                            // non-component, just compile as a normal element.
                            replacerLinkFn = compileDirectives(el.attributes, options);
                        }
                    } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
                        // warn container directives for fragment instances
                        var names = containerAttrs.filter(function(attr) {
                            // allow vue-loader/vueify scoped css attributes
                            return attr.name.indexOf('_v-') < 0 &&
                                // allow event listeners
                                !onRE.test(attr.name) &&
                                // allow slots
                                attr.name !== 'slot';
                        }).map(function(attr) {
                            return '"' + attr.name + '"';
                        });
                        if (names.length) {
                            var plural = names.length > 1;
                            warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
                        }
                    }

                    options._containerAttrs = options._replacerAttrs = null;
                    return function rootLinkFn(vm, el, scope) {
                        // link context scope dirs
                        var context = vm._context;
                        var contextDirs;
                        if (context && contextLinkFn) {
                            contextDirs = linkAndCapture(function() {
                                contextLinkFn(context, el, null, scope);
                            }, context);
                        }

                        // link self
                        var selfDirs = linkAndCapture(function() {
                            if (replacerLinkFn) replacerLinkFn(vm, el);
                        }, vm);

                        // return the unlink function that tearsdown context
                        // container directives.
                        return makeUnlinkFn(vm, selfDirs, context, contextDirs);
                    };
                }

                /**
                 * Compile a node and return a nodeLinkFn based on the
                 * node type.
                 *
                 * @param {Node} node
                 * @param {Object} options
                 * @return {Function|null}
                 */

                function compileNode(node, options) {
                    var type = node.nodeType;
                    if (type === 1 && node.tagName !== 'SCRIPT') {
                        return compileElement(node, options);
                    } else if (type === 3 && node.data.trim()) {
                        return compileTextNode(node, options);
                    } else {
                        return null;
                    }
                }

                /**
                 * Compile an element and return a nodeLinkFn.
                 *
                 * @param {Element} el
                 * @param {Object} options
                 * @return {Function|null}
                 */

                function compileElement(el, options) {
                    // preprocess textareas.
                    // textarea treats its text content as the initial value.
                    // just bind it as an attr directive for value.
                    if (el.tagName === 'TEXTAREA') {
                        var tokens = parseText(el.value);
                        if (tokens) {
                            el.setAttribute(':value', tokensToExp(tokens));
                            el.value = '';
                        }
                    }
                    var linkFn;
                    var hasAttrs = el.hasAttributes();
                    // check terminal directives (for & if)
                    if (hasAttrs) {
                        linkFn = checkTerminalDirectives(el, options);
                    }
                    // check element directives
                    if (!linkFn) {
                        linkFn = checkElementDirectives(el, options);
                    }
                    // check component
                    if (!linkFn) {
                        linkFn = checkComponent(el, options);
                    }
                    // normal directives
                    if (!linkFn && hasAttrs) {
                        linkFn = compileDirectives(el.attributes, options);
                    }
                    return linkFn;
                }

                /**
                 * Compile a textNode and return a nodeLinkFn.
                 *
                 * @param {TextNode} node
                 * @param {Object} options
                 * @return {Function|null} textNodeLinkFn
                 */

                function compileTextNode(node, options) {
                    // skip marked text nodes
                    if (node._skip) {
                        return removeText;
                    }

                    var tokens = parseText(node.wholeText);
                    if (!tokens) {
                        return null;
                    }

                    // mark adjacent text nodes as skipped,
                    // because we are using node.wholeText to compile
                    // all adjacent text nodes together. This fixes
                    // issues in IE where sometimes it splits up a single
                    // text node into multiple ones.
                    var next = node.nextSibling;
                    while (next && next.nodeType === 3) {
                        next._skip = true;
                        next = next.nextSibling;
                    }

                    var frag = document.createDocumentFragment();
                    var el, token;
                    for (var i = 0, l = tokens.length; i < l; i++) {
                        token = tokens[i];
                        el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
                        frag.appendChild(el);
                    }
                    return makeTextNodeLinkFn(tokens, frag, options);
                }

                /**
                 * Linker for an skipped text node.
                 *
                 * @param {Vue} vm
                 * @param {Text} node
                 */

                function removeText(vm, node) {
                    remove(node);
                }

                /**
                 * Process a single text token.
                 *
                 * @param {Object} token
                 * @param {Object} options
                 * @return {Node}
                 */

                function processTextToken(token, options) {
                    var el;
                    if (token.oneTime) {
                        el = document.createTextNode(token.value);
                    } else {
                        if (token.html) {
                            el = document.createComment('v-html');
                            setTokenType('html');
                        } else {
                            // IE will clean up empty textNodes during
                            // frag.cloneNode(true), so we have to give it
                            // something here...
                            el = document.createTextNode(' ');
                            setTokenType('text');
                        }
                    }

                    function setTokenType(type) {
                        if (token.descriptor) return;
                        var parsed = parseDirective(token.value);
                        token.descriptor = {
                            name: type,
                            def: publicDirectives[type],
                            expression: parsed.expression,
                            filters: parsed.filters
                        };
                    }
                    return el;
                }

                /**
                 * Build a function that processes a textNode.
                 *
                 * @param {Array<Object>} tokens
                 * @param {DocumentFragment} frag
                 */

                function makeTextNodeLinkFn(tokens, frag) {
                    return function textNodeLinkFn(vm, el, host, scope) {
                        var fragClone = frag.cloneNode(true);
                        var childNodes = toArray(fragClone.childNodes);
                        var token, value, node;
                        for (var i = 0, l = tokens.length; i < l; i++) {
                            token = tokens[i];
                            value = token.value;
                            if (token.tag) {
                                node = childNodes[i];
                                if (token.oneTime) {
                                    value = (scope || vm).$eval(value);
                                    if (token.html) {
                                        replace(node, parseTemplate(value, true));
                                    } else {
                                        node.data = value;
                                    }
                                } else {
                                    vm._bindDir(token.descriptor, node, host, scope);
                                }
                            }
                        }
                        replace(el, fragClone);
                    };
                }

                /**
                 * Compile a node list and return a childLinkFn.
                 *
                 * @param {NodeList} nodeList
                 * @param {Object} options
                 * @return {Function|undefined}
                 */

                function compileNodeList(nodeList, options) {
                    var linkFns = [];
                    var nodeLinkFn, childLinkFn, node;
                    for (var i = 0, l = nodeList.length; i < l; i++) {
                        node = nodeList[i];
                        nodeLinkFn = compileNode(node, options);
                        childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
                        linkFns.push(nodeLinkFn, childLinkFn);
                    }
                    return linkFns.length ? makeChildLinkFn(linkFns) : null;
                }

                /**
                 * Make a child link function for a node's childNodes.
                 *
                 * @param {Array<Function>} linkFns
                 * @return {Function} childLinkFn
                 */

                function makeChildLinkFn(linkFns) {
                    return function childLinkFn(vm, nodes, host, scope, frag) {
                        var node, nodeLinkFn, childrenLinkFn;
                        for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
                            node = nodes[n];
                            nodeLinkFn = linkFns[i++];
                            childrenLinkFn = linkFns[i++];
                            // cache childNodes before linking parent, fix #657
                            var childNodes = toArray(node.childNodes);
                            if (nodeLinkFn) {
                                nodeLinkFn(vm, node, host, scope, frag);
                            }
                            if (childrenLinkFn) {
                                childrenLinkFn(vm, childNodes, host, scope, frag);
                            }
                        }
                    };
                }

                /**
                 * Check for element directives (custom elements that should
                 * be resovled as terminal directives).
                 *
                 * @param {Element} el
                 * @param {Object} options
                 */

                function checkElementDirectives(el, options) {
                    var tag = el.tagName.toLowerCase();
                    if (commonTagRE.test(tag)) return;
                    // special case: give named slot a higher priority
                    // than unnamed slots
                    if (tag === 'slot' && hasBindAttr(el, 'name')) {
                        tag = '_namedSlot';
                    }
                    var def = resolveAsset(options, 'elementDirectives', tag);
                    if (def) {
                        return makeTerminalNodeLinkFn(el, tag, '', options, def);
                    }
                }

                /**
                 * Check if an element is a component. If yes, return
                 * a component link function.
                 *
                 * @param {Element} el
                 * @param {Object} options
                 * @return {Function|undefined}
                 */

                function checkComponent(el, options) {
                    var component = checkComponentAttr(el, options);
                    if (component) {
                        var ref = findRef(el);
                        var descriptor = {
                            name: 'component',
                            ref: ref,
                            expression: component.id,
                            def: internalDirectives.component,
                            modifiers: {
                                literal: !component.dynamic
                            }
                        };
                        var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
                            if (ref) {
                                defineReactive((scope || vm).$refs, ref, null);
                            }
                            vm._bindDir(descriptor, el, host, scope, frag);
                        };
                        componentLinkFn.terminal = true;
                        return componentLinkFn;
                    }
                }

                /**
                 * Check an element for terminal directives in fixed order.
                 * If it finds one, return a terminal link function.
                 *
                 * @param {Element} el
                 * @param {Object} options
                 * @return {Function} terminalLinkFn
                 */

                function checkTerminalDirectives(el, options) {
                    // skip v-pre
                    if (getAttr(el, 'v-pre') !== null) {
                        return skip;
                    }
                    // skip v-else block, but only if following v-if
                    if (el.hasAttribute('v-else')) {
                        var prev = el.previousElementSibling;
                        if (prev && prev.hasAttribute('v-if')) {
                            return skip;
                        }
                    }
                    var value, dirName;
                    for (var i = 0, l = terminalDirectives.length; i < l; i++) {
                        dirName = terminalDirectives[i];
                        value = el.getAttribute('v-' + dirName);
                        if (value != null) {
                            return makeTerminalNodeLinkFn(el, dirName, value, options);
                        }
                    }
                }

                function skip() {}
                skip.terminal = true;

                /**
                 * Build a node link function for a terminal directive.
                 * A terminal link function terminates the current
                 * compilation recursion and handles compilation of the
                 * subtree in the directive.
                 *
                 * @param {Element} el
                 * @param {String} dirName
                 * @param {String} value
                 * @param {Object} options
                 * @param {Object} [def]
                 * @return {Function} terminalLinkFn
                 */

                function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
                    var parsed = parseDirective(value);
                    var descriptor = {
                        name: dirName,
                        expression: parsed.expression,
                        filters: parsed.filters,
                        raw: value,
                        // either an element directive, or if/for
                        def: def || publicDirectives[dirName]
                    };
                    // check ref for v-for and router-view
                    if (dirName === 'for' || dirName === 'router-view') {
                        descriptor.ref = findRef(el);
                    }
                    var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
                        if (descriptor.ref) {
                            defineReactive((scope || vm).$refs, descriptor.ref, null);
                        }
                        vm._bindDir(descriptor, el, host, scope, frag);
                    };
                    fn.terminal = true;
                    return fn;
                }

                /**
                 * Compile the directives on an element and return a linker.
                 *
                 * @param {Array|NamedNodeMap} attrs
                 * @param {Object} options
                 * @return {Function}
                 */

                function compileDirectives(attrs, options) {
                    var i = attrs.length;
                    var dirs = [];
                    var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
                    while (i--) {
                        attr = attrs[i];
                        name = rawName = attr.name;
                        value = rawValue = attr.value;
                        tokens = parseText(value);
                        // reset arg
                        arg = null;
                        // check modifiers
                        modifiers = parseModifiers(name);
                        name = name.replace(modifierRE, '');

                        // attribute interpolations
                        if (tokens) {
                            value = tokensToExp(tokens);
                            arg = name;
                            pushDir('bind', publicDirectives.bind, tokens);
                            // warn against mixing mustaches with v-bind
                            if (process.env.NODE_ENV !== 'production') {
                                if (name === 'class' && Array.prototype.some.call(attrs, function(attr) {
                                    return attr.name === ':class' || attr.name === 'v-bind:class';
                                })) {
                                    warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
                                }
                            }
                        } else

                        // special attribute: transition
                        if (transitionRE.test(name)) {
                            modifiers.literal = !bindRE.test(name);
                            pushDir('transition', internalDirectives.transition);
                        } else

                        // event handlers
                        if (onRE.test(name)) {
                            arg = name.replace(onRE, '');
                            pushDir('on', publicDirectives.on);
                        } else

                        // attribute bindings
                        if (bindRE.test(name)) {
                            dirName = name.replace(bindRE, '');
                            if (dirName === 'style' || dirName === 'class') {
                                pushDir(dirName, internalDirectives[dirName]);
                            } else {
                                arg = dirName;
                                pushDir('bind', publicDirectives.bind);
                            }
                        } else

                        // normal directives
                        if (matched = name.match(dirAttrRE)) {
                            dirName = matched[1];
                            arg = matched[2];

                            // skip v-else (when used with v-show)
                            if (dirName === 'else') {
                                continue;
                            }

                            dirDef = resolveAsset(options, 'directives', dirName);

                            if (process.env.NODE_ENV !== 'production') {
                                assertAsset(dirDef, 'directive', dirName);
                            }

                            if (dirDef) {
                                pushDir(dirName, dirDef);
                            }
                        }
                    }

                    /**
                     * Push a directive.
                     *
                     * @param {String} dirName
                     * @param {Object|Function} def
                     * @param {Array} [interpTokens]
                     */

                    function pushDir(dirName, def, interpTokens) {
                        var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
                        var parsed = !hasOneTimeToken && parseDirective(value);
                        dirs.push({
                            name: dirName,
                            attr: rawName,
                            raw: rawValue,
                            def: def,
                            arg: arg,
                            modifiers: modifiers,
                            // conversion from interpolation strings with one-time token
                            // to expression is differed until directive bind time so that we
                            // have access to the actual vm context for one-time bindings.
                            expression: parsed && parsed.expression,
                            filters: parsed && parsed.filters,
                            interp: interpTokens,
                            hasOneTime: hasOneTimeToken
                        });
                    }

                    if (dirs.length) {
                        return makeNodeLinkFn(dirs);
                    }
                }

                /**
                 * Parse modifiers from directive attribute name.
                 *
                 * @param {String} name
                 * @return {Object}
                 */

                function parseModifiers(name) {
                    var res = Object.create(null);
                    var match = name.match(modifierRE);
                    if (match) {
                        var i = match.length;
                        while (i--) {
                            res[match[i].slice(1)] = true;
                        }
                    }
                    return res;
                }

                /**
                 * Build a link function for all directives on a single node.
                 *
                 * @param {Array} directives
                 * @return {Function} directivesLinkFn
                 */

                function makeNodeLinkFn(directives) {
                    return function nodeLinkFn(vm, el, host, scope, frag) {
                        // reverse apply because it's sorted low to high
                        var i = directives.length;
                        while (i--) {
                            vm._bindDir(directives[i], el, host, scope, frag);
                        }
                    };
                }

                /**
                 * Check if an interpolation string contains one-time tokens.
                 *
                 * @param {Array} tokens
                 * @return {Boolean}
                 */

                function hasOneTime(tokens) {
                    var i = tokens.length;
                    while (i--) {
                        if (tokens[i].oneTime) return true;
                    }
                }

                var specialCharRE = /[^\w\-:\.]/;

                /**
                 * Process an element or a DocumentFragment based on a
                 * instance option object. This allows us to transclude
                 * a template node/fragment before the instance is created,
                 * so the processed fragment can then be cloned and reused
                 * in v-for.
                 *
                 * @param {Element} el
                 * @param {Object} options
                 * @return {Element|DocumentFragment}
                 */

                function transclude(el, options) {
                    // extract container attributes to pass them down
                    // to compiler, because they need to be compiled in
                    // parent scope. we are mutating the options object here
                    // assuming the same object will be used for compile
                    // right after this.
                    if (options) {
                        options._containerAttrs = extractAttrs(el);
                    }
                    // for template tags, what we want is its content as
                    // a documentFragment (for fragment instances)
                    if (isTemplate(el)) {
                        el = parseTemplate(el);
                    }
                    if (options) {
                        if (options._asComponent && !options.template) {
                            options.template = '<slot></slot>';
                        }
                        if (options.template) {
                            options._content = extractContent(el);
                            el = transcludeTemplate(el, options);
                        }
                    }
                    if (el instanceof DocumentFragment) {
                        // anchors for fragment instance
                        // passing in `persist: true` to avoid them being
                        // discarded by IE during template cloning
                        prepend(createAnchor('v-start', true), el);
                        el.appendChild(createAnchor('v-end', true));
                    }
                    return el;
                }

                /**
                 * Process the template option.
                 * If the replace option is true this will swap the $el.
                 *
                 * @param {Element} el
                 * @param {Object} options
                 * @return {Element|DocumentFragment}
                 */

                function transcludeTemplate(el, options) {
                    var template = options.template;
                    var frag = parseTemplate(template, true);
                    if (frag) {
                        var replacer = frag.firstChild;
                        var tag = replacer.tagName && replacer.tagName.toLowerCase();
                        if (options.replace) {
                            /* istanbul ignore if */
                            if (el === document.body) {
                                process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
                            }
                            // there are many cases where the instance must
                            // become a fragment instance: basically anything that
                            // can create more than 1 root nodes.
                            if (
                                // multi-children template
                                frag.childNodes.length > 1 ||
                                // non-element template
                                replacer.nodeType !== 1 ||
                                // single nested component
                                tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
                                // element directive
                                resolveAsset(options, 'elementDirectives', tag) ||
                                // for block
                                replacer.hasAttribute('v-for') ||
                                // if block
                                replacer.hasAttribute('v-if')) {
                                return frag;
                            } else {
                                options._replacerAttrs = extractAttrs(replacer);
                                mergeAttrs(el, replacer);
                                return replacer;
                            }
                        } else {
                            el.appendChild(frag);
                            return el;
                        }
                    } else {
                        process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
                    }
                }

                /**
                 * Helper to extract a component container's attributes
                 * into a plain object array.
                 *
                 * @param {Element} el
                 * @return {Array}
                 */

                function extractAttrs(el) {
                    if (el.nodeType === 1 && el.hasAttributes()) {
                        return toArray(el.attributes);
                    }
                }

                /**
                 * Merge the attributes of two elements, and make sure
                 * the class names are merged properly.
                 *
                 * @param {Element} from
                 * @param {Element} to
                 */

                function mergeAttrs(from, to) {
                    var attrs = from.attributes;
                    var i = attrs.length;
                    var name, value;
                    while (i--) {
                        name = attrs[i].name;
                        value = attrs[i].value;
                        if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
                            to.setAttribute(name, value);
                        } else if (name === 'class' && !parseText(value)) {
                            value.split(/\s+/).forEach(function(cls) {
                                addClass(to, cls);
                            });
                        }
                    }
                }

                var compiler = Object.freeze({
                    compile: compile,
                    compileAndLinkProps: compileAndLinkProps,
                    compileRoot: compileRoot,
                    terminalDirectives: terminalDirectives,
                    transclude: transclude
                });

                function stateMixin(Vue) {

                    /**
                     * Accessor for `$data` property, since setting $data
                     * requires observing the new object and updating
                     * proxied properties.
                     */

                    Object.defineProperty(Vue.prototype, '$data', {
                        get: function get() {
                            return this._data;
                        },
                        set: function set(newData) {
                            if (newData !== this._data) {
                                this._setData(newData);
                            }
                        }
                    });

                    /**
                     * Setup the scope of an instance, which contains:
                     * - observed data
                     * - computed properties
                     * - user methods
                     * - meta properties
                     */

                    Vue.prototype._initState = function() {
                        this._initProps();
                        this._initMeta();
                        this._initMethods();
                        this._initData();
                        this._initComputed();
                    };

                    /**
                     * Initialize props.
                     */

                    Vue.prototype._initProps = function() {
                        var options = this.$options;
                        var el = options.el;
                        var props = options.props;
                        if (props && !el) {
                            process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
                        }
                        // make sure to convert string selectors into element now
                        el = options.el = query(el);
                        this._propsUnlinkFn = el && el.nodeType === 1 && props
                        // props must be linked in proper scope if inside v-for
                        ? compileAndLinkProps(this, el, props, this._scope) : null;
                    };

                    /**
                     * Initialize the data.
                     */

                    Vue.prototype._initData = function() {
                        var propsData = this._data;
                        var optionsDataFn = this.$options.data;
                        var optionsData = optionsDataFn && optionsDataFn();
                        var runtimeData;
                        if (process.env.NODE_ENV !== 'production') {
                            runtimeData = (typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData) || {};
                            this._runtimeData = null;
                        }
                        if (optionsData) {
                            this._data = optionsData;
                            for (var prop in propsData) {
                                if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop) && !hasOwn(runtimeData, prop)) {
                                    warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
                                }
                                if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
                                    set(optionsData, prop, propsData[prop]);
                                }
                            }
                        }
                        var data = this._data;
                        // proxy data on instance
                        var keys = Object.keys(data);
                        var i, key;
                        i = keys.length;
                        while (i--) {
                            key = keys[i];
                            this._proxy(key);
                        }
                        // observe data
                        observe(data, this);
                    };

                    /**
                     * Swap the instance's $data. Called in $data's setter.
                     *
                     * @param {Object} newData
                     */

                    Vue.prototype._setData = function(newData) {
                        newData = newData || {};
                        var oldData = this._data;
                        this._data = newData;
                        var keys, key, i;
                        // unproxy keys not present in new data
                        keys = Object.keys(oldData);
                        i = keys.length;
                        while (i--) {
                            key = keys[i];
                            if (!(key in newData)) {
                                this._unproxy(key);
                            }
                        }
                        // proxy keys not already proxied,
                        // and trigger change for changed values
                        keys = Object.keys(newData);
                        i = keys.length;
                        while (i--) {
                            key = keys[i];
                            if (!hasOwn(this, key)) {
                                // new property
                                this._proxy(key);
                            }
                        }
                        oldData.__ob__.removeVm(this);
                        observe(newData, this);
                        this._digest();
                    };

                    /**
                     * Proxy a property, so that
                     * vm.prop === vm._data.prop
                     *
                     * @param {String} key
                     */

                    Vue.prototype._proxy = function(key) {
                        if (!isReserved(key)) {
                            // need to store ref to self here
                            // because these getter/setters might
                            // be called by child scopes via
                            // prototype inheritance.
                            var self = this;
                            Object.defineProperty(self, key, {
                                configurable: true,
                                enumerable: true,
                                get: function proxyGetter() {
                                    return self._data[key];
                                },
                                set: function proxySetter(val) {
                                    self._data[key] = val;
                                }
                            });
                        }
                    };

                    /**
                     * Unproxy a property.
                     *
                     * @param {String} key
                     */

                    Vue.prototype._unproxy = function(key) {
                        if (!isReserved(key)) {
                            delete this[key];
                        }
                    };

                    /**
                     * Force update on every watcher in scope.
                     */

                    Vue.prototype._digest = function() {
                        for (var i = 0, l = this._watchers.length; i < l; i++) {
                            this._watchers[i].update(true); // shallow updates
                        }
                    };

                    /**
                     * Setup computed properties. They are essentially
                     * special getter/setters
                     */

                    function noop() {}
                    Vue.prototype._initComputed = function() {
                        var computed = this.$options.computed;
                        if (computed) {
                            for (var key in computed) {
                                var userDef = computed[key];
                                var def = {
                                    enumerable: true,
                                    configurable: true
                                };
                                if (typeof userDef === 'function') {
                                    def.get = makeComputedGetter(userDef, this);
                                    def.set = noop;
                                } else {
                                    def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind$1(userDef.get, this) : noop;
                                    def.set = userDef.set ? bind$1(userDef.set, this) : noop;
                                }
                                Object.defineProperty(this, key, def);
                            }
                        }
                    };

                    function makeComputedGetter(getter, owner) {
                        var watcher = new Watcher(owner, getter, null, {
                            lazy: true
                        });
                        return function computedGetter() {
                            if (watcher.dirty) {
                                watcher.evaluate();
                            }
                            if (Dep.target) {
                                watcher.depend();
                            }
                            return watcher.value;
                        };
                    }

                    /**
                     * Setup instance methods. Methods must be bound to the
                     * instance since they might be passed down as a prop to
                     * child components.
                     */

                    Vue.prototype._initMethods = function() {
                        var methods = this.$options.methods;
                        if (methods) {
                            for (var key in methods) {
                                this[key] = bind$1(methods[key], this);
                            }
                        }
                    };

                    /**
                     * Initialize meta information like $index, $key & $value.
                     */

                    Vue.prototype._initMeta = function() {
                        var metas = this.$options._meta;
                        if (metas) {
                            for (var key in metas) {
                                defineReactive(this, key, metas[key]);
                            }
                        }
                    };
                }

                var eventRE = /^v-on:|^@/;

                function eventsMixin(Vue) {

                    /**
                     * Setup the instance's option events & watchers.
                     * If the value is a string, we pull it from the
                     * instance's methods by name.
                     */

                    Vue.prototype._initEvents = function() {
                        var options = this.$options;
                        if (options._asComponent) {
                            registerComponentEvents(this, options.el);
                        }
                        registerCallbacks(this, '$on', options.events);
                        registerCallbacks(this, '$watch', options.watch);
                    };

                    /**
                     * Register v-on events on a child component
                     *
                     * @param {Vue} vm
                     * @param {Element} el
                     */

                    function registerComponentEvents(vm, el) {
                        var attrs = el.attributes;
                        var name, handler;
                        for (var i = 0, l = attrs.length; i < l; i++) {
                            name = attrs[i].name;
                            if (eventRE.test(name)) {
                                name = name.replace(eventRE, '');
                                handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
                                handler._fromParent = true;
                                vm.$on(name.replace(eventRE), handler);
                            }
                        }
                    }

                    /**
                     * Register callbacks for option events and watchers.
                     *
                     * @param {Vue} vm
                     * @param {String} action
                     * @param {Object} hash
                     */

                    function registerCallbacks(vm, action, hash) {
                        if (!hash) return;
                        var handlers, key, i, j;
                        for (key in hash) {
                            handlers = hash[key];
                            if (isArray(handlers)) {
                                for (i = 0, j = handlers.length; i < j; i++) {
                                    register(vm, action, key, handlers[i]);
                                }
                            } else {
                                register(vm, action, key, handlers);
                            }
                        }
                    }

                    /**
                     * Helper to register an event/watch callback.
                     *
                     * @param {Vue} vm
                     * @param {String} action
                     * @param {String} key
                     * @param {Function|String|Object} handler
                     * @param {Object} [options]
                     */

                    function register(vm, action, key, handler, options) {
                        var type = typeof handler;
                        if (type === 'function') {
                            vm[action](key, handler, options);
                        } else if (type === 'string') {
                            var methods = vm.$options.methods;
                            var method = methods && methods[handler];
                            if (method) {
                                vm[action](key, method, options);
                            } else {
                                process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
                            }
                        } else if (handler && type === 'object') {
                            register(vm, action, key, handler.handler, handler);
                        }
                    }

                    /**
                     * Setup recursive attached/detached calls
                     */

                    Vue.prototype._initDOMHooks = function() {
                        this.$on('hook:attached', onAttached);
                        this.$on('hook:detached', onDetached);
                    };

                    /**
                     * Callback to recursively call attached hook on children
                     */

                    function onAttached() {
                        if (!this._isAttached) {
                            this._isAttached = true;
                            this.$children.forEach(callAttach);
                        }
                    }

                    /**
                     * Iterator to call attached hook
                     *
                     * @param {Vue} child
                     */

                    function callAttach(child) {
                        if (!child._isAttached && inDoc(child.$el)) {
                            child._callHook('attached');
                        }
                    }

                    /**
                     * Callback to recursively call detached hook on children
                     */

                    function onDetached() {
                        if (this._isAttached) {
                            this._isAttached = false;
                            this.$children.forEach(callDetach);
                        }
                    }

                    /**
                     * Iterator to call detached hook
                     *
                     * @param {Vue} child
                     */

                    function callDetach(child) {
                        if (child._isAttached && !inDoc(child.$el)) {
                            child._callHook('detached');
                        }
                    }

                    /**
                     * Trigger all handlers for a hook
                     *
                     * @param {String} hook
                     */

                    Vue.prototype._callHook = function(hook) {
                        this.$emit('pre-hook:' + hook);
                        var handlers = this.$options[hook];
                        if (handlers) {
                            for (var i = 0, j = handlers.length; i < j; i++) {
                                handlers[i].call(this);
                            }
                        }
                        this.$emit('hook:' + hook);
                    };
                }

                function noop() {}

                /**
                 * A directive links a DOM element with a piece of data,
                 * which is the result of evaluating an expression.
                 * It registers a watcher with the expression and calls
                 * the DOM update function when a change is triggered.
                 *
                 * @param {String} name
                 * @param {Node} el
                 * @param {Vue} vm
                 * @param {Object} descriptor
                 *                 - {String} name
                 *                 - {Object} def
                 *                 - {String} expression
                 *                 - {Array<Object>} [filters]
                 *                 - {Boolean} literal
                 *                 - {String} attr
                 *                 - {String} raw
                 * @param {Object} def - directive definition object
                 * @param {Vue} [host] - transclusion host component
                 * @param {Object} [scope] - v-for scope
                 * @param {Fragment} [frag] - owner fragment
                 * @constructor
                 */
                function Directive(descriptor, vm, el, host, scope, frag) {
                    this.vm = vm;
                    this.el = el;
                    // copy descriptor properties
                    this.descriptor = descriptor;
                    this.name = descriptor.name;
                    this.expression = descriptor.expression;
                    this.arg = descriptor.arg;
                    this.modifiers = descriptor.modifiers;
                    this.filters = descriptor.filters;
                    this.literal = this.modifiers && this.modifiers.literal;
                    // private
                    this._locked = false;
                    this._bound = false;
                    this._listeners = null;
                    // link context
                    this._host = host;
                    this._scope = scope;
                    this._frag = frag;
                    // store directives on node in dev mode
                    if (process.env.NODE_ENV !== 'production' && this.el) {
                        this.el._vue_directives = this.el._vue_directives || [];
                        this.el._vue_directives.push(this);
                    }
                }

                /**
                 * Initialize the directive, mixin definition properties,
                 * setup the watcher, call definition bind() and update()
                 * if present.
                 *
                 * @param {Object} def
                 */

                Directive.prototype._bind = function() {
                    var name = this.name;
                    var descriptor = this.descriptor;

                    // remove attribute
                    if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
                        var attr = descriptor.attr || 'v-' + name;
                        this.el.removeAttribute(attr);
                    }

                    // copy def properties
                    var def = descriptor.def;
                    if (typeof def === 'function') {
                        this.update = def;
                    } else {
                        extend(this, def);
                    }

                    // setup directive params
                    this._setupParams();

                    // initial bind
                    if (this.bind) {
                        this.bind();
                    }
                    this._bound = true;

                    if (this.literal) {
                        this.update && this.update(descriptor.raw);
                    } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
                        // wrapped updater for context
                        var dir = this;
                        if (this.update) {
                            this._update = function(val, oldVal) {
                                if (!dir._locked) {
                                    dir.update(val, oldVal);
                                }
                            };
                        } else {
                            this._update = noop;
                        }
                        var preProcess = this._preProcess ? bind$1(this._preProcess, this) : null;
                        var postProcess = this._postProcess ? bind$1(this._postProcess, this) : null;
                        var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
                            {
                                filters: this.filters,
                                twoWay: this.twoWay,
                                deep: this.deep,
                                preProcess: preProcess,
                                postProcess: postProcess,
                                scope: this._scope
                            });
                        // v-model with inital inline value need to sync back to
                        // model instead of update to DOM on init. They would
                        // set the afterBind hook to indicate that.
                        if (this.afterBind) {
                            this.afterBind();
                        } else if (this.update) {
                            this.update(watcher.value);
                        }
                    }
                };

                /**
                 * Setup all param attributes, e.g. track-by,
                 * transition-mode, etc...
                 */

                Directive.prototype._setupParams = function() {
                    if (!this.params) {
                        return;
                    }
                    var params = this.params;
                    // swap the params array with a fresh object.
                    this.params = Object.create(null);
                    var i = params.length;
                    var key, val, mappedKey;
                    while (i--) {
                        key = params[i];
                        mappedKey = camelize(key);
                        val = getBindAttr(this.el, key);
                        if (val != null) {
                            // dynamic
                            this._setupParamWatcher(mappedKey, val);
                        } else {
                            // static
                            val = getAttr(this.el, key);
                            if (val != null) {
                                this.params[mappedKey] = val === '' ? true : val;
                            }
                        }
                    }
                };

                /**
                 * Setup a watcher for a dynamic param.
                 *
                 * @param {String} key
                 * @param {String} expression
                 */

                Directive.prototype._setupParamWatcher = function(key, expression) {
                    var self = this;
                    var called = false;
                    var unwatch = (this._scope || this.vm).$watch(expression, function(val, oldVal) {
                        self.params[key] = val;
                        // since we are in immediate mode,
                        // only call the param change callbacks if this is not the first update.
                        if (called) {
                            var cb = self.paramWatchers && self.paramWatchers[key];
                            if (cb) {
                                cb.call(self, val, oldVal);
                            }
                        } else {
                            called = true;
                        }
                    }, {
                        immediate: true,
                        user: false
                    });
                    (this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
                };

                /**
                 * Check if the directive is a function caller
                 * and if the expression is a callable one. If both true,
                 * we wrap up the expression and use it as the event
                 * handler.
                 *
                 * e.g. on-click="a++"
                 *
                 * @return {Boolean}
                 */

                Directive.prototype._checkStatement = function() {
                    var expression = this.expression;
                    if (expression && this.acceptStatement && !isSimplePath(expression)) {
                        var fn = parseExpression(expression).get;
                        var scope = this._scope || this.vm;
                        var handler = function handler(e) {
                            scope.$event = e;
                            fn.call(scope, scope);
                            scope.$event = null;
                        };
                        if (this.filters) {
                            handler = scope._applyFilters(handler, null, this.filters);
                        }
                        this.update(handler);
                        return true;
                    }
                };

                /**
                 * Set the corresponding value with the setter.
                 * This should only be used in two-way directives
                 * e.g. v-model.
                 *
                 * @param {*} value
                 * @public
                 */

                Directive.prototype.set = function(value) {
                    /* istanbul ignore else */
                    if (this.twoWay) {
                        this._withLock(function() {
                            this._watcher.set(value);
                        });
                    } else if (process.env.NODE_ENV !== 'production') {
                        warn('Directive.set() can only be used inside twoWay' + 'directives.');
                    }
                };

                /**
                 * Execute a function while preventing that function from
                 * triggering updates on this directive instance.
                 *
                 * @param {Function} fn
                 */

                Directive.prototype._withLock = function(fn) {
                    var self = this;
                    self._locked = true;
                    fn.call(self);
                    nextTick(function() {
                        self._locked = false;
                    });
                };

                /**
                 * Convenience method that attaches a DOM event listener
                 * to the directive element and autometically tears it down
                 * during unbind.
                 *
                 * @param {String} event
                 * @param {Function} handler
                 * @param {Boolean} [useCapture]
                 */

                Directive.prototype.on = function(event, handler, useCapture) {
                    on$1(this.el, event, handler, useCapture);
                    (this._listeners || (this._listeners = [])).push([event, handler]);
                };

                /**
                 * Teardown the watcher and call unbind.
                 */

                Directive.prototype._teardown = function() {
                    if (this._bound) {
                        this._bound = false;
                        if (this.unbind) {
                            this.unbind();
                        }
                        if (this._watcher) {
                            this._watcher.teardown();
                        }
                        var listeners = this._listeners;
                        var i;
                        if (listeners) {
                            i = listeners.length;
                            while (i--) {
                                off(this.el, listeners[i][0], listeners[i][1]);
                            }
                        }
                        var unwatchFns = this._paramUnwatchFns;
                        if (unwatchFns) {
                            i = unwatchFns.length;
                            while (i--) {
                                unwatchFns[i]();
                            }
                        }
                        if (process.env.NODE_ENV !== 'production' && this.el) {
                            this.el._vue_directives.$remove(this);
                        }
                        this.vm = this.el = this._watcher = this._listeners = null;
                    }
                };

                function lifecycleMixin(Vue) {

                    /**
                     * Update v-ref for component.
                     *
                     * @param {Boolean} remove
                     */

                    Vue.prototype._updateRef = function(remove) {
                        var ref = this.$options._ref;
                        if (ref) {
                            var refs = (this._scope || this._context).$refs;
                            if (remove) {
                                if (refs[ref] === this) {
                                    refs[ref] = null;
                                }
                            } else {
                                refs[ref] = this;
                            }
                        }
                    };

                    /**
                     * Transclude, compile and link element.
                     *
                     * If a pre-compiled linker is available, that means the
                     * passed in element will be pre-transcluded and compiled
                     * as well - all we need to do is to call the linker.
                     *
                     * Otherwise we need to call transclude/compile/link here.
                     *
                     * @param {Element} el
                     */

                    Vue.prototype._compile = function(el) {
                        var options = this.$options;

                        // transclude and init element
                        // transclude can potentially replace original
                        // so we need to keep reference; this step also injects
                        // the template and caches the original attributes
                        // on the container node and replacer node.
                        var original = el;
                        el = transclude(el, options);
                        this._initElement(el);

                        // handle v-pre on root node (#2026)
                        if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
                            return;
                        }

                        // root is always compiled per-instance, because
                        // container attrs and props can be different every time.
                        var contextOptions = this._context && this._context.$options;
                        var rootLinker = compileRoot(el, options, contextOptions);

                        // compile and link the rest
                        var contentLinkFn;
                        var ctor = this.constructor;
                        // component compilation can be cached
                        // as long as it's not using inline-template
                        if (options._linkerCachable) {
                            contentLinkFn = ctor.linker;
                            if (!contentLinkFn) {
                                contentLinkFn = ctor.linker = compile(el, options);
                            }
                        }

                        // link phase
                        // make sure to link root with prop scope!
                        var rootUnlinkFn = rootLinker(this, el, this._scope);
                        var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

                        // register composite unlink function
                        // to be called during instance destruction
                        this._unlinkFn = function() {
                            rootUnlinkFn();
                            // passing destroying: true to avoid searching and
                            // splicing the directives
                            contentUnlinkFn(true);
                        };

                        // finally replace original
                        if (options.replace) {
                            replace(original, el);
                        }

                        this._isCompiled = true;
                        this._callHook('compiled');
                    };

                    /**
                     * Initialize instance element. Called in the public
                     * $mount() method.
                     *
                     * @param {Element} el
                     */

                    Vue.prototype._initElement = function(el) {
                        if (el instanceof DocumentFragment) {
                            this._isFragment = true;
                            this.$el = this._fragmentStart = el.firstChild;
                            this._fragmentEnd = el.lastChild;
                            // set persisted text anchors to empty
                            if (this._fragmentStart.nodeType === 3) {
                                this._fragmentStart.data = this._fragmentEnd.data = '';
                            }
                            this._fragment = el;
                        } else {
                            this.$el = el;
                        }
                        this.$el.__vue__ = this;
                        this._callHook('beforeCompile');
                    };

                    /**
                     * Create and bind a directive to an element.
                     *
                     * @param {String} name - directive name
                     * @param {Node} node   - target node
                     * @param {Object} desc - parsed directive descriptor
                     * @param {Object} def  - directive definition object
                     * @param {Vue} [host] - transclusion host component
                     * @param {Object} [scope] - v-for scope
                     * @param {Fragment} [frag] - owner fragment
                     */

                    Vue.prototype._bindDir = function(descriptor, node, host, scope, frag) {
                        this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
                    };

                    /**
                     * Teardown an instance, unobserves the data, unbind all the
                     * directives, turn off all the event listeners, etc.
                     *
                     * @param {Boolean} remove - whether to remove the DOM node.
                     * @param {Boolean} deferCleanup - if true, defer cleanup to
                     *                                 be called later
                     */

                    Vue.prototype._destroy = function(remove, deferCleanup) {
                        if (this._isBeingDestroyed) {
                            if (!deferCleanup) {
                                this._cleanup();
                            }
                            return;
                        }

                        var destroyReady;
                        var pendingRemoval;

                        var self = this;
                        // Cleanup should be called either synchronously or asynchronoysly as
                        // callback of this.$remove(), or if remove and deferCleanup are false.
                        // In any case it should be called after all other removing, unbinding and
                        // turning of is done
                        var cleanupIfPossible = function cleanupIfPossible() {
                            if (destroyReady && !pendingRemoval && !deferCleanup) {
                                self._cleanup();
                            }
                        };

                        // remove DOM element
                        if (remove && this.$el) {
                            pendingRemoval = true;
                            this.$remove(function() {
                                pendingRemoval = false;
                                cleanupIfPossible();
                            });
                        }

                        this._callHook('beforeDestroy');
                        this._isBeingDestroyed = true;
                        var i;
                        // remove self from parent. only necessary
                        // if parent is not being destroyed as well.
                        var parent = this.$parent;
                        if (parent && !parent._isBeingDestroyed) {
                            parent.$children.$remove(this);
                            // unregister ref (remove: true)
                            this._updateRef(true);
                        }
                        // destroy all children.
                        i = this.$children.length;
                        while (i--) {
                            this.$children[i].$destroy();
                        }
                        // teardown props
                        if (this._propsUnlinkFn) {
                            this._propsUnlinkFn();
                        }
                        // teardown all directives. this also tearsdown all
                        // directive-owned watchers.
                        if (this._unlinkFn) {
                            this._unlinkFn();
                        }
                        i = this._watchers.length;
                        while (i--) {
                            this._watchers[i].teardown();
                        }
                        // remove reference to self on $el
                        if (this.$el) {
                            this.$el.__vue__ = null;
                        }

                        destroyReady = true;
                        cleanupIfPossible();
                    };

                    /**
                     * Clean up to ensure garbage collection.
                     * This is called after the leave transition if there
                     * is any.
                     */

                    Vue.prototype._cleanup = function() {
                        if (this._isDestroyed) {
                            return;
                        }
                        // remove self from owner fragment
                        // do it in cleanup so that we can call $destroy with
                        // defer right when a fragment is about to be removed.
                        if (this._frag) {
                            this._frag.children.$remove(this);
                        }
                        // remove reference from data ob
                        // frozen object may not have observer.
                        if (this._data.__ob__) {
                            this._data.__ob__.removeVm(this);
                        }
                        // Clean up references to private properties and other
                        // instances. preserve reference to _data so that proxy
                        // accessors still work. The only potential side effect
                        // here is that mutating the instance after it's destroyed
                        // may affect the state of other components that are still
                        // observing the same object, but that seems to be a
                        // reasonable responsibility for the user rather than
                        // always throwing an error on them.
                        this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
                        // call the last hook...
                        this._isDestroyed = true;
                        this._callHook('destroyed');
                        // turn off all instance listeners.
                        this.$off();
                    };
                }

                function miscMixin(Vue) {

                    /**
                     * Apply a list of filter (descriptors) to a value.
                     * Using plain for loops here because this will be called in
                     * the getter of any watcher with filters so it is very
                     * performance sensitive.
                     *
                     * @param {*} value
                     * @param {*} [oldValue]
                     * @param {Array} filters
                     * @param {Boolean} write
                     * @return {*}
                     */

                    Vue.prototype._applyFilters = function(value, oldValue, filters, write) {
                        var filter, fn, args, arg, offset, i, l, j, k;
                        for (i = 0, l = filters.length; i < l; i++) {
                            filter = filters[i];
                            fn = resolveAsset(this.$options, 'filters', filter.name);
                            if (process.env.NODE_ENV !== 'production') {
                                assertAsset(fn, 'filter', filter.name);
                            }
                            if (!fn) continue;
                            fn = write ? fn.write : fn.read || fn;
                            if (typeof fn !== 'function') continue;
                            args = write ? [value, oldValue] : [value];
                            offset = write ? 2 : 1;
                            if (filter.args) {
                                for (j = 0, k = filter.args.length; j < k; j++) {
                                    arg = filter.args[j];
                                    args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
                                }
                            }
                            value = fn.apply(this, args);
                        }
                        return value;
                    };

                    /**
                     * Resolve a component, depending on whether the component
                     * is defined normally or using an async factory function.
                     * Resolves synchronously if already resolved, otherwise
                     * resolves asynchronously and caches the resolved
                     * constructor on the factory.
                     *
                     * @param {String} id
                     * @param {Function} cb
                     */

                    Vue.prototype._resolveComponent = function(id, cb) {
                        var factory = resolveAsset(this.$options, 'components', id);
                        if (process.env.NODE_ENV !== 'production') {
                            assertAsset(factory, 'component', id);
                        }
                        if (!factory) {
                            return;
                        }
                        // async component factory
                        if (!factory.options) {
                            if (factory.resolved) {
                                // cached
                                cb(factory.resolved);
                            } else if (factory.requested) {
                                // pool callbacks
                                factory.pendingCallbacks.push(cb);
                            } else {
                                factory.requested = true;
                                var cbs = factory.pendingCallbacks = [cb];
                                factory(function resolve(res) {
                                    if (isPlainObject(res)) {
                                        res = Vue.extend(res);
                                    }
                                    // cache resolved
                                    factory.resolved = res;
                                    // invoke callbacks
                                    for (var i = 0, l = cbs.length; i < l; i++) {
                                        cbs[i](res);
                                    }
                                }, function reject(reason) {
                                    process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
                                });
                            }
                        } else {
                            // normal component
                            cb(factory);
                        }
                    };
                }

                function globalAPI(Vue) {

                    /**
                     * Expose useful internals
                     */

                    Vue.util = util;
                    Vue.config = config;
                    Vue.set = set;
                    Vue['delete'] = del;
                    Vue.nextTick = nextTick;

                    /**
                     * The following are exposed for advanced usage / plugins
                     */

                    Vue.compiler = compiler;
                    Vue.FragmentFactory = FragmentFactory;
                    Vue.internalDirectives = internalDirectives;
                    Vue.parsers = {
                        path: path,
                        text: text$1,
                        template: template,
                        directive: directive,
                        expression: expression
                    };

                    /**
                     * Each instance constructor, including Vue, has a unique
                     * cid. This enables us to create wrapped "child
                     * constructors" for prototypal inheritance and cache them.
                     */

                    Vue.cid = 0;
                    var cid = 1;

                    /**
                     * Class inheritance
                     *
                     * @param {Object} extendOptions
                     */

                    Vue.extend = function(extendOptions) {
                        extendOptions = extendOptions || {};
                        var Super = this;
                        var isFirstExtend = Super.cid === 0;
                        if (isFirstExtend && extendOptions._Ctor) {
                            return extendOptions._Ctor;
                        }
                        var name = extendOptions.name || Super.options.name;
                        if (process.env.NODE_ENV !== 'production') {
                            if (!/^[a-zA-Z][\w-]*$/.test(name)) {
                                warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
                                name = null;
                            }
                        }
                        var Sub = createClass(name || 'VueComponent');
                        Sub.prototype = Object.create(Super.prototype);
                        Sub.prototype.constructor = Sub;
                        Sub.cid = cid++;
                        Sub.options = mergeOptions(Super.options, extendOptions);
                        Sub['super'] = Super;
                        // allow further extension
                        Sub.extend = Super.extend;
                        // create asset registers, so extended classes
                        // can have their private assets too.
                        config._assetTypes.forEach(function(type) {
                            Sub[type] = Super[type];
                        });
                        // enable recursive self-lookup
                        if (name) {
                            Sub.options.components[name] = Sub;
                        }
                        // cache constructor
                        if (isFirstExtend) {
                            extendOptions._Ctor = Sub;
                        }
                        return Sub;
                    };

                    /**
                     * A function that returns a sub-class constructor with the
                     * given name. This gives us much nicer output when
                     * logging instances in the console.
                     *
                     * @param {String} name
                     * @return {Function}
                     */

                    function createClass(name) {
                        return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
                    }

                    /**
                     * Plugin system
                     *
                     * @param {Object} plugin
                     */

                    Vue.use = function(plugin) {
                        /* istanbul ignore if */
                        if (plugin.installed) {
                            return;
                        }
                        // additional parameters
                        var args = toArray(arguments, 1);
                        args.unshift(this);
                        if (typeof plugin.install === 'function') {
                            plugin.install.apply(plugin, args);
                        } else {
                            plugin.apply(null, args);
                        }
                        plugin.installed = true;
                        return this;
                    };

                    /**
                     * Apply a global mixin by merging it into the default
                     * options.
                     */

                    Vue.mixin = function(mixin) {
                        Vue.options = mergeOptions(Vue.options, mixin);
                    };

                    /**
                     * Create asset registration methods with the following
                     * signature:
                     *
                     * @param {String} id
                     * @param {*} definition
                     */

                    config._assetTypes.forEach(function(type) {
                        Vue[type] = function(id, definition) {
                            if (!definition) {
                                return this.options[type + 's'][id];
                            } else {
                                /* istanbul ignore if */
                                if (process.env.NODE_ENV !== 'production') {
                                    if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
                                        warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
                                    }
                                }
                                if (type === 'component' && isPlainObject(definition)) {
                                    definition.name = id;
                                    definition = Vue.extend(definition);
                                }
                                this.options[type + 's'][id] = definition;
                                return definition;
                            }
                        };
                    });
                }

                var filterRE = /[^|]\|[^|]/;

                function dataAPI(Vue) {

                    /**
                     * Get the value from an expression on this vm.
                     *
                     * @param {String} exp
                     * @param {Boolean} [asStatement]
                     * @return {*}
                     */

                    Vue.prototype.$get = function(exp, asStatement) {
                        var res = parseExpression(exp);
                        if (res) {
                            if (asStatement && !isSimplePath(exp)) {
                                var self = this;
                                return function statementHandler() {
                                    self.$arguments = toArray(arguments);
                                    var result = res.get.call(self, self);
                                    self.$arguments = null;
                                    return result;
                                };
                            } else {
                                try {
                                    return res.get.call(this, this);
                                } catch (e) {}
                            }
                        }
                    };

                    /**
                     * Set the value from an expression on this vm.
                     * The expression must be a valid left-hand
                     * expression in an assignment.
                     *
                     * @param {String} exp
                     * @param {*} val
                     */

                    Vue.prototype.$set = function(exp, val) {
                        var res = parseExpression(exp, true);
                        if (res && res.set) {
                            res.set.call(this, this, val);
                        }
                    };

                    /**
                     * Delete a property on the VM
                     *
                     * @param {String} key
                     */

                    Vue.prototype.$delete = function(key) {
                        del(this._data, key);
                    };

                    /**
                     * Watch an expression, trigger callback when its
                     * value changes.
                     *
                     * @param {String|Function} expOrFn
                     * @param {Function} cb
                     * @param {Object} [options]
                     *                 - {Boolean} deep
                     *                 - {Boolean} immediate
                     * @return {Function} - unwatchFn
                     */

                    Vue.prototype.$watch = function(expOrFn, cb, options) {
                        var vm = this;
                        var parsed;
                        if (typeof expOrFn === 'string') {
                            parsed = parseDirective(expOrFn);
                            expOrFn = parsed.expression;
                        }
                        var watcher = new Watcher(vm, expOrFn, cb, {
                            deep: options && options.deep,
                            sync: options && options.sync,
                            filters: parsed && parsed.filters,
                            user: !options || options.user !== false
                        });
                        if (options && options.immediate) {
                            cb.call(vm, watcher.value);
                        }
                        return function unwatchFn() {
                            watcher.teardown();
                        };
                    };

                    /**
                     * Evaluate a text directive, including filters.
                     *
                     * @param {String} text
                     * @param {Boolean} [asStatement]
                     * @return {String}
                     */

                    Vue.prototype.$eval = function(text, asStatement) {
                        // check for filters.
                        if (filterRE.test(text)) {
                            var dir = parseDirective(text);
                            // the filter regex check might give false positive
                            // for pipes inside strings, so it's possible that
                            // we don't get any filters here
                            var val = this.$get(dir.expression, asStatement);
                            return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
                        } else {
                            // no filter
                            return this.$get(text, asStatement);
                        }
                    };

                    /**
                     * Interpolate a piece of template text.
                     *
                     * @param {String} text
                     * @return {String}
                     */

                    Vue.prototype.$interpolate = function(text) {
                        var tokens = parseText(text);
                        var vm = this;
                        if (tokens) {
                            if (tokens.length === 1) {
                                return vm.$eval(tokens[0].value) + '';
                            } else {
                                return tokens.map(function(token) {
                                    return token.tag ? vm.$eval(token.value) : token.value;
                                }).join('');
                            }
                        } else {
                            return text;
                        }
                    };

                    /**
                     * Log instance data as a plain JS object
                     * so that it is easier to inspect in console.
                     * This method assumes console is available.
                     *
                     * @param {String} [path]
                     */

                    Vue.prototype.$log = function(path) {
                        var data = path ? getPath(this._data, path) : this._data;
                        if (data) {
                            data = clean(data);
                        }
                        // include computed fields
                        if (!path) {
                            for (var key in this.$options.computed) {
                                data[key] = clean(this[key]);
                            }
                        }
                        console.log(data);
                    };

                    /**
                     * "clean" a getter/setter converted object into a plain
                     * object copy.
                     *
                     * @param {Object} - obj
                     * @return {Object}
                     */

                    function clean(obj) {
                        return JSON.parse(JSON.stringify(obj));
                    }
                }

                function domAPI(Vue) {

                    /**
                     * Convenience on-instance nextTick. The callback is
                     * auto-bound to the instance, and this avoids component
                     * modules having to rely on the global Vue.
                     *
                     * @param {Function} fn
                     */

                    Vue.prototype.$nextTick = function(fn) {
                        nextTick(fn, this);
                    };

                    /**
                     * Append instance to target
                     *
                     * @param {Node} target
                     * @param {Function} [cb]
                     * @param {Boolean} [withTransition] - defaults to true
                     */

                    Vue.prototype.$appendTo = function(target, cb, withTransition) {
                        return insert(this, target, cb, withTransition, append, appendWithTransition);
                    };

                    /**
                     * Prepend instance to target
                     *
                     * @param {Node} target
                     * @param {Function} [cb]
                     * @param {Boolean} [withTransition] - defaults to true
                     */

                    Vue.prototype.$prependTo = function(target, cb, withTransition) {
                        target = query(target);
                        if (target.hasChildNodes()) {
                            this.$before(target.firstChild, cb, withTransition);
                        } else {
                            this.$appendTo(target, cb, withTransition);
                        }
                        return this;
                    };

                    /**
                     * Insert instance before target
                     *
                     * @param {Node} target
                     * @param {Function} [cb]
                     * @param {Boolean} [withTransition] - defaults to true
                     */

                    Vue.prototype.$before = function(target, cb, withTransition) {
                        return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
                    };

                    /**
                     * Insert instance after target
                     *
                     * @param {Node} target
                     * @param {Function} [cb]
                     * @param {Boolean} [withTransition] - defaults to true
                     */

                    Vue.prototype.$after = function(target, cb, withTransition) {
                        target = query(target);
                        if (target.nextSibling) {
                            this.$before(target.nextSibling, cb, withTransition);
                        } else {
                            this.$appendTo(target.parentNode, cb, withTransition);
                        }
                        return this;
                    };

                    /**
                     * Remove instance from DOM
                     *
                     * @param {Function} [cb]
                     * @param {Boolean} [withTransition] - defaults to true
                     */

                    Vue.prototype.$remove = function(cb, withTransition) {
                        if (!this.$el.parentNode) {
                            return cb && cb();
                        }
                        var inDocument = this._isAttached && inDoc(this.$el);
                        // if we are not in document, no need to check
                        // for transitions
                        if (!inDocument) withTransition = false;
                        var self = this;
                        var realCb = function realCb() {
                            if (inDocument) self._callHook('detached');
                            if (cb) cb();
                        };
                        if (this._isFragment) {
                            removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
                        } else {
                            var op = withTransition === false ? removeWithCb : removeWithTransition;
                            op(this.$el, this, realCb);
                        }
                        return this;
                    };

                    /**
                     * Shared DOM insertion function.
                     *
                     * @param {Vue} vm
                     * @param {Element} target
                     * @param {Function} [cb]
                     * @param {Boolean} [withTransition]
                     * @param {Function} op1 - op for non-transition insert
                     * @param {Function} op2 - op for transition insert
                     * @return vm
                     */

                    function insert(vm, target, cb, withTransition, op1, op2) {
                        target = query(target);
                        var targetIsDetached = !inDoc(target);
                        var op = withTransition === false || targetIsDetached ? op1 : op2;
                        var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
                        if (vm._isFragment) {
                            mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function(node) {
                                op(node, target, vm);
                            });
                            cb && cb();
                        } else {
                            op(vm.$el, target, vm, cb);
                        }
                        if (shouldCallHook) {
                            vm._callHook('attached');
                        }
                        return vm;
                    }

                    /**
                     * Check for selectors
                     *
                     * @param {String|Element} el
                     */

                    function query(el) {
                        return typeof el === 'string' ? document.querySelector(el) : el;
                    }

                    /**
                     * Append operation that takes a callback.
                     *
                     * @param {Node} el
                     * @param {Node} target
                     * @param {Vue} vm - unused
                     * @param {Function} [cb]
                     */

                    function append(el, target, vm, cb) {
                        target.appendChild(el);
                        if (cb) cb();
                    }

                    /**
                     * InsertBefore operation that takes a callback.
                     *
                     * @param {Node} el
                     * @param {Node} target
                     * @param {Vue} vm - unused
                     * @param {Function} [cb]
                     */

                    function beforeWithCb(el, target, vm, cb) {
                        before(el, target);
                        if (cb) cb();
                    }

                    /**
                     * Remove operation that takes a callback.
                     *
                     * @param {Node} el
                     * @param {Vue} vm - unused
                     * @param {Function} [cb]
                     */

                    function removeWithCb(el, vm, cb) {
                        remove(el);
                        if (cb) cb();
                    }
                }

                function eventsAPI(Vue) {

                    /**
                     * Listen on the given `event` with `fn`.
                     *
                     * @param {String} event
                     * @param {Function} fn
                     */

                    Vue.prototype.$on = function(event, fn) {
                        (this._events[event] || (this._events[event] = [])).push(fn);
                        modifyListenerCount(this, event, 1);
                        return this;
                    };

                    /**
                     * Adds an `event` listener that will be invoked a single
                     * time then automatically removed.
                     *
                     * @param {String} event
                     * @param {Function} fn
                     */

                    Vue.prototype.$once = function(event, fn) {
                        var self = this;

                        function on() {
                            self.$off(event, on);
                            fn.apply(this, arguments);
                        }
                        on.fn = fn;
                        this.$on(event, on);
                        return this;
                    };

                    /**
                     * Remove the given callback for `event` or all
                     * registered callbacks.
                     *
                     * @param {String} event
                     * @param {Function} fn
                     */

                    Vue.prototype.$off = function(event, fn) {
                        var cbs;
                        // all
                        if (!arguments.length) {
                            if (this.$parent) {
                                for (event in this._events) {
                                    cbs = this._events[event];
                                    if (cbs) {
                                        modifyListenerCount(this, event, -cbs.length);
                                    }
                                }
                            }
                            this._events = {};
                            return this;
                        }
                        // specific event
                        cbs = this._events[event];
                        if (!cbs) {
                            return this;
                        }
                        if (arguments.length === 1) {
                            modifyListenerCount(this, event, -cbs.length);
                            this._events[event] = null;
                            return this;
                        }
                        // specific handler
                        var cb;
                        var i = cbs.length;
                        while (i--) {
                            cb = cbs[i];
                            if (cb === fn || cb.fn === fn) {
                                modifyListenerCount(this, event, -1);
                                cbs.splice(i, 1);
                                break;
                            }
                        }
                        return this;
                    };

                    /**
                     * Trigger an event on self.
                     *
                     * @param {String|Object} event
                     * @return {Boolean} shouldPropagate
                     */

                    Vue.prototype.$emit = function(event) {
                        var isSource = typeof event === 'string';
                        event = isSource ? event : event.name;
                        var cbs = this._events[event];
                        var shouldPropagate = isSource || !cbs;
                        if (cbs) {
                            cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                            // this is a somewhat hacky solution to the question raised
                            // in #2102: for an inline component listener like <comp @test="doThis">,
                            // the propagation handling is somewhat broken. Therefore we
                            // need to treat these inline callbacks differently.
                            var hasParentCbs = isSource && cbs.some(function(cb) {
                                return cb._fromParent;
                            });
                            if (hasParentCbs) {
                                shouldPropagate = false;
                            }
                            var args = toArray(arguments, 1);
                            for (var i = 0, l = cbs.length; i < l; i++) {
                                var cb = cbs[i];
                                var res = cb.apply(this, args);
                                if (res === true && (!hasParentCbs || cb._fromParent)) {
                                    shouldPropagate = true;
                                }
                            }
                        }
                        return shouldPropagate;
                    };

                    /**
                     * Recursively broadcast an event to all children instances.
                     *
                     * @param {String|Object} event
                     * @param {...*} additional arguments
                     */

                    Vue.prototype.$broadcast = function(event) {
                        var isSource = typeof event === 'string';
                        event = isSource ? event : event.name;
                        // if no child has registered for this event,
                        // then there's no need to broadcast.
                        if (!this._eventsCount[event]) return;
                        var children = this.$children;
                        var args = toArray(arguments);
                        if (isSource) {
                            // use object event to indicate non-source emit
                            // on children
                            args[0] = {
                                name: event,
                                source: this
                            };
                        }
                        for (var i = 0, l = children.length; i < l; i++) {
                            var child = children[i];
                            var shouldPropagate = child.$emit.apply(child, args);
                            if (shouldPropagate) {
                                child.$broadcast.apply(child, args);
                            }
                        }
                        return this;
                    };

                    /**
                     * Recursively propagate an event up the parent chain.
                     *
                     * @param {String} event
                     * @param {...*} additional arguments
                     */

                    Vue.prototype.$dispatch = function(event) {
                        var shouldPropagate = this.$emit.apply(this, arguments);
                        if (!shouldPropagate) return;
                        var parent = this.$parent;
                        var args = toArray(arguments);
                        // use object event to indicate non-source emit
                        // on parents
                        args[0] = {
                            name: event,
                            source: this
                        };
                        while (parent) {
                            shouldPropagate = parent.$emit.apply(parent, args);
                            parent = shouldPropagate ? parent.$parent : null;
                        }
                        return this;
                    };

                    /**
                     * Modify the listener counts on all parents.
                     * This bookkeeping allows $broadcast to return early when
                     * no child has listened to a certain event.
                     *
                     * @param {Vue} vm
                     * @param {String} event
                     * @param {Number} count
                     */

                    var hookRE = /^hook:/;

                    function modifyListenerCount(vm, event, count) {
                        var parent = vm.$parent;
                        // hooks do not get broadcasted so no need
                        // to do bookkeeping for them
                        if (!parent || !count || hookRE.test(event)) return;
                        while (parent) {
                            parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
                            parent = parent.$parent;
                        }
                    }
                }

                function lifecycleAPI(Vue) {

                    /**
                     * Set instance target element and kick off the compilation
                     * process. The passed in `el` can be a selector string, an
                     * existing Element, or a DocumentFragment (for block
                     * instances).
                     *
                     * @param {Element|DocumentFragment|string} el
                     * @public
                     */

                    Vue.prototype.$mount = function(el) {
                        if (this._isCompiled) {
                            process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
                            return;
                        }
                        el = query(el);
                        if (!el) {
                            el = document.createElement('div');
                        }
                        this._compile(el);
                        this._initDOMHooks();
                        if (inDoc(this.$el)) {
                            this._callHook('attached');
                            ready.call(this);
                        } else {
                            this.$once('hook:attached', ready);
                        }
                        return this;
                    };

                    /**
                     * Mark an instance as ready.
                     */

                    function ready() {
                        this._isAttached = true;
                        this._isReady = true;
                        this._callHook('ready');
                    }

                    /**
                     * Teardown the instance, simply delegate to the internal
                     * _destroy.
                     */

                    Vue.prototype.$destroy = function(remove, deferCleanup) {
                        this._destroy(remove, deferCleanup);
                    };

                    /**
                     * Partially compile a piece of DOM and return a
                     * decompile function.
                     *
                     * @param {Element|DocumentFragment} el
                     * @param {Vue} [host]
                     * @return {Function}
                     */

                    Vue.prototype.$compile = function(el, host, scope, frag) {
                        return compile(el, this.$options, true)(this, el, host, scope, frag);
                    };
                }

                /**
                 * The exposed Vue constructor.
                 *
                 * API conventions:
                 * - public API methods/properties are prefixed with `$`
                 * - internal methods/properties are prefixed with `_`
                 * - non-prefixed properties are assumed to be proxied user
                 *   data.
                 *
                 * @constructor
                 * @param {Object} [options]
                 * @public
                 */

                function Vue(options) {
                    this._init(options);
                }

                // install internals
                initMixin(Vue);
                stateMixin(Vue);
                eventsMixin(Vue);
                lifecycleMixin(Vue);
                miscMixin(Vue);

                // install APIs
                globalAPI(Vue);
                dataAPI(Vue);
                domAPI(Vue);
                eventsAPI(Vue);
                lifecycleAPI(Vue);

                var convertArray = vFor._postProcess;

                /**
                 * Limit filter for arrays
                 *
                 * @param {Number} n
                 * @param {Number} offset (Decimal expected)
                 */

                function limitBy(arr, n, offset) {
                    offset = offset ? parseInt(offset, 10) : 0;
                    n = toNumber(n);
                    return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
                }

                /**
                 * Filter filter for arrays
                 *
                 * @param {String} search
                 * @param {String} [delimiter]
                 * @param {String} ...dataKeys
                 */

                function filterBy(arr, search, delimiter) {
                    arr = convertArray(arr);
                    if (search == null) {
                        return arr;
                    }
                    if (typeof search === 'function') {
                        return arr.filter(search);
                    }
                    // cast to lowercase string
                    search = ('' + search).toLowerCase();
                    // allow optional `in` delimiter
                    // because why not
                    var n = delimiter === 'in' ? 3 : 2;
                    // extract and flatten keys
                    var keys = toArray(arguments, n).reduce(function(prev, cur) {
                        return prev.concat(cur);
                    }, []);
                    var res = [];
                    var item, key, val, j;
                    for (var i = 0, l = arr.length; i < l; i++) {
                        item = arr[i];
                        val = item && item.$value || item;
                        j = keys.length;
                        if (j) {
                            while (j--) {
                                key = keys[j];
                                if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
                                    res.push(item);
                                    break;
                                }
                            }
                        } else if (contains(item, search)) {
                            res.push(item);
                        }
                    }
                    return res;
                }

                /**
                 * Filter filter for arrays
                 *
                 * @param {String} sortKey
                 * @param {String} reverse
                 */

                function orderBy(arr, sortKey, reverse) {
                    arr = convertArray(arr);
                    if (!sortKey) {
                        return arr;
                    }
                    var order = reverse && reverse < 0 ? -1 : 1;
                    // sort on a copy to avoid mutating original array
                    return arr.slice().sort(function(a, b) {
                        if (sortKey !== '$key') {
                            if (isObject(a) && '$value' in a) a = a.$value;
                            if (isObject(b) && '$value' in b) b = b.$value;
                        }
                        a = isObject(a) ? getPath(a, sortKey) : a;
                        b = isObject(b) ? getPath(b, sortKey) : b;
                        return a === b ? 0 : a > b ? order : -order;
                    });
                }

                /**
                 * String contain helper
                 *
                 * @param {*} val
                 * @param {String} search
                 */

                function contains(val, search) {
                    var i;
                    if (isPlainObject(val)) {
                        var keys = Object.keys(val);
                        i = keys.length;
                        while (i--) {
                            if (contains(val[keys[i]], search)) {
                                return true;
                            }
                        }
                    } else if (isArray(val)) {
                        i = val.length;
                        while (i--) {
                            if (contains(val[i], search)) {
                                return true;
                            }
                        }
                    } else if (val != null) {
                        return val.toString().toLowerCase().indexOf(search) > -1;
                    }
                }

                var digitsRE = /(\d{3})(?=\d)/g;

                // asset collections must be a plain object.
                var filters = {

                    orderBy: orderBy,
                    filterBy: filterBy,
                    limitBy: limitBy,

                    /**
                     * Stringify value.
                     *
                     * @param {Number} indent
                     */

                    json: {
                        read: function read(value, indent) {
                            return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
                        },
                        write: function write(value) {
                            try {
                                return JSON.parse(value);
                            } catch (e) {
                                return value;
                            }
                        }
                    },

                    /**
                     * 'abc' => 'Abc'
                     */

                    capitalize: function capitalize(value) {
                        if (!value && value !== 0) return '';
                        value = value.toString();
                        return value.charAt(0).toUpperCase() + value.slice(1);
                    },

                    /**
                     * 'abc' => 'ABC'
                     */

                    uppercase: function uppercase(value) {
                        return value || value === 0 ? value.toString().toUpperCase() : '';
                    },

                    /**
                     * 'AbC' => 'abc'
                     */

                    lowercase: function lowercase(value) {
                        return value || value === 0 ? value.toString().toLowerCase() : '';
                    },

                    /**
                     * 12345 => $12,345.00
                     *
                     * @param {String} sign
                     */

                    currency: function currency(value, _currency) {
                        value = parseFloat(value);
                        if (!isFinite(value) || !value && value !== 0) return '';
                        _currency = _currency != null ? _currency : '$';
                        var stringified = Math.abs(value).toFixed(2);
                        var _int = stringified.slice(0, -3);
                        var i = _int.length % 3;
                        var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
                        var _float = stringified.slice(-3);
                        var sign = value < 0 ? '-' : '';
                        return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
                    },

                    /**
                     * 'item' => 'items'
                     *
                     * @params
                     *  an array of strings corresponding to
                     *  the single, double, triple ... forms of the word to
                     *  be pluralized. When the number to be pluralized
                     *  exceeds the length of the args, it will use the last
                     *  entry in the array.
                     *
                     *  e.g. ['single', 'double', 'triple', 'multiple']
                     */

                    pluralize: function pluralize(value) {
                        var args = toArray(arguments, 1);
                        return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
                    },

                    /**
                     * Debounce a handler function.
                     *
                     * @param {Function} handler
                     * @param {Number} delay = 300
                     * @return {Function}
                     */

                    debounce: function debounce(handler, delay) {
                        if (!handler) return;
                        if (!delay) {
                            delay = 300;
                        }
                        return _debounce(handler, delay);
                    }
                };

                var partial = {

                    priority: PARTIAL,

                    params: ['name'],

                    // watch changes to name for dynamic partials
                    paramWatchers: {
                        name: function name(value) {
                            vIf.remove.call(this);
                            if (value) {
                                this.insert(value);
                            }
                        }
                    },

                    bind: function bind() {
                        this.anchor = createAnchor('v-partial');
                        replace(this.el, this.anchor);
                        this.insert(this.params.name);
                    },

                    insert: function insert(id) {
                        var partial = resolveAsset(this.vm.$options, 'partials', id);
                        if (process.env.NODE_ENV !== 'production') {
                            assertAsset(partial, 'partial', id);
                        }
                        if (partial) {
                            this.factory = new FragmentFactory(this.vm, partial);
                            vIf.insert.call(this);
                        }
                    },

                    unbind: function unbind() {
                        if (this.frag) {
                            this.frag.destroy();
                        }
                    }
                };

                // This is the elementDirective that handles <content>
                // transclusions. It relies on the raw content of an
                // instance being stored as `$options._content` during
                // the transclude phase.

                // We are exporting two versions, one for named and one
                // for unnamed, because the unnamed slots must be compiled
                // AFTER all named slots have selected their content. So
                // we need to give them different priorities in the compilation
                // process. (See #1965)

                var slot = {

                    priority: SLOT,

                    bind: function bind() {
                        var host = this.vm;
                        var raw = host.$options._content;
                        if (!raw) {
                            this.fallback();
                            return;
                        }
                        var context = host._context;
                        var slotName = this.params && this.params.name;
                        if (!slotName) {
                            // Default slot
                            this.tryCompile(extractFragment(raw.childNodes, raw, true), context, host);
                        } else {
                            // Named slot
                            var selector = '[slot="' + slotName + '"]';
                            var nodes = raw.querySelectorAll(selector);
                            if (nodes.length) {
                                this.tryCompile(extractFragment(nodes, raw), context, host);
                            } else {
                                this.fallback();
                            }
                        }
                    },

                    tryCompile: function tryCompile(content, context, host) {
                        if (content.hasChildNodes()) {
                            this.compile(content, context, host);
                        } else {
                            this.fallback();
                        }
                    },

                    compile: function compile(content, context, host) {
                        if (content && context) {
                            if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
                                // if the inserted slot has v-if
                                // inject fallback content as the v-else
                                var elseBlock = document.createElement('template');
                                elseBlock.setAttribute('v-else', '');
                                elseBlock.innerHTML = this.el.innerHTML;
                                content.appendChild(elseBlock);
                            }
                            var scope = host ? host._scope : this._scope;
                            this.unlink = context.$compile(content, host, scope, this._frag);
                        }
                        if (content) {
                            replace(this.el, content);
                        } else {
                            remove(this.el);
                        }
                    },

                    fallback: function fallback() {
                        this.compile(extractContent(this.el, true), this.vm);
                    },

                    unbind: function unbind() {
                        if (this.unlink) {
                            this.unlink();
                        }
                    }
                };

                var namedSlot = extend(extend({}, slot), {
                    priority: slot.priority + 1,
                    params: ['name']
                });

                /**
                 * Extract qualified content nodes from a node list.
                 *
                 * @param {NodeList} nodes
                 * @param {Element} parent
                 * @param {Boolean} main
                 * @return {DocumentFragment}
                 */

                function extractFragment(nodes, parent, main) {
                    var frag = document.createDocumentFragment();
                    for (var i = 0, l = nodes.length; i < l; i++) {
                        var node = nodes[i];
                        // if this is the main outlet, we want to skip all
                        // previously selected nodes;
                        // otherwise, we want to mark the node as selected.
                        // clone the node so the original raw content remains
                        // intact. this ensures proper re-compilation in cases
                        // where the outlet is inside a conditional block
                        if (main && !node.__v_selected) {
                            append(node);
                        } else if (!main && node.parentNode === parent) {
                            node.__v_selected = true;
                            append(node);
                        }
                    }
                    return frag;

                    function append(node) {
                        if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
                            node = parseTemplate(node);
                        }
                        node = cloneNode(node);
                        frag.appendChild(node);
                    }
                }

                var elementDirectives = {
                    slot: slot,
                    _namedSlot: namedSlot, // same as slot but with higher priority
                    partial: partial
                };

                Vue.version = '1.0.16';

                /**
                 * Vue and every constructor that extends Vue has an
                 * associated options object, which can be accessed during
                 * compilation steps as `this.constructor.options`.
                 *
                 * These can be seen as the default options of every
                 * Vue instance.
                 */

                Vue.options = {
                    directives: publicDirectives,
                    elementDirectives: elementDirectives,
                    filters: filters,
                    transitions: {},
                    components: {},
                    partials: {},
                    replace: true
                };

                // devtools global hook
                /* istanbul ignore next */
                if (devtools) {
                    devtools.emit('init', Vue);
                } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(navigator.userAgent)) {
                    console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
                }

                module.exports = Vue;
            }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {
            "_process": 86
        }
    ],
    123: [
        function(require, module, exports) {
            (function(process) {
                /**
                 * Copyright 2014-2015, Facebook, Inc.
                 * All rights reserved.
                 *
                 * This source code is licensed under the BSD-style license found in the
                 * LICENSE file in the root directory of this source tree. An additional grant
                 * of patent rights can be found in the PATENTS file in the same directory.
                 */

                'use strict';

                /**
                 * Similar to invariant but only logs a warning if the condition is not met.
                 * This can be used to log issues in development environments in critical
                 * paths. Removing the logging code for production environments will keep the
                 * same logic and follow the same code paths.
                 */

                var warning = function() {};

                if (process.env.NODE_ENV !== 'production') {
                    warning = function(condition, format, args) {
                        var len = arguments.length;
                        args = new Array(len > 2 ? len - 2 : 0);
                        for (var key = 2; key < len; key++) {
                            args[key - 2] = arguments[key];
                        }
                        if (format === undefined) {
                            throw new Error(
                                '`warning(condition, format, ...args)` requires a warning ' +
                                'message argument'
                            );
                        }

                        if (format.length < 10 || (/^[s\W]*$/).test(format)) {
                            throw new Error(
                                'The warning format should be able to uniquely identify this ' +
                                'warning. Please, use a more descriptive format than: ' + format
                            );
                        }

                        if (!condition) {
                            var argIndex = 0;
                            var message = 'Warning: ' +
                                format.replace(/%s/g, function() {
                                    return args[argIndex++];
                                });
                            if (typeof console !== 'undefined') {
                                console.error(message);
                            }
                            try {
                                // This error was thrown as a convenience so that you can use this stack
                                // to find the callsite that caused this warning to fire.
                                throw new Error(message);
                            } catch (x) {}
                        }
                    };
                }

                module.exports = warning;

            }).call(this, require('_process'))
        }, {
            "_process": 86
        }
    ],
    124: [
        function(require, module, exports) {
            var Vue = require('vue');
            var VueAsyncData = require('vue-async-data');

            Vue.use(require('vue-resource'));
            Vue.use(VueAsyncData);

            require('./legacy/global.js');
            require('./legacy/braintree.js');

            require('./forum/topic.js');
            require('./lesson/lesson.js');

            // Vendor
            require('./vendor/videojs/hotkeys.js');
            require('./vendor/uploadcare/uploadcare.js');

            var scrollInterval = setInterval(function() {
                if (window.location.hash == '') {
                    clearInterval(scrollInterval);
                    return;
                }

                if (!$(window.location.hash).length) {
                    return;
                }

                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top
                }, 100);

                clearInterval(scrollInterval);
            }, 100);

            $('#navigation-toggle').on('click', function() {
                $('#navigation').toggleClass('side-navigation--open');
                $('.wrapper').toggleClass('wrapper--push');
            });

        }, {
            "./forum/topic.js": 126,
            "./legacy/braintree.js": 132,
            "./legacy/global.js": 133,
            "./lesson/lesson.js": 134,
            "./vendor/uploadcare/uploadcare.js": 144,
            "./vendor/videojs/hotkeys.js": 145,
            "vue": 122,
            "vue-async-data": 96,
            "vue-resource": 111
        }
    ],
    125: [
        function(require, module, exports) {
            var Vue = require('vue');

            var md = require('markdown-it')({
                langPrefix: '',
                linkify: true,
                highlight: function(str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return '<pre><code class="' + lang + ' hljs">' +
                                hljs.highlight(lang, str, true).value +
                                '</code></pre>';
                        } catch (__) {}
                    }

                    return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
                }
            });

            module.exports = function() {
                Vue.filter('markdown', function(value) {
                    if (typeof value == 'undefined') {
                        return;
                    }

                    return md.render(value);
                });
            };

        }, {
            "markdown-it": 28,
            "vue": 122
        }
    ],
    126: [
        function(require, module, exports) {
            var Vue = require('vue');
            var filters = require('../filters.js')();
            var TopicFirstPost = require('../forum/topic_first_post.vue');
            var TopicPost = require('../forum/topic_post.vue');
            var TopicPostCounter = require('../forum/topic_post_counter.vue');
            var TopicContributorCounter = require('../forum/topic_contributor_counter.vue');
            var TopicReplyForm = require('../forum/topic_reply_form.vue');

            var TopicList = Vue.component('topic-list', {
                props: [
                    'topicid',
                    'topic',
                    'posts'
                ],
                components: {
                    'topic-first-post': TopicFirstPost,
                    'topic-post': TopicPost,
                    'topic-posts-counter': TopicPostCounter,
                    'topic-contributor-counter': TopicContributorCounter,
                    'topic-reply-form': TopicReplyForm
                },
                asyncData: function(resolve, reject) {
                    this.$http({
                        url: '/api/forum/topic/' + this.topicid,
                        method: 'GET'
                    }).then(function(response) {
                        resolve({
                            topic: response.data,
                            posts: response.data.posts
                        });
                    }.bind(this), function(response) {
                        // error callback
                    });
                }
            });

            if ($('#topic').length) {
                new Vue({
                    el: '#topic',
                    data: window.Codecourse
                });
            }

        }, {
            "../filters.js": 125,
            "../forum/topic_contributor_counter.vue": 127,
            "../forum/topic_first_post.vue": 128,
            "../forum/topic_post.vue": 129,
            "../forum/topic_post_counter.vue": 130,
            "../forum/topic_reply_form.vue": 131,
            "vue": 122
        }
    ],
    127: [
        function(require, module, exports) {
            'use strict';

            module.exports = {
                props: ['topic']
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n{{ topic.contributorCount }} {{ topic.contributorCount | pluralize 'contributor' }}\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/forum/topic_contributor_counter.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    128: [
        function(require, module, exports) {
            'use strict';

            var UserAvatar = require('../user/avatar.vue');
            module.exports = {
                props: ['topic'],
                components: {
                    'user-avatar': UserAvatar
                }
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<div class=\"thread-list__user show-for-medium-up\">\n    <user-avatar :user=\"topic.user\"></user-avatar>\n</div>\n<div class=\"thread-list__content\">\n    <p>{{ topic.humanCreatedAt }} by <a href=\"{{ topic.user.profileUrl }}\">{{ topic.user.firstNameOrUsername }}</a></p>\n\n    <div class=\"thread-list__header--container\" v-if=\"topic.relatedLesson\">\n        Relates to the lesson <a href=\"{{ topic.relatedLesson.url }}\" target=\"_blank\">{{ topic.relatedLesson.name }}</a>\n    </div>\n\n    <div class=\"thread-list__body container\" v-html=\"topic.body | markdown\">\n    </div>\n\n    <div class=\"thread-list__controls\" v-if=\"!topic.isTrashed\">\n        <ul class=\"list-inline no-margin-bottom\">\n            <li class=\"list-inline__item\" v-if=\"topic.canReport\">\n                <form action=\"{{ topic.reportUrl }}\" method=\"post\" class=\"as-anchor\">\n                    <button>Report</button>\n                    <input type=\"hidden\" name=\"_token\" value=\"{{ $root.csrf.token }}\">\n                </form>\n            </li>\n\n            <li class=\"list-inline__item\" v-if=\"$root.user.authenticated\"><a href=\"{{ topic.editUrl }}\">Edit</a></li>\n\n            <form action=\"{{ topic.unsubscribeUrl }}\" method=\"post\" class=\"as-anchor\" v-if=\"topic.isSubscribed &amp;&amp; $root.user.authenticated\">\n                <button>Unsubscribe</button>\n                <input type=\"hidden\" name=\"_token\" value=\"{{ $root.csrf.token }}\">\n            </form>\n\n            <form action=\"{{ topic.subscribeUrl }}\" method=\"post\" class=\"as-anchor\" v-if=\"!topic.isSubscribed &amp;&amp; $root.user.authenticated\">\n                <button>Subscribe</button>\n                <input type=\"hidden\" name=\"_token\" value=\"{{ $root.csrf.token }}\">\n            </form>\n        </ul>\n    </div>\n</div>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/forum/topic_first_post.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "../user/avatar.vue": 143,
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    129: [
        function(require, module, exports) {
            'use strict';

            var UserAvatar = require('../user/avatar.vue');
            module.exports = {
                props: ['post', 'topic'],
                components: {
                    'user-avatar': UserAvatar
                }
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<div class=\"thread-list reply\" id=\"post-{{ post.id }}\">\n    <div class=\"row\">\n        <div class=\"large-12 columns\">\n            <div class=\"thread-list__user show-for-medium-up\">\n                <user-avatar :user=\"post.user\"></user-avatar>\n            </div>\n            <div class=\"thread-list__content\" v-bind:class=\"{'topic-solved': post.isSolution}\">\n                <p>{{ post.humanCreatedAt }} by <a href=\"{{ post.user.profileUrl }}\">{{ post.user.firstNameOrUsername }}</a></p>\n\n                <div class=\"thread-list__solved-container\" v-if=\"post.isSolution\">\n                    <i class=\"fa fa-check\"></i> Best answer\n                </div>\n\n                <div class=\"thread-list__body\" v-html=\"post.body | markdown\"></div>\n\n                <div class=\"thread-list__controls\">\n                    <ul class=\"list-inline no-margin-bottom\">\n                        <li class=\"list-inline__item\" v-if=\"post.canReport\">\n                            <form action=\"{{ post.reportUrl }}\" method=\"post\" class=\"as-anchor\">\n                                <button>Report</button>\n                                <input type=\"hidden\" name=\"_token\" value=\"{{ $root.csrf.token }}\">\n                            </form>\n                        </li>\n                        <li class=\"list-inline__item\" v-if=\"($root.user.authenticated &amp;&amp; $root.user.id == topic.id) || $root.user.moderator\">\n                            <form action=\"{{ post.markAsSolutionUrl }}\" method=\"post\" class=\"as-anchor\" id=\"mark-best-answer\" v-if=\"!post.isSolution\">\n                                <button>Mark as best answer</button>\n                                <input type=\"hidden\" name=\"_token\" value=\"{{ $root.csrf.token }}\">\n                            </form>\n                            \n                            <form action=\"{{ post.unmarkAsSolutionUrl }}\" method=\"post\" class=\"as-anchor\" v-if=\"post.isSolution &amp;&amp; topic.isSolved\">\n                                <button>Unmark as best answer</button>\n                                <input type=\"hidden\" name=\"_token\" value=\"{{ $root.csrf.token }}\">\n                            </form>\n                        </li>\n\n                        <li class=\"list-inline__item\" v-if=\"$root.user.authenticated\"><a href=\"{{ post.editUrl }}\">Edit</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/forum/topic_post.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "../user/avatar.vue": 143,
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    130: [
        function(require, module, exports) {
            'use strict';

            module.exports = {
                props: ['posts']
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n{{ posts.length }} {{ posts.length | pluralize 'answer' }}\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/forum/topic_post_counter.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    131: [
        function(require, module, exports) {
            'use strict';

            module.exports = {
                props: ['topic'],
                data: function data() {
                    return {
                        body: ''
                    };
                },
                methods: {
                    create: function create(e) {
                        e.preventDefault();

                        this.$http({
                            url: '/api/forum/topic/' + this.topic.id + '/reply',
                            method: 'POST',
                            data: {
                                body: this.body
                            }
                        }).then(function(response) {
                            this.$parent.topic = response.data.topic;
                            this.$parent.posts.push(response.data.post);

                            this.body = '';
                        }.bind(this), function(response) {
                            // error callback
                        });
                    }
                }
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<div class=\"reply-container\">\n    <p v-if=\"topic.locked\">Topic is locked</p>\n    \n    <div v-if=\"!topic.locked\">\n        <h5>Post a reply</h5>\n        <form class=\"container\" v-on:submit=\"create\">\n            <label>\n                <textarea v-model=\"body\" name=\"body\" rows=\"14\" class=\"light\" placeholder=\"Reply to this topic\" required=\"\"></textarea>\n            </label>\n            <p class=\"right-text\">Markdown is supported</p>\n\n            <button class=\"button small\">Reply</button>\n            <input type=\"hidden\" name=\"_token\" value=\"{{ $root.csrf.token }}\">\n        </form>\n    </div>\n</div>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/forum/topic_reply_form.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    132: [
        function(require, module, exports) {
            if ($('#bt-paypal').length) {
                braintree.setup(codecourse.braintree_client_token, 'paypal', {
                    container: 'bt-paypal',

                    onCancelled: function() {
                        $('.bt-paypal-notice').show();
                        $('.cc-paypal-after').hide();
                    },

                    onPaymentMethodReceived: function() {
                        $('.bt-paypal-notice').hide();
                        $('.cc-paypal-after').show();
                    }
                });
            }

            if ($('#bt-card-form').length) {
                braintree.setup(codecourse.braintree_client_token, 'custom', {
                    id: 'bt-card-form',

                    hostedFields: {
                        number: {
                            selector: "#bt-card-number"
                        },
                        cvv: {
                            selector: "#bt-cvv"
                        },
                        expirationMonth: {
                            selector: "#bt-expiration-month",
                            placeholder: "mm"
                        },
                        expirationYear: {
                            selector: "#bt-expiration-year",
                            placeholder: "yy"
                        },
                        postalCode: {
                            selector: "#bt-postal-code"
                        },
                        styles: {
                            "input": {
                                "font-size": "15.5px",
                                "color": "#555",
                                "font-weight": "400"
                            }
                        }
                    },

                    onError: function(error) {
                        swal({
                            title: 'Incorrect details',
                            text: 'Looks like some details were incorrect.',
                            type: 'info',
                            timer: 3000,
                            showConfirmButton: false,
                            allowEscapeKey: true,
                            allowOutsideClick: true
                        });
                    },
                });
            }

        }, {}
    ],
    133: [
        function(require, module, exports) {
            $(document).ready(function() {
                $(function() {
                    $(document).foundation();
                });

                $('select:not(.tags, .lesson-select)').select2();

                $('.tags').select2({
                    tokenSeparators: [","],
                    ajax: {
                        url: '/api/tags/search',
                        dataType: 'json',
                        delay: 250,
                        data: function(params) {
                            return {
                                q: params.term
                            };
                        },
                        processResults: function(data, params) {
                            data.forEach(function(item) {
                                item.id = item.slug;
                            });

                            return {
                                results: data
                            };
                        },
                        cache: true
                    },
                    escapeMarkup: function(markup) {
                        return markup;
                    },
                    templateResult: function(tag) {
                        if (tag.loading) {
                            return 'Searching...';
                        }

                        return '<li class="select2-results__option" role="treeitem">' + tag.name + '</li>';
                    },
                    templateSelection: function(tag) {
                        return tag.id;
                    }
                });

                $('.lesson-select').select2({
                    placeholder: "Select a lesson",
                    allowClear: true,
                    ajax: {
                        url: '/api/lesson/search',
                        dataType: 'json',
                        delay: 250,
                        data: function(params) {
                            return {
                                q: params.term
                            };
                        },
                        processResults: function(data, params) {
                            data.forEach(function(item) {
                                item.text = item.name;
                                item.id = item.objectID;
                            });

                            return {
                                results: data
                            };
                        },
                        cache: true
                    },
                    escapeMarkup: function(markup) {
                        return markup;
                    },
                    templateResult: function(tag) {
                        if (tag.loading) {
                            return 'Searching...';
                        }

                        return '<li class="select2-results__option" role="treeitem">' + tag.name + '</li>';
                    },
                    templateSelection: function(tag) {
                        return tag.text;
                    }
                });

                $('.tags').trigger('change');

                hljs.initHighlightingOnLoad();
            }());

        }, {}
    ],
    134: [
        function(require, module, exports) {
            var Vue = require('vue');
            var LessonParts = require('../lesson/lesson_parts.vue');
            var LessonContent = require('../lesson/lesson_content.vue');
            var VideoLink = require('../lesson/links/video_link.vue');
            var LessonLinks = require('../lesson/lesson_links.vue');
            var LessonDownloads = require('../lesson/lesson_downloads.vue');
            var LessonTopics = require('../lesson/lesson_topics.vue');
            var LessonPercentComplete = require('../lesson/lesson_percent_complete.vue');
            var history = require('history').createHistory();

            var Lesson = Vue.component('lesson', {
                props: [
                    'slug',
                    'lesson',
                    'current',
                    'partid'
                ],
                components: {
                    'lesson-parts': LessonParts,
                    'lesson-content': LessonContent,
                    'lesson-links': LessonLinks,
                    'lesson-downloads': LessonDownloads,
                    'lesson-topics': LessonTopics,
                    'lesson-percent-complete': LessonPercentComplete
                },
                asyncData: function(resolve, reject) {
                    this.$http({
                        url: '/api/lesson/' + this.slug,
                        method: 'GET'
                    }).then(function(response) {
                        resolve({
                            lesson: response.data
                        });

                        if (this.partid) {
                            this.lesson.sections.map(function(section, sectionIndex) {
                                section.items.map(function(item, itemIndex) {
                                    if (this.partid == item.itemable.id) {
                                        resolve({
                                            current: this.lesson.sections[sectionIndex].items[itemIndex]
                                        });
                                    }
                                }.bind(this));
                            }.bind(this));
                        } else {
                            resolve({
                                current: response.data.sections[0].items[0]
                            });
                        }

                        history.push({
                            pathname: '/library/lessons/' + this.lesson.slug + '/' + this.current.itemable.slug,
                            state: {
                                part: this.current
                            }
                        });
                    }.bind(this), function(response) {
                        // error callback
                    });
                },
                ready: function() {
                    history.listen(function(location) {
                        if (!location.state) {
                            return;
                        }

                        this.current = location.state.part;
                    }.bind(this));
                }
            });

            if ($('#lesson').length) {
                new Vue({
                    el: '#lesson',
                    data: window.Codecourse
                });
            }

        }, {
            "../lesson/lesson_content.vue": 135,
            "../lesson/lesson_downloads.vue": 136,
            "../lesson/lesson_links.vue": 137,
            "../lesson/lesson_parts.vue": 138,
            "../lesson/lesson_percent_complete.vue": 140,
            "../lesson/lesson_topics.vue": 141,
            "../lesson/links/video_link.vue": 142,
            "history": 20,
            "vue": 122
        }
    ],
    135: [
        function(require, module, exports) {
            'use strict';

            var VideoPlayer = require('../video/player.vue');
            var history = require('history').createHistory();

            module.exports = {
                props: ['lesson', 'current'],
                components: {
                    'video-player': VideoPlayer
                },
                methods: {
                    complete: function complete(part, e) {
                        e.preventDefault();

                        this.lesson.sections.map(function(section, sectionIndex) {
                            section.items.map(function(item, itemIndex) {
                                if (part.itemable.next_id == item.itemable.id) {
                                    this.current = this.lesson.sections[sectionIndex].items[itemIndex];

                                    history.push({
                                        pathname: '/library/lessons/' + this.lesson.slug + '/' + this.current.itemable.slug,
                                        state: {
                                            part: this.current
                                        }
                                    });
                                }
                            }.bind(this));
                        }.bind(this));

                        if (this.$root.user.authenticated) {
                            this.$http({
                                url: '/api/lesson/' + this.lesson.slug + '/' + part.itemable.slug + '/complete',
                                method: 'GET'
                            }).then(function(response) {
                                this.lesson = response.data;
                            }.bind(this), function(response) {
                                //
                            });
                        }
                    }
                }
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<div class=\"lesson-item-wrapper\" id=\"lesson-content\">\n    <div class=\"lesson-item-notice\" v-if=\"!current.itemable.canAccess\">\n        <div class=\"lesson-item-notice__container\">\n            <div v-if=\"current.itemable.preview || !$root.user.authenticated\">\n                <i class=\"fa fa-user lesson-item-notice__icon\"></i>\n                <h4 class=\"lesson-item-notice__title\">Join us to watch this series.</h4>\n                <p><a href=\"/auth/signin\">Sign in</a> or <a href=\"/auth/signup\">sign up</a>.</p>\n            </div>\n            <div v-else=\"\">\n                <i class=\"fa fa-rocket lesson-item-notice__icon\"></i>\n                <h4 class=\"lesson-item-notice__title\">Go premium to watch this series.</h4>\n                <p><a href=\"/premium\">Learn more</a><span v-if=\"!$root.user.authenticated\"> or <a href=\"/auth/signin\">sign in</a></span></p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"lesson-item-wrapper__video-container\" v-if=\"current.itemable.type == 'video' &amp;&amp; current.itemable.canAccess\">\n        <video-player :lesson.sync=\"lesson\" :current.sync=\"current\"></video-player>\n    </div>\n\n    <div class=\"lesson-item-wrapper__content clearfix\">\n        <h3 class=\"lesson-item-wrapper__content-header\">{{ current.itemable.name }}</h3>\n        <p class=\"lesson-item-wrapper__content-description\">{{ current.itemable.description }}</p>\n        <div class=\"lesson-item-wrapper__navigation\">\n            <a href=\"#\" class=\"lesson-item-wrapper__navigation-button lesson-item-wrapper__navigation-button--forward lesson-item-wrapper__navigation-button--border\" v-on:click=\"complete(current, $event)\" v-if=\"current.itemable.next_id\">\n                Next part <i class=\"fa fa-arrow-right\"></i>\n            </a>\n\n            <a href=\"#\" class=\"lesson-item-wrapper__navigation-button lesson-item-wrapper__navigation-button--forward lesson-item-wrapper__navigation-button--border\" v-on:click=\"complete(current, $event)\" v-if=\"!current.itemable.next_id &amp;&amp; !current.itemable.completedByUser &amp;&amp; $root.user.authenticated &amp;&amp; current.itemable.canAccess\">\n                Finish <i class=\"fa fa-check\"></i>\n            </a>\n        </div>\n    </div>\n</div>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/lesson/lesson_content.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "../video/player.vue": 146,
            "history": 20,
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    136: [
        function(require, module, exports) {
            'use strict';

            module.exports = {
                props: ['lesson', 'current']
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<div class=\"container-list\">\n    <ul class=\"container-list__list\">\n        <li class=\"container-list__header\">\n            <i class=\"fa fa-arrow-circle-down container-list__header-icon\"></i> Downloads\n        </li>\n\n        <li class=\"container-list__item\" v-for=\"code in lesson.code\">\n            <a href=\"/code/download/{{ code.id }}\" class=\"container-list__link\">{{ code.is_full_code ? 'Download full code' : code.name }}</a>\n        </li>\n\n        <li class=\"container-list__item\">\n            <a href=\"/video/download/{{ current.itemable.id }}/hd\" class=\"container-list__link\">Download video</a>\n        </li>\n    </ul>\n</div>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/lesson/lesson_downloads.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    137: [
        function(require, module, exports) {
            'use strict';

            module.exports = {
                props: ['lesson']
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<div class=\"container-list\">\n    <ul class=\"container-list__list\">\n        <li class=\"container-list__header\">\n            <i class=\"fa fa-link container-list__header-icon\"></i> Links\n        </li>\n        <li class=\"container-list__item\" v-for=\"link in lesson.links\">\n            <a href=\"{{ link.uri }}\" class=\"container-list__link\" target=\"_blank\">{{ link.title }}</a>\n        </li>\n    </ul>\n</div>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/lesson/lesson_links.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    138: [
        function(require, module, exports) {
            'use strict';

            var LessonPartsSection = require('../lesson/lesson_parts_section.vue');

            module.exports = {
                props: ['lesson', 'current'],
                'components': {
                    'lesson-parts-section': LessonPartsSection
                }
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<div class=\"container-list\" v-for=\"section in lesson.sections\" v-if=\"lesson.sections.length\">\n    <lesson-parts-section :lesson=\"lesson\" :parts=\"section.items\" :section=\"section\" :current.sync=\"current\"></lesson-parts-section>\n</div>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/lesson/lesson_parts.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "../lesson/lesson_parts_section.vue": 139,
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    139: [
        function(require, module, exports) {
            'use strict';

            var VideoLink = require('../lesson/links/video_link.vue');

            module.exports = {
                props: ['lesson', 'section', 'parts', 'current'],
                components: {
                    'video-link': VideoLink
                }
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<ul class=\"container-list__list\">\n        <li class=\"container-list__header\">\n            {{ section.title }}\n        </li>\n\n        <li v-for=\"part in parts\" class=\"container-list__item\" v-bind:class=\"{'container-list__item--active': part.itemable.slug == current.itemable.slug}\">\n            <div class=\"container-list__complete\" v-if=\"$root.user.authenticated &amp;&amp; part.itemable.completedByUser\">\n                <span class=\"container-list__complete-icon\"><i class=\"fa fa-check\"></i></span>\n            </div>\n            <video-link v-if=\"part.itemable.type == 'video'\" :part=\"part\" :lesson=\"lesson\" :current.sync=\"current\"></video-link>\n        </li>\n    </ul>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/lesson/lesson_parts_section.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "../lesson/links/video_link.vue": 142,
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    140: [
        function(require, module, exports) {
            'use strict';

            module.exports = {
                props: ['lesson']
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n{{ lesson.percentageCompleteForUser }}% complete\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/lesson/lesson_percent_complete.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    141: [
        function(require, module, exports) {
            'use strict';

            module.exports = {
                props: ['lesson']
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<div class=\"container-list\">\n    <ul class=\"container-list__list\">\n        <li class=\"container-list__header\">\n            <i class=\"fa fa-comments container-list__header-icon\"></i> {{ lesson.topics.length }} related {{ lesson.topics.length | pluralize 'topic' }}\n        </li>\n        <li class=\"container-list__item\" v-for=\"topic in lesson.topics\">\n            <a href=\"/forum/topics/{{ topic.slug }}/{{ topic.id }}\" class=\"container-list__link\">{{ topic.name }}</a>\n        </li>\n        <li class=\"container-list__item\" v-if=\"lesson.topics.length > 5\">\n            <a href=\"/forum/topics/lesson/{{ lesson.slug }}\" class=\"container-list__link container-list__link--more\">See all related topics</a>\n        </li>\n    </ul>\n</div>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/lesson/lesson_topics.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    142: [
        function(require, module, exports) {
            'use strict';

            var history = require('history').createHistory();

            module.exports = {
                props: ['lesson', 'part', 'current'],
                methods: {
                    load: function load(lesson, part, e) {
                        e.preventDefault();

                        $('body').animate({
                            scrollTop: $('#lesson-content').offset().top - 50,
                            duration: 100
                        });

                        history.push({
                            pathname: '/library/lessons/' + this.lesson.slug + '/' + part.itemable.slug,
                            state: {
                                part: part
                            }
                        });

                        this.current = part;
                    }
                }
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<a href=\"#\" class=\"container-list__link\" v-on:click=\"load(lesson.slug, part, $event)\">\n    <span class=\"container-list__icon\"><i class=\"fa fa-play-circle-o\"></i></span>\n    <span class=\"container-list__item-header\">{{ part.itemable.name }}</span>\n    <span class=\"container-list__description\">{{ part.itemable.partable.timeString }}</span>\n</a>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/lesson/links/video_link.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "history": 20,
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    143: [
        function(require, module, exports) {
            'use strict';

            module.exports = {
                props: ['user']
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<div class=\"user-avatar\">\n    <a href=\"{{ user.profileUrl }}\">\n        <img class=\"user-avatar__image\" v-bind:src=\"user.avatarUrl\" alt=\"{{ user.firstNameOrUsername }}\">\n    </a>\n    <span class=\"user-avatar__premium-badge\" v-if=\"user.hasSubscription\"></span>\n</div>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/user/avatar.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ],
    144: [
        function(require, module, exports) {
            if ($('#ext-uploader').length) {
                var widget = uploadcare.SingleWidget('#ext-uploader');

                $('#ext-uploader').on('click', function() {
                    var dialog = widget.openDialog();
                });

                widget.onChange(function(file) {
                    if (file) {
                        file.done(function(info) {
                            console.log(info);
                            $('#ext-uploader').closest('form').append($('<input />', {
                                'type': 'hidden',
                                'name': 'image_uuid',
                                'value': info.uuid
                            }));
                        });
                    };
                });
            }

        }, {}
    ],
    145: [
        function(require, module, exports) {
            /*
             * Video.js Hotkeys
             * https://github.com/ctd1500/videojs-hotkeys
             *
             * Copyright (c) 2015 Chris Dougherty
             * Licensed under the Apache-2.0 license.
             */

            ;
            (function(root, factory) {
                if (typeof define === 'function' && define.amd) {
                    define([], factory.bind(this, root, root.videojs));
                } else if (typeof module !== 'undefined' && module.exports) {
                    module.exports = factory(root, root.videojs);
                } else {
                    factory(root, root.videojs);
                }

            })(window, function(window, videojs) {
                "use strict";
                window['videojs_hotkeys'] = {
                    version: "0.2.14"
                };

                var hotkeys = function(options) {
                    var player = this;
                    var pEl = player.el();
                    var doc = document;
                    var def_options = {
                        volumeStep: 0.1,
                        seekStep: 5,
                        enableMute: true,
                        enableVolumeScroll: true,
                        enableFullscreen: true,
                        enableNumbers: true,
                        enableJogStyle: false,
                        alwaysCaptureHotkeys: false,
                        playPauseKey: playPauseKey,
                        rewindKey: rewindKey,
                        forwardKey: forwardKey,
                        volumeUpKey: volumeUpKey,
                        volumeDownKey: volumeDownKey,
                        muteKey: muteKey,
                        fullscreenKey: fullscreenKey,
                        customKeys: {}
                    };

                    var cPlay = 1,
                        cRewind = 2,
                        cForward = 3,
                        cVolumeUp = 4,
                        cVolumeDown = 5,
                        cMute = 6,
                        cFullscreen = 7;

                    // Use built-in merge function from Video.js v5.0+ or v4.4.0+
                    var mergeOptions = videojs.mergeOptions || videojs.util.mergeOptions;
                    options = mergeOptions(def_options, options || {});

                    var volumeStep = options.volumeStep,
                        seekStep = options.seekStep,
                        enableMute = options.enableMute,
                        enableVolumeScroll = options.enableVolumeScroll,
                        enableFull = options.enableFullscreen,
                        enableNumbers = options.enableNumbers,
                        enableJogStyle = options.enableJogStyle,
                        alwaysCaptureHotkeys = options.alwaysCaptureHotkeys;

                    // Set default player tabindex to handle keydown and doubleclick events
                    if (!pEl.hasAttribute('tabIndex')) {
                        pEl.setAttribute('tabIndex', '-1');
                    }

                    // Remove player outline to fix video performance issue
                    pEl.style.outline = "none";

                    if (alwaysCaptureHotkeys || !player.autoplay()) {
                        player.one('play', function() {
                            pEl.focus(); // Fixes the .vjs-big-play-button handing focus back to body instead of the player
                        });
                    }

                    player.on('userinactive', function() {
                        // When the control bar fades, re-apply focus to the player if last focus was a control button
                        var cancelFocusingPlayer = function() {
                            clearTimeout(focusingPlayerTimeout);
                        };
                        var focusingPlayerTimeout = setTimeout(function() {
                            player.off('useractive', cancelFocusingPlayer);
                            if (doc.activeElement.parentElement == pEl.querySelector('.vjs-control-bar')) {
                                pEl.focus();
                            }
                        }, 10);

                        player.one('useractive', cancelFocusingPlayer);
                    });

                    player.on('play', function() {
                        // Fix allowing the YouTube plugin to have hotkey support.
                        var ifblocker = pEl.querySelector('.iframeblocker');
                        if (ifblocker && ifblocker.style.display === '') {
                            ifblocker.style.display = "block";
                            ifblocker.style.bottom = "39px";
                        }
                    });

                    var keyDown = function keyDown(event) {
                        var ewhich = event.which,
                            curTime;
                        var ePreventDefault = event.preventDefault;
                        // When controls are disabled, hotkeys will be disabled as well
                        if (player.controls()) {

                            // Don't catch keys if any control buttons are focused, unless alwaysCaptureHotkeys is true
                            var activeEl = doc.activeElement;
                            if (alwaysCaptureHotkeys ||
                                activeEl == pEl ||
                                activeEl == pEl.querySelector('.vjs-tech') ||
                                activeEl == pEl.querySelector('.vjs-control-bar') ||
                                activeEl == pEl.querySelector('.iframeblocker')) {

                                switch (checkKeys(event, player)) {

                                    // Spacebar toggles play/pause
                                    case cPlay:
                                        ePreventDefault();
                                        if (alwaysCaptureHotkeys) {
                                            // Prevent control activation with space
                                            event.stopPropagation();
                                        }

                                        if (player.paused()) {
                                            player.play();
                                        } else {
                                            player.pause();
                                        }
                                        break;

                                        // Seeking with the left/right arrow keys
                                    case cRewind: // Seek Backward
                                        ePreventDefault();
                                        curTime = player.currentTime() - seekStep;
                                        // The flash player tech will allow you to seek into negative
                                        // numbers and break the seekbar, so try to prevent that.
                                        if (player.currentTime() <= seekStep) {
                                            curTime = 0;
                                        }
                                        player.currentTime(curTime);
                                        break;
                                    case cForward: // Seek Forward
                                        ePreventDefault();
                                        player.currentTime(player.currentTime() + seekStep);
                                        break;

                                        // Volume control with the up/down arrow keys
                                    case cVolumeDown:
                                        ePreventDefault();
                                        if (!enableJogStyle) {
                                            player.volume(player.volume() - volumeStep);
                                        } else {
                                            curTime = player.currentTime() - 1;
                                            if (player.currentTime() <= 1) {
                                                curTime = 0;
                                            }
                                            player.currentTime(curTime);
                                        }
                                        break;
                                    case cVolumeUp:
                                        ePreventDefault();
                                        if (!enableJogStyle) {
                                            player.volume(player.volume() + volumeStep);
                                        } else {
                                            player.currentTime(player.currentTime() + 1);
                                        }
                                        break;

                                        // Toggle Mute with the M key
                                    case cMute:
                                        if (enableMute) {
                                            player.muted(!player.muted());
                                        }
                                        break;

                                        // Toggle Fullscreen with the F key
                                    case cFullscreen:
                                        if (enableFull) {
                                            if (player.isFullscreen()) {
                                                player.exitFullscreen();
                                            } else {
                                                player.requestFullscreen();
                                            }
                                        }
                                        break;

                                    default:
                                        // Number keys from 0-9 skip to a percentage of the video. 0 is 0% and 9 is 90%
                                        if ((ewhich > 47 && ewhich < 59) || (ewhich > 95 && ewhich < 106)) {
                                            if (enableNumbers) {
                                                var sub = 48;
                                                if (ewhich > 95) {
                                                    sub = 96;
                                                }
                                                var number = ewhich - sub;
                                                ePreventDefault();
                                                player.currentTime(player.duration() * number * 0.1);
                                            }
                                        }

                                        // Handle any custom hotkeys
                                        for (var customKey in options.customKeys) {
                                            var customHotkey = options.customKeys[customKey];
                                            // Check for well formed custom keys
                                            if (customHotkey && customHotkey.key && customHotkey.handler) {
                                                // Check if the custom key's condition matches
                                                if (customHotkey.key(event)) {
                                                    ePreventDefault();
                                                    customHotkey.handler(player, options);
                                                }
                                            }
                                        }
                                }
                            }
                        }
                    };

                    var doubleClick = function doubleClick(event) {
                        // When controls are disabled, hotkeys will be disabled as well
                        if (player.controls()) {

                            // Don't catch clicks if any control buttons are focused
                            var activeEl = event.relatedTarget || event.toElement || doc.activeElement;
                            if (activeEl == pEl ||
                                activeEl == pEl.querySelector('.vjs-tech') ||
                                activeEl == pEl.querySelector('.iframeblocker')) {

                                if (enableFull) {
                                    if (player.isFullscreen()) {
                                        player.exitFullscreen();
                                    } else {
                                        player.requestFullscreen();
                                    }
                                }
                            }
                        }
                    };

                    var mouseScroll = function mouseScroll(event) {
                        // When controls are disabled, hotkeys will be disabled as well
                        if (player.controls()) {
                            var activeEl = event.relatedTarget || event.toElement || doc.activeElement;
                            if (alwaysCaptureHotkeys ||
                                activeEl == pEl ||
                                activeEl == pEl.querySelector('.vjs-tech') ||
                                activeEl == pEl.querySelector('.iframeblocker') ||
                                activeEl == pEl.querySelector('.vjs-control-bar')) {

                                if (enableVolumeScroll) {
                                    event = window.event || event;
                                    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                                    event.preventDefault();

                                    if (delta == 1) {
                                        player.volume(player.volume() + volumeStep);
                                    } else if (delta == -1) {
                                        player.volume(player.volume() - volumeStep);
                                    }
                                }
                            }
                        }
                    };

                    var checkKeys = function checkKeys(e, player) {
                        // Allow some modularity in defining custom hotkeys

                        // Play/Pause check
                        if (options.playPauseKey(e, player)) {
                            return cPlay;
                        }

                        // Seek Backward check
                        if (options.rewindKey(e, player)) {
                            return cRewind;
                        }

                        // Seek Forward check
                        if (options.forwardKey(e, player)) {
                            return cForward;
                        }

                        // Volume Up check
                        if (options.volumeUpKey(e, player)) {
                            return cVolumeUp;
                        }

                        // Volume Down check
                        if (options.volumeDownKey(e, player)) {
                            return cVolumeDown;
                        }

                        // Mute check
                        if (options.muteKey(e, player)) {
                            return cMute;
                        }

                        // Fullscreen check
                        if (options.fullscreenKey(e, player)) {
                            return cFullscreen;
                        }
                    };

                    function playPauseKey(e) {
                        // Space bar
                        return (e.which === 32);
                    }

                    function rewindKey(e) {
                        // Left Arrow
                        return (e.which === 37);
                    }

                    function forwardKey(e) {
                        // Right Arrow
                        return (e.which === 39);
                    }

                    function volumeUpKey(e) {
                        // Up Arrow
                        return (e.which === 38);
                    }

                    function volumeDownKey(e) {
                        // Down Arrow
                        return (e.which === 40);
                    }

                    function muteKey(e) {
                        // M key
                        return (e.which === 77);
                    }

                    function fullscreenKey(e) {
                        // F key
                        return (e.which === 70);
                    }

                    player.on('keydown', keyDown);
                    player.on('dblclick', doubleClick);
                    player.on('mousewheel', mouseScroll);
                    player.on("DOMMouseScroll", mouseScroll);

                    return this;
                };

                videojs.plugin('hotkeys', hotkeys);
            });

        }, {}
    ],
    146: [
        function(require, module, exports) {
            'use strict';

            module.exports = {
                data: function data() {
                    return {
                        player: null
                    };
                },
                props: ['lesson', 'current'],
                ready: function ready() {
                    this.player = videojs("#lesson-player", {});

                    this.player.ready(function() {
                        this.hotkeys({
                            seekStep: 5,
                            enableVolumeScroll: false
                        });
                    });

                    this.loadCurrentPart(false);
                },
                watch: {
                    current: function current() {
                        this.loadCurrentPart(true);
                    }
                },
                methods: {
                    loadCurrentPart: function loadCurrentPart(autoplay) {
                        this.player.pause();

                        $('#lesson-player').hide();

                        this.$http({
                            url: '/api/lesson/' + this.lesson.slug + '/' + this.current.itemable.slug + '/video',
                            method: 'GET'
                        }).then(function(response) {
                            this.player.src(response.data.url);

                            if (autoplay) {
                                this.player.play();
                            } else {
                                this.player.load();
                            }

                            $('#lesson-player').show();
                        }.bind(this), function(response) {
                            //
                        });
                    }
                }
            };
            if (module.exports.__esModule) module.exports = module.exports.default;
            (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n<video id=\"lesson-player\" class=\"video-js vjs-default-skin\" poster=\"https://s3.amazonaws.com/s3.codecourse.com/public/img/blackpixel.png\" controls=\"\" preload=\"auto\" width=\"100%\" height=\"100%\" data-setup=\"{ &quot;playbackRates&quot;: [0.5, 1, 1.5, 2] }\"></video>\n"
            if (module.hot) {
                (function() {
                    module.hot.accept()
                    var hotAPI = require("vue-hot-reload-api")
                    hotAPI.install(require("vue"), true)
                    if (!hotAPI.compatible) return
                    var id = "/home/forge/codecourse.com/releases/20160409231912/resources/assets/scripts/video/player.vue"
                    if (!module.hot.data) {
                        hotAPI.createRecord(id, module.exports)
                    } else {
                        hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                    }
                })()
            }
        }, {
            "vue": 122,
            "vue-hot-reload-api": 97
        }
    ]
}, {}, [124]);