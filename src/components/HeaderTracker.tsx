import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Flex, Input, Layout, Typography } from 'antd';

interface HeaderTrackerProps {
  searchIp: (searchIp: string) => Promise<void>;
}

const HeaderTracker = ({ searchIp }: HeaderTrackerProps) => {
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
          onSearch={(inputText) => searchIp(inputText)}
        />
      </Flex>
    </Header>
  );
};

export default HeaderTracker;
