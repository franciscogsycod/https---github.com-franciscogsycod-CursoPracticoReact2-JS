import React from 'react';
import Axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = React.useState([]);
	React.useEffect(async () => {
		const response = await Axios(API);
		setProducts(response.data);
	}, []);

    return products;

};

export default useGetProducts;