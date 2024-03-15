<template>
    
    <section class="apresentacao">
            <div class="container">
                <div class="card-apresentacao">
                    <h2>O que é o TOTVS Meu Suporte?</h2>
                    <p>Resolva rapidamente problemas técnicos com a TOTVS. Acesse nossa ampla base de conhecimento,
                        repleta de artigos, tutoriais e FAQs abrangendo todos os nossos produtos. Mantenha seus
                        softwares atualizados com as últimas versões para garantir o melhor desempenho e segurança. Além
                        disso, nossa equipe de especialistas em software está disponível para oferecer suporte
                        personalizado através de telefone, e-mail ou chat. Simplifique sua experiência técnica conosco e
                        tenha tranquilidade ao lidar com questões técnicas.</p>
                </div>

                <div class="banner-apresentacao">
                    <img src="../assets/images/banner-meu-suporte.png" alt="">
                </div>

                <div class="card-apresentacao">
                    <h2>Benefícios do nosso software</h2>
                    <p>Otimize sua operação com a TOTVS! Agilize a resolução de problemas com a abertura de chamados e
                        acesso à nossa base de conhecimento. Reduza custos ao solucionar questões por conta própria.
                        Garanta maior autonomia e eficiência, sem depender do suporte técnico. Aumente a produtividade
                        com acesso simplificado a informações e ferramentas de diagnóstico. Simplifique sua experiência
                        técnica com a TOTVS e impulsione seu sucesso.</p>
                </div>
            </div>
        </section>

        <section class="funcionalidades">
            <div class="container-funcionalidades">
                <h3>Funcionalidades</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque corporis omnis similique minima
                    expedita quae autem deleniti labore architecto unde. Animi debitis laudantium autem aut molestias
                    soluta, quae numquam fugiat?
                </p>
                <div class="container-cards">
                    <div class="cards-funcionalidades card1">

                    </div>

                    <div class="cards-funcionalidades card2">

                    </div>

                    <div class="cards-funcionalidades card3">

                    </div>

                    <div class="cards-funcionalidades card4">

                    </div>

                    <div class="cards-funcionalidades card5">
                        

                    </div>
                </div>
            </div>
        </section>


        <section class="metricas">
            <div class="container-metricas">
                <h4>Avaliações dos nossos clientes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi facilis vel earum distinctio sint eum
                    iste ut perspiciatis accusantium obcaecati maiores assumenda, asperiores quibusdam ex eos veniam
                    consequatur harum quo.
                </p>

                <div class="card-metricas">
                    <div class="text-card">
                        <p class="numeros-metricas">500+</p>
                        <p>Downloads</p>
                    </div>

                    <div class="text-card">
                        <p class="numeros-metricas">500+</p>
                        <p>Número de clientes</p>
                    </div>

                    <div class="text-card">
                        <p class="numeros-metricas">4.8</p>
                        <p>Média das avaliações</p>
                    </div>
                </div>
            </div>
        </section>

        
    
</template>

<style>

.apresentacao {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1d1d1d;
}

.container {
    background-color: #1D1D1D;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px 0px;
    gap: 20px;
}

.card-apresentacao {
    background-color: #111111;
    padding: 20px;
    max-width: 1200px;
    height: 200px;
    border-radius: 20px;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

}

.card-apresentacao h2 {
    font-size: 32px;
    color: #fff;
}

.card-apresentacao p {
    font-size: 18px;
    color: #858585;
}

.banner-apresentacao img {
    max-width: 1200px;
    height: 100%;
    border-radius: 20px;
}

.funcionalidades {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: #D8DBE2;
}

.container-funcionalidades {
    margin: 30px 0px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    max-width: 1200px;
    gap: 20px;
}

.container-funcionalidades h3 {
    font-size: 32px;
}

.container-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    grid-template-areas:
        "card1 card2"
        "card3 card4"
        "card5 card5"
}

.cards-funcionalidades {
    width: 450px;
    height: 400px;
    background-color: #111111;
    border-radius: 30px;
}

.card1 {
    grid-area: card1;
}

.card2 {
    grid-area: card2;
}

.card3 {
    grid-area: card3;
}

.card4 {
    grid-area: card4;
}

.card5 {
    width: 930px;
    height: 400px;
    grid-area: card5;
}

.metricas {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: #1D1D1D;
}

.container-metricas {
    margin: 30px 0px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    max-width: 1200px;
    gap: 20px;
    color: #fff;
}

.container-metricas h4 {
    font-size: 32px;
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

.text-card:last-child {
    border-right: none;
}

.numeros-metricas {
    font-size: 32px;
}
</style>