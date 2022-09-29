import Exercise from "./Component/Exercise/Exercise";
import Header from "./Component/Header/Header";



function App() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4 bg-gray-100">
      <div className="col-span-3">
        <Header></Header>
        <Exercise></Exercise>

      </div>
     

    </div>
  );
}

export default App;
