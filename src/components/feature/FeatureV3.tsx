import FeatureV3Data from '@/assets/jsonData/feature/FeatureV3Data.json';
import SingleFeatureV3 from './SingleFeatureV3';

interface FeatureV3Props {
    items?: any[];
}

const FeatureV3 = ({ items }: FeatureV3Props = {}) => {
    const list = items && items.length > 0 ? items : FeatureV3Data;
    return (
        <>
            <div className="feature-sec feature-sec-2" id="projects">
                <div className="custom-container">
                    <div className="feature-projects-lists-two">
                        {list.map((feature, idx) =>
                            <SingleFeatureV3 feature={feature} key={feature.id ?? idx} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV3;