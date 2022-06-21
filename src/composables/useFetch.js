import {ref, isRef, unref, watchEffect} from 'vue'

export function useFetch(url) {
    console.log(1, url?.value)
    const data = ref(null)
    const error = ref(null)

    async function doFetch() {
        console.log(4)
        // reset state before fetching..
        data.value = null
        error.value = null

        // resolve the url value synchronously so it's tracked as a
        // dependency by watchEffect()
        const urlValue = unref(url)
        console.log(5, urlValue)

        try {
            // artificial delay / random error
            await timeout()
            // unref() will return the ref value if it's a ref
            // otherwise the value will be returned as-is
            const res = await fetch(urlValue)
            data.value = await res.json()
            console.log(6)
        } catch (e) {
            error.value = e
        }
    }

    if (isRef(url)) {
        console.log(2)
        // setup reactive re-fetch if input URL is a ref
        watchEffect(doFetch)
    } else {
        console.log(3)
        // otherwise, just fetch once
        doFetch()
    }

    return {data, error, retry: doFetch}
}

// artificial delay
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve()
            } else {
                reject(new Error('Random Error'))
            }
        }, 300)
    })
}
