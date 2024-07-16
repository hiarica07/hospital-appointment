import React from 'react'

const HastaListe = ({veri,setVeri}) => {
  return (
    <div>
    {veri.map((osman)=>(
        <div key={osman.id}>
            <h3>{osman.text}
            
            
            
            </h3>
            <h6>{osman.day}</h6>
            <h4>{osman.doktor}</h4>
        </div>
    ))}
    
    
    
    
    
    
    
    </div>
  )
}

export default HastaListe