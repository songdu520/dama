const ls = {
  set(key, value, now, long) {
    localStorage.setItem(key, JSON.stringify({value, now, long}));
  },
  get(key, now) {
    const obj = (JSON.parse(localStorage.getItem(key)));
    if (now > obj.now + obj.long) {
      localStorage.removeItem(key);
    } else {
      return obj.value;
    }
  }
}

export default ls;