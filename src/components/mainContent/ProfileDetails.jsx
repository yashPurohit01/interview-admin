import styles from "../../styles/components/mainContent/ProfileDetails.module.scss";

import { BsFillPersonLinesFill, BsBookHalf, BsGearFill, BsFileEarmarkBreakFill, BsEnvelopeFill, BsFillBookmarkStarFill } from "react-icons/bs";

export default function MainContentProfileDetails() {
	return (
		// Content In Home Page
		<section className={styles.intro}>
			{/* Profile Details */}
			<div className={styles.profile}>
				{/* Profile Image */}
				<div className={styles.imageContainer}>
					<img className={styles.image} src="/image/account/Male.png" />
				</div>

				{/* Interview Details */}
				<div className={styles.text}>
					{/* Informations */}
					<div className={styles.group}>
						<p className={styles.field}>Name</p>
						<p className={styles.details}>Subhajit Ghosh</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Company</p>
						<p className={styles.details}>Shivila Technologies</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Employee ID</p>
						<p className={styles.details}>SG01012022</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Job Role</p>
						<p className={styles.details}>Admin</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Qualification</p>
						<p className={styles.details}>M.Tech in CST</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Location</p>
						<p className={styles.details}>Kolkata</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Joining Date</p>
						<p className={styles.details}>01 Jan 2021</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Mobile</p>
						<p className={styles.details}>(+91) 987 654 3210</p>
					</div>
					<div className={styles.group}>
						<p className={styles.field}>Email</p>
						<p className={styles.details}>admin@shivila.com</p>
					</div>
				</div>
			</div>
		</section>
	);
}
