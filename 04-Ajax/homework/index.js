const [boton] = $('#boton')
const URL = "http://localhost:5000";

// funciones de acciones
const responseHandler = (response) => {
    //const element = $('#userList')[0]
    const [lista] = $('#lista')
    lista.innerHTML = "";
    response.forEach(({id, name}) => {    
        const newLi = document.createElement('li');
        newLi.innerHTML = `${id} - ${name}`;
        lista.appendChild(newLi);
    });
}

const fetchUsers = () => {
    $.get('http://localhost:5000/amigos', responseHandler)
}

boton.addEventListener('click', fetchUsers)

//********************************************** */
const [input] = $('#input')
const [search] = $('#search')
const [amigo] = $('#amigo')

const writeName = (friend) => {
    amigo.innerHTML = friend.name;
}

const showFriendName = () => {
    const id = input.value;
    $.get(`${URL}/amigos/${id}`, writeName);
}
search.addEventListener('click', showFriendName)

// DELETE********************************************** */

const [inputDelete] = $('#inputDelete') 
const [deleteButton] = $('#delete')
const [success] = $('#success')

const deleteFriend = () => {
    const id = inputDelete.value;
    $.ajax({
        url: `${URL}/amigos/${id}`,
        type: "DELETE",
        success: () => {
            alert("Amigo eliminado con éxito");
            responseHandler ();
        }
    })
}

deleteButton.addEventListener("click", deleteFriend)
// peticiones http



