import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ProductContainer = styled.div`
  /* ... */
`

const ProductCounter = styled.div`
  /* ... */
`
const ProductName = styled.p`
  /* ... */
`

const ProductImage = styled.img`
  /* ... */
`

const AddToCartButton = styled.button`
  /* ... */
`


class CartProduct extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render() {
        const { name, count, img, onAddToCart, id } = this.props.product;
        return (
            <ProductContainer>
                <ProductName>{name}</ProductName>
                <ProductCounter>{count}</ProductCounter>
                <ProductImage src={img} />
                <AddToCartButton  onClick={() => this.handleAddToCart(id)}/>
            </ProductContainer>
        )
    }
}


function mapStateToProps(store, ownProps) {
  return {
    cartProducts: get(store, 'cart.products'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => {
      dispatch(requestAddProduct(product));
    },
    changeQuantity: (product) => {
      dispatch(requestAddProduct(product));
    },
  };
}