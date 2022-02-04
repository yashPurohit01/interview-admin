import { Link } from "react-router-dom";

import styles from "../../styles/components/mainContent/Dashboard.module.scss";

import { BsFillDiagram3Fill, BsFillCalendarCheckFill, BsStars, BsFillFileEarmarkBreakFill, BsFillInboxFill, BsStackOverflow, BsPersonFill, BsStack } from "react-icons/bs";

export default function MainContentDashboard() {
	return (
		<section className={styles.dashboard}>
			<div className={styles.head}>
				<h2 className={styles.details}>Dashboard</h2>
			</div>

			<div className={styles.content}>
				<Link to="/admin/contact" className={styles.module}>
					<BsFillDiagram3Fill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Registered HR</p>
						<p className={styles.details}>5</p>
					</div>
				</Link>

				<Link to="/admin/AppliedCandidates" className={styles.module}>
					<BsPersonFill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Applied Candidates</p>
						<p className={styles.details}>500</p>
					</div>
				</Link>

				<Link to="/admin/posted-jobs" className={styles.module}>
					<BsFillInboxFill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Job Vacancies</p>
						<p className={styles.details}>50</p>
					</div>
				</Link>

				<Link to="/admin/Upcoming" className={styles.module}>
					<BsStack className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Scheduled Interviews</p>
						<p className={styles.details}>200</p>
					</div>
				</Link>

				<Link to="/admin/schedule-interview" className={styles.module}>
					<BsFillCalendarCheckFill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Interviews Today</p>
						<p className={styles.details}>45</p>
					</div>
				</Link>

				<Link to="/admin/SelectedCandidates" className={styles.module}>
					<BsStars className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Selected Candidates</p>
						<p className={styles.details}>30</p>
					</div>
				</Link>

				<div className={styles.module}>
					<BsStackOverflow className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Pending Documents</p>
						<p className={styles.details}>25</p>
					</div>
				</div>

				<div className={styles.module}>
					<BsFillFileEarmarkBreakFill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Pending Offer Letters</p>
						<p className={styles.details}>10</p>
					</div>
				</div>
			</div>
		</section>
	);
}
