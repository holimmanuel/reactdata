import React, { Component } from 'react'
import { View,StyleSheet, Text,  TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios'
import { parse } from '@babel/core';

export class UpdateBuku extends Component {
    
  constructor(props) {
        super(props);
        this.state = {
            id:this.props.route.params.id,
            judulBuku:this.props.route.params.judulBuku,
            jumlahHalaman:this.props.route.params.jumlahHalaman,
            namaPenulis:this.props.route.params.namaPenulis
        }
    }

    handleUpdate(){
        // console.log(this.state)
        axios.put(`http://192.168.123.21:8080/buku/updateBuku/${this.state.id}`,this.state)
        .then( (response) => {
          // console.log(response)
          alert(response.data)
          this.props.navigation.navigate("App")
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }
    
    render() {
        return (
            <View>
                <Text style={styles.title}> Update Judul Buku </Text>
                <TextInput value={this.state.judulBuku} placeholder="Judul Buku" onChangeText={(data)=>{this.setState({judulBuku:data})}}/>
                <Text style={styles.title}> Update Halaman Buku </Text>
                <TextInput value={String(this.state.jumlahHalaman)} placeholder="Halaman Buku" onChangeonChangeText={(data)=>{this.setState({jumlahHalaman:parseInt(data)})}}/>
                <Text style={styles.title}> Update Nama Penulis </Text>
                <TextInput value={this.state.namaPenulis} placeholder="Nama Penulis" onChangeText={(data)=>{this.setState({namaPenulis:data})}}/>
                <TouchableOpacity style={styles.button} onPress={this.handleUpdate.bind(this)}><Text style={styles.title}>Update Buku</Text></TouchableOpacity>
                {/* <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity> */}
              
            </View>
        )
    }
}

export default UpdateBuku

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });