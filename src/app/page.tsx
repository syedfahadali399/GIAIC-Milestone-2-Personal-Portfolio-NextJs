import Image from "next/image";
import Header from "./header/page";
import LandingPage from "./landingPage/page";
import Footer from "./footer/page";
import "./style.css"
// import YourComponent from "./script.ts";
import YourComponent from "./script.js";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </div>
  );
}
