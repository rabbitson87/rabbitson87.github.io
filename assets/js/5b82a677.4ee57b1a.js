"use strict";(self.webpackChunkrabbitson_87=self.webpackChunkrabbitson_87||[]).push([[407],{7482:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>v,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=e(7462),l=(e(7294),e(3905)),o=e(1844);const r={slug:"react-form-control",title:"\ud6a8\uc728\uc801\uc778 React form \ucee8\ud2b8\ub864",authors:["rabbitson87"],tags:["react form"]},u=void 0,s={permalink:"/react-form-control",editUrl:"https://github.com/rabbitson87/rabbitson87.github.io/tree/main/blog/2022-07-31-react-form-control.mdx",source:"@site/blog/2022-07-31-react-form-control.mdx",title:"\ud6a8\uc728\uc801\uc778 React form \ucee8\ud2b8\ub864",description:"React\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\ub2e4\ubcf4\uba74 \ud68c\uc6d0\uac00\uc785 \ub4f1 \ud3fc\uc744 \uc811\ud558\uac8c \ub3fc\uc694.",date:"2022-07-31T00:00:00.000Z",formattedDate:"2022\ub144 7\uc6d4 31\uc77c",tags:[{label:"react form",permalink:"/tags/react-form"}],readingTime:6.245,hasTruncateMarker:!1,authors:[{name:"Rabbitson87",title:"\ud480\uc2a4\ud14d \uc9c0\ud5a5 \uac1c\ubc1c\uc790",url:"https://github.com/rabbitson87",imageURL:"https://avatars.githubusercontent.com/u/44018110?s=96&v=4",key:"rabbitson87"}],frontMatter:{slug:"react-form-control",title:"\ud6a8\uc728\uc801\uc778 React form \ucee8\ud2b8\ub864",authors:["rabbitson87"],tags:["react form"]}},i={authorsImageUrls:[void 0]},c=[{value:"React \uae30\ubcf8 \ud3fc \ub2e4\ub8e8\uae30",id:"react-\uae30\ubcf8-\ud3fc-\ub2e4\ub8e8\uae30",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3}],p={toc:c};function v(n){let{components:t,...e}=n;return(0,l.kt)("wrapper",(0,a.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"React\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\ub2e4\ubcf4\uba74 \ud68c\uc6d0\uac00\uc785 \ub4f1 \ud3fc\uc744 \uc811\ud558\uac8c \ub3fc\uc694.\n\uba3c\uc800 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5c6\uc774 \uae30\ubcf8\uae30\ub2a5\uc73c\ub85c\ub9cc \uad6c\ud604\ub41c \ud3fc\uc744 \ud1b5\ud574 \uac04\ub2e8\ud788 \uc0b4\ud3b4\ubcf4\uba74\uc11c \uc7a5\ub2e8\uc810\uc744 \uc54c\uc544\ubd10\uc694."),(0,l.kt)("h2",{id:"react-\uae30\ubcf8-\ud3fc-\ub2e4\ub8e8\uae30"},"React \uae30\ubcf8 \ud3fc \ub2e4\ub8e8\uae30"),(0,l.kt)("p",null,"\ub2e4\uc74c\uc740 html\uc758 form,label,input\uc744 \ud65c\uc6a9\ud55c \uc608\uc81c\uc5d0\uc694.\n\uc9c1\uc811 \uc218\uc815\ub3c4 \uac00\ub2a5\ud558\uba70 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub97c \ud0c0\uc774\ud551\ud560\ub54c\ub9c8\ub2e4 \ubc18\uc751\ud558\uba70 \ubcf4\uc5ec\uc8fc\uac8c \uc791\uc131\ub418\uc5c8\uc5b4\uc694.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub85c\uadf8\uc778 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\ub41c \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778 \uc131\uacf5!\uc774\ub77c\ub294 \ubb38\uad6c\ub97c \ubcf4\uc5ec\uc918\uc694."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\uae30\ubcf8 \ud3fc \uc608\uc81c \ubcf4\uae30"),(0,l.kt)("div",null,(0,l.kt)(o.Z,{language:"jsx",title:"/src/components/HelloCodeTitle.js",live:!0,mdxType:"CodeBlock"},'function \uae30\ubcf8() {\n  const [\uc544\uc774\ub514, \uc544\uc774\ub514\uc785\ub825] = useState(""); // \uae30\ubcf8\uac12 \'\'\ub85c \ucd08\uae30\ud654\n  const [\ube44\ubc00\ubc88\ud638, \ube44\ubc00\ubc88\ud638\uc785\ub825] = useState(""); // \uae30\ubcf8\uac12 \'\'\ub85c \ucd08\uae30\ud654\n  \n  const tryLogin = useCallback(() =>\n    alert(\uc544\uc774\ub514.concat(\'\ub85c \ub85c\uadf8\uc778 \uc131\uacf5!\'))\n  );\n  return (\n    <>\n      <div>\n        <label>\uc544\uc774\ub514: </label>\n        <input\n          type="text"\n          value={\uc544\uc774\ub514}\n          placeholder="\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."\n          onChange={(event) => \uc544\uc774\ub514\uc785\ub825(event.target.value)}\n        />\n        <label>\ube44\ubc00\ubc88\ud638: </label>\n      </div>\n      <div>\n        <input\n          type="password"\n          value={\ube44\ubc00\ubc88\ud638}\n          placeholder="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."\n          onChange={(event) => \ube44\ubc00\ubc88\ud638\uc785\ub825(event.target.value)}\n        />\n      </div>\n      <button type="button" onClick={tryLogin}>\n        \ub85c\uadf8\uc778\n      </button>\n      <p>\uc544\uc774\ub514: {\uc544\uc774\ub514}</p>\n      <p>\ube44\ubc00\ubc88\ud638: {\ube44\ubc00\ubc88\ud638}</p>\n    </>\n  );\n}'))),(0,l.kt)("p",null,"\uac04\ub2e8\ud55c \ud3fc\uc744 \uad6c\ud604\ud574\ubcf4\uace0 \uc0b4\ud3b4 \ubcf4\uc558\uc5b4\uc694. \uba3c\uc800 \uae30\ubcf8\ud3fc\uc758 \uc7a5\uc810\uacfc \ub2e8\uc810\uc744 \ubcfc\uac8c\uc694."),(0,l.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ub77c\uc774\ube0c\ub7ec\ub9ac\uc5c6\uc774 \uad6c\ud604\ub418\uc5b4 \uac00\ubcbc\uc6cc\uc694."),(0,l.kt)("li",{parentName:"ol"},"\ucf54\ub4dc\ub97c \uc54c\uc544\ubcf4\uae30\uac00 \uc26c\uc6cc\uc694.")),(0,l.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc785\ub825\uac12\uc744 \uac80\uc0ac \ud560 \uc218\uac00 \uc5c6\uc5b4\uc694."),(0,l.kt)("li",{parentName:"ol"},"\ub85c\uadf8\uc778 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \ubb34\uc870\uac74 \uc2e4\ud589\ub3fc\uc694.")),(0,l.kt)("p",null,"\uae30\ubcf8\ud3fc\uc774\uc9c0\ub9cc \ub2e8\uc810\uc744 \ud558\ub098\ud558\ub098 \ud574\uacb0\ud574\ubcf4\uba74\uc11c \uc4f8\ub9cc\ud55c \ud3fc\uc744 \uac19\uc774 \uc644\uc131\uc2dc\ucf1c\ubd10\uc694!\n\uba3c\uc800 1\ubc88\uc0ac\ud56d\ubd80\ud130 \uac1c\uc120\uc2dc\ucf1c\ubd10\uc694 \uc785\ub825\uac12\uc744 \uac80\uc0ac\ud558\uae30 \uc704\ud574\uc120 \uc785\ub825 input\uc758 onChange \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560\ub54c\ub9c8\ub2e4 \uccb4\ud06c\ud574\uc57c\ub3fc\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},'<input\n  type="text"\n  value={\uc544\uc774\ub514}\n  placeholder="\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."\n  onChange={(event) => \uc544\uc774\ub514\uc785\ub825(event.target.value)} // \uc774\ubd80\ubd84 \ubcc0\uacbd\n  // highlight-start\n  onChange={(event) => {\n    const { value } = event.target;\n    if (!value || value === "") alert("\uc544\uc774\ub514\uac00 \ube44\uc5b4\uc788\uc5b4\uc694!");\n    \uc544\uc774\ub514\uc785\ub825(event.target.value);\n  }}\n  // highlight-end\n/>\n')),(0,l.kt)("p",null,"\uc774\ub807\uac8c\ub9cc \uad6c\ud604\ud55c\ub2e4\uba74 \uc785\ub825\uac12\uc774 \ubcc0\ud560\ub54c\uc5d0\ub9cc \uac12\uc774 \uc774\uc0c1\uc788\ub294\uc9c0 \uccb4\ud06c\ud55c \ud6c4 alert\ub97c \ub744\uc6cc\uc904 \uac70\uc5d0\uc694. \ub2e8\uc9c0 \uac12\ub9cc \uccb4\ud06c\ud574\uc904\ubfd0 \ubc14\ub85c \ub85c\uadf8\uc778 \ubc84\ud2bc\uc744 \ub204\ub974\uac70\ub098 2\ubc88\uc0ac\ud56d\uc744 \uac1c\uc120\uc2dc\ud0a4\uae30\uc5d0\ub294 \uc801\uc808\ud558\uc9c0\uac00 \uc54a\ub124\uc694.\n\uadf8\ub7fc \uc870\uae08\ub354 \uac1c\uc120\uc2dc\ucf1c \ubcfc\uac8c\uc694. \uac12\uccb4\ud06c \ubd80\ubd84\uc744 \ub85c\uadf8\uc778 \ubc84\ud2bc\uc744 \ub204\ub97c\ub54c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c \uac12\uc744 \ub530\ub85c \uae30\ub85d\ud574\uc904 \uac70\uc5d0\uc694, \uc5ec\uae30\uc5d0 \ud654\uba74\uc774 \ub85c\ub529\ub418\uc790\ub9c8\uc790 \ube44\uc5b4\uc788\ub294 \uac12\uc73c\ub85c \uccb4\ud06c\ud574 \ub85c\uadf8\uc778\ud558\uc9c0 \ubabb\ud558\ub3c4\ub85d \ub9c9\uc744\uac70\uc5d0\uc694.\n\ud654\uba74 \ub85c\ub529\ud6c4 \uc720\uc800\uac00 \uc785\ub825\ud55c \uac12\uc774 \uc720\ud6a8\ud558\uba74 \uc5d0\ub7ec\uae30\ub85d\uc744 \uc5c6\uc560\uc8fc\uace0 \uc720\ud6a8\ud558\uc9c0\uc54a\uc73c\uba74 \uc5d0\ub7ec\uae30\ub85d\uc744 \uae30\ub85d\ud574\uc8fc\ub294 \ub85c\uc9c1\uc744 \ucd94\uac00\ud574 \ubcfc\uac8c\uc694.\n\uc774 \uc5d0\ub7ec\uae30\ub85d\uc744 \uae30\ubc18\uc73c\ub85c \ub85c\uadf8\uc778 \ubc84\ud2bc\uc744 \ub20c\ub7ec\ub3c4 \uc5d0\ub7ec\uae30\ub85d\uc774 \uc788\ub2e4\uba74 \uc2e4\ud589\ub418\uc9c0 \uc54a\ub3c4\ub85d \ubc14\uafd4 \ubcfc\uac8c\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function \uae30\ubcf8() {\n  const [\uc544\uc774\ub514, \uc544\uc774\ub514\uc785\ub825] = useState(""); // \uae30\ubcf8\uac12 \'\'\ub85c \ucd08\uae30\ud654\n  const [\ube44\ubc00\ubc88\ud638, \ube44\ubc00\ubc88\ud638\uc785\ub825] = useState(""); // \uae30\ubcf8\uac12 \'\'\ub85c \ucd08\uae30\ud654\n\n  const [\uc5d0\ub7ec, \uc5d0\ub7ec\uae30\ub85d] = useState({\n    \uc544\uc774\ub514: "\uc544\uc774\ub514\uac00 \ube44\uc5b4\uc788\uc5b4\uc694!",\n    \ube44\ubc00\ubc88\ud638: "\ube44\ubc00\ubc88\ud638\uac00 \ube44\uc5b4\uc788\uc5b4\uc694!",\n  }); // \uae30\ubcf8\uac12 \uc5d0\ub7ec \ucd08\uae30\ud654\n\n  const tryLogin = useCallback(() => {\n    if (Object.keys(\uc5d0\ub7ec).length === 0) {\n      alert(`${\uc544\uc774\ub514}\ub85c \ub85c\uadf8\uc778 \uc131\uacf5!`);\n    }\n  });\n  return (\n    <>\n      <div>\n        <label>\uc544\uc774\ub514: </label>\n        <input\n          type="text"\n          value={\uc544\uc774\ub514}\n          placeholder="\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."\n          onChange={(event) => {\n            const { value } = event.target;\n            if (!value || value === "")\n              // \uac12\uc774 \uc788\ub294\uc9c0 \uccb4\ud06c\n              \uc5d0\ub7ec\uae30\ub85d({ ...\uc5d0\ub7ec, \uc544\uc774\ub514: "\uc544\uc774\ub514\uac00 \ube44\uc5b4\uc788\uc5b4\uc694!" });\n            else {\n              \uc5d0\ub7ec\uae30\ub85d((\ud604\uc7ac\uc5d0\ub7ec) => {\n                const \ud604\uc7ac\uc5d0\ub7ec\ubcf5\uc0ac\ubcf8 = { ...\ud604\uc7ac\uc5d0\ub7ec };\n                delete \ud604\uc7ac\uc5d0\ub7ec\ubcf5\uc0ac\ubcf8.\uc544\uc774\ub514;\n                return \ud604\uc7ac\uc5d0\ub7ec\ubcf5\uc0ac\ubcf8;\n              });\n            }\n            \uc544\uc774\ub514\uc785\ub825(event.target.value);\n          }}\n        />\n        {\uc5d0\ub7ec["\uc544\uc774\ub514"] && (\n          <p style={{ color: "red" }}>{\uc5d0\ub7ec["\uc544\uc774\ub514"]}</p>\n        )}\n      </div>\n      <div>\n        <label>\ube44\ubc00\ubc88\ud638: </label>\n        <input\n          type="password"\n          value={\ube44\ubc00\ubc88\ud638}\n          placeholder="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."\n          onChange={(event) => {\n            const { value } = event.target;\n            if (!value || value === "")\n              // \uac12\uc774 \uc788\ub294\uc9c0 \uccb4\ud06c\n              \uc5d0\ub7ec\uae30\ub85d({\n                ...\uc5d0\ub7ec,\n                \ube44\ubc00\ubc88\ud638: "\ube44\ubc00\ubc88\ud638\uac00 \ube44\uc5b4\uc788\uc5b4\uc694!",\n              });\n            else {\n              \uc5d0\ub7ec\uae30\ub85d((\ud604\uc7ac\uc5d0\ub7ec) => {\n                const \ud604\uc7ac\uc5d0\ub7ec\ubcf5\uc0ac\ubcf8 = { ...\ud604\uc7ac\uc5d0\ub7ec };\n                delete \ud604\uc7ac\uc5d0\ub7ec\ubcf5\uc0ac\ubcf8.\ube44\ubc00\ubc88\ud638;\n                return \ud604\uc7ac\uc5d0\ub7ec\ubcf5\uc0ac\ubcf8;\n              });\n            }\n            \ube44\ubc00\ubc88\ud638\uc785\ub825(event.target.value);\n          }}\n        />\n        {\uc5d0\ub7ec["\ube44\ubc00\ubc88\ud638"] && (\n          <p style={{ color: "red" }}>{\uc5d0\ub7ec["\ube44\ubc00\ubc88\ud638"]}</p>\n        )}\n      </div>\n      <button type="button" onClick={tryLogin}>\n        \ub85c\uadf8\uc778\n      </button>\n      <p>\uc544\uc774\ub514: {\uc544\uc774\ub514}</p>\n      <p>\ube44\ubc00\ubc88\ud638: {\ube44\ubc00\ubc88\ud638}</p>\n    </>\n  );\n}\n')))}v.isMDXComponent=!0}}]);