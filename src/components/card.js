import { Link } from "@react-navigation/native";
import { Image, Text, View, TouchableOpacity, Dimensions, StyleSheet } from "react-native"


const imageURL = 'https://api.otaviolube.com';

const MAX_WIDTH = Dimensions.get('window').width * 0.9
const MAX_HEIGHT = Dimensions.get('window').height * 0.9


export default function Movies({ filme }) {
  return (
    <View style={styles.container}>

      <Image style={styles.poster} source={{ uri: imageURL + filme.poster.data.attributes.formats.small.url }}></Image>
      <Text style={styles.titulo} >{filme.titulo}</Text>
      <Text style={styles.sinopse}>Sinopse: {filme.sinopse.length > 200 ? filme.sinopse.substring(0, 200) + "..." : filme.sinopse}</Text>
      <Link to={{ screen: 'MoviesDetailsPage', params: { filme: filme } }} style={styles.buttonLink} >Saiba mais...</Link>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#ffcb77',
    margin: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: MAX_HEIGHT,
    width: MAX_WIDTH
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },


  sinopse: {
    color: 'black',
    textAlign: 'justify',
    marginBottom: 10,
  },

  poster: {
    width: '150px',
    height: '200px',
    marginTop: 10,
    resizeMode: 'cover'
  },

  buttonLink: {
    height: 50,
    width: '70%',
    borderRadius: 5,
    backgroundColor: 'black',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  button: {
    border: '2px solid black',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },


});