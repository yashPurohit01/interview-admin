// Home Page -Admin
import { useState } from "react";

import NavigationContext from "../components/navigation/Context";
import QuickAccessUpcomingScheduled from "../components/quickAccess/UpcomingSchedule";
import MainContentUpcomingScheduled from "../components/mainContent/UpcomingSchedule";

import styles from "../styles/pages/Home.module.scss";
import global from "../styles/pages/Global.module.scss";

export default function Upcoming() {
  const [selectedmonth, setMonth] = useState("");

  return (
    <section className={`${global.parentContainer} ${styles.home}`}>
      {/* At A Glance Panel */}
      <section className={global.level_2}>
        <QuickAccessUpcomingScheduled setMonth={setMonth} />
      </section>

      {/* Main Content */}
      <section className={global.level_3}>
        <section className={global.tools}>
          <NavigationContext />
        </section>
        <section className={global.content}>
          <MainContentUpcomingScheduled selectedmonth={selectedmonth} />
        </section>
      </section>
    </section>
  );
}
