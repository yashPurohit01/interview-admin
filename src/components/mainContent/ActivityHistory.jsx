import { meetingData } from "../../data/meetingData";

import styles from "../../styles/components/mainContent/ActivityHistory.module.scss";

export default function MainContentActivityHistory({ selectedmonth }) {
	const MeetingDetails = meetingData
		.filter((data) => {
			if (!selectedmonth) {
				return data;
			} else {
				return data.month === selectedmonth;
			}
		})
		.map((data, indx) => (
			<tr className={styles.tableRow} key={indx}>
				<td className={styles.details}>{data.activity}</td>
				<td className={styles.details}>{data.time}</td>
				<td className={styles.details}>{data.date}</td>
				<td className={styles.details}>{data.host}</td>
				<td className={styles.details}>{data.participant}</td>
				<td className={styles.details}>{data.files}</td>
			</tr>
		));

	return (
		// Content In Home Page
		<section className={styles.intro}>
			{
				<>
					{/* Heading */}
					<div className={styles.head}>
						<h2 className={styles.details}>Activities</h2>
					</div>

					<div className={styles.tableContent}>
						<table className={styles.table}>
							<thead className={styles.tableHead}>
								<tr className={styles.tableRow}>
									<th className={styles.details}>Activity</th>
									<th className={styles.details}>Date</th>
									<th className={styles.details}>Time</th>
									<th className={styles.details}>Host</th>
									<th className={styles.details}>Participants</th>
									<th className={styles.details}>Files</th>
								</tr>
							</thead>
							{<tbody className={styles.tableBody}>{MeetingDetails}</tbody>}
						</table>
					</div>
				</>
			}
		</section>
	);
}
