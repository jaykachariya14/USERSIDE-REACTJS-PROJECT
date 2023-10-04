import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "../Services/Myfirebase/myfirebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const addcart = (id,data) =>{

    console.log(data,"dattttttttttttttt");

    return{
        type:'ADDCART',
        payload : {id,data}
    }
}

export const getData = (data) => {
 
    return{
        type : 'ALL_PRODUCT',
        payload : data
    }
}  

const SignupSuc = () =>{
    return {
        type : "SIGNUP_SUC"
    }
}
const SignupErr = (msg) =>{
    return {
        type : "SIGNUP_ERR",
        payload : msg
    }
}

const SigninSuc = () =>{
    return {
        type : "SIGNIN_SUC"
    }
}
const SigninErr = (msg) =>{
    return {
        type : "SIGNIN_ERR",
        payload : msg
    }
}
const signoutsuc = () =>{
    return {
        type : "LOGOUT_SUC"
    }
}
export const singleproduct = (data) => {
 
    return{
        type : 'SINGLE_PRODUCT',
        payload : data
    }
}

export const ADDproductasync = (data) =>{
    return async dispatch =>{
        await addDoc(collection(db, "products"),data)
        dispatch(addcart(data));
    }
}

export const Editproductasync = (id)=>{
    return async dispatch =>{
        let alldata = [];

        const docref = doc(db,"products",`${id}`);
        const docsnap = await getDoc(docref);
        const d = {...docsnap.data(), id:id}

        alldata = [...alldata,d]
        dispatch(singleproduct(alldata));
    }
}

export const UpdateProductasync = (data,id)=>{
    return async dispatch =>{
        await updateDoc(doc(db,"products",`${id}`),data);

        dispatch(getAllAsyncData())
    }
}

export const getAllAsyncData = () => {
    return async dispatch => {

        let alldata = [];

        let firestoredata = await getDocs(collection(db,"products"));
        firestoredata.forEach((doc) => {
           let d = {...doc.data(),id : doc.id}
           alldata = [...alldata,d]
        })

    dispatch(getData(alldata));
  }
}

export const productremove = (id) =>{
    return{
        type:'REMOVE_CART',
        payload: id 
    }
}

export const singUpasync = (data) =>{
   return async dispatch => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
    
      // Signed up 
      const user = userCredential.user;
    dispatch(SignupSuc())
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(SignupErr(errorCode))
      // ..
    });
  
   }
}

export const LogoutAsync = () =>{
    return async dispatch =>{
        signOut(auth).then(()=>{
            dispatch(signoutsuc())
        }).catch((error)=>{

        })
    };
}
export const singinasync = (data) =>{
    return async dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          dispatch(SigninSuc());
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          dispatch(SigninErr(errorCode));
        });
    }
 }
// export const removeProductasync = (id) =>{
//     return async dispatch =>{
//         await deleteDoc(doc(db,"products" ,`${id}`))
//     dispatch(getAllAsyncData());

//     }
// }