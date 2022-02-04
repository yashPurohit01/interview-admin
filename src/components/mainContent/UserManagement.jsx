import styles from "../../styles/components/mainContent/UserManagement.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VeiwUserAction } from "../../ReduxStore/Actions/VeiwUserAction";
import Loading from "../loaders/SquareLoader/loading";
import Edituser from "./Edituser";
import axios from "axios";

export default function UserManagement() {
	const dispatch = useDispatch();
	const listusers = useSelector((state) => state.listusers);
	const { users, isloading } = listusers;
	const [edit, setedit] = useState(false);
	const token = localStorage.getItem("token");

	const [selectId, setselecId] = useState();

	function DeleteHandler(id) {
		const delUrl = "https://shivila.herokuapp.com/api/v1/users/" + id;

		if (window.confirm("are you sure you whant to delete") === true) {
			axios
				.delete(delUrl, {
					headers: {
						Authorization: "Token " + token,
					},
				})
				.then((res) => {
					const { status } = res;
					console.log(status);
					alert("sucess");
				})
				.catch((err) => {
					console.log(err.response.status);
					alert("something went wrong");
				});
		}
	}

	function EditHandler(id) {
		setedit(true);
		setselecId(id);
	}

	useEffect(() => {
		dispatch(VeiwUserAction());
	}, [dispatch]);

	return (
		<>
			{!isloading ? (
				<section className={styles.intro}>
					<div className={styles.head}>
						<h2 className={styles.details}>User Management</h2>
					</div>
					<table className={styles.table}>
						<thead className={styles.tableHead}>
							<tr className={styles.tableRow}>
								<th className={styles.details}>Name</th>
								<th className={styles.details}>Role</th>
								<th className={styles.details}>Actions</th>
							</tr>
						</thead>
						<tbody className={styles.tableBody}>
							{users &&
								users.map((data) => (
									<tr key={data.id} className={styles.tableRow}>
										<td className={styles.details}>{data.full_name}</td>
										<td className={styles.details}>{data.role}</td>
										<td className={styles.details}>
											<button className={styles.btn} onClick={() => EditHandler(data.id)}>
												Edit
											</button>{" "}
											<span className={styles.divider}></span>
											<button className={styles.btn} onClick={() => DeleteHandler(data.id)}>
												Delete
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</table>

					{edit && <Edituser cls={setedit} selectId={selectId} />}
				</section>
			) : (
				<Loading />
			)}
		</>
	);
}
