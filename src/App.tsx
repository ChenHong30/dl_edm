import { motion } from 'framer-motion'
import { 
  BrainCircuit, 
  Users, 
  TrendingUp, 
  Sparkles, 
  BookOpen, 
  ArrowRight,
  Database,
  Lightbulb,
  ExternalLink,
  Mail
} from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const SectionHeading = ({ title, subtitle, className, id }: { title: string, subtitle?: string, className?: string, id?: string }) => (
  <div id={id} className={cn("mb-6 scroll-mt-28", className)}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-3"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 text-lg max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
)

const ScenarioCard = ({ icon: Icon, title, description, algorithms, index }: { icon: any, title: string, description: string, algorithms: string[], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="glass p-7 rounded-3xl relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={120} />
    </div>
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 mb-5 leading-relaxed text-sm md:text-base">
        {description}
      </p>
      
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Key Algorithms</p>
        <div className="flex flex-wrap gap-2">
          {algorithms.map(alg => (
            <span key={alg} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              {alg}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

const AuthorItem = ({ name, affil, isCoFirst, isCorresponding }: { name: string, affil: string, isCoFirst?: boolean, isCorresponding?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className="flex items-center gap-1 font-medium text-slate-200">
      {name}
      {isCoFirst && <span title="Co-First Author" className="text-xs text-blue-400 align-super cursor-help">*</span>}
      {isCorresponding && <span title="Corresponding Author" className="text-xs text-yellow-400 align-super cursor-help">†</span>}
      <span className="text-[10px] text-slate-500 font-mono align-super">[{affil}]</span>
    </div>
  </div>
)

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Decor */}
      <div className="fixed inset-0 grid-background pointer-events-none opacity-50" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />
      
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-xl tracking-tight">DL-EDM Survey</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#scenarios" className="hover:text-white transition-colors">Scenarios</a>
            <a href="#datasets" className="hover:text-white transition-colors">Datasets</a>
            <a href="#trends" className="hover:text-white transition-colors">Future</a>
            <a 
              href="https://link.springer.com/article/10.1007/s41019-025-00303-z" 
              target="_blank" 
              className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl"
            >
              Read Paper <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-6"
            >
              <BookOpen size={14} /> Data Science and Engineering (2025)
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight max-w-5xl mx-auto flex flex-col items-center gap-0">
              <span className="leading-[1.1]">A Comprehensive Survey on</span>
              <span className="text-gradient py-1.5 leading-[1.1]">Deep Learning Techniques</span>
              <span className="leading-[1.1]">in Educational Data Mining</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-6 text-base">
              <AuthorItem name="Yuanguo Lin" affil="1" isCoFirst />
              <AuthorItem name="Hong Chen" affil="3" isCoFirst />
              <AuthorItem name="Wei Xia" affil="4" />
              <AuthorItem name="Fan Lin" affil="2" isCorresponding />
              <AuthorItem name="Zongyue Wang" affil="1" />
              <AuthorItem name="Yong Liu" affil="5" />
            </div>

            <div className="flex flex-col gap-2 text-[12px] text-slate-400 mb-10 max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
                <span>[1] Jimei University</span>
                <span>[2] Xiamen University</span>
                <span>[3] The Hong Kong University of Science and Technology (Guangzhou)</span>
                <span>[4] Tencent</span>
                <span>[5] Nanyang Technological University</span>
              </div>
              <div className="flex justify-center gap-6 mt-2">
                <span className="flex items-center gap-1.5"><span className="text-blue-400 font-bold">*</span> Co-First Author</span>
                <span className="flex items-center gap-1.5"><span className="text-yellow-400 font-bold">†</span> Corresponding Author</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-[32px] p-10 relative group"
          >
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Lightbulb className="text-yellow-400" size={20} /> Abstract Overview
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Educational Data Mining (EDM) harnesses computational techniques to analyze academic data. This survey systematically reviews DL techniques in four scenarios: knowledge tracing, student behavior detection, performance prediction, and personalized recommendation. We provide an overview of public datasets and processing tools, and point out emerging trends to guide future research.
                </p>
              </div>
              <div className="space-y-5 border-l border-white/10 pl-10 hidden md:block text-sm">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Keywords</h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {['Educational data mining', 'Deep learning', 'Reinforcement learning', 'Educational datasets'].map(k => (
                      <span key={k} className="text-slate-300">{k}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Publisher</h4>
                  <p className="text-slate-300 font-medium">Springer - Data Science and Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Typical Scenarios Section */}
        <section className="max-w-7xl mx-auto px-6 mb-8 py-4">
          <SectionHeading 
            id="scenarios"
            title="Four Typical Scenarios"
            subtitle="Deep Learning has revolutionized these core educational areas by enabling complex pattern recognition and predictive modeling."
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <ScenarioCard 
              index={0}
              icon={BrainCircuit}
              title="Knowledge Tracing"
              description="Tracks student learning progress and predicts future performance based on historical interaction sequences."
              algorithms={['LSTM', 'Transformer', 'DKT', 'GNN']}
            />
            <ScenarioCard 
              index={1}
              icon={Users}
              title="Behavior Detection"
              description="Identifies behaviors like cheating, disengagement, or emotion states from platform logs and multi-modal data."
              algorithms={['CNN', 'ResNet-50', 'Bi-LSTM', 'GAN']}
            />
            <ScenarioCard 
              index={2}
              icon={TrendingUp}
              title="Performance Prediction"
              description="Predicts academic outcomes, dropout risks, and final grades to enable early pedagogical intervention."
              algorithms={['MLP', 'CRN', 'SDPNN', 'GRU-ANOVA']}
            />
            <ScenarioCard 
              index={3}
              icon={Sparkles}
              title="Personalized Rec"
              description="Recommends courses, exercises, or learning paths tailored to individual interests and mastery levels."
              algorithms={['BERT', 'DeepRL', 'KG-based', 'GCN']}
            />
          </div>
        </section>

        {/* Datasets Section */}
        <section className="py-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 -skew-y-1 translate-y-8 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <SectionHeading 
              id="datasets"
              title="Curated Datasets"
              subtitle="A comprehensive overview of the most influential public datasets in the EDM community."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: 'ASSISTments', type: 'Knowledge Tracing', desc: 'The most widely used benchmark for student interaction data.' },
                { name: 'Junyi Academy', type: 'Online Learning', desc: 'Large-scale dataset containing secondary school student logs.' },
                { name: 'MOOCCube', type: 'MOOC Platform', desc: 'Open data warehouse with NLP, KG, and video interactions.' },
                { name: 'XuetangX', type: 'MOOC Platform', desc: 'Chinese MOOC dataset with millions of records for SBD.' },
                { name: 'EdNet', type: 'E-learning', desc: 'High-diversity interactions from Santa, an AI tutoring service.' },
                { name: 'Canvas Network', type: 'LMS Logs', desc: 'Multi-institution data including enrollment and interaction logs.' },
              ].map((ds, i) => (
                <motion.div
                  key={ds.name}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Database size={18} className="text-blue-400" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{ds.type}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1.5 group-hover:text-blue-400 transition-colors">{ds.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{ds.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Trends Section */}
        <section className="max-w-7xl mx-auto px-6 py-6 mb-8">
          <SectionHeading 
            id="trends"
            title="Future Directions"
            subtitle="Mapping the trajectory of EDM research in the era of Large Language Models and Multimodal AI."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'LLMs for Education', text: 'Integrating generative agents for personalized content and tutoring.' },
              { title: 'Explainable AI (XAI)', text: 'Making deep models interpretable for educators and decision-makers.' },
              { title: 'Multimodal Analytics', text: 'Combining video, audio, and text for holistic student modeling.' },
              { title: 'Real-time Processing', text: 'Developing scalable architectures for instant pedagogical feedback.' },
            ].map((trend, i) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-[28px] glass group"
              >
                <div className="text-primary mb-5 group-hover:scale-110 transition-transform origin-left">
                  <ArrowRight size={20} />
                </div>
                <h4 className="text-base font-bold mb-2">{trend.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{trend.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
            <a href="https://link.springer.com/article/10.1007/s41019-025-00303-z" className="text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline">Springer Link</a>
            <a href="mailto:hchen763@connect.hkustgz.edu.cn" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 underline-offset-4 hover:underline">
              <Mail size={14} /> Contact Author
            </a>
          </div>
          
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700">
            Page Developed By Gemini CLI
          </p>
        </div>
      </footer>
    </div>
  )
}