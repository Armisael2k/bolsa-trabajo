import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { format, parseISO , setDefaultOptions } from 'date-fns';
import { es } from 'date-fns/locale';
import { StyleSheet, TouchableOpacity  } from "react-native";
import { Box, Text, ScrollView, Spinner, HStack, Heading } from "native-base";
import { Shadow } from 'react-native-shadow-2';
import { AntDesign } from '@expo/vector-icons';
import pluralize from 'pluralize';
import * as NavigationBar from 'expo-navigation-bar';
import axios from 'axios';
setDefaultOptions({ locale: es });

function Vacancie({vacancieName, organizationName, publisherName, date}){
  return (
    <Box
      style={stylesVacancies.container}
    >
      <Shadow
        stretch={true}
        startColor="rgba(0,0,0,0.05)"
        endColor="rgba(0,0,0,0)"
        offset={[0, 5]}
        distance={10}
      >
        <Box style={stylesVacancies.textContainer}>
          <Text
            style={stylesVacancies.nameText}
          >{vacancieName}</Text>
          <Text
            style={stylesVacancies.orgText}
          >{organizationName}</Text>
          <Box
            style={stylesVacancies.bottomTextContainer}
          >
            <Text
              style={[stylesVacancies.bottomText, {marginTop: 10}]}
              >{publisherName}</Text>
            <Text
              style={stylesVacancies.bottomText}
            >{date}</Text>
          </Box>
          <TouchableOpacity
            style={stylesVacancies.buttonEnter}
            activeOpacity={0.7}
          >
            <AntDesign name="doubleright" size={25} color="#fff" />
          </TouchableOpacity>
        </Box>
      </Shadow>
    </Box>
  );
}

function VacanciesLoading() {
  return (
    <HStack space={2} justifyContent="center" alignItems="center">
      <Spinner color="#504f4f" size="lg"/>
      <Heading color="#504f4f" fontSize="lg">
        Cargando vacantes
      </Heading>
    </HStack>
  );
}

function VacanciesContent({ vacancies=[] }) {
  return (
    <>
      <Text
        style={styles.vacanciesCountText}
      >{vacancies.length} {pluralize('vacante', vacancies.length)} {pluralize('abierta', vacancies.length)}</Text>
      <ScrollView
        stickyHeaderIndices={[0]}
        overScrollMode="never"
      >
        <Box>
          <Shadow
            sides={{
              true: false
            }}
            stretch={true}
            endColor="#00000000"
            startColor="#dceade"
            distance={25}
            containerStyle={{
              height: 25,
            }}
          />
        </Box>
        <Box>
          {vacancies.map((vacancie, index) => (
            <Vacancie
              key={index}
              vacancieName={vacancie.name}
              organizationName={vacancie.organization_name}
              publisherName={vacancie.publisher_name}
              date={vacancie.date}
            />
          ))}
        </Box>
      </ScrollView>
    </>
  );
}

export default function VacanciesScreen({ navigation }) {
  const date = format(new Date(), 'dd \'de\' MMMM');
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#dceade");
    setVacancies([]);
    setLoading(true);
    setTimeout(async () => {
      axios({
        method: 'get',
        url: 'http://192.168.0.17:891/api/vacantes',
      })
      .then(function (response) {
        const { data } = response;
        if (data.success) {
          setVacancies(data.result.map(row => ({
              name: row.puesto,
              organization_name: row.empresa,
              publisher_name: row.publicador_nombre,
              date: format(parseISO(row.fecha), 'dd MMM, hh:mm a')
          })));
        }
      })
      .finally(() => setLoading(false));
    }, 500);
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Box
        style={styles.textContainer}
      >
        <Text
          style={styles.greetText}
        >Hola</Text>
        <Text
          style={styles.dateText}
        >{date}</Text>
      </Box>
      <Box
        style={styles.vacanciesScrollContainer}
      >
        { loading ? <VacanciesLoading/> : <VacanciesContent vacancies={vacancies}/> }
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    paddingHorizontal: 25,
    marginTop: 40,
  },
  greetText: {
    fontSize: 30,
    lineHeight: 30,
    color: '#555454',
    fontWeight: '500'
  },
  dateText: {
    fontSize: 25,
    lineHeight: 25,
    color: '#202824',
    fontWeight: '500'
  },
  vacanciesScrollContainer: {
    backgroundColor: '#dceade',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 40,
    marginTop: 50,
    flexGrow: 1,
    flex: 1,
  },
  vacanciesCountText: {
    fontSize: 18,
    lineHeight: 18,
    color: '#504f4f',
    fontWeight: '500',
    marginHorizontal: 30,
  }
});

const stylesVacancies = StyleSheet.create({
  container: {
    marginBottom: 25,
    marginHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  nameText: {
    fontSize: 20,
    lineHeight: 20,
    color: '#131416',
    fontWeight: '800',
  },
  orgText: {
    fontSize: 20,
    lineHeight: 20,
    color: '#1d1d1b',
    fontWeight: '500',
  },
  bottomTextContainer: {
    marginRight: 70,
  },
  bottomText: {
    fontSize: 16,
    lineHeight: 16,
    color: '#504f4f',
    fontWeight: '500',
  },
  buttonEnter: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    padding: 15,
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 50,
    backgroundColor: '#63b76d',
    elevation: 5
  }
});