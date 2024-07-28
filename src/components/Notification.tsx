import React from "react";
import { NotificationType } from "../@types/NotificationType";

const Notification: React.FC<NotificationType> = ({
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
