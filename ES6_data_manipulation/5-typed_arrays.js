function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, position);

  view.setInt8(0, value);
  view.getInt8(1);
  console.log(view.getInt8(1));

  return `DataView {
        byteLength: ${length},
        byteOffset: 0,
        buffer: ArrayBuffer {
          [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
          byteLength: 10
        }
      }`;

}

export default createInt8TypedArray;
