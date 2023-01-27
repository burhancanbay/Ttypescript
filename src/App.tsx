import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greets } from "./components/Greets";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { LoggedIn } from "./components/state/LoggedIn";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";

export const App = () => {
  const personName = {
    first: "burhan",
    last: "canbay",
  };

  const nameList = [
    {
      first: "burhan",
      last: "canbay",
    },
    {
      first: "can",
      last: "gundogdu",
    },
    {
      first: "osman",
      last: "uygun",
    },
  ];

  return (
    <div>
      {/* <Greets name={"burhan"} messageCount={42} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>BASLIK</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio </Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />

      <Container
        styles={{ border: "1px solid black", padding: "20px", margin: "20px" }}
      /> */}
      {/* <LoggedIn />
      <User /> */}
      <Counter />
    </div>
  );
};
