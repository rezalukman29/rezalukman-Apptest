import * as type from '../types/contactType'

const initialContact = {
   contacts: [],
   contact: {},
   isFetching: false,
   isLoading: false,
   error: '',
   message: ''
   

  };

  function contactReducer(state = initialContact, action) {
    switch (action.type) {
      case type.GET_CONTACTS_REQUEST:  
        return { ...state, 
          message: 'Loading...' ,
          isFetching: true,
          error: ''
              };

              case type.GET_CONTACTS_SUCCESS:
                return { ...state, 
                  contacts: action.payload,
                  isFetching: false,
                  message: 'Success get Contacts',
                      };

                      case type.GET_CONTACTS_FAILED:
                        return { ...state, 
                          message: '',
                          error: 'Failed Get Contacts',
                          isFetching: false
                              };

                              case type.DELETE_CONTACT_REQUEST:  
                              return { ...state, 
                                message: 'Loading...' ,
                                isLoading: true,
                                error: '',
                               
                                    };
                      
                                    case type.DELETE_CONTACT_SUCCESS:
                                      return { ...state, 
                                        contacts: state.contacts.filter((item) => item.id !== action.payload.id),
                                        isLoading: false,
                                        message: 'Delete ' + action.payload.firstName + ' ' + action.payload.lastName,
                                      
                                            };
                      
                                            case type.DELETE_CONTACT_FAILED:
                                              return { ...state, 
                                                message: '',
                                                error: 'Failed Get Contacts',
                                                isLoading: false,
                                         
                                                    };

                                                    case type.CREATE_CONTACT_REQUEST:  
                                                      return { ...state, 
                                                        message: 'Loading...' ,
                                                        isLoading: true,
                                                        error: ''
                                                            };
                                              
                                                            case type.CREATE_CONTACT_SUCCESS:
                                                              return { ...state, 
                                                                // contacts: state.contacts.filter((item) => item.id !== action.payload.id),
                                                                isLoading: false,
                                                                message: 'Add Contact ' + action.payload.firstName + ' ' + action.payload.lastName,
                                                                    };
                                              
                                                                    case type.CREATE_CONTACT_FAILED:
                                                                      return { ...state, 
                                                                        message: action.payload,
                                                                        error: action.payload,
                                                                        isLoading: false
                                                                            };

                                                                            case type.SET_CONTACT_SUCCESS:
                                                                              return { ...state, 
                                                                                contact: action.payload,
                                                                                    };

                                                                                    case type.UPDATE_CONTACT_REQUEST:  
                                                                                      return { ...state, 
                                                                                        message: 'Loading...' ,
                                                                                        isLoading: true,
                                                                                        error: ''
                                                                                            };
                                                                              
                                                                                            case type.UPDATE_CONTACT_SUCCESS:
                                                                                              return { ...state, 
                                                                                                      contacts: state.contacts.map(    
                                                                                                        (form, i) => form.id === action.payload.id ? {...form, 
                                                                                                          firstName : action.payload.firstName ,  
                                                                                                          lastName: action.payload.lastName,
                                                                                                          age: action.payload.age,
                                                                                                          photo: action.payload.photo,
                                                                                                        }   : form)  ,
                                                                                                      isLoading: false,
                                                                                                      message: 'Success Update ' + action.payload.firstName + ' ' + action.payload.lastName,
                                                                                                    };
                                                                              
                                                                                                    case type.UPDATE_CONTACT_SUCCESS:
                                                                                                      return { ...state, 
                                                                                                        message: action.payload,
                                                                                                        error: action.payload,
                                                                                                        isLoading: false
                                                                                                            };


                      


      default:
        return state;
    }
  }

  export default contactReducer;