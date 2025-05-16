import { useEffect, useState } from "react";

const Result = ({ html, css, js }) => {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `);
    }, 250); 

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div style={{ flex: 1, padding: "8px" }}>
      <iframe
        srcDoc={srcDoc}
        title="Output"
        sandbox="allow-scripts allow-modals"
        width="100%"
        height="100%"
        style={{ backgroundColor: "white" }}
      />
    </div>
  );
};

export default Result;