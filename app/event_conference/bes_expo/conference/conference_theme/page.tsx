import React from "react";
import styles from "@/app/about_bes/content.module.css";
export default function page() {
  return (
    <div
      className={"flex flex-col max-w-[800px] p-4 " + styles.content_container}
    >
      <h2 className="text-[26px] font-bold">Conference Theme</h2>

      <div>
        <p>
          The theme for the conference is <strong> Reimagining Media: Intelligent, Innovative & Indigenous “Shaping Media for a Connected World</strong> {" "}
          <strong>BES EXPO attended</strong>{" "}
          by more than 1,000 delegates, speakers and panelists from India and
          abroad, the conference is rated as the biggest in Asia. It is an ideal
          forum to know the direction broadcasting in India is going to take in
          years to come.
        </p>
      </div>
    </div>
  );
}
