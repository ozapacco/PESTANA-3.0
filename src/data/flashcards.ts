export interface Flashcard {
  id: string;
  moduleId: string;
  front: string;
  back: string;
}

export const flashcards: Flashcard[] = [
  {
    id: 'fc-1',
    moduleId: 'mod-1',
    front: 'Acentuam-se as oxítonas terminadas em {{c1::A(s), E(s), O(s), EM, ENS}}.',
    back: 'As oxítonas seguem a regra básica de acentuação para essas cinco terminações específicas.<br><br><i>Fonte: Regras Gerais de Acentuação</i><hr><b>BIZU:</b> Memorize o final: <span class="text-emerald-400 font-bold">A-E-O-EM-ENS</span>. Se terminar assim e for oxítona, tem acento (ex: Marajá, Café, Jiló, Armazém, Parabéns).'
  },
  {
    id: 'fc-2',
    moduleId: 'mod-1',
    front: 'Acentuam-se as paroxítonas terminadas em {{c1::ditongo oral}}.',
    back: 'Esta é a regra que mais cai em provas de tribunais e carreiras policiais.<br><br><i>Fonte: Regras Gerais de Acentuação</i><hr><b>BIZU:</b> Viu paroxítona terminada em <span class="text-emerald-400 font-bold">Vogal + Semivogal</span>? O acento é obrigatório (ex: Histór<b>ia</b>, Sér<b>ie</b>, Própr<b>io</b>).'
  },
  {
    id: 'fc-3',
    moduleId: 'mod-1',
    front: 'Perderam o acento as palavras {{c1::paroxítonas}} que apresentam os ditongos abertos ÉI e ÓI.',
    back: 'A mudança do Novo Acordo atingiu apenas as paroxítonas, as oxítonas mantêm o acento.<br><br><i>Fonte: Novo Acordo Ortográfico</i><hr><b>BIZU:</b> <span class="text-red-400 font-bold">Paro</span>xítona <span class="text-red-400 font-bold">parou</span> de acentuar (ex: Id<b>ei</b>a, Jib<b>oi</b>a, Hero<b>ic</b>o). <span class="text-emerald-400 font-bold">Oxi</span>tona continua <span class="text-emerald-400 font-bold">ok</span> (ex: Pap<b>éi</b>s, Her<b>ói</b>).'
  },
  {
    id: 'fc-4',
    moduleId: 'mod-1',
    front: 'Acentua-se o "I" e o "U" tônico em hiato, sozinhos ou com "S", desde que {{c1::NÃO sejam seguidos de NH}}.',
    back: 'O dígrafo NH impede a acentuação do hiato por razões fonéticas de nasalização.<br><br><i>Fonte: Regra do Hiato</i><hr><b>BIZU:</b> Sa-ú-de (Ok), Pa-ís (Ok), mas Ra-i-nha (<span class="text-red-400 font-bold">Sem acento</span>).'
  },
  {
    id: 'fc-5',
    moduleId: 'mod-1',
    front: 'No emprego do hífen com prefixos, as letras {{c1::iguais}} se separam e as letras {{c2::diferentes}} se unem.',
    back: 'Esta é a regra de ouro pós-reforma ortográfica.<br><br><i>Fonte: Emprego do Hífen</i><hr><b>BIZU:</b> <b>Opostos se atraem</b> (Autoescola). <b>Iguais se repelem</b> (Micro-ondas).'
  },
  {
    id: 'fc-6',
    moduleId: 'mod-1',
    front: 'O prefixo {{c1::CO}} aglutina-se em regra sem hífen, mesmo diante de vogal igual.',
    back: 'Este prefixo é uma exceção à regra geral de "letras iguais se separam".<br><br><i>Fonte: Exceções do Hífen</i><hr><b>BIZU:</b> O "CO" é <span class="text-emerald-400 font-bold">grudento</span>: Coobrigado, Coautor, Coordenar.'
  },
  {
    id: 'fc-7',
    moduleId: 'mod-1',
    front: 'Se o prefixo termina em vogal e a palavra seguinte começa com R ou S, deve-se {{c1::duplicar a consoante}}.',
    back: 'Esta regra evita que o R ou S fiquem com som brando/fraco entre vogais.<br><br><i>Fonte: Regra do aRRoSS</i><hr><b>BIZU:</b> Mini + Saia = <span class="text-yellow-400 font-bold">Minissaia</span>. Ant<b>i</b> + <b>r</b>acismo = <span class="text-yellow-400 font-bold">Antirracismo</span>.'
  },
  {
    id: 'fc-8',
    moduleId: 'mod-1',
    front: 'O prefixo MAL exige hífen quando o radical começa por {{c1::Vogal, H ou L}}.',
    back: 'Diante de outras consoantes, o prefixo MAL deve ser escrito junto ao radical.<br><br><i>Fonte: Emprego do Hífen</i><hr><b>BIZU:</b> Mnemônico: <span class="text-yellow-400 font-bold">MAL-Vogal</span> (incluindo H e L que têm comportamento similar). Ex: Mal-estar, Mal-humorado, Mal-limpo.'
  },
  {
    id: 'fc-9',
    moduleId: 'mod-1',
    front: 'Prefixos {{c1::tônicos}} como PRÉ, PRÓ e PÓS sempre exigem hífen.',
    back: 'Diferente de suas formas átonas (pre, pro, pos), as formas acentuadas mantêm independência.<br><br><i>Fonte: Prefixos Acentuados</i><hr><b>BIZU:</b> Tem <b>acento gráfico</b> no prefixo? Tem <span class="text-emerald-400 font-bold">Hífen</span> obrigatoriamente.'
  },
  {
    id: 'fc-10',
    moduleId: 'mod-1',
    front: 'O acento diferencial de número permanece nos verbos {{c1::TER e VIR}} e seus derivados.',
    back: 'Este é um dos poucos acentos diferenciais que sobreviveu à reforma.<br><br><i>Fonte: Acentos Diferenciais</i><hr><b>BIZU:</b> Singular: Ele tem/vem. Plural: Eles <span class="text-yellow-400 font-bold">têm/vêm</span> (com circunflexo).'
  },
  {
    id: 'fc-11',
    moduleId: 'mod-1',
    front: 'A letra X, quando pronunciada como /KS/, é classificada como um {{c1::dífono}}.',
    back: 'Neste cenário, a palavra terá sempre um fonema a mais que o número de letras.<br><br><i>Fonte: Fonologia / Letra X</i><hr><b>BIZU:</b> T-Á-X-I (4 letras, <span class="text-yellow-400 font-bold">5 fonemas</span>). O X "vale por dois" sons.'
  },
  {
    id: 'fc-12',
    moduleId: 'mod-1',
    front: 'Não se usa hífen em locuções que apresentem {{c1::elemento de ligação}}.',
    back: 'Esta regra removeu hífens de expressões muito comuns do cotidiano.<br><br><i>Fonte: Novo Acordo Ortográfico</i><hr><b>BIZU:</b> Mão <span class="text-red-400 font-bold">de</span> obra, Dia <span class="text-red-400 font-bold">a</span> dia, Café <span class="text-red-400 font-bold">com</span> leite. Se tem preposição no meio, <span class="text-red-400 font-bold">sem hífen</span>.'
  },
  {
    id: 'fc-13',
    moduleId: 'mod-1',
    front: 'O termo {{c1::porquê}} (junto e com acento) possui valor gramatical de {{c2::substantivo}}.',
    back: 'Ele exige a presença de um determinante como artigo ou numeral.<br><br><i>Fonte: Emprego dos Porquês</i><hr><b>BIZU:</b> Substitua por <span class="text-emerald-400 font-bold">"o motivo"</span>. Se fizer sentido, use junto e com chapéu (^).'
  },
  {
    id: 'fc-14',
    moduleId: 'mod-1',
    front: 'O uso de {{c1::POR QUÊ}} (separado e com acento) é obrigatório em {{c2::final de frase}} ou antes de pausa pontuada.',
    back: 'A pontuação final torna o monossílabo QUÊ tônico na fala.<br><br><i>Fonte: Os Porquês</i><hr><b>BIZU:</b> Pense na pontuação como um <b>ímã</b> que puxa o acento circunflexo para cima do E.'
  },
  {
    id: 'fc-15',
    moduleId: 'mod-1',
    front: '{{c1::Há}} indica tempo passado (decorrido), enquanto {{c2::a}} indica tempo futuro ou distância.',
    back: 'O termo "Há" é o verbo haver impessoal e pode ser substituído por "faz".<br><br><i>Fonte: Expressões Problemáticas</i><hr><b>BIZU:</b> <b>H</b>á = <b>H</b>istória (passado). <b>A</b> = <b>A</b>diante (futuro ou espaço).'
  },
  {
    id: 'fc-fon-1',
    moduleId: 'mod-1',
    front: 'A {{c1::letra}} é o símbolo visual (escrita), enquanto o {{c2::fonema}} é a unidade sonora (fala).',
    back: 'Para entender acentuação e ortografia, você precisa separar o que você VÊ do que você OUVE.<br>Ex: A palavra <b>PATO</b> tem 4 letras e 4 fonemas.'
  },
  {
    id: 'fc-fon-2',
    moduleId: 'mod-1',
    front: 'Ocorre um {{c1::dígrafo}} quando duas letras se unem para representar apenas um fonema (som).',
    back: 'Sempre que houver um dígrafo, a palavra terá menos fonemas do que letras.<br>Ex: <b>CH</b>uva, ma<b>LH</b>a, ba<b>NH</b>a.'
  },
  {
    id: 'fc-fon-3',
    moduleId: 'mod-1',
    front: 'Na Língua Portuguesa, NÃO EXISTE sílaba sem {{c1::vogal}}, e NUNCA HÁ mais de uma {{c1::vogal}} na mesma sílaba.',
    back: 'Se houver dois sons vocálicos juntos na mesma sílaba, um é a Vogal (forte) e o outro é a Semivogal (fraca).'
  },
  {
    id: 'fc-ac-1',
    moduleId: 'mod-2',
    front: 'A regra das {{c1::proparoxítonas}} é a mais fácil: TODAS são acentuadas.',
    back: 'Se a sílaba tônica for a antepenúltima, o acento é obrigatório.<br>Ex: <b>MÉ</b>-di-co, <b>LÂM</b>-pa-da, <b>ÁR</b>-vo-re.'
  },
  {
    id: 'fc-ac-2',
    moduleId: 'mod-2',
    front: 'Acentuam-se as paroxítonas terminadas em {{c1::L, I(s), N, U(s), R, X, Ã(s), ÃO(s), UM, UNS, PS}}.',
    back: '<b>BIZU:</b> Memorize a palavra <b>LINURX</b> (L, I, N, U, R, X) + os "ão/ã" e "um/uns".<br>Ex: Fá-ci<b>l</b>, Tá-x<b>i</b>, Hí-fe<b>n</b>, Ví-r<b>us</b>.'
  },
  {
    id: 'fc-ort-1',
    moduleId: 'mod-3',
    front: 'O prefixo {{c1::BEM}} é antissocial e quase sempre exige o hífen.',
    back: 'Ele não aceita se misturar com a palavra seguinte.<br>Ex: <b>Bem-vindo</b>, <b>Bem-estar</b>, <b>Bem-humorado</b>.<br>Exceção: Derivados de "querer" ou "fazer" (Benfeito, Benquerer).'
  },
  {
    id: 'fc-ort-2',
    moduleId: 'mod-3',
    front: 'Usa-se {{c1::POR QUE}} (separado e sem acento) em perguntas ou quando puder ser substituído por "por qual motivo".',
    back: 'Ex: <b>Por que</b> você não foi? (Por qual motivo)<br>Ex: Os caminhos <b>por que</b> passei. (Pelos quais)'
  },
  {
    id: 'fc-ort-3',
    moduleId: 'mod-3',
    front: 'Usa-se {{c1::PORQUE}} (junto e sem acento) em respostas, explicações ou causas.',
    back: 'Pode ser substituído por "pois".<br>Ex: Não fui <b>porque</b> choveu.'
  },

  // ==========================================
  // MÓDULO 4: PRONOMES E VERBOS
  // ==========================================
  {
    id: 'fc-16',
    moduleId: 'mod-4',
    front: 'O pronome demonstrativo usado para retomar algo que JÁ FOI mencionado no texto é {{c1::esse(s), essa(s), isso}}.',
    back: '<b>Função Anafórica:</b> Aponta para o que já foi mencionado.<br>Ex: João passou em primeiro lugar, <b>esse</b> cara é bom.'
  },
  {
    id: 'fc-17',
    moduleId: 'mod-4',
    front: 'O pronome demonstrativo usado para anunciar algo que AINDA SERÁ mencionado no texto é {{c1::este(s), esta(s), isto}}.',
    back: '<b>Função Catafórica:</b> Aponta ao que será mencionado (anuncia).<br>Ex: <b>Esta</b> é sua nova senha: ynot.xp$%; memorize-a.'
  },
  {
    id: 'fc-18',
    moduleId: 'mod-4',
    front: 'O pronome relativo {{c1::cujo(s), cuja(s)}} sempre indica posse e vem entre dois substantivos (possuidor e possuído).',
    back: '<b>Atenção:</b> Não pode ser seguido nem precedido de artigo (nada de "cujo o", "cuja a").<br>Ex: Vi o filme <b>cujo</b> diretor ganhou o Oscar.'
  },
  {
    id: 'fc-19',
    moduleId: 'mod-4',
    front: 'As palavras atrativas que obrigam a PRÓCLISE (pronome antes do verbo) são: {{c1::Palavras negativas, Advérbios, Conjunções subordinativas, Pronomes (relativos, indefinidos, interrogativos)}}.',
    back: '<b>Regra Geral:</b> Palavra invariável antes do verbo geralmente atrai pronome proclítico.<br>Ex: <b>Não</b> me deixe sentar.'
  },
  {
    id: 'fc-20',
    moduleId: 'mod-4',
    front: 'É proibido usar pronome oblíquo átono após verbos no {{c1::particípio}} e no {{c1::futuro (do presente e do pretérito)}}.',
    back: '<b>Proibições Gerais da Ênclise:</b><br>1. Tinha emprestado-lhe (ERRADO) -> Tinha-lhe emprestado (CERTO).<br>2. Darei-te (ERRADO) -> Dar-te-ei (CERTO).'
  },
  {
    id: 'fc-21',
    moduleId: 'mod-4',
    front: 'O Pretérito Mais-Que-Perfeito do Indicativo indica um fato passado ocorrido {{c1::antes de outro fato também no passado}}.',
    back: '<b>Desinência:</b> -RA (amara, vendera, partira).<br>Ex: Quando cheguei ao ponto, o ônibus já <b>passara</b> (ou <b>havia passado</b>).'
  },
  {
    id: 'fc-22',
    moduleId: 'mod-4',
    front: 'A Voz Passiva Sintética (ou Pronominal) é formada pela estrutura: {{c1::VTD (ou VTDI) + SE}}.',
    back: '<b>Atenção:</b> O "SE" é pronome apassivador e o verbo concorda com o sujeito paciente.<br>Ex: <b>Vende-se</b> casa / <b>Vendem-se</b> casas.'
  },
  {
    id: 'fc-23',
    moduleId: 'mod-4',
    front: 'A correlação verbal clássica condicional é: "Se eu pudesse, {{c1::faria}} / Se eu puder, {{c1::farei}}".',
    back: '<b>Correlação:</b><br>Pretérito Imperfeito do Subjuntivo + Futuro do Pretérito do Indicativo.<br>Futuro do Subjuntivo + Futuro do Presente do Indicativo.'
  },
  // ==========================================
  // MÓDULO 5: SINTAXE DA ORAÇÃO
  // ==========================================
  {
    id: 'fc-mod5-1',
    moduleId: 'mod-5',
    front: 'O sujeito {{c1::oculto}} é identificável pela terminação do verbo ou contexto, enquanto o sujeito {{c2::indeterminado}} não se pode identificar.',
    back: 'Exemplo de Oculto: <i>Encontramos mamãe</i> (Nós).<br>Exemplo de Indeterminado: <i>Roubaram nosso carro</i> (Quem roubou?).'
  },
  {
    id: 'fc-mod5-2',
    moduleId: 'mod-5',
    front: 'O Objeto Direto Preposicionado ocorre quando a preposição é inserida por motivo de {{c1::clareza, eufonia ou ênfase}}, e não por exigência do verbo.',
    back: 'Ex: <i>Amar a Deus</i>. O verbo amar é Transitivo Direto, mas a preposição "a" foi inserida por ênfase.'
  },
  {
    id: 'fc-mod5-3',
    moduleId: 'mod-5',
    front: 'O Complemento Nominal tem sentido {{c1::paciente}} (alvo), enquanto o Adjunto Adnominal tem sentido {{c2::agente}} (posse, origem).',
    back: '<b>BIZU:</b> Se o termo preposicionado ("de") estiver ligado a um substantivo abstrato, faça o teste do agente/paciente.<br>Ex: <i>O abuso de remédios</i> (CN - os remédios são abusados).<br>Ex: <i>As pessoas da família</i> (AA - a família possui as pessoas).'
  },
  {
    id: 'fc-mod5-4',
    moduleId: 'mod-5',
    front: 'O {{c1::Predicativo}} indica estado e é variável, enquanto o {{c2::Adjunto Adverbial}} indica circunstância e é invariável.',
    back: 'Ex: <i>João parece melancólico</i> (Predicativo do Sujeito).<br>Ex: <i>Ele morreu por amor</i> (Adjunto Adverbial de causa).'
  },
  {
    id: 'fc-mod5-5',
    moduleId: 'mod-5',
    front: 'O Predicado {{c1::Verbo-Nominal}} possui um verbo de ação e um predicativo (do sujeito ou do objeto).',
    back: 'Ex: <i>João saiu triste</i> (Verbo de ação "saiu" + Predicativo do sujeito "triste").'
  },
  {
    id: 'fc-mod5-6',
    moduleId: 'mod-5',
    front: 'O {{c1::Vocativo}} é um chamamento (termo externo), enquanto o {{c2::Aposto}} explica, resume ou especifica outro termo da oração.',
    back: 'Ex: <i>Paulo, preciso de ajuda!</i> (Vocativo).<br>Ex: <i>Jorge, o malandro, ainda é jovem</i> (Aposto explicativo).'
  },
  {
    id: 'fc-mod5-7',
    moduleId: 'mod-5',
    front: 'A ordem natural da organização de uma sentença na nossa língua é {{c1::SuVeCA}}.',
    back: '<b>SuVeCA</b> = Sujeito + Verbo + Complemento + Adjuntos.<br>Ex: Eu (Sujeito) comprei (Verbo) uma bicicleta (Complemento) semana passada (Adjunto).'
  },
  {
    id: 'fc-mod5-8',
    moduleId: 'mod-5',
    front: 'Com os verbos causativos e sensitivos (Deixar, Fazer, Mandar, Ver, Ouvir, Sentir), o pronome oblíquo átono pode exercer a função sintática de {{c1::sujeito}}.',
    back: 'Ex: <i>Mandei-o sair.</i> O pronome "o" é sujeito do verbo no infinitivo "sair".'
  },
  {
    id: 'fc-mod5-9',
    moduleId: 'mod-5',
    front: 'A expressão "tratar-se de" (VTI + SE) configura sujeito {{c1::indeterminado}}, portanto o verbo fica sempre na {{c2::3ª pessoa do singular}}.',
    back: 'Ex: <i>Trata-se de duas moedas de cobre.</i> (Incorreto: Tratam-se de...)'
  },
  {
    id: 'fc-mod5-10',
    moduleId: 'mod-5',
    front: 'O verbo "haver" no sentido de "existir" ou "tempo decorrido" é {{c1::impessoal}}, formando uma oração {{c2::sem sujeito}}.',
    back: 'O verbo impessoal fica sempre na 3ª pessoa do singular e "contamina" os verbos auxiliares.<br>Ex: <i>Deve haver mil pessoas aqui.</i>'
  },
  {
    id: 'fc-mod5-11',
    moduleId: 'mod-5',
    front: 'O Objeto Direto {{c1::Pleonástico}} é representado por um pronome que retoma um objeto direto já existente na oração, com finalidade de ênfase.',
    back: 'Ex: <i>Esta moto, comprei-a na promoção.</i>'
  },
  {
    id: 'fc-mod5-12',
    moduleId: 'mod-5',
    front: 'O Complemento Nominal liga-se a {{c1::substantivos abstratos, adjetivos e advérbios}}, sempre com preposição.',
    back: 'O Adjunto Adnominal, por sua vez, liga-se apenas a substantivos (concretos ou abstratos).'
  },
  {
    id: 'fc-mod5-13',
    moduleId: 'mod-5',
    front: 'O Predicativo do Objeto é a qualificação atribuída ao objeto por verbos {{c1::transobjetivos}}.',
    back: 'Ex: <i>O povo elegeu-o senador.</i> (senador = predicativo do objeto "o").<br>Ex: <i>Achei o filme bacana.</i> (bacana = predicativo do objeto "filme").'
  },
  {
    id: 'fc-mod5-14',
    moduleId: 'mod-5',
    front: 'O agente da passiva geralmente é introduzido pela preposição "por" (ou "pelo/pela"), mas também pode ser introduzido pela preposição {{c1::"de"}}.',
    back: 'Ex: <i>O mocinho foi cercado de zumbis.</i>'
  },
  {
    id: 'fc-mod5-15',
    moduleId: 'mod-5',
    front: 'Frase é qualquer enunciado de sentido completo. Se não tiver verbo, é frase {{c1::nominal}}. Se tiver verbo, é frase verbal, ou seja, uma {{c2::oração}}.',
    back: 'Ex Nominal: <i>Fogo!</i><br>Ex Verbal (Oração): <i>Comprei um cachimbo.</i>'
  },
  {
    id: 'fc-mod5-16',
    moduleId: 'mod-5',
    front: 'O Aposto {{c1::Especificativo}} não vem separado por pontuação e individualiza o seu referente, geralmente um nome próprio especificando um substantivo comum.',
    back: 'Ex: <i>A praia da Pipa é linda.</i><br>Ex: <i>O artilheiro Messi é o melhor da história.</i>'
  },
  {
    id: 'fc-mod5-17',
    moduleId: 'mod-5',
    front: 'Para diferenciar Predicativo do Objeto de Adjunto Adnominal, substitua o objeto por um pronome. Se o adjetivo "sumir" junto, é {{c1::Adjunto Adnominal}}. Se ficar separado, é {{c2::Predicativo do Objeto}}.',
    back: 'Ex: <i>Julguei as perguntas complexas</i> -> <i>Julguei-as complexas</i> (Ficou separado = Predicativo).<br>Ex: <i>Resolveram as perguntas complexas</i> -> <i>Resolveram-nas</i> (Sumiu junto = Adjunto Adnominal).'
  },
  {
    id: 'fc-mod5-18',
    moduleId: 'mod-5',
    front: 'O Objeto Direto {{c1::Preposicionado}} ocorre obrigatoriamente quando o objeto é um pronome oblíquo tônico (a mim, a ti, a nós), o pronome relativo "quem", ou a palavra "ambos".',
    back: 'Ex: <i>Vendemos a nós mesmos.</i><br>Ex: <i>Encontrou o funcionário a quem tinha demitido.</i>'
  },
  {
    id: 'fc-mod5-19',
    moduleId: 'mod-5',
    front: 'O sujeito pode aparecer na forma de uma oração (Sujeito Oracional). Nesses casos, o verbo da oração principal fica obrigatoriamente na {{c1::3ª pessoa do singular}}.',
    back: 'Ex: <i>É necessário [que estudemos mais].</i> (ISTO é necessário).<br>Ex: <i>Falta [comprar o pão].</i>'
  },
  {
    id: 'fc-mod5-20',
    moduleId: 'mod-5',
    front: 'O Adjunto Adverbial, quando deslocado para o início ou meio da oração, deve ser separado por {{c1::vírgula(s)}} (obrigatória se for longo, facultativa se for curto).',
    back: 'Ex: <i>Na semana passada, eu estudei muito.</i><br>Ex: <i>Eu, na semana passada, estudei muito.</i>'
  },
  {
    id: 'fc-mod5-21',
    moduleId: 'mod-5',
    front: 'A diferença entre Sujeito Oculto e Indeterminado: o Oculto é identificável pela {{c1::desinência do verbo ou contexto}}; o Indeterminado {{c2::não se pode identificar}}.',
    back: 'Oculto: <i>Encontramos mamãe.</i> (Nós).<br>Indeterminado: <i>Roubaram nosso carro!</i> (Quem roubou? Não se sabe).'
  },
  // ==========================================
  // MÓDULO 6: SINTAXE DO PERÍODO
  // ==========================================
  {
    id: 'fc-mod6-1',
    moduleId: 'mod-6',
    front: 'O período composto por {{c1::coordenação}} possui orações sintaticamente independentes, enquanto o período composto por {{c2::subordinação}} possui orações que exercem função sintática em relação à oração principal.',
    back: 'Ex Coordenação: <i>Chegou e deitou-se.</i><br>Ex Subordinação: <i>Desejo que sejas feliz.</i> (A segunda oração é objeto direto da primeira).'
  },
  {
    id: 'fc-mod6-2',
    moduleId: 'mod-6',
    front: 'As orações coordenadas que não possuem conectivo (conjunção) são chamadas de {{c1::assindéticas}}, e as que possuem são chamadas de {{c2::sindéticas}}.',
    back: 'As sindéticas dividem-se em 5 tipos: Aditivas, Adversativas, Alternativas, Conclusivas e Explicativas.'
  },
  {
    id: 'fc-mod6-3',
    moduleId: 'mod-6',
    front: 'Para identificar facilmente uma Oração Subordinada Substantiva, basta substituir a oração inteira pelo pronome {{c1::"ISSO"}}. Elas são introduzidas pelas conjunções integrantes {{c2::"que" e "se"}}.',
    back: 'Ex: <i>É necessário [que você estude].</i> -> É necessário [ISSO]. Logo, a oração é Substantiva (no caso, Subjetiva, pois atua como sujeito de "É necessário").'
  },
  {
    id: 'fc-mod6-4',
    moduleId: 'mod-6',
    front: 'As Orações Subordinadas Adjetivas são introduzidas por {{c1::pronomes relativos}} (que, o qual, cujo, onde). Se vierem sem vírgulas, são {{c2::restritivas}}; se vierem entre vírgulas, são {{c3::explicativas}}.',
    back: 'Restritiva: particulariza o sentido (ex: <i>O aluno que estuda passa</i>).<br>Explicativa: generaliza, traz informação adicional (ex: <i>O sol, que é uma estrela, ilumina a Terra</i>).'
  },
  {
    id: 'fc-mod6-5',
    moduleId: 'mod-6',
    front: 'As Orações Subordinadas Adverbiais indicam circunstâncias. A conjunção "embora" introduz uma oração adverbial {{c1::concessiva}}, enquanto "à medida que" introduz uma oração adverbial {{c2::proporcional}}.',
    back: 'São 9 tipos (6 C\'s + FTP): Causais, Consecutivas, Concessivas, Condicionais, Comparativas, Conformativas, Finais, Temporais, Proporcionais.'
  },
  {
    id: 'fc-mod6-6',
    moduleId: 'mod-6',
    front: 'As Orações Reduzidas apresentam o verbo em uma de suas formas nominais ({{c1::infinitivo, gerúndio ou particípio}}) e NÃO possuem {{c2::conjunção ou pronome relativo}}.',
    back: 'Ex: <i>Terminada a aula, todos saíram.</i> (Reduzida de particípio).<br>Desenvolvida: <i>Quando terminou a aula, todos saíram.</i>'
  },
  {
    id: 'fc-mod6-7',
    moduleId: 'mod-6',
    front: 'As conjunções coordenativas adversativas (porém, contudo, entretanto) e conclusivas (portanto, logo), quando deslocadas para o meio da oração, ficam obrigatoriamente entre {{c1::vírgulas}}.',
    back: 'Ex: <i>João chegou tarde; saiu, porém, cedo.</i>'
  }
];
