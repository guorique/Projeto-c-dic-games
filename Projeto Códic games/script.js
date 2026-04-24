// ===============================
// 🎮 BASE DE JOGOS
// ===============================

const jogosValidos = [
    "The Witcher 3",
    "GTA V",
    "Red Dead Redemption 2",
    "God of War",
    "Elden Ring",
    "Minecraft",
    "Fortnite",
    "Call of Duty",
    "Cyberpunk 2077",
    "Hollow Knight",
    "Dark Souls",
    "FIFA 24",
    "Resident Evil 4",
    "League of Legends",
    "Valorant"
];

// ===============================
// 🔎 BUSCA INTELIGENTE
// ===============================

function setupSearch(inputId, suggestionId) {
    const input = document.getElementById(inputId);
    const box = document.getElementById(suggestionId);

    input.addEventListener("input", () => {
        const value = input.value.toLowerCase();
        box.innerHTML = "";

        if (value === "") return;

        const resultados = jogosValidos.filter(jogo =>
            jogo.toLowerCase().includes(value)
        );

        resultados.forEach(jogo => {
            const div = document.createElement("div");
            div.innerText = jogo;

            div.onclick = () => {
                input.value = jogo;
                box.innerHTML = "";
            };

            box.appendChild(div);
        });
    });
}

// ===============================
// 🧠 VALIDAÇÃO INTELIGENTE
// ===============================

function validarJogo(nome) {
    nome = nome.toLowerCase().replace(/\s/g, "");

    const match = jogosValidos.find(jogo =>
        jogo.toLowerCase().replace(/\s/g, "") === nome
    );

    return match || null;
}

// ===============================
// 🏆 RANKINGS
// ===============================

function addToList(inputId, listId, top1DisplayId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    let gameName = validarJogo(input.value);

    if (!gameName) {
        alert("❌ Jogo inválido! Escolha um da lista.");
        return;
    }

    if (list.children.length >= 10) {
        alert("Ranking cheio!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${gameName}</span>
        <button onclick="removeGame(this, '${top1DisplayId}')">🗑️</button>
    `;

    list.appendChild(li);
    input.value = "";

    updateTop1(listId, top1DisplayId);
}

function removeGame(btn, top1DisplayId) {
    const li = btn.parentElement;
    li.remove();
    updateTop1(li.parentElement.id, top1DisplayId);
}

function updateTop1(listId, displayId) {
    const list = document.getElementById(listId);
    const display = document.getElementById(displayId);

    display.innerText =
        list.children.length > 0
            ? list.children[0].innerText
            : "---";
}

// ===============================
// 👤 PERFIL
// ===============================

const userNameInput = document.getElementById("userName");
const avatarPreview = document.getElementById("avatarPreview");
const imageInput = document.getElementById("imageInput");

userNameInput?.addEventListener("input", () => {
    localStorage.setItem("cg_name", userNameInput.value);
});

imageInput?.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            avatarPreview.innerHTML = `<img src="${e.target.result}">`;
            localStorage.setItem("cg_avatar", e.target.result);
        };

        reader.readAsDataURL(file);
    }
});

window.addEventListener("load", () => {
    const savedName = localStorage.getItem("cg_name");
    const savedAvatar = localStorage.getItem("cg_avatar");

    if (savedName && userNameInput)
        userNameInput.value = savedName;

    if (savedAvatar && avatarPreview)
        avatarPreview.innerHTML = `<img src="${savedAvatar}">`;

    // ATIVA BUSCA
   setupSearch("inputFav", "suggestionsFav");
   setupSearch("inputSub", "suggestionsSub");
   setupSearch("inputSuper", "suggestionsSuper");
});

// ===============================
// 🌐 POSTS
// ===============================

function createPost() {
    const text = document.getElementById("postText").value;
    const imageInput = document.getElementById("postImage");
    const feed = document.getElementById("feed");

    const userName = localStorage.getItem("cg_name") || "Jogador";

    if (text.trim() === "" && !imageInput.files[0]) {
        alert("Escreva algo ou adicione imagem!");
        return;
    }

    const post = document.createElement("div");
    post.className = "post";

    let imageHTML = "";

    if (imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageHTML = `<img src="${e.target.result}" onclick="openImage(this.src)">`;
            render();
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        render();
    }

    function render() {
        post.innerHTML = `
            <div class="post-header">
                <strong class="post-user">${userName}</strong>
                <button onclick="deletePost(this)">🗑️</button>
            </div>

            <p>${text}</p>
            ${imageHTML}

            <div>
                <button onclick="likePost(this)" data-like="0">👍 Curtir</button>
                <button onclick="toggleComments(this)">💬 Comentários</button>
            </div>

            <div class="comments" style="display:none;">
                <input type="text" placeholder="Comentário...">
                <button onclick="addComment(this)">Enviar</button>
                <div class="comment-list"></div>
            </div>
        `;

        feed.prepend(post);
    }

    document.getElementById("postText").value = "";
    imageInput.value = "";
}

// ===============================
// 🗑️ DELETAR POST
// ===============================

function deletePost(btn) {
    btn.closest(".post").remove();
}

// ===============================
// 👍 CURTIR
// ===============================

function likePost(btn) {
    let count = parseInt(btn.getAttribute("data-like")) || 0;
    count++;
    btn.setAttribute("data-like", count);
    btn.innerText = `👍 Curtido (${count})`;
}

// ===============================
// 💬 COMENTÁRIOS
// ===============================

function toggleComments(btn) {
    const box = btn.parentElement.nextElementSibling;
    box.style.display =
        box.style.display === "none" ? "block" : "none";
}

function addComment(btn) {
    const input = btn.previousElementSibling;
    const list = btn.nextElementSibling;

    const userName = localStorage.getItem("cg_name") || "Jogador";

    if (input.value.trim() !== "") {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${userName}:</strong> ${input.value}`;
        list.appendChild(div);
        input.value = "";
    }
}

// ===============================
// 🖼️ MODAL IMAGEM
// ===============================

function openImage(src) {
    const modal = document.createElement("div");
    modal.className = "image-modal";

    modal.innerHTML = `
        <span onclick="this.parentElement.remove()">✖</span>
        <img src="${src}">
    `;

    document.body.appendChild(modal);
}