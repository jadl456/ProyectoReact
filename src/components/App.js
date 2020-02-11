import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import BadgeNew from '../page/BadgeNew';
import Badges from '../page/Badges';
import NotFound from '../page/NotFound';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component = {Badges}/>
                    <Route exact path="/badges/new" component = {BadgeNew}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;