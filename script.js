const contentData = {
  home: [
    "साइकोलॉजी के अनुसार......",
    "आज ये Video काफी Trending में चल रहा है। Video को देखे आखिर क्यों हो रहा है viral"
  ],
  news: [
    "नई स्टडी के अनुसार मानसिक स्वास्थ्य में वृद्धि हो रही है।",
    "आज की सबसे बड़ी साइकोलॉजिकल खबरें यहीं पढ़ें।"
  ],
  facts: [
    "आपका मस्तिष्क खुद को दोबारा प्रोग्राम कर सकता है।",
    "ज़्यादा सोचना खुशी को मार देता है।"
  ]
};

let currentSection = 'home';

function loadContent(section) {
  currentSection = section;
  displayContent(contentData[section]);
}

function displayContent(items) {
  const main = document.getElementById("main-content");
  main.innerHTML = '';
  if (items.length === 0) {
    main.innerHTML = '<div class="card">❌ कोई परिणाम नहीं मिला</div>';
    return;
  }

  items.forEach(text => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = text;
    main.appendChild(card);
  });
}

function searchContent(query) {
  const allData = Object.values(contentData).flat();
  const filtered = allData.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  displayContent(query.trim() ? filtered : contentData[currentSection]);
}

window.onload = () => loadContent('home');
