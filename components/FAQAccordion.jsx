import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Collapsible from 'react-native-collapsible';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FAQAccordion = () => {
    const [faqs, setFaqs] = useState([
        { 
            id: 1, 
            title: 'How To Get Loads?', 
            content: [
                'Receive daily SMS NOTIFICATIONS. Click on the SMS LINK to automatically notify our dispatch team, initiating load searches on your behalf.',
                'Once we have a load offer for you, dispatch will send it to you via Telegram.',
                'Thoroughly review the load details and then message dispatch with your RATE or simply say SKIP.',
                'After providing your RATE, dispatch will make a bid for you.',
                'If the CUSTOMER replies to DISPATCH, we will instruct you to HOLD. This indicates a high chance that the load will be assigned to you; therefore, wait for at least 15 minutes before considering other options.',
                'When we secure a load for you, the driver must promptly head to the pickup location. Our TRACKING team will provide you with all the necessary details.',
                'To increase your chances of getting daily loads, bid faster (Turn On Telegram Notifications) and consider the recommended rates provided by dispatch.'
              ]
        },
        { 
            id: 2, 
            title: 'How to Pick Up and Deliver the Load?',
            content: [
                'Start heading to the PICKUP LOCATION as soon as the dispatcher books a load for you.',
                'Notify our tracking team "ON SITE" on Telegram upon arrival at the PICKUP LOCATION.',
                'After loading, send us FREIGHT PICTURES and clear the BOL (Bill of Lading) document.',
                'Wait for our confirmation before commencing your journey.',
                'Once the Tracking team confirms you are "Good To Go" (G2G), proceed to the delivery location.',
                'Ensure that the TRACKING APP is turned on and you are online while on the road.',
                'Upon reaching the DELIVERY LOCATION, message us "ON SITE" (similar to the Pickup location).',
                'Provide the NAME OF THE RECEIVER and the signed BOL (Signed BOL serves as the Proof of Delivery - POD) after offloading.',
                'Wait for G2G confirmation, similar to the PICKUP process.'
            ]
        },
        { 
            id: 3, 
            title: "Company's Policy",
            content: [
            '⛔️ Do not perform late or early pickups or deliveries without our confirmation.',
            '⛔️ Never cancel a booked load.',
            '⛔️ You must accept the Tracking app if requested.',
            '⛔️ Avoid doing partials (handling multiple loads simultaneously).',
            '⛔️ Once a load is booked, do not disable the tracking app.',
            '⛔️ After booking, maintain good communication with us.',
            '🚫 Please carefully read and adhere to our rules. Violation of these rules may result in charges, a decrease in your rating, and contract termination in most cases.'
            ]
        }
    ]);

    const [activeSection, setActiveSection] = useState(null);

    const toggleExpanded = (id) => {
        setActiveSection(activeSection === id ? null : id);
    };

  return (
    <View style={styles.faqBox}>
      {faqs.map((faq) => (
        <View key={faq.id}>
            <TouchableOpacity onPress={() => toggleExpanded(faq.id)}>
                <View style={styles.header}>
                    <View style={styles.headerTitle}>
                        {faq.id === 1 ? <Text>🌐</Text> : null}
                        {faq.id === 2 ? <Text>🚛</Text> : null}
                        {faq.id === 3 ? <Text>❌</Text> : null}
                        <Text style={styles.headerText}>{faq.title}</Text>
                    </View>
                    <Ionicons
                        name={activeSection === faq.id ? "remove" : "add"}
                        size={24}
                        color="#04213b"
                    />
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={activeSection !== faq.id}>
                <View style={styles.content}>
                    {faq.content.map((item, index) => (
                        <View key={index} style={styles.listItemContainer}>
                            {faq.id === 3 ? null : <Text style={styles.listItemBullet}>•</Text>}
                            <Text style={styles.listItemText}>{item}</Text>
                        </View>
                    ))}
                </View>
            </Collapsible>
        </View>
      ))}
    </View>
  )
}

export default FAQAccordion

const styles = StyleSheet.create({
    faqBox: {
        width: '100%'
    },  
    header: {
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10
    },
    content: {
        paddingLeft: 10,
        paddingRight: 40,
        backgroundColor: '#fff',
        paddingTop: 20
    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      listItemBullet: {
        fontSize: 32,
        marginRight: 8,
        color: '#04213b',
      },
      listItemText: {
        fontSize: 16,
      },
})