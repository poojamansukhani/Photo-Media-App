import React,{useState, useEffect} from 'react';
import Comment from './Comment';
export const PhotoGallery = ({data}) => {
  const [url, setUrl]=useState([]);
    // const [data,setData]=useState([])
    // useEffect( () => {
    //     fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json")
    //     .then(response => response.json())
    //     .then(data => setData(data.pics))
    // })
    // function handleImage(e) {
    //   alert(e.target.currentSrc);

    // }
    
  return (
    <>
      <div className="photo-lists">
                {data.map( el =>(
                    <div key={el.id} className="photo-list">
                      <div className="photo-list-inner">
                          <img src={el.url} alt="" onClick={() => setUrl(el.url)}/>                              {/* (<div className="popUp"  >
                               <img src={url} alt=""/>
                             </div>) */}
                             <div>
                                {
                                    url.length===0? <div>
                                  </div> : <div className="popUp"  onClick={() => setUrl([])}>
                                    <img src={url} alt=""/>
                                  </div>
                                }
                               
                            </div>
                          
                          <ul className="list-unstyled likes">
                            <li>{el.likes} Like</li>
                            <li>{el.category}</li>
                          </ul>
                          <Comment/>
                          <ul className="prev-comments list-unstyled">
                            {el.comments.map(cmt => (
                             <li>{cmt}</li>
                            ))}  
                          </ul>
                        </div>
                    </div>
                ))}
     </div>
    </>
  );
};