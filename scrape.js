const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set viewport to a typical desktop size
  await page.setViewport({ width: 1280, height: 800 });

  console.log('Navigating to https://du.3nethra.net/');
  await page.goto('https://du.3nethra.net/', { waitUntil: 'networkidle2' });
  
  console.log('Waiting for input field to appear...');
  await page.waitForSelector('input', { timeout: 30000 });

  await page.screenshot({ path: 'login_page.png' });
  console.log('Saved login_page.png');

  // Fill in login form
  console.log('Logging in...');
  // Find email input - typically input[type="email"] or similar
  // We don't know the exact selectors, so let's try common ones.
  // We can evaluate some script to find inputs
  const inputs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('input')).map(el => ({
      type: el.type,
      id: el.id,
      name: el.name,
      placeholder: el.placeholder
    }));
  });
  console.log('Found inputs:', inputs);

  // We will assume the first input is email and the second is password (or type password)
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

    await page.screenshot({ path: 'dashboard.png' });
    console.log('Saved dashboard.png');
    
    const html = await page.content();
    fs.writeFileSync('dashboard.html', html);
    console.log('Saved dashboard.html');

  } catch (err) {
    console.error('Error during login process:', err);
    // Take a screenshot of whatever failed
    await page.screenshot({ path: 'error_state.png' });
  }

  await browser.close();
})();
