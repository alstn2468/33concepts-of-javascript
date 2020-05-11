// Explict Conversion
let variable = 100;

console.log(variable, typeof variable); // 100 "number"

variable = Object(variable);
console.log(variable, typeof variable); // Number {100} "object"

variable = String(variable);
console.log(variable, typeof variable); // 100 "string"

variable = Boolean(variable);
console.log(variable, typeof variable); // true "boolean"

// Number()
console.log(Number("100000"), typeof Number("100000")); // 100000 "number"
console.log(Number("5" * 5), typeof Number("5" * 5)); // 25 "number"
console.log(Number("3.14"), typeof Number("3.14")); // 3.14 "number"
console.log(Number("a"), typeof Number("a")); // Nan "number"

// parseInt()
console.log(parseInt("100000"), typeof parseInt("100000")); // 100000 "number"
console.log(parseInt("3.14"), typeof parseInt("3.14")); // 3 "number"
console.log(parseInt("a"), typeof parseInt("a")); // NaN "number"
console.log(parseInt(0033), typeof parseInt(0033)); // 27 "number"
console.log(parseInt("0033"), typeof parseInt("0033")); // 33 "number"
console.log(parseInt(0x1b), typeof parseInt(0x1b)); // 27 "number"
console.log(parseInt("0x1b"), typeof parseInt("0x1b")); // 27 "number"
console.log(parseInt(true), typeof parseInt(true)); // NaN "number"
console.log(parseInt(false), typeof parseInt(false)); // NaN "number"
console.log(
    parseInt(() => {}),
    typeof parseInt(() => {})
); // NaN "number"
console.log(parseInt("    2"), typeof parseInt("    2")); // 2 "number"
console.log(parseInt("    2  "), typeof parseInt("    2  ")); // 2 "number"
console.log(parseInt("    2  ㄴ2"), typeof parseInt("    2  ㄴ2")); // 2 "number"
console.log(parseInt("      ㄴ2"), typeof parseInt("      ㄴ2")); // Nan "number"

// parseFloat
console.log(parseFloat("100000"), typeof parseFloat("100000")); // 100000 "number"
console.log(parseFloat("3.14"), typeof parseFloat("3.14")); // 3.14 "number"
console.log(parseFloat("a"), typeof parseFloat("a")); // NaN "number"
console.log(parseFloat(0033), typeof parseFloat(0033)); // 27 "number"
console.log(parseFloat("0033"), typeof parseFloat("0033")); // 33 "number"
console.log(parseFloat(0x1b), typeof parseFloat(0x1b)); // 27 "number"
console.log(parseFloat("0x1b"), typeof parseFloat("0x1b")); // 0 "number"
console.log(parseFloat(true), typeof parseFloat(true)); // NaN "number"
console.log(parseFloat(false), typeof parseFloat(false)); // NaN "number"
console.log(
    parseFloat(() => {}),
    typeof parseFloat(() => {})
); // NaN "number"
console.log(parseFloat("    2"), typeof parseFloat("    2")); // 2 "number"
console.log(parseFloat("    2  "), typeof parseFloat("    2  ")); // 2 "number"
console.log(parseFloat("    2  ㄴ2"), typeof parseFloat("    2  ㄴ2")); // 2 "number"
console.log(parseFloat("      ㄴ2"), typeof parseInt("      ㄴ2")); // Nan "number"

// String
console.log(String(10000), typeof String(10000)); // "10000" "string"
console.log(String(3.14), typeof String(3.14)); // "3.14" "string"
console.log(String(true), typeof String(true)); // "true" "string"
console.log(String(false), typeof String(false)); // "false" "string"
console.log(
    String(() => {}),
    typeof String(() => {})
); // "() => {}" "string"
console.log(String({ foo: "bar" }), typeof String({ foo: "bar" })); // "[object Object]" "string"

// toString
console.log((10000).toString(), typeof (10000).toString()); // "10000" "string"
console.log((10000).toString(2), typeof (10000).toString(2)); // "10011100010000" "string"
console.log((10000).toString(8), typeof (10000).toString(8)); // "23420" "string"
console.log((3.14).toString(), typeof (3.14).toString()); // "3.14" "string"
console.log(true.toString(), typeof true.toString()); // "true" "string"
console.log(false.toString(), typeof false.toString()); // "false" "string"
console.log((() => {}).toString(), typeof (() => {}).toString()); // "() => {}" "string"
console.log({ foo: "bar" }.toString(), typeof { foo: "bar" }.toString()); // "[object Object]" "string"

// toFixed()
console.log((10000).toFixed(), typeof (10000).toFixed()); // "10000" "string"
console.log((10000).toFixed(2), typeof (10000).toFixed(2)); // "10000.00" "string"
console.log((10000).toFixed(3), typeof (10000).toFixed(8)); // "10000.000" "string"
console.log((3.14).toFixed(), typeof (3.14).toFixed()); // "3" "string"
console.log((3.14).toFixed(1), typeof (3.14).toFixed()); // "3.1" "string"
console.log((3.16).toFixed(1), typeof (3.16).toFixed()); // "3.2" "string"

// Boolean()
Boolean(100); //true
Boolean(“1”); //true
Boolean(true); //true
Boolean(Object); //true
Boolean([]); //true
Boolean(0); //false
Boolean(NaN); //false
Boolean(null); //false
Boolean(undefined); //false