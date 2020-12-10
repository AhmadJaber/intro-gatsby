import React, { useState } from 'react';
import { css } from '@emotion/react';

export default function Wave() {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
}
