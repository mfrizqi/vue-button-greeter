(function(n){"use strict";const l=(e,o)=>{const t=e.__vccOpts||e;for(const[r,s]of o)t[r]=s;return t},i={props:{message:{type:String,default:"Hello from Greeter!"},buttonText:{type:String,default:"Click Me"},outputSelector:{type:String,default:""}},methods:{handleClick(){if(this.outputSelector){const e=document.querySelector(this.outputSelector);e&&(e.innerText=this.message,alert(this.message))}else console.log(this.message),alert(this.message)}}},a={class:"greeter-container"};function u(e,o,t,r,s,c){return n.openBlock(),n.createElementBlock("div",a,[n.createElementVNode("button",{onClick:o[0]||(o[0]=(...p)=>c.handleClick&&c.handleClick(...p))},n.toDisplayString(t.buttonText),1)])}const d=l(i,[["render",u],["__scopeId","data-v-c2197d0d"]]);window.Greeter={init(e,o){const t=document.querySelector(e);t?n.createApp(d,o).mount(t):console.error("Element not found:",e)}}})(Vue);
