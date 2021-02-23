class ColoredArrayModel {
  defaultValues = { length: 1000 };

  generate(length = this.defaultValues.length) {
    console.log('gen');
    return [];
  }
}

export const coloredArrayModel = new ColoredArrayModel();
