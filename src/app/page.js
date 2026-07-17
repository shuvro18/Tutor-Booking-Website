import Banner from "./components/Banner";
import ForTest from "./components/ForTest";
import TutorsInHomePage from "./components/TutorsInHomePage";
import WhyChoose from "./components/WhyUs";


export default function Home() {
  return (
    <div>
      
      <Banner></Banner>
      <TutorsInHomePage></TutorsInHomePage>
      <WhyChoose></WhyChoose>
      {/* <ForTest></ForTest> */}
    </div>
  );
}
