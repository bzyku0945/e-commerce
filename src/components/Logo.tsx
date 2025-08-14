export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 160"
      role="img"
      aria-labelledby="title desc"
      width="240"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="title">HES Weights — Logo</title>
      <desc id="desc">
        Minimalistyczne logo: sztanga z zawieszoną metką zakupową + napis HES
        Weights.
      </desc>
      <defs>
        <linearGradient id="accentGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee"></stop>
          <stop offset="100%" stopColor="#0ea5e9"></stop>
        </linearGradient>
        <style>
          {`
            :root {
              --ink:#0f172a;        
              --muted:#94a3b8;     
              --accent:#22d3ee;     
            }
            .word { font: 700 44px "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; fill: var(--ink); letter-spacing: .5px;}
            .sub  { font: 500 24px "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; fill: var(--muted); letter-spacing: .8px;}
            .stroke { stroke: var(--ink); stroke-width: 10; stroke-linecap: round; stroke-linejoin: round; fill: none;}
          `}
        </style>
      </defs>

      {/* Ikona: sztanga + metka zakupowa (e‑commerce) */}
      <g transform="translate(30,30)">
        {/* gryf */}
        <line className="stroke" x1="20" y1="50" x2="220" y2="50"></line>
        {/* talerze lewa */}
        <rect
          className="stroke"
          x="0"
          y="30"
          width="16"
          height="40"
          rx="6"
        ></rect>
        <rect
          className="stroke"
          x="18"
          y="22"
          width="12"
          height="56"
          rx="6"
        ></rect>
        {/* talerze prawa */}
        <rect
          className="stroke"
          x="224"
          y="22"
          width="12"
          height="56"
          rx="6"
        ></rect>
        <rect
          className="stroke"
          x="238"
          y="30"
          width="16"
          height="40"
          rx="6"
        ></rect>

        <path className="stroke" d="M140,50 C140,72 118,68 118,86"></path>
        <g transform="translate(98,86) rotate(-18)">
          <path
            d="M0,0 L46,0 C49,0 52,3 52,6 L52,34 C52,37 49,40 46,40 L20,40 L0,20 Z"
            fill="url(#accentGrad)"
          ></path>
          <circle cx="42" cy="10" r="4.5" fill="white" opacity="0.9"></circle>
        </g>
      </g>

      <g transform="translate(310,62)">
        <text className="word">HES Weights</text>
        <text className="sub" y="40">
          gym • shop • analytics
        </text>
      </g>
    </svg>
  );
};
