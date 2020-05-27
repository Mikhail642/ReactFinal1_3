import React, {Component} from 'react';
import Osnovneazadachi from './Osnovneazadachi';
import Vtorostepenyazadachi from './Vtorostepenyazadachi';


class Main extends Component {
    render() {
        return (
            <div>
                <h1>Проект React</h1>
                <ul className="header">
                    <li><a href="/Osnovneazadachi.js">Основные задачи</a></li>
                    <li><a href="/Vtorostepenyazadachi.js">Второстепенные задачи</a></li>
                    
                </ul>
                <div className="content"></div>
            </div>
        );
    }
}

export default Main;