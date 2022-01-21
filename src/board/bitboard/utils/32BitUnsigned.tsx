export const U32Converter = (v: number) => v >>> 0;

export const clearRightMostBit = (v: number) => {
    // if last bit is 1
    v = U32Converter(v);
    return U32Converter(v & (v-1));
}

export const popCount1s = (v: number) => {
    v = U32Converter(v);

    // parallel calculation of number of bits every 2 bits (every 2 bits now has either 00, 01 or 10 indicating 
    // number of bits for those 2 bits)
    v = v - ((v >> 1) & 0x55555555);

    // now for every 4 bits, we do a parallel addition of second 2 bits and first 2 bits. Our result now gives us the sum 
    // of 1s every 4 bits of the original number
    v = (v & 0x33333333) + ((v >> 2) & 0x33333333);

    // add adjacent 4-bit bit counts together to get the bit counts of every 8 bits
    v = (v + (v >> 4)) & 0x0F0F0F0F;

    // this gives us original value + value of 2nd byte + value of 3rd byte + value of 4th byte in first byte. we have 
    // to shift by 24 to shit the value down to original magnitude
    return (v * 0x01010101) >> 24
}

export const getPositionOfRightMostBit = (v: number) => {
    v = U32Converter(v);

    return Math.log2(v & -v) + 1;
}