import { test, expect } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";

test.describe("Hero Component", () => {
  test("passes accessibility checks", async ({ page }) => {
    await page.goto("/");
    await injectAxe(page);
    await checkA11y(page, "#hero", {
      axeOptions: {
        rules: {
          "image-alt": { enabled: true },
        },
      },
    });
  });

  test("performance - page load and render", async ({ page }) => {
    // Start measuring
    const startTime = Date.now();

    // Load the page
    await page.goto("/");

    // Wait for the hero section to be visible
    await page.waitForSelector("#hero");

    // Wait for the image to load
    await page.waitForSelector('img[alt="Luis Almonte"]');

    // Calculate total load time
    const loadTime = Date.now() - startTime;

    // Assert load time is under 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test("image loads with correct attributes", async ({ page }) => {
    await page.goto("/");
    const img = page.locator('img[alt="Luis Almonte"]');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute("src", "/cdn-cgi/image/width=200/me.jpg");
  });

  // Additional visual tests
  test("content is visible and laid out correctly", async ({ page }) => {
    await page.goto("/");

    // Check heading
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Hi, I'm Luis");

    // Check description
    // const description = page.locator("p");
    // await expect(description).toBeVisible();
    // await expect(description).toContainText("Frontend Engineer");
  });
});
