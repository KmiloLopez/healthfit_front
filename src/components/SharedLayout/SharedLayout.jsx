import Vector3Image from "../../assets/images/Vector_3.png";
import Vector1Image from "../../assets/images/Vector_1.svg";
import Layer41Image from "../../assets/images/Layer_4-1.png";
import Layer9Image from  "../../assets/images/Layer_9.png";
import LogoPng1Image from "../../assets/images/logo-png_1.png";
import SlimMomImage from  "../../assets/images/SlimMom.svg";
import SlimMom1Image from "../../assets/images/SlimMom_2.svg";
import Ellipse1Image from "../../assets/images/Ellipse_1.svg";
import Ellipse3Image from "../../assets/images/Ellipse_3.svg";
import Ellipse4Image from "../../assets/images/Ellipse_4.svg";
import Ellipse5Image from "../../assets/images/Ellipse_5.svg";
import Ellipse2Image from "../../assets/images/Ellipse_2.svg";



import { NavLink, Outlet } from 'react-router-dom';

import {
   Age,
  Q1HealthHome1,
  Vector3,
  Vector1,
  Frame1,
  Group4,
  StrawberryBigPng,
  Layer41,
  LogIn,
  Registration,
  Layer9,
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
 } from "../../styles/ComponentStyles";


const SharedLayout = () => {
  return (<>
    <Q1HealthHome1>
        <Vector3 src={Vector3Image} loading='lazy' alt={"Vector 3"}/>
      <Vector1 src={Vector1Image} loading='lazy' alt={"Vector 1"}/>
      <Frame1>
        <Group4>
          <StrawberryBigPng>
          </StrawberryBigPng>
          <Layer41 src={Layer41Image} loading='lazy' alt={"Layer-4 1"}/>
          <LogIn>
          <NavLink to= '/login'>Login</NavLink>
          </LogIn>
          <Registration>
            <NavLink to= '/Registration'>Registration</NavLink>
          </Registration>
      
          <Layer9 src={Layer9Image} loading='lazy' alt={"Layer-9"}/>
        </Group4>
       
      </Frame1>
      <Logo>
        <LogoPng1 src={LogoPng1Image} loading='lazy' alt={"logo-png 1"}/>
        <SlimMom src={SlimMomImage} loading='lazy' alt={"SlimMom"}/>
        <SlimMom1 src={SlimMom1Image} loading='lazy' alt={"SlimMom"}/>
      </Logo>
         {/* TODO: IF THE ADDRESS IS "/" DISPLAY NORMAL*/}
      
         
    </Q1HealthHome1>
    <Outlet/>
    </>
    
    )
  
};

export default SharedLayout;
