import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import { Switch, Route, HashRouter } from 'react-router-dom';

export default (
            <Switch>
                <Route component={H_Login} exact path= '/'/>
                <Route component={H_Nav} exact path= '/game-settings'/>
                <Route component={HP-Nav} exact path= '/game-playing'/>
            </Switch>
)