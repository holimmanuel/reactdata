import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import axios from 'axios';

export class AddDataOrang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nama: '',
      Email: '',
      Nomer: 0,
      Alamat: '',
    };
  }

  handleAdd() {
    // console.log(this.state)
    axios
      .post('http://192.168.123.21:8080/dataorang/addDataOrang', this.state)
      .then(response => {
        // console.log(response)
        alert(response.data);
        this.props.navigation.navigate('App');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}> Nama </Text>
        <TextInput
          placeholder="Nama"
          onChangeText={data => {
            this.setState({Nama: data});
          }}
        />
        <Text style={styles.title}> Email </Text>
        <TextInput
          placeholder="Email"
          onChangeText={data => {
            this.setState({Email: data});
          }}
        />
        <Text style={styles.title}> Nomer </Text>
        <TextInput
          placeholder="Nomer"
          onChangeText={data => {
            this.setState({Nomer: parseInt(data)});
          }}
        />
        <Text style={styles.title}> Alamat </Text>
        <TextInput
          placeholder="Alamat"
          onChangeText={data => {
            this.setState({Alamat: data});
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleAdd.bind(this)}>
          <Text style={styles.title}>Tambahkan Data Orang</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity> */}
      </View>
    );
  }
}

export default AddDataOrang;

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
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
