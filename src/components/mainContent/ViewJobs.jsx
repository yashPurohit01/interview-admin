import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewJobAction } from "../../ReduxStore/Actions/ViewJobAction";
import Loading from "../loaders/SquareLoader/loading";

import styles from "../../styles/components/mainContent/ViewJobs.module.scss";

import { BsGem } from "react-icons/bs";

export default function MainContentViewJobs() {
	const dispatch = useDispatch();
	const viewjob = useSelector((state) => state.viewjob);
	const { jobs, isloading } = viewjob;

	useEffect(() => {
		dispatch(ViewJobAction());
	}, [dispatch]);
	console.log(jobs);

	return (
		// Content In Home Page
		<>
			{" "}
			{!isloading ? (
				<section className={styles.intro}>
					{/* Heading */}
					<div className={styles.head}>
						<h2 className={styles.details}>Open Jobs</h2>
					</div>

					{/* Scheduled Meetings */}
					<div className={styles.jobList}>
						{jobs &&
							jobs.map((data) => {
								return (
									<div className={styles.itemsContainer} key={data.id}>
										<button className={styles.item}>
											<BsGem className={styles.icon} />
											<div className={styles.details}>
												<h2 className={styles.title}>{data.title}</h2>
												<h3 className={styles.type}>{data.type}</h3>
												<h4 className={styles.experience}>
													<span className={styles.field}>Exp : </span>
													{data.min_experience}
												</h4>
												<p className={styles.data}>
													<span className={styles.field}>Location : </span>
													{data.location}
												</p>
												<p className={styles.data}>
													<span className={styles.field}>Min Qualification : </span>
													{data.min_qualification}
												</p>
												<p className={styles.data}>
													<span className={styles.field}>Required Skills : </span>
													{data.required_skills}
												</p>
												<p className={styles.data}>
													<span className={styles.field}>Cost to Company : </span>
													{data.ctc}
												</p>
												<p className={styles.data}>
													<span className={styles.field}>Post Date : </span>
													{data.publish_date}
												</p>
											</div>
										</button>
									</div>
								);
							})}
					</div>
				</section>
			) : (
				<Loading />
			)}
		</>
	);
}
