import React from 'react';
import { Flex, Card, Typography, Space, Divider, Spin } from 'antd';
import {
  ipAddressType,
  ipLocationType,
  optionsCardType,
} from '../../types/types';

interface InfoCardProps
  extends Omit<ipAddressType, 'domain' | 'location'>,
    Pick<ipLocationType, 'city' | 'region' | 'timezone' | 'postalCode'> {
  loading: boolean;
}

const InfoCard = (props: InfoCardProps) => {
  const { ip, region, city, timezone, isp, postalCode, loading } = props;
  const { Paragraph } = Typography;

  const options: optionsCardType[] = [
    {
      name: 'IP ADDRESS',
      value: ip,
    },
    {
      name: 'LOCATION',
      value: region ? `${region} ${city} ${postalCode}` : `None`,
    },
    {
      name: 'TIMEZONE',
      value: timezone ? `UTC ${timezone}` : 'None',
    },
    {
      name: 'ISP',
      value: isp ? isp : 'None',
    },
  ];

  return (
    <Flex
      justify="center"
      style={{ position: 'absolute', top: -60, left: 0, right: 0, zIndex: 3 }}
    >
      <Spin spinning={loading}>
        <Card
          style={{
            flex: 1,
            maxWidth: '950px',
            borderRadius: '14px',
          }}
        >
          <Flex justify="space-between">
            {options.map((option, index) => (
              <div key={index}>
                <Space direction="vertical" size={0}>
                  <Paragraph
                    style={{
                      fontSize: '10px',
                      fontWeight: '700',
                      letterSpacing: '1px',
                      color: 'hsl(0, 0%, 59%)',
                      marginBottom: 0,
                    }}
                  >
                    {option.name}
                  </Paragraph>
                  <Paragraph
                    style={{
                      color: 'hsl(0, 0%, 17%)',
                      fontSize: '22px',
                      fontWeight: 500,
                    }}
                  >
                    {option.value}
                  </Paragraph>
                </Space>
                {index + 1 < options.length && (
                  <Divider type="vertical" style={{ height: 'auto' }} />
                )}
              </div>
            ))}
          </Flex>
        </Card>
      </Spin>
    </Flex>
  );
};

export default InfoCard;
