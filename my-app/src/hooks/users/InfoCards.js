import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const InfoCards = (props) => {
  const [information, setInfo] = useState([]);
  const [searchTag, setSearchTag] = useState("");

  const changeHandler = (e) => {
    e.persist();
    setSearchTag(e.target.value);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/info/`)
      .then((res) => {
        setInfo(
          res.data.filter((information) => {
            if (searchTag === "") {
              return information;
            } else if (
                information.title.toLowerCase().includes(searchTag.toLowerCase()) ||
                information.tags.toLowerCase().includes(searchTag.toLowerCase())
            ) {
              return information;
            } else {
              return null;
            }
          })
        );
      })
      .catch((err) => console.log("search not working", err));
  }, [searchTag]);

  return (
    <>
      <div>
        <div>
          <form>
            <input
              onChange={changeHandler}
              type="text"
              placeholder="Search Tags"
              value={searchTag}
            />
          </form>
        </div>

        <div>
          {information.map((information) => (
            <div key={information.id}>
              <div key={information.id}>
                <p>Title: {information.title}</p>
                <p>Description: {information.description}</p>
                <p>Tags: {information.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoCards;
