import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayoutQIV() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#9FC5F2',
        tabBarInactiveTintColor: '#7889A3',

        tabBarStyle: {
          position: 'absolute',
          bottom: 45,
          left: 0,
          right: 0,
          marginHorizontal: 50,
          height: 70,
          backgroundColor: '#1B2940',
          borderTopWidth: 0,
          borderRadius: 22,
          paddingTop: 8,
          paddingBottom: 8,
          elevation: 8,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="sacola"
        options={{
          title: 'Sacola',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'bag-handle' : 'bag-handle-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}