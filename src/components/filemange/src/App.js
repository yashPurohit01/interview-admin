import { Outlet } from "react-router-dom";
import Ui from "./components/ui/Ui";

function App() {

  return (
    <div>
     
        <Ui />
        <Outlet />
    </div>
  );
}

export default App;
