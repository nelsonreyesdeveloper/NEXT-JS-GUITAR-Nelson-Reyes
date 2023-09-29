export const getCurso = async () => {
    try {
        const url = `${process.env.API_URL}/api/curso?populate=*`
        const response = await fetch(url, { cache: 'no-store' })
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}