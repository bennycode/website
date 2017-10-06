exports.seed = (knex, Promise) => {
  return Promise.all([
    knex('categories').del(),
    knex('categories').insert([
      {"id": 1, "name": "Windows Phone", "color": "#19A2DE"},
      {"id": 2, "name": "Java", "color": "#E61400"},
      {"id": 3, "name": "PHP", "color": "#643EBF"},
      {"id": 4, "name": "Theorie", "color": "#9C5100"},
      {"id": 5, "name": "Windows 7", "color": "#2672EC"},
      {"id": 6, "name": "C", "color": "#EF9608"},
      {"id": 7, "name": "Android", "color": "#8CBE29"},
      {"id": 8, "name": "C++", "color": "#F8CA00"},
      {"id": 9, "name": "Ruby", "color": "#95040B"},
      {"id": 10, "name": "C#", "color": "#00C2D6"},
      {"id": 11, "name": "HTML5", "color": "#F14A29"},
      {"id": 12, "name": "MySQL", "color": "#FF6D34"},
      {"id": 13, "name": "Windows Store", "color": "#00ADEF"},
      {"id": 14, "name": "JavaScript", "color": "#0093F8"},
      {"id": 15, "name": "Python", "color": "#3C4B6B"},
      {"id": 16, "name": "iPhone", "color": "#999999"},
      {"id": 17, "name": "Objective-C", "color": "#999999"},
      {"id": 18, "name": "Linux", "color": "#669900"},
      {"id": 19, "name": "Visual Basic", "color": "#0099CC"},
      {"id": 20, "name": "Delphi", "color": "#7B9FCF"}
    ])
  ]);
};
