import React from "react";
// eslint-disable-next-line
import styled from "styled-components";
import ItemCard from "../Commons/ItemCard";


// eslint-disable-next-line
function MainItems(props) {
    return(
        <Container>
            <div className="ItemCards">
                {/* 추후에 props에 담긴 배열을 itemCard에 넣어주어야 한다.  */}
                {/* <ItemCard className="ItemCard"></ItemCard>
                <ItemCard className="ItemCard"></ItemCard>
                <ItemCard className="ItemCard"></ItemCard>
                <ItemCard className="ItemCard"></ItemCard> */}
                <ItemCard className="ItemCard"></ItemCard>
                <ItemCard className="ItemCard"></ItemCard>
                <ItemCard className="ItemCard"></ItemCard>
                <ItemCard className="ItemCard"></ItemCard>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    width:100%;

    .ItemCards{
        display:flex;
        border:2px solid blue;
    }


    
`


export default MainItems;

//한 라인에 4개씩 넣는다.
