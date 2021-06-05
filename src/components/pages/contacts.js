import React, {Component} from "react";


export default class ContactsPage extends Component {
    render() {

        return (
            <div className={"contacts-page card bg-secondary card-body"}>
                <ul>
                    <li>
                        <p className={"card-text"}>Телеграм: @unordered</p>
                    </li>

                    <li>
                        <p className={"card-text"}>Почта: livan.skin@yandex.ru</p>
                    </li>

                    <li>
                        <p className={"card-text"}>Телефон: 8-937-951-87-61</p>
                    </li>
                </ul>
            </div>
        )
    }
}
