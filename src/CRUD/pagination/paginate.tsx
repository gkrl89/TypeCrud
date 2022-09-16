import React, { FC } from "react";
import "../empdetails.css";
import { useState } from "react";

interface PaginProps {
  postsperPage: number;
  totalPosts: number;
  currentPage:number;
  paginate: (arg: number) => void;
  prev: () => void;
  next: () => void;
}

const Paginate: React.FC<PaginProps> = ({
  postsperPage,
  totalPosts,
  currentPage,
  paginate,
  prev,
  next,
}) => {
  const pageNumber = [];


  for (let i = 1; i <= Math.ceil(totalPosts / postsperPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="list">
      <nav>
        <ul className="pagination">
          <a  href="#" onClick={()=>{prev()}} className="page-link">
            Prev 
          </a>
          {pageNumber.map((number: number) => (
            

            <li key={number} className={currentPage == number ? 'active' : 'page-item'}  >
                
              <a 
                onClick={() => { 
                  paginate(number); 
                }}
                href="#" 
                className="page-link"
              >
                {number}
                
              </a>
            </li>
          ))}

          <a href="#" onClick={()=>{next()}} className="page-link">
            Next
          </a>
        </ul>
      </nav>
    </div>
  );
};
export default Paginate;
