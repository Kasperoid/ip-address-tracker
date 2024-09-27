import { RightOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { HeaderContainerStyled } from '../../styles/header/HeaderContainerStyled';
import bg from './../../images/pattern-bg-desktop.png';
import { TitleHeader } from '../../styles/header/TitleHeader';
import { HeaderSearchStyled } from '../../styles/header/HeaderSearchStyled';
import { TriggerWithArgs } from 'swr/dist/mutation';
import { ipAddressType } from '../../types/types';

interface HeaderTrackerProps {
  trigger: TriggerWithArgs<ipAddressType | undefined, any, string, string>;
}

const HeaderTracker = ({ trigger }: HeaderTrackerProps) => {
  const onSearchHandler = (inputText: string) => {
    trigger(inputText);
  };
  return (
    <HeaderContainerStyled bg={bg}>
      <Flex vertical align="center">
        <TitleHeader>IP Address Tracker</TitleHeader>
        <HeaderSearchStyled
          enterButton={<RightOutlined />}
          placeholder="Search for any IP address"
          size="large"
          onSearch={inputText => onSearchHandler(inputText)}
        />
      </Flex>
    </HeaderContainerStyled>
  );
};

export default HeaderTracker;
