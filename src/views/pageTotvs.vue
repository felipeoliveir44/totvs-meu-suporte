<script lang="ts">
import Navbar from '../components/Navbar.vue';
export default {

 components: {
    Navbar
  },
}
</script>

<template>
  <main>
    <Navbar />
    
    <section class="apresentacao">
            <div class="container margin-mobile">
                <div class="card-apresentacao">
                    <h2>O que é o TOTVS Meu Suporte?</h2>
                    <p>Uma plataforma gratuita que facilita o acesso aos produtos da TOTVS, oferecendo diversas funcionalidades para atender às necessidades de nossos clientes. 
                        Por meio de um painel dinâmico, os usuários ficam atualizados sobre as últimas novidades do Universo TOTVS, incluindo webinars, podcasts, lançamentos de novos produtos, 
                        informações sobre novas versões e muito mais.</p>
                </div>

                <div class="banner-apresentacao">
                    <img src="../assets/images/totvs/banner-meu-suporte.png" alt="">
                </div>

                <div class="card-apresentacao">
                    <h2>Benefícios do nosso software</h2>
                    <p>Nosso software oferece uma série de benefícios significativos para os usuários. Primeiramente, ele simplifica e padroniza o acesso aos produtos da TOTVS, garantindo uma experiência mais eficiente e fluida. 
                        Além disso, as diversas funcionalidades auxiliares disponíveis ajudam a otimizar as atividades diárias dos usuários, tornando seus processos mais produtivos e eficazes.
                </p>
                </div>
            </div>
    </section>

        <section class="funcionalidades">
            <div class="container-funcionalidades margin-mobile">
                <h3>Funcionalidades</h3>
                <p>Conheça as principais funcionalidades do nosso software TOTVS, projetadas para simplificar e aprimorar sua gestão de negócios.
                </p>
                <div class="container-cards">
                    <div class="cards-funcionalidades card1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3.43 -3.43 96 96" height="96" width="96" id="Command--Streamline-Core"><desc>Command Streamline Icon: https://streamlinehq.com</desc><g id="Command--Streamline-Core"><path id="Vector" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M74.81392857142856 63.671428571428564c2.203668142857143 0 4.358309285714285 0.6532688571428571 6.190136285714285 1.8776704285714283 1.832463714285714 1.2244015714285712 3.260613857142857 2.9645417142857142 4.104260285714285 5.000754 0.8430097142857141 2.0362122857142855 1.0639495714285714 4.276173142857142 0.6341674285714285 6.437818142857143 -0.42978214285714283 2.161645 -1.491184857142857 4.146920142857143 -3.049861428571428 5.70496 -1.558039857142857 1.5586765714285713 -3.5433149999999998 2.620079285714285 -5.70496 3.049861428571428s-4.401605857142857 0.2088422857142857 -6.437818142857143 -0.6341674285714285c-2.0362122857142855 -0.8436464285714286 -3.776352428571428 -2.2717965714285713 -5.000754 -4.104260285714285 -1.2244015714285712 -1.8318269999999999 -1.8776704285714283 -3.9864681428571425 -1.8776704285714283 -6.190136285714285v-60.48785714285714c0 -2.203795485714285 0.6532688571428571 -4.358054599999999 1.8776704285714283 -6.190454642857142 1.2244015714285712 -1.8323554728571427 2.9645417142857142 -3.26051835 5.000754 -4.103865522857143 2.0362122857142855 -0.8433535399999998 4.276173142857142 -1.0640132428571427 6.437818142857143 -0.6340719214285714 2.161645 0.42993495428571427 4.146920142857143 1.4911530214285713 5.70496 3.0494348299999996 1.5586765714285713 1.5583582142857142 2.620079285714285 3.5437606999999995 3.049861428571428 5.705151014285714 0.42978214285714283 2.1614539857142856 0.2088422857142857 4.4018605428571425 -0.6341674285714285 6.4378818142857135 -0.8436464285714286 2.036021271428571 -2.2717965714285713 3.7762250857142856 -4.104260285714285 5.000562985714286C79.17223785714285 24.815111557142856 77.0175967142857 25.468571428571426 74.81392857142856 25.468571428571426h-60.48785714285714c-2.203795485714285 0 -4.358054599999999 -0.6534598714285713 -6.190454642857142 -1.8778614428571427 -1.8323554728571427 -1.2243378999999999 -3.26051835 -2.9645417142857142 -4.103865522857143 -5.000562985714286 -0.8433535399999998 -2.036021271428571 -1.0640132428571427 -4.276427828571428 -0.6340719214285714 -6.4378818142857135 0.42993495428571427 -2.161390314285714 1.4911530214285713 -4.146792799999999 3.0494348299999996 -5.705151014285714 1.5583582142857142 -1.5582818085714285 3.5437606999999995 -2.6194998757142858 5.705151014285714 -3.0494348299999996 2.1614539857142856 -0.4299413214285714 4.4018605428571425 -0.20928161857142857 6.4378818142857135 0.6340719214285714 2.036021271428571 0.8433471728571427 3.7762250857142856 2.27151005 5.000562985714286 4.103865522857143C24.815111557142856 9.968016828571427 25.468571428571426 12.122275942857142 25.468571428571426 14.326071428571428v60.48785714285714c0 2.203668142857143 -0.6534598714285713 4.358309285714285 -1.8778614428571427 6.190136285714285 -1.2243378999999999 1.832463714285714 -2.9645417142857142 3.260613857142857 -5.000562985714286 4.104260285714285 -2.036021271428571 0.8430097142857141 -4.276427828571428 1.0639495714285714 -6.4378818142857135 0.6341674285714285 -2.161390314285714 -0.42978214285714283 -4.146792799999999 -1.491184857142857 -5.705151014285714 -3.049861428571428 -1.5582818085714285 -1.558039857142857 -2.6194998757142858 -3.5433149999999998 -3.0494348299999996 -5.70496 -0.4299413214285714 -2.161645 -0.20928161857142857 -4.401605857142857 0.6340719214285714 -6.437818142857143 0.8433471728571427 -2.0362122857142855 2.27151005 -3.776352428571428 4.103865522857143 -5.000754C9.968016828571427 64.32469742857143 12.122275942857142 63.671428571428564 14.326071428571428 63.671428571428564h60.48785714285714Z" stroke-width="6.86"></path></g></svg>
                        <h4>Comandos</h4>
                        <p>Através da aba de comandos, as funções são enviadas ao servidor, que se comunica com o cliente para executar o comando solicitado. Uma vez executado, os dados são retornados ao servidor, que os envia para o site exibir o resultado.</p>
                    </div>

                    <div class="cards-funcionalidades card2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 96 96" height="96" width="96" id="Desktop-Computer-1--Streamline-Ultimate"><desc>Desktop Computer 1 Streamline Icon: https://streamlinehq.com</desc><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M8.4375 16.875h45s5.625 0 5.625 5.625v33.75s0 5.625 -5.625 5.625h-45s-5.625 0 -5.625 -5.625V22.5s0 -5.625 5.625 -5.625Z" stroke-width="6"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M70.3125 28.125h5.625l5.625 -5.625c1.49175 0 2.9227499999999997 0.59265 3.9776249999999997 1.6475250000000001S87.1875 26.633174999999998 87.1875 28.125V67.5c0 1.49175 -0.5925 2.9227499999999997 -1.647375 3.9776249999999997s-2.485875 1.647375 -3.9776249999999997 1.647375l-5.625 -5.625h-5.625" stroke-width="6"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M30.9375 61.875v11.25" stroke-width="6"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M19.6875 73.125h22.5" stroke-width="6"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M75.9375 39.375h-5.625" stroke-width="6"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M75.9375 50.625h-5.625" stroke-width="6"></path></svg>
                        <h4>Dispositivos</h4>
                        <p>Através da aba de comandos, as funções são enviadas ao servidor, que se comunica com o cliente para executar o comando solicitado. Uma vez executado, os dados são retornados ao servidor, que os envia para o site exibir o resultado.</p>

                    </div>

                    <div class="cards-funcionalidades card3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 96 96" height="96" width="96" id="Cog--Streamline-Ultimate"><desc>Cog Streamline Icon: https://streamlinehq.com</desc><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M39.5475 9.14265c0.688125 0.7638375000000001 1.528875 1.3746 2.46825 1.7926875 0.939375 0.41805 1.9559999999999997 0.6340874999999999 2.98425 0.6340874999999999 1.027875 0 2.044875 -0.2160375 2.983875 -0.6340874999999999 0.939375 -0.4180875 1.7805 -1.02885 2.468625 -1.7926875l3.5475 -3.8925c1.0166250000000001 -1.125225 2.3565 -1.9082362499999999 3.8362499999999997 -2.24154375 1.479375 -0.33330375 3.0255 -0.20058375 4.4265 0.37994999999999995 1.401 0.58051875 2.58825 1.58041875 3.39825 2.8624312499999998 0.8099999999999999 1.2820125 1.203375 2.783325 1.1265 4.2979125l-0.26625 5.2499625000000005c-0.05175 1.0241625 0.112125 2.0477625 0.48 3.0048375 0.36824999999999997 0.957075 0.9329999999999999 1.8264375 1.6575 2.5520625s1.593 1.291425 2.549625 1.6609875c0.956625 0.369525 1.98 0.5346375 3.004125 0.48464999999999997l5.25 -0.26625c1.5135 -0.074625 3.013125 0.3206625 4.293375 1.131675 1.2798749999999999 0.81105 2.278125 1.9981125000000002 2.857125 3.3985499999999997 0.5790000000000001 1.4004375 0.7106250000000001 2.9456625 0.37725 4.4239500000000005 -0.33337500000000003 1.47825 -1.1159999999999999 2.8171874999999997 -2.24025 3.8333249999999994l-3.9075 3.5248500000000003c-0.7631249999999999 0.6892499999999999 -1.3728749999999998 1.53075 -1.79025 2.470125 -0.417375 0.93975 -0.633 1.9563750000000002 -0.633 2.98425 0 1.0282499999999999 0.215625 2.044875 0.633 2.98425 0.417375 0.93975 1.0271249999999998 1.78125 1.79025 2.470125l3.9075 3.525c1.125 1.017 1.9080000000000001 2.3568749999999996 2.241375 3.8362499999999997 0.33337500000000003 1.479375 0.200625 3.0258749999999996 -0.379875 4.426875000000001 -0.5805 1.401 -1.58025 2.5878750000000004 -2.862375 3.397875 -1.282125 0.810375 -2.78325 1.20375 -4.2978749999999994 1.1265l-5.25 -0.26625c-1.026375 -0.0525 -2.05275 0.110625 -3.012 0.47925 -0.9592500000000002 0.369 -1.8303749999999999 0.934875 -2.5571249999999996 1.661625 -0.72675 0.72675 -1.293 1.5982500000000002 -1.661625 2.5575 -0.369 0.9592500000000002 -0.532125 1.98525 -0.47925 3.011625l0.26625 5.25c0.06712499999999999 1.5071249999999998 -0.3315 2.998125 -1.1411250000000002 4.270875 -0.809625 1.2727499999999998 -1.991625 2.265 -3.385125 2.8425000000000002 -1.3935 0.5778749999999999 -2.931 0.712125 -4.403625 0.3855 -1.472625 -0.326625 -2.809125 -1.09875 -3.827625 -2.211375l-3.5287499999999996 -3.9037499999999996c-0.688875 -0.76275 -1.5299999999999998 -1.3725 -2.469375 -1.789875 -0.9390000000000001 -0.417375 -1.95525 -0.633 -2.983125 -0.633s-2.044125 0.215625 -2.9835 0.633c-0.9390000000000001 0.417375 -1.780125 1.0271249999999998 -2.469 1.789875L36.022425000000005 84.75c-1.0169625 1.117875 -2.3539125 1.8948749999999999 -3.8285625000000003 2.22525 -1.4746875 0.32999999999999996 -3.0153375 0.197625 -4.4119125 -0.379875 -1.396575 -0.577125 -2.5810874999999998 -1.57125 -3.3921375 -2.84625 -0.81105 -1.2750000000000001 -1.209075 -2.769375 -1.1398875000000002 -4.279125l0.26999999999999996 -5.25c0.0528 -1.026375 -0.110475 -2.052375 -0.47925 -3.011625 -0.36881250000000004 -0.9592500000000002 -0.934875 -1.83075 -1.661625 -2.5575 -0.72675 -0.72675 -1.5979875000000001 -1.2926250000000001 -2.5573124999999997 -1.661625 -0.959325 -0.368625 -1.9854 -0.5317500000000001 -3.0118125 -0.47925l-5.25 0.26625c-1.5139500000000001 0.079125 -3.015225 -0.312375 -4.297725000000001 -1.120875 -1.2825374999999999 -0.808125 -2.2834125 -1.9934999999999998 -2.8652175 -3.3933750000000003 -0.58182 -1.40025 -0.7160625 -2.9456249999999997 -0.3842925 -4.425 0.33176625 -1.479375 1.1132849999999999 -2.8196250000000003 2.237235 -3.8370000000000006l3.9037499999999996 -3.525c0.7629374999999999 -0.688875 1.3728 -1.530375 1.7902125 -2.470125 0.4174125 -0.939375 0.6331125000000001 -1.9559999999999997 0.6331125000000001 -2.98425 0 -1.027875 -0.2157 -2.0445 -0.6331125000000001 -2.98425 -0.4174125 -0.939375 -1.0272750000000002 -1.780875 -1.7902125 -2.470125l-3.9037499999999996 -3.5436c-1.1203125 -1.01625 -1.89943875 -2.3536875000000004 -2.23087125 -3.8295000000000003 -0.3314325 -1.4758125 -0.1989975 -3.0179625 0.37920375 -4.4156625 0.578205 -1.3977 1.5739425 -2.5827 2.8511175 -3.3930749999999996 1.277175 -0.8103375 2.7734625 -1.2064875000000002 4.2843 -1.1342625000000002l5.25 0.26625c1.0283624999999998 0.054037499999999995 2.056575 -0.10878750000000001 3.017925 -0.4780125 0.9613125000000001 -0.3691875 1.8342375 -0.93645 2.5620374999999997 -1.6649625 0.7278 -0.7285125 1.2942375 -1.602 1.6624875000000001 -2.56365 0.36824999999999997 -0.9616875 0.5301 -1.9900875 0.47505 -3.018375l-0.25125000000000003 -5.2537875000000005c-0.0708375 -1.5102375 0.3259875 -3.0055875000000003 1.1363999999999999 -4.2819375 0.8104125 -1.2763875 1.994925 -2.2716375 3.3918749999999998 -2.8499325 1.3969500000000001 -0.5783024999999999 2.9383125 -0.7114987500000001 4.41375 -0.3814125 1.4754375000000002 0.3300825 2.8131000000000004 1.1073825 3.8304750000000003 2.2258199999999997l3.5250749999999997 3.8925Z" stroke-width="6"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M28.125 45.00375c0 4.475625 1.7779125 8.7675 4.942575 11.9325 3.1646625000000004 3.164625 7.4568 4.9425 11.932424999999999 4.9425 4.475625 0 8.767875 -1.777875 11.9325 -4.9425 3.164625 -3.165 4.9425 -7.456875 4.9425 -11.9325s-1.777875 -8.767837499999999 -4.9425 -11.9325c-3.164625 -3.1647 -7.456875 -4.942575 -11.9325 -4.942575s-8.7677625 1.777875 -11.932424999999999 4.942575C29.9029125 36.2359125 28.125 40.528124999999996 28.125 45.00375Z" stroke-width="6"></path></svg>
                        <h4>Funcionalidades</h4>
                        <p>Na aba de funcionalidades, oferecemos a capacidade de, por meio do nosso suporte, executar comandos específicos para nossos clientes em caso de problemas com o software. Isso garante uma assistência eficaz e personalizada para resolver eventuais dificuldades, proporcionando uma experiência mais tranquila e satisfatória aos usuários.</p>

                    </div>

                    <div class="cards-funcionalidades card4">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 96 96" height="96" width="96" id="Alert-Bell-Notification-2--Streamline-Ultimate"><desc>Alert Bell Notification 2 Streamline Icon: https://streamlinehq.com</desc><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M59.53125 21.8513625c0 2.9836875 1.185375 5.8451625 3.295125 7.954949999999999 2.10975 2.1097875000000004 4.971375 3.2950500000000003 7.954875 3.2950500000000003 2.9835 0 5.8451249999999995 -1.1852625 7.954875 -3.2950500000000003 2.10975 -2.1097875000000004 3.295125 -4.9712625 3.295125 -7.954949999999999s-1.185375 -5.8451625 -3.295125 -7.954949999999999c-2.10975 -2.1097875000000004 -4.971375 -3.2950500000000003 -7.954875 -3.2950500000000003 -2.9835 0 -5.8451249999999995 1.1852625 -7.954875 3.2950500000000003 -2.10975 2.1097875000000004 -3.295125 4.9712625 -3.295125 7.954949999999999Z" stroke-width="6"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M34.21875 81.5625c0.476325 1.622625 1.46535 3.04725 2.8190625000000002 4.0605 1.3535625 1.013625 2.9994375 1.5614999999999999 4.6903125 1.5614999999999999 1.6908750000000001 0 3.3367500000000003 -0.547875 4.690125 -1.5614999999999999 1.35375 -1.01325 2.343 -2.437875 2.8192500000000003 -4.0605" stroke-width="6"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M41.71875 11.25V2.8125" stroke-width="6"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M69.92999999999999 44.85375c0.70875 21.585 5.53875 25.45875 5.53875 25.45875h-67.5s5.625 -7.185 5.625 -30.9375c0.0042 -4.4062875 1.0426125 -8.7499125 3.03165 -12.681525 1.9890375000000002 -3.9316125 4.8732 -7.34145 8.4203625 -9.9551625 3.5472 -2.613675 7.6583625 -4.35825 12.0027375 -5.093325 4.344375 -0.735075 8.8005 -0.4401375 13.01025 0.8611125" stroke-width="6"></path></svg>
                        <h4>Notificações</h4>
                        <p>Através da aba de comandos, as funções são enviadas ao servidor, que se comunica com o cliente para executar o comando solicitado. Uma vez executado, os dados são retornados ao servidor, que os envia para o site exibir o resultado.</p>
                    </div>

                    <div class="cards-funcionalidades card5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" height="96" width="96" id="Analytics-Board-Graph-Line--Streamline-Ultimate"><desc>Analytics Board Graph Line Streamline Icon: https://streamlinehq.com</desc><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M9 15h78s6 0 6 6v54s0 6 -6 6H9s-6 0 -6 -6V21s0 -6 6 -6Z" stroke-width="1.5"></path><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M15 60 27.6 39 39 60l12 -12 12 12 18 -27" stroke-width="1.5"></path></svg>
                        <h4>Distribuidor de pacotes</h4>
                        <p>Através do distribuidor de pacotes, podemos realizar atualizações nos sistemas dos nossos clientes em grande escala. Essa ferramenta nos permite gerenciar e implementar as últimas atualizações de forma eficiente e coordenada, garantindo que todos os clientes tenham acesso às melhorias e correções mais recentes em seus sistemas de maneira rápida e organizada.</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="metricas">
            <div class="container-metricas margin-mobile">
                <h4>Indicadores de desempenho do nosso produto</h4>
                <p>Na seção de métricas do nosso produto, disponibilizamos informações essenciais sobre seu desempenho e aceitação pelos clientes.
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

        <section class="clientes-dizem">
            <div class="container-clientes margin-mobile">
                <h4>O que nossos clientes dizem</h4>
                <p>
                    Em nossa sessão de avaliações, os clientes compartilham feedbacks sobre nossos produtos e serviços.
                </p>

            </div>

            <div class="slider">
                <div class="slide-track">
                        <div class="slide">
                            <div class="cardCliente">
                                <div class="imgCliente">

                                </div>
                                <div class="text-cliente">
                                    <h5>LRA Junior vestuario LTDA</h5>
                                    <p>"Quero deixar meu agradecimento para o Luiz, que passou todo o passo a passo para que possamos utilizar o "Meu Suporte" tirou todas as dúvidas, o sistema também ficou ótimo com a nova atualização."</p>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="cardCliente">
                                <div class="imgCliente">

                                </div>
                                <div class="text-cliente">
                                    <h5>VULCABRAS SP COMERCIO DE ARTIGOS ESPORTIVOS LTDA </h5>
                                    <p>"Facilita muito o processo."</p>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="cardCliente">
                                <div class="imgCliente">

                                </div>
                                <div class="text-cliente">
                                    <h5>RECCO RECCO e CIA LTDA </h5>
                                    <p>"Ferramenta funcionado perfeitamente para instalação do Virtual PDV, sem nenhum problema. Obrigado a equipe Meu Suporte!!"</p>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>

            <div class="slider">
                <div class="slide-track-right">
                    <div class="slide">
                        <div class="cardCliente">
                            <div class="imgCliente">

                            </div>
                            <div class="text-cliente">
                                <h5>ONESHOP DISTRIBUIDORA LTDA </h5>
                                <p>"Processo de atualização realizado de forma rápida e precisa. Excelente ferramenta!"</p>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="cardCliente">
                            <div class="imgCliente">

                            </div>
                            <div class="text-cliente">
                                <h5>AMAVIA CAMACARI COSMETICOS LTDA  </h5>
                                <p>"Produto top!"</p>
                            </div>
                        </div>
                    </div>

                    <div class="slide">
                        <div class="cardCliente">
                            <div class="imgCliente">

                            </div>
                            <div class="text-cliente">
                                <h5>COMERCIAL CARAPA DE SECOS E MOLHADOS LTDA</h5>
                                <p>"Aplicativo é muito útil em diversos momentos, contudo sinto que ele falha em não iniciar automaticamente junto do sistema..."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class="newsletter">
                <div class="container-newsletter margin-mobile">
                    <div class="text-newsletter test">
                        <h5>Entre na nossa Newsletter</h5>
                        <p>Quer se manter atualizado sobre as últimas novidades do Meu Suporte? Então não deixe de assinar a nossa newsletter</p>
                    </div>

                    <div class="input test">
                        <label for="nomeCartao"></label>
                        <input class="inputs" type="email" id="email" name="email" placeholder="Digite seu email" required>
                        <button class="inscrever"> Inscrever-se</button>
                    </div>

                </div>
            </div>

            <div class="logo-totvs">
                <img src="../assets/images/totvs/logo-totvs-h-white.svg" alt="">
            </div>
        </footer>


  </main>
</template>

<style scoped>
#app {
    background-color: #111111;
}
* {
    overflow-x: hidden;
}

.test {
    width: 600px;
    display: flex;
    gap: 20px;
    align-items: center;
}

.logo-totvs img {
    width: 50%;
}

footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    background-color: #111111;
}
.newsletter {
    color: #fff;
    display: flex;
    margin: 30px;
    justify-content: center;
    justify-items: center;
    flex-direction: row;
    gap: 10px;
    max-width: 1200px;
}
.text-newsletter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}
.container-newsletter {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    padding: 20px 0px;
}

.newsletter h5 {
    font-size: 32px;
}

.inputs {
    width: 200px;
    height: 40px;
    border-radius: 15px;
    padding: 5px;
}

.inscrever {
    width: 168px;
    height: 50px;
    padding: 5px;
    border-radius: 15px;
    background-color: #000000;
    color:#fff;
    border: none;
}

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
    width: 100%;
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
    justify-items: center;
    grid-template-columns: auto auto;
    gap: 20px;
    grid-template-areas:
        "card1 card2"
        "card3 card4"
        "card5 card5"
}

.cards-funcionalidades {
    display: flex;
    max-width: 400px;
    height: 350px;
    background-color: #111111;
    border-radius: 30px;
    color: #fff;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
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
    max-width: 900px;
    height: 300px;
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

h4 {
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

.margin-mobile {
    margin: 20px 0px;
}
.text-card:last-child {
    border-right: none;
}

.numeros-metricas {
    font-size: 32px;
}

.clientes-dizem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: #D8DBE2;
}

.container-clientes {
    margin: 30px 0px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    max-width: 1200px;
    gap: 20px;
}




@keyframes scrollLeft {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(1210px);
    }

}

@keyframes scrollRight {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(-1210px);
    }

}

.slider {
    display: flex;
    height: auto;
    margin: auto;
    overflow: hidden;
    align-items: center;
    max-width: 1200px;
}


.slider .slide {
    display: flex;
}

.slider {
    display: flex;
    height: auto;
    margin: 20px;
    overflow: hidden;
    align-items: center;
}

.slider .slide-track {
    display: flex;
    animation: scrollLeft 15s linear infinite;
    -webkit-animation: scrollLeft 15s linear infinite;
    gap:30px;
}

.slider .slide-track-right {
    display: flex;
    animation: scrollRight 15s linear infinite;
    -webkit-animation: scrollRight 15s linear infinite;
    gap:30px;
}

.cardCliente {
    width: 400px;
    height: 150px;
    background-color: #111111;
    color: #fff;
    border-radius: 15px;
    padding: 30px;
}

/* Responsive */

@media screen and (max-width: 1300px) {
    * {
        overflow-x: hidden;
    }
    nav {
        margin: 20px;
        width: 100%;
    }

    .margin-mobile {
        margin: 20px;
    }

    .intro {
        flex-direction: column;
    }

    .container {
        width: 100%;
    }

    .banner-apresentacao img {
        width: 100%;
    }

    .container-funcionalidades {
        width: 100%;
    }



    .card-apresentacao {
        height: auto;
    }

    .cards-funcionalidades {
    width: auto;
    height: auto;
    background-color: #111111;
    border-radius: 30px;
    }

    .card-metricas {
        flex-direction: column;
    }

    .container-cards {
    justify-items: center;
    grid-template-columns: auto auto;
    grid-template-areas:
        "card1 card1"
        "card2 card2"
        "card3 card3"
        "card4 card4"
        "card5 card5"
    }

    .card5 {
        max-width: 400px;
        
    }

    .container-newsletter {
        flex-direction: column;
    }

    .text-newsletter {
        margin-bottom: 30px;
    }
    .test {

        gap:0px;
    }
}


@media screen and (max-width: 1100px) {
    .container-cards {
    grid-template-columns: auto;
    grid-template-areas:
        "card1"
        "card2"
        "card3"
        "card4"
        "card5"
    }
}
</style>

