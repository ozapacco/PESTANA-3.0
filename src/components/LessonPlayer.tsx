import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, BookOpen, BrainCircuit, Target, PlayCircle } from 'lucide-react';
import { Lesson, lessons } from '../data/lessons';
import { flashcards } from '../data/flashcards';
import { quizzes } from '../data/quizzes';
import { FlashcardPlayer } from './FlashcardPlayer';
import { cn } from '../lib/utils';

// Simple Markdown parser for theory content
const renderMarkdown = (text: string) => {
  let html = text
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-white mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-extrabold text-white mt-10 mb-6">$1</h2>')
    .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 bg-blue-500/10 p-4 rounded-r-lg my-6 text-blue-100">$1</blockquote>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-400 font-extrabold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-slate-300 italic">$1</em>')
    .replace(/^\* (.*$)/gim, '<li class="ml-6 list-disc text-slate-300 mb-2">$1</li>')
    .replace(/^[0-9]\. (.*$)/gim, '<li class="ml-6 list-decimal text-slate-300 mb-2">$1</li>');

  return <div dangerouslySetInnerHTML={{ __html: html }} className="text-lg leading-relaxed" />;
};

interface LessonPlayerProps {
  moduleId: string;
  onClose: () => void;
}

export function LessonPlayer({ moduleId, onClose }: LessonPlayerProps) {
  // Get all lessons for this module, sorted by order
  const moduleLessons = lessons.filter(l => l.moduleId === moduleId).sort((a, b) => a.order - b.order);
  
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [quizState, setQuizState] = useState<{ selectedOption: string | null; isSubmitted: boolean }>({
    selectedOption: null,
    isSubmitted: false
  });

  const currentLesson = moduleLessons[currentLessonIndex];
  const progress = moduleLessons.length > 0 ? ((currentLessonIndex) / moduleLessons.length) * 100 : 0;

  if (moduleLessons.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-md w-full text-center shadow-2xl shadow-blue-900/20"
        >
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-slate-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-white">Módulo em Construção</h2>
          <p className="text-slate-400 mb-8">O professor está preparando o material de alta performance para este módulo. Volte em breve!</p>
          <button 
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-colors"
          >
            VOLTAR AO QG
          </button>
        </motion.div>
      </div>
    );
  }

  const handleNext = () => {
    if (currentLessonIndex < moduleLessons.length - 1) {
      setCurrentLessonIndex(i => i + 1);
      setQuizState({ selectedOption: null, isSubmitted: false });
    } else {
      onClose(); // Module complete
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(i => i - 1);
      setQuizState({ selectedOption: null, isSubmitted: false });
    }
  };

  const renderTheory = (lesson: Lesson) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-6 text-blue-400">
        <BookOpen className="w-6 h-6" />
        <span className="font-bold tracking-wider uppercase text-sm">Teoria Direta ao Ponto</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-8">{lesson.title}</h1>
      <div className="prose-custom">
        {renderMarkdown(lesson.content || '')}
      </div>
    </motion.div>
  );

  const renderQuiz = (lesson: Lesson) => {
    const quiz = quizzes.find(q => q.id === lesson.quizId);
    if (!quiz) return <div>Quiz não encontrado.</div>;

    const isCorrect = quizState.selectedOption ? quiz.options.find(o => o.id === quizState.selectedOption)?.isCorrect : false;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3 text-yellow-400">
              <Target className="w-6 h-6" />
              <span className="font-bold tracking-wider uppercase text-sm">Teste seu Conhecimento</span>
            </div>
            {quiz.source && (
              <span className="text-xs font-bold bg-slate-800 text-slate-400 px-3 py-1 rounded-full">
                {quiz.source}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
            {quiz.text}
          </h2>

          <div className="space-y-4">
            {quiz.options.map(option => {
              const isSelected = quizState.selectedOption === option.id;
              const showCorrect = quizState.isSubmitted && option.isCorrect;
              const showWrong = quizState.isSubmitted && isSelected && !option.isCorrect;

              return (
                <button
                  key={option.id}
                  disabled={quizState.isSubmitted}
                  onClick={() => setQuizState({ selectedOption: option.id, isSubmitted: false })}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 group",
                    !quizState.isSubmitted && !isSelected && "border-slate-800 bg-slate-900/50 hover:border-blue-500/50 hover:bg-slate-800",
                    !quizState.isSubmitted && isSelected && "border-blue-500 bg-blue-500/10",
                    showCorrect && "border-emerald-500 bg-emerald-500/10",
                    showWrong && "border-red-500 bg-red-500/10",
                    quizState.isSubmitted && !isSelected && !option.isCorrect && "border-slate-800 bg-slate-900/30 opacity-50"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                    !quizState.isSubmitted && !isSelected && "border-slate-600 group-hover:border-blue-400",
                    !quizState.isSubmitted && isSelected && "border-blue-500 bg-blue-500",
                    showCorrect && "border-emerald-500 bg-emerald-500",
                    showWrong && "border-red-500 bg-red-500"
                  )}>
                    {showCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                    {showWrong && <XCircle className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <span className={cn(
                      "text-lg font-medium",
                      showCorrect ? "text-emerald-300" : showWrong ? "text-red-300" : "text-slate-200"
                    )}>
                      {option.text}
                    </span>
                    
                    {/* Option specific explanation */}
                    <AnimatePresence>
                      {quizState.isSubmitted && (showCorrect || showWrong) && option.explanation && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className={cn(
                            "mt-3 text-sm font-medium",
                            showCorrect ? "text-emerald-400/80" : "text-red-400/80"
                          )}
                        >
                          ↳ {option.explanation}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Submit / General Explanation Area */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            {!quizState.isSubmitted ? (
              <button
                disabled={!quizState.selectedOption}
                onClick={() => setQuizState(s => ({ ...s, isSubmitted: true }))}
                className="w-full bg-blue-600 disabled:bg-slate-800 disabled:text-slate-500 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-colors"
              >
                CONFIRMAR RESPOSTA
              </button>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "p-6 rounded-2xl border",
                  isCorrect ? "bg-emerald-950/30 border-emerald-900/50" : "bg-red-950/30 border-red-900/50"
                )}
              >
                <h3 className={cn(
                  "text-xl font-bold mb-3",
                  isCorrect ? "text-emerald-400" : "text-red-400"
                )}>
                  {isCorrect ? 'Mandou bem!' : 'Atenção ao detalhe!'}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {quiz.generalExplanation}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderFlashcard = (lesson: Lesson) => {
    const card = flashcards.find(f => f.id === lesson.flashcardId);
    if (!card) return <div>Flashcard não encontrado.</div>;

    // We reuse the FlashcardPlayer component but pass only this single card
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6 text-emerald-400 justify-center">
          <BrainCircuit className="w-6 h-6" />
          <span className="font-bold tracking-wider uppercase text-sm">Active Recall (Memorização)</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-2 shadow-2xl relative overflow-hidden">
           <FlashcardPlayer 
             deck={[card]} 
             moduleTitle="Treino Isolado" 
             onClose={handleNext} // Auto advance when done with this card
             isEmbedded={true}
           />
        </div>
      </div>
    );
  };

  if (!currentLesson) return <div>Carregando...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col font-sans">
      {/* Topbar */}
      <header className="p-4 flex items-center justify-between border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <button 
          onClick={onClose}
          className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-bold hidden md:inline">SAIR</span>
        </button>
        
        <div className="flex-1 mx-4 md:mx-8 max-w-2xl">
          <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
            <span className="uppercase tracking-wider">Trilha de Aprendizagem</span>
            <span>{currentLessonIndex + 1} / {moduleLessons.length}</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden flex gap-1">
            {moduleLessons.map((_, idx) => (
              <div 
                key={idx}
                className={cn(
                  "h-full flex-1 rounded-full transition-colors duration-300",
                  idx < currentLessonIndex ? "bg-emerald-500" : 
                  idx === currentLessonIndex ? "bg-blue-500" : "bg-slate-800"
                )}
              />
            ))}
          </div>
        </div>

        <div className="w-20" /> {/* Spacer */}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLesson.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentLesson.type === 'theory' && renderTheory(currentLesson)}
            {currentLesson.type === 'quiz' && renderQuiz(currentLesson)}
            {currentLesson.type === 'flashcard' && renderFlashcard(currentLesson)}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent pointer-events-none">
        <div className="max-w-3xl mx-auto flex justify-between gap-4 pointer-events-auto">
          <button
            onClick={handlePrev}
            disabled={currentLessonIndex === 0}
            className="px-6 py-4 rounded-xl font-bold bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden md:inline">Anterior</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentLesson.type === 'quiz' && !quizState.isSubmitted}
            className="flex-1 md:flex-none px-8 py-4 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
          >
            <span>{currentLessonIndex === moduleLessons.length - 1 ? 'CONCLUIR MÓDULO' : 'AVANÇAR'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
