import { getUser } from './service/user.js'
import { getRepositories } from './service/repositories.js'

import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

document.querySelector("#btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value
    if (validadeEmpytInput(userName)) return
    getUserData(userName)

})

document.querySelector("#input-search").addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keycode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed){
        validadeEmpytInput(userName)
        getUserData(userName)
    }
})

function validadeEmpytInput(userName) {
    if (userName.length === 0) {
        alert("Preencha o campo com nome de usuário do GitHub")
        return true
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName)
    
    if(userResponse.message === "Not Found"){
        screen.renderNotFound() 
        return
    }

    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
}