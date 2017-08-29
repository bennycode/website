const express = require('express');
const router = express.Router();

function getCategories() {
  return [{
    "id": 8,
    "name": "Android",
    "color": "#8CBE29",
    "numberOfVideos": 212,
    "availableLanguages": ["English", "German"]
  }, {
    "id": 7,
    "name": "C",
    "color": "#EF9608",
    "numberOfVideos": 10,
    "availableLanguages": ["German"]
  }, {
    "id": 11,
    "name": "C#",
    "color": "#00C2D6",
    "numberOfVideos": 268,
    "availableLanguages": ["English", "German"]
  }, {
    "id": 9,
    "name": "C++",
    "color": "#F8CA00",
    "numberOfVideos": 87,
    "availableLanguages": ["English"]
  }, {
    "id": 21,
    "name": "Delphi",
    "color": "#7B9FCF",
    "numberOfVideos": 75,
    "availableLanguages": ["English"]
  }, {
    "id": 12,
    "name": "HTML5",
    "color": "#F14A29",
    "numberOfVideos": 79,
    "availableLanguages": ["English", "German"]
  }, {
    "id": 17,
    "name": "iPhone",
    "color": "#999999",
    "numberOfVideos": 37,
    "availableLanguages": ["English"]
  }, {
    "id": 2,
    "name": "Java",
    "color": "#E61400",
    "numberOfVideos": 220,
    "availableLanguages": ["English", "German"]
  }, {
    "id": 15,
    "name": "JavaScript",
    "color": "#0093F8",
    "numberOfVideos": 61,
    "availableLanguages": ["English"]
  }, {
    "id": 19,
    "name": "Linux",
    "color": "#669900",
    "numberOfVideos": 24,
    "availableLanguages": ["English", "German"]
  }, {
    "id": 13,
    "name": "MySQL",
    "color": "#FF6D34",
    "numberOfVideos": 33,
    "availableLanguages": ["English"]
  }, {
    "id": 18,
    "name": "Objective-C",
    "color": "#999999",
    "numberOfVideos": 65,
    "availableLanguages": ["English"]
  }, {
    "id": 3,
    "name": "PHP",
    "color": "#643EBF",
    "numberOfVideos": 206,
    "availableLanguages": ["English", "German"]
  }, {
    "id": 16,
    "name": "Python",
    "color": "#3C4B6B",
    "numberOfVideos": 43,
    "availableLanguages": ["English"]
  }, {
    "id": 10,
    "name": "Ruby",
    "color": "#95040B",
    "numberOfVideos": 25,
    "availableLanguages": ["English"]
  }, {
    "id": 4,
    "name": "Theorie",
    "color": "#9C5100",
    "numberOfVideos": 19,
    "availableLanguages": ["German"]
  }, {
    "id": 20,
    "name": "Visual Basic",
    "color": "#0099CC",
    "numberOfVideos": 25,
    "availableLanguages": ["English"]
  }, {
    "id": 5,
    "name": "Windows 7",
    "color": "#2672EC",
    "numberOfVideos": 24,
    "availableLanguages": ["German"]
  }, {
    "id": 1,
    "name": "Windows Phone",
    "color": "#19A2DE",
    "numberOfVideos": 20,
    "availableLanguages": ["German"]
  }, {
    "id": 14,
    "name": "Windows Store",
    "color": "#00ADEF",
    "numberOfVideos": 58,
    "availableLanguages": ["English", "German"]
  }];
}

router.get('/rest/service/v1/categories', (request, response) => {
  response.json(getCategories());
});

module.exports = router;
