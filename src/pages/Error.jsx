import { Link } from "react-router-dom"
import styles from "../styles/pages/Error.module.scss"


export default function Error() {
    return (
        <div className={styles.errorBody}>
            <div className={styles.errorCard}>

                <h1 className={styles.errorheading}>Oops no page Found !</h1>
                <p className={styles.errortext}>something went wrong </p>
                <Link to="/login">Back to login </Link>
            </div>


        </div>
    )
}


