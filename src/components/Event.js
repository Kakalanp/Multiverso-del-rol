export default function Event({master, title, date, time, masterId}) {
    return(
        <div>
            <p>{master}</p>
            <p>{date}</p>
            <p>{title}</p>
        </div>
    )
}