import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setItemsToCart } from '../../redux/shopping/actions/cartActions';
import ItemList from './itemList';

function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItemsToCart())
  }, [dispatch])

  return (
    <ItemList />
  )
}

export default Cart;

