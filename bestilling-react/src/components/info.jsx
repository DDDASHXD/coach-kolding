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
                    <Input id="input-sur" label="Efternavn" />
                    <Input id="input-email" label="Email" />
                    <Input id="input-phone" label="Telefon nummer" />
                    <Input id="input-msg" textarea={true} label="Besked" />
                </div>
            </>
        );
    }
}
