import {Box, Typography, Button} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {React, useState, useEffect} from 'react';
import AxiosInstance from './Axios';
import { useNavigate, useParams } from 'react-router';
import Message from './forms/Message';

const Delete = () => {
    const MyParameter = useParams();
    const MyID = MyParameter.id;

    const navigate = useNavigate();
    const [message, setMessage] = useState([]);
    const [myData, setMyData] = useState({
        name: '',
        description: '',
        attendance: 0,
        city: '',
        country: '',
        league: '',
        characteristic: [],
    });

    console.log("My Data: ", myData);

    const GetData = () => {
        AxiosInstance.get(`footballclub/${MyID}/`).then((res) => {
            setMyData(res.data);
        })
    }

    useEffect(() => {
        GetData();
    }, [])

    const DeleteRecord = (event) => {
        event.preventDefault();
        AxiosInstance.delete(`footballclub/${MyID}/`).then(() => {
            setMessage(
                    <Message
                        messageText = {"You successfully delete the club!"}
                        messageColor = {"green"}
                    />
                )
                setTimeout(() => {
                    navigate('/');
                }, 2000)
        })
    }

    return (
        <div>
            <form onSubmit={DeleteRecord}>
            {message}
            <Box className={"TopBar"}>
                <DeleteOutlineIcon/>
                <Typography sx={{marginLeft: "15px", fontWeight: "bold"}} variant="subtitle2">
                    Are you sure you want to delete this record?
                </Typography>
            </Box>

            <Box className={"TextBox"}>
                <Typography>
                    You will be deleting the club: <b>{myData.name}</b> from <b>{myData.city}</b>.
                </Typography>
            </Box>

            <Box sx={{marginTop: '30px'}}>
                <Button type="submit" variant="contained" fullWidth>Delete</Button>
            </Box>
            </form>
        </div>
    )
}

export default Delete;