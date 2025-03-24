export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const {
        $api,
        $toast
    } = useNuxtApp();
    // const { signOut, info } = useAuthentication()
    const api = $fetch.create({
        baseURL: config.public.baseURL,
        onRequest({ request, options, error }) {
            // const { token } = useAuthentication()
            // if (token.value) {
            //     // options.headers.set('Content-Type', 'application/json');
            //     // options.headers.set('Content-Type', 'multipart/form-data');

            // }
            // options.headers.set('Authorization', `Bearer null`)
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                // console.log(response.statusText)
                // const parseInfo = JSON.parse(info.value);
                // await signOut(parseInfo.id)
                // await nuxtApp.runWithContext(() => navigateTo('/auth'))
                $toast.error(response)
            }
        }
    })
    return {
        provide: {
            api
        }
    }
})