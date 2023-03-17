import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Blog(props) {
    const { dataBlog } = props;
    return (
        <>
            <Head>
                <title>Mr. Ambatukam | Blog Page</title>
                <meta name='description' content='Website Mr. Ambatukam' />
            </Head>
            <div className='flex flex-col'>
                {/* <Header /> */}
                    <div className="flex-1">
                        <div className="ml-14 mt-28">
                            <p className="text-red-500">Blog Page</p>

                            <p>Lorem teme apa yang ku bicarakan bocah kau aku lagi ambasing oowww wwwwdwq qwwqdwqshi dksjdnan insajdsna as asn jdnsa</p>
                            { dataBlog.map( blog => {
                                return (
                                    <div key={blog.id} className="flex w-[800px] p-[10px] rounded-[4px] my-5 ml-5 border-2 border-slate-700">
                                        <div className="mr-5">
                                            <img src="https://source.unsplash.com/200x150?anime" width={200} height={150}/>
                                            <p className="mt-2 text-center text-slate-400 translate-y-2">{blog.id}</p>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="m-0 text-2xl font-bold text-slate-800 mb-4">{blog.title}</h3>
                                            <p className="m-0 text-md text-slate-700">{blog.body}</p>
                                        </div>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();
    return {
        props: {
            dataBlog,
        }
    }
}
