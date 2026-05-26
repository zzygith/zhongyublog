const fs = require("fs")
const path = require("path")

const slugify = value =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const titleKey = value => slugify(value)

const publicationMetadata = {
  [titleKey(
    "Database-driven and property-constrained inference of molecular composition of petroleum fractions from routine experimental data"
  )]: {
    title:
      "Database-driven and property-constrained inference of molecular composition of petroleum fractions from routine experimental data",
    date: "04/2026",
    dateSort: "2026-04",
  },
  [titleKey(
    "Simultaneous outlier-exclusion and distributionally robust learning through partial optimal transport"
  )]: {
    title:
      "Simultaneous outlier-exclusion and distributionally robust learning through partial optimal transport",
    date: "10/2025",
    dateSort: "2025-10",
  },
  [titleKey(
    "Molecular composition reconstruction of naphtha fractions through data-driven modeling and interpretable optimization"
  )]: {
    title:
      "Molecular composition reconstruction of naphtha fractions through data-driven modeling and interpretable optimization",
    date: "09/2025",
    dateSort: "2025-09",
  },
  [titleKey(
    "Dynamic Process Flexibility Analysis Using Neural Networks and a Volumetric Flexibility Index"
  )]: {
    title:
      "Dynamic Process Flexibility Analysis Using Neural Networks and a Volumetric Flexibility Index",
    date: "03/2025",
    dateSort: "2025-03",
  },
  [titleKey(
    "Novel feasible set learning and process flexibility analysis method using deep neural networks"
  )]: {
    title:
      "Novel feasible set learning and process flexibility analysis method using deep neural networks",
    date: "06/2024",
    dateSort: "2024-06",
  },
  [titleKey(
    "Model Predictive Control for Renal Anemia Treatment through Physics-informed Neural Network"
  )]: {
    title:
      "Model Predictive Control for Renal Anemia Treatment through Physics-informed Neural Network",
    date: "01/2024",
    dateSort: "2024-01",
  },
  [titleKey(
    "Haemoglobin response modelling under erythropoietin treatment: Physiological model-informed machine learning method"
  )]: {
    title:
      "Haemoglobin response modelling under erythropoietin treatment: Physiological model-informed machine learning method",
    date: "08/2023",
    dateSort: "2023-08",
  },
}

const readLabel = (section, label) => {
  const pattern = new RegExp(
    `\\*\\*${label}:\\*\\*\\s*([\\s\\S]*?)(?=\\n\\n\\*\\*|$)`
  )
  const match = section.match(pattern)
  return match ? match[1].trim() : ""
}

const resolveImagePath = (researchDir, imagePath) => {
  if (!imagePath) return ""

  const normalized = imagePath.replace(/\\/g, "/")
  const exactPath = path.join(researchDir, normalized)
  if (fs.existsSync(exactPath)) return normalized

  const directory = path.dirname(normalized)
  const basename = path.basename(normalized, path.extname(normalized))
  const fullDirectory = path.join(researchDir, directory)

  if (!fs.existsSync(fullDirectory)) return normalized

  const match = fs
    .readdirSync(fullDirectory)
    .find(file => path.basename(file, path.extname(file)) === basename)

  return match ? `${directory}/${match}`.replace(/\\/g, "/") : normalized
}

const parseResearchMarkdown = (markdown, researchDir) => {
  const sections = markdown
    .split(/\n(?=##\s+)/)
    .filter(section => section.trim().startsWith("## "))

  return sections.map((section, index) => {
    const rawTitle = section.match(/^##\s+(.+)$/m)[1].trim()
    const metadata = publicationMetadata[titleKey(rawTitle)] || {}
    const title = metadata.title || rawTitle
    const url = (section.match(/^https?:\/\/\S+/m) || [""])[0]
    const imageMatch = readLabel(section, "Image file").match(/`([^`]+)`/)
    const image = imageMatch ? imageMatch[1] : ""

    return {
      order: index,
      date: metadata.date || "",
      dateSort: metadata.dateSort || "0000-00",
      title,
      slug: slugify(title),
      url,
      image: resolveImagePath(researchDir, image),
      summary: readLabel(section, "One-sentence summary"),
      introduction: readLabel(section, "Expanded introduction"),
    }
  })
}

const loadResearchItems = researchDir => {
  const contentPath = path.join(researchDir, "research_content.md")
  const markdown = fs.readFileSync(contentPath, "utf8")
  return parseResearchMarkdown(markdown, researchDir)
}

module.exports = {
  loadResearchItems,
  parseResearchMarkdown,
}
