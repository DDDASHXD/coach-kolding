import React from "react";
import { Datepicker } from "./datepicker";
import { Timepicker } from "./timepicker";

export class Time extends React.Component {
    render() {
        return (
            <>
                <h3>Dato og tid</h3>

                <Datepicker />
                <Timepicker />
            </>
        );
    }
}
