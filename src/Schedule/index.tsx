import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar, IconButton } from 'react-native-paper';

interface IObjectItem {
  name: string,
}

export default function Schedule() {
  const [date, setDate] = useState('2020-07-25')
  const [items, setItems] = useState({});
  
  useEffect(() => {
    setItems({
      '2020-07-25': [{ name: 'item 1 - any js object abc' }, { name: 'item 2 - any js object abc' }],
    })
  }, []);

  async function handleNewCadastro() {
    let day = items[date];

    
    if (day === undefined) {
      day = [{name: 'item 3 - any js object abc'}];
    } else {
      day.push({name: 'item 3 - any js object abc'});
    }
    
    setItems((old) => ({ ...old, day}));
  }

  function renderItem(item: any) {
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
        selected={date}
        renderItem={(item) => renderItem(item)}
        onDayPress={(day)=>{setDate(day.dateString)}}
        renderEmptyDate={() => { return (<View />); }}    
        rowHasChanged={(r1, r2) => { return r1 !== r2 }}
        markingType={'multi-dot'}      
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