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
        {/* 추후 이미지 소스를 아이템에 답긴 url 또는 페이지로 수정해 주어야 한다. */}
        {/* <img src={`${props.url}`}></img> */}
        <a href="https://www.naver.com"><img src="https://kream-phinf.pstatic.net/MjAyMjA5MTlfMjcy/MDAxNjYzNTU1NTA4NzE2.S9bnafs8cgB7CP2AMzf3_nQKWQTtkvlOwjcEMWdhahUg.BdcdyNfJ4HDINR218xqnZi7Nu03G0vVkbLUWmBwW3Xog.JPEG/a_6cbc040e537348688b7904978a325593.jpg?type=l"></img></a>
        
       </Container>
    )

}

export default SubBanner;