import { BsFillFolderFill, BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import style from "../styles/sidebar.module.css";
import { MdOutlineSettings } from "react-icons/md";
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillFileAdd } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { storage } from "../data/firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { useContext } from "react";
import { UiContext } from "../ui/uicontext";

export default function Sidebar() {
	// const [navopn, setnavopn] = useState(false);
	const [file, setfile] = useState("");
	const [progrss, setprogrss] = useState(0);

	const fileref = useRef();

	const { nvOpn, setnvOpn } = useContext(UiContext);

	function toggle() {
		setnvOpn(!nvOpn);
	}

	function fileuploadHandler(e) {
		console.log(e.target.files[0]);
		setfile(e.target.files[0]);

		upload(file);
	}

	function upload(file) {
		if (file === null) {
			alert("select a file");
		} else if (file.type === "image/jpeg") {
			const imgRef = ref(storage, `images/${file.name}`);
			const upldtask = uploadBytesResumable(imgRef, file);
			upldtask.on(
				"state_changed",
				(snapshot) => {
					const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
					setprogrss(prog + "img");
				},
				(err) => alert(err)
			);
		} else if (file.type === "application/pdf") {
			const docRef = ref(storage, `documents/${file.name}`);
			const uplodTask = uploadBytesResumable(docRef, file);
			uplodTask.on(
				"state_changed",
				(snapshot) => {
					const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
					setprogrss(prog + "doc");
				},
				(err) => alert(err)
			);
		}
	}

	console.log(progrss);

	return (
		<div className={style.cont}>
			<nav className={nvOpn ? style.navsideopn : style.navside}>
				<i id={style.btn1} onClick={toggle}>
					{nvOpn ? <BsFillCaretLeftFill /> : <GiHamburgerMenu />}
				</i>

				<div className={style.docbut} onClick={() => fileref.current.click()}>
					<input type="file" style={{ display: "none" }} onChange={fileuploadHandler} ref={fileref} />
					<button className={style.addDoc}>
						<i>
							<AiFillFileAdd />
						</i>
					</button>
					<p>Add document</p>
				</div>

				<ul>
					<Link to="/admin/filemange/docs">
						<li className={style.a}>
							<i>
								<BsFillFolderFill />
							</i>
							<p>All files</p>
						</li>
					</Link>
					<Link to="/admin/filemange/files">
						<li className={style.a}>
							<i>
								<IoDocuments />
							</i>
							<p>All Documens</p>
						</li>
					</Link>
					<Link to="/admin/filemange/media">
						<li className={style.a}>
							<i>
								<IoMdPhotos />
							</i>
							<p>All Media</p>
						</li>
					</Link>
				</ul>

				<Link to="/" className={style.a}>
					<div className={style.end}>
						<i>
							<MdOutlineSettings />
						</i>
						<p>Settings</p>
					</div>
				</Link>
			</nav>
		</div>
	);
}
