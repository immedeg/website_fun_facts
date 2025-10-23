import"./style-BDVQlFHl.js";document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("loadRandomFact"),e=document.getElementById("fact-container");o.addEventListener("click",t);async function t(){try{e.innerHTML="<p>Загрузка...</p>";const n=await fetch("https://uselessfacts.jsph.pl/random.json?language=en");if(!n.ok)throw new Error("Ошибка загрузки факта");const c=await n.json();s(c)}catch(n){e.innerHTML=`<p class="error">Ошибка: ${n.message}</p>`}}function s(n){if(!n.text){e.innerHTML="<p>Факт не найден</p>";return}e.innerHTML=`
            <div class="fact-card">
                <p>${n.text}</p>
                ${n.source?`<p class="source">Источник: ${n.source}</p>`:""}
            </div>
        `}t()});
