import React from 'react';
import { Typography } from 'antd';

import './page-title.module.css';

import styles from './page-title.module.css';

const { Title } = Typography;

/* eslint-disable-next-line */
export interface PageTitleProps {
  level: 1 | 2 | 3 | 4 | 5;
}

export function PageTitle(props: PageTitleProps) {
  return (
    <Title className={styles.title} level={props.level}>Welcome to Account Management</Title>
  );
}

export default PageTitle;
