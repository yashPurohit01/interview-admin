// Login Page

// Import All Components
import MainContentLogin from "../components/mainContent/Login";

// Import Styles
import global from "../styles/pages/Global.module.scss";

export default function Login() {
	return (
		<section className={global.parentContainer}>
			{/* Login Screen */}
			<section className={global.fullScreen}>
				<MainContentLogin />
			</section>
		</section>
	);
}
