import { useEffect, useState } from 'react';
import { Cpu, Database, Server, Zap, Bitcoin } from 'lucide-react';

export const MiningAnimation = () => {
    const [hashes, setHashes] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHashes(prev => {
                const newHash = Date.now();
                const filtered = prev.filter(h => Date.now() - h < 2000); // Keep hashes for 2s
                return [...filtered, newHash];
            });
        }, 400); // Generate new hash activity every 400ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
            {/* Central Mining Rig */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/30 shadow-[0_0_50px_rgba(234,179,8,0.2)] animate-pulse">
                    <Server className="w-20 h-20 md:w-32 md:h-32 text-yellow-500" strokeWidth={1} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu className="w-8 h-8 md:w-12 md:h-12 text-white animate-spin-slow opacity-80" />
                    </div>
                </div>
                <div className="mt-4 flex gap-2">
                    <span className="text-xs font-mono text-yellow-500/80 animate-pulse">● LIVE MINING</span>
                    <span className="text-xs font-mono text-green-400 font-bold tracking-wider">
                        {(245 + Math.random() * 10).toFixed(2)} TH/s
                    </span>
                </div>
            </div>

            {/* Orbiting Nodes */}
            <div className="absolute animate-spin-slow w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full border border-white/5 border-dashed pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B1421] p-2 rounded-full border border-white/10">
                    <Database className="w-5 h-5 text-blue-400" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0B1421] p-2 rounded-full border border-white/10">
                    <Zap className="w-5 h-5 text-orange-400" />
                </div>
            </div>

            {/* Floating Mined Blocks */}
            {hashes.map((hash, i) => {
                const angle = (i * 137.5) % 360; // Golden angle for distribution
                const radius = 120 + Math.random() * 60;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                    <div
                        key={hash}
                        className="absolute animate-out fade-out zoom-out duration-2000 pointer-events-none"
                        style={{
                            transform: `translate(${x}px, ${y}px)`,
                            animationDuration: '2s',
                        }}
                    >
                        <div className="flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 rounded px-2 py-1 backdrop-blur-sm">
                            <Bitcoin className="w-3 h-3 text-yellow-500" />
                            <span className="text-[10px] font-mono text-yellow-200">
                                +0.00{Math.floor(Math.random() * 9)}BTC
                            </span>
                        </div>
                    </div>
                );
            })}

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-3xl rounded-full pointer-events-none" />
        </div>
    );
};
