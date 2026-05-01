// Initialize icons
if (window.lucide) {
    lucide.createIcons();
}

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    themeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Expanded Social Proof Engine (Unique Data)
const proofData = [
    { name: "Carlos M.", text: "Pasé de no saber cómo empezar a tener mi eBook de Nutrición listo en una tarde. La IA de mercado es increíble.", role: "Influencer de Fitness" },
    { name: "Sofía R.", text: "La portada que generó el Creative Director capturó exactamente el minimalismo que buscaba.", role: "Escritora Independiente" },
    { name: "Marcos L.", text: "El análisis de ROI de los agentes de anuncios me ayudó a lanzar mi preventa con éxito total.", role: "Consultor de Marketing" },
    { name: "Elena P.", text: "Ahorré meses de procrastinación. Ver a los agentes trabajar en tiempo real te da una claridad inmensa.", role: "Especialista en Yoga" },
    { name: "David J.", text: "El contenido no es genérico, se siente táctico y aterrizado. ¡Recomendado!", role: "Emprendedor Tech" },
    { name: "Lucía F.", text: "InstaEbook me devolvió las ganas de crear. Es como tener un equipo de 14 genios a mi servicio.", role: "Coach de Vida" },
    { name: "Julieta G.", text: "Increíble cómo detecta los dolores de mi audiencia. El eBook se siente escrito por un experto.", role: "Agente Inmobiliaria" },
    { name: "Tomás H.", text: "Probé otras IAs, pero esta orquestación de agentes es lo que realmente marca la diferencia.", role: "Growth Hacker" },
    { name: "Valeria O.", text: "El 'Step-by-step' es tan claro que cualquier persona puede lanzar su producto digital hoy.", role: "Creadora de Contenido" },
    { name: "Roberto B.", text: "La sección de video testimonios me convenció. Es una herramienta de nivel profesional.", role: "Dueño de Agencia" },
    { name: "Ana S.", text: "Encontré un nicho que no sabía que existía gracias a la validación de mercado. ¡Oro puro!", role: "Asesora de Imagen" },
    { name: "Pedro X.", text: "La velocidad de ejecución es absurda. En 10 minutos tenía el índice y 3 capítulos listos.", role: "Copywriter" }
];

function generateSocialProofs(count) {
    const grid = document.getElementById('social-proof-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // Take unique items based on data available
    const itemsToShow = Math.min(count, proofData.length);
    
    for (let i = 0; i < itemsToShow; i++) {
        const item = proofData[i];
        const card = document.createElement('div');
        card.className = "card-premium hover:scale-[1.02] transform transition-all duration-300";
        card.innerHTML = `
            <div class="flex items-center gap-1 text-[#BEFF3D] mb-4">
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
            </div>
            <p class="text-slate-600 dark:text-slate-400 italic mb-6">"${item.text}"</p>
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500">${item.name[0]}</div>
                <div>
                    <h4 class="font-bold text-sm leading-none">${item.name}</h4>
                    <span class="text-xs text-slate-500">${item.role}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    }
    if (window.lucide) lucide.createIcons();
}

let currentLimit = 6;
window.loadMoreProofs = function() {
    currentLimit += 6;
    generateSocialProofs(currentLimit);
}

// Visual Orchestration Start
window.startProcess = function() {
    const ideaInput = document.getElementById('ebook-idea').value;
    if(!ideaInput) {
        alert('¡Por favor, ingresa una idea primero!');
        return;
    }

    const viewer = document.getElementById('process-viewer');
    viewer.classList.remove('hidden');
    viewer.scrollIntoView({ behavior: 'smooth' });

    const agentName = document.getElementById('agent-name');
    const agentLog = document.getElementById('agent-log');
    const loadingBar = document.getElementById('loading-bar');
    
    const steps = [
        { name: "Analista de Mercado", log: "Buscando tendencias para '" + ideaInput + "'...", progress: 25 },
        { name: "CEO de Agencia", log: "Definiendo estrategia rentable de monetización...", progress: 50 },
        { name: "Director Creativo", log: "Diseñando portadas premium en Neon Green...", progress: 75 },
        { name: "Arquitecto del eBook", log: "Estructurando y redactando los 10 capítulos definitivos...", progress: 100 }
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
        const s = steps[stepIndex];
        agentName.innerText = s.name;
        agentLog.innerText = s.log;
        loadingBar.style.width = s.progress + '%';
        
        document.querySelectorAll('.agent-step').forEach(el => el.style.opacity = '0.3');
        const currentStepEl = document.querySelector(`[data-step="${stepIndex+1}"]`);
        if (currentStepEl) currentStepEl.style.opacity = '1';

        stepIndex++;
        if(stepIndex === steps.length) {
            clearInterval(interval);
            setTimeout(() => {
                agentName.innerText = "¡Agencia Completada!";
                agentLog.innerText = "Tu eBook está listo. Descarga los activos y empieza a vender.";
                if (window.lucide) lucide.createIcons();
            }, 600);
        }
    }, 3000);
}

// Initial renders
document.addEventListener('DOMContentLoaded', () => {
    generateSocialProofs(6);

    // Parallax & Scroll Blur Logic
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Section 01: Mobile & Backend
        const bg1 = document.getElementById('parallax-bg-1');
        const blur1 = document.getElementById('parallax-blur-1');
        if (bg1 && blur1) {
            const section1 = bg1.parentElement;
            const sectionTop = section1.offsetTop;
            const sectionHeight = section1.offsetHeight;
            
            // Check if section is in viewport
            if (scrollY > sectionTop - windowHeight && scrollY < sectionTop + sectionHeight) {
                // Parallax shift (Aggressive)
                const offset = (scrollY - sectionTop) * 0.4;
                bg1.style.transform = `translateY(${offset}px)`;
                
                // Progressive Blur (Immediate trigger)
                // Maps 100px of scroll into ~10px of blur immediately
                const scrollOffsetInSection = scrollY - (sectionTop - windowHeight);
                const blurVal = Math.min(25, scrollOffsetInSection * 0.08); // High sensitivity
                blur1.style.backdropFilter = `blur(${blurVal}px)`;
                blur1.style.webkitBackdropFilter = `blur(${blurVal}px)`; 
            }
        }

        // Section 02: Results Dashboard
        const bg2 = document.getElementById('parallax-bg-2');
        if (bg2) {
            const section2 = bg2.parentElement;
            const sectionTop2 = section2.offsetTop;
            if (scrollY > sectionTop2 - windowHeight) {
                const offset2 = (scrollY - sectionTop2) * 0.2;
                bg2.style.transform = `translateY(${offset2}px)`;
            }
        }
    });

    // Story Progress Animation Simulation
    const progressEl = document.getElementById('story-progress');
    if (progressEl) {
        let width = 0;
        setInterval(() => {
            width += 0.5;
            if (width > 100) width = 0;
            progressEl.style.width = width + '%';
        }, 30)
    }
});
