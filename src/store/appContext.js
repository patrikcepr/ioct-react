import axios from 'axios';
import React, { createContext, useState, useCallback, useEffect } from 'react';

const AppContext = createContext({
  data: [],
  lang: '',
  onChooseLang: () => {},
});

export const AppContextProvider = (props) => {
  const [lang, setLang] = useState('cs');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const chooseCzechHandler = () => {
    setLang('cs');
  };

  const chooseEnglishHandler = () => {
    setLang('en');
  };

  const url =
    'https://private-anon-510a79a142-golemioapi.apiary-mock.com/v2/medicalinstitutions/?latlng=&range=&districts=&group=&limit=&offset=&updatedSince=';
  //'https://private-anon-510a79a142-golemioapi.apiary-mock.com/v2/gardens/?latlng=&range=&districts=&limit=&offset=&updatedSince=';

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhY2thdGhvbkBnb2xlbWlvLmN6IiwiaWQiOjIsIm5hbWUiOiJIYWNrYXRob24iLCJzdXJuYW1lIjoiR29sZW1pbyIsImlhdCI6MTU4NDU0NDYzMSwiZXhwIjoxMTU4NDU0NDYzMSwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjVlNjU2NDQxLTA4OGUtNDYyYS1iMjUyLTFiNzI1OGU0ZGJkYSJ9.ypDAJirgEs8VBSauraFEoLTTtC6y_F8V1fheAHgzMos';

  const getDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token,
        },
      });
      const data = response.data.features;
      setData(() => data);
      console.log(data);
    } catch (error) {
      console.log('error', error);
      setError(() => error.message);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   var request = new XMLHttpRequest();

  //   request.open('GET', url);

  //   request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  //   request.setRequestHeader('x-access-token', token);

  //   request.onreadystatechange = () => {
  //     if (request.readyState === 4) {
  //       console.log(request.responseText);
  //     }
  //   };

  //   request.send();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <AppContext.Provider
      value={{
        data: data,
        isLoading: isLoading,
        error: error,
        lang: lang,
        onChooseLangCzech: chooseCzechHandler,
        onChooseLangEnglish: chooseEnglishHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
