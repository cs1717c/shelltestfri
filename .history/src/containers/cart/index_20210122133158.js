import React from 'react'
import styled from 'styled-components'

const CartPage = styled.div`
  /* ... */
`
const ProductsList = styled.ul`
  /* ... */
`

export default class Cart extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <CartPage>
        <ProductsList>
            <AllProducts />
        </ProductsList>
      </CartPage>
    )
  }
}