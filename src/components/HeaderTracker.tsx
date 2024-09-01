import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Flex, Input, Layout, Typography } from 'antd';

const HeaderTracker = () => {
  const { Header } = Layout;
  const { Title } = Typography;
  const { Search } = Input;
  return (
    <Header className={'ip-header'}>
      <Flex vertical align="center">
        <Title>IP Address Tracker</Title>
        <Search
          enterButton={<RightOutlined />}
          placeholder="Search for any IP address"
          style={{ maxWidth: '500px' }}
          size="large"
        />
      </Flex>
    </Header>
  );
};

export default HeaderTracker;
