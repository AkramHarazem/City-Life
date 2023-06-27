import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AllRes.css";
import { useTranslation } from "react-i18next";
import FeedBack from "../FeedBack/FeedBack";
import { Link } from "react-router-dom";
import FeedBackPopSuccess from "../FeedBack/FeedBackPopSuccess";
import i18next, { t } from 'i18next'


export default function Restaurants() {
  // States
  const [message, setMessage] = useState('')
  const { AllRestaurants } = useContext(DataContext);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const handleShowImg = () => {
    setShowModal(!showModal);
  };
  const [selectedImage, setSelectedImage] = useState("");
  const [showImg, setShowImg] = useState("");
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImg(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const handleCloseImg = () => {
    setSelectedImage("");
    setShowImg(false);
    document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
  };



  // Functions
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    <div
        style={{
          direction: i18next.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
      <div className='container-fluid lightGreyBg py-3'>
        <h2 className='lightGreenColor text-center m-0'>{t("All Restaurants")}</h2>
      </div>
      <div className='row gy-4 p-0 m-0 w-75  mx-auto'>
        {/* Card */}
        {AllRestaurants.map((res) =>
          <div key={res.id} className='shadow-sm col-md-5 mx-auto px-0 overflow-hidden rounded-top-3'>
            <div className=' text-center '>
              {/* Images */}
              <div className="d-flex ">
              <div
                className="clickable-image"
                onClick={() => handleImageClick(res.img2)}
              >
                <img className="imgHover d-block w-100 rounded-top-3 my-0" style={{ height: "200px" }} src={res.img1} alt="img 1" />
                </div>

                <div
                className="clickable-image"
                onClick={() => handleImageClick(res.img2)}
              >
                <img className="2 d-block w-100 rounded-top-3 my-0" style={{ height: "200px" }} src={res.img3} alt="img 3" />
              </div>
              </div>


              {showImg && (
        <div className="modal-bgg" onClick={handleCloseImg}>
          <div className="modal-contentt">
            <img
              className="modal-imagee"
              src={selectedImage}
              alt="Modal"
            />
          </div>
        </div>
      )}
              {/* Header */}
              <div className='container pt-3'>
                <h4 className='text-center mainColor' >{t(res.name)}</h4>
                <p className=''>{t(res.overview)}</p>
              </div>
              {/* Data */}
              <div className='lightGreenBackgroudColor text-white  rounded-bottom-3'>
                <div className='d-flex justify-content-around align-items-center py-3 container'>
                  <p className='m-0'> {res.Rating} <i className="fa-solid fa-star" style={{ color: '#C3801B' }}></i> </p>
                  <p className='m-0'><Link to={res.location} className='text-decoration-none text-white'> {t("Location")} </Link></p>
                  <Link to={res.website} className='text-white text-decoration-none'>{t("Website")}</Link>
                  <Link className="text-decoration-none text-white" onClick={() => { const whatsappURL = `https://wa.me/${res.number}`; window.location.href = whatsappURL; }} ><p className='m-0'> {t("Phone")} </p></Link>
                </div>
                <div className='text-center pb-3 '>
                  <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => {
                    handleShowModal()
                    setMessage(res.name)
                  }}
                    data-whatever="@mdo" className="btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor" >
                    {t("Feedback")}
                  </button>
                </div>
              </div>
            </div>
          </div>)}
      </div>

      {/* Feedback Modal*/}
      <div className="modal fade " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {t("Leave your message")}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className="modal-body">

              <FeedBack message={message} ></FeedBack>
            </div>
          </div>
        </div>
      </div>
      <FeedBackPopSuccess></FeedBackPopSuccess>

      {/* Modal Submit FeedBack */}
      {/* <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center">
              <i className="fa-sharp fa-regular fa-circle-check text-center" style={{ color: "#14992a", fontSize: 80 }} ></i>
              <p className="my-2 fs-4 fw-bolder">
                {t("Thanks, We received your feedback!")}
              </p>
            </div>

          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}