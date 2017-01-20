/*! Physics module "Ammonext" v0.0.1-dev.1 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("THREE"), require("WHS"));
	else if(typeof define === 'function' && define.amd)
		define(["THREE", "WHS"], factory);
	else if(typeof exports === 'object')
		exports["PHYSICS"] = factory(require("THREE"), require("WHS"));
	else
		root["PHYSICS"] = factory(root["THREE"], root["WHS"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_124__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _defineProperty = __webpack_require__(73);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(31)('wks')
  , uid        = __webpack_require__(21)
  , Symbol     = __webpack_require__(6).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_three__);
/* unused harmony export api */
/* unused harmony export properties */
/* harmony export (immutable) */ exports["c"] = wrapPhysicsPrototype;
/* harmony export (immutable) */ exports["a"] = onCopy;
/* harmony export (immutable) */ exports["b"] = onWrap;



var api = {
  // get mass() {
  //   return this._physijs.mass;
  // }

  // set mass(mass) {
  //   this._physijs.mass = mass;
  //   if (this.manager.get('module:world')) this.manager.get('module:world').execute('updateMass', {id: this._physijs.id, mass});
  // }

  applyCentralImpulse: function applyCentralImpulse(force) {
    if (this.manager.has('module:world')) this.manager.get('module:world').execute('applyCentralImpulse', { id: this._physijs.id, x: force.x, y: force.y, z: force.z });
  },
  applyImpulse: function applyImpulse(force, offset) {
    if (this.manager.has('module:world')) {
      this.manager.get('module:world').execute('applyImpulse', {
        id: this._physijs.id,
        impulse_x: force.x,
        impulse_y: force.y,
        impulse_z: force.z,
        x: offset.x,
        y: offset.y,
        z: offset.z
      });
    }
  },
  applyTorque: function applyTorque(force) {
    if (this.manager.has('module:world')) {
      this.manager.get('module:world').execute('applyTorque', {
        id: this._physijs.id,
        torque_x: force.x,
        torque_y: force.y,
        torque_z: force.z
      });
    }
  },
  applyCentralForce: function applyCentralForce(force) {
    if (this.manager.has('module:world')) this.manager.get('module:world').execute('applyCentralForce', { id: this._physijs.id, x: force.x, y: force.y, z: force.z });
  },
  applyForce: function applyForce(force, offset) {
    if (this.manager.has('module:world')) {
      this.manager.get('module:world').execute('applyForce', {
        id: this._physijs.id,
        force_x: force.x,
        force_y: force.y,
        force_z: force.z,
        x: offset.x,
        y: offset.y,
        z: offset.z
      });
    }
  },
  getAngularVelocity: function getAngularVelocity() {
    return this._physijs.angularVelocity;
  },
  setAngularVelocity: function setAngularVelocity(velocity) {
    if (this.manager.has('module:world')) this.manager.get('module:world').execute('setAngularVelocity', { id: this._physijs.id, x: velocity.x, y: velocity.y, z: velocity.z });
  },
  getLinearVelocity: function getLinearVelocity() {
    return this._physijs.linearVelocity;
  },
  setLinearVelocity: function setLinearVelocity(velocity) {
    if (this.manager.has('module:world')) this.manager.get('module:world').execute('setLinearVelocity', { id: this._physijs.id, x: velocity.x, y: velocity.y, z: velocity.z });
  },
  setAngularFactor: function setAngularFactor(factor) {
    if (this.manager.has('module:world')) this.manager.get('module:world').execute('setAngularFactor', { id: this._physijs.id, x: factor.x, y: factor.y, z: factor.z });
  },
  setLinearFactor: function setLinearFactor(factor) {
    if (this.manager.has('module:world')) this.manager.get('module:world').execute('setLinearFactor', { id: this._physijs.id, x: factor.x, y: factor.y, z: factor.z });
  },
  setDamping: function setDamping(linear, angular) {
    if (this.manager.has('module:world')) this.manager.get('module:world').execute('setDamping', { id: this._physijs.id, linear: linear, angular: angular });
  },
  setCcdMotionThreshold: function setCcdMotionThreshold(threshold) {
    if (this.manager.has('module:world')) this.manager.get('module:world').execute('setCcdMotionThreshold', { id: this._physijs.id, threshold: threshold });
  },
  setCcdSweptSphereRadius: function setCcdSweptSphereRadius(radius) {
    if (this.manager.has('module:world')) this.manager.get('module:world').execute('setCcdSweptSphereRadius', { id: this._physijs.id, radius: radius });
  }
};

var properties = {
  position: {
    get: function get() {
      return this._native.position;
    },
    set: function set(vector3) {
      var pos = this._native.position;
      var scope = this;

      Object.defineProperties(pos, {
        x: {
          get: function get() {
            return this._x;
          },
          set: function set(x) {
            scope.__dirtyPosition = true;
            this._x = x;
          }
        },
        y: {
          get: function get() {
            return this._y;
          },
          set: function set(y) {
            scope.__dirtyPosition = true;
            this._y = y;
          }
        },
        z: {
          get: function get() {
            return this._z;
          },
          set: function set(z) {
            scope.__dirtyPosition = true;
            this._z = z;
          }
        }
      });

      scope.__dirtyPosition = true;

      pos.copy(vector3);
    }
  },

  quaternion: {
    get: function get() {
      this.__c_rot = true;
      return this.native.quaternion;
    },
    set: function set(quaternion) {
      var _this = this;

      var quat = this._native.quaternion,
          native = this._native;

      quat.copy(quaternion);

      quat.onChange(function () {
        if (_this.__c_rot) {
          if (native.__dirtyRotation === true) {
            _this.__c_rot = false;
            native.__dirtyRotation = false;
          }
          native.__dirtyRotation = true;
        }
      });
    }
  },

  rotation: {
    get: function get() {
      this.__c_rot = true;
      return this._native.rotation;
    },
    set: function set(euler) {
      var _this2 = this;

      var rot = this._native.rotation,
          native = this._native;

      this.quaternion.copy(new __WEBPACK_IMPORTED_MODULE_1_three__["Quaternion"]().setFromEuler(euler));

      rot.onChange(function () {
        if (_this2.__c_rot) {
          _this2.quaternion.copy(new __WEBPACK_IMPORTED_MODULE_1_three__["Quaternion"]().setFromEuler(rot));
          native.__dirtyRotation = true;
        }
      });
    }
  }
};

function wrapPhysicsPrototype(scope) {
  for (var key in api) {
    scope[key] = api[key].bind(scope);
  }

  for (var _key in properties) {
    Object.defineProperty(scope, _key, {
      get: properties[_key].get.bind(scope),
      set: properties[_key].set.bind(scope),
      configurable: true,
      enumerable: true
    });
  }
}

function onCopy(source) {
  wrapPhysicsPrototype(this);
  this._physijs = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, source._physijs);
  this.position = this.position.clone();
  this.rotation = this.rotation.clone();
  this.quaternion = this.quaternion.clone();
}

function onWrap() {
  this.position = this.position.clone();
  this.rotation = this.rotation.clone();
  this.quaternion = this.quaternion.clone();
}

/***/ },
/* 5 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(13)
  , IE8_DOM_DEFINE = __webpack_require__(42)
  , toPrimitive    = __webpack_require__(34)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return getEulerXYZFromQuaternion; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getQuatertionFromEuler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return temp1Quat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return addObjectChildren; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return MESSAGE_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return REPORT_ITEMSIZE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return COLLISIONREPORT_ITEMSIZE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return VEHICLEREPORT_ITEMSIZE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return CONSTRAINTREPORT_ITEMSIZE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return temp1Vector3; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return temp2Vector3; });
/* harmony export (binding) */ __webpack_require__.d(exports, "l", function() { return temp1Matrix4; });
/* harmony export (binding) */ __webpack_require__.d(exports, "m", function() { return convertWorldPositionToObject; });


var MESSAGE_TYPES = {
  WORLDREPORT: 0,
  COLLISIONREPORT: 1,
  VEHICLEREPORT: 2,
  CONSTRAINTREPORT: 3,
  SOFTREPORT: 4
};

var REPORT_ITEMSIZE = 14,
    COLLISIONREPORT_ITEMSIZE = 5,
    VEHICLEREPORT_ITEMSIZE = 9,
    CONSTRAINTREPORT_ITEMSIZE = 6;

var temp1Vector3 = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](),
    temp2Vector3 = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](),
    temp1Matrix4 = new __WEBPACK_IMPORTED_MODULE_0_three__["Matrix4"](),
    temp1Quat = new __WEBPACK_IMPORTED_MODULE_0_three__["Quaternion"]();

var getEulerXYZFromQuaternion = function getEulerXYZFromQuaternion(x, y, z, w) {
  return new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](Math.atan2(2 * (x * w - y * z), w * w - x * x - y * y + z * z), Math.asin(2 * (x * z + y * w)), Math.atan2(2 * (z * w - x * y), w * w + x * x - y * y - z * z));
};

var getQuatertionFromEuler = function getQuatertionFromEuler(x, y, z) {
  var c1 = Math.cos(y);
  var s1 = Math.sin(y);
  var c2 = Math.cos(-z);
  var s2 = Math.sin(-z);
  var c3 = Math.cos(x);
  var s3 = Math.sin(x);
  var c1c2 = c1 * c2;
  var s1s2 = s1 * s2;

  return {
    w: c1c2 * c3 - s1s2 * s3,
    x: c1c2 * s3 + s1s2 * c3,
    y: s1 * c2 * c3 + c1 * s2 * s3,
    z: c1 * s2 * c3 - s1 * c2 * s3
  };
};

var convertWorldPositionToObject = function convertWorldPositionToObject(position, object) {
  temp1Matrix4.identity(); // reset temp matrix

  // Set the temp matrix's rotation to the object's rotation
  temp1Matrix4.identity().makeRotationFromQuaternion(object.quaternion);

  // Invert rotation matrix in order to "unrotate" a point back to object space
  temp1Matrix4.getInverse(temp1Matrix4);

  // Yay! Temp vars!
  temp1Vector3.copy(position);
  temp2Vector3.copy(object.position);

  // Apply the rotation
  return temp1Vector3.sub(temp2Vector3).applyMatrix4(temp1Matrix4);
};

var addObjectChildren = function addObjectChildren(parent, object) {
  for (var i = 0; i < object.children.length; i++) {
    if (object.children[i]._physijs) {
      object.children[i].updateMatrix();
      object.children[i].updateMatrixWorld();

      temp1Vector3.setFromMatrixPosition(object.children[i].matrixWorld);
      temp1Quat.setFromRotationMatrix(object.children[i].matrixWorld);

      object.children[i]._physijs.position_offset = {
        x: temp1Vector3.x,
        y: temp1Vector3.y,
        z: temp1Vector3.z
      };

      object.children[i]._physijs.rotation = {
        x: temp1Quat.x,
        y: temp1Quat.y,
        z: temp1Quat.z,
        w: temp1Quat.w
      };

      parent._physijs.children.push(object.children[i]._physijs);
    }

    addObjectChildren(parent, object.children[i]);
  }
};



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(15)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(23)
  , hide      = __webpack_require__(14)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 11 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43)
  , defined = __webpack_require__(24);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(19);
module.exports = __webpack_require__(9) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(47)
  , enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 20 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 21 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 22 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(88);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 24 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 25 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(13)
  , dPs         = __webpack_require__(104)
  , enumBugKeys = __webpack_require__(25)
  , IE_PROTO    = __webpack_require__(30)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(94).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 28 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(11)
  , TAG = __webpack_require__(3)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys')
  , uid    = __webpack_require__(21);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 32 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(24);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(16);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(6)
  , core           = __webpack_require__(5)
  , LIBRARY        = __webpack_require__(26)
  , wksExt         = __webpack_require__(36)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Eventable; });


var Eventable = function () {
  function Eventable() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Eventable);

    this._eventListeners = {};
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Eventable, [{
    key: "addEventListener",
    value: function addEventListener(event_name, callback) {
      if (!this._eventListeners.hasOwnProperty(event_name)) this._eventListeners[event_name] = [];

      this._eventListeners[event_name].push(callback);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(event_name, callback) {
      var index = void 0;

      if (!this._eventListeners.hasOwnProperty(event_name)) return false;

      if ((index = this._eventListeners[event_name].indexOf(callback)) >= 0) {
        this._eventListeners[event_name].splice(index, 1);
        return true;
      }

      return false;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event_name) {
      var i = void 0;
      var parameters = Array.prototype.splice.call(arguments, 1);

      if (this._eventListeners.hasOwnProperty(event_name)) {
        for (i = 0; i < this._eventListeners[event_name].length; i++) {
          this._eventListeners[event_name][i].apply(this, parameters);
        }
      }
    }
  }], [{
    key: "make",
    value: function make(obj) {
      obj.prototype.addEventListener = Eventable.prototype.addEventListener;
      obj.prototype.removeEventListener = Eventable.prototype.removeEventListener;
      obj.prototype.dispatchEvent = Eventable.prototype.dispatchEvent;
    }
  }]);

  return Eventable;
}();

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VehicleTunning; });

var VehicleTunning = function VehicleTunning() {
  var suspension_stiffness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5.88;
  var suspension_compression = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.83;
  var suspension_damping = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.88;
  var max_suspension_travel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
  var friction_slip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10.5;
  var max_suspension_force = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 6000;

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, VehicleTunning);

  this.suspension_stiffness = suspension_stiffness;
  this.suspension_compression = suspension_compression;
  this.suspension_damping = suspension_damping;
  this.max_suspension_travel = max_suspension_travel;
  this.friction_slip = friction_slip;
  this.max_suspension_force = max_suspension_force;
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tunning__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Vehicle; });





var Vehicle = function () {
  function Vehicle(mesh) {
    var tuning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new VehicleTuning();

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Vehicle);

    this.mesh = mesh;
    this.wheels = [];

    this._physijs = {
      id: getObjectId(),
      rigidBody: mesh._physijs.id,
      suspension_stiffness: tuning.suspension_stiffness,
      suspension_compression: tuning.suspension_compression,
      suspension_damping: tuning.suspension_damping,
      max_suspension_travel: tuning.max_suspension_travel,
      friction_slip: tuning.friction_slip,
      max_suspension_force: tuning.max_suspension_force
    };
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Vehicle, [{
    key: 'addWheel',
    value: function addWheel(wheel_geometry, wheel_material, connection_point, wheel_direction, wheel_axle, suspension_rest_length, wheel_radius, is_front_wheel, tuning) {
      var wheel = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](wheel_geometry, wheel_material);

      wheel.castShadow = wheel.receiveShadow = true;
      wheel.position.copy(wheel_direction).multiplyScalar(suspension_rest_length / 100).add(connection_point);

      this.world.add(wheel);
      this.wheels.push(wheel);

      this.world.execute('addWheel', {
        id: this._physijs.id,
        connection_point: { x: connection_point.x, y: connection_point.y, z: connection_point.z },
        wheel_direction: { x: wheel_direction.x, y: wheel_direction.y, z: wheel_direction.z },
        wheel_axle: { x: wheel_axle.x, y: wheel_axle.y, z: wheel_axle.z },
        suspension_rest_length: suspension_rest_length,
        wheel_radius: wheel_radius,
        is_front_wheel: is_front_wheel,
        tuning: tuning
      });
    }
  }, {
    key: 'setSteering',
    value: function setSteering(amount, wheel) {
      if (wheel !== undefined && this.wheels[wheel] !== undefined) this.world.execute('setSteering', { id: this._physijs.id, wheel: wheel, steering: amount });else if (this.wheels.length > 0) {
        for (var i = 0; i < this.wheels.length; i++) {
          this.world.execute('setSteering', { id: this._physijs.id, wheel: i, steering: amount });
        }
      }
    }
  }, {
    key: 'setBrake',
    value: function setBrake(amount, wheel) {
      if (wheel !== undefined && this.wheels[wheel] !== undefined) this.world.execute('setBrake', { id: this._physijs.id, wheel: wheel, brake: amount });else if (this.wheels.length > 0) {
        for (var i = 0; i < this.wheels.length; i++) {
          this.world.execute('setBrake', { id: this._physijs.id, wheel: i, brake: amount });
        }
      }
    }
  }, {
    key: 'applyEngineForce',
    value: function applyEngineForce(amount, wheel) {
      if (wheel !== undefined && this.wheels[wheel] !== undefined) this.world.execute('applyEngineForce', { id: this._physijs.id, wheel: wheel, force: amount });else if (this.wheels.length > 0) {
        for (var i = 0; i < this.wheels.length; i++) {
          this.world.execute('applyEngineForce', { id: this._physijs.id, wheel: i, force: amount });
        }
      }
    }
  }]);

  return Vehicle;
}();

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _iterator = __webpack_require__(76);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(75);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(15)(function(){
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var LIBRARY        = __webpack_require__(26)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(48)
  , hide           = __webpack_require__(14)
  , has            = __webpack_require__(11)
  , Iterators      = __webpack_require__(17)
  , $iterCreate    = __webpack_require__(98)
  , setToStringTag = __webpack_require__(29)
  , getPrototypeOf = __webpack_require__(106)
  , ITERATOR       = __webpack_require__(3)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(20)
  , createDesc     = __webpack_require__(19)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(34)
  , has            = __webpack_require__(11)
  , IE8_DOM_DEFINE = __webpack_require__(42)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(47)
  , hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(11)
  , toIObject    = __webpack_require__(12)
  , arrayIndexOf = __webpack_require__(90)(false)
  , IE_PROTO     = __webpack_require__(30)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $at  = __webpack_require__(108)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(44)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getEulerXYZFromQuaternion", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getQuatertionFromEuler", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "temp1Quat", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "addObjectChildren", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "MESSAGE_TYPES", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "REPORT_ITEMSIZE", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "COLLISIONREPORT_ITEMSIZE", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "VEHICLEREPORT_ITEMSIZE", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CONSTRAINTREPORT_ITEMSIZE", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "temp1Vector3", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "temp2Vector3", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "temp1Matrix4", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "convertWorldPositionToObject", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["m"]; });
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventable__ = __webpack_require__(37);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Eventable", function() { return __WEBPACK_IMPORTED_MODULE_1__eventable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constraints_index__ = __webpack_require__(57);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ConeTwistConstraint", function() { return __WEBPACK_IMPORTED_MODULE_2__constraints_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "HingeConstraint", function() { return __WEBPACK_IMPORTED_MODULE_2__constraints_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PointConstraint", function() { return __WEBPACK_IMPORTED_MODULE_2__constraints_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SliderConstraint", function() { return __WEBPACK_IMPORTED_MODULE_2__constraints_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DOFConstraint", function() { return __WEBPACK_IMPORTED_MODULE_2__constraints_index__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_index__ = __webpack_require__(68);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "WorldModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BoxModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CapsuleModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ConcaveModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ConvexModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CylinderModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PlaneModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SphereModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SoftbodyModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ClothModule", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_index__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_index__ = __webpack_require__(69);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "VehicleTunning", function() { return __WEBPACK_IMPORTED_MODULE_4__vehicle_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Vehicle", function() { return __WEBPACK_IMPORTED_MODULE_4__vehicle_index__["b"]; });






/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConeTwistConstraint; });




var ConeTwistConstraint = function () {
  function ConeTwistConstraint(obja, objb, position) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ConeTwistConstraint);

    var objecta = obja;
    var objectb = obja;

    if (position === undefined) console.error('Both objects must be defined in a ConeTwistConstraint.');

    this.type = 'conetwist';
    this.appliedImpulse = 0;
    this.worldModule = null; // Will be redefined by .addConstraint
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();
    this.objectb = objectb._physijs.id;
    this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
    this.axisa = { x: objecta.rotation.x, y: objecta.rotation.y, z: objecta.rotation.z };
    this.axisb = { x: objectb.rotation.x, y: objectb.rotation.y, z: objectb.rotation.z };
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ConeTwistConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb,
        axisa: this.axisa,
        axisb: this.axisb
      };
    }
  }, {
    key: 'setLimit',
    value: function setLimit(x, y, z) {
      if (this.worldModule) this.worldModule.execute('conetwist_setLimit', { constraint: this.id, x: x, y: y, z: z });
    }
  }, {
    key: 'enableMotor',
    value: function enableMotor() {
      if (this.worldModule) this.worldModule.execute('conetwist_enableMotor', { constraint: this.id });
    }
  }, {
    key: 'setMaxMotorImpulse',
    value: function setMaxMotorImpulse(max_impulse) {
      if (this.worldModule) this.worldModule.execute('conetwist_setMaxMotorImpulse', { constraint: this.id, max_impulse: max_impulse });
    }
  }, {
    key: 'setMotorTarget',
    value: function setMotorTarget(target) {
      if (target instanceof THREE.Vector3) target = new THREE.Quaternion().setFromEuler(new THREE.Euler(target.x, target.y, target.z));else if (target instanceof THREE.Euler) target = new THREE.Quaternion().setFromEuler(target);else if (target instanceof THREE.Matrix4) target = new THREE.Quaternion().setFromRotationMatrix(target);

      if (this.worldModule) this.worldModule.execute('conetwist_setMotorTarget', {
        constraint: this.id,
        x: target.x,
        y: target.y,
        z: target.z,
        w: target.w
      });
    }
  }]);

  return ConeTwistConstraint;
}();

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DOFConstraint; });




var DOFConstraint = function () {
  function DOFConstraint(obja, objb, position) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DOFConstraint);

    var objecta = obja;
    var objectb = objb;

    if (position === undefined) {
      position = objectb;
      objectb = undefined;
    }

    this.type = 'dof';
    this.appliedImpulse = 0;
    this.worldModule = null; // Will be redefined by .addConstraint
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();
    this.axisa = { x: objecta.rotation.x, y: objecta.rotation.y, z: objecta.rotation.z };

    if (objectb) {
      this.objectb = objectb._physijs.id;
      this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
      this.axisb = { x: objectb.rotation.x, y: objectb.rotation.y, z: objectb.rotation.z };
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(DOFConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb,
        axisa: this.axisa,
        axisb: this.axisb
      };
    }
  }, {
    key: 'setLinearLowerLimit',
    value: function setLinearLowerLimit(limit) {
      if (this.worldModule) this.worldModule.execute('dof_setLinearLowerLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z });
    }
  }, {
    key: 'setLinearUpperLimit',
    value: function setLinearUpperLimit(limit) {
      if (this.worldModule) this.worldModule.execute('dof_setLinearUpperLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z });
    }
  }, {
    key: 'setAngularLowerLimit',
    value: function setAngularLowerLimit(limit) {
      if (this.worldModule) this.worldModule.execute('dof_setAngularLowerLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z });
    }
  }, {
    key: 'setAngularUpperLimit',
    value: function setAngularUpperLimit(limit) {
      if (this.worldModule) this.worldModule.execute('dof_setAngularUpperLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z });
    }
  }, {
    key: 'enableAngularMotor',
    value: function enableAngularMotor(which) {
      if (this.worldModule) this.worldModule.execute('dof_enableAngularMotor', { constraint: this.id, which: which });
    }
  }, {
    key: 'configureAngularMotor',
    value: function configureAngularMotor(which, low_angle, high_angle, velocity, max_force) {
      if (this.worldModule) this.worldModule.execute('dof_configureAngularMotor', { constraint: this.id, which: which, low_angle: low_angle, high_angle: high_angle, velocity: velocity, max_force: max_force });
    }
  }, {
    key: 'disableAngularMotor',
    value: function disableAngularMotor(which) {
      if (this.worldModule) this.worldModule.execute('dof_disableAngularMotor', { constraint: this.id, which: which });
    }
  }]);

  return DOFConstraint;
}();

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HingeConstraint; });




var HingeConstraint = function () {
  function HingeConstraint(obja, objb, position, axis) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, HingeConstraint);

    var objecta = obja;
    var objectb = objb;

    if (axis === undefined) {
      axis = position;
      position = objectb;
      objectb = undefined;
    }

    this.type = 'hinge';
    this.appliedImpulse = 0;
    this.worldModule = null; // Will be redefined by .addConstraint
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();
    this.position = position.clone();
    this.axis = axis;

    if (objectb) {
      this.objectb = objectb._physijs.id;
      this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(HingeConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb,
        axis: this.axis
      };
    }
  }, {
    key: 'setLimits',
    value: function setLimits(low, high, bias_factor, relaxation_factor) {
      if (this.worldModule) this.worldModule.execute('hinge_setLimits', {
        constraint: this.id,
        low: low,
        high: high,
        bias_factor: bias_factor,
        relaxation_factor: relaxation_factor
      });
    }
  }, {
    key: 'enableAngularMotor',
    value: function enableAngularMotor(velocity, acceleration) {
      if (this.worldModule) this.worldModule.execute('hinge_enableAngularMotor', {
        constraint: this.id,
        velocity: velocity,
        acceleration: acceleration
      });
    }
  }, {
    key: 'disableMotor',
    value: function disableMotor() {
      if (this.worldModule) this.worldModule.execute('hinge_disableMotor', { constraint: this.id });
    }
  }]);

  return HingeConstraint;
}();

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PointConstraint; });




var PointConstraint = function () {
  function PointConstraint(obja, objb, position) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PointConstraint);

    var objecta = obja;
    var objectb = objb;

    if (position === undefined) {
      position = objectb;
      objectb = undefined;
    }

    this.type = 'point';
    this.appliedImpulse = 0;
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();

    if (objectb) {
      this.objectb = objectb._physijs.id;
      this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PointConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb
      };
    }
  }]);

  return PointConstraint;
}();

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SliderConstraint; });




var SliderConstraint = function () {
  function SliderConstraint(obja, objb, position, axis) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SliderConstraint);

    var objecta = obja;
    var objectb = objb;

    if (axis === undefined) {
      axis = position;
      position = objectb;
      objectb = undefined;
    }

    this.type = 'slider';
    this.appliedImpulse = 0;
    this.worldModule = null; // Will be redefined by .addConstraint
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();
    this.axis = axis;

    if (objectb) {
      this.objectb = objectb._physijs.id;
      this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(SliderConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb,
        axis: this.axis
      };
    }
  }, {
    key: 'setLimits',
    value: function setLimits(lin_lower, lin_upper, ang_lower, ang_upper) {
      if (this.worldModule) this.worldModule.execute('slider_setLimits', {
        constraint: this.id,
        lin_lower: lin_lower,
        lin_upper: lin_upper,
        ang_lower: ang_lower,
        ang_upper: ang_upper
      });
    }
  }, {
    key: 'setRestitution',
    value: function setRestitution(linear, angular) {
      if (this.worldModule) this.worldModule.execute('slider_setRestitution', {
        constraint: this.id,
        linear: linear,
        angular: angular
      });
    }
  }, {
    key: 'enableLinearMotor',
    value: function enableLinearMotor(velocity, acceleration) {
      if (this.worldModule) this.worldModule.execute('slider_enableLinearMotor', {
        constraint: this.id,
        velocity: velocity,
        acceleration: acceleration
      });
    }
  }, {
    key: 'disableLinearMotor',
    value: function disableLinearMotor() {
      if (this.worldModule) this.worldModule.execute('slider_disableLinearMotor', { constraint: this.id });
    }
  }, {
    key: 'enableAngularMotor',
    value: function enableAngularMotor(velocity, acceleration) {
      this.scene.execute('slider_enableAngularMotor', {
        constraint: this.id,
        velocity: velocity,
        acceleration: acceleration
      });
    }
  }, {
    key: 'disableAngularMotor',
    value: function disableAngularMotor() {
      if (this.worldModule) this.worldModule.execute('slider_disableAngularMotor', { constraint: this.id });
    }
  }]);

  return SliderConstraint;
}();

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConeTwistConstraint__ = __webpack_require__(52);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ConeTwistConstraint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HingeConstraint__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__HingeConstraint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PointConstraint__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__PointConstraint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SliderConstraint__ = __webpack_require__(56);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__SliderConstraint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DOFConstraint__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__DOFConstraint__["a"]; });






/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BoxModule; });





var BoxModule = function () {
  function BoxModule(params) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BoxModule);

    this.bridge = {
      geometry: function geometry(_geometry) {
        if (!_geometry.boundingBox) _geometry.computeBoundingBox();

        this._physijs.width = _geometry.boundingBox.max.x - _geometry.boundingBox.min.x;
        this._physijs.height = _geometry.boundingBox.max.y - _geometry.boundingBox.min.y;
        this._physijs.depth = _geometry.boundingBox.max.z - _geometry.boundingBox.min.z;

        return _geometry;
      },


      onCopy: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["a" /* onCopy */],
      onWrap: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["b" /* onWrap */]
    };

    this.params = Object.assign({
      mass: 10,
      scale: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, 1, 1),
      restitution: 0.3,
      friction: 0.8,
      damping: 0,
      margin: 0
    }, params);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(BoxModule, [{
    key: 'integrate',
    value: function integrate(params) {
      this._physijs = {
        type: 'box',
        mass: params.mass,
        touches: [],
        linearVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        angularVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        group: params.group,
        mask: params.mask,
        friction: params.friction,
        restitution: params.restitution,
        damping: params.damping,
        scale: params.scale,
        margin: params.margin
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["c" /* wrapPhysicsPrototype */])(this);
    }
  }]);

  return BoxModule;
}();

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CapsuleModule; });





var CapsuleModule = function () {
  function CapsuleModule(params) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CapsuleModule);

    this.bridge = {
      geometry: function geometry(_geometry) {
        if (!_geometry.boundingBox) _geometry.computeBoundingBox();

        this._physijs.width = _geometry.boundingBox.max.x - _geometry.boundingBox.min.x;
        this._physijs.height = _geometry.boundingBox.max.y - _geometry.boundingBox.min.y;
        this._physijs.depth = _geometry.boundingBox.max.z - _geometry.boundingBox.min.z;

        return _geometry;
      },


      onCopy: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["a" /* onCopy */],
      onWrap: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["b" /* onWrap */]
    };

    this.params = Object.assign({
      mass: 10,
      height: 3,
      scale: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, 1, 1),
      radius: 3,
      restitution: 0.3,
      friction: 0.8,
      damping: 0,
      margin: 0
    }, params);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CapsuleModule, [{
    key: 'integrate',
    value: function integrate(params) {
      this._physijs = {
        type: 'capsule',
        radius: Math.max(params.width / 2, params.depth / 2),
        height: params.height,
        friction: params.friction,
        restitution: params.restitution,
        damping: params.damping,
        margin: params.margin,
        scale: params.scale,
        mass: params.mass
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["c" /* wrapPhysicsPrototype */])(this);
    }
  }]);

  return CapsuleModule;
}();

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClothModule; });





var ClothModule = function () {
  function ClothModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ClothModule);

    this.bridge = {
      geometry: function geometry(_geometry, self) {
        var geomParams = _geometry.parameters;

        var geom = _geometry instanceof __WEBPACK_IMPORTED_MODULE_2_three__["BufferGeometry"] ? _geometry : function () {
          _geometry.mergeVertices();

          var bufferGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["BufferGeometry"]();

          bufferGeometry.addAttribute('position', new __WEBPACK_IMPORTED_MODULE_2_three__["BufferAttribute"](new Float32Array(_geometry.vertices.length * 3), 3).copyVector3sArray(_geometry.vertices));

          var faces = _geometry.faces,
              facesLength = faces.length;
          var normalsArray = new Float32Array(facesLength * 3);

          for (var i = 0; i < facesLength; i++) {
            var i3 = i * 3;
            var normal = faces[i].normal || new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"]();

            normalsArray[i3] = normal.x;
            normalsArray[i3 + 1] = normal.y;
            normalsArray[i3 + 2] = normal.z;
          }

          bufferGeometry.addAttribute('normal', new __WEBPACK_IMPORTED_MODULE_2_three__["BufferAttribute"](normalsArray, 3));

          bufferGeometry.setIndex(new __WEBPACK_IMPORTED_MODULE_2_three__["BufferAttribute"](new (facesLength * 3 > 65535 ? Uint32Array : Uint16Array)(facesLength * 3), 1).copyIndicesArray(faces));

          return bufferGeometry;
        }();

        var verts = geom.attributes.position.array;

        if (!geomParams.widthSegments) geomParams.widthSegments = 1;
        if (!geomParams.heightSegments) geomParams.heightSegments = 1;

        var idx00 = 0;
        var idx01 = geomParams.widthSegments;
        var idx10 = (geomParams.heightSegments + 1) * (geomParams.widthSegments + 1) - (geomParams.widthSegments + 1);
        var idx11 = verts.length / 3 - 1;

        this._physijs.corners = [verts[idx01 * 3], verts[idx01 * 3 + 1], verts[idx01 * 3 + 2], //   ╗
        verts[idx00 * 3], verts[idx00 * 3 + 1], verts[idx00 * 3 + 2], // ╔
        verts[idx11 * 3], verts[idx11 * 3 + 1], verts[idx11 * 3 + 2], //       ╝
        verts[idx10 * 3], verts[idx10 * 3 + 1], verts[idx10 * 3 + 2]];

        this._physijs.segments = [geomParams.widthSegments + 1, geomParams.heightSegments + 1];

        return geom;
      },

      onCopy: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["a" /* onCopy */],
      onWrap: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["b" /* onWrap */]
    };

    this.params = Object.assign({
      friction: 0.8,
      damping: 0,
      margin: 0,
      klst: 0.9,
      kvst: 0.9,
      kast: 0.9,
      piterations: 1,
      viterations: 0,
      diterations: 0,
      citerations: 4,
      anchorHardness: 0.7,
      rigidHardness: 1
    }, params);
  }

  // appendAnchor(world, object, node, influence, collisionBetweenLinkedBodies = true) {
  //   const o1 = this._physijs.id;
  //   const o2 = object._physijs.id;
  //
  //   world.execute('appendAnchor', {
  //     obj: o1,
  //     obj2: o2,
  //     node,
  //     influence,
  //     collisionBetweenLinkedBodies
  //   });
  // }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ClothModule, [{
    key: 'integrate',
    value: function integrate(params) {
      this._physijs = {
        type: 'softClothMesh',
        mass: params.mass,
        touches: [],
        isSoftbody: true,
        friction: params.friction,
        damping: params.damping,
        margin: params.margin,
        klst: params.klst,
        kast: params.kast,
        kvst: params.kvst,
        drag: params.drag,
        lift: params.lift,
        piterations: params.piterations,
        viterations: params.viterations,
        diterations: params.diterations,
        citerations: params.citerations,
        anchorHardness: params.anchorHardness,
        rigidHardness: params.rigidHardness,
        scale: params.scale
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["c" /* wrapPhysicsPrototype */])(this);
    }
  }]);

  return ClothModule;
}();;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConcaveModule; });





var ConcaveModule = function () {
  function ConcaveModule(params) {
    var _this2 = this;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ConcaveModule);

    this.bridge = {
      geometry: function geometry(_geometry, self) {
        var _this = this;

        if (self.params.path) {
          this.wait(self.geometryLoader);

          self.geometryLoader.then(function (geom) {
            _this._physijs.data = self.geometryProcessor(geom);
          });
        } else {
          this._physijs.data = self.geometryProcessor(_geometry);
        }

        return _geometry;
      },


      onCopy: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["a" /* onCopy */],
      onWrap: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["b" /* onWrap */]
    };

    this.params = Object.assign({
      mass: 10,
      restitution: 0.3,
      friction: 0.8,
      damping: 0,
      scale: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, 1, 1),
      margin: 0,
      loader: new __WEBPACK_IMPORTED_MODULE_2_three__["JSONLoader"]()
    }, params);

    if (this.params.path && this.params.loader) {
      this.geometryLoader = new Promise(function (resolve, reject) {
        _this2.params.loader.load(_this2.params.path, resolve, function () {}, reject);
      });
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ConcaveModule, [{
    key: 'geometryProcessor',
    value: function geometryProcessor(geometry) {
      var isBuffer = geometry.type === 'BufferGeometry';

      if (!geometry.boundingBox) geometry.computeBoundingBox();

      var data = isBuffer ? geometry.attributes.position.array : new Float32Array(geometry.faces.length * 9);

      if (!isBuffer) {
        var vertices = geometry.vertices;

        for (var i = 0; i < geometry.faces.length; i++) {
          var face = geometry.faces[i];

          var vA = vertices[face.a];
          var vB = vertices[face.b];
          var vC = vertices[face.c];

          var i9 = i * 9;

          data[i9] = vA.x;
          data[i9 + 1] = vA.y;
          data[i9 + 2] = vA.z;

          data[i9 + 3] = vB.x;
          data[i9 + 4] = vB.y;
          data[i9 + 5] = vB.z;

          data[i9 + 6] = vC.x;
          data[i9 + 7] = vC.y;
          data[i9 + 8] = vC.z;
        }
      }

      return data;
    }
  }, {
    key: 'integrate',
    value: function integrate(params) {
      this._physijs = {
        type: 'concave',
        mass: params.mass,
        touches: [],
        linearVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        angularVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        group: params.group,
        mask: params.mask,
        friction: params.friction,
        restitution: params.restitution,
        damping: params.damping,
        margin: params.margin,
        scale: params.scale
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["c" /* wrapPhysicsPrototype */])(this);
    }
  }]);

  return ConcaveModule;
}();

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConvexModule; });





var ConvexModule = function () {
  function ConvexModule(params) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ConvexModule);

    this.bridge = {
      mesh: function mesh(_mesh) {
        var geometry = _mesh.geometry;

        if (!geometry.boundingBox) geometry.computeBoundingBox();

        var isBuffer = geometry.type === 'BufferGeometry';

        if (!isBuffer) geometry._bufferGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["BufferGeometry"]().fromGeometry(geometry);

        var data = isBuffer ? geometry.attributes.position.array : geometry._bufferGeometry.attributes.position.array;

        this._physijs.data = data;

        return _mesh;
      },


      onCopy: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["a" /* onCopy */],
      onWrap: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["b" /* onWrap */]
    };

    this.params = Object.assign({
      mass: 10,
      restitution: 0.3,
      friction: 0.8,
      damping: 0,
      margin: 0,
      scale: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, 1, 1)
    }, params);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ConvexModule, [{
    key: 'integrate',
    value: function integrate(params) {
      this._physijs = {
        type: 'convex',
        mass: params.mass,
        touches: [],
        linearVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        angularVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        group: params.group,
        mask: params.mask,
        friction: params.friction,
        restitution: params.restitution,
        damping: params.damping,
        margin: params.margin,
        scale: params.scale
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["c" /* wrapPhysicsPrototype */])(this);
    }
  }]);

  return ConvexModule;
}();

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CylinderModule; });





var CylinderModule = function () {
  function CylinderModule(params) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CylinderModule);

    this.bridge = {
      geometry: function geometry(_geometry) {
        if (!_geometry.boundingBox) _geometry.computeBoundingBox();

        this._physijs.width = _geometry.boundingBox.max.x - _geometry.boundingBox.min.x;
        this._physijs.height = _geometry.boundingBox.max.y - _geometry.boundingBox.min.y;
        this._physijs.depth = _geometry.boundingBox.max.z - _geometry.boundingBox.min.z;

        return _geometry;
      },


      onCopy: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["a" /* onCopy */],
      onWrap: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["b" /* onWrap */]
    };

    this.params = Object.assign({
      mass: 10,
      restitution: 0.3,
      friction: 0.8,
      damping: 0,
      margin: 0,
      scale: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, 1, 1)
    }, params);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CylinderModule, [{
    key: 'integrate',
    value: function integrate(params) {
      this._physijs = {
        type: 'cylinder',
        width: params.width,
        height: params.height,
        depth: params.depth,
        touches: [],
        linearVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        angularVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        group: params.group,
        mask: params.mask,
        friction: params.friction,
        restitution: params.restitution,
        damping: params.damping,
        margin: params.margin,
        mass: params.mass,
        scale: params.scale
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["c" /* wrapPhysicsPrototype */])(this);
    }
  }]);

  return CylinderModule;
}();

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlaneModule; });





var PlaneModule = function () {
  function PlaneModule(params) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PlaneModule);

    this.bridge = {
      geometry: function geometry(_geometry) {
        if (!_geometry.boundingBox) _geometry.computeBoundingBox();

        this._physijs.width = _geometry.boundingBox.max.x - _geometry.boundingBox.min.x;
        this._physijs.height = _geometry.boundingBox.max.y - _geometry.boundingBox.min.y;
        this._physijs.normal = _geometry.faces[0].normal.clone();

        return _geometry;
      },


      onCopy: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["a" /* onCopy */],
      onWrap: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["b" /* onWrap */]
    };

    this.params = Object.assign({
      mass: 10,
      restitution: 0.3,
      friction: 0.8,
      damping: 0,
      margin: 0,
      scale: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, 1, 1)
    }, params);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PlaneModule, [{
    key: 'integrate',
    value: function integrate(params) {
      this._physijs = {
        type: 'plane',
        touches: [],
        linearVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        angularVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        group: params.group,
        mask: params.mask,
        friction: params.friction,
        restitution: params.restitution,
        damping: params.damping,
        margin: params.margin,
        scale: params.scale,
        mass: params.mass
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["c" /* wrapPhysicsPrototype */])(this);
    }
  }]);

  return PlaneModule;
}();

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SoftbodyModule; });





var SoftbodyModule = function () {
  function SoftbodyModule(params) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SoftbodyModule);

    this.bridge = {
      geometry: function geometry(_geometry, self) {
        var idxGeometry = _geometry instanceof __WEBPACK_IMPORTED_MODULE_2_three__["BufferGeometry"] ? _geometry : function () {
          _geometry.mergeVertices();

          var bufferGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["BufferGeometry"]();

          bufferGeometry.addAttribute('position', new __WEBPACK_IMPORTED_MODULE_2_three__["BufferAttribute"](new Float32Array(_geometry.vertices.length * 3), 3).copyVector3sArray(_geometry.vertices));

          bufferGeometry.setIndex(new __WEBPACK_IMPORTED_MODULE_2_three__["BufferAttribute"](new (_geometry.faces.length * 3 > 65535 ? Uint32Array : Uint16Array)(_geometry.faces.length * 3), 1).copyIndicesArray(_geometry.faces));

          return bufferGeometry;
        }();

        var aVertices = idxGeometry.attributes.position.array;
        var aIndices = idxGeometry.index.array;

        this._physijs.aVertices = aVertices;
        this._physijs.aIndices = aIndices;

        var ndxGeometry = new __WEBPACK_IMPORTED_MODULE_2_three__["BufferGeometry"]().fromGeometry(_geometry);

        return ndxGeometry;
      },


      onCopy: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["a" /* onCopy */],
      onWrap: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["b" /* onWrap */]
    };

    this.params = Object.assign({
      restitution: 0.3,
      friction: 0.8,
      damping: 0,
      pressure: 100,
      margin: 0,
      klst: 0.9,
      kvst: 0.9,
      kast: 0.9,
      piterations: 1,
      viterations: 0,
      diterations: 0,
      citerations: 4,
      anchorHardness: 0.7,
      rigidHardness: 1
    }, params);
  }

  // createIndexedBufferGeometryFromGeometry(geometry) {
  //   const numVertices = geometry.vertices.length;
  //   const numFaces = geometry.faces.length;
  //   const bufferGeom = new BufferGeometry();
  //   const vertices = new Float32Array(numVertices * 3);
  //   const indices = new (numFaces * 3 > 65535 ? Uint32Array : Uint16Array)(numFaces * 3);

  //   for (let i = 0; i < numVertices; i++) {
  //     const p = geometry.vertices[i];
  //     const i3 = i * 3;

  //     vertices[i3] = p.x;
  //     vertices[i3 + 1] = p.y;
  //     vertices[i3 + 2] = p.z;
  //   }

  //   for (let i = 0; i < numFaces; i++) {
  //     const f = geometry.faces[i];
  //     const i3 = i * 3;

  //     indices[i3] = f.a;
  //     indices[i3 + 1] = f.b;
  //     indices[i3 + 2] = f.c;
  //   }

  //   bufferGeom.setIndex(new BufferAttribute(indices, 1));
  //   bufferGeom.addAttribute('position', new BufferAttribute(vertices, 3));

  //   return bufferGeom;
  // }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(SoftbodyModule, [{
    key: 'isEqual',
    value: function isEqual(x1, y1, z1, x2, y2, z2) {
      var delta = 0.000001;

      return Math.abs(x2 - x1) < delta && Math.abs(y2 - y1) < delta && Math.abs(z2 - z1) < delta;
    }

    // appendAnchor(world, object, node, influence, collisionBetweenLinkedBodies = true) {
    //   const o1 = this._physijs.id;
    //   const o2 = object._physijs.id;

    //   world.execute('appendAnchor', {
    //     obj: o1,
    //     obj2: o2,
    //     node,
    //     influence,
    //     collisionBetweenLinkedBodies
    //   });
    // }

  }, {
    key: 'integrate',
    value: function integrate(params) {
      this._physijs = {
        type: 'softTrimesh',
        mass: params.mass,
        touches: [],
        friction: params.friction,
        damping: params.damping,
        pressure: params.pressure,
        margin: params.margin,
        klst: params.klst,
        isSoftbody: true,
        kast: params.kast,
        kvst: params.kvst,
        drag: params.drag,
        lift: params.lift,
        piterations: params.piterations,
        viterations: params.viterations,
        diterations: params.diterations,
        citerations: params.citerations,
        anchorHardness: params.anchorHardness,
        rigidHardness: params.rigidHardness
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["c" /* wrapPhysicsPrototype */])(this);
    }
  }]);

  return SoftbodyModule;
}();

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SphereModule; });





var SphereModule = function () {
  function SphereModule(params) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SphereModule);

    this.bridge = {
      geometry: function geometry(_geometry) {
        if (!_geometry.boundingSphere) _geometry.computeBoundingSphere();
        this._physijs.radius = _geometry.boundingSphere.radius;
        return _geometry;
      },


      onCopy: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["a" /* onCopy */],
      onWrap: __WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["b" /* onWrap */]
    };

    this.params = Object.assign({
      mass: 10,
      restitution: 0.3,
      friction: 0.8,
      damping: 0,
      pressure: 100,
      margin: 0,
      klst: 0.9,
      kvst: 0.9,
      kast: 0.9,
      scale: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](1, 1, 1)
    }, params);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(SphereModule, [{
    key: 'integrate',
    value: function integrate(params) {
      this._physijs = {
        type: 'sphere',
        touches: [],
        linearVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        angularVelocity: new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](),
        group: params.group,
        mask: params.mask,
        friction: params.friction,
        restitution: params.restitution,
        damping: params.damping,
        margin: params.margin,
        scale: params.scale,
        mass: params.mass
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__physicsPrototype__["c" /* wrapPhysicsPrototype */])(this);
    }
  }]);

  return SphereModule;
}();

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_whs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_whs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_whs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vehicle_vehicle__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorldModule; });














var WorldModule = function (_Eventable) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WorldModule, _Eventable);

  function WorldModule(params) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WorldModule);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WorldModule.__proto__ || Object.getPrototypeOf(WorldModule)).call(this));

    _this.bridge = {
      onAdd: function onAdd(component, self) {
        if (component._physijs) return self.defer(self.onAddCallback.bind(self), [component]);
        return;
      },
      onRemove: function onRemove(component, self) {
        if (component._physijs) return self.defer(self.onRemoveCallback.bind(self), [component]);
        return;
      }
    };


    _this.params = Object.assign({
      fixedTimeStep: 1 / 60,
      rateLimit: true,
      ammo: "",
      softbody: false,
      gravity: new __WEBPACK_IMPORTED_MODULE_5_three__["Vector3"](0, -100, 0)
    }, params);

    var start = performance.now();

    _this._worker = new (__webpack_require__(123))();
    _this._worker.transferableMessage = _this._worker.webkitPostMessage || _this._worker.postMessage;

    _this.isLoaded = false;

    _this.loader = new Promise(function (resolve, reject) {
      if (params.wasm) {
        fetch(params.wasm).then(function (response) {
          return response.arrayBuffer();
        }).then(function (buffer) {
          _this.params.wasmBuffer = buffer;

          _this.execute('init', _this.params);
          // console.log("Physics loading time: " + (performance.now() - start) + "ms");
          resolve();
        });
      } else {
        _this.execute('init', _this.params);
        resolve();
      }
    });

    _this.loader.then(function () {
      _this.isLoaded = true;
    });

    _this._materials_ref_counts = {};
    _this._objects = {};
    _this._vehicles = {};
    _this._constraints = {};
    _this._is_simulating = false;
    _this.getObjectId = function () {
      var _id = 1;
      return function () {
        return _id++;
      };
    }();

    var ab = new ArrayBuffer(1);
    _this._worker.transferableMessage(ab, [ab]);
    _this.SUPPORT_TRANSFERABLE = ab.byteLength === 0;

    _this._worker.onmessage = function (event) {
      var _temp = void 0,
          data = event.data;

      if (data instanceof ArrayBuffer && data.byteLength !== 1) // byteLength === 1 is the worker making a SUPPORT_TRANSFERABLE test
        data = new Float32Array(data);

      if (data instanceof Float32Array) {
        // transferable object
        switch (data[0]) {
          case __WEBPACK_IMPORTED_MODULE_9__api__["e" /* MESSAGE_TYPES */].WORLDREPORT:
            _this._updateScene(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_9__api__["e" /* MESSAGE_TYPES */].SOFTREPORT:
            _this._updateSoftbodies(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_9__api__["e" /* MESSAGE_TYPES */].COLLISIONREPORT:
            _this._updateCollisions(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_9__api__["e" /* MESSAGE_TYPES */].VEHICLEREPORT:
            _this._updateVehicles(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_9__api__["e" /* MESSAGE_TYPES */].CONSTRAINTREPORT:
            _this._updateConstraints(data);
            break;
          default:
        }
      } else if (data.cmd) {
        // non-transferable object
        switch (data.cmd) {
          case 'objectReady':
            _temp = data.params;
            if (_this._objects[_temp]) _this._objects[_temp].dispatchEvent('ready');
            break;

          case 'worldReady':
            _this.dispatchEvent('ready');
            break;

          case 'ammoLoaded':
            console.log("Physics loading time: " + (performance.now() - start) + "ms");
            break;

          case 'vehicle':
            window.test = data;
            break;

          default:
            // Do nothing, just show the message
            console.debug('Received: ' + data.cmd);
            console.dir(data.params);
            break;
        }
      } else {
        switch (data[0]) {
          case __WEBPACK_IMPORTED_MODULE_9__api__["e" /* MESSAGE_TYPES */].WORLDREPORT:
            _this._updateScene(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_9__api__["e" /* MESSAGE_TYPES */].COLLISIONREPORT:
            _this._updateCollisions(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_9__api__["e" /* MESSAGE_TYPES */].VEHICLEREPORT:
            _this._updateVehicles(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_9__api__["e" /* MESSAGE_TYPES */].CONSTRAINTREPORT:
            _this._updateConstraints(data);
            break;
          default:
        }
      }
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WorldModule, [{
    key: '_updateScene',
    value: function _updateScene(data) {
      var index = data[1];

      while (index--) {
        var offset = 2 + index * __WEBPACK_IMPORTED_MODULE_9__api__["f" /* REPORT_ITEMSIZE */];
        var object = this._objects[data[offset]];
        var component = object.component;
        var _physijs = component._physijs;

        if (object === null) continue;

        if (component.__dirtyPosition === false) {
          object.position.set(data[offset + 1], data[offset + 2], data[offset + 3]);

          component.__dirtyPosition = false;
        }

        if (component.__dirtyRotation === false) {
          object.quaternion.set(data[offset + 4], data[offset + 5], data[offset + 6], data[offset + 7]);

          component.__dirtyRotation = false;
        }

        _physijs.linearVelocity.set(data[offset + 8], data[offset + 9], data[offset + 10]);

        _physijs.angularVelocity.set(data[offset + 11], data[offset + 12], data[offset + 13]);
      }

      if (this.SUPPORT_TRANSFERABLE) this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker

      this._is_simulating = false;
      this.dispatchEvent('update');
    }
  }, {
    key: '_updateSoftbodies',
    value: function _updateSoftbodies(data) {
      var index = data[1],
          offset = 2;

      while (index--) {
        var size = data[offset + 1];
        var object = this._objects[data[offset]];
        var _physijs = object.component._physijs;

        if (object === null) continue;

        var attributes = object.geometry.attributes;
        var volumePositions = attributes.position.array;

        var offsetVert = offset + 2;

        if (_physijs.type === "softTrimesh") {
          var volumeNormals = attributes.normal.array;

          for (var i = 0; i < size; i++) {
            var offs = offsetVert + i * 18;

            var x1 = data[offs];
            var y1 = data[offs + 1];
            var z1 = data[offs + 2];

            var nx1 = data[offs + 3];
            var ny1 = data[offs + 4];
            var nz1 = data[offs + 5];

            var x2 = data[offs + 6];
            var y2 = data[offs + 7];
            var z2 = data[offs + 8];

            var nx2 = data[offs + 9];
            var ny2 = data[offs + 10];
            var nz2 = data[offs + 11];

            var x3 = data[offs + 12];
            var y3 = data[offs + 13];
            var z3 = data[offs + 14];

            var nx3 = data[offs + 15];
            var ny3 = data[offs + 16];
            var nz3 = data[offs + 17];

            var i9 = i * 9;

            volumePositions[i9] = x1;
            volumePositions[i9 + 1] = y1;
            volumePositions[i9 + 2] = z1;

            volumePositions[i9 + 3] = x2;
            volumePositions[i9 + 4] = y2;
            volumePositions[i9 + 5] = z2;

            volumePositions[i9 + 6] = x3;
            volumePositions[i9 + 7] = y3;
            volumePositions[i9 + 8] = z3;

            volumeNormals[i9] = nx1;
            volumeNormals[i9 + 1] = ny1;
            volumeNormals[i9 + 2] = nz1;

            volumeNormals[i9 + 3] = nx2;
            volumeNormals[i9 + 4] = ny2;
            volumeNormals[i9 + 5] = nz2;

            volumeNormals[i9 + 6] = nx3;
            volumeNormals[i9 + 7] = ny3;
            volumeNormals[i9 + 8] = nz3;
          }

          attributes.normal.needsUpdate = true;
        } else if (_physijs.type === "softRopeMesh") {
          for (var _i = 0; _i < size; _i++) {
            var _offs = offsetVert + _i * 3;

            var x = data[_offs];
            var y = data[_offs + 1];
            var z = data[_offs + 2];

            volumePositions[_i * 3] = x;
            volumePositions[_i * 3 + 1] = y;
            volumePositions[_i * 3 + 2] = z;
          }
        } else {
          var _volumeNormals = attributes.normal.array;

          for (var _i2 = 0; _i2 < size; _i2++) {
            var _offs2 = offsetVert + _i2 * 6;

            var _x = data[_offs2];
            var _y = data[_offs2 + 1];
            var _z = data[_offs2 + 2];

            var nx = data[_offs2 + 3];
            var ny = data[_offs2 + 4];
            var nz = data[_offs2 + 5];

            volumePositions[_i2 * 3] = _x;
            volumePositions[_i2 * 3 + 1] = _y;
            volumePositions[_i2 * 3 + 2] = _z;

            // FIXME: Normals are pointed to look inside;
            _volumeNormals[_i2 * 3] = nx;
            _volumeNormals[_i2 * 3 + 1] = ny;
            _volumeNormals[_i2 * 3 + 2] = nz;
          }

          attributes.normal.needsUpdate = true;
        }

        attributes.position.needsUpdate = true;

        offset += 2 + size * 18;
      }

      // if (this.SUPPORT_TRANSFERABLE)
      //   this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker

      this._is_simulating = false;
    }
  }, {
    key: '_updateVehicles',
    value: function _updateVehicles(data) {
      var vehicle = void 0,
          wheel = void 0;

      for (var i = 0; i < (data.length - 1) / __WEBPACK_IMPORTED_MODULE_9__api__["h" /* VEHICLEREPORT_ITEMSIZE */]; i++) {
        var offset = 1 + i * __WEBPACK_IMPORTED_MODULE_9__api__["h" /* VEHICLEREPORT_ITEMSIZE */];
        vehicle = this._vehicles[data[offset]];

        if (vehicle === null) continue;

        wheel = vehicle.wheels[data[offset + 1]];

        wheel.position.set(data[offset + 2], data[offset + 3], data[offset + 4]);

        wheel.quaternion.set(data[offset + 5], data[offset + 6], data[offset + 7], data[offset + 8]);
      }

      if (this.SUPPORT_TRANSFERABLE) this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker
    }
  }, {
    key: '_updateConstraints',
    value: function _updateConstraints(data) {
      var constraint = void 0,
          object = void 0;

      for (var i = 0; i < (data.length - 1) / __WEBPACK_IMPORTED_MODULE_9__api__["i" /* CONSTRAINTREPORT_ITEMSIZE */]; i++) {
        var offset = 1 + i * __WEBPACK_IMPORTED_MODULE_9__api__["i" /* CONSTRAINTREPORT_ITEMSIZE */];
        constraint = this._constraints[data[offset]];
        object = this._objects[data[offset + 1]];

        if (constraint === undefined || object === undefined) continue;

        __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */].set(data[offset + 2], data[offset + 3], data[offset + 4]);

        __WEBPACK_IMPORTED_MODULE_9__api__["l" /* temp1Matrix4 */].extractRotation(object.matrix);
        __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */].applyMatrix4(__WEBPACK_IMPORTED_MODULE_9__api__["l" /* temp1Matrix4 */]);

        constraint.positiona.addVectors(object.position, __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */]);
        constraint.appliedImpulse = data[offset + 5];
      }

      if (this.SUPPORT_TRANSFERABLE) this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker
    }
  }, {
    key: '_updateCollisions',
    value: function _updateCollisions(data) {
      /**
       * #TODO
       * This is probably the worst way ever to handle collisions. The inherent evilness is a residual
       * effect from the previous version's evilness which mutated when switching to transferable objects.
       *
       * If you feel inclined to make this better, please do so.
       */

      var collisions = {},
          normal_offsets = {};

      // Build collision manifest
      for (var i = 0; i < data[1]; i++) {
        var offset = 2 + i * __WEBPACK_IMPORTED_MODULE_9__api__["g" /* COLLISIONREPORT_ITEMSIZE */];
        var object = data[offset];
        var object2 = data[offset + 1];

        normal_offsets[object + '-' + object2] = offset + 2;
        normal_offsets[object2 + '-' + object] = -1 * (offset + 2);

        // Register collisions for both the object colliding and the object being collided with
        if (!collisions[object]) collisions[object] = [];
        collisions[object].push(object2);

        if (!collisions[object2]) collisions[object2] = [];
        collisions[object2].push(object);
      }

      // Deal with collisions
      for (var id1 in this._objects) {
        if (!this._objects.hasOwnProperty(id1)) continue;
        var _object = this._objects[id1];
        var component = _object.component;
        var _physijs = component._physijs;
        if (_object === null) continue;

        // If object touches anything, ...
        if (collisions[id1]) {
          // Clean up touches array
          for (var j = 0; j < _physijs.touches.length; j++) {
            if (collisions[id1].indexOf(_physijs.touches[j]) === -1) _physijs.touches.splice(j--, 1);
          }

          // Handle each colliding object
          for (var _j = 0; _j < collisions[id1].length; _j++) {
            var id2 = collisions[id1][_j];
            var _object2 = this._objects[id2];
            var component2 = _object2.component;
            var _physijs2 = component2._physijs;

            if (_object2) {
              // If object was not already touching object2, notify object
              if (_physijs.touches.indexOf(id2) === -1) {
                _physijs.touches.push(id2);

                __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */].subVectors(component.getLinearVelocity(), component2.getLinearVelocity());
                var temp1 = __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */].clone();

                __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */].subVectors(component.getAngularVelocity(), component2.getAngularVelocity());
                var temp2 = __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */].clone();

                var normal_offset = normal_offsets[_physijs.id + '-' + _physijs2.id];

                if (normal_offset > 0) {
                  __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */].set(-data[normal_offset], -data[normal_offset + 1], -data[normal_offset + 2]);
                } else {
                  normal_offset *= -1;

                  __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */].set(data[normal_offset], data[normal_offset + 1], data[normal_offset + 2]);
                }

                component.emit('collision', _object2, temp1, temp2, __WEBPACK_IMPORTED_MODULE_9__api__["j" /* temp1Vector3 */]);
              }
            }
          }
        } else _physijs.touches.length = 0; // not touching other objects
      }

      this.collisions = collisions;

      if (this.SUPPORT_TRANSFERABLE) this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker
    }
  }, {
    key: 'addConstraint',
    value: function addConstraint(constraint, show_marker) {
      constraint.id = this.getObjectId();
      this._constraints[constraint.id] = constraint;
      constraint.worldModule = this;
      this.execute('addConstraint', constraint.getDefinition());

      if (show_marker) {
        var marker = void 0;

        switch (constraint.type) {
          case 'point':
            marker = new __WEBPACK_IMPORTED_MODULE_5_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_5_three__["SphereGeometry"](1.5), new __WEBPACK_IMPORTED_MODULE_5_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);
            this._objects[constraint.objecta].add(marker);
            break;

          case 'hinge':
            marker = new __WEBPACK_IMPORTED_MODULE_5_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_5_three__["SphereGeometry"](1.5), new __WEBPACK_IMPORTED_MODULE_5_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);
            this._objects[constraint.objecta].add(marker);
            break;

          case 'slider':
            marker = new __WEBPACK_IMPORTED_MODULE_5_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_5_three__["BoxGeometry"](10, 1, 1), new __WEBPACK_IMPORTED_MODULE_5_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);

            // This rotation isn't right if all three axis are non-0 values
            // TODO: change marker's rotation order to ZYX
            marker.rotation.set(constraint.axis.y, // yes, y and
            constraint.axis.x, // x axis are swapped
            constraint.axis.z);
            this._objects[constraint.objecta].add(marker);
            break;

          case 'conetwist':
            marker = new __WEBPACK_IMPORTED_MODULE_5_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_5_three__["SphereGeometry"](1.5), new __WEBPACK_IMPORTED_MODULE_5_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);
            this._objects[constraint.objecta].add(marker);
            break;

          case 'dof':
            marker = new __WEBPACK_IMPORTED_MODULE_5_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_5_three__["SphereGeometry"](1.5), new __WEBPACK_IMPORTED_MODULE_5_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);
            this._objects[constraint.objecta].add(marker);
            break;
          default:
        }
      }

      return constraint;
    }
  }, {
    key: 'onSimulationResume',
    value: function onSimulationResume() {
      this.execute('onSimulationResume', {});
    }
  }, {
    key: 'removeConstraint',
    value: function removeConstraint(constraint) {
      if (this._constraints[constraint.id] !== undefined) {
        this.execute('removeConstraint', { id: constraint.id });
        delete this._constraints[constraint.id];
      }
    }
  }, {
    key: 'execute',
    value: function execute(cmd, params) {
      this._worker.postMessage({ cmd: cmd, params: params });
    }
  }, {
    key: 'onAddCallback',
    value: function onAddCallback(component) {
      var object = component.native;
      var _physijs = object._physijs || object.component._physijs;

      if (_physijs) {
        component.manager.addDependency('module:world', this);
        _physijs.id = this.getObjectId();

        if (object instanceof __WEBPACK_IMPORTED_MODULE_7__vehicle_vehicle__["a" /* Vehicle */]) {
          this.onAddCallback(object.mesh);
          this._vehicles[_physijs.id] = object;
          this.execute('addVehicle', _physijs);
        } else {
          component.__dirtyPosition = false;
          component.__dirtyRotation = false;
          this._objects[_physijs.id] = object;

          if (object.children.length) {
            _physijs.children = [];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__api__["d" /* addObjectChildren */])(object, object);
          }

          if (object.material._physijs) {
            if (this._materials_ref_counts.hasOwnProperty(object.material._physijs.id)) this._materials_ref_counts[object.material._physijs.id]++;else {
              this.execute('registerMaterial', object.material._physijs);
              _physijs.materialId = object.material._physijs.id;
              this._materials_ref_counts[object.material._physijs.id] = 1;
            }
          }

          // Object starting position + rotation
          _physijs.position = {
            x: object.position.x,
            y: object.position.y,
            z: object.position.z
          };

          _physijs.rotation = {
            x: object.quaternion.x,
            y: object.quaternion.y,
            z: object.quaternion.z,
            w: object.quaternion.w
          };

          if (_physijs.isSoftbody) {
            object.position.set(0, 0, 0);
            object.quaternion.set(0, 0, 0, 1);
          }

          // Check for scaling
          // var mass_scaling = new Vector3(1, 1, 1);

          if (_physijs.width) _physijs.width *= object.scale.x;
          if (_physijs.height) _physijs.height *= object.scale.y;
          if (_physijs.depth) _physijs.depth *= object.scale.z;

          this.execute('addObject', _physijs);
        }

        component.emit('physics:added');
      }
    }
  }, {
    key: 'onRemoveCallback',
    value: function onRemoveCallback(component) {
      var object = component.native;

      if (object instanceof __WEBPACK_IMPORTED_MODULE_7__vehicle_vehicle__["a" /* Vehicle */]) {
        this.execute('removeVehicle', { id: object._physijs.id });
        while (object.wheels.length) {
          this.remove(object.wheels.pop());
        }this.remove(object.mesh);
        this._vehicles[object._physijs.id] = null;
      } else {
        // Mesh.prototype.remove.call(this, object);

        if (object._physijs) {
          component.manager.removeDependency('module:world');
          this._objects[object._physijs.id] = null;
          this.execute('removeObject', { id: object._physijs.id });
        }
      }
      if (object.material && object.material._physijs && this._materials_ref_counts.hasOwnProperty(object.material._physijs.id)) {
        this._materials_ref_counts[object.material._physijs.id]--;

        if (this._materials_ref_counts[object.material._physijs.id] === 0) {
          this.execute('unRegisterMaterial', object.material._physijs);
          this._materials_ref_counts[object.material._physijs.id] = null;
        }
      }
    }
  }, {
    key: 'defer',
    value: function defer(func, args) {
      var _this2 = this;

      return new Promise(function (resolve) {
        if (_this2.isLoaded) {
          func.apply(undefined, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(args));
          resolve();
        } else _this2.loader.then(function () {
          func.apply(undefined, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(args));
          resolve();
        });
      });
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.addDependency('physicsWorker', this._worker);
    }
  }, {
    key: 'integrate',
    value: function integrate(params, self) {
      var _this3 = this;

      // ...

      this.setFixedTimeStep = function (fixedTimeStep) {
        if (fixedTimeStep) self.execute('setFixedTimeStep', fixedTimeStep);
      };

      this.setGravity = function (gravity) {
        if (gravity) self.execute('setGravity', gravity);
      };

      this.addConstraint = self.addConstraint.bind(self);

      this.simulate = function (timeStep, maxSubSteps) {
        if (self._stats) self._stats.begin();

        if (self._is_simulating) return false;

        self._is_simulating = true;

        for (var object_id in self._objects) {
          if (!self._objects.hasOwnProperty(object_id)) continue;

          var object = self._objects[object_id];
          var component = object.component;
          var _physijs = component._physijs;

          if (object !== null && (component.__dirtyPosition || component.__dirtyRotation)) {
            var update = { id: _physijs.id };

            if (component.__dirtyPosition) {
              update.pos = {
                x: object.position.x,
                y: object.position.y,
                z: object.position.z
              };

              if (_physijs.isSoftbody) object.position.set(0, 0, 0);

              component.__dirtyPosition = false;
            }

            if (component.__dirtyRotation) {
              update.quat = {
                x: object.quaternion.x,
                y: object.quaternion.y,
                z: object.quaternion.z,
                w: object.quaternion.w
              };

              if (_physijs.isSoftbody) object.rotation.set(0, 0, 0);

              component.__dirtyRotation = false;
            }

            self.execute('updateTransform', update);
          }
        }

        self.execute('simulate', { timeStep: timeStep, maxSubSteps: maxSubSteps });

        if (self._stats) self._stats.end();
        return true;
      };

      // const simulateProcess = (t) => {
      //   window.requestAnimationFrame(simulateProcess);

      //   this.simulate(1/60, 1); // delta, 1
      // }

      // simulateProcess();

      self.loader.then(function () {
        new WHS.Loop(function (clock) {
          _this3.simulate(clock.getDelta(), 1); // delta, 1
        }).start(_this3);

        _this3.setGravity(params.gravity);
      });
    }
  }]);

  return WorldModule;
}(__WEBPACK_IMPORTED_MODULE_8__eventable__["a" /* Eventable */]);



/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WorldModule__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__WorldModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BoxModule__ = __webpack_require__(58);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__BoxModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CapsuleModule__ = __webpack_require__(59);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__CapsuleModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ConcaveModule__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__ConcaveModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConvexModule__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__ConvexModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CylinderModule__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__CylinderModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PlaneModule__ = __webpack_require__(64);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__PlaneModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SphereModule__ = __webpack_require__(66);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__SphereModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SoftbodyModule__ = __webpack_require__(65);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__SoftbodyModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ClothModule__ = __webpack_require__(60);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__ClothModule__["a"]; });




// export * from './coneMesh';


// export * from './heightfieldMesh';




// export * from './ropeMesh';

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tunning__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tunning__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__vehicle__["a"]; });



/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _assign = __webpack_require__(71);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(74);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(72);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(40);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _typeof2 = __webpack_require__(40);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _from = __webpack_require__(70);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(111);
module.exports = __webpack_require__(5).Array.from;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(113);
module.exports = __webpack_require__(5).Object.assign;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(114);
var $Object = __webpack_require__(5).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(115);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(116);
module.exports = __webpack_require__(5).Object.setPrototypeOf;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(118);
__webpack_require__(117);
__webpack_require__(119);
__webpack_require__(120);
module.exports = __webpack_require__(5).Symbol;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(121);
module.exports = __webpack_require__(36).f('iterator');

/***/ },
/* 88 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 89 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12)
  , toLength  = __webpack_require__(49)
  , toIndex   = __webpack_require__(109);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22)
  , TAG = __webpack_require__(3)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $defineProperty = __webpack_require__(7)
  , createDesc      = __webpack_require__(19);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18)
  , gOPS    = __webpack_require__(28)
  , pIE     = __webpack_require__(20);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(17)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var create         = __webpack_require__(27)
  , descriptor     = __webpack_require__(19)
  , setToStringTag = __webpack_require__(29)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(3)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ },
/* 100 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(18)
  , toIObject = __webpack_require__(12);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(21)('meta')
  , isObject = __webpack_require__(16)
  , has      = __webpack_require__(11)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(15)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(18)
  , gOPS     = __webpack_require__(28)
  , pIE      = __webpack_require__(20)
  , toObject = __webpack_require__(33)
  , IObject  = __webpack_require__(43)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(15)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(13)
  , getKeys  = __webpack_require__(18);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12)
  , gOPN      = __webpack_require__(46).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(11)
  , toObject    = __webpack_require__(33)
  , IE_PROTO    = __webpack_require__(30)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(16)
  , anObject = __webpack_require__(13);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(23)(Function.call, __webpack_require__(45).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32)
  , defined   = __webpack_require__(24);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(91)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(17);
module.exports = __webpack_require__(5).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var ctx            = __webpack_require__(23)
  , $export        = __webpack_require__(10)
  , toObject       = __webpack_require__(33)
  , call           = __webpack_require__(97)
  , isArrayIter    = __webpack_require__(95)
  , toLength       = __webpack_require__(49)
  , createProperty = __webpack_require__(92)
  , getIterFn      = __webpack_require__(110);

$export($export.S + $export.F * !__webpack_require__(99)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var addToUnscopables = __webpack_require__(89)
  , step             = __webpack_require__(100)
  , Iterators        = __webpack_require__(17)
  , toIObject        = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(44)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(103)});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(27)});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(107).set});

/***/ },
/* 117 */
/***/ function(module, exports) {



/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// ECMAScript 6 symbols shim
var global         = __webpack_require__(6)
  , has            = __webpack_require__(11)
  , DESCRIPTORS    = __webpack_require__(9)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(48)
  , META           = __webpack_require__(102).KEY
  , $fails         = __webpack_require__(15)
  , shared         = __webpack_require__(31)
  , setToStringTag = __webpack_require__(29)
  , uid            = __webpack_require__(21)
  , wks            = __webpack_require__(3)
  , wksExt         = __webpack_require__(36)
  , wksDefine      = __webpack_require__(35)
  , keyOf          = __webpack_require__(101)
  , enumKeys       = __webpack_require__(93)
  , isArray        = __webpack_require__(96)
  , anObject       = __webpack_require__(13)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(34)
  , createDesc     = __webpack_require__(19)
  , _create        = __webpack_require__(27)
  , gOPNExt        = __webpack_require__(105)
  , $GOPD          = __webpack_require__(45)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(18)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(46).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(20).f  = $propertyIsEnumerable;
  __webpack_require__(28).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(26)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(35)('asyncIterator');

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(35)('observable');

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(112);
var global        = __webpack_require__(6)
  , hide          = __webpack_require__(14)
  , Iterators     = __webpack_require__(17)
  , TO_STRING_TAG = __webpack_require__(3)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 122 */
/***/ function(module, exports) {

// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;
module.exports = function(content, url) {
	try {
		try {
			var blob;
			try { // BlobBuilder = Deprecated, but widely implemented
				var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
				blob = new BlobBuilder();
				blob.append(content);
				blob = blob.getBlob();
			} catch(e) { // The proposed API
				blob = new Blob([content]);
			}
			return new Worker(URL.createObjectURL(blob));
		} catch(e) {
			return new Worker('data:application/javascript,' + encodeURIComponent(content));
		}
	} catch(e) {
		return new Worker(url);
	}
}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

module.exports = function() {
	return __webpack_require__(122)("/*! Physics module \"Ammonext\" v0.0.1-dev.1 */\n/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId])\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// identity function for calling harmony imports with the correct context\n/******/ \t__webpack_require__.i = function(value) { return value; };\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ function(module, exports) {\n\nvar transferableMessage = self.webkitPostMessage || self.postMessage,\n\n\n// enum\nMESSAGE_TYPES = {\n  WORLDREPORT: 0,\n  COLLISIONREPORT: 1,\n  VEHICLEREPORT: 2,\n  CONSTRAINTREPORT: 3,\n  SOFTREPORT: 4\n};\n\n// temp variables\nvar _object = void 0,\n    _vector = void 0,\n    _transform = void 0,\n    _transform_pos = void 0,\n    _softbody_enabled = false,\n    last_simulation_duration = 0,\n    _num_objects = 0,\n    _num_rigidbody_objects = 0,\n    _num_softbody_objects = 0,\n    _num_wheels = 0,\n    _num_constraints = 0,\n    _softbody_report_size = 0,\n\n\n// world variables\nfixedTimeStep = void 0,\n    // used when calling stepSimulation\nlast_simulation_time = void 0,\n    world = void 0,\n    _vec3_1 = void 0,\n    _vec3_2 = void 0,\n    _vec3_3 = void 0,\n    _quat = void 0;\n\n// private cache\nvar public_functions = {},\n    _objects = [],\n    _vehicles = [],\n    _constraints = [],\n    _objects_ammo = {},\n    _object_shapes = {},\n\n\n// The following objects are to track objects that ammo.js doesn't clean\n// up. All are cleaned up when they're corresponding body is destroyed.\n// Unfortunately, it's very difficult to get at these objects from the\n// body, so we have to track them ourselves.\n_motion_states = {},\n\n// Don't need to worry about it for cached shapes.\n_noncached_shapes = {},\n\n// A body with a compound shape always has a regular shape as well, so we\n// have track them separately.\n_compound_shapes = {};\n\n// object reporting\nvar REPORT_CHUNKSIZE = void 0,\n    // report array is increased in increments of this chunk size\nworldreport = void 0,\n    softreport = void 0,\n    collisionreport = void 0,\n    vehiclereport = void 0,\n    constraintreport = void 0;\n\nvar WORLDREPORT_ITEMSIZE = 14,\n    // how many float values each reported item needs\nCOLLISIONREPORT_ITEMSIZE = 5,\n    // one float for each object id, and a Vec3 contact normal\nVEHICLEREPORT_ITEMSIZE = 9,\n    // vehicle id, wheel index, 3 for position, 4 for rotation\nCONSTRAINTREPORT_ITEMSIZE = 6; // constraint id, offset object, offset, applied impulse\n\nvar ab = new ArrayBuffer(1);\n\ntransferableMessage(ab, [ab]);\nvar SUPPORT_TRANSFERABLE = ab.byteLength === 0;\n\nvar getShapeFromCache = function getShapeFromCache(cache_key) {\n  if (_object_shapes[cache_key] !== undefined) return _object_shapes[cache_key];\n\n  return null;\n};\n\nvar setShapeCache = function setShapeCache(cache_key, shape) {\n  _object_shapes[cache_key] = shape;\n};\n\nvar createShape = function createShape(description) {\n  var shape = void 0;\n\n  _transform.setIdentity();\n  switch (description.type) {\n    case 'plane':\n      {\n        var cache_key = 'plane_' + description.normal.x + '_' + description.normal.y + '_' + description.normal.z;\n\n        if ((shape = getShapeFromCache(cache_key)) === null) {\n          _vec3_1.setX(description.normal.x);\n          _vec3_1.setY(description.normal.y);\n          _vec3_1.setZ(description.normal.z);\n          shape = new Ammo.btStaticPlaneShape(_vec3_1, 0);\n          setShapeCache(cache_key, shape);\n        }\n\n        break;\n      }\n    case 'box':\n      {\n        var _cache_key = 'box_' + description.width + '_' + description.height + '_' + description.depth;\n\n        if ((shape = getShapeFromCache(_cache_key)) === null) {\n          _vec3_1.setX(description.width / 2);\n          _vec3_1.setY(description.height / 2);\n          _vec3_1.setZ(description.depth / 2);\n          shape = new Ammo.btBoxShape(_vec3_1);\n          setShapeCache(_cache_key, shape);\n        }\n\n        break;\n      }\n    case 'sphere':\n      {\n        var _cache_key2 = 'sphere_' + description.radius;\n\n        if ((shape = getShapeFromCache(_cache_key2)) === null) {\n          shape = new Ammo.btSphereShape(description.radius);\n          setShapeCache(_cache_key2, shape);\n        }\n\n        break;\n      }\n    case 'cylinder':\n      {\n        var _cache_key3 = 'cylinder_' + description.width + '_' + description.height + '_' + description.depth;\n\n        if ((shape = getShapeFromCache(_cache_key3)) === null) {\n          _vec3_1.setX(description.width / 2);\n          _vec3_1.setY(description.height / 2);\n          _vec3_1.setZ(description.depth / 2);\n          shape = new Ammo.btCylinderShape(_vec3_1);\n          setShapeCache(_cache_key3, shape);\n        }\n\n        break;\n      }\n    case 'capsule':\n      {\n        var _cache_key4 = 'capsule_' + description.radius + '_' + description.height;\n\n        if ((shape = getShapeFromCache(_cache_key4)) === null) {\n          // In Bullet, capsule height excludes the end spheres\n          shape = new Ammo.btCapsuleShape(description.radius, description.height - 2 * description.radius);\n          setShapeCache(_cache_key4, shape);\n        }\n\n        break;\n      }\n    case 'cone':\n      {\n        var _cache_key5 = 'cone_' + description.radius + '_' + description.height;\n\n        if ((shape = getShapeFromCache(_cache_key5)) === null) {\n          shape = new Ammo.btConeShape(description.radius, description.height);\n          setShapeCache(_cache_key5, shape);\n        }\n\n        break;\n      }\n    case 'concave':\n      {\n        var triangle_mesh = new Ammo.btTriangleMesh();\n        if (!description.data.length) return false;\n        var data = description.data;\n\n        for (var i = 0; i < data.length / 9; i++) {\n          _vec3_1.setX(data[i * 9]);\n          _vec3_1.setY(data[i * 9 + 1]);\n          _vec3_1.setZ(data[i * 9 + 2]);\n\n          _vec3_2.setX(data[i * 9 + 3]);\n          _vec3_2.setY(data[i * 9 + 4]);\n          _vec3_2.setZ(data[i * 9 + 5]);\n\n          _vec3_3.setX(data[i * 9 + 6]);\n          _vec3_3.setY(data[i * 9 + 7]);\n          _vec3_3.setZ(data[i * 9 + 8]);\n\n          triangle_mesh.addTriangle(_vec3_1, _vec3_2, _vec3_3, false);\n        }\n\n        shape = new Ammo.btBvhTriangleMeshShape(triangle_mesh, true, true);\n\n        _noncached_shapes[description.id] = shape;\n\n        break;\n      }\n    case 'convex':\n      {\n        shape = new Ammo.btConvexHullShape();\n        var _data = description.data;\n\n        for (var _i = 0; _i < _data.length / 3; _i++) {\n          _vec3_1.setX(_data[_i * 3]);\n          _vec3_1.setY(_data[_i * 3 + 1]);\n          _vec3_1.setZ(_data[_i * 3 + 2]);\n\n          shape.addPoint(_vec3_1);\n        }\n\n        _noncached_shapes[description.id] = shape;\n\n        break;\n      }\n    case 'heightfield':\n      {\n        var xpts = description.xpts,\n            ypts = description.ypts,\n            points = description.points,\n            ptr = Ammo._malloc(4 * xpts * ypts);\n\n        for (var _i2 = 0, p = 0, p2 = 0; _i2 < xpts; _i2++) {\n          for (var j = 0; j < ypts; j++) {\n            Ammo.HEAPF32[ptr + p2 >> 2] = points[p];\n\n            p++;\n            p2 += 4;\n          }\n        }\n\n        shape = new Ammo.btHeightfieldTerrainShape(description.xpts, description.ypts, ptr, 1, -description.absMaxHeight, description.absMaxHeight, 2, 'PHY_FLOAT', false);\n\n        _vec3_1.setX(description.xsize / (description.xpts - 1));\n        _vec3_1.setY(description.ysize / (description.ypts - 1));\n        _vec3_1.setZ(1);\n\n        shape.setLocalScaling(_vec3_1);\n        _noncached_shapes[description.id] = shape;\n        break;\n      }\n    default:\n      // Not recognized\n      return;\n  }\n\n  return shape;\n};\n\nvar createSoftBody = function createSoftBody(description) {\n  var body = void 0;\n\n  var softBodyHelpers = new Ammo.btSoftBodyHelpers();\n\n  switch (description.type) {\n    case 'softTrimesh':\n      {\n        if (!description.aVertices.length) return false;\n\n        body = softBodyHelpers.CreateFromTriMesh(world.getWorldInfo(), description.aVertices, description.aIndices, description.aIndices.length / 3, false);\n\n        break;\n      }\n    case 'softClothMesh':\n      {\n        var cr = description.corners;\n\n        body = softBodyHelpers.CreatePatch(world.getWorldInfo(), new Ammo.btVector3(cr[0], cr[1], cr[2]), new Ammo.btVector3(cr[3], cr[4], cr[5]), new Ammo.btVector3(cr[6], cr[7], cr[8]), new Ammo.btVector3(cr[9], cr[10], cr[11]), description.segments[0], description.segments[1], 0, true);\n\n        break;\n      }\n    case 'softRopeMesh':\n      {\n        var data = description.data;\n\n        body = softBodyHelpers.CreateRope(world.getWorldInfo(), new Ammo.btVector3(data[0], data[1], data[2]), new Ammo.btVector3(data[3], data[4], data[5]), data[6] - 1, 0);\n\n        break;\n      }\n    default:\n      // Not recognized\n      return;\n  }\n\n  return body;\n};\n\npublic_functions.init = function () {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  if (params.wasmBuffer) {\n    importScripts(params.ammo);\n\n    self.Ammo = loadAmmoFromBinary(params.wasmBuffer);\n    transferableMessage({ cmd: 'ammoLoaded' });\n    public_functions.makeWorld(params);\n  } else {\n    importScripts(params.ammo);\n    transferableMessage({ cmd: 'ammoLoaded' });\n    public_functions.makeWorld(params);\n  }\n};\n\npublic_functions.makeWorld = function () {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  _transform = new Ammo.btTransform();\n  _transform_pos = new Ammo.btTransform();\n  _vec3_1 = new Ammo.btVector3(0, 0, 0);\n  _vec3_2 = new Ammo.btVector3(0, 0, 0);\n  _vec3_3 = new Ammo.btVector3(0, 0, 0);\n  _quat = new Ammo.btQuaternion(0, 0, 0, 0);\n\n  REPORT_CHUNKSIZE = params.reportsize || 50;\n\n  if (SUPPORT_TRANSFERABLE) {\n    // Transferable messages are supported, take advantage of them with TypedArrays\n    worldreport = new Float32Array(2 + REPORT_CHUNKSIZE * WORLDREPORT_ITEMSIZE); // message id + # of objects to report + chunk size * # of values per object\n    collisionreport = new Float32Array(2 + REPORT_CHUNKSIZE * COLLISIONREPORT_ITEMSIZE); // message id + # of collisions to report + chunk size * # of values per object\n    vehiclereport = new Float32Array(2 + REPORT_CHUNKSIZE * VEHICLEREPORT_ITEMSIZE); // message id + # of vehicles to report + chunk size * # of values per object\n    constraintreport = new Float32Array(2 + REPORT_CHUNKSIZE * CONSTRAINTREPORT_ITEMSIZE); // message id + # of constraints to report + chunk size * # of values per object\n  } else {\n    // Transferable messages are not supported, send data as normal arrays\n    worldreport = [];\n    collisionreport = [];\n    vehiclereport = [];\n    constraintreport = [];\n  }\n\n  worldreport[0] = MESSAGE_TYPES.WORLDREPORT;\n  collisionreport[0] = MESSAGE_TYPES.COLLISIONREPORT;\n  vehiclereport[0] = MESSAGE_TYPES.VEHICLEREPORT;\n  constraintreport[0] = MESSAGE_TYPES.CONSTRAINTREPORT;\n\n  var collisionConfiguration = params.softbody ? new Ammo.btSoftBodyRigidBodyCollisionConfiguration() : new Ammo.btDefaultCollisionConfiguration(),\n      dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration),\n      solver = new Ammo.btSequentialImpulseConstraintSolver();\n\n  var broadphase = void 0;\n\n  if (!params.broadphase) params.broadphase = { type: 'dynamic' };\n  // TODO!!!\n  /* if (params.broadphase.type === 'sweepprune') {\n    extend(params.broadphase, {\n      aabbmin: {\n        x: -50,\n        y: -50,\n        z: -50\n      },\n       aabbmax: {\n        x: 50,\n        y: 50,\n        z: 50\n      },\n    });\n  }*/\n\n  switch (params.broadphase.type) {\n    case 'sweepprune':\n      _vec3_1.setX(params.broadphase.aabbmin.x);\n      _vec3_1.setY(params.broadphase.aabbmin.y);\n      _vec3_1.setZ(params.broadphase.aabbmin.z);\n\n      _vec3_2.setX(params.broadphase.aabbmax.x);\n      _vec3_2.setY(params.broadphase.aabbmax.y);\n      _vec3_2.setZ(params.broadphase.aabbmax.z);\n\n      broadphase = new Ammo.btAxisSweep3(_vec3_1, _vec3_2);\n\n      break;\n    case 'dynamic':\n    default:\n      broadphase = new Ammo.btDbvtBroadphase();\n      break;\n  }\n\n  world = params.softbody ? new Ammo.btSoftRigidDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration, new Ammo.btDefaultSoftBodySolver()) : new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);\n  fixedTimeStep = params.fixedTimeStep;\n\n  if (params.softbody) _softbody_enabled = true;\n\n  transferableMessage({ cmd: 'worldReady' });\n};\n\npublic_functions.setFixedTimeStep = function (description) {\n  fixedTimeStep = description;\n};\n\npublic_functions.setGravity = function (description) {\n  _vec3_1.setX(description.x);\n  _vec3_1.setY(description.y);\n  _vec3_1.setZ(description.z);\n  world.setGravity(_vec3_1);\n};\n\npublic_functions.appendAnchor = function (description) {\n  _objects[description.obj].appendAnchor(description.node, _objects[description.obj2], description.collisionBetweenLinkedBodies, description.influence);\n};\n\npublic_functions.addObject = function (description) {\n  var body = void 0,\n      motionState = void 0;\n\n  if (description.type.indexOf('soft') !== -1) {\n    body = createSoftBody(description);\n\n    var sbConfig = body.get_m_cfg();\n\n    if (description.viterations) sbConfig.set_viterations(description.viterations);\n    if (description.piterations) sbConfig.set_piterations(description.piterations);\n    if (description.diterations) sbConfig.set_diterations(description.diterations);\n    if (description.citerations) sbConfig.set_citerations(description.citerations);\n    sbConfig.set_collisions(0x11);\n    sbConfig.set_kDF(description.friction);\n    sbConfig.set_kDP(description.damping);\n    if (description.pressure) sbConfig.set_kPR(description.pressure);\n    if (description.drag) sbConfig.set_kDG(description.drag);\n    if (description.lift) sbConfig.set_kLF(description.lift);\n    if (description.anchorHardness) sbConfig.set_kAHR(description.anchorHardness);\n    if (description.rigidHardness) sbConfig.set_kCHR(description.rigidHardness);\n\n    if (description.klst) body.get_m_materials().at(0).set_m_kLST(description.klst);\n    if (description.kast) body.get_m_materials().at(0).set_m_kAST(description.kast);\n    if (description.kvst) body.get_m_materials().at(0).set_m_kVST(description.kvst);\n\n    Ammo.castObject(body, Ammo.btCollisionObject).getCollisionShape().setMargin(description.margin ? description.margin : 0.1);\n    body.setActivationState(description.state || 4);\n    body.type = 0; // SoftBody.\n    if (description.type === 'softRopeMesh') body.rope = true;\n    if (description.type === 'softClothMesh') body.cloth = true;\n\n    _transform.setIdentity();\n\n    _vec3_1.setX(description.position.x);\n    _vec3_1.setY(description.position.y);\n    _vec3_1.setZ(description.position.z);\n    _transform.setOrigin(_vec3_1);\n\n    _quat.setX(description.rotation.x);\n    _quat.setY(description.rotation.y);\n    _quat.setZ(description.rotation.z);\n    _quat.setW(description.rotation.w);\n    _transform.setRotation(_quat);\n\n    body.transform(_transform);\n\n    body.setTotalMass(description.mass, false);\n    world.addSoftBody(body, 1, -1);\n    if (description.type === 'softTrimesh') _softbody_report_size += body.get_m_faces().size() * 3;else _softbody_report_size += body.get_m_nodes().size() * 3;\n\n    _num_softbody_objects++;\n  } else {\n    var shape = createShape(description);\n\n    if (!shape) return;\n\n    // If there are children then this is a compound shape\n    if (description.children) {\n      var compound_shape = new Ammo.btCompoundShape();\n      compound_shape.addChildShape(_transform, shape);\n\n      for (var i = 0; i < description.children.length; i++) {\n        var _child = description.children[i];\n\n        var trans = new Ammo.btTransform();\n        trans.setIdentity();\n\n        _vec3_1.setX(_child.position_offset.x);\n        _vec3_1.setY(_child.position_offset.y);\n        _vec3_1.setZ(_child.position_offset.z);\n        trans.setOrigin(_vec3_1);\n\n        _quat.setX(_child.rotation.x);\n        _quat.setY(_child.rotation.y);\n        _quat.setZ(_child.rotation.z);\n        _quat.setW(_child.rotation.w);\n        trans.setRotation(_quat);\n\n        shape = createShape(description.children[i]);\n        compound_shape.addChildShape(trans, shape);\n        Ammo.destroy(trans);\n      }\n\n      shape = compound_shape;\n      _compound_shapes[description.id] = shape;\n    }\n\n    _vec3_1.setX(description.scale.x);\n    _vec3_1.setY(description.scale.y);\n    _vec3_1.setZ(description.scale.z);\n\n    shape.setLocalScaling(_vec3_1);\n\n    _vec3_1.setX(0);\n    _vec3_1.setY(0);\n    _vec3_1.setZ(0);\n    shape.calculateLocalInertia(description.mass, _vec3_1);\n\n    _transform.setIdentity();\n\n    _vec3_2.setX(description.position.x);\n    _vec3_2.setY(description.position.y);\n    _vec3_2.setZ(description.position.z);\n    _transform.setOrigin(_vec3_2);\n\n    _quat.setX(description.rotation.x);\n    _quat.setY(description.rotation.y);\n    _quat.setZ(description.rotation.z);\n    _quat.setW(description.rotation.w);\n    _transform.setRotation(_quat);\n\n    motionState = new Ammo.btDefaultMotionState(_transform); // #TODO: btDefaultMotionState supports center of mass offset as second argument - implement\n    var rbInfo = new Ammo.btRigidBodyConstructionInfo(description.mass, motionState, shape, _vec3_1);\n\n    rbInfo.set_m_friction(description.friction);\n    rbInfo.set_m_restitution(description.restitution);\n    rbInfo.set_m_linearDamping(description.damping);\n    rbInfo.set_m_angularDamping(description.damping);\n\n    body = new Ammo.btRigidBody(rbInfo);\n    Ammo.castObject(body, Ammo.btCollisionObject).getCollisionShape().setMargin(description.margin ? description.margin : 0);\n    body.setActivationState(description.state || 4);\n    Ammo.destroy(rbInfo);\n\n    if (typeof description.collision_flags !== 'undefined') body.setCollisionFlags(description.collision_flags);\n\n    if (description.group && description.mask) world.addRigidBody(body, description.group, description.mask);else world.addRigidBody(body);\n    body.type = 1; // RigidBody.\n    _num_rigidbody_objects++;\n  }\n\n  body.activate();\n\n  body.id = description.id;\n  _objects[body.id] = body;\n  _motion_states[body.id] = motionState;\n\n  _objects_ammo[body.a === undefined ? body.ptr : body.a] = body.id;\n  _num_objects++;\n\n  transferableMessage({ cmd: 'objectReady', params: body.id });\n};\n\npublic_functions.addVehicle = function (description) {\n  var vehicle_tuning = new Ammo.btVehicleTuning();\n\n  vehicle_tuning.set_m_suspensionStiffness(description.suspension_stiffness);\n  vehicle_tuning.set_m_suspensionCompression(description.suspension_compression);\n  vehicle_tuning.set_m_suspensionDamping(description.suspension_damping);\n  vehicle_tuning.set_m_maxSuspensionTravelCm(description.max_suspension_travel);\n  vehicle_tuning.set_m_maxSuspensionForce(description.max_suspension_force);\n\n  var vehicle = new Ammo.btRaycastVehicle(vehicle_tuning, _objects[description.rigidBody], new Ammo.btDefaultVehicleRaycaster(world));\n\n  vehicle.tuning = vehicle_tuning;\n  _objects[description.rigidBody].setActivationState(4);\n  vehicle.setCoordinateSystem(0, 1, 2);\n\n  world.addVehicle(vehicle);\n  _vehicles[description.id] = vehicle;\n};\npublic_functions.removeVehicle = function (description) {\n  _vehicles[description.id] = null;\n};\n\npublic_functions.addWheel = function (description) {\n  if (_vehicles[description.id] !== undefined) {\n    var tuning = _vehicles[description.id].tuning;\n    if (description.tuning !== undefined) {\n      tuning = new Ammo.btVehicleTuning();\n      tuning.set_m_suspensionStiffness(description.tuning.suspension_stiffness);\n      tuning.set_m_suspensionCompression(description.tuning.suspension_compression);\n      tuning.set_m_suspensionDamping(description.tuning.suspension_damping);\n      tuning.set_m_maxSuspensionTravelCm(description.tuning.max_suspension_travel);\n      tuning.set_m_maxSuspensionForce(description.tuning.max_suspension_force);\n    }\n\n    _vec3_1.setX(description.connection_point.x);\n    _vec3_1.setY(description.connection_point.y);\n    _vec3_1.setZ(description.connection_point.z);\n\n    _vec3_2.setX(description.wheel_direction.x);\n    _vec3_2.setY(description.wheel_direction.y);\n    _vec3_2.setZ(description.wheel_direction.z);\n\n    _vec3_3.setX(description.wheel_axle.x);\n    _vec3_3.setY(description.wheel_axle.y);\n    _vec3_3.setZ(description.wheel_axle.z);\n\n    _vehicles[description.id].addWheel(_vec3_1, _vec3_2, _vec3_3, description.suspension_rest_length, description.wheel_radius, tuning, description.is_front_wheel);\n  }\n\n  _num_wheels++;\n\n  if (SUPPORT_TRANSFERABLE) {\n    vehiclereport = new Float32Array(1 + _num_wheels * VEHICLEREPORT_ITEMSIZE); // message id & ( # of objects to report * # of values per object )\n    vehiclereport[0] = MESSAGE_TYPES.VEHICLEREPORT;\n  } else vehiclereport = [MESSAGE_TYPES.VEHICLEREPORT];\n};\n\npublic_functions.setSteering = function (details) {\n  if (_vehicles[details.id] !== undefined) _vehicles[details.id].setSteeringValue(details.steering, details.wheel);\n};\n\npublic_functions.setBrake = function (details) {\n  if (_vehicles[details.id] !== undefined) _vehicles[details.id].setBrake(details.brake, details.wheel);\n};\n\npublic_functions.applyEngineForce = function (details) {\n  if (_vehicles[details.id] !== undefined) _vehicles[details.id].applyEngineForce(details.force, details.wheel);\n};\n\npublic_functions.removeObject = function (details) {\n  if (_objects[details.id].type === 0) {\n    _num_softbody_objects--;\n    _softbody_report_size -= _objects[details.id].get_m_nodes().size();\n    world.removeSoftBody(_objects[details.id]);\n  } else if (_objects[details.id].type === 1) {\n    _num_rigidbody_objects--;\n    world.removeRigidBody(_objects[details.id]);\n    Ammo.destroy(_motion_states[details.id]);\n  }\n\n  Ammo.destroy(_objects[details.id]);\n  if (_compound_shapes[details.id]) Ammo.destroy(_compound_shapes[details.id]);\n  if (_noncached_shapes[details.id]) Ammo.destroy(_noncached_shapes[details.id]);\n\n  _objects_ammo[_objects[details.id].a === undefined ? _objects[details.id].a : _objects[details.id].ptr] = null;\n  _objects[details.id] = null;\n  _motion_states[details.id] = null;\n\n  if (_compound_shapes[details.id]) _compound_shapes[details.id] = null;\n  if (_noncached_shapes[details.id]) _noncached_shapes[details.id] = null;\n  _num_objects--;\n};\n\npublic_functions.updateTransform = function (details) {\n  _object = _objects[details.id];\n\n  if (_object.type === 1) {\n    _object.getMotionState().getWorldTransform(_transform);\n\n    if (details.pos) {\n      _vec3_1.setX(details.pos.x);\n      _vec3_1.setY(details.pos.y);\n      _vec3_1.setZ(details.pos.z);\n      _transform.setOrigin(_vec3_1);\n    }\n\n    if (details.quat) {\n      _quat.setX(details.quat.x);\n      _quat.setY(details.quat.y);\n      _quat.setZ(details.quat.z);\n      _quat.setW(details.quat.w);\n      _transform.setRotation(_quat);\n    }\n\n    _object.setWorldTransform(_transform);\n    _object.activate();\n  } else if (_object.type === 0) {\n    // _object.getWorldTransform(_transform);\n\n    if (details.pos) {\n      _vec3_1.setX(details.pos.x);\n      _vec3_1.setY(details.pos.y);\n      _vec3_1.setZ(details.pos.z);\n      _transform.setOrigin(_vec3_1);\n    }\n\n    if (details.quat) {\n      _quat.setX(details.quat.x);\n      _quat.setY(details.quat.y);\n      _quat.setZ(details.quat.z);\n      _quat.setW(details.quat.w);\n      _transform.setRotation(_quat);\n    }\n\n    _object.transform(_transform);\n  }\n};\n\npublic_functions.updateMass = function (details) {\n  // #TODO: changing a static object into dynamic is buggy\n  _object = _objects[details.id];\n\n  // Per http://www.bulletphysics.org/Bullet/phpBB3/viewtopic.php?p=&f=9&t=3663#p13816\n  world.removeRigidBody(_object);\n\n  _vec3_1.setX(0);\n  _vec3_1.setY(0);\n  _vec3_1.setZ(0);\n\n  _object.setMassProps(details.mass, _vec3_1);\n  world.addRigidBody(_object);\n  _object.activate();\n};\n\npublic_functions.applyCentralImpulse = function (details) {\n  _vec3_1.setX(details.x);\n  _vec3_1.setY(details.y);\n  _vec3_1.setZ(details.z);\n\n  _objects[details.id].applyCentralImpulse(_vec3_1);\n  _objects[details.id].activate();\n};\n\npublic_functions.applyImpulse = function (details) {\n  _vec3_1.setX(details.impulse_x);\n  _vec3_1.setY(details.impulse_y);\n  _vec3_1.setZ(details.impulse_z);\n\n  _vec3_2.setX(details.x);\n  _vec3_2.setY(details.y);\n  _vec3_2.setZ(details.z);\n\n  _objects[details.id].applyImpulse(_vec3_1, _vec3_2);\n  _objects[details.id].activate();\n};\n\npublic_functions.applyTorque = function (details) {\n  _vec3_1.setX(details.torque_x);\n  _vec3_1.setY(details.torque_y);\n  _vec3_1.setZ(details.torque_z);\n\n  _objects[details.id].applyTorque(_vec3_1);\n  _objects[details.id].activate();\n};\n\npublic_functions.applyCentralForce = function (details) {\n  _vec3_1.setX(details.x);\n  _vec3_1.setY(details.y);\n  _vec3_1.setZ(details.z);\n\n  _objects[details.id].applyCentralForce(_vec3_1);\n  _objects[details.id].activate();\n};\n\npublic_functions.applyForce = function (details) {\n  _vec3_1.setX(details.force_x);\n  _vec3_1.setY(details.force_y);\n  _vec3_1.setZ(details.force_z);\n\n  _vec3_2.setX(details.x);\n  _vec3_2.setY(details.y);\n  _vec3_2.setZ(details.z);\n\n  _objects[details.id].applyForce(_vec3_1, _vec3_2);\n  _objects[details.id].activate();\n};\n\npublic_functions.onSimulationResume = function () {\n  last_simulation_time = Date.now();\n};\n\npublic_functions.setAngularVelocity = function (details) {\n  _vec3_1.setX(details.x);\n  _vec3_1.setY(details.y);\n  _vec3_1.setZ(details.z);\n\n  _objects[details.id].setAngularVelocity(_vec3_1);\n  _objects[details.id].activate();\n};\n\npublic_functions.setLinearVelocity = function (details) {\n  _vec3_1.setX(details.x);\n  _vec3_1.setY(details.y);\n  _vec3_1.setZ(details.z);\n\n  _objects[details.id].setLinearVelocity(_vec3_1);\n  _objects[details.id].activate();\n};\n\npublic_functions.setAngularFactor = function (details) {\n  _vec3_1.setX(details.x);\n  _vec3_1.setY(details.y);\n  _vec3_1.setZ(details.z);\n\n  _objects[details.id].setAngularFactor(_vec3_1);\n};\n\npublic_functions.setLinearFactor = function (details) {\n  _vec3_1.setX(details.x);\n  _vec3_1.setY(details.y);\n  _vec3_1.setZ(details.z);\n\n  _objects[details.id].setLinearFactor(_vec3_1);\n};\n\npublic_functions.setDamping = function (details) {\n  _objects[details.id].setDamping(details.linear, details.angular);\n};\n\npublic_functions.setCcdMotionThreshold = function (details) {\n  _objects[details.id].setCcdMotionThreshold(details.threshold);\n};\n\npublic_functions.setCcdSweptSphereRadius = function (details) {\n  _objects[details.id].setCcdSweptSphereRadius(details.radius);\n};\n\npublic_functions.addConstraint = function (details) {\n  var constraint = void 0;\n\n  switch (details.type) {\n\n    case 'point':\n      {\n        if (details.objectb === undefined) {\n          _vec3_1.setX(details.positiona.x);\n          _vec3_1.setY(details.positiona.y);\n          _vec3_1.setZ(details.positiona.z);\n\n          constraint = new Ammo.btPoint2PointConstraint(_objects[details.objecta], _vec3_1);\n        } else {\n          _vec3_1.setX(details.positiona.x);\n          _vec3_1.setY(details.positiona.y);\n          _vec3_1.setZ(details.positiona.z);\n\n          _vec3_2.setX(details.positionb.x);\n          _vec3_2.setY(details.positionb.y);\n          _vec3_2.setZ(details.positionb.z);\n\n          constraint = new Ammo.btPoint2PointConstraint(_objects[details.objecta], _objects[details.objectb], _vec3_1, _vec3_2);\n        }\n        break;\n      }\n    case 'hinge':\n      {\n        if (details.objectb === undefined) {\n          _vec3_1.setX(details.positiona.x);\n          _vec3_1.setY(details.positiona.y);\n          _vec3_1.setZ(details.positiona.z);\n\n          _vec3_2.setX(details.axis.x);\n          _vec3_2.setY(details.axis.y);\n          _vec3_2.setZ(details.axis.z);\n\n          constraint = new Ammo.btHingeConstraint(_objects[details.objecta], _vec3_1, _vec3_2);\n        } else {\n          _vec3_1.setX(details.positiona.x);\n          _vec3_1.setY(details.positiona.y);\n          _vec3_1.setZ(details.positiona.z);\n\n          _vec3_2.setX(details.positionb.x);\n          _vec3_2.setY(details.positionb.y);\n          _vec3_2.setZ(details.positionb.z);\n\n          _vec3_3.setX(details.axis.x);\n          _vec3_3.setY(details.axis.y);\n          _vec3_3.setZ(details.axis.z);\n\n          constraint = new Ammo.btHingeConstraint(_objects[details.objecta], _objects[details.objectb], _vec3_1, _vec3_2, _vec3_3, _vec3_3);\n        }\n        break;\n      }\n    case 'slider':\n      {\n        var transformb = void 0;\n        var transforma = new Ammo.btTransform();\n\n        _vec3_1.setX(details.positiona.x);\n        _vec3_1.setY(details.positiona.y);\n        _vec3_1.setZ(details.positiona.z);\n\n        transforma.setOrigin(_vec3_1);\n\n        var rotation = transforma.getRotation();\n        rotation.setEuler(details.axis.x, details.axis.y, details.axis.z);\n        transforma.setRotation(rotation);\n\n        if (details.objectb) {\n          transformb = new Ammo.btTransform();\n\n          _vec3_2.setX(details.positionb.x);\n          _vec3_2.setY(details.positionb.y);\n          _vec3_2.setZ(details.positionb.z);\n\n          transformb.setOrigin(_vec3_2);\n\n          rotation = transformb.getRotation();\n          rotation.setEuler(details.axis.x, details.axis.y, details.axis.z);\n          transformb.setRotation(rotation);\n\n          constraint = new Ammo.btSliderConstraint(_objects[details.objecta], _objects[details.objectb], transforma, transformb, true);\n        } else {\n          constraint = new Ammo.btSliderConstraint(_objects[details.objecta], transforma, true);\n        }\n\n        constraint.ta = transforma;\n        constraint.tb = transformb;\n\n        Ammo.destroy(transforma);\n        if (transformb !== undefined) Ammo.destroy(transformb);\n\n        break;\n      }\n    case 'conetwist':\n      {\n        var _transforma = new Ammo.btTransform();\n        _transforma.setIdentity();\n\n        var _transformb = new Ammo.btTransform();\n        _transformb.setIdentity();\n\n        _vec3_1.setX(details.positiona.x);\n        _vec3_1.setY(details.positiona.y);\n        _vec3_1.setZ(details.positiona.z);\n\n        _vec3_2.setX(details.positionb.x);\n        _vec3_2.setY(details.positionb.y);\n        _vec3_2.setZ(details.positionb.z);\n\n        _transforma.setOrigin(_vec3_1);\n        _transformb.setOrigin(_vec3_2);\n\n        var _rotation = _transforma.getRotation();\n        _rotation.setEulerZYX(-details.axisa.z, -details.axisa.y, -details.axisa.x);\n        _transforma.setRotation(_rotation);\n\n        _rotation = _transformb.getRotation();\n        _rotation.setEulerZYX(-details.axisb.z, -details.axisb.y, -details.axisb.x);\n        _transformb.setRotation(_rotation);\n\n        constraint = new Ammo.btConeTwistConstraint(_objects[details.objecta], _objects[details.objectb], _transforma, _transformb);\n\n        constraint.setLimit(Math.PI, 0, Math.PI);\n\n        constraint.ta = _transforma;\n        constraint.tb = _transformb;\n\n        Ammo.destroy(_transforma);\n        Ammo.destroy(_transformb);\n\n        break;\n      }\n    case 'dof':\n      {\n        var _transformb2 = void 0;\n\n        var _transforma2 = new Ammo.btTransform();\n        _transforma2.setIdentity();\n\n        _vec3_1.setX(details.positiona.x);\n        _vec3_1.setY(details.positiona.y);\n        _vec3_1.setZ(details.positiona.z);\n\n        _transforma2.setOrigin(_vec3_1);\n\n        var _rotation2 = _transforma2.getRotation();\n        _rotation2.setEulerZYX(-details.axisa.z, -details.axisa.y, -details.axisa.x);\n        _transforma2.setRotation(_rotation2);\n\n        if (details.objectb) {\n          _transformb2 = new Ammo.btTransform();\n          _transformb2.setIdentity();\n\n          _vec3_2.setX(details.positionb.x);\n          _vec3_2.setY(details.positionb.y);\n          _vec3_2.setZ(details.positionb.z);\n\n          _transformb2.setOrigin(_vec3_2);\n\n          _rotation2 = _transformb2.getRotation();\n          _rotation2.setEulerZYX(-details.axisb.z, -details.axisb.y, -details.axisb.x);\n          _transformb2.setRotation(_rotation2);\n\n          constraint = new Ammo.btGeneric6DofConstraint(_objects[details.objecta], _objects[details.objectb], _transforma2, _transformb2, true);\n        } else {\n          constraint = new Ammo.btGeneric6DofConstraint(_objects[details.objecta], _transforma2, true);\n        }\n\n        constraint.ta = _transforma2;\n        constraint.tb = _transformb2;\n\n        Ammo.destroy(_transforma2);\n        if (_transformb2 !== undefined) Ammo.destroy(_transformb2);\n\n        break;\n      }\n    default:\n      return;\n  }\n\n  world.addConstraint(constraint);\n\n  constraint.a = _objects[details.objecta];\n  constraint.b = _objects[details.objectb];\n\n  constraint.enableFeedback();\n  _constraints[details.id] = constraint;\n  _num_constraints++;\n\n  if (SUPPORT_TRANSFERABLE) {\n    constraintreport = new Float32Array(1 + _num_constraints * CONSTRAINTREPORT_ITEMSIZE); // message id & ( # of objects to report * # of values per object )\n    constraintreport[0] = MESSAGE_TYPES.CONSTRAINTREPORT;\n  } else constraintreport = [MESSAGE_TYPES.CONSTRAINTREPORT];\n};\n\npublic_functions.removeConstraint = function (details) {\n  var constraint = _constraints[details.id];\n\n  if (constraint !== undefined) {\n    world.removeConstraint(constraint);\n    _constraints[details.id] = null;\n    _num_constraints--;\n  }\n};\n\npublic_functions.constraint_setBreakingImpulseThreshold = function (details) {\n  var constraint = _constraints[details.id];\n  if (constraint !== undefind) constraint.setBreakingImpulseThreshold(details.threshold);\n};\n\npublic_functions.simulate = function () {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  if (world) {\n    if (params.timeStep && params.timeStep < fixedTimeStep) params.timeStep = fixedTimeStep;\n\n    params.maxSubSteps = params.maxSubSteps || Math.ceil(params.timeStep / fixedTimeStep); // If maxSubSteps is not defined, keep the simulation fully up to date\n\n    world.stepSimulation(params.timeStep, params.maxSubSteps, fixedTimeStep);\n\n    if (_vehicles.length > 0) reportVehicles();\n    reportCollisions();\n    if (_constraints.length > 0) reportConstraints();\n    reportWorld();\n    if (_softbody_enabled) reportWorld_softbodies();\n  }\n};\n\n// Constraint functions\npublic_functions.hinge_setLimits = function (params) {\n  _constraints[params.constraint].setLimit(params.low, params.high, 0, params.bias_factor, params.relaxation_factor);\n};\n\npublic_functions.hinge_enableAngularMotor = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.enableAngularMotor(true, params.velocity, params.acceleration);\n  constraint.a.activate();\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.hinge_disableMotor = function (params) {\n  _constraints[params.constraint].enableMotor(false);\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.slider_setLimits = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.setLowerLinLimit(params.lin_lower || 0);\n  constraint.setUpperLinLimit(params.lin_upper || 0);\n\n  constraint.setLowerAngLimit(params.ang_lower || 0);\n  constraint.setUpperAngLimit(params.ang_upper || 0);\n};\n\npublic_functions.slider_setRestitution = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.setSoftnessLimLin(params.linear || 0);\n  constraint.setSoftnessLimAng(params.angular || 0);\n};\n\npublic_functions.slider_enableLinearMotor = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.setTargetLinMotorVelocity(params.velocity);\n  constraint.setMaxLinMotorForce(params.acceleration);\n  constraint.setPoweredLinMotor(true);\n  constraint.a.activate();\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.slider_disableLinearMotor = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.setPoweredLinMotor(false);\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.slider_enableAngularMotor = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.setTargetAngMotorVelocity(params.velocity);\n  constraint.setMaxAngMotorForce(params.acceleration);\n  constraint.setPoweredAngMotor(true);\n  constraint.a.activate();\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.slider_disableAngularMotor = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.setPoweredAngMotor(false);\n  constraint.a.activate();\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.conetwist_setLimit = function (params) {\n  _constraints[params.constraint].setLimit(params.z, params.y, params.x); // ZYX order\n};\n\npublic_functions.conetwist_enableMotor = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.enableMotor(true);\n  constraint.a.activate();\n  constraint.b.activate();\n};\n\npublic_functions.conetwist_setMaxMotorImpulse = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.setMaxMotorImpulse(params.max_impulse);\n  constraint.a.activate();\n  constraint.b.activate();\n};\n\npublic_functions.conetwist_setMotorTarget = function (params) {\n  var constraint = _constraints[params.constraint];\n\n  _quat.setX(params.x);\n  _quat.setY(params.y);\n  _quat.setZ(params.z);\n  _quat.setW(params.w);\n\n  constraint.setMotorTarget(_quat);\n\n  constraint.a.activate();\n  constraint.b.activate();\n};\n\npublic_functions.conetwist_disableMotor = function (params) {\n  var constraint = _constraints[params.constraint];\n  constraint.enableMotor(false);\n  constraint.a.activate();\n  constraint.b.activate();\n};\n\npublic_functions.dof_setLinearLowerLimit = function (params) {\n  var constraint = _constraints[params.constraint];\n\n  _vec3_1.setX(params.x);\n  _vec3_1.setY(params.y);\n  _vec3_1.setZ(params.z);\n\n  constraint.setLinearLowerLimit(_vec3_1);\n  constraint.a.activate();\n\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.dof_setLinearUpperLimit = function (params) {\n  var constraint = _constraints[params.constraint];\n\n  _vec3_1.setX(params.x);\n  _vec3_1.setY(params.y);\n  _vec3_1.setZ(params.z);\n\n  constraint.setLinearUpperLimit(_vec3_1);\n  constraint.a.activate();\n\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.dof_setAngularLowerLimit = function (params) {\n  var constraint = _constraints[params.constraint];\n\n  _vec3_1.setX(params.x);\n  _vec3_1.setY(params.y);\n  _vec3_1.setZ(params.z);\n\n  constraint.setAngularLowerLimit(_vec3_1);\n  constraint.a.activate();\n\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.dof_setAngularUpperLimit = function (params) {\n  var constraint = _constraints[params.constraint];\n\n  _vec3_1.setX(params.x);\n  _vec3_1.setY(params.y);\n  _vec3_1.setZ(params.z);\n\n  constraint.setAngularUpperLimit(_vec3_1);\n  constraint.a.activate();\n\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.dof_enableAngularMotor = function (params) {\n  var constraint = _constraints[params.constraint];\n\n  var motor = constraint.getRotationalLimitMotor(params.which);\n  motor.set_m_enableMotor(true);\n  constraint.a.activate();\n\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.dof_configureAngularMotor = function (params) {\n  var constraint = _constraints[params.constraint],\n      motor = constraint.getRotationalLimitMotor(params.which);\n\n  motor.set_m_loLimit(params.low_angle);\n  motor.set_m_hiLimit(params.high_angle);\n  motor.set_m_targetVelocity(params.velocity);\n  motor.set_m_maxMotorForce(params.max_force);\n  constraint.a.activate();\n\n  if (constraint.b) constraint.b.activate();\n};\n\npublic_functions.dof_disableAngularMotor = function (params) {\n  var constraint = _constraints[params.constraint],\n      motor = constraint.getRotationalLimitMotor(params.which);\n\n  motor.set_m_enableMotor(false);\n  constraint.a.activate();\n\n  if (constraint.b) constraint.b.activate();\n};\n\nvar reportWorld = function reportWorld() {\n  if (SUPPORT_TRANSFERABLE && worldreport.length < 2 + _num_rigidbody_objects * WORLDREPORT_ITEMSIZE) {\n    worldreport = new Float32Array(2 // message id & # objects in report\n    + Math.ceil(_num_rigidbody_objects / REPORT_CHUNKSIZE) * REPORT_CHUNKSIZE * WORLDREPORT_ITEMSIZE // # of values needed * item size\n    );\n\n    worldreport[0] = MESSAGE_TYPES.WORLDREPORT;\n  }\n\n  worldreport[1] = _num_rigidbody_objects; // record how many objects we're reporting on\n\n  {\n    var i = 0,\n        index = _objects.length;\n\n    while (index--) {\n      var object = _objects[index];\n\n      if (object && object.type === 1) {\n        // RigidBodies.\n        // #TODO: we can't use center of mass transform when center of mass can change,\n        //        but getMotionState().getWorldTransform() screws up on objects that have been moved\n        // object.getMotionState().getWorldTransform( transform );\n        // object.getMotionState().getWorldTransform(_transform);\n\n        var transform = object.getCenterOfMassTransform();\n        var origin = transform.getOrigin();\n        var rotation = transform.getRotation();\n\n        // add values to report\n        var offset = 2 + i++ * WORLDREPORT_ITEMSIZE;\n\n        worldreport[offset] = object.id;\n\n        worldreport[offset + 1] = origin.x();\n        worldreport[offset + 2] = origin.y();\n        worldreport[offset + 3] = origin.z();\n\n        worldreport[offset + 4] = rotation.x();\n        worldreport[offset + 5] = rotation.y();\n        worldreport[offset + 6] = rotation.z();\n        worldreport[offset + 7] = rotation.w();\n\n        _vector = object.getLinearVelocity();\n        worldreport[offset + 8] = _vector.x();\n        worldreport[offset + 9] = _vector.y();\n        worldreport[offset + 10] = _vector.z();\n\n        _vector = object.getAngularVelocity();\n        worldreport[offset + 11] = _vector.x();\n        worldreport[offset + 12] = _vector.y();\n        worldreport[offset + 13] = _vector.z();\n      }\n    }\n  }\n\n  if (SUPPORT_TRANSFERABLE) transferableMessage(worldreport.buffer, [worldreport.buffer]);else transferableMessage(worldreport);\n};\n\nvar reportWorld_softbodies = function reportWorld_softbodies() {\n  // TODO: Add SUPPORTTRANSFERABLE.\n\n  softreport = new Float32Array(2 // message id & # objects in report\n  + _num_softbody_objects * 2 + _softbody_report_size * 6);\n\n  softreport[0] = MESSAGE_TYPES.SOFTREPORT;\n  softreport[1] = _num_softbody_objects; // record how many objects we're reporting on\n\n  {\n    var offset = 2,\n        index = _objects.length;\n\n    while (index--) {\n      var object = _objects[index];\n\n      if (object && object.type === 0) {\n        // SoftBodies.\n\n        softreport[offset] = object.id;\n\n        var offsetVert = offset + 2;\n\n        if (object.rope === true) {\n          var nodes = object.get_m_nodes();\n          var size = nodes.size();\n          softreport[offset + 1] = size;\n\n          for (var i = 0; i < size; i++) {\n            var node = nodes.at(i);\n            var vert = node.get_m_x();\n            var off = offsetVert + i * 3;\n\n            softreport[off] = vert.x();\n            softreport[off + 1] = vert.y();\n            softreport[off + 2] = vert.z();\n          }\n\n          offset += size * 6 + 2;\n        } else if (object.cloth) {\n          var _nodes = object.get_m_nodes();\n          var _size = _nodes.size();\n          softreport[offset + 1] = _size;\n\n          for (var _i3 = 0; _i3 < _size; _i3++) {\n            var _node = _nodes.at(_i3);\n            var _vert = _node.get_m_x();\n            var normal = _node.get_m_n();\n            var _off = offsetVert + _i3 * 6;\n\n            softreport[_off] = _vert.x();\n            softreport[_off + 1] = _vert.y();\n            softreport[_off + 2] = _vert.z();\n\n            softreport[_off + 3] = normal.x();\n            softreport[_off + 4] = normal.y();\n            softreport[_off + 5] = normal.z();\n          }\n\n          offset += _size * 6 + 2;\n        } else {\n          var faces = object.get_m_faces();\n          var _size2 = faces.size();\n          softreport[offset + 1] = _size2;\n\n          for (var _i4 = 0; _i4 < _size2; _i4++) {\n            var face = faces.at(_i4);\n\n            var node1 = face.get_m_n(0);\n            var node2 = face.get_m_n(1);\n            var node3 = face.get_m_n(2);\n\n            var vert1 = node1.get_m_x();\n            var vert2 = node2.get_m_x();\n            var vert3 = node3.get_m_x();\n\n            var normal1 = node1.get_m_n();\n            var normal2 = node2.get_m_n();\n            var normal3 = node3.get_m_n();\n\n            var _off2 = offsetVert + _i4 * 18;\n\n            softreport[_off2] = vert1.x();\n            softreport[_off2 + 1] = vert1.y();\n            softreport[_off2 + 2] = vert1.z();\n\n            softreport[_off2 + 3] = normal1.x();\n            softreport[_off2 + 4] = normal1.y();\n            softreport[_off2 + 5] = normal1.z();\n\n            softreport[_off2 + 6] = vert2.x();\n            softreport[_off2 + 7] = vert2.y();\n            softreport[_off2 + 8] = vert2.z();\n\n            softreport[_off2 + 9] = normal2.x();\n            softreport[_off2 + 10] = normal2.y();\n            softreport[_off2 + 11] = normal2.z();\n\n            softreport[_off2 + 12] = vert3.x();\n            softreport[_off2 + 13] = vert3.y();\n            softreport[_off2 + 14] = vert3.z();\n\n            softreport[_off2 + 15] = normal3.x();\n            softreport[_off2 + 16] = normal3.y();\n            softreport[_off2 + 17] = normal3.z();\n          }\n\n          offset += _size2 * 18 + 2;\n        }\n      }\n    }\n  }\n\n  // if (SUPPORT_TRANSFERABLE) transferableMessage(softreport.buffer, [softreport.buffer]);\n  // else transferableMessage(softreport);\n  transferableMessage(softreport);\n};\n\nvar reportCollisions = function reportCollisions() {\n  var dp = world.getDispatcher(),\n      num = dp.getNumManifolds();\n  // _collided = false;\n\n  if (SUPPORT_TRANSFERABLE) {\n    if (collisionreport.length < 2 + num * COLLISIONREPORT_ITEMSIZE) {\n      collisionreport = new Float32Array(2 // message id & # objects in report\n      + Math.ceil(_num_objects / REPORT_CHUNKSIZE) * REPORT_CHUNKSIZE * COLLISIONREPORT_ITEMSIZE // # of values needed * item size\n      );\n      collisionreport[0] = MESSAGE_TYPES.COLLISIONREPORT;\n    }\n  }\n\n  collisionreport[1] = 0; // how many collisions we're reporting on\n\n  for (var i = 0; i < num; i++) {\n    var manifold = dp.getManifoldByIndexInternal(i),\n        num_contacts = manifold.getNumContacts();\n\n    if (num_contacts === 0) continue;\n\n    for (var j = 0; j < num_contacts; j++) {\n      var pt = manifold.getContactPoint(j);\n\n      // if ( pt.getDistance() < 0 ) {\n      var offset = 2 + collisionreport[1]++ * COLLISIONREPORT_ITEMSIZE;\n      collisionreport[offset] = _objects_ammo[manifold.getBody0().ptr];\n      collisionreport[offset + 1] = _objects_ammo[manifold.getBody1().ptr];\n\n      _vector = pt.get_m_normalWorldOnB();\n      collisionreport[offset + 2] = _vector.x();\n      collisionreport[offset + 3] = _vector.y();\n      collisionreport[offset + 4] = _vector.z();\n      break;\n      // }\n      // transferableMessage(_objects_ammo);\n    }\n  }\n\n  if (SUPPORT_TRANSFERABLE) transferableMessage(collisionreport.buffer, [collisionreport.buffer]);else transferableMessage(collisionreport);\n};\n\nvar reportVehicles = function reportVehicles() {\n  if (SUPPORT_TRANSFERABLE) {\n    if (vehiclereport.length < 2 + _num_wheels * VEHICLEREPORT_ITEMSIZE) {\n      vehiclereport = new Float32Array(2 // message id & # objects in report\n      + Math.ceil(_num_wheels / REPORT_CHUNKSIZE) * REPORT_CHUNKSIZE * VEHICLEREPORT_ITEMSIZE // # of values needed * item size\n      );\n      vehiclereport[0] = MESSAGE_TYPES.VEHICLEREPORT;\n    }\n  }\n\n  {\n    var i = 0,\n        j = 0,\n        index = _vehicles.length;\n\n    while (index--) {\n      if (_vehicles[index]) {\n        var vehicle = _vehicles[index];\n\n        for (j = 0; j < vehicle.getNumWheels(); j++) {\n          // vehicle.updateWheelTransform( j, true );\n          // transform = vehicle.getWheelTransformWS( j );\n          var transform = vehicle.getWheelInfo(j).get_m_worldTransform();\n\n          var origin = transform.getOrigin();\n          var rotation = transform.getRotation();\n\n          // add values to report\n          var offset = 1 + i++ * VEHICLEREPORT_ITEMSIZE;\n\n          vehiclereport[offset] = index;\n          vehiclereport[offset + 1] = j;\n\n          vehiclereport[offset + 2] = origin.x();\n          vehiclereport[offset + 3] = origin.y();\n          vehiclereport[offset + 4] = origin.z();\n\n          vehiclereport[offset + 5] = rotation.x();\n          vehiclereport[offset + 6] = rotation.y();\n          vehiclereport[offset + 7] = rotation.z();\n          vehiclereport[offset + 8] = rotation.w();\n        }\n      }\n    }\n\n    if (SUPPORT_TRANSFERABLE && j !== 0) transferableMessage(vehiclereport.buffer, [vehiclereport.buffer]);else if (j !== 0) transferableMessage(vehiclereport);\n  }\n};\n\nvar reportConstraints = function reportConstraints() {\n  if (SUPPORT_TRANSFERABLE) {\n    if (constraintreport.length < 2 + _num_constraints * CONSTRAINTREPORT_ITEMSIZE) {\n      constraintreport = new Float32Array(2 // message id & # objects in report\n      + Math.ceil(_num_constraints / REPORT_CHUNKSIZE) * REPORT_CHUNKSIZE * CONSTRAINTREPORT_ITEMSIZE // # of values needed * item size\n      );\n      constraintreport[0] = MESSAGE_TYPES.CONSTRAINTREPORT;\n    }\n  }\n\n  {\n    var offset = 0,\n        i = 0,\n        index = _constraints.lenght;\n\n    while (index--) {\n      if (_constraints[index]) {\n        var _constraint = _constraints[index];\n        var offset_body = _constraint.a;\n        var transform = _constraint.ta;\n        var origin = transform.getOrigin();\n\n        // add values to report\n        offset = 1 + i++ * CONSTRAINTREPORT_ITEMSIZE;\n\n        constraintreport[offset] = index;\n        constraintreport[offset + 1] = offset_body.id;\n        constraintreport[offset + 2] = origin.x;\n        constraintreport[offset + 3] = origin.y;\n        constraintreport[offset + 4] = origin.z;\n        constraintreport[offset + 5] = _constraint.getBreakingImpulseThreshold();\n      }\n    }\n\n    if (SUPPORT_TRANSFERABLE && i !== 0) transferableMessage(constraintreport.buffer, [constraintreport.buffer]);else if (i !== 0) transferableMessage(constraintreport);\n  }\n};\n\nself.onmessage = function (event) {\n  if (event.data instanceof Float32Array) {\n    // transferable object\n    switch (event.data[0]) {\n      case MESSAGE_TYPES.WORLDREPORT:\n        {\n          worldreport = new Float32Array(event.data);\n          break;\n        }\n      case MESSAGE_TYPES.COLLISIONREPORT:\n        {\n          collisionreport = new Float32Array(event.data);\n          break;\n        }\n      case MESSAGE_TYPES.VEHICLEREPORT:\n        {\n          vehiclereport = new Float32Array(event.data);\n          break;\n        }\n      case MESSAGE_TYPES.CONSTRAINTREPORT:\n        {\n          constraintreport = new Float32Array(event.data);\n          break;\n        }\n      default:\n    }\n\n    return;\n  } else if (event.data.cmd && public_functions[event.data.cmd]) public_functions[event.data.cmd](event.data.params);\n};\n\n/***/ }\n/******/ ]);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDEyNTU3NTdmOTNhZGE5YmU0YjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlci5qcyJdLCJuYW1lcyI6WyJ0cmFuc2ZlcmFibGVNZXNzYWdlIiwic2VsZiIsIndlYmtpdFBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJNRVNTQUdFX1RZUEVTIiwiV09STERSRVBPUlQiLCJDT0xMSVNJT05SRVBPUlQiLCJWRUhJQ0xFUkVQT1JUIiwiQ09OU1RSQUlOVFJFUE9SVCIsIlNPRlRSRVBPUlQiLCJfb2JqZWN0IiwiX3ZlY3RvciIsIl90cmFuc2Zvcm0iLCJfdHJhbnNmb3JtX3BvcyIsIl9zb2Z0Ym9keV9lbmFibGVkIiwibGFzdF9zaW11bGF0aW9uX2R1cmF0aW9uIiwiX251bV9vYmplY3RzIiwiX251bV9yaWdpZGJvZHlfb2JqZWN0cyIsIl9udW1fc29mdGJvZHlfb2JqZWN0cyIsIl9udW1fd2hlZWxzIiwiX251bV9jb25zdHJhaW50cyIsIl9zb2Z0Ym9keV9yZXBvcnRfc2l6ZSIsImZpeGVkVGltZVN0ZXAiLCJsYXN0X3NpbXVsYXRpb25fdGltZSIsIndvcmxkIiwiX3ZlYzNfMSIsIl92ZWMzXzIiLCJfdmVjM18zIiwiX3F1YXQiLCJwdWJsaWNfZnVuY3Rpb25zIiwiX29iamVjdHMiLCJfdmVoaWNsZXMiLCJfY29uc3RyYWludHMiLCJfb2JqZWN0c19hbW1vIiwiX29iamVjdF9zaGFwZXMiLCJfbW90aW9uX3N0YXRlcyIsIl9ub25jYWNoZWRfc2hhcGVzIiwiX2NvbXBvdW5kX3NoYXBlcyIsIlJFUE9SVF9DSFVOS1NJWkUiLCJ3b3JsZHJlcG9ydCIsInNvZnRyZXBvcnQiLCJjb2xsaXNpb25yZXBvcnQiLCJ2ZWhpY2xlcmVwb3J0IiwiY29uc3RyYWludHJlcG9ydCIsIldPUkxEUkVQT1JUX0lURU1TSVpFIiwiQ09MTElTSU9OUkVQT1JUX0lURU1TSVpFIiwiVkVISUNMRVJFUE9SVF9JVEVNU0laRSIsIkNPTlNUUkFJTlRSRVBPUlRfSVRFTVNJWkUiLCJhYiIsIkFycmF5QnVmZmVyIiwiU1VQUE9SVF9UUkFOU0ZFUkFCTEUiLCJieXRlTGVuZ3RoIiwiZ2V0U2hhcGVGcm9tQ2FjaGUiLCJjYWNoZV9rZXkiLCJ1bmRlZmluZWQiLCJzZXRTaGFwZUNhY2hlIiwic2hhcGUiLCJjcmVhdGVTaGFwZSIsImRlc2NyaXB0aW9uIiwic2V0SWRlbnRpdHkiLCJ0eXBlIiwibm9ybWFsIiwieCIsInkiLCJ6Iiwic2V0WCIsInNldFkiLCJzZXRaIiwiQW1tbyIsImJ0U3RhdGljUGxhbmVTaGFwZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJidEJveFNoYXBlIiwicmFkaXVzIiwiYnRTcGhlcmVTaGFwZSIsImJ0Q3lsaW5kZXJTaGFwZSIsImJ0Q2Fwc3VsZVNoYXBlIiwiYnRDb25lU2hhcGUiLCJ0cmlhbmdsZV9tZXNoIiwiYnRUcmlhbmdsZU1lc2giLCJkYXRhIiwibGVuZ3RoIiwiaSIsImFkZFRyaWFuZ2xlIiwiYnRCdmhUcmlhbmdsZU1lc2hTaGFwZSIsImlkIiwiYnRDb252ZXhIdWxsU2hhcGUiLCJhZGRQb2ludCIsInhwdHMiLCJ5cHRzIiwicG9pbnRzIiwicHRyIiwiX21hbGxvYyIsInAiLCJwMiIsImoiLCJIRUFQRjMyIiwiYnRIZWlnaHRmaWVsZFRlcnJhaW5TaGFwZSIsImFic01heEhlaWdodCIsInhzaXplIiwieXNpemUiLCJzZXRMb2NhbFNjYWxpbmciLCJjcmVhdGVTb2Z0Qm9keSIsImJvZHkiLCJzb2Z0Qm9keUhlbHBlcnMiLCJidFNvZnRCb2R5SGVscGVycyIsImFWZXJ0aWNlcyIsIkNyZWF0ZUZyb21UcmlNZXNoIiwiZ2V0V29ybGRJbmZvIiwiYUluZGljZXMiLCJjciIsImNvcm5lcnMiLCJDcmVhdGVQYXRjaCIsImJ0VmVjdG9yMyIsInNlZ21lbnRzIiwiQ3JlYXRlUm9wZSIsImluaXQiLCJwYXJhbXMiLCJ3YXNtQnVmZmVyIiwiaW1wb3J0U2NyaXB0cyIsImFtbW8iLCJsb2FkQW1tb0Zyb21CaW5hcnkiLCJjbWQiLCJtYWtlV29ybGQiLCJidFRyYW5zZm9ybSIsImJ0UXVhdGVybmlvbiIsInJlcG9ydHNpemUiLCJGbG9hdDMyQXJyYXkiLCJjb2xsaXNpb25Db25maWd1cmF0aW9uIiwic29mdGJvZHkiLCJidFNvZnRCb2R5UmlnaWRCb2R5Q29sbGlzaW9uQ29uZmlndXJhdGlvbiIsImJ0RGVmYXVsdENvbGxpc2lvbkNvbmZpZ3VyYXRpb24iLCJkaXNwYXRjaGVyIiwiYnRDb2xsaXNpb25EaXNwYXRjaGVyIiwic29sdmVyIiwiYnRTZXF1ZW50aWFsSW1wdWxzZUNvbnN0cmFpbnRTb2x2ZXIiLCJicm9hZHBoYXNlIiwiYWFiYm1pbiIsImFhYmJtYXgiLCJidEF4aXNTd2VlcDMiLCJidERidnRCcm9hZHBoYXNlIiwiYnRTb2Z0UmlnaWREeW5hbWljc1dvcmxkIiwiYnREZWZhdWx0U29mdEJvZHlTb2x2ZXIiLCJidERpc2NyZXRlRHluYW1pY3NXb3JsZCIsInNldEZpeGVkVGltZVN0ZXAiLCJzZXRHcmF2aXR5IiwiYXBwZW5kQW5jaG9yIiwib2JqIiwibm9kZSIsIm9iajIiLCJjb2xsaXNpb25CZXR3ZWVuTGlua2VkQm9kaWVzIiwiaW5mbHVlbmNlIiwiYWRkT2JqZWN0IiwibW90aW9uU3RhdGUiLCJpbmRleE9mIiwic2JDb25maWciLCJnZXRfbV9jZmciLCJ2aXRlcmF0aW9ucyIsInNldF92aXRlcmF0aW9ucyIsInBpdGVyYXRpb25zIiwic2V0X3BpdGVyYXRpb25zIiwiZGl0ZXJhdGlvbnMiLCJzZXRfZGl0ZXJhdGlvbnMiLCJjaXRlcmF0aW9ucyIsInNldF9jaXRlcmF0aW9ucyIsInNldF9jb2xsaXNpb25zIiwic2V0X2tERiIsImZyaWN0aW9uIiwic2V0X2tEUCIsImRhbXBpbmciLCJwcmVzc3VyZSIsInNldF9rUFIiLCJkcmFnIiwic2V0X2tERyIsImxpZnQiLCJzZXRfa0xGIiwiYW5jaG9ySGFyZG5lc3MiLCJzZXRfa0FIUiIsInJpZ2lkSGFyZG5lc3MiLCJzZXRfa0NIUiIsImtsc3QiLCJnZXRfbV9tYXRlcmlhbHMiLCJhdCIsInNldF9tX2tMU1QiLCJrYXN0Iiwic2V0X21fa0FTVCIsImt2c3QiLCJzZXRfbV9rVlNUIiwiY2FzdE9iamVjdCIsImJ0Q29sbGlzaW9uT2JqZWN0IiwiZ2V0Q29sbGlzaW9uU2hhcGUiLCJzZXRNYXJnaW4iLCJtYXJnaW4iLCJzZXRBY3RpdmF0aW9uU3RhdGUiLCJzdGF0ZSIsInJvcGUiLCJjbG90aCIsInBvc2l0aW9uIiwic2V0T3JpZ2luIiwicm90YXRpb24iLCJzZXRXIiwidyIsInNldFJvdGF0aW9uIiwidHJhbnNmb3JtIiwic2V0VG90YWxNYXNzIiwibWFzcyIsImFkZFNvZnRCb2R5IiwiZ2V0X21fZmFjZXMiLCJzaXplIiwiZ2V0X21fbm9kZXMiLCJjaGlsZHJlbiIsImNvbXBvdW5kX3NoYXBlIiwiYnRDb21wb3VuZFNoYXBlIiwiYWRkQ2hpbGRTaGFwZSIsIl9jaGlsZCIsInRyYW5zIiwicG9zaXRpb25fb2Zmc2V0IiwiZGVzdHJveSIsInNjYWxlIiwiY2FsY3VsYXRlTG9jYWxJbmVydGlhIiwiYnREZWZhdWx0TW90aW9uU3RhdGUiLCJyYkluZm8iLCJidFJpZ2lkQm9keUNvbnN0cnVjdGlvbkluZm8iLCJzZXRfbV9mcmljdGlvbiIsInNldF9tX3Jlc3RpdHV0aW9uIiwicmVzdGl0dXRpb24iLCJzZXRfbV9saW5lYXJEYW1waW5nIiwic2V0X21fYW5ndWxhckRhbXBpbmciLCJidFJpZ2lkQm9keSIsImNvbGxpc2lvbl9mbGFncyIsInNldENvbGxpc2lvbkZsYWdzIiwiZ3JvdXAiLCJtYXNrIiwiYWRkUmlnaWRCb2R5IiwiYWN0aXZhdGUiLCJhIiwiYWRkVmVoaWNsZSIsInZlaGljbGVfdHVuaW5nIiwiYnRWZWhpY2xlVHVuaW5nIiwic2V0X21fc3VzcGVuc2lvblN0aWZmbmVzcyIsInN1c3BlbnNpb25fc3RpZmZuZXNzIiwic2V0X21fc3VzcGVuc2lvbkNvbXByZXNzaW9uIiwic3VzcGVuc2lvbl9jb21wcmVzc2lvbiIsInNldF9tX3N1c3BlbnNpb25EYW1waW5nIiwic3VzcGVuc2lvbl9kYW1waW5nIiwic2V0X21fbWF4U3VzcGVuc2lvblRyYXZlbENtIiwibWF4X3N1c3BlbnNpb25fdHJhdmVsIiwic2V0X21fbWF4U3VzcGVuc2lvbkZvcmNlIiwibWF4X3N1c3BlbnNpb25fZm9yY2UiLCJ2ZWhpY2xlIiwiYnRSYXljYXN0VmVoaWNsZSIsInJpZ2lkQm9keSIsImJ0RGVmYXVsdFZlaGljbGVSYXljYXN0ZXIiLCJ0dW5pbmciLCJzZXRDb29yZGluYXRlU3lzdGVtIiwicmVtb3ZlVmVoaWNsZSIsImFkZFdoZWVsIiwiY29ubmVjdGlvbl9wb2ludCIsIndoZWVsX2RpcmVjdGlvbiIsIndoZWVsX2F4bGUiLCJzdXNwZW5zaW9uX3Jlc3RfbGVuZ3RoIiwid2hlZWxfcmFkaXVzIiwiaXNfZnJvbnRfd2hlZWwiLCJzZXRTdGVlcmluZyIsImRldGFpbHMiLCJzZXRTdGVlcmluZ1ZhbHVlIiwic3RlZXJpbmciLCJ3aGVlbCIsInNldEJyYWtlIiwiYnJha2UiLCJhcHBseUVuZ2luZUZvcmNlIiwiZm9yY2UiLCJyZW1vdmVPYmplY3QiLCJyZW1vdmVTb2Z0Qm9keSIsInJlbW92ZVJpZ2lkQm9keSIsInVwZGF0ZVRyYW5zZm9ybSIsImdldE1vdGlvblN0YXRlIiwiZ2V0V29ybGRUcmFuc2Zvcm0iLCJwb3MiLCJxdWF0Iiwic2V0V29ybGRUcmFuc2Zvcm0iLCJ1cGRhdGVNYXNzIiwic2V0TWFzc1Byb3BzIiwiYXBwbHlDZW50cmFsSW1wdWxzZSIsImFwcGx5SW1wdWxzZSIsImltcHVsc2VfeCIsImltcHVsc2VfeSIsImltcHVsc2VfeiIsImFwcGx5VG9ycXVlIiwidG9ycXVlX3giLCJ0b3JxdWVfeSIsInRvcnF1ZV96IiwiYXBwbHlDZW50cmFsRm9yY2UiLCJhcHBseUZvcmNlIiwiZm9yY2VfeCIsImZvcmNlX3kiLCJmb3JjZV96Iiwib25TaW11bGF0aW9uUmVzdW1lIiwiRGF0ZSIsIm5vdyIsInNldEFuZ3VsYXJWZWxvY2l0eSIsInNldExpbmVhclZlbG9jaXR5Iiwic2V0QW5ndWxhckZhY3RvciIsInNldExpbmVhckZhY3RvciIsInNldERhbXBpbmciLCJsaW5lYXIiLCJhbmd1bGFyIiwic2V0Q2NkTW90aW9uVGhyZXNob2xkIiwidGhyZXNob2xkIiwic2V0Q2NkU3dlcHRTcGhlcmVSYWRpdXMiLCJhZGRDb25zdHJhaW50IiwiY29uc3RyYWludCIsIm9iamVjdGIiLCJwb3NpdGlvbmEiLCJidFBvaW50MlBvaW50Q29uc3RyYWludCIsIm9iamVjdGEiLCJwb3NpdGlvbmIiLCJheGlzIiwiYnRIaW5nZUNvbnN0cmFpbnQiLCJ0cmFuc2Zvcm1iIiwidHJhbnNmb3JtYSIsImdldFJvdGF0aW9uIiwic2V0RXVsZXIiLCJidFNsaWRlckNvbnN0cmFpbnQiLCJ0YSIsInRiIiwic2V0RXVsZXJaWVgiLCJheGlzYSIsImF4aXNiIiwiYnRDb25lVHdpc3RDb25zdHJhaW50Iiwic2V0TGltaXQiLCJNYXRoIiwiUEkiLCJidEdlbmVyaWM2RG9mQ29uc3RyYWludCIsImIiLCJlbmFibGVGZWVkYmFjayIsInJlbW92ZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50X3NldEJyZWFraW5nSW1wdWxzZVRocmVzaG9sZCIsInVuZGVmaW5kIiwic2V0QnJlYWtpbmdJbXB1bHNlVGhyZXNob2xkIiwic2ltdWxhdGUiLCJ0aW1lU3RlcCIsIm1heFN1YlN0ZXBzIiwiY2VpbCIsInN0ZXBTaW11bGF0aW9uIiwicmVwb3J0VmVoaWNsZXMiLCJyZXBvcnRDb2xsaXNpb25zIiwicmVwb3J0Q29uc3RyYWludHMiLCJyZXBvcnRXb3JsZCIsInJlcG9ydFdvcmxkX3NvZnRib2RpZXMiLCJoaW5nZV9zZXRMaW1pdHMiLCJsb3ciLCJoaWdoIiwiYmlhc19mYWN0b3IiLCJyZWxheGF0aW9uX2ZhY3RvciIsImhpbmdlX2VuYWJsZUFuZ3VsYXJNb3RvciIsImVuYWJsZUFuZ3VsYXJNb3RvciIsInZlbG9jaXR5IiwiYWNjZWxlcmF0aW9uIiwiaGluZ2VfZGlzYWJsZU1vdG9yIiwiZW5hYmxlTW90b3IiLCJzbGlkZXJfc2V0TGltaXRzIiwic2V0TG93ZXJMaW5MaW1pdCIsImxpbl9sb3dlciIsInNldFVwcGVyTGluTGltaXQiLCJsaW5fdXBwZXIiLCJzZXRMb3dlckFuZ0xpbWl0IiwiYW5nX2xvd2VyIiwic2V0VXBwZXJBbmdMaW1pdCIsImFuZ191cHBlciIsInNsaWRlcl9zZXRSZXN0aXR1dGlvbiIsInNldFNvZnRuZXNzTGltTGluIiwic2V0U29mdG5lc3NMaW1BbmciLCJzbGlkZXJfZW5hYmxlTGluZWFyTW90b3IiLCJzZXRUYXJnZXRMaW5Nb3RvclZlbG9jaXR5Iiwic2V0TWF4TGluTW90b3JGb3JjZSIsInNldFBvd2VyZWRMaW5Nb3RvciIsInNsaWRlcl9kaXNhYmxlTGluZWFyTW90b3IiLCJzbGlkZXJfZW5hYmxlQW5ndWxhck1vdG9yIiwic2V0VGFyZ2V0QW5nTW90b3JWZWxvY2l0eSIsInNldE1heEFuZ01vdG9yRm9yY2UiLCJzZXRQb3dlcmVkQW5nTW90b3IiLCJzbGlkZXJfZGlzYWJsZUFuZ3VsYXJNb3RvciIsImNvbmV0d2lzdF9zZXRMaW1pdCIsImNvbmV0d2lzdF9lbmFibGVNb3RvciIsImNvbmV0d2lzdF9zZXRNYXhNb3RvckltcHVsc2UiLCJzZXRNYXhNb3RvckltcHVsc2UiLCJtYXhfaW1wdWxzZSIsImNvbmV0d2lzdF9zZXRNb3RvclRhcmdldCIsInNldE1vdG9yVGFyZ2V0IiwiY29uZXR3aXN0X2Rpc2FibGVNb3RvciIsImRvZl9zZXRMaW5lYXJMb3dlckxpbWl0Iiwic2V0TGluZWFyTG93ZXJMaW1pdCIsImRvZl9zZXRMaW5lYXJVcHBlckxpbWl0Iiwic2V0TGluZWFyVXBwZXJMaW1pdCIsImRvZl9zZXRBbmd1bGFyTG93ZXJMaW1pdCIsInNldEFuZ3VsYXJMb3dlckxpbWl0IiwiZG9mX3NldEFuZ3VsYXJVcHBlckxpbWl0Iiwic2V0QW5ndWxhclVwcGVyTGltaXQiLCJkb2ZfZW5hYmxlQW5ndWxhck1vdG9yIiwibW90b3IiLCJnZXRSb3RhdGlvbmFsTGltaXRNb3RvciIsIndoaWNoIiwic2V0X21fZW5hYmxlTW90b3IiLCJkb2ZfY29uZmlndXJlQW5ndWxhck1vdG9yIiwic2V0X21fbG9MaW1pdCIsImxvd19hbmdsZSIsInNldF9tX2hpTGltaXQiLCJoaWdoX2FuZ2xlIiwic2V0X21fdGFyZ2V0VmVsb2NpdHkiLCJzZXRfbV9tYXhNb3RvckZvcmNlIiwibWF4X2ZvcmNlIiwiZG9mX2Rpc2FibGVBbmd1bGFyTW90b3IiLCJpbmRleCIsIm9iamVjdCIsImdldENlbnRlck9mTWFzc1RyYW5zZm9ybSIsIm9yaWdpbiIsImdldE9yaWdpbiIsIm9mZnNldCIsImdldExpbmVhclZlbG9jaXR5IiwiZ2V0QW5ndWxhclZlbG9jaXR5IiwiYnVmZmVyIiwib2Zmc2V0VmVydCIsIm5vZGVzIiwidmVydCIsImdldF9tX3giLCJvZmYiLCJnZXRfbV9uIiwiZmFjZXMiLCJmYWNlIiwibm9kZTEiLCJub2RlMiIsIm5vZGUzIiwidmVydDEiLCJ2ZXJ0MiIsInZlcnQzIiwibm9ybWFsMSIsIm5vcm1hbDIiLCJub3JtYWwzIiwiZHAiLCJnZXREaXNwYXRjaGVyIiwibnVtIiwiZ2V0TnVtTWFuaWZvbGRzIiwibWFuaWZvbGQiLCJnZXRNYW5pZm9sZEJ5SW5kZXhJbnRlcm5hbCIsIm51bV9jb250YWN0cyIsImdldE51bUNvbnRhY3RzIiwicHQiLCJnZXRDb250YWN0UG9pbnQiLCJnZXRCb2R5MCIsImdldEJvZHkxIiwiZ2V0X21fbm9ybWFsV29ybGRPbkIiLCJnZXROdW1XaGVlbHMiLCJnZXRXaGVlbEluZm8iLCJnZXRfbV93b3JsZFRyYW5zZm9ybSIsImxlbmdodCIsIm9mZnNldF9ib2R5IiwiZ2V0QnJlYWtpbmdJbXB1bHNlVGhyZXNob2xkIiwib25tZXNzYWdlIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFF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bkYsb0JBQW9CMkMsZ0JBQXBCO0FBQ25CO0FBQ0YsQ0F0Q0Q7O0FBd0NBMUMsS0FBSzBjLFNBQUwsR0FBaUIsVUFBVUMsS0FBVixFQUFpQjtBQUNoQyxNQUFJQSxNQUFNM1gsSUFBTixZQUFzQitDLFlBQTFCLEVBQXdDO0FBQ3RDO0FBQ0EsWUFBUTRVLE1BQU0zWCxJQUFOLENBQVcsQ0FBWCxDQUFSO0FBQ0UsV0FBSzdFLGNBQWNDLFdBQW5CO0FBQWdDO0FBQzlCa0Msd0JBQWMsSUFBSXlGLFlBQUosQ0FBaUI0VSxNQUFNM1gsSUFBdkIsQ0FBZDtBQUNBO0FBQ0Q7QUFDRCxXQUFLN0UsY0FBY0UsZUFBbkI7QUFBb0M7QUFDbENtQyw0QkFBa0IsSUFBSXVGLFlBQUosQ0FBaUI0VSxNQUFNM1gsSUFBdkIsQ0FBbEI7QUFDQTtBQUNEO0FBQ0QsV0FBSzdFLGNBQWNHLGFBQW5CO0FBQWtDO0FBQ2hDbUMsMEJBQWdCLElBQUlzRixZQUFKLENBQWlCNFUsTUFBTTNYLElBQXZCLENBQWhCO0FBQ0E7QUFDRDtBQUNELFdBQUs3RSxjQUFjSSxnQkFBbkI7QUFBcUM7QUFDbkNtQyw2QkFBbUIsSUFBSXFGLFlBQUosQ0FBaUI0VSxNQUFNM1gsSUFBdkIsQ0FBbkI7QUFDQTtBQUNEO0FBQ0Q7QUFqQkY7O0FBb0JBO0FBQ0QsR0F2QkQsTUF1Qk8sSUFBSTJYLE1BQU0zWCxJQUFOLENBQVcwQyxHQUFYLElBQWtCOUYsaUJBQWlCK2EsTUFBTTNYLElBQU4sQ0FBVzBDLEdBQTVCLENBQXRCLEVBQXdEOUYsaUJBQWlCK2EsTUFBTTNYLElBQU4sQ0FBVzBDLEdBQTVCLEVBQWlDaVYsTUFBTTNYLElBQU4sQ0FBV3FDLE1BQTVDO0FBQ2hFLENBekJELEMiLCJmaWxlIjoid29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDEyNTU3NTdmOTNhZGE5YmU0YjYiLCJjb25zdCB0cmFuc2ZlcmFibGVNZXNzYWdlID0gc2VsZi53ZWJraXRQb3N0TWVzc2FnZSB8fCBzZWxmLnBvc3RNZXNzYWdlLFxuXG4gIC8vIGVudW1cbiAgTUVTU0FHRV9UWVBFUyA9IHtcbiAgICBXT1JMRFJFUE9SVDogMCxcbiAgICBDT0xMSVNJT05SRVBPUlQ6IDEsXG4gICAgVkVISUNMRVJFUE9SVDogMixcbiAgICBDT05TVFJBSU5UUkVQT1JUOiAzLFxuICAgIFNPRlRSRVBPUlQ6IDRcbiAgfTtcblxuICAvLyB0ZW1wIHZhcmlhYmxlc1xubGV0IF9vYmplY3QsXG4gIF92ZWN0b3IsXG4gIF90cmFuc2Zvcm0sXG4gIF90cmFuc2Zvcm1fcG9zLFxuICBfc29mdGJvZHlfZW5hYmxlZCA9IGZhbHNlLFxuICBsYXN0X3NpbXVsYXRpb25fZHVyYXRpb24gPSAwLFxuXG4gIF9udW1fb2JqZWN0cyA9IDAsXG4gIF9udW1fcmlnaWRib2R5X29iamVjdHMgPSAwLFxuICBfbnVtX3NvZnRib2R5X29iamVjdHMgPSAwLFxuICBfbnVtX3doZWVscyA9IDAsXG4gIF9udW1fY29uc3RyYWludHMgPSAwLFxuICBfc29mdGJvZHlfcmVwb3J0X3NpemUgPSAwLFxuXG4gIC8vIHdvcmxkIHZhcmlhYmxlc1xuICBmaXhlZFRpbWVTdGVwLCAvLyB1c2VkIHdoZW4gY2FsbGluZyBzdGVwU2ltdWxhdGlvblxuICBsYXN0X3NpbXVsYXRpb25fdGltZSxcblxuICB3b3JsZCxcbiAgX3ZlYzNfMSxcbiAgX3ZlYzNfMixcbiAgX3ZlYzNfMyxcbiAgX3F1YXQ7XG5cbiAgLy8gcHJpdmF0ZSBjYWNoZVxuY29uc3QgcHVibGljX2Z1bmN0aW9ucyA9IHt9LFxuICBfb2JqZWN0cyA9IFtdLFxuICBfdmVoaWNsZXMgPSBbXSxcbiAgX2NvbnN0cmFpbnRzID0gW10sXG4gIF9vYmplY3RzX2FtbW8gPSB7fSxcbiAgX29iamVjdF9zaGFwZXMgPSB7fSxcblxuICAvLyBUaGUgZm9sbG93aW5nIG9iamVjdHMgYXJlIHRvIHRyYWNrIG9iamVjdHMgdGhhdCBhbW1vLmpzIGRvZXNuJ3QgY2xlYW5cbiAgLy8gdXAuIEFsbCBhcmUgY2xlYW5lZCB1cCB3aGVuIHRoZXkncmUgY29ycmVzcG9uZGluZyBib2R5IGlzIGRlc3Ryb3llZC5cbiAgLy8gVW5mb3J0dW5hdGVseSwgaXQncyB2ZXJ5IGRpZmZpY3VsdCB0byBnZXQgYXQgdGhlc2Ugb2JqZWN0cyBmcm9tIHRoZVxuICAvLyBib2R5LCBzbyB3ZSBoYXZlIHRvIHRyYWNrIHRoZW0gb3Vyc2VsdmVzLlxuICBfbW90aW9uX3N0YXRlcyA9IHt9LFxuICAvLyBEb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IGl0IGZvciBjYWNoZWQgc2hhcGVzLlxuICBfbm9uY2FjaGVkX3NoYXBlcyA9IHt9LFxuICAvLyBBIGJvZHkgd2l0aCBhIGNvbXBvdW5kIHNoYXBlIGFsd2F5cyBoYXMgYSByZWd1bGFyIHNoYXBlIGFzIHdlbGwsIHNvIHdlXG4gIC8vIGhhdmUgdHJhY2sgdGhlbSBzZXBhcmF0ZWx5LlxuICBfY29tcG91bmRfc2hhcGVzID0ge307XG5cbiAgLy8gb2JqZWN0IHJlcG9ydGluZ1xubGV0IFJFUE9SVF9DSFVOS1NJWkUsIC8vIHJlcG9ydCBhcnJheSBpcyBpbmNyZWFzZWQgaW4gaW5jcmVtZW50cyBvZiB0aGlzIGNodW5rIHNpemVcbiAgd29ybGRyZXBvcnQsXG4gIHNvZnRyZXBvcnQsXG4gIGNvbGxpc2lvbnJlcG9ydCxcbiAgdmVoaWNsZXJlcG9ydCxcbiAgY29uc3RyYWludHJlcG9ydDtcblxuY29uc3QgV09STERSRVBPUlRfSVRFTVNJWkUgPSAxNCwgLy8gaG93IG1hbnkgZmxvYXQgdmFsdWVzIGVhY2ggcmVwb3J0ZWQgaXRlbSBuZWVkc1xuICBDT0xMSVNJT05SRVBPUlRfSVRFTVNJWkUgPSA1LCAvLyBvbmUgZmxvYXQgZm9yIGVhY2ggb2JqZWN0IGlkLCBhbmQgYSBWZWMzIGNvbnRhY3Qgbm9ybWFsXG4gIFZFSElDTEVSRVBPUlRfSVRFTVNJWkUgPSA5LCAvLyB2ZWhpY2xlIGlkLCB3aGVlbCBpbmRleCwgMyBmb3IgcG9zaXRpb24sIDQgZm9yIHJvdGF0aW9uXG4gIENPTlNUUkFJTlRSRVBPUlRfSVRFTVNJWkUgPSA2OyAvLyBjb25zdHJhaW50IGlkLCBvZmZzZXQgb2JqZWN0LCBvZmZzZXQsIGFwcGxpZWQgaW1wdWxzZVxuXG5jb25zdCBhYiA9IG5ldyBBcnJheUJ1ZmZlcigxKTtcblxudHJhbnNmZXJhYmxlTWVzc2FnZShhYiwgW2FiXSk7XG5jb25zdCBTVVBQT1JUX1RSQU5TRkVSQUJMRSA9IChhYi5ieXRlTGVuZ3RoID09PSAwKTtcblxuY29uc3QgZ2V0U2hhcGVGcm9tQ2FjaGUgPSAoY2FjaGVfa2V5KSA9PiB7XG4gIGlmIChfb2JqZWN0X3NoYXBlc1tjYWNoZV9rZXldICE9PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIF9vYmplY3Rfc2hhcGVzW2NhY2hlX2tleV07XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBzZXRTaGFwZUNhY2hlID0gKGNhY2hlX2tleSwgc2hhcGUpID0+IHtcbiAgX29iamVjdF9zaGFwZXNbY2FjaGVfa2V5XSA9IHNoYXBlO1xufTtcblxuY29uc3QgY3JlYXRlU2hhcGUgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgbGV0IHNoYXBlO1xuXG4gIF90cmFuc2Zvcm0uc2V0SWRlbnRpdHkoKTtcbiAgc3dpdGNoIChkZXNjcmlwdGlvbi50eXBlKSB7XG4gICAgY2FzZSAncGxhbmUnOiB7XG4gICAgICBjb25zdCBjYWNoZV9rZXkgPSBgcGxhbmVfJHtkZXNjcmlwdGlvbi5ub3JtYWwueH1fJHtkZXNjcmlwdGlvbi5ub3JtYWwueX1fJHtkZXNjcmlwdGlvbi5ub3JtYWwuen1gO1xuXG4gICAgICBpZiAoKHNoYXBlID0gZ2V0U2hhcGVGcm9tQ2FjaGUoY2FjaGVfa2V5KSkgPT09IG51bGwpIHtcbiAgICAgICAgX3ZlYzNfMS5zZXRYKGRlc2NyaXB0aW9uLm5vcm1hbC54KTtcbiAgICAgICAgX3ZlYzNfMS5zZXRZKGRlc2NyaXB0aW9uLm5vcm1hbC55KTtcbiAgICAgICAgX3ZlYzNfMS5zZXRaKGRlc2NyaXB0aW9uLm5vcm1hbC56KTtcbiAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idFN0YXRpY1BsYW5lU2hhcGUoX3ZlYzNfMSwgMCk7XG4gICAgICAgIHNldFNoYXBlQ2FjaGUoY2FjaGVfa2V5LCBzaGFwZSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdib3gnOiB7XG4gICAgICBjb25zdCBjYWNoZV9rZXkgPSBgYm94XyR7ZGVzY3JpcHRpb24ud2lkdGh9XyR7ZGVzY3JpcHRpb24uaGVpZ2h0fV8ke2Rlc2NyaXB0aW9uLmRlcHRofWA7XG5cbiAgICAgIGlmICgoc2hhcGUgPSBnZXRTaGFwZUZyb21DYWNoZShjYWNoZV9rZXkpKSA9PT0gbnVsbCkge1xuICAgICAgICBfdmVjM18xLnNldFgoZGVzY3JpcHRpb24ud2lkdGggLyAyKTtcbiAgICAgICAgX3ZlYzNfMS5zZXRZKGRlc2NyaXB0aW9uLmhlaWdodCAvIDIpO1xuICAgICAgICBfdmVjM18xLnNldFooZGVzY3JpcHRpb24uZGVwdGggLyAyKTtcbiAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idEJveFNoYXBlKF92ZWMzXzEpO1xuICAgICAgICBzZXRTaGFwZUNhY2hlKGNhY2hlX2tleSwgc2hhcGUpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnc3BoZXJlJzoge1xuICAgICAgY29uc3QgY2FjaGVfa2V5ID0gYHNwaGVyZV8ke2Rlc2NyaXB0aW9uLnJhZGl1c31gO1xuXG4gICAgICBpZiAoKHNoYXBlID0gZ2V0U2hhcGVGcm9tQ2FjaGUoY2FjaGVfa2V5KSkgPT09IG51bGwpIHtcbiAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idFNwaGVyZVNoYXBlKGRlc2NyaXB0aW9uLnJhZGl1cyk7XG4gICAgICAgIHNldFNoYXBlQ2FjaGUoY2FjaGVfa2V5LCBzaGFwZSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdjeWxpbmRlcic6IHtcbiAgICAgIGNvbnN0IGNhY2hlX2tleSA9IGBjeWxpbmRlcl8ke2Rlc2NyaXB0aW9uLndpZHRofV8ke2Rlc2NyaXB0aW9uLmhlaWdodH1fJHtkZXNjcmlwdGlvbi5kZXB0aH1gO1xuXG4gICAgICBpZiAoKHNoYXBlID0gZ2V0U2hhcGVGcm9tQ2FjaGUoY2FjaGVfa2V5KSkgPT09IG51bGwpIHtcbiAgICAgICAgX3ZlYzNfMS5zZXRYKGRlc2NyaXB0aW9uLndpZHRoIC8gMik7XG4gICAgICAgIF92ZWMzXzEuc2V0WShkZXNjcmlwdGlvbi5oZWlnaHQgLyAyKTtcbiAgICAgICAgX3ZlYzNfMS5zZXRaKGRlc2NyaXB0aW9uLmRlcHRoIC8gMik7XG4gICAgICAgIHNoYXBlID0gbmV3IEFtbW8uYnRDeWxpbmRlclNoYXBlKF92ZWMzXzEpO1xuICAgICAgICBzZXRTaGFwZUNhY2hlKGNhY2hlX2tleSwgc2hhcGUpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnY2Fwc3VsZSc6IHtcbiAgICAgIGNvbnN0IGNhY2hlX2tleSA9IGBjYXBzdWxlXyR7ZGVzY3JpcHRpb24ucmFkaXVzfV8ke2Rlc2NyaXB0aW9uLmhlaWdodH1gO1xuXG4gICAgICBpZiAoKHNoYXBlID0gZ2V0U2hhcGVGcm9tQ2FjaGUoY2FjaGVfa2V5KSkgPT09IG51bGwpIHtcbiAgICAgICAgLy8gSW4gQnVsbGV0LCBjYXBzdWxlIGhlaWdodCBleGNsdWRlcyB0aGUgZW5kIHNwaGVyZXNcbiAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idENhcHN1bGVTaGFwZShkZXNjcmlwdGlvbi5yYWRpdXMsIGRlc2NyaXB0aW9uLmhlaWdodCAtIDIgKiBkZXNjcmlwdGlvbi5yYWRpdXMpO1xuICAgICAgICBzZXRTaGFwZUNhY2hlKGNhY2hlX2tleSwgc2hhcGUpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnY29uZSc6IHtcbiAgICAgIGNvbnN0IGNhY2hlX2tleSA9IGBjb25lXyR7ZGVzY3JpcHRpb24ucmFkaXVzfV8ke2Rlc2NyaXB0aW9uLmhlaWdodH1gO1xuXG4gICAgICBpZiAoKHNoYXBlID0gZ2V0U2hhcGVGcm9tQ2FjaGUoY2FjaGVfa2V5KSkgPT09IG51bGwpIHtcbiAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idENvbmVTaGFwZShkZXNjcmlwdGlvbi5yYWRpdXMsIGRlc2NyaXB0aW9uLmhlaWdodCk7XG4gICAgICAgIHNldFNoYXBlQ2FjaGUoY2FjaGVfa2V5LCBzaGFwZSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdjb25jYXZlJzoge1xuICAgICAgY29uc3QgdHJpYW5nbGVfbWVzaCA9IG5ldyBBbW1vLmJ0VHJpYW5nbGVNZXNoKCk7XG4gICAgICBpZiAoIWRlc2NyaXB0aW9uLmRhdGEubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBkYXRhID0gZGVzY3JpcHRpb24uZGF0YTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCAvIDk7IGkrKykge1xuICAgICAgICBfdmVjM18xLnNldFgoZGF0YVtpICogOV0pO1xuICAgICAgICBfdmVjM18xLnNldFkoZGF0YVtpICogOSArIDFdKTtcbiAgICAgICAgX3ZlYzNfMS5zZXRaKGRhdGFbaSAqIDkgKyAyXSk7XG5cbiAgICAgICAgX3ZlYzNfMi5zZXRYKGRhdGFbaSAqIDkgKyAzXSk7XG4gICAgICAgIF92ZWMzXzIuc2V0WShkYXRhW2kgKiA5ICsgNF0pO1xuICAgICAgICBfdmVjM18yLnNldFooZGF0YVtpICogOSArIDVdKTtcblxuICAgICAgICBfdmVjM18zLnNldFgoZGF0YVtpICogOSArIDZdKTtcbiAgICAgICAgX3ZlYzNfMy5zZXRZKGRhdGFbaSAqIDkgKyA3XSk7XG4gICAgICAgIF92ZWMzXzMuc2V0WihkYXRhW2kgKiA5ICsgOF0pO1xuXG4gICAgICAgIHRyaWFuZ2xlX21lc2guYWRkVHJpYW5nbGUoXG4gICAgICAgICAgX3ZlYzNfMSxcbiAgICAgICAgICBfdmVjM18yLFxuICAgICAgICAgIF92ZWMzXzMsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgc2hhcGUgPSBuZXcgQW1tby5idEJ2aFRyaWFuZ2xlTWVzaFNoYXBlKFxuICAgICAgICB0cmlhbmdsZV9tZXNoLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuXG4gICAgICBfbm9uY2FjaGVkX3NoYXBlc1tkZXNjcmlwdGlvbi5pZF0gPSBzaGFwZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2NvbnZleCc6IHtcbiAgICAgIHNoYXBlID0gbmV3IEFtbW8uYnRDb252ZXhIdWxsU2hhcGUoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBkZXNjcmlwdGlvbi5kYXRhO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIC8gMzsgaSsrKSB7XG4gICAgICAgIF92ZWMzXzEuc2V0WChkYXRhW2kgKiAzIF0pO1xuICAgICAgICBfdmVjM18xLnNldFkoZGF0YVtpICogMyArIDFdKTtcbiAgICAgICAgX3ZlYzNfMS5zZXRaKGRhdGFbaSAqIDMgKyAyXSk7XG5cbiAgICAgICAgc2hhcGUuYWRkUG9pbnQoX3ZlYzNfMSk7XG4gICAgICB9XG5cbiAgICAgIF9ub25jYWNoZWRfc2hhcGVzW2Rlc2NyaXB0aW9uLmlkXSA9IHNoYXBlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnaGVpZ2h0ZmllbGQnOiB7XG4gICAgICBjb25zdCB4cHRzID0gZGVzY3JpcHRpb24ueHB0cyxcbiAgICAgICAgeXB0cyA9IGRlc2NyaXB0aW9uLnlwdHMsXG4gICAgICAgIHBvaW50cyA9IGRlc2NyaXB0aW9uLnBvaW50cyxcbiAgICAgICAgcHRyID0gQW1tby5fbWFsbG9jKDQgKiB4cHRzICogeXB0cyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBwID0gMCwgcDIgPSAwOyBpIDwgeHB0czsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgeXB0czsgaisrKSB7XG4gICAgICAgICAgQW1tby5IRUFQRjMyW3B0ciArIHAyID4+IDJdID0gcG9pbnRzW3BdO1xuXG4gICAgICAgICAgcCsrO1xuICAgICAgICAgIHAyICs9IDQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2hhcGUgPSBuZXcgQW1tby5idEhlaWdodGZpZWxkVGVycmFpblNoYXBlKFxuICAgICAgICBkZXNjcmlwdGlvbi54cHRzLFxuICAgICAgICBkZXNjcmlwdGlvbi55cHRzLFxuICAgICAgICBwdHIsXG4gICAgICAgIDEsXG4gICAgICAgIC1kZXNjcmlwdGlvbi5hYnNNYXhIZWlnaHQsXG4gICAgICAgIGRlc2NyaXB0aW9uLmFic01heEhlaWdodCxcbiAgICAgICAgMixcbiAgICAgICAgJ1BIWV9GTE9BVCcsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuXG4gICAgICBfdmVjM18xLnNldFgoZGVzY3JpcHRpb24ueHNpemUgLyAoZGVzY3JpcHRpb24ueHB0cyAtIDEpKTtcbiAgICAgIF92ZWMzXzEuc2V0WShkZXNjcmlwdGlvbi55c2l6ZSAvIChkZXNjcmlwdGlvbi55cHRzIC0gMSkpO1xuICAgICAgX3ZlYzNfMS5zZXRaKDEpO1xuXG4gICAgICBzaGFwZS5zZXRMb2NhbFNjYWxpbmcoX3ZlYzNfMSk7XG4gICAgICBfbm9uY2FjaGVkX3NoYXBlc1tkZXNjcmlwdGlvbi5pZF0gPSBzaGFwZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gTm90IHJlY29nbml6ZWRcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBzaGFwZTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNvZnRCb2R5ID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIGxldCBib2R5O1xuXG4gIGNvbnN0IHNvZnRCb2R5SGVscGVycyA9IG5ldyBBbW1vLmJ0U29mdEJvZHlIZWxwZXJzKCk7XG5cbiAgc3dpdGNoIChkZXNjcmlwdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnc29mdFRyaW1lc2gnOiB7XG4gICAgICBpZiAoIWRlc2NyaXB0aW9uLmFWZXJ0aWNlcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgYm9keSA9IHNvZnRCb2R5SGVscGVycy5DcmVhdGVGcm9tVHJpTWVzaChcbiAgICAgICAgd29ybGQuZ2V0V29ybGRJbmZvKCksXG4gICAgICAgIGRlc2NyaXB0aW9uLmFWZXJ0aWNlcyxcbiAgICAgICAgZGVzY3JpcHRpb24uYUluZGljZXMsXG4gICAgICAgIGRlc2NyaXB0aW9uLmFJbmRpY2VzLmxlbmd0aCAvIDMsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnc29mdENsb3RoTWVzaCc6IHtcbiAgICAgIGNvbnN0IGNyID0gZGVzY3JpcHRpb24uY29ybmVycztcblxuICAgICAgYm9keSA9IHNvZnRCb2R5SGVscGVycy5DcmVhdGVQYXRjaChcbiAgICAgICAgd29ybGQuZ2V0V29ybGRJbmZvKCksXG4gICAgICAgIG5ldyBBbW1vLmJ0VmVjdG9yMyhjclswXSwgY3JbMV0sIGNyWzJdKSxcbiAgICAgICAgbmV3IEFtbW8uYnRWZWN0b3IzKGNyWzNdLCBjcls0XSwgY3JbNV0pLFxuICAgICAgICBuZXcgQW1tby5idFZlY3RvcjMoY3JbNl0sIGNyWzddLCBjcls4XSksXG4gICAgICAgIG5ldyBBbW1vLmJ0VmVjdG9yMyhjcls5XSwgY3JbMTBdLCBjclsxMV0pLFxuICAgICAgICBkZXNjcmlwdGlvbi5zZWdtZW50c1swXSxcbiAgICAgICAgZGVzY3JpcHRpb24uc2VnbWVudHNbMV0sXG4gICAgICAgIDAsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdzb2Z0Um9wZU1lc2gnOiB7XG4gICAgICBjb25zdCBkYXRhID0gZGVzY3JpcHRpb24uZGF0YTtcblxuICAgICAgYm9keSA9IHNvZnRCb2R5SGVscGVycy5DcmVhdGVSb3BlKFxuICAgICAgICB3b3JsZC5nZXRXb3JsZEluZm8oKSxcbiAgICAgICAgbmV3IEFtbW8uYnRWZWN0b3IzKGRhdGFbMF0sIGRhdGFbMV0sIGRhdGFbMl0pLFxuICAgICAgICBuZXcgQW1tby5idFZlY3RvcjMoZGF0YVszXSwgZGF0YVs0XSwgZGF0YVs1XSksXG4gICAgICAgIGRhdGFbNl0gLSAxLFxuICAgICAgICAwXG4gICAgICApO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIE5vdCByZWNvZ25pemVkXG4gICAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gYm9keTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuaW5pdCA9IChwYXJhbXMgPSB7fSkgPT4ge1xuICBpZiAocGFyYW1zLndhc21CdWZmZXIpIHtcbiAgICBpbXBvcnRTY3JpcHRzKHBhcmFtcy5hbW1vKTtcblxuICAgIHNlbGYuQW1tbyA9IGxvYWRBbW1vRnJvbUJpbmFyeShwYXJhbXMud2FzbUJ1ZmZlcik7XG4gICAgdHJhbnNmZXJhYmxlTWVzc2FnZSh7Y21kOiAnYW1tb0xvYWRlZCd9KTtcbiAgICBwdWJsaWNfZnVuY3Rpb25zLm1ha2VXb3JsZChwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGltcG9ydFNjcmlwdHMocGFyYW1zLmFtbW8pO1xuICAgIHRyYW5zZmVyYWJsZU1lc3NhZ2Uoe2NtZDogJ2FtbW9Mb2FkZWQnfSk7XG4gICAgcHVibGljX2Z1bmN0aW9ucy5tYWtlV29ybGQocGFyYW1zKTtcbiAgfVxufVxuXG5wdWJsaWNfZnVuY3Rpb25zLm1ha2VXb3JsZCA9IChwYXJhbXMgPSB7fSkgPT4ge1xuICBfdHJhbnNmb3JtID0gbmV3IEFtbW8uYnRUcmFuc2Zvcm0oKTtcbiAgX3RyYW5zZm9ybV9wb3MgPSBuZXcgQW1tby5idFRyYW5zZm9ybSgpO1xuICBfdmVjM18xID0gbmV3IEFtbW8uYnRWZWN0b3IzKDAsIDAsIDApO1xuICBfdmVjM18yID0gbmV3IEFtbW8uYnRWZWN0b3IzKDAsIDAsIDApO1xuICBfdmVjM18zID0gbmV3IEFtbW8uYnRWZWN0b3IzKDAsIDAsIDApO1xuICBfcXVhdCA9IG5ldyBBbW1vLmJ0UXVhdGVybmlvbigwLCAwLCAwLCAwKTtcblxuICBSRVBPUlRfQ0hVTktTSVpFID0gcGFyYW1zLnJlcG9ydHNpemUgfHwgNTA7XG5cbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB7XG4gICAgLy8gVHJhbnNmZXJhYmxlIG1lc3NhZ2VzIGFyZSBzdXBwb3J0ZWQsIHRha2UgYWR2YW50YWdlIG9mIHRoZW0gd2l0aCBUeXBlZEFycmF5c1xuICAgIHdvcmxkcmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheSgyICsgUkVQT1JUX0NIVU5LU0laRSAqIFdPUkxEUkVQT1JUX0lURU1TSVpFKTsgLy8gbWVzc2FnZSBpZCArICMgb2Ygb2JqZWN0cyB0byByZXBvcnQgKyBjaHVuayBzaXplICogIyBvZiB2YWx1ZXMgcGVyIG9iamVjdFxuICAgIGNvbGxpc2lvbnJlcG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoMiArIFJFUE9SVF9DSFVOS1NJWkUgKiBDT0xMSVNJT05SRVBPUlRfSVRFTVNJWkUpOyAvLyBtZXNzYWdlIGlkICsgIyBvZiBjb2xsaXNpb25zIHRvIHJlcG9ydCArIGNodW5rIHNpemUgKiAjIG9mIHZhbHVlcyBwZXIgb2JqZWN0XG4gICAgdmVoaWNsZXJlcG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoMiArIFJFUE9SVF9DSFVOS1NJWkUgKiBWRUhJQ0xFUkVQT1JUX0lURU1TSVpFKTsgLy8gbWVzc2FnZSBpZCArICMgb2YgdmVoaWNsZXMgdG8gcmVwb3J0ICsgY2h1bmsgc2l6ZSAqICMgb2YgdmFsdWVzIHBlciBvYmplY3RcbiAgICBjb25zdHJhaW50cmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheSgyICsgUkVQT1JUX0NIVU5LU0laRSAqIENPTlNUUkFJTlRSRVBPUlRfSVRFTVNJWkUpOyAvLyBtZXNzYWdlIGlkICsgIyBvZiBjb25zdHJhaW50cyB0byByZXBvcnQgKyBjaHVuayBzaXplICogIyBvZiB2YWx1ZXMgcGVyIG9iamVjdFxuICB9IGVsc2Uge1xuICAgIC8vIFRyYW5zZmVyYWJsZSBtZXNzYWdlcyBhcmUgbm90IHN1cHBvcnRlZCwgc2VuZCBkYXRhIGFzIG5vcm1hbCBhcnJheXNcbiAgICB3b3JsZHJlcG9ydCA9IFtdO1xuICAgIGNvbGxpc2lvbnJlcG9ydCA9IFtdO1xuICAgIHZlaGljbGVyZXBvcnQgPSBbXTtcbiAgICBjb25zdHJhaW50cmVwb3J0ID0gW107XG4gIH1cblxuICB3b3JsZHJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuV09STERSRVBPUlQ7XG4gIGNvbGxpc2lvbnJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuQ09MTElTSU9OUkVQT1JUO1xuICB2ZWhpY2xlcmVwb3J0WzBdID0gTUVTU0FHRV9UWVBFUy5WRUhJQ0xFUkVQT1JUO1xuICBjb25zdHJhaW50cmVwb3J0WzBdID0gTUVTU0FHRV9UWVBFUy5DT05TVFJBSU5UUkVQT1JUO1xuXG4gIGNvbnN0IGNvbGxpc2lvbkNvbmZpZ3VyYXRpb24gPSBwYXJhbXMuc29mdGJvZHlcbiAgICA/IG5ldyBBbW1vLmJ0U29mdEJvZHlSaWdpZEJvZHlDb2xsaXNpb25Db25maWd1cmF0aW9uKClcbiAgICA6IG5ldyBBbW1vLmJ0RGVmYXVsdENvbGxpc2lvbkNvbmZpZ3VyYXRpb24oKSxcbiAgICBkaXNwYXRjaGVyID0gbmV3IEFtbW8uYnRDb2xsaXNpb25EaXNwYXRjaGVyKGNvbGxpc2lvbkNvbmZpZ3VyYXRpb24pLFxuICAgIHNvbHZlciA9IG5ldyBBbW1vLmJ0U2VxdWVudGlhbEltcHVsc2VDb25zdHJhaW50U29sdmVyKCk7XG5cbiAgbGV0IGJyb2FkcGhhc2U7XG5cbiAgaWYgKCFwYXJhbXMuYnJvYWRwaGFzZSkgcGFyYW1zLmJyb2FkcGhhc2UgPSB7dHlwZTogJ2R5bmFtaWMnfTtcbiAgLy8gVE9ETyEhIVxuICAvKiBpZiAocGFyYW1zLmJyb2FkcGhhc2UudHlwZSA9PT0gJ3N3ZWVwcHJ1bmUnKSB7XG4gICAgZXh0ZW5kKHBhcmFtcy5icm9hZHBoYXNlLCB7XG4gICAgICBhYWJibWluOiB7XG4gICAgICAgIHg6IC01MCxcbiAgICAgICAgeTogLTUwLFxuICAgICAgICB6OiAtNTBcbiAgICAgIH0sXG5cbiAgICAgIGFhYmJtYXg6IHtcbiAgICAgICAgeDogNTAsXG4gICAgICAgIHk6IDUwLFxuICAgICAgICB6OiA1MFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSovXG5cbiAgc3dpdGNoIChwYXJhbXMuYnJvYWRwaGFzZS50eXBlKSB7XG4gICAgY2FzZSAnc3dlZXBwcnVuZSc6XG4gICAgICBfdmVjM18xLnNldFgocGFyYW1zLmJyb2FkcGhhc2UuYWFiYm1pbi54KTtcbiAgICAgIF92ZWMzXzEuc2V0WShwYXJhbXMuYnJvYWRwaGFzZS5hYWJibWluLnkpO1xuICAgICAgX3ZlYzNfMS5zZXRaKHBhcmFtcy5icm9hZHBoYXNlLmFhYmJtaW4ueik7XG5cbiAgICAgIF92ZWMzXzIuc2V0WChwYXJhbXMuYnJvYWRwaGFzZS5hYWJibWF4LngpO1xuICAgICAgX3ZlYzNfMi5zZXRZKHBhcmFtcy5icm9hZHBoYXNlLmFhYmJtYXgueSk7XG4gICAgICBfdmVjM18yLnNldFoocGFyYW1zLmJyb2FkcGhhc2UuYWFiYm1heC56KTtcblxuICAgICAgYnJvYWRwaGFzZSA9IG5ldyBBbW1vLmJ0QXhpc1N3ZWVwMyhcbiAgICAgICAgX3ZlYzNfMSxcbiAgICAgICAgX3ZlYzNfMlxuICAgICAgKTtcblxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZHluYW1pYyc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyb2FkcGhhc2UgPSBuZXcgQW1tby5idERidnRCcm9hZHBoYXNlKCk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHdvcmxkID0gcGFyYW1zLnNvZnRib2R5XG4gICAgPyBuZXcgQW1tby5idFNvZnRSaWdpZER5bmFtaWNzV29ybGQoZGlzcGF0Y2hlciwgYnJvYWRwaGFzZSwgc29sdmVyLCBjb2xsaXNpb25Db25maWd1cmF0aW9uLCBuZXcgQW1tby5idERlZmF1bHRTb2Z0Qm9keVNvbHZlcigpKVxuICAgIDogbmV3IEFtbW8uYnREaXNjcmV0ZUR5bmFtaWNzV29ybGQoZGlzcGF0Y2hlciwgYnJvYWRwaGFzZSwgc29sdmVyLCBjb2xsaXNpb25Db25maWd1cmF0aW9uKTtcbiAgZml4ZWRUaW1lU3RlcCA9IHBhcmFtcy5maXhlZFRpbWVTdGVwO1xuXG4gIGlmIChwYXJhbXMuc29mdGJvZHkpIF9zb2Z0Ym9keV9lbmFibGVkID0gdHJ1ZTtcblxuICB0cmFuc2ZlcmFibGVNZXNzYWdlKHtjbWQ6ICd3b3JsZFJlYWR5J30pO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5zZXRGaXhlZFRpbWVTdGVwID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIGZpeGVkVGltZVN0ZXAgPSBkZXNjcmlwdGlvbjtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuc2V0R3Jhdml0eSA9IChkZXNjcmlwdGlvbikgPT4ge1xuICBfdmVjM18xLnNldFgoZGVzY3JpcHRpb24ueCk7XG4gIF92ZWMzXzEuc2V0WShkZXNjcmlwdGlvbi55KTtcbiAgX3ZlYzNfMS5zZXRaKGRlc2NyaXB0aW9uLnopO1xuICB3b3JsZC5zZXRHcmF2aXR5KF92ZWMzXzEpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5hcHBlbmRBbmNob3IgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgX29iamVjdHNbZGVzY3JpcHRpb24ub2JqXVxuICAgIC5hcHBlbmRBbmNob3IoXG4gICAgICBkZXNjcmlwdGlvbi5ub2RlLFxuICAgICAgX29iamVjdHNbZGVzY3JpcHRpb24ub2JqMl0sXG4gICAgICBkZXNjcmlwdGlvbi5jb2xsaXNpb25CZXR3ZWVuTGlua2VkQm9kaWVzLFxuICAgICAgZGVzY3JpcHRpb24uaW5mbHVlbmNlXG4gICAgKTtcbn1cblxucHVibGljX2Z1bmN0aW9ucy5hZGRPYmplY3QgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgbGV0IGJvZHksIG1vdGlvblN0YXRlO1xuXG4gIGlmIChkZXNjcmlwdGlvbi50eXBlLmluZGV4T2YoJ3NvZnQnKSAhPT0gLTEpIHtcbiAgICBib2R5ID0gY3JlYXRlU29mdEJvZHkoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3Qgc2JDb25maWcgPSBib2R5LmdldF9tX2NmZygpO1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uLnZpdGVyYXRpb25zKSBzYkNvbmZpZy5zZXRfdml0ZXJhdGlvbnMoZGVzY3JpcHRpb24udml0ZXJhdGlvbnMpO1xuICAgIGlmIChkZXNjcmlwdGlvbi5waXRlcmF0aW9ucykgc2JDb25maWcuc2V0X3BpdGVyYXRpb25zKGRlc2NyaXB0aW9uLnBpdGVyYXRpb25zKTtcbiAgICBpZiAoZGVzY3JpcHRpb24uZGl0ZXJhdGlvbnMpIHNiQ29uZmlnLnNldF9kaXRlcmF0aW9ucyhkZXNjcmlwdGlvbi5kaXRlcmF0aW9ucyk7XG4gICAgaWYgKGRlc2NyaXB0aW9uLmNpdGVyYXRpb25zKSBzYkNvbmZpZy5zZXRfY2l0ZXJhdGlvbnMoZGVzY3JpcHRpb24uY2l0ZXJhdGlvbnMpO1xuICAgIHNiQ29uZmlnLnNldF9jb2xsaXNpb25zKDB4MTEpO1xuICAgIHNiQ29uZmlnLnNldF9rREYoZGVzY3JpcHRpb24uZnJpY3Rpb24pO1xuICAgIHNiQ29uZmlnLnNldF9rRFAoZGVzY3JpcHRpb24uZGFtcGluZyk7XG4gICAgaWYgKGRlc2NyaXB0aW9uLnByZXNzdXJlKSBzYkNvbmZpZy5zZXRfa1BSKGRlc2NyaXB0aW9uLnByZXNzdXJlKTtcbiAgICBpZiAoZGVzY3JpcHRpb24uZHJhZykgc2JDb25maWcuc2V0X2tERyhkZXNjcmlwdGlvbi5kcmFnKTtcbiAgICBpZiAoZGVzY3JpcHRpb24ubGlmdCkgc2JDb25maWcuc2V0X2tMRihkZXNjcmlwdGlvbi5saWZ0KTtcbiAgICBpZiAoZGVzY3JpcHRpb24uYW5jaG9ySGFyZG5lc3MpIHNiQ29uZmlnLnNldF9rQUhSKGRlc2NyaXB0aW9uLmFuY2hvckhhcmRuZXNzKTtcbiAgICBpZiAoZGVzY3JpcHRpb24ucmlnaWRIYXJkbmVzcykgc2JDb25maWcuc2V0X2tDSFIoZGVzY3JpcHRpb24ucmlnaWRIYXJkbmVzcyk7XG5cbiAgICBpZiAoZGVzY3JpcHRpb24ua2xzdCkgYm9keS5nZXRfbV9tYXRlcmlhbHMoKS5hdCgwKS5zZXRfbV9rTFNUKGRlc2NyaXB0aW9uLmtsc3QpO1xuICAgIGlmIChkZXNjcmlwdGlvbi5rYXN0KSBib2R5LmdldF9tX21hdGVyaWFscygpLmF0KDApLnNldF9tX2tBU1QoZGVzY3JpcHRpb24ua2FzdCk7XG4gICAgaWYgKGRlc2NyaXB0aW9uLmt2c3QpIGJvZHkuZ2V0X21fbWF0ZXJpYWxzKCkuYXQoMCkuc2V0X21fa1ZTVChkZXNjcmlwdGlvbi5rdnN0KTtcblxuICAgIEFtbW8uY2FzdE9iamVjdChib2R5LCBBbW1vLmJ0Q29sbGlzaW9uT2JqZWN0KS5nZXRDb2xsaXNpb25TaGFwZSgpLnNldE1hcmdpbihkZXNjcmlwdGlvbi5tYXJnaW4gPyBkZXNjcmlwdGlvbi5tYXJnaW4gOiAwLjEpO1xuICAgIGJvZHkuc2V0QWN0aXZhdGlvblN0YXRlKGRlc2NyaXB0aW9uLnN0YXRlIHx8IDQpO1xuICAgIGJvZHkudHlwZSA9IDA7IC8vIFNvZnRCb2R5LlxuICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnc29mdFJvcGVNZXNoJykgYm9keS5yb3BlID0gdHJ1ZTtcbiAgICBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ3NvZnRDbG90aE1lc2gnKSBib2R5LmNsb3RoID0gdHJ1ZTtcblxuICAgIF90cmFuc2Zvcm0uc2V0SWRlbnRpdHkoKTtcblxuICAgIF92ZWMzXzEuc2V0WChkZXNjcmlwdGlvbi5wb3NpdGlvbi54KTtcbiAgICBfdmVjM18xLnNldFkoZGVzY3JpcHRpb24ucG9zaXRpb24ueSk7XG4gICAgX3ZlYzNfMS5zZXRaKGRlc2NyaXB0aW9uLnBvc2l0aW9uLnopO1xuICAgIF90cmFuc2Zvcm0uc2V0T3JpZ2luKF92ZWMzXzEpO1xuXG4gICAgX3F1YXQuc2V0WChkZXNjcmlwdGlvbi5yb3RhdGlvbi54KTtcbiAgICBfcXVhdC5zZXRZKGRlc2NyaXB0aW9uLnJvdGF0aW9uLnkpO1xuICAgIF9xdWF0LnNldFooZGVzY3JpcHRpb24ucm90YXRpb24ueik7XG4gICAgX3F1YXQuc2V0VyhkZXNjcmlwdGlvbi5yb3RhdGlvbi53KTtcbiAgICBfdHJhbnNmb3JtLnNldFJvdGF0aW9uKF9xdWF0KTtcblxuICAgIGJvZHkudHJhbnNmb3JtKF90cmFuc2Zvcm0pO1xuXG4gICAgYm9keS5zZXRUb3RhbE1hc3MoZGVzY3JpcHRpb24ubWFzcywgZmFsc2UpO1xuICAgIHdvcmxkLmFkZFNvZnRCb2R5KGJvZHksIDEsIC0xKTtcbiAgICBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ3NvZnRUcmltZXNoJykgX3NvZnRib2R5X3JlcG9ydF9zaXplICs9IGJvZHkuZ2V0X21fZmFjZXMoKS5zaXplKCkgKiAzO1xuICAgIGVsc2UgX3NvZnRib2R5X3JlcG9ydF9zaXplICs9IGJvZHkuZ2V0X21fbm9kZXMoKS5zaXplKCkgKiAzO1xuXG4gICAgX251bV9zb2Z0Ym9keV9vYmplY3RzKys7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHNoYXBlID0gY3JlYXRlU2hhcGUoZGVzY3JpcHRpb24pO1xuXG4gICAgaWYgKCFzaGFwZSkgcmV0dXJuO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGNoaWxkcmVuIHRoZW4gdGhpcyBpcyBhIGNvbXBvdW5kIHNoYXBlXG4gICAgaWYgKGRlc2NyaXB0aW9uLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBjb21wb3VuZF9zaGFwZSA9IG5ldyBBbW1vLmJ0Q29tcG91bmRTaGFwZSgpO1xuICAgICAgY29tcG91bmRfc2hhcGUuYWRkQ2hpbGRTaGFwZShfdHJhbnNmb3JtLCBzaGFwZSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzY3JpcHRpb24uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgX2NoaWxkID0gZGVzY3JpcHRpb24uY2hpbGRyZW5baV07XG5cbiAgICAgICAgY29uc3QgdHJhbnMgPSBuZXcgQW1tby5idFRyYW5zZm9ybSgpO1xuICAgICAgICB0cmFucy5zZXRJZGVudGl0eSgpO1xuXG4gICAgICAgIF92ZWMzXzEuc2V0WChfY2hpbGQucG9zaXRpb25fb2Zmc2V0LngpO1xuICAgICAgICBfdmVjM18xLnNldFkoX2NoaWxkLnBvc2l0aW9uX29mZnNldC55KTtcbiAgICAgICAgX3ZlYzNfMS5zZXRaKF9jaGlsZC5wb3NpdGlvbl9vZmZzZXQueik7XG4gICAgICAgIHRyYW5zLnNldE9yaWdpbihfdmVjM18xKTtcblxuICAgICAgICBfcXVhdC5zZXRYKF9jaGlsZC5yb3RhdGlvbi54KTtcbiAgICAgICAgX3F1YXQuc2V0WShfY2hpbGQucm90YXRpb24ueSk7XG4gICAgICAgIF9xdWF0LnNldFooX2NoaWxkLnJvdGF0aW9uLnopO1xuICAgICAgICBfcXVhdC5zZXRXKF9jaGlsZC5yb3RhdGlvbi53KTtcbiAgICAgICAgdHJhbnMuc2V0Um90YXRpb24oX3F1YXQpO1xuXG4gICAgICAgIHNoYXBlID0gY3JlYXRlU2hhcGUoZGVzY3JpcHRpb24uY2hpbGRyZW5baV0pO1xuICAgICAgICBjb21wb3VuZF9zaGFwZS5hZGRDaGlsZFNoYXBlKHRyYW5zLCBzaGFwZSk7XG4gICAgICAgIEFtbW8uZGVzdHJveSh0cmFucyk7XG4gICAgICB9XG5cbiAgICAgIHNoYXBlID0gY29tcG91bmRfc2hhcGU7XG4gICAgICBfY29tcG91bmRfc2hhcGVzW2Rlc2NyaXB0aW9uLmlkXSA9IHNoYXBlO1xuICAgIH1cblxuICAgIF92ZWMzXzEuc2V0WChkZXNjcmlwdGlvbi5zY2FsZS54KTtcbiAgICBfdmVjM18xLnNldFkoZGVzY3JpcHRpb24uc2NhbGUueSk7XG4gICAgX3ZlYzNfMS5zZXRaKGRlc2NyaXB0aW9uLnNjYWxlLnopO1xuXG4gICAgc2hhcGUuc2V0TG9jYWxTY2FsaW5nKF92ZWMzXzEpO1xuXG4gICAgX3ZlYzNfMS5zZXRYKDApO1xuICAgIF92ZWMzXzEuc2V0WSgwKTtcbiAgICBfdmVjM18xLnNldFooMCk7XG4gICAgc2hhcGUuY2FsY3VsYXRlTG9jYWxJbmVydGlhKGRlc2NyaXB0aW9uLm1hc3MsIF92ZWMzXzEpO1xuXG4gICAgX3RyYW5zZm9ybS5zZXRJZGVudGl0eSgpO1xuXG4gICAgX3ZlYzNfMi5zZXRYKGRlc2NyaXB0aW9uLnBvc2l0aW9uLngpO1xuICAgIF92ZWMzXzIuc2V0WShkZXNjcmlwdGlvbi5wb3NpdGlvbi55KTtcbiAgICBfdmVjM18yLnNldFooZGVzY3JpcHRpb24ucG9zaXRpb24ueik7XG4gICAgX3RyYW5zZm9ybS5zZXRPcmlnaW4oX3ZlYzNfMik7XG5cbiAgICBfcXVhdC5zZXRYKGRlc2NyaXB0aW9uLnJvdGF0aW9uLngpO1xuICAgIF9xdWF0LnNldFkoZGVzY3JpcHRpb24ucm90YXRpb24ueSk7XG4gICAgX3F1YXQuc2V0WihkZXNjcmlwdGlvbi5yb3RhdGlvbi56KTtcbiAgICBfcXVhdC5zZXRXKGRlc2NyaXB0aW9uLnJvdGF0aW9uLncpO1xuICAgIF90cmFuc2Zvcm0uc2V0Um90YXRpb24oX3F1YXQpO1xuXG4gICAgbW90aW9uU3RhdGUgPSBuZXcgQW1tby5idERlZmF1bHRNb3Rpb25TdGF0ZShfdHJhbnNmb3JtKTsgLy8gI1RPRE86IGJ0RGVmYXVsdE1vdGlvblN0YXRlIHN1cHBvcnRzIGNlbnRlciBvZiBtYXNzIG9mZnNldCBhcyBzZWNvbmQgYXJndW1lbnQgLSBpbXBsZW1lbnRcbiAgICBjb25zdCByYkluZm8gPSBuZXcgQW1tby5idFJpZ2lkQm9keUNvbnN0cnVjdGlvbkluZm8oZGVzY3JpcHRpb24ubWFzcywgbW90aW9uU3RhdGUsIHNoYXBlLCBfdmVjM18xKTtcblxuICAgIHJiSW5mby5zZXRfbV9mcmljdGlvbihkZXNjcmlwdGlvbi5mcmljdGlvbik7XG4gICAgcmJJbmZvLnNldF9tX3Jlc3RpdHV0aW9uKGRlc2NyaXB0aW9uLnJlc3RpdHV0aW9uKTtcbiAgICByYkluZm8uc2V0X21fbGluZWFyRGFtcGluZyhkZXNjcmlwdGlvbi5kYW1waW5nKTtcbiAgICByYkluZm8uc2V0X21fYW5ndWxhckRhbXBpbmcoZGVzY3JpcHRpb24uZGFtcGluZyk7XG5cbiAgICBib2R5ID0gbmV3IEFtbW8uYnRSaWdpZEJvZHkocmJJbmZvKTtcbiAgICBBbW1vLmNhc3RPYmplY3QoYm9keSwgQW1tby5idENvbGxpc2lvbk9iamVjdCkuZ2V0Q29sbGlzaW9uU2hhcGUoKS5zZXRNYXJnaW4oZGVzY3JpcHRpb24ubWFyZ2luID8gZGVzY3JpcHRpb24ubWFyZ2luIDogMCk7XG4gICAgYm9keS5zZXRBY3RpdmF0aW9uU3RhdGUoZGVzY3JpcHRpb24uc3RhdGUgfHwgNCk7XG4gICAgQW1tby5kZXN0cm95KHJiSW5mbyk7XG5cbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0aW9uLmNvbGxpc2lvbl9mbGFncyAhPT0gJ3VuZGVmaW5lZCcpIGJvZHkuc2V0Q29sbGlzaW9uRmxhZ3MoZGVzY3JpcHRpb24uY29sbGlzaW9uX2ZsYWdzKTtcblxuICAgIGlmIChkZXNjcmlwdGlvbi5ncm91cCAmJiBkZXNjcmlwdGlvbi5tYXNrKSB3b3JsZC5hZGRSaWdpZEJvZHkoYm9keSwgZGVzY3JpcHRpb24uZ3JvdXAsIGRlc2NyaXB0aW9uLm1hc2spO1xuICAgIGVsc2Ugd29ybGQuYWRkUmlnaWRCb2R5KGJvZHkpO1xuICAgIGJvZHkudHlwZSA9IDE7IC8vIFJpZ2lkQm9keS5cbiAgICBfbnVtX3JpZ2lkYm9keV9vYmplY3RzKys7XG4gIH1cblxuICBib2R5LmFjdGl2YXRlKCk7XG5cbiAgYm9keS5pZCA9IGRlc2NyaXB0aW9uLmlkO1xuICBfb2JqZWN0c1tib2R5LmlkXSA9IGJvZHk7XG4gIF9tb3Rpb25fc3RhdGVzW2JvZHkuaWRdID0gbW90aW9uU3RhdGU7XG5cbiAgX29iamVjdHNfYW1tb1tib2R5LmEgPT09IHVuZGVmaW5lZCA/IGJvZHkucHRyIDogYm9keS5hXSA9IGJvZHkuaWQ7XG4gIF9udW1fb2JqZWN0cysrO1xuXG4gIHRyYW5zZmVyYWJsZU1lc3NhZ2Uoe2NtZDogJ29iamVjdFJlYWR5JywgcGFyYW1zOiBib2R5LmlkfSk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLmFkZFZlaGljbGUgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdmVoaWNsZV90dW5pbmcgPSBuZXcgQW1tby5idFZlaGljbGVUdW5pbmcoKTtcblxuICB2ZWhpY2xlX3R1bmluZy5zZXRfbV9zdXNwZW5zaW9uU3RpZmZuZXNzKGRlc2NyaXB0aW9uLnN1c3BlbnNpb25fc3RpZmZuZXNzKTtcbiAgdmVoaWNsZV90dW5pbmcuc2V0X21fc3VzcGVuc2lvbkNvbXByZXNzaW9uKGRlc2NyaXB0aW9uLnN1c3BlbnNpb25fY29tcHJlc3Npb24pO1xuICB2ZWhpY2xlX3R1bmluZy5zZXRfbV9zdXNwZW5zaW9uRGFtcGluZyhkZXNjcmlwdGlvbi5zdXNwZW5zaW9uX2RhbXBpbmcpO1xuICB2ZWhpY2xlX3R1bmluZy5zZXRfbV9tYXhTdXNwZW5zaW9uVHJhdmVsQ20oZGVzY3JpcHRpb24ubWF4X3N1c3BlbnNpb25fdHJhdmVsKTtcbiAgdmVoaWNsZV90dW5pbmcuc2V0X21fbWF4U3VzcGVuc2lvbkZvcmNlKGRlc2NyaXB0aW9uLm1heF9zdXNwZW5zaW9uX2ZvcmNlKTtcblxuICBjb25zdCB2ZWhpY2xlID0gbmV3IEFtbW8uYnRSYXljYXN0VmVoaWNsZShcbiAgICB2ZWhpY2xlX3R1bmluZyxcbiAgICBfb2JqZWN0c1tkZXNjcmlwdGlvbi5yaWdpZEJvZHldLFxuICAgIG5ldyBBbW1vLmJ0RGVmYXVsdFZlaGljbGVSYXljYXN0ZXIod29ybGQpXG4gICk7XG5cbiAgdmVoaWNsZS50dW5pbmcgPSB2ZWhpY2xlX3R1bmluZztcbiAgX29iamVjdHNbZGVzY3JpcHRpb24ucmlnaWRCb2R5XS5zZXRBY3RpdmF0aW9uU3RhdGUoNCk7XG4gIHZlaGljbGUuc2V0Q29vcmRpbmF0ZVN5c3RlbSgwLCAxLCAyKTtcblxuICB3b3JsZC5hZGRWZWhpY2xlKHZlaGljbGUpO1xuICBfdmVoaWNsZXNbZGVzY3JpcHRpb24uaWRdID0gdmVoaWNsZTtcbn07XG5wdWJsaWNfZnVuY3Rpb25zLnJlbW92ZVZlaGljbGUgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgX3ZlaGljbGVzW2Rlc2NyaXB0aW9uLmlkXSA9IG51bGw7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLmFkZFdoZWVsID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIGlmIChfdmVoaWNsZXNbZGVzY3JpcHRpb24uaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdHVuaW5nID0gX3ZlaGljbGVzW2Rlc2NyaXB0aW9uLmlkXS50dW5pbmc7XG4gICAgaWYgKGRlc2NyaXB0aW9uLnR1bmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0dW5pbmcgPSBuZXcgQW1tby5idFZlaGljbGVUdW5pbmcoKTtcbiAgICAgIHR1bmluZy5zZXRfbV9zdXNwZW5zaW9uU3RpZmZuZXNzKGRlc2NyaXB0aW9uLnR1bmluZy5zdXNwZW5zaW9uX3N0aWZmbmVzcyk7XG4gICAgICB0dW5pbmcuc2V0X21fc3VzcGVuc2lvbkNvbXByZXNzaW9uKGRlc2NyaXB0aW9uLnR1bmluZy5zdXNwZW5zaW9uX2NvbXByZXNzaW9uKTtcbiAgICAgIHR1bmluZy5zZXRfbV9zdXNwZW5zaW9uRGFtcGluZyhkZXNjcmlwdGlvbi50dW5pbmcuc3VzcGVuc2lvbl9kYW1waW5nKTtcbiAgICAgIHR1bmluZy5zZXRfbV9tYXhTdXNwZW5zaW9uVHJhdmVsQ20oZGVzY3JpcHRpb24udHVuaW5nLm1heF9zdXNwZW5zaW9uX3RyYXZlbCk7XG4gICAgICB0dW5pbmcuc2V0X21fbWF4U3VzcGVuc2lvbkZvcmNlKGRlc2NyaXB0aW9uLnR1bmluZy5tYXhfc3VzcGVuc2lvbl9mb3JjZSk7XG4gICAgfVxuXG4gICAgX3ZlYzNfMS5zZXRYKGRlc2NyaXB0aW9uLmNvbm5lY3Rpb25fcG9pbnQueCk7XG4gICAgX3ZlYzNfMS5zZXRZKGRlc2NyaXB0aW9uLmNvbm5lY3Rpb25fcG9pbnQueSk7XG4gICAgX3ZlYzNfMS5zZXRaKGRlc2NyaXB0aW9uLmNvbm5lY3Rpb25fcG9pbnQueik7XG5cbiAgICBfdmVjM18yLnNldFgoZGVzY3JpcHRpb24ud2hlZWxfZGlyZWN0aW9uLngpO1xuICAgIF92ZWMzXzIuc2V0WShkZXNjcmlwdGlvbi53aGVlbF9kaXJlY3Rpb24ueSk7XG4gICAgX3ZlYzNfMi5zZXRaKGRlc2NyaXB0aW9uLndoZWVsX2RpcmVjdGlvbi56KTtcblxuICAgIF92ZWMzXzMuc2V0WChkZXNjcmlwdGlvbi53aGVlbF9heGxlLngpO1xuICAgIF92ZWMzXzMuc2V0WShkZXNjcmlwdGlvbi53aGVlbF9heGxlLnkpO1xuICAgIF92ZWMzXzMuc2V0WihkZXNjcmlwdGlvbi53aGVlbF9heGxlLnopO1xuXG4gICAgX3ZlaGljbGVzW2Rlc2NyaXB0aW9uLmlkXS5hZGRXaGVlbChcbiAgICAgIF92ZWMzXzEsXG4gICAgICBfdmVjM18yLFxuICAgICAgX3ZlYzNfMyxcbiAgICAgIGRlc2NyaXB0aW9uLnN1c3BlbnNpb25fcmVzdF9sZW5ndGgsXG4gICAgICBkZXNjcmlwdGlvbi53aGVlbF9yYWRpdXMsXG4gICAgICB0dW5pbmcsXG4gICAgICBkZXNjcmlwdGlvbi5pc19mcm9udF93aGVlbFxuICAgICk7XG4gIH1cblxuICBfbnVtX3doZWVscysrO1xuXG4gIGlmIChTVVBQT1JUX1RSQU5TRkVSQUJMRSkge1xuICAgIHZlaGljbGVyZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KDEgKyBfbnVtX3doZWVscyAqIFZFSElDTEVSRVBPUlRfSVRFTVNJWkUpOyAvLyBtZXNzYWdlIGlkICYgKCAjIG9mIG9iamVjdHMgdG8gcmVwb3J0ICogIyBvZiB2YWx1ZXMgcGVyIG9iamVjdCApXG4gICAgdmVoaWNsZXJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuVkVISUNMRVJFUE9SVDtcbiAgfSBlbHNlIHZlaGljbGVyZXBvcnQgPSBbTUVTU0FHRV9UWVBFUy5WRUhJQ0xFUkVQT1JUXTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuc2V0U3RlZXJpbmcgPSAoZGV0YWlscykgPT4ge1xuICBpZiAoX3ZlaGljbGVzW2RldGFpbHMuaWRdICE9PSB1bmRlZmluZWQpIF92ZWhpY2xlc1tkZXRhaWxzLmlkXS5zZXRTdGVlcmluZ1ZhbHVlKGRldGFpbHMuc3RlZXJpbmcsIGRldGFpbHMud2hlZWwpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5zZXRCcmFrZSA9IChkZXRhaWxzKSA9PiB7XG4gIGlmIChfdmVoaWNsZXNbZGV0YWlscy5pZF0gIT09IHVuZGVmaW5lZCkgX3ZlaGljbGVzW2RldGFpbHMuaWRdLnNldEJyYWtlKGRldGFpbHMuYnJha2UsIGRldGFpbHMud2hlZWwpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5hcHBseUVuZ2luZUZvcmNlID0gKGRldGFpbHMpID0+IHtcbiAgaWYgKF92ZWhpY2xlc1tkZXRhaWxzLmlkXSAhPT0gdW5kZWZpbmVkKSBfdmVoaWNsZXNbZGV0YWlscy5pZF0uYXBwbHlFbmdpbmVGb3JjZShkZXRhaWxzLmZvcmNlLCBkZXRhaWxzLndoZWVsKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMucmVtb3ZlT2JqZWN0ID0gKGRldGFpbHMpID0+IHtcbiAgaWYgKF9vYmplY3RzW2RldGFpbHMuaWRdLnR5cGUgPT09IDApIHtcbiAgICBfbnVtX3NvZnRib2R5X29iamVjdHMtLTtcbiAgICBfc29mdGJvZHlfcmVwb3J0X3NpemUgLT0gX29iamVjdHNbZGV0YWlscy5pZF0uZ2V0X21fbm9kZXMoKS5zaXplKCk7XG4gICAgd29ybGQucmVtb3ZlU29mdEJvZHkoX29iamVjdHNbZGV0YWlscy5pZF0pO1xuICB9IGVsc2UgaWYgKF9vYmplY3RzW2RldGFpbHMuaWRdLnR5cGUgPT09IDEpIHtcbiAgICBfbnVtX3JpZ2lkYm9keV9vYmplY3RzLS07XG4gICAgd29ybGQucmVtb3ZlUmlnaWRCb2R5KF9vYmplY3RzW2RldGFpbHMuaWRdKTtcbiAgICBBbW1vLmRlc3Ryb3koX21vdGlvbl9zdGF0ZXNbZGV0YWlscy5pZF0pO1xuICB9XG5cbiAgQW1tby5kZXN0cm95KF9vYmplY3RzW2RldGFpbHMuaWRdKTtcbiAgaWYgKF9jb21wb3VuZF9zaGFwZXNbZGV0YWlscy5pZF0pIEFtbW8uZGVzdHJveShfY29tcG91bmRfc2hhcGVzW2RldGFpbHMuaWRdKTtcbiAgaWYgKF9ub25jYWNoZWRfc2hhcGVzW2RldGFpbHMuaWRdKSBBbW1vLmRlc3Ryb3koX25vbmNhY2hlZF9zaGFwZXNbZGV0YWlscy5pZF0pO1xuXG4gIF9vYmplY3RzX2FtbW9bX29iamVjdHNbZGV0YWlscy5pZF0uYSA9PT0gdW5kZWZpbmVkID8gX29iamVjdHNbZGV0YWlscy5pZF0uYSA6IF9vYmplY3RzW2RldGFpbHMuaWRdLnB0cl0gPSBudWxsO1xuICBfb2JqZWN0c1tkZXRhaWxzLmlkXSA9IG51bGw7XG4gIF9tb3Rpb25fc3RhdGVzW2RldGFpbHMuaWRdID0gbnVsbDtcblxuICBpZiAoX2NvbXBvdW5kX3NoYXBlc1tkZXRhaWxzLmlkXSkgX2NvbXBvdW5kX3NoYXBlc1tkZXRhaWxzLmlkXSA9IG51bGw7XG4gIGlmIChfbm9uY2FjaGVkX3NoYXBlc1tkZXRhaWxzLmlkXSkgX25vbmNhY2hlZF9zaGFwZXNbZGV0YWlscy5pZF0gPSBudWxsO1xuICBfbnVtX29iamVjdHMtLTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMudXBkYXRlVHJhbnNmb3JtID0gKGRldGFpbHMpID0+IHtcbiAgX29iamVjdCA9IF9vYmplY3RzW2RldGFpbHMuaWRdO1xuXG4gIGlmIChfb2JqZWN0LnR5cGUgPT09IDEpIHtcbiAgICBfb2JqZWN0LmdldE1vdGlvblN0YXRlKCkuZ2V0V29ybGRUcmFuc2Zvcm0oX3RyYW5zZm9ybSk7XG5cbiAgICBpZiAoZGV0YWlscy5wb3MpIHtcbiAgICAgIF92ZWMzXzEuc2V0WChkZXRhaWxzLnBvcy54KTtcbiAgICAgIF92ZWMzXzEuc2V0WShkZXRhaWxzLnBvcy55KTtcbiAgICAgIF92ZWMzXzEuc2V0WihkZXRhaWxzLnBvcy56KTtcbiAgICAgIF90cmFuc2Zvcm0uc2V0T3JpZ2luKF92ZWMzXzEpO1xuICAgIH1cblxuICAgIGlmIChkZXRhaWxzLnF1YXQpIHtcbiAgICAgIF9xdWF0LnNldFgoZGV0YWlscy5xdWF0LngpO1xuICAgICAgX3F1YXQuc2V0WShkZXRhaWxzLnF1YXQueSk7XG4gICAgICBfcXVhdC5zZXRaKGRldGFpbHMucXVhdC56KTtcbiAgICAgIF9xdWF0LnNldFcoZGV0YWlscy5xdWF0LncpO1xuICAgICAgX3RyYW5zZm9ybS5zZXRSb3RhdGlvbihfcXVhdCk7XG4gICAgfVxuXG4gICAgX29iamVjdC5zZXRXb3JsZFRyYW5zZm9ybShfdHJhbnNmb3JtKTtcbiAgICBfb2JqZWN0LmFjdGl2YXRlKCk7XG4gIH0gZWxzZSBpZiAoX29iamVjdC50eXBlID09PSAwKSB7XG4gICAgLy8gX29iamVjdC5nZXRXb3JsZFRyYW5zZm9ybShfdHJhbnNmb3JtKTtcblxuICAgIGlmIChkZXRhaWxzLnBvcykge1xuICAgICAgX3ZlYzNfMS5zZXRYKGRldGFpbHMucG9zLngpO1xuICAgICAgX3ZlYzNfMS5zZXRZKGRldGFpbHMucG9zLnkpO1xuICAgICAgX3ZlYzNfMS5zZXRaKGRldGFpbHMucG9zLnopO1xuICAgICAgX3RyYW5zZm9ybS5zZXRPcmlnaW4oX3ZlYzNfMSk7XG4gICAgfVxuXG4gICAgaWYgKGRldGFpbHMucXVhdCkge1xuICAgICAgX3F1YXQuc2V0WChkZXRhaWxzLnF1YXQueCk7XG4gICAgICBfcXVhdC5zZXRZKGRldGFpbHMucXVhdC55KTtcbiAgICAgIF9xdWF0LnNldFooZGV0YWlscy5xdWF0LnopO1xuICAgICAgX3F1YXQuc2V0VyhkZXRhaWxzLnF1YXQudyk7XG4gICAgICBfdHJhbnNmb3JtLnNldFJvdGF0aW9uKF9xdWF0KTtcbiAgICB9XG5cbiAgICBfb2JqZWN0LnRyYW5zZm9ybShfdHJhbnNmb3JtKTtcbiAgfVxufTtcblxucHVibGljX2Z1bmN0aW9ucy51cGRhdGVNYXNzID0gKGRldGFpbHMpID0+IHtcbiAgLy8gI1RPRE86IGNoYW5naW5nIGEgc3RhdGljIG9iamVjdCBpbnRvIGR5bmFtaWMgaXMgYnVnZ3lcbiAgX29iamVjdCA9IF9vYmplY3RzW2RldGFpbHMuaWRdO1xuXG4gIC8vIFBlciBodHRwOi8vd3d3LmJ1bGxldHBoeXNpY3Mub3JnL0J1bGxldC9waHBCQjMvdmlld3RvcGljLnBocD9wPSZmPTkmdD0zNjYzI3AxMzgxNlxuICB3b3JsZC5yZW1vdmVSaWdpZEJvZHkoX29iamVjdCk7XG5cbiAgX3ZlYzNfMS5zZXRYKDApO1xuICBfdmVjM18xLnNldFkoMCk7XG4gIF92ZWMzXzEuc2V0WigwKTtcblxuICBfb2JqZWN0LnNldE1hc3NQcm9wcyhkZXRhaWxzLm1hc3MsIF92ZWMzXzEpO1xuICB3b3JsZC5hZGRSaWdpZEJvZHkoX29iamVjdCk7XG4gIF9vYmplY3QuYWN0aXZhdGUoKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuYXBwbHlDZW50cmFsSW1wdWxzZSA9IChkZXRhaWxzKSA9PiB7XG4gIF92ZWMzXzEuc2V0WChkZXRhaWxzLngpO1xuICBfdmVjM18xLnNldFkoZGV0YWlscy55KTtcbiAgX3ZlYzNfMS5zZXRaKGRldGFpbHMueik7XG5cbiAgX29iamVjdHNbZGV0YWlscy5pZF0uYXBwbHlDZW50cmFsSW1wdWxzZShfdmVjM18xKTtcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uYWN0aXZhdGUoKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuYXBwbHlJbXB1bHNlID0gKGRldGFpbHMpID0+IHtcbiAgX3ZlYzNfMS5zZXRYKGRldGFpbHMuaW1wdWxzZV94KTtcbiAgX3ZlYzNfMS5zZXRZKGRldGFpbHMuaW1wdWxzZV95KTtcbiAgX3ZlYzNfMS5zZXRaKGRldGFpbHMuaW1wdWxzZV96KTtcblxuICBfdmVjM18yLnNldFgoZGV0YWlscy54KTtcbiAgX3ZlYzNfMi5zZXRZKGRldGFpbHMueSk7XG4gIF92ZWMzXzIuc2V0WihkZXRhaWxzLnopO1xuXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFwcGx5SW1wdWxzZShcbiAgICBfdmVjM18xLFxuICAgIF92ZWMzXzJcbiAgKTtcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uYWN0aXZhdGUoKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuYXBwbHlUb3JxdWUgPSAoZGV0YWlscykgPT4ge1xuICBfdmVjM18xLnNldFgoZGV0YWlscy50b3JxdWVfeCk7XG4gIF92ZWMzXzEuc2V0WShkZXRhaWxzLnRvcnF1ZV95KTtcbiAgX3ZlYzNfMS5zZXRaKGRldGFpbHMudG9ycXVlX3opO1xuXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFwcGx5VG9ycXVlKFxuICAgIF92ZWMzXzFcbiAgKTtcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uYWN0aXZhdGUoKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuYXBwbHlDZW50cmFsRm9yY2UgPSAoZGV0YWlscykgPT4ge1xuICBfdmVjM18xLnNldFgoZGV0YWlscy54KTtcbiAgX3ZlYzNfMS5zZXRZKGRldGFpbHMueSk7XG4gIF92ZWMzXzEuc2V0WihkZXRhaWxzLnopO1xuXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFwcGx5Q2VudHJhbEZvcmNlKF92ZWMzXzEpO1xuICBfb2JqZWN0c1tkZXRhaWxzLmlkXS5hY3RpdmF0ZSgpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5hcHBseUZvcmNlID0gKGRldGFpbHMpID0+IHtcbiAgX3ZlYzNfMS5zZXRYKGRldGFpbHMuZm9yY2VfeCk7XG4gIF92ZWMzXzEuc2V0WShkZXRhaWxzLmZvcmNlX3kpO1xuICBfdmVjM18xLnNldFooZGV0YWlscy5mb3JjZV96KTtcblxuICBfdmVjM18yLnNldFgoZGV0YWlscy54KTtcbiAgX3ZlYzNfMi5zZXRZKGRldGFpbHMueSk7XG4gIF92ZWMzXzIuc2V0WihkZXRhaWxzLnopO1xuXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFwcGx5Rm9yY2UoXG4gICAgX3ZlYzNfMSxcbiAgICBfdmVjM18yXG4gICk7XG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFjdGl2YXRlKCk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLm9uU2ltdWxhdGlvblJlc3VtZSA9ICgpID0+IHtcbiAgbGFzdF9zaW11bGF0aW9uX3RpbWUgPSBEYXRlLm5vdygpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5zZXRBbmd1bGFyVmVsb2NpdHkgPSAoZGV0YWlscykgPT4ge1xuICBfdmVjM18xLnNldFgoZGV0YWlscy54KTtcbiAgX3ZlYzNfMS5zZXRZKGRldGFpbHMueSk7XG4gIF92ZWMzXzEuc2V0WihkZXRhaWxzLnopO1xuXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLnNldEFuZ3VsYXJWZWxvY2l0eShcbiAgICBfdmVjM18xXG4gICk7XG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFjdGl2YXRlKCk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLnNldExpbmVhclZlbG9jaXR5ID0gKGRldGFpbHMpID0+IHtcbiAgX3ZlYzNfMS5zZXRYKGRldGFpbHMueCk7XG4gIF92ZWMzXzEuc2V0WShkZXRhaWxzLnkpO1xuICBfdmVjM18xLnNldFooZGV0YWlscy56KTtcblxuICBfb2JqZWN0c1tkZXRhaWxzLmlkXS5zZXRMaW5lYXJWZWxvY2l0eShcbiAgICBfdmVjM18xXG4gICk7XG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFjdGl2YXRlKCk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLnNldEFuZ3VsYXJGYWN0b3IgPSAoZGV0YWlscykgPT4ge1xuICBfdmVjM18xLnNldFgoZGV0YWlscy54KTtcbiAgX3ZlYzNfMS5zZXRZKGRldGFpbHMueSk7XG4gIF92ZWMzXzEuc2V0WihkZXRhaWxzLnopO1xuXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLnNldEFuZ3VsYXJGYWN0b3IoXG4gICAgICBfdmVjM18xXG4gICk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLnNldExpbmVhckZhY3RvciA9IChkZXRhaWxzKSA9PiB7XG4gIF92ZWMzXzEuc2V0WChkZXRhaWxzLngpO1xuICBfdmVjM18xLnNldFkoZGV0YWlscy55KTtcbiAgX3ZlYzNfMS5zZXRaKGRldGFpbHMueik7XG5cbiAgX29iamVjdHNbZGV0YWlscy5pZF0uc2V0TGluZWFyRmFjdG9yKFxuICAgIF92ZWMzXzFcbiAgKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuc2V0RGFtcGluZyA9IChkZXRhaWxzKSA9PiB7XG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLnNldERhbXBpbmcoZGV0YWlscy5saW5lYXIsIGRldGFpbHMuYW5ndWxhcik7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLnNldENjZE1vdGlvblRocmVzaG9sZCA9IChkZXRhaWxzKSA9PiB7XG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLnNldENjZE1vdGlvblRocmVzaG9sZChkZXRhaWxzLnRocmVzaG9sZCk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLnNldENjZFN3ZXB0U3BoZXJlUmFkaXVzID0gKGRldGFpbHMpID0+IHtcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uc2V0Q2NkU3dlcHRTcGhlcmVSYWRpdXMoZGV0YWlscy5yYWRpdXMpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5hZGRDb25zdHJhaW50ID0gKGRldGFpbHMpID0+IHtcbiAgbGV0IGNvbnN0cmFpbnQ7XG5cbiAgc3dpdGNoIChkZXRhaWxzLnR5cGUpIHtcblxuICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgaWYgKGRldGFpbHMub2JqZWN0YiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIF92ZWMzXzEuc2V0WChkZXRhaWxzLnBvc2l0aW9uYS54KTtcbiAgICAgICAgX3ZlYzNfMS5zZXRZKGRldGFpbHMucG9zaXRpb25hLnkpO1xuICAgICAgICBfdmVjM18xLnNldFooZGV0YWlscy5wb3NpdGlvbmEueik7XG5cbiAgICAgICAgY29uc3RyYWludCA9IG5ldyBBbW1vLmJ0UG9pbnQyUG9pbnRDb25zdHJhaW50KFxuICAgICAgICAgIF9vYmplY3RzW2RldGFpbHMub2JqZWN0YV0sXG4gICAgICAgICAgX3ZlYzNfMVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3ZlYzNfMS5zZXRYKGRldGFpbHMucG9zaXRpb25hLngpO1xuICAgICAgICBfdmVjM18xLnNldFkoZGV0YWlscy5wb3NpdGlvbmEueSk7XG4gICAgICAgIF92ZWMzXzEuc2V0WihkZXRhaWxzLnBvc2l0aW9uYS56KTtcblxuICAgICAgICBfdmVjM18yLnNldFgoZGV0YWlscy5wb3NpdGlvbmIueCk7XG4gICAgICAgIF92ZWMzXzIuc2V0WShkZXRhaWxzLnBvc2l0aW9uYi55KTtcbiAgICAgICAgX3ZlYzNfMi5zZXRaKGRldGFpbHMucG9zaXRpb25iLnopO1xuXG4gICAgICAgIGNvbnN0cmFpbnQgPSBuZXcgQW1tby5idFBvaW50MlBvaW50Q29uc3RyYWludChcbiAgICAgICAgICBfb2JqZWN0c1tkZXRhaWxzLm9iamVjdGFdLFxuICAgICAgICAgIF9vYmplY3RzW2RldGFpbHMub2JqZWN0Yl0sXG4gICAgICAgICAgX3ZlYzNfMSxcbiAgICAgICAgICBfdmVjM18yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnaGluZ2UnOiB7XG4gICAgICBpZiAoZGV0YWlscy5vYmplY3RiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgX3ZlYzNfMS5zZXRYKGRldGFpbHMucG9zaXRpb25hLngpO1xuICAgICAgICBfdmVjM18xLnNldFkoZGV0YWlscy5wb3NpdGlvbmEueSk7XG4gICAgICAgIF92ZWMzXzEuc2V0WihkZXRhaWxzLnBvc2l0aW9uYS56KTtcblxuICAgICAgICBfdmVjM18yLnNldFgoZGV0YWlscy5heGlzLngpO1xuICAgICAgICBfdmVjM18yLnNldFkoZGV0YWlscy5heGlzLnkpO1xuICAgICAgICBfdmVjM18yLnNldFooZGV0YWlscy5heGlzLnopO1xuXG4gICAgICAgIGNvbnN0cmFpbnQgPSBuZXcgQW1tby5idEhpbmdlQ29uc3RyYWludChcbiAgICAgICAgICBfb2JqZWN0c1tkZXRhaWxzLm9iamVjdGFdLFxuICAgICAgICAgIF92ZWMzXzEsXG4gICAgICAgICAgX3ZlYzNfMlxuICAgICAgICApO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdmVjM18xLnNldFgoZGV0YWlscy5wb3NpdGlvbmEueCk7XG4gICAgICAgIF92ZWMzXzEuc2V0WShkZXRhaWxzLnBvc2l0aW9uYS55KTtcbiAgICAgICAgX3ZlYzNfMS5zZXRaKGRldGFpbHMucG9zaXRpb25hLnopO1xuXG4gICAgICAgIF92ZWMzXzIuc2V0WChkZXRhaWxzLnBvc2l0aW9uYi54KTtcbiAgICAgICAgX3ZlYzNfMi5zZXRZKGRldGFpbHMucG9zaXRpb25iLnkpO1xuICAgICAgICBfdmVjM18yLnNldFooZGV0YWlscy5wb3NpdGlvbmIueik7XG5cbiAgICAgICAgX3ZlYzNfMy5zZXRYKGRldGFpbHMuYXhpcy54KTtcbiAgICAgICAgX3ZlYzNfMy5zZXRZKGRldGFpbHMuYXhpcy55KTtcbiAgICAgICAgX3ZlYzNfMy5zZXRaKGRldGFpbHMuYXhpcy56KTtcblxuICAgICAgICBjb25zdHJhaW50ID0gbmV3IEFtbW8uYnRIaW5nZUNvbnN0cmFpbnQoXG4gICAgICAgICAgX29iamVjdHNbZGV0YWlscy5vYmplY3RhXSxcbiAgICAgICAgICBfb2JqZWN0c1tkZXRhaWxzLm9iamVjdGJdLFxuICAgICAgICAgIF92ZWMzXzEsXG4gICAgICAgICAgX3ZlYzNfMixcbiAgICAgICAgICBfdmVjM18zLFxuICAgICAgICAgIF92ZWMzXzNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdzbGlkZXInOiB7XG4gICAgICBsZXQgdHJhbnNmb3JtYjtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWEgPSBuZXcgQW1tby5idFRyYW5zZm9ybSgpO1xuXG4gICAgICBfdmVjM18xLnNldFgoZGV0YWlscy5wb3NpdGlvbmEueCk7XG4gICAgICBfdmVjM18xLnNldFkoZGV0YWlscy5wb3NpdGlvbmEueSk7XG4gICAgICBfdmVjM18xLnNldFooZGV0YWlscy5wb3NpdGlvbmEueik7XG5cbiAgICAgIHRyYW5zZm9ybWEuc2V0T3JpZ2luKF92ZWMzXzEpO1xuXG4gICAgICBsZXQgcm90YXRpb24gPSB0cmFuc2Zvcm1hLmdldFJvdGF0aW9uKCk7XG4gICAgICByb3RhdGlvbi5zZXRFdWxlcihkZXRhaWxzLmF4aXMueCwgZGV0YWlscy5heGlzLnksIGRldGFpbHMuYXhpcy56KTtcbiAgICAgIHRyYW5zZm9ybWEuc2V0Um90YXRpb24ocm90YXRpb24pO1xuXG4gICAgICBpZiAoZGV0YWlscy5vYmplY3RiKSB7XG4gICAgICAgIHRyYW5zZm9ybWIgPSBuZXcgQW1tby5idFRyYW5zZm9ybSgpO1xuXG4gICAgICAgIF92ZWMzXzIuc2V0WChkZXRhaWxzLnBvc2l0aW9uYi54KTtcbiAgICAgICAgX3ZlYzNfMi5zZXRZKGRldGFpbHMucG9zaXRpb25iLnkpO1xuICAgICAgICBfdmVjM18yLnNldFooZGV0YWlscy5wb3NpdGlvbmIueik7XG5cbiAgICAgICAgdHJhbnNmb3JtYi5zZXRPcmlnaW4oX3ZlYzNfMik7XG5cbiAgICAgICAgcm90YXRpb24gPSB0cmFuc2Zvcm1iLmdldFJvdGF0aW9uKCk7XG4gICAgICAgIHJvdGF0aW9uLnNldEV1bGVyKGRldGFpbHMuYXhpcy54LCBkZXRhaWxzLmF4aXMueSwgZGV0YWlscy5heGlzLnopO1xuICAgICAgICB0cmFuc2Zvcm1iLnNldFJvdGF0aW9uKHJvdGF0aW9uKTtcblxuICAgICAgICBjb25zdHJhaW50ID0gbmV3IEFtbW8uYnRTbGlkZXJDb25zdHJhaW50KFxuICAgICAgICAgIF9vYmplY3RzW2RldGFpbHMub2JqZWN0YV0sXG4gICAgICAgICAgX29iamVjdHNbZGV0YWlscy5vYmplY3RiXSxcbiAgICAgICAgICB0cmFuc2Zvcm1hLFxuICAgICAgICAgIHRyYW5zZm9ybWIsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3RyYWludCA9IG5ldyBBbW1vLmJ0U2xpZGVyQ29uc3RyYWludChcbiAgICAgICAgICBfb2JqZWN0c1tkZXRhaWxzLm9iamVjdGFdLFxuICAgICAgICAgIHRyYW5zZm9ybWEsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdHJhaW50LnRhID0gdHJhbnNmb3JtYTtcbiAgICAgIGNvbnN0cmFpbnQudGIgPSB0cmFuc2Zvcm1iO1xuXG4gICAgICBBbW1vLmRlc3Ryb3kodHJhbnNmb3JtYSk7XG4gICAgICBpZiAodHJhbnNmb3JtYiAhPT0gdW5kZWZpbmVkKSBBbW1vLmRlc3Ryb3kodHJhbnNmb3JtYik7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdjb25ldHdpc3QnOiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1hID0gbmV3IEFtbW8uYnRUcmFuc2Zvcm0oKTtcbiAgICAgIHRyYW5zZm9ybWEuc2V0SWRlbnRpdHkoKTtcblxuICAgICAgY29uc3QgdHJhbnNmb3JtYiA9IG5ldyBBbW1vLmJ0VHJhbnNmb3JtKCk7XG4gICAgICB0cmFuc2Zvcm1iLnNldElkZW50aXR5KCk7XG5cbiAgICAgIF92ZWMzXzEuc2V0WChkZXRhaWxzLnBvc2l0aW9uYS54KTtcbiAgICAgIF92ZWMzXzEuc2V0WShkZXRhaWxzLnBvc2l0aW9uYS55KTtcbiAgICAgIF92ZWMzXzEuc2V0WihkZXRhaWxzLnBvc2l0aW9uYS56KTtcblxuICAgICAgX3ZlYzNfMi5zZXRYKGRldGFpbHMucG9zaXRpb25iLngpO1xuICAgICAgX3ZlYzNfMi5zZXRZKGRldGFpbHMucG9zaXRpb25iLnkpO1xuICAgICAgX3ZlYzNfMi5zZXRaKGRldGFpbHMucG9zaXRpb25iLnopO1xuXG4gICAgICB0cmFuc2Zvcm1hLnNldE9yaWdpbihfdmVjM18xKTtcbiAgICAgIHRyYW5zZm9ybWIuc2V0T3JpZ2luKF92ZWMzXzIpO1xuXG4gICAgICBsZXQgcm90YXRpb24gPSB0cmFuc2Zvcm1hLmdldFJvdGF0aW9uKCk7XG4gICAgICByb3RhdGlvbi5zZXRFdWxlclpZWCgtZGV0YWlscy5heGlzYS56LCAtZGV0YWlscy5heGlzYS55LCAtZGV0YWlscy5heGlzYS54KTtcbiAgICAgIHRyYW5zZm9ybWEuc2V0Um90YXRpb24ocm90YXRpb24pO1xuXG4gICAgICByb3RhdGlvbiA9IHRyYW5zZm9ybWIuZ2V0Um90YXRpb24oKTtcbiAgICAgIHJvdGF0aW9uLnNldEV1bGVyWllYKC1kZXRhaWxzLmF4aXNiLnosIC1kZXRhaWxzLmF4aXNiLnksIC1kZXRhaWxzLmF4aXNiLngpO1xuICAgICAgdHJhbnNmb3JtYi5zZXRSb3RhdGlvbihyb3RhdGlvbik7XG5cbiAgICAgIGNvbnN0cmFpbnQgPSBuZXcgQW1tby5idENvbmVUd2lzdENvbnN0cmFpbnQoXG4gICAgICAgIF9vYmplY3RzW2RldGFpbHMub2JqZWN0YV0sXG4gICAgICAgIF9vYmplY3RzW2RldGFpbHMub2JqZWN0Yl0sXG4gICAgICAgIHRyYW5zZm9ybWEsXG4gICAgICAgIHRyYW5zZm9ybWJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0cmFpbnQuc2V0TGltaXQoTWF0aC5QSSwgMCwgTWF0aC5QSSk7XG5cbiAgICAgIGNvbnN0cmFpbnQudGEgPSB0cmFuc2Zvcm1hO1xuICAgICAgY29uc3RyYWludC50YiA9IHRyYW5zZm9ybWI7XG5cbiAgICAgIEFtbW8uZGVzdHJveSh0cmFuc2Zvcm1hKTtcbiAgICAgIEFtbW8uZGVzdHJveSh0cmFuc2Zvcm1iKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2RvZic6IHtcbiAgICAgIGxldCB0cmFuc2Zvcm1iO1xuXG4gICAgICBjb25zdCB0cmFuc2Zvcm1hID0gbmV3IEFtbW8uYnRUcmFuc2Zvcm0oKTtcbiAgICAgIHRyYW5zZm9ybWEuc2V0SWRlbnRpdHkoKTtcblxuICAgICAgX3ZlYzNfMS5zZXRYKGRldGFpbHMucG9zaXRpb25hLngpO1xuICAgICAgX3ZlYzNfMS5zZXRZKGRldGFpbHMucG9zaXRpb25hLnkpO1xuICAgICAgX3ZlYzNfMS5zZXRaKGRldGFpbHMucG9zaXRpb25hLnopO1xuXG4gICAgICB0cmFuc2Zvcm1hLnNldE9yaWdpbihfdmVjM18xKTtcblxuICAgICAgbGV0IHJvdGF0aW9uID0gdHJhbnNmb3JtYS5nZXRSb3RhdGlvbigpO1xuICAgICAgcm90YXRpb24uc2V0RXVsZXJaWVgoLWRldGFpbHMuYXhpc2EueiwgLWRldGFpbHMuYXhpc2EueSwgLWRldGFpbHMuYXhpc2EueCk7XG4gICAgICB0cmFuc2Zvcm1hLnNldFJvdGF0aW9uKHJvdGF0aW9uKTtcblxuICAgICAgaWYgKGRldGFpbHMub2JqZWN0Yikge1xuICAgICAgICB0cmFuc2Zvcm1iID0gbmV3IEFtbW8uYnRUcmFuc2Zvcm0oKTtcbiAgICAgICAgdHJhbnNmb3JtYi5zZXRJZGVudGl0eSgpO1xuXG4gICAgICAgIF92ZWMzXzIuc2V0WChkZXRhaWxzLnBvc2l0aW9uYi54KTtcbiAgICAgICAgX3ZlYzNfMi5zZXRZKGRldGFpbHMucG9zaXRpb25iLnkpO1xuICAgICAgICBfdmVjM18yLnNldFooZGV0YWlscy5wb3NpdGlvbmIueik7XG5cbiAgICAgICAgdHJhbnNmb3JtYi5zZXRPcmlnaW4oX3ZlYzNfMik7XG5cbiAgICAgICAgcm90YXRpb24gPSB0cmFuc2Zvcm1iLmdldFJvdGF0aW9uKCk7XG4gICAgICAgIHJvdGF0aW9uLnNldEV1bGVyWllYKC1kZXRhaWxzLmF4aXNiLnosIC1kZXRhaWxzLmF4aXNiLnksIC1kZXRhaWxzLmF4aXNiLngpO1xuICAgICAgICB0cmFuc2Zvcm1iLnNldFJvdGF0aW9uKHJvdGF0aW9uKTtcblxuICAgICAgICBjb25zdHJhaW50ID0gbmV3IEFtbW8uYnRHZW5lcmljNkRvZkNvbnN0cmFpbnQoXG4gICAgICAgICAgX29iamVjdHNbZGV0YWlscy5vYmplY3RhXSxcbiAgICAgICAgICBfb2JqZWN0c1tkZXRhaWxzLm9iamVjdGJdLFxuICAgICAgICAgIHRyYW5zZm9ybWEsXG4gICAgICAgICAgdHJhbnNmb3JtYixcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdHJhaW50ID0gbmV3IEFtbW8uYnRHZW5lcmljNkRvZkNvbnN0cmFpbnQoXG4gICAgICAgICAgX29iamVjdHNbZGV0YWlscy5vYmplY3RhXSxcbiAgICAgICAgICB0cmFuc2Zvcm1hLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgY29uc3RyYWludC50YSA9IHRyYW5zZm9ybWE7XG4gICAgICBjb25zdHJhaW50LnRiID0gdHJhbnNmb3JtYjtcblxuICAgICAgQW1tby5kZXN0cm95KHRyYW5zZm9ybWEpO1xuICAgICAgaWYgKHRyYW5zZm9ybWIgIT09IHVuZGVmaW5lZCkgQW1tby5kZXN0cm95KHRyYW5zZm9ybWIpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIHdvcmxkLmFkZENvbnN0cmFpbnQoY29uc3RyYWludCk7XG5cbiAgY29uc3RyYWludC5hID0gX29iamVjdHNbZGV0YWlscy5vYmplY3RhXTtcbiAgY29uc3RyYWludC5iID0gX29iamVjdHNbZGV0YWlscy5vYmplY3RiXTtcblxuICBjb25zdHJhaW50LmVuYWJsZUZlZWRiYWNrKCk7XG4gIF9jb25zdHJhaW50c1tkZXRhaWxzLmlkXSA9IGNvbnN0cmFpbnQ7XG4gIF9udW1fY29uc3RyYWludHMrKztcblxuICBpZiAoU1VQUE9SVF9UUkFOU0ZFUkFCTEUpIHtcbiAgICBjb25zdHJhaW50cmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheSgxICsgX251bV9jb25zdHJhaW50cyAqIENPTlNUUkFJTlRSRVBPUlRfSVRFTVNJWkUpOyAvLyBtZXNzYWdlIGlkICYgKCAjIG9mIG9iamVjdHMgdG8gcmVwb3J0ICogIyBvZiB2YWx1ZXMgcGVyIG9iamVjdCApXG4gICAgY29uc3RyYWludHJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuQ09OU1RSQUlOVFJFUE9SVDtcbiAgfSBlbHNlIGNvbnN0cmFpbnRyZXBvcnQgPSBbTUVTU0FHRV9UWVBFUy5DT05TVFJBSU5UUkVQT1JUXTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMucmVtb3ZlQ29uc3RyYWludCA9IChkZXRhaWxzKSA9PiB7XG4gIGNvbnN0IGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbZGV0YWlscy5pZF07XG5cbiAgaWYgKGNvbnN0cmFpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIHdvcmxkLnJlbW92ZUNvbnN0cmFpbnQoY29uc3RyYWludCk7XG4gICAgX2NvbnN0cmFpbnRzW2RldGFpbHMuaWRdID0gbnVsbDtcbiAgICBfbnVtX2NvbnN0cmFpbnRzLS07XG4gIH1cbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuY29uc3RyYWludF9zZXRCcmVha2luZ0ltcHVsc2VUaHJlc2hvbGQgPSAoZGV0YWlscykgPT4ge1xuICBjb25zdCBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW2RldGFpbHMuaWRdO1xuICBpZiAoY29uc3RyYWludCAhPT0gdW5kZWZpbmQpIGNvbnN0cmFpbnQuc2V0QnJlYWtpbmdJbXB1bHNlVGhyZXNob2xkKGRldGFpbHMudGhyZXNob2xkKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuc2ltdWxhdGUgPSAocGFyYW1zID0ge30pID0+IHtcbiAgaWYgKHdvcmxkKSB7XG4gICAgaWYgKHBhcmFtcy50aW1lU3RlcCAmJiBwYXJhbXMudGltZVN0ZXAgPCBmaXhlZFRpbWVTdGVwKVxuICAgICAgcGFyYW1zLnRpbWVTdGVwID0gZml4ZWRUaW1lU3RlcDtcblxuICAgIHBhcmFtcy5tYXhTdWJTdGVwcyA9IHBhcmFtcy5tYXhTdWJTdGVwcyB8fCBNYXRoLmNlaWwocGFyYW1zLnRpbWVTdGVwIC8gZml4ZWRUaW1lU3RlcCk7IC8vIElmIG1heFN1YlN0ZXBzIGlzIG5vdCBkZWZpbmVkLCBrZWVwIHRoZSBzaW11bGF0aW9uIGZ1bGx5IHVwIHRvIGRhdGVcblxuICAgIHdvcmxkLnN0ZXBTaW11bGF0aW9uKHBhcmFtcy50aW1lU3RlcCwgcGFyYW1zLm1heFN1YlN0ZXBzLCBmaXhlZFRpbWVTdGVwKTtcblxuICAgIGlmIChfdmVoaWNsZXMubGVuZ3RoID4gMCkgcmVwb3J0VmVoaWNsZXMoKTtcbiAgICByZXBvcnRDb2xsaXNpb25zKCk7XG4gICAgaWYgKF9jb25zdHJhaW50cy5sZW5ndGggPiAwKSByZXBvcnRDb25zdHJhaW50cygpO1xuICAgIHJlcG9ydFdvcmxkKCk7XG4gICAgaWYgKF9zb2Z0Ym9keV9lbmFibGVkKSByZXBvcnRXb3JsZF9zb2Z0Ym9kaWVzKCk7XG4gIH1cbn07XG5cbi8vIENvbnN0cmFpbnQgZnVuY3Rpb25zXG5wdWJsaWNfZnVuY3Rpb25zLmhpbmdlX3NldExpbWl0cyA9IChwYXJhbXMpID0+IHtcbiAgX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XS5zZXRMaW1pdChwYXJhbXMubG93LCBwYXJhbXMuaGlnaCwgMCwgcGFyYW1zLmJpYXNfZmFjdG9yLCBwYXJhbXMucmVsYXhhdGlvbl9mYWN0b3IpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5oaW5nZV9lbmFibGVBbmd1bGFyTW90b3IgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xuICBjb25zdHJhaW50LmVuYWJsZUFuZ3VsYXJNb3Rvcih0cnVlLCBwYXJhbXMudmVsb2NpdHksIHBhcmFtcy5hY2NlbGVyYXRpb24pO1xuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcbiAgaWYgKGNvbnN0cmFpbnQuYikgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLmhpbmdlX2Rpc2FibGVNb3RvciA9IChwYXJhbXMpID0+IHtcbiAgX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XS5lbmFibGVNb3RvcihmYWxzZSk7XG4gIGlmIChjb25zdHJhaW50LmIpIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5zbGlkZXJfc2V0TGltaXRzID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcbiAgY29uc3RyYWludC5zZXRMb3dlckxpbkxpbWl0KHBhcmFtcy5saW5fbG93ZXIgfHwgMCk7XG4gIGNvbnN0cmFpbnQuc2V0VXBwZXJMaW5MaW1pdChwYXJhbXMubGluX3VwcGVyIHx8IDApO1xuXG4gIGNvbnN0cmFpbnQuc2V0TG93ZXJBbmdMaW1pdChwYXJhbXMuYW5nX2xvd2VyIHx8IDApO1xuICBjb25zdHJhaW50LnNldFVwcGVyQW5nTGltaXQocGFyYW1zLmFuZ191cHBlciB8fCAwKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuc2xpZGVyX3NldFJlc3RpdHV0aW9uID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcbiAgY29uc3RyYWludC5zZXRTb2Z0bmVzc0xpbUxpbihwYXJhbXMubGluZWFyIHx8IDApO1xuICBjb25zdHJhaW50LnNldFNvZnRuZXNzTGltQW5nKHBhcmFtcy5hbmd1bGFyIHx8IDApO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5zbGlkZXJfZW5hYmxlTGluZWFyTW90b3IgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xuICBjb25zdHJhaW50LnNldFRhcmdldExpbk1vdG9yVmVsb2NpdHkocGFyYW1zLnZlbG9jaXR5KTtcbiAgY29uc3RyYWludC5zZXRNYXhMaW5Nb3RvckZvcmNlKHBhcmFtcy5hY2NlbGVyYXRpb24pO1xuICBjb25zdHJhaW50LnNldFBvd2VyZWRMaW5Nb3Rvcih0cnVlKTtcbiAgY29uc3RyYWludC5hLmFjdGl2YXRlKCk7XG4gIGlmIChjb25zdHJhaW50LmIpIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5zbGlkZXJfZGlzYWJsZUxpbmVhck1vdG9yID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcbiAgY29uc3RyYWludC5zZXRQb3dlcmVkTGluTW90b3IoZmFsc2UpO1xuICBpZiAoY29uc3RyYWludC5iKSBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuc2xpZGVyX2VuYWJsZUFuZ3VsYXJNb3RvciA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XG4gIGNvbnN0cmFpbnQuc2V0VGFyZ2V0QW5nTW90b3JWZWxvY2l0eShwYXJhbXMudmVsb2NpdHkpO1xuICBjb25zdHJhaW50LnNldE1heEFuZ01vdG9yRm9yY2UocGFyYW1zLmFjY2VsZXJhdGlvbik7XG4gIGNvbnN0cmFpbnQuc2V0UG93ZXJlZEFuZ01vdG9yKHRydWUpO1xuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcbiAgaWYgKGNvbnN0cmFpbnQuYikgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLnNsaWRlcl9kaXNhYmxlQW5ndWxhck1vdG9yID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcbiAgY29uc3RyYWludC5zZXRQb3dlcmVkQW5nTW90b3IoZmFsc2UpO1xuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcbiAgaWYgKGNvbnN0cmFpbnQuYikgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLmNvbmV0d2lzdF9zZXRMaW1pdCA9IChwYXJhbXMpID0+IHtcbiAgX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XS5zZXRMaW1pdChwYXJhbXMueiwgcGFyYW1zLnksIHBhcmFtcy54KTsgLy8gWllYIG9yZGVyXG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLmNvbmV0d2lzdF9lbmFibGVNb3RvciA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XG4gIGNvbnN0cmFpbnQuZW5hYmxlTW90b3IodHJ1ZSk7XG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xuICBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuY29uZXR3aXN0X3NldE1heE1vdG9ySW1wdWxzZSA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XG4gIGNvbnN0cmFpbnQuc2V0TWF4TW90b3JJbXB1bHNlKHBhcmFtcy5tYXhfaW1wdWxzZSk7XG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xuICBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuY29uZXR3aXN0X3NldE1vdG9yVGFyZ2V0ID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcblxuICBfcXVhdC5zZXRYKHBhcmFtcy54KTtcbiAgX3F1YXQuc2V0WShwYXJhbXMueSk7XG4gIF9xdWF0LnNldFoocGFyYW1zLnopO1xuICBfcXVhdC5zZXRXKHBhcmFtcy53KTtcblxuICBjb25zdHJhaW50LnNldE1vdG9yVGFyZ2V0KF9xdWF0KTtcblxuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcbiAgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLmNvbmV0d2lzdF9kaXNhYmxlTW90b3IgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xuICBjb25zdHJhaW50LmVuYWJsZU1vdG9yKGZhbHNlKTtcbiAgY29uc3RyYWludC5hLmFjdGl2YXRlKCk7XG4gIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5kb2Zfc2V0TGluZWFyTG93ZXJMaW1pdCA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XG5cbiAgX3ZlYzNfMS5zZXRYKHBhcmFtcy54KTtcbiAgX3ZlYzNfMS5zZXRZKHBhcmFtcy55KTtcbiAgX3ZlYzNfMS5zZXRaKHBhcmFtcy56KTtcblxuICBjb25zdHJhaW50LnNldExpbmVhckxvd2VyTGltaXQoX3ZlYzNfMSk7XG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xuXG4gIGlmIChjb25zdHJhaW50LmIpIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5kb2Zfc2V0TGluZWFyVXBwZXJMaW1pdCA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XG5cbiAgX3ZlYzNfMS5zZXRYKHBhcmFtcy54KTtcbiAgX3ZlYzNfMS5zZXRZKHBhcmFtcy55KTtcbiAgX3ZlYzNfMS5zZXRaKHBhcmFtcy56KTtcblxuICBjb25zdHJhaW50LnNldExpbmVhclVwcGVyTGltaXQoX3ZlYzNfMSk7XG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xuXG4gIGlmIChjb25zdHJhaW50LmIpIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5kb2Zfc2V0QW5ndWxhckxvd2VyTGltaXQgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xuXG4gIF92ZWMzXzEuc2V0WChwYXJhbXMueCk7XG4gIF92ZWMzXzEuc2V0WShwYXJhbXMueSk7XG4gIF92ZWMzXzEuc2V0WihwYXJhbXMueik7XG5cbiAgY29uc3RyYWludC5zZXRBbmd1bGFyTG93ZXJMaW1pdChfdmVjM18xKTtcbiAgY29uc3RyYWludC5hLmFjdGl2YXRlKCk7XG5cbiAgaWYgKGNvbnN0cmFpbnQuYikgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XG59O1xuXG5wdWJsaWNfZnVuY3Rpb25zLmRvZl9zZXRBbmd1bGFyVXBwZXJMaW1pdCA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XG5cbiAgX3ZlYzNfMS5zZXRYKHBhcmFtcy54KTtcbiAgX3ZlYzNfMS5zZXRZKHBhcmFtcy55KTtcbiAgX3ZlYzNfMS5zZXRaKHBhcmFtcy56KTtcblxuICBjb25zdHJhaW50LnNldEFuZ3VsYXJVcHBlckxpbWl0KF92ZWMzXzEpO1xuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcblxuICBpZiAoY29uc3RyYWludC5iKSBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuZG9mX2VuYWJsZUFuZ3VsYXJNb3RvciA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XG5cbiAgY29uc3QgbW90b3IgPSBjb25zdHJhaW50LmdldFJvdGF0aW9uYWxMaW1pdE1vdG9yKHBhcmFtcy53aGljaCk7XG4gIG1vdG9yLnNldF9tX2VuYWJsZU1vdG9yKHRydWUpO1xuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcblxuICBpZiAoY29uc3RyYWludC5iKSBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcbn07XG5cbnB1YmxpY19mdW5jdGlvbnMuZG9mX2NvbmZpZ3VyZUFuZ3VsYXJNb3RvciA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF0sXG4gICAgbW90b3IgPSBjb25zdHJhaW50LmdldFJvdGF0aW9uYWxMaW1pdE1vdG9yKHBhcmFtcy53aGljaCk7XG5cbiAgbW90b3Iuc2V0X21fbG9MaW1pdChwYXJhbXMubG93X2FuZ2xlKTtcbiAgbW90b3Iuc2V0X21faGlMaW1pdChwYXJhbXMuaGlnaF9hbmdsZSk7XG4gIG1vdG9yLnNldF9tX3RhcmdldFZlbG9jaXR5KHBhcmFtcy52ZWxvY2l0eSk7XG4gIG1vdG9yLnNldF9tX21heE1vdG9yRm9yY2UocGFyYW1zLm1heF9mb3JjZSk7XG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xuXG4gIGlmIChjb25zdHJhaW50LmIpIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xufTtcblxucHVibGljX2Z1bmN0aW9ucy5kb2ZfZGlzYWJsZUFuZ3VsYXJNb3RvciA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF0sXG4gICAgbW90b3IgPSBjb25zdHJhaW50LmdldFJvdGF0aW9uYWxMaW1pdE1vdG9yKHBhcmFtcy53aGljaCk7XG5cbiAgbW90b3Iuc2V0X21fZW5hYmxlTW90b3IoZmFsc2UpO1xuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcblxuICBpZiAoY29uc3RyYWludC5iKSBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcbn07XG5cbmNvbnN0IHJlcG9ydFdvcmxkID0gKCkgPT4ge1xuICBpZiAoU1VQUE9SVF9UUkFOU0ZFUkFCTEUgJiYgd29ybGRyZXBvcnQubGVuZ3RoIDwgMiArIF9udW1fcmlnaWRib2R5X29iamVjdHMgKiBXT1JMRFJFUE9SVF9JVEVNU0laRSkge1xuICAgIHdvcmxkcmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgIDIvLyBtZXNzYWdlIGlkICYgIyBvYmplY3RzIGluIHJlcG9ydFxuICAgICAgKyAoTWF0aC5jZWlsKF9udW1fcmlnaWRib2R5X29iamVjdHMgLyBSRVBPUlRfQ0hVTktTSVpFKSAqIFJFUE9SVF9DSFVOS1NJWkUpICogV09STERSRVBPUlRfSVRFTVNJWkUgLy8gIyBvZiB2YWx1ZXMgbmVlZGVkICogaXRlbSBzaXplXG4gICAgKTtcblxuICAgIHdvcmxkcmVwb3J0WzBdID0gTUVTU0FHRV9UWVBFUy5XT1JMRFJFUE9SVDtcbiAgfVxuXG4gIHdvcmxkcmVwb3J0WzFdID0gX251bV9yaWdpZGJvZHlfb2JqZWN0czsgLy8gcmVjb3JkIGhvdyBtYW55IG9iamVjdHMgd2UncmUgcmVwb3J0aW5nIG9uXG5cbiAge1xuICAgIGxldCBpID0gMCxcbiAgICAgIGluZGV4ID0gX29iamVjdHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IG9iamVjdCA9IF9vYmplY3RzW2luZGV4XTtcblxuICAgICAgaWYgKG9iamVjdCAmJiBvYmplY3QudHlwZSA9PT0gMSkgeyAvLyBSaWdpZEJvZGllcy5cbiAgICAgICAgLy8gI1RPRE86IHdlIGNhbid0IHVzZSBjZW50ZXIgb2YgbWFzcyB0cmFuc2Zvcm0gd2hlbiBjZW50ZXIgb2YgbWFzcyBjYW4gY2hhbmdlLFxuICAgICAgICAvLyAgICAgICAgYnV0IGdldE1vdGlvblN0YXRlKCkuZ2V0V29ybGRUcmFuc2Zvcm0oKSBzY3Jld3MgdXAgb24gb2JqZWN0cyB0aGF0IGhhdmUgYmVlbiBtb3ZlZFxuICAgICAgICAvLyBvYmplY3QuZ2V0TW90aW9uU3RhdGUoKS5nZXRXb3JsZFRyYW5zZm9ybSggdHJhbnNmb3JtICk7XG4gICAgICAgIC8vIG9iamVjdC5nZXRNb3Rpb25TdGF0ZSgpLmdldFdvcmxkVHJhbnNmb3JtKF90cmFuc2Zvcm0pO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IG9iamVjdC5nZXRDZW50ZXJPZk1hc3NUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luID0gdHJhbnNmb3JtLmdldE9yaWdpbigpO1xuICAgICAgICBjb25zdCByb3RhdGlvbiA9IHRyYW5zZm9ybS5nZXRSb3RhdGlvbigpO1xuXG4gICAgICAgIC8vIGFkZCB2YWx1ZXMgdG8gcmVwb3J0XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDIgKyAoaSsrKSAqIFdPUkxEUkVQT1JUX0lURU1TSVpFO1xuXG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldF0gPSBvYmplY3QuaWQ7XG5cbiAgICAgICAgd29ybGRyZXBvcnRbb2Zmc2V0ICsgMV0gPSBvcmlnaW4ueCgpO1xuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyAyXSA9IG9yaWdpbi55KCk7XG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldCArIDNdID0gb3JpZ2luLnooKTtcblxuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyA0XSA9IHJvdGF0aW9uLngoKTtcbiAgICAgICAgd29ybGRyZXBvcnRbb2Zmc2V0ICsgNV0gPSByb3RhdGlvbi55KCk7XG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldCArIDZdID0gcm90YXRpb24ueigpO1xuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyA3XSA9IHJvdGF0aW9uLncoKTtcblxuICAgICAgICBfdmVjdG9yID0gb2JqZWN0LmdldExpbmVhclZlbG9jaXR5KCk7XG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldCArIDhdID0gX3ZlY3Rvci54KCk7XG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldCArIDldID0gX3ZlY3Rvci55KCk7XG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldCArIDEwXSA9IF92ZWN0b3IueigpO1xuXG4gICAgICAgIF92ZWN0b3IgPSBvYmplY3QuZ2V0QW5ndWxhclZlbG9jaXR5KCk7XG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldCArIDExXSA9IF92ZWN0b3IueCgpO1xuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyAxMl0gPSBfdmVjdG9yLnkoKTtcbiAgICAgICAgd29ybGRyZXBvcnRbb2Zmc2V0ICsgMTNdID0gX3ZlY3Rvci56KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB0cmFuc2ZlcmFibGVNZXNzYWdlKHdvcmxkcmVwb3J0LmJ1ZmZlciwgW3dvcmxkcmVwb3J0LmJ1ZmZlcl0pO1xuICBlbHNlIHRyYW5zZmVyYWJsZU1lc3NhZ2Uod29ybGRyZXBvcnQpO1xufTtcblxuY29uc3QgcmVwb3J0V29ybGRfc29mdGJvZGllcyA9ICgpID0+IHtcbiAgLy8gVE9ETzogQWRkIFNVUFBPUlRUUkFOU0ZFUkFCTEUuXG5cbiAgc29mdHJlcG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgMiAvLyBtZXNzYWdlIGlkICYgIyBvYmplY3RzIGluIHJlcG9ydFxuICAgICsgX251bV9zb2Z0Ym9keV9vYmplY3RzICogMlxuICAgICsgX3NvZnRib2R5X3JlcG9ydF9zaXplICogNlxuICApO1xuXG4gIHNvZnRyZXBvcnRbMF0gPSBNRVNTQUdFX1RZUEVTLlNPRlRSRVBPUlQ7XG4gIHNvZnRyZXBvcnRbMV0gPSBfbnVtX3NvZnRib2R5X29iamVjdHM7IC8vIHJlY29yZCBob3cgbWFueSBvYmplY3RzIHdlJ3JlIHJlcG9ydGluZyBvblxuXG4gIHtcbiAgICBsZXQgb2Zmc2V0ID0gMixcbiAgICAgIGluZGV4ID0gX29iamVjdHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IG9iamVjdCA9IF9vYmplY3RzW2luZGV4XTtcblxuICAgICAgaWYgKG9iamVjdCAmJiBvYmplY3QudHlwZSA9PT0gMCkgeyAvLyBTb2Z0Qm9kaWVzLlxuXG4gICAgICAgIHNvZnRyZXBvcnRbb2Zmc2V0XSA9IG9iamVjdC5pZDtcblxuICAgICAgICBjb25zdCBvZmZzZXRWZXJ0ID0gb2Zmc2V0ICsgMjtcblxuICAgICAgICBpZiAob2JqZWN0LnJvcGUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBub2RlcyA9IG9iamVjdC5nZXRfbV9ub2RlcygpO1xuICAgICAgICAgIGNvbnN0IHNpemUgPSBub2Rlcy5zaXplKCk7XG4gICAgICAgICAgc29mdHJlcG9ydFtvZmZzZXQgKyAxXSA9IHNpemU7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzLmF0KGkpO1xuICAgICAgICAgICAgY29uc3QgdmVydCA9IG5vZGUuZ2V0X21feCgpO1xuICAgICAgICAgICAgY29uc3Qgb2ZmID0gb2Zmc2V0VmVydCArIGkgKiAzO1xuXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZl0gPSB2ZXJ0LngoKTtcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmICsgMV0gPSB2ZXJ0LnkoKTtcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmICsgMl0gPSB2ZXJ0LnooKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvZmZzZXQgKz0gc2l6ZSAqIDYgKyAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdC5jbG90aCkge1xuICAgICAgICAgIGNvbnN0IG5vZGVzID0gb2JqZWN0LmdldF9tX25vZGVzKCk7XG4gICAgICAgICAgY29uc3Qgc2l6ZSA9IG5vZGVzLnNpemUoKTtcbiAgICAgICAgICBzb2Z0cmVwb3J0W29mZnNldCArIDFdID0gc2l6ZTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXMuYXQoaSk7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ID0gbm9kZS5nZXRfbV94KCk7XG4gICAgICAgICAgICBjb25zdCBub3JtYWwgPSBub2RlLmdldF9tX24oKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZiA9IG9mZnNldFZlcnQgKyBpICogNjtcblxuICAgICAgICAgICAgc29mdHJlcG9ydFtvZmZdID0gdmVydC54KCk7XG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDFdID0gdmVydC55KCk7XG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDJdID0gdmVydC56KCk7XG5cbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmICsgM10gPSBub3JtYWwueCgpO1xuICAgICAgICAgICAgc29mdHJlcG9ydFtvZmYgKyA0XSA9IG5vcm1hbC55KCk7XG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDVdID0gbm9ybWFsLnooKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvZmZzZXQgKz0gc2l6ZSAqIDYgKyAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZhY2VzID0gb2JqZWN0LmdldF9tX2ZhY2VzKCk7XG4gICAgICAgICAgY29uc3Qgc2l6ZSA9IGZhY2VzLnNpemUoKTtcbiAgICAgICAgICBzb2Z0cmVwb3J0W29mZnNldCArIDFdID0gc2l6ZTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmYWNlID0gZmFjZXMuYXQoaSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vZGUxID0gZmFjZS5nZXRfbV9uKDApO1xuICAgICAgICAgICAgY29uc3Qgbm9kZTIgPSBmYWNlLmdldF9tX24oMSk7XG4gICAgICAgICAgICBjb25zdCBub2RlMyA9IGZhY2UuZ2V0X21fbigyKTtcblxuICAgICAgICAgICAgY29uc3QgdmVydDEgPSBub2RlMS5nZXRfbV94KCk7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0MiA9IG5vZGUyLmdldF9tX3goKTtcbiAgICAgICAgICAgIGNvbnN0IHZlcnQzID0gbm9kZTMuZ2V0X21feCgpO1xuXG4gICAgICAgICAgICBjb25zdCBub3JtYWwxID0gbm9kZTEuZ2V0X21fbigpO1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsMiA9IG5vZGUyLmdldF9tX24oKTtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbDMgPSBub2RlMy5nZXRfbV9uKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9mZiA9IG9mZnNldFZlcnQgKyBpICogMTg7XG5cbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmXSA9IHZlcnQxLngoKTtcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmICsgMV0gPSB2ZXJ0MS55KCk7XG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDJdID0gdmVydDEueigpO1xuXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDNdID0gbm9ybWFsMS54KCk7XG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDRdID0gbm9ybWFsMS55KCk7XG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDVdID0gbm9ybWFsMS56KCk7XG5cbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmICsgNl0gPSB2ZXJ0Mi54KCk7XG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDddID0gdmVydDIueSgpO1xuICAgICAgICAgICAgc29mdHJlcG9ydFtvZmYgKyA4XSA9IHZlcnQyLnooKTtcblxuICAgICAgICAgICAgc29mdHJlcG9ydFtvZmYgKyA5XSA9IG5vcm1hbDIueCgpO1xuICAgICAgICAgICAgc29mdHJlcG9ydFtvZmYgKyAxMF0gPSBub3JtYWwyLnkoKTtcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmICsgMTFdID0gbm9ybWFsMi56KCk7XG5cbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmICsgMTJdID0gdmVydDMueCgpO1xuICAgICAgICAgICAgc29mdHJlcG9ydFtvZmYgKyAxM10gPSB2ZXJ0My55KCk7XG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDE0XSA9IHZlcnQzLnooKTtcblxuICAgICAgICAgICAgc29mdHJlcG9ydFtvZmYgKyAxNV0gPSBub3JtYWwzLngoKTtcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmICsgMTZdID0gbm9ybWFsMy55KCk7XG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDE3XSA9IG5vcm1hbDMueigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9mZnNldCArPSBzaXplICogMTggKyAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB0cmFuc2ZlcmFibGVNZXNzYWdlKHNvZnRyZXBvcnQuYnVmZmVyLCBbc29mdHJlcG9ydC5idWZmZXJdKTtcbiAgLy8gZWxzZSB0cmFuc2ZlcmFibGVNZXNzYWdlKHNvZnRyZXBvcnQpO1xuICB0cmFuc2ZlcmFibGVNZXNzYWdlKHNvZnRyZXBvcnQpO1xufTtcblxuY29uc3QgcmVwb3J0Q29sbGlzaW9ucyA9ICgpID0+IHtcbiAgY29uc3QgZHAgPSB3b3JsZC5nZXREaXNwYXRjaGVyKCksXG4gICAgbnVtID0gZHAuZ2V0TnVtTWFuaWZvbGRzKCk7XG4gICAgLy8gX2NvbGxpZGVkID0gZmFsc2U7XG5cbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB7XG4gICAgaWYgKGNvbGxpc2lvbnJlcG9ydC5sZW5ndGggPCAyICsgbnVtICogQ09MTElTSU9OUkVQT1JUX0lURU1TSVpFKSB7XG4gICAgICBjb2xsaXNpb25yZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAyIC8vIG1lc3NhZ2UgaWQgJiAjIG9iamVjdHMgaW4gcmVwb3J0XG4gICAgICAgICsgKE1hdGguY2VpbChfbnVtX29iamVjdHMgLyBSRVBPUlRfQ0hVTktTSVpFKSAqIFJFUE9SVF9DSFVOS1NJWkUpICogQ09MTElTSU9OUkVQT1JUX0lURU1TSVpFIC8vICMgb2YgdmFsdWVzIG5lZWRlZCAqIGl0ZW0gc2l6ZVxuICAgICAgKTtcbiAgICAgIGNvbGxpc2lvbnJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuQ09MTElTSU9OUkVQT1JUO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxpc2lvbnJlcG9ydFsxXSA9IDA7IC8vIGhvdyBtYW55IGNvbGxpc2lvbnMgd2UncmUgcmVwb3J0aW5nIG9uXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgIGNvbnN0IG1hbmlmb2xkID0gZHAuZ2V0TWFuaWZvbGRCeUluZGV4SW50ZXJuYWwoaSksXG4gICAgICBudW1fY29udGFjdHMgPSBtYW5pZm9sZC5nZXROdW1Db250YWN0cygpO1xuXG4gICAgaWYgKG51bV9jb250YWN0cyA9PT0gMCkgY29udGludWU7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bV9jb250YWN0czsgaisrKSB7XG4gICAgICBjb25zdCBwdCA9IG1hbmlmb2xkLmdldENvbnRhY3RQb2ludChqKTtcblxuICAgICAgLy8gaWYgKCBwdC5nZXREaXN0YW5jZSgpIDwgMCApIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IDIgKyAoY29sbGlzaW9ucmVwb3J0WzFdKyspICogQ09MTElTSU9OUkVQT1JUX0lURU1TSVpFO1xuICAgICAgY29sbGlzaW9ucmVwb3J0W29mZnNldF0gPSBfb2JqZWN0c19hbW1vW21hbmlmb2xkLmdldEJvZHkwKCkucHRyXTtcbiAgICAgIGNvbGxpc2lvbnJlcG9ydFtvZmZzZXQgKyAxXSA9IF9vYmplY3RzX2FtbW9bbWFuaWZvbGQuZ2V0Qm9keTEoKS5wdHJdO1xuXG4gICAgICBfdmVjdG9yID0gcHQuZ2V0X21fbm9ybWFsV29ybGRPbkIoKTtcbiAgICAgIGNvbGxpc2lvbnJlcG9ydFtvZmZzZXQgKyAyXSA9IF92ZWN0b3IueCgpO1xuICAgICAgY29sbGlzaW9ucmVwb3J0W29mZnNldCArIDNdID0gX3ZlY3Rvci55KCk7XG4gICAgICBjb2xsaXNpb25yZXBvcnRbb2Zmc2V0ICsgNF0gPSBfdmVjdG9yLnooKTtcbiAgICAgIGJyZWFrO1xuICAgICAgLy8gfVxuICAgICAgLy8gdHJhbnNmZXJhYmxlTWVzc2FnZShfb2JqZWN0c19hbW1vKTtcbiAgICB9XG4gIH1cblxuICBpZiAoU1VQUE9SVF9UUkFOU0ZFUkFCTEUpIHRyYW5zZmVyYWJsZU1lc3NhZ2UoY29sbGlzaW9ucmVwb3J0LmJ1ZmZlciwgW2NvbGxpc2lvbnJlcG9ydC5idWZmZXJdKTtcbiAgZWxzZSB0cmFuc2ZlcmFibGVNZXNzYWdlKGNvbGxpc2lvbnJlcG9ydCk7XG59O1xuXG5jb25zdCByZXBvcnRWZWhpY2xlcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB7XG4gICAgaWYgKHZlaGljbGVyZXBvcnQubGVuZ3RoIDwgMiArIF9udW1fd2hlZWxzICogVkVISUNMRVJFUE9SVF9JVEVNU0laRSkge1xuICAgICAgdmVoaWNsZXJlcG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgIDIgLy8gbWVzc2FnZSBpZCAmICMgb2JqZWN0cyBpbiByZXBvcnRcbiAgICAgICAgKyAoTWF0aC5jZWlsKF9udW1fd2hlZWxzIC8gUkVQT1JUX0NIVU5LU0laRSkgKiBSRVBPUlRfQ0hVTktTSVpFKSAqIFZFSElDTEVSRVBPUlRfSVRFTVNJWkUgLy8gIyBvZiB2YWx1ZXMgbmVlZGVkICogaXRlbSBzaXplXG4gICAgICApO1xuICAgICAgdmVoaWNsZXJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuVkVISUNMRVJFUE9SVDtcbiAgICB9XG4gIH1cblxuICB7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgaiA9IDAsXG4gICAgICBpbmRleCA9IF92ZWhpY2xlcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgaWYgKF92ZWhpY2xlc1tpbmRleF0pIHtcbiAgICAgICAgY29uc3QgdmVoaWNsZSA9IF92ZWhpY2xlc1tpbmRleF07XG5cbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHZlaGljbGUuZ2V0TnVtV2hlZWxzKCk7IGorKykge1xuICAgICAgICAgIC8vIHZlaGljbGUudXBkYXRlV2hlZWxUcmFuc2Zvcm0oIGosIHRydWUgKTtcbiAgICAgICAgICAvLyB0cmFuc2Zvcm0gPSB2ZWhpY2xlLmdldFdoZWVsVHJhbnNmb3JtV1MoIGogKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSB2ZWhpY2xlLmdldFdoZWVsSW5mbyhqKS5nZXRfbV93b3JsZFRyYW5zZm9ybSgpO1xuXG4gICAgICAgICAgY29uc3Qgb3JpZ2luID0gdHJhbnNmb3JtLmdldE9yaWdpbigpO1xuICAgICAgICAgIGNvbnN0IHJvdGF0aW9uID0gdHJhbnNmb3JtLmdldFJvdGF0aW9uKCk7XG5cbiAgICAgICAgICAvLyBhZGQgdmFsdWVzIHRvIHJlcG9ydFxuICAgICAgICAgIGNvbnN0IG9mZnNldCA9IDEgKyAoaSsrKSAqIFZFSElDTEVSRVBPUlRfSVRFTVNJWkU7XG5cbiAgICAgICAgICB2ZWhpY2xlcmVwb3J0W29mZnNldF0gPSBpbmRleDtcbiAgICAgICAgICB2ZWhpY2xlcmVwb3J0W29mZnNldCArIDFdID0gajtcblxuICAgICAgICAgIHZlaGljbGVyZXBvcnRbb2Zmc2V0ICsgMl0gPSBvcmlnaW4ueCgpO1xuICAgICAgICAgIHZlaGljbGVyZXBvcnRbb2Zmc2V0ICsgM10gPSBvcmlnaW4ueSgpO1xuICAgICAgICAgIHZlaGljbGVyZXBvcnRbb2Zmc2V0ICsgNF0gPSBvcmlnaW4ueigpO1xuXG4gICAgICAgICAgdmVoaWNsZXJlcG9ydFtvZmZzZXQgKyA1XSA9IHJvdGF0aW9uLngoKTtcbiAgICAgICAgICB2ZWhpY2xlcmVwb3J0W29mZnNldCArIDZdID0gcm90YXRpb24ueSgpO1xuICAgICAgICAgIHZlaGljbGVyZXBvcnRbb2Zmc2V0ICsgN10gPSByb3RhdGlvbi56KCk7XG4gICAgICAgICAgdmVoaWNsZXJlcG9ydFtvZmZzZXQgKyA4XSA9IHJvdGF0aW9uLncoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChTVVBQT1JUX1RSQU5TRkVSQUJMRSAmJiBqICE9PSAwKSB0cmFuc2ZlcmFibGVNZXNzYWdlKHZlaGljbGVyZXBvcnQuYnVmZmVyLCBbdmVoaWNsZXJlcG9ydC5idWZmZXJdKTtcbiAgICBlbHNlIGlmIChqICE9PSAwKSB0cmFuc2ZlcmFibGVNZXNzYWdlKHZlaGljbGVyZXBvcnQpO1xuICB9XG59O1xuXG5jb25zdCByZXBvcnRDb25zdHJhaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB7XG4gICAgaWYgKGNvbnN0cmFpbnRyZXBvcnQubGVuZ3RoIDwgMiArIF9udW1fY29uc3RyYWludHMgKiBDT05TVFJBSU5UUkVQT1JUX0lURU1TSVpFKSB7XG4gICAgICBjb25zdHJhaW50cmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgMiAvLyBtZXNzYWdlIGlkICYgIyBvYmplY3RzIGluIHJlcG9ydFxuICAgICAgICArIChNYXRoLmNlaWwoX251bV9jb25zdHJhaW50cyAvIFJFUE9SVF9DSFVOS1NJWkUpICogUkVQT1JUX0NIVU5LU0laRSkgKiBDT05TVFJBSU5UUkVQT1JUX0lURU1TSVpFIC8vICMgb2YgdmFsdWVzIG5lZWRlZCAqIGl0ZW0gc2l6ZVxuICAgICAgKTtcbiAgICAgIGNvbnN0cmFpbnRyZXBvcnRbMF0gPSBNRVNTQUdFX1RZUEVTLkNPTlNUUkFJTlRSRVBPUlQ7XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGxldCBvZmZzZXQgPSAwLFxuICAgICAgaSA9IDAsXG4gICAgICBpbmRleCA9IF9jb25zdHJhaW50cy5sZW5naHQ7XG5cbiAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgaWYgKF9jb25zdHJhaW50c1tpbmRleF0pIHtcbiAgICAgICAgY29uc3QgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1tpbmRleF07XG4gICAgICAgIGNvbnN0IG9mZnNldF9ib2R5ID0gY29uc3RyYWludC5hO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBjb25zdHJhaW50LnRhO1xuICAgICAgICBjb25zdCBvcmlnaW4gPSB0cmFuc2Zvcm0uZ2V0T3JpZ2luKCk7XG5cbiAgICAgICAgLy8gYWRkIHZhbHVlcyB0byByZXBvcnRcbiAgICAgICAgb2Zmc2V0ID0gMSArIChpKyspICogQ09OU1RSQUlOVFJFUE9SVF9JVEVNU0laRTtcblxuICAgICAgICBjb25zdHJhaW50cmVwb3J0W29mZnNldF0gPSBpbmRleDtcbiAgICAgICAgY29uc3RyYWludHJlcG9ydFtvZmZzZXQgKyAxXSA9IG9mZnNldF9ib2R5LmlkO1xuICAgICAgICBjb25zdHJhaW50cmVwb3J0W29mZnNldCArIDJdID0gb3JpZ2luLng7XG4gICAgICAgIGNvbnN0cmFpbnRyZXBvcnRbb2Zmc2V0ICsgM10gPSBvcmlnaW4ueTtcbiAgICAgICAgY29uc3RyYWludHJlcG9ydFtvZmZzZXQgKyA0XSA9IG9yaWdpbi56O1xuICAgICAgICBjb25zdHJhaW50cmVwb3J0W29mZnNldCArIDVdID0gY29uc3RyYWludC5nZXRCcmVha2luZ0ltcHVsc2VUaHJlc2hvbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoU1VQUE9SVF9UUkFOU0ZFUkFCTEUgJiYgaSAhPT0gMCkgdHJhbnNmZXJhYmxlTWVzc2FnZShjb25zdHJhaW50cmVwb3J0LmJ1ZmZlciwgW2NvbnN0cmFpbnRyZXBvcnQuYnVmZmVyXSk7XG4gICAgZWxzZSBpZiAoaSAhPT0gMCkgdHJhbnNmZXJhYmxlTWVzc2FnZShjb25zdHJhaW50cmVwb3J0KTtcbiAgfVxufTtcblxuc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcbiAgICAvLyB0cmFuc2ZlcmFibGUgb2JqZWN0XG4gICAgc3dpdGNoIChldmVudC5kYXRhWzBdKSB7XG4gICAgICBjYXNlIE1FU1NBR0VfVFlQRVMuV09STERSRVBPUlQ6IHtcbiAgICAgICAgd29ybGRyZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KGV2ZW50LmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTUVTU0FHRV9UWVBFUy5DT0xMSVNJT05SRVBPUlQ6IHtcbiAgICAgICAgY29sbGlzaW9ucmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheShldmVudC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1FU1NBR0VfVFlQRVMuVkVISUNMRVJFUE9SVDoge1xuICAgICAgICB2ZWhpY2xlcmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheShldmVudC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1FU1NBR0VfVFlQRVMuQ09OU1RSQUlOVFJFUE9SVDoge1xuICAgICAgICBjb25zdHJhaW50cmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheShldmVudC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChldmVudC5kYXRhLmNtZCAmJiBwdWJsaWNfZnVuY3Rpb25zW2V2ZW50LmRhdGEuY21kXSkgcHVibGljX2Z1bmN0aW9uc1tldmVudC5kYXRhLmNtZF0oZXZlbnQuZGF0YS5wYXJhbXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JrZXIuanMiXSwic291cmNlUm9vdCI6IiJ9", __webpack_require__.p + "worker.js");
};

/***/ },
/* 124 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_124__;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZTM0OTU3ZDlhZjhiODljZjgxYiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJUSFJFRVwiIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9waHlzaWNzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVoaWNsZS90dW5uaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy92ZWhpY2xlL3ZlaGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RyYWludHMvQ29uZVR3aXN0Q29uc3RyYWludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RyYWludHMvRE9GQ29uc3RyYWludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RyYWludHMvSGluZ2VDb25zdHJhaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHJhaW50cy9Qb2ludENvbnN0cmFpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cmFpbnRzL1NsaWRlckNvbnN0cmFpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cmFpbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0JveE1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9DYXBzdWxlTW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0Nsb3RoTW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0NvbmNhdmVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29udmV4TW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0N5bGluZGVyTW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BsYW5lTW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvZnRib2R5TW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NwaGVyZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Xb3JsZE1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVoaWNsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vd29ya2VyLWxvYWRlci9jcmVhdGVJbmxpbmVXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJXSFNcIiJdLCJuYW1lcyI6WyJhcGkiLCJhcHBseUNlbnRyYWxJbXB1bHNlIiwiZm9yY2UiLCJtYW5hZ2VyIiwiaGFzIiwiZ2V0IiwiZXhlY3V0ZSIsImlkIiwiX3BoeXNpanMiLCJ4IiwieSIsInoiLCJhcHBseUltcHVsc2UiLCJvZmZzZXQiLCJpbXB1bHNlX3giLCJpbXB1bHNlX3kiLCJpbXB1bHNlX3oiLCJhcHBseVRvcnF1ZSIsInRvcnF1ZV94IiwidG9ycXVlX3kiLCJ0b3JxdWVfeiIsImFwcGx5Q2VudHJhbEZvcmNlIiwiYXBwbHlGb3JjZSIsImZvcmNlX3giLCJmb3JjZV95IiwiZm9yY2VfeiIsImdldEFuZ3VsYXJWZWxvY2l0eSIsImFuZ3VsYXJWZWxvY2l0eSIsInNldEFuZ3VsYXJWZWxvY2l0eSIsInZlbG9jaXR5IiwiZ2V0TGluZWFyVmVsb2NpdHkiLCJsaW5lYXJWZWxvY2l0eSIsInNldExpbmVhclZlbG9jaXR5Iiwic2V0QW5ndWxhckZhY3RvciIsImZhY3RvciIsInNldExpbmVhckZhY3RvciIsInNldERhbXBpbmciLCJsaW5lYXIiLCJhbmd1bGFyIiwic2V0Q2NkTW90aW9uVGhyZXNob2xkIiwidGhyZXNob2xkIiwic2V0Q2NkU3dlcHRTcGhlcmVSYWRpdXMiLCJyYWRpdXMiLCJwcm9wZXJ0aWVzIiwicG9zaXRpb24iLCJfbmF0aXZlIiwic2V0IiwidmVjdG9yMyIsInBvcyIsInNjb3BlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsIl94IiwiX19kaXJ0eVBvc2l0aW9uIiwiX3kiLCJfeiIsImNvcHkiLCJxdWF0ZXJuaW9uIiwiX19jX3JvdCIsIm5hdGl2ZSIsInF1YXQiLCJvbkNoYW5nZSIsIl9fZGlydHlSb3RhdGlvbiIsInJvdGF0aW9uIiwiZXVsZXIiLCJyb3QiLCJzZXRGcm9tRXVsZXIiLCJ3cmFwUGh5c2ljc1Byb3RvdHlwZSIsImtleSIsImJpbmQiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJvbkNvcHkiLCJzb3VyY2UiLCJjbG9uZSIsIm9uV3JhcCIsIk1FU1NBR0VfVFlQRVMiLCJXT1JMRFJFUE9SVCIsIkNPTExJU0lPTlJFUE9SVCIsIlZFSElDTEVSRVBPUlQiLCJDT05TVFJBSU5UUkVQT1JUIiwiU09GVFJFUE9SVCIsIlJFUE9SVF9JVEVNU0laRSIsIkNPTExJU0lPTlJFUE9SVF9JVEVNU0laRSIsIlZFSElDTEVSRVBPUlRfSVRFTVNJWkUiLCJDT05TVFJBSU5UUkVQT1JUX0lURU1TSVpFIiwidGVtcDFWZWN0b3IzIiwidGVtcDJWZWN0b3IzIiwidGVtcDFNYXRyaXg0IiwidGVtcDFRdWF0IiwiZ2V0RXVsZXJYWVpGcm9tUXVhdGVybmlvbiIsInciLCJNYXRoIiwiYXRhbjIiLCJhc2luIiwiZ2V0UXVhdGVydGlvbkZyb21FdWxlciIsImMxIiwiY29zIiwiczEiLCJzaW4iLCJjMiIsInMyIiwiYzMiLCJzMyIsImMxYzIiLCJzMXMyIiwiY29udmVydFdvcmxkUG9zaXRpb25Ub09iamVjdCIsIm9iamVjdCIsImlkZW50aXR5IiwibWFrZVJvdGF0aW9uRnJvbVF1YXRlcm5pb24iLCJnZXRJbnZlcnNlIiwic3ViIiwiYXBwbHlNYXRyaXg0IiwiYWRkT2JqZWN0Q2hpbGRyZW4iLCJwYXJlbnQiLCJpIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJ1cGRhdGVNYXRyaXgiLCJ1cGRhdGVNYXRyaXhXb3JsZCIsInNldEZyb21NYXRyaXhQb3NpdGlvbiIsIm1hdHJpeFdvcmxkIiwic2V0RnJvbVJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25fb2Zmc2V0IiwicHVzaCIsIkV2ZW50YWJsZSIsIl9ldmVudExpc3RlbmVycyIsImV2ZW50X25hbWUiLCJjYWxsYmFjayIsImhhc093blByb3BlcnR5IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicGFyYW1ldGVycyIsIkFycmF5IiwicHJvdG90eXBlIiwiY2FsbCIsImFyZ3VtZW50cyIsImFwcGx5Iiwib2JqIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50IiwiVmVoaWNsZVR1bm5pbmciLCJzdXNwZW5zaW9uX3N0aWZmbmVzcyIsInN1c3BlbnNpb25fY29tcHJlc3Npb24iLCJzdXNwZW5zaW9uX2RhbXBpbmciLCJtYXhfc3VzcGVuc2lvbl90cmF2ZWwiLCJmcmljdGlvbl9zbGlwIiwibWF4X3N1c3BlbnNpb25fZm9yY2UiLCJWZWhpY2xlIiwibWVzaCIsInR1bmluZyIsIlZlaGljbGVUdW5pbmciLCJ3aGVlbHMiLCJnZXRPYmplY3RJZCIsInJpZ2lkQm9keSIsIndoZWVsX2dlb21ldHJ5Iiwid2hlZWxfbWF0ZXJpYWwiLCJjb25uZWN0aW9uX3BvaW50Iiwid2hlZWxfZGlyZWN0aW9uIiwid2hlZWxfYXhsZSIsInN1c3BlbnNpb25fcmVzdF9sZW5ndGgiLCJ3aGVlbF9yYWRpdXMiLCJpc19mcm9udF93aGVlbCIsIndoZWVsIiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJtdWx0aXBseVNjYWxhciIsImFkZCIsIndvcmxkIiwiYW1vdW50IiwidW5kZWZpbmVkIiwic3RlZXJpbmciLCJicmFrZSIsIkNvbmVUd2lzdENvbnN0cmFpbnQiLCJvYmphIiwib2JqYiIsIm9iamVjdGEiLCJvYmplY3RiIiwiY29uc29sZSIsImVycm9yIiwidHlwZSIsImFwcGxpZWRJbXB1bHNlIiwid29ybGRNb2R1bGUiLCJwb3NpdGlvbmEiLCJwb3NpdGlvbmIiLCJheGlzYSIsImF4aXNiIiwiY29uc3RyYWludCIsIm1heF9pbXB1bHNlIiwidGFyZ2V0IiwiVEhSRUUiLCJWZWN0b3IzIiwiUXVhdGVybmlvbiIsIkV1bGVyIiwiTWF0cml4NCIsIkRPRkNvbnN0cmFpbnQiLCJsaW1pdCIsIndoaWNoIiwibG93X2FuZ2xlIiwiaGlnaF9hbmdsZSIsIm1heF9mb3JjZSIsIkhpbmdlQ29uc3RyYWludCIsImF4aXMiLCJsb3ciLCJoaWdoIiwiYmlhc19mYWN0b3IiLCJyZWxheGF0aW9uX2ZhY3RvciIsImFjY2VsZXJhdGlvbiIsIlBvaW50Q29uc3RyYWludCIsIlNsaWRlckNvbnN0cmFpbnQiLCJsaW5fbG93ZXIiLCJsaW5fdXBwZXIiLCJhbmdfbG93ZXIiLCJhbmdfdXBwZXIiLCJzY2VuZSIsIkJveE1vZHVsZSIsInBhcmFtcyIsImJyaWRnZSIsImdlb21ldHJ5IiwiYm91bmRpbmdCb3giLCJjb21wdXRlQm91bmRpbmdCb3giLCJ3aWR0aCIsIm1heCIsIm1pbiIsImhlaWdodCIsImRlcHRoIiwiYXNzaWduIiwibWFzcyIsInNjYWxlIiwicmVzdGl0dXRpb24iLCJmcmljdGlvbiIsImRhbXBpbmciLCJtYXJnaW4iLCJ0b3VjaGVzIiwiZ3JvdXAiLCJtYXNrIiwiQ2Fwc3VsZU1vZHVsZSIsIkNsb3RoTW9kdWxlIiwic2VsZiIsImdlb21QYXJhbXMiLCJnZW9tIiwibWVyZ2VWZXJ0aWNlcyIsImJ1ZmZlckdlb21ldHJ5IiwiYWRkQXR0cmlidXRlIiwiRmxvYXQzMkFycmF5IiwidmVydGljZXMiLCJjb3B5VmVjdG9yM3NBcnJheSIsImZhY2VzIiwiZmFjZXNMZW5ndGgiLCJub3JtYWxzQXJyYXkiLCJpMyIsIm5vcm1hbCIsInNldEluZGV4IiwiVWludDMyQXJyYXkiLCJVaW50MTZBcnJheSIsImNvcHlJbmRpY2VzQXJyYXkiLCJ2ZXJ0cyIsImF0dHJpYnV0ZXMiLCJhcnJheSIsIndpZHRoU2VnbWVudHMiLCJoZWlnaHRTZWdtZW50cyIsImlkeDAwIiwiaWR4MDEiLCJpZHgxMCIsImlkeDExIiwiY29ybmVycyIsInNlZ21lbnRzIiwia2xzdCIsImt2c3QiLCJrYXN0IiwicGl0ZXJhdGlvbnMiLCJ2aXRlcmF0aW9ucyIsImRpdGVyYXRpb25zIiwiY2l0ZXJhdGlvbnMiLCJhbmNob3JIYXJkbmVzcyIsInJpZ2lkSGFyZG5lc3MiLCJpc1NvZnRib2R5IiwiZHJhZyIsImxpZnQiLCJDb25jYXZlTW9kdWxlIiwicGF0aCIsIndhaXQiLCJnZW9tZXRyeUxvYWRlciIsInRoZW4iLCJkYXRhIiwiZ2VvbWV0cnlQcm9jZXNzb3IiLCJsb2FkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWQiLCJpc0J1ZmZlciIsImZhY2UiLCJ2QSIsImEiLCJ2QiIsImIiLCJ2QyIsImMiLCJpOSIsIkNvbnZleE1vZHVsZSIsIl9idWZmZXJHZW9tZXRyeSIsImZyb21HZW9tZXRyeSIsIkN5bGluZGVyTW9kdWxlIiwiUGxhbmVNb2R1bGUiLCJTb2Z0Ym9keU1vZHVsZSIsImlkeEdlb21ldHJ5IiwiYVZlcnRpY2VzIiwiYUluZGljZXMiLCJuZHhHZW9tZXRyeSIsInByZXNzdXJlIiwieDEiLCJ5MSIsInoxIiwieDIiLCJ5MiIsInoyIiwiZGVsdGEiLCJhYnMiLCJTcGhlcmVNb2R1bGUiLCJib3VuZGluZ1NwaGVyZSIsImNvbXB1dGVCb3VuZGluZ1NwaGVyZSIsIldvcmxkTW9kdWxlIiwib25BZGQiLCJjb21wb25lbnQiLCJkZWZlciIsIm9uQWRkQ2FsbGJhY2siLCJvblJlbW92ZSIsIm9uUmVtb3ZlQ2FsbGJhY2siLCJmaXhlZFRpbWVTdGVwIiwicmF0ZUxpbWl0IiwiYW1tbyIsInNvZnRib2R5IiwiZ3Jhdml0eSIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJfd29ya2VyIiwicmVxdWlyZSIsInRyYW5zZmVyYWJsZU1lc3NhZ2UiLCJ3ZWJraXRQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaXNMb2FkZWQiLCJ3YXNtIiwiZmV0Y2giLCJyZXNwb25zZSIsImFycmF5QnVmZmVyIiwid2FzbUJ1ZmZlciIsImJ1ZmZlciIsIl9tYXRlcmlhbHNfcmVmX2NvdW50cyIsIl9vYmplY3RzIiwiX3ZlaGljbGVzIiwiX2NvbnN0cmFpbnRzIiwiX2lzX3NpbXVsYXRpbmciLCJfaWQiLCJhYiIsIkFycmF5QnVmZmVyIiwiU1VQUE9SVF9UUkFOU0ZFUkFCTEUiLCJieXRlTGVuZ3RoIiwib25tZXNzYWdlIiwiZXZlbnQiLCJfdGVtcCIsIl91cGRhdGVTY2VuZSIsIl91cGRhdGVTb2Z0Ym9kaWVzIiwiX3VwZGF0ZUNvbGxpc2lvbnMiLCJfdXBkYXRlVmVoaWNsZXMiLCJfdXBkYXRlQ29uc3RyYWludHMiLCJjbWQiLCJsb2ciLCJ3aW5kb3ciLCJ0ZXN0IiwiZGVidWciLCJkaXIiLCJzaXplIiwidm9sdW1lUG9zaXRpb25zIiwib2Zmc2V0VmVydCIsInZvbHVtZU5vcm1hbHMiLCJvZmZzIiwibngxIiwibnkxIiwibnoxIiwibngyIiwibnkyIiwibnoyIiwieDMiLCJ5MyIsInozIiwibngzIiwibnkzIiwibnozIiwibmVlZHNVcGRhdGUiLCJueCIsIm55IiwibnoiLCJ2ZWhpY2xlIiwiZXh0cmFjdFJvdGF0aW9uIiwibWF0cml4IiwiYWRkVmVjdG9ycyIsImNvbGxpc2lvbnMiLCJub3JtYWxfb2Zmc2V0cyIsIm9iamVjdDIiLCJpZDEiLCJqIiwiaWQyIiwiY29tcG9uZW50MiIsIl9waHlzaWpzMiIsInN1YlZlY3RvcnMiLCJ0ZW1wMSIsInRlbXAyIiwibm9ybWFsX29mZnNldCIsImVtaXQiLCJzaG93X21hcmtlciIsImdldERlZmluaXRpb24iLCJtYXJrZXIiLCJhZGREZXBlbmRlbmN5IiwibWF0ZXJpYWwiLCJtYXRlcmlhbElkIiwicmVtb3ZlIiwicG9wIiwicmVtb3ZlRGVwZW5kZW5jeSIsImZ1bmMiLCJhcmdzIiwic2V0Rml4ZWRUaW1lU3RlcCIsInNldEdyYXZpdHkiLCJhZGRDb25zdHJhaW50Iiwic2ltdWxhdGUiLCJ0aW1lU3RlcCIsIm1heFN1YlN0ZXBzIiwiX3N0YXRzIiwiYmVnaW4iLCJvYmplY3RfaWQiLCJ1cGRhdGUiLCJlbmQiLCJXSFMiLCJMb29wIiwiY2xvY2siLCJnZXREZWx0YSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDUkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7OztBQzFCRCwrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7O0FBRU8sSUFBTUEsTUFB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LElBQUksV0FBVyxjQUFjLDZDQUE2QyxjQUFjO0FBQ3ozckQsRTs7Ozs7O0FDRkEsaUQiLCJmaWxlIjoicGh5c2ljcy1tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJUSFJFRVwiKSwgcmVxdWlyZShcIldIU1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJUSFJFRVwiLCBcIldIU1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQSFlTSUNTXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiVEhSRUVcIiksIHJlcXVpcmUoXCJXSFNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBIWVNJQ1NcIl0gPSBmYWN0b3J5KHJvb3RbXCJUSFJFRVwiXSwgcm9vdFtcIldIU1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMjRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMjUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFlMzQ5NTdkOWFmOGI4OWNmODFiIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiVEhSRUVcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1F1YXRlcm5pb259IGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGNvbnN0IGFwaSA9IHtcbiAgLy8gZ2V0IG1hc3MoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX3BoeXNpanMubWFzcztcbiAgLy8gfVxuXG4gIC8vIHNldCBtYXNzKG1hc3MpIHtcbiAgLy8gICB0aGlzLl9waHlzaWpzLm1hc3MgPSBtYXNzO1xuICAvLyAgIGlmICh0aGlzLm1hbmFnZXIuZ2V0KCdtb2R1bGU6d29ybGQnKSkgdGhpcy5tYW5hZ2VyLmdldCgnbW9kdWxlOndvcmxkJykuZXhlY3V0ZSgndXBkYXRlTWFzcycsIHtpZDogdGhpcy5fcGh5c2lqcy5pZCwgbWFzc30pO1xuICAvLyB9XG5cbiAgYXBwbHlDZW50cmFsSW1wdWxzZShmb3JjZSkge1xuICAgIGlmICh0aGlzLm1hbmFnZXIuaGFzKCdtb2R1bGU6d29ybGQnKSkgdGhpcy5tYW5hZ2VyLmdldCgnbW9kdWxlOndvcmxkJykuZXhlY3V0ZSgnYXBwbHlDZW50cmFsSW1wdWxzZScsIHtpZDogdGhpcy5fcGh5c2lqcy5pZCwgeDogZm9yY2UueCwgeTogZm9yY2UueSwgejogZm9yY2Uuen0pO1xuICB9LFxuXG4gIGFwcGx5SW1wdWxzZShmb3JjZSwgb2Zmc2V0KSB7XG4gICAgaWYgKHRoaXMubWFuYWdlci5oYXMoJ21vZHVsZTp3b3JsZCcpKSB7XG4gICAgICB0aGlzLm1hbmFnZXIuZ2V0KCdtb2R1bGU6d29ybGQnKS5leGVjdXRlKCdhcHBseUltcHVsc2UnLCB7XG4gICAgICAgIGlkOiB0aGlzLl9waHlzaWpzLmlkLFxuICAgICAgICBpbXB1bHNlX3g6IGZvcmNlLngsXG4gICAgICAgIGltcHVsc2VfeTogZm9yY2UueSxcbiAgICAgICAgaW1wdWxzZV96OiBmb3JjZS56LFxuICAgICAgICB4OiBvZmZzZXQueCxcbiAgICAgICAgeTogb2Zmc2V0LnksXG4gICAgICAgIHo6IG9mZnNldC56XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXBwbHlUb3JxdWUoZm9yY2UpIHtcbiAgICBpZiAodGhpcy5tYW5hZ2VyLmhhcygnbW9kdWxlOndvcmxkJykpIHtcbiAgICAgIHRoaXMubWFuYWdlci5nZXQoJ21vZHVsZTp3b3JsZCcpLmV4ZWN1dGUoJ2FwcGx5VG9ycXVlJywge1xuICAgICAgICBpZDogdGhpcy5fcGh5c2lqcy5pZCxcbiAgICAgICAgdG9ycXVlX3g6IGZvcmNlLngsXG4gICAgICAgIHRvcnF1ZV95OiBmb3JjZS55LFxuICAgICAgICB0b3JxdWVfejogZm9yY2UuelxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5Q2VudHJhbEZvcmNlKGZvcmNlKSB7XG4gICAgaWYgKHRoaXMubWFuYWdlci5oYXMoJ21vZHVsZTp3b3JsZCcpKSB0aGlzLm1hbmFnZXIuZ2V0KCdtb2R1bGU6d29ybGQnKS5leGVjdXRlKCdhcHBseUNlbnRyYWxGb3JjZScsIHtpZDogdGhpcy5fcGh5c2lqcy5pZCwgeDogZm9yY2UueCwgeTogZm9yY2UueSwgejogZm9yY2Uuen0pO1xuICB9LFxuXG4gIGFwcGx5Rm9yY2UoZm9yY2UsIG9mZnNldCkge1xuICAgIGlmICh0aGlzLm1hbmFnZXIuaGFzKCdtb2R1bGU6d29ybGQnKSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLmdldCgnbW9kdWxlOndvcmxkJykuZXhlY3V0ZSgnYXBwbHlGb3JjZScsIHtcbiAgICAgICAgaWQ6IHRoaXMuX3BoeXNpanMuaWQsXG4gICAgICAgIGZvcmNlX3g6IGZvcmNlLngsXG4gICAgICAgIGZvcmNlX3k6IGZvcmNlLnksXG4gICAgICAgIGZvcmNlX3o6IGZvcmNlLnosXG4gICAgICAgIHg6IG9mZnNldC54LFxuICAgICAgICB5OiBvZmZzZXQueSxcbiAgICAgICAgejogb2Zmc2V0LnpcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBnZXRBbmd1bGFyVmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BoeXNpanMuYW5ndWxhclZlbG9jaXR5O1xuICB9LFxuXG4gIHNldEFuZ3VsYXJWZWxvY2l0eSh2ZWxvY2l0eSkge1xuICAgIGlmICh0aGlzLm1hbmFnZXIuaGFzKCdtb2R1bGU6d29ybGQnKSkgdGhpcy5tYW5hZ2VyLmdldCgnbW9kdWxlOndvcmxkJykuZXhlY3V0ZSgnc2V0QW5ndWxhclZlbG9jaXR5Jywge2lkOiB0aGlzLl9waHlzaWpzLmlkLCB4OiB2ZWxvY2l0eS54LCB5OiB2ZWxvY2l0eS55LCB6OiB2ZWxvY2l0eS56fSk7XG4gIH0sXG5cbiAgZ2V0TGluZWFyVmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BoeXNpanMubGluZWFyVmVsb2NpdHk7XG4gIH0sXG5cbiAgc2V0TGluZWFyVmVsb2NpdHkodmVsb2NpdHkpIHtcbiAgICBpZiAodGhpcy5tYW5hZ2VyLmhhcygnbW9kdWxlOndvcmxkJykpIHRoaXMubWFuYWdlci5nZXQoJ21vZHVsZTp3b3JsZCcpLmV4ZWN1dGUoJ3NldExpbmVhclZlbG9jaXR5Jywge2lkOiB0aGlzLl9waHlzaWpzLmlkLCB4OiB2ZWxvY2l0eS54LCB5OiB2ZWxvY2l0eS55LCB6OiB2ZWxvY2l0eS56fSk7XG4gIH0sXG5cbiAgc2V0QW5ndWxhckZhY3RvcihmYWN0b3IpIHtcbiAgICBpZiAodGhpcy5tYW5hZ2VyLmhhcygnbW9kdWxlOndvcmxkJykpIHRoaXMubWFuYWdlci5nZXQoJ21vZHVsZTp3b3JsZCcpLmV4ZWN1dGUoJ3NldEFuZ3VsYXJGYWN0b3InLCB7aWQ6IHRoaXMuX3BoeXNpanMuaWQsIHg6IGZhY3Rvci54LCB5OiBmYWN0b3IueSwgejogZmFjdG9yLnp9KTtcbiAgfSxcblxuICBzZXRMaW5lYXJGYWN0b3IoZmFjdG9yKSB7XG4gICAgaWYgKHRoaXMubWFuYWdlci5oYXMoJ21vZHVsZTp3b3JsZCcpKSB0aGlzLm1hbmFnZXIuZ2V0KCdtb2R1bGU6d29ybGQnKS5leGVjdXRlKCdzZXRMaW5lYXJGYWN0b3InLCB7aWQ6IHRoaXMuX3BoeXNpanMuaWQsIHg6IGZhY3Rvci54LCB5OiBmYWN0b3IueSwgejogZmFjdG9yLnp9KTtcbiAgfSxcblxuICBzZXREYW1waW5nKGxpbmVhciwgYW5ndWxhcikge1xuICAgIGlmICh0aGlzLm1hbmFnZXIuaGFzKCdtb2R1bGU6d29ybGQnKSkgdGhpcy5tYW5hZ2VyLmdldCgnbW9kdWxlOndvcmxkJykuZXhlY3V0ZSgnc2V0RGFtcGluZycsIHtpZDogdGhpcy5fcGh5c2lqcy5pZCwgbGluZWFyLCBhbmd1bGFyfSk7XG4gIH0sXG5cbiAgc2V0Q2NkTW90aW9uVGhyZXNob2xkKHRocmVzaG9sZCkge1xuICAgIGlmICh0aGlzLm1hbmFnZXIuaGFzKCdtb2R1bGU6d29ybGQnKSkgdGhpcy5tYW5hZ2VyLmdldCgnbW9kdWxlOndvcmxkJykuZXhlY3V0ZSgnc2V0Q2NkTW90aW9uVGhyZXNob2xkJywge2lkOiB0aGlzLl9waHlzaWpzLmlkLCB0aHJlc2hvbGR9KTtcbiAgfSxcblxuICBzZXRDY2RTd2VwdFNwaGVyZVJhZGl1cyhyYWRpdXMpIHtcbiAgICBpZiAodGhpcy5tYW5hZ2VyLmhhcygnbW9kdWxlOndvcmxkJykpIHRoaXMubWFuYWdlci5nZXQoJ21vZHVsZTp3b3JsZCcpLmV4ZWN1dGUoJ3NldENjZFN3ZXB0U3BoZXJlUmFkaXVzJywge2lkOiB0aGlzLl9waHlzaWpzLmlkLCByYWRpdXN9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvcGVydGllcyA9IHtcbiAgcG9zaXRpb246IHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlLnBvc2l0aW9uO1xuICAgIH0sXG5cbiAgICBzZXQodmVjdG9yMykge1xuICAgICAgY29uc3QgcG9zID0gdGhpcy5fbmF0aXZlLnBvc2l0aW9uO1xuICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhwb3MsIHtcbiAgICAgICAgeDoge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzZXQoeCkge1xuICAgICAgICAgICAgc2NvcGUuX19kaXJ0eVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgeToge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl95O1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzZXQoeSkge1xuICAgICAgICAgICAgc2NvcGUuX19kaXJ0eVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgejoge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl96O1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzZXQoeikge1xuICAgICAgICAgICAgc2NvcGUuX19kaXJ0eVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3ogPSB6O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNjb3BlLl9fZGlydHlQb3NpdGlvbiA9IHRydWU7XG5cbiAgICAgIHBvcy5jb3B5KHZlY3RvcjMpO1xuICAgIH1cbiAgfSxcblxuICBxdWF0ZXJuaW9uOiB7XG4gICAgZ2V0KCkge1xuICAgICAgdGhpcy5fX2Nfcm90ID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZS5xdWF0ZXJuaW9uO1xuICAgIH0sXG5cbiAgICBzZXQocXVhdGVybmlvbikge1xuICAgICAgY29uc3QgcXVhdCA9IHRoaXMuX25hdGl2ZS5xdWF0ZXJuaW9uLFxuICAgICAgICBuYXRpdmUgPSB0aGlzLl9uYXRpdmU7XG5cbiAgICAgIHF1YXQuY29weShxdWF0ZXJuaW9uKTtcblxuICAgICAgcXVhdC5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9fY19yb3QpIHtcbiAgICAgICAgICBpZiAobmF0aXZlLl9fZGlydHlSb3RhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5fX2Nfcm90ID0gZmFsc2U7XG4gICAgICAgICAgICBuYXRpdmUuX19kaXJ0eVJvdGF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5hdGl2ZS5fX2RpcnR5Um90YXRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgcm90YXRpb246IHtcbiAgICBnZXQoKSB7XG4gICAgICB0aGlzLl9fY19yb3QgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZS5yb3RhdGlvbjtcbiAgICB9LFxuXG4gICAgc2V0KGV1bGVyKSB7XG4gICAgICBjb25zdCByb3QgPSB0aGlzLl9uYXRpdmUucm90YXRpb24sXG4gICAgICAgIG5hdGl2ZSA9IHRoaXMuX25hdGl2ZTtcblxuICAgICAgdGhpcy5xdWF0ZXJuaW9uLmNvcHkobmV3IFF1YXRlcm5pb24oKS5zZXRGcm9tRXVsZXIoZXVsZXIpKTtcblxuICAgICAgcm90Lm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX19jX3JvdCkge1xuICAgICAgICAgIHRoaXMucXVhdGVybmlvbi5jb3B5KG5ldyBRdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKHJvdCkpO1xuICAgICAgICAgIG5hdGl2ZS5fX2RpcnR5Um90YXRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBQaHlzaWNzUHJvdG90eXBlKHNjb3BlKSB7XG4gIGZvciAobGV0IGtleSBpbiBhcGkpIHtcbiAgICBzY29wZVtrZXldID0gYXBpW2tleV0uYmluZChzY29wZSk7XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gcHJvcGVydGllcykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzY29wZSwga2V5LCB7XG4gICAgICBnZXQ6IHByb3BlcnRpZXNba2V5XS5nZXQuYmluZChzY29wZSksXG4gICAgICBzZXQ6IHByb3BlcnRpZXNba2V5XS5zZXQuYmluZChzY29wZSksXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ29weShzb3VyY2UpIHtcbiAgd3JhcFBoeXNpY3NQcm90b3R5cGUodGhpcyk7XG4gIHRoaXMuX3BoeXNpanMgPSB7Li4uc291cmNlLl9waHlzaWpzfTtcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uY2xvbmUoKTtcbiAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24uY2xvbmUoKTtcbiAgdGhpcy5xdWF0ZXJuaW9uID0gdGhpcy5xdWF0ZXJuaW9uLmNsb25lKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbldyYXAoKSB7XG4gIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XG4gIHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uLmNsb25lKCk7XG4gIHRoaXMucXVhdGVybmlvbiA9IHRoaXMucXVhdGVybmlvbi5jbG9uZSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvcGh5c2ljc1Byb3RvdHlwZS5qcyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgVmVjdG9yMyxcbiAgTWF0cml4NCxcbiAgUXVhdGVybmlvblxufSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IE1FU1NBR0VfVFlQRVMgPSB7XG4gIFdPUkxEUkVQT1JUOiAwLFxuICBDT0xMSVNJT05SRVBPUlQ6IDEsXG4gIFZFSElDTEVSRVBPUlQ6IDIsXG4gIENPTlNUUkFJTlRSRVBPUlQ6IDMsXG4gIFNPRlRSRVBPUlQ6IDRcbn07XG5cbmNvbnN0IFJFUE9SVF9JVEVNU0laRSA9IDE0LFxuICBDT0xMSVNJT05SRVBPUlRfSVRFTVNJWkUgPSA1LFxuICBWRUhJQ0xFUkVQT1JUX0lURU1TSVpFID0gOSxcbiAgQ09OU1RSQUlOVFJFUE9SVF9JVEVNU0laRSA9IDY7XG5cbmNvbnN0IHRlbXAxVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCksXG4gIHRlbXAyVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCksXG4gIHRlbXAxTWF0cml4NCA9IG5ldyBNYXRyaXg0KCksXG4gIHRlbXAxUXVhdCA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cbmNvbnN0IGdldEV1bGVyWFlaRnJvbVF1YXRlcm5pb24gPSAoeCwgeSwgeiwgdykgPT4ge1xuICByZXR1cm4gbmV3IFZlY3RvcjMoXG4gICAgTWF0aC5hdGFuMigyICogKHggKiB3IC0geSAqIHopLCAodyAqIHcgLSB4ICogeCAtIHkgKiB5ICsgeiAqIHopKSxcbiAgICBNYXRoLmFzaW4oMiAqICh4ICogeiArIHkgKiB3KSksXG4gICAgTWF0aC5hdGFuMigyICogKHogKiB3IC0geCAqIHkpLCAodyAqIHcgKyB4ICogeCAtIHkgKiB5IC0geiAqIHopKVxuICApO1xufTtcblxuY29uc3QgZ2V0UXVhdGVydGlvbkZyb21FdWxlciA9ICh4LCB5LCB6KSA9PiB7XG4gIGNvbnN0IGMxID0gTWF0aC5jb3MoeSk7XG4gIGNvbnN0IHMxID0gTWF0aC5zaW4oeSk7XG4gIGNvbnN0IGMyID0gTWF0aC5jb3MoLXopO1xuICBjb25zdCBzMiA9IE1hdGguc2luKC16KTtcbiAgY29uc3QgYzMgPSBNYXRoLmNvcyh4KTtcbiAgY29uc3QgczMgPSBNYXRoLnNpbih4KTtcbiAgY29uc3QgYzFjMiA9IGMxICogYzI7XG4gIGNvbnN0IHMxczIgPSBzMSAqIHMyO1xuXG4gIHJldHVybiB7XG4gICAgdzogYzFjMiAqIGMzIC0gczFzMiAqIHMzLFxuICAgIHg6IGMxYzIgKiBzMyArIHMxczIgKiBjMyxcbiAgICB5OiBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczMsXG4gICAgejogYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzXG4gIH07XG59O1xuXG5jb25zdCBjb252ZXJ0V29ybGRQb3NpdGlvblRvT2JqZWN0ID0gKHBvc2l0aW9uLCBvYmplY3QpID0+IHtcbiAgdGVtcDFNYXRyaXg0LmlkZW50aXR5KCk7IC8vIHJlc2V0IHRlbXAgbWF0cml4XG5cbiAgLy8gU2V0IHRoZSB0ZW1wIG1hdHJpeCdzIHJvdGF0aW9uIHRvIHRoZSBvYmplY3QncyByb3RhdGlvblxuICB0ZW1wMU1hdHJpeDQuaWRlbnRpdHkoKS5tYWtlUm90YXRpb25Gcm9tUXVhdGVybmlvbihvYmplY3QucXVhdGVybmlvbik7XG5cbiAgLy8gSW52ZXJ0IHJvdGF0aW9uIG1hdHJpeCBpbiBvcmRlciB0byBcInVucm90YXRlXCIgYSBwb2ludCBiYWNrIHRvIG9iamVjdCBzcGFjZVxuICB0ZW1wMU1hdHJpeDQuZ2V0SW52ZXJzZSh0ZW1wMU1hdHJpeDQpO1xuXG4gIC8vIFlheSEgVGVtcCB2YXJzIVxuICB0ZW1wMVZlY3RvcjMuY29weShwb3NpdGlvbik7XG4gIHRlbXAyVmVjdG9yMy5jb3B5KG9iamVjdC5wb3NpdGlvbik7XG5cbiAgLy8gQXBwbHkgdGhlIHJvdGF0aW9uXG4gIHJldHVybiB0ZW1wMVZlY3RvcjMuc3ViKHRlbXAyVmVjdG9yMykuYXBwbHlNYXRyaXg0KHRlbXAxTWF0cml4NCk7XG59O1xuXG5jb25zdCBhZGRPYmplY3RDaGlsZHJlbiA9IGZ1bmN0aW9uIChwYXJlbnQsIG9iamVjdCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChvYmplY3QuY2hpbGRyZW5baV0uX3BoeXNpanMpIHtcbiAgICAgIG9iamVjdC5jaGlsZHJlbltpXS51cGRhdGVNYXRyaXgoKTtcbiAgICAgIG9iamVjdC5jaGlsZHJlbltpXS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgICB0ZW1wMVZlY3RvcjMuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKG9iamVjdC5jaGlsZHJlbltpXS5tYXRyaXhXb3JsZCk7XG4gICAgICB0ZW1wMVF1YXQuc2V0RnJvbVJvdGF0aW9uTWF0cml4KG9iamVjdC5jaGlsZHJlbltpXS5tYXRyaXhXb3JsZCk7XG5cbiAgICAgIG9iamVjdC5jaGlsZHJlbltpXS5fcGh5c2lqcy5wb3NpdGlvbl9vZmZzZXQgPSB7XG4gICAgICAgIHg6IHRlbXAxVmVjdG9yMy54LFxuICAgICAgICB5OiB0ZW1wMVZlY3RvcjMueSxcbiAgICAgICAgejogdGVtcDFWZWN0b3IzLnpcbiAgICAgIH07XG5cbiAgICAgIG9iamVjdC5jaGlsZHJlbltpXS5fcGh5c2lqcy5yb3RhdGlvbiA9IHtcbiAgICAgICAgeDogdGVtcDFRdWF0LngsXG4gICAgICAgIHk6IHRlbXAxUXVhdC55LFxuICAgICAgICB6OiB0ZW1wMVF1YXQueixcbiAgICAgICAgdzogdGVtcDFRdWF0LndcbiAgICAgIH07XG5cbiAgICAgIHBhcmVudC5fcGh5c2lqcy5jaGlsZHJlbi5wdXNoKG9iamVjdC5jaGlsZHJlbltpXS5fcGh5c2lqcyk7XG4gICAgfVxuXG4gICAgYWRkT2JqZWN0Q2hpbGRyZW4ocGFyZW50LCBvYmplY3QuY2hpbGRyZW5baV0pO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBnZXRFdWxlclhZWkZyb21RdWF0ZXJuaW9uLFxuICBnZXRRdWF0ZXJ0aW9uRnJvbUV1bGVyLFxuICBjb252ZXJ0V29ybGRQb3NpdGlvblRvT2JqZWN0LFxuICBhZGRPYmplY3RDaGlsZHJlbixcblxuICBNRVNTQUdFX1RZUEVTLFxuICBSRVBPUlRfSVRFTVNJWkUsXG4gIENPTExJU0lPTlJFUE9SVF9JVEVNU0laRSxcbiAgVkVISUNMRVJFUE9SVF9JVEVNU0laRSxcbiAgQ09OU1RSQUlOVFJFUE9SVF9JVEVNU0laRSxcblxuICB0ZW1wMVZlY3RvcjMsXG4gIHRlbXAyVmVjdG9yMyxcbiAgdGVtcDFNYXRyaXg0LFxuICB0ZW1wMVF1YXRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpLmpzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgRXZlbnRhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJzLmhhc093blByb3BlcnR5KGV2ZW50X25hbWUpKVxuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRfbmFtZV0gPSBbXTtcblxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50X25hbWVdLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBjYWxsYmFjaykge1xuICAgIGxldCBpbmRleDtcblxuICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lcnMuaGFzT3duUHJvcGVydHkoZXZlbnRfbmFtZSkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmICgoaW5kZXggPSB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF9uYW1lXS5pbmRleE9mKGNhbGxiYWNrKSkgPj0gMCkge1xuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRfbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnRfbmFtZSkge1xuICAgIGxldCBpO1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGlmICh0aGlzLl9ldmVudExpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShldmVudF9uYW1lKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50X25hbWVdLmxlbmd0aDsgaSsrKVxuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF9uYW1lXVtpXS5hcHBseSh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbWFrZShvYmopIHtcbiAgICBvYmoucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudGFibGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gICAgb2JqLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRXZlbnRhYmxlLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICAgIG9iai5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IEV2ZW50YWJsZS5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50YWJsZS5qcyIsImV4cG9ydCBjbGFzcyBWZWhpY2xlVHVubmluZyB7XG4gIGNvbnN0cnVjdG9yKHN1c3BlbnNpb25fc3RpZmZuZXNzID0gNS44OCwgc3VzcGVuc2lvbl9jb21wcmVzc2lvbiA9IDAuODMsIHN1c3BlbnNpb25fZGFtcGluZyA9IDAuODgsIG1heF9zdXNwZW5zaW9uX3RyYXZlbCA9IDUwMCwgZnJpY3Rpb25fc2xpcCA9IDEwLjUsIG1heF9zdXNwZW5zaW9uX2ZvcmNlID0gNjAwMCkge1xuICAgIHRoaXMuc3VzcGVuc2lvbl9zdGlmZm5lc3MgPSBzdXNwZW5zaW9uX3N0aWZmbmVzcztcbiAgICB0aGlzLnN1c3BlbnNpb25fY29tcHJlc3Npb24gPSBzdXNwZW5zaW9uX2NvbXByZXNzaW9uO1xuICAgIHRoaXMuc3VzcGVuc2lvbl9kYW1waW5nID0gc3VzcGVuc2lvbl9kYW1waW5nO1xuICAgIHRoaXMubWF4X3N1c3BlbnNpb25fdHJhdmVsID0gbWF4X3N1c3BlbnNpb25fdHJhdmVsO1xuICAgIHRoaXMuZnJpY3Rpb25fc2xpcCA9IGZyaWN0aW9uX3NsaXA7XG4gICAgdGhpcy5tYXhfc3VzcGVuc2lvbl9mb3JjZSA9IG1heF9zdXNwZW5zaW9uX2ZvcmNlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVoaWNsZS90dW5uaW5nLmpzIiwiaW1wb3J0IHtNZXNofSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge1ZlaGljbGVUdW5uaW5nfSBmcm9tICcuL3R1bm5pbmcnO1xuXG5leHBvcnQgY2xhc3MgVmVoaWNsZSB7XG4gIGNvbnN0cnVjdG9yKG1lc2gsIHR1bmluZyA9IG5ldyBWZWhpY2xlVHVuaW5nKCkpIHtcbiAgICB0aGlzLm1lc2ggPSBtZXNoO1xuICAgIHRoaXMud2hlZWxzID0gW107XG5cbiAgICB0aGlzLl9waHlzaWpzID0ge1xuICAgICAgaWQ6IGdldE9iamVjdElkKCksXG4gICAgICByaWdpZEJvZHk6IG1lc2guX3BoeXNpanMuaWQsXG4gICAgICBzdXNwZW5zaW9uX3N0aWZmbmVzczogdHVuaW5nLnN1c3BlbnNpb25fc3RpZmZuZXNzLFxuICAgICAgc3VzcGVuc2lvbl9jb21wcmVzc2lvbjogdHVuaW5nLnN1c3BlbnNpb25fY29tcHJlc3Npb24sXG4gICAgICBzdXNwZW5zaW9uX2RhbXBpbmc6IHR1bmluZy5zdXNwZW5zaW9uX2RhbXBpbmcsXG4gICAgICBtYXhfc3VzcGVuc2lvbl90cmF2ZWw6IHR1bmluZy5tYXhfc3VzcGVuc2lvbl90cmF2ZWwsXG4gICAgICBmcmljdGlvbl9zbGlwOiB0dW5pbmcuZnJpY3Rpb25fc2xpcCxcbiAgICAgIG1heF9zdXNwZW5zaW9uX2ZvcmNlOiB0dW5pbmcubWF4X3N1c3BlbnNpb25fZm9yY2VcbiAgICB9O1xuICB9XG5cbiAgYWRkV2hlZWwod2hlZWxfZ2VvbWV0cnksIHdoZWVsX21hdGVyaWFsLCBjb25uZWN0aW9uX3BvaW50LCB3aGVlbF9kaXJlY3Rpb24sIHdoZWVsX2F4bGUsIHN1c3BlbnNpb25fcmVzdF9sZW5ndGgsIHdoZWVsX3JhZGl1cywgaXNfZnJvbnRfd2hlZWwsIHR1bmluZykge1xuICAgIGNvbnN0IHdoZWVsID0gbmV3IE1lc2god2hlZWxfZ2VvbWV0cnksIHdoZWVsX21hdGVyaWFsKTtcblxuICAgIHdoZWVsLmNhc3RTaGFkb3cgPSB3aGVlbC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICB3aGVlbC5wb3NpdGlvbi5jb3B5KHdoZWVsX2RpcmVjdGlvbikubXVsdGlwbHlTY2FsYXIoc3VzcGVuc2lvbl9yZXN0X2xlbmd0aCAvIDEwMCkuYWRkKGNvbm5lY3Rpb25fcG9pbnQpO1xuXG4gICAgdGhpcy53b3JsZC5hZGQod2hlZWwpO1xuICAgIHRoaXMud2hlZWxzLnB1c2god2hlZWwpO1xuXG4gICAgdGhpcy53b3JsZC5leGVjdXRlKCdhZGRXaGVlbCcsIHtcbiAgICAgIGlkOiB0aGlzLl9waHlzaWpzLmlkLFxuICAgICAgY29ubmVjdGlvbl9wb2ludDoge3g6IGNvbm5lY3Rpb25fcG9pbnQueCwgeTogY29ubmVjdGlvbl9wb2ludC55LCB6OiBjb25uZWN0aW9uX3BvaW50Lnp9LFxuICAgICAgd2hlZWxfZGlyZWN0aW9uOiB7eDogd2hlZWxfZGlyZWN0aW9uLngsIHk6IHdoZWVsX2RpcmVjdGlvbi55LCB6OiB3aGVlbF9kaXJlY3Rpb24uen0sXG4gICAgICB3aGVlbF9heGxlOiB7eDogd2hlZWxfYXhsZS54LCB5OiB3aGVlbF9heGxlLnksIHo6IHdoZWVsX2F4bGUuen0sXG4gICAgICBzdXNwZW5zaW9uX3Jlc3RfbGVuZ3RoLFxuICAgICAgd2hlZWxfcmFkaXVzLFxuICAgICAgaXNfZnJvbnRfd2hlZWwsXG4gICAgICB0dW5pbmdcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0ZWVyaW5nKGFtb3VudCwgd2hlZWwpIHtcbiAgICBpZiAod2hlZWwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLndoZWVsc1t3aGVlbF0gIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMud29ybGQuZXhlY3V0ZSgnc2V0U3RlZXJpbmcnLCB7aWQ6IHRoaXMuX3BoeXNpanMuaWQsIHdoZWVsLCBzdGVlcmluZzogYW1vdW50fSk7XG4gICAgZWxzZSBpZiAodGhpcy53aGVlbHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndoZWVscy5sZW5ndGg7IGkrKylcbiAgICAgICAgdGhpcy53b3JsZC5leGVjdXRlKCdzZXRTdGVlcmluZycsIHtpZDogdGhpcy5fcGh5c2lqcy5pZCwgd2hlZWw6IGksIHN0ZWVyaW5nOiBhbW91bnR9KTtcbiAgICB9XG4gIH1cblxuICBzZXRCcmFrZShhbW91bnQsIHdoZWVsKSB7XG4gICAgaWYgKHdoZWVsICE9PSB1bmRlZmluZWQgJiYgdGhpcy53aGVlbHNbd2hlZWxdICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLndvcmxkLmV4ZWN1dGUoJ3NldEJyYWtlJywge2lkOiB0aGlzLl9waHlzaWpzLmlkLCB3aGVlbCwgYnJha2U6IGFtb3VudH0pO1xuICAgIGVsc2UgaWYgKHRoaXMud2hlZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aGVlbHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHRoaXMud29ybGQuZXhlY3V0ZSgnc2V0QnJha2UnLCB7aWQ6IHRoaXMuX3BoeXNpanMuaWQsIHdoZWVsOiBpLCBicmFrZTogYW1vdW50fSk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlFbmdpbmVGb3JjZShhbW91bnQsIHdoZWVsKSB7XG4gICAgaWYgKHdoZWVsICE9PSB1bmRlZmluZWQgJiYgdGhpcy53aGVlbHNbd2hlZWxdICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLndvcmxkLmV4ZWN1dGUoJ2FwcGx5RW5naW5lRm9yY2UnLCB7aWQ6IHRoaXMuX3BoeXNpanMuaWQsIHdoZWVsLCBmb3JjZTogYW1vdW50fSk7XG4gICAgZWxzZSBpZiAodGhpcy53aGVlbHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndoZWVscy5sZW5ndGg7IGkrKylcbiAgICAgICAgdGhpcy53b3JsZC5leGVjdXRlKCdhcHBseUVuZ2luZUZvcmNlJywge2lkOiB0aGlzLl9waHlzaWpzLmlkLCB3aGVlbDogaSwgZm9yY2U6IGFtb3VudH0pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlaGljbGUvdmVoaWNsZS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdHJhaW50cy9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL21vZHVsZXMvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWhpY2xlL2luZGV4JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCB7Y29udmVydFdvcmxkUG9zaXRpb25Ub09iamVjdH0gZnJvbSAnLi4vYXBpJztcblxuZXhwb3J0IGNsYXNzIENvbmVUd2lzdENvbnN0cmFpbnQge1xuICBjb25zdHJ1Y3RvcihvYmphLCBvYmpiLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IG9iamVjdGEgPSBvYmphO1xuICAgIGNvbnN0IG9iamVjdGIgPSBvYmphO1xuXG4gICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIGNvbnNvbGUuZXJyb3IoJ0JvdGggb2JqZWN0cyBtdXN0IGJlIGRlZmluZWQgaW4gYSBDb25lVHdpc3RDb25zdHJhaW50LicpO1xuXG4gICAgdGhpcy50eXBlID0gJ2NvbmV0d2lzdCc7XG4gICAgdGhpcy5hcHBsaWVkSW1wdWxzZSA9IDA7XG4gICAgdGhpcy53b3JsZE1vZHVsZSA9IG51bGw7IC8vIFdpbGwgYmUgcmVkZWZpbmVkIGJ5IC5hZGRDb25zdHJhaW50XG4gICAgdGhpcy5vYmplY3RhID0gb2JqZWN0YS5fcGh5c2lqcy5pZDtcbiAgICB0aGlzLnBvc2l0aW9uYSA9IGNvbnZlcnRXb3JsZFBvc2l0aW9uVG9PYmplY3QocG9zaXRpb24sIG9iamVjdGEpLmNsb25lKCk7XG4gICAgdGhpcy5vYmplY3RiID0gb2JqZWN0Yi5fcGh5c2lqcy5pZDtcbiAgICB0aGlzLnBvc2l0aW9uYiA9IGNvbnZlcnRXb3JsZFBvc2l0aW9uVG9PYmplY3QocG9zaXRpb24sIG9iamVjdGIpLmNsb25lKCk7XG4gICAgdGhpcy5heGlzYSA9IHt4OiBvYmplY3RhLnJvdGF0aW9uLngsIHk6IG9iamVjdGEucm90YXRpb24ueSwgejogb2JqZWN0YS5yb3RhdGlvbi56fTtcbiAgICB0aGlzLmF4aXNiID0ge3g6IG9iamVjdGIucm90YXRpb24ueCwgeTogb2JqZWN0Yi5yb3RhdGlvbi55LCB6OiBvYmplY3RiLnJvdGF0aW9uLnp9O1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBvYmplY3RhOiB0aGlzLm9iamVjdGEsXG4gICAgICBvYmplY3RiOiB0aGlzLm9iamVjdGIsXG4gICAgICBwb3NpdGlvbmE6IHRoaXMucG9zaXRpb25hLFxuICAgICAgcG9zaXRpb25iOiB0aGlzLnBvc2l0aW9uYixcbiAgICAgIGF4aXNhOiB0aGlzLmF4aXNhLFxuICAgICAgYXhpc2I6IHRoaXMuYXhpc2JcbiAgICB9O1xuICB9XG5cbiAgc2V0TGltaXQoeCwgeSwgeikge1xuICAgIGlmKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSgnY29uZXR3aXN0X3NldExpbWl0Jywge2NvbnN0cmFpbnQ6IHRoaXMuaWQsIHgsIHksIHp9KTtcbiAgfVxuXG4gIGVuYWJsZU1vdG9yKCkge1xuICAgIGlmKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSgnY29uZXR3aXN0X2VuYWJsZU1vdG9yJywge2NvbnN0cmFpbnQ6IHRoaXMuaWR9KTtcbiAgfVxuXG4gIHNldE1heE1vdG9ySW1wdWxzZShtYXhfaW1wdWxzZSkge1xuICAgIGlmKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSgnY29uZXR3aXN0X3NldE1heE1vdG9ySW1wdWxzZScsIHtjb25zdHJhaW50OiB0aGlzLmlkLCBtYXhfaW1wdWxzZX0pO1xuICB9XG5cbiAgc2V0TW90b3JUYXJnZXQodGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFRIUkVFLlZlY3RvcjMpXG4gICAgICB0YXJnZXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21FdWxlcihuZXcgVEhSRUUuRXVsZXIodGFyZ2V0LngsIHRhcmdldC55LCB0YXJnZXQueikpO1xuICAgIGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFRIUkVFLkV1bGVyKVxuICAgICAgdGFyZ2V0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tRXVsZXIodGFyZ2V0KTtcbiAgICBlbHNlIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBUSFJFRS5NYXRyaXg0KVxuICAgICAgdGFyZ2V0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tUm90YXRpb25NYXRyaXgodGFyZ2V0KTtcblxuICAgIGlmKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSgnY29uZXR3aXN0X3NldE1vdG9yVGFyZ2V0Jywge1xuICAgICAgY29uc3RyYWludDogdGhpcy5pZCxcbiAgICAgIHg6IHRhcmdldC54LFxuICAgICAgeTogdGFyZ2V0LnksXG4gICAgICB6OiB0YXJnZXQueixcbiAgICAgIHc6IHRhcmdldC53XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdHJhaW50cy9Db25lVHdpc3RDb25zdHJhaW50LmpzIiwiaW1wb3J0IHtjb252ZXJ0V29ybGRQb3NpdGlvblRvT2JqZWN0fSBmcm9tICcuLi9hcGknO1xuXG5leHBvcnQgY2xhc3MgRE9GQ29uc3RyYWludCB7XG4gIGNvbnN0cnVjdG9yKG9iamEsIG9iamIsIHBvc2l0aW9uKSB7XG4gICAgY29uc3Qgb2JqZWN0YSA9IG9iamE7XG4gICAgbGV0IG9iamVjdGIgPSBvYmpiO1xuXG4gICAgaWYgKCBwb3NpdGlvbiA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgcG9zaXRpb24gPSBvYmplY3RiO1xuICAgICAgb2JqZWN0YiA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZG9mJztcbiAgICB0aGlzLmFwcGxpZWRJbXB1bHNlID0gMDtcbiAgICB0aGlzLndvcmxkTW9kdWxlID0gbnVsbDsgLy8gV2lsbCBiZSByZWRlZmluZWQgYnkgLmFkZENvbnN0cmFpbnRcbiAgICB0aGlzLm9iamVjdGEgPSBvYmplY3RhLl9waHlzaWpzLmlkO1xuICAgIHRoaXMucG9zaXRpb25hID0gY29udmVydFdvcmxkUG9zaXRpb25Ub09iamVjdCggcG9zaXRpb24sIG9iamVjdGEgKS5jbG9uZSgpO1xuICAgIHRoaXMuYXhpc2EgPSB7IHg6IG9iamVjdGEucm90YXRpb24ueCwgeTogb2JqZWN0YS5yb3RhdGlvbi55LCB6OiBvYmplY3RhLnJvdGF0aW9uLnogfTtcblxuICAgIGlmICggb2JqZWN0YiApIHtcbiAgICAgIHRoaXMub2JqZWN0YiA9IG9iamVjdGIuX3BoeXNpanMuaWQ7XG4gICAgICB0aGlzLnBvc2l0aW9uYiA9IGNvbnZlcnRXb3JsZFBvc2l0aW9uVG9PYmplY3QoIHBvc2l0aW9uLCBvYmplY3RiICkuY2xvbmUoKTtcbiAgICAgIHRoaXMuYXhpc2IgPSB7IHg6IG9iamVjdGIucm90YXRpb24ueCwgeTogb2JqZWN0Yi5yb3RhdGlvbi55LCB6OiBvYmplY3RiLnJvdGF0aW9uLnogfTtcbiAgICB9XG4gIH1cblxuICBnZXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG9iamVjdGE6IHRoaXMub2JqZWN0YSxcbiAgICAgIG9iamVjdGI6IHRoaXMub2JqZWN0YixcbiAgICAgIHBvc2l0aW9uYTogdGhpcy5wb3NpdGlvbmEsXG4gICAgICBwb3NpdGlvbmI6IHRoaXMucG9zaXRpb25iLFxuICAgICAgYXhpc2E6IHRoaXMuYXhpc2EsXG4gICAgICBheGlzYjogdGhpcy5heGlzYlxuICAgIH07XG4gIH1cblxuICBzZXRMaW5lYXJMb3dlckxpbWl0KGxpbWl0KSB7XG4gICAgaWYgKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSggJ2RvZl9zZXRMaW5lYXJMb3dlckxpbWl0JywgeyBjb25zdHJhaW50OiB0aGlzLmlkLCB4OiBsaW1pdC54LCB5OiBsaW1pdC55LCB6OiBsaW1pdC56IH0gKTtcbiAgfVxuXG4gIHNldExpbmVhclVwcGVyTGltaXQgKGxpbWl0KSB7XG4gICAgaWYgKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSggJ2RvZl9zZXRMaW5lYXJVcHBlckxpbWl0JywgeyBjb25zdHJhaW50OiB0aGlzLmlkLCB4OiBsaW1pdC54LCB5OiBsaW1pdC55LCB6OiBsaW1pdC56IH0gKTtcbiAgfVxuXG4gIHNldEFuZ3VsYXJMb3dlckxpbWl0IChsaW1pdCkge1xuICAgIGlmICh0aGlzLndvcmxkTW9kdWxlKSB0aGlzLndvcmxkTW9kdWxlLmV4ZWN1dGUoICdkb2Zfc2V0QW5ndWxhckxvd2VyTGltaXQnLCB7IGNvbnN0cmFpbnQ6IHRoaXMuaWQsIHg6IGxpbWl0LngsIHk6IGxpbWl0LnksIHo6IGxpbWl0LnogfSApO1xuICB9XG5cbiAgc2V0QW5ndWxhclVwcGVyTGltaXQgKGxpbWl0KSB7XG4gICAgaWYgKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSggJ2RvZl9zZXRBbmd1bGFyVXBwZXJMaW1pdCcsIHsgY29uc3RyYWludDogdGhpcy5pZCwgeDogbGltaXQueCwgeTogbGltaXQueSwgejogbGltaXQueiB9ICk7XG4gIH1cblxuICBlbmFibGVBbmd1bGFyTW90b3IgKHdoaWNoKSB7XG4gICAgaWYgKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSggJ2RvZl9lbmFibGVBbmd1bGFyTW90b3InLCB7IGNvbnN0cmFpbnQ6IHRoaXMuaWQsIHdoaWNoOiB3aGljaCB9ICk7XG4gIH1cblxuICBjb25maWd1cmVBbmd1bGFyTW90b3IgKHdoaWNoLCBsb3dfYW5nbGUsIGhpZ2hfYW5nbGUsIHZlbG9jaXR5LCBtYXhfZm9yY2UgKSB7XG4gICAgaWYgKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSggJ2RvZl9jb25maWd1cmVBbmd1bGFyTW90b3InLCB7IGNvbnN0cmFpbnQ6IHRoaXMuaWQsIHdoaWNoOiB3aGljaCwgbG93X2FuZ2xlOiBsb3dfYW5nbGUsIGhpZ2hfYW5nbGU6IGhpZ2hfYW5nbGUsIHZlbG9jaXR5OiB2ZWxvY2l0eSwgbWF4X2ZvcmNlOiBtYXhfZm9yY2UgfSApO1xuICB9XG5cbiAgZGlzYWJsZUFuZ3VsYXJNb3RvciAod2hpY2gpIHtcbiAgICBpZiAodGhpcy53b3JsZE1vZHVsZSkgdGhpcy53b3JsZE1vZHVsZS5leGVjdXRlKCAnZG9mX2Rpc2FibGVBbmd1bGFyTW90b3InLCB7IGNvbnN0cmFpbnQ6IHRoaXMuaWQsIHdoaWNoOiB3aGljaCB9ICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdHJhaW50cy9ET0ZDb25zdHJhaW50LmpzIiwiaW1wb3J0IHtjb252ZXJ0V29ybGRQb3NpdGlvblRvT2JqZWN0fSBmcm9tICcuLi9hcGknO1xuXG5leHBvcnQgY2xhc3MgSGluZ2VDb25zdHJhaW50IHtcbiAgY29uc3RydWN0b3Iob2JqYSwgb2JqYiwgcG9zaXRpb24sIGF4aXMpIHtcbiAgICBjb25zdCBvYmplY3RhID0gb2JqYTtcbiAgICBsZXQgb2JqZWN0YiA9IG9iamI7XG5cbiAgICBpZiAoYXhpcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBheGlzID0gcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IG9iamVjdGI7XG4gICAgICBvYmplY3RiID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdoaW5nZSc7XG4gICAgdGhpcy5hcHBsaWVkSW1wdWxzZSA9IDA7XG4gICAgdGhpcy53b3JsZE1vZHVsZSA9IG51bGw7IC8vIFdpbGwgYmUgcmVkZWZpbmVkIGJ5IC5hZGRDb25zdHJhaW50XG4gICAgdGhpcy5vYmplY3RhID0gb2JqZWN0YS5fcGh5c2lqcy5pZDtcbiAgICB0aGlzLnBvc2l0aW9uYSA9IGNvbnZlcnRXb3JsZFBvc2l0aW9uVG9PYmplY3QocG9zaXRpb24sIG9iamVjdGEpLmNsb25lKCk7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uLmNsb25lKCk7XG4gICAgdGhpcy5heGlzID0gYXhpcztcblxuICAgIGlmIChvYmplY3RiKSB7XG4gICAgICB0aGlzLm9iamVjdGIgPSBvYmplY3RiLl9waHlzaWpzLmlkO1xuICAgICAgdGhpcy5wb3NpdGlvbmIgPSBjb252ZXJ0V29ybGRQb3NpdGlvblRvT2JqZWN0KHBvc2l0aW9uLCBvYmplY3RiKS5jbG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgb2JqZWN0YTogdGhpcy5vYmplY3RhLFxuICAgICAgb2JqZWN0YjogdGhpcy5vYmplY3RiLFxuICAgICAgcG9zaXRpb25hOiB0aGlzLnBvc2l0aW9uYSxcbiAgICAgIHBvc2l0aW9uYjogdGhpcy5wb3NpdGlvbmIsXG4gICAgICBheGlzOiB0aGlzLmF4aXNcbiAgICB9O1xuICB9XG5cbiAgc2V0TGltaXRzKGxvdywgaGlnaCwgYmlhc19mYWN0b3IsIHJlbGF4YXRpb25fZmFjdG9yKSB7XG4gICAgaWYgKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSgnaGluZ2Vfc2V0TGltaXRzJywge1xuICAgICAgY29uc3RyYWludDogdGhpcy5pZCxcbiAgICAgIGxvdyxcbiAgICAgIGhpZ2gsXG4gICAgICBiaWFzX2ZhY3RvcixcbiAgICAgIHJlbGF4YXRpb25fZmFjdG9yXG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVBbmd1bGFyTW90b3IodmVsb2NpdHksIGFjY2VsZXJhdGlvbikge1xuICAgIGlmICh0aGlzLndvcmxkTW9kdWxlKSB0aGlzLndvcmxkTW9kdWxlLmV4ZWN1dGUoJ2hpbmdlX2VuYWJsZUFuZ3VsYXJNb3RvcicsIHtcbiAgICAgIGNvbnN0cmFpbnQ6IHRoaXMuaWQsXG4gICAgICB2ZWxvY2l0eSxcbiAgICAgIGFjY2VsZXJhdGlvblxuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZU1vdG9yKCkge1xuICAgIGlmICh0aGlzLndvcmxkTW9kdWxlKSB0aGlzLndvcmxkTW9kdWxlLmV4ZWN1dGUoJ2hpbmdlX2Rpc2FibGVNb3RvcicsIHtjb25zdHJhaW50OiB0aGlzLmlkfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdHJhaW50cy9IaW5nZUNvbnN0cmFpbnQuanMiLCJpbXBvcnQge2NvbnZlcnRXb3JsZFBvc2l0aW9uVG9PYmplY3R9IGZyb20gJy4uL2FwaSc7XG5cbmV4cG9ydCBjbGFzcyBQb2ludENvbnN0cmFpbnQge1xuICBjb25zdHJ1Y3RvcihvYmphLCBvYmpiLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IG9iamVjdGEgPSBvYmphO1xuICAgIGxldCBvYmplY3RiID0gb2JqYjtcblxuICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwb3NpdGlvbiA9IG9iamVjdGI7XG4gICAgICBvYmplY3RiID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdwb2ludCc7XG4gICAgdGhpcy5hcHBsaWVkSW1wdWxzZSA9IDA7XG4gICAgdGhpcy5vYmplY3RhID0gb2JqZWN0YS5fcGh5c2lqcy5pZDtcbiAgICB0aGlzLnBvc2l0aW9uYSA9IGNvbnZlcnRXb3JsZFBvc2l0aW9uVG9PYmplY3QocG9zaXRpb24sIG9iamVjdGEpLmNsb25lKCk7XG5cbiAgICBpZiAob2JqZWN0Yikge1xuICAgICAgdGhpcy5vYmplY3RiID0gb2JqZWN0Yi5fcGh5c2lqcy5pZDtcbiAgICAgIHRoaXMucG9zaXRpb25iID0gY29udmVydFdvcmxkUG9zaXRpb25Ub09iamVjdChwb3NpdGlvbiwgb2JqZWN0YikuY2xvbmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG9iamVjdGE6IHRoaXMub2JqZWN0YSxcbiAgICAgIG9iamVjdGI6IHRoaXMub2JqZWN0YixcbiAgICAgIHBvc2l0aW9uYTogdGhpcy5wb3NpdGlvbmEsXG4gICAgICBwb3NpdGlvbmI6IHRoaXMucG9zaXRpb25iXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0cmFpbnRzL1BvaW50Q29uc3RyYWludC5qcyIsImltcG9ydCB7Y29udmVydFdvcmxkUG9zaXRpb25Ub09iamVjdH0gZnJvbSAnLi4vYXBpJztcblxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbnN0cmFpbnQge1xuICBjb25zdHJ1Y3RvcihvYmphLCBvYmpiLCBwb3NpdGlvbiwgYXhpcykge1xuICAgIGNvbnN0IG9iamVjdGEgPSBvYmphO1xuICAgIGxldCBvYmplY3RiID0gb2JqYjtcblxuICAgIGlmIChheGlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGF4aXMgPSBwb3NpdGlvbjtcbiAgICAgIHBvc2l0aW9uID0gb2JqZWN0YjtcbiAgICAgIG9iamVjdGIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ3NsaWRlcic7XG4gICAgdGhpcy5hcHBsaWVkSW1wdWxzZSA9IDA7XG4gICAgdGhpcy53b3JsZE1vZHVsZSA9IG51bGw7IC8vIFdpbGwgYmUgcmVkZWZpbmVkIGJ5IC5hZGRDb25zdHJhaW50XG4gICAgdGhpcy5vYmplY3RhID0gb2JqZWN0YS5fcGh5c2lqcy5pZDtcbiAgICB0aGlzLnBvc2l0aW9uYSA9IGNvbnZlcnRXb3JsZFBvc2l0aW9uVG9PYmplY3QocG9zaXRpb24sIG9iamVjdGEpLmNsb25lKCk7XG4gICAgdGhpcy5heGlzID0gYXhpcztcblxuICAgIGlmIChvYmplY3RiKSB7XG4gICAgICB0aGlzLm9iamVjdGIgPSBvYmplY3RiLl9waHlzaWpzLmlkO1xuICAgICAgdGhpcy5wb3NpdGlvbmIgPSBjb252ZXJ0V29ybGRQb3NpdGlvblRvT2JqZWN0KHBvc2l0aW9uLCBvYmplY3RiKS5jbG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgb2JqZWN0YTogdGhpcy5vYmplY3RhLFxuICAgICAgb2JqZWN0YjogdGhpcy5vYmplY3RiLFxuICAgICAgcG9zaXRpb25hOiB0aGlzLnBvc2l0aW9uYSxcbiAgICAgIHBvc2l0aW9uYjogdGhpcy5wb3NpdGlvbmIsXG4gICAgICBheGlzOiB0aGlzLmF4aXNcbiAgICB9O1xuICB9XG5cbiAgc2V0TGltaXRzKGxpbl9sb3dlciwgbGluX3VwcGVyLCBhbmdfbG93ZXIsIGFuZ191cHBlcikge1xuICAgIGlmICh0aGlzLndvcmxkTW9kdWxlKSB0aGlzLndvcmxkTW9kdWxlLmV4ZWN1dGUoJ3NsaWRlcl9zZXRMaW1pdHMnLCB7XG4gICAgICBjb25zdHJhaW50OiB0aGlzLmlkLFxuICAgICAgbGluX2xvd2VyLFxuICAgICAgbGluX3VwcGVyLFxuICAgICAgYW5nX2xvd2VyLFxuICAgICAgYW5nX3VwcGVyXG4gICAgfSk7XG4gIH1cblxuICBzZXRSZXN0aXR1dGlvbihsaW5lYXIsIGFuZ3VsYXIpIHtcbiAgICBpZiAodGhpcy53b3JsZE1vZHVsZSkgdGhpcy53b3JsZE1vZHVsZS5leGVjdXRlKFxuICAgICAgJ3NsaWRlcl9zZXRSZXN0aXR1dGlvbicsXG4gICAgICB7XG4gICAgICAgIGNvbnN0cmFpbnQ6IHRoaXMuaWQsXG4gICAgICAgIGxpbmVhcixcbiAgICAgICAgYW5ndWxhclxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBlbmFibGVMaW5lYXJNb3Rvcih2ZWxvY2l0eSwgYWNjZWxlcmF0aW9uKSB7XG4gICAgaWYgKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSgnc2xpZGVyX2VuYWJsZUxpbmVhck1vdG9yJywge1xuICAgICAgY29uc3RyYWludDogdGhpcy5pZCxcbiAgICAgIHZlbG9jaXR5LFxuICAgICAgYWNjZWxlcmF0aW9uXG4gICAgfSk7XG4gIH1cblxuICBkaXNhYmxlTGluZWFyTW90b3IoKSB7XG4gICAgaWYgKHRoaXMud29ybGRNb2R1bGUpIHRoaXMud29ybGRNb2R1bGUuZXhlY3V0ZSgnc2xpZGVyX2Rpc2FibGVMaW5lYXJNb3RvcicsIHtjb25zdHJhaW50OiB0aGlzLmlkfSk7XG4gIH1cblxuICBlbmFibGVBbmd1bGFyTW90b3IodmVsb2NpdHksIGFjY2VsZXJhdGlvbikge1xuICAgIHRoaXMuc2NlbmUuZXhlY3V0ZSgnc2xpZGVyX2VuYWJsZUFuZ3VsYXJNb3RvcicsIHtcbiAgICAgIGNvbnN0cmFpbnQ6IHRoaXMuaWQsXG4gICAgICB2ZWxvY2l0eSxcbiAgICAgIGFjY2VsZXJhdGlvblxuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZUFuZ3VsYXJNb3RvcigpIHtcbiAgICBpZiAodGhpcy53b3JsZE1vZHVsZSkgdGhpcy53b3JsZE1vZHVsZS5leGVjdXRlKCdzbGlkZXJfZGlzYWJsZUFuZ3VsYXJNb3RvcicsIHtjb25zdHJhaW50OiB0aGlzLmlkfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdHJhaW50cy9TbGlkZXJDb25zdHJhaW50LmpzIiwiZXhwb3J0ICogZnJvbSAnLi9Db25lVHdpc3RDb25zdHJhaW50JztcbmV4cG9ydCAqIGZyb20gJy4vSGluZ2VDb25zdHJhaW50JztcbmV4cG9ydCAqIGZyb20gJy4vUG9pbnRDb25zdHJhaW50JztcbmV4cG9ydCAqIGZyb20gJy4vU2xpZGVyQ29uc3RyYWludCc7XG5leHBvcnQgKiBmcm9tICcuL0RPRkNvbnN0cmFpbnQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0cmFpbnRzL2luZGV4LmpzIiwiaW1wb3J0IHtWZWN0b3IzfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge3dyYXBQaHlzaWNzUHJvdG90eXBlLCBvbkNvcHksIG9uV3JhcH0gZnJvbSAnLi9waHlzaWNzUHJvdG90eXBlJztcblxuZXhwb3J0IGNsYXNzIEJveE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBtYXNzOiAxMCxcbiAgICAgIHNjYWxlOiBuZXcgVmVjdG9yMygxLCAxLCAxKSxcbiAgICAgIHJlc3RpdHV0aW9uOiAwLjMsXG4gICAgICBmcmljdGlvbjogMC44LFxuICAgICAgZGFtcGluZzogMCxcbiAgICAgIG1hcmdpbjogMFxuICAgIH0sIHBhcmFtcyk7XG4gIH1cblxuICBpbnRlZ3JhdGUocGFyYW1zKSB7XG4gICAgdGhpcy5fcGh5c2lqcyA9IHtcbiAgICAgIHR5cGU6ICdib3gnLFxuICAgICAgbWFzczogcGFyYW1zLm1hc3MsXG4gICAgICB0b3VjaGVzOiBbXSxcbiAgICAgIGxpbmVhclZlbG9jaXR5OiBuZXcgVmVjdG9yMygpLFxuICAgICAgYW5ndWxhclZlbG9jaXR5OiBuZXcgVmVjdG9yMygpLFxuICAgICAgZ3JvdXA6IHBhcmFtcy5ncm91cCxcbiAgICAgIG1hc2s6IHBhcmFtcy5tYXNrLFxuICAgICAgZnJpY3Rpb246IHBhcmFtcy5mcmljdGlvbixcbiAgICAgIHJlc3RpdHV0aW9uOiBwYXJhbXMucmVzdGl0dXRpb24sXG4gICAgICBkYW1waW5nOiBwYXJhbXMuZGFtcGluZyxcbiAgICAgIHNjYWxlOiBwYXJhbXMuc2NhbGUsXG4gICAgICBtYXJnaW46IHBhcmFtcy5tYXJnaW5cbiAgICB9O1xuXG4gICAgd3JhcFBoeXNpY3NQcm90b3R5cGUodGhpcyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgZ2VvbWV0cnkoZ2VvbWV0cnkpIHtcbiAgICAgIGlmICghZ2VvbWV0cnkuYm91bmRpbmdCb3gpIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xuXG4gICAgICB0aGlzLl9waHlzaWpzLndpZHRoID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4LnggLSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW4ueDtcbiAgICAgIHRoaXMuX3BoeXNpanMuaGVpZ2h0ID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4LnkgLSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW4ueTtcbiAgICAgIHRoaXMuX3BoeXNpanMuZGVwdGggPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5tYXgueiAtIGdlb21ldHJ5LmJvdW5kaW5nQm94Lm1pbi56O1xuXG4gICAgICByZXR1cm4gZ2VvbWV0cnk7XG4gICAgfSxcblxuICAgIG9uQ29weSxcbiAgICBvbldyYXBcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0JveE1vZHVsZS5qcyIsImltcG9ydCB7VmVjdG9yM30gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHt3cmFwUGh5c2ljc1Byb3RvdHlwZSwgb25Db3B5LCBvbldyYXB9IGZyb20gJy4vcGh5c2ljc1Byb3RvdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBDYXBzdWxlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1hc3M6IDEwLFxuICAgICAgaGVpZ2h0OiAzLFxuICAgICAgc2NhbGU6IG5ldyBWZWN0b3IzKDEsIDEsIDEpLFxuICAgICAgcmFkaXVzOiAzLFxuICAgICAgcmVzdGl0dXRpb246IDAuMyxcbiAgICAgIGZyaWN0aW9uOiAwLjgsXG4gICAgICBkYW1waW5nOiAwLFxuICAgICAgbWFyZ2luOiAwXG4gICAgfSwgcGFyYW1zKTtcbiAgfVxuXG4gIGludGVncmF0ZShwYXJhbXMpIHtcbiAgICB0aGlzLl9waHlzaWpzID0ge1xuICAgICAgdHlwZTogJ2NhcHN1bGUnLFxuICAgICAgcmFkaXVzOiBNYXRoLm1heChwYXJhbXMud2lkdGggLyAyLCBwYXJhbXMuZGVwdGggLyAyKSxcbiAgICAgIGhlaWdodDogcGFyYW1zLmhlaWdodCxcbiAgICAgIGZyaWN0aW9uOiBwYXJhbXMuZnJpY3Rpb24sXG4gICAgICByZXN0aXR1dGlvbjogcGFyYW1zLnJlc3RpdHV0aW9uLFxuICAgICAgZGFtcGluZzogcGFyYW1zLmRhbXBpbmcsXG4gICAgICBtYXJnaW46IHBhcmFtcy5tYXJnaW4sXG4gICAgICBzY2FsZTogcGFyYW1zLnNjYWxlLFxuICAgICAgbWFzczogcGFyYW1zLm1hc3NcbiAgICB9O1xuXG4gICAgd3JhcFBoeXNpY3NQcm90b3R5cGUodGhpcyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgZ2VvbWV0cnkoZ2VvbWV0cnkpIHtcbiAgICAgIGlmICghZ2VvbWV0cnkuYm91bmRpbmdCb3gpIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xuXG4gICAgICB0aGlzLl9waHlzaWpzLndpZHRoID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4LnggLSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW4ueDtcbiAgICAgIHRoaXMuX3BoeXNpanMuaGVpZ2h0ID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4LnkgLSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW4ueTtcbiAgICAgIHRoaXMuX3BoeXNpanMuZGVwdGggPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5tYXgueiAtIGdlb21ldHJ5LmJvdW5kaW5nQm94Lm1pbi56O1xuXG4gICAgICByZXR1cm4gZ2VvbWV0cnk7XG4gICAgfSxcblxuICAgIG9uQ29weSxcbiAgICBvbldyYXBcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0NhcHN1bGVNb2R1bGUuanMiLCJpbXBvcnQge1ZlY3RvcjMsIEJ1ZmZlckdlb21ldHJ5LCBCdWZmZXJBdHRyaWJ1dGV9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7d3JhcFBoeXNpY3NQcm90b3R5cGUsIG9uQ29weSwgb25XcmFwfSBmcm9tICcuL3BoeXNpY3NQcm90b3R5cGUnO1xuXG5leHBvcnQgY2xhc3MgQ2xvdGhNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBmcmljdGlvbjogMC44LFxuICAgICAgZGFtcGluZzogMCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGtsc3Q6IDAuOSxcbiAgICAgIGt2c3Q6IDAuOSxcbiAgICAgIGthc3Q6IDAuOSxcbiAgICAgIHBpdGVyYXRpb25zOiAxLFxuICAgICAgdml0ZXJhdGlvbnM6IDAsXG4gICAgICBkaXRlcmF0aW9uczogMCxcbiAgICAgIGNpdGVyYXRpb25zOiA0LFxuICAgICAgYW5jaG9ySGFyZG5lc3M6IDAuNyxcbiAgICAgIHJpZ2lkSGFyZG5lc3M6IDFcbiAgICB9LCBwYXJhbXMpO1xuICB9XG5cbiAgLy8gYXBwZW5kQW5jaG9yKHdvcmxkLCBvYmplY3QsIG5vZGUsIGluZmx1ZW5jZSwgY29sbGlzaW9uQmV0d2VlbkxpbmtlZEJvZGllcyA9IHRydWUpIHtcbiAgLy8gICBjb25zdCBvMSA9IHRoaXMuX3BoeXNpanMuaWQ7XG4gIC8vICAgY29uc3QgbzIgPSBvYmplY3QuX3BoeXNpanMuaWQ7XG4gIC8vXG4gIC8vICAgd29ybGQuZXhlY3V0ZSgnYXBwZW5kQW5jaG9yJywge1xuICAvLyAgICAgb2JqOiBvMSxcbiAgLy8gICAgIG9iajI6IG8yLFxuICAvLyAgICAgbm9kZSxcbiAgLy8gICAgIGluZmx1ZW5jZSxcbiAgLy8gICAgIGNvbGxpc2lvbkJldHdlZW5MaW5rZWRCb2RpZXNcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGludGVncmF0ZShwYXJhbXMpIHtcbiAgICB0aGlzLl9waHlzaWpzID0ge1xuICAgICAgdHlwZTogJ3NvZnRDbG90aE1lc2gnLFxuICAgICAgbWFzczogcGFyYW1zLm1hc3MsXG4gICAgICB0b3VjaGVzOiBbXSxcbiAgICAgIGlzU29mdGJvZHk6IHRydWUsXG4gICAgICBmcmljdGlvbjogcGFyYW1zLmZyaWN0aW9uLFxuICAgICAgZGFtcGluZzogcGFyYW1zLmRhbXBpbmcsXG4gICAgICBtYXJnaW46IHBhcmFtcy5tYXJnaW4sXG4gICAgICBrbHN0OiBwYXJhbXMua2xzdCxcbiAgICAgIGthc3Q6IHBhcmFtcy5rYXN0LFxuICAgICAga3ZzdDogcGFyYW1zLmt2c3QsXG4gICAgICBkcmFnOiBwYXJhbXMuZHJhZyxcbiAgICAgIGxpZnQ6IHBhcmFtcy5saWZ0LFxuICAgICAgcGl0ZXJhdGlvbnM6IHBhcmFtcy5waXRlcmF0aW9ucyxcbiAgICAgIHZpdGVyYXRpb25zOiBwYXJhbXMudml0ZXJhdGlvbnMsXG4gICAgICBkaXRlcmF0aW9uczogcGFyYW1zLmRpdGVyYXRpb25zLFxuICAgICAgY2l0ZXJhdGlvbnM6IHBhcmFtcy5jaXRlcmF0aW9ucyxcbiAgICAgIGFuY2hvckhhcmRuZXNzOiBwYXJhbXMuYW5jaG9ySGFyZG5lc3MsXG4gICAgICByaWdpZEhhcmRuZXNzOiBwYXJhbXMucmlnaWRIYXJkbmVzcyxcbiAgICAgIHNjYWxlOiBwYXJhbXMuc2NhbGVcbiAgICB9O1xuXG4gICAgd3JhcFBoeXNpY3NQcm90b3R5cGUodGhpcyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgZ2VvbWV0cnkoZ2VvbWV0cnksIHNlbGYpIHtcbiAgICAgIGNvbnN0IGdlb21QYXJhbXMgPSBnZW9tZXRyeS5wYXJhbWV0ZXJzO1xuXG4gICAgICBjb25zdCBnZW9tID0gZ2VvbWV0cnkgaW5zdGFuY2VvZiBCdWZmZXJHZW9tZXRyeVxuICAgICAgICA/IGdlb21ldHJ5XG4gICAgICAgICAgOiAoKCkgPT4ge1xuICAgICAgICAgIGdlb21ldHJ5Lm1lcmdlVmVydGljZXMoKTtcblxuICAgICAgICAgIGNvbnN0IGJ1ZmZlckdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XG5cbiAgICAgICAgICBidWZmZXJHZW9tZXRyeS5hZGRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAncG9zaXRpb24nLFxuICAgICAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgbmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGggKiAzKSxcbiAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgKS5jb3B5VmVjdG9yM3NBcnJheShnZW9tZXRyeS52ZXJ0aWNlcylcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgZmFjZXMgPSBnZW9tZXRyeS5mYWNlcywgZmFjZXNMZW5ndGggPSBmYWNlcy5sZW5ndGg7XG4gICAgICAgICAgY29uc3Qgbm9ybWFsc0FycmF5ID0gbmV3IEZsb2F0MzJBcnJheShmYWNlc0xlbmd0aCAqIDMpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsID0gZmFjZXNbaV0ubm9ybWFsIHx8IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgICAgICAgIG5vcm1hbHNBcnJheVtpM10gPSBub3JtYWwueDtcbiAgICAgICAgICAgIG5vcm1hbHNBcnJheVtpMyArIDFdID0gbm9ybWFsLnk7XG4gICAgICAgICAgICBub3JtYWxzQXJyYXlbaTMgKyAyXSA9IG5vcm1hbC56O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1ZmZlckdlb21ldHJ5LmFkZEF0dHJpYnV0ZShcbiAgICAgICAgICAgICdub3JtYWwnLFxuICAgICAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgbm9ybWFsc0FycmF5LFxuICAgICAgICAgICAgICAzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGJ1ZmZlckdlb21ldHJ5LnNldEluZGV4KFxuICAgICAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgbmV3IChmYWNlc0xlbmd0aCAqIDMgPiA2NTUzNSA/IFVpbnQzMkFycmF5IDogVWludDE2QXJyYXkpKGZhY2VzTGVuZ3RoICogMyksXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICkuY29weUluZGljZXNBcnJheShmYWNlcylcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmV0dXJuIGJ1ZmZlckdlb21ldHJ5O1xuICAgICAgICB9KSgpO1xuXG4gICAgICBjb25zdCB2ZXJ0cyA9IGdlb20uYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcblxuICAgICAgaWYgKCFnZW9tUGFyYW1zLndpZHRoU2VnbWVudHMpIGdlb21QYXJhbXMud2lkdGhTZWdtZW50cyA9IDE7XG4gICAgICBpZiAoIWdlb21QYXJhbXMuaGVpZ2h0U2VnbWVudHMpIGdlb21QYXJhbXMuaGVpZ2h0U2VnbWVudHMgPSAxO1xuXG4gICAgICBjb25zdCBpZHgwMCA9IDA7XG4gICAgICBjb25zdCBpZHgwMSA9IGdlb21QYXJhbXMud2lkdGhTZWdtZW50cztcbiAgICAgIGNvbnN0IGlkeDEwID0gKGdlb21QYXJhbXMuaGVpZ2h0U2VnbWVudHMgKyAxKSAqIChnZW9tUGFyYW1zLndpZHRoU2VnbWVudHMgKyAxKSAtIChnZW9tUGFyYW1zLndpZHRoU2VnbWVudHMgKyAxKTtcbiAgICAgIGNvbnN0IGlkeDExID0gdmVydHMubGVuZ3RoIC8gMyAtIDE7XG5cbiAgICAgIHRoaXMuX3BoeXNpanMuY29ybmVycyA9IFtcbiAgICAgICAgdmVydHNbaWR4MDEgKiAzXSwgdmVydHNbaWR4MDEgKiAzICsgMV0sIHZlcnRzW2lkeDAxICogMyArIDJdLCAvLyAgIOKVl1xuICAgICAgICB2ZXJ0c1tpZHgwMCAqIDNdLCB2ZXJ0c1tpZHgwMCAqIDMgKyAxXSwgdmVydHNbaWR4MDAgKiAzICsgMl0sIC8vIOKVlFxuICAgICAgICB2ZXJ0c1tpZHgxMSAqIDNdLCB2ZXJ0c1tpZHgxMSAqIDMgKyAxXSwgdmVydHNbaWR4MTEgKiAzICsgMl0sIC8vICAgICAgIOKVnVxuICAgICAgICB2ZXJ0c1tpZHgxMCAqIDNdLCB2ZXJ0c1tpZHgxMCAqIDMgKyAxXSwgdmVydHNbaWR4MTAgKiAzICsgMl0sIC8vICAgICDilZpcbiAgICAgIF07XG5cbiAgICAgIHRoaXMuX3BoeXNpanMuc2VnbWVudHMgPSBbZ2VvbVBhcmFtcy53aWR0aFNlZ21lbnRzICsgMSwgZ2VvbVBhcmFtcy5oZWlnaHRTZWdtZW50cyArIDFdO1xuXG4gICAgICByZXR1cm4gZ2VvbTtcbiAgICB9LFxuICAgIG9uQ29weSxcbiAgICBvbldyYXBcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0Nsb3RoTW9kdWxlLmpzIiwiaW1wb3J0IHtWZWN0b3IzLCBNdWx0aU1hdGVyaWFsLCBNZXNoLCBKU09OTG9hZGVyfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge3dyYXBQaHlzaWNzUHJvdG90eXBlLCBvbkNvcHksIG9uV3JhcH0gZnJvbSAnLi9waHlzaWNzUHJvdG90eXBlJztcblxuZXhwb3J0IGNsYXNzIENvbmNhdmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICB0aGlzLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWFzczogMTAsXG4gICAgICByZXN0aXR1dGlvbjogMC4zLFxuICAgICAgZnJpY3Rpb246IDAuOCxcbiAgICAgIGRhbXBpbmc6IDAsXG4gICAgICBzY2FsZTogbmV3IFZlY3RvcjMoMSwgMSwgMSksXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBsb2FkZXI6IG5ldyBKU09OTG9hZGVyKClcbiAgICB9LCBwYXJhbXMpO1xuXG4gICAgaWYgKHRoaXMucGFyYW1zLnBhdGggJiYgdGhpcy5wYXJhbXMubG9hZGVyKSB7XG4gICAgICB0aGlzLmdlb21ldHJ5TG9hZGVyID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5sb2FkZXIubG9hZChcbiAgICAgICAgICB0aGlzLnBhcmFtcy5wYXRoLFxuICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgKCkgPT4ge30sXG4gICAgICAgICAgcmVqZWN0XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZW9tZXRyeVByb2Nlc3NvcihnZW9tZXRyeSkge1xuICAgIGNvbnN0IGlzQnVmZmVyID0gZ2VvbWV0cnkudHlwZSA9PT0gJ0J1ZmZlckdlb21ldHJ5JztcblxuICAgIGlmICghZ2VvbWV0cnkuYm91bmRpbmdCb3gpIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xuXG4gICAgY29uc3QgZGF0YSA9IGlzQnVmZmVyID9cbiAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXkgOlxuICAgICAgbmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS5mYWNlcy5sZW5ndGggKiA5KTtcblxuICAgIGlmICghaXNCdWZmZXIpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2VzID0gZ2VvbWV0cnkudmVydGljZXM7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2VvbWV0cnkuZmFjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmFjZSA9IGdlb21ldHJ5LmZhY2VzW2ldO1xuXG4gICAgICAgIGNvbnN0IHZBID0gdmVydGljZXNbZmFjZS5hXTtcbiAgICAgICAgY29uc3QgdkIgPSB2ZXJ0aWNlc1tmYWNlLmJdO1xuICAgICAgICBjb25zdCB2QyA9IHZlcnRpY2VzW2ZhY2UuY107XG5cbiAgICAgICAgY29uc3QgaTkgPSBpICogOTtcblxuICAgICAgICBkYXRhW2k5XSA9IHZBLng7XG4gICAgICAgIGRhdGFbaTkgKyAxXSA9IHZBLnk7XG4gICAgICAgIGRhdGFbaTkgKyAyXSA9IHZBLno7XG5cbiAgICAgICAgZGF0YVtpOSArIDNdID0gdkIueDtcbiAgICAgICAgZGF0YVtpOSArIDRdID0gdkIueTtcbiAgICAgICAgZGF0YVtpOSArIDVdID0gdkIuejtcblxuICAgICAgICBkYXRhW2k5ICsgNl0gPSB2Qy54O1xuICAgICAgICBkYXRhW2k5ICsgN10gPSB2Qy55O1xuICAgICAgICBkYXRhW2k5ICsgOF0gPSB2Qy56O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGludGVncmF0ZShwYXJhbXMpIHtcbiAgICB0aGlzLl9waHlzaWpzID0ge1xuICAgICAgdHlwZTogJ2NvbmNhdmUnLFxuICAgICAgbWFzczogcGFyYW1zLm1hc3MsXG4gICAgICB0b3VjaGVzOiBbXSxcbiAgICAgIGxpbmVhclZlbG9jaXR5OiBuZXcgVmVjdG9yMygpLFxuICAgICAgYW5ndWxhclZlbG9jaXR5OiBuZXcgVmVjdG9yMygpLFxuICAgICAgZ3JvdXA6IHBhcmFtcy5ncm91cCxcbiAgICAgIG1hc2s6IHBhcmFtcy5tYXNrLFxuICAgICAgZnJpY3Rpb246IHBhcmFtcy5mcmljdGlvbixcbiAgICAgIHJlc3RpdHV0aW9uOiBwYXJhbXMucmVzdGl0dXRpb24sXG4gICAgICBkYW1waW5nOiBwYXJhbXMuZGFtcGluZyxcbiAgICAgIG1hcmdpbjogcGFyYW1zLm1hcmdpbixcbiAgICAgIHNjYWxlOiBwYXJhbXMuc2NhbGVcbiAgICB9O1xuXG4gICAgd3JhcFBoeXNpY3NQcm90b3R5cGUodGhpcyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgZ2VvbWV0cnkoZ2VvbWV0cnksIHNlbGYpIHtcbiAgICAgIGlmIChzZWxmLnBhcmFtcy5wYXRoKSB7XG4gICAgICAgIHRoaXMud2FpdChzZWxmLmdlb21ldHJ5TG9hZGVyKTtcblxuICAgICAgICBzZWxmLmdlb21ldHJ5TG9hZGVyXG4gICAgICAgICAgLnRoZW4oZ2VvbSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWpzLmRhdGEgPSBzZWxmLmdlb21ldHJ5UHJvY2Vzc29yKGdlb20pXG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9waHlzaWpzLmRhdGEgPSBzZWxmLmdlb21ldHJ5UHJvY2Vzc29yKGdlb21ldHJ5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdlb21ldHJ5O1xuICAgIH0sXG5cbiAgICBvbkNvcHksXG4gICAgb25XcmFwXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL0NvbmNhdmVNb2R1bGUuanMiLCJpbXBvcnQge1ZlY3RvcjMsIEJ1ZmZlckdlb21ldHJ5fSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge3dyYXBQaHlzaWNzUHJvdG90eXBlLCBvbkNvcHksIG9uV3JhcH0gZnJvbSAnLi9waHlzaWNzUHJvdG90eXBlJztcblxuZXhwb3J0IGNsYXNzIENvbnZleE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBtYXNzOiAxMCxcbiAgICAgIHJlc3RpdHV0aW9uOiAwLjMsXG4gICAgICBmcmljdGlvbjogMC44LFxuICAgICAgZGFtcGluZzogMCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHNjYWxlOiBuZXcgVmVjdG9yMygxLCAxLCAxKVxuICAgIH0sIHBhcmFtcyk7XG4gIH1cblxuICBpbnRlZ3JhdGUocGFyYW1zKSB7XG4gICAgdGhpcy5fcGh5c2lqcyA9IHtcbiAgICAgIHR5cGU6ICdjb252ZXgnLFxuICAgICAgbWFzczogcGFyYW1zLm1hc3MsXG4gICAgICB0b3VjaGVzOiBbXSxcbiAgICAgIGxpbmVhclZlbG9jaXR5OiBuZXcgVmVjdG9yMygpLFxuICAgICAgYW5ndWxhclZlbG9jaXR5OiBuZXcgVmVjdG9yMygpLFxuICAgICAgZ3JvdXA6IHBhcmFtcy5ncm91cCxcbiAgICAgIG1hc2s6IHBhcmFtcy5tYXNrLFxuICAgICAgZnJpY3Rpb246IHBhcmFtcy5mcmljdGlvbixcbiAgICAgIHJlc3RpdHV0aW9uOiBwYXJhbXMucmVzdGl0dXRpb24sXG4gICAgICBkYW1waW5nOiBwYXJhbXMuZGFtcGluZyxcbiAgICAgIG1hcmdpbjogcGFyYW1zLm1hcmdpbixcbiAgICAgIHNjYWxlOiBwYXJhbXMuc2NhbGVcbiAgICB9O1xuXG4gICAgd3JhcFBoeXNpY3NQcm90b3R5cGUodGhpcyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgbWVzaChtZXNoKSB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG1lc2guZ2VvbWV0cnk7XG5cbiAgICAgIGlmICghZ2VvbWV0cnkuYm91bmRpbmdCb3gpIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xuXG4gICAgICBjb25zdCBpc0J1ZmZlciA9IGdlb21ldHJ5LnR5cGUgPT09ICdCdWZmZXJHZW9tZXRyeSc7XG5cbiAgICAgIGlmICghaXNCdWZmZXIpIGdlb21ldHJ5Ll9idWZmZXJHZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpLmZyb21HZW9tZXRyeShnZW9tZXRyeSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBpc0J1ZmZlciA/XG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXkgOlxuICAgICAgICBnZW9tZXRyeS5fYnVmZmVyR2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcblxuICAgICAgdGhpcy5fcGh5c2lqcy5kYXRhID0gZGF0YTtcblxuICAgICAgcmV0dXJuIG1lc2g7XG4gICAgfSxcblxuICAgIG9uQ29weSxcbiAgICBvbldyYXBcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvQ29udmV4TW9kdWxlLmpzIiwiaW1wb3J0IHtWZWN0b3IzfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge3dyYXBQaHlzaWNzUHJvdG90eXBlLCBvbkNvcHksIG9uV3JhcH0gZnJvbSAnLi9waHlzaWNzUHJvdG90eXBlJztcblxuZXhwb3J0IGNsYXNzIEN5bGluZGVyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1hc3M6IDEwLFxuICAgICAgcmVzdGl0dXRpb246IDAuMyxcbiAgICAgIGZyaWN0aW9uOiAwLjgsXG4gICAgICBkYW1waW5nOiAwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgc2NhbGU6IG5ldyBWZWN0b3IzKDEsIDEsIDEpXG4gICAgfSwgcGFyYW1zKTtcbiAgfVxuXG4gIGludGVncmF0ZShwYXJhbXMpIHtcbiAgICB0aGlzLl9waHlzaWpzID0ge1xuICAgICAgdHlwZTogJ2N5bGluZGVyJyxcbiAgICAgIHdpZHRoOiBwYXJhbXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHBhcmFtcy5oZWlnaHQsXG4gICAgICBkZXB0aDogcGFyYW1zLmRlcHRoLFxuICAgICAgdG91Y2hlczogW10sXG4gICAgICBsaW5lYXJWZWxvY2l0eTogbmV3IFZlY3RvcjMoKSxcbiAgICAgIGFuZ3VsYXJWZWxvY2l0eTogbmV3IFZlY3RvcjMoKSxcbiAgICAgIGdyb3VwOiBwYXJhbXMuZ3JvdXAsXG4gICAgICBtYXNrOiBwYXJhbXMubWFzayxcbiAgICAgIGZyaWN0aW9uOiBwYXJhbXMuZnJpY3Rpb24sXG4gICAgICByZXN0aXR1dGlvbjogcGFyYW1zLnJlc3RpdHV0aW9uLFxuICAgICAgZGFtcGluZzogcGFyYW1zLmRhbXBpbmcsXG4gICAgICBtYXJnaW46IHBhcmFtcy5tYXJnaW4sXG4gICAgICBtYXNzOiBwYXJhbXMubWFzcyxcbiAgICAgIHNjYWxlOiBwYXJhbXMuc2NhbGVcbiAgICB9O1xuXG4gICAgd3JhcFBoeXNpY3NQcm90b3R5cGUodGhpcyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgZ2VvbWV0cnkoZ2VvbWV0cnkpIHtcbiAgICAgIGlmICghZ2VvbWV0cnkuYm91bmRpbmdCb3gpIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xuXG4gICAgICB0aGlzLl9waHlzaWpzLndpZHRoID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4LnggLSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW4ueDtcbiAgICAgIHRoaXMuX3BoeXNpanMuaGVpZ2h0ID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4LnkgLSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW4ueTtcbiAgICAgIHRoaXMuX3BoeXNpanMuZGVwdGggPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5tYXgueiAtIGdlb21ldHJ5LmJvdW5kaW5nQm94Lm1pbi56O1xuXG4gICAgICByZXR1cm4gZ2VvbWV0cnk7XG4gICAgfSxcblxuICAgIG9uQ29weSxcbiAgICBvbldyYXBcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvQ3lsaW5kZXJNb2R1bGUuanMiLCJpbXBvcnQge1ZlY3RvcjN9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7d3JhcFBoeXNpY3NQcm90b3R5cGUsIG9uQ29weSwgb25XcmFwfSBmcm9tICcuL3BoeXNpY3NQcm90b3R5cGUnO1xuXG5leHBvcnQgY2xhc3MgUGxhbmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICB0aGlzLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWFzczogMTAsXG4gICAgICByZXN0aXR1dGlvbjogMC4zLFxuICAgICAgZnJpY3Rpb246IDAuOCxcbiAgICAgIGRhbXBpbmc6IDAsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBzY2FsZTogbmV3IFZlY3RvcjMoMSwgMSwgMSlcbiAgICB9LCBwYXJhbXMpO1xuICB9XG5cbiAgaW50ZWdyYXRlKHBhcmFtcykge1xuICAgIHRoaXMuX3BoeXNpanMgPSB7XG4gICAgICB0eXBlOiAncGxhbmUnLFxuICAgICAgdG91Y2hlczogW10sXG4gICAgICBsaW5lYXJWZWxvY2l0eTogbmV3IFZlY3RvcjMoKSxcbiAgICAgIGFuZ3VsYXJWZWxvY2l0eTogbmV3IFZlY3RvcjMoKSxcbiAgICAgIGdyb3VwOiBwYXJhbXMuZ3JvdXAsXG4gICAgICBtYXNrOiBwYXJhbXMubWFzayxcbiAgICAgIGZyaWN0aW9uOiBwYXJhbXMuZnJpY3Rpb24sXG4gICAgICByZXN0aXR1dGlvbjogcGFyYW1zLnJlc3RpdHV0aW9uLFxuICAgICAgZGFtcGluZzogcGFyYW1zLmRhbXBpbmcsXG4gICAgICBtYXJnaW46IHBhcmFtcy5tYXJnaW4sXG4gICAgICBzY2FsZTogcGFyYW1zLnNjYWxlLFxuICAgICAgbWFzczogcGFyYW1zLm1hc3NcbiAgICB9O1xuXG4gICAgd3JhcFBoeXNpY3NQcm90b3R5cGUodGhpcyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgZ2VvbWV0cnkoZ2VvbWV0cnkpIHtcbiAgICAgIGlmICghZ2VvbWV0cnkuYm91bmRpbmdCb3gpIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xuXG4gICAgICB0aGlzLl9waHlzaWpzLndpZHRoID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4LnggLSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW4ueDtcbiAgICAgIHRoaXMuX3BoeXNpanMuaGVpZ2h0ID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4LnkgLSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW4ueTtcbiAgICAgIHRoaXMuX3BoeXNpanMubm9ybWFsID0gZ2VvbWV0cnkuZmFjZXNbMF0ubm9ybWFsLmNsb25lKCk7XG5cbiAgICAgIHJldHVybiBnZW9tZXRyeTtcbiAgICB9LFxuXG4gICAgb25Db3B5LFxuICAgIG9uV3JhcFxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL1BsYW5lTW9kdWxlLmpzIiwiaW1wb3J0IHtWZWN0b3IzLCBCdWZmZXJHZW9tZXRyeSwgQnVmZmVyQXR0cmlidXRlfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge3dyYXBQaHlzaWNzUHJvdG90eXBlLCBvbkNvcHksIG9uV3JhcH0gZnJvbSAnLi9waHlzaWNzUHJvdG90eXBlJztcblxuZXhwb3J0IGNsYXNzIFNvZnRib2R5TW9kdWxle1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICB0aGlzLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVzdGl0dXRpb246IDAuMyxcbiAgICAgIGZyaWN0aW9uOiAwLjgsXG4gICAgICBkYW1waW5nOiAwLFxuICAgICAgcHJlc3N1cmU6IDEwMCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGtsc3Q6IDAuOSxcbiAgICAgIGt2c3Q6IDAuOSxcbiAgICAgIGthc3Q6IDAuOSxcbiAgICAgIHBpdGVyYXRpb25zOiAxLFxuICAgICAgdml0ZXJhdGlvbnM6IDAsXG4gICAgICBkaXRlcmF0aW9uczogMCxcbiAgICAgIGNpdGVyYXRpb25zOiA0LFxuICAgICAgYW5jaG9ySGFyZG5lc3M6IDAuNyxcbiAgICAgIHJpZ2lkSGFyZG5lc3M6IDFcbiAgICB9LCBwYXJhbXMpO1xuICB9XG5cbiAgLy8gY3JlYXRlSW5kZXhlZEJ1ZmZlckdlb21ldHJ5RnJvbUdlb21ldHJ5KGdlb21ldHJ5KSB7XG4gIC8vICAgY29uc3QgbnVtVmVydGljZXMgPSBnZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGg7XG4gIC8vICAgY29uc3QgbnVtRmFjZXMgPSBnZW9tZXRyeS5mYWNlcy5sZW5ndGg7XG4gIC8vICAgY29uc3QgYnVmZmVyR2VvbSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xuICAvLyAgIGNvbnN0IHZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShudW1WZXJ0aWNlcyAqIDMpO1xuICAvLyAgIGNvbnN0IGluZGljZXMgPSBuZXcgKG51bUZhY2VzICogMyA+IDY1NTM1ID8gVWludDMyQXJyYXkgOiBVaW50MTZBcnJheSkobnVtRmFjZXMgKiAzKTtcblxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXM7IGkrKykge1xuICAvLyAgICAgY29uc3QgcCA9IGdlb21ldHJ5LnZlcnRpY2VzW2ldO1xuICAvLyAgICAgY29uc3QgaTMgPSBpICogMztcblxuICAvLyAgICAgdmVydGljZXNbaTNdID0gcC54O1xuICAvLyAgICAgdmVydGljZXNbaTMgKyAxXSA9IHAueTtcbiAgLy8gICAgIHZlcnRpY2VzW2kzICsgMl0gPSBwLno7XG4gIC8vICAgfVxuXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1GYWNlczsgaSsrKSB7XG4gIC8vICAgICBjb25zdCBmID0gZ2VvbWV0cnkuZmFjZXNbaV07XG4gIC8vICAgICBjb25zdCBpMyA9IGkgKiAzO1xuXG4gIC8vICAgICBpbmRpY2VzW2kzXSA9IGYuYTtcbiAgLy8gICAgIGluZGljZXNbaTMgKyAxXSA9IGYuYjtcbiAgLy8gICAgIGluZGljZXNbaTMgKyAyXSA9IGYuYztcbiAgLy8gICB9XG5cbiAgLy8gICBidWZmZXJHZW9tLnNldEluZGV4KG5ldyBCdWZmZXJBdHRyaWJ1dGUoaW5kaWNlcywgMSkpO1xuICAvLyAgIGJ1ZmZlckdlb20uYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodmVydGljZXMsIDMpKTtcblxuICAvLyAgIHJldHVybiBidWZmZXJHZW9tO1xuICAvLyB9XG5cbiAgaXNFcXVhbCh4MSwgeTEsIHoxLCB4MiwgeTIsIHoyKSB7XG4gICAgY29uc3QgZGVsdGEgPSAwLjAwMDAwMTtcblxuICAgIHJldHVybiBNYXRoLmFicyh4MiAtIHgxKSA8IGRlbHRhXG4gICAgICAmJiBNYXRoLmFicyh5MiAtIHkxKSA8IGRlbHRhXG4gICAgICAmJiBNYXRoLmFicyh6MiAtIHoxKSA8IGRlbHRhO1xuICB9XG5cbiAgLy8gYXBwZW5kQW5jaG9yKHdvcmxkLCBvYmplY3QsIG5vZGUsIGluZmx1ZW5jZSwgY29sbGlzaW9uQmV0d2VlbkxpbmtlZEJvZGllcyA9IHRydWUpIHtcbiAgLy8gICBjb25zdCBvMSA9IHRoaXMuX3BoeXNpanMuaWQ7XG4gIC8vICAgY29uc3QgbzIgPSBvYmplY3QuX3BoeXNpanMuaWQ7XG5cbiAgLy8gICB3b3JsZC5leGVjdXRlKCdhcHBlbmRBbmNob3InLCB7XG4gIC8vICAgICBvYmo6IG8xLFxuICAvLyAgICAgb2JqMjogbzIsXG4gIC8vICAgICBub2RlLFxuICAvLyAgICAgaW5mbHVlbmNlLFxuICAvLyAgICAgY29sbGlzaW9uQmV0d2VlbkxpbmtlZEJvZGllc1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgaW50ZWdyYXRlKHBhcmFtcykge1xuICAgIHRoaXMuX3BoeXNpanMgPSB7XG4gICAgICB0eXBlOiAnc29mdFRyaW1lc2gnLFxuICAgICAgbWFzczogcGFyYW1zLm1hc3MsXG4gICAgICB0b3VjaGVzOiBbXSxcbiAgICAgIGZyaWN0aW9uOiBwYXJhbXMuZnJpY3Rpb24sXG4gICAgICBkYW1waW5nOiBwYXJhbXMuZGFtcGluZyxcbiAgICAgIHByZXNzdXJlOiBwYXJhbXMucHJlc3N1cmUsXG4gICAgICBtYXJnaW46IHBhcmFtcy5tYXJnaW4sXG4gICAgICBrbHN0OiBwYXJhbXMua2xzdCxcbiAgICAgIGlzU29mdGJvZHk6IHRydWUsXG4gICAgICBrYXN0OiBwYXJhbXMua2FzdCxcbiAgICAgIGt2c3Q6IHBhcmFtcy5rdnN0LFxuICAgICAgZHJhZzogcGFyYW1zLmRyYWcsXG4gICAgICBsaWZ0OiBwYXJhbXMubGlmdCxcbiAgICAgIHBpdGVyYXRpb25zOiBwYXJhbXMucGl0ZXJhdGlvbnMsXG4gICAgICB2aXRlcmF0aW9uczogcGFyYW1zLnZpdGVyYXRpb25zLFxuICAgICAgZGl0ZXJhdGlvbnM6IHBhcmFtcy5kaXRlcmF0aW9ucyxcbiAgICAgIGNpdGVyYXRpb25zOiBwYXJhbXMuY2l0ZXJhdGlvbnMsXG4gICAgICBhbmNob3JIYXJkbmVzczogcGFyYW1zLmFuY2hvckhhcmRuZXNzLFxuICAgICAgcmlnaWRIYXJkbmVzczogcGFyYW1zLnJpZ2lkSGFyZG5lc3NcbiAgICB9O1xuXG4gICAgd3JhcFBoeXNpY3NQcm90b3R5cGUodGhpcyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgZ2VvbWV0cnkoZ2VvbWV0cnksIHNlbGYpIHtcbiAgICAgIGNvbnN0IGlkeEdlb21ldHJ5ID0gZ2VvbWV0cnkgaW5zdGFuY2VvZiBCdWZmZXJHZW9tZXRyeVxuICAgICAgICA/IGdlb21ldHJ5XG4gICAgICAgIDogKCgpID0+IHtcbiAgICAgICAgICBnZW9tZXRyeS5tZXJnZVZlcnRpY2VzKCk7XG5cbiAgICAgICAgICBjb25zdCBidWZmZXJHZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xuXG4gICAgICAgICAgYnVmZmVyR2VvbWV0cnkuYWRkQXR0cmlidXRlKFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJyxcbiAgICAgICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoICogMyksIFxuICAgICAgICAgICAgICAzXG4gICAgICAgICAgICApLmNvcHlWZWN0b3Izc0FycmF5KGdlb21ldHJ5LnZlcnRpY2VzKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBidWZmZXJHZW9tZXRyeS5zZXRJbmRleChcbiAgICAgICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIG5ldyAoZ2VvbWV0cnkuZmFjZXMubGVuZ3RoICogMyA+IDY1NTM1ID8gVWludDMyQXJyYXkgOiBVaW50MTZBcnJheSkoZ2VvbWV0cnkuZmFjZXMubGVuZ3RoICogMyksXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICkuY29weUluZGljZXNBcnJheShnZW9tZXRyeS5mYWNlcylcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmV0dXJuIGJ1ZmZlckdlb21ldHJ5O1xuICAgICAgICB9KSgpO1xuXG4gICAgICBjb25zdCBhVmVydGljZXMgPSBpZHhHZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xuICAgICAgY29uc3QgYUluZGljZXMgPSBpZHhHZW9tZXRyeS5pbmRleC5hcnJheTtcblxuICAgICAgdGhpcy5fcGh5c2lqcy5hVmVydGljZXMgPSBhVmVydGljZXM7XG4gICAgICB0aGlzLl9waHlzaWpzLmFJbmRpY2VzID0gYUluZGljZXM7XG5cbiAgICAgIGNvbnN0IG5keEdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCkuZnJvbUdlb21ldHJ5KGdlb21ldHJ5KTtcblxuICAgICAgcmV0dXJuIG5keEdlb21ldHJ5O1xuICAgIH0sXG5cbiAgICBvbkNvcHksXG4gICAgb25XcmFwXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL1NvZnRib2R5TW9kdWxlLmpzIiwiaW1wb3J0IHtWZWN0b3IzfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge3dyYXBQaHlzaWNzUHJvdG90eXBlLCBvbkNvcHksIG9uV3JhcH0gZnJvbSAnLi9waHlzaWNzUHJvdG90eXBlJztcblxuZXhwb3J0IGNsYXNzIFNwaGVyZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBtYXNzOiAxMCxcbiAgICAgIHJlc3RpdHV0aW9uOiAwLjMsXG4gICAgICBmcmljdGlvbjogMC44LFxuICAgICAgZGFtcGluZzogMCxcbiAgICAgIHByZXNzdXJlOiAxMDAsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBrbHN0OiAwLjksXG4gICAgICBrdnN0OiAwLjksXG4gICAgICBrYXN0OiAwLjksXG4gICAgICBzY2FsZTogbmV3IFZlY3RvcjMoMSwgMSwgMSlcbiAgICB9LCBwYXJhbXMpO1xuICB9XG5cbiAgaW50ZWdyYXRlKHBhcmFtcykge1xuICAgIHRoaXMuX3BoeXNpanMgPSB7XG4gICAgICB0eXBlOiAnc3BoZXJlJyxcbiAgICAgIHRvdWNoZXM6IFtdLFxuICAgICAgbGluZWFyVmVsb2NpdHk6IG5ldyBWZWN0b3IzKCksXG4gICAgICBhbmd1bGFyVmVsb2NpdHk6IG5ldyBWZWN0b3IzKCksXG4gICAgICBncm91cDogcGFyYW1zLmdyb3VwLFxuICAgICAgbWFzazogcGFyYW1zLm1hc2ssXG4gICAgICBmcmljdGlvbjogcGFyYW1zLmZyaWN0aW9uLFxuICAgICAgcmVzdGl0dXRpb246IHBhcmFtcy5yZXN0aXR1dGlvbixcbiAgICAgIGRhbXBpbmc6IHBhcmFtcy5kYW1waW5nLFxuICAgICAgbWFyZ2luOiBwYXJhbXMubWFyZ2luLFxuICAgICAgc2NhbGU6IHBhcmFtcy5zY2FsZSxcbiAgICAgIG1hc3M6IHBhcmFtcy5tYXNzXG4gICAgfTtcblxuICAgIHdyYXBQaHlzaWNzUHJvdG90eXBlKHRoaXMpO1xuICB9XG5cbiAgYnJpZGdlID0ge1xuICAgIGdlb21ldHJ5KGdlb21ldHJ5KSB7XG4gICAgICBpZiAoIWdlb21ldHJ5LmJvdW5kaW5nU3BoZXJlKSBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgICAgIHRoaXMuX3BoeXNpanMucmFkaXVzID0gZ2VvbWV0cnkuYm91bmRpbmdTcGhlcmUucmFkaXVzO1xuICAgICAgcmV0dXJuIGdlb21ldHJ5O1xuICAgIH0sXG5cbiAgICBvbkNvcHksXG4gICAgb25XcmFwXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL1NwaGVyZU1vZHVsZS5qcyIsImltcG9ydCB7XG4gIFNjZW5lIGFzIFNjZW5lTmF0aXZlLFxuICBNZXNoLFxuICBTcGhlcmVHZW9tZXRyeSxcbiAgTWVzaE5vcm1hbE1hdGVyaWFsLFxuICBCb3hHZW9tZXRyeSxcbiAgVmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TG9vcH0gZnJvbSAnd2hzJztcblxuaW1wb3J0IHtWZWhpY2xlfSBmcm9tICcuLi92ZWhpY2xlL3ZlaGljbGUnO1xuaW1wb3J0IHtFdmVudGFibGV9IGZyb20gJy4uL2V2ZW50YWJsZSc7XG5cbmltcG9ydCB7XG4gIGFkZE9iamVjdENoaWxkcmVuLFxuICBNRVNTQUdFX1RZUEVTLFxuICB0ZW1wMVZlY3RvcjMsXG4gIHRlbXAxTWF0cml4NCxcbiAgUkVQT1JUX0lURU1TSVpFLFxuICBDT0xMSVNJT05SRVBPUlRfSVRFTVNJWkUsXG4gIFZFSElDTEVSRVBPUlRfSVRFTVNJWkUsXG4gIENPTlNUUkFJTlRSRVBPUlRfSVRFTVNJWkVcbn0gZnJvbSAnLi4vYXBpJztcblxuZXhwb3J0IGNsYXNzIFdvcmxkTW9kdWxlIGV4dGVuZHMgRXZlbnRhYmxlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBmaXhlZFRpbWVTdGVwOiAxLzYwLFxuICAgICAgcmF0ZUxpbWl0OiB0cnVlLFxuICAgICAgYW1tbzogXCJcIixcbiAgICAgIHNvZnRib2R5OiBmYWxzZSxcbiAgICAgIGdyYXZpdHk6IG5ldyBWZWN0b3IzKDAsIC0xMDAsIDApXG4gICAgfSwgcGFyYW1zKTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICB0aGlzLl93b3JrZXIgPSBuZXcgKHJlcXVpcmUoJ3dvcmtlci1sb2FkZXI/aW5saW5lLG5hbWU9d29ya2VyLmpzIS4uL3dvcmtlci5qcycpKSgpO1xuICAgIHRoaXMuX3dvcmtlci50cmFuc2ZlcmFibGVNZXNzYWdlID0gdGhpcy5fd29ya2VyLndlYmtpdFBvc3RNZXNzYWdlIHx8IHRoaXMuX3dvcmtlci5wb3N0TWVzc2FnZTtcblxuICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcblxuICAgIHRoaXMubG9hZGVyID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHBhcmFtcy53YXNtKSB7XG4gICAgICAgIGZldGNoKHBhcmFtcy53YXNtKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgICAgLnRoZW4oYnVmZmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLndhc21CdWZmZXIgPSBidWZmZXI7XG5cbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZSgnaW5pdCcsIHRoaXMucGFyYW1zKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGh5c2ljcyBsb2FkaW5nIHRpbWU6IFwiICsgKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpICsgXCJtc1wiKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgnaW5pdCcsIHRoaXMucGFyYW1zKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkZXIudGhlbigoKSA9PiB7dGhpcy5pc0xvYWRlZCA9IHRydWV9KTtcblxuICAgIHRoaXMuX21hdGVyaWFsc19yZWZfY291bnRzID0ge307XG4gICAgdGhpcy5fb2JqZWN0cyA9IHt9O1xuICAgIHRoaXMuX3ZlaGljbGVzID0ge307XG4gICAgdGhpcy5fY29uc3RyYWludHMgPSB7fTtcbiAgICB0aGlzLl9pc19zaW11bGF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5nZXRPYmplY3RJZCA9ICgoKSA9PiB7XG4gICAgICBsZXQgX2lkID0gMTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfaWQrKztcbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGFiID0gbmV3IEFycmF5QnVmZmVyKDEpO1xuICAgIHRoaXMuX3dvcmtlci50cmFuc2ZlcmFibGVNZXNzYWdlKGFiLCBbYWJdKTtcbiAgICB0aGlzLlNVUFBPUlRfVFJBTlNGRVJBQkxFID0gKGFiLmJ5dGVMZW5ndGggPT09IDApO1xuXG4gICAgdGhpcy5fd29ya2VyLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgbGV0IF90ZW1wLFxuICAgICAgICBkYXRhID0gZXZlbnQuZGF0YTtcblxuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciAmJiBkYXRhLmJ5dGVMZW5ndGggIT09IDEpLy8gYnl0ZUxlbmd0aCA9PT0gMSBpcyB0aGUgd29ya2VyIG1ha2luZyBhIFNVUFBPUlRfVFJBTlNGRVJBQkxFIHRlc3RcbiAgICAgICAgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XG4gICAgICAgIC8vIHRyYW5zZmVyYWJsZSBvYmplY3RcbiAgICAgICAgc3dpdGNoIChkYXRhWzBdKSB7XG4gICAgICAgICAgY2FzZSBNRVNTQUdFX1RZUEVTLldPUkxEUkVQT1JUOlxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2NlbmUoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgTUVTU0FHRV9UWVBFUy5TT0ZUUkVQT1JUOlxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU29mdGJvZGllcyhkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBNRVNTQUdFX1RZUEVTLkNPTExJU0lPTlJFUE9SVDpcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvbGxpc2lvbnMoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgTUVTU0FHRV9UWVBFUy5WRUhJQ0xFUkVQT1JUOlxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmVoaWNsZXMoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgTUVTU0FHRV9UWVBFUy5DT05TVFJBSU5UUkVQT1JUOlxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29uc3RyYWludHMoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuY21kKSB7XG4gICAgICAgIC8vIG5vbi10cmFuc2ZlcmFibGUgb2JqZWN0XG4gICAgICAgIHN3aXRjaCAoZGF0YS5jbWQpIHtcbiAgICAgICAgICBjYXNlICdvYmplY3RSZWFkeSc6XG4gICAgICAgICAgICBfdGVtcCA9IGRhdGEucGFyYW1zO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29iamVjdHNbX3RlbXBdKSB0aGlzLl9vYmplY3RzW190ZW1wXS5kaXNwYXRjaEV2ZW50KCdyZWFkeScpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd3b3JsZFJlYWR5JzpcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgncmVhZHknKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnYW1tb0xvYWRlZCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBoeXNpY3MgbG9hZGluZyB0aW1lOiBcIiArIChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KSArIFwibXNcIik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3ZlaGljbGUnOlxuICAgICAgICAgICAgd2luZG93LnRlc3QgPSBkYXRhO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gRG8gbm90aGluZywganVzdCBzaG93IHRoZSBtZXNzYWdlXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBSZWNlaXZlZDogJHtkYXRhLmNtZH1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKGRhdGEucGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGRhdGFbMF0pIHtcbiAgICAgICAgICBjYXNlIE1FU1NBR0VfVFlQRVMuV09STERSRVBPUlQ6XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTY2VuZShkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBNRVNTQUdFX1RZUEVTLkNPTExJU0lPTlJFUE9SVDpcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvbGxpc2lvbnMoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgTUVTU0FHRV9UWVBFUy5WRUhJQ0xFUkVQT1JUOlxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmVoaWNsZXMoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgTUVTU0FHRV9UWVBFUy5DT05TVFJBSU5UUkVQT1JUOlxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29uc3RyYWludHMoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIF91cGRhdGVTY2VuZShkYXRhKSB7XG4gICAgbGV0IGluZGV4ID0gZGF0YVsxXTtcblxuICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSAyICsgaW5kZXggKiBSRVBPUlRfSVRFTVNJWkU7XG4gICAgICBjb25zdCBvYmplY3QgPSB0aGlzLl9vYmplY3RzW2RhdGFbb2Zmc2V0XV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBvYmplY3QuY29tcG9uZW50O1xuICAgICAgY29uc3QgX3BoeXNpanMgPSBjb21wb25lbnQuX3BoeXNpanM7XG5cbiAgICAgIGlmIChvYmplY3QgPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoY29tcG9uZW50Ll9fZGlydHlQb3NpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnNldChcbiAgICAgICAgICBkYXRhW29mZnNldCArIDFdLFxuICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMl0sXG4gICAgICAgICAgZGF0YVtvZmZzZXQgKyAzXVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbXBvbmVudC5fX2RpcnR5UG9zaXRpb24gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBvbmVudC5fX2RpcnR5Um90YXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgIG9iamVjdC5xdWF0ZXJuaW9uLnNldChcbiAgICAgICAgICBkYXRhW29mZnNldCArIDRdLFxuICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgNV0sXG4gICAgICAgICAgZGF0YVtvZmZzZXQgKyA2XSxcbiAgICAgICAgICBkYXRhW29mZnNldCArIDddXG4gICAgICAgICk7XG5cbiAgICAgICAgY29tcG9uZW50Ll9fZGlydHlSb3RhdGlvbiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBfcGh5c2lqcy5saW5lYXJWZWxvY2l0eS5zZXQoXG4gICAgICAgIGRhdGFbb2Zmc2V0ICsgOF0sXG4gICAgICAgIGRhdGFbb2Zmc2V0ICsgOV0sXG4gICAgICAgIGRhdGFbb2Zmc2V0ICsgMTBdXG4gICAgICApO1xuXG4gICAgICBfcGh5c2lqcy5hbmd1bGFyVmVsb2NpdHkuc2V0KFxuICAgICAgICBkYXRhW29mZnNldCArIDExXSxcbiAgICAgICAgZGF0YVtvZmZzZXQgKyAxMl0sXG4gICAgICAgIGRhdGFbb2Zmc2V0ICsgMTNdXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLlNVUFBPUlRfVFJBTlNGRVJBQkxFKVxuICAgICAgdGhpcy5fd29ya2VyLnRyYW5zZmVyYWJsZU1lc3NhZ2UoZGF0YS5idWZmZXIsIFtkYXRhLmJ1ZmZlcl0pOyAvLyBHaXZlIHRoZSB0eXBlZCBhcnJheSBiYWNrIHRvIHRoZSB3b3JrZXJcblxuICAgIHRoaXMuX2lzX3NpbXVsYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgX3VwZGF0ZVNvZnRib2RpZXMoZGF0YSkge1xuICAgIGxldCBpbmRleCA9IGRhdGFbMV0sXG4gICAgICBvZmZzZXQgPSAyO1xuXG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IHNpemUgPSBkYXRhW29mZnNldCArIDFdO1xuICAgICAgY29uc3Qgb2JqZWN0ID0gdGhpcy5fb2JqZWN0c1tkYXRhW29mZnNldF1dO1xuICAgICAgY29uc3QgX3BoeXNpanMgPSBvYmplY3QuY29tcG9uZW50Ll9waHlzaWpzO1xuXG4gICAgICBpZiAob2JqZWN0ID09PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgYXR0cmlidXRlcyA9IG9iamVjdC5nZW9tZXRyeS5hdHRyaWJ1dGVzO1xuICAgICAgY29uc3Qgdm9sdW1lUG9zaXRpb25zID0gYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcblxuICAgICAgY29uc3Qgb2Zmc2V0VmVydCA9IG9mZnNldCArIDI7XG5cbiAgICAgIGlmIChfcGh5c2lqcy50eXBlID09PSBcInNvZnRUcmltZXNoXCIpIHtcbiAgICAgICAgY29uc3Qgdm9sdW1lTm9ybWFscyA9IGF0dHJpYnV0ZXMubm9ybWFsLmFycmF5O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgb2ZmcyA9IG9mZnNldFZlcnQgKyBpICogMTg7XG5cbiAgICAgICAgICBjb25zdCB4MSA9IGRhdGFbb2Zmc107XG4gICAgICAgICAgY29uc3QgeTEgPSBkYXRhW29mZnMgKyAxXTtcbiAgICAgICAgICBjb25zdCB6MSA9IGRhdGFbb2ZmcyArIDJdO1xuXG4gICAgICAgICAgY29uc3QgbngxID0gZGF0YVtvZmZzICsgM107XG4gICAgICAgICAgY29uc3QgbnkxID0gZGF0YVtvZmZzICsgNF07XG4gICAgICAgICAgY29uc3QgbnoxID0gZGF0YVtvZmZzICsgNV07XG5cbiAgICAgICAgICBjb25zdCB4MiA9IGRhdGFbb2ZmcyArIDZdO1xuICAgICAgICAgIGNvbnN0IHkyID0gZGF0YVtvZmZzICsgN107XG4gICAgICAgICAgY29uc3QgejIgPSBkYXRhW29mZnMgKyA4XTtcblxuICAgICAgICAgIGNvbnN0IG54MiA9IGRhdGFbb2ZmcyArIDldO1xuICAgICAgICAgIGNvbnN0IG55MiA9IGRhdGFbb2ZmcyArIDEwXTtcbiAgICAgICAgICBjb25zdCBuejIgPSBkYXRhW29mZnMgKyAxMV07XG5cbiAgICAgICAgICBjb25zdCB4MyA9IGRhdGFbb2ZmcyArIDEyXTtcbiAgICAgICAgICBjb25zdCB5MyA9IGRhdGFbb2ZmcyArIDEzXTtcbiAgICAgICAgICBjb25zdCB6MyA9IGRhdGFbb2ZmcyArIDE0XTtcblxuICAgICAgICAgIGNvbnN0IG54MyA9IGRhdGFbb2ZmcyArIDE1XTtcbiAgICAgICAgICBjb25zdCBueTMgPSBkYXRhW29mZnMgKyAxNl07XG4gICAgICAgICAgY29uc3QgbnozID0gZGF0YVtvZmZzICsgMTddO1xuXG4gICAgICAgICAgY29uc3QgaTkgPSBpICogOTtcblxuICAgICAgICAgIHZvbHVtZVBvc2l0aW9uc1tpOV0gPSB4MTtcbiAgICAgICAgICB2b2x1bWVQb3NpdGlvbnNbaTkgKyAxXSA9IHkxO1xuICAgICAgICAgIHZvbHVtZVBvc2l0aW9uc1tpOSArIDJdID0gejE7XG5cbiAgICAgICAgICB2b2x1bWVQb3NpdGlvbnNbaTkgKyAzXSA9IHgyO1xuICAgICAgICAgIHZvbHVtZVBvc2l0aW9uc1tpOSArIDRdID0geTI7XG4gICAgICAgICAgdm9sdW1lUG9zaXRpb25zW2k5ICsgNV0gPSB6MjtcblxuICAgICAgICAgIHZvbHVtZVBvc2l0aW9uc1tpOSArIDZdID0geDM7XG4gICAgICAgICAgdm9sdW1lUG9zaXRpb25zW2k5ICsgN10gPSB5MztcbiAgICAgICAgICB2b2x1bWVQb3NpdGlvbnNbaTkgKyA4XSA9IHozO1xuXG4gICAgICAgICAgdm9sdW1lTm9ybWFsc1tpOV0gPSBueDE7XG4gICAgICAgICAgdm9sdW1lTm9ybWFsc1tpOSArIDFdID0gbnkxO1xuICAgICAgICAgIHZvbHVtZU5vcm1hbHNbaTkgKyAyXSA9IG56MTtcblxuICAgICAgICAgIHZvbHVtZU5vcm1hbHNbaTkgKyAzXSA9IG54MjtcbiAgICAgICAgICB2b2x1bWVOb3JtYWxzW2k5ICsgNF0gPSBueTI7XG4gICAgICAgICAgdm9sdW1lTm9ybWFsc1tpOSArIDVdID0gbnoyO1xuXG4gICAgICAgICAgdm9sdW1lTm9ybWFsc1tpOSArIDZdID0gbngzO1xuICAgICAgICAgIHZvbHVtZU5vcm1hbHNbaTkgKyA3XSA9IG55MztcbiAgICAgICAgICB2b2x1bWVOb3JtYWxzW2k5ICsgOF0gPSBuejM7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyaWJ1dGVzLm5vcm1hbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfcGh5c2lqcy50eXBlID09PSBcInNvZnRSb3BlTWVzaFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgb2ZmcyA9IG9mZnNldFZlcnQgKyBpICogMztcblxuICAgICAgICAgIGNvbnN0IHggPSBkYXRhW29mZnNdO1xuICAgICAgICAgIGNvbnN0IHkgPSBkYXRhW29mZnMgKyAxXTtcbiAgICAgICAgICBjb25zdCB6ID0gZGF0YVtvZmZzICsgMl07XG5cbiAgICAgICAgICB2b2x1bWVQb3NpdGlvbnNbaSAqIDNdID0geDtcbiAgICAgICAgICB2b2x1bWVQb3NpdGlvbnNbaSAqIDMgKyAxXSA9IHk7XG4gICAgICAgICAgdm9sdW1lUG9zaXRpb25zW2kgKiAzICsgMl0gPSB6O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2b2x1bWVOb3JtYWxzID0gYXR0cmlidXRlcy5ub3JtYWwuYXJyYXk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBvZmZzID0gb2Zmc2V0VmVydCArIGkgKiA2O1xuXG4gICAgICAgICAgY29uc3QgeCA9IGRhdGFbb2Zmc107XG4gICAgICAgICAgY29uc3QgeSA9IGRhdGFbb2ZmcyArIDFdO1xuICAgICAgICAgIGNvbnN0IHogPSBkYXRhW29mZnMgKyAyXTtcblxuICAgICAgICAgIGNvbnN0IG54ID0gZGF0YVtvZmZzICsgM107XG4gICAgICAgICAgY29uc3QgbnkgPSBkYXRhW29mZnMgKyA0XTtcbiAgICAgICAgICBjb25zdCBueiA9IGRhdGFbb2ZmcyArIDVdO1xuXG4gICAgICAgICAgdm9sdW1lUG9zaXRpb25zW2kgKiAzXSA9IHg7XG4gICAgICAgICAgdm9sdW1lUG9zaXRpb25zW2kgKiAzICsgMV0gPSB5O1xuICAgICAgICAgIHZvbHVtZVBvc2l0aW9uc1tpICogMyArIDJdID0gejtcblxuICAgICAgICAgIC8vIEZJWE1FOiBOb3JtYWxzIGFyZSBwb2ludGVkIHRvIGxvb2sgaW5zaWRlO1xuICAgICAgICAgIHZvbHVtZU5vcm1hbHNbaSAqIDNdID0gbng7XG4gICAgICAgICAgdm9sdW1lTm9ybWFsc1tpICogMyArIDFdID0gbnk7XG4gICAgICAgICAgdm9sdW1lTm9ybWFsc1tpICogMyArIDJdID0gbno7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyaWJ1dGVzLm5vcm1hbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG4gICAgICBvZmZzZXQgKz0gMiArIHNpemUgKiAxODtcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5TVVBQT1JUX1RSQU5TRkVSQUJMRSlcbiAgICAvLyAgIHRoaXMuX3dvcmtlci50cmFuc2ZlcmFibGVNZXNzYWdlKGRhdGEuYnVmZmVyLCBbZGF0YS5idWZmZXJdKTsgLy8gR2l2ZSB0aGUgdHlwZWQgYXJyYXkgYmFjayB0byB0aGUgd29ya2VyXG5cbiAgICB0aGlzLl9pc19zaW11bGF0aW5nID0gZmFsc2U7XG4gIH1cblxuICBfdXBkYXRlVmVoaWNsZXMoZGF0YSkge1xuICAgIGxldCB2ZWhpY2xlLCB3aGVlbDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGRhdGEubGVuZ3RoIC0gMSkgLyBWRUhJQ0xFUkVQT1JUX0lURU1TSVpFOyBpKyspIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IDEgKyBpICogVkVISUNMRVJFUE9SVF9JVEVNU0laRTtcbiAgICAgIHZlaGljbGUgPSB0aGlzLl92ZWhpY2xlc1tkYXRhW29mZnNldF1dO1xuXG4gICAgICBpZiAodmVoaWNsZSA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgIHdoZWVsID0gdmVoaWNsZS53aGVlbHNbZGF0YVtvZmZzZXQgKyAxXV07XG5cbiAgICAgIHdoZWVsLnBvc2l0aW9uLnNldChcbiAgICAgICAgZGF0YVtvZmZzZXQgKyAyXSxcbiAgICAgICAgZGF0YVtvZmZzZXQgKyAzXSxcbiAgICAgICAgZGF0YVtvZmZzZXQgKyA0XVxuICAgICAgKTtcblxuICAgICAgd2hlZWwucXVhdGVybmlvbi5zZXQoXG4gICAgICAgIGRhdGFbb2Zmc2V0ICsgNV0sXG4gICAgICAgIGRhdGFbb2Zmc2V0ICsgNl0sXG4gICAgICAgIGRhdGFbb2Zmc2V0ICsgN10sXG4gICAgICAgIGRhdGFbb2Zmc2V0ICsgOF1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuU1VQUE9SVF9UUkFOU0ZFUkFCTEUpXG4gICAgICB0aGlzLl93b3JrZXIudHJhbnNmZXJhYmxlTWVzc2FnZShkYXRhLmJ1ZmZlciwgW2RhdGEuYnVmZmVyXSk7IC8vIEdpdmUgdGhlIHR5cGVkIGFycmF5IGJhY2sgdG8gdGhlIHdvcmtlclxuICB9XG5cbiAgX3VwZGF0ZUNvbnN0cmFpbnRzKGRhdGEpIHtcbiAgICBsZXQgY29uc3RyYWludCwgb2JqZWN0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZGF0YS5sZW5ndGggLSAxKSAvIENPTlNUUkFJTlRSRVBPUlRfSVRFTVNJWkU7IGkrKykge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gMSArIGkgKiBDT05TVFJBSU5UUkVQT1JUX0lURU1TSVpFO1xuICAgICAgY29uc3RyYWludCA9IHRoaXMuX2NvbnN0cmFpbnRzW2RhdGFbb2Zmc2V0XV07XG4gICAgICBvYmplY3QgPSB0aGlzLl9vYmplY3RzW2RhdGFbb2Zmc2V0ICsgMV1dO1xuXG4gICAgICBpZiAoY29uc3RyYWludCA9PT0gdW5kZWZpbmVkIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcblxuICAgICAgdGVtcDFWZWN0b3IzLnNldChcbiAgICAgICAgZGF0YVtvZmZzZXQgKyAyXSxcbiAgICAgICAgZGF0YVtvZmZzZXQgKyAzXSxcbiAgICAgICAgZGF0YVtvZmZzZXQgKyA0XVxuICAgICAgKTtcblxuICAgICAgdGVtcDFNYXRyaXg0LmV4dHJhY3RSb3RhdGlvbihvYmplY3QubWF0cml4KTtcbiAgICAgIHRlbXAxVmVjdG9yMy5hcHBseU1hdHJpeDQodGVtcDFNYXRyaXg0KTtcblxuICAgICAgY29uc3RyYWludC5wb3NpdGlvbmEuYWRkVmVjdG9ycyhvYmplY3QucG9zaXRpb24sIHRlbXAxVmVjdG9yMyk7XG4gICAgICBjb25zdHJhaW50LmFwcGxpZWRJbXB1bHNlID0gZGF0YVtvZmZzZXQgKyA1XTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5TVVBQT1JUX1RSQU5TRkVSQUJMRSlcbiAgICAgIHRoaXMuX3dvcmtlci50cmFuc2ZlcmFibGVNZXNzYWdlKGRhdGEuYnVmZmVyLCBbZGF0YS5idWZmZXJdKTsgLy8gR2l2ZSB0aGUgdHlwZWQgYXJyYXkgYmFjayB0byB0aGUgd29ya2VyXG4gIH1cblxuICBfdXBkYXRlQ29sbGlzaW9ucyhkYXRhKSB7XG4gICAgLyoqXG4gICAgICogI1RPRE9cbiAgICAgKiBUaGlzIGlzIHByb2JhYmx5IHRoZSB3b3JzdCB3YXkgZXZlciB0byBoYW5kbGUgY29sbGlzaW9ucy4gVGhlIGluaGVyZW50IGV2aWxuZXNzIGlzIGEgcmVzaWR1YWxcbiAgICAgKiBlZmZlY3QgZnJvbSB0aGUgcHJldmlvdXMgdmVyc2lvbidzIGV2aWxuZXNzIHdoaWNoIG11dGF0ZWQgd2hlbiBzd2l0Y2hpbmcgdG8gdHJhbnNmZXJhYmxlIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBJZiB5b3UgZmVlbCBpbmNsaW5lZCB0byBtYWtlIHRoaXMgYmV0dGVyLCBwbGVhc2UgZG8gc28uXG4gICAgICovXG5cbiAgICBjb25zdCBjb2xsaXNpb25zID0ge30sXG4gICAgICBub3JtYWxfb2Zmc2V0cyA9IHt9O1xuXG4gICAgLy8gQnVpbGQgY29sbGlzaW9uIG1hbmlmZXN0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhWzFdOyBpKyspIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IDIgKyBpICogQ09MTElTSU9OUkVQT1JUX0lURU1TSVpFO1xuICAgICAgY29uc3Qgb2JqZWN0ID0gZGF0YVtvZmZzZXRdO1xuICAgICAgY29uc3Qgb2JqZWN0MiA9IGRhdGFbb2Zmc2V0ICsgMV07XG5cbiAgICAgIG5vcm1hbF9vZmZzZXRzW2Ake29iamVjdH0tJHtvYmplY3QyfWBdID0gb2Zmc2V0ICsgMjtcbiAgICAgIG5vcm1hbF9vZmZzZXRzW2Ake29iamVjdDJ9LSR7b2JqZWN0fWBdID0gLTEgKiAob2Zmc2V0ICsgMik7XG5cbiAgICAgIC8vIFJlZ2lzdGVyIGNvbGxpc2lvbnMgZm9yIGJvdGggdGhlIG9iamVjdCBjb2xsaWRpbmcgYW5kIHRoZSBvYmplY3QgYmVpbmcgY29sbGlkZWQgd2l0aFxuICAgICAgaWYgKCFjb2xsaXNpb25zW29iamVjdF0pIGNvbGxpc2lvbnNbb2JqZWN0XSA9IFtdO1xuICAgICAgY29sbGlzaW9uc1tvYmplY3RdLnB1c2gob2JqZWN0Mik7XG5cbiAgICAgIGlmICghY29sbGlzaW9uc1tvYmplY3QyXSkgY29sbGlzaW9uc1tvYmplY3QyXSA9IFtdO1xuICAgICAgY29sbGlzaW9uc1tvYmplY3QyXS5wdXNoKG9iamVjdCk7XG4gICAgfVxuXG4gICAgLy8gRGVhbCB3aXRoIGNvbGxpc2lvbnNcbiAgICBmb3IgKGNvbnN0IGlkMSBpbiB0aGlzLl9vYmplY3RzKSB7XG4gICAgICBpZiAoIXRoaXMuX29iamVjdHMuaGFzT3duUHJvcGVydHkoaWQxKSkgY29udGludWU7XG4gICAgICBjb25zdCBvYmplY3QgPSB0aGlzLl9vYmplY3RzW2lkMV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBvYmplY3QuY29tcG9uZW50O1xuICAgICAgY29uc3QgX3BoeXNpanMgPSBjb21wb25lbnQuX3BoeXNpanM7XG4gICAgICBpZiAob2JqZWN0ID09PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgLy8gSWYgb2JqZWN0IHRvdWNoZXMgYW55dGhpbmcsIC4uLlxuICAgICAgaWYgKGNvbGxpc2lvbnNbaWQxXSkge1xuICAgICAgICAvLyBDbGVhbiB1cCB0b3VjaGVzIGFycmF5XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX3BoeXNpanMudG91Y2hlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChjb2xsaXNpb25zW2lkMV0uaW5kZXhPZihfcGh5c2lqcy50b3VjaGVzW2pdKSA9PT0gLTEpXG4gICAgICAgICAgICBfcGh5c2lqcy50b3VjaGVzLnNwbGljZShqLS0sIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIGVhY2ggY29sbGlkaW5nIG9iamVjdFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbGxpc2lvbnNbaWQxXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IGlkMiA9IGNvbGxpc2lvbnNbaWQxXVtqXTtcbiAgICAgICAgICBjb25zdCBvYmplY3QyID0gdGhpcy5fb2JqZWN0c1tpZDJdO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudDIgPSBvYmplY3QyLmNvbXBvbmVudDtcbiAgICAgICAgICBjb25zdCBfcGh5c2lqczIgPSBjb21wb25lbnQyLl9waHlzaWpzO1xuXG4gICAgICAgICAgaWYgKG9iamVjdDIpIHtcbiAgICAgICAgICAgIC8vIElmIG9iamVjdCB3YXMgbm90IGFscmVhZHkgdG91Y2hpbmcgb2JqZWN0Miwgbm90aWZ5IG9iamVjdFxuICAgICAgICAgICAgaWYgKF9waHlzaWpzLnRvdWNoZXMuaW5kZXhPZihpZDIpID09PSAtMSkge1xuICAgICAgICAgICAgICBfcGh5c2lqcy50b3VjaGVzLnB1c2goaWQyKTtcblxuICAgICAgICAgICAgICB0ZW1wMVZlY3RvcjMuc3ViVmVjdG9ycyhjb21wb25lbnQuZ2V0TGluZWFyVmVsb2NpdHkoKSwgY29tcG9uZW50Mi5nZXRMaW5lYXJWZWxvY2l0eSgpKTtcbiAgICAgICAgICAgICAgY29uc3QgdGVtcDEgPSB0ZW1wMVZlY3RvcjMuY2xvbmUoKTtcblxuICAgICAgICAgICAgICB0ZW1wMVZlY3RvcjMuc3ViVmVjdG9ycyhjb21wb25lbnQuZ2V0QW5ndWxhclZlbG9jaXR5KCksIGNvbXBvbmVudDIuZ2V0QW5ndWxhclZlbG9jaXR5KCkpO1xuICAgICAgICAgICAgICBjb25zdCB0ZW1wMiA9IHRlbXAxVmVjdG9yMy5jbG9uZSgpO1xuXG4gICAgICAgICAgICAgIGxldCBub3JtYWxfb2Zmc2V0ID0gbm9ybWFsX29mZnNldHNbYCR7X3BoeXNpanMuaWR9LSR7X3BoeXNpanMyLmlkfWBdO1xuXG4gICAgICAgICAgICAgIGlmIChub3JtYWxfb2Zmc2V0ID4gMCkge1xuICAgICAgICAgICAgICAgIHRlbXAxVmVjdG9yMy5zZXQoXG4gICAgICAgICAgICAgICAgICAtZGF0YVtub3JtYWxfb2Zmc2V0XSxcbiAgICAgICAgICAgICAgICAgIC1kYXRhW25vcm1hbF9vZmZzZXQgKyAxXSxcbiAgICAgICAgICAgICAgICAgIC1kYXRhW25vcm1hbF9vZmZzZXQgKyAyXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsX29mZnNldCAqPSAtMTtcblxuICAgICAgICAgICAgICAgIHRlbXAxVmVjdG9yMy5zZXQoXG4gICAgICAgICAgICAgICAgICBkYXRhW25vcm1hbF9vZmZzZXRdLFxuICAgICAgICAgICAgICAgICAgZGF0YVtub3JtYWxfb2Zmc2V0ICsgMV0sXG4gICAgICAgICAgICAgICAgICBkYXRhW25vcm1hbF9vZmZzZXQgKyAyXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb21wb25lbnQuZW1pdCgnY29sbGlzaW9uJywgb2JqZWN0MiwgdGVtcDEsIHRlbXAyLCB0ZW1wMVZlY3RvcjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIF9waHlzaWpzLnRvdWNoZXMubGVuZ3RoID0gMDsgLy8gbm90IHRvdWNoaW5nIG90aGVyIG9iamVjdHNcbiAgICB9XG5cbiAgICB0aGlzLmNvbGxpc2lvbnMgPSBjb2xsaXNpb25zO1xuXG4gICAgaWYgKHRoaXMuU1VQUE9SVF9UUkFOU0ZFUkFCTEUpXG4gICAgICB0aGlzLl93b3JrZXIudHJhbnNmZXJhYmxlTWVzc2FnZShkYXRhLmJ1ZmZlciwgW2RhdGEuYnVmZmVyXSk7IC8vIEdpdmUgdGhlIHR5cGVkIGFycmF5IGJhY2sgdG8gdGhlIHdvcmtlclxuICB9XG5cbiAgYWRkQ29uc3RyYWludChjb25zdHJhaW50LCBzaG93X21hcmtlcikge1xuICAgIGNvbnN0cmFpbnQuaWQgPSB0aGlzLmdldE9iamVjdElkKCk7XG4gICAgdGhpcy5fY29uc3RyYWludHNbY29uc3RyYWludC5pZF0gPSBjb25zdHJhaW50O1xuICAgIGNvbnN0cmFpbnQud29ybGRNb2R1bGUgPSB0aGlzO1xuICAgIHRoaXMuZXhlY3V0ZSgnYWRkQ29uc3RyYWludCcsIGNvbnN0cmFpbnQuZ2V0RGVmaW5pdGlvbigpKTtcblxuICAgIGlmIChzaG93X21hcmtlcikge1xuICAgICAgbGV0IG1hcmtlcjtcblxuICAgICAgc3dpdGNoIChjb25zdHJhaW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAncG9pbnQnOlxuICAgICAgICAgIG1hcmtlciA9IG5ldyBNZXNoKFxuICAgICAgICAgICAgbmV3IFNwaGVyZUdlb21ldHJ5KDEuNSksXG4gICAgICAgICAgICBuZXcgTWVzaE5vcm1hbE1hdGVyaWFsKClcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgbWFya2VyLnBvc2l0aW9uLmNvcHkoY29uc3RyYWludC5wb3NpdGlvbmEpO1xuICAgICAgICAgIHRoaXMuX29iamVjdHNbY29uc3RyYWludC5vYmplY3RhXS5hZGQobWFya2VyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdoaW5nZSc6XG4gICAgICAgICAgbWFya2VyID0gbmV3IE1lc2goXG4gICAgICAgICAgICBuZXcgU3BoZXJlR2VvbWV0cnkoMS41KSxcbiAgICAgICAgICAgIG5ldyBNZXNoTm9ybWFsTWF0ZXJpYWwoKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBtYXJrZXIucG9zaXRpb24uY29weShjb25zdHJhaW50LnBvc2l0aW9uYSk7XG4gICAgICAgICAgdGhpcy5fb2JqZWN0c1tjb25zdHJhaW50Lm9iamVjdGFdLmFkZChtYXJrZXIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3NsaWRlcic6XG4gICAgICAgICAgbWFya2VyID0gbmV3IE1lc2goXG4gICAgICAgICAgICBuZXcgQm94R2VvbWV0cnkoMTAsIDEsIDEpLFxuICAgICAgICAgICAgbmV3IE1lc2hOb3JtYWxNYXRlcmlhbCgpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIG1hcmtlci5wb3NpdGlvbi5jb3B5KGNvbnN0cmFpbnQucG9zaXRpb25hKTtcblxuICAgICAgICAgIC8vIFRoaXMgcm90YXRpb24gaXNuJ3QgcmlnaHQgaWYgYWxsIHRocmVlIGF4aXMgYXJlIG5vbi0wIHZhbHVlc1xuICAgICAgICAgIC8vIFRPRE86IGNoYW5nZSBtYXJrZXIncyByb3RhdGlvbiBvcmRlciB0byBaWVhcbiAgICAgICAgICBtYXJrZXIucm90YXRpb24uc2V0KFxuICAgICAgICAgICAgY29uc3RyYWludC5heGlzLnksIC8vIHllcywgeSBhbmRcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYXhpcy54LCAvLyB4IGF4aXMgYXJlIHN3YXBwZWRcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYXhpcy56XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLl9vYmplY3RzW2NvbnN0cmFpbnQub2JqZWN0YV0uYWRkKG1hcmtlcik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY29uZXR3aXN0JzpcbiAgICAgICAgICBtYXJrZXIgPSBuZXcgTWVzaChcbiAgICAgICAgICAgIG5ldyBTcGhlcmVHZW9tZXRyeSgxLjUpLFxuICAgICAgICAgICAgbmV3IE1lc2hOb3JtYWxNYXRlcmlhbCgpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIG1hcmtlci5wb3NpdGlvbi5jb3B5KGNvbnN0cmFpbnQucG9zaXRpb25hKTtcbiAgICAgICAgICB0aGlzLl9vYmplY3RzW2NvbnN0cmFpbnQub2JqZWN0YV0uYWRkKG1hcmtlcik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZG9mJzpcbiAgICAgICAgICBtYXJrZXIgPSBuZXcgTWVzaChcbiAgICAgICAgICAgIG5ldyBTcGhlcmVHZW9tZXRyeSgxLjUpLFxuICAgICAgICAgICAgbmV3IE1lc2hOb3JtYWxNYXRlcmlhbCgpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIG1hcmtlci5wb3NpdGlvbi5jb3B5KGNvbnN0cmFpbnQucG9zaXRpb25hKTtcbiAgICAgICAgICB0aGlzLl9vYmplY3RzW2NvbnN0cmFpbnQub2JqZWN0YV0uYWRkKG1hcmtlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cmFpbnQ7XG4gIH1cblxuICBvblNpbXVsYXRpb25SZXN1bWUoKSB7XG4gICAgdGhpcy5leGVjdXRlKCdvblNpbXVsYXRpb25SZXN1bWUnLCB7fSk7XG4gIH1cblxuICByZW1vdmVDb25zdHJhaW50KGNvbnN0cmFpbnQpIHtcbiAgICBpZiAodGhpcy5fY29uc3RyYWludHNbY29uc3RyYWludC5pZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5leGVjdXRlKCdyZW1vdmVDb25zdHJhaW50Jywge2lkOiBjb25zdHJhaW50LmlkfSk7XG4gICAgICBkZWxldGUgdGhpcy5fY29uc3RyYWludHNbY29uc3RyYWludC5pZF07XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjbWQsIHBhcmFtcykge1xuICAgIHRoaXMuX3dvcmtlci5wb3N0TWVzc2FnZSh7Y21kLCBwYXJhbXN9KTtcbiAgfVxuXG4gIG9uQWRkQ2FsbGJhY2soY29tcG9uZW50KSB7XG4gICAgY29uc3Qgb2JqZWN0ID0gY29tcG9uZW50Lm5hdGl2ZTtcbiAgICBjb25zdCBfcGh5c2lqcyA9IG9iamVjdC5fcGh5c2lqcyB8fCBvYmplY3QuY29tcG9uZW50Ll9waHlzaWpzO1xuXG4gICAgaWYgKF9waHlzaWpzKSB7XG4gICAgICBjb21wb25lbnQubWFuYWdlci5hZGREZXBlbmRlbmN5KCdtb2R1bGU6d29ybGQnLCB0aGlzKTtcbiAgICAgIF9waHlzaWpzLmlkID0gdGhpcy5nZXRPYmplY3RJZCgpO1xuXG4gICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgVmVoaWNsZSkge1xuICAgICAgICB0aGlzLm9uQWRkQ2FsbGJhY2sob2JqZWN0Lm1lc2gpO1xuICAgICAgICB0aGlzLl92ZWhpY2xlc1tfcGh5c2lqcy5pZF0gPSBvYmplY3Q7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgnYWRkVmVoaWNsZScsIF9waHlzaWpzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5fX2RpcnR5UG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlydHlSb3RhdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vYmplY3RzW19waHlzaWpzLmlkXSA9IG9iamVjdDtcblxuICAgICAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIF9waHlzaWpzLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgYWRkT2JqZWN0Q2hpbGRyZW4ob2JqZWN0LCBvYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9iamVjdC5tYXRlcmlhbC5fcGh5c2lqcykge1xuICAgICAgICAgIGlmICh0aGlzLl9tYXRlcmlhbHNfcmVmX2NvdW50cy5oYXNPd25Qcm9wZXJ0eShvYmplY3QubWF0ZXJpYWwuX3BoeXNpanMuaWQpKVxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxzX3JlZl9jb3VudHNbb2JqZWN0Lm1hdGVyaWFsLl9waHlzaWpzLmlkXSsrO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlKCdyZWdpc3Rlck1hdGVyaWFsJywgb2JqZWN0Lm1hdGVyaWFsLl9waHlzaWpzKTtcbiAgICAgICAgICAgIF9waHlzaWpzLm1hdGVyaWFsSWQgPSBvYmplY3QubWF0ZXJpYWwuX3BoeXNpanMuaWQ7XG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbHNfcmVmX2NvdW50c1tvYmplY3QubWF0ZXJpYWwuX3BoeXNpanMuaWRdID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPYmplY3Qgc3RhcnRpbmcgcG9zaXRpb24gKyByb3RhdGlvblxuICAgICAgICBfcGh5c2lqcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBvYmplY3QucG9zaXRpb24ueCxcbiAgICAgICAgICB5OiBvYmplY3QucG9zaXRpb24ueSxcbiAgICAgICAgICB6OiBvYmplY3QucG9zaXRpb24uelxuICAgICAgICB9O1xuXG4gICAgICAgIF9waHlzaWpzLnJvdGF0aW9uID0ge1xuICAgICAgICAgIHg6IG9iamVjdC5xdWF0ZXJuaW9uLngsXG4gICAgICAgICAgeTogb2JqZWN0LnF1YXRlcm5pb24ueSxcbiAgICAgICAgICB6OiBvYmplY3QucXVhdGVybmlvbi56LFxuICAgICAgICAgIHc6IG9iamVjdC5xdWF0ZXJuaW9uLndcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoX3BoeXNpanMuaXNTb2Z0Ym9keSkge1xuICAgICAgICAgIG9iamVjdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgICAgICAgb2JqZWN0LnF1YXRlcm5pb24uc2V0KDAsIDAsIDAsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNjYWxpbmdcbiAgICAgICAgLy8gdmFyIG1hc3Nfc2NhbGluZyA9IG5ldyBWZWN0b3IzKDEsIDEsIDEpO1xuXG4gICAgICAgIGlmIChfcGh5c2lqcy53aWR0aCkgX3BoeXNpanMud2lkdGggKj0gb2JqZWN0LnNjYWxlLng7XG4gICAgICAgIGlmIChfcGh5c2lqcy5oZWlnaHQpIF9waHlzaWpzLmhlaWdodCAqPSBvYmplY3Quc2NhbGUueTtcbiAgICAgICAgaWYgKF9waHlzaWpzLmRlcHRoKSBfcGh5c2lqcy5kZXB0aCAqPSBvYmplY3Quc2NhbGUuejtcblxuICAgICAgICB0aGlzLmV4ZWN1dGUoJ2FkZE9iamVjdCcsIF9waHlzaWpzKTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50LmVtaXQoJ3BoeXNpY3M6YWRkZWQnKTtcbiAgICB9XG4gIH1cblxuICBvblJlbW92ZUNhbGxiYWNrKGNvbXBvbmVudCkge1xuICAgIGNvbnN0IG9iamVjdCA9IGNvbXBvbmVudC5uYXRpdmU7XG5cbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgVmVoaWNsZSkge1xuICAgICAgdGhpcy5leGVjdXRlKCdyZW1vdmVWZWhpY2xlJywge2lkOiBvYmplY3QuX3BoeXNpanMuaWR9KTtcbiAgICAgIHdoaWxlIChvYmplY3Qud2hlZWxzLmxlbmd0aCkgdGhpcy5yZW1vdmUob2JqZWN0LndoZWVscy5wb3AoKSk7XG5cbiAgICAgIHRoaXMucmVtb3ZlKG9iamVjdC5tZXNoKTtcbiAgICAgIHRoaXMuX3ZlaGljbGVzW29iamVjdC5fcGh5c2lqcy5pZF0gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNZXNoLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzLCBvYmplY3QpO1xuXG4gICAgICBpZiAob2JqZWN0Ll9waHlzaWpzKSB7XG4gICAgICAgIGNvbXBvbmVudC5tYW5hZ2VyLnJlbW92ZURlcGVuZGVuY3koJ21vZHVsZTp3b3JsZCcpO1xuICAgICAgICB0aGlzLl9vYmplY3RzW29iamVjdC5fcGh5c2lqcy5pZF0gPSBudWxsO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoJ3JlbW92ZU9iamVjdCcsIHtpZDogb2JqZWN0Ll9waHlzaWpzLmlkfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3QubWF0ZXJpYWwgJiYgb2JqZWN0Lm1hdGVyaWFsLl9waHlzaWpzICYmIHRoaXMuX21hdGVyaWFsc19yZWZfY291bnRzLmhhc093blByb3BlcnR5KG9iamVjdC5tYXRlcmlhbC5fcGh5c2lqcy5pZCkpIHtcbiAgICAgIHRoaXMuX21hdGVyaWFsc19yZWZfY291bnRzW29iamVjdC5tYXRlcmlhbC5fcGh5c2lqcy5pZF0tLTtcblxuICAgICAgaWYgKHRoaXMuX21hdGVyaWFsc19yZWZfY291bnRzW29iamVjdC5tYXRlcmlhbC5fcGh5c2lqcy5pZF0gPT09IDApIHtcbiAgICAgICAgdGhpcy5leGVjdXRlKCd1blJlZ2lzdGVyTWF0ZXJpYWwnLCBvYmplY3QubWF0ZXJpYWwuX3BoeXNpanMpO1xuICAgICAgICB0aGlzLl9tYXRlcmlhbHNfcmVmX2NvdW50c1tvYmplY3QubWF0ZXJpYWwuX3BoeXNpanMuaWRdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZWZlcihmdW5jLCBhcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGVsc2UgdGhpcy5sb2FkZXIudGhlbigoKSA9PiB7XG4gICAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgbWFuYWdlci5hZGREZXBlbmRlbmN5KCdwaHlzaWNzV29ya2VyJywgdGhpcy5fd29ya2VyKTtcbiAgfVxuXG4gIGJyaWRnZSA9IHtcbiAgICBvbkFkZChjb21wb25lbnQsIHNlbGYpIHtcbiAgICAgIGlmIChjb21wb25lbnQuX3BoeXNpanMpIHJldHVybiBzZWxmLmRlZmVyKHNlbGYub25BZGRDYWxsYmFjay5iaW5kKHNlbGYpLCBbY29tcG9uZW50XSk7XG4gICAgICByZXR1cm47XG4gICAgfSxcbiAgICBvblJlbW92ZShjb21wb25lbnQsIHNlbGYpIHtcbiAgICAgIGlmIChjb21wb25lbnQuX3BoeXNpanMpIHJldHVybiBzZWxmLmRlZmVyKHNlbGYub25SZW1vdmVDYWxsYmFjay5iaW5kKHNlbGYpLCBbY29tcG9uZW50XSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIGludGVncmF0ZShwYXJhbXMsIHNlbGYpIHtcbiAgICAvLyAuLi5cblxuICAgIHRoaXMuc2V0Rml4ZWRUaW1lU3RlcCA9IGZ1bmN0aW9uKGZpeGVkVGltZVN0ZXApIHtcbiAgICAgIGlmIChmaXhlZFRpbWVTdGVwKSBzZWxmLmV4ZWN1dGUoJ3NldEZpeGVkVGltZVN0ZXAnLCBmaXhlZFRpbWVTdGVwKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEdyYXZpdHkgPSBmdW5jdGlvbihncmF2aXR5KSB7XG4gICAgICBpZiAoZ3Jhdml0eSkgc2VsZi5leGVjdXRlKCdzZXRHcmF2aXR5JywgZ3Jhdml0eSk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDb25zdHJhaW50ID0gc2VsZi5hZGRDb25zdHJhaW50LmJpbmQoc2VsZik7XG5cbiAgICB0aGlzLnNpbXVsYXRlID0gZnVuY3Rpb24odGltZVN0ZXAsIG1heFN1YlN0ZXBzKSB7XG4gICAgICBpZiAoc2VsZi5fc3RhdHMpIHNlbGYuX3N0YXRzLmJlZ2luKCk7XG5cbiAgICAgIGlmIChzZWxmLl9pc19zaW11bGF0aW5nKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHNlbGYuX2lzX3NpbXVsYXRpbmcgPSB0cnVlO1xuXG4gICAgICBmb3IgKGNvbnN0IG9iamVjdF9pZCBpbiBzZWxmLl9vYmplY3RzKSB7XG4gICAgICAgIGlmICghc2VsZi5fb2JqZWN0cy5oYXNPd25Qcm9wZXJ0eShvYmplY3RfaWQpKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBvYmplY3QgPSBzZWxmLl9vYmplY3RzW29iamVjdF9pZF07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG9iamVjdC5jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IF9waHlzaWpzID0gY29tcG9uZW50Ll9waHlzaWpzO1xuXG4gICAgICAgIGlmIChvYmplY3QgIT09IG51bGwgJiYgKGNvbXBvbmVudC5fX2RpcnR5UG9zaXRpb24gfHwgY29tcG9uZW50Ll9fZGlydHlSb3RhdGlvbikpIHtcbiAgICAgICAgICBjb25zdCB1cGRhdGUgPSB7aWQ6IF9waHlzaWpzLmlkfTtcblxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19kaXJ0eVBvc2l0aW9uKSB7XG4gICAgICAgICAgICB1cGRhdGUucG9zID0ge1xuICAgICAgICAgICAgICB4OiBvYmplY3QucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgeTogb2JqZWN0LnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgIHo6IG9iamVjdC5wb3NpdGlvbi56XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoX3BoeXNpanMuaXNTb2Z0Ym9keSkgb2JqZWN0LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcblxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlydHlQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19kaXJ0eVJvdGF0aW9uKSB7XG4gICAgICAgICAgICB1cGRhdGUucXVhdCA9IHtcbiAgICAgICAgICAgICAgeDogb2JqZWN0LnF1YXRlcm5pb24ueCxcbiAgICAgICAgICAgICAgeTogb2JqZWN0LnF1YXRlcm5pb24ueSxcbiAgICAgICAgICAgICAgejogb2JqZWN0LnF1YXRlcm5pb24ueixcbiAgICAgICAgICAgICAgdzogb2JqZWN0LnF1YXRlcm5pb24ud1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKF9waHlzaWpzLmlzU29mdGJvZHkpIG9iamVjdC5yb3RhdGlvbi5zZXQoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2RpcnR5Um90YXRpb24gPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLmV4ZWN1dGUoJ3VwZGF0ZVRyYW5zZm9ybScsIHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2VsZi5leGVjdXRlKCdzaW11bGF0ZScsIHt0aW1lU3RlcCwgbWF4U3ViU3RlcHN9KTtcblxuICAgICAgaWYgKHNlbGYuX3N0YXRzKSBzZWxmLl9zdGF0cy5lbmQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IHNpbXVsYXRlUHJvY2VzcyA9ICh0KSA9PiB7XG4gICAgLy8gICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNpbXVsYXRlUHJvY2Vzcyk7XG5cbiAgICAvLyAgIHRoaXMuc2ltdWxhdGUoMS82MCwgMSk7IC8vIGRlbHRhLCAxXG4gICAgLy8gfVxuXG4gICAgLy8gc2ltdWxhdGVQcm9jZXNzKCk7XG5cbiAgICBzZWxmLmxvYWRlci50aGVuKCgpID0+IHtcbiAgICAgIG5ldyBXSFMuTG9vcCgoY2xvY2spID0+IHtcbiAgICAgICAgdGhpcy5zaW11bGF0ZShjbG9jay5nZXREZWx0YSgpLCAxKTsgLy8gZGVsdGEsIDFcbiAgICAgIH0pLnN0YXJ0KHRoaXMpO1xuXG4gICAgICB0aGlzLnNldEdyYXZpdHkocGFyYW1zLmdyYXZpdHkpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9Xb3JsZE1vZHVsZS5qcyIsImV4cG9ydCAqIGZyb20gJy4vV29ybGRNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9Cb3hNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9DYXBzdWxlTW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vQ29uY2F2ZU1vZHVsZSc7XG4vLyBleHBvcnQgKiBmcm9tICcuL2NvbmVNZXNoJztcbmV4cG9ydCAqIGZyb20gJy4vQ29udmV4TW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vQ3lsaW5kZXJNb2R1bGUnO1xuLy8gZXhwb3J0ICogZnJvbSAnLi9oZWlnaHRmaWVsZE1lc2gnO1xuZXhwb3J0ICogZnJvbSAnLi9QbGFuZU1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL1NwaGVyZU1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL1NvZnRib2R5TW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vQ2xvdGhNb2R1bGUnO1xuLy8gZXhwb3J0ICogZnJvbSAnLi9yb3BlTWVzaCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsImV4cG9ydCAqIGZyb20gJy4vdHVubmluZyc7XG5leHBvcnQgKiBmcm9tICcuL3ZlaGljbGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlaGljbGUvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5JylcbiAgLCBnZXRJdGVyRm4gICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDM0MzkxMy9ob3ctdG8tY3JlYXRlLWEtd2ViLXdvcmtlci1mcm9tLWEtc3RyaW5nXHJcblxyXG52YXIgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbnRlbnQsIHVybCkge1xyXG5cdHRyeSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR2YXIgYmxvYjtcclxuXHRcdFx0dHJ5IHsgLy8gQmxvYkJ1aWxkZXIgPSBEZXByZWNhdGVkLCBidXQgd2lkZWx5IGltcGxlbWVudGVkXHJcblx0XHRcdFx0dmFyIEJsb2JCdWlsZGVyID0gd2luZG93LkJsb2JCdWlsZGVyIHx8IHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlciB8fCB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHwgd2luZG93Lk1TQmxvYkJ1aWxkZXI7XHJcblx0XHRcdFx0YmxvYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xyXG5cdFx0XHRcdGJsb2IuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHRcdGJsb2IgPSBibG9iLmdldEJsb2IoKTtcclxuXHRcdFx0fSBjYXRjaChlKSB7IC8vIFRoZSBwcm9wb3NlZCBBUElcclxuXHRcdFx0XHRibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcclxuXHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFdvcmtlcignZGF0YTphcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCcgKyBlbmNvZGVVUklDb21wb25lbnQoY29udGVudCkpO1xyXG5cdFx0fVxyXG5cdH0gY2F0Y2goZSkge1xyXG5cdFx0cmV0dXJuIG5ldyBXb3JrZXIodXJsKTtcclxuXHR9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd29ya2VyLWxvYWRlci9jcmVhdGVJbmxpbmVXb3JrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gcmVxdWlyZShcIiEhL1VzZXJzL2FsZXgyNDAxL3BoeXNpY3MtbW9kdWxlLWFtbW9uZXh0L25vZGVfbW9kdWxlcy93b3JrZXItbG9hZGVyL2NyZWF0ZUlubGluZVdvcmtlci5qc1wiKShcIi8qISBQaHlzaWNzIG1vZHVsZSBcXFwiQW1tb25leHRcXFwiIHYwLjAuMS1kZXYuMSAqL1xcbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcXG4vKioqKioqLyBcXHQvLyBUaGUgbW9kdWxlIGNhY2hlXFxuLyoqKioqKi8gXFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcXG4vKioqKioqL1xcbi8qKioqKiovIFxcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXFxuLyoqKioqKi8gXFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xcbi8qKioqKiovXFxuLyoqKioqKi8gXFx0XFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXFxuLyoqKioqKi8gXFx0XFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXFxuLyoqKioqKi8gXFx0XFx0XFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XFxuLyoqKioqKi9cXG4vKioqKioqLyBcXHRcXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxcbi8qKioqKiovIFxcdFxcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcXG4vKioqKioqLyBcXHRcXHRcXHRpOiBtb2R1bGVJZCxcXG4vKioqKioqLyBcXHRcXHRcXHRsOiBmYWxzZSxcXG4vKioqKioqLyBcXHRcXHRcXHRleHBvcnRzOiB7fVxcbi8qKioqKiovIFxcdFxcdH07XFxuLyoqKioqKi9cXG4vKioqKioqLyBcXHRcXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cXG4vKioqKioqLyBcXHRcXHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcXG4vKioqKioqL1xcbi8qKioqKiovIFxcdFxcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcXG4vKioqKioqLyBcXHRcXHRtb2R1bGUubCA9IHRydWU7XFxuLyoqKioqKi9cXG4vKioqKioqLyBcXHRcXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxcbi8qKioqKiovIFxcdFxcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcXG4vKioqKioqLyBcXHR9XFxuLyoqKioqKi9cXG4vKioqKioqL1xcbi8qKioqKiovIFxcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXFxuLyoqKioqKi8gXFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcXG4vKioqKioqL1xcbi8qKioqKiovIFxcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXFxuLyoqKioqKi8gXFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcXG4vKioqKioqL1xcbi8qKioqKiovIFxcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcXG4vKioqKioqLyBcXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XFxuLyoqKioqKi9cXG4vKioqKioqLyBcXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcXG4vKioqKioqLyBcXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcXG4vKioqKioqLyBcXHRcXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XFxuLyoqKioqKi8gXFx0XFx0XFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcXG4vKioqKioqLyBcXHRcXHRcXHRcXHRjb25maWd1cmFibGU6IGZhbHNlLFxcbi8qKioqKiovIFxcdFxcdFxcdFxcdGVudW1lcmFibGU6IHRydWUsXFxuLyoqKioqKi8gXFx0XFx0XFx0XFx0Z2V0OiBnZXR0ZXJcXG4vKioqKioqLyBcXHRcXHRcXHR9KTtcXG4vKioqKioqLyBcXHRcXHR9XFxuLyoqKioqKi8gXFx0fTtcXG4vKioqKioqL1xcbi8qKioqKiovIFxcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXFxuLyoqKioqKi8gXFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XFxuLyoqKioqKi8gXFx0XFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XFxuLyoqKioqKi8gXFx0XFx0XFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcXG4vKioqKioqLyBcXHRcXHRcXHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xcbi8qKioqKiovIFxcdFxcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcXG4vKioqKioqLyBcXHRcXHRyZXR1cm4gZ2V0dGVyO1xcbi8qKioqKiovIFxcdH07XFxuLyoqKioqKi9cXG4vKioqKioqLyBcXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcXG4vKioqKioqLyBcXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XFxuLyoqKioqKi9cXG4vKioqKioqLyBcXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xcbi8qKioqKiovIFxcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFxcXCJcXFwiO1xcbi8qKioqKiovXFxuLyoqKioqKi8gXFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXFxuLyoqKioqKi8gXFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XFxuLyoqKioqKi8gfSlcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKiovIChbXFxuLyogMCAqL1xcbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xcblxcbnZhciB0cmFuc2ZlcmFibGVNZXNzYWdlID0gc2VsZi53ZWJraXRQb3N0TWVzc2FnZSB8fCBzZWxmLnBvc3RNZXNzYWdlLFxcblxcblxcbi8vIGVudW1cXG5NRVNTQUdFX1RZUEVTID0ge1xcbiAgV09STERSRVBPUlQ6IDAsXFxuICBDT0xMSVNJT05SRVBPUlQ6IDEsXFxuICBWRUhJQ0xFUkVQT1JUOiAyLFxcbiAgQ09OU1RSQUlOVFJFUE9SVDogMyxcXG4gIFNPRlRSRVBPUlQ6IDRcXG59O1xcblxcbi8vIHRlbXAgdmFyaWFibGVzXFxudmFyIF9vYmplY3QgPSB2b2lkIDAsXFxuICAgIF92ZWN0b3IgPSB2b2lkIDAsXFxuICAgIF90cmFuc2Zvcm0gPSB2b2lkIDAsXFxuICAgIF90cmFuc2Zvcm1fcG9zID0gdm9pZCAwLFxcbiAgICBfc29mdGJvZHlfZW5hYmxlZCA9IGZhbHNlLFxcbiAgICBsYXN0X3NpbXVsYXRpb25fZHVyYXRpb24gPSAwLFxcbiAgICBfbnVtX29iamVjdHMgPSAwLFxcbiAgICBfbnVtX3JpZ2lkYm9keV9vYmplY3RzID0gMCxcXG4gICAgX251bV9zb2Z0Ym9keV9vYmplY3RzID0gMCxcXG4gICAgX251bV93aGVlbHMgPSAwLFxcbiAgICBfbnVtX2NvbnN0cmFpbnRzID0gMCxcXG4gICAgX3NvZnRib2R5X3JlcG9ydF9zaXplID0gMCxcXG5cXG5cXG4vLyB3b3JsZCB2YXJpYWJsZXNcXG5maXhlZFRpbWVTdGVwID0gdm9pZCAwLFxcbiAgICAvLyB1c2VkIHdoZW4gY2FsbGluZyBzdGVwU2ltdWxhdGlvblxcbmxhc3Rfc2ltdWxhdGlvbl90aW1lID0gdm9pZCAwLFxcbiAgICB3b3JsZCA9IHZvaWQgMCxcXG4gICAgX3ZlYzNfMSA9IHZvaWQgMCxcXG4gICAgX3ZlYzNfMiA9IHZvaWQgMCxcXG4gICAgX3ZlYzNfMyA9IHZvaWQgMCxcXG4gICAgX3F1YXQgPSB2b2lkIDA7XFxuXFxuLy8gcHJpdmF0ZSBjYWNoZVxcbnZhciBwdWJsaWNfZnVuY3Rpb25zID0ge30sXFxuICAgIF9vYmplY3RzID0gW10sXFxuICAgIF92ZWhpY2xlcyA9IFtdLFxcbiAgICBfY29uc3RyYWludHMgPSBbXSxcXG4gICAgX29iamVjdHNfYW1tbyA9IHt9LFxcbiAgICBfb2JqZWN0X3NoYXBlcyA9IHt9LFxcblxcblxcbi8vIFRoZSBmb2xsb3dpbmcgb2JqZWN0cyBhcmUgdG8gdHJhY2sgb2JqZWN0cyB0aGF0IGFtbW8uanMgZG9lc24ndCBjbGVhblxcbi8vIHVwLiBBbGwgYXJlIGNsZWFuZWQgdXAgd2hlbiB0aGV5J3JlIGNvcnJlc3BvbmRpbmcgYm9keSBpcyBkZXN0cm95ZWQuXFxuLy8gVW5mb3J0dW5hdGVseSwgaXQncyB2ZXJ5IGRpZmZpY3VsdCB0byBnZXQgYXQgdGhlc2Ugb2JqZWN0cyBmcm9tIHRoZVxcbi8vIGJvZHksIHNvIHdlIGhhdmUgdG8gdHJhY2sgdGhlbSBvdXJzZWx2ZXMuXFxuX21vdGlvbl9zdGF0ZXMgPSB7fSxcXG5cXG4vLyBEb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IGl0IGZvciBjYWNoZWQgc2hhcGVzLlxcbl9ub25jYWNoZWRfc2hhcGVzID0ge30sXFxuXFxuLy8gQSBib2R5IHdpdGggYSBjb21wb3VuZCBzaGFwZSBhbHdheXMgaGFzIGEgcmVndWxhciBzaGFwZSBhcyB3ZWxsLCBzbyB3ZVxcbi8vIGhhdmUgdHJhY2sgdGhlbSBzZXBhcmF0ZWx5Llxcbl9jb21wb3VuZF9zaGFwZXMgPSB7fTtcXG5cXG4vLyBvYmplY3QgcmVwb3J0aW5nXFxudmFyIFJFUE9SVF9DSFVOS1NJWkUgPSB2b2lkIDAsXFxuICAgIC8vIHJlcG9ydCBhcnJheSBpcyBpbmNyZWFzZWQgaW4gaW5jcmVtZW50cyBvZiB0aGlzIGNodW5rIHNpemVcXG53b3JsZHJlcG9ydCA9IHZvaWQgMCxcXG4gICAgc29mdHJlcG9ydCA9IHZvaWQgMCxcXG4gICAgY29sbGlzaW9ucmVwb3J0ID0gdm9pZCAwLFxcbiAgICB2ZWhpY2xlcmVwb3J0ID0gdm9pZCAwLFxcbiAgICBjb25zdHJhaW50cmVwb3J0ID0gdm9pZCAwO1xcblxcbnZhciBXT1JMRFJFUE9SVF9JVEVNU0laRSA9IDE0LFxcbiAgICAvLyBob3cgbWFueSBmbG9hdCB2YWx1ZXMgZWFjaCByZXBvcnRlZCBpdGVtIG5lZWRzXFxuQ09MTElTSU9OUkVQT1JUX0lURU1TSVpFID0gNSxcXG4gICAgLy8gb25lIGZsb2F0IGZvciBlYWNoIG9iamVjdCBpZCwgYW5kIGEgVmVjMyBjb250YWN0IG5vcm1hbFxcblZFSElDTEVSRVBPUlRfSVRFTVNJWkUgPSA5LFxcbiAgICAvLyB2ZWhpY2xlIGlkLCB3aGVlbCBpbmRleCwgMyBmb3IgcG9zaXRpb24sIDQgZm9yIHJvdGF0aW9uXFxuQ09OU1RSQUlOVFJFUE9SVF9JVEVNU0laRSA9IDY7IC8vIGNvbnN0cmFpbnQgaWQsIG9mZnNldCBvYmplY3QsIG9mZnNldCwgYXBwbGllZCBpbXB1bHNlXFxuXFxudmFyIGFiID0gbmV3IEFycmF5QnVmZmVyKDEpO1xcblxcbnRyYW5zZmVyYWJsZU1lc3NhZ2UoYWIsIFthYl0pO1xcbnZhciBTVVBQT1JUX1RSQU5TRkVSQUJMRSA9IGFiLmJ5dGVMZW5ndGggPT09IDA7XFxuXFxudmFyIGdldFNoYXBlRnJvbUNhY2hlID0gZnVuY3Rpb24gZ2V0U2hhcGVGcm9tQ2FjaGUoY2FjaGVfa2V5KSB7XFxuICBpZiAoX29iamVjdF9zaGFwZXNbY2FjaGVfa2V5XSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gX29iamVjdF9zaGFwZXNbY2FjaGVfa2V5XTtcXG5cXG4gIHJldHVybiBudWxsO1xcbn07XFxuXFxudmFyIHNldFNoYXBlQ2FjaGUgPSBmdW5jdGlvbiBzZXRTaGFwZUNhY2hlKGNhY2hlX2tleSwgc2hhcGUpIHtcXG4gIF9vYmplY3Rfc2hhcGVzW2NhY2hlX2tleV0gPSBzaGFwZTtcXG59O1xcblxcbnZhciBjcmVhdGVTaGFwZSA9IGZ1bmN0aW9uIGNyZWF0ZVNoYXBlKGRlc2NyaXB0aW9uKSB7XFxuICB2YXIgc2hhcGUgPSB2b2lkIDA7XFxuXFxuICBfdHJhbnNmb3JtLnNldElkZW50aXR5KCk7XFxuICBzd2l0Y2ggKGRlc2NyaXB0aW9uLnR5cGUpIHtcXG4gICAgY2FzZSAncGxhbmUnOlxcbiAgICAgIHtcXG4gICAgICAgIHZhciBjYWNoZV9rZXkgPSAncGxhbmVfJyArIGRlc2NyaXB0aW9uLm5vcm1hbC54ICsgJ18nICsgZGVzY3JpcHRpb24ubm9ybWFsLnkgKyAnXycgKyBkZXNjcmlwdGlvbi5ub3JtYWwuejtcXG5cXG4gICAgICAgIGlmICgoc2hhcGUgPSBnZXRTaGFwZUZyb21DYWNoZShjYWNoZV9rZXkpKSA9PT0gbnVsbCkge1xcbiAgICAgICAgICBfdmVjM18xLnNldFgoZGVzY3JpcHRpb24ubm9ybWFsLngpO1xcbiAgICAgICAgICBfdmVjM18xLnNldFkoZGVzY3JpcHRpb24ubm9ybWFsLnkpO1xcbiAgICAgICAgICBfdmVjM18xLnNldFooZGVzY3JpcHRpb24ubm9ybWFsLnopO1xcbiAgICAgICAgICBzaGFwZSA9IG5ldyBBbW1vLmJ0U3RhdGljUGxhbmVTaGFwZShfdmVjM18xLCAwKTtcXG4gICAgICAgICAgc2V0U2hhcGVDYWNoZShjYWNoZV9rZXksIHNoYXBlKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgY2FzZSAnYm94JzpcXG4gICAgICB7XFxuICAgICAgICB2YXIgX2NhY2hlX2tleSA9ICdib3hfJyArIGRlc2NyaXB0aW9uLndpZHRoICsgJ18nICsgZGVzY3JpcHRpb24uaGVpZ2h0ICsgJ18nICsgZGVzY3JpcHRpb24uZGVwdGg7XFxuXFxuICAgICAgICBpZiAoKHNoYXBlID0gZ2V0U2hhcGVGcm9tQ2FjaGUoX2NhY2hlX2tleSkpID09PSBudWxsKSB7XFxuICAgICAgICAgIF92ZWMzXzEuc2V0WChkZXNjcmlwdGlvbi53aWR0aCAvIDIpO1xcbiAgICAgICAgICBfdmVjM18xLnNldFkoZGVzY3JpcHRpb24uaGVpZ2h0IC8gMik7XFxuICAgICAgICAgIF92ZWMzXzEuc2V0WihkZXNjcmlwdGlvbi5kZXB0aCAvIDIpO1xcbiAgICAgICAgICBzaGFwZSA9IG5ldyBBbW1vLmJ0Qm94U2hhcGUoX3ZlYzNfMSk7XFxuICAgICAgICAgIHNldFNoYXBlQ2FjaGUoX2NhY2hlX2tleSwgc2hhcGUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICBjYXNlICdzcGhlcmUnOlxcbiAgICAgIHtcXG4gICAgICAgIHZhciBfY2FjaGVfa2V5MiA9ICdzcGhlcmVfJyArIGRlc2NyaXB0aW9uLnJhZGl1cztcXG5cXG4gICAgICAgIGlmICgoc2hhcGUgPSBnZXRTaGFwZUZyb21DYWNoZShfY2FjaGVfa2V5MikpID09PSBudWxsKSB7XFxuICAgICAgICAgIHNoYXBlID0gbmV3IEFtbW8uYnRTcGhlcmVTaGFwZShkZXNjcmlwdGlvbi5yYWRpdXMpO1xcbiAgICAgICAgICBzZXRTaGFwZUNhY2hlKF9jYWNoZV9rZXkyLCBzaGFwZSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIGNhc2UgJ2N5bGluZGVyJzpcXG4gICAgICB7XFxuICAgICAgICB2YXIgX2NhY2hlX2tleTMgPSAnY3lsaW5kZXJfJyArIGRlc2NyaXB0aW9uLndpZHRoICsgJ18nICsgZGVzY3JpcHRpb24uaGVpZ2h0ICsgJ18nICsgZGVzY3JpcHRpb24uZGVwdGg7XFxuXFxuICAgICAgICBpZiAoKHNoYXBlID0gZ2V0U2hhcGVGcm9tQ2FjaGUoX2NhY2hlX2tleTMpKSA9PT0gbnVsbCkge1xcbiAgICAgICAgICBfdmVjM18xLnNldFgoZGVzY3JpcHRpb24ud2lkdGggLyAyKTtcXG4gICAgICAgICAgX3ZlYzNfMS5zZXRZKGRlc2NyaXB0aW9uLmhlaWdodCAvIDIpO1xcbiAgICAgICAgICBfdmVjM18xLnNldFooZGVzY3JpcHRpb24uZGVwdGggLyAyKTtcXG4gICAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idEN5bGluZGVyU2hhcGUoX3ZlYzNfMSk7XFxuICAgICAgICAgIHNldFNoYXBlQ2FjaGUoX2NhY2hlX2tleTMsIHNoYXBlKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgY2FzZSAnY2Fwc3VsZSc6XFxuICAgICAge1xcbiAgICAgICAgdmFyIF9jYWNoZV9rZXk0ID0gJ2NhcHN1bGVfJyArIGRlc2NyaXB0aW9uLnJhZGl1cyArICdfJyArIGRlc2NyaXB0aW9uLmhlaWdodDtcXG5cXG4gICAgICAgIGlmICgoc2hhcGUgPSBnZXRTaGFwZUZyb21DYWNoZShfY2FjaGVfa2V5NCkpID09PSBudWxsKSB7XFxuICAgICAgICAgIC8vIEluIEJ1bGxldCwgY2Fwc3VsZSBoZWlnaHQgZXhjbHVkZXMgdGhlIGVuZCBzcGhlcmVzXFxuICAgICAgICAgIHNoYXBlID0gbmV3IEFtbW8uYnRDYXBzdWxlU2hhcGUoZGVzY3JpcHRpb24ucmFkaXVzLCBkZXNjcmlwdGlvbi5oZWlnaHQgLSAyICogZGVzY3JpcHRpb24ucmFkaXVzKTtcXG4gICAgICAgICAgc2V0U2hhcGVDYWNoZShfY2FjaGVfa2V5NCwgc2hhcGUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICBjYXNlICdjb25lJzpcXG4gICAgICB7XFxuICAgICAgICB2YXIgX2NhY2hlX2tleTUgPSAnY29uZV8nICsgZGVzY3JpcHRpb24ucmFkaXVzICsgJ18nICsgZGVzY3JpcHRpb24uaGVpZ2h0O1xcblxcbiAgICAgICAgaWYgKChzaGFwZSA9IGdldFNoYXBlRnJvbUNhY2hlKF9jYWNoZV9rZXk1KSkgPT09IG51bGwpIHtcXG4gICAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idENvbmVTaGFwZShkZXNjcmlwdGlvbi5yYWRpdXMsIGRlc2NyaXB0aW9uLmhlaWdodCk7XFxuICAgICAgICAgIHNldFNoYXBlQ2FjaGUoX2NhY2hlX2tleTUsIHNoYXBlKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgY2FzZSAnY29uY2F2ZSc6XFxuICAgICAge1xcbiAgICAgICAgdmFyIHRyaWFuZ2xlX21lc2ggPSBuZXcgQW1tby5idFRyaWFuZ2xlTWVzaCgpO1xcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbi5kYXRhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgdmFyIGRhdGEgPSBkZXNjcmlwdGlvbi5kYXRhO1xcblxcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCAvIDk7IGkrKykge1xcbiAgICAgICAgICBfdmVjM18xLnNldFgoZGF0YVtpICogOV0pO1xcbiAgICAgICAgICBfdmVjM18xLnNldFkoZGF0YVtpICogOSArIDFdKTtcXG4gICAgICAgICAgX3ZlYzNfMS5zZXRaKGRhdGFbaSAqIDkgKyAyXSk7XFxuXFxuICAgICAgICAgIF92ZWMzXzIuc2V0WChkYXRhW2kgKiA5ICsgM10pO1xcbiAgICAgICAgICBfdmVjM18yLnNldFkoZGF0YVtpICogOSArIDRdKTtcXG4gICAgICAgICAgX3ZlYzNfMi5zZXRaKGRhdGFbaSAqIDkgKyA1XSk7XFxuXFxuICAgICAgICAgIF92ZWMzXzMuc2V0WChkYXRhW2kgKiA5ICsgNl0pO1xcbiAgICAgICAgICBfdmVjM18zLnNldFkoZGF0YVtpICogOSArIDddKTtcXG4gICAgICAgICAgX3ZlYzNfMy5zZXRaKGRhdGFbaSAqIDkgKyA4XSk7XFxuXFxuICAgICAgICAgIHRyaWFuZ2xlX21lc2guYWRkVHJpYW5nbGUoX3ZlYzNfMSwgX3ZlYzNfMiwgX3ZlYzNfMywgZmFsc2UpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idEJ2aFRyaWFuZ2xlTWVzaFNoYXBlKHRyaWFuZ2xlX21lc2gsIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgX25vbmNhY2hlZF9zaGFwZXNbZGVzY3JpcHRpb24uaWRdID0gc2hhcGU7XFxuXFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIGNhc2UgJ2NvbnZleCc6XFxuICAgICAge1xcbiAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idENvbnZleEh1bGxTaGFwZSgpO1xcbiAgICAgICAgdmFyIF9kYXRhID0gZGVzY3JpcHRpb24uZGF0YTtcXG5cXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGF0YS5sZW5ndGggLyAzOyBfaSsrKSB7XFxuICAgICAgICAgIF92ZWMzXzEuc2V0WChfZGF0YVtfaSAqIDNdKTtcXG4gICAgICAgICAgX3ZlYzNfMS5zZXRZKF9kYXRhW19pICogMyArIDFdKTtcXG4gICAgICAgICAgX3ZlYzNfMS5zZXRaKF9kYXRhW19pICogMyArIDJdKTtcXG5cXG4gICAgICAgICAgc2hhcGUuYWRkUG9pbnQoX3ZlYzNfMSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBfbm9uY2FjaGVkX3NoYXBlc1tkZXNjcmlwdGlvbi5pZF0gPSBzaGFwZTtcXG5cXG4gICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgY2FzZSAnaGVpZ2h0ZmllbGQnOlxcbiAgICAgIHtcXG4gICAgICAgIHZhciB4cHRzID0gZGVzY3JpcHRpb24ueHB0cyxcXG4gICAgICAgICAgICB5cHRzID0gZGVzY3JpcHRpb24ueXB0cyxcXG4gICAgICAgICAgICBwb2ludHMgPSBkZXNjcmlwdGlvbi5wb2ludHMsXFxuICAgICAgICAgICAgcHRyID0gQW1tby5fbWFsbG9jKDQgKiB4cHRzICogeXB0cyk7XFxuXFxuICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBwID0gMCwgcDIgPSAwOyBfaTIgPCB4cHRzOyBfaTIrKykge1xcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHlwdHM7IGorKykge1xcbiAgICAgICAgICAgIEFtbW8uSEVBUEYzMltwdHIgKyBwMiA+PiAyXSA9IHBvaW50c1twXTtcXG5cXG4gICAgICAgICAgICBwKys7XFxuICAgICAgICAgICAgcDIgKz0gNDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgc2hhcGUgPSBuZXcgQW1tby5idEhlaWdodGZpZWxkVGVycmFpblNoYXBlKGRlc2NyaXB0aW9uLnhwdHMsIGRlc2NyaXB0aW9uLnlwdHMsIHB0ciwgMSwgLWRlc2NyaXB0aW9uLmFic01heEhlaWdodCwgZGVzY3JpcHRpb24uYWJzTWF4SGVpZ2h0LCAyLCAnUEhZX0ZMT0FUJywgZmFsc2UpO1xcblxcbiAgICAgICAgX3ZlYzNfMS5zZXRYKGRlc2NyaXB0aW9uLnhzaXplIC8gKGRlc2NyaXB0aW9uLnhwdHMgLSAxKSk7XFxuICAgICAgICBfdmVjM18xLnNldFkoZGVzY3JpcHRpb24ueXNpemUgLyAoZGVzY3JpcHRpb24ueXB0cyAtIDEpKTtcXG4gICAgICAgIF92ZWMzXzEuc2V0WigxKTtcXG5cXG4gICAgICAgIHNoYXBlLnNldExvY2FsU2NhbGluZyhfdmVjM18xKTtcXG4gICAgICAgIF9ub25jYWNoZWRfc2hhcGVzW2Rlc2NyaXB0aW9uLmlkXSA9IHNoYXBlO1xcbiAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICBkZWZhdWx0OlxcbiAgICAgIC8vIE5vdCByZWNvZ25pemVkXFxuICAgICAgcmV0dXJuO1xcbiAgfVxcblxcbiAgcmV0dXJuIHNoYXBlO1xcbn07XFxuXFxudmFyIGNyZWF0ZVNvZnRCb2R5ID0gZnVuY3Rpb24gY3JlYXRlU29mdEJvZHkoZGVzY3JpcHRpb24pIHtcXG4gIHZhciBib2R5ID0gdm9pZCAwO1xcblxcbiAgdmFyIHNvZnRCb2R5SGVscGVycyA9IG5ldyBBbW1vLmJ0U29mdEJvZHlIZWxwZXJzKCk7XFxuXFxuICBzd2l0Y2ggKGRlc2NyaXB0aW9uLnR5cGUpIHtcXG4gICAgY2FzZSAnc29mdFRyaW1lc2gnOlxcbiAgICAgIHtcXG4gICAgICAgIGlmICghZGVzY3JpcHRpb24uYVZlcnRpY2VzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xcblxcbiAgICAgICAgYm9keSA9IHNvZnRCb2R5SGVscGVycy5DcmVhdGVGcm9tVHJpTWVzaCh3b3JsZC5nZXRXb3JsZEluZm8oKSwgZGVzY3JpcHRpb24uYVZlcnRpY2VzLCBkZXNjcmlwdGlvbi5hSW5kaWNlcywgZGVzY3JpcHRpb24uYUluZGljZXMubGVuZ3RoIC8gMywgZmFsc2UpO1xcblxcbiAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICBjYXNlICdzb2Z0Q2xvdGhNZXNoJzpcXG4gICAgICB7XFxuICAgICAgICB2YXIgY3IgPSBkZXNjcmlwdGlvbi5jb3JuZXJzO1xcblxcbiAgICAgICAgYm9keSA9IHNvZnRCb2R5SGVscGVycy5DcmVhdGVQYXRjaCh3b3JsZC5nZXRXb3JsZEluZm8oKSwgbmV3IEFtbW8uYnRWZWN0b3IzKGNyWzBdLCBjclsxXSwgY3JbMl0pLCBuZXcgQW1tby5idFZlY3RvcjMoY3JbM10sIGNyWzRdLCBjcls1XSksIG5ldyBBbW1vLmJ0VmVjdG9yMyhjcls2XSwgY3JbN10sIGNyWzhdKSwgbmV3IEFtbW8uYnRWZWN0b3IzKGNyWzldLCBjclsxMF0sIGNyWzExXSksIGRlc2NyaXB0aW9uLnNlZ21lbnRzWzBdLCBkZXNjcmlwdGlvbi5zZWdtZW50c1sxXSwgMCwgdHJ1ZSk7XFxuXFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIGNhc2UgJ3NvZnRSb3BlTWVzaCc6XFxuICAgICAge1xcbiAgICAgICAgdmFyIGRhdGEgPSBkZXNjcmlwdGlvbi5kYXRhO1xcblxcbiAgICAgICAgYm9keSA9IHNvZnRCb2R5SGVscGVycy5DcmVhdGVSb3BlKHdvcmxkLmdldFdvcmxkSW5mbygpLCBuZXcgQW1tby5idFZlY3RvcjMoZGF0YVswXSwgZGF0YVsxXSwgZGF0YVsyXSksIG5ldyBBbW1vLmJ0VmVjdG9yMyhkYXRhWzNdLCBkYXRhWzRdLCBkYXRhWzVdKSwgZGF0YVs2XSAtIDEsIDApO1xcblxcbiAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICBkZWZhdWx0OlxcbiAgICAgIC8vIE5vdCByZWNvZ25pemVkXFxuICAgICAgcmV0dXJuO1xcbiAgfVxcblxcbiAgcmV0dXJuIGJvZHk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLmluaXQgPSBmdW5jdGlvbiAoKSB7XFxuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcXG5cXG4gIGlmIChwYXJhbXMud2FzbUJ1ZmZlcikge1xcbiAgICBpbXBvcnRTY3JpcHRzKHBhcmFtcy5hbW1vKTtcXG5cXG4gICAgc2VsZi5BbW1vID0gbG9hZEFtbW9Gcm9tQmluYXJ5KHBhcmFtcy53YXNtQnVmZmVyKTtcXG4gICAgdHJhbnNmZXJhYmxlTWVzc2FnZSh7IGNtZDogJ2FtbW9Mb2FkZWQnIH0pO1xcbiAgICBwdWJsaWNfZnVuY3Rpb25zLm1ha2VXb3JsZChwYXJhbXMpO1xcbiAgfSBlbHNlIHtcXG4gICAgaW1wb3J0U2NyaXB0cyhwYXJhbXMuYW1tbyk7XFxuICAgIHRyYW5zZmVyYWJsZU1lc3NhZ2UoeyBjbWQ6ICdhbW1vTG9hZGVkJyB9KTtcXG4gICAgcHVibGljX2Z1bmN0aW9ucy5tYWtlV29ybGQocGFyYW1zKTtcXG4gIH1cXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMubWFrZVdvcmxkID0gZnVuY3Rpb24gKCkge1xcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XFxuXFxuICBfdHJhbnNmb3JtID0gbmV3IEFtbW8uYnRUcmFuc2Zvcm0oKTtcXG4gIF90cmFuc2Zvcm1fcG9zID0gbmV3IEFtbW8uYnRUcmFuc2Zvcm0oKTtcXG4gIF92ZWMzXzEgPSBuZXcgQW1tby5idFZlY3RvcjMoMCwgMCwgMCk7XFxuICBfdmVjM18yID0gbmV3IEFtbW8uYnRWZWN0b3IzKDAsIDAsIDApO1xcbiAgX3ZlYzNfMyA9IG5ldyBBbW1vLmJ0VmVjdG9yMygwLCAwLCAwKTtcXG4gIF9xdWF0ID0gbmV3IEFtbW8uYnRRdWF0ZXJuaW9uKDAsIDAsIDAsIDApO1xcblxcbiAgUkVQT1JUX0NIVU5LU0laRSA9IHBhcmFtcy5yZXBvcnRzaXplIHx8IDUwO1xcblxcbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB7XFxuICAgIC8vIFRyYW5zZmVyYWJsZSBtZXNzYWdlcyBhcmUgc3VwcG9ydGVkLCB0YWtlIGFkdmFudGFnZSBvZiB0aGVtIHdpdGggVHlwZWRBcnJheXNcXG4gICAgd29ybGRyZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KDIgKyBSRVBPUlRfQ0hVTktTSVpFICogV09STERSRVBPUlRfSVRFTVNJWkUpOyAvLyBtZXNzYWdlIGlkICsgIyBvZiBvYmplY3RzIHRvIHJlcG9ydCArIGNodW5rIHNpemUgKiAjIG9mIHZhbHVlcyBwZXIgb2JqZWN0XFxuICAgIGNvbGxpc2lvbnJlcG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoMiArIFJFUE9SVF9DSFVOS1NJWkUgKiBDT0xMSVNJT05SRVBPUlRfSVRFTVNJWkUpOyAvLyBtZXNzYWdlIGlkICsgIyBvZiBjb2xsaXNpb25zIHRvIHJlcG9ydCArIGNodW5rIHNpemUgKiAjIG9mIHZhbHVlcyBwZXIgb2JqZWN0XFxuICAgIHZlaGljbGVyZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KDIgKyBSRVBPUlRfQ0hVTktTSVpFICogVkVISUNMRVJFUE9SVF9JVEVNU0laRSk7IC8vIG1lc3NhZ2UgaWQgKyAjIG9mIHZlaGljbGVzIHRvIHJlcG9ydCArIGNodW5rIHNpemUgKiAjIG9mIHZhbHVlcyBwZXIgb2JqZWN0XFxuICAgIGNvbnN0cmFpbnRyZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KDIgKyBSRVBPUlRfQ0hVTktTSVpFICogQ09OU1RSQUlOVFJFUE9SVF9JVEVNU0laRSk7IC8vIG1lc3NhZ2UgaWQgKyAjIG9mIGNvbnN0cmFpbnRzIHRvIHJlcG9ydCArIGNodW5rIHNpemUgKiAjIG9mIHZhbHVlcyBwZXIgb2JqZWN0XFxuICB9IGVsc2Uge1xcbiAgICAvLyBUcmFuc2ZlcmFibGUgbWVzc2FnZXMgYXJlIG5vdCBzdXBwb3J0ZWQsIHNlbmQgZGF0YSBhcyBub3JtYWwgYXJyYXlzXFxuICAgIHdvcmxkcmVwb3J0ID0gW107XFxuICAgIGNvbGxpc2lvbnJlcG9ydCA9IFtdO1xcbiAgICB2ZWhpY2xlcmVwb3J0ID0gW107XFxuICAgIGNvbnN0cmFpbnRyZXBvcnQgPSBbXTtcXG4gIH1cXG5cXG4gIHdvcmxkcmVwb3J0WzBdID0gTUVTU0FHRV9UWVBFUy5XT1JMRFJFUE9SVDtcXG4gIGNvbGxpc2lvbnJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuQ09MTElTSU9OUkVQT1JUO1xcbiAgdmVoaWNsZXJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuVkVISUNMRVJFUE9SVDtcXG4gIGNvbnN0cmFpbnRyZXBvcnRbMF0gPSBNRVNTQUdFX1RZUEVTLkNPTlNUUkFJTlRSRVBPUlQ7XFxuXFxuICB2YXIgY29sbGlzaW9uQ29uZmlndXJhdGlvbiA9IHBhcmFtcy5zb2Z0Ym9keSA/IG5ldyBBbW1vLmJ0U29mdEJvZHlSaWdpZEJvZHlDb2xsaXNpb25Db25maWd1cmF0aW9uKCkgOiBuZXcgQW1tby5idERlZmF1bHRDb2xsaXNpb25Db25maWd1cmF0aW9uKCksXFxuICAgICAgZGlzcGF0Y2hlciA9IG5ldyBBbW1vLmJ0Q29sbGlzaW9uRGlzcGF0Y2hlcihjb2xsaXNpb25Db25maWd1cmF0aW9uKSxcXG4gICAgICBzb2x2ZXIgPSBuZXcgQW1tby5idFNlcXVlbnRpYWxJbXB1bHNlQ29uc3RyYWludFNvbHZlcigpO1xcblxcbiAgdmFyIGJyb2FkcGhhc2UgPSB2b2lkIDA7XFxuXFxuICBpZiAoIXBhcmFtcy5icm9hZHBoYXNlKSBwYXJhbXMuYnJvYWRwaGFzZSA9IHsgdHlwZTogJ2R5bmFtaWMnIH07XFxuICAvLyBUT0RPISEhXFxuICAvKiBpZiAocGFyYW1zLmJyb2FkcGhhc2UudHlwZSA9PT0gJ3N3ZWVwcHJ1bmUnKSB7XFxuICAgIGV4dGVuZChwYXJhbXMuYnJvYWRwaGFzZSwge1xcbiAgICAgIGFhYmJtaW46IHtcXG4gICAgICAgIHg6IC01MCxcXG4gICAgICAgIHk6IC01MCxcXG4gICAgICAgIHo6IC01MFxcbiAgICAgIH0sXFxuICAgICAgIGFhYmJtYXg6IHtcXG4gICAgICAgIHg6IDUwLFxcbiAgICAgICAgeTogNTAsXFxuICAgICAgICB6OiA1MFxcbiAgICAgIH0sXFxuICAgIH0pO1xcbiAgfSovXFxuXFxuICBzd2l0Y2ggKHBhcmFtcy5icm9hZHBoYXNlLnR5cGUpIHtcXG4gICAgY2FzZSAnc3dlZXBwcnVuZSc6XFxuICAgICAgX3ZlYzNfMS5zZXRYKHBhcmFtcy5icm9hZHBoYXNlLmFhYmJtaW4ueCk7XFxuICAgICAgX3ZlYzNfMS5zZXRZKHBhcmFtcy5icm9hZHBoYXNlLmFhYmJtaW4ueSk7XFxuICAgICAgX3ZlYzNfMS5zZXRaKHBhcmFtcy5icm9hZHBoYXNlLmFhYmJtaW4ueik7XFxuXFxuICAgICAgX3ZlYzNfMi5zZXRYKHBhcmFtcy5icm9hZHBoYXNlLmFhYmJtYXgueCk7XFxuICAgICAgX3ZlYzNfMi5zZXRZKHBhcmFtcy5icm9hZHBoYXNlLmFhYmJtYXgueSk7XFxuICAgICAgX3ZlYzNfMi5zZXRaKHBhcmFtcy5icm9hZHBoYXNlLmFhYmJtYXgueik7XFxuXFxuICAgICAgYnJvYWRwaGFzZSA9IG5ldyBBbW1vLmJ0QXhpc1N3ZWVwMyhfdmVjM18xLCBfdmVjM18yKTtcXG5cXG4gICAgICBicmVhaztcXG4gICAgY2FzZSAnZHluYW1pYyc6XFxuICAgIGRlZmF1bHQ6XFxuICAgICAgYnJvYWRwaGFzZSA9IG5ldyBBbW1vLmJ0RGJ2dEJyb2FkcGhhc2UoKTtcXG4gICAgICBicmVhaztcXG4gIH1cXG5cXG4gIHdvcmxkID0gcGFyYW1zLnNvZnRib2R5ID8gbmV3IEFtbW8uYnRTb2Z0UmlnaWREeW5hbWljc1dvcmxkKGRpc3BhdGNoZXIsIGJyb2FkcGhhc2UsIHNvbHZlciwgY29sbGlzaW9uQ29uZmlndXJhdGlvbiwgbmV3IEFtbW8uYnREZWZhdWx0U29mdEJvZHlTb2x2ZXIoKSkgOiBuZXcgQW1tby5idERpc2NyZXRlRHluYW1pY3NXb3JsZChkaXNwYXRjaGVyLCBicm9hZHBoYXNlLCBzb2x2ZXIsIGNvbGxpc2lvbkNvbmZpZ3VyYXRpb24pO1xcbiAgZml4ZWRUaW1lU3RlcCA9IHBhcmFtcy5maXhlZFRpbWVTdGVwO1xcblxcbiAgaWYgKHBhcmFtcy5zb2Z0Ym9keSkgX3NvZnRib2R5X2VuYWJsZWQgPSB0cnVlO1xcblxcbiAgdHJhbnNmZXJhYmxlTWVzc2FnZSh7IGNtZDogJ3dvcmxkUmVhZHknIH0pO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5zZXRGaXhlZFRpbWVTdGVwID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XFxuICBmaXhlZFRpbWVTdGVwID0gZGVzY3JpcHRpb247XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLnNldEdyYXZpdHkgPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcXG4gIF92ZWMzXzEuc2V0WChkZXNjcmlwdGlvbi54KTtcXG4gIF92ZWMzXzEuc2V0WShkZXNjcmlwdGlvbi55KTtcXG4gIF92ZWMzXzEuc2V0WihkZXNjcmlwdGlvbi56KTtcXG4gIHdvcmxkLnNldEdyYXZpdHkoX3ZlYzNfMSk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLmFwcGVuZEFuY2hvciA9IGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xcbiAgX29iamVjdHNbZGVzY3JpcHRpb24ub2JqXS5hcHBlbmRBbmNob3IoZGVzY3JpcHRpb24ubm9kZSwgX29iamVjdHNbZGVzY3JpcHRpb24ub2JqMl0sIGRlc2NyaXB0aW9uLmNvbGxpc2lvbkJldHdlZW5MaW5rZWRCb2RpZXMsIGRlc2NyaXB0aW9uLmluZmx1ZW5jZSk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLmFkZE9iamVjdCA9IGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xcbiAgdmFyIGJvZHkgPSB2b2lkIDAsXFxuICAgICAgbW90aW9uU3RhdGUgPSB2b2lkIDA7XFxuXFxuICBpZiAoZGVzY3JpcHRpb24udHlwZS5pbmRleE9mKCdzb2Z0JykgIT09IC0xKSB7XFxuICAgIGJvZHkgPSBjcmVhdGVTb2Z0Qm9keShkZXNjcmlwdGlvbik7XFxuXFxuICAgIHZhciBzYkNvbmZpZyA9IGJvZHkuZ2V0X21fY2ZnKCk7XFxuXFxuICAgIGlmIChkZXNjcmlwdGlvbi52aXRlcmF0aW9ucykgc2JDb25maWcuc2V0X3ZpdGVyYXRpb25zKGRlc2NyaXB0aW9uLnZpdGVyYXRpb25zKTtcXG4gICAgaWYgKGRlc2NyaXB0aW9uLnBpdGVyYXRpb25zKSBzYkNvbmZpZy5zZXRfcGl0ZXJhdGlvbnMoZGVzY3JpcHRpb24ucGl0ZXJhdGlvbnMpO1xcbiAgICBpZiAoZGVzY3JpcHRpb24uZGl0ZXJhdGlvbnMpIHNiQ29uZmlnLnNldF9kaXRlcmF0aW9ucyhkZXNjcmlwdGlvbi5kaXRlcmF0aW9ucyk7XFxuICAgIGlmIChkZXNjcmlwdGlvbi5jaXRlcmF0aW9ucykgc2JDb25maWcuc2V0X2NpdGVyYXRpb25zKGRlc2NyaXB0aW9uLmNpdGVyYXRpb25zKTtcXG4gICAgc2JDb25maWcuc2V0X2NvbGxpc2lvbnMoMHgxMSk7XFxuICAgIHNiQ29uZmlnLnNldF9rREYoZGVzY3JpcHRpb24uZnJpY3Rpb24pO1xcbiAgICBzYkNvbmZpZy5zZXRfa0RQKGRlc2NyaXB0aW9uLmRhbXBpbmcpO1xcbiAgICBpZiAoZGVzY3JpcHRpb24ucHJlc3N1cmUpIHNiQ29uZmlnLnNldF9rUFIoZGVzY3JpcHRpb24ucHJlc3N1cmUpO1xcbiAgICBpZiAoZGVzY3JpcHRpb24uZHJhZykgc2JDb25maWcuc2V0X2tERyhkZXNjcmlwdGlvbi5kcmFnKTtcXG4gICAgaWYgKGRlc2NyaXB0aW9uLmxpZnQpIHNiQ29uZmlnLnNldF9rTEYoZGVzY3JpcHRpb24ubGlmdCk7XFxuICAgIGlmIChkZXNjcmlwdGlvbi5hbmNob3JIYXJkbmVzcykgc2JDb25maWcuc2V0X2tBSFIoZGVzY3JpcHRpb24uYW5jaG9ySGFyZG5lc3MpO1xcbiAgICBpZiAoZGVzY3JpcHRpb24ucmlnaWRIYXJkbmVzcykgc2JDb25maWcuc2V0X2tDSFIoZGVzY3JpcHRpb24ucmlnaWRIYXJkbmVzcyk7XFxuXFxuICAgIGlmIChkZXNjcmlwdGlvbi5rbHN0KSBib2R5LmdldF9tX21hdGVyaWFscygpLmF0KDApLnNldF9tX2tMU1QoZGVzY3JpcHRpb24ua2xzdCk7XFxuICAgIGlmIChkZXNjcmlwdGlvbi5rYXN0KSBib2R5LmdldF9tX21hdGVyaWFscygpLmF0KDApLnNldF9tX2tBU1QoZGVzY3JpcHRpb24ua2FzdCk7XFxuICAgIGlmIChkZXNjcmlwdGlvbi5rdnN0KSBib2R5LmdldF9tX21hdGVyaWFscygpLmF0KDApLnNldF9tX2tWU1QoZGVzY3JpcHRpb24ua3ZzdCk7XFxuXFxuICAgIEFtbW8uY2FzdE9iamVjdChib2R5LCBBbW1vLmJ0Q29sbGlzaW9uT2JqZWN0KS5nZXRDb2xsaXNpb25TaGFwZSgpLnNldE1hcmdpbihkZXNjcmlwdGlvbi5tYXJnaW4gPyBkZXNjcmlwdGlvbi5tYXJnaW4gOiAwLjEpO1xcbiAgICBib2R5LnNldEFjdGl2YXRpb25TdGF0ZShkZXNjcmlwdGlvbi5zdGF0ZSB8fCA0KTtcXG4gICAgYm9keS50eXBlID0gMDsgLy8gU29mdEJvZHkuXFxuICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnc29mdFJvcGVNZXNoJykgYm9keS5yb3BlID0gdHJ1ZTtcXG4gICAgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdzb2Z0Q2xvdGhNZXNoJykgYm9keS5jbG90aCA9IHRydWU7XFxuXFxuICAgIF90cmFuc2Zvcm0uc2V0SWRlbnRpdHkoKTtcXG5cXG4gICAgX3ZlYzNfMS5zZXRYKGRlc2NyaXB0aW9uLnBvc2l0aW9uLngpO1xcbiAgICBfdmVjM18xLnNldFkoZGVzY3JpcHRpb24ucG9zaXRpb24ueSk7XFxuICAgIF92ZWMzXzEuc2V0WihkZXNjcmlwdGlvbi5wb3NpdGlvbi56KTtcXG4gICAgX3RyYW5zZm9ybS5zZXRPcmlnaW4oX3ZlYzNfMSk7XFxuXFxuICAgIF9xdWF0LnNldFgoZGVzY3JpcHRpb24ucm90YXRpb24ueCk7XFxuICAgIF9xdWF0LnNldFkoZGVzY3JpcHRpb24ucm90YXRpb24ueSk7XFxuICAgIF9xdWF0LnNldFooZGVzY3JpcHRpb24ucm90YXRpb24ueik7XFxuICAgIF9xdWF0LnNldFcoZGVzY3JpcHRpb24ucm90YXRpb24udyk7XFxuICAgIF90cmFuc2Zvcm0uc2V0Um90YXRpb24oX3F1YXQpO1xcblxcbiAgICBib2R5LnRyYW5zZm9ybShfdHJhbnNmb3JtKTtcXG5cXG4gICAgYm9keS5zZXRUb3RhbE1hc3MoZGVzY3JpcHRpb24ubWFzcywgZmFsc2UpO1xcbiAgICB3b3JsZC5hZGRTb2Z0Qm9keShib2R5LCAxLCAtMSk7XFxuICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnc29mdFRyaW1lc2gnKSBfc29mdGJvZHlfcmVwb3J0X3NpemUgKz0gYm9keS5nZXRfbV9mYWNlcygpLnNpemUoKSAqIDM7ZWxzZSBfc29mdGJvZHlfcmVwb3J0X3NpemUgKz0gYm9keS5nZXRfbV9ub2RlcygpLnNpemUoKSAqIDM7XFxuXFxuICAgIF9udW1fc29mdGJvZHlfb2JqZWN0cysrO1xcbiAgfSBlbHNlIHtcXG4gICAgdmFyIHNoYXBlID0gY3JlYXRlU2hhcGUoZGVzY3JpcHRpb24pO1xcblxcbiAgICBpZiAoIXNoYXBlKSByZXR1cm47XFxuXFxuICAgIC8vIElmIHRoZXJlIGFyZSBjaGlsZHJlbiB0aGVuIHRoaXMgaXMgYSBjb21wb3VuZCBzaGFwZVxcbiAgICBpZiAoZGVzY3JpcHRpb24uY2hpbGRyZW4pIHtcXG4gICAgICB2YXIgY29tcG91bmRfc2hhcGUgPSBuZXcgQW1tby5idENvbXBvdW5kU2hhcGUoKTtcXG4gICAgICBjb21wb3VuZF9zaGFwZS5hZGRDaGlsZFNoYXBlKF90cmFuc2Zvcm0sIHNoYXBlKTtcXG5cXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlc2NyaXB0aW9uLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICB2YXIgX2NoaWxkID0gZGVzY3JpcHRpb24uY2hpbGRyZW5baV07XFxuXFxuICAgICAgICB2YXIgdHJhbnMgPSBuZXcgQW1tby5idFRyYW5zZm9ybSgpO1xcbiAgICAgICAgdHJhbnMuc2V0SWRlbnRpdHkoKTtcXG5cXG4gICAgICAgIF92ZWMzXzEuc2V0WChfY2hpbGQucG9zaXRpb25fb2Zmc2V0LngpO1xcbiAgICAgICAgX3ZlYzNfMS5zZXRZKF9jaGlsZC5wb3NpdGlvbl9vZmZzZXQueSk7XFxuICAgICAgICBfdmVjM18xLnNldFooX2NoaWxkLnBvc2l0aW9uX29mZnNldC56KTtcXG4gICAgICAgIHRyYW5zLnNldE9yaWdpbihfdmVjM18xKTtcXG5cXG4gICAgICAgIF9xdWF0LnNldFgoX2NoaWxkLnJvdGF0aW9uLngpO1xcbiAgICAgICAgX3F1YXQuc2V0WShfY2hpbGQucm90YXRpb24ueSk7XFxuICAgICAgICBfcXVhdC5zZXRaKF9jaGlsZC5yb3RhdGlvbi56KTtcXG4gICAgICAgIF9xdWF0LnNldFcoX2NoaWxkLnJvdGF0aW9uLncpO1xcbiAgICAgICAgdHJhbnMuc2V0Um90YXRpb24oX3F1YXQpO1xcblxcbiAgICAgICAgc2hhcGUgPSBjcmVhdGVTaGFwZShkZXNjcmlwdGlvbi5jaGlsZHJlbltpXSk7XFxuICAgICAgICBjb21wb3VuZF9zaGFwZS5hZGRDaGlsZFNoYXBlKHRyYW5zLCBzaGFwZSk7XFxuICAgICAgICBBbW1vLmRlc3Ryb3kodHJhbnMpO1xcbiAgICAgIH1cXG5cXG4gICAgICBzaGFwZSA9IGNvbXBvdW5kX3NoYXBlO1xcbiAgICAgIF9jb21wb3VuZF9zaGFwZXNbZGVzY3JpcHRpb24uaWRdID0gc2hhcGU7XFxuICAgIH1cXG5cXG4gICAgX3ZlYzNfMS5zZXRYKGRlc2NyaXB0aW9uLnNjYWxlLngpO1xcbiAgICBfdmVjM18xLnNldFkoZGVzY3JpcHRpb24uc2NhbGUueSk7XFxuICAgIF92ZWMzXzEuc2V0WihkZXNjcmlwdGlvbi5zY2FsZS56KTtcXG5cXG4gICAgc2hhcGUuc2V0TG9jYWxTY2FsaW5nKF92ZWMzXzEpO1xcblxcbiAgICBfdmVjM18xLnNldFgoMCk7XFxuICAgIF92ZWMzXzEuc2V0WSgwKTtcXG4gICAgX3ZlYzNfMS5zZXRaKDApO1xcbiAgICBzaGFwZS5jYWxjdWxhdGVMb2NhbEluZXJ0aWEoZGVzY3JpcHRpb24ubWFzcywgX3ZlYzNfMSk7XFxuXFxuICAgIF90cmFuc2Zvcm0uc2V0SWRlbnRpdHkoKTtcXG5cXG4gICAgX3ZlYzNfMi5zZXRYKGRlc2NyaXB0aW9uLnBvc2l0aW9uLngpO1xcbiAgICBfdmVjM18yLnNldFkoZGVzY3JpcHRpb24ucG9zaXRpb24ueSk7XFxuICAgIF92ZWMzXzIuc2V0WihkZXNjcmlwdGlvbi5wb3NpdGlvbi56KTtcXG4gICAgX3RyYW5zZm9ybS5zZXRPcmlnaW4oX3ZlYzNfMik7XFxuXFxuICAgIF9xdWF0LnNldFgoZGVzY3JpcHRpb24ucm90YXRpb24ueCk7XFxuICAgIF9xdWF0LnNldFkoZGVzY3JpcHRpb24ucm90YXRpb24ueSk7XFxuICAgIF9xdWF0LnNldFooZGVzY3JpcHRpb24ucm90YXRpb24ueik7XFxuICAgIF9xdWF0LnNldFcoZGVzY3JpcHRpb24ucm90YXRpb24udyk7XFxuICAgIF90cmFuc2Zvcm0uc2V0Um90YXRpb24oX3F1YXQpO1xcblxcbiAgICBtb3Rpb25TdGF0ZSA9IG5ldyBBbW1vLmJ0RGVmYXVsdE1vdGlvblN0YXRlKF90cmFuc2Zvcm0pOyAvLyAjVE9ETzogYnREZWZhdWx0TW90aW9uU3RhdGUgc3VwcG9ydHMgY2VudGVyIG9mIG1hc3Mgb2Zmc2V0IGFzIHNlY29uZCBhcmd1bWVudCAtIGltcGxlbWVudFxcbiAgICB2YXIgcmJJbmZvID0gbmV3IEFtbW8uYnRSaWdpZEJvZHlDb25zdHJ1Y3Rpb25JbmZvKGRlc2NyaXB0aW9uLm1hc3MsIG1vdGlvblN0YXRlLCBzaGFwZSwgX3ZlYzNfMSk7XFxuXFxuICAgIHJiSW5mby5zZXRfbV9mcmljdGlvbihkZXNjcmlwdGlvbi5mcmljdGlvbik7XFxuICAgIHJiSW5mby5zZXRfbV9yZXN0aXR1dGlvbihkZXNjcmlwdGlvbi5yZXN0aXR1dGlvbik7XFxuICAgIHJiSW5mby5zZXRfbV9saW5lYXJEYW1waW5nKGRlc2NyaXB0aW9uLmRhbXBpbmcpO1xcbiAgICByYkluZm8uc2V0X21fYW5ndWxhckRhbXBpbmcoZGVzY3JpcHRpb24uZGFtcGluZyk7XFxuXFxuICAgIGJvZHkgPSBuZXcgQW1tby5idFJpZ2lkQm9keShyYkluZm8pO1xcbiAgICBBbW1vLmNhc3RPYmplY3QoYm9keSwgQW1tby5idENvbGxpc2lvbk9iamVjdCkuZ2V0Q29sbGlzaW9uU2hhcGUoKS5zZXRNYXJnaW4oZGVzY3JpcHRpb24ubWFyZ2luID8gZGVzY3JpcHRpb24ubWFyZ2luIDogMCk7XFxuICAgIGJvZHkuc2V0QWN0aXZhdGlvblN0YXRlKGRlc2NyaXB0aW9uLnN0YXRlIHx8IDQpO1xcbiAgICBBbW1vLmRlc3Ryb3kocmJJbmZvKTtcXG5cXG4gICAgaWYgKHR5cGVvZiBkZXNjcmlwdGlvbi5jb2xsaXNpb25fZmxhZ3MgIT09ICd1bmRlZmluZWQnKSBib2R5LnNldENvbGxpc2lvbkZsYWdzKGRlc2NyaXB0aW9uLmNvbGxpc2lvbl9mbGFncyk7XFxuXFxuICAgIGlmIChkZXNjcmlwdGlvbi5ncm91cCAmJiBkZXNjcmlwdGlvbi5tYXNrKSB3b3JsZC5hZGRSaWdpZEJvZHkoYm9keSwgZGVzY3JpcHRpb24uZ3JvdXAsIGRlc2NyaXB0aW9uLm1hc2spO2Vsc2Ugd29ybGQuYWRkUmlnaWRCb2R5KGJvZHkpO1xcbiAgICBib2R5LnR5cGUgPSAxOyAvLyBSaWdpZEJvZHkuXFxuICAgIF9udW1fcmlnaWRib2R5X29iamVjdHMrKztcXG4gIH1cXG5cXG4gIGJvZHkuYWN0aXZhdGUoKTtcXG5cXG4gIGJvZHkuaWQgPSBkZXNjcmlwdGlvbi5pZDtcXG4gIF9vYmplY3RzW2JvZHkuaWRdID0gYm9keTtcXG4gIF9tb3Rpb25fc3RhdGVzW2JvZHkuaWRdID0gbW90aW9uU3RhdGU7XFxuXFxuICBfb2JqZWN0c19hbW1vW2JvZHkuYSA9PT0gdW5kZWZpbmVkID8gYm9keS5wdHIgOiBib2R5LmFdID0gYm9keS5pZDtcXG4gIF9udW1fb2JqZWN0cysrO1xcblxcbiAgdHJhbnNmZXJhYmxlTWVzc2FnZSh7IGNtZDogJ29iamVjdFJlYWR5JywgcGFyYW1zOiBib2R5LmlkIH0pO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5hZGRWZWhpY2xlID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XFxuICB2YXIgdmVoaWNsZV90dW5pbmcgPSBuZXcgQW1tby5idFZlaGljbGVUdW5pbmcoKTtcXG5cXG4gIHZlaGljbGVfdHVuaW5nLnNldF9tX3N1c3BlbnNpb25TdGlmZm5lc3MoZGVzY3JpcHRpb24uc3VzcGVuc2lvbl9zdGlmZm5lc3MpO1xcbiAgdmVoaWNsZV90dW5pbmcuc2V0X21fc3VzcGVuc2lvbkNvbXByZXNzaW9uKGRlc2NyaXB0aW9uLnN1c3BlbnNpb25fY29tcHJlc3Npb24pO1xcbiAgdmVoaWNsZV90dW5pbmcuc2V0X21fc3VzcGVuc2lvbkRhbXBpbmcoZGVzY3JpcHRpb24uc3VzcGVuc2lvbl9kYW1waW5nKTtcXG4gIHZlaGljbGVfdHVuaW5nLnNldF9tX21heFN1c3BlbnNpb25UcmF2ZWxDbShkZXNjcmlwdGlvbi5tYXhfc3VzcGVuc2lvbl90cmF2ZWwpO1xcbiAgdmVoaWNsZV90dW5pbmcuc2V0X21fbWF4U3VzcGVuc2lvbkZvcmNlKGRlc2NyaXB0aW9uLm1heF9zdXNwZW5zaW9uX2ZvcmNlKTtcXG5cXG4gIHZhciB2ZWhpY2xlID0gbmV3IEFtbW8uYnRSYXljYXN0VmVoaWNsZSh2ZWhpY2xlX3R1bmluZywgX29iamVjdHNbZGVzY3JpcHRpb24ucmlnaWRCb2R5XSwgbmV3IEFtbW8uYnREZWZhdWx0VmVoaWNsZVJheWNhc3Rlcih3b3JsZCkpO1xcblxcbiAgdmVoaWNsZS50dW5pbmcgPSB2ZWhpY2xlX3R1bmluZztcXG4gIF9vYmplY3RzW2Rlc2NyaXB0aW9uLnJpZ2lkQm9keV0uc2V0QWN0aXZhdGlvblN0YXRlKDQpO1xcbiAgdmVoaWNsZS5zZXRDb29yZGluYXRlU3lzdGVtKDAsIDEsIDIpO1xcblxcbiAgd29ybGQuYWRkVmVoaWNsZSh2ZWhpY2xlKTtcXG4gIF92ZWhpY2xlc1tkZXNjcmlwdGlvbi5pZF0gPSB2ZWhpY2xlO1xcbn07XFxucHVibGljX2Z1bmN0aW9ucy5yZW1vdmVWZWhpY2xlID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XFxuICBfdmVoaWNsZXNbZGVzY3JpcHRpb24uaWRdID0gbnVsbDtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuYWRkV2hlZWwgPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcXG4gIGlmIChfdmVoaWNsZXNbZGVzY3JpcHRpb24uaWRdICE9PSB1bmRlZmluZWQpIHtcXG4gICAgdmFyIHR1bmluZyA9IF92ZWhpY2xlc1tkZXNjcmlwdGlvbi5pZF0udHVuaW5nO1xcbiAgICBpZiAoZGVzY3JpcHRpb24udHVuaW5nICE9PSB1bmRlZmluZWQpIHtcXG4gICAgICB0dW5pbmcgPSBuZXcgQW1tby5idFZlaGljbGVUdW5pbmcoKTtcXG4gICAgICB0dW5pbmcuc2V0X21fc3VzcGVuc2lvblN0aWZmbmVzcyhkZXNjcmlwdGlvbi50dW5pbmcuc3VzcGVuc2lvbl9zdGlmZm5lc3MpO1xcbiAgICAgIHR1bmluZy5zZXRfbV9zdXNwZW5zaW9uQ29tcHJlc3Npb24oZGVzY3JpcHRpb24udHVuaW5nLnN1c3BlbnNpb25fY29tcHJlc3Npb24pO1xcbiAgICAgIHR1bmluZy5zZXRfbV9zdXNwZW5zaW9uRGFtcGluZyhkZXNjcmlwdGlvbi50dW5pbmcuc3VzcGVuc2lvbl9kYW1waW5nKTtcXG4gICAgICB0dW5pbmcuc2V0X21fbWF4U3VzcGVuc2lvblRyYXZlbENtKGRlc2NyaXB0aW9uLnR1bmluZy5tYXhfc3VzcGVuc2lvbl90cmF2ZWwpO1xcbiAgICAgIHR1bmluZy5zZXRfbV9tYXhTdXNwZW5zaW9uRm9yY2UoZGVzY3JpcHRpb24udHVuaW5nLm1heF9zdXNwZW5zaW9uX2ZvcmNlKTtcXG4gICAgfVxcblxcbiAgICBfdmVjM18xLnNldFgoZGVzY3JpcHRpb24uY29ubmVjdGlvbl9wb2ludC54KTtcXG4gICAgX3ZlYzNfMS5zZXRZKGRlc2NyaXB0aW9uLmNvbm5lY3Rpb25fcG9pbnQueSk7XFxuICAgIF92ZWMzXzEuc2V0WihkZXNjcmlwdGlvbi5jb25uZWN0aW9uX3BvaW50LnopO1xcblxcbiAgICBfdmVjM18yLnNldFgoZGVzY3JpcHRpb24ud2hlZWxfZGlyZWN0aW9uLngpO1xcbiAgICBfdmVjM18yLnNldFkoZGVzY3JpcHRpb24ud2hlZWxfZGlyZWN0aW9uLnkpO1xcbiAgICBfdmVjM18yLnNldFooZGVzY3JpcHRpb24ud2hlZWxfZGlyZWN0aW9uLnopO1xcblxcbiAgICBfdmVjM18zLnNldFgoZGVzY3JpcHRpb24ud2hlZWxfYXhsZS54KTtcXG4gICAgX3ZlYzNfMy5zZXRZKGRlc2NyaXB0aW9uLndoZWVsX2F4bGUueSk7XFxuICAgIF92ZWMzXzMuc2V0WihkZXNjcmlwdGlvbi53aGVlbF9heGxlLnopO1xcblxcbiAgICBfdmVoaWNsZXNbZGVzY3JpcHRpb24uaWRdLmFkZFdoZWVsKF92ZWMzXzEsIF92ZWMzXzIsIF92ZWMzXzMsIGRlc2NyaXB0aW9uLnN1c3BlbnNpb25fcmVzdF9sZW5ndGgsIGRlc2NyaXB0aW9uLndoZWVsX3JhZGl1cywgdHVuaW5nLCBkZXNjcmlwdGlvbi5pc19mcm9udF93aGVlbCk7XFxuICB9XFxuXFxuICBfbnVtX3doZWVscysrO1xcblxcbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB7XFxuICAgIHZlaGljbGVyZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KDEgKyBfbnVtX3doZWVscyAqIFZFSElDTEVSRVBPUlRfSVRFTVNJWkUpOyAvLyBtZXNzYWdlIGlkICYgKCAjIG9mIG9iamVjdHMgdG8gcmVwb3J0ICogIyBvZiB2YWx1ZXMgcGVyIG9iamVjdCApXFxuICAgIHZlaGljbGVyZXBvcnRbMF0gPSBNRVNTQUdFX1RZUEVTLlZFSElDTEVSRVBPUlQ7XFxuICB9IGVsc2UgdmVoaWNsZXJlcG9ydCA9IFtNRVNTQUdFX1RZUEVTLlZFSElDTEVSRVBPUlRdO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5zZXRTdGVlcmluZyA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XFxuICBpZiAoX3ZlaGljbGVzW2RldGFpbHMuaWRdICE9PSB1bmRlZmluZWQpIF92ZWhpY2xlc1tkZXRhaWxzLmlkXS5zZXRTdGVlcmluZ1ZhbHVlKGRldGFpbHMuc3RlZXJpbmcsIGRldGFpbHMud2hlZWwpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5zZXRCcmFrZSA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XFxuICBpZiAoX3ZlaGljbGVzW2RldGFpbHMuaWRdICE9PSB1bmRlZmluZWQpIF92ZWhpY2xlc1tkZXRhaWxzLmlkXS5zZXRCcmFrZShkZXRhaWxzLmJyYWtlLCBkZXRhaWxzLndoZWVsKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuYXBwbHlFbmdpbmVGb3JjZSA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XFxuICBpZiAoX3ZlaGljbGVzW2RldGFpbHMuaWRdICE9PSB1bmRlZmluZWQpIF92ZWhpY2xlc1tkZXRhaWxzLmlkXS5hcHBseUVuZ2luZUZvcmNlKGRldGFpbHMuZm9yY2UsIGRldGFpbHMud2hlZWwpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5yZW1vdmVPYmplY3QgPSBmdW5jdGlvbiAoZGV0YWlscykge1xcbiAgaWYgKF9vYmplY3RzW2RldGFpbHMuaWRdLnR5cGUgPT09IDApIHtcXG4gICAgX251bV9zb2Z0Ym9keV9vYmplY3RzLS07XFxuICAgIF9zb2Z0Ym9keV9yZXBvcnRfc2l6ZSAtPSBfb2JqZWN0c1tkZXRhaWxzLmlkXS5nZXRfbV9ub2RlcygpLnNpemUoKTtcXG4gICAgd29ybGQucmVtb3ZlU29mdEJvZHkoX29iamVjdHNbZGV0YWlscy5pZF0pO1xcbiAgfSBlbHNlIGlmIChfb2JqZWN0c1tkZXRhaWxzLmlkXS50eXBlID09PSAxKSB7XFxuICAgIF9udW1fcmlnaWRib2R5X29iamVjdHMtLTtcXG4gICAgd29ybGQucmVtb3ZlUmlnaWRCb2R5KF9vYmplY3RzW2RldGFpbHMuaWRdKTtcXG4gICAgQW1tby5kZXN0cm95KF9tb3Rpb25fc3RhdGVzW2RldGFpbHMuaWRdKTtcXG4gIH1cXG5cXG4gIEFtbW8uZGVzdHJveShfb2JqZWN0c1tkZXRhaWxzLmlkXSk7XFxuICBpZiAoX2NvbXBvdW5kX3NoYXBlc1tkZXRhaWxzLmlkXSkgQW1tby5kZXN0cm95KF9jb21wb3VuZF9zaGFwZXNbZGV0YWlscy5pZF0pO1xcbiAgaWYgKF9ub25jYWNoZWRfc2hhcGVzW2RldGFpbHMuaWRdKSBBbW1vLmRlc3Ryb3koX25vbmNhY2hlZF9zaGFwZXNbZGV0YWlscy5pZF0pO1xcblxcbiAgX29iamVjdHNfYW1tb1tfb2JqZWN0c1tkZXRhaWxzLmlkXS5hID09PSB1bmRlZmluZWQgPyBfb2JqZWN0c1tkZXRhaWxzLmlkXS5hIDogX29iamVjdHNbZGV0YWlscy5pZF0ucHRyXSA9IG51bGw7XFxuICBfb2JqZWN0c1tkZXRhaWxzLmlkXSA9IG51bGw7XFxuICBfbW90aW9uX3N0YXRlc1tkZXRhaWxzLmlkXSA9IG51bGw7XFxuXFxuICBpZiAoX2NvbXBvdW5kX3NoYXBlc1tkZXRhaWxzLmlkXSkgX2NvbXBvdW5kX3NoYXBlc1tkZXRhaWxzLmlkXSA9IG51bGw7XFxuICBpZiAoX25vbmNhY2hlZF9zaGFwZXNbZGV0YWlscy5pZF0pIF9ub25jYWNoZWRfc2hhcGVzW2RldGFpbHMuaWRdID0gbnVsbDtcXG4gIF9udW1fb2JqZWN0cy0tO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy51cGRhdGVUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoZGV0YWlscykge1xcbiAgX29iamVjdCA9IF9vYmplY3RzW2RldGFpbHMuaWRdO1xcblxcbiAgaWYgKF9vYmplY3QudHlwZSA9PT0gMSkge1xcbiAgICBfb2JqZWN0LmdldE1vdGlvblN0YXRlKCkuZ2V0V29ybGRUcmFuc2Zvcm0oX3RyYW5zZm9ybSk7XFxuXFxuICAgIGlmIChkZXRhaWxzLnBvcykge1xcbiAgICAgIF92ZWMzXzEuc2V0WChkZXRhaWxzLnBvcy54KTtcXG4gICAgICBfdmVjM18xLnNldFkoZGV0YWlscy5wb3MueSk7XFxuICAgICAgX3ZlYzNfMS5zZXRaKGRldGFpbHMucG9zLnopO1xcbiAgICAgIF90cmFuc2Zvcm0uc2V0T3JpZ2luKF92ZWMzXzEpO1xcbiAgICB9XFxuXFxuICAgIGlmIChkZXRhaWxzLnF1YXQpIHtcXG4gICAgICBfcXVhdC5zZXRYKGRldGFpbHMucXVhdC54KTtcXG4gICAgICBfcXVhdC5zZXRZKGRldGFpbHMucXVhdC55KTtcXG4gICAgICBfcXVhdC5zZXRaKGRldGFpbHMucXVhdC56KTtcXG4gICAgICBfcXVhdC5zZXRXKGRldGFpbHMucXVhdC53KTtcXG4gICAgICBfdHJhbnNmb3JtLnNldFJvdGF0aW9uKF9xdWF0KTtcXG4gICAgfVxcblxcbiAgICBfb2JqZWN0LnNldFdvcmxkVHJhbnNmb3JtKF90cmFuc2Zvcm0pO1xcbiAgICBfb2JqZWN0LmFjdGl2YXRlKCk7XFxuICB9IGVsc2UgaWYgKF9vYmplY3QudHlwZSA9PT0gMCkge1xcbiAgICAvLyBfb2JqZWN0LmdldFdvcmxkVHJhbnNmb3JtKF90cmFuc2Zvcm0pO1xcblxcbiAgICBpZiAoZGV0YWlscy5wb3MpIHtcXG4gICAgICBfdmVjM18xLnNldFgoZGV0YWlscy5wb3MueCk7XFxuICAgICAgX3ZlYzNfMS5zZXRZKGRldGFpbHMucG9zLnkpO1xcbiAgICAgIF92ZWMzXzEuc2V0WihkZXRhaWxzLnBvcy56KTtcXG4gICAgICBfdHJhbnNmb3JtLnNldE9yaWdpbihfdmVjM18xKTtcXG4gICAgfVxcblxcbiAgICBpZiAoZGV0YWlscy5xdWF0KSB7XFxuICAgICAgX3F1YXQuc2V0WChkZXRhaWxzLnF1YXQueCk7XFxuICAgICAgX3F1YXQuc2V0WShkZXRhaWxzLnF1YXQueSk7XFxuICAgICAgX3F1YXQuc2V0WihkZXRhaWxzLnF1YXQueik7XFxuICAgICAgX3F1YXQuc2V0VyhkZXRhaWxzLnF1YXQudyk7XFxuICAgICAgX3RyYW5zZm9ybS5zZXRSb3RhdGlvbihfcXVhdCk7XFxuICAgIH1cXG5cXG4gICAgX29iamVjdC50cmFuc2Zvcm0oX3RyYW5zZm9ybSk7XFxuICB9XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLnVwZGF0ZU1hc3MgPSBmdW5jdGlvbiAoZGV0YWlscykge1xcbiAgLy8gI1RPRE86IGNoYW5naW5nIGEgc3RhdGljIG9iamVjdCBpbnRvIGR5bmFtaWMgaXMgYnVnZ3lcXG4gIF9vYmplY3QgPSBfb2JqZWN0c1tkZXRhaWxzLmlkXTtcXG5cXG4gIC8vIFBlciBodHRwOi8vd3d3LmJ1bGxldHBoeXNpY3Mub3JnL0J1bGxldC9waHBCQjMvdmlld3RvcGljLnBocD9wPSZmPTkmdD0zNjYzI3AxMzgxNlxcbiAgd29ybGQucmVtb3ZlUmlnaWRCb2R5KF9vYmplY3QpO1xcblxcbiAgX3ZlYzNfMS5zZXRYKDApO1xcbiAgX3ZlYzNfMS5zZXRZKDApO1xcbiAgX3ZlYzNfMS5zZXRaKDApO1xcblxcbiAgX29iamVjdC5zZXRNYXNzUHJvcHMoZGV0YWlscy5tYXNzLCBfdmVjM18xKTtcXG4gIHdvcmxkLmFkZFJpZ2lkQm9keShfb2JqZWN0KTtcXG4gIF9vYmplY3QuYWN0aXZhdGUoKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuYXBwbHlDZW50cmFsSW1wdWxzZSA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XFxuICBfdmVjM18xLnNldFgoZGV0YWlscy54KTtcXG4gIF92ZWMzXzEuc2V0WShkZXRhaWxzLnkpO1xcbiAgX3ZlYzNfMS5zZXRaKGRldGFpbHMueik7XFxuXFxuICBfb2JqZWN0c1tkZXRhaWxzLmlkXS5hcHBseUNlbnRyYWxJbXB1bHNlKF92ZWMzXzEpO1xcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uYWN0aXZhdGUoKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuYXBwbHlJbXB1bHNlID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcXG4gIF92ZWMzXzEuc2V0WChkZXRhaWxzLmltcHVsc2VfeCk7XFxuICBfdmVjM18xLnNldFkoZGV0YWlscy5pbXB1bHNlX3kpO1xcbiAgX3ZlYzNfMS5zZXRaKGRldGFpbHMuaW1wdWxzZV96KTtcXG5cXG4gIF92ZWMzXzIuc2V0WChkZXRhaWxzLngpO1xcbiAgX3ZlYzNfMi5zZXRZKGRldGFpbHMueSk7XFxuICBfdmVjM18yLnNldFooZGV0YWlscy56KTtcXG5cXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFwcGx5SW1wdWxzZShfdmVjM18xLCBfdmVjM18yKTtcXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFjdGl2YXRlKCk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLmFwcGx5VG9ycXVlID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcXG4gIF92ZWMzXzEuc2V0WChkZXRhaWxzLnRvcnF1ZV94KTtcXG4gIF92ZWMzXzEuc2V0WShkZXRhaWxzLnRvcnF1ZV95KTtcXG4gIF92ZWMzXzEuc2V0WihkZXRhaWxzLnRvcnF1ZV96KTtcXG5cXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFwcGx5VG9ycXVlKF92ZWMzXzEpO1xcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uYWN0aXZhdGUoKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuYXBwbHlDZW50cmFsRm9yY2UgPSBmdW5jdGlvbiAoZGV0YWlscykge1xcbiAgX3ZlYzNfMS5zZXRYKGRldGFpbHMueCk7XFxuICBfdmVjM18xLnNldFkoZGV0YWlscy55KTtcXG4gIF92ZWMzXzEuc2V0WihkZXRhaWxzLnopO1xcblxcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uYXBwbHlDZW50cmFsRm9yY2UoX3ZlYzNfMSk7XFxuICBfb2JqZWN0c1tkZXRhaWxzLmlkXS5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5hcHBseUZvcmNlID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcXG4gIF92ZWMzXzEuc2V0WChkZXRhaWxzLmZvcmNlX3gpO1xcbiAgX3ZlYzNfMS5zZXRZKGRldGFpbHMuZm9yY2VfeSk7XFxuICBfdmVjM18xLnNldFooZGV0YWlscy5mb3JjZV96KTtcXG5cXG4gIF92ZWMzXzIuc2V0WChkZXRhaWxzLngpO1xcbiAgX3ZlYzNfMi5zZXRZKGRldGFpbHMueSk7XFxuICBfdmVjM18yLnNldFooZGV0YWlscy56KTtcXG5cXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFwcGx5Rm9yY2UoX3ZlYzNfMSwgX3ZlYzNfMik7XFxuICBfb2JqZWN0c1tkZXRhaWxzLmlkXS5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5vblNpbXVsYXRpb25SZXN1bWUgPSBmdW5jdGlvbiAoKSB7XFxuICBsYXN0X3NpbXVsYXRpb25fdGltZSA9IERhdGUubm93KCk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLnNldEFuZ3VsYXJWZWxvY2l0eSA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XFxuICBfdmVjM18xLnNldFgoZGV0YWlscy54KTtcXG4gIF92ZWMzXzEuc2V0WShkZXRhaWxzLnkpO1xcbiAgX3ZlYzNfMS5zZXRaKGRldGFpbHMueik7XFxuXFxuICBfb2JqZWN0c1tkZXRhaWxzLmlkXS5zZXRBbmd1bGFyVmVsb2NpdHkoX3ZlYzNfMSk7XFxuICBfb2JqZWN0c1tkZXRhaWxzLmlkXS5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5zZXRMaW5lYXJWZWxvY2l0eSA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XFxuICBfdmVjM18xLnNldFgoZGV0YWlscy54KTtcXG4gIF92ZWMzXzEuc2V0WShkZXRhaWxzLnkpO1xcbiAgX3ZlYzNfMS5zZXRaKGRldGFpbHMueik7XFxuXFxuICBfb2JqZWN0c1tkZXRhaWxzLmlkXS5zZXRMaW5lYXJWZWxvY2l0eShfdmVjM18xKTtcXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLmFjdGl2YXRlKCk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLnNldEFuZ3VsYXJGYWN0b3IgPSBmdW5jdGlvbiAoZGV0YWlscykge1xcbiAgX3ZlYzNfMS5zZXRYKGRldGFpbHMueCk7XFxuICBfdmVjM18xLnNldFkoZGV0YWlscy55KTtcXG4gIF92ZWMzXzEuc2V0WihkZXRhaWxzLnopO1xcblxcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uc2V0QW5ndWxhckZhY3RvcihfdmVjM18xKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuc2V0TGluZWFyRmFjdG9yID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcXG4gIF92ZWMzXzEuc2V0WChkZXRhaWxzLngpO1xcbiAgX3ZlYzNfMS5zZXRZKGRldGFpbHMueSk7XFxuICBfdmVjM18xLnNldFooZGV0YWlscy56KTtcXG5cXG4gIF9vYmplY3RzW2RldGFpbHMuaWRdLnNldExpbmVhckZhY3RvcihfdmVjM18xKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuc2V0RGFtcGluZyA9IGZ1bmN0aW9uIChkZXRhaWxzKSB7XFxuICBfb2JqZWN0c1tkZXRhaWxzLmlkXS5zZXREYW1waW5nKGRldGFpbHMubGluZWFyLCBkZXRhaWxzLmFuZ3VsYXIpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5zZXRDY2RNb3Rpb25UaHJlc2hvbGQgPSBmdW5jdGlvbiAoZGV0YWlscykge1xcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uc2V0Q2NkTW90aW9uVGhyZXNob2xkKGRldGFpbHMudGhyZXNob2xkKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuc2V0Q2NkU3dlcHRTcGhlcmVSYWRpdXMgPSBmdW5jdGlvbiAoZGV0YWlscykge1xcbiAgX29iamVjdHNbZGV0YWlscy5pZF0uc2V0Q2NkU3dlcHRTcGhlcmVSYWRpdXMoZGV0YWlscy5yYWRpdXMpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5hZGRDb25zdHJhaW50ID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gdm9pZCAwO1xcblxcbiAgc3dpdGNoIChkZXRhaWxzLnR5cGUpIHtcXG5cXG4gICAgY2FzZSAncG9pbnQnOlxcbiAgICAgIHtcXG4gICAgICAgIGlmIChkZXRhaWxzLm9iamVjdGIgPT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICBfdmVjM18xLnNldFgoZGV0YWlscy5wb3NpdGlvbmEueCk7XFxuICAgICAgICAgIF92ZWMzXzEuc2V0WShkZXRhaWxzLnBvc2l0aW9uYS55KTtcXG4gICAgICAgICAgX3ZlYzNfMS5zZXRaKGRldGFpbHMucG9zaXRpb25hLnopO1xcblxcbiAgICAgICAgICBjb25zdHJhaW50ID0gbmV3IEFtbW8uYnRQb2ludDJQb2ludENvbnN0cmFpbnQoX29iamVjdHNbZGV0YWlscy5vYmplY3RhXSwgX3ZlYzNfMSk7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICBfdmVjM18xLnNldFgoZGV0YWlscy5wb3NpdGlvbmEueCk7XFxuICAgICAgICAgIF92ZWMzXzEuc2V0WShkZXRhaWxzLnBvc2l0aW9uYS55KTtcXG4gICAgICAgICAgX3ZlYzNfMS5zZXRaKGRldGFpbHMucG9zaXRpb25hLnopO1xcblxcbiAgICAgICAgICBfdmVjM18yLnNldFgoZGV0YWlscy5wb3NpdGlvbmIueCk7XFxuICAgICAgICAgIF92ZWMzXzIuc2V0WShkZXRhaWxzLnBvc2l0aW9uYi55KTtcXG4gICAgICAgICAgX3ZlYzNfMi5zZXRaKGRldGFpbHMucG9zaXRpb25iLnopO1xcblxcbiAgICAgICAgICBjb25zdHJhaW50ID0gbmV3IEFtbW8uYnRQb2ludDJQb2ludENvbnN0cmFpbnQoX29iamVjdHNbZGV0YWlscy5vYmplY3RhXSwgX29iamVjdHNbZGV0YWlscy5vYmplY3RiXSwgX3ZlYzNfMSwgX3ZlYzNfMik7XFxuICAgICAgICB9XFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIGNhc2UgJ2hpbmdlJzpcXG4gICAgICB7XFxuICAgICAgICBpZiAoZGV0YWlscy5vYmplY3RiID09PSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgX3ZlYzNfMS5zZXRYKGRldGFpbHMucG9zaXRpb25hLngpO1xcbiAgICAgICAgICBfdmVjM18xLnNldFkoZGV0YWlscy5wb3NpdGlvbmEueSk7XFxuICAgICAgICAgIF92ZWMzXzEuc2V0WihkZXRhaWxzLnBvc2l0aW9uYS56KTtcXG5cXG4gICAgICAgICAgX3ZlYzNfMi5zZXRYKGRldGFpbHMuYXhpcy54KTtcXG4gICAgICAgICAgX3ZlYzNfMi5zZXRZKGRldGFpbHMuYXhpcy55KTtcXG4gICAgICAgICAgX3ZlYzNfMi5zZXRaKGRldGFpbHMuYXhpcy56KTtcXG5cXG4gICAgICAgICAgY29uc3RyYWludCA9IG5ldyBBbW1vLmJ0SGluZ2VDb25zdHJhaW50KF9vYmplY3RzW2RldGFpbHMub2JqZWN0YV0sIF92ZWMzXzEsIF92ZWMzXzIpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgX3ZlYzNfMS5zZXRYKGRldGFpbHMucG9zaXRpb25hLngpO1xcbiAgICAgICAgICBfdmVjM18xLnNldFkoZGV0YWlscy5wb3NpdGlvbmEueSk7XFxuICAgICAgICAgIF92ZWMzXzEuc2V0WihkZXRhaWxzLnBvc2l0aW9uYS56KTtcXG5cXG4gICAgICAgICAgX3ZlYzNfMi5zZXRYKGRldGFpbHMucG9zaXRpb25iLngpO1xcbiAgICAgICAgICBfdmVjM18yLnNldFkoZGV0YWlscy5wb3NpdGlvbmIueSk7XFxuICAgICAgICAgIF92ZWMzXzIuc2V0WihkZXRhaWxzLnBvc2l0aW9uYi56KTtcXG5cXG4gICAgICAgICAgX3ZlYzNfMy5zZXRYKGRldGFpbHMuYXhpcy54KTtcXG4gICAgICAgICAgX3ZlYzNfMy5zZXRZKGRldGFpbHMuYXhpcy55KTtcXG4gICAgICAgICAgX3ZlYzNfMy5zZXRaKGRldGFpbHMuYXhpcy56KTtcXG5cXG4gICAgICAgICAgY29uc3RyYWludCA9IG5ldyBBbW1vLmJ0SGluZ2VDb25zdHJhaW50KF9vYmplY3RzW2RldGFpbHMub2JqZWN0YV0sIF9vYmplY3RzW2RldGFpbHMub2JqZWN0Yl0sIF92ZWMzXzEsIF92ZWMzXzIsIF92ZWMzXzMsIF92ZWMzXzMpO1xcbiAgICAgICAgfVxcbiAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICBjYXNlICdzbGlkZXInOlxcbiAgICAgIHtcXG4gICAgICAgIHZhciB0cmFuc2Zvcm1iID0gdm9pZCAwO1xcbiAgICAgICAgdmFyIHRyYW5zZm9ybWEgPSBuZXcgQW1tby5idFRyYW5zZm9ybSgpO1xcblxcbiAgICAgICAgX3ZlYzNfMS5zZXRYKGRldGFpbHMucG9zaXRpb25hLngpO1xcbiAgICAgICAgX3ZlYzNfMS5zZXRZKGRldGFpbHMucG9zaXRpb25hLnkpO1xcbiAgICAgICAgX3ZlYzNfMS5zZXRaKGRldGFpbHMucG9zaXRpb25hLnopO1xcblxcbiAgICAgICAgdHJhbnNmb3JtYS5zZXRPcmlnaW4oX3ZlYzNfMSk7XFxuXFxuICAgICAgICB2YXIgcm90YXRpb24gPSB0cmFuc2Zvcm1hLmdldFJvdGF0aW9uKCk7XFxuICAgICAgICByb3RhdGlvbi5zZXRFdWxlcihkZXRhaWxzLmF4aXMueCwgZGV0YWlscy5heGlzLnksIGRldGFpbHMuYXhpcy56KTtcXG4gICAgICAgIHRyYW5zZm9ybWEuc2V0Um90YXRpb24ocm90YXRpb24pO1xcblxcbiAgICAgICAgaWYgKGRldGFpbHMub2JqZWN0Yikge1xcbiAgICAgICAgICB0cmFuc2Zvcm1iID0gbmV3IEFtbW8uYnRUcmFuc2Zvcm0oKTtcXG5cXG4gICAgICAgICAgX3ZlYzNfMi5zZXRYKGRldGFpbHMucG9zaXRpb25iLngpO1xcbiAgICAgICAgICBfdmVjM18yLnNldFkoZGV0YWlscy5wb3NpdGlvbmIueSk7XFxuICAgICAgICAgIF92ZWMzXzIuc2V0WihkZXRhaWxzLnBvc2l0aW9uYi56KTtcXG5cXG4gICAgICAgICAgdHJhbnNmb3JtYi5zZXRPcmlnaW4oX3ZlYzNfMik7XFxuXFxuICAgICAgICAgIHJvdGF0aW9uID0gdHJhbnNmb3JtYi5nZXRSb3RhdGlvbigpO1xcbiAgICAgICAgICByb3RhdGlvbi5zZXRFdWxlcihkZXRhaWxzLmF4aXMueCwgZGV0YWlscy5heGlzLnksIGRldGFpbHMuYXhpcy56KTtcXG4gICAgICAgICAgdHJhbnNmb3JtYi5zZXRSb3RhdGlvbihyb3RhdGlvbik7XFxuXFxuICAgICAgICAgIGNvbnN0cmFpbnQgPSBuZXcgQW1tby5idFNsaWRlckNvbnN0cmFpbnQoX29iamVjdHNbZGV0YWlscy5vYmplY3RhXSwgX29iamVjdHNbZGV0YWlscy5vYmplY3RiXSwgdHJhbnNmb3JtYSwgdHJhbnNmb3JtYiwgdHJ1ZSk7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICBjb25zdHJhaW50ID0gbmV3IEFtbW8uYnRTbGlkZXJDb25zdHJhaW50KF9vYmplY3RzW2RldGFpbHMub2JqZWN0YV0sIHRyYW5zZm9ybWEsIHRydWUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgY29uc3RyYWludC50YSA9IHRyYW5zZm9ybWE7XFxuICAgICAgICBjb25zdHJhaW50LnRiID0gdHJhbnNmb3JtYjtcXG5cXG4gICAgICAgIEFtbW8uZGVzdHJveSh0cmFuc2Zvcm1hKTtcXG4gICAgICAgIGlmICh0cmFuc2Zvcm1iICE9PSB1bmRlZmluZWQpIEFtbW8uZGVzdHJveSh0cmFuc2Zvcm1iKTtcXG5cXG4gICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgY2FzZSAnY29uZXR3aXN0JzpcXG4gICAgICB7XFxuICAgICAgICB2YXIgX3RyYW5zZm9ybWEgPSBuZXcgQW1tby5idFRyYW5zZm9ybSgpO1xcbiAgICAgICAgX3RyYW5zZm9ybWEuc2V0SWRlbnRpdHkoKTtcXG5cXG4gICAgICAgIHZhciBfdHJhbnNmb3JtYiA9IG5ldyBBbW1vLmJ0VHJhbnNmb3JtKCk7XFxuICAgICAgICBfdHJhbnNmb3JtYi5zZXRJZGVudGl0eSgpO1xcblxcbiAgICAgICAgX3ZlYzNfMS5zZXRYKGRldGFpbHMucG9zaXRpb25hLngpO1xcbiAgICAgICAgX3ZlYzNfMS5zZXRZKGRldGFpbHMucG9zaXRpb25hLnkpO1xcbiAgICAgICAgX3ZlYzNfMS5zZXRaKGRldGFpbHMucG9zaXRpb25hLnopO1xcblxcbiAgICAgICAgX3ZlYzNfMi5zZXRYKGRldGFpbHMucG9zaXRpb25iLngpO1xcbiAgICAgICAgX3ZlYzNfMi5zZXRZKGRldGFpbHMucG9zaXRpb25iLnkpO1xcbiAgICAgICAgX3ZlYzNfMi5zZXRaKGRldGFpbHMucG9zaXRpb25iLnopO1xcblxcbiAgICAgICAgX3RyYW5zZm9ybWEuc2V0T3JpZ2luKF92ZWMzXzEpO1xcbiAgICAgICAgX3RyYW5zZm9ybWIuc2V0T3JpZ2luKF92ZWMzXzIpO1xcblxcbiAgICAgICAgdmFyIF9yb3RhdGlvbiA9IF90cmFuc2Zvcm1hLmdldFJvdGF0aW9uKCk7XFxuICAgICAgICBfcm90YXRpb24uc2V0RXVsZXJaWVgoLWRldGFpbHMuYXhpc2EueiwgLWRldGFpbHMuYXhpc2EueSwgLWRldGFpbHMuYXhpc2EueCk7XFxuICAgICAgICBfdHJhbnNmb3JtYS5zZXRSb3RhdGlvbihfcm90YXRpb24pO1xcblxcbiAgICAgICAgX3JvdGF0aW9uID0gX3RyYW5zZm9ybWIuZ2V0Um90YXRpb24oKTtcXG4gICAgICAgIF9yb3RhdGlvbi5zZXRFdWxlclpZWCgtZGV0YWlscy5heGlzYi56LCAtZGV0YWlscy5heGlzYi55LCAtZGV0YWlscy5heGlzYi54KTtcXG4gICAgICAgIF90cmFuc2Zvcm1iLnNldFJvdGF0aW9uKF9yb3RhdGlvbik7XFxuXFxuICAgICAgICBjb25zdHJhaW50ID0gbmV3IEFtbW8uYnRDb25lVHdpc3RDb25zdHJhaW50KF9vYmplY3RzW2RldGFpbHMub2JqZWN0YV0sIF9vYmplY3RzW2RldGFpbHMub2JqZWN0Yl0sIF90cmFuc2Zvcm1hLCBfdHJhbnNmb3JtYik7XFxuXFxuICAgICAgICBjb25zdHJhaW50LnNldExpbWl0KE1hdGguUEksIDAsIE1hdGguUEkpO1xcblxcbiAgICAgICAgY29uc3RyYWludC50YSA9IF90cmFuc2Zvcm1hO1xcbiAgICAgICAgY29uc3RyYWludC50YiA9IF90cmFuc2Zvcm1iO1xcblxcbiAgICAgICAgQW1tby5kZXN0cm95KF90cmFuc2Zvcm1hKTtcXG4gICAgICAgIEFtbW8uZGVzdHJveShfdHJhbnNmb3JtYik7XFxuXFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIGNhc2UgJ2RvZic6XFxuICAgICAge1xcbiAgICAgICAgdmFyIF90cmFuc2Zvcm1iMiA9IHZvaWQgMDtcXG5cXG4gICAgICAgIHZhciBfdHJhbnNmb3JtYTIgPSBuZXcgQW1tby5idFRyYW5zZm9ybSgpO1xcbiAgICAgICAgX3RyYW5zZm9ybWEyLnNldElkZW50aXR5KCk7XFxuXFxuICAgICAgICBfdmVjM18xLnNldFgoZGV0YWlscy5wb3NpdGlvbmEueCk7XFxuICAgICAgICBfdmVjM18xLnNldFkoZGV0YWlscy5wb3NpdGlvbmEueSk7XFxuICAgICAgICBfdmVjM18xLnNldFooZGV0YWlscy5wb3NpdGlvbmEueik7XFxuXFxuICAgICAgICBfdHJhbnNmb3JtYTIuc2V0T3JpZ2luKF92ZWMzXzEpO1xcblxcbiAgICAgICAgdmFyIF9yb3RhdGlvbjIgPSBfdHJhbnNmb3JtYTIuZ2V0Um90YXRpb24oKTtcXG4gICAgICAgIF9yb3RhdGlvbjIuc2V0RXVsZXJaWVgoLWRldGFpbHMuYXhpc2EueiwgLWRldGFpbHMuYXhpc2EueSwgLWRldGFpbHMuYXhpc2EueCk7XFxuICAgICAgICBfdHJhbnNmb3JtYTIuc2V0Um90YXRpb24oX3JvdGF0aW9uMik7XFxuXFxuICAgICAgICBpZiAoZGV0YWlscy5vYmplY3RiKSB7XFxuICAgICAgICAgIF90cmFuc2Zvcm1iMiA9IG5ldyBBbW1vLmJ0VHJhbnNmb3JtKCk7XFxuICAgICAgICAgIF90cmFuc2Zvcm1iMi5zZXRJZGVudGl0eSgpO1xcblxcbiAgICAgICAgICBfdmVjM18yLnNldFgoZGV0YWlscy5wb3NpdGlvbmIueCk7XFxuICAgICAgICAgIF92ZWMzXzIuc2V0WShkZXRhaWxzLnBvc2l0aW9uYi55KTtcXG4gICAgICAgICAgX3ZlYzNfMi5zZXRaKGRldGFpbHMucG9zaXRpb25iLnopO1xcblxcbiAgICAgICAgICBfdHJhbnNmb3JtYjIuc2V0T3JpZ2luKF92ZWMzXzIpO1xcblxcbiAgICAgICAgICBfcm90YXRpb24yID0gX3RyYW5zZm9ybWIyLmdldFJvdGF0aW9uKCk7XFxuICAgICAgICAgIF9yb3RhdGlvbjIuc2V0RXVsZXJaWVgoLWRldGFpbHMuYXhpc2IueiwgLWRldGFpbHMuYXhpc2IueSwgLWRldGFpbHMuYXhpc2IueCk7XFxuICAgICAgICAgIF90cmFuc2Zvcm1iMi5zZXRSb3RhdGlvbihfcm90YXRpb24yKTtcXG5cXG4gICAgICAgICAgY29uc3RyYWludCA9IG5ldyBBbW1vLmJ0R2VuZXJpYzZEb2ZDb25zdHJhaW50KF9vYmplY3RzW2RldGFpbHMub2JqZWN0YV0sIF9vYmplY3RzW2RldGFpbHMub2JqZWN0Yl0sIF90cmFuc2Zvcm1hMiwgX3RyYW5zZm9ybWIyLCB0cnVlKTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIGNvbnN0cmFpbnQgPSBuZXcgQW1tby5idEdlbmVyaWM2RG9mQ29uc3RyYWludChfb2JqZWN0c1tkZXRhaWxzLm9iamVjdGFdLCBfdHJhbnNmb3JtYTIsIHRydWUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgY29uc3RyYWludC50YSA9IF90cmFuc2Zvcm1hMjtcXG4gICAgICAgIGNvbnN0cmFpbnQudGIgPSBfdHJhbnNmb3JtYjI7XFxuXFxuICAgICAgICBBbW1vLmRlc3Ryb3koX3RyYW5zZm9ybWEyKTtcXG4gICAgICAgIGlmIChfdHJhbnNmb3JtYjIgIT09IHVuZGVmaW5lZCkgQW1tby5kZXN0cm95KF90cmFuc2Zvcm1iMik7XFxuXFxuICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIGRlZmF1bHQ6XFxuICAgICAgcmV0dXJuO1xcbiAgfVxcblxcbiAgd29ybGQuYWRkQ29uc3RyYWludChjb25zdHJhaW50KTtcXG5cXG4gIGNvbnN0cmFpbnQuYSA9IF9vYmplY3RzW2RldGFpbHMub2JqZWN0YV07XFxuICBjb25zdHJhaW50LmIgPSBfb2JqZWN0c1tkZXRhaWxzLm9iamVjdGJdO1xcblxcbiAgY29uc3RyYWludC5lbmFibGVGZWVkYmFjaygpO1xcbiAgX2NvbnN0cmFpbnRzW2RldGFpbHMuaWRdID0gY29uc3RyYWludDtcXG4gIF9udW1fY29uc3RyYWludHMrKztcXG5cXG4gIGlmIChTVVBQT1JUX1RSQU5TRkVSQUJMRSkge1xcbiAgICBjb25zdHJhaW50cmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheSgxICsgX251bV9jb25zdHJhaW50cyAqIENPTlNUUkFJTlRSRVBPUlRfSVRFTVNJWkUpOyAvLyBtZXNzYWdlIGlkICYgKCAjIG9mIG9iamVjdHMgdG8gcmVwb3J0ICogIyBvZiB2YWx1ZXMgcGVyIG9iamVjdCApXFxuICAgIGNvbnN0cmFpbnRyZXBvcnRbMF0gPSBNRVNTQUdFX1RZUEVTLkNPTlNUUkFJTlRSRVBPUlQ7XFxuICB9IGVsc2UgY29uc3RyYWludHJlcG9ydCA9IFtNRVNTQUdFX1RZUEVTLkNPTlNUUkFJTlRSRVBPUlRdO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5yZW1vdmVDb25zdHJhaW50ID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW2RldGFpbHMuaWRdO1xcblxcbiAgaWYgKGNvbnN0cmFpbnQgIT09IHVuZGVmaW5lZCkge1xcbiAgICB3b3JsZC5yZW1vdmVDb25zdHJhaW50KGNvbnN0cmFpbnQpO1xcbiAgICBfY29uc3RyYWludHNbZGV0YWlscy5pZF0gPSBudWxsO1xcbiAgICBfbnVtX2NvbnN0cmFpbnRzLS07XFxuICB9XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLmNvbnN0cmFpbnRfc2V0QnJlYWtpbmdJbXB1bHNlVGhyZXNob2xkID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW2RldGFpbHMuaWRdO1xcbiAgaWYgKGNvbnN0cmFpbnQgIT09IHVuZGVmaW5kKSBjb25zdHJhaW50LnNldEJyZWFraW5nSW1wdWxzZVRocmVzaG9sZChkZXRhaWxzLnRocmVzaG9sZCk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLnNpbXVsYXRlID0gZnVuY3Rpb24gKCkge1xcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XFxuXFxuICBpZiAod29ybGQpIHtcXG4gICAgaWYgKHBhcmFtcy50aW1lU3RlcCAmJiBwYXJhbXMudGltZVN0ZXAgPCBmaXhlZFRpbWVTdGVwKSBwYXJhbXMudGltZVN0ZXAgPSBmaXhlZFRpbWVTdGVwO1xcblxcbiAgICBwYXJhbXMubWF4U3ViU3RlcHMgPSBwYXJhbXMubWF4U3ViU3RlcHMgfHwgTWF0aC5jZWlsKHBhcmFtcy50aW1lU3RlcCAvIGZpeGVkVGltZVN0ZXApOyAvLyBJZiBtYXhTdWJTdGVwcyBpcyBub3QgZGVmaW5lZCwga2VlcCB0aGUgc2ltdWxhdGlvbiBmdWxseSB1cCB0byBkYXRlXFxuXFxuICAgIHdvcmxkLnN0ZXBTaW11bGF0aW9uKHBhcmFtcy50aW1lU3RlcCwgcGFyYW1zLm1heFN1YlN0ZXBzLCBmaXhlZFRpbWVTdGVwKTtcXG5cXG4gICAgaWYgKF92ZWhpY2xlcy5sZW5ndGggPiAwKSByZXBvcnRWZWhpY2xlcygpO1xcbiAgICByZXBvcnRDb2xsaXNpb25zKCk7XFxuICAgIGlmIChfY29uc3RyYWludHMubGVuZ3RoID4gMCkgcmVwb3J0Q29uc3RyYWludHMoKTtcXG4gICAgcmVwb3J0V29ybGQoKTtcXG4gICAgaWYgKF9zb2Z0Ym9keV9lbmFibGVkKSByZXBvcnRXb3JsZF9zb2Z0Ym9kaWVzKCk7XFxuICB9XFxufTtcXG5cXG4vLyBDb25zdHJhaW50IGZ1bmN0aW9uc1xcbnB1YmxpY19mdW5jdGlvbnMuaGluZ2Vfc2V0TGltaXRzID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XS5zZXRMaW1pdChwYXJhbXMubG93LCBwYXJhbXMuaGlnaCwgMCwgcGFyYW1zLmJpYXNfZmFjdG9yLCBwYXJhbXMucmVsYXhhdGlvbl9mYWN0b3IpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5oaW5nZV9lbmFibGVBbmd1bGFyTW90b3IgPSBmdW5jdGlvbiAocGFyYW1zKSB7XFxuICB2YXIgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XFxuICBjb25zdHJhaW50LmVuYWJsZUFuZ3VsYXJNb3Rvcih0cnVlLCBwYXJhbXMudmVsb2NpdHksIHBhcmFtcy5hY2NlbGVyYXRpb24pO1xcbiAgY29uc3RyYWludC5hLmFjdGl2YXRlKCk7XFxuICBpZiAoY29uc3RyYWludC5iKSBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuaGluZ2VfZGlzYWJsZU1vdG9yID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XS5lbmFibGVNb3RvcihmYWxzZSk7XFxuICBpZiAoY29uc3RyYWludC5iKSBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuc2xpZGVyX3NldExpbWl0cyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcXG4gIGNvbnN0cmFpbnQuc2V0TG93ZXJMaW5MaW1pdChwYXJhbXMubGluX2xvd2VyIHx8IDApO1xcbiAgY29uc3RyYWludC5zZXRVcHBlckxpbkxpbWl0KHBhcmFtcy5saW5fdXBwZXIgfHwgMCk7XFxuXFxuICBjb25zdHJhaW50LnNldExvd2VyQW5nTGltaXQocGFyYW1zLmFuZ19sb3dlciB8fCAwKTtcXG4gIGNvbnN0cmFpbnQuc2V0VXBwZXJBbmdMaW1pdChwYXJhbXMuYW5nX3VwcGVyIHx8IDApO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5zbGlkZXJfc2V0UmVzdGl0dXRpb24gPSBmdW5jdGlvbiAocGFyYW1zKSB7XFxuICB2YXIgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XFxuICBjb25zdHJhaW50LnNldFNvZnRuZXNzTGltTGluKHBhcmFtcy5saW5lYXIgfHwgMCk7XFxuICBjb25zdHJhaW50LnNldFNvZnRuZXNzTGltQW5nKHBhcmFtcy5hbmd1bGFyIHx8IDApO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5zbGlkZXJfZW5hYmxlTGluZWFyTW90b3IgPSBmdW5jdGlvbiAocGFyYW1zKSB7XFxuICB2YXIgY29uc3RyYWludCA9IF9jb25zdHJhaW50c1twYXJhbXMuY29uc3RyYWludF07XFxuICBjb25zdHJhaW50LnNldFRhcmdldExpbk1vdG9yVmVsb2NpdHkocGFyYW1zLnZlbG9jaXR5KTtcXG4gIGNvbnN0cmFpbnQuc2V0TWF4TGluTW90b3JGb3JjZShwYXJhbXMuYWNjZWxlcmF0aW9uKTtcXG4gIGNvbnN0cmFpbnQuc2V0UG93ZXJlZExpbk1vdG9yKHRydWUpO1xcbiAgY29uc3RyYWludC5hLmFjdGl2YXRlKCk7XFxuICBpZiAoY29uc3RyYWludC5iKSBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuc2xpZGVyX2Rpc2FibGVMaW5lYXJNb3RvciA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcXG4gIGNvbnN0cmFpbnQuc2V0UG93ZXJlZExpbk1vdG9yKGZhbHNlKTtcXG4gIGlmIChjb25zdHJhaW50LmIpIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5zbGlkZXJfZW5hYmxlQW5ndWxhck1vdG9yID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgdmFyIGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xcbiAgY29uc3RyYWludC5zZXRUYXJnZXRBbmdNb3RvclZlbG9jaXR5KHBhcmFtcy52ZWxvY2l0eSk7XFxuICBjb25zdHJhaW50LnNldE1heEFuZ01vdG9yRm9yY2UocGFyYW1zLmFjY2VsZXJhdGlvbik7XFxuICBjb25zdHJhaW50LnNldFBvd2VyZWRBbmdNb3Rvcih0cnVlKTtcXG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xcbiAgaWYgKGNvbnN0cmFpbnQuYikgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLnNsaWRlcl9kaXNhYmxlQW5ndWxhck1vdG9yID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgdmFyIGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xcbiAgY29uc3RyYWludC5zZXRQb3dlcmVkQW5nTW90b3IoZmFsc2UpO1xcbiAgY29uc3RyYWludC5hLmFjdGl2YXRlKCk7XFxuICBpZiAoY29uc3RyYWludC5iKSBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuY29uZXR3aXN0X3NldExpbWl0ID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XS5zZXRMaW1pdChwYXJhbXMueiwgcGFyYW1zLnksIHBhcmFtcy54KTsgLy8gWllYIG9yZGVyXFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLmNvbmV0d2lzdF9lbmFibGVNb3RvciA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcXG4gIGNvbnN0cmFpbnQuZW5hYmxlTW90b3IodHJ1ZSk7XFxuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcXG4gIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5jb25ldHdpc3Rfc2V0TWF4TW90b3JJbXB1bHNlID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgdmFyIGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xcbiAgY29uc3RyYWludC5zZXRNYXhNb3RvckltcHVsc2UocGFyYW1zLm1heF9pbXB1bHNlKTtcXG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xcbiAgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLmNvbmV0d2lzdF9zZXRNb3RvclRhcmdldCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcXG5cXG4gIF9xdWF0LnNldFgocGFyYW1zLngpO1xcbiAgX3F1YXQuc2V0WShwYXJhbXMueSk7XFxuICBfcXVhdC5zZXRaKHBhcmFtcy56KTtcXG4gIF9xdWF0LnNldFcocGFyYW1zLncpO1xcblxcbiAgY29uc3RyYWludC5zZXRNb3RvclRhcmdldChfcXVhdCk7XFxuXFxuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcXG4gIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5jb25ldHdpc3RfZGlzYWJsZU1vdG9yID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgdmFyIGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xcbiAgY29uc3RyYWludC5lbmFibGVNb3RvcihmYWxzZSk7XFxuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcXG4gIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5kb2Zfc2V0TGluZWFyTG93ZXJMaW1pdCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcXG5cXG4gIF92ZWMzXzEuc2V0WChwYXJhbXMueCk7XFxuICBfdmVjM18xLnNldFkocGFyYW1zLnkpO1xcbiAgX3ZlYzNfMS5zZXRaKHBhcmFtcy56KTtcXG5cXG4gIGNvbnN0cmFpbnQuc2V0TGluZWFyTG93ZXJMaW1pdChfdmVjM18xKTtcXG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xcblxcbiAgaWYgKGNvbnN0cmFpbnQuYikgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLmRvZl9zZXRMaW5lYXJVcHBlckxpbWl0ID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgdmFyIGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xcblxcbiAgX3ZlYzNfMS5zZXRYKHBhcmFtcy54KTtcXG4gIF92ZWMzXzEuc2V0WShwYXJhbXMueSk7XFxuICBfdmVjM18xLnNldFoocGFyYW1zLnopO1xcblxcbiAgY29uc3RyYWludC5zZXRMaW5lYXJVcHBlckxpbWl0KF92ZWMzXzEpO1xcbiAgY29uc3RyYWludC5hLmFjdGl2YXRlKCk7XFxuXFxuICBpZiAoY29uc3RyYWludC5iKSBjb25zdHJhaW50LmIuYWN0aXZhdGUoKTtcXG59O1xcblxcbnB1YmxpY19mdW5jdGlvbnMuZG9mX3NldEFuZ3VsYXJMb3dlckxpbWl0ID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgdmFyIGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xcblxcbiAgX3ZlYzNfMS5zZXRYKHBhcmFtcy54KTtcXG4gIF92ZWMzXzEuc2V0WShwYXJhbXMueSk7XFxuICBfdmVjM18xLnNldFoocGFyYW1zLnopO1xcblxcbiAgY29uc3RyYWludC5zZXRBbmd1bGFyTG93ZXJMaW1pdChfdmVjM18xKTtcXG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xcblxcbiAgaWYgKGNvbnN0cmFpbnQuYikgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XFxufTtcXG5cXG5wdWJsaWNfZnVuY3Rpb25zLmRvZl9zZXRBbmd1bGFyVXBwZXJMaW1pdCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XTtcXG5cXG4gIF92ZWMzXzEuc2V0WChwYXJhbXMueCk7XFxuICBfdmVjM18xLnNldFkocGFyYW1zLnkpO1xcbiAgX3ZlYzNfMS5zZXRaKHBhcmFtcy56KTtcXG5cXG4gIGNvbnN0cmFpbnQuc2V0QW5ndWxhclVwcGVyTGltaXQoX3ZlYzNfMSk7XFxuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcXG5cXG4gIGlmIChjb25zdHJhaW50LmIpIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5kb2ZfZW5hYmxlQW5ndWxhck1vdG9yID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgdmFyIGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdO1xcblxcbiAgdmFyIG1vdG9yID0gY29uc3RyYWludC5nZXRSb3RhdGlvbmFsTGltaXRNb3RvcihwYXJhbXMud2hpY2gpO1xcbiAgbW90b3Iuc2V0X21fZW5hYmxlTW90b3IodHJ1ZSk7XFxuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcXG5cXG4gIGlmIChjb25zdHJhaW50LmIpIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5kb2ZfY29uZmlndXJlQW5ndWxhck1vdG9yID0gZnVuY3Rpb24gKHBhcmFtcykge1xcbiAgdmFyIGNvbnN0cmFpbnQgPSBfY29uc3RyYWludHNbcGFyYW1zLmNvbnN0cmFpbnRdLFxcbiAgICAgIG1vdG9yID0gY29uc3RyYWludC5nZXRSb3RhdGlvbmFsTGltaXRNb3RvcihwYXJhbXMud2hpY2gpO1xcblxcbiAgbW90b3Iuc2V0X21fbG9MaW1pdChwYXJhbXMubG93X2FuZ2xlKTtcXG4gIG1vdG9yLnNldF9tX2hpTGltaXQocGFyYW1zLmhpZ2hfYW5nbGUpO1xcbiAgbW90b3Iuc2V0X21fdGFyZ2V0VmVsb2NpdHkocGFyYW1zLnZlbG9jaXR5KTtcXG4gIG1vdG9yLnNldF9tX21heE1vdG9yRm9yY2UocGFyYW1zLm1heF9mb3JjZSk7XFxuICBjb25zdHJhaW50LmEuYWN0aXZhdGUoKTtcXG5cXG4gIGlmIChjb25zdHJhaW50LmIpIGNvbnN0cmFpbnQuYi5hY3RpdmF0ZSgpO1xcbn07XFxuXFxucHVibGljX2Z1bmN0aW9ucy5kb2ZfZGlzYWJsZUFuZ3VsYXJNb3RvciA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcXG4gIHZhciBjb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW3BhcmFtcy5jb25zdHJhaW50XSxcXG4gICAgICBtb3RvciA9IGNvbnN0cmFpbnQuZ2V0Um90YXRpb25hbExpbWl0TW90b3IocGFyYW1zLndoaWNoKTtcXG5cXG4gIG1vdG9yLnNldF9tX2VuYWJsZU1vdG9yKGZhbHNlKTtcXG4gIGNvbnN0cmFpbnQuYS5hY3RpdmF0ZSgpO1xcblxcbiAgaWYgKGNvbnN0cmFpbnQuYikgY29uc3RyYWludC5iLmFjdGl2YXRlKCk7XFxufTtcXG5cXG52YXIgcmVwb3J0V29ybGQgPSBmdW5jdGlvbiByZXBvcnRXb3JsZCgpIHtcXG4gIGlmIChTVVBQT1JUX1RSQU5TRkVSQUJMRSAmJiB3b3JsZHJlcG9ydC5sZW5ndGggPCAyICsgX251bV9yaWdpZGJvZHlfb2JqZWN0cyAqIFdPUkxEUkVQT1JUX0lURU1TSVpFKSB7XFxuICAgIHdvcmxkcmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheSgyIC8vIG1lc3NhZ2UgaWQgJiAjIG9iamVjdHMgaW4gcmVwb3J0XFxuICAgICsgTWF0aC5jZWlsKF9udW1fcmlnaWRib2R5X29iamVjdHMgLyBSRVBPUlRfQ0hVTktTSVpFKSAqIFJFUE9SVF9DSFVOS1NJWkUgKiBXT1JMRFJFUE9SVF9JVEVNU0laRSAvLyAjIG9mIHZhbHVlcyBuZWVkZWQgKiBpdGVtIHNpemVcXG4gICAgKTtcXG5cXG4gICAgd29ybGRyZXBvcnRbMF0gPSBNRVNTQUdFX1RZUEVTLldPUkxEUkVQT1JUO1xcbiAgfVxcblxcbiAgd29ybGRyZXBvcnRbMV0gPSBfbnVtX3JpZ2lkYm9keV9vYmplY3RzOyAvLyByZWNvcmQgaG93IG1hbnkgb2JqZWN0cyB3ZSdyZSByZXBvcnRpbmcgb25cXG5cXG4gIHtcXG4gICAgdmFyIGkgPSAwLFxcbiAgICAgICAgaW5kZXggPSBfb2JqZWN0cy5sZW5ndGg7XFxuXFxuICAgIHdoaWxlIChpbmRleC0tKSB7XFxuICAgICAgdmFyIG9iamVjdCA9IF9vYmplY3RzW2luZGV4XTtcXG5cXG4gICAgICBpZiAob2JqZWN0ICYmIG9iamVjdC50eXBlID09PSAxKSB7XFxuICAgICAgICAvLyBSaWdpZEJvZGllcy5cXG4gICAgICAgIC8vICNUT0RPOiB3ZSBjYW4ndCB1c2UgY2VudGVyIG9mIG1hc3MgdHJhbnNmb3JtIHdoZW4gY2VudGVyIG9mIG1hc3MgY2FuIGNoYW5nZSxcXG4gICAgICAgIC8vICAgICAgICBidXQgZ2V0TW90aW9uU3RhdGUoKS5nZXRXb3JsZFRyYW5zZm9ybSgpIHNjcmV3cyB1cCBvbiBvYmplY3RzIHRoYXQgaGF2ZSBiZWVuIG1vdmVkXFxuICAgICAgICAvLyBvYmplY3QuZ2V0TW90aW9uU3RhdGUoKS5nZXRXb3JsZFRyYW5zZm9ybSggdHJhbnNmb3JtICk7XFxuICAgICAgICAvLyBvYmplY3QuZ2V0TW90aW9uU3RhdGUoKS5nZXRXb3JsZFRyYW5zZm9ybShfdHJhbnNmb3JtKTtcXG5cXG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSBvYmplY3QuZ2V0Q2VudGVyT2ZNYXNzVHJhbnNmb3JtKCk7XFxuICAgICAgICB2YXIgb3JpZ2luID0gdHJhbnNmb3JtLmdldE9yaWdpbigpO1xcbiAgICAgICAgdmFyIHJvdGF0aW9uID0gdHJhbnNmb3JtLmdldFJvdGF0aW9uKCk7XFxuXFxuICAgICAgICAvLyBhZGQgdmFsdWVzIHRvIHJlcG9ydFxcbiAgICAgICAgdmFyIG9mZnNldCA9IDIgKyBpKysgKiBXT1JMRFJFUE9SVF9JVEVNU0laRTtcXG5cXG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldF0gPSBvYmplY3QuaWQ7XFxuXFxuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyAxXSA9IG9yaWdpbi54KCk7XFxuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyAyXSA9IG9yaWdpbi55KCk7XFxuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyAzXSA9IG9yaWdpbi56KCk7XFxuXFxuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyA0XSA9IHJvdGF0aW9uLngoKTtcXG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldCArIDVdID0gcm90YXRpb24ueSgpO1xcbiAgICAgICAgd29ybGRyZXBvcnRbb2Zmc2V0ICsgNl0gPSByb3RhdGlvbi56KCk7XFxuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyA3XSA9IHJvdGF0aW9uLncoKTtcXG5cXG4gICAgICAgIF92ZWN0b3IgPSBvYmplY3QuZ2V0TGluZWFyVmVsb2NpdHkoKTtcXG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldCArIDhdID0gX3ZlY3Rvci54KCk7XFxuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyA5XSA9IF92ZWN0b3IueSgpO1xcbiAgICAgICAgd29ybGRyZXBvcnRbb2Zmc2V0ICsgMTBdID0gX3ZlY3Rvci56KCk7XFxuXFxuICAgICAgICBfdmVjdG9yID0gb2JqZWN0LmdldEFuZ3VsYXJWZWxvY2l0eSgpO1xcbiAgICAgICAgd29ybGRyZXBvcnRbb2Zmc2V0ICsgMTFdID0gX3ZlY3Rvci54KCk7XFxuICAgICAgICB3b3JsZHJlcG9ydFtvZmZzZXQgKyAxMl0gPSBfdmVjdG9yLnkoKTtcXG4gICAgICAgIHdvcmxkcmVwb3J0W29mZnNldCArIDEzXSA9IF92ZWN0b3IueigpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB0cmFuc2ZlcmFibGVNZXNzYWdlKHdvcmxkcmVwb3J0LmJ1ZmZlciwgW3dvcmxkcmVwb3J0LmJ1ZmZlcl0pO2Vsc2UgdHJhbnNmZXJhYmxlTWVzc2FnZSh3b3JsZHJlcG9ydCk7XFxufTtcXG5cXG52YXIgcmVwb3J0V29ybGRfc29mdGJvZGllcyA9IGZ1bmN0aW9uIHJlcG9ydFdvcmxkX3NvZnRib2RpZXMoKSB7XFxuICAvLyBUT0RPOiBBZGQgU1VQUE9SVFRSQU5TRkVSQUJMRS5cXG5cXG4gIHNvZnRyZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KDIgLy8gbWVzc2FnZSBpZCAmICMgb2JqZWN0cyBpbiByZXBvcnRcXG4gICsgX251bV9zb2Z0Ym9keV9vYmplY3RzICogMiArIF9zb2Z0Ym9keV9yZXBvcnRfc2l6ZSAqIDYpO1xcblxcbiAgc29mdHJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuU09GVFJFUE9SVDtcXG4gIHNvZnRyZXBvcnRbMV0gPSBfbnVtX3NvZnRib2R5X29iamVjdHM7IC8vIHJlY29yZCBob3cgbWFueSBvYmplY3RzIHdlJ3JlIHJlcG9ydGluZyBvblxcblxcbiAge1xcbiAgICB2YXIgb2Zmc2V0ID0gMixcXG4gICAgICAgIGluZGV4ID0gX29iamVjdHMubGVuZ3RoO1xcblxcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xcbiAgICAgIHZhciBvYmplY3QgPSBfb2JqZWN0c1tpbmRleF07XFxuXFxuICAgICAgaWYgKG9iamVjdCAmJiBvYmplY3QudHlwZSA9PT0gMCkge1xcbiAgICAgICAgLy8gU29mdEJvZGllcy5cXG5cXG4gICAgICAgIHNvZnRyZXBvcnRbb2Zmc2V0XSA9IG9iamVjdC5pZDtcXG5cXG4gICAgICAgIHZhciBvZmZzZXRWZXJ0ID0gb2Zmc2V0ICsgMjtcXG5cXG4gICAgICAgIGlmIChvYmplY3Qucm9wZSA9PT0gdHJ1ZSkge1xcbiAgICAgICAgICB2YXIgbm9kZXMgPSBvYmplY3QuZ2V0X21fbm9kZXMoKTtcXG4gICAgICAgICAgdmFyIHNpemUgPSBub2Rlcy5zaXplKCk7XFxuICAgICAgICAgIHNvZnRyZXBvcnRbb2Zmc2V0ICsgMV0gPSBzaXplO1xcblxcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xcbiAgICAgICAgICAgIHZhciBub2RlID0gbm9kZXMuYXQoaSk7XFxuICAgICAgICAgICAgdmFyIHZlcnQgPSBub2RlLmdldF9tX3goKTtcXG4gICAgICAgICAgICB2YXIgb2ZmID0gb2Zmc2V0VmVydCArIGkgKiAzO1xcblxcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmXSA9IHZlcnQueCgpO1xcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbb2ZmICsgMV0gPSB2ZXJ0LnkoKTtcXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W29mZiArIDJdID0gdmVydC56KCk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgb2Zmc2V0ICs9IHNpemUgKiA2ICsgMjtcXG4gICAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmNsb3RoKSB7XFxuICAgICAgICAgIHZhciBfbm9kZXMgPSBvYmplY3QuZ2V0X21fbm9kZXMoKTtcXG4gICAgICAgICAgdmFyIF9zaXplID0gX25vZGVzLnNpemUoKTtcXG4gICAgICAgICAgc29mdHJlcG9ydFtvZmZzZXQgKyAxXSA9IF9zaXplO1xcblxcbiAgICAgICAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBfc2l6ZTsgX2kzKyspIHtcXG4gICAgICAgICAgICB2YXIgX25vZGUgPSBfbm9kZXMuYXQoX2kzKTtcXG4gICAgICAgICAgICB2YXIgX3ZlcnQgPSBfbm9kZS5nZXRfbV94KCk7XFxuICAgICAgICAgICAgdmFyIG5vcm1hbCA9IF9ub2RlLmdldF9tX24oKTtcXG4gICAgICAgICAgICB2YXIgX29mZiA9IG9mZnNldFZlcnQgKyBfaTMgKiA2O1xcblxcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbX29mZl0gPSBfdmVydC54KCk7XFxuICAgICAgICAgICAgc29mdHJlcG9ydFtfb2ZmICsgMV0gPSBfdmVydC55KCk7XFxuICAgICAgICAgICAgc29mdHJlcG9ydFtfb2ZmICsgMl0gPSBfdmVydC56KCk7XFxuXFxuICAgICAgICAgICAgc29mdHJlcG9ydFtfb2ZmICsgM10gPSBub3JtYWwueCgpO1xcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbX29mZiArIDRdID0gbm9ybWFsLnkoKTtcXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W19vZmYgKyA1XSA9IG5vcm1hbC56KCk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgb2Zmc2V0ICs9IF9zaXplICogNiArIDI7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICB2YXIgZmFjZXMgPSBvYmplY3QuZ2V0X21fZmFjZXMoKTtcXG4gICAgICAgICAgdmFyIF9zaXplMiA9IGZhY2VzLnNpemUoKTtcXG4gICAgICAgICAgc29mdHJlcG9ydFtvZmZzZXQgKyAxXSA9IF9zaXplMjtcXG5cXG4gICAgICAgICAgZm9yICh2YXIgX2k0ID0gMDsgX2k0IDwgX3NpemUyOyBfaTQrKykge1xcbiAgICAgICAgICAgIHZhciBmYWNlID0gZmFjZXMuYXQoX2k0KTtcXG5cXG4gICAgICAgICAgICB2YXIgbm9kZTEgPSBmYWNlLmdldF9tX24oMCk7XFxuICAgICAgICAgICAgdmFyIG5vZGUyID0gZmFjZS5nZXRfbV9uKDEpO1xcbiAgICAgICAgICAgIHZhciBub2RlMyA9IGZhY2UuZ2V0X21fbigyKTtcXG5cXG4gICAgICAgICAgICB2YXIgdmVydDEgPSBub2RlMS5nZXRfbV94KCk7XFxuICAgICAgICAgICAgdmFyIHZlcnQyID0gbm9kZTIuZ2V0X21feCgpO1xcbiAgICAgICAgICAgIHZhciB2ZXJ0MyA9IG5vZGUzLmdldF9tX3goKTtcXG5cXG4gICAgICAgICAgICB2YXIgbm9ybWFsMSA9IG5vZGUxLmdldF9tX24oKTtcXG4gICAgICAgICAgICB2YXIgbm9ybWFsMiA9IG5vZGUyLmdldF9tX24oKTtcXG4gICAgICAgICAgICB2YXIgbm9ybWFsMyA9IG5vZGUzLmdldF9tX24oKTtcXG5cXG4gICAgICAgICAgICB2YXIgX29mZjIgPSBvZmZzZXRWZXJ0ICsgX2k0ICogMTg7XFxuXFxuICAgICAgICAgICAgc29mdHJlcG9ydFtfb2ZmMl0gPSB2ZXJ0MS54KCk7XFxuICAgICAgICAgICAgc29mdHJlcG9ydFtfb2ZmMiArIDFdID0gdmVydDEueSgpO1xcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbX29mZjIgKyAyXSA9IHZlcnQxLnooKTtcXG5cXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W19vZmYyICsgM10gPSBub3JtYWwxLngoKTtcXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W19vZmYyICsgNF0gPSBub3JtYWwxLnkoKTtcXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W19vZmYyICsgNV0gPSBub3JtYWwxLnooKTtcXG5cXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W19vZmYyICsgNl0gPSB2ZXJ0Mi54KCk7XFxuICAgICAgICAgICAgc29mdHJlcG9ydFtfb2ZmMiArIDddID0gdmVydDIueSgpO1xcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbX29mZjIgKyA4XSA9IHZlcnQyLnooKTtcXG5cXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W19vZmYyICsgOV0gPSBub3JtYWwyLngoKTtcXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W19vZmYyICsgMTBdID0gbm9ybWFsMi55KCk7XFxuICAgICAgICAgICAgc29mdHJlcG9ydFtfb2ZmMiArIDExXSA9IG5vcm1hbDIueigpO1xcblxcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbX29mZjIgKyAxMl0gPSB2ZXJ0My54KCk7XFxuICAgICAgICAgICAgc29mdHJlcG9ydFtfb2ZmMiArIDEzXSA9IHZlcnQzLnkoKTtcXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W19vZmYyICsgMTRdID0gdmVydDMueigpO1xcblxcbiAgICAgICAgICAgIHNvZnRyZXBvcnRbX29mZjIgKyAxNV0gPSBub3JtYWwzLngoKTtcXG4gICAgICAgICAgICBzb2Z0cmVwb3J0W19vZmYyICsgMTZdID0gbm9ybWFsMy55KCk7XFxuICAgICAgICAgICAgc29mdHJlcG9ydFtfb2ZmMiArIDE3XSA9IG5vcm1hbDMueigpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIG9mZnNldCArPSBfc2l6ZTIgKiAxOCArIDI7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAvLyBpZiAoU1VQUE9SVF9UUkFOU0ZFUkFCTEUpIHRyYW5zZmVyYWJsZU1lc3NhZ2Uoc29mdHJlcG9ydC5idWZmZXIsIFtzb2Z0cmVwb3J0LmJ1ZmZlcl0pO1xcbiAgLy8gZWxzZSB0cmFuc2ZlcmFibGVNZXNzYWdlKHNvZnRyZXBvcnQpO1xcbiAgdHJhbnNmZXJhYmxlTWVzc2FnZShzb2Z0cmVwb3J0KTtcXG59O1xcblxcbnZhciByZXBvcnRDb2xsaXNpb25zID0gZnVuY3Rpb24gcmVwb3J0Q29sbGlzaW9ucygpIHtcXG4gIHZhciBkcCA9IHdvcmxkLmdldERpc3BhdGNoZXIoKSxcXG4gICAgICBudW0gPSBkcC5nZXROdW1NYW5pZm9sZHMoKTtcXG4gIC8vIF9jb2xsaWRlZCA9IGZhbHNlO1xcblxcbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB7XFxuICAgIGlmIChjb2xsaXNpb25yZXBvcnQubGVuZ3RoIDwgMiArIG51bSAqIENPTExJU0lPTlJFUE9SVF9JVEVNU0laRSkge1xcbiAgICAgIGNvbGxpc2lvbnJlcG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoMiAvLyBtZXNzYWdlIGlkICYgIyBvYmplY3RzIGluIHJlcG9ydFxcbiAgICAgICsgTWF0aC5jZWlsKF9udW1fb2JqZWN0cyAvIFJFUE9SVF9DSFVOS1NJWkUpICogUkVQT1JUX0NIVU5LU0laRSAqIENPTExJU0lPTlJFUE9SVF9JVEVNU0laRSAvLyAjIG9mIHZhbHVlcyBuZWVkZWQgKiBpdGVtIHNpemVcXG4gICAgICApO1xcbiAgICAgIGNvbGxpc2lvbnJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuQ09MTElTSU9OUkVQT1JUO1xcbiAgICB9XFxuICB9XFxuXFxuICBjb2xsaXNpb25yZXBvcnRbMV0gPSAwOyAvLyBob3cgbWFueSBjb2xsaXNpb25zIHdlJ3JlIHJlcG9ydGluZyBvblxcblxcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xcbiAgICB2YXIgbWFuaWZvbGQgPSBkcC5nZXRNYW5pZm9sZEJ5SW5kZXhJbnRlcm5hbChpKSxcXG4gICAgICAgIG51bV9jb250YWN0cyA9IG1hbmlmb2xkLmdldE51bUNvbnRhY3RzKCk7XFxuXFxuICAgIGlmIChudW1fY29udGFjdHMgPT09IDApIGNvbnRpbnVlO1xcblxcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG51bV9jb250YWN0czsgaisrKSB7XFxuICAgICAgdmFyIHB0ID0gbWFuaWZvbGQuZ2V0Q29udGFjdFBvaW50KGopO1xcblxcbiAgICAgIC8vIGlmICggcHQuZ2V0RGlzdGFuY2UoKSA8IDAgKSB7XFxuICAgICAgdmFyIG9mZnNldCA9IDIgKyBjb2xsaXNpb25yZXBvcnRbMV0rKyAqIENPTExJU0lPTlJFUE9SVF9JVEVNU0laRTtcXG4gICAgICBjb2xsaXNpb25yZXBvcnRbb2Zmc2V0XSA9IF9vYmplY3RzX2FtbW9bbWFuaWZvbGQuZ2V0Qm9keTAoKS5wdHJdO1xcbiAgICAgIGNvbGxpc2lvbnJlcG9ydFtvZmZzZXQgKyAxXSA9IF9vYmplY3RzX2FtbW9bbWFuaWZvbGQuZ2V0Qm9keTEoKS5wdHJdO1xcblxcbiAgICAgIF92ZWN0b3IgPSBwdC5nZXRfbV9ub3JtYWxXb3JsZE9uQigpO1xcbiAgICAgIGNvbGxpc2lvbnJlcG9ydFtvZmZzZXQgKyAyXSA9IF92ZWN0b3IueCgpO1xcbiAgICAgIGNvbGxpc2lvbnJlcG9ydFtvZmZzZXQgKyAzXSA9IF92ZWN0b3IueSgpO1xcbiAgICAgIGNvbGxpc2lvbnJlcG9ydFtvZmZzZXQgKyA0XSA9IF92ZWN0b3IueigpO1xcbiAgICAgIGJyZWFrO1xcbiAgICAgIC8vIH1cXG4gICAgICAvLyB0cmFuc2ZlcmFibGVNZXNzYWdlKF9vYmplY3RzX2FtbW8pO1xcbiAgICB9XFxuICB9XFxuXFxuICBpZiAoU1VQUE9SVF9UUkFOU0ZFUkFCTEUpIHRyYW5zZmVyYWJsZU1lc3NhZ2UoY29sbGlzaW9ucmVwb3J0LmJ1ZmZlciwgW2NvbGxpc2lvbnJlcG9ydC5idWZmZXJdKTtlbHNlIHRyYW5zZmVyYWJsZU1lc3NhZ2UoY29sbGlzaW9ucmVwb3J0KTtcXG59O1xcblxcbnZhciByZXBvcnRWZWhpY2xlcyA9IGZ1bmN0aW9uIHJlcG9ydFZlaGljbGVzKCkge1xcbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB7XFxuICAgIGlmICh2ZWhpY2xlcmVwb3J0Lmxlbmd0aCA8IDIgKyBfbnVtX3doZWVscyAqIFZFSElDTEVSRVBPUlRfSVRFTVNJWkUpIHtcXG4gICAgICB2ZWhpY2xlcmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheSgyIC8vIG1lc3NhZ2UgaWQgJiAjIG9iamVjdHMgaW4gcmVwb3J0XFxuICAgICAgKyBNYXRoLmNlaWwoX251bV93aGVlbHMgLyBSRVBPUlRfQ0hVTktTSVpFKSAqIFJFUE9SVF9DSFVOS1NJWkUgKiBWRUhJQ0xFUkVQT1JUX0lURU1TSVpFIC8vICMgb2YgdmFsdWVzIG5lZWRlZCAqIGl0ZW0gc2l6ZVxcbiAgICAgICk7XFxuICAgICAgdmVoaWNsZXJlcG9ydFswXSA9IE1FU1NBR0VfVFlQRVMuVkVISUNMRVJFUE9SVDtcXG4gICAgfVxcbiAgfVxcblxcbiAge1xcbiAgICB2YXIgaSA9IDAsXFxuICAgICAgICBqID0gMCxcXG4gICAgICAgIGluZGV4ID0gX3ZlaGljbGVzLmxlbmd0aDtcXG5cXG4gICAgd2hpbGUgKGluZGV4LS0pIHtcXG4gICAgICBpZiAoX3ZlaGljbGVzW2luZGV4XSkge1xcbiAgICAgICAgdmFyIHZlaGljbGUgPSBfdmVoaWNsZXNbaW5kZXhdO1xcblxcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHZlaGljbGUuZ2V0TnVtV2hlZWxzKCk7IGorKykge1xcbiAgICAgICAgICAvLyB2ZWhpY2xlLnVwZGF0ZVdoZWVsVHJhbnNmb3JtKCBqLCB0cnVlICk7XFxuICAgICAgICAgIC8vIHRyYW5zZm9ybSA9IHZlaGljbGUuZ2V0V2hlZWxUcmFuc2Zvcm1XUyggaiApO1xcbiAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gdmVoaWNsZS5nZXRXaGVlbEluZm8oaikuZ2V0X21fd29ybGRUcmFuc2Zvcm0oKTtcXG5cXG4gICAgICAgICAgdmFyIG9yaWdpbiA9IHRyYW5zZm9ybS5nZXRPcmlnaW4oKTtcXG4gICAgICAgICAgdmFyIHJvdGF0aW9uID0gdHJhbnNmb3JtLmdldFJvdGF0aW9uKCk7XFxuXFxuICAgICAgICAgIC8vIGFkZCB2YWx1ZXMgdG8gcmVwb3J0XFxuICAgICAgICAgIHZhciBvZmZzZXQgPSAxICsgaSsrICogVkVISUNMRVJFUE9SVF9JVEVNU0laRTtcXG5cXG4gICAgICAgICAgdmVoaWNsZXJlcG9ydFtvZmZzZXRdID0gaW5kZXg7XFxuICAgICAgICAgIHZlaGljbGVyZXBvcnRbb2Zmc2V0ICsgMV0gPSBqO1xcblxcbiAgICAgICAgICB2ZWhpY2xlcmVwb3J0W29mZnNldCArIDJdID0gb3JpZ2luLngoKTtcXG4gICAgICAgICAgdmVoaWNsZXJlcG9ydFtvZmZzZXQgKyAzXSA9IG9yaWdpbi55KCk7XFxuICAgICAgICAgIHZlaGljbGVyZXBvcnRbb2Zmc2V0ICsgNF0gPSBvcmlnaW4ueigpO1xcblxcbiAgICAgICAgICB2ZWhpY2xlcmVwb3J0W29mZnNldCArIDVdID0gcm90YXRpb24ueCgpO1xcbiAgICAgICAgICB2ZWhpY2xlcmVwb3J0W29mZnNldCArIDZdID0gcm90YXRpb24ueSgpO1xcbiAgICAgICAgICB2ZWhpY2xlcmVwb3J0W29mZnNldCArIDddID0gcm90YXRpb24ueigpO1xcbiAgICAgICAgICB2ZWhpY2xlcmVwb3J0W29mZnNldCArIDhdID0gcm90YXRpb24udygpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBpZiAoU1VQUE9SVF9UUkFOU0ZFUkFCTEUgJiYgaiAhPT0gMCkgdHJhbnNmZXJhYmxlTWVzc2FnZSh2ZWhpY2xlcmVwb3J0LmJ1ZmZlciwgW3ZlaGljbGVyZXBvcnQuYnVmZmVyXSk7ZWxzZSBpZiAoaiAhPT0gMCkgdHJhbnNmZXJhYmxlTWVzc2FnZSh2ZWhpY2xlcmVwb3J0KTtcXG4gIH1cXG59O1xcblxcbnZhciByZXBvcnRDb25zdHJhaW50cyA9IGZ1bmN0aW9uIHJlcG9ydENvbnN0cmFpbnRzKCkge1xcbiAgaWYgKFNVUFBPUlRfVFJBTlNGRVJBQkxFKSB7XFxuICAgIGlmIChjb25zdHJhaW50cmVwb3J0Lmxlbmd0aCA8IDIgKyBfbnVtX2NvbnN0cmFpbnRzICogQ09OU1RSQUlOVFJFUE9SVF9JVEVNU0laRSkge1xcbiAgICAgIGNvbnN0cmFpbnRyZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KDIgLy8gbWVzc2FnZSBpZCAmICMgb2JqZWN0cyBpbiByZXBvcnRcXG4gICAgICArIE1hdGguY2VpbChfbnVtX2NvbnN0cmFpbnRzIC8gUkVQT1JUX0NIVU5LU0laRSkgKiBSRVBPUlRfQ0hVTktTSVpFICogQ09OU1RSQUlOVFJFUE9SVF9JVEVNU0laRSAvLyAjIG9mIHZhbHVlcyBuZWVkZWQgKiBpdGVtIHNpemVcXG4gICAgICApO1xcbiAgICAgIGNvbnN0cmFpbnRyZXBvcnRbMF0gPSBNRVNTQUdFX1RZUEVTLkNPTlNUUkFJTlRSRVBPUlQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHtcXG4gICAgdmFyIG9mZnNldCA9IDAsXFxuICAgICAgICBpID0gMCxcXG4gICAgICAgIGluZGV4ID0gX2NvbnN0cmFpbnRzLmxlbmdodDtcXG5cXG4gICAgd2hpbGUgKGluZGV4LS0pIHtcXG4gICAgICBpZiAoX2NvbnN0cmFpbnRzW2luZGV4XSkge1xcbiAgICAgICAgdmFyIF9jb25zdHJhaW50ID0gX2NvbnN0cmFpbnRzW2luZGV4XTtcXG4gICAgICAgIHZhciBvZmZzZXRfYm9keSA9IF9jb25zdHJhaW50LmE7XFxuICAgICAgICB2YXIgdHJhbnNmb3JtID0gX2NvbnN0cmFpbnQudGE7XFxuICAgICAgICB2YXIgb3JpZ2luID0gdHJhbnNmb3JtLmdldE9yaWdpbigpO1xcblxcbiAgICAgICAgLy8gYWRkIHZhbHVlcyB0byByZXBvcnRcXG4gICAgICAgIG9mZnNldCA9IDEgKyBpKysgKiBDT05TVFJBSU5UUkVQT1JUX0lURU1TSVpFO1xcblxcbiAgICAgICAgY29uc3RyYWludHJlcG9ydFtvZmZzZXRdID0gaW5kZXg7XFxuICAgICAgICBjb25zdHJhaW50cmVwb3J0W29mZnNldCArIDFdID0gb2Zmc2V0X2JvZHkuaWQ7XFxuICAgICAgICBjb25zdHJhaW50cmVwb3J0W29mZnNldCArIDJdID0gb3JpZ2luLng7XFxuICAgICAgICBjb25zdHJhaW50cmVwb3J0W29mZnNldCArIDNdID0gb3JpZ2luLnk7XFxuICAgICAgICBjb25zdHJhaW50cmVwb3J0W29mZnNldCArIDRdID0gb3JpZ2luLno7XFxuICAgICAgICBjb25zdHJhaW50cmVwb3J0W29mZnNldCArIDVdID0gX2NvbnN0cmFpbnQuZ2V0QnJlYWtpbmdJbXB1bHNlVGhyZXNob2xkKCk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGlmIChTVVBQT1JUX1RSQU5TRkVSQUJMRSAmJiBpICE9PSAwKSB0cmFuc2ZlcmFibGVNZXNzYWdlKGNvbnN0cmFpbnRyZXBvcnQuYnVmZmVyLCBbY29uc3RyYWludHJlcG9ydC5idWZmZXJdKTtlbHNlIGlmIChpICE9PSAwKSB0cmFuc2ZlcmFibGVNZXNzYWdlKGNvbnN0cmFpbnRyZXBvcnQpO1xcbiAgfVxcbn07XFxuXFxuc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcXG4gIGlmIChldmVudC5kYXRhIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XFxuICAgIC8vIHRyYW5zZmVyYWJsZSBvYmplY3RcXG4gICAgc3dpdGNoIChldmVudC5kYXRhWzBdKSB7XFxuICAgICAgY2FzZSBNRVNTQUdFX1RZUEVTLldPUkxEUkVQT1JUOlxcbiAgICAgICAge1xcbiAgICAgICAgICB3b3JsZHJlcG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoZXZlbnQuZGF0YSk7XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgfVxcbiAgICAgIGNhc2UgTUVTU0FHRV9UWVBFUy5DT0xMSVNJT05SRVBPUlQ6XFxuICAgICAgICB7XFxuICAgICAgICAgIGNvbGxpc2lvbnJlcG9ydCA9IG5ldyBGbG9hdDMyQXJyYXkoZXZlbnQuZGF0YSk7XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgfVxcbiAgICAgIGNhc2UgTUVTU0FHRV9UWVBFUy5WRUhJQ0xFUkVQT1JUOlxcbiAgICAgICAge1xcbiAgICAgICAgICB2ZWhpY2xlcmVwb3J0ID0gbmV3IEZsb2F0MzJBcnJheShldmVudC5kYXRhKTtcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICB9XFxuICAgICAgY2FzZSBNRVNTQUdFX1RZUEVTLkNPTlNUUkFJTlRSRVBPUlQ6XFxuICAgICAgICB7XFxuICAgICAgICAgIGNvbnN0cmFpbnRyZXBvcnQgPSBuZXcgRmxvYXQzMkFycmF5KGV2ZW50LmRhdGEpO1xcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIH1cXG4gICAgICBkZWZhdWx0OlxcbiAgICB9XFxuXFxuICAgIHJldHVybjtcXG4gIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5jbWQgJiYgcHVibGljX2Z1bmN0aW9uc1tldmVudC5kYXRhLmNtZF0pIHB1YmxpY19mdW5jdGlvbnNbZXZlbnQuZGF0YS5jbWRdKGV2ZW50LmRhdGEucGFyYW1zKTtcXG59O1xcblxcbi8qKiovIH1cXG4vKioqKioqLyBdKTtcXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnWkRFeU5UVTNOVGRtT1ROaFpHRTVZbVUwWWpZaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzZHZjbXRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUowY21GdWMyWmxjbUZpYkdWTlpYTnpZV2RsSWl3aWMyVnNaaUlzSW5kbFltdHBkRkJ2YzNSTlpYTnpZV2RsSWl3aWNHOXpkRTFsYzNOaFoyVWlMQ0pOUlZOVFFVZEZYMVJaVUVWVElpd2lWMDlTVEVSU1JWQlBVbFFpTENKRFQweE1TVk5KVDA1U1JWQlBVbFFpTENKV1JVaEpRMHhGVWtWUVQxSlVJaXdpUTA5T1UxUlNRVWxPVkZKRlVFOVNWQ0lzSWxOUFJsUlNSVkJQVWxRaUxDSmZiMkpxWldOMElpd2lYM1psWTNSdmNpSXNJbDkwY21GdWMyWnZjbTBpTENKZmRISmhibk5tYjNKdFgzQnZjeUlzSWw5emIyWjBZbTlrZVY5bGJtRmliR1ZrSWl3aWJHRnpkRjl6YVcxMWJHRjBhVzl1WDJSMWNtRjBhVzl1SWl3aVgyNTFiVjl2WW1wbFkzUnpJaXdpWDI1MWJWOXlhV2RwWkdKdlpIbGZiMkpxWldOMGN5SXNJbDl1ZFcxZmMyOW1kR0p2WkhsZmIySnFaV04wY3lJc0lsOXVkVzFmZDJobFpXeHpJaXdpWDI1MWJWOWpiMjV6ZEhKaGFXNTBjeUlzSWw5emIyWjBZbTlrZVY5eVpYQnZjblJmYzJsNlpTSXNJbVpwZUdWa1ZHbHRaVk4wWlhBaUxDSnNZWE4wWDNOcGJYVnNZWFJwYjI1ZmRHbHRaU0lzSW5kdmNteGtJaXdpWDNabFl6TmZNU0lzSWw5MlpXTXpYeklpTENKZmRtVmpNMTh6SWl3aVgzRjFZWFFpTENKd2RXSnNhV05mWm5WdVkzUnBiMjV6SWl3aVgyOWlhbVZqZEhNaUxDSmZkbVZvYVdOc1pYTWlMQ0pmWTI5dWMzUnlZV2x1ZEhNaUxDSmZiMkpxWldOMGMxOWhiVzF2SWl3aVgyOWlhbVZqZEY5emFHRndaWE1pTENKZmJXOTBhVzl1WDNOMFlYUmxjeUlzSWw5dWIyNWpZV05vWldSZmMyaGhjR1Z6SWl3aVgyTnZiWEJ2ZFc1a1gzTm9ZWEJsY3lJc0lsSkZVRTlTVkY5RFNGVk9TMU5KV2tVaUxDSjNiM0pzWkhKbGNHOXlkQ0lzSW5OdlpuUnlaWEJ2Y25RaUxDSmpiMnhzYVhOcGIyNXlaWEJ2Y25RaUxDSjJaV2hwWTJ4bGNtVndiM0owSWl3aVkyOXVjM1J5WVdsdWRISmxjRzl5ZENJc0lsZFBVa3hFVWtWUVQxSlVYMGxVUlUxVFNWcEZJaXdpUTA5TVRFbFRTVTlPVWtWUVQxSlVYMGxVUlUxVFNWcEZJaXdpVmtWSVNVTk1SVkpGVUU5U1ZGOUpWRVZOVTBsYVJTSXNJa05QVGxOVVVrRkpUbFJTUlZCUFVsUmZTVlJGVFZOSldrVWlMQ0poWWlJc0lrRnljbUY1UW5WbVptVnlJaXdpVTFWUVVFOVNWRjlVVWtGT1UwWkZVa0ZDVEVVaUxDSmllWFJsVEdWdVozUm9JaXdpWjJWMFUyaGhjR1ZHY205dFEyRmphR1VpTENKallXTm9aVjlyWlhraUxDSjFibVJsWm1sdVpXUWlMQ0p6WlhSVGFHRndaVU5oWTJobElpd2ljMmhoY0dVaUxDSmpjbVZoZEdWVGFHRndaU0lzSW1SbGMyTnlhWEIwYVc5dUlpd2ljMlYwU1dSbGJuUnBkSGtpTENKMGVYQmxJaXdpYm05eWJXRnNJaXdpZUNJc0lua2lMQ0o2SWl3aWMyVjBXQ0lzSW5ObGRGa2lMQ0p6WlhSYUlpd2lRVzF0YnlJc0ltSjBVM1JoZEdsalVHeGhibVZUYUdGd1pTSXNJbmRwWkhSb0lpd2lhR1ZwWjJoMElpd2laR1Z3ZEdnaUxDSmlkRUp2ZUZOb1lYQmxJaXdpY21Ga2FYVnpJaXdpWW5SVGNHaGxjbVZUYUdGd1pTSXNJbUowUTNsc2FXNWtaWEpUYUdGd1pTSXNJbUowUTJGd2MzVnNaVk5vWVhCbElpd2lZblJEYjI1bFUyaGhjR1VpTENKMGNtbGhibWRzWlY5dFpYTm9JaXdpWW5SVWNtbGhibWRzWlUxbGMyZ2lMQ0prWVhSaElpd2liR1Z1WjNSb0lpd2lhU0lzSW1Ga1pGUnlhV0Z1WjJ4bElpd2lZblJDZG1oVWNtbGhibWRzWlUxbGMyaFRhR0Z3WlNJc0ltbGtJaXdpWW5SRGIyNTJaWGhJZFd4c1UyaGhjR1VpTENKaFpHUlFiMmx1ZENJc0luaHdkSE1pTENKNWNIUnpJaXdpY0c5cGJuUnpJaXdpY0hSeUlpd2lYMjFoYkd4dll5SXNJbkFpTENKd01pSXNJbW9pTENKSVJVRlFSak15SWl3aVluUklaV2xuYUhSbWFXVnNaRlJsY25KaGFXNVRhR0Z3WlNJc0ltRmljMDFoZUVobGFXZG9kQ0lzSW5oemFYcGxJaXdpZVhOcGVtVWlMQ0p6WlhSTWIyTmhiRk5qWVd4cGJtY2lMQ0pqY21WaGRHVlRiMlowUW05a2VTSXNJbUp2WkhraUxDSnpiMlowUW05a2VVaGxiSEJsY25NaUxDSmlkRk52Wm5SQ2IyUjVTR1ZzY0dWeWN5SXNJbUZXWlhKMGFXTmxjeUlzSWtOeVpXRjBaVVp5YjIxVWNtbE5aWE5vSWl3aVoyVjBWMjl5YkdSSmJtWnZJaXdpWVVsdVpHbGpaWE1pTENKamNpSXNJbU52Y201bGNuTWlMQ0pEY21WaGRHVlFZWFJqYUNJc0ltSjBWbVZqZEc5eU15SXNJbk5sWjIxbGJuUnpJaXdpUTNKbFlYUmxVbTl3WlNJc0ltbHVhWFFpTENKd1lYSmhiWE1pTENKM1lYTnRRblZtWm1WeUlpd2lhVzF3YjNKMFUyTnlhWEIwY3lJc0ltRnRiVzhpTENKc2IyRmtRVzF0YjBaeWIyMUNhVzVoY25raUxDSmpiV1FpTENKdFlXdGxWMjl5YkdRaUxDSmlkRlJ5WVc1elptOXliU0lzSW1KMFVYVmhkR1Z5Ym1sdmJpSXNJbkpsY0c5eWRITnBlbVVpTENKR2JHOWhkRE15UVhKeVlYa2lMQ0pqYjJ4c2FYTnBiMjVEYjI1bWFXZDFjbUYwYVc5dUlpd2ljMjltZEdKdlpIa2lMQ0ppZEZOdlpuUkNiMlI1VW1sbmFXUkNiMlI1UTI5c2JHbHphVzl1UTI5dVptbG5kWEpoZEdsdmJpSXNJbUowUkdWbVlYVnNkRU52Ykd4cGMybHZia052Ym1acFozVnlZWFJwYjI0aUxDSmthWE53WVhSamFHVnlJaXdpWW5SRGIyeHNhWE5wYjI1RWFYTndZWFJqYUdWeUlpd2ljMjlzZG1WeUlpd2lZblJUWlhGMVpXNTBhV0ZzU1cxd2RXeHpaVU52Ym5OMGNtRnBiblJUYjJ4MlpYSWlMQ0ppY205aFpIQm9ZWE5sSWl3aVlXRmlZbTFwYmlJc0ltRmhZbUp0WVhnaUxDSmlkRUY0YVhOVGQyVmxjRE1pTENKaWRFUmlkblJDY205aFpIQm9ZWE5sSWl3aVluUlRiMlowVW1sbmFXUkVlVzVoYldsamMxZHZjbXhrSWl3aVluUkVaV1poZFd4MFUyOW1kRUp2WkhsVGIyeDJaWElpTENKaWRFUnBjMk55WlhSbFJIbHVZVzFwWTNOWGIzSnNaQ0lzSW5ObGRFWnBlR1ZrVkdsdFpWTjBaWEFpTENKelpYUkhjbUYyYVhSNUlpd2lZWEJ3Wlc1a1FXNWphRzl5SWl3aWIySnFJaXdpYm05a1pTSXNJbTlpYWpJaUxDSmpiMnhzYVhOcGIyNUNaWFIzWldWdVRHbHVhMlZrUW05a2FXVnpJaXdpYVc1bWJIVmxibU5sSWl3aVlXUmtUMkpxWldOMElpd2liVzkwYVc5dVUzUmhkR1VpTENKcGJtUmxlRTltSWl3aWMySkRiMjVtYVdjaUxDSm5aWFJmYlY5alptY2lMQ0oyYVhSbGNtRjBhVzl1Y3lJc0luTmxkRjkyYVhSbGNtRjBhVzl1Y3lJc0luQnBkR1Z5WVhScGIyNXpJaXdpYzJWMFgzQnBkR1Z5WVhScGIyNXpJaXdpWkdsMFpYSmhkR2x2Ym5NaUxDSnpaWFJmWkdsMFpYSmhkR2x2Ym5NaUxDSmphWFJsY21GMGFXOXVjeUlzSW5ObGRGOWphWFJsY21GMGFXOXVjeUlzSW5ObGRGOWpiMnhzYVhOcGIyNXpJaXdpYzJWMFgydEVSaUlzSW1aeWFXTjBhVzl1SWl3aWMyVjBYMnRFVUNJc0ltUmhiWEJwYm1jaUxDSndjbVZ6YzNWeVpTSXNJbk5sZEY5clVGSWlMQ0prY21Gbklpd2ljMlYwWDJ0RVJ5SXNJbXhwWm5RaUxDSnpaWFJmYTB4R0lpd2lZVzVqYUc5eVNHRnlaRzVsYzNNaUxDSnpaWFJmYTBGSVVpSXNJbkpwWjJsa1NHRnlaRzVsYzNNaUxDSnpaWFJmYTBOSVVpSXNJbXRzYzNRaUxDSm5aWFJmYlY5dFlYUmxjbWxoYkhNaUxDSmhkQ0lzSW5ObGRGOXRYMnRNVTFRaUxDSnJZWE4wSWl3aWMyVjBYMjFmYTBGVFZDSXNJbXQyYzNRaUxDSnpaWFJmYlY5clZsTlVJaXdpWTJGemRFOWlhbVZqZENJc0ltSjBRMjlzYkdsemFXOXVUMkpxWldOMElpd2laMlYwUTI5c2JHbHphVzl1VTJoaGNHVWlMQ0p6WlhSTllYSm5hVzRpTENKdFlYSm5hVzRpTENKelpYUkJZM1JwZG1GMGFXOXVVM1JoZEdVaUxDSnpkR0YwWlNJc0luSnZjR1VpTENKamJHOTBhQ0lzSW5CdmMybDBhVzl1SWl3aWMyVjBUM0pwWjJsdUlpd2ljbTkwWVhScGIyNGlMQ0p6WlhSWElpd2lkeUlzSW5ObGRGSnZkR0YwYVc5dUlpd2lkSEpoYm5ObWIzSnRJaXdpYzJWMFZHOTBZV3hOWVhOeklpd2liV0Z6Y3lJc0ltRmtaRk52Wm5SQ2IyUjVJaXdpWjJWMFgyMWZabUZqWlhNaUxDSnphWHBsSWl3aVoyVjBYMjFmYm05a1pYTWlMQ0pqYUdsc1pISmxiaUlzSW1OdmJYQnZkVzVrWDNOb1lYQmxJaXdpWW5SRGIyMXdiM1Z1WkZOb1lYQmxJaXdpWVdSa1EyaHBiR1JUYUdGd1pTSXNJbDlqYUdsc1pDSXNJblJ5WVc1eklpd2ljRzl6YVhScGIyNWZiMlptYzJWMElpd2laR1Z6ZEhKdmVTSXNJbk5qWVd4bElpd2lZMkZzWTNWc1lYUmxURzlqWVd4SmJtVnlkR2xoSWl3aVluUkVaV1poZFd4MFRXOTBhVzl1VTNSaGRHVWlMQ0p5WWtsdVptOGlMQ0ppZEZKcFoybGtRbTlrZVVOdmJuTjBjblZqZEdsdmJrbHVabThpTENKelpYUmZiVjltY21samRHbHZiaUlzSW5ObGRGOXRYM0psYzNScGRIVjBhVzl1SWl3aWNtVnpkR2wwZFhScGIyNGlMQ0p6WlhSZmJWOXNhVzVsWVhKRVlXMXdhVzVuSWl3aWMyVjBYMjFmWVc1bmRXeGhja1JoYlhCcGJtY2lMQ0ppZEZKcFoybGtRbTlrZVNJc0ltTnZiR3hwYzJsdmJsOW1iR0ZuY3lJc0luTmxkRU52Ykd4cGMybHZia1pzWVdkeklpd2laM0p2ZFhBaUxDSnRZWE5ySWl3aVlXUmtVbWxuYVdSQ2IyUjVJaXdpWVdOMGFYWmhkR1VpTENKaElpd2lZV1JrVm1Wb2FXTnNaU0lzSW5abGFHbGpiR1ZmZEhWdWFXNW5JaXdpWW5SV1pXaHBZMnhsVkhWdWFXNW5JaXdpYzJWMFgyMWZjM1Z6Y0dWdWMybHZibE4wYVdabWJtVnpjeUlzSW5OMWMzQmxibk5wYjI1ZmMzUnBabVp1WlhOeklpd2ljMlYwWDIxZmMzVnpjR1Z1YzJsdmJrTnZiWEJ5WlhOemFXOXVJaXdpYzNWemNHVnVjMmx2Ymw5amIyMXdjbVZ6YzJsdmJpSXNJbk5sZEY5dFgzTjFjM0JsYm5OcGIyNUVZVzF3YVc1bklpd2ljM1Z6Y0dWdWMybHZibDlrWVcxd2FXNW5JaXdpYzJWMFgyMWZiV0Y0VTNWemNHVnVjMmx2YmxSeVlYWmxiRU50SWl3aWJXRjRYM04xYzNCbGJuTnBiMjVmZEhKaGRtVnNJaXdpYzJWMFgyMWZiV0Y0VTNWemNHVnVjMmx2YmtadmNtTmxJaXdpYldGNFgzTjFjM0JsYm5OcGIyNWZabTl5WTJVaUxDSjJaV2hwWTJ4bElpd2lZblJTWVhsallYTjBWbVZvYVdOc1pTSXNJbkpwWjJsa1FtOWtlU0lzSW1KMFJHVm1ZWFZzZEZabGFHbGpiR1ZTWVhsallYTjBaWElpTENKMGRXNXBibWNpTENKelpYUkRiMjl5WkdsdVlYUmxVM2x6ZEdWdElpd2ljbVZ0YjNabFZtVm9hV05zWlNJc0ltRmtaRmRvWldWc0lpd2lZMjl1Ym1WamRHbHZibDl3YjJsdWRDSXNJbmRvWldWc1gyUnBjbVZqZEdsdmJpSXNJbmRvWldWc1gyRjRiR1VpTENKemRYTndaVzV6YVc5dVgzSmxjM1JmYkdWdVozUm9JaXdpZDJobFpXeGZjbUZrYVhWeklpd2lhWE5mWm5KdmJuUmZkMmhsWld3aUxDSnpaWFJUZEdWbGNtbHVaeUlzSW1SbGRHRnBiSE1pTENKelpYUlRkR1ZsY21sdVoxWmhiSFZsSWl3aWMzUmxaWEpwYm1jaUxDSjNhR1ZsYkNJc0luTmxkRUp5WVd0bElpd2lZbkpoYTJVaUxDSmhjSEJzZVVWdVoybHVaVVp2Y21ObElpd2labTl5WTJVaUxDSnlaVzF2ZG1WUFltcGxZM1FpTENKeVpXMXZkbVZUYjJaMFFtOWtlU0lzSW5KbGJXOTJaVkpwWjJsa1FtOWtlU0lzSW5Wd1pHRjBaVlJ5WVc1elptOXliU0lzSW1kbGRFMXZkR2x2YmxOMFlYUmxJaXdpWjJWMFYyOXliR1JVY21GdWMyWnZjbTBpTENKd2IzTWlMQ0p4ZFdGMElpd2ljMlYwVjI5eWJHUlVjbUZ1YzJadmNtMGlMQ0oxY0dSaGRHVk5ZWE56SWl3aWMyVjBUV0Z6YzFCeWIzQnpJaXdpWVhCd2JIbERaVzUwY21Gc1NXMXdkV3h6WlNJc0ltRndjR3g1U1cxd2RXeHpaU0lzSW1sdGNIVnNjMlZmZUNJc0ltbHRjSFZzYzJWZmVTSXNJbWx0Y0hWc2MyVmZlaUlzSW1Gd2NHeDVWRzl5Y1hWbElpd2lkRzl5Y1hWbFgzZ2lMQ0owYjNKeGRXVmZlU0lzSW5SdmNuRjFaVjk2SWl3aVlYQndiSGxEWlc1MGNtRnNSbTl5WTJVaUxDSmhjSEJzZVVadmNtTmxJaXdpWm05eVkyVmZlQ0lzSW1admNtTmxYM2tpTENKbWIzSmpaVjk2SWl3aWIyNVRhVzExYkdGMGFXOXVVbVZ6ZFcxbElpd2lSR0YwWlNJc0ltNXZkeUlzSW5ObGRFRnVaM1ZzWVhKV1pXeHZZMmwwZVNJc0luTmxkRXhwYm1WaGNsWmxiRzlqYVhSNUlpd2ljMlYwUVc1bmRXeGhja1poWTNSdmNpSXNJbk5sZEV4cGJtVmhja1poWTNSdmNpSXNJbk5sZEVSaGJYQnBibWNpTENKc2FXNWxZWElpTENKaGJtZDFiR0Z5SWl3aWMyVjBRMk5rVFc5MGFXOXVWR2h5WlhOb2IyeGtJaXdpZEdoeVpYTm9iMnhrSWl3aWMyVjBRMk5rVTNkbGNIUlRjR2hsY21WU1lXUnBkWE1pTENKaFpHUkRiMjV6ZEhKaGFXNTBJaXdpWTI5dWMzUnlZV2x1ZENJc0ltOWlhbVZqZEdJaUxDSndiM05wZEdsdmJtRWlMQ0ppZEZCdmFXNTBNbEJ2YVc1MFEyOXVjM1J5WVdsdWRDSXNJbTlpYW1WamRHRWlMQ0p3YjNOcGRHbHZibUlpTENKaGVHbHpJaXdpWW5SSWFXNW5aVU52Ym5OMGNtRnBiblFpTENKMGNtRnVjMlp2Y20xaUlpd2lkSEpoYm5ObWIzSnRZU0lzSW1kbGRGSnZkR0YwYVc5dUlpd2ljMlYwUlhWc1pYSWlMQ0ppZEZOc2FXUmxja052Ym5OMGNtRnBiblFpTENKMFlTSXNJblJpSWl3aWMyVjBSWFZzWlhKYVdWZ2lMQ0poZUdsellTSXNJbUY0YVhOaUlpd2lZblJEYjI1bFZIZHBjM1JEYjI1emRISmhhVzUwSWl3aWMyVjBUR2x0YVhRaUxDSk5ZWFJvSWl3aVVFa2lMQ0ppZEVkbGJtVnlhV00yUkc5bVEyOXVjM1J5WVdsdWRDSXNJbUlpTENKbGJtRmliR1ZHWldWa1ltRmpheUlzSW5KbGJXOTJaVU52Ym5OMGNtRnBiblFpTENKamIyNXpkSEpoYVc1MFgzTmxkRUp5WldGcmFXNW5TVzF3ZFd4elpWUm9jbVZ6YUc5c1pDSXNJblZ1WkdWbWFXNWtJaXdpYzJWMFFuSmxZV3RwYm1kSmJYQjFiSE5sVkdoeVpYTm9iMnhrSWl3aWMybHRkV3hoZEdVaUxDSjBhVzFsVTNSbGNDSXNJbTFoZUZOMVlsTjBaWEJ6SWl3aVkyVnBiQ0lzSW5OMFpYQlRhVzExYkdGMGFXOXVJaXdpY21Wd2IzSjBWbVZvYVdOc1pYTWlMQ0p5WlhCdmNuUkRiMnhzYVhOcGIyNXpJaXdpY21Wd2IzSjBRMjl1YzNSeVlXbHVkSE1pTENKeVpYQnZjblJYYjNKc1pDSXNJbkpsY0c5eWRGZHZjbXhrWDNOdlpuUmliMlJwWlhNaUxDSm9hVzVuWlY5elpYUk1hVzFwZEhNaUxDSnNiM2NpTENKb2FXZG9JaXdpWW1saGMxOW1ZV04wYjNJaUxDSnlaV3hoZUdGMGFXOXVYMlpoWTNSdmNpSXNJbWhwYm1kbFgyVnVZV0pzWlVGdVozVnNZWEpOYjNSdmNpSXNJbVZ1WVdKc1pVRnVaM1ZzWVhKTmIzUnZjaUlzSW5abGJHOWphWFI1SWl3aVlXTmpaV3hsY21GMGFXOXVJaXdpYUdsdVoyVmZaR2x6WVdKc1pVMXZkRzl5SWl3aVpXNWhZbXhsVFc5MGIzSWlMQ0p6Ykdsa1pYSmZjMlYwVEdsdGFYUnpJaXdpYzJWMFRHOTNaWEpNYVc1TWFXMXBkQ0lzSW14cGJsOXNiM2RsY2lJc0luTmxkRlZ3Y0dWeVRHbHVUR2x0YVhRaUxDSnNhVzVmZFhCd1pYSWlMQ0p6WlhSTWIzZGxja0Z1WjB4cGJXbDBJaXdpWVc1blgyeHZkMlZ5SWl3aWMyVjBWWEJ3WlhKQmJtZE1hVzFwZENJc0ltRnVaMTkxY0hCbGNpSXNJbk5zYVdSbGNsOXpaWFJTWlhOMGFYUjFkR2x2YmlJc0luTmxkRk52Wm5SdVpYTnpUR2x0VEdsdUlpd2ljMlYwVTI5bWRHNWxjM05NYVcxQmJtY2lMQ0p6Ykdsa1pYSmZaVzVoWW14bFRHbHVaV0Z5VFc5MGIzSWlMQ0p6WlhSVVlYSm5aWFJNYVc1TmIzUnZjbFpsYkc5amFYUjVJaXdpYzJWMFRXRjRUR2x1VFc5MGIzSkdiM0pqWlNJc0luTmxkRkJ2ZDJWeVpXUk1hVzVOYjNSdmNpSXNJbk5zYVdSbGNsOWthWE5oWW14bFRHbHVaV0Z5VFc5MGIzSWlMQ0p6Ykdsa1pYSmZaVzVoWW14bFFXNW5kV3hoY2sxdmRHOXlJaXdpYzJWMFZHRnlaMlYwUVc1blRXOTBiM0pXWld4dlkybDBlU0lzSW5ObGRFMWhlRUZ1WjAxdmRHOXlSbTl5WTJVaUxDSnpaWFJRYjNkbGNtVmtRVzVuVFc5MGIzSWlMQ0p6Ykdsa1pYSmZaR2x6WVdKc1pVRnVaM1ZzWVhKTmIzUnZjaUlzSW1OdmJtVjBkMmx6ZEY5elpYUk1hVzFwZENJc0ltTnZibVYwZDJsemRGOWxibUZpYkdWTmIzUnZjaUlzSW1OdmJtVjBkMmx6ZEY5elpYUk5ZWGhOYjNSdmNrbHRjSFZzYzJVaUxDSnpaWFJOWVhoTmIzUnZja2x0Y0hWc2MyVWlMQ0p0WVhoZmFXMXdkV3h6WlNJc0ltTnZibVYwZDJsemRGOXpaWFJOYjNSdmNsUmhjbWRsZENJc0luTmxkRTF2ZEc5eVZHRnlaMlYwSWl3aVkyOXVaWFIzYVhOMFgyUnBjMkZpYkdWTmIzUnZjaUlzSW1SdlpsOXpaWFJNYVc1bFlYSk1iM2RsY2t4cGJXbDBJaXdpYzJWMFRHbHVaV0Z5VEc5M1pYSk1hVzFwZENJc0ltUnZabDl6WlhSTWFXNWxZWEpWY0hCbGNreHBiV2wwSWl3aWMyVjBUR2x1WldGeVZYQndaWEpNYVcxcGRDSXNJbVJ2Wmw5elpYUkJibWQxYkdGeVRHOTNaWEpNYVcxcGRDSXNJbk5sZEVGdVozVnNZWEpNYjNkbGNreHBiV2wwSWl3aVpHOW1YM05sZEVGdVozVnNZWEpWY0hCbGNreHBiV2wwSWl3aWMyVjBRVzVuZFd4aGNsVndjR1Z5VEdsdGFYUWlMQ0prYjJaZlpXNWhZbXhsUVc1bmRXeGhjazF2ZEc5eUlpd2liVzkwYjNJaUxDSm5aWFJTYjNSaGRHbHZibUZzVEdsdGFYUk5iM1J2Y2lJc0luZG9hV05vSWl3aWMyVjBYMjFmWlc1aFlteGxUVzkwYjNJaUxDSmtiMlpmWTI5dVptbG5kWEpsUVc1bmRXeGhjazF2ZEc5eUlpd2ljMlYwWDIxZmJHOU1hVzFwZENJc0lteHZkMTloYm1kc1pTSXNJbk5sZEY5dFgyaHBUR2x0YVhRaUxDSm9hV2RvWDJGdVoyeGxJaXdpYzJWMFgyMWZkR0Z5WjJWMFZtVnNiMk5wZEhraUxDSnpaWFJmYlY5dFlYaE5iM1J2Y2tadmNtTmxJaXdpYldGNFgyWnZjbU5sSWl3aVpHOW1YMlJwYzJGaWJHVkJibWQxYkdGeVRXOTBiM0lpTENKcGJtUmxlQ0lzSW05aWFtVmpkQ0lzSW1kbGRFTmxiblJsY2s5bVRXRnpjMVJ5WVc1elptOXliU0lzSW05eWFXZHBiaUlzSW1kbGRFOXlhV2RwYmlJc0ltOW1abk5sZENJc0ltZGxkRXhwYm1WaGNsWmxiRzlqYVhSNUlpd2laMlYwUVc1bmRXeGhjbFpsYkc5amFYUjVJaXdpWW5WbVptVnlJaXdpYjJabWMyVjBWbVZ5ZENJc0ltNXZaR1Z6SWl3aWRtVnlkQ0lzSW1kbGRGOXRYM2dpTENKdlptWWlMQ0puWlhSZmJWOXVJaXdpWm1GalpYTWlMQ0ptWVdObElpd2libTlrWlRFaUxDSnViMlJsTWlJc0ltNXZaR1V6SWl3aWRtVnlkREVpTENKMlpYSjBNaUlzSW5abGNuUXpJaXdpYm05eWJXRnNNU0lzSW01dmNtMWhiRElpTENKdWIzSnRZV3d6SWl3aVpIQWlMQ0puWlhSRWFYTndZWFJqYUdWeUlpd2liblZ0SWl3aVoyVjBUblZ0VFdGdWFXWnZiR1J6SWl3aWJXRnVhV1p2YkdRaUxDSm5aWFJOWVc1cFptOXNaRUo1U1c1a1pYaEpiblJsY201aGJDSXNJbTUxYlY5amIyNTBZV04wY3lJc0ltZGxkRTUxYlVOdmJuUmhZM1J6SWl3aWNIUWlMQ0puWlhSRGIyNTBZV04wVUc5cGJuUWlMQ0puWlhSQ2IyUjVNQ0lzSW1kbGRFSnZaSGt4SWl3aVoyVjBYMjFmYm05eWJXRnNWMjl5YkdSUGJrSWlMQ0puWlhST2RXMVhhR1ZsYkhNaUxDSm5aWFJYYUdWbGJFbHVabThpTENKblpYUmZiVjkzYjNKc1pGUnlZVzV6Wm05eWJTSXNJbXhsYm1kb2RDSXNJbTltWm5ObGRGOWliMlI1SWl3aVoyVjBRbkpsWVd0cGJtZEpiWEIxYkhObFZHaHlaWE5vYjJ4a0lpd2liMjV0WlhOellXZGxJaXdpWlhabGJuUWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzYlVSQlFUSkRMR05CUVdNN08wRkJSWHBFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN096czdPenRCUTJoRlFTeEpRVUZOUVN4elFrRkJjMEpETEV0QlFVdERMR2xDUVVGTUxFbEJRVEJDUkN4TFFVRkxSU3hYUVVFelJEczdPMEZCUlVVN1FVRkRRVU1zWjBKQlFXZENPMEZCUTJSRExHVkJRV0VzUTBGRVF6dEJRVVZrUXl4dFFrRkJhVUlzUTBGR1NEdEJRVWRrUXl4cFFrRkJaU3hEUVVoRU8wRkJTV1JETEc5Q1FVRnJRaXhEUVVwS08wRkJTMlJETEdOQlFWazdRVUZNUlN4RFFVaHNRanM3UVVGWFJUdEJRVU5HTEVsQlFVbERMR2RDUVVGS08wRkJRVUVzU1VGRFJVTXNaMEpCUkVZN1FVRkJRU3hKUVVWRlF5eHRRa0ZHUmp0QlFVRkJMRWxCUjBWRExIVkNRVWhHTzBGQlFVRXNTVUZKUlVNc2IwSkJRVzlDTEV0QlNuUkNPMEZCUVVFc1NVRkxSVU1zTWtKQlFUSkNMRU5CVERkQ08wRkJRVUVzU1VGUFJVTXNaVUZCWlN4RFFWQnFRanRCUVVGQkxFbEJVVVZETEhsQ1FVRjVRaXhEUVZJelFqdEJRVUZCTEVsQlUwVkRMSGRDUVVGM1FpeERRVlF4UWp0QlFVRkJMRWxCVlVWRExHTkJRV01zUTBGV2FFSTdRVUZCUVN4SlFWZEZReXh0UWtGQmJVSXNRMEZZY2tJN1FVRkJRU3hKUVZsRlF5eDNRa0ZCZDBJc1EwRmFNVUk3T3p0QlFXTkZPMEZCUTBGRExITkNRV1pHTzBGQlFVRXNTVUZsYVVJN1FVRkRaa01zTmtKQmFFSkdPMEZCUVVFc1NVRnJRa1ZETEdOQmJFSkdPMEZCUVVFc1NVRnRRa1ZETEdkQ1FXNUNSanRCUVVGQkxFbEJiMEpGUXl4blFrRndRa1k3UVVGQlFTeEpRWEZDUlVNc1owSkJja0pHTzBGQlFVRXNTVUZ6UWtWRExHTkJkRUpHT3p0QlFYZENSVHRCUVVOR0xFbEJRVTFETEcxQ1FVRnRRaXhGUVVGNlFqdEJRVUZCTEVsQlEwVkRMRmRCUVZjc1JVRkVZanRCUVVGQkxFbEJSVVZETEZsQlFWa3NSVUZHWkR0QlFVRkJMRWxCUjBWRExHVkJRV1VzUlVGSWFrSTdRVUZCUVN4SlFVbEZReXhuUWtGQlowSXNSVUZLYkVJN1FVRkJRU3hKUVV0RlF5eHBRa0ZCYVVJc1JVRk1ia0k3T3p0QlFVOUZPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEZETEdsQ1FVRnBRaXhGUVZodVFqczdRVUZaUlR0QlFVTkJReXh2UWtGQmIwSXNSVUZpZEVJN08wRkJZMFU3UVVGRFFUdEJRVU5CUXl4dFFrRkJiVUlzUlVGb1FuSkNPenRCUVd0Q1JUdEJRVU5HTEVsQlFVbERMSGxDUVVGS08wRkJRVUVzU1VGQmMwSTdRVUZEY0VKRExHOUNRVVJHTzBGQlFVRXNTVUZGUlVNc2JVSkJSa1k3UVVGQlFTeEpRVWRGUXl4M1FrRklSanRCUVVGQkxFbEJTVVZETEhOQ1FVcEdPMEZCUVVFc1NVRkxSVU1zZVVKQlRFWTdPMEZCVDBFc1NVRkJUVU1zZFVKQlFYVkNMRVZCUVRkQ08wRkJRVUVzU1VGQmFVTTdRVUZETDBKRExESkNRVUV5UWl4RFFVUTNRanRCUVVGQkxFbEJRMmRETzBGQlF6bENReXg1UWtGQmVVSXNRMEZHTTBJN1FVRkJRU3hKUVVVNFFqdEJRVU0xUWtNc05FSkJRVFJDTEVOQlNEbENMRU1zUTBGSGFVTTdPMEZCUldwRExFbEJRVTFETEV0QlFVc3NTVUZCU1VNc1YwRkJTaXhEUVVGblFpeERRVUZvUWl4RFFVRllPenRCUVVWQmFrUXNiMEpCUVc5Q1owUXNSVUZCY0VJc1JVRkJkMElzUTBGQlEwRXNSVUZCUkN4RFFVRjRRanRCUVVOQkxFbEJRVTFGTEhWQ1FVRjNRa1lzUjBGQlIwY3NWVUZCU0N4TFFVRnJRaXhEUVVGb1JEczdRVUZGUVN4SlFVRk5ReXh2UWtGQmIwSXNVMEZCY0VKQkxHbENRVUZ2UWl4RFFVRkRReXhUUVVGRUxFVkJRV1U3UVVGRGRrTXNUVUZCU1c1Q0xHVkJRV1Z0UWl4VFFVRm1MRTFCUVRoQ1F5eFRRVUZzUXl4RlFVTkZMRTlCUVU5d1FpeGxRVUZsYlVJc1UwRkJaaXhEUVVGUU96dEJRVVZHTEZOQlFVOHNTVUZCVUR0QlFVTkVMRU5CVEVRN08wRkJUMEVzU1VGQlRVVXNaMEpCUVdkQ0xGTkJRV2hDUVN4aFFVRm5RaXhEUVVGRFJpeFRRVUZFTEVWQlFWbEhMRXRCUVZvc1JVRkJjMEk3UVVGRE1VTjBRaXhwUWtGQlpXMUNMRk5CUVdZc1NVRkJORUpITEV0QlFUVkNPMEZCUTBRc1EwRkdSRHM3UVVGSlFTeEpRVUZOUXl4alFVRmpMRk5CUVdSQkxGZEJRV01zUTBGQlEwTXNWMEZCUkN4RlFVRnBRanRCUVVOdVF5eE5RVUZKUml4alFVRktPenRCUVVWQk5VTXNZVUZCVnl0RExGZEJRVmc3UVVGRFFTeFZRVUZSUkN4WlFVRlpSU3hKUVVGd1FqdEJRVU5GTEZOQlFVc3NUMEZCVER0QlFVRmpPMEZCUTFvc1dVRkJUVkFzZFVKQlFYRkNTeXhaUVVGWlJ5eE5RVUZhTEVOQlFXMUNReXhEUVVGNFF5eFRRVUUyUTBvc1dVRkJXVWNzVFVGQldpeERRVUZ0UWtVc1EwRkJhRVVzVTBGQmNVVk1MRmxCUVZsSExFMUJRVm9zUTBGQmJVSkhMRU5CUVRsR096dEJRVVZCTEZsQlFVa3NRMEZCUTFJc1VVRkJVVW9zYTBKQlFXdENReXhUUVVGc1FpeERRVUZVTEUxQlFUSkRMRWxCUVM5RExFVkJRWEZFTzBGQlEyNUVOVUlzYTBKQlFWRjNReXhKUVVGU0xFTkJRV0ZRTEZsQlFWbEhMRTFCUVZvc1EwRkJiVUpETEVOQlFXaERPMEZCUTBGeVF5eHJRa0ZCVVhsRExFbEJRVklzUTBGQllWSXNXVUZCV1Vjc1RVRkJXaXhEUVVGdFFrVXNRMEZCYUVNN1FVRkRRWFJETEd0Q1FVRlJNRU1zU1VGQlVpeERRVUZoVkN4WlFVRlpSeXhOUVVGYUxFTkJRVzFDUnl4RFFVRm9RenRCUVVOQlVpeHJRa0ZCVVN4SlFVRkpXU3hMUVVGTFF5eHJRa0ZCVkN4RFFVRTBRalZETEU5QlFUVkNMRVZCUVhGRExFTkJRWEpETEVOQlFWSTdRVUZEUVRoQ0xIZENRVUZqUml4VFFVRmtMRVZCUVhsQ1J5eExRVUY2UWp0QlFVTkVPenRCUVVWRU8wRkJRMFE3UVVGRFJDeFRRVUZMTEV0QlFVdzdRVUZCV1R0QlFVTldMRmxCUVUxSUxITkNRVUZ0UWtzc1dVRkJXVmtzUzBGQkwwSXNVMEZCZDBOYUxGbEJRVmxoTEUxQlFYQkVMRk5CUVRoRVlpeFpRVUZaWXl4TFFVRm9SanM3UVVGRlFTeFpRVUZKTEVOQlFVTm9RaXhSUVVGUlNpeHJRa0ZCYTBKRExGVkJRV3hDTEVOQlFWUXNUVUZCTWtNc1NVRkJMME1zUlVGQmNVUTdRVUZEYmtRMVFpeHJRa0ZCVVhkRExFbEJRVklzUTBGQllWQXNXVUZCV1Zrc1MwRkJXaXhIUVVGdlFpeERRVUZxUXp0QlFVTkJOME1zYTBKQlFWRjVReXhKUVVGU0xFTkJRV0ZTTEZsQlFWbGhMRTFCUVZvc1IwRkJjVUlzUTBGQmJFTTdRVUZEUVRsRExHdENRVUZSTUVNc1NVRkJVaXhEUVVGaFZDeFpRVUZaWXl4TFFVRmFMRWRCUVc5Q0xFTkJRV3BETzBGQlEwRm9RaXhyUWtGQlVTeEpRVUZKV1N4TFFVRkxTeXhWUVVGVUxFTkJRVzlDYUVRc1QwRkJjRUlzUTBGQlVqdEJRVU5CT0VJc2QwSkJRV05HTEZWQlFXUXNSVUZCZVVKSExFdEJRWHBDTzBGQlEwUTdPMEZCUlVRN1FVRkRSRHRCUVVORUxGTkJRVXNzVVVGQlREdEJRVUZsTzBGQlEySXNXVUZCVFVnc01FSkJRWE5DU3l4WlFVRlpaMElzVFVGQmVFTTdPMEZCUlVFc1dVRkJTU3hEUVVGRGJFSXNVVUZCVVVvc2EwSkJRV3RDUXl4WFFVRnNRaXhEUVVGVUxFMUJRVEpETEVsQlFTOURMRVZCUVhGRU8wRkJRMjVFUnl4clFrRkJVU3hKUVVGSldTeExRVUZMVHl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1dkQ0xFMUJRVzVETEVOQlFWSTdRVUZEUVc1Q0xIZENRVUZqUml4WFFVRmtMRVZCUVhsQ1J5eExRVUY2UWp0QlFVTkVPenRCUVVWRU8wRkJRMFE3UVVGRFJDeFRRVUZMTEZWQlFVdzdRVUZCYVVJN1FVRkRaaXhaUVVGTlNDdzBRa0ZCZDBKTExGbEJRVmxaTEV0QlFYQkRMRk5CUVRaRFdpeFpRVUZaWVN4TlFVRjZSQ3hUUVVGdFJXSXNXVUZCV1dNc1MwRkJja1k3TzBGQlJVRXNXVUZCU1N4RFFVRkRhRUlzVVVGQlVVb3NhMEpCUVd0Q1F5eFhRVUZzUWl4RFFVRlVMRTFCUVRKRExFbEJRUzlETEVWQlFYRkVPMEZCUTI1RU5VSXNhMEpCUVZGM1F5eEpRVUZTTEVOQlFXRlFMRmxCUVZsWkxFdEJRVm9zUjBGQmIwSXNRMEZCYWtNN1FVRkRRVGRETEd0Q1FVRlJlVU1zU1VGQlVpeERRVUZoVWl4WlFVRlpZU3hOUVVGYUxFZEJRWEZDTEVOQlFXeERPMEZCUTBFNVF5eHJRa0ZCVVRCRExFbEJRVklzUTBGQllWUXNXVUZCV1dNc1MwRkJXaXhIUVVGdlFpeERRVUZxUXp0QlFVTkJhRUlzYTBKQlFWRXNTVUZCU1Zrc1MwRkJTMUVzWlVGQlZDeERRVUY1UW01RUxFOUJRWHBDTEVOQlFWSTdRVUZEUVRoQ0xIZENRVUZqUml4WFFVRmtMRVZCUVhsQ1J5eExRVUY2UWp0QlFVTkVPenRCUVVWRU8wRkJRMFE3UVVGRFJDeFRRVUZMTEZOQlFVdzdRVUZCWjBJN1FVRkRaQ3haUVVGTlNDd3lRa0ZCZFVKTExGbEJRVmxuUWl4TlFVRnVReXhUUVVFMlEyaENMRmxCUVZsaExFMUJRUzlFT3p0QlFVVkJMRmxCUVVrc1EwRkJRMllzVVVGQlVVb3NhMEpCUVd0Q1F5eFhRVUZzUWl4RFFVRlVMRTFCUVRKRExFbEJRUzlETEVWQlFYRkVPMEZCUTI1RU8wRkJRMEZITEd0Q1FVRlJMRWxCUVVsWkxFdEJRVXRUTEdOQlFWUXNRMEZCZDBKdVFpeFpRVUZaWjBJc1RVRkJjRU1zUlVGQk5FTm9RaXhaUVVGWllTeE5RVUZhTEVkQlFYRkNMRWxCUVVsaUxGbEJRVmxuUWl4TlFVRnFSaXhEUVVGU08wRkJRMEZ1UWl4M1FrRkJZMFlzVjBGQlpDeEZRVUY1UWtjc1MwRkJla0k3UVVGRFJEczdRVUZGUkR0QlFVTkVPMEZCUTBRc1UwRkJTeXhOUVVGTU8wRkJRV0U3UVVGRFdDeFpRVUZOU0N4M1FrRkJiMEpMTEZsQlFWbG5RaXhOUVVGb1F5eFRRVUV3UTJoQ0xGbEJRVmxoTEUxQlFUVkVPenRCUVVWQkxGbEJRVWtzUTBGQlEyWXNVVUZCVVVvc2EwSkJRV3RDUXl4WFFVRnNRaXhEUVVGVUxFMUJRVEpETEVsQlFTOURMRVZCUVhGRU8wRkJRMjVFUnl4clFrRkJVU3hKUVVGSldTeExRVUZMVlN4WFFVRlVMRU5CUVhGQ2NFSXNXVUZCV1dkQ0xFMUJRV3BETEVWQlFYbERhRUlzV1VGQldXRXNUVUZCY2tRc1EwRkJVanRCUVVOQmFFSXNkMEpCUVdOR0xGZEJRV1FzUlVGQmVVSkhMRXRCUVhwQ08wRkJRMFE3TzBGQlJVUTdRVUZEUkR0QlFVTkVMRk5CUVVzc1UwRkJURHRCUVVGblFqdEJRVU5rTEZsQlFVMTFRaXhuUWtGQlowSXNTVUZCU1Znc1MwRkJTMWtzWTBGQlZDeEZRVUYwUWp0QlFVTkJMRmxCUVVrc1EwRkJRM1JDTEZsQlFWbDFRaXhKUVVGYUxFTkJRV2xDUXl4TlFVRjBRaXhGUVVFNFFpeFBRVUZQTEV0QlFWQTdRVUZET1VJc1dVRkJUVVFzVDBGQlQzWkNMRmxCUVZsMVFpeEpRVUY2UWpzN1FVRkZRU3hoUVVGTExFbEJRVWxGTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVWXNTMEZCUzBNc1RVRkJUQ3hIUVVGakxFTkJRV3hETEVWQlFYRkRReXhIUVVGeVF5eEZRVUV3UXp0QlFVTjRRekZFTEd0Q1FVRlJkME1zU1VGQlVpeERRVUZoWjBJc1MwRkJTMFVzU1VGQlNTeERRVUZVTEVOQlFXSTdRVUZEUVRGRUxHdENRVUZSZVVNc1NVRkJVaXhEUVVGaFpTeExRVUZMUlN4SlFVRkpMRU5CUVVvc1IwRkJVU3hEUVVGaUxFTkJRV0k3UVVGRFFURkVMR3RDUVVGUk1FTXNTVUZCVWl4RFFVRmhZeXhMUVVGTFJTeEpRVUZKTEVOQlFVb3NSMEZCVVN4RFFVRmlMRU5CUVdJN08wRkJSVUY2UkN4clFrRkJVWFZETEVsQlFWSXNRMEZCWVdkQ0xFdEJRVXRGTEVsQlFVa3NRMEZCU2l4SFFVRlJMRU5CUVdJc1EwRkJZanRCUVVOQmVrUXNhMEpCUVZGM1F5eEpRVUZTTEVOQlFXRmxMRXRCUVV0RkxFbEJRVWtzUTBGQlNpeEhRVUZSTEVOQlFXSXNRMEZCWWp0QlFVTkJla1FzYTBKQlFWRjVReXhKUVVGU0xFTkJRV0ZqTEV0QlFVdEZMRWxCUVVrc1EwRkJTaXhIUVVGUkxFTkJRV0lzUTBGQllqczdRVUZGUVhoRUxHdENRVUZSYzBNc1NVRkJVaXhEUVVGaFowSXNTMEZCUzBVc1NVRkJTU3hEUVVGS0xFZEJRVkVzUTBGQllpeERRVUZpTzBGQlEwRjRSQ3hyUWtGQlVYVkRMRWxCUVZJc1EwRkJZV1VzUzBGQlMwVXNTVUZCU1N4RFFVRktMRWRCUVZFc1EwRkJZaXhEUVVGaU8wRkJRMEY0UkN4clFrRkJVWGRETEVsQlFWSXNRMEZCWVdNc1MwRkJTMFVzU1VGQlNTeERRVUZLTEVkQlFWRXNRMEZCWWl4RFFVRmlPenRCUVVWQlNpeDNRa0ZCWTBzc1YwRkJaQ3hEUVVORk0wUXNUMEZFUml4RlFVVkZReXhQUVVaR0xFVkJSMFZETEU5QlNFWXNSVUZKUlN4TFFVcEdPMEZCVFVRN08wRkJSVVEyUWl4blFrRkJVU3hKUVVGSldTeExRVUZMYVVJc2MwSkJRVlFzUTBGRFRrNHNZVUZFVFN4RlFVVk9MRWxCUmswc1JVRkhUaXhKUVVoTkxFTkJRVkk3TzBGQlRVRXpReXd3UWtGQmEwSnpRaXhaUVVGWk5FSXNSVUZCT1VJc1NVRkJiME01UWl4TFFVRndRenM3UVVGRlFUdEJRVU5FTzBGQlEwUXNVMEZCU3l4UlFVRk1PMEZCUVdVN1FVRkRZa0VzWjBKQlFWRXNTVUZCU1Zrc1MwRkJTMjFDTEdsQ1FVRlVMRVZCUVZJN1FVRkRRU3haUVVGTlRpeFJRVUZQZGtJc1dVRkJXWFZDTEVsQlFYcENPenRCUVVWQkxHRkJRVXNzU1VGQlNVVXNTMEZCU1N4RFFVRmlMRVZCUVdkQ1FTeExRVUZKUml4TlFVRkxReXhOUVVGTUxFZEJRV01zUTBGQmJFTXNSVUZCY1VORExFbEJRWEpETEVWQlFUQkRPMEZCUTNoRE1VUXNhMEpCUVZGM1F5eEpRVUZTTEVOQlFXRm5RaXhOUVVGTFJTeExRVUZKTEVOQlFWUXNRMEZCWWp0QlFVTkJNVVFzYTBKQlFWRjVReXhKUVVGU0xFTkJRV0ZsTEUxQlFVdEZMRXRCUVVrc1EwRkJTaXhIUVVGUkxFTkJRV0lzUTBGQllqdEJRVU5CTVVRc2EwSkJRVkV3UXl4SlFVRlNMRU5CUVdGakxFMUJRVXRGTEV0QlFVa3NRMEZCU2l4SFFVRlJMRU5CUVdJc1EwRkJZanM3UVVGRlFUTkNMR2RDUVVGTlowTXNVVUZCVGl4RFFVRmxMMFFzVDBGQlpqdEJRVU5FT3p0QlFVVkVWeXd3UWtGQmEwSnpRaXhaUVVGWk5FSXNSVUZCT1VJc1NVRkJiME01UWl4TFFVRndRenM3UVVGRlFUdEJRVU5FTzBGQlEwUXNVMEZCU3l4aFFVRk1PMEZCUVc5Q08wRkJRMnhDTEZsQlFVMXBReXhQUVVGUEwwSXNXVUZCV1N0Q0xFbEJRWHBDTzBGQlFVRXNXVUZEUlVNc1QwRkJUMmhETEZsQlFWbG5ReXhKUVVSeVFqdEJRVUZCTEZsQlJVVkRMRk5CUVZOcVF5eFpRVUZaYVVNc1RVRkdka0k3UVVGQlFTeFpRVWRGUXl4TlFVRk5lRUlzUzBGQlMzbENMRTlCUVV3c1EwRkJZU3hKUVVGSlNpeEpRVUZLTEVkQlFWZERMRWxCUVhoQ0xFTkJTRkk3TzBGQlMwRXNZVUZCU3l4SlFVRkpVQ3hOUVVGSkxFTkJRVklzUlVGQlYxY3NTVUZCU1N4RFFVRm1MRVZCUVd0Q1F5eExRVUZMTEVOQlFUVkNMRVZCUVN0Q1dpeE5RVUZKVFN4SlFVRnVReXhGUVVGNVEwNHNTMEZCZWtNc1JVRkJPRU03UVVGRE5VTXNaVUZCU3l4SlFVRkpZU3hKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsT0xFbEJRWEJDTEVWQlFUQkNUU3hIUVVFeFFpeEZRVUVyUWp0QlFVTTNRalZDTEdsQ1FVRkxOa0lzVDBGQlRDeERRVUZoVEN4TlFVRk5SeXhGUVVGT0xFbEJRVmtzUTBGQmVrSXNTVUZCT0VKS0xFOUJRVTlITEVOQlFWQXNRMEZCT1VJN08wRkJSVUZCTzBGQlEwRkRMR3RDUVVGTkxFTkJRVTQ3UVVGRFJEdEJRVU5HT3p0QlFVVkVka01zWjBKQlFWRXNTVUZCU1Zrc1MwRkJTemhDTEhsQ1FVRlVMRU5CUTA1NFF5eFpRVUZaSzBJc1NVRkVUaXhGUVVWT0wwSXNXVUZCV1dkRExFbEJSazRzUlVGSFRrVXNSMEZJVFN4RlFVbE9MRU5CU2swc1JVRkxUaXhEUVVGRGJFTXNXVUZCV1hsRExGbEJURkFzUlVGTlRucERMRmxCUVZsNVF5eFpRVTVPTEVWQlQwNHNRMEZRVFN4RlFWRk9MRmRCVWswc1JVRlRUaXhMUVZSTkxFTkJRVkk3TzBGQldVRXhSU3huUWtGQlVYZERMRWxCUVZJc1EwRkJZVkFzV1VGQldUQkRMRXRCUVZvc1NVRkJjVUl4UXl4WlFVRlpLMElzU1VGQldpeEhRVUZ0UWl4RFFVRjRReXhEUVVGaU8wRkJRMEZvUlN4blFrRkJVWGxETEVsQlFWSXNRMEZCWVZJc1dVRkJXVEpETEV0QlFWb3NTVUZCY1VJelF5eFpRVUZaWjBNc1NVRkJXaXhIUVVGdFFpeERRVUY0UXl4RFFVRmlPMEZCUTBGcVJTeG5Ra0ZCVVRCRExFbEJRVklzUTBGQllTeERRVUZpT3p0QlFVVkJXQ3hqUVVGTk9FTXNaVUZCVGl4RFFVRnpRamRGTEU5QlFYUkNPMEZCUTBGWExEQkNRVUZyUW5OQ0xGbEJRVmswUWl4RlFVRTVRaXhKUVVGdlF6bENMRXRCUVhCRE8wRkJRMEU3UVVGRFJEdEJRVU5FTzBGQlEwVTdRVUZEUVR0QlFXaExTanM3UVVGdFMwRXNVMEZCVDBFc1MwRkJVRHRCUVVORUxFTkJlRXRFT3p0QlFUQkxRU3hKUVVGTkswTXNhVUpCUVdsQ0xGTkJRV3BDUVN4alFVRnBRaXhEUVVGRE4wTXNWMEZCUkN4RlFVRnBRanRCUVVOMFF5eE5RVUZKT0VNc1lVRkJTanM3UVVGRlFTeE5RVUZOUXl4clFrRkJhMElzU1VGQlNYSkRMRXRCUVV0elF5eHBRa0ZCVkN4RlFVRjRRanM3UVVGRlFTeFZRVUZSYUVRc1dVRkJXVVVzU1VGQmNFSTdRVUZEUlN4VFFVRkxMR0ZCUVV3N1FVRkJiMEk3UVVGRGJFSXNXVUZCU1N4RFFVRkRSaXhaUVVGWmFVUXNVMEZCV2l4RFFVRnpRbnBDTEUxQlFUTkNMRVZCUVcxRExFOUJRVThzUzBGQlVEczdRVUZGYmtOelFpeGxRVUZQUXl4blFrRkJaMEpITEdsQ1FVRm9RaXhEUVVOTWNFWXNUVUZCVFhGR0xGbEJRVTRzUlVGRVN5eEZRVVZNYmtRc1dVRkJXV2xFTEZOQlJsQXNSVUZIVEdwRUxGbEJRVmx2UkN4UlFVaFFMRVZCU1V4d1JDeFpRVUZaYjBRc1VVRkJXaXhEUVVGeFFqVkNMRTFCUVhKQ0xFZEJRVGhDTEVOQlNucENMRVZCUzB3c1MwRk1TeXhEUVVGUU96dEJRVkZCTzBGQlEwUTdRVUZEUkN4VFFVRkxMR1ZCUVV3N1FVRkJjMEk3UVVGRGNFSXNXVUZCVFRaQ0xFdEJRVXR5UkN4WlFVRlpjMFFzVDBGQmRrSTdPMEZCUlVGU0xHVkJRVTlETEdkQ1FVRm5RbEVzVjBGQmFFSXNRMEZEVEhwR0xFMUJRVTF4Uml4WlFVRk9MRVZCUkVzc1JVRkZUQ3hKUVVGSmVrTXNTMEZCU3poRExGTkJRVlFzUTBGQmJVSklMRWRCUVVjc1EwRkJTQ3hEUVVGdVFpeEZRVUV3UWtFc1IwRkJSeXhEUVVGSUxFTkJRVEZDTEVWQlFXbERRU3hIUVVGSExFTkJRVWdzUTBGQmFrTXNRMEZHU3l4RlFVZE1MRWxCUVVrelF5eExRVUZMT0VNc1UwRkJWQ3hEUVVGdFFrZ3NSMEZCUnl4RFFVRklMRU5CUVc1Q0xFVkJRVEJDUVN4SFFVRkhMRU5CUVVnc1EwRkJNVUlzUlVGQmFVTkJMRWRCUVVjc1EwRkJTQ3hEUVVGcVF5eERRVWhMTEVWQlNVd3NTVUZCU1RORExFdEJRVXM0UXl4VFFVRlVMRU5CUVcxQ1NDeEhRVUZITEVOQlFVZ3NRMEZCYmtJc1JVRkJNRUpCTEVkQlFVY3NRMEZCU0N4RFFVRXhRaXhGUVVGcFEwRXNSMEZCUnl4RFFVRklMRU5CUVdwRExFTkJTa3NzUlVGTFRDeEpRVUZKTTBNc1MwRkJTemhETEZOQlFWUXNRMEZCYlVKSUxFZEJRVWNzUTBGQlNDeERRVUZ1UWl4RlFVRXdRa0VzUjBGQlJ5eEZRVUZJTEVOQlFURkNMRVZCUVd0RFFTeEhRVUZITEVWQlFVZ3NRMEZCYkVNc1EwRk1TeXhGUVUxTWNrUXNXVUZCV1hsRUxGRkJRVm9zUTBGQmNVSXNRMEZCY2tJc1EwRk9TeXhGUVU5TWVrUXNXVUZCV1hsRUxGRkJRVm9zUTBGQmNVSXNRMEZCY2tJc1EwRlFTeXhGUVZGTUxFTkJVa3NzUlVGVFRDeEpRVlJMTEVOQlFWQTdPMEZCV1VFN1FVRkRSRHRCUVVORUxGTkJRVXNzWTBGQlREdEJRVUZ4UWp0QlFVTnVRaXhaUVVGTmJFTXNUMEZCVDNaQ0xGbEJRVmwxUWl4SlFVRjZRanM3UVVGRlFYVkNMR1ZCUVU5RExHZENRVUZuUWxjc1ZVRkJhRUlzUTBGRFREVkdMRTFCUVUxeFJpeFpRVUZPTEVWQlJFc3NSVUZGVEN4SlFVRkpla01zUzBGQlN6aERMRk5CUVZRc1EwRkJiVUpxUXl4TFFVRkxMRU5CUVV3c1EwRkJia0lzUlVGQk5FSkJMRXRCUVVzc1EwRkJUQ3hEUVVFMVFpeEZRVUZ4UTBFc1MwRkJTeXhEUVVGTUxFTkJRWEpETEVOQlJrc3NSVUZIVEN4SlFVRkpZaXhMUVVGTE9FTXNVMEZCVkN4RFFVRnRRbXBETEV0QlFVc3NRMEZCVEN4RFFVRnVRaXhGUVVFMFFrRXNTMEZCU3l4RFFVRk1MRU5CUVRWQ0xFVkJRWEZEUVN4TFFVRkxMRU5CUVV3c1EwRkJja01zUTBGSVN5eEZRVWxNUVN4TFFVRkxMRU5CUVV3c1NVRkJWU3hEUVVwTUxFVkJTMHdzUTBGTVN5eERRVUZRT3p0QlFWRkJPMEZCUTBRN1FVRkRSRHRCUVVORk8wRkJRMEU3UVVFNVEwbzdPMEZCYVVSQkxGTkJRVTkxUWl4SlFVRlFPMEZCUTBRc1EwRjJSRVE3TzBGQmVVUkJNMFVzYVVKQlFXbENkMFlzU1VGQmFrSXNSMEZCZDBJc1dVRkJhVUk3UVVGQlFTeE5RVUZvUWtNc1RVRkJaMElzZFVWQlFWQXNSVUZCVHpzN1FVRkRka01zVFVGQlNVRXNUMEZCVDBNc1ZVRkJXQ3hGUVVGMVFqdEJRVU55UWtNc2EwSkJRV05HTEU5QlFVOUhMRWxCUVhKQ096dEJRVVZCZUVnc1UwRkJTMjFGTEVsQlFVd3NSMEZCV1hORUxHMUNRVUZ0UWtvc1QwRkJUME1zVlVGQk1VSXNRMEZCV2p0QlFVTkJka2dzZDBKQlFXOUNMRVZCUVVNeVNDeExRVUZMTEZsQlFVNHNSVUZCY0VJN1FVRkRRVGxHTEhGQ1FVRnBRaXRHTEZOQlFXcENMRU5CUVRKQ1RpeE5RVUV6UWp0QlFVTkVMRWRCVGtRc1RVRk5UenRCUVVOTVJTeHJRa0ZCWTBZc1QwRkJUMGNzU1VGQmNrSTdRVUZEUVhwSUxIZENRVUZ2UWl4RlFVRkRNa2dzUzBGQlN5eFpRVUZPTEVWQlFYQkNPMEZCUTBFNVJpeHhRa0ZCYVVJclJpeFRRVUZxUWl4RFFVRXlRazRzVFVGQk0wSTdRVUZEUkR0QlFVTkdMRU5CV2tRN08wRkJZMEY2Uml4cFFrRkJhVUlyUml4VFFVRnFRaXhIUVVFMlFpeFpRVUZwUWp0QlFVRkJMRTFCUVdoQ1RpeE5RVUZuUWl4MVJVRkJVQ3hGUVVGUE96dEJRVU0xUXpGSExHVkJRV0VzU1VGQlNYZEVMRXRCUVV0NVJDeFhRVUZVTEVWQlFXSTdRVUZEUVdoSUxHMUNRVUZwUWl4SlFVRkpkVVFzUzBGQlMzbEVMRmRCUVZRc1JVRkJha0k3UVVGRFFYQkhMRmxCUVZVc1NVRkJTVEpETEV0QlFVczRReXhUUVVGVUxFTkJRVzFDTEVOQlFXNUNMRVZCUVhOQ0xFTkJRWFJDTEVWQlFYbENMRU5CUVhwQ0xFTkJRVlk3UVVGRFFYaEdMRmxCUVZVc1NVRkJTVEJETEV0QlFVczRReXhUUVVGVUxFTkJRVzFDTEVOQlFXNUNMRVZCUVhOQ0xFTkJRWFJDTEVWQlFYbENMRU5CUVhwQ0xFTkJRVlk3UVVGRFFYWkdMRmxCUVZVc1NVRkJTWGxETEV0QlFVczRReXhUUVVGVUxFTkJRVzFDTEVOQlFXNUNMRVZCUVhOQ0xFTkJRWFJDTEVWQlFYbENMRU5CUVhwQ0xFTkJRVlk3UVVGRFFYUkdMRlZCUVZFc1NVRkJTWGRETEV0QlFVc3dSQ3haUVVGVUxFTkJRWE5DTEVOQlFYUkNMRVZCUVhsQ0xFTkJRWHBDTEVWQlFUUkNMRU5CUVRWQ0xFVkJRU3RDTEVOQlFTOUNMRU5CUVZJN08wRkJSVUY0Uml4eFFrRkJiVUpuUml4UFFVRlBVeXhWUVVGUUxFbEJRWEZDTEVWQlFYaERPenRCUVVWQkxFMUJRVWszUlN4dlFrRkJTaXhGUVVFd1FqdEJRVU40UWp0QlFVTkJXQ3hyUWtGQll5eEpRVUZKZVVZc1dVRkJTaXhEUVVGcFFpeEpRVUZKTVVZc2JVSkJRVzFDVFN4dlFrRkJlRU1zUTBGQlpDeERRVVozUWl4RFFVVnhSRHRCUVVNM1JVZ3NjMEpCUVd0Q0xFbEJRVWwxUml4WlFVRktMRU5CUVdsQ0xFbEJRVWt4Uml4dFFrRkJiVUpQTEhkQ1FVRjRReXhEUVVGc1FpeERRVWgzUWl4RFFVYzJSRHRCUVVOeVJrZ3NiMEpCUVdkQ0xFbEJRVWx6Uml4WlFVRktMRU5CUVdsQ0xFbEJRVWt4Uml4dFFrRkJiVUpSTEhOQ1FVRjRReXhEUVVGb1FpeERRVXAzUWl4RFFVbDVSRHRCUVVOcVJrZ3NkVUpCUVcxQ0xFbEJRVWx4Uml4WlFVRktMRU5CUVdsQ0xFbEJRVWt4Uml4dFFrRkJiVUpUTEhsQ1FVRjRReXhEUVVGdVFpeERRVXgzUWl4RFFVc3JSRHRCUVVONFJpeEhRVTVFTEUxQlRVODdRVUZEVER0QlFVTkJVaXhyUWtGQll5eEZRVUZrTzBGQlEwRkZMSE5DUVVGclFpeEZRVUZzUWp0QlFVTkJReXh2UWtGQlowSXNSVUZCYUVJN1FVRkRRVU1zZFVKQlFXMUNMRVZCUVc1Q08wRkJRMFE3TzBGQlJVUktMR05CUVZrc1EwRkJXaXhKUVVGcFFtNURMR05CUVdORExGZEJRUzlDTzBGQlEwRnZReXhyUWtGQlowSXNRMEZCYUVJc1NVRkJjVUp5UXl4alFVRmpSU3hsUVVGdVF6dEJRVU5CYjBNc1owSkJRV01zUTBGQlpDeEpRVUZ0UW5SRExHTkJRV05ITEdGQlFXcERPMEZCUTBGdlF5eHRRa0ZCYVVJc1EwRkJha0lzU1VGQmMwSjJReXhqUVVGalNTeG5Ra0ZCY0VNN08wRkJSVUVzVFVGQlRYbElMSGxDUVVGNVFsZ3NUMEZCVDFrc1VVRkJVQ3hIUVVNelFpeEpRVUZKT1VRc1MwRkJTeXRFTEhsRFFVRlVMRVZCUkRKQ0xFZEJSVE5DTEVsQlFVa3ZSQ3hMUVVGTFowVXNLMEpCUVZRc1JVRkdTanRCUVVGQkxFMUJSMFZETEdGQlFXRXNTVUZCU1dwRkxFdEJRVXRyUlN4eFFrRkJWQ3hEUVVFclFrd3NjMEpCUVM5Q0xFTkJTR1k3UVVGQlFTeE5RVWxGVFN4VFFVRlRMRWxCUVVsdVJTeExRVUZMYjBVc2JVTkJRVlFzUlVGS1dEczdRVUZOUVN4TlFVRkpReXh0UWtGQlNqczdRVUZGUVN4TlFVRkpMRU5CUVVOdVFpeFBRVUZQYlVJc1ZVRkJXaXhGUVVGM1FtNUNMRTlCUVU5dFFpeFZRVUZRTEVkQlFXOUNMRVZCUVVNM1JTeE5RVUZOTEZOQlFWQXNSVUZCY0VJN1FVRkRlRUk3UVVGRFFUczdPenM3T3pzN096czdPenM3TzBGQlowSkJMRlZCUVZFd1JDeFBRVUZQYlVJc1ZVRkJVQ3hEUVVGclFqZEZMRWxCUVRGQ08wRkJRMFVzVTBGQlN5eFpRVUZNTzBGQlEwVnVReXhqUVVGUmQwTXNTVUZCVWl4RFFVRmhjVVFzVDBGQlQyMUNMRlZCUVZBc1EwRkJhMEpETEU5QlFXeENMRU5CUVRCQ05VVXNRMEZCZGtNN1FVRkRRWEpETEdOQlFWRjVReXhKUVVGU0xFTkJRV0Z2UkN4UFFVRlBiVUlzVlVGQlVDeERRVUZyUWtNc1QwRkJiRUlzUTBGQk1FSXpSU3hEUVVGMlF6dEJRVU5CZEVNc1kwRkJVVEJETEVsQlFWSXNRMEZCWVcxRUxFOUJRVTl0UWl4VlFVRlFMRU5CUVd0Q1F5eFBRVUZzUWl4RFFVRXdRakZGTEVOQlFYWkRPenRCUVVWQmRFTXNZMEZCVVhWRExFbEJRVklzUTBGQllYRkVMRTlCUVU5dFFpeFZRVUZRTEVOQlFXdENSU3hQUVVGc1FpeERRVUV3UWpkRkxFTkJRWFpETzBGQlEwRndReXhqUVVGUmQwTXNTVUZCVWl4RFFVRmhiMFFzVDBGQlQyMUNMRlZCUVZBc1EwRkJhMEpGTEU5QlFXeENMRU5CUVRCQ05VVXNRMEZCZGtNN1FVRkRRWEpETEdOQlFWRjVReXhKUVVGU0xFTkJRV0Z0UkN4UFFVRlBiVUlzVlVGQlVDeERRVUZyUWtVc1QwRkJiRUlzUTBGQk1FSXpSU3hEUVVGMlF6czdRVUZGUVhsRkxHMUNRVUZoTEVsQlFVbHlSU3hMUVVGTGQwVXNXVUZCVkN4RFFVTllia2dzVDBGRVZ5eEZRVVZZUXl4UFFVWlhMRU5CUVdJN08wRkJTMEU3UVVGRFJpeFRRVUZMTEZOQlFVdzdRVUZEUVR0QlFVTkZLMGNzYlVKQlFXRXNTVUZCU1hKRkxFdEJRVXQ1UlN4blFrRkJWQ3hGUVVGaU8wRkJRMEU3UVVGdVFrbzdPMEZCYzBKQmNrZ3NWVUZCVVRoR0xFOUJRVTlaTEZGQlFWQXNSMEZEU2l4SlFVRkpPVVFzUzBGQlN6QkZMSGRDUVVGVUxFTkJRV3REVkN4VlFVRnNReXhGUVVFNFEwa3NWVUZCT1VNc1JVRkJNRVJHTEUxQlFURkVMRVZCUVd0RlRpeHpRa0ZCYkVVc1JVRkJNRVlzU1VGQlNUZEVMRXRCUVVzeVJTeDFRa0ZCVkN4RlFVRXhSaXhEUVVSSkxFZEJSVW9zU1VGQlNUTkZMRXRCUVVzMFJTeDFRa0ZCVkN4RFFVRnBRMWdzVlVGQmFrTXNSVUZCTmtOSkxGVkJRVGRETEVWQlFYbEVSaXhOUVVGNlJDeEZRVUZwUlU0c2MwSkJRV3BGTEVOQlJrbzdRVUZIUVROSExHdENRVUZuUW1kSExFOUJRVTlvUnl4aFFVRjJRanM3UVVGRlFTeE5RVUZKWjBjc1QwRkJUMWtzVVVGQldDeEZRVUZ4UW5CSUxHOUNRVUZ2UWl4SlFVRndRanM3UVVGRmNrSmtMSE5DUVVGdlFpeEZRVUZETWtnc1MwRkJTeXhaUVVGT0xFVkJRWEJDTzBGQlEwUXNRMEZ5UmtRN08wRkJkVVpCT1VZc2FVSkJRV2xDYjBnc1owSkJRV3BDTEVkQlFXOURMRlZCUVVOMlJpeFhRVUZFTEVWQlFXbENPMEZCUTI1RWNFTXNhMEpCUVdkQ2IwTXNWMEZCYUVJN1FVRkRSQ3hEUVVaRU96dEJRVWxCTjBJc2FVSkJRV2xDY1Vnc1ZVRkJha0lzUjBGQk9FSXNWVUZCUTNoR0xGZEJRVVFzUlVGQmFVSTdRVUZETjBOcVF5eFZRVUZSZDBNc1NVRkJVaXhEUVVGaFVDeFpRVUZaU1N4RFFVRjZRanRCUVVOQmNrTXNWVUZCVVhsRExFbEJRVklzUTBGQllWSXNXVUZCV1Vzc1EwRkJla0k3UVVGRFFYUkRMRlZCUVZFd1F5eEpRVUZTTEVOQlFXRlVMRmxCUVZsTkxFTkJRWHBDTzBGQlEwRjRReXhSUVVGTk1FZ3NWVUZCVGl4RFFVRnBRbnBJTEU5QlFXcENPMEZCUTBRc1EwRk1SRHM3UVVGUFFVa3NhVUpCUVdsQ2MwZ3NXVUZCYWtJc1IwRkJaME1zVlVGQlEzcEdMRmRCUVVRc1JVRkJhVUk3UVVGREwwTTFRaXhYUVVGVE5FSXNXVUZCV1RCR0xFZEJRWEpDTEVWQlEwZEVMRmxCUkVnc1EwRkZTWHBHTEZsQlFWa3lSaXhKUVVab1FpeEZRVWRKZGtnc1UwRkJVelJDTEZsQlFWazBSaXhKUVVGeVFpeERRVWhLTEVWQlNVazFSaXhaUVVGWk5rWXNORUpCU21oQ0xFVkJTMGszUml4WlFVRlpPRVlzVTBGTWFFSTdRVUZQUkN4RFFWSkVPenRCUVZWQk0wZ3NhVUpCUVdsQ05FZ3NVMEZCYWtJc1IwRkJOa0lzVlVGQlF5OUdMRmRCUVVRc1JVRkJhVUk3UVVGRE5VTXNUVUZCU1RoRExHRkJRVW83UVVGQlFTeE5RVUZWYTBRc2IwSkJRVlk3TzBGQlJVRXNUVUZCU1doSExGbEJRVmxGTEVsQlFWb3NRMEZCYVVJclJpeFBRVUZxUWl4RFFVRjVRaXhOUVVGNlFpeE5RVUZ4UXl4RFFVRkRMRU5CUVRGRExFVkJRVFpETzBGQlF6TkRia1FzVjBGQlQwUXNaVUZCWlRkRExGZEJRV1lzUTBGQlVEczdRVUZGUVN4UlFVRk5hMGNzVjBGQlYzQkVMRXRCUVV0eFJDeFRRVUZNTEVWQlFXcENPenRCUVVWQkxGRkJRVWx1Unl4WlFVRlpiMGNzVjBGQmFFSXNSVUZCTmtKR0xGTkJRVk5ITEdWQlFWUXNRMEZCZVVKeVJ5eFpRVUZaYjBjc1YwRkJja003UVVGRE4wSXNVVUZCU1hCSExGbEJRVmx6Unl4WFFVRm9RaXhGUVVFMlFrb3NVMEZCVTBzc1pVRkJWQ3hEUVVGNVFuWkhMRmxCUVZselJ5eFhRVUZ5UXp0QlFVTTNRaXhSUVVGSmRFY3NXVUZCV1hkSExGZEJRV2hDTEVWQlFUWkNUaXhUUVVGVFR5eGxRVUZVTEVOQlFYbENla2NzV1VGQldYZEhMRmRCUVhKRE8wRkJRemRDTEZGQlFVbDRSeXhaUVVGWk1FY3NWMEZCYUVJc1JVRkJOa0pTTEZOQlFWTlRMR1ZCUVZRc1EwRkJlVUl6Unl4WlFVRlpNRWNzVjBGQmNrTTdRVUZETjBKU0xHRkJRVk5WTEdOQlFWUXNRMEZCZDBJc1NVRkJlRUk3UVVGRFFWWXNZVUZCVTFjc1QwRkJWQ3hEUVVGcFFqZEhMRmxCUVZrNFJ5eFJRVUUzUWp0QlFVTkJXaXhoUVVGVFlTeFBRVUZVTEVOQlFXbENMMGNzV1VGQldXZElMRTlCUVRkQ08wRkJRMEVzVVVGQlNXaElMRmxCUVZscFNDeFJRVUZvUWl4RlFVRXdRbVlzVTBGQlUyZENMRTlCUVZRc1EwRkJhVUpzU0N4WlFVRlphVWdzVVVGQk4wSTdRVUZETVVJc1VVRkJTV3BJTEZsQlFWbHRTQ3hKUVVGb1FpeEZRVUZ6UW1wQ0xGTkJRVk5yUWl4UFFVRlVMRU5CUVdsQ2NFZ3NXVUZCV1cxSUxFbEJRVGRDTzBGQlEzUkNMRkZCUVVsdVNDeFpRVUZaY1Vnc1NVRkJhRUlzUlVGQmMwSnVRaXhUUVVGVGIwSXNUMEZCVkN4RFFVRnBRblJJTEZsQlFWbHhTQ3hKUVVFM1FqdEJRVU4wUWl4UlFVRkpja2dzV1VGQldYVklMR05CUVdoQ0xFVkJRV2REY2tJc1UwRkJVM05DTEZGQlFWUXNRMEZCYTBKNFNDeFpRVUZaZFVnc1kwRkJPVUk3UVVGRGFFTXNVVUZCU1haSUxGbEJRVmw1U0N4aFFVRm9RaXhGUVVFclFuWkNMRk5CUVZOM1FpeFJRVUZVTEVOQlFXdENNVWdzV1VGQldYbElMR0ZCUVRsQ096dEJRVVV2UWl4UlFVRkpla2dzV1VGQldUSklMRWxCUVdoQ0xFVkJRWE5DTjBVc1MwRkJTemhGTEdWQlFVd3NSMEZCZFVKRExFVkJRWFpDTEVOQlFUQkNMRU5CUVRGQ0xFVkJRVFpDUXl4VlFVRTNRaXhEUVVGM1F6bElMRmxCUVZreVNDeEpRVUZ3UkR0QlFVTjBRaXhSUVVGSk0wZ3NXVUZCV1N0SUxFbEJRV2hDTEVWQlFYTkNha1lzUzBGQlN6aEZMR1ZCUVV3c1IwRkJkVUpETEVWQlFYWkNMRU5CUVRCQ0xFTkJRVEZDTEVWQlFUWkNSeXhWUVVFM1FpeERRVUYzUTJoSkxGbEJRVmtyU0N4SlFVRndSRHRCUVVOMFFpeFJRVUZKTDBnc1dVRkJXV2xKTEVsQlFXaENMRVZCUVhOQ2JrWXNTMEZCU3poRkxHVkJRVXdzUjBGQmRVSkRMRVZCUVhaQ0xFTkJRVEJDTEVOQlFURkNMRVZCUVRaQ1N5eFZRVUUzUWl4RFFVRjNRMnhKTEZsQlFWbHBTU3hKUVVGd1JEczdRVUZGZEVKMlNDeFRRVUZMZVVnc1ZVRkJUQ3hEUVVGblFuSkdMRWxCUVdoQ0xFVkJRWE5DY0VNc1MwRkJTekJJTEdsQ1FVRXpRaXhGUVVFNFEwTXNhVUpCUVRsRExFZEJRV3RGUXl4VFFVRnNSU3hEUVVFMFJYUkpMRmxCUVZsMVNTeE5RVUZhTEVkQlFYRkNka2tzV1VGQldYVkpMRTFCUVdwRExFZEJRVEJETEVkQlFYUklPMEZCUTBGNlJpeFRRVUZMTUVZc2EwSkJRVXdzUTBGQmQwSjRTU3haUVVGWmVVa3NTMEZCV2l4SlFVRnhRaXhEUVVFM1F6dEJRVU5CTTBZc1UwRkJTelZETEVsQlFVd3NSMEZCV1N4RFFVRmFMRU5CZUVJeVF5eERRWGRDTlVJN1FVRkRaaXhSUVVGSlJpeFpRVUZaUlN4SlFVRmFMRXRCUVhGQ0xHTkJRWHBDTEVWQlFYbERORU1zUzBGQlN6UkdMRWxCUVV3c1IwRkJXU3hKUVVGYU8wRkJRM3BETEZGQlFVa3hTU3haUVVGWlJTeEpRVUZhTEV0QlFYRkNMR1ZCUVhwQ0xFVkJRVEJETkVNc1MwRkJTelpHTEV0QlFVd3NSMEZCWVN4SlFVRmlPenRCUVVVeFEzcE1MR1ZCUVZjclF5eFhRVUZZT3p0QlFVVkJiRU1zV1VGQlVYZERMRWxCUVZJc1EwRkJZVkFzV1VGQldUUkpMRkZCUVZvc1EwRkJjVUo0U1N4RFFVRnNRenRCUVVOQmNrTXNXVUZCVVhsRExFbEJRVklzUTBGQllWSXNXVUZCV1RSSkxGRkJRVm9zUTBGQmNVSjJTU3hEUVVGc1F6dEJRVU5CZEVNc1dVRkJVVEJETEVsQlFWSXNRMEZCWVZRc1dVRkJXVFJKTEZGQlFWb3NRMEZCY1VKMFNTeERRVUZzUXp0QlFVTkJjRVFzWlVGQlZ6Sk1MRk5CUVZnc1EwRkJjVUk1U3l4UFFVRnlRanM3UVVGRlFVY3NWVUZCVFhGRExFbEJRVTRzUTBGQlYxQXNXVUZCV1RoSkxGRkJRVm9zUTBGQmNVSXhTU3hEUVVGb1F6dEJRVU5CYkVNc1ZVRkJUWE5ETEVsQlFVNHNRMEZCVjFJc1dVRkJXVGhKTEZGQlFWb3NRMEZCY1VKNlNTeERRVUZvUXp0QlFVTkJia01zVlVGQlRYVkRMRWxCUVU0c1EwRkJWMVFzV1VGQldUaEpMRkZCUVZvc1EwRkJjVUo0U1N4RFFVRm9RenRCUVVOQmNFTXNWVUZCVFRaTExFbEJRVTRzUTBGQlZ5OUpMRmxCUVZrNFNTeFJRVUZhTEVOQlFYRkNSU3hEUVVGb1F6dEJRVU5CT1V3c1pVRkJWeXRNTEZkQlFWZ3NRMEZCZFVJdlN5eExRVUYyUWpzN1FVRkZRVFJGTEZOQlFVdHZSeXhUUVVGTUxFTkJRV1ZvVFN4VlFVRm1PenRCUVVWQk5FWXNVMEZCUzNGSExGbEJRVXdzUTBGQmEwSnVTaXhaUVVGWmIwb3NTVUZCT1VJc1JVRkJiME1zUzBGQmNFTTdRVUZEUVhSTUxGVkJRVTExVEN4WFFVRk9MRU5CUVd0Q2RrY3NTVUZCYkVJc1JVRkJkMElzUTBGQmVFSXNSVUZCTWtJc1EwRkJReXhEUVVFMVFqdEJRVU5CTEZGQlFVazVReXhaUVVGWlJTeEpRVUZhTEV0QlFYRkNMR0ZCUVhwQ0xFVkJRWGREZGtNc2VVSkJRWGxDYlVZc1MwRkJTM2RITEZkQlFVd3NSMEZCYlVKRExFbEJRVzVDTEV0QlFUUkNMRU5CUVhKRUxFTkJRWGhETEV0QlEwczFUQ3g1UWtGQmVVSnRSaXhMUVVGTE1FY3NWMEZCVEN4SFFVRnRRa1FzU1VGQmJrSXNTMEZCTkVJc1EwRkJja1E3TzBGQlJVd3ZURHRCUVVORUxFZEJha1JFTEUxQmFVUlBPMEZCUTB3c1VVRkJTWE5ETEZGQlFWRkRMRmxCUVZsRExGZEJRVm9zUTBGQldqczdRVUZGUVN4UlFVRkpMRU5CUVVOR0xFdEJRVXdzUlVGQldUczdRVUZGV2p0QlFVTkJMRkZCUVVsRkxGbEJRVmw1U2l4UlFVRm9RaXhGUVVFd1FqdEJRVU40UWl4VlFVRk5ReXhwUWtGQmFVSXNTVUZCU1doS0xFdEJRVXRwU2l4bFFVRlVMRVZCUVhaQ08wRkJRMEZFTEhGQ1FVRmxSU3hoUVVGbUxFTkJRVFpDTVUwc1ZVRkJOMElzUlVGQmVVTTBReXhMUVVGNlF6czdRVUZGUVN4WFFVRkxMRWxCUVVreVFpeEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWw2UWl4WlFVRlplVW9zVVVGQldpeERRVUZ4UW1wSkxFMUJRWHBETEVWQlFXbEVReXhIUVVGcVJDeEZRVUZ6UkR0QlFVTndSQ3haUVVGTmIwa3NVMEZCVXpkS0xGbEJRVmw1U2l4UlFVRmFMRU5CUVhGQ2FFa3NRMEZCY2tJc1EwRkJaanM3UVVGRlFTeFpRVUZOY1Vrc1VVRkJVU3hKUVVGSmNFb3NTMEZCUzNsRUxGZEJRVlFzUlVGQlpEdEJRVU5CTWtZc1kwRkJUVGRLTEZkQlFVNDdPMEZCUlVGc1F5eG5Ra0ZCVVhkRExFbEJRVklzUTBGQllYTktMRTlCUVU5RkxHVkJRVkFzUTBGQmRVSXpTaXhEUVVGd1F6dEJRVU5CY2tNc1owSkJRVkY1UXl4SlFVRlNMRU5CUVdGeFNpeFBRVUZQUlN4bFFVRlFMRU5CUVhWQ01Vb3NRMEZCY0VNN1FVRkRRWFJETEdkQ1FVRlJNRU1zU1VGQlVpeERRVUZoYjBvc1QwRkJUMFVzWlVGQlVDeERRVUYxUW5wS0xFTkJRWEJETzBGQlEwRjNTaXhqUVVGTmFrSXNVMEZCVGl4RFFVRm5RamxMTEU5QlFXaENPenRCUVVWQlJ5eGpRVUZOY1VNc1NVRkJUaXhEUVVGWGMwb3NUMEZCVDJZc1VVRkJVQ3hEUVVGblFqRkpMRU5CUVROQ08wRkJRMEZzUXl4alFVRk5jME1zU1VGQlRpeERRVUZYY1Vvc1QwRkJUMllzVVVGQlVDeERRVUZuUW5wSkxFTkJRVE5DTzBGQlEwRnVReXhqUVVGTmRVTXNTVUZCVGl4RFFVRlhiMG9zVDBGQlQyWXNVVUZCVUN4RFFVRm5RbmhKTEVOQlFUTkNPMEZCUTBGd1F5eGpRVUZOTmtzc1NVRkJUaXhEUVVGWFl5eFBRVUZQWml4UlFVRlFMRU5CUVdkQ1JTeERRVUV6UWp0QlFVTkJZeXhqUVVGTllpeFhRVUZPTEVOQlFXdENMMHNzUzBGQmJFSTdPMEZCUlVFMFFpeG5Ra0ZCVVVNc1dVRkJXVU1zV1VGQldYbEtMRkZCUVZvc1EwRkJjVUpvU1N4RFFVRnlRaXhEUVVGYUxFTkJRVkk3UVVGRFFXbEpMSFZDUVVGbFJTeGhRVUZtTEVOQlFUWkNSU3hMUVVFM1FpeEZRVUZ2UTJoTExFdEJRWEJETzBGQlEwRlpMR0ZCUVV0elNpeFBRVUZNTEVOQlFXRkdMRXRCUVdJN1FVRkRSRHM3UVVGRlJHaExMR05CUVZFMFNpeGpRVUZTTzBGQlEwRXZTeXgxUWtGQmFVSnhRaXhaUVVGWk5FSXNSVUZCTjBJc1NVRkJiVU01UWl4TFFVRnVRenRCUVVORU96dEJRVVZFTDBJc1dVRkJVWGRETEVsQlFWSXNRMEZCWVZBc1dVRkJXV2xMTEV0QlFWb3NRMEZCYTBJM1NpeERRVUV2UWp0QlFVTkJja01zV1VGQlVYbERMRWxCUVZJc1EwRkJZVklzV1VGQldXbExMRXRCUVZvc1EwRkJhMEkxU2l4RFFVRXZRanRCUVVOQmRFTXNXVUZCVVRCRExFbEJRVklzUTBGQllWUXNXVUZCV1dsTExFdEJRVm9zUTBGQmEwSXpTaXhEUVVFdlFqczdRVUZGUVZJc1ZVRkJUVGhETEdWQlFVNHNRMEZCYzBJM1JTeFBRVUYwUWpzN1FVRkZRVUVzV1VGQlVYZERMRWxCUVZJc1EwRkJZU3hEUVVGaU8wRkJRMEY0UXl4WlFVRlJlVU1zU1VGQlVpeERRVUZoTEVOQlFXSTdRVUZEUVhwRExGbEJRVkV3UXl4SlFVRlNMRU5CUVdFc1EwRkJZanRCUVVOQldDeFZRVUZOYjBzc2NVSkJRVTRzUTBGQk5FSnNTeXhaUVVGWmIwb3NTVUZCZUVNc1JVRkJPRU55VEN4UFFVRTVRenM3UVVGRlFXSXNaVUZCVnl0RExGZEJRVmc3TzBGQlJVRnFReXhaUVVGUmRVTXNTVUZCVWl4RFFVRmhVQ3haUVVGWk5Fa3NVVUZCV2l4RFFVRnhRbmhKTEVOQlFXeERPMEZCUTBGd1F5eFpRVUZSZDBNc1NVRkJVaXhEUVVGaFVpeFpRVUZaTkVrc1VVRkJXaXhEUVVGeFFuWkpMRU5CUVd4RE8wRkJRMEZ5UXl4WlFVRlJlVU1zU1VGQlVpeERRVUZoVkN4WlFVRlpORWtzVVVGQldpeERRVUZ4UW5SSkxFTkJRV3hETzBGQlEwRndSQ3hsUVVGWE1rd3NVMEZCV0N4RFFVRnhRamRMTEU5QlFYSkNPenRCUVVWQlJTeFZRVUZOY1VNc1NVRkJUaXhEUVVGWFVDeFpRVUZaT0Vrc1VVRkJXaXhEUVVGeFFqRkpMRU5CUVdoRE8wRkJRMEZzUXl4VlFVRk5jME1zU1VGQlRpeERRVUZYVWl4WlFVRlpPRWtzVVVGQldpeERRVUZ4UW5wSkxFTkJRV2hETzBGQlEwRnVReXhWUVVGTmRVTXNTVUZCVGl4RFFVRlhWQ3haUVVGWk9Fa3NVVUZCV2l4RFFVRnhRbmhKTEVOQlFXaERPMEZCUTBGd1F5eFZRVUZOTmtzc1NVRkJUaXhEUVVGWEwwa3NXVUZCV1RoSkxGRkJRVm9zUTBGQmNVSkZMRU5CUVdoRE8wRkJRMEU1VEN4bFFVRlhLMHdzVjBGQldDeERRVUYxUWk5TExFdEJRWFpDT3p0QlFVVkJPRWdzYTBKQlFXTXNTVUZCU1hSR0xFdEJRVXQ1U2l4dlFrRkJWQ3hEUVVFNFFtcE9MRlZCUVRsQ0xFTkJRV1FzUTBFMVJFc3NRMEUwUkc5RU8wRkJRM3BFTEZGQlFVMXJUaXhUUVVGVExFbEJRVWt4U2l4TFFVRkxNa29zTWtKQlFWUXNRMEZCY1VOeVN5eFpRVUZaYjBvc1NVRkJha1FzUlVGQmRVUndSQ3hYUVVGMlJDeEZRVUZ2Uld4SExFdEJRWEJGTEVWQlFUSkZMMElzVDBGQk0wVXNRMEZCWmpzN1FVRkZRWEZOTEZkQlFVOUZMR05CUVZBc1EwRkJjMEowU3l4WlFVRlpPRWNzVVVGQmJFTTdRVUZEUVhORUxGZEJRVTlITEdsQ1FVRlFMRU5CUVhsQ2Rrc3NXVUZCV1hkTExGZEJRWEpETzBGQlEwRktMRmRCUVU5TExHMUNRVUZRTEVOQlFUSkNla3NzV1VGQldXZElMRTlCUVhaRE8wRkJRMEZ2UkN4WFFVRlBUU3h2UWtGQlVDeERRVUUwUWpGTExGbEJRVmxuU0N4UFFVRjRRenM3UVVGRlFXeEZMRmRCUVU4c1NVRkJTWEJETEV0QlFVdHBTeXhYUVVGVUxFTkJRWEZDVUN4TlFVRnlRaXhEUVVGUU8wRkJRMEV4U2l4VFFVRkxlVWdzVlVGQlRDeERRVUZuUW5KR0xFbEJRV2hDTEVWQlFYTkNjRU1zUzBGQlN6QklMR2xDUVVFelFpeEZRVUU0UTBNc2FVSkJRVGxETEVkQlFXdEZReXhUUVVGc1JTeERRVUUwUlhSSkxGbEJRVmwxU1N4TlFVRmFMRWRCUVhGQ2Rra3NXVUZCV1hWSkxFMUJRV3BETEVkQlFUQkRMRU5CUVhSSU8wRkJRMEY2Uml4VFFVRkxNRVlzYTBKQlFVd3NRMEZCZDBKNFNTeFpRVUZaZVVrc1MwRkJXaXhKUVVGeFFpeERRVUUzUXp0QlFVTkJMMGdzVTBGQlMzTktMRTlCUVV3c1EwRkJZVWtzVFVGQllqczdRVUZGUVN4UlFVRkpMRTlCUVU5d1N5eFpRVUZaTkVzc1pVRkJia0lzUzBGQmRVTXNWMEZCTTBNc1JVRkJkMFE1U0N4TFFVRkxLMGdzYVVKQlFVd3NRMEZCZFVJM1N5eFpRVUZaTkVzc1pVRkJia003TzBGQlJYaEVMRkZCUVVrMVN5eFpRVUZaT0Vzc1MwRkJXaXhKUVVGeFFqbExMRmxCUVZrclN5eEpRVUZ5UXl4RlFVRXlRMnBPTEUxQlFVMXJUaXhaUVVGT0xFTkJRVzFDYkVrc1NVRkJia0lzUlVGQmVVSTVReXhaUVVGWk9Fc3NTMEZCY2tNc1JVRkJORU01U3l4WlFVRlpLMHNzU1VGQmVFUXNSVUZCTTBNc1MwRkRTMnBPTEUxQlFVMXJUaXhaUVVGT0xFTkJRVzFDYkVrc1NVRkJia0k3UVVGRFRFRXNVMEZCU3pWRExFbEJRVXdzUjBGQldTeERRVUZhTEVOQk4wVkxMRU5CTmtWVk8wRkJRMll6UXp0QlFVTkVPenRCUVVWRWRVWXNUMEZCUzIxSkxGRkJRVXc3TzBGQlJVRnVTU3hQUVVGTGJFSXNSVUZCVEN4SFFVRlZOVUlzV1VGQldUUkNMRVZCUVhSQ08wRkJRMEY0UkN4WFFVRlRNRVVzUzBGQlMyeENMRVZCUVdRc1NVRkJiMEpyUWl4SlFVRndRanRCUVVOQmNrVXNhVUpCUVdWeFJTeExRVUZMYkVJc1JVRkJjRUlzU1VGQk1FSnZSU3hYUVVFeFFqczdRVUZGUVhwSUxHZENRVUZqZFVVc1MwRkJTMjlKTEVOQlFVd3NTMEZCVjNSTUxGTkJRVmdzUjBGQmRVSnJSQ3hMUVVGTFdpeEhRVUUxUWl4SFFVRnJRMWtzUzBGQlMyOUpMRU5CUVhKRUxFbEJRVEJFY0Vrc1MwRkJTMnhDTEVWQlFTOUVPMEZCUTBGMFJUczdRVUZGUVdoQ0xITkNRVUZ2UWl4RlFVRkRNa2dzUzBGQlN5eGhRVUZPTEVWQlFYRkNUQ3hSUVVGUlpDeExRVUZMYkVJc1JVRkJiRU1zUlVGQmNFSTdRVUZEUkN4RFFTOUpSRHM3UVVGcFNrRjZSQ3hwUWtGQmFVSm5UaXhWUVVGcVFpeEhRVUU0UWl4VlFVRkRia3dzVjBGQlJDeEZRVUZwUWp0QlFVTTNReXhOUVVGTmIwd3NhVUpCUVdsQ0xFbEJRVWt4U3l4TFFVRkxNa3NzWlVGQlZDeEZRVUYyUWpzN1FVRkZRVVFzYVVKQlFXVkZMSGxDUVVGbUxFTkJRWGxEZEV3c1dVRkJXWFZNTEc5Q1FVRnlSRHRCUVVOQlNDeHBRa0ZCWlVrc01rSkJRV1lzUTBGQk1rTjRUQ3haUVVGWmVVd3NjMEpCUVhaRU8wRkJRMEZNTEdsQ1FVRmxUU3gxUWtGQlppeERRVUYxUXpGTUxGbEJRVmt5VEN4clFrRkJia1E3UVVGRFFWQXNhVUpCUVdWUkxESkNRVUZtTEVOQlFUSkROVXdzV1VGQldUWk1MSEZDUVVGMlJEdEJRVU5CVkN4cFFrRkJaVlVzZDBKQlFXWXNRMEZCZDBNNVRDeFpRVUZaSzB3c2IwSkJRWEJFT3p0QlFVVkJMRTFCUVUxRExGVkJRVlVzU1VGQlNYUk1MRXRCUVV0MVRDeG5Ra0ZCVkN4RFFVTmtZaXhqUVVSakxFVkJSV1JvVGl4VFFVRlRORUlzV1VGQldXdE5MRk5CUVhKQ0xFTkJSbU1zUlVGSFpDeEpRVUZKZUV3c1MwRkJTM2xNTEhsQ1FVRlVMRU5CUVcxRGNrOHNTMEZCYmtNc1EwRklZeXhEUVVGb1FqczdRVUZOUVd0UExGVkJRVkZKTEUxQlFWSXNSMEZCYVVKb1FpeGpRVUZxUWp0QlFVTkJhRTRzVjBGQlV6UkNMRmxCUVZsclRTeFRRVUZ5UWl4RlFVRm5RekZFTEd0Q1FVRm9ReXhEUVVGdFJDeERRVUZ1UkR0QlFVTkJkMFFzVlVGQlVVc3NiVUpCUVZJc1EwRkJORUlzUTBGQk5VSXNSVUZCSzBJc1EwRkJMMElzUlVGQmEwTXNRMEZCYkVNN08wRkJSVUYyVHl4UlFVRk5jVTRzVlVGQlRpeERRVUZwUW1Fc1QwRkJha0k3UVVGRFFUTk9MRmxCUVZVeVFpeFpRVUZaTkVJc1JVRkJkRUlzU1VGQk5FSnZTeXhQUVVFMVFqdEJRVU5FTEVOQmNrSkVPMEZCYzBKQk4wNHNhVUpCUVdsQ2JVOHNZVUZCYWtJc1IwRkJhVU1zVlVGQlEzUk5MRmRCUVVRc1JVRkJhVUk3UVVGRGFFUXpRaXhaUVVGVk1rSXNXVUZCV1RSQ0xFVkJRWFJDTEVsQlFUUkNMRWxCUVRWQ08wRkJRMFFzUTBGR1JEczdRVUZKUVhwRUxHbENRVUZwUW05UExGRkJRV3BDTEVkQlFUUkNMRlZCUVVOMlRTeFhRVUZFTEVWQlFXbENPMEZCUXpORExFMUJRVWt6UWl4VlFVRlZNa0lzV1VGQldUUkNMRVZCUVhSQ0xFMUJRVGhDYUVNc1UwRkJiRU1zUlVGQk5rTTdRVUZETTBNc1VVRkJTWGROTEZOQlFWTXZUaXhWUVVGVk1rSXNXVUZCV1RSQ0xFVkJRWFJDTEVWQlFUQkNkMHNzVFVGQmRrTTdRVUZEUVN4UlFVRkpjRTBzV1VGQldXOU5MRTFCUVZvc1MwRkJkVUo0VFN4VFFVRXpRaXhGUVVGelF6dEJRVU53UTNkTkxHVkJRVk1zU1VGQlNURk1MRXRCUVVzeVN5eGxRVUZVTEVWQlFWUTdRVUZEUVdVc1lVRkJUMlFzZVVKQlFWQXNRMEZCYVVOMFRDeFpRVUZaYjAwc1RVRkJXaXhEUVVGdFFtSXNiMEpCUVhCRU8wRkJRMEZoTEdGQlFVOWFMREpDUVVGUUxFTkJRVzFEZUV3c1dVRkJXVzlOTEUxQlFWb3NRMEZCYlVKWUxITkNRVUYwUkR0QlFVTkJWeXhoUVVGUFZpeDFRa0ZCVUN4RFFVRXJRakZNTEZsQlFWbHZUU3hOUVVGYUxFTkJRVzFDVkN4clFrRkJiRVE3UVVGRFFWTXNZVUZCVDFJc01rSkJRVkFzUTBGQmJVTTFUQ3haUVVGWmIwMHNUVUZCV2l4RFFVRnRRbEFzY1VKQlFYUkVPMEZCUTBGUExHRkJRVTlPTEhkQ1FVRlFMRU5CUVdkRE9Vd3NXVUZCV1c5TkxFMUJRVm9zUTBGQmJVSk1MRzlDUVVGdVJEdEJRVU5FT3p0QlFVVkVhRThzV1VGQlVYZERMRWxCUVZJc1EwRkJZVkFzV1VGQldYZE5MR2RDUVVGYUxFTkJRVFpDY0Uwc1EwRkJNVU03UVVGRFFYSkRMRmxCUVZGNVF5eEpRVUZTTEVOQlFXRlNMRmxCUVZsM1RTeG5Ra0ZCV2l4RFFVRTJRbTVOTEVOQlFURkRPMEZCUTBGMFF5eFpRVUZSTUVNc1NVRkJVaXhEUVVGaFZDeFpRVUZaZDAwc1owSkJRVm9zUTBGQk5rSnNUU3hEUVVFeFF6czdRVUZGUVhSRExGbEJRVkYxUXl4SlFVRlNMRU5CUVdGUUxGbEJRVmw1VFN4bFFVRmFMRU5CUVRSQ2NrMHNRMEZCZWtNN1FVRkRRWEJETEZsQlFWRjNReXhKUVVGU0xFTkJRV0ZTTEZsQlFWbDVUU3hsUVVGYUxFTkJRVFJDY0Uwc1EwRkJla003UVVGRFFYSkRMRmxCUVZGNVF5eEpRVUZTTEVOQlFXRlVMRmxCUVZsNVRTeGxRVUZhTEVOQlFUUkNiazBzUTBGQmVrTTdPMEZCUlVGeVF5eFpRVUZSYzBNc1NVRkJVaXhEUVVGaFVDeFpRVUZaTUUwc1ZVRkJXaXhEUVVGMVFuUk5MRU5CUVhCRE8wRkJRMEZ1UXl4WlFVRlJkVU1zU1VGQlVpeERRVUZoVWl4WlFVRlpNRTBzVlVGQldpeERRVUYxUW5KTkxFTkJRWEJETzBGQlEwRndReXhaUVVGUmQwTXNTVUZCVWl4RFFVRmhWQ3haUVVGWk1FMHNWVUZCV2l4RFFVRjFRbkJOTEVOQlFYQkRPenRCUVVWQmFrTXNZMEZCVlRKQ0xGbEJRVmswUWl4RlFVRjBRaXhGUVVFd1FqSkxMRkZCUVRGQ0xFTkJRMFY0VHl4UFFVUkdMRVZCUlVWRExFOUJSa1lzUlVGSFJVTXNUMEZJUml4RlFVbEZLMElzV1VGQldUSk5MSE5DUVVwa0xFVkJTMFV6VFN4WlFVRlpORTBzV1VGTVpDeEZRVTFGVWl4TlFVNUdMRVZCVDBWd1RTeFpRVUZaTmswc1kwRlFaRHRCUVZORU96dEJRVVZFY0ZBN08wRkJSVUVzVFVGQlNTdENMRzlDUVVGS0xFVkJRVEJDTzBGQlEzaENVaXh2UWtGQlowSXNTVUZCU1hOR0xGbEJRVW9zUTBGQmFVSXNTVUZCU1RkSExHTkJRV015UWl4elFrRkJia01zUTBGQmFFSXNRMEZFZDBJc1EwRkRiMFE3UVVGRE5VVktMR3RDUVVGakxFTkJRV1FzU1VGQmJVSjBReXhqUVVGalJ5eGhRVUZxUXp0QlFVTkVMRWRCU0VRc1RVRkhUMjFETEdkQ1FVRm5RaXhEUVVGRGRFTXNZMEZCWTBjc1lVRkJaaXhEUVVGb1FqdEJRVU5TTEVOQmVrTkVPenRCUVRKRFFYTkNMR2xDUVVGcFFqSlBMRmRCUVdwQ0xFZEJRU3RDTEZWQlFVTkRMRTlCUVVRc1JVRkJZVHRCUVVNeFF5eE5RVUZKTVU4c1ZVRkJWVEJQTEZGQlFWRnVUQ3hGUVVGc1FpeE5RVUV3UW1oRExGTkJRVGxDTEVWQlFYbERka0lzVlVGQlZUQlBMRkZCUVZGdVRDeEZRVUZzUWl4RlFVRnpRbTlNTEdkQ1FVRjBRaXhEUVVGMVEwUXNVVUZCVVVVc1VVRkJMME1zUlVGQmVVUkdMRkZCUVZGSExFdEJRV3BGTzBGQlF6RkRMRU5CUmtRN08wRkJTVUV2VHl4cFFrRkJhVUpuVUN4UlFVRnFRaXhIUVVFMFFpeFZRVUZEU2l4UFFVRkVMRVZCUVdFN1FVRkRka01zVFVGQlNURlBMRlZCUVZVd1R5eFJRVUZSYmt3c1JVRkJiRUlzVFVGQk1FSm9ReXhUUVVFNVFpeEZRVUY1UTNaQ0xGVkJRVlV3VHl4UlFVRlJia3dzUlVGQmJFSXNSVUZCYzBKMVRDeFJRVUYwUWl4RFFVRXJRa29zVVVGQlVVc3NTMEZCZGtNc1JVRkJPRU5NTEZGQlFWRkhMRXRCUVhSRU8wRkJRekZETEVOQlJrUTdPMEZCU1VFdlR5eHBRa0ZCYVVKclVDeG5Ra0ZCYWtJc1IwRkJiME1zVlVGQlEwNHNUMEZCUkN4RlFVRmhPMEZCUXk5RExFMUJRVWt4VHl4VlFVRlZNRThzVVVGQlVXNU1MRVZCUVd4Q0xFMUJRVEJDYUVNc1UwRkJPVUlzUlVGQmVVTjJRaXhWUVVGVk1FOHNVVUZCVVc1TUxFVkJRV3hDTEVWQlFYTkNlVXdzWjBKQlFYUkNMRU5CUVhWRFRpeFJRVUZSVHl4TFFVRXZReXhGUVVGelJGQXNVVUZCVVVjc1MwRkJPVVE3UVVGRE1VTXNRMEZHUkRzN1FVRkpRUzlQTEdsQ1FVRnBRbTlRTEZsQlFXcENMRWRCUVdkRExGVkJRVU5TTEU5QlFVUXNSVUZCWVR0QlFVTXpReXhOUVVGSk0wOHNVMEZCVXpKUExGRkJRVkZ1VEN4RlFVRnFRaXhGUVVGeFFqRkNMRWxCUVhKQ0xFdEJRVGhDTEVOQlFXeERMRVZCUVhGRE8wRkJRMjVETVVNN1FVRkRRVWNzTmtKQlFYbENVeXhUUVVGVE1rOHNVVUZCVVc1TUxFVkJRV3BDTEVWQlFYRkNORWdzVjBGQmNrSXNSMEZCYlVORUxFbEJRVzVETEVWQlFYcENPMEZCUTBGNlRDeFZRVUZOTUZBc1kwRkJUaXhEUVVGeFFuQlFMRk5CUVZNeVR5eFJRVUZSYmt3c1JVRkJha0lzUTBGQmNrSTdRVUZEUkN4SFFVcEVMRTFCU1U4c1NVRkJTWGhFTEZOQlFWTXlUeXhSUVVGUmJrd3NSVUZCYWtJc1JVRkJjVUl4UWl4SlFVRnlRaXhMUVVFNFFpeERRVUZzUXl4RlFVRnhRenRCUVVNeFF6TkRPMEZCUTBGUExGVkJRVTB5VUN4bFFVRk9MRU5CUVhOQ2NsQXNVMEZCVXpKUExGRkJRVkZ1VEN4RlFVRnFRaXhEUVVGMFFqdEJRVU5CYkVJc1UwRkJTM05LTEU5QlFVd3NRMEZCWVhaTUxHVkJRV1Z6VHl4UlFVRlJia3dzUlVGQmRrSXNRMEZCWWp0QlFVTkVPenRCUVVWRWJFSXNUMEZCUzNOS0xFOUJRVXdzUTBGQllUVk1MRk5CUVZNeVR5eFJRVUZSYmt3c1JVRkJha0lzUTBGQllqdEJRVU5CTEUxQlFVbHFSQ3hwUWtGQmFVSnZUeXhSUVVGUmJrd3NSVUZCZWtJc1EwRkJTaXhGUVVGclEyeENMRXRCUVV0elNpeFBRVUZNTEVOQlFXRnlUQ3hwUWtGQmFVSnZUeXhSUVVGUmJrd3NSVUZCZWtJc1EwRkJZanRCUVVOc1F5eE5RVUZKYkVRc2EwSkJRV3RDY1U4c1VVRkJVVzVNTEVWQlFURkNMRU5CUVVvc1JVRkJiVU5zUWl4TFFVRkxjMG9zVDBGQlRDeERRVUZoZEV3c2EwSkJRV3RDY1U4c1VVRkJVVzVNTEVWQlFURkNMRU5CUVdJN08wRkJSVzVEY2tRc1owSkJRV05JTEZOQlFWTXlUeXhSUVVGUmJrd3NSVUZCYWtJc1JVRkJjVUp6U2l4RFFVRnlRaXhMUVVFeVFuUk1MRk5CUVROQ0xFZEJRWFZEZUVJc1UwRkJVekpQTEZGQlFWRnVUQ3hGUVVGcVFpeEZRVUZ4UW5OS0xFTkJRVFZFTEVkQlFXZEZPVTBzVTBGQlV6SlBMRkZCUVZGdVRDeEZRVUZxUWl4RlFVRnhRazBzUjBGQmJrY3NTVUZCTUVjc1NVRkJNVWM3UVVGRFFUbEVMRmRCUVZNeVR5eFJRVUZSYmt3c1JVRkJha0lzU1VGQmRVSXNTVUZCZGtJN1FVRkRRVzVFTEdsQ1FVRmxjMDhzVVVGQlVXNU1MRVZCUVhaQ0xFbEJRVFpDTEVsQlFUZENPenRCUVVWQkxFMUJRVWxxUkN4cFFrRkJhVUp2VHl4UlFVRlJia3dzUlVGQmVrSXNRMEZCU2l4RlFVRnJRMnBFTEdsQ1FVRnBRbTlQTEZGQlFWRnVUQ3hGUVVGNlFpeEpRVUVyUWl4SlFVRXZRanRCUVVOc1F5eE5RVUZKYkVRc2EwSkJRV3RDY1U4c1VVRkJVVzVNTEVWQlFURkNMRU5CUVVvc1JVRkJiVU5zUkN4clFrRkJhMEp4VHl4UlFVRlJia3dzUlVGQk1VSXNTVUZCWjBNc1NVRkJhRU03UVVGRGJrTjBSVHRCUVVORUxFTkJkRUpFT3p0QlFYZENRV0VzYVVKQlFXbENkVkFzWlVGQmFrSXNSMEZCYlVNc1ZVRkJRMWdzVDBGQlJDeEZRVUZoTzBGQlF6bERMMUFzV1VGQlZXOUNMRk5CUVZNeVR5eFJRVUZSYmt3c1JVRkJha0lzUTBGQlZqczdRVUZGUVN4TlFVRkpOVVVzVVVGQlVXdEVMRWxCUVZJc1MwRkJhVUlzUTBGQmNrSXNSVUZCZDBJN1FVRkRkRUpzUkN4WlFVRlJNbEVzWTBGQlVpeEhRVUY1UWtNc2FVSkJRWHBDTEVOQlFUSkRNVkVzVlVGQk0wTTdPMEZCUlVFc1VVRkJTVFpRTEZGQlFWRmpMRWRCUVZvc1JVRkJhVUk3UVVGRFpqbFFMR05CUVZGM1F5eEpRVUZTTEVOQlFXRjNUU3hSUVVGUll5eEhRVUZTTEVOQlFWbDZUaXhEUVVGNlFqdEJRVU5CY2tNc1kwRkJVWGxETEVsQlFWSXNRMEZCWVhWTkxGRkJRVkZqTEVkQlFWSXNRMEZCV1hoT0xFTkJRWHBDTzBGQlEwRjBReXhqUVVGUk1FTXNTVUZCVWl4RFFVRmhjMDBzVVVGQlVXTXNSMEZCVWl4RFFVRlpkazRzUTBGQmVrSTdRVUZEUVhCRUxHbENRVUZYTWt3c1UwRkJXQ3hEUVVGeFFqbExMRTlCUVhKQ08wRkJRMFE3TzBGQlJVUXNVVUZCU1dkUUxGRkJRVkZsTEVsQlFWb3NSVUZCYTBJN1FVRkRhRUkxVUN4WlFVRk5jVU1zU1VGQlRpeERRVUZYZDAwc1VVRkJVV1VzU1VGQlVpeERRVUZoTVU0c1EwRkJlRUk3UVVGRFFXeERMRmxCUVUxelF5eEpRVUZPTEVOQlFWZDFUU3hSUVVGUlpTeEpRVUZTTEVOQlFXRjZUaXhEUVVGNFFqdEJRVU5CYmtNc1dVRkJUWFZETEVsQlFVNHNRMEZCVjNOTkxGRkJRVkZsTEVsQlFWSXNRMEZCWVhoT0xFTkJRWGhDTzBGQlEwRndReXhaUVVGTk5rc3NTVUZCVGl4RFFVRlhaMFVzVVVGQlVXVXNTVUZCVWl4RFFVRmhPVVVzUTBGQmVFSTdRVUZEUVRsTUxHbENRVUZYSzB3c1YwRkJXQ3hEUVVGMVFpOUxMRXRCUVhaQ08wRkJRMFE3TzBGQlJVUnNRaXhaUVVGUksxRXNhVUpCUVZJc1EwRkJNRUkzVVN4VlFVRXhRanRCUVVOQlJpeFpRVUZSYVU4c1VVRkJVanRCUVVORUxFZEJjRUpFTEUxQmIwSlBMRWxCUVVscVR5eFJRVUZSYTBRc1NVRkJVaXhMUVVGcFFpeERRVUZ5UWl4RlFVRjNRanRCUVVNM1FqczdRVUZGUVN4UlFVRkpOazBzVVVGQlVXTXNSMEZCV2l4RlFVRnBRanRCUVVObU9WQXNZMEZCVVhkRExFbEJRVklzUTBGQllYZE5MRkZCUVZGakxFZEJRVklzUTBGQldYcE9MRU5CUVhwQ08wRkJRMEZ5UXl4alFVRlJlVU1zU1VGQlVpeERRVUZoZFUwc1VVRkJVV01zUjBGQlVpeERRVUZaZUU0c1EwRkJla0k3UVVGRFFYUkRMR05CUVZFd1F5eEpRVUZTTEVOQlFXRnpUU3hSUVVGUll5eEhRVUZTTEVOQlFWbDJUaXhEUVVGNlFqdEJRVU5CY0VRc2FVSkJRVmN5VEN4VFFVRllMRU5CUVhGQ09Vc3NUMEZCY2tJN1FVRkRSRHM3UVVGRlJDeFJRVUZKWjFBc1VVRkJVV1VzU1VGQldpeEZRVUZyUWp0QlFVTm9RalZRTEZsQlFVMXhReXhKUVVGT0xFTkJRVmQzVFN4UlFVRlJaU3hKUVVGU0xFTkJRV0V4VGl4RFFVRjRRanRCUVVOQmJFTXNXVUZCVFhORExFbEJRVTRzUTBGQlYzVk5MRkZCUVZGbExFbEJRVklzUTBGQllYcE9MRU5CUVhoQ08wRkJRMEZ1UXl4WlFVRk5kVU1zU1VGQlRpeERRVUZYYzAwc1VVRkJVV1VzU1VGQlVpeERRVUZoZUU0c1EwRkJlRUk3UVVGRFFYQkRMRmxCUVUwMlN5eEpRVUZPTEVOQlFWZG5SU3hSUVVGUlpTeEpRVUZTTEVOQlFXRTVSU3hEUVVGNFFqdEJRVU5CT1V3c2FVSkJRVmNyVEN4WFFVRllMRU5CUVhWQ0wwc3NTMEZCZGtJN1FVRkRSRHM3UVVGRlJHeENMRmxCUVZGclRTeFRRVUZTTEVOQlFXdENhRTBzVlVGQmJFSTdRVUZEUkR0QlFVTkdMRU5CTTBORU96dEJRVFpEUVdsQ0xHbENRVUZwUWpaUUxGVkJRV3BDTEVkQlFUaENMRlZCUVVOcVFpeFBRVUZFTEVWQlFXRTdRVUZEZWtNN1FVRkRRUzlRTEZsQlFWVnZRaXhUUVVGVE1rOHNVVUZCVVc1TUxFVkJRV3BDTEVOQlFWWTdPMEZCUlVFN1FVRkRRVGxFTEZGQlFVMHlVQ3hsUVVGT0xFTkJRWE5DZWxFc1QwRkJkRUk3TzBGQlJVRmxMRlZCUVZGM1F5eEpRVUZTTEVOQlFXRXNRMEZCWWp0QlFVTkJlRU1zVlVGQlVYbERMRWxCUVZJc1EwRkJZU3hEUVVGaU8wRkJRMEY2UXl4VlFVRlJNRU1zU1VGQlVpeERRVUZoTEVOQlFXSTdPMEZCUlVGNlJDeFZRVUZSYVZJc1dVRkJVaXhEUVVGeFFteENMRkZCUVZFelJDeEpRVUUzUWl4RlFVRnRRM0pNTEU5QlFXNURPMEZCUTBGRUxGRkJRVTFyVGl4WlFVRk9MRU5CUVcxQ2FFOHNUMEZCYmtJN1FVRkRRVUVzVlVGQlVXbFBMRkZCUVZJN1FVRkRSQ3hEUVdSRU96dEJRV2RDUVRsTkxHbENRVUZwUWl0UUxHMUNRVUZxUWl4SFFVRjFReXhWUVVGRGJrSXNUMEZCUkN4RlFVRmhPMEZCUTJ4RWFGQXNWVUZCVVhkRExFbEJRVklzUTBGQllYZE5MRkZCUVZFelRTeERRVUZ5UWp0QlFVTkJja01zVlVGQlVYbERMRWxCUVZJc1EwRkJZWFZOTEZGQlFWRXhUU3hEUVVGeVFqdEJRVU5CZEVNc1ZVRkJVVEJETEVsQlFWSXNRMEZCWVhOTkxGRkJRVkY2VFN4RFFVRnlRanM3UVVGRlFXeERMRmRCUVZNeVR5eFJRVUZSYmt3c1JVRkJha0lzUlVGQmNVSnpUU3h0UWtGQmNrSXNRMEZCZVVOdVVTeFBRVUY2UXp0QlFVTkJTeXhYUVVGVE1rOHNVVUZCVVc1TUxFVkJRV3BDTEVWQlFYRkNjVW9zVVVGQmNrSTdRVUZEUkN4RFFWQkVPenRCUVZOQk9VMHNhVUpCUVdsQ1oxRXNXVUZCYWtJc1IwRkJaME1zVlVGQlEzQkNMRTlCUVVRc1JVRkJZVHRCUVVNelEyaFFMRlZCUVZGM1F5eEpRVUZTTEVOQlFXRjNUU3hSUVVGUmNVSXNVMEZCY2tJN1FVRkRRWEpSTEZWQlFWRjVReXhKUVVGU0xFTkJRV0YxVFN4UlFVRlJjMElzVTBGQmNrSTdRVUZEUVhSUkxGVkJRVkV3UXl4SlFVRlNMRU5CUVdGelRTeFJRVUZSZFVJc1UwRkJja0k3TzBGQlJVRjBVU3hWUVVGUmRVTXNTVUZCVWl4RFFVRmhkMDBzVVVGQlVUTk5MRU5CUVhKQ08wRkJRMEZ3UXl4VlFVRlJkME1zU1VGQlVpeERRVUZoZFUwc1VVRkJVVEZOTEVOQlFYSkNPMEZCUTBGeVF5eFZRVUZSZVVNc1NVRkJVaXhEUVVGaGMwMHNVVUZCVVhwTkxFTkJRWEpDT3p0QlFVVkJiRU1zVjBGQlV6SlBMRkZCUVZGdVRDeEZRVUZxUWl4RlFVRnhRblZOTEZsQlFYSkNMRU5CUTBWd1VTeFBRVVJHTEVWQlJVVkRMRTlCUmtZN1FVRkpRVWtzVjBGQlV6SlBMRkZCUVZGdVRDeEZRVUZxUWl4RlFVRnhRbkZLTEZGQlFYSkNPMEZCUTBRc1EwRmtSRHM3UVVGblFrRTVUU3hwUWtGQmFVSnZVU3hYUVVGcVFpeEhRVUVyUWl4VlFVRkRlRUlzVDBGQlJDeEZRVUZoTzBGQlF6RkRhRkFzVlVGQlVYZERMRWxCUVZJc1EwRkJZWGROTEZGQlFWRjVRaXhSUVVGeVFqdEJRVU5CZWxFc1ZVRkJVWGxETEVsQlFWSXNRMEZCWVhWTkxGRkJRVkV3UWl4UlFVRnlRanRCUVVOQk1WRXNWVUZCVVRCRExFbEJRVklzUTBGQllYTk5MRkZCUVZFeVFpeFJRVUZ5UWpzN1FVRkZRWFJSTEZkQlFWTXlUeXhSUVVGUmJrd3NSVUZCYWtJc1JVRkJjVUl5VFN4WFFVRnlRaXhEUVVORmVGRXNUMEZFUmp0QlFVZEJTeXhYUVVGVE1rOHNVVUZCVVc1TUxFVkJRV3BDTEVWQlFYRkNjVW9zVVVGQmNrSTdRVUZEUkN4RFFWUkVPenRCUVZkQk9VMHNhVUpCUVdsQ2QxRXNhVUpCUVdwQ0xFZEJRWEZETEZWQlFVTTFRaXhQUVVGRUxFVkJRV0U3UVVGRGFFUm9VQ3hWUVVGUmQwTXNTVUZCVWl4RFFVRmhkMDBzVVVGQlVUTk5MRU5CUVhKQ08wRkJRMEZ5UXl4VlFVRlJlVU1zU1VGQlVpeERRVUZoZFUwc1VVRkJVVEZOTEVOQlFYSkNPMEZCUTBGMFF5eFZRVUZSTUVNc1NVRkJVaXhEUVVGaGMwMHNVVUZCVVhwTkxFTkJRWEpDT3p0QlFVVkJiRU1zVjBGQlV6SlBMRkZCUVZGdVRDeEZRVUZxUWl4RlFVRnhRaXROTEdsQ1FVRnlRaXhEUVVGMVF6VlJMRTlCUVhaRE8wRkJRMEZMTEZkQlFWTXlUeXhSUVVGUmJrd3NSVUZCYWtJc1JVRkJjVUp4U2l4UlFVRnlRanRCUVVORUxFTkJVRVE3TzBGQlUwRTVUU3hwUWtGQmFVSjVVU3hWUVVGcVFpeEhRVUU0UWl4VlFVRkROMElzVDBGQlJDeEZRVUZoTzBGQlEzcERhRkFzVlVGQlVYZERMRWxCUVZJc1EwRkJZWGROTEZGQlFWRTRRaXhQUVVGeVFqdEJRVU5CT1ZFc1ZVRkJVWGxETEVsQlFWSXNRMEZCWVhWTkxGRkJRVkVyUWl4UFFVRnlRanRCUVVOQkwxRXNWVUZCVVRCRExFbEJRVklzUTBGQllYTk5MRkZCUVZGblF5eFBRVUZ5UWpzN1FVRkZRUzlSTEZWQlFWRjFReXhKUVVGU0xFTkJRV0YzVFN4UlFVRlJNMDBzUTBGQmNrSTdRVUZEUVhCRExGVkJRVkYzUXl4SlFVRlNMRU5CUVdGMVRTeFJRVUZSTVUwc1EwRkJja0k3UVVGRFFYSkRMRlZCUVZGNVF5eEpRVUZTTEVOQlFXRnpUU3hSUVVGUmVrMHNRMEZCY2tJN08wRkJSVUZzUXl4WFFVRlRNazhzVVVGQlVXNU1MRVZCUVdwQ0xFVkJRWEZDWjA0c1ZVRkJja0lzUTBGRFJUZFJMRTlCUkVZc1JVRkZSVU1zVDBGR1JqdEJRVWxCU1N4WFFVRlRNazhzVVVGQlVXNU1MRVZCUVdwQ0xFVkJRWEZDY1Vvc1VVRkJja0k3UVVGRFJDeERRV1JFT3p0QlFXZENRVGxOTEdsQ1FVRnBRalpSTEd0Q1FVRnFRaXhIUVVGelF5eFpRVUZOTzBGQlF6RkRibElzZVVKQlFYVkNiMUlzUzBGQlMwTXNSMEZCVEN4RlFVRjJRanRCUVVORUxFTkJSa1E3TzBGQlNVRXZVU3hwUWtGQmFVSm5VaXhyUWtGQmFrSXNSMEZCYzBNc1ZVRkJRM0JETEU5QlFVUXNSVUZCWVR0QlFVTnFSR2hRTEZWQlFWRjNReXhKUVVGU0xFTkJRV0YzVFN4UlFVRlJNMDBzUTBGQmNrSTdRVUZEUVhKRExGVkJRVkY1UXl4SlFVRlNMRU5CUVdGMVRTeFJRVUZSTVUwc1EwRkJja0k3UVVGRFFYUkRMRlZCUVZFd1F5eEpRVUZTTEVOQlFXRnpUU3hSUVVGUmVrMHNRMEZCY2tJN08wRkJSVUZzUXl4WFFVRlRNazhzVVVGQlVXNU1MRVZCUVdwQ0xFVkJRWEZDZFU0c2EwSkJRWEpDTEVOQlEwVndVaXhQUVVSR08wRkJSMEZMTEZkQlFWTXlUeXhSUVVGUmJrd3NSVUZCYWtJc1JVRkJjVUp4U2l4UlFVRnlRanRCUVVORUxFTkJWRVE3TzBGQlYwRTVUU3hwUWtGQmFVSnBVaXhwUWtGQmFrSXNSMEZCY1VNc1ZVRkJRM0pETEU5QlFVUXNSVUZCWVR0QlFVTm9SR2hRTEZWQlFWRjNReXhKUVVGU0xFTkJRV0YzVFN4UlFVRlJNMDBzUTBGQmNrSTdRVUZEUVhKRExGVkJRVkY1UXl4SlFVRlNMRU5CUVdGMVRTeFJRVUZSTVUwc1EwRkJja0k3UVVGRFFYUkRMRlZCUVZFd1F5eEpRVUZTTEVOQlFXRnpUU3hSUVVGUmVrMHNRMEZCY2tJN08wRkJSVUZzUXl4WFFVRlRNazhzVVVGQlVXNU1MRVZCUVdwQ0xFVkJRWEZDZDA0c2FVSkJRWEpDTEVOQlEwVnlVaXhQUVVSR08wRkJSMEZMTEZkQlFWTXlUeXhSUVVGUmJrd3NSVUZCYWtJc1JVRkJjVUp4U2l4UlFVRnlRanRCUVVORUxFTkJWRVE3TzBGQlYwRTVUU3hwUWtGQmFVSnJVaXhuUWtGQmFrSXNSMEZCYjBNc1ZVRkJRM1JETEU5QlFVUXNSVUZCWVR0QlFVTXZRMmhRTEZWQlFWRjNReXhKUVVGU0xFTkJRV0YzVFN4UlFVRlJNMDBzUTBGQmNrSTdRVUZEUVhKRExGVkJRVkY1UXl4SlFVRlNMRU5CUVdGMVRTeFJRVUZSTVUwc1EwRkJja0k3UVVGRFFYUkRMRlZCUVZFd1F5eEpRVUZTTEVOQlFXRnpUU3hSUVVGUmVrMHNRMEZCY2tJN08wRkJSVUZzUXl4WFFVRlRNazhzVVVGQlVXNU1MRVZCUVdwQ0xFVkJRWEZDZVU0c1owSkJRWEpDTEVOQlEwbDBVaXhQUVVSS08wRkJSMFFzUTBGU1JEczdRVUZWUVVrc2FVSkJRV2xDYlZJc1pVRkJha0lzUjBGQmJVTXNWVUZCUTNaRExFOUJRVVFzUlVGQllUdEJRVU01UTJoUUxGVkJRVkYzUXl4SlFVRlNMRU5CUVdGM1RTeFJRVUZSTTAwc1EwRkJja0k3UVVGRFFYSkRMRlZCUVZGNVF5eEpRVUZTTEVOQlFXRjFUU3hSUVVGUk1VMHNRMEZCY2tJN1FVRkRRWFJETEZWQlFWRXdReXhKUVVGU0xFTkJRV0Z6VFN4UlFVRlJlazBzUTBGQmNrSTdPMEZCUlVGc1F5eFhRVUZUTWs4c1VVRkJVVzVNTEVWQlFXcENMRVZCUVhGQ01FNHNaVUZCY2tJc1EwRkRSWFpTTEU5QlJFWTdRVUZIUkN4RFFWSkVPenRCUVZWQlNTeHBRa0ZCYVVKdlVpeFZRVUZxUWl4SFFVRTRRaXhWUVVGRGVFTXNUMEZCUkN4RlFVRmhPMEZCUTNwRE0wOHNWMEZCVXpKUExGRkJRVkZ1VEN4RlFVRnFRaXhGUVVGeFFqSk9MRlZCUVhKQ0xFTkJRV2REZUVNc1VVRkJVWGxETEUxQlFYaERMRVZCUVdkRWVrTXNVVUZCVVRCRExFOUJRWGhFTzBGQlEwUXNRMEZHUkRzN1FVRkpRWFJTTEdsQ1FVRnBRblZTTEhGQ1FVRnFRaXhIUVVGNVF5eFZRVUZETTBNc1QwRkJSQ3hGUVVGaE8wRkJRM0JFTTA4c1YwRkJVekpQTEZGQlFWRnVUQ3hGUVVGcVFpeEZRVUZ4UWpoT0xIRkNRVUZ5UWl4RFFVRXlRek5ETEZGQlFWRTBReXhUUVVGdVJEdEJRVU5FTEVOQlJrUTdPMEZCU1VGNFVpeHBRa0ZCYVVKNVVpeDFRa0ZCYWtJc1IwRkJNa01zVlVGQlF6ZERMRTlCUVVRc1JVRkJZVHRCUVVOMFJETlBMRmRCUVZNeVR5eFJRVUZSYmt3c1JVRkJha0lzUlVGQmNVSm5UeXgxUWtGQmNrSXNRMEZCTmtNM1F5eFJRVUZSTDB3c1RVRkJja1E3UVVGRFJDeERRVVpFT3p0QlFVbEJOME1zYVVKQlFXbENNRklzWVVGQmFrSXNSMEZCYVVNc1ZVRkJRemxETEU5QlFVUXNSVUZCWVR0QlFVTTFReXhOUVVGSkswTXNiVUpCUVVvN08wRkJSVUVzVlVGQlVTOURMRkZCUVZFM1RTeEpRVUZvUWpzN1FVRkZSU3hUUVVGTExFOUJRVXc3UVVGQll6dEJRVU5hTEZsQlFVazJUU3hSUVVGUlowUXNUMEZCVWl4TFFVRnZRbTVSTEZOQlFYaENMRVZCUVcxRE8wRkJRMnBETjBJc2EwSkJRVkYzUXl4SlFVRlNMRU5CUVdGM1RTeFJRVUZSYVVRc1UwRkJVaXhEUVVGclFqVlFMRU5CUVM5Q08wRkJRMEZ5UXl4clFrRkJVWGxETEVsQlFWSXNRMEZCWVhWTkxGRkJRVkZwUkN4VFFVRlNMRU5CUVd0Q00xQXNRMEZCTDBJN1FVRkRRWFJETEd0Q1FVRlJNRU1zU1VGQlVpeERRVUZoYzAwc1VVRkJVV2xFTEZOQlFWSXNRMEZCYTBJeFVDeERRVUV2UWpzN1FVRkZRWGRRTEhWQ1FVRmhMRWxCUVVsd1VDeExRVUZMZFZBc2RVSkJRVlFzUTBGRFdEZFNMRk5CUVZNeVR5eFJRVUZSYlVRc1QwRkJha0lzUTBGRVZ5eEZRVVZZYmxNc1QwRkdWeXhEUVVGaU8wRkJTVVFzVTBGVVJDeE5RVk5QTzBGQlEweEJMR3RDUVVGUmQwTXNTVUZCVWl4RFFVRmhkMDBzVVVGQlVXbEVMRk5CUVZJc1EwRkJhMEkxVUN4RFFVRXZRanRCUVVOQmNrTXNhMEpCUVZGNVF5eEpRVUZTTEVOQlFXRjFUU3hSUVVGUmFVUXNVMEZCVWl4RFFVRnJRak5RTEVOQlFTOUNPMEZCUTBGMFF5eHJRa0ZCVVRCRExFbEJRVklzUTBGQllYTk5MRkZCUVZGcFJDeFRRVUZTTEVOQlFXdENNVkFzUTBGQkwwSTdPMEZCUlVGMFF5eHJRa0ZCVVhWRExFbEJRVklzUTBGQllYZE5MRkZCUVZGdlJDeFRRVUZTTEVOQlFXdENMMUFzUTBGQkwwSTdRVUZEUVhCRExHdENRVUZSZDBNc1NVRkJVaXhEUVVGaGRVMHNVVUZCVVc5RUxGTkJRVklzUTBGQmEwSTVVQ3hEUVVFdlFqdEJRVU5CY2tNc2EwSkJRVkY1UXl4SlFVRlNMRU5CUVdGelRTeFJRVUZSYjBRc1UwRkJVaXhEUVVGclFqZFFMRU5CUVM5Q096dEJRVVZCZDFBc2RVSkJRV0VzU1VGQlNYQlFMRXRCUVV0MVVDeDFRa0ZCVkN4RFFVTllOMUlzVTBGQlV6SlBMRkZCUVZGdFJDeFBRVUZxUWl4RFFVUlhMRVZCUlZnNVVpeFRRVUZUTWs4c1VVRkJVV2RFTEU5QlFXcENMRU5CUmxjc1JVRkhXR2hUTEU5QlNGY3NSVUZKV0VNc1QwRktWeXhEUVVGaU8wRkJUVVE3UVVGRFJEdEJRVU5FTzBGQlEwUXNVMEZCU3l4UFFVRk1PMEZCUVdNN1FVRkRXaXhaUVVGSkswOHNVVUZCVVdkRUxFOUJRVklzUzBGQmIwSnVVU3hUUVVGNFFpeEZRVUZ0UXp0QlFVTnFRemRDTEd0Q1FVRlJkME1zU1VGQlVpeERRVUZoZDAwc1VVRkJVV2xFTEZOQlFWSXNRMEZCYTBJMVVDeERRVUV2UWp0QlFVTkJja01zYTBKQlFWRjVReXhKUVVGU0xFTkJRV0YxVFN4UlFVRlJhVVFzVTBGQlVpeERRVUZyUWpOUUxFTkJRUzlDTzBGQlEwRjBReXhyUWtGQlVUQkRMRWxCUVZJc1EwRkJZWE5OTEZGQlFWRnBSQ3hUUVVGU0xFTkJRV3RDTVZBc1EwRkJMMEk3TzBGQlJVRjBReXhyUWtGQlVYVkRMRWxCUVZJc1EwRkJZWGROTEZGQlFWRnhSQ3hKUVVGU0xFTkJRV0ZvVVN4RFFVRXhRanRCUVVOQmNFTXNhMEpCUVZGM1F5eEpRVUZTTEVOQlFXRjFUU3hSUVVGUmNVUXNTVUZCVWl4RFFVRmhMMUFzUTBGQk1VSTdRVUZEUVhKRExHdENRVUZSZVVNc1NVRkJVaXhEUVVGaGMwMHNVVUZCVVhGRUxFbEJRVklzUTBGQllUbFFMRU5CUVRGQ096dEJRVVZCZDFBc2RVSkJRV0VzU1VGQlNYQlFMRXRCUVVzeVVDeHBRa0ZCVkN4RFFVTllhbE1zVTBGQlV6SlBMRkZCUVZGdFJDeFBRVUZxUWl4RFFVUlhMRVZCUlZodVV5eFBRVVpYTEVWQlIxaERMRTlCU0Zjc1EwRkJZanRCUVUxRUxGTkJaa1FzVFVGbFR6dEJRVU5NUkN4clFrRkJVWGRETEVsQlFWSXNRMEZCWVhkTkxGRkJRVkZwUkN4VFFVRlNMRU5CUVd0Q05WQXNRMEZCTDBJN1FVRkRRWEpETEd0Q1FVRlJlVU1zU1VGQlVpeERRVUZoZFUwc1VVRkJVV2xFTEZOQlFWSXNRMEZCYTBJelVDeERRVUV2UWp0QlFVTkJkRU1zYTBKQlFWRXdReXhKUVVGU0xFTkJRV0Z6VFN4UlFVRlJhVVFzVTBGQlVpeERRVUZyUWpGUUxFTkJRUzlDT3p0QlFVVkJkRU1zYTBKQlFWRjFReXhKUVVGU0xFTkJRV0YzVFN4UlFVRlJiMFFzVTBGQlVpeERRVUZyUWk5UUxFTkJRUzlDTzBGQlEwRndReXhyUWtGQlVYZERMRWxCUVZJc1EwRkJZWFZOTEZGQlFWRnZSQ3hUUVVGU0xFTkJRV3RDT1ZBc1EwRkJMMEk3UVVGRFFYSkRMR3RDUVVGUmVVTXNTVUZCVWl4RFFVRmhjMDBzVVVGQlVXOUVMRk5CUVZJc1EwRkJhMEkzVUN4RFFVRXZRanM3UVVGRlFYSkRMR3RDUVVGUmMwTXNTVUZCVWl4RFFVRmhkMDBzVVVGQlVYRkVMRWxCUVZJc1EwRkJZV2hSTEVOQlFURkNPMEZCUTBGdVF5eHJRa0ZCVVhWRExFbEJRVklzUTBGQllYVk5MRkZCUVZGeFJDeEpRVUZTTEVOQlFXRXZVQ3hEUVVFeFFqdEJRVU5CY0VNc2EwSkJRVkYzUXl4SlFVRlNMRU5CUVdGelRTeFJRVUZSY1VRc1NVRkJVaXhEUVVGaE9WQXNRMEZCTVVJN08wRkJSVUYzVUN4MVFrRkJZU3hKUVVGSmNGQXNTMEZCU3pKUUxHbENRVUZVTEVOQlExaHFVeXhUUVVGVE1rOHNVVUZCVVcxRUxFOUJRV3BDTEVOQlJGY3NSVUZGV0RsU0xGTkJRVk15VHl4UlFVRlJaMFFzVDBGQmFrSXNRMEZHVnl4RlFVZFlhRk1zVDBGSVZ5eEZRVWxZUXl4UFFVcFhMRVZCUzFoRExFOUJURmNzUlVGTldFRXNUMEZPVnl4RFFVRmlPMEZCVVVRN1FVRkRSRHRCUVVORU8wRkJRMFFzVTBGQlN5eFJRVUZNTzBGQlFXVTdRVUZEWWl4WlFVRkpjVk1zYlVKQlFVbzdRVUZEUVN4WlFVRk5ReXhoUVVGaExFbEJRVWszVUN4TFFVRkxlVVFzVjBGQlZDeEZRVUZ1UWpzN1FVRkZRWEJITEdkQ1FVRlJkME1zU1VGQlVpeERRVUZoZDAwc1VVRkJVV2xFTEZOQlFWSXNRMEZCYTBJMVVDeERRVUV2UWp0QlFVTkJja01zWjBKQlFWRjVReXhKUVVGU0xFTkJRV0YxVFN4UlFVRlJhVVFzVTBGQlVpeERRVUZyUWpOUUxFTkJRUzlDTzBGQlEwRjBReXhuUWtGQlVUQkRMRWxCUVZJc1EwRkJZWE5OTEZGQlFWRnBSQ3hUUVVGU0xFTkJRV3RDTVZBc1EwRkJMMEk3TzBGQlJVRnBVU3h0UWtGQlZ6RklMRk5CUVZnc1EwRkJjVUk1U3l4UFFVRnlRanM3UVVGRlFTeFpRVUZKSzBzc1YwRkJWM2xJTEZkQlFWZERMRmRCUVZnc1JVRkJaanRCUVVOQk1VZ3NhVUpCUVZNeVNDeFJRVUZVTEVOQlFXdENNVVFzVVVGQlVYRkVMRWxCUVZJc1EwRkJZV2hSTEVOQlFTOUNMRVZCUVd0RE1rMHNVVUZCVVhGRUxFbEJRVklzUTBGQllTOVFMRU5CUVM5RExFVkJRV3RFTUUwc1VVRkJVWEZFTEVsQlFWSXNRMEZCWVRsUUxFTkJRUzlFTzBGQlEwRnBVU3h0UWtGQlYzUklMRmRCUVZnc1EwRkJkVUpJTEZGQlFYWkNPenRCUVVWQkxGbEJRVWxwUlN4UlFVRlJaMFFzVDBGQldpeEZRVUZ4UWp0QlFVTnVRazhzZFVKQlFXRXNTVUZCU1RWUUxFdEJRVXQ1UkN4WFFVRlVMRVZCUVdJN08wRkJSVUZ1Unl4clFrRkJVWFZETEVsQlFWSXNRMEZCWVhkTkxGRkJRVkZ2UkN4VFFVRlNMRU5CUVd0Q0wxQXNRMEZCTDBJN1FVRkRRWEJETEd0Q1FVRlJkME1zU1VGQlVpeERRVUZoZFUwc1VVRkJVVzlFTEZOQlFWSXNRMEZCYTBJNVVDeERRVUV2UWp0QlFVTkJja01zYTBKQlFWRjVReXhKUVVGU0xFTkJRV0Z6VFN4UlFVRlJiMFFzVTBGQlVpeERRVUZyUWpkUUxFTkJRUzlDT3p0QlFVVkJaMUVzY1VKQlFWZDZTQ3hUUVVGWUxFTkJRWEZDTjBzc1QwRkJja0k3TzBGQlJVRTRTeXh4UWtGQlYzZElMRmRCUVZkRkxGZEJRVmdzUlVGQldEdEJRVU5CTVVnc2JVSkJRVk15U0N4UlFVRlVMRU5CUVd0Q01VUXNVVUZCVVhGRUxFbEJRVklzUTBGQllXaFJMRU5CUVM5Q0xFVkJRV3RETWswc1VVRkJVWEZFTEVsQlFWSXNRMEZCWVM5UUxFTkJRUzlETEVWQlFXdEVNRTBzVVVGQlVYRkVMRWxCUVZJc1EwRkJZVGxRTEVOQlFTOUVPMEZCUTBGblVTeHhRa0ZCVjNKSUxGZEJRVmdzUTBGQmRVSklMRkZCUVhaQ096dEJRVVZCWjBnc2RVSkJRV0VzU1VGQlNYQlFMRXRCUVV0blVTeHJRa0ZCVkN4RFFVTllkRk1zVTBGQlV6SlBMRkZCUVZGdFJDeFBRVUZxUWl4RFFVUlhMRVZCUlZnNVVpeFRRVUZUTWs4c1VVRkJVV2RFTEU5QlFXcENMRU5CUmxjc1JVRkhXRkVzVlVGSVZ5eEZRVWxZUkN4VlFVcFhMRVZCUzFnc1NVRk1WeXhEUVVGaU8wRkJUMFFzVTBGd1FrUXNUVUZ2UWs4N1FVRkRURklzZFVKQlFXRXNTVUZCU1hCUUxFdEJRVXRuVVN4clFrRkJWQ3hEUVVOWWRGTXNVMEZCVXpKUExGRkJRVkZ0UkN4UFFVRnFRaXhEUVVSWExFVkJSVmhMTEZWQlJsY3NSVUZIV0N4SlFVaFhMRU5CUVdJN1FVRkxSRHM3UVVGRlJGUXNiVUpCUVZkaExFVkJRVmdzUjBGQlowSktMRlZCUVdoQ08wRkJRMEZVTEcxQ1FVRlhZeXhGUVVGWUxFZEJRV2RDVGl4VlFVRm9RanM3UVVGRlFUVlFMR0ZCUVV0elNpeFBRVUZNTEVOQlFXRjFSeXhWUVVGaU8wRkJRMEVzV1VGQlNVUXNaVUZCWlRGUkxGTkJRVzVDTEVWQlFUaENZeXhMUVVGTGMwb3NUMEZCVEN4RFFVRmhjMGNzVlVGQllqczdRVUZGT1VJN1FVRkRSRHRCUVVORUxGTkJRVXNzVjBGQlREdEJRVUZyUWp0QlFVTm9RaXhaUVVGTlF5eGpRVUZoTEVsQlFVazNVQ3hMUVVGTGVVUXNWMEZCVkN4RlFVRnVRanRCUVVOQmIwMHNiMEpCUVZkMFVTeFhRVUZZT3p0QlFVVkJMRmxCUVUxeFVTeGpRVUZoTEVsQlFVazFVQ3hMUVVGTGVVUXNWMEZCVkN4RlFVRnVRanRCUVVOQmJVMHNiMEpCUVZkeVVTeFhRVUZZT3p0QlFVVkJiRU1zWjBKQlFWRjNReXhKUVVGU0xFTkJRV0YzVFN4UlFVRlJhVVFzVTBGQlVpeERRVUZyUWpWUUxFTkJRUzlDTzBGQlEwRnlReXhuUWtGQlVYbERMRWxCUVZJc1EwRkJZWFZOTEZGQlFWRnBSQ3hUUVVGU0xFTkJRV3RDTTFBc1EwRkJMMEk3UVVGRFFYUkRMR2RDUVVGUk1FTXNTVUZCVWl4RFFVRmhjMDBzVVVGQlVXbEVMRk5CUVZJc1EwRkJhMEl4VUN4RFFVRXZRanM3UVVGRlFYUkRMR2RDUVVGUmRVTXNTVUZCVWl4RFFVRmhkMDBzVVVGQlVXOUVMRk5CUVZJc1EwRkJhMEl2VUN4RFFVRXZRanRCUVVOQmNFTXNaMEpCUVZGM1F5eEpRVUZTTEVOQlFXRjFUU3hSUVVGUmIwUXNVMEZCVWl4RFFVRnJRamxRTEVOQlFTOUNPMEZCUTBGeVF5eG5Ra0ZCVVhsRExFbEJRVklzUTBGQllYTk5MRkZCUVZGdlJDeFRRVUZTTEVOQlFXdENOMUFzUTBGQkwwSTdPMEZCUlVGcFVTeHZRa0ZCVnpGSUxGTkJRVmdzUTBGQmNVSTVTeXhQUVVGeVFqdEJRVU5CZFZNc2IwSkJRVmQ2U0N4VFFVRllMRU5CUVhGQ04wc3NUMEZCY2tJN08wRkJSVUVzV1VGQlNUaExMRmxCUVZkNVNDeFpRVUZYUXl4WFFVRllMRVZCUVdZN1FVRkRRVEZJTEd0Q1FVRlRLMGdzVjBGQlZDeERRVUZ4UWl4RFFVRkRPVVFzVVVGQlVTdEVMRXRCUVZJc1EwRkJZM2hSTEVOQlFYQkRMRVZCUVhWRExFTkJRVU41VFN4UlFVRlJLMFFzUzBGQlVpeERRVUZqZWxFc1EwRkJkRVFzUlVGQmVVUXNRMEZCUXpCTkxGRkJRVkVyUkN4TFFVRlNMRU5CUVdNeFVTeERRVUY0UlR0QlFVTkJiVkVzYjBKQlFWZDBTQ3hYUVVGWUxFTkJRWFZDU0N4VFFVRjJRanM3UVVGRlFVRXNiMEpCUVZkM1NDeFpRVUZYUlN4WFFVRllMRVZCUVZnN1FVRkRRVEZJTEd0Q1FVRlRLMGdzVjBGQlZDeERRVUZ4UWl4RFFVRkRPVVFzVVVGQlVXZEZMRXRCUVZJc1EwRkJZM3BSTEVOQlFYQkRMRVZCUVhWRExFTkJRVU41VFN4UlFVRlJaMFVzUzBGQlVpeERRVUZqTVZFc1EwRkJkRVFzUlVGQmVVUXNRMEZCUXpCTkxGRkJRVkZuUlN4TFFVRlNMRU5CUVdNelVTeERRVUY0UlR0QlFVTkJhMUVzYjBKQlFWZHlTQ3hYUVVGWUxFTkJRWFZDU0N4VFFVRjJRanM3UVVGRlFXZElMSEZDUVVGaExFbEJRVWx3VUN4TFFVRkxjMUVzY1VKQlFWUXNRMEZEV0RWVExGTkJRVk15VHl4UlFVRlJiVVFzVDBGQmFrSXNRMEZFVnl4RlFVVllPVklzVTBGQlV6SlBMRkZCUVZGblJDeFBRVUZxUWl4RFFVWlhMRVZCUjFoUkxGZEJTRmNzUlVGSldFUXNWMEZLVnl4RFFVRmlPenRCUVU5QlVpeHRRa0ZCVjIxQ0xGRkJRVmdzUTBGQmIwSkRMRXRCUVV0RExFVkJRWHBDTEVWQlFUWkNMRU5CUVRkQ0xFVkJRV2REUkN4TFFVRkxReXhGUVVGeVF6czdRVUZGUVhKQ0xHMUNRVUZYWVN4RlFVRllMRWRCUVdkQ1NpeFhRVUZvUWp0QlFVTkJWQ3h0UWtGQlYyTXNSVUZCV0N4SFFVRm5RazRzVjBGQmFFSTdPMEZCUlVFMVVDeGhRVUZMYzBvc1QwRkJUQ3hEUVVGaGRVY3NWMEZCWWp0QlFVTkJOMUFzWVVGQlMzTktMRTlCUVV3c1EwRkJZWE5ITEZkQlFXSTdPMEZCUlVFN1FVRkRSRHRCUVVORUxGTkJRVXNzUzBGQlREdEJRVUZaTzBGQlExWXNXVUZCU1VFc2NVSkJRVW83TzBGQlJVRXNXVUZCVFVNc1pVRkJZU3hKUVVGSk4xQXNTMEZCUzNsRUxGZEJRVlFzUlVGQmJrSTdRVUZEUVc5TkxIRkNRVUZYZEZFc1YwRkJXRHM3UVVGRlFXeERMR2RDUVVGUmQwTXNTVUZCVWl4RFFVRmhkMDBzVVVGQlVXbEVMRk5CUVZJc1EwRkJhMEkxVUN4RFFVRXZRanRCUVVOQmNrTXNaMEpCUVZGNVF5eEpRVUZTTEVOQlFXRjFUU3hSUVVGUmFVUXNVMEZCVWl4RFFVRnJRak5RTEVOQlFTOUNPMEZCUTBGMFF5eG5Ra0ZCVVRCRExFbEJRVklzUTBGQllYTk5MRkZCUVZGcFJDeFRRVUZTTEVOQlFXdENNVkFzUTBGQkwwSTdPMEZCUlVGcFVTeHhRa0ZCVnpGSUxGTkJRVmdzUTBGQmNVSTVTeXhQUVVGeVFqczdRVUZGUVN4WlFVRkpLMHNzWVVGQlYzbElMR0ZCUVZkRExGZEJRVmdzUlVGQlpqdEJRVU5CTVVnc2JVSkJRVk1yU0N4WFFVRlVMRU5CUVhGQ0xFTkJRVU01UkN4UlFVRlJLMFFzUzBGQlVpeERRVUZqZUZFc1EwRkJjRU1zUlVGQmRVTXNRMEZCUTNsTkxGRkJRVkVyUkN4TFFVRlNMRU5CUVdONlVTeERRVUYwUkN4RlFVRjVSQ3hEUVVGRE1FMHNVVUZCVVN0RUxFdEJRVklzUTBGQll6RlJMRU5CUVhoRk8wRkJRMEZ0VVN4eFFrRkJWM1JJTEZkQlFWZ3NRMEZCZFVKSUxGVkJRWFpDT3p0QlFVVkJMRmxCUVVscFJTeFJRVUZSWjBRc1QwRkJXaXhGUVVGeFFqdEJRVU51UWs4c2VVSkJRV0VzU1VGQlNUVlFMRXRCUVV0NVJDeFhRVUZVTEVWQlFXSTdRVUZEUVcxTkxIVkNRVUZYY2xFc1YwRkJXRHM3UVVGRlFXcERMR3RDUVVGUmRVTXNTVUZCVWl4RFFVRmhkMDBzVVVGQlVXOUVMRk5CUVZJc1EwRkJhMEl2VUN4RFFVRXZRanRCUVVOQmNFTXNhMEpCUVZGM1F5eEpRVUZTTEVOQlFXRjFUU3hSUVVGUmIwUXNVMEZCVWl4RFFVRnJRamxRTEVOQlFTOUNPMEZCUTBGeVF5eHJRa0ZCVVhsRExFbEJRVklzUTBGQllYTk5MRkZCUVZGdlJDeFRRVUZTTEVOQlFXdENOMUFzUTBGQkwwSTdPMEZCUlVGblVTeDFRa0ZCVjNwSUxGTkJRVmdzUTBGQmNVSTNTeXhQUVVGeVFqczdRVUZGUVRoTExIVkNRVUZYZDBnc1lVRkJWMFVzVjBGQldDeEZRVUZZTzBGQlEwRXhTQ3h4UWtGQlV5dElMRmRCUVZRc1EwRkJjVUlzUTBGQlF6bEVMRkZCUVZGblJTeExRVUZTTEVOQlFXTjZVU3hEUVVGd1F5eEZRVUYxUXl4RFFVRkRlVTBzVVVGQlVXZEZMRXRCUVZJc1EwRkJZekZSTEVOQlFYUkVMRVZCUVhsRUxFTkJRVU13VFN4UlFVRlJaMFVzUzBGQlVpeERRVUZqTTFFc1EwRkJlRVU3UVVGRFFXdFJMSFZDUVVGWGNrZ3NWMEZCV0N4RFFVRjFRa2dzVlVGQmRrSTdPMEZCUlVGblNDeDFRa0ZCWVN4SlFVRkpjRkFzUzBGQlN6QlJMSFZDUVVGVUxFTkJRMWhvVkN4VFFVRlRNazhzVVVGQlVXMUVMRTlCUVdwQ0xFTkJSRmNzUlVGRldEbFNMRk5CUVZNeVR5eFJRVUZSWjBRc1QwRkJha0lzUTBGR1Z5eEZRVWRZVVN4WlFVaFhMRVZCU1ZoRUxGbEJTbGNzUlVGTFdDeEpRVXhYTEVOQlFXSTdRVUZQUkN4VFFYSkNSQ3hOUVhGQ1R6dEJRVU5NVWl4MVFrRkJZU3hKUVVGSmNGQXNTMEZCU3pCUkxIVkNRVUZVTEVOQlExaG9WQ3hUUVVGVE1rOHNVVUZCVVcxRUxFOUJRV3BDTEVOQlJGY3NSVUZGV0Vzc1dVRkdWeXhGUVVkWUxFbEJTRmNzUTBGQllqdEJRVXRFT3p0QlFVVkVWQ3h0UWtGQlYyRXNSVUZCV0N4SFFVRm5Ra29zV1VGQmFFSTdRVUZEUVZRc2JVSkJRVmRqTEVWQlFWZ3NSMEZCWjBKT0xGbEJRV2hDT3p0QlFVVkJOVkFzWVVGQlMzTktMRTlCUVV3c1EwRkJZWFZITEZsQlFXSTdRVUZEUVN4WlFVRkpSQ3hwUWtGQlpURlJMRk5CUVc1Q0xFVkJRVGhDWXl4TFFVRkxjMG9zVDBGQlRDeERRVUZoYzBjc1dVRkJZanM3UVVGRk9VSTdRVUZEUkR0QlFVTkVPMEZCUTBVN1FVRjZUa283TzBGQk5FNUJlRk1zVVVGQlRTdFNMR0ZCUVU0c1EwRkJiMEpETEZWQlFYQkNPenRCUVVWQlFTeGhRVUZYTlVVc1EwRkJXQ3hIUVVGbE9VMHNVMEZCVXpKUExGRkJRVkZ0UkN4UFFVRnFRaXhEUVVGbU8wRkJRMEZLTEdGQlFWZDFRaXhEUVVGWUxFZEJRV1ZxVkN4VFFVRlRNazhzVVVGQlVXZEVMRTlCUVdwQ0xFTkJRV1k3TzBGQlJVRkVMR0ZCUVZkM1FpeGpRVUZZTzBGQlEwRm9WQ3hsUVVGaGVVOHNVVUZCVVc1TUxFVkJRWEpDTEVsQlFUSkNhMDhzVlVGQk0wSTdRVUZEUVhCVE96dEJRVVZCTEUxQlFVazRRaXh2UWtGQlNpeEZRVUV3UWp0QlFVTjRRbEFzZFVKQlFXMUNMRWxCUVVseFJpeFpRVUZLTEVOQlFXbENMRWxCUVVrMVJ5eHRRa0ZCYlVJeVFpeDVRa0ZCZUVNc1EwRkJia0lzUTBGRWQwSXNRMEZESzBRN1FVRkRka1pLTEhGQ1FVRnBRaXhEUVVGcVFpeEpRVUZ6UW5aRExHTkJRV05KTEdkQ1FVRndRenRCUVVORUxFZEJTRVFzVFVGSFQyMURMRzFDUVVGdFFpeERRVUZEZGtNc1kwRkJZMGtzWjBKQlFXWXNRMEZCYmtJN1FVRkRVaXhEUVRWUFJEczdRVUU0VDBGeFFpeHBRa0ZCYVVKdlZDeG5Ra0ZCYWtJc1IwRkJiME1zVlVGQlEzaEZMRTlCUVVRc1JVRkJZVHRCUVVNdlF5eE5RVUZOSzBNc1lVRkJZWGhTTEdGQlFXRjVUeXhSUVVGUmJrd3NSVUZCY2tJc1EwRkJia0k3TzBGQlJVRXNUVUZCU1d0UExHVkJRV1ZzVVN4VFFVRnVRaXhGUVVFNFFqdEJRVU0xUWpsQ0xGVkJRVTE1VkN4blFrRkJUaXhEUVVGMVFucENMRlZCUVhaQ08wRkJRMEY0VWl4cFFrRkJZWGxQTEZGQlFWRnVUQ3hGUVVGeVFpeEpRVUV5UWl4SlFVRXpRanRCUVVOQmJFVTdRVUZEUkR0QlFVTkdMRU5CVWtRN08wRkJWVUZUTEdsQ1FVRnBRbkZVTEhORFFVRnFRaXhIUVVFd1JDeFZRVUZEZWtVc1QwRkJSQ3hGUVVGaE8wRkJRM0pGTEUxQlFVMHJReXhoUVVGaGVGSXNZVUZCWVhsUExGRkJRVkZ1VEN4RlFVRnlRaXhEUVVGdVFqdEJRVU5CTEUxQlFVbHJUeXhsUVVGbE1rSXNVVUZCYmtJc1JVRkJOa0l6UWl4WFFVRlhORUlzTWtKQlFWZ3NRMEZCZFVNelJTeFJRVUZSTkVNc1UwRkJMME03UVVGRE9VSXNRMEZJUkRzN1FVRkxRWGhTTEdsQ1FVRnBRbmRVTEZGQlFXcENMRWRCUVRSQ0xGbEJRV2xDTzBGQlFVRXNUVUZCYUVJdlRpeE5RVUZuUWl4MVJVRkJVQ3hGUVVGUE96dEJRVU16UXl4TlFVRkpPVVlzUzBGQlNpeEZRVUZYTzBGQlExUXNVVUZCU1RoR0xFOUJRVTluVHl4UlFVRlFMRWxCUVcxQ2FFOHNUMEZCVDJkUExGRkJRVkFzUjBGQmEwSm9WU3hoUVVGNlF5eEZRVU5GWjBjc1QwRkJUMmRQTEZGQlFWQXNSMEZCYTBKb1ZTeGhRVUZzUWpzN1FVRkZSbWRITEZkQlFVOXBUeXhYUVVGUUxFZEJRWEZDYWs4c1QwRkJUMmxQTEZkQlFWQXNTVUZCYzBKWUxFdEJRVXRaTEVsQlFVd3NRMEZCVld4UExFOUJRVTluVHl4UlFVRlFMRWRCUVd0Q2FGVXNZVUZCTlVJc1EwRkJNME1zUTBGS1V5eERRVWs0UlRzN1FVRkZka1pGTEZWQlFVMXBWU3hqUVVGT0xFTkJRWEZDYms4c1QwRkJUMmRQTEZGQlFUVkNMRVZCUVhORGFFOHNUMEZCVDJsUExGZEJRVGRETEVWQlFUQkVhbFVzWVVGQk1VUTdPMEZCUlVFc1VVRkJTVk1zVlVGQlZXMUVMRTFCUVZZc1IwRkJiVUlzUTBGQmRrSXNSVUZCTUVKM1VUdEJRVU14UWtNN1FVRkRRU3hSUVVGSk0xUXNZVUZCWVd0RUxFMUJRV0lzUjBGQmMwSXNRMEZCTVVJc1JVRkJOa0l3VVR0QlFVTTNRa003UVVGRFFTeFJRVUZKTDFVc2FVSkJRVW9zUlVGQmRVSm5WanRCUVVONFFqdEJRVU5HTEVOQlprUTdPMEZCYVVKQk8wRkJRMEZxVlN4cFFrRkJhVUpyVlN4bFFVRnFRaXhIUVVGdFF5eFZRVUZEZWs4c1RVRkJSQ3hGUVVGWk8wRkJRemREZEVZc1pVRkJZWE5HTEU5QlFVOXJUU3hWUVVGd1FpeEZRVUZuUTIxQ0xGRkJRV2hETEVOQlFYbERjazRzVDBGQlR6QlBMRWRCUVdoRUxFVkJRWEZFTVU4c1QwRkJUekpQTEVsQlFUVkVMRVZCUVd0RkxFTkJRV3hGTEVWQlFYRkZNMDhzVDBGQlR6UlBMRmRCUVRWRkxFVkJRWGxHTlU4c1QwRkJUelpQTEdsQ1FVRm9SenRCUVVORUxFTkJSa1E3TzBGQlNVRjBWU3hwUWtGQmFVSjFWU3gzUWtGQmFrSXNSMEZCTkVNc1ZVRkJRemxQTEUxQlFVUXNSVUZCV1R0QlFVTjBSQ3hOUVVGTmEwMHNZVUZCWVhoU0xHRkJRV0Z6Uml4UFFVRlBhMDBzVlVGQmNFSXNRMEZCYmtJN1FVRkRRVUVzWVVGQlZ6WkRMR3RDUVVGWUxFTkJRVGhDTEVsQlFUbENMRVZCUVc5REwwOHNUMEZCVDJkUUxGRkJRVE5ETEVWQlFYRkVhRkFzVDBGQlQybFFMRmxCUVRWRU8wRkJRMEV2UXl4aFFVRlhOVVVzUTBGQldDeERRVUZoUkN4UlFVRmlPMEZCUTBFc1RVRkJTVFpGTEZkQlFWZDFRaXhEUVVGbUxFVkJRV3RDZGtJc1YwRkJWM1ZDTEVOQlFWZ3NRMEZCWVhCSExGRkJRV0k3UVVGRGJrSXNRMEZNUkRzN1FVRlBRVGxOTEdsQ1FVRnBRakpWTEd0Q1FVRnFRaXhIUVVGelF5eFZRVUZEYkZBc1RVRkJSQ3hGUVVGWk8wRkJRMmhFZEVZc1pVRkJZWE5HTEU5QlFVOXJUU3hWUVVGd1FpeEZRVUZuUTJsRUxGZEJRV2hETEVOQlFUUkRMRXRCUVRWRE8wRkJRMEVzVFVGQlNXcEVMRmRCUVZkMVFpeERRVUZtTEVWQlFXdENka0lzVjBGQlYzVkNMRU5CUVZnc1EwRkJZWEJITEZGQlFXSTdRVUZEYmtJc1EwRklSRHM3UVVGTFFUbE5MR2xDUVVGcFFqWlZMR2RDUVVGcVFpeEhRVUZ2UXl4VlFVRkRjRkFzVFVGQlJDeEZRVUZaTzBGQlF6bERMRTFCUVUxclRTeGhRVUZoZUZJc1lVRkJZWE5HTEU5QlFVOXJUU3hWUVVGd1FpeERRVUZ1UWp0QlFVTkJRU3hoUVVGWGJVUXNaMEpCUVZnc1EwRkJORUp5VUN4UFFVRlBjMUFzVTBGQlVDeEpRVUZ2UWl4RFFVRm9SRHRCUVVOQmNFUXNZVUZCVjNGRUxHZENRVUZZTEVOQlFUUkNkbEFzVDBGQlQzZFFMRk5CUVZBc1NVRkJiMElzUTBGQmFFUTdPMEZCUlVGMFJDeGhRVUZYZFVRc1owSkJRVmdzUTBGQk5FSjZVQ3hQUVVGUE1GQXNVMEZCVUN4SlFVRnZRaXhEUVVGb1JEdEJRVU5CZUVRc1lVRkJWM2xFTEdkQ1FVRllMRU5CUVRSQ00xQXNUMEZCVHpSUUxGTkJRVkFzU1VGQmIwSXNRMEZCYUVRN1FVRkRSQ3hEUVZCRU96dEJRVk5CY2xZc2FVSkJRV2xDYzFZc2NVSkJRV3BDTEVkQlFYbERMRlZCUVVNM1VDeE5RVUZFTEVWQlFWazdRVUZEYmtRc1RVRkJUV3ROTEdGQlFXRjRVaXhoUVVGaGMwWXNUMEZCVDJ0TkxGVkJRWEJDTEVOQlFXNUNPMEZCUTBGQkxHRkJRVmMwUkN4cFFrRkJXQ3hEUVVFMlFqbFFMRTlCUVU4MFRDeE5RVUZRTEVsQlFXbENMRU5CUVRsRE8wRkJRMEZOTEdGQlFWYzJSQ3hwUWtGQldDeERRVUUyUWk5UUxFOUJRVTgyVEN4UFFVRlFMRWxCUVd0Q0xFTkJRUzlETzBGQlEwUXNRMEZLUkRzN1FVRk5RWFJTTEdsQ1FVRnBRbmxXTEhkQ1FVRnFRaXhIUVVFMFF5eFZRVUZEYUZFc1RVRkJSQ3hGUVVGWk8wRkJRM1JFTEUxQlFVMXJUU3hoUVVGaGVGSXNZVUZCWVhOR0xFOUJRVTlyVFN4VlFVRndRaXhEUVVGdVFqdEJRVU5CUVN4aFFVRlhLMFFzZVVKQlFWZ3NRMEZCY1VOcVVTeFBRVUZQWjFBc1VVRkJOVU03UVVGRFFUbERMR0ZCUVZkblJTeHRRa0ZCV0N4RFFVRXJRbXhSTEU5QlFVOXBVQ3haUVVGMFF6dEJRVU5CTDBNc1lVRkJWMmxGTEd0Q1FVRllMRU5CUVRoQ0xFbEJRVGxDTzBGQlEwRnFSU3hoUVVGWE5VVXNRMEZCV0N4RFFVRmhSQ3hSUVVGaU8wRkJRMEVzVFVGQlNUWkZMRmRCUVZkMVFpeERRVUZtTEVWQlFXdENka0lzVjBGQlYzVkNMRU5CUVZnc1EwRkJZWEJITEZGQlFXSTdRVUZEYmtJc1EwRlFSRHM3UVVGVFFUbE5MR2xDUVVGcFFqWldMSGxDUVVGcVFpeEhRVUUyUXl4VlFVRkRjRkVzVFVGQlJDeEZRVUZaTzBGQlEzWkVMRTFCUVUxclRTeGhRVUZoZUZJc1lVRkJZWE5HTEU5QlFVOXJUU3hWUVVGd1FpeERRVUZ1UWp0QlFVTkJRU3hoUVVGWGFVVXNhMEpCUVZnc1EwRkJPRUlzUzBGQk9VSTdRVUZEUVN4TlFVRkpha1VzVjBGQlYzVkNMRU5CUVdZc1JVRkJhMEoyUWl4WFFVRlhkVUlzUTBGQldDeERRVUZoY0Vjc1VVRkJZanRCUVVOdVFpeERRVXBFT3p0QlFVMUJPVTBzYVVKQlFXbENPRllzZVVKQlFXcENMRWRCUVRaRExGVkJRVU55VVN4TlFVRkVMRVZCUVZrN1FVRkRka1FzVFVGQlRXdE5MR0ZCUVdGNFVpeGhRVUZoYzBZc1QwRkJUMnROTEZWQlFYQkNMRU5CUVc1Q08wRkJRMEZCTEdGQlFWZHZSU3g1UWtGQldDeERRVUZ4UTNSUkxFOUJRVTluVUN4UlFVRTFRenRCUVVOQk9VTXNZVUZCVjNGRkxHMUNRVUZZTEVOQlFTdENkbEVzVDBGQlQybFFMRmxCUVhSRE8wRkJRMEV2UXl4aFFVRlhjMFVzYTBKQlFWZ3NRMEZCT0VJc1NVRkJPVUk3UVVGRFFYUkZMR0ZCUVZjMVJTeERRVUZZTEVOQlFXRkVMRkZCUVdJN1FVRkRRU3hOUVVGSk5rVXNWMEZCVjNWQ0xFTkJRV1lzUlVGQmEwSjJRaXhYUVVGWGRVSXNRMEZCV0N4RFFVRmhjRWNzVVVGQllqdEJRVU51UWl4RFFWQkVPenRCUVZOQk9VMHNhVUpCUVdsQ2ExY3NNRUpCUVdwQ0xFZEJRVGhETEZWQlFVTjZVU3hOUVVGRUxFVkJRVms3UVVGRGVFUXNUVUZCVFd0TkxHRkJRV0Y0VWl4aFFVRmhjMFlzVDBGQlQydE5MRlZCUVhCQ0xFTkJRVzVDTzBGQlEwRkJMR0ZCUVZkelJTeHJRa0ZCV0N4RFFVRTRRaXhMUVVFNVFqdEJRVU5CZEVVc1lVRkJWelZGTEVOQlFWZ3NRMEZCWVVRc1VVRkJZanRCUVVOQkxFMUJRVWsyUlN4WFFVRlhkVUlzUTBGQlppeEZRVUZyUW5aQ0xGZEJRVmQxUWl4RFFVRllMRU5CUVdGd1J5eFJRVUZpTzBGQlEyNUNMRU5CVEVRN08wRkJUMEU1VFN4cFFrRkJhVUp0Vnl4clFrRkJha0lzUjBGQmMwTXNWVUZCUXpGUkxFMUJRVVFzUlVGQldUdEJRVU5vUkhSR0xHVkJRV0Z6Uml4UFFVRlBhMDBzVlVGQmNFSXNSVUZCWjBOdFFpeFJRVUZvUXl4RFFVRjVRM0pPTEU5QlFVOTBSQ3hEUVVGb1JDeEZRVUZ0UkhORUxFOUJRVTkyUkN4RFFVRXhSQ3hGUVVFMlJIVkVMRTlCUVU5NFJDeERRVUZ3UlN4RlFVUm5SQ3hEUVVOM1FqdEJRVU42UlN4RFFVWkVPenRCUVVsQmFrTXNhVUpCUVdsQ2IxY3NjVUpCUVdwQ0xFZEJRWGxETEZWQlFVTXpVU3hOUVVGRUxFVkJRVms3UVVGRGJrUXNUVUZCVFd0TkxHRkJRV0Y0VWl4aFFVRmhjMFlzVDBGQlQydE5MRlZCUVhCQ0xFTkJRVzVDTzBGQlEwRkJMR0ZCUVZkcFJDeFhRVUZZTEVOQlFYVkNMRWxCUVhaQ08wRkJRMEZxUkN4aFFVRlhOVVVzUTBGQldDeERRVUZoUkN4UlFVRmlPMEZCUTBFMlJTeGhRVUZYZFVJc1EwRkJXQ3hEUVVGaGNFY3NVVUZCWWp0QlFVTkVMRU5CVEVRN08wRkJUMEU1VFN4cFFrRkJhVUp4Vnl3MFFrRkJha0lzUjBGQlowUXNWVUZCUXpWUkxFMUJRVVFzUlVGQldUdEJRVU14UkN4TlFVRk5hMDBzWVVGQllYaFNMR0ZCUVdGelJpeFBRVUZQYTAwc1ZVRkJjRUlzUTBGQmJrSTdRVUZEUVVFc1lVRkJWekpGTEd0Q1FVRllMRU5CUVRoQ04xRXNUMEZCVHpoUkxGZEJRWEpETzBGQlEwRTFSU3hoUVVGWE5VVXNRMEZCV0N4RFFVRmhSQ3hSUVVGaU8wRkJRMEUyUlN4aFFVRlhkVUlzUTBGQldDeERRVUZoY0Vjc1VVRkJZanRCUVVORUxFTkJURVE3TzBGQlQwRTVUU3hwUWtGQmFVSjNWeXgzUWtGQmFrSXNSMEZCTkVNc1ZVRkJReTlSTEUxQlFVUXNSVUZCV1R0QlFVTjBSQ3hOUVVGTmEwMHNZVUZCWVhoU0xHRkJRV0Z6Uml4UFFVRlBhMDBzVlVGQmNFSXNRMEZCYmtJN08wRkJSVUUxVWl4UlFVRk5jVU1zU1VGQlRpeERRVUZYY1VRc1QwRkJUM2hFTEVOQlFXeENPMEZCUTBGc1F5eFJRVUZOYzBNc1NVRkJUaXhEUVVGWGIwUXNUMEZCVDNaRUxFTkJRV3hDTzBGQlEwRnVReXhSUVVGTmRVTXNTVUZCVGl4RFFVRlhiVVFzVDBGQlQzUkVMRU5CUVd4Q08wRkJRMEZ3UXl4UlFVRk5Oa3NzU1VGQlRpeERRVUZYYmtZc1QwRkJUMjlHTEVOQlFXeENPenRCUVVWQk9FY3NZVUZCVnpoRkxHTkJRVmdzUTBGQk1FSXhWeXhMUVVFeFFqczdRVUZGUVRSU0xHRkJRVmMxUlN4RFFVRllMRU5CUVdGRUxGRkJRV0k3UVVGRFFUWkZMR0ZCUVZkMVFpeERRVUZZTEVOQlFXRndSeXhSUVVGaU8wRkJRMFFzUTBGYVJEczdRVUZqUVRsTkxHbENRVUZwUWpCWExITkNRVUZxUWl4SFFVRXdReXhWUVVGRGFsSXNUVUZCUkN4RlFVRlpPMEZCUTNCRUxFMUJRVTFyVFN4aFFVRmhlRklzWVVGQllYTkdMRTlCUVU5clRTeFZRVUZ3UWl4RFFVRnVRanRCUVVOQlFTeGhRVUZYYVVRc1YwRkJXQ3hEUVVGMVFpeExRVUYyUWp0QlFVTkJha1FzWVVGQlZ6VkZMRU5CUVZnc1EwRkJZVVFzVVVGQllqdEJRVU5CTmtVc1lVRkJWM1ZDTEVOQlFWZ3NRMEZCWVhCSExGRkJRV0k3UVVGRFJDeERRVXhFT3p0QlFVOUJPVTBzYVVKQlFXbENNbGNzZFVKQlFXcENMRWRCUVRKRExGVkJRVU5zVWl4TlFVRkVMRVZCUVZrN1FVRkRja1FzVFVGQlRXdE5MR0ZCUVdGNFVpeGhRVUZoYzBZc1QwRkJUMnROTEZWQlFYQkNMRU5CUVc1Q096dEJRVVZCTDFJc1ZVRkJVWGRETEVsQlFWSXNRMEZCWVhGRUxFOUJRVTk0UkN4RFFVRndRanRCUVVOQmNrTXNWVUZCVVhsRExFbEJRVklzUTBGQllXOUVMRTlCUVU5MlJDeERRVUZ3UWp0QlFVTkJkRU1zVlVGQlVUQkRMRWxCUVZJc1EwRkJZVzFFTEU5QlFVOTBSQ3hEUVVGd1FqczdRVUZGUVhkUUxHRkJRVmRwUml4dFFrRkJXQ3hEUVVFclFtaFlMRTlCUVM5Q08wRkJRMEVyVWl4aFFVRlhOVVVzUTBGQldDeERRVUZoUkN4UlFVRmlPenRCUVVWQkxFMUJRVWsyUlN4WFFVRlhkVUlzUTBGQlppeEZRVUZyUW5aQ0xGZEJRVmQxUWl4RFFVRllMRU5CUVdGd1J5eFJRVUZpTzBGQlEyNUNMRU5CV0VRN08wRkJZVUU1VFN4cFFrRkJhVUkyVnl4MVFrRkJha0lzUjBGQk1rTXNWVUZCUTNCU0xFMUJRVVFzUlVGQldUdEJRVU55UkN4TlFVRk5hMDBzWVVGQllYaFNMR0ZCUVdGelJpeFBRVUZQYTAwc1ZVRkJjRUlzUTBGQmJrSTdPMEZCUlVFdlVpeFZRVUZSZDBNc1NVRkJVaXhEUVVGaGNVUXNUMEZCVDNoRUxFTkJRWEJDTzBGQlEwRnlReXhWUVVGUmVVTXNTVUZCVWl4RFFVRmhiMFFzVDBGQlQzWkVMRU5CUVhCQ08wRkJRMEYwUXl4VlFVRlJNRU1zU1VGQlVpeERRVUZoYlVRc1QwRkJUM1JFTEVOQlFYQkNPenRCUVVWQmQxQXNZVUZCVjIxR0xHMUNRVUZZTEVOQlFTdENiRmdzVDBGQkwwSTdRVUZEUVN0U0xHRkJRVmMxUlN4RFFVRllMRU5CUVdGRUxGRkJRV0k3TzBGQlJVRXNUVUZCU1RaRkxGZEJRVmQxUWl4RFFVRm1MRVZCUVd0Q2RrSXNWMEZCVjNWQ0xFTkJRVmdzUTBGQllYQkhMRkZCUVdJN1FVRkRia0lzUTBGWVJEczdRVUZoUVRsTkxHbENRVUZwUWl0WExIZENRVUZxUWl4SFFVRTBReXhWUVVGRGRGSXNUVUZCUkN4RlFVRlpPMEZCUTNSRUxFMUJRVTFyVFN4aFFVRmhlRklzWVVGQllYTkdMRTlCUVU5clRTeFZRVUZ3UWl4RFFVRnVRanM3UVVGRlFTOVNMRlZCUVZGM1F5eEpRVUZTTEVOQlFXRnhSQ3hQUVVGUGVFUXNRMEZCY0VJN1FVRkRRWEpETEZWQlFWRjVReXhKUVVGU0xFTkJRV0Z2UkN4UFFVRlBka1FzUTBGQmNFSTdRVUZEUVhSRExGVkJRVkV3UXl4SlFVRlNMRU5CUVdGdFJDeFBRVUZQZEVRc1EwRkJjRUk3TzBGQlJVRjNVQ3hoUVVGWGNVWXNiMEpCUVZnc1EwRkJaME53V0N4UFFVRm9RenRCUVVOQksxSXNZVUZCVnpWRkxFTkJRVmdzUTBGQllVUXNVVUZCWWpzN1FVRkZRU3hOUVVGSk5rVXNWMEZCVjNWQ0xFTkJRV1lzUlVGQmEwSjJRaXhYUVVGWGRVSXNRMEZCV0N4RFFVRmhjRWNzVVVGQllqdEJRVU51UWl4RFFWaEVPenRCUVdGQk9VMHNhVUpCUVdsQ2FWZ3NkMEpCUVdwQ0xFZEJRVFJETEZWQlFVTjRVaXhOUVVGRUxFVkJRVms3UVVGRGRFUXNUVUZCVFd0TkxHRkJRV0Y0VWl4aFFVRmhjMFlzVDBGQlQydE5MRlZCUVhCQ0xFTkJRVzVDT3p0QlFVVkJMMUlzVlVGQlVYZERMRWxCUVZJc1EwRkJZWEZFTEU5QlFVOTRSQ3hEUVVGd1FqdEJRVU5CY2tNc1ZVRkJVWGxETEVsQlFWSXNRMEZCWVc5RUxFOUJRVTkyUkN4RFFVRndRanRCUVVOQmRFTXNWVUZCVVRCRExFbEJRVklzUTBGQllXMUVMRTlCUVU5MFJDeERRVUZ3UWpzN1FVRkZRWGRRTEdGQlFWZDFSaXh2UWtGQldDeERRVUZuUTNSWUxFOUJRV2hETzBGQlEwRXJVaXhoUVVGWE5VVXNRMEZCV0N4RFFVRmhSQ3hSUVVGaU96dEJRVVZCTEUxQlFVazJSU3hYUVVGWGRVSXNRMEZCWml4RlFVRnJRblpDTEZkQlFWZDFRaXhEUVVGWUxFTkJRV0Z3Unl4UlFVRmlPMEZCUTI1Q0xFTkJXRVE3TzBGQllVRTVUU3hwUWtGQmFVSnRXQ3h6UWtGQmFrSXNSMEZCTUVNc1ZVRkJRekZTTEUxQlFVUXNSVUZCV1R0QlFVTndSQ3hOUVVGTmEwMHNZVUZCWVhoU0xHRkJRV0Z6Uml4UFFVRlBhMDBzVlVGQmNFSXNRMEZCYmtJN08wRkJSVUVzVFVGQlRYbEdMRkZCUVZGNlJpeFhRVUZYTUVZc2RVSkJRVmdzUTBGQmJVTTFVaXhQUVVGUE5sSXNTMEZCTVVNc1EwRkJaRHRCUVVOQlJpeFJRVUZOUnl4cFFrRkJUaXhEUVVGM1FpeEpRVUY0UWp0QlFVTkJOVVlzWVVGQlZ6VkZMRU5CUVZnc1EwRkJZVVFzVVVGQllqczdRVUZGUVN4TlFVRkpOa1VzVjBGQlYzVkNMRU5CUVdZc1JVRkJhMEoyUWl4WFFVRlhkVUlzUTBGQldDeERRVUZoY0Vjc1VVRkJZanRCUVVOdVFpeERRVkpFT3p0QlFWVkJPVTBzYVVKQlFXbENkMWdzZVVKQlFXcENMRWRCUVRaRExGVkJRVU12VWl4TlFVRkVMRVZCUVZrN1FVRkRka1FzVFVGQlRXdE5MR0ZCUVdGNFVpeGhRVUZoYzBZc1QwRkJUMnROTEZWQlFYQkNMRU5CUVc1Q08wRkJRVUVzVFVGRFJYbEdMRkZCUVZGNlJpeFhRVUZYTUVZc2RVSkJRVmdzUTBGQmJVTTFVaXhQUVVGUE5sSXNTMEZCTVVNc1EwRkVWanM3UVVGSFFVWXNVVUZCVFVzc1lVRkJUaXhEUVVGdlFtaFRMRTlCUVU5cFV5eFRRVUV6UWp0QlFVTkJUaXhSUVVGTlR5eGhRVUZPTEVOQlFXOUNiRk1zVDBGQlQyMVRMRlZCUVROQ08wRkJRMEZTTEZGQlFVMVRMRzlDUVVGT0xFTkJRVEpDY0ZNc1QwRkJUMmRRTEZGQlFXeERPMEZCUTBFeVF5eFJRVUZOVlN4dFFrRkJUaXhEUVVFd1FuSlRMRTlCUVU5elV5eFRRVUZxUXp0QlFVTkJjRWNzWVVGQlZ6VkZMRU5CUVZnc1EwRkJZVVFzVVVGQllqczdRVUZGUVN4TlFVRkpOa1VzVjBGQlYzVkNMRU5CUVdZc1JVRkJhMEoyUWl4WFFVRlhkVUlzUTBGQldDeERRVUZoY0Vjc1VVRkJZanRCUVVOdVFpeERRVmhFT3p0QlFXRkJPVTBzYVVKQlFXbENaMWtzZFVKQlFXcENMRWRCUVRKRExGVkJRVU4yVXl4TlFVRkVMRVZCUVZrN1FVRkRja1FzVFVGQlRXdE5MR0ZCUVdGNFVpeGhRVUZoYzBZc1QwRkJUMnROTEZWQlFYQkNMRU5CUVc1Q08wRkJRVUVzVFVGRFJYbEdMRkZCUVZGNlJpeFhRVUZYTUVZc2RVSkJRVmdzUTBGQmJVTTFVaXhQUVVGUE5sSXNTMEZCTVVNc1EwRkVWanM3UVVGSFFVWXNVVUZCVFVjc2FVSkJRVTRzUTBGQmQwSXNTMEZCZUVJN1FVRkRRVFZHTEdGQlFWYzFSU3hEUVVGWUxFTkJRV0ZFTEZGQlFXSTdPMEZCUlVFc1RVRkJTVFpGTEZkQlFWZDFRaXhEUVVGbUxFVkJRV3RDZGtJc1YwRkJWM1ZDTEVOQlFWZ3NRMEZCWVhCSExGRkJRV0k3UVVGRGJrSXNRMEZTUkRzN1FVRlZRU3hKUVVGTmEwZ3NZMEZCWXl4VFFVRmtRU3hYUVVGakxFZEJRVTA3UVVGRGVFSXNUVUZCU1ROVExIZENRVUYzUWxnc1dVRkJXVEpETEUxQlFWb3NSMEZCY1VJc1NVRkJTV3BGTEhsQ1FVRjVRakpDTEc5Q1FVRTVSU3hGUVVGdlJ6dEJRVU5zUjB3c2EwSkJRV01zU1VGQlNYbEdMRmxCUVVvc1EwRkRXaXhGUVVGRE8wRkJRVVFzVFVGRFJ6Uk5MRXRCUVV0WkxFbEJRVXdzUTBGQlZYWlZMSGxDUVVGNVFuRkNMR2RDUVVGdVF5eEpRVUYxUkVFc1owSkJRWGhFTEVkQlFUUkZUU3h2UWtGR2JFVXNRMEZGZFVZN1FVRkdka1lzUzBGQlpEczdRVUZMUVV3c1owSkJRVmtzUTBGQldpeEpRVUZwUW01RExHTkJRV05ETEZkQlFTOUNPMEZCUTBRN08wRkJSVVJyUXl4alFVRlpMRU5CUVZvc1NVRkJhVUowUWl4elFrRkJha0lzUTBGV2QwSXNRMEZWYVVJN08wRkJSWHBETzBGQlEwVXNVVUZCU1d0RkxFbEJRVWtzUTBGQlVqdEJRVUZCTEZGQlEwVXlWU3hSUVVGUmFGa3NVMEZCVTI5RUxFMUJSRzVDT3p0QlFVZEJMRmRCUVU4MFZTeFBRVUZRTEVWQlFXZENPMEZCUTJRc1ZVRkJUVU1zVTBGQlUycFpMRk5CUVZObldTeExRVUZVTEVOQlFXWTdPMEZCUlVFc1ZVRkJTVU1zVlVGQlZVRXNUMEZCVDI1WExFbEJRVkFzUzBGQlowSXNRMEZCT1VJc1JVRkJhVU03UVVGQlJUdEJRVU5xUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeFpRVUZOWjBvc1dVRkJXVzFPTEU5QlFVOURMSGRDUVVGUUxFVkJRV3hDTzBGQlEwRXNXVUZCVFVNc1UwRkJVM0pPTEZWQlFWVnpUaXhUUVVGV0xFVkJRV1k3UVVGRFFTeFpRVUZOTVU0c1YwRkJWMGtzVlVGQlZYTklMRmRCUVZZc1JVRkJha0k3TzBGQlJVRTdRVUZEUVN4WlFVRk5hVWNzVTBGQlV5eEpRVUZMYUZZc1IwRkJSQ3hIUVVGUmRrTXNiMEpCUVROQ096dEJRVVZCVEN4dlFrRkJXVFJZTEUxQlFWb3NTVUZCYzBKS0xFOUJRVTk2VlN4RlFVRTNRanM3UVVGRlFTOURMRzlDUVVGWk5GZ3NVMEZCVXl4RFFVRnlRaXhKUVVFd1FrWXNUMEZCVDI1WExFTkJRVkFzUlVGQk1VSTdRVUZEUVhaQ0xHOUNRVUZaTkZnc1UwRkJVeXhEUVVGeVFpeEpRVUV3UWtZc1QwRkJUMnhYTEVOQlFWQXNSVUZCTVVJN1FVRkRRWGhDTEc5Q1FVRlpORmdzVTBGQlV5eERRVUZ5UWl4SlFVRXdRa1lzVDBGQlQycFhMRU5CUVZBc1JVRkJNVUk3TzBGQlJVRjZRaXh2UWtGQldUUllMRk5CUVZNc1EwRkJja0lzU1VGQk1FSXpUaXhUUVVGVE1Va3NRMEZCVkN4RlFVRXhRanRCUVVOQmRrSXNiMEpCUVZrMFdDeFRRVUZUTEVOQlFYSkNMRWxCUVRCQ00wNHNVMEZCVTNwSkxFTkJRVlFzUlVGQk1VSTdRVUZEUVhoQ0xHOUNRVUZaTkZnc1UwRkJVeXhEUVVGeVFpeEpRVUV3UWpOT0xGTkJRVk40U1N4RFFVRlVMRVZCUVRGQ08wRkJRMEY2UWl4dlFrRkJXVFJZTEZOQlFWTXNRMEZCY2tJc1NVRkJNRUl6VGl4VFFVRlRSU3hEUVVGVUxFVkJRVEZDT3p0QlFVVkJMMHdzYTBKQlFWVnZXaXhQUVVGUFN5eHBRa0ZCVUN4RlFVRldPMEZCUTBFM1dDeHZRa0ZCV1RSWUxGTkJRVk1zUTBGQmNrSXNTVUZCTUVKNFdpeFJRVUZSYlVRc1EwRkJVaXhGUVVFeFFqdEJRVU5CZGtJc2IwSkJRVmswV0N4VFFVRlRMRU5CUVhKQ0xFbEJRVEJDZUZvc1VVRkJVVzlFTEVOQlFWSXNSVUZCTVVJN1FVRkRRWGhDTEc5Q1FVRlpORmdzVTBGQlV5eEZRVUZ5UWl4SlFVRXlRbmhhTEZGQlFWRnhSQ3hEUVVGU0xFVkJRVE5DT3p0QlFVVkJja1FzYTBKQlFWVnZXaXhQUVVGUFRTeHJRa0ZCVUN4RlFVRldPMEZCUTBFNVdDeHZRa0ZCV1RSWUxGTkJRVk1zUlVGQmNrSXNTVUZCTWtKNFdpeFJRVUZSYlVRc1EwRkJVaXhGUVVFelFqdEJRVU5CZGtJc2IwSkJRVmswV0N4VFFVRlRMRVZCUVhKQ0xFbEJRVEpDZUZvc1VVRkJVVzlFTEVOQlFWSXNSVUZCTTBJN1FVRkRRWGhDTEc5Q1FVRlpORmdzVTBGQlV5eEZRVUZ5UWl4SlFVRXlRbmhhTEZGQlFWRnhSQ3hEUVVGU0xFVkJRVE5DTzBGQlEwUTdRVUZEUmp0QlFVTkdPenRCUVVWRUxFMUJRVWxrTEc5Q1FVRktMRVZCUVRCQ2JFUXNiMEpCUVc5Q2RVTXNXVUZCV1N0WUxFMUJRV2hETEVWQlFYZERMRU5CUVVNdldDeFpRVUZaSzFnc1RVRkJZaXhEUVVGNFF5eEZRVUV4UWl4TFFVTkxkR0VzYjBKQlFXOUNkVU1zVjBGQmNFSTdRVUZEVGl4RFFURkVSRHM3UVVFMFJFRXNTVUZCVFhWVUxIbENRVUY1UWl4VFFVRjZRa0VzYzBKQlFYbENMRWRCUVUwN1FVRkRia003TzBGQlJVRjBWQ3hsUVVGaExFbEJRVWwzUml4WlFVRktMRU5CUTFnc1JVRkJSVHRCUVVGR0xFbEJRMFU1Unl4M1FrRkJkMElzUTBGRU1VSXNSMEZGUlVjc2QwSkJRWGRDTEVOQlNHWXNRMEZCWWpzN1FVRk5RVzFDTEdGQlFWY3NRMEZCV0N4SlFVRm5RbkJETEdOQlFXTkxMRlZCUVRsQ08wRkJRMEVyUWl4aFFVRlhMRU5CUVZnc1NVRkJaMEowUWl4eFFrRkJhRUlzUTBGV2JVTXNRMEZWU1RzN1FVRkZka003UVVGRFJTeFJRVUZKYVZvc1UwRkJVeXhEUVVGaU8wRkJRVUVzVVVGRFJVd3NVVUZCVVdoWkxGTkJRVk52UkN4TlFVUnVRanM3UVVGSFFTeFhRVUZQTkZVc1QwRkJVQ3hGUVVGblFqdEJRVU5rTEZWQlFVMURMRk5CUVZOcVdTeFRRVUZUWjFrc1MwRkJWQ3hEUVVGbU96dEJRVVZCTEZWQlFVbERMRlZCUVZWQkxFOUJRVTl1Vnl4SlFVRlFMRXRCUVdkQ0xFTkJRVGxDTEVWQlFXbERPMEZCUVVVN08wRkJSV3BEY0VJc2JVSkJRVmN5V0N4TlFVRllMRWxCUVhGQ1NpeFBRVUZQZWxVc1JVRkJOVUk3TzBGQlJVRXNXVUZCVFdsV0xHRkJRV0ZLTEZOQlFWTXNRMEZCTlVJN08wRkJSVUVzV1VGQlNVb3NUMEZCVHpOT0xFbEJRVkFzUzBGQlowSXNTVUZCY0VJc1JVRkJNRUk3UVVGRGVFSXNZMEZCVFc5UExGRkJRVkZVTEU5QlFVODNUU3hYUVVGUUxFVkJRV1E3UVVGRFFTeGpRVUZOUkN4UFFVRlBkVTRzVFVGQlRYWk9MRWxCUVU0c1JVRkJZanRCUVVOQmVrc3NjVUpCUVZjeVdDeFRRVUZUTEVOQlFYQkNMRWxCUVhsQ2JFNHNTVUZCZWtJN08wRkJSVUVzWlVGQlN5eEpRVUZKT1Vnc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpPRWdzU1VGQmNFSXNSVUZCTUVJNVNDeEhRVUV4UWl4RlFVRXJRanRCUVVNM1FpeG5Ra0ZCVFd0RkxFOUJRVTl0VWl4TlFVRk5hbEFzUlVGQlRpeERRVUZUY0Vjc1EwRkJWQ3hEUVVGaU8wRkJRMEVzWjBKQlFVMXpWaXhQUVVGUGNGSXNTMEZCUzNGU0xFOUJRVXdzUlVGQllqdEJRVU5CTEdkQ1FVRk5ReXhOUVVGTlNpeGhRVUZoY0ZZc1NVRkJTU3hEUVVFM1FqczdRVUZGUVRORExIVkNRVUZYYlZrc1IwRkJXQ3hKUVVGclFrWXNTMEZCU3pOWExFTkJRVXdzUlVGQmJFSTdRVUZEUVhSQ0xIVkNRVUZYYlZrc1RVRkJUU3hEUVVGcVFpeEpRVUZ6UWtZc1MwRkJTekZYTEVOQlFVd3NSVUZCZEVJN1FVRkRRWFpDTEhWQ1FVRlhiVmtzVFVGQlRTeERRVUZxUWl4SlFVRnpRa1lzUzBGQlMzcFhMRU5CUVV3c1JVRkJkRUk3UVVGRFJEczdRVUZGUkcxWExHOUNRVUZWYkU0c1QwRkJUeXhEUVVGUUxFZEJRVmNzUTBGQmNrSTdRVUZEUkN4VFFXaENSQ3hOUVdsQ1N5eEpRVUZKT0Uwc1QwRkJUekZPTEV0QlFWZ3NSVUZCYTBJN1FVRkRja0lzWTBGQlRXMVBMRk5CUVZGVUxFOUJRVTgzVFN4WFFVRlFMRVZCUVdRN1FVRkRRU3hqUVVGTlJDeFJRVUZQZFU0c1QwRkJUWFpPTEVsQlFVNHNSVUZCWWp0QlFVTkJla3NzY1VKQlFWY3lXQ3hUUVVGVExFTkJRWEJDTEVsQlFYbENiRTRzUzBGQmVrSTdPMEZCUlVFc1pVRkJTeXhKUVVGSk9VZ3NUVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeE5RVUZKT0Vnc1MwRkJjRUlzUlVGQk1FSTVTQ3hMUVVFeFFpeEZRVUVyUWp0QlFVTTNRaXhuUWtGQlRXdEZMRkZCUVU5dFVpeFBRVUZOYWxBc1JVRkJUaXhEUVVGVGNFY3NSMEZCVkN4RFFVRmlPMEZCUTBFc1owSkJRVTF6Vml4UlFVRlBjRklzVFVGQlMzRlNMRTlCUVV3c1JVRkJZanRCUVVOQkxHZENRVUZOTjFjc1UwRkJVM2RHTEUxQlFVdDFVaXhQUVVGTUxFVkJRV1k3UVVGRFFTeG5Ra0ZCVFVRc1QwRkJUVW9zWVVGQllYQldMRTFCUVVrc1EwRkJOMEk3TzBGQlJVRXpReXgxUWtGQlYyMVpMRWxCUVZnc1NVRkJhMEpHTEUxQlFVc3pWeXhEUVVGTUxFVkJRV3hDTzBGQlEwRjBRaXgxUWtGQlYyMVpMRTlCUVUwc1EwRkJha0lzU1VGQmMwSkdMRTFCUVVzeFZ5eERRVUZNTEVWQlFYUkNPMEZCUTBGMlFpeDFRa0ZCVjIxWkxFOUJRVTBzUTBGQmFrSXNTVUZCYzBKR0xFMUJRVXQ2Vnl4RFFVRk1MRVZCUVhSQ096dEJRVVZCZUVJc2RVSkJRVmR0V1N4UFFVRk5MRU5CUVdwQ0xFbEJRWE5DT1Zjc1QwRkJUME1zUTBGQlVDeEZRVUYwUWp0QlFVTkJkRUlzZFVKQlFWZHRXU3hQUVVGTkxFTkJRV3BDTEVsQlFYTkNPVmNzVDBGQlQwVXNRMEZCVUN4RlFVRjBRanRCUVVOQmRrSXNkVUpCUVZkdFdTeFBRVUZOTEVOQlFXcENMRWxCUVhOQ09WY3NUMEZCVDBjc1EwRkJVQ3hGUVVGMFFqdEJRVU5FT3p0QlFVVkViVmNzYjBKQlFWVnNUaXhSUVVGUExFTkJRVkFzUjBGQlZ5eERRVUZ5UWp0QlFVTkVMRk5CY2tKSkxFMUJjMEpCTzBGQlEwZ3NZMEZCVFRST0xGRkJRVkZrTEU5QlFVOHZUU3hYUVVGUUxFVkJRV1E3UVVGRFFTeGpRVUZOUXl4VFFVRlBORTRzVFVGQlRUVk9MRWxCUVU0c1JVRkJZanRCUVVOQmVrc3NjVUpCUVZjeVdDeFRRVUZUTEVOQlFYQkNMRWxCUVhsQ2JFNHNUVUZCZWtJN08wRkJSVUVzWlVGQlN5eEpRVUZKT1Vnc1RVRkJTU3hEUVVGaUxFVkJRV2RDUVN4TlFVRkpPRWdzVFVGQmNFSXNSVUZCTUVJNVNDeExRVUV4UWl4RlFVRXJRanRCUVVNM1FpeG5Ra0ZCVFRKV0xFOUJRVTlFTEUxQlFVMTBVQ3hGUVVGT0xFTkJRVk53Unl4SFFVRlVMRU5CUVdJN08wRkJSVUVzWjBKQlFVMDBWaXhSUVVGUlJDeExRVUZMUml4UFFVRk1MRU5CUVdFc1EwRkJZaXhEUVVGa08wRkJRMEVzWjBKQlFVMUpMRkZCUVZGR0xFdEJRVXRHTEU5QlFVd3NRMEZCWVN4RFFVRmlMRU5CUVdRN1FVRkRRU3huUWtGQlRVc3NVVUZCVVVnc1MwRkJTMFlzVDBGQlRDeERRVUZoTEVOQlFXSXNRMEZCWkRzN1FVRkZRU3huUWtGQlRVMHNVVUZCVVVnc1RVRkJUVXdzVDBGQlRpeEZRVUZrTzBGQlEwRXNaMEpCUVUxVExGRkJRVkZJTEUxQlFVMU9MRTlCUVU0c1JVRkJaRHRCUVVOQkxHZENRVUZOVlN4UlFVRlJTQ3hOUVVGTlVDeFBRVUZPTEVWQlFXUTdPMEZCUlVFc1owSkJRVTFYTEZWQlFWVk9MRTFCUVUxSUxFOUJRVTRzUlVGQmFFSTdRVUZEUVN4blFrRkJUVlVzVlVGQlZVNHNUVUZCVFVvc1QwRkJUaXhGUVVGb1FqdEJRVU5CTEdkQ1FVRk5WeXhWUVVGVlRpeE5RVUZOVEN4UFFVRk9MRVZCUVdoQ096dEJRVVZCTEdkQ1FVRk5SQ3hSUVVGTlNpeGhRVUZoY0ZZc1RVRkJTU3hGUVVFM1FqczdRVUZGUVRORExIVkNRVUZYYlZrc1MwRkJXQ3hKUVVGclFrOHNUVUZCVFhCWUxFTkJRVTRzUlVGQmJFSTdRVUZEUVhSQ0xIVkNRVUZYYlZrc1VVRkJUU3hEUVVGcVFpeEpRVUZ6UWs4c1RVRkJUVzVZTEVOQlFVNHNSVUZCZEVJN1FVRkRRWFpDTEhWQ1FVRlhiVmtzVVVGQlRTeERRVUZxUWl4SlFVRnpRazhzVFVGQlRXeFlMRU5CUVU0c1JVRkJkRUk3TzBGQlJVRjRRaXgxUWtGQlYyMVpMRkZCUVUwc1EwRkJha0lzU1VGQmMwSlZMRkZCUVZGMldDeERRVUZTTEVWQlFYUkNPMEZCUTBGMFFpeDFRa0ZCVjIxWkxGRkJRVTBzUTBGQmFrSXNTVUZCYzBKVkxGRkJRVkYwV0N4RFFVRlNMRVZCUVhSQ08wRkJRMEYyUWl4MVFrRkJWMjFaTEZGQlFVMHNRMEZCYWtJc1NVRkJjMEpWTEZGQlFWRnlXQ3hEUVVGU0xFVkJRWFJDT3p0QlFVVkJlRUlzZFVKQlFWZHRXU3hSUVVGTkxFTkJRV3BDTEVsQlFYTkNVU3hOUVVGTmNsZ3NRMEZCVGl4RlFVRjBRanRCUVVOQmRFSXNkVUpCUVZkdFdTeFJRVUZOTEVOQlFXcENMRWxCUVhOQ1VTeE5RVUZOY0Znc1EwRkJUaXhGUVVGMFFqdEJRVU5CZGtJc2RVSkJRVmR0V1N4UlFVRk5MRU5CUVdwQ0xFbEJRWE5DVVN4TlFVRk5ibGdzUTBGQlRpeEZRVUYwUWpzN1FVRkZRWGhDTEhWQ1FVRlhiVmtzVVVGQlRTeERRVUZxUWl4SlFVRnpRbGNzVVVGQlVYaFlMRU5CUVZJc1JVRkJkRUk3UVVGRFFYUkNMSFZDUVVGWGJWa3NVVUZCVFN4RlFVRnFRaXhKUVVGMVFsY3NVVUZCVVhaWUxFTkJRVklzUlVGQmRrSTdRVUZEUVhaQ0xIVkNRVUZYYlZrc1VVRkJUU3hGUVVGcVFpeEpRVUYxUWxjc1VVRkJVWFJZTEVOQlFWSXNSVUZCZGtJN08wRkJSVUY0UWl4MVFrRkJWMjFaTEZGQlFVMHNSVUZCYWtJc1NVRkJkVUpUTEUxQlFVMTBXQ3hEUVVGT0xFVkJRWFpDTzBGQlEwRjBRaXgxUWtGQlYyMVpMRkZCUVUwc1JVRkJha0lzU1VGQmRVSlRMRTFCUVUxeVdDeERRVUZPTEVWQlFYWkNPMEZCUTBGMlFpeDFRa0ZCVjIxWkxGRkJRVTBzUlVGQmFrSXNTVUZCZFVKVExFMUJRVTF3V0N4RFFVRk9MRVZCUVhaQ096dEJRVVZCZUVJc2RVSkJRVmR0V1N4UlFVRk5MRVZCUVdwQ0xFbEJRWFZDV1N4UlFVRlJlbGdzUTBGQlVpeEZRVUYyUWp0QlFVTkJkRUlzZFVKQlFWZHRXU3hSUVVGTkxFVkJRV3BDTEVsQlFYVkNXU3hSUVVGUmVGZ3NRMEZCVWl4RlFVRjJRanRCUVVOQmRrSXNkVUpCUVZkdFdTeFJRVUZOTEVWQlFXcENMRWxCUVhWQ1dTeFJRVUZSZGxnc1EwRkJVaXhGUVVGMlFqdEJRVU5FT3p0QlFVVkViVmNzYjBKQlFWVnNUaXhUUVVGUExFVkJRVkFzUjBGQldTeERRVUYwUWp0QlFVTkVPMEZCUTBZN1FVRkRSanRCUVVOR096dEJRVVZFTzBGQlEwRTdRVUZEUVdwT0xITkNRVUZ2UW5kRExGVkJRWEJDTzBGQlEwUXNRMEY0U0VRN08wRkJNRWhCTEVsQlFVMXRWQ3h0UWtGQmJVSXNVMEZCYmtKQkxHZENRVUZ0UWl4SFFVRk5PMEZCUXpkQ0xFMUJRVTAyUml4TFFVRkxhR0VzVFVGQlRXbGhMR0ZCUVU0c1JVRkJXRHRCUVVGQkxFMUJRMFZETEUxQlFVMUdMRWRCUVVkSExHVkJRVWdzUlVGRVVqdEJRVVZGT3p0QlFVVkdMRTFCUVVsNldTeHZRa0ZCU2l4RlFVRXdRanRCUVVONFFpeFJRVUZKVkN4blFrRkJaMEo1UXl4TlFVRm9RaXhIUVVGNVFpeEpRVUZKZDFjc1RVRkJUVGRaTEhkQ1FVRjJReXhGUVVGcFJUdEJRVU12UkVvc2QwSkJRV3RDTEVsQlFVbDFSaXhaUVVGS0xFTkJRMmhDTEVWQlFVVTdRVUZCUml4UlFVTkhORTBzUzBGQlMxa3NTVUZCVEN4RFFVRlZlRlVzWlVGQlpYTkNMR2RDUVVGNlFpeEpRVUUyUTBFc1owSkJRVGxETEVkQlFXdEZUeXgzUWtGR2NFUXNRMEZGTmtVN1FVRkdOMFVzVDBGQmJFSTdRVUZKUVVvc2MwSkJRV2RDTEVOQlFXaENMRWxCUVhGQ2NrTXNZMEZCWTBVc1pVRkJia003UVVGRFJEdEJRVU5HT3p0QlFVVkViVU1zYTBKQlFXZENMRU5CUVdoQ0xFbEJRWEZDTEVOQlFYSkNMRU5CWmpaQ0xFTkJaVXc3TzBGQlJYaENMRTlCUVVzc1NVRkJTVEJETEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNYVlhMRWRCUVhCQ0xFVkJRWGxDZGxjc1IwRkJla0lzUlVGQk9FSTdRVUZETlVJc1VVRkJUWGxYTEZkQlFWZEtMRWRCUVVkTExEQkNRVUZJTEVOQlFUaENNVmNzUTBGQk9VSXNRMEZCYWtJN1FVRkJRU3hSUVVORk1sY3NaVUZCWlVZc1UwRkJVMGNzWTBGQlZDeEZRVVJxUWpzN1FVRkhRU3hSUVVGSlJDeHBRa0ZCYVVJc1EwRkJja0lzUlVGQmQwSTdPMEZCUlhoQ0xGTkJRVXNzU1VGQlNUbFdMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1RoV0xGbEJRWEJDTEVWQlFXdERPVllzUjBGQmJFTXNSVUZCZFVNN1FVRkRja01zVlVGQlRXZFhMRXRCUVV0S0xGTkJRVk5MTEdWQlFWUXNRMEZCZVVKcVZ5eERRVUY2UWl4RFFVRllPenRCUVVWQk8wRkJRMEVzVlVGQlRXMVZMRk5CUVZNc1NVRkJTekZZTEdkQ1FVRm5RaXhEUVVGb1FpeEhRVUZFTEVkQlFYbENTU3gzUWtGQk5VTTdRVUZEUVVvc2MwSkJRV2RDTUZnc1RVRkJhRUlzU1VGQk1FSnNXU3hqUVVGak1sb3NVMEZCVTAwc1VVRkJWQ3hIUVVGdlFuUlhMRWRCUVd4RExFTkJRVEZDTzBGQlEwRnVSQ3h6UWtGQlowSXdXQ3hUUVVGVExFTkJRWHBDTEVsQlFUaENiRmtzWTBGQll6SmFMRk5CUVZOUExGRkJRVlFzUjBGQmIwSjJWeXhIUVVGc1F5eERRVUU1UWpzN1FVRkZRV3BHTEdkQ1FVRlZjV0lzUjBGQlIwa3NiMEpCUVVnc1JVRkJWanRCUVVOQk0xb3NjMEpCUVdkQ01GZ3NVMEZCVXl4RFFVRjZRaXhKUVVFNFFuaGFMRkZCUVZGdFJDeERRVUZTTEVWQlFUbENPMEZCUTBGeVFpeHpRa0ZCWjBJd1dDeFRRVUZUTEVOQlFYcENMRWxCUVRoQ2VGb3NVVUZCVVc5RUxFTkJRVklzUlVGQk9VSTdRVUZEUVhSQ0xITkNRVUZuUWpCWUxGTkJRVk1zUTBGQmVrSXNTVUZCT0VKNFdpeFJRVUZSY1VRc1EwRkJVaXhGUVVFNVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVFVGQlNXUXNiMEpCUVVvc1JVRkJNRUpzUkN4dlFrRkJiMEo1UXl4blFrRkJaMEkyV0N4TlFVRndReXhGUVVFMFF5eERRVUZETjFnc1owSkJRV2RDTmxnc1RVRkJha0lzUTBGQk5VTXNSVUZCTVVJc1MwRkRTM1JoTEc5Q1FVRnZRbmxETEdWQlFYQkNPMEZCUTA0c1EwRXpRMFE3TzBGQk5rTkJMRWxCUVUxcFZDeHBRa0ZCYVVJc1UwRkJha0pCTEdOQlFXbENMRWRCUVZrN1FVRkRha01zVFVGQlNYaFRMRzlDUVVGS0xFVkJRVEJDTzBGQlEzaENMRkZCUVVsU0xHTkJRV04zUXl4TlFVRmtMRWRCUVhWQ0xFbEJRVWt2UkN4alFVRmpNa0lzYzBKQlFUZERMRVZCUVhGRk8wRkJRMjVGU2l4elFrRkJaMElzU1VGQlNYTkdMRmxCUVVvc1EwRkRaQ3hGUVVGRk8wRkJRVVlzVVVGRFJ6Uk5MRXRCUVV0WkxFbEJRVXdzUTBGQlZYSlZMR05CUVdOdFFpeG5Ra0ZCZUVJc1NVRkJORU5CTEdkQ1FVRTNReXhIUVVGcFJWRXNjMEpCUm5KRUxFTkJSVFJGTzBGQlJqVkZMRTlCUVdoQ08wRkJTVUZLTEc5Q1FVRmpMRU5CUVdRc1NVRkJiVUowUXl4alFVRmpSeXhoUVVGcVF6dEJRVU5FTzBGQlEwWTdPMEZCUlVRN1FVRkRSU3hSUVVGSk5FVXNTVUZCU1N4RFFVRlNPMEZCUVVFc1VVRkRSV0VzU1VGQlNTeERRVVJPTzBGQlFVRXNVVUZGUlRoVUxGRkJRVkV2V0N4VlFVRlZiVVFzVFVGR2NFSTdPMEZCU1VFc1YwRkJUelJWTEU5QlFWQXNSVUZCWjBJN1FVRkRaQ3hWUVVGSkwxZ3NWVUZCVlN0WUxFdEJRVllzUTBGQlNpeEZRVUZ6UWp0QlFVTndRaXhaUVVGTmNFc3NWVUZCVlROT0xGVkJRVlVyV0N4TFFVRldMRU5CUVdoQ096dEJRVVZCTEdGQlFVczVWQ3hKUVVGSkxFTkJRVlFzUlVGQldVRXNTVUZCU1RCS0xGRkJRVkV5VFN4WlFVRlNMRVZCUVdoQ0xFVkJRWGREY2xjc1IwRkJlRU1zUlVGQk5rTTdRVUZETTBNN1FVRkRRVHRCUVVOQkxHTkJRVTAwUnl4WlFVRlpPRU1zVVVGQlVUUk5MRmxCUVZJc1EwRkJjVUowVnl4RFFVRnlRaXhGUVVGM1FuVlhMRzlDUVVGNFFpeEZRVUZzUWpzN1FVRkZRU3hqUVVGTmRFTXNVMEZCVTNKT0xGVkJRVlZ6VGl4VFFVRldMRVZCUVdZN1FVRkRRU3hqUVVGTk1VNHNWMEZCVjBrc1ZVRkJWWE5JTEZkQlFWWXNSVUZCYWtJN08wRkJSVUU3UVVGRFFTeGpRVUZOYVVjc1UwRkJVeXhKUVVGTGFGWXNSMEZCUkN4SFFVRlJja01zYzBKQlFUTkNPenRCUVVWQlNpeDNRa0ZCWTNsWUxFMUJRV1FzU1VGQmQwSk1MRXRCUVhoQ08wRkJRMEZ3V0N4M1FrRkJZM2xZTEZOQlFWTXNRMEZCZGtJc1NVRkJORUp1VlN4RFFVRTFRanM3UVVGRlFYUkVMSGRDUVVGamVWZ3NVMEZCVXl4RFFVRjJRaXhKUVVFMFFrWXNUMEZCVDI1WExFTkJRVkFzUlVGQk5VSTdRVUZEUVhCQ0xIZENRVUZqZVZnc1UwRkJVeXhEUVVGMlFpeEpRVUUwUWtZc1QwRkJUMnhYTEVOQlFWQXNSVUZCTlVJN1FVRkRRWEpDTEhkQ1FVRmplVmdzVTBGQlV5eERRVUYyUWl4SlFVRTBRa1lzVDBGQlQycFhMRU5CUVZBc1JVRkJOVUk3TzBGQlJVRjBRaXgzUWtGQlkzbFlMRk5CUVZNc1EwRkJka0lzU1VGQk5FSXpUaXhUUVVGVE1Va3NRMEZCVkN4RlFVRTFRanRCUVVOQmNFSXNkMEpCUVdONVdDeFRRVUZUTEVOQlFYWkNMRWxCUVRSQ00wNHNVMEZCVTNwSkxFTkJRVlFzUlVGQk5VSTdRVUZEUVhKQ0xIZENRVUZqZVZnc1UwRkJVeXhEUVVGMlFpeEpRVUUwUWpOT0xGTkJRVk40U1N4RFFVRlVMRVZCUVRWQ08wRkJRMEYwUWl4M1FrRkJZM2xZTEZOQlFWTXNRMEZCZGtJc1NVRkJORUl6VGl4VFFVRlRSU3hEUVVGVUxFVkJRVFZDTzBGQlEwUTdRVUZEUmp0QlFVTkdPenRCUVVWRUxGRkJRVWw0U2l4M1FrRkJkMEk0UXl4TlFVRk5MRU5CUVd4RExFVkJRWEZEYUVjc2IwSkJRVzlDTUVNc1kwRkJZelJZTEUxQlFXeERMRVZCUVRCRExFTkJRVU0xV0N4alFVRmpORmdzVFVGQlppeERRVUV4UXl4RlFVRnlReXhMUVVOTExFbEJRVWwwVlN4TlFVRk5MRU5CUVZZc1JVRkJZV2hITEc5Q1FVRnZRakJETEdGQlFYQkNPMEZCUTI1Q08wRkJRMFlzUTBGcVJFUTdPMEZCYlVSQkxFbEJRVTFyVkN4dlFrRkJiMElzVTBGQmNFSkJMR2xDUVVGdlFpeEhRVUZaTzBGQlEzQkRMRTFCUVVreFV5eHZRa0ZCU2l4RlFVRXdRanRCUVVONFFpeFJRVUZKVUN4cFFrRkJhVUoxUXl4TlFVRnFRaXhIUVVFd1FpeEpRVUZKT1VRc2JVSkJRVzFDTWtJc2VVSkJRWEpFTEVWQlFXZEdPMEZCUXpsRlNpeDVRa0ZCYlVJc1NVRkJTWEZHTEZsQlFVb3NRMEZEYWtJc1JVRkJSVHRCUVVGR0xGRkJRMGMwVFN4TFFVRkxXU3hKUVVGTUxFTkJRVlZ3VlN4dFFrRkJiVUpyUWl4blFrRkJOMElzU1VGQmFVUkJMR2RDUVVGc1JDeEhRVUZ6UlZNc2VVSkJSblpFTEVOQlJXbEdPMEZCUm1wR0xFOUJRVzVDTzBGQlNVRktMSFZDUVVGcFFpeERRVUZxUWl4SlFVRnpRblpETEdOQlFXTkpMR2RDUVVGd1F6dEJRVU5FTzBGQlEwWTdPMEZCUlVRN1FVRkRSU3hSUVVGSk1sb3NVMEZCVXl4RFFVRmlPMEZCUVVFc1VVRkRSV2hXTEVsQlFVa3NRMEZFVGp0QlFVRkJMRkZCUlVVeVZTeFJRVUZST1Znc1lVRkJZWGRoTEUxQlJuWkNPenRCUVVsQkxGZEJRVTh4UXl4UFFVRlFMRVZCUVdkQ08wRkJRMlFzVlVGQlNUbFlMR0ZCUVdFNFdDeExRVUZpTEVOQlFVb3NSVUZCZVVJN1FVRkRka0lzV1VGQlRYUkhMR05CUVdGNFVpeGhRVUZoT0Znc1MwRkJZaXhEUVVGdVFqdEJRVU5CTEZsQlFVMHlReXhqUVVGamFrb3NXVUZCVnpWRkxFTkJRUzlDTzBGQlEwRXNXVUZCVFdoRExGbEJRVmswUnl4WlFVRlhZU3hGUVVFM1FqdEJRVU5CTEZsQlFVMDBSaXhUUVVGVGNrNHNWVUZCVlhOT0xGTkJRVllzUlVGQlpqczdRVUZGUVR0QlFVTkJReXhwUWtGQlV5eEpRVUZMYUZZc1IwRkJSQ3hIUVVGUmNFTXNlVUpCUVhKQ096dEJRVVZCU2l4NVFrRkJhVUozV0N4TlFVRnFRaXhKUVVFeVFrd3NTMEZCTTBJN1FVRkRRVzVZTEhsQ1FVRnBRbmRZTEZOQlFWTXNRMEZCTVVJc1NVRkJLMEp6UXl4WlFVRlpibGdzUlVGQk0wTTdRVUZEUVRORExIbENRVUZwUW5kWUxGTkJRVk1zUTBGQk1VSXNTVUZCSzBKR0xFOUJRVTl1Vnl4RFFVRjBRenRCUVVOQmJrSXNlVUpCUVdsQ2QxZ3NVMEZCVXl4RFFVRXhRaXhKUVVFclFrWXNUMEZCVDJ4WExFTkJRWFJETzBGQlEwRndRaXg1UWtGQmFVSjNXQ3hUUVVGVExFTkJRVEZDTEVsQlFTdENSaXhQUVVGUGFsY3NRMEZCZEVNN1FVRkRRWEpDTEhsQ1FVRnBRbmRZTEZOQlFWTXNRMEZCTVVJc1NVRkJLMEl6Unl4WlFVRlhhMG9zTWtKQlFWZ3NSVUZCTDBJN1FVRkRSRHRCUVVOR096dEJRVVZFTEZGQlFVbDRXaXgzUWtGQmQwSnBReXhOUVVGTkxFTkJRV3hETEVWQlFYRkRia1lzYjBKQlFXOUNNa01zYVVKQlFXbENNbGdzVFVGQmNrTXNSVUZCTmtNc1EwRkJRek5ZTEdsQ1FVRnBRakpZTEUxQlFXeENMRU5CUVRkRExFVkJRWEpETEV0QlEwc3NTVUZCU1c1V0xFMUJRVTBzUTBGQlZpeEZRVUZoYmtZc2IwSkJRVzlDTWtNc1owSkJRWEJDTzBGQlEyNUNPMEZCUTBZc1EwRjBRMFE3TzBGQmQwTkJNVU1zUzBGQlN6QmpMRk5CUVV3c1IwRkJhVUlzVlVGQlZVTXNTMEZCVml4RlFVRnBRanRCUVVOb1F5eE5RVUZKUVN4TlFVRk5NMWdzU1VGQlRpeFpRVUZ6UWl0RExGbEJRVEZDTEVWQlFYZERPMEZCUTNSRE8wRkJRMEVzV1VGQlVUUlZMRTFCUVUweldDeEpRVUZPTEVOQlFWY3NRMEZCV0N4RFFVRlNPMEZCUTBVc1YwRkJTemRGTEdOQlFXTkRMRmRCUVc1Q08wRkJRV2RETzBGQlF6bENhME1zZDBKQlFXTXNTVUZCU1hsR0xGbEJRVW9zUTBGQmFVSTBWU3hOUVVGTk0xZ3NTVUZCZGtJc1EwRkJaRHRCUVVOQk8wRkJRMFE3UVVGRFJDeFhRVUZMTjBVc1kwRkJZMFVzWlVGQmJrSTdRVUZCYjBNN1FVRkRiRU50UXl3MFFrRkJhMElzU1VGQlNYVkdMRmxCUVVvc1EwRkJhVUkwVlN4TlFVRk5NMWdzU1VGQmRrSXNRMEZCYkVJN1FVRkRRVHRCUVVORU8wRkJRMFFzVjBGQlN6ZEZMR05CUVdOSExHRkJRVzVDTzBGQlFXdERPMEZCUTJoRGJVTXNNRUpCUVdkQ0xFbEJRVWx6Uml4WlFVRktMRU5CUVdsQ05GVXNUVUZCVFROWUxFbEJRWFpDTEVOQlFXaENPMEZCUTBFN1FVRkRSRHRCUVVORUxGZEJRVXMzUlN4alFVRmpTU3huUWtGQmJrSTdRVUZCY1VNN1FVRkRia050UXl3MlFrRkJiVUlzU1VGQlNYRkdMRmxCUVVvc1EwRkJhVUkwVlN4TlFVRk5NMWdzU1VGQmRrSXNRMEZCYmtJN1FVRkRRVHRCUVVORU8wRkJRMFE3UVVGcVFrWTdPMEZCYjBKQk8wRkJRMFFzUjBGMlFrUXNUVUYxUWs4c1NVRkJTVEpZTEUxQlFVMHpXQ3hKUVVGT0xFTkJRVmN3UXl4SFFVRllMRWxCUVd0Q09VWXNhVUpCUVdsQ0syRXNUVUZCVFROWUxFbEJRVTRzUTBGQlZ6QkRMRWRCUVRWQ0xFTkJRWFJDTEVWQlFYZEVPVVlzYVVKQlFXbENLMkVzVFVGQlRUTllMRWxCUVU0c1EwRkJWekJETEVkQlFUVkNMRVZCUVdsRGFWWXNUVUZCVFROWUxFbEJRVTRzUTBGQlYzRkRMRTFCUVRWRE8wRkJRMmhGTEVOQmVrSkVMRU1pTENKbWFXeGxJam9pZDI5eWEyVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwWEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzVjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR2xrWlc1MGFYUjVJR1oxYm1OMGFXOXVJR1p2Y2lCallXeHNhVzVuSUdoaGNtMXZibmtnYVcxd2IzSjBjeUIzYVhSb0lIUm9aU0JqYjNKeVpXTjBJR052Ym5SbGVIUmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWFTQTlJR1oxYm1OMGFXOXVLSFpoYkhWbEtTQjdJSEpsZEhWeWJpQjJZV3gxWlRzZ2ZUdGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3WEc0Z1hIUmNkRngwWEhSamIyNW1hV2QxY21GaWJHVTZJR1poYkhObExGeHVJRngwWEhSY2RGeDBaVzUxYldWeVlXSnNaVG9nZEhKMVpTeGNiaUJjZEZ4MFhIUmNkR2RsZERvZ1oyVjBkR1Z5WEc0Z1hIUmNkRngwZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OWliMjkwYzNSeVlYQWdaREV5TlRVM05UZG1PVE5oWkdFNVltVTBZallpTENKamIyNXpkQ0IwY21GdWMyWmxjbUZpYkdWTlpYTnpZV2RsSUQwZ2MyVnNaaTUzWldKcmFYUlFiM04wVFdWemMyRm5aU0I4ZkNCelpXeG1MbkJ2YzNSTlpYTnpZV2RsTEZ4dVhHNGdJQzh2SUdWdWRXMWNiaUFnVFVWVFUwRkhSVjlVV1ZCRlV5QTlJSHRjYmlBZ0lDQlhUMUpNUkZKRlVFOVNWRG9nTUN4Y2JpQWdJQ0JEVDB4TVNWTkpUMDVTUlZCUFVsUTZJREVzWEc0Z0lDQWdWa1ZJU1VOTVJWSkZVRTlTVkRvZ01peGNiaUFnSUNCRFQwNVRWRkpCU1U1VVVrVlFUMUpVT2lBekxGeHVJQ0FnSUZOUFJsUlNSVkJQVWxRNklEUmNiaUFnZlR0Y2JseHVJQ0F2THlCMFpXMXdJSFpoY21saFlteGxjMXh1YkdWMElGOXZZbXBsWTNRc1hHNGdJRjkyWldOMGIzSXNYRzRnSUY5MGNtRnVjMlp2Y20wc1hHNGdJRjkwY21GdWMyWnZjbTFmY0c5ekxGeHVJQ0JmYzI5bWRHSnZaSGxmWlc1aFlteGxaQ0E5SUdaaGJITmxMRnh1SUNCc1lYTjBYM05wYlhWc1lYUnBiMjVmWkhWeVlYUnBiMjRnUFNBd0xGeHVYRzRnSUY5dWRXMWZiMkpxWldOMGN5QTlJREFzWEc0Z0lGOXVkVzFmY21sbmFXUmliMlI1WDI5aWFtVmpkSE1nUFNBd0xGeHVJQ0JmYm5WdFgzTnZablJpYjJSNVgyOWlhbVZqZEhNZ1BTQXdMRnh1SUNCZmJuVnRYM2RvWldWc2N5QTlJREFzWEc0Z0lGOXVkVzFmWTI5dWMzUnlZV2x1ZEhNZ1BTQXdMRnh1SUNCZmMyOW1kR0p2WkhsZmNtVndiM0owWDNOcGVtVWdQU0F3TEZ4dVhHNGdJQzh2SUhkdmNteGtJSFpoY21saFlteGxjMXh1SUNCbWFYaGxaRlJwYldWVGRHVndMQ0F2THlCMWMyVmtJSGRvWlc0Z1kyRnNiR2x1WnlCemRHVndVMmx0ZFd4aGRHbHZibHh1SUNCc1lYTjBYM05wYlhWc1lYUnBiMjVmZEdsdFpTeGNibHh1SUNCM2IzSnNaQ3hjYmlBZ1gzWmxZek5mTVN4Y2JpQWdYM1psWXpOZk1peGNiaUFnWDNabFl6TmZNeXhjYmlBZ1gzRjFZWFE3WEc1Y2JpQWdMeThnY0hKcGRtRjBaU0JqWVdOb1pWeHVZMjl1YzNRZ2NIVmliR2xqWDJaMWJtTjBhVzl1Y3lBOUlIdDlMRnh1SUNCZmIySnFaV04wY3lBOUlGdGRMRnh1SUNCZmRtVm9hV05zWlhNZ1BTQmJYU3hjYmlBZ1gyTnZibk4wY21GcGJuUnpJRDBnVzEwc1hHNGdJRjl2WW1wbFkzUnpYMkZ0Ylc4Z1BTQjdmU3hjYmlBZ1gyOWlhbVZqZEY5emFHRndaWE1nUFNCN2ZTeGNibHh1SUNBdkx5QlVhR1VnWm05c2JHOTNhVzVuSUc5aWFtVmpkSE1nWVhKbElIUnZJSFJ5WVdOcklHOWlhbVZqZEhNZ2RHaGhkQ0JoYlcxdkxtcHpJR1J2WlhOdUozUWdZMnhsWVc1Y2JpQWdMeThnZFhBdUlFRnNiQ0JoY21VZ1kyeGxZVzVsWkNCMWNDQjNhR1Z1SUhSb1pYa25jbVVnWTI5eWNtVnpjRzl1WkdsdVp5QmliMlI1SUdseklHUmxjM1J5YjNsbFpDNWNiaUFnTHk4Z1ZXNW1iM0owZFc1aGRHVnNlU3dnYVhRbmN5QjJaWEo1SUdScFptWnBZM1ZzZENCMGJ5Qm5aWFFnWVhRZ2RHaGxjMlVnYjJKcVpXTjBjeUJtY205dElIUm9aVnh1SUNBdkx5QmliMlI1TENCemJ5QjNaU0JvWVhabElIUnZJSFJ5WVdOcklIUm9aVzBnYjNWeWMyVnNkbVZ6TGx4dUlDQmZiVzkwYVc5dVgzTjBZWFJsY3lBOUlIdDlMRnh1SUNBdkx5QkViMjRuZENCdVpXVmtJSFJ2SUhkdmNuSjVJR0ZpYjNWMElHbDBJR1p2Y2lCallXTm9aV1FnYzJoaGNHVnpMbHh1SUNCZmJtOXVZMkZqYUdWa1gzTm9ZWEJsY3lBOUlIdDlMRnh1SUNBdkx5QkJJR0p2WkhrZ2QybDBhQ0JoSUdOdmJYQnZkVzVrSUhOb1lYQmxJR0ZzZDJGNWN5Qm9ZWE1nWVNCeVpXZDFiR0Z5SUhOb1lYQmxJR0Z6SUhkbGJHd3NJSE52SUhkbFhHNGdJQzh2SUdoaGRtVWdkSEpoWTJzZ2RHaGxiU0J6WlhCaGNtRjBaV3g1TGx4dUlDQmZZMjl0Y0c5MWJtUmZjMmhoY0dWeklEMGdlMzA3WEc1Y2JpQWdMeThnYjJKcVpXTjBJSEpsY0c5eWRHbHVaMXh1YkdWMElGSkZVRTlTVkY5RFNGVk9TMU5KV2tVc0lDOHZJSEpsY0c5eWRDQmhjbkpoZVNCcGN5QnBibU55WldGelpXUWdhVzRnYVc1amNtVnRaVzUwY3lCdlppQjBhR2x6SUdOb2RXNXJJSE5wZW1WY2JpQWdkMjl5YkdSeVpYQnZjblFzWEc0Z0lITnZablJ5WlhCdmNuUXNYRzRnSUdOdmJHeHBjMmx2Ym5KbGNHOXlkQ3hjYmlBZ2RtVm9hV05zWlhKbGNHOXlkQ3hjYmlBZ1kyOXVjM1J5WVdsdWRISmxjRzl5ZER0Y2JseHVZMjl1YzNRZ1YwOVNURVJTUlZCUFVsUmZTVlJGVFZOSldrVWdQU0F4TkN3Z0x5OGdhRzkzSUcxaGJua2dabXh2WVhRZ2RtRnNkV1Z6SUdWaFkyZ2djbVZ3YjNKMFpXUWdhWFJsYlNCdVpXVmtjMXh1SUNCRFQweE1TVk5KVDA1U1JWQlBVbFJmU1ZSRlRWTkpXa1VnUFNBMUxDQXZMeUJ2Ym1VZ1pteHZZWFFnWm05eUlHVmhZMmdnYjJKcVpXTjBJR2xrTENCaGJtUWdZU0JXWldNeklHTnZiblJoWTNRZ2JtOXliV0ZzWEc0Z0lGWkZTRWxEVEVWU1JWQlBVbFJmU1ZSRlRWTkpXa1VnUFNBNUxDQXZMeUIyWldocFkyeGxJR2xrTENCM2FHVmxiQ0JwYm1SbGVDd2dNeUJtYjNJZ2NHOXphWFJwYjI0c0lEUWdabTl5SUhKdmRHRjBhVzl1WEc0Z0lFTlBUbE5VVWtGSlRsUlNSVkJQVWxSZlNWUkZUVk5KV2tVZ1BTQTJPeUF2THlCamIyNXpkSEpoYVc1MElHbGtMQ0J2Wm1aelpYUWdiMkpxWldOMExDQnZabVp6WlhRc0lHRndjR3hwWldRZ2FXMXdkV3h6WlZ4dVhHNWpiMjV6ZENCaFlpQTlJRzVsZHlCQmNuSmhlVUoxWm1abGNpZ3hLVHRjYmx4dWRISmhibk5tWlhKaFlteGxUV1Z6YzJGblpTaGhZaXdnVzJGaVhTazdYRzVqYjI1emRDQlRWVkJRVDFKVVgxUlNRVTVUUmtWU1FVSk1SU0E5SUNoaFlpNWllWFJsVEdWdVozUm9JRDA5UFNBd0tUdGNibHh1WTI5dWMzUWdaMlYwVTJoaGNHVkdjbTl0UTJGamFHVWdQU0FvWTJGamFHVmZhMlY1S1NBOVBpQjdYRzRnSUdsbUlDaGZiMkpxWldOMFgzTm9ZWEJsYzF0allXTm9aVjlyWlhsZElDRTlQU0IxYm1SbFptbHVaV1FwWEc0Z0lDQWdjbVYwZFhKdUlGOXZZbXBsWTNSZmMyaGhjR1Z6VzJOaFkyaGxYMnRsZVYwN1hHNWNiaUFnY21WMGRYSnVJRzUxYkd3N1hHNTlPMXh1WEc1amIyNXpkQ0J6WlhSVGFHRndaVU5oWTJobElEMGdLR05oWTJobFgydGxlU3dnYzJoaGNHVXBJRDArSUh0Y2JpQWdYMjlpYW1WamRGOXphR0Z3WlhOYlkyRmphR1ZmYTJWNVhTQTlJSE5vWVhCbE8xeHVmVHRjYmx4dVkyOXVjM1FnWTNKbFlYUmxVMmhoY0dVZ1BTQW9aR1Z6WTNKcGNIUnBiMjRwSUQwK0lIdGNiaUFnYkdWMElITm9ZWEJsTzF4dVhHNGdJRjkwY21GdWMyWnZjbTB1YzJWMFNXUmxiblJwZEhrb0tUdGNiaUFnYzNkcGRHTm9JQ2hrWlhOamNtbHdkR2x2Ymk1MGVYQmxLU0I3WEc0Z0lDQWdZMkZ6WlNBbmNHeGhibVVuT2lCN1hHNGdJQ0FnSUNCamIyNXpkQ0JqWVdOb1pWOXJaWGtnUFNCZ2NHeGhibVZmSkh0a1pYTmpjbWx3ZEdsdmJpNXViM0p0WVd3dWVIMWZKSHRrWlhOamNtbHdkR2x2Ymk1dWIzSnRZV3d1ZVgxZkpIdGtaWE5qY21sd2RHbHZiaTV1YjNKdFlXd3VlbjFnTzF4dVhHNGdJQ0FnSUNCcFppQW9LSE5vWVhCbElEMGdaMlYwVTJoaGNHVkdjbTl0UTJGamFHVW9ZMkZqYUdWZmEyVjVLU2tnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUllLR1JsYzJOeWFYQjBhVzl1TG01dmNtMWhiQzU0S1R0Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUlpLR1JsYzJOeWFYQjBhVzl1TG01dmNtMWhiQzU1S1R0Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUmFLR1JsYzJOeWFYQjBhVzl1TG01dmNtMWhiQzU2S1R0Y2JpQWdJQ0FnSUNBZ2MyaGhjR1VnUFNCdVpYY2dRVzF0Ynk1aWRGTjBZWFJwWTFCc1lXNWxVMmhoY0dVb1gzWmxZek5mTVN3Z01DazdYRzRnSUNBZ0lDQWdJSE5sZEZOb1lYQmxRMkZqYUdVb1kyRmphR1ZmYTJWNUxDQnphR0Z3WlNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJSDFjYmlBZ0lDQmpZWE5sSUNkaWIzZ25PaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQmpZV05vWlY5clpYa2dQU0JnWW05NFh5UjdaR1Z6WTNKcGNIUnBiMjR1ZDJsa2RHaDlYeVI3WkdWelkzSnBjSFJwYjI0dWFHVnBaMmgwZlY4a2UyUmxjMk55YVhCMGFXOXVMbVJsY0hSb2ZXQTdYRzVjYmlBZ0lDQWdJR2xtSUNnb2MyaGhjR1VnUFNCblpYUlRhR0Z3WlVaeWIyMURZV05vWlNoallXTm9aVjlyWlhrcEtTQTlQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0JmZG1Wak0xOHhMbk5sZEZnb1pHVnpZM0pwY0hScGIyNHVkMmxrZEdnZ0x5QXlLVHRjYmlBZ0lDQWdJQ0FnWDNabFl6TmZNUzV6WlhSWktHUmxjMk55YVhCMGFXOXVMbWhsYVdkb2RDQXZJRElwTzF4dUlDQWdJQ0FnSUNCZmRtVmpNMTh4TG5ObGRGb29aR1Z6WTNKcGNIUnBiMjR1WkdWd2RHZ2dMeUF5S1R0Y2JpQWdJQ0FnSUNBZ2MyaGhjR1VnUFNCdVpYY2dRVzF0Ynk1aWRFSnZlRk5vWVhCbEtGOTJaV016WHpFcE8xeHVJQ0FnSUNBZ0lDQnpaWFJUYUdGd1pVTmhZMmhsS0dOaFkyaGxYMnRsZVN3Z2MyaGhjR1VwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ1kyRnpaU0FuYzNCb1pYSmxKem9nZTF4dUlDQWdJQ0FnWTI5dWMzUWdZMkZqYUdWZmEyVjVJRDBnWUhOd2FHVnlaVjhrZTJSbGMyTnlhWEIwYVc5dUxuSmhaR2wxYzMxZ08xeHVYRzRnSUNBZ0lDQnBaaUFvS0hOb1lYQmxJRDBnWjJWMFUyaGhjR1ZHY205dFEyRmphR1VvWTJGamFHVmZhMlY1S1NrZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdjMmhoY0dVZ1BTQnVaWGNnUVcxdGJ5NWlkRk53YUdWeVpWTm9ZWEJsS0dSbGMyTnlhWEIwYVc5dUxuSmhaR2wxY3lrN1hHNGdJQ0FnSUNBZ0lITmxkRk5vWVhCbFEyRmphR1VvWTJGamFHVmZhMlY1TENCemFHRndaU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnSUNCallYTmxJQ2RqZVd4cGJtUmxjaWM2SUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR05oWTJobFgydGxlU0E5SUdCamVXeHBibVJsY2w4a2UyUmxjMk55YVhCMGFXOXVMbmRwWkhSb2ZWOGtlMlJsYzJOeWFYQjBhVzl1TG1obGFXZG9kSDFmSkh0a1pYTmpjbWx3ZEdsdmJpNWtaWEIwYUgxZ08xeHVYRzRnSUNBZ0lDQnBaaUFvS0hOb1lYQmxJRDBnWjJWMFUyaGhjR1ZHY205dFEyRmphR1VvWTJGamFHVmZhMlY1S1NrZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdYM1psWXpOZk1TNXpaWFJZS0dSbGMyTnlhWEIwYVc5dUxuZHBaSFJvSUM4Z01pazdYRzRnSUNBZ0lDQWdJRjkyWldNelh6RXVjMlYwV1Noa1pYTmpjbWx3ZEdsdmJpNW9aV2xuYUhRZ0x5QXlLVHRjYmlBZ0lDQWdJQ0FnWDNabFl6TmZNUzV6WlhSYUtHUmxjMk55YVhCMGFXOXVMbVJsY0hSb0lDOGdNaWs3WEc0Z0lDQWdJQ0FnSUhOb1lYQmxJRDBnYm1WM0lFRnRiVzh1WW5SRGVXeHBibVJsY2xOb1lYQmxLRjkyWldNelh6RXBPMXh1SUNBZ0lDQWdJQ0J6WlhSVGFHRndaVU5oWTJobEtHTmhZMmhsWDJ0bGVTd2djMmhoY0dVcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0I5WEc0Z0lDQWdZMkZ6WlNBblkyRndjM1ZzWlNjNklIdGNiaUFnSUNBZ0lHTnZibk4wSUdOaFkyaGxYMnRsZVNBOUlHQmpZWEJ6ZFd4bFh5UjdaR1Z6WTNKcGNIUnBiMjR1Y21Ga2FYVnpmVjhrZTJSbGMyTnlhWEIwYVc5dUxtaGxhV2RvZEgxZ08xeHVYRzRnSUNBZ0lDQnBaaUFvS0hOb1lYQmxJRDBnWjJWMFUyaGhjR1ZHY205dFEyRmphR1VvWTJGamFHVmZhMlY1S1NrZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdMeThnU1c0Z1FuVnNiR1YwTENCallYQnpkV3hsSUdobGFXZG9kQ0JsZUdOc2RXUmxjeUIwYUdVZ1pXNWtJSE53YUdWeVpYTmNiaUFnSUNBZ0lDQWdjMmhoY0dVZ1BTQnVaWGNnUVcxdGJ5NWlkRU5oY0hOMWJHVlRhR0Z3WlNoa1pYTmpjbWx3ZEdsdmJpNXlZV1JwZFhNc0lHUmxjMk55YVhCMGFXOXVMbWhsYVdkb2RDQXRJRElnS2lCa1pYTmpjbWx3ZEdsdmJpNXlZV1JwZFhNcE8xeHVJQ0FnSUNBZ0lDQnpaWFJUYUdGd1pVTmhZMmhsS0dOaFkyaGxYMnRsZVN3Z2MyaGhjR1VwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ1kyRnpaU0FuWTI5dVpTYzZJSHRjYmlBZ0lDQWdJR052Ym5OMElHTmhZMmhsWDJ0bGVTQTlJR0JqYjI1bFh5UjdaR1Z6WTNKcGNIUnBiMjR1Y21Ga2FYVnpmVjhrZTJSbGMyTnlhWEIwYVc5dUxtaGxhV2RvZEgxZ08xeHVYRzRnSUNBZ0lDQnBaaUFvS0hOb1lYQmxJRDBnWjJWMFUyaGhjR1ZHY205dFEyRmphR1VvWTJGamFHVmZhMlY1S1NrZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdjMmhoY0dVZ1BTQnVaWGNnUVcxdGJ5NWlkRU52Ym1WVGFHRndaU2hrWlhOamNtbHdkR2x2Ymk1eVlXUnBkWE1zSUdSbGMyTnlhWEIwYVc5dUxtaGxhV2RvZENrN1hHNGdJQ0FnSUNBZ0lITmxkRk5vWVhCbFEyRmphR1VvWTJGamFHVmZhMlY1TENCemFHRndaU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnSUNCallYTmxJQ2RqYjI1allYWmxKem9nZTF4dUlDQWdJQ0FnWTI5dWMzUWdkSEpwWVc1bmJHVmZiV1Z6YUNBOUlHNWxkeUJCYlcxdkxtSjBWSEpwWVc1bmJHVk5aWE5vS0NrN1hHNGdJQ0FnSUNCcFppQW9JV1JsYzJOeWFYQjBhVzl1TG1SaGRHRXViR1Z1WjNSb0tTQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdJQ0JqYjI1emRDQmtZWFJoSUQwZ1pHVnpZM0pwY0hScGIyNHVaR0YwWVR0Y2JseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmtZWFJoTG14bGJtZDBhQ0F2SURrN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCZmRtVmpNMTh4TG5ObGRGZ29aR0YwWVZ0cElDb2dPVjBwTzF4dUlDQWdJQ0FnSUNCZmRtVmpNMTh4TG5ObGRGa29aR0YwWVZ0cElDb2dPU0FySURGZEtUdGNiaUFnSUNBZ0lDQWdYM1psWXpOZk1TNXpaWFJhS0dSaGRHRmJhU0FxSURrZ0t5QXlYU2s3WEc1Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTWk1elpYUllLR1JoZEdGYmFTQXFJRGtnS3lBelhTazdYRzRnSUNBZ0lDQWdJRjkyWldNelh6SXVjMlYwV1Noa1lYUmhXMmtnS2lBNUlDc2dORjBwTzF4dUlDQWdJQ0FnSUNCZmRtVmpNMTh5TG5ObGRGb29aR0YwWVZ0cElDb2dPU0FySURWZEtUdGNibHh1SUNBZ0lDQWdJQ0JmZG1Wak0xOHpMbk5sZEZnb1pHRjBZVnRwSUNvZ09TQXJJRFpkS1R0Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTXk1elpYUlpLR1JoZEdGYmFTQXFJRGtnS3lBM1hTazdYRzRnSUNBZ0lDQWdJRjkyWldNelh6TXVjMlYwV2loa1lYUmhXMmtnS2lBNUlDc2dPRjBwTzF4dVhHNGdJQ0FnSUNBZ0lIUnlhV0Z1WjJ4bFgyMWxjMmd1WVdSa1ZISnBZVzVuYkdVb1hHNGdJQ0FnSUNBZ0lDQWdYM1psWXpOZk1TeGNiaUFnSUNBZ0lDQWdJQ0JmZG1Wak0xOHlMRnh1SUNBZ0lDQWdJQ0FnSUY5MlpXTXpYek1zWEc0Z0lDQWdJQ0FnSUNBZ1ptRnNjMlZjYmlBZ0lDQWdJQ0FnS1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2MyaGhjR1VnUFNCdVpYY2dRVzF0Ynk1aWRFSjJhRlJ5YVdGdVoyeGxUV1Z6YUZOb1lYQmxLRnh1SUNBZ0lDQWdJQ0IwY21saGJtZHNaVjl0WlhOb0xGeHVJQ0FnSUNBZ0lDQjBjblZsTEZ4dUlDQWdJQ0FnSUNCMGNuVmxYRzRnSUNBZ0lDQXBPMXh1WEc0Z0lDQWdJQ0JmYm05dVkyRmphR1ZrWDNOb1lYQmxjMXRrWlhOamNtbHdkR2x2Ymk1cFpGMGdQU0J6YUdGd1pUdGNibHh1SUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnZlZ4dUlDQWdJR05oYzJVZ0oyTnZiblpsZUNjNklIdGNiaUFnSUNBZ0lITm9ZWEJsSUQwZ2JtVjNJRUZ0Ylc4dVluUkRiMjUyWlhoSWRXeHNVMmhoY0dVb0tUdGNiaUFnSUNBZ0lHTnZibk4wSUdSaGRHRWdQU0JrWlhOamNtbHdkR2x2Ymk1a1lYUmhPMXh1WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdSaGRHRXViR1Z1WjNSb0lDOGdNenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJRjkyWldNelh6RXVjMlYwV0Noa1lYUmhXMmtnS2lBeklGMHBPMXh1SUNBZ0lDQWdJQ0JmZG1Wak0xOHhMbk5sZEZrb1pHRjBZVnRwSUNvZ015QXJJREZkS1R0Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUmFLR1JoZEdGYmFTQXFJRE1nS3lBeVhTazdYRzVjYmlBZ0lDQWdJQ0FnYzJoaGNHVXVZV1JrVUc5cGJuUW9YM1psWXpOZk1TazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJRjl1YjI1allXTm9aV1JmYzJoaGNHVnpXMlJsYzJOeWFYQjBhVzl1TG1sa1hTQTlJSE5vWVhCbE8xeHVYRzRnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0I5WEc0Z0lDQWdZMkZ6WlNBbmFHVnBaMmgwWm1sbGJHUW5PaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQjRjSFJ6SUQwZ1pHVnpZM0pwY0hScGIyNHVlSEIwY3l4Y2JpQWdJQ0FnSUNBZ2VYQjBjeUE5SUdSbGMyTnlhWEIwYVc5dUxubHdkSE1zWEc0Z0lDQWdJQ0FnSUhCdmFXNTBjeUE5SUdSbGMyTnlhWEIwYVc5dUxuQnZhVzUwY3l4Y2JpQWdJQ0FnSUNBZ2NIUnlJRDBnUVcxdGJ5NWZiV0ZzYkc5aktEUWdLaUI0Y0hSeklDb2dlWEIwY3lrN1hHNWNiaUFnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCd0lEMGdNQ3dnY0RJZ1BTQXdPeUJwSUR3Z2VIQjBjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR29nUFNBd095QnFJRHdnZVhCMGN6c2dhaXNyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdRVzF0Ynk1SVJVRlFSak15VzNCMGNpQXJJSEF5SUQ0K0lESmRJRDBnY0c5cGJuUnpXM0JkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdjQ3NyTzF4dUlDQWdJQ0FnSUNBZ0lIQXlJQ3M5SURRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjMmhoY0dVZ1BTQnVaWGNnUVcxdGJ5NWlkRWhsYVdkb2RHWnBaV3hrVkdWeWNtRnBibE5vWVhCbEtGeHVJQ0FnSUNBZ0lDQmtaWE5qY21sd2RHbHZiaTU0Y0hSekxGeHVJQ0FnSUNBZ0lDQmtaWE5qY21sd2RHbHZiaTU1Y0hSekxGeHVJQ0FnSUNBZ0lDQndkSElzWEc0Z0lDQWdJQ0FnSURFc1hHNGdJQ0FnSUNBZ0lDMWtaWE5qY21sd2RHbHZiaTVoWW5OTllYaElaV2xuYUhRc1hHNGdJQ0FnSUNBZ0lHUmxjMk55YVhCMGFXOXVMbUZpYzAxaGVFaGxhV2RvZEN4Y2JpQWdJQ0FnSUNBZ01peGNiaUFnSUNBZ0lDQWdKMUJJV1Y5R1RFOUJWQ2NzWEc0Z0lDQWdJQ0FnSUdaaGJITmxYRzRnSUNBZ0lDQXBPMXh1WEc0Z0lDQWdJQ0JmZG1Wak0xOHhMbk5sZEZnb1pHVnpZM0pwY0hScGIyNHVlSE5wZW1VZ0x5QW9aR1Z6WTNKcGNIUnBiMjR1ZUhCMGN5QXRJREVwS1R0Y2JpQWdJQ0FnSUY5MlpXTXpYekV1YzJWMFdTaGtaWE5qY21sd2RHbHZiaTU1YzJsNlpTQXZJQ2hrWlhOamNtbHdkR2x2Ymk1NWNIUnpJQzBnTVNrcE8xeHVJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUmFLREVwTzF4dVhHNGdJQ0FnSUNCemFHRndaUzV6WlhSTWIyTmhiRk5qWVd4cGJtY29YM1psWXpOZk1TazdYRzRnSUNBZ0lDQmZibTl1WTJGamFHVmtYM05vWVhCbGMxdGtaWE5qY21sd2RHbHZiaTVwWkYwZ1BTQnphR0Z3WlR0Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnTHk4Z1RtOTBJSEpsWTI5bmJtbDZaV1JjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnphR0Z3WlR0Y2JuMDdYRzVjYm1OdmJuTjBJR055WldGMFpWTnZablJDYjJSNUlEMGdLR1JsYzJOeWFYQjBhVzl1S1NBOVBpQjdYRzRnSUd4bGRDQmliMlI1TzF4dVhHNGdJR052Ym5OMElITnZablJDYjJSNVNHVnNjR1Z5Y3lBOUlHNWxkeUJCYlcxdkxtSjBVMjltZEVKdlpIbElaV3h3WlhKektDazdYRzVjYmlBZ2MzZHBkR05vSUNoa1pYTmpjbWx3ZEdsdmJpNTBlWEJsS1NCN1hHNGdJQ0FnWTJGelpTQW5jMjltZEZSeWFXMWxjMmduT2lCN1hHNGdJQ0FnSUNCcFppQW9JV1JsYzJOeWFYQjBhVzl1TG1GV1pYSjBhV05sY3k1c1pXNW5kR2dwSUhKbGRIVnliaUJtWVd4elpUdGNibHh1SUNBZ0lDQWdZbTlrZVNBOUlITnZablJDYjJSNVNHVnNjR1Z5Y3k1RGNtVmhkR1ZHY205dFZISnBUV1Z6YUNoY2JpQWdJQ0FnSUNBZ2QyOXliR1F1WjJWMFYyOXliR1JKYm1adktDa3NYRzRnSUNBZ0lDQWdJR1JsYzJOeWFYQjBhVzl1TG1GV1pYSjBhV05sY3l4Y2JpQWdJQ0FnSUNBZ1pHVnpZM0pwY0hScGIyNHVZVWx1WkdsalpYTXNYRzRnSUNBZ0lDQWdJR1JsYzJOeWFYQjBhVzl1TG1GSmJtUnBZMlZ6TG14bGJtZDBhQ0F2SURNc1hHNGdJQ0FnSUNBZ0lHWmhiSE5sWEc0Z0lDQWdJQ0FwTzF4dVhHNGdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ1kyRnpaU0FuYzI5bWRFTnNiM1JvVFdWemFDYzZJSHRjYmlBZ0lDQWdJR052Ym5OMElHTnlJRDBnWkdWelkzSnBjSFJwYjI0dVkyOXlibVZ5Y3p0Y2JseHVJQ0FnSUNBZ1ltOWtlU0E5SUhOdlpuUkNiMlI1U0dWc2NHVnljeTVEY21WaGRHVlFZWFJqYUNoY2JpQWdJQ0FnSUNBZ2QyOXliR1F1WjJWMFYyOXliR1JKYm1adktDa3NYRzRnSUNBZ0lDQWdJRzVsZHlCQmJXMXZMbUowVm1WamRHOXlNeWhqY2xzd1hTd2dZM0piTVYwc0lHTnlXekpkS1N4Y2JpQWdJQ0FnSUNBZ2JtVjNJRUZ0Ylc4dVluUldaV04wYjNJektHTnlXek5kTENCamNsczBYU3dnWTNKYk5WMHBMRnh1SUNBZ0lDQWdJQ0J1WlhjZ1FXMXRieTVpZEZabFkzUnZjak1vWTNKYk5sMHNJR055V3pkZExDQmpjbHM0WFNrc1hHNGdJQ0FnSUNBZ0lHNWxkeUJCYlcxdkxtSjBWbVZqZEc5eU15aGpjbHM1WFN3Z1kzSmJNVEJkTENCamNsc3hNVjBwTEZ4dUlDQWdJQ0FnSUNCa1pYTmpjbWx3ZEdsdmJpNXpaV2R0Wlc1MGMxc3dYU3hjYmlBZ0lDQWdJQ0FnWkdWelkzSnBjSFJwYjI0dWMyVm5iV1Z1ZEhOYk1WMHNYRzRnSUNBZ0lDQWdJREFzWEc0Z0lDQWdJQ0FnSUhSeWRXVmNiaUFnSUNBZ0lDazdYRzVjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdJQ0JqWVhObElDZHpiMlowVW05d1pVMWxjMmduT2lCN1hHNGdJQ0FnSUNCamIyNXpkQ0JrWVhSaElEMGdaR1Z6WTNKcGNIUnBiMjR1WkdGMFlUdGNibHh1SUNBZ0lDQWdZbTlrZVNBOUlITnZablJDYjJSNVNHVnNjR1Z5Y3k1RGNtVmhkR1ZTYjNCbEtGeHVJQ0FnSUNBZ0lDQjNiM0pzWkM1blpYUlhiM0pzWkVsdVptOG9LU3hjYmlBZ0lDQWdJQ0FnYm1WM0lFRnRiVzh1WW5SV1pXTjBiM0l6S0dSaGRHRmJNRjBzSUdSaGRHRmJNVjBzSUdSaGRHRmJNbDBwTEZ4dUlDQWdJQ0FnSUNCdVpYY2dRVzF0Ynk1aWRGWmxZM1J2Y2pNb1pHRjBZVnN6WFN3Z1pHRjBZVnMwWFN3Z1pHRjBZVnMxWFNrc1hHNGdJQ0FnSUNBZ0lHUmhkR0ZiTmwwZ0xTQXhMRnh1SUNBZ0lDQWdJQ0F3WEc0Z0lDQWdJQ0FwTzF4dVhHNGdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ1pHVm1ZWFZzZERwY2JpQWdJQ0FnSUM4dklFNXZkQ0J5WldOdloyNXBlbVZrWEc0Z0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZbTlrZVR0Y2JuMDdYRzVjYm5CMVlteHBZMTltZFc1amRHbHZibk11YVc1cGRDQTlJQ2h3WVhKaGJYTWdQU0I3ZlNrZ1BUNGdlMXh1SUNCcFppQW9jR0Z5WVcxekxuZGhjMjFDZFdabVpYSXBJSHRjYmlBZ0lDQnBiWEJ2Y25SVFkzSnBjSFJ6S0hCaGNtRnRjeTVoYlcxdktUdGNibHh1SUNBZ0lITmxiR1l1UVcxdGJ5QTlJR3h2WVdSQmJXMXZSbkp2YlVKcGJtRnllU2h3WVhKaGJYTXVkMkZ6YlVKMVptWmxjaWs3WEc0Z0lDQWdkSEpoYm5ObVpYSmhZbXhsVFdWemMyRm5aU2g3WTIxa09pQW5ZVzF0YjB4dllXUmxaQ2Q5S1R0Y2JpQWdJQ0J3ZFdKc2FXTmZablZ1WTNScGIyNXpMbTFoYTJWWGIzSnNaQ2h3WVhKaGJYTXBPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR2x0Y0c5eWRGTmpjbWx3ZEhNb2NHRnlZVzF6TG1GdGJXOHBPMXh1SUNBZ0lIUnlZVzV6Wm1WeVlXSnNaVTFsYzNOaFoyVW9lMk50WkRvZ0oyRnRiVzlNYjJGa1pXUW5mU2s3WEc0Z0lDQWdjSFZpYkdsalgyWjFibU4wYVc5dWN5NXRZV3RsVjI5eWJHUW9jR0Z5WVcxektUdGNiaUFnZlZ4dWZWeHVYRzV3ZFdKc2FXTmZablZ1WTNScGIyNXpMbTFoYTJWWGIzSnNaQ0E5SUNod1lYSmhiWE1nUFNCN2ZTa2dQVDRnZTF4dUlDQmZkSEpoYm5ObWIzSnRJRDBnYm1WM0lFRnRiVzh1WW5SVWNtRnVjMlp2Y20wb0tUdGNiaUFnWDNSeVlXNXpabTl5YlY5d2IzTWdQU0J1WlhjZ1FXMXRieTVpZEZSeVlXNXpabTl5YlNncE8xeHVJQ0JmZG1Wak0xOHhJRDBnYm1WM0lFRnRiVzh1WW5SV1pXTjBiM0l6S0RBc0lEQXNJREFwTzF4dUlDQmZkbVZqTTE4eUlEMGdibVYzSUVGdGJXOHVZblJXWldOMGIzSXpLREFzSURBc0lEQXBPMXh1SUNCZmRtVmpNMTh6SUQwZ2JtVjNJRUZ0Ylc4dVluUldaV04wYjNJektEQXNJREFzSURBcE8xeHVJQ0JmY1hWaGRDQTlJRzVsZHlCQmJXMXZMbUowVVhWaGRHVnlibWx2Ymlnd0xDQXdMQ0F3TENBd0tUdGNibHh1SUNCU1JWQlBVbFJmUTBoVlRrdFRTVnBGSUQwZ2NHRnlZVzF6TG5KbGNHOXlkSE5wZW1VZ2ZId2dOVEE3WEc1Y2JpQWdhV1lnS0ZOVlVGQlBVbFJmVkZKQlRsTkdSVkpCUWt4RktTQjdYRzRnSUNBZ0x5OGdWSEpoYm5ObVpYSmhZbXhsSUcxbGMzTmhaMlZ6SUdGeVpTQnpkWEJ3YjNKMFpXUXNJSFJoYTJVZ1lXUjJZVzUwWVdkbElHOW1JSFJvWlcwZ2QybDBhQ0JVZVhCbFpFRnljbUY1YzF4dUlDQWdJSGR2Y214a2NtVndiM0owSUQwZ2JtVjNJRVpzYjJGME16SkJjbkpoZVNneUlDc2dVa1ZRVDFKVVgwTklWVTVMVTBsYVJTQXFJRmRQVWt4RVVrVlFUMUpVWDBsVVJVMVRTVnBGS1RzZ0x5OGdiV1Z6YzJGblpTQnBaQ0FySUNNZ2IyWWdiMkpxWldOMGN5QjBieUJ5WlhCdmNuUWdLeUJqYUhWdWF5QnphWHBsSUNvZ0l5QnZaaUIyWVd4MVpYTWdjR1Z5SUc5aWFtVmpkRnh1SUNBZ0lHTnZiR3hwYzJsdmJuSmxjRzl5ZENBOUlHNWxkeUJHYkc5aGRETXlRWEp5WVhrb01pQXJJRkpGVUU5U1ZGOURTRlZPUzFOSldrVWdLaUJEVDB4TVNWTkpUMDVTUlZCUFVsUmZTVlJGVFZOSldrVXBPeUF2THlCdFpYTnpZV2RsSUdsa0lDc2dJeUJ2WmlCamIyeHNhWE5wYjI1eklIUnZJSEpsY0c5eWRDQXJJR05vZFc1cklITnBlbVVnS2lBaklHOW1JSFpoYkhWbGN5QndaWElnYjJKcVpXTjBYRzRnSUNBZ2RtVm9hV05zWlhKbGNHOXlkQ0E5SUc1bGR5QkdiRzloZERNeVFYSnlZWGtvTWlBcklGSkZVRTlTVkY5RFNGVk9TMU5KV2tVZ0tpQldSVWhKUTB4RlVrVlFUMUpVWDBsVVJVMVRTVnBGS1RzZ0x5OGdiV1Z6YzJGblpTQnBaQ0FySUNNZ2IyWWdkbVZvYVdOc1pYTWdkRzhnY21Wd2IzSjBJQ3NnWTJoMWJtc2djMmw2WlNBcUlDTWdiMllnZG1Gc2RXVnpJSEJsY2lCdlltcGxZM1JjYmlBZ0lDQmpiMjV6ZEhKaGFXNTBjbVZ3YjNKMElEMGdibVYzSUVac2IyRjBNekpCY25KaGVTZ3lJQ3NnVWtWUVQxSlVYME5JVlU1TFUwbGFSU0FxSUVOUFRsTlVVa0ZKVGxSU1JWQlBVbFJmU1ZSRlRWTkpXa1VwT3lBdkx5QnRaWE56WVdkbElHbGtJQ3NnSXlCdlppQmpiMjV6ZEhKaGFXNTBjeUIwYnlCeVpYQnZjblFnS3lCamFIVnVheUJ6YVhwbElDb2dJeUJ2WmlCMllXeDFaWE1nY0dWeUlHOWlhbVZqZEZ4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUM4dklGUnlZVzV6Wm1WeVlXSnNaU0J0WlhOellXZGxjeUJoY21VZ2JtOTBJSE4xY0hCdmNuUmxaQ3dnYzJWdVpDQmtZWFJoSUdGeklHNXZjbTFoYkNCaGNuSmhlWE5jYmlBZ0lDQjNiM0pzWkhKbGNHOXlkQ0E5SUZ0ZE8xeHVJQ0FnSUdOdmJHeHBjMmx2Ym5KbGNHOXlkQ0E5SUZ0ZE8xeHVJQ0FnSUhabGFHbGpiR1Z5WlhCdmNuUWdQU0JiWFR0Y2JpQWdJQ0JqYjI1emRISmhhVzUwY21Wd2IzSjBJRDBnVzEwN1hHNGdJSDFjYmx4dUlDQjNiM0pzWkhKbGNHOXlkRnN3WFNBOUlFMUZVMU5CUjBWZlZGbFFSVk11VjA5U1RFUlNSVkJQVWxRN1hHNGdJR052Ykd4cGMybHZibkpsY0c5eWRGc3dYU0E5SUUxRlUxTkJSMFZmVkZsUVJWTXVRMDlNVEVsVFNVOU9Va1ZRVDFKVU8xeHVJQ0IyWldocFkyeGxjbVZ3YjNKMFd6QmRJRDBnVFVWVFUwRkhSVjlVV1ZCRlV5NVdSVWhKUTB4RlVrVlFUMUpVTzF4dUlDQmpiMjV6ZEhKaGFXNTBjbVZ3YjNKMFd6QmRJRDBnVFVWVFUwRkhSVjlVV1ZCRlV5NURUMDVUVkZKQlNVNVVVa1ZRVDFKVU8xeHVYRzRnSUdOdmJuTjBJR052Ykd4cGMybHZia052Ym1acFozVnlZWFJwYjI0Z1BTQndZWEpoYlhNdWMyOW1kR0p2WkhsY2JpQWdJQ0EvSUc1bGR5QkJiVzF2TG1KMFUyOW1kRUp2WkhsU2FXZHBaRUp2WkhsRGIyeHNhWE5wYjI1RGIyNW1hV2QxY21GMGFXOXVLQ2xjYmlBZ0lDQTZJRzVsZHlCQmJXMXZMbUowUkdWbVlYVnNkRU52Ykd4cGMybHZia052Ym1acFozVnlZWFJwYjI0b0tTeGNiaUFnSUNCa2FYTndZWFJqYUdWeUlEMGdibVYzSUVGdGJXOHVZblJEYjJ4c2FYTnBiMjVFYVhOd1lYUmphR1Z5S0dOdmJHeHBjMmx2YmtOdmJtWnBaM1Z5WVhScGIyNHBMRnh1SUNBZ0lITnZiSFpsY2lBOUlHNWxkeUJCYlcxdkxtSjBVMlZ4ZFdWdWRHbGhiRWx0Y0hWc2MyVkRiMjV6ZEhKaGFXNTBVMjlzZG1WeUtDazdYRzVjYmlBZ2JHVjBJR0p5YjJGa2NHaGhjMlU3WEc1Y2JpQWdhV1lnS0NGd1lYSmhiWE11WW5KdllXUndhR0Z6WlNrZ2NHRnlZVzF6TG1KeWIyRmtjR2hoYzJVZ1BTQjdkSGx3WlRvZ0oyUjVibUZ0YVdNbmZUdGNiaUFnTHk4Z1ZFOUVUeUVoSVZ4dUlDQXZLaUJwWmlBb2NHRnlZVzF6TG1KeWIyRmtjR2hoYzJVdWRIbHdaU0E5UFQwZ0ozTjNaV1Z3Y0hKMWJtVW5LU0I3WEc0Z0lDQWdaWGgwWlc1a0tIQmhjbUZ0Y3k1aWNtOWhaSEJvWVhObExDQjdYRzRnSUNBZ0lDQmhZV0ppYldsdU9pQjdYRzRnSUNBZ0lDQWdJSGc2SUMwMU1DeGNiaUFnSUNBZ0lDQWdlVG9nTFRVd0xGeHVJQ0FnSUNBZ0lDQjZPaUF0TlRCY2JpQWdJQ0FnSUgwc1hHNWNiaUFnSUNBZ0lHRmhZbUp0WVhnNklIdGNiaUFnSUNBZ0lDQWdlRG9nTlRBc1hHNGdJQ0FnSUNBZ0lIazZJRFV3TEZ4dUlDQWdJQ0FnSUNCNk9pQTFNRnh1SUNBZ0lDQWdmU3hjYmlBZ0lDQjlLVHRjYmlBZ2ZTb3ZYRzVjYmlBZ2MzZHBkR05vSUNod1lYSmhiWE11WW5KdllXUndhR0Z6WlM1MGVYQmxLU0I3WEc0Z0lDQWdZMkZ6WlNBbmMzZGxaWEJ3Y25WdVpTYzZYRzRnSUNBZ0lDQmZkbVZqTTE4eExuTmxkRmdvY0dGeVlXMXpMbUp5YjJGa2NHaGhjMlV1WVdGaVltMXBiaTU0S1R0Y2JpQWdJQ0FnSUY5MlpXTXpYekV1YzJWMFdTaHdZWEpoYlhNdVluSnZZV1J3YUdGelpTNWhZV0ppYldsdUxua3BPMXh1SUNBZ0lDQWdYM1psWXpOZk1TNXpaWFJhS0hCaGNtRnRjeTVpY205aFpIQm9ZWE5sTG1GaFltSnRhVzR1ZWlrN1hHNWNiaUFnSUNBZ0lGOTJaV016WHpJdWMyVjBXQ2h3WVhKaGJYTXVZbkp2WVdSd2FHRnpaUzVoWVdKaWJXRjRMbmdwTzF4dUlDQWdJQ0FnWDNabFl6TmZNaTV6WlhSWktIQmhjbUZ0Y3k1aWNtOWhaSEJvWVhObExtRmhZbUp0WVhndWVTazdYRzRnSUNBZ0lDQmZkbVZqTTE4eUxuTmxkRm9vY0dGeVlXMXpMbUp5YjJGa2NHaGhjMlV1WVdGaVltMWhlQzU2S1R0Y2JseHVJQ0FnSUNBZ1luSnZZV1J3YUdGelpTQTlJRzVsZHlCQmJXMXZMbUowUVhocGMxTjNaV1Z3TXloY2JpQWdJQ0FnSUNBZ1gzWmxZek5mTVN4Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTWx4dUlDQWdJQ0FnS1R0Y2JseHVJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdZMkZ6WlNBblpIbHVZVzFwWXljNlhHNGdJQ0FnWkdWbVlYVnNkRHBjYmlBZ0lDQWdJR0p5YjJGa2NHaGhjMlVnUFNCdVpYY2dRVzF0Ynk1aWRFUmlkblJDY205aFpIQm9ZWE5sS0NrN1hHNGdJQ0FnSUNCaWNtVmhhenRjYmlBZ2ZWeHVYRzRnSUhkdmNteGtJRDBnY0dGeVlXMXpMbk52Wm5SaWIyUjVYRzRnSUNBZ1B5QnVaWGNnUVcxdGJ5NWlkRk52Wm5SU2FXZHBaRVI1Ym1GdGFXTnpWMjl5YkdRb1pHbHpjR0YwWTJobGNpd2dZbkp2WVdSd2FHRnpaU3dnYzI5c2RtVnlMQ0JqYjJ4c2FYTnBiMjVEYjI1bWFXZDFjbUYwYVc5dUxDQnVaWGNnUVcxdGJ5NWlkRVJsWm1GMWJIUlRiMlowUW05a2VWTnZiSFpsY2lncEtWeHVJQ0FnSURvZ2JtVjNJRUZ0Ylc4dVluUkVhWE5qY21WMFpVUjVibUZ0YVdOelYyOXliR1FvWkdsemNHRjBZMmhsY2l3Z1luSnZZV1J3YUdGelpTd2djMjlzZG1WeUxDQmpiMnhzYVhOcGIyNURiMjVtYVdkMWNtRjBhVzl1S1R0Y2JpQWdabWw0WldSVWFXMWxVM1JsY0NBOUlIQmhjbUZ0Y3k1bWFYaGxaRlJwYldWVGRHVndPMXh1WEc0Z0lHbG1JQ2h3WVhKaGJYTXVjMjltZEdKdlpIa3BJRjl6YjJaMFltOWtlVjlsYm1GaWJHVmtJRDBnZEhKMVpUdGNibHh1SUNCMGNtRnVjMlpsY21GaWJHVk5aWE56WVdkbEtIdGpiV1E2SUNkM2IzSnNaRkpsWVdSNUozMHBPMXh1ZlR0Y2JseHVjSFZpYkdsalgyWjFibU4wYVc5dWN5NXpaWFJHYVhobFpGUnBiV1ZUZEdWd0lEMGdLR1JsYzJOeWFYQjBhVzl1S1NBOVBpQjdYRzRnSUdacGVHVmtWR2x0WlZOMFpYQWdQU0JrWlhOamNtbHdkR2x2Ymp0Y2JuMDdYRzVjYm5CMVlteHBZMTltZFc1amRHbHZibk11YzJWMFIzSmhkbWwwZVNBOUlDaGtaWE5qY21sd2RHbHZiaWtnUFQ0Z2UxeHVJQ0JmZG1Wak0xOHhMbk5sZEZnb1pHVnpZM0pwY0hScGIyNHVlQ2s3WEc0Z0lGOTJaV016WHpFdWMyVjBXU2hrWlhOamNtbHdkR2x2Ymk1NUtUdGNiaUFnWDNabFl6TmZNUzV6WlhSYUtHUmxjMk55YVhCMGFXOXVMbm9wTzF4dUlDQjNiM0pzWkM1elpYUkhjbUYyYVhSNUtGOTJaV016WHpFcE8xeHVmVHRjYmx4dWNIVmliR2xqWDJaMWJtTjBhVzl1Y3k1aGNIQmxibVJCYm1Ob2IzSWdQU0FvWkdWelkzSnBjSFJwYjI0cElEMCtJSHRjYmlBZ1gyOWlhbVZqZEhOYlpHVnpZM0pwY0hScGIyNHViMkpxWFZ4dUlDQWdJQzVoY0hCbGJtUkJibU5vYjNJb1hHNGdJQ0FnSUNCa1pYTmpjbWx3ZEdsdmJpNXViMlJsTEZ4dUlDQWdJQ0FnWDI5aWFtVmpkSE5iWkdWelkzSnBjSFJwYjI0dWIySnFNbDBzWEc0Z0lDQWdJQ0JrWlhOamNtbHdkR2x2Ymk1amIyeHNhWE5wYjI1Q1pYUjNaV1Z1VEdsdWEyVmtRbTlrYVdWekxGeHVJQ0FnSUNBZ1pHVnpZM0pwY0hScGIyNHVhVzVtYkhWbGJtTmxYRzRnSUNBZ0tUdGNibjFjYmx4dWNIVmliR2xqWDJaMWJtTjBhVzl1Y3k1aFpHUlBZbXBsWTNRZ1BTQW9aR1Z6WTNKcGNIUnBiMjRwSUQwK0lIdGNiaUFnYkdWMElHSnZaSGtzSUcxdmRHbHZibE4wWVhSbE8xeHVYRzRnSUdsbUlDaGtaWE5qY21sd2RHbHZiaTUwZVhCbExtbHVaR1Y0VDJZb0ozTnZablFuS1NBaFBUMGdMVEVwSUh0Y2JpQWdJQ0JpYjJSNUlEMGdZM0psWVhSbFUyOW1kRUp2Wkhrb1pHVnpZM0pwY0hScGIyNHBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2MySkRiMjVtYVdjZ1BTQmliMlI1TG1kbGRGOXRYMk5tWnlncE8xeHVYRzRnSUNBZ2FXWWdLR1JsYzJOeWFYQjBhVzl1TG5acGRHVnlZWFJwYjI1ektTQnpZa052Ym1acFp5NXpaWFJmZG1sMFpYSmhkR2x2Ym5Nb1pHVnpZM0pwY0hScGIyNHVkbWwwWlhKaGRHbHZibk1wTzF4dUlDQWdJR2xtSUNoa1pYTmpjbWx3ZEdsdmJpNXdhWFJsY21GMGFXOXVjeWtnYzJKRGIyNW1hV2N1YzJWMFgzQnBkR1Z5WVhScGIyNXpLR1JsYzJOeWFYQjBhVzl1TG5CcGRHVnlZWFJwYjI1ektUdGNiaUFnSUNCcFppQW9aR1Z6WTNKcGNIUnBiMjR1WkdsMFpYSmhkR2x2Ym5NcElITmlRMjl1Wm1sbkxuTmxkRjlrYVhSbGNtRjBhVzl1Y3loa1pYTmpjbWx3ZEdsdmJpNWthWFJsY21GMGFXOXVjeWs3WEc0Z0lDQWdhV1lnS0dSbGMyTnlhWEIwYVc5dUxtTnBkR1Z5WVhScGIyNXpLU0J6WWtOdmJtWnBaeTV6WlhSZlkybDBaWEpoZEdsdmJuTW9aR1Z6WTNKcGNIUnBiMjR1WTJsMFpYSmhkR2x2Ym5NcE8xeHVJQ0FnSUhOaVEyOXVabWxuTG5ObGRGOWpiMnhzYVhOcGIyNXpLREI0TVRFcE8xeHVJQ0FnSUhOaVEyOXVabWxuTG5ObGRGOXJSRVlvWkdWelkzSnBjSFJwYjI0dVpuSnBZM1JwYjI0cE8xeHVJQ0FnSUhOaVEyOXVabWxuTG5ObGRGOXJSRkFvWkdWelkzSnBjSFJwYjI0dVpHRnRjR2x1WnlrN1hHNGdJQ0FnYVdZZ0tHUmxjMk55YVhCMGFXOXVMbkJ5WlhOemRYSmxLU0J6WWtOdmJtWnBaeTV6WlhSZmExQlNLR1JsYzJOeWFYQjBhVzl1TG5CeVpYTnpkWEpsS1R0Y2JpQWdJQ0JwWmlBb1pHVnpZM0pwY0hScGIyNHVaSEpoWnlrZ2MySkRiMjVtYVdjdWMyVjBYMnRFUnloa1pYTmpjbWx3ZEdsdmJpNWtjbUZuS1R0Y2JpQWdJQ0JwWmlBb1pHVnpZM0pwY0hScGIyNHViR2xtZENrZ2MySkRiMjVtYVdjdWMyVjBYMnRNUmloa1pYTmpjbWx3ZEdsdmJpNXNhV1owS1R0Y2JpQWdJQ0JwWmlBb1pHVnpZM0pwY0hScGIyNHVZVzVqYUc5eVNHRnlaRzVsYzNNcElITmlRMjl1Wm1sbkxuTmxkRjlyUVVoU0tHUmxjMk55YVhCMGFXOXVMbUZ1WTJodmNraGhjbVJ1WlhOektUdGNiaUFnSUNCcFppQW9aR1Z6WTNKcGNIUnBiMjR1Y21sbmFXUklZWEprYm1WemN5a2djMkpEYjI1bWFXY3VjMlYwWDJ0RFNGSW9aR1Z6WTNKcGNIUnBiMjR1Y21sbmFXUklZWEprYm1WemN5azdYRzVjYmlBZ0lDQnBaaUFvWkdWelkzSnBjSFJwYjI0dWEyeHpkQ2tnWW05a2VTNW5aWFJmYlY5dFlYUmxjbWxoYkhNb0tTNWhkQ2d3S1M1elpYUmZiVjlyVEZOVUtHUmxjMk55YVhCMGFXOXVMbXRzYzNRcE8xeHVJQ0FnSUdsbUlDaGtaWE5qY21sd2RHbHZiaTVyWVhOMEtTQmliMlI1TG1kbGRGOXRYMjFoZEdWeWFXRnNjeWdwTG1GMEtEQXBMbk5sZEY5dFgydEJVMVFvWkdWelkzSnBjSFJwYjI0dWEyRnpkQ2s3WEc0Z0lDQWdhV1lnS0dSbGMyTnlhWEIwYVc5dUxtdDJjM1FwSUdKdlpIa3VaMlYwWDIxZmJXRjBaWEpwWVd4ektDa3VZWFFvTUNrdWMyVjBYMjFmYTFaVFZDaGtaWE5qY21sd2RHbHZiaTVyZG5OMEtUdGNibHh1SUNBZ0lFRnRiVzh1WTJGemRFOWlhbVZqZENoaWIyUjVMQ0JCYlcxdkxtSjBRMjlzYkdsemFXOXVUMkpxWldOMEtTNW5aWFJEYjJ4c2FYTnBiMjVUYUdGd1pTZ3BMbk5sZEUxaGNtZHBiaWhrWlhOamNtbHdkR2x2Ymk1dFlYSm5hVzRnUHlCa1pYTmpjbWx3ZEdsdmJpNXRZWEpuYVc0Z09pQXdMakVwTzF4dUlDQWdJR0p2WkhrdWMyVjBRV04wYVhaaGRHbHZibE4wWVhSbEtHUmxjMk55YVhCMGFXOXVMbk4wWVhSbElIeDhJRFFwTzF4dUlDQWdJR0p2WkhrdWRIbHdaU0E5SURBN0lDOHZJRk52Wm5SQ2IyUjVMbHh1SUNBZ0lHbG1JQ2hrWlhOamNtbHdkR2x2Ymk1MGVYQmxJRDA5UFNBbmMyOW1kRkp2Y0dWTlpYTm9KeWtnWW05a2VTNXliM0JsSUQwZ2RISjFaVHRjYmlBZ0lDQnBaaUFvWkdWelkzSnBjSFJwYjI0dWRIbHdaU0E5UFQwZ0ozTnZablJEYkc5MGFFMWxjMmduS1NCaWIyUjVMbU5zYjNSb0lEMGdkSEoxWlR0Y2JseHVJQ0FnSUY5MGNtRnVjMlp2Y20wdWMyVjBTV1JsYm5ScGRIa29LVHRjYmx4dUlDQWdJRjkyWldNelh6RXVjMlYwV0Noa1pYTmpjbWx3ZEdsdmJpNXdiM05wZEdsdmJpNTRLVHRjYmlBZ0lDQmZkbVZqTTE4eExuTmxkRmtvWkdWelkzSnBjSFJwYjI0dWNHOXphWFJwYjI0dWVTazdYRzRnSUNBZ1gzWmxZek5mTVM1elpYUmFLR1JsYzJOeWFYQjBhVzl1TG5CdmMybDBhVzl1TG5vcE8xeHVJQ0FnSUY5MGNtRnVjMlp2Y20wdWMyVjBUM0pwWjJsdUtGOTJaV016WHpFcE8xeHVYRzRnSUNBZ1gzRjFZWFF1YzJWMFdDaGtaWE5qY21sd2RHbHZiaTV5YjNSaGRHbHZiaTU0S1R0Y2JpQWdJQ0JmY1hWaGRDNXpaWFJaS0dSbGMyTnlhWEIwYVc5dUxuSnZkR0YwYVc5dUxua3BPMXh1SUNBZ0lGOXhkV0YwTG5ObGRGb29aR1Z6WTNKcGNIUnBiMjR1Y205MFlYUnBiMjR1ZWlrN1hHNGdJQ0FnWDNGMVlYUXVjMlYwVnloa1pYTmpjbWx3ZEdsdmJpNXliM1JoZEdsdmJpNTNLVHRjYmlBZ0lDQmZkSEpoYm5ObWIzSnRMbk5sZEZKdmRHRjBhVzl1S0Y5eGRXRjBLVHRjYmx4dUlDQWdJR0p2WkhrdWRISmhibk5tYjNKdEtGOTBjbUZ1YzJadmNtMHBPMXh1WEc0Z0lDQWdZbTlrZVM1elpYUlViM1JoYkUxaGMzTW9aR1Z6WTNKcGNIUnBiMjR1YldGemN5d2dabUZzYzJVcE8xeHVJQ0FnSUhkdmNteGtMbUZrWkZOdlpuUkNiMlI1S0dKdlpIa3NJREVzSUMweEtUdGNiaUFnSUNCcFppQW9aR1Z6WTNKcGNIUnBiMjR1ZEhsd1pTQTlQVDBnSjNOdlpuUlVjbWx0WlhOb0p5a2dYM052Wm5SaWIyUjVYM0psY0c5eWRGOXphWHBsSUNzOUlHSnZaSGt1WjJWMFgyMWZabUZqWlhNb0tTNXphWHBsS0NrZ0tpQXpPMXh1SUNBZ0lHVnNjMlVnWDNOdlpuUmliMlI1WDNKbGNHOXlkRjl6YVhwbElDczlJR0p2WkhrdVoyVjBYMjFmYm05a1pYTW9LUzV6YVhwbEtDa2dLaUF6TzF4dVhHNGdJQ0FnWDI1MWJWOXpiMlowWW05a2VWOXZZbXBsWTNSekt5czdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdiR1YwSUhOb1lYQmxJRDBnWTNKbFlYUmxVMmhoY0dVb1pHVnpZM0pwY0hScGIyNHBPMXh1WEc0Z0lDQWdhV1lnS0NGemFHRndaU2tnY21WMGRYSnVPMXh1WEc0Z0lDQWdMeThnU1dZZ2RHaGxjbVVnWVhKbElHTm9hV3hrY21WdUlIUm9aVzRnZEdocGN5QnBjeUJoSUdOdmJYQnZkVzVrSUhOb1lYQmxYRzRnSUNBZ2FXWWdLR1JsYzJOeWFYQjBhVzl1TG1Ob2FXeGtjbVZ1S1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JqYjIxd2IzVnVaRjl6YUdGd1pTQTlJRzVsZHlCQmJXMXZMbUowUTI5dGNHOTFibVJUYUdGd1pTZ3BPMXh1SUNBZ0lDQWdZMjl0Y0c5MWJtUmZjMmhoY0dVdVlXUmtRMmhwYkdSVGFHRndaU2hmZEhKaGJuTm1iM0p0TENCemFHRndaU2s3WEc1Y2JpQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1pHVnpZM0pwY0hScGIyNHVZMmhwYkdSeVpXNHViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWDJOb2FXeGtJRDBnWkdWelkzSnBjSFJwYjI0dVkyaHBiR1J5Wlc1YmFWMDdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkSEpoYm5NZ1BTQnVaWGNnUVcxdGJ5NWlkRlJ5WVc1elptOXliU2dwTzF4dUlDQWdJQ0FnSUNCMGNtRnVjeTV6WlhSSlpHVnVkR2wwZVNncE8xeHVYRzRnSUNBZ0lDQWdJRjkyWldNelh6RXVjMlYwV0NoZlkyaHBiR1F1Y0c5emFYUnBiMjVmYjJabWMyVjBMbmdwTzF4dUlDQWdJQ0FnSUNCZmRtVmpNMTh4TG5ObGRGa29YMk5vYVd4a0xuQnZjMmwwYVc5dVgyOW1abk5sZEM1NUtUdGNiaUFnSUNBZ0lDQWdYM1psWXpOZk1TNXpaWFJhS0Y5amFHbHNaQzV3YjNOcGRHbHZibDl2Wm1aelpYUXVlaWs3WEc0Z0lDQWdJQ0FnSUhSeVlXNXpMbk5sZEU5eWFXZHBiaWhmZG1Wak0xOHhLVHRjYmx4dUlDQWdJQ0FnSUNCZmNYVmhkQzV6WlhSWUtGOWphR2xzWkM1eWIzUmhkR2x2Ymk1NEtUdGNiaUFnSUNBZ0lDQWdYM0YxWVhRdWMyVjBXU2hmWTJocGJHUXVjbTkwWVhScGIyNHVlU2s3WEc0Z0lDQWdJQ0FnSUY5eGRXRjBMbk5sZEZvb1gyTm9hV3hrTG5KdmRHRjBhVzl1TG5vcE8xeHVJQ0FnSUNBZ0lDQmZjWFZoZEM1elpYUlhLRjlqYUdsc1pDNXliM1JoZEdsdmJpNTNLVHRjYmlBZ0lDQWdJQ0FnZEhKaGJuTXVjMlYwVW05MFlYUnBiMjRvWDNGMVlYUXBPMXh1WEc0Z0lDQWdJQ0FnSUhOb1lYQmxJRDBnWTNKbFlYUmxVMmhoY0dVb1pHVnpZM0pwY0hScGIyNHVZMmhwYkdSeVpXNWJhVjBwTzF4dUlDQWdJQ0FnSUNCamIyMXdiM1Z1WkY5emFHRndaUzVoWkdSRGFHbHNaRk5vWVhCbEtIUnlZVzV6TENCemFHRndaU2s3WEc0Z0lDQWdJQ0FnSUVGdGJXOHVaR1Z6ZEhKdmVTaDBjbUZ1Y3lrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lITm9ZWEJsSUQwZ1kyOXRjRzkxYm1SZmMyaGhjR1U3WEc0Z0lDQWdJQ0JmWTI5dGNHOTFibVJmYzJoaGNHVnpXMlJsYzJOeWFYQjBhVzl1TG1sa1hTQTlJSE5vWVhCbE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUY5MlpXTXpYekV1YzJWMFdDaGtaWE5qY21sd2RHbHZiaTV6WTJGc1pTNTRLVHRjYmlBZ0lDQmZkbVZqTTE4eExuTmxkRmtvWkdWelkzSnBjSFJwYjI0dWMyTmhiR1V1ZVNrN1hHNGdJQ0FnWDNabFl6TmZNUzV6WlhSYUtHUmxjMk55YVhCMGFXOXVMbk5qWVd4bExub3BPMXh1WEc0Z0lDQWdjMmhoY0dVdWMyVjBURzlqWVd4VFkyRnNhVzVuS0Y5MlpXTXpYekVwTzF4dVhHNGdJQ0FnWDNabFl6TmZNUzV6WlhSWUtEQXBPMXh1SUNBZ0lGOTJaV016WHpFdWMyVjBXU2d3S1R0Y2JpQWdJQ0JmZG1Wak0xOHhMbk5sZEZvb01DazdYRzRnSUNBZ2MyaGhjR1V1WTJGc1kzVnNZWFJsVEc5allXeEpibVZ5ZEdsaEtHUmxjMk55YVhCMGFXOXVMbTFoYzNNc0lGOTJaV016WHpFcE8xeHVYRzRnSUNBZ1gzUnlZVzV6Wm05eWJTNXpaWFJKWkdWdWRHbDBlU2dwTzF4dVhHNGdJQ0FnWDNabFl6TmZNaTV6WlhSWUtHUmxjMk55YVhCMGFXOXVMbkJ2YzJsMGFXOXVMbmdwTzF4dUlDQWdJRjkyWldNelh6SXVjMlYwV1Noa1pYTmpjbWx3ZEdsdmJpNXdiM05wZEdsdmJpNTVLVHRjYmlBZ0lDQmZkbVZqTTE4eUxuTmxkRm9vWkdWelkzSnBjSFJwYjI0dWNHOXphWFJwYjI0dWVpazdYRzRnSUNBZ1gzUnlZVzV6Wm05eWJTNXpaWFJQY21sbmFXNG9YM1psWXpOZk1pazdYRzVjYmlBZ0lDQmZjWFZoZEM1elpYUllLR1JsYzJOeWFYQjBhVzl1TG5KdmRHRjBhVzl1TG5ncE8xeHVJQ0FnSUY5eGRXRjBMbk5sZEZrb1pHVnpZM0pwY0hScGIyNHVjbTkwWVhScGIyNHVlU2s3WEc0Z0lDQWdYM0YxWVhRdWMyVjBXaWhrWlhOamNtbHdkR2x2Ymk1eWIzUmhkR2x2Ymk1NktUdGNiaUFnSUNCZmNYVmhkQzV6WlhSWEtHUmxjMk55YVhCMGFXOXVMbkp2ZEdGMGFXOXVMbmNwTzF4dUlDQWdJRjkwY21GdWMyWnZjbTB1YzJWMFVtOTBZWFJwYjI0b1gzRjFZWFFwTzF4dVhHNGdJQ0FnYlc5MGFXOXVVM1JoZEdVZ1BTQnVaWGNnUVcxdGJ5NWlkRVJsWm1GMWJIUk5iM1JwYjI1VGRHRjBaU2hmZEhKaGJuTm1iM0p0S1RzZ0x5OGdJMVJQUkU4NklHSjBSR1ZtWVhWc2RFMXZkR2x2YmxOMFlYUmxJSE4xY0hCdmNuUnpJR05sYm5SbGNpQnZaaUJ0WVhOeklHOW1abk5sZENCaGN5QnpaV052Ym1RZ1lYSm5kVzFsYm5RZ0xTQnBiWEJzWlcxbGJuUmNiaUFnSUNCamIyNXpkQ0J5WWtsdVptOGdQU0J1WlhjZ1FXMXRieTVpZEZKcFoybGtRbTlrZVVOdmJuTjBjblZqZEdsdmJrbHVabThvWkdWelkzSnBjSFJwYjI0dWJXRnpjeXdnYlc5MGFXOXVVM1JoZEdVc0lITm9ZWEJsTENCZmRtVmpNMTh4S1R0Y2JseHVJQ0FnSUhKaVNXNW1ieTV6WlhSZmJWOW1jbWxqZEdsdmJpaGtaWE5qY21sd2RHbHZiaTVtY21samRHbHZiaWs3WEc0Z0lDQWdjbUpKYm1adkxuTmxkRjl0WDNKbGMzUnBkSFYwYVc5dUtHUmxjMk55YVhCMGFXOXVMbkpsYzNScGRIVjBhVzl1S1R0Y2JpQWdJQ0J5WWtsdVptOHVjMlYwWDIxZmJHbHVaV0Z5UkdGdGNHbHVaeWhrWlhOamNtbHdkR2x2Ymk1a1lXMXdhVzVuS1R0Y2JpQWdJQ0J5WWtsdVptOHVjMlYwWDIxZllXNW5kV3hoY2tSaGJYQnBibWNvWkdWelkzSnBjSFJwYjI0dVpHRnRjR2x1WnlrN1hHNWNiaUFnSUNCaWIyUjVJRDBnYm1WM0lFRnRiVzh1WW5SU2FXZHBaRUp2Wkhrb2NtSkpibVp2S1R0Y2JpQWdJQ0JCYlcxdkxtTmhjM1JQWW1wbFkzUW9ZbTlrZVN3Z1FXMXRieTVpZEVOdmJHeHBjMmx2Yms5aWFtVmpkQ2t1WjJWMFEyOXNiR2x6YVc5dVUyaGhjR1VvS1M1elpYUk5ZWEpuYVc0b1pHVnpZM0pwY0hScGIyNHViV0Z5WjJsdUlEOGdaR1Z6WTNKcGNIUnBiMjR1YldGeVoybHVJRG9nTUNrN1hHNGdJQ0FnWW05a2VTNXpaWFJCWTNScGRtRjBhVzl1VTNSaGRHVW9aR1Z6WTNKcGNIUnBiMjR1YzNSaGRHVWdmSHdnTkNrN1hHNGdJQ0FnUVcxdGJ5NWtaWE4wY205NUtISmlTVzVtYnlrN1hHNWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHUmxjMk55YVhCMGFXOXVMbU52Ykd4cGMybHZibDltYkdGbmN5QWhQVDBnSjNWdVpHVm1hVzVsWkNjcElHSnZaSGt1YzJWMFEyOXNiR2x6YVc5dVJteGhaM01vWkdWelkzSnBjSFJwYjI0dVkyOXNiR2x6YVc5dVgyWnNZV2R6S1R0Y2JseHVJQ0FnSUdsbUlDaGtaWE5qY21sd2RHbHZiaTVuY205MWNDQW1KaUJrWlhOamNtbHdkR2x2Ymk1dFlYTnJLU0IzYjNKc1pDNWhaR1JTYVdkcFpFSnZaSGtvWW05a2VTd2daR1Z6WTNKcGNIUnBiMjR1WjNKdmRYQXNJR1JsYzJOeWFYQjBhVzl1TG0xaGMyc3BPMXh1SUNBZ0lHVnNjMlVnZDI5eWJHUXVZV1JrVW1sbmFXUkNiMlI1S0dKdlpIa3BPMXh1SUNBZ0lHSnZaSGt1ZEhsd1pTQTlJREU3SUM4dklGSnBaMmxrUW05a2VTNWNiaUFnSUNCZmJuVnRYM0pwWjJsa1ltOWtlVjl2WW1wbFkzUnpLeXM3WEc0Z0lIMWNibHh1SUNCaWIyUjVMbUZqZEdsMllYUmxLQ2s3WEc1Y2JpQWdZbTlrZVM1cFpDQTlJR1JsYzJOeWFYQjBhVzl1TG1sa08xeHVJQ0JmYjJKcVpXTjBjMXRpYjJSNUxtbGtYU0E5SUdKdlpIazdYRzRnSUY5dGIzUnBiMjVmYzNSaGRHVnpXMkp2WkhrdWFXUmRJRDBnYlc5MGFXOXVVM1JoZEdVN1hHNWNiaUFnWDI5aWFtVmpkSE5mWVcxdGIxdGliMlI1TG1FZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdKdlpIa3VjSFJ5SURvZ1ltOWtlUzVoWFNBOUlHSnZaSGt1YVdRN1hHNGdJRjl1ZFcxZmIySnFaV04wY3lzck8xeHVYRzRnSUhSeVlXNXpabVZ5WVdKc1pVMWxjM05oWjJVb2UyTnRaRG9nSjI5aWFtVmpkRkpsWVdSNUp5d2djR0Z5WVcxek9pQmliMlI1TG1sa2ZTazdYRzU5TzF4dVhHNXdkV0pzYVdOZlpuVnVZM1JwYjI1ekxtRmtaRlpsYUdsamJHVWdQU0FvWkdWelkzSnBjSFJwYjI0cElEMCtJSHRjYmlBZ1kyOXVjM1FnZG1Wb2FXTnNaVjkwZFc1cGJtY2dQU0J1WlhjZ1FXMXRieTVpZEZabGFHbGpiR1ZVZFc1cGJtY29LVHRjYmx4dUlDQjJaV2hwWTJ4bFgzUjFibWx1Wnk1elpYUmZiVjl6ZFhOd1pXNXphVzl1VTNScFptWnVaWE56S0dSbGMyTnlhWEIwYVc5dUxuTjFjM0JsYm5OcGIyNWZjM1JwWm1adVpYTnpLVHRjYmlBZ2RtVm9hV05zWlY5MGRXNXBibWN1YzJWMFgyMWZjM1Z6Y0dWdWMybHZia052YlhCeVpYTnphVzl1S0dSbGMyTnlhWEIwYVc5dUxuTjFjM0JsYm5OcGIyNWZZMjl0Y0hKbGMzTnBiMjRwTzF4dUlDQjJaV2hwWTJ4bFgzUjFibWx1Wnk1elpYUmZiVjl6ZFhOd1pXNXphVzl1UkdGdGNHbHVaeWhrWlhOamNtbHdkR2x2Ymk1emRYTndaVzV6YVc5dVgyUmhiWEJwYm1jcE8xeHVJQ0IyWldocFkyeGxYM1IxYm1sdVp5NXpaWFJmYlY5dFlYaFRkWE53Wlc1emFXOXVWSEpoZG1Wc1EyMG9aR1Z6WTNKcGNIUnBiMjR1YldGNFgzTjFjM0JsYm5OcGIyNWZkSEpoZG1Wc0tUdGNiaUFnZG1Wb2FXTnNaVjkwZFc1cGJtY3VjMlYwWDIxZmJXRjRVM1Z6Y0dWdWMybHZia1p2Y21ObEtHUmxjMk55YVhCMGFXOXVMbTFoZUY5emRYTndaVzV6YVc5dVgyWnZjbU5sS1R0Y2JseHVJQ0JqYjI1emRDQjJaV2hwWTJ4bElEMGdibVYzSUVGdGJXOHVZblJTWVhsallYTjBWbVZvYVdOc1pTaGNiaUFnSUNCMlpXaHBZMnhsWDNSMWJtbHVaeXhjYmlBZ0lDQmZiMkpxWldOMGMxdGtaWE5qY21sd2RHbHZiaTV5YVdkcFpFSnZaSGxkTEZ4dUlDQWdJRzVsZHlCQmJXMXZMbUowUkdWbVlYVnNkRlpsYUdsamJHVlNZWGxqWVhOMFpYSW9kMjl5YkdRcFhHNGdJQ2s3WEc1Y2JpQWdkbVZvYVdOc1pTNTBkVzVwYm1jZ1BTQjJaV2hwWTJ4bFgzUjFibWx1Wnp0Y2JpQWdYMjlpYW1WamRITmJaR1Z6WTNKcGNIUnBiMjR1Y21sbmFXUkNiMlI1WFM1elpYUkJZM1JwZG1GMGFXOXVVM1JoZEdVb05DazdYRzRnSUhabGFHbGpiR1V1YzJWMFEyOXZjbVJwYm1GMFpWTjVjM1JsYlNnd0xDQXhMQ0F5S1R0Y2JseHVJQ0IzYjNKc1pDNWhaR1JXWldocFkyeGxLSFpsYUdsamJHVXBPMXh1SUNCZmRtVm9hV05zWlhOYlpHVnpZM0pwY0hScGIyNHVhV1JkSUQwZ2RtVm9hV05zWlR0Y2JuMDdYRzV3ZFdKc2FXTmZablZ1WTNScGIyNXpMbkpsYlc5MlpWWmxhR2xqYkdVZ1BTQW9aR1Z6WTNKcGNIUnBiMjRwSUQwK0lIdGNiaUFnWDNabGFHbGpiR1Z6VzJSbGMyTnlhWEIwYVc5dUxtbGtYU0E5SUc1MWJHdzdYRzU5TzF4dVhHNXdkV0pzYVdOZlpuVnVZM1JwYjI1ekxtRmtaRmRvWldWc0lEMGdLR1JsYzJOeWFYQjBhVzl1S1NBOVBpQjdYRzRnSUdsbUlDaGZkbVZvYVdOc1pYTmJaR1Z6WTNKcGNIUnBiMjR1YVdSZElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0JzWlhRZ2RIVnVhVzVuSUQwZ1gzWmxhR2xqYkdWelcyUmxjMk55YVhCMGFXOXVMbWxrWFM1MGRXNXBibWM3WEc0Z0lDQWdhV1lnS0dSbGMyTnlhWEIwYVc5dUxuUjFibWx1WnlBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0IwZFc1cGJtY2dQU0J1WlhjZ1FXMXRieTVpZEZabGFHbGpiR1ZVZFc1cGJtY29LVHRjYmlBZ0lDQWdJSFIxYm1sdVp5NXpaWFJmYlY5emRYTndaVzV6YVc5dVUzUnBabVp1WlhOektHUmxjMk55YVhCMGFXOXVMblIxYm1sdVp5NXpkWE53Wlc1emFXOXVYM04wYVdabWJtVnpjeWs3WEc0Z0lDQWdJQ0IwZFc1cGJtY3VjMlYwWDIxZmMzVnpjR1Z1YzJsdmJrTnZiWEJ5WlhOemFXOXVLR1JsYzJOeWFYQjBhVzl1TG5SMWJtbHVaeTV6ZFhOd1pXNXphVzl1WDJOdmJYQnlaWE56YVc5dUtUdGNiaUFnSUNBZ0lIUjFibWx1Wnk1elpYUmZiVjl6ZFhOd1pXNXphVzl1UkdGdGNHbHVaeWhrWlhOamNtbHdkR2x2Ymk1MGRXNXBibWN1YzNWemNHVnVjMmx2Ymw5a1lXMXdhVzVuS1R0Y2JpQWdJQ0FnSUhSMWJtbHVaeTV6WlhSZmJWOXRZWGhUZFhOd1pXNXphVzl1VkhKaGRtVnNRMjBvWkdWelkzSnBjSFJwYjI0dWRIVnVhVzVuTG0xaGVGOXpkWE53Wlc1emFXOXVYM1J5WVhabGJDazdYRzRnSUNBZ0lDQjBkVzVwYm1jdWMyVjBYMjFmYldGNFUzVnpjR1Z1YzJsdmJrWnZjbU5sS0dSbGMyTnlhWEIwYVc5dUxuUjFibWx1Wnk1dFlYaGZjM1Z6Y0dWdWMybHZibDltYjNKalpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1gzWmxZek5mTVM1elpYUllLR1JsYzJOeWFYQjBhVzl1TG1OdmJtNWxZM1JwYjI1ZmNHOXBiblF1ZUNrN1hHNGdJQ0FnWDNabFl6TmZNUzV6WlhSWktHUmxjMk55YVhCMGFXOXVMbU52Ym01bFkzUnBiMjVmY0c5cGJuUXVlU2s3WEc0Z0lDQWdYM1psWXpOZk1TNXpaWFJhS0dSbGMyTnlhWEIwYVc5dUxtTnZibTVsWTNScGIyNWZjRzlwYm5RdWVpazdYRzVjYmlBZ0lDQmZkbVZqTTE4eUxuTmxkRmdvWkdWelkzSnBjSFJwYjI0dWQyaGxaV3hmWkdseVpXTjBhVzl1TG5ncE8xeHVJQ0FnSUY5MlpXTXpYekl1YzJWMFdTaGtaWE5qY21sd2RHbHZiaTUzYUdWbGJGOWthWEpsWTNScGIyNHVlU2s3WEc0Z0lDQWdYM1psWXpOZk1pNXpaWFJhS0dSbGMyTnlhWEIwYVc5dUxuZG9aV1ZzWDJScGNtVmpkR2x2Ymk1NktUdGNibHh1SUNBZ0lGOTJaV016WHpNdWMyVjBXQ2hrWlhOamNtbHdkR2x2Ymk1M2FHVmxiRjloZUd4bExuZ3BPMXh1SUNBZ0lGOTJaV016WHpNdWMyVjBXU2hrWlhOamNtbHdkR2x2Ymk1M2FHVmxiRjloZUd4bExua3BPMXh1SUNBZ0lGOTJaV016WHpNdWMyVjBXaWhrWlhOamNtbHdkR2x2Ymk1M2FHVmxiRjloZUd4bExub3BPMXh1WEc0Z0lDQWdYM1psYUdsamJHVnpXMlJsYzJOeWFYQjBhVzl1TG1sa1hTNWhaR1JYYUdWbGJDaGNiaUFnSUNBZ0lGOTJaV016WHpFc1hHNGdJQ0FnSUNCZmRtVmpNMTh5TEZ4dUlDQWdJQ0FnWDNabFl6TmZNeXhjYmlBZ0lDQWdJR1JsYzJOeWFYQjBhVzl1TG5OMWMzQmxibk5wYjI1ZmNtVnpkRjlzWlc1bmRHZ3NYRzRnSUNBZ0lDQmtaWE5qY21sd2RHbHZiaTUzYUdWbGJGOXlZV1JwZFhNc1hHNGdJQ0FnSUNCMGRXNXBibWNzWEc0Z0lDQWdJQ0JrWlhOamNtbHdkR2x2Ymk1cGMxOW1jbTl1ZEY5M2FHVmxiRnh1SUNBZ0lDazdYRzRnSUgxY2JseHVJQ0JmYm5WdFgzZG9aV1ZzY3lzck8xeHVYRzRnSUdsbUlDaFRWVkJRVDFKVVgxUlNRVTVUUmtWU1FVSk1SU2tnZTF4dUlDQWdJSFpsYUdsamJHVnlaWEJ2Y25RZ1BTQnVaWGNnUm14dllYUXpNa0Z5Y21GNUtERWdLeUJmYm5WdFgzZG9aV1ZzY3lBcUlGWkZTRWxEVEVWU1JWQlBVbFJmU1ZSRlRWTkpXa1VwT3lBdkx5QnRaWE56WVdkbElHbGtJQ1lnS0NBaklHOW1JRzlpYW1WamRITWdkRzhnY21Wd2IzSjBJQ29nSXlCdlppQjJZV3gxWlhNZ2NHVnlJRzlpYW1WamRDQXBYRzRnSUNBZ2RtVm9hV05zWlhKbGNHOXlkRnN3WFNBOUlFMUZVMU5CUjBWZlZGbFFSVk11VmtWSVNVTk1SVkpGVUU5U1ZEdGNiaUFnZlNCbGJITmxJSFpsYUdsamJHVnlaWEJ2Y25RZ1BTQmJUVVZUVTBGSFJWOVVXVkJGVXk1V1JVaEpRMHhGVWtWUVQxSlVYVHRjYm4wN1hHNWNibkIxWW14cFkxOW1kVzVqZEdsdmJuTXVjMlYwVTNSbFpYSnBibWNnUFNBb1pHVjBZV2xzY3lrZ1BUNGdlMXh1SUNCcFppQW9YM1psYUdsamJHVnpXMlJsZEdGcGJITXVhV1JkSUNFOVBTQjFibVJsWm1sdVpXUXBJRjkyWldocFkyeGxjMXRrWlhSaGFXeHpMbWxrWFM1elpYUlRkR1ZsY21sdVoxWmhiSFZsS0dSbGRHRnBiSE11YzNSbFpYSnBibWNzSUdSbGRHRnBiSE11ZDJobFpXd3BPMXh1ZlR0Y2JseHVjSFZpYkdsalgyWjFibU4wYVc5dWN5NXpaWFJDY21GclpTQTlJQ2hrWlhSaGFXeHpLU0E5UGlCN1hHNGdJR2xtSUNoZmRtVm9hV05zWlhOYlpHVjBZV2xzY3k1cFpGMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ1gzWmxhR2xqYkdWelcyUmxkR0ZwYkhNdWFXUmRMbk5sZEVKeVlXdGxLR1JsZEdGcGJITXVZbkpoYTJVc0lHUmxkR0ZwYkhNdWQyaGxaV3dwTzF4dWZUdGNibHh1Y0hWaWJHbGpYMloxYm1OMGFXOXVjeTVoY0hCc2VVVnVaMmx1WlVadmNtTmxJRDBnS0dSbGRHRnBiSE1wSUQwK0lIdGNiaUFnYVdZZ0tGOTJaV2hwWTJ4bGMxdGtaWFJoYVd4ekxtbGtYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQmZkbVZvYVdOc1pYTmJaR1YwWVdsc2N5NXBaRjB1WVhCd2JIbEZibWRwYm1WR2IzSmpaU2hrWlhSaGFXeHpMbVp2Y21ObExDQmtaWFJoYVd4ekxuZG9aV1ZzS1R0Y2JuMDdYRzVjYm5CMVlteHBZMTltZFc1amRHbHZibk11Y21WdGIzWmxUMkpxWldOMElEMGdLR1JsZEdGcGJITXBJRDArSUh0Y2JpQWdhV1lnS0Y5dlltcGxZM1J6VzJSbGRHRnBiSE11YVdSZExuUjVjR1VnUFQwOUlEQXBJSHRjYmlBZ0lDQmZiblZ0WDNOdlpuUmliMlI1WDI5aWFtVmpkSE10TFR0Y2JpQWdJQ0JmYzI5bWRHSnZaSGxmY21Wd2IzSjBYM05wZW1VZ0xUMGdYMjlpYW1WamRITmJaR1YwWVdsc2N5NXBaRjB1WjJWMFgyMWZibTlrWlhNb0tTNXphWHBsS0NrN1hHNGdJQ0FnZDI5eWJHUXVjbVZ0YjNabFUyOW1kRUp2Wkhrb1gyOWlhbVZqZEhOYlpHVjBZV2xzY3k1cFpGMHBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tGOXZZbXBsWTNSelcyUmxkR0ZwYkhNdWFXUmRMblI1Y0dVZ1BUMDlJREVwSUh0Y2JpQWdJQ0JmYm5WdFgzSnBaMmxrWW05a2VWOXZZbXBsWTNSekxTMDdYRzRnSUNBZ2QyOXliR1F1Y21WdGIzWmxVbWxuYVdSQ2IyUjVLRjl2WW1wbFkzUnpXMlJsZEdGcGJITXVhV1JkS1R0Y2JpQWdJQ0JCYlcxdkxtUmxjM1J5YjNrb1gyMXZkR2x2Ymw5emRHRjBaWE5iWkdWMFlXbHNjeTVwWkYwcE8xeHVJQ0I5WEc1Y2JpQWdRVzF0Ynk1a1pYTjBjbTk1S0Y5dlltcGxZM1J6VzJSbGRHRnBiSE11YVdSZEtUdGNiaUFnYVdZZ0tGOWpiMjF3YjNWdVpGOXphR0Z3WlhOYlpHVjBZV2xzY3k1cFpGMHBJRUZ0Ylc4dVpHVnpkSEp2ZVNoZlkyOXRjRzkxYm1SZmMyaGhjR1Z6VzJSbGRHRnBiSE11YVdSZEtUdGNiaUFnYVdZZ0tGOXViMjVqWVdOb1pXUmZjMmhoY0dWelcyUmxkR0ZwYkhNdWFXUmRLU0JCYlcxdkxtUmxjM1J5YjNrb1gyNXZibU5oWTJobFpGOXphR0Z3WlhOYlpHVjBZV2xzY3k1cFpGMHBPMXh1WEc0Z0lGOXZZbXBsWTNSelgyRnRiVzliWDI5aWFtVmpkSE5iWkdWMFlXbHNjeTVwWkYwdVlTQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z1gyOWlhbVZqZEhOYlpHVjBZV2xzY3k1cFpGMHVZU0E2SUY5dlltcGxZM1J6VzJSbGRHRnBiSE11YVdSZExuQjBjbDBnUFNCdWRXeHNPMXh1SUNCZmIySnFaV04wYzF0a1pYUmhhV3h6TG1sa1hTQTlJRzUxYkd3N1hHNGdJRjl0YjNScGIyNWZjM1JoZEdWelcyUmxkR0ZwYkhNdWFXUmRJRDBnYm5Wc2JEdGNibHh1SUNCcFppQW9YMk52YlhCdmRXNWtYM05vWVhCbGMxdGtaWFJoYVd4ekxtbGtYU2tnWDJOdmJYQnZkVzVrWDNOb1lYQmxjMXRrWlhSaGFXeHpMbWxrWFNBOUlHNTFiR3c3WEc0Z0lHbG1JQ2hmYm05dVkyRmphR1ZrWDNOb1lYQmxjMXRrWlhSaGFXeHpMbWxrWFNrZ1gyNXZibU5oWTJobFpGOXphR0Z3WlhOYlpHVjBZV2xzY3k1cFpGMGdQU0J1ZFd4c08xeHVJQ0JmYm5WdFgyOWlhbVZqZEhNdExUdGNibjA3WEc1Y2JuQjFZbXhwWTE5bWRXNWpkR2x2Ym5NdWRYQmtZWFJsVkhKaGJuTm1iM0p0SUQwZ0tHUmxkR0ZwYkhNcElEMCtJSHRjYmlBZ1gyOWlhbVZqZENBOUlGOXZZbXBsWTNSelcyUmxkR0ZwYkhNdWFXUmRPMXh1WEc0Z0lHbG1JQ2hmYjJKcVpXTjBMblI1Y0dVZ1BUMDlJREVwSUh0Y2JpQWdJQ0JmYjJKcVpXTjBMbWRsZEUxdmRHbHZibE4wWVhSbEtDa3VaMlYwVjI5eWJHUlVjbUZ1YzJadmNtMG9YM1J5WVc1elptOXliU2s3WEc1Y2JpQWdJQ0JwWmlBb1pHVjBZV2xzY3k1d2IzTXBJSHRjYmlBZ0lDQWdJRjkyWldNelh6RXVjMlYwV0Noa1pYUmhhV3h6TG5CdmN5NTRLVHRjYmlBZ0lDQWdJRjkyWldNelh6RXVjMlYwV1Noa1pYUmhhV3h6TG5CdmN5NTVLVHRjYmlBZ0lDQWdJRjkyWldNelh6RXVjMlYwV2loa1pYUmhhV3h6TG5CdmN5NTZLVHRjYmlBZ0lDQWdJRjkwY21GdWMyWnZjbTB1YzJWMFQzSnBaMmx1S0Y5MlpXTXpYekVwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoa1pYUmhhV3h6TG5GMVlYUXBJSHRjYmlBZ0lDQWdJRjl4ZFdGMExuTmxkRmdvWkdWMFlXbHNjeTV4ZFdGMExuZ3BPMXh1SUNBZ0lDQWdYM0YxWVhRdWMyVjBXU2hrWlhSaGFXeHpMbkYxWVhRdWVTazdYRzRnSUNBZ0lDQmZjWFZoZEM1elpYUmFLR1JsZEdGcGJITXVjWFZoZEM1NktUdGNiaUFnSUNBZ0lGOXhkV0YwTG5ObGRGY29aR1YwWVdsc2N5NXhkV0YwTG5jcE8xeHVJQ0FnSUNBZ1gzUnlZVzV6Wm05eWJTNXpaWFJTYjNSaGRHbHZiaWhmY1hWaGRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1gyOWlhbVZqZEM1elpYUlhiM0pzWkZSeVlXNXpabTl5YlNoZmRISmhibk5tYjNKdEtUdGNiaUFnSUNCZmIySnFaV04wTG1GamRHbDJZWFJsS0NrN1hHNGdJSDBnWld4elpTQnBaaUFvWDI5aWFtVmpkQzUwZVhCbElEMDlQU0F3S1NCN1hHNGdJQ0FnTHk4Z1gyOWlhbVZqZEM1blpYUlhiM0pzWkZSeVlXNXpabTl5YlNoZmRISmhibk5tYjNKdEtUdGNibHh1SUNBZ0lHbG1JQ2hrWlhSaGFXeHpMbkJ2Y3lrZ2UxeHVJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUllLR1JsZEdGcGJITXVjRzl6TG5ncE8xeHVJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUlpLR1JsZEdGcGJITXVjRzl6TG5rcE8xeHVJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUmFLR1JsZEdGcGJITXVjRzl6TG5vcE8xeHVJQ0FnSUNBZ1gzUnlZVzV6Wm05eWJTNXpaWFJQY21sbmFXNG9YM1psWXpOZk1TazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR1JsZEdGcGJITXVjWFZoZENrZ2UxeHVJQ0FnSUNBZ1gzRjFZWFF1YzJWMFdDaGtaWFJoYVd4ekxuRjFZWFF1ZUNrN1hHNGdJQ0FnSUNCZmNYVmhkQzV6WlhSWktHUmxkR0ZwYkhNdWNYVmhkQzU1S1R0Y2JpQWdJQ0FnSUY5eGRXRjBMbk5sZEZvb1pHVjBZV2xzY3k1eGRXRjBMbm9wTzF4dUlDQWdJQ0FnWDNGMVlYUXVjMlYwVnloa1pYUmhhV3h6TG5GMVlYUXVkeWs3WEc0Z0lDQWdJQ0JmZEhKaGJuTm1iM0p0TG5ObGRGSnZkR0YwYVc5dUtGOXhkV0YwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JmYjJKcVpXTjBMblJ5WVc1elptOXliU2hmZEhKaGJuTm1iM0p0S1R0Y2JpQWdmVnh1ZlR0Y2JseHVjSFZpYkdsalgyWjFibU4wYVc5dWN5NTFjR1JoZEdWTllYTnpJRDBnS0dSbGRHRnBiSE1wSUQwK0lIdGNiaUFnTHk4Z0kxUlBSRTg2SUdOb1lXNW5hVzVuSUdFZ2MzUmhkR2xqSUc5aWFtVmpkQ0JwYm5SdklHUjVibUZ0YVdNZ2FYTWdZblZuWjNsY2JpQWdYMjlpYW1WamRDQTlJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXVhV1JkTzF4dVhHNGdJQzh2SUZCbGNpQm9kSFJ3T2k4dmQzZDNMbUoxYkd4bGRIQm9lWE5wWTNNdWIzSm5MMEoxYkd4bGRDOXdhSEJDUWpNdmRtbGxkM1J2Y0dsakxuQm9jRDl3UFNabVBUa21kRDB6TmpZekkzQXhNemd4Tmx4dUlDQjNiM0pzWkM1eVpXMXZkbVZTYVdkcFpFSnZaSGtvWDI5aWFtVmpkQ2s3WEc1Y2JpQWdYM1psWXpOZk1TNXpaWFJZS0RBcE8xeHVJQ0JmZG1Wak0xOHhMbk5sZEZrb01DazdYRzRnSUY5MlpXTXpYekV1YzJWMFdpZ3dLVHRjYmx4dUlDQmZiMkpxWldOMExuTmxkRTFoYzNOUWNtOXdjeWhrWlhSaGFXeHpMbTFoYzNNc0lGOTJaV016WHpFcE8xeHVJQ0IzYjNKc1pDNWhaR1JTYVdkcFpFSnZaSGtvWDI5aWFtVmpkQ2s3WEc0Z0lGOXZZbXBsWTNRdVlXTjBhWFpoZEdVb0tUdGNibjA3WEc1Y2JuQjFZbXhwWTE5bWRXNWpkR2x2Ym5NdVlYQndiSGxEWlc1MGNtRnNTVzF3ZFd4elpTQTlJQ2hrWlhSaGFXeHpLU0E5UGlCN1hHNGdJRjkyWldNelh6RXVjMlYwV0Noa1pYUmhhV3h6TG5ncE8xeHVJQ0JmZG1Wak0xOHhMbk5sZEZrb1pHVjBZV2xzY3k1NUtUdGNiaUFnWDNabFl6TmZNUzV6WlhSYUtHUmxkR0ZwYkhNdWVpazdYRzVjYmlBZ1gyOWlhbVZqZEhOYlpHVjBZV2xzY3k1cFpGMHVZWEJ3YkhsRFpXNTBjbUZzU1cxd2RXeHpaU2hmZG1Wak0xOHhLVHRjYmlBZ1gyOWlhbVZqZEhOYlpHVjBZV2xzY3k1cFpGMHVZV04wYVhaaGRHVW9LVHRjYm4wN1hHNWNibkIxWW14cFkxOW1kVzVqZEdsdmJuTXVZWEJ3YkhsSmJYQjFiSE5sSUQwZ0tHUmxkR0ZwYkhNcElEMCtJSHRjYmlBZ1gzWmxZek5mTVM1elpYUllLR1JsZEdGcGJITXVhVzF3ZFd4elpWOTRLVHRjYmlBZ1gzWmxZek5mTVM1elpYUlpLR1JsZEdGcGJITXVhVzF3ZFd4elpWOTVLVHRjYmlBZ1gzWmxZek5mTVM1elpYUmFLR1JsZEdGcGJITXVhVzF3ZFd4elpWOTZLVHRjYmx4dUlDQmZkbVZqTTE4eUxuTmxkRmdvWkdWMFlXbHNjeTU0S1R0Y2JpQWdYM1psWXpOZk1pNXpaWFJaS0dSbGRHRnBiSE11ZVNrN1hHNGdJRjkyWldNelh6SXVjMlYwV2loa1pYUmhhV3h6TG5vcE8xeHVYRzRnSUY5dlltcGxZM1J6VzJSbGRHRnBiSE11YVdSZExtRndjR3g1U1cxd2RXeHpaU2hjYmlBZ0lDQmZkbVZqTTE4eExGeHVJQ0FnSUY5MlpXTXpYekpjYmlBZ0tUdGNiaUFnWDI5aWFtVmpkSE5iWkdWMFlXbHNjeTVwWkYwdVlXTjBhWFpoZEdVb0tUdGNibjA3WEc1Y2JuQjFZbXhwWTE5bWRXNWpkR2x2Ym5NdVlYQndiSGxVYjNKeGRXVWdQU0FvWkdWMFlXbHNjeWtnUFQ0Z2UxeHVJQ0JmZG1Wak0xOHhMbk5sZEZnb1pHVjBZV2xzY3k1MGIzSnhkV1ZmZUNrN1hHNGdJRjkyWldNelh6RXVjMlYwV1Noa1pYUmhhV3h6TG5SdmNuRjFaVjk1S1R0Y2JpQWdYM1psWXpOZk1TNXpaWFJhS0dSbGRHRnBiSE11ZEc5eWNYVmxYM29wTzF4dVhHNGdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXVhV1JkTG1Gd2NHeDVWRzl5Y1hWbEtGeHVJQ0FnSUY5MlpXTXpYekZjYmlBZ0tUdGNiaUFnWDI5aWFtVmpkSE5iWkdWMFlXbHNjeTVwWkYwdVlXTjBhWFpoZEdVb0tUdGNibjA3WEc1Y2JuQjFZbXhwWTE5bWRXNWpkR2x2Ym5NdVlYQndiSGxEWlc1MGNtRnNSbTl5WTJVZ1BTQW9aR1YwWVdsc2N5a2dQVDRnZTF4dUlDQmZkbVZqTTE4eExuTmxkRmdvWkdWMFlXbHNjeTU0S1R0Y2JpQWdYM1psWXpOZk1TNXpaWFJaS0dSbGRHRnBiSE11ZVNrN1hHNGdJRjkyWldNelh6RXVjMlYwV2loa1pYUmhhV3h6TG5vcE8xeHVYRzRnSUY5dlltcGxZM1J6VzJSbGRHRnBiSE11YVdSZExtRndjR3g1UTJWdWRISmhiRVp2Y21ObEtGOTJaV016WHpFcE8xeHVJQ0JmYjJKcVpXTjBjMXRrWlhSaGFXeHpMbWxrWFM1aFkzUnBkbUYwWlNncE8xeHVmVHRjYmx4dWNIVmliR2xqWDJaMWJtTjBhVzl1Y3k1aGNIQnNlVVp2Y21ObElEMGdLR1JsZEdGcGJITXBJRDArSUh0Y2JpQWdYM1psWXpOZk1TNXpaWFJZS0dSbGRHRnBiSE11Wm05eVkyVmZlQ2s3WEc0Z0lGOTJaV016WHpFdWMyVjBXU2hrWlhSaGFXeHpMbVp2Y21ObFgza3BPMXh1SUNCZmRtVmpNMTh4TG5ObGRGb29aR1YwWVdsc2N5NW1iM0pqWlY5NktUdGNibHh1SUNCZmRtVmpNMTh5TG5ObGRGZ29aR1YwWVdsc2N5NTRLVHRjYmlBZ1gzWmxZek5mTWk1elpYUlpLR1JsZEdGcGJITXVlU2s3WEc0Z0lGOTJaV016WHpJdWMyVjBXaWhrWlhSaGFXeHpMbm9wTzF4dVhHNGdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXVhV1JkTG1Gd2NHeDVSbTl5WTJVb1hHNGdJQ0FnWDNabFl6TmZNU3hjYmlBZ0lDQmZkbVZqTTE4eVhHNGdJQ2s3WEc0Z0lGOXZZbXBsWTNSelcyUmxkR0ZwYkhNdWFXUmRMbUZqZEdsMllYUmxLQ2s3WEc1OU8xeHVYRzV3ZFdKc2FXTmZablZ1WTNScGIyNXpMbTl1VTJsdGRXeGhkR2x2YmxKbGMzVnRaU0E5SUNncElEMCtJSHRjYmlBZ2JHRnpkRjl6YVcxMWJHRjBhVzl1WDNScGJXVWdQU0JFWVhSbExtNXZkeWdwTzF4dWZUdGNibHh1Y0hWaWJHbGpYMloxYm1OMGFXOXVjeTV6WlhSQmJtZDFiR0Z5Vm1Wc2IyTnBkSGtnUFNBb1pHVjBZV2xzY3lrZ1BUNGdlMXh1SUNCZmRtVmpNMTh4TG5ObGRGZ29aR1YwWVdsc2N5NTRLVHRjYmlBZ1gzWmxZek5mTVM1elpYUlpLR1JsZEdGcGJITXVlU2s3WEc0Z0lGOTJaV016WHpFdWMyVjBXaWhrWlhSaGFXeHpMbm9wTzF4dVhHNGdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXVhV1JkTG5ObGRFRnVaM1ZzWVhKV1pXeHZZMmwwZVNoY2JpQWdJQ0JmZG1Wak0xOHhYRzRnSUNrN1hHNGdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXVhV1JkTG1GamRHbDJZWFJsS0NrN1hHNTlPMXh1WEc1d2RXSnNhV05mWm5WdVkzUnBiMjV6TG5ObGRFeHBibVZoY2xabGJHOWphWFI1SUQwZ0tHUmxkR0ZwYkhNcElEMCtJSHRjYmlBZ1gzWmxZek5mTVM1elpYUllLR1JsZEdGcGJITXVlQ2s3WEc0Z0lGOTJaV016WHpFdWMyVjBXU2hrWlhSaGFXeHpMbmtwTzF4dUlDQmZkbVZqTTE4eExuTmxkRm9vWkdWMFlXbHNjeTU2S1R0Y2JseHVJQ0JmYjJKcVpXTjBjMXRrWlhSaGFXeHpMbWxrWFM1elpYUk1hVzVsWVhKV1pXeHZZMmwwZVNoY2JpQWdJQ0JmZG1Wak0xOHhYRzRnSUNrN1hHNGdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXVhV1JkTG1GamRHbDJZWFJsS0NrN1hHNTlPMXh1WEc1d2RXSnNhV05mWm5WdVkzUnBiMjV6TG5ObGRFRnVaM1ZzWVhKR1lXTjBiM0lnUFNBb1pHVjBZV2xzY3lrZ1BUNGdlMXh1SUNCZmRtVmpNMTh4TG5ObGRGZ29aR1YwWVdsc2N5NTRLVHRjYmlBZ1gzWmxZek5mTVM1elpYUlpLR1JsZEdGcGJITXVlU2s3WEc0Z0lGOTJaV016WHpFdWMyVjBXaWhrWlhSaGFXeHpMbm9wTzF4dVhHNGdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXVhV1JkTG5ObGRFRnVaM1ZzWVhKR1lXTjBiM0lvWEc0Z0lDQWdJQ0JmZG1Wak0xOHhYRzRnSUNrN1hHNTlPMXh1WEc1d2RXSnNhV05mWm5WdVkzUnBiMjV6TG5ObGRFeHBibVZoY2taaFkzUnZjaUE5SUNoa1pYUmhhV3h6S1NBOVBpQjdYRzRnSUY5MlpXTXpYekV1YzJWMFdDaGtaWFJoYVd4ekxuZ3BPMXh1SUNCZmRtVmpNMTh4TG5ObGRGa29aR1YwWVdsc2N5NTVLVHRjYmlBZ1gzWmxZek5mTVM1elpYUmFLR1JsZEdGcGJITXVlaWs3WEc1Y2JpQWdYMjlpYW1WamRITmJaR1YwWVdsc2N5NXBaRjB1YzJWMFRHbHVaV0Z5Um1GamRHOXlLRnh1SUNBZ0lGOTJaV016WHpGY2JpQWdLVHRjYm4wN1hHNWNibkIxWW14cFkxOW1kVzVqZEdsdmJuTXVjMlYwUkdGdGNHbHVaeUE5SUNoa1pYUmhhV3h6S1NBOVBpQjdYRzRnSUY5dlltcGxZM1J6VzJSbGRHRnBiSE11YVdSZExuTmxkRVJoYlhCcGJtY29aR1YwWVdsc2N5NXNhVzVsWVhJc0lHUmxkR0ZwYkhNdVlXNW5kV3hoY2lrN1hHNTlPMXh1WEc1d2RXSnNhV05mWm5WdVkzUnBiMjV6TG5ObGRFTmpaRTF2ZEdsdmJsUm9jbVZ6YUc5c1pDQTlJQ2hrWlhSaGFXeHpLU0E5UGlCN1hHNGdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXVhV1JkTG5ObGRFTmpaRTF2ZEdsdmJsUm9jbVZ6YUc5c1pDaGtaWFJoYVd4ekxuUm9jbVZ6YUc5c1pDazdYRzU5TzF4dVhHNXdkV0pzYVdOZlpuVnVZM1JwYjI1ekxuTmxkRU5qWkZOM1pYQjBVM0JvWlhKbFVtRmthWFZ6SUQwZ0tHUmxkR0ZwYkhNcElEMCtJSHRjYmlBZ1gyOWlhbVZqZEhOYlpHVjBZV2xzY3k1cFpGMHVjMlYwUTJOa1UzZGxjSFJUY0dobGNtVlNZV1JwZFhNb1pHVjBZV2xzY3k1eVlXUnBkWE1wTzF4dWZUdGNibHh1Y0hWaWJHbGpYMloxYm1OMGFXOXVjeTVoWkdSRGIyNXpkSEpoYVc1MElEMGdLR1JsZEdGcGJITXBJRDArSUh0Y2JpQWdiR1YwSUdOdmJuTjBjbUZwYm5RN1hHNWNiaUFnYzNkcGRHTm9JQ2hrWlhSaGFXeHpMblI1Y0dVcElIdGNibHh1SUNBZ0lHTmhjMlVnSjNCdmFXNTBKem9nZTF4dUlDQWdJQ0FnYVdZZ0tHUmxkR0ZwYkhNdWIySnFaV04wWWlBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUY5MlpXTXpYekV1YzJWMFdDaGtaWFJoYVd4ekxuQnZjMmwwYVc5dVlTNTRLVHRjYmlBZ0lDQWdJQ0FnWDNabFl6TmZNUzV6WlhSWktHUmxkR0ZwYkhNdWNHOXphWFJwYjI1aExua3BPMXh1SUNBZ0lDQWdJQ0JmZG1Wak0xOHhMbk5sZEZvb1pHVjBZV2xzY3k1d2IzTnBkR2x2Ym1FdWVpazdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUnlZV2x1ZENBOUlHNWxkeUJCYlcxdkxtSjBVRzlwYm5ReVVHOXBiblJEYjI1emRISmhhVzUwS0Z4dUlDQWdJQ0FnSUNBZ0lGOXZZbXBsWTNSelcyUmxkR0ZwYkhNdWIySnFaV04wWVYwc1hHNGdJQ0FnSUNBZ0lDQWdYM1psWXpOZk1WeHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdYM1psWXpOZk1TNXpaWFJZS0dSbGRHRnBiSE11Y0c5emFYUnBiMjVoTG5ncE8xeHVJQ0FnSUNBZ0lDQmZkbVZqTTE4eExuTmxkRmtvWkdWMFlXbHNjeTV3YjNOcGRHbHZibUV1ZVNrN1hHNGdJQ0FnSUNBZ0lGOTJaV016WHpFdWMyVjBXaWhrWlhSaGFXeHpMbkJ2YzJsMGFXOXVZUzU2S1R0Y2JseHVJQ0FnSUNBZ0lDQmZkbVZqTTE4eUxuTmxkRmdvWkdWMFlXbHNjeTV3YjNOcGRHbHZibUl1ZUNrN1hHNGdJQ0FnSUNBZ0lGOTJaV016WHpJdWMyVjBXU2hrWlhSaGFXeHpMbkJ2YzJsMGFXOXVZaTU1S1R0Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTWk1elpYUmFLR1JsZEdGcGJITXVjRzl6YVhScGIyNWlMbm9wTzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wY21GcGJuUWdQU0J1WlhjZ1FXMXRieTVpZEZCdmFXNTBNbEJ2YVc1MFEyOXVjM1J5WVdsdWRDaGNiaUFnSUNBZ0lDQWdJQ0JmYjJKcVpXTjBjMXRrWlhSaGFXeHpMbTlpYW1WamRHRmRMRnh1SUNBZ0lDQWdJQ0FnSUY5dlltcGxZM1J6VzJSbGRHRnBiSE11YjJKcVpXTjBZbDBzWEc0Z0lDQWdJQ0FnSUNBZ1gzWmxZek5mTVN4Y2JpQWdJQ0FnSUNBZ0lDQmZkbVZqTTE4eVhHNGdJQ0FnSUNBZ0lDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0I5WEc0Z0lDQWdZMkZ6WlNBbmFHbHVaMlVuT2lCN1hHNGdJQ0FnSUNCcFppQW9aR1YwWVdsc2N5NXZZbXBsWTNSaUlEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUllLR1JsZEdGcGJITXVjRzl6YVhScGIyNWhMbmdwTzF4dUlDQWdJQ0FnSUNCZmRtVmpNMTh4TG5ObGRGa29aR1YwWVdsc2N5NXdiM05wZEdsdmJtRXVlU2s3WEc0Z0lDQWdJQ0FnSUY5MlpXTXpYekV1YzJWMFdpaGtaWFJoYVd4ekxuQnZjMmwwYVc5dVlTNTZLVHRjYmx4dUlDQWdJQ0FnSUNCZmRtVmpNMTh5TG5ObGRGZ29aR1YwWVdsc2N5NWhlR2x6TG5ncE8xeHVJQ0FnSUNBZ0lDQmZkbVZqTTE4eUxuTmxkRmtvWkdWMFlXbHNjeTVoZUdsekxua3BPMXh1SUNBZ0lDQWdJQ0JmZG1Wak0xOHlMbk5sZEZvb1pHVjBZV2xzY3k1aGVHbHpMbm9wTzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wY21GcGJuUWdQU0J1WlhjZ1FXMXRieTVpZEVocGJtZGxRMjl1YzNSeVlXbHVkQ2hjYmlBZ0lDQWdJQ0FnSUNCZmIySnFaV04wYzF0a1pYUmhhV3h6TG05aWFtVmpkR0ZkTEZ4dUlDQWdJQ0FnSUNBZ0lGOTJaV016WHpFc1hHNGdJQ0FnSUNBZ0lDQWdYM1psWXpOZk1seHVJQ0FnSUNBZ0lDQXBPMXh1WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JmZG1Wak0xOHhMbk5sZEZnb1pHVjBZV2xzY3k1d2IzTnBkR2x2Ym1FdWVDazdYRzRnSUNBZ0lDQWdJRjkyWldNelh6RXVjMlYwV1Noa1pYUmhhV3h6TG5CdmMybDBhVzl1WVM1NUtUdGNiaUFnSUNBZ0lDQWdYM1psWXpOZk1TNXpaWFJhS0dSbGRHRnBiSE11Y0c5emFYUnBiMjVoTG5vcE8xeHVYRzRnSUNBZ0lDQWdJRjkyWldNelh6SXVjMlYwV0Noa1pYUmhhV3h6TG5CdmMybDBhVzl1WWk1NEtUdGNiaUFnSUNBZ0lDQWdYM1psWXpOZk1pNXpaWFJaS0dSbGRHRnBiSE11Y0c5emFYUnBiMjVpTG5rcE8xeHVJQ0FnSUNBZ0lDQmZkbVZqTTE4eUxuTmxkRm9vWkdWMFlXbHNjeTV3YjNOcGRHbHZibUl1ZWlrN1hHNWNiaUFnSUNBZ0lDQWdYM1psWXpOZk15NXpaWFJZS0dSbGRHRnBiSE11WVhocGN5NTRLVHRjYmlBZ0lDQWdJQ0FnWDNabFl6TmZNeTV6WlhSWktHUmxkR0ZwYkhNdVlYaHBjeTU1S1R0Y2JpQWdJQ0FnSUNBZ1gzWmxZek5mTXk1elpYUmFLR1JsZEdGcGJITXVZWGhwY3k1NktUdGNibHh1SUNBZ0lDQWdJQ0JqYjI1emRISmhhVzUwSUQwZ2JtVjNJRUZ0Ylc4dVluUklhVzVuWlVOdmJuTjBjbUZwYm5Rb1hHNGdJQ0FnSUNBZ0lDQWdYMjlpYW1WamRITmJaR1YwWVdsc2N5NXZZbXBsWTNSaFhTeGNiaUFnSUNBZ0lDQWdJQ0JmYjJKcVpXTjBjMXRrWlhSaGFXeHpMbTlpYW1WamRHSmRMRnh1SUNBZ0lDQWdJQ0FnSUY5MlpXTXpYekVzWEc0Z0lDQWdJQ0FnSUNBZ1gzWmxZek5mTWl4Y2JpQWdJQ0FnSUNBZ0lDQmZkbVZqTTE4ekxGeHVJQ0FnSUNBZ0lDQWdJRjkyWldNelh6TmNiaUFnSUNBZ0lDQWdLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdJQ0JqWVhObElDZHpiR2xrWlhJbk9pQjdYRzRnSUNBZ0lDQnNaWFFnZEhKaGJuTm1iM0p0WWp0Y2JpQWdJQ0FnSUdOdmJuTjBJSFJ5WVc1elptOXliV0VnUFNCdVpYY2dRVzF0Ynk1aWRGUnlZVzV6Wm05eWJTZ3BPMXh1WEc0Z0lDQWdJQ0JmZG1Wak0xOHhMbk5sZEZnb1pHVjBZV2xzY3k1d2IzTnBkR2x2Ym1FdWVDazdYRzRnSUNBZ0lDQmZkbVZqTTE4eExuTmxkRmtvWkdWMFlXbHNjeTV3YjNOcGRHbHZibUV1ZVNrN1hHNGdJQ0FnSUNCZmRtVmpNMTh4TG5ObGRGb29aR1YwWVdsc2N5NXdiM05wZEdsdmJtRXVlaWs3WEc1Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YldFdWMyVjBUM0pwWjJsdUtGOTJaV016WHpFcE8xeHVYRzRnSUNBZ0lDQnNaWFFnY205MFlYUnBiMjRnUFNCMGNtRnVjMlp2Y20xaExtZGxkRkp2ZEdGMGFXOXVLQ2s3WEc0Z0lDQWdJQ0J5YjNSaGRHbHZiaTV6WlhSRmRXeGxjaWhrWlhSaGFXeHpMbUY0YVhNdWVDd2daR1YwWVdsc2N5NWhlR2x6TG5rc0lHUmxkR0ZwYkhNdVlYaHBjeTU2S1R0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YldFdWMyVjBVbTkwWVhScGIyNG9jbTkwWVhScGIyNHBPMXh1WEc0Z0lDQWdJQ0JwWmlBb1pHVjBZV2xzY3k1dlltcGxZM1JpS1NCN1hHNGdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJXSWdQU0J1WlhjZ1FXMXRieTVpZEZSeVlXNXpabTl5YlNncE8xeHVYRzRnSUNBZ0lDQWdJRjkyWldNelh6SXVjMlYwV0Noa1pYUmhhV3h6TG5CdmMybDBhVzl1WWk1NEtUdGNiaUFnSUNBZ0lDQWdYM1psWXpOZk1pNXpaWFJaS0dSbGRHRnBiSE11Y0c5emFYUnBiMjVpTG5rcE8xeHVJQ0FnSUNBZ0lDQmZkbVZqTTE4eUxuTmxkRm9vWkdWMFlXbHNjeTV3YjNOcGRHbHZibUl1ZWlrN1hHNWNiaUFnSUNBZ0lDQWdkSEpoYm5ObWIzSnRZaTV6WlhSUGNtbG5hVzRvWDNabFl6TmZNaWs3WEc1Y2JpQWdJQ0FnSUNBZ2NtOTBZWFJwYjI0Z1BTQjBjbUZ1YzJadmNtMWlMbWRsZEZKdmRHRjBhVzl1S0NrN1hHNGdJQ0FnSUNBZ0lISnZkR0YwYVc5dUxuTmxkRVYxYkdWeUtHUmxkR0ZwYkhNdVlYaHBjeTU0TENCa1pYUmhhV3h6TG1GNGFYTXVlU3dnWkdWMFlXbHNjeTVoZUdsekxub3BPMXh1SUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTFpTG5ObGRGSnZkR0YwYVc5dUtISnZkR0YwYVc5dUtUdGNibHh1SUNBZ0lDQWdJQ0JqYjI1emRISmhhVzUwSUQwZ2JtVjNJRUZ0Ylc4dVluUlRiR2xrWlhKRGIyNXpkSEpoYVc1MEtGeHVJQ0FnSUNBZ0lDQWdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXViMkpxWldOMFlWMHNYRzRnSUNBZ0lDQWdJQ0FnWDI5aWFtVmpkSE5iWkdWMFlXbHNjeTV2WW1wbFkzUmlYU3hjYmlBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xaExGeHVJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliV0lzWEc0Z0lDQWdJQ0FnSUNBZ2RISjFaVnh1SUNBZ0lDQWdJQ0FwTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUnlZV2x1ZENBOUlHNWxkeUJCYlcxdkxtSjBVMnhwWkdWeVEyOXVjM1J5WVdsdWRDaGNiaUFnSUNBZ0lDQWdJQ0JmYjJKcVpXTjBjMXRrWlhSaGFXeHpMbTlpYW1WamRHRmRMRnh1SUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YldFc1hHNGdJQ0FnSUNBZ0lDQWdkSEoxWlZ4dUlDQWdJQ0FnSUNBcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmpiMjV6ZEhKaGFXNTBMblJoSUQwZ2RISmhibk5tYjNKdFlUdGNiaUFnSUNBZ0lHTnZibk4wY21GcGJuUXVkR0lnUFNCMGNtRnVjMlp2Y20xaU8xeHVYRzRnSUNBZ0lDQkJiVzF2TG1SbGMzUnliM2tvZEhKaGJuTm1iM0p0WVNrN1hHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRZaUFoUFQwZ2RXNWtaV1pwYm1Wa0tTQkJiVzF2TG1SbGMzUnliM2tvZEhKaGJuTm1iM0p0WWlrN1hHNWNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJSDFjYmlBZ0lDQmpZWE5sSUNkamIyNWxkSGRwYzNRbk9pQjdYRzRnSUNBZ0lDQmpiMjV6ZENCMGNtRnVjMlp2Y20xaElEMGdibVYzSUVGdGJXOHVZblJVY21GdWMyWnZjbTBvS1R0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YldFdWMyVjBTV1JsYm5ScGRIa29LVHRjYmx4dUlDQWdJQ0FnWTI5dWMzUWdkSEpoYm5ObWIzSnRZaUE5SUc1bGR5QkJiVzF2TG1KMFZISmhibk5tYjNKdEtDazdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMWlMbk5sZEVsa1pXNTBhWFI1S0NrN1hHNWNiaUFnSUNBZ0lGOTJaV016WHpFdWMyVjBXQ2hrWlhSaGFXeHpMbkJ2YzJsMGFXOXVZUzU0S1R0Y2JpQWdJQ0FnSUY5MlpXTXpYekV1YzJWMFdTaGtaWFJoYVd4ekxuQnZjMmwwYVc5dVlTNTVLVHRjYmlBZ0lDQWdJRjkyWldNelh6RXVjMlYwV2loa1pYUmhhV3h6TG5CdmMybDBhVzl1WVM1NktUdGNibHh1SUNBZ0lDQWdYM1psWXpOZk1pNXpaWFJZS0dSbGRHRnBiSE11Y0c5emFYUnBiMjVpTG5ncE8xeHVJQ0FnSUNBZ1gzWmxZek5mTWk1elpYUlpLR1JsZEdGcGJITXVjRzl6YVhScGIyNWlMbmtwTzF4dUlDQWdJQ0FnWDNabFl6TmZNaTV6WlhSYUtHUmxkR0ZwYkhNdWNHOXphWFJwYjI1aUxub3BPMXh1WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTFoTG5ObGRFOXlhV2RwYmloZmRtVmpNMTh4S1R0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YldJdWMyVjBUM0pwWjJsdUtGOTJaV016WHpJcE8xeHVYRzRnSUNBZ0lDQnNaWFFnY205MFlYUnBiMjRnUFNCMGNtRnVjMlp2Y20xaExtZGxkRkp2ZEdGMGFXOXVLQ2s3WEc0Z0lDQWdJQ0J5YjNSaGRHbHZiaTV6WlhSRmRXeGxjbHBaV0NndFpHVjBZV2xzY3k1aGVHbHpZUzU2TENBdFpHVjBZV2xzY3k1aGVHbHpZUzU1TENBdFpHVjBZV2xzY3k1aGVHbHpZUzU0S1R0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YldFdWMyVjBVbTkwWVhScGIyNG9jbTkwWVhScGIyNHBPMXh1WEc0Z0lDQWdJQ0J5YjNSaGRHbHZiaUE5SUhSeVlXNXpabTl5YldJdVoyVjBVbTkwWVhScGIyNG9LVHRjYmlBZ0lDQWdJSEp2ZEdGMGFXOXVMbk5sZEVWMWJHVnlXbGxZS0Mxa1pYUmhhV3h6TG1GNGFYTmlMbm9zSUMxa1pYUmhhV3h6TG1GNGFYTmlMbmtzSUMxa1pYUmhhV3h6TG1GNGFYTmlMbmdwTzF4dUlDQWdJQ0FnZEhKaGJuTm1iM0p0WWk1elpYUlNiM1JoZEdsdmJpaHliM1JoZEdsdmJpazdYRzVjYmlBZ0lDQWdJR052Ym5OMGNtRnBiblFnUFNCdVpYY2dRVzF0Ynk1aWRFTnZibVZVZDJsemRFTnZibk4wY21GcGJuUW9YRzRnSUNBZ0lDQWdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXViMkpxWldOMFlWMHNYRzRnSUNBZ0lDQWdJRjl2WW1wbFkzUnpXMlJsZEdGcGJITXViMkpxWldOMFlsMHNYRzRnSUNBZ0lDQWdJSFJ5WVc1elptOXliV0VzWEc0Z0lDQWdJQ0FnSUhSeVlXNXpabTl5YldKY2JpQWdJQ0FnSUNrN1hHNWNiaUFnSUNBZ0lHTnZibk4wY21GcGJuUXVjMlYwVEdsdGFYUW9UV0YwYUM1UVNTd2dNQ3dnVFdGMGFDNVFTU2s3WEc1Y2JpQWdJQ0FnSUdOdmJuTjBjbUZwYm5RdWRHRWdQU0IwY21GdWMyWnZjbTFoTzF4dUlDQWdJQ0FnWTI5dWMzUnlZV2x1ZEM1MFlpQTlJSFJ5WVc1elptOXliV0k3WEc1Y2JpQWdJQ0FnSUVGdGJXOHVaR1Z6ZEhKdmVTaDBjbUZ1YzJadmNtMWhLVHRjYmlBZ0lDQWdJRUZ0Ylc4dVpHVnpkSEp2ZVNoMGNtRnVjMlp2Y20xaUtUdGNibHh1SUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnZlZ4dUlDQWdJR05oYzJVZ0oyUnZaaWM2SUh0Y2JpQWdJQ0FnSUd4bGRDQjBjbUZ1YzJadmNtMWlPMXh1WEc0Z0lDQWdJQ0JqYjI1emRDQjBjbUZ1YzJadmNtMWhJRDBnYm1WM0lFRnRiVzh1WW5SVWNtRnVjMlp2Y20wb0tUdGNiaUFnSUNBZ0lIUnlZVzV6Wm05eWJXRXVjMlYwU1dSbGJuUnBkSGtvS1R0Y2JseHVJQ0FnSUNBZ1gzWmxZek5mTVM1elpYUllLR1JsZEdGcGJITXVjRzl6YVhScGIyNWhMbmdwTzF4dUlDQWdJQ0FnWDNabFl6TmZNUzV6WlhSWktHUmxkR0ZwYkhNdWNHOXphWFJwYjI1aExua3BPMXh1SUNBZ0lDQWdYM1psWXpOZk1TNXpaWFJhS0dSbGRHRnBiSE11Y0c5emFYUnBiMjVoTG5vcE8xeHVYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMWhMbk5sZEU5eWFXZHBiaWhmZG1Wak0xOHhLVHRjYmx4dUlDQWdJQ0FnYkdWMElISnZkR0YwYVc5dUlEMGdkSEpoYm5ObWIzSnRZUzVuWlhSU2IzUmhkR2x2YmlncE8xeHVJQ0FnSUNBZ2NtOTBZWFJwYjI0dWMyVjBSWFZzWlhKYVdWZ29MV1JsZEdGcGJITXVZWGhwYzJFdWVpd2dMV1JsZEdGcGJITXVZWGhwYzJFdWVTd2dMV1JsZEdGcGJITXVZWGhwYzJFdWVDazdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMWhMbk5sZEZKdmRHRjBhVzl1S0hKdmRHRjBhVzl1S1R0Y2JseHVJQ0FnSUNBZ2FXWWdLR1JsZEdGcGJITXViMkpxWldOMFlpa2dlMXh1SUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTFpSUQwZ2JtVjNJRUZ0Ylc4dVluUlVjbUZ1YzJadmNtMG9LVHRjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0WWk1elpYUkpaR1Z1ZEdsMGVTZ3BPMXh1WEc0Z0lDQWdJQ0FnSUY5MlpXTXpYekl1YzJWMFdDaGtaWFJoYVd4ekxuQnZjMmwwYVc5dVlpNTRLVHRjYmlBZ0lDQWdJQ0FnWDNabFl6TmZNaTV6WlhSWktHUmxkR0ZwYkhNdWNHOXphWFJwYjI1aUxua3BPMXh1SUNBZ0lDQWdJQ0JmZG1Wak0xOHlMbk5sZEZvb1pHVjBZV2xzY3k1d2IzTnBkR2x2Ym1JdWVpazdYRzVjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0WWk1elpYUlBjbWxuYVc0b1gzWmxZek5mTWlrN1hHNWNiaUFnSUNBZ0lDQWdjbTkwWVhScGIyNGdQU0IwY21GdWMyWnZjbTFpTG1kbGRGSnZkR0YwYVc5dUtDazdYRzRnSUNBZ0lDQWdJSEp2ZEdGMGFXOXVMbk5sZEVWMWJHVnlXbGxZS0Mxa1pYUmhhV3h6TG1GNGFYTmlMbm9zSUMxa1pYUmhhV3h6TG1GNGFYTmlMbmtzSUMxa1pYUmhhV3h6TG1GNGFYTmlMbmdwTzF4dUlDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xaUxuTmxkRkp2ZEdGMGFXOXVLSEp2ZEdGMGFXOXVLVHRjYmx4dUlDQWdJQ0FnSUNCamIyNXpkSEpoYVc1MElEMGdibVYzSUVGdGJXOHVZblJIWlc1bGNtbGpOa1J2WmtOdmJuTjBjbUZwYm5Rb1hHNGdJQ0FnSUNBZ0lDQWdYMjlpYW1WamRITmJaR1YwWVdsc2N5NXZZbXBsWTNSaFhTeGNiaUFnSUNBZ0lDQWdJQ0JmYjJKcVpXTjBjMXRrWlhSaGFXeHpMbTlpYW1WamRHSmRMRnh1SUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YldFc1hHNGdJQ0FnSUNBZ0lDQWdkSEpoYm5ObWIzSnRZaXhjYmlBZ0lDQWdJQ0FnSUNCMGNuVmxYRzRnSUNBZ0lDQWdJQ2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRISmhhVzUwSUQwZ2JtVjNJRUZ0Ylc4dVluUkhaVzVsY21sak5rUnZaa052Ym5OMGNtRnBiblFvWEc0Z0lDQWdJQ0FnSUNBZ1gyOWlhbVZqZEhOYlpHVjBZV2xzY3k1dlltcGxZM1JoWFN4Y2JpQWdJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMWhMRnh1SUNBZ0lDQWdJQ0FnSUhSeWRXVmNiaUFnSUNBZ0lDQWdLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWTI5dWMzUnlZV2x1ZEM1MFlTQTlJSFJ5WVc1elptOXliV0U3WEc0Z0lDQWdJQ0JqYjI1emRISmhhVzUwTG5SaUlEMGdkSEpoYm5ObWIzSnRZanRjYmx4dUlDQWdJQ0FnUVcxdGJ5NWtaWE4wY205NUtIUnlZVzV6Wm05eWJXRXBPMXh1SUNBZ0lDQWdhV1lnS0hSeVlXNXpabTl5YldJZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnUVcxdGJ5NWtaWE4wY205NUtIUnlZVzV6Wm05eWJXSXBPMXh1WEc0Z0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCOVhHNGdJQ0FnWkdWbVlYVnNkRHBjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnZlZ4dVhHNGdJSGR2Y214a0xtRmtaRU52Ym5OMGNtRnBiblFvWTI5dWMzUnlZV2x1ZENrN1hHNWNiaUFnWTI5dWMzUnlZV2x1ZEM1aElEMGdYMjlpYW1WamRITmJaR1YwWVdsc2N5NXZZbXBsWTNSaFhUdGNiaUFnWTI5dWMzUnlZV2x1ZEM1aUlEMGdYMjlpYW1WamRITmJaR1YwWVdsc2N5NXZZbXBsWTNSaVhUdGNibHh1SUNCamIyNXpkSEpoYVc1MExtVnVZV0pzWlVabFpXUmlZV05yS0NrN1hHNGdJRjlqYjI1emRISmhhVzUwYzF0a1pYUmhhV3h6TG1sa1hTQTlJR052Ym5OMGNtRnBiblE3WEc0Z0lGOXVkVzFmWTI5dWMzUnlZV2x1ZEhNckt6dGNibHh1SUNCcFppQW9VMVZRVUU5U1ZGOVVVa0ZPVTBaRlVrRkNURVVwSUh0Y2JpQWdJQ0JqYjI1emRISmhhVzUwY21Wd2IzSjBJRDBnYm1WM0lFWnNiMkYwTXpKQmNuSmhlU2d4SUNzZ1gyNTFiVjlqYjI1emRISmhhVzUwY3lBcUlFTlBUbE5VVWtGSlRsUlNSVkJQVWxSZlNWUkZUVk5KV2tVcE95QXZMeUJ0WlhOellXZGxJR2xrSUNZZ0tDQWpJRzltSUc5aWFtVmpkSE1nZEc4Z2NtVndiM0owSUNvZ0l5QnZaaUIyWVd4MVpYTWdjR1Z5SUc5aWFtVmpkQ0FwWEc0Z0lDQWdZMjl1YzNSeVlXbHVkSEpsY0c5eWRGc3dYU0E5SUUxRlUxTkJSMFZmVkZsUVJWTXVRMDlPVTFSU1FVbE9WRkpGVUU5U1ZEdGNiaUFnZlNCbGJITmxJR052Ym5OMGNtRnBiblJ5WlhCdmNuUWdQU0JiVFVWVFUwRkhSVjlVV1ZCRlV5NURUMDVUVkZKQlNVNVVVa1ZRVDFKVVhUdGNibjA3WEc1Y2JuQjFZbXhwWTE5bWRXNWpkR2x2Ym5NdWNtVnRiM1psUTI5dWMzUnlZV2x1ZENBOUlDaGtaWFJoYVd4ektTQTlQaUI3WEc0Z0lHTnZibk4wSUdOdmJuTjBjbUZwYm5RZ1BTQmZZMjl1YzNSeVlXbHVkSE5iWkdWMFlXbHNjeTVwWkYwN1hHNWNiaUFnYVdZZ0tHTnZibk4wY21GcGJuUWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhkdmNteGtMbkpsYlc5MlpVTnZibk4wY21GcGJuUW9ZMjl1YzNSeVlXbHVkQ2s3WEc0Z0lDQWdYMk52Ym5OMGNtRnBiblJ6VzJSbGRHRnBiSE11YVdSZElEMGdiblZzYkR0Y2JpQWdJQ0JmYm5WdFgyTnZibk4wY21GcGJuUnpMUzA3WEc0Z0lIMWNibjA3WEc1Y2JuQjFZbXhwWTE5bWRXNWpkR2x2Ym5NdVkyOXVjM1J5WVdsdWRGOXpaWFJDY21WaGEybHVaMGx0Y0hWc2MyVlVhSEpsYzJodmJHUWdQU0FvWkdWMFlXbHNjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQmpiMjV6ZEhKaGFXNTBJRDBnWDJOdmJuTjBjbUZwYm5SelcyUmxkR0ZwYkhNdWFXUmRPMXh1SUNCcFppQW9ZMjl1YzNSeVlXbHVkQ0FoUFQwZ2RXNWtaV1pwYm1RcElHTnZibk4wY21GcGJuUXVjMlYwUW5KbFlXdHBibWRKYlhCMWJITmxWR2h5WlhOb2IyeGtLR1JsZEdGcGJITXVkR2h5WlhOb2IyeGtLVHRjYm4wN1hHNWNibkIxWW14cFkxOW1kVzVqZEdsdmJuTXVjMmx0ZFd4aGRHVWdQU0FvY0dGeVlXMXpJRDBnZTMwcElEMCtJSHRjYmlBZ2FXWWdLSGR2Y214a0tTQjdYRzRnSUNBZ2FXWWdLSEJoY21GdGN5NTBhVzFsVTNSbGNDQW1KaUJ3WVhKaGJYTXVkR2x0WlZOMFpYQWdQQ0JtYVhobFpGUnBiV1ZUZEdWd0tWeHVJQ0FnSUNBZ2NHRnlZVzF6TG5ScGJXVlRkR1Z3SUQwZ1ptbDRaV1JVYVcxbFUzUmxjRHRjYmx4dUlDQWdJSEJoY21GdGN5NXRZWGhUZFdKVGRHVndjeUE5SUhCaGNtRnRjeTV0WVhoVGRXSlRkR1Z3Y3lCOGZDQk5ZWFJvTG1ObGFXd29jR0Z5WVcxekxuUnBiV1ZUZEdWd0lDOGdabWw0WldSVWFXMWxVM1JsY0NrN0lDOHZJRWxtSUcxaGVGTjFZbE4wWlhCeklHbHpJRzV2ZENCa1pXWnBibVZrTENCclpXVndJSFJvWlNCemFXMTFiR0YwYVc5dUlHWjFiR3g1SUhWd0lIUnZJR1JoZEdWY2JseHVJQ0FnSUhkdmNteGtMbk4wWlhCVGFXMTFiR0YwYVc5dUtIQmhjbUZ0Y3k1MGFXMWxVM1JsY0N3Z2NHRnlZVzF6TG0xaGVGTjFZbE4wWlhCekxDQm1hWGhsWkZScGJXVlRkR1Z3S1R0Y2JseHVJQ0FnSUdsbUlDaGZkbVZvYVdOc1pYTXViR1Z1WjNSb0lENGdNQ2tnY21Wd2IzSjBWbVZvYVdOc1pYTW9LVHRjYmlBZ0lDQnlaWEJ2Y25SRGIyeHNhWE5wYjI1ektDazdYRzRnSUNBZ2FXWWdLRjlqYjI1emRISmhhVzUwY3k1c1pXNW5kR2dnUGlBd0tTQnlaWEJ2Y25SRGIyNXpkSEpoYVc1MGN5Z3BPMXh1SUNBZ0lISmxjRzl5ZEZkdmNteGtLQ2s3WEc0Z0lDQWdhV1lnS0Y5emIyWjBZbTlrZVY5bGJtRmliR1ZrS1NCeVpYQnZjblJYYjNKc1pGOXpiMlowWW05a2FXVnpLQ2s3WEc0Z0lIMWNibjA3WEc1Y2JpOHZJRU52Ym5OMGNtRnBiblFnWm5WdVkzUnBiMjV6WEc1d2RXSnNhV05mWm5WdVkzUnBiMjV6TG1ocGJtZGxYM05sZEV4cGJXbDBjeUE5SUNod1lYSmhiWE1wSUQwK0lIdGNiaUFnWDJOdmJuTjBjbUZwYm5SelczQmhjbUZ0Y3k1amIyNXpkSEpoYVc1MFhTNXpaWFJNYVcxcGRDaHdZWEpoYlhNdWJHOTNMQ0J3WVhKaGJYTXVhR2xuYUN3Z01Dd2djR0Z5WVcxekxtSnBZWE5mWm1GamRHOXlMQ0J3WVhKaGJYTXVjbVZzWVhoaGRHbHZibDltWVdOMGIzSXBPMXh1ZlR0Y2JseHVjSFZpYkdsalgyWjFibU4wYVc5dWN5NW9hVzVuWlY5bGJtRmliR1ZCYm1kMWJHRnlUVzkwYjNJZ1BTQW9jR0Z5WVcxektTQTlQaUI3WEc0Z0lHTnZibk4wSUdOdmJuTjBjbUZwYm5RZ1BTQmZZMjl1YzNSeVlXbHVkSE5iY0dGeVlXMXpMbU52Ym5OMGNtRnBiblJkTzF4dUlDQmpiMjV6ZEhKaGFXNTBMbVZ1WVdKc1pVRnVaM1ZzWVhKTmIzUnZjaWgwY25WbExDQndZWEpoYlhNdWRtVnNiMk5wZEhrc0lIQmhjbUZ0Y3k1aFkyTmxiR1Z5WVhScGIyNHBPMXh1SUNCamIyNXpkSEpoYVc1MExtRXVZV04wYVhaaGRHVW9LVHRjYmlBZ2FXWWdLR052Ym5OMGNtRnBiblF1WWlrZ1kyOXVjM1J5WVdsdWRDNWlMbUZqZEdsMllYUmxLQ2s3WEc1OU8xeHVYRzV3ZFdKc2FXTmZablZ1WTNScGIyNXpMbWhwYm1kbFgyUnBjMkZpYkdWTmIzUnZjaUE5SUNod1lYSmhiWE1wSUQwK0lIdGNiaUFnWDJOdmJuTjBjbUZwYm5SelczQmhjbUZ0Y3k1amIyNXpkSEpoYVc1MFhTNWxibUZpYkdWTmIzUnZjaWhtWVd4elpTazdYRzRnSUdsbUlDaGpiMjV6ZEhKaGFXNTBMbUlwSUdOdmJuTjBjbUZwYm5RdVlpNWhZM1JwZG1GMFpTZ3BPMXh1ZlR0Y2JseHVjSFZpYkdsalgyWjFibU4wYVc5dWN5NXpiR2xrWlhKZmMyVjBUR2x0YVhSeklEMGdLSEJoY21GdGN5a2dQVDRnZTF4dUlDQmpiMjV6ZENCamIyNXpkSEpoYVc1MElEMGdYMk52Ym5OMGNtRnBiblJ6VzNCaGNtRnRjeTVqYjI1emRISmhhVzUwWFR0Y2JpQWdZMjl1YzNSeVlXbHVkQzV6WlhSTWIzZGxja3hwYmt4cGJXbDBLSEJoY21GdGN5NXNhVzVmYkc5M1pYSWdmSHdnTUNrN1hHNGdJR052Ym5OMGNtRnBiblF1YzJWMFZYQndaWEpNYVc1TWFXMXBkQ2h3WVhKaGJYTXViR2x1WDNWd2NHVnlJSHg4SURBcE8xeHVYRzRnSUdOdmJuTjBjbUZwYm5RdWMyVjBURzkzWlhKQmJtZE1hVzFwZENod1lYSmhiWE11WVc1blgyeHZkMlZ5SUh4OElEQXBPMXh1SUNCamIyNXpkSEpoYVc1MExuTmxkRlZ3Y0dWeVFXNW5UR2x0YVhRb2NHRnlZVzF6TG1GdVoxOTFjSEJsY2lCOGZDQXdLVHRjYm4wN1hHNWNibkIxWW14cFkxOW1kVzVqZEdsdmJuTXVjMnhwWkdWeVgzTmxkRkpsYzNScGRIVjBhVzl1SUQwZ0tIQmhjbUZ0Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0JqYjI1emRISmhhVzUwSUQwZ1gyTnZibk4wY21GcGJuUnpXM0JoY21GdGN5NWpiMjV6ZEhKaGFXNTBYVHRjYmlBZ1kyOXVjM1J5WVdsdWRDNXpaWFJUYjJaMGJtVnpjMHhwYlV4cGJpaHdZWEpoYlhNdWJHbHVaV0Z5SUh4OElEQXBPMXh1SUNCamIyNXpkSEpoYVc1MExuTmxkRk52Wm5SdVpYTnpUR2x0UVc1bktIQmhjbUZ0Y3k1aGJtZDFiR0Z5SUh4OElEQXBPMXh1ZlR0Y2JseHVjSFZpYkdsalgyWjFibU4wYVc5dWN5NXpiR2xrWlhKZlpXNWhZbXhsVEdsdVpXRnlUVzkwYjNJZ1BTQW9jR0Z5WVcxektTQTlQaUI3WEc0Z0lHTnZibk4wSUdOdmJuTjBjbUZwYm5RZ1BTQmZZMjl1YzNSeVlXbHVkSE5iY0dGeVlXMXpMbU52Ym5OMGNtRnBiblJkTzF4dUlDQmpiMjV6ZEhKaGFXNTBMbk5sZEZSaGNtZGxkRXhwYmsxdmRHOXlWbVZzYjJOcGRIa29jR0Z5WVcxekxuWmxiRzlqYVhSNUtUdGNiaUFnWTI5dWMzUnlZV2x1ZEM1elpYUk5ZWGhNYVc1TmIzUnZja1p2Y21ObEtIQmhjbUZ0Y3k1aFkyTmxiR1Z5WVhScGIyNHBPMXh1SUNCamIyNXpkSEpoYVc1MExuTmxkRkJ2ZDJWeVpXUk1hVzVOYjNSdmNpaDBjblZsS1R0Y2JpQWdZMjl1YzNSeVlXbHVkQzVoTG1GamRHbDJZWFJsS0NrN1hHNGdJR2xtSUNoamIyNXpkSEpoYVc1MExtSXBJR052Ym5OMGNtRnBiblF1WWk1aFkzUnBkbUYwWlNncE8xeHVmVHRjYmx4dWNIVmliR2xqWDJaMWJtTjBhVzl1Y3k1emJHbGtaWEpmWkdsellXSnNaVXhwYm1WaGNrMXZkRzl5SUQwZ0tIQmhjbUZ0Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0JqYjI1emRISmhhVzUwSUQwZ1gyTnZibk4wY21GcGJuUnpXM0JoY21GdGN5NWpiMjV6ZEhKaGFXNTBYVHRjYmlBZ1kyOXVjM1J5WVdsdWRDNXpaWFJRYjNkbGNtVmtUR2x1VFc5MGIzSW9abUZzYzJVcE8xeHVJQ0JwWmlBb1kyOXVjM1J5WVdsdWRDNWlLU0JqYjI1emRISmhhVzUwTG1JdVlXTjBhWFpoZEdVb0tUdGNibjA3WEc1Y2JuQjFZbXhwWTE5bWRXNWpkR2x2Ym5NdWMyeHBaR1Z5WDJWdVlXSnNaVUZ1WjNWc1lYSk5iM1J2Y2lBOUlDaHdZWEpoYlhNcElEMCtJSHRjYmlBZ1kyOXVjM1FnWTI5dWMzUnlZV2x1ZENBOUlGOWpiMjV6ZEhKaGFXNTBjMXR3WVhKaGJYTXVZMjl1YzNSeVlXbHVkRjA3WEc0Z0lHTnZibk4wY21GcGJuUXVjMlYwVkdGeVoyVjBRVzVuVFc5MGIzSldaV3h2WTJsMGVTaHdZWEpoYlhNdWRtVnNiMk5wZEhrcE8xeHVJQ0JqYjI1emRISmhhVzUwTG5ObGRFMWhlRUZ1WjAxdmRHOXlSbTl5WTJVb2NHRnlZVzF6TG1GalkyVnNaWEpoZEdsdmJpazdYRzRnSUdOdmJuTjBjbUZwYm5RdWMyVjBVRzkzWlhKbFpFRnVaMDF2ZEc5eUtIUnlkV1VwTzF4dUlDQmpiMjV6ZEhKaGFXNTBMbUV1WVdOMGFYWmhkR1VvS1R0Y2JpQWdhV1lnS0dOdmJuTjBjbUZwYm5RdVlpa2dZMjl1YzNSeVlXbHVkQzVpTG1GamRHbDJZWFJsS0NrN1hHNTlPMXh1WEc1d2RXSnNhV05mWm5WdVkzUnBiMjV6TG5Oc2FXUmxjbDlrYVhOaFlteGxRVzVuZFd4aGNrMXZkRzl5SUQwZ0tIQmhjbUZ0Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0JqYjI1emRISmhhVzUwSUQwZ1gyTnZibk4wY21GcGJuUnpXM0JoY21GdGN5NWpiMjV6ZEhKaGFXNTBYVHRjYmlBZ1kyOXVjM1J5WVdsdWRDNXpaWFJRYjNkbGNtVmtRVzVuVFc5MGIzSW9abUZzYzJVcE8xeHVJQ0JqYjI1emRISmhhVzUwTG1FdVlXTjBhWFpoZEdVb0tUdGNiaUFnYVdZZ0tHTnZibk4wY21GcGJuUXVZaWtnWTI5dWMzUnlZV2x1ZEM1aUxtRmpkR2wyWVhSbEtDazdYRzU5TzF4dVhHNXdkV0pzYVdOZlpuVnVZM1JwYjI1ekxtTnZibVYwZDJsemRGOXpaWFJNYVcxcGRDQTlJQ2h3WVhKaGJYTXBJRDArSUh0Y2JpQWdYMk52Ym5OMGNtRnBiblJ6VzNCaGNtRnRjeTVqYjI1emRISmhhVzUwWFM1elpYUk1hVzFwZENod1lYSmhiWE11ZWl3Z2NHRnlZVzF6TG5rc0lIQmhjbUZ0Y3k1NEtUc2dMeThnV2xsWUlHOXlaR1Z5WEc1OU8xeHVYRzV3ZFdKc2FXTmZablZ1WTNScGIyNXpMbU52Ym1WMGQybHpkRjlsYm1GaWJHVk5iM1J2Y2lBOUlDaHdZWEpoYlhNcElEMCtJSHRjYmlBZ1kyOXVjM1FnWTI5dWMzUnlZV2x1ZENBOUlGOWpiMjV6ZEhKaGFXNTBjMXR3WVhKaGJYTXVZMjl1YzNSeVlXbHVkRjA3WEc0Z0lHTnZibk4wY21GcGJuUXVaVzVoWW14bFRXOTBiM0lvZEhKMVpTazdYRzRnSUdOdmJuTjBjbUZwYm5RdVlTNWhZM1JwZG1GMFpTZ3BPMXh1SUNCamIyNXpkSEpoYVc1MExtSXVZV04wYVhaaGRHVW9LVHRjYm4wN1hHNWNibkIxWW14cFkxOW1kVzVqZEdsdmJuTXVZMjl1WlhSM2FYTjBYM05sZEUxaGVFMXZkRzl5U1cxd2RXeHpaU0E5SUNod1lYSmhiWE1wSUQwK0lIdGNiaUFnWTI5dWMzUWdZMjl1YzNSeVlXbHVkQ0E5SUY5amIyNXpkSEpoYVc1MGMxdHdZWEpoYlhNdVkyOXVjM1J5WVdsdWRGMDdYRzRnSUdOdmJuTjBjbUZwYm5RdWMyVjBUV0Y0VFc5MGIzSkpiWEIxYkhObEtIQmhjbUZ0Y3k1dFlYaGZhVzF3ZFd4elpTazdYRzRnSUdOdmJuTjBjbUZwYm5RdVlTNWhZM1JwZG1GMFpTZ3BPMXh1SUNCamIyNXpkSEpoYVc1MExtSXVZV04wYVhaaGRHVW9LVHRjYm4wN1hHNWNibkIxWW14cFkxOW1kVzVqZEdsdmJuTXVZMjl1WlhSM2FYTjBYM05sZEUxdmRHOXlWR0Z5WjJWMElEMGdLSEJoY21GdGN5a2dQVDRnZTF4dUlDQmpiMjV6ZENCamIyNXpkSEpoYVc1MElEMGdYMk52Ym5OMGNtRnBiblJ6VzNCaGNtRnRjeTVqYjI1emRISmhhVzUwWFR0Y2JseHVJQ0JmY1hWaGRDNXpaWFJZS0hCaGNtRnRjeTU0S1R0Y2JpQWdYM0YxWVhRdWMyVjBXU2h3WVhKaGJYTXVlU2s3WEc0Z0lGOXhkV0YwTG5ObGRGb29jR0Z5WVcxekxub3BPMXh1SUNCZmNYVmhkQzV6WlhSWEtIQmhjbUZ0Y3k1M0tUdGNibHh1SUNCamIyNXpkSEpoYVc1MExuTmxkRTF2ZEc5eVZHRnlaMlYwS0Y5eGRXRjBLVHRjYmx4dUlDQmpiMjV6ZEhKaGFXNTBMbUV1WVdOMGFYWmhkR1VvS1R0Y2JpQWdZMjl1YzNSeVlXbHVkQzVpTG1GamRHbDJZWFJsS0NrN1hHNTlPMXh1WEc1d2RXSnNhV05mWm5WdVkzUnBiMjV6TG1OdmJtVjBkMmx6ZEY5a2FYTmhZbXhsVFc5MGIzSWdQU0FvY0dGeVlXMXpLU0E5UGlCN1hHNGdJR052Ym5OMElHTnZibk4wY21GcGJuUWdQU0JmWTI5dWMzUnlZV2x1ZEhOYmNHRnlZVzF6TG1OdmJuTjBjbUZwYm5SZE8xeHVJQ0JqYjI1emRISmhhVzUwTG1WdVlXSnNaVTF2ZEc5eUtHWmhiSE5sS1R0Y2JpQWdZMjl1YzNSeVlXbHVkQzVoTG1GamRHbDJZWFJsS0NrN1hHNGdJR052Ym5OMGNtRnBiblF1WWk1aFkzUnBkbUYwWlNncE8xeHVmVHRjYmx4dWNIVmliR2xqWDJaMWJtTjBhVzl1Y3k1a2IyWmZjMlYwVEdsdVpXRnlURzkzWlhKTWFXMXBkQ0E5SUNod1lYSmhiWE1wSUQwK0lIdGNiaUFnWTI5dWMzUWdZMjl1YzNSeVlXbHVkQ0E5SUY5amIyNXpkSEpoYVc1MGMxdHdZWEpoYlhNdVkyOXVjM1J5WVdsdWRGMDdYRzVjYmlBZ1gzWmxZek5mTVM1elpYUllLSEJoY21GdGN5NTRLVHRjYmlBZ1gzWmxZek5mTVM1elpYUlpLSEJoY21GdGN5NTVLVHRjYmlBZ1gzWmxZek5mTVM1elpYUmFLSEJoY21GdGN5NTZLVHRjYmx4dUlDQmpiMjV6ZEhKaGFXNTBMbk5sZEV4cGJtVmhja3h2ZDJWeVRHbHRhWFFvWDNabFl6TmZNU2s3WEc0Z0lHTnZibk4wY21GcGJuUXVZUzVoWTNScGRtRjBaU2dwTzF4dVhHNGdJR2xtSUNoamIyNXpkSEpoYVc1MExtSXBJR052Ym5OMGNtRnBiblF1WWk1aFkzUnBkbUYwWlNncE8xeHVmVHRjYmx4dWNIVmliR2xqWDJaMWJtTjBhVzl1Y3k1a2IyWmZjMlYwVEdsdVpXRnlWWEJ3WlhKTWFXMXBkQ0E5SUNod1lYSmhiWE1wSUQwK0lIdGNiaUFnWTI5dWMzUWdZMjl1YzNSeVlXbHVkQ0E5SUY5amIyNXpkSEpoYVc1MGMxdHdZWEpoYlhNdVkyOXVjM1J5WVdsdWRGMDdYRzVjYmlBZ1gzWmxZek5mTVM1elpYUllLSEJoY21GdGN5NTRLVHRjYmlBZ1gzWmxZek5mTVM1elpYUlpLSEJoY21GdGN5NTVLVHRjYmlBZ1gzWmxZek5mTVM1elpYUmFLSEJoY21GdGN5NTZLVHRjYmx4dUlDQmpiMjV6ZEhKaGFXNTBMbk5sZEV4cGJtVmhjbFZ3Y0dWeVRHbHRhWFFvWDNabFl6TmZNU2s3WEc0Z0lHTnZibk4wY21GcGJuUXVZUzVoWTNScGRtRjBaU2dwTzF4dVhHNGdJR2xtSUNoamIyNXpkSEpoYVc1MExtSXBJR052Ym5OMGNtRnBiblF1WWk1aFkzUnBkbUYwWlNncE8xeHVmVHRjYmx4dWNIVmliR2xqWDJaMWJtTjBhVzl1Y3k1a2IyWmZjMlYwUVc1bmRXeGhja3h2ZDJWeVRHbHRhWFFnUFNBb2NHRnlZVzF6S1NBOVBpQjdYRzRnSUdOdmJuTjBJR052Ym5OMGNtRnBiblFnUFNCZlkyOXVjM1J5WVdsdWRITmJjR0Z5WVcxekxtTnZibk4wY21GcGJuUmRPMXh1WEc0Z0lGOTJaV016WHpFdWMyVjBXQ2h3WVhKaGJYTXVlQ2s3WEc0Z0lGOTJaV016WHpFdWMyVjBXU2h3WVhKaGJYTXVlU2s3WEc0Z0lGOTJaV016WHpFdWMyVjBXaWh3WVhKaGJYTXVlaWs3WEc1Y2JpQWdZMjl1YzNSeVlXbHVkQzV6WlhSQmJtZDFiR0Z5VEc5M1pYSk1hVzFwZENoZmRtVmpNMTh4S1R0Y2JpQWdZMjl1YzNSeVlXbHVkQzVoTG1GamRHbDJZWFJsS0NrN1hHNWNiaUFnYVdZZ0tHTnZibk4wY21GcGJuUXVZaWtnWTI5dWMzUnlZV2x1ZEM1aUxtRmpkR2wyWVhSbEtDazdYRzU5TzF4dVhHNXdkV0pzYVdOZlpuVnVZM1JwYjI1ekxtUnZabDl6WlhSQmJtZDFiR0Z5VlhCd1pYSk1hVzFwZENBOUlDaHdZWEpoYlhNcElEMCtJSHRjYmlBZ1kyOXVjM1FnWTI5dWMzUnlZV2x1ZENBOUlGOWpiMjV6ZEhKaGFXNTBjMXR3WVhKaGJYTXVZMjl1YzNSeVlXbHVkRjA3WEc1Y2JpQWdYM1psWXpOZk1TNXpaWFJZS0hCaGNtRnRjeTU0S1R0Y2JpQWdYM1psWXpOZk1TNXpaWFJaS0hCaGNtRnRjeTU1S1R0Y2JpQWdYM1psWXpOZk1TNXpaWFJhS0hCaGNtRnRjeTU2S1R0Y2JseHVJQ0JqYjI1emRISmhhVzUwTG5ObGRFRnVaM1ZzWVhKVmNIQmxja3hwYldsMEtGOTJaV016WHpFcE8xeHVJQ0JqYjI1emRISmhhVzUwTG1FdVlXTjBhWFpoZEdVb0tUdGNibHh1SUNCcFppQW9ZMjl1YzNSeVlXbHVkQzVpS1NCamIyNXpkSEpoYVc1MExtSXVZV04wYVhaaGRHVW9LVHRjYm4wN1hHNWNibkIxWW14cFkxOW1kVzVqZEdsdmJuTXVaRzltWDJWdVlXSnNaVUZ1WjNWc1lYSk5iM1J2Y2lBOUlDaHdZWEpoYlhNcElEMCtJSHRjYmlBZ1kyOXVjM1FnWTI5dWMzUnlZV2x1ZENBOUlGOWpiMjV6ZEhKaGFXNTBjMXR3WVhKaGJYTXVZMjl1YzNSeVlXbHVkRjA3WEc1Y2JpQWdZMjl1YzNRZ2JXOTBiM0lnUFNCamIyNXpkSEpoYVc1MExtZGxkRkp2ZEdGMGFXOXVZV3hNYVcxcGRFMXZkRzl5S0hCaGNtRnRjeTUzYUdsamFDazdYRzRnSUcxdmRHOXlMbk5sZEY5dFgyVnVZV0pzWlUxdmRHOXlLSFJ5ZFdVcE8xeHVJQ0JqYjI1emRISmhhVzUwTG1FdVlXTjBhWFpoZEdVb0tUdGNibHh1SUNCcFppQW9ZMjl1YzNSeVlXbHVkQzVpS1NCamIyNXpkSEpoYVc1MExtSXVZV04wYVhaaGRHVW9LVHRjYm4wN1hHNWNibkIxWW14cFkxOW1kVzVqZEdsdmJuTXVaRzltWDJOdmJtWnBaM1Z5WlVGdVozVnNZWEpOYjNSdmNpQTlJQ2h3WVhKaGJYTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ1kyOXVjM1J5WVdsdWRDQTlJRjlqYjI1emRISmhhVzUwYzF0d1lYSmhiWE11WTI5dWMzUnlZV2x1ZEYwc1hHNGdJQ0FnYlc5MGIzSWdQU0JqYjI1emRISmhhVzUwTG1kbGRGSnZkR0YwYVc5dVlXeE1hVzFwZEUxdmRHOXlLSEJoY21GdGN5NTNhR2xqYUNrN1hHNWNiaUFnYlc5MGIzSXVjMlYwWDIxZmJHOU1hVzFwZENod1lYSmhiWE11Ykc5M1gyRnVaMnhsS1R0Y2JpQWdiVzkwYjNJdWMyVjBYMjFmYUdsTWFXMXBkQ2h3WVhKaGJYTXVhR2xuYUY5aGJtZHNaU2s3WEc0Z0lHMXZkRzl5TG5ObGRGOXRYM1JoY21kbGRGWmxiRzlqYVhSNUtIQmhjbUZ0Y3k1MlpXeHZZMmwwZVNrN1hHNGdJRzF2ZEc5eUxuTmxkRjl0WDIxaGVFMXZkRzl5Um05eVkyVW9jR0Z5WVcxekxtMWhlRjltYjNKalpTazdYRzRnSUdOdmJuTjBjbUZwYm5RdVlTNWhZM1JwZG1GMFpTZ3BPMXh1WEc0Z0lHbG1JQ2hqYjI1emRISmhhVzUwTG1JcElHTnZibk4wY21GcGJuUXVZaTVoWTNScGRtRjBaU2dwTzF4dWZUdGNibHh1Y0hWaWJHbGpYMloxYm1OMGFXOXVjeTVrYjJaZlpHbHpZV0pzWlVGdVozVnNZWEpOYjNSdmNpQTlJQ2h3WVhKaGJYTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ1kyOXVjM1J5WVdsdWRDQTlJRjlqYjI1emRISmhhVzUwYzF0d1lYSmhiWE11WTI5dWMzUnlZV2x1ZEYwc1hHNGdJQ0FnYlc5MGIzSWdQU0JqYjI1emRISmhhVzUwTG1kbGRGSnZkR0YwYVc5dVlXeE1hVzFwZEUxdmRHOXlLSEJoY21GdGN5NTNhR2xqYUNrN1hHNWNiaUFnYlc5MGIzSXVjMlYwWDIxZlpXNWhZbXhsVFc5MGIzSW9abUZzYzJVcE8xeHVJQ0JqYjI1emRISmhhVzUwTG1FdVlXTjBhWFpoZEdVb0tUdGNibHh1SUNCcFppQW9ZMjl1YzNSeVlXbHVkQzVpS1NCamIyNXpkSEpoYVc1MExtSXVZV04wYVhaaGRHVW9LVHRjYm4wN1hHNWNibU52Ym5OMElISmxjRzl5ZEZkdmNteGtJRDBnS0NrZ1BUNGdlMXh1SUNCcFppQW9VMVZRVUU5U1ZGOVVVa0ZPVTBaRlVrRkNURVVnSmlZZ2QyOXliR1J5WlhCdmNuUXViR1Z1WjNSb0lEd2dNaUFySUY5dWRXMWZjbWxuYVdSaWIyUjVYMjlpYW1WamRITWdLaUJYVDFKTVJGSkZVRTlTVkY5SlZFVk5VMGxhUlNrZ2UxeHVJQ0FnSUhkdmNteGtjbVZ3YjNKMElEMGdibVYzSUVac2IyRjBNekpCY25KaGVTaGNiaUFnSUNBZ0lESXZMeUJ0WlhOellXZGxJR2xrSUNZZ0l5QnZZbXBsWTNSeklHbHVJSEpsY0c5eWRGeHVJQ0FnSUNBZ0t5QW9UV0YwYUM1alpXbHNLRjl1ZFcxZmNtbG5hV1JpYjJSNVgyOWlhbVZqZEhNZ0x5QlNSVkJQVWxSZlEwaFZUa3RUU1ZwRktTQXFJRkpGVUU5U1ZGOURTRlZPUzFOSldrVXBJQ29nVjA5U1RFUlNSVkJQVWxSZlNWUkZUVk5KV2tVZ0x5OGdJeUJ2WmlCMllXeDFaWE1nYm1WbFpHVmtJQ29nYVhSbGJTQnphWHBsWEc0Z0lDQWdLVHRjYmx4dUlDQWdJSGR2Y214a2NtVndiM0owV3pCZElEMGdUVVZUVTBGSFJWOVVXVkJGVXk1WFQxSk1SRkpGVUU5U1ZEdGNiaUFnZlZ4dVhHNGdJSGR2Y214a2NtVndiM0owV3pGZElEMGdYMjUxYlY5eWFXZHBaR0p2WkhsZmIySnFaV04wY3pzZ0x5OGdjbVZqYjNKa0lHaHZkeUJ0WVc1NUlHOWlhbVZqZEhNZ2QyVW5jbVVnY21Wd2IzSjBhVzVuSUc5dVhHNWNiaUFnZTF4dUlDQWdJR3hsZENCcElEMGdNQ3hjYmlBZ0lDQWdJR2x1WkdWNElEMGdYMjlpYW1WamRITXViR1Z1WjNSb08xeHVYRzRnSUNBZ2QyaHBiR1VnS0dsdVpHVjRMUzBwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRzlpYW1WamRDQTlJRjl2WW1wbFkzUnpXMmx1WkdWNFhUdGNibHh1SUNBZ0lDQWdhV1lnS0c5aWFtVmpkQ0FtSmlCdlltcGxZM1F1ZEhsd1pTQTlQVDBnTVNrZ2V5QXZMeUJTYVdkcFpFSnZaR2xsY3k1Y2JpQWdJQ0FnSUNBZ0x5OGdJMVJQUkU4NklIZGxJR05oYmlkMElIVnpaU0JqWlc1MFpYSWdiMllnYldGemN5QjBjbUZ1YzJadmNtMGdkMmhsYmlCalpXNTBaWElnYjJZZ2JXRnpjeUJqWVc0Z1kyaGhibWRsTEZ4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnSUNBZ1luVjBJR2RsZEUxdmRHbHZibE4wWVhSbEtDa3VaMlYwVjI5eWJHUlVjbUZ1YzJadmNtMG9LU0J6WTNKbGQzTWdkWEFnYjI0Z2IySnFaV04wY3lCMGFHRjBJR2hoZG1VZ1ltVmxiaUJ0YjNabFpGeHVJQ0FnSUNBZ0lDQXZMeUJ2WW1wbFkzUXVaMlYwVFc5MGFXOXVVM1JoZEdVb0tTNW5aWFJYYjNKc1pGUnlZVzV6Wm05eWJTZ2dkSEpoYm5ObWIzSnRJQ2s3WEc0Z0lDQWdJQ0FnSUM4dklHOWlhbVZqZEM1blpYUk5iM1JwYjI1VGRHRjBaU2dwTG1kbGRGZHZjbXhrVkhKaGJuTm1iM0p0S0Y5MGNtRnVjMlp2Y20wcE8xeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElIUnlZVzV6Wm05eWJTQTlJRzlpYW1WamRDNW5aWFJEWlc1MFpYSlBaazFoYzNOVWNtRnVjMlp2Y20wb0tUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2IzSnBaMmx1SUQwZ2RISmhibk5tYjNKdExtZGxkRTl5YVdkcGJpZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnliM1JoZEdsdmJpQTlJSFJ5WVc1elptOXliUzVuWlhSU2IzUmhkR2x2YmlncE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUdGa1pDQjJZV3gxWlhNZ2RHOGdjbVZ3YjNKMFhHNGdJQ0FnSUNBZ0lHTnZibk4wSUc5bVpuTmxkQ0E5SURJZ0t5QW9hU3NyS1NBcUlGZFBVa3hFVWtWUVQxSlVYMGxVUlUxVFNWcEZPMXh1WEc0Z0lDQWdJQ0FnSUhkdmNteGtjbVZ3YjNKMFcyOW1abk5sZEYwZ1BTQnZZbXBsWTNRdWFXUTdYRzVjYmlBZ0lDQWdJQ0FnZDI5eWJHUnlaWEJ2Y25SYmIyWm1jMlYwSUNzZ01WMGdQU0J2Y21sbmFXNHVlQ2dwTzF4dUlDQWdJQ0FnSUNCM2IzSnNaSEpsY0c5eWRGdHZabVp6WlhRZ0t5QXlYU0E5SUc5eWFXZHBiaTU1S0NrN1hHNGdJQ0FnSUNBZ0lIZHZjbXhrY21Wd2IzSjBXMjltWm5ObGRDQXJJRE5kSUQwZ2IzSnBaMmx1TG5vb0tUdGNibHh1SUNBZ0lDQWdJQ0IzYjNKc1pISmxjRzl5ZEZ0dlptWnpaWFFnS3lBMFhTQTlJSEp2ZEdGMGFXOXVMbmdvS1R0Y2JpQWdJQ0FnSUNBZ2QyOXliR1J5WlhCdmNuUmJiMlptYzJWMElDc2dOVjBnUFNCeWIzUmhkR2x2Ymk1NUtDazdYRzRnSUNBZ0lDQWdJSGR2Y214a2NtVndiM0owVzI5bVpuTmxkQ0FySURaZElEMGdjbTkwWVhScGIyNHVlaWdwTzF4dUlDQWdJQ0FnSUNCM2IzSnNaSEpsY0c5eWRGdHZabVp6WlhRZ0t5QTNYU0E5SUhKdmRHRjBhVzl1TG5jb0tUdGNibHh1SUNBZ0lDQWdJQ0JmZG1WamRHOXlJRDBnYjJKcVpXTjBMbWRsZEV4cGJtVmhjbFpsYkc5amFYUjVLQ2s3WEc0Z0lDQWdJQ0FnSUhkdmNteGtjbVZ3YjNKMFcyOW1abk5sZENBcklEaGRJRDBnWDNabFkzUnZjaTU0S0NrN1hHNGdJQ0FnSUNBZ0lIZHZjbXhrY21Wd2IzSjBXMjltWm5ObGRDQXJJRGxkSUQwZ1gzWmxZM1J2Y2k1NUtDazdYRzRnSUNBZ0lDQWdJSGR2Y214a2NtVndiM0owVzI5bVpuTmxkQ0FySURFd1hTQTlJRjkyWldOMGIzSXVlaWdwTzF4dVhHNGdJQ0FnSUNBZ0lGOTJaV04wYjNJZ1BTQnZZbXBsWTNRdVoyVjBRVzVuZFd4aGNsWmxiRzlqYVhSNUtDazdYRzRnSUNBZ0lDQWdJSGR2Y214a2NtVndiM0owVzI5bVpuTmxkQ0FySURFeFhTQTlJRjkyWldOMGIzSXVlQ2dwTzF4dUlDQWdJQ0FnSUNCM2IzSnNaSEpsY0c5eWRGdHZabVp6WlhRZ0t5QXhNbDBnUFNCZmRtVmpkRzl5TG5rb0tUdGNiaUFnSUNBZ0lDQWdkMjl5YkdSeVpYQnZjblJiYjJabWMyVjBJQ3NnTVROZElEMGdYM1psWTNSdmNpNTZLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tGTlZVRkJQVWxSZlZGSkJUbE5HUlZKQlFreEZLU0IwY21GdWMyWmxjbUZpYkdWTlpYTnpZV2RsS0hkdmNteGtjbVZ3YjNKMExtSjFabVpsY2l3Z1czZHZjbXhrY21Wd2IzSjBMbUoxWm1abGNsMHBPMXh1SUNCbGJITmxJSFJ5WVc1elptVnlZV0pzWlUxbGMzTmhaMlVvZDI5eWJHUnlaWEJ2Y25RcE8xeHVmVHRjYmx4dVkyOXVjM1FnY21Wd2IzSjBWMjl5YkdSZmMyOW1kR0p2WkdsbGN5QTlJQ2dwSUQwK0lIdGNiaUFnTHk4Z1ZFOUVUem9nUVdSa0lGTlZVRkJQVWxSVVVrRk9VMFpGVWtGQ1RFVXVYRzVjYmlBZ2MyOW1kSEpsY0c5eWRDQTlJRzVsZHlCR2JHOWhkRE15UVhKeVlYa29YRzRnSUNBZ01pQXZMeUJ0WlhOellXZGxJR2xrSUNZZ0l5QnZZbXBsWTNSeklHbHVJSEpsY0c5eWRGeHVJQ0FnSUNzZ1gyNTFiVjl6YjJaMFltOWtlVjl2WW1wbFkzUnpJQ29nTWx4dUlDQWdJQ3NnWDNOdlpuUmliMlI1WDNKbGNHOXlkRjl6YVhwbElDb2dObHh1SUNBcE8xeHVYRzRnSUhOdlpuUnlaWEJ2Y25SYk1GMGdQU0JOUlZOVFFVZEZYMVJaVUVWVExsTlBSbFJTUlZCUFVsUTdYRzRnSUhOdlpuUnlaWEJ2Y25SYk1WMGdQU0JmYm5WdFgzTnZablJpYjJSNVgyOWlhbVZqZEhNN0lDOHZJSEpsWTI5eVpDQm9iM2NnYldGdWVTQnZZbXBsWTNSeklIZGxKM0psSUhKbGNHOXlkR2x1WnlCdmJseHVYRzRnSUh0Y2JpQWdJQ0JzWlhRZ2IyWm1jMlYwSUQwZ01peGNiaUFnSUNBZ0lHbHVaR1Y0SUQwZ1gyOWlhbVZqZEhNdWJHVnVaM1JvTzF4dVhHNGdJQ0FnZDJocGJHVWdLR2x1WkdWNExTMHBJSHRjYmlBZ0lDQWdJR052Ym5OMElHOWlhbVZqZENBOUlGOXZZbXBsWTNSelcybHVaR1Y0WFR0Y2JseHVJQ0FnSUNBZ2FXWWdLRzlpYW1WamRDQW1KaUJ2WW1wbFkzUXVkSGx3WlNBOVBUMGdNQ2tnZXlBdkx5QlRiMlowUW05a2FXVnpMbHh1WEc0Z0lDQWdJQ0FnSUhOdlpuUnlaWEJ2Y25SYmIyWm1jMlYwWFNBOUlHOWlhbVZqZEM1cFpEdGNibHh1SUNBZ0lDQWdJQ0JqYjI1emRDQnZabVp6WlhSV1pYSjBJRDBnYjJabWMyVjBJQ3NnTWp0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYjJKcVpXTjBMbkp2Y0dVZ1BUMDlJSFJ5ZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1emRDQnViMlJsY3lBOUlHOWlhbVZqZEM1blpYUmZiVjl1YjJSbGN5Z3BPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSE5wZW1VZ1BTQnViMlJsY3k1emFYcGxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2MyOW1kSEpsY0c5eWRGdHZabVp6WlhRZ0t5QXhYU0E5SUhOcGVtVTdYRzVjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElITnBlbVU3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYm05a1pTQTlJRzV2WkdWekxtRjBLR2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtVnlkQ0E5SUc1dlpHVXVaMlYwWDIxZmVDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYjJabUlEMGdiMlptYzJWMFZtVnlkQ0FySUdrZ0tpQXpPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpiMlowY21Wd2IzSjBXMjltWmwwZ1BTQjJaWEowTG5nb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOdlpuUnlaWEJ2Y25SYmIyWm1JQ3NnTVYwZ1BTQjJaWEowTG5rb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOdlpuUnlaWEJ2Y25SYmIyWm1JQ3NnTWwwZ1BTQjJaWEowTG5vb0tUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQnZabVp6WlhRZ0t6MGdjMmw2WlNBcUlEWWdLeUF5TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlVnYVdZZ0tHOWlhbVZqZEM1amJHOTBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZibk4wSUc1dlpHVnpJRDBnYjJKcVpXTjBMbWRsZEY5dFgyNXZaR1Z6S0NrN1hHNGdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MybDZaU0E5SUc1dlpHVnpMbk5wZW1Vb0tUdGNiaUFnSUNBZ0lDQWdJQ0J6YjJaMGNtVndiM0owVzI5bVpuTmxkQ0FySURGZElEMGdjMmw2WlR0Y2JseHVJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYzJsNlpUc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnViMlJsSUQwZ2JtOWtaWE11WVhRb2FTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWlhKMElEMGdibTlrWlM1blpYUmZiVjk0S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnViM0p0WVd3Z1BTQnViMlJsTG1kbGRGOXRYMjRvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHOW1aaUE5SUc5bVpuTmxkRlpsY25RZ0t5QnBJQ29nTmp0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYzI5bWRISmxjRzl5ZEZ0dlptWmRJRDBnZG1WeWRDNTRLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpiMlowY21Wd2IzSjBXMjltWmlBcklERmRJRDBnZG1WeWRDNTVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpiMlowY21Wd2IzSjBXMjltWmlBcklESmRJRDBnZG1WeWRDNTZLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSE52Wm5SeVpYQnZjblJiYjJabUlDc2dNMTBnUFNCdWIzSnRZV3d1ZUNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYzI5bWRISmxjRzl5ZEZ0dlptWWdLeUEwWFNBOUlHNXZjbTFoYkM1NUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCemIyWjBjbVZ3YjNKMFcyOW1aaUFySURWZElEMGdibTl5YldGc0xub29LVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0J2Wm1aelpYUWdLejBnYzJsNlpTQXFJRFlnS3lBeU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJR052Ym5OMElHWmhZMlZ6SUQwZ2IySnFaV04wTG1kbGRGOXRYMlpoWTJWektDazdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjMmw2WlNBOUlHWmhZMlZ6TG5OcGVtVW9LVHRjYmlBZ0lDQWdJQ0FnSUNCemIyWjBjbVZ3YjNKMFcyOW1abk5sZENBcklERmRJRDBnYzJsNlpUdGNibHh1SUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2MybDZaVHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JtWVdObElEMGdabUZqWlhNdVlYUW9hU2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHNXZaR1V4SUQwZ1ptRmpaUzVuWlhSZmJWOXVLREFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2JtOWtaVElnUFNCbVlXTmxMbWRsZEY5dFgyNG9NU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCdWIyUmxNeUE5SUdaaFkyVXVaMlYwWDIxZmJpZ3lLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtVnlkREVnUFNCdWIyUmxNUzVuWlhSZmJWOTRLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMlpYSjBNaUE5SUc1dlpHVXlMbWRsZEY5dFgzZ29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhabGNuUXpJRDBnYm05a1pUTXVaMlYwWDIxZmVDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCdWIzSnRZV3d4SUQwZ2JtOWtaVEV1WjJWMFgyMWZiaWdwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2JtOXliV0ZzTWlBOUlHNXZaR1V5TG1kbGRGOXRYMjRvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHNXZjbTFoYkRNZ1BTQnViMlJsTXk1blpYUmZiVjl1S0NrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzltWmlBOUlHOW1abk5sZEZabGNuUWdLeUJwSUNvZ01UZzdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lITnZablJ5WlhCdmNuUmJiMlptWFNBOUlIWmxjblF4TG5nb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOdlpuUnlaWEJ2Y25SYmIyWm1JQ3NnTVYwZ1BTQjJaWEowTVM1NUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCemIyWjBjbVZ3YjNKMFcyOW1aaUFySURKZElEMGdkbVZ5ZERFdWVpZ3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpiMlowY21Wd2IzSjBXMjltWmlBcklETmRJRDBnYm05eWJXRnNNUzU0S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6YjJaMGNtVndiM0owVzI5bVppQXJJRFJkSUQwZ2JtOXliV0ZzTVM1NUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCemIyWjBjbVZ3YjNKMFcyOW1aaUFySURWZElEMGdibTl5YldGc01TNTZLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSE52Wm5SeVpYQnZjblJiYjJabUlDc2dObDBnUFNCMlpYSjBNaTU0S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6YjJaMGNtVndiM0owVzI5bVppQXJJRGRkSUQwZ2RtVnlkREl1ZVNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYzI5bWRISmxjRzl5ZEZ0dlptWWdLeUE0WFNBOUlIWmxjblF5TG5vb0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyOW1kSEpsY0c5eWRGdHZabVlnS3lBNVhTQTlJRzV2Y20xaGJESXVlQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjMjltZEhKbGNHOXlkRnR2Wm1ZZ0t5QXhNRjBnUFNCdWIzSnRZV3d5TG5rb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOdlpuUnlaWEJ2Y25SYmIyWm1JQ3NnTVRGZElEMGdibTl5YldGc01pNTZLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSE52Wm5SeVpYQnZjblJiYjJabUlDc2dNVEpkSUQwZ2RtVnlkRE11ZUNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYzI5bWRISmxjRzl5ZEZ0dlptWWdLeUF4TTEwZ1BTQjJaWEowTXk1NUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCemIyWjBjbVZ3YjNKMFcyOW1aaUFySURFMFhTQTlJSFpsY25Rekxub29LVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdjMjltZEhKbGNHOXlkRnR2Wm1ZZ0t5QXhOVjBnUFNCdWIzSnRZV3d6TG5nb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOdlpuUnlaWEJ2Y25SYmIyWm1JQ3NnTVRaZElEMGdibTl5YldGc015NTVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpiMlowY21Wd2IzSjBXMjltWmlBcklERTNYU0E5SUc1dmNtMWhiRE11ZWlncE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lHOW1abk5sZENBclBTQnphWHBsSUNvZ01UZ2dLeUF5TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5OGdhV1lnS0ZOVlVGQlBVbFJmVkZKQlRsTkdSVkpCUWt4RktTQjBjbUZ1YzJabGNtRmliR1ZOWlhOellXZGxLSE52Wm5SeVpYQnZjblF1WW5WbVptVnlMQ0JiYzI5bWRISmxjRzl5ZEM1aWRXWm1aWEpkS1R0Y2JpQWdMeThnWld4elpTQjBjbUZ1YzJabGNtRmliR1ZOWlhOellXZGxLSE52Wm5SeVpYQnZjblFwTzF4dUlDQjBjbUZ1YzJabGNtRmliR1ZOWlhOellXZGxLSE52Wm5SeVpYQnZjblFwTzF4dWZUdGNibHh1WTI5dWMzUWdjbVZ3YjNKMFEyOXNiR2x6YVc5dWN5QTlJQ2dwSUQwK0lIdGNiaUFnWTI5dWMzUWdaSEFnUFNCM2IzSnNaQzVuWlhSRWFYTndZWFJqYUdWeUtDa3NYRzRnSUNBZ2JuVnRJRDBnWkhBdVoyVjBUblZ0VFdGdWFXWnZiR1J6S0NrN1hHNGdJQ0FnTHk4Z1gyTnZiR3hwWkdWa0lEMGdabUZzYzJVN1hHNWNiaUFnYVdZZ0tGTlZVRkJQVWxSZlZGSkJUbE5HUlZKQlFreEZLU0I3WEc0Z0lDQWdhV1lnS0dOdmJHeHBjMmx2Ym5KbGNHOXlkQzVzWlc1bmRHZ2dQQ0F5SUNzZ2JuVnRJQ29nUTA5TVRFbFRTVTlPVWtWUVQxSlVYMGxVUlUxVFNWcEZLU0I3WEc0Z0lDQWdJQ0JqYjJ4c2FYTnBiMjV5WlhCdmNuUWdQU0J1WlhjZ1JteHZZWFF6TWtGeWNtRjVLRnh1SUNBZ0lDQWdJQ0F5SUM4dklHMWxjM05oWjJVZ2FXUWdKaUFqSUc5aWFtVmpkSE1nYVc0Z2NtVndiM0owWEc0Z0lDQWdJQ0FnSUNzZ0tFMWhkR2d1WTJWcGJDaGZiblZ0WDI5aWFtVmpkSE1nTHlCU1JWQlBVbFJmUTBoVlRrdFRTVnBGS1NBcUlGSkZVRTlTVkY5RFNGVk9TMU5KV2tVcElDb2dRMDlNVEVsVFNVOU9Va1ZRVDFKVVgwbFVSVTFUU1ZwRklDOHZJQ01nYjJZZ2RtRnNkV1Z6SUc1bFpXUmxaQ0FxSUdsMFpXMGdjMmw2WlZ4dUlDQWdJQ0FnS1R0Y2JpQWdJQ0FnSUdOdmJHeHBjMmx2Ym5KbGNHOXlkRnN3WFNBOUlFMUZVMU5CUjBWZlZGbFFSVk11UTA5TVRFbFRTVTlPVWtWUVQxSlVPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR052Ykd4cGMybHZibkpsY0c5eWRGc3hYU0E5SURBN0lDOHZJR2h2ZHlCdFlXNTVJR052Ykd4cGMybHZibk1nZDJVbmNtVWdjbVZ3YjNKMGFXNW5JRzl1WEc1Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcwN0lHa3JLeWtnZTF4dUlDQWdJR052Ym5OMElHMWhibWxtYjJ4a0lEMGdaSEF1WjJWMFRXRnVhV1p2YkdSQ2VVbHVaR1Y0U1c1MFpYSnVZV3dvYVNrc1hHNGdJQ0FnSUNCdWRXMWZZMjl1ZEdGamRITWdQU0J0WVc1cFptOXNaQzVuWlhST2RXMURiMjUwWVdOMGN5Z3BPMXh1WEc0Z0lDQWdhV1lnS0c1MWJWOWpiMjUwWVdOMGN5QTlQVDBnTUNrZ1kyOXVkR2x1ZFdVN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcUlEMGdNRHNnYWlBOElHNTFiVjlqYjI1MFlXTjBjenNnYWlzcktTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCd2RDQTlJRzFoYm1sbWIyeGtMbWRsZEVOdmJuUmhZM1JRYjJsdWRDaHFLVHRjYmx4dUlDQWdJQ0FnTHk4Z2FXWWdLQ0J3ZEM1blpYUkVhWE4wWVc1alpTZ3BJRHdnTUNBcElIdGNiaUFnSUNBZ0lHTnZibk4wSUc5bVpuTmxkQ0E5SURJZ0t5QW9ZMjlzYkdsemFXOXVjbVZ3YjNKMFd6RmRLeXNwSUNvZ1EwOU1URWxUU1U5T1VrVlFUMUpVWDBsVVJVMVRTVnBGTzF4dUlDQWdJQ0FnWTI5c2JHbHphVzl1Y21Wd2IzSjBXMjltWm5ObGRGMGdQU0JmYjJKcVpXTjBjMTloYlcxdlcyMWhibWxtYjJ4a0xtZGxkRUp2Wkhrd0tDa3VjSFJ5WFR0Y2JpQWdJQ0FnSUdOdmJHeHBjMmx2Ym5KbGNHOXlkRnR2Wm1aelpYUWdLeUF4WFNBOUlGOXZZbXBsWTNSelgyRnRiVzliYldGdWFXWnZiR1F1WjJWMFFtOWtlVEVvS1M1d2RISmRPMXh1WEc0Z0lDQWdJQ0JmZG1WamRHOXlJRDBnY0hRdVoyVjBYMjFmYm05eWJXRnNWMjl5YkdSUGJrSW9LVHRjYmlBZ0lDQWdJR052Ykd4cGMybHZibkpsY0c5eWRGdHZabVp6WlhRZ0t5QXlYU0E5SUY5MlpXTjBiM0l1ZUNncE8xeHVJQ0FnSUNBZ1kyOXNiR2x6YVc5dWNtVndiM0owVzI5bVpuTmxkQ0FySUROZElEMGdYM1psWTNSdmNpNTVLQ2s3WEc0Z0lDQWdJQ0JqYjJ4c2FYTnBiMjV5WlhCdmNuUmJiMlptYzJWMElDc2dORjBnUFNCZmRtVmpkRzl5TG5vb0tUdGNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnTHk4Z2ZWeHVJQ0FnSUNBZ0x5OGdkSEpoYm5ObVpYSmhZbXhsVFdWemMyRm5aU2hmYjJKcVpXTjBjMTloYlcxdktUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnBaaUFvVTFWUVVFOVNWRjlVVWtGT1UwWkZVa0ZDVEVVcElIUnlZVzV6Wm1WeVlXSnNaVTFsYzNOaFoyVW9ZMjlzYkdsemFXOXVjbVZ3YjNKMExtSjFabVpsY2l3Z1cyTnZiR3hwYzJsdmJuSmxjRzl5ZEM1aWRXWm1aWEpkS1R0Y2JpQWdaV3h6WlNCMGNtRnVjMlpsY21GaWJHVk5aWE56WVdkbEtHTnZiR3hwYzJsdmJuSmxjRzl5ZENrN1hHNTlPMXh1WEc1amIyNXpkQ0J5WlhCdmNuUldaV2hwWTJ4bGN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdhV1lnS0ZOVlVGQlBVbFJmVkZKQlRsTkdSVkpCUWt4RktTQjdYRzRnSUNBZ2FXWWdLSFpsYUdsamJHVnlaWEJ2Y25RdWJHVnVaM1JvSUR3Z01pQXJJRjl1ZFcxZmQyaGxaV3h6SUNvZ1ZrVklTVU5NUlZKRlVFOVNWRjlKVkVWTlUwbGFSU2tnZTF4dUlDQWdJQ0FnZG1Wb2FXTnNaWEpsY0c5eWRDQTlJRzVsZHlCR2JHOWhkRE15UVhKeVlYa29YRzRnSUNBZ0lDQWdJRElnTHk4Z2JXVnpjMkZuWlNCcFpDQW1JQ01nYjJKcVpXTjBjeUJwYmlCeVpYQnZjblJjYmlBZ0lDQWdJQ0FnS3lBb1RXRjBhQzVqWldsc0tGOXVkVzFmZDJobFpXeHpJQzhnVWtWUVQxSlVYME5JVlU1TFUwbGFSU2tnS2lCU1JWQlBVbFJmUTBoVlRrdFRTVnBGS1NBcUlGWkZTRWxEVEVWU1JWQlBVbFJmU1ZSRlRWTkpXa1VnTHk4Z0l5QnZaaUIyWVd4MVpYTWdibVZsWkdWa0lDb2dhWFJsYlNCemFYcGxYRzRnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdkbVZvYVdOc1pYSmxjRzl5ZEZzd1hTQTlJRTFGVTFOQlIwVmZWRmxRUlZNdVZrVklTVU5NUlZKRlVFOVNWRHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0I3WEc0Z0lDQWdiR1YwSUdrZ1BTQXdMRnh1SUNBZ0lDQWdhaUE5SURBc1hHNGdJQ0FnSUNCcGJtUmxlQ0E5SUY5MlpXaHBZMnhsY3k1c1pXNW5kR2c3WEc1Y2JpQWdJQ0IzYUdsc1pTQW9hVzVrWlhndExTa2dlMXh1SUNBZ0lDQWdhV1lnS0Y5MlpXaHBZMnhsYzF0cGJtUmxlRjBwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Wb2FXTnNaU0E5SUY5MlpXaHBZMnhsYzF0cGJtUmxlRjA3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hxSUQwZ01Ec2dhaUE4SUhabGFHbGpiR1V1WjJWMFRuVnRWMmhsWld4ektDazdJR29yS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUhabGFHbGpiR1V1ZFhCa1lYUmxWMmhsWld4VWNtRnVjMlp2Y20wb0lHb3NJSFJ5ZFdVZ0tUdGNiaUFnSUNBZ0lDQWdJQ0F2THlCMGNtRnVjMlp2Y20wZ1BTQjJaV2hwWTJ4bExtZGxkRmRvWldWc1ZISmhibk5tYjNKdFYxTW9JR29nS1R0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMGNtRnVjMlp2Y20wZ1BTQjJaV2hwWTJ4bExtZGxkRmRvWldWc1NXNW1ieWhxS1M1blpYUmZiVjkzYjNKc1pGUnlZVzV6Wm05eWJTZ3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYjNKcFoybHVJRDBnZEhKaGJuTm1iM0p0TG1kbGRFOXlhV2RwYmlncE8xeHVJQ0FnSUNBZ0lDQWdJR052Ym5OMElISnZkR0YwYVc5dUlEMGdkSEpoYm5ObWIzSnRMbWRsZEZKdmRHRjBhVzl1S0NrN1hHNWNiaUFnSUNBZ0lDQWdJQ0F2THlCaFpHUWdkbUZzZFdWeklIUnZJSEpsY0c5eWRGeHVJQ0FnSUNBZ0lDQWdJR052Ym5OMElHOW1abk5sZENBOUlERWdLeUFvYVNzcktTQXFJRlpGU0VsRFRFVlNSVkJQVWxSZlNWUkZUVk5KV2tVN1hHNWNiaUFnSUNBZ0lDQWdJQ0IyWldocFkyeGxjbVZ3YjNKMFcyOW1abk5sZEYwZ1BTQnBibVJsZUR0Y2JpQWdJQ0FnSUNBZ0lDQjJaV2hwWTJ4bGNtVndiM0owVzI5bVpuTmxkQ0FySURGZElEMGdhanRjYmx4dUlDQWdJQ0FnSUNBZ0lIWmxhR2xqYkdWeVpYQnZjblJiYjJabWMyVjBJQ3NnTWwwZ1BTQnZjbWxuYVc0dWVDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUhabGFHbGpiR1Z5WlhCdmNuUmJiMlptYzJWMElDc2dNMTBnUFNCdmNtbG5hVzR1ZVNncE8xeHVJQ0FnSUNBZ0lDQWdJSFpsYUdsamJHVnlaWEJ2Y25SYmIyWm1jMlYwSUNzZ05GMGdQU0J2Y21sbmFXNHVlaWdwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdkbVZvYVdOc1pYSmxjRzl5ZEZ0dlptWnpaWFFnS3lBMVhTQTlJSEp2ZEdGMGFXOXVMbmdvS1R0Y2JpQWdJQ0FnSUNBZ0lDQjJaV2hwWTJ4bGNtVndiM0owVzI5bVpuTmxkQ0FySURaZElEMGdjbTkwWVhScGIyNHVlU2dwTzF4dUlDQWdJQ0FnSUNBZ0lIWmxhR2xqYkdWeVpYQnZjblJiYjJabWMyVjBJQ3NnTjEwZ1BTQnliM1JoZEdsdmJpNTZLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2RtVm9hV05zWlhKbGNHOXlkRnR2Wm1aelpYUWdLeUE0WFNBOUlISnZkR0YwYVc5dUxuY29LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoVFZWQlFUMUpVWDFSU1FVNVRSa1ZTUVVKTVJTQW1KaUJxSUNFOVBTQXdLU0IwY21GdWMyWmxjbUZpYkdWTlpYTnpZV2RsS0habGFHbGpiR1Z5WlhCdmNuUXVZblZtWm1WeUxDQmJkbVZvYVdOc1pYSmxjRzl5ZEM1aWRXWm1aWEpkS1R0Y2JpQWdJQ0JsYkhObElHbG1JQ2hxSUNFOVBTQXdLU0IwY21GdWMyWmxjbUZpYkdWTlpYTnpZV2RsS0habGFHbGpiR1Z5WlhCdmNuUXBPMXh1SUNCOVhHNTlPMXh1WEc1amIyNXpkQ0J5WlhCdmNuUkRiMjV6ZEhKaGFXNTBjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnYVdZZ0tGTlZVRkJQVWxSZlZGSkJUbE5HUlZKQlFreEZLU0I3WEc0Z0lDQWdhV1lnS0dOdmJuTjBjbUZwYm5SeVpYQnZjblF1YkdWdVozUm9JRHdnTWlBcklGOXVkVzFmWTI5dWMzUnlZV2x1ZEhNZ0tpQkRUMDVUVkZKQlNVNVVVa1ZRVDFKVVgwbFVSVTFUU1ZwRktTQjdYRzRnSUNBZ0lDQmpiMjV6ZEhKaGFXNTBjbVZ3YjNKMElEMGdibVYzSUVac2IyRjBNekpCY25KaGVTaGNiaUFnSUNBZ0lDQWdNaUF2THlCdFpYTnpZV2RsSUdsa0lDWWdJeUJ2WW1wbFkzUnpJR2x1SUhKbGNHOXlkRnh1SUNBZ0lDQWdJQ0FySUNoTllYUm9MbU5sYVd3b1gyNTFiVjlqYjI1emRISmhhVzUwY3lBdklGSkZVRTlTVkY5RFNGVk9TMU5KV2tVcElDb2dVa1ZRVDFKVVgwTklWVTVMVTBsYVJTa2dLaUJEVDA1VFZGSkJTVTVVVWtWUVQxSlVYMGxVUlUxVFNWcEZJQzh2SUNNZ2IyWWdkbUZzZFdWeklHNWxaV1JsWkNBcUlHbDBaVzBnYzJsNlpWeHVJQ0FnSUNBZ0tUdGNiaUFnSUNBZ0lHTnZibk4wY21GcGJuUnlaWEJ2Y25SYk1GMGdQU0JOUlZOVFFVZEZYMVJaVUVWVExrTlBUbE5VVWtGSlRsUlNSVkJQVWxRN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2UxeHVJQ0FnSUd4bGRDQnZabVp6WlhRZ1BTQXdMRnh1SUNBZ0lDQWdhU0E5SURBc1hHNGdJQ0FnSUNCcGJtUmxlQ0E5SUY5amIyNXpkSEpoYVc1MGN5NXNaVzVuYUhRN1hHNWNiaUFnSUNCM2FHbHNaU0FvYVc1a1pYZ3RMU2tnZTF4dUlDQWdJQ0FnYVdZZ0tGOWpiMjV6ZEhKaGFXNTBjMXRwYm1SbGVGMHBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZMjl1YzNSeVlXbHVkQ0E5SUY5amIyNXpkSEpoYVc1MGMxdHBibVJsZUYwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUc5bVpuTmxkRjlpYjJSNUlEMGdZMjl1YzNSeVlXbHVkQzVoTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwY21GdWMyWnZjbTBnUFNCamIyNXpkSEpoYVc1MExuUmhPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnZjbWxuYVc0Z1BTQjBjbUZ1YzJadmNtMHVaMlYwVDNKcFoybHVLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdZV1JrSUhaaGJIVmxjeUIwYnlCeVpYQnZjblJjYmlBZ0lDQWdJQ0FnYjJabWMyVjBJRDBnTVNBcklDaHBLeXNwSUNvZ1EwOU9VMVJTUVVsT1ZGSkZVRTlTVkY5SlZFVk5VMGxhUlR0Y2JseHVJQ0FnSUNBZ0lDQmpiMjV6ZEhKaGFXNTBjbVZ3YjNKMFcyOW1abk5sZEYwZ1BTQnBibVJsZUR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1J5WVdsdWRISmxjRzl5ZEZ0dlptWnpaWFFnS3lBeFhTQTlJRzltWm5ObGRGOWliMlI1TG1sa08xeHVJQ0FnSUNBZ0lDQmpiMjV6ZEhKaGFXNTBjbVZ3YjNKMFcyOW1abk5sZENBcklESmRJRDBnYjNKcFoybHVMbmc3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBjbUZwYm5SeVpYQnZjblJiYjJabWMyVjBJQ3NnTTEwZ1BTQnZjbWxuYVc0dWVUdGNiaUFnSUNBZ0lDQWdZMjl1YzNSeVlXbHVkSEpsY0c5eWRGdHZabVp6WlhRZ0t5QTBYU0E5SUc5eWFXZHBiaTU2TzF4dUlDQWdJQ0FnSUNCamIyNXpkSEpoYVc1MGNtVndiM0owVzI5bVpuTmxkQ0FySURWZElEMGdZMjl1YzNSeVlXbHVkQzVuWlhSQ2NtVmhhMmx1WjBsdGNIVnNjMlZVYUhKbGMyaHZiR1FvS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1UxVlFVRTlTVkY5VVVrRk9VMFpGVWtGQ1RFVWdKaVlnYVNBaFBUMGdNQ2tnZEhKaGJuTm1aWEpoWW14bFRXVnpjMkZuWlNoamIyNXpkSEpoYVc1MGNtVndiM0owTG1KMVptWmxjaXdnVzJOdmJuTjBjbUZwYm5SeVpYQnZjblF1WW5WbVptVnlYU2s3WEc0Z0lDQWdaV3h6WlNCcFppQW9hU0FoUFQwZ01Da2dkSEpoYm5ObVpYSmhZbXhsVFdWemMyRm5aU2hqYjI1emRISmhhVzUwY21Wd2IzSjBLVHRjYmlBZ2ZWeHVmVHRjYmx4dWMyVnNaaTV2Ym0xbGMzTmhaMlVnUFNCbWRXNWpkR2x2YmlBb1pYWmxiblFwSUh0Y2JpQWdhV1lnS0dWMlpXNTBMbVJoZEdFZ2FXNXpkR0Z1WTJWdlppQkdiRzloZERNeVFYSnlZWGtwSUh0Y2JpQWdJQ0F2THlCMGNtRnVjMlpsY21GaWJHVWdiMkpxWldOMFhHNGdJQ0FnYzNkcGRHTm9JQ2hsZG1WdWRDNWtZWFJoV3pCZEtTQjdYRzRnSUNBZ0lDQmpZWE5sSUUxRlUxTkJSMFZmVkZsUVJWTXVWMDlTVEVSU1JWQlBVbFE2SUh0Y2JpQWdJQ0FnSUNBZ2QyOXliR1J5WlhCdmNuUWdQU0J1WlhjZ1JteHZZWFF6TWtGeWNtRjVLR1YyWlc1MExtUmhkR0VwTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR05oYzJVZ1RVVlRVMEZIUlY5VVdWQkZVeTVEVDB4TVNWTkpUMDVTUlZCUFVsUTZJSHRjYmlBZ0lDQWdJQ0FnWTI5c2JHbHphVzl1Y21Wd2IzSjBJRDBnYm1WM0lFWnNiMkYwTXpKQmNuSmhlU2hsZG1WdWRDNWtZWFJoS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JqWVhObElFMUZVMU5CUjBWZlZGbFFSVk11VmtWSVNVTk1SVkpGVUU5U1ZEb2dlMXh1SUNBZ0lDQWdJQ0IyWldocFkyeGxjbVZ3YjNKMElEMGdibVYzSUVac2IyRjBNekpCY25KaGVTaGxkbVZ1ZEM1a1lYUmhLVHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQmpZWE5sSUUxRlUxTkJSMFZmVkZsUVJWTXVRMDlPVTFSU1FVbE9WRkpGVUU5U1ZEb2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRISmhhVzUwY21Wd2IzSjBJRDBnYm1WM0lFWnNiMkYwTXpKQmNuSmhlU2hsZG1WdWRDNWtZWFJoS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5Ymp0Y2JpQWdmU0JsYkhObElHbG1JQ2hsZG1WdWRDNWtZWFJoTG1OdFpDQW1KaUJ3ZFdKc2FXTmZablZ1WTNScGIyNXpXMlYyWlc1MExtUmhkR0V1WTIxa1hTa2djSFZpYkdsalgyWjFibU4wYVc5dWMxdGxkbVZ1ZEM1a1lYUmhMbU50WkYwb1pYWmxiblF1WkdGMFlTNXdZWEpoYlhNcE8xeHVmVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMM055WXk5M2IzSnJaWEl1YW5NaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOVwiLCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwid29ya2VyLmpzXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd29ya2VyLWxvYWRlcj9pbmxpbmUsbmFtZT13b3JrZXIuanMhLi9zcmMvd29ya2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiV0hTXCJcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9