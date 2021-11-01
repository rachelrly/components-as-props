import { Fragment, FC } from "react";
import { Generic, Specific } from "./Generics";

interface SectionProps {
  itemLeft?: FC;
  itemRight?: FC;
  text: string;
  color: "blue" | "green" | "pink";
}

export function SectionGeneric({
  text,
  itemLeft,
  itemRight,
  color,
}: SectionProps): JSX.Element {
  return (
    <div>
      {itemLeft ? (
        <Generic
          component={itemLeft}
          subProps={{ color, size: "sm", text: "Hello there" }}
        />
      ) : (
        <Fragment />
      )}
      <h2>{text}</h2>
      {itemRight ? (
        <Generic component={itemRight} subProps={{ color, size: "sm" }} />
      ) : (
        <Fragment />
      )}
    </div>
  );
}

export function SectionSpecific({
  text,
  itemLeft,
  itemRight,
  color,
}: SectionProps): JSX.Element {
  return (
    <div>
      {itemLeft ? (
        <Generic component={itemLeft} subProps={{ color }} />
      ) : (
        <Fragment />
      )}
      <h2>{text}</h2>
      {itemRight ? (
        <Generic component={itemRight} subProps={{ color }} />
      ) : (
        <Fragment />
      )}
    </div>
  );
}

export function SectionNoProps({
  text,
  itemLeft,
  itemRight,
  color,
}: SectionProps): JSX.Element {
  const ItemLeft = itemLeft;
  const ItemRight = itemRight;
  return (
    <div>
      {itemLeft ? itemLeft : <Fragment />}
      <h2>{text}</h2>
      {itemRight ? itemRight : <Fragment />}
    </div>
  );
}
