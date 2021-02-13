import './Album.css';
import albumImg from "../Assets/la.jpg";
const Array=[1,2,3,4,5];

const Album = () => {
    return (
        <section className="Album-elems">
            
            {
                Array.map((e) => {
                    return(
                        <>
                        <h1></h1>
                        <div className="Album-Img">
                            <img src={albumImg} alt=""/>
                        </div> 
                        </>
                    )
                })
            }
        </section>
    );
}
 
export default Album;