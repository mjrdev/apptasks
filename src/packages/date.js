export default function date() {

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];

    const dateNow = new Date();
    const date = ((dateNow.getDate() + " " + meses[(dateNow.getMonth())] + " " + dateNow.getFullYear()));
    const dateWithHours = `${date} - ${dateNow.getHours()}:${dateNow.getMinutes()}h`

    return dateWithHours
}