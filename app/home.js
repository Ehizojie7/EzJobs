import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            // <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
            <>
        <Text>
          <Ionicons name="person-circle" size={36} color="grey" /> 
          </Text>
            </>
            
          ),
          headerRight: () => (
            // <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            <>
            </>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
