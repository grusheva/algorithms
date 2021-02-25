import { SPECTRUM_VALUES } from '../utils/constants';
const markA = 'Start';
const markB = 'for';
const markC = 'generation';
const markD = 'generation End';
const markE = 'end';

class ColoredArrayModel {
  defaultValues = { count: 10000 };
  totalCounter = 0;

  generate(count = this.defaultValues.count) {
    performance.mark(markA);
    const newArray = new Array(count);
    performance.mark(markB);

    for (let i = 0; i < count; i++) {
      performance.mark(markC);
      const hex = Math.random().toString(16).substr(2, 6);
      newArray[i] = {
        hex,
        id: this.totalCounter,
      };
      this.totalCounter += 1;
      performance.mark(markD);
    }
    performance.mark(markE);
    performance.measure('measure start to for (a-b)', markA, markB);
    performance.measure('measure for to generation (b-c)', markB, markC);
    performance.measure('measure generation to generation End (c-d)', markC, markD);
    performance.measure('measure generation End to end (d-e)', markD, markE);
    performance.measure('measure start to end (a-e)', markA, markE);
    console.log(performance.getEntriesByType('measure'));
    performance.clearMarks();
    performance.clearMeasures();

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
