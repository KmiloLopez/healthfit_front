



import LogoPng1Image from "../assets/images/logo-png_1.png";
import SlimMomImage from  "../assets/images/SlimMom.svg";
import SlimMom1Image from "../assets/images/SlimMom_2.svg";
import Ellipse1Image from "../assets/images/Ellipse_1.svg";
import Ellipse3Image from "../assets/images/Ellipse_3.svg";
import Ellipse4Image from "../assets/images/Ellipse_4.svg";
import Ellipse5Image from "../assets/images/Ellipse_5.svg";
import Ellipse2Image from "../assets/images/Ellipse_2.svg";





import {
   Age,
  
  Btn,
  StartLosingWeight,
  Logo,
  LogoPng1,
  SlimMom,
  SlimMom1,
  Group44,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  Ellipse5,
  Q1,
  Q2,
  Q3,
  Q4,
  Group1,
  Height,
  Line1,
  Line2,
  DesiredWeight,
 
  CurrentWeight,
  CalculateYourDailyCa,
  Line11,
  Line3,
  Line4,
  BloodType
 } from "../styles/ComponentStyles";


const HomePage = () => {
  return (
    <>
    
    <Btn>
      
        <StartLosingWeight>
          {`Start losing weight NOW`}
        </StartLosingWeight>
      </Btn>
      
   
      <Group44>
        <BloodType>
          {`Blood type *`}
        </BloodType>
        <Ellipse1 src={Ellipse1Image} loading='lazy' alt={"Ellipse 1"}/>
        <Ellipse3 src={Ellipse3Image} loading='lazy' alt={"Ellipse 3"}/>
        <Ellipse4 src={Ellipse4Image} loading='lazy' alt={"Ellipse 4"}/>
        <Ellipse5 src={Ellipse5Image} loading='lazy' alt={"Ellipse 5"}/>
        <Ellipse2 src={Ellipse2Image} loading='lazy' alt={"Ellipse 2"}/>
        <Q1>
          {`1`}
        </Q1>
        <Q2>
          {`2`}
        </Q2>
        <Q3>
          {`3`}
        </Q3>
        <Q4>
          {`4`}
        </Q4>
        <Group1>
          <Height>
            {`Height*`}
          </Height>
        </Group1>
        <Line1>
        </Line1>
        <Line2>
        </Line2>
        <DesiredWeight>
          {`Desired weight *`}
        </DesiredWeight>
        <Age>
         {`Age *`}
        </Age>
        <CurrentWeight>
          {`Current weight *`}
        </CurrentWeight>
        <CalculateYourDailyCa>
          {`Calculate your daily calorie intake right now`}
        </CalculateYourDailyCa>
        <Line11>
        </Line11>
        <Line3>
        </Line3>
        <Line4>
        </Line4>
      </Group44>
    </>
    )
  
};

export default HomePage;

