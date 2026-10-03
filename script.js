const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const languageButton = document.querySelector('.language-button');
const yearNode = document.querySelector('#year');
const reviewsGrid = document.getElementById('reviewsGrid');
const reviewForm = document.getElementById('reviewForm');
const formStatus = document.getElementById('formStatus');

const storageKey = 'bettaClientReviews';
const languageKey = 'bettaLanguage';

const defaultReviews = [
  {
    name: 'محمد الحمادي',
    role: 'مؤسس تطبيق أمان',
    roleEn: 'Founder of Aman App',
    project: 'Android App',
    rating: 5,
    text: 'من أفضل التجارب في التعامل مع Betta Technologies. احترافية كبيرة، فهم عميق للفكرة، تنفيذ دقيق جدًا. النتيجة النهائية تجاوزت توقعاتنا بكثير. سأنصح بهم بكل تأكيد.',
    textEn:
      'One of the best experiences we have had with Betta Technologies. Highly professional, with a deep understanding of our idea and very precise execution. The final result exceeded our expectations. I would definitely recommend them.'
  },
  {
    name: 'نور خليفة',
    role: 'مدير مشروع درة الخيرية',
    roleEn: 'Dorra Charity Project Manager',
    project: 'Platform',
    rating: 5,
    text: 'التزام رائع بالمواعيد والجودة. فريق Betta استمع جيدًا لاحتياجاتنا وحول رؤيتنا إلى تطبيق يخدم آلاف المستخدمين. الدعم اللاحق ممتاز جدًا.',
    textEn:
      'Excellent commitment to deadlines and quality. The Betta team listened carefully to our needs and turned our vision into a platform serving thousands of users. The post-launch support has been excellent.'
  },
  {
    name: 'أحمد محمود',
    role: 'رائد أعمال في المجال FinTech',
    roleEn: 'FinTech Entrepreneur',
    project: 'FinTech App',
    rating: 5,
    text: 'بحثت عن فريق يفهم رؤيتي ويحولها بثقة. Betta كان الخيار الأمثل. التصميم جميل، التطبيق عملي، والدعم المستمر مميز. نالت ثقتنا كاملة في كل مرحلة.',
    textEn:
      'I was looking for a team that could understand my vision and bring it to life with confidence. Betta was the perfect choice. The design is beautiful, the app is practical, and the ongoing support is outstanding. They earned our full trust at every stage.'
  },
  {
    name: 'سارة أحمد',
    role: 'مديرة تطبيق طلباتك',
    roleEn: 'Talabatak App Manager',
    project: 'E-commerce',
    rating: 5,
    text: 'حلولنا تحسّنت بشكل واضح بعد التحول إلى Betta. كانت تجربة التعاون سلسة جدًا من أول يوم. اهتمامهم بالتفاصيل والجودة ميز التطبيق عن المنافسين.',
    textEn:
      'Our solutions improved significantly after working with Betta. The collaboration was very smooth from day one. Their attention to detail and quality made the app stand out from competitors.'
  }
];

/* =========================
   LANGUAGE CONTENT
========================= */

const translations = {
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navServices: 'خدماتنا',
    navWork: 'آخر أعمالنا',
    navReviews: 'آراء العملاء',
    navCta: 'ابدأ مشروعك',

    heroEyebrow: 'BETTA TECHNOLOGIES',
    heroTitle: 'نحوّل الأفكار الطموحة',
    heroTitleSpan: 'إلى تطبيقات مؤثرة.',
    heroText:
      'نصنع تجارب رقمية ذكية تحوّل أفكارك إلى تطبيقات قوية، سهلة الاستخدام، وجاهزة للنمو مع مشروعك.',
    heroStart: 'ابدأ فكرتك الآن',
    heroWork: 'شاهد أعمالنا',
    stat1: 'تطبيقًا تم تطويره',
    stat2: 'عميل يثق بنا',
    stat3: 'دعم ومتابعة',

    aboutLabel: 'من نحن',
    aboutTitle: 'شريكك التقني من الفكرة إلى نجاح ملموس.',
    aboutText:
      'في Betta Technologies نساعد الشركات ورواد الأعمال على تحويل الأفكار إلى تجارب رقمية تنمو وتحقق أثرًا حقيقيًا. نعمل معك من أول فكرة حتى الإطلاق والمراجعة اللاحقة، مع تركيز كامل على الجودة والوضوح والنتائج.',
    check1: 'استراتيجية رقمية تتناسب مع مشروعك',
    check2: 'تصميم وتجربة مستخدم مريحة وفعالة',
    check3: 'تطوير سريع مع جودة عالية ومتانة',
    years: 'سنوات خبرة',
    tasks: 'مهمة تم إنجازها',
    direct: 'تواصل مباشر',

    servicesEyebrow: 'ماذا نقدم',
    servicesTitle: 'خدمات مصمّمة لنمو أعمالك.',
    service1Title: 'تطبيقات الموبايل',
    service1Text:
      'نطوّر تطبيقات Android سريعة وسلسة تحوّل فكرتك إلى تجربة مستخدم لا تُنسى وتدعم نمو مشروعك.',
    service2Title: 'حلول رقمية مبتكرة',
    service2Text:
      'نبتكر أنظمة ذكية ومخصصة تواكب أهدافك، من التخطيط إلى التنفيذ، لتجعل أعمالك أكثر كفاءة وتحقيقًا.',
    service3Title: 'تصميم تجربة المستخدم',
    service3Text:
      'واجهات عصرية وواضحة تجعل كل تفاعل أسهل، وأكثر استجابة، وتساهم في بناء انطباع قوي لدى المستخدمين.',

    processLabel: 'كيف نعمل',
    processTitle: 'من الفكرة إلى التنفيذ بسهولة وثقة.',
    process1Title: 'الاستماع والفهم',
    process1Text:
      'نبدأ بفهم فكرتك، جمهورك، وأهدافك، ثم نضع خارطة طريق واضحة.',
    process2Title: 'التصميم والتخطيط',
    process2Text:
      'نقوم بتصميم واجهات عملية وممتازة، مع صياغة أفضل تجربة مستخدم قبل التطوير.',
    process3Title: 'التطوير والتجربة',
    process3Text:
      'نطور التطبيق بدقة، نجري اختبارات، ونضمن أنه جاهز للاستعمال الفعلي.',
    process4Title: 'الإطلاق والدعم',
    process4Text:
      'نقف معك بعد الإطلاق، نتابع الأداء، ونؤمن لك دعمًا مستمرًا للنمو.',

    workEyebrow: 'آخر أعمالنا',
    workTitle: 'تطبيقات نفخر بها.',
    workDescription:
      'نعمل على مشاريع متنوعة تجمع بين الفكرة الجيدة والتصميم الذكي والوظائف العملية، بهدف صناعة حلول رقمية تُحدث فرقًا حقيقيًا.',
    amanDesc:
      'تطبيق ذكي يساعد المستخدمين على كشف محاولات النصب والاحتيال، مع واجهة واضحة وسهلة الاستخدام.',
    qatraDesc:
      'منصة تبرع بالدم تربط المتبرعين بالمحتاجين بسرعة، مع تجربة مستخدم مريحة وسريعة.',
    bankyDesc:
      'تطبيق يساعد المهتمين بالمجال المصرفي على الاستعداد والتعلم من خلال تجربة تفاعلية ومحتوى متنوع.',
    talabatakDesc:
      'تطبيق تسوق إلكتروني يسهّل شراء الاحتياجات اليومية، مع تصميم أنيق ووظائف عملية.',

    reviewsLabel: 'آراء العملاء',
    reviewsTitle: 'ما يقول عملاؤنا عنا',
    reviewsText:
      'نفخر بثقة عملائنا وتقييماتهم الإيجابية. اطّلع على تجارب الشركات والمشاريع التي عملنا معها.',
    stars: 'من 5 نجوم',
    reviewsCount: 'تقييم وآراء',

    reviewFormTitle: 'أضف مراجعة جديدة',
    reviewFormText: 'أدخل بيانات العميل وشارك رأيه عن خدمتنا.',
    nameLabel: 'اسم العميل',
    namePlaceholder: 'مثل: علي محمد',
    roleLabel: 'المنصب / الدور',
    rolePlaceholder: 'مثل: مؤسس شركة',
    projectLabel: 'نوع المشروع',
    projectPlaceholder: 'مثل: Android App',
    ratingLabel: 'التقييم',
    rating5: '5 نجوم',
    rating4: '4 نجوم',
    rating3: '3 نجوم',
    rating2: '2 نجوم',
    rating1: '1 نجمة',
    reviewTextLabel: 'محتوى المراجعة',
    reviewPlaceholder:
      'اكتب رأيك عن الخدمة وتجربتك مع فريقنا...',
    addReview: 'إضافة المراجعة',

    ctaEyebrow: 'لديك مشروع او فكرة؟',
    ctaTitle: 'لنصنع شيئًا مميزًا',
    ctaTitle2: 'معًا.',
    ctaText:
      'أخبرنا عن مشروعك، ودعنا نحولها إلى تجربة رقمية ناجحة.',
    ctaButton: 'ابدأ محادثتك الآن',
    emailLabel: 'البريد الإلكتروني',

    footer: 'جميع الحقوق محفوظة.',
    reviewDefaultRole: 'عميل',
    projectDefault: 'Project',
    reviewValidation: 'يرجى تعبئة جميع الحقول قبل الإرسال.',
    reviewSuccess: '✓ تمت إضافة مراجعتك بنجاح! شكرًا لك.',
    ratingAria: 'تقييم {rating} من 5'
  },

  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navServices: 'Services',
    navWork: 'Our Work',
    navReviews: 'Reviews',
    navCta: 'Start Your Project',

    heroEyebrow: 'BETTA TECHNOLOGIES',
    heroTitle: 'We turn ambitious ideas',
    heroTitleSpan: 'into impactful apps.',
    heroText:
      'We create smart digital experiences that turn your ideas into powerful, easy-to-use applications ready to grow with your business.',
    heroStart: 'Start Your Idea',
    heroWork: 'View Our Work',
    stat1: 'Apps Developed',
    stat2: 'Trusted Clients',
    stat3: 'Support & Follow-up',

    aboutLabel: 'About Us',
    aboutTitle: 'Your technology partner from idea to tangible success.',
    aboutText:
      'At Betta Technologies, we help businesses and entrepreneurs turn ideas into digital experiences that grow and create real impact. We work with you from the first idea through launch and beyond, with a strong focus on quality, clarity, and results.',
    check1: 'Digital strategy tailored to your business',
    check2: 'Comfortable and effective UI/UX design',
    check3: 'Fast development with high quality and reliability',
    years: 'Years of Experience',
    tasks: 'Completed Projects',
    direct: 'Direct Communication',

    servicesEyebrow: 'WHAT WE OFFER',
    servicesTitle: 'Services designed to grow your business.',
    service1Title: 'Mobile Applications',
    service1Text:
      'We develop fast and smooth Android applications that turn your idea into an unforgettable user experience and support your business growth.',
    service2Title: 'Innovative Digital Solutions',
    service2Text:
      'We create smart, customized systems aligned with your goals, from planning to execution, making your business more efficient and effective.',
    service3Title: 'User Experience Design',
    service3Text:
      'Modern and clear interfaces that make every interaction easier, more responsive, and help create a strong impression on users.',

    processLabel: 'HOW WE WORK',
    processTitle: 'From idea to execution with ease and confidence.',
    process1Title: 'Listen & Understand',
    process1Text:
      'We start by understanding your idea, audience, and goals, then create a clear roadmap.',
    process2Title: 'Design & Planning',
    process2Text:
      'We design practical and polished interfaces and define the best user experience before development.',
    process3Title: 'Development & Testing',
    process3Text:
      'We develop the application carefully, run tests, and make sure it is ready for real-world use.',
    process4Title: 'Launch & Support',
    process4Text:
      'We stay with you after launch, monitor performance, and provide continuous support for growth.',

    workEyebrow: 'OUR WORK',
    workTitle: 'Apps we are proud of.',
    workDescription:
      'We work on diverse projects that combine great ideas, smart design, and practical functionality to create digital solutions that make a real difference.',
    amanDesc:
      'A smart app that helps users detect scams and fraud attempts through a clear and easy-to-use interface.',
    qatraDesc:
      'A blood donation platform that quickly connects donors with people in need through a smooth and fast user experience.',
    bankyDesc:
      'An app that helps banking enthusiasts prepare and learn through an interactive experience and diverse content.',
    talabatakDesc:
      'An e-commerce app that makes everyday shopping easier with elegant design and practical features.',

    reviewsLabel: 'CLIENT REVIEWS',
    reviewsTitle: 'What our clients say about us',
    reviewsText:
      'We are proud of our clients’ trust and positive feedback. Explore the experiences of businesses and projects we have worked with.',
    stars: 'out of 5 stars',
    reviewsCount: 'Reviews & Ratings',

    reviewFormTitle: 'Add a New Review',
    reviewFormText: 'Enter the client details and share their experience with our service.',
    nameLabel: 'Client Name',
    namePlaceholder: 'e.g. Ali Mohamed',
    roleLabel: 'Position / Role',
    rolePlaceholder: 'e.g. Company Founder',
    projectLabel: 'Project Type',
    projectPlaceholder: 'e.g. Android App',
    ratingLabel: 'Rating',
    rating5: '5 Stars',
    rating4: '4 Stars',
    rating3: '3 Stars',
    rating2: '2 Stars',
    rating1: '1 Star',
    reviewTextLabel: 'Review Content',
    reviewPlaceholder:
      'Write your opinion about our service and your experience with our team...',
    addReview: 'Add Review',

    ctaEyebrow: 'HAVE A PROJECT OR IDEA?',
    ctaTitle: 'Let’s create something amazing',
    ctaTitle2: 'together.',
    ctaText:
      'Tell us about your project and let us turn it into a successful digital experience.',
    ctaButton: 'Start a Conversation',
    emailLabel: 'Email',

    footer: 'All rights reserved.',
    reviewDefaultRole: 'Client',
    projectDefault: 'Project',
    reviewValidation: 'Please fill in all fields before submitting.',
    reviewSuccess: '✓ Your review was added successfully! Thank you.',
    ratingAria: 'Rating {rating} out of 5'
  }
};

/* =========================
   HELPER FUNCTIONS
========================= */

function getLanguage() {
  return localStorage.getItem(languageKey) || 'ar';
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function getReviews() {
  try {
    const saved = localStorage.getItem(storageKey);

    if (!saved) {
      return defaultReviews;
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) && parsed.length
      ? parsed
      : defaultReviews;
  } catch (error) {
    console.error('Error loading reviews:', error);
    return defaultReviews;
  }
}

function saveReviews(reviews) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(reviews));
  } catch (error) {
    console.error('Error saving reviews:', error);
  }
}

function getStars(rating) {
  const filled = '★'.repeat(rating);
  const empty = '☆'.repeat(5 - rating);
  return filled + empty;
}

/* =========================
   RENDER REVIEWS
========================= */

function renderReviews() {
  if (!reviewsGrid) return;

  const lang = getLanguage();
  const t = translations[lang];
  const reviews = getReviews();

  const firstLetter = (str) =>
    (str || (lang === 'ar' ? 'م' : 'C')).charAt(0);

  reviewsGrid.innerHTML = reviews
    .map((review) => {
      const role =
        lang === 'en'
          ? review.roleEn || review.role || 'Client'
          : review.role || 'عميل';

      const reviewText =
        lang === 'en'
          ? review.textEn || review.text || ''
          : review.text || '';

      return `
        <article class="review-card">
          <div class="review-header">
            <div class="reviewer-info">
              <div class="reviewer-avatar">${firstLetter(review.name)}</div>
              <div>
                <h3>${review.name || (lang === 'ar' ? 'بدون اسم' : 'No Name')}</h3>
                <span>${role}</span>
              </div>
            </div>

            <div class="review-rating" aria-label="${t.ratingAria.replace(
              '{rating}',
              review.rating || 5
            )}">
              <span class="stars">${getStars(review.rating || 5)}</span>
            </div>
          </div>

          <p class="review-text">"${reviewText}"</p>

          <div class="review-meta">
            <span class="project-tag">
              ${review.project || t.projectDefault}
            </span>
            <span class="date">${new Date().getFullYear()}</span>
          </div>
        </article>
      `;
    })
    .join('');
}

/* =========================
   APPLY LANGUAGE
========================= */

function applyLanguage(lang) {
  const t = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  localStorage.setItem(languageKey, lang);

  if (languageButton) {
    languageButton.textContent = lang === 'ar' ? 'English' : 'العربية';
    languageButton.setAttribute(
      'aria-label',
      lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'
    );
  }

  /* Navigation */
  setText('.nav-links a[href="#about"]', t.navAbout);
  setText('.nav-links a[href="#services"]', t.navServices);
  setText('.nav-links a[href="#work"]', t.navWork);
  setText('.nav-links a[href="#reviews"]', t.navReviews);
  setText('.nav-links .nav-cta', t.navCta);

  const brand = document.querySelector('.brand.logo-brand');
  if (brand) {
    brand.setAttribute(
      'aria-label',
      lang === 'ar'
        ? 'Betta Technologies - الرئيسية'
        : 'Betta Technologies - Home'
    );
  }

  /* Hero */
  setText('.hero-copy .eyebrow', t.heroEyebrow);

  const heroTitle = document.querySelector('.hero-copy h1');
  if (heroTitle) {
    heroTitle.innerHTML = `${t.heroTitle}<br /><span>${t.heroTitleSpan}</span>`;
  }

  setText('.hero-text', t.heroText);
  setText('.hero-actions .primary', t.heroStart + ' ');
  setText('.hero-actions .secondary', t.heroWork);

  const heroPrimary = document.querySelector('.hero-actions .primary');
  if (heroPrimary) {
    heroPrimary.innerHTML = `${t.heroStart} <span>${lang === 'ar' ? '←' : '→'}</span>`;
  }

  const numbers = document.querySelectorAll('.numbers div span');

  if (numbers[0]) numbers[0].textContent = t.stat1;
  if (numbers[1]) numbers[1].textContent = t.stat2;
  if (numbers[2]) numbers[2].textContent = t.stat3;

  /* About */
  setText('.about .section-label', t.aboutLabel);
  setText('.about h2', t.aboutTitle);
  setText('.about-grid > div:first-child > p', t.aboutText);

  const checks = document.querySelectorAll('.check-list li');
  if (checks[0]) checks[0].textContent = t.check1;
  if (checks[1]) checks[1].textContent = t.check2;
  if (checks[2]) checks[2].textContent = t.check3;

  const miniStats = document.querySelectorAll('.mini-stat span');
  if (miniStats[0]) miniStats[0].textContent = t.years;
  if (miniStats[1]) miniStats[1].textContent = t.tasks;
  if (miniStats[2]) miniStats[2].textContent = t.direct;

  /* Services */
  setText('.services-section .eyebrow', t.servicesEyebrow);
  setText('.services-section h2', t.servicesTitle);

  const serviceCards = document.querySelectorAll('.service-card');

  if (serviceCards[0]) {
    setText('.service-card:nth-child(1) h3', t.service1Title);
    setText('.service-card:nth-child(1) p', t.service1Text);
  }

  if (serviceCards[1]) {
    setText('.service-card:nth-child(2) h3', t.service2Title);
    setText('.service-card:nth-child(2) p', t.service2Text);
  }

  if (serviceCards[2]) {
    setText('.service-card:nth-child(3) h3', t.service3Title);
    setText('.service-card:nth-child(3) p', t.service3Text);
  }

  /* Process */
  setText('.process-section .section-label', t.processLabel);
  setText('.process-section h2', t.processTitle);

  const processCards = document.querySelectorAll('.process-card');

  if (processCards[0]) {
    setText('.process-card:nth-child(1) h3', t.process1Title);
    setText('.process-card:nth-child(1) p', t.process1Text);
  }

  if (processCards[1]) {
    setText('.process-card:nth-child(2) h3', t.process2Title);
    setText('.process-card:nth-child(2) p', t.process2Text);
  }

  if (processCards[2]) {
    setText('.process-card:nth-child(3) h3', t.process3Title);
    setText('.process-card:nth-child(3) p', t.process3Text);
  }

  if (processCards[3]) {
    setText('.process-card:nth-child(4) h3', t.process4Title);
    setText('.process-card:nth-child(4) p', t.process4Text);
  }

  /* Work */
  setText('.work-eyebrow', t.workEyebrow);
  setText('.work-title', t.workTitle);
  setText('.work-description', t.workDescription);

  setText('.project-card:nth-child(1) p', t.amanDesc);
  setText('.project-card:nth-child(2) p', t.qatraDesc);
  setText('.project-card:nth-child(3) p', t.bankyDesc);
  setText('.project-card:nth-child(4) p', t.talabatakDesc);

  /* Reviews */
  setText('.reviews-header .section-label', t.reviewsLabel);
  setText('.reviews-header h2', t.reviewsTitle);
  setText('.reviews-header > div:first-child > p', t.reviewsText);

  setText('.stat-item:nth-child(1) p', t.stars);
  setText('.stat-item:nth-child(2) p', t.reviewsCount);

  setText('.review-form h3', t.reviewFormTitle);
  setText('.review-form .form-header p', t.reviewFormText);

  const labels = document.querySelectorAll('.form-grid label');

  if (labels[0]) {
    setText('.form-grid label:nth-child(1) span', t.nameLabel);
    const input = labels[0].querySelector('input');
    if (input) input.placeholder = t.namePlaceholder;
  }

  if (labels[1]) {
    setText('.form-grid label:nth-child(2) span', t.roleLabel);
    const input = labels[1].querySelector('input');
    if (input) input.placeholder = t.rolePlaceholder;
  }

  if (labels[2]) {
    setText('.form-grid label:nth-child(3) span', t.projectLabel);
    const input = labels[2].querySelector('input');
    if (input) input.placeholder = t.projectPlaceholder;
  }

  if (labels[3]) {
    setText('.form-grid label:nth-child(4) span', t.ratingLabel);

    const options = labels[3].querySelectorAll('option');

    if (options[0]) options[0].textContent = t.rating5;
    if (options[1]) options[1].textContent = t.rating4;
    if (options[2]) options[2].textContent = t.rating3;
    if (options[3]) options[3].textContent = t.rating2;
    if (options[4]) options[4].textContent = t.rating1;
  }

  const fullWidthLabel = document.querySelector('.review-form .full-width');

  if (fullWidthLabel) {
    setText('.full-width span', t.reviewTextLabel);

    const textarea = fullWidthLabel.querySelector('textarea');

    if (textarea) {
      textarea.placeholder = t.reviewPlaceholder;
    }
  }

  setText('.form-submit', t.addReview);

  /* CTA */
  setText('.cta .eyebrow', t.ctaEyebrow);

  const ctaTitle = document.querySelector('.cta h2');

  if (ctaTitle) {
    ctaTitle.innerHTML = `${t.ctaTitle}<br />${t.ctaTitle2}`;
  }

  setText('.cta > p:not(.eyebrow)', t.ctaText);
  setText('.cta .button.light', t.ctaButton);

  setText('.contact-details a:first-child span', t.emailLabel);

  /* Footer */
  const footerText = document.querySelector('footer p');

  if (footerText) {
    footerText.innerHTML = `© <span id="year">${new Date().getFullYear()}</span> Betta Technologies. ${t.footer}`;
  }

  renderReviews();
}

/* =========================
   MENU
========================= */

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');

    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

/* =========================
   REVIEW FORM
========================= */

if (reviewForm) {
  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const lang = getLanguage();
    const t = translations[lang];

    const formData = new FormData(reviewForm);

    const name = String(formData.get('name') || '').trim();
    const role = String(formData.get('role') || '').trim();
    const project = String(formData.get('project') || '').trim();
    const rating = Number(formData.get('rating') || 5);
    const text = String(formData.get('text') || '').trim();

    if (!name || !role || !project || !text) {
      if (formStatus) {
        formStatus.textContent = t.reviewValidation;
        formStatus.style.color = '#d9534f';
      }

      return;
    }

    const reviews = getReviews();

    const newReview = {
      name,
      role,
      project,
      rating,
      text
    };

    const updatedReviews = [newReview, ...reviews].slice(0, 20);

    saveReviews(updatedReviews);

    renderReviews();

    reviewForm.reset();

    if (formStatus) {
      formStatus.textContent = t.reviewSuccess;
      formStatus.style.color = '#5cb85c';

      setTimeout(() => {
        formStatus.textContent = '';
      }, 4000);
    }
  });
}

/* =========================
   LANGUAGE BUTTON
========================= */

if (languageButton) {
  languageButton.addEventListener('click', () => {
    const currentLanguage = getLanguage();

    const newLanguage =
      currentLanguage === 'ar'
        ? 'en'
        : 'ar';

    applyLanguage(newLanguage);
  });
}

/* =========================
   INITIALIZE
========================= */

applyLanguage(getLanguage());
