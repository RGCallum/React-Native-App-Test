import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/IndiaGPic3.jpg')
                  : require('../assets/images/IndiaGPic3.jpg')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {/* {this._maybeRenderDevelopmentModeWarning()} */}

            <Text style={styles.getStartedText}>Rashaunda's React Native App</Text>
            
{/* <Image
                  source={
                    __DEV__
                  ? require('../assets/images/blueFlower.jpeg')
                  : require('../assets/images/blueFlower.jpeg')

            }
/> */}
            {/* <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View> */}

            <Text style={styles.getStartedText}>
              WTF is up World :), showing on that Android phone! Yep!! Below are a few links to my awesome work!

            </Text>
            
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleGamePress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Major Keys Game!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._handleSceneItPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>SceneIt Pictures Website</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._handlePicListPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>PicList Photographer Database</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._handleNoBuPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>NoBu Filmmakers Database</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._handleRGCallumPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Rashaunda Portfolio Page</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>

        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View> */}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleGamePress = () => {
    WebBrowser.openBrowserAsync(
      'https://flamboyant-lichterman-f9a2cd.netlify.com/'
    );
  };
  _handleSceneItPress = () => {
    WebBrowser.openBrowserAsync(
      'https://sharp-fermat-910ea8.netlify.com/index.html'
    );
  };
  _handlePicListPress = () => {
    WebBrowser.openBrowserAsync(
      'https://gentle-lake-52243.herokuapp.com/'
    );
  };
  _handleNoBuPress = () => {
    WebBrowser.openBrowserAsync(
      'https://nobu-filmmakers.herokuapp.com/'
    );
  };
  _handleRGCallumPress = () => {
    WebBrowser.openBrowserAsync(
      'https://rgcallum.github.io/'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
