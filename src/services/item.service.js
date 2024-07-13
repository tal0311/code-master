// import { storageService } from "./async-storage.service.js";
import { httpService } from './http.service.js'
import { utilService } from "./util.service.js";
// import { userService } from "./user.service.js";


import codes from "./../../data/code.json";

// console.log(codes);
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
  console.log('getting items');

  try {
    let items = await httpService.get('code', filterBy);
    console.log('items', items);
    return items;
  } catch (error) {
    console.error('error in item service', error);
  

  }

}



function getById(itemId) {

  return httpService.get(`code/${itemId}`)
}

async function remove(itemId) {

  return httpService.delete(`code/${itemId}`)
}
async function save(item) {
  var savedItem;
  if (item._id) {

    savedItem = await httpService.put(`item/${item._id}`, item)

  }
  return savedItem;
}

function getEmptyItem(code, language, title) {
  return {
    _id: utilService.makeId(),
    code,
    language,
    title: title || "Untitled", 
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
