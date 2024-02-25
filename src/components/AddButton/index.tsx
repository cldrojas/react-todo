export function AddButton({ onClick, isModalOpen }: AddButton) {
	return (
		<button
			className="pt-2 p-4 size-[4.5rem] font-extrabold text-[52px] 
				shadow-[rgba(0,0,0,0.35)_0px_5px_15px,0_6px_6px_rgba(0,0,0,0.23)]
				text-[#00d8ff] bg-[#3c3c3c] cursor-default flex justify-center
				items-center fixed [outline:none] rounded-[100%] border-[none] 
				right-10 bottom-10 hover:cursor-pointer"
			hidden={isModalOpen}
			onClick={onClick}>
			+
		</button>
	)
}
