import { random } from 'lodash';
import { rgbToHex } from '../utils';
import { SPECTRUM_VALUES } from '../utils/constants';

class ColoredArrayModel {
  defaultValues = { count: 1000, rgbLimits: { min: 0, max: 256 } };
  totalCounter = 0;

  getItem() {
    const rgb = {};
    Object.values(SPECTRUM_VALUES).forEach(spectrum => {
      rgb[spectrum] = random(this.defaultValues.rgbLimits.min, this.defaultValues.rgbLimits.max);
    });

    return { rgb, hex: rgbToHex(rgb) };
  }
  generate(count = this.defaultValues.count) {
    const newArray = [];

    for (let i = 0; i < count; i++) {
      newArray[i] = { ...this.getItem(), id: this.totalCounter };
      this.totalCounter += 1;
    }

    return newArray;
  }

  sortBySpectrum(array, param) {
    return [
      ...array.sort((a, b) => {
        return a.rgb[param] - b.rgb[param];
      }),
    ];
  }
}

export const coloredArrayModel = new ColoredArrayModel();
