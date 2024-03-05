import React from 'react'

const GridCell = ({number,title}) => {
return <>
{/* <div style={{display:"flex",width:"20%",backgroundColor:"white",height:"100px",margin:"10px",borderRadius:"5px"}}>
<div style={{backgroundColor:"red",width:"5%",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}></div>
<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",paddingLeft:"10px"}}>
  <div>{number}</div>
  <div>{title}</div>
</div>
</div> */}
<div style={{
  display: "flex",
  width: "20%",
  backgroundColor: "white",
  height: "100px",
  margin: "10px",
  borderRadius: "5px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2)",
  fontFamily: "Open Sans, sans-serif",
}}>
  <div style={{
    backgroundColor: "red",
    width: "5%",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  }}></div>
  <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "10px",
  }}>
    <div style={{
      marginTop: "15px",
      fontSize: "20px",
      fontWeight: "bold",
      color:"red",
    }}>{number}</div>
    <div style={{
      fontSize: "14px",
      color: "#666",
      marginBottom:"15px"
    }}>{title}</div>
  </div>
</div>




</>
}

export default GridCell