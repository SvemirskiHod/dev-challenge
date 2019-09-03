import uuidBase62 from 'uuid-base62';

export default {
  encode(uuid) {
    return uuidBase62.encode(uuid);
  },
  decode(base62String) {
    return uuidBase62.decode(base62String);
  },
}
