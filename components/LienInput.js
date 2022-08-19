import { StyleSheet,Text, TextInput,Button, View } from "react-native"
import { useState } from "react";

export default function LienInput(props){
    const [lienTexteSaisie, setLientexteSaisie] = useState("");
    function lienInputHandler(textSaisie) {
        setLientexteSaisie(textSaisie);
      }
function ajoutLienHandler(params) {
    props.ajoutLien(lienTexteSaisie);
    setLientexteSaisie('');
}
     
        
    return(
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="=nouveau ..."
          style={styles.inputLien}
          onChangeText={lienInputHandler}
          value={lienTexteSaisie}
        />

        <Button title="Ajouter un lien" onPress={ajoutLienHandler} />
      </View>
    )
    }
    const styles = StyleSheet.create({
       
        inputLien: {
          borderColor: "grey",
          borderWidth: 1,
          padding: 8,
         
        },
        inputContainer: {
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          alignItems: "center",
          justifyContent: 'space-between',
          paddingBottom: 14
        },
        
      });
      
        