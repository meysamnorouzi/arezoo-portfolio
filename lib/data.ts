export type CaseStudy = {
  slug: string;
  title: string;
  role: string;
  headline: string;
  summary: string;
  challenge: string;
  tags: string[];
  prototype?: string;
  links: { label: string; href: string }[];
  opportunities: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  outcomes: { title: string; body: string }[];
  accent: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "coffee-subscription",
    title: "Coffee Subscription",
    role: "Product Designer",
    headline: "Reducing anxiety around replenishment and taste.",
    summary:
      "The key challenge was reducing users’ anxiety around coffee replenishment and taste mismatch. By introducing a pre-subscription taste assessment, users receive coffee tailored to their preferences with automatic recurring delivery, increasing trust and long-term subscription engagement.",
    challenge:
      "People who care about coffee often hesitate to subscribe. They worry the next bag will miss their taste, or that they will run out at the wrong moment. The product needed to replace that uncertainty with a clear, personal path from tasting to recurring delivery.",
    tags: [
      "SUBSCRIPTION",
      "PRODUCT DELIVERY",
      "DISCOVERY",
      "USER RESEARCH",
      "JOURNEY MAPPING",
      "WIREFRAMING",
      "PROTOTYPING",
      "VISUAL DESIGN",
      "WEB",
      "APP",
    ],
    prototype:
      "https://www.figma.com/proto/AiEEnofFfF1uCkvq3wGMed/Coffee-subscription-ui-?node-id=1051-6783&scaling=min-zoom&content-scaling=fixed&page-id=15%3A2&starting-point-node-id=1051%3A6783",
    links: [
      { label: "View in prototype", href: "https://www.figma.com/proto/AiEEnofFfF1uCkvq3wGMed/Coffee-subscription-ui-?node-id=1051-6783&scaling=min-zoom&content-scaling=fixed&page-id=15%3A2&starting-point-node-id=1051%3A6783" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arezoo-jafary" },
      { label: "Dribbble", href: "https://dribbble.com/arezoo-jafary" },
    ],
    opportunities: [
      {
        title: "Taste confidence",
        body: "How might we help people discover a coffee they will actually enjoy before they commit to a subscription?",
      },
      {
        title: "Replenishment without worry",
        body: "How might we make recurring delivery feel reliable instead of risky?",
      },
      {
        title: "Trust before payment",
        body: "How might we turn a first-time visit into a decision people feel ready to make?",
      },
      {
        title: "Long-term engagement",
        body: "How might we keep the experience personal after the first order, so the subscription stays useful?",
      },
    ],
    approach: [
      {
        title: "Research",
        body: "Mapped the anxiety around taste mismatch and running out. Personas, empathy maps, and competitive analysis framed why people stall before they subscribe.",
      },
      {
        title: "Journey & IA",
        body: "Designed a path from taste assessment to first delivery and recurring replenishment, with a sitemap that keeps preference, plan, and timing visible.",
      },
      {
        title: "Prototype",
        body: "Wireframed and prototyped the pre-subscription tasting flow so users could choose with confidence, then move into automatic delivery without losing control.",
      },
    ],
    outcomes: [
      {
        title: "A calmer first decision",
        body: "Taste assessment sits before commitment, so the subscription starts from a preference the user has already seen and chosen.",
      },
      {
        title: "Recurring delivery with trust",
        body: "Automatic replenishment is framed as continuity of a known taste, not a blind repeat order.",
      },
      {
        title: "A fuller product picture",
        body: "The work covers research, personas, journeys, IA, wireframes, and UI across a 30-page experience.",
      },
    ],
    accent: "#c4a574",
  },
  {
    slug: "pico-ai",
    title: "Pico AI",
    role: "Product Designer",
    headline: "Making an AI product readable, clear, and trustworthy in dark mode.",
    summary:
      "The main challenge was maintaining readability and visual clarity in dark mode while educating users about an AI-powered product. By designing a high-contrast, accessibility-first dark mode system and showcasing a dashboard preview, user trust and understanding of the product’s functionality were strengthened.",
    challenge:
      "Pico AI turns ideas into images across styles and moods. In dark mode, the product can easily lose hierarchy, contrast, and meaning. People also need to understand what the AI can do before they trust it with a prompt.",
    tags: [
      "AI",
      "DARK MODE",
      "VISUAL SYSTEMS",
      "ACCESSIBILITY",
      "PRODUCT THINKING",
      "DASHBOARD",
      "VISUAL DESIGN",
      "PROTOTYPING",
      "WEB",
    ],
    prototype:
      "https://www.figma.com/proto/QIxZKaxfjwRyPplANkVZrG/ai?node-id=145-505&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    links: [
      { label: "View in prototype", href: "https://www.figma.com/proto/QIxZKaxfjwRyPplANkVZrG/ai?node-id=145-505&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arezoo-jafary" },
      { label: "Dribbble", href: "https://dribbble.com/arezoo-jafary" },
    ],
    opportunities: [
      {
        title: "Readability first",
        body: "How might we keep type, controls, and generated images clear when the entire product lives in the dark?",
      },
      {
        title: "Teach the product",
        body: "How might we show what the AI can do without a long tutorial?",
      },
      {
        title: "Trust in generation",
        body: "How might we make prompting feel understandable, so people know what will happen next?",
      },
      {
        title: "A system, not a screen",
        body: "How might we define a dark-mode visual system that stays consistent as the product grows?",
      },
    ],
    approach: [
      {
        title: "Visual system",
        body: "Built a high-contrast, accessibility-first dark mode system for surfaces, type, and controls so generated images stay the focus.",
      },
      {
        title: "Dashboard preview",
        body: "Used a dashboard preview to explain the product in context — styles, moods, and output — instead of abstract marketing copy.",
      },
      {
        title: "Product thinking",
        body: "Treated education and generation as one flow: understand the tool, try a prompt, see a result that still reads cleanly in the dark.",
      },
    ],
    outcomes: [
      {
        title: "Clarity in the dark",
        body: "Hierarchy and contrast hold up so people can scan, prompt, and review images without visual noise.",
      },
      {
        title: "Faster understanding",
        body: "The dashboard preview makes the AI’s capability visible, which strengthens trust before the first generation.",
      },
      {
        title: "A reusable system",
        body: "Dark mode is defined as a visual system, not a one-off theme pass.",
      },
    ],
    accent: "#7aa2ff",
  },
  {
    slug: "yogian",
    title: "Yogian",
    role: "Product Designer",
    headline: "Helping people choose a yoga course that fits their body.",
    summary:
      "The main challenge was reducing users’ fear of choosing an unsuitable course due to differences in physical abilities and experience levels. By designing a landing experience aligned with yoga’s core identity, users could confidently select suitable courses and have a smoother onboarding experience.",
    challenge:
      "People arriving at an online yoga offering often stop at the choice. Levels, body needs, and inexperience make the wrong class feel costly. The landing experience had to make fit visible, then carry that confidence into onboarding.",
    tags: [
      "WELLNESS",
      "LANDING",
      "ONBOARDING",
      "USER RESEARCH",
      "INFORMATION ARCHITECTURE",
      "VISUAL DESIGN",
      "PRODUCT DELIVERY",
      "WEB",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arezoo-jafary" },
      { label: "Dribbble", href: "https://dribbble.com/arezoo-jafary" },
    ],
    opportunities: [
      {
        title: "Fit over catalog",
        body: "How might we help someone match a course to their body and experience, not just browse a list?",
      },
      {
        title: "Reduce the wrong-choice fear",
        body: "How might we make levels and physical differences easy to understand before enrollment?",
      },
      {
        title: "An identity that feels true",
        body: "How might the landing carry yoga’s calm and care without becoming vague?",
      },
      {
        title: "Smoother onboarding",
        body: "How might the first session feel like a continuation of the choice, not a new maze?",
      },
    ],
    approach: [
      {
        title: "Positioning",
        body: "Designed the landing around individual difference. Courses are offered in three levels so people can choose from their body’s needs, not a generic promise.",
      },
      {
        title: "Information architecture",
        body: "Made level, intensity, and who the course is for visible early, so comparison happens before commitment.",
      },
      {
        title: "Onboarding",
        body: "Carried the same language from landing into the first steps, so the path from “this is for me” to starting a class stays intact.",
      },
    ],
    outcomes: [
      {
        title: "A more confident choice",
        body: "Level and body-fit are part of the story, which lowers the fear of picking the wrong course.",
      },
      {
        title: "An identity people recognize",
        body: "The landing stays aligned with yoga’s core — calm, personal, and physical — instead of a generic class store.",
      },
      {
        title: "A cleaner start",
        body: "Onboarding continues the same decision, so the first experience feels intended.",
      },
    ],
    accent: "#8fbf9f",
  },
];

export const capabilities = [
  {
    title: "Create Clarity",
    body: "I create shared understanding around your users through research, journeys, and information architecture.",
  },
  {
    title: "Drive Decisions",
    body: "I tie interface decisions to real user anxiety — taste mismatch, unreadability, the wrong course — so teams know what to ship.",
  },
  {
    title: "Deliver Impact",
    body: "I move from wireframes to visual systems and prototypes that can be tested, so the product becomes easier to trust.",
  },
];

export const industries = [
  {
    title: "Subscription Commerce",
    body: "Designing taste-led, recurring experiences that reduce replenishment anxiety and make the next order feel known.",
  },
  {
    title: "AI Products",
    body: "Making generative tools understandable — showing what the product can do before people have to trust a prompt.",
  },
  {
    title: "Dark Mode Systems",
    body: "Building high-contrast, accessibility-first visual systems that stay readable when the product lives in the dark.",
  },
  {
    title: "Wellness & Learning",
    body: "Helping people choose the right class or path for their body and experience, then onboard without friction.",
  },
  {
    title: "Web & App Design",
    body: "Shaping product surfaces across landing, dashboard, and flows with a consistent visual language.",
  },
  {
    title: "Research & Usability",
    body: "Using interviews, journeys, and usability testing to find where people hesitate — then design for that moment.",
  },
];

export const skills = [
  "Web & App Design",
  "User Experience",
  "Usability test",
  "Wireframing & Prototyping",
  "Information Architecture",
  "Customer Journey Mapping",
  "User Research & Usability Testing",
  "Dark Mode & Visual Systems",
  "Product Thinking",
  "Problem Solving",
];

export const education = [
  {
    school: "Kharazmi University",
    program: "Master’s Degree in Housing Planning and Urban Regeneration",
    dates: "Sep 2020 – Jun 2023",
    place: "Tehran",
  },
  {
    school: "Kharazmi University",
    program: "Bachelor of Urban Planning",
    dates: "Sep 2016 – Jun 2019",
    place: "Tehran",
  },
];

export const courses = [
  { school: "Amanj Academy", program: "Product Design" },
  { school: "Design Wich", program: "Product Design" },
  { school: "Maktabkhooneh", program: "Product Management Tools" },
];

export const playbook = [
  {
    label: "DEFINE",
    question: "Who are our users?",
    lead: "I’ll help you define...",
    items: [
      { title: "Needs and Behaviors", body: "What people are trying to do, and where they hesitate." },
      { title: "The Current Experience", body: "The path they take today, including the silent drop-offs." },
      { title: "What Limits Success", body: "Anxiety, mismatch, and moments that break trust." },
    ],
  },
  {
    label: "BASELINE",
    question: "What do we know about the current experience?",
    lead: "I will help you bring clarity around...",
    items: [
      { title: "Frustration", body: "Gaps between intent and what the interface actually allows." },
      { title: "Perceived Value", body: "What makes someone willing to subscribe, generate, or enroll." },
      { title: "Unmet Needs", body: "The problems a landing page or dashboard has not named yet." },
    ],
  },
  {
    label: "STRUCTURE",
    question: "How should the experience be organized?",
    lead: "I’ll work with you to map...",
    items: [
      { title: "Information Architecture", body: "What belongs together, and what must be seen first." },
      { title: "Journeys", body: "The path from first visit to a confident action." },
      { title: "Priorities", body: "Which features earn their place on the first screen." },
    ],
  },
  {
    label: "PROTOTYPE",
    question: "What could a better future look like?",
    lead: "I’ll help you make it tangible...",
    items: [
      { title: "Wireframes", body: "Structure before decoration, so decisions stay honest." },
      { title: "Interactive Prototypes", body: "Flows people can try, not slides they have to imagine." },
      { title: "Direction", body: "Now, next, and later — without losing the core path." },
    ],
  },
  {
    label: "VISUAL",
    question: "How should it look and feel?",
    lead: "I’ll guide the system around...",
    items: [
      { title: "Visual Language", body: "Type, color, and surfaces that match the product’s identity." },
      { title: "Dark Mode & Contrast", body: "Readability first, especially when the UI stays dark." },
      { title: "UI Consistency", body: "A system that still holds as screens multiply." },
    ],
  },
  {
    label: "VALIDATE",
    question: "What prevents users from having the experience we aim for?",
    lead: "I’ll help you test...",
    items: [
      { title: "Usability", body: "Where people pause, misread, or abandon the flow." },
      { title: "Comprehension", body: "Whether the product’s purpose is understood without explanation." },
      { title: "Fit", body: "Whether the choice — plan, prompt, or course — feels like theirs." },
    ],
  },
  {
    label: "OUTCOME",
    question: "How will we improve people’s lives if we do a great job?",
    lead: "I’ll help you reach outcomes that will...",
    items: [
      { title: "Reduce Anxiety", body: "Remove the fear of the wrong coffee, the unread screen, the unfit class." },
      { title: "Build Trust", body: "Make the product understandable before it asks for commitment." },
      { title: "Sustain Use", body: "Keep the experience personal after the first success." },
    ],
  },
];

export const partnerSections = [
  {
    id: "1",
    eyebrow: "01",
    title: "What Changes When I’m Involved.",
    lead: "My role is to help teams see the user clearly, choose what matters, and move from research to an interface people can trust.",
    items: [
      {
        title: "Shared Direction",
        body: "Teams align around the real hesitation — not a list of screens — and collaborate from the same map.",
      },
      {
        title: "Real Momentum",
        body: "Research turns into journeys, IA, and prototypes, so work moves forward with a visible next step.",
      },
      {
        title: "Better Decisions",
        body: "Interface choices are tied to evidence: usability, journeys, and the anxiety the product must remove.",
      },
      {
        title: "Meaningful Outcomes",
        body: "The focus shifts from shipping pages to helping someone subscribe, generate, or enroll with confidence.",
      },
    ],
  },
  {
    id: "2",
    eyebrow: "02",
    title: "How I Work.",
    lead: "I work where product, research, and interface meet — especially when people hesitate and the problem is still fuzzy.",
    items: [
      {
        title: "Research Before Screens",
        body: "Personas, empathy maps, and competitive analysis come first, so the UI is answering a named problem.",
      },
      {
        title: "Structure, Then Visual",
        body: "Sitemaps, journeys, and wireframes lock the path. Visual systems and dark mode come once the path is honest.",
      },
      {
        title: "Prototype To Learn",
        body: "Interactive flows are how we test taste assessment, prompting, or course choice — not how we decorate a deck.",
      },
      {
        title: "Keep The System Usable",
        body: "I care about contrast, hierarchy, and consistency, so the product stays readable as it grows.",
      },
    ],
  },
  {
    id: "3",
    eyebrow: "03",
    title: "Where I Create The Most Value.",
    lead: "I’m most useful when the product is asking people to trust it with a preference, a prompt, or a personal choice.",
    items: [
      {
        title: "Ambiguous First Visits",
        body: "Landings and onboarding where people do not yet know if the product is for them.",
      },
      {
        title: "Complex Made Quiet",
        body: "AI, subscriptions, and multi-level offerings that need to feel simple without hiding the choice.",
      },
      {
        title: "Visual Systems Under Stress",
        body: "Dark mode, dashboards, and product UI that must stay accessible and clear.",
      },
      {
        title: "Strategy To Execution",
        body: "When the insight exists, but it has not become a flow someone can complete.",
      },
    ],
  },
  {
    id: "4",
    eyebrow: "04",
    title: "When I’m The Right Fit.",
    lead: "I’m typically brought in when a team needs to understand users and turn that understanding into a product people can finish.",
    items: [
      {
        title: "Unclear Direction",
        body: "The problem is felt, but the experience is not yet named.",
      },
      {
        title: "Low Trust",
        body: "People bounce because they cannot tell what they will get.",
      },
      {
        title: "A System To Build",
        body: "The work needs research, IA, UI, and a prototype — not only a visual pass.",
      },
    ],
  },
];
