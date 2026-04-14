export interface QuizQuestion {
  id: string;
  moduleId: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation?: string;
  }[];
  generalExplanation: string;
  source?: string;
}

export const quizzes: QuizQuestion[] = [
  // NIVELAMENTO MORFOLÓGICO
  {
    id: 'q-morf-1',
    moduleId: 'mod-0',
    source: 'FUNDATEC / 2025',
    text: 'Considerando o fragmento "É possível observar menor número de faltas dos empregados e produtividade em alta", assinale a alternativa que apresenta, respectivamente, a correta classificação das palavras sublinhadas: "É", "de" e "e".',
    options: [
      { id: 'a', text: 'Verbo – preposição – conjunção.', isCorrect: true, explanation: 'É (verbo ser), de (preposição essencial), e (conjunção aditiva).' },
      { id: 'b', text: 'Advérbio – interjeição – preposição.', isCorrect: false },
      { id: 'c', text: 'Artigo – numeral – conjunção.', isCorrect: false },
      { id: 'd', text: 'Verbo – advérbio – numeral.', isCorrect: false }
    ],
    generalExplanation: '"É" indica estado (verbo). "De" liga palavras (preposição). "E" liga orações ou termos somando ideias (conjunção).'
  },
  {
    id: 'q-morf-2',
    moduleId: 'mod-0',
    source: 'FGV / 2025',
    text: 'A frase abaixo em que a preposição sublinhada tem valor semântico (nocional), NÃO sendo exigida por nenhum termo anterior, é:',
    options: [
      { id: 'a', text: 'Desconfiai sempre DE afirmações alheias.', isCorrect: false, explanation: 'Quem desconfia, desconfia DE algo. É obrigatória (relacional).' },
      { id: 'b', text: 'Alguém que tenha um milhão DE euros sente-se bem.', isCorrect: true, explanation: 'Correto! "Milhão" não exige preposição. O "de" traz a noção de especificação/tipo.' },
      { id: 'c', text: 'Não é preciso muito para ser um produtor DE codornas.', isCorrect: false, explanation: 'Produtor DE algo. É obrigatória.' },
      { id: 'd', text: 'Eu me disporia a tentar entender a mágica se me convencessem DE que alguém entende.', isCorrect: false, explanation: 'Convencer DE algo. É obrigatória.' }
    ],
    generalExplanation: 'Preposição Relacional é exigida pela regência do verbo/nome (ex: gostar DE). Preposição Nocional não é obrigatória e traz um sentido extra (ex: copo DE vidro).'
  },
  {
    id: 'q-morf-3',
    moduleId: 'mod-0',
    source: 'IDHTEC / 2025',
    text: '"A revolução tecnológica trouxe avanços significativos para a comunicação, MAS também gerou desafios inéditos para a privacidade individual. [...] Assim, é imperativo encontrar um equilíbrio entre progresso E segurança." Qual a relação lógica estabelecida pelas conjunções destacadas?',
    options: [
      { id: 'a', text: 'Causa e consequência', isCorrect: false },
      { id: 'b', text: 'Explicação e adição', isCorrect: false },
      { id: 'c', text: 'Conclusão e adição', isCorrect: false },
      { id: 'd', text: 'Contraste e adição', isCorrect: true, explanation: '"Mas" é adversativa (contraste/oposição). "E" é aditiva (adição/soma).' }
    ],
    generalExplanation: '"Mas" introduz uma oposição (adversidade) aos avanços significativos. "E" soma progresso com segurança.'
  },

  // FONOLOGIA
  {
    id: 'q-fon-1',
    moduleId: 'mod-1',
    source: 'PREF. CARIACICA–ES / 2020',
    text: 'Assinale a alternativa que apresenta uma palavra que NÃO tenha um dígrafo consonantal, ou seja, duas letras que, juntas, representam um som de consoante.',
    options: [
      { id: 'a', text: 'Esquecer', isCorrect: false, explanation: 'Tem o dígrafo QU (som de K).' },
      { id: 'b', text: 'Trabalhar', isCorrect: false, explanation: 'Tem o dígrafo LH.' },
      { id: 'c', text: 'Sorriso', isCorrect: false, explanation: 'Tem o dígrafo RR.' },
      { id: 'd', text: 'Principalmente', isCorrect: true, explanation: 'Tem encontro consonantal (PR), mas não dígrafo consonantal.' }
    ],
    generalExplanation: 'Dígrafos consonantais inseparáveis: CH, LH, NH, QU, GU. Separáveis: RR, SS, SC, SÇ, XC, XS. Em "Principalmente" temos o encontro consonantal PR (cada letra tem seu som).'
  },
  {
    id: 'q-fon-2',
    moduleId: 'mod-1',
    source: 'FUNPAPA / 2018',
    text: 'Assinale a alternativa correta quanto ao que se afirma a respeito da palavra "instituir".',
    options: [
      { id: 'a', text: 'Há a mesma quantidade de letras e de fonemas.', isCorrect: false },
      { id: 'b', text: 'Há um ditongo.', isCorrect: false },
      { id: 'c', text: 'Há um hiato.', isCorrect: true, explanation: 'Exato! INS-TI-TU-IR. O "U" e o "I" se separam.' },
      { id: 'd', text: 'Há um dígrafo consonantal.', isCorrect: false }
    ],
    generalExplanation: 'A separação silábica é INS-TI-TU-IR. Como as vogais U e I ficaram em sílabas diferentes, temos um HIATO.'
  },

  {
    id: 'q-fon-3',
    moduleId: 'mod-1',
    source: 'FCC / 2021',
    text: 'A palavra "táxi" apresenta:',
    options: [
      { id: 'a', text: '4 letras e 4 fonemas', isCorrect: false },
      { id: 'b', text: '4 letras e 5 fonemas', isCorrect: true, explanation: 'O "x" tem som de /ks/ (dífono).' },
      { id: 'c', text: '5 letras e 4 fonemas', isCorrect: false },
      { id: 'd', text: '4 letras e 3 fonemas', isCorrect: false }
    ],
    generalExplanation: 'A palavra T-Á-X-I tem 4 letras. Porém, a letra "X" é pronunciada como /ks/ (dois sons). Portanto, temos 5 fonemas.'
  },

  // ACENTUAÇÃO
  {
    id: 'q-ac-1',
    moduleId: 'mod-2',
    source: 'CESPE / 2021',
    text: 'As palavras "médico", "lâmpada" e "árvore" são acentuadas pela mesma regra.',
    options: [
      { id: 'a', text: 'Certo', isCorrect: true, explanation: 'Todas são proparoxítonas.' },
      { id: 'b', text: 'Errado', isCorrect: false }
    ],
    generalExplanation: 'Todas as palavras proparoxítonas (antepenúltima sílaba tônica) são acentuadas graficamente.'
  },
  {
    id: 'q-ac-2',
    moduleId: 'mod-2',
    source: 'FGV / 2020',
    text: 'Assinale a opção em que a palavra foi acentuada indevidamente.',
    options: [
      { id: 'a', text: 'Ideia', isCorrect: true, explanation: 'Paroxítonas com ditongos abertos (ei, oi) perderam o acento.' },
      { id: 'b', text: 'Herói', isCorrect: false },
      { id: 'c', text: 'Papéis', isCorrect: false },
      { id: 'd', text: 'Céu', isCorrect: false }
    ],
    generalExplanation: 'Pelo Novo Acordo Ortográfico, os ditongos abertos ÉI e ÓI perderam o acento APENAS nas palavras paroxítonas (ex: ideia, jiboia). Nas oxítonas (herói, papéis) e monossílabos (céu), o acento continua.'
  },
  {
    id: 'q-1',
    moduleId: 'mod-2',
    text: 'A palavra "CA-Ó-TI-CO" possui a sílaba tônica na antepenúltima sílaba. Portanto, ela é classificada como:',
    options: [
      { id: 'a', text: 'Oxítona', isCorrect: false, explanation: 'Oxítona é quando a tônica é a ÚLTIMA sílaba (ex: ca-fé).' },
      { id: 'b', text: 'Paroxítona', isCorrect: false, explanation: 'Paroxítona é quando a tônica é a PENÚLTIMA sílaba (ex: es-co-la).' },
      { id: 'c', text: 'Proparoxítona', isCorrect: true, explanation: 'Exato! A tônica está na antepenúltima sílaba (Ó).' },
      { id: 'd', text: 'Monossílabo Tônico', isCorrect: false, explanation: 'Monossílabos têm apenas UMA sílaba (ex: pé, pó).' }
    ],
    generalExplanation: 'Sempre conte de trás para frente: Última (Oxítona), Penúltima (Paroxítona), Antepenúltima (Proparoxítona).'
  },
  {
    id: 'q-2',
    moduleId: 'mod-2',
    source: 'PREF. CARIACICA–ES / 2020',
    text: 'Julgue o item a seguir: "Será que têm bagagem suficiente para criticar?" – a palavra "será" recebe acento por se tratar de uma oxítona terminada em "a".',
    options: [
      { id: 'a', text: 'Certo', isCorrect: true },
      { id: 'b', text: 'Errado', isCorrect: false }
    ],
    generalExplanation: 'Exatamente: se-rá. Acentuam-se as oxítonas terminadas em A, E, O, EM, ENS.'
  },
  {
    id: 'q-3',
    moduleId: 'mod-2',
    source: 'CRN 2ª REGIÃO / 2020',
    text: 'A mesma regra explica a acentuação gráfica dos vocábulos "açúcar", "substância", "óleo" e "técnicas".',
    options: [
      { id: 'a', text: 'Certo', isCorrect: false, explanation: 'Elas pertencem a regras diferentes.' },
      { id: 'b', text: 'Errado', isCorrect: true }
    ],
    generalExplanation: '"ó-leo" e "subs-tân-cia" são paroxítonas terminadas em ditongo. "a-çú-car" é paroxítona terminada em R. "téc-ni-cas" é proparoxítona. São três regras diferentes misturadas!'
  },
  {
    id: 'q-4',
    moduleId: 'mod-2',
    source: 'PREF. DIVINÓPOLIS - MG / 2024',
    text: 'As palavras dispostas nas alternativas a seguir se acentuam pela mesma razão, EXCETO:',
    options: [
      { id: 'a', text: 'época', isCorrect: false, explanation: 'É proparoxítona.' },
      { id: 'b', text: 'público', isCorrect: false, explanation: 'É proparoxítona.' },
      { id: 'c', text: 'miséria', isCorrect: true, explanation: 'Correto! É a única diferente (paroxítona terminada em ditongo).' },
      { id: 'd', text: 'clássica', isCorrect: false, explanation: 'É proparoxítona.' }
    ],
    generalExplanation: '"é.po.ca", "pú.bli.co" e "clás.si.ca" são acentuadas porque são todas proparoxítonas. "mi.sé.ria" é paroxítona terminada em ditongo, portanto é a exceção.'
  },
  {
    id: 'q-ac-hiato',
    moduleId: 'mod-2',
    source: 'IF-ES / 2019',
    text: 'É aplicável a mesma justificativa para se acentuar as palavras "raízes", "artífices" e "país".',
    options: [
      { id: 'a', text: 'Certo', isCorrect: false, explanation: 'Artífices estraga o grupo.' },
      { id: 'b', text: 'Errado', isCorrect: true, explanation: 'Raízes e País são hiato. Artífices é proparoxítona.' }
    ],
    generalExplanation: 'Ra-í-zes e Pa-ís são acentuadas pela regra do hiato (I tônico sozinho ou com S). Ar-TÍ-fi-ces é uma proparoxítona.'
  },

  // ORTOGRAFIA E HÍFEN
  {
    id: 'q-ort-1',
    moduleId: 'mod-3',
    source: 'TRE-PA / 2020',
    text: 'Quanto às regras de ortografia, assinale a alternativa em que há uma palavra grafada incorretamente.',
    options: [
      { id: 'a', text: 'super-homem, sobrenatural, cosseno.', isCorrect: false },
      { id: 'b', text: 'cooperador, coexistente, agroindustrial.', isCorrect: false },
      { id: 'c', text: 'anti-inflacionário, pan-americano, autoescola.', isCorrect: false },
      { id: 'd', text: 'girassol, hiper-ativo, recém-casado.', isCorrect: true, explanation: 'Hiperativo não tem hífen (consoante + vogal).' }
    ],
    generalExplanation: 'A regra geral é: só usamos hífen para separar letras IGUAIS (ex: anti-inflacionário). Letras diferentes se juntam (hiperativo). O prefixo "co" junta sempre (cooperador). Palavras com H pedem hífen (super-homem). Se a vogal encontra R ou S, dobra (cosseno).'
  },
  {
    id: 'q-ort-3',
    moduleId: 'mod-3',
    source: 'VUNESP / 2022',
    text: 'Assinale a alternativa em que o uso do hífen está correto.',
    options: [
      { id: 'a', text: 'Micro-ondas', isCorrect: true, explanation: 'Letras iguais se separam.' },
      { id: 'b', text: 'Anti-social', isCorrect: false, explanation: 'Deveria ser antissocial (dobra o S).' },
      { id: 'c', text: 'Auto-escola', isCorrect: false, explanation: 'Deveria ser autoescola (letras diferentes se juntam).' },
      { id: 'd', text: 'Semi-novo', isCorrect: false, explanation: 'Deveria ser seminovo.' }
    ],
    generalExplanation: 'A regra de ouro do Novo Acordo: Opostos se atraem (letras diferentes juntam: autoescola, seminovo). Iguais se repelem (letras iguais separam: micro-ondas). Se terminar em vogal e começar com R/S, dobra a consoante (antissocial).'
  },
  {
    id: 'q-ort-2',
    moduleId: 'mod-3',
    source: 'UFPR / 2018',
    text: 'Assinale a alternativa que preenche corretamente as lacunas: "Não sei _____ você faltou. _____ você não me avisou? Queria saber o _____ de tudo isso."',
    options: [
      { id: 'a', text: 'por que - Por que - porquê', isCorrect: true, explanation: '1. motivo subentendido. 2. pergunta. 3. substantivo (o).' },
      { id: 'b', text: 'porque - Por que - porquê', isCorrect: false },
      { id: 'c', text: 'por que - Porque - por quê', isCorrect: false },
      { id: 'd', text: 'porquê - Por que - porque', isCorrect: false }
    ],
    generalExplanation: '1. Não sei por que (motivo) você faltou. 2. Por que (pergunta direta). 3. O porquê (substantivo acompanhado de artigo "o").'
  },

  // ==========================================
  // MÓDULO 4: PRONOMES E VERBOS
  // ==========================================
  {
    id: 'q-mod4-1',
    moduleId: 'mod-4',
    source: 'TJ-RS / 2020',
    text: 'Também pode evitar-se a repetição de palavras idênticas, substituindo a segunda ocorrência do vocábulo por um pronome demonstrativo; a frase abaixo em que isso foi feito de forma adequada é:',
    options: [
      { id: 'a', text: 'Amazonas e Sergipe são estados brasileiros; este tem enorme território e aquele, pequeno;', isCorrect: false, explanation: 'O pronome "este" se refere ao termo mais próximo (Sergipe), que tem território pequeno.' },
      { id: 'b', text: 'Meu carro é mais elegante que esse que você está comprando;', isCorrect: true, explanation: 'O pronome "esse" é usado para se referir a algo que está próximo de quem ouve.' },
      { id: 'c', text: 'Teu jornal abordou o tema de forma interessante, mas aquele, em minhas mãos, é mais justo;', isCorrect: false },
      { id: 'd', text: 'O terremoto de Lisboa foi violentíssimo, mas aquele de agora matou mais gente.', isCorrect: false }
    ],
    generalExplanation: 'O pronome "esse" é usado para se referir a algo que está próximo de quem ouve (você). "Este" aponta para o que está perto de quem fala, e "aquele" para o que está distante de ambos.'
  },
  {
    id: 'q-mod4-2',
    moduleId: 'mod-4',
    source: 'MP-CE / 2020',
    text: 'No trecho “É verdade que não se poderia contar com ela para nada”, o uso da próclise justifica-se pela presença da palavra negativa “não”.',
    options: [
      { id: 'a', text: 'Certo', isCorrect: true, explanation: 'As palavras negativas (não, nunca, jamais, nem...) obrigam a próclise.' },
      { id: 'b', text: 'Errado', isCorrect: false, explanation: 'A afirmação está correta.' }
    ],
    generalExplanation: 'As palavras negativas (não, nunca, jamais, nem...) obrigam a próclise, isto é, o pronome oblíquo átono deve ficar antes do verbo.'
  },
  {
    id: 'q-mod4-3',
    moduleId: 'mod-4',
    source: 'PGE-AM / 2022',
    text: 'Chovia mais forte, agora. Borrada, a inscrição tornara-se ilegível. A ele, isso pouco importava: continuava andando de um lado para outro, diante da casa, carregando o seu cartaz. No trecho acima, o narrador relata alguns fatos ocorridos no passado. Um fato anterior a esse tempo passado está indicado pela seguinte forma verbal:',
    options: [
      { id: 'a', text: 'carregando.', isCorrect: false },
      { id: 'b', text: 'Chovia.', isCorrect: false },
      { id: 'c', text: 'tornara.', isCorrect: true, explanation: 'O tempo verbal que indica uma ação passada anterior a outra também passada é o pretérito mais-que-perfeito: tornaRA.' },
      { id: 'd', text: 'importava.', isCorrect: false }
    ],
    generalExplanation: 'O Pretérito Mais-Que-Perfeito do Indicativo (terminação -RA) indica um fato passado que ocorreu antes de outro fato passado. Ex: A inscrição já se tornara ilegível antes de ele continuar andando.'
  },
  {
    id: 'q-mod4-4',
    moduleId: 'mod-4',
    source: 'MP-CE / 2020',
    text: 'O termo “Desenvolveram-se” (em "Desenvolveram-se meios técnicos") poderia ser substituído pela locução "Foram desenvolvidos", sem prejuízo do sentido e da correção gramatical do texto.',
    options: [
      { id: 'a', text: 'Certo', isCorrect: true, explanation: 'Temos voz passiva sintética: VTD + SE. Desenvolveram-se meios = Meios foram desenvolvidos.' },
      { id: 'b', text: 'Errado', isCorrect: false }
    ],
    generalExplanation: 'A voz passiva sintética (VTD + SE) é equivalente à voz passiva analítica (SER + Particípio). "Desenvolveram-se meios técnicos" = "Meios técnicos foram desenvolvidos".'
  },
  {
    id: 'q-mod4-5',
    moduleId: 'mod-4',
    source: 'PM-SP / 2020',
    text: 'Considerando a correspondência entre as formas verbais e o emprego do pronome, assinale a alternativa que completa a frase: "Se soubéssemos mais detalhes a respeito de como foi criada a Polícia Militar, ___________________________ melhor desde a sua criação."',
    options: [
      { id: 'a', text: 'podemos compreender-lhe', isCorrect: false },
      { id: 'b', text: 'poderíamos compreendê-la', isCorrect: true, explanation: 'Correlação básica: se eu pudeSSE, faRIA. Se soubéSSEmos, podeRÍAmos.' },
      { id: 'c', text: 'podíamos compreender-lhe', isCorrect: false },
      { id: 'd', text: 'pudemos compreendê-la', isCorrect: false }
    ],
    generalExplanation: 'A questão exige correlação verbal. Aplicando a correlação básica condicional: "Se eu pudeSSE, faRIA". Logo: "Se soubéSSEmos, podeRÍAmos compreendê-la".'
  },

  // ==========================================
  // MÓDULO 5: SINTAXE DA ORAÇÃO
  // ==========================================
  {
    id: 'q-mod5-1',
    moduleId: 'mod-5',
    source: 'TRF-6ª REGIÃO / 2025',
    text: 'No segmento "estima-se que, no ano de 2022, tenham sido gastos R$ 12 bilhões", a oração introduzida pelo termo "que" funciona como complemento direto da oração expressa pela forma verbal "estima-se".',
    options: [
      { id: 'a', text: 'Certo', isCorrect: false },
      { id: 'b', text: 'Errado', isCorrect: true, explanation: 'A oração não é complemento, é sujeito passivo. Note a estrutura VTD+SE, indicativa de passiva sintética: Estima-se [ISSO] -> [ISSO] é estimado.' }
    ],
    generalExplanation: 'A estrutura VTD + SE forma a voz passiva sintética. O que vem depois não é objeto direto, mas sim o sujeito paciente da oração.'
  },
  {
    id: 'q-mod5-2',
    moduleId: 'mod-5',
    source: 'PC-DF / 2025',
    text: 'No trecho "Vigorava, portanto, a compreensão de que assumir compromissos...", o termo "a compreensão" funciona como complemento direto da forma verbal "Vigorava".',
    options: [
      { id: 'a', text: 'Certo', isCorrect: false },
      { id: 'b', text: 'Errado', isCorrect: true, explanation: 'Funciona como sujeito, apenas está posposto (depois do verbo). O que vigorava? A compreensão vigorava.' }
    ],
    generalExplanation: 'Sempre pergunte "O que?" ou "Quem?" ao verbo para achar o sujeito. O sujeito frequentemente aparece invertido (depois do verbo) para confundir o candidato.'
  },
  {
    id: 'q-mod5-3',
    moduleId: 'mod-5',
    source: 'CÂMARA DE ARARAQUARA - SP / 2025',
    text: 'Assinale a alternativa que apresenta a afirmativa correta sobre a frase: "Há cidadãos neste país?".',
    options: [
      { id: 'a', text: 'Ao substituir o verbo "haver" pelo verbo "existir", "cidadãos" assume a função de sujeito do verbo "existir".', isCorrect: true, explanation: 'O verbo HAVER (sentido de existir) é impessoal e não tem sujeito ("cidadãos" é objeto direto). Já o verbo EXISTIR é pessoal e tem sujeito ("cidadãos" vira o sujeito).' },
      { id: 'b', text: 'O verbo "haver" concorda no plural com "cidadãos".', isCorrect: false },
      { id: 'c', text: 'A frase é um período composto por subordinação.', isCorrect: false },
      { id: 'd', text: 'O termo "neste país" é o sujeito da oração.', isCorrect: false }
    ],
    generalExplanation: 'O verbo HAVER com sentido de EXISTIR é impessoal e conjugado sempre na 3ª pessoa do singular. Porém, ao efetuar a substituição pelo verbo EXISTIR, a oração passa a ter sujeito: "cidadãos existem".'
  },
  {
    id: 'q-mod5-4',
    moduleId: 'mod-5',
    source: 'PREFEITURA DE MARAU - RS / 2025',
    text: 'Assinale a alternativa na qual o termo sublinhado NÃO tenha a função sintática de complemento nominal.',
    options: [
      { id: 'a', text: 'Estamos todos confiantes NA VITÓRIA.', isCorrect: false },
      { id: 'b', text: 'O professor era atencioso PARA COM TODOS.', isCorrect: false },
      { id: 'c', text: 'Todos bebemos da água DA FONTE localizada na fazenda.', isCorrect: true, explanation: '"da fonte", em relação à "água", tem sentido ativo/posse (a fonte tem a água). Logo, é adjunto adnominal.' },
      { id: 'd', text: 'O júri decidiu favoravelmente AO RÉU.', isCorrect: false }
    ],
    generalExplanation: 'A diferença entre adjunto adnominal e complemento nominal é clássica. Se o termo preposicionado se liga a um substantivo concreto (água) indicando posse/origem, ele é Adjunto Adnominal. Os demais completam adjetivos (confiantes, atencioso) ou advérbios (favoravelmente), sendo obrigatoriamente Complementos Nominais.'
  },
  {
    id: 'q-mod5-5',
    moduleId: 'mod-5',
    source: 'PREFEITURA DE SÃO BENEDITO - CE / 2025',
    text: 'Há oração sem sujeito na seguinte opção:',
    options: [
      { id: 'a', text: '"está começada a crônica".', isCorrect: false },
      { id: 'b', text: '"esse meio é mais velho ainda do que as crônicas".', isCorrect: false },
      { id: 'c', text: '"houve calor e crônicas."', isCorrect: true, explanation: 'O verbo HAVER com sentido de EXISTIR é impessoal, formando oração sem sujeito.' },
      { id: 'd', text: '"o calor era mediano".', isCorrect: false }
    ],
    generalExplanation: 'O verbo HAVER com sentido de EXISTIR, OCORRER ou TEMPO DECORRIDO é impessoal, não havendo sujeito na oração (oração sem sujeito). Nas demais opções, temos sujeitos simples ("a crônica", "esse meio", "o calor").'
  },

  {
    id: 'q-mod5-6',
    moduleId: 'mod-5',
    source: 'INOVERSASUL / 2025',
    text: 'No trecho "Trata-se do mais ousado dos projetos libertários da história colonial brasileira", a flexão da forma verbal "Trata-se" na terceira pessoa do singular justifica-se por sua concordância com o segmento posposto, que é o sujeito da oração.',
    options: [
      { id: 'a', text: 'Certo', isCorrect: false },
      { id: 'b', text: 'Errado', isCorrect: true, explanation: 'A estrutura "tratar-se DE" indica sujeito indeterminado (VTI + SE). O verbo fica invariável na 3ª pessoa do singular. O termo posposto é objeto indireto.' }
    ],
    generalExplanation: 'A expressão "tratar-se de" despenca em provas! Ela configura sujeito indeterminado. Portanto, o verbo não vai para o plural, mesmo que o termo seguinte esteja no plural (ex: Trata-se de projetos ousados). Nunca diga "Tratam-se de...".'
  },
  {
    id: 'q-mod5-7',
    moduleId: 'mod-5',
    source: 'CORE-SP / 2019',
    text: 'Na frase "Marketing Multinível muda vidas e movimenta a economia", a palavra "vidas" assume função sintática de:',
    options: [
      { id: 'a', text: 'Predicativo do sujeito.', isCorrect: false },
      { id: 'b', text: 'Complemento nominal.', isCorrect: false },
      { id: 'c', text: 'Adjunto adnominal.', isCorrect: false },
      { id: 'd', text: 'Objeto direto.', isCorrect: true, explanation: 'O verbo "mudar" é transitivo direto (quem muda, muda algo). "vidas" é o complemento sem preposição.' }
    ],
    generalExplanation: 'Para achar o objeto direto, pergunte "o quê?" ou "quem?" ao verbo, após achar o sujeito. O Marketing (sujeito) muda o quê? Muda vidas (objeto direto).'
  },
  {
    id: 'q-mod5-8',
    moduleId: 'mod-5',
    source: 'CAU-AC / 2019',
    text: 'Considerando a oração "às pessoas interessa o êxito", é correto afirmar que o termo sublinhado ("às pessoas") classifica-se em:',
    options: [
      { id: 'a', text: 'objeto direto.', isCorrect: false },
      { id: 'b', text: 'complemento nominal.', isCorrect: false },
      { id: 'c', text: 'sujeito.', isCorrect: false },
      { id: 'd', text: 'objeto indireto.', isCorrect: true, explanation: 'Colocando na ordem direta: O êxito (sujeito) interessa às pessoas (objeto indireto).' }
    ],
    generalExplanation: 'O verbo "interessar" é transitivo indireto (interessa A alguém). A crase em "às pessoas" já denuncia a presença da preposição "a", confirmando o objeto indireto. O sujeito é "o êxito" (O êxito interessa).'
  },
  {
    id: 'q-mod5-9',
    moduleId: 'mod-5',
    source: 'SEFAZ-RS / 2018',
    text: 'No trecho: "Os direitos humanos são fundados no respeito... São universais... São inalienáveis — e ninguém pode ser privado de seus direitos humanos —, mas podem ser limitados em situações específicas". O sujeito da locução "podem ser limitados", que está oculto, é indicado pelo termo:',
    options: [
      { id: 'a', text: '"todas as pessoas".', isCorrect: false },
      { id: 'b', text: '"ninguém".', isCorrect: false },
      { id: 'c', text: '"seus direitos humanos".', isCorrect: false },
      { id: 'd', text: '"Os direitos humanos".', isCorrect: true, explanation: 'O sujeito está elíptico (oculto) e retoma o referente principal do período: "Os direitos humanos".' }
    ],
    generalExplanation: 'O sujeito oculto (ou elíptico/desinencial) é aquele que não está escrito na oração, mas pode ser facilmente identificado pelo contexto ou pela terminação do verbo. Neste caso, quem pode ser limitado? Os direitos humanos.'
  },
  {
    id: 'q-mod5-10',
    moduleId: 'mod-5',
    source: 'PREFEITURA DE SANTO AUGUSTO - RS / 2025',
    text: 'Assinale a alternativa que apresenta, correta e respectivamente, as funções sintáticas dos trechos sublinhados: "UM GRUPO DE PESQUISADORES DA UNIVERSIDADE HARVARD (1), nos EUA, é CATEGÓRICO (2)."',
    options: [
      { id: 'a', text: 'Sujeito – predicado verbal.', isCorrect: false },
      { id: 'b', text: 'Objeto direto – predicativo do objeto.', isCorrect: false },
      { id: 'c', text: 'Sujeito – predicativo do sujeito.', isCorrect: true, explanation: '(1) é o sujeito da oração. (2) é uma qualidade atribuída ao sujeito através do verbo de ligação "é".' },
      { id: 'd', text: 'Objeto indireto – predicativo do objeto.', isCorrect: false }
    ],
    generalExplanation: 'Quem é categórico? "Um grupo de pesquisadores..." (Sujeito). A palavra "categórico" atribui uma característica ao sujeito, mediada pelo verbo de ligação "é", logo, é o Predicativo do Sujeito.'
  },

  // ==========================================
  // BATERIAS DE QUESTÕES (INJEÇÃO EM MASSA)
  // ==========================================
  
  // BATERIA MÓDULO 1
  {
    id: 'q-fon-bat-1',
    moduleId: 'mod-1',
    source: 'Bateria de Fixação',
    text: 'Assinale a opção em que todas as palavras contêm ditongo.',
    options: [
      { id: 'a', text: 'Saúde, país, baú', isCorrect: false },
      { id: 'b', text: 'Água, série, pai', isCorrect: true, explanation: 'á-gUA, sé-rIE, pAI. Todas possuem vogal + semivogal na mesma sílaba.' },
      { id: 'c', text: 'Coelho, saída, ruim', isCorrect: false },
      { id: 'd', text: 'Céu, raiz, juiz', isCorrect: false }
    ],
    generalExplanation: 'Ditongo é o encontro de uma vogal e uma semivogal na mesma sílaba. Em "saúde", "país", "coelho" e "raiz" temos hiatos (vogais separadas).'
  },
  {
    id: 'q-fon-bat-2',
    moduleId: 'mod-1',
    source: 'Bateria de Fixação',
    text: 'Qual das palavras abaixo possui MAIS letras do que fonemas?',
    options: [
      { id: 'a', text: 'Fixo', isCorrect: false, explanation: '4 letras, 5 fonemas (X = /ks/).' },
      { id: 'b', text: 'Pato', isCorrect: false, explanation: '4 letras, 4 fonemas.' },
      { id: 'c', text: 'Chuva', isCorrect: true, explanation: '5 letras, 4 fonemas (CH é dígrafo, conta como 1 som).' },
      { id: 'd', text: 'Livro', isCorrect: false, explanation: '5 letras, 5 fonemas.' }
    ],
    generalExplanation: 'Sempre que houver um DÍGRAFO (CH, LH, NH, RR, SS, etc.), a palavra terá menos sons (fonemas) do que letras, pois duas letras representam um único som.'
  },
  {
    id: 'q-fon-bat-3',
    moduleId: 'mod-1',
    source: 'Bateria de Fixação',
    text: 'A divisão silábica está CORRETA em:',
    options: [
      { id: 'a', text: 'e-xce-ção', isCorrect: false },
      { id: 'b', text: 'ex-ce-ção', isCorrect: true, explanation: 'O dígrafo separável XC fica em sílabas diferentes.' },
      { id: 'c', text: 'e-x-ce-ção', isCorrect: false },
      { id: 'd', text: 'ex-ceç-ão', isCorrect: false }
    ],
    generalExplanation: 'Os dígrafos RR, SS, SC, SÇ e XC são SEPARÁVEIS. Cada letra fica em uma sílaba diferente: ex-ce-ção, car-ro, pas-so, nas-cer.'
  },

  // BATERIA MÓDULO 2
  {
    id: 'q-ac-bat-1',
    moduleId: 'mod-2',
    source: 'Bateria de Fixação',
    text: 'As palavras "sofá", "chá" e "amém" são acentuadas por serem, respectivamente:',
    options: [
      { id: 'a', text: 'oxítona, oxítona, paroxítona', isCorrect: false },
      { id: 'b', text: 'oxítona, monossílabo tônico, oxítona', isCorrect: true, explanation: 'so-FÁ (oxítona), CHÁ (1 sílaba), a-MÉM (oxítona).' },
      { id: 'c', text: 'paroxítona, monossílabo tônico, oxítona', isCorrect: false },
      { id: 'd', text: 'oxítona, monossílabo tônico, paroxítona', isCorrect: false }
    ],
    generalExplanation: 'Sofá e Amém têm a última sílaba forte (oxítonas terminadas em A e EM). Chá tem apenas uma sílaba (monossílabo tônico terminado em A).'
  },
  {
    id: 'q-ac-bat-2',
    moduleId: 'mod-2',
    source: 'Bateria de Fixação',
    text: 'Assinale a alternativa em que a palavra NÃO deve ser acentuada graficamente.',
    options: [
      { id: 'a', text: 'Hifen', isCorrect: false, explanation: 'Hífen tem acento (paroxítona em N).' },
      { id: 'b', text: 'Torax', isCorrect: false, explanation: 'Tórax tem acento (paroxítona em X).' },
      { id: 'c', text: 'Item', isCorrect: true, explanation: 'Item NÃO tem acento (paroxítona terminada em EM).' },
      { id: 'd', text: 'Virus', isCorrect: false, explanation: 'Vírus tem acento (paroxítona em US).' }
    ],
    generalExplanation: 'Pela regra do espelho, NÃO acentuamos paroxítonas terminadas em A, E, O, EM, ENS. Portanto, "item" e "nuvem" não têm acento.'
  },
  {
    id: 'q-ac-bat-3',
    moduleId: 'mod-2',
    source: 'Bateria de Fixação',
    text: 'A palavra "pêlo" (substantivo) perdeu o acento diferencial. Qual das palavras abaixo AINDA mantém o acento diferencial obrigatório?',
    options: [
      { id: 'a', text: 'Pera (fruta)', isCorrect: false },
      { id: 'b', text: 'Polo (extremidade)', isCorrect: false },
      { id: 'c', text: 'Para (verbo)', isCorrect: false },
      { id: 'd', text: 'Pôde (verbo no passado)', isCorrect: true, explanation: 'Pôde (passado) mantém o acento para diferenciar de Pode (presente).' }
    ],
    generalExplanation: 'O Novo Acordo derrubou o acento diferencial de pera, polo, pelo e para. Sobraram apenas: Pôde (passado) vs Pode (presente) e Pôr (verbo) vs Por (preposição).'
  },

  // BATERIA MÓDULO 3
  {
    id: 'q-ort-bat-1',
    moduleId: 'mod-3',
    source: 'Bateria de Fixação',
    text: 'Preencha as lacunas: "Fui _____ ele estava. Falei _____ estava triste."',
    options: [
      { id: 'a', text: 'aonde / porque', isCorrect: true, explanation: 'Aonde (ideia de movimento/ir). Porque (explicação/pois).' },
      { id: 'b', text: 'onde / por que', isCorrect: false },
      { id: 'c', text: 'aonde / por que', isCorrect: false },
      { id: 'd', text: 'onde / porque', isCorrect: false }
    ],
    generalExplanation: 'Usa-se AONDE com verbos que indicam movimento (ir, chegar). Usa-se PORQUE (junto e sem acento) para dar uma explicação, equivalente a "pois".'
  },
  {
    id: 'q-ort-bat-2',
    moduleId: 'mod-3',
    source: 'Bateria de Fixação',
    text: 'Assinale a palavra escrita INCORRETAMENTE segundo o Novo Acordo Ortográfico.',
    options: [
      { id: 'a', text: 'Autoescola', isCorrect: false },
      { id: 'b', text: 'Infraestrutura', isCorrect: false },
      { id: 'c', text: 'Microondas', isCorrect: true, explanation: 'O correto é micro-ondas (letras iguais se separam).' },
      { id: 'd', text: 'Antissocial', isCorrect: false }
    ],
    generalExplanation: 'Regra do hífen: Letras iguais se repelem (micro-ondas, anti-inflamatório). Letras diferentes se atraem (autoescola, infraestrutura). Se terminar em vogal e começar com R/S, dobra (antissocial).'
  },
  {
    id: 'q-ort-bat-3',
    moduleId: 'mod-3',
    source: 'Bateria de Fixação',
    text: 'Preencha as lacunas: "Ele se comportou _____ na reunião e provou ser um _____ funcionário."',
    options: [
      { id: 'a', text: 'mau / mau', isCorrect: false },
      { id: 'b', text: 'mal / mal', isCorrect: false },
      { id: 'c', text: 'mau / mal', isCorrect: false },
      { id: 'd', text: 'mal / mau', isCorrect: true, explanation: 'Comportou-se mal (contrário de bem, advérbio). Mau funcionário (contrário de bom, adjetivo).' }
    ],
    generalExplanation: 'Bizu clássico: MAL é o contrário de BEM (advérbio de modo). MAU é o contrário de BOM (adjetivo que qualifica um substantivo).'
  },

  // BATERIA MÓDULO 4
  {
    id: 'q-mod4-bat-1',
    moduleId: 'mod-4',
    source: 'Bateria de Fixação',
    text: 'Assinale a alternativa em que o pronome demonstrativo foi empregado INCORRETAMENTE.',
    options: [
      { id: 'a', text: 'Este ano está sendo muito difícil para nós.', isCorrect: false },
      { id: 'b', text: 'O que é isso que você tem nas mãos?', isCorrect: false },
      { id: 'c', text: 'João e Maria são irmãos. Esta é médica, aquele é engenheiro.', isCorrect: false },
      { id: 'd', text: 'A corrupção é um problema grave. Este mal deve ser combatido.', isCorrect: true, explanation: 'Para retomar algo que JÁ FOI dito (anafórico), usa-se ESSE/ESSA/ISSO. O correto seria "Esse mal deve ser combatido".' }
    ],
    generalExplanation: 'Regra de ouro: ESTE/ESTA/ISTO aponta para frente (catafórico) ou para o tempo presente. ESSE/ESSA/ISSO aponta para trás (anafórico) ou para um passado recente.'
  },
  {
    id: 'q-mod4-bat-2',
    moduleId: 'mod-4',
    source: 'Bateria de Fixação',
    text: 'Em qual das frases a colocação pronominal está de acordo com a norma-padrão?',
    options: [
      { id: 'a', text: 'Me disseram que a prova seria adiada.', isCorrect: false, explanation: 'Não se inicia frase com pronome oblíquo átono (Disseram-me).' },
      { id: 'b', text: 'Nunca esquecerei-me daquele dia.', isCorrect: false, explanation: 'Palavra negativa (Nunca) atrai o pronome (Nunca me esquecerei).' },
      { id: 'c', text: 'Tudo se resolveu rapidamente.', isCorrect: true, explanation: 'Pronome indefinido (Tudo) atrai o pronome oblíquo (próclise obrigatória).' },
      { id: 'd', text: 'Ajudaria-te se pudesse.', isCorrect: false, explanation: 'Verbo no futuro do pretérito exige mesóclise (Ajudar-te-ia).' }
    ],
    generalExplanation: 'A próclise (pronome antes do verbo) é obrigatória quando há palavras atrativas: negativas (não, nunca), pronomes relativos (que), pronomes indefinidos (tudo, alguém), conjunções subordinativas (se, quando) e advérbios.'
  },
  {
    id: 'q-mod4-bat-3',
    moduleId: 'mod-4',
    source: 'Bateria de Fixação',
    text: 'Transpondo a frase "O diretor assinou os documentos" para a voz passiva analítica, obtém-se:',
    options: [
      { id: 'a', text: 'Os documentos foram assinados pelo diretor.', isCorrect: true, explanation: 'O objeto direto (os documentos) vira sujeito paciente. O verbo ganha o auxiliar "ser" no mesmo tempo (foi/foram) + particípio (assinados).' },
      { id: 'b', text: 'Assinaram-se os documentos.', isCorrect: false, explanation: 'Esta é a voz passiva sintética.' },
      { id: 'c', text: 'Os documentos tinham sido assinados pelo diretor.', isCorrect: false, explanation: 'O tempo verbal mudou (tinha sido = mais-que-perfeito).' },
      { id: 'd', text: 'O diretor tinha assinado os documentos.', isCorrect: false, explanation: 'A frase continua na voz ativa, apenas mudou o tempo verbal.' }
    ],
    generalExplanation: 'Na passagem da voz ativa para a passiva analítica: 1) O Objeto Direto vira Sujeito Paciente. 2) O verbo principal vira particípio e ganha o verbo auxiliar (SER) no mesmo tempo e modo. 3) O Sujeito vira Agente da Passiva.'
  }
];
