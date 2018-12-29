import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../styles/colors'
import styles from './styles/LoggedOut';
import RoundedButton from '../components/button/RoundedButton'

export default class LoggedOut extends React.Component {

  onFacebookPress = () => {
    alert('adsad')
  }

  onCreateAccountPress = () => {
    alert('asdsdsadsa')
  }

  onMoreOptionsPress () {
    alert('More Options')
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require('../../assets/images/airbnb-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
          <RoundedButton 
            text='Continue with Facebook'
            background={colors.white}
            textColor={colors.green}
            icon={<FontAwesome name="facebook" size={20} color={colors.green} style={styles.facebookButtonIcon}/>}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton 
            text='Create Acount'
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />
          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={this.onMoreOptionsPress}
          >
            <Text style={styles.moreOptionsButtonText}>
              More options
            </Text>
          </TouchableHighlight>
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue, Create Account or More
            </Text>
            <Text style={styles.termsText}>
              {' options, '}
            </Text>
            <Text style={styles.termsText}>
              {"I agree to Airbnb's "}
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Terms of Service
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              ,
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Payments Terms of Service
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              ,
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Privacy Policy
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              , and
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Nondiscrimination Policy
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              .
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

