export type Importance = 'low' | 'medium' | 'high' | 'critical';

export interface Module {
  id: string;
  order: number;
  title: string;
  description: string;
  importance: Importance;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  icon: string;
}

export const curriculum: Module[] = [
  {
    id: 'mod-0',
    order: 0,
    title: 'Nivelamento Morfológico',
    description: 'Reconhecimento básico das 10 classes de palavras. A fundação da casa.',
    importance: 'medium',
    progress: 0,
    totalLessons: 5,
    completedLessons: 0,
    icon: 'Hammer'
  },
  {
    id: 'mod-1',
    order: 1,
    title: 'Fonologia Básica',
    description: 'Sons, Letras, Fonemas, Dígrafos e Encontros Vocálicos (Ditongo, Hiato). A base da acentuação.',
    importance: 'high',
    progress: 0,
    totalLessons: 10,
    completedLessons: 0,
    icon: 'Layers'
  },
  {
    id: 'mod-2',
    order: 2,
    title: 'Acentuação Gráfica',
    description: 'Regras gerais, regra do hiato e acentos diferenciais. Depende 100% da fonologia.',
    importance: 'critical',
    progress: 0,
    totalLessons: 15,
    completedLessons: 0,
    icon: 'PenTool'
  },
  {
    id: 'mod-3',
    order: 3,
    title: 'Ortografia e Hífen',
    description: 'Novo Acordo Ortográfico, uso dos porquês, mal/mau e regras do hífen.',
    importance: 'high',
    progress: 0,
    totalLessons: 12,
    completedLessons: 0,
    icon: 'TextCursor'
  },
  {
    id: 'mod-4',
    order: 4,
    title: 'Pronomes e Verbos',
    description: 'Morfologia aprofundada: colocação pronominal, tempos e modos verbais, vozes e correlação.',
    importance: 'critical',
    progress: 0,
    totalLessons: 15,
    completedLessons: 0,
    icon: 'GitMerge'
  },
  {
    id: 'mod-5',
    order: 5,
    title: 'Sintaxe da Oração',
    description: 'Termos essenciais, integrantes e acessórios. Tipos de sujeito e predicado.',
    importance: 'critical',
    progress: 0,
    totalLessons: 10,
    completedLessons: 0,
    icon: 'Structure'
  },
  {
    id: 'mod-6',
    order: 6,
    title: 'Sintaxe do Período',
    description: 'Orações Coordenadas e Subordinadas. O coração da interpretação e da pontuação.',
    importance: 'critical',
    progress: 0,
    totalLessons: 15,
    completedLessons: 0,
    icon: 'GitMerge'
  },
  {
    id: 'mod-7',
    order: 7,
    title: 'Concordância Nominal e Verbal',
    description: 'Regra geral e casos especiais que as bancas amam cobrar.',
    importance: 'high',
    progress: 0,
    totalLessons: 10,
    completedLessons: 0,
    icon: 'CheckDouble'
  },
  {
    id: 'mod-8',
    order: 8,
    title: 'Regência e Crase',
    description: 'Regência dos principais verbos e o terror dos candidatos: a Crase.',
    importance: 'critical',
    progress: 0,
    totalLessons: 12,
    completedLessons: 0,
    icon: 'Target'
  },
  {
    id: 'mod-9',
    order: 9,
    title: 'Pontuação',
    description: 'Uso da vírgula, ponto e vírgula, travessões. Depende 100% da sintaxe.',
    importance: 'critical',
    progress: 0,
    totalLessons: 8,
    completedLessons: 0,
    icon: 'TextCursor'
  },
  {
    id: 'mod-10',
    order: 10,
    title: 'Semântica e Reescritura',
    description: 'Sinônimos, antônimos, figuras de linguagem e questões de reescritura de frases.',
    importance: 'high',
    progress: 0,
    totalLessons: 8,
    completedLessons: 0,
    icon: 'Repeat'
  },
  {
    id: 'mod-11',
    order: 11,
    title: 'Compreensão e Interpretação',
    description: 'Tipologia textual, coesão, coerência e estratégias de leitura para provas.',
    importance: 'critical',
    progress: 0,
    totalLessons: 10,
    completedLessons: 0,
    icon: 'BookOpen'
  }
];
