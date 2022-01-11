import './index.css';
import axios from 'axios';
import React, { useEffect } from 'react';

function MainPage() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    axios
      .get(
        'https://6ff360a8-b503-4795-8b6e-244eb1084e87.mock.pstmn.io/products'
      )
      .then((response) => {
        const products = response.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.error('에러 발생 : ', error);
      });
  }, []);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="./images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map((product, index) => {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="./images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
