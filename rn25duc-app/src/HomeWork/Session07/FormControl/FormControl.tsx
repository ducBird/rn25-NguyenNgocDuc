import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./formControl.module.css";

const SignupSchema = Yup.object({
  // name: Yup.string()
  //   .min(3, "The name must be unique and between 3 - 128 characters")
  //   .max(128, "The name must be unique and between 3 - 128 characters")
  // .email("Invalid email")
  //   .required("The name is not blank"),
  // email: Yup.string().email("Invalid email").required("Required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  address: Yup.string().required("Address is required"),
  // // passwordConfirmation: Yup.string().oneOf(
  // //   [Yup.ref("password"), null],
  // //   "Passwords must match"
  // // ),
  // remember: Yup.boolean(),
  // city: Yup.string().required("The city is not blank"),
  // district: Yup.string().required("The district is not blank"),
  // commune: Yup.string().required("The commune is not blank"),
});

function FormControl() {
  const [dataCity, setDataCity] = useState([]);
  // const [dataDistrict, setDataDistrict] = useState([]);
  const getDataCity = () => {
    const url = "https://provinces.open-api.vn/api/?depth=2";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        // console.log(json);
        // console.log(dataCity);
        setDataCity(json);
        // setDataDistrict(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };
  useEffect(() => {
    getDataCity();
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      address: "",
      address2: "",
      city: dataCity,
      district: [],
      commune: "",
      checkOut: false,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // const handleSelect = (e: any) => {
  //   // console.log(e.target.value);
  //   console.log({ [e.target.name]: e.target.value });
  // };
  // const handleChange = (e: any) => {
  //   console.log(e.target.value);
  // };
  // const handleBlur = (e: any) => {
  //   console.log(e.target.value);
  // };

  return (
    <>
      <form
        className="w-2/5 mx-auto text-center"
        onSubmit={formik.handleSubmit}
      >
        {/* BEGIN Container Infomaiton Account */}
        <div className="infoAccount flex flex-row justify-between items-center gap-3 mb-10">
          {/* begin input email */}
          <div className="infoEmail flex-1">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className={`${style.inputInfo}`}
              type="text"
              name="email"
              value={formik.values.email}
              placeholder="Enter Email"
              onChange={formik.handleChange}
            />
            <span className="checkRequired text-red-500">
              {formik.touched.email ? formik.errors.email : null}
            </span>
          </div>
          {/* end input email */}

          {/* beign input password */}
          <div className="infoPassword flex-1">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className={`${style.inputInfo}`}
              type="password"
              name="password"
              value={formik.values.password}
              placeholder="Enter Password"
              onChange={formik.handleChange}
            />
            <span className="checkRequired text-red-500">
              {formik.touched.password ? formik.errors.password : null}
            </span>
          </div>
          {/* end input passwrod */}
        </div>
        {/* END container Infomation Account */}

        {/* BEGIN container Address */}
        <div className="address">
          <div className="address-1 mb-7">
            <p>Address</p>
            <input
              className={`${style.inputInfo}`}
              type="text"
              name="address"
              value={formik.values.address}
              placeholder="1234 Main St"
              onChange={formik.handleChange}
            />
            <span className="text-red-500">
              {formik.touched.address ? formik.errors.address : null}
            </span>
          </div>
          <div className="address-2 mb-7">
            <p>Address 2</p>
            <input
              className={`${style.inputInfo}`}
              type="text"
              name="address2"
              value={formik.values.address2}
              placeholder="Apartment, studio or floor ..."
              onChange={formik.handleChange}
            />
          </div>
        </div>
        {/* END container Address */}

        {/* BEGIN container Native Land */}
        <div className="naviteLand flex flex-row justify-between gap-5 mb-8">
          <div className="naviteLandChild flex flex-col w-1/3">
            <label htmlFor="city">City</label>
            <select
              className={style.select}
              name="city"
              onChange={formik.handleChange}
            >
              <option value="">Select City</option>
              {dataCity.map((item: any, index: number) => {
                return (
                  <option
                    key={index}
                    value={item.name}
                    onChange={formik.handleChange}
                  >
                    {item.name}
                  </option>
                );
              })}
              {/* <option value={formik.values.city}>{formik.values.city}</option> */}
            </select>
          </div>

          <div className="naviteLandChild flex flex-col w-1/3">
            <label htmlFor="district">District</label>
            <select
              className={style.select}
              name="district"
              onChange={formik.handleChange}
            >
              <option value="">Select District</option>
              {dataCity.map((item: any) => {
                return item.districts.map((element: any) => {
                  return item.code === element.province_code ? (
                    <option key={element.code} value={element.name}>
                      {element.name}
                    </option>
                  ) : null;
                });
              })}
              {/* <option value={formik.values.district}>
                {formik.values.district}
              </option> */}
            </select>
          </div>

          <div className="naviteLandChild flex flex-col w-1/3">
            <label htmlFor="commune">Commune</label>
            <select
              className={style.select}
              name="commune"
              // onChange={formik.handleChange}
            >
              <option value="">Select Commune</option>
              <option value={formik.values.commune}>
                {formik.values.commune}
              </option>
            </select>
          </div>
        </div>
        {/* END container Native Land  */}

        {/* BEGIN check box */}
        <div className={`${style.btn_checkbox}`}>
          <input
            type="checkbox"
            name="checkOut"
            checked={formik.values.checkOut}
            onChange={formik.handleChange}
          />
          <span>Check me out</span>
        </div>
        {/* END check box */}

        <button className={`${style.btn} px-5 p-2`} type="submit">
          Sign in
        </button>
        {/* <input type="submit" /> */}
      </form>
    </>
  );
}

export default FormControl;
