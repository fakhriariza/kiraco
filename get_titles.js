const https = require('https');

async function getTitle(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        getTitle(res.headers.location).then(resolve);
      } else {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const match = data.match(/<title>(.*?)<\/title>/);
          resolve({ url, title: match ? match[1] : 'No title found' });
        });
      }
    }).on('error', () => resolve({ url, title: 'Error' }));
  });
}

const urls = [
  'https://share.google/QYlgTeKxqp9I1FsvE',
  'https://share.google/o09xXMRH2uH83COil',
  'https://share.google/2gOI6SMRj9W71PVKn',
  'https://share.google/DRWEorNZvwwd27PsU'
];

Promise.all(urls.map(getTitle)).then(console.log);
