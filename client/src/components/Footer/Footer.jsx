import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../../assets/images/logo_demo02.svg";
import { Link } from "react-router-dom";

<<<<<<< HEAD

function Footer() {
    return(
        <Container>
            <div className="Footer-Left">
                {/* 로고를 눌렀을 때 홈으로 연결되어야 한다 */}
                <a href="#">
                    <h1>LOGO</h1>
                </a>
            </div>
            <div className="Footer-Middle">
                <a href="#">Menu</a>
                <a href="#">Menu</a>
                <a href="#">Menu</a>
                <a href="#">Menu</a>
            </div>
            {/* 추후에 버튼을 누를시 연결해줄 링크를 만들어야 한다. */}
            <div className="Footer-Right">
                <button>Register</button>  
                <button><AiOutlineMail />&nbsp;&nbsp;Email</button>
            </div>
        </Container>
    )
    
}

let Container = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
=======
function Footer() {
  return (
    <Container>
      <div className="Footer-Left">
        {/* 로고를 눌렀을 때 홈으로 연결되어야 한다 */}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="Footer-Middle">
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
      </div>
      {/* 추후에 버튼을 누를시 연결해줄 링크를 만들어야 한다. */}
      <div className="Footer-Right">
        <button>Register</button>
        <button>
          <AiOutlineMail />
          &nbsp;&nbsp;Email
        </button>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  height: 220px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: #4b4b4b;
  display: flex;
>>>>>>> b21e5fc81133c5712209842f04df1a6adf925b63

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 100px;
  }

  .Footer-Left {
    a {
      color: white;
    }

    img {
      width: 120px;
    }
  }

  .Footer-Middle {
    a {
      text-decoration: none;
      color: white;
      margin: 0 10px;
      font-size: 20px;
    }
  }

  .Footer-Right {
    button {
      border: 2px solid white;
      background-color: #565656;
      color: white;
      padding: 5px 7px;
      margin: 0 10px;
      font-size: 18px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
<<<<<<< HEAD
`
=======
  }
`;
>>>>>>> b21e5fc81133c5712209842f04df1a6adf925b63

export default Footer;
