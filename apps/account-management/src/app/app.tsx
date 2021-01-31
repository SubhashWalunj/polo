import React from 'react';
import 'antd/dist/antd.css';

import styles from './app.module.css';
import { Button, Layout } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import Home from './home/home';

const { Header, Content, Footer } = Layout;

export function App() {
  return (
    <Layout>
      <Header className={styles.appHeader}>POLO</Header>
      <Content className={styles.appContent}>
        <Home></Home>
      </Content>
      <Footer className={styles.appFooter}>Made with <HeartFilled /> by <a href='https://github.com/subhashwalunj'>Subhash Walunj</a></Footer>
    </Layout>
  );
}

export default App;
