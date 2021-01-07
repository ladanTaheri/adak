import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Product from '../../components/product/Product';

const Index = () => {
    const router = useRouter()
    const { name } = router.query;
    console.log(name);

    return (
        <Fragment>
            <Head>
                <title>{name}</title>
            </Head>
            <Product title={name}/>  
        </Fragment>
    );
}

export default Index;