import FeatureV2Data from '@/assets/jsonData/feature/FeatureV2Data.json';
import SingleFeatureV2 from './SingleFeatureV2';

interface FeatureV2Props {
    items?: any[];
}

const FeatureV2 = ({ items }: FeatureV2Props = {}) => {
    const list = items && items.length > 0 ? items : FeatureV2Data;
    return (
        <>
            <div className="feature-sec feature-sec-2" id="projects">
                <div className="custom-container">
                    <div className="feature-projects-lists">
                        {list.map((feature, idx) =>
                            <SingleFeatureV2 feature={feature} key={feature.id ?? idx} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV2;