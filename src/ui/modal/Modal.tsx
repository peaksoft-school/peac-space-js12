import React, { ReactNode } from 'react';
import { Modal } from 'antd';
import scss from './Modal.module.scss';

const ModalTs: React.FC<{
	open: boolean;
	onCancel: () => void;
	children: ReactNode;
}> = ({ open, onCancel, children }) => {
	// if (!open) return null;

	return (
		<>
			<Modal
				open={open}
				onCancel={onCancel}
				footer={null}
				mask={true}
				className={scss.modal}
			>
				{children}
			</Modal>
		</>
	);
};

export default ModalTs;
