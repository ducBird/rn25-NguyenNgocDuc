import React, { useEffect, useState } from "react";

interface IUser {
  id: string;
  name: string;
}

function ShowData() {
  // const [dataUser, setDataUser] = useState<IUser>({
  //   id: "",
  //   name: "",
  // });

  const [dataUser, setDataUser] = useState([]);

  const getDataUser = () => {
    const url = "https://63528f3aa9f3f34c3741594a.mockapi.io/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        // console.log(json);
        // setDataUser({
        //   ...dataUser,
        //   id: dataUser.id,
        //   name: dataUser.name,
        // });
        // console.log(dataUser);
        setDataUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };
  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <div>
        {dataUser.map((item: any, index: number) => {
          return (
            <>
              {/* <li key={`${"User" + index}`}>{item.id}</li>
              <li key={`${"User" + index}`}>{item.name}</li> */}
              <div>
                <p className="inline-block w-[20%] h-[30px] border border-black">
                  {item.id}
                </p>
                <p className="inline-block w-[20%] h-[30px] border border-black">
                  {item.name}
                </p>
              </div>
            </>
          );
        })}
        hello
      </div>
    </>
  );
}

export default ShowData;
