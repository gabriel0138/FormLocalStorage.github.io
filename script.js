// Função para carregar os dados do localStorage e exibi-los na lista
function loadUserData() {
    const userDataList = document.getElementById('userDataList');
    userDataList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const userData = JSON.parse(localStorage.getItem(key));
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${userData.name}</strong>: ${userData.email}
            <button onclick="deleteUserData('${key}')">Excluir</button>`;
            userDataList.appendChild(listItem);
        }
    }
}

// Função para salvar os dados no localStorage
function saveUserData(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userData = { name, email };
    localStorage.setItem(email, JSON.stringify(userData));
    loadUserData(); // Recarrega a lista de dados
    document.getElementById('userDataForm').reset(); // Limpa o formulário após salvar
}

// Função para excluir os dados do localStorage
function deleteUserData(key) {
    localStorage.removeItem(key);
    loadUserData(); // Recarrega a lista de dados
}

// Carregar os dados quando a página for carregada
window.onload = function() {
    loadUserData();
    document.getElementById('userDataForm').addEventListener('submit', saveUserData);
};
