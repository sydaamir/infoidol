import '../Body/TagBar.css';
import tag1 from "../Assets/la.jpg";

const TagBar = () => {
    return (
        <section className="Tags-Bar">
            <div className="TagBar-Elems">
                <a href="">
                    <img src={tag1} alt="tag1"/>
                        <span>Dance</span>
                </a>
            </div>

            <div className="TagBar-Elems">
                <a href="">
                    <img src={tag1} alt=""/>
                        <span>Dance</span>
                </a>
            </div>

            <div className="TagBar-Elems">
                <a href="">
                    <img src={tag1} alt=""/>
                        <span>Dance</span>
                </a>
            </div>

            <div className="TagBar-Elems">
                <a href="">
                    <img src={tag1} alt=""/>
                        <span>Dance</span>
                </a>
            </div>

            <div className="TagBar-Elems">
                <a href="">
                    <img src={tag1} alt=""/>
                        <span>Dance</span>
                </a>
            </div>

            <div className="TagBar-Elems">
                <a href="">
                    <img src={tag1} alt=""/>
                        <span>Dance</span>
                </a>
            </div>
        </section>
    );
}

export default TagBar;