import React from "react";
import "../../styles/components/mainContent/Profile.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

function UserProfile({ setOpenModal }) {
	return (
		<>
			<div className="wrapper">
				<div className="left">
					<img src="/image/account/avatorimage.png" alt="user" width="100" />
					<h2>Admin</h2>

					<button className="btn">Edit</button>
				</div>
				<div className="right">
					<div className="info">
						<div>
							<div className="btn-close">
								<AiOutlineCloseCircle
									style={{ fontSize: "1rem" }}
									onClick={() => {
										setOpenModal(false);
									}}
								/>
							</div>

							<h3>Profile</h3>
						</div>
						<div className="info_data">
							<div className="data">
								<h4>Name</h4>
								<p>Sadanand</p>
							</div>
						</div>
					</div>

					<div className="projects">
						<div className="projects_data">
							<div className="data">
								<h4>Email</h4>
								<p>Sadanandgadwal@gmail.com</p>
							</div>
						</div>
					</div>
					<div className="projects">
						<div className="projects_data">
							<div className="data">
								<h4>Phone number</h4>
								<p>7894561233</p>
							</div>
						</div>
					</div>
					<div className="projects">
						<div className="projects_data">
							<div className="data">
								<h4>Desgination</h4>
								<p>Shivila Admin</p>
							</div>
						</div>
					</div>
					<div className="projects">
						<div className="projects_data">
							<div className="data">
								<h4>Badge</h4>
								<p>Admin</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserProfile;
