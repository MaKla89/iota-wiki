import clsx from 'clsx';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styles from './styles.module.css';

const ActionList = [
  {
    title: 'Learn',
    link: 'docs/learn/about-iota/an-introduction-to-iota',
    description: (
      <>
        Why IOTA? Basics to deeper topics: Learn about the tangle, industry applications and networks.
      </>
    ),
  },
  {
    title: 'Use',
    link: 'docs/use/use-cases/industry-applications',
    description: (
      <>
        Learn about IOTAs solutions and how they can be applied in the real world.
      </>
    ),
  },
  {
    title: 'Develop',
    link: 'docs/develop/getting-started/architecture',
    description: (
      <>
        Follow our tutorials and documentation to build your own projects. IOTA supports Rust, C, Go, Java, and Python.
      </>
    ),
  },
];

function Action({ title, link, description}) {
  let [hovering, setHovering] = useState(false);
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(link);
  }

  return (
    <div className='col col--4 margin-vert--md'>
      <div
        className={clsx('card padding--lg')}
        onClick={handleClick}
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      >
        <div className={clsx(styles.header)}>
          <span className={clsx(styles.headerTitle)}>{title}</span>
          <div href={link} className={clsx(styles.button)}>
            <span className={clsx("material-icons", styles.icon)}>
              navigate_next
            </span>
          </div>
        </div>
        <div className={clsx(
          "headline-stick",
          {
            "size-m": hovering,
            "size-s": !hovering
          }
        )}></div>
        <div className={clsx(styles.body)}>
          {description}
        </div>
      </div>
    </div>
  );
}

function LandingpageActions() {
  return (
    <div className='container padding--xl'>
      <div className="section-header grey text--center margin-bottom--sm" >Get started, right away</div>
      <div className='row'>
        {ActionList.map((props, idx) => (
          <Action key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

export default LandingpageActions