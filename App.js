import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";

import LienItem from "./components/LienItem";
import LienInput from "./components/LienInput";

export default function App() {
  
  const [listeLiens, setListeLien] = useState([]);

  function ajoutLienHandler(lienTexteSaisie) {
    //console.log(lienTexteSaisie);
    setListeLien((currentListeLiens) => [
      ...listeLiens,
      { text: lienTexteSaisie, id: Math.random().toString() },
    ]);
   
  }
  function supprimerLienHandler(id){
    setListeLien((currentListeLiens) => {
      return currentListeLiens.filtter((lien) => lien.id !==id);
    })}
  
  function LienInputhandler(textSaisie) {
    console.log(textSaisie);
    SetLientexteSaisie(textSaisie);
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/icon.png")}
        style={{ width: 100, height: 100, marginBottom: 20}}
      
      />
     {/*  <View style={styles.inputContainer}>
        <TextInput
          placeholder="=nouveau ..."
          style={styles.inputLien}
          onChangeText={LienInputhandler}
          value={lienTexteSaisie}
        />

        <Button title="Ajouter un lien" onPress={ajoutLienhandler} />
      </View>*/}
      <View> 
        {/* {listeLiens.map((lien) =><text key ={lien}>{lien}</text>)} */}
      </View>

      <LienInput  ajoutLien={ajoutLienHandler} />
      <View style={styles.lienContainer}>
        <Text>Liste des lien..</Text>

        <FlatList
          data={listeLiens}
          KeyExtractor={(item, index) => {
            return (item.id);
          }}
          renderItem={(itemData) => {
            return (<LienItem text={itemData.item.text}  id={itemData.item.id}
              onSupprimerItem={supprimerLienHandler}/>);
          }}
        />
      </View>
    </View>
  );
        
        }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    borderColor: "red",
    borderWidth: 2,
  },

  lienContainer: {
    //flex:3
    height: 80,
    borderColor: "green",
    borderWidth: 2,
  },
});
