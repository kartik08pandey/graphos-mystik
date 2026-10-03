import React from "react";

interface IconProps {
  className?: string;
  isLight?: boolean;
}

// Top Celestial Arch with Inkwell & Feather Quill
export function CelestialQuill({ className = "w-64 h-36", isLight = false }: IconProps) {
  const goldStroke = isLight ? "#B08A2E" : "#D4AF37";
  const goldFill = isLight ? "#B08A2E" : "#D4AF37";

  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer arched orbits */}
      <path
        d="M 20,140 A 120,120 0 0 1 260,140"
        stroke={goldStroke}
        strokeWidth="1.2"
        strokeDasharray="4 3"
        opacity={isLight ? "0.7" : "0.5"}
      />
      <path
        d="M 38,140 A 102,102 0 0 1 242,140"
        stroke={goldStroke}
        strokeWidth="1.2"
        opacity={isLight ? "0.8" : "0.6"}
      />
      <path
        d="M 58,140 A 82,82 0 0 1 222,140"
        stroke={goldStroke}
        strokeWidth="1.2"
        opacity={isLight ? "0.85" : "0.7"}
      />
      <path
        d="M 78,140 A 62,62 0 0 1 202,140"
        stroke={goldStroke}
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity={isLight ? "0.6" : "0.5"}
      />
      <path
        d="M 96,140 A 44,44 0 0 1 184,140"
        stroke={goldStroke}
        strokeWidth="1"
        opacity={isLight ? "0.7" : "0.6"}
      />

      {/* Orbiting celestial bodies and nodes */}
      {/* Planet on outer left orbit */}
      <circle cx="56" cy="74" r="5" stroke={goldStroke} strokeWidth="1.2" />
      <path d="M 47,74 Q 56,71 65,74" stroke={goldStroke} strokeWidth="0.8" />

      {/* Small star / planet dot top left */}
      <circle cx="96" cy="46" r="3" stroke={goldStroke} strokeWidth="1" fill={goldFill} fillOpacity="0.4" />

      {/* Small ringed planet top right */}
      <circle cx="218" cy="80" r="4" stroke={goldStroke} strokeWidth="1" />
      <ellipse cx="218" cy="80" rx="7" ry="2" stroke={goldStroke} strokeWidth="0.8" transform="rotate(-20 218 80)" />

      {/* Center top star / node */}
      <circle cx="140" cy="22" r="2" fill={goldFill} />
      <path d="M 140,16 L 140,28 M 134,22 L 146,22" stroke={goldStroke} strokeWidth="0.8" opacity="0.6" />

      {/* Radiating fine radial ticks along the arches */}
      <line x1="140" y1="26" x2="140" y2="38" stroke={goldStroke} strokeWidth="0.8" opacity="0.5" />
      <line x1="102" y1="36" x2="108" y2="46" stroke={goldStroke} strokeWidth="0.8" opacity="0.5" />
      <line x1="178" y1="36" x2="172" y2="46" stroke={goldStroke} strokeWidth="0.8" opacity="0.5" />

      {/* Inkpot / Jar at the base */}
      <g transform="translate(125, 105)">
        {/* Inkpot Neck */}
        <rect x="7" y="0" width="16" height="5" rx="1.5" stroke={goldStroke} strokeWidth="1.2" fill={isLight ? "#FAF8F5" : "#141417"} />
        {/* Inkpot Body */}
        <path
          d="M 5,5 L 25,5 L 29,24 Q 29,26 27,26 L 3,26 Q 1,26 1,24 Z"
          stroke={goldStroke}
          strokeWidth="1.3"
          fill={isLight ? "#F3EFE8" : "#1A1A1E"}
        />
        {/* Ink level curve */}
        <path d="M 4,18 Q 15,22 26,18" stroke={goldStroke} strokeWidth="1" opacity="0.7" />
        {/* Subtle label line on inkpot */}
        <line x1="9" y1="12" x2="21" y2="12" stroke={goldStroke} strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* Feather Quill rising from the inkpot */}
      <g transform="translate(140, 110)">
        {/* Quill Shaft */}
        <path
          d="M -3,0 Q 2,-42 16,-82"
          stroke={goldStroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Quill Feather Vane Left */}
        <path
          d="M 16,-82 C 10,-72 0,-54 2,-36 C 3,-28 1,-16 -3,0"
          stroke={goldStroke}
          strokeWidth="1.2"
          fill="none"
        />
        {/* Quill Feather Vane Right */}
        <path
          d="M 16,-82 C 24,-70 28,-50 20,-34 C 15,-24 8,-12 -3,0"
          stroke={goldStroke}
          strokeWidth="1.2"
          fill="none"
        />
        {/* Feather details / barbs */}
        <line x1="12" y1="-70" x2="3" y2="-64" stroke={goldStroke} strokeWidth="0.8" opacity="0.7" />
        <line x1="14" y1="-68" x2="22" y2="-63" stroke={goldStroke} strokeWidth="0.8" opacity="0.7" />
        <line x1="9" y1="-56" x2="-1" y2="-50" stroke={goldStroke} strokeWidth="0.8" opacity="0.7" />
        <line x1="11" y1="-54" x2="19" y2="-48" stroke={goldStroke} strokeWidth="0.8" opacity="0.7" />
        <line x1="6" y1="-42" x2="1" y2="-36" stroke={goldStroke} strokeWidth="0.8" opacity="0.7" />
        <line x1="8" y1="-40" x2="17" y2="-34" stroke={goldStroke} strokeWidth="0.8" opacity="0.7" />
      </g>
    </svg>
  );
}

// Left Fountain Pen with Signature scribble
export function FountainPenLeft({ className = "w-28 h-28", isLight = false }: IconProps) {
  const gold = isLight ? "#B08A2E" : "#D4AF37";

  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Slanted Pen Body (angled ~-45 deg) */}
      <g transform="translate(18, 20)">
        {/* Cap top */}
        <rect x="70" y="2" width="10" height="14" rx="2" stroke={gold} strokeWidth="1.2" transform="rotate(40 75 9)" />
        {/* Pen Barrel */}
        <path
          d="M 72,12 L 86,24 L 46,74 L 36,64 Z"
          stroke={gold}
          strokeWidth="1.3"
          fill={isLight ? "#F5F2EB" : "#1A1A1E"}
        />
        {/* Clip */}
        <line x1="72" y1="16" x2="58" y2="33" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
        {/* Grip Section */}
        <path d="M 36,64 L 46,74 L 38,84 L 28,74 Z" stroke={gold} strokeWidth="1.2" fill={isLight ? "#EFEAE1" : "#151518"} />
        {/* Nib */}
        <path d="M 28,74 L 38,84 L 24,98 L 22,96 Z" stroke={gold} strokeWidth="1.3" fill="none" />
        {/* Nib slit */}
        <line x1="33" y1="79" x2="23" y2="97" stroke={gold} strokeWidth="0.9" />
        <circle cx="30" cy="83" r="0.9" fill={gold} />
      </g>

      {/* Cursive Signature Flourish underneath */}
      <path
        d="M 14,106 C 20,102 24,116 28,96 C 30,106 34,114 42,106 C 46,102 52,112 58,106 C 64,100 70,110 82,107"
        stroke={gold}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}

// Right Fountain Pen with Wavy Flourish
export function FountainPenRight({ className = "w-28 h-28", isLight = false }: IconProps) {
  const gold = isLight ? "#B08A2E" : "#D4AF37";

  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Pen angled down-left */}
      <g transform="translate(10, 10)">
        {/* Cap finial */}
        <path d="M 104,18 L 112,25 L 109,29 L 100,21 Z" stroke={gold} strokeWidth="1.2" />
        {/* Barrel */}
        <path
          d="M 102,23 L 64,74 L 54,66 L 92,15 Z"
          stroke={gold}
          strokeWidth="1.3"
          fill={isLight ? "#F5F2EB" : "#1A1A1E"}
        />
        {/* Clip */}
        <path d="M 96,19 L 80,40" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
        {/* Grip */}
        <path d="M 64,74 L 54,66 L 46,76 L 56,84 Z" stroke={gold} strokeWidth="1.2" fill={isLight ? "#EFEAE1" : "#151518"} />
        {/* Nib */}
        <path d="M 56,84 L 46,76 L 36,92 L 39,94 Z" stroke={gold} strokeWidth="1.3" fill="none" />
        {/* Slit */}
        <line x1="51" y1="80" x2="37" y2="93" stroke={gold} strokeWidth="0.9" />
      </g>

      {/* Flowing wavy underline stroke */}
      <path
        d="M 46,105 C 60,105 68,96 82,96 C 96,96 102,108 120,103"
        stroke={gold}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

// Card 1: Personality Profiles Icon (Head silhouette with red brain pulse)
export function PersonalityBrainIcon({ className = "w-14 h-14", isLight = false }: IconProps) {
  const gold = isLight ? "#B08A2E" : "#D4AF37";
  const crimson = isLight ? "#B82E3E" : "#E24458";

  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Head Profile Silhouette facing right */}
      <path
        d="M 18,52 L 20,44 C 20,42 22,39 22,36 C 22,34 20,33 20,30 C 19,26 19,22 22,17 C 26,11 36,10 42,14 C 47,18 48,22 47,26 C 46,28 47,29 49,30 C 50,31 51,32 50,34 C 49,35 46,36 46,38 C 46,40 48,42 47,43 C 46,44 42,45 40,46 C 39,49 39,52 38,54"
        stroke={gold}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Crimson / Red Brain Thoughts / Neural Lines */}
      <path
        d="M 28,26 C 30,22 34,22 36,25 C 38,28 42,27 43,23 M 31,31 C 34,31 36,29 38,32 C 40,34 43,32 44,30"
        stroke={crimson}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Small accent node */}
      <circle cx="36" cy="25" r="1.5" fill={crimson} />
      <circle cx="43" cy="23" r="1.5" fill={crimson} />
    </svg>
  );
}

// Card 2: Relationship Compatibility Icon (Two intertwined rings, quill wings, red heart)
export function RelationshipRingsIcon({ className = "w-14 h-14", isLight = false }: IconProps) {
  const gold = isLight ? "#B08A2E" : "#D4AF37";
  const crimson = isLight ? "#B82E3E" : "#E24458";

  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Crimson heart floating centered above */}
      <path
        d="M 32,23 C 32,23 30,20 28,20 C 26,20 24.5,21.5 24.5,23.5 C 24.5,26 28,29 32,32 C 36,29 39.5,26 39.5,23.5 C 39.5,21.5 38,20 36,20 C 34,20 32,23 32,23 Z"
        fill={crimson}
        stroke={crimson}
        strokeWidth="0.8"
      />

      {/* Left Wing / Quill */}
      <path
        d="M 24,36 C 18,32 14,24 16,18 C 19,23 21,30 25,35"
        stroke={gold}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <line x1="16" y1="21" x2="20" y2="25" stroke={gold} strokeWidth="0.8" />
      <line x1="18" y1="26" x2="23" y2="30" stroke={gold} strokeWidth="0.8" />

      {/* Right Wing / Quill */}
      <path
        d="M 40,36 C 46,32 50,24 48,18 C 45,23 43,30 39,35"
        stroke={gold}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <line x1="48" y1="21" x2="44" y2="25" stroke={gold} strokeWidth="0.8" />
      <line x1="46" y1="26" x2="41" y2="30" stroke={gold} strokeWidth="0.8" />

      {/* Two Intertwined Wedding Rings */}
      <circle cx="27" cy="42" r="9" stroke={gold} strokeWidth="1.6" />
      <circle cx="37" cy="42" r="9" stroke={gold} strokeWidth="1.6" />
      {/* Small facet highlight on left ring */}
      <ellipse cx="27" cy="35" rx="2" ry="1" fill={gold} />
    </svg>
  );
}

// Card 3: Career Guidance Icon (Compass with skyscraper skyline & crimson needle)
export function CareerCompassIcon({ className = "w-14 h-14", isLight = false }: IconProps) {
  const gold = isLight ? "#B08A2E" : "#D4AF37";
  const crimson = isLight ? "#B82E3E" : "#E24458";

  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Architectural Skyscraper Outlines (Right side) */}
      <g stroke={gold} strokeWidth="1.2" opacity="0.8">
        {/* Tall building */}
        <rect x="42" y="16" width="10" height="34" />
        <line x1="44" y1="20" x2="44" y2="46" strokeWidth="0.7" strokeDasharray="2 2" />
        <line x1="47" y1="20" x2="47" y2="46" strokeWidth="0.7" strokeDasharray="2 2" />
        <line x1="50" y1="20" x2="50" y2="46" strokeWidth="0.7" strokeDasharray="2 2" />

        {/* Medium building behind */}
        <rect x="34" y="24" width="8" height="26" />
        {/* Antennas */}
        <line x1="47" y1="16" x2="47" y2="12" strokeWidth="1" />
      </g>

      {/* Forefront Compass Dial (Left side) */}
      <g transform="translate(4, 4)">
        {/* Outer Ring */}
        <circle cx="22" cy="28" r="14" stroke={gold} strokeWidth="1.6" fill={isLight ? "#FAF7F2" : "#1A1A1E"} />
        <circle cx="22" cy="28" r="11" stroke={gold} strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Cardinal Ticks */}
        <line x1="22" y1="16" x2="22" y2="19" stroke={gold} strokeWidth="1.2" />
        <line x1="22" y1="37" x2="22" y2="40" stroke={gold} strokeWidth="1.2" />
        <line x1="10" y1="28" x2="13" y2="28" stroke={gold} strokeWidth="1.2" />
        <line x1="31" y1="28" x2="34" y2="28" stroke={gold} strokeWidth="1.2" />

        {/* Compass Needle pointing Up-Right */}
        {/* North (Crimson) Needle */}
        <polygon points="22,28 20.5,26 27,21 24,27.5" fill={crimson} stroke={crimson} strokeWidth="0.8" />
        {/* South (Gold) Needle */}
        <polygon points="22,28 23.5,30 17,35 20,28.5" fill={gold} stroke={gold} strokeWidth="0.8" />
        {/* Center Pivot */}
        <circle cx="22" cy="28" r="2" fill={isLight ? "#FAF8F5" : "#141417"} stroke={gold} strokeWidth="1" />
      </g>
    </svg>
  );
}

// Small Single Quill Feather Icon (Used above section titles)
export function QuillMiniIcon({ className = "w-6 h-6", isLight = false }: IconProps) {
  const gold = isLight ? "#B08A2E" : "#D4AF37";

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M 5,21 C 7,16 11,10 18,3 C 19.5,4.5 19.5,8 16,12 C 14,14.5 10,18 5,21 Z"
        stroke={gold}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M 5,21 L 18,3" stroke={gold} strokeWidth="1.1" />
      <path d="M 12,9 L 16,8 M 10,12 L 13,11 M 8,15 L 11,14" stroke={gold} strokeWidth="0.8" />
    </svg>
  );
}

// 4-Point Diamond Sparkle Star (Bottom right of personalized analysis card)
export function FourPointStar({ className = "w-8 h-8", isLight = false }: IconProps) {
  const color = isLight ? "#C5A059" : "#3F3D42";

  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M 16,0 C 16,8 20,12 28,14 C 20,16 16,20 16,28 C 16,20 12,16 4,14 C 12,12 16,8 16,0 Z"
        fill={color}
        opacity={isLight ? "0.35" : "0.5"}
      />
    </svg>
  );
}
