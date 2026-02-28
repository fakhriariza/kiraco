const fs = require('fs');
const https = require('https');

async function getOgImage(url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const match = text.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    return match ? match[1] : null;
  } catch (e) {
    return null;
  }
}

async function run() {
  const places = [
    { name: 'sofia', url: 'https://manual.co.id/directory/sofia-at-the-gunawarman/' },
    { name: 'neighbourhood', url: 'https://manual.co.id/directory/the-neighbourhood-jakarta/' },
    { name: 'plataran-menteng', url: 'https://manual.co.id/directory/plataran-menteng/' },
    { name: 'animale', url: 'https://manual.co.id/directory/animale/' },
    { name: 'pierre', url: 'https://manual.co.id/directory/pierre/' },
    { name: 'amuz', url: 'https://manual.co.id/directory/amuz-gourmet/' }
  ];

  for (const p of places) {
    const imgUrl = await getOgImage(p.url);
    console.log(`${p.name}: ${imgUrl}`);
  }
}
run();
