import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const ShopNav = (props) => {
  return (
    <div className="shopNav">
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Paintings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Masks</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Custom</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default ShopNav