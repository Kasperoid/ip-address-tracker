import { Layout, Alert } from 'antd';
import React, { useEffect, useState } from 'react';
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

function App() {
  const [ipInfo, setIpInfo] = useState<ipAddressType>(localIpObj);
  const [position, setPosition] = useState<LatLngTuple>([
    localIpObj.location.lat,
    localIpObj.location.lng,
  ]);
  const [error, setError] = useState<ipErrorType | null>();
  const [visibleAlert, setVisibleAlert] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { Content } = Layout;

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
    setLoading(true);
    try {
      const resp = await axios(URL_SEARCH_IP, {
        params: { apiKey: API_KEY, ipAddress: searchIp },
      });
      setIpInfo(resp.data);
      setLoading(false);
    } catch (error) {
      setVisibleAlert(true);
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
            loading={loading}
          />
          <MapIpContainer position={position} isp={ipInfo.isp} />
          {error && visibleAlert && (
            <Alert
              afterClose={() => setVisibleAlert(false)}
              message={error.code}
              description={error?.messages}
              type="error"
              showIcon
              closable
              style={{
                zIndex: 3,
              }}
            />
          )}
        </Content>
      </>
    </Layout>
  );
}

export default App;
