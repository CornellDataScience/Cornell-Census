import "../../static/styles/Comp3.css"
import React, { useState, useEffect } from 'react';

const Comp3 = () => {
  let [professors=["Michael Clarkson", "David Gries", "Walker White"], setProfessors] = useState();
  const [reviews=["Love Him!", "He is amazing!", "He is my favorite professor!!"], setReviews] = useState();
  useEffect(() => {
    fetch('/all_professors_home').then(res => res.json()).then(data => {
      const AS=data.all_professors_home
      console.log(AS);
      setProfessors(AS.map((name) => <strong><p style={{fontSize: "40px"}}>{name[0]}</p></strong>));
      console.log(professors);
      setReviews(AS.map((review) => <p style={{fontSize: "20px"}}>{review[2]}</p>));
    });

  }, []);
  return (
    <div className="outline">
      <div className="review1">
        <strong><p className="prof">{professors[0]}</p></strong>
        <p className="reviewText">{reviews[0]}</p>
        <h2 className="author">-Anonymous</h2>
      </div>
      <div className="review2">
      <strong><p className="prof">{professors[1]}</p></strong>
        <p className="reviewText">{reviews[1]}</p>
        <h2 className="author">-Anonymous</h2>
      </div>
      <div className="review3">
      <strong><p className="prof">{professors[2]}</p></strong>
        <p className="reviewText">{reviews[2]}</p>
        <h2 className="author">-Anonymous</h2>
      </div>
    </div>
  )
}

export default Comp3;
