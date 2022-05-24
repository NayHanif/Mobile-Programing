import React, {useReducer, useEffect, useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, TextInput, SafeAreaView, ScrollView, StatusBar, FlatList, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

const initialState = {
  counter: 0,
  jenisKelamin:0,
  beratBadan: 0,
  tinggiBadan:0,
}
const reducer = (state,action) => {
  switch(action.type){
    case 'TAMBAH_SERATUS':
      return {counter:  state.counter + 100}
    case 'TAMBAH_DUARATUS':
      return {counter: state.counter + 250}
    case 'TAMBAH_ENAMRATUS':
      return {counter: state.counter + 600}
    case 'RESET':
      return {counter: state.counter * 0}
    case 'WOMAN':
      return {jenisKelamin: state.jenisKelamin - 2.097}
    case 'MAN':
      return {jenisKelamin: state.jenisKelamin + 2.447}
  }
}

const App = () => {
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />          
          <Stack.Screen name="Kalkulator" component={Kalkulator} />  
          <Stack.Screen name="Informasi" component={Informasi} />  
          <Stack.Screen name="Saya" component={Saya} />  
        </Stack.Navigator>
      </NavigationContainer>
  );
}


//MENU HOMESCREEN
const HomeScreen = ({navigation}) => {
  //const [counter, setCounter] = useState(0);
  const [state,dispatch] = useReducer(reducer,initialState);
  const tambah1 = () => {
    dispatch({type:'TAMBAH_SERATUS'})
  }
  const tambah2 = () => {
    dispatch({type:'TAMBAH_DUARATUS'})
  }
  const tambah3 = () => {
    dispatch({type:'TAMBAH_ENAMRATUS'})
  }
  const reset = () => {
    dispatch({type:'RESET'})
  }
  const woman = () => {
    dispatch({type:'WOMAN'})
  }
  const man = () => {
    dispatch({type:'MAN'})
  }
  return (
    <View style={{flex:1}}>
      <View style={{flex:3, backgroundColor:"#DFEDF2",alignItems:'center',}}>
        <View style={styles.container}>
         <Text style={{fontSize:20, color:'#517fa4', fontWeight:'bolder', padding:20}}>SUDAH MINUM HARI INI?</Text>
          <MaterialCommunityIcons
            name="cup-water" 
            size={200} 
            color="#517fa4" />
          <Text style={{fontSize:20, color:'#517fa4', fontWeight:'bolder', padding:20}}>{state.counter} ml</Text>
          <MaterialCommunityIcons
            name="reload" 
            size={40} 
            color="#517fa4" 
            onPress={reset}
            />
            <Text style={[styles.tulisan,{marginLeft:0, color:'#517fa4'}]}>Reset</Text>
        </View>
      </View>
      <View  style={[styles.kolomObj,{flex:0.6, backgroundColor:"#FFF", justifyContent:'center'}]}>
        <View style={[styles.item, {marginLeft:30}]}>
          <Icon
            reverse
            name='water'
            type='ionicon'
            color='#517fa4'
            onPress={tambah1}
          />
          <Text style={styles.tulisan}>100ml</Text>
        </View>
          <View style={styles.item}>
          <Icon
            reverse
            name='water'
            type='ionicon'
            color='#517fa4'
            onPress={tambah2}
          />
          <Text style={styles.tulisan}>250ml</Text>
        </View>
        <View style={styles.item}>
          <Icon
            reverse
            name='water'
            type='ionicon'
            color='#517fa4'
            onPress={tambah3}
          />
          <Text style={styles.tulisan}>600ml</Text>
        </View>
      </View>
      <View  style={[styles.kolomObj,{flex:0.5, backgroundColor:"#C2E0F2", justifyContent:'center'}]}>
        <View style={[styles.itemNavi]}>
          <MaterialCommunityIcons
            name="water-percent" 
            size={40} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Home')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:8, color:'#FFF'}]}>Check</Text>
        </View>
        <View style={[styles.itemNavi, {marginTop:20}]}>
          <MaterialCommunityIcons
            name="calculator-variant" 
            size={30} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Kalkulator')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:-4, marginTop:7, color:'#FFF'}]}>Calculate</Text>
        </View>
        <View style={[styles.itemNavi, {marginTop:20}]}>
          <MaterialCommunityIcons
            name="note-multiple" 
            size={30} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Informasi')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:7, marginTop:7, color:'#FFF'}]}>Info</Text>
        </View>
        <View style={styles.itemNavi}>
          <MaterialCommunityIcons
            name="human" 
            size={40} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Saya')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:10, marginTop:2, color:'#FFF'}]}>Saya</Text>
        </View>
      </View>
    </View>
  );
}


//TAMPILAN KALKULATOR
const Kalkulator = ({navigation}) => {
  //STATE UNTUK TEXT INPUT
  const [hasil, setHasil] = useState(0);
  const [tampung, setTampung] = useState(0);
  const hitung = () => {
    const hasil1 = (tampung * 30)/1000
      setHasil(hasil1)
  }
  return (
    <View style={{flex:1}}>
        <View style={{flex:1.8, backgroundColor:"#DFEDF2",alignItems:'center',}}>
          <Text style={[styles.tulisan,{fontWeight:'bolder', fontSize:17, marginTop:17}]}>MASUKKAN BERAT BADAN</Text>
          <View style={styles.kolomObj}>
            <View style={{width:'50%'}}>
              <MaterialCommunityIcons
                name="human" 
                size={200} 
                color="#517fa4" 
                />
            </View>
          </View>
        </View>
        <View style={{flex:1.2, backgroundColor:"#DFEDF2",alignItems:'center',}}>
          <View style={[styles.kolomObj, {alignItems:'center'}]}>
            <View style={{}}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder='KG'
                  onChangeText={teks => setTampung(teks)}
                  />
                  <Button color='#517fa4' title='Hitung' onPress={hitung}/>
            </View>
          </View>
        </View>

      <View  style={[styles.kolomObj,{flex:0.6, backgroundColor:"#FFF", justifyContent:'center'}]}>
        <View style={{marginTop:20}}>
            <View style={{width:'100%'}}>
              <Text style={{fontSize:20, fontWeight:'bolder', color:'#517fa4'}}>Kebutuhan harian: {hasil} liter</Text>
            </View>
          </View>        
      </View>

      <View  style={[styles.kolomObj,{flex:0.5, backgroundColor:"#C2E0F2", justifyContent:'center'}]}>
        <View style={[styles.itemNavi]}>
          <MaterialCommunityIcons
            name="water-percent" 
            size={40} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Home')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:8, color:'#FFF'}]}>Check</Text>
        </View>
        <View style={[styles.itemNavi, {marginTop:20}]}>
          <MaterialCommunityIcons
            name="calculator-variant" 
            size={30} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Kalkulator')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:-4, marginTop:7, color:'#FFF'}]}>Calculate</Text>
        </View>
        <View style={[styles.itemNavi, {marginTop:20}]}>
          <MaterialCommunityIcons
            name="note-multiple" 
            size={30} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Informasi')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:7, marginTop:7, color:'#FFF'}]}>Info</Text>
        </View>
        <View style={styles.itemNavi}>
          <MaterialCommunityIcons
            name="human" 
            size={40} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Saya')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:10, marginTop:2, color:'#FFF'}]}>Saya</Text>
        </View>
      </View>
    </View>
  );
}

//TAMPILAN Informasi
const Informasi = ({navigation}) => {

  const [data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
  useEffect(
    () => {
      fetch('http://localhost/backendapp/viewInformasi.php')
      .then( (respon) => respon.json())
      .then((json) => setData(json))
      .catch ((error) => console.error(error))
      .finally( () => setLoading(false))
    },[]
  )
  //SEPARATOR
  const ItemSeparatorView = () => {
    return (
      <View style={{
        height: 3, 
        width: '100%', 
        backgroundColor:'#C2E0F2'}}>    
      </View>
    );
  };
  const getItem = (item) => {
    alert(`id: ${item.id}, Value:${item.value} `)
  };

  return (
    <View style={{flex:1}}>
      <View style={{flex:3.6, backgroundColor:"#DFEDF2",alignItems:'center',}}>
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
                {
                  loading ? <ActivityIndicator/> : (
                    <FlatList
                      ItemSeparatorComponent={ItemSeparatorView}
                      data={data}
                      keyExtractor = {(id) => {id.toString()}}
                      renderItem = {
                        ({item}) => (
                          <View>
                            <Text style={{color:'#517fa4', fontSize:20, fontWeight:'bolder'}}>{item.judul}{'\n'}</Text>
                            <Text style={{color:'#FFF', fontSize:12, fontWeight:'bolder'}}>{item.tanggal}{'\n'}</Text>
                            <Text style={{color:'#517fa4', fontSize:17}}>{item.isi}</Text>
                          </View>
                        )
                      }
                    />
                  )
                }
              </ScrollView>
            </SafeAreaView>
        </View>
      </View>

      <View  style={[styles.kolomObj,{flex:0.5, backgroundColor:"#C2E0F2", justifyContent:'center'}]}>
        <View style={[styles.itemNavi]}>
          <MaterialCommunityIcons
            name="water-percent" 
            size={40} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Home')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:8, color:'#FFF'}]}>Check</Text>
        </View>
        <View style={[styles.itemNavi, {marginTop:20}]}>
          <MaterialCommunityIcons
            name="calculator-variant" 
            size={30} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Kalkulator')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:-4, marginTop:7, color:'#FFF'}]}>Calculate</Text>
        </View>
        <View style={[styles.itemNavi, {marginTop:20}]}>
          <MaterialCommunityIcons
            name="note-multiple" 
            size={30} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Informasi')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:7, marginTop:7, color:'#FFF'}]}>Info</Text>
        </View>
        <View style={styles.itemNavi}>
          <MaterialCommunityIcons
            name="human" 
            size={40} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Saya')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:10, marginTop:2, color:'#FFF'}]}>Saya</Text>
        </View>
      </View>
    </View>
  );
}

//TAMPIL Saya
const Saya = ({navigation}) => {
  const [data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
  useEffect(
    () => {
      fetch('http://localhost/backendapp/viewAkun.php')
      .then( (respon) => respon.json())
      .then((json) => setData(json))
      .catch ((error) => console.error(error))
      .finally( () => setLoading(false))
    },[]
  )
  return (

    <View style={{flex:1}}>
      <View style={{flex:1.8, backgroundColor:"#DFEDF2",alignItems:'center',}}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="face-recognition" 
            size={150} 
            color="#517fa4"
            style={{marginTop:20}} 
            />
            {
              loading ? <ActivityIndicator/> : (
                <FlatList
                  data={data}
                  keyExtractor = {(id) => {id.toString()}}
                  renderItem = {
                    ({item}) => (
                      <Text style={{fontSize:20, fontWeight:'bolder', color:'#517fa4'}}>{item.firstname} {item.lastname}</Text>
                    )
                  }
                />
              )
            }
        </View>
      </View>

      <View  style={[styles.kolomObj,{flex:1.2, backgroundColor:"#DFEDF2", justifyContent:'center'}]}>
        <View style={styles.container}>
              {
                loading ? <ActivityIndicator/> : (
                  <FlatList
                    data={data}
                    keyExtractor = {(id) => {id.toString()}}
                    renderItem = {
                      ({item}) => (
                        <View style={{alignItems:'center'}}>
                          <Text style={{fontSize:20, fontWeight:'bolder', color:'#517fa4',}}>Tinggi: {item.tinggi}</Text>
                          <Text style={{fontSize:20, fontWeight:'bolder', color:'#517fa4',}}>Berat: {item.berat}</Text>
                        </View>
                      )
                    }
                  />
                )
              }
        </View>
      </View>

      <View  style={[styles.kolomObj,{flex:0.6, backgroundColor:"#FFF", justifyContent:'center'}]}>
        <View style={styles.container}>
              {
                loading ? <ActivityIndicator/> : (
                  <FlatList
                    data={data}
                    keyExtractor = {(id) => {id.toString()}}
                    renderItem = {
                      ({item}) => (
                        <View style={{alignItems:'center'}}>
                          <Text style={{fontSize:20, fontWeight:'bolder', color:'#517fa4', marginTop:20}}>
                          Kebutuhan Air mu: {item.kebutuhan} ml
                          </Text>
                        </View>
                      )
                    }
                  />
                )
              }
        </View>          
      </View>

      <View  style={[styles.kolomObj,{flex:0.5, backgroundColor:"#C2E0F2", justifyContent:'center'}]}>
        <View style={[styles.itemNavi]}>
          <MaterialCommunityIcons
            name="water-percent" 
            size={40} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Home')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:8, color:'#FFF'}]}>Check</Text>
        </View>
        <View style={[styles.itemNavi, {marginTop:20}]}>
          <MaterialCommunityIcons
            name="calculator-variant" 
            size={30} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Kalkulator')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:-4, marginTop:7, color:'#FFF'}]}>Calculate</Text>
        </View>
        <View style={[styles.itemNavi, {marginTop:20}]}>
          <MaterialCommunityIcons
            name="note-multiple" 
            size={30} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Informasi')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:7, marginTop:7, color:'#FFF'}]}>Info</Text>
        </View>
        <View style={styles.itemNavi}>
          <MaterialCommunityIcons
            name="human" 
            size={40} 
            color="#FFF" 
            onPress={()=> navigation.navigate('Saya')}
            />
            <Text style={[styles.tulisan,{fontSize:10, marginLeft:10, marginTop:2, color:'#FFF'}]}>Saya</Text>
        </View>
      </View>
    </View>
  );
}

//Untuk Navigasi

export default App;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  tombol: {
    width: 200,
    margin: 10,
    justifyContent: 'center',
  },
  angka: {
    fontSize: 300,
  },
  kolomObj: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    paddingLeft:20
  },
  item: {
    width: '30%' // is 50% of container width
  },
  itemNavi: {
    marginTop:15,
    width: '25%' // is 50% of container width
  },
  tulisan: {
    marginLeft: 13,
    color: '#517fa4',
  },
  textInputStyle: {
    color:'white',
    borderColor:'white',
    borderWidth: 2,
    height: 100,
    alignItems:'center',
    fontSize:20,
  },
});