
import React, { useState } from "react";
import Editor from "./Editor";
import { Box,  styled } from "@mui/material";
import Result from "./result";

// const Container = styled(Box)`
// display:flex;
//    background-color: #060606;
   
// `


const Code =() => {
    const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

    return ( 
        <Box>
        <Box  style={{ display: "flex",  backgroundColor:" #060606 "}}>
        <Editor language="html" value={html} onChange={setHtml} title="HTML" icon="/" color="red"/>
        <Editor language="css" value={css} onChange={setCss} title="CSS" icon="*" color="#0EBEFF"/>
        <Editor language="javascript" value={js} onChange={setJs} title="JavaScript" icon="()" color="#FCD000" />
        </Box>
        <Result html={html} css={css} js={js} />
      </Box>
      
    );
}
export default Code