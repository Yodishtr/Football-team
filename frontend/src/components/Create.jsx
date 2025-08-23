import {React, useState, useEffect} from 'react';
import AxiosInstance from './Axios';
import {Box, Typography} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from './forms/TextForm';
import SelectForm from './forms/SelectForm';
import MultiSelectForm from './forms/MultiSelectForm';
import DescriptionForm from './forms/DescriptionForm';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Message from './forms/Message';
import { useNavigate } from 'react-router';

const Create = () => {
    const [country, setCountry] = useState([]);
    const [league, setLeague] = useState([]);
    const [characteristic, setCharacteristic] = useState([]);
    const [message, setMessage] = useState([]);
    const navigate = useNavigate();

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

    const validationSchema = yup.object({
        name: yup
            .string("The name must be text")
            .required("Club name is required"),

        attendance: yup
            .number("Attendance must be a number")
            .required("Attendance is required"),

        characteristic: yup
            .array()
            .min(1, "Select at least one characteristic"),

        description: yup
            .string('The description must be text')
            .required('A description is required')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            attendance: '',
            city: '',
            country: '',
            league: '',
            characteristic: [],
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            AxiosInstance.post(`footballclub/`, values)
            .then(() => {
                setMessage(
                    <Message
                        messageText = {"You successfully created a club!"}
                        messageColor = {"green"}
                    />
                )
                setTimeout(() => {
                    navigate('/');
                }, 2000)
            })
        }
    })
    

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <Box className={"TopBar"}>
                <AddBoxIcon/>
                <Typography sx={{marginLeft: "15px", fontWeight: "bold"}} variant="subtitle2">
                    Create a new Club!
                </Typography>
            </Box>

            {/*  */}

            {message}

            <Box className={"FormBox"}>
                <Box className={'FormArea'}>
                    <TextForm 
                        label = {"Club Name"}
                        name = 'name'
                        value = {formik.values.name}
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        error = {formik.touched.name && Boolean(formik.errors.name)}
                        helperText = {formik.touched.name && formik.errors.name}

                    />

                    <Box sx={{marginTop: "30px"}}>
                        <TextForm 
                            label = {"City"}
                            name = 'city'
                            value = {formik.values.city}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                            error = {formik.touched.city && Boolean(formik.errors.city)}
                            helperText = {formik.touched.city && formik.errors.city}
                        />
                    </Box>

                    <Box sx={{marginTop: "30px"}}>
                        <SelectForm 
                            label={"League"}
                            options = {league}
                            name = 'league'
                            value = {formik.values.league}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                            error = {formik.touched.league && Boolean(formik.errors.league)}
                            helperText = {formik.touched.league && formik.errors.league}
                        />
                    </Box>

                    <Box sx={{marginTop: "30px"}}>
                        <Button type="submit" variant="contained">Submit</Button>
                    </Box>
                </Box>


                <Box className={'FormArea'}>
                    <SelectForm 
                        label={"Country"}
                        options = {country}
                        name = 'country'
                        value = {formik.values.country}
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        error = {formik.touched.country && Boolean(formik.errors.country)}
                        helperText = {formik.touched.country && formik.errors.country}
                    />

                    <Box sx={{marginTop: "22px"}}>
                        <TextForm 
                            label = {"Attendance"}
                            name = 'attendance'
                            value = {formik.values.attendance}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                            error = {formik.touched.attendance && Boolean(formik.errors.attendance)}
                            helperText = {formik.touched.attendance && formik.errors.attendance}
                        />
                    </Box>

                    <Box sx={{marginTop: "29px"}}>
                        <MultiSelectForm 
                            label = {"Characteristics"}
                            options = {characteristic}
                            name = 'characteristic'
                            value = {formik.values.characteristic}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                            error = {formik.touched.characteristic && Boolean(formik.errors.characteristic)}
                            helperText = {formik.touched.characteristic && formik.errors.characteristic}
                        />
                    </Box>
                </Box>

                <Box className={'FormArea'}>
                    <DescriptionForm 
                        label = {"Description"}
                        rows = {9}
                         name = 'description'
                        value = {formik.values.description}
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        error = {formik.touched.description && Boolean(formik.errors.description)}
                        helperText = {formik.touched.description && formik.errors.description}
                    />
                </Box>

            </Box>
            </form>
        </div>
    )
}

export default Create;