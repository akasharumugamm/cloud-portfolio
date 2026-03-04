"use client";

import { useEffect, useState } from "react";
import Terminal from "../components/Terminal";
import styles from "./Home.module.css";
import badge from "./VisitorBadge.module.css";

export default function Home() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const counted = sessionStorage.getItem("counted");
    const url = "https://nr3zlwtbi7.execute-api.ap-south-1.amazonaws.com/prod/visits";

    if (!counted) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setVisits(data.visits);
          sessionStorage.setItem("counted", "true");
        })
        .catch(() => setVisits("ERR"));
    } else {
      fetch(url)
        .then(res => res.json())
        .then(data => setVisits(data.visits))
        .catch(() => setVisits("ERR"));
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>
        akash:$ <span className={styles.help}>type help to start</span>
      </h1>

      <Terminal />

      <div className={badge.badge}>
        <span className={badge.label}>VISITORS</span>
        <span className={badge.count}>{visits ?? "..."}</span>
      </div>
    </div>
  );
}