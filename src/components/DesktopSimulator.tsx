import React, { useState, useEffect, useRef } from 'react';
import { Translation } from '../types/content';
import { 
  Play, Pause, Sliders, Check, 
  Layers, Sparkles, Volume2, Wifi, BatteryCharging, 
  Search, Grid
} from 'lucide-react';

interface SimulatorProps {
  t: Translation;
}

type TaskbarMode = 'clear' | 'blur' | 'acrylic' | 'opaque';
type WallpaperPreset = 'sunset' | 'cyber' | 'nature';

export const DesktopSimulator: React.FC<SimulatorProps> = ({ t }) => {
  const [taskbarMode, setTaskbarMode] = useState<TaskbarMode>('clear');
  const [preset, setPreset] = useState<WallpaperPreset>('sunset');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [timeString, setTimeString] = useState<string>('12:00:00');
  const [activeWindow, setActiveWindow] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Realtime Windows Clock in Taskbar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Canvas Procedural Live Wallpaper Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    let step = 0;

    const render = () => {
      if (!isPlaying) {
        // Paused state (simulating 0% CPU suspend)
        return;
      }
      step += 0.015;

      ctx.clearRect(0, 0, width, height);

      if (preset === 'sunset') {
        // Warm Fluid Mesh matching palette (#F3EEE3, #111111, #D9541E)
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, '#111111');
        grad.addColorStop(0.5, '#221510');
        grad.addColorStop(1, '#0d0d0d');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // Fluid waves
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(0, height);
          for (let x = 0; x <= width; x += 20) {
            const y = Math.sin(x * 0.005 + step + i * 1.5) * 45 + 
                      Math.cos(x * 0.003 - step * 0.8) * 35 + 
                      (height * 0.55 + i * 40);
            ctx.lineTo(x, y);
          }
          ctx.lineTo(width, height);
          ctx.closePath();

          if (i === 0) {
            ctx.fillStyle = 'rgba(217, 84, 30, 0.45)'; // Burnt orange
          } else if (i === 1) {
            ctx.fillStyle = 'rgba(243, 238, 227, 0.15)'; // Cream
          } else {
            ctx.fillStyle = 'rgba(217, 84, 30, 0.2)';
          }
          ctx.fill();
        }

        // Floating ambient light orb
        const orbX = width * 0.75 + Math.sin(step * 0.5) * 60;
        const orbY = height * 0.35 + Math.cos(step * 0.5) * 40;
        const orbGrad = ctx.createRadialGradient(orbX, orbY, 10, orbX, orbY, 160);
        orbGrad.addColorStop(0, 'rgba(217, 84, 30, 0.6)');
        orbGrad.addColorStop(1, 'rgba(217, 84, 30, 0)');
        ctx.fillStyle = orbGrad;
        ctx.beginPath();
        ctx.arc(orbX, orbY, 160, 0, Math.PI * 2);
        ctx.fill();

      } else if (preset === 'cyber') {
        // Cyberpunk Horizon Grid
        ctx.fillStyle = '#0a0a0c';
        ctx.fillRect(0, 0, width, height);

        // Sun / Moon in horizon
        const sunY = height * 0.42;
        const sunGrad = ctx.createRadialGradient(width / 2, sunY, 10, width / 2, sunY, 120);
        sunGrad.addColorStop(0, '#D9541E');
        sunGrad.addColorStop(0.7, 'rgba(217, 84, 30, 0.3)');
        sunGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = sunGrad;
        ctx.beginPath();
        ctx.arc(width / 2, sunY, 120, 0, Math.PI * 2);
        ctx.fill();

        // 3D Perspective Grid
        ctx.strokeStyle = 'rgba(217, 84, 30, 0.25)';
        ctx.lineWidth = 1;

        // Horizontal lines moving down
        const horizon = height * 0.48;
        for (let i = 0; i < 15; i++) {
          const progress = ((step * 0.4 + i / 15) % 1);
          const y = horizon + Math.pow(progress, 2.5) * (height - horizon);
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Perspective lines radiating from horizon center
        for (let x = -width; x < width * 2; x += 80) {
          ctx.beginPath();
          ctx.moveTo(width / 2, horizon);
          ctx.lineTo(x, height);
          ctx.stroke();
        }

      } else {
        // Minimal Aurora Wave
        ctx.fillStyle = '#101314';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          for (let x = 0; x <= width; x += 15) {
            const y = Math.sin(x * 0.004 + step * 0.9 + i) * 60 +
                      Math.cos(x * 0.007 + step * 0.5) * 40 +
                      (height * 0.35 + i * 35);
            ctx.lineTo(x, y);
          }
          ctx.lineTo(width, 0);
          ctx.closePath();

          ctx.fillStyle = i % 2 === 0 
            ? 'rgba(217, 84, 30, 0.2)' 
            : 'rgba(243, 238, 227, 0.12)';
          ctx.fill();
        }
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [preset, isPlaying]);

  // Handle taskbar classes based on mode
  const getTaskbarClasses = () => {
    switch (taskbarMode) {
      case 'clear':
        return 'bg-transparent border-transparent text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]';
      case 'blur':
        return 'bg-black/40 backdrop-blur-xl border-t border-white/10 text-white shadow-lg';
      case 'acrylic':
        return 'bg-white/15 backdrop-blur-md border-t border-white/20 text-white shadow-xl';
      case 'opaque':
      default:
        return 'bg-[#181818] border-t border-[#2a2a2a] text-white shadow-md';
    }
  };

  return (
    <section id="simulator" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9541E]/10 border border-[#D9541E]/20 text-xs font-mono text-[#D9541E] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.simulator.tag}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
          {t.simulator.title}
        </h2>
        <p className="text-sm sm:text-base text-[#111111]/70">
          {t.simulator.subtitle}
        </p>
      </div>

      {/* Simulator Control Dock */}
      <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-3xl border border-[#111111]/10 shadow-sm mb-6 space-y-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          {/* Wallpaper Preset Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-semibold text-[#111111]/70 mr-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#D9541E]" />
              {t.simulator.presetLabel}
            </span>
            <button
              onClick={() => setPreset('sunset')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                preset === 'sunset'
                  ? 'bg-[#111111] text-[#F3EEE3] font-semibold shadow-xs'
                  : 'bg-white/60 hover:bg-white text-[#111111] border border-[#111111]/10'
              }`}
            >
              {t.simulator.presets.sunset}
            </button>
            <button
              onClick={() => setPreset('cyber')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                preset === 'cyber'
                  ? 'bg-[#111111] text-[#F3EEE3] font-semibold shadow-xs'
                  : 'bg-white/60 hover:bg-white text-[#111111] border border-[#111111]/10'
              }`}
            >
              {t.simulator.presets.cyber}
            </button>
            <button
              onClick={() => setPreset('nature')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                preset === 'nature'
                  ? 'bg-[#111111] text-[#F3EEE3] font-semibold shadow-xs'
                  : 'bg-white/60 hover:bg-white text-[#111111] border border-[#111111]/10'
              }`}
            >
              {t.simulator.presets.nature}
            </button>
          </div>

          {/* Taskbar Mode Switcher (TransparentBar Core Feature) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-semibold text-[#111111]/70 mr-1 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#D9541E]" />
              {t.simulator.taskbarLabel}
            </span>
            {(['clear', 'blur', 'acrylic', 'opaque'] as TaskbarMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setTaskbarMode(mode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
                  taskbarMode === mode
                    ? 'bg-[#D9541E] text-white font-bold shadow-xs'
                    : 'bg-white/60 hover:bg-white text-[#111111] border border-[#111111]/10'
                }`}
              >
                {taskbarMode === mode && <Check className="w-3 h-3" />}
                {t.simulator.modes[mode].split(' ')[0]}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Realistic Desktop Monitor Container */}
      <div className="rounded-3xl p-2.5 sm:p-4 bg-[#111111] shadow-2xl border-4 border-[#1e1e1e] relative overflow-hidden">
        
        {/* Monitor Top Bezel / Camera */}
        <div className="flex items-center justify-between px-4 py-1.5 text-white/50 text-[11px] font-mono border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-white/40 hidden sm:inline">Windows 11 Pro 64-bit Display (1920x1080)</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Play / Pause Toggle Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-[11px] transition-colors"
              title="Toggle Render Suspend"
            >
              {isPlaying ? <Pause className="w-3 h-3 text-[#D9541E]" /> : <Play className="w-3 h-3 text-green-400" />}
              <span>{isPlaying ? t.simulator.controls.playing : t.simulator.controls.paused}</span>
            </button>

            <span className="text-[#D9541E] font-bold">
              {isPlaying ? t.simulator.controls.speed : '0 FPS (Idle)'}
            </span>
          </div>
        </div>

        {/* Desktop Viewport */}
        <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] bg-black overflow-hidden flex flex-col justify-between select-none">
          
          {/* Animated Canvas Layer (WallpaperLive) */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Desktop Overlay Content */}
          <div className="relative z-10 p-4 sm:p-6 flex-1 flex flex-col justify-between">
            
            {/* Floating App Mockup (WallpaperLive Manager) */}
            {activeWindow && (
              <div className="w-full max-w-sm bg-[#161616]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 text-white animate-fade-in">
                
                {/* Window Titlebar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-md bg-[#D9541E] flex items-center justify-center text-[10px] font-bold">
                      W
                    </div>
                    <span className="font-display text-xs font-semibold tracking-wide">
                      {t.simulator.mockWindow.title}
                    </span>
                  </div>
                  <button 
                    onClick={() => setActiveWindow(false)}
                    className="text-white/40 hover:text-white text-xs px-1.5 py-0.5 rounded hover:bg-white/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* 3x3 Thumbnail Grid Preview */}
                <div className="text-[11px] text-white/60 mb-2 font-mono flex items-center justify-between">
                  <span>Local Library (3x3 Grid)</span>
                  <span className="text-green-400 text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Direct3D Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div 
                    onClick={() => setPreset('sunset')}
                    className={`h-14 rounded-lg border flex flex-col items-center justify-center cursor-pointer transition-all ${
                      preset === 'sunset' ? 'border-[#D9541E] bg-[#D9541E]/20' : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#D9541E] mb-1"></div>
                    <span className="text-[9px] font-mono text-white/80">Sunset</span>
                  </div>

                  <div 
                    onClick={() => setPreset('cyber')}
                    className={`h-14 rounded-lg border flex flex-col items-center justify-center cursor-pointer transition-all ${
                      preset === 'cyber' ? 'border-[#D9541E] bg-[#D9541E]/20' : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-cyan-400 mb-1"></div>
                    <span className="text-[9px] font-mono text-white/80">Cyber</span>
                  </div>

                  <div 
                    onClick={() => setPreset('nature')}
                    className={`h-14 rounded-lg border flex flex-col items-center justify-center cursor-pointer transition-all ${
                      preset === 'nature' ? 'border-[#D9541E] bg-[#D9541E]/20' : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-emerald-400 mb-1"></div>
                    <span className="text-[9px] font-mono text-white/80">Aurora</span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                  <span>RAM: 18.4 MB</span>
                  <span>Rust Taskbar: Active</span>
                </div>
              </div>
            )}

            {!activeWindow && (
              <button
                onClick={() => setActiveWindow(true)}
                className="self-start px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-mono hover:bg-black/80 transition-colors flex items-center gap-1.5"
              >
                <Grid className="w-3.5 h-3.5 text-[#D9541E]" />
                <span>Buka Panel WallpaperLive</span>
              </button>
            )}

            {/* Hint Notice */}
            <div className="self-end bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-white/80 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D9541E]"></span>
              <span>Taskbar Mode: <strong className="text-white uppercase">{taskbarMode}</strong></span>
            </div>

          </div>

          {/* Windows 11 Taskbar Mockup (TransparentBar Active Area) */}
          <div className={`relative z-20 w-full h-12 flex items-center justify-between px-3 sm:px-6 transition-all duration-300 ${getTaskbarClasses()}`}>
            
            {/* Left Spacer (Windows 11 widgets) */}
            <div className="hidden sm:flex items-center gap-2 text-white/70 hover:text-white cursor-pointer">
              <span className="text-xs font-medium font-mono">⛅ 28°C Cerah</span>
            </div>

            {/* Center: Windows 11 App Icons */}
            <div className="flex items-center gap-1 sm:gap-2 mx-auto sm:mx-0">
              {/* Windows Start Button */}
              <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors group">
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <div className="bg-[#00adef] rounded-xs"></div>
                  <div className="bg-[#00adef] rounded-xs"></div>
                  <div className="bg-[#00adef] rounded-xs"></div>
                  <div className="bg-[#00adef] rounded-xs"></div>
                </div>
              </button>

              {/* Search Icon */}
              <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors">
                <Search className="w-4 h-4" />
              </button>

              {/* Explorer Icon */}
              <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors">
                <div className="w-5 h-4 bg-amber-400 rounded-xs shadow-xs flex items-center justify-center text-[8px] font-bold text-black">
                  📁
                </div>
              </button>

              {/* WallpaperLive App Icon in Taskbar */}
              <button 
                onClick={() => setActiveWindow(!activeWindow)}
                className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center transition-colors relative"
                title="WallpaperLive (Running)"
              >
                <div className="w-4 h-4 rounded bg-[#D9541E] flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                  W
                </div>
                <div className="absolute -bottom-0.5 w-1.5 h-0.5 rounded-full bg-[#D9541E]"></div>
              </button>

              {/* Terminal Icon */}
              <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors text-white/80">
                <div className="w-4 h-3.5 bg-black rounded-xs border border-white/30 flex items-center justify-center text-[8px] font-mono text-green-400">
                  &gt;_
                </div>
              </button>
            </div>

            {/* Right: Windows System Tray & Clock */}
            <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono text-white/90">
              <div className="flex items-center gap-1.5 text-white/70">
                <Wifi className="w-3.5 h-3.5" />
                <Volume2 className="w-3.5 h-3.5" />
                <BatteryCharging className="w-3.5 h-3.5" />
              </div>
              <div className="border-l border-white/20 pl-2 text-right">
                <div className="font-bold text-[11px] leading-none">{timeString}</div>
                <div className="text-[9px] text-white/60 leading-none mt-0.5 hidden sm:block">Windows 11</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Realtime Telemetry Bar */}
      <div className="mt-4 px-4 py-3 rounded-2xl bg-[#111111] text-[#F3EEE3] text-xs font-mono flex flex-wrap items-center justify-between gap-3 border border-[#111111]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
          <span className="text-white/60">Live Process:</span>
          <span className="text-[#D9541E] font-bold">WallpaperLive.exe (18.4 MB)</span>
          <span className="text-white/30">|</span>
          <span className="text-white/80">TransparentBar.exe (1.6 MB Rust Hook)</span>
        </div>
        <div className="flex items-center gap-4 text-white/60">
          <span>DWM Hook: <strong className="text-white">Active</strong></span>
          <span>GPU Direct3D: <strong className="text-green-400">Hardware Sync</strong></span>
        </div>
      </div>

    </section>
  );
};
