import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./styles.module.css";
import imgForm3 from "../img/imageForm_3.png";
import logoForm3 from "../img/logoForm_3.png";

const SignupSchema = Yup.object({
  userName: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .email("Invalid email")
    .required("The name is not blank"),
  // email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
  // passwordConfirmation: Yup.string().oneOf(
  //   [Yup.ref("password"), null],
  //   "Passwords must match"
  // ),
  remember: Yup.boolean(),
});

function Formik_3() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      remember: true,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (e: any) => {
    console.log(e.target);
  };
  const handleBlur = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="containerFrom3 grid grid-cols-5">
        <div className={`col-span-3 mx-auto ${style.imageForm}`}>
          <img src={imgForm3} alt="imgForm_3" />
        </div>
        <div className="formLogin col-span-2">
          <div className="w-[70%] mx-auto">
            <img className="w-[40%] mb-[100px]" src={logoForm3} alt="" />
            <div className="w-[100%]">
              <h2 className="text-3xl font-bold text-red-700 my-[50px]">
                Login
              </h2>
              <p className="font-bold text-blue-900 my-[10px]">
                Login to your account
              </p>
              <span className="text-xs w-[80%]">
                Thank you for get back to Grovia, lets access our the best
                recommendation contact for you.
              </span>
            </div>
            <form onSubmit={formik.handleSubmit} className="mt-10">
              <div className="mb-3">
                <div className="text-gray-600">Username</div>
                <input
                  className={style.inputText}
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  // onBlur={handleBlur}
                  placeholder="Enter your email"
                />
                <p className={style.messageError}>
                  {formik.touched.userName ? formik.errors.userName : null}
                </p>
              </div>
              <div className="mb-3">
                <div className="text-gray-600">Password</div>
                <input
                  className={style.inputText}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  placeholder="Enter your password"
                />
                <p className={style.messageError}>
                  {formik.touched.userName ? formik.errors.password : null}
                </p>
              </div>
              <div className="w-[80%] flex justify-between items-center text-xs">
                <div>
                  <input
                    id="fgpass"
                    type="checkbox"
                    name="remember"
                    // checked={formik.touched.remember}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="fgpass">Remember me</label>
                </div>
                <span className="cursor-pointer text-red-700 hover:underline">
                  Reset Password?
                </span>
              </div>
              <button type="submit" className={style.btn}>
                Login
              </button>
              <p className="w-[80%] text-center mt-4">
                Don't have an account yet?{" "}
                <a href="#" className="joinGrovia text-red-700 hover:underline">
                  Join Grovia Now
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formik_3;
