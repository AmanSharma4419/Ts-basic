import "./App.css";

import { Greet } from "components/Greet";
import { Person } from "components/Person";
import { List } from "components/List";
import { Heading } from "components/Heading";
import { Button } from "components/Button";
import { LoggedIn } from "components/LoggedIn";
import { User } from "components/User";
import Counter from "components/Counter";
import { Profile } from "components/auth/Profile";
import { Private } from "components/auth/Private";
import { Custom } from "components/Custom";
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
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <Counter name="Aman" /> */}
      {/* <User /> */}
      {/* <LoggedIn /> */}
      {/* <Button
        handleClick={(event, id) => {
          return console.log("Hello Iam Clicked", id);
        }}
      ></Button> */}
      <Greet messages={10} isLoggedIn={true} />
      {/* <Custom messages={10} isLoggedIn={true} /> */}
      {/* <Person personInfo={personData} /> */}
      {/* <List list={listData} /> */}
      {/* <Heading>Welcome to heading </Heading> */}
    </div>
  );
}

export default App;
