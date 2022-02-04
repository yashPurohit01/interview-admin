import { useState } from "react";

export const useAuth = () => {
	const [isAuth, setAuth] = useState(initialValue);

	return [isAuth, setAuth];
};
