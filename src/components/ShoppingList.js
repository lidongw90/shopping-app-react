import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from '../context';
import "./product.scss"

class ShoppingList extends Component {

  render() {
  
    return (
      <React.Fragment>
        {/* <div className="py-5"> */}
          <div className="container">
            {/* <Title name="our " title="products" /> */}
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  
                const products =  value.products
                // console.log(products)
                  return products.map(product=>{
                    return <Product key ={product._id} product = {product}/>
                  })
                }}
              </ProductConsumer>

            </div>

          </div>
        {/* </div> */}
      </React.Fragment>
    )
  }


}


export default ShoppingList
