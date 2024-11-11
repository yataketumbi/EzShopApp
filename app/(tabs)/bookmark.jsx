import { View, Text, FlatList, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';

const ViewYourOrders = () => {
  const orders = [
    { 
      id: '1', 
      productName: 'BSIT Departmental Shirt', 
      quantity: 140, 
      status: 'Delivered',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PECYFd7d4y0vIavozbOhI4R2hEjuupX5dw&s' // Replace with your actual image URL
    },
    { 
      id: '2', 
      productName: 'Intramural Shirt', 
      quantity: 132, 
      status: 'Pending',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzdyFa7c5WbzLkbClqjaFo0OB21uO-THFSA&s' // Replace with your actual image URL
    },
    { 
      id: '3', 
      productName: 'Sneakers Shoes', 
      quantity: 51, 
      status: 'Shipped',
      imageUrl: 'https://img.lazcdn.com/g/p/3ade265bc282793aafeefcf29aab028a.jpg_720x720q80.jpg' // Replace with your actual image URL
    },
    // Add more sample orders here
  ];

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>Product: {item.productName}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.status}>Status: {item.status}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'data:image/jpeg;base64,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' }} // Replace with your background image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Your Orders</Text>
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(249, 249, 249, 0.8)', // Semi-transparent background for readability
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  orderItem: {
    flexDirection: 'row', // Align items in a row
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 15, // Space between image and text
  },
  textContainer: {
    flex: 1, // Allow the text container to take up the remaining space
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    color: '#666',
  },
  status: {
    fontSize: 16,
    color: '#007BFF', // Color for status
  },
});

export default ViewYourOrders;
