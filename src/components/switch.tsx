import { useState } from "react";
import { Switch, StyleSheet } from "react-native";


const SwitchP = () => {
    const [ativado, setAtivado] = useState(false);
    const toggleAtivado=()=>setAtivado(!ativado)
    return (
        <Switch 
        trackColor={{false:"#E74C3C", true:"#1170A6"}} 
        thumbColor={ativado ? "fff":"fff"}
        value={ativado}
        onValueChange={toggleAtivado}
        style={styles.switch}/>
    )
}
const styles = StyleSheet.create({

    switch: {
      flex:1, 
      justifyContent:"flex-end",
      width: 41,
    }
  })

export default SwitchP;