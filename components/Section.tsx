import { Fragment, ReactNode } from "react";

interface SectionProps {
  itemLeft?: ReactNode;
  itemRight?: ReactNode;
  text: string;
  color: "blue" | "green" | "pink";
}

// the goal is to be able to pass props to the component from the direct parent and the parent that establishes the component.

export default function Section({
  text,
  itemLeft,
  itemRight,
  color,
}: SectionProps): JSX.Element {
  return (
    <div>
      {itemLeft ? (
        <Component component={itemLeft} subProps={{ color }} />
      ) : (
        <Fragment />
      )}
      <h2>{text}</h2>
      {itemRight ? (
        <Component component={itemRight} subProps={{ color }} />
      ) : (
        <Fragment />
      )}
    </div>
  );
}
