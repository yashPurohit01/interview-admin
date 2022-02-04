// Activity Page - Contains past activities history

import { useState } from "react";

// Import All Components
import QuickAccessActivityHistory from "../components/quickAccess/ActivityHistory";
import MainContentActivityHistory from "../components/mainContent/ActivityHistory";

// Import Styles
import global from "../styles/pages/Global.module.scss";

export default function Activity() {
	const [selectedmonth, setMonth] = useState("");

	return (
		<section className={global.parentContainer}>
			{/* Quick Access */}
			<section className={global.level_2}>
				<QuickAccessActivityHistory setMonth={setMonth} />
			</section>

			{/* Main Content */}
			<section className={global.level_3}>
				<MainContentActivityHistory selectedmonth={selectedmonth} />
			</section>
		</section>
	);
}
