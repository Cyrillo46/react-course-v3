import people from "./data";
import { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div>
        {people.map((person) => {
          return <div key={person.id}>{person.name}</div>;
        })}
      </div>
    </>
  );
};
export default App;
