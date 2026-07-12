import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/productSlice";
function Products() {

    const dispatch= useDispatch();
    useEffect(()=>{
dispatch(fetchProducts())
    },[])


    const data = useSelector((state)=>state.products);
console.log("data",data.products);

  return (
    <div>
        <h1>Product Page</h1>
    </div>
  )
}

export default Products
