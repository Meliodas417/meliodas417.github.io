import React from "react";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
};

export const LinkPreview = ({
  children,
  url,
  className,
}: LinkPreviewProps) => {
  const [offset, setOffset] = React.useState(0);
  const isExternal = /^https?:\/\//i.test(url);
  const label = React.useMemo(() => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  }, [url]);

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setOffset((event.clientX - rect.left - rect.width / 2) / 3);
  }

  return (
    <span className="group/link-preview relative inline-block align-baseline">
      <a
        onMouseMove={handleMouseMove}
        className={cn(className)}
        href={url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
      >
        {children}
      </a>

      <span
        className="pointer-events-none absolute bottom-full left-1/2 z-[80] mb-3 hidden w-52 origin-bottom -translate-x-1/2 translate-y-2 scale-95 rounded-xl border border-neutral-200 bg-white/96 p-3 text-left opacity-0 shadow-2xl ring-1 ring-black/5 backdrop-blur transition duration-200 ease-out group-hover/link-preview:translate-y-0 group-hover/link-preview:scale-100 group-hover/link-preview:opacity-100 md:block"
        style={{
          marginLeft: offset,
        }}
      >
        <span className="block text-[0.7rem] font-bold text-[#8b3f22]">
          External link
        </span>
        <span className="mt-1 block truncate text-sm font-semibold text-neutral-950">
          {label}
        </span>
        <span className="mt-2 block text-xs leading-5 text-neutral-700">
          Opens in a new tab
        </span>
      </span>
    </span>
  );
};
