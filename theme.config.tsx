import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const divStyle = {
  paddingVertical: 10,
  // backgroundColor: 'lightgray',
display: "flex",
gap: 10,
justifyContent: "center",
alignItems: "center",
fontWeight: "bold"
};

const config: DocsThemeConfig = {
  // logo
  logo: <div style={divStyle}><svg
  width="34"
  height="42"
  viewBox="0 0 34 42"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="20" height="20" fill="#1178BE" />
  <rect x="14" y="22" width="20" height="20" fill="#1178BE" />
  <rect y="22" width="12" height="12" fill="#1178BE" />
  <rect x="22" y="8" width="12" height="12" fill="#1178BE" />
  <path
    d="M8.42614 9.79403V8.27273H15.5938V9.79403H12.9219V17H11.098V9.79403H8.42614Z"
    fill="white"
  />
  <path
    d="M19.2628 34H17.2855L20.2983 25.2727H22.6761L25.6847 34H23.7074L21.5213 27.267H21.4531L19.2628 34ZM19.1392 30.5696H23.8097V32.0099H19.1392V30.5696Z"
    fill="white"
  />
</svg>
<p>Dokumentation</p>
</div>,
// projekt
  project: {
    link: 'https://github.com/teanalyzer/TA',
  },
  // search
  search:{
    placeholder: "Dokumentation durchsuchen"
  },
  // toc
  toc:{
    title: "Auf dieser Seite"
  },
  // editLink
  editLink:{
    component: null
  },
  // feedback
  feedback:{
    content: null
  },
  // footer
  footer: {
    text: (<div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px', 
    }}>
      Powered by <img src="/cis_logo.png" alt="cis logo" width="20" /> | ©{' '} {new Date().getFullYear()} 
      
    </div>
    )
  },
}

export default config
