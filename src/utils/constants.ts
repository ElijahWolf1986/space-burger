export const urlApi = "https://norma.nomoreparties.space/api";

export const emailPattern =
  /^(([^<>()[\]\\.,;:\s@ "]+(\.[^<>()[\]\\.,;:\s@ "]+)*)|( ".+ "))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const optionsDate = {
  //оциональный вывод даты
  weekday: "long" as const,
  //  year: 'numeric',
  //   month: 'long',
  //    day: 'numeric',
  hour: "2-digit" as const,
  minute: "2-digit" as const,
  //   second: '2-digit',
  timeZoneName: "short" as const,
};
