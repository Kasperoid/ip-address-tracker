import { Layout, Result, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { ipAddressType, ipErrorType } from './types/types';
import HeaderTracker from './components/HeaderTracker';
import InfoCard from './components/InfoCard';
import MapIpContainer from './components/MapIpContainer';
import { LatLngExpression } from 'leaflet';
import {
  API_KEY,
  localIpObj,
  UNKNOWN_ERROR,
  URL_SEARCH_IP,
} from './constants/constants';
import axios from 'axios';

function App() {
  const [ipInfo, setIpInfo] = useState<ipAddressType>(localIpObj);
  const [position, setPosition] = useState<LatLngExpression>({
    lat: localIpObj.location.lat,
    lng: localIpObj.location.lng,
  });
  const [error, setError] = useState<ipErrorType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { Content } = Layout;

  useEffect(() => {
    setPosition({ lat: ipInfo.location.lat, lng: ipInfo.location.lng });
  }, [ipInfo]);

  const isErrorIp = (error: any): error is ipErrorType =>
    'messages' && 'code' in error;

  const searchIpInfo = async (searchIp: string) => {
    setLoading(true);
    try {
      const resp = await axios(URL_SEARCH_IP, {
        params: { apiKey: API_KEY, ipAddress: searchIp },
      });
      setError(null);
      setIpInfo(resp.data);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data) {
          isErrorIp(error.response.data)
            ? setError(error.response.data)
            : setError(UNKNOWN_ERROR);
        } else {
          setError(UNKNOWN_ERROR);
        }
      } else {
        setError(UNKNOWN_ERROR);
      }
      setLoading(false);
    }
  };

  return (
    <Layout style={{ height: '100vh' }}>
      {error ? (
        <Result
          status={'error'}
          title={error.messages}
          extra={<Button type="primary">Back Home</Button>}
        />
      ) : (
        <>
          <HeaderTracker searchIp={searchIpInfo} />
          <Content style={{ padding: '0 25px', position: 'relative' }}>
            <InfoCard
              ip={ipInfo.ip}
              region={ipInfo.location.region}
              city={ipInfo.location.city}
              timezone={ipInfo.location.timezone}
              isp={ipInfo.isp}
              postalCode={ipInfo.location.postalCode}
            />
            <MapIpContainer position={position} isp={ipInfo.isp} />
          </Content>
        </>
      )}
    </Layout>
  );
}

export default App;
