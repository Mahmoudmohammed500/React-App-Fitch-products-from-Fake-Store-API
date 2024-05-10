import Product from './Product';
import { useEffect, useState } from 'react';
function Productslist() {
    let apiUrl = 'https://fakestoreapi.com/products';
    const [products, setproducts] = useState([]);
    const [categories, setcategories] = useState([]);

    const getproducts = () => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setproducts(data));
    };

    const getcategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => setcategories(data));
    };

    const getproductsincategory = (catname) => {
        fetch(`${apiUrl}/category/${catname}`)
            .then((res) => res.json())
            .then((productdata) => setproducts(productdata));
    };

    useEffect(() => {
        getproducts();
        getcategories();
    }, []);
    return (
        <>
            <h1 className='text-center'>Our Products .....</h1>
            <div className='container'>

                <button className='btn btn-info m-1'onClick={() => {
                    getproducts();
                }}>All</button>

                {categories.map((cat) => {
                    return (
                        <button className='btn btn-info m-1' key={cat} onClick={() => {
                            getproductsincategory(cat);
                        }}>{cat}</button>
                    )
                })}

                <div className='row'>
                    {products.map((productele) => {
                        return (
                            <div className='col-3' key={productele.id}>
                                <Product product={productele} showbutton={true} />
                            </div>
                        )
                    })}


                </div>
            </div>
        </>
    );
}
export default Productslist;