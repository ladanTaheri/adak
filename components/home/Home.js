import React, { Component, Fragment } from 'react';
import Collection from '../common/collection/Collection';
import SectionSlider from '../common/sectionSlider/SectionSlider';
import About from './about/About';
import Catelogue from './catalogue/Catelogue';
import HeaderSlider from './headerSlider/HeaderSlider';
import styles from './Home.module.css';
import Idea from './idea/Idea';
class Home extends Component {
    state = {}

    render() {
        const calenders = [
            { ID: 1, type: 'سالنامه', name: 'Armitan', imageUrl: '/images/calender/01.jpg' },
            { ID: 2, type: 'سالنامه', name: 'Parniyan', imageUrl: '/images/calender/02.jpg' },
            { ID: 3, type: 'سالنامه', name: 'Arvand', imageUrl: '/images/calender/03.jpg' },
            { ID: 4, type: 'سالنامه', name: 'Barsam', imageUrl: '/images/calender/04.jpg' },
            { ID: 5, type: 'سالنامه', name: 'Nano', imageUrl: '/images/calender/05.jpg' },
            { ID: 6, type: 'سالنامه', name: 'Tisho', imageUrl: '/images/calender/06.jpg' },
            { ID: 7, type: 'سالنامه', name: 'Perada', imageUrl: '/images/calender/07.jpg' },
        ]
        const sets = [
            { ID: 0, type: 'ست مدیریتی', name: '100050', imageUrl: '/images/sets/00.jpg' },
            { ID: 1, type: 'ست مدیریتی', name: '100020', imageUrl: '/images/sets/01.jpg' },
            { ID: 2, type: 'ست مدیریتی', name: '100029', imageUrl: '/images/sets/02.jpg' },
            { ID: 3, type: 'ست مدیریتی', name: '100024', imageUrl: '/images/sets/03.jpg' },
            { ID: 4, type: 'ست مدیریتی', name: '100022', imageUrl: '/images/sets/04.jpg' },
            { ID: 5, type: 'ست مدیریتی', name: '100021', imageUrl: '/images/sets/05.jpg' },
            { ID: 6, type: 'ست مدیریتی', name: '100054', imageUrl: '/images/sets/06.jpg' },
            { ID: 7, type: 'ست مدیریتی', name: '100053', imageUrl: '/images/sets/07.jpg' },
            { ID: 8, type: 'ست مدیریتی', name: '100043', imageUrl: '/images/sets/08.jpg' },
            { ID: 9, type: 'ست مدیریتی', name: '100042', imageUrl: '/images/sets/09.jpg' },
            { ID: 10, type: 'ست مدیریتی', name: '100040', imageUrl: '/images/sets/10.jpg' },
            { ID: 11, type: 'ست مدیریتی', name: '100031', imageUrl: '/images/sets/11.jpg' },
            { ID: 12, type: 'ست مدیریتی', name: '100030', imageUrl: '/images/sets/12.jpg' },
            { ID: 13, type: 'ست مدیریتی', name: '100044', imageUrl: '/images/sets/13.jpg' },
            { ID: 14, type: 'ست مدیریتی', name: '100024', imageUrl: '/images/sets/14.jpg' },
            { ID: 15, type: 'ست مدیریتی', name: '100041', imageUrl: '/images/sets/15.jpg' }
        ]
        const pens = [
            { ID: 1, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/01.jpg' },
            { ID: 2, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/02.jpg' },
            { ID: 3, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/03.jpg' },
            { ID: 4, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/04.jpg' },
            { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/05.jpg' },
            { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/06.jpg' },
            { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/07.jpg' },
            { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/08.jpg' },
            { ID: 5, type: 'قلم نفیس', name: 'Cartie', imageUrl: '/images/pen/carteie/09.jpg' },
        ]
        return (
            <Fragment>
                <HeaderSlider />
            
                <SectionSlider title="سالنامه" items={calenders} />
                <SectionSlider title="قلم های نفیس Carteie" items={pens} />
                <Collection items={sets} title="ست های مدیریتی" />
                <Catelogue/>
                <Idea />
                <About />
            </Fragment>
        );
    }
}

export default Home;
