import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataProvider";

const PreviewContainer = () => {
  const [srcDoc, setSrcDoc] = useState("");
  const { html, css, js } = useContext(DataContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
            </html>
          `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="container">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default PreviewContainer;
