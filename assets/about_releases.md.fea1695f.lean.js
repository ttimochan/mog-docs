import{b as t,o as s,c as i,a as l}from"./app.6fde6d44.js";const n=l("",23),o=[n],p=JSON.parse('{"title":"\u7248\u672C\u53D1\u5E03 | \u5173\u4E8E","description":"","frontmatter":{"title":"\u7248\u672C\u53D1\u5E03 | \u5173\u4E8E","outline":"deep","sidebar":false},"headers":[{"level":2,"title":"\u53D1\u5E03\u5468\u671F","slug":"release-cycle","link":"#release-cycle","children":[]},{"level":2,"title":"\u8BED\u4E49\u5316\u7248\u672C\u63A7\u5236\u7684\u7279\u6B8A\u60C5\u51B5","slug":"semantic-versioning-edge-cases","link":"#semantic-versioning-edge-cases","children":[{"level":3,"title":"\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u548C\u65E7\u7248\u8FD0\u884C\u65F6\u4E4B\u95F4\u7684\u517C\u5BB9\u6027","slug":"compile-code-compatibility-with-older-runtime","link":"#compile-code-compatibility-with-older-runtime","children":[]}]},{"level":2,"title":"\u9884\u53D1\u5E03\u7248\u672C","slug":"pre-releases","link":"#pre-releases","children":[]},{"level":2,"title":"\u5E9F\u5F03\u7684\u7279\u6027","slug":"deprecations","link":"#deprecations","children":[]},{"level":2,"title":"RFC","slug":"rfcs","link":"#rfcs","children":[]},{"level":2,"title":"\u8BD5\u9A8C\u6027\u7279\u6027","slug":"experimental-features","link":"#experimental-features","children":[]}],"relativePath":"about/releases.md","lastUpdated":1667913099000}'),c={name:"about/releases.md"},g=Object.assign(c,{setup(d){let e="";return t(async()=>{e=(await(await fetch("https://api.github.com/repos/mogland/core/releases?per_page=1")).json())[0].name;let a=document.getElementById("version");a.innerHTML=e}),(r,a)=>(s(),i("div",null,o))}});export{p as __pageData,g as default};
