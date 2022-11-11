function Modal({ box, closeOverAlbum }) {
  console.log('Modal', box);

  return (
    <div className={`overAlbum overAlbum${box.id}`}>
      <div className="overAlbum_text">{box.text}</div>
      <div className="overAlbum_photos">{box.album}</div>
      <div className="closeAlbum" onClick={closeOverAlbum}>
        x
      </div>
    </div>
  );
}

export default Modal;
