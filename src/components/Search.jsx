import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
  
const [data,changeData] = useState(
       {
        name:""
       }
        
    )

    const deleteCourse=(id)=>{
        let input = {"_id":id} 
        axios.post("http://localhost:8081/delete",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("successfully deleted")

                    }
                    else{
                        alert("error")
                    }
                
            }
        ).catch().finally()
    }

    const [result,changeResult] = useState([])
    const inputHandler = (event) => {
        changeData({...data, [event.target.name]:event.target.value})
    }
        
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/search",data).then(
            (response)=>{
                
                changeResult(response.data)
           }

        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    return (
        <div>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">name</label>
                                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary" onClick={readValue}>search</button>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
<div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xll-12">

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
        result.map(
            (value,index)=>{
                return <tr>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.game}</td>
                <td>{value.achievements}</td>
                
                <td>
                    <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
                </td>

                
              </tr>
            }
        )
    }
    
    
  </tbody>
</table>

    </div>
</div>



    </div>
  )
}

export default Search