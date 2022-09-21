import React, { useState } from "react";
// eslint-disable-next-line
import styled from "styled-components";



function MainItemsCategory() {

    const [btnActive, setBtnActive] = useState("1");
    const handleClicked = (e) =>{
        //클릭시에 패치 요청을 보내서 적절한 아이템들을 띄우ㅓ 주어야 한다. 

        setBtnActive( e.target.id); 
        e.preventDefault();
    }


   

    return(
        <Container>
            <div className="Banner-Items">
                <a href="#" id= "1"  onClick={handleClicked} className={"Banner-Item " + (btnActive === "1"? "active" : "")}>Best seller</a>
                <a href="#" id="2" onClick={handleClicked} className={"Banner-Item " + (btnActive === "2"? "active" : "")}>New arrivals</a>
                <a href="#" id="3" onClick={handleClicked} className={"Banner-Item " + (btnActive === "3"? "active" : "")}>Sale Item</a>
            </div>
        </Container>
    )

}


export default MainItemsCategory;

const Container = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    width: 100%;
    display:flex;
    justify-content: center;
    
    
    .Banner-Items{
        width: 700px;
        display:flex;
        justify-content: space-around;
    }

    a{
        color: black;
        text-decoration: none;
        font-size:30px;
        font-weight: bold;
    }
    .active{
        font-size: 33px;
        text-decoration:underline;
        text-decoration-color:  #2d7ef3;
    }

`