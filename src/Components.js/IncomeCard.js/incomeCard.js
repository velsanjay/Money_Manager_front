import { Button } from '@mui/material'
import React from 'react'

function IncomeCard( {data}) {
   

    return (
        <div className="card border"> 
        {data.catogorie ?(
            <h2>{data.catogorie}</h2>
          ):(
            null
          )}
        <h2>{data.detail}</h2>
          
          <p><span>{data.date}</span>-<span>{data.month}</span>-<span>{data.year}</span></p>
          <h4>{data.amount}</h4>
        
       
     
  
    </div>
    )
}

export default IncomeCard