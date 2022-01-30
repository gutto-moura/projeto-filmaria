import React from "react";
import {Link} from "react-router-dom"
import errorImage from "../../assets/error.png"

function Error() {
    return (
      <div>
          <img src = {errorImage} />
        <Link to={"/"}>Voltar para filmes</Link>
      </div>
    );
  }
  
  export default Error;