import React from "react";

// context
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

// components
import Editor from "./Editor";

const CodeContainer = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);
  return (
    <>
      <div className="container top-container">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
          icon="/"
          color="#FF3C41"
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
          icon="*"
          color="#0EBEFF"
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
          icon="( )"
          color="#FCD000"
        />
      </div>
    </>
  );
};

export default CodeContainer;
