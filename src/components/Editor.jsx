
import { useState } from "react";
import {Box,styled, Button} from "@mui/material"
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';


import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { lintGutter } from "@codemirror/lint";
import { autocompletion } from "@codemirror/autocomplete";

import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import parserCss from "prettier/parser-postcss";
import parserJs from "prettier/parser-babel";

// language to prettier parser mapping
const prettierParsers = {
  html: parserHtml,
  css: parserCss,
  javascript: parserJs,
};


const getExtension = (language) => {
    const languageMap = {
      html: html(),
      css: css(),
      javascript: javascript(),
    };
  
    return [
         languageMap[language] || html(),// fallback to html
             autocompletion({ activateOnTyping: true }),
    lintGutter(),
        ];
  };

//styled components
const Container = styled(Box)`
flex-grow:1;
 flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`


const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex
`

const Header =styled(Box)`
 
display:flex;
 justify-content:space-between;
color:rgb(216, 216, 223);
background:rgb(43, 44, 48);
`

//main editor component
const Editor = ({ language = "html", value, onChange, title, icon ,color }) => {
    const extension = getExtension(language);
    const [open,setOpen] =useState(true);



const handleFormat = () => {
    try {
      const formatted = prettier.format(value, {
        parser: language,
        plugins: [prettierParsers[language]],
      });
      onChange(formatted);
    } catch (err) {
      console.error("Formatting error:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.toLowerCase()}.${language}`;
    a.click();
    URL.revokeObjectURL(url);
  };





    return (
<Container  style={open ? null : {flexGrow:0}}>
    <Header>
        <Heading >
           <Box
           component ="span" 
           style={{
                backgroundColor:color,
                padding:" 0 6px",
                borderRadius:"3px",
                marginRight: "5px",
               
           }}>{icon}</Box>
           {title}
        </Heading>



  <Box sx={{ display: "flex", gap: "8px", alignItems: "center", paddingRight: 1 }}>
          <Button size="small" onClick={handleFormat} variant="outlined" color="inherit">
            Format
          </Button>
          <Button size="small" onClick={handleDownload} variant="outlined" color="inherit">
            Download
          </Button>


        <CloseFullscreenIcon 
        onClick={()=>setOpen(prevState => !prevState)} fontSize="small" style= {{alignSelf:"center"}}/>
     </Box>
    </Header>
    <CodeMirror
     value={value}
     height="200px"
     theme="dark"
     extensions={extension}
     onChange={(value) => onChange(value)}/>
    
</Container>
      
    );
};
export default Editor;