import React from 'react'
import styled from 'styled-components';

export default function(){
    return (
        <CartcolumnWrapper className="container-fluid text-center d-none d-lg-block">
            <div className="row align-items-center">
                <div className=".col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">item</p>
                </div>
                <div className=".col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Details</p>
                </div>
                <div className=".col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className=".col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className=".col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className=".col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
            </div>
        </CartcolumnWrapper>
    )
}
const CartcolumnWrapper = styled.div `
.row{
    font-size:14px;
    font-weight:bold;
    margin:1em 0em

}
`