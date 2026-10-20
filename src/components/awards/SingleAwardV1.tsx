interface DataType {
    id: number;
    title: string;
    date: string;
}

const SingleAwardV1 = ({ award }: { award: DataType }) => {
    const { title, date } = award;

    return (
        <>
            <div className="awards-inner">
                <div className="overlay" />
                <h4>{title}</h4>
                <span className="date">{date}</span>
            </div>
        </>
    );
};

export default SingleAwardV1;