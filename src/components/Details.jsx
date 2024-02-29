import { useEffect, useState } from "react";
import { getDetails } from "../../users";

export default function Details() {
  const details = getDetails();

  const [detailsData, setDetailsData] = useState({});
  useEffect(() => {
    setDetailsData(details);
  }, []);
  console.log("details", detailsData);
  return (
    <>
      <h1>Details</h1>
      <div className="cont">
        {detailsData.coverImage == undefined &&
        detailsData.author == undefined &&
        detailsData.title == undefined ? (
          <p>No data</p>
        ) : (
          <>
            <img src={detailsData.coverImage} />
            <h2>{detailsData.title}</h2>
            <h3>{detailsData.author}</h3>
          </>
        )}
      </div>
    </>
  );
}
