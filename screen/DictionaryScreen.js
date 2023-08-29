import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import Icon from 'react-native-vector-icons/FontAwesome';

import dictionaryData from './words.json';

const DictionaryScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const modalizeRef = React.createRef();

  useEffect(() => {
  if (searchTerm.length > 1) {
    searchWords();
  } else {
    setSearchResults([]);
  }
}, [searchTerm]);


 const searchWords = () => {
  const filteredResults = dictionaryData.filter(item =>
    item.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  filteredResults.sort((a, b,x,y) => {
    const aIndex = a.word.toLowerCase().indexOf(searchTerm.toLowerCase());
    const bIndex = b.word.toLowerCase().indexOf(searchTerm.toLowerCase());
  
    if (aIndex < bIndex )   return -1;
    if (aIndex > bIndex) return 1;
    return 0;
  });

  setSearchResults(filteredResults);
};

  const openModal = (words) => {
    setSelectedWord(words);
    modalizeRef.current?.open();
  };

  const renderModalContent = () => (
    <View style={styles.modalContent}>
    <TouchableOpacity style={styles.closeButton} onPress={() => modalizeRef.current?.close()}>
        <Icon name="times" size={20} color="gray" /> 
      </TouchableOpacity>
      {selectedWord && (
        <>
          <Text style={styles.modalGermanText}>{selectedWord.word}</Text>
          <Text style={styles.modalTurkishText}>{selectedWord.meaning}</Text>
        </>
      )}
      
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

{searchResults.length === 0 ? (
   <FlatList
  data={dictionaryData}
  keyExtractor={(item) => item.id?.toString()} 
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
      <Text style={styles.germanText}>{item.word}</Text>
    </TouchableOpacity>
  )}

/> 
  ) : (

 <FlatList
data={searchResults}
keyExtractor={(item) => item.id?.toString()} 
renderItem={({ item }) => (
  <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
    <Text style={styles.germanText}>{item.word}</Text>
  </TouchableOpacity>
)}
/> 
  )
}
      <Modalize ref={modalizeRef} snapPoint={200}>
        {renderModalContent()}
      </Modalize>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    marginTop: 40,
  },
  input: {
    width: '100%',
    height: 45,
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: 'gray',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalGermanText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 13,
    textAlign: 'center',
  },
  modalTurkishText: {
    fontSize: 18,
    textAlign: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});
 

export default DictionaryScreen;

