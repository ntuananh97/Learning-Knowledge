import React, { useRef, useState } from "react";

// Hàm kiểm tra xem giá trị có còn hợp lệ không
function isExpired(expirationTime) {
  const now = Date.now();
  return now > expirationTime; // Trả về true nếu đã hết hạn
}

// Create a custom hook to fetch data
// This hook will fetch data from the url and cache it for 10 seconds
// If the data is still valid, it will return the cached data
// If the data is expired, it will fetch new data and cache it
const useDataFetcher = (url) => {
  const cacheDataRef = useRef(undefined);
  const [data, setData] = useState(undefined);

  React.useEffect(() => {
    const createAndSaveCacheData = (response) => {
      const cacheData = cacheDataRef.current || {};
      const newCacheUrlData = {
        value: response,
        expirationTime: Date.now() + 10000,
      };
      cacheDataRef.current = {
        ...cacheData,
        [url]: newCacheUrlData,
      };
    };

    const fetchData = async () => {
      const cacheData = cacheDataRef.current || {};
      const urlCache = cacheData[url];
      if (urlCache && !isExpired(urlCache.expirationTime)) {
        setData(urlCache.value);
        return;
      }
      // set data
      // save to cache
      const response = `Data from ${url}: ${Math.random()}`;
      createAndSaveCacheData(response);
      setData(response);
    };

    fetchData();
  }, [url]);

  return data;
};

const URLS = [
  "https://api.example.com/data",
  "https://api.example.com/data2",
  "https://api.example.com/data3",
];

const CacheDataFetcher = () => {
  const [index, setIndex] = useState(0);
  const url = URLS[index];
  const data = useDataFetcher(url);

  const setUrl = () => {
    const newIndex = index + 1;
    if (newIndex >= URLS.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <div>
      <p>Url: {url}</p>
      CacheDataFetcher: {data}
      <button onClick={setUrl}>Set url</button>
    </div>
  );
};

export default CacheDataFetcher;
