import React from 'react';
import {Nav, NavItem,  NavLink } from 'reactstrap';

import styled from "styled-components"  
{/*
const Navcont = styled.div`
    display = flex;
    height = 100px;
    justify-content: space-around;
    align-items: center;
    justify-content: flex-start
`
const Cardpic = styled.div`
        height: 50px;
        width: 20%;
        margin: auto;
`
const Nav = styled.nav`
        height: 100px;
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        text-align: center

`
<Nav>
                <img src={airbnb} activeLink/>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">My Properites</NavLink>
                <NavLink href="#">List</NavLink> 
                <NavLink style={{color:'red'}} href="#"><strong>Price Optimizer</strong></NavLink>
            </Nav>
*/}
const Imgdiv = styled.div`
    display = flex;
    height = 50px;
    justify-content: flex-start;
    align-items: right;
    justify-content: flex-start
`


export default class Example extends React.Component {

  render() {
    return (
        <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">My Properites</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">New Listing</NavLink>
          </NavItem>
          <NavItem>
          <NavLink style={{color:'red'}} href="#"><strong>Price Optimizer</strong></NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
