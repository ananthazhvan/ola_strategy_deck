#!/usr/bin/env python3
"""Convert Ola strategy deck HTML to PDF using Playwright."""

import asyncio
from pathlib import Path
from playwright.async_api import async_playwright
from PIL import Image

DECK_HTML = Path("ola-strategy-deck-2.html")
OUTPUT_PDF = Path("TeamName_Round1_TBBT.pdf")
SCREENSHOT_DIR = Path("_slide_screenshots")
SLIDE_COUNT = 12  # cover + 10 content + end credits
WIDTH = 1920
HEIGHT = 1080


async def main():
    SCREENSHOT_DIR.mkdir(exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": WIDTH, "height": HEIGHT})

        file_url = DECK_HTML.resolve().as_uri()
        await page.goto(file_url, wait_until="networkidle")
        await page.wait_for_timeout(1000)  # let graphs render

        screenshots = []
        for i in range(SLIDE_COUNT):
            await page.evaluate(f"showSlide({i})")
            await page.wait_for_timeout(300)  # CSS transition

            shot_path = SCREENSHOT_DIR / f"slide_{i:02d}.png"
            await page.screenshot(path=str(shot_path), full_page=False)
            screenshots.append(shot_path)
            print(f"Captured slide {i}")

        await browser.close()

    # Combine into PDF
    images = [Image.open(s) for s in screenshots]
    first = images[0]
    rest = images[1:]
    first.save(
        OUTPUT_PDF,
        "PDF",
        resolution=150,
        save_all=True,
        append_images=rest,
    )
    print(f"Saved {OUTPUT_PDF} ({len(images)} slides)")


if __name__ == "__main__":
    asyncio.run(main())
