(this["webpackJsonpsleek-react-carousel-example"]=this["webpackJsonpsleek-react-carousel-example"]||[]).push([[0],{11:function(e,t,l){e.exports=l(213)},12:function(e,t,l){},20:function(e,t,l){},21:function(e,t,l){},213:function(e,t,l){"use strict";l.r(t);l(12);var a=l(0),n=l.n(a),r=l(5),c=l.n(r),m=l(218),o=l(217),u=l(6),i=l(1),s=l.n(i),d=l(7),E=l.n(d),h=l(10);l(19);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}var y={carousel:"_1ruxe","carousel-items":"_2KlPN",vertical:"_3Q84j","carousel-item":"_uRvDV",tracker:"_21UuF",dot:"_FMZUB",active:"_3P0rP"},b=function(e){var t=e.active,l=e.onTransitionStart,r=e.onTransitionOver,c=e.onTransitionEnd,m=e.height,o=e.children,i=e.disableTracker,s=e.containerClassName,d=e.containerStyle,b=e.className,p=e.style,g=e.itemContainerClassName,v=e.itemContainerStyle,k=e.trackerClassName,S=e.trackerStyle,N=e.trackerDotClassName,C=e.trackerDotStyle,w=e.trackerDotActiveClassName,j=e.trackerDotActiveStyle,T=e.vertical,x=e.delay,O=e.speed,D=e.disableScroll,I=e.looping,A=e.relay,B=e.panning,_=o.length,P=Object(a.useState)(t),F=P[0],R=P[1],K=Object(a.useState)(!1),z=K[0],U=K[1],V=Object(a.useState)(!1),J=V[0],M=V[1],W=Object(a.useRef)([]);Object(a.useEffect)((function(){z&&r()}),[z,r]),Object(u.a)((function(){H()}),x),Object(a.useEffect)((function(){W.current[t].scrollIntoView()}),[t]);var X=[];o.forEach((function(e,t){W.current=[].concat(W.current,[Object(a.createRef)()]),i||(X=[].concat(X,[n.a.createElement("div",{className:N+" "+y.dot+(F===t?" "+w+" "+y.active:""),onClick:function(){return Y({idx:t,elem:W.current[t]})},style:F===t?j:C})]))}));var Y=function(e){var t=e.idx,a=e.elem;z||t===F||(l(F),U(!0),R(t),E()(a,{cancellable:!1,time:O},(function(e){"complete"===e&&(U(!1),c(t))})))},G=function(){var e=F;F-1<0?(I&&(e=_-1),A&&(e=F+1,M(!0))):J?F+1===_?(M(!1),e=F-1):e=F+1:e=F-1;var t=W.current[e];Y({idx:e,elem:t})},H=function(){var e=F;F+1===_?(I&&(e=0),A&&(e=F-1,M(!0))):J?F-1<0?(M(!1),e=F+1):e=F-1:e=F+1;var t=W.current[e];Y({idx:e,elem:t})};return n.a.createElement("div",{className:s+" "+y.carousel,style:d},n.a.createElement(h.a.div,{onPanStart:B?function(e,t){!T&&t.delta.x<0||T&&t.delta.y<0?H():G()}:null,className:b+" "+y["carousel-items"]+(T?" "+y.vertical:""),style:f({},p,{height:m}),onWheel:D?null:function(e){e.deltaY<0||e.deltaX<0?G():(e.deltaY>0||e.deltaX>0)&&H()}},I&&n.a.createElement("div",{className:y.dummy,style:{height:"10px",width:"100%",marginBottom:20}}),o.map((function(e,t){return n.a.createElement("div",{key:t,className:g+" "+y["carousel-item"],style:f({},v,{height:m}),ref:function(e){return W.current[t]=e}},e)})),I&&n.a.createElement("div",{className:y.dummy,style:{height:"10px",width:"100%",marginBottom:20}})),!i&&n.a.createElement("div",{className:k+" "+y.tracker,style:S},X))};b.defaultProps={children:[],active:0,onTransitionStart:function(){},onTransitionOver:function(){},onTransitionEnd:function(){},vertical:!1,height:500,disableTracker:!1,disableScroll:!1,delay:3e3,speed:1500,looping:!1,relay:!1,panning:!1,containerClassName:"",containerStyle:{},itemContainerClassName:"",itemContainerStyle:{},className:"",style:{},trackerClassName:"",trackerStyle:{},trackerDotClassName:"",trackerDotStyle:{},trackerDotActiveClassName:"",trackerDotActiveStyle:{}},b.propTypes={children:s.a.arrayOf(s.a.element),active:s.a.number,onTransitionStart:s.a.func,onTransitionOver:s.a.func,onTransitionEnd:s.a.func,height:s.a.oneOfType([s.a.string,s.a.number]),vertical:s.a.bool,disableTracker:s.a.bool,disableScroll:s.a.bool,delay:s.a.number,speed:s.a.number,looping:s.a.bool,relay:s.a.bool,panning:s.a.bool,containerClassName:s.a.string,containerStyle:s.a.object,itemContainerClassName:s.a.string,itemContainerStyle:s.a.object,className:s.a.string,style:s.a.object,trackerClassName:s.a.string,trackerStyle:s.a.object,trackerDotClassName:s.a.string,trackerDotStyle:s.a.object,trackerDotActiveClassName:s.a.string,trackerDotActiveStyle:s.a.object};var p=b;l(20),l(21);var g=()=>{Object(a.useEffect)(()=>{window.scrollTo(0,0)},[]);const e={display:"flex",alignItems:"center",justifyContent:"center",height:"100%",fontSize:"30px"};return n.a.createElement("div",{className:"demo-page"},n.a.createElement("div",{className:"info"},n.a.createElement("h1",{className:"title"},"React Sleek Carousel"),n.a.createElement("a",{href:"https://github.com/ShreyKumar/react-sleek-carousal",target:"_blank",rel:"noopener noreferrer"},"View on Github"),n.a.createElement("h2",null,"Install"),n.a.createElement(m.a,{language:"bash",style:o.a},"npm i sleek-react-carousel"),n.a.createElement("p",{style:{textAlign:"center"}},"or"),n.a.createElement(m.a,{language:"bash",style:o.a},"yarn add sleek-react-carousel"),n.a.createElement("h2",null,"Usage")),n.a.createElement(m.a,{language:"jsx",style:o.a},'\nimport React, { Component } from \'react\'\nimport SleekCarousel from \'sleek-react-carousel\'\nimport \'sleek-react-carousel/dist/index.css\'\n\nconst App = () => {\n    const carouselItemStyle = {\n        display: "flex",\n        alignItems: "center",\n        justifyContent: "center",\n        height: "100%",\n        fontSize: "30px"\n    }\n    return (\n        <SleekCarousel delay={null}>\n            <div style={carouselItemStyle}>Item 1</div>\n            <div style={carouselItemStyle}>Item 2</div>\n            <div style={carouselItemStyle}>Item 3</div>\n        </SleekCarousel>\n    )\n}\n                '),n.a.createElement(p,{delay:null},n.a.createElement("div",{style:e},"Item 1"),n.a.createElement("div",{style:e},"Item 2"),n.a.createElement("div",{style:e},"Item 3")),n.a.createElement("div",{className:"info",style:{marginTop:165}},n.a.createElement("h2",{className:"title"},"Customizability"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Prop name"),n.a.createElement("th",null,"Default Prop"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Info"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"children")),n.a.createElement("td",null,n.a.createElement("code",null,"[]")),n.a.createElement("td",null,"Array of Elements"),n.a.createElement("td",null,"Array of children elements for the component")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"active")),n.a.createElement("td",null,n.a.createElement("code",null,"0")),n.a.createElement("td",null,"Number"),n.a.createElement("td",null,"The index of the element in ",n.a.createElement("code",null,"children")," that will be shown first after the component loads")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"onTransitionStart")),n.a.createElement("td",null,n.a.createElement("code",null,"() => ")),n.a.createElement("td",null,"Function"),n.a.createElement("td",null,"Callback that triggers before a transition between ",n.a.createElement("code",null,"children")," elements begins, the index is provided as a parameter")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"onTransitionOver")),n.a.createElement("td",null,n.a.createElement("code",null,"() => ")),n.a.createElement("td",null,"Function"),n.a.createElement("td",null,"Callback that triggers while a transition between ",n.a.createElement("code",null,"children")," elements occurs")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"onTransitionEnd")),n.a.createElement("td",null,n.a.createElement("code",null,"() => ")),n.a.createElement("td",null,"Function"),n.a.createElement("td",null,"Callback that triggers after a transition between ",n.a.createElement("code",null,"children")," elements happen, the new index is provided as a parameter")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"vertical")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"Boolean"),n.a.createElement("td",null,"Enables the vertical transitions")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"height")),n.a.createElement("td",null,n.a.createElement("code",null,"500")),n.a.createElement("td",null,"String, Number"),n.a.createElement("td",null,"Height of the main Carousel element in ",n.a.createElement("code",null,"px"),", ",n.a.createElement("code",null,"rem"),", ",n.a.createElement("code",null,"em"),", default is ",n.a.createElement("code",null,"px"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"disableTracker")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"Boolean"),n.a.createElement("td",null,"Disables the tracker")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"disableScroll")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"Boolean"),n.a.createElement("td",null,"Disable scrolling")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"delay")),n.a.createElement("td",null,n.a.createElement("code",null,"null")),n.a.createElement("td",null,"Number"),n.a.createElement("td",null,"The time delay in ",n.a.createElement("code",null,"ms")," between transitions")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"speed")),n.a.createElement("td",null,n.a.createElement("code",null,"1500")),n.a.createElement("td",null,"Number"),n.a.createElement("td",null,"The speed in ",n.a.createElement("code",null,"ms")," of transitions")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"looping")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"Boolean"),n.a.createElement("td",null,"Enable carousel of loop back to the start")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"relay")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"Boolean"),n.a.createElement("td",null,'Enable "relaying" back to the start instead of looping back. If both ',n.a.createElement("code",null,"relay")," and ",n.a.createElement("code",null,"looping")," is enabled, the Carousel ignores ",n.a.createElement("code",null,"looping"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"panning")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"Boolean"),n.a.createElement("td",null,"Enable ",n.a.createElement("a",{href:"https://www.framer.com/api/motion/gestures/#pan"},"panning")," to switch between child elements")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"containerClassName")),n.a.createElement("td",null,n.a.createElement("code",null,"''")),n.a.createElement("td",null,"String"),n.a.createElement("td",null,n.a.createElement("code",null,"className")," for the Container of the main element which contains all ",n.a.createElement("code",null,"children")," elements")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"containerStyle")),n.a.createElement("td",null,n.a.createElement("code",null)),n.a.createElement("td",null,"Object"),n.a.createElement("td",null,n.a.createElement("code",null,"style")," for the Container of the main element which contains all ",n.a.createElement("code",null,"children")," elements")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"containerClassName")),n.a.createElement("td",null,n.a.createElement("code",null,"''")),n.a.createElement("td",null,"String"),n.a.createElement("td",null,n.a.createElement("code",null,"className")," for the Container of the main element which contains all ",n.a.createElement("code",null,"children")," elements")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"containerStyle")),n.a.createElement("td",null,n.a.createElement("code",null)),n.a.createElement("td",null,"Object"),n.a.createElement("td",null,n.a.createElement("code",null,"style")," for the Container of the main element which contains all ",n.a.createElement("code",null,"children")," elements")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"containerClassName")),n.a.createElement("td",null,n.a.createElement("code",null,"''")),n.a.createElement("td",null,"String"),n.a.createElement("td",null,n.a.createElement("code",null,"className")," for the main element which contains all ",n.a.createElement("code",null,"children")," elements")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"containerStyle")),n.a.createElement("td",null,n.a.createElement("code",null)),n.a.createElement("td",null,"Object"),n.a.createElement("td",null,n.a.createElement("code",null,"style")," for the main element which contains all ",n.a.createElement("code",null,"children")," elements")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"trackerClassName")),n.a.createElement("td",null,n.a.createElement("code",null,"''")),n.a.createElement("td",null,"String"),n.a.createElement("td",null,n.a.createElement("code",null,"className")," for the tracker element")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"trackerStyle")),n.a.createElement("td",null,n.a.createElement("code",null)),n.a.createElement("td",null,"Object"),n.a.createElement("td",null,n.a.createElement("code",null,"style")," for the tracker element")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"trackerDotClassName")),n.a.createElement("td",null,n.a.createElement("code",null,"''")),n.a.createElement("td",null,"String"),n.a.createElement("td",null,n.a.createElement("code",null,"className")," for the tracker dot element")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"trackerDotStyle")),n.a.createElement("td",null,n.a.createElement("code",null)),n.a.createElement("td",null,"Object"),n.a.createElement("td",null,n.a.createElement("code",null,"style")," for the tracker dot element")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"trackerDotActiveClassName")),n.a.createElement("td",null,n.a.createElement("code",null,"''")),n.a.createElement("td",null,"String"),n.a.createElement("td",null,n.a.createElement("code",null,"className")," for the tracker dot element in the active state")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"trackerDotActiveStyle")),n.a.createElement("td",null,n.a.createElement("code",null)),n.a.createElement("td",null,"Object"),n.a.createElement("td",null,n.a.createElement("code",null,"style")," for the tracker dot element in the active state")))),n.a.createElement("h2",{className:"title"},"Limitations"),n.a.createElement("ul",null,n.a.createElement("li",null,"Mobile responsiveness issues"),n.a.createElement("li",null,"Window scrolling issues")),n.a.createElement("p",{style:{textAlign:"center",marginTop:40}},"Developed by ",n.a.createElement("a",{href:"https://github.com/ShreyKumar",target:"_blank",rel:"noopener noreferrer"},"Shrey Kumar"))))};c.a.render(n.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2e375933.chunk.js.map