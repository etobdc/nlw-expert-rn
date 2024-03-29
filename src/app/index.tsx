import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button';

import { CATEGORIES } from '@/utils/data/products'; 

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategorySelec(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className="pt-8">
      <Header title="Faça seu pedido" cardQuantityItems={3} />
      
      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({item}) => <CategoryButton title={item} isSelected={item === category} onPress={() => handleCategorySelec(item)} />}
        horizontal
        className='max-h-10 mt-5'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
      />
    </View>
  )
}