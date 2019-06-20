import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/stylesheet.css';
import Loadable from 'react-loadable';
import {BrowserRouter} from 'react-router-dom';

const LoadableContentDiv = Loadable({
    loader: () => import()
})

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));