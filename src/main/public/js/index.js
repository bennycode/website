fetch('/rest/service/v1/categories', {
  method: 'get'
}).then((response) => {
  return response.json();
}).then((categories) => {
  const unorderedList = document.createElement('ul');

  categories.forEach((category) => {
    const text = document.createTextNode(category.name);
    const listItem = document.createElement('li');
    listItem.appendChild(text);
    unorderedList.appendChild(listItem);
  });

  document.body.appendChild(unorderedList);
}).catch((error) => {
  console.error(error.message);
});
