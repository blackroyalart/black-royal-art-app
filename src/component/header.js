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
    <Navbar className="header themed-container justify-content-between navbar-light" expand="md" fixed="top" >
      <div className="container-fluid">
        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar className="dual-nav w-50 order-1 order-md-0">
          <NavLink href="/art">My Art</NavLink>
          <NavLink href="/about">About Me</NavLink>
          <NavLink href="/shop">Shop</NavLink>
        </Collapse>

        <NavbarBrand href="/" navbar className="mx-auto d-block text-center order-0 order-md-1 w-25">
          Black Royal Art
        </NavbarBrand>

        <Collapse isOpen={isOpen} navbar className="navbar-collapse collapse dual-nav w-50 order-2">
          {/* <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/shop">Shop</NavLink>
            </NavItem>
          </Nav> */}
          <div className="shopping-cart ml-auto">
            <div className="Header__summary snipcart-summary snipcart-checkout">      
              <CartIcon className="cart-button" width={35} height={35}/>
            </div>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default Header