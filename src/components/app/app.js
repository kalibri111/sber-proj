import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Description from "../description";
import NavBar from "../nav-bar";
import {ContactsPage, EducationPage, ProjectsPage} from "../pages";

export default class App extends Component {
    render() {
        return (
            <div className="visitka-sample">
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route path={"/"} component={Description} exact={true}/>
                        <Route path={"/contacts/"} component={ContactsPage}/>
                        <Route path={"/education/"} component={EducationPage}/>
                        <Route path={"/projects/"} component={ProjectsPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}