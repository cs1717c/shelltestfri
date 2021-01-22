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


class Product extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const { name, count, img } = this.props;
        return (
            <ProductContainer>
                <ProductName name={name} count={count} img={img}>
            </ProductContainer>
        )
    }
}

export default Product