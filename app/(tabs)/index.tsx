import { TitlePage } from '@/components/TitlePage';
import { MonthSchedule } from '@/components/MonthSchedule';


import { fetchData } from '@/db/calendarDb';
import { Data } from '@/db/interfaceDb';
import { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Calendar() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = 'https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge';

    fetchData(url)
      .then(resp => {
        setData(resp);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <TitlePage />
      <FlatList 
        data={data?.calendar}
        renderItem={({ item, index }) => (
          <MonthSchedule month={item['month']} year={item['year']} actions={item['actions']} key={index}/>
        )}
      />
    </SafeAreaView>
  );
}