import React from 'react';
import { PageTitle } from '@polo/ui';

import styles from './home.module.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HomeProps { }

export function Home(props: HomeProps) {
  return (
    <div>
      <PageTitle level={2}></PageTitle>
      <div className={styles.linkContainer}>
        <Button type="primary" size="large" className={styles.linkButton}>
          <Link to='/add-user'>Add new user</Link>
        </Button>
        <Button type="primary" size="large" className={styles.linkButton}>
          <Link to='/list-users'>Add new user</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
