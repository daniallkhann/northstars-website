const menu=document.querySelector(".menu"),nav=document.querySelector(".site-header nav");
if(menu&&nav){menu.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));}

const cards=[...document.querySelectorAll("#categoryGrid article")];
const search=document.querySelector("#categorySearch");
let filter="all";
function apply(){
  if(!search) return;
  const q=search.value.toLowerCase().trim();
  cards.forEach(c=>{const tags=c.dataset.tags||"";const matchFilter=filter==="all"||tags.includes(filter);const matchSearch=!q||c.innerText.toLowerCase().includes(q);c.style.display=matchFilter&&matchSearch?"":"none";});
}
if(search){search.addEventListener("input",apply);document.querySelectorAll(".filters button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");filter=b.dataset.filter;apply();}));}

const form=document.querySelector("#contactForm");
if(form){form.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#formNote").textContent="The form design is ready. Connect this form to your email/form service before publishing to receive submissions.";});}
