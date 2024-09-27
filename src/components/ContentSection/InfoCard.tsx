import { Space, Divider, Spin } from 'antd';
import { ipAddressType, optionsCardType } from '../../types/types';
import { InfoCardContainer } from '../../styles/infoCard/InfoCardContainer';
import { InfoCardInnerContainer } from '../../styles/infoCard/InfoCardInnerContainer';
import { CardColumnTitle } from '../../styles/infoCard/CardColumnTitle';
import { CardColumnText } from '../../styles/infoCard/CardColumnText';

interface InfoCardProps
  extends Partial<
    Omit<ipAddressType, 'success' | 'latitude' | 'longitude' | 'message'>
  > {
  loading: boolean;
}

const InfoCard = (props: InfoCardProps) => {
  const { ip, region, city, timezone, connection, country_code, loading } =
    props;

  const options: optionsCardType[] = [
    {
      name: 'IP ADDRESS',
      value: ip ? ip : 'None',
    },
    {
      name: 'LOCATION',
      value: region ? `${region} ${city} ${country_code}` : `None`,
    },
    {
      name: 'TIMEZONE',
      value: timezone?.utc ? `UTC ${timezone.utc}` : 'None',
    },
    {
      name: 'ISP',
      value: connection?.isp ? connection.isp : 'None',
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
