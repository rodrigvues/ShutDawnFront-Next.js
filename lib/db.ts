export async function getProducts(search: string, offset: number) {
  // Retorne dados estáticos ou vazios, já que você não vai usar um banco de dados.
  return {
    products: [],
    newOffset: null,
    totalProducts: 0
  };
}

export async function deleteProductById(id: number) {
  // Simule uma exclusão sem realmente fazer nada
  return;
}
