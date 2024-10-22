import HeaderTracker from './components/HeaderSearchSection/HeaderTracker';
import InfoCard from './components/ContentSection/InfoCard';
import MapIpContainer from './components/MapSection/MapIpContainer';
import { LatLngTuple } from 'leaflet';
import { URL_SEARCH_IP } from './constants/constants';
import { MainContainerStyled } from './styles/app/MainContainerStyled';
import { ContainerContentStyled } from './styles/app/ContainerContentStyled';
import { fetcher } from './helpers/fetcher';
import useSWRMutation from 'swr/mutation';
import { useEffect } from 'react';
import { message } from 'antd';
import { errorApiType } from './types/types';

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const errorAlert = (message: string) => {
    messageApi.open({
      type: 'error',
      content: message,
    });
  };

  const { data, isMutating, trigger } = useSWRMutation(URL_SEARCH_IP, fetcher, {
    throwOnError: false,
    onError: (error) => {
      errorAlert((error as errorApiType).message);
    },
  });
  const position: LatLngTuple | undefined =
    data?.latitude && data?.longitude
      ? [data.latitude, data.longitude]
      : undefined;

  useEffect(() => {
    trigger('');
  }, [trigger]);

  return (
    <MainContainerStyled>
      {contextHolder}
      <HeaderTracker trigger={trigger} />
      <ContainerContentStyled>
        <InfoCard {...data} loading={isMutating} />
        <MapIpContainer position={position} isp={data?.connection?.isp} />
      </ContainerContentStyled>
    </MainContainerStyled>
  );
}

export default App;
