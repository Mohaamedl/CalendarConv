import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-4B2QHNJT.js";

// node_modules/nanoid/url-alphabet/index.js
var urlAlphabet;
var init_url_alphabet = __esm({
  "node_modules/nanoid/url-alphabet/index.js"() {
    urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  }
});

// node_modules/nanoid/index.browser.js
var index_browser_exports = {};
__export(index_browser_exports, {
  customAlphabet: () => customAlphabet,
  customRandom: () => customRandom,
  nanoid: () => nanoid,
  random: () => random,
  urlAlphabet: () => urlAlphabet
});
var random, customRandom, customAlphabet, nanoid;
var init_index_browser = __esm({
  "node_modules/nanoid/index.browser.js"() {
    init_url_alphabet();
    random = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
    customRandom = (alphabet, defaultSize, getRandom) => {
      let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
      let step = -~(1.6 * mask * defaultSize / alphabet.length);
      return (size = defaultSize) => {
        let id = "";
        while (true) {
          let bytes = getRandom(step);
          let j = step;
          while (j--) {
            id += alphabet[bytes[j] & mask] || "";
            if (id.length === size) return id;
          }
        }
      };
    };
    customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);
    nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
      byte &= 63;
      if (byte < 36) {
        id += byte.toString(36);
      } else if (byte < 62) {
        id += (byte - 26).toString(36).toUpperCase();
      } else if (byte > 62) {
        id += "-";
      } else {
        id += "_";
      }
      return id;
    }, "");
  }
});

// node_modules/ics/dist/defaults.js
var require_defaults = __commonJS({
  "node_modules/ics/dist/defaults.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.headerDefaults = exports.eventDefaults = void 0;
    var _nanoid = (init_index_browser(), __toCommonJS(index_browser_exports));
    var headerDefaults = exports.headerDefaults = function headerDefaults2() {
      return {
        productId: "adamgibbons/ics",
        method: "PUBLISH"
      };
    };
    var eventDefaults = exports.eventDefaults = function eventDefaults2() {
      return {
        title: "Untitled event",
        uid: (0, _nanoid.nanoid)(),
        timestamp: Date.now()
      };
    };
  }
});

// node_modules/ics/dist/pipeline/build.js
var require_build = __commonJS({
  "node_modules/ics/dist/pipeline/build.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.buildEvent = buildEvent;
    exports.buildHeader = buildHeader;
    var _defaults = require_defaults();
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function removeUndefined(input) {
      return Object.entries(input).reduce(function(clean, entry) {
        return typeof entry[1] !== "undefined" ? Object.assign(clean, _defineProperty({}, entry[0], entry[1])) : clean;
      }, {});
    }
    function buildHeader() {
      var attributes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var output = Object.assign({}, (0, _defaults.headerDefaults)(), attributes);
      return removeUndefined(output);
    }
    function buildEvent() {
      var attributes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var output = Object.assign({}, (0, _defaults.eventDefaults)(), attributes);
      return removeUndefined(output);
    }
  }
});

// node_modules/ics/dist/utils/format-date.js
var require_format_date = __commonJS({
  "node_modules/ics/dist/utils/format-date.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = formatDate;
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
      if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
        try {
          if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i) return;
            _n = false;
          } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true) ;
        } catch (err) {
          _d = true, _e = err;
        } finally {
          try {
            if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    var pad = function pad2(n) {
      return n < 10 ? "0".concat(n) : "".concat(n);
    };
    function formatDate() {
      var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var outputType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "utc";
      var inputType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "local";
      if (typeof args === "string") {
        return args;
      }
      if (Array.isArray(args) && args.length === 3) {
        var _args = _slicedToArray(args, 3), year = _args[0], month = _args[1], date2 = _args[2];
        return "".concat(year).concat(pad(month)).concat(pad(date2));
      }
      var outDate = /* @__PURE__ */ new Date();
      if (Array.isArray(args) && args.length > 0 && args[0]) {
        var _args2 = _slicedToArray(args, 6), _year = _args2[0], _month = _args2[1], _date = _args2[2], _args2$ = _args2[3], hours = _args2$ === void 0 ? 0 : _args2$, _args2$2 = _args2[4], minutes = _args2$2 === void 0 ? 0 : _args2$2, _args2$3 = _args2[5], seconds = _args2$3 === void 0 ? 0 : _args2$3;
        if (inputType === "local") {
          outDate = new Date(_year, _month - 1, _date, hours, minutes, seconds);
        } else {
          outDate = new Date(Date.UTC(_year, _month - 1, _date, hours, minutes, seconds));
        }
      } else if (!Array.isArray(args)) {
        outDate = new Date(args);
      }
      if (outputType === "local") {
        return [outDate.getFullYear(), pad(outDate.getMonth() + 1), pad(outDate.getDate()), "T", pad(outDate.getHours()), pad(outDate.getMinutes()), pad(outDate.getSeconds())].join("");
      }
      return [outDate.getUTCFullYear(), pad(outDate.getUTCMonth() + 1), pad(outDate.getUTCDate()), "T", pad(outDate.getUTCHours()), pad(outDate.getUTCMinutes()), pad(outDate.getUTCSeconds()), "Z"].join("");
    }
  }
});

// node_modules/ics/dist/utils/set-geolocation.js
var require_set_geolocation = __commonJS({
  "node_modules/ics/dist/utils/set-geolocation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = setGeolocation;
    function setGeolocation(_ref) {
      var lat = _ref.lat, lon = _ref.lon;
      return "".concat(lat, ";").concat(lon);
    }
  }
});

// node_modules/ics/dist/utils/encode-param-value.js
var require_encode_param_value = __commonJS({
  "node_modules/ics/dist/utils/encode-param-value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = encodeParamValue;
    function encodeParamValue(value) {
      return '"'.concat(value.replaceAll('"', '\\"'), '"');
    }
  }
});

// node_modules/ics/dist/utils/set-contact.js
var require_set_contact = __commonJS({
  "node_modules/ics/dist/utils/set-contact.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = setContact;
    var _encodeParamValue = _interopRequireDefault(require_encode_param_value());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function setContact(_ref) {
      var name = _ref.name, email = _ref.email, rsvp = _ref.rsvp, dir = _ref.dir, partstat = _ref.partstat, role = _ref.role, cutype = _ref.cutype, xNumGuests = _ref.xNumGuests;
      var formattedParts = [];
      if (rsvp !== void 0) {
        formattedParts.push(rsvp ? "RSVP=TRUE" : "RSVP=FALSE");
      }
      if (cutype) {
        formattedParts.push("CUTYPE=".concat((0, _encodeParamValue["default"])(cutype)));
      }
      if (xNumGuests !== void 0) {
        formattedParts.push("X-NUM-GUESTS=".concat(xNumGuests));
      }
      if (role) {
        formattedParts.push("ROLE=".concat((0, _encodeParamValue["default"])(role)));
      }
      if (partstat) {
        formattedParts.push("PARTSTAT=".concat((0, _encodeParamValue["default"])(partstat)));
      }
      if (dir) {
        formattedParts.push("DIR=".concat((0, _encodeParamValue["default"])(dir)));
      }
      formattedParts.push("CN=".concat((0, _encodeParamValue["default"])(name || "Unnamed attendee")));
      var formattedAttendee = formattedParts.join(";").concat(email ? ":mailto:".concat(email) : "");
      return formattedAttendee;
    }
  }
});

// node_modules/ics/dist/utils/set-organizer.js
var require_set_organizer = __commonJS({
  "node_modules/ics/dist/utils/set-organizer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = setOrganizer;
    var _encodeParamValue = _interopRequireDefault(require_encode_param_value());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function setOrganizer(_ref) {
      var name = _ref.name, email = _ref.email, dir = _ref.dir, sentBy = _ref.sentBy;
      var formattedOrganizer = "";
      formattedOrganizer += dir ? "DIR=".concat((0, _encodeParamValue["default"])(dir), ";") : "";
      formattedOrganizer += sentBy ? "SENT-BY=".concat((0, _encodeParamValue["default"])("MAILTO:".concat(sentBy)), ";") : "";
      formattedOrganizer += "CN=";
      formattedOrganizer += (0, _encodeParamValue["default"])(name || "Organizer");
      formattedOrganizer += email ? ":MAILTO:".concat(email) : "";
      return formattedOrganizer;
    }
  }
});

// node_modules/runes2/dist/index.cjs.development.cjs
var require_index_cjs_development = __commonJS({
  "node_modules/runes2/dist/index.cjs.development.cjs"(exports, module) {
    "use strict";
    var EnumRunesCode;
    (function(EnumRunesCode2) {
      EnumRunesCode2[EnumRunesCode2["HIGH_SURROGATE_START"] = 55296] = "HIGH_SURROGATE_START";
      EnumRunesCode2[EnumRunesCode2["HIGH_SURROGATE_END"] = 56319] = "HIGH_SURROGATE_END";
      EnumRunesCode2[EnumRunesCode2["LOW_SURROGATE_START"] = 56320] = "LOW_SURROGATE_START";
      EnumRunesCode2[EnumRunesCode2["REGIONAL_INDICATOR_START"] = 127462] = "REGIONAL_INDICATOR_START";
      EnumRunesCode2[EnumRunesCode2["REGIONAL_INDICATOR_END"] = 127487] = "REGIONAL_INDICATOR_END";
      EnumRunesCode2[EnumRunesCode2["FITZPATRICK_MODIFIER_START"] = 127995] = "FITZPATRICK_MODIFIER_START";
      EnumRunesCode2[EnumRunesCode2["FITZPATRICK_MODIFIER_END"] = 127999] = "FITZPATRICK_MODIFIER_END";
      EnumRunesCode2[EnumRunesCode2["VARIATION_MODIFIER_START"] = 65024] = "VARIATION_MODIFIER_START";
      EnumRunesCode2[EnumRunesCode2["VARIATION_MODIFIER_END"] = 65039] = "VARIATION_MODIFIER_END";
      EnumRunesCode2[EnumRunesCode2["DIACRITICAL_MARKS_START"] = 8400] = "DIACRITICAL_MARKS_START";
      EnumRunesCode2[EnumRunesCode2["DIACRITICAL_MARKS_END"] = 8447] = "DIACRITICAL_MARKS_END";
      EnumRunesCode2[EnumRunesCode2["SUBDIVISION_INDICATOR_START"] = 127988] = "SUBDIVISION_INDICATOR_START";
      EnumRunesCode2[EnumRunesCode2["TAGS_START"] = 917504] = "TAGS_START";
      EnumRunesCode2[EnumRunesCode2["TAGS_END"] = 917631] = "TAGS_END";
      EnumRunesCode2[EnumRunesCode2["ZWJ"] = 8205] = "ZWJ";
    })(EnumRunesCode || (EnumRunesCode = {}));
    var GRAPHEMES = Object.freeze([776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520]);
    var EnumCodeUnits;
    (function(EnumCodeUnits2) {
      EnumCodeUnits2[EnumCodeUnits2["unit_1"] = 1] = "unit_1";
      EnumCodeUnits2[EnumCodeUnits2["unit_2"] = 2] = "unit_2";
      EnumCodeUnits2[EnumCodeUnits2["unit_4"] = 4] = "unit_4";
    })(EnumCodeUnits || (EnumCodeUnits = {}));
    function runes(string2) {
      if (typeof string2 !== "string") {
        throw new TypeError("string cannot be undefined or null");
      }
      const result = [];
      let i = 0;
      let increment = 0;
      while (i < string2.length) {
        increment += nextUnits(i + increment, string2);
        if (isGrapheme(string2[i + increment])) {
          increment++;
        }
        if (isVariationSelector(string2[i + increment])) {
          increment++;
        }
        if (isDiacriticalMark(string2[i + increment])) {
          increment++;
        }
        if (isZeroWidthJoiner(string2[i + increment])) {
          increment++;
          continue;
        }
        result.push(string2.substring(i, i + increment));
        i += increment;
        increment = 0;
      }
      return result;
    }
    function nextUnits(i, string2) {
      const current = string2[i];
      if (!isFirstOfSurrogatePair(current) || i === string2.length - 1) {
        return 1;
      }
      const currentPair = current + string2[i + 1];
      let nextPair = string2.substring(i + 2, i + 5);
      if (isRegionalIndicator(currentPair) && isRegionalIndicator(nextPair)) {
        return 4;
      }
      if (isSubdivisionFlag(currentPair) && isSupplementarySpecialpurposePlane(nextPair)) {
        return string2.slice(i).indexOf(String.fromCodePoint(
          917631
          /* EnumRunesCode.TAGS_END */
        )) + 2;
      }
      if (isFitzpatrickModifier(nextPair)) {
        return 4;
      }
      return 2;
    }
    function isFirstOfSurrogatePair(string2) {
      return string2 && betweenInclusive(
        string2[0].charCodeAt(0),
        55296,
        56319
        /* EnumRunesCode.HIGH_SURROGATE_END */
      );
    }
    function isRegionalIndicator(string2) {
      return betweenInclusive(
        codePointFromSurrogatePair(string2),
        127462,
        127487
        /* EnumRunesCode.REGIONAL_INDICATOR_END */
      );
    }
    function isSubdivisionFlag(string2) {
      return betweenInclusive(
        codePointFromSurrogatePair(string2),
        127988,
        127988
        /* EnumRunesCode.SUBDIVISION_INDICATOR_START */
      );
    }
    function isFitzpatrickModifier(string2) {
      return betweenInclusive(
        codePointFromSurrogatePair(string2),
        127995,
        127999
        /* EnumRunesCode.FITZPATRICK_MODIFIER_END */
      );
    }
    function isVariationSelector(string2) {
      return typeof string2 === "string" && betweenInclusive(
        string2.charCodeAt(0),
        65024,
        65039
        /* EnumRunesCode.VARIATION_MODIFIER_END */
      );
    }
    function isDiacriticalMark(string2) {
      return typeof string2 === "string" && betweenInclusive(
        string2.charCodeAt(0),
        8400,
        8447
        /* EnumRunesCode.DIACRITICAL_MARKS_END */
      );
    }
    function isSupplementarySpecialpurposePlane(string2) {
      const codePoint = string2.codePointAt(0);
      return typeof string2 === "string" && typeof codePoint === "number" && betweenInclusive(
        codePoint,
        917504,
        917631
        /* EnumRunesCode.TAGS_END */
      );
    }
    function isGrapheme(string2) {
      return typeof string2 === "string" && GRAPHEMES.includes(string2.charCodeAt(0));
    }
    function isZeroWidthJoiner(string2) {
      return typeof string2 === "string" && string2.charCodeAt(0) === 8205;
    }
    function codePointFromSurrogatePair(pair) {
      const highOffset = pair.charCodeAt(0) - 55296;
      const lowOffset = pair.charCodeAt(1) - 56320;
      return (highOffset << 10) + lowOffset + 65536;
    }
    function betweenInclusive(value, lower, upper) {
      return value >= lower && value <= upper;
    }
    function substring(string2, start, width) {
      const chars = runes(string2);
      if (start === void 0) {
        return string2;
      }
      if (start >= chars.length) {
        return "";
      }
      const rest = chars.length - start;
      const stringWidth = width === void 0 ? rest : width;
      let endIndex = start + stringWidth;
      if (endIndex > start + rest) {
        endIndex = void 0;
      }
      return chars.slice(start, endIndex).join("");
    }
    {
      Object.defineProperty(runes, "runes", {
        value: runes
      });
      Object.defineProperty(runes, "default", {
        value: runes
      });
      Object.defineProperty(runes, "__esModule", {
        value: true
      });
      Object.defineProperty(runes, "substr", {
        value: substring
      });
      Object.defineProperty(runes, "substring", {
        value: substring
      });
      Object.defineProperty(runes, "EnumRunesCode", {
        value: EnumRunesCode
      });
      Object.defineProperty(runes, "EnumCodeUnits", {
        value: EnumCodeUnits
      });
      Object.defineProperty(runes, "GRAPHEMES", {
        value: GRAPHEMES
      });
    }
    module.exports = runes;
  }
});

// node_modules/runes2/dist/index.cjs.production.min.cjs
var require_index_cjs_production_min = __commonJS({
  "node_modules/runes2/dist/index.cjs.production.min.cjs"(exports, module) {
    "use strict";
    var e;
    !function(e2) {
      e2[e2.HIGH_SURROGATE_START = 55296] = "HIGH_SURROGATE_START", e2[e2.HIGH_SURROGATE_END = 56319] = "HIGH_SURROGATE_END", e2[e2.LOW_SURROGATE_START = 56320] = "LOW_SURROGATE_START", e2[e2.REGIONAL_INDICATOR_START = 127462] = "REGIONAL_INDICATOR_START", e2[e2.REGIONAL_INDICATOR_END = 127487] = "REGIONAL_INDICATOR_END", e2[e2.FITZPATRICK_MODIFIER_START = 127995] = "FITZPATRICK_MODIFIER_START", e2[e2.FITZPATRICK_MODIFIER_END = 127999] = "FITZPATRICK_MODIFIER_END", e2[e2.VARIATION_MODIFIER_START = 65024] = "VARIATION_MODIFIER_START", e2[e2.VARIATION_MODIFIER_END = 65039] = "VARIATION_MODIFIER_END", e2[e2.DIACRITICAL_MARKS_START = 8400] = "DIACRITICAL_MARKS_START", e2[e2.DIACRITICAL_MARKS_END = 8447] = "DIACRITICAL_MARKS_END", e2[e2.SUBDIVISION_INDICATOR_START = 127988] = "SUBDIVISION_INDICATOR_START", e2[e2.TAGS_START = 917504] = "TAGS_START", e2[e2.TAGS_END = 917631] = "TAGS_END", e2[e2.ZWJ = 8205] = "ZWJ";
    }(e || (e = {}));
    var n = Object.freeze([776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520]);
    var t;
    function runes(e2) {
      if ("string" != typeof e2) throw new TypeError("string cannot be undefined or null");
      const n2 = [];
      let t2 = 0, r = 0;
      for (; t2 < e2.length; ) r += nextUnits(t2 + r, e2), isGrapheme(e2[t2 + r]) && r++, isVariationSelector(e2[t2 + r]) && r++, isDiacriticalMark(e2[t2 + r]) && r++, isZeroWidthJoiner(e2[t2 + r]) ? r++ : (n2.push(e2.substring(t2, t2 + r)), t2 += r, r = 0);
      return n2;
    }
    function nextUnits(e2, n2) {
      const t2 = n2[e2];
      if (!function isFirstOfSurrogatePair(e3) {
        return e3 && betweenInclusive(e3[0].charCodeAt(0), 55296, 56319);
      }(t2) || e2 === n2.length - 1) return 1;
      const r = t2 + n2[e2 + 1];
      let i = n2.substring(e2 + 2, e2 + 5);
      return isRegionalIndicator(r) && isRegionalIndicator(i) ? 4 : function isSubdivisionFlag(e3) {
        return betweenInclusive(codePointFromSurrogatePair(e3), 127988, 127988);
      }(r) && function isSupplementarySpecialpurposePlane(e3) {
        const n3 = e3.codePointAt(0);
        return "string" == typeof e3 && "number" == typeof n3 && betweenInclusive(n3, 917504, 917631);
      }(i) ? n2.slice(e2).indexOf(String.fromCodePoint(917631)) + 2 : function isFitzpatrickModifier(e3) {
        return betweenInclusive(codePointFromSurrogatePair(e3), 127995, 127999);
      }(i) ? 4 : 2;
    }
    function isRegionalIndicator(e2) {
      return betweenInclusive(codePointFromSurrogatePair(e2), 127462, 127487);
    }
    function isVariationSelector(e2) {
      return "string" == typeof e2 && betweenInclusive(e2.charCodeAt(0), 65024, 65039);
    }
    function isDiacriticalMark(e2) {
      return "string" == typeof e2 && betweenInclusive(e2.charCodeAt(0), 8400, 8447);
    }
    function isGrapheme(e2) {
      return "string" == typeof e2 && n.includes(e2.charCodeAt(0));
    }
    function isZeroWidthJoiner(e2) {
      return "string" == typeof e2 && 8205 === e2.charCodeAt(0);
    }
    function codePointFromSurrogatePair(e2) {
      return (e2.charCodeAt(0) - 55296 << 10) + (e2.charCodeAt(1) - 56320) + 65536;
    }
    function betweenInclusive(e2, n2, t2) {
      return e2 >= n2 && e2 <= t2;
    }
    function substring(e2, n2, t2) {
      const r = runes(e2);
      if (void 0 === n2) return e2;
      if (n2 >= r.length) return "";
      const i = r.length - n2;
      let o = n2 + (void 0 === t2 ? i : t2);
      return o > n2 + i && (o = void 0), r.slice(n2, o).join("");
    }
    !function(e2) {
      e2[e2.unit_1 = 1] = "unit_1", e2[e2.unit_2 = 2] = "unit_2", e2[e2.unit_4 = 4] = "unit_4";
    }(t || (t = {})), Object.defineProperty(runes, "runes", {
      value: runes
    }), Object.defineProperty(runes, "default", {
      value: runes
    }), Object.defineProperty(runes, "__esModule", {
      value: true
    }), Object.defineProperty(runes, "substr", {
      value: substring
    }), Object.defineProperty(runes, "substring", {
      value: substring
    }), Object.defineProperty(runes, "EnumRunesCode", {
      value: e
    }), Object.defineProperty(runes, "EnumCodeUnits", {
      value: t
    }), Object.defineProperty(runes, "GRAPHEMES", {
      value: n
    }), module.exports = runes;
  }
});

// node_modules/runes2/dist/index.cjs
var require_dist = __commonJS({
  "node_modules/runes2/dist/index.cjs"(exports, module) {
    "use strict";
    if (typeof process !== "undefined" && true) {
      module.exports = require_index_cjs_development();
    } else {
      module.exports = require_index_cjs_production_min();
    }
  }
});

// node_modules/ics/dist/utils/fold-line.js
var require_fold_line = __commonJS({
  "node_modules/ics/dist/utils/fold-line.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = foldLine;
    var _runes = require_dist();
    function foldLine(line) {
      var parts = [];
      var length = 75;
      while ((0, _runes.runes)(line).length > length) {
        parts.push((0, _runes.substring)(line, 0, length));
        line = (0, _runes.substring)(line, length);
        length = 74;
      }
      parts.push(line);
      return parts.join("\r\n	");
    }
  }
});

// node_modules/ics/dist/utils/encode-new-lines.js
var require_encode_new_lines = __commonJS({
  "node_modules/ics/dist/utils/encode-new-lines.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = encodeNewLines;
    function encodeNewLines(text) {
      return text.replace(/\r?\n/gm, "\\n");
    }
  }
});

// node_modules/ics/dist/utils/set-alarm.js
var require_set_alarm = __commonJS({
  "node_modules/ics/dist/utils/set-alarm.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = setAlarm;
    var _formatDate = _interopRequireDefault(require_format_date());
    var _foldLine = _interopRequireDefault(require_fold_line());
    var _encodeNewLines = _interopRequireDefault(require_encode_new_lines());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function setDuration(_ref) {
      var weeks = _ref.weeks, days = _ref.days, hours = _ref.hours, minutes = _ref.minutes, seconds = _ref.seconds;
      var formattedString = "P";
      formattedString += weeks ? "".concat(weeks, "W") : "";
      formattedString += days ? "".concat(days, "D") : "";
      formattedString += "T";
      formattedString += hours ? "".concat(hours, "H") : "";
      formattedString += minutes ? "".concat(minutes, "M") : "";
      formattedString += seconds ? "".concat(seconds, "S") : "";
      return formattedString;
    }
    function setTrigger(trigger) {
      var formattedString = "";
      if (Array.isArray(trigger) || typeof trigger === "number" || typeof trigger === "string") {
        formattedString = "TRIGGER;VALUE=DATE-TIME:".concat((0, _encodeNewLines["default"])((0, _formatDate["default"])(trigger)), "\r\n");
      } else {
        var alert = trigger.before ? "-" : "";
        formattedString = "TRIGGER:".concat((0, _encodeNewLines["default"])(alert + setDuration(trigger)), "\r\n");
      }
      return formattedString;
    }
    function setAction(action) {
      return action.toUpperCase();
    }
    function setAlarm() {
      var attributes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var action = attributes.action, repeat = attributes.repeat, description = attributes.description, duration = attributes.duration, attach = attributes.attach, attachType = attributes.attachType, trigger = attributes.trigger, summary = attributes.summary;
      var formattedString = "BEGIN:VALARM\r\n";
      formattedString += (0, _foldLine["default"])("ACTION:".concat((0, _encodeNewLines["default"])(setAction(action)))) + "\r\n";
      formattedString += repeat ? (0, _foldLine["default"])("REPEAT:".concat(repeat)) + "\r\n" : "";
      formattedString += description ? (0, _foldLine["default"])("DESCRIPTION:".concat((0, _encodeNewLines["default"])(description))) + "\r\n" : "";
      formattedString += duration ? (0, _foldLine["default"])("DURATION:".concat(setDuration(duration))) + "\r\n" : "";
      var attachInfo = attachType ? attachType : "FMTTYPE=audio/basic";
      formattedString += attach ? (0, _foldLine["default"])((0, _encodeNewLines["default"])("ATTACH;".concat(attachInfo, ":").concat(attach))) + "\r\n" : "";
      formattedString += trigger ? setTrigger(trigger) : "";
      formattedString += summary ? (0, _foldLine["default"])("SUMMARY:".concat((0, _encodeNewLines["default"])(summary))) + "\r\n" : "";
      formattedString += "END:VALARM\r\n";
      return formattedString;
    }
  }
});

// node_modules/ics/dist/utils/format-text.js
var require_format_text = __commonJS({
  "node_modules/ics/dist/utils/format-text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = formatText;
    function formatText(text) {
      return text.replace(/\\/gm, "\\\\").replace(/\r?\n/gm, "\\n").replace(/;/gm, "\\;").replace(/,/gm, "\\,");
    }
  }
});

// node_modules/ics/dist/utils/set-description.js
var require_set_description = __commonJS({
  "node_modules/ics/dist/utils/set-description.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = setDescription;
    var _formatText = _interopRequireDefault(require_format_text());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function setDescription(description) {
      return (0, _formatText["default"])(description);
    }
  }
});

// node_modules/ics/dist/utils/set-summary.js
var require_set_summary = __commonJS({
  "node_modules/ics/dist/utils/set-summary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = setSummary;
    var _formatText = _interopRequireDefault(require_format_text());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function setSummary(summary) {
      return (0, _formatText["default"])(summary);
    }
  }
});

// node_modules/ics/dist/utils/format-duration.js
var require_format_duration = __commonJS({
  "node_modules/ics/dist/utils/format-duration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = formatDuration;
    function formatDuration() {
      var attributes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var weeks = attributes.weeks, days = attributes.days, hours = attributes.hours, minutes = attributes.minutes, seconds = attributes.seconds;
      var formattedDuration = "P";
      formattedDuration += weeks ? "".concat(weeks, "W") : "";
      formattedDuration += days ? "".concat(days, "D") : "";
      formattedDuration += "T";
      formattedDuration += hours ? "".concat(hours, "H") : "";
      formattedDuration += minutes ? "".concat(minutes, "M") : "";
      formattedDuration += seconds ? "".concat(seconds, "S") : "";
      return formattedDuration;
    }
  }
});

// node_modules/ics/dist/utils/set-location.js
var require_set_location = __commonJS({
  "node_modules/ics/dist/utils/set-location.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = setLocation;
    var _formatText = _interopRequireDefault(require_format_text());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function setLocation(location) {
      return (0, _formatText["default"])(location);
    }
  }
});

// node_modules/ics/dist/utils/index.js
var require_utils = __commonJS({
  "node_modules/ics/dist/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "encodeParamValue", {
      enumerable: true,
      get: function get() {
        return _encodeParamValue["default"];
      }
    });
    Object.defineProperty(exports, "foldLine", {
      enumerable: true,
      get: function get() {
        return _foldLine["default"];
      }
    });
    Object.defineProperty(exports, "formatDate", {
      enumerable: true,
      get: function get() {
        return _formatDate["default"];
      }
    });
    Object.defineProperty(exports, "formatDuration", {
      enumerable: true,
      get: function get() {
        return _formatDuration["default"];
      }
    });
    Object.defineProperty(exports, "setAlarm", {
      enumerable: true,
      get: function get() {
        return _setAlarm["default"];
      }
    });
    Object.defineProperty(exports, "setContact", {
      enumerable: true,
      get: function get() {
        return _setContact["default"];
      }
    });
    Object.defineProperty(exports, "setDescription", {
      enumerable: true,
      get: function get() {
        return _setDescription["default"];
      }
    });
    Object.defineProperty(exports, "setGeolocation", {
      enumerable: true,
      get: function get() {
        return _setGeolocation["default"];
      }
    });
    Object.defineProperty(exports, "setLocation", {
      enumerable: true,
      get: function get() {
        return _setLocation["default"];
      }
    });
    Object.defineProperty(exports, "setOrganizer", {
      enumerable: true,
      get: function get() {
        return _setOrganizer["default"];
      }
    });
    Object.defineProperty(exports, "setSummary", {
      enumerable: true,
      get: function get() {
        return _setSummary["default"];
      }
    });
    var _formatDate = _interopRequireDefault(require_format_date());
    var _setGeolocation = _interopRequireDefault(require_set_geolocation());
    var _setContact = _interopRequireDefault(require_set_contact());
    var _setOrganizer = _interopRequireDefault(require_set_organizer());
    var _setAlarm = _interopRequireDefault(require_set_alarm());
    var _setDescription = _interopRequireDefault(require_set_description());
    var _setSummary = _interopRequireDefault(require_set_summary());
    var _formatDuration = _interopRequireDefault(require_format_duration());
    var _foldLine = _interopRequireDefault(require_fold_line());
    var _setLocation = _interopRequireDefault(require_set_location());
    var _encodeParamValue = _interopRequireDefault(require_encode_param_value());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
  }
});

// node_modules/ics/dist/pipeline/format.js
var require_format = __commonJS({
  "node_modules/ics/dist/pipeline/format.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatEvent = formatEvent;
    exports.formatFooter = formatFooter;
    exports.formatHeader = formatHeader;
    var _utils = require_utils();
    var _encodeNewLines = _interopRequireDefault(require_encode_new_lines());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function formatHeader() {
      var attributes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var productId = attributes.productId, method = attributes.method, calName = attributes.calName;
      var icsFormat = "";
      icsFormat += "BEGIN:VCALENDAR\r\n";
      icsFormat += "VERSION:2.0\r\n";
      icsFormat += "CALSCALE:GREGORIAN\r\n";
      icsFormat += (0, _utils.foldLine)("PRODID:".concat((0, _encodeNewLines["default"])(productId))) + "\r\n";
      icsFormat += (0, _utils.foldLine)("METHOD:".concat((0, _encodeNewLines["default"])(method))) + "\r\n";
      icsFormat += calName ? (0, _utils.foldLine)("X-WR-CALNAME:".concat((0, _encodeNewLines["default"])(calName))) + "\r\n" : "";
      icsFormat += "X-PUBLISHED-TTL:PT1H\r\n";
      return icsFormat;
    }
    function formatFooter() {
      return "END:VCALENDAR\r\n";
    }
    function formatEvent() {
      var attributes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var title = attributes.title, uid = attributes.uid, sequence = attributes.sequence, timestamp = attributes.timestamp, start = attributes.start, startType = attributes.startType, startInputType = attributes.startInputType, startOutputType = attributes.startOutputType, duration = attributes.duration, end = attributes.end, endInputType = attributes.endInputType, endOutputType = attributes.endOutputType, description = attributes.description, url = attributes.url, geo = attributes.geo, location = attributes.location, status = attributes.status, categories = attributes.categories, organizer = attributes.organizer, attendees = attributes.attendees, alarms = attributes.alarms, recurrenceRule = attributes.recurrenceRule, exclusionDates = attributes.exclusionDates, busyStatus = attributes.busyStatus, transp = attributes.transp, classification = attributes.classification, created = attributes.created, lastModified = attributes.lastModified, htmlContent = attributes.htmlContent;
      var icsFormat = "";
      icsFormat += "BEGIN:VEVENT\r\n";
      icsFormat += (0, _utils.foldLine)("UID:".concat((0, _encodeNewLines["default"])(uid))) + "\r\n";
      icsFormat += title ? (0, _utils.foldLine)("SUMMARY:".concat((0, _encodeNewLines["default"])((0, _utils.setSummary)(title)))) + "\r\n" : "";
      icsFormat += (0, _utils.foldLine)("DTSTAMP:".concat((0, _encodeNewLines["default"])((0, _utils.formatDate)(timestamp)))) + "\r\n";
      icsFormat += (0, _utils.foldLine)("DTSTART".concat(start && start.length == 3 ? ";VALUE=DATE" : "", ":").concat((0, _encodeNewLines["default"])((0, _utils.formatDate)(start, startOutputType || startType, startInputType)))) + "\r\n";
      if (!end || end.length !== 3 || start.length !== end.length || start.some(function(val, i) {
        return val !== end[i];
      })) {
        if (end) {
          icsFormat += (0, _utils.foldLine)("DTEND".concat(end.length === 3 ? ";VALUE=DATE" : "", ":").concat((0, _encodeNewLines["default"])((0, _utils.formatDate)(end, endOutputType || startOutputType || startType, endInputType || startInputType)))) + "\r\n";
        }
      }
      icsFormat += typeof sequence !== "undefined" ? "SEQUENCE:".concat(sequence, "\r\n") : "";
      icsFormat += description ? (0, _utils.foldLine)("DESCRIPTION:".concat((0, _encodeNewLines["default"])((0, _utils.setDescription)(description)))) + "\r\n" : "";
      icsFormat += url ? (0, _utils.foldLine)("URL:".concat((0, _encodeNewLines["default"])(url))) + "\r\n" : "";
      icsFormat += geo ? (0, _utils.foldLine)("GEO:".concat((0, _utils.setGeolocation)(geo))) + "\r\n" : "";
      icsFormat += location ? (0, _utils.foldLine)("LOCATION:".concat((0, _encodeNewLines["default"])((0, _utils.setLocation)(location)))) + "\r\n" : "";
      icsFormat += status ? (0, _utils.foldLine)("STATUS:".concat((0, _encodeNewLines["default"])(status))) + "\r\n" : "";
      icsFormat += categories ? (0, _utils.foldLine)("CATEGORIES:".concat((0, _encodeNewLines["default"])(categories.join(",")))) + "\r\n" : "";
      icsFormat += organizer ? (0, _utils.foldLine)("ORGANIZER;".concat((0, _utils.setOrganizer)(organizer))) + "\r\n" : "";
      icsFormat += busyStatus ? (0, _utils.foldLine)("X-MICROSOFT-CDO-BUSYSTATUS:".concat((0, _encodeNewLines["default"])(busyStatus))) + "\r\n" : "";
      icsFormat += transp ? (0, _utils.foldLine)("TRANSP:".concat((0, _encodeNewLines["default"])(transp))) + "\r\n" : "";
      icsFormat += classification ? (0, _utils.foldLine)("CLASS:".concat((0, _encodeNewLines["default"])(classification))) + "\r\n" : "";
      icsFormat += created ? "CREATED:" + (0, _encodeNewLines["default"])((0, _utils.formatDate)(created)) + "\r\n" : "";
      icsFormat += lastModified ? "LAST-MODIFIED:" + (0, _encodeNewLines["default"])((0, _utils.formatDate)(lastModified)) + "\r\n" : "";
      icsFormat += htmlContent ? (0, _utils.foldLine)("X-ALT-DESC;FMTTYPE=text/html:".concat((0, _encodeNewLines["default"])(htmlContent))) + "\r\n" : "";
      if (attendees) {
        attendees.forEach(function(attendee) {
          icsFormat += (0, _utils.foldLine)("ATTENDEE;".concat((0, _encodeNewLines["default"])((0, _utils.setContact)(attendee)))) + "\r\n";
        });
      }
      icsFormat += recurrenceRule ? (0, _utils.foldLine)("RRULE:".concat((0, _encodeNewLines["default"])(recurrenceRule))) + "\r\n" : "";
      icsFormat += exclusionDates ? (0, _utils.foldLine)("EXDATE:".concat((0, _encodeNewLines["default"])(exclusionDates.map(function(a) {
        return (0, _utils.formatDate)(a);
      }).join(",")))) + "\r\n" : "";
      icsFormat += duration ? (0, _utils.foldLine)("DURATION:".concat((0, _utils.formatDuration)(duration))) + "\r\n" : "";
      if (alarms) {
        alarms.forEach(function(alarm) {
          icsFormat += (0, _utils.setAlarm)(alarm);
        });
      }
      icsFormat += "END:VEVENT\r\n";
      return icsFormat;
    }
  }
});

// node_modules/property-expr/index.js
var require_property_expr = __commonJS({
  "node_modules/property-expr/index.js"(exports, module) {
    "use strict";
    function Cache(maxSize) {
      this._maxSize = maxSize;
      this.clear();
    }
    Cache.prototype.clear = function() {
      this._size = 0;
      this._values = /* @__PURE__ */ Object.create(null);
    };
    Cache.prototype.get = function(key) {
      return this._values[key];
    };
    Cache.prototype.set = function(key, value) {
      this._size >= this._maxSize && this.clear();
      if (!(key in this._values)) this._size++;
      return this._values[key] = value;
    };
    var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g;
    var DIGIT_REGEX = /^\d+$/;
    var LEAD_DIGIT_REGEX = /^\d/;
    var SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
    var CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/;
    var MAX_CACHE_SIZE = 512;
    var pathCache = new Cache(MAX_CACHE_SIZE);
    var setCache = new Cache(MAX_CACHE_SIZE);
    var getCache = new Cache(MAX_CACHE_SIZE);
    module.exports = {
      Cache,
      split: split2,
      normalizePath: normalizePath2,
      setter: function(path) {
        var parts = normalizePath2(path);
        return setCache.get(path) || setCache.set(path, function setter(obj, value) {
          var index = 0;
          var len = parts.length;
          var data = obj;
          while (index < len - 1) {
            var part = parts[index];
            if (part === "__proto__" || part === "constructor" || part === "prototype") {
              return obj;
            }
            data = data[parts[index++]];
          }
          data[parts[index]] = value;
        });
      },
      getter: function(path, safe) {
        var parts = normalizePath2(path);
        return getCache.get(path) || getCache.set(path, function getter2(data) {
          var index = 0, len = parts.length;
          while (index < len) {
            if (data != null || !safe) data = data[parts[index++]];
            else return;
          }
          return data;
        });
      },
      join: function(segments) {
        return segments.reduce(function(path, part) {
          return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
        }, "");
      },
      forEach: function(path, cb, thisArg) {
        forEach2(Array.isArray(path) ? path : split2(path), cb, thisArg);
      }
    };
    function normalizePath2(path) {
      return pathCache.get(path) || pathCache.set(
        path,
        split2(path).map(function(part) {
          return part.replace(CLEAN_QUOTES_REGEX, "$2");
        })
      );
    }
    function split2(path) {
      return path.match(SPLIT_REGEX) || [""];
    }
    function forEach2(parts, iter, thisArg) {
      var len = parts.length, part, idx, isArray, isBracket;
      for (idx = 0; idx < len; idx++) {
        part = parts[idx];
        if (part) {
          if (shouldBeQuoted(part)) {
            part = '"' + part + '"';
          }
          isBracket = isQuoted(part);
          isArray = !isBracket && /^\d+$/.test(part);
          iter.call(thisArg, part, isBracket, isArray, idx, parts);
        }
      }
    }
    function isQuoted(str) {
      return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
    }
    function hasLeadingNumber(part) {
      return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
    }
    function hasSpecialChars(part) {
      return SPEC_CHAR_REGEX.test(part);
    }
    function shouldBeQuoted(part) {
      return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
    }
  }
});

// node_modules/tiny-case/index.js
var require_tiny_case = __commonJS({
  "node_modules/tiny-case/index.js"(exports, module) {
    var reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
    var words = (str) => str.match(reWords) || [];
    var upperFirst = (str) => str[0].toUpperCase() + str.slice(1);
    var join2 = (str, d) => words(str).join(d).toLowerCase();
    var camelCase2 = (str) => words(str).reduce(
      (acc, next) => `${acc}${!acc ? next.toLowerCase() : next[0].toUpperCase() + next.slice(1).toLowerCase()}`,
      ""
    );
    var pascalCase = (str) => upperFirst(camelCase2(str));
    var snakeCase2 = (str) => join2(str, "_");
    var kebabCase = (str) => join2(str, "-");
    var sentenceCase = (str) => upperFirst(join2(str, " "));
    var titleCase = (str) => words(str).map(upperFirst).join(" ");
    module.exports = {
      words,
      upperFirst,
      camelCase: camelCase2,
      pascalCase,
      snakeCase: snakeCase2,
      kebabCase,
      sentenceCase,
      titleCase
    };
  }
});

// node_modules/toposort/index.js
var require_toposort = __commonJS({
  "node_modules/toposort/index.js"(exports, module) {
    module.exports = function(edges) {
      return toposort2(uniqueNodes(edges), edges);
    };
    module.exports.array = toposort2;
    function toposort2(nodes, edges) {
      var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
      edges.forEach(function(edge) {
        if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
          throw new Error("Unknown node. There is an unknown node in the supplied edges.");
        }
      });
      while (i--) {
        if (!visited[i]) visit(nodes[i], i, /* @__PURE__ */ new Set());
      }
      return sorted;
      function visit(node, i2, predecessors) {
        if (predecessors.has(node)) {
          var nodeRep;
          try {
            nodeRep = ", node was:" + JSON.stringify(node);
          } catch (e) {
            nodeRep = "";
          }
          throw new Error("Cyclic dependency" + nodeRep);
        }
        if (!nodesHash.has(node)) {
          throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node));
        }
        if (visited[i2]) return;
        visited[i2] = true;
        var outgoing = outgoingEdges.get(node) || /* @__PURE__ */ new Set();
        outgoing = Array.from(outgoing);
        if (i2 = outgoing.length) {
          predecessors.add(node);
          do {
            var child = outgoing[--i2];
            visit(child, nodesHash.get(child), predecessors);
          } while (i2);
          predecessors.delete(node);
        }
        sorted[--cursor] = node;
      }
    }
    function uniqueNodes(arr) {
      var res = /* @__PURE__ */ new Set();
      for (var i = 0, len = arr.length; i < len; i++) {
        var edge = arr[i];
        res.add(edge[0]);
        res.add(edge[1]);
      }
      return Array.from(res);
    }
    function makeOutgoingEdges(arr) {
      var edges = /* @__PURE__ */ new Map();
      for (var i = 0, len = arr.length; i < len; i++) {
        var edge = arr[i];
        if (!edges.has(edge[0])) edges.set(edge[0], /* @__PURE__ */ new Set());
        if (!edges.has(edge[1])) edges.set(edge[1], /* @__PURE__ */ new Set());
        edges.get(edge[0]).add(edge[1]);
      }
      return edges;
    }
    function makeNodesHash(arr) {
      var res = /* @__PURE__ */ new Map();
      for (var i = 0, len = arr.length; i < len; i++) {
        res.set(arr[i], i);
      }
      return res;
    }
  }
});

// node_modules/yup/index.esm.js
var index_esm_exports = {};
__export(index_esm_exports, {
  ArraySchema: () => ArraySchema,
  BooleanSchema: () => BooleanSchema,
  DateSchema: () => DateSchema,
  MixedSchema: () => MixedSchema,
  NumberSchema: () => NumberSchema,
  ObjectSchema: () => ObjectSchema,
  Schema: () => Schema,
  StringSchema: () => StringSchema,
  TupleSchema: () => TupleSchema,
  ValidationError: () => ValidationError,
  addMethod: () => addMethod,
  array: () => create$2,
  bool: () => create$7,
  boolean: () => create$7,
  date: () => create$4,
  defaultLocale: () => locale,
  getIn: () => getIn,
  isSchema: () => isSchema,
  lazy: () => create,
  mixed: () => create$8,
  number: () => create$5,
  object: () => create$3,
  printValue: () => printValue,
  reach: () => reach,
  ref: () => create$9,
  setLocale: () => setLocale,
  string: () => create$6,
  tuple: () => create$1
});
function printNumber(val) {
  if (val != +val) return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false) return "" + val;
  const typeOf = typeof val;
  if (typeOf === "number") return printNumber(val);
  if (typeOf === "string") return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function") return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol") return symbolToString.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  const tag = toString.call(val).slice(8, -1);
  if (tag === "Date") return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error) return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp") return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null) return result;
  return JSON.stringify(value, function(key, value2) {
    let result2 = printSimpleValue(this[key], quoteStrings);
    if (result2 !== null) return result2;
    return value2;
  }, 2);
}
function toArray(value) {
  return value == null ? [] : [].concat(value);
}
function create$9(key, options) {
  return new Reference(key, options);
}
function createValidation(config) {
  function validate({
    value,
    path = "",
    options,
    originalValue,
    schema
  }, panic, next) {
    const {
      name,
      test,
      params,
      message,
      skipAbsent
    } = config;
    let {
      parent,
      context,
      abortEarly = schema.spec.abortEarly,
      disableStackTrace = schema.spec.disableStackTrace
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = Object.assign({
        value,
        originalValue,
        label: schema.spec.label,
        path: overrides.path || path,
        spec: schema.spec,
        disableStackTrace: overrides.disableStackTrace || disableStackTrace
      }, params, overrides.params);
      for (const key of Object.keys(nextParams)) nextParams[key] = resolve(nextParams[key]);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name, nextParams.disableStackTrace);
      error.params = nextParams;
      return error;
    }
    const invalid = abortEarly ? panic : next;
    let ctx = {
      path,
      parent,
      type: name,
      from: options.from,
      createError,
      resolve,
      options,
      originalValue,
      schema
    };
    const handleResult = (validOrError) => {
      if (ValidationError.isError(validOrError)) invalid(validOrError);
      else if (!validOrError) invalid(createError());
      else next(null);
    };
    const handleError = (err) => {
      if (ValidationError.isError(err)) invalid(err);
      else panic(err);
    };
    const shouldSkip = skipAbsent && isAbsent(value);
    if (shouldSkip) {
      return handleResult(true);
    }
    let result;
    try {
      var _result;
      result = test.call(ctx, value, ctx);
      if (typeof ((_result = result) == null ? void 0 : _result.then) === "function") {
        if (options.sync) {
          throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        }
        return Promise.resolve(result).then(handleResult, handleError);
      }
    } catch (err) {
      handleError(err);
      return;
    }
    handleResult(result);
  }
  validate.OPTIONS = config;
  return validate;
}
function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;
  if (!path) return {
    parent,
    parentPath: path,
    schema
  };
  (0, import_property_expr.forEach)(path, (_part, isBracket, isArray) => {
    let part = isBracket ? _part.slice(1, _part.length - 1) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    let isTuple = schema.type === "tuple";
    let idx = isArray ? parseInt(part, 10) : 0;
    if (schema.innerType || isTuple) {
      if (isTuple && !isArray) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${lastPartDebug}" must contain an index to the tuple element, e.g. "${lastPartDebug}[0]"`);
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = isTuple ? schema.spec.types[idx] : schema.innerType;
    }
    if (!isArray) {
      if (!schema.fields || !schema.fields[part]) throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema.type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
function reach(obj, path, value, context) {
  return getIn(obj, path, value, context).schema;
}
function clone(src, seen = /* @__PURE__ */ new Map()) {
  if (isSchema(src) || !src || typeof src !== "object") return src;
  if (seen.has(src)) return seen.get(src);
  let copy;
  if (src instanceof Date) {
    copy = new Date(src.getTime());
    seen.set(src, copy);
  } else if (src instanceof RegExp) {
    copy = new RegExp(src);
    seen.set(src, copy);
  } else if (Array.isArray(src)) {
    copy = new Array(src.length);
    seen.set(src, copy);
    for (let i = 0; i < src.length; i++) copy[i] = clone(src[i], seen);
  } else if (src instanceof Map) {
    copy = /* @__PURE__ */ new Map();
    seen.set(src, copy);
    for (const [k, v] of src.entries()) copy.set(k, clone(v, seen));
  } else if (src instanceof Set) {
    copy = /* @__PURE__ */ new Set();
    seen.set(src, copy);
    for (const v of src) copy.add(clone(v, seen));
  } else if (src instanceof Object) {
    copy = {};
    seen.set(src, copy);
    for (const [k, v] of Object.entries(src)) copy[k] = clone(v, seen);
  } else {
    throw Error(`Unable to clone ${src}`);
  }
  return copy;
}
function create$8(spec) {
  return new MixedSchema(spec);
}
function create$7() {
  return new BooleanSchema();
}
function parseIsoDate(date2) {
  const struct = parseDateStruct(date2);
  if (!struct) return Date.parse ? Date.parse(date2) : Number.NaN;
  if (struct.z === void 0 && struct.plusMinus === void 0) {
    return new Date(struct.year, struct.month, struct.day, struct.hour, struct.minute, struct.second, struct.millisecond).valueOf();
  }
  let totalMinutesOffset = 0;
  if (struct.z !== "Z" && struct.plusMinus !== void 0) {
    totalMinutesOffset = struct.hourOffset * 60 + struct.minuteOffset;
    if (struct.plusMinus === "+") totalMinutesOffset = 0 - totalMinutesOffset;
  }
  return Date.UTC(struct.year, struct.month, struct.day, struct.hour, struct.minute + totalMinutesOffset, struct.second, struct.millisecond);
}
function parseDateStruct(date2) {
  var _regexResult$7$length, _regexResult$;
  const regexResult = isoReg.exec(date2);
  if (!regexResult) return null;
  return {
    year: toNumber(regexResult[1]),
    month: toNumber(regexResult[2], 1) - 1,
    day: toNumber(regexResult[3], 1),
    hour: toNumber(regexResult[4]),
    minute: toNumber(regexResult[5]),
    second: toNumber(regexResult[6]),
    millisecond: regexResult[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      toNumber(regexResult[7].substring(0, 3))
    ) : 0,
    precision: (_regexResult$7$length = (_regexResult$ = regexResult[7]) == null ? void 0 : _regexResult$.length) != null ? _regexResult$7$length : void 0,
    z: regexResult[8] || void 0,
    plusMinus: regexResult[9] || void 0,
    hourOffset: toNumber(regexResult[10]),
    minuteOffset: toNumber(regexResult[11])
  };
}
function toNumber(str, defaultValue = 0) {
  return Number(str) || defaultValue;
}
function create$6() {
  return new StringSchema();
}
function create$5() {
  return new NumberSchema();
}
function create$4() {
  return new DateSchema();
}
function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = /* @__PURE__ */ new Set();
  let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));
  function addNode(depPath, key) {
    let node = (0, import_property_expr.split)(depPath)[0];
    nodes.add(node);
    if (!excludes.has(`${key}-${node}`)) edges.push([key, node]);
  }
  for (const key of Object.keys(fields)) {
    let value = fields[key];
    nodes.add(key);
    if (Reference.isRef(value) && value.isSibling) addNode(value.path, key);
    else if (isSchema(value) && "deps" in value) value.deps.forEach((path) => addNode(path, key));
  }
  return import_toposort.default.array(Array.from(nodes), edges).reverse();
}
function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii) => {
    var _err$path;
    if ((_err$path = err.path) != null && _err$path.includes(key)) {
      idx = ii;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys) {
  return (a, b) => {
    return findIndex(keys, a) - findIndex(keys, b);
  };
}
function deepPartial(schema) {
  if ("fields" in schema) {
    const partial = {};
    for (const [key, fieldSchema] of Object.entries(schema.fields)) {
      partial[key] = deepPartial(fieldSchema);
    }
    return schema.setFields(partial);
  }
  if (schema.type === "array") {
    const nextArray = schema.optional();
    if (nextArray.innerType) nextArray.innerType = deepPartial(nextArray.innerType);
    return nextArray;
  }
  if (schema.type === "tuple") {
    return schema.optional().clone({
      types: schema.spec.types.map(deepPartial)
    });
  }
  if ("optional" in schema) {
    return schema.optional();
  }
  return schema;
}
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter((key) => known.indexOf(key) === -1);
}
function create$3(spec) {
  return new ObjectSchema(spec);
}
function create$2(type) {
  return new ArraySchema(type);
}
function create$1(schemas) {
  return new TupleSchema(schemas);
}
function create(builder) {
  return new Lazy(builder);
}
function setLocale(custom) {
  Object.keys(custom).forEach((type) => {
    Object.keys(custom[type]).forEach((method) => {
      locale[type][method] = custom[type][method];
    });
  });
}
function addMethod(schemaType, name, fn) {
  if (!schemaType || !isSchema(schemaType.prototype)) throw new TypeError("You must provide a yup schema constructor function");
  if (typeof name !== "string") throw new TypeError("A Method name must be provided");
  if (typeof fn !== "function") throw new TypeError("Method function must be provided");
  schemaType.prototype[name] = fn;
}
var import_property_expr, import_tiny_case, import_toposort, toString, errorToString, regExpToString, symbolToString, SYMBOL_REGEXP, _Symbol$toStringTag, _Symbol$hasInstance, _Symbol$toStringTag2, strReg, ValidationErrorNoStack, ValidationError, mixed, string, number, date, boolean, object, array, tuple, locale, isSchema, Condition, prefixes, Reference, isAbsent, ReferenceSet, Schema, returnsTrue, MixedSchema, BooleanSchema, isoReg, rEmail, rUrl, rUUID, yearMonthDay, hourMinuteSecond, zOrOffset, rIsoDateTime, isTrimmed, objStringTag, StringSchema, isNaN$1, NumberSchema, invalidDate, isDate, DateSchema, parseJson, deepHas, isObject, defaultSort, ObjectSchema, ArraySchema, TupleSchema, Lazy;
var init_index_esm = __esm({
  "node_modules/yup/index.esm.js"() {
    import_property_expr = __toESM(require_property_expr());
    import_tiny_case = __toESM(require_tiny_case());
    import_toposort = __toESM(require_toposort());
    toString = Object.prototype.toString;
    errorToString = Error.prototype.toString;
    regExpToString = RegExp.prototype.toString;
    symbolToString = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
    SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
    strReg = /\$\{\s*(\w+)\s*\}/g;
    _Symbol$toStringTag = Symbol.toStringTag;
    ValidationErrorNoStack = class {
      constructor(errorOrErrors, value, field, type) {
        this.name = void 0;
        this.message = void 0;
        this.value = void 0;
        this.path = void 0;
        this.type = void 0;
        this.params = void 0;
        this.errors = void 0;
        this.inner = void 0;
        this[_Symbol$toStringTag] = "Error";
        this.name = "ValidationError";
        this.value = value;
        this.path = field;
        this.type = type;
        this.errors = [];
        this.inner = [];
        toArray(errorOrErrors).forEach((err) => {
          if (ValidationError.isError(err)) {
            this.errors.push(...err.errors);
            const innerErrors = err.inner.length ? err.inner : [err];
            this.inner.push(...innerErrors);
          } else {
            this.errors.push(err);
          }
        });
        this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
      }
    };
    _Symbol$hasInstance = Symbol.hasInstance;
    _Symbol$toStringTag2 = Symbol.toStringTag;
    ValidationError = class _ValidationError extends Error {
      static formatError(message, params) {
        const path = params.label || params.path || "this";
        if (path !== params.path) params = Object.assign({}, params, {
          path
        });
        if (typeof message === "string") return message.replace(strReg, (_, key) => printValue(params[key]));
        if (typeof message === "function") return message(params);
        return message;
      }
      static isError(err) {
        return err && err.name === "ValidationError";
      }
      constructor(errorOrErrors, value, field, type, disableStack) {
        const errorNoStack = new ValidationErrorNoStack(errorOrErrors, value, field, type);
        if (disableStack) {
          return errorNoStack;
        }
        super();
        this.value = void 0;
        this.path = void 0;
        this.type = void 0;
        this.params = void 0;
        this.errors = [];
        this.inner = [];
        this[_Symbol$toStringTag2] = "Error";
        this.name = errorNoStack.name;
        this.message = errorNoStack.message;
        this.type = errorNoStack.type;
        this.value = errorNoStack.value;
        this.path = errorNoStack.path;
        this.errors = errorNoStack.errors;
        this.inner = errorNoStack.inner;
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, _ValidationError);
        }
      }
      static [_Symbol$hasInstance](inst) {
        return ValidationErrorNoStack[Symbol.hasInstance](inst) || super[Symbol.hasInstance](inst);
      }
    };
    mixed = {
      default: "${path} is invalid",
      required: "${path} is a required field",
      defined: "${path} must be defined",
      notNull: "${path} cannot be null",
      oneOf: "${path} must be one of the following values: ${values}",
      notOneOf: "${path} must not be one of the following values: ${values}",
      notType: ({
        path,
        type,
        value,
        originalValue
      }) => {
        const castMsg = originalValue != null && originalValue !== value ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".";
        return type !== "mixed" ? `${path} must be a \`${type}\` type, but the final value was: \`${printValue(value, true)}\`` + castMsg : `${path} must match the configured type. The validated value was: \`${printValue(value, true)}\`` + castMsg;
      }
    };
    string = {
      length: "${path} must be exactly ${length} characters",
      min: "${path} must be at least ${min} characters",
      max: "${path} must be at most ${max} characters",
      matches: '${path} must match the following: "${regex}"',
      email: "${path} must be a valid email",
      url: "${path} must be a valid URL",
      uuid: "${path} must be a valid UUID",
      datetime: "${path} must be a valid ISO date-time",
      datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
      datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
      trim: "${path} must be a trimmed string",
      lowercase: "${path} must be a lowercase string",
      uppercase: "${path} must be a upper case string"
    };
    number = {
      min: "${path} must be greater than or equal to ${min}",
      max: "${path} must be less than or equal to ${max}",
      lessThan: "${path} must be less than ${less}",
      moreThan: "${path} must be greater than ${more}",
      positive: "${path} must be a positive number",
      negative: "${path} must be a negative number",
      integer: "${path} must be an integer"
    };
    date = {
      min: "${path} field must be later than ${min}",
      max: "${path} field must be at earlier than ${max}"
    };
    boolean = {
      isValue: "${path} field must be ${value}"
    };
    object = {
      noUnknown: "${path} field has unspecified keys: ${unknown}"
    };
    array = {
      min: "${path} field must have at least ${min} items",
      max: "${path} field must have less than or equal to ${max} items",
      length: "${path} must have ${length} items"
    };
    tuple = {
      notType: (params) => {
        const {
          path,
          value,
          spec
        } = params;
        const typeLen = spec.types.length;
        if (Array.isArray(value)) {
          if (value.length < typeLen) return `${path} tuple value has too few items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
          if (value.length > typeLen) return `${path} tuple value has too many items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
        }
        return ValidationError.formatError(mixed.notType, params);
      }
    };
    locale = Object.assign(/* @__PURE__ */ Object.create(null), {
      mixed,
      string,
      number,
      date,
      object,
      array,
      boolean,
      tuple
    });
    isSchema = (obj) => obj && obj.__isYupSchema__;
    Condition = class _Condition {
      static fromOptions(refs, config) {
        if (!config.then && !config.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
        let {
          is,
          then,
          otherwise
        } = config;
        let check = typeof is === "function" ? is : (...values) => values.every((value) => value === is);
        return new _Condition(refs, (values, schema) => {
          var _branch;
          let branch = check(...values) ? then : otherwise;
          return (_branch = branch == null ? void 0 : branch(schema)) != null ? _branch : schema;
        });
      }
      constructor(refs, builder) {
        this.fn = void 0;
        this.refs = refs;
        this.refs = refs;
        this.fn = builder;
      }
      resolve(base, options) {
        let values = this.refs.map((ref) => (
          // TODO: ? operator here?
          ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context)
        ));
        let schema = this.fn(values, base, options);
        if (schema === void 0 || // @ts-ignore this can be base
        schema === base) {
          return base;
        }
        if (!isSchema(schema)) throw new TypeError("conditions must return a schema object");
        return schema.resolve(options);
      }
    };
    prefixes = {
      context: "$",
      value: "."
    };
    Reference = class {
      constructor(key, options = {}) {
        this.key = void 0;
        this.isContext = void 0;
        this.isValue = void 0;
        this.isSibling = void 0;
        this.path = void 0;
        this.getter = void 0;
        this.map = void 0;
        if (typeof key !== "string") throw new TypeError("ref must be a string, got: " + key);
        this.key = key.trim();
        if (key === "") throw new TypeError("ref must be a non-empty string");
        this.isContext = this.key[0] === prefixes.context;
        this.isValue = this.key[0] === prefixes.value;
        this.isSibling = !this.isContext && !this.isValue;
        let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
        this.path = this.key.slice(prefix.length);
        this.getter = this.path && (0, import_property_expr.getter)(this.path, true);
        this.map = options.map;
      }
      getValue(value, parent, context) {
        let result = this.isContext ? context : this.isValue ? value : parent;
        if (this.getter) result = this.getter(result || {});
        if (this.map) result = this.map(result);
        return result;
      }
      /**
       *
       * @param {*} value
       * @param {Object} options
       * @param {Object=} options.context
       * @param {Object=} options.parent
       */
      cast(value, options) {
        return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
      }
      resolve() {
        return this;
      }
      describe() {
        return {
          type: "ref",
          key: this.key
        };
      }
      toString() {
        return `Ref(${this.key})`;
      }
      static isRef(value) {
        return value && value.__isYupRef;
      }
    };
    Reference.prototype.__isYupRef = true;
    isAbsent = (value) => value == null;
    ReferenceSet = class _ReferenceSet extends Set {
      describe() {
        const description = [];
        for (const item of this.values()) {
          description.push(Reference.isRef(item) ? item.describe() : item);
        }
        return description;
      }
      resolveAll(resolve) {
        let result = [];
        for (const item of this.values()) {
          result.push(resolve(item));
        }
        return result;
      }
      clone() {
        return new _ReferenceSet(this.values());
      }
      merge(newItems, removeItems) {
        const next = this.clone();
        newItems.forEach((value) => next.add(value));
        removeItems.forEach((value) => next.delete(value));
        return next;
      }
    };
    Schema = class {
      constructor(options) {
        this.type = void 0;
        this.deps = [];
        this.tests = void 0;
        this.transforms = void 0;
        this.conditions = [];
        this._mutate = void 0;
        this.internalTests = {};
        this._whitelist = new ReferenceSet();
        this._blacklist = new ReferenceSet();
        this.exclusiveTests = /* @__PURE__ */ Object.create(null);
        this._typeCheck = void 0;
        this.spec = void 0;
        this.tests = [];
        this.transforms = [];
        this.withMutation(() => {
          this.typeError(mixed.notType);
        });
        this.type = options.type;
        this._typeCheck = options.check;
        this.spec = Object.assign({
          strip: false,
          strict: false,
          abortEarly: true,
          recursive: true,
          disableStackTrace: false,
          nullable: false,
          optional: true,
          coerce: true
        }, options == null ? void 0 : options.spec);
        this.withMutation((s) => {
          s.nonNullable();
        });
      }
      // TODO: remove
      get _type() {
        return this.type;
      }
      clone(spec) {
        if (this._mutate) {
          if (spec) Object.assign(this.spec, spec);
          return this;
        }
        const next = Object.create(Object.getPrototypeOf(this));
        next.type = this.type;
        next._typeCheck = this._typeCheck;
        next._whitelist = this._whitelist.clone();
        next._blacklist = this._blacklist.clone();
        next.internalTests = Object.assign({}, this.internalTests);
        next.exclusiveTests = Object.assign({}, this.exclusiveTests);
        next.deps = [...this.deps];
        next.conditions = [...this.conditions];
        next.tests = [...this.tests];
        next.transforms = [...this.transforms];
        next.spec = clone(Object.assign({}, this.spec, spec));
        return next;
      }
      label(label) {
        let next = this.clone();
        next.spec.label = label;
        return next;
      }
      meta(...args) {
        if (args.length === 0) return this.spec.meta;
        let next = this.clone();
        next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
        return next;
      }
      withMutation(fn) {
        let before = this._mutate;
        this._mutate = true;
        let result = fn(this);
        this._mutate = before;
        return result;
      }
      concat(schema) {
        if (!schema || schema === this) return this;
        if (schema.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
        let base = this;
        let combined = schema.clone();
        const mergedSpec = Object.assign({}, base.spec, combined.spec);
        combined.spec = mergedSpec;
        combined.internalTests = Object.assign({}, base.internalTests, combined.internalTests);
        combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
        combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
        combined.tests = base.tests;
        combined.exclusiveTests = base.exclusiveTests;
        combined.withMutation((next) => {
          schema.tests.forEach((fn) => {
            next.test(fn.OPTIONS);
          });
        });
        combined.transforms = [...base.transforms, ...combined.transforms];
        return combined;
      }
      isType(v) {
        if (v == null) {
          if (this.spec.nullable && v === null) return true;
          if (this.spec.optional && v === void 0) return true;
          return false;
        }
        return this._typeCheck(v);
      }
      resolve(options) {
        let schema = this;
        if (schema.conditions.length) {
          let conditions = schema.conditions;
          schema = schema.clone();
          schema.conditions = [];
          schema = conditions.reduce((prevSchema, condition) => condition.resolve(prevSchema, options), schema);
          schema = schema.resolve(options);
        }
        return schema;
      }
      resolveOptions(options) {
        var _options$strict, _options$abortEarly, _options$recursive, _options$disableStack;
        return Object.assign({}, options, {
          from: options.from || [],
          strict: (_options$strict = options.strict) != null ? _options$strict : this.spec.strict,
          abortEarly: (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly,
          recursive: (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive,
          disableStackTrace: (_options$disableStack = options.disableStackTrace) != null ? _options$disableStack : this.spec.disableStackTrace
        });
      }
      /**
       * Run the configured transform pipeline over an input value.
       */
      cast(value, options = {}) {
        let resolvedSchema = this.resolve(Object.assign({
          value
        }, options));
        let allowOptionality = options.assert === "ignore-optionality";
        let result = resolvedSchema._cast(value, options);
        if (options.assert !== false && !resolvedSchema.isType(result)) {
          if (allowOptionality && isAbsent(result)) {
            return result;
          }
          let formattedValue = printValue(value);
          let formattedResult = printValue(result);
          throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema.type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
        }
        return result;
      }
      _cast(rawValue, options) {
        let value = rawValue === void 0 ? rawValue : this.transforms.reduce((prevValue, fn) => fn.call(this, prevValue, rawValue, this), rawValue);
        if (value === void 0) {
          value = this.getDefault(options);
        }
        return value;
      }
      _validate(_value, options = {}, panic, next) {
        let {
          path,
          originalValue = _value,
          strict = this.spec.strict
        } = options;
        let value = _value;
        if (!strict) {
          value = this._cast(value, Object.assign({
            assert: false
          }, options));
        }
        let initialTests = [];
        for (let test of Object.values(this.internalTests)) {
          if (test) initialTests.push(test);
        }
        this.runTests({
          path,
          value,
          originalValue,
          options,
          tests: initialTests
        }, panic, (initialErrors) => {
          if (initialErrors.length) {
            return next(initialErrors, value);
          }
          this.runTests({
            path,
            value,
            originalValue,
            options,
            tests: this.tests
          }, panic, next);
        });
      }
      /**
       * Executes a set of validations, either schema, produced Tests or a nested
       * schema validate result.
       */
      runTests(runOptions, panic, next) {
        let fired = false;
        let {
          tests,
          value,
          originalValue,
          path,
          options
        } = runOptions;
        let panicOnce = (arg) => {
          if (fired) return;
          fired = true;
          panic(arg, value);
        };
        let nextOnce = (arg) => {
          if (fired) return;
          fired = true;
          next(arg, value);
        };
        let count = tests.length;
        let nestedErrors = [];
        if (!count) return nextOnce([]);
        let args = {
          value,
          originalValue,
          path,
          options,
          schema: this
        };
        for (let i = 0; i < tests.length; i++) {
          const test = tests[i];
          test(args, panicOnce, function finishTestRun(err) {
            if (err) {
              Array.isArray(err) ? nestedErrors.push(...err) : nestedErrors.push(err);
            }
            if (--count <= 0) {
              nextOnce(nestedErrors);
            }
          });
        }
      }
      asNestedTest({
        key,
        index,
        parent,
        parentPath,
        originalParent,
        options
      }) {
        const k = key != null ? key : index;
        if (k == null) {
          throw TypeError("Must include `key` or `index` for nested validations");
        }
        const isIndex = typeof k === "number";
        let value = parent[k];
        const testOptions = Object.assign({}, options, {
          // Nested validations fields are always strict:
          //    1. parent isn't strict so the casting will also have cast inner values
          //    2. parent is strict in which case the nested values weren't cast either
          strict: true,
          parent,
          value,
          originalValue: originalParent[k],
          // FIXME: tests depend on `index` being passed around deeply,
          //   we should not let the options.key/index bleed through
          key: void 0,
          // index: undefined,
          [isIndex ? "index" : "key"]: k,
          path: isIndex || k.includes(".") ? `${parentPath || ""}[${isIndex ? k : `"${k}"`}]` : (parentPath ? `${parentPath}.` : "") + key
        });
        return (_, panic, next) => this.resolve(testOptions)._validate(value, testOptions, panic, next);
      }
      validate(value, options) {
        var _options$disableStack2;
        let schema = this.resolve(Object.assign({}, options, {
          value
        }));
        let disableStackTrace = (_options$disableStack2 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack2 : schema.spec.disableStackTrace;
        return new Promise((resolve, reject) => schema._validate(value, options, (error, parsed) => {
          if (ValidationError.isError(error)) error.value = parsed;
          reject(error);
        }, (errors, validated) => {
          if (errors.length) reject(new ValidationError(errors, validated, void 0, void 0, disableStackTrace));
          else resolve(validated);
        }));
      }
      validateSync(value, options) {
        var _options$disableStack3;
        let schema = this.resolve(Object.assign({}, options, {
          value
        }));
        let result;
        let disableStackTrace = (_options$disableStack3 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack3 : schema.spec.disableStackTrace;
        schema._validate(value, Object.assign({}, options, {
          sync: true
        }), (error, parsed) => {
          if (ValidationError.isError(error)) error.value = parsed;
          throw error;
        }, (errors, validated) => {
          if (errors.length) throw new ValidationError(errors, value, void 0, void 0, disableStackTrace);
          result = validated;
        });
        return result;
      }
      isValid(value, options) {
        return this.validate(value, options).then(() => true, (err) => {
          if (ValidationError.isError(err)) return false;
          throw err;
        });
      }
      isValidSync(value, options) {
        try {
          this.validateSync(value, options);
          return true;
        } catch (err) {
          if (ValidationError.isError(err)) return false;
          throw err;
        }
      }
      _getDefault(options) {
        let defaultValue = this.spec.default;
        if (defaultValue == null) {
          return defaultValue;
        }
        return typeof defaultValue === "function" ? defaultValue.call(this, options) : clone(defaultValue);
      }
      getDefault(options) {
        let schema = this.resolve(options || {});
        return schema._getDefault(options);
      }
      default(def) {
        if (arguments.length === 0) {
          return this._getDefault();
        }
        let next = this.clone({
          default: def
        });
        return next;
      }
      strict(isStrict = true) {
        return this.clone({
          strict: isStrict
        });
      }
      nullability(nullable, message) {
        const next = this.clone({
          nullable
        });
        next.internalTests.nullable = createValidation({
          message,
          name: "nullable",
          test(value) {
            return value === null ? this.schema.spec.nullable : true;
          }
        });
        return next;
      }
      optionality(optional, message) {
        const next = this.clone({
          optional
        });
        next.internalTests.optionality = createValidation({
          message,
          name: "optionality",
          test(value) {
            return value === void 0 ? this.schema.spec.optional : true;
          }
        });
        return next;
      }
      optional() {
        return this.optionality(true);
      }
      defined(message = mixed.defined) {
        return this.optionality(false, message);
      }
      nullable() {
        return this.nullability(true);
      }
      nonNullable(message = mixed.notNull) {
        return this.nullability(false, message);
      }
      required(message = mixed.required) {
        return this.clone().withMutation((next) => next.nonNullable(message).defined(message));
      }
      notRequired() {
        return this.clone().withMutation((next) => next.nullable().optional());
      }
      transform(fn) {
        let next = this.clone();
        next.transforms.push(fn);
        return next;
      }
      /**
       * Adds a test function to the schema's queue of tests.
       * tests can be exclusive or non-exclusive.
       *
       * - exclusive tests, will replace any existing tests of the same name.
       * - non-exclusive: can be stacked
       *
       * If a non-exclusive test is added to a schema with an exclusive test of the same name
       * the exclusive test is removed and further tests of the same name will be stacked.
       *
       * If an exclusive test is added to a schema with non-exclusive tests of the same name
       * the previous tests are removed and further tests of the same name will replace each other.
       */
      test(...args) {
        let opts;
        if (args.length === 1) {
          if (typeof args[0] === "function") {
            opts = {
              test: args[0]
            };
          } else {
            opts = args[0];
          }
        } else if (args.length === 2) {
          opts = {
            name: args[0],
            test: args[1]
          };
        } else {
          opts = {
            name: args[0],
            message: args[1],
            test: args[2]
          };
        }
        if (opts.message === void 0) opts.message = mixed.default;
        if (typeof opts.test !== "function") throw new TypeError("`test` is a required parameters");
        let next = this.clone();
        let validate = createValidation(opts);
        let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
        if (opts.exclusive) {
          if (!opts.name) throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
        }
        if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
        next.tests = next.tests.filter((fn) => {
          if (fn.OPTIONS.name === opts.name) {
            if (isExclusive) return false;
            if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
          }
          return true;
        });
        next.tests.push(validate);
        return next;
      }
      when(keys, options) {
        if (!Array.isArray(keys) && typeof keys !== "string") {
          options = keys;
          keys = ".";
        }
        let next = this.clone();
        let deps = toArray(keys).map((key) => new Reference(key));
        deps.forEach((dep) => {
          if (dep.isSibling) next.deps.push(dep.key);
        });
        next.conditions.push(typeof options === "function" ? new Condition(deps, options) : Condition.fromOptions(deps, options));
        return next;
      }
      typeError(message) {
        let next = this.clone();
        next.internalTests.typeError = createValidation({
          message,
          name: "typeError",
          skipAbsent: true,
          test(value) {
            if (!this.schema._typeCheck(value)) return this.createError({
              params: {
                type: this.schema.type
              }
            });
            return true;
          }
        });
        return next;
      }
      oneOf(enums, message = mixed.oneOf) {
        let next = this.clone();
        enums.forEach((val) => {
          next._whitelist.add(val);
          next._blacklist.delete(val);
        });
        next.internalTests.whiteList = createValidation({
          message,
          name: "oneOf",
          skipAbsent: true,
          test(value) {
            let valids = this.schema._whitelist;
            let resolved = valids.resolveAll(this.resolve);
            return resolved.includes(value) ? true : this.createError({
              params: {
                values: Array.from(valids).join(", "),
                resolved
              }
            });
          }
        });
        return next;
      }
      notOneOf(enums, message = mixed.notOneOf) {
        let next = this.clone();
        enums.forEach((val) => {
          next._blacklist.add(val);
          next._whitelist.delete(val);
        });
        next.internalTests.blacklist = createValidation({
          message,
          name: "notOneOf",
          test(value) {
            let invalids = this.schema._blacklist;
            let resolved = invalids.resolveAll(this.resolve);
            if (resolved.includes(value)) return this.createError({
              params: {
                values: Array.from(invalids).join(", "),
                resolved
              }
            });
            return true;
          }
        });
        return next;
      }
      strip(strip = true) {
        let next = this.clone();
        next.spec.strip = strip;
        return next;
      }
      /**
       * Return a serialized description of the schema including validations, flags, types etc.
       *
       * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
       */
      describe(options) {
        const next = (options ? this.resolve(options) : this).clone();
        const {
          label,
          meta,
          optional,
          nullable
        } = next.spec;
        const description = {
          meta,
          label,
          optional,
          nullable,
          default: next.getDefault(options),
          type: next.type,
          oneOf: next._whitelist.describe(),
          notOneOf: next._blacklist.describe(),
          tests: next.tests.map((fn) => ({
            name: fn.OPTIONS.name,
            params: fn.OPTIONS.params
          })).filter((n, idx, list) => list.findIndex((c) => c.name === n.name) === idx)
        };
        return description;
      }
    };
    Schema.prototype.__isYupSchema__ = true;
    for (const method of ["validate", "validateSync"]) Schema.prototype[`${method}At`] = function(path, value, options = {}) {
      const {
        parent,
        parentPath,
        schema
      } = getIn(this, path, value, options.context);
      return schema[method](parent && parent[parentPath], Object.assign({}, options, {
        parent,
        path
      }));
    };
    for (const alias of ["equals", "is"]) Schema.prototype[alias] = Schema.prototype.oneOf;
    for (const alias of ["not", "nope"]) Schema.prototype[alias] = Schema.prototype.notOneOf;
    returnsTrue = () => true;
    MixedSchema = class extends Schema {
      constructor(spec) {
        super(typeof spec === "function" ? {
          type: "mixed",
          check: spec
        } : Object.assign({
          type: "mixed",
          check: returnsTrue
        }, spec));
      }
    };
    create$8.prototype = MixedSchema.prototype;
    BooleanSchema = class extends Schema {
      constructor() {
        super({
          type: "boolean",
          check(v) {
            if (v instanceof Boolean) v = v.valueOf();
            return typeof v === "boolean";
          }
        });
        this.withMutation(() => {
          this.transform((value, _raw, ctx) => {
            if (ctx.spec.coerce && !ctx.isType(value)) {
              if (/^(true|1)$/i.test(String(value))) return true;
              if (/^(false|0)$/i.test(String(value))) return false;
            }
            return value;
          });
        });
      }
      isTrue(message = boolean.isValue) {
        return this.test({
          message,
          name: "is-value",
          exclusive: true,
          params: {
            value: "true"
          },
          test(value) {
            return isAbsent(value) || value === true;
          }
        });
      }
      isFalse(message = boolean.isValue) {
        return this.test({
          message,
          name: "is-value",
          exclusive: true,
          params: {
            value: "false"
          },
          test(value) {
            return isAbsent(value) || value === false;
          }
        });
      }
      default(def) {
        return super.default(def);
      }
      defined(msg) {
        return super.defined(msg);
      }
      optional() {
        return super.optional();
      }
      required(msg) {
        return super.required(msg);
      }
      notRequired() {
        return super.notRequired();
      }
      nullable() {
        return super.nullable();
      }
      nonNullable(msg) {
        return super.nonNullable(msg);
      }
      strip(v) {
        return super.strip(v);
      }
    };
    create$7.prototype = BooleanSchema.prototype;
    isoReg = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
    rEmail = // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    rUrl = // eslint-disable-next-line
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    yearMonthDay = "^\\d{4}-\\d{2}-\\d{2}";
    hourMinuteSecond = "\\d{2}:\\d{2}:\\d{2}";
    zOrOffset = "(([+-]\\d{2}(:?\\d{2})?)|Z)";
    rIsoDateTime = new RegExp(`${yearMonthDay}T${hourMinuteSecond}(\\.\\d+)?${zOrOffset}$`);
    isTrimmed = (value) => isAbsent(value) || value === value.trim();
    objStringTag = {}.toString();
    StringSchema = class extends Schema {
      constructor() {
        super({
          type: "string",
          check(value) {
            if (value instanceof String) value = value.valueOf();
            return typeof value === "string";
          }
        });
        this.withMutation(() => {
          this.transform((value, _raw, ctx) => {
            if (!ctx.spec.coerce || ctx.isType(value)) return value;
            if (Array.isArray(value)) return value;
            const strValue = value != null && value.toString ? value.toString() : value;
            if (strValue === objStringTag) return value;
            return strValue;
          });
        });
      }
      required(message) {
        return super.required(message).withMutation((schema) => schema.test({
          message: message || mixed.required,
          name: "required",
          skipAbsent: true,
          test: (value) => !!value.length
        }));
      }
      notRequired() {
        return super.notRequired().withMutation((schema) => {
          schema.tests = schema.tests.filter((t) => t.OPTIONS.name !== "required");
          return schema;
        });
      }
      length(length, message = string.length) {
        return this.test({
          message,
          name: "length",
          exclusive: true,
          params: {
            length
          },
          skipAbsent: true,
          test(value) {
            return value.length === this.resolve(length);
          }
        });
      }
      min(min, message = string.min) {
        return this.test({
          message,
          name: "min",
          exclusive: true,
          params: {
            min
          },
          skipAbsent: true,
          test(value) {
            return value.length >= this.resolve(min);
          }
        });
      }
      max(max, message = string.max) {
        return this.test({
          name: "max",
          exclusive: true,
          message,
          params: {
            max
          },
          skipAbsent: true,
          test(value) {
            return value.length <= this.resolve(max);
          }
        });
      }
      matches(regex, options) {
        let excludeEmptyString = false;
        let message;
        let name;
        if (options) {
          if (typeof options === "object") {
            ({
              excludeEmptyString = false,
              message,
              name
            } = options);
          } else {
            message = options;
          }
        }
        return this.test({
          name: name || "matches",
          message: message || string.matches,
          params: {
            regex
          },
          skipAbsent: true,
          test: (value) => value === "" && excludeEmptyString || value.search(regex) !== -1
        });
      }
      email(message = string.email) {
        return this.matches(rEmail, {
          name: "email",
          message,
          excludeEmptyString: true
        });
      }
      url(message = string.url) {
        return this.matches(rUrl, {
          name: "url",
          message,
          excludeEmptyString: true
        });
      }
      uuid(message = string.uuid) {
        return this.matches(rUUID, {
          name: "uuid",
          message,
          excludeEmptyString: false
        });
      }
      datetime(options) {
        let message = "";
        let allowOffset;
        let precision;
        if (options) {
          if (typeof options === "object") {
            ({
              message = "",
              allowOffset = false,
              precision = void 0
            } = options);
          } else {
            message = options;
          }
        }
        return this.matches(rIsoDateTime, {
          name: "datetime",
          message: message || string.datetime,
          excludeEmptyString: true
        }).test({
          name: "datetime_offset",
          message: message || string.datetime_offset,
          params: {
            allowOffset
          },
          skipAbsent: true,
          test: (value) => {
            if (!value || allowOffset) return true;
            const struct = parseDateStruct(value);
            if (!struct) return false;
            return !!struct.z;
          }
        }).test({
          name: "datetime_precision",
          message: message || string.datetime_precision,
          params: {
            precision
          },
          skipAbsent: true,
          test: (value) => {
            if (!value || precision == void 0) return true;
            const struct = parseDateStruct(value);
            if (!struct) return false;
            return struct.precision === precision;
          }
        });
      }
      //-- transforms --
      ensure() {
        return this.default("").transform((val) => val === null ? "" : val);
      }
      trim(message = string.trim) {
        return this.transform((val) => val != null ? val.trim() : val).test({
          message,
          name: "trim",
          test: isTrimmed
        });
      }
      lowercase(message = string.lowercase) {
        return this.transform((value) => !isAbsent(value) ? value.toLowerCase() : value).test({
          message,
          name: "string_case",
          exclusive: true,
          skipAbsent: true,
          test: (value) => isAbsent(value) || value === value.toLowerCase()
        });
      }
      uppercase(message = string.uppercase) {
        return this.transform((value) => !isAbsent(value) ? value.toUpperCase() : value).test({
          message,
          name: "string_case",
          exclusive: true,
          skipAbsent: true,
          test: (value) => isAbsent(value) || value === value.toUpperCase()
        });
      }
    };
    create$6.prototype = StringSchema.prototype;
    isNaN$1 = (value) => value != +value;
    NumberSchema = class extends Schema {
      constructor() {
        super({
          type: "number",
          check(value) {
            if (value instanceof Number) value = value.valueOf();
            return typeof value === "number" && !isNaN$1(value);
          }
        });
        this.withMutation(() => {
          this.transform((value, _raw, ctx) => {
            if (!ctx.spec.coerce) return value;
            let parsed = value;
            if (typeof parsed === "string") {
              parsed = parsed.replace(/\s/g, "");
              if (parsed === "") return NaN;
              parsed = +parsed;
            }
            if (ctx.isType(parsed) || parsed === null) return parsed;
            return parseFloat(parsed);
          });
        });
      }
      min(min, message = number.min) {
        return this.test({
          message,
          name: "min",
          exclusive: true,
          params: {
            min
          },
          skipAbsent: true,
          test(value) {
            return value >= this.resolve(min);
          }
        });
      }
      max(max, message = number.max) {
        return this.test({
          message,
          name: "max",
          exclusive: true,
          params: {
            max
          },
          skipAbsent: true,
          test(value) {
            return value <= this.resolve(max);
          }
        });
      }
      lessThan(less, message = number.lessThan) {
        return this.test({
          message,
          name: "max",
          exclusive: true,
          params: {
            less
          },
          skipAbsent: true,
          test(value) {
            return value < this.resolve(less);
          }
        });
      }
      moreThan(more, message = number.moreThan) {
        return this.test({
          message,
          name: "min",
          exclusive: true,
          params: {
            more
          },
          skipAbsent: true,
          test(value) {
            return value > this.resolve(more);
          }
        });
      }
      positive(msg = number.positive) {
        return this.moreThan(0, msg);
      }
      negative(msg = number.negative) {
        return this.lessThan(0, msg);
      }
      integer(message = number.integer) {
        return this.test({
          name: "integer",
          message,
          skipAbsent: true,
          test: (val) => Number.isInteger(val)
        });
      }
      truncate() {
        return this.transform((value) => !isAbsent(value) ? value | 0 : value);
      }
      round(method) {
        var _method;
        let avail = ["ceil", "floor", "round", "trunc"];
        method = ((_method = method) == null ? void 0 : _method.toLowerCase()) || "round";
        if (method === "trunc") return this.truncate();
        if (avail.indexOf(method.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + avail.join(", "));
        return this.transform((value) => !isAbsent(value) ? Math[method](value) : value);
      }
    };
    create$5.prototype = NumberSchema.prototype;
    invalidDate = /* @__PURE__ */ new Date("");
    isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
    DateSchema = class _DateSchema extends Schema {
      constructor() {
        super({
          type: "date",
          check(v) {
            return isDate(v) && !isNaN(v.getTime());
          }
        });
        this.withMutation(() => {
          this.transform((value, _raw, ctx) => {
            if (!ctx.spec.coerce || ctx.isType(value) || value === null) return value;
            value = parseIsoDate(value);
            return !isNaN(value) ? new Date(value) : _DateSchema.INVALID_DATE;
          });
        });
      }
      prepareParam(ref, name) {
        let param;
        if (!Reference.isRef(ref)) {
          let cast = this.cast(ref);
          if (!this._typeCheck(cast)) throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
          param = cast;
        } else {
          param = ref;
        }
        return param;
      }
      min(min, message = date.min) {
        let limit = this.prepareParam(min, "min");
        return this.test({
          message,
          name: "min",
          exclusive: true,
          params: {
            min
          },
          skipAbsent: true,
          test(value) {
            return value >= this.resolve(limit);
          }
        });
      }
      max(max, message = date.max) {
        let limit = this.prepareParam(max, "max");
        return this.test({
          message,
          name: "max",
          exclusive: true,
          params: {
            max
          },
          skipAbsent: true,
          test(value) {
            return value <= this.resolve(limit);
          }
        });
      }
    };
    DateSchema.INVALID_DATE = invalidDate;
    create$4.prototype = DateSchema.prototype;
    create$4.INVALID_DATE = invalidDate;
    parseJson = (value, _, ctx) => {
      if (typeof value !== "string") {
        return value;
      }
      let parsed = value;
      try {
        parsed = JSON.parse(value);
      } catch (err) {
      }
      return ctx.isType(parsed) ? parsed : value;
    };
    deepHas = (obj, p) => {
      const path = [...(0, import_property_expr.normalizePath)(p)];
      if (path.length === 1) return path[0] in obj;
      let last = path.pop();
      let parent = (0, import_property_expr.getter)((0, import_property_expr.join)(path), true)(obj);
      return !!(parent && last in parent);
    };
    isObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
    defaultSort = sortByKeyOrder([]);
    ObjectSchema = class extends Schema {
      constructor(spec) {
        super({
          type: "object",
          check(value) {
            return isObject(value) || typeof value === "function";
          }
        });
        this.fields = /* @__PURE__ */ Object.create(null);
        this._sortErrors = defaultSort;
        this._nodes = [];
        this._excludedEdges = [];
        this.withMutation(() => {
          if (spec) {
            this.shape(spec);
          }
        });
      }
      _cast(_value, options = {}) {
        var _options$stripUnknown;
        let value = super._cast(_value, options);
        if (value === void 0) return this.getDefault(options);
        if (!this._typeCheck(value)) return value;
        let fields = this.fields;
        let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
        let props = [].concat(this._nodes, Object.keys(value).filter((v) => !this._nodes.includes(v)));
        let intermediateValue = {};
        let innerOptions = Object.assign({}, options, {
          parent: intermediateValue,
          __validating: options.__validating || false
        });
        let isChanged = false;
        for (const prop of props) {
          let field = fields[prop];
          let exists = prop in value;
          if (field) {
            let fieldValue;
            let inputValue = value[prop];
            innerOptions.path = (options.path ? `${options.path}.` : "") + prop;
            field = field.resolve({
              value: inputValue,
              context: options.context,
              parent: intermediateValue
            });
            let fieldSpec = field instanceof Schema ? field.spec : void 0;
            let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
            if (fieldSpec != null && fieldSpec.strip) {
              isChanged = isChanged || prop in value;
              continue;
            }
            fieldValue = !options.__validating || !strict ? (
              // TODO: use _cast, this is double resolving
              field.cast(value[prop], innerOptions)
            ) : value[prop];
            if (fieldValue !== void 0) {
              intermediateValue[prop] = fieldValue;
            }
          } else if (exists && !strip) {
            intermediateValue[prop] = value[prop];
          }
          if (exists !== prop in intermediateValue || intermediateValue[prop] !== value[prop]) {
            isChanged = true;
          }
        }
        return isChanged ? intermediateValue : value;
      }
      _validate(_value, options = {}, panic, next) {
        let {
          from = [],
          originalValue = _value,
          recursive = this.spec.recursive
        } = options;
        options.from = [{
          schema: this,
          value: originalValue
        }, ...from];
        options.__validating = true;
        options.originalValue = originalValue;
        super._validate(_value, options, panic, (objectErrors, value) => {
          if (!recursive || !isObject(value)) {
            next(objectErrors, value);
            return;
          }
          originalValue = originalValue || value;
          let tests = [];
          for (let key of this._nodes) {
            let field = this.fields[key];
            if (!field || Reference.isRef(field)) {
              continue;
            }
            tests.push(field.asNestedTest({
              options,
              key,
              parent: value,
              parentPath: options.path,
              originalParent: originalValue
            }));
          }
          this.runTests({
            tests,
            value,
            originalValue,
            options
          }, panic, (fieldErrors) => {
            next(fieldErrors.sort(this._sortErrors).concat(objectErrors), value);
          });
        });
      }
      clone(spec) {
        const next = super.clone(spec);
        next.fields = Object.assign({}, this.fields);
        next._nodes = this._nodes;
        next._excludedEdges = this._excludedEdges;
        next._sortErrors = this._sortErrors;
        return next;
      }
      concat(schema) {
        let next = super.concat(schema);
        let nextFields = next.fields;
        for (let [field, schemaOrRef] of Object.entries(this.fields)) {
          const target = nextFields[field];
          nextFields[field] = target === void 0 ? schemaOrRef : target;
        }
        return next.withMutation((s) => (
          // XXX: excludes here is wrong
          s.setFields(nextFields, [...this._excludedEdges, ...schema._excludedEdges])
        ));
      }
      _getDefault(options) {
        if ("default" in this.spec) {
          return super._getDefault(options);
        }
        if (!this._nodes.length) {
          return void 0;
        }
        let dft = {};
        this._nodes.forEach((key) => {
          var _innerOptions;
          const field = this.fields[key];
          let innerOptions = options;
          if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
            innerOptions = Object.assign({}, innerOptions, {
              parent: innerOptions.value,
              value: innerOptions.value[key]
            });
          }
          dft[key] = field && "getDefault" in field ? field.getDefault(innerOptions) : void 0;
        });
        return dft;
      }
      setFields(shape, excludedEdges) {
        let next = this.clone();
        next.fields = shape;
        next._nodes = sortFields(shape, excludedEdges);
        next._sortErrors = sortByKeyOrder(Object.keys(shape));
        if (excludedEdges) next._excludedEdges = excludedEdges;
        return next;
      }
      shape(additions, excludes = []) {
        return this.clone().withMutation((next) => {
          let edges = next._excludedEdges;
          if (excludes.length) {
            if (!Array.isArray(excludes[0])) excludes = [excludes];
            edges = [...next._excludedEdges, ...excludes];
          }
          return next.setFields(Object.assign(next.fields, additions), edges);
        });
      }
      partial() {
        const partial = {};
        for (const [key, schema] of Object.entries(this.fields)) {
          partial[key] = "optional" in schema && schema.optional instanceof Function ? schema.optional() : schema;
        }
        return this.setFields(partial);
      }
      deepPartial() {
        const next = deepPartial(this);
        return next;
      }
      pick(keys) {
        const picked = {};
        for (const key of keys) {
          if (this.fields[key]) picked[key] = this.fields[key];
        }
        return this.setFields(picked, this._excludedEdges.filter(([a, b]) => keys.includes(a) && keys.includes(b)));
      }
      omit(keys) {
        const remaining = [];
        for (const key of Object.keys(this.fields)) {
          if (keys.includes(key)) continue;
          remaining.push(key);
        }
        return this.pick(remaining);
      }
      from(from, to, alias) {
        let fromGetter = (0, import_property_expr.getter)(from, true);
        return this.transform((obj) => {
          if (!obj) return obj;
          let newObj = obj;
          if (deepHas(obj, from)) {
            newObj = Object.assign({}, obj);
            if (!alias) delete newObj[from];
            newObj[to] = fromGetter(obj);
          }
          return newObj;
        });
      }
      /** Parse an input JSON string to an object */
      json() {
        return this.transform(parseJson);
      }
      noUnknown(noAllow = true, message = object.noUnknown) {
        if (typeof noAllow !== "boolean") {
          message = noAllow;
          noAllow = true;
        }
        let next = this.test({
          name: "noUnknown",
          exclusive: true,
          message,
          test(value) {
            if (value == null) return true;
            const unknownKeys = unknown(this.schema, value);
            return !noAllow || unknownKeys.length === 0 || this.createError({
              params: {
                unknown: unknownKeys.join(", ")
              }
            });
          }
        });
        next.spec.noUnknown = noAllow;
        return next;
      }
      unknown(allow = true, message = object.noUnknown) {
        return this.noUnknown(!allow, message);
      }
      transformKeys(fn) {
        return this.transform((obj) => {
          if (!obj) return obj;
          const result = {};
          for (const key of Object.keys(obj)) result[fn(key)] = obj[key];
          return result;
        });
      }
      camelCase() {
        return this.transformKeys(import_tiny_case.camelCase);
      }
      snakeCase() {
        return this.transformKeys(import_tiny_case.snakeCase);
      }
      constantCase() {
        return this.transformKeys((key) => (0, import_tiny_case.snakeCase)(key).toUpperCase());
      }
      describe(options) {
        const next = (options ? this.resolve(options) : this).clone();
        const base = super.describe(options);
        base.fields = {};
        for (const [key, value] of Object.entries(next.fields)) {
          var _innerOptions2;
          let innerOptions = options;
          if ((_innerOptions2 = innerOptions) != null && _innerOptions2.value) {
            innerOptions = Object.assign({}, innerOptions, {
              parent: innerOptions.value,
              value: innerOptions.value[key]
            });
          }
          base.fields[key] = value.describe(innerOptions);
        }
        return base;
      }
    };
    create$3.prototype = ObjectSchema.prototype;
    ArraySchema = class extends Schema {
      constructor(type) {
        super({
          type: "array",
          spec: {
            types: type
          },
          check(v) {
            return Array.isArray(v);
          }
        });
        this.innerType = void 0;
        this.innerType = type;
      }
      _cast(_value, _opts) {
        const value = super._cast(_value, _opts);
        if (!this._typeCheck(value) || !this.innerType) {
          return value;
        }
        let isChanged = false;
        const castArray = value.map((v, idx) => {
          const castElement = this.innerType.cast(v, Object.assign({}, _opts, {
            path: `${_opts.path || ""}[${idx}]`
          }));
          if (castElement !== v) {
            isChanged = true;
          }
          return castElement;
        });
        return isChanged ? castArray : value;
      }
      _validate(_value, options = {}, panic, next) {
        var _options$recursive;
        let innerType = this.innerType;
        let recursive = (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive;
        options.originalValue != null ? options.originalValue : _value;
        super._validate(_value, options, panic, (arrayErrors, value) => {
          var _options$originalValu2;
          if (!recursive || !innerType || !this._typeCheck(value)) {
            next(arrayErrors, value);
            return;
          }
          let tests = new Array(value.length);
          for (let index = 0; index < value.length; index++) {
            var _options$originalValu;
            tests[index] = innerType.asNestedTest({
              options,
              index,
              parent: value,
              parentPath: options.path,
              originalParent: (_options$originalValu = options.originalValue) != null ? _options$originalValu : _value
            });
          }
          this.runTests({
            value,
            tests,
            originalValue: (_options$originalValu2 = options.originalValue) != null ? _options$originalValu2 : _value,
            options
          }, panic, (innerTypeErrors) => next(innerTypeErrors.concat(arrayErrors), value));
        });
      }
      clone(spec) {
        const next = super.clone(spec);
        next.innerType = this.innerType;
        return next;
      }
      /** Parse an input JSON string to an object */
      json() {
        return this.transform(parseJson);
      }
      concat(schema) {
        let next = super.concat(schema);
        next.innerType = this.innerType;
        if (schema.innerType)
          next.innerType = next.innerType ? (
            // @ts-expect-error Lazy doesn't have concat and will break
            next.innerType.concat(schema.innerType)
          ) : schema.innerType;
        return next;
      }
      of(schema) {
        let next = this.clone();
        if (!isSchema(schema)) throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + printValue(schema));
        next.innerType = schema;
        next.spec = Object.assign({}, next.spec, {
          types: schema
        });
        return next;
      }
      length(length, message = array.length) {
        return this.test({
          message,
          name: "length",
          exclusive: true,
          params: {
            length
          },
          skipAbsent: true,
          test(value) {
            return value.length === this.resolve(length);
          }
        });
      }
      min(min, message) {
        message = message || array.min;
        return this.test({
          message,
          name: "min",
          exclusive: true,
          params: {
            min
          },
          skipAbsent: true,
          // FIXME(ts): Array<typeof T>
          test(value) {
            return value.length >= this.resolve(min);
          }
        });
      }
      max(max, message) {
        message = message || array.max;
        return this.test({
          message,
          name: "max",
          exclusive: true,
          params: {
            max
          },
          skipAbsent: true,
          test(value) {
            return value.length <= this.resolve(max);
          }
        });
      }
      ensure() {
        return this.default(() => []).transform((val, original) => {
          if (this._typeCheck(val)) return val;
          return original == null ? [] : [].concat(original);
        });
      }
      compact(rejector) {
        let reject = !rejector ? (v) => !!v : (v, i, a) => !rejector(v, i, a);
        return this.transform((values) => values != null ? values.filter(reject) : values);
      }
      describe(options) {
        const next = (options ? this.resolve(options) : this).clone();
        const base = super.describe(options);
        if (next.innerType) {
          var _innerOptions;
          let innerOptions = options;
          if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
            innerOptions = Object.assign({}, innerOptions, {
              parent: innerOptions.value,
              value: innerOptions.value[0]
            });
          }
          base.innerType = next.innerType.describe(innerOptions);
        }
        return base;
      }
    };
    create$2.prototype = ArraySchema.prototype;
    TupleSchema = class extends Schema {
      constructor(schemas) {
        super({
          type: "tuple",
          spec: {
            types: schemas
          },
          check(v) {
            const types = this.spec.types;
            return Array.isArray(v) && v.length === types.length;
          }
        });
        this.withMutation(() => {
          this.typeError(tuple.notType);
        });
      }
      _cast(inputValue, options) {
        const {
          types
        } = this.spec;
        const value = super._cast(inputValue, options);
        if (!this._typeCheck(value)) {
          return value;
        }
        let isChanged = false;
        const castArray = types.map((type, idx) => {
          const castElement = type.cast(value[idx], Object.assign({}, options, {
            path: `${options.path || ""}[${idx}]`
          }));
          if (castElement !== value[idx]) isChanged = true;
          return castElement;
        });
        return isChanged ? castArray : value;
      }
      _validate(_value, options = {}, panic, next) {
        let itemTypes = this.spec.types;
        super._validate(_value, options, panic, (tupleErrors, value) => {
          var _options$originalValu2;
          if (!this._typeCheck(value)) {
            next(tupleErrors, value);
            return;
          }
          let tests = [];
          for (let [index, itemSchema] of itemTypes.entries()) {
            var _options$originalValu;
            tests[index] = itemSchema.asNestedTest({
              options,
              index,
              parent: value,
              parentPath: options.path,
              originalParent: (_options$originalValu = options.originalValue) != null ? _options$originalValu : _value
            });
          }
          this.runTests({
            value,
            tests,
            originalValue: (_options$originalValu2 = options.originalValue) != null ? _options$originalValu2 : _value,
            options
          }, panic, (innerTypeErrors) => next(innerTypeErrors.concat(tupleErrors), value));
        });
      }
      describe(options) {
        const next = (options ? this.resolve(options) : this).clone();
        const base = super.describe(options);
        base.innerType = next.spec.types.map((schema, index) => {
          var _innerOptions;
          let innerOptions = options;
          if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
            innerOptions = Object.assign({}, innerOptions, {
              parent: innerOptions.value,
              value: innerOptions.value[index]
            });
          }
          return schema.describe(innerOptions);
        });
        return base;
      }
    };
    create$1.prototype = TupleSchema.prototype;
    Lazy = class _Lazy {
      constructor(builder) {
        this.type = "lazy";
        this.__isYupSchema__ = true;
        this.spec = void 0;
        this._resolve = (value, options = {}) => {
          let schema = this.builder(value, options);
          if (!isSchema(schema)) throw new TypeError("lazy() functions must return a valid schema");
          if (this.spec.optional) schema = schema.optional();
          return schema.resolve(options);
        };
        this.builder = builder;
        this.spec = {
          meta: void 0,
          optional: false
        };
      }
      clone(spec) {
        const next = new _Lazy(this.builder);
        next.spec = Object.assign({}, this.spec, spec);
        return next;
      }
      optionality(optional) {
        const next = this.clone({
          optional
        });
        return next;
      }
      optional() {
        return this.optionality(true);
      }
      resolve(options) {
        return this._resolve(options.value, options);
      }
      cast(value, options) {
        return this._resolve(value, options).cast(value, options);
      }
      asNestedTest(config) {
        let {
          key,
          index,
          parent,
          options
        } = config;
        let value = parent[index != null ? index : key];
        return this._resolve(value, Object.assign({}, options, {
          value,
          parent
        })).asNestedTest(config);
      }
      validate(value, options) {
        return this._resolve(value, options).validate(value, options);
      }
      validateSync(value, options) {
        return this._resolve(value, options).validateSync(value, options);
      }
      validateAt(path, value, options) {
        return this._resolve(value, options).validateAt(path, value, options);
      }
      validateSyncAt(path, value, options) {
        return this._resolve(value, options).validateSyncAt(path, value, options);
      }
      isValid(value, options) {
        return this._resolve(value, options).isValid(value, options);
      }
      isValidSync(value, options) {
        return this._resolve(value, options).isValidSync(value, options);
      }
      describe(options) {
        return options ? this.resolve(options).describe(options) : {
          type: "lazy",
          meta: this.spec.meta,
          label: void 0
        };
      }
      meta(...args) {
        if (args.length === 0) return this.spec.meta;
        let next = this.clone();
        next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
        return next;
      }
    };
  }
});

// node_modules/ics/dist/schema/index.js
var require_schema = __commonJS({
  "node_modules/ics/dist/schema/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.urlRegex = void 0;
    exports.validateHeader = validateHeader;
    exports.validateHeaderAndEvent = validateHeaderAndEvent;
    var yup = _interopRequireWildcard((init_index_esm(), __toCommonJS(index_esm_exports)));
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function ownKeys(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var urlRegex = exports.urlRegex = /^(?:([a-z0-9+.-]+):\/\/)(?:\S+(?::\S*)?@)?(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/;
    var dateTimeSchema = function dateTimeSchema2(_ref) {
      var required = _ref.required;
      return yup.lazy(function(value) {
        if (typeof value === "number") {
          return yup.number().integer().min(0);
        }
        if (typeof value === "string") {
          return yup.string().required();
        }
        if (!required && typeof value === "undefined") {
          return yup.mixed().oneOf([void 0]);
        }
        return yup.array().required().min(3).max(7).of(yup.lazy(function(item, options) {
          var itemIndex = options.parent.indexOf(options.value);
          return [yup.number().integer(), yup.number().integer().min(1).max(12), yup.number().integer().min(1).max(31), yup.number().integer().min(0).max(23), yup.number().integer().min(0).max(60), yup.number().integer().min(0).max(60)][itemIndex];
        }));
      });
    };
    var durationSchema = yup.object().shape({
      before: yup["boolean"](),
      //option to set before alaram
      weeks: yup.number(),
      days: yup.number(),
      hours: yup.number(),
      minutes: yup.number(),
      seconds: yup.number()
    }).noUnknown();
    var contactSchema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      rsvp: yup["boolean"](),
      dir: yup.string().matches(urlRegex),
      partstat: yup.string(),
      role: yup.string(),
      cutype: yup.string(),
      xNumGuests: yup.number()
    }).noUnknown();
    var organizerSchema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      dir: yup.string(),
      sentBy: yup.string()
    }).noUnknown();
    var alarmSchema = yup.object().shape({
      action: yup.string().matches(/^(audio|display|email)$/).required(),
      trigger: yup.mixed().required(),
      description: yup.string(),
      duration: durationSchema,
      repeat: yup.number(),
      attach: yup.string(),
      attachType: yup.string(),
      summary: yup.string(),
      attendee: contactSchema,
      "x-prop": yup.mixed(),
      "iana-prop": yup.mixed()
    }).noUnknown();
    var headerShape = {
      productId: yup.string(),
      method: yup.string(),
      calName: yup.string()
    };
    var headerSchema = yup.object().shape(headerShape).noUnknown();
    var eventShape = {
      summary: yup.string(),
      timestamp: dateTimeSchema({
        required: false
      }),
      title: yup.string(),
      uid: yup.string(),
      sequence: yup.number().integer().max(2147483647),
      start: dateTimeSchema({
        required: true
      }),
      duration: durationSchema,
      startType: yup.string().matches(/^(utc|local)$/),
      startInputType: yup.string().matches(/^(utc|local)$/),
      startOutputType: yup.string().matches(/^(utc|local)$/),
      end: dateTimeSchema({
        required: false
      }),
      endInputType: yup.string().matches(/^(utc|local)$/),
      endOutputType: yup.string().matches(/^(utc|local)$/),
      description: yup.string(),
      url: yup.string().matches(urlRegex),
      geo: yup.object().shape({
        lat: yup.number(),
        lon: yup.number()
      }),
      location: yup.string(),
      status: yup.string().matches(/^(TENTATIVE|CANCELLED|CONFIRMED)$/i),
      categories: yup.array().of(yup.string()),
      organizer: organizerSchema,
      attendees: yup.array().of(contactSchema),
      alarms: yup.array().of(alarmSchema),
      recurrenceRule: yup.string(),
      busyStatus: yup.string().matches(/^(TENTATIVE|FREE|BUSY|OOF)$/i),
      transp: yup.string().matches(/^(TRANSPARENT|OPAQUE)$/i),
      classification: yup.string(),
      created: dateTimeSchema({
        required: false
      }),
      lastModified: dateTimeSchema({
        required: false
      }),
      exclusionDates: yup.array().of(dateTimeSchema({
        required: true
      })),
      htmlContent: yup.string()
    };
    var headerAndEventSchema = yup.object().shape(_objectSpread(_objectSpread({}, headerShape), eventShape)).test("xor", "object should have end or duration (but not both)", function(val) {
      var hasEnd = !!val.end;
      var hasDuration = !!val.duration;
      return hasEnd && !hasDuration || !hasEnd && hasDuration || !hasEnd && !hasDuration;
    }).noUnknown();
    function validateHeader(candidate) {
      try {
        var value = headerSchema.validateSync(candidate, {
          abortEarly: false,
          strict: true
        });
        return {
          error: null,
          value
        };
      } catch (error) {
        return {
          error: Object.assign({}, error),
          value: void 0
        };
      }
    }
    function validateHeaderAndEvent(candidate) {
      try {
        var value = headerAndEventSchema.validateSync(candidate, {
          abortEarly: false,
          strict: true
        });
        return {
          error: null,
          value
        };
      } catch (error) {
        return {
          error: Object.assign({}, error),
          value: void 0
        };
      }
    }
  }
});

// node_modules/ics/dist/pipeline/validate.js
var require_validate = __commonJS({
  "node_modules/ics/dist/pipeline/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _schema = require_schema();
    Object.keys(_schema).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (key in exports && exports[key] === _schema[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _schema[key];
        }
      });
    });
  }
});

// node_modules/ics/dist/pipeline/index.js
var require_pipeline = __commonJS({
  "node_modules/ics/dist/pipeline/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "buildEvent", {
      enumerable: true,
      get: function get() {
        return _build.buildEvent;
      }
    });
    Object.defineProperty(exports, "buildHeader", {
      enumerable: true,
      get: function get() {
        return _build.buildHeader;
      }
    });
    Object.defineProperty(exports, "formatEvent", {
      enumerable: true,
      get: function get() {
        return _format.formatEvent;
      }
    });
    Object.defineProperty(exports, "formatFooter", {
      enumerable: true,
      get: function get() {
        return _format.formatFooter;
      }
    });
    Object.defineProperty(exports, "formatHeader", {
      enumerable: true,
      get: function get() {
        return _format.formatHeader;
      }
    });
    Object.defineProperty(exports, "urlRegex", {
      enumerable: true,
      get: function get() {
        return _validate.urlRegex;
      }
    });
    Object.defineProperty(exports, "validateHeader", {
      enumerable: true,
      get: function get() {
        return _validate.validateHeader;
      }
    });
    Object.defineProperty(exports, "validateHeaderAndEvent", {
      enumerable: true,
      get: function get() {
        return _validate.validateHeaderAndEvent;
      }
    });
    var _build = require_build();
    var _format = require_format();
    var _validate = require_validate();
  }
});

// node_modules/ics/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/ics/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.convertTimestampToArray = convertTimestampToArray;
    exports.createEvent = createEvent;
    exports.createEvents = createEvents;
    exports.isValidURL = isValidURL;
    var _pipeline = require_pipeline();
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function ownKeys(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function buildHeaderAndValidate(header) {
      return (0, _pipeline.validateHeader)((0, _pipeline.buildHeader)(header));
    }
    function buildHeaderAndEventAndValidate(event) {
      return (0, _pipeline.validateHeaderAndEvent)(_objectSpread(_objectSpread({}, (0, _pipeline.buildHeader)(event)), (0, _pipeline.buildEvent)(event)));
    }
    function convertTimestampToArray(timestamp) {
      var inputType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "local";
      var dateArray = [];
      var d = new Date(timestamp);
      dateArray.push(inputType === "local" ? d.getFullYear() : d.getUTCFullYear());
      dateArray.push((inputType === "local" ? d.getMonth() : d.getUTCMonth()) + 1);
      dateArray.push(inputType === "local" ? d.getDate() : d.getUTCDate());
      dateArray.push(inputType === "local" ? d.getHours() : d.getUTCHours());
      dateArray.push(inputType === "local" ? d.getMinutes() : d.getUTCMinutes());
      return dateArray;
    }
    function createEvent(attributes, cb) {
      return createEvents([attributes], cb);
    }
    function createEvents(events, headerAttributesOrCb, cb) {
      var resolvedHeaderAttributes = _typeof(headerAttributesOrCb) === "object" ? headerAttributesOrCb : {};
      var resolvedCb = arguments.length === 3 ? cb : typeof headerAttributesOrCb === "function" ? headerAttributesOrCb : null;
      var run = function run2() {
        if (!events) {
          return {
            error: new Error("one argument is required"),
            value: null
          };
        }
        var _ref = events.length === 0 ? buildHeaderAndValidate(resolvedHeaderAttributes) : buildHeaderAndEventAndValidate(_objectSpread(_objectSpread({}, events[0]), resolvedHeaderAttributes)), headerError = _ref.error, headerValue = _ref.value;
        if (headerError) {
          return {
            error: headerError,
            value: null
          };
        }
        var value = "";
        value += (0, _pipeline.formatHeader)(headerValue);
        for (var i = 0; i < events.length; i++) {
          var _buildHeaderAndEventA = buildHeaderAndEventAndValidate(events[i]), eventError = _buildHeaderAndEventA.error, eventValue = _buildHeaderAndEventA.value;
          if (eventError) return {
            error: eventError,
            value: null
          };
          value += (0, _pipeline.formatEvent)(eventValue);
        }
        value += (0, _pipeline.formatFooter)();
        return {
          error: null,
          value
        };
      };
      var returnValue;
      try {
        returnValue = run();
      } catch (e) {
        returnValue = {
          error: e,
          value: null
        };
      }
      if (!resolvedCb) {
        return returnValue;
      }
      return resolvedCb(returnValue.error, returnValue.value);
    }
    function isValidURL(url) {
      return _pipeline.urlRegex.test(url);
    }
  }
});
export default require_dist2();
//# sourceMappingURL=ics.js.map
