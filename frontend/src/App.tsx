import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Compass, Map as MapIcon, Satellite } from "lucide-react";

import Landing from "./sections/Landing";
import SolarSystemMap from "./sections/SolarSystemMap";
import Exploration from "./sections/Exploration";

import EarthDetail from "./sections/EarthDetail";
import MarsDetail from "./sections/MarsDetail";
import VenusDetail from "./sections/VenusDetail";
import JupiterDetail from "./sections/JupiterDetail";
import SaturnDetail from "./sections/SaturnDetail";

import "./theme.css";

/* -------------------------
   TYPES
-------------------------- */

type LayerKey =
  | "orientation"
  | "system-map"
  | "details"
  | "exploration";

type CelestialBody = {
  id: string;
  name: string;
  color: string;
  orbit: number;
  size: number;
  hasDetails?: boolean;
};

/* -------------------------
   GLOBAL DATA
-------------------------- */

const LAYERS: Record<string, LayerKey> = {
  ORIENTATION: "orientation",
  SYSTEM_MAP: "system-map",
  DETAILS: "details",
  EXPLORATION: "exploration",
};

const CELESTIAL_DATA: CelestialBody[] = [
  { id: "sun", name: "Sun", color: "#f5c07a", orbit: 0, size: 44 },
  { id: "mercury", name: "Mercury", color: "#a1a6b3", orbit: 100, size: 8 },
  { id: "venus", name: "Venus", color: "#e6e8ee", orbit: 140, size: 12, hasDetails: true },
  {
    id: "earth",
    name: "Earth",
    color: "#7aa2ff",
    orbit: 190,
    size: 14,
    hasDetails: true,
  },
  {
    id: "mars",
    name: "Mars",
    color: "#E27B58",
    orbit: 240,
    size: 10,
    hasDetails: true,
  },
  {
    id: "jupiter",
    name: "Jupiter",
    color: "#D39C7E",
    orbit: 320,
    size: 28,
    hasDetails: true,
  },
  {
    id: "saturn",
    name: "Saturn",
    color: "#e6e8ee",
    orbit: 380,
    size: 24,
    hasDetails: true,
  },
];

/* -------------------------
   GLOBAL UI ATOMS
-------------------------- */

const BackgroundStars: React.FC = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#07090f]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#11131a_0%,_#07090f_100%)] opacity-80" />
    {[...Array(80)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-40"
        style={{
          width: "1px",
          height: "1px",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

type NavigationRailProps = {
  currentLayer: LayerKey;
  setLayer: React.Dispatch<React.SetStateAction<LayerKey>>;
};

const NavigationRail: React.FC<NavigationRailProps> = ({
  currentLayer,
  setLayer,
}) => (
  <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
    {[
      { id: LAYERS.ORIENTATION, icon: Compass, label: "Orientation" },
      { id: LAYERS.SYSTEM_MAP, icon: MapIcon, label: "Atlas Map" },
      { id: LAYERS.EXPLORATION, icon: Satellite, label: "Human Exploration" },
    ].map((item) => (
      <button
        key={item.id}
        onClick={() => setLayer(item.id)}
        className={`group relative p-3 rounded-full transition-all border ${
          currentLayer === item.id
            ? "bg-[#e6e8ee] text-[#07090f] border-[#e6e8ee] shadow-[0_0_20px_rgba(230,232,238,0.2)]"
            : "text-[#a1a6b3] border-white/5 hover:border-[#a1a6b3] hover:text-[#e6e8ee]"
        }`}
      >
        <item.icon size={18} strokeWidth={1.5} />
        <span className="absolute left-full ml-4 px-3 py-1 bg-[#e6e8ee] text-[#07090f] text-[9px] font-mono font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {item.label}
        </span>
      </button>
    ))}
  </nav>
);

/* -------------------------
   MAIN APP
-------------------------- */

export default function App(): JSX.Element {
  const [activeLayer, setActiveLayer] = useState<LayerKey>(LAYERS.ORIENTATION);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  const handlePlanetSelection = (id: string): void => {
    setSelectedPlanet(id);
    setActiveLayer(LAYERS.DETAILS);
  };

  const renderDetailLayer = (): JSX.Element => {
    switch (selectedPlanet) {
      case "mars":
        return <MarsDetail onBack={() => setActiveLayer(LAYERS.SYSTEM_MAP)} />;
      case "venus":
        return <VenusDetail onBack={() => setActiveLayer(LAYERS.SYSTEM_MAP)} />;
      case "jupiter":
        return <JupiterDetail onBack={() => setActiveLayer(LAYERS.SYSTEM_MAP)} />;
      case "saturn":
        return <SaturnDetail onBack={() => setActiveLayer(LAYERS.SYSTEM_MAP)} />;
      case "earth":
      default:
        return <EarthDetail onBack={() => setActiveLayer(LAYERS.SYSTEM_MAP)} />;
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#07090f] text-[#e6e8ee] font-sans antialiased overflow-hidden">
      <BackgroundStars />
      <NavigationRail currentLayer={activeLayer} setLayer={setActiveLayer} />

      <main className="w-full h-full">
        <AnimatePresence mode="wait">
          {activeLayer === LAYERS.ORIENTATION && (
            <Landing onExplore={() => setActiveLayer(LAYERS.SYSTEM_MAP)} />
          )}

          {activeLayer === LAYERS.SYSTEM_MAP && (
            <SolarSystemMap
              celestialData={CELESTIAL_DATA}
              onSelectPlanet={handlePlanetSelection}
            />
          )}

          {activeLayer === LAYERS.DETAILS && renderDetailLayer()}

          {activeLayer === LAYERS.EXPLORATION && <Exploration />}
        </AnimatePresence>
      </main>
    </div>
  );
}
