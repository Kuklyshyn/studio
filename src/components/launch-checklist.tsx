"use client";

import { useEffect, useState } from "react";
import { Check, Printer, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ChecklistContent } from "../../content/checklist";

const STORAGE_KEY = "omnicode-launch-checklist";

// Tick boxes are kept in this browser only. Storage can be blocked, so every access is wrapped.
function load(locale: string): string[] {
  try {
    const raw = window.localStorage.getItem(`${STORAGE_KEY}-${locale}`);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

function save(locale: string, ids: string[]) {
  try {
    window.localStorage.setItem(`${STORAGE_KEY}-${locale}`, JSON.stringify(ids));
  } catch {
    // Progress is simply not remembered.
  }
}

export function LaunchChecklist({ content, locale }: { content: ChecklistContent; locale: string }) {
  const [done, setDone] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDone(load(locale));
    setReady(true);
  }, [locale]);

  const total = content.groups.reduce((sum, group) => sum + group.items.length, 0);

  function toggle(id: string) {
    setDone((current) => {
      const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
      save(locale, next);
      return next;
    });
  }

  function reset() {
    setDone([]);
    save(locale, []);
  }

  const percent = total ? Math.round((done.length / total) * 100) : 0;

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-5 print:hidden">
        <div className="min-w-[200px] flex-1">
          <p className="mb-2 font-mono text-sm text-muted-foreground" aria-live="polite">
            {ready ? done.length : 0} / {total} {content.labels.progress}
          </p>
          <div className="h-2 overflow-hidden rounded-full bg-secondary" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={ready ? done.length : 0}>
            <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${ready ? percent : 0}%` }} />
          </div>
        </div>
        <Button type="button" variant="outline" className="rounded-full" onClick={() => window.print()}>
          <Printer /> {content.labels.print}
        </Button>
        <Button type="button" variant="ghost" className="rounded-full" onClick={reset}>
          <RotateCcw /> {content.labels.reset}
        </Button>
      </div>

      <div className="space-y-8">
        {content.groups.map((group, groupIndex) => (
          <section key={group.title} className="rounded-3xl border border-border bg-card p-6 md:p-8 print:break-inside-avoid print:border-0 print:p-0">
            <h2 className="mb-5 font-headline text-2xl font-extrabold tracking-[-0.03em] md:text-3xl">
              <span className="eyebrow mr-3">{String(groupIndex + 1).padStart(2, "0")} /</span>
              {group.title}
            </h2>
            <ul className="space-y-3">
              {group.items.map((item, itemIndex) => {
                const id = `${groupIndex}-${itemIndex}`;
                const checked = done.includes(id);
                return (
                  <li key={id}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-xl p-2 transition-colors hover:bg-secondary/60">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={checked}
                        onChange={() => toggle(id)}
                      />
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-input text-primary-foreground transition-colors peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"
                      >
                        {checked && <Check className="h-4 w-4" strokeWidth={3} />}
                      </span>
                      <span className={checked ? "text-muted-foreground line-through decoration-1" : ""}>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">{content.labels.note}</p>
    </div>
  );
}
