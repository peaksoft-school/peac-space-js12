/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	useGetUserPublicQuery,
	usePostUserPublicMutation
} from '@/src/redux/api/userPublic';
import scss from './Style.module.scss';
import { useRef, useState } from 'react';

import { IconCirclePlus } from '@tabler/icons-react';
import { IconDots } from '@tabler/icons-react';
import { IconHeartFilled } from '@tabler/icons-react';
import ModalTs from '@/src/ui/modal/Modal';
import SliderFoto from './SliderFoto';

const PublicFotos = () => {
	const { data: data = [], isLoading } = useGetUserPublicQuery();
	const [postRequest] = usePostUserPublicMutation();
	const [, setHidePhoto] = useState(false);
	const [image, setImage] = useState<string>('');
	const fileInputRef = useRef<HTMLInputElement>(null);

	// !modal
	const [isModal, setIsModal] = useState(false);

	const openModal = () => {
		setIsModal(true);
	};
	const closeModal = () => {
		setIsModal(false);
	};

	// !
	const [showMessage, setShowMessage] = useState<any>({});
	const ShowMessageAgain = (id: any) => {
		setShowMessage((prevState: { [x: string]: string }) => ({
			...prevState,
			[id]: !prevState[id]
		}));
	};

	// !
	const handleButtonClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	// !
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			setHidePhoto(true);
			reader.onload = (e) => {
				if (e.target) {
					setImage(e.target.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	// !
	const handleAddPhoto = async () => {
		try {
			let newData;
			if (
				fileInputRef.current &&
				fileInputRef.current.files &&
				fileInputRef.current.files.length > 0
			) {
				const file = fileInputRef.current.files[0];
				const reader = new FileReader();
				reader.onload = (e) => {
					if (e.target) {
						setImage(e.target.result as string);
					}
				};
				reader.readAsDataURL(file);
				newData = {
					img: image
				};
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				await postRequest(newData as any).unwrap();
			} else {
				return;
			}
			setImage('');
		} catch (error) {
			console.error('Error adding photo:', error);
		}
	};

	return (
		<div className={scss.content}>
			{isLoading ? (
				<h1>Loading . . .</h1>
			) : (
				<>
					<div className={scss.bar}>
						<div onClick={handleButtonClick}>
							<IconCirclePlus color=" #000000B2" stroke={1} />
							<p style={{ textAlign: 'center' }}>
								Добавить <br /> фото
							</p>
						</div>
					</div>
					{isLoading ? (
						<>
							<h1>loading...............</h1>
						</>
					) : (
						<>
							{data?.map((item) => (
								<div className={scss.section} key={item.id}>
									<img
										onClick={openModal}
										src={item.img}
										alt=""
										className={scss.image}
									/>
									<button onClick={() => ShowMessageAgain(item.id)}>
										<IconDots />
									</button>
									<div
										className={
											showMessage[item.id]
												? scss.showMessage
												: scss.isNotMessage
										}
										onClick={() => ShowMessageAgain(item.id)}
									>
										<h4>заблокировать пользователя</h4>
										<span></span>
										<p>удалить пользователя</p>
										<span></span>
										<p>удалить фото</p>
									</div>

									<ModalTs open={isModal} onCancel={closeModal}>
										<div className={scss.slider}>
											<SliderFoto />
											<IconHeartFilled color="white" />
								
										</div>
									</ModalTs>
								</div>
							))}
						</>
					)}
				</>
			)}

			<input
				placeholder="text"
				type="file"
				ref={fileInputRef}
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>

			<button onClick={handleAddPhoto}>Добавить фото</button>
		</div>
	);
};

export default PublicFotos;
