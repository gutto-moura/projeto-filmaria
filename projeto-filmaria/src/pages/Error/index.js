import React from "react";
import {Link} from "react-router-dom"
import errorImage from "../../assets/error.png"
import {ErrorContainer, ImgError} from "./styled";

function Error() {
    return (
      <ErrorContainer>
          <ImgError src = {errorImage} />
        <Link to={"/"}>Voltar para filmes</Link>
      </ErrorContainer>
    );
  }
  
  export default Error;