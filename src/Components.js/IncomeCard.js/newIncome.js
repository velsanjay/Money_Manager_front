import axios from 'axios'
import React, {  useState } from 'react'
import { url } from '../../App'
import { toast } from 'react-toastify'
import { Button, TextField } from '@mui/material'

const NewIncome = ({ user }) => {
    const [detail, setDetail] = useState(null)
    let userId = ''
    const [amount, setAmount] = useState(null)

    if (user) {
        userId = user._id
    }


    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log(userId);

        let payload = { userId, detail, amount }
        try {
            let res = await axios.post(`${url}/income/new`, payload)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
            console.log(userId);
        }
    }

    return (
        <form className='card border' onSubmit={HandleSubmit}>
            <TextField
                id="outlined-basic"
                onChange={(e) => setDetail(e.target.value)}
                required label="detail" variant="standard" />

            <TextField
                id="outlined-basic"
                type='number'
                onChange={(e) => setAmount(e.target.value)}
                required label="Price" variant="standard" />

            <Button
                type='submit'
                variant="contained"
                color="secondary">
                Update
            </Button>

        </form>
    )
}

export default NewIncome