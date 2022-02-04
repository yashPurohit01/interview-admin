// Main Container Page

import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Import All Components
import NavigationMain from "../components/navigation/Main";
import Loading from "../components/loaders/SquareLoader/loading";

// Import Styles
import global from "../styles/pages/Global.module.scss";

export default function Main() {
	const auth = useSelector((state) => state.auth);
	const { isLoading } = auth;

	return (
		<>
			{!isLoading ? (
				<section className={global.parentContainer}>
					{/* Navigation */}
					<section className={global.level_1}>
						<NavigationMain />
					</section>

					{/* Quick Access & Main Content */}
					<Outlet />
				</section>
			) : (
				<Loading />
			)}
		</>
	);
}
