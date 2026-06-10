const https = require('https');
const COUPON_URL = 'https://aitubo.ai/?ref=mduzodu';

const url = new URL(COUPON_URL);
const opts = { hostname: url.hostname, path: url.pathname + url.search, method: 'HEAD' };

const req = https.request(opts, (res) => {
  console.log(`Deal page status: ${res.statusCode}`);
  if (res.headers.location) console.log(`Redirect: ${res.headers.location}`);
});

req.on('error', () => console.log('Deal page check skipped (network).'));
req.end();

console.log('\n--- Aitubo API Simulation ---');
console.log('Use cases: anime art, illustration generation, LoRA inference');
if (process.env.AITUBO_API_KEY) {
  console.log('API key detected. Ready for image generation.');
} else {
  console.log('Set AITUBO_API_KEY env var to enable live API calls.');
}
