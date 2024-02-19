import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Profile.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhotoCollage from '../components/PhotoCollage';
import WorkingToggle from '../components/WorkingToggle';

const Profile = () => {
  const [driverRating, setDriverRating] = useState(4);
  const [comRating, setcomRating] = useState(1);
  const driverTotalStars = 5;
  const comTotalStars = 5;

  const images = [
    { uri: 'https://media.ed.edmunds-media.com/mercedes-benz/sprinter/2023/oem/2023_mercedes-benz_sprinter_cargo-van_2500-144-wb-cargo_fq_oem_1_1600.jpg' },
    { uri: 'https://www.motortrend.com/uploads/sites/10/2015/11/2015-mercedes-benz-sprinter-cargo-van-angular-front.png?fit=around%7C875:492' },
  ];

  return (
    <SafeAreaView >
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.name}>David Nolson</Text>
          <View style={styles.labelStatus}>
            <Text style={styles.status}>Busy</Text>
          </View>
        </View>
        <View style={styles.workingStatus}>
          <Text style={styles.workingStatusTitle}>My working status for today</Text>
          <WorkingToggle/>
        </View>
        <View style={styles.driverInfo}>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Unit</Text>
            <Text>131</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Average Rate</Text>
            <Text>0$</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Battery</Text>
            <Text>57%</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Owner</Text>
            <Text>Lillian H.</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Tracking Name</Text>
            <Text>Unit1139</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Truck</Text>
            <Text>Sprinter 173x54x73</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Payload</Text>
            <Text>3500 LBS</Text>
          </View>
        </View>
        <View style={styles.activeStatus}>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Last updated:</Text>
            <Text style={styles.blueText}>0mins ago</Text>
          </View>
        </View>
        <View style={styles.reviewsBlock}>
          <Text style={styles.reviewsTitle}>Total Reviews</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Driving:</Text>
            <View style={styles.stars}>
              {[...Array(driverTotalStars)].map((_, index) => (
                <Icon
                  key={index}
                  name={index < driverRating ? 'star' : 'star-o'}
                  color={index < driverRating ? 'gold' : 'grey'}
                  size={14}
                  style={{ marginHorizontal: 0 }}
                />
              ))}
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoItem}>Communication:</Text>
            <View style={styles.stars}>
              {[...Array(comTotalStars)].map((_, index) => (
                <Icon
                  key={index}
                  name={index < comRating ? 'star' : 'star-o'}
                  color={index < comRating ? 'gold' : 'grey'}
                  size={14}
                  style={{ marginHorizontal: 0 }}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.phoneNumberBlock}>
          <Icon name="phone" size={18} color="#000" />
          <Text style={styles.phoneNumber}>+1 38475374567</Text>
        </View>

        <PhotoCollage images={images} />
      </View>
    </SafeAreaView>
  )
}

export default Profile