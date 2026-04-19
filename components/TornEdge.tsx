type TornEdgeProps = {
  /** Цвет заливки волны (совпадает с секцией ниже разрыва) */
  fill: string;
  /** Переворот: волна «кусает» верх следующей секции */
  flip?: boolean;
  className?: string;
};

/**
 * Разделитель «рваная бумага» — SVG с волнистой кромкой.
 */
export function TornEdge({ fill, flip, className = "" }: TornEdgeProps) {
  return (
    <div
      className={`relative h-6 w-full shrink-0 overflow-hidden md:h-8 ${className}`}
      aria-hidden
    >
      <svg
        className={`absolute left-0 h-full w-[120%] ${flip ? "top-0 rotate-180" : "bottom-0"}`}
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
      >
        <path
          d="M0,16 C80,28 160,4 240,16 C320,28 400,4 480,16 C560,28 640,4 720,16 C800,28 880,4 960,16 C1040,28 1120,4 1200,16 L1200,32 L0,32 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
