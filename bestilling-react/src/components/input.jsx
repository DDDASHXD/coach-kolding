import React from "react";
import "../css/input.min.css";

export class Input extends React.Component {
    checkError(id) {
        if (id === "input-email") {
            let input = document.getElementById("input-email").value;
            let inputEl = document.getElementById("input-email");

            if (
                input.match(
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                )
            ) {
                inputEl.classList.add("correct");
                inputEl.classList.remove("error");
            } else {
                inputEl.classList.add("error");
                inputEl.classList.remove("correct");
            }

            if (input === "") {
                inputEl.classList.remove("error");
                inputEl.classList.remove("correct");
            }
        } else if (id === "input-phone") {
            let input = document.getElementById("input-phone").value;
            let inputEl = document.getElementById("input-phone");

            inputEl.value = input
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1");

            if (input.length == 8) {
                inputEl.classList.remove("error");
                inputEl.classList.add("correct");
            } else {
                inputEl.classList.add("error");
                inputEl.classList.remove("correct");
            }

            if (input === "") {
                inputEl.classList.remove("error");
                inputEl.classList.remove("correct");
            }
        } else {
            let input = document.getElementById(id);
            let inputEl = document.getElementById(id);
            if (document.getElementById(id).value === "") {
                document.getElementById(id).classList.remove("correct");
            } else {
                document.getElementById(id).classList.add("correct");
            }
        }
    }
    render() {
        let input;
        if (this.props.textarea) {
            input = (
                <textarea
                    className="textarea"
                    type="text"
                    id={this.props.id}
                    placeholder=" "
                    onKeyUp={() => this.checkError(this.props.id)}
                    className="textarea"
                />
            );
        } else {
            input = (
                <input
                    className="inputBox"
                    type="text"
                    id={this.props.id}
                    placeholder=" "
                    onKeyUp={() => this.checkError(this.props.id)}
                />
            );
        }
        return (
            <div className={"input "}>
                {input}
                <p className="label">{this.props.label}</p>
            </div>
        );
    }
}
