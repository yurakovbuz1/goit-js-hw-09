import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n="feedback-form-state",l=document.querySelector(".feedback-form"),a=l.querySelector("input"),r=l.querySelector("textarea");r.addEventListener("input",m);a.addEventListener("input",i);l.addEventListener("click",u);let t={};s();function s(){const e=JSON.parse(localStorage.getItem(n));e&&(t.email=e.email,a.value=e.email,t.message=e.message,r.textContent=e.message)}function i(e){if(e.target.nodeName!=="INPUT")return;const o=e.target.value;t.email=o,localStorage.setItem(n,JSON.stringify(t))}function m(e){if(e.target.nodeName!=="TEXTAREA")return;const o=e.target.value;t.message=o,localStorage.setItem(n,JSON.stringify(t))}function u(e){e.preventDefault(),e.target.nodeName==="BUTTON"&&(a.value===""?alert("Please, fill in your name."):r.value===""?alert("Don't forget to leave your message!"):(console.log(JSON.parse(localStorage.getItem(n))),r.value="",a.value="",localStorage.clear(),t.email="",t.message=""))}
//# sourceMappingURL=commonHelpers2.js.map
