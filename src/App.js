import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Header from "./components/Layout/Header/Header";
import Footer from './components/Layout/Footer/Footer';
import Home from "./containers/CorePages/Home/Home";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Home />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
