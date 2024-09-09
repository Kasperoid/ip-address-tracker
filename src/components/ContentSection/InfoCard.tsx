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
    <Flex className="infoCard-container" justify="center">
      <Spin spinning={loading}>
        <Card className="infoCard-container-inner">
          <Flex justify="space-between" className="flex-container">
            {options.map((option, index) => (
              <div key={index}>
                <Space direction="vertical" size={0}>
                  <Paragraph className="infoCard-option-title">
                    {option.name}
                  </Paragraph>
                  <Paragraph className="infoCard-option-value">
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
