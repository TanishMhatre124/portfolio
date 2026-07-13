import type { Project } from "@/types";

// NOTE: Demo/source URLs were not resolvable from the source portfolio (placeholder links).
// Replace demoUrl / sourceUrl below with real links whenever available — components already
// handle a null value by hiding the corresponding button.

export const projects: Project[] = [
  {
    id: "mutual-fund-analysis",
    slug: "mutual-fund-analysis",
    title: "Mutual Fund Analysis",
    tagline: "A Streamlit app for mutual fund performance analysis and insights.",
    description:
      "An interactive Streamlit app that analyzes mutual fund performance, visualizes returns, and helps investors compare funds using key metrics.",
    image: "/images/mutualfund.jpeg",
    gallery: ["/images/mutualfund.jpeg"],
    categories: ["AI", "Machine Learning", "Research"],
    techStack: ["Local LLMs", "ONNX Runtime", "RAG", "Python", "Llama 3.2-3B"],
    highlights: [
      "Cut inference time by 40% with ONNX Runtime optimization",
      "Improved answer accuracy by 85% with a custom RAG pipeline",
      "Reduced memory footprint by 60% for low-resource hardware",
    ],
    demoUrl: "https://mutualfundanalysis-app.streamlit.app/",
    sourceUrl: "https://github.com/TanishMhatre124/MUTUAL_FUND_ANALYSIS.git",
    featured: true,
    overview:
      "Tutor.AI is a locally-run teaching assistant designed for schools where internet access is unreliable or unavailable. Instead of depending on a cloud API, the entire model runs on-device, which meant every design decision had to account for constrained compute.",
    problem:
      "Cloud-based AI tutoring tools are unusable in areas with poor connectivity, and per-query API costs make them impractical to run at scale in low-resource schools. A capable assistant needed to run entirely offline, on modest hardware, without sacrificing answer quality.",
    solution:
      "I deployed Llama 3.2-3B locally and converted it to ONNX format to exploit runtime-level graph optimizations, cutting inference latency significantly. On top of the base model, I built a retrieval-augmented generation pipeline that grounds answers in curriculum-specific material, rather than relying on the model's raw parametric knowledge — which materially improved factual accuracy.",
    architecture:
      "The system runs a quantized ONNX build of Llama 3.2-3B as the generation backbone. A lightweight retrieval layer indexes curriculum documents and injects the most relevant passages into the prompt context before generation, keeping the whole pipeline self-contained on a single machine with no network dependency.",
    workflow: [
      "Curriculum documents are chunked and embedded into a local vector index",
      "A student query is embedded and matched against the index for relevant context",
      "Retrieved passages are injected into the prompt sent to the local model",
      "The ONNX-optimized model generates a grounded response entirely offline",
    ],
    features: [
      "Fully offline inference — no internet dependency after setup",
      "Retrieval-augmented answers grounded in real curriculum content",
      "Optimized for low-memory, low-compute classroom hardware",
    ],
    challenges: [
      {
        heading: "Fitting a capable model into constrained hardware",
        body: "Running a 3B-parameter model on modest classroom machines meant memory usage had to drop substantially without gutting response quality. Quantization and ONNX graph optimization got memory down by 60% while keeping answers usable.",
      },
      {
        heading: "Keeping answers accurate without internet-scale retrieval",
        body: "A small local model without grounding tends to hallucinate confidently. Building a retrieval pipeline scoped to the actual curriculum — rather than the open web — was what made the accuracy gain possible.",
      },
    ],
    results: [
      "40% reduction in inference time versus the unoptimized baseline",
      "85% improvement in answer accuracy after introducing the RAG pipeline",
      "60% lower memory usage, making deployment viable on low-spec hardware",
    ],
    lessonsLearned: [
      "Retrieval quality often matters more than model size for domain-specific accuracy.",
      "Runtime-level optimization (ONNX) can unlock deployments that would otherwise be infeasible on constrained hardware.",
    ],
    futureImprovements: [
      "Expand the curriculum index to additional subjects and grade levels",
      "Add multilingual support for regional-language instruction",
    ],
  },
  {
    id: "fitfarm",
    slug: "fitfarm-smart-agriculture-system",
    title: "FitFarm — Smart Agriculture System",
    tagline: "IoT sensing and ML crop prediction for smallholder farms.",
    description:
      "An IoT-and-ML system that reads live soil conditions and recommends optimal crops, published as peer-reviewed research and piloted directly with rural farming communities.",
    image: "/images/proj3.jpeg",
    gallery: ["/images/proj3.jpeg"],
    categories: ["Machine Learning", "Python", "Data Science", "Research"],
    techStack: ["Python", "IoT", "Machine Learning", "Decision Trees", "SVM", "Random Forest", "Naive Bayes"],
    highlights: [
      "93% accuracy in crop prediction across four ML models",
      "Real-time soil monitoring via integrated IoT sensors",
      "Findings published in IJRASET, a peer-reviewed journal",
    ],
    demoUrl: null,
    sourceUrl: null,
    featured: true,
    overview:
      "FitFarm pairs low-cost IoT soil sensors with a machine learning pipeline that recommends the best crop for a given plot, aimed at farmers with no technical background and limited access to agronomists.",
    problem:
      "Smallholder farmers often lack access to timely, accurate information about soil conditions, leading to crop choices based on habit rather than data — and to avoidable losses in yield.",
    solution:
      "I built a pipeline combining Decision Trees, SVMs, Random Forests, and Naive Bayes classifiers, benchmarked against each other to select the strongest performer for crop recommendation. IoT sensors feed live pH, moisture, nutrient, and temperature readings into the pipeline continuously, so recommendations reflect current field conditions rather than static assumptions.",
    architecture:
      "IoT sensor nodes deployed in the field capture soil pH, moisture, nutrient composition, and temperature at regular intervals and transmit readings to a central pipeline. The ML layer ingests this stream, runs it through the trained classification models, and surfaces a crop recommendation without requiring the farmer to interpret raw sensor data.",
    workflow: [
      "IoT sensors capture live soil pH, moisture, nutrients, and temperature",
      "Readings are transmitted to the prediction pipeline",
      "Trained classifiers evaluate conditions against historical crop-yield data",
      "The system surfaces a recommended crop in plain terms",
    ],
    features: [
      "Continuous, automated soil monitoring — no manual testing required",
      "Model benchmarking across four classifier families for best accuracy",
      "Designed for use without any technical expertise",
    ],
    challenges: [
      {
        heading: "Choosing the right model for noisy, real-world sensor data",
        body: "Field sensor data is noisier than lab data. Benchmarking Decision Trees, SVMs, Random Forests, and Naive Bayes against each other — rather than committing to one algorithm upfront — was what got the pipeline to 93% accuracy.",
      },
      {
        heading: "Making the output usable for non-technical farmers",
        body: "A model output is only useful if someone can act on it. The interface deliberately surfaces a single recommended crop rather than raw probabilities or sensor values.",
      },
    ],
    results: [
      "93% crop-prediction accuracy across benchmarked models",
      "Deployed and piloted directly in rural farming communities",
      "Measurable yield improvement through better-informed crop selection",
      "Methodology published in the International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
    ],
    lessonsLearned: [
      "Field-deployed ML needs to be validated against real sensor noise, not just clean training data.",
      "The best model is the one whose output the end user will actually trust and act on.",
    ],
    futureImprovements: [
      "Extend sensor coverage to more soil and micro-climate variables",
      "Add a lightweight mobile app for farmers to view recommendations offline",
    ],
  },
  {
    id: "zinzraa",
    slug: "zinzraa-ecommerce-platform",
    title: "Zinzraa — E-commerce Platform",
    tagline: "A MERN-stack storefront built for conversion, not just checkout.",
    description:
      "A full e-commerce platform on the MERN stack with a built-in CRM, automated email marketing, and technical SEO — engineered around measurable engagement and conversion outcomes.",
    image: "/images/proj3.jpeg",
    gallery: ["/images/proj3.jpeg"],
    categories: ["Full Stack", "Frontend", "Backend"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Vite"],
    highlights: [
      "20% increase in user engagement, 15% lower bounce rate",
      "30% increase in conversion rate via technical SEO",
      "Built-in CRM with automated email marketing",
    ],
    demoUrl: null,
    sourceUrl: null,
    featured: true,
    overview:
      "Zinzraa is a full-featured e-commerce platform built on the MERN stack, covering everything from the storefront to a CRM for customer relationships and marketing automation.",
    problem:
      "The store needed more than a functioning checkout — it needed a responsive, fast experience that kept visitors engaged, plus infrastructure to turn one-time buyers into repeat customers, and enough SEO groundwork to be found in the first place.",
    solution:
      "I architected the platform end-to-end: a responsive React front end with deliberate navigation patterns, an Express/Node backend, MongoDB for data, and a CRM layer for customer data, automated email campaigns, and personalized recommendations. Technical SEO — schema markup, content and site-level optimization — was built in rather than bolted on afterward.",
    architecture:
      "A React.js single-page front end (built with Vite) communicates with an Express.js API layer backed by MongoDB. The CRM and analytics tooling sit alongside the core commerce flow, tracking user behavior across the funnel to inform both marketing automation and UX decisions.",
    workflow: [
      "Customer browses a responsive React storefront",
      "Behavior and purchase data flow into the CRM layer",
      "Automated email campaigns and recommendations are triggered from that data",
      "SEO and analytics tooling feed back into ongoing optimization",
    ],
    features: [
      "Responsive storefront with intuitive navigation across devices",
      "Integrated CRM with automated email marketing campaigns",
      "Personalized product recommendations",
      "Schema markup and technical SEO built into the platform",
    ],
    challenges: [
      {
        heading: "Balancing engagement gains with bounce-rate reduction",
        body: "Improving engagement and reducing bounce rate can pull in different directions — richer pages can slow load times. Responsive design decisions were made with performance budgets in mind, landing both a 20% engagement increase and a 15% bounce-rate drop.",
      },
      {
        heading: "Making SEO gains measurable, not just theoretical",
        body: "Schema markup and technical SEO only matter if they move real numbers. Tracking conversion rate before and after rollout confirmed a 30% increase tied directly to the SEO work.",
      },
    ],
    results: [
      "20% increase in user engagement across device types",
      "15% reduction in bounce rate",
      "30% increase in conversion rate following SEO improvements",
      "Meaningful growth in online sales revenue attributed to the combined CRM and SEO work",
    ],
    lessonsLearned: [
      "CRM and marketing automation compound the value of good UX — neither works as well alone.",
      "SEO investment pays off fastest when it's measured against conversion, not just traffic.",
    ],
    futureImprovements: [
      "A/B test checkout flow variants to push conversion further",
      "Expand personalization using purchase-history-based recommendations",
    ],
  },
  {
    id: "fittify",
    slug: "fittify-health-platform",
    title: "Fittify — One-Stop Health Platform",
    tagline: "A full-stack health platform that scaled from an 150-student pilot to 500+ active users.",
    description:
      "A full-stack health monitoring platform delivering personalized diet and workout recommendations, built with secure authentication and HIPAA-compliant data storage.",
    image: "/images/proj3.jpeg",
    gallery: ["/images/proj3.jpeg"],
    categories: ["Full Stack", "Frontend", "Backend"],
    techStack: ["React.js", "Node.js", "Tailwind CSS", "MERN"],
    highlights: [
      "95% user satisfaction in a 150-student pilot",
      "Scaled to 500+ active users",
      "25% improvement in tracked health metrics",
    ],
    demoUrl: null,
    sourceUrl: null,
    featured: true,
    overview:
      "Fittify is a full-stack health monitoring platform that generates personalized diet and workout recommendations from a user's health metrics, then tracks progress over time.",
    problem:
      "Generic fitness plans ignore individual health metrics and rarely account for data privacy requirements, while most platforms struggle to hold onto users past the first few weeks.",
    solution:
      "I built a React front end with secure authentication and HIPAA-compliant data storage for medical records, backed by a Node.js API. A recommendation engine translates BMI, health metrics, and fitness goals into personalized diet plans and workout routines, with real-time analytics so users can see their own progress.",
    architecture:
      "React.js (styled with Tailwind CSS) handles the front end, communicating with a Node.js backend that manages authentication, secure medical-record storage, and the recommendation engine. Database indexing, API optimization, and caching were added as usage scaled past the initial pilot.",
    workflow: [
      "User completes onboarding with health metrics and fitness goals",
      "The recommendation engine generates a personalized diet and workout plan",
      "Progress is tracked and visualized through real-time analytics",
      "Plans adapt as new health data comes in",
    ],
    features: [
      "Secure authentication and HIPAA-compliant medical record storage",
      "Personalized diet plans and workout routines from BMI and health metrics",
      "Real-time analytics and progress visualization",
      "Accessible, responsive interface across devices",
    ],
    challenges: [
      {
        heading: "Scaling from a 150-user pilot to 500+ active users",
        body: "The initial pilot wasn't built for that kind of growth. Database indexing, API optimization, and caching were introduced specifically to keep performance stable as the user base more than tripled.",
      },
      {
        heading: "Handling medical data responsibly",
        body: "Health platforms carry a higher bar for data handling. Authentication and storage were designed around HIPAA-compliant practices from the start, rather than retrofitted after launch.",
      },
    ],
    results: [
      "95% user satisfaction rate in the initial 150-student pilot",
      "25% improvement in tracked health metrics during the pilot",
      "Scaled to 500+ active users while maintaining performance",
      "Improved retention through real-time progress tracking",
    ],
    lessonsLearned: [
      "Performance work (indexing, caching) is easiest to defer and most costly to defer too long.",
      "Visible progress tracking is a meaningful retention lever in health-focused products.",
    ],
    futureImprovements: [
      "Integrate wearable device data for more accurate real-time metrics",
      "Add clinician-facing views for supervised health programs",
    ],
  },
];

export const projectCategories: Project["categories"][number][] = [
  "AI",
  "Machine Learning",
  "Python",
  "Data Engineering",
  "Data Science",
  "Frontend",
  "Backend",
  "Automation",
  "Open Source",
  "Research",
  "Full Stack",
];
