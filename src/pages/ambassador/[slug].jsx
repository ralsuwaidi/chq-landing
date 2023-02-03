import axios from "axios";

export async function getServerSideProps(ctx){
    const headers = {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    }
    const { data } = await axios.get(`${process.env.API_URL}/ambassadors?filters[slug][$eq]=${ctx.query.slug}`, headers)

    return {
        props: {
            ambassador: data.data
        }
    }
}

export default function AmbassadorDetail({ambassador}){
    console.log(ambassador)
    return (
        <div></div>
    )
}