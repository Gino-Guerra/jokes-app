import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('screen')



const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: '#cc0',
    justifyContent: "space-around",
    alignContent: "center",
},
bigText:{
    fontSize: 40,
    fontWeight: '700',
    color: '#d00',
    textAlign: 'center'

},
punchlineTextHidden:{
fontSize:30,
color: 'white'
},
punchlineBoxHidden:{
    backgroundColor: '#00d',
    width: width,
    height: 104,
    justifyContent: "center",
    alignItems: "center"
},
punchlineText:{
fontSize:30,
color: '#00d',
textAlign: "center"
},
punchlineBox:{
   
    width: width,
    height: 104,
    justifyContent: "center",
    alignItems: "center"
}




})

export default styles