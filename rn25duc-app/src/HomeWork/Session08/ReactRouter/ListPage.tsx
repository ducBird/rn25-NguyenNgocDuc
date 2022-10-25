import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function ListPage() {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const navi = useNavigate();

  useEffect(() => {
    getListUserApi();
  }, []);

  const gotoDetail = (id: string) => {
    console.log(id);
    navi("detail/" + id);
  };

  const getListUserApi = () => {
    const url = "https://63528f3aa9f3f34c3741594a.mockapi.io/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        // console.log(json);
        setUsers(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const deleteUser = (id: string) => {
    console.log("delete", id);
    const url = "https://63528f3aa9f3f34c3741594a.mockapi.io/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log("delete success", json);
        let arr = users.filter((user) => user.id !== json.id);
        setUsers(arr);
        // console.log(arr);
        // getListUserApi();
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  return (
    <>
      <div className="overflow-x-auto relative shadow-md rounded-lg m-3">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="py-5 px-6 w-[20%]">ID</th>
              <th className="py-5 px-6 w-[50%]">Name</th>
              <th className="py-5 px-6 w-[25%]"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser) => {
              return (
                <tr
                  key={`userID-${user.id}`}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    {user.id}
                  </th>
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">
                    <button
                      type="button"
                      className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                      onClick={() => gotoDetail(user.id)}
                    >
                      Detail
                    </button>
                    <button
                      type="button"
                      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListPage;
