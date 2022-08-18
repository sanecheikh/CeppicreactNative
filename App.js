import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import { Button } from 'react-native-web';


export default function App() {
  const [lienTexteSaisie,SetLientexteSaisie] = useState("");
  const [listeLiens,setlistelien]= useState([]);
  function ajoutLienhandler(){
    //console.log(lienTexteSaisie);
    setListeLiens ([...lienTexteSaisie]);
  }
  function LienInputhandler(textSaisie){
    console.log(textSaisie);
    SetLientexteSaisie(textSaisie);
  }
  return (
    <View style={styles.container}>
      <View style= {styles.inputContainer}>  
       <TextInput placeholder='=nouveau ...'
       style={styles.inputLien} onChangeText=
       {LienInputhandler}/>
     
      <Button title="Ajouter un lien" onPress= {ajoutLienhandler}/>
      
    </View>
    <view>
      {listeLiens.map((lien) =><text key ={lien}>{lien}</text>)}
    </view>
    <View style = { styles.liencontainer}>
    <Text>Liste des lien..</Text>
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
    flex:3
  }


 

});
