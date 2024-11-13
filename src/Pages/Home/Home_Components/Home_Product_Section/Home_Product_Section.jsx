
import Product_Single_Card from '../../../../Components/Product_Single_Card/Product_Single_Card'

const Home_Product_Section = () => {
  return (
    <>
     <div className="flex justify-center mt-10 mb-10">
          <div data-aos="zoom-in-left" className="  grid grid-cols-3 gap-20 justify-center items-center align-middle mt-15">
            <div>
              <Product_Single_Card
                name={"SMART Hisense 43\" FHD Android TV CAMERA"}
                sub_description={"Special Price TK. 28,900 | Official Warranty"}
                productimgsrc={"https://storage.googleapis.com/pickaboo-prod/media/catalog/category/Hisense_43_scroller_2_1_.jpg"}
              />
            </div>
            <div>
              <Product_Single_Card
                name={"SMART Get the best price! LOCK"}
                sub_description={"Starting from TK.11,549 | EMI Facility | Cashback"}
                productimgsrc={"https://storage.googleapis.com/pickaboo-prod/media/catalog/category/realme_Note_60_Scollor_Banner_4_.jpg"}
              />
            </div>
            <div>
              <Product_Single_Card
                name={"Oraimo SpaceBuds Z ANC TWS Earbuds"}
                sub_description={"Special Price TK. 2,890 | Free Concert Ticket to Magical Night 2.0"}
                productimgsrc={"https://storage.googleapis.com/pickaboo-prod/media/catalog/category/Oraimo_SpaceBuds_Z_scroller_banner_copy.jpg"}
              />
            </div>
            
          </div>
          
        </div>
    </>
  )
}

export default Home_Product_Section