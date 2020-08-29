import { useState, useEffect } from "react";

const useCards = () => {
    const [confirmed, setConfirmed] = useState("");

    useEffect(() => {
        fetch("https://covid19.mathdro.id/api")
            .then((responseData) => responseData.json())
            .then((data) => {
                setConfirmed(data.confirmed.value)
            })
    }, [])
    return confirmed
};
export default useCards;