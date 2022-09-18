import { useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Box, Text, VStack, ScrollView } from 'native-base';
import { TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";

export default function NewVacancieScreen() {
  const richTextRef = useRef();
  
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
        />
        <TextInput
          style={[styles.input, {marginTop: 20}]}
          placeholder="Empresa"
          placeholderTextColor="#646463"
          underlineColorAndroid="transparent"
        />
        <Box style={styles.richScrollContainer}>
          <RichToolbar
            style={{
              backgroundColor: 'transparent',
              alignItems: 'flex-start'
            }}
            editor={richTextRef}
            actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1 ]}
            // iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
          />
          <RichEditor
            editorStyle={{
              backgroundColor: '#fff',
            }}
            containerStyle={{
              flexGrow: 1,
              borderRadius: 50  
            }}
            useContainer={false}
            ref={richTextRef}
          />
        </Box>
      </VStack>
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
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  }
});