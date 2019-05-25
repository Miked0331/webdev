import React from 'react';
import Icon2 from './Image/icon2.png'
import './index.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="brand" ><img src={Icon2} alt="Flowers in Chania"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <AnchorLink href='#html'><NavLink href="https://github.com/Miked0331" target="_blank" title="GitHub" target="_blank">HTML</NavLink></AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink href='#CSS'><NavLink href="https://www.linkedin.com/in/michael-dragun-42b925137/" target="_blank">CSS</NavLink></AnchorLink>
              </NavItem>

              <NavItem>
                <AnchorLink href='#JS'><NavLink id="scroll-link" href="https://www.linkedin.com/in/michael-dragun-42b925137/" target="_blank">JavaScript</NavLink></AnchorLink>
              </NavItem>



            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}