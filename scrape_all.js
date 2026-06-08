const puppeteer = require('puppeteer');
const fs = require('fs');

const pagesToScrape = [
  { name: 'dashboard', url: 'https://du.3nethra.net/dashboard' },
  { name: 'analytics', url: 'https://du.3nethra.net/analytics-reports' },
  { name: 'live_monitoring', url: 'https://du.3nethra.net/live-cameras' },
  { name: 'search_investigation', url: 'https://du.3nethra.net/nvr' },
  { name: 'alerts', url: 'https://du.3nethra.net/alerts' },
  { name: 'detections', url: 'https://du.3nethra.net/detection-analytics' },
  { name: 'parking', url: 'https://du.3nethra.net/parking-management' },
  { name: 'user_management', url: 'https://du.3nethra.net/user-management' },
  { name: 'groups', url: 'https://du.3nethra.net/groups' },
  { name: 'escalation_chain', url: 'https://du.3nethra.net/escalation-chain' },
  { name: 'alert_rules', url: 'https://du.3nethra.net/alert-rules' },
  { name: 'manage_locations', url: 'https://du.3nethra.net/manage-locations' }
];

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1280, height: 800 });

  console.log('Navigating to https://du.3nethra.net/');
  await page.goto('https://du.3nethra.net/', { waitUntil: 'networkidle2' });
  
  console.log('Waiting for input field to appear...');
  await page.waitForSelector('input', { timeout: 30000 });

  console.log('Logging in...');
  const emailSelector = 'input[type="email"], input[type="text"]';
  const passwordSelector = 'input[type="password"]';
  
  try {
    await page.type(emailSelector, 'yesh@brihaspathi.com');
    await page.type(passwordSelector, 'ddPa\'93rNYr7%]]');
    
    // Click submit button
    await page.click('button[type="submit"]');
    
    console.log('Waiting for navigation after login...');
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }).catch(e => console.log('Timeout waiting for navigation, continuing anyway...'));
    await new Promise(r => setTimeout(r, 3000)); // Wait a bit more for SPA to settle

    // Now loop through each page
    for (const p of pagesToScrape) {
      console.log(`Navigating to ${p.name}...`);
      await page.goto(p.url, { waitUntil: 'networkidle2' });
      await new Promise(r => setTimeout(r, 4000)); // wait for data to render
      
      await page.screenshot({ path: `${p.name}.png` });
      const html = await page.content();
      fs.writeFileSync(`${p.name}.html`, html);
      console.log(`Saved ${p.name}`);
    }

  } catch (err) {
    console.error('Error during scraping process:', err);
    await page.screenshot({ path: 'error_state.png' });
  }

  await browser.close();
})();
