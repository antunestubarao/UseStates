import { useState } from "react";

const InputAndButton = () => {
  const [comments, setComments] = useState("");

  return (
    <div>
      <p>Digite aqui o que vc pensa sobre as aulas:  
      <input
        type="text"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      </p>

      <p>Eu curto as aulas porque elas são: {comments}</p>
    </div>
  );
};

export default InputAndButton;
