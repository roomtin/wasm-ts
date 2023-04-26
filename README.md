# wasm-ts

## Steps for setting up rust -> wasm -> typescript env

### Rust Side
- add wasm dependency, `cargo add wasm-bindgen`
- edit the Cargo.toml to contain `[lib]` section and change `main.rs` to `lib.rs`
- write functionality & boilerplate
- ensure wasm32 or wasm64 target is present: `rustup target add wasm32-unknown-unknown --toolchain nightly`
- compile the lib: `cargo +nightly build --target wasm32-unknown-unknown`
- ensure the `wasm-bindgen-cli` is installed:  `cargo install wasm-bindgen-cli`
- create dir for TS bindings if needed (named bindings in this example)
- create wasm TS bindings: `wasm-bindgen target/wasm32-unknown-unknown/debug/rwasm_lib.wasm --out-dir bindings` --target nodejs
  NOTE: it's essential to specify nodejs as the binding target

### TS Side
- ensure ts-node & typescript are installed
- import functions from bindings dir
- use as if they were native
