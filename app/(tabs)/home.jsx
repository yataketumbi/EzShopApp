import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, TextInput, Alert, Image } from 'react-native';

const items = {
  Upper: [
    { id: '1', name: 'BSIT Departmental Shirt', price: '$20', image: 'https://diamondgarments.com/wp-content/uploads/customized-polo-shirt-design-service-philippines-02.webp' },
    { id: '2', name: 'BSIT Intramural Shirt', price: '$25', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzdyFa7c5WbzLkbClqjaFo0OB21uO-THFSA&s' },
  ],
  Lower: [
    { id: '3', name: 'Jeans', price: '$30', image: 'https://down-ph.img.susercontent.com/file/ph-11134207-7r98y-lvpu6axvtu506f' },
    { id: '4', name: 'Shorts', price: '$15', image: 'https://img.lazcdn.com/g/p/b9e269655562bb725bae9409aec8264b.jpg_720x720q80.jpg' },
  ],
  Shoes: [
    { id: '5', name: 'Sneakers', price: '$50', image: 'https://img.lazcdn.com/g/p/3ade265bc282793aafeefcf29aab028a.jpg_720x720q80.jpg' },
    { id: '6', name: 'Boots', price: '$70', image: 'https://img.lazcdn.com/g/p/f218d47ef42386480812881b8140777a.jpg_720x720q80.jpg' },
  ],
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Upper');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [purchases, setPurchases] = useState([]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
      >
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );

  const handleBuy = () => {
    if (email.trim() && password.trim() && location.trim() && contact.trim() && quantity.trim()) {
      const purchaseDetails = {
        name: selectedItem.name,
        email,
        location,
        contact,
        quantity,
      };

      setPurchases((prev) => [...prev, purchaseDetails]);

      Alert.alert('Purchase Successful', `Bought ${quantity} x ${selectedItem.name}\nEmail: ${email}\nLocation: ${location}\nContact: ${contact}`);

      setEmail('');
      setPassword('');
      setLocation('');
      setContact('');
      setQuantity('1');
      setModalVisible(false);
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  const renderPurchases = ({ item }) => (
    <View style={styles.purchaseItem}>
      <Text style={styles.itemName}>Product: {item.name}</Text>
      <Text style={styles.itemDetails}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemDetails}>Email: {item.email}</Text>
      <Text style={styles.itemDetails}>Location: {item.location}</Text>
      <Text style={styles.itemDetails}>Contact: {item.contact}</Text>
    </View>
  );

  return (
    
   <View style={styles.container}>
      <Text style={styles.title}>EzShop</Text>
      <View style={styles.buttonContainer}>
        {Object.keys(items).map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.selectedButton]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={items[selectedCategory]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.purchasesHeader}>Recorded Purchases</Text>
      <FlatList
        data={purchases}
        renderItem={renderPurchases}
        keyExtractor={(item, index) => index.toString()}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Enter Your Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              value={contact}
              onChangeText={setContact}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Quantity"
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.confirmButton} onPress={handleBuy}>
              <Text style={styles.buttonText}>Confirm Purchase</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#0056b3',
  },
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    elevation: 2,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#555',
  },
  buyButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  confirmButton: {
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  cancelButton: {
    padding: 10,
    backgroundColor: '#dc3545',
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  purchasesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  purchaseItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#e8f0fe',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  itemDetails: {
    fontSize: 16,
    color: '#666',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
