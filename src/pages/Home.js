import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Banner from '../assets/sushi-background.jpg'
import { buttonStyle } from "../styles/global-style";

function Home() {
    return (
        <Main>
            <h1>Shiawase Sushi</h1>
            <p>Feel the happiness at every bite</p>
            <Link to='/menu'>
                <button>ORDER RIGHT AWAY</button>
            </Link>
        </Main>
    )
}

const Main = styled.main`
    background: url(${Banner}) no-repeat center;
    background-size: cover;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding-inline: 30px;
    
    &::after {
        content: '';
        position: absolute;
        top: 90px;
        left: 0;
        width: 100%;
        height: 80vh;
        background-color: rgba(208, 231, 210, 0.4);
    }

    h1 {
        letter-spacing: 1px;
        font-size: 50px;
    }

    p {
        font-size: 26px;
    }

    button {
        border: none;
        padding: 10px 20px;
        ${buttonStyle}
        font-size: 18px;
    }

    a {
        width: fit-content;
    }

    h1, a, button, p {
        z-index: 1;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 35px;
        }

        p {
            font-size: 18px;
        }

        button {
            font-size: 16px;
        }
    }
`

export default Home