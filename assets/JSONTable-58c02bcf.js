var c=Object.defineProperty;var d=(e,t,s)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var r=(e,t,s)=>(d(e,typeof t!="symbol"?t+"":t,s),s);import{d as p,V as v,_ as b,o as _,c as h,a as l,w as f,v as $,t as x,F as m}from"./index-16b03263.js";function y(e){return p((t,s)=>{t.props||(t.props=Object.create(null)),t.props[s]=e})}var V=Object.defineProperty,g=Object.getOwnPropertyDescriptor,w=(e,t,s,i)=>{for(var n=i>1?void 0:i?g(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,s,n):o(n))||n);return i&&n&&V(t,s,n),n};class u extends v{constructor(){super(...arguments);r(this,"data");r(this,"inner","");r(this,"textValue","");r(this,"count","")}mounted(){if(!this.data)return;const s=JSON.parse(this.data);for(var i=0;i<s.length;){var n=s[i];this.inner+=`<div>
                <div class="item">
                    <div class="text">
                        <p class="title">
                            <b>${n.title}</b>
                        </p>
                        <p class="description">${n.description}</p>
                    </div>
                    <div class="buttons">
                        <button class="button1">${n.button1}</button>
                        <button class="button2">${n.button2}</button>
                    </div>
                </div>
            </div>`,i=i+1}this.count=s.length+" items"}keyDown(s){console.log(this.textValue),s=="Enter"&&this.search()}search(){const s=JSON.parse(this.data);var i=0,n=0;for(this.inner="";i<s.length;){var a=s[i];(a.title.includes(this.textValue)||a.description.includes(this.textValue))&&(this.inner+=`
                <div>
                    <div class="item">
                        <div class="text">
                            <p class="title">
                                <b>${a.title}</b>
                            </p>
                            <p class="description">${a.description}</p>
                        </div>
                        <div class="buttons">
                            <button class="button1">${a.button1}</button>
                            <button class="button2">${a.button2}</button>
                        </div>
                    </div>
                </div>`,n++),i++}this.count=n+" items"}}w([y({required:!0})],u.prototype,"data",2);const D=l("div",{class:"placeholder"},null,-1),O=["innerHTML"],N={class:"searchBox"},S={class:"searchbar"},T=["textContent"];function B(e,t,s,i,n,a){return _(),h(m,null,[D,l("div",{innerHTML:e.inner,id:"table",class:"table"},null,8,O),l("div",N,[l("div",S,[f(l("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.textValue=o),onKeypress:t[1]||(t[1]=o=>e.keyDown(o.key)),class:"search"},null,544),[[$,e.textValue]]),l("button",{onClick:t[2]||(t[2]=o=>e.search()),class:"searchButton"},"🔍")]),l("p",{class:"count",textContent:x(e.count)},null,8,T)])],64)}const C=b(u,[["render",B]]);export{C as _};
