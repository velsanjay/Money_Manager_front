import axios from 'axios'
import React, {  useState } from 'react'
import { url } from '../../App'
import { toast } from 'react-toastify'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const NewExpence = ({ user }) => {
    const [detail, setDetail] = useState(null)
    let userId = ''
    const [amount, setAmount] = useState(null)
    const [catogorie, setCatogorie] = React.useState('');

    if (user) {
        userId = user._id
    }


    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log(userId,catogorie);

        let payload = { userId, detail, amount, catogorie }
        try {
            let res = await axios.post(`${url}/expence/new`, payload)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const handleChange = (event) => {
        setCatogorie(event.target.value);
      };
    return (
        <form className='card border' onSubmit={HandleSubmit}>

              <FormControl>
        <InputLabel id="demo-simple-select-label">Catogorie</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={catogorie}
          label="Catogorie"
          onChange={handleChange}
        >
          <MenuItem value={'Personal'}>Personal</MenuItem>
          <MenuItem value={'Office'}>Office</MenuItem>
        </Select>
      </FormControl>
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

export default NewExpence