import React from "react";
import { TreatmentPicker } from "./treatment-picker";

export class Treatment extends React.Component {
    render() {
        return (
            <>
                <h3 class="treatment">Vælg behandling</h3>
                <TreatmentPicker />
            </>
        );
    }
}
