import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Sapgyeopsal",
    image:
      "https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Kimbap",
    image: "http://www.mkhealth.co.kr/news/photo/202008/img_MKH200810001_0.jpg",
    rating: 3.5,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://lh3.googleusercontent.com/proxy/lrXZJxpVD-TMQ2hQwZGp6RocTwiZjc42_1jh6cvVdL8kvI7f4KK02KQYMtIVM8Vcg73OtMZ8PNNkzbj0y2DZdGv2rA_3rXbzWBGaWbTeNxrQRALMDLYf86Ff4QSoH7w",
    rating: 4.5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        ></Food>
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
// 컴포넌트가 전달받은 props의 값이 올바른지 확인
// prop-types를 이용
// 그러나 props는 동적 데이터를 다루지 못함 => state를 이용해야

export default App;
