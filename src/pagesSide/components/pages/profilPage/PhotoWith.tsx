import { useGetUserPhotoQuery } from '@/src/redux/api/photoWuthUser';
import scss from './Style.module.scss';
const PhotoWith = () => {
	const { data, isLoading } = useGetUserPhotoQuery();
	return (
		<div className={scss.photo}>
			{isLoading ? (
				<>
					<h1>Loading . . .</h1>
				</>
			) : (
				<>
					{data?.map((item) => (
						<div className={scss.photoUser} key={item._id}>
							<img src={item.img} alt="" />
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default PhotoWith;