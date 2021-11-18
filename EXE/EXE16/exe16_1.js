// the output is 
//undefine and 2

function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
   }
   funcA();
//the output is: Aurelio De Rosa
// and than John Doe
var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test())



/**the answer is undefine 
 * and the seconde console this is Number
 */

function funcB() {
    let a = b = 0;
    a++;
    return a;
   }
 funcB();
   console.log(typeof a);
   console.log(typeof b);

/**
 * funcC print twice "2"
 * that beacuse we are accssing to 
 */
   function funcC() {
    console.log("1");
   }
   funcC();
   function funcC() {
    console.log("2");
   }
   funcC();


/**
 * e is undefine 
 * and the op
 */
function funcD1() {
    d = 1;
   }
   funcD1();
   console.log(d);
   function funcD2() {
    var e = 1;
   }
   funcD2();
   console.log(e)

   /**
    * the outpute is ("Value of f in local scope: ", undefine)
    * the sconde output is ("Value of f in local scope: ", 1)
    */
   function funcE() {
    console.log("Value of f in local scope: ", f);
   }
   console.log("Value of f in global scope: ", f);
   var f = 1;
   funcE();
