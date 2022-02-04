import styles from "../../styles/components/mainContent/liveStatus.module.scss";

const LiveStatus = () => {
	return (
		<section className={styles.intro}>
			<div className={styles.head}>
				<div>
					<h1> Live status </h1>
				</div>
				<div>
					<select>
						<option value="Hr">Hr</option>
						<option value="student">Student</option>
					</select>
				</div>{" "}
			</div>

			<div className={styles.tableContent}>
				<table className={styles.table}>
					<thead className={styles.tableHead}>
						<tr className={styles.tableRow}>
							<th className={styles.details}>Candidate Name</th>
							<th className={styles.details}>Primary Skill</th>
							<th className={styles.details}>Qualifications</th>
							<th className={styles.details}>Interview Marks</th>
							<th className={styles.details}>Result</th>
							<th className={styles.details}>Generate Offer Letter</th>
							<th className={styles.details}>Document Status</th>
						</tr>
					</thead>
					<tbody className={styles.tableBody}>
						<table className={styles.tableRow}>
							<th className={styles.details}>Yash Purohit</th>
							<th className={styles.details}>React</th>
							<th className={styles.details}>b.tech</th>
							<th className={styles.details}>7</th>
							<th className={styles.details}>1st round</th>
							<th className={styles.details}>
								<button>Generate</button>
							</th>
							<th className={styles.details}>Document Status</th>
						</table>
					</tbody>
					<tbody className={styles.tableBody}>
						<table className={styles.tableRow}>
							<th className={styles.details}>Yash Purohit</th>
							<th className={styles.details}>React</th>
							<th className={styles.details}>b.tech</th>
							<th className={styles.details}>7</th>
							<th className={styles.details}>1st round</th>
							<th className={styles.details}>
								<button>Generate</button>
							</th>
							<th className={styles.details}>Document Status</th>
						</table>
					</tbody>
					<tbody className={styles.tableBody}>
						<table className={styles.tableRow}>
							<th className={styles.details}>Yash Purohit</th>
							<th className={styles.details}>React</th>
							<th className={styles.details}>b.tech</th>
							<th className={styles.details}>7</th>
							<th className={styles.details}>1st round</th>
							<th className={styles.details}>
								<button>Generate</button>
							</th>
							<th className={styles.details}>Document Status</th>
						</table>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default LiveStatus;
