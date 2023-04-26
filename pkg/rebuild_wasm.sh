#!/bin/zsh

cd ../rwasm-lib
cargo +nightly build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/rwasm_lib.wasm --out-dir bindings --target nodejs
