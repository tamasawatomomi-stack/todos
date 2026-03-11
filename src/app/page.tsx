"use client";

import { useState } from "react";

const INK = "#3d2b2b";
const FONT = "var(--font-zen-maru), sans-serif";

const CHARACTERS = [
  { id: 0,  emoji: "😴", title: "一生起きてこない。おねむ姫",
    description: "「あと5分」を10回繰り返し、気づいたら夕方。休日をほぼ意識不明で過ごす自堕落な眠れる森の美女。\n\n起きる気はあった。本当にあった。でも体が言うことを聞かなかっただけ、という言い訳を毎週末くり返している。「今日こそ何かする」と前日夜に誓うのに、翌朝目覚ましを止めた瞬間から記憶がない。\n\n睡眠の質だけは人類トップレベルで、枕に顔を埋めた0.3秒後には深い眠りに入る才能がある。問題は、その才能を休日のすべてに全力投球してしまうこと。何もしなかった罪悪感だけは夜にしっかり感じるのに、翌週も同じことをする。学習能力より睡眠欲が勝り続ける人生。" },
  { id: 1,  emoji: "🏠", title: "文明拒絶。引きこもり姫",
    description: "太陽の光が天敵。パジャマこそが正装、ウーバーイーツが唯一の外との接点な、お部屋の守護神。\n\n外に出る理由が見つからない。正確に言うと、外に出るメリットよりデメリット（着替え・人混み・疲れ）が常に上回っている。「今日は家にいる」と決めた日の充実度が、友人と出かけた日より高いことに、もう罪悪感を感じなくなってきた。\n\nインターネットさえあれば生きていける、という確信が年々強まっている。宅配の受け取りだけが唯一の対人コミュニケーションになっている週もある。でも「お部屋が落ち着く」と言い切れる人間は、意外と自分の軸がしっかりしているとも言える。外圧に流されない強さは本物だ。" },
  { id: 2,  emoji: "📸", title: "加工が命。映え依存姫",
    description: "注文した料理が冷めるまで撮影。中身より「見え方」に命をかける、承認欲求の魔法使い。\n\n食べに来たのか撮りに来たのか、本人にも答えられない。完璧なアングルが見つかるまで同行者を待たせることに、もはや罪悪感がない。「映えない」という理由で行き先を却下したことが、今年だけで何度あるか数えたくない。\n\nでも実はその目利き力は本物で、あなたが「ここ映える」と言ったスポットは本当に映える。審美眼と構成力は天才的で、その才能で食っている人間がいる世界線もある。問題は「いいね数」が自己評価の主軸になっていること。通知が来なかった夜の精神的ダメージが、少し大きすぎる。" },
  { id: 3,  emoji: "📚", title: "現実逃避。夢見すぎ姫",
    description: "本や映画の世界に逃げ込みがち。画面の中の王子様には詳しいけれど、リアルな人間関係は疎かなロマンチスト。\n\n現実の人間より、フィクションの登場人物の方が圧倒的に心を動かしてくる。「この主人公の気持ち、わかりすぎる」と泣きながら、自分の現実には向き合えていないことも薄々わかっている。休日のほとんどが誰かの物語の中で過ぎていく。\n\nただし、人の感情を読む能力は異常に高く、「なんかわかる」の解像度が人より数段上である。現実と理想のギャップに苦しむこともあるが、理想を高く持てること自体は才能だ。そのロマンチシズムを、たまには現実の誰かに向けてみると、人生が少しだけ動き出す。" },
  { id: 4,  emoji: "🚶", title: "徘徊が趣味。迷子姫",
    description: "目的もなくフラフラ。結局どこへ行っても散財して帰ってくる、計画性ゼロの自由人。\n\n「ちょっとそこまで」のつもりが気づいたら知らない街にいる。財布の中身が出発時より確実に減っているのに、何を買ったか覚えていない。Googleマップを開いても目的地が決まっていないので意味をなさない。\n\nでもその「なんとなく歩く」力が、思わぬ発見を連れてくることがある。誰も知らない名店、偶然出会った景色、ふらっと入った店で人生が変わる体験。計画を立てないから出会えるものが、確かにある。ただし終電だけは確認してほしい。帰れなくなった回数が、少し多い。" },
  { id: 5,  emoji: "🧹", title: "執念の除菌。潔癖姫",
    description: "休みの日まで掃除に追われる。汚れを許せないあまり、周りのズボラさにイライラしがちな、暮らしの番人。\n\n本当は旅行に行くつもりだった。でも出発前に「ここ拭いてから行こう」と思ったら、2時間が経っていた。友達の家のシンクが気になって会話に集中できないことがある。「清潔」の基準が人より数段高すぎて、世界が汚く見えがち。\n\nただし、あなたの部屋は常に完璧で、来客があるたびに「どうやったらこんなにきれいにできるの」と言われる。生活環境を整える能力は本物で、その空間があなたのメンタルを支えていることも事実だ。他人にも同じ水準を求めなければ、もう少し楽に生きられる。そこだけが惜しい。" },
  { id: 6,  emoji: "🍔", title: "底なし胃袋。もぐもぐ強欲姫",
    description: "ダイエットは明日からが口癖。映えより量と味、食べることへの執着が凄まじい食の探求者。\n\n「今日こそ食べすぎない」と誓った朝食が、気づいたら3品になっている。ランチの予約をしながら夕食のことを考えている。食べている最中に「次は何を食べようか」が頭をよぎる。\n\nでもその食への愛情と探求心は本物で、あなたのオススメは外れがない。ジャンルを問わず「美味しいもの」を嗅ぎつける鼻は異常に鋭く、行列のできる店には必ずたどり着く。「ダイエットは明日から」が永遠に続く人生でも、美味しいものを心から楽しめている時間は、確かに幸せだ。代謝のことだけ、少し考えて。" },
  { id: 7,  emoji: "💅", title: "課金で解決。メンテ依存姫",
    description: "美容代で貯金が消える。自分を磨いているようで、実は現状維持に必死な、ストイックすぎる乙女。\n\n休日のスケジュールがサロン・エステ・ネイル・皮膚科で埋まっている。「自己投資」という言葉を免罪符に、今月も美容費が予算を軽くオーバーした。「これをやめたら崩れる」という恐怖が、すべての予約をキャンセルできなくさせている。\n\nただし、その努力の成果は確実に出ている。肌も髪も爪も、同世代の平均より明らかにレベルが高い。「どうやってるの？」と聞かれたとき、答えが長くなりすぎて引かれたことが何度かあるが、それはあなたが本気の証拠だ。貯金残高とメンテ費用の戦争を、そろそろ停戦してもいいかもしれない。" },
  { id: 8,  emoji: "🎨", title: "孤独な創造主。つくり込み姫",
    description: "趣味の世界に閉じこもる。こだわりが強すぎて誰もついていけない、孤高のクリエイター。\n\n「もう少しだけ」の連続で、趣味の時間が休日全部を食い尽くす。完成に近づくほどに「ここが違う」が増えていく。納得のいくものができた瞬間の快感だけを燃料に生きているが、その瞬間はなかなか来ない。\n\n他の人には「また籠ってるの？」と思われているが、そのこだわりが生み出すクオリティは本物だ。細部まで作り込まれたあなたの世界観には、言語化できない説得力がある。「未完成でも出す」という感覚を少し学ぶと、あなたの才能がもっと多くの人に届く。完璧を求めることと、前に進むことは、同時にできる。" },
  { id: 9,  emoji: "💜", title: "全財産献上。推し事依存姫",
    description: "自分の生活より推しの年収を心配。愛が重すぎて私生活が崩壊気味な、熱狂のプリンセス。\n\n今月の推し活費を計算したら、家賃と同じだった。でも後悔はしていない。推しが幸せであれば、自分の口座残高は二の次だ。休日の予定はすべて推し関連のスケジュールを中心に組まれる。\n\nその愛の深さと熱量は、誰にも真似できない。推しに関する知識量は研究者レベルで、同志との繋がりも深い。問題は、その情熱を少しでも自分自身にも向けられるかどうか。推しが「ファンの人に幸せでいてほしい」と言っているとしたら、まず自分の生活を整えることが、最大の推し活かもしれない。" },
  { id: 10, emoji: "🌙", title: "悟りすぎ。デジタル遺棄姫",
    description: "スマホも連絡も無視。極端すぎて「生きてる？」と心配される、世捨て人一歩手前の癒やし系。\n\n休日はスマホを引き出しの奥にしまう。通知を見るのが面倒なのではなく、見たくないのである。既読がつかないまま丸一日が過ぎ、翌朝大量のメッセージを見て「ああ、そうか」となる。\n\nデジタルノイズから距離を置く判断力は、現代人として正しい。あなたが一人でいられること、静けさを楽しめることは、本当の意味での自立だ。ただし「連絡がつかない人」として友達リストで少しずつ枯れていくリスクがある。週に一度くらい「生存確認の返信」をする習慣があると、心配される回数が減る。" },
  { id: 11, emoji: "💬", title: "沈黙が怖い。構ってちゃん姫",
    description: "一人でいられない寂しがり屋。予定を詰め込みすぎて周りを巻き込み消耗させる、太陽のような存在。\n\n休日に予定がないと発狂しそうになる。「今日暇？」のLINEを送る速度が人類トップレベルで、金曜の夜には翌週の予定が全部埋まっている。一人でいる時間が長くなると、頭の中の静けさに耐えられなくなる。\n\nあなたがいると確かに場が明るくなる。その社交性と熱量は天性のものだ。でも一緒にいる側は、たまにグッタリしていることも知ってほしい。一人でいることへの恐怖と向き合えると、あなたの人間関係がもう少し軽くなる。「独りの時間」は罰ではなく、充電である。" },
];

// タイプ別出現数: 0〜7 = 各7回 / 8〜11 = 各6回 (合計80)
// 各文はキャラクター1タイプに対応。そう=2点 / わからない=1点 / そうでもない=0点
const QUESTIONS = [
  { char: 0,  text: "「あと5分」のつもりが気づいたら2時間経っている" },
  { char: 1,  text: "休日に一歩も外に出なくても全然平気" },
  { char: 2,  text: "行き先を決めるとき、映えるかどうかを最初に考える" },
  { char: 3,  text: "現実より本や映画の世界のほうが落ち着く" },
  { char: 4,  text: "気づいたら財布の中身が減っているが何に使ったか覚えていない" },
  { char: 6,  text: "ダイエットは毎週「明日から」で更新されている" },
  { char: 7,  text: "美容代は削れない固定費だと思っている" },
  { char: 9,  text: "推しの年収が自分の年収より気になる" },
  { char: 10, text: "返信が遅いと「生きてる？」と友達に心配される" },
  { char: 11, text: "一人でいると誰かに連絡したくなる" },
];



type Phase = "start" | "quiz" | "result";

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(61,43,43,0.5)", marginBottom: 5, fontFamily: FONT }}>
        <span>質問 {current} / {total}</span>
        <span>{pct}%</span>
      </div>
      <div style={{ background: "rgba(232,112,138,0.15)", borderRadius: 99, height: 7, overflow: "hidden" }}>
        <div style={{
          background: "linear-gradient(90deg, #e8708a, #f4a0b5)",
          height: "100%",
          borderRadius: 99,
          width: `${pct}%`,
          transition: "width 0.3s ease",
        }} />
      </div>
    </div>
  );
}

function ResultCard({ character }: { character: typeof CHARACTERS[number] }) {
  const shareText = `私の休日タイプは「${character.title}」でした！ #休日おひめさま診断`;
  return (
    <div style={{ fontFamily: FONT }}>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <div style={{ border: `3px double ${INK}`, padding: "5px 18px", display: "inline-block", borderRadius: 4 }}>
          <span style={{ fontSize: 12, letterSpacing: "0.2em", fontWeight: 900, color: INK }}>✦ 号外 ✦</span>
        </div>
      </div>

      <div style={{ border: `3px double ${INK}`, padding: "16px 20px", marginBottom: 14, borderRadius: 4 }}>
        <div style={{ border: `1px solid rgba(61,43,43,0.25)`, padding: "14px 16px", borderRadius: 3 }}>
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 44, marginBottom: 6 }}>{character.emoji}</div>
            <div style={{ fontSize: 11, color: "rgba(61,43,43,0.5)", marginBottom: 8 }}>あなたの休日タイプは…</div>
          </div>
          <div style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}`, padding: "10px 0", marginBottom: 12, textAlign: "center" }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: INK, lineHeight: 1.3 }}>【{character.title}】</div>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.85, color: INK }}>
            {character.description.split("\n\n").map((para, i) => (
              <p key={i} style={{ margin: i === 0 ? 0 : "10px 0 0" }}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      <div style={{ border: `1px solid rgba(61,43,43,0.3)`, padding: "12px 14px", marginBottom: 4, borderRadius: 4, background: "rgba(252,228,236,0.3)" }}>
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: INK }}>結果をシェアしよう 🎉</div>
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {[
            { label: "𝕏 でシェア", bg: "#000" },
            { label: "📘 Facebook", bg: "#1877f2" },
            { label: "📸 Instagram", bg: "#c13584" },
          ].map(({ label, bg }) => (
            <button
              key={label}
              onClick={() => {
                if (typeof navigator !== "undefined" && navigator.clipboard) {
                  navigator.clipboard.writeText(shareText);
                  alert("コピーしました！\n\n" + shareText);
                }
              }}
              style={{ fontFamily: FONT, fontSize: 10, padding: "6px 10px", background: bg, color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, borderRadius: 4 }}
            >
              {label}
            </button>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 8, fontSize: 10, color: "rgba(61,43,43,0.4)" }}>
          ボタンを押すとテキストがコピーされます
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [phase, setPhase] = useState<Phase>("start");
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<number[]>(Array(12).fill(0));
  const [selected, setSelected] = useState<string | null>(null);
  const [history, setHistory] = useState<{ char: number; points: number }[]>([]);

  const question = QUESTIONS[currentQ];

  const ANSWERS = [
    { label: "うん！",    points: 2 },
    { label: "五分五分",  points: 1 },
    { label: "そうでもない", points: 0 },
  ];

  const handleSelect = (points: number, label: string) => {
    if (selected !== null) return;
    setSelected(label);
    setTimeout(() => {
      const newScores = [...scores];
      newScores[question.char] += points;
      const newHistory = [...history, { char: question.char, points }];
      if (currentQ + 1 >= QUESTIONS.length) {
        setScores(newScores);
        setHistory(newHistory);
        setPhase("result");
      } else {
        setScores(newScores);
        setHistory(newHistory);
        setCurrentQ(currentQ + 1);
        setSelected(null);
      }
    }, 380);
  };

  const goBack = () => {
    if (currentQ === 0 || history.length === 0 || selected !== null) return;
    const prev = history[history.length - 1];
    const newScores = [...scores];
    newScores[prev.char] -= prev.points;
    setScores(newScores);
    setHistory(history.slice(0, -1));
    setCurrentQ(currentQ - 1);
  };

  const restart = () => {
    setPhase("start");
    setCurrentQ(0);
    setScores(Array(12).fill(0));
    setSelected(null);
    setHistory([]);
  };

  const resultChar = CHARACTERS[scores.indexOf(Math.max(...scores))];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10" style={{ background: "#fce4ec" }}>
      <div
        style={{
          background: "rgba(255,255,255,0.88)",
          border: "1px solid rgba(61,43,43,0.12)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05),0 10px 30px rgba(0,0,0,0.08)",
          fontFamily: FONT,
        }}
        className="rounded-xl w-full max-w-md p-8"
      >
        <div style={{ borderTop: `3px double ${INK}`, marginBottom: 10 }} />
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textAlign: "center", color: "rgba(61,43,43,0.5)", marginBottom: 6 }}>
          あなたは何姫？
        </p>
        <div style={{ borderTop: `1px solid ${INK}`, marginBottom: 16 }} />

        {phase === "start" && (
          <>
            <h1 style={{ fontSize: 22, fontWeight: 900, color: INK, marginBottom: 8, lineHeight: 1.3, textAlign: "center" }}>
              休日おひめさま診断
            </h1>
            {/* ビジュアルブロック */}
            <div style={{
              background: "linear-gradient(135deg, #b8e4f9 0%, #d4eeff 50%, #e8f7ff 100%)",
              borderRadius: 16,
              padding: "28px 20px",
              marginBottom: 20,
              position: "relative",
              overflow: "hidden",
            }}>
              {/* 背景の抽象円 */}
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "#7dd3fc", opacity: 0.25 }} />
              <div style={{ position: "absolute", bottom: -20, left: -20, width: 90, height: 90, borderRadius: "50%", background: "#a5f3fc", opacity: 0.3 }} />
              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 52, marginBottom: 10, letterSpacing: "0.05em" }}>👑</div>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#1e4a6e", letterSpacing: "0.04em", marginBottom: 6 }}>
                  休日おひめさま診断
                </div>
                <div style={{ fontSize: 11, color: "rgba(30,74,110,0.55)", letterSpacing: "0.14em" }}>
                  辛口Ver. · 全12タイプ
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(61,43,43,0.6)", textAlign: "center", marginBottom: 20, lineHeight: 1.8 }}>
              全10問の文章に「そう／わからない／そうでもない」で答えて、<br />あなたの休日タイプを診断しよう！
            </p>
            <button
              onClick={() => setPhase("quiz")}
              className="w-full py-3 font-bold hover:opacity-85 active:scale-95 transition-all"
              style={{ fontFamily: FONT, fontSize: 15, background: "#e8708a", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", letterSpacing: "0.05em" }}
            >
              ✨ 診断スタート
            </button>
          </>
        )}

        {phase === "quiz" && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <button
                onClick={goBack}
                disabled={currentQ === 0 || selected !== null}
                className="active:scale-95 transition-all"
                style={{
                  fontFamily: FONT,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "7px 14px",
                  background: currentQ === 0 ? "rgba(61,43,43,0.06)" : "#fff0f4",
                  color: currentQ === 0 ? "rgba(61,43,43,0.25)" : "#e8708a",
                  border: `1.5px solid ${currentQ === 0 ? "rgba(61,43,43,0.1)" : "#e8708a"}`,
                  borderRadius: 8,
                  cursor: currentQ === 0 || selected !== null ? "default" : "pointer",
                  flexShrink: 0,
                }}
              >
                ← 戻る
              </button>
              <div style={{ flex: 1 }}>
                <ProgressBar current={currentQ + 1} total={QUESTIONS.length} />
              </div>
            </div>
            {/* 質問文 */}
            <div style={{
              background: "rgba(252,228,236,0.3)",
              border: `1.5px solid rgba(232,112,138,0.25)`,
              borderRadius: 12,
              padding: "20px 18px",
              marginBottom: 20,
              textAlign: "center",
            }}>
              <p style={{ fontSize: 17, fontWeight: 700, color: INK, lineHeight: 1.75, margin: 0 }}>
                {question.text}
              </p>
            </div>
            {/* 3択ボタン */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ANSWERS.map(({ label, points }) => {
                const isSelected = selected === label;
                const colors: Record<string, { bg: string; border: string; color: string; idleBg: string; idleColor: string; idleBorder: string }> = {
                  "うん！":      { bg: "#e8708a", border: "#e8708a",  color: "#fff", idleBg: "#fff0f4",  idleColor: "#e8708a",             idleBorder: "#e8708a" },
                  "五分五分":    { bg: "#f5f0eb", border: "rgba(61,43,43,0.25)", color: INK, idleBg: "#f5f0eb", idleColor: INK,             idleBorder: "rgba(61,43,43,0.25)" },
                  "そうでもない":{ bg: "#a7f3d0", border: "#34d399",  color: "#065f46", idleBg: "#ecfdf5", idleColor: "#059669",           idleBorder: "#6ee7b7" },
                };
                const c = colors[label];
                return (
                  <button
                    key={label}
                    onClick={() => handleSelect(points, label)}
                    disabled={selected !== null}
                    className="active:scale-95 transition-all"
                    style={{
                      fontFamily: FONT,
                      fontSize: 15,
                      fontWeight: 700,
                      padding: "14px",
                      background: isSelected ? c.bg : c.idleBg,
                      color: isSelected ? c.color : c.idleColor,
                      border: `1.5px solid ${isSelected ? c.border : c.idleBorder}`,
                      borderRadius: 10,
                      cursor: selected !== null ? "default" : "pointer",
                      transition: "all 0.2s ease",
                      opacity: selected !== null && !isSelected ? 0.4 : 1,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {phase === "result" && (
          <>
            <ResultCard character={resultChar} />

            {/* 他のタイプ一覧 */}
            <div style={{ marginTop: 16, marginBottom: 4 }}>
              <div style={{ fontSize: 11, color: "rgba(61,43,43,0.5)", textAlign: "center", letterSpacing: "0.12em", marginBottom: 10 }}>
                ✦ 他のタイプ一覧 ✦
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {CHARACTERS.map((c) => (
                  <div key={c.id} style={{
                    display: "flex", alignItems: "center", gap: 6,
                    padding: "7px 10px", borderRadius: 8, fontSize: 11, color: INK,
                    background: c.id === resultChar.id ? "#fff0f4" : "rgba(61,43,43,0.03)",
                    border: `1.5px solid ${c.id === resultChar.id ? "#e8708a" : "rgba(61,43,43,0.1)"}`,
                    fontWeight: c.id === resultChar.id ? 900 : 500,
                  }}>
                    <span style={{ fontSize: 15, flexShrink: 0 }}>{c.emoji}</span>
                    <span style={{ lineHeight: 1.3 }}>{c.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={restart}
              className="w-full py-2.5 hover:opacity-75 active:scale-95 transition-all"
              style={{ fontFamily: FONT, fontSize: 13, background: "transparent", color: INK, border: `1.5px solid rgba(61,43,43,0.3)`, borderRadius: 8, cursor: "pointer", marginTop: 6 }}
            >
              ↩ もう一度診断する
            </button>
          </>
        )}

        <div style={{ borderTop: `3px double ${INK}`, marginTop: 18 }} />
      </div>
    </div>
  );
}
