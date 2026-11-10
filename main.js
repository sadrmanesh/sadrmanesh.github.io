(function () {
  "use strict";

  var I18N = {
    en: {
      skip: "Skip to content",
      name: "Naser Sadrmanesh",
      langSwitch: "فا",
      "nav.about": "About", "nav.focus": "Focus", "nav.stack": "Stack", "nav.connect": "Connect", "nav.writing": "Writing", "writing.title": "Writing", "writing.sub": "Notes on building AI products for commerce.",
      eyebrow: "Building in public",
      role: "AI Product Engineer · Founder · Open-Source Builder",
      tagline: "Turning AI into products people actually use.",
      "cta.linkedin": "Connect on LinkedIn", "cta.github": "GitHub", "cta.all": "All channels",
      "about.title": "About",
      "about.p1": "I'm Naser Sadrmanesh (Mohammad Naser Sadrmanesh), an AI product engineer and founder who takes AI from idea to production. I work where models meet real users: shaping the product, designing the system, and shipping software that people rely on every day.",
      "about.p2": "AI should be judged by the problems it solves, not by the demo it makes.",
      "focus.title": "What I focus on",
      "focus.c1.t": "AI & LLM products", "focus.c1.d": "Turning large language models into reliable, shipped products with clear user value.",
      "focus.c2.t": "Agentic workflows & developer tooling", "focus.c2.d": "Agents, skills, rules and context systems that make engineers and teams faster.",
      "focus.c3.t": "Strategy to production", "focus.c3.d": "From product discovery and roadmap to architecture, launch and iteration.",
      "focus.c4.t": "E-commerce & marketplaces", "focus.c4.d": "Search, discovery and recommendation for buyers and sellers.",
      "focus.c5.t": "Tech leadership & digital transformation", "focus.c5.d": "Helping teams and businesses adopt AI in ways that last.",
      "focus.c6.t": "Open source", "focus.c6.d": "Building in public and sharing the tools behind the products.",
      "nav.projects": "Projects", "cta.projects": "Open source",
      "projects.title": "Open source",
      "projects.sub": "Production-grade building blocks for AI-powered commerce, built in the open.",
      "projects.repo": "Repository", "projects.docs": "Documentation", "projects.demo": "Demo", "projects.dataset": "Dataset", "projects.article": "Read the write-up", "projects.store": "Chrome Web Store", "projects.website": "Website", "projects.ext.title": "Browser extensions", "projects.ext.sub": "Published Chrome extensions for translation, DNS, and classifieds search.",
      "stack.hint": "Highlighted items link to the open-source project that uses them.",
      "stack.tip": "Used in {p}",
      "stack.title": "Tech stack",
      "connect.title": "Connect",
      "connect.sub": "Open to conversations about AI products, collaboration and open source.",
      building: "More projects on the way. Building in public.",
      langLabel: "Switch to Persian", themeLabel: "Toggle light or dark theme",
      docTitle: "Naser Sadrmanesh (ناصر صدرمنش) · AI Product Engineer"
    },
    fa: {
      skip: "رفتن به محتوا",
      name: "ناصر صدرمنش",
      langSwitch: "EN",
      "nav.about": "درباره", "nav.focus": "تمرکز", "nav.stack": "فناوری", "nav.connect": "ارتباط", "nav.writing": "نوشته ها", "writing.title": "نوشته ها", "writing.sub": "یادداشت هایی درباره ساخت محصولات هوش مصنوعی برای تجارت.",
      eyebrow: "ساختن در فضای عمومی",
      role: "مهندس محصول هوش مصنوعی و کارآفرین",
      tagline: "تبدیل هوش مصنوعی به محصولاتی که مردم واقعا از آنها استفاده می کنند.",
      "cta.linkedin": "ارتباط در لینکدین", "cta.github": "گیت هاب", "cta.all": "همه راه های ارتباط",
      "about.title": "درباره من",
      "about.p1": "ناصر صدرمنش (محمد ناصر صدرمنش) هستم، مهندس محصول هوش مصنوعی و کارآفرین. هوش مصنوعی را از ایده تا محصول نهایی پیش می برم و جایی کار می کنم که مدل ها به کاربران واقعی می رسند: شکل دادن به محصول، طراحی سیستم و عرضه نرم افزاری که مردم هر روز به آن تکیه می کنند.",
      "about.p2": "ارزش هوش مصنوعی را باید با مسائلی سنجید که حل می کند، نه با دمویی که نشان می دهد.",
      "focus.title": "حوزه های تمرکز",
      "focus.c1.t": "محصولات هوش مصنوعی و LLM", "focus.c1.d": "تبدیل مدل های زبانی بزرگ به محصولاتی پایدار و منتشرشده، با ارزشی روشن برای کاربر.",
      "focus.c2.t": "گردش کار عامل محور و ابزارهای توسعه", "focus.c2.d": "عامل ها، مهارت ها، قواعد و سیستم های زمینه که مهندسان و تیم ها را سریع تر می کنند.",
      "focus.c3.t": "از استراتژی تا محصول", "focus.c3.d": "از کشف محصول و نقشه راه تا معماری، عرضه و بهبود مداوم.",
      "focus.c4.t": "تجارت الکترونیک و بازارها", "focus.c4.d": "جستجو، کشف و پیشنهاد برای خریداران و فروشندگان.",
      "focus.c5.t": "رهبری فنی و تحول دیجیتال", "focus.c5.d": "کمک به تیم ها و کسب و کارها برای به کارگیری ماندگار هوش مصنوعی.",
      "focus.c6.t": "متن باز", "focus.c6.d": "ساختن در فضای عمومی و به اشتراک گذاشتن ابزارهای پشت محصولات.",
      "nav.projects": "پروژه ها",
      "cta.projects": "پروژه های متن باز",
      "projects.title": "پروژه های متن باز",
      "projects.sub": "اجزای آماده تولید برای تجارت مبتنی بر هوش مصنوعی، ساخته شده در فضای عمومی.",
      "projects.repo": "مخزن",
      "projects.docs": "مستندات", "projects.demo": "نسخه نمایشی", "projects.dataset": "مجموعه داده", "projects.article": "خواندن مقاله",
      "projects.store": "Chrome Web Store", "projects.website": "وب‌سایت",
      "projects.ext.title": "افزونه‌های مرورگر", "projects.ext.sub": "افزونه‌های منتشرشدهٔ کروم برای ترجمه، DNS و جستجوی آگهی.",
      "stack.hint": "موارد برجسته به پروژه متن بازی پیوند دارند که از آن ها استفاده می کند.",
      "stack.tip": "به کار رفته در {p}",
      "stack.title": "فناوری ها",
      "connect.title": "ارتباط",
      "connect.sub": "برای گفتگو درباره محصولات هوش مصنوعی، همکاری و پروژه های متن باز در دسترسم.",
      building: "پروژه های بیشتر در راه است. در حال ساختن در فضای عمومی.",
      langLabel: "Switch to English", themeLabel: "تغییر حالت روشن و تیره",
      docTitle: "ناصر صدرمنش، مهندس محصول هوش مصنوعی"
    }
  };

  var STACK = [
    { en: "AI & LLMs", fa: "هوش مصنوعی و مدل های زبانی", items: ["OpenAI", "Anthropic", "Gemini", "Llama", "Mistral", "Hugging Face Transformers", "Ollama", "vLLM"] },
    { en: "Agents & orchestration", fa: "عامل ها و هماهنگ سازی", items: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI", "AutoGen", "OpenAI Agents SDK", "MCP (Model Context Protocol)"] },
    { en: "RAG & retrieval", fa: "RAG و بازیابی", items: ["Embeddings", "Pinecone", "Weaviate", "Qdrant", "Chroma", "pgvector", "Rerankers", "Elasticsearch", "Algolia"] },
    { en: "ML & evaluation", fa: "یادگیری ماشین و ارزیابی", items: ["PyTorch", "scikit-learn", "Fine-tuning (LoRA)", "LLM evals", "Prompt & context engineering", "Guardrails"] },
    { en: "AI developer tools", fa: "ابزارهای توسعه هوش مصنوعی", items: ["AI coding agents", "Agent skills & rules", "Prompt tooling", "LangSmith", "Langfuse"] },
    { en: "Languages", fa: "زبان ها", items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL"] },
    { en: "Backend & APIs", fa: "بک اند و API", items: ["Node.js", "FastAPI", "Laravel", "REST", "GraphQL", "WebSockets"] },
    { en: "Frontend", fa: "فرانت اند", items: ["React", "Next.js", "Tailwind CSS"] },
    { en: "Data", fa: "داده", items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"] },
    { en: "E-commerce", fa: "تجارت الکترونیک", items: ["WooCommerce", "WordPress", "Payment integrations", "Marketplace search & recommendations"] },
    { en: "Cloud & delivery", fa: "ابر و استقرار", items: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "AWS", "Linux", "Nginx"] }
  ];

  var PROJECTS = [
    { id: "commerce-agent-skills", article: "https://dev.to/sadrmanesh/treat-agent-skills-like-code-evals-a-strict-validator-and-an-npx-installer-for-commerce-skills-13dk", lang: "Markdown \u00b7 Node.js", icon: "skills", ver: "v0.3.3", demo: "https://huggingface.co/datasets/sadrmanesh/commerce-agent-skills", demoLabel: "projects.dataset", install: "npx @sadrmanesh/commerce-agent-skills init", en: "Twenty-nine Agent Skills, each with a matching rule, that help AI coding agents build e-commerce and marketplace products: WooCommerce, Shopify, Stripe and Iranian gateways, inventory, search and RTL.", fa: "بیست و نه مهارت عامل، هر کدام با یک قاعده متناظر، که به عامل های کدنویسی هوش مصنوعی کمک می کنند محصولات فروشگاهی و بازارگاهی بسازند: ووکامرس، شاپیفای، Stripe و درگاه های ایرانی، موجودی انبار، جستجو و راست به چپ.", tags: ["Agent Skills", "Prompt engineering", "WooCommerce", "Shopify", "Payments", "RTL"] },
    { id: "woocommerce-mcp", article: "https://dev.to/sadrmanesh/safe-write-tools-for-agents-preview-confirm-audit-and-stale-previews-in-a-woocommerce-mcp-server-2c66", lang: "TypeScript", icon: "mcp", ver: "v0.6.0", demo: "https://huggingface.co/spaces/sadrmanesh/woocommerce-mcp-explorer", listings: [["Glama", "https://glama.ai/mcp/servers/sadrmanesh/woocommerce-mcp"], ["mcpservers.org", "https://mcpservers.org/servers/sadrmanesh/woocommerce-mcp"]], install: ["npx -y @sadrmanesh/woocommerce-mcp", "docker pull ghcr.io/sadrmanesh/woocommerce-mcp"], en: "Model Context Protocol server for WooCommerce with 47 tools: multi-store, previewed safe writes with stale-preview detection and optional signed approvals, customers, coupons, fulfillment, webhooks and sales analytics, over stdio or secured HTTP. Listed on the official MCP Registry, Glama and mcpservers.org.", fa: "سرور Model Context Protocol برای ووکامرس با ۴۷ ابزار: چند فروشگاه، تغییرات امن با پیش نمایش، تشخیص پیش نمایش کهنه و تایید امضا شده اختیاری، مشتریان، کوپن ها، ارسال سفارش، وب هوک ها و تحلیل فروش، روی stdio یا HTTP امن. ثبت شده در MCP Registry رسمی، Glama و mcpservers.org.", tags: ["MCP", "TypeScript", "Node.js", "WooCommerce", "OAuth 2.0", "Docker", "MCP Registry"] },
    { id: "persian-rag", article: "https://dev.to/sadrmanesh/why-rag-breaks-on-persian-text-and-what-i-built-to-fix-it-normalization-half-spaces-spelling-2jgm", lang: "Python", icon: "rag", ver: "v0.5.0", demo: "https://huggingface.co/spaces/sadrmanesh/persian-rag-demo", install: ["pip install persian-rag", "docker pull ghcr.io/sadrmanesh/persian-rag"], en: "Persian-first RAG toolkit: Farsi normalization, multilingual-e5 embeddings with automatic E5 prefixes, web, PDF and Word loading, hybrid retrieval on Elasticsearch or OpenSearch, Persian query rewriting, cited answers, chat memory and a Persian benchmark.", fa: "جعبه ابزار پایتون برای RAG فارسی: یکدست سازی متن فارسی، بردارسازی با multilingual-e5 و پیشوندهای خودکار E5، خواندن وب، PDF و Word، بازیابی ترکیبی روی Elasticsearch یا OpenSearch، بازنویسی پرسش فارسی، پاسخ با ارجاع به منبع، حافظه گفتگو و محک فارسی.", tags: ["RAG", "Embeddings", "OpenSearch", "pgvector", "FastAPI", "Rerankers", "Docker"] },
    { id: "llm-search-eval", article: "https://dev.to/sadrmanesh/is-your-new-search-actually-better-label-gaps-llm-judge-panels-and-paired-statistics-for-offline-490p", lang: "Python", icon: "eval", ver: "v0.5.0", demo: "https://huggingface.co/spaces/sadrmanesh/llm-search-eval-demo", install: ["pip install llm-search-eval", "docker pull sadrmanesh/llm-search-eval"], en: "Evaluates e-commerce search with IR metrics and LLM judge panels: pairwise judging, bootstrap confidence intervals, cost estimates, sampling, an HTML dashboard and a CI gate that comments on pull requests.", fa: "سنجش کیفیت جستجوی فروشگاهی با معیارهای بازیابی اطلاعات و هیئت داوران مدل زبانی: داوری دوبه دو، بازه اطمینان بوت استرپ، برآورد هزینه، نمونه گیری، داشبورد HTML و دروازه کیفیت در CI که روی Pull Request نظر می گذارد.", tags: ["LLM-as-judge", "nDCG", "Elasticsearch", "Meilisearch", "GitHub Actions", "Python"] }
  ];

  var EXTENSIONS = [
    { id: "ziman-ai", lang: "JavaScript \u00b7 Manifest V3", icon: "ziman", ver: "v1.2.3", store: "https://chromewebstore.google.com/detail/ziman-ai-kurdish-translat/cjmmnobnimheoeeojobgfkgbdbohcjkn", en: "Kurdish (Sorani and Kurmanji) and multilingual translator for Chrome, with an offline phrasebook and optional AI translation using your own AIML API key.", fa: "زمان، افزونهٔ کروم برای ترجمهٔ کردی سورانی و کرمانجی و چند زبان دیگر، با واژه‌نامهٔ آفلاین و ترجمهٔ اختیاری با کلید AIML خودتان.", tags: ["Chrome", "Manifest V3", "Kurdish", "Translation"] },
    { id: "chrome-dns-manager", lang: "JavaScript \u00b7 Manifest V3", icon: "dns", ver: "v1.5.0", store: "https://chromewebstore.google.com/detail/dns-configuration-manager/opoejijmagmdeeobilcpjnllpmoklnlk", en: "Organizes DNS profiles and DNS-over-HTTPS templates for manual Chrome Secure DNS setup. Browse built-in providers, save custom profiles, and copy the details; it does not change Chrome or system DNS itself.", fa: "پروفایل‌های DNS و قالب‌های DNS-over-HTTPS را برای تنظیم دستی Secure DNS در کروم سازماندهی می‌کند. ارائه‌دهنده‌های آماده را می‌بینید، پروفایل سفارشی ذخیره می‌کنید و جزئیات را کپی می‌کنید؛ خود افزونه تنظیمات DNS کروم یا سیستم را تغییر نمی‌دهد.", tags: ["Chrome", "Manifest V3", "DNS", "DNS-over-HTTPS"] },
    { id: "hamejoo-chrome", lang: "JavaScript \u00b7 Manifest V3", icon: "search", ver: "v1.0.0", repo: "https://github.com/HameJoo/hamejoo-chrome", docs: "https://hamejoo.github.io/hamejoo-chrome/", demo: "https://hamejoo.ir", demoLabel: "projects.website", store: "https://chromewebstore.google.com/detail/hhchlcjldhlccicaaeiifmfdbacedhoi", en: "Official Chrome extension for HameJoo (\u0647\u0645\u0647\u200c\u062c\u0648): search Iranian classified ads and businesses from the toolbar, the hj address-bar keyword, the right-click menu, or Alt+H. Results open on hamejoo.ir.", fa: "افزونهٔ رسمی همه‌جو برای کروم: جستجوی آگهی و کسب‌وکار در ایران از پاپ‌آپ نوار ابزار، کلیدواژهٔ hj در نوار آدرس، منوی راست‌کلیک یا میانبر Alt+H. نتایج در hamejoo.ir باز می‌شوند.", tags: ["Chrome", "Manifest V3", "Search", "Classifieds"] }
  ];

  var PROJECT_ICONS = {
    skills: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM12 12l8-4.5M12 12v9M12 12 4 7.5"/>',
    mcp: '<path d="M4 7h16M4 12h16M4 17h10M17 15l3 2-3 2"/>',
    rag: '<path d="M11 4a7 7 0 1 0 4.2 12.6L20 21M8 11h6M11 8v6"/>',
    eval: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    ziman: '<path d="M5 5h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-4l-4 3v-3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z"/>',
    dns: '<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.2 12h17.6M12 3c2.6 3 3.7 6 3.7 9s-1.1 6-3.7 9M12 3c-2.6 3-3.7 6-3.7 9s1.1 6 3.7 9"/>',
    search: '<path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.8-3.8"/>'
  };

  // Stack items demonstrated by a project link to it.
  var STACK_PROJECT = {
    "MCP (Model Context Protocol)": "woocommerce-mcp", "TypeScript": "woocommerce-mcp", "Node.js": "woocommerce-mcp",
    "WooCommerce": "woocommerce-mcp", "WordPress": "woocommerce-mcp", "Docker": "woocommerce-mcp",
    "Embeddings": "persian-rag", "Qdrant": "persian-rag", "pgvector": "persian-rag", "Rerankers": "persian-rag",
    "FastAPI": "persian-rag", "PostgreSQL": "persian-rag", "Python": "persian-rag", "Hugging Face Transformers": "persian-rag",
    "Elasticsearch": "llm-search-eval", "Algolia": "llm-search-eval", "LLM evals": "llm-search-eval",
    "GitHub Actions": "llm-search-eval", "Marketplace search & recommendations": "llm-search-eval",
    "Agent skills & rules": "commerce-agent-skills", "AI coding agents": "commerce-agent-skills",
    "Prompt & context engineering": "commerce-agent-skills", "Payment integrations": "commerce-agent-skills"
  };

  var ICONS = {"x": "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z", "github": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12", "instagram": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077", "threads": "M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z", "devdotto": "M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z", "huggingface": "M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624", "mastodon": "M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z", "orcid": "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z", "googlescholar": "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"};
  ICONS.linkedin = "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z";
  ICONS.researchgate = "M3 3h18v18H3V3zm4 4v10h2v-4h1.5l2.5 4h2.3l-2.8-4.4A3 3 0 0 0 11 7H7zm2 2h2a1 1 0 0 1 0 2H9V9zm7 1v2h1v1.5a1.5 1.5 0 0 1-3 0V10h-1v3.5a2.5 2.5 0 0 0 5 0V10h-2z";
  ICONS.academia = "M12 2 1 8l11 6 9-4.9V16h2V8L12 2zM5 12.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-4.8l-7 3.8-7-3.8z";
  ICONS.civilica = "M4 3h11l5 5v13H4V3zm10 1.5V9h4.5L14 4.5zM7 12v2h10v-2H7zm0 4v2h7v-2H7z";
  ICONS.glama = "M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.3L18.9 8 12 11.7 5.1 8 12 4.3zM5 9.7l6 3.3v6.6l-6-3.3V9.7zm8 9.9V13l6-3.3v6.6l-6 3.3z";
  ICONS.zenodo = "M4 4h16v3.2L8.6 17H20v3H4v-3.2L15.4 7H4V4z";

  var LINKS = [
    { icon: "linkedin", en: "LinkedIn", fa: "لینکدین", handle: "in/sadrmanesh", url: "https://www.linkedin.com/in/sadrmanesh" },
    { icon: "github", en: "GitHub", fa: "گیت هاب", handle: "@sadrmanesh", url: "https://github.com/sadrmanesh" },
    { icon: "x", en: "X", fa: "ایکس", handle: "@nasersadrmanesh", url: "https://x.com/nasersadrmanesh" },
    { icon: "instagram", en: "Instagram", fa: "اینستاگرام", handle: "@nasersadrmanesh", url: "https://www.instagram.com/nasersadrmanesh/" },
    { icon: "threads", en: "Threads", fa: "تردز", handle: "@nasersadrmanesh", url: "https://www.threads.com/@nasersadrmanesh" },
    { icon: "devdotto", en: "Dev.to", fa: "Dev.to", handle: "dev.to/sadrmanesh", url: "https://dev.to/sadrmanesh" },
    { icon: "huggingface", en: "Hugging Face", fa: "هاگینگ فیس", handle: "huggingface.co/sadrmanesh", url: "https://huggingface.co/sadrmanesh" },
    { icon: "mastodon", en: "Mastodon", fa: "ماستودون", handle: "@sadrmanesh@mastodon.social", url: "https://mastodon.social/@sadrmanesh" },
    { icon: "orcid", en: "ORCID", fa: "ارکید", handle: "0009-0005-3708-4142", url: "https://orcid.org/0009-0005-3708-4142" },
    { icon: "googlescholar", en: "Google Scholar", fa: "گوگل اسکالر", handle: "scholar.google.com", url: "https://scholar.google.com/citations?user=0d5m-OoAAAAJ" },
    { icon: "researchgate", en: "ResearchGate", fa: "ریسرچ‌گیت", handle: "Mohammad-Naser-Sadrmanesh", url: "https://www.researchgate.net/profile/Mohammad-Naser-Sadrmanesh" },
    { icon: "academia", en: "Academia.edu", fa: "آکادمیا", handle: "bshams.academia.edu/sadrmanesh", url: "https://bshams.academia.edu/sadrmanesh" },
    { icon: "civilica", en: "Civilica", fa: "سیویلیکا", handle: "civilica.com/p/114389", url: "https://civilica.com/p/114389/" },
    { icon: "glama", en: "Glama", fa: "Glama", handle: "woocommerce-mcp", url: "https://glama.ai/mcp/servers/sadrmanesh/woocommerce-mcp" },
    { icon: "zenodo", en: "Zenodo", fa: "زنودو", handle: "10.5281/zenodo.23897615", url: "https://zenodo.org/records/23897615" }
  ];

  var ARROW = '<svg class="arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var root = document.documentElement;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var GH = "https://github.com/sadrmanesh/";
  var DOCS = "https://sadrmanesh.github.io/";
  var LINK_ICON = '<svg class="chip-ico" viewBox="0 0 24 24" width="11" height="11" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function repoUrl(p) { return p.repo || (GH + p.id); }
  function docsUrl(p) { return p.docs || (DOCS + p.id + "/"); }

  function projectCard(p, lang, t) {
    return '<article class="project" id="project-' + p.id + '">' +
      '<div class="project-top"><div class="card-icon" aria-hidden="true"><svg viewBox="0 0 24 24">' + PROJECT_ICONS[p.icon] + '</svg></div>' +
      '<div class="project-meta" lang="en" dir="ltr"><span class="badge">' + esc(p.lang) + '</span><span class="badge badge-ver">' + esc(p.ver || "v0.2.0") + '</span></div></div>' +
      '<h3 class="project-name" lang="en" dir="ltr"><a href="' + esc(repoUrl(p)) + '" target="_blank" rel="noopener">' + esc(p.id) + '</a></h3>' +
      '<p class="project-pitch">' + esc(p[lang]) + '</p>' +
      '<ul class="tags" lang="en" dir="ltr">' + p.tags.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>' +
      (p.install ? '<pre class="project-install" lang="en" dir="ltr">' + [].concat(p.install).map(function (c) { return '<code>' + esc(c) + '</code>'; }).join("\n") + '</pre>' : '') +
      '<div class="project-links">' +
      '<a class="plink" href="' + esc(repoUrl(p)) + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="' + ICONS.github + '"/></svg><span>' + esc(t["projects.repo"]) + '</span></a>' +
      (p.store ? '<a class="plink" href="' + esc(p.store) + '" target="_blank" rel="noopener" lang="en" dir="ltr"><span>' + esc(t["projects.store"]) + '</span></a>' : '') +
      (p.demo ? '<a class="plink" href="' + esc(p.demo) + '" target="_blank" rel="noopener"><span>' + esc(t[p.demoLabel || "projects.demo"]) + '</span></a>' : '') +
      (p.article ? '<a class="plink" href="' + esc(p.article) + '" target="_blank" rel="noopener"><span>' + esc(t["projects.article"]) + '</span></a>' : '') +
      (p.listings || []).map(function (l) { return '<a class="plink" href="' + esc(l[1]) + '" target="_blank" rel="noopener" lang="en" dir="ltr"><span>' + esc(l[0]) + '</span></a>'; }).join("") +
      '<a class="plink plink-primary" href="' + esc(docsUrl(p)) + '" target="_blank" rel="noopener"><span>' + esc(t["projects.docs"]) + '</span>' + ARROW + '</a>' +
      '</div></article>';
  }

  function renderProjects(lang) {
    var t = I18N[lang] || I18N.en;
    document.getElementById("projectList").innerHTML = PROJECTS.map(function (p) { return projectCard(p, lang, t); }).join("");
    document.getElementById("extensionList").innerHTML = EXTENSIONS.map(function (p) { return projectCard(p, lang, t); }).join("");
  }

  function renderStack(lang) {
    var t = I18N[lang] || I18N.en;
    document.getElementById("stackGroups").innerHTML = STACK.map(function (g) {
      return '<div class="stack-group"><h3>' + esc(g[lang]) + '</h3><ul class="chips" lang="en" dir="ltr">' +
        g.items.map(function (i) {
          var p = STACK_PROJECT[i];
          if (!p) return '<li class="chip">' + esc(i) + "</li>";
          var tip = t["stack.tip"].replace("{p}", p);
          return '<li><a class="chip chip-link" href="' + GH + p + '" target="_blank" rel="noopener" data-tip="' + esc(tip) + '" aria-label="' + esc(i + " (" + tip + ")") + '">' + esc(i) + LINK_ICON + "</a></li>";
        }).join("") + "</ul></div>";
    }).join("");
    if (lang === "fa") {
      Array.prototype.forEach.call(document.querySelectorAll(".chips"), function (el) { el.setAttribute("dir", "rtl"); });
    }
  }

  var WRITING = [
    { url: "https://doi.org/10.6084/m9.figshare.34913889", title: "persian-rag-bench: A Persian Retrieval Benchmark for Spelling-Variant Robustness", meta: "figshare \u00b7 dataset \u00b7 2026", icon: "googlescholar" },
    { url: "https://doi.org/10.5281/zenodo.23923535", title: "persian-rag: A Persian-First Retrieval-Augmented Generation Toolkit \u2014 Normalization, Hybrid Retrieval, and Retrieval Evaluation", meta: "zenodo \u00b7 technical report \u00b7 2026", icon: "googlescholar" },
    { url: "https://doi.org/10.5281/zenodo.23897615", title: "Technical Report: WooCommerce Model Context Protocol Server - A Multi-Store, Previewed Safe-Write Architecture for Autonomous AI Agents in E-Commerce", meta: "zenodo \u00b7 technical report \u00b7 2026", icon: "googlescholar" },
    { url: "https://doi.org/10.5281/zenodo.23883598", title: "commerce-agent-skills: Architectural Specification, Domain Constraints, and Evaluation Framework for E-Commerce AI Coding Agents", meta: "zenodo \u00b7 technical report \u00b7 2026", icon: "googlescholar" },
    { url: "https://dev.to/sadrmanesh/a-week-of-reader-feedback-what-changed-in-my-four-ai-for-commerce-tools-5aa1", title: "A week of reader feedback: what changed in my four AI-for-commerce tools", meta: "dev.to \u00b7 2026" },
    { url: "https://dev.to/sadrmanesh/safe-write-tools-for-agents-preview-confirm-audit-and-stale-previews-in-a-woocommerce-mcp-server-2c66", title: "Safe write tools for agents: preview, confirm, audit, and stale previews in a WooCommerce MCP server", meta: "dev.to \u00b7 2026" },
    { url: "https://dev.to/sadrmanesh/why-rag-breaks-on-persian-text-and-what-i-built-to-fix-it-normalization-half-spaces-spelling-2jgm", title: "Why RAG breaks on Persian text, and what I built to fix it", meta: "dev.to \u00b7 2026" },
    { url: "https://dev.to/sadrmanesh/is-your-new-search-actually-better-label-gaps-llm-judge-panels-and-paired-statistics-for-offline-490p", title: "Is your new search actually better? Label gaps, LLM judge panels, and paired statistics for offline search evaluation", meta: "dev.to \u00b7 2026" },
    { url: "https://dev.to/sadrmanesh/treat-agent-skills-like-code-evals-a-strict-validator-and-an-npx-installer-for-commerce-skills-13dk", title: "Treat agent skills like code: evals, a strict validator, and an npx installer for commerce skills", meta: "dev.to \u00b7 2026" },
    { url: "https://www.linkedin.com/pulse/what-reader-feedback-taught-me-building-ai-tooling-naser-sadrmanesh-w3guf/", title: "What reader feedback taught me about building production-safe AI tooling for commerce", meta: "linkedin \u00b7 2026", icon: "linkedin" },
    { url: "https://www.linkedin.com/pulse/preview-confirm-audit-designing-safe-write-tools-ai-live-sadrmanesh-jwy5f/", title: "Preview, confirm, audit: designing safe write tools for AI agents on a live store", meta: "linkedin \u00b7 2026", icon: "linkedin" },
    { url: "https://www.linkedin.com/pulse/your-new-search-actually-better-five-questions-i-ask-naser-sadrmanesh-s2sff/", title: "Is your new search actually better? Five questions I ask before shipping a ranking change", meta: "linkedin \u00b7 2026", icon: "linkedin" },
    { url: "https://www.linkedin.com/pulse/why-rag-quietly-fails-persian-text-design-decisions-fixed-sadrmanesh-wd4vf/", title: "Why RAG quietly fails on Persian text, and the design decisions that fixed it", meta: "linkedin \u00b7 2026", icon: "linkedin" },
    { url: "https://www.linkedin.com/pulse/knowledge-your-senior-engineers-carry-packaged-coding-sadrmanesh-xtenf/", title: "The knowledge your senior engineers carry, packaged for coding agents", meta: "linkedin \u00b7 2026", icon: "linkedin" },
    { url: "https://dev.to/sadrmanesh/four-open-source-tools-for-ai-in-e-commerce-and-what-building-them-taught-me-5abl", title: "Four open-source tools for AI in e-commerce, and what building them taught me", meta: "dev.to \u00b7 2026" }
  ];

  function renderWriting() {
    document.getElementById("writingList").innerHTML = WRITING.map(function (w) {
      return '<li><a class="link" href="' + w.url + '" target="_blank" rel="noopener">' +
        '<span class="link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="' + ICONS[w.icon || "devdotto"] + '"/></svg></span>' +
        '<span class="link-text" lang="en" dir="ltr"><span class="link-name">' + esc(w.title) + '</span><span class="link-handle">' + esc(w.meta) + "</span></span>" +
        ARROW + "</a></li>";
    }).join("");
  }

  function renderLinks(lang) {
    document.getElementById("links").innerHTML = LINKS.map(function (l) {
      return '<li><a class="link" href="' + l.url + '" target="_blank" rel="noopener me">' +
        '<span class="link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="' + ICONS[l.icon] + '"/></svg></span>' +
        '<span class="link-text"><span class="link-name">' + esc(l[lang]) + '</span><span class="link-handle">' + esc(l.handle) + "</span></span>" +
        ARROW + "</a></li>";
    }).join("");
  }

  function setLang(lang, persist) {
    var t = I18N[lang] || I18N.en;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var k = el.getAttribute("data-i18n");
      if (t[k] != null) el.textContent = t[k];
    });
    document.title = t.docTitle;
    document.getElementById("langToggle").setAttribute("aria-label", t.langLabel);
    document.getElementById("themeToggle").setAttribute("aria-label", t.themeLabel);
    renderProjects(lang);
    renderStack(lang);
    renderLinks(lang);
    renderWriting();
    if (persist) try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function setTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#fafaf9" : "#0b0d12");
    if (persist) try { localStorage.setItem("theme", theme); } catch (e) {}
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    setLang(root.lang === "fa" ? "en" : "fa", true);
  });
  document.getElementById("themeToggle").addEventListener("click", function () {
    setTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light", true);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  setTheme(root.getAttribute("data-theme") || "dark", false);
  setLang(root.lang === "fa" ? "fa" : "en", false);
})();
