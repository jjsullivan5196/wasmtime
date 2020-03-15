initSidebarItems({"fn":[["compile","Compile the Wasm buffer, and implicitly fail if we have an unexpected panic or segfault or anything else that can be detected \"passively\"."],["differential_execution","Instantiate the given Wasm module with each `Config` and call all of its exports. Modulo OOM, non-canonical NaNs, and usage of Wasm features that are or aren't enabled for different configs, we should get the same results when we call the exported functions for all of our different configs."],["instantiate","Instantiate the Wasm buffer, and implicitly fail if we have an unexpected panic or segfault or anything else that can be detected \"passively\"."],["instantiate_with_config","Instantiate the Wasm buffer, and implicitly fail if we have an unexpected panic or segfault or anything else that can be detected \"passively\"."],["make_api_calls","Invoke the given API calls."]],"mod":[["dummy","Dummy implementations of things that a Wasm module can import."]]});