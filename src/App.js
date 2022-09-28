import Exercise from "./Component/Exercise/Exercise";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";


function App() {
  return (
    <div className=" grid grid-cols-4 bg-gray-100">
      <div className="col-span-3">
        <Header></Header>
        <Exercise></Exercise>

      </div>
      <Sidebar></Sidebar>

    </div>
  );
}

export default App;
