import { Layout } from 'antd';
import React, { useState } from 'react';
import { ipAddressType } from './types/types';
import HeaderTracker from './components/HeaderTracker';
import InfoCard from './components/InfoCard';
import MapIpContainer from './components/MapIpContainer';

function App() {
  const localIpObj: ipAddressType = {
    ip: '8.8.8.8',
    location: {
      country: 'US',
      region: 'California',
      city: 'Mountain View',
      lat: 37.40599,
      lng: -122.078514,
      timezone: '-07:00',
      geonameId: 5375481,
      postalCode: '12312',
    },
    domains: [
      '0d2.net',
      '003725.com',
      '0f6.b0094c.cn',
      '007515.com',
      '0guhi.jocose.cn',
    ],
    isp: 'Google LLC',
  };

  const [ipInfo, setIpInfo] = useState<ipAddressType>(localIpObj);
  const { Content } = Layout;

  return (
    <Layout style={{ height: '100vh' }}>
      <HeaderTracker />
      <Content style={{ padding: '0 25px', position: 'relative' }}>
        <InfoCard
          ip={ipInfo.ip}
          region={ipInfo.location.region}
          city={ipInfo.location.city}
          timezone={ipInfo.location.timezone}
          isp={ipInfo.isp}
          postalCode={ipInfo.location.postalCode}
        />
        <MapIpContainer />
      </Content>
    </Layout>
  );
}

export default App;
