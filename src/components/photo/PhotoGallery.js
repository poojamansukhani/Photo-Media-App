import React from 'react' 
export const PhotoGallery = ({data}) => {
    // const [data,setData]=useState([])
    // useEffect( () => {
    //     fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json")
    //     .then(response => response.json())
    //     .then(data => setData(data.pics))
    // })
    function handleImage(e) {
      alert(e.target.currentSrc);

    }
    
    function posted(){
      alert("Comment Added");
    }
  return (
    <>
      <div className="photo-lists">
                {data.map( el =>(
                    <div key={el.id} className="photo-list">
                      <div className="photo-list-inner">
                          <img src={el.url} alt="" onClick={handleImage}/>
                          <ul className="list-unstyled likes">
                            <li>{el.likes} Like</li>
                            <li>{el.category}</li>
                          </ul>
                          <div className="comment">
                            <input type="text" placeholder="Comment here.."/>
                            <button type="button" onClick={posted}>Post</button>
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