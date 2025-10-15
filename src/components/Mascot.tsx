import { memo } from "react";
import { type QuestionMedia } from "../assets/questionImages";

type Props = {
  media: QuestionMedia;
  alt: string;
  className?: string;
};

function MascotComponent({ media, alt, className }: Props) {
  if (media.image) {
    return <img src={media.image} alt={alt} className={`max-w-none ${className}`} />;
  }
  return null;
}

export const Mascot = memo(MascotComponent);
