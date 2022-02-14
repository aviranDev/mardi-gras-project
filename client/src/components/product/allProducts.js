import Product from "./product";
import Border from "../common/border";
import PageHeader from "../common/pageHeader";
import SearchBar from "./SearchBar";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../redux/shopping/actions/productActions'
import { addToCart } from '../../redux/shopping/actions/cartActions';


function AllProducts() {
  const products = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts())
  }, [dispatch])

  const addItemToCart = (id) => {
    dispatch(addToCart(id));
  }


  return (
    <div className="container min-vh-100 mt-4">
      <Border />
      <PageHeader title="The Mardi Gras Products" />
      <div className="row">
        <div className="col-12 text-center">
          <SearchBar placeholder="Enter a Product Name" data={products} />
        </div>
      </div>
      <div className="row">
        <Product add={addItemToCart} />
      </div>
    </div>
  );
}

export default AllProducts;


