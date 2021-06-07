import React from "react";

function Avatar({ imgUrl, name }) {
  return (
    <div>
      <div
        className='d-flex align-items-center avatar'
        style={{ marginTop: "9px" }}
      >
        {" "}
        <img src={imgUrl} width='28px' alt='user-profile' />{" "}
        <p className='pl-2'> {name} </p>
      </div>
    </div>
  );
}

export default Avatar;
