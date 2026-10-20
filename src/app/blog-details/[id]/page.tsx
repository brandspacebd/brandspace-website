import FeatureV3Data from '@/assets/jsonData/feature/FeatureV3Data.json';
import BlogDetailsContent from '@/components/blog/BlogDetailsContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV3 from '@/components/layouts/LayoutV3';

export const metadata = {
    title: "Aixor - Blog Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = FeatureV3Data.find(feature => feature.id === parseInt(id))

    return (
        <div className="aixor-main contact-page">
            <LayoutV3>
                <Breadcrumb />
                {data && <BlogDetailsContent blogData={data} />}
            </LayoutV3>
        </div>
    );
};

export default BlogDetailsPage;
