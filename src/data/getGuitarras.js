
export const getGuitarras = async () => {

    try {
        const url = `${process.env.API_URL}/api/guitars?populate=*`
        console.log(url)
        const response = await fetch(url, { cache: 'no-store' })

        const { data } = await response.json();
        return data;
    } catch (error) {

        console.log(error);
    }

}

export const getGuitarra = async (enlace) => {
    try {
        const url = `${process.env.API_URL}/api/guitars?filters[url]=${enlace}&populate=*`
        const response = await fetch(url, { cache: 'no-store' })
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}