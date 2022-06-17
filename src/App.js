import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  render(
    <div>
      <h1>Adopt me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
