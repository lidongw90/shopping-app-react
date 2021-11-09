import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Details extends Component {
    render() {
        
        return (
            <ProductConsumer>
                
            {value => {
                const {
                    id,
                    // company,
                    img,
                    description,
                    price,
                    title,
                    inCart
                } = value.detailProducts
                
                return (
                    <ProductWrapper >
                        
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product" />
                            </div>
                            {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">

                                <h2 className=" font-weight-bold my-3">{title}</h2>
                                {/* <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by:<span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4> */}
                                <h4 className="text-blue my-3">
                                    <strong>
                                        price:<span>$</span>
                                        {price}
                                    </strong>
                                </h4>
                                <h4 className="text-capitialize font-weight-bold mt-5 mb-0">
                                     Item Info:
                                </h4>
                                <p className="text-muted lead">{description} </p>
                                <div className="my-3">
                                    <Link to ="/">
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer 
                                    cart
                                    disabled={inCart? true:false}
                                    onClick ={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);

                                    }}> 
                                    {inCart? "inCart" : "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>

                        </div>
                    </ProductWrapper>

                )

            }}
        </ProductConsumer>
        )
    }
}

const ProductWrapper = styled.div `
padding-top:20em;
.row{
    width:90%;
    margin:auto;
    
.text-muted{
    font-size:16px;
    line-height:2

}
    
}
`