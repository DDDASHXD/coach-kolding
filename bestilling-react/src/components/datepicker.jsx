import React from "react";
import { Day } from "./day";
import "../css/datepicker.min.css";

export const d = new Date();

const Months = [
    "Januar",
    "Febuar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
];

let getDaysInMonth = () => {
    return new Date(d.getFullYear(), d.getMonth(), 0).getDate();
};

let days = [];

for (let i = 0; i < getDaysInMonth(); i++) {
    if (i === d.getDate()) {
        days[i] = { id: i, day: i + 1, today: "today" };
    } else {
        days[i] = { id: i, day: i + 1, today: "" };
    }
}

export class Datepicker extends React.Component {
    render() {
        const dates = days.map((x) => (
            <Day day={x.day} id={"day-" + x.id} today={x.today} />
        ));
        return (
            <div className="datepicker">
                <div className="heading">
                    <h2>Januar 2022</h2>
                </div>
                <div className="days">
                    <div className="grid">{dates}</div>
                </div>
            </div>
        );
    }
}
