import { ShieldCheckIcon, UsersIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/outline";

type IconName = "shield" | "users" | "map" | "star";

interface PlatformCardProps {
  icon: IconName;
  title: string;
  body: string;
}

// Use SVGProps so style is valid
const iconMap: Record<IconName, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  shield: ShieldCheckIcon,
  users: UsersIcon,
  map: MapPinIcon,
  star: StarIcon,
};

export default function PlatformCard({ icon, title, body }: PlatformCardProps) {
  const Icon = iconMap[icon];

  return (
    <article
      className="group relative flex flex-col rounded-sm bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
      style={{ borderTop: "4px solid #C8102E" }}
    >
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded"
        style={{ background: "rgba(200,16,46,0.08)" }}
      >
        <Icon className="h-6 w-6" style={{ color: "#C8102E" }} />
      </div>
      <h3
        className="mb-3 font-display leading-tight"
        style={{
          fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
          color: "#0A1F44",
          letterSpacing: "0.04em",
        }}
      >
        {title}
      </h3>
      <p className="font-body text-base leading-relaxed" style={{ color: "#4B5563" }}>
        {body}
      </p>
    </article>
  );
}
