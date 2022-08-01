import React, { useState } from "react";

const Basic = () => {
  const [name, setName] = useState(""); // 기본값 ''로 초기화
  return (
    <div>
      <label>이름: </label>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>{name}</p>
    </div>
  );
};

export default Basic;
