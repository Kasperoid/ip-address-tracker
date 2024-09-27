import { RightOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { HeaderContainerStyled } from '../../styles/header/HeaderContainerStyled';
import bg from './../../images/pattern-bg-desktop.png';
import { TitleHeader } from '../../styles/header/TitleHeader';
import { HeaderSearchStyled } from '../../styles/header/HeaderSearchStyled';
import { URL_SEARCH_IP } from '../../constants/constants';
import { fetcher } from '../../helpers/fetcher';
import { useSWRConfig } from 'swr';

type HeaderTrackerProps = {
  loading: boolean;
};

const HeaderTracker = ({ loading }: HeaderTrackerProps) => {
  const onSearchHandler = (inputText: string) => {
    mutate(URL_SEARCH_IP, () => fetcher(URL_SEARCH_IP, inputText), {
      revalidate: false,
      throwOnError: false,
    });
  };
  const { mutate } = useSWRConfig();
  return (
    <HeaderContainerStyled bg={bg}>
      <Flex vertical align="center">
        <TitleHeader>IP Address Tracker</TitleHeader>
        <HeaderSearchStyled
          loading={loading}
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
