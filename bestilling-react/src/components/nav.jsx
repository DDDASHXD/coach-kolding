import React from "react";

import "../css/nav.min.css";

export class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="wrapper">
                    <div className="logo">
                        <img src="./assets/img/logo.svg" alt="" />
                    </div>
                    <h1>Tidsbestilling</h1>
                </div>
            </div>
        );
    }
}
