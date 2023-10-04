const initial = {
    products : [],
    product: [],
    msg:'',
    isLogin : false
}


const productreducer = (state = initial,action) =>{
    
 switch (action.type){
    case 'SIGNUP_SUC':
        return {
            ...state,
        }

        case 'SIGNUP_ERR':
            return {
                ...state,
                msg: action.payload
            }
        
            case 'SIGNIN_SUC':
                return {
                    ...state,
                    isLogin:true
                }
        
                case 'SIGNIN_ERR':
                    return {
                        ...state,
                        msg: action.payload
                    }

                    case 'LOGOUT_SUC':
                        return {
                            ...state,
    isLogin : false
                           
                        }
            
    case 'ADDCART':
        const find = state.product.findIndex(item => item.id == action.payload.id);

        // console.log(find,"find");

        if (find >= 0) {
            return (
                state.products[find].data
            )
        }
        else {

            return {
                ...state,
                product: [...state.product, action.payload.data]
            }
        }


        case 'REMOVE_CART':

        let removedata = state.product

        let allproducts = removedata.filter((delet) => {
            return delet.id != action.payload
        })
// console.log(allproducts,"alll");
        return (
            {
                ...state,
                product: allproducts
            }

        )

        case 'ALL_PRODUCT':
            return {
                ...state,
                products: action.payload
            }

            case 'SINGLE_PRODUCT':
                return {
                    ...state,
                    product :action.payload
                }
        default :
        return state
 }
}
export default productreducer