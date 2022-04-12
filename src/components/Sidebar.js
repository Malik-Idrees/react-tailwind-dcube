import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    z-index: 10;
    .active {
        border-right: 4px solid var(--white);
    }
`

const Button = styled.button`
    position: relative;
    background-color: var(--black);
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin: 8px 0 0 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before,
    &::after {
        content: '';
        position: absolute;
        background-color: var(--white);
        height: 2px;
        width: 1rem;
        transition: all 0.3s ease;
    }

    &::before {
        top: ${(props) => (props.clicked ? '1.2rem' : '1rem')};
        transform: ${(props) => (props.clicked ? 'rotate(45deg)' : 'rotate(0deg)')};
    }

    &::after {
        top: ${(props) => (props.clicked ? '1.2rem' : '1.5rem')};
        transform: ${(props) => (props.clicked ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }
`

const SidebarContainer = styled.div`
    position: relative;
    background-color: var(--black);
    width: 3.5rem;
    height: 80vh;
    margin-top: 1rem;
    border-radius: 0 30px 30px 0;
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.div`
    width: 2rem;
    img {
        width: 100%;
    }
`

const SlickBar = styled.ul`
    color: var(--white);
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--black);
    padding: 3rem 0;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    // top: 5rem;
    // left: 0;

    width: ${(props) => (props.clicked ? '12rem' : '3.5rem')};
    border-radius: 0 30px 30px 0;
    transition: all 0.3s ease;
`

const Item = styled(NavLink)`
    width: 100%;
    text-decoration: none;
    color: var(--white);
    padding: 1rem 0;
    cursour: pointer;

    display: flex;
    align-items: center;
    padding-left: 1rem;

    &:hover {
        border-right: 4px solid var(--white);
        filter: brightness(0) saturate(100%) invert(89%) sepia(0%) saturate(4700%)
            hue-rotate(181deg) brightness(126%) contrast(104%);
    }

    img {
        width: 1.2rem;
        height: auto;
        filter: brightness(0) saturate(100%) invert(31%);
    }
`

const Text = styled.span`
    width: ${(props) => (props.clicked ? '100%' : '0')};
    overflow: hidden;
    white-space: nowrap;
    margin-left: ${(props) => (props.clicked ? '1.5rem' : '0')};
    transition: all 0.3s ease-in;
`

const Sidebar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

    const closeSidebar = () => {
        setClick(false)
    }

    return (
        <Container className='hidden md:block'>
            <Button
                clicked={click}
                onClick={() => {
                    handleClick()
                }}
            >
                Click
            </Button>

            <SidebarContainer>
                <Logo>
                    <img src='/assets/logo.svg' alt='' />
                </Logo>
                <SlickBar clicked={click}>
                    <Item onClick={() => closeSidebar()} to='/'>
                        <img src='/assets/home-solid.svg' alt='' />
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item
                        onClick={() => closeSidebar()}
                        to='/github'
                        target='_blank'
                        rel='noopener'
                    >
                        <img src='/assets/starred.svg' alt='' />
                        <Text clicked={click}>Github</Text>
                    </Item>
                    <Item
                        onClick={() => closeSidebar()}
                        to='/portfolio'
                        target='_blank'
                        rel='noopener'
                    >
                        <img src='/assets/logo.svg' alt='' />
                        <Text clicked={click}>About Me</Text>
                    </Item>
                </SlickBar>
            </SidebarContainer>
        </Container>
    )
}

export default Sidebar
