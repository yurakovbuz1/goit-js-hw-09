import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n="feedback-form-state",l=document.querySelector(".feedback-form"),t=l.querySelector("input"),a=l.querySelector("textarea");a.addEventListener("input",u);t.addEventListener("input",i);l.addEventListener("click",c);s();let r={};function s(){const e=JSON.parse(localStorage.getItem(n));e&&(t.value=e.email,a.textContent=e.message)}function i(e){if(e.target.nodeName!=="INPUT")return;const o=e.target.value;r.email=o,localStorage.setItem(n,JSON.stringify(r))}function u(e){if(e.target.nodeName!=="TEXTAREA")return;const o=e.target.value;r.message=o,localStorage.setItem(n,JSON.stringify(r))}function c(e){e.preventDefault(),e.target.nodeName==="BUTTON"&&(e.preventDefault(),t.value===""?alert("Please, fill in your name."):a.value===""?alert("Don't forget to leave your message!"):(console.log(JSON.parse(localStorage.getItem(n))),a.value="",t.value="",localStorage.clear()))}
//# sourceMappingURL=commonHelpers2.js.map
