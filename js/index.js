const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation Links
const navFirstLink = document.querySelector('nav a:nth-of-type(1)');
const navSecondLink = document.querySelector('nav a:nth-of-type(2)');
const navThirdLink = document.querySelector('nav a:nth-of-type(3)');
const navFourthLink = document.querySelector('nav a:nth-of-type(4)');
const navFifthLink = document.querySelector('nav a:nth-of-type(5)');
const navSixthLink = document.querySelector('nav a:nth-of-type(6)');
navFirstLink.textContent = siteContent['nav']['nav-item-1'];
navSecondLink.textContent = siteContent['nav']['nav-item-2'];
navThirdLink.textContent = siteContent['nav']['nav-item-3'];
navFourthLink.textContent = siteContent['nav']['nav-item-4'];
navFifthLink.textContent = siteContent['nav']['nav-item-5'];
navSixthLink.textContent = siteContent['nav']['nav-item-6'];

// navSecondLink.textContent = 'Product';
// navThirdLink.textContent = 'Vision';
// navFourthLink.textContent = 'Features';
// navFifthLink.textContent= 'About';
// navSixthLink.textContent = 'Contact';