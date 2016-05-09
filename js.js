var userId = FlapJack;
VM691:1 Uncaught ReferenceError: FlapJack is not defined(…)(anonymous function) @ VM691:1InjectedScript._evaluateOn @ (program):145InjectedScript._evaluateAndWrap @ (program):137InjectedScript.evaluate @ (program):118
var userId = "FlapJack";
undefined
var password = "Cake123";
undefined
!password.includes("userId");
true
var userId = "Cake123";
undefined
!password.includes("userId");
true
!password.includes("userId");
true
!password.includes("userId");
true
!password.includes(userId);
false
var userId = "FlapJack";
undefined
!password.includes(userId);
true
password.length > 6;
true
password.length > 5 && userId.length > 5;
true
function loginSame(uId, pass) { return !pass.includes(uId); }
undefined
loginSame("Jordan", "Jordan");
false
loginSame("jordan", "alex");

true
function loginLength(uId, pass) {return pass.length > 5 && uId.length > 5;}
undefined
loginLength(userId, password);
true
loginLength("bob", "123j")
false
!userId.includes("!") && !userId.includes("#") && !userId.includes("$");
true
function loginChar(uId) {return !uId.includes("!") && !uId.includes("#") && !uId.includes("$");}
undefined
loginChar("Bob!")
false
loginChar("Bob")
true
function passChar(pass) { return pass.includes("!") || pass.includes("#") || pass.includes("
$"); }
VM3305:1 Uncaught SyntaxError: Unexpected token ILLEGAL(…)InjectedScript._evaluateOn @ (program):145InjectedScript._evaluateAndWrap @ (program):137InjectedScript.evaluate @ (program):118
function passChar(pass) { return pass.includes("!") || pass.includes("#") || pass.includes("
$")); }
VM3306:1 Uncaught SyntaxError: Unexpected token ILLEGAL(…)InjectedScript._evaluateOn @ (program):145InjectedScript._evaluateAndWrap @ (program):137InjectedScript.evaluate @ (program):118
function passChar(pass) { return pass.includes("!") || pass.includes("#") || pass.includes("
$"))); }
VM3307:1 Uncaught SyntaxError: Unexpected token ILLEGAL(…)InjectedScript._evaluateOn @ (program):145InjectedScript._evaluateAndWrap @ (program):137InjectedScript.evaluate @ (program):118
function passChar(pass) { return pass.includes("!") || pass.includes("#") || pass.includes("
$"); }
VM3312:1 Uncaught SyntaxError: Unexpected token ILLEGAL(…)InjectedScript._evaluateOn @ (program):145InjectedScript._evaluateAndWrap @ (program):137InjectedScript.evaluate @ (program):118


function loginInfo() {prompt("User Id") prompt("password");}
VM4007:1 Uncaught SyntaxError: Unexpected identifier(…)InjectedScript._evaluateOn @ (program):145InjectedScript._evaluateAndWrap @ (program):137InjectedScript.evaluate @ (program):118
function LoginInfo(uId, pass) {prompt("User Id"), ("password");}
undefined
loginInfo();
VM4057:1 Uncaught ReferenceError: loginInfo is not defined(…)(anonymous function) @ VM4057:1InjectedScript._evaluateOn @ (program):145InjectedScript._evaluateAndWrap @ (program):137InjectedScript.evaluate @ (program):118
function LoginInfo() {prompt("User Id"), ("password");}
undefined
LoginInfo();
undefined
function LoginInfo() {prompt("User Id"), prompt("password");}
undefined
LoginInfo();
undefined
function LoginInfo() {prompt("User Id"), prompt("password") loginSame(uId,pass);}
VM4426:1 Uncaught SyntaxError: Unexpected identifier(…)InjectedScript._evaluateOn @ (program):145InjectedScript._evaluateAndWrap @ (program):137InjectedScript.evaluate @ (program):118
LoginInfo();
undefined
function loginFinal(uId,pass) {return loginSame(uId,pass), loginLength(uId,pass), loginChar(uId,pass), passChar(pass), notPass(pass);}
undefined
loginFinal("bob","bob")
true
function loginFinal(uId,pass) {return loginSame(uId,pass) && loginLength(uId,pass) && loginChar(uId,pass) && passChar(pass) && notPass(pass);}
undefined
loginFinal("bob","bob")
false
loginFinal("bobbob","spencer!")
true
loginFinal("bobbob","password")
false
loginFinal("bobbob","password!")
false
loginFinal("bobbob","passworr!")
true
loginFinal("passworr!","passworr!")
false
loginFinal("passworr!","passworr")
false
loginFinal("passworr!","passworr!")
false
loginFinal("passworr","passworr!")
false
passDigit("bob")
false
passDigit("bob1")
true
passDigit("bob2")
true
function loginFinal(uId,pass) {return loginSame(uId,pass) && loginLength(uId,pass) && loginChar(uId,pass) && passChar(pass) && notPass(pass) && passDigit(pass);}
undefined
loginFinal("bobbob","spencer1!")
true
loginFinal("bobbob","spencer!")
false
function passCase(pass) {return pass.toUpperCase && pass.toLowerCase;}
undefined
passCase("hello");
toLowerCase() { [native code] }
function passCase(pass) {return pass.toUpperCase() && pass.toLowerCase();}
undefined
passCase("hello");
"hello"
function passCase(pass) {return pass.includes.toUpperCase && pass.includes.toLowerCase;}
undefined
passCase("hello");
undefined
