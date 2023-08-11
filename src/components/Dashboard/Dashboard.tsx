/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Badge, Box, Card, Paper } from '@mantine/core';
import { useFetch } from '../../hooks/useFetch';

type DashboardProps = { dashboardId: string };

const CustomCard = (props) => {
  const isValueSignPositive = props.data.valueSign === 'positive';
  return (
    <Box
      p="md"
      sx={{
        border: '1px solid #ededed',
        gridColumnStart: props.positioning.x,
        gridColumnEnd: props.positioning.x + props.positioning.width - 1,
        gridRowStart: props.positioning.y,
        gridRowEnd: props.positioning.y + props.positioning.height - 1,
      }}
    >
      <Box
        sx={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Badge>{props.metaData.aggregationLable}</Badge>
          {props.metaData.titleLable}
        </Box>
        <Box
          sx={{ marginTop: '12px', fontSize: '32px', fontFamily: 'sans-serif' }}
        >
          {props.data.total}
        </Box>
        <Box sx={{ fontSize: '12px', display: 'flex', gap: '4px' }}>
          <Box sx={{ color: isValueSignPositive ? 'green' : 'red' }}>
            {isValueSignPositive ? '⬆️' : '⬇️'} {props.data.value}
          </Box>
          vs last month
        </Box>
      </Box>
    </Box>
  );
};

const WidgetWrapper = ({ type, componentProps }) => {
  switch (type) {
    case 'card':
      return <CustomCard {...componentProps} />;

    default:
      return 'Default Fallback ';
  }
};

const styles = {
  gridWrapper: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
    gap: '0.5rem',
  },
};
const Dashboard = ({ dashboardId }: DashboardProps) => {
  const { data, error, loading } = useFetch(
    `/dashboard-${dashboardId}.json`
  ) as any;
  if (loading) return 'loading...';
  if (error) return 'Something went wrong';
  return (
    <Box sx={styles.gridWrapper}>
      {data?.widgets?.map((d) => (
        <WidgetWrapper key={d.uuid} type={d.type} componentProps={d} />
      ))}
    </Box>
  );
};

export default Dashboard;
