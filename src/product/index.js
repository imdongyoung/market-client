import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://6ff360a8-b503-4795-8b6e-244eb1084e87.mock.pstmn.io/products/${id}`
      )
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>삼품 정보를 받고있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={'/' + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createAt">2022년 1월 11일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
