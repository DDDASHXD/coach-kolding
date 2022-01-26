import React from "react";
import "../css/input.min.css";

export class Input extends React.Component {
    render() {
        return (
            <div className="input">
                <input type="text" id={this.props.id} placeholder=" " />
                <p className="label">{this.props.label}</p>
            </div>
        );
    }
}
