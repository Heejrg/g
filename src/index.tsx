import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

const test = new class {
  private foo() {}
  private bar: number = 1;
}();

console.log(Reflect.ownKeys(Reflect.getPrototypeOf(test)));

const proxy = new Proxy(test, {
  get: (obj: any, prop: any) => {
    console.log("Trap");
    return prop in obj ? obj[prop] : 37;
  }
});

proxy.foo();
