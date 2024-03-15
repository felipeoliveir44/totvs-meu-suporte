<template>
    <header>
            <div class="container-intro">
                <div class="intro">
                    <img src="../assets/images/logo-totvs-h-white.svg" alt="">
                    <div class="intro-text-meu-suporte">
                        <p id="meu-suporte">Meu Suporte</p>
                    </div>
                </div>
                <div class="intro-text">
                    <p>A solução completa para suporte técnico dos produtos TOTVS.</p>
                </div>
                <div class="intro-button">
                    <button class="btn-download">
                        <img src="../assets/images/windows.png" alt="">
                        <p>Download para Windows</p>
                    </button>
                </div>
            </div>
        </header>
        <nav>
            <img src="../assets/images/logo-totvs-h-white.svg" />
            <div class="links">
                <a href="https://www.totvs.com/" target="_blank">TOTVS</a>
                <a href="ios.html" target="_blank">IOS</a>
            </div>
            <div>
                <button id="btn-login">
                    <img src="../assets/images/user.png" alt="">
                    Login
                </button>
            </div>
        </nav>
</template>

<style scoped>

header {
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
    background-image: radial-gradient(circle at bottom, rgb(49, 29, 139) 1%, rgb(15, 15, 15) 80%);
    align-items: center;
    
}
nav {
    margin: 20px auto;
    /* Adiciona margem automática nas laterais para centralizar */
    max-width: 1200px;
    /* Define uma largura máxima para a navbar */
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* Alinha os itens na navbar */
    height: 70px;
    background-color: rgba(107, 72, 255, 0.7);
    backdrop-filter: saturate(180%) blur(20px);
    border-radius: 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* Define a posição da navbar no centro */
}

nav img {
    width: 150px;
}

#btn-login {
    background-color: #3E2A96;
    color: #fff;
    width: 170px;
    height: 50px;
    border-radius: 30px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

#btn-login img {
    width: 32px;
    height: 32px;
}

.links a {
    color: white;
    text-decoration: none;
    margin-right: 2rem;
    border-bottom: 1px solid #fff;
}

.intro {
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    gap: 30px;
}

.container-intro {
    min-width: 1200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
    gap: 30px;
    color: #fff;
    font-family: 'Bungee', sans-serif;
}

#meu-suporte {
    font-size: 60px;
    text-shadow: rgb(17, 17, 17) -6px 8px 0px, rgb(107, 72, 255) -10px 12px 0px;
    font-family: 'Bungee', sans-serif;
}

.container-intro img {
    width: 40%;
    height: 100%;
}

.intro-text {
    font-size: 1.5rem;
}

.btn-download {
    width: 400px;
    height: 78px;
    background-color: #3E2A96;
    border: none;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
}

.btn-download img {
    width: 64px;
    height: 64px;
}
</style>