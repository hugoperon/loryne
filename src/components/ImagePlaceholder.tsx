interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
}

export function ImagePlaceholder({ src, alt, className = "" }: ImagePlaceholderProps) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={`rounded-lg border border-stone-200 object-cover shadow-sm ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-lg border-2 border-dashed border-stone-300 bg-stone-50 text-stone-400 ${className}`}
    >
      <span className="text-sm">Image à ajouter</span>
    </div>
  );
}
