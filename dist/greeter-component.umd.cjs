(function(e,s){typeof exports=="object"&&typeof module<"u"?s(require("vue")):typeof define=="function"&&define.amd?define(["vue"],s):(e=typeof globalThis<"u"?globalThis:e||self,s(e.Vue))})(this,function(e){"use strict";const s=(t,o)=>{const n=t.__vccOpts||t;for(const[r,i]of o)n[r]=i;return n},l={props:{message:{type:String,default:"Hello from Greeter!"},buttonText:{type:String,default:"Click Me"},outputSelector:{type:String,default:""}},methods:{handleClick(){if(this.outputSelector){const t=document.querySelector(this.outputSelector);t&&(t.innerText=this.message,alert(this.message))}else console.log(this.message),alert(this.message)}}},u={class:"greeter-container"};function d(t,o,n,r,i,c){return e.openBlock(),e.createElementBlock("div",u,[e.createElementVNode("button",{onClick:o[0]||(o[0]=(...p)=>c.handleClick&&c.handleClick(...p))},e.toDisplayString(n.buttonText),1)])}const a=s(l,[["render",d],["__scopeId","data-v-c8ce1d58"]]);window.Greeter={init(t,o){const n=document.querySelector(t);n?e.createApp(a,o).mount(n):console.error("Element not found:",t)}}});
