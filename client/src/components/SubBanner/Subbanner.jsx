import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 600px;
    border:2px solid red;
    
    img{
        height: 600px;
        background-size: contain;
        width: 100%;
    }
`
// eslint-disable-next-line
function SubBanner(props){
    return (
       <Container  >
        {/* <img src={`${props.url}`}></img> */}
        <a href="https://www.naver.com"><img src="https://kream-phinf.pstatic.net/MjAyMjA5MTlfMjcy/MDAxNjYzNTU1NTA4NzE2.S9bnafs8cgB7CP2AMzf3_nQKWQTtkvlOwjcEMWdhahUg.BdcdyNfJ4HDINR218xqnZi7Nu03G0vVkbLUWmBwW3Xog.JPEG/a_6cbc040e537348688b7904978a325593.jpg?type=l"></img></a>
        
       </Container>
    )

}

export default SubBanner;