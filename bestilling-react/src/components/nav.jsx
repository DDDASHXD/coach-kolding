import React from "react";

import "../css/nav.min.css";

export class Nav extends React.Component {
    href(link) {
        document.location = link;
    }
    render() {
        return (
            <div className="nav">
                <div className="wrapper">
                    <div className="logo" onClick={() => this.href("../")}>
                        <img src="./assets/img/logo.svg" alt="" />
                    </div>
                    <h1>Tidsbestilling</h1>
                </div>
            </div>
        );
    }
}
