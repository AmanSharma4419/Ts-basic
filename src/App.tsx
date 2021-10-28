import "./App.css";

import { Greet } from "components/Greet";
import { Person } from "components/Person";
import { List } from "components/List";
import { Heading } from "components/Heading";
import { Button } from "components/Button";
import { LoggedIn } from "components/LoggedIn";
import { User } from "components/User";

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
      <User />
      {/* <LoggedIn /> */}
      {/* <Button
        handleClick={(event, id) => {
          return console.log("Hello Iam Clicked", id);
        }}
      ></Button> */}
      {/* <Greet sirName="Sharma" messages={10} isLoggedIn={true} /> */}
      {/* <Person personInfo={personData} /> */}
      {/* <List list={listData} /> */}
      {/* <Heading>Welcome to heading </Heading> */}
    </div>
  );
}

export default App;
