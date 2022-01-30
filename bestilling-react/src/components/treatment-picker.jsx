import React from "react";
import { Card } from "./card";

import "../css/treatment-picker.min.css";

export class TreatmentPicker extends React.Component {
    render() {
        return (
            <div className="treatmentPicker">
                <Card
                    active={true}
                    id="card-0"
                    title="Coachende samtale"
                    time="60"
                    desc="Jeg vil guide og støtte dig på rejsen mod dine mål.
Til samtalerne har du fuld mulighed for at åbne op om alle dine bekymringer og udfordringer og få mere ro på tankerne."
                    price="500"
                />
                <Card
                    id="card-1"
                    title="Coachende samtale + NADA"
                    time="60"
                    desc="Samtidig med den coachende samtale tilbydes du NADA behandling. Nada behandlinger en behandling, som kan under støtte udbyttet af samtalen."
                    price="500"
                />
                <Card
                    id="card-2"
                    title="NADA i gruppe"
                    time="45"
                    desc="NADA behandling kan blandt meget andet øge dit fokus, virke afslappende, afstressende, modvirke angst."
                    price="500"
                />
                <Card
                    id="card-3"
                    title="Parsamtale"
                    time="120"
                    desc="Ved parsamtaler kan I, som par få støtte til at arbejde med parforholdet, så i opnår en større indsigt i parforholdet og hinanden. Parsamtaler kan både være forebyggende og når der er opstået udfordringer i parforholdet."
                    price="500"
                />
                <Card
                    id="card-4"
                    title="Netværkssamtale"
                    time="120"
                    desc="Kan du får støtte til at føre samtaler med andre i dit nærtværk, det kan være både det private netværk og øvrige netværk."
                    price="500"
                />
            </div>
        );
    }
}
