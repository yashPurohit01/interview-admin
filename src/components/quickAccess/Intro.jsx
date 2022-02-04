// Intro Component

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// Import Styles
import styles from "../../styles/components/quickAccess/Intro.module.scss";

// Import React Icons
import { BsFillGrid1X2Fill, BsShieldLockFill, BsPersonPlusFill, BsCalendarCheckFill, BsBroadcast, BsBriefcaseFill, BsFillInboxFill, BsChevronLeft } from "react-icons/bs";

export default function QuickAccessIntro() {
	// Compact/Expand Quick Access
	const [compact, setCompact] = useState(false);
	const toggleView = () => {
		setCompact((show) => !show);
	};

	// Display Date
	const [currentDate, setCurrentDate] = useState("");

	useEffect(() => {
		let displayDateString = new Date().toLocaleDateString("en-GB", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});

		const updateDate = () => {
			displayDateString = new Date().toLocaleString("en-GB", {
				day: "numeric",
				month: "long",
				year: "numeric",
			});
			setCurrentDate(displayDateString);
		};

		setInterval(updateDate, 1000);
	}, [setCurrentDate]);

	// Display Time

	const [currentTime, setCurrentTime] = useState("");

	// Update Time
	useEffect(() => {
		let displayTimeString = new Date().toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});

		const updateTime = () => {
			displayTimeString = new Date().toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			});
			setCurrentTime(displayTimeString);
		};
		setInterval(updateTime, 1000);
	}, [setCurrentTime]);

	return (
		<section className={`${styles.overview} ${compact ? styles.compact : ""}`}>
			{/* Expand/Compact Icon */}
			<button className={styles.view} onClick={toggleView}>
				<BsChevronLeft className={styles.icon} />
			</button>

			{/* Greetings */}
			<div className={styles.welcome}>
				<p className={styles.title}>Good Morning</p>
				<p className={styles.subTitle}>Welcome Subhajit Ghosh</p>
				<p className={styles.message}>Let Us Start the Day</p>

				<p className={styles.time}>Time : {currentTime}</p>
				<p className={styles.date}>Date : {currentDate}</p>
			</div>

			{/* Quick Links */}
			<div className={styles.quickLinks}>
				<NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsFillGrid1X2Fill className={styles.icon} />
					<p className={styles.title}>Dashboard</p>
				</NavLink>

				<NavLink to="/admin/live-status" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsBroadcast className={styles.icon} />
					<p className={styles.title}>Live Status</p>
				</NavLink>

				<NavLink to="/admin/schedule-interview" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsCalendarCheckFill className={styles.icon} />
					<p className={styles.title}>Scheduled Interviews</p>
				</NavLink>

				<NavLink to="/admin/user-management" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsShieldLockFill className={styles.icon} />
					<p className={styles.title}>User Management</p>
				</NavLink>

				<NavLink to="/admin/create-new-hr" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsPersonPlusFill className={styles.icon} />
					<p className={styles.title}>Create HR</p>
				</NavLink>

				<NavLink to="/admin/create-new-job" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsBriefcaseFill className={styles.icon} />
					<p className={styles.title}>Create New Job</p>
				</NavLink>

				<NavLink to="/admin/posted-jobs" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
					<BsFillInboxFill className={styles.icon} />
					<p className={styles.title}>View Open Jobs</p>
				</NavLink>
			</div>
		</section>
	);
}
