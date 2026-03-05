"use client";

import { useState } from "react";

const P1 =
  "Le bruit des vagues se perd dans le lointain, tandis que la lumière du matin effleure " +
  "les toits de la vieille ville. Les habitants s'éveillent lentement, portés par le souffle " +
  "d'une brise légère venue de la mer. Dans les ruelles pavées, les marchands installent " +
  "leurs étals avec une précision méticuleuse, comme si chaque geste participait d'un ballet " +
  "silencieux et immuable. La place centrale s'anime peu à peu, réunissant dans un même élan " +
  "les artisans, les passants et les curieux venus chercher l'inspiration au fil des heures. ";

const P2 =
  "Les conversations s'élèvent, mêlant récits du passé et espoirs pour l'avenir, tissant ainsi " +
  "la trame vivante d'une communauté profondément attachée à ses racines culturelles et artistiques. " +
  "Au loin, les cloches de l'église sonnent l'heure, rappelant à chacun que le temps s'écoule " +
  "inexorablement, porteur à la fois de promesses lumineuses et d'une douce mélancolie. ";

const P3 =
  "Les enfants courent dans les jardins fleuris, indifférents aux préoccupations des adultes, " +
  "libres dans leur insouciance naturelle et délicieuse. La vie, dans toute sa complexité et " +
  "sa beauté fragile, continue de se déployer sous le regard attentif de ceux qui savent " +
  "observer le monde avec patience, gratitude et une sensibilité à fleur de peau. ";

const P4 =
  "L'exposition inaugurale de la saison révèle des œuvres d'une rare intensité, mêlant " +
  "tradition et modernité dans un dialogue subtil et profondément humain. Les critiques " +
  "saluent unanimement la cohérence du propos et l'audace des choix esthétiques retenus. " +
  "La lumière joue un rôle central dans chaque composition, guidant le regard du spectateur " +
  "vers des espaces insoupçonnés, chargés de sens et de poésie silencieuse. ";

const LONG = Array(4).fill(P1 + P2 + P3 + P4).join(" ");

const AW = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/400px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",                                                              cap: "Claude Monet — Nymphéas, 1906" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/400px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",                                                                  cap: "Vincent van Gogh — La Nuit étoilée, 1889" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/400px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",                                      cap: "Eugène Delacroix — La Liberté guidant le peuple, 1830" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Le_D%C3%A9jeuner_sur_l%27Herbe_-_Google_Art_Project.jpg/400px-Edouard_Manet_-_Le_D%C3%A9jeuner_sur_l%27Herbe_-_Google_Art_Project.jpg",                  cap: "Édouard Manet — Le Déjeuner sur l'herbe, 1863" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/400px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",                                                        cap: "Pierre-Auguste Renoir — Bal du moulin de la Galette, 1876" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Seurat-A-Sunday-on-La-Grande-Jatte%2C-1884.jpg/400px-Seurat-A-Sunday-on-La-Grande-Jatte%2C-1884.jpg",                                                                    cap: "Georges Seurat — Un dimanche à la Grande Jatte, 1886" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Paul_C%C3%A9zanne_-_The_Large_Bathers_%28Philadelphia%29.jpg/400px-Paul_C%C3%A9zanne_-_The_Large_Bathers_%28Philadelphia%29.jpg",                                        cap: "Paul Cézanne — Les Grandes Baigneuses, 1906" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Toulouse-Lautrec_-_At_the_Moulin_Rouge%2C_1892-95.jpg/400px-Toulouse-Lautrec_-_At_the_Moulin_Rouge%2C_1892-95.jpg",                                                      cap: "Henri de Toulouse-Lautrec — Au Moulin Rouge, 1892" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/400px-Monet_-_Impression%2C_Sunrise.jpg",                                                                                              cap: "Claude Monet — Impression, soleil levant, 1872" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_and_Japanese_Bridge_%281897-1899%29.jpg/400px-Claude_Monet_-_Water_Lilies_and_Japanese_Bridge_%281897-1899%29.jpg",                          cap: "Claude Monet — Le Pont japonais, 1899" },
];

const INK = "#18140e";
const sep: React.CSSProperties = { borderRight: `1px solid rgba(24,20,14,0.20)` };

const col = (x?: React.CSSProperties): React.CSSProperties => ({
  fontSize: 9.5, lineHeight: 1.62, textAlign: "justify",
  hyphens: "auto" as const, color: INK, paddingRight: 12, ...sep, ...x,
});

const hed = (size: number, x?: React.CSSProperties): React.CSSProperties => ({
  fontWeight: 800, fontSize: size, lineHeight: 1.15,
  letterSpacing: "-0.01em", color: INK, marginBottom: 4, ...x,
});

function Hr({ thick, style }: { thick?: boolean; style?: React.CSSProperties }) {
  return <div style={{ borderTop: thick ? `2px solid ${INK}` : `1px solid rgba(24,20,14,0.35)`, margin: thick ? "4px 0" : "3px 0", ...style }} />;
}

function Img({ i, style, maxH }: { i: number; style?: React.CSSProperties; maxH?: number }) {
  const hide = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = "none";
    if (e.currentTarget.parentElement) e.currentTarget.parentElement.style.display = "none";
  };
  return (
    <figure style={{ margin: 0, ...style }}>
      <img
        src={AW[i].src} alt={AW[i].cap} onError={hide}
        style={{ width: "100%", display: "block", filter: "grayscale(20%) contrast(1.05)",
          ...(maxH ? { maxHeight: maxH, objectFit: "cover" as const } : {}) }}
      />
      <figcaption style={{ fontSize: 7.5, fontStyle: "italic", color: INK, marginTop: 2, lineHeight: 1.3 }}>
        {AW[i].cap}
      </figcaption>
    </figure>
  );
}

function Newspaper() {
  return (
    // gridTemplateRows でビューポートを 4 帯に分割 → 全10枚が画面内に収まる
    <div style={{
      position: "absolute", inset: 0,
      display: "grid",
      gridTemplateRows: "auto 1fr 1fr 1fr",
      padding: "18px 28px 0",
      userSelect: "none", pointerEvents: "none", overflow: "hidden",
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
      gap: "0",
    }}>

      {/* ── 帯0 (auto) : Masthead + 5 colonnes texte ── */}
      <div>
        <div style={{ textAlign: "center", marginBottom: 3 }}>
          <div style={{ fontSize: 8, letterSpacing: "0.28em", color: INK, marginBottom: 2 }}>
            FONDÉE EN 1842 · JOURNAL DES ARTS, DES LETTRES ET DES SCIENCES
          </div>
          <Hr />
          <div style={{ fontSize: 50, fontWeight: 900, lineHeight: 1, margin: "2px 0", color: INK }}>
            La Gazette des Arts
          </div>
          <Hr />
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", fontSize: 8.5, color: INK, letterSpacing: "0.06em", margin: "2px 0" }}>
            <span>VOL. CLXXII · N° 52 · 3,50 €</span>
            <span style={{ fontStyle: "italic", fontSize: 9 }}>« L'art est le mensonge qui dit la vérité »</span>
            <span style={{ textAlign: "right" }}>SAMEDI, 5 MARS 2026</span>
          </div>
          <Hr thick />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "0 12px" }}>
          {([
            ["Marchés : L'Europe Retrouve son Élan",     P1.slice(0, 200)],
            ["Diplomatie et Nouveaux Équilibres",         P2.slice(0, 190)],
            ["Sciences : Découverte Majeure à Lyon",      P3.slice(0, 195)],
            ["Littérature : Le Prix Renaudot Décerné",    P4.slice(0, 190)],
            ["Musique : Saison Exceptionnelle à l'Opéra", P1.slice(80, 260)],
          ] as [string,string][]).map(([t, p], i) => (
            <div key={i} style={col(i === 4 ? { borderRight: "none", paddingRight: 0 } : {})}>
              <p style={hed(10.5)}>{t}</p>
              <p>{p}</p>
            </div>
          ))}
        </div>
        <Hr thick style={{ margin: "5px 0 0" }} />
      </div>

      {/* ── 帯1 (1fr) : 画像4枚 — [IMG+IMG] | manchette | [IMG+IMG] ── */}
      <div style={{ display: "grid", gridTemplateColumns: "172px 1fr 172px", gap: "0 14px", overflow: "hidden", paddingTop: 6 }}>

        {/* 左列: Monet + Impression soleil levant */}
        <div style={{ ...sep, paddingRight: 12 }}>
          <Img i={0} style={{ marginBottom: 4 }} />
          <p style={{ fontSize: 9, lineHeight: 1.55, textAlign: "justify", color: INK, marginBottom: 5 }}>
            {P1.slice(0, 130)}
          </p>
          <Img i={8} />
        </div>

        {/* Centre: grande manchette */}
        <div style={{ textAlign: "center", padding: "0 6px", ...sep }}>
          <p style={{ fontSize: 8, letterSpacing: "0.2em", color: INK, marginBottom: 3 }}>ARTS &amp; CULTURE · ÉDITION SPÉCIALE</p>
          <p style={hed(24, { textAlign: "center", lineHeight: 1.1, marginBottom: 6 })}>
            Le Gouvernement Dévoile un Grand Plan pour la Renaissance Culturelle et Artistique de la Nation
          </p>
          <Hr />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 12px", marginTop: 5, textAlign: "left" }}>
            <p style={col()}>{P2}</p>
            <div style={col()}>
              <blockquote style={{ borderLeft: `3px solid ${INK}`, paddingLeft: 7, marginBottom: 5, fontSize: 11.5, fontStyle: "italic", lineHeight: 1.4, color: INK }}>
                « La culture est l'âme d'une nation, son souffle le plus profond et le plus durable. »
              </blockquote>
              <p style={{ fontSize: 9.5 }}>{P3.slice(0, 180)}</p>
            </div>
            <p style={col({ borderRight: "none", paddingRight: 0 })}>{P4}</p>
          </div>
        </div>

        {/* 右列: Van Gogh + Pont japonais */}
        <div style={{ borderLeft: `1px solid rgba(24,20,14,0.20)`, paddingLeft: 14 }}>
          <Img i={1} style={{ marginBottom: 4 }} />
          <p style={{ fontSize: 9, lineHeight: 1.55, textAlign: "justify", color: INK, marginBottom: 5 }}>
            {P2.slice(0, 125)}
          </p>
          <Img i={9} />
        </div>
      </div>

      {/* ── 帯2 (1fr) : 画像4枚 — 4 colonnes égales ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0 12px", overflow: "hidden",
        borderTop: `2px solid ${INK}`, paddingTop: 6, marginTop: 4 }}>

        <div style={col()}>
          <p style={hed(11)}>Conseil Municipal : Débat sur le Patrimoine</p>
          <Img i={2} style={{ margin: "4px 0" }} maxH={130} />
          <p>{LONG.slice(0, 280)}</p>
        </div>

        <div style={col()}>
          <p style={hed(11)}>Opéra : Aperçu de la Nouvelle Saison</p>
          <Img i={3} style={{ margin: "4px 0" }} maxH={130} />
          <p>{LONG.slice(100, 360)}</p>
        </div>

        <div style={col()}>
          <p style={hed(11)}>Impressionnisme : Le Centenaire de Renoir</p>
          <Img i={4} style={{ margin: "4px 0" }} maxH={130} />
          <p>{LONG.slice(200, 460)}</p>
        </div>

        <div style={col({ borderRight: "none", paddingRight: 0 })}>
          <p style={hed(11)}>Pointillisme et Vision Moderne</p>
          <Img i={5} style={{ margin: "4px 0" }} maxH={130} />
          <p>{LONG.slice(300, 540)}</p>
        </div>
      </div>

      {/* ── 帯3 (1fr) : 画像2枚 + 4 colonnes texte ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gap: "0 10px", overflow: "hidden",
        borderTop: `2px solid ${INK}`, paddingTop: 6, marginTop: 4 }}>

        <div style={col()}>
          <p style={hed(10)}>Cézanne et la Naissance du Cubisme</p>
          <Img i={6} style={{ margin: "3px 0" }} maxH={110} />
          <p>{LONG.slice(0, 200)}</p>
        </div>

        <div style={col()}>
          <p style={hed(10)}>La Nuit Parisienne selon Lautrec</p>
          <p style={{ marginBottom: 3 }}>{LONG.slice(80, 200)}</p>
          <Img i={7} style={{ margin: "3px 0" }} maxH={110} />
        </div>

        {([
          ["Théâtre : La Comédie-Française",         LONG.slice(160, 360)],
          ["Mode : Paris Capitale de la Couture",     LONG.slice(240, 440)],
          ["Gastronomie : Les Étoiles Michelin",      LONG.slice(320, 520)],
          ["Philosophie : Colloque à la Sorbonne",    LONG.slice(400, 600)],
        ] as [string,string][]).map(([t, p], i) => (
          <div key={i} style={col(i === 3 ? { borderRight: "none", paddingRight: 0 } : {})}>
            <p style={hed(10, { marginBottom: 3 })}>{t}</p>
            <p>{p}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks([...tasks, trimmed]);
    setInput("");
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="newspaper-bg min-h-screen overflow-hidden" style={{ position: "relative" }}>
      <Newspaper />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(180,174,162,0.30) 0%,transparent 55%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10 }} className="min-h-screen flex items-center justify-center px-4">
        <div style={{
          background: "rgba(245,241,233,0.93)",
          backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
          border: "1px solid rgba(24,20,14,0.12)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.08),0 8px 28px rgba(0,0,0,0.12),0 28px 72px rgba(0,0,0,0.10)",
        }} className="rounded-sm w-full max-w-md p-8">
          <div style={{ borderTop: `3px double ${INK}`, marginBottom: 10 }} />
          <p style={{ fontFamily: "Georgia,serif", fontSize: 9, letterSpacing: "0.22em", textAlign: "center", color: INK, marginBottom: 6, textTransform: "uppercase" as const }}>
            Annonces Personnelles
          </p>
          <div style={{ borderTop: `1px solid ${INK}`, marginBottom: 14 }} />
          <h1 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 21, fontWeight: 700, color: INK, marginBottom: 18, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            YUKI&apos;s To Do App
          </h1>
          <div className="flex gap-2 mb-5">
            <input type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              placeholder="Ajouter une tâche..."
              className="todo-input flex-1 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black/20"
              style={{ fontFamily: "Georgia,serif", background: "rgba(240,235,225,0.8)", border: `1px solid rgba(24,20,14,0.22)`, color: INK, borderRadius: 2 }}
            />
            <button onClick={addTask}
              className="px-4 py-2 text-sm font-medium hover:opacity-75 active:scale-95 transition-all"
              style={{ fontFamily: "Georgia,serif", background: INK, color: "#f0ebe1", border: "none", borderRadius: 2 }}>
              Ajouter
            </button>
          </div>
          {tasks.length === 0
            ? <p style={{ fontFamily: "Georgia,serif", fontStyle: "italic", color: "rgba(24,20,14,0.38)", fontSize: 13, textAlign: "center", padding: "8px 0" }}>
                Aucune tâche pour l&apos;instant.
              </p>
            : <ul style={{ borderTop: `1px solid rgba(24,20,14,0.14)` }}>
                {tasks.map((task, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid rgba(24,20,14,0.10)`, padding: "9px 0", fontFamily: "Georgia,serif", fontSize: 13, color: INK }}>
                    <span>{task}</span>
                    <button onClick={() => removeTask(i)} className="ml-4 text-base leading-none hover:text-red-500 transition-colors" style={{ color: "rgba(24,20,14,0.30)" }}>×</button>
                  </li>
                ))}
              </ul>
          }
          <div style={{ borderTop: `3px double ${INK}`, marginTop: 18 }} />
        </div>
      </div>
    </div>
  );
}
