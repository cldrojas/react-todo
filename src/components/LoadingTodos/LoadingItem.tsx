import React from 'react'

const LoadingItem = () => {
	return (
		<li
			className="flex justify-around items-center [list-style:none] min-h-[40px] relative mx-0 my-2 px-2 py-0 rounded-[10px] border border-[#ccc] 
    after:content-[''] after:w-2.5 after:h-10 after:absolute  after:[background:linear-gradient(_90deg,rgba(2,0,36,0)_0%,rgba(0,212,255,1)_50%,rgba(74,74,78,0)_100%_)] 
    after:blur-[10px] after:left-0 after:animate-loading"></li>
	)
}

export default LoadingItem
