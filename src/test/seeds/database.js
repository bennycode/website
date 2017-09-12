exports.seed = (knex, Promise) => {
  return Promise.all([
    knex('categories').del(),
    knex('categories').insert([
      {"name": "Windows Phone", "color": "#19A2DE"},
      {"name": "Java", "color": "#E61400"},
      {"name": "PHP", "color": "#643EBF"},
      {"name": "Theorie", "color": "#9C5100"},
      {"name": "Windows 7", "color": "#2672EC"},
      {"name": "C", "color": "#EF9608"},
      {"name": "Android", "color": "#8CBE29"},
      {"name": "C++", "color": "#F8CA00"},
      {"name": "Ruby", "color": "#95040B"},
      {"name": "C#", "color": "#00C2D6"},
      {"name": "HTML5", "color": "#F14A29"},
      {"name": "MySQL", "color": "#FF6D34"},
      {"name": "Windows Store", "color": "#00ADEF"},
      {"name": "JavaScript", "color": "#0093F8"},
      {"name": "Python", "color": "#3C4B6B"},
      {"name": "iPhone", "color": "#999999"},
      {"name": "Objective-C", "color": "#999999"},
      {"name": "Linux", "color": "#669900"},
      {"name": "Visual Basic", "color": "#0099CC"},
      {"name": "Delphi", "color": "#7B9FCF"}
    ])
  ]);
};
