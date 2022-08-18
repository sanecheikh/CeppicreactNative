import { useState } from 'react';
import { StyleSheet, Text, View ,ScrollView,TextInput,Image,FlatList} from 'react-native';
import { Button } from 'react-native-web';


export default function App() {
  const [lienTexteSaisie,SetLientexteSaisie] = useState("");
  const [listeLiens,setListeLien]= useState([]);
  const _renderItem = ({ item }) => <Text>{item.title}</Text>
  function ajoutLienhandler(){
    //console.log(lienTexteSaisie);
    setListeLien ([...lienTexteSaisie ,lienTexteSaisie]);
  }
  function LienInputhandler(textSaisie){
    console.log(textSaisie);
    SetLientexteSaisie(textSaisie,textSaisie);
  }
  return (
    
    <View style={styles.container}>
       <Image 
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require('./assets/icon.png')}
        />
      <View style= {styles.inputContainer}>  
       <TextInput placeholder='=nouveau ...'
       style={styles.inputLien} onChangeText=
       {LienInputhandler} value={lienTexteSaisie}/>
     
      <Button title="Ajouter un lien" onPress= {ajoutLienhandler}/>
      
    </View>
    <ScrollView>
      {listeLiens.map((lien) =><text key ={lien}>{lien}</text>)}
    </ScrollView>
    <View style = { styles.liencontainer}>
    <Text>Liste des lien..</Text>
    </View>
    
    <View>
       
      </View>

    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderColor:'red',
    borderWidth:2,
  },
  inputLien: {
    borderColor: "grey",
    borderWidth:1,
    padding:8,
    width:"70%"

  },
  inputContainer:{
    flex:1,
    flexDirection: "row",
    alignItems:'center',
   
  },
  liencontainer:{
    //flex:3
    height:80,
    borderColor:'green',
    borderWidth:2,
  }


 

});
