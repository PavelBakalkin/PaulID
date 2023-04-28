import Typewriter from "typewriter-effect";

interface ITypewriterComp {
  text: string;
}

export const TypewriterComp = ({ text }: ITypewriterComp) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .changeDelay(10)
          .typeString(text)
          .start();
      }}
    />
  );
};
