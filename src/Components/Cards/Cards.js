import React from "react";
import useCards from "../../services/Cards.services";

export default function Cards() {
    const confirmed = useCards()


    return (
        <div>
            {confirmed}
        </div>
    );
};
