import React, { useState } from 'react'
import HastaEkle from '../components/HastaEkle'
import HastaListe from '../components/HastaListe'
import data from "../helper/data"



const Home = () => {

    const [veri,setVeri] = useState(data)

  return (
    <div>
        <HastaEkle veri={veri} setVeri={setVeri} />
        <HastaListe veri={veri} setVeri={setVeri} />
    </div>
  )
}

export default Home