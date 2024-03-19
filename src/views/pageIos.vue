<script lang="ts">
import Navbar from '../components/Navbar.vue';
export default {

 components: {
    Navbar
  },
}
</script>

<template>
<body>
    <nav class="navbar">
        <div class="container">
            <img src="../assets/images/ios/logoios.png" alt="Logo">
        </div>
    </nav>

    <div class="content">
        <p>O IOS forma profissionais que agregam em sua bagagem, além do conhecimento técnico e capacitação teórica,
            competências comportamentais que o mundo do trabalho busca, como o cuidado com as relações, respeito às
            diferenças,
            trabalho em equipe, solução criativa de problemas, sempre embasados por uma mentalidade inovadora.
        </p>
    </div>

    <section class="centralizar-imag">
        <img src="../assets/images/ios/turma.png" alt="Turma">
    </section>

    <div class="cursos-ios">
        <section class="cursos">
            <div class="centro">

                <div class="content">
                    <h1>CURSOS OFERECIDOS</h1>


                    <div class="card-cursos card1">
                        <p>PROGRAMAÇÃO WEB</p>
                        <img src="../assets/images/ios/image5.png" alt="Card1" class="img-cursos">
                    </div>

                    <div class="card-cursos card2">
                        <p>SUPORTE EM TI</p>
                        <img src="../assets/images/ios/image4.png" alt="Card2" class="img-cursos">
                    </div>
        
                    <div class=" card-cursos card3">
                        <p>MICROSOFT ESSENTIAL</p>
                        <img src="../assets/images/ios/image6.png" alt="Card3" class="img-cursos">
                    </div>

                    <div class="card-cursos card4">
                        <p>GESTÃO DE PLATAFORMA ZENDESK</p>
                        <img src="../assets/images/ios/image7.png" alt="Card4" class="img-cursos">
                    </div>

                    <div class="card-cursos card5">
                        <p>GESTÃO EMPRESARIAL</p>
                        <img src="../assets/images/ios/image9.png" alt="Card5" class="img-cursos">
                    </div>

                    <div class="card-cursos card6">
                        <p>COMUNICAÇÃO E MÍDIAS SOCIAS</p>
                        <img src="../assets/images/ios/image8.png" alt="Card6" class="img-cursos">
                    </div>

                    <a href="https://ios.org.br/cursos-ios"><button>Ver Mais</button></a>

                </div>
            </div>
        </section>
    </div>
    

    <section>
        <div class="centro">
            <div class="content">

                <img src="../assets/images/ios/banner-startech 1.png" alt=logoStartTech class="logo-totvs">

                <h1>START TECH</h1>
                <P>O Start Tech é um programa criado pela TOTVS com o intuito de ampliar a empregabilidade de jovens em
                    situação de vulnerabilidade social no mercado de tecnologia.
                    A iniciativa é direcionada a ex-alunos do Instituto de Oportunidade Social. Com conteúdos
                    disponibilizados pelo IOS e pela Universidade TOTVS,
                    o programa visa aperfeiçoar a formação técnica dos alunos, além de aprimorar competências e skills e
                    deixá-los ainda mais preparados para o mercado de trabalho.</P>

            </div>
        </div>
    </section>

    <section class="metricas">
        <div class="container-metricas">

            <h2>Dados sobre o Sart Tech</h2>

                <div class="card-metricas">
                <div class="text-card">
                    <p class="numeros-metricas">+430</p>
                    <p>Horas de curso</p>
                </div>

                <div class="text-card">
                    <p class="numeros-metricas">+40</p>
                    <p>Alunos certificados</p>
                </div>

                <div class="text-card">
                    <p class="numeros-metricas">+20</p>
                    <p>Áreas da TOTVS parceira</p>
                </div>
            </div>
        </div>

        <div class="centro">

            <a href="https://formacaodetalentos.totvs.com/start-tech/"><button>Saiba mais</button></a>
        </div>

    </section>

    <footer>
        <div class="footer-esquerda">
            <img src="../assets/images/ios/logoTotvs.png" alt="Logo 1" class="logo">
        </div>
        <div class="footer-direita">
            <img src="../assets/images/ios/logoios.png" alt="Logo 2" class="logo">
        </div>
    </footer>
</body>
</template>

<style scoped>
    .centro {
            text-align: center;
        }

        body {
            margin: 0;
            font-family: 'Lato', sans-serif;
        }

        .navbar {
            background-color: #571DA1;
            color: white;
            padding: 65px 0;
        }

        .logo {
            text-align: center;
        }

        .content {
            /* espaçamento nav e conteudo */
            padding: 20px;
            max-width: 960px;
            margin: 20px auto;
        }

        .logo-totvs {
            width: 100%;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .img-cursos {
            width: 20%;
        }

        .centralizar-imag {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .centered-image img {
            max-width: 100%;
            max-height: 100%;
            margin: auto;
        }

        .content p {
            /* para aumentar o tamanho da fonte */
            font-size: 25px;
        }

        .content h1 {
            font-size: 35px;
            color: #571DA1;
        }

        .card-cursos {
            width: 300px;
            height: 180px;
            background-color: #D9D9D9;
            border-radius: 35px;
            margin: 10px;
            float: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .card-cursos p {
            font-size: 25px;
            margin: 15px;
            text-align: center;
            /* Centralizando o texto */
        }

        button {
            /* botão ver mais cursos */
            padding: 15px 40px;
            background-color: #571da1;
            color: #D9D9D9;
            border: none;
            border-radius: 90px;
            cursor: pointer;
            flex-direction: column;
            margin: 20px;
        }

        .button-saibaMais {

            padding: 15px 40px;
            background-color: #363636;
            color: #D9D9D9;
            border: none;
            border-radius: 90px;
            cursor: pointer;
            flex-direction: column;
            margin: 20px;
        }

        .container-metricas {
            margin: 0px 0px;
            background: #363636;
            display: flex;
            flex-direction: column;
            justify-items: center;
            align-items: center;
            gap: 20px;
            color: #fff;
        }

        .card-metricas {
            display: flex;
            flex-direction: row;
            gap: 20px;
            padding: 20px;
        }

        .text-card {
            display: flex;
            flex-direction: column;
            justify-items: center;
            align-items: center;
            border-right: 1px solid red;
            border-image: linear-gradient(to bottom, #181818, #eee, #181818) 1 100%;
            padding: 0 20px;
        }

        .numeros-metricas {
            font-size: 32px;
        }

        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(to right, #363636, #571DA1);
            /* gradiente de cores */
            padding: 10px;
        }

        .logo {
            width: 150px;
            /* largura do logo */
        }
</style>