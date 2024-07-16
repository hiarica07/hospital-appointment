import React from 'react'
import ahmet from "../helper/ahmet.png"
import ayse from "../helper/Ayse.png"
import fatma from "../helper/Fatma.png"
import oya from "../helper/Oya.png"

const HastaEkle = ({veri,setVeri}) => {
  return (
    <div>

    <h1>ASHLEYS KLINIKUM</h1>

    <div className="photos">

    <div className="doctors" >
        <img src={ahmet} alt=""/>
        <p>DR Ahmet Bilen</p>
    </div>
    <div className="doctors">
        <img src={ayse} alt=""/>
        <p>DR Ayse Okur</p>
    </div>
    <div className="doctors">
        <img src={fatma} alt=""/>
        <p>DR Fatma Adil</p>
    </div>
    <div className="doctors">
        <img src={oya} alt=""/>
        <p>DR Oya Başar</p>
    </div>
    



    </div>

    </div>
  )
}

export default HastaEkle