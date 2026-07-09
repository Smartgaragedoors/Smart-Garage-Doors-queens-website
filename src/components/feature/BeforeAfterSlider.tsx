/**
 * BeforeAfterSlider
 * ------------------
 * Draggable before/after image comparison slider. Reusable — accepts any
 * two images. Not wired into any page yet; drop it in once real
 * before/after photo pairs (same door, same angle, before + after a job)
 * exist in src/data/cloudflareImages.ts or /public/images/jobs/.
 *
 * Usage (once real photo pairs exist):
 *
 *   import BeforeAfterSlider from '../feature/BeforeAfterSlider';
 *
 *   <BeforeAfterSlider
 *     beforeImage="/images/jobs/example-before.jpg"
 *     afterImage="/images/jobs/example-after.jpg"
 *     beforeAlt="Damaged garage door panel before repair, Queens NY"
 *     afterAlt="Repaired garage door panel after same-day service, Queens NY"
 *   />
 *
 * Optional props: beforeLabel/afterLabel (default "Before"/"After"),
 * className, initialPosition (0-100, default 50).
 */
import { useState, useRef, useCallback, useEffect, useId } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** starting divider position as a percent (0-100), default 50 */
  initialPosition?: number;
  className?: string;
}

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel = 'Before',
  afterLabel = 'After',
  initialPosition = 50,
  className = '',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const sliderId = useId();

  const clamp = (n: number) => Math.min(100, Math.max(0, n));

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(pct));
  }, []);

  // Pointer events cover mouse + touch + pen in one API
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  }, [setFromClientX]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  }, [setFromClientX]);

  const stopDragging = useCallback(() => {
    draggingRef.current = false;
  }, []);

  // Keyboard support on the handle: Left/Right/Home/End
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => clamp(p - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => clamp(p + step));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(100);
    }
  }, []);

  // Safety net: if a pointerup happens outside the handle/container
  useEffect(() => {
    const onUp = () => stopDragging();
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [stopDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[4/3] select-none overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-gray-100 touch-none ${className}`}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
    >
      {/* After image — full width, base layer */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* Before image — clipped to the current divider position via clip-path,
          so it stays pixel-aligned with the after image at any container size */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <span className="absolute left-3 top-3 rounded-md bg-blue-900/80 px-2.5 py-1 text-xs font-semibold text-white pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 rounded-md bg-blue-900/80 px-2.5 py-1 text-xs font-semibold text-white pointer-events-none">
        {afterLabel}
      </span>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_4px_rgba(0,0,0,0.4)] pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Draggable handle */}
      <div
        role="slider"
        id={sliderId}
        tabIndex={0}
        aria-label={`Comparison slider between ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()} photo`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`${Math.round(position)}% ${beforeLabel.toLowerCase()}`}
        className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-orange-500 bg-white text-orange-500 shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        style={{ left: `${position}%` }}
        onPointerDown={handlePointerDown}
        onKeyDown={handleKeyDown}
      >
        <i className="ri-arrow-left-right-line text-lg" aria-hidden="true" />
      </div>
    </div>
  );
}

export default BeforeAfterSlider;
