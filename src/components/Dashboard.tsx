import React from 'react';
import { motion } from 'motion/react';
import { 
  Hammer, PenTool, Layers, Network, GitMerge, 
  CheckCircle2, Target, TextCursor, Repeat, BookOpen,
  Lock, PlayCircle, Star
} from 'lucide-react';
import { Module, curriculum } from '../data/curriculum';
import { cn } from '../lib/utils';

const iconMap: Record<string, React.ElementType> = {
  Hammer, PenTool, Layers, Structure: Network, GitMerge, 
  CheckDouble: CheckCircle2, Target, TextCursor, Repeat, BookOpen
};

const importanceColors = {
  low: 'bg-slate-500 text-slate-100',
  medium: 'bg-blue-500 text-blue-50',
  high: 'bg-orange-500 text-orange-50',
  critical: 'bg-red-600 text-red-50',
};

const importanceLabels = {
  low: 'Baixa Incidência',
  medium: 'Incidência Média',
  high: 'Cai Bastante',
  critical: 'CAI SEMPRE (Dominar!)',
};

export function Dashboard({ onStartModule }: { onStartModule: (moduleId: string) => void }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 font-sans">
      
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-12 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tight">
            CT Português
          </h1>
          <p className="text-slate-400 mt-1 font-medium">Alta Performance para Concursos</p>
        </div>
        
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-bold text-slate-100">0 XP</span>
          </div>
        </div>
      </header>

      {/* Main Path */}
      <main className="max-w-3xl mx-auto relative">
        {/* Connecting Line */}
        <div className="absolute left-8 top-8 bottom-8 w-1 bg-slate-800 rounded-full z-0 hidden md:block" />

        <div className="space-y-6 relative z-10">
          {curriculum.map((mod, index) => {
            const Icon = iconMap[mod.icon] || BookOpen;
            // For the prototype, let's unlock the first seven modules
            const isLocked = !['mod-0', 'mod-1', 'mod-2', 'mod-3', 'mod-4', 'mod-5', 'mod-6'].includes(mod.id);

            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={mod.id}
                className={cn(
                  "flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center p-5 rounded-2xl border transition-all",
                  isLocked 
                    ? "bg-slate-900/50 border-slate-800/50 opacity-75 grayscale-[0.5]" 
                    : "bg-slate-900 border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 cursor-pointer"
                )}
              >
                {/* Icon Circle */}
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-4 z-10",
                  isLocked ? "bg-slate-800 border-slate-900" : "bg-blue-600 border-slate-900 shadow-lg shadow-blue-500/30"
                )}>
                  {isLocked ? <Lock className="w-6 h-6 text-slate-500" /> : <Icon className="w-7 h-7 text-white" />}
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-100">
                      {mod.order}. {mod.title}
                    </h3>
                    <span className={cn(
                      "text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                      importanceColors[mod.importance]
                    )}>
                      {importanceLabels[mod.importance]}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                        style={{ width: `${mod.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-500 w-12 text-right">
                      {mod.completedLessons}/{mod.totalLessons}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                {!isLocked && (
                  <button 
                    onClick={() => onStartModule(mod.id)}
                    className="mt-4 md:mt-0 w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                  >
                    <PlayCircle className="w-5 h-5" />
                    INICIAR
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
