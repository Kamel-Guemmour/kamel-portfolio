const translations={en:{available:"● AVAILABLE FOR SELECT PROJECTS",role:"INDEPENDENT DEVELOPER · ALGERIA / WORLDWIDE",headline:"I build digital<br><span>things that work.</span>",intro:"Modern websites and practical software for small businesses and ambitious teams. Clear communication, thoughtful details, and no unnecessary complexity.",start:"Start a project ↗",explore:"Explore my work ↓",meta:"DESIGN-MINDED DEVELOPMENT",servicesTitle:"Practical solutions.<br><span>Thoughtful execution.</span>",service1:"Business websites",service1p:"Responsive websites that explain what you do, build trust and make it easy for customers to reach you.",service2:"Dashboards & tools",service2p:"Practical interfaces for managing information, tracking operations and simplifying everyday work.",service3:"Fixes & improvements",service3p:"Focused help with layout bugs, mobile responsiveness, frontend polish and existing website improvements.",workTitle:"Built with a<br><span>practical mindset.</span>",market:"Point of sale & inventory management",marketp:"A desktop application in development to help small retailers manage products, inventory and sales from one place, with a multilingual interface.",aboutTitle:"Curious by nature.<br><span>Practical by default.</span>",aboutIntro:"I'm Kamel, a computer science student and independent developer based in Algeria.",aboutp:"I enjoy turning messy problems into clear, useful software. I care about interfaces that feel considered, code that's maintainable, and communication that keeps projects moving.",contactTitle:"Let's make<br><span>something useful.</span>",contactp:"Tell me what you're trying to build. I'll get back to you with a few questions and a clear next step.",contactBtn:"Tell me about your project ↗"},fr:{available:"● DISPONIBLE POUR DE NOUVEAUX PROJETS",role:"DÉVELOPPEUR INDÉPENDANT · ALGÉRIE / INTERNATIONAL",headline:"Je crée des solutions<br><span>numériques utiles.</span>",intro:"Des sites web modernes et des logiciels pratiques pour les petites entreprises et les équipes ambitieuses. Une communication claire, des détails soignés et aucune complexité inutile.",start:"Démarrer un projet ↗",explore:"Voir mes projets ↓",meta:"DÉVELOPPEMENT SOIGNÉ",servicesTitle:"Des solutions concrètes.<br><span>Une exécution soignée.</span>",service1:"Sites web professionnels",service1p:"Des sites adaptatifs qui présentent votre activité, inspirent confiance et facilitent le contact avec vos clients.",service2:"Tableaux de bord & outils",service2p:"Des interfaces pratiques pour gérer les informations, suivre les opérations et simplifier le travail quotidien.",service3:"Corrections & améliorations",service3p:"Aide ciblée pour les bugs d'affichage, l'adaptation mobile et l'amélioration de sites existants.",workTitle:"Des projets conçus avec<br><span>un esprit pratique.</span>",market:"Point de vente & gestion de stock",marketp:"Une application de bureau en cours de développement pour aider les petits commerces à gérer produits, stocks et ventes depuis un seul endroit, avec une interface multilingue.",aboutTitle:"Curieux par nature.<br><span>Pragmatique par choix.</span>",aboutIntro:"Je suis Kamel, étudiant en informatique et développeur indépendant basé en Algérie.",aboutp:"J'aime transformer les problèmes complexes en logiciels clairs et utiles. Je privilégie les interfaces soignées, le code maintenable et une communication efficace.",contactTitle:"Créons quelque chose<br><span>qui soit vraiment utile.</span>",contactp:"Expliquez-moi votre projet. Je vous répondrai avec quelques questions et une prochaine étape claire.",contactBtn:"Parlons de votre projet ↗"}};
let language="en";const langButton=document.getElementById("lang");function setLanguage(next){language=next;document.documentElement.lang=next;langButton.textContent=next==="en"?"FR":"EN";document.querySelectorAll("[data-en][data-fr]").forEach(el=>el.textContent=el.dataset[next]);document.querySelectorAll("[data-en-placeholder][data-fr-placeholder]").forEach(el=>el.placeholder=el.dataset[next+"Placeholder"]);const t=translations[next];const ids={"hero .eyebrow":"available",".hero .mono":"role",".hero h1":"headline",".hero .intro":"intro",".hero .actions .primary":"start",".hero .actions .under":"explore",".hero .meta":"meta","#services h2":"servicesTitle","#services article:nth-child(1) h3":"service1","#services article:nth-child(1) p":"service1p","#services article:nth-child(2) h3":"service2","#services article:nth-child(2) p":"service2p","#services article:nth-child(3) h3":"service3","#services article:nth-child(3) p":"service3p","#work h2":"workTitle",".projectcopy .sub":"market",".projectcopy>p:not(.eyebrow):not(.sub)":"marketp","#about h2":"aboutTitle","#about h3":"aboutIntro","#about div:nth-child(2)>p":"aboutp",".contact h2":"contactTitle",".contact .wrap>p:not(.eyebrow)":"contactp","#email":"contactBtn"};Object.entries(ids).forEach(([selector,key])=>{const el=document.querySelector(selector);if(el)el.innerHTML=t[key]});}langButton.addEventListener("click",()=>setLanguage(language==="en"?"fr":"en"));
const contactForm=document.getElementById("contact-form");
const contactStatus=document.getElementById("form-status");
const contactSubmit=document.getElementById("contact-submit");
const formMessages={
en:{sending:"Sending your message…",success:"Thanks! Your message was sent. I'll get back to you soon.",error:"Your message could not be sent. Please try again or contact me by email or WhatsApp."},
fr:{sending:"Envoi de votre message…",success:"Merci ! Votre message a été envoyé. Je vous répondrai bientôt.",error:"Votre message n'a pas pu être envoyé. Réessayez ou contactez-moi par e-mail ou WhatsApp."}
};
contactForm.addEventListener("submit",async(event)=>{
 event.preventDefault();
 if(!contactForm.reportValidity()) return;
 contactStatus.textContent=formMessages[language].sending;
 contactStatus.className="form-status is-pending";
 contactSubmit.disabled=true;
 const originalLabel=contactSubmit.textContent;
 contactSubmit.textContent=language==="en"?"Sending…":"Envoi…";
 try{
  const response=await fetch("https://formsubmit.co/ajax/guemmourkameleddine0@gmail.com",{
   method:"POST",
   headers:{"Content-Type":"application/json","Accept":"application/json"},
   body:JSON.stringify(Object.fromEntries(new FormData(contactForm)))
  });
  const result=await response.json();
  if(String(result.success)!=="true") throw new Error(result.message||"Submission failed");
  contactForm.reset();
  contactStatus.textContent=formMessages[language].success;
  contactStatus.className="form-status is-success";
 }catch(error){
  contactStatus.textContent=formMessages[language].error;
  contactStatus.className="form-status is-error";
 }finally{
  contactSubmit.disabled=false;
  contactSubmit.textContent=originalLabel;
 }
});
document.getElementById("year").textContent=new Date().getFullYear();