/* eslint-disable */

import React from 'react';
// eslint-disable-next-line
import styled from "styled-components";

let Container = styled.div`
    width: 290px;
    height: 380px;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;

    .ItemCard-Image{
        border-radius: 10px;
 
        width: 290px;
        height: 290px;
    }

    .ItemCard-Explain{

        height: 90px;
        width: 290px;
        display:flex;
        flex-direction: column;
        justify-content: center;

        p{
            font-weight: bold;
            margin: 3px 0;
            text-align:center;
        }
    }
`


// eslint-disable-next-line
function ItemCard(props){
    return (
        <Container>
            <img className='ItemCard-Image' src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="100%" />
            <div className='ItemCard-Explain'>
                {/* <p className='ItemCard-Explain__brand'>{props.brand}</p>
                <p className='ItemCard-Explain__title'>{props.title}</p>
                <p className='ItemCard-Explain__price'>{props.price}</p> */}
                <p className='ItemCard-Explain__brand'>Brand</p>
                <p className='ItemCard-Explain__title'>Title</p>
                <p className='ItemCard-Explain__price'>Price</p>
            </div>
        </Container>
    )
}

export default ItemCard;