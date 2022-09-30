import { Text } from "react-native"
import { gql, useQuery } from '@apollo/client';

const RSV_QUERY = gql`
  query RsvQuery {
    rsvs (shopId: 1) { # 店舗IDを指定
      beginAt # 開始時間(YYYY-MM-DDThh:mm:ss+hh:mm)
      endAt # 終了時間(YYYY-MM-DDThh:mm:ss+hh:mm)
    }
  }
`

const ReservationCalendar = (props: { shopId: number }) => {
  const { shopId } = props;
  const { data, loading, error } = useQuery(RSV_QUERY);
  console.log('data: ', data);
  
  return <Text>Calendar</Text>
}

export default ReservationCalendar;