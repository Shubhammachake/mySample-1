import { useState } from "react";
import { addUsers, getAllusers } from "../../users";
import { useNavigate } from "react-router-dom";
export default function AddBooks() {
  const myData = getAllusers();

  const [data, setData] = useState({
    title: "",
    author: "",
    coverImage: "",
  });

  let regX = /^(ftp|http|https):\/\/[^ "]+$/;
  const isValidUrl = (value) => {
    return regX.test(value);
  };

  const [urlError, setUrlErr] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "coverImage") {
      if (isValidUrl(value)) {
        setUrlErr("");
      } else {
        setUrlErr("Plz enter valid url");
      }
    }
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleAdd = () => {
    myData.unshift(data);
    navigate("/");
  };
  return (
    <div className="add-book">
      <h1>Add Book</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="enetr Title"
          name="title"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="enter Author"
          name="author"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <input
          type="url"
          placeholder="enter Url"
          name="coverImage"
          onChange={(e) => handleChange(e)}
          required
        />
        {urlError && <p>{urlError}</p>}
        <br />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
