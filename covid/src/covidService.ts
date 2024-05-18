import axios from "axios";
import { useEffect,useState } from "react";

export interface Country{
    country:string,
    cases:number,
    active:number,
    recovered:number,
    deaths:number
}
export const fetch_data= async(country:string) : Promise<Country>=>{
    const result =await(axios.get(`https://disease.sh/v3/covid-19/countries/${country}`))
 
    const data=result.data
    return {
        country:data.country,
        cases:data.cases,
        active:data.active,
        recovered:data.recovered,
        deaths:data.deaths
        
    }

   
}