import React from 'react';
import {View, Image, DimensionValue} from 'react-native';
import {useTheme} from '../../hooks';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const Brand = ({height, width, mode}: Props) => {
  const {Layout, Images} = useTheme();

  return (
    <View
      testID={'brand-img-wrapper'}
      style={[Layout.alignItemsCenter, Layout.fullWidth]}>
      <Image
        testID={'brand-img'}
        style={[Layout.fullSize, {height, width}]}
        source={Images.logo}
        resizeMode={mode}
      />
    </View>
  );
};

Brand.defaultProps = {
  height: 180,
  width: 180,
  mode: 'contain',
};

export default Brand;
