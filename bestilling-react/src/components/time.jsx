import React from "react";
import { Datepicker } from "./datepicker";

export class Time extends React.Component {
    render() {
        return (
            <>
                <h3>Dato og tid</h3>

                <Datepicker />
            </>
        );
    }
}
