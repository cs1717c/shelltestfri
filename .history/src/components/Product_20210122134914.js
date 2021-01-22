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

    handleAddToCart = () => {

    }

    render() {
        const { name, count, img } = this.props;
        return (
            <ProductContainer>
                <ProductName>{name}</ProductName>
                <ProductCounter>{count}</ProductCounter>
                <ProductImage src={img} />
                <AddToCartButton  onClick={this.handleAddToCart}/>
            </ProductContainer>
        )
    }
}



const mapState = state => ({
    form: state
  });
  
  const mapDispatch = {
    inputChange
  };
  
  const ConnectedForm = connect(
    mapState,
    mapDispatch
  )(Form);

export default Product