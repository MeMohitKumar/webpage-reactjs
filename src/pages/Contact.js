import React, { useState } from "react";
import Shiawase from '../assets/shiawase.jpg'
import styled from "styled-components";
import { buttonStyle } from "../styles/global-style";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChanges = (e) => {
        const {name, value} = e.target

        setFormState((prevState) => ({
            ...prevState,
            
            [name]: value,
        }))
    }

    return (
        <Main>
            <div className="left-side">
            </div>
            
            <div className="right-side">
                <h1>Contact Us</h1>
                
                <form method="GET" noValidate>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={formState.name} onChange={handleChanges} />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={formState.email} onChange={handleChanges} />

                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        name="message"
                        id="message"
                        value={formState.message}
                        onChange={handleChanges}
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    
    .left-side {
        width: 50vw;
        background: url(${Shiawase}) no-repeat center;
        background-size: cover;
    }

    .right-side {
        width: 50vw;
        padding: 50px;
        min-height: 80vh;
        background-color: var(--background-color);
    }

    h1 {
        margin-bottom: 50px;
        font-style: oblique;
        text-align: center;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input, textarea, button {
        margin-bottom: 10px;
        width: 100%;
        outline: none;
        padding: 10px;
        border: none;
        border-radius: 8px;
        transition: var(--time);
    }

    input, textarea {
        box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.2);
    }

    input:focus, textarea:focus {
        box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);
    }

    textarea {
        width: 100%;
        resize: none;
    }

    button {
        margin-top: 10px;
        ${buttonStyle}
    }

    @media (max-width: 600px) {
        .left-side {
            display: none;
        }

        .right-side {
            width: 100vw;
        }
    }
`

export default Contact