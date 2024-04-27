import scss from './Login.module.scss';
import peakSpace from '../../../../assets/peakSpace.png';
import { useState } from 'react';
import { Input, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { GoogleImg } from '@/src/assets/icons';
import { Link } from 'react-router-dom';
import line from '../../../../assets/line.svg';
import CustomButtonBold from '@/src/UI/customButton/CustomButtonBold';
import { Controller, useForm } from 'react-hook-form';

interface ErrorObject {
	message: string;
	password: string;
	email: string;
}

const Login = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const {
		control,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ErrorObject>({ mode: 'onBlur' });

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = (data: any) => {
		console.log(data);
		reset();
	};

	return (
		<div className={scss.Login}>
			<div className={scss.section}>
				<div className="container">
					<div className={scss.aside}>
						<img src={peakSpace} alt="" />
						<form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								rules={{ required: 'Пожалуйста, введите ваш email.' }}
								render={({ field }) => (
									<Input
										className={scss.inputPassword}
										{...field}
										placeholder="Номер телефона или email"
										type="email"
										style={{
											borderColor: errors.email ? 'red' : '',
											backgroundColor: errors.email
												? 'rgba(255, 0, 0, 0.122)'
												: '',
											outline: 'none'
										}}
										onFocus={(e) => {
											e.target.style.borderColor = '';
											e.target.style.backgroundColor = '';
										}}
									/>
								)}
							/>
							{errors?.email && (
								<span className={scss.errorEmail}>{errors.email.message}</span>
							)}
							<Controller
								name="password"
								control={control}
								defaultValue=""
								rules={{ required: 'Пароль обязателен к заполнению' }}
								render={({ field }) => (
									<Input.Password
										{...field}
										iconRender={(visible) =>
											visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
										}
										placeholder=" Пароль"
										className={scss.inputPassword}
										visibilityToggle
										type={showPassword ? 'text' : 'password'}
										style={{
											borderColor: errors.password ? 'red' : '',
											backgroundColor: errors.password
												? 'rgba(255, 0, 0, 0.122)'
												: '',
											outline: 'none'
										}}
										onFocus={(e) => {
											e.target.style.borderColor = '';
											e.target.style.backgroundColor = '';
										}}
									/>
								)}
							/>
							{errors.password && (
								<span className={scss.errorPassword}>
									{errors?.password?.message || 'error!'}
								</span>
							)}

							<Checkbox
								checked={showPassword}
								onChange={togglePasswordVisibility}
							>
								<p className={scss.text}>Сохранить вход</p>
							</Checkbox>
							<CustomButtonBold children="Войти" type="submit" />
							<div className={scss.googleOut}>
								<GoogleImg
									className={scss.GoogleImg}
									onClick={() => togglePasswordVisibility}
								/>
								<Link to="https://www.google.com/account/about/">
									Войти через Google
								</Link>
							</div>
							<Link className={scss.link} to="/auth/forgetPassword">
								Забыли пароль
							</Link>
							<div className={scss.lines}>
								<img src={line} alt="#" /> <p style={{ color: 'gray' }}>или</p>
								<img src={line} alt="#" />
							</div>
						</form>
						<Link to="/auth/registration">Зарегистрироваться</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
