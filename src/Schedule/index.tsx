import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';

interface ObjectItem {
  name: string,
}


function timeToString(time: string) {
  const date = new Date(time);

  return date.toISOString().split('T')[0];
};

export default function Schedule() {
  const [items, setItems] = useState({});

  function loadItems(day: any) {

    setItems({
      '2020-07-18': [{ name: 'item 1 - any js object abc' }],
    })

  };

  const renderItem = (item: ObjectItem) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={(month) => { loadItems(month) }}
        selected={'2020-07-18'}
        renderItem={(day: ObjectItem) => renderItem(day)}
        renderEmptyDate={() => { return (<View />); }}
        rowHasChanged={(r1, r2) => { return r1.name !== r2.name }}
        markingType={'multi-dot'}
        markedDates={{
          '2020-07-18': {dots: [{key:'massage', color: 'red', selectedDotColor: 'red'}]},
        }}
      />
    </View>
  );
};
