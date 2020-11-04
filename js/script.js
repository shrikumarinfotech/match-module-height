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

 jQuery.noConflict();
 jQuery(document).ready(function( $ ){
    // Apply Match Module Height to column-type-1
    $('.module-1 .column-type-1').matchModuleHeight();

    // Apply Match Module Height by target
    $('.module-2 .column-type-1').matchModuleHeight('.target-div');
 });