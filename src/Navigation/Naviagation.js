import Login from "../pages/Login";
import Main from "../pages/Main";
import Activity from "../pages/Activity";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Register from "../pages/Register";
import UserManagement from "../components/mainContent/UserManagement";
import Error from "../pages/Error";
import Documents from "../components/filemange/src/components/pages/documents";
import Media from "../components/filemange/src/components/pages/media";
import MainContentSelectedCandidates from "../components/mainContent/SelectedCandidates";
import MainContentAppliedCandidates from "../components/mainContent/AppliedCandidates";
import MainContentViewJobs from "../components/mainContent/ViewJobs";
import MainContentScheduleDetails from "../components/mainContent/ScheduleDetails";
import MainContentDashboard from "../components/mainContent/Dashboard";
import MainContentSchedule from "../components/mainContent/Schedule";
import MainContentCreateHR from "../components/mainContent/CreateHR";
import MainContentCreateJob from "../components/mainContent/CreateJob";
import MainContentUpcomingScheduled from "../components/mainContent/UpcomingSchedule";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../components/loaders/SquareLoader/loading";
import App from "../components/filemange/src/App";
import Home2 from "../components/filemange/src/components/pages/home";
import LiveStatus from "../components/mainContent/LiveStatus";

export const Navigation = ({ authenticated, isLoading }) => {
	return (
		<Routes>
			<Route path="/login" element={!authenticated ? <Login /> : <Navigate to="/" from="/login" />} />
			<Route path="/register" element={!authenticated ? <Register /> : <Navigate to="/" from="/login" />} />

			{authenticated && (
				<>
					<Route path="/" element={<Main />}>
						<Route path="/" element={<Navigate to="/admin" />} />
						<Route path="admin" element={<Home />}>
							<Route path="/admin" element={<Navigate to="/admin/dashboard" from="/admin" />} />
							<Route path="posted-jobs" element={<MainContentViewJobs />} />
							<Route path="create-new-job" element={<MainContentCreateJob />} />
							<Route path="create-new-hr" element={<MainContentCreateHR />} />
							<Route path="schedule-interview" element={<MainContentSchedule />} />
							<Route path="user-Management" element={<UserManagement />} />
							<Route path="live-status" element={<LiveStatus />} />
							<Route path="ProfileDetail" element={<MainContentScheduleDetails />} />

							<Route path="dashboard" element={<MainContentDashboard />} />
							<Route path="Upcoming" element={<MainContentUpcomingScheduled />} />
							<Route path="AppliedCandidates" element={<MainContentAppliedCandidates />} />
							<Route path="SelectedCandidates" element={<MainContentSelectedCandidates />} />
							<Route path="*" element={<Error />} />
						</Route>
						<Route path="/admin/contact" element={<Contact />} />
						<Route path="/admin/activity" element={<Activity />} />
						<Route path="/admin/filemange" element={<App />}>
							<Route path="docs" element={<Home2 />} />
							<Route exact path="files" element={<Documents />} />
							<Route exact path="media" element={<Media />} />
						</Route>
					</Route>
				</>
			)}

			<Route path="*" element={!authenticated && !isLoading ? <Error /> : <Loading />} />
		</Routes>
	);
};
