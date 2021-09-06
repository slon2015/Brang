
const storeName = "brang-metrcis-going-link";

function getStore(): Set<string> {
  const resultFromLocalStore = localStorage.getItem(storeName);
  if (!!resultFromLocalStore) {
    return JSON.parse(resultFromLocalStore) as Set<string>
  }
  else {
    return new Set<string>()
  }
}

export function checkLink(id: string) {
  let store = getStore();
  if (!store.has(id) && !window.ym) {
    store = store.add(id);
    window.ym(process.env.GATSBY_YM, 'reachGoal', 'goingLink');
    localStorage.setItem(storeName, JSON.stringify(store));
  }
}
