import React from "react";
import Notification from "../components/Notification";

const NotFound: React.FC = () => {
  return (
    <div className="content">
      <div className="container">
        <Notification
          headline="Что-то пошло не так;( "
          paragraph1="Проверьте правильность введенной ссылки или попробуйте ещё раз"
          paragraph2="Страница не найдена"
        />
      </div>
    </div>
  );
};

export default NotFound;
