import { SPECTRUM_VALUES } from '../utils/constants';

class ColoredArrayModel {
  defaultValues = { count: 10000 };
  totalCounter = 0;

  generate(count = this.defaultValues.count) {
    const newArray = new Array(count);

    for (let i = 0; i < count; i++) {
      newArray[i] = {
        hex: Math.random().toString(16).substr(2, 6),
        id: this.totalCounter,
      };
      this.totalCounter += 1;
    }

    return newArray;
  }

  getChannelValue(channel, hex) {
    if (channel === SPECTRUM_VALUES.r) {
      return parseInt(hex.slice(0, 2), 16);
    }
    if (channel === SPECTRUM_VALUES.g) {
      return parseInt(hex.slice(2, 4), 16);
    }
    if (channel === SPECTRUM_VALUES.b) {
      return parseInt(hex.slice(4, 6), 16);
    }
  }

  sortByChannel(array, param) {
    return [
      ...array.sort(
        (a, b) => this.getChannelValue(param, a.hex) - this.getChannelValue(param, b.hex),
      ),
    ];
  }
}

export const coloredArrayModel = new ColoredArrayModel();
