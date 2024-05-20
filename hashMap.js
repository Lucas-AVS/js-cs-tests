function HashMap() {
  let buckets = new Array(16).fill(null).map(() => []);

  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    let mod = hashCode % buckets.length;
    return mod;
  }

  function set(key, value) {
    const bucketIndex = hash(key);
    const bucket = buckets[bucketIndex];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }
    bucket.push({ key, value });
  }

  function get(key) {
    const bucketIndex = hash(key);
    const bucket = buckets[bucketIndex];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return bucket[i].value;
      }
    }
  }

  function has(key) {
    const bucketIndex = hash(key);
    const bucket = buckets[bucketIndex];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return true;
      } else {
        return false;
      }
    }
  }

  function remove(key) {
    const bucketIndex = hash(key);
    let bucket = buckets[bucketIndex];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);

        return true;
      }
      return false;
    }
  }

  return {
    buckets,
    set,
    get,
    has,
    remove,
  };
}

let myBuckets = HashMap();

console.log(myBuckets);
