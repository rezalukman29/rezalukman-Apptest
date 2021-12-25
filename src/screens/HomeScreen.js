import React, { useEffect,useState } from 'react';
import InputText from '../components/InputText.js';
import { IconInput } from '../components/IconInput';
import ButtonSubmit from '../components/ButtonSubmit';
import { IconButton } from '../components/IconButton';
import {StyleSheet,View,Image,Dimensions,Alert,FlatList, Animated,Modal,Pressable} from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import * as myFunction from '../components/lib/function'
import { width,height } from '../components/Dimensions.js';
import { Avatar } from 'react-native-rapi-ui';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createContact, getContacts, removeContact, setContact, updateContact } from '../redux/actions/contactAction.js';
import { BottomSheet } from 'react-native-btr';
import { Loader } from '../components/Loader.js';
import { ActionLoader } from '../components/ActionLoader';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import ButtonCat from '../components/ButtonCat.js';
import { StatusBar } from 'expo-status-bar';


import * as url from '../components/lib/urlImage';
import { Text } from 'react-native-rapi-ui';
import CustomAlert from '../components/CustomAlert.js';


const CARD_WIDTH = width * 0.85;
const BG_IMG = 'https://images.wallpapersden.com/image/download/scorpion-mortal-kombat-ice-and-fire-art_a2xubGyUmZqaraWkpJRmZW1lrWZuZ2U.jpg';
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 2;

export default function HomeScreen (){
    const [modalDelete, setModalDelete] = useState(false);
    const [modalValidation, setModalValidation] = useState(false);
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const dispatch = useDispatch();
    const { contacts, contact, message, isFetching,isLoading } = useSelector(state => state.contacts);
    const {colors} = useTheme();
    const switchTheme = React.useContext(ThemeContext);
    
    var urlNasar = 'https://media.suara.com/pictures/653x366/2020/11/25/78759-nassar-kdi.jpg';
    var urlSubzero = 'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/02/Sub-zero-sword-mortal-kombat-reboot-.jpg';
    var urlLiukang = 'https://lthumb.lisimg.com/435/22934435.jpg';
    var urlRaiden = 'https://img1.looper.com/img/gallery/the-mortal-kombat-movie-trailer-is-here-and-the-internet-is-freaking-out/intro-1613671568.jpg';
    var urlAtta = 'https://media.matamata.com/thumbs/2021/04/30/15944-atta-halilintar-instagramatattahalilintar/745x489-img-15944-atta-halilintar-instagramatattahalilintar.jpg';
    var urlMarimar = 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1587897891/tfc2heheycdfwnwqsl4s.png';
    var urlJose = 'https://usasianpost.com/wp-content/uploads/2012/09/24fernando-225x300.jpg'
    var noImage = 'https://www.eurobitume.eu/typo3conf/ext/pits_downloadcenter/Resources/Public/Icons/noimage.jpg'

    useEffect(() => {
      dispatch(getContacts())
      dispatch(setContact({
        id: '',
        firstName: '',
        lastName: '',
        age: '',
        photo: noImage

      }))
    
    },[])

 
    const initialForm = {
      firstName: '',
      lastName: '',
      age: '',
      photo: ''
    }

    const initialUpdate = {
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      age: contact.age,
      photo: contact.photo
    }

   


    const [alertMessage, setAlertMessage] = React.useState('');
    const [form, setForm] = useState(initialForm)
    const [formUpdate, setFormUpdate] = useState(initialUpdate)
    const [visible, setVisible] = useState(false);
    const [modify, setModify] = useState(false);

    const closeBottomSheet = () => {
      setVisible(false)
      setForm({...form, photo: ''})
    }

    const handleRemove = (contact) => {
      dispatch(setContact(contact))
      setAlertMessage('Do you want delete ' + contact.firstName + ' ' + contact.lastName + '?')
      setModalDelete(true)
      // dispatch(removeContact(contact))
    }

    const openModalUpdate = (contact) => {
      dispatch(setContact(contact))
      setModify(true)
      setVisible(true)
      
    }

    const openModalAdd = () => {
      setModify(false)
      setVisible(true)  
    }

    const handleUpdate = (formUpdate) => {
      if (formUpdate.firstName == '') {
        setAlertMessage('Please Fill First Name')
        setModalValidation(true)
      } else if (formUpdate.lastName == '') {
          setAlertMessage('Please Fill Last Name')
          setModalValidation(true)
      } else if (formUpdate.age == '') {
          setAlertMessage('Please Fill Age')
          setModalValidation(true)
      } else {
        setVisible(false)
        dispatch(updateContact(formUpdate))
      }
    }

    const handleInsert = (form) => {
      if (form.firstName == '') {
          setAlertMessage('Please Fill First Name')
          setModalValidation(true)
      } else if (form.lastName == '') {
          setAlertMessage('Please Fill Last Name')
          setModalValidation(true)
      } else if (form.age == '') {
          setAlertMessage('Please Fill Age')
          setModalValidation(true)
      } else {
          dispatch(createContact(form))
          setForm(initialForm)
          setVisible(false)
      }
    }





    useEffect(() => {
      setFormUpdate(initialUpdate);
    
    },[contact])



    return(

        <View style={[styles.container,{backgroundColor: colors.background}]}>
            <CustomAlert 
                modalVisible={modalDelete} 
                setModalVisible={setModalDelete}
                title={'Delete Confirmation'}
                message={alertMessage} 
     
                buttons={[{
                  text: 'No',
          
                },{
                  text: 'Yes',
                  func: () => {dispatch(removeContact(contact))},
           
                }]}
              />

            <CustomAlert 
                modalVisible={modalValidation} 
                setModalVisible={setModalValidation}
                title={'Warning'}
                message={alertMessage} 
     
                buttons={[{
                  text: 'Got It',
              
                }]}
              />
          <Image
            source={{uri: BG_IMG}}
            style={[StyleSheet.absoluteFillObject, {opacity: .1}]}
            blurRadius={3}
          />
            <View style={styles.header}>
              <View style={{flexDirection: 'row',justifyContent: 'space-between',top: 8}}>
                <Text style={{color: colors.text}}  size="xl" fontWeight='light' >My Contacts</Text>
                  <View style={{flexDirection: 'row',top: 6}}>
                    <TouchableOpacity  style={{width: 50}} >
                      <IconInput name={"md-color-palette-sharp"} color={colors.primary} 
                      onPress={() => {switchTheme()}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity  style={{width: 50}} onPress={() => openModalAdd()}>
                      <IconInput name={"ios-person-add"} color={colors.primary}/>
                    </TouchableOpacity>

            
                  </View>
               
              </View>
              <Text style={{color: colors.text,top: 10}} size="md" status="danger">{message}</Text>
              <View style={{alignSelf: 'center'}}>
                {isLoading? <ActionLoader/> : <View/>}

              </View>
            </View>
          
        
              <View style={styles.sectionContent}>
                {isFetching? <Loader/> :
                  
                  <Animated.FlatList
                          data={contacts.sort(myFunction.dynamicSort('firstName'))}
                            onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: scrollY}}}],
                            { useNativeDriver: true}
                          )}
                      
                          keyExtractor={(item, index) => {
                            return item.id;
                          }}
                          contentContainerStyle={{
                            padding: SPACING,
                        
                          }}
                          renderItem={({item, index}) => {
                              const inputRange = [
                                    -1,
                                    0,
                                    ITEM_SIZE * index,
                                    ITEM_SIZE * (index + 2)
                                  ]
                              const opacityInputRange = [
                                    -1,
                                    0,
                                    ITEM_SIZE * index,
                                    ITEM_SIZE * (index + .5)
                                  ]
                              const scale = scrollY.interpolate({
                                inputRange,
                                outputRange: [1,1,1,0]
                              })

                              const opacity = scrollY.interpolate({
                                inputRange: opacityInputRange,
                                outputRange: [1,1,1,0]
                              })


                            return <Animated.View style={[styles.card,{transform: [{scale}], opacity, backgroundColor: colors.background}]}>

                                    <Image
                                      source={{ uri: myFunction.checkValidUrl(item.photo)? item.photo :  noImage}}
                                      style={{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                      marginRight: SPACING / 2}}

                                    />
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between',width: width * 0.6}}>
                                      <View style={{alignSelf: 'center'}}>
                                        <Text size="lg" fontWeight='medium' style={{color: colors.text}}>{item.firstName + ' ' + item.lastName}</Text>
                                        <Text size="sm" fontWeight='light' style={{color: colors.subtitle}}>{item.age} years old</Text>
                                      </View>
                                      <View style={{flexDirection: 'row',alignSelf: 'center'}}>
                                        <TouchableOpacity onPress={() => openModalUpdate(item)}>
                                            <IconInput name="ios-document-text" />
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity onPress={() => handleRemove(item)}>
                                            <IconInput name="ios-person-remove" />
                                        </TouchableOpacity>
                                      </View>
                                    </View>
                                  </Animated.View>
                          }}
                         
                        />
                    }

              </View>

              
              <BottomSheet
                  visible={visible}
                  onBackButtonPress={closeBottomSheet}
                  onBackdropPress={closeBottomSheet}
                  >
          
                  <View style={[styles.bottomNavigationView, {backgroundColor: colors.background}]}>
                    <Text size="md" style={{color: colors.primary,marginBottom: 6}}>Select Avatar</Text>
             
                    <Image source={{uri: modify?formUpdate.photo : form.photo!==''?form.photo :  noImage }} style={{width: 160,height: 200, borderRadius: 8,marginBottom: 6}}/>
                    <View style={{alignItems: 'center',flexDirection: 'row'}}>
                
                      <ScrollView horizontal style={{marginBottom: 12}} showsHorizontalScrollIndicator={true}>
                          <ButtonCat text="Nasar"
                            onPress={modify?() => setFormUpdate({ ...formUpdate, photo: urlNasar }) : () => setForm({ ...form, photo: urlNasar })}/>
                          <ButtonCat text="Sub Zero"
                            onPress={modify?() => setFormUpdate({ ...formUpdate, photo:  urlSubzero }) : () => setForm({ ...form, photo:  urlSubzero })}/>
                          <ButtonCat text="Liu Kang"
                            onPress={modify?() => setFormUpdate({ ...formUpdate, photo:  urlLiukang }) : () => setForm({ ...form, photo:  urlLiukang})}/>
                          <ButtonCat text="Raiden"
                            onPress={modify?() => setFormUpdate({ ...formUpdate, photo:  urlRaiden }) : () => setForm({ ...form, photo:  urlRaiden})}/>
                          <ButtonCat text="Atta" 
                            onPress={modify?() => setFormUpdate({ ...formUpdate, photo:  urlAtta }) : () => setForm({ ...form, photo:  urlAtta })}/>
                          <ButtonCat text="Marimar" 
                            onPress={modify?() => setFormUpdate({ ...formUpdate, photo:  urlMarimar }) : () => setForm({ ...form, photo:  urlMarimar})}/>
                          <ButtonCat text="Jose" 
                            onPress={modify?() => setFormUpdate({ ...formUpdate, photo:  urlJose }) : () => setForm({ ...form, photo:  urlJose})}/>
                      </ScrollView>
                 
                                  </View>
                    <Text style={{ marginVertical: 6 ,alignSelf: 'flex-start',color: colors.text}} size="md">First Name</Text>
                          <InputText
                            placeholder="Type First Name"
                            onChangeText={modify? (text) => setFormUpdate({ ...formUpdate, firstName: text }) : (text) => setForm({ ...form, firstName: text })} 
                            value={modify ? formUpdate.firstName : form.firstName}
                            rightContent={
                                <IconInput name={"at-sharp"} color={colors.primary}/>
                            }
                     />
                    <Text style={{ marginVertical: 6 ,alignSelf: 'flex-start',color: colors.text}} size="md">Last Name</Text>
                          <InputText
                            placeholder="Type Last Name"
                            onChangeText={modify? (text) => setFormUpdate({ ...formUpdate, lastName: text }) : (text) => setForm({ ...form, lastName: text })} 
                            value={modify ? formUpdate.lastName : form.lastName}
                            rightContent={
                                <IconInput name={"at-sharp"} color={colors.primary}/>
                            }
                     />

                      <Text style={{ marginVertical: 6 ,alignSelf: 'flex-start',color: colors.text}} size="md">Age</Text>
                          <InputText
                            placeholder="Type Age"
                            onChangeText={modify? (text) => setFormUpdate({ ...formUpdate, age: text }) : (text) => setForm({ ...form, age: text })} 
                            value={modify ? String(formUpdate.age) : form.age}
                            maxLenght={2}
                            rightContent={
                                <IconInput name={"at-sharp"} color={colors.primary}/>
                            }
                            
                     />

                     {modify?

                        <ButtonSubmit 
                          text="Update"
                          rightContent={
                            <IconButton name={"logo-github"} color={colors.background}/>
                          }
                          width={width * 1 - 48}
                          color={colors.primary}
                          onPress={() => handleUpdate(formUpdate)}
                        />    
                        :
                        <ButtonSubmit 
                        text="Post"
                        rightContent={
                          <IconButton name={"logo-github"} color={colors.background}/>
                        }
                        width={width * 1 - 48}
                        color={colors.primary}
                        onPress={() => handleInsert(form)}
                      />    
                      }

                  </View>
              </BottomSheet>

          


      
   
         </View>

    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
   },
   sectionContent: {
     alignItems: 'flex-start',
     width: width * 1,
     marginRight: 24,
     flex: 1
   },
   header: {
     paddingHorizontal: 24,
     paddingVertical: 18

   },



   logout: {
       marginTop: 12
   },
   card: {
        flexDirection: 'row', 
        padding: SPACING / 2, 
        marginBottom: 12,
        borderRadius: 16, 
        width: 0.9 * width,
        shadowColor: '#000',
        shadowRadius: 20,
        shadowOpacity: .3,
        shadowOffset: {width: 1,height: 10},
        elevation: 5,
        
   },

   textRating: {
     fontSize: 12
   },

   bottomNavigationView: {
     padding: 24,
     borderWidth: 1,
     width: '100%',
     height: height * 0.9,
     alignItems: 'center',
     borderTopStartRadius: 12,
     borderTopEndRadius: 12,
  
   },


   
    
  });
  