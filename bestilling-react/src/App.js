import React from "react";
import { Nav } from "./components/nav";
import { Treatment } from "./components/treatment";
import { Time } from "./components/time";
import { Info } from "./components/info";
import { Notification, showNotification } from "./components/notification";

export class App extends React.Component {
    bookTime() {
        let inputs = document.getElementsByClassName("input");
        let days = document.getElementsByClassName("day");
        let infoAccepted = true;
        let daySelected = false;

        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].classList.contains("correct")) {
                inputs[i].classList.add("error");
                infoAccepted = false;
            }
        }

        for (let i = 0; i < days.length; i++) {
            if (days[i].classList.contains("today")) {
                daySelected = true;
            } else {
                infoAccepted = false;
            }
        }

        if (!infoAccepted) {
            showNotification(
                "danger",
                "Noget af den information du har gevet, er ikke korrekt. Prøv igen."
            );
        }
    }
    render() {
        return (
            <div className="App">
                <Notification />
                <button className="book" onClick={() => this.bookTime()}>
                    Book tid
                </button>
                <Nav />
                <div className="container">
                    <div className="col" id="treatment">
                        <Treatment />
                    </div>
                    <div className="col" id="time">
                        <Time />
                    </div>
                    <div className="col" id="info">
                        <Info />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
