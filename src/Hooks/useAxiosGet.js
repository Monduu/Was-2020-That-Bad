import {useState, useEffect}  from 'react';
import axios from 'axios';

function useAxiosGet(uri) {
    const [request, setRequest] = useState({
        loading: true,
        data: null,
    });

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
        });
        const url = `http://localhost:3001/${uri}`;

        axios.get(url)
            .then((response) => {
                setRequest({
                    loading: false,
                    data: response.data,
                });
            }).catch((error) => {
                console.log('failed to retrieve', error)
                setRequest({
                    loading: false,
                    data: null,
                });
            });
    }, [uri]);

    return request;
}

export default useAxiosGet;