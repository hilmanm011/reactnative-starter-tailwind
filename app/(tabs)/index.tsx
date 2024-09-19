import React from 'react';
import { withExpoSnack } from 'nativewind';
import { Text, Pressable } from 'react-native';
import { styled, useColorScheme } from 'nativewind';

const StyledText = styled(Text)
const StyledPressable = styled(Pressable)

const IndexLayoutTab = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <StyledPressable
      onPress={toggleColorScheme}
      className="flex-1 items-center justify-center dark:bg-slate-800"
    >
      <StyledText
        selectable={false}
        className="dark:text-white"
      >
        {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
      </StyledText>
    </StyledPressable>
  );
}

export default withExpoSnack(IndexLayoutTab);
