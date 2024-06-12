import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchdata=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchdata()},[])


  return (
    <div>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">game</th>
      <th scope="col">achievements</th>
      
    </tr>
  </thead>
  <tbody>


{
    data.map(
        (value,index)=>{
            return <tr>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>{value.game}</td>
            <td>{value.achievements}</td>
            
          </tr>
        }
    )
}
    
    
  </tbody>
</table>
                    </div>
                </div>
            </div >   
    </div>
  )
}

export default ViewAll