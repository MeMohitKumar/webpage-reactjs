import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { FaPlus, FaMinus } from "react-icons/fa";


const MenuItem = ({name, image, price}) => {
    const [modalVisible, setModalVisible] = useState(false)

    const [counter, setCounter] = useState(1)

    const handleCardClick = () => {
        setModalVisible(true)
    }

    return (
        <>
            <Card onClick={handleCardClick}>
                <div style={{ backgroundImage: `url(${image})` }}> </div>
                <h3>{name}</h3>
                <p>${price} per unit</p>
            </Card>

            <Modal visible={modalVisible} setVisibility={setModalVisible}>
                <div className="img-container">
                    <img src={image} width="320px" alt={name} />
                </div>

                <h2>{name}</h2>
                <p>${(price * counter).toFixed(2)}</p>

                <div className="quantity-wrap">
                    <button onClick={() => counter > 1 ? setCounter(counter - 1) : setCounter(1)}><FaMinus /></button>
                    <span>{counter}</span>
                    <button onClick={() => setCounter(counter + 1)}><FaPlus /></button>
                </div>

                <button className="order">Order</button>

            </Modal>
        </>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s ease;
    background-color: #fff;

    &:hover {
        box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
        transform: scale(1.01);
    }

    div {
        background-position: center;
        background-size: cover;
        width: 250px;
        height: 200px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        margin-bottom: 20px;
    }

    h3, p {
        padding-inline: 20px;
    }

    p {
        padding-top: 10px;
        padding-bottom: 20px;
    }
`

export default MenuItem