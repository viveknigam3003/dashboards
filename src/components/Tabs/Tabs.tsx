import { Tabs } from '@mantine/core';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export type MyTabsProps = {
  defaultValue?: string;
  tabs: Array<{
    name: string;
    children: ReactNode;
  }>;
};

const styles = {
  tabList: {
    background: '#8700FF',
    padding: '8px',
    paddingBottom: 0,
    paddingLeft: '16px',
  },
  tabHeader: (condition: boolean) => {
    return condition ? { background: 'white' } : { color: 'white' };
  },
};

const MyTabs = ({ tabs, defaultValue }: MyTabsProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string | null>(
    id ? id : defaultValue
  );

  useEffect(() => {
    setActiveTab(id);
  }, [id]);

  return (
    <Tabs
      variant="outline"
      value={activeTab}
      onTabChange={(value) => {
        console.log('🚀 ~ file: Tabs.tsx:41 ~ MyTabs ~ value:', value);
        navigate(`/dashboards/${value}`);
      }}
    >
      <Tabs.List sx={styles.tabList}>
        {tabs.map((t) => (
          <Tabs.Tab
            sx={styles.tabHeader(t.name === activeTab)}
            key={t.name}
            value={t.name}
          >
            {t.name}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.map((t) => (
        <Tabs.Panel key={t.name} value={t.name} pt="xs">
          {t.children}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default MyTabs;
