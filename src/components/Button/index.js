import React from "react";
import { ButtonTag } from "./style";

function Button({ isSubmiting }) {


  return (
    <ButtonTag>
      <button disabled={isSubmiting} type="submit">{isSubmiting ? "A enviar...": "Enviar"}</button>
    </ButtonTag>
  );
}

export default Button;
