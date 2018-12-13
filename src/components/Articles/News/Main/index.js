import React from 'react'

import NewsSlider from '../../../widgets/NewsSlider/slider'
import NewsList from "../../../widgets/NewsList/newsList"

const NewaMain = () => (
    <div>
        <NewsSlider
            type="featured"
            settings={{dots:false}}
            start={0}
            amount={5}
        />
        <NewsList
            type="cardMain"
            loadMore={true}
            start={6}
            amount={5}
        />
    </div>
);

export default NewaMain;