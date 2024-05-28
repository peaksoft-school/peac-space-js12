import { useGetSliderNotifiQuery } from '@/src/redux/api/slider';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import scss from './Notifications.module.scss';

const NotificationsSlider = () => {
	const { data, isLoading } = useGetSliderNotifiQuery();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		}
	});

	function Arrow(props: {
		disabled: boolean;
		left?: boolean;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onClick: (e: any) => void;
	}) {
		const disabled = props.disabled ? ' arrow--disabled' : '';
		return (
			<svg
				onClick={props.onClick}
				className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabled}`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				{props.left ? (
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				) : (
					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
				)}
			</svg>
		);
	}
	return (
		<div>
			<div>
				{isLoading ? (
					<p>Loading . .</p>
				) : (
					<>
						<div ref={sliderRef} className={`keen-slider ${scss.bar_slider}`}>
							{data?.map((item, index) => (
								<div
									key={index}
									className={`keen-slider__slide ${scss.aside_slider}`}
								>
									<img src={item.img} alt="" />
								</div>
							))}
						</div>
					</>
				)}
			</div>
			{loaded && instanceRef.current && (
				<>
					<Arrow
						left
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						onClick={(e: any) =>
							e.stopPropagation() || instanceRef.current?.prev()
						}
						disabled={currentSlide === 0}
					/>
					<Arrow
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						onClick={(e: any) =>
							e.stopPropagation() || instanceRef.current?.next()
						}
						disabled={
							currentSlide ===
							instanceRef.current.track.details.slides.length - 1
						}
					/>
				</>
			)}
		</div>
	);
};

export default NotificationsSlider;
