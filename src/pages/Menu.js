import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import styled from 'styled-components'

const Menu = () => {
    return (
        <Main>
            <h1>Our Menu</h1>
            <CardWrap>
                {MenuList.map((item, index) => {
                    return (
                        <MenuItem 
                            key={index}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />)
                })}
            </CardWrap>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    background-color: var(--background-color);

    h1 {
        font-style: oblique;
    }
`

const CardWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    padding: 50px 20px;
`

export default Menu