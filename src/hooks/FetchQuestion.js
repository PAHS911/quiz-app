import { useState } from "react";

/**fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
  const [getData, setGetData] = useState({
    loading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() =>{
    setGetData(prev => ({...prev, isLoading : true}))
  })

  /**async function fetch backend data */

};
