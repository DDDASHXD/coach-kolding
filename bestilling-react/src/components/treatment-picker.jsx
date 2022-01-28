import React from "react";
import { Card } from "./card";

import "../css/treatment-picker.min.css";

export class TreatmentPicker extends React.Component {
    render() {
        return (
            <div className="treatmentPicker">
                <Card active={true} id="card-0" title="Coachende samtale" />
                <Card id="card-1" title="Coachende samtale + NADA" />
                <Card id="card-2" title="NADA i gruppe" />
                <Card id="card-3" title="Parsamtale" />
                <Card id="card-4" title="Netværkssamtale" />
            </div>
        );
    }
}
