// CONFIG.JS - SECURE API KEYS FILE
// DO NOT UPLOAD THIS FILE TO GITHUB
// This file is loaded only on the live website

// Encryption key for additional security (optional)
const ENCRYPTION_KEY = 'ROY_EXPLOIT_2026_2029_SECURE';

// API Keys Database - These are only visible on the live website
// Not in GitHub repository
const secureApiKeys = [
    {
        id: 1,
        name: "Numverify API",
        key: "a97eb3774727fd0945b940d8fb6c930a",
        category: "Phone Validation",
        description: "Validate phone numbers from all over the world with carrier and location information.",
        usage: `// Validate phone number
fetch('https://api.numverify.com/v1/validate?access_key=YOUR_API_KEY&number=14158586273')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "1000 requests/month free tier",
        status: "active"
    },
    {
        id: 2,
        name: "OpenCage Geocoding",
        key: "adaba27de9164869804dd9b4b4a1d917",
        category: "Geolocation",
        description: "Forward and reverse geocoding with open data sources.",
        usage: `// Geocode an address
fetch('https://api.opencagedata.com/geocode/v1/json?q=London&key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "2500 requests/day free tier",
        status: "active"
    },
    {
        id: 3,
        name: "Shodan API",
        key: "9K1jLYdnAem9X1BSIMk3EXoM7RmWbmaw",
        category: "Security",
        description: "Search engine for Internet-connected devices and services.",
        usage: `// Search for devices
fetch('https://api.shodan.io/shodan/host/search?key=YOUR_API_KEY&query=webcam')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "100 results/query free tier",
        status: "limited"
    },
    {
        id: 4,
        name: "Browseless API",
        key: "2SzvdScNfBch5il55df8b200fa5a83f2874324bcc788e3306",
        category: "Web Scraping",
        description: "Headless browser automation and web scraping service.",
        usage: `// Scrape a webpage
fetch('https://api.browseless.io/v1/scrape?url=https://example.com&api_key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "5000 requests/month",
        status: "active"
    },
    {
        id: 5,
        name: "Abstract Email Validation",
        key: "a1f08cfb51cf49c390e1b5e7c78a91e6",
        category: "Email Validation",
        description: "Validate email addresses for syntax, domain, and mailbox existence.",
        usage: `// Validate email
fetch('https://emailvalidation.abstractapi.com/v1/?api_key=YOUR_API_KEY&email=test@example.com')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "100 requests/month free",
        status: "active"
    },
    {
        id: 6,
        name: "Abstract Phone Validation",
        key: "077f88aae22d4bf68ef61f87f60a219a",
        category: "Phone Validation",
        description: "Validate international phone numbers with carrier detection.",
        usage: `// Validate phone number
fetch('https://phonevalidation.abstractapi.com/v1/?api_key=YOUR_API_KEY&phone=14155552671')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "100 requests/month free",
        status: "active"
    },
    {
        id: 7,
        name: "WhoisXML API",
        key: "at_BgIxJVRguLZMn3GdVlRlNpBvOsA76",
        category: "Domain Intelligence",
        description: "WHOIS data, domain research, and brand protection services.",
        usage: `// Get WHOIS data
fetch('https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=YOUR_API_KEY&domainName=example.com')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "500 lookups/month",
        status: "active"
    },
    {
        id: 8,
        name: "VirusTotal API",
        key: "3ffb75bfcac8976f2b05c73ed129b460e2231716b798474330d80fb4d3d78102",
        category: "Security",
        description: "Analyze files and URLs for malware with multiple antivirus engines.",
        usage: `// Analyze URL
fetch('https://www.virustotal.com/vtapi/v2/url/report?apikey=YOUR_API_KEY&resource=example.com')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "4 requests/minute free tier",
        status: "limited"
    },
    {
        id: 9,
        name: "Wigle.net API",
        key: "AID3bdd3dd824e7ab7e175150be295cb727",
        token: "ad8b5d2981913f4514239ddda87ee51a",
        category: "WiFi Geolocation",
        description: "WiFi network database with location mapping capabilities.",
        usage: `// Search WiFi networks
fetch('https://api.wigle.net/api/v2/network/search?onlymine=false', {
  headers: {
    'Authorization': 'Basic ' + btoa('YOUR_API_NAME:YOUR_API_TOKEN')
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
        limits: "Rate limited, requires authentication",
        status: "active"
    },
    {
        id: 10,
        name: "Accurate Geocoding",
        key: "uLtVBsJxAxqDf1cZ4AgdVzqLR3sLZRJZheR6hXgTfKST6c8DwaKlybTFQ0VSdN8T",
        category: "Geolocation",
        description: "High-precision geocoding service with global coverage.",
        usage: `// Geocode address
fetch('https://geocode.accuweather.com/locations/v1/cities/search?apikey=YOUR_API_KEY&q=London')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "50 requests/day free",
        status: "limited"
    },
    {
        id: 11,
        name: "Woosmap API",
        key: "woos-ac280e64-308f-3e7b-a502-5a20132183a0",
        category: "Maps & Places",
        description: "Location-based services, stores search, and distance calculation.",
        usage: `// Search stores
fetch('https://api.woosmap.com/stores/search?key=YOUR_API_KEY&lat=51.509865&lng=-0.118092')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "10,000 requests/month free",
        status: "active"
    },
    {
        id: 12,
        name: "Foursquare API",
        key: "fsq3SPFF024CAOOLCLOJ4VS12NI0RYHTUHS2ESBDOQTDQARE3CGJ",
        clientId: "HESB022VFF1Y1EY4MYWXGLFRXQQC0JGKSGZHDIHPHKA1PZYY",
        category: "Places & Venues",
        description: "Access to Foursquare's places database with venue information.",
        usage: `// Search places
fetch('https://api.foursquare.com/v3/places/search?query=coffee&near=New+York', {
  headers: {
    'Authorization': 'YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
        limits: "Rate limited per application",
        status: "active"
    },
    {
        id: 13,
        name: "Zoomeye API",
        key: "7FA3DCFA-d757-67671-b1d4-eda9c0e254f",
        category: "Cybersecurity",
        description: "Search engine for cyberspace, network devices, and vulnerabilities.",
        usage: `// Search network devices
fetch('https://api.zoomeye.org/host/search?query=apache', {
  headers: {
    'Authorization': 'JWT ' + 'YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
        limits: "10,000 results/month free",
        status: "active"
    },
    {
        id: 14,
        name: "TMDB API",
        key: "77faf38752e38b1dffe414023313fb7a",
        category: "Entertainment",
        description: "The Movie Database API for movie and TV show information.",
        usage: `// Search movies
fetch('https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Inception')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "50 requests/second",
        status: "active"
    },
    {
        id: 15,
        name: "OMDB API",
        key: "dd22a586",
        category: "Entertainment",
        description: "Open Movie Database for film information including IMDb ratings.",
        usage: `// Get movie info
fetch('http://www.omdbapi.com/?apikey=YOUR_API_KEY&t=Matrix')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "1000 requests/day free",
        status: "active"
    },
    {
        id: 16,
        name: "Weather API",
        key: "7679fdb0e45341d9ace123233251910",
        category: "Weather",
        description: "Global weather data with forecasts and historical information.",
        usage: `// Get weather
fetch('http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "1,000,000 calls/month free",
        status: "active"
    },
    {
        id: 17,
        name: "Number Lookup",
        key: "num_live_qfJdhsowMFWdPdn49wQXc1I7qu1zFXJ2rOgGBC0h",
        category: "Phone Intelligence",
        description: "Advanced phone number intelligence and validation service.",
        usage: `// Lookup phone number
fetch('https://api.telnyx.com/v2/number_lookup/14155552671', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
        limits: "50 requests/month free",
        status: "limited"
    },
    {
        id: 18,
        name: "IPinfo Token",
        key: "8c8d0e2a63d1ff",
        category: "IP Geolocation",
        description: "IP address geolocation and company information.",
        usage: `// Get IP info
fetch('https://ipinfo.io/8.8.8.8/json?token=YOUR_TOKEN')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "50,000 requests/month free",
        status: "active"
    },
    {
        id: 19,
        name: "Have I Been Pwned",
        key: "3c1a8f92e7d546a9b5f3d8c2a1e7b4f0",
        category: "Security",
        description: "Check if email addresses or passwords have been compromised in data breaches.",
        usage: `// Check email breach
fetch('https://haveibeenpwned.com/api/v3/breachedaccount/test@example.com', {
  headers: {
    'hibp-api-key': 'YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
        limits: "Rate limited, requires API key",
        status: "active"
    },
    {
        id: 20,
        name: "SendGrid API",
        key: "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",
        category: "Email Service",
        description: "Email delivery service with analytics and template management.",
        usage: `// Send email
fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({...})
})
.then(response => response.json())
.then(data => console.log(data));`,
        limits: "100 emails/day free forever",
        status: "active"
    },
    {
        id: 21,
        name: "IP Geolocation",
        key: "46499d6897fb463aa7f8223ea6da9580",
        category: "IP Intelligence",
        description: "IP geolocation with country, city, ISP, and threat intelligence.",
        usage: `// Get IP geolocation
fetch('https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY&ip=8.8.8.8')
  .then(response => response.json())
  .then(data => console.log(data));`,
        limits: "30,000 requests/month free",
        status: "active"
    }
];

// Simple encryption/decryption functions
function simpleEncrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length));
    }
    return btoa(result);
}

function simpleDecrypt(encrypted) {
    const text = atob(encrypted);
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length));
    }
    return result;
}

// Export the API keys
window.secureApiKeys = secureApiKeys;
window.simpleEncrypt = simpleEncrypt;
window.simpleDecrypt = simpleDecrypt;