import Image from 'next/image';

interface NeblifyLogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function NeblifyLogo({
  className = "h-10 w-auto",
  width = 180,
  height = 60,
  priority = false
}: NeblifyLogoProps) {
  return (
    <Image
      src="/images/NeblifyLogo.png"
      alt="Neblify Logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
