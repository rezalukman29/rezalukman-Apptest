import * as type from '../types/contactType'


const apiUrl = 'https://simple-contact-crud.herokuapp.com/contact'

export const getContacts = () => async dispatch => {

      dispatch({
        type: type.GET_CONTACTS_REQUEST,
      });
        try {

                const data =  fetch(apiUrl , {
                  method: 'GET',
                  headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json;charset=UTF-8",
                  },
                
                })
                data.then(async (response) => {
                  if (response.status === 200) {
                    const result = await response.json();
                    dispatch({
                      type: type.GET_CONTACTS_SUCCESS,
                      payload: result.data
                    });
               
                  } else {
                    dispatch({
                      type: type.GET_CONTACTS_FAILED,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error.message)
                
                });
     
        } catch (error) {
          dispatch({
            type: type.GET_CONTACTS_FAILED,
          });
    }
  };

  export const createContact = (form) => async dispatch => {

    dispatch({
      type: type.CREATE_CONTACT_REQUEST,
    });
      try {

              const data =  fetch(apiUrl, {
                method: 'POST',
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "content-type": "application/json; charset=utf-8",

           
                },
                body: JSON.stringify(form)
              
              })
              data.then(async (response) => {
                if (response.status === 201) {
                  const result = await response.json();
                  console.log(result)
                  dispatch({
                    type: type.CREATE_CONTACT_SUCCESS,
                    payload: form
                  });
                  dispatch(getContacts())

                } else if (response.status === 400) {
                  dispatch({
                    type: type.CREATE_CONTACT_FAILED,
                    payload: 'Bad Request'
                  });
                } else if (response.status === 500) {
                  dispatch({
                    type: type.CREATE_CONTACT_FAILED,
                    payload: 'Internal Error'
                  });
                } else{
                  dispatch({
                    type: type.CREATE_CONTACT_FAILED,
                  });
                }
              })
              .catch((error) => {
                console.log(error.message)
              
              });
            
          

   
  
      } catch (error) {
        dispatch({
          type: type.CREATE_CONTACT_FAILED,
        });
  }
};


  export const removeContact = (contact) => async dispatch => {


    dispatch({
      type: type.DELETE_CONTACT_REQUEST,
    });
      try {

              const data =  fetch(apiUrl + '/' + contact.id , {
                method: 'DELETE',
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json;charset=UTF-8",
                },
              
              })
              data.then(async (response) => {
                if (response.status === 400) {
                  const result = await response.json();
                  dispatch({
                    type: type.DELETE_CONTACT_SUCCESS,
                    payload: contact
                  });
                 
             
                } else {
                  dispatch({
                    type: type.DELETE_CONTACT_FAILED,
                  });
                }
              })
              .catch((error) => {
                console.log(error.message)
              
              });
            
          

   
  
      } catch (error) {
        dispatch({
          type: type.DELETE_CONTACT_FAILED,
        });
  }
};


export const setContact = (contact) => {
  return (dispatch) => {
    dispatch({
      type: type.SET_CONTACT_SUCCESS,
      payload: contact,
    });
  };
};


export const updateContact = (formUpdate) => async dispatch => {
  console.log(formUpdate)
  var form = {
    firstName: formUpdate.firstName,
    lastName: formUpdate.lastName,
    age: formUpdate.age,
    photo: formUpdate.photo
  }
  dispatch({
    type: type.UPDATE_CONTACT_REQUEST,
  });
    try {

            const data =  fetch(apiUrl + '/' + formUpdate.id, {
              method: 'PUT',
              headers: {
                Accept: "application/json, text/plain, */*",
                "content-type": "application/json; charset=utf-8",

              },
              body: JSON.stringify(form)
            
            })
            data.then(async (response) => {
              if (response.status === 201) {
                const result = await response.json();
                console.log(result)
                dispatch({
                  type: type.UPDATE_CONTACT_SUCCESS,
                  payload: result.data
                });
             

              } else if (response.status === 400) {
                dispatch({
                  type: type.UPDATE_CONTACT_FAILED,
                  payload: 'Bad Request'
                });
              } else if (response.status === 500) {
                dispatch({
                  type: type.UPDATE_CONTACT_FAILED,
                  payload: 'Internal Error'
                });
              } else{
                dispatch({
                  type: type.UPDATE_CONTACT_FAILED,
                });
              }
            })
            .catch((error) => {
              console.log(error.message)
            
            });
          
        

 

    } catch (error) {
      dispatch({
        type: type.UPDATE_CONTACT_FAILED,
      });
}
};




  export const logout = () => {

    return async dispatch => {

    
 
      dispatch({
        type: SET_LOGOUT,
        payload: 'Anda Telah Logout'
      });
};
};