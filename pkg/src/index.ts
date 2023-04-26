import { cute_fizzbuzz } from "../../rwasm-lib/bindings/rwasm_lib"

function main() {
    for (let i = 0; i < 100; i++) {
        console.log(cute_fizzbuzz(i))
    }
}
main()