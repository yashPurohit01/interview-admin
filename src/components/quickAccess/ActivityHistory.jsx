// Activity History Component

import { useState } from "react";

// Import Data
import { month } from "../../data/month";

// Import Styles
import styles from "../../styles/components/quickAccess/ActivityHistory.module.scss";

// Import React Icons
import { BsChevronLeft } from "react-icons/bs";

export default function QuickAccessActivityHistory({ setMonth }) {
	// Compact/Expand Quick Access
	const [compact, setCompact] = useState(false);
	const toggleView = () => {
		setCompact((show) => !show);
	};

	return (
		<section className={`${styles.overview} ${compact ? styles.compact : ""}`}>
			{/* Expand/Compact Icon */}
			<button className={styles.view} onClick={toggleView}>
				<BsChevronLeft className={styles.icon} />
			</button>

			{/* Greetings */}
			<div className={styles.archive}>
				<div className={styles.head}>
					<h2 className={styles.details}>Activity Archive</h2>
				</div>

				<div className={styles.filter}>
					<p className={styles.title}>Filter</p>
					<div className={styles.input}>
						<input className={styles.parameter} type="number" placeholder="Year" />
						<input className={styles.parameter} type="text" placeholder="HR" />
					</div>
				</div>

				<div className={styles.history}>
					<button className={styles.group} onClick={() => setMonth()}>
						<h3 className={styles.title}>Remove select</h3>
					</button>
					{month.forEach((data) => (
						<button className={styles.group} onClick={() => setMonth(data)}>
							<h3 className={styles.title}>{data}</h3>
						</button>
					))}
				</div>
			</div>
		</section>
	);
}
