import Layout from "../../Components/Layout/Layout";
import Home_Fixed_Slider from "./Home_Components/Home_Fixed_Slider/Home_Fixed_Slider";
import Home_Product_Section from "./Home_Components/Home_Product_Section/Home_Product_Section";
import Home_Slider_Section from "./Home_Components/Home_Slider_Section/Home_Slider_Section";



const Home = () => {
 
  return (
    <>
     <Layout>
        <Home_Slider_Section/>
        <Home_Fixed_Slider/>
        <Home_Product_Section/>
     </Layout>
    </>
  );
};

export default Home;
