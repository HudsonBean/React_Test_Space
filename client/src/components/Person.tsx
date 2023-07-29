import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";

interface Props {
  firstName: string;
  lastName: string;
  age: number;
  hasDriversLicense: boolean;
}

const Button: React.FC<
  HTMLAttributes<HTMLButtonElement> & Partial<Props>
> = () => {
  return <button>test</button>;
};

export const Person: React.FC<Props> = ({ firstName }) => {
  return (
    <>
      <Button />
    </>
  );
};
