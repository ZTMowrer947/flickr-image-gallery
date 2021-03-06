// Imports
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

// Component
const MainNav: React.FC = () => (
    <nav>
        <Nav justify variant="pills" as="ul">
            <Nav.Item as="li">
                <LinkContainer to="/tagged/dogs" exact>
                    <Nav.Link>Dogs</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item as="li">
                <LinkContainer to="/tagged/cats" exact>
                    <Nav.Link>Cats</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item as="li">
                <LinkContainer to="/tagged/computers" exact>
                    <Nav.Link>Computers</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    </nav>
);

// Export
export default MainNav;
