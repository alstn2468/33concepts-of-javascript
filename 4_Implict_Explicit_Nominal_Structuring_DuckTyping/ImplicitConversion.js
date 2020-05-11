// Implicit Conversion
let num = 10;
let str = "10";

console.log(num + str, typeof (num + str)); // "1010" "string"

// String + Number
console.log(10 + "10", typeof (10 + "10")); // "1010" "string"
console.log(10 + "abc", typeof (10 + "abc")); // "10abc" "string"
console.log("10" + 10, typeof ("10" + 10)); // "1010" "string"
console.log("abc" + 10, typeof ("abc" + 10)); // "abc10" "string"
console.log(10 + "abc" + 10, typeof (10 + "abc" + 10)); // "10abc10" "string"

// String + Boolean
console.log("abc" + true, typeof ("abc" + true)); // "abctrue" "string"
console.log("abc" + false, typeof ("abc" + true)); // "abcfalse" "string"
console.log(true + "abc", typeof (true + "abc")); // "trueabc" "string"
console.log(false + "abc", typeof (false + "abc")); // "falseabc" "string"
console.log(true + "abc" + false, typeof (true + "abc" + false)); // "trueabcfalse" "string"

// String + Object
console.log("abc" + { foo: "bar" }, typeof ("abc" + { foo: "bar" })); // "abc[object Object]" "string"
console.log("abc" + (() => {}), typeof ("abc" + (() => {}))); // "abc() => {}" "string"

// Number * String
console.log(10 * "10", typeof (10 * "10")); // 100 "number"
console.log(10 * "abc", typeof (10 * "abc")); // Nan "number"
console.log("10" * 10, typeof ("10" * 10)); // 100 "number"
console.log("abc" * 10, typeof ("abc" * 10)); // Nan "number"
console.log(10 * "abc" * 10, typeof (10 * "abc" * 10)); // Nan "number"

// Number - String
console.log(10 - "10", typeof (10 - "10")); // 0 "number"
console.log(10 - "abc", typeof (10 - "abc")); // Nan "number"
console.log("10" - 10, typeof ("10" - 10)); // 0 "number"
console.log("abc" - 10, typeof ("abc" - 10)); // Nan "number"
console.log(10 - "abc" - 10, typeof (10 - "abc" - 10)); // Nan "number"

// Number / String
console.log(10 / "10", typeof (10 / "10")); // 1 "number"
console.log(10 / "abc", typeof (10 / "abc")); // Nan "number"
console.log("10" / 10, typeof ("10" / 10)); // 1 "number"
console.log("abc" / 10, typeof ("abc" / 10)); // Nan "number"
console.log(10 / "abc" / 10, typeof (10 / "abc" / 10)); // Nan "number"

// Number % String
console.log(10 % "10", typeof (10 % "10")); // 0 "number"
console.log(10 % "abc", typeof (10 % "abc")); // Nan "number"
console.log("10" % 10, typeof ("10" % 10)); // 0 "number"
console.log("abc" % 10, typeof ("abc" % 10)); // Nan "number"
console.log((10 % "abc") % 10, typeof ((10 % "abc") % 10)); // Nan "number"

// Equivalent Operator
console.log(0 == "0"); // true
console.log(0 == false); // true
console.log("0" == false); // true
console.log(undefined == null); // true
console.log(1 == "1"); // true
console.log(1 == true); // true
console.log("1" == true); // true
