import React from 'react'
import styled from 'styled-components'
import CartProduct from '../components/Product'
import { connect } from 'react-redux';


const CartPage = styled.div`
  /* ... */
`
const ProductsList = styled.ul`
  /* ... */
`

export default class Cart extends React.Component {
  render() {
    const { products } = this.props;

    const AllProducts = products.map(product => (<CartProduct product={product} image={product}></CartProduct>));

    return (
      <CartPage>
        <ProductsList>
            <AllProducts />
        </ProductsList>
      </CartPage>
    )
  }
}