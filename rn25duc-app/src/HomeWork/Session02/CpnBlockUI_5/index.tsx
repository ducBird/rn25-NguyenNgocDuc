import React from "react";
import Avatar from "./child-components/Avatar";
import Contact from "./child-components/Contact";
import Information from "./child-components/Information";
import BI5_img1 from "../block-ui-6-images/1.jpg";
import BI5_img2 from "../block-ui-6-images/2.jpg";
import BI5_img3 from "../block-ui-6-images/3.jpg";
import BI5_img4 from "../block-ui-6-images/4.jpg";
import styles from "./styleBI5.module.css";
import * as myIcon from "react-icons/fa";

type Props = {};

function index({}: Props) {
  let myArray = [
    {
      icon: <myIcon.FaCalendarAlt />,
      title: "DOB",
      content: "23/05/2014",
    },
    {
      icon: <myIcon.FaHeart />,
      title: "BG",
      content: "B+",
    },
    {
      icon: <myIcon.FaUserGraduate />,
      title: "EDU",
      content: "MCA",
    },
    {
      icon: <myIcon.FaMapMarkerAlt />,
      title: "RES",
      content: "Bangalore",
    },
  ];
  // let renderIcon = ()=>{
  //   return myArray.map((element)=>{
  //     return element.icon;
  //   })
  //   }
  // let renderTitle = ()=>{
  //   return myArray.map((element)=>{
  //     return element.title
  //   })
  //   }
  return (
    <>
      <div
        className="main_BI5 inline-block p-5 m-3 border shadow-lg shadow-slate-600"
        style={styles}
      >
        <Avatar infoImg={BI5_img1} name="robort pattision" job="Developing" />
        <Information
          infoIcon={[
            <myIcon.FaCalendarAlt />,
            <myIcon.FaHeart />,
            <myIcon.FaUserGraduate />,
            <myIcon.FaMapMarkerAlt />,
          ]}
          textTitle={["DOB", "BG", "EDU", "RES"]}
          textContent={["23/05/2014", "B+", "MCA", "Bangalore"]}
        />
        <Contact
          bgContact={["bg-red-500", "bg-green-500"]}
          email="robot12@gmail.com"
          phone="1234567890"
        />
      </div>

      <div
        className="main_BI5 inline-block p-5 m-3 border shadow-lg shadow-slate-600"
        style={styles}
      >
        <Avatar infoImg={BI5_img2} name="james smith" job="Designer" />
        <Information
          infoIcon={[
            <myIcon.FaCalendarAlt />,
            <myIcon.FaHeart />,
            <myIcon.FaUserGraduate />,
            <myIcon.FaMapMarkerAlt />,
          ]}
          textTitle={["DOB", "BG", "EDU", "RES"]}
          textContent={["23/05/2019", "A+", "HV", "California"]}
        />
        <Contact
          bgContact={["bg-purple-500", "bg-pink-500"]}
          email="smith34@gmail.com"
          phone="0987654321"
        />
      </div>
    </>
  );
}

export default index;
