import Link from "next/link";

const linkPhrases = [
  {
    phrase: "Fiber Laser Cutting Machine Manufacturer in Delhi NCR",
    href: "/contact-us",
  },
  {
    phrase: "Fiber Laser Cutting Machine Manufacturer in Delhi",
    href: "/contact-us",
  },
  {
    phrase: "Sheet Metal Cutting Machine Manufacturer in Delhi NCR",
    href: "/contact-us",
  },
  {
    phrase: "Sheet Metal Cutting Machine Manufacturer in Delhi",
    href: "/contact-us",
  },
  {
    phrase: "Tube Laser Cutting Machine Manufacturer in Delhi",
    href: "/contact-us",
  },
  {
    phrase: "Robotic Laser Solutions in Delhi",
    href: "/contact-us",
  },
  {
    phrase: "Best Laser Machine Service Provider in Delhi NCR",
    href: "/contact-us",
  },
  {
    phrase: "Best Laser Machine Service Provider in Delhi",
    href: "/contact-us",
  },
  {
    phrase: "Laser Machine Service Provider in Delhi",
    href: "/contact-us",
  },
  {
    phrase: "Laser Machine Spare Parts in Delhi",
    href: "/contact-us",
  },
  {
    phrase: "Apex Machinery",
    href: "/",
  },
  {
    phrase: "Apex Technology",
    href: "/",
  },
].sort((a, b) => b.phrase.length - a.phrase.length);

const phrasePattern = new RegExp(
  `(${linkPhrases.map(({ phrase }) => phraseToPattern(phrase)).join("|")})`,
  "gi"
);

export default function AutoLinkText({ children, counts, maxLinksPerPhrase = 2 }) {
  if (typeof children !== "string") {
    return children;
  }

  const parts = children.split(phrasePattern);

  return parts.map((part, index) => {
    const match = linkPhrases.find(
      ({ phrase }) => normalizeText(phrase) === normalizeText(part)
    );

    if (!match) {
      return part;
    }

    const countKey = normalizeText(match.phrase);
    const currentCount = counts?.[countKey] || 0;

    if (currentCount >= maxLinksPerPhrase) {
      return part;
    }

    if (counts) {
      counts[countKey] = currentCount + 1;
    }

    return (
      <Link
        key={`${match.href}-${part}-${index}`}
        href={match.href}
        className="font-bold"
      >
        {part}
      </Link>
    );
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function phraseToPattern(value) {
  return value.split(/\s+/).map(escapeRegExp).join("\\s+");
}

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}
