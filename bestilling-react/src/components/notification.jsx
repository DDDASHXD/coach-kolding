import React from "react";
import "../css/notification.min.css";

export const showNotification = (color, string) => {
    let el = document.getElementsByClassName("notification")[0];
    let elLabel = document.getElementById("notificationLabel");

    if (color === "danger") {
        el.classList.remove("success");
        el.classList.add("danger");
    } else {
        el.classList.add("success");
        el.classList.remove("danger");
    }
    elLabel.innerHTML = string;
    el.classList.remove("hidden");
    setTimeout(() => {
        el.classList.add("hidden");
    }, 5000);
};

export class Notification extends React.Component {
    render() {
        return (
            <div
                className="notification hidden"
                onClick={() =>
                    document
                        .getElementsByClassName("notification")[0]
                        .classList.add("hidden")
                }
            >
                <p id="notificationLabel"></p>
            </div>
        );
    }
}
