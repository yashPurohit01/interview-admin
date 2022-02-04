import styles from "../../styles/components/mainContent/ScheduleDetails.module.scss";

import { BsFillPersonLinesFill, BsBookHalf, BsGearFill, BsFileEarmarkBreakFill, BsEnvelopeFill, BsFillBookmarkStarFill } from "react-icons/bs";

export default function MainContentScheduleDetails() {
	return (
		// Content In Home Page
		<section className={styles.intro}>
			{/* Profile Details */}
			<div className={styles.profile}>
				{/* Profile Image */}
				<div className={styles.imageContainer}>
					<img className={styles.image} src="/image/account/Male.png" alt="" />
				</div>

				{/* Interview Details */}
				<div className={styles.text}>
					{/* Informations */}
					<p className={styles.details}>Click On A Link To See The Details</p>
				</div>
			</div>

			{/* Highlighted Links */}
			<div className={styles.link}>
				<button className={styles.btn}>
					<BsFillBookmarkStarFill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Interview Details</p>
						<p className={styles.subTitle}>Schedule, HR, etc.</p>
					</div>
				</button>
				<button className={styles.btn}>
					<BsFillPersonLinesFill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Candidate Details</p>
						<p className={styles.subTitle}>Name, Gender, Family, etc.</p>
					</div>
				</button>
				<button className={styles.btn}>
					<BsEnvelopeFill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Contact Details</p>
						<p className={styles.subTitle}>Mobile, Email, etc.</p>
					</div>
				</button>
				<button className={styles.btn}>
					<BsBookHalf className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Qualification</p>
						<p className={styles.subTitle}>Education, IT Skills, etc.</p>
					</div>
				</button>
				<button className={styles.btn}>
					<BsFileEarmarkBreakFill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Documents</p>
						<p className={styles.subTitle}>Submitted Documents</p>
					</div>
				</button>
				<button className={styles.btn}>
					<BsGearFill className={styles.icon} />
					<div className={styles.text}>
						<p className={styles.title}>Edit Interview</p>
						<p className={styles.subTitle}>Edit Time & HR</p>
					</div>
				</button>
			</div>
		</section>
	);
}
