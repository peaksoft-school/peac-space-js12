import { FC } from 'react';

interface plusIconProps {
	className: string;
	onClick: () => void;
}

const PlusIcon: FC<plusIconProps> = ({ className, onClick }) => {
	return (
		<svg
			className={className}
			onClick={onClick}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 0C4.47719 0 0 4.47719 0 10C0 15.5231 4.47719 20 10 20C15.5231 20 20 15.5231 20 10C20 4.47719 15.5231 0 10 0ZM10 18.7697C5.17531 18.7697 1.25 14.8247 1.25 9.99996C1.25 5.17527 5.17531 1.24996 10 1.24996C14.8247 1.24996 18.75 5.17529 18.75 9.99996C18.75 14.8246 14.8247 18.7697 10 18.7697ZM14.375 9.375H10.625V5.625C10.625 5.28 10.345 5 10 5C9.655 5 9.375 5.28 9.375 5.625V9.375H5.625C5.28 9.375 5 9.655 5 10C5 10.345 5.28 10.625 5.625 10.625H9.375V14.375C9.375 14.72 9.655 15 10 15C10.345 15 10.625 14.72 10.625 14.375V10.625H14.375C14.72 10.625 15 10.345 15 10C15 9.655 14.72 9.375 14.375 9.375Z"
				fill="black"
				fill-opacity="0.7"
			/>
		</svg>
	);
};

export default PlusIcon;
