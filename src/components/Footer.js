import React from "react";
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import styled from "styled-components";


const Footer = () => {
    return (
        <BaseBoard>
            <ul>
                <li><a href="/" title="Fale conosco pelo Whatsapp"><FaWhatsapp /></a></li>
                <li><a href="/" title="Peça pelo Ifood"><SiIfood /></a></li>
                <li><a href="/" title="Siga-nos no Instagram"><FaInstagram /></a></li>
                <li><a href="/" title="Entre no grupo do Telegram"><FaTelegram /></a></li>
            </ul>
            <p>&copy; 2024
                <a href="https://github.com/Antonio-Savio" rel="noreferrer" target="_blank">github.com/Antonio-Savio</a>
            </p>
        </BaseBoard>
    )
}

const BaseBoard = styled.footer`
    height: 90px;
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    ul {
        display: flex;
        list-style: none;
        gap: 20px;
    }

    ul li svg {
        width: 30px;
        height: 30px;
        transition: var(--time);
        cursor: pointer;
    }

    ul li svg:hover {
        color: #fff;
    }

    p {
        font-size: 14px;
    }

    p a {
        margin-left: 4px;
    }
`

export default Footer