import React from 'react';
import whyDidYouRender, { WhyDidYouRenderOptions } from '@welldone-software/why-did-you-render';

if (process.env.NODE_ENV === 'development') {
    const options: WhyDidYouRenderOptions = {
        //trackAllPureComponents: true, //does not seem to work
        logOnDifferentValues: true,
        include: [/.*/], //works, too much info
        //include:[/^One/] //does not display the component info
        //customName:'One',

    };

    whyDidYouRender(React, options);
    //whyDidYouRender(React); //tried alogn setting the .whyDidYouRender = true on components, no luck
    //also tried commenting the whole file and only use .whyDidyouRender = {logOnDifferentValues:true} on specific components, no luck
}