import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from '../keys';
import Response from '../Response';
import {useRouter} from 'next/router';
import SearchResults from '../components/SearchResults'; 
const search = ({results}) => { 
    const Router = useRouter()

    return   <div>
            <Head>
                <title> {Router.query.term} - Google Search</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
            </Head>
            {/* Header */}
            <Header/>  
            {/* Search Results */}
            <SearchResults results={results} />
          
        </div> 
}

export default search

export async function  getServerSideProps(context){
    const useDummyData = false
    const  startIndex = context.query.start || "0"

    const data = useDummyData ? Response :  await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
                        .then((res=>res.json()))
    // After the SERVER has rendered... Pass the results to the clients...

    return {
        props:{
            results:data
        }
    }
}