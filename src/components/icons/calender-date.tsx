import React from 'react';
import type { SVGProps } from 'react';

const CalenderDate = (props: SVGProps<SVGSVGElement>) =>{
	return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75zm-5.505 1.695q1 0 1.587.532q.585.532.586 1.441q0 .522-.269.93a1.86 1.86 0 0 1-.732.642q.557.26.857.708q.3.45.3 1.016q0 .937-.635 1.487q-.635.549-1.689.549q-1.06 0-1.697-.552q-.637-.551-.637-1.484q0-.572.303-1.026q.303-.453.85-.698a1.85 1.85 0 0 1-.726-.642a1.66 1.66 0 0 1-.266-.93q0-.908.586-1.44q.585-.533 1.582-.533m-3.775.074v7.133H9.038v-5.708l-1.743.596v-1l2.773-1.021zm3.77 3.96q-.517 0-.827.322q-.31.323-.31.854q0 .523.305.835q.305.313.842.313t.837-.303t.3-.845q0-.526-.314-.852q-.315-.325-.833-.325m.005-3.081q-.454 0-.718.285t-.263.779q0 .488.266.776q.265.288.72.288t.72-.288q.267-.287.266-.776q0-.465-.268-.764q-.27-.3-.723-.3M17.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75"></path></svg>);
}
export default CalenderDate;