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
                // const id = value.detailProducts._id;
                // const company = value.detailProducts.company
                // const  img = value.detailProducts.img
                // const description = value.detailProducts.description;
                // const  price = value.detailProducts.price;
                // const title = value.detailProducts.title;
                // const   inCart= value.detailProducts.inCart;
                return (
                    <ProductWrapper >
                        {/* title */}
                        {/* <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div> */}
                        {/* product info */}
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
.row{
    width:80%;
    position: absolute;
left: 50%;
top: 60%;
transform: translate(-50%, -50%);

padding: 10px;
.text-muted{
    font-size:16px;
    line-height:2

}
    
}
`