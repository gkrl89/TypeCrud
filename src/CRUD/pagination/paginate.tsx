import React, { FC } from "react";
import "../empdetails.css";

interface PaginProps {
    postsperPage: number,
    totalPosts: number,
    paginate: (arg: number) => void
}

const Paginate: React.FC<PaginProps> = ({ postsperPage, totalPosts, paginate }) => {
    const pageNumber =  [];

    for(let i =1; i<= Math.ceil(totalPosts / postsperPage); i++){
    pageNumber.push(i);}

    return(
        <div className="list">
<nav>
    <ul className="pagination">
        {pageNumber.map((number:number)=>(
            <li key={number} className="page-item">
                <a  onClick = {()=>{paginate(number)}}href= "#" className="page-link">
                    {number}
                </a>
            </li>
        ))}
    </ul>
</nav>
</div>
    )
}
export default Paginate;