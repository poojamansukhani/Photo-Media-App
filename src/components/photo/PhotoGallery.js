import React,{useState, useEffect} from 'react' 
export const PhotoGallery = ({data}) => {
    // const [data,setData]=useState([])
    // useEffect( () => {
    //     fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json")
    //     .then(response => response.json())
    //     .then(data => setData(data.pics))
    // })
  return (
    <>
      <div className="photo-lists">
                {data.map( el =>(
                    <div key={el.id} className="photo-list">
                      <div className="photo-list-inner">
                          <img src={el.url}/>
                          <ul className="list-unstyled likes">
                            <li>{el.likes} Like</li>
                            <li>{el.category}</li>
                          </ul>
                          <div className="comment">
                            <input type="text"/>
                            <button>Post</button>
                          </div>
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