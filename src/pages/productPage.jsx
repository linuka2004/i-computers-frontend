import { useEffect } from "react";
import Loader from "../components/loader";
import axios from "axios";
import { useState } from "react";
import ProductCard from "../components/productCard";

export default function ProductPage() {

  const [products, setProducts] = useState([]); // To store products
  const [loaded, setLoaded] = useState(false); // To track loading state

  useEffect(()=>{
    if(!loaded){
      axios
      .get(import.meta.env.VITE_BACKEND_URL + "/products")
      .then(
        (response)=>{
          console.log(response.data);
          setProducts(response.data);
          setLoaded(true);   
    })};
  },[])

  return (
    <div className="w-full h-[calc(100vh-80px)] flex">
      {
        !loaded ?<Loader/>:
        <div className="w-full flex justify-center p-4  flex-row flex-wrap">
          {
            products.map(
              (item) =>{
                return (
                  // <div>     //this is hard coding the product card, this is very primary thing. Do this in a component and call that component here by passing props.
                  // <h1>{item.name}</h1>
                  // <img src={item.images[0]} className="w-32 h-32 object-contain" />
                  // <p>{item.description}</p>
                  // </div>

                  <ProductCard key={item.productID} product = {item} />
                )                
              })
          }

        </div>
      }

    </div>
  )
}