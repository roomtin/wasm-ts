"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rwasm_lib_1 = require("../../rwasm-lib/bindings/rwasm_lib");
function main() {
    for (let i = 0; i < 100; i++) {
        console.log((0, rwasm_lib_1.cute_fizzbuzz)(i));
    }
}
main();
//# sourceMappingURL=index.js.map