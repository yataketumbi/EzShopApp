import { Image, View } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon,color}) =>{
    return(
        <View>
         <Image
            source={icon}
            resizeMode="contain"
            style={{ width:24,height:24,tintColor: color}}
         />   
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs>
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'My Orders',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.bookmark} 
          color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
            <TabIcon
            icon={icons.home}
            color={color}
            name="home"
            focused={focused}
        />
      ),
    }}
  />
      <Tabs.Screen
        name="plus"
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.plus} 
          color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.profile} 
          color={color} />,
        }}
      />
    </Tabs>
    </>
  )
}

export default TabsLayout;