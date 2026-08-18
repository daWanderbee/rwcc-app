const fs = require('fs');
const path = require('path');

const reels = [
  { id: 'reel-1', url: 'https://www.instagram.com/chukitnow/reel/DZ42J3cBD4W/' },
  { id: 'reel-2', url: 'https://www.instagram.com/camerabackpacker/reel/DcGli-6sdx1/' },
  { id: 'reel-3', url: 'https://www.instagram.com/psclicks_india/reel/Db2Dr0YP7VZ/' },
  { id: 'reel-4', url: 'https://www.instagram.com/chukitnow/reel/DbA3_QVBD-g/' },
  { id: 'reel-5', url: 'https://www.instagram.com/chukitnow/reel/DaxWodiBDij/' },
  { id: 'reel-6', url: 'https://www.instagram.com/chukitnow/reel/DaVGhZMBprp/' }
];

async function fetchReel(reel) {
  const crawlerHeaders = {
    'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'
  };
  
  try {
    const res = await fetch(reel.url, { headers: crawlerHeaders });
    const html = await res.text();

    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/i) ||
                         html.match(/<meta name="twitter:image" content="([^"]+)"/i);
    const ogImage = ogImageMatch ? ogImageMatch[1].replace(/&amp;/g, '&') : null;

    const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/i) ||
                         html.match(/<title>([^<]+)<\/title>/i);
    const ogTitle = ogTitleMatch ? ogTitleMatch[1].replace(/&amp;/g, '&').replace(/&#064;/g, '@') : null;

    const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/i) ||
                        html.match(/<meta name="description" content="([^"]+)"/i);
    const ogDesc = ogDescMatch ? ogDescMatch[1].replace(/&amp;/g, '&').replace(/&#064;/g, '@') : null;

    return { ...reel, ogImage, ogTitle, ogDesc };
  } catch (err) {
    return { ...reel, error: err.message };
  }
}

async function run() {
  const dir = path.join(__dirname, 'public', 'images', 'reels');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const results = [];
  for (const reel of reels) {
    console.log(`Fetching with crawler UA: ${reel.url}`);
    const data = await fetchReel(reel);
    console.log(`Result for ${reel.id}:`, data.ogTitle, data.ogImage ? 'Got Image URL!' : 'No Image');
    results.push(data);

    if (data.ogImage) {
      try {
        const imgRes = await fetch(data.ogImage);
        const arrayBuffer = await imgRes.arrayBuffer();
        const filePath = path.join(dir, `${reel.id}.jpg`);
        fs.writeFileSync(filePath, Buffer.from(arrayBuffer));
        data.localImagePath = `/images/reels/${reel.id}.jpg`;
        console.log(`Saved image to ${filePath}`);
      } catch (err) {
        console.error(`Failed to download:`, err.message);
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, 'reels_data.json'), JSON.stringify(results, null, 2));
}

run();
