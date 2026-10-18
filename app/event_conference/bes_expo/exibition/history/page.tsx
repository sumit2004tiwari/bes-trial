import React from "react";
import styles from "@/app/about_bes/content.module.css";
export default function page() {
  return (
    <div
      className={"flex flex-col max-w-[800px] p-4 " + styles.content_container}
    >
      <h2 className="text-[26px] font-bold">BES Expo-2027</h2>

      <div>
        <p>
          BES EXPO is in its 31st year of presentation. Organised for the first
          time in 1995 in Hotel Taj Palace, New Delhi, the show is now organized
          in Pragati Maidan, New Delhi. The expo is rated as the biggest
          broadcast & media technology show in India.
        </p>
      </div>
    </div>
  );
}
