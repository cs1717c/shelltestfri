import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledCounter = styled.div`
  /* ... */
`
const ProductName = styled.p`
  /* ... */
`

const ProductImage = styled.img.attrs(props => ({
    src: props.Img || Myimg,
  }))`

const Button = styled.button`
  /* ... */
`


class Product extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            
        )
    }
}

export default Product