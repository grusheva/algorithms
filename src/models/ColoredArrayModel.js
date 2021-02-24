import { head, last, random } from 'lodash';
import { rgbToHex } from '../utils';
import { SPECTRUM_VALUES } from '../utils/constants';
const markA = 'Start';
const markB = 'for';
const markC = 'generation';
const markD = 'generation End';
const markE = 'end';

class ColoredArrayModel {
  defaultValues = { count: 10000, rgbLimits: { min: 0, max: 256 } };
  totalCounter = 0;
  separator = '-';
  rgbSeparator = '-';

  getItemProps(item) {
    const propsArray = item.split(this.separator);
    const rgb = head(propsArray);

    return {
      id: last(propsArray),
      rgb: `rgb(${rgb})`,
    };
  }

  getRandomParam() {
    return random(this.defaultValues.rgbLimits.min, this.defaultValues.rgbLimits.max);
  }

  generate(count = this.defaultValues.count) {
    performance.mark(markA);
    const newArray = new Array(count);
    performance.mark(markB);

    for (let i = 0; i < count; i++) {
      performance.mark(markC);

      newArray[i] = `${this.getRandomParam()},${this.getRandomParam()},${this.getRandomParam()}${
        this.separator
      }${this.totalCounter}`;

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
    const { rgb } = this.getItemProps(value);
    const rgbArr = rgb.split(this.rgbSeparator);

    if (param === SPECTRUM_VALUES.r) {
      return rgbArr[0];
    }
    if (param === SPECTRUM_VALUES.g) {
      return rgbArr[1];
    }
    if (param === SPECTRUM_VALUES.b) {
      return rgbArr[2];
    }
  }

  sortBySpectrum(array, param) {
    return [
      ...array.sort((a, b) => this.getSpectrumParam(param, a) - this.getSpectrumParam(param, b)),
    ];
  }
}

export const coloredArrayModel = new ColoredArrayModel();
