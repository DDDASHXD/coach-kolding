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

export let todayPresent = true;

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

export const setTrue = () => {
    todayPresent = true;
};

export class Datepicker extends React.Component {
    next() {
        currentMonthNr++;
        currentMonth = Months[currentMonthNr];
        if (todayPresent) {
            document
                .getElementsByClassName("today")[0]
                .classList.remove("today");
            todayPresent = false;
        }

        for (let i = 0; i < days.length; i++) {
            days[i] = 0;
        }

        reloadDates();
        this.setState({});
    }
    prev() {
        currentMonthNr--;
        currentMonth = Months[currentMonthNr];
        if (todayPresent) {
            document
                .getElementsByClassName("today")[0]
                .classList.remove("today");
            todayPresent = false;
        }

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
        const dates = days.map((x) => (
            <Day day={x.day} id={"day-" + x.id} today={x.today} />
        ));
        let hidden = "";
        if (currentMonthNr == minMonth) {
            hidden = "hidden";
        }
        return (
            <div className="datepicker">
                <div className="heading">
                    <button
                        className={"monthpicker " + hidden}
                        id="prev"
                        onClick={() => this.prev()}
                    >
                        <img src="./assets/icons/arrow.svg" alt="" />
                    </button>
                    <h2>{currentMonth + " " + currentYear}</h2>
                    <button
                        className="monthpicker"
                        id="next"
                        onClick={() => this.next()}
                    >
                        <img src="./assets/icons/arrow.svg" alt="" />
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
