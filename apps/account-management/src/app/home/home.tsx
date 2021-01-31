import React from 'react';
import { PageTitle } from '@polo/ui';

import styles from './home.module.css';
import { Button } from 'antd';

/* eslint-disable-next-line */
export interface HomeProps { }

export function Home(props: HomeProps) {
  return (
    <div>
      <PageTitle level={2}></PageTitle>
      <div className={styles.linkContainer}>
        <Button type="primary" size="large" className={styles.linkButton}>
          Add new user
        </Button>
        <Button type="primary" size="large" className={styles.linkButton}>
          List users
        </Button>
      </div>
    </div>
  );
}

export default Home;
