import "./App.css";

import { Greet } from "components/Greet";
import { Person } from "components/Person";
import { List } from "components/List";

function App() {
  const personData = {
    firstName: "Aman",
    lastName: "Sharma",
  };
  const listData = [
    {
      first: "Aman",
      last: "Kumar",
    },
    {
      first: "Tarun",
      last: "Sharma",
    },
    {
      first: "Naveen",
      last: "Kumar",
    },
  ];
  
  return (
    <div className="App">
      {/* <Greet sirName="Sharma" messages={10} isLoggedIn={true} /> */}
      {/* <Person personInfo={personData} /> */}
      <List list={listData} />
    </div>
  );
}

export default App;
