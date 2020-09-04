import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import '../style/Header.scss'
import { Cart4 as CartIcon } from 'react-bootstrap-icons';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="header themed-container" color="transparent" expand="md" fixed="top" >
      <NavbarBrand href="/" navbar>Black Royal Art</NavbarBrand>
      <NavLink href="/art">My Art</NavLink>
      <NavLink href="/about">About Me</NavLink>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/shop">Shop</NavLink>
          </NavItem>
        </Nav>
        <div className="shopping-cart">
          <div className="Header__summary snipcart-summary snipcart-checkout">      
            <CartIcon className="cart-button" width={20} height={40}/>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Header