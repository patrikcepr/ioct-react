import axios from 'axios';
import React, { createContext, useState, useCallback, useEffect } from 'react';

const AppContext = createContext({
  data: [],
  lang: '',
  onChooseLang: () => {},
  detail: {},
  isLoading: Boolean,
  error: null,
  showModalState: Boolean,
  hideModal: () => {},
  showModal: () => {},
  setApikey: () => {},
  apikey: '',
});

export const AppContextProvider = (props) => {
  const [lang, setLang] = useState('cs');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState({});
  const [apikey, setApikey] = useState('');

  const chooseLangHandler = (lang) => {
    setLang(lang);
  };

  const mockUrl =
    'https://private-anon-510a79a142-golemioapi.apiary-mock.com/v2/medicalinstitutions/?latlng=&range=&districts=&group=&limit=&offset=&updatedSince=';

  const productionUrl =
    'https://api.golemio.cz/v2/medicalinstitutions/?latlng=&range=&districts=&group=&limit=21&offset=&updatedSince=';

  const publicToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhY2thdGhvbkBnb2xlbWlvLmN6IiwiaWQiOjIsIm5hbWUiOiJIYWNrYXRob24iLCJzdXJuYW1lIjoiR29sZW1pbyIsImlhdCI6MTU4NDU0NDYzMSwiZXhwIjoxMTU4NDU0NDYzMSwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjVlNjU2NDQxLTA4OGUtNDYyYS1iMjUyLTFiNzI1OGU0ZGJkYSJ9.ypDAJirgEs8VBSauraFEoLTTtC6y_F8V1fheAHgzMos';

  // const myToken =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdHJpay5jZXByQGdtYWlsLmNvbSIsImlkIjoxMDQ2LCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NDIzNTE2NzcsImV4cCI6MTE2NDIzNTE2NzcsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiJhMGQ3NWM2MS1mOTkxLTRkZWEtOGNlZi1hZjg0NGQyZjBhOWYifQ.tr4ZhXhIGVqGz9dzWoyGI-iRFCuvfON16nbhlwcyfiw';

  let url;
  let token;

  if (apikey) {
    url = productionUrl;
    token = apikey;
  } else {
    url = mockUrl;
    token = publicToken;
  }

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
      // console.log(data);
    } catch (error) {
      console.log('error', error);
      setError(() => error.message);
    }
    setIsLoading(false);
  }, [token, url]);

  useEffect(() => {
    getDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apikey]);

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const showModalHandler = (index) => {
    setDetail(data[index]);
    setShowModal(true);
    scrollToTop();
  };

  return (
    <AppContext.Provider
      value={{
        data: data,
        isLoading: isLoading,
        error: error,
        lang: lang,
        onChooseLang: chooseLangHandler,
        detail: detail,
        showModalState: showModal,
        hideModal: hideModalHandler,
        showModal: showModalHandler,
        setApikey: setApikey,
        apikey: apikey,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
