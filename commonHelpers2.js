import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as l}from"./assets/vendor-77e16229.js";function c(t,n){return new Promise((i,s)=>{setTimeout(n==="fulfilled"?()=>i(t):()=>s(t),t)})}const r=document.querySelector(".form");r.addEventListener("submit",function(t){t.preventDefault();const n=parseInt(this.elements.delay.value),i=this.elements.state,s=document.querySelector('input[name="state"]:checked'),o=s?s.value:"fulfilled";for(let e=0;e<i.length;e++)if(i[e].checked){o=i[e].value;break}o===void 0&&(o="fulfilled"),c(n,o).then(e=>{l.success({title:"Fulfilled",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{l.error({title:"Rejected",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
