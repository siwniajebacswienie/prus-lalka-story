import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ChangeEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Bolesław Prus i „Lalka” — strona informacyjna' },
      {
        name: "description",
        content:
          'Strona o Bolesławie Prusie i jego powieści „Lalka”: biografia, twórczość i informacje.',
      },
    ],
  }),
  component: PrusSite,
});

type TabId = "info" | "biografia" | "tworczosc" | "omnie";

const TABS: { id: TabId; label: string }[] = [
  { id: "info", label: "Informacje" },
  { id: "biografia", label: "Biografia B. Prusa" },
  { id: "tworczosc", label: "Twórczość B. Prusa" },
  { id: "omnie", label: "O mnie" },
];

function useLocalStorage(key: string, initial = "") {
  const [value, setValue] = useState<string>(() => {
    if (typeof window === "undefined") return initial;
    return window.localStorage.getItem(key) ?? initial;
  });
  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue] as const;
}

function EditableText({
  storageKey,
  placeholder,
  minHeight = 160,
}: {
  storageKey: string;
  placeholder: string;
  minHeight?: number;
}) {
  const [value, setValue] = useLocalStorage(storageKey);
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-md border border-[var(--prus-border)] bg-white p-4 text-[15px] leading-relaxed text-[var(--prus-text)] outline-none transition focus:border-[var(--prus-accent)] focus:ring-2 focus:ring-[var(--prus-accent)]/20"
      style={{ minHeight, fontFamily: "Georgia, serif", resize: "vertical" }}
    />
  );
}

function ImageSlot({ storageKey, label }: { storageKey: string; label: string }) {
  const [src, setSrc] = useLocalStorage(storageKey);
  const [url, setUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setSrc(String(reader.result));
    reader.readAsDataURL(f);
  };

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex flex-1 items-center justify-center overflow-hidden rounded-md border border-dashed border-[var(--prus-border)] bg-[var(--prus-bg-soft)]">
        {src ? (
          <img src={src} alt={label} className="h-full w-full object-cover" />
        ) : (
          <span className="px-4 py-12 text-center text-sm text-[var(--prus-muted)]">
            {label}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="rounded-md bg-[var(--prus-accent)] px-3 py-2 text-sm font-medium text-white transition hover:bg-[var(--prus-accent-dark)]"
        >
          Wgraj zdjęcie
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFile}
        />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="…lub wklej URL zdjęcia"
          className="flex-1 rounded-md border border-[var(--prus-border)] bg-white px-3 py-2 text-sm outline-none focus:border-[var(--prus-accent)]"
        />
        <button
          type="button"
          onClick={() => url && setSrc(url)}
          className="rounded-md border border-[var(--prus-border)] bg-white px-3 py-2 text-sm font-medium text-[var(--prus-text)] transition hover:bg-[var(--prus-bg-soft)]"
        >
          Ustaw
        </button>
        {src && (
          <button
            type="button"
            onClick={() => setSrc("")}
            className="rounded-md border border-[var(--prus-border)] bg-white px-3 py-2 text-sm text-[var(--prus-muted)] hover:text-[var(--prus-text)]"
          >
            Usuń
          </button>
        )}
      </div>
    </div>
  );
}

function PrusSite() {
  const [tab, setTab] = useState<TabId>("info");
  const [article, setArticle] = useState<null | "a1" | "a2">(null);

  return (
    <div
      className="min-h-screen"
      style={{
        ["--prus-bg" as never]: "#f7f7f9",
        ["--prus-bg-soft" as never]: "#eef0f4",
        ["--prus-border" as never]: "#d9dde3",
        ["--prus-text" as never]: "#1f2330",
        ["--prus-muted" as never]: "#6b7280",
        ["--prus-accent" as never]: "#1e3a8a",
        ["--prus-accent-dark" as never]: "#152a63",
        backgroundColor: "var(--prus-bg)",
        color: "var(--prus-text)",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <header className="border-b border-[var(--prus-border)] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Bolesław Prus &middot; <span className="italic">„Lalka"</span>
          </h1>
          <nav className="flex flex-wrap gap-1">
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTab(t.id);
                    setArticle(null);
                  }}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-[var(--prus-accent)] text-white"
                      : "text-[var(--prus-text)] hover:bg-[var(--prus-bg-soft)]"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        {article ? (
          <ArticlePage
            id={article}
            onBack={() => setArticle(null)}
          />
        ) : tab === "info" ? (
          <InfoTab onOpenArticle={setArticle} />
        ) : tab === "biografia" ? (
          <SimpleTab
            title="Biografia B. Prusa"
            textKey="prus_bio_text"
            imageKey="prus_bio_image"
            imageLabel="Miejsce na zdjęcie (biografia)"
          />
        ) : tab === "tworczosc" ? (
          <SimpleTab
            title="Twórczość B. Prusa"
            textKey="prus_tworczosc_text"
            imageKey="prus_tworczosc_image"
            imageLabel="Miejsce na zdjęcie (twórczość)"
          />
        ) : (
          <SimpleTab
            title="O mnie"
            textKey="prus_omnie_text"
            imageKey="prus_omnie_image"
            imageLabel="Miejsce na zdjęcie (o mnie)"
          />
        )}
      </main>

      <footer className="mt-10 border-t border-[var(--prus-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-[var(--prus-muted)]">
          Strona o Bolesławie Prusie i powieści „Lalka". Treści edytowalne — zmiany
          zapisują się w przeglądarce.
        </div>
      </footer>
    </div>
  );
}

function InfoTab({ onOpenArticle }: { onOpenArticle: (id: "a1" | "a2") => void }) {
  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Wstęp / powitanie</h2>
          <EditableText
            storageKey="prus_info_wstep"
            placeholder="Wklej tutaj tekst powitania / wstępu…"
            minHeight={220}
          />
        </div>
        <div className="flex flex-col gap-3 rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Zdjęcie B. Prusa</h2>
          <ImageSlot storageKey="prus_info_photo" label="Miejsce na zdjęcie B. Prusa" />
        </div>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Treść nr 1</h2>
        <EditableText
          storageKey="prus_info_tresc1"
          placeholder="Wklej tutaj treść nr 1…"
          minHeight={260}
        />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold">Książka „Lalka”</h3>
          <ImageSlot storageKey="prus_info_lalka" label="Zdjęcie książki „Lalka”" />
        </div>
        <button
          onClick={() => onOpenArticle("a1")}
          className="group flex flex-col items-start gap-2 rounded-lg border border-[var(--prus-border)] bg-white p-5 text-left shadow-sm transition hover:border-[var(--prus-accent)] hover:shadow-md"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--prus-accent)]">
            Podstrona
          </span>
          <h3 className="text-lg font-semibold">Artykuł 1</h3>
          <p className="text-sm text-[var(--prus-muted)]">
            Kliknij, aby przejść do artykułu 1.
          </p>
          <span className="mt-auto text-sm font-medium text-[var(--prus-accent)] group-hover:underline">
            Czytaj →
          </span>
        </button>
        <button
          onClick={() => onOpenArticle("a2")}
          className="group flex flex-col items-start gap-2 rounded-lg border border-[var(--prus-border)] bg-white p-5 text-left shadow-sm transition hover:border-[var(--prus-accent)] hover:shadow-md"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--prus-accent)]">
            Podstrona
          </span>
          <h3 className="text-lg font-semibold">Artykuł 2</h3>
          <p className="text-sm text-[var(--prus-muted)]">
            Kliknij, aby przejść do artykułu 2.
          </p>
          <span className="mt-auto text-sm font-medium text-[var(--prus-accent)] group-hover:underline">
            Czytaj →
          </span>
        </button>
      </section>
    </div>
  );
}

function SimpleTab({
  title,
  textKey,
  imageKey,
  imageLabel,
}: {
  title: string;
  textKey: string;
  imageKey: string;
  imageLabel: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <EditableText
            storageKey={textKey}
            placeholder="Wklej tutaj tekst…"
            minHeight={420}
          />
        </div>
        <div className="rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <ImageSlot storageKey={imageKey} label={imageLabel} />
        </div>
      </div>
    </div>
  );
}

function ArticlePage({ id, onBack }: { id: "a1" | "a2"; onBack: () => void }) {
  const title = id === "a1" ? "Artykuł 1" : "Artykuł 2";
  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={onBack}
        className="self-start rounded-md border border-[var(--prus-border)] bg-white px-3 py-2 text-sm font-medium text-[var(--prus-text)] transition hover:bg-[var(--prus-bg-soft)]"
      >
        ← Wróć
      </button>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <EditableText
            storageKey={`prus_article_${id}_text`}
            placeholder="Wklej tutaj treść artykułu…"
            minHeight={420}
          />
        </div>
        <div className="rounded-lg border border-[var(--prus-border)] bg-white p-5 shadow-sm">
          <ImageSlot
            storageKey={`prus_article_${id}_image`}
            label="Miejsce na zdjęcie do artykułu"
          />
        </div>
      </div>
    </div>
  );
}
