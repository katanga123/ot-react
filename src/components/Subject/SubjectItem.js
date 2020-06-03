import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import UrlService from '../../services/UrlService'

// import FloatingMenu from './FloatingMenu'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'


const MySwal = withReactContent(Swal)
const Toast = MySwal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
})

const SubjectItem = (props) => {

    const [status, setShowModal] = useState(false);

    const clickShowMenu = () => setShowModal(!status)

    const handleDeleteSubject = () => (

        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            axios.delete(UrlService.subjectUrl() + '/' + props.id, UrlService.configContentType())
                .then(response => {

                    if (result.value) {

                        Toast.fire({
                            icon: 'success',
                            title: 'Deleted successfully'
                        })

                    }

                })
                .catch(error => {
                    Toast.fire({
                        icon: 'warning',
                        title: 'Something wrong!'
                    })
                })



        })

    )

    const floatingMenu = (props) => (
        <div className="absolute bg-white rounded-lg right-0 mt-2 w-20 shadow-lg z-40 flex items-center justify-around">
            <Link to={`subject/edit/` + props.id} className="text-blue-500 hover:text-blue-700 p-2 pl-3 pr-3 border-r-2 border-gray-200">
                <FontAwesomeIcon icon={faPen} />
            </Link>
            <button className="text-red-500 hover:text-red-700 p-2 pr-3" onClick={handleDeleteSubject}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )

    return (
        <div className="ot-subjects bg-white rounded-lg hover:shadow-lg active:shadow-xl">
            <div className="flex justify-between p-6 items-center text-left">
                <div className="title flex items-center">
                    <FontAwesomeIcon icon={faFolder} className="text-gray-600 mr-3" size="2x" />
                    <Link to={'subject/' + props.id} className="text-gray-600 font-semibold">{props.subject}</Link>
                </div>
                <div className="more relative ot-floating-menu">
                    <FontAwesomeIcon icon={faEllipsisV} className="text-lg ot-gray-300 cursor-pointer" onClick={clickShowMenu} />

                    {/* {status ? <FloatingMenu {...props} /> : null} */}
                    {status ? floatingMenu(props) : null}

                </div>
            </div>
        </div >
    )
}

export default SubjectItem