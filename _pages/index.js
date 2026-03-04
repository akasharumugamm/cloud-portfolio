import { useEffect, useState } from "react";
import Terminal from "../components/Terminal";
import styles from "../styles/Home.module.css";
import badge from "../styles/VisitorBadge.module.css";

export default function Home() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    async function getVisits() {
      try {
        const res = await fetch(
          "https://nr3zlwtbi7.execute-api.ap-south-1.amazonaws.com/prod/visits"
        );
        const data = await res.json();
        setVisits(data.visits);
      } catch (err) {
        console.error(err);
      }
    }

    getVisits();
  }, []);

  return (
    <div className={styles.container}>
      <h1>
        akash:$ <span className={styles.help}>type help to start</span>
      </h1>

      <Terminal />

      {/* Visitor Badge */}
      <div className={badge.badge}>
        <span className={badge.label}>VISITORS</span>
        <span className={badge.count}>{visits ?? "..."}</span>
      </div>
    </div>
  );
}