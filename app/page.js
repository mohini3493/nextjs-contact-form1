
import Layout from "@/components/layout/Layout"
import About7 from "@/components/sections/About7"
import Blog7 from "@/components/sections/Blog7"
import Client5 from "@/components/sections/Client5"
import Service8 from "@/components/sections/Service8"
import Slider7 from "@/components/sections/Slider7"

export default function Home() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <Slider7 />
                <About7 />
                <Service8 />
                <Client5 />
                <Blog7 />
            </Layout>
        </>
    )
}