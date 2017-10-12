exports.seed = (knex, Promise) => {
  return Promise.all([
    knex('categories').del(),
    knex('categories').insert([
      {"id": 1, "name": "Windows Phone", "color": "#19A2DE", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 2, "name": "Java", "color": "#E61400", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 3, "name": "PHP", "color": "#643EBF", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 4, "name": "Theorie", "color": "#9C5100", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 5, "name": "Windows 7", "color": "#2672EC", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 6, "name": "C", "color": "#EF9608", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 7, "name": "Android", "color": "#8CBE29", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 8, "name": "C++", "color": "#F8CA00", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 9, "name": "Ruby", "color": "#95040B", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 10, "name": "C#", "color": "#00C2D6", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 11, "name": "HTML5", "color": "#F14A29", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 12, "name": "MySQL", "color": "#FF6D34", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 13, "name": "Windows Store", "color": "#00ADEF", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 14, "name": "JavaScript", "color": "#0093F8", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 15, "name": "Python", "color": "#3C4B6B", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 16, "name": "iPhone", "color": "#999999", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 17, "name": "Objective-C", "color": "#999999", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 18, "name": "Linux", "color": "#669900", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 19, "name": "Visual Basic", "color": "#0099CC", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
      {"id": 20, "name": "Delphi", "color": "#7B9FCF", "created_at": knex.fn.now(), "updated_at": knex.fn.now()},
    ]),
  ]);
};
