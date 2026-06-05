/* ==============================================================
   MARIAM AL-OBAIDI — Portfolio Script
   Multilingual (AR/EN/FR) | RTL/LTR | Scroll Animations | Modal
   ============================================================== */

/* ================================================================
   TRANSLATIONS
   ================================================================ */
const TRANSLATIONS = {
    ar: {
        meta_title: "مريم العبيدي — صحفية ومذيعة",
        nav_logo: "م.ع",
        nav_about: "من أنا",
        nav_experience: "الخبرات",
        nav_skills: "المهارات",
        nav_education: "التعليم",
        nav_portfolio: "الأعمال",
        nav_contact: "تواصل",
        hero_badge: "صحفية و مقدمة برامج",
        hero_name: "مريم العبيدي",
        hero_title: "صحفية ومذيعة تلفزيونية",
        hero_subtitle: "أربط بين الصحافة الرصينة والتقديم التلفزيوني بأسلوب احترافي يعكس معايير الإعلام الدولي",
        hero_cta_work: "مشاهدة الأعمال",
        hero_cta_contact: "تواصل معي",
        stat_organizations: "مؤسسات إعلامية",
        stat_age: "عاماً",
        stat_platforms: "منصات رقمية",
        hero_location: "تونس",

        about_tag: "نبذة عني",
        about_title: "من أنا",
        about_lead: "صحفية تونسية شابة وطموحة، تجمع بين الإعداد التلفزيوني والتقديم الإعلامي بأسلوب يعكس المعايير الدولية في صناعة الإعلام.",
        about_p1: "حاصلة على إجازة في الاتصال من معهد الصحافة وعلوم الأخبار، وتواصل مسيرتها الأكاديمية بدراسة الماجستير في الصحافة متعددة المنصات، مما يمنحها تأهيلاً نظرياً وعملياً متكاملاً.",
        about_p2: "اكتسبت خبرة ميدانية متنوعة في مؤسسات إعلامية تونسية وليبية، تمتد من الإعداد البرامجي إلى التقديم التلفزيوني والصحافة الرقمية وإدارة المحتوى على منصات التواصل الاجتماعي.",
        tag_tv: "إعلام تلفزيوني",
        tag_digital: "صحافة رقمية",
        tag_multi: "مقدمة برامج",
        tag_arabic: "إعلام عربي",
        info_location_label: "الموقع",
        info_location_value: "تونس",
        info_age_label: "العمر",
        info_age_value: "25 عاماً",
        info_phone_label: "الهاتف",
        info_specialty_label: "التخصص",
        info_specialty_value: "صحافة وتقديم تلفزيوني",

        exp_tag: "المسيرة المهنية",
        exp_title: "الخبرات",
        exp1_company: "تونسنا TV",
        exp1_role: "صحفية معدة برامج",
        exp1_desc: "إعداد وتقديم برامج تلفزيونية متنوعة، والمشاركة في تطوير المحتوى الإعلامي وفق المعايير المهنية للإعلام التونسي.",
        exp2_role: "صحفية اتصال",
        exp2_desc: "تغطية الفعاليات الإعلامية وإعداد التقارير الصحفية وتطوير استراتيجيات التواصل المؤسسي.",
        exp3_role: "صحفية",
        exp3_desc: "المشاركة في إنتاج المحتوى الإعلامي والتقارير المصورة وإعداد السيناريوهات الإعلامية.",
        exp4_company: "المعهد الوطني للإحصاء",
        exp4_role: "اتصالية",
        exp4_desc: "إدارة التواصل المؤسسي وإعداد النشرات الإعلامية ودعم استراتيجية الاتصال الخارجي للمؤسسة.",
        exp5_company: "حور ميديا — ليبيا",
        exp5_role: "صحفية ومذيعة",
        exp5_desc: "التقديم التلفزيوني وإعداد النشرات الإخبارية للجمهور الليبي، وتغطية الأحداث بأسلوب إعلامي احترافي.",
        exp6_company: "سباراطوري الرياضية",
        exp6_role: "مديرة صفحة ومحتوى رقمي",
        exp6_desc: "إدارة الصفحة الرياضية شاملاً نشر الأخبار والتصميم الجرافيكي وإنتاج الريلز الاحترافية لزيادة التفاعل والوصول.",

        skills_tag: "الكفاءات",
        skills_title: "المهارات",
        skill1: "إعداد البرامج التلفزية",
        skill2: "إعداد النشرات الإخبارية",
        skill3: "التقديم التلفزيوني",
        skill4: "إعداد الريلز",
        skill5: "الصحافة الرقمية",
        skill6: "التصميم الجرافيكي",

        edu_tag: "الأكاديمي والتدريبي",
        edu_title: "التعليم والتدريب",
        edu_type_univ: "جامعي",
        edu_type_ongoing: "قيد الدراسة",
        edu_type_training: "تدريب",
        edu1_inst: "معهد الصحافة وعلوم الأخبار",
        edu1_degree: "إجازة في الاتصال",
        edu1_note: "تأهيل أكاديمي في علوم الاتصال والصحافة",
        edu2_inst: "معهد الصحافة وعلوم الأخبار",
        edu2_degree: "ماجستير صحافة متعددة المنصات",
        edu2_note: "تعمّق في الصحافة الرقمية وتكنولوجيا الميديا",
        edu3_inst: "معهد الصحافة وعلوم الأخبار",
        edu3_degree: "دورة تدريبية متخصصة",
        edu3_note: "تدريب ميداني في أساسيات الإعداد والإنتاج",
        edu4_inst: "معهد الجزيرة للإعلام",
        edu4_degree: "إنتاج النشرات الرقمية",
        edu4_note: "تدريب على معايير الجزيرة في الإنتاج الرقمي والنشرات الإخبارية",

        port_tag: "أعمالي",
        port_title: "معرض الأعمال",
        port_desc: "مجموعة مختارة من النشرات الإخبارية والتغطيات الرياضية",
        vid_title_sports: "ريل رياضي",
        vid1_title: "نشرة إخبارية - ١",
        vid2_title: "نشرة إخبارية - ٢",
        vid3_title: "نشرة إخبارية - ٣",
        vid_open_fb: "مشاهدة على فيسبوك",

        contact_tag: "تواصل",
        contact_title: "تواصل معي",
        contact_desc: "للتعاون المهني والاستفسارات الإعلامية",
        contact_call_label: "اتصل بي",
        contact_wa_label: "واتساب",
        contact_loc_label: "الموقع",
        contact_loc_value: "تونس، تونس",
        form_name: "الاسم",
        form_email: "البريد الإلكتروني",
        form_subject: "الموضوع",
        form_message: "الرسالة",
        form_submit: "إرسال الرسالة",
        form_note: "سيتم الرد في أقرب وقت ممكن",
        modal_fb_text: "شاهد الفيديو على فيسبوك",
        modal_fb_btn: "فتح على فيسبوك",

        footer_tagline: "صحفية ومذيعة تلفزيونية — تونس",
        footer_copy: "© 2025 مريم العبيدي. جميع الحقوق محفوظة.",
    },

    en: {
        meta_title: "Mariam Al-Obaidi — Journalist & TV Presenter",
        nav_logo: "M.O",
        nav_about: "About",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_education: "Education",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_badge: "Journalist & Program Presenter",
        hero_name: "Mariam Al-Obaidi",
        hero_title: "Journalist & TV Presenter",
        hero_subtitle: "Bridging rigorous journalism and professional broadcast presentation to international media standards",
        hero_cta_work: "View My Work",
        hero_cta_contact: "Get in Touch",
        stat_organizations: "Media Organizations",
        stat_age: "Years Old",
        stat_platforms: "Digital Platforms",
        hero_location: "Tunisia",

        about_tag: "About Me",
        about_title: "Who I Am",
        about_lead: "An ambitious young Tunisian journalist combining television production and broadcast presentation with a style reflecting international media industry standards.",
        about_p1: "Holder of a degree in Communication Sciences from the Press and Information Sciences Institute, and currently pursuing a Master's in Multimedia Journalism — providing a solid theoretical and practical foundation.",
        about_p2: "I have gained diverse field experience across Tunisian and Libyan media outlets, spanning programme production, broadcast presenting, digital journalism, and social media content management.",
        tag_tv: "Broadcast Media",
        tag_digital: "Digital Journalism",
        tag_multi: "Presenting",
        tag_arabic: "Arab Media",
        info_location_label: "Location",
        info_location_value: "Tunisia",
        info_age_label: "Age",
        info_age_value: "25 years old",
        info_phone_label: "Phone",
        info_specialty_label: "Speciality",
        info_specialty_value: "Journalism & Broadcast Presenting",

        exp_tag: "Career Path",
        exp_title: "Experience",
        exp1_company: "Tunisna TV",
        exp1_role: "Journalist & Programme Producer",
        exp1_desc: "Producing and presenting diverse television programmes, contributing to media content development in line with professional Tunisian broadcast standards.",
        exp2_role: "Communication Journalist",
        exp2_desc: "Covering media events, preparing journalistic reports, and developing institutional communication strategies.",
        exp3_role: "Journalist",
        exp3_desc: "Contributing to media content production, video reports, and scripting for broadcast programmes.",
        exp4_company: "National Institute of Statistics",
        exp4_role: "Communications Officer",
        exp4_desc: "Managing institutional communications, preparing press releases, and supporting the organisation's external communication strategy.",
        exp5_company: "Hor Media — Libya",
        exp5_role: "Journalist & Presenter",
        exp5_desc: "Delivering broadcast presentation and news bulletins for Libyan audiences, covering events with a professional journalistic approach.",
        exp6_company: "Sparatouri Sports",
        exp6_role: "Page Manager & Digital Content Creator",
        exp6_desc: "Managing the sports page including news publishing, graphic design, and professional Reels production to enhance engagement and reach.",

        skills_tag: "Competencies",
        skills_title: "Skills",
        skill1: "Television Programme Production",
        skill2: "News Bulletin Preparation",
        skill3: "Broadcast Presenting",
        skill4: "Reels Production",
        skill5: "Digital Journalism",
        skill6: "Graphic Design",

        edu_tag: "Academic & Training",
        edu_title: "Education & Training",
        edu_type_univ: "Degree",
        edu_type_ongoing: "In Progress",
        edu_type_training: "Training",
        edu1_inst: "Press and Information Sciences Institute",
        edu1_degree: "Bachelor's Degree in Communication",
        edu1_note: "Academic qualification in communication sciences and journalism",
        edu2_inst: "Press and Information Sciences Institute",
        edu2_degree: "Master's in Multimedia Journalism",
        edu2_note: "In-depth study of digital journalism and media technology",
        edu3_inst: "Press and Information Sciences Institute",
        edu3_degree: "Specialist Training Programme",
        edu3_note: "Field training in the fundamentals of production and broadcasting",
        edu4_inst: "Al Jazeera Media Institute",
        edu4_degree: "Digital Bulletin Production",
        edu4_note: "Training in Al Jazeera's standards for digital production and news bulletins",

        port_tag: "Portfolio",
        port_title: "Work Showcase",
        port_desc: "Reports, interviews, and coverage that embody my journalistic style",
        vid1_type: "News Report",
        vid1_title: "News Report — 1",
        vid2_type: "Field Coverage",
        vid2_title: "Field Coverage — 1",
        vid3_type: "News Report",
        vid3_title: "News Report — 2",
        vid4_type: "Interview",
        vid4_title: "Television Interview",
        vid5_type: "Field Coverage",
        vid5_title: "Field Coverage — 2",
        vid6_type: "Programme",
        vid6_title: "Television Programme",
        vid_open_fb: "Watch on Facebook",

        contact_tag: "Contact",
        contact_title: "Get in Touch",
        contact_desc: "For professional collaboration and media enquiries",
        contact_call_label: "Call Me",
        contact_wa_label: "WhatsApp",
        contact_loc_label: "Location",
        contact_loc_value: "Tunis, Tunisia",
        form_name: "Full Name",
        form_email: "Email Address",
        form_subject: "Subject",
        form_message: "Message",
        form_submit: "Send Message",
        form_note: "I will respond as soon as possible",
        modal_fb_text: "Watch this video on Facebook",
        modal_fb_btn: "Open on Facebook",

        footer_tagline: "Journalist & TV Presenter — Tunisia",
        footer_copy: "© 2025 Mariam Al-Obaidi. All rights reserved.",
    },

    fr: {
        meta_title: "Mariam Al-Obaidi — Journaliste & Présentatrice TV",
        nav_logo: "M.O",
        nav_about: "À propos",
        nav_experience: "Expérience",
        nav_skills: "Compétences",
        nav_education: "Formation",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_badge: "Journaliste & Présentatrice TV",
        hero_name: "Mariam Al-Obaidi",
        hero_title: "Journaliste & Présentatrice Télévisée",
        hero_subtitle: "Alliance du journalisme rigoureux et de la présentation télévisée selon les critères de l'industrie médiatique internationale",
        hero_cta_work: "Voir mes travaux",
        hero_cta_contact: "Me contacter",
        stat_organizations: "Médias partenaires",
        stat_age: "ans",
        stat_platforms: "Plateformes digitales",
        hero_location: "Tunisie",

        about_tag: "À propos",
        about_title: "Qui suis-je",
        about_lead: "Journaliste tunisienne ambitieuse, alliant production télévisuelle et présentation médiatique avec un style reflétant les standards de l'industrie médiatique internationale.",
        about_p1: "Titulaire d'une licence en sciences de la communication de l'Institut de Presse et des Sciences de l'Information, et actuellement en master de journalisme multimédia — une formation théorique et pratique complète.",
        about_p2: "J'ai acquis une expérience terrain variée au sein de médias tunisiens et libyens, allant de la production de programmes à la présentation télévisée, en passant par le journalisme numérique et la gestion de contenu sur les réseaux sociaux.",
        tag_tv: "Médias télévisés",
        tag_digital: "Journalisme numérique",
        tag_multi: "Présentation",
        tag_arabic: "Médias arabes",
        info_location_label: "Localisation",
        info_location_value: "Tunisie",
        info_age_label: "Âge",
        info_age_value: "25 ans",
        info_phone_label: "Téléphone",
        info_specialty_label: "Spécialité",
        info_specialty_value: "Journalisme & Présentation télévisée",

        exp_tag: "Parcours professionnel",
        exp_title: "Expériences",
        exp1_company: "Tunisna TV",
        exp1_role: "Journaliste & Productrice d'émissions",
        exp1_desc: "Production et présentation de programmes télévisés variés, contribution au développement du contenu médiatique conformément aux standards professionnels de l'audiovisuel tunisien.",
        exp2_role: "Journaliste Communication",
        exp2_desc: "Couverture d'événements médiatiques, rédaction de reportages journalistiques et développement de stratégies de communication institutionnelle.",
        exp3_role: "Journaliste",
        exp3_desc: "Participation à la production de contenus médiatiques, reportages vidéo et rédaction de scénarios pour l'audiovisuel.",
        exp4_company: "Institut National de la Statistique",
        exp4_role: "Chargée de communication",
        exp4_desc: "Gestion de la communication institutionnelle, rédaction de communiqués de presse et soutien à la stratégie de communication externe.",
        exp5_company: "Hor Média — Libye",
        exp5_role: "Journaliste & Présentatrice",
        exp5_desc: "Présentation télévisée et préparation des journaux télévisés à destination du public libyen, avec une couverture professionnelle des événements.",
        exp6_company: "Sparatouri Sports",
        exp6_role: "Responsable de page & Créatrice de contenu digital",
        exp6_desc: "Gestion de la page sportive incluant la publication des actualités, le design graphique et la production de Reels professionnels pour maximiser l'engagement.",

        skills_tag: "Compétences",
        skills_title: "Savoir-faire",
        skill1: "Production d'émissions télévisées",
        skill2: "Préparation de journaux télévisés",
        skill3: "Présentation télévisée",
        skill4: "Production de Reels",
        skill5: "Journalisme numérique",
        skill6: "Design graphique",

        edu_tag: "Formation",
        edu_title: "Formation & Perfectionnement",
        edu_type_univ: "Universitaire",
        edu_type_ongoing: "En cours",
        edu_type_training: "Formation",
        edu1_inst: "Institut de Presse et des Sciences de l'Information",
        edu1_degree: "Licence en Communication",
        edu1_note: "Formation académique en sciences de la communication et du journalisme",
        edu2_inst: "Institut de Presse et des Sciences de l'Information",
        edu2_degree: "Master en Journalisme Multimédia",
        edu2_note: "Approfondissement en journalisme numérique et technologie des médias",
        edu3_inst: "Institut de Presse et des Sciences de l'Information",
        edu3_degree: "Programme de formation spécialisé",
        edu3_note: "Formation terrain aux fondamentaux de la production et de la réalisation",
        edu4_inst: "Institut des Médias Al Jazeera",
        edu4_degree: "Production de bulletins numériques",
        edu4_note: "Formation aux standards Al Jazeera pour la production numérique et les journaux télévisés",

        port_tag: "Portfolio",
        port_title: "Galerie de travaux",
        port_desc: "Reportages, interviews et couvertures reflétant mon style journalistique",
        vid1_type: "Reportage",
        vid1_title: "Reportage — 1",
        vid2_type: "Reportage terrain",
        vid2_title: "Couverture terrain — 1",
        vid3_type: "Reportage",
        vid3_title: "Reportage — 2",
        vid4_type: "Interview",
        vid4_title: "Interview télévisée",
        vid5_type: "Reportage terrain",
        vid5_title: "Couverture terrain — 2",
        vid6_type: "Émission",
        vid6_title: "Émission télévisée",
        vid_open_fb: "Voir sur Facebook",

        contact_tag: "Contact",
        contact_title: "Me contacter",
        contact_desc: "Pour toute collaboration professionnelle ou demande médiatique",
        contact_call_label: "Appeler",
        contact_wa_label: "WhatsApp",
        contact_loc_label: "Localisation",
        contact_loc_value: "Tunis, Tunisie",
        form_name: "Nom complet",
        form_email: "Adresse e-mail",
        form_subject: "Objet",
        form_message: "Message",
        form_submit: "Envoyer le message",
        form_note: "Je vous répondrai dans les meilleurs délais",
        modal_fb_text: "Regardez cette vidéo sur Facebook",
        modal_fb_btn: "Ouvrir sur Facebook",

        footer_tagline: "Journaliste & Présentatrice — Tunisie",
        footer_copy: "© 2025 Mariam Al-Obaidi. Tous droits réservés.",
    }
};

/* ================================================================
   LANGUAGE MANAGEMENT
   ================================================================ */
let currentLang = 'ar';

function applyLanguage(lang) {
    currentLang = lang;
    const t = TRANSLATIONS[lang];
    const body = document.body;
    const html = document.documentElement;

    // Direction & class
    if (lang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        body.className = 'lang-ar';
    } else if (lang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.className = 'lang-en';
    } else {
        html.setAttribute('lang', 'fr');
        html.setAttribute('dir', 'ltr');
        body.className = 'lang-fr';
    }

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update document title
    document.title = t.meta_title || document.title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `${t.hero_name} — ${t.hero_title}`);
    }

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Re-apply skill bars direction (they use absolute width, fine)
    // Re-run skill bar animation if needed
    animateSkillBars();

    // Save preference
    try { localStorage.setItem('portfolio_lang', lang); } catch (e) { }
}

function initLanguage() {
    let saved = 'ar';
    try { saved = localStorage.getItem('portfolio_lang') || 'ar'; } catch (e) { }
    applyLanguage(saved);
}

/* ================================================================
   NAVBAR
   ================================================================ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
    });
});

/* ================================================================
   SCROLL ANIMATIONS (Intersection Observer)
   ================================================================ */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    // Animate timeline items
    document.querySelectorAll('.timeline-item').forEach((el, i) => {
        el.style.transitionDelay = `${i * 80}ms`;
        observer.observe(el);
    });

    // Animate skill cards
    document.querySelectorAll('.skill-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 60}ms`;
        observer.observe(el);
    });

    // Animate edu cards
    document.querySelectorAll('.edu-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 70}ms`;
        observer.observe(el);
    });

    // Animate video cards
    document.querySelectorAll('.video-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 60}ms`;
        observer.observe(el);
    });

    // Generic [data-animate] elements
    document.querySelectorAll('[data-animate]').forEach((el, i) => {
        if (!el.style.transitionDelay) {
            el.style.transitionDelay = `${i * 50}ms`;
        }
        observer.observe(el);
    });
}

/* ================================================================
   SKILL BARS
   ================================================================ */
let skillBarsLoaded = false;

function animateSkillBars() {
    const skillBarsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.skill-bar');
                if (bar) {
                    const level = bar.getAttribute('data-level');
                    setTimeout(() => { bar.style.width = level + '%'; }, 200);
                }
                skillBarsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-card').forEach(card => {
        skillBarsObserver.observe(card);
    });
}

/* ================================================================
   VIDEO MODAL
   ================================================================ */
const videoModal = document.getElementById('videoModal');
const modalBody = document.getElementById('modalBody');
const modalFallback = document.getElementById('modalFallback');
const modalFbLink = document.getElementById('modalFbLink');

let iframeLoadTimeout = null;

function openModal(url, thumbEl) {
    modalBody.innerHTML = '';
    modalFallback.style.display = 'none';
    modalBody.style.display = 'block';
    modalFbLink.href = url;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Use a clean iframe approach with the post plugin (stable for Reels)
    const embedUrl = buildFacebookEmbedUrl(url);
    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    iframe.style.width = '100%';
    iframe.style.aspectRatio = '9/16';
    iframe.style.border = 'none';
    iframe.style.display = 'block';

    modalBody.appendChild(iframe);
}

function buildFacebookEmbedUrl(shareUrl) {
    if (!shareUrl) return null;
    let url = shareUrl.split('?')[0].split('&')[0];
    if (url.includes('/share/r/')) url = url.replace('/share/r/', '/reel/');
    if (url.includes('/share/v/')) url = url.replace('/share/v/', '/videos/');
    if (!url.startsWith('http')) url = 'https://' + url;

    const encoded = encodeURIComponent(url);
    // The post plugin is extremely stable for both Reels and standard posts
    return `https://www.facebook.com/plugins/post.php?href=${encoded}&show_text=false&width=500`;
}

function showFallback(url) {
    modalBody.style.display = 'none';
    modalFbLink.href = url;
    modalFallback.style.display = 'flex';
}

function closeModal(event) {
    if (event && event.target !== videoModal) return;
    _doCloseModal();
}

function _doCloseModal() {
    clearTimeout(iframeLoadTimeout);
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
    // Delay clearing to allow animation
    setTimeout(() => {
        modalBody.innerHTML = '';
        modalFallback.style.display = 'none';
        modalBody.style.display = 'block';
    }, 350);
}

// ESC key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        _doCloseModal();
    }
});

/* ================================================================
   CONTACT FORM (Frontend Only)
   ================================================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const t = TRANSLATIONS[currentLang];

        btn.disabled = true;
        btn.style.opacity = '0.7';

        // Simulate submission feedback
        setTimeout(() => {
            const originalText = btn.textContent;
            btn.textContent = currentLang === 'ar' ? '✓ تم الإرسال' :
                currentLang === 'en' ? '✓ Sent!' : '✓ Envoyé !';
            btn.style.background = '#22C55E';
            btn.style.borderColor = '#22C55E';
            btn.style.opacity = '1';

            setTimeout(() => {
                btn.textContent = t.form_submit;
                btn.style.background = '';
                btn.style.borderColor = '';
                btn.disabled = false;
                contactForm.reset();
            }, 3000);
        }, 800);
    });
}

/* ================================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            const offset = parseInt(getComputedStyle(document.documentElement)
                .getPropertyValue('--nav-h') || '72', 10);
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

/* ================================================================
   HERO IMAGE — MULTI-FORMAT AUTO-LOADER
   Tries: jpg → jpeg → png → webp → gif → avif → bmp → svg
   ================================================================ */
function loadProfileImage() {
    const img = document.getElementById('heroImg');
    const fallback = document.getElementById('heroFallback');
    if (!img) return;

    const base = img.getAttribute('data-src-base') || 'mypic';
    const formats = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif', 'bmp', 'svg'];
    let index = 0;

    function tryNext() {
        if (index >= formats.length) {
            // All formats failed → show monogram fallback
            img.style.display = 'none';
            if (fallback) fallback.style.display = 'flex';
            return;
        }
        const ext = formats[index++];
        img.onload = () => {
            img.style.display = 'block';
            if (fallback) fallback.style.display = 'none';
        };
        img.onerror = tryNext;
        img.src = `${base}.${ext}`;
    }

    // Also handle the case where file has no extension (just "mypic")
    img.onload = () => {
        img.style.display = 'block';
        if (fallback) fallback.style.display = 'none';
    };
    img.onerror = tryNext;
    img.src = base; // Try bare name first (e.g. "mypic" with no extension)
}

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initScrollAnimations();
    animateSkillBars();
    loadProfileImage();
});
