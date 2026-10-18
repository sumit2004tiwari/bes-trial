import React from "react";
import styles from "@/app/about_bes/content.module.css";
export default function page() {
  return (
    <div
      className={"flex flex-col max-w-[800px] p-4 " + styles.content_container}
    >
      <h2 className="text-[26px] font-bold">Who can attend?</h2>
      <div>
        <p>
          The conference can be attended by senior officials and broadcast
          professionals from radio and TV channels in India and abroad.
          Scientists from Govt. departments and faculty from mass communication
          institutes and engineering colleges will find the conference to be
          useful.
        </p>
      </div>
    </div>
  );
}
