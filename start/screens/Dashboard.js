import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useLocation } from "../context/allContext";

import { MyBezierLineChart, MyBarGraph } from "../components/charts";
import { useNavigation } from "@react-navigation/native";
import NotificationModal from "../components/NotificationModal";
import Message from "../components/Message";
import {Box1} from '../components/charts'
import {Box2} from '../components/charts'
import {ProgressRing} from '../components/charts'



const Dashboard = () => {
  const navigation = useNavigation();
  const {fname} = useLocation();
  const [iconClicked, setIconClicked] = useState(false);
  const [type,setType]=useState('')
  const [isType, setIsType] =useState(false);
  const[yeild,setYeild]=useState('')
  const[isYeild, setIsYeild]=useState(false);

  const handleIconClick = () => {
    setIconClicked(true);
  };

  const handleModalClose = () => {
    setIconClicked(false);
  };

  const handleType=()=>{
    setIsType(true)
    setType('Type of crop')
  }

  const handleYeild=()=>{
    setIsYeild(true)
    setYeild('Yeild of crop')
  }

  return (

    <>
      {/* Header */}
      <View style={tw`flex mt-7 flex-row mt-10 h-18`}>
        <View style={tw`flex-1 flex-row `}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons
              style={tw`mt-3 mr-2`}
              name="arrow-back"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../assets/user-profile.jpg")}
              style={tw`w-15 h-15 rounded-full ml-1`}
            />
          </TouchableOpacity>
          <View style={tw`ml-3 mt-2`}>
            <Text style={tw`font-bold`}>Hi {fname}</Text>
            <Text>Aug 12,2021</Text>
          </View>
        </View>
        <View style={tw`mt-2 mr-3`}>
        <TouchableOpacity onPress={handleIconClick}>
          <Ionicons name="notifications" size={28} color="black" />
        </TouchableOpacity>
        </View>
        <NotificationModal
        isVisible={iconClicked}
        message=<Message/>
        onClose={handleModalClose}
      />
      </View>

      <ScrollView>
       

          {/* <View style={tw`flex flex-row`}>
          <Text style={tw`text-white text-2xl font-bold mb-5 ml-2`}>
            Weather Updates
          </Text>
          <Ionicons
            style={tw`ml-1`}
            name="arrow-forward"
            size={30}
            color="white"
          />
        </View>
        <View style={tw`flex-row h-40 justify-between`}>
          <View>
            <View>
              <Text style={tw`m-7 text-white text-2xl font-bold`}>
                28 degree cel
              </Text>
            </View>
            <View></View>
          </View>
          <View style={tw`h-25 w-25 overflow-hidden`}>
            <Image
              style={tw`h-full w-full`}
              source={require("../assets/Sun_loud_rain.png")}
              resizeMode="contain"
            ></Image>
          </View>
        </View>

       

        <View style={tw`h-50 p-3 flex flex-row rounded-t-[40px] bg-white mx-1 z-10 justify-between`}>
          <View
            style={tw`bg-gray-200  h-[95%] ml-2 w-[46.5%] rounded-3xl`}
          ></View>
          <View
            style={tw`bg-gray-200  h-[95%] ml-2 w-[46.5%] rounded-3xl`}
          ></View>
          <View></View>
        </View> */}
        
        {/* weather updates */}
        <View style={tw`rounded-t-lg mx-1 flex flex-row bg-[#2E335A]`}>
          <Text style={tw`text-white text-xl font-bold mb-5 ml-2`}>
            Weather Updates
          </Text>
          <View style={tw`h-25 w-25 overflow-hidden pb-10 `}>
            <Image
              style={tw`h-full w-full`}
              source={require("../assets/Sun_loud_rain.png")}
              resizeMode="contain"
            ></Image>
          </View>
        </View>

        {/*  degress*/}
        
        <View>
        <View style={tw`mx-1 pb-5 rounded-b-3xl bg-white  `}>
            <Text></Text>
          <MyBezierLineChart />

          </View>
          </View>
        
        <View>
        <TouchableOpacity onPress={handleType} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            Click to predict crop type
          </Text>
        </TouchableOpacity>
        </View>

        {
          isType&&<View>
            <View style={{marginLeft:110}}>
            <Text>
              Type of Crop is : ovks
            </Text>
            </View>
          </View>
        }


         

        <View>
        <TouchableOpacity onPress= {handleYeild} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            Click to predict crop yield
          </Text>
        </TouchableOpacity>
        </View>

        {
          isYeild&&<View>
            <View style={{marginLeft:100}}>
            <Text>
              Yeild of Crop is : 125 quintals
            </Text>
            </View>
          </View>
        }

       
      </ScrollView>
    </>
  );
};

export default Dashboard;


const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#4CAF50', // Set your desired background color
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width:300,
    marginLeft:30
  },
  buttonText: {
    color: 'white', // Set your desired text color
    fontSize: 16,
    fontWeight: 'bold'
  },
});