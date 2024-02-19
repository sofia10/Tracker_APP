import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#04213b'
    },
    labelStatus: {
        backgroundColor: 'red',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    status: {
        color: '#FFF',
    },
    workingStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30,
        paddingTop: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    workingStatusTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    driverInfo: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#ddd',
        borderBottomColor: '#ddd',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoItem: {
        marginBottom: 5
    },
    activeStatus: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingHorizontal: 20,
    },
    blueText: {
        color: '#2399d5',
        fontWeight: 'bold'
    },
    reviewsBlock: {
        marginTop: 15,
        paddingHorizontal: 20
    },
    reviewsTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    stars: {
        flexDirection: 'row'
    },
    phoneNumberBlock: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#ddd',
        borderBottomColor: '#ddd',
        marginTop: 30,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    phoneNumber: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})

export default styles;