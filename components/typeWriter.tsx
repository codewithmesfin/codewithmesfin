import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriiter(props: any) {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          // .typeString(props.text)
          .start()
          .deleteAll()
          // .typeString(props.text)
        
      }}
      options={{delay:100,deleteSpeed:100,
        strings: props.roles,
        autoStart: true,
        loop: true,
      }}
    />

  );
}