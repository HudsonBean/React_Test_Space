import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";

interface Props {
  firstName: string;
  lastName: string;
  age: number;
  hasDriversLicense: boolean;
  onSmash: () => void;
}

// prettier-ignore
const Button: React.FC<HTMLAttributes<HTMLButtonElement> & Partial<Props>> = ({onSmash, firstName}) => {
  return <button onClick={onSmash} >{firstName}</button>;
};

export const Person: React.FC<Partial<Props>> = ({ firstName }) => {
  return (
    <>
      <Button onSmash={() => console.log(firstName)} firstName="John" />
    </>
  );
};
