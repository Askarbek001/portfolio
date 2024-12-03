import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Components/Header/Header';
import './App.css';
import { HomePages } from './Home/HomePages';
import { Footer } from './Components/footer/Footer';
import { SinglePage } from './Components/watch/SinglePage';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePages} />
                    <Route
                        exact
                        path="/singlePage/:id"
                        component={SinglePage}
                    />
                </Switch>
                <Footer />
            </Router>
        </>
    );
};
export default App;
