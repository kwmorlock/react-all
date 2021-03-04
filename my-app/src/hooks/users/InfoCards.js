import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const InfoCards = (props) => {
  const [info, setInfo] = useState([]);
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
          res.data.filter((info) => {
            if (searchTag === "") {
              return info;
            } else if (
              info.title.toLowerCase().includes(searchTag.toLowerCase()) ||
              info.tags.toLowerCase().includes(searchTag.toLowerCase())
            ) {
              return info;
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
          {info.map((info) => (
            <div key={info.id}>
              <div key={info.id}>
                <p>Title: {info.title}</p>
                <p>Description: {info.description}</p>
                <p>Tags: {info.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoCards;
