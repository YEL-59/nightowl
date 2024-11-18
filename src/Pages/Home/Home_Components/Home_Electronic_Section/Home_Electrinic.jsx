import React from 'react'
import Slider from '../Home_Electronic_Section/Slider/Slider'
import Home_Electronic_Grid from './Home_Electronic_Grid/Home_Electronic_Grid'
import CommonNav from '../../../../Components/CommonNav/CommonNav'


const Home_Electrinic = () => {
    const slides = [
        {
            image:"https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Best_Home_Appliances_2_.jpg"
        },
        {
            image: "https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Best_Selling_Television_2_.jpg"
        },
        
    ]
  return (
      <>
          <div>
              
              <CommonNav nav_title={'Electronics & Appliances' } />
              <div className='container mx-auto grid grid-cols-12  mb-20'>
                  <div className='grid col-span-4 rounded-xl  '>
                      <Slider slides={slides }/>
                  </div>
                  <div className='grid col-span-8 '>
                      <Home_Electronic_Grid/>
                  </div>
                  
              </div>
      </div>
      
      
      </>
  )
}

export default Home_Electrinic