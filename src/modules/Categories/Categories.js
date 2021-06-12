import React from 'react';

import Tabs from '../../components/Tabs/Tabs';

function Categories (props){
    const content = props.content;
    const scssClass = "Categories";

    return (
        <Tabs tabs={content.tabs} icons={content.icons}/>
    );
}

export default Categories;