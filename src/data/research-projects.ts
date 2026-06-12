export type ResearchProject = {
  slug: string;
  number: number;
  title: string;
  short: string;
  question: string;
  outputs: string[];
  partnersLabel: "Clients" | "Partners";
  partners: string[];
};

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    slug: "sustainable-tomato-storage",
    number: 1,
    title: "Sustainable Tomato Storage Through Essential Oil Preservation Technologies",
    short: "Natural essential-oil treatments to cut postharvest tomato losses and extend shelf life.",
    question:
      "Can plant-derived essential oils reduce postharvest losses and extend tomato shelf life while maintaining quality and safety?",
    outputs: [
      "Essential oil preservation protocol",
      "Shelf-life prediction model",
      "Scientific publication",
      "Commercial natural preservative formulation",
      "Patent opportunities",
    ],
    partnersLabel: "Clients",
    partners: ["Growers", "Exporters", "Food processors", "Retail supply chains"],
  },
  {
    slug: "circular-economy-aeroponic-chamber",
    number: 2,
    title:
      "Development of a Circular-Economy Smart Aeroponic Growth Chamber Constructed from Upcycled Waste for Flower Production",
    short: "Affordable smart aeroponic systems built from upcycled materials for sustainable horticulture.",
    question:
      "Can upcycled materials be transformed into affordable smart aeroponic systems for sustainable horticulture?",
    outputs: [
      "Prototype growth chamber",
      "Environmental monitoring dashboard",
      "Circular economy case study",
      "Commercial product",
    ],
    partnersLabel: "Clients",
    partners: ["Schools", "Urban farms", "Research centres", "Horticultural businesses"],
  },
  {
    slug: "ai-tomato-stress-prediction",
    number: 3,
    title: "AI-Powered Tomato Stress Prediction System",
    short: "Predicting crop stress from environmental and phenotypic data before symptoms appear.",
    question:
      "Can environmental and phenotypic data predict stress before visible symptoms appear?",
    outputs: [
      "Early warning system",
      "Stress prediction dashboard",
      "SaaS platform",
      "Scientific publication",
    ],
    partnersLabel: "Clients",
    partners: ["Greenhouse growers", "Vertical farms", "Agritech companies"],
  },
  {
    slug: "tomato-yield-optimization-ml",
    number: 4,
    title: "Tomato Yield Optimization Using Machine Learning",
    short: "Identifying the environmental and phenotypic traits that drive maximum tomato yield.",
    question: "Which environmental and phenotypic traits drive maximum tomato yield?",
    outputs: ["Yield prediction model", "Decision support tool", "Grower recommendations"],
    partnersLabel: "Clients",
    partners: ["Commercial growers", "Greenhouse operations", "Research institutions"],
  },
  {
    slug: "greenhouse-digital-twin",
    number: 5,
    title: "Digital Twin of a Greenhouse",
    short: "A virtual greenhouse that predicts crop performance before physical interventions.",
    question:
      "Can a virtual greenhouse predict crop performance before physical interventions occur?",
    outputs: ["Virtual greenhouse platform", "Scenario testing tool", "Climate optimization system"],
    partnersLabel: "Clients",
    partners: ["Greenhouse operators", "Controlled environment agriculture companies"],
  },
  {
    slug: "crop-resilience-biomarker-discovery",
    number: 6,
    title: "Crop Resilience Biomarker Discovery",
    short: "Discovering physiological and molecular biomarkers that predict stress resilience.",
    question:
      "Which physiological and molecular biomarkers predict resilience to environmental stress?",
    outputs: [
      "Biomarker library",
      "Scientific papers",
      "DEFRA funding applications",
      "Breeding targets",
    ],
    partnersLabel: "Clients",
    partners: ["Plant breeders", "Universities", "Government agencies"],
  },
  {
    slug: "climate-smart-agriculture-analytics",
    number: 7,
    title: "Climate-Smart Agriculture Analytics",
    short: "Using environmental data to raise productivity while reducing resource use.",
    question: "How can environmental data improve productivity while reducing resource use?",
    outputs: ["Climate risk dashboard", "Water optimization tools", "Sustainability reports"],
    partnersLabel: "Clients",
    partners: ["Farms", "NGOs", "Government agencies", "Development programmes"],
  },
  {
    slug: "plant-metabolomics-ai",
    number: 8,
    title: "Plant Metabolomics + AI Platform",
    short: "Linking metabolite profiles to crop performance and quality through AI.",
    question: "Can metabolite profiles predict crop performance and quality?",
    outputs: ["Metabolite biomarkers", "Predictive quality models", "Commercial analytics platform"],
    partnersLabel: "Clients",
    partners: ["Plant breeders", "Food companies", "Research institutions"],
  },
  {
    slug: "single-cell-rna-crop-resilience",
    number: 9,
    title: "Single-Cell RNA Sequencing for Crop Resilience",
    short: "Mapping the cell populations that drive plant responses to drought, heat and nutrient stress.",
    question:
      "Which cell populations drive plant responses to drought, heat, and nutrient stress?",
    outputs: [
      "Cell atlases",
      "Stress-response biomarkers",
      "Scientific publications",
      "Funding proposals",
    ],
    partnersLabel: "Clients",
    partners: ["Universities", "Biotechnology companies", "Research institutes"],
  },
  {
    slug: "ai-plant-phenotyping-platform",
    number: 10,
    title: "AI-Assisted Plant Phenotyping Platform",
    short: "Automating plant trait measurement and growth monitoring with AI.",
    question: "Can AI automate plant trait measurement and growth monitoring?",
    outputs: [
      "Automated phenotyping software",
      "Growth monitoring platform",
      "Research publications",
    ],
    partnersLabel: "Clients",
    partners: ["Universities", "Breeders", "Greenhouse companies"],
  },
  {
    slug: "uk-africa-tomato-innovation",
    number: 11,
    title: "UK–Africa Tomato Innovation Programme",
    short: "Advanced greenhouse technologies to improve tomato production and food security across Africa.",
    question:
      "How can advanced greenhouse technologies improve tomato production and food security across Africa?",
    outputs: [
      "Demonstration farms",
      "Training programmes",
      "Collaborative research projects",
      "Technology transfer",
    ],
    partnersLabel: "Partners",
    partners: ["Universities", "NGOs", "Governments", "Agritech companies"],
  },
  {
    slug: "ai-smallholder-farmers-africa",
    number: 12,
    title: "AI for Smallholder Farmers in Africa",
    short: "Affordable AI tools to improve decision-making and productivity for smallholder farmers.",
    question:
      "Can affordable AI tools improve decision-making and productivity for smallholder farmers?",
    outputs: [
      "Farmer advisory platform",
      "Risk prediction tools",
      "Yield forecasting systems",
      "Extension support dashboards",
    ],
    partnersLabel: "Clients",
    partners: ["Smallholder farmers", "NGOs", "Governments", "Development agencies"],
  },
];

export function getResearchProject(slug: string): ResearchProject | undefined {
  return RESEARCH_PROJECTS.find((p) => p.slug === slug);
}
