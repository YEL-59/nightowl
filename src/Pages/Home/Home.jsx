import Layout from "../../Components/Layout/Layout";
import Home_Best_Selling_Section from "./Home_Components/Home_Best_Selling_Section/Home_Best_Selling_Section";
import Home_Electrinic from "./Home_Components/Home_Electronic_Section/Home_Electrinic";
import Home_Fixed_Slider from "./Home_Components/Home_Fixed_Slider/Home_Fixed_Slider";
import Home_Mobile_Section from "./Home_Components/Home_Mobile_Section /Home_Mobile_Section";
import Home_Product_Section from "./Home_Components/Home_Product_Section/Home_Product_Section";
import Home_Slider_Section from "./Home_Components/Home_Slider_Section/Home_Slider_Section";



const Home = () => {
 
  return (
    <>
     <Layout>
        <Home_Slider_Section/>
        <Home_Fixed_Slider/>
        <Home_Product_Section />
        <Home_Best_Selling_Section />
        <Home_Mobile_Section />
        <Home_Electrinic/>
     </Layout>
    </>
  );
};

export default Home;
