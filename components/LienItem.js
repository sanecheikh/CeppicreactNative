import { Pressable, StyleSheet,Text,  View } from "react-native"

export default function LienItem(props){
    console.log(props.id);
    return(
        <Pressable onPress={props.onSupprimerItem.bind(this,props.id)}>
        <View style={styles.LienItem}>
        <Text style={styles.lienText}>{props.text}</Text>
        </View>
        </Pressable>
        );
    }
    const styles = StyleSheet.create({
        LienItem:{
            backgroundcolor:"#edcedc",
            marginTop:20,
            padding:8,
        },
        lienText:{
            color:"#ggg"
        }
    });
