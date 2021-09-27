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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Navigation Links
const navFirstLink = document.querySelector('nav a:nth-of-type(1)');
const navSecondLink = document.querySelector('nav a:nth-of-type(2)');
const navThirdLink = document.querySelector('nav a:nth-of-type(3)');
const navFourthLink = document.querySelector('nav a:nth-of-type(4)');
const navFifthLink = document.querySelector('nav a:nth-of-type(5)');
const navSixthLink = document.querySelector('nav a:nth-of-type(6)');
const appendedLink = navFirstLink.cloneNode(true);
document.querySelector('nav').appendChild(appendedLink);
const prependedLink = navFirstLink.cloneNode(true);
document.querySelector('nav').prepend(prependedLink);
const linksGeneral = document.querySelectorAll('nav a');
const linksGeneralActual = Array.from(linksGeneral);

navFirstLink.textContent = siteContent['nav']['nav-item-1'];
navSecondLink.textContent = siteContent['nav']['nav-item-2'];
navThirdLink.textContent = siteContent['nav']['nav-item-3'];
navFourthLink.textContent = siteContent['nav']['nav-item-4'];
navFifthLink.textContent = siteContent['nav']['nav-item-5'];
navSixthLink.textContent = siteContent['nav']['nav-item-6'];
appendedLink.textContent = 'AppendNav';
prependedLink.textContent = 'PrependNav';
linksGeneralActual.forEach(item => item.style.color = 'green');


// Header Content
const actualHeader = document.querySelector('.cta .cta-text h1');
const headerImage = document.getElementById('cta-img');
const headerButton = document.querySelector('.cta .cta-text button');
actualHeader.textContent = siteContent['cta']['h1'];
headerImage.setAttribute('src', siteContent['cta']['img-src']);
headerButton.textContent = siteContent['cta']['button'];

// Main content Top Content and Image
const topContent = document.querySelector('.top-content');
const topContentHeader = topContent.querySelector('h4');
const topContentP = topContent.querySelector('p');
const topContent2 = document.querySelector('.top-content');
const topContentHeaderTwo = topContent2.querySelector('.text-content:nth-of-type(2) h4');
const topContentPTwo = topContent2.querySelector('.text-content:nth-of-type(2) p');

topContentHeader.textContent = siteContent['main-content']['features-h4'];
topContentP.textContent = siteContent['main-content']['features-content'];
topContentHeaderTwo.textContent = siteContent['main-content']['about-h4'];
topContentPTwo.textContent = siteContent['main-content']['about-content'];


//Main Content Image
const mainContentImg = document.getElementById('middle-img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Main content Bottom Content
const bottomContent = document.querySelector('.bottom-content');
const bottomContentHeader = bottomContent.querySelector('h4');
const bottomContentP = bottomContent.querySelector('p');
const bottomContent2 = document.querySelector('.bottom-content');
const bottomContentHeaderTwo = bottomContent2.querySelector('.text-content:nth-of-type(2) h4');
const bottomContentPTwo = bottomContent2.querySelector('.text-content:nth-of-type(2) p');
const bottomContent3 = document.querySelector('.bottom-content');
const bottomContentHeaderThree = bottomContent3.querySelector('.text-content:nth-of-type(3) h4');
const bottomContentPThree = bottomContent3.querySelector('.text-content:nth-of-type(3) p');
bottomContentHeader.textContent = siteContent['main-content']['services-h4'];
bottomContentP.textContent = siteContent['main-content']['services-content'];
bottomContentHeaderTwo.textContent = siteContent['main-content']['product-h4'];
bottomContentPTwo.textContent = siteContent['main-content']['product-content'];
bottomContentHeaderThree.textContent = siteContent['main-content']['vision-h4'];
bottomContentPThree.textContent = siteContent['main-content']['vision-content'];

// Contact Section 
const contact = document.querySelector('.contact');
const contactHeader = contact.querySelector('h4');
const contactPOne = contact.querySelector('p:nth-of-type(1)');
const contactPTwo = contact.querySelector('p:nth-of-type(2)');
const contactPThree = contact.querySelector('p:nth-of-type(3)');
contactHeader.textContent = siteContent['contact']['contact-h4'];
contactPOne.textContent = siteContent['contact']['address'];
contactPTwo.textContent = siteContent['contact']['phone'];
contactPThree.textContent = siteContent['contact']['email'];

// Footer Section
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];