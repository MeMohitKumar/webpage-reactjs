import React from "react";
import styled from "styled-components";
import { buttonStyle } from "../styles/global-style";

const Modal = ({children, visible, setVisibility}) => {

    const handleClickOutside = () => {
        setVisibility(false)
    }

    return (
        <>
            {visible &&
                <ModalBackground onClick={handleClickOutside}>
                    <ModalArea onClick={(event) => event.stopPropagation()}>
                        {children}
                    </ModalArea>
                </ModalBackground>
            }
        </>
    )
}

const ModalBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalArea = styled.div`
    background-color: var(--background-color);
    padding: 40px;
    border-radius: 20px;

    @media (max-width: 768px) {
        padding: 20px;
    }

    .img-container {
        width: 500px;
        height: 400px;

        @media (max-width: 768px) {
            width: 375px;
            height: 300px;
        }

        @media (max-width: 480px) {
            width: 260px;
            height: 208px;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h2 {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    p {
        font-size: 18px;
    }

    .quantity-wrap {
        margin-top: 10px;
        border: 1px solid #bbb;
        width: fit-content;
        display: flex;
        align-items: center;
    }

    span {
        width: 40px;
        text-align: center;
    }

    button:not(.order) {
        all: unset;
        padding: 5px;

        &:hover {
            cursor: pointer;
            background-color: var(--main-color);
            transition: var(--time);
        }
    }

    .order {
        all: unset;
        margin-top: 10px;
        padding: 10px 0px;
        width: 100%;
        ${buttonStyle}
    }
`

export default Modal