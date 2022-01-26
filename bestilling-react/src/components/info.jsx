import React from "react";
import { Input } from "./input";
import "../css/info.min.css";

export class Info extends React.Component {
    render() {
        return (
            <>
                <h3>Kontaktinformationer</h3>

                <div className="form">
                    <Input id="input-name" label="Fornavn" />
                    <Input id="input-name" label="Efternavn" />
                    <Input id="input-name" label="Email" />
                    <Input id="input-name" label="Telefon nummer" />
                </div>
            </>
        );
    }
}
