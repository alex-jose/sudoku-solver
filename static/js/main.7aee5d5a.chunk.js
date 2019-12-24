(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{45:function(e,t,n){e.exports=n(55)},50:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(8),o=n.n(l),i=(n(50),n(24)),c=n(30),u=n(31),s=n(37),f=n(32),m=n(19),h=n(38),v=n(27),d=function(e){var t=e.value,n=e.valid,r=e.onChange;return a.a.createElement("input",{style:{width:"1.8em",paddingLeft:"0.2em",height:"1.4em",textAlign:"center",fontSize:"1.3em",color:n?"rgba(0, 0, 0, 0.54)":"red"},type:"number",min:"0",max:"9",maxLength:"1",value:String(t),onChange:function(e){return r(e.target.value)}})},g=n(36);function p(e){if(9!==e.length)return!1;for(var t in e){if(9!==e[t].length)return null}for(var n=0;n<9;n++)for(var r=0;r<9;r++)if(!E(e,n,r))return!1;return!0}function y(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(0===e[t][n])return!1;return!0}function b(e){if(y(e))return e;var t=function(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(0===e[t][n])return[t,n];return null}(e),n=Object(g.a)(t,2),r=n[0],a=n[1],l=function(e,t,n){for(var r=new Set([]),a=0;a<9;a++)r.add(e[a][n]),r.add(e[t][a]);for(var l=3*Math.floor(t/3);l<3*Math.floor(t/3)+3;l++)for(var o=3*Math.floor(n/3);o<3*Math.floor(n/3)+3;o++)r.add(e[l][o]);for(var i=[],c=0;c<10;c++)r.has(c)||i.push(c);return i}(e,r,a);if(0===l.length)return null;var o=function(t){var n=b(e.map((function(e,n){return e.map((function(e,o){return n===r&&o===a?l[t]:e}))})));if(null!==n)return{v:n}};for(var i in l){var c=o(i);if("object"===typeof c)return c.v}return null}function E(e,t,n){if(0===e[t][n])return!0;for(var r=0;r<9;r++){if(r!==t&&e[r][n]===e[t][n])return!1;if(r!==n&&e[t][r]===e[t][n])return!1}for(var a=3*Math.floor(t/3);a<3*Math.floor(t/3)+3;a++)for(var l=3*Math.floor(n/3);l<3*Math.floor(n/3)+3;l++)if(a!==t&&l!==n&&e[a][l]===e[t][n])return!1;return!0}function j(e){return y(e)&&p(e)}var O=function(e){var t=e.cells,n=e.onChange,r={border:j(t)?"1px solid limegreen":"1px solid black"};return a.a.createElement("table",{style:Object(v.a)({},r,{margin:"0.3em"})},a.a.createElement("tbody",null,t.map((function(e,l){return a.a.createElement("tr",{style:Object(v.a)({},r),key:l},e.map((function(e,o){return a.a.createElement("td",{style:Object(v.a)({},r),key:o},a.a.createElement(d,{value:e,onChange:function(e){return n(e,l,o)},valid:E(t,l,o)}))})))}))))},k=n(84),C=n(76),x=n(77),S=n(85),w=function(e){var t=e.error,n=e.onClose;return a.a.createElement(k.a,{open:""!==t.trim(),onClose:n},a.a.createElement(C.a,null,t),a.a.createElement(x.a,null,a.a.createElement(S.a,{color:"primary",autoFocus:!0,onClick:n},"OK")))},M=n(78),A=n(79),z=n(83),L=n(80),U=n(75),W=n(81),B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(f.a)(t).call(this))).state={cells:Object(i.a)(Array(9)).map((function(e){return Object(i.a)(Array(9)).map((function(e){return 0}))})),error:"",loading:!1},e.solve=e.solve.bind(Object(m.a)(e)),e.clear=e.clear.bind(Object(m.a)(e)),e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e,t,n){1!==e.length&&(e=e.slice(e.length-1)),(""===e||e>9||e<0)&&(e=0),e=Number(e),this.setState((function(r){return{cells:r.cells.map((function(r,a){return r.map((function(r,l){return t===a&&n===l?e:r}))}))}}))}},{key:"solve",value:function(){this.setState({loading:!0});var e,t=p(e=this.state.cells)?b(e):null;return null===t?this.setState({error:"Unable to solve!",loading:!1}):this.setState({cells:t,error:"",loading:!1})}},{key:"clear",value:function(){this.setState({cells:Object(i.a)(Array(9)).map((function(e){return Object(i.a)(Array(9)).map((function(e){return 0}))})),error:""})}},{key:"render",value:function(){var e=this;return a.a.createElement(M.a,{maxWidth:"sm"},a.a.createElement(A.a,{container:!0,spacing:1,direction:"column",justify:"center"},a.a.createElement(A.a,{item:!0,xs:!0},a.a.createElement(z.a,null,a.a.createElement(L.a,{variant:"h4",align:"center",color:"textSecondary"},"SUDOKU"))),a.a.createElement(A.a,{item:!0,xs:!0,style:{marginTop:"1em"}},a.a.createElement(z.a,null,a.a.createElement(L.a,{align:"center",color:"textSecondary"},"Fill the known cells and let the app solve the rest for you :)"))),a.a.createElement(A.a,{item:!0,xs:!0,container:!0,justify:"center",style:{marginTop:"1.5em"}},a.a.createElement(O,{cells:this.state.cells,onChange:this.handleChange})),a.a.createElement(A.a,{item:!0,xs:!0,container:!0,justify:"center"},a.a.createElement(S.a,{mx:2,size:"small",variant:"outlined",color:"default",onClick:this.solve,style:{marginRight:"0.5em"}},"Solve"),a.a.createElement(S.a,{mx:2,size:"small",variant:"outlined",onClick:this.clear,style:{marginLeft:"0.5em"}},"Clear"))),a.a.createElement(w,{error:this.state.error,onClose:function(){return e.setState({error:""})}}),a.a.createElement(U.a,{open:this.state.loading,style:{zIndex:"1000"}},a.a.createElement(W.a,{color:"inherit"})))}}]),t}(a.a.Component);var F=function(){return a.a.createElement(B,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.7aee5d5a.chunk.js.map