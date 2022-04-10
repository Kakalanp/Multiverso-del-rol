import styles from "../styles/Event.module.css";

export default function Event({ master, title, date, time, masterId }) {
  // check if there's more than one master
  if (master.indexOf(", ") !== -1 && master !== "abierto") {
    master = master.split(", ");
    masterId = masterId.split(", ");
    console.log(master, masterId);
  }

  const localTime = new Date('6/29/2022 4:52:48 PM GMT-1').toLocaleString();

  return (
    <div className={styles.event}>
      {
        //check if links are needed
        masterId ? (
          // check if master is an array, meaning is more than one
          master.constructor === Array ? (
            //create a link for each master
            master.map((master, i) => (
              <a
                key={masterId[i] * masterId[i]}
                rel="noopener noreferrer"
                target="_blank"
                href={`https://discordapp.com/users/${masterId[i]}`}
              >
                {master}
              </a>
            ))
          ) : (
            // create a single link of there's only one master
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://discordapp.com/users/${masterId}`}
            >
              {master}
            </a>
          )
        ) : (
          // in case there are no links just add the master
          <p>{master}</p>
        )
      }
      <p>{localTime}</p>
      <p>{title}</p>
    </div>
  );
}
