// Main Navigation Component

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../../ReduxStore/Actions/LogoutAction";

// Import All Components
import UserProfile from "../mainContent/Profile";

// Import Styles
import styles from "../../styles/components/navigation/Main.module.scss";

// Import React Icons
import { BsFillHouseDoorFill, BsDoorOpenFill, BsFillPersonLinesFill, BsStack } from "react-icons/bs";
import { IoDocuments } from "react-icons/io5";

export default function NavigationMain() {
	const dispatch = useDispatch();
	const [modalOpen, setModalOpen] = useState(false);

	return (
		// Main Navigation Menu
		<section className={styles.nav}>
			{/* Navigation Profile Image */}
			<div className={styles.logoContainer}>
				<button
					className={styles.logo}
					onClick={() => {
						setModalOpen(true);
					}}
				>
					<img className={styles.image} src="/image/account/Male.png" alt="Account" />
				</button>
				{modalOpen && <UserProfile setOpenModal={setModalOpen} />}
			</div>

			{/* Navigation Links */}
			<nav className={styles.page}>
				{/* Home */}
				<Link to="/" className={styles.pageLink}>
					<BsFillHouseDoorFill className={styles.icon} />
				</Link>

				{/* Contact */}
				<NavLink to="/admin/contact" className={({ isActive }) => (isActive ? styles.active : styles.pageLink)}>
					<BsFillPersonLinesFill className={styles.icon} />
				</NavLink>

				{/* Activity */}
				<NavLink to="/admin/activity" className={({ isActive }) => (isActive ? styles.active : styles.pageLink)}>
					<BsStack className={styles.icon} />
				</NavLink>

				<NavLink to="/admin/filemange/docs" className={({ isActive }) => (isActive ? styles.active : styles.pageLink)}>
					<IoDocuments className={styles.icon} />
				</NavLink>
			</nav>

			{/* Admin Links */}
			<div className={styles.admin}>
				{/* Logout */}
				<Link to="/login" onClick={dispatch(Logout)} className={`${styles.adminLink} ${styles.logout}`}>
					<BsDoorOpenFill className={styles.icon} />
				</Link>
			</div>
		</section>
	);
}
