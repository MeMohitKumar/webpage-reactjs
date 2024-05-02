import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Logo from '../assets/restaurant-logo.png'
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const burgerRef = useRef()
    const menuRef = useRef()

    const handleClickOutside = (event) => {
        if (burgerRef.current && menuRef.current &&
            !menuRef.current.contains(event.target) &&
            !burgerRef.current.contains(event.target)) {
          setMenuOpen(false)
          localStorage.setItem('isMenuOpened', false)
        }
    };

    function toggleMenu() {
        setMenuOpen(!menuOpen)
        localStorage.setItem('isMenuOpened', !menuOpen)
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
    })

    useEffect(() => {
        const menuData = localStorage.getItem('isMenuOpened')
        if (menuData){
            setMenuOpen(JSON.parse(menuData))
        }
    }, [])

    return (
        <Header>
            <Link to="/">
                <img src={Logo} alt="restaurant logo" />
            </Link>
            
            <div ref={burgerRef} onClick={toggleMenu}>
                <span className={menuOpen ? "openedMenu" : ""}>
                </span>
            </div>

            <div ref={menuRef} className={menuOpen ? "openedMenu" : ""}>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--main-color);
    padding: 0px 30px;

    a:first-of-type {
        display: flex;
        transition: var(--time);
    }

    a:first-of-type:hover {
        transform: scale(1.03);
    }

    img {
        width: 90px;
        filter: drop-shadow(2px 2px 4px #000);
    }

    div:first-of-type {
        width: 34px;
        height: 60px;
        cursor: pointer;
        display: none;
    }

    & div:last-child {
        display: flex;
        gap: 30px;
        font-weight: 500;
        z-index: 2;
    }

    & div:last-child a {
        transition: var(--time);
    }

    & div:last-child a:hover {
        color: #fff;
    }

    span {
        background-color: #000;
        position: relative;
        display: block;
        width: 34px;
        height: 3px;
        top: 29px;
        transition: 0.5s ease-in-out;
    }

    span::before, span::after {
        background-color: #000;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        content: "";
        transition: 0.5s ease-in-out;
    }

    span::before {
        top: -12px;
    }

    span::after {
        bottom: -12px;
    }

    span.openedMenu {
        transform: rotate(45deg);
    }

    span.openedMenu::before {
        transform: rotate(90deg);
        top: 0;
    }

    span.openedMenu::after {
        transform: rotate(90deg);
        bottom: 0;
    }

    @media (max-width: 600px) {
        div:first-of-type {
            display: block;
        }

        & div:last-child {
            flex-direction: column;
            align-items: center;
            background-color: var(--main-color);
            position: absolute;
            right: 0;
            top: 0;
            margin-top: 90px;
            padding: 30px;
            display: none;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        div.openedMenu {
            display: flex;
        }
    }
`

export default Navbar