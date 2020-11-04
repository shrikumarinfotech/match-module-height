/*
// Plugin Name: Match Module Height
// Description: Match height of selected DOM element/s
// Version: 1.0.0
// Author: Shrikumar Infotech
// Author Email: dev@shrikumarinfotech.com
// Date: 28 October 2020
// Update Date: 28 October 2020
// Contributors: https://github.com/debrajrakshit/jquery-sort-ascending-descending
// License: https://opensource.org/licenses/MIT
// Copyright 2020, https://github.com/shrikumarinfotech/match-module-height
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict';

(function( $ ){
    // Sort in Ascending Order
    $.fn.sortAscending = function(){
        // input array length
        const inputLength = this.length;
        // Make a duplicate of input array
        let copyArray = this;
        let copyArrayLength = copyArray.length;
        // Sorted array to be output
        let sortedArray = [];
        // Buffer Array
        let bufferArray = [];

        // Function to sort from minimum value to maximum
        // Define a minimum
        let minimum;
        function sortAscending(){
            // iterate through each item in the array
            for( let i = 0; i < copyArrayLength; i++ ){
                // set the current item as minimum
                minimum = copyArray[i];// start from first item
                // Iterate through each item
                for( let j = 0; j < copyArrayLength; j++){
                    // Compare it with minimum
                    if(copyArray[j] < minimum){
                        // if there is a lower value then set it as minimum
                        minimum = copyArray[j];
                    }
                }
    
                // If it equal to item being checked
                if(minimum == copyArray[i]){
                    // Push it to sortedArray
                    sortedArray.push(minimum);
                }
                else{
                    // Else push it buffer array
                    bufferArray.push(copyArray[i]);
                }
    
            }

            // Reassign copyArray
            copyArray = bufferArray;
            // Reassign copyArrayLength
            copyArrayLength = bufferArray.length;
            // Clear bufferArray for next iteration
            bufferArray = [];

        }
        
        // Loop until sort is complete
        for( let k = 0; k < inputLength; k++ ){
            sortAscending();
        }
        // Return the sorted array
        return sortedArray;
    }

    // Sort in Descending Order
    $.fn.sortDescending = function(){
        return this.sortAscending().reverse();
    }

    // Match Module Height Function
    $.fn.matchModuleHeight = function(selector){
        // copy the elements with provided selector
        var objects = this;

        // define heights to store
        var heightArray = [];

        // define maximum height
        var maxHeight = 0;

        // iterate through each selector and get the height into heightArray
        $(objects).each(function(index, element){
            heightArray.push($(element).height());
        });

        // Check for function completion and sort
        $(heightArray).promise().done(function(){
            // Sort the array to Descending order
            heightArray = $(heightArray).sortDescending();
            // get the first element(max value)
            maxHeight = heightArray[0];
            // apply the height to all selectors
            $(objects).each(function(index, element){
                $(element).height(maxHeight);
            });
            // return the updated objects
            return objects;
        });

        // If selector object is provided
        if(selector){
            // Get the height of first element
            var heightToApply = $(selector).first().height();
            // Apply height to each element
            this.each(function(index, element){
                $(element).height(heightToApply);
            })
        }
    }
 }( jQuery ));
