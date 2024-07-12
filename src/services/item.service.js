// import { storageService } from "./async-storage.service.js";
import { httpService } from './http.service.js'
import { utilService } from "./util.service.js";
// import { userService } from "./user.service.js";


import codes from "./../../data/code.json";
console.log(codes);
const STORAGE_KEY = "item_DB";


export const itemService = {
  query,
  getById,
  save,
  remove,
  getEmptyItem,
  

};
window.itemService = itemService;

// loadItems();

async function query(filterBy = {}) {
  
try {
    let items = await httpService.get('code', filterBy);
     return items;
} catch (error) {
    console.log('error in item service', error);
    // return codes;
  
}
 
}



function getById(itemId) {
  return storageService.get(STORAGE_KEY, itemId);
  // return httpService.get(`item/${itemId}`)
}

async function remove(itemId) {
  await storageService.remove(STORAGE_KEY, itemId);
  // return httpService.delete(`item/${itemId}`)
}
async function save(item) {
  var savedItem;
  if (item._id) {
    savedItem = await storageService.put(STORAGE_KEY, item);
    // savedItem = await httpService.put(`item/${item._id}`, item)

  }
  return savedItem;
}

function getEmptyItem(name) {
  return {
    id: "",
    name,
    icon: "",
    group: "",
    readMoreURL: "https://example.com/rice-info",
    color: "",
    isSelected: false,
  };
}


// async function loadItems() {
//   let items = utilService.loadFromStorage(STORAGE_KEY);
//   if (!items || !items.length) {
//     try {
//       const res = await fetch(import.meta.env.VITE_DATA_URL);
//       items = await res.json();

//       utilService.saveToStorage(STORAGE_KEY, items);
//       console.debug("Loaded and saved items", items);
//     } catch (error) {
//       console.debug("Failed to load items", error);
//     }
//   }
// }

// TEST DATA
(() => {
  utilService.saveToStorage(STORAGE_KEY, codes);
})();
