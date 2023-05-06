import React, {useState,useEffect} from "react";
import Card from "./Card";
const Items = () => {
    const [items,setItems] = useState([]);
    
    const getItems = async () => {
        const response = await fetch ('https://fakestoreapi.com/products')
        const data = await response.json();
        setItems(data)
    }

    useEffect(() => {
      getItems();
    }, []);

    

    return (
     <div className="flex justify-center items-center bg-gray-100 ">
      <div className="w-4/5">
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-4 grid-rows-5 gap-4 bg-transparent" >
            {items.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
      );
    };
    
    export default Items;