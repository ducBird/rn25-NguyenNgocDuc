import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Formik_3 from "../../Session06/Form3/Formik_3";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";
import style from "./detail.module.css";

function HomePage() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <ul className="flex justify-around p-4 mt-4 bg-gray-50 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li
            className={`${style.liLink} flex-1 mr-2 text-center text-[18px] border rounded-lg py-2 px-10`}
          >
            <Link
              className={`block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              to={"/"}
            >
              List
            </Link>
          </li>
          <li
            className={`${style.liLink} flex-1 mr-2 text-center text-[18px] border rounded-lg py-2 px-10`}
          >
            <Link
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              to={"/form"}
            >
              Form
            </Link>
          </li>
          <li
            className={`${style.liLink} flex-1 mr-2 text-center text-[18px] border rounded-lg py-2 px-10`}
          >
            <Link
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              to={"/detail"}
            >
              Detail
            </Link>
          </li>
        </ul>

        {/* Routes config */}
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/form" element={<Formik_3 />} />
          <Route path="/detail/" element={<DetailPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />

          {/* NO MATCH ROUTE */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className="text-center text-3xl font-bold">
                  404 Page not found 😂😂😂
                </p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default HomePage;
