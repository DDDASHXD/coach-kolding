import React from "react";
import "../css/timepicker.min.css";

let hoursArr = [];
let minArr = [];

for (let i = 0; i < 24; i++) {
    if (i > 9 && i < 17) {
        hoursArr[i] = ("0" + i).slice(-2);
    }
}

for (let i = 0; i < 55; i++) {
    if (i == 0) {
        i = i;
    } else if (i > 0 && i < 2) {
        i = i + 4;
    } else if (i > 5) {
        i = i + 4;
    }
    minArr[i] = ("0" + i).slice(-2);
}

export class Timepicker extends React.Component {
    render() {
        const hours = hoursArr.map((x) => <option value={x}>{x}</option>);
        const min = minArr.map((x) => <option value={x}>{x}</option>);
        return (
            <div className="timepicker">
                <select name="hour" id="hour">
                    {hours}
                </select>
                <img className="divider" src="./assets/icons/colon.svg" />
                <select name="minute" id="minute">
                    {min}
                </select>
            </div>
        );
    }
}
