// Register Page

// Import All Components
import MainContentRegister from "../components/mainContent/Register";

// Import Styles
import global from "../styles/pages/Global.module.scss";

export default function Register() {
	return (
		<section className={global.parentContainer}>
			{/* Register Screen */}
			<section className={global.fullScreen}>
				<MainContentRegister />
			</section>
		</section>
	);
}
