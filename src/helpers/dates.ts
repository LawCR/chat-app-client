import moment from "moment"
// import 'moment/locale/es';
// moment.locale('es');
// Conseguir la fecha de hoy (Hora, minutos, "am o pm", "tuberia", mes, fecha cardinal )
export const getHourMonth = (date: Date) => {
    const todayMonth = moment(date).format("HH:mm a | MMMM Do")

    return todayMonth
}