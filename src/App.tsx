import { useEffect, useState } from 'react';
import { ipAddressType, ipErrorType } from './types/types';
import HeaderTracker from './components/HeaderSearchSection/HeaderTracker';
import InfoCard from './components/ContentSection/InfoCard';
import MapIpContainer from './components/MapSection/MapIpContainer';
import { LatLngTuple } from 'leaflet';
import {
  API_KEY,
  localIpObj,
  UNKNOWN_ERROR,
  URL_SEARCH_IP,
} from './constants/constants';
import axios from 'axios';
import { isErrorIp } from './helpers/typeGuards';
import { MainContainerStyled } from './styles/app/MainContainerStyled';
import { ContainerContentStyled } from './styles/app/ContainerContentStyled';
import { AlertEventStyled } from './styles/app/AlertEventStyled';
import { fetcher } from './helpers/fetcher';
import useSWR from 'swr';

function App() {
  // const { data, error, isLoading } = useSWR<ipAddressType>(
  //   URL_SEARCH_IP,
  //   fetcher
  // );
  const [ipInfo, setIpInfo] = useState<ipAddressType>(localIpObj);
  const [position, setPosition] = useState<LatLngTuple>([
    localIpObj.location.lat,
    localIpObj.location.lng,
  ]);
  // const [error, setError] = useState<ipErrorType | null>();
  const [visibleAlert, setVisibleAlert] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setPosition([ipInfo.location.lat, ipInfo.location.lng]);
  }, [ipInfo]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleAlert(false);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const searchIpInfo = async (searchIp: string) => {
    // setLoading(true);
    // try {
    //   const resp = await axios(URL_SEARCH_IP, {
    //     params: { apiKey: API_KEY, ipAddress: searchIp },
    //   });
    //   setIpInfo(resp.data);
    //   setLoading(false);
    // } catch (error) {
    //   setVisibleAlert(true);
    //   if (axios.isAxiosError(error)) {
    //     if (error.response?.data) {
    //       isErrorIp(error.response.data)
    //         ? setError(error.response.data)
    //         : setError(UNKNOWN_ERROR);
    //     } else {
    //       setError(UNKNOWN_ERROR);
    //     }
    //   } else {
    //     setError(UNKNOWN_ERROR);
    //   }
    //   setLoading(false);
    // }
  };

  return (
    <MainContainerStyled>
      <HeaderTracker searchIp={searchIpInfo} />
      <ContainerContentStyled>
        <InfoCard {...ipInfo} {...ipInfo.location} loading={loading} />
        <MapIpContainer position={position} isp={ipInfo.isp} />
        {error && visibleAlert && (
          <AlertEventStyled
            afterClose={() => setVisibleAlert(false)}
            message={error.code}
            description={error?.messages}
            type="error"
            showIcon
            closable
          />
        )}
      </ContainerContentStyled>
    </MainContainerStyled>
  );
}

export default App;
