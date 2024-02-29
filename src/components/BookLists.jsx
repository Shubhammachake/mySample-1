import { Link } from "react-router-dom";
import { addUsers, getAllusers } from "../../users";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myDb from "/myDb.json";
import { addDetails, getDetails, addIndex } from "../../users";

export default function BookLists() {
  const [data, setData] = useState([]);
  const myData = getAllusers();
  useEffect(() => {
    setData(myDb);
  }, []);
  addUsers(data);

  const handleDelete = (ind) => {
    const updt = [...data];
    updt.splice(ind, 1);
    setData(updt);
  };

  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate("/EditDetails");
    addIndex(index);
  };

  const handleChange = (e) => {
    let key = e.target.value.toLowerCase();

    if (key !== "") {
      let filter = data.filter((item) => {
        return (
          item.author.toLowerCase().includes(key) ||
          item.title.toLowerCase().includes(key)
        );
      });

      setData(filter);
    } else {
      setData(myDb);
    }
  };

  const handleDetails = (ind) => {
    navigate("/Details");
    addDetails(data[ind]);
  };
  return (
    <>
      <h1>Search Book</h1>
      <br />
      <input
        type="text"
        placeholder="Search Book"
        onChange={(e) => handleChange(e)}
        className="main-input"
      />
      <br />
      <Link to="/AddBooks">
        <button className="btn-add">ADD BOOK</button>
      </Link>
      <br />
      <br />
      <br />
      <div className="grid-container">
        {data.map((item, index) => (
          <div key={index} className="grid-item">
            <img src={item.coverImage} alt="error" />
            <h3>{item.title}</h3>
            <h3>{item.author}</h3>
            <br />
            <br />
            <div className="btns">
              <button className="btn" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button className="btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
              <button className="btn" onClick={() => handleDetails(index)}>
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
