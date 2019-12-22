import * as React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row, Col } from 'reactstrap';
import * as uuidv4 from 'uuid/v4';
import logo from '../../assets/logo.png';

class Header extends React.Component {
  navBar = ['HOME', 'ORDER', 'WAREHOUSE', 'CUSTOMER', 'SYSTEM', 'NOTIFICATION'];

  renderNavItem = (name: string) => (
    <NavItem key={uuidv4()}>
      <NavLink href="#">{name}</NavLink>
    </NavItem>
  );

  renderUserInfo = () => (
    <div className="header__info">
      <img src="https://picsum.photos/200/300" alt="404 Not Found" className="header__avatar" />
      <span className="header__name">Howdy!</span>
    </div>
  );

  render() {
    return (
      <header className="header">
        <Row className="no-padding no-margin">
          <Col md="4" lg="4" xl="4" className="header__left">
            <NavbarBrand href="/">
              <img src={logo} className="header__logo" alt="404 Not Found" />
            </NavbarBrand>
          </Col>
          <Col md="8" lg="8" xl="8" className="header__right">
            <Navbar expand="md">
              <Nav className="mr-auto" navbar>
                {this.navBar.map(item => this.renderNavItem(item))}
              </Nav>
            </Navbar>
            <div className="header__user">{this.renderUserInfo()}</div>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
