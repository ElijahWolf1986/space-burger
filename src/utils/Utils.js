export const urlApi = "https://norma.nomoreparties.space/api";

export const emailPattern = /^(([^<>()[\]\\.,;:\s@ "]+(\.[^<>()[\]\\.,;:\s@ "]+)*)|( ".+ "))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const options = {
    //оциональный вывод даты
    weekday: "long",
    //  year: 'numeric',
    //   month: 'long',
    //    day: 'numeric',
    hour: "2-digit",
    minute: "2-digit",
    //   second: '2-digit',
    timeZoneName: "short",
  };
  export const Update = (date, options) => {
    return (
        new Date(date).toLocaleDateString(
            "ru-RU",
            options
          )
    );  
}