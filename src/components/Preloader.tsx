import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const finish = () => {
    setVisible(false);
    onComplete?.();
  };

  useEffect(() => {
    // Fallback timer: dismisses after 2.4 seconds if video event does not fire
    const fallbackTimer = setTimeout(finish, 2400);
    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Centered Video without any text or bars */}
          <div className="relative flex items-center justify-center w-full h-full max-w-sm max-h-[80vh] px-4">
            <video
              ref={videoRef}
              src="/loader.mp4"
              autoPlay
              muted
              playsInline
              onEnded={finish}
              className="w-full h-full object-contain pointer-events-none select-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}