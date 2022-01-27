import React from "react";
import { Day } from "./day";
import { Timepicker } from "./timepicker";
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

let currentMonthNr = d.getMonth();
let currentMonth = Months[currentMonthNr];
let currentYear = d.getFullYear();

let minMonth = d.getMonth();

let getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
};

let days = [];

const reloadDates = () => {
    for (let i = 0; i < getDaysInMonth(currentYear, currentMonthNr); i++) {
        if (i === d.getDate()) {
            days[i] = { id: i, day: i + 1, today: "today" };
        } else {
            days[i] = { id: i, day: i + 1, today: "" };
        }
    }
};

reloadDates();

export class Datepicker extends React.Component {
    next() {
        currentMonthNr++;
        currentMonth = Months[currentMonthNr];
        document.getElementsByClassName("");

        for (let i = 0; i < days.length; i++) {
            days[i] = 0;
        }

        reloadDates();
        this.setState({});
    }
    prev() {
        currentMonthNr--;
        currentMonth = Months[currentMonthNr];

        for (let i = 0; i < days.length; i++) {
            days[i] = 0;
        }

        reloadDates();
        this.setState({});
    }
    today() {
        currentMonthNr = d.getMonth();
        currentMonth = Months[currentMonthNr];

        for (let i = 0; i < days.length; i++) {
            days[i] = 0;
        }

        reloadDates();
        this.setState({});
    }
    render() {
        let hidden = "";
        const dates = days.map((x) => (
            <Day day={x.day} id={"day-" + x.id} today={x.today} />
        ));
        if (currentMonthNr == minMonth) {
            hidden = "hidden";
            document.getElementById("prev").classList.add("hidden");
        }
        return (
            <div className="datepicker">
                <div className="heading">
                    <h2>{currentMonth + " " + currentYear}</h2>
                    <button
                        className="monthpicker"
                        id="prev"
                        onClick={() => this.prev()}
                        className={hidden}
                    >
                        {"<"}
                    </button>
                    <button
                        className="monthpicker"
                        id="next"
                        onClick={() => this.next()}
                    >
                        {">"}
                    </button>
                    <button className="to-today" onClick={() => this.today()}>
                        Today
                    </button>
                </div>
                <div className="days">
                    <div className="grid">{dates}</div>
                </div>
                <Timepicker />
            </div>
        );
    }
}
