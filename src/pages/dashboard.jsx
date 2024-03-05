import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import GridComp from "../components/gridCell"
import BarComp from '../components/BarComp'
let gridData=[
    {
        number:"$64,492",
        title:"Total Revenue"
    },{
        number:"$608",
        title:"Total Jobs Avg"
    },
    {
        number:"106",
        title:"Tickets Created"
    },{
        number:"66",
        title:"Tickets Scheduled"
    },
    {
        number:"$19,304.52",
        title:"Outstanding Amount"
    },{
        number:"0",
        title:"Memberships Sold"
    },
    {
        number:"8",
        title:"Jobs Completed"
    },{
        number:"2",
        title:"Total Canceled"
    }
]
const Dashboard = () => {
    let navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("flag")=="true"){

        }else{
         navigate("/") 
        }
    },[])
  return <>
  <h1>Dashboard</h1>
  <div style={{width:"100vw",height:"300px",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
    {
        gridData.map((gridDataCell)=>{
            return <>
            <GridComp number={gridDataCell.number} title={gridDataCell.title}/>
            </>
        })
    }
  </div>
  <BarComp />
  </>
}

export default Dashboard