import React from "react";
import styles from "../content.module.css";
export default function Content() {
  return (
    <div
      className={
        "flex flex-col max-w-[800px] m-auto p-4 " + styles.content_container
      }
    >
      <h2 className="text-[26px] font-bold">At a Glance</h2>
      <div>
        <p>
          The Broadcast Engineering Society (India) was established in 1987 and
          is registered with the Registrar of Societies, Delhi, India. The
          Society has it’s headquarter at New Delhi and has 12 Local Chapters
          spread across the country. The main objectives of the BES(I) are:
        </p>

        <p>
          To meet these objectives, the Society conducts conferences, seminars,
          tutorials and exhibitions regularly. The signature event of the
          society, BES Expo, an International conference and exhibition, is
          conducted every year in New Delhi. All major Exhibitors, delegates and
          visitors from India and abroad participate in this event. Every EXPO
          has a theme on the current broadcast situation. BES EXPOs have been
          approved by Ministry of Information & Broadcasting, Govt. of India and
          endorsed by the International Association of Broadcast Manufacturers
          (IABM) and DRM. These events have been supported by Prasar Bharati,
          ABU, UNESCO, Society of Broadcast Engineers, USA, Ministry of
          Communications & IT, Govt of India and IGNOU. The Society has over
          2,500 Life Fellows/Members. 37 leading organizations in the country
          are its Corporate Members. The Society brings out a quarterly
          technical journal, known as BES Review it has also brought out other
          publications. Society also promotes technical innovations and
          excellence, by facilitating prestigious BES Awards to individuals for
          their outstanding contributions in the field of Broadcast engineering
          every year.
        </p>
      </div>
    </div>
  );
}
