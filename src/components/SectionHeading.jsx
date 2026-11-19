import React from 'react';

export default function SectionHeading({ eyebrow, title, intro, action }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {action && <div className="section-action">{action}</div>}
    </div>
  );
}
