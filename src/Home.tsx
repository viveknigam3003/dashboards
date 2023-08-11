/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Box } from '@mantine/core';
import Tabs from './components/Tabs';
import Dashboard from './components/Dashboard/Dashboard';
import { useFetch } from './hooks/useFetch';
import { MyTabsProps } from './components/Tabs/Tabs';

const Home = () => {
  const { loading, data, error } = useFetch('/dashboard.json');
  if (loading) return 'loading...';
  if (error) return 'Something went wrong';
  const tabData: any = data?.dashboard?.map((d: any) => ({
    ...d,
    children: <Dashboard dashboardId={d.dashboardId} />,
  })) as unknown as MyTabsProps['tabs'];
  return (
    <div>
      <Box sx={{ background: '' }}>
        <Tabs tabs={tabData} defaultValue={tabData?.[0]?.name} />
      </Box>
    </div>
  );
};

export default Home;
