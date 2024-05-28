import ModalTs from '@/src/ui/modal/Modal';
import scss from './Notifications.module.scss';
import { useState } from 'react';
import { useGetMainPageQuery } from '@/src/redux/api/mainPage';
import { Point, Smile } from '@/src/assets/icons';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import NotificationsSlider from './NotificationsSlider';

const Notifications = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { data: datas } = useGetMainPageQuery();
	const [inputStr, setInputStr] = useState('');
	const [showPicker, setShowPicker] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleGetEmoji = (event: any) => {
		setInputStr((prevInput) => prevInput + event.native);
		setShowPicker(false);
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const data2 = [
		{
			userImg:
				'https://s3-alpha-sig.figma.com/img/c2e3/da27/27ce9a1c90f33014c90379b00de8ed9f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLR1RUrbiQvjXn8C-sRHLByudUC6p8v4jzs1U92rIvcov1KwQ5bsiuCAnBsRy0kb5LSWqhDFZ2-j93Wbvafs44GrnCGQmbG3vqcEY-O-WgPe2fkL66pKQ24nRa2by3qt7EM9~bcqjsoiLkLQ9yUc-lVIUnUv6MT7yBApal-8duONBHGCSKlgdaoFfJFK8vYW2Lxd9LXfvub6KaG8CY-A2AkSak7Dyqs7im4xT9NPetMmablKvjsiICy4dNguvyrkeJkjxP6i9JKaCngHdQiMNR-Chk2QLHTlI6iFV6w93bSLWEiT~Xq0vAM-AT8ib7Xib-sQoMXqN24wD6zx9sQ8qQ__',
			title: 'Yaaziza',
			comment: 'понравился ваш комментарий:“очень понравилась песня”',
			time: '21  мин. назад',
			postImg:
				'https://s3-alpha-sig.figma.com/img/3f5a/40e2/41af36a7fcc1e6d0f6a812a65fa52a1a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5bok0sxu1Xu3P2QQGgU-dtyunLeOKlbxUt8SNPn3D4~L-kYRS1cYJlluo1xu9rStO41bJhILIJ-HJypH7zyVRLj7GPalqaowNf6S2bytqjWewbeUyToCOTM947GzcyCMQsIb18FvnAnThY0LEaeY4GpeG1CQS-MVy7aVfXhQKh6ahpRowzoJeCIIwxx6svIAx0lDB1SG8~A8f9ExehGNfZ3t44JofmWriZledw-3YiJ~EjK2O0ROv7MnihvAAj5y6l-BdFKDSFJmAG1t8iIBSOY2BY6i2E2dd65-kBE2TFB9kpmhwAhnRV9xN8cSq2pncn2HpBhS~qxsQ2iB8pazA__'
		},
		{
			userImg:
				'https://s3-alpha-sig.figma.com/img/4eb1/4b02/61802b25e543f0595b8c08e4b4902fcf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YuawBKNFreL9IuFg9w-yIsQ6J3gNxDiIzhfvzoytEC-y0InJ9EBqX9bOWqkOBfRk-Dd9yJZDJUKhlCZJHz2Y1sYAw52ixm3Kvo62GnlzNGvc7~FFd2xjX6R7kinSiF~1ON47eDiDySa2OG1glKL8jy832bMOjc6v4N35~rtuo2d8CLHZQX1vKu8TY1OXnYn7HQcyEMn7glw-vOfWJnVC6rpPv~qvdIWRNOTsNpLj7AeotCjD09h7VofRnHPhtYRXnRuRn5HbXhyKW9QoKlSqGpajG7msY2jRdcv0dKVbFLo4MPhEDlljd6FSRvQ2BPQqpGtHB9IFL9OaKzRIrz7-rA__',
			title: 'Bolotov',
			comment: 'понравилась ваша публикация:',
			time: '21  мин. назад',
			postImg:
				'https://s3-alpha-sig.figma.com/img/90b6/6318/ba3b4f15a85b13d7edbf43fef661e60b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pTs7wGVqo-0kEJ1EXZsaCSYjPMRVhNpm95e3ELcQ7OAo3M-4FWCB8~NsR-ZbxCPXHP9CHi5scbp9Xxl47PCQIRO9hbLL~zTn~EH5h18syvyjo~9ivyk4Vi3psnMDQ~mlHeQHm-w0mlHtnwBRGSxaRaLwd9-qDX8TSruxcXWcLy1Df6hLg9L-hMq1Z5FMS9Hx6qMN3L6fEcpt1hAxIQEaTpAN~j7J02LKaE36mYTeQ9FESPsP5G8Mb1CZ5v5fi2NkUjS-l4JCutEgbsbriMHySGIW~zvfzCNlm2y0JME6YhKghzg5bM-Bpri17ATTYr8uBSmvY-oj~uM~mqIdoBYjIw__'
		},
		{
			userImg:
				'https://s3-alpha-sig.figma.com/img/9265/f6e3/e22a4d011fdf9bee1bc447fd54300962?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ixizWxy4OxxFNxER38asKctXkGR~7lMgpTwFut06x~FF0WSTlMnsc0TggVBKzwsRN7X4nBXVc8HKM4F950zrJq7X5BviADflWfr-3mL5~~JdqbhpvaSuts84OGT24zZj4bWO4r4nUowd1kdQb8xbswss4du7-8Ai3dSSEotWJTM-Ej-y73GzTztjOqg9dDRVfucNRQRk9dQRlP522A9Fa2YAG9z2tdpURK4eAYg-p0SbroHzir2ipVXKD63V7GoU0x4pWG5O1aCuMl7KmnSPW5Plt64HbshPbLdHuPkIQoeLx3jv0Xachg6wOK7nTd6GUk1uEvHs6eDM0ueMqaoh8g__',
			title: 'Padme',
			comment: 'хочет с вами подружиться',
			time: '21  мин. назад'
		}
	];
	return (
		<div className={scss.notifi}>
			<div className={scss.aside}>
				<div className={scss.head}>
					<h2>Уведомления</h2>
				</div>
				<div className={scss.bar}>
					{data2.map((item) => (
						<>
							<div className={scss.box}>
								<div className={scss.comment}>
									<div className={scss.start}>
										<img className={scss.user_img} src={item.userImg} alt="" />
										<div>
											<h4>{item.title}</h4>
											<p className={scss.text}>{item.comment}</p>
										</div>
									</div>
									<p style={{ color: 'gray', fontSize: '10px' }}>{item.time}</p>
								</div>
								<img onClick={showModal} src={item.postImg} alt="" />
								<>
									<ModalTs open={isModalOpen} onCancel={handleCancel}>
										<div className={scss.tool_tip}>
											<div className={scss.open_modal}>
												<div className={scss.slider}>
													<NotificationsSlider />
												</div>
												<div className={scss.aside_bar}>
													<div>
														{datas?.map((item) => (
															<div>
																<div className={scss.user_data}>
																	<div className={scss.row}>
																		<img src={item.avatar} alt="" />

																		<div>
																			<h4>{item.nicname}</h4>
																			<p>{item.localtion}</p>
																		</div>
																	</div>

																	<Point onClick={() => console.log('hello')} />
																</div>
															</div>
														))}
													</div>
													<div className={scss.input_smile}>
														<Smile
															onClick={() => setShowPicker((val) => !val)}
														/>
														<input
															type="text"
															placeholder="Добавить комментарий..."
															value={inputStr}
															onChange={(e) => setInputStr(e.target.value)}
														/>
														{showPicker && (
															<Picker
																data={data}
																onEmojiSelect={handleGetEmoji}
																theme={'light'}
															/>
														)}
													</div>
												</div>
											</div>
										</div>
									</ModalTs>
								</>
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Notifications;
