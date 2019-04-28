## lodash中数据类型检测方法及原理


##### Lodash 中数据类型检测
* _.isArguments(value)
> * 检查 value 是否是一个类 arguments 对象。
> 
> * example
> ```
> _.isArguments(function() { return arguments; }());
> // => true
>
> _.isArguments([1, 2, 3]);
> // => false 
> ```


* _.isArray(value) 
> * 检查 value 是否是 Array 类对象。
> 
> * example
> ```
> _.isArray([1, 2, 3]);
> // => true
>
> _.isArray('abc');
> // => false 
> ```

* _.isArrayLike(value)
> * 检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER
  
* _.isBoolean(value)
> * 检查 value 是否是原始 boolean 类型或者对象。

* _.isDate(value)
> * 检查 value 是否是 Date 对象。 

* _.isFunction(value)
> * 检查 value 是否是 Function 对象。

* _.isInteger(value)
> * 检查 value 是否为一个整数。 

* _.isNaN(value)
> * 检查 value 是否是 NaN。

* _.isFunction(value)
> *  检查 value 是否是 Function 对象。

* _.isError(value)
> *  检查 value 是否是 Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, 或者 URIError对象。

* _.isEmpty(value)
> *  检查 value 是否为一个空对象，集合，映射或者set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类jquery选择器。 
> * 对象如果被认为为空，那么他们没有自己的可枚举属性的对象。 
> * 类数组值，比如arguments对象，array，buffer，string或者类jQuery集合的length 为 0，被认为是空。类似的，map（映射）和set 的size 为 0，被认为是空。

* _.isElement(value)
> * 检查 value 是否是可能是 DOM 元素。

* _.isBuffer(value)
> * 检查 value 是否是个 buffer。

* _.isLength(value)
> *  检查 value 是否为有效的类数组长度。

* _.isMap(value)
> *  检查 value 是否为一个 Map 对象。

* _.isNil(value)
> *  检查 value 是否是 null 或者 undefined。

* _.isNull(value)
> *  检查 value 是否是 null。

* _.isNumber(value)
> *  检查 value 是否是原始Number数值型 或者 对象。

* _.isObject(value)
> *  检查 value 是否为 Object 的 language type。 (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(''))

* _.isObjectLike(value)
> *  检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。

* _.isPlainObject(value)
> *  检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。

* _.isRegExp(value)
> *  检查 value 是否为RegExp对象。

* _.isSafeInteger(value)
> * 检查 value 是否是一个安全整数。 一个安全整数应该是符合 IEEE-754 标准的非双精度浮点数。 

* _.isSet(value)
> *  检查 value 是否是一个Set对象。

* _.isString(value)
> *  检查 value 是否是原始字符串String或者对象。

* _.isSymbol(value)
> *  检查 value 是否是原始 Symbol 或者对象。

* _.isTypedArray(value)
> *  检查 value 是否是TypedArray。

* _.isUndefined(value)
> *  检查 value 是否是 undefined.

* _.isWeakMap(value)
> *  检查 value 是否是 WeakMap 对象。

* _.isWeakSet(value) 
> * 检查 value 是否是 WeakSet 对象。


***
Lodash 中文文档 https://www.html.cn/doc/lodash/
