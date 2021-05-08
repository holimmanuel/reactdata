import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: [],
      Nama: '',
    };
  }

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    this.getData();
  }

  getData = () => {
    //Make a request for a user with a given ID
    axios
      .get(`http://192.168.123.21:8080/dataorang/${this.state.Nama}`)
      .then(response => {
        // console.log(response.data")
        let data = response.data;
        this.setState({data: data});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  deleteData(id) {
    console.log(id);
    axios
      .delete(`http://192.168.123.21:8080/buku/deleteBuku/${id}`)
      .then(response => {
        // console.log(response.data")
        alert(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  //  Item = ({ title }) => (
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{title}</Text>
  //     </View>
  //   );

  renderItem = ({item}) => (
    <View style={{borderWidth: 5, borderColor: 'red'}}>
      <Text style={styles.title}>Nama : {item.Nama}</Text>
      <Text style={styles.title}>Email : {item.Email}</Text>
      <Text style={styles.title}>Nomer : {item.Nomer}</Text>
      <Text style={styles.title}>Alamat : {item.Alamat}</Text>
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('UpdateNama', item);
        }}
        style={styles.button}>
        <Text style={styles.title}>Update DataOrang</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Anda yakin?', 'Saya sih tidak...', [
            {
              text: 'TIDAK',
              onPress: () => console.warn('NO Pressed'),
              style: 'cancel',
            },
            {text: 'YA', onPress: () => this.deleteData(item.id)},
          ]);
        }}
        style={styles.button}>
        <Text style={styles.title}>Delete Nama</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AddDataOrang');
          }}
          style={styles.button}>
          <Text style={styles.title}>Tambahkan Data</Text>
        </TouchableOpacity>
        <TextInput
          TextInput
          placeholder="Cari Data Orang"
          onChangeText={data => {
            this.setState({namaBuku: data});
          }}
        />
        {/* <TouchableOpacity onPress={this.getData.bind(this)} style={styles.button}><Text style={styles.title}>Cari</Text></TouchableOpacity> */}

        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
