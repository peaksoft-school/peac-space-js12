import scss from './Style.module.scss';
import { useGetFavouritesQuery } from '@/src/redux/api/editPage/favourites';
const Favourites = () => {
	const { data, isLoading } = useGetFavouritesQuery();

	return (
		<div className={scss.favorite}>
			{isLoading ? (
				<>
					<h1>Loading . . .</h1>
				</>
			) : (
				<>
					{data?.map((item) => (
						<div className={scss.widget} key={item._id}>
							<img src={item.img} alt="" />
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default Favourites;
