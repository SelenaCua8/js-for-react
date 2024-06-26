const input = document.querySelector('#searchInput');
const userList = document.querySelector('#users');

let users = [];

window.addEventListener('DOMContentLoaded', async () => {
    userList.innerHTML = "<h1>Loading</h1>"
    const data = await loadUsers();
    users = data.data;
    renderUsers(users); //pasaselos a la funcion
});

//filtrar los datos
input.addEventListener('keyup', e => {
    //nuevo arreglo con los datos filtrados
    const newUsers = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()));
    renderUsers(newUsers);
});

//carga los datos de la api
async function loadUsers() {
    const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=1000');
    return await response.json();
}

//muestra los datos de la api
const createUserItems = users => users.map(user =>
    `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.firstname} ${user.lastname}</li>`).join('');

function renderUsers(users) {
    const itemsString = createUserItems(users);
    userList.innerHTML = itemsString;
}
