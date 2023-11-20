import React from 'react';
import { Button, SafeAreaView, View, StatusBar, StyleSheet, TouchableHighlight, Image, Text, TouchableOpacity } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';


//Account setting page where user can change password or change profile pic


function AccountSetting({ navigation }) {
    return (

        <SafeAreaView style={styles.back}>

            <View style={styles.mainBorder}>

                <View style={styles.imageBorder}>
                <Image resizeMethod = "contain" style={styles.logo}
                source={ require("../../assests/no_profile_pic.jpg")}  //our logo
            />
                </View>
                <Button
                    title="Change Password" //change password button
                    onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)} />
                
                <View style={styles.settingBorder}>
                    <Button
                        title="Change Profile Picture" //change picture button
                        onPress={() => navigation.navigate(routes.HOME)
                        }/>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    back: { //background
        backgroundColor: color.third,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
    ,
    mainBorder: { //main border holds everything
        width: "100%",
        height: "100%",
        backgroundColor: color.primary,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    imageBorder: { //border where the profile pic willl be placed
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: color.third,
    },
    settingBorder: { //border for the options to change password or picture
        width: "100%",
        height: "30%",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    logo:{ //logo dimensions
        height: 200,
        width:200,
        borderRadius: 400 /2,
      }

})

export default AccountSetting;