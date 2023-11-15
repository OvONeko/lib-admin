var d=Object.defineProperty;var p=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var u=(t,e,n)=>(p(t,typeof e!="symbol"?e+"":e,n),n);import{d as v,V as h,_ as b,o as f,c as _,a as o,w as g,v as $,t as w,F as x}from"./index-222a226d.js";function m(t){return v((e,n)=>{e.props||(e.props=Object.create(null)),e.props[n]=t})}var V=Object.defineProperty,D=Object.getOwnPropertyDescriptor,T=(t,e,n,i)=>{for(var s=i>1?void 0:i?D(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&V(e,n,s),s};class r extends h{constructor(){super(...arguments);u(this,"data");u(this,"inner","");u(this,"textValue","");u(this,"count","")}mounted(){if(!this.data)return;const n=JSON.parse(this.data);for(var i=0;i<n.length;){var s=n[i];this.inner+=`<div>
                <div class="item">
                    <div class="text">
                        <p class="title">
                            <b>${s.title}</b>
                        </p>
                        <p class="description">${s.description}</p>
                    </div>
                    <div class="buttons">
                        <button class="button1">${s.button1}</button>
                        <button class="button2">${s.button2}</button>
                    </div>
                </div>
            </div>`,i=i+1}this.count=n.length+" items"}keyDown(n){console.log(this.textValue),n=="Enter"&&this.search()}search(){const n=JSON.parse(this.data);var i=0,s=0;for(this.inner="";i<n.length;){var l=n[i];(l.title.includes(this.textValue)||l.description.includes(this.textValue))&&(this.inner+=`
                <div>
                    <div class="item">
                        <div class="text">
                            <p class="title">
                                <b>${l.title}</b>
                            </p>
                            <p class="description">${l.description}</p>
                        </div>
                        <div class="buttons">
                            <button class="button1">${l.button1}</button>
                            <button class="button2">${l.button2}</button>
                        </div>
                    </div>
                </div>`,s++),i++}this.count=s+" items"}}T([m({required:!0})],r.prototype,"data",2);const O=o("div",{class:"placeholder"},null,-1),j=["innerHTML"],J={class:"searchBox"},N={class:"searchbar"},S=["textContent"];function B(t,e,n,i,s,l){return f(),_(x,null,[O,o("div",{innerHTML:t.inner,id:"table",class:"table"},null,8,j),o("div",J,[o("div",N,[g(o("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.textValue=a),onKeypress:e[1]||(e[1]=a=>t.keyDown(a.key)),class:"search"},null,544),[[$,t.textValue]]),o("button",{onClick:e[2]||(e[2]=a=>t.search()),class:"searchButton"},"🔍")]),o("p",{class:"count",textContent:w(t.count)},null,8,S)])],64)}const U=b(r,[["render",B]]);function P(t){var e=[];if(t.length===0)return"";if(typeof t[0]!="string")throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<t.length;i++){var s=t[i];if(typeof s!="string")throw new TypeError("Url must be a string. Received "+s);s!==""&&(i>0&&(s=s.replace(/^[\/]+/,"")),i<t.length-1?s=s.replace(/[\/]+$/,""):s=s.replace(/[\/]+$/,"/"),e.push(s))}var l=e.join("/");l=l.replace(/\/(\?|&|#[^!])/g,"$1");var a=l.split("?");return l=a.shift()+(a.length>0?"?":"")+a.join("&"),l}function c(){var t;return typeof arguments[0]=="object"?t=arguments[0]:t=[].slice.call(arguments),P(t)}const C="http://127.0.0.1:8086",E=c(C,"data");function k(t){var e=new XMLHttpRequest;return e.open("get",c(E,t),!1),e.send(),e.responseText}export{U as _,k as g};
