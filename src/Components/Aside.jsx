import React from 'react'
const Aside = () => {
  
  return (
    <>
     
      <div className='aside'>
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding:'40px'
          }}>
      <h3 style={{marginBottom:"15px"}} >Live Update</h3>
        <ul style={{listStyle:"none"}}>
          <li style={{ marginBottom: "15px"}}>2 new cases in Pakistan</li>
          <li style={{ marginBottom: "15px"}}>8 new cases in Singapore</li>
          <li style={{ marginBottom: "15px"}}>5 new cases in Thailan</li>
          <li style={{ marginBottom: "15px"}}>2 new cases in Taiwan</li>
          <li style={{ marginBottom: "15px"}}>9 new cases in Japan</li>
          <li style={{ marginBottom: "15px"}}>7 new cases in Brazil</li>
          <li style={{ marginBottom: "15px"}}>6 new cases in Ecuador</li>
          <li style={{ marginBottom: "15px"}}>2 new cases in Maxico</li>
          <li style={{ marginBottom: "15px"}}>1st new cases in Pakistan</li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Aside
