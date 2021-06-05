import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavButton extends Component {

    componentDidMount() {
        this.setState({id: this.props.id});
    }

    state = {
        id: 0,
    }

    clickListener = () => {
        console.log("NavButton id is ".concat(this.state.id));
        this.props.onLabelClick(this.state.id);
    }

    render() {
        const {labelText, linkTo, classText} = this.props;

        return (
        <li className="nav-item">
            <Link
                to={linkTo}
                className={classText}
                onClick={this.clickListener}
            >{labelText}</Link>
        </li>
        );
    }
}

export default NavButton;