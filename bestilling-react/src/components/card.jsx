import React from "react";
let active = "";

export class Card extends React.Component {
    changeActive(id) {
        document
            .getElementsByClassName("card-active")[0]
            .classList.remove("card-active");
        document.getElementById(id).classList.add("card-active");
    }
    render() {
        if (this.props.active) {
            active = "card-active";
        } else {
            active = "";
        }

        return (
            <div
                className={"card " + active}
                id={this.props.id}
                onClick={() => this.changeActive(this.props.id)}
            ></div>
        );
    }
}
