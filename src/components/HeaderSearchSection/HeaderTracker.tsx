import { RightOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { HeaderContainerStyled } from '../../styles/header/HeaderContainerStyled';
import bg from './../../images/pattern-bg-desktop.png';
import { TitleHeader } from '../../styles/header/TitleHeader';
import { HeaderSearchStyled } from '../../styles/header/HeaderSearchStyled';

interface HeaderTrackerProps {
  searchIp: (searchIp: string) => Promise<void>;
}

const HeaderTracker = ({ searchIp }: HeaderTrackerProps) => {
  return (
    <HeaderContainerStyled bg={bg}>
      <Flex vertical align="center">
        <TitleHeader>IP Address Tracker</TitleHeader>
        <HeaderSearchStyled
          enterButton={<RightOutlined />}
          placeholder="Search for any IP address"
          size="large"
          onSearch={(inputText) => searchIp(inputText)}
        />
      </Flex>
    </HeaderContainerStyled>
  );
};

export default HeaderTracker;
