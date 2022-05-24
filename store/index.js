export const state = () => ({
  users: [
    { id: 1, name: "Esam", salary: 1004 },
    { id: 2, name: "Ahmed", salary: 2040 },
    { id: 3, name: "Eisa", salary: 3300 },
    { id: 4, name: "Johan", salary: 4400 },
    { id: 5, name: "Ali", salary: 5050 },
    { id: 6, name: "Esao", salary: 3242 },
    { id: 7, name: "Sara", salary: 221 },
    { id: 8, name: "Hend", salary: 322 },
    { id: 9, name: "Sami", salary: 443 },
  ],
});

export const getters = {
  getUsers: (state) => {
    return state.users.map((user) => {
      return {
        id: "id: " + user.id,
        name: "name: " + user.name,
        salary: "salary: " + user.salary,
      };
    });
  },
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.id === id);
  },
  getUsersLength: (state) => {
    return state.users.length;
  },
  filterUsers: (state) => (type, name) => {
    if (name == "") return [];

    return state.users.filter((user) => {
      if (type === "id") {
        return user.id === parseInt(name);
      } else {
        return user.name.toLowerCase().includes(name.toLowerCase());
      }
    });
  },
};

export const mutations = {
  increasSalary(state) {
    console.log("increasSalary Mutations");

    return state.users.forEach((user) => {
      user.salary += 200;
    });
  },
};

export const actions = {
  increasSalary(context) {
    setTimeout(() => {
      console.log("increasSalary Action");

      context.commit("increasSalary");
    }, 1000);
  },
};
