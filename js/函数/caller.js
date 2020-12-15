"use strict";

function outer(){
    inner();
}

function inner(){
    // console.log(arguments.callee.caller);
    // console.log(inner.caller);
    console.log(arguments.caller);
    // console.log(caller);//ReferenceError: caller is not defined
}

outer();
