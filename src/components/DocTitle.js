import React, { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const DocTitle = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <button type="button" value={count} onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
};

export default DocTitle;
