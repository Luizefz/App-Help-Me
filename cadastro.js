import React from 'react';
import {
  ButtonSolid,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { StatusBar, StyleSheet, Text } from 'react-native';

const CadastroScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={[
        styles.screen,
        {
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.background,
        },
      ]}
      hasSafeArea={true}
    >
      <Text style={[styles.TextkS, { color: theme.colors.strong }]}>
        {'Help Me'}
      </Text>

      <Text style={[styles.Textvt, { color: theme.colors.strong }]}>
        {'Realize o cadastro para continuar.'}
      </Text>

      <Text
        style={[styles.TextIb, { color: theme.colors.strong }]}
        ellipsizeMode="head"
      >
        {'Nome'}
      </Text>
      <TextInput
        onChangeText={textInputValue => {
          try {
            setTextInputValue(textInputValue);
          } catch (err) {
            console.error(err);
          }
        }}
        style={[
          styles.TextInputQM,
          {
            borderColor: theme.colors.divider,
            backgroundColor: theme.colors.light,
            color: theme.colors.strong,
          },
        ]}
        placeholder="Digite seu nome"
        value={textInputValue}
        clearButtonMode="never"
        placeholderTextColor={theme.colors.medium}
        autoFocus={false}
        clearTextOnFocus={false}
        secureTextEntry={false}
        autoCapitalize="words"
        underlineColorAndroid={theme.colors.secondary}
      />
      <Text
        style={[styles.Textik, { color: theme.colors.strong }]}
        ellipsizeMode="head"
      >
        {'Email'}
      </Text>
      <TextInput
        onChangeText={textInputValue => {
          try {
            setTextInputValue(textInputValue);
          } catch (err) {
            console.error(err);
          }
        }}
        style={[
          styles.TextInputoU,
          {
            borderColor: theme.colors.divider,
            backgroundColor: theme.colors.light,
            color: theme.colors.strong,
          },
        ]}
        placeholder="exemplo@email.com"
        value={textInputValue}
        clearButtonMode="never"
        placeholderTextColor={theme.colors.medium}
        autoFocus={false}
        clearTextOnFocus={false}
        secureTextEntry={false}
        keyboardType="email-address"
        multiline={false}
        scrollEnabled={false}
        underlineColorAndroid={theme.colors.secondary}
      />
      <Text
        style={[styles.TextiI, { color: theme.colors.strong }]}
        ellipsizeMode="head"
      >
        {'Município\n'}
      </Text>
      <TextInput
        onChangeText={textInputValue => {
          try {
            setTextInputValue(textInputValue);
          } catch (err) {
            console.error(err);
          }
        }}
        style={[
          styles.TextInputFH,
          {
            borderColor: theme.colors.divider,
            backgroundColor: theme.colors.light,
            color: theme.colors.strong,
          },
        ]}
        placeholder="Digite o seu município"
        value={textInputValue}
        clearButtonMode="never"
        placeholderTextColor={theme.colors.medium}
        autoFocus={false}
        clearTextOnFocus={false}
        secureTextEntry={false}
        keyboardType="default"
        multiline={false}
        scrollEnabled={false}
        underlineColorAndroid={theme.colors.secondary}
        autoCapitalize="words"
      />
      <ButtonSolid
        onPress={() => {
          try {
            navigation.navigate('SenhaScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={[
          styles.ButtonSolidFB,
          {
            backgroundColor: theme.colors.secondary,
            color: theme.colors.strongInverse,
            borderColor: theme.colors.background,
          },
        ]}
        title=""
        icon="AntDesign/arrowright"
      >
        {`Sign Up`}
      </ButtonSolid>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextkS: {
    alignSelf: 'flex-start',
    fontFamily: 'MerriweatherBold',
    marginTop: 30,
    fontSize: 22,
  },
  Textvt: {
    alignSelf: 'stretch',
    fontFamily: 'MerriweatherBold',
    marginTop: 10,
    fontSize: 18,
  },
  TextIb: {
    marginTop: 60,
    fontFamily: 'MerriweatherBold',
    fontSize: 22,
  },
  TextInputQM: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginTop: 5,
    textTransform: 'none',
    fontFamily: 'MerriweatherBold',
  },
  Textik: {
    marginTop: 20,
    fontFamily: 'MerriweatherBold',
    fontSize: 22,
  },
  TextInputoU: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginTop: 5,
    textTransform: 'none',
    fontFamily: 'MerriweatherBold',
  },
  TextiI: {
    marginTop: 20,
    fontFamily: 'MerriweatherBold',
    fontSize: 22,
  },
  TextInputFH: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    textTransform: 'none',
    fontFamily: 'MerriweatherBold',
  },
  ButtonSolidFB: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 30,
  },
  screen: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default withTheme(CadastroScreen);
