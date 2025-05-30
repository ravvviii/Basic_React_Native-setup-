import { Picker } from '@react-native-picker/picker'; // <-- Import Picker
import React, { useState } from 'react';
import { Alert, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppStore } from '../../lib/store';

// 1. Define the FormData type
type FormField = 'username' | 'email' | 'password';

type RoleOption = 'user' | 'admin' | 'chef';

interface FormData {
  username: string;
  email: string;
  password: string;
  role: RoleOption;
}

const roleOptions: RoleOption[] = ['user', 'admin', 'chef'];

const AddDetails: React.FC = () => {
  const addUser = useAppStore((state) => state.addUser);

  // 2. Type the state
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });

  // 3. Type the handleChange function
  const handleChange = (key: FormField, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // 4. Submit handler
  const handleSubmit = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    await addUser(formData);
    Alert.alert('Success', 'User added successfully');
    setFormData({ username: '', email: '', password: '', role: 'user' });
  };

  // 5. Field array for mapping
  const inputFields: FormField[] = ['username', 'email', 'password'];

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 20,
        backgroundColor: '#f5f5f5',
        flexGrow: 1,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>
        Add New User
      </Text>

      {inputFields.map((field) => (
        <View style={{ marginBottom: 16 }} key={field}>
          <Text style={{ marginBottom: 4, textTransform: 'capitalize' }}>{field}</Text>
          <TextInput
            style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8 }}
            placeholder={`Enter ${field}`}
            secureTextEntry={field === 'password'}
            value={formData[field]}
            onChangeText={(text) => handleChange(field, text)}
            autoCapitalize="none"
          />
        </View>
      ))}

      <View style={{ marginBottom: 24 }}>
        <Text style={{ marginBottom: 4 }}>Role</Text>
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          overflow: 'hidden',
        }}>
          <Picker
            selectedValue={formData.role}
            onValueChange={(itemValue) =>
              setFormData((prev) => ({ ...prev, role: itemValue as RoleOption }))
            }
            style={{ height: 50 }}
          >
            {roleOptions.map((role) => (
              <Picker.Item label={role.charAt(0).toUpperCase() + role.slice(1)} value={role} key={role} />
            ))}
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        style={{ backgroundColor: '#3b82f6', paddingVertical: 12, borderRadius: 8 }}
        onPress={handleSubmit}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddDetails;
