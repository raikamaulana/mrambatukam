import Footer from "@/raika-project/components/Footer";
import Header from "@/raika-project/components/Header";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Users(props) {
    const { dataUsers } = props;
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Mr. Ambatukam | Users Page</title>
                <meta name='description' content='Website Mr. Ambatukam' />
            </Head>
            <div className='flex flex-col'>
                {/* <Header /> */}
                    <div className="flex-1">
                        <div className="ml-14 mt-28">
                            <div>
                                <h1 className="mb-10">User Page</h1>
                                {dataUsers.map(user => {
                                    return (
                                        <div key={user.id} onClick={() => router.push(`./users/${user.id}`)} className="inline-block w-96 mb-10 shadow-lg border-2 border-slate-200 p-5 md:ml-6 -ml-1 text-center bg-gradient-to-r from-white to-red-200 cursor-pointer hover:bg-gradient-to-r hover:from-white hover:to-blue-400 hover:scale-105 hover:transition-all hover:duration-500">
                                            <div className="">
                                                <p className="font-mono font-bold text-2xl">{user.name}</p>
                                                <p className="text-slate-400">{user.username}</p>
                                                <p className="text-sky-500 font-medium hover:underline cursor-pointer select-none ">{user.email}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        },
    };
};