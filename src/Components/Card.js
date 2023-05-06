import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';


const Card = ({ item }) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    history('/Cart');
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img src={item.image} alt={item.title} className="w-full " />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="font-bold text-xl mb-2">${item.price}</p>
        <button
          className=" bg-blue-500 rounded  "
          onClick={() => handleAddToCart(item)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;

