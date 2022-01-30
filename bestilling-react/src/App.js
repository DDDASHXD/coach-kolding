import React from "react";
import emailjs from "@emailjs/browser";
import { Nav } from "./components/nav";
import { Treatment } from "./components/treatment";
import { Time } from "./components/time";
import { Info } from "./components/info";
import { Notification, showNotification } from "./components/notification";
import { Months, currentMonthNr } from "./components/datepicker";
import { Done, showDone } from "./components/done";

let done = false;

let emailjsApi = {
    userId: "user_DusWKWompI2cyBwFSo9Fb",
    serviceId: "service_fjipfvd",
    templateId: "template_enmwmam",
};

function generateId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export let info = {};

export class App extends React.Component {
    bookTime() {
        let inputs = document.getElementsByClassName("inputBox");
        let days = document.getElementsByClassName("day");
        let treatments = document.getElementsByClassName("card");
        let infoAccepted = true;
        let inputsCorrect = true;
        let daySelected = false;
        let selectedDay;
        let selectedTreatment;

        document.getElementById("done-month").innerHTML =
            Months[currentMonthNr];

        if (!done) {
            for (let i = 0; i < inputs.length; i++) {
                if (!inputs[i].classList.contains("correct")) {
                    inputs[i].classList.add("error");
                    inputsCorrect = false;
                    console.log("correct");
                }
            }

            for (let i = 0; i < days.length; i++) {
                if (days[i].classList.contains("today")) {
                    daySelected = true;
                    selectedDay = days[i].textContent;
                    document.getElementById("done-day").innerHTML = selectedDay;
                } else {
                    infoAccepted = false;
                }
            }

            if (daySelected && inputsCorrect) {
                infoAccepted = true;
            }

            for (let i = 0; i < treatments.length; i++) {
                if (treatments[i].classList.contains("card-active")) {
                    let treatmentActive = treatments[i].id;

                    switch (treatmentActive) {
                        case "card-0":
                            selectedTreatment = "Coachende samtale";
                            break;
                        case "card-1":
                            selectedTreatment = "Coachende samtale + NADA";
                            break;
                        case "card-2":
                            selectedTreatment = "NADA i gruppe";
                            break;
                        case "card-3":
                            selectedTreatment = "Parsamtale";
                            break;
                        case "card-4":
                            selectedTreatment = "Netværkssamtale";
                            break;
                    }
                    info = { selectedTreatment: selectedTreatment };
                }
            }

            if (!infoAccepted) {
                showNotification(
                    "danger",
                    "Noget af den information du har gevet, er ikke korrekt. Prøv igen."
                );
            } else {
                done = true;
                showNotification("success", "Sender bestilling...");
                emailjs.init("user_DusWKWompI2cyBwFSo9Fb");
                var templateParams = {
                    id: generateId(10000, 99999),
                    fornavn: document.getElementById("input-name").value,
                    efternavn: document.getElementById("input-sur").value,
                    email: document.getElementById("input-email").value,
                    phone: document.getElementById("input-phone").value,
                    msg: document.getElementById("input-msg").value,
                    day: selectedDay,
                    month: Months[currentMonthNr],
                    hour: document.getElementById("hour").value,
                    minute: document.getElementById("minute").value,
                    treatment: selectedTreatment,
                };
                fetch("/api/tasks/add", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: templateParams.fornavn,
                        surname: templateParams.efternavn,
                        email: templateParams.email,
                        phone: templateParams.phone,
                        msg: templateParams.msg,
                        day: templateParams.day,
                        month: templateParams.month,
                        hour: templateParams.hour,
                        minute: templateParams.minute,
                        treatment: templateParams.treatment,
                    }),
                }).then(() => {
                    console.log("Sent");
                });
                /*emailjs
                    .send("service_fjipfvd", "template_enmwmam", templateParams)
                    .then(
                        function (response) {
                            console.log(
                                "SUCCESS!",
                                response.status,
                                response.text
                            );
                            showDone();
                        },
                        function (error) {
                            console.log("FAILED...", error);
                        }
                    );
                emailjs
                    .send("service_fjipfvd", "template_66nvj19", templateParams)
                    .then(
                        function (response) {
                            console.log(
                                "SUCCESS!",
                                response.status,
                                response.text
                            );
                            showDone();
                        },
                        function (error) {
                            console.log("FAILED...", error);
                        }
                    );*/
            }
        } else {
            document.href = "../";
        }
    }
    render() {
        return (
            <div className="App">
                <Notification />
                <Done />
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
