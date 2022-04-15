/** @format */

import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { portfolio, trendingCurrencies } from "../data/dummy";

function HomeScreen(props) {
  const [trending, setTrending] = useState(trendingCurrencies);

  const trendingCards = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[
          {
            margin: 5,
            borderRadius: 10,
            width: 180,
            backgroundColor: "white",
          },
          styles.shadow,
        ]}
      >
        {/* Currency */}
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            margin: 5,
          }}
        >
          <Image source={item.image} style={{ height: 25, width: 25 }} />
          <View style={{ margin: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.currency}
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
              {item.code}
            </Text>
          </View>
        </View>
        {/* value */}
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            ${item.amount}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: item.type == "I" ? "green" : "red",
            }}
          >
            {item.changes}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={[styles.shadow, { flex: 1 }]}>
        <ImageBackground
          style={{ width: "100%" }}
          source={require("../assets/banner.png")}
        >
          {/* header section */}
          <View style={[styles.headerSection, styles.shadow]}>
            {/* header bar  */}
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 50,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <MaterialCommunityIcons name="menu" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            {/* balance */}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                Your Portfolio Balance{" "}
              </Text>
              <Text
                style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
              >
                ${portfolio.balance}
              </Text>
              <Text style={{ color: "white" }}>
                {portfolio.changes} in the last 24hrs
              </Text>
            </View>
            {/* trending section */}
            <View
              style={{
                marginHorizontal: 20,
                position: "absolute",
                bottom: -70,
              }}
            >
              <Text
                style={[
                  {
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 20,
                  },
                  styles.shadow,
                ]}
              >
                Trending
              </Text>

              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={trending}
                renderItem={trendingCards}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </ImageBackground>
        {/* set price alarm */}
        <TouchableOpacity
          style={[
            {
              margin: 5,
              borderRadius: 10,
              width: "90%",
              height: 90,
              backgroundColor: "white",
              marginTop: 80,
              marginHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
            },
            styles.shadow,
          ]}
        >
          <View style={{ margin: 5 }}>
            <MaterialCommunityIcons name="bell-ring" size={24} color="gold" />
          </View>
          <View style={{ margin: 10 }}>
            <Text>Set Price Alert</Text>
            <Text>Get notified when your coins are moving</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        {/* investing notice */}
        <TouchableOpacity
          style={[
            {
              margin: 5,
              borderRadius: 10,
              width: "90%",
              height: 150,
              backgroundColor: "blue",
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
            },
            styles.shadow,
          ]}
        >
          <View
            style={{
              margin: 5,
              justifyContent: "center",
              marginHorizontal: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Investing safety
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>
              It's very difficult to time an investment especially when the
              market is volatile. Learn how to use dollar cost averaging to your
              advanatge
            </Text>
            <Text style={{ color: "#37E39F", fontSize: 14 }}>Learn More</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    height: 300,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default HomeScreen;
