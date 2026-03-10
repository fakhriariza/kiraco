const https = require('https');

function getUrl(shortId) {
  const url = `https://www.google.com/share.google?q=${shortId}`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
         const match = data.match(/href="\/search\?q=([^&]+)&amp;/);
         resolve(match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : 'Not found for ' + shortId);
      });
    }).on('error', () => resolve('Error'));
  });
}

async function run() {
  const ids = ['o09xXMRH2uH83COil', '2gOI6SMRj9W71PVKn', 'DRWEorNZvwwd27PsU'];
  for (const id of ids) {
    console.log(await getUrl(id));
  }
}
run();
