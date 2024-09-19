import React from 'react';
import { withExpoSnack } from 'nativewind';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const ProfileTabScreen = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-blue-700">
        Profile Tab Screen
      </StyledText>
    </StyledView>
  );
}

export default withExpoSnack(ProfileTabScreen);
