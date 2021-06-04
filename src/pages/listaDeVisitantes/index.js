import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { Container, Add, List, Button, Form, Text, RowBack, RowFront, BackRightButton, DeleteButton, DeleteText } from './styles';

import AdicionarModificarListaDeVisitantes from '../adicionarModificarListaDeVisitantes';

import { useVisitante } from '../../hooks/visitante';
import { useLista } from '../../hooks/lista';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
import Plus from 'react-native-vector-icons/Octicons';
Plus.loadFont();

const CriarListaDeVisitantes = ({ navigation }) => {

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ isFetching, setIsFetching ] = useState(false);

  const [ uids, setUids ] = useState([]);
  const [ nome, setNome ] = useState('');
  const [ id, setId ] = useState('');
  const [ rm, setRm ] = useState('');

  const { visitantes, getUsers } = useVisitante();
  const { getLists, lists, deleteList } = useLista();

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
      getUsers();
      getLists();
    });
    return unsubscribe;
  }, [navigation]);

  function update() {
    getLists();
    setIsFetching(false);
  }

  function closeAllRows() {
    for(var i = 0; i < lists.length; i++)
      rm[lists[i].uid].closeRow();
  }

  function modify(item) {
    var array = JSON.parse("[" + item.ids + "]");
    setUids(array);
    setNome(item.name);
    setId(item.uid);
    setModalVisible(true);
    closeAllRows();
  }

  function create() {
    setUids([]);
    setNome('');
    setId('');
    setModalVisible(true);
    closeAllRows();
  }

  function deleteItem(uid) {
    deleteList(uid);
    setTimeout(() =>  {
      getLists();
    }, 250);
  }

  return(
    <>
      <Container>
        <List
          disableRightSwipe
          data={lists}
          refreshing={isFetching}
          onRefresh={ () => update() }
          renderItem={({ item }, rowMap) => {
            if(rm === '')
              setRm(rowMap);

            return(
              <RowFront>
                <Button onPress={ () => modify(item) } >
                  <Form>
                    <Text> { item.name } </Text>
                    <Icon name='arrow-right' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
                  </Form>
                </Button>
              </RowFront>
            )
          }}
          renderHiddenItem={ ({ item }, rowMap) => (
            <RowBack>
              <BackRightButton>
                <DeleteButton onPress={ () => { deleteItem(item.uid); rowMap[item.uid].closeRow() }}>
                  <DeleteText>Apagar</DeleteText>
                </DeleteButton>
              </BackRightButton>
            </RowBack>
          )}
          rightOpenValue={-100}
          keyExtractor={item => item.uid}
        />
        <AdicionarModificarListaDeVisitantes modalVisible={modalVisible} setModalVisible={setModalVisible} visitantes={visitantes} nome={nome} setNome={setNome} uids={uids} setUids={setUids} id={id} />
      </Container>
      <Add onPress={ () => create() } >
        <Plus name='plus' size={ 20 } color='#FFF' />
      </Add>
    </>
  );
}

export default CriarListaDeVisitantes;
