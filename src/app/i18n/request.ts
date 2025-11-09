// import { getRequestConfig } from 'next-intl/server';
// import { cookies } from 'next/headers';

// import en from './../../../messages/en.json';

// import es from './../../../messages/es.json';

// export default getRequestConfig(async () => {
//     console.log("i am called??")
//     const cookieStore = cookies();
//     const locale = (await cookieStore).get('ln')?.value || 'en';

//     const messagesMap: Record<string, any> = { en, es };
//     const messages = messagesMap[locale] || en;

//     console.log("get requrdst confit", locale, messages)

//     return { locale, messages };
// });


import { getRequestConfig } from 'next-intl/server';

import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const cookieStore = cookies(); // no await
    const locale = (await cookieStore).get('ln')?.value || 'en';
    // const locale = Cookies.get('ln') || 'en'

    console.log("getRequestConfig locale:", locale);

    return {
        locale,
        messages: (await import(`./../../../messages/${locale}.json`)).default
    };
});

