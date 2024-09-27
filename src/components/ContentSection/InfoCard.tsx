import { Space, Divider, Spin } from 'antd';
import {
  ipAddressType,
  ipLocationType,
  optionsCardType,
} from '../../types/types';
import { InfoCardContainer } from '../../styles/infoCard/InfoCardContainer';
import { InfoCardInnerContainer } from '../../styles/infoCard/InfoCardInnerContainer';
import { CardColumnTitle } from '../../styles/infoCard/CardColumnTitle';
import { CardColumnText } from '../../styles/infoCard/CardColumnText';

interface InfoCardProps
  extends Partial<Omit<ipAddressType, 'domain' | 'location'>>,
    Partial<
      Pick<ipLocationType, 'city' | 'region' | 'timezone' | 'postalCode'>
    > {
  loading: boolean;
}

const InfoCard = (props: InfoCardProps) => {
  const { ip, region, city, timezone, isp, postalCode, loading } = props;

  const options: optionsCardType[] = [
    {
      name: 'IP ADDRESS',
      value: ip ? ip : 'None',
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
    <InfoCardContainer justify="center">
      <Spin spinning={loading}>
        <InfoCardInnerContainer>
          {options.map((option, index) => (
            <div key={index}>
              <Space direction="vertical" size={0}>
                <CardColumnTitle>{option.name}</CardColumnTitle>
                <CardColumnText>{option.value}</CardColumnText>
              </Space>
              {index + 1 < options.length && (
                <Divider type="vertical" style={{ height: 'auto' }} />
              )}
            </div>
          ))}
        </InfoCardInnerContainer>
      </Spin>
    </InfoCardContainer>
  );
};

export default InfoCard;
