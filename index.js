

const BASE_URL = 'https://fakestoreapi.com';


const [method, resource, ...rest] = process.argv.slice(2);

async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const products = await response.json();
  console.log(products);
}

async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const product = await response.json();
  console.log(product);
}

async function createProduct(title, price, category) {
 
  const newProductData = { title, price: Number(price), category };

  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProductData),
  });
  const createdProduct = await response.json();
  console.log(createdProduct);
}

async function deleteProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  const deletedProduct = await response.json();
  console.log(deletedProduct);
}

function mostrarAyuda() {
  console.log('Comando no reconocido. Usos válidos:');
  console.log('  npm run start GET products');
  console.log('  npm run start GET products/<id>');
  console.log('  npm run start POST products <title> <price> <category>');
  console.log('  npm run start DELETE products/<id>');
}

async function main() {
  
  const [recurso, id] = (resource ?? '').split('/');

  if (method === 'GET' && recurso === 'products' && !id) {
    await getAllProducts();
  } else if (method === 'GET' && recurso === 'products' && id) {
    await getProductById(id);
  } else if (method === 'POST' && recurso === 'products') {
    const [title, price, category] = rest;
    await createProduct(title, price, category);
  } else if (method === 'DELETE' && recurso === 'products' && id) {
    await deleteProduct(id);
  } else {
    mostrarAyuda();
  }
}

main();