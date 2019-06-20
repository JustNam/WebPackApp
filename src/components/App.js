import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

import Loadable from 'react-loadable';

const LoadableDiv = Loadable({
    loader: () => import('./Content'),
    loading() {
        return <div>Loading...</div>
    }
})

class App extends Component {
    render() {
        return  <div>
            <h1> My React app</h1>
            <Link className="addIcon" to="/Add">  </Link>
            <Route path='/Add' render={({ history }) => (
                <LoadableDiv onHistory={history} />
            )} />
        </div>;
    }
}

export default App