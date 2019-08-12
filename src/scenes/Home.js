/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component,Fragment} from 'react';
import {
  StatusBar,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Pokemon from '../services/Pokemon';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Home extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	pokemonList: []
    }

  }

  componentDidMount() {

		Pokemon.getPokemonList().then((result) => {
			this.setState({
				pokemonList:result.data.pokemons
			});
		})
  }

	render() {
		let pokemons = [];
		this.state.pokemonList.map((item) => {
			pokemons.push(
				<View style={styles.pokemon}>
					<Text>{item.name}</Text>
				</View>
			);
		});

	  return (
	  <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
		    <ScrollView
		      contentInsetAdjustmentBehavior="automatic"
		      style={styles.scrollView}>

		      <View style={styles.header}>
	          <Text style={styles.appTitle}>Poketalog</Text>
	        </View>

	        <View style={styles.mainBlock}>
		        {pokemons}
		      </View>
		    </ScrollView>
	    </SafeAreaView>
    </Fragment>
	  );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  header: {
  	backgroundColor: '#E51C23',
  	padding: 15,
  },
  appTitle: {
  	textAlign: 'center',
  	color: Colors.white,
  	fontWeight: 'bold',
  },
  mainBlock: {
    padding: 15,
    backgroundColor:'#eeeeee'
  },
  pokemon: {
  	width:'32%',
  	margin:3,
  	float:left,
  	borderRadius:3,
  	backgroundColor:'#ffffff',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
});