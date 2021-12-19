import { useState } from "react";

export const useInfiniteScroll = () => {

   const [pageNumber, setPageNumber] = useState(1);

   // Infinite Scroll

   const infiniteScroll = () => {

      //Setting timeout to avoid to much requests to server
      setTimeout(() => {
         window.onscroll = () => {

            //Checking if user scrolled to the bottom and next page exists.

            if (window.innerHeight + document.documentElement.scrollTop >= Math.max(document.body.scrollHeight, document.documentElement.offsetHeight)) {
               setPageNumber(pageNumber + 1);
            }
         }
      }, 500)
   };

   return [pageNumber, infiniteScroll, setPageNumber];

}