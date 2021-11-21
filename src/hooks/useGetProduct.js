import {useEffect, useState} from 'react';
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts]= useState([]);

	
	useEffect( () => {
		async function productsAPI () {
	 		const response =  await axios(API);
	 		setProducts(response.data);
	 	}
	 	productsAPI ()
	 });
     return products;
};

export default useGetProducts;
