import axios from "axios";

const rootDomain = require("./rootDomain.js").default

export default {
  //Get all items for a specific list.
  getItems: function(listId) {
    return axios.post(`${rootDomain}/api/listitem/findAll`, {
      listId
    });
  },
  // Get a specific item on a list.
  getItem: function(listId, id) {
    return axios({
      method: `get`,
      url: `${rootDomain}/api/listitem/${id}`,
      data: {
        listId: listId
      }
    });
  },

 // Create a new item for a list.
 createItem: function(data) {
  return axios({
    method: `post`,
    url: `${rootDomain}/api/listitem`,
    data: {
      name: data.name,
      unitSize: data.unitSize,
      measurement: data.measurement,
      quantity: data.quantity,
      notes: data.notes,
      ListId: data.listId
    }
  });
},
  // Edit a specific item on a list.
  updateItem: function(listId, id, data) {
    return axios({
      method: `put`,
      url: `${rootDomain}/api/listitem/${id}`,
      data: {
        listId: listId,
        data
      }
    });
  },
  // Delete a specific item on a list.
  deleteItem: function(listId, id) {
    console.log(
      `inside deleteitem method of listitem, here's the incoming arguments: listId: ${listId}; id: ${id}`
    );
    return axios({
      method: `delete`,
      url: `${rootDomain}/api/listitem/${id}`,
      data: {
        listId: listId
      }
    });
  }
};
