import React from 'react';
import {
  ButtonSolid,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { StatusBar, StyleSheet, Text } from 'react-native';

const SenhaScreen = props => {
  const { theme } = props;

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
      <Text style={[styles.TextIh, { color: theme.colors.strong }]}>
        {'Help Me'}
      </Text>

      <Text style={[styles.TextcJ, { color: theme.colors.strong }]}>
        {'Realize o cadastro para continuar.'}
      </Text>

      <Text
        style={[styles.Textdv, { color: theme.colors.strong }]}
        ellipsizeMode="head"
      >
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
          styles.TextInput_0b,
          {
            borderColor: theme.colors.divider,
            backgroundColor: theme.colors.light,
            color: theme.colors.strong,
          },
        ]}
        placeholder="Digite sua senha"
        value={textInputValue}
        clearButtonMode="never"
        placeholderTextColor={theme.colors.medium}
        autoFocus={false}
        clearTextOnFocus={false}
        secureTextEntry={true}
        autoCapitalize="none"
        underlineColorAndroid={theme.colors.secondary}
        keyboardAppearance="dark"
        keyboardType="default"
        textContentType="password"
        textBreakStrategy="balanced"
        editable={true}
      />
      <Text
        style={[styles.TextRD, { color: theme.colors.strong }]}
        ellipsizeMode="head"
      >
        {'Confirmar Senha'}
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
          styles.TextInputXg,
          {
            borderColor: theme.colors.divider,
            backgroundColor: theme.colors.light,
            color: theme.colors.strong,
          },
        ]}
        placeholder="Digite sua senha novamente"
        value={textInputValue}
        clearButtonMode="never"
        placeholderTextColor={theme.colors.medium}
        autoFocus={false}
        clearTextOnFocus={false}
        secureTextEntry={true}
        keyboardType="default"
        multiline={false}
        scrollEnabled={false}
        underlineColorAndroid={theme.colors.secondary}
        textBreakStrategy="balanced"
        keyboardAppearance="dark"
        editable={true}
      />
      <ButtonSolid
        style={[
          styles.ButtonSolidVe,
          { backgroundColor: theme.colors.secondary },
        ]}
        title="Cadastrar"
        loading={true}
      >
        {`Sign Up`}
      </ButtonSolid>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextIh: {
    alignSelf: 'flex-start',
    fontFamily: 'MerriweatherBold',
    marginTop: 30,
    fontSize: 22,
  },
  TextcJ: {
    alignSelf: 'stretch',
    fontFamily: 'MerriweatherBold',
    marginTop: 10,
    fontSize: 18,
  },
  Textdv: {
    marginTop: 60,
    fontFamily: 'MerriweatherBold',
    fontSize: 22,
  },
  TextInput_0b: {
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
  TextRD: {
    marginTop: 20,
    fontFamily: 'MerriweatherBold',
    fontSize: 22,
  },
  TextInputXg: {
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
  ButtonSolidVe: {
    borderRadius: 8,
    fontFamily: 'MerriweatherBold',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 22,
  },
  screen: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default withTheme(SenhaScreen);
