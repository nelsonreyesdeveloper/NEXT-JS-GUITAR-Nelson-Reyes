
export const getPosts = async () => {

    try {
        const url = `${process.env.API_URL}/api/posts?populate=*`

        const response = await fetch(url, { cache: 'no-store' })

        const { data } = await response.json();
        return data;
    } catch (error) {

        console.log(error);
    }

}

export const getPost = async (enlace) => {
    try {
        const url = `${process.env.API_URL}/api/posts?filters[tag]=${enlace}&populate=*`
        const response = await fetch(url, { cache: 'no-store' })
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}