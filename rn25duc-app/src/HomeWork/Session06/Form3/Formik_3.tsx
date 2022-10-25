import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./styles.module.css";
import imgForm3 from "../img/imageForm_3.png";
import logoForm3 from "../img/logoForm_3.png";

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    // .email("Invalid email")
    .required("The name is not blank"),
  // email: Yup.string().email("Invalid email").required("Required"),
  // password: Yup.string().required("Password is required"),
  // // passwordConfirmation: Yup.string().oneOf(
  // //   [Yup.ref("password"), null],
  // //   "Passwords must match"
  // // ),
  // remember: Yup.boolean(),
});

function Formik_3() {
  const formik = useFormik({
    initialValues: {
      name: "",
      // password: "",
      // remember: true,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      const url = "https://63528f3aa9f3f34c3741594a.mockapi.io/users";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          // Xử lý kết quả JSON ở đây
          console.log(json);
        })
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
    },
  });

  const handleChange = (e: any) => {
    console.log(e.target);
  };
  const handleBlur = (e: any) => {
    console.log(e.target.value);
  };
  const handleCLickBtn = () => {
    alert("Success Add UserName");
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
                <div className="text-gray-600">UserName</div>
                <input
                  className={style.inputText}
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  // onBlur={handleBlur}
                  placeholder="Enter user name"
                />
                <p className={style.messageError}>
                  {formik.touched.name ? formik.errors.name : null}
                </p>
              </div>
              {/* <div className="mb-3">
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
                  {formik.touched.name ? formik.errors.password : null}
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
              </div> */}
              <button
                type="submit"
                className={style.btn}
                onClick={handleCLickBtn}
              >
                Add Name User
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
