// Contact Page - Contains Contact List

import { useEffect, useState } from "react";
import axios from "axios";

// Import All Components
import QuickAccessContactList from "../components/quickAccess/ContactList";
import MainContentContactDetails from "../components/mainContent/ContactDetails";
import Loading from "../components/loaders/SquareLoader/loading";

// Import Styles
import global from "../styles/pages/Global.module.scss";

const List_Url = "https://shivila.herokuapp.com/api/v1/users/?role=hr";

export default function Contact() {
	const [isLoading, setLoading] = useState(false);
	const [list, setList] = useState([]);
	const [userSelected, setUserSelected] = useState(0);

	const token = localStorage.getItem("token");

	useEffect(async () => {
		setLoading(true);
		await axios
			.get(List_Url, {
				headers: {
					Authorization: "Token " + token,
				},
			})
			.then((res) => {
				setLoading(false);
				console.log(res);
				const { data } = res;
				/* 	 console.log(data); */
				setList(data);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, []);
	console.log(userSelected);

	return (
		<section className={global.parentContainer}>
			{!isLoading ? (
				<>
					{/* Quick Access */}
					<section className={global.level_2}>
						<QuickAccessContactList list={list} setUserSelected={setUserSelected} />
					</section>

					{/* Main Content */}
					<section className={global.level_3}>
						<MainContentContactDetails userSelected={userSelected} setLoading={setLoading} List_Url={List_Url} />
					</section>
				</>
			) : (
				<Loading />
			)}
		</section>
	);
}
