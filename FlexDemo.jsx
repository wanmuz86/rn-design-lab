import { View, Text } from 'react-native'
import React from 'react'

const FlexDemo = () => {
  return (
     <View
          style={{
            flex: 1,
            padding: 20,
          }}
        >
          <View
            style={
              {
                flexDirection: 'row', // the item within the view will be arranged from left to right
                alignItems: 'center', // the item will be centered
                padding: 15, // spacing // padding of the box is 15 
                backgroundColor: '#fff',
                borderRadius: 10, // curve
                marginBottom: 20,
                gap: 15, // gap between item inside it
              }

            }
          >
            {/* First greyish profile picture */}
            <View style={{
              width: 60,
              height: 60,
              borderRadius: 30, // curve
              backgroundColor: '#ddd',
            }}
            >
            </View>
            {/* Profile View with top and bottom text */}
            {/* Use flex, by default is column , then the item will be added to bottom */}

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
              <Text style={{ color: '#666' }}>Product Designer</Text>
            </View>

            {/* Third column with two smaller boxes*/}
            {/* Add the item left-to-right flexDirection:row */}
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ width: 35, height: 35, backgroundColor: '#4fa', borderRadius: 8 }}></View>
              <View style={{ width: 35, height: 35, backgroundColor: '#f66', borderRadius: 8 }} ></View>
            </View>
          </View>

          {/* List Item */}
          <View
            style={{
              flexDirection: 'row', // the item will be arranged left to the right
              alignItems: 'center',   //centered the item
              padding: 15,
              backgroundColor: '#fff',
              borderRadius: 10,
              marginBottom: 20,
              gap: 15,
            }}
          >
            {/* Left Icon */}
            <View style={{ width: 40, height: 40, backgroundColor: '#ddd', borderRadius: 8 }} />

            {/* Label */}
            {/* The remaining part of the UI will be the text / Settings (flex : 1) */}
            <Text style={{ flex: 1, fontSize: 16 }}>Settings</Text>

            {/* Right Icon */}
            <View style={{ width: 24, height: 24, backgroundColor: '#aaa', borderRadius: 5 }} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {/* Repeat this 4 times, Create 4 boxes - map */}
            {[1, 2, 3, 4].map((item) => (
              // {/* When we create a UI using map, normally things that are repeated, eg for a list */}
              // You need to specify key for performance purpose especiall for edit and delet process
              <View
                key={item}
                style={{
                  width: '48%',
                  height: 100,
                  borderRadius: 10,  // gap between the box is 10
                  backgroundColor: '#cde',
                  justifyContent: 'center', // the view will centered
                  alignItems: 'center', // the item/text within it will be centered as well
                  marginBottom: 15,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Item {item}</Text>
              </View>
            ))}
          </View>

        </View>
  )
}

export default FlexDemo