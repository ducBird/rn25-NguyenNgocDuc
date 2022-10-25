import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Formik_3 from "../../HomeWork/Session06/Form3/Formik_3";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";

function DemoRouter() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <ul className="flex p-5 text-xl">
          <li className="flex-1 mr-2">
            <Link
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
              to={"/"}
            >
              List
            </Link>
          </li>
          <li className="flex-1 mr-2">
            <Link
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
              to={"/form"}
            >
              Form
            </Link>
          </li>
          <li className="flex-1 mr-2">
            <Link
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
              to={"/detail"}
            >
              Detail
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/form" element={<Formik_3 />} />
          <Route path="/detail" element={<DetailPage />} />

          {/* NO MATCH ROUTE */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default DemoRouter;
