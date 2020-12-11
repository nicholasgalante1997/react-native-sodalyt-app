import React , {useState} from 'react';
import {View, StyleSheet, Dimensions, Image, Alert, TouchableOpacity, Keyboard} from 'react-native'
import Input from '../components/custom/Input'
import MTBoldText from '../components/custom/MTBoldText'
import MTMedText from '../components/custom/MTMediumText'
import MTLightText from '../components/custom/MTLightText'
import Colors from '../constants/Colors'
import {CheckBox} from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../store/actions/actionCreator'

const ReturningUserScreen = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [professional, setProfessional] = useState(false)
    const [customer, setCustomer] = useState(false)

    const searchedTerm = useSelector(state => state.search)

    const dispatch = useDispatch()

    const handleEmailInput = (textInput) => {
      setEmail(textInput)
    }

    const handlePasswordInput = (textInput) => {
      setPassword(textInput)
    }
    
    const assignAccountType = (object) => {
      if (customer) {
        object.accountType = "customer"
      } else {
        object.accountType = "professional"
      }
    }

    const verifyPost = () => {
      if (email.length < 6){
        return false
      } else if (!email.includes('@')){
        return false 
      } else if (!email.includes('.')){
        return false 
      } else if (password.length < 1){
        return false
      } else if (!professional && !customer){
        return false
      } else {
        return true
      }
    }

    const configureAccountType = () => {
      if (professional){
        return "professional"
      } else {
        return "customer"
      }
    }

    const tryCatchForSignIn = async function () {
      try {
        const content = {
          "accountType": configureAccountType(),
          "email": email,
          "password": password,
        }

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')
        const JSONPackage = JSON.stringify(content)

        const ENDPOINT = 'https://08o65vjga3.execute-api.us-east-2.amazonaws.com/alpha/returninguser'

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSONPackage,
          redirect: 'follow'
        }

        const response = await fetch(ENDPOINT, requestOptions)
        const responseObj = response.json()
        return responseObj

      } catch (err) {
        console.log(err)
      }
    }

    const verifyAndHandlePost = () => {
      if (verifyPost()){
        tryCatchForSignIn().then(r =>{
          console.log(r)
          if (r.status === 'Email could not be found'){
            Alert.alert('Woops', "It seems either your email or password is incorrect.", [{text: "Got it!", style: "default"}])
          } else if (r.status === 'Login Successful!') {
            assignAccountType(r)
            dispatch(actions.setDetails(r))
            // console.log(r)
            if (r.accountType === 'customer'){
              props.navigation.navigate({routeName: 'MainContent', params: {
                search: searchedTerm
            }})
            }
          }
        })
      } else {
        Alert.alert("Hold Up!", "Make sure your email is correct, and your password isn't empty.", [{text: 'Got it!', style: 'default'}])
      }
    }

    return (
        <View style={styles.screen}>
          {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{justifyContent: 'center', alignItems: 'center'}}> */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.topRow}>
              <MTBoldText style={styles.textLarge}>
                Welcome Back to Sodalyt!
              </MTBoldText>
              <MTMedText style={styles.textSmall}>
                Sign in below 
              </MTMedText>
              <View style={styles.imageContainer}>
                <Image 
                    source={require('../images/circle-logo.png')} 
                    style={styles.image} 
                    resizeMode='cover' 
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
              <View>
                <MTBoldText style={{textAlign: 'left'}}>
                    Email: 
                </MTBoldText>
                <View style={{backgroundColor: 'white', borderRadius: 15, padding: 3, marginTop: 10}}>
                <Input 
                style={{fontFamily: 'tommy-reg', borderBottomWidth: 0, width: Dimensions.get('window').width * 0.6}} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={email}
                onChangeText={handleEmailInput}
                placeholder="nick@example.net"
                placeholderTextColor='#C7CBCE'
                />
            </View>
                <MTBoldText style={{textAlign: 'left', marginTop: 10}}>
                    Password: 
                </MTBoldText>
                <View style={{backgroundColor: 'white', borderRadius: 15, padding: 3, marginTop: 10}}>
                <Input 
               style={{fontFamily: 'tommy-reg', borderBottomWidth: 0, width: Dimensions.get('window').width * 0.6}} 
                secureTextEntry={true}
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="default" 
                value={password}
                onChangeText={handlePasswordInput}
                placeholder="password"
                placeholderTextColor='#C7CBCE'
                />
            </View>
                </View>
        </View>
        </TouchableWithoutFeedback>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, paddingTop: 20}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <CheckBox 
                  checked={professional} 
                  title="Professional"
                  textStyle={{fontFamily: 'tommy-light'}}
                  onPress={() => {
                    setCustomer(false)
                    setProfessional(true)
                  }}
                  checkedColor={Colors.rugged.primary}
                  />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <CheckBox 
                  checked={customer} 
                  title="Customer"
                  textStyle={{fontFamily: 'tommy-light'}}
                  onPress={() => {
                      setProfessional(false)
                      setCustomer(true)
                  }}
                  checkedColor={Colors.rugged.primary}
                  />
              </View>
            </View>
            <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{backgroundColor: Colors.rugged.primary, height: 60, width: 60, borderRadius: 30}}>
                <TouchableOpacity style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={verifyAndHandlePost}>
                    <MTLightText>
                      Log In
                    </MTLightText>
                </TouchableOpacity>
              </View>
            </View>
            {/* </TouchableWithoutFeedback> */}
        </View>
      );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 50,
    width: 100,
    height: 100,
    overflow: 'hidden',
    marginTop: 20
},
image: {
    height: '100%',
    width: '100%'
},
screen: {
  flex: 1, 
  backgroundColor: Colors.ocean.primary, 
  alignItems: 'center',
  justifyContent: 'center'
  },
  topRow: {
    alignItems: 'center'
  },
  textLarge: {
    fontSize: 26, 
    textAlign: 'center'
  },
  textSmall: {
    fontSize: 16, 
    textAlign: 'center'
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
export default ReturningUserScreen;
