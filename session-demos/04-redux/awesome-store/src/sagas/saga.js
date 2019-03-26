function *fetchProductsSaga() {
    yield wait for FETCHING_PRODUCTS
    yield do ajax call
}