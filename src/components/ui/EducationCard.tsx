import Image from "next/image";

type Props = {
  id: string;
  institution: string;
  title: string;
  date: string;
  logo: string;        // path in /public/logos
  description?: string;
  link?: string;
};

export default function EducationCard({
  institution,
  title,
  date,
  logo,
  description,
  link,
}: Props) {
  return (
    <div className="border rounded-xl p-4 bg-card shadow-sm hover:shadow-md transition flex items-start gap-4">
      <div className="shrink-0">
        <Image
          src={logo}
          alt={institution}
          width={48}
          height={48}
          className="object-contain rounded"
        />
      </div>

      <div className="min-w-0">
        <h3 className="font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {institution} • {date}
        </p>

        {description && (
          <p className="text-sm mt-2">{description}</p>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            className="text-primary underline text-sm mt-2 inline-block"
          >
            View Credential
          </a>
        )}
      </div>
    </div>
  );
}
