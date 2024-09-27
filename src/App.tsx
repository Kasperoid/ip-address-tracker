import { CustomError, ipAddressType } from './types/types';
import HeaderTracker from './components/HeaderSearchSection/HeaderTracker';
import InfoCard from './components/ContentSection/InfoCard';
import MapIpContainer from './components/MapSection/MapIpContainer';
import { LatLngTuple } from 'leaflet';
import { URL_SEARCH_IP } from './constants/constants';
import { MainContainerStyled } from './styles/app/MainContainerStyled';
import { ContainerContentStyled } from './styles/app/ContainerContentStyled';
import { fetcher } from './helpers/fetcher';
import useSWR from 'swr';
import { isIpData } from './helpers/typeGuard';
import { Button, Result } from 'antd';
import { useEffect } from 'react';

function App() {
  const { data, error, isLoading } = useSWR<
    ipAddressType | undefined,
    CustomError
  >(URL_SEARCH_IP, () => fetcher(URL_SEARCH_IP, ''), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const position: LatLngTuple | undefined = isIpData(data)
    ? [data.location.lat, data.location.lng]
    : undefined;

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <MainContainerStyled>
      <HeaderTracker loading={isLoading} />
      {error ? (
        <Result
          status="error"
          title="Submission Failed"
          subTitle="Please check and modify the following information before resubmitting."
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
      ) : (
        <ContainerContentStyled>
          <InfoCard {...data} {...data?.location} loading={isLoading} />
          <MapIpContainer position={position} isp={data?.isp} />
        </ContainerContentStyled>
      )}
    </MainContainerStyled>
  );
}

export default App;
