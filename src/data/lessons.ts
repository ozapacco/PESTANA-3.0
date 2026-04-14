export interface Lesson {
  id: string;
  moduleId: string;
  order: number;
  type: 'theory' | 'flashcard' | 'quiz';
  title: string;
  content?: string; // Markdown or HTML for theory
  diagram?: string; // PlantUML for theory
  flashcardId?: string;
  quizId?: string;
}

export const lessons: Lesson[] = [
  // ==========================================
  // MÓDULO 0: NIVELAMENTO MORFOLÓGICO
  // ==========================================
  {
    id: 'l-morf-1',
    moduleId: 'mod-0',
    order: 1,
    type: 'theory',
    title: 'As 10 Classes de Palavras',
    content: `
### A Fundação da Casa
Antes de analisar frases complexas (sintaxe), você precisa saber o nome e a função de cada "tijolo" (morfologia).
Na língua portuguesa, existem apenas 10 classes de palavras. Vamos dividi-las em dois grandes grupos para facilitar.

### Grupo 1: A Família do Nome
Tudo gira em torno do **Substantivo** (o Rei).
* **Substantivo:** Dá nome a tudo (cadeira, amor, Brasil, fada).
* **Adjetivo:** É o "maquiador". Dá qualidade, defeito ou estado ao Rei (*cadeira* **quebrada**, *amor* **eterno**).
* **Artigo:** É o "anunciante". Vem antes do Rei para dizer se ele é conhecido ou não (**o** *amor*, **uma** *cadeira*).
* **Numeral:** É o "contador". Dá quantidade ou ordem (**duas** *cadeiras*, **primeiro** *amor*).
* **Pronome:** É o "dublê". Substitui ou acompanha o Rei (**ele** *quebrou*, **minha** *cadeira*).

### Grupo 2: Ação e Ligação
* **Verbo:** O "motor". Indica ação, estado ou fenômeno da natureza (*correr*, *estar*, *chover*).
* **Advérbio:** O "fofoqueiro". Modifica o Verbo, o Adjetivo ou outro Advérbio, indicando circunstâncias (correr **rápido**, **muito** bonito, **não** vou).
* **Preposição:** A "ponte curta". Liga duas palavras (café **com** leite, gosto **de** você).
* **Conjunção:** A "ponte longa". Liga duas orações (estudou, **mas** não passou).
* **Interjeição:** O "grito". Expressa emoção súbita (**Nossa!**, **Eita!**, **Ufa!**).
    `
  },
  {
    id: 'l-morf-2',
    moduleId: 'mod-0',
    order: 2,
    type: 'quiz',
    title: 'Teste Rápido: Classes de Palavras',
    quizId: 'q-morf-1'
  },
  {
    id: 'l-morf-3',
    moduleId: 'mod-0',
    order: 3,
    type: 'theory',
    title: 'Aprofundando: Preposições',
    content: `
### A Ponte Curta
A preposição é uma palavra invariável (não tem plural nem feminino) que liga duas palavras, criando uma relação de subordinação entre elas.

**Preposições Essenciais (Decore!):**
* a, ante, após, até, com, contra, de, desde, em, entre, para, per, perante, por, sem, sob, sobre, trás.

### Relacional vs Nocional (O Segredo da Sintaxe)
As bancas adoram perguntar o valor semântico (sentido) da preposição.

**1. Preposição Relacional (Gramatical):**
É aquela exigida por um verbo ou nome. Ela não tem sentido próprio, está ali só porque a regra obriga.
* Ex: Gosto **de** chocolate. (Quem gosta, gosta DE algo. O "de" é obrigatório).
* Ex: Tenho medo **de** cobra. (Quem tem medo, tem medo DE algo).

**2. Preposição Nocional (Semântica):**
Não é exigida pela gramática. Ela aparece para trazer uma "noção" (sentido) de posse, causa, instrumento, etc.
* Ex: Escrevi **a** lápis. (Instrumento)
* Ex: Morreu **de** fome. (Causa)
* Ex: Carro **de** João. (Posse)
    `
  },
  {
    id: 'l-morf-4',
    moduleId: 'mod-0',
    order: 4,
    type: 'quiz',
    title: 'Questão de Banca: Preposições',
    quizId: 'q-morf-2'
  },
  {
    id: 'l-morf-5',
    moduleId: 'mod-0',
    order: 5,
    type: 'theory',
    title: 'Aprofundando: Conjunções',
    content: `
### A Ponte Longa
Enquanto a preposição liga palavras, a **Conjunção** liga **ORAÇÕES** (frases com verbo).

Existem dois grandes grupos:
1. **Coordenativas:** Ligam orações independentes (que fazem sentido sozinhas).
2. **Subordinativas:** Ligam orações dependentes (uma precisa da outra para fazer sentido).

### As 5 Conjunções Coordenativas (Decore os sentidos!)
1. **Aditivas (Soma):** e, nem, não só... mas também.
   * *Ex: Estudo **e** trabalho.*
2. **Adversativas (Oposição/Quebra de expectativa):** mas, porém, contudo, todavia, entretanto.
   * *Ex: Estudou muito, **mas** não passou.*
3. **Alternativas (Escolha):** ou, ou... ou, ora... ora, seja... seja.
   * *Ex: **Ou** estuda, **ou** trabalha.*
4. **Conclusivas (Resultado):** logo, portanto, por isso, então.
   * *Ex: Estudou muito, **portanto** passou.*
5. **Explicativas (Justificativa):** que, porque, pois (antes do verbo).
   * *Ex: Estude, **porque** a prova será difícil.*
    `
  },
  {
    id: 'l-morf-6',
    moduleId: 'mod-0',
    order: 6,
    type: 'quiz',
    title: 'Questão de Banca: Conjunções',
    quizId: 'q-morf-3'
  },

  // ==========================================
  // MÓDULO 1: FONOLOGIA BÁSICA (A BASE)
  // ==========================================
  {
    id: 'l-fon-1',
    moduleId: 'mod-1',
    order: 1,
    type: 'theory',
    title: 'Sons, Letras e Fonemas',
    content: `
### A Diferença Fundamental
Para entender acentuação e ortografia, você precisa separar o que você **VÊ** do que você **OUVE**.

* **Letra:** É o desenho. O símbolo visual.
* **Fonema:** É o som. A unidade sonora que sai da sua boca.

> 💡 **Exemplo Clássico:**
> A palavra **PATO** tem 4 letras (P-A-T-O) e 4 fonemas (sons).
> Se trocarmos o fonema /p/ pelo /g/, temos uma nova palavra: **GATO**.

### O Problema: Nem sempre a conta fecha!
Na língua portuguesa, nem sempre 1 letra = 1 som.
* A letra **H** (em início de palavra) não tem som. Ex: *Hoje* (4 letras, 3 fonemas).
* A letra **X** pode ter som de dois fonemas (/ks/). Ex: *Táxi* (4 letras, 5 fonemas). Isso se chama **Dífono**.
    `
  },
  {
    id: 'l-fon-1b',
    moduleId: 'mod-1',
    order: 1.5,
    type: 'flashcard',
    title: 'Fixação: Letra vs Fonema',
    flashcardId: 'fc-fon-1'
  },
  {
    id: 'l-fon-2',
    moduleId: 'mod-1',
    order: 2,
    type: 'flashcard',
    title: 'Fixação: Dífono',
    flashcardId: 'fc-11' // Reusing the dífono flashcard
  },
  {
    id: 'l-fon-2b',
    moduleId: 'mod-1',
    order: 2.5,
    type: 'quiz',
    title: 'Questão de Banca: Dífono',
    quizId: 'q-fon-3'
  },
  {
    id: 'l-fon-3',
    moduleId: 'mod-1',
    order: 3,
    type: 'theory',
    title: 'Dígrafos: 2 Letras, 1 Som',
    content: `
### O que é um Dígrafo?
É quando **duas letras** se unem para representar **apenas um fonema** (som).
Sempre que houver um dígrafo, a palavra terá *menos fonemas do que letras*.

**Dígrafos Consonantais (Inseparáveis):**
* **CH** (Chuva), **LH** (Malha), **NH** (Banha), **QU** (Quero), **GU** (Guerra).
* *Atenção:* QU e GU só são dígrafos se o "U" não for pronunciado! Em *Quase*, o "U" tem som, então não é dígrafo.

**Dígrafos Consonantais (Separáveis na divisão silábica):**
* **RR** (Carro), **SS** (Passo), **SC** (Nascer), **SÇ** (Nasça), **XC** (Exceção).

### Dígrafos Vocálicos (Nasais)
Ocorrem quando as vogais são seguidas de **M** ou **N** na mesma sílaba. O M/N não tem som de consoante, serve apenas como um "til" (~) invisível para anasalar a vogal.
* Ex: C**am**po (som de "Cãpo"), V**en**to, L**im**bo, **Om**bro, T**um**ba.
    `
  },
  {
    id: 'l-fon-3b',
    moduleId: 'mod-1',
    order: 3.5,
    type: 'flashcard',
    title: 'Fixação: Dígrafos',
    flashcardId: 'fc-fon-2'
  },
  {
    id: 'l-fon-4',
    moduleId: 'mod-1',
    order: 4,
    type: 'quiz',
    title: 'Questão de Banca: Dígrafos',
    quizId: 'q-fon-1'
  },
  {
    id: 'l-fon-5',
    moduleId: 'mod-1',
    order: 5,
    type: 'theory',
    title: 'Encontros Vocálicos (O Terror das Provas)',
    content: `
### A Regra de Ouro da Sílaba
Na Língua Portuguesa, **NÃO EXISTE SÍLABA SEM VOGAL**, e **NUNCA HÁ MAIS DE UMA VOGAL NA MESMA SÍLABA**.
Se houver dois sons vocálicos juntos, um é a Vogal (forte, o chefe da sílaba) e o outro é a Semivogal (fraco, o ajudante).

### 1. Ditongo (Vogal + Semivogal juntas)
É o encontro de dois sons vocálicos na **mesma sílaba**. Eles não se separam!
* **Crescente:** Semivogal (fraca) -> Vogal (forte). Ex: his-tó-r**ia**, á-g**ua**.
* **Decrescente:** Vogal (forte) -> Semivogal (fraca). Ex: p**ai**, c**éu**, m**ui**-to.

### 2. Hiato (Vogal + Vogal separadas)
É o encontro de duas vogais (dois chefes fortes). Como não cabem na mesma sílaba, eles **se separam**.
* Ex: sa-**ú**-de, pa-**í**-ses, co-**e**-lho.

> ⚠️ **Por que isso importa?** Porque a regra de acentuação das paroxítonas e a regra do hiato dependem 100% de você saber diferenciar um ditongo de um hiato!
    `
  },
  {
    id: 'l-fon-5b',
    moduleId: 'mod-1',
    order: 5.5,
    type: 'flashcard',
    title: 'Fixação: Sílaba e Vogal',
    flashcardId: 'fc-fon-3'
  },
  {
    id: 'l-fon-6',
    moduleId: 'mod-1',
    order: 6,
    type: 'quiz',
    title: 'Questão de Banca: Ditongo vs Hiato',
    quizId: 'q-fon-2'
  },
  { id: 'l-fon-7', moduleId: 'mod-1', order: 7, type: 'quiz', title: 'Bateria: Encontros Vocálicos', quizId: 'q-fon-bat-1' },
  { id: 'l-fon-8', moduleId: 'mod-1', order: 8, type: 'quiz', title: 'Bateria: Contagem de Fonemas', quizId: 'q-fon-bat-2' },
  { id: 'l-fon-9', moduleId: 'mod-1', order: 9, type: 'quiz', title: 'Bateria: Divisão Silábica', quizId: 'q-fon-bat-3' },

  // ==========================================
  // MÓDULO 2: ACENTUAÇÃO GRÁFICA
  // (Com Active Recall do Módulo 1)
  // ==========================================
  {
    id: 'l-ac-1',
    moduleId: 'mod-2',
    order: 1,
    type: 'theory',
    title: 'A Base: Sílaba Tônica',
    content: `
### O que é ser "Tônico"?
Agora que você sabe o que são vogais e sílabas (Módulo 1), vamos achar a mais forte.
Toda palavra com mais de uma sílaba tem uma sílaba que é pronunciada com **mais força**. Essa é a **Sílaba Tônica**.

> 💡 **Atenção:** Acento Tônico (fala) é diferente de Acento Gráfico (escrita).
> * **sa-ci**: A sílaba "ci" é tônica (forte), mas não tem acento gráfico.
> * **ca-fé**: A sílaba "fé" é tônica e TEM acento gráfico.

### As 3 Posições da Sílaba Tônica
1. **Última sílaba forte:** OXÍTONA (ex: va-ta-**PÁ**)
2. **Penúltima sílaba forte:** PAROXÍTONA (ex: es-**CO**-la)
3. **Antepenúltima sílaba forte:** PROPAROXÍTONA (ex: **MÉ**-di-co)
    `
  },
  {
    id: 'l-ac-2',
    moduleId: 'mod-2',
    order: 2,
    type: 'quiz',
    title: 'Teste Rápido: Posição Tônica',
    quizId: 'q-1'
  },
  {
    id: 'l-ac-3',
    moduleId: 'mod-2',
    order: 3,
    type: 'theory',
    title: 'Regra 1: Monossílabos e Oxítonas',
    content: `
### Monossílabos Tônicos (Palavras de 1 sílaba)
São palavras de uma sílaba só que têm força própria.
**Regra:** Acentuam-se os terminados em **A, E, O** (seguidos ou não de S).
* Ex: p**á**, p**é**, p**ó**, m**ês**, n**ós**.

### Oxítonas (Última sílaba forte)
A regra é quase igual à dos monossílabos, mas ganha duas terminações extras.
**Regra:** Acentuam-se as terminadas em **A, E, O, EM, ENS**.
* Ex: so-f**á**, ca-f**é**, ji-l**ó**, al-gu**ém**, pa-ra-b**éns**.
    `
  },
  {
    id: 'l-ac-4',
    moduleId: 'mod-2',
    order: 4,
    type: 'flashcard',
    title: 'Fixação: Regra das Oxítonas',
    flashcardId: 'fc-1'
  },
  {
    id: 'l-ac-5',
    moduleId: 'mod-2',
    order: 5,
    type: 'theory',
    title: 'Regra 2: Paroxítonas (A Regra do Espelho)',
    content: `
### A Regra do Espelho (A Oposição)
A maioria das palavras do nosso idioma são paroxítonas terminadas em A, E, O (ex: me-sa, li-vro). Se fôssemos acentuar todas, o texto ficaria poluído.

Por isso, a regra das paroxítonas é o **EXATO OPOSTO** da regra das oxítonas.

**Regra Geral:** Acentuam-se TODAS as paroxítonas, **EXCETO** as terminadas em A, E, O, EM, ENS.
* Tem acento: fá-ci**l**, tó-ra**x**, hí-fe**n**, ál-bu**m**. (Terminações "estranhas")
* NÃO tem acento: i-t**em**, nu-v**em**, hi-f**ens**. (Terminações iguais às oxítonas)

### 🔄 ACTIVE RECALL: Lembra dos Ditongos?
No módulo passado, vimos que Ditongo é o encontro de Vogal + Semivogal na mesma sílaba.
**A Regra de Ouro (Cai muito!):** Acentuam-se as paroxítonas terminadas em **DITONGO**.
* Ex: his-tó-r**ia**, sé-r**ie**, á-g**ua**.
    `
  },
  {
    id: 'l-ac-6',
    moduleId: 'mod-2',
    order: 6,
    type: 'flashcard',
    title: 'Fixação: Paroxítonas',
    flashcardId: 'fc-2'
  },
  {
    id: 'l-ac-7',
    moduleId: 'mod-2',
    order: 7,
    type: 'quiz',
    title: 'Questão de Banca: Paroxítonas',
    quizId: 'q-3'
  },
  {
    id: 'l-ac-8',
    moduleId: 'mod-2',
    order: 8,
    type: 'theory',
    title: 'Regra 3: Proparoxítonas',
    content: `
### A Regra Mais Fácil do Mundo
As palavras com a antepenúltima sílaba forte são raras no português. Para garantir que ninguém erre a pronúncia, a gramática criou uma regra absoluta.

**Regra Única:** **TODAS** as proparoxítonas são acentuadas. Sem exceção.

* Ex: **MÉ**-di-co, **LÂM**-pa-da, a-na-**LÍ**-ti-ca, **ÁR**-vo-re.
    `
  },
  {
    id: 'l-ac-8b',
    moduleId: 'mod-2',
    order: 8.5,
    type: 'flashcard',
    title: 'Fixação: Proparoxítonas',
    flashcardId: 'fc-ac-1'
  },
  {
    id: 'l-ac-8c',
    moduleId: 'mod-2',
    order: 8.7,
    type: 'flashcard',
    title: 'Fixação: Paroxítonas LINURX',
    flashcardId: 'fc-ac-2'
  },
  {
    id: 'l-ac-9',
    moduleId: 'mod-2',
    order: 9,
    type: 'quiz',
    title: 'Questão de Banca: Proparoxítonas',
    quizId: 'q-4'
  },
  {
    id: 'l-ac-9b',
    moduleId: 'mod-2',
    order: 9.5,
    type: 'quiz',
    title: 'Questão de Banca: Regra das Proparoxítonas',
    quizId: 'q-ac-1'
  },
  {
    id: 'l-ac-9c',
    moduleId: 'mod-2',
    order: 9.7,
    type: 'quiz',
    title: 'Questão de Banca: Ditongos Abertos',
    quizId: 'q-ac-2'
  },
  {
    id: 'l-ac-10',
    moduleId: 'mod-2',
    order: 10,
    type: 'theory',
    title: 'A Regra do Hiato (A Exceção Suprema)',
    content: `
### 🔄 ACTIVE RECALL: Lembra do Hiato?
No módulo de Fonologia, vimos que Hiato é o encontro de duas Vogais que se **separam** em sílabas diferentes (ex: sa-ú-de).

### A Regra do Hiato
Esta regra **NÃO LIGA** se a palavra é oxítona ou paroxítona. Ela passa por cima das regras gerais.

**Regra:** Acentua-se o **I** e o **U** tônicos, quando formam hiato com a vogal anterior, desde que estejam **SOZINHOS** na sílaba (ou acompanhados de S).

* Ex: sa-**ú**-de (O "u" está sozinho)
* Ex: pa-**í**-ses (O "i" está sozinho)
* Ex: ba-**ús** (O "u" está com S)

**Quando NÃO acentuar:**
1. Se estiverem com outra letra na sílaba (que não seja S). Ex: ju-**iz**, ra-**ul**, ru-**im**.
2. Se forem seguidos de **NH**. Ex: ra-**i**-nha, mo-**i**-nho.
    `
  },
  {
    id: 'l-ac-11',
    moduleId: 'mod-2',
    order: 11,
    type: 'flashcard',
    title: 'Fixação: Regra do Hiato',
    flashcardId: 'fc-4'
  },
  {
    id: 'l-ac-12',
    moduleId: 'mod-2',
    order: 12,
    type: 'quiz',
    title: 'Questão de Banca: Hiato',
    quizId: 'q-ac-hiato'
  },
  { id: 'l-ac-13', moduleId: 'mod-2', order: 13, type: 'quiz', title: 'Bateria: Oxítonas e Monossílabos', quizId: 'q-ac-bat-1' },
  { id: 'l-ac-14', moduleId: 'mod-2', order: 14, type: 'quiz', title: 'Bateria: Paroxítonas', quizId: 'q-ac-bat-2' },
  { id: 'l-ac-15', moduleId: 'mod-2', order: 15, type: 'quiz', title: 'Bateria: Acento Diferencial', quizId: 'q-ac-bat-3' },

  // ==========================================
  // MÓDULO 3: ORTOGRAFIA E HÍFEN
  // ==========================================
  {
    id: 'l-ort-1',
    moduleId: 'mod-3',
    order: 1,
    type: 'theory',
    title: 'A Regra de Ouro do Hífen',
    content: `
### Opostos se atraem, Iguais se repelem
O Novo Acordo Ortográfico simplificou muito o uso do hífen com prefixos (como *anti*, *super*, *micro*, *auto*). A regra principal é baseada na **Simpatia/Antipatia das letras**.

**1. Letras Diferentes (Opostos se atraem):**
Se a última letra do prefixo for **diferente** da primeira letra da palavra seguinte, elas se **juntam sem hífen**.
* Vogal + Consoante: *Autoescola*, *Semianalfabeto*.
* Consoante + Vogal: *Superinteressante*, *Hiperativo*.

**2. Letras Iguais (Iguais se repelem):**
Se a última letra do prefixo for **igual** à primeira letra da palavra seguinte, elas "brigam" e precisam do **hífen** para separá-las.
* Vogal + Vogal igual: *Micro-ondas*, *Anti-inflamatório*.
* Consoante + Consoante igual: *Super-resistente*, *Sub-bibliotecário*.
    `
  },
  {
    id: 'l-ort-2',
    moduleId: 'mod-3',
    order: 2,
    type: 'flashcard',
    title: 'Fixação: Regra Geral do Hífen',
    flashcardId: 'fc-5'
  },
  {
    id: 'l-ort-3',
    moduleId: 'mod-3',
    order: 3,
    type: 'theory',
    title: 'A Regra do aRRoSS',
    content: `
### O Problema do R e do S
Quando juntamos um prefixo terminado em **VOGAL** com uma palavra que começa com **R** ou **S**, temos um problema fonético: o som ficaria fraco (com som de Z ou R brando).

Para resolver isso, a gramática criou a **Regra do aRRoSS**:
Se o prefixo termina em vogal e a palavra seguinte começa com R ou S, **NÃO usamos hífen** e **DUPLICAMOS** a consoante.

* Mini + Saia = **Minissaia**
* Anti + Racismo = **Antirracismo**
* Contra + Regra = **Contrarregra**
* Ultra + Som = **Ultrassom**

> ⚠️ **Atenção:** Só dobramos se o prefixo terminar em VOGAL. Se terminar em consoante, a regra é outra (ex: *Super-romântico*, *Inter-regional* - letras iguais se separam).
    `
  },
  {
    id: 'l-ort-4',
    moduleId: 'mod-3',
    order: 4,
    type: 'flashcard',
    title: 'Fixação: Regra do aRRoSS',
    flashcardId: 'fc-7'
  },
  {
    id: 'l-ort-5',
    moduleId: 'mod-3',
    order: 5,
    type: 'quiz',
    title: 'Questão de Banca: Hífen (Regras Gerais)',
    quizId: 'q-ort-1'
  },
  {
    id: 'l-ort-6',
    moduleId: 'mod-3',
    order: 6,
    type: 'theory',
    title: 'Os Prefixos Rebeldes: BEM e MAL',
    content: `
### O "BEM" não gosta de ninguém
O prefixo **BEM** é antissocial. Ele quase sempre **exige o hífen**, não aceitando se misturar com a palavra seguinte.
* Ex: *Bem-vindo*, *Bem-estar*, *Bem-humorado*.
* *Exceção:* Só se junta com palavras derivadas de "querer" ou "fazer" (ex: *Benfeito*, *Benquerer*).

### O "MAL" só briga com Vogal (e H/L)
O prefixo **MAL** é mais sociável. Ele só exige hífen se a palavra seguinte começar com **Vogal**, **H** ou **L**.
* Com hífen: *Mal-estar* (vogal), *Mal-humorado* (H), *Mal-limpo* (L).
* Sem hífen (junto): *Malcriado*, *Malfeito*, *Malcasado*.

> 💡 **Mnemônico:** **MAL-Vogal**. O "Mal" tem alergia a vogais e precisa do hífen para se proteger delas.
    `
  },
  {
    id: 'l-ort-7',
    moduleId: 'mod-3',
    order: 7,
    type: 'flashcard',
    title: 'Fixação: Prefixo MAL',
    flashcardId: 'fc-8'
  },
  {
    id: 'l-ort-7b',
    moduleId: 'mod-3',
    order: 7.5,
    type: 'flashcard',
    title: 'Fixação: Prefixo BEM',
    flashcardId: 'fc-ort-1'
  },
  {
    id: 'l-ort-8',
    moduleId: 'mod-3',
    order: 8,
    type: 'theory',
    title: 'Expressões Problemáticas: Porquês',
    content: `
### O Terror das Redações: Os 4 Porquês

**1. POR QUE (Separado e sem acento)**
Usado em perguntas (início ou meio) ou quando puder ser substituído por "por qual motivo" ou "pelo qual".
* Ex: *Por que* você não foi? (Por qual motivo)
* Ex: Os caminhos *por que* passei. (Pelos quais)

**2. POR QUÊ (Separado e COM acento)**
Usado **exclusivamente** no final de frases ou antes de pontuação (?!.). A pontuação dá um "susto" no quê, e ele ganha um chapéu (^).
* Ex: Você não comeu *por quê*?

**3. PORQUE (Junto e sem acento)**
Usado em respostas, explicações ou causas. Pode ser substituído por "pois".
* Ex: Não fui *porque* choveu.

**4. PORQUÊ (Junto e COM acento)**
É um **substantivo**. Significa "o motivo", "a razão". Sempre vem acompanhado de um determinante (o, um, este).
* Ex: Não entendi *o porquê* de tanta confusão.
    `
  },
  {
    id: 'l-ort-8b',
    moduleId: 'mod-3',
    order: 8.2,
    type: 'flashcard',
    title: 'Fixação: POR QUE',
    flashcardId: 'fc-ort-2'
  },
  {
    id: 'l-ort-8c',
    moduleId: 'mod-3',
    order: 8.5,
    type: 'flashcard',
    title: 'Fixação: PORQUE',
    flashcardId: 'fc-ort-3'
  },
  {
    id: 'l-ort-9',
    moduleId: 'mod-3',
    order: 9,
    type: 'flashcard',
    title: 'Fixação: Porquê Substantivo',
    flashcardId: 'fc-13'
  },
  {
    id: 'l-ort-10',
    moduleId: 'mod-3',
    order: 10,
    type: 'quiz',
    title: 'Questão de Banca: Os Porquês',
    quizId: 'q-ort-2'
  },
  {
    id: 'l-ort-10b',
    moduleId: 'mod-3',
    order: 10.5,
    type: 'quiz',
    title: 'Questão de Banca: Hífen',
    quizId: 'q-ort-3'
  },
  { id: 'l-ort-11', moduleId: 'mod-3', order: 11, type: 'quiz', title: 'Bateria: Onde vs Aonde', quizId: 'q-ort-bat-1' },
  { id: 'l-ort-12', moduleId: 'mod-3', order: 12, type: 'quiz', title: 'Bateria: Regras do Hífen', quizId: 'q-ort-bat-2' },
  { id: 'l-ort-13', moduleId: 'mod-3', order: 13, type: 'quiz', title: 'Bateria: Mal vs Mau', quizId: 'q-ort-bat-3' },

  // ==========================================
  // MÓDULO 4: PRONOMES E VERBOS
  // ==========================================
  {
    id: 'l-mod4-1',
    moduleId: 'mod-4',
    order: 1,
    type: 'theory',
    title: 'Pronomes Demonstrativos (Este, Esse, Aquele)',
    content: `
### Apontando para o Tempo, Espaço e Texto
Os pronomes demonstrativos causam muita confusão, mas a regra é simples. Eles apontam para algo em relação a quem fala.

**1. No Espaço (Onde está?)**
* **Este(s), Esta(s), Isto:** Perto de quem FALA. (Ex: *Este* violão aqui na minha mão).
* **Esse(s), Essa(s), Isso:** Perto de quem OUVE. (Ex: *Esse* violão aí na sua mão).
* **Aquele(s), Aquela(s), Aquilo:** Longe de ambos. (Ex: *Aquela* pintura lá na parede).

**2. No Tempo (Quando foi?)**
* **Este:** Presente. (Ex: *Este* domingo vai ter jogo).
* **Esse:** Passado ou futuro próximo. (Ex: *Esse* domingo que passou foi quente).
* **Aquele:** Passado ou futuro distante. (Ex: *Aquela* década de 70).

**3. No Texto (O Segredo das Provas)**
* **Anafórico (ESSE/ISSO):** Retoma o que JÁ FOI dito. (Ex: João passou. *Esse* cara é bom).
* **Catafórico (ESTE/ISTO):** Anuncia o que AINDA VAI ser dito. (Ex: *Isto* era importante: dinheiro e sucesso).
    `
  },
  {
    id: 'l-mod4-2',
    moduleId: 'mod-4',
    order: 2,
    type: 'flashcard',
    title: 'Fixação: Anafórico vs Catafórico',
    flashcardId: 'fc-14'
  },
  {
    id: 'l-mod4-3',
    moduleId: 'mod-4',
    order: 3,
    type: 'quiz',
    title: 'Questão de Banca: Demonstrativos',
    quizId: 'q-mod4-1'
  },
  {
    id: 'l-mod4-4',
    moduleId: 'mod-4',
    order: 4,
    type: 'theory',
    title: 'Colocação Pronominal: O Básico',
    content: `
### Onde colocar o pronome oblíquo átono? (me, te, se, o, a, lhe, nos, vos)
A posição do pronome em relação ao verbo tem nomes difíceis, mas regras lógicas.
* **Próclise:** Antes do verbo (*Não me deixe*).
* **Ênclise:** Depois do verbo (*Deixe-me*).
* **Mesóclise:** No meio do verbo (*Dar-te-ei*).

### A Regra de Ouro da Próclise (Palavras Atrativas)
Existem palavras que funcionam como um **ÍMÃ**, puxando o pronome para ANTES do verbo. Decore as principais:
1. **Palavras Negativas:** não, nunca, jamais, ninguém. (Ex: *Não* se preocupe).
2. **Advérbios:** já, sempre, talvez. (Ex: *Sempre* me disseram).
3. **Conjunções Subordinativas:** que, se, embora, quando. (Ex: Espero *que* me perdoe).
4. **Pronomes Relativos/Indefinidos:** que, quem, tudo, alguém. (Ex: O homem *que* me viu).

### Proibições da Ênclise (Nunca faça isso!)
1. Nunca inicie frase com pronome átono. (Ex: *Me dá* um cigarro -> ERRADO. *Dá-me* um cigarro -> CERTO).
2. Nunca use pronome após verbo no **Particípio** (-ado, -ido). (Ex: Tinha *emprestado-lhe* -> ERRADO).
3. Nunca use pronome após verbo no **Futuro**. (Ex: *Darei-te* -> ERRADO. *Dar-te-ei* -> CERTO).
    `
  },
  {
    id: 'l-mod4-5',
    moduleId: 'mod-4',
    order: 5,
    type: 'flashcard',
    title: 'Fixação: Palavras Atrativas',
    flashcardId: 'fc-17'
  },
  {
    id: 'l-mod4-6',
    moduleId: 'mod-4',
    order: 6,
    type: 'quiz',
    title: 'Questão de Banca: Colocação Pronominal',
    quizId: 'q-mod4-2'
  },
  {
    id: 'l-mod4-7',
    moduleId: 'mod-4',
    order: 7,
    type: 'theory',
    title: 'Verbos: O Pretérito Mais-Que-Perfeito',
    content: `
### O Passado do Passado
O Modo Indicativo expressa certeza. Dentro dele, temos três tipos de passado (pretérito):
1. **Perfeito:** Ação concluída. (Ex: Ontem eu *estudei*).
2. **Imperfeito:** Ação contínua ou hábito no passado. (Ex: Antigamente eu *estudava*).
3. **Mais-Que-Perfeito:** Ação passada que ocorreu ANTES de outra ação passada.

O Pretérito Mais-Que-Perfeito é o terror das provas porque quase não o usamos na fala.
* **Desinência:** -RA (amara, vendera, partira).
* **Exemplo Clássico:** Quando cheguei ao ponto (passado 1), o ônibus já **passara** (passado 2, anterior ao 1).

> 💡 **Dica de Ouro:** O Mais-Que-Perfeito Simples (passara) é exatamente igual ao Mais-Que-Perfeito Composto (tinha passado / havia passado). As bancas adoram pedir para você trocar um pelo outro!
    `
  },
  {
    id: 'l-mod4-8',
    moduleId: 'mod-4',
    order: 8,
    type: 'flashcard',
    title: 'Fixação: Mais-Que-Perfeito',
    flashcardId: 'fc-19'
  },
  {
    id: 'l-mod4-9',
    moduleId: 'mod-4',
    order: 9,
    type: 'quiz',
    title: 'Questão de Banca: Tempos Verbais',
    quizId: 'q-mod4-3'
  },
  {
    id: 'l-mod4-10',
    moduleId: 'mod-4',
    order: 10,
    type: 'theory',
    title: 'Vozes Verbais: Ativa e Passiva',
    content: `
### Quem sofre e quem pratica a ação?
As vozes verbais indicam a relação do sujeito com o verbo.
* **Voz Ativa:** O sujeito PRATICA a ação. (Ex: *O policial* deteve os criminosos).
* **Voz Passiva:** O sujeito SOFRE a ação. (Ex: *Os criminosos* foram detidos pelo policial).

### Os Dois Tipos de Voz Passiva
A Voz Passiva só existe se o verbo for Transitivo Direto (VTD), ou seja, se ele tiver um Objeto Direto na voz ativa para virar Sujeito Paciente.

**1. Passiva Analítica (SER + Particípio)**
* Ex: O campeão **foi derrotado** pelo desafiante.

**2. Passiva Sintética ou Pronominal (VTD + SE)**
* Ex: **Derrotou-se** o campeão.
* Ex: **Venderam-se** casas. (Cuidado com a concordância! "Casas" é o sujeito paciente, então o verbo vai para o plural).

> ⚠️ **Atenção:** A banca vai tentar te enganar dizendo que "Precisa-se de médicos" é voz passiva. NÃO É! O verbo "precisar" exige preposição (VTI), logo, não aceita voz passiva. O "SE" aí é Índice de Indeterminação do Sujeito.
    `
  },
  {
    id: 'l-mod4-11',
    moduleId: 'mod-4',
    order: 11,
    type: 'flashcard',
    title: 'Fixação: Passiva Sintética',
    flashcardId: 'fc-20'
  },
  {
    id: 'l-mod4-12',
    moduleId: 'mod-4',
    order: 12,
    type: 'quiz',
    title: 'Questão de Banca: Voz Passiva',
    quizId: 'q-mod4-4'
  },
  {
    id: 'l-mod4-13',
    moduleId: 'mod-4',
    order: 13,
    type: 'theory',
    title: 'Correlação Verbal',
    content: `
### A Harmonia dos Tempos
Correlação verbal é a combinação lógica entre os tempos e modos verbais em uma frase. Se você começa uma frase no passado, o resto da frase deve "conversar" com esse passado.

Se esse fosse seu último minuto para estudar para a prova, grave estas **"correlações essenciais"** (Condicionais):

**1. Hipótese no Passado -> Consequência no Futuro do Pretérito**
* Se eu **pudesse** (Pretérito Imperfeito do Subjuntivo), **faria** (Futuro do Pretérito do Indicativo).
* Ex: Se eu *estudasse* todo dia, *passaria* em qualquer prova.

**2. Hipótese no Futuro -> Consequência no Futuro do Presente**
* Se eu **puder** (Futuro do Subjuntivo), **farei** (Futuro do Presente do Indicativo).
* Ex: Quando você me *pagar*, eu *entregarei* o produto.

As bancas vão tentar misturar as duas: *"Se eu pudesse, farei"*. Isso está **ERRADO**! A correlação deve ser perfeita.
    `
  },
  {
    id: 'l-mod4-14',
    moduleId: 'mod-4',
    order: 14,
    type: 'flashcard',
    title: 'Fixação: Correlação Verbal',
    flashcardId: 'fc-21'
  },
  {
    id: 'l-mod4-15',
    moduleId: 'mod-4',
    order: 15,
    type: 'quiz',
    title: 'Questão de Banca: Correlação Verbal',
    quizId: 'q-mod4-5'
  },
  { id: 'l-mod4-16', moduleId: 'mod-4', order: 16, type: 'quiz', title: 'Bateria: Pronomes Demonstrativos', quizId: 'q-mod4-bat-1' },
  { id: 'l-mod4-17', moduleId: 'mod-4', order: 17, type: 'quiz', title: 'Bateria: Colocação Pronominal', quizId: 'q-mod4-bat-2' },
  { id: 'l-mod4-18', moduleId: 'mod-4', order: 18, type: 'quiz', title: 'Bateria: Vozes Verbais', quizId: 'q-mod4-bat-3' },

  // ==========================================
  // MÓDULO 5: SINTAXE DA ORAÇÃO
  // ==========================================
  {
    id: 'l-mod5-1',
    moduleId: 'mod-5',
    order: 1,
    type: 'theory',
    title: 'Sujeito e Predicado',
    content: `
### A Estrutura de Base da Oração
A ordem natural da organização de uma sentença na nossa língua é a famosa **SuVeCA**:
**Sujeito + Verbo + Complemento (+ Adjuntos)**

*   *Eu* (Sujeito) *comprei* (Verbo) *uma bicicleta* (Complemento) *semana passada* (Adjunto).

Muitas vezes, as bancas invertem essa ordem para confundir. A dica de ouro é: **ache o verbo, tente colocar a sentença na ordem direta e procure o sujeito de cada verbo.**

### O Sujeito
É a entidade sobre a qual se declara algo. O verbo concorda com o seu núcleo.
*   **Simples:** Apenas um núcleo. (Ex: *Douglas* é um gênio).
*   **Composto:** Mais de um núcleo. (Ex: *Silvério e Everton* são muquiranas).
*   **Oculto (Desinencial):** Não está escrito, mas é identificável pela terminação do verbo. (Ex: *Encontramos* mamãe -> Nós).
*   **Indeterminado:** Não se sabe quem praticou a ação. Ocorre com verbo na 3ª pessoa do plural (Ex: *Roubaram* nosso carro) ou com a Partícula de Indeterminação do Sujeito (PIS) junto a verbos intransitivos, transitivos indiretos ou de ligação (Ex: *Precisa-se* de médicos).
*   **Oração Sem Sujeito:** Ocorre com verbos impessoais, como fenômenos da natureza ou o verbo **haver** no sentido de existir/ocorrer/tempo. (Ex: *Há* pessoas ruins no mundo).
    `
  },
  {
    id: 'l-mod5-2',
    moduleId: 'mod-5',
    order: 2,
    type: 'flashcard',
    title: 'Fixação: Sujeito Indeterminado vs Oculto',
    flashcardId: 'fc-mod5-1'
  },
  {
    id: 'l-mod5-3',
    moduleId: 'mod-5',
    order: 3,
    type: 'quiz',
    title: 'Questão de Banca: Sujeito',
    quizId: 'q-mod5-1'
  },
  {
    id: 'l-mod5-4',
    moduleId: 'mod-5',
    order: 4,
    type: 'theory',
    title: 'Complementos Verbais (Objetos)',
    content: `
### Verbos Transitivos e Intransitivos
*   **Intransitivos:** Não pedem complemento. (Ex: Joana *corre* todos os dias).
*   **Transitivos:** Exigem complemento.

### Objeto Direto (OD)
É o complemento dos verbos transitivos diretos, **sem preposição** obrigatória.
*   Ex: Comprei *bombons* na promoção. (Comprou o quê? Bombons).

**Objeto Direto Preposicionado:** Às vezes, a preposição aparece por clareza ou ênfase, não por exigência do verbo.
*   Ex: Amar *a Deus*. (Amar é VTD, mas a preposição "a" foi inserida por ênfase).

### Objeto Indireto (OI)
É o complemento dos verbos transitivos indiretos, ligado por **preposição** obrigatória.
*   Ex: Não dependa *de ninguém* para estudar. (Quem depende, depende DE algo/alguém).
    `
  },
  {
    id: 'l-mod5-5',
    moduleId: 'mod-5',
    order: 5,
    type: 'flashcard',
    title: 'Fixação: Objeto Direto Preposicionado',
    flashcardId: 'fc-mod5-2'
  },
  {
    id: 'l-mod5-6',
    moduleId: 'mod-5',
    order: 6,
    type: 'quiz',
    title: 'Questão de Banca: Transitividade',
    quizId: 'q-mod5-2'
  },
  {
    id: 'l-mod5-7',
    moduleId: 'mod-5',
    order: 7,
    type: 'theory',
    title: 'Complemento Nominal vs Adjunto Adnominal',
    content: `
### O Duelo Clássico das Bancas
A diferença essencial é que o **Complemento Nominal (CN)** é exigido pelo nome (como o objeto é pelo verbo), enquanto o **Adjunto Adnominal (AA)** é um termo acessório.

**Complemento Nominal (CN):**
*   Liga-se a substantivos abstratos, adjetivos e advérbios.
*   Sempre preposicionado.
*   Tem sentido **PACIENTE** (alvo).
*   Ex: O abuso *de remédios* é prejudicial *à saúde*. (Os remédios são abusados; a saúde é prejudicada).

**Adjunto Adnominal (AA):**
*   Liga-se a substantivos concretos e abstratos.
*   Pode ter ou não preposição.
*   Tem sentido **AGENTE** (posse, origem).
*   Ex: As pessoas *da família*. (A família possui as pessoas).

> 💡 **Bizu:** Se o termo preposicionado ("de") estiver ligado a um substantivo abstrato, faça o teste do agente/paciente. Se for paciente, é CN. Se for agente, é AA.
    `
  },
  {
    id: 'l-mod5-8',
    moduleId: 'mod-5',
    order: 8,
    type: 'flashcard',
    title: 'Fixação: CN vs AA',
    flashcardId: 'fc-mod5-3'
  },
  {
    id: 'l-mod5-9',
    moduleId: 'mod-5',
    order: 9,
    type: 'quiz',
    title: 'Questão de Banca: CN vs AA',
    quizId: 'q-mod5-3'
  },
  {
    id: 'l-mod5-10',
    moduleId: 'mod-5',
    order: 10,
    type: 'theory',
    title: 'Predicativo e Adjunto Adverbial',
    content: `
### Predicativo
É a qualificação/estado atribuído ao sujeito ou ao objeto.
*   **Predicativo do Sujeito:** Ligado ao sujeito, geralmente por verbo de ligação (ser, estar, ficar). (Ex: João parece *melancólico*).
*   **Predicativo do Objeto:** Qualificação atribuída ao objeto por verbos transobjetivos (julgar, achar, tornar). (Ex: Julgaram o réu *culpado*).

### Adjunto Adverbial
Modifica o verbo, adjetivo ou advérbio, trazendo ideia de circunstância (tempo, modo, causa, lugar, etc.).
*   Ex: Ele morreu *por amor* (causa).
*   Ex: Ela é *muito* bonita (intensidade, modificando adjetivo).

> ⚠️ **Cuidado:** Predicativo indica estado (variável). Adjunto Adverbial indica circunstância (invariável).
    `
  },
  {
    id: 'l-mod5-11',
    moduleId: 'mod-5',
    order: 11,
    type: 'flashcard',
    title: 'Fixação: Predicativo',
    flashcardId: 'fc-mod5-4'
  },
  {
    id: 'l-mod5-12',
    moduleId: 'mod-5',
    order: 12,
    type: 'quiz',
    title: 'Questão de Banca: Predicativo vs Adjunto',
    quizId: 'q-mod5-4'
  }
];
