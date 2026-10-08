"use client";

import type { ComponentProps, MouseEvent } from "react";
import { Link } from "@/i18n";
import { trackEvent } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & {
  // Where the call to action sits on the page, for example "hero" or "header".
  location: string;
};

// A link that records a cta_click event before it navigates.
export function TrackedLink({ location, onClick, ...props }: Props) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent("cta_click", { location });
    onClick?.(event);
  };

  return <Link {...props} onClick={handleClick} />;
}
