import { Tabs as TabsIQV } from 'expo-router';
import { Ionicons as IoniconsIQV } from '@expo/vector-icons';

export default function LayoutTabsIQV() {
  return (
    <TabsIQV
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#1659e9',
        tabBarInactiveTintColor: '#8A96AA',

        tabBarStyle: {
          backgroundColor: '#232c62',
          height: 50,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopColor: '#EEEEEE',
        },

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
      }}
    >
        {/* Aba Lista */}
      <TabsIQV.Screen
        name="ListaP"
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color: corIQV, size: tamanhoIQV }) => (
            <IoniconsIQV
              name="list-outline"
              color={corIQV}
              size={tamanhoIQV}
            />
          ),
        }}
      />  

        {/* Aba Sobre */}
      <TabsIQV.Screen
        name="Sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color: corIQV, size: tamanhoIQV }) => (
            <IoniconsIQV
              name="information-circle-outline"
              color={corIQV}
              size={tamanhoIQV}
            />
          ),
        }}
      />

    </TabsIQV>
  )
}

