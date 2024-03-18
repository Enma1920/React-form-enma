import { useState, useEffect} from "react";
import axios from "axios";

export const usePersons = () => {
    const [persons, setPersons] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/persons")
        .then(response => {
            setPersons(response.data);
        });
    }, []);

    const handleChangePersonsValue = (newPersons) => {
        setPersons(newPersons);
    };
    
    return { persons, handleChangePersonsValue };
};



