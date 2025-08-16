import {React, useState, useEffect} from 'react';
import AxiosInstance from './Axios';
import {Box} from '@mui/material';

const Create = () => {
    const [country, setCountry] = useState([]);
    const [league, setLeague] = useState([]);
    const [characteristic, setCharacteristic] = useState([]);    

    console.log("Country", country);
    console.log("league", league);
    console.log("characteristic", characteristic);

    const GetData = () => {
        AxiosInstance.get(`country/`).then((res) => {
            setCountry(res.data);
        })

        AxiosInstance.get(`league/`).then((res) => {
            setLeague(res.data);
        })

        AxiosInstance.get(`characteristic/`).then((res) => {
            setCharacteristic(res.data);
        })
    }

    useEffect(() => {
        GetData();
    }, [])

    return (
        <div>
            <Box></Box>
        </div>
    )
}

export default Create;