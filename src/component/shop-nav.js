import React from 'react';

import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import filterProducts from '../api/helper'

const ShopNav = (props) => {
  const { products, setProductData } = props
  return (
    <div className="shopNav">
      <Nav vertical>
        <NavItem>
          <NavLink onClick={() => setProductData(filterProducts(products, {}))}>
            All
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret onClick={() => setProductData(filterProducts(products, {paintings: true}))}>
            Paintings
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => setProductData(filterProducts(products, {paintings: true, paintingType: 'canvas'}))}>
              Canvas
            </DropdownItem>
            <DropdownItem onClick={() => setProductData(filterProducts(products, {paintings: true, paintingType: 'print'}))}>
              Prints
            </DropdownItem>
            <DropdownItem onClick={() => setProductData(filterProducts(products, {paintings: true, paintingType: 'product'}))}>
              Products
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink onClick={() => setProductData(filterProducts(products, {mask: true}))}>Masks</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setProductData(filterProducts(products, {custom: true}))}>Custom</NavLink>
        </NavItem>
        {false && (
          <NavItem>
            <NavLink onClick={() => setProductData(filterProducts(products, {other: true}))}>Other</NavLink>
          </NavItem>
        )}
      </Nav>
    </div>
  );
}

export default ShopNav
