import React from "react";

// context
import DataProvider from "./context/DataProvider";

// components
import CodeContainer from "./components/CodeContainer";
import PreviewContainer from "./components/PreviewContainer";

const App = () => {
  return (
    <DataProvider>
      <CodeContainer />
      <PreviewContainer />
    </DataProvider>
  );
};

export default App;
