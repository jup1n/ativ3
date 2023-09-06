import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: '#383535',
        paddingHorizontal: 25,
        paddingVertical: 50,
        flexDirection: 'column',
        justifyContent:"space-between"
    },

    conteinerTitle : {
        alignItems:'center'
    },

    title : {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    
    conteinerScore :{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    conteinerButtons : {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    button : {
        gap: 10
    },

    buttonAdd : {
        width: 80,
        height: 80,
        backgroundColor: '#589D52',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center'
    },

    buttonLess : {
        width: 80,
        height: 80,
        backgroundColor: '#BD1010',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center'
    },

    textWe : {
        fontSize: 35,
        fontWeight:'bold',
        color: '#4AA5F9'
    }, 

    textThey : {
        fontSize: 35,
        fontWeight:'bold',
        color: '#C08DF3'
    }
})