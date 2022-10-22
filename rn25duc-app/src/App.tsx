/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//
import * as myIcon from "react-icons/fa";
import "./App.css";
import ExState from "./components/ExState/ExState";
import ExStateFC from "./components/ExState/ExStateFC";
import LifeCycle from "./components/ExState/LifeCycle";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Demo from "./components/ReactHook/UseEffect/Demo";
import Section from "./components/section/Section";
import BasicUI_1 from "./HomeWork/Session02/componentsBasicUI-1/BasicUI_1";
import BasicUI_2 from "./HomeWork/Session02/componentsBasicUI-2/BasicUI_2";
import ComponentsBasicUI_3 from "./HomeWork/Session02/ComponentsBasicUI_3";
import ComponentsBlockUI_1 from "./HomeWork/Session02/ComponentsBlockUI_1";
import CpnBlockUI_3 from "./HomeWork/Session02/CpnBlockUI_3";
import CpnBlockUI_4 from "./HomeWork/Session02/CpnBlockUI_4";
import CpnBlockUI_5 from "./HomeWork/Session02/CpnBlockUI_5";
import LikeButton from "./HomeWork/Session05/LikeButton";
import RatingStar from "./HomeWork/Session05/RatingStar";
import Basic from "./HomeWork/Session04/Basic/Main";
import Basic2 from "./HomeWork/Session04/Basic2/Main";
import UseStateForm from "./components/ReactHook/UseStateForm/Demo";
import MultipleForm from "./components/ReactHook/UseStateForm/MultipleForm";
import Formik_3 from "./HomeWork/Session06/Form3/Formik_3";
import Class_LikeButton from "./HomeWork/Session03/Class_LikeButton";
import Class_RatingStar from "./HomeWork/Session03/Class_RatingStar";
import ShowData from "./HomeWork/Session06/Form3/ShowData";

function App() {
  // let isLogin = false;

  // let checkText = "BANDWIDTH";
  // let checkColor1 = "bg-danger";
  // let checkColors = "bg-danger";
  // let checkPercentage = 20;
  return (
    <>
      <div id="wrapper">
        {/* ==========Session 02========== */}
        {/* <BasicUI_1 />
        <BasicUI_2 />
        <ComponentsBasicUI_3 /> */}
        {/* <ComponentsBlockUI_1
          text="BandWidth"
          color1="bg-red-700"
          colors="bg-red-400"
          percentage={20}
        /> */}
        {/* <ComponentsBlockUI_1
          text="BandWidth"
          color1="bg-red-700"
          colors="red"
          percentage={20}
        /> */}
        <CpnBlockUI_3
          text="Facebook"
          color="bg-blue-500"
          iconName={<myIcon.FaFacebookF />}
          total={50000}
          unit="Like"
        />
        {/* <CpnBlockUI_4
          text="yesterday's visitors"
          unit="$"
          total={15699}
          percentages={[70, 55, 30, 40, 50]}
        /> */}
        {/* <CpnBlockUI_5 /> */}

        {/* ==========Session 03========== */}
        {/* <Class_LikeButton /> */}
        {/* <Class_RatingStar /> */}

        {/* ==========Session 04========== */}
        {/* <Basic /> */}
        {/* <Basic2 /> */}

        {/* ==========Session 05========== */}
        {/* <LikeButton /> */}
        {/* <RatingStar /> */}

        {/* <UseStateForm /> */}
        {/* <MultipleForm /> */}

        {/* ==========Session 06 RegisterFormWithYup Formik========== */}
        {/* <Formik_3 />
        <ShowData /> */}
      </div>
    </>
  );
}

export default App;
