import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Product from './Product';
function Productdetails(){
    let api_Url = 'https://fakestoreapi.com/products';
    const params = useParams();
    const [product, setproduct] = useState({});
    useEffect(() => {
        fetch(`${api_Url}/${params.productid}`)
            .then((response) => response.json())
            .then((productdata) => setproduct(productdata));
    }, []);

    return(
       <Product product={product} showbutton={false} />
    );
}

export default Productdetails;