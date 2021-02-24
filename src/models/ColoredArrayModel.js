import { head, last, random } from 'lodash';
import { rgbToHex } from '../utils';
import { SPECTRUM_VALUES } from '../utils/constants';
const markA = 'Start';
const markB = 'for';
const markC = 'generation';
const markD = 'generation End';
const markE = 'end';

class ColoredArrayModel {
  defaultValues = { count: 10000 };
  totalCounter = 0;
  separator = '-';
  rgbSeparator = ',';

  getItemProps(item) {
    const propsArray = item.split(this.separator);

    return {
      id: last(propsArray),
      hex: `#${head(propsArray)}`,
    };
  }

  generate(count = this.defaultValues.count) {
    performance.mark(markA);
    const newArray = new Array(count);
    performance.mark(markB);

    for (let i = 0; i < count; i++) {
      performance.mark(markC);

      newArray[i] = `${Math.random().toString(16).substr(2, 6)}${this.separator}${
        this.totalCounter
      }`;

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

  getSpectrumParam(param, value) {
    if (param === SPECTRUM_VALUES.r) {
      return parseInt(value.slice(1, 3), 16);
    }
    if (param === SPECTRUM_VALUES.g) {
      return parseInt(value.slice(3, 5), 16);
    }
    if (param === SPECTRUM_VALUES.b) {
      return parseInt(value.slice(5, 7), 16);
    }
  }

  sortBySpectrum(array, param) {
    return [
      ...array.sort((a, b) => this.getSpectrumParam(param, a) - this.getSpectrumParam(param, b)),
    ];
  }
}

export const coloredArrayModel = new ColoredArrayModel();
