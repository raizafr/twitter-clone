import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Modal from "./components/modal";

function App() {
  return (
    <>
      <main className="bg-black min-h-screen pt-0.5 flex">
        <Sidebar />
        <Feed />
        <Widgets />
        {/* <Modal /> */}
      </main>
    </>
  );
}

export default App;
