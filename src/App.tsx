// Imports
import React from "react";
import Container from "react-bootstrap/Container";
import { hot } from "react-hot-loader/root";
import { Switch, Redirect, Route } from "react-router-dom";
import Header from "./components/Header";
import ConnectedGallery from "./containers/ConnectedGallery";

// Component
const App: React.FC = () => (
    <Container fluid>
        <Header />
        <h1>Hello, World!</h1>
        <Switch>
            <Redirect from="/" to="/photos/dogs" exact />
            <Route path="/photos/:tag" component={ConnectedGallery} />
        </Switch>
    </Container>
);

// Export
export default hot(App);
