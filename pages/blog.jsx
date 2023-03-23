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
                        <div className="ml-0 md:ml-14 mt-28">
                            <p className="text-red-500 ml-5">Blog Page</p>

                            <p className="ml-5">Lorem teme apa yang ku bicarakan bocah kau aku lagi ambasing oowww wwwwdwq qwwqdwqshi dksjdnan insajdsna as asn jdnsa</p>
                            { dataBlog.map( blog => {
                                return (
                                    <div key={blog.id} className="md:flex md:w-[800px] w-96 p-[10px] rounded-[4px] md:my-5 md:ml-5 mx-auto my-5 border-2 border-slate-700">
                                        <div className="mr-0 md:mr-5">
                                            <img src="https://source.unsplash.com/200x150?anime" width={150} height={150} className='w-full'/>
                                            <p className="-mt-2 md:mt-2 text-center text-slate-400 translate-y-2">{blog.id}</p>
                                        </div>
                                        <div className="flex-1 mt-5 md:mt-0">
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
