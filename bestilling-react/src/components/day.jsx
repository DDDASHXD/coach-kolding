import React from "react";
import { setTrue, todayPresent } from "./datepicker";

export class Day extends React.Component {
    changeDate(id) {
        let today = document.getElementsByClassName("today")[0];
        let clickedId = document.getElementById(id);

        if (!clickedId.classList.contains("today")) {
            if (todayPresent) {
                today.classList.remove("today");
            }
            clickedId.classList.add("today");
            setTrue();
        }
    }
    render() {
        return (
            <div
                className={"day " + this.props.today}
                id={this.props.id}
                onClick={() => this.changeDate(this.props.id)}
            >
                <p>{this.props.day}</p>
            </div>
        );
    }
}
