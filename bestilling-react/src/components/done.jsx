import React from "react";
import { info } from "../App";
import "../css/done.min.css";

export const showDone = () => {
    /*document.getElementById("done-day").innerHTML = info.selectedDay;
    document.getElementById("done-month").innerHTML = info.month;*/
    document.getElementById("done-treatment").innerHTML =
        info.selectedTreatment;

    document.getElementsByClassName("done")[0].classList.add("shown");
    document.getElementsByClassName("book")[0].innerHTML = "Tilbage";
    document.getElementsByClassName("book")[0].classList.add("back");
};

export class Done extends React.Component {
    render() {
        return (
            <div className="done">
                <h2>Din bestilling er sendt!</h2>
                <p>
                    Du har bestilt tid den <span id="done-day"></span>.{" "}
                    <span id="done-month"></span> til{" "}
                    <span id="done-treatment"></span>
                </p>
            </div>
        );
    }
}
