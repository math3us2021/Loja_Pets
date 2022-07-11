import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

export default ({ id, name, type, age, weight, isDocile }) => {
  const [checkbox, setCheckbox] = useState(false);

  function handleCheckbox() {
    if (checkbox === false) {
      setCheckbox(true);
      axios.put(`http://localhost:3004/pets/${id}`, {
        id: id,
        name: name,
        type: type,
        age: age,
        weight: weight,
        isDocile: true,
      });
    } else {
      setCheckbox(false);
      axios.put(`http://localhost:3004/pets/${id}`, {
        id: id,
        name: name,
        type: type,
        age: age,
        weight: weight,
        isDocile: false,
      });
    }
  }

  useEffect(() => {
    if (isDocile === true) {
      setCheckbox(true);
      
    }
  }, []);

  console.log(checkbox);

  return (


    <div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={handleCheckbox}
          checked={checkbox} // checkd
        ></input>
        <label className="form-check-label" for="flexSwitchCheckDefault">
          O Pet é <strong>dócil?</strong>
        </label>
      </div>
    </div>
  );
};
