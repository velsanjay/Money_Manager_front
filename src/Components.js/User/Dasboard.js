import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../../App'
import { toast } from 'react-toastify'
import IncomeCard from '../IncomeCard.js/incomeCard'
import { Button, TextField } from '@mui/material'
import NewIncome from '../IncomeCard.js/newIncome'
import NewExpence from '../ExpenceCart/NewExpence'

const Dasboard = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const [income, setIncome] = useState([])
    const [expence, setExpence]=useState([])
    const [user, setUser] = useState([])
    let userId =''
    useEffect(()=>{
        if(id){
            userId=id
            let payload ={userId }
             axios.post(`${url}/income/get`,payload).then((responce)=> {
                if(responce.data.data.length > 0){
                    setIncome(responce.data.data)
                    console.log(responce.data.data.length);
                    toast.success(responce.data.message)
                }else{
                    toast.error("No Income Data Found!!!")
                }
             } ).catch((error)=>{
                toast.error(error.response.data.message)
             })

             axios.post(`${url}/expence/get`,payload).then((responce)=> {
                if(responce.data.data.length > 0){
                    setExpence(responce.data.data)
                    console.log(responce.data.data.length);
                    toast.success(responce.data.message)
                }else{
                    toast.error("No Expendure Data Found!!!")
                }
             } ).catch((error)=>{
                toast.error(error.response.data.message)
             })

             axios.post(`${url}`,payload).then((responce)=> {
                    setUser(responce.data.data)
                    console.log(responce.data);
                    toast.success(responce.data.message)
          
             } ).catch((error)=>{
                toast.error(error.response.data.message)
                navigate('/')
             })
        }
    },[NewExpence])

    console.log(income);
    console.log(expence);
    console.log(user);
  return (
    <div>
        <div>
            <h1 >Hii {user.name} <span>	&#128075;</span></h1>
        </div>
        <div className='header'>
            <div >
                <h2>Income Detail</h2>
                <div className='card'>
                    
                {user ? (
                    <NewIncome
                    user={user}
                    />
                ) : (
                    <p>User Not Found</p>
                )}
                </div>
        {income.length > 0 ? (
            income.map((data,index)=>(
                <IncomeCard
                key={index}
                data={data}
                />
            ))
        ) : (
            <p>No Data Found</p>
        )}
        </div>
        
        <div>
            <h2>Expence Detail</h2>
            <div className='card'>
                    
                    {user ? (
                        <NewExpence
                        user={user}
                        />
                    ) : (
                        <p>User Not Found</p>
                    )}
                    </div>
        {expence.length > 0 ? (
            expence.map((data,index)=>(
                <IncomeCard
                key={index}
                data={data}
                />
            ))
        ) : (
            <p>No Data Found</p>
        )}
        </div>

        </div>
    </div>
 
  )
}

export default Dasboard