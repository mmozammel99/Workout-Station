import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";


function App() {
  return (
    <div className=" grid grid-cols-4 bg-gray-100">
      <div>
        <Header></Header>

      </div>
      <Sidebar></Sidebar>

    </div>
  );
}

export default App;
