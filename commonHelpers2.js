import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as n}from"./assets/vendor-77e16229.js";function r(t,o){return new Promise((i,s)=>{setTimeout(o==="fulfilled"?()=>i(t):()=>s(t),t)})}const l=document.querySelector(".form");l.addEventListener("submit",function(t){t.preventDefault();const o=parseInt(this.elements.delay.value);let i;const s=this.elements.state;for(let e=0;e<s.length;e++)if(s[e].checked){i=s[e].value;break}i===void 0&&(i="fulfilled"),r(o,i).then(e=>{n.success({title:"Fulfilled",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{n.error({title:"Rejected",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
