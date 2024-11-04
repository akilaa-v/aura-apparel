import { useEffect, useRef } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

const Modal = ({ children, open, onClose }) => {
	const dialogRef = useRef();

	useEffect(() => {
		let modal = dialogRef.current;
		if (open) {
			modal.showModal();
		}
		return () => modal.close();
	}, [open]);

	return createPortal(
		<dialog ref={dialogRef} className="modal-container" onClose={onClose}>
			{children}
		</dialog>,
		document.getElementById("modal")
	);
};

export default Modal;
