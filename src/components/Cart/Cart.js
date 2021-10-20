import React, { Component } from 'react'
import Title from "../Title";
import CartColumns from "./CartColumns"
import { ProductConsumer } from '../../context';
import EmptyCart from "./EmptyCart"
import CartTotals from "./CartTotals"
import CartList from "./CartList"
export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} =value;
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                 <Title  
                
                                 title="Cart Items"/>
                                 <CartColumns />
                                 <CartList value ={value}/>
                                 <CartTotals value={value}/>
                                </React.Fragment>
                            );
                        }else{
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
                
                 
            </section>
        )
    }
}
