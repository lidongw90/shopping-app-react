import React from 'react';
import styled from "styled-components";

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeitem } = value
    // console.log(value)
    return (
        <CartitemWrapper >
        <div className="row align-items-center  my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid"
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
               
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
              
                ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                    <span className="btn btn-black mx-1" onClick={() => decrement(id)}>

                        -
            </span>
                    <span className="btn btn-black mx-1" >

                        {count}
                    </span>
                    <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                        +
            </span>
                </div>
            </div>
            </div>

       
        <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={()=>removeitem(id)}>
                <i  className="fas fa-trash"></i>
            </div>
     </div>
     <div className="col-10 mx-auto col-lg-2">
            <strong> ${total}</strong>
     </div>
      
 </div>
 </CartitemWrapper>
    )
}
const CartitemWrapper = styled.div `
.row{
    font-size:15px;
    strong{
        font-size:20px
    }
    .btn-black{
        font-size:10px !important
    }
}

`