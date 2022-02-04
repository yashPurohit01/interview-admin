import styles from "../../styles/components/mainContent/Schedule.module.scss";

export default function MainContentSchedule() {
	return (
		// Content In Home Page
		<section className={styles.intro}>
			{/* Heading */}
			<div className={styles.head}>
				<h2 className={styles.details}>Today's Scheduled Interviews</h2>

				<div className={styles.filter}>
					<p className={styles.title}>Filter</p>
					<div className={styles.input}>
						<input className={styles.parameter} type="number" placeholder="Enter Year" />
						<input className={styles.parameter} type="text" placeholder="Enter Month" />
					</div>
				</div>
			</div>
			{/* Scheduled Meetings */}
			<div className={styles.meetingList}>
				{/* Start - Group 01 */}
				<div className={styles.group}>
					{/* Time */}
					<div className={styles.timeline}>
						<h2 className={styles.details}>HR - Sadanand</h2>
					</div>
					{/* Start - Meetings */}
					<div className={styles.itemsContainer}>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Male.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 10:00</p>
							</div>
						</button>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Female.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 10:20</p>
							</div>
						</button>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Male.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 10:40</p>
							</div>
						</button>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Female.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 10:00</p>
							</div>
						</button>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Male.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 10:20</p>
							</div>
						</button>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Female.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 10:40</p>
							</div>
						</button>
					</div>
					{/* End - Meetings */}
				</div>
				{/* End - Group 01 */}
				{/* Start - Group 02 */}
				<div className={styles.group}>
					{/* Time */}
					<div className={styles.timeline}>
						<h2 className={styles.details}>HR - Yash</h2>
					</div>
					{/* Start - Meetings */}
					<div className={styles.itemsContainer}>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Male.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 15:00</p>
							</div>
						</button>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Female.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 15:20</p>
							</div>
						</button>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Male.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 15:40</p>
							</div>
						</button>
					</div>
					{/* End - Meetings */}
				</div>
				{/* End - Group 02 */}
				{/* Start - Group 03 */}
				<div className={styles.group}>
					{/* Time */}
					<div className={styles.timeline}>
						<h2 className={styles.details}>HR - Subhajit</h2>
					</div>
					{/* Start - Meetings */}
					<div className={styles.itemsContainer}>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Female.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 18:00</p>
							</div>
						</button>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Male.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 18:20</p>
							</div>
						</button>
						<button className={styles.item}>
							<img className={styles.image} src="/image/account/Female.png" alt="" />
							<div className={styles.details}>
								<h3 className={styles.title}>Candidate Name</h3>
								<h4 className={styles.category}>Qualification</h4>
								<h4 className={styles.category}>Primary Skill</h4>
								<p className={styles.time}>Time : 18:40</p>
							</div>
						</button>
					</div>
					{/* End - Meetings */}
				</div>
				{/* End - Group 03 */}
			</div>
		</section>
	);
}
