function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer with a size in bytes
  const buffer = new ArrayBuffer(length);
  const byteOffset = 0;

  // Create view to access array buffer
  const view = new DataView(buffer);

  if (byteOffset + length > buffer.byteLength) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value); // Put value in position
  console.log(buffer);
  console.log(view);

  return view;
}

export default createInt8TypedArray;
