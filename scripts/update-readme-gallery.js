const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const readmePath = path.join(root, "README.md");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "index.json"), "utf8"));

function imageRow(template) {
  const slug = template.slug;
  const name = template.name;
  return [
    "<p>",
    `  <img src="assets/previews/${slug}-cover.jpg" width="32%" alt="${name} cover preview">`,
    `  <img src="assets/previews/${slug}-mid.jpg" width="32%" alt="${name} mid-deck preview">`,
    `  <img src="assets/previews/${slug}-later.jpg" width="32%" alt="${name} later-slide preview">`,
    "</p>",
  ].join("\n");
}

function galleryMarkdown() {
  const sections = catalog.templates.map((template) => [
    `### [${template.name}](templates/${template.slug}/)`,
    "",
    imageRow(template),
    "",
    `> ${template.tagline}`,
  ].join("\n"));

  return [
    "## Gallery",
    "",
    `All ${catalog.template_count} visual presets. The three approved template pages for each preset are shown below. Click any template name to open its folder on GitHub.`,
    "",
    sections.join("\n\n"),
    "",
  ].join("\n");
}

function insertGallery(readme) {
  const gallery = galleryMarkdown();
  const start = "<!-- preview-gallery:start -->";
  const end = "<!-- preview-gallery:end -->";
  const block = `${start}\n${gallery}${end}`;

  const markerPattern = new RegExp(`${start}[\\s\\S]*?${end}`);
  if (markerPattern.test(readme)) {
    return readme.replace(markerPattern, block);
  }

  const installHeading = "\n## Install\n";
  if (!readme.includes(installHeading)) {
    throw new Error("README.md is missing the Install section marker.");
  }
  return readme.replace(installHeading, `\n${block}\n${installHeading}`);
}

const readme = fs.readFileSync(readmePath, "utf8");
fs.writeFileSync(readmePath, insertGallery(readme), "utf8");
console.log("README gallery updated.");
