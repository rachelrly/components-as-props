import { FC, ReactElement } from "react";

// any props
export interface GenericProps<T> {
  component: FC<T>;
  subProps: T;
}

export function Generic<T>(props: GenericProps<T>): ReactElement {
  return <props.component {...props.subProps} />;
}

// controlled props, i.e. color
export interface SpecificSubProps {
  color: "blue" | "green" | "pink";
}

export interface SpecificProps<T> {
  component: FC<T>; // allows component to accept other props when declared
  subProps: SpecificSubProps;
}

export function Specific(props: SpecificProps<SpecificSubProps>): ReactElement {
  return <props.component {...props.subProps} />;
}
