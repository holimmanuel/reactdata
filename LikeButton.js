import React, { Component } from 'react'
import { TouchableOpacity,Image,Text, View,StyleSheet } from 'react-native'

export default class LikeButton extends Component {

  
    render() {
        return (
            <TouchableOpacity  onPress={()=> {this.props.actionClick(this.props.urutan)}}>
            {
            
            this.props.jenis ===1? <Image style={styles.tinyLogo} source={{uri: 'https://mediacause.com/wp-content/uploads/dislike.jpg'}}/>
            : 
            <Image style={styles.tinyLogo} source={{uri: 'https://facebookbrand.com/wp-content/uploads/2016/05/thumb_icon_header_image_05_2018.png'}}
          />
            
            
            } 
            
            
           
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  