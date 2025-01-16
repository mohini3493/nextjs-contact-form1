import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={7} footerStyle={7} breadcrumbTitle="Blog">
                <div>
                    <div className="cloginner-3-sevtion-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <BlogPost showItem={6} style={2} />
                            </div>
                        </div>
                    </div>
                    {/*===== BLOG 3 END=======*/}
                    
                </div>

            </Layout>
        </>
    )
}