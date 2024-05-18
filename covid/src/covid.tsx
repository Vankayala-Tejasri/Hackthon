import {useEffect,useState} from 'react'
import{fetch_data,Country} from './covidService'

export const Covid:React.FC=():JSX.Element=>{
    const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    
    
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
    
    
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
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
        <td><p>The Country Name is : </p></td>
        <td>{Country?.country}</td>
    </tr>
    <tr>
        <td><p>The no of Cases in the country :</p></td>
        <td> {Country?.cases}</td>
    </tr>
    <tr>
        <td><p>The no of Active Cases in country :</p></td>
        <td> {Country?.active}</td>
    </tr>
    <tr>
        <td>    <p>The no of Recovred cases in country : </p></td>
        <td>{Country?.recovered}</td>
    </tr>
    <tr>
        <td><p>The no of Deaths in the country</p></td>
        <td>{Country?.deaths}</td>
    </tr>
   </table>
    
    </div>
</div>
}