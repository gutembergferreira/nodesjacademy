import React from 'react';

function ProductsPage() {
  // Exemplo de dados dos produtos
  const products = [
    { id: 1, name: 'Produto 1', price: 10.99, image: 'https://images.pexels.com/photos/3981749/pexels-photo-3981749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Produto 2', price: 15.99, image: 'https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Produto 3', price: 8.99, image: 'https://images.pexels.com/photos/8217289/pexels-photo-8217289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Produto 4', price: 12.99, image: 'https://images.pexels.com/photos/1435741/pexels-photo-1435741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, name: 'Produto 5', price: 9.99, image: 'https://images.pexels.com/photos/2067574/pexels-photo-2067574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 6, name: 'Produto 6', price: 11.99, image: 'https://images.pexels.com/photos/3922642/pexels-photo-3922642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row row-cols-2 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ maxWidth: '50%', height: '200px', alignSelf:'center' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
