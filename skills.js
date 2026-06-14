/* ============================================================
   Tech Stack: data-driven skills with logos, levels,
   hover popovers (descriptor + sub-skills + project link).
   ============================================================ */
(function () {
  const REPO = 'https://github.com/Mathieu-Le-Gouill/';

  // bar length is derived from the level, so it never looks arbitrary
  const LEVELS = { expert: 85, proficient: 65, familiar: 50, learning: 35 };

  // inline fallback icons for skills without a brand logo
  const ICONS = {
    generative: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/><circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none"/></svg>'
  };

  const CARDS = [
    {
      title: 'AI / Machine Learning',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.9.6A3 3 0 0 0 4 11a3 3 0 0 0 1.5 5.6A3 3 0 0 0 12 19m0-14a3 3 0 1 1 5.9.6A3 3 0 0 1 20 11a3 3 0 0 1-1.5 5.6A3 3 0 0 1 12 19m0-14v14"/></svg>',
      skills: [
        { name: 'PyTorch', slug: 'pytorch', level: 'expert',
          desc: 'My primary framework for building & training models.',
          subs: ['nn.Module', 'Autograd', 'DDP', 'CUDA'],
          project: { label: 'Transformer-EN-FR', url: REPO + 'Transformer-EN-FR' } },
        { name: 'Transformers', slug: 'huggingface', level: 'proficient',
          desc: 'Attention architectures implemented from scratch.',
          subs: ['Multi-Head Attention', 'BERT', 'CamemBERT', 'Tokenizers'],
          project: { label: 'Transformer-EN-FR', url: REPO + 'Transformer-EN-FR' } },
        { name: 'LangChain / RAG', slug: 'langchain', level: 'expert',
          desc: 'Retrieval-augmented pipelines over private data.',
          subs: ['LangGraph', 'Langfuse', 'Vector stores', 'Embeddings'],
          project: { label: 'LangChain_RAG', url: REPO + 'LangChain_RAG' } },
        { name: 'Scikit-learn', slug: 'scikitlearn', level: 'proficient',
          desc: 'Classical ML & regression modelling.',
          subs: ['Pipelines', 'Regression', 'Model selection'],
          context: 'Used @ InterDigital' },
        { name: 'Generative Models', icon: 'generative', level: 'proficient',
          desc: 'Autoencoders & latent generative models.',
          subs: ['VQ-VAE', 'β-VAE', 'Diffusion', 'MNIST'],
          project: { label: 'VQ-VAE', url: REPO + 'Vector_Quantized_Variatonal_Autoencoder' } }
      ]
    },
    {
      title: 'Languages & Systems',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
      skills: [
        { name: 'C++', slug: 'cplusplus', level: 'expert',
          desc: 'Modern C++ for high-performance compute.',
          subs: ['C++17', 'Templates', 'RAII', 'STL'],
          project: { label: 'Deep_Library_Cpp', url: REPO + 'Deep_Libray_Cpp' } },
        { name: 'Python', slug: 'python', level: 'expert',
          desc: 'Daily language for ML, tooling & APIs.',
          subs: ['asyncio', 'typing', 'NumPy', 'Pandas'],
          project: { label: 'Mini-Git', url: REPO + 'Mini-Git' } },
        { name: 'SIMD / CUDA', slug: 'nvidia', level: 'familiar',
          desc: 'Low-level vectorisation for CPU & GPU.',
          subs: ['AVX', 'Intrinsics', 'Kernels', 'Cache-aware'],
          project: { label: 'Deep_Library_Cpp', url: REPO + 'Deep_Libray_Cpp' } },
        { name: 'Java / C', slug: 'openjdk', level: 'proficient',
          desc: 'Systems & Android application development.',
          subs: ['Android', 'JNI', 'Embedded'],
          context: 'Used @ InterDigital · Genesys' },
        { name: 'Rust', slug: 'rust', level: 'learning',
          desc: 'Exploring memory-safe systems programming.',
          subs: ['Ownership', 'Cargo', 'OAuth / PKCE'],
          context: 'Currently learning the basics' }
      ]
    },
    {
      title: 'Infrastructure / MLOps',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="6" rx="1.5"/><rect x="2" y="15" width="20" height="6" rx="1.5"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
      skills: [
        { name: 'Docker', slug: 'docker', level: 'proficient',
          desc: 'Containerising models & services.',
          subs: ['Compose', 'Multi-stage builds', 'Images'],
          project: { label: 'LangChain_RAG', url: REPO + 'LangChain_RAG' } },
        { name: 'FastAPI / Flask', slug: 'fastapi', level: 'proficient',
          desc: 'Serving models as clean REST APIs.',
          subs: ['Uvicorn', 'Pydantic', 'REST', 'TOCK'],
          project: { label: 'LangChain_RAG', url: REPO + 'LangChain_RAG' } },
        { name: 'Cloud · GCP / Azure', slug: 'googlecloud', level: 'familiar',
          desc: 'Deploying & evaluating models in the cloud.',
          subs: ['Google Cloud', 'Azure ML', 'Vertex AI'],
          context: 'Used @ Crédit Mutuel Arkéa' },
        { name: 'Git / CMake', slug: 'git', level: 'expert',
          desc: 'Version control & C++ build systems.',
          subs: ['Git', 'CMake', 'Make', 'CI'],
          project: { label: 'Deep_Library_Cpp', url: REPO + 'Deep_Libray_Cpp' } },
        { name: 'Kubernetes / CI', slug: 'kubernetes', level: 'familiar',
          desc: 'Orchestration & continuous delivery.',
          subs: ['K8s', 'Jenkins', 'CI/CD'],
          context: 'Used @ Crédit Mutuel Arkéa' }
      ]
    }
  ];

  const LOGO_TINT = 'e6e9f0';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const lvlLabel = l => l.charAt(0).toUpperCase() + l.slice(1);

  function logoHTML(s) {
    const letter = esc(s.name.replace(/[^A-Za-z]/, '').charAt(0) || '#');
    if (s.icon && ICONS[s.icon]) {
      return `<span class="sk-logo svg-logo">${ICONS[s.icon]}</span>`;
    }
    const src = `https://cdn.simpleicons.org/${s.slug}/${LOGO_TINT}`;
    // monogram shows by default; the brand logo replaces it only once it
    // actually loads, so we degrade gracefully offline / when blocked.
    return `<span class="sk-logo">` +
      `<span class="mono">${letter}</span>` +
      `<img src="${src}" alt="" loading="lazy" draggable="false" ` +
      `onload="this.closest('.sk-logo').classList.add('imgok')">` +
      `</span>`;
  }

  function rowHTML(s, idx) {
    const w = LEVELS[s.level];
    const subs = (s.subs || []).map(t => `<span>${esc(t)}</span>`).join('');
    const tail = s.project
      ? `<span class="pop-proj">View project · ${esc(s.project.label)}
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg></span>`
      : `<span class="pop-ctx">${esc(s.context || '')}</span>`;
    const inner = `
        <div class="sk-main">
          ${logoHTML(s)}
          <span class="sk-name">${esc(s.name)}</span>
          <span class="sk-level">${lvlLabel(s.level)}</span>
        </div>
        <div class="skill-track"><div class="skill-fill" data-w="${w}" style="width:${w}%"></div></div>
        <div class="popover" role="tooltip">
          <p class="pop-desc">${esc(s.desc)}</p>
          <div class="pop-subs">${subs}</div>
          ${tail}
        </div>`;
    // whole row is the link when there's a project, so the popover can be a
    // pure (pointer-transparent) hover hint that never blocks vertical movement
    if (s.project) {
      return `<a class="skill-row has-link lvl-${s.level}" href="${s.project.url}" target="_blank" rel="noopener">${inner}</a>`;
    }
    return `<div class="skill-row lvl-${s.level}" tabindex="0">${inner}</div>`;
  }

  function cardHTML(card, ci) {
    const rows = card.skills.map(rowHTML).join('');
    const delay = ci === 0 ? '' : ci === 1 ? ' d2' : ' d3';
    return `
      <div class="skill-card reveal${delay}">
        <div class="head">
          <span class="ic">${card.icon}</span>
          <h3>${esc(card.title)}</h3>
        </div>
        <div class="skill-rows">${rows}</div>
      </div>`;
  }

  const grid = document.getElementById('skillsGrid');
  if (grid) grid.innerHTML = CARDS.map(cardHTML).join('');
})();
