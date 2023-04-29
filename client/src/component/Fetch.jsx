import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import "./CSS/Fetch.css";

function Fetch() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const displayData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user");
      setData(response.data);
      setUpdate(!update);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    displayData();
  }, [update]);
  return (
    <div>
      <div className="d-flex align-item-center justify-content-center">
        <Button type="submit" onClick={displayData} mt="sm">
          Fetch
        </Button>{" "}
      </div>

      {data &&
        data.map((e) => {
          const { name, email, age, password } = e;
          return (
            <div className="card">
              <p>Name:{name}</p>
              <p>Email:{email}</p>
              <p>Age:{age}</p>
              <p>Password:{password}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Fetch;
