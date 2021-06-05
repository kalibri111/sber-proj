import React, {Component} from "react";
import {Link} from "react-router-dom";

import NavButton from "../nav-button";

class NavBar extends Component {
    state = {
        active_id: 0
    }

    setActive = (id) => {
        this.setState({active_id: id})
    }

    getClassText = (id) => {
        return "nav-link ".concat(id === this.state.active_id ? "active" : "");
    }

    render() {

        console.log(this.state.active_id);
        return (
            <div className="navbar nav nav-pills">
                <NavButton id={1} linkTo={"/"}           labelText={"Обо мне"}     onLabelClick={this.setActive} classText={this.getClassText(1)}/>
                <NavButton id={2} linkTo={"/projects/"}  labelText={"Проекты"}     onLabelClick={this.setActive} classText={this.getClassText(2)}/>
                <NavButton id={3} linkTo={"/education/"} labelText={"Образование"} onLabelClick={this.setActive} classText={this.getClassText(3)}/>
                <NavButton id={4} linkTo={"/contacts/"}  labelText={"Контакты"}    onLabelClick={this.setActive} classText={this.getClassText(4)}/>
            </div>
        )
    }
}

export default NavBar;