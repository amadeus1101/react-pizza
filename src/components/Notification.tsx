import React from "react";
import { notificationType } from "../@types/notificationType";

const Notification: React.FC<notificationType> = ({
  headline,
  paragraph1,
  paragraph2,
}) => {
  return (
    <div className="notification">
      <h2>
        {headline}
        <span>😕</span>
      </h2>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
};

export default Notification;
