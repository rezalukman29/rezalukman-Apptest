import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet,View,Image,Dimensions,Pressable,Modal,Text}  from 'react-native';


const CustomAlert = (props) => {
  const {colors} = useTheme();
  const [androidDefaults, setAndroidDefaults] = React.useState({
    container: {
      backgroundColor: (props.android && props.android.container && props.android.container.backgroundColor) || colors.background,
    },
    title: {
      color: (props.android && props.android.title && props.android.title.color) || colors.text,
      // fontFamily: (props.android && props.android.title && props.android.title.fontFamily) || 'initial',
      fontSize: (props.android && props.android.title && props.android.title.fontSize) || 18,
      fontWeight: (props.android && props.android.title && props.android.title.fontWeight) || 'bold',
    },
    message: {
      color: (props.android && props.android.message && props.android.message.color) || colors.text,
      // fontFamily: (props.android && props.android.message && props.android.message.fontFamily) || 'initial',
      fontSize: (props.android && props.android.message && props.android.message.fontSize) || 15,
      fontWeight: (props.android && props.android.message && props.android.message.fontWeight) || 'normal',
    },
    button: {
      color: '#000000',
      // fontFamily: 'initial',
      fontSize: 14,
      fontWeight: '500',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
    },
  });

  const [iOSDefaults, setIOSDefaults] = React.useState({
    container: {
      backgroundColor: (props.ios && props.ios.container && props.ios.container.backgroundColor) || colors.background,
    },
    title: {
      color: (props.ios && props.ios.title && props.ios.title.color) || colors.text,
      // fontFamily: (props.ios && props.ios.title && props.ios.title.fontFamily) || 'initial',
      fontSize: (props.ios && props.ios.title && props.ios.title.fontSize) || 17,
      fontWeight: (props.ios && props.ios.title && props.ios.title.fontWeight) || '600',
    },
    message: {
      color: (props.ios && props.ios.message && props.ios.message.color) || colors.text,
      // fontFamily: (props.ios && props.ios.message && props.ios.message.fontFamily) || 'initial',
      fontSize: (props.ios && props.ios.message && props.ios.message.fontSize) || 13,
      fontWeight: (props.ios && props.ios.message && props.ios.message.fontWeight) || 'normal',
    },
    button: {
      color: '#000000',
      // fontFamily: 'initial',
      fontSize: 14,
      fontWeight: '500',
      textTransform: 'none',
      backgroundColor: 'transparent',
    },
  });

  const AndroidButtonBox = () => {
    const [buttonLayoutHorizontal, setButtonLayoutHorizontal] = React.useState(1);
    const buttonProps = props.buttons && props.buttons.length > 0 ? props.buttons : [{}]

    return (
      <View style={[styles.androidButtonGroup, {
        flexDirection: buttonLayoutHorizontal === 1 ? "row" : "column",
      }]} onLayout={(e) => {
        if(e.nativeEvent.layout.height > 60)
          setButtonLayoutHorizontal(0);
      }}>
        {
          buttonProps.map((item, index) => {
              if(index > 2) return null;
              const alignSelfProperty = buttonProps.length > 2 && index === 0 && buttonLayoutHorizontal === 1 ?  'flex-start' : 'flex-end';
              let defaultButtonText = 'OK'
              if(buttonProps.length > 2){
                if(index === 0)
                  defaultButtonText = 'ASK ME LATER'
                else if(index === 1)
                  defaultButtonText = 'CANCEL';
              } else if (buttonProps.length === 2 && index === 0)
                defaultButtonText = 'CANCEL';
              return (
                <View style={[styles.androidButton, index === 0 && buttonLayoutHorizontal === 1 ? {flex: 1} : {}]} key={index}>
                  <Pressable onPress={() => {
                    props.setModalVisible(false)
                    if(item.func && typeof(item.func) === 'function')
                      item.func();
                  }} style={[{
                    alignSelf: alignSelfProperty, 

                  }]}>
                    <View style={[styles.androidButtonInner, {backgroundColor: (item.styles && item.styles.backgroundColor) || androidDefaults.button.backgroundColor}]}>
                      <Text
                        style={{
                          color: (item.styles && item.styles.color) || androidDefaults.button.color,
                          fontFamily: (item.styles && item.styles.fontFamily) || androidDefaults.button.fontFamily,
                          fontSize: (item.styles && item.styles.fontSize) || androidDefaults.button.fontSize,
                          fontWeight: (item.styles && item.styles.fontWeight) || androidDefaults.button.fontWeight,
                          textTransform: (item.styles && item.styles.textTransform) || androidDefaults.button.textTransform,
                        }}
                      >{item.text || defaultButtonText}</Text>
                    </View>
                  </Pressable>
                </View>
              )
            })

        }
      </View>
    );
  }

  const IOSButtonBox = () => {
    const buttonProps = props.buttons && props.buttons.length > 0 ? props.buttons : [{}]
    const [buttonLayoutHorizontal, setButtonLayoutHorizontal] = React.useState(buttonProps.length === 2 ? 1 : 0);


    return (
      <View style={[styles.iOSButtonGroup, {
        flexDirection: buttonLayoutHorizontal === 1 ? "row" : "column",
      }]} onLayout={(e) => {
        if(e.nativeEvent.layout.height > 60)
          setButtonLayoutHorizontal(0);
      }}>
        {
          buttonProps.map((item, index) => {
              let defaultButtonText = 'OK'
              if(buttonProps.length > 2){
                if(index === 0)
                  defaultButtonText = 'ASK ME LATER'
                else if(index === 1)
                  defaultButtonText = 'CANCEL';
              } else if (buttonProps.length === 2 && index === 0)
                defaultButtonText = 'CANCEL';
              const singleButtonWrapperStyle = {}
              let singleButtonWeight = iOSDefaults.button.fontWeight;
              if(index === buttonProps.length - 1){
                  singleButtonWeight = '700';
              }
              if(buttonLayoutHorizontal === 1){
                singleButtonWrapperStyle.minWidth = '50%';
                if(index === 0){
                  singleButtonWrapperStyle.borderStyle = 'solid';
                  singleButtonWrapperStyle.borderRightWidth = 0.55;
                  singleButtonWrapperStyle.borderRightColor = '#dbdbdf';
                }

              }
              return (
                <View style={[styles.iOSButton, singleButtonWrapperStyle]} key={index}>
                  <Pressable onPress={() => {
                    props.setModalVisible(false)
                    if(item.func && typeof(item.func) === 'function')
                      item.func();
                  }}>
                    <View style={[styles.iOSButtonInner, {backgroundColor: (item.styles && item.styles.backgroundColor) || iOSDefaults.button.backgroundColor}]}>
                      <Text
                        style={{
                          color: (item.styles && item.styles.color) || iOSDefaults.button.color,
                          fontFamily: (item.styles && item.styles.fontFamily) || iOSDefaults.button.fontFamily,
                          fontSize: (item.styles && item.styles.fontSize) || iOSDefaults.button.fontSize,
                          fontWeight: (item.styles && item.styles.fontWeight) || singleButtonWeight,
                          textTransform: (item.styles && item.styles.textTransform) || iOSDefaults.button.textTransform,
                          textAlign: 'center'
                        }}
                      >{item.text || defaultButtonText}</Text>
                    </View>
                  </Pressable>
                </View>
              )
            })

        }
      </View>
    );
  }
return (
<Modal
    animationType="fade"
    transparent={true}
    visible={props.modalVisible}
    onRequestClose={() => {
      props.setModalVisible(false);
    }}
  >
    <Pressable style={[Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop, styles.backdrop]} onPress={() => props.setModalVisible(false)} />
    <View style={styles.alertBox}>
          {
            Platform.OS === "ios" ? 
            <View style={[styles.iOSAlertBox, iOSDefaults.container]}>
              <Text style={[styles.iOSTitle, iOSDefaults.title]}>{props.title || 'Message'}</Text>
              <Text style={[styles.iOSMessage, iOSDefaults.message]}>{props.message || ''}</Text>
              <IOSButtonBox />
            </View>
            :
            <View style={[styles.androidAlertBox, androidDefaults.container]}>
              <Text style={[styles.androidTitle, androidDefaults.title]}>{props.title || 'Message'}</Text>
              <Text style={[styles.androidMessage, androidDefaults.message]}>{props.message || ''}</Text>
              <AndroidButtonBox />
            </View>
          }
    </View>
  </Modal>
)
}


export default CustomAlert;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.3
  },
  androidBackdrop: {
    backgroundColor: "#232f34",
    opacity: 0.32
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  alertBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  androidAlertBox: {
    maxWidth: 280,
    width: '100%',
    margin: 48,
    elevation: 24,
    borderRadius: 2,
    height: 160,
    padding: 12
  },
  androidTitle: {
    margin: 12,
  },
  androidMessage: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
  },
  androidButtonGroup: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 8,
    marginLeft: 24,
  },
  androidButton: {
    marginTop: 12,
    marginRight: 8,    
  },
  androidButtonInner: {
    padding: 10,

  }
   
});
