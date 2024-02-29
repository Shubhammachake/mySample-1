import { useState } from "react";
import { addIndex, getIndex } from "../../users";
import { addUsers, getAllusers } from "../../users";
import { useNavigate } from "react-router-dom";
export default function EditDetails() {
  const myInd = getIndex();
  const myData = getAllusers();
  const [data, setData] = useState({
    title: "",
    author: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSave = (ind) => {
    if (data.title !== "" && data.author !== "") {
      alert(`${myData[myInd].title},"sucessFully Updated"`);
      navigate("/");
      myData[ind].title = data.title;
      myData[ind].author = data.author;
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <h3>Edit Book</h3>
      <div className="edit-detail">
        <form onSubmit={() => handleSave(myInd)}>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Enter Author"
            name="author"
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <button type="submit">Save Details</button>
        </form>
      </div>
    </>
  );
}
