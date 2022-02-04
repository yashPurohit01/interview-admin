// Home Page - First page that comes after Login/Register

import { Outlet } from "react-router-dom";

// Import All Components
import QuickAccessIntro from "../components/quickAccess/Intro";
import MainContentProfileDetails from "../components/mainContent/ProfileDetails";

// Import Styles
import global from "../styles/pages/Global.module.scss";

export default function Home() {
	return (
		<section className={global.parentContainer}>
			{/* Quick Access */}
			<section className={global.level_2}>
				<QuickAccessIntro />
			</section>

			{/* Main Content */}
			<section className={global.level_3}>
				<Outlet />
				{/* <MainContentScheduleDetails /> */}
				{/* <MainContentProfileDetails /> */}
			</section>
		</section>
	);
}
