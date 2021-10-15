import React from 'react';
import {
  ButtonSolid,
  Link,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { StatusBar, StyleSheet, Text } from 'react-native';

const LoginScreen = props => {
  const { theme } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors.background }]}
      hasSafeArea={true}
    >
      <Text style={[styles.TextTX, { color: theme.colors.strong }]}>
        {'Help Me'}
      </Text>

      <Text style={[styles.Text_9L, { color: theme.colors.strong }]}>
        {'Realize o login para continuar.'}
      </Text>

      <Text style={[styles.Text_3v, { color: theme.colors.strong }]}>
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
          styles.TextInputRZ,
          {
            borderColor: theme.colors.divider,
            backgroundColor: theme.colors.light,
          },
        ]}
        placeholder="exemplo@email.com"
        value={textInputValue}
        underlineColorAndroid={theme.colors.secondary}
        keyboardType="email-address"
        placeholderTextColor={theme.colors.medium}
        keyboardAppearance="dark"
      />
      <Text style={[styles.TextKd, { color: theme.colors.strong }]}>
        {'Senha'}
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
          styles.TextInputw2,
          {
            borderColor: theme.colors.divider,
            backgroundColor: theme.colors.light,
          },
        ]}
        placeholder="************"
        value={textInputValue}
        underlineColorAndroid={theme.colors.secondary}
        keyboardType="default"
        placeholderTextColor={theme.colors.medium}
        keyboardAppearance="dark"
        secureTextEntry={true}
        clearButtonMode="never"
      />
      <Link
        style={[styles.Linkrh, { color: theme.colors.strong }]}
        title="Esqueci minha senha"
      />
      <ButtonSolid
        style={[
          styles.ButtonSolidzx,
          { backgroundColor: theme.colors.secondary },
        ]}
        title="Login"
        loading={true}
      >
        {`Sign Up`}
      </ButtonSolid>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextTX: {
    marginTop: 30,
    fontFamily: 'MerriweatherBold',
    fontSize: 22,
  },
  Text_9L: {
    fontSize: 18,
    fontFamily: 'MerriweatherBold',
    marginTop: 10,
  },
  Text_3v: {
    marginTop: 80,
    fontFamily: 'MerriweatherBold',
    fontSize: 22,
  },
  TextInputRZ: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  TextKd: {
    marginTop: 20,
    fontFamily: 'MerriweatherBold',
    fontSize: 22,
  },
  TextInputw2: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  Linkrh: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    padding: 0,
    marginTop: 20,
  },
  ButtonSolidzx: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    borderTopWidth: 0,
    marginTop: 30,
  },
  screen: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default withTheme(LoginScreen);