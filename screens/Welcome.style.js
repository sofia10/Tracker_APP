import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 15,
        flex: 1
    },
    title: {
        fontSize: 22,
        marginTop: 40,
        fontWeight: 'bold'
   },
   subTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 70,
    fontWeight: 'bold'
   },
   description: {
    textAlign: 'center',
    marginTop: 20
   },
   otpBlock: {
    marginTop: 50
   },
   mobileInput: {
    fontSize: 18,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray', 
    borderRadius: 5, 
    padding: 10,
    marginBottom: 40,
    marginTop: 40
   },
   otpBlock: {
   },
   otpInput: {
    height: 100,
    borderWidth: 1,
    borderColor: 'gray', 
    borderRadius: 5, 
    padding: 10,
    marginBottom: 20
   },
   logo: {
    width: 200,
    height: 100,
    objectFit: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50
   }
})

export default styles;