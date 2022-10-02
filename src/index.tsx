import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "./services/store";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <Provider>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </Router>
);