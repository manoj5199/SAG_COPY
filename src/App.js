import { useSelector } from "react-redux";
import "./App.css";
import { SideBar } from "./Components/SideBar";

function App() {
  const sel = useSelector((state) => state.admin.selected);
  const pageRender = () => {
    switch (sel) {
      case "Dashboard":
        return <div>{sel}</div>;
      case "Story Board":
        return <div>{sel}</div>;
      case "Message":
        return <div>{sel}</div>;
      case "Help":
        return <div>{sel}</div>;
      case "Training":
        return <div>{sel}</div>;
      case "widget":
        return <div>{sel}</div>;
      case "Users":
        return <div>{sel}</div>;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <SideBar></SideBar>
      {pageRender()}
    </div>
  );
}

export default App;
