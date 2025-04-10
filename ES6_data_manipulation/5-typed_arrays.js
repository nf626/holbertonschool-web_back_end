function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer with a size in bytes
  const buffer = new ArrayBuffer(length);

  // Create view to access array buffer
  const view = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value); // Put value in position

  return view;
}

export default createInt8TypedArray;
