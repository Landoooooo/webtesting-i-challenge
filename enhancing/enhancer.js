module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20){
    item.enhancement = item.enhancement + 1
    return item
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    const durability = item.durability - 5;
    return { ...item, durability }
  } else if (item.enhancement === 15) {
    const durability = item.durability - 10;
    return { ...item, durability }
  } else if (item.enhancement >= 16) {
    const durability = item.durability - 10;
    const enhancement = item.enhancement - 1;
    return { ...item, durability, enhancement }
  }
}

function repair(item) {
  if(item.durability < 100){
    item.durability = 100

    return {...item}
  }else{
    return {...item}
  }
}

function get(item) {
  return { ...item };
}
