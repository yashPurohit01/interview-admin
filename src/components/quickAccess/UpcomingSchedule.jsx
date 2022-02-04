import { month } from "../../data/month";
import styles from "../../styles/components/quickAccess/ActivityHistory.module.scss";

export default function QuickAccessUpcomingScheduled({ setMonth }) {
	return (
		<section className={styles.overview}>
			{/* Greetings */}
			<div className={styles.archive}>
				<div className={styles.head}>
					<h2 className={styles.details}>Upcoming Scheduled Interview</h2>
				</div>

				<div className={styles.filter}>
					<p className={styles.title}>Filter</p>
					<div className={styles.input}>
						<input className={styles.parameter} type="number" placeholder="Enter Year" />
						<input className={styles.parameter} type="text" placeholder="Enter Month" />
					</div>
				</div>

				<div className={styles.history}>
					<button className={styles.group} onClick={() => setMonth()}>
						<h3 className={styles.title}>Remove select</h3>
					</button>
					{month.map((data) => {
						return (
							<>
								<button className={styles.group} onClick={() => setMonth(data)} key={data}>
									<h3 className={styles.title}>{data}</h3>
								</button>
							</>
						);
					})}
				</div>
			</div>
		</section>
	);
}
