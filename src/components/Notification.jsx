import React from "react";

function Notification({ headline, paragraph1, paragraph2 }) {
  return (
    <>
      <h2>
        {headline}
        <span>😕</span>
      </h2>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </>
  );
}

export default Notification;
