import React from "react";
import { Card } from "./card";

import "../css/treatment-picker.min.css";

export class TreatmentPicker extends React.Component {
    render() {
        return (
            <div className="treatmentPicker">
                <Card active={true} id="card-0" />
                <Card id="card-1" />
                <Card id="card-2" />
                <Card id="card-3" />
            </div>
        );
    }
}
