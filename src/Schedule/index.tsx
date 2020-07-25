import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar, IconButton } from 'react-native-paper';

interface IObjectItem {
  name: string,
}


function timeToString(time: string) {
  const date = new Date(time);

  return date.toISOString().split('T')[0];
};

export default function Schedule() {

  const [items, setItems] = useState({});
  const [reloadPage, setReloadPage] = useState(false);

  useEffect(() => {
    setItems({
      '2020-07-25': [{ name: 'item 1 - any js object abc' }, { name: 'item 2 - any js object abc' }],
    })
  }, []);

  useEffect(() => {
    console.log('teste')
  }, [reloadPage]);

  function loadItems(day: any) {
    console.log('tryLoadItens');
  };

  function handleNewCadastro() {
    let newArray = items;

    newArray['2020-07-25'].push({name: 'item 3 - any js object abc'});

    setItems(newArray);
    setReloadPage(reloadPage === true ? false : true );
  }

  function tryRenderDay(day: any, item: any) {
    console.log(day);
    console.log(item);
    return <View />
  }

  const renderItem = (item: IObjectItem) => {
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
              <Avatar.Text label="J"/>
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
        selected={'2020-07-25'}
        renderDay={(day, item) => tryRenderDay(day, item)}
        renderItem={(day: IObjectItem) => renderItem(day)}
        renderEmptyDate={() => { return (<View />); }}
        rowHasChanged={(r1, r2) => { return r1 !== r2 }}
        onDayChange={(day)=>{console.log('day changed')}}
        markingType={'multi-dot'}
        markedDates={{
          '2020-07-18': { dots: [{ key: 'massage', color: 'red', selectedDotColor: 'red' }] },
        }}
      />
      <IconButton style={style.floatButton}
        icon={require('../../assets/plus-circle.png')}
        color={'blue'}
        size={50}
        onPress={() => handleNewCadastro()}
      />
    </View>
  );
};


const style = StyleSheet.create({
  floatButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  }

})