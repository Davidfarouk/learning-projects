let data = [];

function add(item) {
  data.push({id: Date.now(), item});
}

function remove(id) {
  data = data.filter(x => x.id !== id);
}
