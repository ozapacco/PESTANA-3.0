import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, RotateCcw, ArrowLeft, Trophy, Star } from 'lucide-react';
import { Flashcard } from '../data/flashcards';
import { cn } from '../lib/utils';

interface FlashcardPlayerProps {
  deck: Flashcard[];
  moduleTitle: string;
  onClose: () => void;
  isEmbedded?: boolean;
}

export function FlashcardPlayer({ deck, moduleTitle, onClose, isEmbedded = false }: FlashcardPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState({ correct: 0, hard: 0, wrong: 0 });

  const currentCard = deck[currentIndex];
  const progress = deck.length > 0 ? ((currentIndex) / deck.length) * 100 : 0;

  if (deck.length === 0) {
    return (
      <div className={cn(
        "text-slate-200 flex flex-col items-center justify-center p-4",
        !isEmbedded && "min-h-screen bg-slate-950"
      )}>
        <p className="text-slate-400 mb-4">Nenhum flashcard disponível neste módulo.</p>
        <button onClick={onClose} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-xl">
          Voltar
        </button>
      </div>
    );
  }

  const handleReveal = () => {
    setIsFlipped(true);
  };

  const handleAnswer = (quality: 'wrong' | 'hard' | 'correct') => {
    setScore(s => ({ ...s, [quality]: s[quality] + 1 }));
    
    if (currentIndex < deck.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(i => i + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Helper to parse {{c1::text}} into cloze spans
  const renderCloze = (text: string, revealed: boolean) => {
    const parts = text.split(/(\{\{c\d::.*?\}\})/g);
    
    return parts.map((part, i) => {
      const match = part.match(/\{\{c\d::(.*?)\}\}/);
      if (match) {
        if (revealed) {
          return (
            <span key={i} className="bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded border border-blue-500/30">
              {match[1]}
            </span>
          );
        }
        return (
          <span key={i} className="inline-block min-w-[80px] border-b-2 border-slate-600 text-transparent bg-slate-800 px-2 py-0.5 rounded mx-1">
            [...]
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-md w-full text-center shadow-2xl shadow-blue-900/20"
        >
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold mb-2 text-white">Treino Concluído!</h2>
          <p className="text-slate-400 mb-8">Você revisou {deck.length} cards de {moduleTitle}.</p>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="text-emerald-400 font-bold text-2xl">{score.correct}</div>
              <div className="text-xs text-slate-500 uppercase font-bold mt-1">Fácil</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="text-yellow-400 font-bold text-2xl">{score.hard}</div>
              <div className="text-xs text-slate-500 uppercase font-bold mt-1">Bom</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="text-red-400 font-bold text-2xl">{score.wrong}</div>
              <div className="text-xs text-slate-500 uppercase font-bold mt-1">Errei</div>
            </div>
          </div>

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

  return (
    <div className={cn(
      "text-slate-200 flex flex-col font-sans",
      !isEmbedded && "min-h-screen bg-slate-950"
    )}>
      {/* Topbar */}
      {!isEmbedded && (
        <header className="p-4 flex items-center justify-between border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="flex-1 mx-8 max-w-xl">
            <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
              <span>{moduleTitle}</span>
              <span>{currentIndex + 1} / {deck.length}</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="w-10" /> {/* Spacer for centering */}
        </header>
      )}

      {/* Card Area */}
      <main className={cn(
        "flex-1 flex flex-col items-center justify-center",
        !isEmbedded && "p-4 md:p-8"
      )}>
        <div className="w-full max-w-2xl relative perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.id + (isFlipped ? '-flipped' : '-front')}
              initial={{ opacity: 0, y: 20, rotateX: isFlipped ? -90 : 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: isFlipped ? 90 : -90 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "w-full bg-slate-900 border rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col justify-center min-h-[300px]",
                isFlipped ? "border-blue-500/30 shadow-blue-900/10" : "border-slate-700"
              )}
            >
              {/* Front Content */}
              <div className="text-xl md:text-2xl font-medium leading-relaxed text-center text-slate-100">
                {renderCloze(currentCard.front, isFlipped)}
              </div>

              {/* Back Content (Explanation) */}
              {isFlipped && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-8 pt-8 border-t border-slate-800 text-left"
                >
                  <div 
                    className="prose prose-invert prose-slate max-w-none text-slate-300 text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: currentCard.back }}
                  />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="w-full max-w-2xl mt-8">
          {!isFlipped ? (
            <button
              onClick={handleReveal}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-5 rounded-2xl transition-all border border-slate-700 hover:border-slate-600 shadow-lg active:scale-[0.98]"
            >
              REVELAR RESPOSTA
            </button>
          ) : (
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <button
                onClick={() => handleAnswer('wrong')}
                className="flex flex-col items-center justify-center gap-2 bg-slate-900 hover:bg-red-950/30 text-red-400 font-bold py-4 rounded-2xl transition-all border border-slate-800 hover:border-red-900/50 active:scale-[0.98]"
              >
                <X className="w-6 h-6" />
                <span>Errei</span>
              </button>
              <button
                onClick={() => handleAnswer('hard')}
                className="flex flex-col items-center justify-center gap-2 bg-slate-900 hover:bg-yellow-950/30 text-yellow-400 font-bold py-4 rounded-2xl transition-all border border-slate-800 hover:border-yellow-900/50 active:scale-[0.98]"
              >
                <RotateCcw className="w-6 h-6" />
                <span>Bom</span>
              </button>
              <button
                onClick={() => handleAnswer('correct')}
                className="flex flex-col items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-950/30 text-emerald-400 font-bold py-4 rounded-2xl transition-all border border-slate-800 hover:border-emerald-900/50 active:scale-[0.98]"
              >
                <Check className="w-6 h-6" />
                <span>Fácil</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
