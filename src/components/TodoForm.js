import React, { useState } from "react";

export default ({ onSubmit }) => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
      }}
    >
      <input
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </form>
  );
};
