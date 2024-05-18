import {useEffect,useState} from 'react'
import{fetch_data,Country} from './covidService'

export const CovidTable:React.FC=():JSX.Element=>{
    const countries = ['India','Bangladesh','SriLanka','Nepal','China'
]

const [inp,setInp]=useState<string>("China")
const [Country,setCountry] =useState<Country>()

useEffect(()=>{
    const get_data=async()=>{
        const result= await fetch_data(inp)
        setCountry(result);
        console.log(result);
    }
    get_data()
},[inp])
return <div className='container'>

    <h1>Covid Data According to Country</h1>
    <br>
    </br>
     <select value={inp} onChange={(e) => {setInp(e.target.value)}}>
{
    countries.map((el)=><option>{el}</option>)
}
        </select>
        <br></br>
        <br></br>
<div className="table">
   
   <table>
    <tr>
        <th>Country</th>
        <th>Cases</th>
        <th>Deaths</th>
        <th>Active</th>
        <th>Recovered</th>
    </tr>
    <tr>
        <td>{Country?.country}</td>
        <td>{Country?.cases}</td>
        <td>{Country?.deaths}</td>
        <td>{Country?.active}</td>
        <td>{Country?.recovered}</td>
    </tr>
   </table>
    
    </div>
</div>
}