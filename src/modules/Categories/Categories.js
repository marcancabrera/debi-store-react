import React from 'react';

import Tabs from '../../components/Tabs/Tabs';

function Categories (props){
    const content = props.content;

    return (
        <Tabs tabs={content.tabs} icons={content.icons}/>
    );
}

export default Categories;