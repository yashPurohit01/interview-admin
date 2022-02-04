import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../../styles/components/mainContent/CreateJob.module.scss";

export default function MainContentViewEdit() {
	const dummyObj = {
		name: "",
		email: "",
		phone: "",
		designation: "",
		date: "",
		time: "",
	};

	const [savedData, setSavedData] = useState(dummyObj); // assigning dummy obj
	const [data, setData] = useState(savedData);

	const [loadStatus, setLoadStatus] = useState(false);
	const [updateStatus, setUpdateStatus] = useState(false);

	const saveToBackEnd = (info) => {
		setLoadStatus(true);
		axios
			.put("https://jsonplaceholder.typicode.com/users/1", {
				name: info.name,
				username: info.password,
			})
			.then(() => {
				// To Do: check request is succes or fail and do action only when reset
				setSavedData(info);
				setLoadStatus(false);
			});
	};

	const handleUpdate = (info) => {
		if (updateStatus) {
			// save
			saveToBackEnd(info);
		}
		setUpdateStatus(!updateStatus);
	};

	const resetData = () => {
		setData(savedData); // set default data
	};

	const getDisableStatus = () => {
		// check backend and front end data are same
		return JSON.stringify(savedData) === JSON.stringify(data);
	};
	const handleChange = (property, value) => {
		// change data
		setData({
			...data,
			[property]: value,
		});
	};

	useEffect(() => {
		// get data from backend

		// To-Do: Handle when connect to backend is failing and validate if  got wrong structured data
		axios.get("https://jsonplaceholder.typicode.com/users/1").then((response) => {
			const backendObj = {
				name: response.data.username,
				email: response.data.email,
				phone: response.data.phone,
				designation: response.data.website,
				date: response.data.address.zipcode,
				time: response.data.id,
			};
			setData(backendObj);
			setSavedData(backendObj);
		});
	}, []);
	return (
		// Content In Login Page
		<section className={styles.createJob}>
			{/* Profile Details */}
			<div className={styles.content}>
				{/* Left Side Message */}
				<div className={styles.message}>
					<h2 className={styles.title}>View /Edit scheduling</h2>
					<p className={styles.details}>Explore</p>
				</div>

				{/* Login Form */}
				<form className={styles.loginForm} action="" method="POST">
					{/* Input Fields */}
					<h1>Updation scheduled meeting</h1>

					<label>
						{" "}
						Name
						<input type="text" disabled={!updateStatus} value={data.name} onChange={(e) => handleChange("name", e.target.value)} />
					</label>
					<br />

					<label>
						{" "}
						Email
						<input type="email" disabled={!updateStatus} value={data.email} onChange={(e) => handleChange("email", e.target.value)} />
					</label>
					<br />

					<label>
						{" "}
						Phone
						<input type="tel" disabled={!updateStatus} value={data.phone} onChange={(e) => handleChange("phone", e.target.value)} />
					</label>
					<br />

					<label>
						{" "}
						Designation
						<input type="text" disabled={!updateStatus} value={data.designation} onChange={(e) => handleChange("designation", e.target.value)} />
					</label>
					<br />

					<label>
						{" "}
						Date
						<input type="date" disabled={!updateStatus} value={data.date} onChange={(e) => handleChange("date", e.target.value)} />
					</label>
					<br />

					<label>
						{" "}
						Time
						<input type="time" disabled={!updateStatus} value={data.time} onChange={(e) => handleChange("time", e.target.value)} />
					</label>
					<br />

					<button onClick={async (e) => handleUpdate(data)} disabled={loadStatus}>
						{updateStatus ? "Save" : "Update"}
					</button>

					{updateStatus && (
						<button onClick={(e) => resetData()} disabled={getDisableStatus()}>
							Reset
						</button>
					)}

					{loadStatus && <p> Saving ... </p>}

					{/* Login Button */}
					{/* <div className={styles.submit}>
            <input className={styles.btn} type="submit" value="Create Post" />
          </div> */}
				</form>
			</div>
		</section>
	);
}
