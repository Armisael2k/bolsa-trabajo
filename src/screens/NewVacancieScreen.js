import { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Box, Text, VStack } from 'native-base';
import { TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import Toast from 'react-native-toast-message';
import Button from '../components/Button';

export default function NewVacancieScreen({ navigation }) {
  const richTextRef = useRef();
  const [vacancie, setVacancie] = useState('');
  const [company, setCompany] = useState('');
  const [content, setContent] = useState('');

  const handleRegister = () => {
    if (vacancie.trim() == '')
      return Toast.show({ type: 'error', text1: 'ERROR', text2: 'Ingresa el nombre de la vacante' });
    if (company.trim() == '')
      return Toast.show({ type: 'error', text1: 'ERROR', text2: 'Ingresa el nombre de la empresa' });
    if (!content.replace(/(<([^>]+)>)/ig, '').length)
      return Toast.show({ type: 'error', text1: 'ERROR', text2: 'Ingresa el contenido de la vacante' });
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box justifyContent="center" marginX={2} marginTop={5}>
        <Text textAlign="center" fontWeight="700" fontSize={20}>Registrar nueva vacante</Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            padding: 10
          }}
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={30} color="#131416"/>
        </TouchableOpacity>
      </Box>
      <VStack style={styles.inputsContainer}>
        <TextInput
          style={[styles.input, {marginTop: 10}]}
          placeholder="Vacante"
          placeholderTextColor="#646463"
          underlineColorAndroid="transparent"
          value={vacancie}
          onChangeText={text => setVacancie(text)}
        />
        <TextInput
          style={[styles.input, {marginTop: 20}]}
          placeholder="Empresa"
          placeholderTextColor="#646463"
          underlineColorAndroid="transparent"
          value={company}
          onChangeText={text => setCompany(text)}
        />
        <Box style={styles.richScrollContainer}>
          <RichToolbar
            style={{
              backgroundColor: 'transparent',
              alignItems: 'flex-start'
            }}
            editor={richTextRef}
            actions={[ actions.keyboard, actions.setBold, actions.setItalic, actions.setUnderline, actions.insertBulletsList, actions.insertOrderedList, actions.undo, actions.redo ]}
            selectedIconTint="#000"
          />
          <RichEditor
            placeholder="Contenido..."
            onChange={content => setContent(content)}
            editorStyle={{
              backgroundColor: '#fff',
            }}
            containerStyle={{
              flexGrow: 1,
              borderRadius: 10
            }}
            useContainer={false}
            ref={richTextRef}
          />
        </Box>
      </VStack>
      <Button
        style={styles.buttonRegistrar}
        label="Registrar"
        onPress={handleRegister}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    marginHorizontal: 20,
    marginTop: 40,
    flexGrow: 1,
  },
  input: {
    backgroundColor: '#d5e5d3',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 20,
    fontWeight: '500'
  },
  richScrollContainer: {
    flexGrow: 1,
    backgroundColor: '#d5e5d3',
    paddingBottom: 20,
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonRegistrar: {
    margin: 20,
  }
});