import React, { useState } from "react";

interface IUser {
  userName: string;
  password: string;
  gender: string;
  children: boolean;
  country: string;
}

//Khai báo default value cho state
// const defaultValueUser:IUser = {
//   userName: "Duc",
//     password: "12345",
//     gender: "nam",
//     children: true,
//     country: "Binh Dinh",
// }
// gọi ở state
// const [input, setInput] = React.useState(defaultValueUser);

function MultipleForm() {
  const [input, setInput] = useState<IUser>({
    userName: "UserName",
    password: "YourPassword",
    gender: "Man",
    children: false,
    country: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "radio") {
      setInput({ ...input, [e.target.name]: e.target.value });
      // setInput({ ...input, [e.target.name]: e.target.checked });
      // console.log(e.target.value);
    }
    if (e.target.type === "checkbox") {
      setInput({ ...input, [e.target.name]: e.target.checked });
      // console.log("checked");
    }
    if (e.target.type === "text" || e.target.type === "password") {
      setInput({ ...input, [e.target.name]: e.target.value });
      // console.log("value");
    }
  };

  const handleSelect = (e: any) => {
    // console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="userName"
          placeholder="Your Name"
        />
        <br />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Your PassWord"
        />
        <div>
          <label htmlFor="gender">Man</label>
          <input
            onChange={handleChange}
            type="radio"
            name="gender"
            value={"Man"}
          />
          <label htmlFor="gender">Woman</label>
          <input
            onChange={handleChange}
            type="radio"
            name="gender"
            value={"Woman"}
          />
        </div>
        <div>
          <label htmlFor="children">You is a children</label>
          <input onChange={handleChange} type="checkbox" name="children" />
        </div>
        <div>
          <label htmlFor="country" className="mr-2">
            Country
          </label>
          <select
            onChange={handleSelect}
            name="country"
            className="border border-black rounded-lg"
          >
            <option value="VietNam">VietNam</option>
            <option value="American">American</option>
            <option value="Japan">Japan</option>
            <option value="Italya">Italya</option>
          </select>
        </div>
        <button className="border border-black">Login</button>
      </form>
    </>
  );
}

export default MultipleForm;
