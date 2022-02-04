// Contact Component

import { useEffect, useState } from "react";

// Import Styles
import styles from "../../styles/components/quickAccess/ContactList.module.scss";

// Import React Icons
import { BsChevronLeft } from "react-icons/bs";

import Loading from "../loaders/SquareLoader/loading";

const List_Url = "https://shivila.herokuapp.com/api/v1/users/?role=hr";

export default function QuickAccessContactList({ list, setUserSelected }) {
	// Compact/Expand Quick Access
	const [compact, setCompact] = useState(false);
	const toggleView = () => {
		setCompact((show) => !show);
	};

	/* const [isLoading, setLoading] = useState(false);
	const [list, setList] = useState([]);

	const token = localStorage.getItem('token')

	useEffect(async () => {
		setLoading(true)
		await axios.get(List_Url, {
			headers: {
				Authorization: 'Token ' + token
			}
		})
			.then(res => {
				setLoading(false)
				console.log(res);
				const { data } = res;
					 console.log(data);
				setList(data);
			})
			.catch(err => {
				setLoading(false)
				console.log(err)
			})
	}, []) */

	return (
		<section className={`${styles.overview} ${compact ? styles.compact : ""}`}>
			{/* Expand/Compact Icon */}
			<button className={styles.view} onClick={toggleView}>
				<BsChevronLeft className={styles.icon} />
			</button>

			{/* Heading */}
			<h2 className={styles.head}>HR List</h2>

			{/* Contacts */}
			<div className={styles.list}>
				{/* Individual Contact Item */}
				{list &&
					list.map((data) => {
						return (
							<div key={data.id}>
								<button
									className={styles.item}
									onClick={() => {
										setUserSelected(data.id);
									}}
								>
									<img className={styles.image} src="/image/account/Female.png" alt="" />
									<div className={styles.details}>
										<p className={styles.name}>{data.full_name}</p>
										<p className={styles.meeting}>Shivila</p>
										<p className={styles.meeting}>15 Interviews</p>
									</div>
								</button>
							</div>
						);
					})}
			</div>
		</section>
	);
}
