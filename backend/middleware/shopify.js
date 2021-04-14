export async function getAllProducts(client) {
    client.product.fetchAll().then((products) => {
        return products
})
}
