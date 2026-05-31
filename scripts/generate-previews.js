const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "assets", "previews");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "index.json"), "utf8"));

async function captureTemplate(page, template) {
  const slug = template.slug;
  const htmlPath = path.join(root, "templates", slug, "template.html");
  await page.goto(`file://${htmlPath}`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(800);

  const slideCount = await page.$$eval(".slide", (slides) => slides.length).catch(() => 0);
  const picks = slideCount > 0
    ? [0, Math.min(1, slideCount - 1), Math.min(2, slideCount - 1)]
    : [0, 0, 0];
  const labels = ["cover", "mid", "later"];

  for (let i = 0; i < labels.length; i += 1) {
    if (slideCount) {
      await page.evaluate((slideIndex) => {
        if (typeof window.goTo === "function") {
          window.goTo(slideIndex);
          return;
        }
        const slides = Array.from(document.querySelectorAll(".slide"));
        const target = slides[slideIndex] || slides[0];
        const deck = document.querySelector("#deck");
        if (deck && typeof deck.scrollTo === "function") {
          deck.scrollLeft = target.offsetLeft;
        } else {
          const scroller = document.scrollingElement || document.documentElement;
          scroller.scrollTop = target.offsetTop;
          scroller.scrollLeft = target.offsetLeft;
          document.documentElement.scrollTop = target.offsetTop;
          document.documentElement.scrollLeft = target.offsetLeft;
          document.body.scrollTop = target.offsetTop;
          document.body.scrollLeft = target.offsetLeft;
        }
      }, picks[i]);
      await page.waitForTimeout(800);
    }

    const png = await page.screenshot({ fullPage: false, animations: "disabled" });
    const outPath = path.join(outDir, `${slug}-${labels[i]}.jpg`);
    await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toFile(outPath);
  }

  console.log(`${slug}: captured approved template pages ${picks.map((index) => index + 1).join(", ")}`);
}

async function main() {
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 750 },
    deviceScaleFactor: 1,
  });

  for (const template of catalog.templates) {
    await captureTemplate(page, template);
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
