import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import style from "./detail.module.css";

interface IUser {
  id: string;
  name: string;
}

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

function DetailPage() {
  let params = useParams();
  const [user, setUser] = useState<IUser>({
    name: "",
    id: "",
  });
  const navi = useNavigate();
  const backListPage = () => {
    navi("/");
  };

  useEffect(() => {
    getUserApi();
  }, []);

  const getUserApi = () => {
    const url =
      "https://63528f3aa9f3f34c3741594a.mockapi.io/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
        setUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: user.name,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      const url =
        "https://63528f3aa9f3f34c3741594a.mockapi.io/users/" + params.id;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          // Xử lý kết quả JSON ở đây
          console.log(json);
          getUserApi();
        })
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
    },
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   setUser({ ...user, name: e.target.value });
  // };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="rounded-lg ml-2 w-[25%] p-1 text-sm text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <p className="m-3 p-3 border rounded-lg">
            ID USER:
            <code className="text-yellow-600 font-bold text-[16px] ml-3">
              {user.id}
            </code>
          </p>
          <p className="m-3 p-3 border rounded-lg">
            NAME USER:
            <code className="text-yellow-600 font-bold text-[16px] ml-3">
              {user.name}
            </code>
          </p>
          <p className="m-3 p-3 border rounded-lg">
            UPDATE NAME:
            <input
              type="text"
              name="name"
              value={formik.values.name}
              style={{ color: "#CA8A04", fontWeight: "bold" }}
              onChange={formik.handleChange}
            />
          </p>
          <button
            className={`${style.btnBackListPage}`}
            type="button"
            onClick={() => backListPage()}
          >
            {"<- "}Back
          </button>
          <button
            className={`${style.btnBackListPage}`}
            style={{ float: "right" }}
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}

export default DetailPage;
